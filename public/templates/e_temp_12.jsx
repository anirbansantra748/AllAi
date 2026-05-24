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