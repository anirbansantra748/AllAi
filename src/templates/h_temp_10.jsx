import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Leaf, 
  Flame, 
  DollarSign, 
  Clock, 
  Heart, 
  Compass, 
  Sliders, 
  Layers, 
  TrendingUp, 
  ChevronRight, 
  ShoppingBag, 
  Award, 
  ChevronDown, 
  Info,
  Droplet,
  Shuffle,
  ThumbsUp,
  X
} from 'lucide-react';

// Insert Premium Fonts (Playfair Display for elegant headings, Plus Jakarta Sans for UI text)
const styleInjection = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
  
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: #FBF9F4;
    color: #3D352E;
  }
  
  .font-serif {
    font-family: 'Playfair Display', serif;
  }
  
  /* Smooth organic shadow system */
  .organic-shadow-lg {
    box-shadow: 0 30px 60px -15px rgba(112, 94, 70, 0.12), 0 10px 20px -5px rgba(112, 94, 70, 0.06);
  }
  
  .organic-shadow-sm {
    box-shadow: 0 10px 25px -10px rgba(112, 94, 70, 0.08);
  }

  .inset-shadow-soft {
    box-shadow: inset 0 2px 4px 0 rgba(112, 94, 70, 0.04);
  }

  /* Soft floating animation */
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(3deg); }
  }

  @keyframes float-reverse {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(8px) rotate(-4deg); }
  }

  .animate-float-1 {
    animation: float-slow 8s ease-in-out infinite;
  }

  .animate-float-2 {
    animation: float-reverse 10s ease-in-out infinite;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #F5F2EB;
  }
  ::-webkit-scrollbar-thumb {
    background: #D9CDB8;
    border-radius: 10px;
  }
`;

export default function App() {
  // Custom states for interactive dashboard
  const [selectedPasta, setSelectedPasta] = useState('reoni');
  const [cookTemp, setCookTemp] = useState(96); // 90°C to 100°C
  const [sauceDensity, setSauceDensity] = useState(65); // 0 to 100
  const [herbLevel, setHerbLevel] = useState(75); // 0 to 100
  const [garnishLeaves, setGarnishLeaves] = useState([
    { id: 1, top: '12%', left: '42%', scale: 1.1, rotation: 12 },
    { id: 2, top: '65%', left: '33%', scale: 0.9, rotation: -45 }
  ]);
  const [activeTab, setActiveTab] = useState('atelier');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [cartCount, setCartCount] = useState(0);

  // Pasta datasets matching the gorgeous layouts in the illustration
  const pastas = {
    sonnets: {
      name: 'Sonnets Semolina',
      subtitle: 'Delectable fine semolina granules carefully harvested from southern slopes.',
      cookTime: 12,
      calories: 280,
      protein: 11,
      cost: 4.80,
      carbonScore: 'A',
      carbonNum: 120,
      accentColor: '#E8C37B',
      rating: 4.8,
      ingredients: ['Durum Semolina', 'Spring Water', 'Golden Amber Starch'],
      visualType: 'stars'
    },
    torrente: {
      name: 'Torrente Ruote',
      subtitle: 'Cascading curls designed to lock in velvet emulsified reductions.',
      cookTime: 16,
      calories: 340,
      protein: 13,
      cost: 6.20,
      carbonScore: 'A+',
      carbonNum: 95,
      accentColor: '#D9A036',
      rating: 4.9,
      ingredients: ['Stone-milled Khorasan Wheat', 'Egg Yolk Filaments'],
      visualType: 'curls'
    },
    photys: {
      name: 'Photys Cavatelli',
      subtitle: 'Traditional hand-rolled shells with dense ribbing for maximum herb adhesion.',
      cookTime: 22,
      calories: 410,
      protein: 15,
      cost: 8.50,
      carbonScore: 'B',
      carbonNum: 210,
      accentColor: '#8E5E38',
      rating: 4.7,
      ingredients: ['Farro Monococcum', 'Mountain Spring Infusion'],
      visualType: 'shells'
    },
    reoni: {
      name: 'Reoni Tagliolini',
      subtitle: 'Extraordinary thin ribbon filaments, masterfully spun for fragile butter broths.',
      cookTime: 20,
      calories: 320,
      protein: 14,
      cost: 7.10,
      carbonScore: 'A',
      carbonNum: 110,
      accentColor: '#E6BC5C',
      rating: 4.9,
      ingredients: ['Double Zero Flour', 'Duck Egg Emulsion', 'Saffron Threads'],
      visualType: 'ribbons'
    }
  };

  const current = pastas[selectedPasta];

  // Dynamic calculations based on sliders + active pasta
  const dynamicCookTime = Math.round(current.cookTime * (cookTemp / 96));
  const dynamicCalories = Math.round(current.calories * (1 + (sauceDensity - 50) / 250));
  const dynamicProtein = Math.round(current.protein * (1 + (sauceDensity - 50) / 400));
  const dynamicCost = (current.cost * (1 + (herbLevel - 50) / 150) + (sauceDensity / 100) * 1.5).toFixed(2);

  // Garnish interaction helper
  const addGarnishLeaf = () => {
    const id = Date.now();
    const randomTop = Math.floor(Math.random() * 60) + 15 + '%';
    const randomLeft = Math.floor(Math.random() * 50) + 25 + '%';
    const randomScale = (Math.random() * 0.4 + 0.8).toFixed(2);
    const randomRotation = Math.floor(Math.random() * 360);
    
    setGarnishLeaves([...garnishLeaves, { id, top: randomTop, left: randomLeft, scale: parseFloat(randomScale), rotation: randomRotation }]);
    triggerToast("🍃 Premium Basil Garnish sprinkled onto your plate!");
  };

  const clearGarnish = () => {
    setGarnishLeaves([]);
    triggerToast("Plate reset cleanly.");
  };

  const triggerToast = (msg) => {
    setFeedbackMessage(msg);
    setTimeout(() => {
      setFeedbackMessage('');
    }, 3500);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    triggerToast(`🛒 Added 1x [${current.name}] custom compilation to your gourmet hamper!`);
  };

  return (
    <div className="min-h-screen relative flex flex-col selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      <style>{styleInjection}</style>

      {/* FIXED TOAST NOTIFICATION */}
      {feedbackMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#3D352E] text-[#FBF9F4] py-3 px-6 rounded-2xl shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-0 animate-bounce">
          <Sparkles className="w-5 h-5 text-amber-300" />
          <span className="text-sm font-medium">{feedbackMessage}</span>
          <button onClick={() => setFeedbackMessage('')} className="hover:text-amber-200 ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* TOP FLOATING DECORATIONS */}
      <div className="absolute top-[10%] right-[-5%] w-72 h-72 rounded-full bg-gradient-to-br from-amber-100/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] left-[-5%] w-96 h-96 rounded-full bg-gradient-to-tr from-green-50/40 to-transparent blur-3xl pointer-events-none" />

      {/* NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-[#FBF9F4]/80 backdrop-blur-md border-b border-[#D9CDB8]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 flex items-center justify-center shadow-md">
              <span className="font-serif text-lg font-bold text-[#3D352E]">C</span>
            </div>
            <div>
              <span className="font-serif text-xl font-semibold tracking-tight text-[#3D352E] block">Coojy Copig</span>
              <span className="text-[10px] tracking-widest text-[#8C847A] uppercase block -mt-1 font-semibold">Culinary Atelier</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#atelier" className="text-sm font-medium text-[#3D352E] hover:text-[#D9A036] transition-colors relative py-1 group">
              Kitchen Atelier
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D9A036] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
            <a href="#philosophy" className="text-sm font-medium text-[#8C847A] hover:text-[#3D352E] transition-colors relative py-1 group">
              Sourcing Philosophy
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3D352E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
            <a href="#curations" className="text-sm font-medium text-[#8C847A] hover:text-[#3D352E] transition-colors relative py-1 group">
              Autumn Curations
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3D352E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
            <a href="#intelligence" className="text-sm font-medium text-[#8C847A] hover:text-[#3D352E] transition-colors relative py-1 group">
              Culinary Intelligence
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3D352E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => triggerToast("✨ Multi-session cloud sync enabled! Your culinary compositions are now auto-saved.")}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#5D8063] bg-[#E4EFE3] hover:bg-[#d6e8d4] transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-[#5D8063] animate-pulse" />
              Progress Auto-Saving
            </button>
            
            <button 
              onClick={() => triggerToast("Hamper details: Customize options inside the interactive Composer below.")}
              className="relative p-2.5 rounded-full bg-[#F5F2EB] hover:bg-[#EFECE3] text-[#3D352E] transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D9A036] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-[#FBF9F4] animate-scale">
                  {cartCount}
                </span>
              )}
            </button>

            <a 
              href="#atelier" 
              className="px-6 py-3 rounded-full bg-[#3D352E] hover:bg-[#4F463E] text-[#FBF9F4] text-xs font-semibold tracking-wider uppercase shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Enter Atelier
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION / VALUE PROP */}
      <section className="relative pt-12 pb-6 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Intro text */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/60 border border-amber-200 text-[#D9A036] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            The Golden Ratio of Pasta Gastronomy
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl text-[#3D352E] leading-[1.1] font-normal">
            Where raw <span className="font-serif italic text-[#D9A036] font-semibold">wheat</span> meets curated <span className="font-serif italic text-[#5D8063] font-semibold">intelligence</span>.
          </h1>
          
          <p className="text-base text-[#8C847A] leading-relaxed max-w-xl">
            Welcome to the digital studio of Coojy Copig. Here, we decompose gourmet culinary recipes into exact molecular dynamics: texture curves, hydration metrics, heat variables, and ingredient harmony maps.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a 
              href="#atelier" 
              className="px-8 py-4 rounded-full bg-[#3D352E] hover:bg-[#4F463E] text-white font-medium text-center shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              Configure Live Recipe
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#curations" 
              className="px-8 py-4 rounded-full border border-[#D9CDB8] hover:border-[#3D352E] text-[#3D352E] font-medium text-center transition-all bg-transparent"
            >
              Explore Menu
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#D9CDB8]/30">
            <div>
              <p className="font-serif text-3xl font-bold text-[#3D352E]">100%</p>
              <p className="text-xs text-[#8C847A] uppercase tracking-wider mt-1">Stone-milled</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-[#5D8063]">A+</p>
              <p className="text-xs text-[#8C847A] uppercase tracking-wider mt-1">Carbon Rating</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-[#D9A036]">20m</p>
              <p className="text-xs text-[#8C847A] uppercase tracking-wider mt-1">Precision Cook</p>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Illustration Preview */}
        <div className="lg:col-span-7 flex justify-center relative w-full">
          {/* Aesthetic Background Card Layer */}
          <div className="absolute -inset-2 rounded-[44px] bg-gradient-to-tr from-[#E3A83F]/10 via-transparent to-[#5C8063]/10 blur-xl opacity-80" />
          
          {/* Main Visual Composition - Matching the exact look of your image */}
          <div className="relative w-full max-w-[620px] aspect-[4/5] rounded-[36px] bg-[#FAF8F3] border border-[#EBE6DC] shadow-2xl p-6 overflow-hidden flex flex-col justify-between">
            
            {/* Top Leaf Accent */}
            <div className="absolute top-4 left-[45%] z-10 animate-float-1 pointer-events-none">
              <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm filter">
                <path d="M4 28C10 24 16 12 28 8C34 6 42 10 44 14C46 18 40 26 30 28C20 30 10 32 4 28Z" fill="#5D8063" fillOpacity="0.85" />
                <path d="M44 14C32 14 18 20 4 28" stroke="#3D5341" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M28 8C26 14 20 18 10 21" stroke="#3D5341" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
                <path d="M34 11C32 16 28 19 18 21" stroke="#3D5341" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
              </svg>
            </div>

            {/* Side Fruit / Garnish Accents simulating image borders */}
            <div className="absolute bottom-1/3 -left-8 w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 opacity-90 blur-xs shadow-md border-4 border-[#FAF8F3]/60 transform rotate-12 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #f97316 20%, #ea580c 80%)' }}>
              <div className="w-full h-full rounded-full opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-transparent to-transparent" />
            </div>

            {/* Mini Premium Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-[#EBE6DC]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D9A036]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8C847A]">Studio Plate View</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E4EFE3] text-[#5D8063] text-[10px] font-bold">
                <Leaf className="w-3 h-3" />
                ORGANIC GRADE
              </div>
            </div>

            {/* Central Master Plate Visual */}
            <div className="relative flex-1 flex flex-col items-center justify-center py-6">
              
              {/* Outer soft shadow plate container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-[#FCFAF6] border border-[#E9E3D6] shadow-[0_25px_50px_-12px_rgba(112,94,70,0.15)] flex items-center justify-center transition-all duration-700 transform hover:scale-[1.02]">
                
                {/* Plate Inner Ridge */}
                <div className="w-[82%] h-[82%] rounded-full border border-[#EDE7DB]/80 bg-[#FAF7F1] flex items-center justify-center shadow-[inset_0_4px_12px_rgba(112,94,70,0.03)]">
                  
                  {/* Dynamic Culinary Content based on selection */}
                  {selectedPasta === 'reoni' && (
                    <div className="relative w-full h-full flex items-center justify-center animate-fadeIn">
                      {/* Ribbon Pasta Swirl (Golden intricate paths) */}
                      <svg width="210" height="210" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-float-1 filter drop-shadow-md">
                        {/* Shimmer / Shadow backdrop */}
                        <circle cx="100" cy="100" r="75" fill="url(#pastaShine)" opacity="0.15" />
                        
                        {/* Beautiful layered golden lines approximating thick Tagliolini loops */}
                        <path d="M45,100 C45,60 80,45 120,45 C155,45 165,70 160,100 C155,130 115,165 75,160 C40,155 35,110 70,85 C100,65 145,85 155,115 C165,145 130,170 100,165 C70,160 55,125 75,100 C95,75 140,75 145,110" stroke="#E6BC5C" strokeWidth="8" strokeLinecap="round" opacity="0.8" />
                        <path d="M55,90 C55,55 90,40 125,50 C160,60 155,95 140,115 C125,135 85,150 65,125 C45,100 70,75 105,70 C140,65 150,105 130,130 C110,155 75,145 60,115 C50,90 95,80 120,95 C145,110 120,150 100,140" stroke="#F1D28C" strokeWidth="4" strokeLinecap="round" />
                        <path d="M70,110 C60,85 85,60 115,65 C145,70 135,110 110,125 C85,140 60,110 80,90 C100,70 130,90 120,115 C110,140 75,130 90,105 C105,80 135,110 100,120" stroke="#D19E2B" strokeWidth="2.5" strokeLinecap="round" />
                        
                        {/* Tiny pepper flecks */}
                        <circle cx="95" cy="85" r="2.5" fill="#3D352E" />
                        <circle cx="115" cy="115" r="2" fill="#3D352E" />
                        <circle cx="78" cy="122" r="3" fill="#3D352E" />
                        <circle cx="132" cy="98" r="1.5" fill="#3D352E" />
                        <circle cx="102" cy="140" r="2.5" fill="#5D8063" />

                        <defs>
                          <radialGradient id="pastaShine" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" transform="translate(100 100) rotate(90) scale(75)">
                            <stop offset="0%" stopColor="#FAF1D6" />
                            <stop offset="100%" stopColor="#D9A036" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </div>
                  )}

                  {selectedPasta === 'sonnets' && (
                    <div className="relative w-full h-full flex items-center justify-center animate-fadeIn">
                      {/* Star Pasta bowl (Golden stars clusters inside elegant bowl path) */}
                      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-float-2 filter drop-shadow-md">
                        <circle cx="100" cy="100" r="62" fill="#E8C37B" fillOpacity="0.2" stroke="#E8C37B" strokeWidth="2" strokeDasharray="3 3" />
                        <path d="M100,45 L115,58 L134,55 L128,74 L141,88 L122,94 L120,113 L101,108 L87,121 L81,102 L62,99 L75,85 L69,66 L88,69 Z" fill="#E8C37B" stroke="#D19E2B" strokeWidth="3" strokeLinejoin="round" />
                        <path d="M105,65 L112,72 L122,70 L118,80 L125,87 L115,90 L114,100 L104,97 L97,104 L94,94 L84,92 L91,84 L88,74 L98,76 Z" fill="#F4DCAB" stroke="#E8C37B" strokeWidth="1.5" />
                        <circle cx="102" cy="82" r="6" fill="#D9A036" />
                        <circle cx="112" cy="92" r="4.5" fill="#3D352E" opacity="0.9" />
                      </svg>
                    </div>
                  )}

                  {selectedPasta === 'torrente' && (
                    <div className="relative w-full h-full flex items-center justify-center animate-fadeIn">
                      {/* Curled Rigatoni / Ruote shapes floating */}
                      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-float-1 filter drop-shadow-md">
                        {/* Shape 1 */}
                        <g transform="translate(60, 60) rotate(25)">
                          <rect x="0" y="0" width="35" height="45" rx="10" fill="#D9A036" stroke="#B07C1C" strokeWidth="3" />
                          <line x1="8" y1="5" x2="8" y2="40" stroke="#FFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                          <line x1="17" y1="5" x2="17" y2="40" stroke="#FFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                          <line x1="26" y1="5" x2="26" y2="40" stroke="#FFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                        </g>
                        {/* Shape 2 */}
                        <g transform="translate(105, 95) rotate(-35)">
                          <rect x="0" y="0" width="35" height="45" rx="10" fill="#E8C37B" stroke="#B07C1C" strokeWidth="3" />
                          <line x1="8" y1="5" x2="8" y2="40" stroke="#3D352E" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                          <line x1="17" y1="5" x2="17" y2="40" stroke="#3D352E" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                          <line x1="26" y1="5" x2="26" y2="40" stroke="#3D352E" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                        </g>
                      </svg>
                    </div>
                  )}

                  {selectedPasta === 'photys' && (
                    <div className="relative w-full h-full flex items-center justify-center animate-fadeIn">
                      {/* Dark Caviar shell compilation */}
                      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-float-2 filter drop-shadow-md">
                        <circle cx="100" cy="100" r="50" fill="#3D352E" fillOpacity="0.85" />
                        <circle cx="100" cy="100" r="42" fill="#8E5E38" />
                        <circle cx="100" cy="100" r="30" fill="#E6BC5C" />
                        {/* Floating caviar pearls inside shell */}
                        <circle cx="92" cy="94" r="5" fill="#1C1815" />
                        <circle cx="104" cy="90" r="6" fill="#1C1815" />
                        <circle cx="101" cy="104" r="5" fill="#1C1815" />
                        <circle cx="112" cy="98" r="4.5" fill="#1C1815" />
                        <circle cx="89" cy="106" r="5.5" fill="#1C1815" />
                        <circle cx="97" cy="115" r="4" fill="#5D8063" />
                      </svg>
                    </div>
                  )}

                </div>

                {/* Live Sprinkled Garnish Leaves */}
                {garnishLeaves.map((leaf) => (
                  <div
                    key={leaf.id}
                    className="absolute z-20 pointer-events-none transition-all duration-500"
                    style={{
                      top: leaf.top,
                      left: leaf.left,
                      transform: `scale(${leaf.scale}) rotate(${leaf.rotation}deg)`,
                    }}
                  >
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                      <path d="M2 14C5 12 8 6 14 4C17 3 21 5 22 7C23 9 20 13 15 14C10 15 5 16 2 14Z" fill="#5D8063" />
                      <path d="M22 7C16 7 9 10 2 14" stroke="#3D5341" strokeWidth="1" />
                    </svg>
                  </div>
                ))}

              </div>

              {/* Little label floating underneath the plate */}
              <div className="mt-6 text-center">
                <p className="font-serif text-2xl font-semibold text-[#3D352E]">{current.name}</p>
                <p className="text-xs text-[#8C847A] max-w-[280px] mx-auto mt-1 leading-normal italic">{current.subtitle}</p>
              </div>

            </div>

            {/* Micro Dashboard Controls directly pinned on visual */}
            <div className="flex items-center justify-between pt-4 border-t border-[#EBE6DC] text-xs">
              <div className="flex items-center gap-1.5 text-[#8C847A]">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>Optimal Cook: <strong>{dynamicCookTime}m</strong></span>
              </div>
              <div className="flex items-center gap-1 text-[#3D352E]">
                <span className="font-bold text-amber-600">€{dynamicCost}</span>
                <span className="text-[#8C847A] text-[10px]">/ portion</span>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* CORE EXPERIENCE SECTION: THE INTERACTIVE KITCHEN ATELIER */}
      <section id="atelier" className="py-24 bg-[#F5F2EB] border-t border-b border-[#D9CDB8]/30">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C847A]">Interactive Workshop</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#3D352E] font-normal">
              Compose Your <span className="italic font-serif text-[#D9A036]">Custom Plate</span>
            </h2>
            <p className="text-sm text-[#8C847A] leading-relaxed">
              Toggle the architectural pasta formats, calibrate the starch extraction variables, and monitor molecular and sustainable properties in absolute real-time.
            </p>
          </div>

          {/* Master Culinary Dashboard Layout (Closely matches the visual balance of the inspiration image) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* 1. LEFT CONTROLS PANEL (Warm Ochre Sidebar Accent, Rounded 32px) */}
            <div className="lg:col-span-4 bg-gradient-to-b from-[#FAF1D6] to-[#FCFAF2] rounded-[32px] p-8 border border-[#E9DFBE] flex flex-col justify-between space-y-8 organic-shadow-sm">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#E9DFBE]">
                  <h3 className="font-serif text-xl font-semibold text-[#3D352E]">Plate Metrics</h3>
                  <Sliders className="w-4 h-4 text-[#D9A036]" />
                </div>

                {/* Metric item: Cook Time */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-[#8C847A] uppercase tracking-wider font-semibold">
                    <span>Cook Duration</span>
                    <span className="text-[#3D352E] font-bold">{dynamicCookTime} Mins</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#FAF1D6] rounded-full overflow-hidden relative border border-[#E9DFBE]/40">
                    <div 
                      className="h-full bg-[#D9A036] rounded-full transition-all duration-500" 
                      style={{ width: `${Math.min(100, (dynamicCookTime / 30) * 100)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-[#8C847A]/80 italic">Precision calculated at {cookTemp}°C water pressure</span>
                </div>

                {/* Metric item: Calories */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-[#8C847A] uppercase tracking-wider font-semibold">
                    <span>Active Calories</span>
                    <span className="text-[#3D352E] font-bold">{dynamicCalories} kcal</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#FAF1D6] rounded-full overflow-hidden relative border border-[#E9DFBE]/40">
                    <div 
                      className="h-full bg-orange-400 rounded-full transition-all duration-500" 
                      style={{ width: `${(dynamicCalories / 500) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Metric item: Protein Starch Ratio */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-[#8C847A] uppercase tracking-wider font-semibold">
                    <span>Protein Density</span>
                    <span className="text-[#3D352E] font-bold">{dynamicProtein}g</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#FAF1D6] rounded-full overflow-hidden relative border border-[#E9DFBE]/40">
                    <div 
                      className="h-full bg-[#5D8063] rounded-full transition-all duration-500" 
                      style={{ width: `${(dynamicProtein / 25) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Metric item: Cost Index */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-[#8C847A] uppercase tracking-wider font-semibold">
                    <span>Estimated Cost</span>
                    <span className="text-[#3D352E] font-bold text-base">€{dynamicCost}</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#FAF1D6] rounded-full overflow-hidden relative border border-[#E9DFBE]/40">
                    <div 
                      className="h-full bg-[#8E5E38] rounded-full transition-all duration-500" 
                      style={{ width: `${(parseFloat(dynamicCost) / 12) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Metric item: Sustainability */}
                <div className="space-y-2 pt-4 border-t border-[#E9DFBE]/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#8C847A]">Carbon Offset</span>
                    <span className="px-2 py-0.5 rounded bg-[#5D8063] text-white text-xs font-bold">{current.carbonScore}</span>
                  </div>
                  <p className="text-[11px] text-[#8C847A] leading-normal mt-1">
                    This selection accounts for <strong className="text-[#3D352E]">{current.carbonNum}g CO₂e</strong> per serving, outperforming 94% of traditional convenience pastas.
                  </p>
                </div>
              </div>

              {/* Sidebar Action CTAs */}
              <div className="space-y-3 pt-4 border-t border-[#E9DFBE]">
                <button 
                  onClick={handleAddToCart}
                  className="w-full py-3.5 px-4 rounded-full bg-[#3D352E] hover:bg-[#4F463E] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order Custom Blend
                </button>
                <button 
                  onClick={() => triggerToast("✨ Blueprint shared! Ready for culinary deployment.")}
                  className="w-full py-3 px-4 rounded-full border border-[#D9CDB8] hover:border-[#3D352E] text-[#3D352E] text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Export Architecture
                </button>
              </div>

            </div>

            {/* 2. CENTER INTERACTIVE PLATE WORKSPACE */}
            <div className="lg:col-span-5 bg-white rounded-[32px] p-8 border border-[#EBE6DC] shadow-sm flex flex-col justify-between relative overflow-hidden">
              
              {/* Backlight glow effect simulating studio light */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_rgba(244,220,171,0.12)_0%,_rgba(255,255,255,0)_70%)] pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-[#F5F2EB] relative z-10">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#3D352E]">Interactive Atelier</h3>
                  <span className="text-[10px] text-[#8C847A] uppercase tracking-wider font-medium">Fine culinary visualization</span>
                </div>
                
                {/* Sprinkler action */}
                <div className="flex gap-2">
                  <button 
                    onClick={addGarnishLeaf}
                    className="p-2 rounded-full bg-[#E4EFE3] hover:bg-[#d5ecd3] text-[#5D8063] transition-all flex items-center gap-1 text-[10px] font-bold px-3"
                    title="Sprinkle dynamic basil leaf onto plate"
                  >
                    <Leaf className="w-3.5 h-3.5" />
                    Sprinkle Basil
                  </button>
                  {garnishLeaves.length > 0 && (
                    <button 
                      onClick={clearGarnish} 
                      className="p-2 rounded-full bg-[#FAF1D6] text-amber-800 hover:bg-amber-200 text-[10px] font-semibold transition-all px-2.5"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Dynamic Workspace Plate Image rendering */}
              <div className="relative py-12 flex items-center justify-center min-h-[300px]">
                
                {/* Aesthetic Organic Plate Element */}
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-[#FCFAF6] border border-[#E9E3D6] shadow-xl flex items-center justify-center relative">
                  <div className="w-[82%] h-[82%] rounded-full border border-[#EDE7DB]/80 bg-[#FAF7F1] flex items-center justify-center shadow-inner">
                    
                    {/* SVG renders according to active state */}
                    {selectedPasta === 'reoni' && (
                      <svg width="180" height="180" viewBox="0 0 200 200" className="animate-float-1">
                        <path d="M45,100 C45,60 80,45 120,45 C155,45 165,70 160,100 C155,130 115,165 75,160 C40,155 35,110 70,85 C100,65 145,85 155,115 C165,145 130,170 100,165 C70,160 55,125 75,100 C95,75 140,75 145,110" stroke="#E6BC5C" strokeWidth="8" strokeLinecap="round" opacity="0.85" />
                        <path d="M55,90 C55,55 90,40 125,50 C160,60 155,95 140,115 C125,135 85,150 65,125 C45,100 70,75 105,70 C140,65 150,105 130,130 C110,155 75,145 60,115 C50,90 95,80 120,95" stroke="#F1D28C" strokeWidth="4.5" strokeLinecap="round" />
                        {garnishLeaves.length > 0 && <circle cx="95" cy="110" r="14" fill="#5D8063" fillOpacity="0.4" className="blur-xs" />}
                      </svg>
                    )}

                    {selectedPasta === 'sonnets' && (
                      <svg width="180" height="180" viewBox="0 0 200 200" className="animate-float-2">
                        <circle cx="100" cy="100" r="55" fill="#E8C37B" fillOpacity="0.2" stroke="#E8C37B" strokeWidth="1.5" strokeDasharray="3 3" />
                        <path d="M100,50 L112,62 L128,59 L123,75 L135,87 L119,92 L117,108 L101,104 L89,115 L84,99 L68,96 L79,84 L74,68 L90,71 Z" fill="#E8C37B" stroke="#D19E2B" strokeWidth="2.5" />
                      </svg>
                    )}

                    {selectedPasta === 'torrente' && (
                      <svg width="180" height="180" viewBox="0 0 200 200" className="animate-float-1">
                        <g transform="translate(55, 60) rotate(15)">
                          <rect x="0" y="0" width="30" height="40" rx="8" fill="#D9A036" stroke="#B07C1C" strokeWidth="2" />
                          <line x1="6" y1="4" x2="6" y2="36" stroke="#FFF" strokeWidth="1.5" opacity="0.6" />
                          <line x1="15" y1="4" x2="15" y2="36" stroke="#FFF" strokeWidth="1.5" opacity="0.6" />
                          <line x1="24" y1="4" x2="24" y2="36" stroke="#FFF" strokeWidth="1.5" opacity="0.6" />
                        </g>
                        <g transform="translate(100, 90) rotate(-25)">
                          <rect x="0" y="0" width="30" height="40" rx="8" fill="#E8C37B" stroke="#B07C1C" strokeWidth="2" />
                          <line x1="6" y1="4" x2="6" y2="36" stroke="#3D352E" strokeWidth="1" opacity="0.4" />
                          <line x1="15" y1="4" x2="15" y2="36" stroke="#3D352E" strokeWidth="1" opacity="0.4" />
                        </g>
                      </svg>
                    )}

                    {selectedPasta === 'photys' && (
                      <svg width="180" height="180" viewBox="0 0 200 200" className="animate-float-2">
                        <circle cx="100" cy="100" r="45" fill="#3D352E" fillOpacity="0.9" />
                        <circle cx="100" cy="100" r="36" fill="#8E5E38" />
                        <circle cx="100" cy="100" r="26" fill="#E6BC5C" />
                      </svg>
                    )}

                  </div>

                  {/* Render scattered garnish overlays */}
                  {garnishLeaves.map((leaf) => (
                    <div
                      key={`mid-${leaf.id}`}
                      className="absolute z-20 pointer-events-none transition-all duration-300"
                      style={{
                        top: leaf.top,
                        left: leaf.left,
                        transform: `scale(${leaf.scale * 0.8}) rotate(${leaf.rotation}deg)`,
                      }}
                    >
                      <svg width="18" height="12" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 14C5 12 8 6 14 4C17 3 21 5 22 7C23 9 20 13 15 14C10 15 5 16 2 14Z" fill="#5D8063" />
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Aesthetic Organic Scattered Background Spices */}
                <div className="absolute top-[12%] right-[15%] opacity-45 pointer-events-none">
                  <span className="text-xs">🌾</span>
                </div>
                <div className="absolute bottom-[10%] left-[10%] opacity-35 pointer-events-none">
                  <span className="text-sm">🍋</span>
                </div>

              </div>

              {/* Composition metadata summary */}
              <div className="bg-[#FAF8F3] rounded-2xl p-4 border border-[#EBE6DC] space-y-2 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#8C847A] uppercase tracking-wider">Formula Integrity</span>
                  <span className="text-xs text-[#5D8063] font-bold flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current" /> Optimal Match
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {current.ingredients.map((ing, idx) => (
                    <span key={idx} className="text-[10px] bg-[#F0ECE1] text-[#5C554E] px-2 py-0.5 rounded-full font-medium">
                      {ing}
                    </span>
                  ))}
                  <span className="text-[10px] bg-[#E4EFE3] text-[#5D8063] px-2 py-0.5 rounded-full font-medium">
                    +{herbLevel}% Herb Density
                  </span>
                </div>
              </div>

            </div>

            {/* 3. RIGHT ADJUSTER & SELECTION CARD PANEL */}
            <div className="lg:col-span-3 space-y-6 flex flex-col justify-between">
              
              {/* Pasta Architectural Selector */}
              <div className="bg-white rounded-[24px] p-6 border border-[#EBE6DC] shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#8C847A]">1. Shape Architecture</h4>
                
                <div className="space-y-3">
                  
                  {/* Selector Item: Sonnets */}
                  <button 
                    onClick={() => setSelectedPasta('sonnets')}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                      selectedPasta === 'sonnets' 
                        ? 'border-[#D9A036] bg-[#FCFAF5] shadow-xs' 
                        : 'border-[#F0ECE1] hover:border-[#D9CDB8]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center font-serif text-[#D9A036] font-bold text-xs">S</div>
                      <div>
                        <span className="text-xs font-bold text-[#3D352E] block">Sonnets</span>
                        <span className="text-[10px] text-[#8C847A] block">Fine Stars</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#D9A036]">€4.80</span>
                  </button>

                  {/* Selector Item: Torrente */}
                  <button 
                    onClick={() => setSelectedPasta('torrente')}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                      selectedPasta === 'torrente' 
                        ? 'border-[#D9A036] bg-[#FCFAF5] shadow-xs' 
                        : 'border-[#F0ECE1] hover:border-[#D9CDB8]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center font-serif text-amber-600 font-bold text-xs">T</div>
                      <div>
                        <span className="text-xs font-bold text-[#3D352E] block">Torrente</span>
                        <span className="text-[10px] text-[#8C847A] block">Grooved Curls</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-600">€6.20</span>
                  </button>

                  {/* Selector Item: Photys */}
                  <button 
                    onClick={() => setSelectedPasta('photys')}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                      selectedPasta === 'photys' 
                        ? 'border-[#D9A036] bg-[#FCFAF5] shadow-xs' 
                        : 'border-[#F0ECE1] hover:border-[#D9CDB8]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center font-serif text-stone-700 font-bold text-xs">P</div>
                      <div>
                        <span className="text-xs font-bold text-[#3D352E] block">Photys</span>
                        <span className="text-[10px] text-[#8C847A] block">Caviar Medley</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-stone-700">€8.50</span>
                  </button>

                  {/* Selector Item: Reoni */}
                  <button 
                    onClick={() => setSelectedPasta('reoni')}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                      selectedPasta === 'reoni' 
                        ? 'border-[#D9A036] bg-[#FCFAF5] shadow-xs' 
                        : 'border-[#F0ECE1] hover:border-[#D9CDB8]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FAF1D6] flex items-center justify-center font-serif text-[#D9A036] font-bold text-xs">R</div>
                      <div>
                        <span className="text-xs font-bold text-[#3D352E] block">Reoni Filaments</span>
                        <span className="text-[10px] text-[#8C847A] block">Luxury Ribbons</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#D9A036]">€7.10</span>
                  </button>

                </div>
              </div>

              {/* Sliders Calibration Panel */}
              <div className="bg-white rounded-[24px] p-6 border border-[#EBE6DC] shadow-sm space-y-5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#8C847A]">2. Molecular Adjustment</h4>

                {/* Slider: Cooking Water Temp */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium text-[#3D352E]">
                    <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-orange-500" /> Boiling Temp</span>
                    <span className="text-orange-600 font-semibold">{cookTemp}°C</span>
                  </div>
                  <input 
                    type="range" 
                    min="90" 
                    max="100" 
                    value={cookTemp} 
                    onChange={(e) => setCookTemp(Number(e.target.value))}
                    className="w-full accent-[#D9A036] cursor-pointer h-1.5 bg-[#F5F2EB] rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[9px] text-[#8C847A] pt-0.5">
                    <span>90°C Al Dente</span>
                    <span>100°C Tender</span>
                  </div>
                </div>

                {/* Slider: Butter/Sauce Viscosity */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium text-[#3D352E]">
                    <span className="flex items-center gap-1"><Droplet className="w-3.5 h-3.5 text-yellow-500" /> Sauce Density</span>
                    <span className="text-amber-700 font-semibold">{sauceDensity}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="100" 
                    value={sauceDensity} 
                    onChange={(e) => setSauceDensity(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer h-1.5 bg-[#F5F2EB] rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[9px] text-[#8C847A] pt-0.5">
                    <span>Emulsified broth</span>
                    <span>Velvet glaze</span>
                  </div>
                </div>

                {/* Slider: Herb Garnish Density */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium text-[#3D352E]">
                    <span className="flex items-center gap-1"><Leaf className="w-3.5 h-3.5 text-green-600" /> Basil & Oregano</span>
                    <span className="text-green-700 font-semibold">{herbLevel}% infusion</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    value={herbLevel} 
                    onChange={(e) => setHerbLevel(Number(e.target.value))}
                    className="w-full accent-green-600 cursor-pointer h-1.5 bg-[#F5F2EB] rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[9px] text-[#8C847A] pt-0.5">
                    <span>Mild scent</span>
                    <span>Rich botanical</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SOURCING PHILOSOPHY SECTION (Premium Grid Design matching visual depth) */}
      <section id="philosophy" className="py-24 bg-[#FBF9F4]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphics Accent Column */}
            <div className="lg:col-span-5 space-y-6 relative">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C847A]">Our Heritage</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#3D352E] font-normal leading-tight">
                Milled by wind. <br />
                Guided by <span className="font-serif italic text-[#5D8063] font-semibold">ecological</span> parameters.
              </h2>
              <p className="text-sm text-[#8C847A] leading-relaxed">
                Our durum wheat crops are grown exclusively in bio-dynamic soil reserves of Tuscany and Sicily. By respecting natural lunar hydration cycles and stone-milling grains at speeds under 40 RPM, we preserve the grain's native protein complex.
              </p>

              {/* Dynamic Sourcing Badge */}
              <div className="p-6 bg-[#FAF1D6] rounded-3xl border border-[#E9DFBE] relative">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-600 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#3D352E]">Certified Protected Origin (D.O.P)</h4>
                    <p className="text-xs text-[#8C847A] mt-1 leading-relaxed">
                      Every batch is traceable back to the specific plot, latitude coordinate, and weather conditions of the harvest week.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Philosophy Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Hydration Integrity */}
              <div className="p-8 bg-white rounded-[28px] border border-[#EBE6DC] hover:border-[#D9A036] transition-all space-y-4 shadow-xs group">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-[#D9A036] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Droplet className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#3D352E]">Mountain Water Hydration</h3>
                <p className="text-xs text-[#8C847A] leading-relaxed">
                  Pure spring water is piped from mountain ridges directly into the kneading chamber at a controlled temperature of 8.2°C to prevent starch degradation.
                </p>
              </div>

              {/* Card 2: Low Temp Desiccation */}
              <div className="p-8 bg-white rounded-[28px] border border-[#EBE6DC] hover:border-[#D9A036] transition-all space-y-4 shadow-xs group">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#3D352E]">48-Hour Gentle Desiccation</h3>
                <p className="text-xs text-[#8C847A] leading-relaxed">
                  Instead of rapid industrial ovens, our pasta is dried on natural wicker screens at a persistent 38°C for two full solar rotations.
                </p>
              </div>

              {/* Card 3: Bronze Die Architecture */}
              <div className="p-8 bg-white rounded-[28px] border border-[#EBE6DC] hover:border-[#5D8063] transition-all space-y-4 shadow-xs group">
                <div className="w-10 h-10 rounded-full bg-[#E4EFE3] text-[#5D8063] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#3D352E]">Bronze Die Micro-Fissures</h3>
                <p className="text-xs text-[#8C847A] leading-relaxed">
                  Custom bronze extrusion casts leave an exquisite rough velvet patina on the pasta, allowing sauces to emulsify and adhere perfectly.
                </p>
              </div>

              {/* Card 4: Ecosystem Preservation */}
              <div className="p-8 bg-white rounded-[28px] border border-[#EBE6DC] hover:border-[#5D8063] transition-all space-y-4 shadow-xs group">
                <div className="w-10 h-10 rounded-full bg-[#E4EFE3] text-[#5D8063] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#3D352E]">Carbon Negative Farming</h3>
                <p className="text-xs text-[#8C847A] leading-relaxed">
                  We integrate clover companion crops and solar powered mills to ensure our soil absorbs more carbon than our distribution cycle emits.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* AUTUMN CURATIONS / COMPOSITIONS EXHIBITION */}
      <section id="curations" className="py-24 bg-[#F5F2EB] border-t border-[#D9CDB8]/20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Grid Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C847A]">Gourmet Collections</span>
              <h2 className="font-serif text-4xl text-[#3D352E] font-normal">
                Curated <span className="italic font-serif text-[#D9A036]">Architectural Compositions</span>
              </h2>
              <p className="text-sm text-[#8C847A] leading-relaxed">
                Discover pre-configured recipes meticulously matched for unique chemical and sensory flavor profiles.
              </p>
            </div>
            
            <button 
              onClick={() => {
                const choices = ['sonnets', 'torrente', 'photys', 'reoni'];
                const randomChoice = choices[Math.floor(Math.random() * choices.length)];
                setSelectedPasta(randomChoice);
                triggerToast(`🎲 Randomized Chef Atelier to [${pastas[randomChoice].name}]!`);
              }}
              className="px-6 py-3.5 rounded-full bg-[#3D352E] hover:bg-[#4F463E] text-[#FBF9F4] text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 self-start md:self-auto"
            >
              <Shuffle className="w-4 h-4" />
              Randomize Flavor Profile
            </button>
          </div>

          {/* Exhibition Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-[28px] p-6 border border-[#EBE6DC] shadow-xs flex flex-col justify-between transition-all hover:-translate-y-1.5 duration-300">
              <div className="space-y-4">
                <div className="aspect-square bg-[#FCFAF6] rounded-2xl border border-[#F0ECE1] flex items-center justify-center relative overflow-hidden">
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-amber-100 text-[#D9A036] text-[10px] font-bold">BEST SELLER</span>
                  {/* Stylized pasta SVG preview */}
                  <svg width="100" height="100" viewBox="0 0 100 100" className="animate-float-1">
                    <path d="M25,50 C25,30 40,20 60,20 C80,20 85,35 80,50 C75,65 55,80 35,80" stroke="#E6BC5C" strokeWidth="5" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#3D352E]">Saffron Infused Tagliolini</h3>
                  <p className="text-xs text-[#8C847A] leading-normal mt-1">Extraordinary fine ribbon strands spun with direct-farm Iranian saffron filaments.</p>
                </div>
              </div>
              <div className="pt-6 border-t border-[#F5F2EB] flex items-center justify-between mt-6">
                <span className="text-sm font-bold text-amber-600">€7.10 <span className="text-[10px] text-[#8C847A] font-normal">/ ptn</span></span>
                <button 
                  onClick={() => {
                    setSelectedPasta('reoni');
                    triggerToast("Reoni Tagliolini loaded into Atelier!");
                  }} 
                  className="text-xs font-semibold text-[#3D352E] hover:text-[#D9A036] transition-colors flex items-center gap-0.5"
                >
                  Configure <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[28px] p-6 border border-[#EBE6DC] shadow-xs flex flex-col justify-between transition-all hover:-translate-y-1.5 duration-300">
              <div className="space-y-4">
                <div className="aspect-square bg-[#FCFAF6] rounded-2xl border border-[#F0ECE1] flex items-center justify-center relative overflow-hidden">
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#E4EFE3] text-[#5D8063] text-[10px] font-bold">ORGANIC RECIPE</span>
                  <svg width="100" height="100" viewBox="0 0 100 100" className="animate-float-2">
                    <circle cx="50" cy="50" r="30" fill="#E8C37B" fillOpacity="0.2" stroke="#E8C37B" strokeWidth="1" />
                    <circle cx="50" cy="50" r="20" fill="#E8C37B" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#3D352E]">Tuscan Semolina Stelline</h3>
                  <p className="text-xs text-[#8C847A] leading-normal mt-1">Lightly roasted organic star kernels crafted for velvety, clear aromatic broths.</p>
                </div>
              </div>
              <div className="pt-6 border-t border-[#F5F2EB] flex items-center justify-between mt-6">
                <span className="text-sm font-bold text-amber-600">€4.80 <span className="text-[10px] text-[#8C847A] font-normal">/ ptn</span></span>
                <button 
                  onClick={() => {
                    setSelectedPasta('sonnets');
                    triggerToast("Sonnets Stelline loaded into Atelier!");
                  }} 
                  className="text-xs font-semibold text-[#3D352E] hover:text-[#D9A036] transition-colors flex items-center gap-0.5"
                >
                  Configure <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[28px] p-6 border border-[#EBE6DC] shadow-xs flex flex-col justify-between transition-all hover:-translate-y-1.5 duration-300">
              <div className="space-y-4">
                <div className="aspect-square bg-[#FCFAF6] rounded-2xl border border-[#F0ECE1] flex items-center justify-center relative overflow-hidden">
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-stone-100 text-stone-700 text-[10px] font-bold">RUSTIC BLEND</span>
                  <svg width="100" height="100" viewBox="0 0 100 100" className="animate-float-1">
                    <rect x="35" y="30" width="30" height="40" rx="8" fill="#D9A036" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#3D352E]">Khorasan Grooved Ruote</h3>
                  <p className="text-xs text-[#8C847A] leading-normal mt-1">Deep, ancient-grain grooved curls that hold rich emulsified butter reduction.</p>
                </div>
              </div>
              <div className="pt-6 border-t border-[#F5F2EB] flex items-center justify-between mt-6">
                <span className="text-sm font-bold text-amber-600">€6.20 <span className="text-[10px] text-[#8C847A] font-normal">/ ptn</span></span>
                <button 
                  onClick={() => {
                    setSelectedPasta('torrente');
                    triggerToast("Torrente Ruote loaded into Atelier!");
                  }} 
                  className="text-xs font-semibold text-[#3D352E] hover:text-[#D9A036] transition-colors flex items-center gap-0.5"
                >
                  Configure <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[28px] p-6 border border-[#EBE6DC] shadow-xs flex flex-col justify-between transition-all hover:-translate-y-1.5 duration-300">
              <div className="space-y-4">
                <div className="aspect-square bg-[#FCFAF6] rounded-2xl border border-[#F0ECE1] flex items-center justify-center relative overflow-hidden">
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">LIMITED COLLECTION</span>
                  <svg width="100" height="100" viewBox="0 0 100 100" className="animate-float-2">
                    <circle cx="50" cy="50" r="25" fill="#3D352E" />
                    <circle cx="50" cy="50" r="15" fill="#8E5E38" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#3D352E]">Caviar & Herb Rigatoni</h3>
                  <p className="text-xs text-[#8C847A] leading-normal mt-1">Dark, charcoal-milled grain shells paired beautifully with cold-pressed herb oils.</p>
                </div>
              </div>
              <div className="pt-6 border-t border-[#F5F2EB] flex items-center justify-between mt-6">
                <span className="text-sm font-bold text-amber-600">€8.50 <span className="text-[10px] text-[#8C847A] font-normal">/ ptn</span></span>
                <button 
                  onClick={() => {
                    setSelectedPasta('photys');
                    triggerToast("Photys Cavatelli loaded into Atelier!");
                  }} 
                  className="text-xs font-semibold text-[#3D352E] hover:text-[#D9A036] transition-colors flex items-center gap-0.5"
                >
                  Configure <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CULINARY INTELLIGENCE & HEAT ANALYSIS */}
      <section id="intelligence" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#FAF8F3] rounded-[36px] border border-[#EBE6DC] p-8 md:p-12 relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#8C847A] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#5D8063]" /> Sensory Lab Diagnostics
                </span>
                
                <h2 className="font-serif text-3xl md:text-4xl text-[#3D352E] font-normal leading-tight">
                  The Physics of <br />
                  <span className="italic font-serif text-[#5D8063]">Sauce Adhesion</span> Dynamics
                </h2>
                
                <p className="text-sm text-[#8C847A] leading-relaxed">
                  Every groove on a Torrente loop is calculated to create localized capillary pressure. This holds emulsified butter lipids in suspended balance, preventing separation on the plate.
                </p>

                <div className="space-y-4 pt-4">
                  {/* Metric Progress 1 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-[#3D352E]">
                      <span>Starch Release Equilibrium</span>
                      <span>96% Optimal</span>
                    </div>
                    <div className="w-full h-1 bg-[#EFECE3] rounded-full overflow-hidden">
                      <div className="h-full bg-[#5D8063]" style={{ width: '96%' }} />
                    </div>
                  </div>
                  {/* Metric Progress 2 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-[#3D352E]">
                      <span>Hydration Core Penetration Velocity</span>
                      <span>88% Consistency</span>
                    </div>
                    <div className="w-full h-1 bg-[#EFECE3] rounded-full overflow-hidden">
                      <div className="h-full bg-[#D9A036]" style={{ width: '88%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphic Representation of Molecular Cooking */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-[420px] bg-white rounded-3xl border border-[#EDE7DB] p-6 shadow-md space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#3D352E]">Capillary Tension Spectrum</span>
                    <span className="text-[10px] text-[#8C847A] uppercase font-bold">100Hz Scanning</span>
                  </div>
                  
                  {/* Mock Heat/Tension Graph */}
                  <div className="h-44 w-full bg-[#FCFAF6] rounded-xl border border-[#F0ECE1] flex items-end p-2 relative overflow-hidden">
                    {/* Graph grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-15">
                      <div className="w-full h-[1px] bg-stone-400" />
                      <div className="w-full h-[1px] bg-stone-400" />
                      <div className="w-full h-[1px] bg-stone-400" />
                    </div>
                    
                    {/* Animated SVG wave line */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                      <path d="M0,150 Q50,50 100,120 T200,80 T300,140 T400,90 L400,200 L0,200 Z" fill="url(#waveGrad)" opacity="0.1" />
                      <path d="M0,150 Q50,50 100,120 T200,80 T300,140 T400,90" stroke="#D9A036" strokeWidth="3" fill="none" strokeLinecap="round" />
                      <path d="M0,160 Q50,70 100,130 T200,90 T300,150 T400,100" stroke="#5D8063" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                      <defs>
                        <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#D9A036" />
                          <stop offset="100%" stopColor="#FFFFFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Interactive Node Indicators */}
                    <div className="absolute top-[30%] left-[25%] w-3 h-3 rounded-full bg-[#D9A036] border-2 border-white shadow-md animate-ping" />
                    <div className="absolute top-[45%] left-[55%] w-3 h-3 rounded-full bg-[#5D8063] border-2 border-white shadow-md" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-[#FCFAF6] rounded-xl border border-[#F0ECE1]">
                      <span className="text-[10px] text-[#8C847A] uppercase font-semibold block">Viscous Drag</span>
                      <span className="text-sm font-bold text-[#3D352E]">4.82 mPa·s</span>
                    </div>
                    <div className="p-3 bg-[#FCFAF6] rounded-xl border border-[#F0ECE1]">
                      <span className="text-[10px] text-[#8C847A] uppercase font-semibold block">Nutrient Index</span>
                      <span className="text-sm font-bold text-[#5D8063]">0.983 / µm</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER & GENTLE NEWSLETTER SIGNUP */}
      <footer className="mt-auto bg-[#3D352E] text-[#FBF9F4] pt-20 pb-12 relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column Brand */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF1D6] flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-[#3D352E]">C</span>
                </div>
                <div>
                  <span className="font-serif text-xl font-bold tracking-tight text-[#FAF1D6] block">Coojy Copig</span>
                  <span className="text-[10px] tracking-widest text-[#8C847A] uppercase block -mt-1 font-semibold">Atelier de Gastronomie</span>
                </div>
              </div>
              <p className="text-xs text-[#C5BEB5] leading-relaxed max-w-sm">
                Dedicated to restoring absolute visual and molecular craftsmanship to home cookery, one precise wheat kernel at a time.
              </p>
              
              {/* Contact / Loc */}
              <div className="text-xs text-[#A8A198] space-y-1 pt-2">
                <p>📍 Culinary Forge &amp; Fields: Tuscany, Italy</p>
                <p>✉️ Atelier Concierge: concierge@coojy-copig.culinary</p>
              </div>
            </div>

            {/* Middle Nav Links Grid */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-6 text-xs text-[#C5BEB5]">
              <div className="space-y-3">
                <h4 className="font-bold text-white uppercase tracking-wider mb-2">The Grains</h4>
                <p className="hover:text-white cursor-pointer transition-colors">Sonnets Semolina</p>
                <p className="hover:text-white cursor-pointer transition-colors">Torrente Ruote</p>
                <p className="hover:text-white cursor-pointer transition-colors">Photys Medley</p>
                <p className="hover:text-white cursor-pointer transition-colors">Reoni Tagliolini</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-white uppercase tracking-wider mb-2">Atelier</h4>
                <p className="hover:text-white cursor-pointer transition-colors">Sensory Diagnostics</p>
                <p className="hover:text-white cursor-pointer transition-colors">Bronze Extrusion</p>
                <p className="hover:text-white cursor-pointer transition-colors">Lunar Hydration</p>
                <p className="hover:text-white cursor-pointer transition-colors">Carbon Ledger</p>
              </div>
            </div>

            {/* Right Newsletter Dispatch */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-serif text-lg text-white font-normal">Subscribe to Seasonal Dispatches</h4>
              <p className="text-xs text-[#C5BEB5] leading-relaxed">
                Receive intimate notifications regarding limited micro-batch harvests, ancient-grain restorations, and experimental laboratory formulas.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <input 
                  type="email" 
                  placeholder="your.email@atelier.com" 
                  className="bg-[#4F463E] border border-[#645B52] rounded-full px-4 py-2.5 text-xs text-[#FAF1D6] placeholder-[#A8A198] outline-none focus:border-[#D9A036] transition-all flex-1"
                />
                <button 
                  onClick={() => triggerToast("📨 Subscription confirmed! Welcome to the culinary collective.")}
                  className="px-5 py-2.5 rounded-full bg-[#D9A036] hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all shrink-0"
                >
                  Join List
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Copyright and Legal Bar */}
          <div className="pt-8 border-t border-[#645B52] flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-[#A8A198]">
            <p>© {new Date().getFullYear()} Coojy Copig s.r.l. All rights reserved globally.</p>
            <div className="flex gap-6">
              <span className="hover:text-white cursor-pointer">Molecular Integrity Guarantee</span>
              <span className="hover:text-white cursor-pointer">Sourcing Records</span>
              <span className="hover:text-white cursor-pointer">Privacy Protocol</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
II