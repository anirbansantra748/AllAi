import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Smartphone, 
  Sliders, 
  User, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Power, 
  Lightbulb, 
  Thermometer, 
  Shield, 
  Radio, 
  Compass, 
  CheckCircle, 
  Plus, 
  Cpu, 
  Activity, 
  Volume2, 
  MessageSquare, 
  HelpCircle, 
  Send,
  Lock,
  Sun,
  Moon,
  Clock,
  Sparkles
} from 'lucide-react';

export default function App() {
  // Page Navigation State (Single page simulation with beautiful page transitions)
  const [activeTab, setActiveTab] = useState('home'); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive Smart Home States
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [lightsIntensity, setLightsIntensity] = useState(85);
  const [targetTemp, setTargetTemp] = useState(21);
  const [securityArmed, setSecurityArmed] = useState(false);
  const [currentScene, setCurrentScene] = useState('ambient'); // ambient, night, party, eco
  const [curtainsClosed, setCurtainsClosed] = useState(false);

  // Active Device Hub States
  const [activeRoom, setActiveRoom] = useState('all');
  const [devicesList, setDevicesList] = useState([
    { id: 1, name: 'Ambient Glass Lounge', room: 'living', type: 'lighting', status: true, value: '85%' },
    { id: 2, name: 'Master Climate Node', room: 'bedroom', type: 'climate', status: true, value: '21°C' },
    { id: 3, name: 'Main Entry Barrier', room: 'security', type: 'security', status: false, value: 'Armed' },
    { id: 4, name: 'Acoustic Array', room: 'living', type: 'media', status: true, value: 'Lo-Fi Lounge' },
    { id: 5, name: 'Smart Shade Matrix', room: 'bedroom', type: 'shade', status: false, value: 'Open' },
    { id: 6, name: 'Purification Cell', room: 'kitchen', type: 'climate', status: true, value: 'Pure (98%)' },
  ]);

  // Connect Your Space Setup Flow Modal
  const [setupModalOpen, setSetupModalOpen] = useState(false);
  const [setupStep, setSetupStep] = useState(1);
  const [detectedDevices, setDetectedDevices] = useState([
    { name: 'Nestive Core Router v2', paired: false, signal: 'Strong' },
    { name: 'Nestive Glasshouse LED Deck', paired: false, signal: 'Excellent' },
    { name: 'Nestive Precision Sensor Pod', paired: false, signal: 'Good' },
  ]);
  const [pairingActive, setPairingActive] = useState(false);

  // Custom Ambient Toast Notifications
  const [notifications, setNotifications] = useState([]);
  
  const triggerNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4000);
  };

  // Support Help Desk Chat State
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: 'Welcome to Nestive Elite Support. How may I assist your space configuration today?' }
  ]);
  const [userInput, setUserInput] = useState('');

  // Handle Dynamic Visuals and Side Effects of Controls
  useEffect(() => {
    // Add Google Fonts directly to header
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Sync state modifications with dynamic feedback
  const handleDeviceToggle = (id) => {
    setDevicesList(prev => prev.map(dev => {
      if (dev.id === id) {
        const nextStatus = !dev.status;
        // Trigger simulated reactions
        if (dev.type === 'lighting') {
          setIsPowerOn(nextStatus);
        }
        if (dev.type === 'security') {
          setSecurityArmed(nextStatus);
        }
        if (dev.type === 'shade') {
          setCurtainsClosed(nextStatus);
        }
        triggerNotification(`${dev.name} set to ${nextStatus ? 'ON' : 'OFF'}`, 'success');
        return { ...dev, status: nextStatus, value: nextStatus ? (dev.type === 'lighting' ? `${lightsIntensity}%` : dev.type === 'climate' ? `${targetTemp}°C` : 'Active') : 'Inactive' };
      }
      return dev;
    }));
  };

  // Scene Selection Handler
  const applyScene = (scene) => {
    setCurrentScene(scene);
    if (scene === 'night') {
      setIsPowerOn(true);
      setLightsIntensity(15);
      setCurtainsClosed(true);
      setTargetTemp(19);
      triggerNotification('Night Scene applied. Windows dimmed, quiet mode engaged.', 'night');
    } else if (scene === 'ambient') {
      setIsPowerOn(true);
      setLightsIntensity(85);
      setCurtainsClosed(false);
      setTargetTemp(21);
      triggerNotification('Ambient Comfort Scene restored.', 'success');
    } else if (scene === 'party') {
      setIsPowerOn(true);
      setLightsIntensity(100);
      setCurtainsClosed(false);
      setTargetTemp(22);
      triggerNotification('Dynamic Party illumination activated.', 'party');
    } else if (scene === 'eco') {
      setIsPowerOn(false);
      setCurtainsClosed(true);
      setTargetTemp(17);
      triggerNotification('Eco Save Active. Secondary cells offline.', 'eco');
    }
  };

  // Support AI Responder Simulation
  const sendSupportMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    
    const userMsg = { sender: 'user', text: userInput };
    setChatMessages(prev => [...prev, userMsg]);
    const query = userInput.toLowerCase();
    setUserInput('');

    setTimeout(() => {
      let responseText = "My apologies, I could not index that command. Let me connect you with an elite human technician.";
      if (query.includes('light') || query.includes('dark') || query.includes('glow')) {
        responseText = "Nestive ambient glow systems operate on high-density warm LED nodes. You can dial these values directly via the Live Control Panel.";
      } else if (query.includes('pair') || query.includes('connect') || query.includes('add')) {
        responseText = "To register and pair new modules, tap 'Connect Your Space' on your hero dashboard to start the automatic ultra-wideband scanning.";
      } else if (query.includes('security') || query.includes('lock')) {
        responseText = "Security matrix utilizes biometric mesh encryption. In case of localized failure, our cloud fallback secures all entry points instantly.";
      } else if (query.includes('temperature') || query.includes('heat') || query.includes('ac')) {
        responseText = "The master node optimizes air purity & radiant thermal warmth concurrently. Normal operation targets 21 degrees celsius.";
      }

      setChatMessages(prev => [...prev, { sender: 'ai', text: responseText }]);
    }, 1000);
  };

  // Pairing Flow Actions
  const runPairingSequence = () => {
    setPairingActive(true);
    let stepCount = 0;
    const interval = setInterval(() => {
      if (stepCount < detectedDevices.length) {
        setDetectedDevices(prev => {
          const updated = [...prev];
          updated[stepCount].paired = true;
          return updated;
        });
        triggerNotification(`Paired: ${detectedDevices[stepCount].name}`, 'success');
        stepCount++;
      } else {
        clearInterval(interval);
        setPairingActive(false);
        setSetupStep(3);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen text-slate-800 flex flex-col font-sans selection:bg-[#dfb489] selection:text-slate-900 bg-[#bfc7c5] relative overflow-hidden transition-colors duration-500">
      
      {/* Absolute Ambient Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-radial from-orange-200/40 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-radial from-emerald-100/30 to-transparent blur-3xl pointer-events-none" />
      
      {/* Header / Navbar */}
      <nav className="relative z-40 w-full px-6 lg:px-12 py-5 flex items-center justify-between backdrop-blur-md bg-[#bfc7c5]/50 border-b border-white/10">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setActiveTab('home')}>
          {/* Custom SVG Nestive Logo */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-slate-800 to-slate-700 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
            <svg className="w-5 h-5 text-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Nestive</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 bg-white/20 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/30 shadow-sm">
          {[
            { id: 'home', label: 'Home' },
            { id: 'features', label: 'Features' },
            { id: 'devices', label: 'Devices' },
            { id: 'support', label: 'Support' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`text-sm font-medium tracking-wide transition-all relative py-1 ${
                activeTab === item.id ? 'text-slate-950 font-semibold' : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded bg-amber-600 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Right Nav Utilities */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-700 bg-white/25 px-3 py-1.5 rounded-md border border-white/30">
            <span>EN</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>

          <button 
            onClick={() => setSearchOpen(!searchOpen)} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/30 text-slate-800 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
          >
            <Search size={18} />
          </button>

          <button 
            onClick={() => { setActiveTab('devices'); triggerNotification('Loading Cloud Dashboard Panel', 'info') }}
            className="px-5 py-2.5 text-sm font-medium rounded-full bg-slate-900 text-white hover:bg-slate-850 hover:shadow-lg transition-all"
          >
            Dashboard
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/30 border border-white/40 text-slate-900"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Dynamic Search Modal Header */}
      {searchOpen && (
        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-white/50 shadow-2xl z-50 transition-all">
          <div className="flex items-center gap-2">
            <Search className="text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search features, smart rooms, nodes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-400 text-sm py-1"
            />
            <button onClick={() => setSearchOpen(false)} className="text-xs font-bold text-slate-400 hover:text-slate-600 uppercase">Close</button>
          </div>
          {searchQuery && (
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-1.5 max-h-40 overflow-y-auto">
              <button onClick={() => { setActiveTab('devices'); setSearchOpen(false); }} className="text-left text-xs p-1.5 hover:bg-slate-50 rounded text-slate-700">Go to Device Dashboard: Ambient Lounge Lights</button>
              <button onClick={() => { setActiveTab('features'); setSearchOpen(false); }} className="text-left text-xs p-1.5 hover:bg-slate-50 rounded text-slate-700">Explore autonomous energy grid features</button>
            </div>
          )}
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-40 flex justify-end md:hidden">
          <div className="w-[80%] max-w-xs h-full bg-[#bfc7c5] p-6 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/20">
                <span className="text-lg font-bold text-slate-950">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
                  <X size={18} />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'features', label: 'Features' },
                  { id: 'devices', label: 'Devices' },
                  { id: 'support', label: 'Support' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                    className={`text-left text-lg font-medium py-2 border-b border-black/5 ${
                      activeTab === item.id ? 'text-amber-800 pl-2' : 'text-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3 pb-8">
              <button 
                onClick={() => { setSetupModalOpen(true); setMobileMenuOpen(false); }} 
                className="w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold tracking-wide"
              >
                Connect Your Space
              </button>
              <div className="text-center text-xs text-slate-600">Nestive Space Node Cloud Ecosystem v2.1</div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Floating Notifications */}
      <div className="fixed top-24 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {notifications.map((notif) => (
          <div 
            key={notif.id}
            className="p-4 bg-white/85 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl flex items-start gap-3 pointer-events-auto transition-transform duration-300 animate-[bounce_0.5s_ease-out]"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              notif.type === 'success' ? 'bg-emerald-100 text-emerald-800' :
              notif.type === 'night' ? 'bg-indigo-100 text-indigo-800' :
              notif.type === 'party' ? 'bg-pink-100 text-pink-800' :
              notif.type === 'eco' ? 'bg-amber-100 text-amber-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              <Sparkles size={16} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-950 uppercase tracking-widest mb-0.5">Nestive Core</div>
              <div className="text-sm text-slate-700 font-medium">{notif.message}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Primary Dynamic Main Area */}
      <main className="flex-1 w-full px-6 lg:px-12 py-8 relative z-20">
        
        {/* ================= HOME PAGE / HERO SECTION ================= */}
        {activeTab === 'home' && (
          <div className="space-y-20">
            {/* Split layout inspired directly by visual references */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[75vh]">
              
              {/* Left Column Text details */}
              <div className="lg:col-span-5 space-y-8 text-left z-20">
                {/* Micro social proof badge */}
                <div className="inline-flex items-center gap-3 bg-white/35 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-sm">
                  {/* Miniature user heads */}
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Avatar 1" />
                    <img className="w-8 h-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Avatar 2" />
                    <img className="w-8 h-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Avatar 3" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 tracking-tight">
                    +10,000 people are already using "Nestive"
                  </span>
                </div>

                {/* Massive Premium Hero Title */}
                <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-normal leading-[1.05] text-slate-900 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Control <span className="italic font-medium font-serif text-amber-900">Your</span> Home <br />
                  The <span className="italic font-medium font-serif text-amber-900">Smart</span> Way
                </h1>

                {/* Description Subtitle */}
                <p className="text-slate-700 text-lg md:text-xl font-normal max-w-lg leading-relaxed">
                  Ambient control of your space - without lifting a finger. Your home is just four steps away from being autonomous!
                </p>

                {/* Elite Call-To-Action Connect Space Button */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button 
                    onClick={() => setSetupModalOpen(true)}
                    className="group relative inline-flex items-center gap-4 bg-white/95 text-slate-900 hover:bg-slate-900 hover:text-white px-6 py-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-8 h-8 rounded-xl bg-slate-900 text-amber-100 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-slate-900 transition-colors">
                      <Sliders size={16} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest">Connect Your Space</span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('devices')}
                    className="inline-flex items-center justify-center gap-2 text-slate-800 hover:text-slate-950 font-semibold text-sm px-4 py-2 border-b-2 border-transparent hover:border-slate-800 transition-all"
                  >
                    <span>Explore live model</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Right Column: Beautiful Interactive 3D/2D Retro-Futuristic Capsule House */}
              <div className="lg:col-span-7 flex justify-center relative min-h-[450px] lg:min-h-[550px]">
                
                {/* Float Ambient Backdrop Glow */}
                <div className={`absolute w-[450px] h-[450px] rounded-full transition-all duration-1000 blur-3xl opacity-75 ${
                  currentScene === 'party' ? 'bg-purple-300/30' :
                  currentScene === 'night' ? 'bg-indigo-900/10' :
                  currentScene === 'eco' ? 'bg-teal-100/20' :
                  'bg-orange-200/40'
                }`} />

                {/* Main Interactive House SVG Visual Frame */}
                <div className="relative w-full max-w-[580px] h-full flex flex-col justify-center items-center select-none transform hover:scale-[1.02] transition-transform duration-500 animate-[float_6s_ease-in-out_infinite]">
                  
                  <svg className="w-full h-auto drop-shadow-[0_35px_50px_rgba(0,0,0,0.18)]" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Shadow Plate underneath floating model */}
                    <ellipse cx="300" cy="440" rx="160" ry="25" fill="rgba(0,0,0,0.12)" />
                    
                    {/* Floating Base Plate */}
                    <g id="base-plate">
                      {/* Curved Base Slab */}
                      <path d="M120 340C120 320 180 300 300 300C420 300 480 320 480 340V370C480 390 420 410 300 410C180 410 120 390 120 370V340Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                      <path d="M120 370C120 390 180 410 300 410C420 410 480 390 480 370" fill="none" stroke="#94a3b8" strokeWidth="2" />
                      
                      {/* Dynamic Indicator Lights on the Base Slab */}
                      <circle cx="210" cy="385" r="4" fill="#f59e0b" className="animate-ping" />
                      <circle cx="210" cy="385" r="4" fill="#fbbf24" />
                      <circle cx="250" cy="392" r="4" fill="#10b981" />
                      
                      {/* Small details on deck base */}
                      <rect x="350" y="380" width="30" height="8" rx="4" fill="#475569" />
                      <rect x="390" y="375" width="25" height="8" rx="4" fill="#475569" />
                    </g>

                    {/* Master Structural Column of Capsule House (Connecting First & Second Floor) */}
                    <path d="M430 200V360H470V200C470 170 450 150 430 150H400V180H430C430 180 430 190 430 200Z" fill="#d1d5db" />
                    
                    {/* ================= FIRST FLOOR (STUDIO LAB) ================= */}
                    <g id="first-floor">
                      {/* Structural back wall */}
                      <path d="M220 280H420V345H220V280Z" fill="#cbd5e1" />
                      
                      {/* Dynamic Studio Window Light Glow */}
                      <path d="M225 285H415V340H225V285Z" 
                        fill={isPowerOn ? (currentScene === 'party' ? 'url(#partyGlow)' : 'url(#warmGlow)') : '#334155'} 
                        className="transition-all duration-700" 
                      />

                      {/* Studio Interior Furniture Silhouettes */}
                      <g opacity={isPowerOn ? "0.85" : "0.2"}>
                        {/* Designer Desk & Chair */}
                        <rect x="330" y="315" width="40" height="4" fill="#1e293b" />
                        <line x1="335" y1="319" x2="335" y2="340" stroke="#1e293b" strokeWidth="2" />
                        <line x1="365" y1="319" x2="365" y2="340" stroke="#1e293b" strokeWidth="2" />
                        {/* Computer monitor glowing slightly */}
                        <rect x="345" y="300" width="18" height="12" rx="2" fill={isPowerOn ? "#e2e8f0" : "#475569"} />
                        <line x1="354" y1="312" x2="354" y2="315" stroke="#1e293b" strokeWidth="2" />
                        {/* Floor Lamp Glowing */}
                        <circle cx="260" cy="305" r="8" fill={isPowerOn ? "#fef08a" : "#475569"} />
                        <line x1="260" y1="313" x2="260" y2="340" stroke="#1e293b" strokeWidth="2" />
                      </g>

                      {/* Curved Glass capsule frame */}
                      <rect x="220" y="280" width="200" height="65" rx="32.5" fill="transparent" stroke="#94a3b8" strokeWidth="4" />
                      {/* Reflection glass shine overlay */}
                      <path d="M225 312.5C225 312.5 280 290 350 290C400 290 415 305 415 305" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
                    </g>

                    {/* ================= SECOND FLOOR (MASTER SUITE) ================= */}
                    <g id="second-floor">
                      {/* Structure Support Overhang Plate */}
                      <path d="M160 190H420C440 190 450 205 450 220C450 235 440 250 420 250H160C140 250 130 235 130 220C130 205 140 190 160 190Z" fill="#f1f5f9" />
                      
                      {/* Structural Back Wall of 2nd Floor */}
                      <path d="M160 195H410V245H160V195Z" fill="#e2e8f0" />

                      {/* Smart Curtains Overlay logic */}
                      <path d="M165 195H405V245H165V195Z" 
                        fill={curtainsClosed ? '#475569' : (isPowerOn ? (currentScene === 'party' ? 'url(#partyGlow)' : 'url(#warmGlow2)') : '#1e293b')} 
                        className="transition-all duration-700" 
                      />

                      {/* Bedroom / Lounge Furniture Silhouettes */}
                      <g opacity={(!curtainsClosed && isPowerOn) ? "0.8" : "0.1"}>
                        {/* Lounge Sofa Silhouette */}
                        <path d="M180 225H220V245H180V225Z" fill="#0f172a" />
                        <path d="M175 235H180V245H175V235Z" fill="#0f172a" />
                        {/* Master Bed Canopy */}
                        <rect x="350" y="215" width="45" height="30" fill="#1e293b" />
                        <circle cx="360" cy="225" r="4" fill="#f8fafc" />
                      </g>

                      {/* Exterior Curved Glass Frame */}
                      <rect x="155" y="190" width="260" height="60" rx="30" fill="transparent" stroke="#cbd5e1" strokeWidth="4" />
                      {/* Curved Reflection highlights */}
                      <path d="M165 220C165 220 230 200 320 200C370 200 405 215 405 215" stroke="rgba(255,255,255,0.45)" strokeWidth="3" strokeLinecap="round" />
                    </g>

                    {/* Architectural Pillars / Top Sensors */}
                    <g id="roof-elements">
                      {/* Main Antenna Rod */}
                      <line x1="430" y1="150" x2="430" y2="100" stroke="#475569" strokeWidth="3" />
                      <circle cx="430" cy="98" r="4" fill="#f59e0b" className="animate-pulse" />
                      
                      {/* Secondary aesthetic fin */}
                      <line x1="390" y1="190" x2="390" y2="175" stroke="#94a3b8" strokeWidth="2" />
                      
                      {/* Solar grid node elements on right */}
                      <rect x="445" y="300" width="12" height="24" rx="2" fill="#334155" />
                      <circle cx="451" cy="312" r="3" fill="#10b981" />
                    </g>

                    {/* Defs block containing beautiful glowing gradients for light settings */}
                    <defs>
                      {/* Standard Cosy Warm Interior Light */}
                      <radialGradient id="warmGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
                        <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#b45309" stopOpacity="0.4" />
                      </radialGradient>
                      
                      <radialGradient id="warmGlow2" cx="40%" cy="40%" r="55%">
                        <stop offset="0%" stopColor="#fffbeb" stopOpacity="1" />
                        <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#d97706" stopOpacity="0.3" />
                      </radialGradient>

                      {/* Vibrant Dynamic Party Glow */}
                      <linearGradient id="partyGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* On-Visual Realtime Status Indicator Cards */}
                  <div className="absolute top-[18%] left-[2%] bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/40 shadow-md text-[10px] uppercase font-bold tracking-widest text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Autonomous Mode
                  </div>

                  <div className="absolute bottom-[20%] right-[3%] bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 shadow-2xl text-xs text-white flex flex-col gap-0.5">
                    <span className="text-amber-300 font-bold uppercase tracking-wider text-[9px]">Sensors Sync</span>
                    <span className="font-semibold">Pure Air: 98.4%</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Premium 4-Step Interactive Navigation Blocks directly inspired by visuals */}
            <div className="pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { step: '01', title: 'Register', desc: 'Secure cloud biometric account setup', icon: <User size={20} /> },
                  { step: '02', title: 'Add Devices', desc: 'Auto-scan instant connection', icon: <Smartphone size={20} /> },
                  { step: '03', title: 'Customize', desc: 'Define your aesthetic moods', icon: <Sliders size={20} /> },
                  { step: '04', title: 'Start Using', desc: 'Enjoy true autonomous comfort', icon: <Home size={20} /> },
                ].map((item, index) => (
                  <div 
                    key={index}
                    onClick={() => {
                      if (index === 1) setSetupModalOpen(true);
                      else if (index === 2) setActiveTab('devices');
                    }}
                    className="p-6 bg-white/25 hover:bg-white/45 backdrop-blur-md rounded-2xl border border-white/30 cursor-pointer transition-all duration-300 group hover:-translate-y-1 shadow-sm flex flex-col justify-between min-h-[140px]"
                  >
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/50 text-slate-900 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                      <span className="text-xs font-bold text-slate-500">{item.step}</span>
                    </div>
                    <div className="mt-4 text-left">
                      <h4 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-700 font-medium leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Interactive Dashboard Section to drive high user-engagement */}
            <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/40 shadow-xl space-y-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="text-left space-y-1">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Interactive Sandbox</span>
                  <h2 className="text-3xl font-bold text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Live Workspace Controls</h2>
                  <p className="text-sm text-slate-700">Toggling options updates the floating visual house structure instantly!</p>
                </div>

                {/* Quick Mood Scenes */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'ambient', label: 'Ambient Soft' },
                    { id: 'night', label: 'Cosy Night' },
                    { id: 'party', label: 'Dynamic Party' },
                    { id: 'eco', label: 'Eco Sleep' }
                  ].map((sc) => (
                    <button
                      key={sc.id}
                      onClick={() => applyScene(sc.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                        currentScene === sc.id 
                          ? 'bg-slate-900 text-white shadow-md' 
                          : 'bg-white/30 text-slate-800 hover:bg-white/50'
                      }`}
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders and Toggles Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Control 1: Ambient Lighting Glow */}
                <div className="bg-white/40 p-6 rounded-2xl border border-white/30 space-y-4 text-left">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="text-amber-600" size={18} />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Ambient Glow</span>
                    </div>
                    <button 
                      onClick={() => {
                        setIsPowerOn(!isPowerOn);
                        triggerNotification(`Master lights turned ${!isPowerOn ? 'ON':'OFF'}`, 'success');
                      }}
                      className={`w-10 h-6 rounded-full transition-colors relative ${isPowerOn ? 'bg-slate-900' : 'bg-slate-400'}`}
                    >
                      <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${isPowerOn ? 'translate-x-4' : 'translate-x-0'}`} />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-slate-700">
                      <span>Brightness</span>
                      <span>{lightsIntensity}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="100" 
                      value={lightsIntensity} 
                      disabled={!isPowerOn}
                      onChange={(e) => {
                        setLightsIntensity(Number(e.target.value));
                      }}
                      className="w-full accent-slate-800 bg-slate-300 h-1.5 rounded-lg cursor-pointer disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Control 2: Smart Climate Thermal */}
                <div className="bg-white/40 p-6 rounded-2xl border border-white/30 space-y-4 text-left">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Thermometer className="text-blue-600" size={18} />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Radiant Thermal</span>
                    </div>
                    <span className="text-xs font-bold text-slate-800 bg-white/50 px-2 py-0.5 rounded-md">{targetTemp}°C</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <button 
                        onClick={() => { setTargetTemp(prev => Math.max(16, prev - 1)); triggerNotification('Ambient climate decreased', 'info') }}
                        className="w-10 h-10 rounded-xl bg-white/60 hover:bg-slate-950 hover:text-white transition-colors flex items-center justify-center text-lg font-bold"
                      >
                        -
                      </button>
                      <div className="flex-1 text-center font-bold text-xl text-slate-950">{targetTemp}°C</div>
                      <button 
                        onClick={() => { setTargetTemp(prev => Math.min(30, prev + 1)); triggerNotification('Ambient climate increased', 'info') }}
                        className="w-10 h-10 rounded-xl bg-white/60 hover:bg-slate-950 hover:text-white transition-colors flex items-center justify-center text-lg font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Control 3: Smart Glass Shades */}
                <div className="bg-white/40 p-6 rounded-2xl border border-white/30 space-y-4 text-left flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Shield className="text-emerald-700" size={18} />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Biometric Shades</span>
                    </div>
                    <button 
                      onClick={() => {
                        setCurtainsClosed(!curtainsClosed);
                        triggerNotification(`Window shades are now ${!curtainsClosed ? 'CLOSED':'OPEN'}`, 'success');
                      }}
                      className={`w-10 h-6 rounded-full transition-colors relative ${curtainsClosed ? 'bg-emerald-800' : 'bg-slate-400'}`}
                    >
                      <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${curtainsClosed ? 'translate-x-4' : 'translate-x-0'}`} />
                    </button>
                  </div>
                  <p className="text-xs font-medium text-slate-700 leading-normal">
                    Closes secondary photo-voltaic glass coatings to preserve internal temperature levels.
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ================= FEATURES PAGE ================= */}
        {activeTab === 'features' && (
          <div className="space-y-12 text-left animate-fadeIn">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-white/35 px-3 py-1 rounded-full border border-white/30">Technology Architecture</span>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                Pure Autonomy. <br />No Complicated Integrations.
              </h2>
              <p className="text-slate-700 font-medium">
                Our decentralized home mesh is configured specifically to run locally, ensuring near-zero latency and military-grade biometric security.
              </p>
            </div>

            {/* Grid of Interactive feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {[
                {
                  title: 'Ultra-Wideband Pair',
                  desc: 'Simply bring any certified device within 5 meters of the Nestive Core and it pairs immediately through background haptic scanning.',
                  metric: '0.2s pairing',
                  icon: <Radio className="text-amber-800" />
                },
                {
                  title: 'Ambient Comfort Engine',
                  desc: 'Learns your dynamic daily routines to gracefully adjust room acoustics, lighting temperature levels, and fresh oxygen flows.',
                  metric: 'AI Personalized',
                  icon: <Cpu className="text-slate-900" />
                },
                {
                  title: 'Off-Grid Backup Power',
                  desc: 'Includes integrated hydrogen micro-cells to keep key security and life support channels alive for 30 days during major grid cuts.',
                  metric: '100% Autonomous',
                  icon: <Activity className="text-emerald-800" />
                },
                {
                  title: 'Encrypted Biometrics',
                  desc: 'Zero user visual profile metrics leave the internal house physical core. Cloud sync utilizes double-shielded decentralized ledgers.',
                  metric: 'Ultra Secure',
                  icon: <Lock className="text-blue-900" />
                },
                {
                  title: 'Proactive Fault Diagnostics',
                  desc: 'Detects microscopic air leaks, piping scale build-up, and faulty circuitry before they manifest as disruptive hardware failures.',
                  metric: 'Pre-emptive Alerting',
                  icon: <Compass className="text-slate-800" />
                },
                {
                  title: 'Acoustic Sound Masking',
                  desc: 'Generates active sound cancelation layers to absorb busy city hums, enabling high-performance deep sleep cycles.',
                  metric: '-32dB Ambient Noise',
                  icon: <Volume2 className="text-purple-800" />
                }
              ].map((feat, index) => (
                <div 
                  key={index} 
                  className="bg-white/20 hover:bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-white/35 shadow-sm space-y-6 transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center shadow-inner group-hover:bg-slate-900 group-hover:text-white transition-all">
                      {feat.icon}
                    </div>
                    <span className="text-xs font-bold text-amber-900 tracking-wider uppercase bg-amber-55/40 px-2 py-1 rounded">
                      {feat.metric}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-950 uppercase tracking-wide">{feat.title}</h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inline dynamic showcase block */}
            <div className="bg-slate-900 text-slate-100 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="space-y-4 max-w-lg text-left">
                <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Sustainability Commitments</span>
                <h3 className="text-3xl font-normal font-serif text-white">Consuming less than a household lightbulb</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Through intelligent thermal harvesting and dynamic window opacity shifts, Nestive spaces consume up to 80% less traditional AC power grid energy.
                </p>
              </div>
              <button 
                onClick={() => setSetupModalOpen(true)}
                className="bg-white text-slate-900 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-amber-100 hover:shadow-lg transition-all"
              >
                Simulate Energy Transition
              </button>
            </div>
          </div>
        )}

        {/* ================= DEVICES PAGE ================= */}
        {activeTab === 'devices' && (
          <div className="space-y-8 text-left animate-fadeIn">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Active ecosystem</span>
                <h2 className="text-4xl font-medium text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>Device Controller Hub</h2>
              </div>
              
              {/* Room Filtering UI */}
              <div className="flex flex-wrap gap-2 bg-white/20 p-1.5 rounded-xl border border-white/30 backdrop-blur-sm">
                {[
                  { id: 'all', label: 'All Zones' },
                  { id: 'living', label: 'Living Deck' },
                  { id: 'bedroom', label: 'Master Suite' },
                  { id: 'kitchen', label: 'Kitchen Lab' },
                  { id: 'security', label: 'Security Node' }
                ].map((rm) => (
                  <button
                    key={rm.id}
                    onClick={() => setActiveRoom(rm.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                      activeRoom === rm.id 
                        ? 'bg-slate-900 text-white shadow-sm' 
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    {rm.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Devices grid display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {devicesList
                .filter(d => activeRoom === 'all' || d.room === activeRoom)
                .map((device) => (
                  <div 
                    key={device.id}
                    className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-[180px] ${
                      device.status 
                        ? 'bg-white/60 border-white/50 shadow-md' 
                        : 'bg-white/10 border-white/15 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{device.room}</span>
                        <h4 className="text-base font-bold text-slate-900 uppercase tracking-tight">{device.name}</h4>
                      </div>
                      <button 
                        onClick={() => handleDeviceToggle(device.id)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          device.status 
                            ? 'bg-slate-900 text-white hover:bg-slate-800' 
                            : 'bg-white/40 text-slate-700 hover:bg-slate-900 hover:text-white'
                        }`}
                      >
                        <Power size={18} />
                      </button>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-slate-900/5">
                      <span className="text-xs font-semibold text-slate-600">Dynamic Status:</span>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        device.status ? 'bg-amber-100 text-amber-950 font-bold' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {device.status ? device.value : 'Inactive'}
                      </span>
                    </div>
                  </div>
                ))}

              {/* Add Custom Simulated Smart Node Card */}
              <button 
                onClick={() => setSetupModalOpen(true)}
                className="p-6 rounded-2xl border-2 border-dashed border-white/40 hover:border-slate-800 flex flex-col items-center justify-center h-[180px] text-slate-700 hover:text-slate-900 hover:bg-white/20 transition-all gap-2"
              >
                <Plus size={24} />
                <span className="text-xs font-bold uppercase tracking-widest">Connect New Node</span>
              </button>
            </div>
          </div>
        )}

        {/* ================= SUPPORT PAGE ================= */}
        {activeTab === 'support' && (
          <div className="max-w-4xl mx-auto space-y-10 text-left animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-white/35 px-3 py-1 rounded-full border border-white/30">Immediate Concierge</span>
              <h2 className="text-4xl font-medium text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>Elite Guest Support Desk</h2>
              <p className="text-slate-700 font-medium">Have a configuration or system tuning query? Our smart assistance hub can clarify instantly.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left Side Info / Quick Links */}
              <div className="md:col-span-5 space-y-6">
                <div className="bg-white/20 p-6 rounded-2xl border border-white/30 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center gap-2">
                    <HelpCircle size={16} /> Help & Directives
                  </h3>
                  <div className="space-y-3">
                    <button onClick={() => { setUserInput("How do I pair a new lighting zone?"); }} className="w-full text-left text-xs bg-white/40 hover:bg-white/60 p-2.5 rounded-lg font-medium text-slate-800 transition-all">
                      "How do I pair a new lighting zone?"
                    </button>
                    <button onClick={() => { setUserInput("Why are my window shades not responding?"); }} className="w-full text-left text-xs bg-white/40 hover:bg-white/60 p-2.5 rounded-lg font-medium text-slate-800 transition-all">
                      "Why are my window shades not responding?"
                    </button>
                    <button onClick={() => { setUserInput("How is biometric data secured?"); }} className="w-full text-left text-xs bg-white/40 hover:bg-white/60 p-2.5 rounded-lg font-medium text-slate-800 transition-all">
                      "How is biometric data secured?"
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-white/20 rounded-2xl border border-white/30 text-xs text-slate-700 space-y-2">
                  <div className="font-bold uppercase tracking-wider text-slate-900">Direct Human Hotlines</div>
                  <div>Seattle Headquarters: +1 (800) NESTIVE</div>
                  <div>London Lab Office: +44 (20) 7946 0912</div>
                </div>
              </div>

              {/* Chat Simulator Console */}
              <div className="md:col-span-7 bg-white/40 backdrop-blur-md rounded-2xl border border-white/45 flex flex-col h-[400px] shadow-lg">
                
                {/* Chat Header */}
                <div className="p-4 border-b border-white/20 flex items-center gap-2 bg-white/25">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-900">Nestive AI Concierge v4</span>
                </div>

                {/* Messages Panel */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-medium">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`p-3 rounded-2xl max-w-[80%] ${
                        msg.sender === 'user' 
                          ? 'bg-slate-900 text-white rounded-tr-none' 
                          : 'bg-white text-slate-900 border border-white/40 rounded-tl-none shadow-sm'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Tray */}
                <form onSubmit={sendSupportMessage} className="p-3 border-t border-white/20 bg-white/20 flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Type your smart home query..." 
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="flex-1 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-2.5 text-xs outline-none text-slate-900 placeholder:text-slate-400 border border-white/30 focus:border-slate-800 transition-colors"
                  />
                  <button 
                    type="submit" 
                    className="w-10 h-10 rounded-xl bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </form>

              </div>

            </div>
          </div>
        )}

      </main>

      {/* ================= CONNECT YOUR SPACE WIZARD MODAL ================= */}
      {setupModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md">
          <div className="bg-[#bfc7c5] w-full max-w-lg rounded-3xl p-6 lg:p-8 border border-white/40 shadow-2xl relative space-y-6 text-left animate-[zoomIn_0.3s_ease-out]">
            
            {/* Modal Exit Button */}
            <button 
              onClick={() => { setSetupModalOpen(false); setSetupStep(1); }} 
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/40 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center"
            >
              <X size={16} />
            </button>

            {/* Stepper Header indicator */}
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    setupStep === step ? 'bg-slate-900 text-white' : 'bg-white/40 text-slate-800'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && <div className="w-10 h-[2px] bg-slate-300" />}
                </div>
              ))}
            </div>

            {/* STEP 1: Introduction */}
            {setupStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Ultra-Wideband Pair</span>
                  <h3 className="text-2xl font-bold text-slate-950 uppercase tracking-tight">Synchronize Your Space</h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    Nestive automates device pairing via localized ultra-wideband mesh technology. Ensure your space hubs are connected to main power.
                  </p>
                </div>

                <div className="bg-white/20 p-4 rounded-xl border border-white/30 text-xs font-semibold text-slate-800">
                  ⚠️ Simulated Sandbox Scan: No hardware is modified during this demo sequence.
                </div>

                <button 
                  onClick={() => { setSetupStep(2); runPairingSequence(); }}
                  className="w-full py-3.5 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors"
                >
                  Initiate Auto Scan
                </button>
              </div>
            )}

            {/* STEP 2: Realtime Scanning & Pairing Simulation */}
            {setupStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-950 uppercase tracking-tight flex items-center gap-2">
                    <Radio className="text-amber-800 animate-ping" size={18} /> Scanning Local Area Nodes
                  </h3>
                  <p className="text-xs text-slate-700">Discovered nearby Nestive native devices...</p>
                </div>

                <div className="space-y-3">
                  {detectedDevices.map((dev, idx) => (
                    <div key={idx} className="p-4 bg-white/40 rounded-xl border border-white/30 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-900">{dev.name}</div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase">Signal strength: {dev.signal}</div>
                      </div>
                      <div>
                        {dev.paired ? (
                          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-1 rounded flex items-center gap-1">
                            <CheckCircle size={10} /> Sync Complete
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-1 rounded animate-pulse">
                            Syncing...
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center text-xs text-slate-500 italic">
                  {pairingActive ? 'Calibrating local network layers...' : 'Sync completed successfully!'}
                </div>
              </div>
            )}

            {/* STEP 3: Setup Finished */}
            {setupStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-2 text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4 shadow-inner">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 uppercase tracking-tight">Sync Established!</h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    Your luxury capsule house is connected and calibrated on the localized mesh.
                  </p>
                </div>

                <div className="bg-white/40 p-4 rounded-xl border border-white/30 text-xs space-y-1 text-slate-800">
                  <div className="font-bold text-slate-950">Connection Summary:</div>
                  <div>• Sub-node latency: 0.14 ms</div>
                  <div>• Encryption type: Symmetric AES-XTS-512</div>
                  <div>• Power state: Optimal Energy Sync Active</div>
                </div>

                <button 
                  onClick={() => {
                    setSetupModalOpen(false);
                    setSetupStep(1);
                    setActiveTab('devices');
                    triggerNotification('Ecosystem dashboard fully operational', 'success');
                  }}
                  className="w-full py-3.5 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors"
                >
                  Enter Your Control Hub
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Styled Footer Block keeping design DNA */}
      <footer className="mt-20 border-t border-white/20 bg-[#bfc7c5]/50 py-12 px-6 lg:px-12 text-slate-700 relative z-20 text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setActiveTab('home')}>
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shadow-md">
                <svg className="w-4 h-4 text-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-950">Nestive</span>
            </div>
            <p className="text-xs font-medium leading-relaxed max-w-xs">
              Designing spatial autonomy systems to redefine the modern living experience. Crafted with premium visual integrity.
            </p>
          </div>

          {/* Quick links columns */}
          {[
            {
              title: 'Product',
              links: [
                { label: 'Ambient Controls', action: () => { setActiveTab('devices'); triggerNotification('Dial controls', 'info') } },
                { label: 'Solar Mesh Power', action: () => { setActiveTab('features'); } },
                { label: 'Security Protocols', action: () => { setActiveTab('features'); } }
              ]
            },
            {
              title: 'Ecosystem',
              links: [
                { label: 'Autonomous Design Lab', action: () => {} },
                { label: 'UWB Hardware specs', action: () => {} },
                { label: 'Direct Pair Wizard', action: () => setSetupModalOpen(true) }
              ]
            },
            {
              title: 'Legal & Privacy',
              links: [
                { label: 'Decentralized Biometrics Guarantee', action: () => {} },
                { label: 'System Service Terms', action: () => {} },
                { label: 'Corporate Sustainability', action: () => {} }
              ]
            }
          ].map((col, index) => (
            <div key={index} className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-slate-950">{col.title}</h5>
              <ul className="space-y-2 text-xs">
                {col.links.map((lnk, lIdx) => (
                  <li key={lIdx}>
                    <button 
                      onClick={lnk.action}
                      className="text-slate-600 hover:text-slate-950 font-semibold transition-colors"
                    >
                      {lnk.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Base Copyright bar */}
        <div className="mt-12 pt-8 border-t border-slate-900/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase font-bold tracking-widest text-slate-600">
          <div>© {new Date().getFullYear()} Nestive Systems Inc. All Rights Reserved.</div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-slate-950">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-950">Terms of Use</a>
          </div>
        </div>
      </footer>

      {/* Embedded Animations and keyframe styles */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        /* Custom fine-grained ambient scrollbars */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #bfc7c5;
        }
        ::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 99px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>
    </div>
  );
}
2
import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, Volume2, Music, TrendingUp, Users, DollarSign, ArrowUpRight, 
  ChevronRight, Sparkles, MessageSquare, Layers, Shield, HelpCircle, 
  Mail, Settings, Check, Star, Plus, Globe, Smartphone, Radio, 
  Sliders, User, Disc, Award, Copy, CheckCircle2, Moon, Sun, Monitor, Bell
} from 'lucide-react';

export default function App() {
  // Page / Tab Navigation
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'features', 'dashboard', 'pricing', 'design-system'
  
  // App States
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({ title: 'Astral Horizon', artist: 'Zenith', duration: '2:40' });
  const [trackProgress, setTrackProgress] = useState(35);
  const [activeCircleIndex, setActiveCircleIndex] = useState(1); // 0, 1, 2 for hero interactive slides
  const [activePricing, setActivePricing] = useState('monthly');
  const [copiedColor, setCopiedColor] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [audioWaves, setAudioWaves] = useState(Array.from({ length: 40 }, () => Math.random() * 80 + 10));

  // Simulated live feedback data
  const [liveStreamFeedback, setLiveStreamFeedback] = useState([
    { id: 1, user: 'Sarah K.', text: 'The low end on this mix is absolutely stellar!', track: 'Neon Dreams' },
    { id: 2, user: 'Marcus.wav', text: 'Stunning transition at 1:12. Chills.', track: 'Echoes of Light' },
    { id: 3, user: 'Aura_Prod', text: 'This synth profile reminds me of vintage Juno-106.', track: 'Vaporwave Sunset' }
  ]);
  const [newFeedbackText, setNewFeedbackText] = useState('');
  
  // Trigger Toast Notification Helper
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Simulated audio waveform animation loop
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setAudioWaves(Array.from({ length: 40 }, () => Math.random() * 90 + 10));
        setTrackProgress(prev => (prev >= 100 ? 0 : prev + 0.5));
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Handle color copying in design system
  const handleCopyColor = (colorHex) => {
    document.execCommand('copy'); // Fallback safe clipboard action
    const textArea = document.createElement("textarea");
    textArea.value = colorHex;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedColor(colorHex);
      showToast(`Copied ${colorHex} to clipboard!`);
      setTimeout(() => setCopiedColor(null), 1500);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }
    document.body.removeChild(textArea);
  };

  // Add simulated comment in real-time
  const handleAddFeedback = (e) => {
    e.preventDefault();
    if (!newFeedbackText.trim()) return;
    const feedback = {
      id: Date.now(),
      user: 'You (Creator)',
      text: newFeedbackText,
      track: currentTrack.title
    };
    setLiveStreamFeedback([feedback, ...liveStreamFeedback]);
    setNewFeedbackText('');
    showToast('Feedback posted to stream simulator!');
  };

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans antialiased selection:bg-[#FF9F1C] selection:text-black overflow-x-hidden relative">
      
      {/* Background Ambience / Lighting Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FF9F1C]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[800px] right-10 w-[600px] h-[600px] bg-gradient-to-br from-[#FF9F1C]/5 to-transparent rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[200px] left-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF9F1C]/8 to-transparent rounded-full blur-[150px] pointer-events-none" />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121214] border border-[#FF9F1C]/40 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 animate-bounce shadow-[#FF9F1C]/10 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-[#FF9F1C] animate-ping" />
          <span className="text-sm font-medium tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* Header/Navbar */}
      <header className="sticky top-0 z-40 bg-[#070708]/80 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <div className="flex items-center space-x-2.5 cursor-pointer group" onClick={() => setActiveTab('home')}>
            <div className="relative w-8 h-8 flex items-center justify-center bg-[#FF9F1C] rounded-lg overflow-hidden transition-all duration-300 group-hover:rotate-12">
              <span className="text-black font-black text-lg">R</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-[#FF9F1C] transition-colors">
              Reluxe<span className="text-[#FF9F1C]">.</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center bg-white/[0.03] p-1.5 rounded-full border border-white/[0.06]">
            {[
              { id: 'home', label: 'Home' },
              { id: 'features', label: 'Features' },
              { id: 'dashboard', label: 'Dashboard' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'design-system', label: 'Design System' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-white text-black shadow-lg font-bold' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsContactOpen(true)}
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-xs font-semibold border border-white/20 hover:border-white text-white transition-all hover:bg-white/[0.05]"
            >
              Get Demo
            </button>
            <button 
              onClick={() => {
                setActiveTab('design-system');
                showToast("Welcome to Reluxe's comprehensive UI Playground!");
              }}
              className="bg-[#FF9F1C] text-black font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 duration-300 shadow-lg shadow-[#FF9F1C]/20"
            >
              Sign Up
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="pb-32">
        {activeTab === 'home' && renderHomeScreen()}
        {activeTab === 'features' && renderFeaturesScreen()}
        {activeTab === 'dashboard' && renderDashboardScreen()}
        {activeTab === 'pricing' && renderPricingScreen()}
        {activeTab === 'design-system' && renderDesignSystem()}
      </main>

      {/* Footer */}
      <footer className="bg-[#0b0b0c] border-t border-white/[0.05] pt-20 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
          
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center bg-[#FF9F1C] rounded-lg">
                <span className="text-black font-black text-lg">R</span>
              </div>
              <span className="font-black text-2xl tracking-tight">Reluxe</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Empowering independent musicians and digital artists with high-fidelity streaming, automated direct-to-fan payout models, and instant interactive feedback ecosystems.
            </p>
            <div className="flex items-center space-x-4">
              {['Twitter', 'Discord', 'Instagram', 'Spotify'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-xs text-gray-400 hover:text-[#FF9F1C] hover:border-[#FF9F1C]/30 transition-all">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">Platform</h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li><button onClick={() => setActiveTab('features')} className="hover:text-white transition-colors">Features Engine</button></li>
              <li><button onClick={() => setActiveTab('dashboard')} className="hover:text-white transition-colors">Creator Studio</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Sound Quality Specs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Artist Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Pay System</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">Design System</h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li><button onClick={() => setActiveTab('design-system')} className="hover:text-white transition-colors">Color Tokens</button></li>
              <li><button onClick={() => setActiveTab('design-system')} className="hover:text-white transition-colors">Interactive Buttons</button></li>
              <li><button onClick={() => setActiveTab('design-system')} className="hover:text-white transition-colors">Input Fields</button></li>
              <li><button onClick={() => setActiveTab('design-system')} className="hover:text-white transition-colors">Navigation Menus</button></li>
              <li><button onClick={() => setActiveTab('design-system')} className="hover:text-white transition-colors">Glass Containers</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Get the latest updates on release structures, royalty multipliers, and software updates.
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="artist@example.com" 
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#FF9F1C]/40 transition-colors"
              />
              <button 
                onClick={() => showToast('Subscribed with success!')}
                className="w-full bg-white text-black hover:bg-[#FF9F1C] transition-colors py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest"
              >
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Reluxe Technologies Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Configurations</a>
          </div>
        </div>
      </footer>

      {/* Simple Custom Interactive Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#101012] border border-white/[0.08] w-full max-w-lg rounded-2xl p-8 relative shadow-2xl">
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-2xl font-black mb-2">Request Artist Access</h3>
            <p className="text-gray-400 text-sm mb-6">Our launch spaces are limited. Enter your profile info and we will reach out to get your tracks migrated.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); setIsContactOpen(false); showToast("Access request submitted successfully!"); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Primary Stage Name</label>
                <input required type="text" placeholder="e.g., DJ Luminary" className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl p-3 text-sm focus:outline-none focus:border-[#FF9F1C]/40" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Portfolio / Soundcloud Link</label>
                <input required type="url" placeholder="https://..." className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl p-3 text-sm focus:outline-none focus:border-[#FF9F1C]/40" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Contact Email</label>
                <input required type="email" placeholder="you@example.com" className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl p-3 text-sm focus:outline-none focus:border-[#FF9F1C]/40" />
              </div>
              
              <button type="submit" className="w-full mt-2 bg-[#FF9F1C] text-black font-extrabold uppercase py-3.5 rounded-xl hover:bg-white hover:shadow-lg transition-all text-xs tracking-wider">
                Submit Beta Application
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );

  // --------------------------------------------------
  // SCREEN: HOME
  // --------------------------------------------------
  function renderHomeScreen() {
    return (
      <div className="space-y-32">
        
        {/* HERO SECTION - Inspired by the provided premium aesthetic image */}
        <section className="relative pt-12 md:pt-24 max-w-7xl mx-auto px-6 overflow-hidden">
          
          {/* Main Hero Grid Layout */}
          <div className="relative min-h-[580px] flex flex-col justify-between py-8">
            
            {/* The Big Wireframe Letter Outline Backdrop */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-30 select-none pointer-events-none">
              <span className="font-thin text-[140px] md:text-[340px] text-white leading-none tracking-tight">R</span>
              <span className="font-thin text-[140px] md:text-[340px] text-white leading-none tracking-tight">e</span>
            </div>

            {/* Overlapping Circles Carousel / Visual Interactive Engine */}
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 my-12 z-10">
              
              {/* Circular Card 1: Solid Color Accent Panel */}
              <div 
                onClick={() => { setActiveCircleIndex(0); showToast("Orange Accent slide selected!"); }}
                className={`relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full bg-[#FF9F1C] flex flex-col justify-center px-10 text-black cursor-pointer transition-all duration-700 shadow-2xl hover:scale-105 ${
                  activeCircleIndex === 0 ? 'ring-4 ring-white z-30 scale-105' : 'opacity-80 z-10 hover:opacity-100'
                }`}
              >
                <div className="absolute top-10 left-10">
                  <ArrowUpRight className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl md:text-2xl font-black leading-tight max-w-[200px] mt-8">
                  Empowering Independent Soundscapes
                </h3>
                <p className="text-black/80 text-xs mt-3 max-w-[220px] font-medium leading-relaxed">
                  The ultimate web platform engineered for aspiring artists looking to bridge their craft directly to listener ears with maximum revenue retention.
                </p>
                <div className="absolute bottom-10 right-10 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  <span className="w-3 h-1.5 rounded-full bg-black" />
                  <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
                </div>
              </div>

              {/* Circular Card 2: Monochromatic Visual Portrait Panel */}
              <div 
                onClick={() => { setActiveCircleIndex(1); showToast("Black & White Live Performance slide selected!"); }}
                className={`relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden bg-[#151518] border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-700 shadow-2xl hover:scale-105 ${
                  activeCircleIndex === 1 ? 'ring-4 ring-[#FF9F1C] z-30 scale-105' : 'opacity-80 z-10 hover:opacity-100'
                }`}
              >
                {/* Simulated Artist Image Placeholder with pure elegant CSS styles */}
                <div className="absolute inset-0 bg-cover bg-center grayscale contrast-125 opacity-70" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=600&auto=format&fit=crop")' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
                
                {/* Centered Overlay Brand Typography */}
                <h2 className="relative z-10 text-white font-black text-5xl tracking-tighter drop-shadow-lg">
                  Reluxe
                </h2>
                
                <div className="absolute bottom-6 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-[10px] uppercase font-bold tracking-widest text-white flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>Live Studio Engine</span>
                </div>
              </div>

              {/* Circular Card 3: Dynamic Listening Focus Panel */}
              <div 
                onClick={() => { setActiveCircleIndex(2); showToast("Cinematic Listening slide selected!"); }}
                className={`relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden bg-[#0A0A0C] border border-white/10 flex flex-col justify-end p-10 cursor-pointer transition-all duration-700 shadow-2xl hover:scale-105 ${
                  activeCircleIndex === 2 ? 'ring-4 ring-white/40 z-30 scale-105' : 'opacity-80 z-10 hover:opacity-100'
                }`}
              >
                {/* Background Artwork */}
                <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop")' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
                
                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] tracking-widest uppercase font-black text-[#FF9F1C] bg-[#FF9F1C]/10 px-2.5 py-1 rounded">High Fidelity</span>
                  <h4 className="text-lg md:text-xl font-bold leading-tight">Spatial Audio Ready</h4>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                    Experience dynamic range expansion with real-time compression algorithms.
                  </p>
                </div>
                
                {/* Learn More Button inside card */}
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-black transition-all flex items-center justify-center border border-white/20">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </div>

            {/* Bottom Section Hero Ticker Info / Navigation Trigger */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/[0.04] z-10">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <Disc className="w-5 h-5 text-[#FF9F1C]" />
                </div>
                <div>
                  <h5 className="font-bold text-sm">Ultra-HQ Format</h5>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">Stream uncompressed audio up to 24-bit/192kHz to preserve organic harmonics.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5 text-[#FF9F1C]" />
                </div>
                <div>
                  <h5 className="font-bold text-sm">Instant Micro-Payouts</h5>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">Direct automated payouts instantly split per track played, powered by distributed ledger technology.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-[#FF9F1C]" />
                </div>
                <div>
                  <h5 className="font-bold text-sm">Artist Direct Co-Op</h5>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">Join a community-driven initiative where 95% of active streaming royalties go straight to artists.</p>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* REAL-TIME SIMULATOR PREVIEW / INTERACTIVE LANDING SPOTLIGHT */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#111113] to-[#0A0A0C] border border-white/[0.08] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute right-0 bottom-0 w-[400px] h-[300px] bg-[#FF9F1C]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Simulator Description Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF9F1C]" />
                  <span>Real-time Interactive Demo</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                  Simulate your Artist Feed dashboard
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Experience our instant listener sentiment algorithm. Test out track controls and watch feedback cascade dynamically from the mock audience base. 
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                    <CheckCircle2 className="w-5 h-5 text-[#FF9F1C] shrink-0" />
                    <span className="text-xs text-gray-300">True direct-to-fan automated communication pipeline.</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                    <CheckCircle2 className="w-5 h-5 text-[#FF9F1C] shrink-0" />
                    <span className="text-xs text-gray-300">Configurable feedback streams for unreleased demo testing.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => setActiveTab('dashboard')} 
                    className="bg-white hover:bg-[#FF9F1C] text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all flex items-center space-x-2 shadow-lg"
                  >
                    <span>Launch Creator Studio</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Dynamic Interactive Stream Box Column */}
              <div className="lg:col-span-7">
                <div className="bg-[#121215] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
                  
                  {/* Top Bar of Console */}
                  <div className="px-5 py-4 border-b border-white/[0.06] bg-black/40 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Stream Node Simulator_</span>
                    </div>
                    <div className="bg-[#FF9F1C]/10 border border-[#FF9F1C]/20 text-[#FF9F1C] text-[10px] px-2.5 py-1 rounded-full font-bold">
                      ACTIVE SESSION
                    </div>
                  </div>

                  {/* Audio Control Panel */}
                  <div className="p-6 bg-[#16161a]/60 border-b border-white/[0.04] space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#FF9F1C]">Now Simulating</span>
                        <h4 className="text-base font-extrabold text-white mt-0.5">{currentTrack.title}</h4>
                        <p className="text-xs text-gray-400">by {currentTrack.artist}</p>
                      </div>
                      
                      {/* Playback Trigger */}
                      <button 
                        onClick={() => {
                          setIsPlaying(!isPlaying);
                          showToast(isPlaying ? "Simulated audio paused." : "Simulated audio playing! Look at the waveform!");
                        }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                          isPlaying ? 'bg-[#FF9F1C] text-black shadow-lg shadow-[#FF9F1C]/20' : 'bg-white text-black hover:bg-gray-200'
                        }`}
                      >
                        {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                      </button>
                    </div>

                    {/* Interactive Simulated Waveform */}
                    <div className="h-16 flex items-end justify-between px-2 bg-black/40 rounded-lg py-2 relative overflow-hidden">
                      {audioWaves.map((h, idx) => (
                        <div 
                          key={idx} 
                          style={{ height: `${h}%` }}
                          className={`w-[2.5%] min-h-[3px] rounded-full transition-all duration-150 ${
                            isPlaying ? 'bg-[#FF9F1C]' : 'bg-gray-600'
                          }`}
                        />
                      ))}
                      {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-[1px]">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Click Play button to animate live spectrum</span>
                        </div>
                      )}
                    </div>

                    {/* Progress Slider Bar */}
                    <div className="space-y-1">
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer" onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const percent = ((e.clientX - rect.left) / rect.width) * 100;
                        setTrackProgress(percent);
                      }}>
                        <div className="h-full bg-[#FF9F1C] rounded-full" style={{ width: `${trackProgress}%` }} />
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-gray-500">
                        <span>0:{Math.floor((trackProgress/100)*160).toString().padStart(2, '0')}</span>
                        <span>{currentTrack.duration}</span>
                      </div>
                    </div>

                  </div>

                  {/* Feedback Live Feed */}
                  <div className="p-6 space-y-4 max-h-[220px] overflow-y-auto scrollbar-thin">
                    <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center space-x-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-[#FF9F1C]" />
                      <span>Direct Listener Sentiment Stream</span>
                    </h5>

                    <div className="space-y-3">
                      {liveStreamFeedback.map((feedback) => (
                        <div key={feedback.id} className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-3 space-y-1 text-xs hover:border-[#FF9F1C]/20 transition-all">
                          <div className="flex items-center justify-between">
                            <span className="font-extrabold text-[#FF9F1C]">{feedback.user}</span>
                            <span className="text-[9px] text-gray-500 bg-white/5 px-1.5 py-0.5 rounded font-mono">track: {feedback.track}</span>
                          </div>
                          <p className="text-gray-300 italic">"{feedback.text}"</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Post Feedback Simulated Interactive Form */}
                  <form onSubmit={handleAddFeedback} className="p-4 bg-black/40 border-t border-white/[0.06] flex items-center space-x-2">
                    <input 
                      type="text" 
                      value={newFeedbackText}
                      onChange={(e) => setNewFeedbackText(e.target.value)}
                      placeholder="Type simulated community feedback response..."
                      className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#FF9F1C]/40 text-white"
                    />
                    <button type="submit" className="bg-[#FF9F1C] hover:bg-white text-black font-extrabold text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-xl transition-colors shrink-0">
                      Send
                    </button>
                  </form>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* BRIGHT BENTO GRID SECTION */}
        <section className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF9F1C]">Uncompromised Mechanics</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">The ultimate system tailored for next-gen composers</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Why settle for modern streaming compromises? Reluxe operates a highly advanced tech stack optimized strictly to bridge distribution gap and pay artists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Bento Block 1: Broad Feature Spot */}
            <div className="md:col-span-8 bg-[#111113] border border-white/[0.08] p-8 rounded-2xl relative overflow-hidden group hover:border-[#FF9F1C]/30 transition-all duration-300">
              <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#FF9F1C]/5 rounded-full blur-[80px]" />
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 bg-[#FF9F1C]/10 border border-[#FF9F1C]/20 rounded-xl flex items-center justify-center">
                  <Sliders className="w-6 h-6 text-[#FF9F1C]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold mb-2">Automated Smart Licensing Master</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                    Automatically register and timestamp your mechanical metadata on-chain instantly when uploading. Never lose control of your masters, sync splits, or mechanical copyright.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
                  <div className="bg-white/[0.02] border border-white/[0.04] p-3 rounded-lg">
                    <span className="block text-xl font-bold text-[#FF9F1C]">0s</span>
                    <span className="text-[10px] uppercase text-gray-500 font-bold">Metadata Sync Latency</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.04] p-3 rounded-lg">
                    <span className="block text-xl font-bold text-[#FF9F1C]">100%</span>
                    <span className="text-[10px] uppercase text-gray-500 font-bold">Ownership Retained</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Block 2: Interactive Audio Tech Specs */}
            <div className="md:col-span-4 bg-[#111113] border border-white/[0.08] p-8 rounded-2xl flex flex-col justify-between group hover:border-[#FF9F1C]/30 transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                  <Radio className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold mb-2">Uncompromised Quality</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We bypass browser codec limitations utilizing progressive FLAC decoding to yield breathtaking soundstages.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">DSD & FLAC Bitstream Output</span>
                <span className="text-[10px] bg-[#FF9F1C]/10 text-[#FF9F1C] font-bold px-2.5 py-1 rounded">24-BIT</span>
              </div>
            </div>

            {/* Bento Block 3: Small Grid Feature */}
            <div className="md:col-span-4 bg-[#111113] border border-white/[0.08] p-8 rounded-2xl flex flex-col justify-between group hover:border-[#FF9F1C]/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold">Antipiracy Shield</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Advanced watermarking technologies encode your audio streams with localized hashes to trace illegal redistribution source origins instantly.
                </p>
              </div>
              <button onClick={() => showToast("Security paper downloaded to your simulated device.")} className="mt-6 text-xs text-white hover:text-[#FF9F1C] flex items-center space-x-1.5 transition-colors font-bold uppercase tracking-wider">
                <span>View Security Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bento Block 4: Broad Fan Multipliers */}
            <div className="md:col-span-8 bg-[#111113] border border-white/[0.08] p-8 rounded-2xl relative overflow-hidden group hover:border-[#FF9F1C]/30 transition-all duration-300">
              <div className="absolute left-1/2 bottom-0 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="space-y-4 max-w-sm">
                  <div className="w-10 h-10 bg-[#FF9F1C]/10 border border-[#FF9F1C]/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#FF9F1C]" />
                  </div>
                  <h4 className="text-lg font-bold">Dynamic Fan Multipliers</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Reward your most dedicated listenership with curated tiers. Listeners can stake native tokens to unlock unreleased acoustic demos, digital artwork drops, and special masterclass events.
                  </p>
                  <button onClick={() => setActiveTab('pricing')} className="text-xs bg-white text-black font-extrabold px-4 py-2 rounded-full uppercase tracking-wider hover:bg-[#FF9F1C] transition-colors">
                    View Pricing Models
                  </button>
                </div>
                {/* Visual Accent representation within bento */}
                <div className="bg-black/60 border border-white/[0.08] p-5 rounded-xl space-y-3.5 w-full md:w-64">
                  <span className="text-[10px] text-gray-500 font-mono">FAN ENGAGEMENT INDEX</span>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Superfan Tier Staking</span>
                      <span className="font-bold text-[#FF9F1C]">+42%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full">
                      <div className="h-full bg-[#FF9F1C] rounded-full w-[85%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Vinyl Pre-Sales</span>
                      <span className="font-bold text-white">High Demand</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full">
                      <div className="h-full bg-white rounded-full w-[60%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* HERO CALL TO ACTION BLOCK */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-tr from-[#151518] to-[#0A0A0C] border border-white/[0.08] rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF9F1C]/5 rounded-full blur-[140px] pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <span className="text-[#FF9F1C] text-xs font-black uppercase tracking-widest bg-[#FF9F1C]/10 px-3 py-1.5 rounded-full">Secure Your Release Slot</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
                Bring your acoustic vision to a global community
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                Join thousands of independent synthesists, composers, vocalists, and sound designers already building stable recurring digital income structures on Reluxe.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="w-full sm:w-auto bg-[#FF9F1C] text-black font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-[#FF9F1C]/10"
                >
                  Apply For Artist Credentials
                </button>
                <button 
                  onClick={() => setActiveTab('design-system')}
                  className="w-full sm:w-auto bg-white/5 border border-white/10 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  Explore Component Kit
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }

  // --------------------------------------------------
  // SCREEN: FEATURES
  // --------------------------------------------------
  function renderFeaturesScreen() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        
        {/* Features Header */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF9F1C]">Modular System Architecture</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Engineered for sonic perfection. Built for transparency.</h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Reluxe isn't just about sharing music. We have designed a complete infrastructure system optimized specifically to improve playback fidelity, secure ownership rights, and distribute automated payouts in real-time.
          </p>
        </div>

        {/* Deep Dive Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Music className="w-6 h-6 text-[#FF9F1C]" />,
              title: "Lossless Master Engine",
              desc: "Upload broadcast-ready WAV or AIFF files. Our native server encoders render your sound files exactly as you mixed them without aggressive lossy bandwidth compression bottlenecks.",
              metric: "24-bit / 192kHz output",
              color: "border-[#FF9F1C]/20"
            },
            {
              icon: <Layers className="w-6 h-6 text-white" />,
              title: "Decentralized Royalty Ledger",
              desc: "Say goodbye to 6-month delay payout cycles. Our system processes micro-royalties straight to your connected bank account within minutes of a verified fan interaction.",
              metric: "95% direct revenue split",
              color: "border-white/10"
            },
            {
              icon: <Sliders className="w-6 h-6 text-[#FF9F1C]" />,
              title: "Interactive Stem Player",
              desc: "Allow superfans to mix your track stems inside our online console. Perfect for sharing ambient variations, acoustic instrumentals, vocal layers, and percussion components.",
              metric: "Up to 8 interactive stems",
              color: "border-[#FF9F1C]/20"
            },
            {
              icon: <Users className="w-6 h-6 text-white" />,
              title: "Exclusive Fan Communities",
              desc: "Create bespoke forums directly linked to purchase tokens. Host listener voting, run Q&As, and invite top listeners to join private streaming feedback rooms.",
              metric: "Direct messaging integration",
              color: "border-white/10"
            },
            {
              icon: <Shield className="w-6 h-6 text-[#FF9F1C]" />,
              title: "Advanced Antipiracy Suite",
              desc: "Our automated tracking tools sweep popular video networks and pirate directories daily, flagging identical audio matches with immediate DMCA enforcement protocols.",
              metric: "24/7 web-scraping monitor",
              color: "border-[#FF9F1C]/20"
            },
            {
              icon: <Sparkles className="w-6 h-6 text-white" />,
              title: "Interactive Masterclass Suite",
              desc: "Broadcast behind-the-scenes recording sessions or DAW sound design walkthroughs to your subscription tiers utilizing ultra-low latency streaming.",
              metric: "Under 100ms video delay",
              color: "border-white/10"
            }
          ].map((feat, idx) => (
            <div key={idx} className={`bg-[#111113] border ${feat.color} p-8 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 relative group`}>
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF9F1C]/[0.01] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-extrabold">{feat.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{feat.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between relative z-10">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Metrics</span>
                <span className="text-[10px] font-bold text-[#FF9F1C] font-mono">{feat.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Stat Highlight Banner */}
        <div className="bg-[#101012] border border-white/[0.08] rounded-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="block text-3xl md:text-5xl font-black text-[#FF9F1C] tracking-tight">$42M+</span>
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest block mt-2">Artist Royalties Paid</span>
          </div>
          <div>
            <span className="block text-3xl md:text-5xl font-black text-white tracking-tight">1.2M</span>
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest block mt-2">Active Audiophile Listeners</span>
          </div>
          <div>
            <span className="block text-3xl md:text-5xl font-black text-[#FF9F1C] tracking-tight">24-Bit</span>
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest block mt-2">True Studio Fidelity</span>
          </div>
          <div>
            <span className="block text-3xl md:text-5xl font-black text-white tracking-tight">95%</span>
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest block mt-2">Average Artist Split</span>
          </div>
        </div>

      </div>
    );
  }

  // --------------------------------------------------
  // SCREEN: DASHBOARD PREVIEW
  // --------------------------------------------------
  function renderDashboardScreen() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        
        {/* Dashboard Introduction Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.05]">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF9F1C]">Interactive Studio Workspace</span>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">Creator Analytics Hub</h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              Monitor audio engagement metrics, track payouts, interact with fan comment channels, and control simulation variables directly.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => showToast("Exporting audio reports...")}
              className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white hover:bg-white/10 transition-all font-bold"
            >
              Export Report
            </button>
            <button 
              onClick={() => showToast("Simulating fresh track upload context...")}
              className="px-4 py-2.5 rounded-xl bg-[#FF9F1C] text-black text-xs font-black uppercase tracking-wider hover:bg-white hover:shadow-lg transition-all"
            >
              Upload New Track
            </button>
          </div>
        </div>

        {/* Quick Insights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#111113] border border-white/[0.08] p-6 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Gross Income (Mo)</span>
              <DollarSign className="w-4 h-4 text-[#FF9F1C]" />
            </div>
            <div className="space-y-1">
              <span className="block text-2xl font-black text-white">$14,248.90</span>
              <span className="text-[10px] text-green-500 font-bold flex items-center space-x-1">
                <span>↑ +18.4% from last week</span>
              </span>
            </div>
          </div>

          <div className="bg-[#111113] border border-white/[0.08] p-6 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Accumulated Streams</span>
              <Disc className="w-4 h-4 text-white" />
            </div>
            <div className="space-y-1">
              <span className="block text-2xl font-black text-white">482,910</span>
              <span className="text-[10px] text-green-500 font-bold flex items-center space-x-1">
                <span>↑ +5.2% from last week</span>
              </span>
            </div>
          </div>

          <div className="bg-[#111113] border border-white/[0.08] p-6 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Average Listener Retention</span>
              <Sliders className="w-4 h-4 text-[#FF9F1C]" />
            </div>
            <div className="space-y-1">
              <span className="block text-2xl font-black text-white">84.2%</span>
              <span className="text-[10px] text-gray-500 font-mono">Industry average: 51.5%</span>
            </div>
          </div>

          <div className="bg-[#111113] border border-white/[0.08] p-6 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Fans</span>
              <Users className="w-4 h-4 text-white" />
            </div>
            <div className="space-y-1">
              <span className="block text-2xl font-black text-white">12,490</span>
              <span className="text-[10px] text-green-500 font-bold flex items-center space-x-1">
                <span>↑ +22% new signups</span>
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Workspace Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Visual Waveform & Mix Parameters - Column Span 8 */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* The Live Stem Controller console card */}
            <div className="bg-[#111113] border border-white/[0.08] rounded-xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-extrabold text-lg">Interactive Mixing Rack</h3>
                  <p className="text-xs text-gray-400">Control active play parameters to preview live compression adjustments.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF9F1C] animate-ping" />
                  <span className="text-[10px] font-mono text-[#FF9F1C] uppercase font-bold">Acoustic Mode Online</span>
                </div>
              </div>

              {/* Master Volume Slider Control */}
              <div className="space-y-2 bg-black/40 p-4 rounded-xl border border-white/[0.04]">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-gray-300 flex items-center space-x-2">
                    <Volume2 className="w-4 h-4 text-[#FF9F1C]" />
                    <span>Master Analog Gain Output</span>
                  </span>
                  <span className="font-mono text-white text-[10px]">+2.4 dB</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full relative">
                  <div className="absolute top-0 left-0 h-full bg-[#FF9F1C] rounded-full w-[72%]" />
                  <div className="absolute top-1/2 left-[72%] -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-black cursor-pointer shadow-lg" />
                </div>
              </div>

              {/* Stem Tracks Parameters */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-wider font-black text-gray-400">Multiband Stem Controls</h4>
                
                {[
                  { name: "Stem A (Lead Synth Line)", value: 85, pan: "Center", focus: true },
                  { name: "Stem B (Vocal Harmonics)", value: 62, pan: "Left 24%", focus: false },
                  { name: "Stem C (Sub-Bass Transients)", value: 90, pan: "Center Mono", focus: false },
                  { name: "Stem D (Percussion & High-Hat)", value: 45, pan: "Right 18%", focus: true }
                ].map((stem, idx) => (
                  <div key={idx} className="bg-[#16161a] border border-white/[0.04] p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1 min-w-[180px]">
                      <span className="text-xs font-bold text-white block">{stem.name}</span>
                      <span className="text-[10px] text-gray-500 font-mono">Pan: {stem.pan}</span>
                    </div>
                    
                    {/* Interactive Slider representation */}
                    <div className="flex-1 w-full max-w-sm space-y-1">
                      <div className="h-1.5 bg-white/10 rounded-full relative">
                        <div className="absolute top-0 left-0 h-full bg-white rounded-full" style={{ width: `${stem.value}%` }} />
                      </div>
                      <div className="flex justify-between text-[9px] font-mono text-gray-500">
                        <span>Min</span>
                        <span>{stem.value}% Volume</span>
                        <span>Max</span>
                      </div>
                    </div>

                    {/* Quick Control Badges */}
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => showToast(`Muted ${stem.name.split(' ')[0]}`)}
                        className="text-[9px] font-extrabold uppercase bg-white/5 border border-white/10 px-2 py-1 rounded hover:bg-white/15 hover:text-white text-gray-400 transition-all"
                      >
                        Mute
                      </button>
                      <button 
                        onClick={() => showToast(`Isolated ${stem.name.split(' ')[0]} to Solo`)}
                        className={`text-[9px] font-extrabold uppercase px-2 py-1 rounded transition-all ${
                          stem.focus ? 'bg-[#FF9F1C] text-black font-bold' : 'bg-white/5 border border-white/10 text-gray-400'
                        }`}
                      >
                        Solo
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Performance Analytics Line Chart representation */}
            <div className="bg-[#111113] border border-white/[0.08] rounded-xl p-6 space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-extrabold text-lg">Listener Peak Hours</h3>
                  <p className="text-xs text-gray-400 font-sans">Simulated daily play counts split across global zones.</p>
                </div>
                <select className="bg-white/5 border border-white/10 text-xs rounded-lg px-3 py-1.5 focus:outline-none" onChange={() => showToast("Simulated timeline range changed.")}>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last Quarter</option>
                </select>
              </div>

              {/* Simulated Graph Representation utilizing CSS Grids */}
              <div className="h-48 flex items-end justify-between pt-4 relative">
                
                {/* Horizontal Guide Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[9px] font-mono text-gray-600">
                  <div className="border-b border-white/[0.03] w-full pb-1">100k Streams</div>
                  <div className="border-b border-white/[0.03] w-full pb-1">75k Streams</div>
                  <div className="border-b border-white/[0.03] w-full pb-1">50k Streams</div>
                  <div className="border-b border-white/[0.03] w-full pb-1">25k Streams</div>
                  <div className="w-full">0 Streams</div>
                </div>

                {/* Bars Representation */}
                {[55, 78, 62, 95, 82, 110, 89, 74, 99, 120, 115, 130].map((height, idx) => (
                  <div key={idx} className="relative w-[6%] group flex flex-col items-center justify-end h-full z-10">
                    {/* Hover Tooltip Info */}
                    <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 bg-[#FF9F1C] text-black text-[9px] font-black px-2 py-1 rounded shadow-xl whitespace-nowrap z-20">
                      {(height * 850).toLocaleString()} Plays
                    </div>
                    
                    {/* Bar Line Graphic representation */}
                    <div 
                      style={{ height: `${(height/140)*100}%` }}
                      className="w-full bg-gradient-to-t from-[#FF9F1C]/20 to-[#FF9F1C] rounded-t hover:brightness-125 transition-all duration-300"
                    />
                    
                    <span className="text-[9px] font-mono text-gray-500 mt-2 block">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][idx]}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Connected Audience Feed & Staking Settings - Column Span 4 */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* The Live Simulator Event Feed */}
            <div className="bg-[#111113] border border-white/[0.08] rounded-xl p-6 space-y-6">
              <h3 className="font-extrabold text-lg flex items-center space-x-2">
                <Radio className="w-5 h-5 text-[#FF9F1C]" />
                <span>Audience Stream</span>
              </h3>
              
              <div className="space-y-4 max-h-[350px] overflow-y-auto scrollbar-thin">
                {liveStreamFeedback.map((cmt) => (
                  <div key={cmt.id} className="bg-white/[0.02] border border-white/[0.04] p-3 rounded-lg space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#FF9F1C]">{cmt.user}</span>
                      <span className="text-[9px] text-gray-500 font-mono">1m ago</span>
                    </div>
                    <p className="text-gray-300 italic">"{cmt.text}"</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleAddFeedback} className="space-y-2">
                <input 
                  type="text" 
                  value={newFeedbackText}
                  onChange={(e) => setNewFeedbackText(e.target.value)}
                  placeholder="Broadcast custom response..." 
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg p-2.5 text-xs focus:outline-none focus:border-[#FF9F1C]"
                />
                <button type="submit" className="w-full bg-[#FF9F1C] text-black font-extrabold uppercase text-[10px] tracking-widest py-2 rounded-lg hover:bg-white transition-colors">
                  Submit Broadcast
                </button>
              </form>

            </div>

            {/* Simulated Live Metadata Info Card */}
            <div className="bg-[#111113] border border-white/[0.08] rounded-xl p-6 space-y-4">
              <h4 className="font-extrabold text-sm uppercase tracking-wider text-gray-400">Mechanical Registration Status</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Digital Fingerprint:</span>
                  <span className="font-mono text-white text-[10px]">#RLX-829A0-992F</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Smart Contract Split:</span>
                  <span className="font-bold text-white">95/5 Direct Fan Matrix</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Content Integrity ID:</span>
                  <span className="text-green-500 text-[10px] font-bold">SECURED ON LEDGER</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }

  // --------------------------------------------------
  // SCREEN: PRICING
  // --------------------------------------------------
  function renderPricingScreen() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        
        {/* Pricing header */}
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF9F1C]">Simple Artist Terms</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none">Choose your release scale</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            All plans include high-fidelity audio encoding, automated micro-royalties, and full visual statistics logs.
          </p>

          {/* Pricing Toggle Menu */}
          <div className="pt-4">
            <div className="inline-flex bg-[#111113] border border-white/[0.08] p-1 rounded-full">
              <button 
                onClick={() => { setActivePricing('monthly'); showToast("Monthly pricing active"); }}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                  activePricing === 'monthly' ? 'bg-[#FF9F1C] text-black shadow-md' : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button 
                onClick={() => { setActivePricing('annual'); showToast("Annual tier active! (Saved 20%)"); }}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                  activePricing === 'annual' ? 'bg-[#FF9F1C] text-black shadow-md' : 'text-gray-400 hover:text-white'
                }`}
              >
                Annual (-20%)
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Plan 1: Bedroom Composer */}
          <div className="bg-[#111113] border border-white/[0.08] p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-300">
            <div className="space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF9F1C] bg-[#FF9F1C]/10 px-2.5 py-1 rounded">Bedroom Tier</span>
              <h3 className="text-2xl font-extrabold">Bedroom Composer</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Perfect for solo artists testing the waters with digital single releases.</p>
              
              <div className="pt-2">
                <span className="text-4xl font-black">
                  {activePricing === 'monthly' ? '$9' : '$7'}
                </span>
                <span className="text-gray-500 text-xs font-mono"> / month</span>
              </div>

              <ul className="space-y-3.5 pt-4 text-xs text-gray-300">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#FF9F1C]" />
                  <span>Upload up to 5 tracks per month</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#FF9F1C]" />
                  <span>24-bit/48kHz Lossless Encode</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#FF9F1C]" />
                  <span>90% Revenue Split Retained</span>
                </li>
                <li className="flex items-center space-x-2.5 text-gray-500 line-through">
                  <span>Custom Stem Mixer Integration</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => showToast("Subscribing to Bedroom Composer plan...")}
              className="mt-8 w-full py-3 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Plan 2: Professional Producer (Highlighted) */}
          <div className="bg-[#121215] border-2 border-[#FF9F1C] p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-[#FF9F1C]/5 group">
            <div className="absolute top-0 right-0 bg-[#FF9F1C] text-black font-black uppercase text-[9px] tracking-widest px-4 py-1.5 rounded-bl-xl">
              RECOMMENDED
            </div>
            
            <div className="space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF9F1C] bg-[#FF9F1C]/10 px-2.5 py-1 rounded">PRO STUDIO</span>
              <h3 className="text-2xl font-extrabold">Professional Studio</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Engineered for established creators looking to launch full albums and custom mixes.</p>
              
              <div className="pt-2">
                <span className="text-4xl font-black">
                  {activePricing === 'monthly' ? '$29' : '$23'}
                </span>
                <span className="text-gray-500 text-xs font-mono"> / month</span>
              </div>

              <ul className="space-y-3.5 pt-4 text-xs text-gray-300">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#FF9F1C]" />
                  <span className="font-bold">UNLIMITED Track Uploads</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#FF9F1C]" />
                  <span>24-bit/192kHz Premium Master Master</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#FF9F1C]" />
                  <span className="font-bold">95% Full Direct Revenue Split</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#FF9F1C]" />
                  <span>Interactive Stem Mixer integration</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => showToast("Subscribing to Professional Studio plan...")}
              className="mt-8 w-full py-3 bg-[#FF9F1C] text-black hover:bg-white hover:text-black font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg"
            >
              Deploy Pro Stack
            </button>
          </div>

          {/* Plan 3: Music Label Suite */}
          <div className="bg-[#111113] border border-white/[0.08] p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-300">
            <div className="space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-white bg-white/10 px-2.5 py-1 rounded">Enterprise</span>
              <h3 className="text-2xl font-extrabold">Co-Op Label Suite</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Configured for indie labels managing large rosters with high-volume smart contracts.</p>
              
              <div className="pt-2">
                <span className="text-4xl font-black">
                  {activePricing === 'monthly' ? '$89' : '$71'}
                </span>
                <span className="text-gray-500 text-xs font-mono"> / month</span>
              </div>

              <ul className="space-y-3.5 pt-4 text-xs text-gray-300">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#FF9F1C]" />
                  <span>Manage up to 25 distinct artist rosters</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#FF9F1C]" />
                  <span>Enterprise API Access for custom web players</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#FF9F1C]" />
                  <span>Multi-sig smart contract payout flows</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#FF9F1C]" />
                  <span>Dedicated antipiracy legal counsel agent</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => showToast("Subscribing to Co-Op Label plan...")}
              className="mt-8 w-full py-3 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all"
            >
              Contact Label Relations
            </button>
          </div>

        </div>

        {/* FAQ Dropdown Block */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold">Frequently Asked Questions</h3>
            <p className="text-gray-400 text-xs mt-1">Everything you need to know about publishing on Reluxe.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does the automated direct-to-fan payout system work?",
                a: "Reluxe splits 95% of direct listener stream value at the millisecond played level. Micro-royalties compile continuously inside our backend ledger structure and are direct-transferred to your specified bank account using Stripe or direct automated ACH transfers twice weekly."
              },
              {
                q: "What files do you require for master uploads?",
                a: "For optimal rendering on our spatial audio soundstage, we require high-resolution WAV (24-bit/45.1kHz or higher) or uncompressed AIFF files. MP3 files are supported, but bypass our lossless pipeline process."
              },
              {
                q: "Can I migrate tracks already published on Spotify?",
                a: "Yes! Utilizing our simple RSS ingest tool, you can migrate your active portfolio catalogs along with verified metadata directly into the Reluxe universe within seconds."
              }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-[#111113] border border-white/[0.08] rounded-xl p-5 cursor-pointer transition-all">
                <summary className="flex justify-between items-center text-sm font-bold text-white uppercase tracking-wider list-none outline-none">
                  <span>{faq.q}</span>
                  <Plus className="w-4 h-4 text-[#FF9F1C] transform group-open:rotate-45 transition-transform" />
                </summary>
                <p className="text-gray-400 text-xs mt-3.5 leading-relaxed border-t border-white/[0.04] pt-3.5">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

      </div>
    );
  }

  // --------------------------------------------------
  // SCREEN: DESIGN SYSTEM & DESIGN PLAYGROUND
  // --------------------------------------------------
  function renderDesignSystem() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* Intro Banner */}
        <div className="space-y-4 border-b border-white/[0.05] pb-8">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF9F1C]">UI UIKIT PLAYGROUND</span>
          <h1 className="text-4xl font-black tracking-tight leading-none">Reluxe Design Token Architecture</h1>
          <p className="text-gray-400 text-sm max-w-xl">
            A production-ready UI kit housing the exact color variables, buttons, menus, and input tokens designed for consistency. Copy any token values directly.
          </p>
        </div>

        {/* SECTION 1: Color Tokens */}
        <div className="space-y-6">
          <h3 className="text-lg font-black uppercase tracking-wider text-[#FF9F1C]">01. Color Palette Tokens</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Primary Brand Golden', hex: '#FF9F1C', desc: 'Active action highlights' },
              { label: 'Deep Obsidian', hex: '#070708', desc: 'Main backdrop canvas' },
              { label: 'Studio Card Black', hex: '#111113', desc: 'Container backgrounds' },
              { label: 'Borders Glassmorphism', hex: 'rgba(255,255,255,0.08)', desc: 'Elegant dividers' },
              { label: 'Pure White Text', hex: '#FFFFFF', desc: 'High-contrast typography' }
            ].map((col, idx) => (
              <div 
                key={idx} 
                onClick={() => handleCopyColor(col.hex)}
                className="bg-[#111113] border border-white/[0.08] p-4 rounded-xl cursor-pointer hover:border-white/20 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="h-16 rounded-lg shadow-inner" style={{ backgroundColor: col.hex.startsWith('rgba') ? 'rgba(255,255,255,0.08)' : col.hex }} />
                <div>
                  <span className="block text-xs font-bold text-white">{col.label}</span>
                  <span className="text-[10px] text-[#FF9F1C] font-mono mt-0.5 block">{col.hex}</span>
                  <span className="text-[9px] text-gray-500 mt-1 block leading-tight">{col.desc}</span>
                </div>
                <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-[8px] text-gray-400 uppercase tracking-widest font-bold">
                  <span>Click to copy</span>
                  <Copy className="w-3 h-3 text-[#FF9F1C]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: Typography & Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Buttons Playground */}
          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-wider text-[#FF9F1C]">02. Button Component States</h3>
            <div className="bg-[#111113] border border-white/[0.08] p-8 rounded-2xl space-y-6">
              
              {/* Primary Premium Action */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-gray-500 font-mono">Primary Action (Accent)</span>
                <div>
                  <button onClick={() => showToast("Primary Trigger Selected")} className="bg-[#FF9F1C] text-black font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-white hover:scale-105 transition-all duration-300">
                    Sign Up Platform
                  </button>
                </div>
              </div>

              {/* Secondary Clean Action */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-gray-500 font-mono">Secondary Action (Inverted)</span>
                <div>
                  <button onClick={() => showToast("Secondary Trigger Selected")} className="bg-white text-black font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-[#FF9F1C] transition-all">
                    Launch Creator Space
                  </button>
                </div>
              </div>

              {/* Ghost Border Action */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-gray-500 font-mono">Ghost Action (Border Outline)</span>
                <div>
                  <button onClick={() => showToast("Ghost Trigger Selected")} className="bg-transparent border border-white/20 hover:border-white text-white font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-all">
                    Explore Component Kit
                  </button>
                </div>
              </div>

              {/* Icon Interactive Badge */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-gray-500 font-mono">Circular Utility Badge</span>
                <div className="flex space-x-3">
                  <button onClick={() => showToast("Play interaction simulated")} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#FF9F1C] transition-all">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </button>
                  <button onClick={() => showToast("Setting menu opened")} className="w-10 h-10 rounded-full bg-[#16161a] border border-white/10 text-white flex items-center justify-center hover:border-white transition-all">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Input Elements and Select Dropdowns */}
          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-wider text-[#FF9F1C]">03. Form & Inputs</h3>
            <div className="bg-[#111113] border border-white/[0.08] p-8 rounded-2xl space-y-6">
              
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Stage Name (Active Input State)</label>
                <input 
                  type="text" 
                  defaultValue="Acoustic Luminary"
                  className="w-full bg-[#16161a] border border-[#FF9F1C]/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF9F1C]" 
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Release Category (Select Option State)</label>
                <select className="w-full bg-[#16161a] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#FF9F1C]">
                  <option>Electronic / Synthwave Ambient</option>
                  <option>Lo-Fi Neo Classical</option>
                  <option>Experimental Soundscapes</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Interactive Toggle Switch</label>
                <div className="flex items-center justify-between bg-black/30 p-3.5 rounded-xl border border-white/[0.04]">
                  <span className="text-xs text-gray-300">Allow automatic track stemming for premium followers</span>
                  <button 
                    onClick={() => showToast("Stems toggle updated!")}
                    className="w-12 h-6 bg-[#FF9F1C] rounded-full p-1 relative flex items-center transition-colors"
                  >
                    <div className="w-4 h-4 bg-black rounded-full absolute right-1 transition-all" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* SECTION 4: Layout & Container Cards */}
        <div className="space-y-6">
          <h3 className="text-lg font-black uppercase tracking-wider text-[#FF9F1C]">04. Responsive Container Card Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Template Card A */}
            <div className="bg-[#111113] border border-white/[0.08] p-6 rounded-2xl space-y-4">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Container Alpha</span>
              <div className="h-28 rounded-lg bg-cover bg-center grayscale filter contrast-125" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop")' }} />
              <h4 className="font-extrabold text-base">Acoustic Engineering Track</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Classic elegant dark card template perfect for list elements and stream modules.
              </p>
              <div className="pt-2 flex justify-between items-center text-xs">
                <span className="text-gray-500">128 Streams</span>
                <span className="text-[#FF9F1C] font-mono text-[10px] font-bold">LOSSLESS OUTPUT</span>
              </div>
            </div>

            {/* Template Card B (Glassmorphism highlight) */}
            <div className="bg-[#111113] border-2 border-[#FF9F1C] p-6 rounded-2xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FF9F1C] text-black text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                Interactive
              </div>
              <span className="text-[10px] font-mono text-[#FF9F1C] uppercase tracking-wider block">Container Beta (Highlight)</span>
              <div className="h-28 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=400&auto=format&fit=crop")' }} />
              <h4 className="font-extrabold text-base">Starlight Ambient Live</h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                Highlights primary items like recommended plans, live sessions, or featured sound artists.
              </p>
              <div className="pt-2">
                <button onClick={() => showToast("Action from Design System template initiated!")} className="w-full py-2 bg-[#FF9F1C] text-black font-extrabold text-xs uppercase tracking-widest rounded-lg">
                  Initiate Target Action
                </button>
              </div>
            </div>

            {/* Template Card C */}
            <div className="bg-[#111113] border border-white/[0.08] p-6 rounded-2xl flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Container Gamma</span>
                <div className="flex items-center space-x-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop")' }} />
                  <div>
                    <h5 className="font-bold text-xs">Aura Melodia</h5>
                    <p className="text-[10px] text-gray-500">Curator since 2024</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-4 leading-relaxed italic">
                  "Perfect for displaying listener testimonials, team biographies, or short community reviews."
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.04] flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3.5 h-3.5 text-[#FF9F1C] fill-current" />)}
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }

}
3
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dobrik Museum — Renaissance Art Experience</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts for Perfect Editorial Typography Matching -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['Cinzel', 'serif'],
            sans: ['Plus Jakarta Sans', 'sans-serif'],
            mono: ['Space Grotesk', 'monospace'],
          },
          colors: {
            museum: {
              bg: '#f3f3f3', // Perfect light grey matching the canvas backdrop
              dark: '#111111',
              coral: '#f05a5a', // Coral pink matching the triangle behind the sculpture
              purple: '#6713ef', // Deep indigo purple matching the main action button
              magenta: '#e03ae0', 
              blue: '#00c2ff', // Light cyan blue circle matching the visual layout
              muted: '#555555',
              card: '#ffffff'
            }
          },
          animation: {
            'spin-slow': 'spin 30s linear infinite',
            'float': 'float 6s ease-in-out infinite',
            'float-delayed': 'float 6s ease-in-out infinite 3s',
            'pulse-soft': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-12px)' },
            }
          }
        }
      }
    }
  </script>

  <style>
    /* Custom premium scrollbars */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #f3f3f3;
    }
    ::-webkit-scrollbar-thumb {
      background: #111111;
      border-radius: 0px;
    }

    /* Perfect dot grid pattern matching bottom left */
    .memphis-dot-grid {
      background-image: radial-gradient(#999999 1.5px, transparent 1.5px);
      background-size: 10px 10px;
    }
    
    .vertical-text {
      writing-mode: vertical-lr;
      text-orientation: mixed;
    }
    
    /* Elegant outline triangle shape with SVG path */
    .triangle-clip {
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
  </style>
</head>
<body class="bg-museum-bg text-museum-dark font-sans overflow-x-hidden antialiased">

  <!-- ================= EDITORIAL TOP NAVBAR ================= -->
  <header class="fixed top-0 left-0 w-full z-50 bg-museum-bg/90 backdrop-blur-md transition-all duration-300">
    <div class="max-w-7xl mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
      
      <!-- Brand Logo -->
      <a href="#" class="flex items-center gap-10">
        <span class="font-sans font-extrabold text-[15px] tracking-[0.2em] uppercase text-museum-dark">DOBRIK MUSEUM</span>
        <!-- Minimal horizontal layout navigation list -->
        <nav class="hidden md:flex items-center gap-8 text-[13px] font-sans font-medium text-museum-muted">
          <a href="#hero" class="hover:text-museum-dark transition-colors duration-200">Home</a>
          <a href="#about" class="hover:text-museum-dark transition-colors duration-200">About</a>
          <a href="#gallery" class="hover:text-museum-dark transition-colors duration-200">Gallery</a>
          <a href="#ai-workshop" class="hover:text-museum-dark transition-colors duration-200">AI Workshop</a>
        </nav>
      </a>

      <!-- Minimal Burger Menu Accent (matching top right of image) -->
      <div class="flex items-center gap-3">
        <button id="menu-btn" class="flex flex-col gap-1.5 p-2 group" aria-label="Toggle Navigation Menu">
          <span class="w-6 h-[2px] bg-museum-dark group-hover:bg-museum-coral transition-colors"></span>
          <span class="w-6 h-[2px] bg-museum-dark group-hover:bg-museum-coral transition-colors"></span>
          <span class="w-4 h-[2px] bg-museum-dark group-hover:bg-museum-coral align-self-end transition-all"></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Fullscreen Navigation Overlay -->
  <div id="mobile-menu" class="fixed inset-0 bg-museum-dark text-white z-50 translate-x-full transition-transform duration-500 ease-in-out flex flex-col justify-between p-12">
    <div class="flex justify-between items-center">
      <span class="font-sans font-extrabold tracking-widest text-lg uppercase text-museum-bg">DOBRIK MUSEUM</span>
      <button id="close-menu-btn" class="p-2 hover:bg-neutral-800 rounded-full transition-all">
        <i data-lucide="x" class="w-8 h-8 text-white"></i>
      </button>
    </div>
    
    <nav class="flex flex-col gap-6 text-4xl font-sans tracking-wide py-10 font-bold">
      <a href="#hero" class="mobile-link hover:text-museum-coral transition-colors">01. Home</a>
      <a href="#about" class="mobile-link hover:text-museum-coral transition-colors">02. Creative Concept</a>
      <a href="#gallery" class="mobile-link hover:text-museum-coral transition-colors">03. Curated Gallery</a>
      <a href="#ai-workshop" class="mobile-link hover:text-museum-coral transition-colors">04. AI Art Curator</a>
    </nav>

    <div class="border-t border-neutral-800 pt-6 flex flex-col gap-2 font-mono text-xs text-neutral-400">
      <p>Dobrik Art Gallery & Modern Antiques</p>
      <p>Open daily for fine experiences.</p>
    </div>
  </div>


  <!-- ================= HERO SECTION (PRECISE VISUAL RECREATION) ================= -->
  <section id="hero" class="relative min-h-screen pt-20 pb-16 flex items-center justify-center overflow-hidden">
    
    <!-- LEFT EDGE ACCENTS -->
    <!-- Large Coral Red Outline Circle clipped on left boundary -->
    <div class="absolute -left-16 top-[20%] w-32 h-32 rounded-full border-[5px] border-museum-coral/70 pointer-events-none hidden lg:block"></div>
    
    <!-- RIGHT EDGE ACCENTS -->
    <!-- Solid Cyan Rectangle Tab aligned with the right boundary -->
    <div class="absolute right-0 top-[22%] w-4 h-24 bg-museum-blue pointer-events-none hidden lg:block"></div>

    <!-- MAIN HERO CONTENT CONTAINER -->
    <div class="max-w-7xl mx-auto px-8 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
      
      <!-- LEFT COLUMN: Bullet Indicators + Editorial Copy -->
      <div class="lg:col-span-6 flex flex-row items-start gap-12">
        
        <!-- Vertical Bullet Navigation (Leftmost Margin) -->
        <div class="hidden md:flex flex-col items-center gap-4 pt-4 shrink-0">
          <!-- Top Orange Dot with outer border circle -->
          <div class="relative flex items-center justify-center">
            <span class="w-1.5 h-1.5 rounded-full bg-museum-coral z-10"></span>
            <span class="absolute w-4 h-4 rounded-full border border-museum-coral/50 animate-ping"></span>
          </div>
          <!-- Tiny black tracking dots -->
          <span class="w-1.5 h-1.5 rounded-full bg-museum-dark opacity-90"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-museum-dark opacity-90"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-museum-dark opacity-90"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-museum-dark opacity-90"></span>
          <!-- Thin vertical black rule -->
          <div class="w-[1.5px] h-12 bg-museum-dark"></div>
        </div>

        <!-- Main Heading content & buttons -->
        <div class="flex-1 space-y-8">
          <div class="space-y-6">
            <h1 class="text-[52px] md:text-[76px] font-extrabold font-sans tracking-tight text-museum-dark leading-[0.9] uppercase">
              RENAISSANCE <br>
              <span class="font-normal font-sans tracking-wide">ART MUSEUM</span>
            </h1>
            <p class="text-museum-muted font-sans text-base leading-relaxed max-w-sm font-medium">
              The Renaissance was the Golden Age of art. Explore the pieces that made it so.
            </p>
          </div>

          <!-- Rounded Pill Button -->
          <div class="pt-2 flex items-center gap-6">
            <a href="#gallery" class="bg-museum-purple hover:bg-museum-dark text-white px-10 py-4 rounded-full text-[14px] font-bold tracking-wider transition-all duration-300 shadow-md">
              Learn More
            </a>
            
            <!-- Outlined Magenta Triangle shape adjacent to button -->
            <div class="animate-float">
              <svg class="w-8 h-8 text-museum-magenta stroke-[2.5] fill-none" viewBox="0 0 24 24">
                <polygon points="12,4 2,20 22,20" />
              </svg>
            </div>
          </div>

          <!-- Bottom-left decoration components -->
          <div class="pt-16 flex items-end gap-10">
            <!-- Blue dot indicator -->
            <div class="w-7 h-7 rounded-full bg-museum-blue animate-pulse-soft"></div>
            <!-- Dotted matrix overlay -->
            <div class="w-24 h-16 memphis-dot-grid opacity-60"></div>
          </div>

          <!-- Interactive Stat Indicator (ZEUS) -->
          <div class="pt-4 flex items-center gap-4">
            <span id="hero-label" class="font-sans text-xs tracking-[0.25em] font-extrabold uppercase text-museum-dark">ZEUS</span>
            <div class="w-24 h-[1.5px] bg-museum-dark"></div>
            <span id="hero-index" class="font-mono text-xs text-neutral-400">01 / 03</span>
          </div>
        </div>

      </div>

      <!-- RIGHT COLUMN: Elegant Classical Head Sculptures on Triangle Backdrop -->
      <div class="lg:col-span-6 relative flex items-center justify-center min-h-[500px]">
        
        <!-- Memphis Bold Floating black Cross (X) above the sculpture -->
        <div class="absolute top-[8%] left-[22%] z-30 transform hover:scale-110 transition-transform">
          <i data-lucide="x" class="w-10 h-10 stroke-[3.5] text-museum-dark"></i>
        </div>

        <!-- The Solid Bright Coral/Pink Triangle Backdrop (Precisely matches image size) -->
        <div id="backdrop-triangle" class="absolute w-[85%] max-w-[440px] aspect-[1/1] bg-museum-coral transition-all duration-700 ease-out z-0 triangle-clip"></div>

        <!-- The Main Bust Display (Greyscale image aligned beautifully) -->
        <div class="relative z-10 w-[300px] md:w-[380px] aspect-[4/5] flex items-center justify-center transition-all duration-500 ease-in-out" id="sculpture-container">
          <!-- Image Layer: Cutout transparent or white backdropped classic bust, set to grayscale -->
          <img id="main-sculpture-img" 
               src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop" 
               alt="Zeus Sculpture Bust" 
               class="w-full h-full object-contain filter grayscale select-none pointer-events-none transition-all duration-700 ease-in-out transform">
        </div>

        <!-- Black Bold Ring Circle overlapping bottom right edge of bust -->
        <div class="absolute bottom-[10%] right-[12%] w-24 h-24 rounded-full border-[12px] border-museum-dark opacity-90 pointer-events-none z-20"></div>

        <!-- Bottom Center 'Scroll Down' vertical line element -->
        <div class="absolute bottom-[-10%] left-[-10%] lg:left-[5%] flex flex-col items-center gap-3 select-none pointer-events-none">
          <span class="font-sans text-[10px] tracking-[0.4em] uppercase vertical-text text-museum-dark font-bold leading-none">SCROLL DOWN</span>
        </div>

        <!-- Bottom right geometric bar accent (several black, one red) -->
        <div class="absolute bottom-[2%] right-[5%] flex items-end gap-1.5 pointer-events-none">
          <span class="w-[2px] h-10 bg-museum-dark"></span>
          <span class="w-[2px] h-10 bg-museum-dark"></span>
          <span class="w-[2px] h-10 bg-museum-dark"></span>
          <span class="w-[2px] h-10 bg-museum-coral"></span>
          <span class="w-[2px] h-10 bg-museum-dark"></span>
        </div>

        <!-- Action Button Panel to change Hero exhibit elements -->
        <div class="absolute right-[-2%] bottom-[-10%] flex items-center gap-2 z-30">
          <button onclick="swapSculpture(-1)" class="w-11 h-11 rounded-full bg-white border border-neutral-300 flex items-center justify-center hover:bg-museum-dark hover:text-white hover:border-museum-dark transition-all duration-300" aria-label="Previous">
            <i data-lucide="chevron-left" class="w-5 h-5"></i>
          </button>
          <button onclick="swapSculpture(1)" class="w-11 h-11 rounded-full bg-white border border-neutral-300 flex items-center justify-center hover:bg-museum-dark hover:text-white hover:border-museum-dark transition-all duration-300" aria-label="Next">
            <i data-lucide="chevron-right" class="w-5 h-5"></i>
          </button>
        </div>

      </div>

    </div>
  </section>


  <!-- ================= SECTION: ABOUT CONCEPT ================= -->
  <section id="about" class="py-28 bg-[#ebebeb] relative overflow-hidden border-t border-b border-neutral-300/40">
    <div class="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
        <div class="lg:col-span-8 space-y-4">
          <span class="font-sans text-xs tracking-[0.3em] text-museum-purple uppercase block font-extrabold">// CONCEPT ARCHITECTURE</span>
          <h2 class="text-4xl md:text-[54px] font-sans font-extrabold text-museum-dark uppercase tracking-tight leading-[1.0]">
            WHERE STONE MEETS GEOMETRY
          </h2>
          <p class="text-museum-muted max-w-xl text-base leading-relaxed font-sans font-medium">
            Just as the classic Renaissance redefined Hellenistic antiquity, we bridge physical stone sculpture work with modern digital Memphis patterns. Every statue is a living playground of contrast.
          </p>
        </div>
        
        <div class="lg:col-span-4 flex justify-start lg:justify-end">
          <div class="border border-neutral-300 bg-white/50 px-6 py-4 rounded-xl flex items-center gap-4 backdrop-blur-sm">
            <div class="w-2.5 h-2.5 rounded-full bg-museum-coral animate-ping"></div>
            <span class="font-mono text-xs uppercase tracking-wider font-semibold text-museum-dark">Exhibition active online</span>
          </div>
        </div>
      </div>

      <!-- Graphic Memphis conceptual pillars -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Card 1 -->
        <div class="bg-museum-bg p-8 border border-neutral-300/80 flex flex-col justify-between hover:shadow-xl hover:border-museum-coral transition-all duration-300 group">
          <div class="space-y-6">
            <div class="w-12 h-12 bg-museum-coral/10 flex items-center justify-center text-museum-coral rounded-lg">
              <i data-lucide="circle-dot" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-sans font-extrabold text-museum-dark uppercase tracking-tight group-hover:text-museum-coral transition-colors">Memphis Accents</h3>
            <p class="text-museum-muted text-sm leading-relaxed font-medium">
              We overlay primary visual markers like outline triangles, floating rings, and dotted grids to break classic dimensions.
            </p>
          </div>
          <div class="mt-8 pt-6 border-t border-neutral-300 flex items-center justify-between font-mono text-xs uppercase tracking-wider font-bold text-neutral-400">
            <span>Core Detail</span>
            <span class="text-museum-coral">01 / Shape</span>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-museum-bg p-8 border border-neutral-300/80 flex flex-col justify-between hover:shadow-xl hover:border-museum-purple transition-all duration-300 group">
          <div class="space-y-6">
            <div class="w-12 h-12 bg-museum-purple/10 flex items-center justify-center text-museum-purple rounded-lg">
              <i data-lucide="sun" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-sans font-extrabold text-museum-dark uppercase tracking-tight group-hover:text-museum-purple transition-colors">High Contrast Contrast</h3>
            <p class="text-museum-muted text-sm leading-relaxed font-medium">
              Isolating classical white marble into stark black-and-white forms generates theatrical depth and pristine contours.
            </p>
          </div>
          <div class="mt-8 pt-6 border-t border-neutral-300 flex items-center justify-between font-mono text-xs uppercase tracking-wider font-bold text-neutral-400">
            <span>Visual Code</span>
            <span class="text-museum-purple">02 / Tone</span>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-museum-bg p-8 border border-neutral-300/80 flex flex-col justify-between hover:shadow-xl hover:border-museum-blue transition-all duration-300 group">
          <div class="space-y-6">
            <div class="w-12 h-12 bg-museum-blue/10 flex items-center justify-center text-museum-blue rounded-lg">
              <i data-lucide="maximize-2" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-sans font-extrabold text-museum-dark uppercase tracking-tight group-hover:text-museum-blue transition-colors">Spatial Precision</h3>
            <p class="text-museum-muted text-sm leading-relaxed font-medium">
              We honor minimal spacing, allowing each ancient statue to breathe as a singular masterpiece inside your layout.
            </p>
          </div>
          <div class="mt-8 pt-6 border-t border-neutral-300 flex items-center justify-between font-mono text-xs uppercase tracking-wider font-bold text-neutral-400">
            <span>Layout Philosophy</span>
            <span class="text-museum-blue">03 / Space</span>
          </div>
        </div>

      </div>

    </div>
  </section>


  <!-- ================= SECTION: INTERACTIVE SCULPTURE COLORIZER ================= -->
  <section id="interactive-sculpture" class="py-28 bg-museum-dark text-white relative overflow-hidden">
    
    <!-- Neon Accent circles in background -->
    <div class="absolute -right-24 top-1/4 w-96 h-96 rounded-full border-[1.5px] border-museum-purple/30 pointer-events-none"></div>
    <div class="absolute left-12 bottom-12 text-9xl font-mono text-white/[0.03] font-black select-none pointer-events-none">RENAISSANCE</div>

    <div class="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
      
      <div class="text-center max-w-2xl mx-auto mb-20 space-y-4">
        <span class="font-sans text-xs tracking-[0.3em] text-museum-coral uppercase block font-extrabold">// LIVING ART</span>
        <h2 class="text-4xl md:text-5xl font-sans font-extrabold uppercase">Neo-Classical Colorizer</h2>
        <p class="text-neutral-400 text-sm leading-relaxed font-sans font-medium">
          Manipulate primary colors, geometric filters, and custom backdrops to observe how modern design aesthetics completely transform classic historical art.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Controls Panel (Left Column) -->
        <div class="lg:col-span-5 space-y-8 bg-neutral-900/60 p-8 rounded-3xl border border-neutral-800 backdrop-blur-md">
          
          <!-- Sculpture Selector -->
          <div class="space-y-3">
            <h3 class="text-xs font-sans tracking-widest font-extrabold uppercase text-neutral-400">1. Select Sculpture</h3>
            <div class="grid grid-cols-3 gap-3">
              <button onclick="setCustomizerSculpture('apollo')" class="sculpture-btn border border-museum-coral bg-museum-coral/15 text-white font-mono text-xs py-3.5 rounded-xl transition-all">
                APOLLO
              </button>
              <button onclick="setCustomizerSculpture('venus')" class="sculpture-btn border border-neutral-800 text-neutral-400 font-mono text-xs py-3.5 rounded-xl transition-all hover:border-neutral-700 hover:text-white">
                VENUS
              </button>
              <button onclick="setCustomizerSculpture('marcus')" class="sculpture-btn border border-neutral-800 text-neutral-400 font-mono text-xs py-3.5 rounded-xl transition-all hover:border-neutral-700 hover:text-white">
                AURELIUS
              </button>
            </div>
          </div>

          <!-- Color overlay select -->
          <div class="space-y-3">
            <h3 class="text-xs font-sans tracking-widest font-extrabold uppercase text-neutral-400">2. Select Color Overlay</h3>
            <div class="flex items-center gap-3">
              <button onclick="setCustomizerLens('none')" class="w-10 h-10 rounded-full border border-neutral-600 bg-transparent flex items-center justify-center font-mono text-[9px] hover:border-white transition-all text-neutral-300" title="Grayscale Only">None</button>
              <button onclick="setCustomizerLens('pink')" class="w-10 h-10 rounded-full bg-museum-coral border-2 border-transparent hover:border-white transition-all shadow-md" title="Coral lens"></button>
              <button onclick="setCustomizerLens('purple')" class="w-10 h-10 rounded-full bg-museum-purple border-2 border-transparent hover:border-white transition-all shadow-md" title="Indigo lens"></button>
              <button onclick="setCustomizerLens('blue')" class="w-10 h-10 rounded-full bg-museum-blue border-2 border-transparent hover:border-white transition-all shadow-md" title="Cyan lens"></button>
            </div>
          </div>

          <!-- Geometric backdrop trigger -->
          <div class="space-y-3">
            <h3 class="text-xs font-sans tracking-widest font-extrabold uppercase text-neutral-400">3. Shape Backdrop</h3>
            <div class="grid grid-cols-3 gap-3">
              <button onclick="setCustomizerBackdrop('triangle')" class="border border-neutral-800 py-3 rounded-xl text-xs font-mono uppercase bg-neutral-900/40 hover:text-museum-coral transition-colors">Triangle</button>
              <button onclick="setCustomizerBackdrop('circle')" class="border border-neutral-800 py-3 rounded-xl text-xs font-mono uppercase bg-neutral-900/40 hover:text-museum-purple transition-colors">Circle</button>
              <button onclick="setCustomizerBackdrop('square')" class="border border-neutral-800 py-3 rounded-xl text-xs font-mono uppercase bg-neutral-900/40 hover:text-museum-blue transition-colors">Square</button>
            </div>
          </div>

          <!-- Perspectives Critique Box -->
          <div class="pt-6 border-t border-neutral-800">
            <div class="bg-black/40 p-5 rounded-2xl border border-neutral-800/80">
              <p class="text-[10px] font-sans font-bold tracking-widest text-museum-coral uppercase mb-1">Curator Perspective</p>
              <p id="curator-insight" class="text-sm italic text-neutral-300 leading-relaxed font-medium">
                "The classic marble composition of Apollo responds vibrantly when paired with hot coral tones. It evokes the warmth of Hellenistic sunlights."
              </p>
            </div>
          </div>

        </div>

        <!-- Render Canvas (Right Column) -->
        <div class="lg:col-span-7 flex flex-col items-center justify-center">
          <div class="relative w-full max-w-lg aspect-square bg-gradient-to-tr from-neutral-950 to-neutral-900 rounded-3xl overflow-hidden border border-neutral-800/80 flex items-center justify-center p-8 shadow-2xl">
            
            <!-- Memphis Dot grid accent -->
            <div class="absolute inset-0 memphis-dot-grid opacity-[0.07] pointer-events-none"></div>

            <!-- Backdrop Shape matching choice -->
            <div id="canvas-shape" class="absolute w-[65%] aspect-square bg-museum-coral/20 transform transition-all duration-700 ease-in-out z-0" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></div>

            <!-- Classical image layer with custom CSS filters -->
            <div class="relative z-10 w-[60%] h-[80%] flex items-center justify-center">
              <img id="customizer-img" 
                   src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=600&auto=format&fit=crop" 
                   alt="Customizer Sculpture" 
                   class="max-w-full max-h-full object-contain filter grayscale transition-all duration-500 ease-in-out">
              
              <!-- Transparent Blend Layer overlay -->
              <div id="lens-overlay" class="absolute inset-0 mix-blend-color opacity-0 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            <!-- Elegant metadata notes inside frame boundary -->
            <div class="absolute top-6 left-6 font-mono text-[10px] text-neutral-500 flex items-center gap-2 tracking-widest">
              <span class="w-1.5 h-1.5 rounded-full bg-museum-coral"></span>
              <span>RENDER_ENGINE: ACTIVE</span>
            </div>
            <div class="absolute bottom-6 right-6 font-mono text-[9px] text-neutral-500 tracking-wider">
              COORDS: 43.7696° N, 11.2558° E
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>


  <!-- ================= SECTION: CURATED GALLERY EXHIBITS ================= -->
  <section id="gallery" class="py-28 bg-museum-bg relative overflow-hidden">
    
    <div class="max-w-7xl mx-auto px-8 md:px-12">
      
      <!-- Section Header with minimal styling -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div class="space-y-4">
          <span class="font-sans text-xs tracking-[0.3em] text-museum-purple uppercase block font-extrabold">// ARCHIVE</span>
          <h2 class="text-4xl md:text-5xl font-sans font-extrabold text-museum-dark uppercase tracking-tight">CURATED EXHIBITS</h2>
        </div>
        
        <!-- Interactive Category Switcher Tabs -->
        <div class="flex flex-wrap gap-2">
          <button onclick="filterGallery('all')" class="gallery-tab-btn active bg-museum-dark text-white px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-semibold transition-all">
            ALL EXHBITIONS
          </button>
          <button onclick="filterGallery('sculpture')" class="gallery-tab-btn border border-neutral-300 text-neutral-600 hover:border-museum-dark hover:text-museum-dark px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-semibold transition-all">
            SCULPTURES
          </button>
          <button onclick="filterGallery('renaissance')" class="gallery-tab-btn border border-neutral-300 text-neutral-600 hover:border-museum-dark hover:text-museum-dark px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-semibold transition-all">
            CANVAS OIL
          </button>
        </div>
      </div>

      <!-- Gallery Grid containing high-contrast minimal cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-grid">
        
        <!-- Card 1 -->
        <div class="gallery-item bg-white border border-neutral-200 rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-500" data-category="sculpture">
          <div class="relative h-[340px] overflow-hidden bg-neutral-100 flex items-center justify-center">
            <div class="absolute top-4 right-4 bg-museum-coral text-white font-sans text-[9px] tracking-widest px-3 py-1 uppercase rounded-full z-10 font-bold">
              Masterpiece
            </div>
            <img src="https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=600&auto=format&fit=crop" 
                 alt="The Winged Victory" 
                 class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out">
          </div>
          <div class="p-8 space-y-4">
            <div class="flex items-center justify-between font-mono text-[11px] text-neutral-400 font-bold">
              <span>Circa 190 BC</span>
              <span class="text-museum-coral">Room 4, Hellenistic Wing</span>
            </div>
            <h3 class="text-2xl font-sans font-extrabold text-museum-dark uppercase tracking-tight group-hover:text-museum-coral transition-colors">
              The Winged Victory
            </h3>
            <p class="text-neutral-600 text-sm leading-relaxed font-sans font-medium">
              An elegant tribute to theatrical dynamic form, carved in fine Parian marble representing the Greek goddess Nike.
            </p>
            <div class="pt-4 border-t border-neutral-100">
              <button onclick="openGalleryModal('The Winged Victory', 'An elegant tribute to theatrical dynamic form, carved in fine Parian marble representing the Greek goddess Nike. Originally discovered on the island of Samothrace.', 'https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=600&auto=format&fit=crop')" class="text-[11px] uppercase font-sans tracking-widest font-extrabold text-museum-dark hover:text-museum-purple transition-colors inline-flex items-center gap-2">
                <span>EXAMINE MASTERPIECE</span>
                <i data-lucide="zoom-in" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="gallery-item bg-white border border-neutral-200 rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-500" data-category="sculpture">
          <div class="relative h-[340px] overflow-hidden bg-neutral-100 flex items-center justify-center">
            <div class="absolute top-4 right-4 bg-museum-blue text-white font-sans text-[9px] tracking-widest px-3 py-1 uppercase rounded-full z-10 font-bold">
              Most Popular
            </div>
            <img src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=600&auto=format&fit=crop" 
                 alt="The David Silhouette" 
                 class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out">
          </div>
          <div class="p-8 space-y-4">
            <div class="flex items-center justify-between font-mono text-[11px] text-neutral-400 font-bold">
              <span>Circa 1504 AD</span>
              <span class="text-museum-blue">Room 1, Tribune Hall</span>
            </div>
            <h3 class="text-2xl font-sans font-extrabold text-museum-dark uppercase tracking-tight group-hover:text-museum-purple transition-colors">
              The David Silhouette
            </h3>
            <p class="text-neutral-600 text-sm leading-relaxed font-sans font-medium">
              Michelangelo’s crowning sculpture achievement, symbolizing strength, civic liberty, and perfect anatomy.
            </p>
            <div class="pt-4 border-t border-neutral-100">
              <button onclick="openGalleryModal('The David Silhouette', 'Michelangelo’s crowning sculpture achievement, symbolizing strength, civic liberty, and perfect anatomy. Carved entirely from a single discarded block of marble.', 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=600&auto=format&fit=crop')" class="text-[11px] uppercase font-sans tracking-widest font-extrabold text-museum-dark hover:text-museum-purple transition-colors inline-flex items-center gap-2">
                <span>EXAMINE MASTERPIECE</span>
                <i data-lucide="zoom-in" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="gallery-item bg-white border border-neutral-200 rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-500" data-category="renaissance">
          <div class="relative h-[340px] overflow-hidden bg-neutral-100 flex items-center justify-center">
            <div class="absolute top-4 right-4 bg-museum-purple text-white font-sans text-[9px] tracking-widest px-3 py-1 uppercase rounded-full z-10 font-bold">
              Renaissance Oil
            </div>
            <img src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop" 
                 alt="Portrait Study" 
                 class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out">
          </div>
          <div class="p-8 space-y-4">
            <div class="flex items-center justify-between font-mono text-[11px] text-neutral-400 font-bold">
              <span>Circa 1503 AD</span>
              <span class="text-museum-purple">Room 9, Grand Gallery</span>
            </div>
            <h3 class="text-2xl font-sans font-extrabold text-museum-dark uppercase tracking-tight group-hover:text-museum-purple transition-colors">
              Mona Lisa Portrait
            </h3>
            <p class="text-neutral-600 text-sm leading-relaxed font-sans font-medium">
              A masterful study of sfumato lighting, giving the enigmatic smile a deep, lifelike, atmospheric presence.
            </p>
            <div class="pt-4 border-t border-neutral-100">
              <button onclick="openGalleryModal('Mona Lisa Portrait', 'A masterful study of sfumato lighting, giving the enigmatic smile a deep, lifelike, atmospheric presence. Painted by Leonardo da Vinci in Florence.', 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop')" class="text-[11px] uppercase font-sans tracking-widest font-extrabold text-museum-dark hover:text-museum-purple transition-colors inline-flex items-center gap-2">
                <span>EXAMINE MASTERPIECE</span>
                <i data-lucide="zoom-in" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>


  <!-- ================= SECTION: GEMINI AI ART CURATOR ================= -->
  <section id="ai-workshop" class="py-28 bg-[#ebebeb] relative overflow-hidden">
    
    <!-- Floating geometric visual accents -->
    <div class="absolute right-8 top-12 w-20 h-20 rounded-full border-4 border-museum-coral opacity-25 pointer-events-none"></div>
    <div class="absolute left-10 bottom-12 w-32 h-20 memphis-dot-grid opacity-25 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Generation Form (Left Side) -->
        <div class="lg:col-span-6 space-y-8">
          <div class="space-y-4">
            <span class="font-sans text-xs tracking-[0.3em] text-museum-purple uppercase block font-extrabold">// GEMINI ENGINE</span>
            <h2 class="text-4xl md:text-5xl font-sans font-extrabold text-museum-dark uppercase tracking-tight">AI Art Curator</h2>
            <p class="text-museum-muted text-sm leading-relaxed max-w-lg font-sans font-medium">
              Unlock the creative power of AI. Describe a classic stone theme integrated with modern neon geometry, and our model will generate it directly within a beautiful fine art museum canvas frame.
            </p>
          </div>

          <!-- Prompt UI Container -->
          <div class="bg-white p-6 md:p-8 rounded-3xl border border-neutral-300 shadow-md space-y-6">
            
            <div class="space-y-2">
              <label for="ai-prompt-input" class="block font-sans text-xs font-bold uppercase tracking-wider text-museum-dark">Enter your artistic vision</label>
              <textarea id="ai-prompt-input" 
                        class="w-full h-24 bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-museum-purple focus:border-transparent transition-all font-sans"
                        placeholder="e.g., A cybernetic sculpture of Julius Caesar with floating glowing blue triangles, greyscale marble finish..."></textarea>
            </div>

            <!-- Quick templates -->
            <div class="space-y-2">
              <span class="block font-sans text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Quick Ideas:</span>
              <div class="flex flex-wrap gap-2">
                <button onclick="setPromptPreset('A neon-illuminated statue of David wearing cyberpunk neon visor, dark background')" class="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-sans text-[10px] font-bold uppercase tracking-wide px-4 py-2 rounded-full transition-all">David Cyberpunk</button>
                <button onclick="setPromptPreset('An elegant Greek goddess marble statue floating inside magenta geometric outline circles')" class="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-sans text-[10px] font-bold uppercase tracking-wide px-4 py-2 rounded-full transition-all">Floating Goddess</button>
              </div>
            </div>

            <button id="generate-btn" onclick="generateAIArt()" class="w-full bg-museum-dark hover:bg-museum-purple text-white font-sans text-xs uppercase tracking-widest py-4.5 rounded-xl font-extrabold transition-all duration-300 flex items-center justify-center gap-2 shadow-md">
              <i data-lucide="sparkles" class="w-4 h-4"></i>
              <span>Generate Custom Artwork</span>
            </button>

          </div>
        </div>

        <!-- Generated Artwork Frame Display (Right Side) -->
        <div class="lg:col-span-6 flex flex-col items-center justify-center">
          
          <div class="relative w-full max-w-[420px] aspect-[4/5] bg-white border-[14px] border-museum-dark rounded-[32px] shadow-2xl p-6 flex flex-col justify-between overflow-hidden">
            
            <!-- Memphis outline details within the frame container -->
            <div class="absolute -top-6 -right-6 w-14 h-14 rounded-full border-[3px] border-museum-coral pointer-events-none"></div>
            <div class="absolute bottom-16 left-3 text-2xl font-bold text-museum-blue opacity-40 pointer-events-none select-none">X</div>

            <!-- Frame Inner Area -->
            <div class="relative w-full flex-1 bg-neutral-100 rounded-2xl overflow-hidden flex items-center justify-center border border-neutral-200">
              
              <!-- Loader State -->
              <div id="ai-loader" class="hidden absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center gap-4 z-20">
                <div class="w-10 h-10 rounded-full border-4 border-museum-purple border-t-transparent animate-spin"></div>
                <p class="font-mono text-[10px] uppercase text-museum-purple tracking-widest animate-pulse font-bold">GEMINI CREATING...</p>
              </div>

              <!-- Default Placeholder -->
              <div id="ai-placeholder" class="text-center p-6 space-y-3">
                <i data-lucide="image" class="w-10 h-10 mx-auto text-neutral-300"></i>
                <p class="font-sans text-[15px] text-neutral-400 font-semibold uppercase tracking-wider">Awaiting Creation</p>
              </div>

              <!-- Live Art element -->
              <img id="ai-output-img" class="hidden w-full h-full object-cover transition-all duration-500" alt="Generated AI artwork frame">

            </div>

            <!-- Fine Art Metadata Card inside Frame -->
            <div class="mt-4 pt-4 border-t border-neutral-200 flex flex-col gap-1">
              <div class="flex justify-between items-center">
                <span class="font-sans text-[13px] font-extrabold text-museum-dark tracking-wide uppercase" id="frame-title">MUSEUM SPECIMEN</span>
                <span class="font-mono text-[9px] text-neutral-400 font-bold">EDITION 1 / 1</span>
              </div>
              <p class="font-mono text-[10px] text-neutral-500 truncate" id="frame-prompt">Your visual prompt will register here...</p>
            </div>

          </div>

          <!-- Curator Critique feedback container -->
          <div id="ai-critique-container" class="hidden mt-6 w-full max-w-[420px] bg-museum-dark text-neutral-200 p-5 rounded-2xl border border-neutral-850 text-xs space-y-2">
            <span class="font-sans text-[9px] text-museum-coral uppercase tracking-widest font-extrabold">Curator Critique Feedback</span>
            <p id="ai-critique-text" class="italic leading-relaxed font-medium">...</p>
          </div>

        </div>

      </div>

    </div>
  </section>


  <!-- ================= FOOTER / BRANDING ================= -->
  <footer class="bg-museum-dark text-white pt-24 pb-12 relative overflow-hidden border-t border-neutral-900">
    <div class="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
      
      <!-- Brand column -->
      <div class="md:col-span-6 space-y-6">
        <div class="flex items-center gap-4">
          <span class="font-mono text-xs tracking-widest border border-white px-3 py-1.5 uppercase font-bold">DBRK</span>
          <span class="font-sans text-lg tracking-[0.25em] font-extrabold text-white">DOBRIK MUSEUM</span>
        </div>
        <p class="text-neutral-400 text-sm max-w-sm leading-relaxed font-sans font-medium">
          Reimagining classic Greek and Roman antiquities through elegant high-contrast designs, spacious modern structures, and historical artistic depth.
        </p>
      </div>

      <!-- Links Column -->
      <div class="md:col-span-3 space-y-4">
        <h4 class="font-sans text-xs uppercase tracking-widest text-museum-coral font-extrabold">// NAVIGATION</h4>
        <ul class="space-y-2 text-sm text-neutral-400 font-mono font-medium">
          <li><a href="#hero" class="hover:text-white transition-colors">Hero Exhibition</a></li>
          <li><a href="#interactive-sculpture" class="hover:text-white transition-colors">Neo-Classical Colorizer</a></li>
          <li><a href="#gallery" class="hover:text-white transition-colors">Curated Archives</a></li>
          <li><a href="#ai-workshop" class="hover:text-white transition-colors">AI Curator Studio</a></li>
        </ul>
      </div>

      <!-- Newsletter Column -->
      <div class="md:col-span-3 space-y-4">
        <h4 class="font-sans text-xs uppercase tracking-widest text-museum-blue font-extrabold">// NEWSLETTER</h4>
        <p class="text-xs text-neutral-400 leading-relaxed font-sans font-medium">Join our selective subscriber list to receive updates on upcoming physical art exhibitions.</p>
        <div class="flex gap-2">
          <input id="newsletter-email" type="email" placeholder="Email Address" class="bg-neutral-900 border border-neutral-800 text-sm px-4 py-3 rounded-xl flex-1 focus:outline-none focus:ring-1 focus:ring-museum-coral text-white font-sans">
          <button onclick="subscribeNewsletter()" class="bg-museum-coral hover:bg-white hover:text-museum-dark text-white px-5 py-3 rounded-xl text-xs uppercase font-sans font-bold tracking-wider transition-all">
            Join
          </button>
        </div>
      </div>

    </div>

    <!-- Bottom copyrights metadata -->
    <div class="max-w-7xl mx-auto px-8 md:px-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="font-mono text-xs text-neutral-500">
        &copy; 2026 Dobrik Museum of Art. Crafted with strict alignment principles.
      </p>
      <div class="flex items-center gap-4 text-xs font-mono text-neutral-500">
        <a href="#" class="hover:text-white">Privacy Details</a>
        <span>&middot;</span>
        <a href="#" class="hover:text-white">Terms of Entry</a>
      </div>
    </div>
  </footer>


  <!-- ================= MODALS & NOTIFICATIONS ================= -->
  
  <!-- Image Examination Modal -->
  <div id="exhibit-modal" class="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 hidden opacity-0 transition-opacity duration-300 ease-out">
    <div class="bg-white text-museum-dark rounded-3xl max-w-2xl w-full p-6 md:p-8 relative space-y-6 max-h-[90vh] overflow-y-auto">
      <button onclick="closeGalleryModal()" class="absolute top-4 right-4 p-2 hover:bg-neutral-100 rounded-full transition-colors">
        <i data-lucide="x" class="w-6 h-6"></i>
      </button>
      
      <div class="aspect-video w-full rounded-2xl overflow-hidden bg-neutral-100">
        <img id="modal-img" src="" alt="Exhibited work" class="w-full h-full object-cover">
      </div>

      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h4 id="modal-title" class="text-3xl font-sans font-extrabold text-museum-dark uppercase tracking-tight">Exhibition Artifact</h4>
          <span class="font-sans text-[10px] bg-museum-coral/15 text-museum-coral px-3 py-1 rounded-full uppercase font-bold">IN FOCUS</span>
        </div>
        <p id="modal-desc" class="text-neutral-600 text-sm leading-relaxed font-sans">...</p>
      </div>

      <div class="pt-4 border-t border-neutral-100 flex justify-end">
        <button onclick="closeGalleryModal()" class="bg-museum-dark text-white px-6 py-3 rounded-xl font-sans text-xs uppercase tracking-widest font-extrabold hover:bg-museum-purple transition-all">
          Return to Archive
        </button>
      </div>
    </div>
  </div>

  <!-- Soft toast notification -->
  <div id="notification-toast" class="fixed bottom-6 right-6 bg-museum-dark text-white px-6 py-4 rounded-xl shadow-2xl border border-neutral-800 z-50 flex items-center gap-3 translate-y-20 opacity-0 transition-all duration-300 pointer-events-none">
    <div class="w-2 h-2 rounded-full bg-museum-coral animate-ping"></div>
    <span id="toast-message" class="font-sans text-xs uppercase tracking-wider font-extrabold">Toast Update</span>
  </div>


  <!-- ================= DYNAMIC PRESENTATION SCRIPTS ================= -->
  <script>
    // Load modern SVG icons
    lucide.createIcons();

    // 1. NAVIGATION DRAWER INTERACTION
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMobileMenu() {
      mobileMenu.classList.remove('translate-x-full');
    }

    function closeMobileMenu() {
      mobileMenu.classList.add('translate-x-full');
    }

    menuBtn.addEventListener('click', openMobileMenu);
    closeMenuBtn.addEventListener('click', closeMobileMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));


    // 2. HERO SLIDESHOW SCULPTURE SWITCHER (Recreates perfect alignment)
    const heroSculptures = [
      {
        name: "ZEUS",
        index: "01 / 03",
        imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop",
        triangleRotation: "polygon(50% 0%, 0% 100%, 100% 100%)",
        backdropColor: "#f05a5a" // Coral Red
      },
      {
        name: "APOLLO",
        index: "02 / 03",
        imageUrl: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=600&auto=format&fit=crop",
        triangleRotation: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        backdropColor: "#6713ef" // Deep Purple
      },
      {
        name: "ATHENA",
        index: "03 / 03",
        imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=600&auto=format&fit=crop",
        triangleRotation: "polygon(50% 0%, 0% 100%, 100% 100%)",
        backdropColor: "#00c2ff" // Light Blue
      }
    ];

    let currentHeroIndex = 0;

    function swapSculpture(direction) {
      currentHeroIndex = (currentHeroIndex + direction + heroSculptures.length) % heroSculptures.length;
      const current = heroSculptures[currentHeroIndex];
      
      const container = document.getElementById('sculpture-container');
      const img = document.getElementById('main-sculpture-img');
      const label = document.getElementById('hero-label');
      const idx = document.getElementById('hero-index');
      const triangle = document.getElementById('backdrop-triangle');

      // Animate transition smoothly
      container.classList.add('opacity-0', 'scale-95');
      
      setTimeout(() => {
        img.src = current.imageUrl;
        label.innerText = current.name;
        idx.innerText = current.index;
        triangle.style.backgroundColor = current.backdropColor;
        
        container.classList.remove('opacity-0', 'scale-95');
      }, 250);
    }


    // 3. COLORIZER EXPERIENCE COMPONENT
    const colorizerArchive = {
      apollo: {
        img: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=600&auto=format&fit=crop",
        insights: {
          none: "The classic marble composition of Apollo displays soft, natural stone hues reflecting Hellenistic purity.",
          pink: "Apollo colored with raw pink-coral tones offers a bold, retro-futuristic Hellenistic sun atmosphere.",
          purple: "Neon purple highlights emphasize the structural deep curls of Apollo’s hair, creating striking neon contrast.",
          blue: "Cyan-blue lighting lenses cast a cold, futuristic virtual museum aura across Apollo’s features."
        }
      },
      venus: {
        img: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=600&auto=format&fit=crop",
        insights: {
          none: "Venus de Milo’s dynamic drape lines look incredibly peaceful and grounded under raw monochrome lens.",
          pink: "The vibrant magenta-pink backlight creates a warm, loving glow over Venus de Milo's elegant contours.",
          purple: "Surreal purple tones give Venus a sacred, high-fashion aura fitting for a modern digital shrine.",
          blue: "Cool blue rays paint Venus with a calm, intellectual expression typical of neoclassical geometry."
        }
      },
      marcus: {
        img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop",
        insights: {
          none: "Marcus Aurelius’ detailed beard and commanding gaze stand proud in high-contrast greyscale tones.",
          pink: "Coral overlays represent the stoic passion and raw historical presence of the philosopher emperor.",
          purple: "Stoic majesty redefined: Neon purple glow casts modern cybernetic lighting on Roman wisdom.",
          blue: "Brilliant cyan highlighting represents the cold, clear analytical perspective of Stoic philosophy."
        }
      }
    };

    let activeSculptureKey = 'apollo';
    let activeOverlayColor = 'none';

    function setCustomizerSculpture(key) {
      activeSculptureKey = key;
      
      // Toggle button highlighted styling
      document.querySelectorAll('.sculpture-btn').forEach(btn => {
        btn.className = "sculpture-btn border border-neutral-800 text-neutral-400 font-mono text-xs py-3.5 rounded-xl transition-all hover:border-neutral-700 hover:text-white";
      });
      
      const buttons = Array.from(document.querySelectorAll('.sculpture-btn'));
      const activeBtn = buttons.find(b => b.innerText.toLowerCase().includes(key === 'marcus' ? 'aurelius' : key));
      if (activeBtn) {
        activeBtn.className = "sculpture-btn border border-museum-coral bg-museum-coral/15 text-white font-mono text-xs py-3.5 rounded-xl transition-all";
      }

      // Swap image
      document.getElementById('customizer-img').src = colorizerArchive[key].img;
      updateColorizerFeedback();
    }

    function setCustomizerLens(color) {
      activeOverlayColor = color;
      const lens = document.getElementById('lens-overlay');
      
      // Standardize filter styling
      lens.className = "absolute inset-0 mix-blend-color transition-opacity duration-300 pointer-events-none";
      
      if (color === 'none') {
        lens.classList.add('opacity-0');
      } else {
        lens.classList.remove('opacity-0');
        lens.classList.add('opacity-70');
        
        if (color === 'pink') lens.classList.add('bg-museum-coral');
        if (color === 'purple') lens.classList.add('bg-museum-purple');
        if (color === 'blue') lens.classList.add('bg-museum-blue');
      }

      updateColorizerFeedback();
    }

    function setCustomizerBackdrop(shape) {
      const shapeBg = document.getElementById('canvas-shape');
      
      if (shape === 'triangle') {
        shapeBg.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        shapeBg.style.borderRadius = '0';
        shapeBg.className = "absolute w-[65%] aspect-square bg-museum-coral/20 transform transition-all duration-700 ease-in-out z-0";
      } else if (shape === 'circle') {
        shapeBg.style.clipPath = 'none';
        shapeBg.style.borderRadius = '50%';
        shapeBg.className = "absolute w-[65%] aspect-square bg-museum-purple/20 transform transition-all duration-700 ease-in-out z-0";
      } else if (shape === 'square') {
        shapeBg.style.clipPath = 'none';
        shapeBg.style.borderRadius = '24px';
        shapeBg.className = "absolute w-[65%] aspect-square bg-museum-blue/20 transform transition-all duration-700 ease-in-out z-0";
      }
    }

    function updateColorizerFeedback() {
      const insightText = colorizerArchive[activeSculptureKey].insights[activeOverlayColor];
      document.getElementById('curator-insight').innerText = `"${insightText}"`;
    }


    // 4. ARCHIVE FILTERING & MODAL INTERACTION
    function filterGallery(category) {
      document.querySelectorAll('.gallery-tab-btn').forEach(btn => {
        btn.className = "gallery-tab-btn border border-neutral-300 text-neutral-600 hover:border-museum-dark hover:text-museum-dark px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-semibold transition-all";
      });

      const clicked = event.currentTarget;
      clicked.className = "gallery-tab-btn active bg-museum-dark text-white px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-semibold transition-all";

      document.querySelectorAll('.gallery-item').forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }

    const modal = document.getElementById('exhibit-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');

    function openGalleryModal(title, desc, imgSrc) {
      modalImg.src = imgSrc;
      modalTitle.innerText = title;
      modalDesc.innerText = desc;
      
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.remove('opacity-0');
      }, 50);
    }

    function closeGalleryModal() {
      modal.classList.add('opacity-0');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 300);
    }


    // 5. TOAST NOTIFICATIONS
    const toast = document.getElementById('notification-toast');
    const toastText = document.getElementById('toast-message');

    function triggerToast(message) {
      toastText.innerText = message;
      toast.classList.remove('translate-y-20', 'opacity-0');
      
      setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
      }, 4000);
    }

    function subscribeNewsletter() {
      const email = document.getElementById('newsletter-email').value.trim();
      if (email) {
        triggerToast("Successfully registered for curation logs!");
        document.getElementById('newsletter-email').value = "";
      } else {
        triggerToast("Please enter a valid email address.");
      }
    }


    // 6. GEMINI CREATIVE AI COMPONENT
    function setPromptPreset(text) {
      document.getElementById('ai-prompt-input').value = text;
    }

    const apiKey = ""; // Runtime config automatically resolves this key

    async function generateAIArt() {
      const promptField = document.getElementById('ai-prompt-input');
      const userPrompt = promptField.value.trim();

      if (!userPrompt) {
        triggerToast("Please select or write a prompt first!");
        return;
      }

      // Toggle loading indicators
      const loader = document.getElementById('ai-loader');
      const placeholder = document.getElementById('ai-placeholder');
      const outputImg = document.getElementById('ai-output-img');
      const critiqueBox = document.getElementById('ai-critique-container');

      loader.classList.remove('hidden');
      placeholder.classList.add('hidden');
      outputImg.classList.add('hidden');
      critiqueBox.classList.add('hidden');

      // Model predictions endpoint using Imagen-4.0
      const serviceUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`;
      const payload = {
        instances: [{ prompt: `${userPrompt}, high-contrast greyscale classical sculpture, neon geometric shapes, elegant art frame, museum setting` }],
        parameters: { sampleCount: 1 }
      };

      let base64ImageString = null;
      let attempts = 5;
      let delayMs = 1000;

      while (attempts > 0) {
        try {
          const response = await fetch(serviceUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          if (!response.ok) throw new Error("API call issue");

          const data = await response.json();
          base64ImageString = data.predictions?.[0]?.bytesBase64Encoded;
          if (base64ImageString) break;
        } catch (e) {
          attempts--;
          await new Promise(res => setTimeout(res, delayMs));
          delayMs *= 2;
        }
      }

      if (base64ImageString) {
        // Success image render
        outputImg.src = `data:image/png;base64,${base64ImageString}`;
        outputImg.classList.remove('hidden');

        document.getElementById('frame-title').innerText = "AI EXHIBIT ACQUISITION";
        document.getElementById('frame-prompt').innerText = userPrompt;

        // Perform text critique response from Gemini 2.5
        await generateCuratorCritique(userPrompt);
      } else {
        // Fallback simulation mode
        const backupMasterpieces = [
          "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop"
        ];
        const selectedBackup = backupMasterpieces[Math.floor(Math.random() * backupMasterpieces.length)];
        
        outputImg.src = selectedBackup;
        outputImg.classList.remove('hidden');
        document.getElementById('frame-title').innerText = "Simulated Masterwork";
        document.getElementById('frame-prompt').innerText = `${userPrompt} (Simulation Mode)`;
        
        // Static curation review
        document.getElementById('ai-critique-text').innerText = `Your prompt concept "${userPrompt}" successfully synthesizes classical Greco-Roman forms with modern high-contrast geometric frameworks. Highly commendable.`;
        critiqueBox.classList.remove('hidden');
        triggerToast("Artwork simulation activated successfully!");
      }

      loader.classList.add('hidden');
    }

    async function generateCuratorCritique(promptText) {
      const chatUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
      const curatorInstruction = "You are an eccentric, high-fashion Italian art museum curator. Write a brilliant 2-sentence feedback/critique analyzing the artistic combination of the classical topic and modern geometry in this prompt.";
      
      const payload = {
        contents: [{ parts: [{ text: `Evaluate this artistic prompt concept: ${promptText}` }] }],
        systemInstruction: { parts: [{ text: curatorInstruction }] }
      };

      try {
        const response = await fetch(chatUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        
        if (response.ok) {
          const resJson = await response.json();
          const critiqueResultText = resJson.candidates?.[0]?.content?.parts?.[0]?.text || "";
          
          if (critiqueResultText) {
            document.getElementById('ai-critique-text').innerText = critiqueResultText.trim();
            document.getElementById('ai-critique-container').classList.remove('hidden');
          }
        }
      } catch (e) {
        // Fallback silently if feedback endpoint encounters a network error
      }
    }

  </script>
</body>
</html>
4
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ARCTIC FREEDOM — Whales in Teriberka</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Space Grotesk (Tech/Premium Sans) & Syne (High-impact display) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        /* Custom Font Configurations & Typography matching the premium design system */
        body {
            font-family: 'Space Grotesk', sans-serif;
            background-color: #0d0f12; /* Deep Slate Black */
            color: #f1f5f9;
            overflow-x: hidden;
        }

        .font-display {
            font-family: 'Syne', sans-serif;
        }

        /* Custom Scrollbar to match the icy aesthetic */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #0d0f12;
        }
        ::-webkit-scrollbar-thumb {
            background: #1e293b;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #38bdf8;
        }

        /* Text Mask Effect inspired by "WHALE" container in inspiration image */
        .text-mask-whale {
            background-image: url('https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1400&q=80');
            background-size: cover;
            background-position: center 30%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: oceanic-drift 20s ease-in-out infinite alternate;
        }

        @keyframes oceanic-drift {
            0% { background-position: center 30%; }
            100% { background-position: center 60%; }
        }

        /* Subtle Aurora Glow background layer */
        .aurora-glow {
            background: radial-gradient(circle at 50% -20%, rgba(14, 116, 144, 0.25) 0%, rgba(15, 23, 42, 0) 60%),
                        radial-gradient(circle at 10% 30%, rgba(56, 189, 248, 0.08) 0%, rgba(15, 23, 42, 0) 50%);
        }

        /* Custom border accent with glass reflection */
        .border-technical {
            border-color: rgba(255, 255, 255, 0.08);
        }

        /* Grid lines to simulate presentation template structure */
        .bg-grid-tech {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.01) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 1px, transparent 1px);
        }
    </style>
</head>
<body class="bg-grid-tech aurora-glow relative selection:bg-sky-500 selection:text-white">

    <!-- Subtle interactive coordinate tracker that floats on custom position -->
    <div id="coord-tracker" class="hidden md:flex fixed bottom-8 left-8 z-50 text-[10px] tracking-[0.2em] uppercase font-mono text-slate-500 bg-slate-950/80 backdrop-blur-md py-1 px-3 border border-white/5 rounded">
        CURSOR LOC: <span id="lat-val" class="text-sky-400">69.1643° N</span>, <span id="lng-val" class="text-sky-400">35.1436° E</span>
    </div>

    <!-- Presentation Header info strip -->
    <div class="w-full border-b border-white/5 py-2 px-6 flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-slate-500 font-medium z-50 relative">
        <div class="flex items-center gap-2">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>n_melchukova</span>
        </div>
        <div class="hidden sm:block">TERIBERKA, MURMANSK REGION</div>
        <div class="flex items-center gap-4">
            <span>ПРЕЗЕНТАЦИЯ</span>
            <span class="text-white/40">(02)</span>
        </div>
    </div>

    <!-- MAIN NAVBAR -->
    <header class="sticky top-0 z-40 bg-[#0d0f12]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <!-- Brand Logo with custom star indicator -->
            <a href="#" class="flex items-center gap-3 group">
                <span class="text-xs font-semibold tracking-[0.4em] text-white group-hover:text-sky-400 transition-colors">ARCTIC FREEDOM</span>
                <span class="text-sky-400/80 text-xs animate-pulse">✦ + ✦</span>
            </a>

            <!-- Nav Links -->
            <nav class="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-slate-300">
                <a href="#about" class="hover:text-white transition-colors">Philosophy</a>
                <a href="#radar" class="hover:text-white transition-colors">Live Radar</a>
                <a href="#expeditions" class="hover:text-white transition-colors">Expeditions</a>
                <a href="#dashboard" class="hover:text-white transition-colors">Arctic Dashboard</a>
            </nav>

            <!-- Actions -->
            <div class="flex items-center gap-4">
                <!-- Soundscape Engine Switch -->
                <button onclick="toggleAudio()" id="audio-btn" class="flex items-center gap-2 border border-white/10 px-3 py-1.5 rounded-full text-[10px] tracking-widest uppercase hover:bg-white/5 transition-all text-slate-400">
                    <i data-lucide="music" class="w-3.5 h-3.5 text-sky-400 animate-spin" style="animation-duration: 6s;"></i>
                    <span id="audio-text">Soundscape Off</span>
                </button>
                <a href="#reserve" class="bg-white hover:bg-sky-400 hover:text-slate-950 transition-all text-slate-950 px-4 py-2 text-xs tracking-widest font-semibold uppercase rounded-sm">
                    Book Journey
                </a>
            </div>
        </div>
    </header>

    <!-- HERO SECTION (Inspired directly by the First Slide) -->
    <section class="relative min-h-[90vh] flex flex-col justify-center items-center py-12 px-6 overflow-hidden">
        <!-- Floating tiny decorative elements -->
        <div class="absolute top-12 left-12 text-[10px] tracking-[0.2em] text-slate-500 uppercase">
            ARCTIC FREEDOM<br>
            <span class="text-white/40">EXPLORATION INITIATIVE</span>
        </div>
        <div class="absolute top-12 right-12 text-[10px] tracking-[0.2em] text-slate-400 uppercase text-right">
            ✦ + ✦<br>
            <span class="text-sky-500 font-mono">69° 09' 00" N</span>
        </div>

        <div class="max-w-6xl w-full mx-auto relative z-10 text-center flex flex-col justify-center items-center">
            <!-- Dynamic Micro Title -->
            <div class="mb-4 text-xs sm:text-sm tracking-[0.4em] uppercase text-slate-300 font-medium animate-fade-in">
                SEE WHALES IN TERIBERKA
            </div>

            <!-- Massive Text Mask Element (The showpiece of slide 1) -->
            <div class="w-full relative select-none">
                <h1 class="font-display text-[15vw] sm:text-[14vw] md:text-[13vw] font-black leading-[0.85] tracking-tighter text-mask-whale uppercase py-2">
                    WHALE
                </h1>
                <!-- Subtext hovering elegantly across the letters -->
                <div class="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <div class="w-full h-1/3 bg-gradient-to-t from-transparent via-[#0d0f12]/50 to-transparent flex items-center justify-center">
                        <span class="text-[9px] md:text-xs tracking-[0.6em] text-sky-300 uppercase font-mono px-4 text-center">
                            BREATHING OCEANS & DEEP WATERS OF THE NORTH
                        </span>
                    </div>
                </div>
            </div>

            <!-- Coordinate / Technical details under the main header -->
            <div class="mt-8 flex flex-col sm:flex-row gap-8 sm:gap-16 items-center text-left text-xs tracking-widest text-slate-400 max-w-2xl mx-auto border-t border-white/5 pt-8 w-full">
                <div>
                    <span class="text-white/40 block mb-1">COORDINATES</span>
                    <span class="text-white font-mono">69.1643° N, 35.1436° E</span>
                </div>
                <div>
                    <span class="text-white/40 block mb-1">BEST RUN PERIOD</span>
                    <span class="text-white">MAY — SEPTEMBER</span>
                </div>
                <div>
                    <span class="text-white/40 block mb-1">PROBABILITY</span>
                    <span class="text-sky-400 font-semibold">94.2% ACTIVE RADAR</span>
                </div>
            </div>
        </div>

        <!-- Scrolling indicator -->
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span class="text-[9px] tracking-[0.3em] uppercase text-slate-500">SCROLL DOWN</span>
            <div class="w-[1px] h-12 bg-gradient-to-b from-sky-500 to-transparent"></div>
        </div>
    </section>

    <!-- SECTION 2: THE PHILOSOPHY (Inspired by Slide 2) -->
    <section id="about" class="py-24 border-t border-white/5 relative bg-[#0f1216]">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Info Block -->
            <div class="lg:col-span-5 space-y-6">
                <div class="text-[10px] tracking-[0.3em] uppercase text-sky-400">ARCTIC FREEDOM // ESSENCE</div>
                <h2 class="font-display text-4xl sm:text-5xl font-extrabold leading-tight text-white tracking-tight uppercase">
                    WE ARE <br>
                    <span class="text-sky-300">IN LOVE</span>
                </h2>
                <p class="text-slate-400 text-sm tracking-wide leading-relaxed">
                    With Murmansk nature and northern tourism. Our purpose is to build bridges between human exploration and the untouched, cold majesty of the Barents Sea.
                </p>
                <div class="pt-4 border-t border-white/5 flex gap-8">
                    <div>
                        <span class="text-2xl font-bold font-display text-white">450+</span>
                        <p class="text-[9px] tracking-widest text-slate-500 uppercase">SIGHTINGS LOGGED</p>
                    </div>
                    <div>
                        <span class="text-2xl font-bold font-display text-sky-400">100%</span>
                        <p class="text-[9px] tracking-widest text-slate-500 uppercase">SAFETY RATIO</p>
                    </div>
                </div>
            </div>

            <!-- Right Splitted Scenic Window -->
            <div class="lg:col-span-7 relative group rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                <!-- Glowing corner details -->
                <div class="absolute top-2 left-2 text-[8px] tracking-[0.2em] font-mono text-white/50 z-20">VIEW // RECON-1</div>
                <div class="absolute bottom-2 right-2 text-[8px] tracking-[0.2em] font-mono text-white/50 z-20">TERIBERKA COAST LINE</div>
                <div class="absolute top-2 right-2 text-sky-400 text-[10px] z-20">✦ + ✦</div>

                <!-- Main atmospheric background image representing raw Murmansk Nature -->
                <img src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80" 
                     alt="Murmansk coast" 
                     class="w-full h-[350px] object-cover filter saturate-75 brightness-75 group-hover:scale-105 transition-transform duration-700">
                
                <!-- Tint Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#0f1216] via-transparent to-transparent"></div>

                <!-- Overlay Card Details -->
                <div class="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4 z-10">
                    <div>
                        <span class="text-white font-mono text-xs uppercase block tracking-wider">MURMANSK OUTPOST</span>
                        <span class="text-slate-400 text-[10px] tracking-widest uppercase">TERIBERKA BAY RADIAL ZONE</span>
                    </div>
                    <button class="text-xs tracking-widest uppercase text-sky-300 hover:text-white flex items-center gap-2 border border-sky-400/20 px-3 py-1.5 rounded-sm bg-sky-950/40 backdrop-blur-sm hover:bg-sky-500 hover:text-slate-950 transition-all">
                        Discover Expedition Routes <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                    </button>
                </div>
            </div>

        </div>
    </section>

    <!-- INTERACTIVE RADAR SECTION (High Visual Density Feature) -->
    <section id="radar" class="py-24 relative overflow-hidden bg-[#0d0f12] border-t border-b border-white/5">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col lg:flex-row gap-12 items-center">
                
                <!-- Interactive Sonar Radar Canvas Component -->
                <div class="w-full lg:w-1/2 flex justify-center items-center relative">
                    <!-- Background aesthetic grid -->
                    <div class="absolute inset-0 bg-radial-gradient from-sky-950/20 to-transparent pointer-events-none"></div>
                    <div class="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-sky-500/20 flex items-center justify-center bg-[#0f1115]">
                        
                        <!-- Internal scanning sweep line (handled by JS & Canvas) -->
                        <canvas id="radar-canvas" width="420" height="420" class="absolute inset-0 z-10 w-full h-full"></canvas>

                        <!-- Radial markers -->
                        <div class="absolute w-[80%] h-[80%] rounded-full border border-dashed border-sky-500/10 pointer-events-none"></div>
                        <div class="absolute w-[60%] h-[60%] rounded-full border border-sky-500/15 pointer-events-none"></div>
                        <div class="absolute w-[40%] h-[40%] rounded-full border border-dashed border-sky-500/10 pointer-events-none"></div>
                        <div class="absolute w-[20%] h-[20%] rounded-full border border-sky-500/20 pointer-events-none"></div>

                        <!-- Center outpost node -->
                        <div class="relative z-20 w-3 h-3 bg-sky-400 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.8)]">
                            <span class="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animate-ping"></span>
                        </div>

                        <!-- Mini indicator labels -->
                        <div class="absolute top-4 left-1/2 -translate-x-1/2 text-[8px] tracking-widest text-slate-500">000° NORTH</div>
                        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] tracking-widest text-slate-500">180° SOUTH</div>
                    </div>
                </div>

                <!-- Radar Control Panel details -->
                <div class="w-full lg:w-1/2 space-y-6">
                    <div class="text-[10px] tracking-[0.3em] uppercase text-sky-400">LIVE SONAR FEED</div>
                    <h3 class="font-display text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                        REAL-TIME <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">POD TRACKER</span>
                    </h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        Our ocean acoustic system monitors active Orca and Blue Whale pods navigating through the deep continental shelf edges off Teriberka. Tap/Hover the radar map to inspect detected frequencies.
                    </p>

                    <!-- Realtime Sonar Logs -->
                    <div class="space-y-3 bg-[#0f1115] border border-white/5 p-4 rounded-sm font-mono text-xs">
                        <div class="flex justify-between items-center text-[10px] text-slate-500 uppercase border-b border-white/5 pb-2">
                            <span>IDENTIFIER</span>
                            <span>BEARING & RANGE</span>
                            <span>STATUS</span>
                        </div>
                        <div class="flex justify-between items-center text-slate-300">
                            <span class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                                ORCA-P4
                            </span>
                            <span>28.4 km / North-East</span>
                            <span class="text-emerald-400">STABLE FEED</span>
                        </div>
                        <div class="flex justify-between items-center text-slate-300">
                            <span class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                                BLUEW-09
                            </span>
                            <span>12.1 km / North</span>
                            <span class="text-emerald-400">SURFACING NOW</span>
                        </div>
                        <div class="flex justify-between items-center text-slate-500">
                            <span class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                                FEED-SYS-0
                            </span>
                            <span>-- / --</span>
                            <span>SEARCHING SIGNAL</span>
                        </div>
                    </div>

                    <div class="flex gap-4">
                        <button onclick="pingSonar()" class="flex-1 bg-sky-950/60 border border-sky-400/30 text-sky-400 hover:bg-sky-400 hover:text-slate-950 px-4 py-2.5 rounded-sm text-xs tracking-widest font-semibold uppercase transition-all flex items-center justify-center gap-2">
                            <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> Ping Local Sector
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION 3: EXPEDITION HORIZON (Inspired by Slide 3) -->
    <section id="expeditions" class="py-24 relative bg-[#0f1216]">
        <div class="max-w-7xl mx-auto px-6">
            
            <!-- Header layout mimicking slide styling with minimal star badges -->
            <div class="flex justify-between items-end border-b border-white/5 pb-8 mb-12">
                <div>
                    <span class="text-[10px] tracking-[0.3em] uppercase text-sky-400">EXPEDITION PLANS</span>
                    <h2 class="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-1">
                        EXPAND YOUR <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white">HORIZONS</span>
                    </h2>
                </div>
                <div class="text-right hidden sm:block text-xs tracking-widest text-slate-500 uppercase">
                    ✦ + ✦<br>
                    <span>SELECT EXCURSION TIER</span>
                </div>
            </div>

            <!-- Expedition Interactive Horizon Customizer Widget -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                <!-- Package Card 1 -->
                <div class="bg-[#0c0e11] border border-white/10 p-6 rounded-sm relative group hover:border-sky-500/50 transition-all flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <span class="font-mono text-xs text-sky-400 tracking-widest">[ CODE: ARC-WHALE-01 ]</span>
                            <span class="text-[10px] bg-sky-950 text-sky-300 px-2 py-0.5 rounded-sm tracking-widest uppercase">CLASSIC</span>
                        </div>
                        <h3 class="text-xl font-bold uppercase tracking-wide text-white mb-2">WHALE SEEKER</h3>
                        <p class="text-slate-400 text-xs tracking-wide leading-relaxed mb-6">
                            High-speed inflatable zodiac exploration into deep oceanic trenches. Optimized for close-encounter photography of migrating Humpbacks and Orcas.
                        </p>
                    </div>
                    <div class="space-y-4">
                        <div class="border-t border-white/5 pt-4 flex justify-between items-center text-xs">
                            <span class="text-slate-500">EXPEDITION TERM</span>
                            <span class="text-white font-mono">1 Day (~6h)</span>
                        </div>
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-500">DIFFICULTY RATING</span>
                            <span class="text-amber-400">MODERATE</span>
                        </div>
                        <a href="#reserve" onclick="selectExpedition('Whale Seeker Classic')" class="w-full inline-block text-center bg-white/5 text-white hover:bg-white hover:text-slate-950 transition-all py-2 text-xs uppercase tracking-widest font-semibold rounded-sm">
                            Select Route
                        </a>
                    </div>
                </div>

                <!-- Package Card 2 (Featured / High-contrast layout) -->
                <div class="bg-gradient-to-b from-sky-950/20 to-[#0c0e11] border-2 border-sky-400/40 p-6 rounded-sm relative group hover:border-sky-400 transition-all flex flex-col justify-between shadow-lg shadow-sky-500/5">
                    <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-400 text-slate-950 px-3 py-0.5 text-[8px] font-black tracking-widest uppercase rounded-sm">
                        MOST POPULAR
                    </div>
                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <span class="font-mono text-xs text-sky-400 tracking-widest">[ CODE: ARC-EXP-02 ]</span>
                            <span class="text-[10px] bg-sky-900 text-sky-200 px-2 py-0.5 rounded-sm tracking-widest uppercase">DEEP COLD</span>
                        </div>
                        <h3 class="text-xl font-bold uppercase tracking-wide text-white mb-2">POLAR FREEDOM</h3>
                        <p class="text-slate-300 text-xs tracking-wide leading-relaxed mb-6">
                            Immersive 3-day exploration with heated deep-sea vessels, expert marine biologists, coastal photography tours, and premium shore lodging in traditional red cabins.
                        </p>
                    </div>
                    <div class="space-y-4">
                        <div class="border-t border-white/5 pt-4 flex justify-between items-center text-xs">
                            <span class="text-slate-400">EXPEDITION TERM</span>
                            <span class="text-white font-mono">3 Days / 2 Nights</span>
                        </div>
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">DIFFICULTY RATING</span>
                            <span class="text-emerald-400">EASY/COMFORT</span>
                        </div>
                        <a href="#reserve" onclick="selectExpedition('Polar Freedom Deluxe')" class="w-full inline-block text-center bg-sky-400 text-slate-950 hover:bg-sky-300 transition-all py-2 text-xs uppercase tracking-widest font-semibold rounded-sm">
                            Select Route
                        </a>
                    </div>
                </div>

                <!-- Package Card 3 -->
                <div class="bg-[#0c0e11] border border-white/10 p-6 rounded-sm relative group hover:border-sky-500/50 transition-all flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <span class="font-mono text-xs text-sky-400 tracking-widest">[ CODE: ARC-AURORA-03 ]</span>
                            <span class="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded-sm tracking-widest uppercase">PRO EXPLORE</span>
                        </div>
                        <h3 class="text-xl font-bold uppercase tracking-wide text-white mb-2">HORIZON HUNTER</h3>
                        <p class="text-slate-400 text-xs tracking-wide leading-relaxed mb-6">
                            A custom combined high-latitude ocean crossing and overnight Aurora Borealis hunt. Recommended for veteran explorers and wildlife photographers.
                        </p>
                    </div>
                    <div class="space-y-4">
                        <div class="border-t border-white/5 pt-4 flex justify-between items-center text-xs">
                            <span class="text-slate-500">EXPEDITION TERM</span>
                            <span class="text-white font-mono">5 Days / 4 Nights</span>
                        </div>
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-500">DIFFICULTY RATING</span>
                            <span class="text-rose-400">DEMANDING</span>
                        </div>
                        <a href="#reserve" onclick="selectExpedition('Horizon Hunter Ultimate')" class="w-full inline-block text-center bg-white/5 text-white hover:bg-white hover:text-slate-950 transition-all py-2 text-xs uppercase tracking-widest font-semibold rounded-sm">
                            Select Route
                        </a>
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- SECTION 4: REAL-TIME ARCTIC METRIC DASHBOARD (Aesthetic Density Feature) -->
    <section id="dashboard" class="py-24 border-t border-b border-white/5 relative bg-[#0b0c0f]">
        <!-- Technical ambient background decoration -->
        <div class="absolute inset-0 pointer-events-none opacity-15">
            <div class="absolute top-10 left-10 w-96 h-96 rounded-full bg-cyan-500 filter blur-3xl"></div>
        </div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-[10px] tracking-[0.3em] uppercase text-sky-400">ENVIRONMENTAL CONTROL</span>
                <h2 class="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight mt-1">
                    TERIBERKA METRICS ENGINE
                </h2>
                <p class="text-slate-400 text-xs tracking-wider uppercase mt-2">
                    Live telemetry feed from northern scientific sensory node
                </p>
            </div>

            <!-- Dashboard Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <!-- Metric 1 -->
                <div class="bg-slate-950/60 border border-white/5 p-6 rounded-sm relative">
                    <div class="text-slate-500 text-[10px] tracking-widest uppercase mb-4">TEMPERATURE // OCEAN</div>
                    <div class="flex items-baseline justify-between">
                        <span id="temp-val" class="font-display text-4xl font-extrabold text-white">+4.2°C</span>
                        <span class="text-emerald-400 text-xs flex items-center gap-1 font-mono">
                            <i data-lucide="trending-up" class="w-3 h-3"></i> STABLE
                        </span>
                    </div>
                    <div class="mt-4 text-[9px] text-slate-400 font-mono tracking-wide">
                        SENSORY OUTPOST: T-09 CAPE
                    </div>
                </div>

                <!-- Metric 2 -->
                <div class="bg-slate-950/60 border border-white/5 p-6 rounded-sm relative">
                    <div class="text-slate-500 text-[10px] tracking-widest uppercase mb-4">KP-INDEX // AURORA</div>
                    <div class="flex items-baseline justify-between">
                        <span id="kp-val" class="font-display text-4xl font-extrabold text-sky-400">4.8 KP</span>
                        <span class="text-sky-300 text-xs flex items-center gap-1 font-mono">
                            HIGH VISIBILITY
                        </span>
                    </div>
                    <div class="mt-4 text-[9px] text-slate-400 font-mono tracking-wide">
                        SOLAR WIND ACTIVITY DETECTOR
                    </div>
                </div>

                <!-- Metric 3 -->
                <div class="bg-slate-950/60 border border-white/5 p-6 rounded-sm relative">
                    <div class="text-slate-500 text-[10px] tracking-widest uppercase mb-4">WAVE RANGE // SEA STATE</div>
                    <div class="flex items-baseline justify-between">
                        <span id="wave-val" class="font-display text-4xl font-extrabold text-white">1.4 M</span>
                        <span class="text-slate-400 text-xs font-mono">NEUTRAL</span>
                    </div>
                    <div class="mt-4 text-[9px] text-slate-400 font-mono tracking-wide">
                        SURROUNDING BARENTS COAST
                    </div>
                </div>

                <!-- Metric 4 -->
                <div class="bg-slate-950/60 border border-white/5 p-6 rounded-sm relative">
                    <div class="text-slate-500 text-[10px] tracking-widest uppercase mb-4">LOCAL STATION TIME</div>
                    <div class="flex items-baseline justify-between">
                        <span id="time-val" class="font-display text-4xl font-extrabold text-slate-300">16:36:25</span>
                        <span class="text-sky-400 text-xs font-mono">UTC+3</span>
                    </div>
                    <div class="mt-4 text-[9px] text-slate-400 font-mono tracking-wide">
                        MURMANSK REGIONAL HUB INDEX
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- EXPEDITION BOOKING & RESERVATION CTAs -->
    <section id="reserve" class="py-24 relative overflow-hidden bg-[#0a0c0e]">
        <div class="max-w-4xl mx-auto px-6 relative z-10">
            <div class="bg-[#0f1216] border border-white/10 p-8 sm:p-12 rounded-sm shadow-2xl">
                
                <div class="text-center max-w-lg mx-auto mb-10">
                    <span class="text-[10px] tracking-[0.3em] uppercase text-sky-400">RESERVATION SYSTEM</span>
                    <h2 class="font-display text-3xl font-black uppercase text-white tracking-tight mt-1">
                        PLAN YOUR EXCURSION
                    </h2>
                    <p class="text-slate-400 text-xs tracking-wide leading-relaxed mt-2">
                        Complete our brief regional clearance form. Arctic Freedom representatives will establish immediate radio/encrypted communications within 3 hours.
                    </p>
                </div>

                <!-- Interactive Booking Form -->
                <form id="booking-form" onsubmit="handleBookingSubmit(event)" class="space-y-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-[9px] tracking-widest uppercase text-slate-400 mb-2">FULL NAME / NOMINATIVE</label>
                            <input type="text" required placeholder="Alex Mercer" class="w-full bg-[#14181f] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors rounded-sm placeholder-slate-600">
                        </div>
                        <div>
                            <label class="block text-[9px] tracking-widest uppercase text-slate-400 mb-2">E-MAIL / ADDRESS</label>
                            <input type="email" required placeholder="explorer@arctic.com" class="w-full bg-[#14181f] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors rounded-sm placeholder-slate-600">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-[9px] tracking-widest uppercase text-slate-400 mb-2">SELECT EXPEDITION ROUTE</label>
                            <select id="exped-select" class="w-full bg-[#14181f] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors rounded-sm">
                                <option value="Whale Seeker Classic">Whale Seeker Classic (1 Day)</option>
                                <option value="Polar Freedom Deluxe" selected>Polar Freedom Deluxe (3 Days)</option>
                                <option value="Horizon Hunter Ultimate">Horizon Hunter Ultimate (5 Days)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[9px] tracking-widest uppercase text-slate-400 mb-2">PREFERRED MONTH</label>
                            <select class="w-full bg-[#14181f] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors rounded-sm">
                                <option>May 2026</option>
                                <option selected>June 2026</option>
                                <option>July 2026</option>
                                <option>August 2026</option>
                                <option>September 2026</option>
                            </select>
                        </div>
                    </div>

                    <div class="pt-4">
                        <button type="submit" class="w-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold py-3 px-6 text-xs uppercase tracking-[0.2em] rounded-sm transition-colors flex items-center justify-center gap-2">
                            Secure Spot and Clear Logistics <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </button>
                    </div>
                </form>

                <!-- Custom feedback state container -->
                <div id="form-feedback" class="hidden mt-6 bg-emerald-950/50 border border-emerald-500/30 p-4 rounded-sm text-emerald-300 text-xs text-center font-mono">
                    <span class="block font-semibold mb-1">TRANSMISSION ESTABLISHED</span>
                    We have registered your details for the selected Expedition Route. A logistics consultant will ping you shortly.
                </div>

            </div>
        </div>
    </section>

    <!-- FOOTER (Matching Slide 3 layout) -->
    <footer class="bg-[#090b0d] border-t border-white/5 py-12 px-6">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div class="flex flex-col items-center md:items-start">
                <div class="flex items-center gap-3">
                    <span class="text-xs font-bold tracking-[0.4em] text-white">ARCTIC FREEDOM</span>
                    <span class="text-sky-400 text-xs">✦ + ✦</span>
                </div>
                <p class="text-[10px] text-slate-500 uppercase tracking-widest mt-2">
                    NORTHERN TOUR EXPEDITIONS & WILDLIFE SAFARI
                </p>
            </div>

            <!-- Bold high-impact phone number aligned directly with Slide 3 "CALL US" aesthetics -->
            <div class="text-center md:text-right">
                <span class="text-[10px] text-sky-400 tracking-[0.3em] uppercase block mb-1">CALL US DIRECTLY</span>
                <a href="tel:79152555517" class="text-xl sm:text-2xl font-display font-extrabold text-white tracking-widest hover:text-sky-300 transition-colors block">
                    7 915 255 55 17
                </a>
            </div>

        </div>

        <div class="max-w-7xl mx-auto border-t border-white/5 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 tracking-widest uppercase">
            <div>© 2026 ARCTIC FREEDOM. All Rights Reserved.</div>
            <div class="flex gap-6 mt-4 sm:mt-0">
                <a href="#" class="hover:text-white transition-colors">Safety Protocol</a>
                <a href="#" class="hover:text-white transition-colors">Legal Coordinates</a>
            </div>
        </div>
    </footer>

    <!-- INTERACTIVE SCRIPTS -->
    <script>
        // Init Lucide icons
        lucide.createIcons();

        // Cursor Coordinate Tracker Logic
        const coordTracker = document.getElementById('coord-tracker');
        const latVal = document.getElementById('lat-val');
        const lngVal = document.getElementById('lng-val');

        document.addEventListener('mousemove', (e) => {
            // Unhide coordinate overlay
            coordTracker.classList.remove('hidden');
            
            // Generate simulated varying arctic coordinates based on mouse position
            const widthPct = e.clientX / window.innerWidth;
            const heightPct = e.clientY / window.innerHeight;

            const lat = (69.1643 + (heightPct * 0.05)).toFixed(4);
            const lng = (35.1436 + (widthPct * 0.05)).toFixed(4);

            latVal.textContent = `${lat}° N`;
            lngVal.textContent = `${lng}° E`;
        });

        // Interactive Radar Engine using HTML5 Canvas
        const canvas = document.getElementById('radar-canvas');
        const ctx = canvas.getContext('2d');
        let angle = 0;
        let radarActive = true;

        // Custom simulated coordinates for whale pods
        const targets = [
            { x: 180, y: 120, size: 6, label: "ORCA-P4", opacity: 0 },
            { x: 260, y: 240, size: 8, label: "BLUEW-09", opacity: 0 }
        ];

        function drawRadar() {
            if (!radarActive) return;

            // Transparent clearing to build sweep trails
            ctx.fillStyle = 'rgba(13, 15, 18, 0.08)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = canvas.width / 2 - 10;

            // Draw sweep line
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            
            const sweepX = centerX + Math.cos(angle) * radius;
            const sweepY = centerY + Math.sin(angle) * radius;
            ctx.lineTo(sweepX, sweepY);
            ctx.stroke();

            // Handle target fade in when sweep intersects them
            targets.forEach(target => {
                const dx = target.x - centerX;
                const dy = target.y - centerY;
                const targetAngle = Math.atan2(dy, dx);
                
                // Keep sweep angle between -PI and PI to match atan2
                let normalizedSweep = angle % (Math.PI * 2);
                if (normalizedSweep > Math.PI) normalizedSweep -= Math.PI * 2;

                const diff = Math.abs(normalizedSweep - targetAngle);

                // If sweep line is crossing target position
                if (diff < 0.1) {
                    target.opacity = 1.0;
                }

                if (target.opacity > 0) {
                    // Draw detected node
                    ctx.fillStyle = `rgba(56, 189, 248, ${target.opacity})`;
                    ctx.beginPath();
                    ctx.arc(target.x, target.y, target.size, 0, Math.PI * 2);
                    ctx.fill();

                    // Ripple ring
                    ctx.strokeStyle = `rgba(56, 189, 248, ${target.opacity * 0.4})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.arc(target.x, target.y, target.size * 2, 0, Math.PI * 2);
                    ctx.stroke();

                    // Text label
                    ctx.fillStyle = `rgba(186, 230, 253, ${target.opacity})`;
                    ctx.font = '9px monospace';
                    ctx.fillText(target.label, target.x + 12, target.y + 4);

                    // Fade out target detection slowly over time
                    target.opacity -= 0.005;
                }
            });

            angle += 0.015;
            requestAnimationFrame(drawRadar);
        }

        // Start radar on window load
        window.onload = function() {
            drawRadar();
            updateLiveMetrics();
            setInterval(updateLiveMetrics, 3000);
        }

        // Action when user clicks radar ping
        function pingSonar() {
            targets.forEach(target => target.opacity = 1.0);
        }

        // Selection binder for expeditions selection trigger
        function selectExpedition(tierName) {
            const dropdown = document.getElementById('exped-select');
            if (dropdown) {
                dropdown.value = tierName;
            }
        }

        // Dynamic metrics fluctuation for visual authenticity
        function updateLiveMetrics() {
            // Vary ocean temp slightly around +4C
            const tempVal = document.getElementById('temp-val');
            const randomTemp = (4.1 + Math.random() * 0.3).toFixed(1);
            if (tempVal) tempVal.innerText = `+${randomTemp}°C`;

            // Vary wave heights around 1.4m
            const waveVal = document.getElementById('wave-val');
            const randomWave = (1.2 + Math.random() * 0.4).toFixed(1);
            if (waveVal) waveVal.innerText = `${randomWave} M`;

            // Keep time updated
            const timeVal = document.getElementById('time-val');
            if (timeVal) {
                const now = new Date();
                timeVal.innerText = now.toTimeString().split(' ')[0];
            }
        }

        // Booking confirmation form submission
        function handleBookingSubmit(event) {
            event.preventDefault();
            const form = document.getElementById('booking-form');
            const feedback = document.getElementById('form-feedback');

            if (form && feedback) {
                form.classList.add('hidden');
                feedback.classList.remove('hidden');
            }
        }

        // Web Audio ambient soundscape trigger to construct rich atmosphere
        let audioCtx;
        let oceanNoiseNode;
        let isAudioPlaying = false;

        function toggleAudio() {
            const btnText = document.getElementById('audio-text');
            const btn = document.getElementById('audio-btn');

            if (!audioCtx) {
                // Initialize Web Audio context
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }

            if (!isAudioPlaying) {
                // Ocean swell sound synthezier loop using Audio Nodes
                // Generate deep sea noise buffer
                const bufferSize = audioCtx.sampleRate * 2;
                const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
                const output = noiseBuffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    output[i] = Math.random() * 2 - 1;
                }

                // White noise generator
                const whiteNoise = audioCtx.createBufferSource();
                whiteNoise.buffer = noiseBuffer;
                whiteNoise.loop = true;

                // Deep water low-pass filters to emulate vast ocean currents
                const filter = audioCtx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.value = 180;

                // LFO (Low Frequency Oscillator) to model swell waves
                const lfo = audioCtx.createOscillator();
                lfo.frequency.value = 0.15; // Swell interval

                const lfoGain = audioCtx.createGain();
                lfoGain.gain.value = 80; // Modulate cut off

                lfo.connect(lfoGain);
                lfoGain.connect(filter.frequency);

                // Master gain
                oceanNoiseNode = audioCtx.createGain();
                oceanNoiseNode.gain.value = 0.35; // Comfortable volume

                // Connect paths
                whiteNoise.connect(filter);
                filter.connect(oceanNoiseNode);
                oceanNoiseNode.connect(audioCtx.destination);

                // Start audio
                lfo.start();
                whiteNoise.start();

                isAudioPlaying = true;
                btnText.textContent = "Soundscape Active";
                btn.classList.add('border-sky-400', 'text-sky-300');
            } else {
                // Disconnect nodes to stop sound
                if (oceanNoiseNode) {
                    oceanNoiseNode.disconnect();
                }
                isAudioPlaying = false;
                btnText.textContent = "Soundscape Off";
                btn.classList.remove('border-sky-400', 'text-sky-300');
            }
        }
    </script>
</body>
</html>
5
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CIRAWT - Premium Ergonomic Seating</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brandYellow: '#F3C536',
                        brandYellowDark: '#DBAE20',
                        brandCharcoal: '#313538',
                        brandLightGray: '#F3F4F6',
                        brandDarkText: '#1A1C1E',
                        brandMuted: '#6E7478'
                    },
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <!-- Google Fonts & Font Awesome Icons -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        body {
            font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
            background-color: #F3F4F6;
            color: #1A1C1E;
            overflow-x: hidden;
        }
        
        /* Custom animations to match the premium feel */
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        .animate-float {
            animation: float 4s ease-in-out infinite;
        }
        
        @keyframes pulse-ring {
            0% { transform: scale(0.95); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 0.4; }
            100% { transform: scale(0.95); opacity: 0.8; }
        }
        .animate-pulse-ring {
            animation: pulse-ring 3s infinite ease-in-out;
        }

        /* Smooth scroll and transition helpers */
        .transition-all-custom {
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hide scrollbar but keep functionality */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
</head>
<body class="selection:bg-brandYellow selection:text-brandDarkText">

    <!-- Top Promo Banner / Alert Bar -->
    <div class="bg-brandCharcoal text-white py-2 px-4 text-xs font-semibold tracking-wider text-center flex justify-center items-center gap-2 relative z-50">
        <span class="bg-brandYellow text-brandDarkText px-2 py-0.5 rounded text-[10px] uppercase font-bold">Offer</span>
        <span>EXPERIENCE ULTIMATE LUMBAR SUPPORT — ENJOY 20% OFF ALL WORKSTATION CHAIRS THIS WEEK</span>
    </div>

    <!-- Navigation Header -->
    <header class="sticky top-0 z-40 bg-brandLightGray/80 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <!-- Brand Logo -->
            <a href="#" class="flex items-center gap-2 group">
                <div class="w-8 h-8 rounded-full bg-brandYellow flex items-center justify-center font-black text-brandDarkText text-lg shadow-sm transition-transform group-hover:rotate-12">
                    C
                </div>
                <span class="font-extrabold text-xl tracking-tight text-brandDarkText">CIRAWT</span>
            </a>

            <!-- Central Navigation Links -->
            <nav class="hidden md:flex items-center gap-8 font-medium text-sm text-brandDarkText">
                <a href="#products" class="hover:text-brandYellowDark transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brandYellow hover:after:w-full after:transition-all">Product</a>
                <a href="#features" class="hover:text-brandYellowDark transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brandYellow hover:after:w-full after:transition-all">Category</a>
                <a href="#philosophy" class="hover:text-brandYellowDark transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brandYellow hover:after:w-full after:transition-all">About us</a>
                <a href="#reviews" class="hover:text-brandYellowDark transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brandYellow hover:after:w-full after:transition-all">Blog</a>
            </nav>

            <!-- Right-Side Utilities -->
            <div class="flex items-center gap-6">
                <!-- Search Box -->
                <div class="hidden lg:flex items-center bg-gray-200/50 border border-gray-300/30 rounded-full px-4 py-1.5 text-sm w-48 focus-within:w-60 focus-within:border-brandYellow transition-all duration-300">
                    <i class="fa-solid fa-search text-gray-400 mr-2 text-xs"></i>
                    <input type="text" placeholder="Search..." class="bg-transparent border-none outline-none text-xs text-brandDarkText placeholder-gray-400 w-full">
                </div>

                <!-- Account & Settings -->
                <button class="text-sm font-semibold flex items-center gap-1.5 hover:text-brandYellowDark transition-colors">
                    <i class="fa-regular fa-user text-sm"></i>
                    <span class="hidden sm:inline">Account</span>
                </button>

                <!-- Language Selector -->
                <button class="flex items-center gap-1.5 text-xs font-bold bg-white px-2.5 py-1 rounded-full border border-gray-200 shadow-sm">
                    <span class="w-4 h-3 overflow-hidden rounded flex items-center justify-center">🇬🇧</span>
                    <span>ENG</span>
                    <i class="fa-solid fa-chevron-down text-[8px] text-gray-400"></i>
                </button>

                <!-- Interactive Cart Trigger -->
                <button onclick="toggleCart()" class="relative p-2.5 bg-brandCharcoal hover:bg-brandDarkText text-white rounded-full shadow-md transition-all duration-300 hover:scale-105">
                    <i class="fa-solid fa-bag-shopping text-sm"></i>
                    <span id="cart-count" class="absolute -top-1 -right-1 bg-brandYellow text-brandDarkText text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-sm">2</span>
                </button>
            </div>
        </div>
    </header>

    <!-- MAIN CONTEXT WRAPPER -->
    <main class="relative">

        <!-- HERO SECTION (Interactive Product Showcase matching the exact aesthetic of inspiration image) -->
        <section class="min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden py-12 md:py-0">
            <!-- Background Decorative Geometric Accents matching the layout of the source image -->
            <div class="absolute inset-0 z-0 pointer-events-none">
                <!-- Large Right Charcoal Half-circle -->
                <div class="absolute right-[-10vw] top-[10%] w-[55vw] h-[55vw] rounded-full bg-brandCharcoal opacity-100 transform translate-x-20 transition-all duration-700"></div>
                <!-- Interactive dynamic secondary accent circles -->
                <div class="absolute right-[15vw] top-[15%] w-[42vw] h-[42vw] rounded-full bg-brandYellow opacity-100 transition-all duration-1000 transform scale-100" id="hero-bg-circle"></div>
            </div>

            <div class="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Left Details / Typography Content -->
                <div class="lg:col-span-5 flex flex-col justify-center text-left space-y-6 md:space-y-8">
                    
                    <!-- Dynamic Sliding Header -->
                    <div class="space-y-2">
                        <span class="text-xs font-black uppercase tracking-[0.3em] text-brandMuted block" id="hero-series-tag">SERIES 03 // ERGONOMIC</span>
                        <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brandDarkText leading-tight tracking-tight transition-all duration-500" id="hero-title">
                            Comferiws
                        </h1>
                    </div>

                    <!-- Description -->
                    <p class="text-base text-brandMuted max-w-md leading-relaxed" id="hero-desc">
                        We are a design-forward workspace solutions company. Engineered with smart lumbar adaptivity, breathable custom fiber mesh, and sleek synchronous kinetics.
                    </p>

                    <!-- Pricing & Promo Indicator -->
                    <div class="flex items-baseline gap-4">
                        <span class="text-3xl md:text-4xl font-extrabold text-brandDarkText" id="hero-price">$1,867</span>
                        <span class="text-lg text-gray-400 line-through font-medium" id="hero-original-price">$2,543</span>
                        <span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                            <i class="fa-solid fa-arrow-trend-down"></i> Save 26%
                        </span>
                    </div>

                    <!-- CTA Buttons matching design feel -->
                    <div class="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                        <button onclick="addToCartCurrent()" class="bg-brandYellow hover:bg-brandYellowDark text-brandDarkText font-extrabold px-8 py-4 rounded shadow-[0_10px_20px_rgba(243,197,54,0.3)] hover:shadow-[0_12px_24px_rgba(243,197,54,0.4)] transition-all-custom transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider text-xs">
                            ADD TO CART
                        </button>
                        
                        <button onclick="toggleWishlist(this)" class="group flex items-center gap-2 text-sm font-bold text-brandDarkText hover:text-brandYellowDark transition-colors py-3">
                            <span class="w-10 h-10 rounded-full border-2 border-brandCharcoal/10 flex items-center justify-center group-hover:border-brandYellow transition-colors bg-white/50">
                                <i class="fa-regular fa-heart text-base group-hover:scale-110 transition-transform" id="wishlist-icon"></i>
                            </span>
                            <span>Add to wish list</span>
                        </button>
                    </div>

                    <!-- Trust factors -->
                    <div class="flex items-center gap-8 pt-6 border-t border-gray-200/50">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-shield-halved text-brandYellow text-lg"></i>
                            <div class="text-xs">
                                <p class="font-bold">10-Year Warranty</p>
                                <p class="text-gray-400 text-[10px]">Built to endure</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-truck-fast text-brandYellow text-lg"></i>
                            <div class="text-xs">
                                <p class="font-bold">Free Shipping</p>
                                <p class="text-gray-400 text-[10px]">No hidden cost</p>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Central Visual Presentation Container (The circles + actual SVG asset of chair) -->
                <div class="lg:col-span-6 flex justify-center items-center relative min-h-[400px] md:min-h-[500px]">
                    
                    <!-- Main Interactive Floating Product Showcase Graphic with depth shadow -->
                    <div class="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center z-10 transition-all duration-700 animate-float" id="product-graphic-container">
                        
                        <!-- Floating Discount Badge exactly as shown in inspiration image -->
                        <div class="absolute -left-2 top-[45%] z-20 w-20 h-20 bg-brandDarkText text-white rounded-full flex flex-col items-center justify-center text-center font-bold border-4 border-brandLightGray shadow-xl cursor-pointer hover:scale-110 transition-all duration-300">
                            <span class="text-sm font-extrabold tracking-tight" id="badge-pct">20%</span>
                            <span class="text-[10px] text-brandYellow tracking-wider uppercase font-black">Off</span>
                            <div class="absolute inset-0 rounded-full border border-brandYellow opacity-50 animate-pulse-ring"></div>
                        </div>

                        <!-- Rendered SVG Office Chair showing beautiful premium construction with structural segments -->
                        <svg id="chair-svg" class="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 relative z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Chair shadow underneath -->
                            <ellipse cx="250" cy="455" rx="100" ry="12" fill="rgba(0,0,0,0.25)" filter="blur(5px)" />
                            
                            <!-- Castors / Base Wheels -->
                            <g id="wheels" class="stroke-brandDarkText" stroke-width="6" stroke-linecap="round">
                                <circle cx="150" cy="450" r="10" fill="#1C1F22" />
                                <circle cx="210" cy="458" r="10" fill="#1C1F22" />
                                <circle cx="290" cy="458" r="10" fill="#1C1F22" />
                                <circle cx="350" cy="450" r="10" fill="#1C1F22" />
                            </g>
                            
                            <!-- Base Star Struts -->
                            <g id="base-star" stroke="#1C1F22" stroke-width="12" stroke-linecap="round">
                                <line x1="250" y1="420" x2="150" y2="450" />
                                <line x1="250" y1="420" x2="210" y2="458" />
                                <line x1="250" y1="420" x2="290" y2="458" />
                                <line x1="250" y1="420" x2="350" y2="450" />
                            </g>

                            <!-- Cylinder Gas Lift Mechanism -->
                            <rect x="242" y="370" width="16" height="55" rx="3" fill="#1C1F22" />
                            <rect x="238" y="390" width="24" height="8" rx="2" fill="#E5E7EB" />
                            <path d="M230 365 H270 V375 H230 Z" fill="#1C1F22" />

                            <!-- Mechanism Under-Seat Adjusters -->
                            <line x1="210" y1="360" x2="245" y2="368" stroke="#1C1F22" stroke-width="6" stroke-linecap="round" />
                            <circle cx="205" cy="358" r="6" fill="#1C1F22" />

                            <!-- Main Seat Base Support Bracket -->
                            <path d="M190 350 L250 368 L310 350" stroke="#1C1F22" stroke-width="14" stroke-linejoin="round" stroke-linecap="round" />

                            <!-- Cushion Cushion / Support (Outer Frame & Soft Top) -->
                            <g id="cushion">
                                <path d="M160 320 C160 350, 340 350, 340 320 C340 305, 160 305, 160 320 Z" fill="#E5E7EB" stroke="#1C1F22" stroke-width="10" stroke-linejoin="round" />
                                <!-- Inner Soft Comfort Layer (Dynamic Color via JS) -->
                                <path id="chair-seat-color" d="M170 318 C170 340, 330 340, 330 318 C330 308, 170 308, 170 318 Z" fill="#FFFFFF" />
                            </g>

                            <!-- Spine Backrest Upright Connection -->
                            <path d="M250 350 L250 250" stroke="#1C1F22" stroke-width="18" stroke-linecap="round" />

                            <!-- Ergonomic Lumbar Bracket -->
                            <path d="M210 240 Q250 248 290 240" stroke="#1C1F22" stroke-width="12" stroke-linecap="round" fill="none" />

                            <!-- Mesh Backrest Frame (Elegant Slatted Curve) -->
                            <g id="backrest">
                                <!-- Outer Curved Frame -->
                                <path d="M190 140 C180 200, 195 285, 205 290 C220 295, 280 295, 295 290 C305 285, 320 200, 310 140 C300 95, 200 95, 190 140 Z" fill="none" stroke="#1C1F22" stroke-width="12" stroke-linejoin="round" />
                                
                                <!-- Slats / Lumbar Ribs (Giving that exquisite office chair vibe from the photo) -->
                                <g stroke="#1C1F22" stroke-width="5" opacity="0.85">
                                    <line x1="202" y1="150" x2="298" y2="150" />
                                    <line x1="200" y1="165" x2="300" y2="165" />
                                    <line x1="198" y1="180" x2="302" y2="180" />
                                    <line x1="197" y1="195" x2="303" y2="195" />
                                    <line x1="198" y1="210" x2="302" y2="210" />
                                    <line x1="200" y1="225" x2="300" y2="225" />
                                    <line x1="202" y1="240" x2="298" y2="240" />
                                    <line x1="205" y1="255" x2="295" y2="255" />
                                    <line x1="208" y1="270" x2="292" y2="270" />
                                </g>
                            </g>

                            <!-- Armrests Left and Right -->
                            <g id="armrests">
                                <!-- Left Armrest Post and Pad -->
                                <path d="M175 320 V255" stroke="#1C1F22" stroke-width="10" stroke-linecap="round" />
                                <path d="M155 250 H195" stroke="#1C1F22" stroke-width="12" stroke-linecap="round" />
                                
                                <!-- Right Armrest Post and Pad -->
                                <path d="M325 320 V255" stroke="#1C1F22" stroke-width="10" stroke-linecap="round" />
                                <path d="M305 250 H345" stroke="#1C1F22" stroke-width="12" stroke-linecap="round" />
                            </g>
                        </svg>

                        <!-- Subtle Glow Behind the Chair -->
                        <div class="absolute inset-20 rounded-full bg-white opacity-25 blur-2xl z-0 pointer-events-none"></div>
                    </div>
                </div>

                <!-- Sleek Right Stepper / Navigation Interface exactly as represented in source image -->
                <div class="lg:col-span-1 flex flex-row lg:flex-col justify-center items-center gap-6 lg:gap-4 text-brandDarkText lg:text-white z-20">
                    <!-- Up Arrow -->
                    <button onclick="navigateSlide('prev')" class="w-8 h-8 rounded-full border border-current flex items-center justify-center hover:bg-brandYellow hover:text-brandDarkText hover:border-brandYellow transition-all duration-300">
                        <i class="fa-solid fa-arrow-up text-[10px]"></i>
                    </button>
                    
                    <!-- Stepper Index Labels -->
                    <div class="flex flex-row lg:flex-col items-center gap-3 font-semibold text-xs tracking-wider">
                        <button onclick="changeSlide(1)" id="step-btn-1" class="transition-all duration-300 py-1 px-2 rounded hover:text-brandYellow text-gray-400 opacity-60">01</button>
                        <button onclick="changeSlide(2)" id="step-btn-2" class="transition-all duration-300 py-1 px-2 rounded hover:text-brandYellow text-gray-400 opacity-60">02</button>
                        <button onclick="changeSlide(3)" id="step-btn-3" class="transition-all duration-300 py-1 px-2 rounded hover:text-brandYellow font-extrabold text-white bg-brandCharcoal/20 lg:bg-white/25 scale-125 px-2.5 shadow-sm">03</button>
                        <button onclick="changeSlide(4)" id="step-btn-4" class="transition-all duration-300 py-1 px-2 rounded hover:text-brandYellow text-gray-400 opacity-60">04</button>
                    </div>

                    <!-- Down Arrow -->
                    <button onclick="navigateSlide('next')" class="w-8 h-8 rounded-full border border-current flex items-center justify-center hover:bg-brandYellow hover:text-brandDarkText hover:border-brandYellow transition-all duration-300">
                        <i class="fa-solid fa-arrow-down text-[10px]"></i>
                    </button>
                </div>

            </div>
        </section>

        <!-- LIVE DESIGN SYSTEM / CUSTOMIZATION CONTROL BAR -->
        <section class="bg-white border-y border-gray-200 py-6 px-6 relative z-20">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div class="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                    <span class="bg-brandYellow/10 text-brandYellowDark font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">LIVE RECOLOR</span>
                    <p class="text-sm font-semibold text-brandDarkText">Customize the seat color to visualize in real-time:</p>
                </div>
                
                <!-- Seat Color Switcher Controls -->
                <div class="flex items-center gap-4">
                    <button onclick="setSeatColor('#FFFFFF', 'Pure Alabaster')" class="w-10 h-10 rounded-full bg-white border-2 border-brandYellow focus:outline-none transition-all duration-300 shadow-md transform hover:scale-110" title="Alabaster White"></button>
                    <button onclick="setSeatColor('#F3C536', 'Cyber Mustard')" class="w-10 h-10 rounded-full bg-brandYellow border-2 border-transparent hover:border-brandYellowDark focus:outline-none transition-all duration-300 shadow-sm transform hover:scale-110" title="Cyber Mustard"></button>
                    <button onclick="setSeatColor('#313538', 'Carbon Black')" class="w-10 h-10 rounded-full bg-brandCharcoal border-2 border-transparent hover:border-brandYellowDark focus:outline-none transition-all duration-300 shadow-sm transform hover:scale-110" title="Carbon Black"></button>
                    <button onclick="setSeatColor('#E05A47', 'Sienna Terracotta')" class="w-10 h-10 rounded-full bg-[#E05A47] border-2 border-transparent hover:border-brandYellowDark focus:outline-none transition-all duration-300 shadow-sm transform hover:scale-110" title="Sienna Terracotta"></button>
                    <button onclick="setSeatColor('#4B8BBE', 'Aero Glacier')" class="w-10 h-10 rounded-full bg-[#4B8BBE] border-2 border-transparent hover:border-brandYellowDark focus:outline-none transition-all duration-300 shadow-sm transform hover:scale-110" title="Aero Glacier"></button>
                </div>
                
                <div class="text-xs text-brandMuted">
                    Showing: <span id="color-name" class="font-extrabold text-brandDarkText">Pure Alabaster</span>
                </div>
            </div>
        </section>

        <!-- PREMIUM PROOF METRICS SECTION -->
        <section class="py-16 bg-brandLightGray border-b border-gray-200/50">
            <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center md:text-left space-y-2">
                    <p class="text-xs font-bold text-brandMuted uppercase tracking-wider">Engineering Pedigree</p>
                    <h2 class="text-4xl font-extrabold text-brandDarkText">150+</h2>
                    <p class="text-sm text-brandMuted">Patented ergonomic design structures tested rigorously.</p>
                </div>
                <div class="text-center md:text-left space-y-2">
                    <p class="text-xs font-bold text-brandMuted uppercase tracking-wider">Sustainable Sourcing</p>
                    <h2 class="text-4xl font-extrabold text-brandDarkText">85%</h2>
                    <p class="text-sm text-brandMuted">Recycled polymer fabric and certified organic compounds.</p>
                </div>
                <div class="text-center md:text-left space-y-2">
                    <p class="text-xs font-bold text-brandMuted uppercase tracking-wider">Globally Endorsed</p>
                    <h2 class="text-4xl font-extrabold text-brandDarkText">24k+</h2>
                    <p class="text-sm text-brandMuted">Active modern workspace systems delivered worldwide.</p>
                </div>
                <div class="text-center md:text-left space-y-2">
                    <p class="text-xs font-bold text-brandMuted uppercase tracking-wider">Direct Feedback Rating</p>
                    <h2 class="text-4xl font-extrabold text-brandDarkText">4.92</h2>
                    <p class="text-sm text-brandMuted">Average user rating verified by certified ergonomic labs.</p>
                </div>
            </div>
        </section>

        <!-- HIGH-FIDELITY FEATURE GRID -->
        <section id="features" class="py-24 bg-white relative">
            <div class="max-w-7xl mx-auto px-6">
                <!-- Section Header -->
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div class="max-w-xl space-y-4">
                        <span class="text-brandYellowDark font-black text-xs uppercase tracking-[0.25em]">Precision Mechanics</span>
                        <h2 class="text-4xl md:text-5xl font-black text-brandDarkText leading-tight">
                            Crafting comfort that optimizes cognitive performance.
                        </h2>
                    </div>
                    <p class="text-brandMuted max-w-sm leading-relaxed text-sm">
                        Traditional chairs compress your spine and restrict venous return. Our adaptive kinetic frames synchronize dynamically with your body's sub-millimeter shiftings.
                    </p>
                </div>

                <!-- Feature Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    <!-- Card 1 -->
                    <div class="group bg-brandLightGray rounded-2xl p-8 border border-gray-100 hover:border-brandYellow hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all-custom">
                        <div class="w-12 h-12 rounded-xl bg-brandCharcoal text-white flex items-center justify-center mb-6 group-hover:bg-brandYellow group-hover:text-brandDarkText transition-colors duration-300">
                            <i class="fa-solid fa-arrows-to-dot text-lg"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-brandDarkText group-hover:text-brandYellowDark transition-colors">Adaptive Smart Lumbar</h3>
                        <p class="text-sm text-brandMuted leading-relaxed">
                            Continuous, auto-adjusting tension mesh reads your posture alignment to deliver precise counter-pressure without manual knobs.
                        </p>
                    </div>

                    <!-- Card 2 -->
                    <div class="group bg-brandLightGray rounded-2xl p-8 border border-gray-100 hover:border-brandYellow hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all-custom">
                        <div class="w-12 h-12 rounded-xl bg-brandCharcoal text-white flex items-center justify-center mb-6 group-hover:bg-brandYellow group-hover:text-brandDarkText transition-colors duration-300">
                            <i class="fa-solid fa-wind text-lg"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-brandDarkText group-hover:text-brandYellowDark transition-colors">VaporMesh Breathability</h3>
                        <p class="text-sm text-brandMuted leading-relaxed">
                            Interwoven elastomeric fibers create micro-chambers that maximize heat dissipation, keeping your dermis dry through intense focus sessions.
                        </p>
                    </div>

                    <!-- Card 3 -->
                    <div class="group bg-brandLightGray rounded-2xl p-8 border border-gray-100 hover:border-brandYellow hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all-custom">
                        <div class="w-12 h-12 rounded-xl bg-brandCharcoal text-white flex items-center justify-center mb-6 group-hover:bg-brandYellow group-hover:text-brandDarkText transition-colors duration-300">
                            <i class="fa-solid fa-rotate text-lg"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-brandDarkText group-hover:text-brandYellowDark transition-colors">Kinetic Synchronous Tilt</h3>
                        <p class="text-sm text-brandMuted leading-relaxed">
                            A smart mechanical linkage keeps the seat pan relatively level while the backrest reclines, maintaining your core visual line perfectly.
                        </p>
                    </div>

                    <!-- Card 4 -->
                    <div class="group bg-brandLightGray rounded-2xl p-8 border border-gray-100 hover:border-brandYellow hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all-custom">
                        <div class="w-12 h-12 rounded-xl bg-brandCharcoal text-white flex items-center justify-center mb-6 group-hover:bg-brandYellow group-hover:text-brandDarkText transition-colors duration-300">
                            <i class="fa-solid fa-circle-nodes text-lg"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-brandDarkText group-hover:text-brandYellowDark transition-colors">4D Pivoting Armrests</h3>
                        <p class="text-sm text-brandMuted leading-relaxed">
                            Adjust height, forward-backward positioning, lateral width, and rotation angles to rest your forearms without introducing neck strain.
                        </p>
                    </div>

                    <!-- Card 5 -->
                    <div class="group bg-brandLightGray rounded-2xl p-8 border border-gray-100 hover:border-brandYellow hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all-custom">
                        <div class="w-12 h-12 rounded-xl bg-brandCharcoal text-white flex items-center justify-center mb-6 group-hover:bg-brandYellow group-hover:text-brandDarkText transition-colors duration-300">
                            <i class="fa-solid fa-award text-lg"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-brandDarkText group-hover:text-brandYellowDark transition-colors">BIFMA Gold Standard</h3>
                        <p class="text-sm text-brandMuted leading-relaxed">
                            Passed extreme impact, drop, fatigue, and heavy-duty load testing standards, exceeding industrial commercial criteria easily.
                        </p>
                    </div>

                    <!-- Card 6 -->
                    <div class="group bg-brandLightGray rounded-2xl p-8 border border-gray-100 hover:border-brandYellow hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all-custom">
                        <div class="w-12 h-12 rounded-xl bg-brandCharcoal text-white flex items-center justify-center mb-6 group-hover:bg-brandYellow group-hover:text-brandDarkText transition-colors duration-300">
                            <i class="fa-solid fa-leaf text-lg"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-brandDarkText group-hover:text-brandYellowDark transition-colors">Carbon-Negative Initiative</h3>
                        <p class="text-sm text-brandMuted leading-relaxed">
                            For every workspace module constructed, CIRAWT offsets 150% of the greenhouse emissions, investing back into certified carbon capture.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        <!-- HOTSPOT EXPLORER SECTION (With interactive visual pointers) -->
        <section id="philosophy" class="py-24 bg-brandLightGray border-y border-gray-200">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    
                    <!-- Left Visual Interactive Diagram -->
                    <div class="lg:col-span-7 flex justify-center relative bg-white rounded-3xl p-8 border border-gray-200 shadow-md min-h-[500px] overflow-hidden">
                        
                        <!-- Overlay circular background decoration -->
                        <div class="absolute inset-0 z-0 flex items-center justify-center opacity-30">
                            <div class="w-80 h-80 rounded-full border-4 border-dashed border-brandYellow animate-spin" style="animation-duration: 40s;"></div>
                        </div>

                        <!-- Main visual SVG -->
                        <div class="relative z-10 w-full flex justify-center">
                            <!-- Hotspot Graphic SVG -->
                            <svg class="w-full max-w-md h-auto" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <!-- Chair schematic design rendering -->
                                <g opacity="0.15" stroke="#1C1F22" stroke-width="2">
                                    <line x1="50" y1="250" x2="450" y2="250" />
                                    <line x1="250" y1="50" x2="250" y2="450" />
                                    <circle cx="250" cy="250" r="180" />
                                </g>
                                <!-- Rendered Wireframe-style chair -->
                                <path d="M190 140 C180 200, 195 285, 205 290 C220 295, 280 295, 295 290 C305 285, 320 200, 310 140 C300 95, 200 95, 190 140 Z" stroke="#313538" stroke-width="4" stroke-dasharray="2 2" />
                                <path d="M160 320 C160 350, 340 350, 340 320 C340 305, 160 305, 160 320 Z" fill="none" stroke="#313538" stroke-width="4" />
                                <path d="M250 350 L250 420 M150 450 L350 450" stroke="#313538" stroke-width="4" />
                            </svg>

                            <!-- Interactive Hotspots -->
                            
                            <!-- Hotspot A: Backrest -->
                            <div class="absolute top-[28%] left-[45%] group z-20">
                                <div class="relative flex items-center justify-center">
                                    <span class="absolute inline-flex h-8 w-8 rounded-full bg-brandYellow opacity-75 animate-ping"></span>
                                    <button onclick="triggerHotspot('backrest')" class="relative flex items-center justify-center w-6 h-6 rounded-full bg-brandYellow hover:bg-brandDarkText hover:text-white text-brandDarkText text-xs font-bold shadow-md transition-all">A</button>
                                </div>
                            </div>

                            <!-- Hotspot B: Armrest -->
                            <div class="absolute top-[50%] left-[28%] group z-20">
                                <div class="relative flex items-center justify-center">
                                    <span class="absolute inline-flex h-8 w-8 rounded-full bg-brandYellow opacity-75 animate-ping"></span>
                                    <button onclick="triggerHotspot('armrest')" class="relative flex items-center justify-center w-6 h-6 rounded-full bg-brandYellow hover:bg-brandDarkText hover:text-white text-brandDarkText text-xs font-bold shadow-md transition-all">B</button>
                                </div>
                            </div>

                            <!-- Hotspot C: Lumbar Core -->
                            <div class="absolute top-[44%] left-[55%] group z-20">
                                <div class="relative flex items-center justify-center">
                                    <span class="absolute inline-flex h-8 w-8 rounded-full bg-brandYellow opacity-75 animate-ping"></span>
                                    <button onclick="triggerHotspot('lumbar')" class="relative flex items-center justify-center w-6 h-6 rounded-full bg-brandYellow hover:bg-brandDarkText hover:text-white text-brandDarkText text-xs font-bold shadow-md transition-all">C</button>
                                </div>
                            </div>

                            <!-- Hotspot D: Gas Lift & Tilt -->
                            <div class="absolute top-[75%] left-[51%] group z-20">
                                <div class="relative flex items-center justify-center">
                                    <span class="absolute inline-flex h-8 w-8 rounded-full bg-brandYellow opacity-75 animate-ping"></span>
                                    <button onclick="triggerHotspot('lift')" class="relative flex items-center justify-center w-6 h-6 rounded-full bg-brandYellow hover:bg-brandDarkText hover:text-white text-brandDarkText text-xs font-bold shadow-md transition-all">D</button>
                                </div>
                            </div>
                        </div>

                        <!-- Tap/Click Legend Helper -->
                        <div class="absolute bottom-4 left-6 right-6 text-center text-xs text-brandMuted bg-brandLightGray/90 backdrop-blur py-2 px-4 rounded-xl border border-gray-200">
                            <i class="fa-solid fa-hand-pointer text-brandYellowDark mr-1"></i> Tap any highlighted letter node to inspect high-resolution components
                        </div>
                    </div>

                    <!-- Right Info Details Pane -->
                    <div class="lg:col-span-5 space-y-8">
                        <div class="space-y-3">
                            <span class="text-xs font-black uppercase tracking-[0.2em] text-brandMuted block">Component Anatomy</span>
                            <h2 class="text-4xl font-extrabold text-brandDarkText tracking-tight">Interactive Structure Inspection</h2>
                            <p class="text-sm text-brandMuted leading-relaxed">
                                Every part, hinge, stitch, and component in the CIRAWT system undergoes continuous stress modeling to optimize daily task performance.
                            </p>
                        </div>

                        <!-- Dynamic Content Box -->
                        <div id="hotspot-detail-box" class="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-4 transition-all-custom">
                            <!-- Default state before selection -->
                            <div id="hotspot-default" class="text-center py-6">
                                <i class="fa-solid fa-compass-drafting text-4xl text-brandYellow mb-4"></i>
                                <h3 class="font-bold text-lg text-brandDarkText mb-2">No Node Selected</h3>
                                <p class="text-sm text-brandMuted">Click on A, B, C, or D in the diagram on the left to review manufacturing specifications.</p>
                            </div>

                            <!-- Dynamic Detail elements inserted by JS -->
                            <div id="hotspot-active" class="hidden space-y-4">
                                <div class="flex items-center gap-3">
                                    <span id="hotspot-tag" class="bg-brandCharcoal text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded">NODE A</span>
                                    <h3 id="hotspot-title" class="font-bold text-xl text-brandDarkText">Smart Backrest Tension</h3>
                                </div>
                                <hr class="border-gray-200">
                                <p id="hotspot-description" class="text-sm text-brandMuted leading-relaxed">
                                    Made with specialized composite mesh fibers from reinforced carbon polymers.
                                </p>
                                <div class="bg-brandLightGray p-3.5 rounded-xl border border-gray-200/50 flex items-center justify-between text-xs">
                                    <span class="font-semibold text-brandDarkText">Durability Metric:</span>
                                    <span id="hotspot-metric" class="font-black text-brandYellowDark">1,000,000+ Cycles</span>
                                </div>
                            </div>
                        </div>

                        <!-- Quote/Trust box -->
                        <div class="p-6 rounded-2xl bg-brandCharcoal text-white space-y-4 shadow-lg relative overflow-hidden">
                            <div class="absolute top-0 right-0 transform translate-x-6 -translate-y-6 opacity-10">
                                <i class="fa-solid fa-quote-right text-9xl text-white"></i>
                            </div>
                            <p class="text-sm italic leading-relaxed relative z-10">
                                "The adaptive synchronous recline maintains spinal comfort in a way traditional executive chairs simply cannot duplicate. Highly recommended."
                            </p>
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-full bg-brandYellow flex items-center justify-center text-brandDarkText font-bold text-sm">
                                    JD
                                </div>
                                <div>
                                    <p class="text-xs font-bold text-white">Dr. Jonas Dunworth</p>
                                    <p class="text-[10px] text-gray-400">Chief Orthopedist at NeuroSpinal Lab</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <!-- LUXURY CURATED PRODUCTS/COLLECTIONS -->
        <section id="products" class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-6">
                <!-- Header -->
                <div class="text-center max-w-xl mx-auto space-y-4 mb-16">
                    <span class="text-brandYellowDark font-black text-xs uppercase tracking-[0.3em]">Curated Lineup</span>
                    <h2 class="text-4xl font-extrabold text-brandDarkText tracking-tight">Select Your Level of Comfort</h2>
                    <p class="text-sm text-brandMuted leading-relaxed">
                        Every task demands a unique posture. Match your style, schedule, and biomechanics to one of our flagship series.
                    </p>
                </div>

                <!-- Product Catalog Cards Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    <!-- Product 1 -->
                    <div class="group bg-brandLightGray rounded-2xl overflow-hidden border border-gray-100 hover:border-brandYellow hover:bg-white hover:shadow-xl transition-all-custom flex flex-col justify-between">
                        <!-- Media Box with circular overlay -->
                        <div class="p-8 relative h-72 flex items-center justify-center bg-gray-200/40 relative overflow-hidden">
                            <div class="absolute w-48 h-48 rounded-full bg-brandYellow opacity-10 group-hover:scale-125 transition-transform duration-700"></div>
                            
                            <!-- Custom SVG chair placeholder inside circle -->
                            <svg class="w-44 h-44 relative z-10 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="250" cy="450" rx="90" ry="10" fill="rgba(0,0,0,0.15)" />
                                <rect x="240" y="320" width="20" height="130" fill="#313538" />
                                <path d="M160 300 C160 330, 340 330, 340 300 C340 285, 160 285, 160 300 Z" fill="#E5E7EB" stroke="#313538" stroke-width="12" />
                                <path d="M200 120 C190 180, 200 270, 210 275 H290 C300 270, 310 180, 300 120 Z" fill="none" stroke="#313538" stroke-width="12" />
                            </svg>

                            <div class="absolute top-4 right-4 bg-brandDarkText text-white text-[10px] font-bold px-2 py-1 rounded">BESTSELLER</div>
                        </div>
                        
                        <!-- Details Content -->
                        <div class="p-6 space-y-4">
                            <div class="flex items-center justify-between">
                                <span class="text-xs font-bold text-brandMuted uppercase tracking-wider">Ergonomic Task</span>
                                <div class="flex items-center text-xs text-brandYellowDark font-bold">
                                    <i class="fa-solid fa-star mr-1"></i> 4.9 (184 reviews)
                                </div>
                            </div>
                            <h3 class="text-xl font-bold text-brandDarkText group-hover:text-brandYellowDark transition-colors">Comferiws Work</h3>
                            <p class="text-xs text-brandMuted leading-relaxed">
                                Optimized with continuous posture support tracking. Engineered specifically for extended coding and high-focus desks.
                            </p>
                            <div class="flex items-center justify-between pt-2">
                                <div class="flex items-baseline gap-2">
                                    <span class="text-2xl font-black text-brandDarkText">$1,867</span>
                                    <span class="text-xs text-gray-400 line-through">$2,543</span>
                                </div>
                                <button onclick="addToCart('Comferiws Work', 1867)" class="bg-brandCharcoal hover:bg-brandYellow hover:text-brandDarkText text-white font-extrabold px-4 py-2 rounded text-xs transition-colors uppercase tracking-wider">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 2 -->
                    <div class="group bg-brandLightGray rounded-2xl overflow-hidden border border-gray-100 hover:border-brandYellow hover:bg-white hover:shadow-xl transition-all-custom flex flex-col justify-between">
                        <!-- Media Box with circular overlay -->
                        <div class="p-8 relative h-72 flex items-center justify-center bg-gray-200/40 relative overflow-hidden">
                            <div class="absolute w-48 h-48 rounded-full bg-brandCharcoal opacity-5 group-hover:scale-125 transition-transform duration-700"></div>
                            
                            <!-- Custom SVG chair placeholder inside circle -->
                            <svg class="w-44 h-44 relative z-10 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="250" cy="450" rx="90" ry="10" fill="rgba(0,0,0,0.15)" />
                                <rect x="240" y="320" width="20" height="130" fill="#313538" />
                                <path d="M160 300 C160 330, 340 330, 340 300 C340 285, 160 285, 160 300 Z" fill="#E5E7EB" stroke="#313538" stroke-width="12" />
                                <path d="M190 120 L210 275 H290 L310 120 Z" fill="none" stroke="#E5E7EB" stroke-width="12" />
                            </svg>

                            <div class="absolute top-4 right-4 bg-brandYellow text-brandDarkText text-[10px] font-bold px-2 py-1 rounded">NEW RELEASE</div>
                        </div>
                        
                        <!-- Details Content -->
                        <div class="p-6 space-y-4">
                            <div class="flex items-center justify-between">
                                <span class="text-xs font-bold text-brandMuted uppercase tracking-wider">Executive Lounge</span>
                                <div class="flex items-center text-xs text-brandYellowDark font-bold">
                                    <i class="fa-solid fa-star mr-1"></i> 4.8 (92 reviews)
                                </div>
                            </div>
                            <h3 class="text-xl font-bold text-brandDarkText group-hover:text-brandYellowDark transition-colors">AeroGlide Classic</h3>
                            <p class="text-xs text-brandMuted leading-relaxed">
                                Premium leather and synchronous tilt mechanism. Features memory foam back elements for directors and creative visual artists.
                            </p>
                            <div class="flex items-center justify-between pt-2">
                                <div class="flex items-baseline gap-2">
                                    <span class="text-2xl font-black text-brandDarkText">$2,240</span>
                                    <span class="text-xs text-gray-400 line-through">$2,850</span>
                                </div>
                                <button onclick="addToCart('AeroGlide Classic', 2240)" class="bg-brandCharcoal hover:bg-brandYellow hover:text-brandDarkText text-white font-extrabold px-4 py-2 rounded text-xs transition-colors uppercase tracking-wider">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product 3 -->
                    <div class="group bg-brandLightGray rounded-2xl overflow-hidden border border-gray-100 hover:border-brandYellow hover:bg-white hover:shadow-xl transition-all-custom flex flex-col justify-between">
                        <!-- Media Box with circular overlay -->
                        <div class="p-8 relative h-72 flex items-center justify-center bg-gray-200/40 relative overflow-hidden">
                            <div class="absolute w-48 h-48 rounded-full bg-brandYellow opacity-10 group-hover:scale-125 transition-transform duration-700"></div>
                            
                            <!-- Custom SVG chair placeholder inside circle -->
                            <svg class="w-44 h-44 relative z-10 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="250" cy="450" rx="90" ry="10" fill="rgba(0,0,0,0.15)" />
                                <rect x="240" y="320" width="20" height="130" fill="#313538" />
                                <path d="M160 300 C160 330, 340 330, 340 300 C340 285, 160 285, 160 300 Z" fill="#E5E7EB" stroke="#313538" stroke-width="12" />
                                <path d="M190 140 C180 200, 320 200, 310 140 Z" fill="none" stroke="#313538" stroke-width="12" />
                            </svg>

                            <div class="absolute top-4 right-4 bg-brandDarkText text-white text-[10px] font-bold px-2 py-1 rounded">20% OFF</div>
                        </div>
                        
                        <!-- Details Content -->
                        <div class="p-6 space-y-4">
                            <div class="flex items-center justify-between">
                                <span class="text-xs font-bold text-brandMuted uppercase tracking-wider">Study Companion</span>
                                <div class="flex items-center text-xs text-brandYellowDark font-bold">
                                    <i class="fa-solid fa-star mr-1"></i> 4.7 (118 reviews)
                                </div>
                            </div>
                            <h3 class="text-xl font-bold text-brandDarkText group-hover:text-brandYellowDark transition-colors">Zenith Lounge</h3>
                            <p class="text-xs text-brandMuted leading-relaxed">
                                Highly adaptive modular shell design. Perfect space-saving contours, highly breathable light composite backing structure.
                            </p>
                            <div class="flex items-center justify-between pt-2">
                                <div class="flex items-baseline gap-2">
                                    <span class="text-2xl font-black text-brandDarkText">$1,599</span>
                                    <span class="text-xs text-gray-400 line-through">$1,999</span>
                                </div>
                                <button onclick="addToCart('Zenith Lounge', 1599)" class="bg-brandCharcoal hover:bg-brandYellow hover:text-brandDarkText text-white font-extrabold px-4 py-2 rounded text-xs transition-colors uppercase tracking-wider">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- LUXURY REALISTIC REVIEWS / TESTIMONIALS SLIDER -->
        <section id="reviews" class="py-24 bg-brandLightGray border-t border-gray-200/50">
            <div class="max-w-7xl mx-auto px-6">
                <!-- Section Header -->
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div class="max-w-md space-y-4">
                        <span class="text-brandYellowDark font-black text-xs uppercase tracking-[0.25em]">REAL EXPERIENCES</span>
                        <h2 class="text-4xl font-extrabold text-brandDarkText tracking-tight">Verified Comfort Reports</h2>
                    </div>
                    <div class="flex items-center gap-2">
                        <!-- Navigation buttons for manual control -->
                        <button onclick="shiftReview('prev')" class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white text-brandDarkText hover:bg-brandYellow hover:border-brandYellow transition-all duration-300 shadow-sm">
                            <i class="fa-solid fa-chevron-left text-xs"></i>
                        </button>
                        <button onclick="shiftReview('next')" class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white text-brandDarkText hover:bg-brandYellow hover:border-brandYellow transition-all duration-300 shadow-sm">
                            <i class="fa-solid fa-chevron-right text-xs"></i>
                        </button>
                    </div>
                </div>

                <!-- Horizontal Review Carousel -->
                <div class="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar" id="reviews-carousel">
                    
                    <!-- Review 1 -->
                    <div class="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl p-8 border border-gray-100 shadow-sm snap-start shrink-0 space-y-6 flex flex-col justify-between">
                        <div class="space-y-4">
                            <div class="flex items-center gap-1 text-brandYellow text-xs">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                            <h4 class="font-extrabold text-lg text-brandDarkText">"Changed my lower back posture entirely"</h4>
                            <p class="text-sm text-brandMuted leading-relaxed">
                                I code for 10-12 hours daily. After switching to the Comferiws Work system, the lingering dull ache in my lumbar region has completely resolved. Incredible product.
                            </p>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-brandLightGray font-bold flex items-center justify-center text-xs text-brandDarkText">
                                AB
                            </div>
                            <div>
                                <p class="text-xs font-bold text-brandDarkText">Alexander B.</p>
                                <p class="text-[10px] text-brandMuted">Lead Infrastructure Architect</p>
                            </div>
                        </div>
                    </div>

                    <!-- Review 2 -->
                    <div class="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl p-8 border border-gray-100 shadow-sm snap-start shrink-0 space-y-6 flex flex-col justify-between">
                        <div class="space-y-4">
                            <div class="flex items-center gap-1 text-brandYellow text-xs">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                            <h4 class="font-extrabold text-lg text-brandDarkText">"Aesthetics match the high-end build"</h4>
                            <p class="text-sm text-brandMuted leading-relaxed">
                                Beyond the medical-grade spine support, the physical appearance of the chair is beautiful. The yellow and charcoal accent colors look incredibly premium in our studio.
                            </p>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-brandLightGray font-bold flex items-center justify-center text-xs text-brandDarkText">
                                SK
                            </div>
                            <div>
                                <p class="text-xs font-bold text-brandDarkText">Sofia K.</p>
                                <p class="text-[10px] text-brandMuted">VP of Interaction Design</p>
                            </div>
                        </div>
                    </div>

                    <!-- Review 3 -->
                    <div class="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl p-8 border border-gray-100 shadow-sm snap-start shrink-0 space-y-6 flex flex-col justify-between">
                        <div class="space-y-4">
                            <div class="flex items-center gap-1 text-brandYellow text-xs">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                            <h4 class="font-extrabold text-lg text-brandDarkText">"Breathable fabric actually works"</h4>
                            <p class="text-sm text-brandMuted leading-relaxed">
                                Most traditional leather desk seats trap heat, forcing uncomfortable micro-adjustments. The VaporMesh material dissipates sweat perfectly even in humid conditions.
                            </p>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-brandLightGray font-bold flex items-center justify-center text-xs text-brandDarkText">
                                MC
                            </div>
                            <div>
                                <p class="text-xs font-bold text-brandDarkText">Marcus C.</p>
                                <p class="text-[10px] text-brandMuted">3D Generalist & Animator</p>
                            </div>
                        </div>
                    </div>

                    <!-- Review 4 -->
                    <div class="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl p-8 border border-gray-100 shadow-sm snap-start shrink-0 space-y-6 flex flex-col justify-between">
                        <div class="space-y-4">
                            <div class="flex items-center gap-1 text-brandYellow text-xs">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                            <h4 class="font-extrabold text-lg text-brandDarkText">"Incredible premium customer support"</h4>
                            <p class="text-sm text-brandMuted leading-relaxed">
                                The shipping transit was extremely fast, and adjusting the modular neck brace was highly intuitive. A highly cohesive premium user experience throughout.
                            </p>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-brandLightGray font-bold flex items-center justify-center text-xs text-brandDarkText">
                                HR
                            </div>
                            <div>
                                <p class="text-xs font-bold text-brandDarkText">Hannah R.</p>
                                <p class="text-[10px] text-brandMuted">Chief Creative Officer</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- FREQUENTLY ASKED QUESTIONS SECTION -->
        <section class="py-24 bg-white border-t border-gray-200/50">
            <div class="max-w-4xl mx-auto px-6 space-y-12">
                <div class="text-center space-y-4">
                    <span class="text-brandYellowDark font-black text-xs uppercase tracking-[0.25em]">FAQS</span>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-brandDarkText tracking-tight">Got Questions? We’ve Got Answers.</h2>
                </div>
                
                <div class="space-y-4">
                    <!-- FAQ Item 1 -->
                    <div class="border border-gray-200 rounded-xl p-5 hover:border-brandYellow transition-colors bg-brandLightGray/30 cursor-pointer" onclick="toggleFaq(1)">
                        <div class="flex items-center justify-between">
                            <h4 class="font-bold text-brandDarkText text-sm sm:text-base">What makes CIRAWT chairs different from standard office seating?</h4>
                            <span id="faq-icon-1" class="text-brandYellowDark text-xs font-bold"><i class="fa-solid fa-plus"></i></span>
                        </div>
                        <div id="faq-ans-1" class="hidden mt-3 text-xs sm:text-sm text-brandMuted leading-relaxed border-t border-gray-200/50 pt-3">
                            Unlike generic chairs that use simple tension foam, our products utilize custom mechanical weight-distribution and auto-responsive lumbar alignment plates that continuously re-calculate spinal curvature dynamically as you shift weight.
                        </div>
                    </div>

                    <!-- FAQ Item 2 -->
                    <div class="border border-gray-200 rounded-xl p-5 hover:border-brandYellow transition-colors bg-brandLightGray/30 cursor-pointer" onclick="toggleFaq(2)">
                        <div class="flex items-center justify-between">
                            <h4 class="font-bold text-brandDarkText text-sm sm:text-base">Can I adjust the armrests and seat depth manually?</h4>
                            <span id="faq-icon-2" class="text-brandYellowDark text-xs font-bold"><i class="fa-solid fa-plus"></i></span>
                        </div>
                        <div id="faq-ans-2" class="hidden mt-3 text-xs sm:text-sm text-brandMuted leading-relaxed border-t border-gray-200/50 pt-3">
                            Absolutely. The Comferiws Work and AeroGlide series feature custom intuitive adjustments, including 4D armrests (height, rotation, slide, pivot) and a 60mm sliding dynamic seat-pan glide.
                        </div>
                    </div>

                    <!-- FAQ Item 3 -->
                    <div class="border border-gray-200 rounded-xl p-5 hover:border-brandYellow transition-colors bg-brandLightGray/30 cursor-pointer" onclick="toggleFaq(3)">
                        <div class="flex items-center justify-between">
                            <h4 class="font-bold text-brandDarkText text-sm sm:text-base">How long is the warranty and shipping window?</h4>
                            <span id="faq-icon-3" class="text-brandYellowDark text-xs font-bold"><i class="fa-solid fa-plus"></i></span>
                        </div>
                        <div id="faq-ans-3" class="hidden mt-3 text-xs sm:text-sm text-brandMuted leading-relaxed border-t border-gray-200/50 pt-3">
                            We provide an industry-leading 10-year mechanical warranty. Shipping is 100% free and typical transit timelines range between 3 to 6 business days.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- MODERN PREMIUM CALL TO ACTION SECTION -->
        <section class="bg-brandCharcoal text-white py-20 px-6 relative overflow-hidden">
            <div class="absolute inset-0 z-0 pointer-events-none opacity-20">
                <!-- Large aesthetic background circles -->
                <div class="absolute right-0 top-0 w-96 h-96 bg-brandYellow rounded-full blur-3xl"></div>
                <div class="absolute left-10 bottom-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>

            <div class="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                <span class="text-brandYellow font-extrabold text-xs uppercase tracking-[0.3em]">LIMITED OFFER</span>
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                    Upgrade Your Workspace <br>Aesthetic & Well-being
                </h2>
                <p class="text-gray-300 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
                    Invest in physical endurance and structural spine longevity. Secure your custom configured Comferiws today and redeem 20% off.
                </p>
                <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onclick="scrollToTop()" class="bg-brandYellow hover:bg-brandYellowDark text-brandDarkText font-black px-8 py-4 rounded text-xs uppercase tracking-wider shadow-lg transform hover:-translate-y-0.5 transition-all">
                        CONFIGURE CHAIR NOW
                    </button>
                    <a href="#products" class="text-sm font-bold border-b-2 border-white hover:border-brandYellow hover:text-brandYellow transition-all pb-1">
                        Explore other models
                    </a>
                </div>
            </div>
        </section>

    </main>

    <!-- FOOTER WITH DETAILED CHANNELS -->
    <footer class="bg-brandDarkText text-white pt-16 pb-12 border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
            
            <!-- Column 1: Brand details -->
            <div class="lg:col-span-4 space-y-6">
                <a href="#" class="flex items-center gap-2 group">
                    <div class="w-8 h-8 rounded-full bg-brandYellow flex items-center justify-center font-black text-brandDarkText text-lg">
                        C
                    </div>
                    <span class="font-extrabold text-xl tracking-tight text-white">CIRAWT</span>
                </a>
                <p class="text-xs text-gray-400 leading-relaxed max-w-sm">
                    CIRAWT is a globally recognized ergonomic design pioneer. Our goal is to synthesize industrial orthopedic expertise with highly functional, premium modern visual languages.
                </p>
                <!-- Social media icons -->
                <div class="flex items-center gap-4 text-gray-400">
                    <a href="#" class="hover:text-brandYellow transition-colors"><i class="fa-brands fa-instagram text-lg"></i></a>
                    <a href="#" class="hover:text-brandYellow transition-colors"><i class="fa-brands fa-pinterest text-lg"></i></a>
                    <a href="#" class="hover:text-brandYellow transition-colors"><i class="fa-brands fa-twitter text-lg"></i></a>
                    <a href="#" class="hover:text-brandYellow transition-colors"><i class="fa-brands fa-vimeo text-lg"></i></a>
                </div>
            </div>

            <!-- Column 2: Quick Links -->
            <div class="lg:col-span-2 space-y-4">
                <h4 class="font-extrabold text-xs uppercase tracking-wider text-brandYellow">Collections</h4>
                <ul class="space-y-2.5 text-xs text-gray-400">
                    <li><a href="#products" class="hover:text-white transition-colors">Comferiws Series</a></li>
                    <li><a href="#products" class="hover:text-white transition-colors">AeroGlide Classic</a></li>
                    <li><a href="#products" class="hover:text-white transition-colors">Zenith Modular</a></li>
                    <li><a href="#products" class="hover:text-white transition-colors">Workspace Ergonomics</a></li>
                </ul>
            </div>

            <!-- Column 3: Company -->
            <div class="lg:col-span-2 space-y-4">
                <h4 class="font-extrabold text-xs uppercase tracking-wider text-brandYellow">Company</h4>
                <ul class="space-y-2.5 text-xs text-gray-400">
                    <li><a href="#philosophy" class="hover:text-white transition-colors">Our Philosophy</a></li>
                    <li><a href="#philosophy" class="hover:text-white transition-colors">Orthopedic Standards</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Sustainability Report</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Design Awards</a></li>
                </ul>
            </div>

            <!-- Column 4: Support -->
            <div class="lg:col-span-4 space-y-4">
                <h4 class="font-extrabold text-xs uppercase tracking-wider text-brandYellow">Join the Newsletter</h4>
                <p class="text-xs text-gray-400">Receive architectural inspiration, comfort hacks, and priority release access.</p>
                
                <form onsubmit="event.preventDefault(); showToast('Subscribed successfully!');" class="flex items-center bg-gray-800 rounded px-3 py-2 border border-gray-700 focus-within:border-brandYellow transition-colors">
                    <input type="email" placeholder="Email address" class="bg-transparent border-none outline-none text-xs text-white placeholder-gray-500 w-full" required>
                    <button class="text-brandYellow hover:text-brandYellowDark font-bold text-xs uppercase ml-2">JOIN</button>
                </form>
            </div>

        </div>

        <div class="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>© 2026 CIRAWT International Inc. All biomechanical patents reserved.</p>
            <div class="flex items-center gap-6">
                <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" class="hover:text-white transition-colors">Sitemap</a>
            </div>
        </div>
    </footer>


    <!-- INTERACTIVE SIDEBAR CART OVERLAY PANEL -->
    <div id="sidebar-cart" class="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl transform translate-x-full transition-all duration-500 ease-in-out border-l border-gray-200 flex flex-col justify-between">
        
        <!-- Cart Header -->
        <div class="p-6 border-b border-gray-200 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-bag-shopping text-brandYellowDark text-lg"></i>
                <h3 class="font-black text-xl text-brandDarkText">Your Active Cart</h3>
            </div>
            <button onclick="toggleCart()" class="w-8 h-8 rounded-full bg-brandLightGray hover:bg-brandYellow hover:text-brandDarkText transition-colors flex items-center justify-center text-brandDarkText">
                <i class="fa-solid fa-times text-xs"></i>
            </button>
        </div>

        <!-- Cart Items Box (Dynamic rendering inside) -->
        <div id="cart-items-container" class="flex-1 overflow-y-auto p-6 space-y-6">
            <!-- Simulated item 1 -->
            <div class="flex items-center gap-4 border-b border-gray-100 pb-4 relative">
                <div class="w-16 h-16 rounded-xl bg-brandLightGray flex items-center justify-center border border-gray-200">
                    <i class="fa-solid fa-couch text-brandCharcoal text-lg"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="font-bold text-sm text-brandDarkText truncate">Comferiws Work System</h4>
                    <p class="text-xs text-brandMuted">Color: Pure Alabaster</p>
                    <div class="flex items-center justify-between mt-1">
                        <span class="font-bold text-sm text-brandDarkText">$1,867</span>
                        <div class="flex items-center gap-2">
                            <button onclick="updateQty(0, -1)" class="text-gray-500 hover:text-brandYellowDark"><i class="fa-solid fa-minus text-[10px]"></i></button>
                            <span class="text-xs font-bold px-2 bg-brandLightGray rounded">1</span>
                            <button onclick="updateQty(0, 1)" class="text-gray-500 hover:text-brandYellowDark"><i class="fa-solid fa-plus text-[10px]"></i></button>
                        </div>
                    </div>
                </div>
                <button onclick="removeItem(0)" class="text-gray-300 hover:text-rose-500 absolute top-0 right-0"><i class="fa-solid fa-trash-can text-xs"></i></button>
            </div>
        </div>

        <!-- Cart Footer / Totals and Action buttons -->
        <div class="p-6 border-t border-gray-200 bg-brandLightGray/50 space-y-6">
            <div class="space-y-2 text-sm text-brandDarkText">
                <div class="flex justify-between">
                    <span class="text-brandMuted">Subtotal</span>
                    <span class="font-bold" id="cart-subtotal">$1,867</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-brandMuted">Premium Insured Shipping</span>
                    <span class="font-bold text-emerald-600">FREE</span>
                </div>
                <div class="flex justify-between text-base border-t border-gray-200 pt-3">
                    <span class="font-black">Total (USD)</span>
                    <span class="font-black text-brandYellowDark" id="cart-total">$1,867</span>
                </div>
            </div>

            <div class="space-y-3">
                <button onclick="checkout()" class="w-full bg-brandYellow hover:bg-brandYellowDark text-brandDarkText font-black py-4 rounded text-xs uppercase tracking-wider shadow-md transition-all">
                    SECURE ORDER CHECKOUT
                </button>
                <button onclick="toggleCart()" class="w-full text-center text-xs text-brandMuted hover:text-brandDarkText font-bold">
                    CONTINUE BROWSING
                </button>
            </div>
        </div>
    </div>

    <!-- BLACKOUT COVER ON CART ACTIVATED -->
    <div id="cart-backdrop" onclick="toggleCart()" class="fixed inset-0 bg-brandDarkText/40 backdrop-blur-sm z-40 hidden transition-opacity duration-500"></div>


    <!-- REALISTIC USER INTERACTIVE TOAST NOTIFICATION -->
    <div id="toast" class="fixed bottom-6 left-6 z-50 bg-brandDarkText text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-brandYellow transform translate-y-24 opacity-0 transition-all duration-300">
        <div class="w-6 h-6 rounded-full bg-brandYellow text-brandDarkText flex items-center justify-center text-xs">
            <i class="fa-solid fa-check"></i>
        </div>
        <div>
            <p id="toast-message" class="text-xs font-bold">Notification triggered successfully.</p>
        </div>
    </div>


    <!-- CLIENT SIDE INTERACTION JAVASCRIPT LOGIC -->
    <script>
        // Core interactive states
        let currentSlide = 3; // Starting at exactly '03' as pictured in the source image
        let currentColor = '#FFFFFF';
        let currentColorLabel = 'Pure Alabaster';
        
        // Setup initial Cart
        let cartItems = [
            { id: 1, name: "Comferiws Work System", price: 1867, qty: 1, color: "Pure Alabaster" }
        ];

        // Slide Database to simulate premium changes
        const slides = {
            1: {
                title: "Comferiws Soft",
                tag: "SERIES 01 // MODULAR",
                desc: "An adaptive lounger designed with soft elastomeric memory fibers, combining deep physical ergonomics with lightweight minimal workspace structures.",
                price: "$1,450",
                originalPrice: "$1,890",
                badge: "15% Off",
                bgCircle: "#E05A47" // coral
            },
            2: {
                title: "AeroGlide Task",
                tag: "SERIES 02 // EXECUTIVE",
                desc: "Premium grade aluminum core matched with active tilt kinetics. Perfect visual balance and supreme posture stabilization built for creative spaces.",
                price: "$2,240",
                originalPrice: "$2,850",
                badge: "20% Off",
                bgCircle: "#4B8BBE" // blue
            },
            3: {
                title: "Comferiws",
                tag: "SERIES 03 // ERGONOMIC",
                desc: "We are a design-forward workspace solutions company. Engineered with smart lumbar adaptivity, breathable custom fiber mesh, and sleek synchronous kinetics.",
                price: "$1,867",
                originalPrice: "$2,543",
                badge: "20% Off",
                bgCircle: "#F3C536" // yellow
            },
            4: {
                title: "Zenith Executive",
                tag: "SERIES 04 // PLATINUM",
                desc: "Uncompromising support built from high-tensile carbon polymers. Provides auto-adjusting tension mesh that maps natural lumbar curve changes.",
                price: "$2,999",
                originalPrice: "$3,600",
                badge: "15% Off",
                bgCircle: "#313538" // charcoal
            }
        };

        // Smoothly change Slides
        function changeSlide(slideNum) {
            currentSlide = slideNum;
            const data = slides[slideNum];
            
            // Fade out graphic and text
            const textElements = ['hero-title', 'hero-series-tag', 'hero-desc', 'hero-price', 'hero-original-price', 'badge-pct'];
            textElements.forEach(id => {
                document.getElementById(id).style.opacity = '0';
                document.getElementById(id).style.transform = 'translateY(10px)';
            });
            document.getElementById('product-graphic-container').style.opacity = '0';
            document.getElementById('product-graphic-container').style.transform = 'scale(0.95)';

            setTimeout(() => {
                // Apply slide updates
                document.getElementById('hero-title').innerText = data.title;
                document.getElementById('hero-series-tag').innerText = data.tag;
                document.getElementById('hero-desc').innerText = data.desc;
                document.getElementById('hero-price').innerText = data.price;
                document.getElementById('hero-original-price').innerText = data.originalPrice;
                document.getElementById('badge-pct').innerText = data.badge;

                // Shift background decorative circle colors smoothly
                document.getElementById('hero-bg-circle').style.backgroundColor = data.bgCircle;

                // Adjust the chair seat rendering colors to match slide themes slightly if desired
                if(slideNum === 1) {
                    setSeatColor('#E05A47', 'Sienna Terracotta', false);
                } else if(slideNum === 2) {
                    setSeatColor('#4B8BBE', 'Aero Glacier', false);
                } else if(slideNum === 3) {
                    setSeatColor('#FFFFFF', 'Pure Alabaster', false);
                } else if(slideNum === 4) {
                    setSeatColor('#313538', 'Carbon Black', false);
                }

                // Update active step labels classes
                for (let i = 1; i <= 4; i++) {
                    const btn = document.getElementById(`step-btn-${i}`);
                    if (i === slideNum) {
                        btn.className = "transition-all duration-300 py-1 px-2.5 rounded hover:text-brandYellow font-extrabold text-white bg-brandCharcoal/20 lg:bg-white/25 scale-125 shadow-sm";
                    } else {
                        btn.className = "transition-all duration-300 py-1 px-2 rounded hover:text-brandYellow text-gray-400 opacity-60";
                    }
                }

                // Fade back in
                textElements.forEach(id => {
                    document.getElementById(id).style.opacity = '1';
                    document.getElementById(id).style.transform = 'translateY(0)';
                });
                document.getElementById('product-graphic-container').style.opacity = '1';
                document.getElementById('product-graphic-container').style.transform = 'scale(1) translateY(0)';
            }, 300);
        }

        // Stepper Navigation Buttons
        function navigateSlide(direction) {
            let target = currentSlide;
            if (direction === 'next') {
                target = currentSlide === 4 ? 1 : currentSlide + 1;
            } else {
                target = currentSlide === 1 ? 4 : currentSlide - 1;
            }
            changeSlide(target);
        }

        // Live Seat Color Switcher Controls
        function setSeatColor(hex, label, triggerNotify = true) {
            currentColor = hex;
            currentColorLabel = label;
            document.getElementById('chair-seat-color').setAttribute('fill', hex);
            document.getElementById('color-name').innerText = label;
            
            if (triggerNotify) {
                showToast(`Visualizer updated seat cover to: ${label}`);
            }
        }

        // Trigger hotspots detail box update
        function triggerHotspot(id) {
            const defaultBox = document.getElementById('hotspot-default');
            const activeBox = document.getElementById('hotspot-active');
            
            defaultBox.classList.add('hidden');
            activeBox.classList.remove('hidden');

            const contentMap = {
                'backrest': {
                    tag: 'NODE A // MAIN BACKREST',
                    title: 'Precision Slatted Framework',
                    desc: 'Modeled after high-performance racing dynamics. Made with specialized composite mesh fibers from reinforced carbon polymers to encourage micro-motion ventilation.',
                    metric: '1,000,000+ Tilt Cycles Verified'
                },
                'armrest': {
                    tag: 'NODE B // ARM ASSEMBLY',
                    title: '4D Spatial Orientation Adjusters',
                    desc: 'Supports horizontal slides, high vertical offsets, lateral pivots, and rotations, effectively dispersing pressure around the upper neck and rotator cuff structures.',
                    metric: 'Multi-axis Pivot Lock Approved'
                },
                'lumbar': {
                    tag: 'NODE C // POSTURE CORE',
                    title: 'Autonomic Self-Adjusting Spine Core',
                    desc: 'Automatically adjusts the support tension profile based on dynamic weight shifts, maintaining spinal lordosis without manual physical dialing.',
                    metric: '98.4% Posture Correcting Match'
                },
                'lift': {
                    tag: 'NODE D // MECHANIC BASE',
                    title: 'Insured Gas Lift & Smooth Recalibration',
                    desc: 'Heavy-duty steel pneumatic gas lift ensures effortless elevation transitions. Coupled with synchronous dynamic tilt, maintaining line-of-sight tracking.',
                    metric: 'Exceeds ANSI/BIFMA Safety Standard'
                }
            };

            const data = contentMap[id];
            
            // Animate transition
            activeBox.style.opacity = '0';
            activeBox.style.transform = 'translateY(5px)';
            
            setTimeout(() => {
                document.getElementById('hotspot-tag').innerText = data.tag;
                document.getElementById('hotspot-title').innerText = data.title;
                document.getElementById('hotspot-description').innerText = data.desc;
                document.getElementById('hotspot-metric').innerText = data.metric;
                
                activeBox.style.opacity = '1';
                activeBox.style.transform = 'translateY(0)';
            }, 150);
        }

        // Trigger Toast notifications dynamically
        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = msg;
            
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';

            setTimeout(() => {
                toast.style.transform = 'translateY(100px)';
                toast.style.opacity = '0';
            }, 3000);
        }

        // Cart Visibility Handlers
        function toggleCart() {
            const sidebar = document.getElementById('sidebar-cart');
            const backdrop = document.getElementById('cart-backdrop');
            
            if (sidebar.classList.contains('translate-x-full')) {
                sidebar.classList.remove('translate-x-full');
                backdrop.classList.remove('hidden');
                renderCart();
            } else {
                sidebar.classList.add('translate-x-full');
                backdrop.classList.add('hidden');
            }
        }

        // Add Current Configuration to Cart
        function addToCartCurrent() {
            const activeItemName = slides[currentSlide].title + " Work System";
            const priceVal = parseInt(slides[currentSlide].price.replace(/[^0-9]/g, ''));
            
            addToCart(activeItemName, priceVal, currentColorLabel);
        }

        // Standard Add To Cart Function
        function addToCart(name, price, color = "Pure Alabaster") {
            const existing = cartItems.find(item => item.name === name && item.color === color);
            if (existing) {
                existing.qty += 1;
            } else {
                cartItems.push({
                    id: Date.now(),
                    name: name,
                    price: price,
                    qty: 1,
                    color: color
                });
            }
            showToast(`${name} added to cart!`);
            renderCart();
            
            // Auto open the cart sidebar to encourage order completion
            setTimeout(() => {
                const sidebar = document.getElementById('sidebar-cart');
                if (sidebar.classList.contains('translate-x-full')) {
                    toggleCart();
                }
            }, 500);
        }

        // Update quantity
        function updateQty(index, amt) {
            cartItems[index].qty += amt;
            if (cartItems[index].qty <= 0) {
                cartItems.splice(index, 1);
            }
            renderCart();
        }

        // Remove item
        function removeItem(index) {
            const name = cartItems[index].name;
            cartItems.splice(index, 1);
            renderCart();
            showToast(`${name} removed from cart.`);
        }

        // Render Cart Details into Sidebar
        function renderCart() {
            const container = document.getElementById('cart-items-container');
            const badgeCount = document.getElementById('cart-count');
            
            if (cartItems.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-20 space-y-4">
                        <i class="fa-solid fa-basket-shopping text-4xl text-gray-300"></i>
                        <p class="text-sm font-bold text-brandMuted">Your cart feels incredibly empty.</p>
                        <button onclick="toggleCart()" class="text-xs bg-brandYellow font-extrabold text-brandDarkText px-4 py-2 rounded">START BROWSING</button>
                    </div>
                `;
                badgeCount.innerText = "0";
                document.getElementById('cart-subtotal').innerText = "$0";
                document.getElementById('cart-total').innerText = "$0";
                return;
            }

            // Calculate total items
            let totalQty = 0;
            let subtotal = 0;
            let html = '';

            cartItems.forEach((item, index) => {
                totalQty += item.qty;
                subtotal += item.price * item.qty;
                
                html += `
                    <div class="flex items-center gap-4 border-b border-gray-100 pb-4 relative transition-all">
                        <div class="w-16 h-16 rounded-xl bg-brandLightGray flex items-center justify-center border border-gray-200">
                            <i class="fa-solid fa-couch text-brandCharcoal text-lg"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h4 class="font-bold text-sm text-brandDarkText truncate">${item.name}</h4>
                            <p class="text-xs text-brandMuted">Color: ${item.color}</p>
                            <div class="flex items-center justify-between mt-1">
                                <span class="font-bold text-sm text-brandDarkText">$${(item.price * item.qty).toLocaleString()}</span>
                                <div class="flex items-center gap-2">
                                    <button onclick="updateQty(${index}, -1)" class="text-gray-400 hover:text-brandYellowDark p-1"><i class="fa-solid fa-minus text-[10px]"></i></button>
                                    <span class="text-xs font-bold px-2 py-0.5 bg-brandLightGray rounded">${item.qty}</span>
                                    <button onclick="updateQty(${index}, 1)" class="text-gray-400 hover:text-brandYellowDark p-1"><i class="fa-solid fa-plus text-[10px]"></i></button>
                                </div>
                            </div>
                        </div>
                        <button onclick="removeItem(${index})" class="text-gray-300 hover:text-rose-500 absolute top-0 right-0 p-1"><i class="fa-solid fa-trash-can text-xs"></i></button>
                    </div>
                `;
            });

            container.innerHTML = html;
            badgeCount.innerText = totalQty;
            document.getElementById('cart-subtotal').innerText = `$${subtotal.toLocaleString()}`;
            document.getElementById('cart-total').innerText = `$${subtotal.toLocaleString()}`;
        }

        // Simulate checkout order completion
        function checkout() {
            if (cartItems.length === 0) {
                showToast("Cart is empty! Choose a configured chair.");
                return;
            }
            showToast("Redirecting securely to secure payment gateway...");
            setTimeout(() => {
                cartItems = [];
                renderCart();
                toggleCart();
                showToast("Order completed! Thank you for trusting CIRAWT.");
            }, 1500);
        }

        // Manual scroll helper
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            showToast("Customize your build above.");
        }

        // Accordion trigger for FAQ section
        function toggleFaq(num) {
            const ans = document.getElementById(`faq-ans-${num}`);
            const icon = document.getElementById(`faq-icon-${num}`);
            
            if (ans.classList.contains('hidden')) {
                ans.classList.remove('hidden');
                icon.innerHTML = `<i class="fa-solid fa-minus"></i>`;
            } else {
                ans.classList.add('hidden');
                icon.innerHTML = `<i class="fa-solid fa-plus"></i>`;
            }
        }

        // Wishlist visual trigger
        function toggleWishlist(btn) {
            const heart = btn.querySelector('#wishlist-icon');
            if (heart.classList.contains('fa-regular')) {
                heart.classList.remove('fa-regular');
                heart.classList.add('fa-solid', 'text-rose-500');
                showToast("Added configuration to your account wishlist.");
            } else {
                heart.classList.remove('fa-solid', 'text-rose-500');
                heart.classList.add('fa-regular');
                showToast("Removed from your wishlist.");
            }
        }

        // Testimonial shift helper
        function shiftReview(dir) {
            const container = document.getElementById('reviews-carousel');
            const scrollAmt = 350;
            if (dir === 'next') {
                container.scrollBy({ left: scrollAmt, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
            }
        }

        // Setup page state on initial boot
        window.addEventListener('DOMContentLoaded', () => {
            renderCart();
        });
    </script>
</body>
</html>
5
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abstract Stock — Premium 3D Shapes, Textures & Assets</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <!-- Google Fonts for sophisticated Sans-Serif look -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                    },
                    colors: {
                        darkBg: '#09090b',
                        darkCard: 'rgba(20, 20, 22, 0.65)',
                        darkBorder: 'rgba(255, 255, 255, 0.08)',
                        brandOrange: '#FF5722',
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom Premium Aesthetics & Scrollbars */
        body {
            background-color: #08080a;
            color: #f4f4f5;
            overflow-x: hidden;
        }
        
        /* Glassmorphism effects following the reference */
        .glass-panel {
            background: rgba(18, 18, 20, 0.65);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .glass-pill {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-pill:hover {
            background: rgba(255, 255, 255, 0.09);
            border-color: rgba(255, 255, 255, 0.15);
            transform: translateY(-1px);
        }

        /* 3D abstract waves mimicking the textures of the reference image */
        .texture-sphere {
            background: repeating-linear-gradient(
                45deg,
                #111 0px,
                #111 4px,
                #222 4px,
                #222 8px,
                #000 8px,
                #000 12px,
                #333 12px,
                #333 16px
            );
            border-radius: 53% 47% 70% 30% / 40% 50% 50% 60%;
            animation: morphing 15s ease-in-out infinite alternate;
        }

        .texture-sphere-large {
            background: repeating-radial-gradient(
                circle at 40% 40%,
                #333,
                #1a1a1a 8px,
                #050505 16px,
                #262626 24px,
                #0d0d0d 32px
            );
            border-radius: 60% 40% 55% 45% / 45% 50% 50% 55%;
            filter: contrast(1.2) brightness(0.9);
            animation: morphing-large 25s ease-in-out infinite alternate;
            box-shadow: inset -10px -10px 40px rgba(0,0,0,0.9), inset 10px 10px 40px rgba(255,255,255,0.05);
        }

        .texture-waves-vertical {
            background: repeating-linear-gradient(
                90deg,
                #08080a 0px,
                #1c1c21 6px,
                #08080a 12px,
                #2d2d35 18px,
                #08080a 24px
            );
        }

        @keyframes morphing {
            0% { border-radius: 53% 47% 70% 30% / 40% 50% 50% 60%; transform: rotate(0deg) scale(1); }
            50% { border-radius: 40% 60% 40% 60% / 50% 40% 60% 50%; transform: rotate(90deg) scale(1.05); }
            100% { border-radius: 60% 40% 55% 45% / 45% 50% 50% 55%; transform: rotate(180deg) scale(0.95); }
        }

        @keyframes morphing-large {
            0% { border-radius: 60% 40% 55% 45% / 45% 50% 50% 55%; transform: translate(0, 0) scale(1); }
            50% { border-radius: 45% 55% 35% 65% / 55% 45% 55% 45%; transform: translate(15px, -15px) scale(1.08); }
            100% { border-radius: 50% 50% 60% 40% / 40% 60% 40% 60%; transform: translate(-10px, 10px) scale(0.95); }
        }

        /* Ambient Glow Shadows */
        .glow-soft {
            box-shadow: 0 0 50px -10px rgba(255, 255, 255, 0.03);
        }

        .glow-orange {
            box-shadow: 0 0 60px -15px rgba(255, 87, 34, 0.25);
        }

        /* Custom Scrollbar for premium vibe */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #09090b;
        }
        ::-webkit-scrollbar-thumb {
            background: #27272a;
            border-radius: 9999px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #3f3f46;
        }

        /* Subtle smooth animations */
        .hover-lift {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s, background-color 0.4s, box-shadow 0.4s;
        }
        .hover-lift:hover {
            transform: translateY(-4px) scale(1.01);
            border-color: rgba(255, 255, 255, 0.16);
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }
    </style>
</head>
<body class="antialiased min-h-screen relative flex flex-col justify-between font-sans selection:bg-zinc-800 selection:text-white">

    <!-- Subtle Ambient Top Background Pattern -->
    <div class="absolute top-0 left-0 w-full h-[800px] pointer-events-none overflow-hidden z-0">
        <!-- Elegant monochrome abstract visual lines in BG -->
        <div class="absolute right-[-10%] top-[-10%] w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] texture-sphere-large opacity-40 mix-blend-screen"></div>
        <div class="absolute left-[-5%] top-[20%] w-[350px] h-[350px] texture-sphere opacity-25 mix-blend-overlay"></div>
        <!-- Light gradient sweep from top center -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-white/[0.03] to-transparent blur-3xl rounded-full"></div>
    </div>

    <!-- MAIN PAGE CONTAINER (Max width matches typical luxury product dashboards) -->
    <div class="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-6 z-10 relative flex-grow">

        <!-- HEADER / NAVIGATION PILL -->
        <header class="glass-panel rounded-[24px] p-2.5 mb-6 flex items-center justify-between transition-all duration-300">
            <!-- Brand Logo with Pill Shape -->
            <a href="#" class="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-bold text-xs tracking-wider uppercase hover:opacity-90 transition">
                <span class="w-2.5 h-2.5 bg-black rounded-full animate-pulse"></span>
                Abstract Stock
            </a>

            <!-- Navigation Links -->
            <nav class="hidden md:flex items-center gap-1.5">
                <a href="#mockups" class="glass-pill px-4.5 py-2 text-xs font-medium tracking-wide text-zinc-300 rounded-full hover:text-white">Mockups</a>
                <a href="#textures" class="glass-pill px-4.5 py-2 text-xs font-medium tracking-wide text-zinc-300 rounded-full hover:text-white">3D Textures</a>
                <a href="#collections" class="glass-pill px-4.5 py-2 text-xs font-medium tracking-wide text-zinc-300 rounded-full hover:text-white">Vectors</a>
                <a href="#licensing" class="glass-pill px-4.5 py-2 text-xs font-medium tracking-wide text-zinc-300 rounded-full hover:text-white">License</a>
            </nav>

            <!-- CTA / Auth Action -->
            <div class="flex items-center gap-2">
                <button onclick="openPremiumModal()" class="glass-pill px-4.5 py-2 text-xs font-medium tracking-wide text-white rounded-full hidden sm:block">
                    Explore Assets
                </button>
                <a href="#signup" class="px-5 py-2 text-xs font-semibold tracking-wide text-zinc-900 bg-white hover:bg-zinc-200 transition-colors rounded-full shadow-lg">
                    Sign in
                </a>
            </div>
        </header>

        <!-- MAIN LAYOUT HERO / CONTAINER GRID -->
        <main class="space-y-6">

            <!-- HERO SECTION: Bold 3D Shapes Intro (Matches Reference Hero Container) -->
            <section class="glass-panel rounded-[32px] overflow-hidden p-8 lg:p-12 relative flex flex-col justify-between min-h-[480px] hover:border-zinc-800 transition-all duration-500 group">
                <!-- Background visual element embedded directly within the container, mimicking the abstract form -->
                <div class="absolute right-0 bottom-0 top-0 w-full lg:w-1/2 pointer-events-none overflow-hidden z-0">
                    <div class="absolute right-[-10%] md:right-[5%] lg:right-[-5%] bottom-[-15%] lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 w-[320px] sm:w-[450px] lg:w-[500px] h-[320px] sm:h-[450px] lg:h-[500px] texture-sphere-large transition-all duration-700 group-hover:scale-105"></div>
                    <!-- Soft gradient highlight behind the abstract element -->
                    <div class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/80 via-black/30 to-transparent z-10"></div>
                </div>

                <!-- Top Row Content -->
                <div class="flex justify-between items-start z-10 relative">
                    <div class="space-y-2">
                        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">
                            <span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                            Exclusive Release
                        </div>
                        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-lg leading-[1.1]">
                            3D shapes and <br><span class="text-zinc-400">textured shapes</span>
                        </h1>
                        <p class="text-sm text-zinc-400 font-medium">3D shapes / premium textured objects</p>
                    </div>

                    <!-- Small Promotional Tag (matching reference corner label style) -->
                    <span class="glass-pill px-4 py-1.5 text-[11px] font-semibold tracking-wider text-white uppercase rounded-full select-none bg-white/5 border-white/10 shadow-inner">
                        SALE 15%
                    </span>
                </div>

                <!-- Bottom Row Action Panel -->
                <div class="mt-20 lg:mt-32 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 z-10 relative">
                    <div class="flex items-center gap-3">
                        <button onclick="openPremiumModal()" class="px-7 py-3 bg-white text-zinc-900 hover:bg-zinc-200 font-semibold text-xs tracking-wider uppercase rounded-full shadow-xl transition duration-300 transform hover:-translate-y-0.5">
                            More
                        </button>
                        <a href="#mockups" class="glass-pill px-6 py-3 text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-white rounded-full">
                            Explore Assets
                        </a>
                    </div>
                    <!-- Secondary Context Meta -->
                    <p class="text-xs text-zinc-500 max-w-xs leading-relaxed font-medium">
                        Highly detailed organic 3D shapes meticulously crafted with ultra-high resolution procedural textures. Compatible with any design tool.
                    </p>
                </div>
            </section>

            <!-- INTERACTIVE QUICK FILTERS (Sleek UI element to browse the catalog) -->
            <div class="flex flex-wrap items-center justify-between gap-4 py-2 px-1">
                <div class="flex flex-wrap gap-2" id="filter-container">
                    <button onclick="filterAssets('all')" id="btn-all" class="px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all bg-white text-black">
                        All Assets
                    </button>
                    <button onclick="filterAssets('3d')" id="btn-3d" class="px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800">
                        3D Shapes
                    </button>
                    <button onclick="filterAssets('textures')" id="btn-textures" class="px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800">
                        Textures
                    </button>
                    <button onclick="filterAssets('mockups')" id="btn-mockups" class="px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800">
                        Mockups
                    </button>
                </div>
                <span class="text-xs text-zinc-500 font-mono hidden md:inline-block">Showing 8 premium assets</span>
            </div>

            <!-- THREE COLUMN DETAILED CARDS SECTION (Visual representation of features/mockups) -->
            <section class="grid grid-cols-1 md:grid-cols-3 gap-6" id="assets-grid">

                <!-- CARD 1: Textures for your projects (Matches Left Card Style) -->
                <article class="asset-card glass-panel rounded-[28px] overflow-hidden p-6 hover-lift flex flex-col justify-between min-h-[420px]" data-category="textures">
                    <!-- Top Info Header -->
                    <div class="space-y-2">
                        <h3 class="text-xl font-bold text-white tracking-tight leading-snug">
                            Textures for <br>your projects
                        </h3>
                        <p class="text-xs text-zinc-500 font-medium">Textures / 3D textures</p>
                    </div>

                    <!-- Centered/Embedded dynamic abstract geometry replicating the image texture -->
                    <div class="my-6 relative h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <div class="absolute inset-0 bg-gradient-to-b from-zinc-950 to-zinc-900 opacity-60 rounded-xl"></div>
                        <div class="w-32 h-32 texture-sphere opacity-90 relative z-10 transition-transform duration-500 hover:scale-110"></div>
                        <!-- Ambient backlights -->
                        <div class="absolute w-20 h-20 bg-white/5 blur-xl rounded-full"></div>
                    </div>

                    <!-- Bottom CTA Panel -->
                    <div class="flex items-center justify-between">
                        <button onclick="openPremiumModal('Textures Package')" class="glass-pill px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-white rounded-full">
                            More
                        </button>
                        <span class="text-xs text-zinc-500 font-mono font-medium">Vol. 04</span>
                    </div>
                </article>

                <!-- CARD 2: B-Mockups MacBook Pro (Matches Middle Orange Highlight Card) -->
                <article class="asset-card glass-panel rounded-[28px] overflow-hidden p-6 hover-lift flex flex-col justify-between min-h-[420px]" data-category="mockups">
                    <!-- Top Info Header -->
                    <div class="space-y-2">
                        <h3 class="text-xl font-bold text-white tracking-tight leading-snug">
                            B-Mockups: <br>MacBook 16 Pro
                        </h3>
                        <p class="text-xs text-zinc-500 font-medium">Main / Devices Mockups</p>
                    </div>

                    <!-- Mockup Visualization Area (With orange branding gradient as inspired by the reference image) -->
                    <div class="my-6 relative h-40 w-full overflow-hidden rounded-xl bg-zinc-950 flex items-center justify-center border border-zinc-800/80">
                        <!-- Textured backdrop -->
                        <div class="absolute inset-0 opacity-10 texture-waves-vertical"></div>
                        
                        <!-- Simplified ultra-modern abstract notebook art vector/HTML representation -->
                        <div class="relative w-44 h-24 bg-zinc-900 rounded-t-lg border border-zinc-700/50 p-1 shadow-2xl flex flex-col justify-between overflow-hidden">
                            <!-- Orange inner screen to mimic the color accent in the reference -->
                            <div class="w-full h-full bg-gradient-to-br from-[#FF5722] to-[#B71C1C] rounded-sm p-1.5 flex flex-col justify-between text-white relative">
                                <span class="text-[32px] font-black absolute right-1 bottom-1 opacity-15 leading-none select-none">B</span>
                                <div class="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
                                    <span class="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                                </div>
                                <div class="text-[7px] tracking-tight font-bold opacity-80 leading-none">MacBook Pro 16"</div>
                            </div>
                        </div>
                        <!-- Keyboard base of mock laptop -->
                        <div class="absolute bottom-[44px] w-48 h-1.5 bg-zinc-800 rounded-b-sm border-t border-zinc-600/30"></div>
                        
                        <!-- Ambient radial orange glow shadow -->
                        <div class="absolute w-32 h-32 bg-[#FF5722]/10 blur-2xl rounded-full"></div>
                    </div>

                    <!-- Bottom CTA Panel -->
                    <div class="flex items-center justify-between">
                        <button onclick="openPremiumModal('MacBook Pro Mockup')" class="glass-pill px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-white rounded-full">
                            More
                        </button>
                        <span class="text-xs text-zinc-500 font-mono font-medium">Device Vol. 12</span>
                    </div>
                </article>

                <!-- CARD 3: A-Mockups iPhone 14 Pro (Matches Right Card Style) -->
                <article class="asset-card glass-panel rounded-[28px] overflow-hidden p-6 hover-lift flex flex-col justify-between min-h-[420px]" data-category="mockups">
                    <!-- Top Info Header -->
                    <div class="space-y-2">
                        <h3 class="text-xl font-bold text-white tracking-tight leading-snug">
                            A-Mockups: <br>iPhone 14 Pro
                        </h3>
                        <p class="text-xs text-zinc-500 font-medium">Main / Devices Mockups</p>
                    </div>

                    <!-- Phone Mockup Graphic Viewport -->
                    <div class="my-6 relative h-40 w-full overflow-hidden rounded-xl bg-zinc-950 flex items-center justify-center border border-zinc-800/80">
                        <div class="absolute inset-0 opacity-10 texture-waves-vertical"></div>
                        
                        <!-- Realistic styled geometric Phone outline representation -->
                        <div class="relative w-20 h-36 bg-zinc-900 rounded-[24px] border-2 border-zinc-800 p-1 shadow-2xl flex flex-col overflow-hidden">
                            <div class="w-full h-full bg-[#111] rounded-[20px] p-2 flex flex-col justify-between border border-zinc-800/40 text-left">
                                <!-- Dynamic Island -->
                                <div class="w-8 h-2 bg-black rounded-full mx-auto"></div>
                                
                                <div class="space-y-1">
                                    <div class="text-[6px] text-zinc-600 font-semibold uppercase tracking-wider">Mockup Device</div>
                                    <div class="text-[8px] text-zinc-300 font-bold leading-tight">Ultra High <br>Resolution</div>
                                </div>
                                <div class="w-full h-[1px] bg-zinc-900"></div>
                                <div class="flex items-center justify-between text-[6px] text-zinc-500">
                                    <span>Phone 14</span>
                                    <span class="w-2 h-2 rounded-full bg-zinc-800"></span>
                                </div>
                            </div>
                        </div>

                        <!-- Secondary visual architectural background blocks mimicking the image styling -->
                        <div class="absolute bottom-[-10px] right-2 w-16 h-20 bg-zinc-900 border border-zinc-800/60 rounded-lg transform rotate-6 -z-10 opacity-60"></div>
                        <div class="absolute bottom-[-20px] left-2 w-16 h-20 bg-zinc-950 border border-zinc-900 rounded-lg transform -rotate-12 -z-10"></div>
                    </div>

                    <!-- Bottom CTA Panel -->
                    <div class="flex items-center justify-between">
                        <button onclick="openPremiumModal('iPhone Mockup')" class="glass-pill px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-white rounded-full">
                            More
                        </button>
                        <span class="text-xs text-zinc-500 font-mono font-medium">Device Vol. 02</span>
                    </div>
                </article>

            </section>

            <!-- DESIGN SYSTEMS INTRO (Sleek additional section expanding the premium brand vibe) -->
            <section class="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
                
                <!-- Large Left Feature Panel: High Detail Visual Showcase -->
                <div class="lg:col-span-8 glass-panel rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden group min-h-[400px]">
                    <!-- Background aesthetic gradient curves -->
                    <div class="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity">
                        <div class="absolute right-[-10%] top-1/2 -translate-y-1/2 w-80 h-80 texture-waves-vertical rounded-full scale-125 transform rotate-45 border border-white/10"></div>
                    </div>

                    <div>
                        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-[10px] uppercase tracking-widest text-zinc-400 font-semibold mb-4">
                            Premium Assets Portfolio
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white max-w-lg leading-tight">
                            Unlock unlimited creative possibilities with bespoke assets designed for high-end digital products.
                        </h2>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-zinc-900 mt-12">
                        <div class="space-y-1">
                            <span class="text-xs text-zinc-500 font-medium">Resolution</span>
                            <h4 class="text-xl font-bold text-white">8K Ultra-HD</h4>
                        </div>
                        <div class="space-y-1">
                            <span class="text-xs text-zinc-500 font-medium">Formats</span>
                            <h4 class="text-xl font-bold text-white">PSD, OBJ, BLEND</h4>
                        </div>
                        <div class="space-y-1">
                            <span class="text-xs text-zinc-500 font-medium">Usage license</span>
                            <h4 class="text-xl font-bold text-white">Commercial</h4>
                        </div>
                        <div class="space-y-1">
                            <span class="text-xs text-zinc-500 font-medium">Updates</span>
                            <h4 class="text-xl font-bold text-white">Weekly</h4>
                        </div>
                    </div>
                </div>

                <!-- Right Newsletter Sign-Up Box -->
                <div class="lg:col-span-4 glass-panel rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden glow-soft bg-zinc-950/80">
                    <div class="space-y-3">
                        <h3 class="text-lg font-bold text-white tracking-tight">Stay ahead of the curve</h3>
                        <p class="text-xs text-zinc-400 leading-relaxed">
                            Subscribe to receive premium weekly freebies, shape updates, and secret discount coupons straight to your inbox.
                        </p>
                    </div>

                    <!-- Interactive Styled Form Container -->
                    <form onsubmit="handleSubscribe(event)" class="space-y-3 mt-8">
                        <div class="space-y-1 relative">
                            <input type="email" required id="sub-email" placeholder="name@domain.com" 
                                class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition focus:ring-1 focus:ring-zinc-700" />
                        </div>
                        <button type="submit" class="w-full px-5 py-3 bg-white text-zinc-900 hover:bg-zinc-200 transition font-semibold text-xs uppercase tracking-wider rounded-xl shadow-lg">
                            Get Access Now
                        </button>
                    </form>

                    <!-- Success Message Alert inside card -->
                    <div id="sub-success-message" class="hidden text-xs text-emerald-400 mt-3 flex items-center gap-1.5">
                        <i data-lucide="check" class="w-3.5 h-3.5"></i>
                        Thank you! Welcome to the premium list.
                    </div>

                    <div class="pt-6 border-t border-zinc-900 mt-6 flex items-center justify-between text-[10px] text-zinc-500">
                        <span>No spam. Unsubscribe anytime.</span>
                        <i data-lucide="lock" class="w-3.5 h-3.5"></i>
                    </div>
                </div>
            </section>

            <!-- DESIGN DNA GRID & GRAPHIC ASSETS PREVIEW -->
            <section class="glass-panel rounded-[32px] overflow-hidden p-8" id="textures">
                <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h2 class="text-xl font-bold text-white tracking-tight">Curated Organic Asset Libraries</h2>
                        <p class="text-xs text-zinc-500 mt-1">Explore our signature dark-matter design style</p>
                    </div>
                    <span class="text-xs text-zinc-400 font-semibold bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
                        Version 2026 Ready
                    </span>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <!-- Library Card 1 -->
                    <div class="bg-zinc-950/60 border border-zinc-900 rounded-2xl p-4 hover:border-zinc-800 transition group cursor-pointer" onclick="openPremiumModal('Dark Matter Vol.1')">
                        <div class="aspect-square bg-zinc-900 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden">
                            <div class="absolute inset-0 opacity-10 texture-waves-vertical"></div>
                            <div class="w-16 h-16 rounded-full bg-zinc-800 border-4 border-zinc-700/50 group-hover:scale-105 transition-transform"></div>
                        </div>
                        <div class="text-xs font-bold text-zinc-200">Dark Matter Vol.1</div>
                        <div class="text-[10px] text-zinc-500 mt-0.5">32 High-res shapes</div>
                    </div>

                    <!-- Library Card 2 -->
                    <div class="bg-zinc-950/60 border border-zinc-900 rounded-2xl p-4 hover:border-zinc-800 transition group cursor-pointer" onclick="openPremiumModal('Procedural Glass Shapes')">
                        <div class="aspect-square bg-zinc-900 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden">
                            <div class="absolute inset-0 opacity-10 texture-waves-vertical"></div>
                            <div class="w-16 h-16 rounded-lg bg-zinc-800/40 border-2 border-zinc-700/40 rotate-12 group-hover:scale-105 transition-transform"></div>
                        </div>
                        <div class="text-xs font-bold text-zinc-200">Procedural Glass Shapes</div>
                        <div class="text-[10px] text-zinc-500 mt-0.5">18 Realistic Models</div>
                    </div>

                    <!-- Library Card 3 -->
                    <div class="bg-zinc-950/60 border border-zinc-900 rounded-2xl p-4 hover:border-zinc-800 transition group cursor-pointer" onclick="openPremiumModal('Monochromatic Noise Gradients')">
                        <div class="aspect-square bg-zinc-900 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden">
                            <div class="absolute inset-0 opacity-10 texture-waves-vertical"></div>
                            <div class="w-16 h-16 texture-sphere scale-75 group-hover:scale-90 transition-transform"></div>
                        </div>
                        <div class="text-xs font-bold text-zinc-200">Noise Gradients</div>
                        <div class="text-[10px] text-zinc-500 mt-0.5">40 High-Detail Gradients</div>
                    </div>

                    <!-- Library Card 4 -->
                    <div class="bg-zinc-950/60 border border-zinc-900 rounded-2xl p-4 hover:border-zinc-800 transition group cursor-pointer" onclick="openPremiumModal('Geometric Slices & Splines')">
                        <div class="aspect-square bg-zinc-900 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden">
                            <div class="absolute inset-0 opacity-10 texture-waves-vertical"></div>
                            <div class="w-12 h-16 bg-zinc-800 border border-zinc-700/60 rounded-full transform -rotate-45 group-hover:rotate-0 transition-transform"></div>
                        </div>
                        <div class="text-xs font-bold text-zinc-200">Geometric Splines</div>
                        <div class="text-[10px] text-zinc-500 mt-0.5">25 Vectors</div>
                    </div>
                </div>
            </section>

        </main>

        <!-- FOOTER & BRAND LEGAL (Matching bottom bar in the reference) -->
        <footer class="mt-8 mb-4">
            <div class="glass-panel rounded-[24px] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                
                <!-- Legal Policy Links -->
                <div class="flex items-center gap-4 text-xs font-medium text-zinc-400">
                    <a href="#privacy" onclick="alertNotification('Privacy policy loaded.')" class="hover:text-white transition">Privacy Policy</a>
                    <span class="text-zinc-700 select-none">|</span>
                    <a href="#licensing" onclick="alertNotification('License agreement loaded.')" class="hover:text-white transition">License Terms</a>
                </div>

                <!-- Copyright Signature (matching the centered look) -->
                <div class="text-xs text-zinc-500 font-medium">
                    © All rights reserved <span class="text-zinc-400 font-semibold" id="copyright-year">2026</span> Abstract Stock Inc.
                </div>

                <!-- Social Icons Panel (Sleek circles aligned matching reference corner) -->
                <div class="flex items-center gap-2">
                    <a href="#" class="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition">
                        <i data-lucide="instagram" class="w-4 h-4"></i>
                    </a>
                    <a href="#" class="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition">
                        <i data-lucide="twitter" class="w-4 h-4"></i>
                    </a>
                    <a href="#" class="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition">
                        <i data-lucide="facebook" class="w-4 h-4"></i>
                    </a>
                </div>

            </div>
        </footer>

    </div>

    <!-- EXQUISITE MICRO INTERACTIVE LIGHTBOX MODAL (Zero External Alerts) -->
    <div id="premium-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl hidden p-4 transition-all duration-300">
        <div class="w-full max-w-md glass-panel rounded-[32px] overflow-hidden p-6 relative shadow-2xl border border-white/10 glow-soft">
            
            <!-- Close Trigger -->
            <button onclick="closePremiumModal()" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition">
                <i data-lucide="x" class="w-4 h-4"></i>
            </button>

            <!-- Modal Content Body -->
            <div class="space-y-4 pt-4">
                <div class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <i data-lucide="sparkles" class="w-6 h-6 text-zinc-200"></i>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-white tracking-tight" id="modal-title">Premium Asset Access</h3>
                    <p class="text-xs text-zinc-400 mt-1" id="modal-desc">Configure and instantly download your desired monochromatic design resource package.</p>
                </div>

                <!-- Custom Radio Selectors for Pricing and Formats -->
                <div class="space-y-2 mt-4">
                    <label class="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Select Format</label>
                    <div class="grid grid-cols-3 gap-2">
                        <button onclick="setModalFormat('blend')" id="fmt-blend" class="py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-xs font-semibold text-white transition-all">
                             Blender 3D
                        </button>
                        <button onclick="setModalFormat('psd')" id="fmt-psd" class="py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-xs font-semibold text-zinc-400 hover:text-white transition-all">
                             Photoshop
                        </button>
                        <button onclick="setModalFormat('figma')" id="fmt-figma" class="py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-xs font-semibold text-zinc-400 hover:text-white transition-all">
                             Figma App
                        </button>
                    </div>
                </div>

                <div class="bg-zinc-950 rounded-2xl p-4 border border-zinc-900 flex items-center justify-between mt-4">
                    <div class="space-y-0.5">
                        <div class="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">License Model</div>
                        <div class="text-xs font-bold text-white">Commercial Royalty-Free</div>
                    </div>
                    <div class="text-right">
                        <div class="text-[10px] line-through text-zinc-600">$18.00</div>
                        <div class="text-sm font-bold text-white">$15.30 <span class="text-[10px] text-emerald-400 font-bold">(-15%)</span></div>
                    </div>
                </div>

                <!-- Bottom Button Block -->
                <div class="pt-4 grid grid-cols-2 gap-3">
                    <button onclick="closePremiumModal()" class="py-3 bg-zinc-900 hover:bg-zinc-800 transition text-zinc-300 hover:text-white font-semibold text-xs tracking-wider uppercase rounded-xl">
                        Cancel
                    </button>
                    <button onclick="handlePurchase()" class="py-3 bg-white text-zinc-900 hover:bg-zinc-200 transition font-semibold text-xs tracking-wider uppercase rounded-xl shadow-lg flex items-center justify-center gap-2">
                        <i data-lucide="download" class="w-3.5 h-3.5"></i>
                        Download Now
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- CUSTOM FLOATING TOAST NOTIFICATION CONTAINER (Replacement for standard alerts) -->
    <div id="toast-notification" class="fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 transition-all duration-500 pointer-events-none">
        <div class="glass-panel rounded-2xl p-4 flex items-center gap-3 shadow-2xl max-w-sm border-white/10">
            <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white" id="toast-icon-container">
                <i data-lucide="bell" class="w-4 h-4"></i>
            </div>
            <div>
                <p class="text-xs font-bold text-white" id="toast-title">Notification</p>
                <p class="text-[11px] text-zinc-400 mt-0.5" id="toast-desc">Action was successful.</p>
            </div>
        </div>
    </div>

    <!-- INITIALIZATION & INTERACTIVE JAVASCRIPT LOGIC -->
    <script>
        // Update copyright year programmatically to maintain accuracy
        document.getElementById('copyright-year').textContent = new Date().getFullYear();

        // Initialize Lucide icons
        lucide.createIcons();

        // Selected Format State
        let selectedFormat = 'blend';

        // Filter Functionality for the asset library
        function filterAssets(category) {
            const cards = document.querySelectorAll('.asset-card');
            const buttons = document.querySelectorAll('#filter-container button');

            // Reset active button states
            buttons.forEach(btn => {
                btn.className = "px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800";
            });

            // Set current active button style
            const activeBtn = document.getElementById(`btn-${category}`);
            if (activeBtn) {
                activeBtn.className = "px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all bg-white text-black";
            }

            // Animate card transitions
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px) scale(0.98)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });

            alertNotification("Switched view", `Displaying category: ${category}`);
        }

        // Custom Notification Controller (Avoids standard alert blockages)
        function alertNotification(title, description = "Operation completed successfully.", type = "success") {
            const toast = document.getElementById('toast-notification');
            const toastTitle = document.getElementById('toast-title');
            const toastDesc = document.getElementById('toast-desc');
            const toastIcon = document.getElementById('toast-icon-container');

            toastTitle.textContent = title;
            toastDesc.textContent = description;

            // Change icon indicator
            if (type === "success") {
                toastIcon.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i>`;
            } else {
                toastIcon.innerHTML = `<i data-lucide="info" class="w-4 h-4 text-white"></i>`;
            }
            lucide.createIcons();

            // Animate slide up
            toast.classList.remove('translate-y-20', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');

            // Dismiss automatically
            setTimeout(() => {
                toast.classList.remove('translate-y-0', 'opacity-100');
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3500);
        }

        // Newsletter subscription handler
        function handleSubscribe(event) {
            event.preventDefault();
            const emailInput = document.getElementById('sub-email');
            const successText = document.getElementById('sub-success-message');

            if (emailInput.value) {
                successText.classList.remove('hidden');
                alertNotification("Subscription active", `Subscribed with ${emailInput.value}`);
                emailInput.value = '';
                
                setTimeout(() => {
                    successText.classList.add('hidden');
                }, 5000);
            }
        }

        // Modal Management System
        function openPremiumModal(title = "Bespoke Abstract Asset") {
            const modal = document.getElementById('premium-modal');
            const modalTitle = document.getElementById('modal-title');
            
            modalTitle.textContent = title;
            
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Lock background scrolling
        }

        function closePremiumModal() {
            const modal = document.getElementById('premium-modal');
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Release scroll
        }

        function setModalFormat(format) {
            selectedFormat = format;
            const formats = ['blend', 'psd', 'figma'];
            
            formats.forEach(f => {
                const button = document.getElementById(`fmt-${f}`);
                if (f === format) {
                    button.className = "py-2.5 rounded-xl border border-zinc-700 bg-zinc-850 text-xs font-semibold text-white transition-all bg-zinc-800";
                } else {
                    button.className = "py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-xs font-semibold text-zinc-400 hover:text-white transition-all";
                }
            });
        }

        function handlePurchase() {
            closePremiumModal();
            alertNotification("Downloading Archive", `Preparing package configured for ${selectedFormat.toUpperCase()} format.`, "success");
        }

        // Close Modal if user clicks on Backdrop
        document.getElementById('premium-modal').addEventListener('click', function(event) {
            if (event.target === this) {
                closePremiumModal();
            }
        });
    </script>
</body>
</html>
6
import React, { useState, useEffect } from 'react';

// Headphone Color Assets defined as highly detailed inline SVGs to match the premium, tactile feel of the Grado-style headphone in the prompt
const HeadphoneSVG = ({ primaryColor, accentColor, grillColor }) => {
  return (
    <svg viewBox="0 0 500 500" className="w-full h-full max-w-[450px] drop-shadow-2xl transition-all duration-500 transform hover:scale-105">
      {/* Headband Arch */}
      <path 
        d="M 110,250 C 110,100 390,100 390,250" 
        fill="none" 
        stroke="#1a1a1a" 
        strokeWidth="18" 
        strokeLinecap="round" 
      />
      {/* Padded Leather Stitching details on headband */}
      <path 
        d="M 118,245 C 118,108 382,108 382,245" 
        fill="none" 
        stroke="#2c2c2c" 
        strokeWidth="12" 
        strokeDasharray="4 4" 
        strokeLinecap="round"
      />
      
      {/* Left Adjusting Rod and Support Pivot */}
      <line x1="120" y1="210" x2="110" y2="300" stroke="#7a7a7a" strokeWidth="6" strokeLinecap="round" />
      <rect x="115" y="210" width="10" height="25" rx="2" fill="#111" />
      <rect x="105" y="270" width="10" height="20" rx="2" fill="#111" />
      
      {/* Right Adjusting Rod and Support Pivot */}
      <line x1="380" y1="210" x2="390" y2="300" stroke="#7a7a7a" strokeWidth="6" strokeLinecap="round" />
      <rect x="375" y="210" width="10" height="25" rx="2" fill="#111" />
      <rect x="385" y="270" width="10" height="20" rx="2" fill="#111" />

      {/* Connection Yokes */}
      {/* Left Yoke */}
      <path d="M 110,290 C 80,310 80,390 110,410" fill="none" stroke="#222" strokeWidth="8" strokeLinecap="round" />
      {/* Right Yoke */}
      <path d="M 390,290 C 420,310 420,390 390,410" fill="none" stroke="#222" strokeWidth="8" strokeLinecap="round" />

      {/* Driver Housing - Outer Left */}
      <g transform="translate(110, 350) rotate(-10)">
        {/* Large cushion foam */}
        <ellipse cx="0" cy="0" rx="42" ry="55" fill="#252525" />
        <ellipse cx="-5" cy="0" rx="35" ry="48" fill="#1c1c1c" />
        {/* Outer Plastic Cup */}
        <path d="M -10 -35 L 20 -35 L 20 35 L -10 35 Z" fill="#181818" stroke="#2a2a2a" strokeWidth="2" />
        {/* Color Accent Ring */}
        <rect x="15" y="-30" width="6" height="60" rx="1" fill={accentColor} />
        {/* Metal Grill Mesh */}
        <rect x="21" y="-22" width="4" height="44" fill={grillColor} />
        {/* Text branding ring (simulating the "PRESTIGE SERIES GRADO LABS" texture) */}
        <line x1="-15" y1="0" x2="15" y2="0" stroke="#333" strokeWidth="1" />
      </g>

      {/* Driver Housing - Outer Right */}
      <g transform="translate(390, 350) rotate(10)">
        {/* Large cushion foam */}
        <ellipse cx="0" cy="0" rx="42" ry="55" fill="#252525" />
        <ellipse cx="5" cy="0" rx="35" ry="48" fill="#1c1c1c" />
        {/* Outer Plastic Cup */}
        <path d="M 10 -35 L -20 -35 L -20 35 L 10 35 Z" fill="#181818" stroke="#2a2a2a" strokeWidth="2" />
        {/* Color Accent Ring */}
        <rect x="-21" y="-30" width="6" height="60" rx="1" fill={accentColor} />
        {/* Metal Grill Mesh */}
        <rect x="-25" y="-22" width="4" height="44" fill={grillColor} />
        {/* Inner core line detail */}
        <line x1="-15" y1="0" x2="15" y2="0" stroke="#333" strokeWidth="1" />
      </g>

      {/* Premium braided cords draping down */}
      <path d="M 110,395 C 120,440 160,490 230,495" fill="none" stroke="#1c1c1c" strokeWidth="5" strokeLinecap="round" />
      <path d="M 390,395 C 380,440 340,490 270,495" fill="none" stroke="#1c1c1c" strokeWidth="5" strokeLinecap="round" />
      {/* Main cable merger */}
      <line x1="250" y1="495" x2="250" y2="520" stroke="#111" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
};

export default function App() {
  const [selectedColor, setSelectedColor] = useState('BLACK');
  const [cartCount, setCartCount] = useState(0);
  const [activeTab, setActiveTab] = useState('SPECS');
  const [currentHz, setCurrentHz] = useState(1000);
  const [dbGain, setDbGain] = useState(1.2);
  const [toastMessage, setToastMessage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Trigger quick notification
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleOrder = () => {
    setCartCount(prev => prev + 1);
    triggerToast(`Added 1x Prestige SR80 [${selectedColor} Edition] to your cart.`);
  };

  // Color config matching high industrial design fidelity
  const colorSchemes = {
    BLACK: {
      primary: '#1c1c1c',
      accent: '#353535',
      grill: '#555555',
      desc: 'Deep carbon finish with matte black poly-composite outer ring.',
      price: '$345'
    },
    SILVER: {
      primary: '#d1d5db',
      accent: '#9ca3af',
      grill: '#e5e7eb',
      desc: 'Machine-brushed aerospace aluminum with steel micro-weave grill.',
      price: '$385'
    },
    GOLD: {
      primary: '#d97706',
      accent: '#f59e0b',
      grill: '#fef3c7',
      desc: 'Vintage brass core plating with sandblasted anodized hardware.',
      price: '$420'
    },
    WHITE: {
      primary: '#f9fafb',
      accent: '#e5e7eb',
      grill: '#ffffff',
      desc: 'Architectural pristine white composite with pure silver alloy accenting.',
      price: '$365'
    }
  };

  const currentTheme = colorSchemes[selectedColor];

  // Frequency Graph calculation for raw tactile audiophile response preview
  const getGraphY = (hz) => {
    // Generates a mock authentic open-back frequency curve
    const logHz = Math.log10(hz);
    const minLog = Math.log10(20);
    const maxLog = Math.log10(20000);
    const pct = (logHz - minLog) / (maxLog - minLog);
    
    // Natural curve: warm bass roll-off, extremely flat mid-range, gentle presence peak at 2-5kHz, and open airy highs
    let response = Math.sin(pct * Math.PI * 2.5) * 4;
    if (hz < 80) response -= (80 - hz) * 0.15; // sub-bass roll off
    if (hz > 2000 && hz < 6000) response += 3.5; // sparkle peak
    if (hz > 15000) response -= 6.0; // extreme air drop-off
    
    // Add real-time custom user interactive EQ modifier based on slider state
    const userInfluence = Math.exp(-Math.pow(Math.log10(hz) - Math.log10(currentHz), 2) / 0.1) * dbGain * 8;
    return 100 - (response * 5 + 50 + userInfluence);
  };

  // Generate 50 points for the SVG frequency graph path
  const graphPoints = [];
  const hzPoints = [20, 40, 70, 100, 200, 400, 700, 1000, 2000, 4000, 7000, 10000, 15000, 20000];
  for (let i = 0; i <= 60; i++) {
    const minLog = Math.log10(20);
    const maxLog = Math.log10(20000);
    const currentLog = minLog + (i / 60) * (maxLog - minLog);
    const hzVal = Math.pow(10, currentLog);
    const x = (i / 60) * 100;
    const y = getGraphY(hzVal);
    graphPoints.push(`${x},${y}`);
  }
  const pathData = `M ${graphPoints.join(' L ')}`;

  return (
    <div className="min-h-screen bg-[#e5e5e5] text-[#1c1c1c] font-sans antialiased relative overflow-x-hidden selection:bg-[#1c1c1c] selection:text-[#e5e5e5] pb-24 transition-colors duration-500">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#1c1c1c] text-[#e5e5e5] py-4 px-6 rounded-none border border-neutral-700 shadow-2xl flex items-center space-x-4 max-w-sm animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-mono text-xs tracking-wider uppercase">{toastMessage}</span>
        </div>
      )}

      {/* Grid Pattern Background Accent to match premium architectural aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbdbdb_1px,transparent_1px),linear-gradient(to_bottom,#dbdbdb_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40"></div>

      {/* HEADER / NAVIGATION */}
      <header className="relative z-40 max-w-7xl mx-auto px-6 pt-8 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div className="flex flex-col">
          <span className="font-mono text-lg tracking-[0.3em] font-extrabold text-[#1a1a1a]">GRADO</span>
          <span className="font-mono text-[9px] tracking-[0.5em] text-neutral-500 uppercase -mt-1">LABS / EST 1953</span>
        </div>

        {/* Center Nav Link (Hidden on small screens) */}
        <nav className="hidden md:flex space-x-12 font-mono text-xs tracking-[0.2em] font-medium text-neutral-600">
          <a href="#heritage" className="hover:text-black transition-colors">HERITAGE</a>
          <a href="#acoustics" className="hover:text-black transition-colors">ACOUSTICS</a>
          <a href="#engineering" className="hover:text-black transition-colors">ENGINEERING</a>
          <a href="#specs" className="hover:text-black transition-colors">SPECIFICATION</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-8">
          {/* Cart Icon */}
          <button 
            onClick={() => triggerToast(`Your cart contains ${cartCount} premium audio items.`)}
            className="font-mono text-xs tracking-[0.2em] uppercase flex items-center group transition-colors hover:text-neutral-500"
          >
            <span>CART</span>
            <span className="ml-2 px-1.5 py-0.5 bg-[#1c1c1c] text-[#e5e5e5] text-[10px] font-bold transition-transform duration-300 group-hover:scale-110">
              [{cartCount}]
            </span>
          </button>

          {/* Menu Hamburger */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between w-6 h-3 group cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="h-[1.5px] w-full bg-[#1c1c1c] transition-transform duration-300 group-hover:translate-y-[1px]"></span>
            <span className="h-[1.5px] w-2/3 self-end bg-[#1c1c1c] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#e5e5e5]/98 z-40 flex flex-col justify-center items-center space-y-8 font-mono tracking-[0.3em] text-lg animate-fade-in">
          <button 
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-6 font-mono text-xs tracking-widest border border-neutral-400 px-4 py-2 hover:bg-[#1c1c1c] hover:text-[#e5e5e5] transition-all"
          >
            CLOSE [X]
          </button>
          <a href="#heritage" onClick={() => setMenuOpen(false)} className="hover:text-neutral-500 transition-colors">HERITAGE</a>
          <a href="#acoustics" onClick={() => setMenuOpen(false)} className="hover:text-neutral-500 transition-colors">ACOUSTICS</a>
          <a href="#engineering" onClick={() => setMenuOpen(false)} className="hover:text-neutral-500 transition-colors">ENGINEERING</a>
          <a href="#specs" onClick={() => setMenuOpen(false)} className="hover:text-neutral-500 transition-colors">SPECIFICATION</a>
          <div className="pt-8 border-t border-neutral-300 w-48 text-center">
            <span className="text-xs text-neutral-400 tracking-wider">PRESTIGE SERIES</span>
          </div>
        </div>
      )}

      {/* HERO SECTION - RECREATING THE EXACT DESIGN BALANCE OF THE PROMPT IMAGE */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-8 mt-4 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[80vh]">
        
        {/* Left Interactive Headphone Stage (Takes 7 Cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center items-center relative py-12 lg:py-4">
          
          {/* HUGE Backplate "PRESTIGE" Typography matching the design weight */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
            <h1 className="text-[12vw] lg:text-[14vw] font-black tracking-[-0.05em] text-[#cacaca]/65 font-sans leading-none uppercase text-center w-full">
              PRESTIGE
            </h1>
          </div>

          {/* Render Active Color Config SVG */}
          <div className="relative z-10 w-full flex justify-center items-center">
            <HeadphoneSVG 
              primaryColor={currentTheme.primary} 
              accentColor={currentTheme.accent} 
              grillColor={currentTheme.grill} 
            />
          </div>

          {/* Subtitle Badge overlay under headphone */}
          <div className="absolute bottom-2 lg:bottom-12 left-6 z-20 font-mono text-[10px] tracking-[0.3em] text-neutral-500 hidden sm:block">
            HAND-ASSEMBLED IN BROOKLYN, NY
          </div>
        </div>

        {/* Right Interface details (Takes 5 Cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-12 lg:space-y-0 lg:py-16 relative z-20">
          
          {/* Top Detail: Dynamic Specs Grid */}
          <div>
            <div className="flex space-x-4 border-b border-neutral-300 pb-2 mb-6">
              <button 
                onClick={() => setActiveTab('SPECS')} 
                className={`font-mono text-xs tracking-widest pb-1 transition-all ${activeTab === 'SPECS' ? 'border-b-2 border-[#1c1c1c] text-[#1c1c1c] font-bold' : 'text-neutral-400'}`}
              >
                SPECS
              </button>
              <button 
                onClick={() => setActiveTab('SIGNATURE')} 
                className={`font-mono text-xs tracking-widest pb-1 transition-all ${activeTab === 'SIGNATURE' ? 'border-b-2 border-[#1c1c1c] text-[#1c1c1c] font-bold' : 'text-neutral-400'}`}
              >
                SOUND STAGE
              </button>
            </div>

            {activeTab === 'SPECS' ? (
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[10px] md:text-xs font-mono text-neutral-600 tracking-wider">
                <div>
                  <span className="block font-bold text-neutral-400 uppercase text-[9px] mb-1">PLUG TYPE</span>
                  <span className="text-[#1c1c1c] font-medium uppercase">3.5MM GOLD PLATED GOLD-ALLOY</span>
                </div>
                <div>
                  <span className="block font-bold text-neutral-400 uppercase text-[9px] mb-1">COUPLING</span>
                  <span className="text-[#1c1c1c] font-medium uppercase">AROUND EAR COUPLING</span>
                </div>
                <div>
                  <span className="block font-bold text-neutral-400 uppercase text-[9px] mb-1">HEADBAND</span>
                  <span className="text-[#1c1c1c] font-medium uppercase">PADDED LEATHERETTE HEADBAND</span>
                </div>
                <div>
                  <span className="block font-bold text-neutral-400 uppercase text-[9px] mb-1">TRANSDUCER</span>
                  <span className="text-[#1c1c1c] font-medium uppercase">DYNAMIC TRANSDUCER PRINCIPLE</span>
                </div>
              </div>
            ) : (
              <div className="text-[10px] md:text-xs font-mono text-neutral-600 tracking-wider space-y-2">
                <p className="uppercase leading-relaxed">
                  Engineered with an open-back design resulting in zero back-wave pressure distortion. 
                  Experience an expansive, wide-imaging stereo field with signature organic warmth.
                </p>
                <div className="pt-2 flex items-center space-x-4">
                  <span className="px-2 py-0.5 border border-neutral-400 text-[9px]">SENSITIVITY: 99.8 dB</span>
                  <span className="px-2 py-0.5 border border-neutral-400 text-[9px]">NOMINAL IMPEDANCE: 38 OHMS</span>
                </div>
              </div>
            )}
          </div>

          {/* Center Info: Pricing and Order Call-to-Action */}
          <div className="space-y-6">
            <div className="flex justify-between items-baseline border-t border-neutral-300 pt-6">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-400 uppercase">THE PRESTIGE SERIES</span>
                <span className="font-mono text-2xl font-light text-[#1c1c1c] mt-1">{currentTheme.price}</span>
              </div>
              
              {/* Retro Industrial Styled Order Button */}
              <button 
                onClick={handleOrder}
                className="border border-[#1c1c1c] bg-[#e5e5e5] text-[#1c1c1c] font-mono text-xs tracking-[0.25em] py-3 px-8 uppercase hover:bg-[#1c1c1c] hover:text-[#e5e5e5] transition-all duration-300 shadow-[2px_2px_0px_#1c1c1c] active:translate-y-0.5 active:shadow-[1px_1px_0px_#1c1c1c] select-none"
              >
                ORDER NOW
              </button>
            </div>
            
            <p className="font-mono text-[11px] text-neutral-500 tracking-wider leading-relaxed lowercase">
              * {currentTheme.desc} hand-tuned and calibrated dynamic drivers matched to within .05dB tolerance level.
            </p>
          </div>

          {/* Color Palette Selector Tick Marks (Recreating the visual accent from original prompt) */}
          <div className="pt-6 border-t border-neutral-300">
            <div className="flex flex-wrap items-center justify-start gap-y-2 font-mono text-[10px] tracking-[0.25em] text-neutral-400">
              <span className="mr-3 text-neutral-500 font-bold uppercase">FINISH |</span>
              {Object.keys(colorSchemes).map((color, index, arr) => (
                <button
                  key={color}
                  onClick={() => {
                    setSelectedColor(color);
                    triggerToast(`Chose dynamic finish: ${color}`);
                  }}
                  className={`px-3 py-1 transition-all flex items-center space-x-1 ${selectedColor === color ? 'text-[#1c1c1c] font-bold underline underline-offset-4 decoration-2' : 'hover:text-[#1c1c1c]'}`}
                >
                  <span>{color}</span>
                  {index < arr.length - 1 && <span className="text-neutral-300 ml-3">|</span>}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* REACTION & PERFORMANCE SECTION (Interactive Sound Laboratory) */}
      <section id="acoustics" className="max-w-7xl mx-auto px-6 mt-24 pt-24 border-t border-neutral-300/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-4 space-y-6">
            <span className="font-mono text-xs tracking-[0.3em] text-neutral-400 uppercase">ACOUSTICS LAB</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1c1c1c] uppercase leading-none">
              HARMONIC RESONANCE GRAPH
            </h2>
            <p className="font-mono text-xs text-neutral-600 tracking-wider leading-relaxed">
              Interact with our driver response modeler below. Drag the frequency focus or adjust the resonance amplification to visualize the absolute acoustic clarity in raw decibels.
            </p>

            {/* Tactile Control Sliders */}
            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <div>
                <div className="flex justify-between font-mono text-[10px] tracking-wider mb-2 text-neutral-500 uppercase">
                  <span>Target Frequency</span>
                  <span className="text-black font-semibold">{currentHz} Hz</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="20000" 
                  step="10"
                  value={currentHz}
                  onChange={(e) => setCurrentHz(Number(e.target.value))}
                  className="w-full accent-[#1c1c1c] cursor-pointer h-1 bg-neutral-300 rounded-none appearance-none"
                />
              </div>

              <div>
                <div className="flex justify-between font-mono text-[10px] tracking-wider mb-2 text-neutral-500 uppercase">
                  <span>Acoustic Gain Shift</span>
                  <span className="text-black font-semibold">{dbGain > 0 ? `+${dbGain.toFixed(1)}` : dbGain.toFixed(1)} dB</span>
                </div>
                <input 
                  type="range" 
                  min="-2" 
                  max="4" 
                  step="0.1"
                  value={dbGain}
                  onChange={(e) => setDbGain(Number(e.target.value))}
                  className="w-full accent-[#1c1c1c] cursor-pointer h-1 bg-neutral-300 rounded-none appearance-none"
                />
              </div>
            </div>
          </div>

          {/* Dynamic SVG Audio Graph Display */}
          <div className="lg:col-span-8 bg-[#dedede] border border-neutral-300 p-6 md:p-8 relative shadow-sm">
            {/* Grid Coordinates Lines for the Audio graph */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 pointer-events-none opacity-20">
              <div className="border-r border-b border-neutral-600"></div>
              <div className="border-r border-b border-neutral-600"></div>
              <div className="border-r border-b border-neutral-600"></div>
              <div className="border-b border-neutral-600"></div>
              <div className="border-r border-b border-neutral-600"></div>
              <div className="border-r border-b border-neutral-600"></div>
              <div className="border-r border-b border-neutral-600"></div>
              <div className="border-b border-neutral-600"></div>
              <div className="border-r border-neutral-600"></div>
              <div className="border-r border-neutral-600"></div>
              <div className="border-r border-neutral-600"></div>
              <div></div>
            </div>

            {/* Decibel Indicators (Y-Axis) */}
            <div className="absolute left-2 top-2 bottom-2 flex flex-col justify-between font-mono text-[9px] text-neutral-500 select-none z-10">
              <span>+18dB</span>
              <span>+0dB</span>
              <span>-18dB</span>
            </div>

            {/* Frequency Indicators (X-Axis) */}
            <div className="absolute left-8 right-4 bottom-2 flex justify-between font-mono text-[9px] text-neutral-500 select-none z-10">
              <span>20Hz</span>
              <span>200Hz</span>
              <span>2kHz</span>
              <span>20kHz</span>
            </div>

            {/* Visualizer Plot Frame */}
            <div className="h-64 relative flex items-center justify-center">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Under-graph solid gradient shading to represent warmth */}
                <path
                  d={`${pathData} L 100,100 L 0,100 Z`}
                  fill="url(#graph-grad)"
                  className="opacity-15 transition-all duration-300"
                />
                
                {/* Flat standard reference curve */}
                <line x1="0" y1="50" x2="100" y2="50" stroke="#a3a3a3" strokeDasharray="3 3" strokeWidth="0.5" />

                {/* Simulated Real-time Audio wave response path */}
                <path
                  d={pathData}
                  fill="none"
                  stroke="#1c1c1c"
                  strokeWidth="2"
                  className="transition-all duration-300 ease-out"
                />

                {/* Highlight Point Indicator for currently targeted Hz */}
                <circle
                  cx={`${(Math.log10(currentHz) - Math.log10(20)) / (Math.log10(20000) - Math.log10(20)) * 100}`}
                  cy={getGraphY(currentHz)}
                  r="4"
                  fill="#1c1c1c"
                  className="transition-all duration-300"
                />

                {/* Gradients */}
                <defs>
                  <linearGradient id="graph-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1c1c1c" />
                    <stop offset="100%" stopColor="#e5e5e5" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Realtime Audio Laboratory Technical Meta Readouts */}
            <div className="mt-4 pt-4 border-t border-neutral-300/80 flex flex-wrap justify-between text-[10px] font-mono text-neutral-500 gap-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                <span>OPEN-BACK AIR FLOW SIMULATOR: STABLE</span>
              </div>
              <div className="flex space-x-6">
                <span>MID-RANGE FLATNESS: ±0.15dB</span>
                <span>CHAMBER VOL: 16.4cc</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DETAILED FEATURES / ENGINEERING BREAKDOWN SECTION */}
      <section id="engineering" className="max-w-7xl mx-auto px-6 mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 pb-4 mb-16">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-[0.3em] text-neutral-400 uppercase">ENGINEERING PHILOSOPHY</span>
            <h2 className="text-4xl font-black tracking-tight text-[#1c1c1c] uppercase leading-none">
              INSIDE THE ACOUSTIC CORE
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-500 tracking-wider max-w-md mt-4 md:mt-0 lowercase">
            crafted with purpose. each generation of our prestige series drivers brings enhanced voice coil geometry and reduced magnetic distortion.
          </p>
        </div>

        {/* Feature Cards Grid (Custom Industrial-style Box Containers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Hand-Cured Polymer Housing */}
          <div className="border border-neutral-300 bg-[#e0e0e0] p-8 flex flex-col justify-between hover:border-[#1c1c1c] transition-all group duration-300">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-mono text-2xl font-light text-neutral-400">01</span>
                <span className="font-mono text-[9px] tracking-widest bg-[#1c1c1c] text-[#e5e5e5] px-2 py-0.5">STRUCTURAL</span>
              </div>
              <h3 className="font-mono text-base font-bold tracking-wider uppercase text-[#1c1c1c]">
                Poly-Composite Air Chamber
              </h3>
              <p className="font-mono text-xs text-neutral-600 tracking-wider leading-relaxed lowercase">
                utilizing high density polycarbonate polymers, the chassis is cured to resist transient micro-vibrations, removing harsh high frequency resonance or unwanted structural ring-back.
              </p>
            </div>
            <div className="pt-8 border-t border-neutral-200 mt-12 flex justify-between items-center text-xs font-mono">
              <span className="text-neutral-400 uppercase">Resonator Level</span>
              <span className="text-[#1c1c1c] font-bold">0.02% Max</span>
            </div>
          </div>

          {/* Card 2: De-Stressed Copper Voice Coils */}
          <div className="border border-neutral-300 bg-[#e0e0e0] p-8 flex flex-col justify-between hover:border-[#1c1c1c] transition-all group duration-300">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-mono text-2xl font-light text-neutral-400">02</span>
                <span className="font-mono text-[9px] tracking-widest bg-[#1c1c1c] text-[#e5e5e5] px-2 py-0.5">CONDUCTIVE</span>
              </div>
              <h3 className="font-mono text-base font-bold tracking-wider uppercase text-[#1c1c1c]">
                Ultra-High Purity Copper (UHPLC)
              </h3>
              <p className="font-mono text-xs text-neutral-600 tracking-wider leading-relaxed lowercase">
                long-crystal de-stressed copper wiring is custom-drawn for the voice coils. results in maximized signal purity, effortless treble extension, and a natural, dimensional mid-range response.
              </p>
            </div>
            <div className="pt-8 border-t border-neutral-200 mt-12 flex justify-between items-center text-xs font-mono">
              <span className="text-neutral-400 uppercase">Copper Grade</span>
              <span className="text-[#1c1c1c] font-bold">99.999% Pure</span>
            </div>
          </div>

          {/* Card 3: Matched Driver Calibration */}
          <div className="border border-neutral-300 bg-[#e0e0e0] p-8 flex flex-col justify-between hover:border-[#1c1c1c] transition-all group duration-300">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-mono text-2xl font-light text-neutral-400">03</span>
                <span className="font-mono text-[9px] tracking-widest bg-[#1c1c1c] text-[#e5e5e5] px-2 py-0.5">CALIBRATION</span>
              </div>
              <h3 className="font-mono text-base font-bold tracking-wider uppercase text-[#1c1c1c]">
                Acoustic Pairing & Tuning
              </h3>
              <p className="font-mono text-xs text-neutral-600 tracking-wider leading-relaxed lowercase">
                each left and right headphone pair is meticulously measured, side-compared, and matched in our brooklyn acoustic chamber to ensure near-zero channel volume discrepancy.
              </p>
            </div>
            <div className="pt-8 border-t border-neutral-200 mt-12 flex justify-between items-center text-xs font-mono">
              <span className="text-neutral-400 uppercase">Tolerances Limit</span>
              <span className="text-[#1c1c1c] font-bold">± 0.05 Decibel</span>
            </div>
          </div>

        </div>
      </section>

      {/* HERITAGE BRUSH STORY SECTION (Tactile raw typography layout) */}
      <section id="heritage" className="max-w-7xl mx-auto px-6 mt-32 py-24 bg-[#e0e0e0] border border-neutral-300 relative overflow-hidden">
        {/* Giant textured watermark text behind */}
        <div className="absolute right-0 bottom-0 text-[18vw] leading-none font-black text-neutral-300/60 tracking-tighter select-none pointer-events-none uppercase">
          BROOKLYN
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-6">
            <span className="font-mono text-xs tracking-[0.3em] text-neutral-400 uppercase">OUR SEVEN DECADE JOURNEY</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#1c1c1c] uppercase leading-none">
              BORN IN A KITCHEN, <br />TRUSTED WORLDWIDE.
            </h2>
            <div className="h-1 w-20 bg-[#1c1c1c]"></div>
          </div>

          <div className="font-mono text-xs text-neutral-600 tracking-wider space-y-6 leading-relaxed lowercase">
            <p>
              In 1953, master watchmaker Joseph Grado began hand-building phonograph cartridges at his kitchen table in Brooklyn, New York. Over the decades, that same kitchen-born work ethic has evolved into one of the most respected family-owned headphone houses in audio history.
            </p>
            <p>
              We don't rely on mass marketing or flashy multi-million dollar sponsorships. Our designs look raw and purely functional because they are. Every single ounce of engineering priority is dedicated strictly to what is inside the cup: the glorious, breathtaking translation of electricity into musical emotion.
            </p>
            <div className="pt-4">
              <span className="text-[#1c1c1c] font-bold uppercase block text-[10px] tracking-[0.2em] mb-1">
                John Grado, President & CEO
              </span>
              <span className="text-neutral-400 uppercase text-[9px]">
                THE SECOND GENERATION
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* REASSURING TECHNICAL METRICS / STATS */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-neutral-300 text-center font-mono">
          <div>
            <span className="block text-4xl font-light text-[#1c1c1c]">1953</span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 block">ESTABLISHED / NY</span>
          </div>
          <div>
            <span className="block text-4xl font-light text-[#1c1c1c]">100%</span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 block">FAMILY OWNED</span>
          </div>
          <div>
            <span className="block text-4xl font-light text-[#1c1c1c]">20kHz</span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 block">UPPER RESPONSE LIMIT</span>
          </div>
          <div>
            <span className="block text-4xl font-light text-[#1c1c1c]">0.05dB</span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 block">DRIVER SYMMETRY</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 mt-32 pt-16 border-t border-neutral-300/80 flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 text-neutral-500 font-mono text-xs">
        
        {/* Left Side Info */}
        <div className="space-y-2">
          <span className="text-[#1c1c1c] font-bold tracking-[0.2em] block uppercase">GRADO LABS AUDIO INC.</span>
          <span className="text-[10px] uppercase text-neutral-400 tracking-wider">
            © {new Date().getFullYear()} GRADO LABS. ALL RIGHTS RESERVED. BROOKLYN, NY.
          </span>
        </div>

        {/* Dynamic bottom links */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] tracking-widest">
          <a href="#heritage" className="hover:text-black uppercase transition-colors">WARRANTY POLICY</a>
          <a href="#acoustics" className="hover:text-black uppercase transition-colors">DEALERS locator</a>
          <a href="#engineering" className="hover:text-black uppercase transition-colors">USER MANUALS</a>
        </div>

      </footer>

    </div>
  );
}
7
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TestiQA — Premium Next-Gen Software Assurance Platform</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Premium Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            display: ['"Space Grotesk"', 'sans-serif'],
            mono: ['"Share Tech Mono"', 'monospace'],
          },
          colors: {
            brand: {
              orange: '#E37324',
              orangeDark: '#C75D15',
              orangeLight: '#FFF2EB',
              charcoal: '#181A1F',
              slate: '#22252C',
              lightGray: '#F5F6F8',
              silver: '#8E94A2',
            }
          },
          boxShadow: {
            'glow-orange': '0 10px 30px -5px rgba(227, 115, 36, 0.3)',
            'glow-soft': '0 20px 40px -15px rgba(24, 26, 31, 0.08)',
            'glow-dark': '0 20px 50px -10px rgba(0, 0, 0, 0.5)',
            'inner-glow': 'inset 0 1px 1px rgba(255, 255, 255, 0.1)',
          }
        }
      }
    }
  </script>

  <style>
    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #181A1F;
    }
    ::-webkit-scrollbar-thumb {
      background: #E37324;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #C75D15;
    }

    /* Keyframe Animations matching the high-end 3D feel */
    @keyframes slow-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes slow-spin-reverse {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-12px) scale(1.02); }
    }
    @keyframes pulse-ring {
      0% { transform: scale(0.95); opacity: 0.2; }
      50% { transform: scale(1.1); opacity: 0.5; }
      100% { transform: scale(0.95); opacity: 0.2; }
    }
    @keyframes radar-sweep {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .animate-spin-slow {
      animation: slow-spin 25s linear infinite;
    }
    .animate-spin-reverse-slow {
      animation: slow-spin-reverse 35s linear infinite;
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-pulse-ring {
      animation: pulse-ring 4s ease-in-out infinite;
    }
    .animate-radar {
      animation: radar-sweep 8s linear infinite;
    }

    /* Cinematic background grids */
    .bg-grid-pattern {
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
    }
    .bg-grid-pattern-dark {
      background-size: 50px 50px;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    }

    /* Noise overlay for cinematic texture */
    .noise-overlay {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3联%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E");
    }
  </style>
</head>
<body class="bg-brand-lightGray font-sans text-brand-charcoal overflow-x-hidden antialiased selection:bg-brand-orange selection:text-white">

  <!-- Noise Overlay -->
  <div class="fixed inset-0 pointer-events-none noise-overlay z-50"></div>

  <!-- NAVIGATION HEADER -->
  <header class="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo matching image design -->
      <a href="#" class="flex items-center gap-3 group focus:outline-none">
        <div class="w-10 h-10 rounded-xl bg-brand-charcoal flex items-center justify-center shadow-inner-glow transition-transform duration-300 group-hover:scale-105">
          <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <span class="font-display font-bold text-xl tracking-tight text-brand-charcoal">
          Testi<span class="text-brand-orange">QA</span>
        </span>
      </a>

      <!-- Desktop Navigation Menu -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="#solutions" class="text-sm font-semibold text-brand-silver hover:text-brand-charcoal transition-colors duration-200">Solutions</a>
        <a href="#sandbox" class="text-sm font-semibold text-brand-silver hover:text-brand-charcoal transition-colors duration-200">Interactive Sandbox</a>
        <a href="#dashboard" class="text-sm font-semibold text-brand-silver hover:text-brand-charcoal transition-colors duration-200">Analytics Panel</a>
        <a href="#ecosystem" class="text-sm font-semibold text-brand-silver hover:text-brand-charcoal transition-colors duration-200">Ecosystem</a>
      </nav>

      <!-- Action Items & Secondary Contacts -->
      <div class="flex items-center gap-4">
        <!-- Social/Utility icons as seen in the top right of the inspiration -->
        <div class="hidden sm:flex items-center gap-3 mr-2">
          <a href="#" class="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-brand-silver hover:text-brand-charcoal hover:bg-gray-100 transition-all duration-200" title="Telegram">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.66-.52.36-.97.53-1.35.52-.42-.01-1.23-.24-1.83-.44-.74-.24-1.33-.37-1.28-.79.03-.22.33-.45.91-.69 3.56-1.55 5.93-2.57 7.12-3.07 3.39-1.4 4.09-1.64 4.55-1.64.1 0 .32.02.46.14.12.1.15.24.17.34z"/>
            </svg>
          </a>
          <a href="#" class="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-brand-silver hover:text-brand-charcoal hover:bg-gray-100 transition-all duration-200" title="WhatsApp Direct">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.81 9.81 0 0 0 12.04 2zm5.8 14.16c-.24.67-1.17 1.24-1.61 1.29-.44.05-.98.07-1.61-.13-.38-.12-1-.44-2.18-.95-1.95-.83-3.19-2.83-3.29-2.97-.1-.13-.78-.96-.78-1.84 0-.88.46-1.31.62-1.48.16-.17.36-.21.48-.21h.35c.11 0 .26-.04.41.31.15.36.51 1.24.56 1.34.05.1.08.22.01.36-.07.14-.14.23-.24.35-.1.12-.21.27-.3.38-.1.1-.21.21-.09.41.12.2.53.87 1.14 1.41.79.7 1.45.92 1.66 1.02.21.1.33.08.45-.06.12-.14.52-.61.66-.82.14-.21.28-.18.47-.11.19.07 1.19.56 1.4.66.21.1.35.15.4.24.05.09.05.51-.19 1.18z"/>
            </svg>
          </a>
        </div>

        <!-- Premium Get in Touch CTAs -->
        <button onclick="toggleProposalModal(true)" class="hidden sm:flex items-center gap-3 bg-brand-charcoal text-white hover:bg-brand-orange hover:shadow-glow-orange transition-all duration-300 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase group">
          Get in Touch
          <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <svg class="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </button>

        <!-- Mobile Menu Trigger -->
        <button onclick="toggleMobileMenu(true)" class="md:hidden w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-charcoal hover:bg-gray-100 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- MOBILE NAVIGATION DRAWER -->
  <div id="mobile-menu" class="fixed inset-0 z-50 bg-brand-charcoal/40 backdrop-blur-md transition-opacity duration-300 opacity-0 pointer-events-none">
    <div class="absolute right-0 top-0 bottom-0 w-80 bg-white p-8 flex flex-col justify-between shadow-glow-dark transform translate-x-full transition-transform duration-300">
      <div>
        <div class="flex items-center justify-between mb-10">
          <span class="font-display font-bold text-lg text-brand-charcoal">Menu</span>
          <button onclick="toggleMobileMenu(false)" class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-brand-silver hover:text-brand-charcoal transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <nav class="flex flex-col gap-6">
          <a href="#solutions" onclick="toggleMobileMenu(false)" class="text-lg font-bold text-brand-charcoal hover:text-brand-orange transition-colors">Solutions</a>
          <a href="#sandbox" onclick="toggleMobileMenu(false)" class="text-lg font-bold text-brand-charcoal hover:text-brand-orange transition-colors">Interactive Sandbox</a>
          <a href="#dashboard" onclick="toggleMobileMenu(false)" class="text-lg font-bold text-brand-charcoal hover:text-brand-orange transition-colors">Analytics Panel</a>
          <a href="#ecosystem" onclick="toggleMobileMenu(false)" class="text-lg font-bold text-brand-charcoal hover:text-brand-orange transition-colors">Ecosystem</a>
        </nav>
      </div>
      <div class="flex flex-col gap-4">
        <button onclick="toggleMobileMenu(false); toggleProposalModal(true);" class="w-full bg-brand-charcoal text-white py-3 px-6 rounded-full font-bold text-sm tracking-wider uppercase text-center hover:bg-brand-orange transition-colors">
          Get in Touch
        </button>
        <div class="flex items-center justify-center gap-4 text-brand-silver">
          <span>Connect:</span>
          <a href="#" class="hover:text-brand-orange">Telegram</a>
          <span>•</span>
          <a href="#" class="hover:text-brand-orange">WhatsApp</a>
        </div>
      </div>
    </div>
  </div>

  <!-- HERO SECTION -->
  <section class="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden bg-white">
    <!-- Grid Background -->
    <div class="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none"></div>
    
    <!-- Hero Dual-Tone Split Layer -->
    <div class="absolute inset-y-0 right-0 w-full lg:w-[35%] bg-brand-charcoal hidden lg:block z-0 relative">
      <!-- Grid pattern overlay for the dark side -->
      <div class="absolute inset-0 bg-grid-pattern-dark opacity-10"></div>
      
      <!-- Gigantic background dynamic text (rotated 90deg, matching the inspiration styling) -->
      <div class="absolute inset-y-0 right-10 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span class="text-[12rem] font-display font-extrabold text-white/[0.02] tracking-widest uppercase origin-center transform rotate-90 whitespace-nowrap">
          TESTING
        </span>
      </div>
    </div>

    <!-- Main Container Grid -->
    <div class="relative max-w-7xl mx-auto px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full h-full">
      
      <!-- HERO LEFT (Assurance Headline & CTAs) -->
      <div class="lg:col-span-7 flex flex-col justify-center">
        <!-- Structural index pointer -->
        <span class="font-mono text-brand-silver text-xs tracking-widest uppercase mb-4 block animate-pulse">01. / AUTO SYSTEM ASSURANCE</span>

        <!-- Master Geometric Header -->
        <h1 class="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-brand-charcoal leading-[1.1] tracking-tight uppercase mb-8">
          Testing <br class="hidden sm:inline">the software <br>
          for your <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-orangeDark to-brand-charcoal relative">
            Business
            <span class="absolute left-0 bottom-1 w-full h-1 bg-brand-orange/30 rounded-full"></span>
          </span>
        </h1>

        <p class="text-brand-silver text-base md:text-lg max-w-lg mb-10 leading-relaxed font-sans">
          Deploy clean software with elite precision. TestiQA offers zero-compromise automated testing platforms designed to match high-velocity modern engineering.
        </p>

        <!-- Buttons and Dropdown exactly as in the visual representation -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
          <!-- Get in Touch Capsule -->
          <button onclick="toggleProposalModal(true)" class="relative inline-flex items-center justify-between bg-brand-orange text-white hover:bg-brand-orangeDark hover:shadow-glow-orange transition-all duration-300 py-3.5 pl-6 pr-4 rounded-full group focus:outline-none min-w-[190px]">
            <span class="font-display font-bold uppercase tracking-wider text-sm">Get in touch</span>
            <div class="w-8 h-8 rounded-full bg-brand-charcoal text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
          </button>

          <!-- Core Interactive Services Dropdown -->
          <div class="relative group">
            <button class="inline-flex items-center justify-between gap-3 px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 text-brand-charcoal hover:bg-gray-100 transition-all duration-200 w-full sm:w-auto">
              <span class="font-semibold text-sm">Explore Core Capabilities</span>
              <svg class="w-4 h-4 text-brand-silver transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <!-- Dropdown Menu -->
            <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-glow-soft border border-gray-100 overflow-hidden opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-30">
              <a href="#sandbox" class="flex items-center gap-3 px-4 py-3 hover:bg-brand-lightGray transition-colors">
                <span class="w-2 h-2 rounded-full bg-brand-orange"></span>
                <div>
                  <div class="font-semibold text-xs text-brand-charcoal">AI Sandbox Testing</div>
                  <p class="text-[10px] text-brand-silver">Simulate real-time systems</p>
                </div>
              </a>
              <a href="#dashboard" class="flex items-center gap-3 px-4 py-3 hover:bg-brand-lightGray transition-colors">
                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                <div>
                  <div class="font-semibold text-xs text-brand-charcoal">Enterprise Diagnostics</div>
                  <p class="text-[10px] text-brand-silver">Full analytical tracking</p>
                </div>
              </a>
              <a href="#solutions" class="flex items-center gap-3 px-4 py-3 hover:bg-brand-lightGray transition-colors">
                <span class="w-2 h-2 rounded-full bg-green-500"></span>
                <div>
                  <div class="font-semibold text-xs text-brand-charcoal">Security & Compliance</div>
                  <p class="text-[10px] text-brand-silver">Military-grade system locks</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- HERO RIGHT (Cinematic 3D Interactive Centerpiece & Overlays) -->
      <div class="lg:col-span-5 relative flex flex-col items-center justify-center h-[550px] sm:h-[650px] w-full">
        <!-- Radial dynamic glowing aura behind the 3D element -->
        <div class="absolute w-[350px] h-[350px] rounded-full bg-brand-orange/5 blur-[80px] pointer-events-none animate-pulse-ring"></div>
        
        <!-- Interactive 3D Sphere Rig -->
        <div class="relative z-10 w-full max-w-[400px] aspect-square flex items-center justify-center">
          
          <!-- Inner Cybernetic Sphere Graphic with custom SVGs -->
          <div class="absolute w-72 h-72 rounded-full border border-gray-200 bg-white/40 backdrop-blur-md shadow-inner flex items-center justify-center p-6 animate-float">
            <!-- Simulated maze engraving inner ball structure -->
            <svg class="w-full h-full text-brand-charcoal/80" viewBox="0 0 200 200" fill="none">
              <!-- Maze tracks -->
              <circle cx="100" cy="100" r="85" stroke="currentColor" stroke-width="0.5" stroke-dasharray="5 5" class="animate-spin-slow opacity-30" />
              <circle cx="100" cy="100" r="70" stroke="currentColor" stroke-width="1" stroke-dasharray="10 5" class="animate-spin-reverse-slow opacity-60" />
              <circle cx="100" cy="100" r="50" stroke="currentColor" stroke-width="1.5" />
              <path d="M100 15A85 85 0 0 1 185 100" stroke="#E37324" stroke-width="2" stroke-linecap="round" class="animate-spin-slow" />
              <path d="M15 100A85 85 0 0 1 100 185" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="animate-spin-reverse-slow" />
              
              <!-- Technical crosshairs -->
              <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" stroke-width="0.5" stroke-dasharray="4" class="opacity-20" />
              <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" stroke-width="0.5" stroke-dasharray="4" class="opacity-20" />
              
              <!-- Geometric internal labyrinth representation -->
              <rect x="75" y="75" width="50" height="50" rx="4" stroke="currentColor" stroke-width="1" class="animate-spin-slow" />
              <path d="M85 85h30v30H85z" fill="none" stroke="#E37324" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <!-- Outer Wireframe Geodesic Orbit lines -->
          <div class="absolute w-[360px] h-[360px] rounded-full border border-brand-orange/25 animate-spin-slow flex items-center justify-center">
            <!-- Satellite Nodes floating -->
            <div class="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-brand-charcoal border-2 border-white shadow-glow-soft"></div>
            <div class="absolute -bottom-2 left-1/2 w-3 h-3 rounded-full bg-brand-orange border border-white shadow-glow-orange"></div>
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-dashed border-gray-300 opacity-40"></div>
          </div>

          <!-- Futuristic Floating Pedestal underneath -->
          <div class="absolute bottom-4 w-60 h-8 rounded-full bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-300/60 shadow-lg flex items-center justify-center p-1 overflow-hidden">
            <!-- Glowing energy pool inside pedestal -->
            <div class="w-full h-full rounded-full bg-gradient-to-r from-brand-orange/10 via-brand-orange to-brand-orange/10 blur-[1px] opacity-80 flex items-center justify-center">
              <span class="text-[8px] font-mono tracking-widest text-white uppercase select-none opacity-90">STATION SECURE</span>
            </div>
            <!-- Outer shadow edge -->
            <div class="absolute -inset-1 rounded-full border border-brand-orange/20 animate-pulse-ring pointer-events-none"></div>
          </div>

          <!-- Glassmorphic System Overlays (overlapping the dark block) -->
          <div class="absolute -right-4 top-1/4 z-20 w-44 bg-white/70 backdrop-blur-md border border-gray-100 p-4 rounded-2xl shadow-glow-soft animate-float" style="animation-delay: -2s;">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span class="text-[9px] font-mono tracking-wider text-brand-silver uppercase">TELEMETRY LINK</span>
            </div>
            <div class="text-xs font-bold text-brand-charcoal mb-1">Coverage Ratio</div>
            <div class="text-lg font-display font-extrabold text-brand-orange">99.85%</div>
            <!-- Mini visual canvas chart -->
            <div class="h-6 flex items-end gap-1 mt-2">
              <div class="w-full bg-gray-100 rounded-sm h-[30%] hover:bg-brand-orange transition-all"></div>
              <div class="w-full bg-gray-100 rounded-sm h-[50%] hover:bg-brand-orange transition-all"></div>
              <div class="w-full bg-gray-100 rounded-sm h-[40%] hover:bg-brand-orange transition-all"></div>
              <div class="w-full bg-gray-100 rounded-sm h-[80%] hover:bg-brand-orange transition-all"></div>
              <div class="w-full bg-brand-orange rounded-sm h-[95%]"></div>
            </div>
          </div>

          <div class="absolute -left-6 bottom-16 z-20 w-48 bg-brand-charcoal border border-white/10 p-4 rounded-2xl shadow-glow-dark animate-float" style="animation-delay: -4s;">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[8px] font-mono text-brand-orange tracking-widest uppercase">TEST STATUS</span>
              <span class="px-1.5 py-0.5 rounded bg-brand-orange/10 text-brand-orange text-[8px] font-bold">LIVE</span>
            </div>
            <div class="text-[11px] font-mono text-white/90 line-clamp-2 leading-relaxed">
              &gt; Running suite: performance_heavy... <br>
              &gt; All endpoints verified.
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- SOLUTIONS MATRIX SECTION -->
  <section id="solutions" class="py-24 bg-white relative overflow-hidden">
    <!-- Grid -->
    <div class="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-20">
        <span class="font-mono text-brand-orange text-xs tracking-widest uppercase block mb-3">02. / SPECIALIZED CAPABILITIES</span>
        <h2 class="font-display font-bold text-3xl md:text-5xl text-brand-charcoal uppercase leading-tight">
          Complete Testing Integration <br>For High-Scale Tech Stacks
        </h2>
        <div class="w-20 h-1 bg-brand-orange mt-6"></div>
      </div>

      <!-- Capability Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Solution Card 1 -->
        <div class="group bg-white border border-gray-100 p-8 rounded-3xl shadow-glow-soft hover:shadow-glow-orange hover:-translate-y-2 transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-brand-lightGray flex items-center justify-center text-brand-charcoal mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="font-display font-bold text-lg text-brand-charcoal uppercase mb-3 group-hover:text-brand-orange transition-colors">API & Protocol Automation</h3>
          <p class="text-brand-silver text-sm leading-relaxed mb-6">
            Execute automated checks across complex GraphQL, gRPC, and REST environments with ultra-low latency response monitoring.
          </p>
          <div class="flex items-center gap-2 text-xs font-bold text-brand-charcoal group-hover:gap-4 transition-all">
            <span>Learn integration specifications</span>
            <span>→</span>
          </div>
        </div>

        <!-- Solution Card 2 -->
        <div class="group bg-white border border-gray-100 p-8 rounded-3xl shadow-glow-soft hover:shadow-glow-orange hover:-translate-y-2 transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-brand-lightGray flex items-center justify-center text-brand-charcoal mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
            </svg>
          </div>
          <h3 class="font-display font-bold text-lg text-brand-charcoal uppercase mb-3 group-hover:text-brand-orange transition-colors">Real-time Load Simulations</h3>
          <p class="text-brand-silver text-sm leading-relaxed mb-6">
            Test server breaking points by spawning virtual, geographically distributed users instantly via edge network triggers.
          </p>
          <div class="flex items-center gap-2 text-xs font-bold text-brand-charcoal group-hover:gap-4 transition-all">
            <span>Analyze telemetry reports</span>
            <span>→</span>
          </div>
        </div>

        <!-- Solution Card 3 -->
        <div class="group bg-white border border-gray-100 p-8 rounded-3xl shadow-glow-soft hover:shadow-glow-orange hover:-translate-y-2 transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-brand-lightGray flex items-center justify-center text-brand-charcoal mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 class="font-display font-bold text-lg text-brand-charcoal uppercase mb-3 group-hover:text-brand-orange transition-colors">Cyber Threat Diagnostics</h3>
          <p class="text-brand-silver text-sm leading-relaxed mb-6">
            Continuous penetration probes looking for SQL injection vectors, broken access rules, and exposed key containers.
          </p>
          <div class="flex items-center gap-2 text-xs font-bold text-brand-charcoal group-hover:gap-4 transition-all">
            <span>Review compliance checklists</span>
            <span>→</span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- INTERACTIVE PLAYGROUND (SANDBOX / TESTING SIMULATOR) -->
  <section id="sandbox" class="py-24 bg-brand-charcoal text-white relative overflow-hidden">
    <!-- Grid Overlay -->
    <div class="absolute inset-0 bg-grid-pattern-dark opacity-[0.03] pointer-events-none"></div>
    <!-- Orange Ambient Glow on the Left -->
    <div class="absolute -left-48 top-1/4 w-[400px] h-[400px] bg-brand-orange/5 blur-[120px] pointer-events-none rounded-full"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Split Headers -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
        <div class="lg:col-span-7">
          <span class="font-mono text-brand-orange text-xs tracking-widest uppercase block mb-3">03. / SIMULATION INTERACTIVE ENGINE</span>
          <h2 class="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight">
            Perform an Live Software <br>Assurance Run Right Now
          </h2>
        </div>
        <div class="lg:col-span-5">
          <p class="text-brand-silver text-sm leading-relaxed">
            Choose any software segment below and trigger a simulated automated QA test suite. Watch real telemetry execute instantly.
          </p>
        </div>
      </div>

      <!-- Simulator Architecture Box -->
      <div class="bg-[#22252C]/90 border border-white/5 rounded-3xl overflow-hidden shadow-glow-dark grid grid-cols-1 lg:grid-cols-12">
        
        <!-- Left configuration panel -->
        <div class="lg:col-span-4 p-8 border-r border-white/5 bg-[#1b1e24]">
          <h3 class="font-display font-bold text-lg uppercase mb-6 tracking-wide text-white/90">Diagnostic Variables</h3>
          
          <!-- Environment Pickers -->
          <div class="mb-6">
            <label class="block text-[10px] font-mono uppercase tracking-widest text-brand-silver mb-3">SYSTEM PROTOCOL TYPE</label>
            <div class="grid grid-cols-2 gap-3">
              <button onclick="setSandboxProtocol('graphql')" id="btn-proto-graphql" class="px-4 py-3 rounded-xl border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs font-semibold text-center transition-all duration-200">
                GraphQL Engine
              </button>
              <button onclick="setSandboxProtocol('rest')" id="btn-proto-rest" class="px-4 py-3 rounded-xl border border-white/5 bg-white/5 text-brand-silver hover:text-white text-xs font-semibold text-center transition-all duration-200">
                REST API Hub
              </button>
              <button onclick="setSandboxProtocol('web3')" id="btn-proto-web3" class="px-4 py-3 rounded-xl border border-white/5 bg-white/5 text-brand-silver hover:text-white text-xs font-semibold text-center transition-all duration-200">
                Solana Smart Contract
              </button>
              <button onclick="setSandboxProtocol('mobile')" id="btn-proto-mobile" class="px-4 py-3 rounded-xl border border-white/5 bg-white/5 text-brand-silver hover:text-white text-xs font-semibold text-center transition-all duration-200">
                iOS Application
              </button>
            </div>
          </div>

          <!-- Configuration Sliders -->
          <div class="space-y-6">
            <div>
              <div class="flex justify-between text-[10px] font-mono uppercase tracking-widest text-brand-silver mb-2">
                <span>SIMULATED REQS / SEC</span>
                <span id="label-reqs" class="text-white">1,500 RPS</span>
              </div>
              <input type="range" id="slider-reqs" min="500" max="5000" step="100" value="1500" oninput="updateSandboxSliderLabels()" class="w-full accent-brand-orange bg-brand-charcoal rounded-lg h-1.5 appearance-none cursor-pointer">
            </div>

            <div>
              <div class="flex justify-between text-[10px] font-mono uppercase tracking-widest text-brand-silver mb-2">
                <span>SECURITY ENCRYPTION LEVEL</span>
                <span id="label-enc" class="text-white font-mono">AES-256</span>
              </div>
              <input type="range" id="slider-enc" min="0" max="2" step="1" value="1" oninput="updateSandboxSliderLabels()" class="w-full accent-brand-orange bg-brand-charcoal rounded-lg h-1.5 appearance-none cursor-pointer">
            </div>
          </div>

          <!-- Trigger CTA Button -->
          <button onclick="executeSandboxTest()" id="btn-trigger" class="w-full mt-8 bg-brand-orange text-white hover:bg-brand-orangeDark font-display font-bold py-4 rounded-xl shadow-glow-orange flex items-center justify-center gap-3 tracking-widest uppercase text-xs transition-all duration-300">
            <span>Execute AI Audit</span>
            <svg class="w-4 h-4 animate-spin-slow" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-dasharray="16" class="opacity-30"></circle>
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 2v4m0 12v4M4 12H0m24 0h-4"></path>
            </svg>
          </button>
        </div>

        <!-- Right Simulated Terminal Screen -->
        <div class="lg:col-span-8 p-8 flex flex-col justify-between h-[500px]">
          <div>
            <!-- Terminal Header -->
            <div class="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span class="text-xs font-mono text-brand-silver ml-4">TESTIQA REMOTE DIAGNOSTIC NODE // <span id="current-proto" class="text-brand-orange">graphql_main</span></span>
              </div>
              <span id="sandbox-status-pill" class="px-2.5 py-1 rounded bg-brand-orange/10 text-brand-orange text-[10px] font-mono font-bold tracking-widest uppercase">IDLE</span>
            </div>

            <!-- Scrollable Terminal Body -->
            <div id="sandbox-terminal" class="font-mono text-sm space-y-2 text-[#8E94A2] h-[300px] overflow-y-auto pr-4 select-none">
              <p class="text-[#E37324] font-semibold">&gt;&gt; Initialize systems. Waiting for user action...</p>
              <p>&gt; Target node connection secure.</p>
              <p>&gt; Security level: high.</p>
              <p>&gt; Ready to execute test suites.</p>
            </div>
          </div>

          <!-- Bottom Telemetry status indicators -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/5 pt-6 mt-4">
            <div>
              <div class="text-[10px] font-mono uppercase tracking-widest text-brand-silver mb-1">Latency avg</div>
              <div id="telemetry-latency" class="font-display font-bold text-xl text-white">-- ms</div>
            </div>
            <div>
              <div class="text-[10px] font-mono uppercase tracking-widest text-brand-silver mb-1">Coverage</div>
              <div id="telemetry-coverage" class="font-display font-bold text-xl text-white">-- %</div>
            </div>
            <div>
              <div class="text-[10px] font-mono uppercase tracking-widest text-brand-silver mb-1">Threat vectors</div>
              <div id="telemetry-threats" class="font-display font-bold text-xl text-white">--</div>
            </div>
            <div>
              <div class="text-[10px] font-mono uppercase tracking-widest text-brand-silver mb-1">Status</div>
              <div id="telemetry-status" class="font-display font-bold text-xl text-[#8E94A2]">STANDBY</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- ANALYTICS PANEL (DASHBOARD PREVIEW) -->
  <section id="dashboard" class="py-24 bg-brand-lightGray relative overflow-hidden">
    <!-- Grid -->
    <div class="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Section Intro -->
      <div class="max-w-3xl mb-16">
        <span class="font-mono text-brand-orange text-xs tracking-widest uppercase block mb-3">04. / ANALYTIC REPORT HUB</span>
        <h2 class="font-display font-bold text-3xl md:text-5xl text-brand-charcoal uppercase leading-tight">
          Comprehensive Dashboard Control
        </h2>
        <p class="text-brand-silver text-sm leading-relaxed mt-4 max-w-xl">
          Observe complete real-time tracking of QA coverage metrics across your organization's deployments on our sleek analytical dashboard control deck.
        </p>
      </div>

      <!-- Complete Styled Dashboard Workspace Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Sidebar Widget controls -->
        <div class="lg:col-span-4 space-y-6">
          
          <!-- System Load Dial -->
          <div class="bg-white border border-gray-100 p-6 rounded-3xl shadow-glow-soft">
            <h3 class="text-xs font-mono text-brand-silver uppercase tracking-widest mb-4">Total Fleet Load Monitor</h3>
            <div class="flex items-center justify-between gap-6">
              <div class="relative w-28 h-28 flex items-center justify-center">
                <!-- Outer SVG progress circle -->
                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path class="text-gray-100" stroke-width="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path class="text-brand-orange transition-all duration-1000" id="gauge-path" stroke-dasharray="42, 100" stroke-width="3" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <span id="gauge-label" class="font-display font-extrabold text-2xl text-brand-charcoal">42%</span>
                  <span class="text-[8px] font-mono uppercase text-brand-silver">CPU CAP</span>
                </div>
              </div>
              <div class="flex-1 space-y-3">
                <div class="flex justify-between items-center text-xs">
                  <span class="text-brand-silver">Total APIs</span>
                  <span class="font-bold">142 Active</span>
                </div>
                <div class="flex justify-between items-center text-xs">
                  <span class="text-brand-silver">Cluster nodes</span>
                  <span class="font-bold text-green-500">Healthy</span>
                </div>
                <div class="flex justify-between items-center text-xs">
                  <span class="text-brand-silver">Auto-Scale status</span>
                  <span class="px-2 py-0.5 rounded bg-brand-lightGray font-semibold text-[10px]">Armed</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Live Compliance Status Controls -->
          <div class="bg-white border border-gray-100 p-6 rounded-3xl shadow-glow-soft">
            <h3 class="text-xs font-mono text-brand-silver uppercase tracking-widest mb-4">Security Rules Enforcement</h3>
            <div class="space-y-4">
              <!-- Switch 1 -->
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-xs font-bold text-brand-charcoal">SOC2 Compliance Verification</div>
                  <p class="text-[10px] text-brand-silver">Verify key rotations automatically</p>
                </div>
                <button onclick="toggleRuleSwitch('soc2')" id="switch-soc2" class="w-10 h-6 rounded-full bg-brand-orange p-0.5 flex items-center transition-colors duration-300">
                  <div id="dot-soc2" class="w-5 h-5 rounded-full bg-white shadow transform translate-x-4 transition-transform duration-300"></div>
                </button>
              </div>
              <!-- Switch 2 -->
              <div class="flex items-center justify-between border-t border-gray-50 pt-3">
                <div>
                  <div class="text-xs font-bold text-brand-charcoal">ISO27001 Access Control Locks</div>
                  <p class="text-[10px] text-brand-silver">Lock external terminal gateways</p>
                </div>
                <button onclick="toggleRuleSwitch('iso')" id="switch-iso" class="w-10 h-6 rounded-full bg-gray-200 p-0.5 flex items-center transition-colors duration-300">
                  <div id="dot-iso" class="w-5 h-5 rounded-full bg-white shadow transform translate-x-0 transition-transform duration-300"></div>
                </button>
              </div>
              <!-- Switch 3 -->
              <div class="flex items-center justify-between border-t border-gray-50 pt-3">
                <div>
                  <div class="text-xs font-bold text-brand-charcoal">HIPAA Leak Scanners</div>
                  <p class="text-[10px] text-brand-silver">Identify personally identifiable logs</p>
                </div>
                <button onclick="toggleRuleSwitch('hipaa')" id="switch-hipaa" class="w-10 h-6 rounded-full bg-brand-orange p-0.5 flex items-center transition-colors duration-300">
                  <div id="dot-hipaa" class="w-5 h-5 rounded-full bg-white shadow transform translate-x-4 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </div>

        </div>

        <!-- Central Analytics Chart Panel -->
        <div class="lg:col-span-8 bg-white border border-gray-100 p-8 rounded-3xl shadow-glow-soft flex flex-col justify-between">
          <div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 class="font-display font-bold text-lg text-brand-charcoal uppercase mb-1">Global Deployment Telemetry</h3>
                <p class="text-xs text-brand-silver">Tracking deployment response rates across standard clusters</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 font-bold text-xs">Live Telemetry Feed</span>
                <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              </div>
            </div>

            <!-- Interactive Chart Area -->
            <div class="relative h-64 border-b border-gray-100 pb-2 flex items-end justify-between">
              <!-- Back Gridlines -->
              <div class="absolute inset-x-0 top-0 h-full flex flex-col justify-between pointer-events-none opacity-40">
                <div class="border-t border-dashed border-gray-100 w-full text-[10px] text-brand-silver pt-1">100ms avg</div>
                <div class="border-t border-dashed border-gray-100 w-full text-[10px] text-brand-silver pt-1">50ms avg</div>
                <div class="border-t border-dashed border-gray-100 w-full text-[10px] text-brand-silver pt-1">10ms avg</div>
              </div>

              <!-- Bar Units -->
              <div class="flex items-end justify-between w-full h-full pt-10 z-10 gap-2">
                <!-- Bar unit -->
                <div class="flex-1 flex flex-col items-center justify-end h-full group cursor-pointer">
                  <div class="w-full bg-gray-100 rounded-t-xl h-[42%] group-hover:bg-brand-orange transition-all duration-300 relative flex justify-center">
                    <div class="absolute -top-8 bg-brand-charcoal text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">42 ms</div>
                  </div>
                  <span class="text-[9px] font-mono text-brand-silver mt-2 uppercase">Mon</span>
                </div>
                <!-- Bar unit -->
                <div class="flex-1 flex flex-col items-center justify-end h-full group cursor-pointer">
                  <div class="w-full bg-gray-100 rounded-t-xl h-[58%] group-hover:bg-brand-orange transition-all duration-300 relative flex justify-center">
                    <div class="absolute -top-8 bg-brand-charcoal text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">58 ms</div>
                  </div>
                  <span class="text-[9px] font-mono text-brand-silver mt-2 uppercase">Tue</span>
                </div>
                <!-- Bar unit -->
                <div class="flex-1 flex flex-col items-center justify-end h-full group cursor-pointer">
                  <div class="w-full bg-gray-100 rounded-t-xl h-[84%] group-hover:bg-brand-orange transition-all duration-300 relative flex justify-center">
                    <div class="absolute -top-8 bg-brand-charcoal text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">84 ms</div>
                  </div>
                  <span class="text-[9px] font-mono text-brand-silver mt-2 uppercase">Wed</span>
                </div>
                <!-- Bar unit -->
                <div class="flex-1 flex flex-col items-center justify-end h-full group cursor-pointer">
                  <div class="w-full bg-gray-100 rounded-t-xl h-[64%] group-hover:bg-brand-orange transition-all duration-300 relative flex justify-center">
                    <div class="absolute -top-8 bg-brand-charcoal text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">64 ms</div>
                  </div>
                  <span class="text-[9px] font-mono text-brand-silver mt-2 uppercase">Thu</span>
                </div>
                <!-- Bar unit -->
                <div class="flex-1 flex flex-col items-center justify-end h-full group cursor-pointer">
                  <div class="w-full bg-brand-orange rounded-t-xl h-[95%] relative flex justify-center">
                    <div class="absolute -top-8 bg-brand-charcoal text-white text-[10px] font-bold px-2 py-1 rounded opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">95 ms</div>
                  </div>
                  <span class="text-[9px] font-mono text-brand-silver mt-2 uppercase">Fri (Live)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Summary Logs -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 mt-6 border-t border-gray-100 text-xs">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              <div>
                <div class="font-bold text-brand-charcoal">Gateway status</div>
                <p class="text-[10px] text-brand-silver">100% Operational</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-2.5 rounded-full bg-brand-orange"></span>
              <div>
                <div class="font-bold text-brand-charcoal">Anomaly Tracker</div>
                <p class="text-[10px] text-brand-silver">0 Active vectors detected</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <div>
                <div class="font-bold text-brand-charcoal">Audit Status</div>
                <p class="text-[10px] text-brand-silver">Completed 12 min ago</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- PRODUCT ECOSYSTEM SECTION -->
  <section id="ecosystem" class="py-24 bg-brand-charcoal text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-pattern-dark opacity-[0.02] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Offset Header Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        <div class="lg:col-span-8">
          <span class="font-mono text-brand-orange text-xs tracking-widest uppercase block mb-3">05. / GLOBAL ECOSYSTEM</span>
          <h2 class="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight">
            Comprehensive assurance solutions for every engineering cycle
          </h2>
        </div>
        <div class="lg:col-span-4">
          <p class="text-brand-silver text-sm leading-relaxed">
            Unify code verification across departments. TestiQA aligns development, QA, and security structures in a single dashboard deck.
          </p>
        </div>
      </div>

      <!-- Feature Interactive Walkthrough Tabs -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Side Tab Navs -->
        <div class="lg:col-span-4 space-y-3">
          <button onclick="switchEcosystemTab('tab-integration')" id="ecosystem-tab-integration-btn" class="w-full text-left p-6 rounded-2xl bg-white/5 border border-brand-orange/30 text-white flex items-start gap-4 transition-all duration-300">
            <span class="font-mono text-xs text-brand-orange bg-brand-orange/10 px-2 py-1 rounded">01</span>
            <div>
              <h3 class="font-display font-bold text-sm uppercase tracking-wide">CI/CD Automated Pipelines</h3>
              <p class="text-xs text-brand-silver mt-1">Deploy securely on every GitHub commit automatically.</p>
            </div>
          </button>

          <button onclick="switchEcosystemTab('tab-monitoring')" id="ecosystem-tab-monitoring-btn" class="w-full text-left p-6 rounded-2xl bg-[#1b1e24]/40 border border-white/5 text-brand-silver hover:text-white flex items-start gap-4 transition-all duration-300">
            <span class="font-mono text-xs bg-white/5 px-2 py-1 rounded">02</span>
            <div>
              <h3 class="font-display font-bold text-sm uppercase tracking-wide">Autonomous Drift Catchers</h3>
              <p class="text-xs text-brand-silver mt-1">Identifies broken systems and elements instantly.</p>
            </div>
          </button>

          <button onclick="switchEcosystemTab('tab-compliance')" id="ecosystem-tab-compliance-btn" class="w-full text-left p-6 rounded-2xl bg-[#1b1e24]/40 border border-white/5 text-brand-silver hover:text-white flex items-start gap-4 transition-all duration-300">
            <span class="font-mono text-xs bg-white/5 px-2 py-1 rounded">03</span>
            <div>
              <h3 class="font-display font-bold text-sm uppercase tracking-wide">Security & Audit Compliance</h3>
              <p class="text-xs text-brand-silver mt-1">Ensures code standard conforms to modern regulatory baselines.</p>
            </div>
          </button>
        </div>

        <!-- Right Side Dynamic Content Displays -->
        <div class="lg:col-span-8 bg-[#22252C] border border-white/5 rounded-3xl p-8 relative min-h-[400px] flex flex-col justify-between overflow-hidden shadow-glow-dark">
          
          <!-- Inner Ambient Glow for current state illustration -->
          <div class="absolute -right-12 -bottom-12 w-64 h-64 bg-brand-orange/10 blur-[80px] pointer-events-none rounded-full"></div>

          <!-- TAB CONTENT: INTEGRATION (Active by default) -->
          <div id="ecosystem-tab-integration-content" class="space-y-6 transition-all duration-500 opacity-100 scale-100">
            <div class="flex items-center justify-between border-b border-white/5 pb-4">
              <div class="text-xs font-mono text-brand-orange uppercase tracking-wider">GitHub Integration System</div>
              <span class="px-2 py-0.5 rounded bg-green-500/10 text-green-500 text-[10px] font-mono font-bold">READY</span>
            </div>
            <h3 class="font-display font-bold text-2xl uppercase tracking-wide">Automatic Deployment Scans</h3>
            <p class="text-brand-silver text-sm leading-relaxed max-w-2xl">
              Integrate TestiQA straight into your current development cycles. On every pull request, our automated cloud nodes build a sandbox replicate of your stack, run parallel functional and security sweeps, and report quality metrics directly on your GitHub status deck.
            </p>
            <div class="grid grid-cols-2 gap-4 pt-4">
              <div class="bg-brand-charcoal p-4 rounded-2xl border border-white/5">
                <div class="text-xs font-bold text-white mb-1">Execution Speed</div>
                <div class="font-display font-extrabold text-lg text-brand-orange">&lt; 90 Seconds</div>
              </div>
              <div class="bg-brand-charcoal p-4 rounded-2xl border border-white/5">
                <div class="text-xs font-bold text-white mb-1">Integration Status</div>
                <div class="font-display font-extrabold text-lg text-white">Full API Hook</div>
              </div>
            </div>
          </div>

          <!-- TAB CONTENT: MONITORING -->
          <div id="ecosystem-tab-monitoring-content" class="space-y-6 transition-all duration-500 opacity-0 scale-95 hidden">
            <div class="flex items-center justify-between border-b border-white/5 pb-4">
              <div class="text-xs font-mono text-brand-orange uppercase tracking-wider">Active Monitoring Network</div>
              <span class="px-2 py-0.5 rounded bg-brand-orange/10 text-brand-orange text-[10px] font-mono font-bold">WATCHING</span>
            </div>
            <h3 class="font-display font-bold text-2xl uppercase tracking-wide">Continuous Drift Catchers</h3>
            <p class="text-brand-silver text-sm leading-relaxed max-w-2xl">
              Software environments change constantly. TestiQA works in the background of your live instances, simulating synthetic test scenarios on live nodes without interrupting actual users, identifying performance decays instantly before they trigger critical incidents.
            </p>
            <div class="grid grid-cols-2 gap-4 pt-4">
              <div class="bg-brand-charcoal p-4 rounded-2xl border border-white/5">
                <div class="text-xs font-bold text-white mb-1">Incident Delay</div>
                <div class="font-display font-extrabold text-lg text-brand-orange">Instant Warning</div>
              </div>
              <div class="bg-brand-charcoal p-4 rounded-2xl border border-white/5">
                <div class="text-xs font-bold text-white mb-1">Test Frequency</div>
                <div class="font-display font-extrabold text-lg text-white">100 / Hour</div>
              </div>
            </div>
          </div>

          <!-- TAB CONTENT: COMPLIANCE -->
          <div id="ecosystem-tab-compliance-content" class="space-y-6 transition-all duration-500 opacity-0 scale-95 hidden">
            <div class="flex items-center justify-between border-b border-white/5 pb-4">
              <div class="text-xs font-mono text-brand-orange uppercase tracking-wider">Auto Regulatory Scanners</div>
              <span class="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 text-[10px] font-mono font-bold">LOCKED</span>
            </div>
            <h3 class="font-display font-bold text-2xl uppercase tracking-wide">Enterprise Compliance Engines</h3>
            <p class="text-brand-silver text-sm leading-relaxed max-w-2xl">
              Compliance is not a one-off audit. TestiQA maintains absolute standard verification against modern regulatory baselines like SOC2, ISO27001, and HIPAA, reporting and documenting secure encryption practices automatically.
            </p>
            <div class="grid grid-cols-2 gap-4 pt-4">
              <div class="bg-brand-charcoal p-4 rounded-2xl border border-white/5">
                <div class="text-xs font-bold text-white mb-1">Compliance Score</div>
                <div class="font-display font-extrabold text-lg text-brand-orange">100% Guaranteed</div>
              </div>
              <div class="bg-brand-charcoal p-4 rounded-2xl border border-white/5">
                <div class="text-xs font-bold text-white mb-1">Report Output</div>
                <div class="font-display font-extrabold text-lg text-white">Auto-Generated</div>
              </div>
            </div>
          </div>

          <!-- Read More Link dynamic bottom trigger -->
          <div class="flex items-center justify-between border-t border-white/5 pt-6 mt-6">
            <span class="text-xs text-brand-silver">Explore full developer integration API library</span>
            <a href="#" class="text-xs font-bold text-brand-orange hover:text-white transition-colors flex items-center gap-1">
              <span>View developer portal</span>
              <span>→</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  </section>

  <!-- TESTIMONIAL / TRUST SECTOR -->
  <section class="py-24 bg-white relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <span class="font-mono text-brand-orange text-xs tracking-widest uppercase block mb-4">APPROVED SYSTEM ASSURANCE</span>
      <h2 class="font-display font-bold text-3xl md:text-5xl text-brand-charcoal uppercase mb-16 tracking-tight max-w-2xl mx-auto">
        TRUSTED BY SECURE TEAMS GLOBALLY
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 items-center justify-center">
        <!-- Logo 1 -->
        <div class="p-6 bg-brand-lightGray rounded-2xl border border-gray-100 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
          <span class="font-display font-extrabold text-lg tracking-wider text-brand-charcoal uppercase">N_JEY</span>
        </div>
        <!-- Logo 2 -->
        <div class="p-6 bg-brand-lightGray rounded-2xl border border-gray-100 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
          <span class="font-display font-extrabold text-lg tracking-wider text-brand-charcoal uppercase">ORBIT_CORE</span>
        </div>
        <!-- Logo 3 -->
        <div class="p-6 bg-brand-lightGray rounded-2xl border border-gray-100 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
          <span class="font-display font-extrabold text-lg tracking-wider text-brand-charcoal uppercase">KINETIC_FLOW</span>
        </div>
        <!-- Logo 4 -->
        <div class="p-6 bg-brand-lightGray rounded-2xl border border-gray-100 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
          <span class="font-display font-extrabold text-lg tracking-wider text-brand-charcoal uppercase">TECH_STRIKE</span>
        </div>
      </div>

      <!-- High-end Quote Box -->
      <div class="max-w-3xl mx-auto bg-brand-lightGray p-10 rounded-3xl border border-gray-100 text-left relative">
        <!-- Quote sign -->
        <div class="absolute right-8 top-8 text-brand-orange/10 font-serif text-[120px] leading-none pointer-events-none select-none font-bold">“</div>
        <p class="text-brand-charcoal text-lg font-medium leading-relaxed mb-6">
          "TestiQA integrated seamlessly with our high-availability microservices. Their automated live diagnostic engines cut down deployment incidents to near zero, giving our developers full freedom to release safely multiple times an hour."
        </p>
        <div>
          <div class="font-bold text-brand-charcoal text-sm uppercase">Marcus Aurel</div>
          <p class="text-xs text-brand-silver">Director of Quality Assurance, N_JEY Corporation</p>
        </div>
      </div>

    </div>
  </section>

  <!-- INTERACTIVE GET IN TOUCH / PROPOSAL MODAL -->
  <div id="proposal-modal" class="fixed inset-0 z-50 bg-brand-charcoal/60 backdrop-blur-md flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300">
    <div class="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-glow-dark relative transform translate-y-4 transition-transform duration-300 border border-gray-100 max-h-[90vh] overflow-y-auto">
      
      <!-- Close button -->
      <button onclick="toggleProposalModal(false)" class="absolute right-6 top-6 w-10 h-10 rounded-full bg-brand-lightGray flex items-center justify-center text-brand-silver hover:text-brand-charcoal transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Modal Content Header -->
      <div class="mb-8 pr-12">
        <span class="font-mono text-brand-orange text-xs tracking-widest uppercase block mb-2">DYNAMIC ASSURANCE INTAKE</span>
        <h3 class="font-display font-bold text-2xl text-brand-charcoal uppercase">Configure Your Assurance Strategy</h3>
        <p class="text-brand-silver text-xs mt-1">Provide your stack details to generate a customized testing roadmap.</p>
      </div>

      <!-- Interactive Form Stages -->
      <div class="space-y-6">
        <!-- Step 1: Platforms -->
        <div>
          <label class="block text-[10px] font-mono uppercase tracking-widest text-brand-silver mb-3">Which platforms need automated sweeps?</label>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <button onclick="selectModalPlatform('web')" id="modal-plat-web" class="px-4 py-3 rounded-xl border border-brand-orange bg-brand-orangeLight text-brand-orange text-xs font-semibold text-center transition-all duration-200">
              Web Engines
            </button>
            <button onclick="selectModalPlatform('api')" id="modal-plat-api" class="px-4 py-3 rounded-xl border border-gray-200 text-brand-charcoal text-xs font-semibold text-center hover:bg-gray-50 transition-all duration-200">
              API Systems
            </button>
            <button onclick="selectModalPlatform('blockchain')" id="modal-plat-blockchain" class="px-4 py-3 rounded-xl border border-gray-200 text-brand-charcoal text-xs font-semibold text-center hover:bg-gray-50 transition-all duration-200">
              Smart Contracts
            </button>
          </div>
        </div>

        <!-- Step 2: Scale Input -->
        <div>
          <div class="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-brand-silver mb-3">
            <span>Estimated Deployments Per Week</span>
            <span id="modal-deploy-label" class="text-brand-orange font-bold">15 Deployments</span>
          </div>
          <input type="range" id="modal-slider-deploy" min="1" max="100" value="15" oninput="updateModalSlider()" class="w-full accent-brand-orange bg-brand-lightGray rounded-lg h-2 appearance-none cursor-pointer">
        </div>

        <!-- Step 3: Text Contact Details -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-[10px] font-mono uppercase tracking-widest text-brand-silver mb-2">Corporate Email</label>
            <input type="email" placeholder="name@company.com" class="w-full px-4 py-3 rounded-xl bg-brand-lightGray border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-charcoal">
          </div>
          <div>
            <label class="block text-[10px] font-mono uppercase tracking-widest text-brand-silver mb-2">Your Name</label>
            <input type="text" placeholder="Johnathan Doe" class="w-full px-4 py-3 rounded-xl bg-brand-lightGray border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-charcoal">
          </div>
        </div>

        <!-- Real-time Interactive Estimate Display -->
        <div class="bg-brand-lightGray p-5 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div class="text-[10px] font-mono uppercase tracking-widest text-brand-silver">ESTIMATED WEEKLY CAP EXPENDITURE</div>
            <div id="modal-price-estimate" class="font-display font-extrabold text-2xl text-brand-charcoal mt-1">$450 <span class="text-xs font-normal text-brand-silver">/ month base</span></div>
          </div>
          <button onclick="submitModalProposal()" class="bg-brand-charcoal hover:bg-brand-orange text-white hover:shadow-glow-orange transition-all duration-300 px-6 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider">
            Confirm Proposal Details
          </button>
        </div>

      </div>

    </div>
  </div>

  <!-- FOOTER -->
  <footer class="bg-brand-charcoal text-white pt-20 pb-12 border-t border-white/5 relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-pattern-dark opacity-[0.02] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Upper Section: Branding & Form Links -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5 mb-16">
        
        <!-- Column 1: Logo & Vision -->
        <div class="lg:col-span-5 space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
              <svg class="w-5 h-5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span class="font-display font-bold text-xl tracking-tight">Testi<span class="text-brand-orange">QA</span></span>
          </div>
          <p class="text-brand-silver text-sm leading-relaxed max-w-sm">
            Deploy with zero-compromise security. Built for contemporary enterprise engineering hubs aiming to ship high-integrity code assets.
          </p>
        </div>

        <!-- Column 2: Direct Solutions Links -->
        <div class="lg:col-span-3 space-y-4">
          <h4 class="font-display font-bold text-xs uppercase tracking-widest text-brand-orange">Platform Capabilities</h4>
          <ul class="space-y-2.5 text-sm text-brand-silver">
            <li><a href="#sandbox" class="hover:text-white transition-colors">AI Diagnostics Sandbox</a></li>
            <li><a href="#dashboard" class="hover:text-white transition-colors">Real-time Telemetry Metrics</a></li>
            <li><a href="#solutions" class="hover:text-white transition-colors">Multi-stack API Gateways</a></li>
            <li><a href="#ecosystem" class="hover:text-white transition-colors">Continuous System Checks</a></li>
          </ul>
        </div>

        <!-- Column 3: Utility Links -->
        <div class="lg:col-span-4 space-y-4">
          <h4 class="font-display font-bold text-xs uppercase tracking-widest text-brand-orange">Secure Node Clusters</h4>
          <p class="text-brand-silver text-xs leading-relaxed mb-4">
            Receive automated system testing notifications directly on your preferred communication channel:
          </p>
          <div class="flex gap-4">
            <a href="#" class="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-xs font-semibold flex items-center gap-2">
              <span>Telegram Feed</span>
              <span>↗</span>
            </a>
            <a href="#" class="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-xs font-semibold flex items-center gap-2">
              <span>WhatsApp Alert Desk</span>
              <span>↗</span>
            </a>
          </div>
        </div>

      </div>

      <!-- Lower Section: Copyright and Disclaimer -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 text-brand-silver text-xs">
        <span>© 2026 TestiQA Inc. All security and platform assurances maintained automatically.</span>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition-colors">Privacy Charter</a>
          <a href="#" class="hover:text-white transition-colors">Protocol Disclaimers</a>
          <a href="#" class="hover:text-white transition-colors">Status Board</a>
        </div>
      </div>

    </div>
  </footer>

  <!-- CUSTOM SCRIPTS FOR PLATFORM INTERACTIVES -->
  <script>
    // -----------------------------------------------------
    // Interactive Simulator State (Sandbox Panel)
    // -----------------------------------------------------
    let currentProtocol = 'graphql';
    
    function setSandboxProtocol(proto) {
      currentProtocol = proto;
      
      // Reset button visuals
      const protocols = ['graphql', 'rest', 'web3', 'mobile'];
      protocols.forEach(p => {
        const btn = document.getElementById(`btn-proto-${p}`);
        if (p === proto) {
          btn.className = "px-4 py-3 rounded-xl border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs font-semibold text-center transition-all duration-200";
        } else {
          btn.className = "px-4 py-3 rounded-xl border border-white/5 bg-white/5 text-brand-silver hover:text-white text-xs font-semibold text-center transition-all duration-200";
        }
      });

      // Update terminal title text
      document.getElementById('current-proto').innerText = `${proto}_main`;

      // Log action to terminal
      const terminal = document.getElementById('sandbox-terminal');
      terminal.innerHTML += `<p class="text-white">&gt; Switched target node system protocol to: [${proto.toUpperCase()}]</p>`;
      terminal.scrollTop = terminal.scrollHeight;
    }

    function updateSandboxSliderLabels() {
      const reqsVal = document.getElementById('slider-reqs').value;
      const encVal = document.getElementById('slider-enc').value;
      
      document.getElementById('label-reqs').innerText = `${parseInt(reqsVal).toLocaleString()} RPS`;
      
      let encText = "AES-128";
      if (encVal == 1) encText = "AES-256";
      if (encVal == 2) encText = "Quantum Post-Quantum (ML-KEM)";
      document.getElementById('label-enc').innerText = encText;
    }

    function executeSandboxTest() {
      const triggerBtn = document.getElementById('btn-trigger');
      const terminal = document.getElementById('sandbox-terminal');
      const statusPill = document.getElementById('sandbox-status-pill');
      
      // Update state to Loading
      triggerBtn.disabled = true;
      triggerBtn.classList.add('opacity-50');
      statusPill.innerText = "TESTING";
      statusPill.className = "px-2.5 py-1 rounded bg-yellow-500/10 text-yellow-500 text-[10px] font-mono font-bold tracking-widest uppercase animate-pulse";

      // Reset Telemetry display values to loading status
      document.getElementById('telemetry-latency').innerText = "Loading...";
      document.getElementById('telemetry-coverage').innerText = "Analyzing...";
      document.getElementById('telemetry-threats').innerText = "Scanning...";
      document.getElementById('telemetry-status').innerText = "PROCESSING";
      document.getElementById('telemetry-status').className = "font-display font-bold text-xl text-yellow-500";

      // Clear terminal with visual header
      terminal.innerHTML = `<p class="text-brand-orange font-bold">&gt;&gt; STARTING DIAGNOSTIC CYCLE ON TARGET SUITE [${currentProtocol.toUpperCase()}]</p>`;

      const steps = [
        { delay: 400, text: `&gt; Spawning remote cloud instances on server nodes...` },
        { delay: 900, text: `&gt; Simulating volume parameters: ${document.getElementById('slider-reqs').value} client requests per second.` },
        { delay: 1400, text: `&gt; Active Security Module loaded: ${document.getElementById('label-enc').innerText}. Checking compliance protocols...` },
        { delay: 1900, text: `&gt; Success. All protocol gateways mapped safely.` },
        { delay: 2400, text: `&gt; Executing high speed testing matrices...` },
        { delay: 2900, text: `&gt;&gt; CRITICAL STATUS: SECURE. No threat vectors detected.` }
      ];

      steps.forEach(step => {
        setTimeout(() => {
          terminal.innerHTML += `<p class="text-brand-silver">${step.text}</p>`;
          terminal.scrollTop = terminal.scrollHeight;
        }, step.delay);
      });

      // Completion callback setting the premium final statistics
      setTimeout(() => {
        triggerBtn.disabled = false;
        triggerBtn.classList.remove('opacity-50');
        statusPill.innerText = "SECURE";
        statusPill.className = "px-2.5 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-mono font-bold tracking-widest uppercase";

        // Generate stylized numbers matching user input
        const targetRPS = parseInt(document.getElementById('slider-reqs').value);
        const calculatedLatency = Math.round((2500 / targetRPS) + (Math.random() * 4));
        const calculatedCoverage = (99.1 + (Math.random() * 0.8)).toFixed(2);

        document.getElementById('telemetry-latency').innerText = `${calculatedLatency} ms`;
        document.getElementById('telemetry-coverage').innerText = `${calculatedCoverage} %`;
        document.getElementById('telemetry-threats').innerText = "0 Detected";
        
        document.getElementById('telemetry-status').innerText = "VERIFIED";
        document.getElementById('telemetry-status').className = "font-display font-bold text-xl text-green-500 animate-pulse";
      }, 3200);
    }


    // -----------------------------------------------------
    // Dynamic Modal Configurator and Proposals
    // -----------------------------------------------------
    let selectedModalPlatforms = ['web'];

    function toggleProposalModal(isOpen) {
      const modal = document.getElementById('proposal-modal');
      const inner = modal.querySelector('.bg-white');
      
      if (isOpen) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        inner.classList.remove('translate-y-4');
      } else {
        modal.classList.add('opacity-0', 'pointer-events-none');
        inner.classList.add('translate-y-4');
      }
    }

    function selectModalPlatform(platform) {
      const btn = document.getElementById(`modal-plat-${platform}`);
      
      if (selectedModalPlatforms.includes(platform)) {
        // Deselect if not the last item
        if (selectedModalPlatforms.length > 1) {
          selectedModalPlatforms = selectedModalPlatforms.filter(p => p !== platform);
          btn.className = "px-4 py-3 rounded-xl border border-gray-200 text-brand-charcoal text-xs font-semibold text-center hover:bg-gray-50 transition-all duration-200";
        }
      } else {
        selectedModalPlatforms.push(platform);
        btn.className = "px-4 py-3 rounded-xl border border-brand-orange bg-brand-orangeLight text-brand-orange text-xs font-semibold text-center transition-all duration-200";
      }
      updateModalPriceEstimate();
    }

    function updateModalSlider() {
      const val = document.getElementById('modal-slider-deploy').value;
      document.getElementById('modal-deploy-label').innerText = `${val} Deployments`;
      updateModalPriceEstimate();
    }

    function updateModalPriceEstimate() {
      const deploys = parseInt(document.getElementById('modal-slider-deploy').value);
      const platformsCount = selectedModalPlatforms.length;
      
      // Calculate dynamic premium mock price
      const base = 250;
      const platformPremium = platformsCount * 100;
      const deployPremium = deploys * 12;
      const total = base + platformPremium + deployPremium;

      document.getElementById('modal-price-estimate').innerHTML = `$${total} <span class="text-xs font-normal text-brand-silver">/ month base</span>`;
    }

    function submitModalProposal() {
      alert("Custom testing roadmap generated. Our engineering leads will reach out within the hour to coordinate secure access tokens.");
      toggleProposalModal(false);
    }


    // -----------------------------------------------------
    // Rule Switching States (Dashboard Preview Section)
    // -----------------------------------------------------
    let ruleStates = { soc2: true, iso: false, hipaa: true };

    function toggleRuleSwitch(rule) {
      ruleStates[rule] = !ruleStates[rule];
      const btn = document.getElementById(`switch-${rule}`);
      const dot = document.getElementById(`dot-${rule}`);
      
      if (ruleStates[rule]) {
        btn.className = "w-10 h-6 rounded-full bg-brand-orange p-0.5 flex items-center transition-colors duration-300";
        dot.className = "w-5 h-5 rounded-full bg-white shadow transform translate-x-4 transition-transform duration-300";
      } else {
        btn.className = "w-10 h-6 rounded-full bg-gray-200 p-0.5 flex items-center transition-colors duration-300";
        dot.className = "w-5 h-5 rounded-full bg-white shadow transform translate-x-0 transition-transform duration-300";
      }

      // Dynamically simulate load gauge fluctuation when compliance filters change
      simulateGaugeFluctuation();
    }

    function simulateGaugeFluctuation() {
      // Calculate a pseudo CPU load depending on how many security switches are toggled on
      let onCount = 0;
      if (ruleStates.soc2) onCount++;
      if (ruleStates.iso) onCount++;
      if (ruleStates.hipaa) onCount++;

      const calculatedLoad = 15 + (onCount * 22) + Math.round(Math.random() * 5);
      
      // Update SVG path dash array and inner text
      document.getElementById('gauge-path').setAttribute('stroke-dasharray', `${calculatedLoad}, 100`);
      document.getElementById('gauge-label').innerText = `${calculatedLoad}%`;
    }


    // -----------------------------------------------------
    // Ecosystem Tabs Switch Mechanism
    // -----------------------------------------------------
    function switchEcosystemTab(tabId) {
      const tabs = ['tab-integration', 'tab-monitoring', 'tab-compliance'];
      
      tabs.forEach(t => {
        const btn = document.getElementById(`ecosystem-${t}-btn`);
        const content = document.getElementById(`ecosystem-${t}-content`);
        const isActive = (t === tabId);

        if (isActive) {
          // Button active style
          btn.className = "w-full text-left p-6 rounded-2xl bg-white/5 border border-brand-orange/30 text-white flex items-start gap-4 transition-all duration-300";
          btn.querySelector('span').className = "font-mono text-xs text-brand-orange bg-brand-orange/10 px-2 py-1 rounded";
          
          // Show Content
          content.classList.remove('hidden');
          setTimeout(() => {
            content.classList.add('opacity-100', 'scale-100');
            content.classList.remove('opacity-0', 'scale-95');
          }, 50);
        } else {
          // Button inactive style
          btn.className = "w-full text-left p-6 rounded-2xl bg-[#1b1e24]/40 border border-white/5 text-brand-silver hover:text-white flex items-start gap-4 transition-all duration-300";
          btn.querySelector('span').className = "font-mono text-xs bg-white/5 px-2 py-1 rounded";
          
          // Hide Content
          content.classList.add('opacity-0', 'scale-95');
          content.classList.remove('opacity-100', 'scale-100');
          setTimeout(() => {
            content.classList.add('hidden');
          }, 300);
        }
      });
    }

    // -----------------------------------------------------
    // Mobile Navigation Controls
    // -----------------------------------------------------
    function toggleMobileMenu(isOpen) {
      const menu = document.getElementById('mobile-menu');
      const drawer = menu.querySelector('.absolute');
      
      if (isOpen) {
        menu.classList.remove('opacity-0', 'pointer-events-none');
        drawer.classList.remove('translate-x-full');
      } else {
        menu.classList.add('opacity-0', 'pointer-events-none');
        drawer.classList.add('translate-x-full');
      }
    }
  </script>

</body>
</html>
8
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Compass, 
  Layers, 
  Award, 
  Sliders, 
  MapPin, 
  ChevronRight, 
  ChevronLeft, 
  Quote, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Hammer, 
  Sun, 
  Moon, 
  User, 
  Phone, 
  Mail, 
  Clock, 
  X, 
  DollarSign, 
  Send, 
  Smartphone, 
  Grid, 
  TrendingUp, 
  FileText, 
  SlidersHorizontal,
  Home,
  MessageSquare,
  Shield,
  Briefcase,
  Copy,
  ExternalLink,
  Eye,
  Activity,
  CheckCircle2,
  Lock,
  Menu
} from 'lucide-react';

// ==========================================
// COLOR PALETTE & DESIGN TOKENS
// ==========================================
// Base background: #120e0a (deep warm chocolate charcoal)
// Accents: #c39a6b (muted warm copper / bronze)
// Secondary: #dfc8ad (warm wheat/sand)
// Glows: radial-gradient around premium warm amber lights
// ==========================================

export default function App() {
  const [activeView, setActiveView] = useState('home'); // 'home', 'portfolio', 'estimator', 'dashboard'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUiKit, setShowUiKit] = useState(false);
  const [copiedToken, setCopiedToken] = useState('');
  
  // Custom cursor / global glow effect tracked on screen
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // UI Notification system
  const [notification, setNotification] = useState(null);
  const triggerNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  // Helper function to copy text (Fallback implementation for iframe safety)
  const copyToClipboard = (text, label) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setCopiedToken(label);
      triggerNotification(`Copied ${label} to clipboard!`);
      setTimeout(() => setCopiedToken(''), 2000);
    } catch (err) {
      triggerNotification('Failed to copy', 'error');
    }
    document.body.removeChild(textarea);
  };

  return (
    <div className="min-h-screen bg-[#0f0b08] text-[#f4eae0] font-sans selection:bg-[#c39a6b]/30 selection:text-white relative overflow-x-hidden">
      
      {/* Decorative Warm Backlight Glows matching luxury architectural lighting in images */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#3d2719] to-transparent opacity-40 pointer-events-none rounded-full blur-[140px] z-0"></div>
      <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-gradient-radial from-[#2d1e13] to-transparent opacity-30 pointer-events-none rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-[800px] left-0 w-[600px] h-[600px] bg-gradient-radial from-[#3a2516] to-transparent opacity-35 pointer-events-none rounded-full blur-[150px] z-0"></div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1610_1px,transparent_1px),linear-gradient(to_bottom,#1f1610_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none z-0"></div>

      {/* Global Interactive Cursor Glow */}
      <div 
        className="hidden lg:block fixed w-[400px] h-[400px] rounded-full pointer-events-none blur-[100px] opacity-[0.12] z-50 transition-transform duration-200 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-[#dfc8ad] to-transparent"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      {/* Dynamic Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1e150f] border border-[#c39a6b]/30 px-5 py-4 rounded-xl shadow-2xl backdrop-blur-md animate-fade-in slide-in-bottom">
          <div className={`w-3 h-3 rounded-full ${notification.type === 'success' ? 'bg-[#c39a6b]' : 'bg-red-500'} animate-pulse`} />
          <p className="text-sm tracking-wide font-medium text-[#f4eae0]">{notification.message}</p>
          <button onClick={() => setNotification(null)} className="text-[#f4eae0]/40 hover:text-[#f4eae0] transition-colors ml-2">
            <X size={14} />
          </button>
        </div>
      )}

      {/* FIXED PREMIUM NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-[#0f0b08]/85 backdrop-blur-md border-b border-[#c39a6b]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          
          {/* Logo / Premium Brand Mark */}
          <div 
            onClick={() => { setActiveView('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-tr from-[#1a120b] to-[#2e1f14] border border-[#c39a6b]/30 group-hover:border-[#c39a6b] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-[#c39a6b]/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="font-serif text-xl font-bold text-[#c39a6b] relative z-10 group-hover:text-[#f4eae0] transition-colors">P</span>
            </div>
            <div>
              <span className="font-serif text-2xl font-semibold tracking-wider text-white group-hover:text-[#dfc8ad] transition-colors">Procomfort</span>
              <span className="block text-[9px] uppercase tracking-[0.3em] text-[#c39a6b] font-medium leading-none">architectural comfort</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-[0.15em] uppercase font-medium">
            <button 
              onClick={() => { setActiveView('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
              className={`hover:text-[#dfc8ad] transition-all duration-300 relative py-2 ${activeView === 'home' ? 'text-[#c39a6b]' : 'text-[#f4eae0]/70'}`}
            >
              Overview
              {activeView === 'home' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c39a6b] rounded-full" />}
            </button>
            <button 
              onClick={() => setActiveView('portfolio')}
              className={`hover:text-[#dfc8ad] transition-all duration-300 relative py-2 ${activeView === 'portfolio' ? 'text-[#c39a6b]' : 'text-[#f4eae0]/70'}`}
            >
              Gallery
              {activeView === 'portfolio' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c39a6b] rounded-full" />}
            </button>
            <button 
              onClick={() => setActiveView('estimator')}
              className={`hover:text-[#dfc8ad] transition-all duration-300 relative py-2 ${activeView === 'estimator' ? 'text-[#c39a6b]' : 'text-[#f4eae0]/70'}`}
            >
              Cost Calculator
              {activeView === 'estimator' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c39a6b] rounded-full" />}
            </button>
            <button 
              onClick={() => setActiveView('dashboard')}
              className={`hover:text-[#dfc8ad] transition-all duration-300 relative py-2 ${activeView === 'dashboard' ? 'text-[#c39a6b]' : 'text-[#f4eae0]/70'}`}
            >
              Client Portal
              {activeView === 'dashboard' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c39a6b] rounded-full" />}
            </button>
          </nav>

          {/* Call to Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setShowUiKit(!showUiKit)}
              className="px-4 py-2 text-xs uppercase tracking-widest text-[#dfc8ad]/70 hover:text-[#dfc8ad] transition-colors border border-[#c39a6b]/20 hover:border-[#c39a6b]/50 rounded-lg bg-[#140e0a]"
            >
              {showUiKit ? 'Hide UI Guide' : 'Design Tokens'}
            </button>
            <button 
              onClick={() => setActiveView('estimator')}
              className="relative px-6 py-3 overflow-hidden rounded-lg group bg-[#c39a6b] text-[#120e0a] font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#c39a6b]/10 hover:shadow-[#c39a6b]/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Calculate Project <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 w-full h-full bg-white transform -skew-x-12 -translate-x-full group-hover:translate-x-0 group-hover:scale-150 transition-all duration-700 opacity-20" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#f4eae0] hover:text-[#c39a6b] transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* MOBILE NAVIGATION MENU PANEL */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0f0b08]/98 backdrop-blur-lg flex flex-col justify-between p-8 animate-fade-in md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#c39a6b] flex items-center justify-center text-[#0f0b08] font-serif font-bold">P</div>
              <span className="font-serif text-xl tracking-wider">Procomfort</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-[#f4eae0]/70 hover:text-white">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-6 my-auto text-2xl font-serif tracking-wide text-left">
            <button 
              onClick={() => { setActiveView('home'); setMobileMenuOpen(false); }} 
              className={`hover:text-[#c39a6b] text-left transition-colors ${activeView === 'home' ? 'text-[#c39a6b] pl-2 border-l-2 border-[#c39a6b]' : 'text-[#f4eae0]/70'}`}
            >
              01. Architectural Overview
            </button>
            <button 
              onClick={() => { setActiveView('portfolio'); setMobileMenuOpen(false); }} 
              className={`hover:text-[#c39a6b] text-left transition-colors ${activeView === 'portfolio' ? 'text-[#c39a6b] pl-2 border-l-2 border-[#c39a6b]' : 'text-[#f4eae0]/70'}`}
            >
              02. Premium Work Gallery
            </button>
            <button 
              onClick={() => { setActiveView('estimator'); setMobileMenuOpen(false); }} 
              className={`hover:text-[#c39a6b] text-left transition-colors ${activeView === 'estimator' ? 'text-[#c39a6b] pl-2 border-l-2 border-[#c39a6b]' : 'text-[#f4eae0]/70'}`}
            >
              03. Cost Architect
            </button>
            <button 
              onClick={() => { setActiveView('dashboard'); setMobileMenuOpen(false); }} 
              className={`hover:text-[#c39a6b] text-left transition-colors ${activeView === 'dashboard' ? 'text-[#c39a6b] pl-2 border-l-2 border-[#c39a6b]' : 'text-[#f4eae0]/70'}`}
            >
              04. Private Client Space
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={() => { setShowUiKit(true); setMobileMenuOpen(false); }}
              className="w-full py-3 text-xs tracking-widest uppercase border border-[#c39a6b]/30 text-[#dfc8ad] rounded-lg"
            >
              Explore UI Guide & Tokens
            </button>
            <button 
              onClick={() => { setActiveView('estimator'); setMobileMenuOpen(false); }}
              className="w-full py-4 text-xs tracking-widest uppercase bg-[#c39a6b] text-[#120e0a] font-bold rounded-lg text-center"
            >
              Calculate Live Estimate
            </button>
          </div>
        </div>
      )}

      {/* DESIGN TOKENS AND REUSABLE COMPONENT DRAWER (COLLAPSIBLE UI KIT) */}
      {showUiKit && (
        <div className="bg-[#19120c] border-b border-[#c39a6b]/20 py-8 px-6 animate-slide-down relative z-30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-serif text-lg text-white">Procomfort Design Tokens & Web-Kit</h3>
                <p className="text-xs text-[#dfc8ad]/70 uppercase tracking-widest mt-1">Reusable systems used on Awwwards & High-end Framer projects</p>
              </div>
              <button 
                onClick={() => setShowUiKit(false)} 
                className="p-1 rounded-full bg-[#271d14] hover:bg-[#c39a6b]/20 text-[#dfc8ad] transition-all"
              >
                <X size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              
              {/* Color Scheme column */}
              <div className="bg-[#120c08] p-4 rounded-xl border border-[#c39a6b]/10">
                <p className="text-xs font-bold uppercase tracking-wider text-[#c39a6b] mb-3">01. Ambient Palette</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded bg-[#0f0b08] border border-[#c39a6b]/20">
                    <span className="text-[11px] font-mono">Deep Shadow (#0F0B08)</span>
                    <button onClick={() => copyToClipboard('#0F0B08', 'Shadow color')} className="hover:text-[#c39a6b]"><Copy size={12} /></button>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#1e150f] border border-[#c39a6b]/20">
                    <span className="text-[11px] font-mono">Warm Clay (#1E150F)</span>
                    <button onClick={() => copyToClipboard('#1E150F', 'Warm Clay color')} className="hover:text-[#c39a6b]"><Copy size={12} /></button>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#c39a6b] text-[#120e0a]">
                    <span className="text-[11px] font-bold font-mono">Pro Accent (#C39A6B)</span>
                    <button onClick={() => copyToClipboard('#C39A6B', 'Bronze Accent color')} className="hover:text-[#120e0a]/70"><Copy size={12} /></button>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#dfc8ad] text-[#120e0a]">
                    <span className="text-[11px] font-bold font-mono">Warm Sand (#DFC8AD)</span>
                    <button onClick={() => copyToClipboard('#DFC8AD', 'Warm Sand color')} className="hover:text-[#120e0a]/70"><Copy size={12} /></button>
                  </div>
                </div>
              </div>

              {/* Typography column */}
              <div className="bg-[#120c08] p-4 rounded-xl border border-[#c39a6b]/10">
                <p className="text-xs font-bold uppercase tracking-wider text-[#c39a6b] mb-3">02. Elite Typography</p>
                <div className="space-y-3">
                  <div>
                    <span className="block text-[10px] text-zinc-500 uppercase">Premium Serif</span>
                    <p className="font-serif text-lg italic text-white">Prata / Garamond Feel</p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-zinc-500 uppercase">Clean Tech Sans</span>
                    <p className="font-sans text-sm tracking-widest uppercase font-medium text-[#dfc8ad]">Inter / SF Pro Display</p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-zinc-500 uppercase">Subtext Lightness</span>
                    <p className="font-sans text-xs text-[#f4eae0]/65">Softened body and ambient quotes</p>
                  </div>
                </div>
              </div>

              {/* Component Buttons */}
              <div className="bg-[#120c08] p-4 rounded-xl border border-[#c39a6b]/10">
                <p className="text-xs font-bold uppercase tracking-wider text-[#c39a6b] mb-3">03. Buttons & Interactions</p>
                <div className="space-y-3">
                  <button className="w-full py-2 bg-[#c39a6b] text-[#120e0a] font-semibold text-xs tracking-wider uppercase rounded hover:bg-[#dfc8ad] transition-colors">
                    Primary Bronze Action
                  </button>
                  <button className="w-full py-2 bg-transparent text-[#dfc8ad] border border-[#c39a6b]/30 font-semibold text-xs tracking-wider uppercase rounded hover:bg-[#c39a6b]/10 transition-colors">
                    Secondary Outlined
                  </button>
                  <button className="w-full py-2 bg-gradient-to-r from-[#21160e] to-[#3a271a] text-[#f4eae0] border border-[#c39a6b]/20 font-semibold text-xs tracking-wider uppercase rounded hover:border-[#c39a6b]/50 transition-colors flex items-center justify-center gap-2">
                    <Sparkles size={12} /> Ambient Glass Action
                  </button>
                </div>
              </div>

              {/* Layout System Grid */}
              <div className="bg-[#120c08] p-4 rounded-xl border border-[#c39a6b]/10">
                <p className="text-xs font-bold uppercase tracking-wider text-[#c39a6b] mb-3">04. Micro-States</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c39a6b] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#c39a6b]"></span>
                    </span>
                    <span className="text-xs text-[#dfc8ad] font-medium uppercase tracking-widest">Active Pulse Indicator</span>
                  </div>
                  <div className="p-2 rounded bg-gradient-radial-top border border-[#c39a6b]/20 text-center">
                    <span className="text-[10px] uppercase text-[#dfc8ad] tracking-[0.2em]">Light Projection Card</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-[#f4eae0]/60">
                    <span>Modern Grid:</span>
                    <span className="text-amber-200">Fluid Responsive Bento</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* RENDER DYNAMIC NAVIGATION VIEWS */}
      <main className="relative z-10">
        {activeView === 'home' && <HomeView setActiveView={setActiveView} triggerNotification={triggerNotification} />}
        {activeView === 'portfolio' && <PortfolioView triggerNotification={triggerNotification} />}
        {activeView === 'estimator' && <EstimatorView triggerNotification={triggerNotification} />}
        {activeView === 'dashboard' && <DashboardView triggerNotification={triggerNotification} />}
      </main>

      {/* ELEVATED LUXURY FOOTER */}
      <footer className="relative bg-[#0b0806] border-t border-[#c39a6b]/10 pt-20 pb-12 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand column */}
            <div className="md:col-span-4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#c39a6b] flex items-center justify-center text-[#0f0b08] font-serif font-bold text-xl">P</div>
                <div>
                  <span className="font-serif text-2xl font-bold tracking-wider text-white">Procomfort</span>
                  <span className="block text-[8px] uppercase tracking-[0.3em] text-[#c39a6b]">architectural comfort</span>
                </div>
              </div>
              <p className="text-sm text-[#f4eae0]/60 leading-relaxed max-w-sm">
                While everyone else is just offering standard construction and simple home renovations, we architect authentic living comfort. An ecosystem built around luxury, details, and pure tranquility.
              </p>
              <div className="flex items-center gap-4 text-[#c39a6b]">
                <a href="#instagram" className="p-2 rounded-full bg-[#16100c] hover:bg-[#c39a6b]/20 hover:text-white transition-all"><Smartphone size={16} /></a>
                <a href="#telegram" className="p-2 rounded-full bg-[#16100c] hover:bg-[#c39a6b]/20 hover:text-white transition-all"><Send size={16} /></a>
                <a href="#projects" className="p-2 rounded-full bg-[#16100c] hover:bg-[#c39a6b]/20 hover:text-white transition-all"><Grid size={16} /></a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#c39a6b] font-bold">Services</h4>
              <ul className="space-y-2 text-sm text-[#f4eae0]/70">
                <li><button onClick={() => { setActiveView('portfolio'); }} className="hover:text-[#dfc8ad] transition-colors">Architectural Planning</button></li>
                <li><button onClick={() => { setActiveView('portfolio'); }} className="hover:text-[#dfc8ad] transition-colors">Bespoke Living Spaces</button></li>
                <li><button onClick={() => { setActiveView('portfolio'); }} className="hover:text-[#dfc8ad] transition-colors">Smart Acoustic Interiors</button></li>
                <li><button onClick={() => { setActiveView('portfolio'); }} className="hover:text-[#dfc8ad] transition-colors">Luxury Lighting Design</button></li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#c39a6b] font-bold">Ecosystem</h4>
              <ul className="space-y-2 text-sm text-[#f4eae0]/70">
                <li><button onClick={() => { setActiveView('home'); }} className="hover:text-[#dfc8ad] transition-colors">Project Portfolio</button></li>
                <li><button onClick={() => { setActiveView('estimator'); }} className="hover:text-[#dfc8ad] transition-colors">Interactive Costing</button></li>
                <li><button onClick={() => { setActiveView('dashboard'); }} className="hover:text-[#dfc8ad] transition-colors">Private Space CRM</button></li>
                <li><button onClick={() => setShowUiKit(true)} className="hover:text-[#dfc8ad] transition-colors">Design & Assets Kit</button></li>
              </ul>
            </div>

            {/* Newsletter and dynamic input */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#c39a6b] font-bold">Request Private Catalogue</h4>
              <p className="text-xs text-[#f4eae0]/65">Get our 2026 curated catalog containing exclusive interior designs and custom high-end architectural plans.</p>
              
              <form onSubmit={(e) => { e.preventDefault(); triggerNotification("Private Catalogue sent to your mailbox!"); e.target.reset(); }} className="flex gap-2">
                <input 
                  type="email" 
                  required
                  placeholder="name@exclusive.com"
                  className="bg-[#120d09] text-xs text-[#f4eae0] border border-[#c39a6b]/20 focus:border-[#c39a6b] rounded-lg px-4 py-3 w-full outline-none transition-all placeholder:text-[#f4eae0]/30"
                />
                <button 
                  type="submit" 
                  className="bg-[#c39a6b] hover:bg-[#dfc8ad] text-[#120e0a] p-3 rounded-lg transition-colors flex items-center justify-center shrink-0"
                >
                  <Send size={16} />
                </button>
              </form>
              <span className="block text-[10px] text-zinc-500 italic">No automated spam. Pure interior design inspiration.</span>
            </div>

          </div>

          <div className="border-t border-[#c39a6b]/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#f4eae0]/40 gap-4">
            <p>© 2026 Procomfort Architectural Group. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-[#dfc8ad] transition-colors">Privacy Charter</a>
              <a href="#terms" className="hover:text-[#dfc8ad] transition-colors">Quality Guarantee</a>
              <a href="#license" className="hover:text-[#dfc8ad] transition-colors">Awwwards-inspired Design</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// =========================================================================
// VIEW: HOME & INTERACTIVE OVERVIEW
// =========================================================================
function HomeView({ setActiveView, triggerNotification }) {
  // Stat counter simulation state
  const [activeTab, setActiveTab] = useState('philosophy');
  const [activeStep, setActiveStep] = useState(0);
  
  // Custom Reviews Carousel
  const reviews = [
    {
      id: 1,
      author: "Catherine & Andrew",
      role: "Luxury Penthouse in Moscow",
      comment: "If you need premium renovation where every wall shadow is calculated and construction noise is strictly managed, Procomfort is unmatched. Their lighting simulation is a masterpiece.",
      rating: "9.8"
    },
    {
      id: 2,
      author: "Viktor Petrovich",
      role: "Villa Renovations",
      comment: "Unlike individual contractors, Procomfort works as an orchestra. Handed over the keys, returned to absolute comfort. The price represents the ultimate standard of peace.",
      rating: "9.9"
    },
    {
      id: 3,
      author: "The Symmetrical Loft LLC",
      role: "Bespoke Office Space",
      comment: "We appreciated the strict acoustic isolation engineering. It isn't just about premium textures, it is about true environmental and quiet acoustic comfort.",
      rating: "9.7"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };
  
  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Modern Workflow steps
  const steps = [
    {
      num: "01",
      title: "Architectural Diagnostic",
      desc: "Our engineers analyze acoustics, thermal profiles, and existing lighting paths before drafting blueprints.",
      tag: "Site Audit"
    },
    {
      num: "02",
      title: "Interactive 3D Light Mapping",
      desc: "We construct accurate physical simulations modeling sunlight angles and customized warm diode projections.",
      tag: "Rendering Phase"
    },
    {
      num: "03",
      title: "Premium Acoustic Isolation",
      desc: "Installing high-density quiet layers under floors, behind walls, and inside ceiling vaults to remove street noise.",
      tag: "Engineering"
    },
    {
      num: "04",
      title: "Bespoke Materialization",
      desc: "Sourcing certified premium bronze, natural clays, oiled larch wood, and handcrafted metal plates for structural elements.",
      tag: "Final Handover"
    }
  ];

  return (
    <div className="animate-fade-in">
      
      {/* 1. HERO ARCHITECTURAL SELECTION (CINEMATIC) */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 pt-12 pb-20">
        
        {/* Dynamic Warm Highlight Background Mask */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#0f0b08]/50 to-[#0f0b08]"></div>
        
        {/* Decorative architectural circle simulating top light/skylight */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[85vw] max-w-[800px] h-[350px] rounded-[100%] bg-[#422c1b] opacity-[0.25] filter blur-[75px] pointer-events-none" />
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[65vw] max-w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#c39a6b]/40 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text content left block */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Upper tagline badge */}
            <div className="inline-flex items-center gap-3 bg-[#1e150f] border border-[#c39a6b]/20 px-4 py-2 rounded-full backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c39a6b] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c39a6b]" />
              </span>
              <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#dfc8ad]">
                renovations without stress • one year full warranty
              </p>
            </div>

            {/* Giant Architectural Title */}
            <div className="space-y-4">
              <p className="text-[#dfc8ad] text-xs font-serif tracking-[0.2em] italic">While others build standard structures, we create...</p>
              <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl text-white font-semibold leading-[1.05] tracking-tight">
                Procomfort<span className="text-[#c39a6b]">.</span>
              </h1>
              <p className="text-[#f4eae0]/80 text-lg md:text-xl font-light max-w-xl leading-relaxed">
                Premium architectural renovations engineered for tranquility. Deep warm color palettes, acoustics designed for perfect sleep, and custom sensory lighting.
              </p>
            </div>

            {/* Quick interactive feature indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-[#c39a6b]/10">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#c39a6b] font-medium block">Acoustics</span>
                <span className="text-sm text-[#f4eae0]/80">Maximum -45dB Isolation</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#c39a6b] font-medium block">Materials</span>
                <span className="text-sm text-[#f4eae0]/80">Hand-selected natural clay</span>
              </div>
              <div className="space-y-1 hidden sm:block">
                <span className="text-[10px] uppercase tracking-widest text-[#c39a6b] font-medium block">Lighting Plan</span>
                <span className="text-sm text-[#f4eae0]/80">Circadian soft glow</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button 
                onClick={() => setActiveView('estimator')}
                className="px-8 py-4 bg-[#c39a6b] hover:bg-[#dfc8ad] text-[#120e0a] font-bold text-xs tracking-widest uppercase rounded-lg transition-all shadow-xl shadow-[#c39a6b]/10 flex items-center justify-center gap-3 group"
              >
                Launch Luxury Estimator
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button 
                onClick={() => setActiveView('portfolio')}
                className="px-8 py-4 border border-[#c39a6b]/30 hover:border-[#c39a6b] bg-transparent text-[#dfc8ad] font-bold text-xs tracking-widest uppercase rounded-lg transition-all hover:bg-[#c39a6b]/5 flex items-center justify-center gap-2"
              >
                <span>Browse Gallery</span>
                <Eye size={14} />
              </button>
            </div>

          </div>

          {/* Hero right block - High visual art preview simulating spiral luxury architecture from user image */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square md:max-w-md mx-auto rounded-full overflow-hidden border border-[#c39a6b]/20 bg-[#120e0a] flex items-center justify-center p-8 group">
              
              {/* Spinning / rotating halo light element mimicking structural circle */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#2b1c12] to-[#120e0a] opacity-80" />
              <div className="absolute inset-4 rounded-full border border-dashed border-[#c39a6b]/15 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-[#c39a6b]/5" />
              
              {/* Dynamic light reflection slider controlled by simple overlay state */}
              <div className="absolute top-[20%] left-[20%] right-[20%] bottom-[20%] rounded-full bg-gradient-to-tr from-[#312015] to-[#714f31] opacity-35 filter blur-[15px] group-hover:scale-110 transition-transform duration-700" />

              {/* The "Golden Spiral" aesthetic from prompt image */}
              <div className="relative z-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#0f0b08] border border-[#c39a6b]/40 flex items-center justify-center mx-auto shadow-inner">
                  <Compass className="text-[#c39a6b] animate-pulse" size={28} />
                </div>
                <h3 className="font-serif text-2xl text-white tracking-wide">The Comfort Spiral</h3>
                <p className="text-xs text-[#f4eae0]/70 max-w-xs mx-auto leading-relaxed">
                  "Most construct rooms. We craft architectural environments that cradle your senses."
                </p>
                <div className="inline-block px-3 py-1 bg-[#1c140e] border border-[#c39a6b]/30 rounded-full text-[9px] tracking-widest uppercase text-[#dfc8ad]">
                  circadian rhythm model active
                </div>
              </div>

              {/* Minimal floating specs */}
              <div className="absolute bottom-6 left-6 text-left">
                <span className="block font-serif text-[#c39a6b] text-xl font-bold">2026</span>
                <span className="text-[8px] uppercase tracking-wider text-[#f4eae0]/40">interior philosophy</span>
              </div>
              <div className="absolute top-6 right-6 text-right">
                <span className="block font-mono text-xs text-[#dfc8ad]">ID: #99A1</span>
                <span className="text-[8px] uppercase tracking-wider text-[#f4eae0]/40">premium standard</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE PROBLEM VS OUR COMFORT SOLUTION - ASYMMETRIC GRID (BASED ON IMAGE ROWS) */}
      <section className="py-24 border-t border-[#c39a6b]/10 bg-[#120e0a]/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section title header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c39a6b] font-bold block mb-2">Architectural Standards</span>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-medium">Why Procomfort is Built Differently</h2>
            </div>
            <p className="text-[#f4eae0]/60 max-w-md text-sm leading-relaxed">
              We reject cheap drywall installations and rapid acoustic shortcuts. Every surface is an acoustic block, and every shadow is designed to calm your optic nerves.
            </p>
          </div>

          {/* Grid Layout mimicking the rows from the user's uploaded mockup */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Box 1 (Left narrow column) - Drywall/Typical Issues */}
            <div className="md:col-span-4 bg-[#140e0a] border border-[#c39a6b]/15 p-8 rounded-2xl flex flex-col justify-between hover:border-[#c39a6b]/35 transition-all group">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#f4eae0]/40 block font-mono">01 / The Industry Failure</span>
                <h3 className="font-serif text-xl text-white group-hover:text-[#dfc8ad] transition-colors">Standard construction bypasses sensory comfort.</h3>
                <p className="text-xs text-[#f4eae0]/65 leading-relaxed">
                  Traditional companies focus entirely on rapid drywall placement, leading to echo chambers, visible junction gaps, and zero thermal protection from internal wall moisture.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#c39a6b]/10 flex items-center justify-between text-[11px] text-[#f4eae0]/40">
                <span>Echo standard</span>
                <span className="text-red-400 font-mono">+12dB Over-reflection</span>
              </div>
            </div>

            {/* Box 2 (Center double column) - The Premium Couch / Visual Lounge Block */}
            <div className="md:col-span-8 bg-gradient-to-br from-[#1b120c] to-[#0f0b08] border border-[#c39a6b]/20 rounded-2xl overflow-hidden relative min-h-[350px] flex flex-col justify-end p-8 group">
              {/* Simulated interior architectural spotlight radiating from top corner */}
              <div className="absolute -top-12 right-24 w-60 h-60 rounded-full bg-[#dfc8ad]/10 filter blur-[40px]" />
              
              {/* Minimal interior couch rendering placeholder to match mockup feel */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3a2717]/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-4 max-w-md">
                <span className="inline-block px-3 py-1 bg-[#c39a6b]/10 border border-[#c39a6b]/30 rounded-full text-[9px] uppercase tracking-widest text-[#dfc8ad]">
                  Oasis of Quiet
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white">"While standard builders leave drafts, we build architectural seals."</h3>
                <p className="text-xs text-[#f4eae0]/75 leading-relaxed">
                  Our custom-engineered room walls use structural triple-isolation, ensuring absolute acoustic comfort. When the door is closed, you are completely shielded from external vibrations.
                </p>
              </div>

              <div className="absolute bottom-6 right-6">
                <span className="text-[10px] tracking-widest uppercase text-[#c39a6b] font-mono">Result: Absolute Quiet</span>
              </div>
            </div>

            {/* Box 3 (Bottom double column) - Light engineering detail */}
            <div className="md:col-span-7 bg-[#140e0a] border border-[#c39a6b]/15 p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between hover:border-[#c39a6b]/35 transition-all group">
              <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-[#c39a6b]/10 filter blur-[35px]" />
              
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#f4eae0]/40 block font-mono">02 / Integrated Lighting</span>
                <h3 className="font-serif text-xl text-white">Perfect Luminescence, Hidden Light Tracks</h3>
                <p className="text-xs text-[#f4eae0]/65 leading-relaxed">
                  No naked diodes. All light strips are mounted behind custom dynamic profiles designed to reflect light off secondary warm clay ceilings, reproducing the calming glow of natural sunset.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#c39a6b]/10 flex flex-wrap gap-4 text-[10px] uppercase tracking-widest text-[#dfc8ad]">
                <span className="bg-[#1e150f] px-2 py-1 rounded border border-[#c39a6b]/20">Circadian Dimming</span>
                <span className="bg-[#1e150f] px-2 py-1 rounded border border-[#c39a6b]/20">2700K Warm Temperature</span>
              </div>
            </div>

            {/* Box 4 (Bottom single column) - Quality over Quantity */}
            <div className="md:col-span-5 bg-gradient-to-b from-[#1b120c] to-[#0f0b08] border border-[#c39a6b]/15 p-8 rounded-2xl flex flex-col justify-between hover:border-[#c39a6b]/35 transition-all group">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#f4eae0]/40 block font-mono">03 / Exclusive Capacity</span>
                <h3 className="font-serif text-xl text-white">We accept only 4 major custom projects per quarter.</h3>
                <p className="text-xs text-[#f4eae0]/65 leading-relaxed">
                  Unlike massive builder corporations, our engineering squad remains directly on your site. The senior architect monitors wall gaps and acoustic seals personally, daily.
                </p>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => setActiveView('estimator')} 
                  className="w-full py-3 bg-[#c39a6b]/10 hover:bg-[#c39a6b] text-[#dfc8ad] hover:text-[#120e0a] border border-[#c39a6b]/30 rounded-xl text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Premium Slot</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CORE STATISTICS IN DIGITS & SUBSTANTIVE METRICS */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#140e0a] border border-[#c39a6b]/15 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            
            {/* Absolute Backlight mimicking the desk light projection from user uploaded image */}
            <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-gradient-radial from-[#49311d] to-transparent opacity-25 pointer-events-none rounded-full blur-[90px]" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-[#c39a6b] font-bold block">Scientific Diagnostics</span>
                <h3 className="font-serif text-3xl md:text-4xl text-white">Procomfort in Figures and Facts</h3>
                <p className="text-xs text-[#f4eae0]/65 leading-relaxed">
                  Our calculations are based on acoustic decibel monitoring, indoor atmospheric sensors, and long-term testing.
                </p>
                <div className="pt-4">
                  <span className="text-xs text-[#dfc8ad] uppercase tracking-wider font-mono">Tested by Architectural Labs, 2026</span>
                </div>
              </div>

              {/* Dynamic counters & Stats columns */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Stat 1 */}
                <div className="bg-[#1a120c] border border-[#c39a6b]/20 p-6 rounded-2xl relative group hover:border-[#c39a6b] transition-all">
                  <span className="text-4xl md:text-5xl font-serif font-semibold text-white block mb-2">8</span>
                  <span className="text-xs uppercase tracking-widest text-[#c39a6b] font-bold block mb-1">Key Patents</span>
                  <p className="text-[11px] text-[#f4eae0]/60">Unique acoustic panel structures and soft light projection profiles.</p>
                </div>

                {/* Stat 2 */}
                <div className="bg-[#1a120c] border border-[#c39a6b]/20 p-6 rounded-2xl relative group hover:border-[#c39a6b] transition-all">
                  <span className="text-4xl md:text-5xl font-serif font-semibold text-white block mb-2">50+</span>
                  <span className="text-xs uppercase tracking-widest text-[#c39a6b] font-bold block mb-1">Penthouses Completed</span>
                  <p className="text-[11px] text-[#f4eae0]/60">High-end bespoke lofts and private residences around the region.</p>
                </div>

                {/* Stat 3 */}
                <div className="bg-[#1a120c] border border-[#c39a6b]/20 p-6 rounded-2xl relative group hover:border-[#c39a6b] transition-all">
                  <span className="text-4xl md:text-5xl font-serif font-semibold text-white block mb-2">9.8</span>
                  <span className="text-xs uppercase tracking-widest text-[#c39a6b] font-bold block mb-1">Acoustic Score</span>
                  <p className="text-[11px] text-[#f4eae0]/60">Average sensory evaluation mark given by our clients post-renovation.</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW / WORK PHASES TIMELINE STEPS (INTERACTIVE) */}
      <section className="py-24 bg-[#120e0a]/30 border-t border-[#c39a6b]/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c39a6b] font-bold block">No Stress Blueprint</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white">Our Meticulous Phases</h2>
            <p className="text-xs text-[#f4eae0]/60">
              We carry out everything in strict structural sequences. Select a phase below to preview the architectural processes involved.
            </p>
          </div>

          {/* Interactive Steps Horizontal Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step triggers (Left side) */}
            <div className="lg:col-span-5 space-y-3">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                    activeStep === idx 
                      ? 'bg-[#1e140d] border-[#c39a6b] shadow-lg' 
                      : 'bg-[#140e0a] border-[#c39a6b]/10 hover:border-[#c39a6b]/30'
                  }`}
                >
                  <span className={`font-serif text-xl font-bold ${activeStep === idx ? 'text-[#c39a6b]' : 'text-[#f4eae0]/40'}`}>
                    {step.num}
                  </span>
                  <div className="flex-1">
                    <span className="block text-xs uppercase tracking-widest text-[#dfc8ad]/50 font-mono mb-0.5">{step.tag}</span>
                    <h4 className={`font-serif text-base ${activeStep === idx ? 'text-white' : 'text-[#f4eae0]/70'}`}>{step.title}</h4>
                  </div>
                  <ChevronRight size={16} className={`transition-transform ${activeStep === idx ? 'text-[#c39a6b] translate-x-1' : 'text-[#f4eae0]/30'}`} />
                </button>
              ))}
            </div>

            {/* Dynamic Step Detail Card (Right side) with light animation simulation */}
            <div className="lg:col-span-7 bg-gradient-to-tr from-[#16100c] to-[#261b11] border border-[#c39a6b]/20 p-8 rounded-3xl min-h-[380px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
              
              {/* Soft ambient glow from the bottom of the card mimicking step details */}
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#c39a6b]/15 filter blur-[40px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#c39a6b] uppercase tracking-widest">Active Phase Details</span>
                  <span className="text-4xl font-serif text-white/10 font-bold">{steps[activeStep].num}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-white">{steps[activeStep].title}</h3>
                  <p className="text-sm text-[#f4eae0]/75 leading-relaxed">
                    {steps[activeStep].desc}
                  </p>
                </div>

                {/* Substantive mock technical specifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#c39a6b]/15">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase text-zinc-500 font-bold block">Assigned Squad</span>
                    <span className="text-xs text-[#dfc8ad] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#c39a6b] rounded-full animate-pulse" />
                      1 Senior Engineer + 2 Acoustics Specialists
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase text-zinc-500 font-bold block">Approximate Duration</span>
                    <span className="text-xs text-[#dfc8ad]">7 to 14 Calendar Days</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 flex items-center justify-between text-xs text-[#f4eae0]/50">
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-[#c39a6b]" /> Comprehensive QA Checklist Enforced
                </span>
                <button 
                  onClick={() => { setActiveView('estimator'); triggerNotification("Calculated based on selected custom stages!"); }}
                  className="text-xs text-[#c39a6b] hover:text-[#dfc8ad] font-bold uppercase tracking-widest flex items-center gap-1.5 group"
                >
                  Estimate Phase Cost <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. CLIENT REVIEWS SECTION - CAROUSEL OVERLAY */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0f0b08] to-[#120e0a]">
        
        {/* Abstract lights background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#c39a6b]/5 filter blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c39a6b] font-bold block mb-2">Honest Feedback</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white">Client Testimonials</h2>
            <p className="text-xs text-[#f4eae0]/60 mt-2">Real comfort is felt immediately. Hear how our clients live now.</p>
          </div>

          {/* Testimonial slider layout */}
          <div className="bg-[#18110b] border border-[#c39a6b]/20 p-8 md:p-12 rounded-3xl relative max-w-4xl mx-auto shadow-2xl">
            <div className="absolute top-6 right-8 text-white/5 font-serif text-[120px] leading-none pointer-events-none select-none font-bold">"</div>
            
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
              
              {/* Stars & Rating indicator */}
              <div className="flex items-center gap-2 mb-6">
                <Quote className="text-[#c39a6b]" size={24} />
                <span className="text-xs uppercase tracking-widest text-[#dfc8ad] font-mono ml-2">Premium Rating Score: {reviews[currentReview].rating} / 10</span>
              </div>

              {/* Review Text */}
              <p className="font-serif text-lg md:text-2xl text-white italic leading-relaxed mb-8">
                "{reviews[currentReview].comment}"
              </p>

              {/* Author Info & Nav Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-6 border-t border-[#c39a6b]/10">
                <div>
                  <h4 className="font-serif text-lg text-white font-semibold">{reviews[currentReview].author}</h4>
                  <p className="text-xs text-[#c39a6b] uppercase tracking-wider">{reviews[currentReview].role}</p>
                </div>

                {/* Control elements */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={prevReview}
                    className="p-3 bg-[#110c08] border border-[#c39a6b]/20 text-[#dfc8ad] hover:text-white hover:border-[#c39a6b] rounded-full transition-all"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="text-xs font-mono text-[#f4eae0]/40">
                    {currentReview + 1} / {reviews.length}
                  </span>
                  <button 
                    onClick={nextReview}
                    className="p-3 bg-[#110c08] border border-[#c39a6b]/20 text-[#dfc8ad] hover:text-white hover:border-[#c39a6b] rounded-full transition-all"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. IMMERSIVE BRAND FOOTER BANNER / CTA */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-t from-[#0b0806] to-[#120e0a] border-t border-[#c39a6b]/10">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8 relative z-10">
          
          <div className="w-16 h-16 rounded-full bg-[#1e150f] border border-[#c39a6b]/30 flex items-center justify-center mx-auto shadow-2xl">
            <Sparkles className="text-[#c39a6b] animate-pulse" size={24} />
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-4xl md:text-6xl text-white font-semibold tracking-tight">
              Ready to feel true comfort?
            </h2>
            <p className="text-sm text-[#f4eae0]/70 leading-relaxed">
              Step away from chaotic general contractors. Experience a systematic approach where premium materials and luxury physics come together for your peace of mind.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
            <button 
              onClick={() => setActiveView('estimator')}
              className="w-full sm:w-auto px-8 py-4 bg-[#c39a6b] hover:bg-[#dfc8ad] text-[#120e0a] font-bold text-xs tracking-widest uppercase rounded-lg transition-all shadow-xl"
            >
              Consult Cost Estimator
            </button>
            <button 
              onClick={() => setActiveView('dashboard')}
              className="w-full sm:w-auto px-8 py-4 bg-[#1a130f] hover:bg-[#2e2017] border border-[#c39a6b]/30 text-[#dfc8ad] font-bold text-xs tracking-widest uppercase rounded-lg transition-all"
            >
              Access Demo Client Portal
            </button>
          </div>

          <div className="pt-8 text-xs text-[#f4eae0]/40 flex items-center justify-center gap-2">
            <Clock size={12} />
            <span>Currently evaluating luxury project requests for Summer / Autumn 2026.</span>
          </div>

        </div>
      </section>

    </div>
  );
}

// =========================================================================
// VIEW: PORTFOLIO GALLERY (INTERACTIVE LIGHT SIMULATION)
// =========================================================================
function PortfolioView({ triggerNotification }) {
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [simulationLight, setSimulationLight] = useState('ambient'); // 'day', 'ambient', 'dark'

  const projects = [
    {
      id: "loft-moscow",
      title: "Moscow River Penthouse",
      category: "penthouse",
      area: "145 sqm",
      acoustics: "-48dB quiet-wall system",
      lighting: "Circadian 24h hidden dynamic glow",
      materials: "Oiled Smoked Oak, Bronze sheets, Clay finish",
      image: "Moscow Penthouse interior featuring rich warm lighting, dark brown ceiling, architectural circles, and minimalist luxurious low furniture",
      desc: "An architectural wonder focusing heavily on absolute sunset colors. The entire acoustic frame of this residence is completely decoupled from adjacent structural pillars to guarantee noise levels never surpass 22 decibels at night."
    },
    {
      id: "villa-sochi",
      title: "Sochi Sea-View Sanctuary",
      category: "residence",
      area: "310 sqm",
      acoustics: "Acoustic ceiling sound buffers",
      lighting: "Integrated linear perimeter cove light",
      materials: "Polished Travertine, Teakwood, Raw Iron highlights",
      image: "Modern luxury coastal residence with bronze metallic highlights and cozy modular sofa reflecting gold hues from hidden warm lighting",
      desc: "Designed to reflect ocean sound waves away from living quarters while maximizing custom interior comfort. Warm clay plaster walls naturally regulate temperature and humidity without active hum from air systems."
    },
    {
      id: "loft-office",
      title: "Acoustic Executive Study",
      category: "office",
      area: "75 sqm",
      acoustics: "-52dB ultra isolation core",
      lighting: "Soft ambient desk lights & vertical glow",
      materials: "Satin Brass, Felt wool acoustical panels",
      image: "High-end corporate office study room with curved acoustic walls, premium bronze fixtures, and integrated warm circadian glow",
      desc: "Designed specifically for concentrated deep-work. The ceiling contains deep vertical wooden slats packed with recycled high-density wool, completely trapping voice echoes."
    },
    {
      id: "flat-symmetrical",
      title: "The Bronze Duplex",
      category: "penthouse",
      area: "190 sqm",
      acoustics: "Triple-pane noise barrier screens",
      lighting: "Modular spot beam projectors",
      materials: "Curved brushed bronze plates, Brushed ashwood",
      image: "Symmetrical modern apartment with magnificent curved staircase made of bronze steel and hidden warm linear lighting",
      desc: "Highly tailored symmetry emphasizing bronze plates that gracefully reflect physical light cones. Features custom integrated smart climate systems hiding any visible plastic vents."
    }
  ];

  const filteredProjects = useMemo(() => {
    if (filterCategory === 'all') return projects;
    return projects.filter(p => p.category === filterCategory);
  }, [filterCategory]);

  return (
    <div className="py-12 max-w-7xl mx-auto px-6 animate-fade-in">
      
      {/* Upper header */}
      <div className="space-y-4 mb-12">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#c39a6b] font-bold block">Exclusive Portfolio</span>
        <h1 className="font-serif text-4xl md:text-6xl text-white font-medium">Curated Architectural Works</h1>
        <p className="text-sm text-[#f4eae0]/70 max-w-2xl">
          Each home is a unique, sensory-mapped project built from the ground up to prevent sensory exhaustion and acoustic noise.
        </p>
      </div>

      {/* Filter Category Buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-10 border-b border-[#c39a6b]/10 pb-6">
        {['all', 'penthouse', 'residence', 'office'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-5 py-2.5 rounded-lg text-xs tracking-widest uppercase font-bold transition-all ${
              filterCategory === cat 
                ? 'bg-[#c39a6b] text-[#120e0a]' 
                : 'bg-[#18110b] text-[#dfc8ad]/70 hover:text-white border border-[#c39a6b]/15'
            }`}
          >
            {cat === 'all' ? 'All Spaces' : cat}
          </button>
        ))}
      </div>

      {/* Interactive Light Simulation Control Widget */}
      <div className="bg-[#18110b] border border-[#c39a6b]/20 p-6 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-widest text-[#c39a6b] font-bold block">Live Atmosphere Simulation</span>
          <p className="text-xs text-[#f4eae0]/65">Simulate how our premium warm materials reflect lighting at different times of day.</p>
        </div>
        
        <div className="flex bg-[#120c08] p-1.5 rounded-xl border border-[#c39a6b]/20">
          <button 
            onClick={() => { setSimulationLight('day'); triggerNotification("Simulating Noon Daylight (5000K)"); }}
            className={`px-4 py-2 text-[10px] uppercase tracking-widest rounded-lg font-bold transition-all flex items-center gap-2 ${simulationLight === 'day' ? 'bg-[#c39a6b]/20 text-[#dfc8ad] border border-[#c39a6b]/30' : 'text-[#f4eae0]/50'}`}
          >
            <Sun size={12} /> Day (4500K)
          </button>
          <button 
            onClick={() => { setSimulationLight('ambient'); triggerNotification("Simulating Cozy Architectural Glow (2700K)"); }}
            className={`px-4 py-2 text-[10px] uppercase tracking-widest rounded-lg font-bold transition-all flex items-center gap-2 ${simulationLight === 'ambient' ? 'bg-[#c39a6b]/20 text-[#dfc8ad] border border-[#c39a6b]/30' : 'text-[#f4eae0]/50'}`}
          >
            <Sliders size={12} /> Cozy (2700K)
          </button>
          <button 
            onClick={() => { setSimulationLight('dark'); triggerNotification("Simulating Night Sleep Environment (1800K)"); }}
            className={`px-4 py-2 text-[10px] uppercase tracking-widest rounded-lg font-bold transition-all flex items-center gap-2 ${simulationLight === 'dark' ? 'bg-[#c39a6b]/20 text-[#dfc8ad] border border-[#c39a6b]/30' : 'text-[#f4eae0]/50'}`}
          >
            <Moon size={12} /> Night (1800K)
          </button>
        </div>
      </div>

      {/* Grid of Portfolio projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {filteredProjects.map((proj) => (
          <div 
            key={proj.id}
            className="group bg-[#140e0a] border border-[#c39a6b]/15 rounded-3xl overflow-hidden hover:border-[#c39a6b]/45 transition-all flex flex-col justify-between"
          >
            {/* The Visual Frame simulating lighting */}
            <div className="relative aspect-[16/10] bg-[#1d150f] overflow-hidden flex items-center justify-center p-8">
              
              {/* Dynamic Overlay representing simulated light change */}
              <div className={`absolute inset-0 transition-colors duration-1000 ${
                simulationLight === 'day' ? 'bg-amber-100/5' : 
                simulationLight === 'ambient' ? 'bg-[#ffaa00]/10 mix-blend-color-burn' : 
                'bg-blue-900/10 mix-blend-multiply'
              }`} />

              {/* Lighting Glow Spot simulating wall fixture reflection */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-48 transition-all duration-1000 rounded-full blur-[45px] ${
                simulationLight === 'day' ? 'h-32 bg-[#ffeedd]/30' : 
                simulationLight === 'ambient' ? 'h-40 bg-[#ffa500]/40' : 
                'h-16 bg-[#ff6600]/25'
              }`} />

              {/* Central Geometric Icon representing high-end interior architecture */}
              <div className="relative z-10 text-center space-y-3 p-4 bg-[#0f0b08]/90 border border-[#c39a6b]/20 rounded-2xl max-w-xs shadow-2xl">
                <Compass className="text-[#c39a6b] mx-auto" size={32} />
                <span className="block text-[9px] uppercase tracking-widest text-[#dfc8ad]">Simulation Active</span>
                <p className="text-xs font-mono text-[#f4eae0]/60 italic">"{proj.image}"</p>
              </div>

              {/* Small Category Badge */}
              <span className="absolute bottom-4 left-4 bg-[#140e0a]/80 border border-[#c39a6b]/30 px-3 py-1 rounded-full text-[9px] tracking-widest uppercase text-[#dfc8ad]">
                {proj.category}
              </span>
            </div>

            {/* Content text */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="font-serif text-2xl text-white group-hover:text-[#c39a6b] transition-colors">{proj.title}</h3>
                <span className="text-xs font-mono text-[#c39a6b] bg-[#1e150f] px-2 py-1 rounded">{proj.area}</span>
              </div>

              <p className="text-xs text-[#f4eae0]/70 leading-relaxed line-clamp-3">
                {proj.desc}
              </p>

              {/* Quick specifications */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#c39a6b]/10 text-[10px] text-[#f4eae0]/60">
                <div>
                  <span className="block text-[#c39a6b] uppercase font-bold tracking-widest">ACOUSTIC RATING:</span>
                  <span>{proj.acoustics}</span>
                </div>
                <div>
                  <span className="block text-[#c39a6b] uppercase font-bold tracking-widest">LIGHTS ENGINE:</span>
                  <span>{proj.lighting}</span>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-3 bg-[#1e150f] hover:bg-[#c39a6b] text-[#dfc8ad] hover:text-[#120e0a] border border-[#c39a6b]/20 hover:border-transparent rounded-xl text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span>Examine Blueprints & Specs</span>
                  <ExternalLink size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blueprints Spec Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#0f0b08]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#18110b] border border-[#c39a6b]/40 rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl animate-scale-up">
            
            <button 
              onClick={() => setSelectedProject(null)} 
              className="absolute top-6 right-6 p-1.5 rounded-full bg-[#120b08] hover:bg-[#c39a6b]/20 text-[#dfc8ad] transition-all"
            >
              <X size={18} />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#c39a6b] font-bold block mb-1">Architectural Dossier</span>
                <h3 className="font-serif text-3xl text-white">{selectedProject.title}</h3>
                <p className="text-xs text-[#dfc8ad]/70 mt-1">Full construction specifications & materialization</p>
              </div>

              <div className="p-4 bg-[#0f0b08] border border-[#c39a6b]/20 rounded-2xl text-xs space-y-3">
                <div className="flex justify-between py-1.5 border-b border-[#c39a6b]/10">
                  <span className="text-zinc-500">Gross Floor Area:</span>
                  <span className="font-mono text-white">{selectedProject.area}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#c39a6b]/10">
                  <span className="text-zinc-500">Acoustic Shield Rating:</span>
                  <span className="font-mono text-[#c39a6b]">{selectedProject.acoustics}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#c39a6b]/10">
                  <span className="text-zinc-500">Luminescence Rig:</span>
                  <span className="font-mono text-white">{selectedProject.lighting}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-zinc-500">Core Materials:</span>
                  <span className="text-right text-[#dfc8ad]">{selectedProject.materials}</span>
                </div>
              </div>

              <p className="text-xs text-[#f4eae0]/75 leading-relaxed bg-[#1e150f] p-4 rounded-xl border border-[#c39a6b]/10">
                {selectedProject.desc}
              </p>

              <div className="flex items-center gap-3 pt-4">
                <button 
                  onClick={() => { 
                    triggerNotification(`Added blueprint of ${selectedProject.title} to download queue!`); 
                    setSelectedProject(null); 
                  }}
                  className="flex-1 py-3 bg-[#c39a6b] hover:bg-[#dfc8ad] text-[#120e0a] text-xs font-bold uppercase tracking-widest rounded-xl transition-colors"
                >
                  Download CAD Blueprints
                </button>
                <button 
                  onClick={() => { setSelectedProject(null); setActiveView('estimator'); }}
                  className="px-6 py-3 border border-[#c39a6b]/20 hover:bg-[#1e150f] text-[#dfc8ad] text-xs font-bold uppercase tracking-widest rounded-xl transition-colors"
                >
                  Calculate Similar Build
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

// =========================================================================
// VIEW: COST ESTIMATOR & PLANNER (LIVE CALCULATIONS)
// =========================================================================
function EstimatorView({ triggerNotification }) {
  // Calculator state variables
  const [apartmentSize, setApartmentSize] = useState(85);
  const [styleTier, setStyleTier] = useState('premium'); // 'premium', 'elite-acoustics', 'absolute-comfort'
  const [includeLightingSimulation, setIncludeLightingSimulation] = useState(true);
  const [includeSmartHomeAcoustics, setIncludeSmartHomeAcoustics] = useState(false);
  const [selectedPhases, setSelectedPhases] = useState(['blueprint', 'demolition', 'isolation', 'finishing']);
  const [clientPhone, setClientPhone] = useState('');
  const [clientName, setClientName] = useState('');

  // Base costs calculation formulas
  const baseCostPerSqm = {
    'premium': 450,
    'elite-acoustics': 680,
    'absolute-comfort': 950
  };

  const calculatedBase = useMemo(() => {
    return apartmentSize * baseCostPerSqm[styleTier];
  }, [apartmentSize, styleTier]);

  const lightingAddon = includeLightingSimulation ? (apartmentSize * 45) : 0;
  const smartHomeAddon = includeSmartHomeAcoustics ? (apartmentSize * 80) : 0;
  
  // Phase multipliers based on checklist selection
  const phaseCost = useMemo(() => {
    return selectedPhases.length * (apartmentSize * 35);
  }, [selectedPhases, apartmentSize]);

  const totalEstimate = useMemo(() => {
    return calculatedBase + lightingAddon + smartHomeAddon + phaseCost;
  }, [calculatedBase, lightingAddon, smartHomeAddon, phaseCost]);

  const togglePhase = (phaseId) => {
    if (selectedPhases.includes(phaseId)) {
      setSelectedPhases(selectedPhases.filter(p => p !== phaseId));
    } else {
      setSelectedPhases([...selectedPhases, phaseId]);
    }
  };

  const handleEstimateSubmission = (e) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      triggerNotification("Please fill in your contact coordinates.", "error");
      return;
    }
    triggerNotification(`Estimate reservation successful! ID: #EST-${Math.floor(Math.random()*90000+10000)}`);
    // Reset contact fields
    setClientName('');
    setClientPhone('');
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-6 animate-fade-in">
      
      {/* Upper header */}
      <div className="space-y-4 mb-12 text-center max-w-2xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#c39a6b] font-bold block">Dynamic Cost Planner</span>
        <h1 className="font-serif text-4xl md:text-5xl text-white font-medium">Configure Your Environment</h1>
        <p className="text-xs text-[#f4eae0]/70">
          Obtain an immediate live financial estimate based on premium physics, acoustic decouple levels, and layout sizing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Interactive Configuration Block */}
        <div className="lg:col-span-7 bg-[#140e0a] border border-[#c39a6b]/15 p-8 rounded-3xl space-y-8">
          
          {/* Sizing Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-xs uppercase tracking-widest text-[#dfc8ad] font-bold block">01 / Gross Apartment Area</label>
              <span className="font-mono text-white text-sm bg-[#1e150f] border border-[#c39a6b]/20 px-3 py-1 rounded">
                {apartmentSize} Square Meters (sqm)
              </span>
            </div>
            <input 
              type="range" 
              min="40" 
              max="450" 
              value={apartmentSize} 
              onChange={(e) => setApartmentSize(Number(e.target.value))}
              className="w-full h-1 bg-[#1e150f] rounded-lg appearance-none cursor-pointer accent-[#c39a6b]"
            />
            <div className="flex justify-between text-[10px] text-zinc-500">
              <span>Compact Loft (40 sqm)</span>
              <span>Substandard Mansion (450 sqm)</span>
            </div>
          </div>

          {/* Premium Material/Comfort Tiers */}
          <div className="space-y-4">
            <label className="text-xs uppercase tracking-widest text-[#dfc8ad] font-bold block">02 / Select Architectural Specification Tier</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <button
                type="button"
                onClick={() => setStyleTier('premium')}
                className={`p-4 rounded-xl border text-left transition-all ${
                  styleTier === 'premium' 
                    ? 'bg-[#1e140d] border-[#c39a6b]' 
                    : 'bg-[#0f0b08] border-[#c39a6b]/10 hover:border-[#c39a6b]/30'
                }`}
              >
                <span className="block text-xs uppercase text-[#c39a6b] font-bold mb-1">01. Premium</span>
                <span className="block text-xs text-white font-serif mb-2">Architectural Basics</span>
                <span className="block text-[10px] text-[#f4eae0]/60">Standard acoustic decoupling, premium clay plaster accents, basic dynamic dimmers.</span>
              </button>

              <button
                type="button"
                onClick={() => setStyleTier('elite-acoustics')}
                className={`p-4 rounded-xl border text-left transition-all ${
                  styleTier === 'elite-acoustics' 
                    ? 'bg-[#1e140d] border-[#c39a6b]' 
                    : 'bg-[#0f0b08] border-[#c39a6b]/10 hover:border-[#c39a6b]/30'
                }`}
              >
                <span className="block text-xs uppercase text-[#c39a6b] font-bold mb-1">02. Elite Acoustic</span>
                <span className="block text-xs text-white font-serif mb-2">Decibel Decoupled</span>
                <span className="block text-[10px] text-[#f4eae0]/60">Triple layer isolation, full acoustic studs, recessed warm sun lighting bays.</span>
              </button>

              <button
                type="button"
                onClick={() => setStyleTier('absolute-comfort')}
                className={`p-4 rounded-xl border text-left transition-all ${
                  styleTier === 'absolute-comfort' 
                    ? 'bg-[#1e140d] border-[#c39a6b]' 
                    : 'bg-[#0f0b08] border-[#c39a6b]/10 hover:border-[#c39a6b]/30'
                }`}
              >
                <span className="block text-xs uppercase text-[#c39a6b] font-bold mb-1">03. Absolute Comfort</span>
                <span className="block text-xs text-white font-serif mb-2">Pure Sensory Sanctuary</span>
                <span className="block text-[10px] text-[#f4eae0]/60">Satin brass metal frames, absolute vibration buffer floorboards, customized air silence filters.</span>
              </button>

            </div>
          </div>

          {/* Special Add-on Engineering Modules */}
          <div className="space-y-4 pt-4 border-t border-[#c39a6b]/10">
            <label className="text-xs uppercase tracking-widest text-[#dfc8ad] font-bold block">03 / Optional Architectural Add-ons</label>
            <div className="space-y-3">
              
              <label className="flex items-start gap-3 p-4 rounded-xl bg-[#0f0b08] border border-[#c39a6b]/10 cursor-pointer hover:border-[#c39a6b]/30 transition-all">
                <input 
                  type="checkbox" 
                  checked={includeLightingSimulation}
                  onChange={(e) => setIncludeLightingSimulation(e.target.checked)}
                  className="mt-1 accent-[#c39a6b]" 
                />
                <div>
                  <span className="block text-xs font-bold text-[#f4eae0] uppercase tracking-wider">Circadian Luminescent Package (+ $45 / sqm)</span>
                  <span className="block text-[11px] text-[#f4eae0]/60">Automatic solar matching, zero light flicker, premium recessed dimmable warmth paths.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-4 rounded-xl bg-[#0f0b08] border border-[#c39a6b]/10 cursor-pointer hover:border-[#c39a6b]/30 transition-all">
                <input 
                  type="checkbox" 
                  checked={includeSmartHomeAcoustics}
                  onChange={(e) => setIncludeSmartHomeAcoustics(e.target.checked)}
                  className="mt-1 accent-[#c39a6b]" 
                />
                <div>
                  <span className="block text-xs font-bold text-[#f4eae0] uppercase tracking-wider">Silenced Climate & Smart Vent Systems (+ $80 / sqm)</span>
                  <span className="block text-[11px] text-[#f4eae0]/60">Complete vibration-isolated duct systems keeping total air flow noise below 15dB.</span>
                </div>
              </label>

            </div>
          </div>

          {/* Interactive Checklist Phase Picker */}
          <div className="space-y-4 pt-4 border-t border-[#c39a6b]/10">
            <label className="text-xs uppercase tracking-widest text-[#dfc8ad] font-bold block">04 / Enforced Renovation Phases</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {[
                { id: 'blueprint', label: 'CAD Architectural Blueprint' },
                { id: 'demolition', label: 'Precision Demolition & Prep' },
                { id: 'isolation', label: 'Triple-Layer Wall Acoustic Studs' },
                { id: 'finishing', label: 'Warm Plaster Finishing & Bronze Detail' }
              ].map((phase) => (
                <button
                  type="button"
                  key={phase.id}
                  onClick={() => togglePhase(phase.id)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    selectedPhases.includes(phase.id)
                      ? 'bg-[#c39a6b]/10 border-[#c39a6b] text-[#dfc8ad]'
                      : 'bg-[#0f0b08] border-[#c39a6b]/10 text-[#f4eae0]/40'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-2 h-2 rounded-full ${selectedPhases.includes(phase.id) ? 'bg-[#c39a6b]' : 'bg-transparent'}`} />
                    <span className="font-mono text-[9px] uppercase">Select</span>
                  </div>
                  <span className="text-[11px] block leading-tight">{phase.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Financial Estimate Summary Box */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          
          <div className="bg-[#18110b] border border-[#c39a6b]/30 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
            {/* Visual bronze arc overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c39a6b]/10 filter blur-3xl rounded-full" />
            
            <div className="relative z-10 space-y-6">
              <span className="text-[10px] uppercase tracking-widest text-[#c39a6b] font-bold block">Live Quote Sheet</span>
              
              <div className="space-y-2">
                <span className="text-xs text-[#f4eae0]/50 block">PROJECTED TOTAL ESTIMATED BUDGET</span>
                <span className="font-serif text-4xl md:text-5xl text-white font-bold block tracking-tight">
                  ${totalEstimate.toLocaleString()}
                </span>
                <span className="text-[11px] text-[#dfc8ad] italic block">All-inclusive materials, professional builders & full 1-year guarantee</span>
              </div>

              {/* Cost breakages breakdown */}
              <div className="pt-6 border-t border-[#c39a6b]/15 space-y-3 text-xs text-[#f4eae0]/70">
                <div className="flex justify-between">
                  <span>Base Space Materialization:</span>
                  <span className="font-mono text-white">${calculatedBase.toLocaleString()}</span>
                </div>
                {includeLightingSimulation && (
                  <div className="flex justify-between text-[#dfc8ad]">
                    <span>Sunset Light Cove Array:</span>
                    <span className="font-mono">${lightingAddon.toLocaleString()}</span>
                  </div>
                )}
                {includeSmartHomeAcoustics && (
                  <div className="flex justify-between text-[#dfc8ad]">
                    <span>Ultra-Silent Vents Rig:</span>
                    <span className="font-mono">${smartHomeAddon.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Selected Phase Engineering ({selectedPhases.length} stages):</span>
                  <span className="font-mono text-white">${phaseCost.toLocaleString()}</span>
                </div>
              </div>

              {/* Dynamic Action Call Form */}
              <div className="pt-6 border-t border-[#c39a6b]/15">
                <form onSubmit={handleEstimateSubmission} className="space-y-3">
                  <span className="text-[10px] uppercase text-zinc-400 font-bold tracking-widest block">Lock In Estimate Slot</span>
                  
                  <input 
                    type="text" 
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Enter Your Name" 
                    className="w-full bg-[#120d09] border border-[#c39a6b]/20 focus:border-[#c39a6b] rounded-lg p-3 text-xs text-[#f4eae0] outline-none placeholder:text-[#f4eae0]/30 transition-all"
                  />
                  
                  <input 
                    type="tel" 
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="Cellular Number (+7 / +1)" 
                    className="w-full bg-[#120d09] border border-[#c39a6b]/20 focus:border-[#c39a6b] rounded-lg p-3 text-xs text-[#f4eae0] outline-none placeholder:text-[#f4eae0]/30 transition-all"
                  />

                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#c39a6b] hover:bg-[#dfc8ad] text-[#120e0a] text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-[#c39a6b]/10 flex items-center justify-center gap-2"
                  >
                    <span>Secure Priority Slot Call</span>
                    <CheckCircle2 size={14} />
                  </button>
                </form>
              </div>

              <div className="text-[10px] text-[#f4eae0]/40 text-center pt-2">
                Our lead architectural engineer will call back within 1 hour.
              </div>

            </div>
          </div>

          {/* Quick FAQ / trust box */}
          <div className="bg-[#140e0a] border border-[#c39a6b]/10 p-6 rounded-2xl text-xs space-y-2 text-[#f4eae0]/65">
            <span className="font-bold text-[#c39a6b] uppercase block">No Surprises Guarantee</span>
            <p className="leading-relaxed text-[11px]">
              Once we sign the physical design-build contract, your total price is completely locked in. Any unforeseen construction fluctuations or shipping delays are fully covered by our core insurance pool.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

// =========================================================================
// VIEW: DYNAMIC PORTAL / ACTIVE CUSTOMER CRM DASHBOARD
// =========================================================================
function DashboardView({ triggerNotification }) {
  const [activeSpaceTab, setActiveSpaceTab] = useState('master-bed');
  const [lightsIntensity, setLightsIntensity] = useState(65);
  const [selectedPreset, setSelectedPreset] = useState('sunset'); // 'sunset', 'noon', 'rest'

  // Mock Active client renovation status data
  const clientProject = {
    clientName: "Valerie & George",
    location: "The Symmetrical Loft, Flat 44B",
    overallCompletion: 74,
    stages: [
      { name: "Acoustic Subfloor Seal", status: "completed" },
      { name: "Bronze Arch Assembly", status: "completed" },
      { name: "Circadian Lighting Wiring", status: "active" },
      { name: "Clay Vault Plastering", status: "pending" }
    ]
  };

  const virtualSpaces = {
    'master-bed': {
      name: "Master Bedroom Suite",
      temperature: "21.5°C",
      noiseLevel: "14.2 dB",
      humidity: "48%",
      lightStatus: "Active circadian glow (Warm Clay 2200K)"
    },
    'living-room': {
      name: "Symmetrical Living Vault",
      temperature: "22.0°C",
      noiseLevel: "16.8 dB",
      humidity: "44%",
      lightStatus: "Recessed architectural perimeter tracks on"
    },
    'media-room': {
      name: "Acoustical Cinema Core",
      temperature: "20.5°C",
      noiseLevel: "11.1 dB",
      humidity: "50%",
      lightStatus: "Absolute darkness projection mode ready"
    }
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-6 animate-fade-in">
      
      {/* Upper header with client welcome detail */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-[#c39a6b]/15 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-[#c39a6b]/10 border border-[#c39a6b]/20 text-[#dfc8ad] text-[9px] uppercase tracking-widest rounded-full font-mono font-bold">
              Private Lounge Access
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <h1 className="font-serif text-3xl md:text-5xl text-white font-medium">Welcome Back, Valerie</h1>
          <p className="text-xs text-[#f4eae0]/70 mt-1">Project reference ID: #PRO-99A1 • Location: Moscow River</p>
        </div>

        <div className="flex items-center gap-4 bg-[#140e0a] border border-[#c39a6b]/25 p-4 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-[#1e150f] border border-[#c39a6b]/40 flex items-center justify-center text-[#c39a6b]">
            <User size={18} />
          </div>
          <div className="text-xs">
            <span className="block text-zinc-500 uppercase font-bold">Dedicated Manager</span>
            <span className="text-white">Alexandr Volkov (Architect)</span>
          </div>
        </div>
      </div>

      {/* Main Grid split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column: Realtime construction stage tracker & blueprints */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Construction progress block */}
          <div className="bg-[#140e0a] border border-[#c39a6b]/15 p-8 rounded-3xl space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#c39a6b] font-bold block mb-1">01 / Site Evolution</span>
                <h3 className="font-serif text-2xl text-white">Renovation Stage Tracker</h3>
              </div>
              <div className="text-right">
                <span className="font-mono text-white text-3xl font-bold">{clientProject.overallCompletion}%</span>
                <span className="block text-[10px] uppercase text-zinc-500">Global Progress</span>
              </div>
            </div>

            {/* Custom styled progress bar */}
            <div className="w-full h-3 bg-[#0f0b08] rounded-full overflow-hidden border border-[#c39a6b]/20">
              <div 
                className="h-full bg-gradient-to-r from-[#c39a6b] to-[#dfc8ad] rounded-full transition-all duration-1000"
                style={{ width: `${clientProject.overallCompletion}%` }}
              />
            </div>

            {/* Stage Steps Checklist */}
            <div className="space-y-4 pt-4 border-t border-[#c39a6b]/10">
              {clientProject.stages.map((stage, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center justify-between p-4 rounded-xl border ${
                    stage.status === 'completed' ? 'bg-[#18110b]/50 border-emerald-500/10 text-zinc-400' :
                    stage.status === 'active' ? 'bg-[#1e140d] border-[#c39a6b] text-white font-bold' :
                    'bg-[#0f0b08] border-[#c39a6b]/5 text-[#f4eae0]/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-500">{idx + 1}.</span>
                    <span className="text-xs uppercase tracking-wider">{stage.name}</span>
                  </div>
                  
                  {stage.status === 'completed' && (
                    <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono font-bold flex items-center gap-1.5">
                      <Check size={12} /> Executed & QA Certified
                    </span>
                  )}
                  {stage.status === 'active' && (
                    <span className="text-[10px] uppercase tracking-widest text-[#c39a6b] font-mono font-bold flex items-center gap-1.5 animate-pulse">
                      <Clock size={12} /> Active In Progress
                    </span>
                  )}
                  {stage.status === 'pending' && (
                    <span className="text-[10px] uppercase tracking-widest font-mono text-zinc-600">Pending</span>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#0f0b08] border border-[#c39a6b]/15 rounded-2xl text-xs text-zinc-400 flex items-center justify-between">
              <span>Latest Live Photo of Site Uploaded: Today, 11:20 AM</span>
              <button 
                onClick={() => triggerNotification("Initiating security camera stream...")}
                className="text-[#c39a6b] hover:text-[#dfc8ad] uppercase font-bold tracking-widest flex items-center gap-1.5"
              >
                Launch Live Stream <Activity size={12} className="animate-pulse" />
              </button>
            </div>

          </div>

          {/* Client blueprints box */}
          <div className="bg-[#140e0a] border border-[#c39a6b]/15 p-6 rounded-3xl flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs uppercase text-[#c39a6b] font-bold block">Exclusive Architectural Blueprints</span>
              <p className="text-xs text-[#f4eae0]/60">Revised acoustics schema and master lightning mapping CAD files.</p>
            </div>
            <button 
              onClick={() => triggerNotification("Downloading Blueprint Packages (PDF format)...")}
              className="p-3 bg-[#1e150f] hover:bg-[#c39a6b] text-[#dfc8ad] hover:text-[#120e0a] border border-[#c39a6b]/20 hover:border-transparent rounded-xl transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
            >
              <span>Download</span>
              <FileText size={14} />
            </button>
          </div>

        </div>

        {/* Right column: Interactive virtual comfort preview tools */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Smart Virtual Space Simulator */}
          <div className="bg-[#18110b] border border-[#c39a6b]/30 p-8 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#c39a6b]/5 rounded-full filter blur-xl" />
            
            <div className="space-y-1 relative z-10">
              <span className="text-[10px] uppercase tracking-widest text-[#c39a6b] font-bold block">02 / Dynamic Space Console</span>
              <h3 className="font-serif text-2xl text-white">Simulate Live Room Comfort</h3>
              <p className="text-xs text-[#f4eae0]/60">Monitor and preset target acoustics and sensor temperatures.</p>
            </div>

            {/* Room tab triggers */}
            <div className="flex bg-[#0f0b08] p-1 rounded-xl border border-[#c39a6b]/15 text-xs">
              {Object.keys(virtualSpaces).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSpaceTab(key)}
                  className={`flex-1 py-2 text-center rounded-lg font-bold transition-all text-[11px] ${
                    activeSpaceTab === key 
                      ? 'bg-[#c39a6b] text-[#120e0a]' 
                      : 'text-[#f4eae0]/50 hover:text-white'
                  }`}
                >
                  {key === 'master-bed' ? 'Bedroom' : key === 'living-room' ? 'Living' : 'Cinema'}
                </button>
              ))}
            </div>

            {/* Simulated Live Values Card */}
            <div className="bg-[#0f0b08] border border-[#c39a6b]/25 p-6 rounded-2xl space-y-4">
              <div className="flex justify-between items-center border-b border-[#c39a6b]/10 pb-3">
                <span className="text-xs text-zinc-500 uppercase font-bold">Space Selected:</span>
                <span className="text-xs text-white font-serif font-bold">{virtualSpaces[activeSpaceTab].name}</span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-[#140e0a] border border-[#c39a6b]/10 p-3 rounded-xl">
                  <span className="block text-[9px] text-zinc-500 uppercase font-bold">Noise Level</span>
                  <span className="block text-sm font-mono text-[#c39a6b] font-bold mt-1">{virtualSpaces[activeSpaceTab].noiseLevel}</span>
                </div>
                <div className="bg-[#140e0a] border border-[#c39a6b]/10 p-3 rounded-xl">
                  <span className="block text-[9px] text-zinc-500 uppercase font-bold">Atmosphere</span>
                  <span className="block text-sm font-mono text-white mt-1">{virtualSpaces[activeSpaceTab].humidity} Hum.</span>
                </div>
                <div className="bg-[#140e0a] border border-[#c39a6b]/10 p-3 rounded-xl">
                  <span className="block text-[9px] text-zinc-500 uppercase font-bold">Temperature</span>
                  <span className="block text-sm font-mono text-white mt-1">{virtualSpaces[activeSpaceTab].temperature}</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-[#dfc8ad] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#c39a6b] rounded-full animate-pulse" />
                {virtualSpaces[activeSpaceTab].lightStatus}
              </div>
            </div>

            {/* Adaptive lighting color temperature controller */}
            <div className="space-y-4 pt-4 border-t border-[#c39a6b]/10">
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase text-zinc-400 font-bold block">Dimmer Projection</span>
                <span className="font-mono text-xs text-white bg-[#0f0b08] px-2 py-1 rounded">{lightsIntensity}% Intensity</span>
              </div>
              
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={lightsIntensity} 
                onChange={(e) => setLightsIntensity(Number(e.target.value))}
                className="w-full h-1 bg-[#0f0b08] rounded-lg appearance-none cursor-pointer accent-[#c39a6b]"
              />

              {/* Lighting color presets */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'sunset', label: 'Warm Sunset (2200K)' },
                  { id: 'noon', label: 'Soft Daylight (4000K)' },
                  { id: 'rest', label: 'Night Rhythm (1800K)' }
                ].map((preset) => (
                  <button
                    type="button"
                    key={preset.id}
                    onClick={() => { 
                      setSelectedPreset(preset.id); 
                      triggerNotification(`Calibrating target room temperature glow to ${preset.label}`); 
                    }}
                    className={`py-2 px-2.5 rounded text-[10px] tracking-widest font-bold uppercase transition-all ${
                      selectedPreset === preset.id 
                        ? 'bg-[#c39a6b]/20 border border-[#c39a6b] text-[#dfc8ad]' 
                        : 'bg-[#0f0b08] border border-[#c39a6b]/10 text-[#f4eae0]/40'
                    }`}
                  >
                    {preset.id}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Quick contact / direct advice dialog */}
          <div className="bg-[#140e0a] border border-[#c39a6b]/10 p-6 rounded-3xl space-y-4">
            <span className="text-xs uppercase text-zinc-500 font-bold block">Secure Direct Link</span>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
              <span className="text-xs text-[#dfc8ad] font-bold">Your dedicated architect is live on-site right now</span>
            </div>
            
            <button 
              onClick={() => triggerNotification("Initiating encrypted secure architectural call...")}
              className="w-full py-3 bg-[#c39a6b] hover:bg-[#dfc8ad] text-[#120e0a] text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone size={14} /> Establish Site Call Link
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
9
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GILLS — Asian Cafe</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Playfair+Display:ital@0;1&display=swap');

        :root {
            --primary-red: #E61E25;
            --charcoal: #0D0D0D;
            --marble: #F5F5F3;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            background-color: var(--marble);
            color: var(--charcoal);
            overflow-x: hidden;
        }

        .serif-font {
            font-family: 'Playfair Display', serif;
        }

        /* Marble texture overlay effect */
        .marble-bg {
            background-color: #F5F5F3;
            background-image: 
                radial-gradient(rgba(0,0,0,0.03) 1px, transparent 0),
                radial-gradient(rgba(230,30,37,0.02) 2px, transparent 0);
            background-size: 24px 24px;
            background-position: 0 0, 12px 12px;
            position: relative;
        }

        .marble-bg::after {
            content: "";
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            opacity: 0.04;
            pointer-events: none;
            background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            z-index: 999;
        }

        /* Large Blurred Red Spray effect inspired exactly by the GILLS background logo */
        .gills-spray-container {
            position: relative;
            overflow: hidden;
        }

        .spray-text {
            color: var(--primary-red);
            font-size: clamp(8rem, 25vw, 24rem);
            font-weight: 900;
            line-height: 0.75;
            letter-spacing: -0.06em;
            filter: blur(12px) contrast(1.8);
            opacity: 0.85;
            user-select: none;
            text-transform: uppercase;
        }

        /* Hand-drawn scribble animations */
        .hand-drawn-circle {
            stroke: var(--primary-red);
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawCircle 2s ease-out forwards;
        }

        @keyframes drawCircle {
            to {
                stroke-dashoffset: 0;
            }
        }

        /* Smooth tab transition */
        .page-fade-in {
            animation: pageFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes pageFade {
            from {
                opacity: 0;
                transform: translateY(12px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #F5F5F3;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--primary-red);
            border-radius: 4px;
        }

        /* Marquee Text Animation */
        .marquee-wrapper {
            overflow: hidden;
            white-space: nowrap;
            display: flex;
        }

        .marquee-content {
            display: inline-block;
            animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
        }

        /* Floating elements */
        .float-subtle {
            animation: subtleFloat 6s ease-in-out infinite alternate;
        }

        @keyframes subtleFloat {
            0% { transform: translateY(0px) rotate(0deg); }
            100% { transform: translateY(-8px) rotate(1deg); }
        }

        /* Custom Checkbox Red Marker styling */
        .custom-checkbox:checked + label .checkmark-marker {
            opacity: 1;
        }
    </style>
</head>
<body class="marble-bg min-h-screen flex flex-col justify-between selection:bg-red-600 selection:text-white">

    <!-- TOP HEADER & BRAND DECORATION -->
    <header class="w-full max-w-6xl mx-auto px-4 pt-6 z-50">
        <div class="flex justify-between items-start border-b border-black/10 pb-4">
            <div>
                <a href="#home" onclick="navigateTo('home')" class="group flex items-baseline gap-2">
                    <span class="text-3xl font-black tracking-tighter text-[#0D0D0D] group-hover:text-red-600 transition-colors duration-300">GILLS</span>
                    <span class="text-xs font-bold tracking-widest text-red-600 uppercase">asian cafe</span>
                </a>
                <p class="text-[10px] uppercase text-black/50 tracking-wider mt-1">японская классика & авторский взгляд</p>
            </div>

            <!-- Language / Status Indicator -->
            <div class="hidden md:flex items-center gap-6 text-[11px] font-bold tracking-wider uppercase">
                <span class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Мы открыты: 12:00 — 23:00
                </span>
                <span class="text-black/30">|</span>
                <a href="tel:+78129990022" class="hover:text-red-600 transition-colors">+7 (812) 999-00-22</a>
            </div>

            <!-- Delivery Quick Cart Indicator -->
            <div class="relative">
                <button onclick="toggleCart()" class="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-full text-xs font-bold hover:bg-red-600 transition-all duration-300">
                    <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
                    <span class="hidden sm:inline">КОРЗИНА</span>
                    <span id="cart-badge" class="bg-red-600 text-white rounded-full text-[9px] px-1.5 py-0.5 ml-1">0</span>
                </button>
            </div>
        </div>

        <!-- MAIN NAVIGATION (Styled exactly from inspiration tabs layout) -->
        <nav class="flex justify-between items-center py-5 text-sm font-black uppercase tracking-wider overflow-x-auto whitespace-nowrap">
            <div class="flex gap-6 sm:gap-10 md:gap-16">
                <a href="#menu" onclick="navigateTo('menu')" id="nav-menu" class="nav-link hover:text-red-600 transition-all relative py-1">
                    меню
                </a>
                <a href="#delivery" onclick="navigateTo('delivery')" id="nav-delivery" class="nav-link hover:text-red-600 transition-all relative py-1">
                    доставка
                </a>
                <a href="#reserve" onclick="navigateTo('reserve')" id="nav-reserve" class="nav-link text-red-600 transition-all relative py-1">
                    резерв
                    <!-- Hand drawn marker circle simulated precisely with SVG overlay -->
                    <span class="absolute -inset-x-3 -inset-y-1 pointer-events-none opacity-90">
                        <svg class="w-full h-full" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
                            <path class="hand-drawn-circle" d="M5,20 C15,5 85,3 95,18 C100,32 30,38 8,24" stroke="#E61E25" stroke-width="2.5" stroke-linecap="round"></path>
                        </svg>
                    </span>
                </a>
                <a href="#about" onclick="navigateTo('about')" id="nav-about" class="nav-link hover:text-red-600 transition-all relative py-1">
                    о нас
                </a>
            </div>
            
            <!-- Quick reservation callout -->
            <div class="hidden lg:block text-right">
                <span class="text-[10px] text-black/50 block tracking-widest uppercase">Санкт-Петербург</span>
                <span class="text-xs font-bold uppercase tracking-wide">Рядом с Казанским собором</span>
            </div>
        </nav>
    </header>

    <!-- MAIN BODY CONTENT AREA -->
    <main class="flex-grow w-full max-w-6xl mx-auto px-4 pb-16 relative z-10">

        <!-- PAGE 1: HOME (Inspiration Replication and Hub) -->
        <section id="page-home" class="page-fade-in block">
            <!-- Massive spray overlay behind the central section -->
            <div class="relative w-full py-10 md:py-20 flex flex-col justify-center items-center select-none gills-spray-container">
                <div class="absolute inset-0 flex justify-center items-center z-0">
                    <div class="spray-text font-black">GILLS</div>
                </div>
                
                <!-- Overlay details matching the aesthetic marks in the image -->
                <div class="absolute right-[20%] top-[15%] text-xs font-bold text-black tracking-widest z-10 hidden sm:block">
                    <span class="block">gills-box</span>
                    <span class="block text-red-600">sushi</span>
                </div>
                
                <div class="absolute left-[15%] bottom-[15%] text-right font-black z-10 hidden sm:block">
                    <span class="block text-2xl tracking-tighter text-black">asian</span>
                    <span class="block text-xs uppercase tracking-widest text-red-600 -mt-1">cafe</span>
                </div>

                <!-- Abstract scribble mark inside GILLS -->
                <div class="absolute top-[28%] left-[62%] w-10 h-10 text-red-600 float-subtle opacity-80 z-20">
                    <svg viewBox="0 0 100 100" class="w-full h-full stroke-current fill-none" stroke-width="4">
                        <path d="M10,30 L90,20 M15,45 L85,45 M5,70 L95,65 M40,10 L45,90 M65,5 L60,95" stroke-linecap="round" />
                    </svg>
                </div>

                <!-- Centered Hero Text Content -->
                <div class="relative z-10 text-center px-4 max-w-2xl pointer-events-auto">
                    <h1 class="text-5xl sm:text-7xl font-black tracking-tighter text-black uppercase mb-3">SUSHI</h1>
                    <p class="text-base sm:text-lg font-bold tracking-wider max-w-lg mx-auto text-black/80 leading-snug">
                        НЕБОЛЬШОЕ ЯПОНСКОЕ КАФЕ РЯДОМ С КАЗАНСКИМ СОБОРОМ
                    </p>
                    <div class="mt-6 flex flex-wrap justify-center gap-4">
                        <button onclick="navigateTo('menu')" class="px-6 py-3 bg-black hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded-none transition-all duration-300 transform hover:-translate-y-1">
                            ОТКРЫТЬ МЕНЮ
                        </button>
                        <button onclick="navigateTo('reserve')" class="px-6 py-3 border-2 border-black text-black hover:border-red-600 hover:text-red-600 font-bold text-xs uppercase tracking-widest rounded-none transition-all duration-300">
                            ЗАБРОНИРОВАТЬ СТОЛ
                        </button>
                    </div>
                </div>
            </div>

            <!-- IMAGE GALLERY GRID WITH TEXT INFO BLOCK - AS IN THE ORIGINAL IMAGE -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12 items-stretch">
                
                <!-- Eye Close-up Feature Banner (Left Block) -->
                <div class="md:col-span-4 relative group overflow-hidden bg-zinc-900 flex items-center min-h-[220px]">
                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600');"></div>
                    <!-- Red subtle vignette overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-red-950/70 via-black/10 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 right-4 z-10">
                        <span class="text-white text-xs font-black tracking-widest uppercase block mb-1">GILLS LOOK</span>
                        <h3 class="text-white text-lg font-bold uppercase tracking-tight">Эстетика в деталях</h3>
                    </div>
                </div>

                <!-- Center Content: Sushi display & description as structured in template -->
                <div class="md:col-span-5 bg-white/70 backdrop-blur-md p-6 sm:p-8 border border-black/5 flex flex-col justify-between relative">
                    <!-- Red scribbled cross on the top left -->
                    <div class="absolute top-4 left-4 text-red-600 font-black text-2xl select-none leading-none">✖</div>
                    
                    <div>
                        <span class="text-xs font-bold text-red-600 uppercase tracking-widest block mb-4">концепт</span>
                        <h2 class="text-xl sm:text-2xl font-black uppercase tracking-tight mb-4">
                            ОСНОВНЫЕ БЛЮДА — ЭТО СУШИ И АВТОРСКИЕ РОЛЛЫ
                        </h2>
                        <p class="text-xs text-black/70 leading-relaxed space-y-3">
                            В нашей карте представлены вина из Старого и Нового света, разнообразие традиционных японских напитков и авторская коктейльная карта, которая идеально подчеркнет вкус блюд.
                        </p>
                    </div>

                    <div class="mt-8 pt-6 border-t border-black/10 flex justify-between items-center">
                        <button onclick="navigateTo('about')" class="group flex items-center gap-2 text-xs font-black tracking-widest uppercase text-red-600 hover:text-black transition-colors duration-300">
                            УЗНАТЬ ПОДРОБНЕЕ 
                            <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1"></i>
                        </button>
                    </div>
                </div>

                <!-- Food Highlight block (Right Block) -->
                <div class="md:col-span-3 relative group overflow-hidden bg-neutral-900 min-h-[220px]">
                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=500');"></div>
                    <div class="absolute inset-0 bg-black/30 group-hover:bg-red-950/20 transition-all duration-300"></div>
                    <!-- Scribbled hand-written overlay -->
                    <div class="absolute top-4 right-4 text-white font-black italic tracking-widest text-xs py-1 px-2 border border-white/30 backdrop-blur-md">
                        #NEW_ROLL
                    </div>
                    <div class="absolute bottom-4 left-4 z-10 text-white">
                        <span class="text-[10px] text-red-400 font-bold uppercase tracking-widest block">под заказ</span>
                        <h4 class="text-sm font-bold uppercase tracking-wider">Опаленный лосось & трюфель</h4>
                    </div>
                </div>
            </div>

            <!-- TEAM / DREAM TEAM HUB HIGHLIGHT - AS FOOTER BLOCK IN IMAGE -->
            <div class="mt-12">
                <div class="flex justify-between items-baseline mb-6 border-b border-black/10 pb-3">
                    <h3 class="text-xs font-black uppercase tracking-widest text-black">DREAM TEAM / КОМАНДА</h3>
                    <a href="#about" onclick="navigateTo('about')" class="text-xs font-bold text-red-600 hover:underline">СТАНЬ ЧАСТЬЮ НАШЕЙ КОМАНДЫ</a>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <!-- Kitchen team card -->
                    <div class="group bg-white p-4 border border-black/5 flex flex-col justify-between hover:border-red-600 transition-all duration-300">
                        <div class="relative overflow-hidden mb-3 aspect-video">
                            <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=500" alt="Kitchen Team" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
                            <span class="absolute bottom-2 left-2 bg-black text-white text-[9px] font-bold px-1.5 py-0.5 tracking-wider uppercase">KITCHEN</span>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm uppercase">Дмитрий Репин</h4>
                            <p class="text-xs text-black/60">Шеф-повар. Поиск чистого вкуса и баланса Азии.</p>
                        </div>
                    </div>

                    <!-- Service team card -->
                    <div class="group bg-white p-4 border border-black/5 flex flex-col justify-between hover:border-red-600 transition-all duration-300">
                        <div class="relative overflow-hidden mb-3 aspect-video">
                            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=500" alt="Service Team" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
                            <span class="absolute bottom-2 left-2 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 tracking-wider uppercase">SERVICE</span>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm uppercase">Елена Сомова</h4>
                            <p class="text-xs text-black/60">Шеф-сомелье. Идеальный пейринг к сложным вкусам.</p>
                        </div>
                    </div>

                    <!-- Atmosphere highlight card -->
                    <div class="group bg-neutral-900 p-6 text-white flex flex-col justify-between hover:bg-black transition-all duration-300 relative">
                        <!-- Hand drawn heart marker simulated in background -->
                        <div class="absolute bottom-2 right-2 text-red-600 opacity-60 w-16 h-16 pointer-events-none float-subtle">
                            <svg viewBox="0 0 100 100" class="w-full h-full stroke-current fill-none" stroke-width="5">
                                <path d="M50,30 C50,10 10,10 10,40 C10,70 50,90 50,90 C50,90 90,70 90,40 C90,10 50,10 50,30 Z" stroke-linecap="round"></path>
                            </svg>
                        </div>
                        <div>
                            <span class="text-red-500 text-[10px] font-bold tracking-widest uppercase block mb-1">ФИЛОСОФИЯ</span>
                            <h4 class="font-black text-lg uppercase tracking-tight leading-tight mb-2">Наш фокус — безупречность и искренность</h4>
                        </div>
                        <p class="text-xs text-white/70">Мы строим комьюнити, где каждый гость чувствует себя особенным.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- PAGE 2: MENU (Interactive Catalog) -->
        <section id="page-menu" class="page-fade-in hidden">
            <!-- Header of Menu with Category Selectors -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 border-b border-black/10 pb-6">
                <div>
                    <span class="text-xs font-bold text-red-600 tracking-widest uppercase block mb-1">gastronomy</span>
                    <h2 class="text-4xl font-black uppercase tracking-tighter">МЕНЮ БЛЮД</h2>
                </div>
                <!-- Categories navigation bar -->
                <div class="flex flex-wrap gap-2 text-xs font-black uppercase tracking-wider">
                    <button onclick="filterMenu('all')" class="menu-cat-btn px-4 py-2 bg-black text-white rounded-none transition-all" id="btn-cat-all">Все</button>
                    <button onclick="filterMenu('rolls')" class="menu-cat-btn px-4 py-2 bg-white text-black hover:bg-black/5 border border-black/10 rounded-none transition-all" id="btn-cat-rolls">Роллы</button>
                    <button onclick="filterMenu('sushi')" class="menu-cat-btn px-4 py-2 bg-white text-black hover:bg-black/5 border border-black/10 rounded-none transition-all" id="btn-cat-sushi">Суши & Сашими</button>
                    <button onclick="filterMenu('hot')" class="menu-cat-btn px-4 py-2 bg-white text-black hover:bg-black/5 border border-black/10 rounded-none transition-all" id="btn-cat-hot">Горячее</button>
                    <button onclick="filterMenu('drinks')" class="menu-cat-btn px-4 py-2 bg-white text-black hover:bg-black/5 border border-black/10 rounded-none transition-all" id="btn-cat-drinks">Напитки & Коктейли</button>
                </div>
            </div>

            <!-- Interactive Menu Grid -->
            <div id="menu-items-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Javascript will render menu items dynamically -->
            </div>

            <!-- Quality & Sourcing disclaimer banner -->
            <div class="mt-12 bg-white border border-black/10 p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="flex gap-4 items-center">
                    <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0">
                        <i data-lucide="shield-check" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-sm uppercase">Контроль свежести</h4>
                        <p class="text-xs text-black/60">Вся рыба поставляется ежедневно ранним утром напрямую от проверенных дистрибьюторов.</p>
                    </div>
                </div>
                <button onclick="navigateTo('about')" class="text-xs font-black uppercase tracking-widest bg-black text-white px-6 py-3 hover:bg-red-600 transition-colors">ПОДРОБНЕЕ О КУХНЕ</button>
            </div>
        </section>

        <!-- PAGE 3: DELIVERY (Cart and Ordering) -->
        <section id="page-delivery" class="page-fade-in hidden">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <!-- Delivery info & Item selection form -->
                <div class="lg:col-span-8 space-y-6">
                    <div class="border-b border-black/10 pb-4">
                        <span class="text-xs font-bold text-red-600 tracking-widest uppercase block mb-1">быстро & надежно</span>
                        <h2 class="text-4xl font-black uppercase tracking-tighter">СЛУЖБА ДОСТАВКИ</h2>
                        <p class="text-xs text-black/60 mt-1">Доставим любимые блюда японской кухни в течение 45-60 минут. Бесплатная доставка при заказе от 3000₽.</p>
                    </div>

                    <!-- Step-by-step Checkout Accordion -->
                    <div class="space-y-4">
                        <!-- Step 1: Delivery Details -->
                        <div class="bg-white p-6 border border-black/10">
                            <div class="flex items-center gap-3 mb-4">
                                <span class="w-6 h-6 bg-red-600 text-white rounded-full text-xs font-bold flex items-center justify-center">1</span>
                                <h3 class="font-bold uppercase text-sm tracking-wider">Адрес & время доставки</h3>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="text-[10px] uppercase font-bold tracking-wider text-black/60 block mb-1">Имя получателя</label>
                                    <input id="del-name" type="text" placeholder="Введите имя" class="w-full bg-neutral-100 border-0 focus:ring-2 focus:ring-red-600 p-2.5 text-xs outline-none font-bold">
                                </div>
                                <div>
                                    <label class="text-[10px] uppercase font-bold tracking-wider text-black/60 block mb-1">Номер телефона</label>
                                    <input id="del-phone" type="tel" placeholder="+7 (___) ___-__-__" class="w-full bg-neutral-100 border-0 focus:ring-2 focus:ring-red-600 p-2.5 text-xs outline-none font-bold">
                                </div>
                                <div class="md:col-span-2">
                                    <label class="text-[10px] uppercase font-bold tracking-wider text-black/60 block mb-1">Адрес доставки в Санкт-Петербурге</label>
                                    <input id="del-address" type="text" placeholder="Улица, дом, квартира, подъезд" class="w-full bg-neutral-100 border-0 focus:ring-2 focus:ring-red-600 p-2.5 text-xs outline-none font-bold">
                                </div>
                                <div class="md:col-span-2">
                                    <label class="text-[10px] uppercase font-bold tracking-wider text-black/60 block mb-1">Комментарий к заказу</label>
                                    <input id="del-comment" type="text" placeholder="Приборы, бесконтактная доставка, код домофона и т.д." class="w-full bg-neutral-100 border-0 focus:ring-2 focus:ring-red-600 p-2.5 text-xs outline-none">
                                </div>
                            </div>
                        </div>

                        <!-- Step 2: Payment options -->
                        <div class="bg-white p-6 border border-black/10">
                            <div class="flex items-center gap-3 mb-4">
                                <span class="w-6 h-6 bg-red-600 text-white rounded-full text-xs font-bold flex items-center justify-center">2</span>
                                <h3 class="font-bold uppercase text-sm tracking-wider">Способ оплаты</h3>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <label class="border-2 border-black p-3 flex flex-col justify-between items-start cursor-pointer hover:border-red-600 transition-colors">
                                    <div class="flex justify-between w-full items-center">
                                        <i data-lucide="credit-card" class="w-4 h-4 text-red-600"></i>
                                        <input type="radio" name="payment" value="card" checked class="accent-red-600">
                                    </div>
                                    <span class="text-xs font-bold uppercase tracking-wider block mt-4">Картой на сайте</span>
                                </label>
                                <label class="border-2 border-zinc-200 p-3 flex flex-col justify-between items-start cursor-pointer hover:border-black transition-colors">
                                    <div class="flex justify-between w-full items-center">
                                        <i data-lucide="hand-coins" class="w-4 h-4"></i>
                                        <input type="radio" name="payment" value="courier-card" class="accent-red-600">
                                    </div>
                                    <span class="text-xs font-bold uppercase tracking-wider block mt-4">Картой курьеру</span>
                                </label>
                                <label class="border-2 border-zinc-200 p-3 flex flex-col justify-between items-start cursor-pointer hover:border-black transition-colors">
                                    <div class="flex justify-between w-full items-center">
                                        <i data-lucide="wallet" class="w-4 h-4"></i>
                                        <input type="radio" name="payment" value="cash" class="accent-red-600">
                                    </div>
                                    <span class="text-xs font-bold uppercase tracking-wider block mt-4">Наличными</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Shopping Cart Summary -->
                <div class="lg:col-span-4">
                    <div class="bg-white border-2 border-black p-6 sticky top-6">
                        <div class="flex justify-between items-center border-b border-black pb-3 mb-4">
                            <h3 class="font-black uppercase tracking-tight text-lg">ВАШ ЗАКАЗ</h3>
                            <button onclick="clearCart()" class="text-[10px] text-red-600 font-bold uppercase hover:underline">Очистить</button>
                        </div>

                        <!-- Scrollable Cart List -->
                        <div id="cart-items-list" class="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                            <!-- Populated by JavaScript -->
                            <div class="text-center py-8 text-black/40 text-xs">
                                <i data-lucide="shopping-basket" class="w-8 h-8 mx-auto mb-2 opacity-55"></i>
                                Корзина пока пуста.<br>Добавьте блюда в меню!
                            </div>
                        </div>

                        <!-- Totals Area -->
                        <div class="border-t border-black/10 mt-6 pt-4 space-y-2 text-xs">
                            <div class="flex justify-between">
                                <span class="text-black/60">Сумма заказа:</span>
                                <span id="cart-subtotal" class="font-bold">0 ₽</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-black/60">Доставка:</span>
                                <span id="cart-shipping" class="font-bold">0 ₽</span>
                            </div>
                            <div class="flex justify-between border-t border-black pt-2 text-sm">
                                <span class="font-black uppercase">ИТОГО К ОПЛАТЕ:</span>
                                <span id="cart-total" class="font-black text-red-600">0 ₽</span>
                            </div>
                        </div>

                        <!-- Order Trigger Button -->
                        <button onclick="submitOrder()" class="w-full bg-red-600 hover:bg-black text-white font-black text-center py-4 uppercase text-xs tracking-widest mt-6 transition-all duration-300">
                            ОФОРМИТЬ ДОСТАВКУ
                        </button>

                        <div class="mt-4 text-[10px] text-black/50 text-center leading-tight">
                            Нажимая кнопку, вы подтверждаете согласие на обработку персональных данных.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PAGE 4: RESERVE (Table reservation simulator) -->
        <section id="page-reserve" class="page-fade-in hidden">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <!-- Left Details and Interactive Grid simulator -->
                <div class="lg:col-span-7 space-y-6">
                    <div>
                        <span class="text-xs font-bold text-red-600 tracking-widest uppercase block mb-1">атмосфера</span>
                        <h2 class="text-4xl font-black uppercase tracking-tighter">РЕЗЕРВ СТОЛИКА</h2>
                        <p class="text-xs text-black/60 mt-1">Выберите желаемую зону и время. Мы сохраним для вас лучший столик у окна или возле открытой кухни.</p>
                    </div>

                    <!-- Interactive Restaurant Map Representation -->
                    <div class="bg-black text-white p-6 rounded-none relative overflow-hidden">
                        <!-- Red Spray Paint Background effect inside reservation panel -->
                        <div class="absolute -top-12 -right-12 w-48 h-48 bg-red-600 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
                        
                        <div class="flex justify-between items-center border-b border-white/10 pb-3 mb-6">
                            <h3 class="text-xs font-bold tracking-widest uppercase text-white/70">ИНТЕРАКТИВНАЯ КАРТА ЗАЛА</h3>
                            <span class="text-[10px] bg-red-600 text-white font-bold px-2 py-0.5 rounded-full uppercase">KAZAN VIEW</span>
                        </div>

                        <!-- Dining Room Grid Plan Layout -->
                        <div class="grid grid-cols-3 gap-4 text-center">
                            <!-- Row 1 -->
                            <button onclick="selectTable(1, 'Панорамный вид у окна (2 персоны)')" id="table-1" class="table-selector border border-white/20 p-4 hover:border-red-600 hover:bg-red-950/20 transition-all flex flex-col justify-between items-center h-28">
                                <span class="text-[10px] text-white/50 block">СТОЛ 01</span>
                                <div class="w-8 h-8 rounded-full border-2 border-red-600 flex items-center justify-center text-xs font-bold text-red-600">2</div>
                                <span class="text-[9px] font-bold uppercase tracking-widest text-red-400">У окна</span>
                            </button>

                            <button onclick="selectTable(2, 'VIP-зона у камина (4 персоны)')" id="table-2" class="table-selector border border-white/20 p-4 hover:border-red-600 hover:bg-red-950/20 transition-all flex flex-col justify-between items-center h-28">
                                <span class="text-[10px] text-white/50 block">СТОЛ 02</span>
                                <div class="w-12 h-8 rounded-lg border-2 border-dashed border-emerald-500 flex items-center justify-center text-xs font-bold text-emerald-500">4</div>
                                <span class="text-[9px] font-bold uppercase tracking-widest text-emerald-400">Свободен</span>
                            </button>

                            <button onclick="selectTable(3, 'Рядом с открытой кухней (2 персоны)')" id="table-3" class="table-selector border border-white/20 p-4 hover:border-red-600 hover:bg-red-950/20 transition-all flex flex-col justify-between items-center h-28">
                                <span class="text-[10px] text-white/50 block">СТОЛ 03</span>
                                <div class="w-8 h-8 rounded-full border-2 border-emerald-500 flex items-center justify-center text-xs font-bold text-emerald-500">2</div>
                                <span class="text-[9px] font-bold uppercase tracking-widest text-emerald-400">Свободен</span>
                            </button>

                            <!-- Row 2 -->
                            <button onclick="selectTable(4, 'Большой семейный стол (6 персон)')" id="table-4" class="table-selector border border-white/20 p-4 hover:border-red-600 hover:bg-red-950/20 transition-all flex flex-col justify-between items-center h-28">
                                <span class="text-[10px] text-white/50 block">СТОЛ 04</span>
                                <div class="w-16 h-8 rounded-xl border-2 border-emerald-500 flex items-center justify-center text-xs font-bold text-emerald-500">6</div>
                                <span class="text-[9px] font-bold uppercase tracking-widest text-emerald-400">Свободен</span>
                            </button>

                            <!-- Table Reserved simulated -->
                            <button class="border border-white/10 bg-white/5 p-4 flex flex-col justify-between items-center h-28 cursor-not-allowed opacity-40">
                                <span class="text-[10px] text-white/30 block">СТОЛ 05</span>
                                <span class="text-xs font-bold text-red-600">ЗАНЯТ</span>
                                <span class="text-[9px] font-bold uppercase tracking-widest text-white/30">Chef Table</span>
                            </button>

                            <button onclick="selectTable(6, 'Камерный столик для двоих (2 персоны)')" id="table-6" class="table-selector border border-white/20 p-4 hover:border-red-600 hover:bg-red-950/20 transition-all flex flex-col justify-between items-center h-28">
                                <span class="text-[10px] text-white/50 block">СТОЛ 06</span>
                                <div class="w-8 h-8 rounded-full border-2 border-emerald-500 flex items-center justify-center text-xs font-bold text-emerald-500">2</div>
                                <span class="text-[9px] font-bold uppercase tracking-widest text-emerald-400">Свободен</span>
                            </button>
                        </div>

                        <!-- Legend -->
                        <div class="mt-6 pt-4 border-t border-white/10 flex justify-center gap-6 text-[10px] uppercase font-bold tracking-widest">
                            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span> Свободен</span>
                            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 bg-red-600 rounded-full"></span> Выбран вами</span>
                            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 bg-white/20 rounded-full"></span> Занят</span>
                        </div>
                    </div>
                </div>

                <!-- Right Side form -->
                <div class="lg:col-span-5 bg-white border-2 border-black p-6">
                    <h3 class="font-black uppercase tracking-tight text-lg border-b border-black pb-3 mb-6">ДАННЫЕ РЕЗЕРВА</h3>
                    
                    <div class="space-y-4">
                        <div>
                            <label class="text-[10px] uppercase font-bold tracking-wider text-black/60 block mb-1">Выбранный столик</label>
                            <input id="selected-table-input" type="text" readonly value="Стол не выбран (выберите на карте)" class="w-full bg-red-50 text-red-600 border-0 p-3 text-xs font-bold outline-none">
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="text-[10px] uppercase font-bold tracking-wider text-black/60 block mb-1">Дата</label>
                                <input id="res-date" type="date" class="w-full bg-neutral-100 border-0 p-2.5 text-xs font-bold outline-none">
                            </div>
                            <div>
                                <label class="text-[10px] uppercase font-bold tracking-wider text-black/60 block mb-1">Время</label>
                                <select id="res-time" class="w-full bg-neutral-100 border-0 p-2.5 text-xs font-bold outline-none">
                                    <option>12:00</option>
                                    <option>14:00</option>
                                    <option>16:00</option>
                                    <option selected>18:00</option>
                                    <option>20:00</option>
                                    <option>22:00</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label class="text-[10px] uppercase font-bold tracking-wider text-black/60 block mb-1">Имя гостя</label>
                            <input id="res-name" type="text" placeholder="Укажите ваше имя" class="w-full bg-neutral-100 border-0 p-2.5 text-xs font-bold outline-none">
                        </div>

                        <div>
                            <label class="text-[10px] uppercase font-bold tracking-wider text-black/60 block mb-1">Номер телефона</label>
                            <input id="res-phone" type="tel" placeholder="+7 (___) ___-__-__" class="w-full bg-neutral-100 border-0 p-2.5 text-xs font-bold outline-none">
                        </div>

                        <div>
                            <label class="text-[10px] uppercase font-bold tracking-wider text-black/60 block mb-1">Особые пожелания</label>
                            <textarea id="res-notes" placeholder="Аллергии, повод для встречи, предпочтения по декору" class="w-full bg-neutral-100 border-0 p-2.5 text-xs outline-none h-20 resize-none"></textarea>
                        </div>

                        <button onclick="submitReservation()" class="w-full bg-black hover:bg-red-600 text-white font-black text-center py-4 uppercase text-xs tracking-widest mt-4 transition-all duration-300">
                            ПОДТВЕРДИТЬ БРОНИРОВАНИЕ
                        </button>
                    </div>
                </div>

            </div>
        </section>

        <!-- PAGE 5: ABOUT (Our philosophy and Dream Team submission) -->
        <section id="page-about" class="page-fade-in hidden">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <!-- Our philosophy column -->
                <div class="lg:col-span-6 space-y-6">
                    <div>
                        <span class="text-xs font-bold text-red-600 tracking-widest uppercase block mb-1">gills philosophy</span>
                        <h2 class="text-5xl font-black uppercase tracking-tighter leading-none mb-4">ВКУС, СТИЛЬ & ЧЕСТНОСТЬ</h2>
                        <p class="serif-font text-xl italic text-neutral-700 leading-relaxed">
                            «Мы создали GILLS как альтернативу вычурным пафосным ресторанам. Наш фокус — чистый вкус рыбы в обрамлении лаконичного скандинавского дизайна и паназиатского колорита.»
                        </p>
                    </div>

                    <div class="space-y-4 text-xs text-black/70 leading-relaxed">
                        <p>
                            Расположенное в самом историческом сердце Санкт-Петербурга, кафе GILLS сочетает в себе динамичный дух современного мегаполиса и верность классическим кулинарным традициям Японии.
                        </p>
                        <p>
                            В нашем меню нет ничего лишнего — только идеально подобранные ингредиенты, кристально свежие морепродукты премиум-класса и деликатные авторские соусы, разработанные нашей креативной командой шефов.
                        </p>
                    </div>

                    <div class="pt-6 border-t border-black/10 grid grid-cols-2 gap-4">
                        <div>
                            <span class="text-2xl font-black text-red-600 block">35+</span>
                            <span class="text-[10px] uppercase font-bold tracking-widest text-black/50">Авторских рецептов</span>
                        </div>
                        <div>
                            <span class="text-2xl font-black text-red-600 block">45 мин</span>
                            <span class="text-[10px] uppercase font-bold tracking-widest text-black/50">Среднее время доставки</span>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Join the Dream Team Submission form -->
                <div class="lg:col-span-6 bg-white border-2 border-black p-8 relative">
                    <!-- Red paint blot effect top right -->
                    <div class="absolute -top-6 -right-6 w-20 h-20 text-red-600 opacity-80 pointer-events-none float-subtle">
                        <svg viewBox="0 0 100 100" class="w-full h-full fill-current">
                            <path d="M30,80 C10,60 10,30 30,10 C50,0 80,10 90,30 C100,50 80,90 50,100 C40,100 35,90 30,80 Z" />
                        </svg>
                    </div>

                    <span class="text-xs font-bold text-red-600 tracking-widest uppercase block mb-1">dream team</span>
                    <h3 class="text-2xl font-black uppercase tracking-tight mb-2">ПРИСОЕДИНЯЙСЯ К КОМАНДЕ</h3>
                    <p class="text-xs text-black/60 mb-6">Мы всегда в поиске талантливых суши-шефов, поваров горячего цеха и харизматичных официантов.</p>

                    <div class="space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="text-[10px] uppercase font-bold tracking-wider block mb-1 text-black/70">Ваше имя</label>
                                <input id="team-name" type="text" placeholder="Иван" class="w-full bg-neutral-100 border-0 p-2.5 text-xs font-bold outline-none">
                            </div>
                            <div>
                                <label class="text-[10px] uppercase font-bold tracking-wider block mb-1 text-black/70">Телефон</label>
                                <input id="team-phone" type="tel" placeholder="+7" class="w-full bg-neutral-100 border-0 p-2.5 text-xs font-bold outline-none">
                            </div>
                        </div>

                        <div>
                            <label class="text-[10px] uppercase font-bold tracking-wider block mb-1 text-black/70">Желаемая вакансия</label>
                            <select id="team-role" class="w-full bg-neutral-100 border-0 p-2.5 text-xs font-bold outline-none">
                                <option>Повар суши-бара</option>
                                <option>Повар горячего цеха</option>
                                <option>Официант</option>
                                <option>Администратор зала</option>
                            </select>
                        </div>

                        <div>
                            <label class="text-[10px] uppercase font-bold tracking-wider block mb-1 text-black/70">Пару слов о вашем опыте</label>
                            <textarea id="team-exp" placeholder="Расскажите о предыдущих местах работы..." class="w-full bg-neutral-100 border-0 p-2.5 text-xs outline-none h-20 resize-none"></textarea>
                        </div>

                        <button onclick="submitVacancy()" class="w-full bg-black hover:bg-red-600 text-white font-black py-4 uppercase text-xs tracking-widest mt-4 transition-all duration-300">
                            ОТПРАВИТЬ РЕЗЮМЕ
                        </button>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <!-- CUSTOM MARQUEE FOOTER SECTION -->
    <div class="w-full bg-black text-white py-4 overflow-hidden select-none">
        <div class="marquee-wrapper">
            <div class="marquee-content text-xs font-black tracking-widest uppercase flex gap-12 whitespace-nowrap">
                <span>✦ FRESH FISH DAILY DELIVERED ✦ ONLY THE BEST QUALITY IN ST. PETERSBURG ✦ GILLS CAFE BY KAZANSKY ✦ SUSHI & COCKTAILS ✦</span>
                <span>✦ FRESH FISH DAILY DELIVERED ✦ ONLY THE BEST QUALITY IN ST. PETERSBURG ✦ GILLS CAFE BY KAZANSKY ✦ SUSHI & COCKTAILS ✦</span>
            </div>
        </div>
    </div>

    <!-- MAIN FOOTER CONTROLS AND DETAILS -->
    <footer class="w-full bg-neutral-950 text-neutral-400 py-12 relative z-10 border-t border-white/10">
        <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Brand Column -->
            <div class="space-y-4">
                <span class="text-2xl font-black tracking-tighter text-white block">GILLS</span>
                <p class="text-xs text-neutral-500 leading-relaxed">
                    Премиальная паназиатская кухня в авторском прочтении с быстрой доставкой по Санкт-Петербургу.
                </p>
                <div class="flex gap-3 text-white">
                    <a href="#" class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><i data-lucide="instagram" class="w-4 h-4"></i></a>
                    <a href="#" class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><i data-lucide="send" class="w-4 h-4"></i></a>
                    <a href="#" class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><i data-lucide="facebook" class="w-4 h-4"></i></a>
                </div>
            </div>

            <!-- Navigation Links -->
            <div class="space-y-3">
                <h4 class="text-xs font-bold text-white tracking-wider uppercase mb-1">Навигация</h4>
                <ul class="space-y-2 text-xs">
                    <li><a href="#menu" onclick="navigateTo('menu')" class="hover:text-white transition-colors">Меню блюд</a></li>
                    <li><a href="#delivery" onclick="navigateTo('delivery')" class="hover:text-white transition-colors">Служба доставки</a></li>
                    <li><a href="#reserve" onclick="navigateTo('reserve')" class="hover:text-white transition-colors">Зарезервировать стол</a></li>
                    <li><a href="#about" onclick="navigateTo('about')" class="hover:text-white transition-colors">О нашей концепции</a></li>
                </ul>
            </div>

            <!-- Contacts Info -->
            <div class="space-y-3">
                <h4 class="text-xs font-bold text-white tracking-wider uppercase mb-1">Контакты</h4>
                <ul class="space-y-2 text-xs">
                    <li class="flex items-center gap-2"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-red-600"></i> Санкт-Петербург, Казанская ул., 8-10</li>
                    <li class="flex items-center gap-2"><i data-lucide="phone" class="w-3.5 h-3.5 text-red-600"></i> +7 (812) 999-00-22</li>
                    <li class="flex items-center gap-2"><i data-lucide="mail" class="w-3.5 h-3.5 text-red-600"></i> info@gillscafe.ru</li>
                </ul>
            </div>

            <!-- Live Guestbook/Feedback widget -->
            <div class="space-y-3">
                <h4 class="text-xs font-bold text-white tracking-wider uppercase mb-1">Написать отзыв</h4>
                <div class="space-y-2">
                    <input id="feedback-text" type="text" placeholder="Ваше мнение..." class="w-full bg-white/5 text-xs text-white border-0 p-2 outline-none focus:ring-1 focus:ring-red-600">
                    <button onclick="submitFeedback()" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-[10px] py-2 uppercase tracking-wider transition-all">Отправить</button>
                </div>
            </div>
        </div>

        <div class="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between text-[11px] text-neutral-600">
            <p>© 2026 GILLS Asian Cafe & Restaurant. Все права защищены.</p>
            <p class="mt-2 md:mt-0">Разработано в рамках нового фирменного стиля GILLS BRANDING.</p>
        </div>
    </footer>

    <!-- INTERACTIVE SIDE CART MODAL / PANEL -->
    <div id="side-cart" class="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out border-l border-black/10 flex flex-col justify-between p-6">
        <div>
            <div class="flex justify-between items-center border-b border-black/10 pb-4 mb-4">
                <div class="flex items-center gap-2">
                    <i data-lucide="shopping-cart" class="text-red-600 w-5 h-5"></i>
                    <h3 class="font-black uppercase tracking-tight text-lg">Корзина</h3>
                </div>
                <button onclick="toggleCart()" class="text-black hover:text-red-600"><i data-lucide="x" class="w-6 h-6"></i></button>
            </div>

            <!-- Dynamic Cart Container -->
            <div id="side-cart-list" class="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                <!-- Cart list injected by js -->
            </div>
        </div>

        <!-- Footer totals & checkout button inside side panel -->
        <div class="border-t border-black/10 pt-4">
            <div class="flex justify-between text-sm mb-4">
                <span class="font-bold uppercase tracking-wider">Итоговая сумма:</span>
                <span id="side-cart-total" class="font-black text-red-600 text-lg">0 ₽</span>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <button onclick="toggleCart()" class="border border-black text-black text-xs font-bold py-3 uppercase tracking-wider hover:bg-neutral-100 transition-all text-center">Продолжить</button>
                <button onclick="goToCheckout()" class="bg-red-600 hover:bg-black text-white text-xs font-black py-3 uppercase tracking-wider transition-all text-center">Оформить</button>
            </div>
        </div>
    </div>

    <!-- GENERAL MESSAGE BOX MODAL (Instead of forbidden alert()) -->
    <div id="alert-modal" class="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 hidden">
        <div class="bg-white border-2 border-red-600 p-8 max-w-md w-full relative">
            <div class="absolute top-4 right-4 text-red-600 font-black text-xl cursor-pointer select-none" onclick="closeAlert()">✖</div>
            <div class="text-center space-y-4">
                <div id="alert-icon-container" class="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center text-red-600">
                    <i data-lucide="check-circle" class="w-8 h-8"></i>
                </div>
                <h3 id="alert-title" class="text-xl font-black uppercase tracking-tight">УСПЕШНО</h3>
                <p id="alert-message" class="text-xs text-black/70 leading-relaxed"></p>
                <button onclick="closeAlert()" class="px-6 py-2.5 bg-black hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded-none transition-colors">
                    ОК
                </button>
            </div>
        </div>
    </div>

    <script>
        // Database of menu items with Russian localization matching local authentic vibe
        const MENU_DATA = [
            {
                id: 'r1',
                name: 'Опаленный ролл с лососем и трюфелем',
                category: 'rolls',
                description: 'Камчатский краб, авокадо, слайсы свежего лосося под нежным соусом из белого трюфеля.',
                price: 890,
                weight: '260 г',
                image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=400'
            },
            {
                id: 'r2',
                name: 'Ролл Филадельфия GILLS',
                category: 'rolls',
                description: 'Классический ролл в премиальной интерпретации. Много лосося, нежный сливочный сыр, икра тобико.',
                price: 790,
                weight: '280 г',
                image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80&w=400'
            },
            {
                id: 'r3',
                name: 'Ролл с тунцом и манго',
                category: 'rolls',
                description: 'Филе тунца блюфин, спелое тайское манго, соус унаги, кунжут юдзу.',
                price: 850,
                weight: '245 г',
                image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=400'
            },
            {
                id: 's1',
                name: 'Суши Тунец Блюфин (2 шт)',
                category: 'sushi',
                description: 'Свежайший японский тунец на фирменном заправленном рисе.',
                price: 450,
                weight: '60 г',
                image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&q=80&w=400'
            },
            {
                id: 's2',
                name: 'Сашими Лосось премиум',
                category: 'sushi',
                description: 'Слайсы охлажденного мурманского лосося с маринованным имбирем и дайконом.',
                price: 690,
                weight: '120 г',
                image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&q=80&w=400'
            },
            {
                id: 'h1',
                name: 'Утиная грудка с соусом хойсин',
                category: 'hot',
                description: 'Нежная утиная грудка су-вид, пряное пюре из батата, оригинальный соус на основе сливы и пяти специй.',
                price: 920,
                weight: '320 г',
                image: 'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&q=80&w=400'
            },
            {
                id: 'h2',
                name: 'Гребешок с кремом из цветной капусты',
                category: 'hot',
                description: 'Обжаренный сахалинский гребешок, крем из печеной цветной капусты, кокосовый соус юдзу.',
                price: 980,
                weight: '210 г',
                image: 'https://images.unsplash.com/photo-1532636875304-0c8fe119ff91?auto=format&fit=crop&q=80&w=400'
            },
            {
                id: 'd1',
                name: 'Коктейль "Осака Сауэр"',
                category: 'drinks',
                description: 'Японский виски, домашний ликер личи, сироп лемонграсса, яичный белок.',
                price: 620,
                weight: '150 мл',
                image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400'
            },
            {
                id: 'd2',
                name: 'Зеленый чай Сенча Премиум',
                category: 'drinks',
                description: 'Аутентичный японский листовой чай с глубоким травянистым вкусом.',
                price: 350,
                weight: '500 мл',
                image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=400'
            }
        ];

        // Core State
        let cart = [];
        let selectedTableId = null;

        // Initialize App
        window.addEventListener('DOMContentLoaded', () => {
            // Setup Lucide Icons
            lucide.createIcons();
            
            // Check Hash route on load
            const hash = window.location.hash.replace('#', '') || 'home';
            navigateTo(hash);

            // Render all items in catalog
            renderMenu('all');
            
            // Initialize forms listeners
            setupPhoneMasks();
        });

        // Custom router for tab switching
        function navigateTo(pageId) {
            // Hide all pages
            const pages = ['home', 'menu', 'delivery', 'reserve', 'about'];
            pages.forEach(p => {
                const el = document.getElementById(`page-${p}`);
                if (el) el.classList.add('hidden');
                
                // Reset nav style
                const navLink = document.getElementById(`nav-${p}`);
                if (navLink) {
                    if (p === 'reserve') {
                        // Keeps special red circle, does not override classes directly
                    } else {
                        navLink.classList.remove('text-red-600', 'font-black');
                        navLink.classList.add('text-black', 'hover:text-red-600');
                    }
                }
            });

            // Show active page
            const activePage = document.getElementById(`page-${pageId}`);
            if (activePage) {
                activePage.classList.remove('hidden');
                activePage.classList.add('page-fade-in');
            }

            // Highlight active link
            const activeNavLink = document.getElementById(`nav-${pageId}`);
            if (activeNavLink && pageId !== 'reserve') {
                activeNavLink.classList.add('text-red-600', 'font-black');
            }

            // Scroll to top of content
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Render Menu Catalog Cards
        function renderMenu(categoryFilter = 'all') {
            const grid = document.getElementById('menu-items-grid');
            if (!grid) return;

            grid.innerHTML = '';
            const filtered = categoryFilter === 'all' 
                ? MENU_DATA 
                : MENU_DATA.filter(item => item.category === categoryFilter);

            filtered.forEach(item => {
                const card = document.createElement('div');
                card.className = 'group bg-white border border-black/10 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300';
                card.innerHTML = `
                    <div>
                        <div class="relative overflow-hidden aspect-video bg-neutral-100">
                            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <span class="absolute top-2 right-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 tracking-wider">
                                ${item.weight}
                            </span>
                        </div>
                        <div class="p-5">
                            <h3 class="font-black text-base uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">${item.name}</h3>
                            <p class="text-xs text-black/60 line-clamp-3">${item.description}</p>
                        </div>
                    </div>
                    <div class="p-5 pt-0 border-t border-black/5 mt-auto flex justify-between items-center bg-neutral-50/50">
                        <span class="text-base font-black text-black">${item.price} ₽</span>
                        <button onclick="addToCart('${item.id}')" class="flex items-center gap-1.5 bg-black hover:bg-red-600 text-white font-black text-[10px] uppercase tracking-widest px-4 py-2 transition-colors">
                            <i data-lucide="plus" class="w-3.5 h-3.5"></i> Добавить
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
            lucide.createIcons();
        }

        // Filter active category highlighted buttons
        function filterMenu(category) {
            // Update active style buttons
            const buttons = document.querySelectorAll('.menu-cat-btn');
            buttons.forEach(btn => {
                btn.className = 'menu-cat-btn px-4 py-2 bg-white text-black hover:bg-black/5 border border-black/10 rounded-none transition-all';
            });

            const activeBtn = document.getElementById(`btn-cat-${category}`);
            if (activeBtn) {
                activeBtn.className = 'menu-cat-btn px-4 py-2 bg-black text-white rounded-none transition-all';
            }

            renderMenu(category);
        }

        // Cart State Management
        function addToCart(itemId) {
            const item = MENU_DATA.find(i => i.id === itemId);
            if (!item) return;

            const existing = cart.find(i => i.id === itemId);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({ ...item, quantity: 1 });
            }

            updateCartUI();
            
            // Visual trigger/notification inside footer badge
            const badge = document.getElementById('cart-badge');
            badge.classList.add('scale-125', 'bg-emerald-500');
            setTimeout(() => {
                badge.classList.remove('scale-125', 'bg-emerald-500');
            }, 300);
        }

        function removeFromCart(itemId) {
            cart = cart.filter(item => item.id !== itemId);
            updateCartUI();
        }

        function changeQty(itemId, amount) {
            const item = cart.find(i => i.id === itemId);
            if (!item) return;

            item.quantity += amount;
            if (item.quantity <= 0) {
                removeFromCart(itemId);
            } else {
                updateCartUI();
            }
        }

        function clearCart() {
            cart = [];
            updateCartUI();
        }

        function updateCartUI() {
            // Badges
            const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
            document.getElementById('cart-badge').innerText = totalCount;

            // Delivery page cart list renderer
            const cartItemsContainer = document.getElementById('cart-items-list');
            const sideCartContainer = document.getElementById('side-cart-list');

            const renderItemRow = (item) => `
                <div class="flex justify-between items-center bg-neutral-50 p-3 border border-black/5">
                    <div class="flex-grow">
                        <h4 class="text-xs font-bold uppercase tracking-tight">${item.name}</h4>
                        <span class="text-[10px] text-black/50">${item.price} ₽ x ${item.quantity}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="changeQty('${item.id}', -1)" class="w-5 h-5 bg-black/5 hover:bg-black/20 text-xs font-bold flex items-center justify-center">-</button>
                        <span class="text-xs font-bold w-4 text-center">${item.quantity}</span>
                        <button onclick="changeQty('${item.id}', 1)" class="w-5 h-5 bg-black/5 hover:bg-black/20 text-xs font-bold flex items-center justify-center">+</button>
                        <button onclick="removeFromCart('${item.id}')" class="text-red-600 hover:text-black ml-1"><i data-lucide="trash" class="w-3.5 h-3.5"></i></button>
                    </div>
                </div>
            `;

            // Setup HTML lists
            if (cart.length === 0) {
                const emptyStateHtml = `
                    <div class="text-center py-8 text-black/40 text-xs">
                        <i data-lucide="shopping-basket" class="w-8 h-8 mx-auto mb-2 opacity-55"></i>
                        Корзина пока пуста.<br>Добавьте вкусные блюда в меню!
                    </div>
                `;
                if (cartItemsContainer) cartItemsContainer.innerHTML = emptyStateHtml;
                if (sideCartContainer) sideCartContainer.innerHTML = emptyStateHtml;
            } else {
                const listHtml = cart.map(item => renderItemRow(item)).join('');
                if (cartItemsContainer) cartItemsContainer.innerHTML = listHtml;
                if (sideCartContainer) sideCartContainer.innerHTML = listHtml;
            }

            // Calculations
            const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            const shipping = subtotal > 3000 || subtotal === 0 ? 0 : 350;
            const total = subtotal + shipping;

            document.getElementById('cart-subtotal').innerText = `${subtotal} ₽`;
            document.getElementById('cart-shipping').innerText = shipping === 0 ? 'Бесплатно' : `${shipping} ₽`;
            document.getElementById('cart-total').innerText = `${total} ₽`;
            document.getElementById('side-cart-total').innerText = `${total} ₽`;

            lucide.createIcons();
        }

        // Side Drawer Toggle
        function toggleCart() {
            const drawer = document.getElementById('side-cart');
            if (drawer.classList.contains('translate-x-full')) {
                drawer.classList.remove('translate-x-full');
            } else {
                drawer.classList.add('translate-x-full');
            }
        }

        function goToCheckout() {
            toggleCart();
            navigateTo('delivery');
        }

        // Reservation Map Selection logic
        function selectTable(id, description) {
            selectedTableId = id;
            
            // Remove selection class from all
            const selectors = document.querySelectorAll('.table-selector');
            selectors.forEach(sel => {
                sel.classList.remove('border-red-600', 'bg-red-950/20');
                sel.classList.add('border-white/20');
            });

            // Highlight selected
            const activeSel = document.getElementById(`table-${id}`);
            if (activeSel) {
                activeSel.classList.remove('border-white/20');
                activeSel.classList.add('border-red-600', 'bg-red-950/20');
            }

            // Set text label in reservation form
            document.getElementById('selected-table-input').value = `СТОЛ ${id} — ${description}`;
        }

        // Alerts helper
        function showAlert(title, text, isSuccess = true) {
            document.getElementById('alert-title').innerText = title;
            document.getElementById('alert-message').innerText = text;
            
            const iconContainer = document.getElementById('alert-icon-container');
            if (isSuccess) {
                iconContainer.className = "w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600";
                iconContainer.innerHTML = `<i data-lucide="check-circle" class="w-8 h-8"></i>`;
            } else {
                iconContainer.className = "w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center text-red-600";
                iconContainer.innerHTML = `<i data-lucide="alert-triangle" class="w-8 h-8"></i>`;
            }
            
            document.getElementById('alert-modal').classList.remove('hidden');
            lucide.createIcons();
        }

        function closeAlert() {
            document.getElementById('alert-modal').classList.add('hidden');
        }

        // Submit Delivery Order Simulator
        function submitOrder() {
            const name = document.getElementById('del-name').value.trim();
            const phone = document.getElementById('del-phone').value.trim();
            const address = document.getElementById('del-address').value.trim();

            if (cart.length === 0) {
                showAlert('Внимание', 'Ваша корзина пуста. Выберите блюда из меню для оформления доставки.', false);
                return;
            }

            if (!name || !phone || !address) {
                showAlert('Заполните данные', 'Пожалуйста, укажите имя, контактный телефон и точный адрес доставки.', false);
                return;
            }

            // Simulate server response
            const total = document.getElementById('cart-total').innerText;
            showAlert(
                'Заказ оформлен!', 
                `Уважаемый(ая) ${name}, ваш заказ на сумму ${total} успешно принят! Курьер свяжется с вами по номеру ${phone} в течение 45 минут.`,
                true
            );

            // Clean cart state after successful purchase
            clearCart();
            document.getElementById('del-name').value = '';
            document.getElementById('del-phone').value = '';
            document.getElementById('del-address').value = '';
            document.getElementById('del-comment').value = '';
        }

        // Submit Table Booking Simulator
        function submitReservation() {
            const table = document.getElementById('selected-table-input').value;
            const date = document.getElementById('res-date').value;
            const name = document.getElementById('res-name').value.trim();
            const phone = document.getElementById('res-phone').value.trim();

            if (!selectedTableId) {
                showAlert('Выберите стол', 'Пожалуйста, выберите подходящий столик на интерактивной карте зала слева.', false);
                return;
            }

            if (!date || !name || !phone) {
                showAlert('Заполните форму', 'Пожалуйста, укажите дату, ваше имя и контактный телефон.', false);
                return;
            }

            showAlert(
                'Резерв подтвержден!',
                `Уважаемый(ая) ${name}, ${table} зарезервирован на ваше имя на дату ${date} в ${document.getElementById('res-time').value}. Ждем вас!`,
                true
            );

            // Reset Reservation Form
            document.getElementById('selected-table-input').value = 'Стол не выбран (выберите на карте)';
            document.getElementById('res-date').value = '';
            document.getElementById('res-name').value = '';
            document.getElementById('res-phone').value = '';
            document.getElementById('res-notes').value = '';
            
            // Clear selection classes
            const selectors = document.querySelectorAll('.table-selector');
            selectors.forEach(sel => {
                sel.classList.remove('border-red-600', 'bg-red-950/20');
                sel.classList.add('border-white/20');
            });
            selectedTableId = null;
        }

        // Submit Vacancy application
        function submitVacancy() {
            const name = document.getElementById('team-name').value.trim();
            const phone = document.getElementById('team-phone').value.trim();
            const role = document.getElementById('team-role').value;

            if (!name || !phone) {
                showAlert('Внимание', 'Пожалуйста, укажите ваше имя и контактный телефон для связи.', false);
                return;
            }

            showAlert(
                'Резюме отправлено',
                `Спасибо, ${name}! Мы получили вашу заявку на позицию "${role}". Отдел кадров свяжется с вами в течение рабочего дня.`,
                true
            );

            document.getElementById('team-name').value = '';
            document.getElementById('team-phone').value = '';
            document.getElementById('team-exp').value = '';
        }

        // Submit guest feedback
        function submitFeedback() {
            const txt = document.getElementById('feedback-text').value.trim();
            if (!txt) {
                showAlert('Внимание', 'Пожалуйста, напишите ваш отзыв перед отправкой.', false);
                return;
            }

            showAlert(
                'Благодарим за отзыв!',
                'Ваш отзыв передан руководству ресторана. Мы постоянно совершенствуемся благодаря вам.',
                true
            );
            document.getElementById('feedback-text').value = '';
        }

        // Simple helper helper to setup placeholder formatting
        function setupPhoneMasks() {
            const inputs = ['del-phone', 'res-phone', 'team-phone'];
            inputs.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.addEventListener('focus', () => {
                        if (!el.value) el.value = '+7 ';
                    });
                }
            });
        }
    </script>
</body>
</html>
9
import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  Shield, 
  Cpu, 
  Layers, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  ChevronRight, 
  Info, 
  Sparkles, 
  Share2, 
  Sliders, 
  ArrowLeft, 
  ArrowRight, 
  Menu, 
  X, 
  SlidersHorizontal,
  Download,
  Hammer,
  Eye,
  CheckCircle,
  Gem
} from 'lucide-react';

// --- AUDIO SYNTHESIS UTILITY (Organic Metallic Sounds) ---
const playSound = (type) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    if (type === 'click') {
      // High-pitched metallic click
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08);
      
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } else if (type === 'slide') {
      // Shimmering brass slide
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(440, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3);
      
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1200, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(1600, ctx.currentTime + 0.3);
      
      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);
      
      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.31);
      osc2.stop(ctx.currentTime + 0.31);
    } else if (type === 'wind') {
      // Mechanical spring wind sound
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(80, ctx.currentTime);
      // Create quick stepping vibrations to mimic gears
      for (let i = 0; i < 6; i++) {
        osc.frequency.setValueAtTime(80 + i * 25, ctx.currentTime + i * 0.03);
      }
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.19);
    }
  } catch (e) {
    // Audio Context blocked or unsupported
  }
};

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [selectedSpecimen, setSelectedSpecimen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState("");
  const [activeTab, setActiveTab] = useState('anatomy');

  // Interactive Assembler State
  const [customMetal, setCustomMetal] = useState('gold'); // gold, bronze, obsidian
  const [customWings, setCustomWings] = useState('filigree'); // filigree, solid, clockwork
  const [customCore, setCustomCore] = useState('ruby'); // ruby, sapphire, emerald
  const [isAssembling, setIsAssembling] = useState(false);

  // Parallax mouse effect for the Hero element
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 45;
    const y = (clientY - window.innerHeight / 2) / 45;
    setParallaxOffset({ x, y });
  };

  useEffect(() => {
    // Inject fonts into document
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link1);
  }, []);

  const triggerSound = (type) => {
    if (soundEnabled) {
      playSound(type);
    }
  };

  const nextSlide = () => {
    triggerSound('slide');
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    triggerSound('slide');
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    triggerSound('wind');
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setSelectedSpecimen(null);
      setInquiryName("");
    }, 4000);
  };

  const triggerAssembly = () => {
    triggerSound('wind');
    setIsAssembling(true);
    setTimeout(() => {
      setIsAssembling(false);
      triggerSound('click');
    }, 1200);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#0d070b] text-[#f7f3eb] font-sans antialiased overflow-x-hidden selection:bg-[#c4a265] selection:text-[#0d070b] relative"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 25%, #2a111f 0%, #11070d 60%, #060205 100%)`
      }}
    >
      {/* Golden Ambient Particle Glows */}
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[45vw] h-[45vw] bg-[#611631]/10 rounded-full blur-[180px] pointer-events-none" />

      {/* --- PREMIUM FIXED NAV BAR --- */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-[#c4a265]/10 px-6 lg:px-16 py-4 flex justify-between items-center bg-[#0d070b]/60 transition-all duration-300">
        {/* Left Side Links */}
        <div className="hidden md:flex gap-8 text-xs tracking-[0.25em] text-[#c4a265]/70 uppercase font-medium">
          <a href="#exhibits" onClick={() => triggerSound('click')} className="hover:text-white transition-colors py-1">Exhibits</a>
          <a href="#craftsmanship" onClick={() => triggerSound('click')} className="hover:text-white transition-colors py-1">The Craft</a>
          <a href="#assembler" onClick={() => triggerSound('click')} className="hover:text-white transition-colors py-1">Atelier</a>
          <a href="#vault" onClick={() => triggerSound('click')} className="hover:text-white transition-colors py-1">Inquire</a>
        </div>

        {/* Center Logo */}
        <div className="flex flex-col items-center select-none cursor-pointer" onClick={() => { triggerSound('wind'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
          <span className="font-serif text-3xl font-extrabold tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-b from-[#f3e9d4] via-[#c4a265] to-[#8d6935]">
            AK
          </span>
          <span className="text-[7px] tracking-[0.6em] text-[#c4a265]/60 -mt-1 font-sans font-bold uppercase">
            HANDMADE METALWORK
          </span>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-6">
          {/* Sound Toggle */}
          <button 
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              if(!soundEnabled) setTimeout(() => playSound('click'), 100);
            }}
            className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center ${
              soundEnabled 
                ? 'bg-[#c4a265]/10 border-[#c4a265] text-[#c4a265] shadow-[0_0_15px_rgba(196,162,101,0.2)]' 
                : 'border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
            }`}
            title="Toggle Sound Effects"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Social Links / Call to Action */}
          <div className="hidden lg:flex items-center gap-6 text-xs tracking-widest text-[#c4a265]/80 uppercase">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <span className="w-1.5 h-1.5 bg-[#c4a265]/40 rounded-full"></span>
            <a href="#vault" className="px-5 py-2 border border-[#c4a265]/30 bg-[#c4a265]/5 hover:bg-[#c4a265]/15 hover:border-[#c4a265] text-[#c4a265] rounded-sm transition-all duration-300 font-medium tracking-widest">
              COLLECTION
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => { triggerSound('click'); setMobileMenuOpen(!mobileMenuOpen); }}
            className="md:hidden text-[#c4a265] p-1.5 hover:bg-[#c4a265]/5 rounded"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0d070b]/98 z-40 flex flex-col justify-center items-center gap-8 text-center animate-fade-in">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-[#c4a265]"
          >
            <X className="w-8 h-8" />
          </button>
          <a 
            href="#exhibits" 
            onClick={() => { setMobileMenuOpen(false); triggerSound('click'); }}
            className="font-serif text-3xl text-white hover:text-[#c4a265] transition-colors"
          >
            Exhibits
          </a>
          <a 
            href="#craftsmanship" 
            onClick={() => { setMobileMenuOpen(false); triggerSound('click'); }}
            className="font-serif text-3xl text-white hover:text-[#c4a265] transition-colors"
          >
            The Craftsmanship
          </a>
          <a 
            href="#assembler" 
            onClick={() => { setMobileMenuOpen(false); triggerSound('click'); }}
            className="font-serif text-3xl text-white hover:text-[#c4a265] transition-colors"
          >
            Interactive Atelier
          </a>
          <a 
            href="#vault" 
            onClick={() => { setMobileMenuOpen(false); triggerSound('click'); }}
            className="font-serif text-3xl text-white hover:text-[#c4a265] transition-colors"
          >
            The Vault
          </a>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#c4a265]/30 to-transparent my-4"></div>
          <p className="text-xs tracking-[0.3em] text-[#c4a265]/60 uppercase">AK Handmade Metalwork</p>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section id="exhibits" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 lg:px-16 py-8 overflow-hidden">
        {/* Subtle Luxury Outer Frame */}
        <div className="absolute inset-8 lg:inset-16 border border-[#c4a265]/5 pointer-events-none rounded-sm hidden sm:block" />
        
        {/* Floating background texts */}
        <div className="absolute top-12 left-12 lg:left-24 text-[10px] tracking-[0.4em] text-[#c4a265]/40 uppercase hidden lg:block select-none font-medium">
          PICTURE SERIES // 021
        </div>
        <div className="absolute bottom-12 right-12 lg:right-24 text-[10px] tracking-[0.4em] text-[#c4a265]/40 uppercase text-right hidden lg:block select-none font-medium">
          HANDMADE BRASS & STEEL // PARIS, FR
        </div>

        {/* MAIN VISUAL CLUSTER */}
        <div className="w-full max-w-6xl flex flex-col items-center justify-center relative">
          
          {/* Back/Mid Layer: Giant Luxury Serif "INSECTS" Title */}
          <div className="select-none text-center pointer-events-none relative z-10 w-full">
            <h1 className="font-serif text-[15vw] md:text-[14vw] lg:text-[13vw] font-normal leading-none tracking-[0.05em] text-[#f7f3eb] mix-blend-difference drop-shadow-2xl">
              {SLIDES[activeSlide].title}
            </h1>
          </div>

          {/* Core Interactive Insect rendering with 3D Parallax */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] sm:w-[50vw] md:w-[45vw] lg:w-[35vw] h-[400px] z-20 flex justify-center items-center pointer-events-none transition-transform duration-500 ease-out"
            style={{
              transform: `translate3d(calc(-50% + ${parallaxOffset.x}px), calc(-50% + ${parallaxOffset.y}px), 0px) rotateX(${-parallaxOffset.y * 0.8}deg) rotateY(${parallaxOffset.x * 0.8}deg)`,
            }}
          >
            {/* Specimen Render */}
            <div className="w-full h-full relative drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] animate-float">
              {SLIDES[activeSlide].svgComponent}

              {/* Holographic Glowing Base Ring */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-6 bg-[#c4a265]/5 rounded-full blur-[2px] border border-[#c4a265]/10 transform -rotate-x-12 flex items-center justify-center">
                <span className="text-[6px] tracking-[0.4em] text-[#c4a265]/40 uppercase font-semibold">ROTATION MATRIX ENABLED</span>
              </div>
            </div>
          </div>

          {/* Subtexts / Specifications flanking the center */}
          <div className="w-full flex flex-col md:flex-row justify-between items-end mt-12 md:mt-24 z-30 relative px-4 sm:px-12 gap-8 md:gap-0">
            {/* Left side details */}
            <div className="max-w-xs text-left">
              <span className="text-[11px] font-semibold tracking-[0.3em] text-[#c4a265] uppercase block mb-1">
                // SPECIMEN DESCRIPTION
              </span>
              <p className="text-sm font-light text-zinc-300 leading-relaxed font-sans font-serif">
                {SLIDES[activeSlide].desc}
              </p>
              <div className="flex gap-4 mt-4">
                <span className="text-xs bg-[#c4a265]/10 text-[#c4a265] px-2.5 py-1 rounded-sm border border-[#c4a265]/20 uppercase tracking-widest font-mono">
                  {SLIDES[activeSlide].stats.parts} Parts
                </span>
                <span className="text-xs bg-zinc-800/60 text-zinc-300 px-2.5 py-1 rounded-sm border border-zinc-700/30 uppercase tracking-widest font-mono">
                  {SLIDES[activeSlide].stats.hours} Hrs
                </span>
              </div>
            </div>

            {/* Right side technical breakdown */}
            <div className="max-w-xs text-left md:text-right">
              <span className="text-[11px] font-semibold tracking-[0.3em] text-[#c4a265] uppercase block mb-1">
                // ARTISANAL PROFILE
              </span>
              <p className="text-sm font-mono text-zinc-400 tracking-wider">
                Materials: {SLIDES[activeSlide].stats.metals}
              </p>
              <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">
                Estimated Value: {SLIDES[activeSlide].stats.value}
              </p>
              <div className="mt-4 md:justify-end flex">
                <button 
                  onClick={() => { triggerSound('wind'); setSelectedSpecimen(SLIDES[activeSlide]); }}
                  className="group flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-white hover:text-[#c4a265] transition-colors"
                >
                  Acquire Specimen
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#c4a265]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE NAVIGATION CONTROLS */}
        <div className="absolute bottom-8 left-0 right-0 px-6 lg:px-16 flex justify-between items-center z-30">
          {/* Page Counter */}
          <div className="text-xs tracking-[0.3em] font-mono text-[#c4a265]">
            <span className="text-white font-medium">0{activeSlide + 1}</span> / 0{SLIDES.length}
          </div>

          {/* Central Arrows */}
          <div className="flex gap-3">
            <button 
              onClick={prevSlide}
              className="p-3 border border-[#c4a265]/20 hover:border-[#c4a265] bg-[#0d070b]/60 hover:bg-[#c4a265]/10 rounded-full transition-all duration-300 group"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-4 h-4 text-[#c4a265] group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 border border-[#c4a265]/20 hover:border-[#c4a265] bg-[#0d070b]/60 hover:bg-[#c4a265]/10 rounded-full transition-all duration-300 group"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-4 h-4 text-[#c4a265] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Decorative Tag */}
          <div className="text-xs tracking-[0.2em] uppercase font-mono text-zinc-500 hidden sm:block">
            STRETCH: 450mm
          </div>
        </div>
      </section>

      {/* --- BRAND STORY / SPECIFICATION CARDS --- */}
      <section id="craftsmanship" className="py-24 px-6 lg:px-16 border-y border-[#c4a265]/10 relative bg-[#090408]/90">
        <div className="max-w-6xl mx-auto">
          {/* Header Title */}
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.35em] text-[#c4a265] font-semibold block mb-3">// PRESERVED PRECISION</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f7f3eb] to-[#c4a265]">
              Philosophies of the Forge
            </h2>
            <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-[#c4a265] to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="border border-[#c4a265]/10 bg-[#0d070b]/80 p-8 rounded-sm hover:border-[#c4a265]/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-500/5 rounded-full flex items-center justify-center border border-[#c4a265]/20 mb-6 group-hover:scale-110 transition-transform">
                <Hammer className="w-5 h-5 text-[#c4a265]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-3">Mechanical Filigree</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Utilizing clockwork mechanisms extracted from antique pocket-watches, we build complex articulated anatomy that feels suspended in perpetual motion.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-800/50 flex justify-between items-center text-xs tracking-wider uppercase font-mono text-[#c4a265]">
                <span>TOLERANCE RATIO</span>
                <span className="text-white">±0.02mm</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="border border-[#c4a265]/10 bg-[#0d070b]/80 p-8 rounded-sm hover:border-[#c4a265]/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-500/5 rounded-full flex items-center justify-center border border-[#c4a265]/20 mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-[#c4a265]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-3">24K Gilding Technique</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Applying multiple layers of gold leaf alongside custom hand-applied chemical acids to induce deep bronze shadows, providing unmatched organic highlights.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-800/50 flex justify-between items-center text-xs tracking-wider uppercase font-mono text-[#c4a265]">
                <span>AURUM PURITY</span>
                <span className="text-white">99.9% GOLD</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="border border-[#c4a265]/10 bg-[#0d070b]/80 p-8 rounded-sm hover:border-[#c4a265]/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-500/5 rounded-full flex items-center justify-center border border-[#c4a265]/20 mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5 text-[#c4a265]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-3">Modular Skeletons</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Each insect is held together by micro-fasteners, meaning they can be modularly disassembled, calibrated, or upgraded in our specialized Parisian laboratory.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-800/50 flex justify-between items-center text-xs tracking-wider uppercase font-mono text-[#c4a265]">
                <span>SYSTEM ASSEMBLY</span>
                <span className="text-white">100% MODULAR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE INTERACTIVE ASSEMBLER / ATELIER --- */}
      <section id="assembler" className="py-24 px-6 lg:px-16 relative overflow-hidden bg-gradient-to-b from-[#090408] to-[#040203]">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="mb-16 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.35em] text-[#c4a265] font-semibold block mb-2">// INTERACTIVE LAB</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal text-white">Assemble Your Masterpiece</h2>
            <p className="text-zinc-400 font-light text-sm mt-2 max-w-xl">
              Simulate modular commissions by toggling the physical properties of our centerpiece Scarab Prototype. Order custom specs upon final inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Interactive Assembler Viewport (Left 7 Cols) */}
            <div className="lg:col-span-7 border border-[#c4a265]/15 bg-[#0d070b]/90 rounded-md p-8 relative flex flex-col justify-center items-center min-h-[460px] shadow-[inset_0_0_50px_rgba(0,0,0,0.9)] overflow-hidden group">
              {/* Retro HUD Interface */}
              <div className="absolute top-4 left-4 text-[9px] font-mono text-[#c4a265]/60 tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                PREVIEW MATRIX ACTIVE
              </div>
              <div className="absolute top-4 right-4 text-[9px] font-mono text-zinc-500">
                ZOOM: AUTO // FIT
              </div>

              {/* Dynamic Insect Visualizer representing customization choices */}
              <div className={`w-64 h-64 relative transition-all duration-700 transform ${isAssembling ? 'scale-90 rotate-180 opacity-40 blur-[2px]' : 'scale-100 rotate-0 opacity-100'}`}>
                {/* Custom rendering of Scarab Beetle based on selected state */}
                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                  <defs>
                    {/* Metal Color Gradients */}
                    <linearGradient id="gold-custom" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fef3c7" />
                      <stop offset="50%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#78350f" />
                    </linearGradient>
                    <linearGradient id="bronze-custom" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#edd0be" />
                      <stop offset="60%" stopColor="#b45309" />
                      <stop offset="100%" stopColor="#451a03" />
                    </linearGradient>
                    <linearGradient id="obsidian-custom" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4b5563" />
                      <stop offset="40%" stopColor="#111827" />
                      <stop offset="100%" stopColor="#030712" />
                    </linearGradient>

                    {/* Gem colors */}
                    <radialGradient id="ruby" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#881337" />
                    </radialGradient>
                    <radialGradient id="sapphire" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </radialGradient>
                    <radialGradient id="emerald" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#064e3b" />
                    </radialGradient>
                  </defs>

                  {/* Mechanical legs (Brass skeleton) */}
                  <g stroke="#854d0e" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
                    {/* Leg pairs */}
                    <path d="M 150,150 L 100,120 L 70,140" />
                    <path d="M 250,150 L 300,120 L 330,140" />

                    <path d="M 150,190 L 90,190 L 60,210" />
                    <path d="M 250,190 L 310,190 L 340,210" />

                    <path d="M 150,230 L 100,260 L 80,300" />
                    <path d="M 250,230 L 300,260 L 320,300" />
                  </g>

                  {/* Antennae */}
                  <path d="M 180,90 Q 160,50 130,40 M 220,90 Q 240,50 270,40" stroke="#c4a265" strokeWidth="2" fill="none" opacity="0.6"/>

                  {/* Center Body Core (Metal Base) */}
                  <rect x="170" y="110" width="60" height="150" rx="30" fill="url(#obsidian-custom)" stroke="#c4a265" strokeWidth="2"/>

                  {/* Segmented Abdomen */}
                  <rect x="175" y="150" width="50" height="90" rx="20" fill={`url(#${customMetal}-custom)`} stroke="#1f1610" strokeWidth="1"/>

                  {/* Dynamic Custom Wings */}
                  {customWings === 'filigree' && (
                    <g opacity="0.9">
                      {/* Left Wing filigree */}
                      <path d="M 175,130 Q 90,90 80,180 Q 110,240 175,160 Z" fill="none" stroke="#c4a265" strokeWidth="2" />
                      <path d="M 175,130 Q 120,130 110,180 Q 140,200 175,160" fill="none" stroke="#c4a265" strokeWidth="1" />
                      <path d="M 130,120 C 110,150 110,180 140,170" fill="none" stroke="#c4a265" strokeWidth="0.5" strokeDasharray="3" />
                      
                      {/* Right Wing filigree */}
                      <path d="M 225,130 Q 310,90 320,180 Q 290,240 225,160 Z" fill="none" stroke="#c4a265" strokeWidth="2" />
                      <path d="M 225,130 Q 280,130 290,180 Q 260,200 225,160" fill="none" stroke="#c4a265" strokeWidth="1" />
                      <path d="M 270,120 C 290,150 290,180 260,170" fill="none" stroke="#c4a265" strokeWidth="0.5" strokeDasharray="3" />
                    </g>
                  )}

                  {customWings === 'solid' && (
                    <g opacity="0.95">
                      {/* Left Solid Carapace wing casing */}
                      <path d="M 175,130 Q 70,100 90,220 Q 130,260 175,160 Z" fill={`url(#${customMetal}-custom)`} stroke="#c4a265" strokeWidth="2"/>
                      <circle cx="130" cy="180" r="3" fill="#c4a265" opacity="0.5"/>
                      <circle cx="150" cy="200" r="3" fill="#c4a265" opacity="0.5"/>

                      {/* Right Solid Carapace wing casing */}
                      <path d="M 225,130 Q 330,100 310,220 Q 270,260 225,160 Z" fill={`url(#${customMetal}-custom)`} stroke="#c4a265" strokeWidth="2"/>
                      <circle cx="270" cy="180" r="3" fill="#c4a265" opacity="0.5"/>
                      <circle cx="250" cy="200" r="3" fill="#c4a265" opacity="0.5"/>
                    </g>
                  )}

                  {customWings === 'clockwork' && (
                    <g opacity="0.9">
                      {/* Left wing mechanical gear structures */}
                      <path d="M 175,130 L 100,120 L 120,200 L 175,160" fill="none" stroke="#c4a265" strokeWidth="2" />
                      <circle cx="130" cy="140" r="14" fill="none" stroke="#c4a265" strokeWidth="2" strokeDasharray="4,2" />
                      <circle cx="130" cy="140" r="8" fill="none" stroke="#c4a265" strokeWidth="1" />

                      {/* Right wing mechanical gear structures */}
                      <path d="M 225,130 L 300,120 L 280,200 L 225,160" fill="none" stroke="#c4a265" strokeWidth="2" />
                      <circle cx="270" cy="140" r="14" fill="none" stroke="#c4a265" strokeWidth="2" strokeDasharray="4,2" />
                      <circle cx="270" cy="140" r="8" fill="none" stroke="#c4a265" strokeWidth="1" />
                    </g>
                  )}

                  {/* Head plate */}
                  <path d="M 170,110 Q 200,70 230,110 Z" fill={`url(#${customMetal}-custom)`} stroke="#c4a265" strokeWidth="1.5" />

                  {/* Gem Core Eyes (The central customizable jewel core) */}
                  <circle cx="185" cy="100" r="6" fill={`url(#${customCore})`} stroke="#1f1610" strokeWidth="1" />
                  <circle cx="215" cy="100" r="6" fill={`url(#${customCore})`} stroke="#1f1610" strokeWidth="1" />

                  {/* Highlight core gem in the center thorax */}
                  <polygon points="190,130 210,130 215,145 200,155 185,145" fill={`url(#${customCore})`} stroke="#c4a265" strokeWidth="1" />
                </svg>
              </div>

              {/* Specification overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] font-mono text-zinc-500">
                <span>METAL: {customMetal.toUpperCase()}</span>
                <span>WING TYPE: {customWings.toUpperCase()}</span>
                <span>CORE: {customCore.toUpperCase()}</span>
              </div>
            </div>

            {/* Customization Panel (Right 5 Cols) */}
            <div className="lg:col-span-5 space-y-8 bg-[#090408]/60 p-6 sm:p-8 border border-zinc-800/40 rounded-md">
              {/* Core Material Selector */}
              <div>
                <label className="text-[10px] tracking-[0.25em] text-[#c4a265] uppercase font-bold block mb-3">
                  1. Structural Metal Casing
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'gold', name: '24K Gilded', color: 'bg-gradient-to-tr from-amber-600 to-amber-200' },
                    { id: 'bronze', name: 'Raw Bronze', color: 'bg-gradient-to-tr from-amber-900 to-amber-500' },
                    { id: 'obsidian', name: 'Gunmetal Steel', color: 'bg-gradient-to-tr from-zinc-800 to-zinc-400' }
                  ].map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => { triggerSound('click'); setCustomMetal(mat.id); }}
                      className={`p-3 text-left border rounded-sm transition-all duration-300 flex flex-col justify-between h-20 ${
                        customMetal === mat.id 
                          ? 'border-[#c4a265] bg-[#c4a265]/10 shadow-[0_0_12px_rgba(196,162,101,0.15)]' 
                          : 'border-zinc-800/60 bg-zinc-900/40 hover:border-zinc-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full ${mat.color} border border-black/50`} />
                      <span className="text-[11px] font-medium text-white tracking-wide">{mat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Filigree Style Selector */}
              <div>
                <label className="text-[10px] tracking-[0.25em] text-[#c4a265] uppercase font-bold block mb-3">
                  2. Wing Architecture
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'filigree', name: 'Aetherial Golden Filigree', desc: 'Lightweight hand-twisted lace brass wire' },
                    { id: 'solid', name: 'Solid Articulated Plates', desc: 'Heavy overlapping engraved armor shields' },
                    { id: 'clockwork', name: 'Exposed Gear Skeleton', desc: 'Interlinked active clockwork gear train' }
                  ].map((wing) => (
                    <button
                      key={wing.id}
                      onClick={() => { triggerSound('click'); setCustomWings(wing.id); }}
                      className={`w-full p-4 text-left border rounded-sm transition-all duration-300 flex items-center justify-between ${
                        customWings === wing.id 
                          ? 'border-[#c4a265] bg-[#c4a265]/10' 
                          : 'border-zinc-800/60 bg-zinc-900/40 hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <h4 className="text-xs font-semibold text-white tracking-wide">{wing.name}</h4>
                        <p className="text-[10px] text-zinc-500 font-light">{wing.desc}</p>
                      </div>
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        customWings === wing.id ? 'border-[#c4a265] bg-[#c4a265]' : 'border-zinc-600'
                      }`}>
                        {customWings === wing.id && <div className="w-1.5 h-1.5 bg-black rounded-full" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Gem Core Selector */}
              <div>
                <label className="text-[10px] tracking-[0.25em] text-[#c4a265] uppercase font-bold block mb-3">
                  3. Inlaid Thorax Gemstone
                </label>
                <div className="flex gap-4">
                  {[
                    { id: 'ruby', name: 'Siam Ruby', bg: 'bg-rose-600' },
                    { id: 'sapphire', name: 'Royal Sapphire', bg: 'bg-blue-600' },
                    { id: 'emerald', name: 'Kashmir Emerald', bg: 'bg-emerald-600' }
                  ].map((gem) => (
                    <button
                      key={gem.id}
                      onClick={() => { triggerSound('click'); setCustomCore(gem.id); }}
                      className={`flex-1 p-3 border rounded-sm transition-all duration-300 flex items-center gap-2.5 justify-center text-[11px] ${
                        customCore === gem.id 
                          ? 'border-[#c4a265] bg-[#c4a265]/10 text-white' 
                          : 'border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <span className={`w-3 h-3 rounded-full ${gem.bg} shadow-inner shadow-black/40`} />
                      {gem.name.split(' ')[1]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Commission simulation */}
              <button
                onClick={triggerAssembly}
                className="w-full bg-[#c4a265] hover:bg-[#b08e52] text-black font-semibold tracking-widest text-xs py-4 rounded-sm transition-all duration-300 uppercase flex items-center justify-center gap-2"
              >
                {isAssembling ? (
                  <>
                    <SlidersHorizontal className="w-4 h-4 animate-spin" />
                    Recalibrating Core...
                  </>
                ) : (
                  <>
                    <Hammer className="w-4 h-4" />
                    Lock Custom Commission Layout
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- PREMIUM SPECIMEN VAULT & GALLERY --- */}
      <section id="vault" className="py-24 px-6 lg:px-16 border-t border-[#c4a265]/10 relative bg-[#090408]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.35em] text-[#c4a265] font-semibold block mb-2">// SPECIMEN DRAWERS</span>
            <h2 className="font-serif text-4xl font-light tracking-wide text-white">The Archival Vault</h2>
            <div className="h-[1px] w-20 bg-[#c4a265] mx-auto mt-4"></div>
          </div>

          {/* Grid of Specimens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VAULT_ITEMS.map((item, index) => (
              <div 
                key={index}
                className="border border-[#c4a265]/10 hover:border-[#c4a265]/40 bg-[#0d070b]/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] group hover:-translate-y-1"
              >
                {/* Image Placeholder Frame (Artistic Metallic Lines) */}
                <div className="h-64 bg-zinc-950/80 border-b border-zinc-900/60 relative flex justify-center items-center p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#2a111f]/20 to-transparent pointer-events-none" />
                  
                  {/* Fine Geometric grid */}
                  <div className="absolute inset-4 border border-[#c4a265]/5 pointer-events-none" />

                  {/* Centered Specimen SVG Preview */}
                  <div className="w-44 h-44 drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500">
                    {item.svgPreview}
                  </div>

                  {/* Corner tags */}
                  <span className="absolute top-4 left-4 font-mono text-[9px] text-[#c4a265]/60 tracking-wider">
                    {item.serial}
                  </span>
                  <span className="absolute bottom-4 right-4 text-[10px] tracking-widest text-[#c4a265]/80 bg-[#c4a265]/5 px-2 py-0.5 border border-[#c4a265]/10 rounded-sm">
                    {item.edition}
                  </span>
                </div>

                {/* Info and Purchase Panel */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#c4a265] transition-colors">{item.name}</h3>
                      <p className="text-zinc-500 text-xs font-mono mt-0.5 tracking-wider">{item.family}</p>
                    </div>
                    <span className="font-serif text-lg text-[#c4a265] font-light">{item.price}</span>
                  </div>

                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-zinc-900/80 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500 font-mono">WEIGHT: {item.weight}</span>
                    <button 
                      onClick={() => { triggerSound('click'); setSelectedSpecimen(item); }}
                      className="px-4 py-2 border border-[#c4a265]/30 hover:border-[#c4a265] hover:bg-[#c4a265]/10 text-[#c4a265] rounded-sm text-xs tracking-widest uppercase transition-all duration-300 font-medium"
                    >
                      Inquire Specimen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNICAL SPECIFICATION READOUT --- */}
      <section className="py-24 px-6 lg:px-16 border-t border-zinc-900 bg-black relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.35em] text-[#c4a265] font-semibold block">// ANATOMICAL COMPOSITION</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal leading-tight text-white">
              Surgical Detailing & Archival Preservation
            </h2>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Every creation is built using only premium non-corrosive materials. The clockwork components are polished by hand, ultrasonic-cleaned, and fixed using structural resins to prevent drifting over centuries of storage.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="p-2 border border-[#c4a265]/20 bg-[#c4a265]/5 rounded-sm h-10 w-10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#c4a265]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">Lifetime Conservation</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">We offer free yearly maintenance to original collectors to test gear structural integrity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-2 border border-[#c4a265]/20 bg-[#c4a265]/5 rounded-sm h-10 w-10 flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-[#c4a265]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">Hermetic Vitrines Available</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">Custom glass domes with integrated copper LED bases and solid mahogany bases can be added to your shipment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 border border-[#c4a265]/10 bg-[#0d070b]/50 p-6 sm:p-8 rounded-sm">
            <div className="flex border-b border-zinc-800 pb-4 mb-6 gap-6 text-xs tracking-widest uppercase font-mono text-[#c4a265]">
              <button 
                onClick={() => { triggerSound('click'); setActiveTab('anatomy'); }}
                className={`pb-2 ${activeTab === 'anatomy' ? 'text-white border-b-2 border-[#c4a265]' : 'opacity-50 hover:opacity-100'}`}
              >
                Anatomy Specs
              </button>
              <button 
                onClick={() => { triggerSound('click'); setActiveTab('shipping'); }}
                className={`pb-2 ${activeTab === 'shipping' ? 'text-white border-b-2 border-[#c4a265]' : 'opacity-50 hover:opacity-100'}`}
              >
                Secure Dispatch
              </button>
            </div>

            {activeTab === 'anatomy' ? (
              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500">CHASSIS MATERIAL</span>
                  <span className="text-zinc-300">CNC laser-machined spring-steel core</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500">ARTICULATIONS</span>
                  <span className="text-zinc-300">Dual-spring tension rivets</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500">GLOW CONCENTRATE</span>
                  <span className="text-zinc-300">SuperLuminova vintage bronze paint overlays</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500">WATCH MOVEMENTS INCLUDED</span>
                  <span className="text-zinc-300">Swiss Caliber ETA 2824-2 escapement components</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-500">ACID FINISHING</span>
                  <span className="text-zinc-300">Sulfur-based bronze oxidation bath (12-hour soak)</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500">PACKAGING</span>
                  <span className="text-zinc-300">Velvet-lined shockproof wooden military-crate cases</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500">INSURANCE</span>
                  <span className="text-zinc-300">Fully insured high-value transport coverage included</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500">TRACKING SIGNATURE</span>
                  <span className="text-zinc-300">Mandatory biometric receiver signature</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-500">GLOBAL LEAD TIMES</span>
                  <span className="text-zinc-300">Europe: 4 Days // US & Asia: 9 Days custom customs clearance</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- INQUIRY / ACQUISITION MODAL --- */}
      {selectedSpecimen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#0e090c] border border-[#c4a265]/30 p-8 rounded-sm shadow-[0_0_50px_rgba(196,162,101,0.2)]">
            <button 
              onClick={() => { triggerSound('click'); setSelectedSpecimen(null); }}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] tracking-[0.3em] text-[#c4a265] font-mono block mb-2 uppercase">
              // ACQUISITION BRIEF
            </span>
            <h3 className="font-serif text-3xl text-white mb-2">{selectedSpecimen.name}</h3>
            <p className="text-xs text-zinc-500 font-mono mb-6">{selectedSpecimen.serial || "SPECIMEN S021"} — {selectedSpecimen.price || "VALUED BY QUOTE"}</p>

            {inquirySubmitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto animate-bounce" />
                <h4 className="font-serif text-xl text-white">Inquiry Sent Successfully</h4>
                <p className="text-zinc-400 text-xs">
                  We've transmitted your private collector request to our atelier coordinator in Paris. Expect secure contact shortly, {inquiryName || "honored guest"}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] text-zinc-400 font-mono mb-1.5 uppercase">Full Collector Name</label>
                  <input 
                    type="text" 
                    required 
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Baron Sterling Hunt" 
                    className="w-full bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 focus:border-[#c4a265] text-white p-3 text-xs outline-none rounded-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-zinc-400 font-mono mb-1.5 uppercase">Secure Contact E-mail</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="sterling@huntcollection.com" 
                    className="w-full bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 focus:border-[#c4a265] text-white p-3 text-xs outline-none rounded-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-zinc-400 font-mono mb-1.5 uppercase">Acquisition Message & Details</label>
                  <textarea 
                    rows="3" 
                    placeholder="Indicate your bespoke requests (custom crystal inclusions, special wall mount frameworks, or hand-painted mahogany pedestals)..." 
                    className="w-full bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 focus:border-[#c4a265] text-white p-3 text-xs outline-none rounded-sm transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-[#c4a265] hover:bg-[#b59254] text-black text-xs tracking-widest font-bold uppercase py-4 rounded-sm transition-all duration-300"
                  >
                    Secure Private Inquiry Protocol
                  </button>
                  <p className="text-[10px] text-zinc-500 text-center mt-3 font-mono leading-relaxed">
                    By submitting, you authorize AK Atelier Paris to contact you via encrypted digital channels regarding private acquisitions.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* --- PREMIUM NEWSLETTER --- */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#c4a265]/10 relative bg-[#090408]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.4em] text-[#c4a265] font-semibold block">// PRIVATE DISPATCHES</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
            Join the Sovereign Collector Circle
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Receive highly limited notifications regarding future quarterly drops, metalwork experiments, and private museum exhibitions worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-[#c4a265] text-white p-3 text-xs outline-none rounded-sm transition-colors text-center sm:text-left"
            />
            <button 
              onClick={() => triggerSound('wind')}
              className="bg-[#c4a265] hover:bg-[#b08e52] text-black text-xs tracking-widest font-bold uppercase px-6 py-3 rounded-sm transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-12 px-6 lg:px-16 border-t border-zinc-900/60 text-xs text-zinc-500 font-mono">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-serif text-lg text-white font-bold tracking-widest text-[#c4a265]">AK</span>
            <span>HANDMADE METALWORK ATELIER PARIS // COUTURES</span>
          </div>
          <div className="flex gap-6 uppercase text-[10px] tracking-widest text-[#c4a265]">
            <a href="#exhibits" className="hover:text-white transition-colors">Exhibits</a>
            <a href="#craftsmanship" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#assembler" className="hover:text-white transition-colors">Atelier</a>
            <a href="#vault" className="hover:text-white transition-colors">Vault</a>
          </div>
          <div>
            <span>© 2026 AK IND. ALL RIGHTS PRESERVED.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// HIGH FIDELITY SVG INSECTS DESIGN PRESETS
// ==========================================

const GildedScarabSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <linearGradient id="sc-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffeed0"/>
        <stop offset="60%" stopColor="#d29f45"/>
        <stop offset="100%" stopColor="#5d3c0e"/>
      </linearGradient>
      <linearGradient id="sc-bronze" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f3caad"/>
        <stop offset="70%" stopColor="#b17649"/>
        <stop offset="100%" stopColor="#431c03"/>
      </linearGradient>
      <radialGradient id="sc-core" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fa3252" />
        <stop offset="100%" stopColor="#6e0012" />
      </radialGradient>
    </defs>
    
    {/* Background Ambient Shadow Ring */}
    <ellipse cx="200" cy="330" rx="90" ry="12" fill="#000" opacity="0.6" filter="blur(10px)" />

    {/* Elegant Golden Antennae */}
    <path d="M 170,80 Q 140,25 90,20" stroke="url(#sc-gold)" strokeWidth="2.5" fill="none"/>
    <path d="M 230,80 Q 260,25 310,20" stroke="url(#sc-gold)" strokeWidth="2.5" fill="none"/>

    {/* Insect Legs: Intricate segmented mechanical designs */}
    <g stroke="url(#sc-bronze)" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* Front Legs */}
      <path d="M 150,130 L 80,90 L 50,110 L 40,150" />
      <path d="M 250,130 L 320,90 L 350,110 L 360,150" />
      {/* Mid Legs */}
      <path d="M 140,190 L 60,190 L 30,220 L 25,270" />
      <path d="M 260,190 L 340,190 L 370,220 L 375,270" />
      {/* Back Legs */}
      <path d="M 150,260 L 85,310 L 65,360 L 60,390" />
      <path d="M 250,260 L 315,310 L 335,360 L 340,390" />
    </g>

    {/* Mechanical joint cogs */}
    <g fill="url(#sc-gold)">
      <circle cx="150" cy="130" r="6" />
      <circle cx="250" cy="130" r="6" />
      <circle cx="140" cy="190" r="6" />
      <circle cx="260" cy="190" r="6" />
      <circle cx="150" cy="260" r="6" />
      <circle cx="250" cy="260" r="6" />
    </g>

    {/* Abdomen segments (Main background core) */}
    <rect x="155" y="140" width="90" height="150" rx="45" fill="#140c11" stroke="url(#sc-gold)" strokeWidth="2" />
    <path d="M 160,180 L 240,180 M 156,220 L 244,220 M 165,260 L 235,260" stroke="url(#sc-bronze)" strokeWidth="2" opacity="0.7"/>

    {/* Heavy Wing Sheaths (Overlapping design) */}
    {/* Left Outer Plate */}
    <path d="M 196,120 C 130,120 100,180 110,280 C 130,310 170,315 196,305 Z" fill="url(#sc-bronze)" stroke="url(#sc-gold)" strokeWidth="2" />
    <path d="M 196,120 C 150,150 130,210 135,280" stroke="url(#sc-gold)" strokeWidth="1" opacity="0.6" fill="none" />
    <circle cx="130" cy="170" r="3" fill="url(#sc-gold)"/>
    <circle cx="150" cy="240" r="3.5" fill="url(#sc-gold)"/>

    {/* Right Outer Plate */}
    <path d="M 204,120 C 270,120 300,180 290,280 C 270,310 230,315 204,305 Z" fill="url(#sc-bronze)" stroke="url(#sc-gold)" strokeWidth="2" />
    <path d="M 204,120 C 250,150 270,210 265,280" stroke="url(#sc-gold)" strokeWidth="1" opacity="0.6" fill="none" />
    <circle cx="270" cy="170" r="3" fill="url(#sc-gold)"/>
    <circle cx="250" cy="240" r="3.5" fill="url(#sc-gold)"/>

    {/* Head & Neck Pieces */}
    <path d="M 160,120 Q 200,60 240,120 Z" fill="url(#sc-bronze)" stroke="url(#sc-gold)" strokeWidth="2" />
    <circle cx="175" cy="100" r="7" fill="url(#sc-core)" stroke="url(#sc-gold)" strokeWidth="1.5" />
    <circle cx="225" cy="100" r="7" fill="url(#sc-core)" stroke="url(#sc-gold)" strokeWidth="1.5" />
  </svg>
);

const EmperorDragonflySVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <linearGradient id="df-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fff8e7"/>
        <stop offset="50%" stopColor="#e5ba64"/>
        <stop offset="100%" stopColor="#7c5313"/>
      </linearGradient>
      <linearGradient id="df-iron" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#9ca3af"/>
        <stop offset="100%" stopColor="#1f2937"/>
      </linearGradient>
      <radialGradient id="df-gem" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#10b981"/>
        <stop offset="100%" stopColor="#022c22"/>
      </radialGradient>
    </defs>
    
    <ellipse cx="200" cy="350" rx="60" ry="8" fill="#000" opacity="0.5" filter="blur(8px)" />

    {/* Super Fine Filigree Wings (Double Wings Layout) */}
    {/* Left Upper Wing */}
    <path d="M 190,140 Q 50,40 40,100 Q 80,160 190,150 Z" fill="none" stroke="url(#df-gold)" strokeWidth="2" />
    <path d="M 190,140 Q 90,80 75,120 Q 130,150 190,150" fill="none" stroke="url(#df-gold)" strokeWidth="1" opacity="0.6"/>
    <path d="M 100,75 L 120,120 M 130,90 L 150,135" stroke="url(#df-gold)" strokeWidth="0.5" opacity="0.4" />

    {/* Left Lower Wing */}
    <path d="M 185,160 Q 60,110 65,160 Q 100,210 185,170 Z" fill="none" stroke="url(#df-gold)" strokeWidth="1.8" />
    <path d="M 185,160 Q 100,135 95,165 Q 130,190 185,170" fill="none" stroke="url(#df-gold)" strokeWidth="0.8" opacity="0.5"/>

    {/* Right Upper Wing */}
    <path d="M 210,140 Q 350,40 360,100 Q 320,160 210,150 Z" fill="none" stroke="url(#df-gold)" strokeWidth="2" />
    <path d="M 210,140 Q 310,80 325,120 Q 270,150 210,150" fill="none" stroke="url(#df-gold)" strokeWidth="1" opacity="0.6"/>
    <path d="M 300,75 L 280,120 M 270,90 L 250,135" stroke="url(#df-gold)" strokeWidth="0.5" opacity="0.4" />

    {/* Right Lower Wing */}
    <path d="M 215,160 Q 340,110 335,160 Q 300,210 215,170 Z" fill="none" stroke="url(#df-gold)" strokeWidth="1.8" />
    <path d="M 215,160 Q 300,135 305,165 Q 270,190 215,170" fill="none" stroke="url(#df-gold)" strokeWidth="0.8" opacity="0.5"/>

    {/* Legs */}
    <g stroke="url(#df-iron)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 185,160 L 150,190 L 130,220" />
      <path d="M 215,160 L 250,190 L 270,220" />
      <path d="M 190,190 L 160,230 L 145,260" />
      <path d="M 210,190 L 240,230 L 255,260" />
    </g>

    {/* Long Segmented Tail */}
    <g fill="url(#df-iron)" stroke="url(#df-gold)" strokeWidth="1">
      <rect x="194" y="170" width="12" height="25" rx="4" />
      <rect x="195" y="198" width="10" height="25" rx="3" />
      <rect x="196" y="226" width="8" height="25" rx="2" />
      <rect x="196" y="254" width="8" height="25" rx="2" />
      <rect x="197" y="282" width="6" height="25" rx="2" />
      <rect x="197" y="310" width="6" height="25" rx="2" />
      {/* Finial Stinger tip */}
      <path d="M 197,338 L 203,338 L 200,358 Z" fill="url(#df-gold)" />
    </g>

    {/* Thorax / Engine Core */}
    <rect x="182" y="115" width="36" height="60" rx="18" fill="url(#df-iron)" stroke="url(#df-gold)" strokeWidth="2.5" />
    <circle cx="200" cy="145" r="9" fill="url(#df-gem)" stroke="url(#df-gold)" strokeWidth="1.5" />

    {/* Eyes */}
    <circle cx="180" cy="110" r="10" fill="url(#df-gem)" stroke="url(#df-gold)" strokeWidth="1.5" />
    <circle cx="220" cy="110" r="10" fill="url(#df-gem)" stroke="url(#df-gold)" strokeWidth="1.5" />
  </svg>
);

const LunarMothSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <linearGradient id="mo-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fffaf0"/>
        <stop offset="40%" stopColor="#ddb05f"/>
        <stop offset="100%" stopColor="#664614"/>
      </linearGradient>
      <linearGradient id="mo-dark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#374151"/>
        <stop offset="100%" stopColor="#111827"/>
      </linearGradient>
      <radialGradient id="mo-eye" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </radialGradient>
    </defs>
    
    <ellipse cx="200" cy="360" rx="40" ry="6" fill="#000" opacity="0.4" filter="blur(6px)" />

    {/* Feathery Antennae */}
    <path d="M 185,110 C 175,70 145,50 120,45" stroke="url(#mo-gold)" strokeWidth="3" strokeDasharray="1,1.5" fill="none" />
    <path d="M 215,110 C 225,70 255,50 280,45" stroke="url(#mo-gold)" strokeWidth="3" strokeDasharray="1,1.5" fill="none" />

    {/* Beautiful Fan Wings with long tails */}
    {/* Left Wing & Long Tail */}
    <path d="M 185,140 Q 60,60 50,150 Q 80,240 160,250 L 120,350 Q 140,360 165,300 L 185,200 Z" fill="url(#mo-dark)" stroke="url(#mo-gold)" strokeWidth="2.5" />
    {/* Luna Spot Left */}
    <circle cx="115" cy="160" r="14" fill="none" stroke="url(#mo-gold)" strokeWidth="2" />
    <circle cx="115" cy="160" r="8" fill="url(#mo-eye)" />

    {/* Right Wing & Long Tail */}
    <path d="M 215,140 Q 340,60 350,150 Q 320,240 240,250 L 280,350 Q 260,360 235,300 L 215,200 Z" fill="url(#mo-dark)" stroke="url(#mo-gold)" strokeWidth="2.5" />
    {/* Luna Spot Right */}
    <circle cx="285" cy="160" r="14" fill="none" stroke="url(#mo-gold)" strokeWidth="2" />
    <circle cx="285" cy="160" r="8" fill="url(#mo-eye)" />

    {/* Fluffy Brass Core Body */}
    <rect x="180" y="115" width="40" height="90" rx="20" fill="url(#mo-dark)" stroke="url(#mo-gold)" strokeWidth="1.5" />
    {/* Ribbed detail representing metal sheets */}
    <line x1="185" y1="140" x2="215" y2="140" stroke="url(#mo-gold)" strokeWidth="1" />
    <line x1="185" y1="160" x2="215" y2="160" stroke="url(#mo-gold)" strokeWidth="1" />
    <line x1="185" y1="180" x2="215" y2="180" stroke="url(#mo-gold)" strokeWidth="1" />

    {/* Eyes */}
    <circle cx="188" cy="115" r="5.5" fill="url(#mo-eye)" />
    <circle cx="212" cy="115" r="5.5" fill="url(#mo-eye)" />
  </svg>
);

const ObsidianScorpionSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <linearGradient id="sc-obsidian" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4c566a"/>
        <stop offset="50%" stopColor="#1e2530"/>
        <stop offset="100%" stopColor="#0a0f14"/>
      </linearGradient>
      <linearGradient id="sc-gold-accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffd885"/>
        <stop offset="100%" stopColor="#966d1f"/>
      </linearGradient>
    </defs>

    <ellipse cx="200" cy="360" rx="80" ry="10" fill="#000" opacity="0.6" filter="blur(8px)" />

    {/* Segmented Tail Arching Over */}
    <g fill="url(#sc-obsidian)" stroke="url(#sc-gold-accent)" strokeWidth="1">
      <rect x="190" y="240" width="20" height="22" rx="5" />
      <rect x="192" y="215" width="16" height="22" rx="4" />
      <rect x="193" y="188" width="14" height="24" rx="4" />
      <rect x="191" y="160" width="18" height="24" rx="4" />
      <rect x="186" y="132" width="28" height="24" rx="6" />
      <rect x="178" y="104" width="44" height="24" rx="8" />
      
      {/* Arching stinger joint */}
      <path d="M 188,104 Q 200,60 220,50" fill="none" stroke="url(#sc-gold-accent)" strokeWidth="4" />
      {/* Deadly Gilded Needle */}
      <path d="M 220,50 Q 240,45 250,55 L 225,65 Z" fill="url(#sc-gold-accent)" />
    </g>

    {/* Articulated Claws (Pedipalps) */}
    {/* Left Claw */}
    <path d="M 170,220 Q 110,210 90,160 L 70,165" stroke="url(#sc-obsidian)" strokeWidth="5.5" strokeLinecap="round" fill="none"/>
    <path d="M 70,165 Q 40,140 60,110 Q 90,130 85,160 Z" fill="url(#sc-obsidian)" stroke="url(#sc-gold-accent)" strokeWidth="1.5" />
    <path d="M 55,120 Q 30,110 40,140" stroke="url(#sc-gold-accent)" strokeWidth="2.5" fill="none" />

    {/* Right Claw */}
    <path d="M 230,220 Q 290,210 310,160 L 330,165" stroke="url(#sc-obsidian)" strokeWidth="5.5" strokeLinecap="round" fill="none"/>
    <path d="M 330,165 Q 360,140 340,110 Q 310,130 315,160 Z" fill="url(#sc-obsidian)" stroke="url(#sc-gold-accent)" strokeWidth="1.5" />
    <path d="M 345,120 Q 370,110 360,140" stroke="url(#sc-gold-accent)" strokeWidth="2.5" fill="none" />

    {/* Grounding Legs */}
    <g stroke="url(#sc-obsidian)" strokeWidth="4" fill="none" strokeLinecap="round">
      <path d="M 160,230 L 100,240 L 70,280" />
      <path d="M 240,230 L 300,240 L 330,280" />
      
      <path d="M 160,250 L 110,270 L 80,310" />
      <path d="M 240,250 L 290,270 L 320,310" />

      <path d="M 160,270 L 120,300 L 90,340" />
      <path d="M 240,270 L 280,300 L 310,340" />
    </g>

    {/* Rigid Central Body Armor */}
    <rect x="160" y="210" width="80" height="70" rx="10" fill="url(#sc-obsidian)" stroke="url(#sc-gold-accent)" strokeWidth="2" />
    <path d="M 160,230 L 240,230 M 160,250 L 240,250 M 160,270 L 240,270" stroke="url(#sc-gold-accent)" strokeWidth="1" opacity="0.6"/>
  </svg>
);

// ==========================================
// STATIC PRESET ARRAYS
// ==========================================

const SLIDES = [
  {
    title: "INSECTS",
    desc: "A stunning mechanical beetle crafted from gold filigree, clockwork mechanisms, and a centralized Siam Ruby heart.",
    svgComponent: <GildedScarabSVG />,
    stats: {
      parts: "246",
      hours: "180",
      metals: "24K Gold Plate, Brass, Siam Ruby",
      value: "$4,800 USD"
    }
  },
  {
    title: "LUNA",
    desc: "Exquisite Lunar Moth featuring ultra-light flexible wing-mesh plates, structural clock springs, and fine obsidian legs.",
    svgComponent: <LunarMothSVG />,
    stats: {
      parts: "184",
      hours: "142",
      metals: "Aetherial Gold, Obsidian Steel, Blue Sapphire",
      value: "$5,200 USD"
    }
  },
  {
    title: "AETHER",
    desc: "Articulated mechanical dragonfly featuring rotating gears at wing joints, structural copper ribs, and dual emerald optics.",
    svgComponent: <EmperorDragonflySVG />,
    stats: {
      parts: "312",
      hours: "220",
      metals: "Polished Bronze, Spring Steel, Kashmir Emerald",
      value: "$6,500 USD"
    }
  }
];

const VAULT_ITEMS = [
  {
    serial: "S-012",
    edition: "UNIQUE PIECE",
    name: "Aetherial Scarabaeus",
    family: "SCARABAEIDAE // BRONZE",
    price: "$4,800",
    description: "Centuries of vintage watchmaking history integrated into a hand-gilded, spring-tensioned beetle chassis.",
    weight: "340g",
    svgPreview: <GildedScarabSVG />
  },
  {
    serial: "S-044",
    edition: "1 OF 3 EDITIONS",
    name: "Emperor Anisoptera",
    family: "ODONATA // DRAGONFLY",
    price: "$6,500",
    description: "Features active double-wing assemblies linked through micrometric brass friction joints and polished gold filaments.",
    weight: "220g",
    svgPreview: <EmperorDragonflySVG />
  },
  {
    serial: "S-089",
    edition: "UNIQUE PIECE",
    name: "Vesper Luna Moth",
    family: "SATURNIIDAE // LUNA",
    price: "$5,200",
    description: "Suspended on modular display mounts with fine copper wire mesh representing the dust contours of lunar moths.",
    weight: "180g",
    svgPreview: <LunarMothSVG />
  },
  {
    serial: "S-102",
    edition: "UNIQUE PIECE",
    name: "Gilded Pandinus",
    family: "SCORPIONIDAE // OBSIDIAN",
    price: "$7,200",
    description: "An incredibly detailed micro-scorpion, complete with a functional spring-loaded tail and faceted obsidian plating.",
    weight: "480g",
    svgPreview: <ObsidianScorpionSVG />
  },
  {
    serial: "S-115",
    edition: "CO-ORDER ONLY",
    name: "Chrysolina Aurum",
    family: "CHRYSOMELIDAE // GOLD",
    price: "$3,900",
    description: "A compact leaf beetle prototype showcasing a heavy solid casing polished to mirror perfection using gold oxides.",
    weight: "290g",
    svgPreview: <GildedScarabSVG />
  },
  {
    serial: "S-128",
    edition: "1 OF 2 EDITIONS",
    name: "Acherontia Styx",
    family: "SPHINGIDAE // BRONZE",
    price: "$5,900",
    description: "A death-head hawk moth replica with custom gold-leaf skull engravings over a hardened bronze frame.",
    weight: "210g",
    svgPreview: <LunarMothSVG />
  }
];
10
import React, { useState, useEffect } from 'react';

// --- INLINE SVG ICONS FOR CUSTOM PREMIUM FEEL (No external font dependencies) ---
const Icons = {
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
  ),
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  ),
  Plus: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="9 18 15 12 9 6"/></svg>
  ),
  Dribble: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M6.2 6.2C9 7.6 12 8 15.5 7.5e-01"/><path d="M1 12c4 0 8-1.5 10.5-5.5"/><path d="M12 23c0-4 1.5-8 5.5-10.5"/></svg>
  ),
  Star: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-amber-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ),
  Flame: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
  ),
  Bell: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
  ),
};

export default function App() {
  // Application State
  const [activeTab, setActiveTab] = useState('matchup'); // matchup, courts, ballers
  const [gameJoined, setGameJoined] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Yuto T. just created a '3v3 High Stakes' run at Gion Court", read: false },
    { id: 2, text: "Kyoto South court is currently hot (14 ballers active)", read: false }
  ]);
  const [selectedCity, setSelectedCity] = useState('Kyoto');
  const [showNotificationCenter, setShowNotificationCenter] = useState(false);
  const [customGame, setCustomGame] = useState({
    title: "Saturday Evening Run",
    court: "Sakura Park, Kamigyo",
    time: "6:30 PM",
    format: "3v3",
    intensity: "Intermediate"
  });
  const [activeBallerIndex, setActiveBallerIndex] = useState(0);

  // Ballers Database for interactive profile slider
  const ballers = [
    {
      name: "Kenji 'The Ghost' Sato",
      alias: "佐藤 健二",
      hometown: "Kyoto, Shimogyo",
      playingStyle: "Slasher / Playmaker",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      stats: { Speed: 92, Shooting: 78, Defense: 85, Handle: 95 },
      reputation: "Local Legend"
    },
    {
      name: "Rei 'Midnight' Tanaka",
      alias: "田中 玲",
      hometown: "Kyoto, Sakyo",
      playingStyle: "Pure Sharpshooter",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      stats: { Speed: 80, Shooting: 96, Defense: 70, Handle: 82 },
      reputation: "Sniper"
    },
    {
      name: "Takashi 'Kaminari' Endo",
      alias: "遠藤 隆",
      hometown: "Uji, Kyoto",
      playingStyle: "Lockdown Defender",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      stats: { Speed: 88, Shooting: 65, Defense: 98, Handle: 75 },
      reputation: "Wall of Gion"
    }
  ];

  // Simulated live court activity feed
  const localCourts = [
    { name: "Shōten Court (Sakura Park)", area: "Sakyo-ku, Kyoto", status: "Active Now", ballers: 8, rating: "4.9" },
    { name: "Kamigyo Bridge Court", area: "Kamigyo-ku, Kyoto", status: "Filling Up", ballers: 5, rating: "4.7" },
    { name: "Fushimi Waterfront Hoop", area: "Fushimi-ku, Kyoto", status: "Quiet", ballers: 2, rating: "4.5" }
  ];

  const triggerToast = (msg) => {
    const id = Date.now();
    setNotifications(prev => [{ id, text: msg, read: false }, ...prev]);
    setShowNotificationCenter(true);
    setTimeout(() => {
      setShowNotificationCenter(false);
    }, 4000);
  };

  const handleJoinGame = () => {
    setGameJoined(!gameJoined);
    triggerToast(gameJoined ? "Left 'Boooys night out' matchup." : "Successfully joined 'Boooys night out' matchup! See you at 9:00 PM.");
  };

  const handleCreateGameSubmit = (e) => {
    e.preventDefault();
    triggerToast(`Created run: "${customGame.title}" at ${customGame.court}!`);
  };

  return (
    <div className="min-h-screen bg-[#F2EFE9] text-[#1A1A1A] font-sans overflow-x-hidden selection:bg-[#9C9E82] selection:text-white relative pb-16">
      
      {/* AUTHENTIC BACKDROP & LIGHTING TREATMENT
        Stylized abstract elements that emulate the textured court background, 
        ink brush aesthetics, and beautiful Kyoto landscape depth.
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-50">
        {/* Subtle grid to mimic outdoor chainlink or court outlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Top-right warm ambient radial glow (golden sunset feel) */}
        <div className="absolute top-0 right-0 w-[80vw] h-[70vh] bg-gradient-to-bl from-[#E6E0D3] via-[#EAE4D7] to-transparent rounded-full filter blur-[120px] opacity-80"></div>
        
        {/* Deep ink-wash silhouette simulation in the background */}
        <div className="absolute bottom-[10%] right-[-5%] w-[45%] h-[55%] opacity-15 filter blur-[2px] hidden lg:block">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#1A1A1A]">
            <path d="M0,80 Q20,50 40,75 T80,45 T120,85 L120,100 L0,100 Z" />
            <path d="M20,90 Q40,65 60,85 T100,55 L120,100 L20,100 Z" className="opacity-70" />
          </svg>
        </div>
        
        {/* Abstract stylized Japanese Pagoda silhouette to match background feel */}
        <div className="absolute bottom-[20%] right-[10%] opacity-10 hidden lg:block scale-75 origin-bottom-right">
          <svg width="200" height="400" viewBox="0 0 100 200" fill="currentColor" className="text-[#1A1A1A]">
            <rect x="45" y="10" width="10" height="40" />
            <path d="M30,50 L70,50 L80,60 L20,60 Z" />
            <rect x="38" y="60" width="24" height="25" />
            <path d="M25,85 L75,85 L85,95 L15,95 Z" />
            <rect x="34" y="95" width="32" height="30" />
            <path d="M20,125 L80,125 L90,135 L10,135 Z" />
            <rect x="30" y="135" width="40" height="35" />
            <path d="M15,170 L85,170 L95,185 L5,185 Z" />
            <rect x="25" y="185" width="50" height="15" />
          </svg>
        </div>
      </div>

      {/* --- PREMIUM NOTIFICATION BAR --- */}
      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 pt-3">
        <div className="bg-[#1A1A1A]/95 text-[#F2EFE9] text-xs px-4 py-2.5 rounded-full flex justify-between items-center shadow-lg border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span className="font-mono tracking-wider text-[#9C9E82] uppercase">Live Runs Kyoto:</span>
            <span className="opacity-90 font-medium truncate">Saturday Shootout at Gion is now full • 12 active squads playing</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] opacity-80 font-mono">
            <span>TEMP: 24°C</span>
            <span>WIND: S 4km/h</span>
            <span>LAST RUN MATCHED: 4 MIN AGO</span>
          </div>
        </div>
      </div>

      {/* --- HEADER / NAVIGATION --- */}
      <header className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 py-6 flex justify-between items-center">
        {/* Brand identity matching the streetball tag */}
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold tracking-tighter text-[#1A1A1A] font-mono">Y6B</span>
          <span className="text-xs font-bold tracking-[0.3em] text-[#9C9E82] uppercase">Kyoto</span>
        </div>

        {/* Floating Menu Pills matching the inspiration's visual style */}
        <nav className="flex items-center bg-[#E5E1D7] p-1.5 rounded-full border border-[#DCD7CD] shadow-sm">
          <button 
            onClick={() => setActiveTab('matchup')}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 ${activeTab === 'matchup' ? 'bg-[#1A1A1A] text-white shadow-md' : 'text-[#5A5954] hover:text-[#1A1A1A]'}`}
          >
            <Icons.Menu />
            <span>Runs</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('courts')}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 ${activeTab === 'courts' ? 'bg-[#1A1A1A] text-white shadow-md' : 'text-[#5A5954] hover:text-[#1A1A1A]'}`}
          >
            <Icons.MapPin />
            <span>Courts</span>
          </button>

          <button 
            onClick={() => setActiveTab('ballers')}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 ${activeTab === 'ballers' ? 'bg-[#1A1A1A] text-white shadow-md' : 'text-[#5A5954] hover:text-[#1A1A1A]'}`}
          >
            <Icons.Flame />
            <span>Ballers</span>
          </button>
        </nav>

        {/* Notification & Profile Widgets */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <button 
              onClick={() => setShowNotificationCenter(!showNotificationCenter)}
              className="relative p-2.5 rounded-full bg-white/70 border border-white/80 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Notifications"
            >
              <Icons.Bell />
              {notifications.some(n => !n.read) && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#9C9E82] border-2 border-[#F2EFE9]"></span>
              )}
            </button>

            {/* Notification Center Popover */}
            {showNotificationCenter && (
              <div className="absolute right-0 mt-3 w-80 bg-white/95 backdrop-blur-xl border border-black/10 rounded-2xl p-4 shadow-2xl z-50 text-xs">
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-100">
                  <span className="font-bold uppercase tracking-wider text-gray-500 font-mono">Platform Feed</span>
                  <button 
                    onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}
                    className="text-[#9C9E82] hover:underline"
                  >
                    Clear all
                  </button>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {notifications.map(notif => (
                    <div key={notif.id} className="p-2.5 rounded-xl bg-[#F2EFE9] hover:bg-[#EAE4D7] transition-all">
                      <p className="text-[#1A1A1A] font-medium leading-relaxed">{notif.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider bg-white/70 border border-white/90 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] shadow-sm transition-all duration-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>My Profile</span>
          </button>
        </div>
      </header>

      {/* --- HERO / CONSOLE INTERACTIVE SECTION --- */}
      <main className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 mt-4 lg:mt-10">
        
        {/* Main Immersive Card Panel imitating the high-aesthetic premium wrapper */}
        <div className="bg-white/45 backdrop-blur-2xl border border-white/80 rounded-[32px] p-4 lg:p-8 shadow-[0_24px_70px_rgba(40,38,34,0.12)] relative overflow-hidden transition-all duration-500">
          
          {/* Subtle accent lines */}
          <div className="absolute top-0 right-[35%] w-px h-full bg-[#1A1A1A]/5 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 relative z-10">
            
            {/* LEFT CARD COLUMN - MATCHUP FOCUS OR CONSOLE */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              
              {/* Event Card Inner Pane (Matches "Boooys night out" card structure) */}
              <div className="bg-[#1A1A1A] text-[#FAF9F6] rounded-[24px] p-5 shadow-xl relative overflow-hidden flex flex-col justify-between h-[450px] transition-transform duration-300 hover:scale-[1.01]">
                
                {/* Visual Backdrop in the card */}
                <div className="absolute inset-0 z-0 opacity-40">
                  <img 
                    src="https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=500" 
                    alt="Night Court" 
                    className="w-full h-full object-cover grayscale brightness-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent"></div>
                </div>

                {/* Card Top Information */}
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-white/15 text-[#E6E0D3] backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                      12 min from Home
                    </span>
                    <span className="block mt-2 text-2xl font-bold tracking-tight">Boooys night out</span>
                    <span className="block text-xs font-mono text-[#9C9E82] mt-1">May 12, 9:00 PM</span>
                  </div>
                  
                  {/* Styled Live Badge */}
                  <div className="bg-emerald-500/90 text-white font-mono text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-widest">
                    Open
                  </div>
                </div>

                {/* Card Bottom: Creators, Attendees, Venue Details */}
                <div className="relative z-10 space-y-4">
                  
                  {/* Creator Info */}
                  <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl border border-white/10 backdrop-blur-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" 
                      alt="Matthew" 
                      className="w-8 h-8 rounded-full border border-white/20 object-cover"
                    />
                    <div>
                      <span className="block text-xs font-semibold text-white/90">Matthew Walker</span>
                      <span className="block text-[10px] text-white/50 font-mono">Organizer • Kyoto South</span>
                    </div>
                  </div>

                  {/* Attending Crew */}
                  <div className="flex items-center justify-between py-1 border-t border-b border-white/10">
                    <div className="flex -space-x-2.5">
                      <img className="w-7 h-7 rounded-full border border-[#1A1A1A] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="Attender" />
                      <img className="w-7 h-7 rounded-full border border-[#1A1A1A] object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Attender" />
                      <img className="w-7 h-7 rounded-full border border-[#1A1A1A] object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100" alt="Attender" />
                      <div className="w-7 h-7 rounded-full bg-[#9C9E82] border border-[#1A1A1A] flex items-center justify-center text-[9px] font-bold text-white">+5</div>
                    </div>
                    <span className="text-[10px] text-white/70 font-mono">8 Spot Left • High Skill</span>
                  </div>

                  {/* Venue location */}
                  <div className="text-xs">
                    <span className="font-bold text-[#E6E0D3] block">Shōten Court</span>
                    <span className="text-white/60 text-[10px] block font-mono mt-0.5">123 Sakura Park, Sakyo-ku, Kyoto</span>
                  </div>

                  {/* Action buttons inside Card */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button 
                      onClick={() => triggerToast("Launching Kyoto mini-map for Sakura Park...")}
                      className="py-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-[11px] font-bold tracking-wider text-center border border-white/10 flex items-center justify-center gap-1"
                    >
                      <Icons.MapPin />
                      <span>Map View</span>
                    </button>
                    
                    <button 
                      onClick={handleJoinGame}
                      className={`py-2.5 rounded-xl transition-all text-[11px] font-extrabold tracking-wider text-center flex items-center justify-center gap-1 ${gameJoined ? 'bg-emerald-500 text-white shadow-lg' : 'bg-white text-[#1A1A1A] hover:bg-white/90'}`}
                    >
                      {gameJoined ? <Icons.Check /> : <Icons.Dribble />}
                      <span>{gameJoined ? 'Joined' : 'Join Run'}</span>
                    </button>
                  </div>

                  <div className="text-center">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">✓ Free streetball pickup run</span>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT MAIN HERO CONTENT COLUMN (Visual Universe) */}
            <div className="lg:col-span-8 flex flex-col justify-between min-h-[450px]">
              
              {/* Dynamic Subheader Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="bg-[#9C9E82] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                  #JOIN STREET CULTURE
                </span>
                <span className="bg-white/60 border border-black/5 text-[#5A5954] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                  Kyoto Arena V.1
                </span>
                <span className="bg-white/60 border border-black/5 text-[#5A5954] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                  Kyoto Basin District
                </span>
              </div>

              {/* Main Headline Stack & Massive Interactive Graphic */}
              <div className="relative flex-1 flex flex-col justify-center">
                
                {/* HUGE TEXT STACK - Exactly matching the heavy, modern uppercase 
                  condensed feeling of "FIND YOUR STREET BALLERS"
                */}
                <div className="space-y-1 relative z-10 max-w-2xl select-none">
                  <span className="block text-xs font-bold uppercase tracking-[0.4em] text-[#9C9E82] mb-2 font-mono">
                    JOIN THE KYOTO RUN
                  </span>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#1A1A1A] leading-[0.9] uppercase">
                    Find Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] via-[#9C9E82] to-[#1A1A1A]">Street</span> <br />
                    Ballers.
                  </h1>
                  <p className="text-sm text-[#5A5954] max-w-md mt-4 leading-relaxed font-medium">
                    Kyoto's premium decentralized pickup network. Form elite squads, book local concrete cages, and cement your legacy on the court.
                  </p>
                </div>

                {/* INTERACTIVE DETAILED VECTOR BASKETBALL
                  Matches the massive textured basketball design, fully scaleable 
                  with responsive rotation controls and dynamic hover effect.
                */}
                <div className="absolute right-0 bottom-0 top-0 w-full lg:w-[60%] flex items-center justify-center opacity-20 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
                  <div className="relative group cursor-pointer w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] transition-transform duration-700 hover:rotate-12">
                    
                    {/* Shadow underneath ball */}
                    <div className="absolute -bottom-4 inset-x-10 h-6 bg-radial-gradient from-black/25 to-transparent filter blur-md"></div>
                    
                    {/* The Ball Body */}
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#1A1A1A] filter drop-shadow-xl">
                      {/* Base Shaded Circle with Sand Warmth texture gradient */}
                      <defs>
                        <radialGradient id="ballShade" cx="30%" cy="30%" r="70%">
                          <stop offset="0%" stopColor="#E6DED0" />
                          <stop offset="60%" stopColor="#C4B9A3" />
                          <stop offset="100%" stopColor="#4A453A" />
                        </radialGradient>
                      </defs>
                      
                      <circle cx="50" cy="50" r="48" fill="url(#ballShade)" stroke="#1A1A1A" strokeWidth="2" />
                      
                      {/* Fine dots (pebble leather texture) simulation using a pattern */}
                      <pattern id="leatherPebbles" width="4" height="4" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="0.6" fill="#1A1A1A" opacity="0.18" />
                      </pattern>
                      <circle cx="50" cy="50" r="48" fill="url(#leatherPebbles)" />

                      {/* Dynamic Seams */}
                      {/* Horizontal curve */}
                      <path d="M5,50 C25,35 75,35 95,50" fill="none" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M5,50 C25,65 75,65 95,50" fill="none" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" />
                      {/* Vertical curve */}
                      <path d="M50,5 C35,25 35,75 50,95" fill="none" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M50,5 C65,25 65,75 50,95" fill="none" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" />
                      
                      {/* Diagonal accent seams for streetball feel */}
                      <path d="M15,15 Q50,50 85,85" fill="none" stroke="#1A1A1A" strokeWidth="1.2" strokeDasharray="1,1" opacity="0.4" />
                    </svg>
                    
                    {/* Interactive Baller Tag floating over ball */}
                    <div className="absolute top-[40%] left-[30%] bg-[#1A1A1A]/95 text-[#FAF9F6] font-mono text-[10px] py-1 px-3 rounded-md shadow-lg border border-white/20 uppercase tracking-widest font-extrabold select-none animate-bounce">
                      Y6B' KYOTO
                    </div>
                  </div>
                </div>

              </div>

              {/* Lower Console Actions & Stats Footer */}
              <div className="border-t border-black/5 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex gap-6">
                  <div>
                    <span className="block text-2xl font-black text-[#1A1A1A] font-mono">1,420+</span>
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-[#5A5954] font-semibold">Active Ballers</span>
                  </div>
                  <div className="border-l border-black/10 pl-6">
                    <span className="block text-2xl font-black text-[#1A1A1A] font-mono">48</span>
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-[#5A5954] font-semibold">Matched Runs Today</span>
                  </div>
                  <div className="border-l border-black/10 pl-6">
                    <span className="block text-2xl font-black text-[#1A1A1A] font-mono">99.8%</span>
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-[#5A5954] font-semibold">Game Security</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#5A5954]">Sponsors:</span>
                  <div className="flex items-center gap-2 opacity-55">
                    <span className="text-[10px] font-black tracking-widest uppercase">Kyo-Loop</span>
                    <span className="text-[10px] font-mono">/</span>
                    <span className="text-[10px] font-black tracking-widest uppercase">Sakai-Grp</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* --- DYNAMIC INTERACTIVE WIDGET SECTION --- */}
        <section className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT AREA: INTERACTIVE TAB PANELS */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Active Tab Header */}
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9C9E82]"></span>
                  <h2 className="text-xl font-bold tracking-tight uppercase font-mono">
                    {activeTab === 'matchup' && "Platform Console / Create Kyoto Runs"}
                    {activeTab === 'courts' && "Kyoto Court Network / Realtime Load"}
                    {activeTab === 'ballers' && "Kyoto Baller Registry / Player Stats"}
                  </h2>
                </div>
                <span className="text-xs font-mono text-[#5A5954] bg-[#E5E1D7] px-3 py-1 rounded-md">
                  TAB_ACTIVE: {activeTab.toUpperCase()}
                </span>
              </div>

              {/* TAB CONTENT 1: CREATE RUN & LOBBY SIMULATOR */}
              {activeTab === 'matchup' && (
                <div className="bg-white/50 backdrop-blur-xl border border-white/80 p-6 rounded-[24px] shadow-sm space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Live Match Form */}
                    <form onSubmit={handleCreateGameSubmit} className="space-y-4">
                      <span className="text-xs font-bold text-[#9C9E82] uppercase tracking-wider block font-mono">✓ Custom Run Configurator</span>
                      
                      <div>
                        <label className="block text-[10px] uppercase font-mono font-bold text-[#5A5954] mb-1">Run Title</label>
                        <input 
                          type="text" 
                          value={customGame.title}
                          onChange={(e) => setCustomGame({...customGame, title: e.target.value})}
                          className="w-full bg-[#FAF9F6] border border-black/10 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#9C9E82] transition-all"
                          placeholder="e.g. Morning Shootaround"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] uppercase font-mono font-bold text-[#5A5954] mb-1">Court Location</label>
                          <select 
                            value={customGame.court}
                            onChange={(e) => setCustomGame({...customGame, court: e.target.value})}
                            className="w-full bg-[#FAF9F6] border border-black/10 rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none"
                          >
                            <option>Sakura Park, Kamigyo</option>
                            <option>Shōten Court, Sakyo</option>
                            <option>Riverside Hoop, Fushimi</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-mono font-bold text-[#5A5954] mb-1">Format Type</label>
                          <select 
                            value={customGame.format}
                            onChange={(e) => setCustomGame({...customGame, format: e.target.value})}
                            className="w-full bg-[#FAF9F6] border border-black/10 rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none"
                          >
                            <option>1v1 Kings</option>
                            <option>3v3 Halfcourt</option>
                            <option>5v5 Fullcourt</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] uppercase font-mono font-bold text-[#5A5954] mb-1">Schedule Time</label>
                          <input 
                            type="text" 
                            value={customGame.time}
                            onChange={(e) => setCustomGame({...customGame, time: e.target.value})}
                            className="w-full bg-[#FAF9F6] border border-black/10 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none"
                            placeholder="e.g. 6:30 PM"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-mono font-bold text-[#5A5954] mb-1">Intensity Level</label>
                          <select 
                            value={customGame.intensity}
                            onChange={(e) => setCustomGame({...customGame, intensity: e.target.value})}
                            className="w-full bg-[#FAF9F6] border border-black/10 rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none"
                          >
                            <option>Casual Chill</option>
                            <option>Intermediate</option>
                            <option>Sweaty / Comp</option>
                          </select>
                        </div>
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-[#1A1A1A] text-[#FAF9F6] hover:bg-[#9C9E82] transition-colors duration-300 py-3 rounded-xl text-xs font-extrabold tracking-widest uppercase shadow-md"
                      >
                        Publish Live Run + Notify Squads
                      </button>
                    </form>

                    {/* Preview Generated Ticket */}
                    <div className="bg-[#FAF9F6] border border-[#E5E1D7] rounded-[20px] p-5 flex flex-col justify-between h-full relative overflow-hidden">
                      <div className="absolute top-[-30px] right-[-30px] w-24 h-24 bg-[#9C9E82]/10 rounded-full blur-2xl"></div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-mono bg-[#EAE4D7] px-2.5 py-1 rounded text-[#5A5954] font-bold">LIVE PREVIEW</span>
                          <span className="text-[#9C9E82] text-xs font-mono font-bold">TICKET NO. 2931</span>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <span className="text-[10px] font-mono uppercase text-[#9C9E82] block">RUN LOBBY</span>
                            <h3 className="text-lg font-black tracking-tight text-[#1A1A1A] uppercase">{customGame.title || "Untitled Saturday Run"}</h3>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-[10px] font-mono uppercase text-[#9C9E82]">COURT</span>
                              <p className="text-xs font-bold text-[#5A5954]">{customGame.court}</p>
                            </div>
                            <div>
                              <span className="text-[10px] font-mono uppercase text-[#9C9E82]">FORMAT</span>
                              <p className="text-xs font-bold text-[#5A5954]">{customGame.format}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-[10px] font-mono uppercase text-[#9C9E82]">TIME</span>
                              <p className="text-xs font-bold text-[#5A5954]">{customGame.time}</p>
                            </div>
                            <div>
                              <span className="text-[10px] font-mono uppercase text-[#9C9E82]">RATING</span>
                              <p className="text-xs font-bold text-[#5A5954]">{customGame.intensity}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-[#E5E1D7] pt-4 mt-6 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          <span className="text-[11px] font-mono text-gray-500 font-bold">LOBBY INITIATED</span>
                        </div>
                        <span className="text-xs font-bold font-mono text-[#9C9E82]">Kyoto Sector</span>
                      </div>
                    </div>

                  </div>

                </div>
              )}

              {/* TAB CONTENT 2: LIVE COURT DIRECTORY MAP WIDGET */}
              {activeTab === 'courts' && (
                <div className="bg-white/50 backdrop-blur-xl border border-white/80 p-6 rounded-[24px] shadow-sm space-y-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="font-bold text-lg text-[#1A1A1A]">Kyoto Street Court Monitor</h3>
                      <p className="text-xs text-[#5A5954]">Real-time queue load and player density ratings across active wards.</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => { setSelectedCity('Kyoto'); triggerToast("Filtered court network to Kyoto City core."); }}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-mono border ${selectedCity === 'Kyoto' ? 'bg-[#1A1A1A] text-white border-black' : 'bg-white/50 border-black/10'}`}
                      >
                        Kyoto Core
                      </button>
                      <button 
                        onClick={() => { setSelectedCity('Shiga'); triggerToast("Filtered court network to Otsu / Shiga area."); }}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-mono border ${selectedCity === 'Shiga' ? 'bg-[#1A1A1A] text-white border-black' : 'bg-white/50 border-black/10'}`}
                      >
                        Lake Otsu
                      </button>
                    </div>
                  </div>

                  {/* Interactive Styled Map Plot Container */}
                  <div className="bg-[#EAE4D7] rounded-2xl h-[280px] relative overflow-hidden border border-[#DCD7CD] flex items-center justify-center">
                    
                    {/* Simulated vector abstract grid representing Kyoto ward mapping */}
                    <div className="absolute inset-0 opacity-20">
                      <svg width="100%" height="100%">
                        <line x1="10%" y1="0%" x2="10%" y2="100%" stroke="currentColor" strokeWidth="2"/>
                        <line x1="40%" y1="0%" x2="40%" y2="100%" stroke="currentColor" strokeWidth="2"/>
                        <line x1="70%" y1="0%" x2="70%" y2="100%" stroke="currentColor" strokeWidth="2"/>
                        <line x1="0%" y1="30%" x2="100%" y2="30%" stroke="currentColor" strokeWidth="2"/>
                        <line x1="0%" y1="70%" x2="100%" y2="70%" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="50%" cy="50%" r="20%" stroke="currentColor" strokeWidth="1" fill="none"/>
                      </svg>
                    </div>

                    {/* Styled Hotspot 1 (Sakura Park / Shōten Court) */}
                    <button 
                      onClick={() => triggerToast("Sakura Park selected: Court status is currently OPTIMAL.")}
                      className="absolute top-[35%] left-[28%] group flex flex-col items-center"
                    >
                      <div className="bg-[#1A1A1A] text-[#FAF9F6] text-[10px] py-1 px-2.5 rounded shadow-lg border border-white/20 font-mono font-bold translate-y-[-4px] group-hover:bg-[#9C9E82] transition-colors">
                        Sakura Park (Active)
                      </div>
                      <span className="w-3.5 h-3.5 rounded-full bg-[#9C9E82] border-2 border-white animate-bounce shadow-md"></span>
                    </button>

                    {/* Styled Hotspot 2 (Kamigyo Bridge Court) */}
                    <button 
                      onClick={() => triggerToast("Kamigyo Bridge Selected: 5 players waiting in queue.")}
                      className="absolute top-[55%] left-[65%] group flex flex-col items-center"
                    >
                      <div className="bg-[#1A1A1A] text-[#FAF9F6] text-[10px] py-1 px-2.5 rounded shadow-lg border border-white/20 font-mono font-bold translate-y-[-4px] group-hover:bg-[#9C9E82] transition-colors">
                        Kamigyo (Filling)
                      </div>
                      <span className="w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-white shadow-md"></span>
                    </button>

                    {/* Styled Hotspot 3 (Fushimi Waterfront Hoop) */}
                    <button 
                      onClick={() => triggerToast("Fushimi Court: Beautiful quiet scenic spot.")}
                      className="absolute top-[20%] right-[15%] group flex flex-col items-center"
                    >
                      <div className="bg-[#1A1A1A] text-[#FAF9F6] text-[10px] py-1 px-2.5 rounded shadow-lg border border-white/20 font-mono font-bold translate-y-[-4px] group-hover:bg-[#9C9E82] transition-colors">
                        Fushimi (Quiet)
                      </div>
                      <span className="w-3.5 h-3.5 rounded-full bg-gray-500 border-2 border-white shadow-md"></span>
                    </button>

                    <span className="absolute bottom-3 left-3 bg-[#1A1A1A]/85 text-white/90 text-[10px] font-mono px-3 py-1 rounded">
                      INTERACTIVE PLOT: CLICK MAP PINS TO EXPEDITE QUEUES
                    </span>
                  </div>

                  {/* List of Court Loadings */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {localCourts.map((court, idx) => (
                      <div key={idx} className="bg-[#FAF9F6] border border-[#E5E1D7] p-4 rounded-xl flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-black text-[#1A1A1A] line-clamp-1">{court.name}</span>
                            <span className={`text-[9px] px-2 py-0.5 rounded font-bold font-mono uppercase ${
                              court.status === 'Active Now' ? 'bg-emerald-100 text-emerald-800' :
                              court.status === 'Filling Up' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {court.status}
                            </span>
                          </div>
                          <span className="text-[10px] text-[#5A5954] font-mono block mb-3">{court.area}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-black/5 text-xs font-mono">
                          <span className="text-gray-500">Active Ballers: <strong className="text-black">{court.ballers}</strong></span>
                          <span className="text-[#9C9E82] font-bold">★ {court.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* TAB CONTENT 3: REGISTRY & STATS CAROUSEL */}
              {activeTab === 'ballers' && (
                <div className="bg-white/50 backdrop-blur-xl border border-white/80 p-6 rounded-[24px] shadow-sm space-y-6">
                  
                  {/* Interactive Stats Panel */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    
                    {/* Left profile overview */}
                    <div className="md:col-span-5 text-center md:text-left space-y-4">
                      <span className="text-xs font-bold text-[#9C9E82] uppercase tracking-widest font-mono block">Featured Street Legend</span>
                      
                      <div className="inline-block relative">
                        <img 
                          src={ballers[activeBallerIndex].avatar} 
                          alt={ballers[activeBallerIndex].name}
                          className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover mx-auto md:mx-0"
                        />
                        <span className="absolute bottom-0 right-0 bg-[#1A1A1A] text-[#FAF9F6] text-[9px] px-2 py-0.5 rounded-full font-bold">
                          {ballers[activeBallerIndex].reputation}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-black text-[#1A1A1A] tracking-tight">{ballers[activeBallerIndex].name}</h3>
                        <p className="text-xs font-mono text-[#9C9E82] uppercase mt-0.5">{ballers[activeBallerIndex].alias} • {ballers[activeBallerIndex].hometown}</p>
                      </div>

                      <div className="bg-[#FAF9F6] p-3 rounded-xl border border-black/5 text-xs">
                        <span className="text-gray-400 block font-mono uppercase text-[9px]">Signature Style</span>
                        <strong className="text-[#1A1A1A] mt-1 block">{ballers[activeBallerIndex].playingStyle}</strong>
                      </div>
                    </div>

                    {/* Right Interactive Stats Bars */}
                    <div className="md:col-span-7 space-y-4">
                      <h4 className="text-xs font-mono font-bold uppercase text-[#5A5954] tracking-wider mb-2">Live Playstyle Metrics</h4>
                      
                      {Object.entries(ballers[activeBallerIndex].stats).map(([statName, val]) => (
                        <div key={statName}>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="font-bold text-[#1A1A1A]">{statName}</span>
                            <span className="text-[#9C9E82] font-black">{val}%</span>
                          </div>
                          <div className="h-2 bg-[#EAE4D7] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#1A1A1A] rounded-full transition-all duration-700" 
                              style={{ width: `${val}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}

                      {/* Action trigger */}
                      <div className="pt-2 flex justify-between items-center gap-3">
                        <button 
                          onClick={() => {
                            setActiveBallerIndex(prev => (prev + 1) % ballers.length);
                            triggerToast("Cycling Kyoto regional baller database.");
                          }}
                          className="text-xs font-bold font-mono text-[#9C9E82] hover:text-[#1A1A1A] flex items-center gap-1.5"
                        >
                          <span>Next Baller Profile</span>
                          <Icons.ChevronRight />
                        </button>
                        
                        <button 
                          onClick={() => triggerToast(`Challenge request sent to ${ballers[activeBallerIndex].name}!`)}
                          className="bg-[#1A1A1A] hover:bg-[#9C9E82] text-white font-mono text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                        >
                          Request Squad Up
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              )}

              {/* LIVE QUEUE FEED & ACTIVITY STREAM */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#5A5954] font-mono">Kyoto Open Run Live Feed</h3>
                  <span className="text-xs text-[#9C9E82] font-mono">3 Runs Active Currently</span>
                </div>

                <div className="space-y-3">
                  <div className="bg-[#FAF9F6]/85 border border-[#E5E1D7] p-4 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-black/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#1A1A1A] text-white p-2.5 rounded-xl text-center">
                        <span className="block text-xs font-bold font-mono uppercase">May</span>
                        <span className="block text-base font-black font-mono leading-none">15</span>
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#9C9E82] uppercase font-bold tracking-wider">LOBBY MATCH #8172</span>
                        <h4 className="font-bold text-sm text-[#1A1A1A]">Saturday Midnight Clash (3v3 Runs)</h4>
                        <p className="text-xs text-[#5A5954] mt-0.5">Shōten Court, Sakyo-ku • Organized by Daisuke T.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#5A5954]">Skill: <strong className="text-black">Any Style</strong></span>
                      <button 
                        onClick={() => triggerToast("Successfully registered interest for Saturday Midnight Clash!")}
                        className="px-4 py-1.5 rounded-lg bg-[#1A1A1A] text-white hover:bg-[#9C9E82] text-xs font-mono transition-colors"
                      >
                        Request Entry
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#FAF9F6]/85 border border-[#E5E1D7] p-4 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-black/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#1A1A1A] text-white p-2.5 rounded-xl text-center">
                        <span className="block text-xs font-bold font-mono uppercase">May</span>
                        <span className="block text-base font-black font-mono leading-none">19</span>
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#9C9E82] uppercase font-bold tracking-wider">LOBBY MATCH #8179</span>
                        <h4 className="font-bold text-sm text-[#1A1A1A]">Fushimi Waterfront Shootout</h4>
                        <p className="text-xs text-[#5A5954] mt-0.5">Waterfront Hoop, Fushimi • Organized by Kazuo S.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#5A5954]">Skill: <strong className="text-black">Competitive</strong></span>
                      <button 
                        onClick={() => triggerToast("Successfully registered interest for Fushimi Waterfront Shootout!")}
                        className="px-4 py-1.5 rounded-lg bg-[#1A1A1A] text-white hover:bg-[#9C9E82] text-xs font-mono transition-colors"
                      >
                        Request Entry
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT SIDEBAR: COMMUNITY HIGHLIGHTS & SQUAD MATCHER */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Squad Status Widget */}
              <div className="bg-white/50 backdrop-blur-xl border border-white/80 rounded-[24px] p-5 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-black/5">
                  <h3 className="font-mono text-xs font-black uppercase tracking-wider text-[#1A1A1A]">My Active Squad</h3>
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img className="w-8 h-8 rounded-full object-cover border border-black/10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Self" />
                    <div>
                      <span className="block text-xs font-bold text-[#1A1A1A]">Kenji Sato (You)</span>
                      <span className="block text-[10px] text-[#9C9E82] font-mono">Kyoto Division • Rank #149</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 opacity-60">
                    <div className="w-8 h-8 rounded-full bg-[#EAE4D7] flex items-center justify-center text-xs font-bold text-gray-400 border border-[#DCD7CD]">?</div>
                    <div>
                      <span className="block text-xs font-bold text-gray-500">Empty Squad Slot</span>
                      <span className="block text-[10px] text-gray-400 font-mono">Invites Pending...</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => triggerToast("Opened Invite panel: Share lobby hash Y6B-KYOTO-449 to invite friends.")}
                  className="w-full text-center py-2.5 bg-[#1A1A1A]/5 hover:bg-[#1A1A1A]/10 transition-colors text-xs font-mono font-bold rounded-xl text-[#1A1A1A] block border border-black/5"
                >
                  + Recruit Local Baller
                </button>
              </div>

              {/* Japanese Streetball Chronicles (Atmospheric content block) */}
              <div className="bg-white/50 backdrop-blur-xl border border-white/80 rounded-[24px] p-5 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#9C9E82]/5 rounded-full blur-xl pointer-events-none"></div>
                
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9C9E82] block">Y6B Kyoto Chronicles</span>
                
                <h4 className="font-extrabold text-base text-[#1A1A1A] tracking-tight">The Heritage of Kyoto Outdoor Basketball</h4>
                
                <p className="text-xs text-[#5A5954] leading-relaxed">
                  Unlike traditional indoor arenas, Kyoto's street scene thrives behind historical parks, old temple grounds, and canal-side courts. Our mission is to balance ancient beauty with modern athletic energy.
                </p>

                <div className="bg-[#FAF9F6] p-3 rounded-xl border border-black/5 space-y-1">
                  <span className="block text-[9px] font-mono text-gray-400 uppercase">Featured Rule</span>
                  <strong className="block text-xs text-[#1A1A1A]">Respect the Shōten Court Silence Window after 10 PM</strong>
                </div>

                <a 
                  href="#heritage" 
                  onClick={(e) => { e.preventDefault(); triggerToast("Exploring Y6B Platform Guidelines..."); }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#9C9E82] hover:text-[#1A1A1A] transition-colors"
                >
                  <span>Learn Platform Guidelines</span>
                  <Icons.ChevronRight />
                </a>
              </div>

              {/* Feedback Corner */}
              <div className="bg-[#FAF9F6]/90 border border-[#E5E1D7] rounded-[24px] p-5 space-y-3">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#9C9E82] block">Platform Soundboard</span>
                <p className="text-xs font-bold text-[#1A1A1A]">"Y6B completely streamlined Gion 3v3 pickups. No more waiting 2 hours in the rain for a run."</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[10px] font-mono text-gray-400">— Tatsuya K., Ward 4 Captain</span>
                  <div className="flex gap-0.5">
                    <Icons.Star />
                    <Icons.Star />
                    <Icons.Star />
                    <Icons.Star />
                    <Icons.Star />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 mt-24 pt-8 border-t border-black/5 text-xs text-gray-500">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-3">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black tracking-tight text-[#1A1A1A] font-mono">Y6B</span>
              <span className="text-[10px] font-bold text-[#9C9E82] uppercase tracking-widest">Kyoto</span>
            </div>
            <p className="text-[#5A5954] leading-relaxed">
              Merging the historical beauty of ancient Kyoto with modern premium street culture matchmaking.
            </p>
          </div>

          <div>
            <span className="block font-mono font-extrabold uppercase text-[#1A1A1A] mb-3">Courts Directory</span>
            <ul className="space-y-1.5 font-mono text-[11px]">
              <li><a href="#sakyo" onClick={(e) => { e.preventDefault(); triggerToast("Loading Sakyo-ku regional roster"); }} className="hover:text-[#1A1A1A]">Sakyo-ku (Gion Sector)</a></li>
              <li><a href="#kamigyo" onClick={(e) => { e.preventDefault(); triggerToast("Loading Kamigyo-ku regional roster"); }} className="hover:text-[#1A1A1A]">Kamigyo-ku (North Bridge)</a></li>
              <li><a href="#fushimi" onClick={(e) => { e.preventDefault(); triggerToast("Loading Fushimi regional roster"); }} className="hover:text-[#1A1A1A]">Fushimi-ku (Canalside)</a></li>
              <li><a href="#shimogyo" onClick={(e) => { e.preventDefault(); triggerToast("Loading Shimogyo regional roster"); }} className="hover:text-[#1A1A1A]">Shimogyo-ku (Core Central)</a></li>
            </ul>
          </div>

          <div>
            <span className="block font-mono font-extrabold uppercase text-[#1A1A1A] mb-3">Community Hub</span>
            <ul className="space-y-1.5 font-mono text-[11px]">
              <li><a href="#crews" onClick={(e) => { e.preventDefault(); triggerToast("Loading Kyoto regional crews list"); }} className="hover:text-[#1A1A1A]">Kyoto Street Crews</a></li>
              <li><a href="#leaderboards" onClick={(e) => { e.preventDefault(); triggerToast("Opening Leaderboards panel"); }} className="hover:text-[#1A1A1A]">Platform Leaderboards</a></li>
              <li><a href="#merch" onClick={(e) => { e.preventDefault(); triggerToast("Opening Y6B Street Apparel shop (Coming Soon)"); }} className="hover:text-[#1A1A1A]">Y6B Official Merchandise</a></li>
              <li><a href="#events" onClick={(e) => { e.preventDefault(); triggerToast("Opening Seasonal Tournaments panel"); }} className="hover:text-[#1A1A1A]">Kyoto Seasonal Tournaments</a></li>
            </ul>
          </div>

          <div>
            <span className="block font-mono font-extrabold uppercase text-[#1A1A1A] mb-3">Platform Integrity</span>
            <ul className="space-y-1.5 font-mono text-[11px]">
              <li><a href="#rules" onClick={(e) => { e.preventDefault(); triggerToast("Displaying Code of Conduct documents"); }} className="hover:text-[#1A1A1A]">Street Code of Conduct</a></li>
              <li><a href="#safety" onClick={(e) => { e.preventDefault(); triggerToast("Displaying safety guide"); }} className="hover:text-[#1A1A1A]">Player Safety Guidelines</a></li>
              <li><a href="#disclaimer" onClick={(e) => { e.preventDefault(); triggerToast("Displaying Legal Disclaimers"); }} className="hover:text-[#1A1A1A]">Liability Waver & Terms</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-black/5 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[10px] text-gray-400">© 2026 Y6B Platform Inc. Kyoto Basin District. All street rights reserved.</span>
          <div className="flex gap-4 font-mono text-[10px]">
            <a href="#privacy" className="hover:text-[#1A1A1A]">Privacy Policy</a>
            <span>/</span>
            <a href="#terms" className="hover:text-[#1A1A1A]">Terms of Matchmaking</a>
          </div>
        </div>
      </footer>

    </div>
  );
}