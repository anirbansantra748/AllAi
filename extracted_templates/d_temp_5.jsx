import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Sun, 
  Droplets, 
  Compass, 
  ChevronRight, 
  X, 
  ArrowRight, 
  Sliders, 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  ArrowUpRight, 
  Info,
  Layers,
  ThermometerSun,
  ShieldAlert,
  ShoppingBag,
  Check,
  User,
  Heart
} from 'lucide-react';

// Premium Curated Plant Database
const PLANT_DATA = [
  {
    id: 'hosta-halcyon',
    name: "Hosta 'Halcyon'",
    scientific: "Hosta tardiana",
    class: "Green Host",
    lightLevel: "Full Shade",
    lightValue: 15, // 0-100 scale from dark to sun
    water: "Keep Moist",
    difficulty: "Beginner",
    height: "15-18 inches",
    origin: "East Asia (Japan/Korea)",
    description: "An exceptionally resilient, blue-green classic hosta with thick, heavily textured heart-shaped leaves. Its dense foliage acts as an architectural carpet for dark under-canopy environments.",
    benefits: ["Air purifying", "High shade adaptability", "Frost resilient"],
    image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'hosta-empress-wu',
    name: "Hosta 'Empress Wu'",
    scientific: "Hosta fortunei hybrid",
    class: "Giant Host",
    lightLevel: "Dappled Shade",
    lightValue: 35,
    water: "Moderate Water",
    difficulty: "Intermediate",
    height: "3-4 feet",
    origin: "Horticultural Selection",
    description: "One of the largest hostas in cultivation, sports colossal dark-green ribbed leaves that span up to two feet wide. Commands absolute attention as a structural specimen in premium landscape design.",
    benefits: ["Enormous canopy", "Hummingbird attractor", "Deep root structure"],
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'calathea-orbifolia',
    name: "Calathea Orbifolia",
    scientific: "Goeppertia orbifolia",
    class: "Prayer Plant",
    lightLevel: "Dappled Shade",
    lightValue: 40,
    water: "High Humidity Needed",
    difficulty: "Advanced",
    height: "2-3 feet",
    origin: "Bolivia",
    description: "An exotic indoor botanical masterpiece featuring wide, round leaves striped with elegant silver-green bands. Its leaves dramatically rise and fall to match diurnal light rhythms.",
    benefits: ["Dynamic circadian movement", "Pet safe", "Exceptional indoor air cleanser"],
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'hosta-guacamole',
    name: "Hosta 'Guacamole'",
    scientific: "Hosta hybrid",
    class: "Variegated Host",
    lightLevel: "Partial Sun",
    lightValue: 60,
    water: "Regular Watering",
    difficulty: "Beginner",
    height: "18-22 inches",
    origin: "North American Cultivar",
    description: "Fascinating chartreuse leaves bordered with rich dark emerald margins. Unlike traditional hostas, the Guacamole thrives in partial sun and sends up exceptionally fragrant lavender blooms in mid-summer.",
    benefits: ["Fragrant blossoms", "Sun tolerance", "Striking bi-color contrast"],
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'adiantum-pedatum',
    name: "Maidenhair Fern",
    scientific: "Adiantum pedatum",
    class: "Understory Fern",
    lightLevel: "Full Shade",
    lightValue: 10,
    water: "Consistently Wet",
    difficulty: "Advanced",
    height: "12-24 inches",
    origin: "North American Forests",
    description: "Features delicate, fan-shaped fronds arranged in elegant semi-circles atop contrasting dark, wiry stems. Elevates raw organic design with its whisper-light, airy aesthetic.",
    benefits: ["Ultra-fine texture", "Therapeutic organic visual", "Thrives in moist corners"],
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'monstera-deliciosa',
    name: "Monstera Deliciosa",
    scientific: "Monstera deliciosa",
    class: "Tropical Climber",
    lightLevel: "Full Sun",
    lightValue: 85,
    water: "Dries between waters",
    difficulty: "Beginner",
    height: "6-10 feet",
    origin: "Mexican Rainforests",
    description: "The iconic split-leaf giant. Its dramatic leaf fenestrations evolved in response to tropical rainstorms, allowing wind and dappled solar rays to pass gracefully through to lower foliage.",
    benefits: ["Striking architecture", "Rapid growth", "Highly resilient"],
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=600"
  }
];

export default function App() {
  // Navigation & Interactive States
  const [heroActiveTab, setHeroActiveTab] = useState('about'); // 'about' | 'types' | 'gallery'
  const [selectedPlant, setSelectedPlant] = useState(null); // Plant object for global modal inspector
  const [simulationLight, setSimulationLight] = useState(35); // 0-100 state for Interactive Light Simulator
  const [favorites, setFavorites] = useState([]);
  const [bookingStatus, setBookingStatus] = useState(null); // 'success' or null
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  // Filter plant database based on Light Simulator value
  const getSimulatedPlants = () => {
    return PLANT_DATA.filter(p => {
      // Find plants within +- 25 units of the current light slider
      return Math.abs(p.lightValue - simulationLight) <= 30;
    });
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setBookingStatus('success');
    setTimeout(() => {
      setBookingStatus(null);
      setContactForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  // Helper to determine light classification text from value
  const getLightCategoryFromValue = (val) => {
    if (val < 25) return "Deep Shade Canopy (Full Shade)";
    if (val < 50) return "Filtered Woodland Canopy (Dappled Shade)";
    if (val < 75) return "Under-Story Break (Partial Sun)";
    return "Open Horizon (Full Sun)";
  };

  return (
    <div className="min-h-screen bg-[#07130b] text-neutral-100 font-sans selection:bg-emerald-800/60 selection:text-emerald-100 overflow-x-hidden relative">
      
      {/* Cinematic Background Foliage Underlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] pointer-events-none mix-blend-luminosity transform scale-105 transition-transform duration-[10000ms] ease-out"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=2000')` }}
      />
      
      {/* Decorative Aurora Ambient Glowing Spheres */}
      <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-emerald-950/25 blur-[120px] pointer-events-none mix-blend-color-dodge animate-pulse duration-10000" />
      <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-900/10 blur-[150px] pointer-events-none mix-blend-color-dodge" />
      <div className="absolute bottom-[5%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-emerald-950/20 blur-[130px] pointer-events-none" />

      {/* Global Glassmorphic Floating Header */}
      <header className="sticky top-0 z-40 w-full bg-[#07130b]/60 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brandmark */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-800 to-emerald-400 p-[1px] shadow-[0_0_15px_rgba(52,211,153,0.15)] group-hover:shadow-[0_0_25px_rgba(52,211,153,0.3)] transition-all duration-500">
              <div className="w-full h-full bg-[#07130b]/90 rounded-[11px] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-400 transform group-hover:rotate-12 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.25em] text-white uppercase group-hover:text-emerald-300 transition-colors">PHYLLO</span>
              <span className="text-[9px] tracking-wider text-neutral-400">BOTANICAL STUDIO</span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-xs font-medium tracking-widest text-neutral-300 hover:text-white uppercase transition-colors">About</a>
            <a href="#simulator" className="text-xs font-medium tracking-widest text-neutral-300 hover:text-white uppercase transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Light Lab
            </a>
            <a href="#registry" className="text-xs font-medium tracking-widest text-neutral-300 hover:text-white uppercase transition-colors">Registry</a>
            <a href="#curations" className="text-xs font-medium tracking-widest text-neutral-300 hover:text-white uppercase transition-colors">Subscriptions</a>
            <a href="#faqs" className="text-xs font-medium tracking-widest text-neutral-300 hover:text-white uppercase transition-colors">Insights</a>
          </nav>

          {/* Interactive Action Bar */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs font-semibold tracking-wider text-neutral-200 hover:bg-white hover:text-[#07130b] hover:border-white transition-all duration-300"
            >
              Enquire
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button 
              onClick={() => document.getElementById('registry').scrollIntoView({ behavior: 'smooth' })} 
              className="bg-emerald-400/90 hover:bg-emerald-300 text-neutral-950 font-bold px-5 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(52,211,153,0.2)] hover:shadow-[0_4px_30px_rgba(52,211,153,0.4)] hover:scale-105 active:scale-95"
            >
              Explore Sanctuary
            </button>
          </div>

        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">

        {/* SECTION 1: THE INSPIRED HERO EXPERIENCE (CLOSE TO 90% SIMILAR VISUAL DNA) */}
        <section id="about" className="pt-4 pb-20">
          
          {/* Breadcrumb Info Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] tracking-[0.2em] uppercase text-emerald-400">
              <Sparkles className="w-3 h-3 animate-spin duration-[6000ms]" /> Crafted Architectural Flora
            </span>
          </div>

          {/* MAIN HERO CONTAINER (Modeled exactly like the upload image) */}
          <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.6)] group">
            
            {/* Base Image Backdrop (Blur and leaf layers to simulate the deep leaf context) */}
            <div className="absolute inset-0 bg-cover bg-center transform scale-100 group-hover:scale-105 transition-transform duration-[8000ms] ease-out filter brightness-[0.25]"
                 style={{ backgroundImage: `url('https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=1500')` }} />
            
            {/* The Floating Translucent Glassmorphic Panel Container */}
            <div className="relative z-10 w-full p-6 sm:p-10 md:p-12 lg:p-14 bg-[#142d1b]/45 backdrop-blur-[24px] border border-white/[0.08] rounded-3xl transition-all duration-500">
              
              {/* Header inside the glass */}
              <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-8 md:mb-12">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-[3px]">
                    <span className="w-5 h-[1.5px] bg-white/70" />
                    <span className="w-5 h-[1.5px] bg-white/70" />
                    <span className="w-3 h-[1.5px] bg-white/70" />
                  </div>
                  <span className="text-[10px] md:text-xs tracking-[0.3em] font-semibold text-white/90 uppercase">
                    ABOUT LIFE AND PLANTS
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] tracking-widest uppercase text-white/60">LIVE CANOPY FEED</span>
                </div>
              </div>

              {/* Central Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                
                {/* Left side: Premium organic frame with actual leaf imagery */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group/leaf">
                    <img 
                      src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800" 
                      alt="Hosta Leaf Anatomy" 
                      className="w-full h-full object-cover transform scale-100 group-hover/leaf:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Anatomical Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-[#07130b]/85 backdrop-blur-md p-3 rounded-xl border border-white/10 transform translate-y-1 group-hover/leaf:translate-y-0 transition-transform duration-500">
                      <p className="text-[9px] tracking-widest text-emerald-400 uppercase font-semibold">Anatomy of Flora</p>
                      <h4 className="text-[11px] font-bold text-white mt-0.5">Striated Deep-Rib Ribbing</h4>
                    </div>
                  </div>
                </div>

                {/* Right side: Cinematic bold texts & Interactive dynamic content tabs */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left">
                  
                  {/* Enjoy Nature Main Heading with exact font weight emphasis */}
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-none">
                    Enjoy <br />
                    <span className="text-emerald-100/90 font-medium">Nature</span>
                  </h1>

                  {/* Dynamic Interactive States inside the Hero panel */}
                  <div className="min-h-[140px] transition-all duration-300">
                    {heroActiveTab === 'about' && (
                      <div className="animate-fade-in">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg md:text-xl font-light tracking-wide text-neutral-100">Green hosts</h3>
                          <div className="flex-grow h-[1px] bg-white/20" />
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-neutral-300 font-light max-w-lg">
                          Hosta is an extremely resilient plant that can survive in a variety of conditions, from full shade to full sun. In some countries, such as Japan and Korea, young hosta leaves are harvested and used for food.
                        </p>
                      </div>
                    )}

                    {heroActiveTab === 'types' && (
                      <div className="animate-fade-in">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg md:text-xl font-light tracking-wide text-neutral-100">Species Versatility</h3>
                          <div className="flex-grow h-[1px] bg-white/20" />
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-neutral-300 font-light max-w-lg">
                          From the dense blue-gray of 'Halcyon' to the massive lime-green leaves of 'Empress Wu', hostas present an unmatched architecture of shade-loving foliage. Perfect for low-light garden levels and architectural ground cover.
                        </p>
                      </div>
                    )}

                    {heroActiveTab === 'gallery' && (
                      <div className="animate-fade-in">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg md:text-xl font-light tracking-wide text-neutral-100">Botanical Sanctuaries</h3>
                          <div className="flex-grow h-[1px] bg-white/20" />
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-neutral-300 font-light max-w-lg">
                          Experience nature in curated spatial designs. Our galleries exhibit beautiful integrations of lush microclimates within minimalist concrete estates, dark wood interiors, and sleek modern offices.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bottom Navigation Row matching the visual layout exactly */}
                  <div className="flex flex-wrap items-center gap-4 mt-8 md:mt-12 pt-6 border-t border-white/5">
                    <button 
                      onClick={() => {
                        setHeroActiveTab('about');
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs tracking-wider text-neutral-400 hover:text-white transition-colors duration-300 focus:outline-none"
                    >
                      Connect with nature
                    </button>
                    
                    <div className="flex items-center gap-2">
                      {/* Outlined button */}
                      <button 
                        onClick={() => setHeroActiveTab('types')}
                        className={`px-5 py-2.5 rounded-full border text-xs tracking-wider transition-all duration-300 uppercase ${
                          heroActiveTab === 'types' 
                            ? 'bg-white/10 text-white border-white' 
                            : 'bg-transparent text-neutral-300 border-white/20 hover:border-white/50'
                        }`}
                      >
                        types of host
                      </button>
                      
                      {/* Solid light button */}
                      <button 
                        onClick={() => setHeroActiveTab('gallery')}
                        className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                          heroActiveTab === 'gallery'
                            ? 'bg-emerald-400 text-[#07130b] scale-105'
                            : 'bg-[#e3ede5] text-[#07130b] hover:bg-white hover:shadow-[0_4px_15px_rgba(255,255,255,0.1)]'
                        }`}
                      >
                        Gallery
                      </button>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* BRANDS & PHILOSOPHY STRIP */}
        <section className="py-12 border-t border-b border-white/5 my-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-light text-white tracking-wide">98%</p>
              <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase mt-1">Shade Adaptability Rate</p>
            </div>
            <div>
              <p className="text-3xl font-light text-white tracking-wide">120+</p>
              <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase mt-1">Curated Rare Species</p>
            </div>
            <div>
              <p className="text-3xl font-light text-white tracking-wide">6m+</p>
              <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase mt-1">Gallons of Air Filtered</p>
            </div>
            <div>
              <p className="text-3xl font-light text-white tracking-wide">Elite</p>
              <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase mt-1">Architectural Rating</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: INTERACTIVE LIGHT LAB SIMULATOR (DYNAMICS IN PLAY) */}
        <section id="simulator" className="py-16">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] tracking-[0.3em] text-emerald-400 font-semibold uppercase">ECOSYSTEM TECHNOLOGY</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">The Atmospheric Light Simulator</h2>
            <p className="text-neutral-400 text-sm mt-3 font-light leading-relaxed">
              Drag the solar slider below to transition light variables from absolute darkness (0%) to intense open canopy exposure (100%). Observe how native biology filters dynamically to match the exact light recipe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive Control Deck */}
            <div className="lg:col-span-4 bg-[#142d1b]/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-semibold tracking-widest text-white uppercase">Control Console</h3>
                </div>

                {/* Simulated Environment Readout */}
                <div className="bg-black/35 rounded-xl p-5 border border-white/[0.03] mb-8">
                  <p className="text-[10px] tracking-wider text-neutral-500 uppercase">Simulated Microclimate</p>
                  <p className="text-base font-medium text-white mt-1">
                    {getLightCategoryFromValue(simulationLight)}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-2xl font-bold text-emerald-300">{simulationLight}%</span>
                    <span className="text-xs text-neutral-400">Total Solar Exposure Index</span>
                  </div>
                </div>

                {/* The Custom Slider Range */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-400 flex items-center gap-1"><Compass className="w-3.5 h-3.5" /> Full Shade</span>
                    <span className="text-amber-400 flex items-center gap-1"><Sun className="w-3.5 h-3.5 animate-pulse" /> Direct Sun</span>
                  </div>

                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={simulationLight} 
                    onChange={(e) => setSimulationLight(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-neutral-800 accent-emerald-400 focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 uppercase font-mono px-1">
                    <span>0% (Forest floor)</span>
                    <span>50%</span>
                    <span>100% (High plateau)</span>
                  </div>
                </div>
              </div>

              {/* Reactive Micro Guidance Card */}
              <div className="mt-8 pt-6 border-t border-white/5 text-xs text-neutral-400 flex items-start gap-3">
                <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {simulationLight < 30 ? (
                    "Deep shade creates larger surface area expansion. Plants in this range prioritize chlorophyll-b development, rendering dark blue-green and frosted patterns."
                  ) : simulationLight < 70 ? (
                    "Dappled and partial exposure supports intense structural variation and variegated outer margins to prevent foliage burn while maximizing solar capture."
                  ) : (
                    "High exposure triggers natural structural thickness, wax secretions, and rapid water circulation systems to preserve cellular hydration levels."
                  )}
                </p>
              </div>

            </div>

            {/* Simulated Live Adaptive Output */}
            <div className="lg:col-span-8 bg-[#142d1b]/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between relative overflow-hidden">
              
              {/* Dynamic lighting overlay responding to the slider */}
              <div 
                className="absolute inset-0 pointer-events-none transition-all duration-700 mix-blend-color-dodge opacity-30" 
                style={{
                  background: `radial-gradient(circle at ${simulationLight}%, rgba(251, 191, 36, 0.2) 0%, transparent 60%)`
                }}
              />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold tracking-widest text-white uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Adaptive Cohort ({getSimulatedPlants().length} Species Matched)
                  </h3>
                  <span className="text-[10px] bg-white/5 px-2.5 py-1 rounded border border-white/10 text-neutral-400 font-mono">
                    Tol: ±30% Limit
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {getSimulatedPlants().map(plant => (
                    <div 
                      key={plant.id}
                      onClick={() => setSelectedPlant(plant)}
                      className="group/pcard bg-black/40 hover:bg-[#142d1b]/50 border border-white/5 hover:border-emerald-500/20 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 flex gap-4"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-neutral-800">
                        <img src={plant.image} alt={plant.name} className="w-full h-full object-cover group-hover/pcard:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-neutral-100 group-hover/pcard:text-emerald-300 transition-colors">{plant.name}</h4>
                          <p className="text-[10px] italic text-neutral-400 font-serif mt-0.5">{plant.scientific}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[9px] bg-white/5 px-2 py-0.5 rounded text-neutral-300 font-sans tracking-wider">
                            {plant.lightLevel}
                          </span>
                          <span className="text-[9px] text-emerald-400 font-semibold">{plant.lightValue}% Solar</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Call to Action */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-neutral-400">
                  Click any micro-card to inspect cell details, origin maps, and bespoke care specs.
                </p>
                <button 
                  onClick={() => document.getElementById('registry').scrollIntoView({ behavior: 'smooth' })} 
                  className="flex items-center gap-2 text-xs text-emerald-300 hover:text-white font-semibold group/btn"
                >
                  View Complete Registry 
                  <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </section>

        {/* SECTION 3: THE COMPREHENSIVE REGISTRY (HIGH-END DESIGN GRID) */}
        <section id="registry" className="py-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-emerald-400 font-semibold uppercase">EXCLUSIVE REGISTRY</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">Rare Botanical Species</h2>
              <p className="text-neutral-400 text-sm mt-2 max-w-xl font-light">
                Explore our select species repository. Each specimen is expertly cultured, acclimatized for modern structural environments, and packaged with premium physiological monitoring.
              </p>
            </div>
            
            {/* Filter Legend */}
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] bg-white/[0.02] border border-white/10 px-3 py-1.5 rounded-full text-neutral-400">
                Total Collection: {PLANT_DATA.length} Species
              </span>
              <span className="text-[10px] bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-full text-emerald-300 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Multi-Generational Cultivars
              </span>
            </div>
          </div>

          {/* Plant Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLANT_DATA.map(plant => {
              const isFav = favorites.includes(plant.id);
              return (
                <div 
                  key={plant.id}
                  className="group bg-[#142d1b]/15 hover:bg-[#142d1b]/30 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col justify-between"
                >
                  
                  {/* Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-800 border-b border-white/5">
                    <img 
                      src={plant.image} 
                      alt={plant.name} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[4000ms] ease-out" 
                    />
                    
                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07130b] via-transparent to-transparent opacity-60" />
                    
                    {/* Favorite Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(plant.id);
                      }}
                      className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/55 backdrop-blur-md flex items-center justify-center border border-white/10 text-white hover:text-rose-400 hover:scale-110 active:scale-95 transition-all"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>

                    {/* Scientific Name Overlay */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] tracking-wider text-emerald-400 font-mono uppercase bg-black/40 px-2 py-0.5 rounded border border-white/5">
                        {plant.class}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">{plant.name}</h3>
                        <span className="text-xs text-neutral-400 italic shrink-0 mt-1 font-serif">{plant.scientific}</span>
                      </div>
                      
                      <p className="text-xs text-neutral-400 font-light leading-relaxed mt-3 line-clamp-3">
                        {plant.description}
                      </p>

                      {/* Meta stats */}
                      <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/5 text-[11px]">
                        <div className="flex items-center gap-1.5 text-neutral-400">
                          <Sun className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{plant.lightLevel}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-neutral-400">
                          <Droplets className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{plant.water}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action button inside card */}
                    <div className="mt-6 flex gap-2">
                      <button 
                        onClick={() => setSelectedPlant(plant)}
                        className="flex-grow bg-white/5 hover:bg-white/10 text-xs font-semibold tracking-wider text-white py-2.5 rounded-lg border border-white/10 transition-all duration-300"
                      >
                        Inspect Species
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedPlant(plant);
                          setTimeout(() => {
                            const configElement = document.getElementById('inspect-care-console');
                            if (configElement) configElement.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        }}
                        className="w-10 h-10 rounded-lg bg-emerald-400/90 hover:bg-emerald-300 text-neutral-950 flex items-center justify-center transition-colors"
                        title="Acquire specimen details"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </section>

        {/* SECTION 4: BOTANICAL SUBSCRIBED SERVICES (CURATIONS / SERVICES) */}
        <section id="curations" className="py-16 bg-[#142d1b]/10 backdrop-blur-md rounded-3xl p-8 border border-white/5 my-12">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] tracking-[0.3em] text-emerald-400 font-semibold uppercase">PREMIUM SUBSCRIPTION</span>
            <h2 className="text-3xl font-bold text-white mt-1">Sanctuary Curator Program</h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-light">
              Transform your workspace or residential architecture. Our monthly curation plans handle plant selection, premium glassmorphic potting, microclimatic placement, and live advisory support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Plan 1 */}
            <div className="bg-black/40 rounded-2xl p-6 border border-white/5 flex flex-col justify-between hover:border-emerald-800 transition-all duration-300 group">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Level I</span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">The Seedling</h3>
                <p className="text-xs text-neutral-500 mt-2">Bespoke starter microclimates for minimal desks or interior shelves.</p>
                
                <div className="my-6">
                  <span className="text-3xl font-bold text-white">$45</span>
                  <span className="text-neutral-500 text-xs"> / Month</span>
                </div>

                <ul className="space-y-3 border-t border-white/5 pt-6 text-xs text-neutral-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>2 Curated Shade-tolerant plants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Translucent modern grow containers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Quarterly soil renewal packs</span>
                  </li>
                </ul>
              </div>
              
              <button 
                onClick={() => {
                  setContactForm({ ...contactForm, message: "Interested in 'The Seedling' subscription level." });
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }} 
                className="mt-8 w-full py-2.5 rounded-lg border border-white/10 hover:border-white hover:bg-white hover:text-[#07130b] text-xs font-semibold tracking-wider text-neutral-300 transition-all duration-300"
              >
                Enroll In Plan
              </button>
            </div>

            {/* Plan 2 - Featured */}
            <div className="bg-emerald-950/30 rounded-2xl p-6 border border-emerald-500/20 flex flex-col justify-between relative transform scale-105 shadow-[0_10px_40px_rgba(16,185,129,0.05)] group">
              <span className="absolute top-4 right-4 bg-emerald-400/20 text-emerald-300 text-[9px] tracking-widest uppercase font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                Most Selected
              </span>
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-emerald-400 font-semibold">Level II</span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-emerald-200 transition-colors">The Conservatory</h3>
                <p className="text-xs text-neutral-400 mt-2">Expansive flora architecture designed for large living zones or creative agencies.</p>
                
                <div className="my-6">
                  <span className="text-3xl font-bold text-emerald-300">$120</span>
                  <span className="text-neutral-500 text-xs"> / Month</span>
                </div>

                <ul className="space-y-3 border-t border-emerald-800/40 pt-6 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>5 Rare architectural plants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tactile hand-built concrete/clay pots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Bi-monthly organic nutrient kits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>24/7 Digital horticulturalist chat</span>
                  </li>
                </ul>
              </div>
              
              <button 
                onClick={() => {
                  setContactForm({ ...contactForm, message: "Interested in 'The Conservatory' subscription level." });
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }} 
                className="mt-8 w-full py-2.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-[#07130b] text-xs font-bold tracking-wider uppercase transition-all duration-300"
              >
                Enroll In Plan
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-black/40 rounded-2xl p-6 border border-white/5 flex flex-col justify-between hover:border-emerald-800 transition-all duration-300 group">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Level III</span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">Botanical Sanctuary</h3>
                <p className="text-xs text-neutral-500 mt-2">Complete structural garden layout setup with ongoing physically-managed care.</p>
                
                <div className="my-6">
                  <span className="text-3xl font-bold text-white">$350</span>
                  <span className="text-neutral-500 text-xs"> / Month</span>
                </div>

                <ul className="space-y-3 border-t border-white/5 pt-6 text-xs text-neutral-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Custom bespoke plant architecture consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Bi-weekly professional in-person curator maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Unlimited seasonal specimen rotation</span>
                  </li>
                </ul>
              </div>
              
              <button 
                onClick={() => {
                  setContactForm({ ...contactForm, message: "Interested in the 'Botanical Sanctuary' complete tier." });
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }} 
                className="mt-8 w-full py-2.5 rounded-lg border border-white/10 hover:border-white hover:bg-white hover:text-[#07130b] text-xs font-semibold tracking-wider text-neutral-300 transition-all duration-300"
              >
                Enroll In Plan
              </button>
            </div>

          </div>

        </section>

        {/* SECTION 5: FAQS Accordion */}
        <section id="faqs" className="py-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] tracking-[0.3em] text-emerald-400 font-semibold uppercase">FAQ</span>
            <h2 className="text-3xl font-bold text-white mt-1">Botanical Insights</h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-2 font-light">
              Curating architectural plants is both a science and an art form. Review our primary research answers for flawless integration.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            
            <div className="bg-[#142d1b]/10 backdrop-blur-md rounded-xl p-6 border border-white/5">
              <h4 className="text-sm font-semibold text-white">How resilient are hostas in dry indoor rooms?</h4>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-light">
                Hostas are naturally forest floor survivors, meaning they tolerate low light exceptionally well. However, they appreciate a degree of moisture. Indoor environments should either feature regular leaf misting, a soil hydration container, or be placed close to a companion air purifier that maintains local humidity around 50-60%.
              </p>
            </div>

            <div className="bg-[#142d1b]/10 backdrop-blur-md rounded-xl p-6 border border-white/5">
              <h4 className="text-sm font-semibold text-white">Can I place hosta plants directly in a sunny south-facing window?</h4>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-light">
                Traditional blue and heavily striated leaf hostas (like Hosta 'Halcyon') have a waxy protective layer that can burn under intense, direct sunlight, causing leaves to turn brown or yellow-grey. Variegated specimens like Hosta 'Guacamole' can tolerate several hours of sun, but as a rule, filtered or dappled lighting yields the healthiest structural leaf colorations.
              </p>
            </div>

            <div className="bg-[#142d1b]/10 backdrop-blur-md rounded-xl p-6 border border-white/5">
              <h4 className="text-sm font-semibold text-white">What is the optimal potting mixture for shade cultivars?</h4>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-light">
                We recommend a premium blend of rich, moisture-retaining organic matter supplemented with perlite and orchid bark to allow proper ventilation. Understory shade plants need moist roots, but standard soils can easily become waterlogged, leading to root decay. Air ventilation within the root space is critical.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 6: ELEVATED ENQUIRY & CONTACT FORM */}
        <section id="contact" className="py-16">
          <div className="bg-[#142d1b]/20 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-800/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 text-left">
                <span className="text-[10px] tracking-[0.3em] text-emerald-400 font-semibold uppercase">DESIGN APPOINTMENT</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">Let's Design Your Sanctuary</h2>
                <p className="text-neutral-400 text-sm mt-3 font-light leading-relaxed">
                  Collaborate with our physical landscape architects and curation coordinators. We construct tailor-made natural habitats engineered specifically for your building's microclimate and illumination index.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-neutral-300">Headquarters: Kyoto & Seattle Studio Design labs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-neutral-300">Direct Consultation hotline: +1 (800) PHYLLO-BOTANICS</span>
                  </div>
                </div>
              </div>

              {/* Interactive Contact Form Box */}
              <div className="lg:col-span-7">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-neutral-400 mb-1.5 font-semibold">Your Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Kenji Sato"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-neutral-400 mb-1.5 font-semibold">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. kenji@domain.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-neutral-400 mb-1.5 font-semibold">Project Vision or Subscription Request</label>
                    <textarea 
                      rows="4"
                      required
                      placeholder="Share details about your space lighting levels, architectural vibe, or what subscription you wish to configure..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-colors"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-emerald-400 hover:bg-emerald-300 text-[#07130b] font-bold py-3.5 rounded-lg text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(52,211,153,0.15)] hover:shadow-[0_4px_30px_rgba(52,211,153,0.3)] flex items-center justify-center gap-2"
                  >
                    Submit Design Enquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Feedback Message */}
                  {bookingStatus === 'success' && (
                    <div className="p-4 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center gap-3 animate-fade-in text-emerald-300 text-xs leading-relaxed">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                      <p>Your design inquiry has been securely sent. A lead Phyllo Botanical Coordinator will contact you in 24 hours to schedule your solar mapping. Speak soon!</p>
                    </div>
                  )}

                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-black/40 border-t border-white/5 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-bold tracking-[0.25em] text-white">PHYLLO</span>
            </div>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Curating and engineering premium living systems to integrate natural circadian benefits with structural modern interior environments.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-neutral-300 uppercase mb-4">Ecosystem</h4>
            <ul className="space-y-2 text-xs text-neutral-500">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Hero Sanctuary</a></li>
              <li><a href="#simulator" className="hover:text-emerald-400 transition-colors">Light Lab Simulator</a></li>
              <li><a href="#registry" className="hover:text-emerald-400 transition-colors">Botanical Registry</a></li>
              <li><a href="#curations" className="hover:text-emerald-400 transition-colors">Curation Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-neutral-300 uppercase mb-4">Research & Data</h4>
            <ul className="space-y-2 text-xs text-neutral-500">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Chlorophyll Analysis</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Understory Growth Logs</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Indoor Humidity Maps</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-neutral-300 uppercase mb-4">Newsletter</h4>
            <p className="text-xs text-neutral-500 mb-4 font-light">Receive quarterly insights about shade architectural gardening & exclusive plant batch arrivals.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-400 w-full" />
              <button className="bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold px-3 py-1.5 rounded text-xs">Join</button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 PHYLLO BOTANICAL STUDIO. Inspired by wild design. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* FULL SCREEN HOLOGRAPHIC SPECIMEN INSPECTOR (MODAL / DRAWER) */}
      {selectedPlant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fade-in">
          
          <div className="bg-[#0b1f13] rounded-3xl border border-white/10 max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col lg:flex-row max-h-[90vh]">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPlant(null)}
              className="absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left side: Premium High Contrast Image Block */}
            <div className="lg:w-1/2 relative bg-neutral-900 min-h-[250px] lg:min-h-full">
              <img src={selectedPlant.image} alt={selectedPlant.name} className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-emerald-950/80 via-transparent to-transparent opacity-80" />
              
              {/* Image Footer Details */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] tracking-widest text-emerald-400 font-mono uppercase bg-[#07130b]/80 backdrop-blur-sm px-3 py-1 rounded border border-white/10">
                  Specimen ID: {selectedPlant.id}
                </span>
                <h3 className="text-3xl font-extrabold text-white mt-3 leading-tight">{selectedPlant.name}</h3>
                <p className="text-xs text-neutral-300 italic font-serif mt-1">{selectedPlant.scientific}</p>
              </div>
            </div>

            {/* Right side: Comprehensive Anatomical Report */}
            <div id="inspect-care-console" className="lg:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[60vh] lg:max-h-[90vh]">
              
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-[10px] tracking-widest text-emerald-400 uppercase font-semibold">PHYSIOLOGICAL PROFILE REPORT</span>
                <h4 className="text-sm font-bold text-neutral-300 mt-1">Acclimatization Requirements</h4>
              </div>

              {/* Grid of details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center gap-3">
                  <Sun className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-neutral-500">Light tolerance</p>
                    <p className="text-xs text-white font-semibold">{selectedPlant.lightLevel}</p>
                  </div>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center gap-3">
                  <Droplets className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-neutral-500">Hydration cycle</p>
                    <p className="text-xs text-white font-semibold">{selectedPlant.water}</p>
                  </div>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center gap-3">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-neutral-500">Expected height</p>
                    <p className="text-xs text-white font-semibold">{selectedPlant.height}</p>
                  </div>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center gap-3">
                  <ThermometerSun className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-neutral-500">Indigenous Origin</p>
                    <p className="text-xs text-white font-semibold">{selectedPlant.origin}</p>
                  </div>
                </div>
              </div>

              {/* Botanical Description Text */}
              <div className="mb-6">
                <p className="text-[10px] tracking-wider text-neutral-400 uppercase font-semibold mb-2">Description</p>
                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  {selectedPlant.description}
                </p>
              </div>

              {/* Ecological advantages */}
              <div className="mb-6">
                <p className="text-[10px] tracking-wider text-neutral-400 uppercase font-semibold mb-2">Architectural Benefits</p>
                <div className="flex flex-wrap gap-2">
                  {selectedPlant.benefits.map((ben, i) => (
                    <span key={i} className="text-[10px] bg-emerald-950/50 text-emerald-300 border border-emerald-500/20 px-3 py-1 rounded-full">
                      {ben}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Action Trigger */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3 items-center justify-between">
                <button 
                  onClick={() => {
                    const isFav = favorites.includes(selectedPlant.id);
                    toggleFavorite(selectedPlant.id);
                  }}
                  className={`px-4 py-2 rounded-lg border text-xs font-semibold tracking-wider transition-colors flex items-center gap-2 ${
                    favorites.includes(selectedPlant.id)
                      ? 'border-rose-500 text-rose-400 bg-rose-500/10'
                      : 'border-white/10 text-neutral-300 hover:border-white'
                  }`}
                >
                  <Heart className="w-3.5 h-3.5" />
                  {favorites.includes(selectedPlant.id) ? 'Favorited Specimen' : 'Add to Collection'}
                </button>
                
                <button 
                  onClick={() => {
                    setSelectedPlant(null);
                    setContactForm({ ...contactForm, message: `Hello Phyllo! I want to enquire about implementing the following specimen in my project setup: ${selectedPlant.name} (${selectedPlant.scientific}).` });
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase transition-colors"
                >
                  Schedule Solar Integration
                </button>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
6