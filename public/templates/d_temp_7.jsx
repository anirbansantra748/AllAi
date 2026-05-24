import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Layers, 
  BarChart3, 
  Cpu, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  Clock, 
  Maximize2, 
  Play, 
  ChevronRight, 
  ChevronLeft,
  Search,
  BookOpen,
  PieChart,
  Briefcase,
  GitBranch,
  Settings,
  X,
  Sparkles,
  Info,
  CheckCircle,
  TrendingDown
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState('landing'); // 'landing' or 'deck'
  const [strategyValue, setStrategyValue] = useState(60);
  const [selectedTechPillar, setSelectedTechPillar] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Real-time tick for UI clocks (seen in slide 16 of inspiration)
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const colorPalette = {
    primary: '#8B1E1F',     // Crimson Red
    primaryDark: '#5C0E0F', // Deep Burgundy
    accent: '#D9383A',      // High-energy Red
    bgLight: '#FAF8F7',     // Pearl Ivory Soft
    bgCard: '#FFFFFF',      // Pure White
    textDark: '#1E1515',    // Warm Charcoal
    textMuted: '#7A6E6D',   // Muted Taupe Grey
  };

  const slidesData = [
    {
      id: "01",
      tag: "INNOVATION",
      title: "Value Creation & Platform Engine",
      subtitle: "创新驱动 · 价值共生",
      desc: "Architecting the next standard of corporate innovation ecosystems. Bridging high-performance execution with adaptive strategic assets.",
      metrics: [
        { label: "Active Nodes", value: "2,000+", change: "+14%" },
        { label: "R&D Factories", value: "MEG-XI", sub: "Global Hub" },
        { label: "Est. Value", value: "$4.8B", change: "Top Tier" }
      ],
      type: "intro"
    },
    {
      id: "02",
      tag: "BUSINESS SEGMENTS",
      title: "Strategic Portfolio Layout",
      subtitle: "业务版块划分",
      desc: "Multi-layered corporate architecture designed to generate sustainable yields across technology, operations, and infrastructure channels.",
      metrics: [
        { label: "Tech Synergy", value: "60%", type: "gauge" },
        { label: "Market Spread", value: "82%", type: "gauge" },
        { label: "Global Reach", value: "34+", sub: "Regions Active" }
      ],
      type: "portfolio"
    },
    {
      id: "03",
      tag: "MARKET LAYOUT",
      title: "Global Capital & Financing Distribution",
      subtitle: "首次公募融资与市场布局",
      desc: "Diversified capital structures powered by high-liquidity financial instruments and decentralized validation networks.",
      metrics: [
        { label: "Financing Target", value: "$1.2B", status: "Subscribed" },
        { label: "Institutional Allocation", value: "74%", trend: "up" },
        { label: "Retail Base Growth", value: "+342%", trend: "up" }
      ],
      type: "market"
    },
    {
      id: "04",
      tag: "CORE TECHNOLOGY",
      title: "The Stratagem Neural Architecture",
      subtitle: "核心技术图谱与认知矩阵",
      desc: "Our high-density computing chip integrates complex neural nodes directly into local edge matrices, achieving instant latency drops.",
      metrics: [
        { label: "Computing Power", value: "870 TFLOPs", limit: "920 Max" },
        { label: "Neural Pathways", value: "8.4B", active: "99.4%" },
        { label: "Latency Rating", value: "<1.2ms", grade: "Class A" }
      ],
      type: "technology"
    },
    {
      id: "05",
      tag: "R&D RESULTS",
      title: "Pioneering Patents & Scalability Ratios",
      subtitle: "研发投入与高价值成果",
      desc: "Quantifiable breakthroughs tracking strategic investments against globally patented microarchitectures and verified frameworks.",
      metrics: [
        { label: "Patent Count", value: "142 Active", state: "Approved" },
        { label: "Conversion Rate", value: "82%", sub: "Industry High" },
        { label: "Annual Re-investment", value: "24.5%", target: "30% by 2027" }
      ],
      type: "results"
    },
    {
      id: "06",
      tag: "TALENT STRATEGY",
      title: "Global Elite Leadership Alignment",
      subtitle: "人才战略与全球协同组织",
      desc: "Fostering distributed operational excellence with micro-autonomous corporate teams operating under uniform core values.",
      metrics: [
        { label: "Global Headcount", value: "4,700+", location: "6 Hubs" },
        { label: "Talent Retention Ratio", value: "94.2%", standard: "Top 1%" },
        { label: "Co-creation Projects", value: "480+", status: "Active" }
      ],
      type: "talent"
    }
  ];

  // Helper mock charts coordinates
  const lineChartPoints = "10,90 40,75 80,82 120,45 160,50 200,25 240,30 280,10 320,15 360,5";
  const barHeights = [45, 75, 90, 60, 35, 80, 110, 95, 70, 85, 120, 95];

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <div className="min-h-screen font-sans flex flex-col selection:bg-[#8B1E1F] selection:text-white" style={{ backgroundColor: colorPalette.bgLight, color: colorPalette.textDark }}>
      
      {/* GLOWING AMBIENT DECORATIONS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#8B1E1F]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-[800px] right-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#D9383A]/3 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[200px] left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#8B1E1F]/4 to-transparent blur-3xl pointer-events-none" />

      {/* TOP NOTIFICATION RIBBON */}
      <div className="bg-[#1A1515] text-white py-2 px-4 text-xs tracking-wider font-mono flex justify-between items-center border-b border-[#8B1E1F]/30 relative z-50">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#D9383A] rounded-full animate-pulse"></span>
          <span>IRENA CORPORATE PLATFORM v4.2 // LIVE PORTFOLIO STATE</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span>LATENCY: 0.89MS</span>
          <span>SYSTEM INTEGRITY: 99.98%</span>
          <span className="text-[#D9383A]">GLOBAL NODE: IN-092</span>
        </div>
      </div>

      {/* STICKY GLASS NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#8B1E1F]/10 px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Brand matching the clean, red corporate aesthetic */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setViewMode('landing')}>
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-[#8B1E1F] to-[#5C0E0F] rounded-lg transform rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90 duration-500">
                <div className="w-3.5 h-3.5 border-2 border-white rounded-sm transform -rotate-45" />
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#D9383A] rounded-full border border-white animate-ping" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black tracking-tight text-[#1E1515]">IRENA</span>
                <span className="text-xs font-mono px-1.5 py-0.5 bg-[#8B1E1F]/10 text-[#8B1E1F] rounded font-bold">CORE</span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-[#7A6E6D] font-medium leading-none">Innovation Strategy</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <button 
              onClick={() => setViewMode('landing')}
              className={`pb-1 transition-colors relative ${viewMode === 'landing' ? 'text-[#8B1E1F] font-bold' : 'text-[#7A6E6D] hover:text-[#1E1515]'}`}
            >
              Enterprise Hub
              {viewMode === 'landing' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8B1E1F] rounded" />}
            </button>
            <button 
              onClick={() => { setViewMode('deck'); setActiveSlideIndex(0); }}
              className={`pb-1 transition-colors relative ${viewMode === 'deck' ? 'text-[#8B1E1F] font-bold' : 'text-[#7A6E6D] hover:text-[#1E1515]'}`}
            >
              Interactive Deck Viewer
              {viewMode === 'deck' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8B1E1F] rounded" />}
            </button>
            <a href="#sectors" className="text-[#7A6E6D] hover:text-[#1E1515] transition-colors">Business Segments</a>
            <a href="#stratagem" className="text-[#7A6E6D] hover:text-[#1E1515] transition-colors">Core R&D</a>
            <a href="#talent" className="text-[#7A6E6D] hover:text-[#1E1515] transition-colors">Global Synergy</a>
          </nav>

          {/* Call to Actions & Switchers */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setViewMode(viewMode === 'landing' ? 'deck' : 'landing')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-[#8B1E1F]/20 text-[#8B1E1F] bg-[#8B1E1F]/5 hover:bg-[#8B1E1F]/10 transition-all active:scale-95"
            >
              {viewMode === 'landing' ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-[#8B1E1F]" />
                  <span>PRESENTATION DECK</span>
                </>
              ) : (
                <>
                  <Compass className="w-3.5 h-3.5" />
                  <span>LANDING INTERFACE</span>
                </>
              )}
            </button>

            <a 
              href="#contact"
              className="px-5 py-2.5 text-xs font-semibold rounded-full bg-gradient-to-r from-[#8B1E1F] to-[#5C0E0F] text-white shadow-md hover:shadow-lg hover:shadow-[#8B1E1F]/20 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Consult Strategy
            </a>
          </div>
        </div>
      </header>

      {/* VIEWPORT CONTAINER */}
      <main className="flex-grow">
        
        {/* =======================================
            MODE A: MARKETING LANDING PAGE INTERFACE
            ======================================= */}
        {viewMode === 'landing' && (
          <div>
            
            {/* HERO SECTION - Inspired by Slide 1 (INNOVATION / Introduction) */}
            <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-b from-white via-[#FAF8F7] to-[#F2ECEB]/30 border-b border-[#8B1E1F]/10">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Intro Text Column */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* Crimson Pill Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E1F]/5 border border-[#8B1E1F]/20 text-[#8B1E1F] text-xs font-mono font-bold tracking-wider uppercase">
                    <span className="w-2 h-2 bg-[#D9383A] rounded-full animate-pulse" />
                    INNOVATION · VALUE CREATION
                  </div>
                  
                  {/* Majestic Heading */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E1515] leading-[1.08] tracking-tight">
                    Next-Gen Ecosystem <br />
                    For <span className="text-[#8B1E1F] bg-gradient-to-r from-[#8B1E1F] to-[#D9383A] bg-clip-text text-transparent">Corporate Assets</span>
                  </h1>
                  
                  {/* Chinese Bilingual Subtitle */}
                  <div className="border-l-4 border-[#8B1E1F] pl-4 text-lg text-[#5C0E0F] font-bold tracking-wide">
                    创新驱动 · 价值共生 <span className="text-xs text-[#7A6E6D] font-normal block font-mono mt-0.5">ESTABLISHED 2002 // GLOBAL EXPANSION MATRIX</span>
                  </div>

                  <p className="text-[#7A6E6D] text-base leading-relaxed max-w-xl">
                    Accelerating modern enterprise trajectories via intelligent architectural frameworks, optimized financial distribution models, and state-of-the-art edge execution technology.
                  </p>

                  {/* High Density Metric Row */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#8B1E1F]/10">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-[#7A6E6D]">Active Nodes</p>
                      <p className="text-2xl font-black text-[#8B1E1F]">2,000+</p>
                      <span className="text-[9px] text-[#D9383A] font-semibold bg-[#D9383A]/5 px-1.5 py-0.5 rounded">Global Grid</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-[#7A6E6D]">Synergy Multiplier</p>
                      <p className="text-2xl font-black text-[#1E1515]">82%</p>
                      <span className="text-[9px] text-green-700 font-semibold bg-green-50 px-1.5 py-0.5 rounded">Efficiency Peak</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-[#7A6E6D]">R&D Patents</p>
                      <p className="text-2xl font-black text-[#1E1515]">140+</p>
                      <span className="text-[9px] text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">Approved USPTO</span>
                    </div>
                  </div>

                  {/* CTA Area */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button 
                      onClick={() => setViewMode('deck')}
                      className="group flex items-center gap-3 px-6 py-3.5 bg-[#8B1E1F] text-white font-bold rounded-lg hover:bg-[#5C0E0F] transition-all shadow-lg shadow-[#8B1E1F]/20"
                    >
                      <span>Explore Interactive Deck</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a 
                      href="#sectors"
                      className="px-6 py-3.5 border border-[#8B1E1F]/20 text-[#1E1515] font-semibold rounded-lg hover:bg-[#8B1E1F]/5 transition-all"
                    >
                      Review Platforms
                    </a>
                  </div>

                </div>

                {/* Right Hero Graphics Column - Imitates the gorgeous premium architectural aesthetic of the slides */}
                <div className="lg:col-span-6 relative">
                  <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(139,30,31,0.12)] border border-[#8B1E1F]/20 bg-[#1E1515]">
                    
                    {/* Background architectural grid / graphic */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5C0E0F] via-transparent to-[#1E1515]/80 mix-blend-multiply opacity-90 z-10" />
                    
                    {/* Abstract CSS Architecture (recreating the crimson high-end buildings in slides) */}
                    <div className="absolute inset-0 flex items-end justify-center gap-2 px-8 pb-1 transition-all">
                      {/* Structure 1 */}
                      <div className="w-1/4 h-[80%] bg-gradient-to-t from-[#8B1E1F] to-[#D9383A] rounded-t-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-lines opacity-20" />
                        <div className="absolute top-4 left-4 text-white font-mono text-2xl font-black opacity-40">01</div>
                        <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-white/30 rounded" />
                      </div>
                      
                      {/* Structure 2 (Highlighted/Elevated Architecture with curve) */}
                      <div className="w-1/3 h-[95%] bg-gradient-to-b from-[#D9383A] via-[#8B1E1F] to-[#5C0E0F] rounded-t-2xl relative shadow-[0_-10px_30px_rgba(217,56,58,0.4)] overflow-hidden">
                        {/* Curved glass-like highlight resembling the slide 01 design */}
                        <div className="absolute top-0 right-0 w-full h-[60%] bg-white/10 rounded-b-full transform scale-x-125 origin-top filter blur-xs" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent)] animate-pulse" />
                        <div className="absolute bottom-10 left-6 text-white">
                          <p className="text-[10px] uppercase font-mono tracking-widest text-[#FAF8F7]/70">Ecosystem Base</p>
                          <h4 className="text-lg font-black tracking-tight">MEG-XI HQ</h4>
                        </div>
                        <div className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full animate-ping" />
                        <div className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full" />
                      </div>

                      {/* Structure 3 */}
                      <div className="w-1/5 h-[65%] bg-gradient-to-t from-[#5C0E0F] to-[#8B1E1F] rounded-t-xl relative overflow-hidden">
                        <div className="absolute bottom-4 left-4 text-white/50 font-mono text-xs">SYS_B</div>
                      </div>

                      {/* Structure 4 */}
                      <div className="w-1/6 h-[40%] bg-[#3D1415] rounded-t-lg" />
                    </div>

                    {/* Floating HUD Badges to replicate presentation design layout */}
                    <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#8B1E1F]/15 shadow-lg max-w-[180px] transform hover:scale-105 transition-transform">
                      <p className="text-[9px] font-mono uppercase text-[#8B1E1F] tracking-widest font-bold">INTRODUCING</p>
                      <h3 className="text-sm font-black text-[#1E1515] mt-1">Global Standard</h3>
                      <p className="text-[10px] text-[#7A6E6D] mt-1">High-end architecture & asset synchronization systems.</p>
                    </div>

                    <div className="absolute bottom-6 right-6 z-20 bg-[#1E1515]/90 border border-white/15 p-4 rounded-xl backdrop-blur-md text-white min-w-[200px]">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-mono tracking-widest text-white/60 uppercase">SYSTEM FEED</span>
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                      <p className="text-xs font-mono font-medium text-white/90">Generating strategy assets...</p>
                      <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-3">
                        <div className="bg-[#D9383A] h-full w-[78%] animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Backdrop shadow design */}
                  <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#8B1E1F]/10 rounded-full blur-3xl pointer-events-none" />
                </div>

              </div>
            </section>

            {/* QUICK NAVIGATION GRID - Table of Contents Theme (Slide 01/02) */}
            <section className="py-12 px-6 bg-white border-b border-[#8B1E1F]/10">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#8B1E1F] font-bold">DIRECTORY</p>
                    <h2 className="text-2xl font-black text-[#1E1515] mt-1">Platform Structural Overview</h2>
                  </div>
                  <p className="text-xs text-[#7A6E6D] max-w-xs mt-2 md:mt-0">
                    A multi-layered methodology to address capital scaling, computing infrastructure, and global talent alignment.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { num: "01", title: "Enterprise Solution", path: "Core Framework", desc: "Adaptive frameworks ensuring continuous value creation.", icon: <Layers className="w-5 h-5 text-[#8B1E1F]" /> },
                    { num: "02", title: "Business Segments", path: "Portfolio Matrix", desc: "Highly structured investment layouts yielding secure margins.", icon: <BarChart3 className="w-5 h-5 text-[#8B1E1F]" /> },
                    { num: "03", title: "Technology Strategy", path: "Neural Systems", desc: "Local computing acceleration utilizing custom matrix designs.", icon: <Cpu className="w-5 h-5 text-[#8B1E1F]" /> },
                    { num: "04", title: "Elite Leadership", path: "Synergy Grid", desc: "Aligning top-tier engineers and operators with clear mission goals.", icon: <Users className="w-5 h-5 text-[#8B1E1F]" /> }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="p-6 rounded-xl border border-[#8B1E1F]/10 bg-[#FAF8F7] hover:bg-white hover:border-[#8B1E1F]/30 hover:shadow-xl hover:shadow-[#8B1E1F]/5 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-2xl font-black font-mono text-[#8B1E1F]/30 group-hover:text-[#8B1E1F] transition-colors">{item.num}</span>
                        <div className="p-2.5 bg-white rounded-lg border border-[#8B1E1F]/5 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="text-base font-black text-[#1E1515] mb-1">{item.title}</h3>
                      <p className="text-xs font-mono text-[#D9383A] mb-3">{item.path}</p>
                      <p className="text-xs text-[#7A6E6D] leading-relaxed">{item.desc}</p>
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#8B1E1F] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Learn details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 1: DETAILED BUSINESS PORTFOLIO - Inspired by slide "Business Segment" */}
            <section id="sectors" className="py-20 px-6 bg-[#FAF8F7] relative">
              <div className="max-w-7xl mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Rich data graphic mimicking slide 04 */}
                  <div className="lg:col-span-6 space-y-6">
                    
                    <div className="bg-white p-6 rounded-2xl border border-[#8B1E1F]/10 shadow-[0_10px_35px_rgba(139,30,31,0.04)]">
                      <div className="flex justify-between items-center pb-4 border-b border-[#8B1E1F]/10 mb-6">
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-[#7A6E6D]">PORTFOLIO METRICS</p>
                          <h4 className="text-base font-black text-[#1E1515]">Performance Metrics Dashboard</h4>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-[#8B1E1F]/5 text-[#8B1E1F] font-mono text-xs font-bold">REAL-TIME</span>
                      </div>

                      <div className="grid grid-cols-2 gap-6 mb-6">
                        {/* Custom Radial Gauge */}
                        <div className="flex flex-col items-center justify-center p-4 bg-[#FAF8F7] rounded-xl border border-[#8B1E1F]/5 relative overflow-hidden">
                          <p className="text-[10px] font-mono text-[#7A6E6D] mb-2 uppercase">Synergy Index</p>
                          <div className="relative w-28 h-28 flex items-center justify-center">
                            {/* SVG Gauge */}
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                className="text-gray-200"
                                strokeWidth="3.5"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                className="text-[#8B1E1F]"
                                strokeWidth="3.5"
                                strokeDasharray="82, 100"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <div className="absolute flex flex-col items-center">
                              <span className="text-xl font-black text-[#1E1515]">82%</span>
                              <span className="text-[8px] uppercase tracking-wider text-green-700 font-bold bg-green-50 px-1 rounded">Optimal</span>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Dynamic Strategy Guage */}
                        <div className="flex flex-col items-center justify-center p-4 bg-[#FAF8F7] rounded-xl border border-[#8B1E1F]/5 relative">
                          <p className="text-[10px] font-mono text-[#7A6E6D] mb-1 uppercase">Allocation Lever</p>
                          <div className="relative w-28 h-28 flex flex-col items-center justify-center">
                            <span className="text-2xl font-black text-[#8B1E1F]">{strategyValue}%</span>
                            <span className="text-[9px] text-[#7A6E6D] text-center mb-2 leading-tight">Adjust Capital Weight</span>
                            <input 
                              type="range" 
                              min="20" 
                              max="100" 
                              value={strategyValue} 
                              onChange={(e) => setStrategyValue(e.target.value)}
                              className="w-full h-1 bg-[#8B1E1F]/20 rounded-lg appearance-none cursor-pointer accent-[#8B1E1F]" 
                            />
                          </div>
                        </div>
                      </div>

                      {/* Mock Chart displaying Segment Expansion Rate */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-mono text-[#7A6E6D]">Global Capital Channel Expansion</span>
                          <span className="font-bold text-[#8B1E1F]">+342.5%</span>
                        </div>
                        
                        <div className="h-20 w-full bg-[#FAF8F7] rounded-lg border border-[#8B1E1F]/5 p-2 flex items-end justify-between relative overflow-hidden">
                          {/* Absolute glowing line back */}
                          <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-[#8B1E1F]/10 pointer-events-none" />
                          {barHeights.map((h, i) => (
                            <div 
                              key={i} 
                              className="w-[6%] bg-gradient-to-t from-[#8B1E1F] to-[#D9383A] rounded-t-xs hover:opacity-80 transition-opacity relative group"
                              style={{ height: `${h / 1.5}%` }}
                            >
                              {/* Hover Indicator Tooltip */}
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-[#1E1515] text-white text-[8px] py-0.5 px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap mb-1">
                                val: {h * 3}k
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between text-[9px] font-mono text-[#7A6E6D] uppercase">
                          <span>Q1 2025</span>
                          <span>Q2 2025</span>
                          <span>Q3 2025</span>
                          <span>Q4 2025</span>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Right Column: Descriptions & Text matching the structured format */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E1F]/5 border border-[#8B1E1F]/10 text-[#8B1E1F] text-xs font-mono font-semibold">
                      <span>SEGMENT CLASSIFICATION</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#1E1515] leading-tight">
                      Architecting High-Yield <br />Business Verticals
                    </h2>
                    <p className="text-[#7A6E6D] text-sm leading-relaxed">
                      We target system-critical infrastructure and technological assets. Our balanced structural configuration is optimized to mitigate macroeconomic volatility.
                    </p>

                    <div className="space-y-4">
                      
                      {[
                        { title: "Strategic Resource Pools", desc: "Pooling tier-1 sovereign and institutional investments to deploy massive scale solutions.", code: "POOL_SYS_01" },
                        { title: "Decentralized Edge Hubs", desc: "Deploying deep localized edge matrices for reduced network friction and ultra-low latency.", code: "EDGE_NODE_B" },
                        { title: "Core R&D Scaling Protocols", desc: "Reinvesting up to 24.5% of absolute yields directly back into proprietary silicone research.", code: "R_D_PROTO_X" }
                      ].map((subItem, idx) => (
                        <div 
                          key={idx} 
                          className="p-4 bg-white rounded-xl border-l-4 border-l-[#8B1E1F] border border-[#8B1E1F]/10 hover:shadow-md transition-shadow flex gap-4 items-start"
                        >
                          <span className="p-1 bg-[#8B1E1F]/5 text-[#8B1E1F] rounded-lg text-xs font-mono font-bold mt-0.5">{subItem.code}</span>
                          <div>
                            <h4 className="text-sm font-black text-[#1E1515]">{subItem.title}</h4>
                            <p className="text-xs text-[#7A6E6D] mt-1">{subItem.desc}</p>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>

                </div>

              </div>
            </section>

            {/* SECTION 2: THE COGNITIVE MATRIX (Stratagem Silicon Chip) - Inspired by slides 10, 11, 14 */}
            <section id="stratagem" className="py-20 px-6 bg-white relative overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#8B1E1F]/5 border border-[#8B1E1F]/15 text-[#8B1E1F] text-xs font-mono font-bold">
                    CORE COGNITIVE RESEARCH
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#1E1515]">
                    Stratagem Silicon Computing Node
                  </h2>
                  <p className="text-[#7A6E6D] text-sm">
                    Recreating our high-density mechanical & neural processors that drive low-latency global strategy distributions.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Interactive Chip Selector */}
                  <div className="lg:col-span-4 space-y-3">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#8B1E1F] font-bold mb-4">COMPUTING PATHWAYS</p>
                    
                    {[
                      { title: "Neural Pathway Routing", desc: "Autonomous core configurations with 8.4 Billion active strategic channels.", speed: "870 TFLOPs" },
                      { title: "Dynamic Yield Optimization", desc: "Automated real-time scaling of liquidity distributions based on usage.", speed: "Sub-1.2ms" },
                      { title: "Thermal Mitigation Array", desc: "Advanced structural mechanical housings protecting hardware clusters.", speed: "Active Cooling" }
                    ].map((pill, pIdx) => (
                      <div 
                        key={pIdx}
                        onClick={() => setSelectedTechPillar(pIdx)}
                        className={`p-5 rounded-xl border cursor-pointer transition-all ${selectedTechPillar === pIdx ? 'bg-[#8B1E1F] text-white border-transparent shadow-lg shadow-[#8B1E1F]/20' : 'bg-[#FAF8F7] text-[#1E1515] border-[#8B1E1F]/10 hover:border-[#8B1E1F]/20'}`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-mono opacity-80 uppercase tracking-widest">LAYER 0{pIdx + 1}</span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${selectedTechPillar === pIdx ? 'bg-white/20 text-white' : 'bg-[#8B1E1F]/5 text-[#8B1E1F]'}`}>{pill.speed}</span>
                        </div>
                        <h4 className="text-base font-black tracking-tight">{pill.title}</h4>
                        <p className={`text-xs mt-2 leading-relaxed ${selectedTechPillar === pIdx ? 'text-white/80' : 'text-[#7A6E6D]'}`}>{pill.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Center Column: Gorgeous 3D-Like interactive render matching Slide 11 */}
                  <div className="lg:col-span-8 flex justify-center items-center bg-[#FAF8F7] rounded-3xl p-8 border border-[#8B1E1F]/10 min-h-[450px] relative">
                    
                    {/* Decorative technical specs elements */}
                    <div className="absolute top-4 left-4 font-mono text-[9px] text-[#7A6E6D]/80 space-y-1">
                      <p>SYS.RENDER: ACTIVE_VIEW</p>
                      <p>PERSPECTIVE: ISO_3D_MATRIX</p>
                      <p>CHIP_TEMP: 32.4°C [SAFE]</p>
                    </div>

                    <div className="absolute bottom-4 right-4 font-mono text-[9px] text-[#7A6E6D]/80 flex gap-4">
                      <span>R&D STAGE: SIX_X</span>
                      <span>MODEL_REF: M-2026_GEN</span>
                    </div>

                    {/* Outer ambient glow circle */}
                    <div className="absolute w-72 h-72 rounded-full border border-dashed border-[#8B1E1F]/10 animate-spin" style={{ animationDuration: '40s' }} />
                    <div className="absolute w-56 h-56 rounded-full border border-[#8B1E1F]/5 animate-pulse" />

                    {/* Central 3D Interactive Mechanical Cube representation from the slide */}
                    <div className="relative z-10 w-64 h-64 flex items-center justify-center">
                      
                      {/* Animated Floating Particles representing strategy operations */}
                      <span className="absolute top-10 left-10 w-2 h-2 bg-[#8B1E1F] rounded-full animate-ping" />
                      <span className="absolute bottom-12 right-12 w-2 h-2 bg-[#D9383A] rounded-full animate-ping" />

                      {/* Main Cube Wrapper */}
                      <div className="w-48 h-48 bg-gradient-to-br from-[#1E1515] to-[#3D1415] rounded-3xl shadow-[0_20px_45px_rgba(26,21,21,0.25)] border-2 border-[#8B1E1F]/20 flex flex-col items-center justify-center p-6 text-center transform hover:scale-105 duration-300 relative overflow-hidden group">
                        
                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        
                        {/* Inner Silicon Centerpiece core (from slide 11) */}
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#8B1E1F] via-[#D9383A] to-[#8B1E1F] flex items-center justify-center shadow-inner relative overflow-hidden mb-3 animate-pulse">
                          <Cpu className="w-8 h-8 text-white" />
                          
                          {/* Inner glowing corner nodes */}
                          <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full" />
                          <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-white rounded-full" />
                        </div>

                        <p className="text-white text-xs font-mono tracking-widest uppercase font-bold">COGNITIVE STRATAGEM</p>
                        <p className="text-[#FAF8F7]/60 text-[10px] mt-1 leading-tight">ACTIVE NODE EXPANSION MODEL</p>

                        {/* Interactive dynamic numeric output overlay inside block */}
                        <div className="mt-3 bg-[#FAF8F7]/10 rounded px-2.5 py-1 flex items-center gap-1.5 text-white">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                          <span className="font-mono text-xs font-bold">{selectedTechPillar === 0 ? "SYS_ACTIVE: 8.4B" : selectedTechPillar === 1 ? "LATENCY: 1.12ms" : "COOLING: ON"}</span>
                        </div>

                      </div>

                    </div>

                    {/* Interactive parameter controls overlay */}
                    <div className="absolute top-4 right-4 bg-white p-3 rounded-lg border border-[#8B1E1F]/15 shadow-sm max-w-[150px]">
                      <span className="text-[8px] font-mono text-[#7A6E6D] uppercase block">CHIP SCATTER</span>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="w-2.5 h-2.5 rounded bg-[#8B1E1F]" />
                        <span className="w-2.5 h-2.5 rounded bg-[#8B1E1F]/60" />
                        <span className="w-2.5 h-2.5 rounded bg-[#8B1E1F]/30" />
                        <span className="w-2.5 h-2.5 rounded bg-[#8B1E1F]/10" />
                      </div>
                      <span className="text-[9px] text-[#7A6E6D] block mt-1">Tier-1 Silicon Layering</span>
                    </div>

                  </div>

                </div>

              </div>
            </section>

            {/* SECTION 3: MANAGEMENT TEAM & TALENT ALIGNMENT */}
            <section id="talent" className="py-20 px-6 bg-[#FAF8F7] border-t border-[#8B1E1F]/10">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
                  <div className="space-y-2">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#8B1E1F] font-bold">HUMAN ASSET SYNERGY</p>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#1E1515]">Corporate Elite Leadership</h2>
                  </div>
                  <p className="text-[#7A6E6D] text-sm max-w-md mt-4 lg:mt-0">
                    Our team merges deep computational capability with multi-sector macroeconomic leadership. Operating across 6 key global innovation centers.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Leader 1 */}
                  <div className="bg-white p-6 rounded-2xl border border-[#8B1E1F]/10 hover:border-[#8B1E1F]/30 hover:shadow-xl transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#8B1E1F] to-[#3D1415] rounded-xl flex items-center justify-center text-white font-mono text-lg font-black shadow-md">
                        JD
                      </div>
                      <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-mono font-bold rounded-full">ACTIVE NODE DIR</span>
                    </div>
                    <h3 className="text-lg font-black text-[#1E1515] group-hover:text-[#8B1E1F] transition-colors">Dr. Jonathan Vance</h3>
                    <p className="text-xs font-mono text-[#7A6E6D] mb-4">HEAD OF QUANTITATIVE ALLOCATION</p>
                    <p className="text-xs text-[#7A6E6D] leading-relaxed mb-6">
                      Formerly lead microarchitecture research engineer at global semi-conductors. Oversees physical matrix computation clusters.
                    </p>
                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-[#7A6E6D]">
                      <span>ZURICH CAMPUS</span>
                      <span className="font-mono text-[#8B1E1F]">8 Years Active</span>
                    </div>
                  </div>

                  {/* Leader 2 */}
                  <div className="bg-white p-6 rounded-2xl border border-[#8B1E1F]/10 hover:border-[#8B1E1F]/30 hover:shadow-xl transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#D9383A] to-[#8B1E1F] rounded-xl flex items-center justify-center text-white font-mono text-lg font-black shadow-md">
                        CL
                      </div>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-mono font-bold rounded-full">STRATEGY CHAIR</span>
                    </div>
                    <h3 className="text-lg font-black text-[#1E1515] group-hover:text-[#8B1E1F] transition-colors">Charlotte Lemoine</h3>
                    <p className="text-xs font-mono text-[#7A6E6D] mb-4">VP OF CAPITAL FLOW PATTERNS</p>
                    <p className="text-xs text-[#7A6E6D] leading-relaxed mb-6">
                      Coordinates sovereign scale allocation structures, ensuring legal compliance and high liquidity ratios internationally.
                    </p>
                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-[#7A6E6D]">
                      <span>PARIS OPERATIONS</span>
                      <span className="font-mono text-[#8B1E1F]">12 Years Active</span>
                    </div>
                  </div>

                  {/* Leader 3 - Featuring live clock widget inspired by talent slide */}
                  <div className="bg-[#1E1515] text-white p-6 rounded-2xl border border-[#8B1E1F]/30 relative overflow-hidden group">
                    
                    {/* Glowing crimson aura */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#8B1E1F]/40 rounded-full blur-2xl" />

                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="p-3 bg-white/10 rounded-xl text-white">
                        <Clock className="w-6 h-6 text-[#D9383A]" />
                      </div>
                      <span className="px-3 py-1 bg-white/10 text-[#FAF8F7] text-[10px] font-mono font-bold rounded-full">GLOBAL CO-CREATION</span>
                    </div>

                    <h3 className="text-lg font-black text-white mb-1">Global Timezone Sync</h3>
                    <p className="text-xs font-mono text-[#D9383A] mb-4">INTELLIGENT TEAM ALIGNMENT</p>
                    
                    {/* Live Clock Display */}
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center mb-6">
                      <p className="text-2xl font-mono font-black tracking-widest text-[#D9383A]">
                        {currentTime.toLocaleTimeString()}
                      </p>
                      <p className="text-[9px] font-mono text-white/50 uppercase mt-1">Live Coordinates Synchronized</p>
                    </div>

                    <p className="text-xs text-white/70 leading-relaxed mb-4">
                      Our platform ensures micro-teams co-author architectural frameworks in parallel time slots across Asian, European and American networks.
                    </p>

                  </div>

                </div>
              </div>
            </section>

            {/* INTERACTIVE CALL-TO-ACTION (CTA) */}
            <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#1E1515] to-[#3D1415] text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
              <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D9383A] text-xs font-mono font-bold">
                  <span>INITIATE ENGAGEMENT PROTOCOL</span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-none">
                  Ready to Accelerate Your <br />
                  <span className="text-[#D9383A]">Innovation Value Lifecycle?</span>
                </h2>

                <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
                  Join hundreds of top-tier sovereign wealth operations, core silicon labs, and distribution enterprises in leveraging the IRENA paradigm.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto pt-4">
                  <input 
                    type="email" 
                    placeholder="Enter institutional email" 
                    className="px-5 py-3.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#D9383A] transition-colors w-full"
                  />
                  <button className="px-6 py-3.5 bg-[#8B1E1F] hover:bg-[#D9383A] text-white font-bold rounded-lg transition-colors shadow-lg shadow-[#8B1E1F]/30 shrink-0">
                    Acquire Credentials
                  </button>
                </div>

                <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">
                  SECURE PLATFORM · HIGH INTEGRITY CONFIRMED
                </p>

              </div>
            </section>

          </div>
        )}

        {/* =======================================
            MODE B: INTERACTIVE SLIDE DECK VIEWER
            ======================================= */}
        {viewMode === 'deck' && (
          <div className="py-12 px-6 max-w-7xl mx-auto">
            
            {/* Header / Mode Indicator */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-[#8B1E1F]/10 pb-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#8B1E1F]/5 border border-[#8B1E1F]/20 text-[#8B1E1F] text-xs font-mono font-bold">
                  INTERACTIVE PRESENTATION MODULE
                </span>
                <h1 className="text-2xl font-black text-[#1E1515] mt-2">
                  Live Deck Sandbox
                </h1>
                <p className="text-xs text-[#7A6E6D] mt-1">
                  Recreated directly from your visual blueprint. Click through the layout pillars or play live parameters.
                </p>
              </div>

              {/* Slider Progress Indicator */}
              <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-[#8B1E1F]/10">
                <button 
                  onClick={prevSlide}
                  className="p-2 hover:bg-[#8B1E1F]/5 text-[#8B1E1F] rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-mono text-sm font-bold text-[#1E1515]">
                  {activeSlideIndex + 1} <span className="text-[#7A6E6D]">/</span> {slidesData.length}
                </span>
                <button 
                  onClick={nextSlide}
                  className="p-2 hover:bg-[#8B1E1F]/5 text-[#8B1E1F] rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick-Jump Deck Grid Panel */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
              {slidesData.map((sl, index) => (
                <button
                  key={sl.id}
                  onClick={() => setActiveSlideIndex(index)}
                  className={`p-3 rounded-xl border text-left transition-all ${activeSlideIndex === index ? 'bg-[#8B1E1F] text-white border-transparent shadow-md' : 'bg-white text-[#1E1515] border-[#8B1E1F]/10 hover:border-[#8B1E1F]/30'}`}
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <span className={`text-[10px] font-mono font-bold ${activeSlideIndex === index ? 'text-white/60' : 'text-[#8B1E1F]'}`}>{sl.id}</span>
                    <span className="text-[8px] font-mono opacity-60">Pillar</span>
                  </div>
                  <p className="text-xs font-black truncate">{sl.tag}</p>
                </button>
              ))}
            </div>

            {/* THE PRESENTATION STAGE - Replicating Slide Layout Aesthetics 1:1 */}
            <div className="bg-white rounded-3xl border border-[#8B1E1F]/15 shadow-2xl shadow-[#8B1E1F]/5 overflow-hidden relative min-h-[500px] flex flex-col justify-between">
              
              {/* Slide Header Background */}
              <div className="bg-[#1E1515] text-white p-6 flex justify-between items-center border-b border-[#8B1E1F]/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#D9383A] animate-pulse" />
                  <span className="text-xs font-mono tracking-widest text-white/70 uppercase">IRENA Core Presentation System</span>
                </div>
                <div className="flex items-center gap-6 text-xs text-white/50 font-mono">
                  <span>CONFIDENTIAL</span>
                  <span>NODE LEVEL: 09</span>
                </div>
              </div>

              {/* Main Dynamic Slide Content Viewer */}
              <div className="p-8 md:p-12 flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Slide Info */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl md:text-5xl font-black font-mono text-[#8B1E1F]/20 leading-none">
                        {slidesData[activeSlideIndex].id}
                      </span>
                      <div>
                        <span className="px-2.5 py-0.5 bg-[#8B1E1F]/10 text-[#8B1E1F] text-[10px] font-mono font-bold rounded uppercase tracking-widest">
                          {slidesData[activeSlideIndex].tag}
                        </span>
                        <p className="text-xs text-[#7A6E6D] font-bold mt-0.5 uppercase tracking-wider">
                          {slidesData[activeSlideIndex].subtitle}
                        </p>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-black text-[#1E1515] tracking-tight leading-tight">
                      {slidesData[activeSlideIndex].title}
                    </h2>

                    <p className="text-[#7A6E6D] text-sm leading-relaxed max-w-xl">
                      {slidesData[activeSlideIndex].desc}
                    </p>

                    {/* Specific Slide Visual Customizers inside Stage */}
                    {slidesData[activeSlideIndex].type === 'intro' && (
                      <div className="flex gap-4 p-4 bg-[#FAF8F7] rounded-xl border border-[#8B1E1F]/10 max-w-md">
                        <Info className="w-5 h-5 text-[#8B1E1F] shrink-0 mt-0.5" />
                        <p className="text-xs text-[#7A6E6D]">
                          This engine acts as our structural bedrock. Since 2002, we've committed to multi-layer scalability across global boundaries.
                        </p>
                      </div>
                    )}

                    {slidesData[activeSlideIndex].type === 'portfolio' && (
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-[#8B1E1F] font-bold block">DYNAMIC PORTFOLIO ALLOCATION: {strategyValue}%</label>
                        <input 
                          type="range" 
                          min="20" 
                          max="100" 
                          value={strategyValue} 
                          onChange={(e) => setStrategyValue(e.target.value)}
                          className="w-full max-w-sm h-1 bg-red-100 rounded-lg appearance-none cursor-pointer accent-[#8B1E1F]"
                        />
                      </div>
                    )}

                    {slidesData[activeSlideIndex].type === 'technology' && (
                      <div className="flex flex-wrap gap-2">
                        {["SYS_PATH_A", "SYS_PATH_B", "SYS_PATH_C"].map((path, idx) => (
                          <button 
                            key={idx}
                            onClick={() => setSelectedTechPillar(idx)}
                            className={`px-3 py-1 text-xs font-mono rounded border ${selectedTechPillar === idx ? 'bg-[#8B1E1F] text-white border-transparent' : 'bg-white text-[#7A6E6D] border-[#8B1E1F]/15 hover:bg-[#FAF8F7]'}`}
                          >
                            {path}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Slide Dynamic Graphic Render */}
                  <div className="lg:col-span-5 flex justify-center">
                    
                    {/* Render matching Intro Slide */}
                    {slidesData[activeSlideIndex].type === 'intro' && (
                      <div className="w-full aspect-square max-w-[320px] bg-gradient-to-tr from-[#1E1515] to-[#3D1415] rounded-2xl relative overflow-hidden shadow-xl border border-[#8B1E1F]/20 p-6 flex flex-col justify-end">
                        <div className="absolute top-6 left-6 text-[#D9383A] font-mono text-3xl font-black">01</div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                          <Compass className="w-40 h-40 text-[#8B1E1F] animate-spin" style={{ animationDuration: '30s' }} />
                        </div>
                        <div className="relative z-10 text-white">
                          <p className="text-[10px] font-mono text-[#D9383A] uppercase tracking-wider">FOUNDATION ARCHITECTURE</p>
                          <h4 className="text-lg font-black mt-1">MEG-XI SYSTEM CORE</h4>
                        </div>
                      </div>
                    )}

                    {/* Render matching Portfolio Slide */}
                    {slidesData[activeSlideIndex].type === 'portfolio' && (
                      <div className="w-full max-w-[320px] bg-[#FAF8F7] p-6 rounded-2xl border border-[#8B1E1F]/15 space-y-4">
                        <p className="text-xs font-mono text-[#7A6E6D] uppercase font-bold text-center">SYNERGY DISTRIBUTION WEIGHT</p>
                        <div className="flex justify-center">
                          <div className="relative w-36 h-36 flex items-center justify-center bg-white rounded-full shadow-inner border border-[#8B1E1F]/5">
                            <span className="text-3xl font-black text-[#8B1E1F]">{strategyValue}%</span>
                            <div className="absolute inset-2 rounded-full border border-dashed border-[#8B1E1F]/20 animate-spin" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
                          <div className="p-2 bg-white rounded border border-[#8B1E1F]/5">
                            <span className="block text-[#7A6E6D]">Allocation Weight</span>
                            <span className="font-bold text-[#8B1E1F]">{strategyValue} : {(100 - strategyValue)}</span>
                          </div>
                          <div className="p-2 bg-white rounded border border-[#8B1E1F]/5">
                            <span className="block text-[#7A6E6D]">Efficiency Level</span>
                            <span className="font-bold text-[#8B1E1F]">MAX SECURE</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Render matching Market Capital Distribution Slide */}
                    {slidesData[activeSlideIndex].type === 'market' && (
                      <div className="w-full max-w-[320px] bg-[#1E1515] text-white p-6 rounded-2xl border border-[#8B1E1F]/30 space-y-4 relative overflow-hidden">
                        <p className="text-xs font-mono text-[#D9383A] uppercase font-bold">GLOBAL INFLOW TRAJECTORY</p>
                        <div className="h-28 w-full flex items-end justify-between gap-1 bg-white/5 p-2 rounded border border-white/10 relative">
                          <div className="absolute inset-y-0 left-0 right-0 border-t border-dashed border-white/10" />
                          {[40, 50, 75, 45, 90, 82, 110, 105].map((h, i) => (
                            <div 
                              key={i} 
                              className="w-[10%] bg-gradient-to-t from-[#8B1E1F] to-[#D9383A] rounded-t-xs"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-mono text-white/60">
                          <span>Q1 LIQUIDITY</span>
                          <span className="text-[#D9383A]">+142%</span>
                        </div>
                      </div>
                    )}

                    {/* Render matching Silicon Computing Node Slide */}
                    {slidesData[activeSlideIndex].type === 'technology' && (
                      <div className="w-full max-w-[320px] bg-gradient-to-br from-[#1E1515] to-[#3D1415] text-white p-6 rounded-2xl border border-[#8B1E1F]/30 flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-[#8B1E1F] rounded-2xl flex items-center justify-center shadow-lg shadow-[#8B1E1F]/30 animate-pulse relative mb-4">
                          <Cpu className="w-10 h-10 text-white" />
                          <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                        <h4 className="text-sm font-black uppercase font-mono tracking-widest text-[#D9383A]">COGNITIVE CORE</h4>
                        <p className="text-white/60 text-xs mt-1 leading-relaxed">
                          Currently tracking: {selectedTechPillar === 0 ? "SYS_PATH_A @ 870 TFLOPs" : selectedTechPillar === 1 ? "SYS_PATH_B @ <1.12ms" : "SYS_PATH_C @ FULL LOAD"}
                        </p>
                      </div>
                    )}

                    {/* Render matching Patents/Results Slide */}
                    {slidesData[activeSlideIndex].type === 'results' && (
                      <div className="w-full max-w-[320px] bg-[#FAF8F7] p-6 rounded-2xl border border-[#8B1E1F]/15 space-y-4">
                        <div className="flex justify-between items-center border-b border-[#8B1E1F]/10 pb-2">
                          <span className="text-xs font-mono text-[#7A6E6D]">PROPRIETARY USPTO GRID</span>
                          <CheckCircle className="w-4 h-4 text-[#8B1E1F]" />
                        </div>
                        <div className="space-y-2">
                          <div className="p-3 bg-white rounded-lg border border-[#8B1E1F]/5 flex justify-between items-center text-xs">
                            <span className="font-mono text-[#7A6E6D]">Neural Microarchitectures</span>
                            <span className="font-bold text-[#8B1E1F]">82 APPROVED</span>
                          </div>
                          <div className="p-3 bg-white rounded-lg border border-[#8B1E1F]/5 flex justify-between items-center text-xs">
                            <span className="font-mono text-[#7A6E6D]">Liquidity Routing Chips</span>
                            <span className="font-bold text-[#8B1E1F]">32 PENDING</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Render matching Talent Slide */}
                    {slidesData[activeSlideIndex].type === 'talent' && (
                      <div className="w-full max-w-[320px] bg-[#1E1515] text-white p-6 rounded-2xl border border-[#8B1E1F]/30 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#8B1E1F]/30 rounded-full blur-xl" />
                        <Clock className="w-8 h-8 text-[#D9383A] mx-auto mb-2" />
                        <p className="text-xl font-mono font-black tracking-widest text-white">
                          {currentTime.toLocaleTimeString()}
                        </p>
                        <p className="text-[9px] font-mono text-white/50 uppercase tracking-widest mt-1">ZURICH/PARIS/SINGAPORE GRID</p>
                      </div>
                    )}

                  </div>

                </div>
              </div>

              {/* Slide Deck Footer Controls Panel */}
              <div className="bg-[#FAF8F7] p-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#8B1E1F]/10">
                <div className="flex gap-6 text-xs text-[#7A6E6D] font-mono font-medium">
                  <span>SYSTEM MATRIX: MEG-XI HQ</span>
                  <span>CORE: IN-02</span>
                  <span>THEME: CRIMSON & PEARL</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={prevSlide}
                    className="px-4 py-2 border border-[#8B1E1F]/20 text-xs font-bold rounded-lg text-[#8B1E1F] hover:bg-[#8B1E1F]/5 transition-all active:scale-95"
                  >
                    PREVIOUS PILLAR
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="px-4 py-2 bg-[#8B1E1F] text-white text-xs font-bold rounded-lg hover:bg-[#5C0E0F] transition-all active:scale-95"
                  >
                    NEXT PILLAR
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* PREMIUM FOOTER */}
      <footer className="bg-[#1E1515] text-white border-t border-[#8B1E1F]/20 py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
            
            {/* Logo brand grid */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#8B1E1F] rounded-lg transform rotate-45 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 border-2 border-white rounded-sm transform -rotate-45" />
                </div>
                <span className="text-xl font-black tracking-tight text-white">IRENA CORE</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed max-w-sm">
                Since 2002, driving high-integrity corporate trajectories through adaptive capital layouts, silicone computing optimization, and global organizational models.
              </p>
              <div className="pt-2">
                <span className="px-3 py-1 bg-white/5 text-[#D9383A] text-[10px] font-mono font-bold rounded border border-white/10">
                  SYSTEM LEVEL: FULL SYNERGY (99.98%)
                </span>
              </div>
            </div>

            {/* Quick links columns */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-mono font-bold text-[#D9383A] uppercase tracking-widest">Solutions</h4>
              <ul className="space-y-2 text-xs text-white/60">
                <li><a href="#sectors" className="hover:text-[#D9383A] transition-colors">Strategic Resource Pools</a></li>
                <li><a href="#sectors" className="hover:text-[#D9383A] transition-colors">Decentralized Edge Hubs</a></li>
                <li><a href="#stratagem" className="hover:text-[#D9383A] transition-colors">Silicon Microarchitecture</a></li>
                <li><a href="#talent" className="hover:text-[#D9383A] transition-colors">Global Co-Creation</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-mono font-bold text-[#D9383A] uppercase tracking-widest">Interactive</h4>
              <ul className="space-y-2 text-xs text-white/60">
                <li><button onClick={() => { setViewMode('deck'); setActiveSlideIndex(0); }} className="hover:text-[#D9383A] transition-colors">Launch Deck Stage</button></li>
                <li><button onClick={() => { setViewMode('deck'); setActiveSlideIndex(3); }} className="hover:text-[#D9383A] transition-colors">Stratagem Simulator</button></li>
                <li><button onClick={() => { setViewMode('deck'); setActiveSlideIndex(5); }} className="hover:text-[#D9383A] transition-colors">Timezone Coordinators</button></li>
                <li><a href="#contact" className="hover:text-[#D9383A] transition-colors">Platform Registry</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-mono font-bold text-[#D9383A] uppercase tracking-widest">Global Locations</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-white/60 font-mono">
                <div>// Zurich, CHE</div>
                <div>// Paris, FRA</div>
                <div>// Singapore, SGP</div>
                <div>// Boston, USA</div>
                <div>// Munich, DEU</div>
                <div>// Tokyo, JPN</div>
              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-white/40">
            <p>© {new Date().getFullYear()} IRENA Group Corporation. All operational systems secured under global matrix code IN-92.</p>
            <div className="flex gap-6 font-mono">
              <span className="hover:text-white transition-colors cursor-pointer">Security Ledger</span>
              <span className="hover:text-white transition-colors cursor-pointer">Encryption Protocols</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
8