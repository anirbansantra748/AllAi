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