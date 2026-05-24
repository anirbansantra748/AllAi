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