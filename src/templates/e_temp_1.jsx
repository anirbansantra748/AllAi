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