import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, 
  ArrowRight, 
  ChevronRight, 
  SlidersHorizontal, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Cpu, 
  Layers, 
  Globe, 
  ExternalLink, 
  Terminal, 
  Send,
  X,
  Sun,
  Moon,
  Info,
  DollarSign,
  Maximize2,
  Award,
  Zap
} from 'lucide-react';

// Project Portfolio Mock Data
const PORTFOLIO_PROJECTS = [
  {
    id: "solidus",
    name: "SOLIDUS AI TECH",
    tagline: "High-performance GPU computing powerhouses built for enterprise AI acceleration & scalable decentralization.",
    category: "incubation",
    stats: {
      raised: "$4.4M",
      social: "+780%",
      roi: "41.2x",
      partners: "84"
    },
    techStack: ["H100 Nodes", "DePIN Layer", "CUDA-Optimized VM"],
    description: "Solidus AI Tech is bridging massive institutional-grade GPU clusters to standard protocols, allowing Web3 projects to tap into machine learning compute power seamlessly with tokenized utility models.",
    details: {
      foundingYear: "2024",
      stage: "Active Cluster Deployment",
      auditStatus: "CertiK Triple-A",
      nodesOnline: "2,400+ Nodes"
    },
    logoColor: "from-zinc-800 to-black",
    svgLogo: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="50" height="50" rx="4" className="stroke-current stroke-2" />
        <path d="M40 40H60V60H40V40Z" className="fill-current" />
        <line x1="25" y1="35" x2="15" y2="35" className="stroke-current stroke-2" />
        <line x1="25" y1="50" x2="10" y2="50" className="stroke-current stroke-2" />
        <line x1="25" y1="65" x2="15" y2="65" className="stroke-current stroke-2" />
        <line x1="75" y1="35" x2="85" y2="35" className="stroke-current stroke-2" />
        <line x1="75" y1="50" x2="90" y2="50" className="stroke-current stroke-2" />
        <line x1="75" y1="65" x2="85" y2="65" className="stroke-current stroke-2" />
      </svg>
    )
  },
  {
    id: "cookie3",
    name: "COOKIE3",
    tagline: "The industry's first Web3 Marketing Fidelity Analytics & targeted loyalty optimization engine.",
    category: "acceleration",
    stats: {
      raised: "$6.2M",
      social: "+1800%",
      roi: "9.4x",
      partners: "92"
    },
    techStack: ["Zero-Knowledge SDK", "Behavioral Parsing", "Multi-chain SDK"],
    description: "Cookie3 pioneers a behavior-focused marketing framework, parsing cross-chain patterns to target real consumers instead of standard bot farming operations, driving true community alignment.",
    details: {
      foundingYear: "2024",
      stage: "Production Mainnet V2",
      auditStatus: "Hacken Premium Verified",
      nodesOnline: "N/A (SaaS Platform)"
    },
    logoColor: "from-amber-600 to-yellow-500",
    svgLogo: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="30" className="stroke-current stroke-2" strokeDasharray="6 3" />
        <circle cx="42" cy="42" r="4" className="fill-current" />
        <circle cx="58" cy="45" r="3" className="fill-current" />
        <circle cx="48" cy="58" r="4.5" className="fill-current" />
        <circle cx="58" cy="56" r="3" className="fill-current" />
      </svg>
    )
  },
  {
    id: "enginesoffury",
    name: "ENGINES OF FURY",
    tagline: "Free-to-play post-apocalyptic extract shooter integrated seamlessly with real decentralized digital assets.",
    category: "acceleration",
    stats: {
      raised: "$5.7M",
      social: "+2800%",
      roi: "9.2x",
      partners: "57"
    },
    techStack: ["Unity Engine Custom", "Gasless Asset Minting", "Realtime Ledger"],
    description: "Engines of Fury brings hyper-fidelity multiplayer shooting to decentralized environments, delivering zero-friction onboarding with standard accounts and transparent tradeable weapon customization.",
    details: {
      foundingYear: "2023",
      stage: "Beta phase 4 (Steam ready)",
      auditStatus: "Halborn Full Audit",
      nodesOnline: "60 Dedicated Servers"
    },
    logoColor: "from-red-700 to-orange-600",
    svgLogo: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 70L50 20L80 70H20Z" className="stroke-current stroke-2" />
        <path d="M42 45L50 35L58 45H42Z" className="fill-current" />
        <rect x="45" y="52" width="10" height="15" className="fill-current" />
      </svg>
    )
  },
  {
    id: "omnia",
    name: "OMNIA",
    tagline: "Highly resilient RPC node network optimized for zero-latency private mempool security.",
    category: "incubation",
    stats: {
      raised: "$5.3M",
      social: "+2000%",
      roi: "TBA",
      partners: "72"
    },
    techStack: ["MEV Guard Protocol", "Geo-Distributed Nodes", "BGP Anycast Routing"],
    description: "OMNIA provides highly secure, decentralized RPC infrastructure that thwarts frontrunning, honeypot sandboxing, and malicious MEV attacks, guaranteeing lightning-fast transactions with absolute privacy.",
    details: {
      foundingYear: "2025",
      stage: "Incentivized Testnet",
      auditStatus: "ConsenSys Diligence Complete",
      nodesOnline: "4,150 Private RPCs"
    },
    logoColor: "from-blue-600 to-indigo-700",
    svgLogo: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="35" className="stroke-current stroke-2" />
        <circle cx="50" cy="50" r="18" className="stroke-current stroke-1" strokeDasharray="3 3" />
        <line x1="50" y1="15" x2="50" y2="85" className="stroke-current stroke-1" />
        <line x1="15" y1="50" x2="85" y2="50" className="stroke-current stroke-1" />
      </svg>
    )
  },
  {
    id: "dexcheck",
    name: "DEXCHECK",
    tagline: "AI-driven market telemetry and multi-chain trade tracking analyzer with predictive capability.",
    category: "incubation",
    stats: {
      raised: "$2.1M",
      social: "+800%",
      roi: "18.3x",
      partners: "65"
    },
    techStack: ["Predictive Scoring AI", "Memecoin Sniping Tool", "On-chain Watcher"],
    description: "DexCheck compiles multi-chain analytics, volume flow, and smart money movement into a premium workspace powered by AI, notifying users of high-priority trades ahead of traditional trackers.",
    details: {
      foundingYear: "2024",
      stage: "Production Web Platform",
      auditStatus: "InterFi Verified",
      nodesOnline: "N/A"
    },
    logoColor: "from-emerald-600 to-teal-500",
    svgLogo: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="15" height="40" className="stroke-current stroke-2" />
        <rect x="42" y="15" width="15" height="70" className="stroke-current stroke-2" fill="currentColor" fillOpacity="0.2" />
        <rect x="65" y="45" width="15" height="25" className="stroke-current stroke-2" />
        <path d="M10 50H90" className="stroke-current stroke-1" strokeDasharray="4 4" />
      </svg>
    )
  },
  {
    id: "shieldeum",
    name: "SHIELDEUM",
    tagline: "Next-generation secure multi-chain sovereign VPN & automated threat detection protocol.",
    category: "incubation",
    stats: {
      raised: "$2.2M",
      social: "+1000%",
      roi: "TBA",
      partners: "30"
    },
    techStack: ["Military AES-256", "Secure Tunneling", "Threat Detection Node"],
    description: "Shieldeum protects web interface users and node operators alike from sophisticated attacks, establishing cryptographically isolated routing networks with built-in malicious site filtering.",
    details: {
      foundingYear: "2025",
      stage: "Node Setup Stage",
      auditStatus: "CertiK In-Progress",
      nodesOnline: "1,200 Encrypted Tunnels"
    },
    logoColor: "from-violet-600 to-fuchsia-600",
    svgLogo: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15L80 25V55C80 72 67 82 50 87C33 82 20 72 20 55V25L50 15Z" className="stroke-current stroke-2" />
        <path d="M50 30V70" className="stroke-current stroke-2" />
        <path d="M35 48H65" className="stroke-current stroke-2" />
      </svg>
    )
  },
  {
    id: "fractal_labs",
    name: "FRACTAL MESH",
    tagline: "Dynamic, auto-scaling physical network mesh enabling micro-payments for local Wi-Fi sharing.",
    category: "investment",
    stats: {
      raised: "$3.9M",
      social: "+510%",
      roi: "TBA",
      partners: "42"
    },
    techStack: ["Localized Mesh Protocol", "Bilateral P2P Routing", "Micro-Ledger"],
    description: "Fractal Mesh transforms smart devices into structural elements of a decentralized physical infrastructure. Users lease high-performance local connections and are rewarded dynamically on an epoch-by-epoch basis.",
    details: {
      foundingYear: "2025",
      stage: "Alpha Hardware Testing",
      auditStatus: "Internal Security Audit Complete",
      nodesOnline: "350 Local Deployments"
    },
    logoColor: "from-orange-600 to-rose-600",
    svgLogo: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="20" height="20" className="stroke-current stroke-2" />
        <rect x="60" y="20" width="20" height="20" className="stroke-current stroke-2" />
        <rect x="40" y="60" width="20" height="20" className="stroke-current stroke-2" />
        <line x1="40" y1="30" x2="60" y2="30" className="stroke-current stroke-1" />
        <line x1="30" y1="40" x2="40" y2="60" className="stroke-current stroke-1" />
        <line x1="70" y1="40" x2="60" y2="60" className="stroke-current stroke-1" />
      </svg>
    )
  }
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [liveClock, setLiveClock] = useState("");
  
  // Interactive Forge Form State
  const [pitchStep, setPitchStep] = useState(1);
  const [pitchData, setPitchData] = useState({
    projectName: "",
    category: "Incubation Hub",
    fundingTarget: "$100k - $500k",
    email: "",
    shortTeaser: "",
  });
  const [isPitchSubmitted, setIsPitchSubmitted] = useState(false);
  const [calculatedScore, setCalculatedScore] = useState(0);

  // Custom cursor position tracker for high-end technical crosshairs on header
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    // Technical real-time clock generator
    const updateTime = () => {
      const now = new Date();
      const formatDigit = (num) => num.toString().padStart(2, '0');
      setLiveClock(`${formatDigit(now.getUTCHours())}:${formatDigit(now.getUTCMinutes())}:${formatDigit(now.getUTCSeconds())} UTC`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMouseCoords({
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top)
      });
    }
  };

  // Filter & Search Logic
  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter(project => {
      const matchesCategory = activeFilter === "all" || project.category === activeFilter;
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  // Dynamic score calculator for "Forge Terminal"
  const handlePitchSubmit = (e) => {
    e.preventDefault();
    if (!pitchData.projectName || !pitchData.email) return;

    // Simulate analysis based on inputs
    let score = 75;
    if (pitchData.category === "Incubation Hub") score += 12;
    if (pitchData.fundingTarget === "$100k - $500k") score += 8;
    if (pitchData.shortTeaser.length > 20) score += 5;
    
    setCalculatedScore(Math.min(score, 99));
    setIsPitchSubmitted(true);
  };

  const resetPitchForm = () => {
    setPitchData({
      projectName: "",
      category: "Incubation Hub",
      fundingTarget: "$100k - $500k",
      email: "",
      shortTeaser: "",
    });
    setIsPitchSubmitted(false);
    setPitchStep(1);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`min-h-screen transition-colors duration-500 font-sans select-none ${
        isDarkMode ? 'bg-[#0f0f11] text-[#f4f4f5]' : 'bg-[#e9e9eb] text-[#111112]'
      }`}
    >
      {/* Visual background blueprint grids */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-grid-lines z-0" />

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6 relative z-10 flex flex-col min-h-screen">
        
        {/* TOP STATUS RIBBON */}
        <div className={`flex flex-wrap items-center justify-between border-b ${
          isDarkMode ? 'border-[#222226]' : 'border-[#d1d1d6]'
        } pb-3 text-[11px] font-mono tracking-wider mb-6`}>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff5a00] animate-pulse"></span>
              NEXUS_FORGE_CORE v2.10
            </span>
            <span className="hidden sm:inline opacity-60">|</span>
            <span className="hidden sm:inline">INDEX STABILITY: 99.98%</span>
            <span className="hidden sm:inline opacity-60">|</span>
            <span className="hidden md:inline">LOC: {mouseCoords.x}PX, {mouseCoords.y}PX</span>
          </div>
          
          <div className="flex items-center gap-6 mt-2 sm:mt-0">
            <div className="flex items-center gap-2">
              <span className="opacity-60">TIME_SYS:</span>
              <span className="font-semibold text-[#ff5a00]">{liveClock}</span>
            </div>
            
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-1.5 rounded border flex items-center gap-1 transition-all ${
                isDarkMode 
                  ? 'bg-[#18181c] border-[#333338] hover:border-[#ff5a00]' 
                  : 'bg-[#f4f4f6] border-[#d1d1d6] hover:border-[#ff5a00]'
              }`}
              title="Toggle Display Atmosphere"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              <span className="text-[10px] uppercase font-bold px-1">
                {isDarkMode ? 'Light' : 'Dark'} Mode
              </span>
            </button>
          </div>
        </div>

        {/* SITE NAVIGATION & BRAND HEADER */}
        <header className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Left Header info */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#ff5a00] flex items-center justify-center font-black text-black text-xl rounded-none relative">
                <span className="absolute top-1 left-1 text-[8px] font-mono leading-none">NX</span>
                ⚡
              </div>
              <div>
                <h1 className="text-sm font-mono font-bold tracking-widest leading-none">NEXUS FORGE</h1>
                <p className="text-[11px] opacity-60 tracking-tight font-mono">HYBRID ACCELERATION LABS</p>
              </div>
            </div>

            {/* Middle Nav Indicators */}
            <nav className="flex items-center gap-1 text-[11px] font-mono overflow-x-auto py-1">
              <a href="#portfolio" className={`px-4 py-2 border-r ${isDarkMode ? 'border-[#222226]' : 'border-[#d1d1d6]'} hover:text-[#ff5a00] transition-colors`}>
                ⚡_LAB_STATIONS
              </a>
              <a href="#featured" className={`px-4 py-2 border-r ${isDarkMode ? 'border-[#222226]' : 'border-[#d1d1d6]'} hover:text-[#ff5a00] transition-colors`}>
                ⚡_INCUBATION_MARQUEE
              </a>
              <a href="#pitch-terminal" className="px-4 py-2 hover:text-[#ff5a00] transition-colors text-[#ff5a00] font-extrabold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> FORGE_PITCH_TERMINAL
              </a>
            </nav>

            {/* Right CTAs */}
            <div className="flex items-center gap-3">
              <a 
                href="#pitch-terminal"
                className="bg-[#ff5a00] hover:bg-[#e04f00] text-black font-mono font-bold text-[11px] tracking-wider px-5 py-2.5 transition-all uppercase flex items-center gap-1.5"
                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 88%, 93% 100%, 0% 100%)' }}
              >
                APPLY FOR INCUBATION <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </header>

        {/* HERO TITLE BLOCK (STENCIL BRUTALIST HEADER) */}
        <section className={`border ${isDarkMode ? 'border-[#222226] bg-[#121215]' : 'border-[#d1d1d6] bg-[#f0f0f2]'} p-6 md:p-8 relative overflow-hidden mb-8`}>
          <div className="absolute right-6 top-6 opacity-10">
            <svg width="240" height="240" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="stroke-2">
              <circle cx="50" cy="50" r="45" />
              <line x1="50" y1="5" x2="50" y2="95" />
              <line x1="5" y1="50" x2="95" y2="50" />
            </svg>
          </div>

          <div className="relative z-10">
            {/* Visual Header Grid Accent */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-[10px] font-mono opacity-50 flex items-center gap-1">
                <span>[ PROTOCOL: PORTFOLIO_V2 ]</span>
                <span className="w-1.5 h-1.5 bg-[#ff5a00] rounded-full inline-block"></span>
              </div>
              <span className="text-[10px] font-mono opacity-50">LATENCY: 4.8MS</span>
            </div>

            {/* Giant Brutalist Lettering mimicking "PORT_FOLIO" grid stencil structure */}
            <div className="relative mb-6">
              <div className="font-mono text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none select-none select-all-disabled flex flex-wrap gap-x-6 gap-y-2">
                <span className="text-outline-accent relative">
                  PORT_
                  <span className="absolute -top-3 -right-2 text-[10px] text-[#ff5a00] bg-black text-white dark:bg-white dark:text-black px-1 font-mono">LABS</span>
                </span>
                <span className="text-[#ff5a00] relative">
                  FOLIO
                  <span className="absolute bottom-1 right-2 w-3 h-3 sm:w-6 sm:h-6 bg-current block" />
                </span>
              </div>
            </div>

            {/* Tagline / Sub-description */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-8">
                <p className="text-sm md:text-base max-w-2xl leading-relaxed opacity-80 font-mono">
                  Nexus Forge acts as a venture laboratory, incubating and securing cutting-edge Web3 hardware ecosystems, high-performance computing clusters, and privacy infrastructure. Explore our live portfolio of active accelerations.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
                <div className={`p-3 border ${isDarkMode ? 'border-[#333338] bg-[#18181c]' : 'border-[#d1d1d6] bg-[#e3e3e6]'} text-center font-mono min-w-[110px]`}>
                  <div className="text-xs opacity-60">ACTIVE LABS</div>
                  <div className="text-xl font-black text-[#ff5a00]">07</div>
                </div>
                <div className={`p-3 border ${isDarkMode ? 'border-[#333338] bg-[#18181c]' : 'border-[#d1d1d6] bg-[#e3e3e6]'} text-center font-mono min-w-[110px]`}>
                  <div className="text-xs opacity-60">INCUBATED</div>
                  <div className="text-xl font-black text-[#ff5a00]">82%</div>
                </div>
                <div className={`p-3 border ${isDarkMode ? 'border-[#333338] bg-[#18181c]' : 'border-[#d1d1d6] bg-[#e3e3e6]'} text-center font-mono min-w-[110px]`}>
                  <div className="text-xs opacity-60">TOTAL VALUE</div>
                  <div className="text-xl font-black text-[#ff5a00]">$32.1M</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED / MARQUEE INCUBATION HERO (GT Protocol style from reference) */}
        <section id="featured" className="mb-8">
          <div className="text-xs font-mono mb-3 tracking-widest uppercase flex items-center gap-2">
            <span className="px-1.5 py-0.5 bg-[#ff5a00] text-black font-bold text-[10px]">NEW</span>
            <span>MARQUEE INCUBATION LAB REPORT</span>
          </div>

          <div className={`border ${
            isDarkMode ? 'border-[#ff5a00]/30 bg-[#ff5a00]/5 hover:bg-[#ff5a00]/10' : 'border-[#ff5a00]/50 bg-[#ff5a00]/5 hover:bg-[#ff5a00]/8'
          } p-6 transition-all duration-300 relative group`}>
            
            {/* Tech accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff5a00] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ff5a00] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: 3D-ish Logo construct from image */}
              <div className="lg:col-span-3 flex justify-center py-4">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  {/* Rotating geometric element */}
                  <div className={`absolute inset-0 border-2 border-dashed ${isDarkMode ? 'border-zinc-700' : 'border-zinc-300'} rounded-full animate-spin`} style={{ animationDuration: '30s' }} />
                  <div className={`absolute w-28 h-28 border ${isDarkMode ? 'border-zinc-800' : 'border-zinc-200'} rotate-45 flex items-center justify-center`}>
                    <div className="w-12 h-12 bg-[#ff5a00] flex items-center justify-center text-black font-bold text-lg rotate-[-45deg] shadow-lg">
                      GP
                    </div>
                  </div>
                  {/* Aesthetic Corner Markers */}
                  <div className="absolute top-0 left-0 text-[9px] font-mono text-[#ff5a00]">┌ SYSTEM_01</div>
                  <div className="absolute bottom-0 right-0 text-[9px] font-mono text-[#ff5a00]">OK_FORGE ┘</div>
                </div>
              </div>

              {/* Middle Column: Project Info */}
              <div className="lg:col-span-5 font-mono">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 border border-[#ff5a00] text-[#ff5a00] text-[9px] font-bold uppercase">Incubated</span>
                  <span className="opacity-50 text-[10px]">ID: GT-8809</span>
                </div>
                
                <h3 className="text-2xl font-black mb-2 tracking-tight">GT PROTOCOL</h3>
                
                <p className="text-xs opacity-80 leading-relaxed mb-4">
                  GT Protocol is a decentralized, trustless platform designed to streamline and secure decentralized asset management. Providing direct integration with multiple liquidity structures and programmatic risk guards.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className={`text-[10px] px-2 py-1 ${isDarkMode ? 'bg-[#1e1e24]' : 'bg-[#e3e3e6]'}`}>#Defi Protocol</span>
                  <span className={`text-[10px] px-2 py-1 ${isDarkMode ? 'bg-[#1e1e24]' : 'bg-[#e3e3e6]'}`}>#Automated Executions</span>
                  <span className={`text-[10px] px-2 py-1 ${isDarkMode ? 'bg-[#1e1e24]' : 'bg-[#e3e3e6]'}`}>#MEV Protected</span>
                </div>
              </div>

              {/* Right Column: Statistics */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-zinc-300 dark:border-zinc-800 pt-6 lg:pt-0 lg:pl-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-black/5 dark:bg-white/5 font-mono border border-transparent hover:border-[#ff5a00]/30 transition-all">
                    <div className="text-[10px] opacity-60">FUNDS RAISED</div>
                    <div className="text-lg font-bold text-[#ff5a00]">$4.1M</div>
                  </div>
                  <div className="p-3 bg-black/5 dark:bg-white/5 font-mono border border-transparent hover:border-[#ff5a00]/30 transition-all">
                    <div className="text-[10px] opacity-60">ATH ROI</div>
                    <div className="text-lg font-bold text-[#ff5a00]">28x</div>
                  </div>
                  <div className="p-3 bg-black/5 dark:bg-white/5 font-mono border border-transparent hover:border-[#ff5a00]/30 transition-all">
                    <div className="text-[10px] opacity-60">SOCIAL GROWTH</div>
                    <div className="text-lg font-bold text-[#ff5a00]">800%</div>
                  </div>
                  <div className="p-3 bg-black/5 dark:bg-white/5 font-mono border border-transparent hover:border-[#ff5a00]/30 transition-all">
                    <div className="text-[10px] opacity-60">PARTNERSHIPS</div>
                    <div className="text-lg font-bold text-[#ff5a00]">70+</div>
                  </div>
                </div>

                {/* Inspect button */}
                <button 
                  onClick={() => setSelectedProject({
                    id: "gt-protocol",
                    name: "GT PROTOCOL",
                    tagline: "Sovereign Web3 Execution Layer offering algorithmic wealth optimization paradigms.",
                    category: "incubation",
                    stats: {
                      raised: "$4.1M",
                      social: "800%",
                      roi: "28x",
                      partners: "70+"
                    },
                    techStack: ["Algorithmic Engines", "Arbitrage Pipelines", "Secure Wallets"],
                    description: "GT Protocol is driving decentralized wealth optimization pipelines to retail and institutional users alike. It connects directly with top security frameworks to ensure full custody isolation.",
                    details: {
                      foundingYear: "2024",
                      stage: "Active Deployment",
                      auditStatus: "CertiK Triple-A",
                      nodesOnline: "N/A (SaaS Engine)"
                    },
                    logoColor: "from-orange-500 to-amber-600",
                    svgLogo: (
                      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 15L85 35V75L50 95L15 75V35L50 15Z" className="stroke-current stroke-2" />
                        <circle cx="50" cy="55" r="15" className="fill-current" />
                      </svg>
                    )
                  })}
                  className="w-full mt-4 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-xs font-mono py-2.5 border border-current transition-all flex items-center justify-center gap-1.5"
                >
                  LOAD DETAILED DOSSIER <Maximize2 className="w-3 h-3" />
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* INTERACTIVE HUB FILTERS & LIVE SEARCH BAR */}
        <section id="portfolio" className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 bg-black/5 dark:bg-white/5 p-1 border border-zinc-300 dark:border-zinc-800">
              {[
                { id: "all", label: "All Assets" },
                { id: "incubation", label: "Incubations" },
                { id: "acceleration", label: "Accelerations" },
                { id: "investment", label: "Investments" }
              ].map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 text-xs font-mono font-bold tracking-wider transition-all duration-200 uppercase ${
                    activeFilter === filter.id 
                      ? 'bg-[#ff5a00] text-black' 
                      : 'hover:bg-black/10 dark:hover:bg-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Interactive Live Search */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none opacity-50">
                <Search className="w-4 h-4" />
              </span>
              <input 
                type="text"
                placeholder="SEARCH REGISTRY BY NAME, TECH OR TAGS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full text-xs font-mono pl-10 pr-4 py-3 border focus:outline-none focus:border-[#ff5a00] transition-colors rounded-none ${
                  isDarkMode 
                    ? 'bg-[#18181c] border-[#333338] text-white placeholder-zinc-500' 
                    : 'bg-[#fafafa] border-[#d1d1d6] text-black placeholder-zinc-400'
                }`}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-3 flex items-center opacity-60 hover:opacity-100"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          <div className="flex items-center justify-between mt-3 text-[10px] font-mono opacity-60">
            <span>SHOWING {filteredProjects.length} OF {PORTFOLIO_PROJECTS.length} CORE INITIATIVES</span>
            {searchQuery && <span>FILTER ACTIVE FOR: "{searchQuery}"</span>}
          </div>
        </section>

        {/* MAIN PORTFOLIO GRID */}
        <section className="mb-12">
          {filteredProjects.length === 0 ? (
            <div className={`border border-dashed p-16 text-center ${
              isDarkMode ? 'border-zinc-800 text-zinc-500' : 'border-zinc-300 text-zinc-400'
            }`}>
              <SlidersHorizontal className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="font-mono text-sm uppercase">No assets match your filter criteria.</p>
              <button 
                onClick={() => { setActiveFilter("all"); setSearchQuery(""); }} 
                className="mt-4 text-xs font-mono text-[#ff5a00] underline"
              >
                Reset active registry filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`border transition-all duration-300 flex flex-col justify-between cursor-pointer group/card relative ${
                    isDarkMode 
                      ? 'border-[#222226] bg-[#121215] hover:border-[#ff5a00] hover:bg-[#16161a]' 
                      : 'border-[#d1d1d6] bg-[#f5f5f7] hover:border-[#ff5a00] hover:bg-[#eaeaea]'
                  }`}
                >
                  {/* Decorative Corner crosshair points */}
                  <span className="absolute top-1 left-1 text-[8px] opacity-30 font-mono group-hover/card:text-[#ff5a00] transition-colors">⚡</span>
                  <span className="absolute bottom-1 right-1 text-[8px] opacity-30 font-mono group-hover/card:text-[#ff5a00] transition-colors">⚡</span>

                  {/* Header part of card */}
                  <div className="p-5 border-b border-zinc-300 dark:border-zinc-800/60">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[9px] uppercase font-mono px-2 py-0.5 border ${
                        project.category === 'incubation' 
                          ? 'border-indigo-500/55 text-indigo-400' 
                          : project.category === 'acceleration'
                          ? 'border-emerald-500/55 text-emerald-400'
                          : 'border-rose-500/55 text-rose-400'
                      }`}>
                        {project.category}
                      </span>
                      <span className="text-[10px] opacity-40 font-mono">#{project.id.toUpperCase()}</span>
                    </div>

                    {/* Logo & Name Area */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${project.logoColor} p-0.5 rounded-none flex items-center justify-center text-white relative shadow-sm`}>
                        {project.svgLogo}
                      </div>
                      <div>
                        <h4 className="text-lg font-black tracking-tight group-hover/card:text-[#ff5a00] transition-colors duration-200">
                          {project.name}
                        </h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.techStack.slice(0, 2).map((tech, i) => (
                            <span key={i} className="text-[9px] font-mono opacity-50">
                              [{tech}]
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Short Tagline */}
                    <p className="text-xs opacity-75 leading-relaxed line-clamp-2 h-10 font-mono">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Technical Performance Stats Blocks (Matching mock design blockiness) */}
                  <div className="grid grid-cols-2 bg-black/5 dark:bg-black/20 text-xs font-mono border-b border-zinc-300 dark:border-zinc-800/60">
                    <div className="p-3 border-r border-b border-zinc-300 dark:border-zinc-800/60">
                      <div className="text-[9px] opacity-50 uppercase">Funds Raised</div>
                      <div className="font-bold text-sm text-[#ff5a00]">{project.stats.raised}</div>
                    </div>
                    <div className="p-3 border-b border-zinc-300 dark:border-zinc-800/60">
                      <div className="text-[9px] opacity-50 uppercase">Social Growth</div>
                      <div className="font-bold text-sm text-[#ff5a00]">{project.stats.social}</div>
                    </div>
                    <div className="p-3 border-r border-zinc-300 dark:border-zinc-800/60">
                      <div className="text-[9px] opacity-50 uppercase">ATH ROI</div>
                      <div className="font-bold text-sm text-[#ff5a00]">{project.stats.roi}</div>
                    </div>
                    <div className="p-3">
                      <div className="text-[9px] opacity-50 uppercase">Partnerships</div>
                      <div className="font-bold text-sm text-[#ff5a00]">{project.stats.partners}</div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-3 flex items-center justify-between text-[11px] font-mono group-hover/card:bg-[#ff5a00] group-hover/card:text-black transition-all">
                    <span className="opacity-70 group-hover/card:opacity-100 font-bold uppercase">Open Terminal Audit</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/card:translate-x-1" />
                  </div>

                </div>
              ))}
            </div>
          )}
        </section>

        {/* INTERACTIVE DOSSIER PANEL DRAWER (Modal that acts like technical slideout) */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-end transition-opacity duration-300">
            <div 
              className={`w-full max-w-xl h-full flex flex-col justify-between p-6 md:p-8 overflow-y-auto shadow-2xl relative border-l ${
                isDarkMode ? 'bg-[#121215] text-[#f4f4f5] border-[#222226]' : 'bg-[#f4f4f6] text-[#111112] border-[#d1d1d6]'
              }`}
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between border-b border-zinc-300 dark:border-zinc-800 pb-4 mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#ff5a00] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ff5a00] animate-pulse"></span>
                    ASSET_DOSSIER_LOADED // SECURE
                  </span>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-1 hover:text-[#ff5a00] transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Main Identity Area */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${selectedProject.logoColor} p-1 flex items-center justify-center text-white relative`}>
                    {selectedProject.svgLogo}
                  </div>
                  <div>
                    <span className="px-2 py-0.5 border border-[#ff5a00] text-[#ff5a00] text-[9px] font-bold uppercase font-mono">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl font-black tracking-tight mt-1">{selectedProject.name}</h2>
                    <p className="text-xs opacity-50 font-mono">NEXUS ID: {selectedProject.id.toUpperCase()}-FORGE-X</p>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm font-semibold opacity-90 leading-relaxed font-mono mb-4">
                  "{selectedProject.tagline}"
                </p>

                {/* Description paragraphs */}
                <p className="text-xs opacity-80 leading-relaxed mb-6 font-mono border-l-2 border-[#ff5a00] pl-3">
                  {selectedProject.description}
                </p>

                {/* Highlight Stats Blocks */}
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider mb-3">Telemetry Indicators</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  <div className="p-3 bg-black/5 dark:bg-white/5 font-mono border border-transparent hover:border-[#ff5a00]/30 transition-all text-center">
                    <div className="text-[9px] opacity-60">RAISED</div>
                    <div className="text-base font-bold text-[#ff5a00]">{selectedProject.stats.raised}</div>
                  </div>
                  <div className="p-3 bg-black/5 dark:bg-white/5 font-mono border border-transparent hover:border-[#ff5a00]/30 transition-all text-center">
                    <div className="text-[9px] opacity-60">ATH ROI</div>
                    <div className="text-base font-bold text-[#ff5a00]">{selectedProject.stats.roi}</div>
                  </div>
                  <div className="p-3 bg-black/5 dark:bg-white/5 font-mono border border-transparent hover:border-[#ff5a00]/30 transition-all text-center">
                    <div className="text-[9px] opacity-60">SOCIAL GROWTH</div>
                    <div className="text-base font-bold text-[#ff5a00]">{selectedProject.stats.social}</div>
                  </div>
                  <div className="p-3 bg-black/5 dark:bg-white/5 font-mono border border-transparent hover:border-[#ff5a00]/30 transition-all text-center">
                    <div className="text-[9px] opacity-60">PARTNERS</div>
                    <div className="text-base font-bold text-[#ff5a00]">{selectedProject.stats.partners}</div>
                  </div>
                </div>

                {/* Structural Tech Breakdown */}
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider mb-3">System Specifications</h3>
                <div className="space-y-2 mb-6 text-xs font-mono">
                  {selectedProject.techStack.map((tech, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 bg-black/5 dark:bg-white/5 border border-transparent hover:border-[#ff5a00]/20 transition-all">
                      <span className="flex items-center gap-2">
                        <span className="text-[#ff5a00] font-bold">✓</span>
                        {tech}
                      </span>
                      <span className="opacity-50 text-[10px]">Verified Operational</span>
                    </div>
                  ))}
                </div>

                {/* Extra Details Sheet */}
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider mb-3">Incubation Registry Info</h3>
                <div className={`border ${isDarkMode ? 'border-[#222226]' : 'border-[#d1d1d6]'} text-xs font-mono mb-6`}>
                  <div className="grid grid-cols-2 p-2 border-b border-zinc-300 dark:border-zinc-800">
                    <span className="opacity-60">ESTABLISHED</span>
                    <span className="text-right font-bold">{selectedProject.details.foundingYear}</span>
                  </div>
                  <div className="grid grid-cols-2 p-2 border-b border-zinc-300 dark:border-zinc-800">
                    <span className="opacity-60">DEVELOPMENT PHASE</span>
                    <span className="text-right font-bold">{selectedProject.details.stage}</span>
                  </div>
                  <div className="grid grid-cols-2 p-2 border-b border-zinc-300 dark:border-zinc-800">
                    <span className="opacity-60">AUDIT VERDICT</span>
                    <span className="text-right font-bold text-[#ff5a00]">{selectedProject.details.auditStatus}</span>
                  </div>
                  <div className="grid grid-cols-2 p-2">
                    <span className="opacity-60">TELEMETRY SEED NODES</span>
                    <span className="text-right font-bold">{selectedProject.details.nodesOnline}</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons inside Drawer */}
              <div className="mt-8 border-t border-zinc-300 dark:border-zinc-800 pt-6">
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => {
                      alert(`Accessing programmatic gateway for ${selectedProject.name}. This is standard simulation data.`);
                    }}
                    className="bg-[#ff5a00] hover:bg-[#e04f00] text-black font-mono font-bold text-xs py-3 text-center transition-all uppercase flex items-center justify-center gap-1"
                  >
                    DEPLOY INTERACTOR <Zap className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border border-current font-mono font-bold text-xs py-3 text-center transition-all uppercase"
                  >
                    DISMISS REPORT
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* FORGE PITCH TERMINAL: INTERACTIVE INCUBATION CALCULATOR (Brutalist Form) */}
        <section id="pitch-terminal" className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Info side */}
            <div className="lg:col-span-4 font-mono flex flex-col justify-between">
              <div>
                <div className="text-[10px] text-[#ff5a00] mb-2 tracking-widest uppercase font-bold flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3 h-3" /> PITCH WORKSTATION
                </div>
                <h3 className="text-3xl font-black mb-3 uppercase tracking-tight">THE FORGE PITCH SIMULATOR</h3>
                <p className="text-xs opacity-85 leading-relaxed mb-4">
                  Do you have a project ready for acceleration? Submit your venture to the Forge Simulation Node. Our programmatic engine will analyze your inputs and calculate a compatibility score for potential backing.
                </p>
              </div>

              {/* Custom Technical Specs Box */}
              <div className={`p-4 border ${isDarkMode ? 'border-[#222226] bg-zinc-950' : 'border-[#d1d1d6] bg-zinc-100'} text-xs space-y-3`}>
                <div className="flex items-center justify-between">
                  <span className="opacity-60">CURRENT STATIONS ACTIVE:</span>
                  <span className="font-bold">4 DEPLOYED</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="opacity-60">INCUBATION CAPACITY:</span>
                  <span className="font-bold text-[#ff5a00]">2 SLOTS OPEN</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="opacity-60">RESPONSE WINDOW:</span>
                  <span className="font-bold">24-48 HOURS</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Form Terminal */}
            <div className={`lg:col-span-8 border ${
              isDarkMode ? 'border-[#222226] bg-[#121215]' : 'border-[#d1d1d6] bg-[#f0f0f2]'
            } p-6 relative overflow-hidden`}>
              
              <div className="absolute top-0 right-0 p-2 text-[8px] opacity-40 font-mono">
                SECURE_GATEWAY // INPUT_FIELD
              </div>

              {/* Progress Bar of terminal steps */}
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex-1 flex items-center gap-2">
                    <div className={`h-1 flex-1 transition-colors ${
                      pitchStep >= step ? 'bg-[#ff5a00]' : 'bg-zinc-400/40'
                    }`} />
                    <span className={`text-[10px] font-mono ${
                      pitchStep === step ? 'text-[#ff5a00] font-bold' : 'opacity-50'
                    }`}>0{step}</span>
                  </div>
                ))}
              </div>

              {!isPitchSubmitted ? (
                <form onSubmit={handlePitchSubmit} className="space-y-6">
                  
                  {/* STEP 1: Core Details */}
                  {pitchStep === 1 && (
                    <div className="space-y-4 font-mono">
                      <div>
                        <label className="block text-xs font-bold uppercase mb-2">01. Project Name / Codename</label>
                        <input 
                          type="text"
                          required
                          placeholder="e.g. HYPERION PROTOCOL"
                          value={pitchData.projectName}
                          onChange={(e) => setPitchData({ ...pitchData, projectName: e.target.value })}
                          className={`w-full text-xs p-3 border focus:outline-none focus:border-[#ff5a00] rounded-none ${
                            isDarkMode ? 'bg-black border-[#222226]' : 'bg-white border-[#d1d1d6]'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase mb-2">02. Selected Innovation Track</label>
                        <select 
                          value={pitchData.category}
                          onChange={(e) => setPitchData({ ...pitchData, category: e.target.value })}
                          className={`w-full text-xs p-3 border focus:outline-none focus:border-[#ff5a00] rounded-none ${
                            isDarkMode ? 'bg-black border-[#222226]' : 'bg-white border-[#d1d1d6]'
                          }`}
                        >
                          <option value="Incubation Hub">Incubation Track (Inception & Engineering)</option>
                          <option value="Acceleration Lab">Acceleration Track (Audit & Expansion)</option>
                          <option value="Strategic Investment">Strategic Round Backing</option>
                        </select>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button 
                          type="button" 
                          onClick={() => { if (pitchData.projectName) setPitchStep(2); }}
                          disabled={!pitchData.projectName}
                          className="bg-black text-white dark:bg-white dark:text-black hover:bg-[#ff5a00] hover:text-black font-mono font-bold text-xs py-3 px-6 transition-all disabled:opacity-50 flex items-center gap-1.5"
                        >
                          Next Step <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Funding & Tech info */}
                  {pitchStep === 2 && (
                    <div className="space-y-4 font-mono">
                      <div>
                        <label className="block text-xs font-bold uppercase mb-2">03. Simulated Funding Requirement</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {["$100k - $500k", "$500k - $2M", "$2M+"].map((tier) => (
                            <button
                              key={tier}
                              type="button"
                              onClick={() => setPitchData({ ...pitchData, fundingTarget: tier })}
                              className={`p-3 border text-xs font-bold transition-all ${
                                pitchData.fundingTarget === tier 
                                  ? 'bg-[#ff5a00] text-black border-[#ff5a00]' 
                                  : isDarkMode ? 'bg-black border-[#222226] hover:border-zinc-700' : 'bg-white border-[#d1d1d6] hover:border-zinc-400'
                              }`}
                            >
                              {tier}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase mb-2">04. Abstract / Pitch Teaser</label>
                        <textarea 
                          rows={3}
                          placeholder="Briefly describe the physical or decentralized infrastructure layer you are forging..."
                          value={pitchData.shortTeaser}
                          onChange={(e) => setPitchData({ ...pitchData, shortTeaser: e.target.value })}
                          className={`w-full text-xs p-3 border focus:outline-none focus:border-[#ff5a00] rounded-none ${
                            isDarkMode ? 'bg-black border-[#222226]' : 'bg-white border-[#d1d1d6]'
                          }`}
                        />
                      </div>

                      <div className="pt-4 flex justify-between">
                        <button 
                          type="button" 
                          onClick={() => setPitchStep(1)}
                          className="border border-current hover:bg-[#ff5a00] hover:text-black font-mono font-bold text-xs py-3 px-6 transition-all"
                        >
                          Back
                        </button>
                        <button 
                          type="button" 
                          onClick={() => setPitchStep(3)}
                          className="bg-black text-white dark:bg-white dark:text-black hover:bg-[#ff5a00] hover:text-black font-mono font-bold text-xs py-3 px-6 transition-all flex items-center gap-1.5"
                        >
                          Next Step <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Verification & Submit */}
                  {pitchStep === 3 && (
                    <div className="space-y-4 font-mono">
                      <div>
                        <label className="block text-xs font-bold uppercase mb-2">05. Primary Founder Contact Email</label>
                        <input 
                          type="email"
                          required
                          placeholder="founder@protocol.com"
                          value={pitchData.email}
                          onChange={(e) => setPitchData({ ...pitchData, email: e.target.value })}
                          className={`w-full text-xs p-3 border focus:outline-none focus:border-[#ff5a00] rounded-none ${
                            isDarkMode ? 'bg-black border-[#222226]' : 'bg-white border-[#d1d1d6]'
                          }`}
                        />
                      </div>

                      <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 text-[11px]">
                        💡 <strong>SIMULATION PARAMETER:</strong> Clicking submit will route your configuration parameters through our compatibility heuristics analyzer.
                      </div>

                      <div className="pt-4 flex justify-between">
                        <button 
                          type="button" 
                          onClick={() => setPitchStep(2)}
                          className="border border-current hover:bg-[#ff5a00] hover:text-black font-mono font-bold text-xs py-3 px-6 transition-all"
                        >
                          Back
                        </button>
                        <button 
                          type="submit" 
                          className="bg-[#ff5a00] hover:bg-[#e04f00] text-black font-mono font-bold text-xs py-3 px-6 transition-all flex items-center gap-1.5"
                        >
                          SUBMIT TO ANALYZER <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                </form>
              ) : (
                /* Interactive Compatibility Score Dashboard result */
                <div className="font-mono text-center py-6">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <h4 className="text-xl font-bold uppercase tracking-tight mb-2">ANALYSIS COMPLETED</h4>
                  <p className="text-xs opacity-75 max-w-md mx-auto mb-6">
                    Telemetry analysis complete for <strong>{pitchData.projectName.toUpperCase()}</strong>. The proposal has been registered in our index.
                  </p>

                  <div className="max-w-xs mx-auto p-4 border border-[#ff5a00]/30 bg-[#ff5a00]/5 mb-6">
                    <span className="text-[10px] opacity-60">COMPATIBILITY VERDICT SCORE</span>
                    <div className="text-4xl font-black text-[#ff5a00] mt-1">{calculatedScore}%</div>
                    <div className="text-[10px] opacity-70 mt-2">
                      {calculatedScore >= 85 
                        ? "HIGH PRIORITY SIGNAL ACCELERATION RECOMMENDED" 
                        : "QUALIFIED PROTOCOL UNDER REVIEW"
                      }
                    </div>
                  </div>

                  <button 
                    onClick={resetPitchForm}
                    className="border border-current hover:bg-[#ff5a00] hover:text-black font-mono font-bold text-xs py-2 px-6 transition-all"
                  >
                    RESET AND SIMULATE ANOTHER PROJECT
                  </button>
                </div>
              )}

            </div>

          </div>
        </section>

        {/* BRUTALIST GRID ACCENT STRIP (Apply for Incubation & Funding banners) */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-zinc-300 dark:border-zinc-800 py-6 mb-12 gap-6">
          <div className="flex flex-col justify-between p-4 bg-black/5 dark:bg-white/5 font-mono">
            <div>
              <div className="text-[9px] text-[#ff5a00] font-bold">TRACK_01</div>
              <h4 className="text-lg font-black tracking-tight mt-1 mb-2">APPLY FOR INCUBATION</h4>
              <p className="text-xs opacity-75 mb-4">
                Receive customized node infrastructure support, full strategic audits, and institutional integrations.
              </p>
            </div>
            <a 
              href="#pitch-terminal"
              className="text-xs font-bold text-[#ff5a00] flex items-center gap-1 hover:underline"
            >
              LAUNCH INCUBATION PIPELINE <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-col justify-between p-4 bg-black/5 dark:bg-white/5 font-mono">
            <div>
              <div className="text-[9px] text-[#ff5a00] font-bold">TRACK_02</div>
              <h4 className="text-lg font-black tracking-tight mt-1 mb-2">APPLY FOR DIRECT FUNDING</h4>
              <p className="text-xs opacity-75 mb-4">
                Tap into direct, rapid deployment capitalization rounds to push testnets onto resilient production grids.
              </p>
            </div>
            <a 
              href="#pitch-terminal"
              className="text-xs font-bold text-[#ff5a00] flex items-center gap-1 hover:underline"
            >
              PITCH FOR VENTURE ROUND <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={`border-t ${
          isDarkMode ? 'border-[#222226]' : 'border-[#d1d1d6]'
        } pt-6 pb-12 text-[11px] font-mono tracking-wider text-center md:text-left`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="font-bold">NEXUS FORGE © 2026. ALL TELEMETRIES SECURED.</p>
              <p className="opacity-50 text-[10px] mt-1">
                DePIN, HPC Compute, and Private Liquidity Routing Frameworks. Built on brutalist-verified open source code.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <span className="opacity-50">API STATUS: ONLINE</span>
              <span className="opacity-50">LATENCY: 4.8MS</span>
              <span className="text-[#ff5a00] font-bold">NEXUS_FORGE_V2</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}