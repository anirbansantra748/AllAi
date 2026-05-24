import React, { useState, useEffect } from 'react';
import { Search, Bell, Menu, X, ArrowRight, Github, Twitter, Mail, CheckCircle2 } from 'lucide-react';

// --- CUSTOM SVG ASSETS ---
// These SVGs are hand-crafted to match the vibe of the inspiration image

const CircuitBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M10 10 L40 10 L50 20 L50 80 L60 90 L90 90" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="2" fill="white" />
        <circle cx="90" cy="90" r="2" fill="white" />
        <path d="M20 50 L30 40 L70 40 L80 30" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="20" cy="50" r="2" fill="white" />
        <circle cx="80" cy="30" r="2" fill="white" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)" />
  </svg>
);

const AvatarIcon = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full object-cover bg-[#d4d4d4]" xmlns="http://www.w3.org/2000/svg">
    {/* Bear Base */}
    <path d="M 40,120 C 40,60 60,30 100,30 C 140,30 160,60 160,120" fill="#f8f9fa" />
    <circle cx="60" cy="40" r="15" fill="#f8f9fa" />
    <circle cx="140" cy="40" r="15" fill="#f8f9fa" />
    {/* Sunglasses */}
    <path d="M 45,65 Q 100,75 155,65 L 145,95 Q 100,105 55,95 Z" fill="#333" />
    <path d="M 45,65 Q 100,75 155,65" fill="none" stroke="#555" strokeWidth="4" />
    <circle cx="75" cy="80" r="8" fill="#1a1a1a" />
    <circle cx="125" cy="80" r="8" fill="#1a1a1a" />
    {/* Nose/Snout */}
    <ellipse cx="100" cy="105" rx="15" ry="10" fill="#e2e8f0" />
    <ellipse cx="100" cy="102" rx="6" ry="4" fill="#111" />
    {/* Paws */}
    <path d="M 50,110 C 30,110 30,130 50,130 Z" fill="#f8f9fa" />
    <path d="M 150,110 C 170,110 170,130 150,130 Z" fill="#f8f9fa" />
  </svg>
);

const BearStackSVG = () => (
  <svg viewBox="0 0 300 350" className="w-full max-w-[280px] drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
    {/* Bottom Bear (Polar - White) */}
    <g transform="translate(0, 220)">
      <rect x="50" y="20" width="200" height="100" rx="40" fill="#ffffff" stroke="#333" strokeWidth="4"/>
      <circle cx="80" cy="20" r="15" fill="#ffffff" stroke="#333" strokeWidth="4" />
      <circle cx="220" cy="20" r="15" fill="#ffffff" stroke="#333" strokeWidth="4" />
      <ellipse cx="230" cy="60" rx="4" ry="6" fill="#333" />
      <ellipse cx="250" cy="65" rx="8" ry="6" fill="#111" />
      <path d="M 80,110 L 80,140 A 10,10 0 0,0 100,140 L 100,110" fill="#ffffff" stroke="#333" strokeWidth="4" />
      <path d="M 200,110 L 200,140 A 10,10 0 0,0 220,140 L 220,110" fill="#ffffff" stroke="#333" strokeWidth="4" />
      <path d="M 120,110 L 120,130 A 10,10 0 0,0 140,130 L 140,110" fill="#ffffff" stroke="#333" strokeWidth="4" />
    </g>
    
    {/* Middle Bear (Panda - Black/White) */}
    <g transform="translate(10, 130)">
      <rect x="50" y="20" width="180" height="95" rx="40" fill="#ffffff" stroke="#333" strokeWidth="4"/>
      <path d="M 90,20 L 190,20 L 190,115 L 90,115 Z" fill="#333" />
      <circle cx="70" cy="15" r="15" fill="#333" stroke="#333" strokeWidth="4" />
      <circle cx="210" cy="15" r="15" fill="#333" stroke="#333" strokeWidth="4" />
      <circle cx="215" cy="55" r="12" fill="#333" />
      <ellipse cx="215" cy="55" rx="3" ry="5" fill="#fff" />
      <ellipse cx="230" cy="65" rx="6" ry="4" fill="#111" />
      <path d="M 80,100 L 80,130 A 10,10 0 0,0 100,130 L 100,100" fill="#333" stroke="#333" strokeWidth="4" />
      <path d="M 190,100 L 190,130 A 10,10 0 0,0 210,130 L 210,100" fill="#333" stroke="#333" strokeWidth="4" />
    </g>

    {/* Top Bear (Grizzly - Brown/Grey) */}
    <g transform="translate(20, 50)">
      <rect x="50" y="20" width="160" height="85" rx="35" fill="#888888" stroke="#333" strokeWidth="4"/>
      <circle cx="70" cy="15" r="12" fill="#888888" stroke="#333" strokeWidth="4" />
      <circle cx="190" cy="15" r="12" fill="#888888" stroke="#333" strokeWidth="4" />
      <ellipse cx="195" cy="50" rx="3" ry="5" fill="#333" />
      <ellipse cx="210" cy="55" rx="6" ry="4" fill="#111" />
      <path d="M 70,90 L 70,115 A 10,10 0 0,0 90,115 L 90,90" fill="#888888" stroke="#333" strokeWidth="4" />
      <path d="M 170,90 L 170,115 A 10,10 0 0,0 190,115 L 190,90" fill="#888888" stroke="#333" strokeWidth="4" />
    </g>
  </svg>
);


// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('PROFILE');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const navItems = ['ACTIVITY', 'PROFILE', 'WIKI', 'BLOG', 'CONTACTS'];

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#222324] text-white font-sans overflow-x-hidden selection:bg-[#bd404a] selection:text-white relative">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Montserrat:wght@400;600;800&display=swap');
        
        .font-quirky { font-family: 'Fredoka One', cursive; letter-spacing: 1px; }
        .font-body { font-family: 'Montserrat', sans-serif; }
        
        .blob-1 { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        .blob-2 { border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%; }
        
        .clip-slanted { clip-path: polygon(0 8%, 100% 0, 100% 92%, 0 100%); }
        @media (max-width: 768px) {
          .clip-slanted { clip-path: polygon(0 4%, 100% 0, 100% 96%, 0 100%); }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}} />

      {/* Global Background Elements */}
      <CircuitBackground />
      <div className="absolute top-20 right-[-10vw] w-64 h-64 bg-[#bd404a] blob-1 opacity-20 blur-3xl z-0 pointer-events-none"></div>

      {/* --- HEADER --- */}
      <header className="relative z-50 flex justify-between items-center px-6 py-8 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-start cursor-pointer transition-transform hover:scale-105" onClick={() => setCurrentPage('PROFILE')}>
          <h1 className="font-quirky text-[#bd404a] text-5xl md:text-6xl leading-none drop-shadow-md">
            Acti<span className="text-3xl relative top-[-15px] ml-1">#1</span>
          </h1>
          <span className="font-quirky text-[#bd404a] text-3xl ml-8 relative top-[-10px] drop-shadow-md">Vidad</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-2 bg-black/20 p-1.5 rounded-full backdrop-blur-sm border border-white/5">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setCurrentPage(item)}
              className={`px-5 py-2 text-sm font-bold tracking-wider rounded-full transition-all duration-300 ${
                currentPage === item 
                  ? 'bg-[#bd404a] text-white shadow-[0_0_15px_rgba(189,64,74,0.4)]' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white hover:text-[#bd404a] transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-[#222324]/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col justify-center items-center space-y-8`}>
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => {
              setCurrentPage(item);
              setIsMobileMenuOpen(false);
            }}
            className={`text-3xl font-quirky tracking-widest transition-colors ${
              currentPage === item ? 'text-[#bd404a]' : 'text-gray-400 hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* --- PAGE ROUTING --- */}
      <main className="relative z-10 w-full pb-20">
        {currentPage === 'PROFILE' && <ProfileView handleFollow={handleFollow} isFollowing={isFollowing} />}
        {currentPage === 'ACTIVITY' && <ActivityView />}
        {currentPage === 'CONTACTS' && <ContactsView />}
        {(currentPage === 'WIKI' || currentPage === 'BLOG') && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h2 className="font-quirky text-5xl text-[#bd404a] mb-4">COMING SOON</h2>
            <p className="font-body text-xl text-gray-400 max-w-md">
              The {currentPage} module is currently compiling. Check back after the next deployment!
            </p>
          </div>
        )}
      </main>

      {/* --- TOAST NOTIFICATION --- */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#bd404a] text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transition-all duration-300 z-50 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <CheckCircle2 size={18} />
        {isFollowing ? 'Tracking engaged!' : 'Tracking disabled.'}
      </div>
    </div>
  );
}


// ==========================================
// VIEWS (PAGES)
// ==========================================

function ProfileView({ handleFollow, isFollowing }) {
  return (
    <div className="flex flex-col items-center w-full animate-in fade-in duration-500">
      
      {/* 1. HERO SECTION (Dark) */}
      <section className="w-full flex flex-col items-center pt-8 pb-32 px-4 relative">
        <div className="text-center mb-2 tracking-[0.2em] text-xs font-bold text-gray-400">
          TEMPLATE BY CREATOR
        </div>
        
        {/* Avatar Frame Container */}
        <div className="relative group animate-float">
          {/* Outer thick frame */}
          <div className="w-72 h-48 md:w-80 md:h-56 bg-[#bd404a] rounded-[2rem] p-3 shadow-2xl relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
            {/* Inner screen */}
            <div className="w-full h-full bg-[#181818] rounded-2xl overflow-hidden border-4 border-[#222324] relative">
               <AvatarIcon />
               {/* Scanline effect */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0.05))] opacity-50 bg-[length:100%_4px] pointer-events-none"></div>
            </div>
          </div>
          {/* Decorative Crosses */}
          <div className="absolute -right-12 bottom-0 text-[#bd404a]/30 text-5xl font-light select-none rotate-45">+</div>
        </div>

        {/* Name Plate */}
        <div className="bg-[#bd404a] text-white font-quirky text-3xl md:text-4xl py-2 px-12 rounded-full mt-[-20px] relative z-10 shadow-[0_10px_20px_rgba(189,64,74,0.3)]">
          POLAR CODE
        </div>

        {/* Badges */}
        <div className="flex gap-4 mt-8">
          {['INTJ-A', 'FRONTEND', 'LVL 23'].map((tag, i) => (
            <div key={i} className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#bd404a] flex items-center justify-center font-quirky text-sm md:text-base text-gray-200 transition-all duration-300 hover:bg-[#bd404a] hover:text-white cursor-default shadow-lg">
              {tag}
            </div>
          ))}
        </div>
      </section>

      {/* 2. SLANTED CONTENT SECTION (Light Beige) */}
      <section className="w-full bg-[#ebe7dc] text-[#222324] relative clip-slanted -mt-24 pb-32 pt-32 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center justify-between z-20">
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 flex flex-col gap-1.5 opacity-40">
          <div className="w-12 h-1 bg-[#bd404a] rounded-full"></div>
          <div className="w-8 h-1 bg-[#bd404a] rounded-full"></div>
        </div>
        <div className="absolute -left-10 top-1/3 w-32 h-64 bg-[#bd404a] blob-1"></div>
        <div className="absolute -right-16 bottom-1/4 w-48 h-48 bg-[#bd404a] blob-2"></div>

        {/* Text Content */}
        <div className="flex-1 max-w-xl relative z-10 font-body font-bold space-y-12">
          
          <div className="relative">
            <span className="absolute -left-10 md:-left-16 -top-6 text-6xl md:text-8xl font-quirky text-[#bd404a]">1</span>
            <p className="text-sm md:text-base leading-relaxed tracking-wide">
              I CHOSE THIS PERSONA BECAUSE IT REPRESENTS MY COOL, CALM DEMEANOR WHEN DEBUGGING COMPLEX SYSTEMS. PLUS, POLAR IS THE DEFINITION OF SOMEONE CHILL AND CAPABLE AT THE SAME TIME.
            </p>
          </div>

          <div className="relative md:ml-12">
            <span className="absolute -right-8 md:-right-16 -top-6 text-6xl md:text-8xl font-quirky text-[#bd404a]">2</span>
            <p className="text-sm md:text-base leading-relaxed tracking-wide">
              I APPRECIATE CLEAN CODE, ROBUST ARCHITECTURE, AND HOW THIS CHARACTER TAKES CARE OF THEIR TEAM. ALSO, I REALLY ENJOY BREWING THE PERFECT CUP OF COFFEE BEFORE A SPRINT.
            </p>
          </div>

        </div>

        {/* Illustration & Action Area */}
        <div className="flex-1 flex flex-col items-center mt-16 md:mt-0 relative z-10">
          <BearStackSVG />
          
          <div className="mt-8 flex items-center gap-4 bg-white/50 p-4 rounded-3xl backdrop-blur-sm border border-[#bd404a]/20 shadow-lg">
            <button 
              onClick={handleFollow}
              className={`font-quirky px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                isFollowing 
                ? 'bg-gray-800 text-white shadow-inner' 
                : 'bg-[#bd404a] text-white hover:bg-[#a0313c] hover:shadow-[0_4px_15px_rgba(189,64,74,0.5)]'
              }`}
            >
              {isFollowing ? 'TRACKING' : 'FOLLOW'}
            </button>
            <div className="flex flex-col">
              <span className="font-quirky text-xl text-[#bd404a] leading-none">POLAR</span>
              <span className="text-xs font-bold text-gray-500">@SATURNO_DEV</span>
            </div>
            <Bell className={`w-6 h-6 ml-2 cursor-pointer transition-colors ${isFollowing ? 'text-[#bd404a]' : 'text-gray-400 hover:text-[#bd404a]'}`} />
          </div>
        </div>

      </section>

      {/* 3. BOTTOM SECTION (Dark) */}
      <section className="w-full bg-[#181818] pt-32 pb-24 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row justify-between relative -mt-16 z-10">
        
        {/* Search Icon */}
        <div className="absolute top-24 left-10 md:left-20">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-[#bd404a] transition-colors group">
            <Search className="text-gray-400 group-hover:text-white" size={20} />
          </div>
        </div>

        <div className="flex-1 mt-12 md:mt-0 relative">
           <span className="absolute left-0 -top-16 text-6xl md:text-8xl font-quirky text-[#bd404a] opacity-50">3</span>
           <p className="font-body font-bold text-sm md:text-lg tracking-wider text-gray-200 mt-8 max-w-sm">
             YEP, I FEEL COMPLETELY IDENTIFIED WITH THIS DEVELOPMENT PERSONA.
           </p>
           <h3 className="font-quirky text-5xl text-[#bd404a] mt-8 opacity-80">POLAR</h3>
        </div>

        <div className="flex-1 mt-16 md:mt-0 relative">
          <ul className="font-body font-bold text-sm md:text-base text-gray-300 space-y-4 tracking-wide relative z-10">
            <li className="flex items-start"><span className="text-[#bd404a] mr-2">1.</span> SILENT BUT DEADLY CODER.</li>
            <li className="flex items-start"><span className="text-[#bd404a] mr-2">2.</span> FIERCELY PROTECTIVE OF REPO ARCHITECTURE.</li>
            <li className="flex items-start"><span className="text-[#bd404a] mr-2">3.</span> WILL NOT FORGIVE THOSE WHO PUSH TO MAIN WITHOUT REVIEW.</li>
          </ul>
          <span className="absolute right-0 bottom-0 text-6xl md:text-8xl font-quirky text-[#bd404a] opacity-50">4</span>
        </div>

        {/* Footer Credit */}
        <div className="absolute bottom-6 w-full text-center left-0 text-xs font-bold tracking-widest text-gray-600">
          PORTFOLIO _ DESIGN BY PERSONA TEMPLATES
        </div>
      </section>
    </div>
  );
}

// --- ACTIVITY PAGE ---
function ActivityView() {
  const activities = [
    { title: "Deployed V2 Core Architecture", time: "2 hours ago", type: "code", desc: "Refactored the main state engine to improve render times by 40%." },
    { title: "Design System Update", time: "Yesterday", type: "design", desc: "Added new blob variations and unified the red accent color scale." },
    { title: "Reached Level 23", time: "3 days ago", type: "milestone", desc: "Another year of surviving production bugs and drinking excessive coffee." },
  ];

  return (
    <div className="max-w-4xl mx-auto pt-12 px-6 animate-in slide-in-from-bottom-8 duration-500">
      <h2 className="font-quirky text-5xl text-[#bd404a] mb-12 flex items-center gap-4">
        RECENT ACTIVITY <span className="text-xl bg-[#bd404a] text-white px-3 py-1 rounded-full">3</span>
      </h2>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#bd404a] before:to-transparent">
        {activities.map((act, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#222324] bg-[#bd404a] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-125">
               {act.type === 'code' ? <Terminal size={16} /> : act.type === 'design' ? <Search size={16} /> : <CheckCircle2 size={16} />}
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#181818] p-6 rounded-2xl border border-white/5 hover:border-[#bd404a]/50 transition-colors shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-quirky text-xl text-white">{act.title}</h3>
                <span className="text-xs font-bold text-[#bd404a]">{act.time}</span>
              </div>
              <p className="font-body text-gray-400 text-sm leading-relaxed">{act.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- CONTACTS PAGE ---
function ContactsView() {
  return (
    <div className="max-w-6xl mx-auto pt-12 px-6 animate-in slide-in-from-right-8 duration-500 pb-20">
      <div className="flex flex-col md:flex-row gap-12 bg-[#181818] rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
        {/* BG Accent */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#bd404a] rounded-full blur-[100px] opacity-20"></div>

        {/* Left Col */}
        <div className="flex-1 space-y-8 z-10">
          <div>
             <h2 className="font-quirky text-5xl md:text-6xl text-white mb-4">LET'S<br/><span className="text-[#bd404a]">CONNECT</span></h2>
             <p className="font-body text-gray-400 max-w-sm">Ready to build something awesome? Drop a message in the terminal below.</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer w-max">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#bd404a]">
                <Github size={20} />
              </div>
              <span className="font-bold font-body">github.com/polarcode</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer w-max">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#bd404a]">
                <Twitter size={20} />
              </div>
              <span className="font-bold font-body">@saturno_dev</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer w-max">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#bd404a]">
                <Mail size={20} />
              </div>
              <span className="font-bold font-body">ping@polar.dev</span>
            </div>
          </div>
        </div>

        {/* Right Col - Form */}
        <div className="flex-1 z-10">
          <form className="space-y-6 bg-[#222324] p-8 rounded-3xl border border-white/5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="font-quirky text-sm text-gray-400 tracking-wider">HANDLE / NAME</label>
              <input type="text" className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#bd404a] transition-colors font-body" placeholder="e.g. Neo" />
            </div>
            <div className="space-y-2">
              <label className="font-quirky text-sm text-gray-400 tracking-wider">COMMLINK / EMAIL</label>
              <input type="email" className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#bd404a] transition-colors font-body" placeholder="neo@matrix.net" />
            </div>
            <div className="space-y-2">
              <label className="font-quirky text-sm text-gray-400 tracking-wider">TRANSMISSION</label>
              <textarea rows="4" className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#bd404a] transition-colors font-body resize-none" placeholder="What's your project?"></textarea>
            </div>
            <button className="w-full bg-[#bd404a] text-white font-quirky py-4 rounded-xl hover:bg-[#a0313c] transition-colors flex items-center justify-center gap-2">
              SEND DATA <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
9