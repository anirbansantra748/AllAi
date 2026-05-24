import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Shield, 
  Cpu, 
  Rotate3d, 
  Zap, 
  Check, 
  Globe, 
  Sparkles, 
  Trash2, 
  Sliders, 
  Info,
  ChevronRight,
  User,
  Heart,
  Share2
} from 'lucide-react';

export default function App() {
  // Page States
  const [activeStep, setActiveStep] = useState(1);
  const [customName, setCustomName] = useState("WISE MEMBER");
  const [customColor, setCustomColor] = useState("#00E676");
  const [customMaterial, setCustomMaterial] = useState("Bio-Sourced Matte");
  const [isEngraved, setIsEngraved] = useState(true);
  const [monthlyTx, setMonthlyTx] = useState(120);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const [selectedEdition, setSelectedEdition] = useState("standard");
  const [activeTab, setActiveTab] = useState("Home");
  const [copied, setCopied] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");

  const heroCircleRef = useRef(null);

  // Dynamically inject Google Fonts for the editorial look
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Card Parallax Tilt Effect
  const handleMouseMove = (e) => {
    if (!heroCircleRef.current) return;
    const rect = heroCircleRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Limit tilt degree
    const rX = (mouseY / (height / 2)) * -12; 
    const rY = (mouseX / (width / 2)) * 12;
    
    setCardTilt({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  // Helper for copy to clipboard (Using execCommand fallback per guidelines)
  const copyCardDetails = () => {
    const dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.value = "1253 5432 3521 3891";
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    
    setCopied(true);
    triggerToast("Card Number copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerToast = (msg) => {
    setNotificationMsg(msg);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  // Eco Calculator Math
  const co2Saved = Math.round(monthlyTx * 0.18 * 12); // kg CO2 saved per year
  const plasticSaved = Math.round(monthlyTx * 0.05 * 12); // grams of premium plastic waste prevented

  // Benefit Steps
  const stepsData = {
    1: {
      title: "Effortless Organization",
      desc: "Architected to stack, separate, and eject cards with a premium tactile sweep. Zero bulk, maximum velocity.",
      badge: "ERGONOMIC CORE"
    },
    2: {
      title: "Zero Carbon Bio-Plastic",
      desc: "Constructed entirely from premium ocean-harvested polymers and finished with safe, non-toxic matte coatings.",
      badge: "SUSTAINABLE BUILD"
    },
    3: {
      title: "Quantum Chip Protection",
      desc: "Surrounded by a high-grade conductive RFID alloy shield that neutralizes scanning threats instantaneously.",
      badge: "SHIELD MATRIX"
    }
  };

  return (
    <div className="min-h-screen bg-[#111215] text-[#1c1d21] font-['Plus_Jakarta_Sans'] selection:bg-[#00E676] selection:text-black overflow-x-hidden p-3 md:p-6 transition-all duration-300">
      
      {/* Toast Notification */}
      <div className={`fixed bottom-6 right-6 z-50 bg-[#1c1d21] text-[#dbdbda] px-5 py-4 rounded-xl border border-neutral-800 shadow-2xl flex items-center gap-3 transition-all duration-500 transform ${showNotification ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
        <div className="w-2.5 h-2.5 rounded-full bg-[#00E676] animate-pulse" />
        <span className="font-['Space_Grotesk'] text-sm tracking-wide">{notificationMsg}</span>
      </div>

      {/* Main Container Wrapper - Styled like the premium grey panel */}
      <div className="max-w-[1440px] mx-auto bg-[#dbdbda] rounded-[24px] overflow-hidden border border-[#ffffff40] shadow-2xl relative flex flex-col">
        
        {/* TOP BAR / NAVIGATION */}
        <header className="w-full flex items-center justify-between px-6 py-5 md:px-10 border-b border-[#c8c8c6] transition-all">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="font-['Syne'] text-2xl font-extrabold tracking-tight text-neutral-900 group-hover:text-emerald-700 transition-colors">
                Wallety<span className="text-[#00E676]">.</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-neutral-600">
              {['Home', 'What we do', 'Work with wallet', 'Customize'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    if (tab === 'Customize') {
                      document.getElementById('studio-section')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`hover:text-neutral-950 transition-colors relative py-1 ${activeTab === tab ? 'text-neutral-950 font-bold' : ''}`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00E676] rounded-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => triggerToast("Direct Access Key Enabled")} 
              className="hidden lg:flex items-center gap-2 border border-neutral-400 rounded-full px-5 py-2 text-xs font-['Space_Grotesk'] uppercase font-bold tracking-wider hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              My Wallet
              <span className="w-2 h-2 rounded-full bg-[#00E676] inline-block animate-pulse"></span>
            </button>
            
            {/* Menu Toggle */}
            <button 
              onClick={() => triggerToast("Dynamic Menu System Activated")} 
              className="border border-neutral-900 bg-neutral-950 text-[#dbdbda] hover:bg-neutral-900 hover:text-white rounded-full px-6 py-2.5 text-xs font-['Space_Grotesk'] uppercase tracking-widest transition-all duration-300"
            >
              Menu
            </button>
          </div>
        </header>

        {/* HERO SECTION - Matching the 3-column editorial design */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 p-6 md:p-10 border-b border-[#c8c8c6]">
          
          {/* COLUMN 1: LEFT SIDE (Brand Intro, 110k Stat, Badges) */}
          <div className="lg:col-span-3 flex flex-col justify-between py-2 space-y-8 lg:space-y-0">
            <div>
              <div className="inline-flex items-center gap-2 border border-neutral-400 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider mb-6 bg-[#d1d1cf]">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                Wise &amp; Compact
              </div>
              
              <h1 className="font-['Syne'] text-4xl xl:text-5xl font-extrabold text-neutral-900 leading-tight tracking-tight uppercase">
                Wise<br/>
                <span className="text-neutral-500 font-normal italic lowercase">– compact</span><br/>
                innovative
              </h1>
            </div>

            {/* Custom structural arrow line drawing from inspiration */}
            <div className="hidden lg:block my-8 relative">
              <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 30 H140 L160 10 H175" stroke="#979795" strokeWidth="1.5" strokeDasharray="4 2" />
                <path d="M170 5 L180 10 L170 15" stroke="#979795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="space-y-6">
              {/* Massive 110k Stat */}
              <div>
                <div className="text-5xl xl:text-6xl font-extrabold font-['Space_Grotesk'] tracking-tight text-neutral-950 flex items-baseline">
                  110k
                  <span className="text-emerald-500 text-3xl font-light ml-1">+</span>
                </div>
                <p className="text-xs text-neutral-600 mt-2 font-medium max-w-[220px] leading-relaxed">
                  Join the 110,000+ who've embraced the power of simplicity with Wallety. Experience a cleaner, greener way to carry your daily power.
                </p>
              </div>

              {/* Green Revolution Badge */}
              <button 
                onClick={() => {
                  triggerToast("Eco-system overview unlocked below");
                  document.getElementById('eco-section')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="group flex items-center gap-3 bg-[#00E676] hover:bg-neutral-900 hover:text-white transition-all duration-300 rounded-full pl-5 pr-2 py-2 w-full max-w-[240px] text-left"
              >
                <span className="text-xs uppercase tracking-wider font-bold font-['Space_Grotesk'] text-neutral-950 group-hover:text-white transition-colors">
                  Green Revolution
                </span>
                <div className="w-8 h-8 rounded-full bg-neutral-950 group-hover:bg-[#00E676] flex items-center justify-center ml-auto transition-colors">
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                </div>
              </button>
            </div>
          </div>

          {/* COLUMN 2: CENTER (The Iconic Floating Circle & Neon Card Frame) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center py-6 relative">
            
            {/* Circular cutout visual container */}
            <div 
              ref={heroCircleRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#121315] shadow-2xl flex items-center justify-center overflow-hidden border-8 border-[#c8c8c6] cursor-pointer group"
            >
              {/* Subtle background radar ring */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/40 via-neutral-950/90 to-black z-0 pointer-events-none"></div>
              
              {/* Spinning grid overlay */}
              <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none animate-[pulse_6s_infinite]"></div>

              {/* Central Abstract Sculpture Design (Futuristic Sleek Plastic/Metal construct) */}
              <div className="absolute w-[80%] h-[80%] rounded-full opacity-60 z-10 transition-transform duration-500 scale-100 group-hover:scale-105 pointer-events-none">
                <svg viewBox="0 0 400 400" className="w-full h-full fill-none">
                  {/* Organic curved wings representing the wallet grip */}
                  <path d="M 120 300 C 140 320, 260 320, 280 300 C 310 260, 310 140, 280 100 C 260 80, 140 80, 120 100 C 90 140, 90 260, 120 300 Z" stroke="#333538" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 140 280 C 160 295, 240 295, 260 280 C 285 240, 285 160, 260 120 C 240 105, 160 105, 140 120 C 115 160, 115 240, 140 280 Z" stroke="#00E676" strokeWidth="2" strokeDasharray="8 6" opacity="0.3" />
                  {/* Additional futuristic details */}
                  <circle cx="200" cy="200" r="160" stroke="#222428" strokeWidth="1" />
                  <circle cx="200" cy="200" r="110" stroke="#333538" strokeWidth="1.5" strokeDasharray="3 4" />
                </svg>
              </div>

              {/* INTERACTIVE NEON CREDIT CARD */}
              <div 
                style={{
                  transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg) scale3d(1.05, 1.05, 1.05)`,
                  transition: 'transform 0.1s ease-out',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
                }}
                onClick={copyCardDetails}
                className="relative w-44 h-72 sm:w-48 sm:h-76 md:w-52 md:h-80 rounded-2xl p-5 z-20 overflow-hidden flex flex-col justify-between select-none transform transition-transform duration-200"
              >
                {/* Dynamic Base Gradient / Color based on customizable state */}
                <div 
                  className="absolute inset-0 transition-colors duration-500" 
                  style={{ backgroundColor: customColor }}
                />
                
                {/* Shiny overlay reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/20 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent rotate-12 pointer-events-none"></div>

                {/* Card Brand Header */}
                <div className="relative z-30 flex items-center justify-between">
                  <span className="font-['Syne'] font-extrabold text-lg text-black tracking-tight">
                    Wallety
                  </span>
                  {/* Subtle chip pattern */}
                  <div className="w-7 h-6 rounded bg-neutral-900/10 border border-neutral-900/25 flex flex-col justify-between p-1">
                    <div className="h-0.5 w-full bg-neutral-900/30 rounded"></div>
                    <div className="h-0.5 w-4 bg-neutral-900/30 rounded"></div>
                    <div className="h-0.5 w-full bg-neutral-900/30 rounded"></div>
                  </div>
                </div>

                {/* Technical Micro Copy */}
                <div className="relative z-30 font-['Space_Grotesk'] text-[10px] text-neutral-900/70 font-semibold tracking-wider leading-tight">
                  <p>02/28</p>
                  <p className="mt-1">PREMIUM ED.</p>
                </div>

                {/* Card Number & Customized Member Name */}
                <div className="relative z-30 mt-auto space-y-4">
                  <div className="font-['Space_Grotesk'] text-black text-[13px] sm:text-sm font-semibold tracking-widest leading-none">
                    1253 5432 3521 3891
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-black/10 pt-2.5">
                    <span className="font-['Space_Grotesk'] text-[9px] text-black font-extrabold tracking-wider uppercase truncate max-w-[120px]">
                      {isEngraved ? customName : "SECURE USER"}
                    </span>
                    <span className="text-[10px] font-bold text-neutral-950 font-['Space_Grotesk'] bg-black/10 px-2 py-0.5 rounded-full">
                      RFID
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Tiny Micro Badge Inside Circle */}
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 bg-neutral-900/80 border border-neutral-800 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-ping"></span>
                <span className="text-[9px] text-[#dbdbda] font-mono tracking-widest uppercase">Click to copy card #</span>
              </div>
            </div>

            {/* Customizer prompt badge below the circle */}
            <div className="mt-6 flex flex-col items-center gap-1.5 text-center px-4">
              <p className="text-xs font-['Space_Grotesk'] uppercase tracking-wider text-neutral-500">
                Keep your essentials in one place with Wallety
              </p>
              <button 
                onClick={() => {
                  document.getElementById('studio-section')?.scrollIntoView({ behavior: 'smooth' });
                  triggerToast("Design Studio opened");
                }} 
                className="group inline-flex items-center gap-1 text-xs text-neutral-950 font-bold hover:text-emerald-700 transition-colors"
              >
                <span>CREATE YOUR OWN 360° CREDIT CARD</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* COLUMN 3: RIGHT SIDE (Feature Highlight, Active Step Switcher, Sustainable Stat) */}
          <div className="lg:col-span-3 flex flex-col justify-between py-2 border-t lg:border-t-0 border-[#c8c8c6] lg:pl-6 pt-6 lg:pt-0 space-y-8 lg:space-y-0">
            
            <div className="space-y-6">
              <h2 className="font-['Syne'] text-2xl font-extrabold text-neutral-900 tracking-tight leading-snug">
                Advanced Wallety– <br />
                Solutions for Comfortable
              </h2>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                Experience the convenience of advanced completions, personalized interventions, and seamless solutions that simplify and streamline your financial life. With Wallety, you manage with ease.
              </p>
            </div>

            {/* INTERACTIVE STEP CARD SWITCHER (Simulating "01" indicator in picture) */}
            <div className="bg-[#d1d1cf] border border-neutral-300 rounded-2xl p-4 space-y-3 shadow-inner">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {stepsData[activeStep].badge}
                </span>
                
                {/* Step indicators */}
                <div className="flex gap-1">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setActiveStep(num);
                        triggerToast(`Switched to feature highlight 0${num}`);
                      }}
                      className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center transition-all ${activeStep === num ? 'bg-neutral-950 text-white' : 'bg-neutral-300 text-neutral-600 hover:bg-neutral-400'}`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold text-neutral-500 font-['Space_Grotesk']">
                  STEP 0{activeStep}
                </div>
                <h3 className="font-['Syne'] text-base font-bold text-neutral-950">
                  {stepsData[activeStep].title}
                </h3>
                <p className="text-[11px] text-neutral-600 leading-normal">
                  {stepsData[activeStep].desc}
                </p>
              </div>
            </div>

            {/* Vibrant Sustainable Stat Card */}
            <div className="border-t border-neutral-300 pt-5 flex items-end justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">VIBRANT</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 font-['Space_Grotesk'] bg-emerald-500/10 px-2 py-0.5 rounded inline-block">SUSTAINABLE</span>
              </div>
              <div className="text-right">
                <div className="text-4xl font-extrabold font-['Space_Grotesk'] text-neutral-950 leading-none">
                  20%
                </div>
                <span className="text-[10px] font-bold tracking-wide uppercase text-neutral-500 block mt-1">SAVE</span>
              </div>
            </div>

          </div>
        </section>

        {/* ECO CALCULATOR & VALUE MATRICES */}
        <section id="eco-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 p-6 md:p-10 border-b border-[#c8c8c6] bg-[#d3d3d1]">
          
          {/* Left Block: Interactive Savings Simulator */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-2 py-1 rounded inline-block">
                Carbon Tracker
              </span>
              <h2 className="font-['Syne'] text-3xl font-extrabold text-neutral-900 tracking-tight leading-none uppercase">
                Measure Your Compact Footprint
              </h2>
              <p className="text-xs text-neutral-600 max-w-xl">
                See the immediate impact of changing to a smart, RFID-protected compact ecosystem. Drag the slider to represent your typical monthly digital transactions.
              </p>
            </div>

            {/* Interactive Calculator Slider Component */}
            <div className="bg-[#dbdbda] border border-[#bebebc] rounded-2xl p-6 space-y-6 shadow-sm">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-neutral-700 font-['Space_Grotesk']">
                    ESTIMATED MONTHLY TRANSACTIONS
                  </span>
                  <span className="text-lg font-extrabold text-neutral-950 bg-neutral-950/5 px-3 py-1 rounded-md font-['Space_Grotesk']">
                    {monthlyTx} tx
                  </span>
                </div>
                
                <input 
                  type="range" 
                  min="10" 
                  max="500" 
                  value={monthlyTx}
                  onChange={(e) => setMonthlyTx(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-300 rounded-lg appearance-none cursor-pointer accent-[#00E676]" 
                />
                
                <div className="flex justify-between text-[10px] text-neutral-500 font-bold font-['Space_Grotesk']">
                  <span>10 TRANSACTIONS</span>
                  <span>500 TRANSACTIONS</span>
                </div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#c5c5c3]">
                <div className="bg-[#d1d1cf] p-4 rounded-xl border border-[#bebebc]">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase block tracking-wider">
                    CO₂ EMISSIONS PREVENTED
                  </span>
                  <div className="text-3xl font-extrabold text-neutral-950 font-['Space_Grotesk'] mt-1">
                    {co2Saved} <span className="text-sm font-bold text-neutral-600">kg/yr</span>
                  </div>
                  <p className="text-[10px] text-neutral-600 mt-1 leading-normal">
                    Equivalent to planting {Math.round(co2Saved / 22)} mature pine trees.
                  </p>
                </div>

                <div className="bg-[#d1d1cf] p-4 rounded-xl border border-[#bebebc]">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase block tracking-wider">
                    PLASTIC WASTE REDUCED
                  </span>
                  <div className="text-3xl font-extrabold text-[#00E676] bg-[#111215] px-3 py-1.5 rounded-lg font-['Space_Grotesk'] mt-1 inline-block">
                    {plasticSaved} <span className="text-xs font-bold text-neutral-400">g</span>
                  </div>
                  <p className="text-[10px] text-neutral-600 mt-1 leading-normal">
                    Preventing hazardous chemical microplastics from polluting seas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Core Hardware Features */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:space-y-0 lg:pl-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-neutral-500 font-['Space_Grotesk'] tracking-widest uppercase block">
                ANATOMY &amp; MECHANICS
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                Our cards are not simply beautiful; they are masterpieces of industrial engineering. Engineered with 100% recycled aircraft alloy framing and a self-healing ocean-bound bio-polymer skin.
              </p>
            </div>

            {/* Features list mimicking premium UI wireframes */}
            <div className="space-y-3">
              {[
                { icon: <Shield className="w-4 h-4 text-neutral-900" />, title: "RFID Anti-Theft Shielding", desc: "Blocks all high-frequency data waves up to 13.56MHz." },
                { icon: <Layers className="w-4 h-4 text-neutral-900" />, title: "Hyper-Compact Architecture", desc: "Fits seamlessly into thin coin pockets and front-slits." },
                { icon: <Cpu className="w-4 h-4 text-neutral-900" />, title: "Multi-Asset Smart Core", desc: "Pairs effortlessly with physical keys and micro NFC fobs." }
              ].map((item, index) => (
                <div key={index} className="flex gap-3.5 items-start p-3 bg-neutral-950/5 rounded-xl border border-neutral-950/10 hover:bg-neutral-950/10 transition-colors">
                  <div className="p-2 bg-neutral-950/10 rounded-lg mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900">{item.title}</h4>
                    <p className="text-[10px] text-neutral-600 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DESIGN STUDIO: CUSTOMIZE YOUR PERSONAL WALLETY CARD */}
        <section id="studio-section" className="p-6 md:p-10 border-b border-[#c8c8c6] bg-[#121315] text-[#dbdbda] rounded-b-[24px]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Customizer Panel Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00E676] bg-emerald-500/10 px-2.5 py-1 rounded-full inline-block mb-3">
                  Wallety Studio V2.5
                </span>
                <h2 className="font-['Syne'] text-3xl font-extrabold text-white tracking-tight uppercase leading-none">
                  Customize Your Smart Card
                </h2>
                <p className="text-xs text-neutral-400 mt-2">
                  Configure your luxury physical bio-metal card instantly. Change color tones, toggle laser engraving of your custom alias, and watch changes register instantly.
                </p>
              </div>

              {/* Color Tones Selection */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase font-['Space_Grotesk']">
                  Select Card Atmosphere
                </label>
                <div className="flex gap-3">
                  {[
                    { color: "#00E676", name: "Neon Revolution" },
                    { color: "#0D9488", name: "Cyber Teal" },
                    { color: "#F97316", name: "Solar Flare" },
                    { color: "#EC4899", name: "Prism Pink" },
                    { color: "#000000", name: "Stealth Void" }
                  ].map((preset) => (
                    <button
                      key={preset.color}
                      onClick={() => {
                        setCustomColor(preset.color);
                        triggerToast(`Card finish adjusted to ${preset.name}`);
                      }}
                      style={{ backgroundColor: preset.color }}
                      className={`w-10 h-10 rounded-full border-2 transition-transform transform hover:scale-110 relative ${customColor === preset.color ? 'border-white scale-105 shadow-xl' : 'border-transparent'}`}
                      title={preset.name}
                    >
                      {customColor === preset.color && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <Check className={`w-4 h-4 ${preset.color === '#000000' ? 'text-white' : 'text-black'}`} />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Laser Engraving Input */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase font-['Space_Grotesk']">
                    Laser-Engraved Name
                  </label>
                  
                  {/* Toggle engraving switch */}
                  <button 
                    onClick={() => {
                      setIsEngraved(!isEngraved);
                      triggerToast(`Laser engraving ${!isEngraved ? 'enabled' : 'disabled'}`);
                    }} 
                    className="text-[10px] font-bold text-[#00E676] uppercase tracking-wider hover:underline"
                  >
                    {isEngraved ? "Remove Engraving" : "Enable Engraving"}
                  </button>
                </div>
                
                <input 
                  type="text" 
                  maxLength={18}
                  disabled={!isEngraved}
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value.toUpperCase())}
                  className={`w-full bg-neutral-900 border ${isEngraved ? 'border-neutral-700 text-white focus:border-[#00E676]' : 'border-neutral-800 text-neutral-600 cursor-not-allowed'} rounded-xl px-4 py-3 text-sm font-['Space_Grotesk'] tracking-widest uppercase focus:outline-none transition-all`}
                  placeholder="WISE MEMBER"
                />
              </div>

              {/* Material Dropdown selection */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase font-['Space_Grotesk']">
                  Bio-Material Variant
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Bio-Sourced Matte", "Carbon Shield Polymer", "Aircraft Recycled Alloy", "Tactile Titanium"].map((material) => (
                    <button
                      key={material}
                      onClick={() => {
                        setCustomMaterial(material);
                        triggerToast(`Material changed to ${material}`);
                      }}
                      className={`text-xs p-3 rounded-xl border text-left font-['Space_Grotesk'] transition-all ${customMaterial === material ? 'bg-[#00E676] text-black border-transparent font-bold' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'}`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button 
                  onClick={() => triggerToast("Staging build initialized! Proceeding to claim...")} 
                  className="flex-1 bg-white hover:bg-[#00E676] hover:text-black text-black font-extrabold text-xs uppercase tracking-widest py-4 px-6 rounded-xl font-['Space_Grotesk'] text-center transition-all duration-300"
                >
                  Claim Crafted Card
                </button>
              </div>

            </div>

            {/* Real-time Dynamic 3D Card Studio Sandbox Visualizer */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 bg-neutral-950/40 rounded-2xl border border-neutral-800/80 relative min-h-[400px]">
              
              {/* Studio lighting atmosphere glows */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#00E676]/5 filter blur-3xl pointer-events-none"></div>
              <div 
                className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full filter blur-3xl pointer-events-none transition-colors duration-1000"
                style={{ backgroundColor: `${customColor}10` }}
              ></div>

              {/* Card visual layout matching dynamic states */}
              <div className="relative z-10 w-80 h-48 sm:w-96 sm:h-56 rounded-2xl p-6 shadow-2xl overflow-hidden flex flex-col justify-between transition-transform duration-500 hover:scale-[1.03]">
                
                {/* Custom Color Apply */}
                <div 
                  className="absolute inset-0 transition-colors duration-700" 
                  style={{ backgroundColor: customColor }}
                />
                
                {/* Shiny reflex */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute top-[-30%] left-[-20%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none"></div>

                {/* Header */}
                <div className="relative z-20 flex justify-between items-center text-black">
                  <span className="font-['Syne'] font-extrabold text-2xl tracking-tighter">
                    Wallety
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold bg-neutral-950/10 px-2 py-0.5 rounded uppercase font-['Space_Grotesk'] text-black/75">
                      {customMaterial}
                    </span>
                    {/* Chip */}
                    <div className="w-8 h-6 rounded bg-black/10 border border-black/20 flex flex-col justify-between p-1">
                      <div className="h-0.5 w-full bg-black/30 rounded"></div>
                      <div className="h-0.5 w-full bg-black/30 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Card Number */}
                <div className="relative z-20 text-black font-['Space_Grotesk'] text-lg sm:text-xl font-bold tracking-widest mt-4">
                  1253 5432 3521 3891
                </div>

                {/* Footer details */}
                <div className="relative z-20 flex justify-between items-end border-t border-black/10 pt-3 mt-auto">
                  <div>
                    <span className="text-[8px] uppercase tracking-wider text-black/50 block font-['Space_Grotesk']">
                      Laser Engraving
                    </span>
                    <span className="text-xs font-bold text-black font-['Space_Grotesk'] uppercase tracking-widest truncate block max-w-[200px]">
                      {isEngraved ? customName : "SECURE USER"}
                    </span>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-[8px] uppercase tracking-wider text-black/50 block font-['Space_Grotesk']">
                      EXPIRES
                    </span>
                    <span className="text-xs font-bold text-black font-['Space_Grotesk']">
                      02/28
                    </span>
                  </div>
                </div>

              </div>

              {/* Technical Specifications Overlay on Bottom */}
              <div className="grid grid-cols-3 gap-6 w-full max-w-lg mt-8 pt-6 border-t border-neutral-900 text-center">
                <div>
                  <span className="text-[10px] text-neutral-500 block uppercase font-['Space_Grotesk']">Material Weight</span>
                  <span className="text-sm font-bold text-white font-['Space_Grotesk']">11.2 Grams</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 block uppercase font-['Space_Grotesk']">RFID Protection</span>
                  <span className="text-sm font-bold text-white font-['Space_Grotesk']">13.56 MHz Active</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 block uppercase font-['Space_Grotesk']">Core Lifecycle</span>
                  <span className="text-sm font-bold text-[#00E676] font-['Space_Grotesk']">Infinite Loop</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* PRICING AND HARDWARE TIERS */}
        <section className="p-6 md:p-10 bg-[#dbdbda] border-b border-[#c8c8c6] grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-['Space_Grotesk']">
              EDITIONS MATRIX
            </span>
            <h2 className="font-['Syne'] text-3xl font-extrabold text-neutral-900 tracking-tight leading-none uppercase">
              Choose Your Carrying Tier
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Every package comes with a tailored physical Bio-Metal card and fully synchronized secure digital app key pairings.
            </p>
            
            <div className="p-4 bg-neutral-950/5 border border-neutral-950/10 rounded-2xl flex items-center gap-3">
              <div className="p-2.5 bg-neutral-950/5 rounded-xl">
                <Globe className="w-4 h-4 text-emerald-700" />
              </div>
              <p className="text-[11px] text-neutral-600 leading-normal">
                All transactions fund verified ocean cleanups in partnership with the Plastic Bank Foundation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Tier 1: Standard Bio-Matte */}
            <div className={`p-6 rounded-2xl border-2 transition-all ${selectedEdition === 'standard' ? 'bg-[#121315] text-[#dbdbda] border-neutral-950 shadow-xl' : 'bg-[#d1d1cf] border-neutral-300 text-neutral-900'}`}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded bg-[#00E676] text-black">
                  MOST POPULAR
                </span>
                <span className="text-2xl font-extrabold font-['Space_Grotesk']">$49</span>
              </div>
              
              <h3 className="font-['Syne'] text-xl font-extrabold mt-4">Bio-Matte Compact</h3>
              <p className={`text-xs mt-1 ${selectedEdition === 'standard' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Engineered with dynamic micro-plastics reclaimed from global ocean coastlines. Beautiful, resilient, and slim.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00E676]" />
                  <span>Standard laser custom engraving</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00E676]" />
                  <span>Integrated secure RFID mesh</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00E676]" />
                  <span>Digital smart dashboard pairing</span>
                </li>
              </ul>

              <button 
                onClick={() => {
                  setSelectedEdition('standard');
                  triggerToast("Standard Bio-Matte edition selected");
                }}
                className={`w-full mt-6 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider font-['Space_Grotesk'] transition-colors ${selectedEdition === 'standard' ? 'bg-white text-black hover:bg-[#00E676]' : 'bg-neutral-950 text-white hover:bg-neutral-900'}`}
              >
                SELECT ECO STANDARD
              </button>
            </div>

            {/* Tier 2: Titanium Void */}
            <div className={`p-6 rounded-2xl border-2 transition-all ${selectedEdition === 'titanium' ? 'bg-[#121315] text-[#dbdbda] border-neutral-950 shadow-xl' : 'bg-[#d1d1cf] border-neutral-300 text-neutral-900'}`}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded bg-black text-[#00E676]">
                  ELITE PERFORMANCE
                </span>
                <span className="text-2xl font-extrabold font-['Space_Grotesk']">$129</span>
              </div>
              
              <h3 className="font-['Syne'] text-xl font-extrabold mt-4">Stealth Titanium Void</h3>
              <p className={`text-xs mt-1 ${selectedEdition === 'titanium' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                A masterpiece machined out of a block of solid Grade-5 titanium. Finished in absolute obsidian stealth-matte coating.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00E676]" />
                  <span>3D tactile holographic engraving</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00E676]" />
                  <span>Indestructible military drop warranty</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00E676]" />
                  <span>Priority white-glove support token</span>
                </li>
              </ul>

              <button 
                onClick={() => {
                  setSelectedEdition('titanium');
                  triggerToast("Elite Titanium Void edition selected");
                }}
                className={`w-full mt-6 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider font-['Space_Grotesk'] transition-colors ${selectedEdition === 'titanium' ? 'bg-white text-black hover:bg-[#00E676]' : 'bg-neutral-950 text-white hover:bg-neutral-900'}`}
              >
                SELECT TITANIUM VOID
              </button>
            </div>

          </div>
        </section>

        {/* CUSTOM DECORATIVE MARGIN FOOTER (Echoes the inspiration's outer dark frame elements) */}
        <footer className="w-full bg-[#121315] text-white p-6 md:p-10 rounded-b-[24px]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-neutral-800 pb-8">
            <div>
              <div className="font-['Syne'] text-2xl font-extrabold tracking-tight">
                Wallety<span className="text-[#00E676]">.</span>
              </div>
              <p className="text-xs text-neutral-400 mt-2 max-w-sm font-['Space_Grotesk']">
                Creating luxury compact ecosystems that fund global conservation, shield your security, and simplify your pocket aesthetic.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 text-xs font-semibold tracking-wider text-neutral-400">
              <a href="#studio" onClick={(e) => { e.preventDefault(); document.getElementById('studio-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#00E676] transition-colors">CUSTOM STUDIO</a>
              <a href="#eco" onClick={(e) => { e.preventDefault(); document.getElementById('eco-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#00E676] transition-colors">CARBON FOOTPRINT</a>
              <a href="#benefits" onClick={(e) => { e.preventDefault(); triggerToast("Legal terms and safety sheets are ready in documentation"); }} className="hover:text-[#00E676] transition-colors">SECURE RFID TERMS</a>
            </div>
          </div>

          <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono tracking-widest text-neutral-500">
            <div>
              © 2026 WALLETY ECO SYSTEMS. DESIGNED IN BERLIN &amp; TOKYO.
            </div>
            
            <div className="flex items-center gap-2 mt-4 sm:mt-0 text-right">
              <span className="w-1.5 h-1.5 bg-[#00E676] rounded-full inline-block animate-pulse"></span>
              Say goodbye to bulky wallets and hello to a compact and friendly solution.
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}


3