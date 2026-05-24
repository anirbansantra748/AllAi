import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  ArrowRight, 
  Layers, 
  Compass, 
  MousePointer, 
  Grid, 
  Check, 
  Sliders, 
  Layout, 
  Image as ImageIcon, 
  Feather, 
  Github, 
  Twitter, 
  Instagram, 
  ChevronLeft, 
  ChevronRight,
  Monitor,
  Heart,
  User,
  Star
} from 'lucide-react';

export default function App() {
  // Navigation active state
  const [activeTab, setActiveTab] = useState('home');
  
  // Hero section active layout variation corresponding to the 4 wireframes
  const [activeLayout, setActiveLayout] = useState(1);
  
  // Design Sandbox state
  const [sandboxRadius, setSandboxRadius] = useState('3xl'); // xl, 2xl, 3xl, full
  const [sandboxColor, setSandboxColor] = useState('sage-light'); // sage-light, sage-medium, mint-pale
  const [sandboxCardText, setSandboxCardText] = useState('Uplucko Studio');
  const [sandboxShadow, setSandboxShadow] = useState('shadow-sm');
  
  // Live Portfolio category
  const [portfolioCategory, setPortfolioCategory] = useState('all');

  // Testimonial Carousel state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Likes Counter just for fun/interactivity
  const [likes, setLikes] = useState(148);
  const [isLiked, setIsLiked] = useState(false);

  // Success message state for contact form
  const [contactSuccess, setContactSuccess] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const layoutsInfo = [
    { id: 1, name: "Classic Split", desc: "Dual image pillars with double-lined pill CTA and minimal horizontal sub-badges." },
    { id: 2, name: "Arched Minimalist", desc: "Arched frame backdrop, float-over badge mockup, and pill progressive bar indicator." },
    { id: 3, name: "Floating Focus", desc: "Offset text stack, single prominent frame, floating detailed stats card, and custom cursor pointer tag." },
    { id: 4, name: "Grid Balance", desc: "Clean dual-pill layout, large base thumbnail frame, floating action items, and inline social circle indicators." }
  ];

  const portfolioItems = [
    { id: 1, title: "Flora Branding", cat: "branding", desc: "Organic cosmetics visual system", img: "🌿" },
    { id: 2, title: "Lumina Workspace", cat: "uiux", desc: "Next-gen productivity interface", img: "💻" },
    { id: 3, title: "Verde Architecture", cat: "spatial", desc: "Minimalist eco-dwellings", img: "🏡" },
    { id: 4, title: "Arise Editorial", cat: "branding", desc: "Typography-forward design journal", img: "📖" },
    { id: 5, title: "Sage E-Commerce", cat: "uiux", desc: "Seamless plant shopping experience", img: "🛒" },
    { id: 6, title: "Aura Creative Agency", cat: "spatial", desc: "Immersive community design center", img: "✨" }
  ];

  const testimonials = [
    {
      name: "Evelyn Sterling",
      role: "Creative Director, Bloom Co.",
      quote: "Uplucko completely redefined our digital aura. The color palette alone brought an element of calm premium luxury that our customers mention daily.",
      rating: 5
    },
    {
      name: "Marcus Thorne",
      role: "Founder, Earthly Tech",
      quote: "Working with this level of design consistency is rare. Every single asset, from high-level layouts to small form buttons, breathes premium quality.",
      rating: 5
    },
    {
      name: "Selena Takahashi",
      role: "VP of Product, Nook",
      quote: "They managed to construct a visual system that is both incredibly warm and strictly professional. Absolutely recommended for design-forward firms.",
      rating: 5
    }
  ];

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setContactSuccess(true);
      setTimeout(() => setContactSuccess(false), 4000);
      setEmailInput('');
    }
  };

  return (
    <div className="min-h-screen bg-[#f4faf7] text-[#2d4d40] font-sans antialiased selection:bg-[#c1e3d6] selection:text-[#2d4d40]">
      
      {/* Premium Notification Ribbon */}
      <div className="bg-[#e3f2ec] border-b border-[#d0ebd9]/60 text-center py-2 px-4 text-xs tracking-wider uppercase font-semibold text-[#3b6051] flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#3b6051]" />
        <span>Experience the Uplucko Design System. Toggle layouts live!</span>
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#3b6051]" />
      </div>

      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-[#f4faf7]/85 backdrop-blur-md border-b border-[#d0ebd9]/40 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo - Styled identically to the inspiration */}
          <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-9 h-9 rounded-xl bg-[#2d4d40] flex items-center justify-center text-white transition-transform group-hover:scale-105 duration-300">
              {/* Custom Uplucko Organic Crown Icon */}
              <svg viewBox="0 0 24 24" fill="none" className="w-5.5 h-5.5 text-[#e3f2ec]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3c.132 0 .263 0 .393.007a3 3 0 0 1 2.6 2.6c.014.26.014.524 0 .785a3 3 0 0 1-2.6 2.6C12.263 9 12.132 9 12 9a3 3 0 0 1-3-3c0-1.66 1.34-3 3-3Z" />
                <path d="M5 10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 4.418-4 8-7 11-3-3-7-6.582-7-11Z" />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-[#2d4d40]">Uplucko</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 bg-[#e3f2ec]/60 px-6 py-2 rounded-full border border-[#d0ebd9]/50">
            {['home', 'portfolio', 'sandbox', 'testimonials', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-sm font-semibold tracking-wide capitalize transition-all relative py-1 ${
                  activeTab === tab ? 'text-[#2d4d40]' : 'text-[#3b6051]/75 hover:text-[#2d4d40]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2d4d40]" />
                )}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-sm font-bold text-[#3b6051] hover:text-[#2d4d40] transition-colors hidden sm:inline-block">
              Log In
            </button>
            <button className="bg-[#2d4d40] text-white hover:bg-[#3b6051] px-5 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all hover:scale-[1.03] active:scale-95 flex items-center gap-1.5">
              <span>Sign Up</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c1e3d6]" />
            </button>
          </div>

        </div>
      </header>

      {/* Hero Layout Showcase Wrapper */}
      <section id="home" className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        
        {/* Visual Identity Selector Controls */}
        <div className="mb-12 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e3f2ec] text-[#3b6051] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Visual System Switcher</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#2d4d40] tracking-tight leading-tight">
            One Brand. <span className="text-[#3b6051] italic font-serif">Infinite</span> Layout Balance.
          </h1>
          <p className="mt-4 text-[#3b6051]/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Toggle through the four signature design layouts recreated directly from Uplucko's aesthetics. Observe how the same premium color system, rounded containers, and spatial rhythm adapt.
          </p>

          {/* Layout Selector Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[1, 2, 3, 4].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveLayout(idx)}
                className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2.5 border ${
                  activeLayout === idx 
                    ? 'bg-[#2d4d40] text-white border-[#2d4d40] shadow-md scale-105' 
                    : 'bg-white hover:bg-[#e3f2ec] text-[#3b6051] border-[#d0ebd9] shadow-sm'
                }`}
              >
                <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] ${
                  activeLayout === idx ? 'bg-[#c1e3d6] text-[#2d4d40]' : 'bg-[#e3f2ec] text-[#3b6051]'
                }`}>
                  {idx}
                </span>
                <span className="hidden sm:inline">Layout Variation {idx}</span>
                <span className="sm:hidden">Variation {idx}</span>
              </button>
            ))}
          </div>

          <p className="text-xs text-[#3b6051]/75 mt-3 italic flex items-center justify-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3b6051] animate-ping" />
            Current Showcase: <strong className="font-semibold text-[#2d4d40]">{layoutsInfo[activeLayout - 1].name}</strong> — {layoutsInfo[activeLayout - 1].desc}
          </p>
        </div>

        {/* --- DYNAMIC HERO PREVIEW SPACE --- */}
        <div className="relative bg-white rounded-[2.5rem] border border-[#d0ebd9]/70 shadow-lg shadow-[#2d4d40]/5 overflow-hidden p-6 md:p-12 min-h-[500px] flex items-center justify-center transition-all duration-500">
          
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#d8ebe4_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

          {/* Absolute decorative backdrops */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#e3f2ec]/40 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-80 h-80 rounded-full bg-[#c1e3d6]/30 blur-3xl pointer-events-none" />

          {/* LAYOUT 1 VIEW */}
          {activeLayout === 1 && (
            <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-6 space-y-6">
                <div className="h-4.5 w-40 bg-[#c1e3d6] rounded-full opacity-90 animate-pulse" />
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#2d4d40] leading-[1.1]">
                  Design that <br />
                  <span className="text-[#3b6051] font-serif italic">cultivates</span> trust.
                </h2>
                <div className="h-4.5 w-[90%] bg-[#e3f2ec] rounded-full" />
                <div className="h-4.5 w-[75%] bg-[#e3f2ec] rounded-full" />
                
                {/* Large pill rounded outline & fill button shown in layout 1 */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button className="px-8 py-3.5 rounded-full bg-[#2d4d40] text-white hover:bg-[#3b6051] transition-all font-bold text-sm tracking-wide flex items-center gap-2 group shadow-md shadow-[#2d4d40]/10">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button className="px-8 py-3.2 rounded-full border-2 border-[#2d4d40] text-[#2d4d40] hover:bg-[#e3f2ec]/50 transition-all font-bold text-sm tracking-wide">
                    Our Philosophy
                  </button>
                </div>

                {/* Sub info tabs at bottom left in layout 1 */}
                <div className="pt-6 grid grid-cols-2 gap-4 border-t border-[#d0ebd9]/60">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#c1e3d6]" />
                    <span className="text-xs font-bold text-[#3b6051] uppercase tracking-wider">98% Success</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2d4d40]" />
                    <span className="text-xs font-bold text-[#3b6051] uppercase tracking-wider">Premium Dev</span>
                  </div>
                </div>
              </div>

              {/* Right Column Frame Images (Split dual pillars from image top) */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-6">
                {/* Pillar 1 */}
                <div className="bg-[#e3f2ec] aspect-[3/4] rounded-[2.2rem] p-6 flex flex-col justify-between border border-[#c1e3d6] hover:scale-[1.03] transition-transform duration-300 shadow-sm relative group overflow-hidden">
                  <div className="absolute inset-0 bg-[#c1e3d6]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-10 h-10 rounded-full bg-[#c1e3d6] flex items-center justify-center text-[#2d4d40] font-bold">
                    01
                  </div>
                  <div className="flex flex-col items-center justify-center my-auto py-6">
                    <div className="w-16 h-16 rounded-full bg-white/80 border border-[#c1e3d6] flex items-center justify-center text-3xl shadow-sm mb-4">
                      🌿
                    </div>
                    <span className="text-xs font-extrabold text-[#3b6051] uppercase tracking-wider">Organic Touch</span>
                  </div>
                  <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-[#2d4d40]" />
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="bg-[#e3f2ec]/60 aspect-[3/4] rounded-[2.2rem] p-6 flex flex-col justify-between border border-[#c1e3d6] hover:scale-[1.03] transition-transform duration-300 shadow-sm relative group overflow-hidden">
                  <div className="absolute inset-0 bg-[#c1e3d6]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-10 h-10 rounded-full bg-[#c1e3d6]/70 flex items-center justify-center text-[#2d4d40] font-bold">
                    02
                  </div>
                  <div className="flex flex-col items-center justify-center my-auto py-6">
                    <div className="w-16 h-16 rounded-full bg-white/80 border border-[#c1e3d6] flex items-center justify-center text-3xl shadow-sm mb-4">
                      ✨
                    </div>
                    <span className="text-xs font-extrabold text-[#3b6051] uppercase tracking-wider">Premium Glow</span>
                  </div>
                  <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-[#2d4d40]" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* LAYOUT 2 VIEW */}
          {activeLayout === 2 && (
            <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-6 space-y-6">
                <span className="inline-block px-4 py-1.5 rounded-full border border-[#2d4d40] text-[#2d4d40] text-xs font-bold tracking-widest uppercase">
                  Layout Style 02 — High Arch
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#2d4d40] leading-[1.1]">
                  Space & rhythm, <br />
                  <span className="text-[#3b6051] font-serif italic">uncompromised</span>.
                </h2>
                
                <div className="space-y-3">
                  <div className="h-4.5 w-full bg-[#e3f2ec] rounded-full" />
                  <div className="h-4.5 w-5/6 bg-[#e3f2ec] rounded-full" />
                  <div className="h-4.5 w-2/3 bg-[#e3f2ec] rounded-full" />
                </div>

                {/* Progressive Bar styled exactly like inspiration layout 2 bottom bar */}
                <div className="bg-[#e3f2ec] p-4.5 rounded-2xl border border-[#c1e3d6]/70 max-w-md">
                  <div className="flex justify-between text-xs font-bold text-[#3b6051] mb-2">
                    <span>DESIGN RHYTHM INTEGRITY</span>
                    <span>88% CAPTURED</span>
                  </div>
                  <div className="w-full h-4 bg-white rounded-full p-0.5 overflow-hidden">
                    <div className="h-full bg-[#2d4d40] rounded-full" style={{ width: '88%' }} />
                  </div>
                </div>
              </div>

              {/* Right Column Arched Illustration with Floating Mockups (as shown in wireframe 2) */}
              <div className="lg:col-span-6 flex items-center justify-center relative py-6">
                
                {/* Large elegant arch template backdrop from wireframe 2 */}
                <div className="w-72 sm:w-80 h-96 bg-[#e3f2ec]/55 rounded-t-[10rem] rounded-b-3xl border border-[#c1e3d6] relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#c1e3d6]/30" />
                  
                  {/* Custom Minimalist organic illustration vector (SVG placeholder) */}
                  <div className="relative text-center z-10 p-6">
                    <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4 border border-[#c1e3d6]">
                      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#3b6051]" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" />
                        <line x1="15" y1="9" x2="15.01" y2="9" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#2d4d40]">Uplucko Core</span>
                    <p className="text-[10px] text-[#3b6051] mt-1 max-w-[150px]">Perfect balance of form and function</p>
                  </div>
                </div>

                {/* Floating item card overlaps the arch perfectly - direct from frame 2 */}
                <div className="absolute bottom-10 left-4 sm:left-12 bg-white rounded-2xl p-4.5 border border-[#c1e3d6] shadow-lg max-w-[180px] hover:translate-y-[-5px] transition-all">
                  <div className="w-7 h-4 bg-[#2d4d40] rounded-full mb-2.5" />
                  <div className="w-20 h-2 bg-[#e3f2ec] rounded-full mb-2" />
                  <div className="w-24 h-2 bg-[#e3f2ec] rounded-full mb-2" />
                  <div className="w-14 h-2 bg-[#e3f2ec] rounded-full" />
                </div>

              </div>
            </div>
          )}

          {/* LAYOUT 3 VIEW */}
          {activeLayout === 3 && (
            <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#2d4d40]" />
                  <span className="h-3 w-3 rounded-full bg-[#c1e3d6]" />
                  <span className="h-3 w-3 rounded-full bg-[#e3f2ec]" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#2d4d40] leading-[1.1]">
                  Aesthetic harmony <br />
                  meets <span className="text-[#3b6051] font-serif italic">precision</span> code.
                </h2>

                <div className="space-y-3">
                  <div className="h-4.5 w-11/12 bg-[#e3f2ec] rounded-full" />
                  <div className="h-4.5 w-5/6 bg-[#e3f2ec] rounded-full" />
                  <div className="h-4.5 w-4/5 bg-[#e3f2ec] rounded-full" />
                </div>

                <div className="pt-2">
                  <button className="px-7 py-3 rounded-full border-2 border-[#2d4d40] text-[#2d4d40] font-bold text-xs uppercase tracking-wider hover:bg-[#2d4d40] hover:text-white transition-all">
                    Initiate Build
                  </button>
                </div>
              </div>

              {/* Right Column Single Large Frame and Overlap Mini Info (as shown in wireframe 3) */}
              <div className="lg:col-span-6 flex items-center justify-center relative py-6">
                {/* Large Frame */}
                <div className="w-80 h-80 bg-[#e3f2ec]/65 rounded-3xl border border-[#c1e3d6] p-6 flex flex-col justify-between relative shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-[#3b6051]">SYSTEM STATUS</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  
                  {/* Placeholder landscape mountain icon graphic from wireframe */}
                  <div className="flex justify-center items-center my-auto py-8 text-5xl">
                    🌿
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#3b6051] font-bold">UPLUCKO MODULE</span>
                    <span className="text-[#2d4d40] font-extrabold">V.3.01</span>
                  </div>
                </div>

                {/* Floating Detail Card over right edge - Wireframe 3 */}
                <div className="absolute top-1/4 -right-4 bg-white rounded-2xl p-4.5 border border-[#c1e3d6] shadow-lg max-w-[200px] hover:scale-105 transition-all">
                  <div className="w-8 h-4.5 bg-[#c1e3d6] rounded-full mb-2.5" />
                  <div className="space-y-2">
                    <div className="w-28 h-2 bg-[#2d4d40] rounded-full" />
                    <div className="w-20 h-2 bg-[#e3f2ec] rounded-full" />
                    <div className="w-24 h-2 bg-[#e3f2ec] rounded-full" />
                  </div>
                </div>

                {/* Custom Cursor Pointing Tag - directly recreates the circular pointer visual */}
                <div className="absolute -bottom-2 left-6 bg-[#2d4d40] text-white py-2 px-4.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-md">
                  <MousePointer className="w-3.5 h-3.5 rotate-90 text-[#c1e3d6]" />
                  <span>Interactive Flow</span>
                </div>
              </div>
            </div>
          )}

          {/* LAYOUT 4 VIEW */}
          {activeLayout === 4 && (
            <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#2d4d40] leading-[1.1]">
                  Balanced grids <br />
                  for <span className="text-[#3b6051] font-serif italic">agile</span> creators.
                </h2>
                
                <div className="space-y-3">
                  <div className="h-4.5 w-11/12 bg-[#e3f2ec] rounded-full" />
                  <div className="h-4.5 w-[95%] bg-[#e3f2ec] rounded-full" />
                </div>

                {/* Double Pill Buttons - direct representation from Layout 4 */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button className="px-7 py-3 rounded-full bg-[#2d4d40] text-white hover:bg-[#3b6051] transition-all font-bold text-xs uppercase tracking-wider shadow-sm">
                    Deploy Layout
                  </button>
                  <button className="px-7 py-3 rounded-full border border-[#2d4d40] text-[#2d4d40] hover:bg-[#e3f2ec]/60 transition-all font-bold text-xs uppercase tracking-wider">
                    Learn Grid
                  </button>
                </div>

                {/* Social Circle / Network integration list at bottom of Layout 4 */}
                <div className="pt-6 border-t border-[#d0ebd9]/60 flex items-center gap-4">
                  <div className="flex -space-x-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#c1e3d6] border-2 border-white flex items-center justify-center text-xs font-bold">1</div>
                    <div className="w-9 h-9 rounded-full bg-[#e3f2ec] border-2 border-white flex items-center justify-center text-xs font-bold">2</div>
                    <div className="w-9 h-9 rounded-full bg-[#2d4d40] border-2 border-white text-[#c1e3d6] flex items-center justify-center text-xs font-bold">3</div>
                  </div>
                  <span className="text-xs font-extrabold text-[#3b6051] tracking-wider uppercase">Trusted by 450+ Teams</span>
                </div>
              </div>

              {/* Right Column Single Base Frame + Bottom Overlap Module */}
              <div className="lg:col-span-6 flex items-center justify-center relative py-6">
                
                {/* Large Base Frame */}
                <div className="w-80 h-80 bg-[#e3f2ec]/60 rounded-3xl border border-[#c1e3d6] p-6 relative flex flex-col justify-between overflow-hidden shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold tracking-wider text-[#3b6051]">GRID SYSTEM</span>
                    <span className="px-2 py-0.5 bg-white text-[10px] font-bold text-[#2d4d40] rounded border border-[#c1e3d6]">LIVE</span>
                  </div>

                  <div className="flex items-center justify-center text-5xl">
                    📐
                  </div>

                  <div className="w-full h-1 bg-white/50 rounded-full" />
                </div>

                {/* Bottom Overlap Module - Recreating layout 4 style */}
                <div className="absolute -bottom-4 right-2 sm:right-10 bg-white rounded-2xl p-4 border border-[#c1e3d6] shadow-lg min-w-[210px] hover:translate-y-[-4px] transition-all">
                  <div className="w-16 h-3.5 bg-[#c1e3d6]/70 rounded-full mb-3" />
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-[#2d4d40] rounded-full" />
                    <div className="w-4/5 h-2 bg-[#e3f2ec] rounded-full" />
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </section>

      {/* Brand Identity Statistics Section */}
      <section className="bg-[#e3f2ec]/75 py-12 border-y border-[#d0ebd9]/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="space-y-2 hover:scale-105 transition-transform">
            <h3 className="text-3xl md:text-4xl font-black text-[#2d4d40]">99.8%</h3>
            <p className="text-xs md:text-sm font-bold tracking-wider text-[#3b6051]/80 uppercase">Visual Accuracy</p>
          </div>

          <div className="space-y-2 hover:scale-105 transition-transform">
            <h3 className="text-3xl md:text-4xl font-black text-[#2d4d40]">4+</h3>
            <p className="text-xs md:text-sm font-bold tracking-wider text-[#3b6051]/80 uppercase">Theme Presets</p>
          </div>

          <div className="space-y-2 hover:scale-105 transition-transform">
            <h3 className="text-3xl md:text-4xl font-black text-[#2d4d40]">24ms</h3>
            <p className="text-xs md:text-sm font-bold tracking-wider text-[#3b6051]/80 uppercase">Interaction Lag</p>
          </div>

          <div className="space-y-2 hover:scale-105 transition-transform">
            <div className="flex items-center justify-center gap-1.5 cursor-pointer" onClick={handleLike}>
              <h3 className="text-3xl md:text-4xl font-black text-[#2d4d40]">{likes}</h3>
              <Heart className={`w-6 h-6 transition-all duration-300 ${isLiked ? 'fill-red-500 stroke-red-500 scale-125' : 'text-[#2d4d40] hover:text-[#3b6051]'}`} />
            </div>
            <p className="text-xs md:text-sm font-bold tracking-wider text-[#3b6051]/80 uppercase">Studio Appreciation</p>
          </div>

        </div>
      </section>

      {/* Brand Design Features Showcase */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3b6051] bg-[#e3f2ec] px-4 py-1.5 rounded-full">
            Engineering Harmony
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d4d40] mt-4 tracking-tight">
            Designed for those who crave spatial clarity
          </h2>
          <p className="text-sm md:text-base text-[#3b6051]/80 mt-3 leading-relaxed">
            The Uplucko methodology balances raw CSS precision with warm, inviting natural aesthetics. Here is how we build layouts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[2rem] p-8 border border-[#d0ebd9]/60 hover:shadow-md hover:border-[#a8d3be] transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e3f2ec] flex items-center justify-center text-[#2d4d40] font-bold text-xl group-hover:scale-110 transition-transform">
                🎨
              </div>
              <h3 className="text-xl font-extrabold text-[#2d4d40]">Sophisticated Sage Palette</h3>
              <p className="text-sm text-[#3b6051]/80 leading-relaxed">
                Carefully mapped shade distributions designed to lower visual strain. Off-white foundations paired with deep forest contours and lively mint accents.
              </p>
            </div>
            <div className="pt-6 border-t border-[#e3f2ec] mt-6 flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#3b6051]/60 uppercase tracking-widest">01 / BRAND SOUL</span>
              <div className="w-6 h-6 rounded-full bg-[#2d4d40]/10 flex items-center justify-center text-xs text-[#2d4d40]">✓</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[2rem] p-8 border border-[#d0ebd9]/60 hover:shadow-md hover:border-[#a8d3be] transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e3f2ec] flex items-center justify-center text-[#2d4d40] font-bold text-xl group-hover:scale-110 transition-transform">
                📐
              </div>
              <h3 className="text-xl font-extrabold text-[#2d4d40]">Adaptive Fluid Grid Geometry</h3>
              <p className="text-sm text-[#3b6051]/80 leading-relaxed">
                A rigid internal design layout grid mapped beneath rounded pill interfaces. Our grids scale beautifully across both mobile touch screens and widescreen monitors.
              </p>
            </div>
            <div className="pt-6 border-t border-[#e3f2ec] mt-6 flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#3b6051]/60 uppercase tracking-widest">02 / PILL LOGIC</span>
              <div className="w-6 h-6 rounded-full bg-[#2d4d40]/10 flex items-center justify-center text-xs text-[#2d4d40]">✓</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[2rem] p-8 border border-[#d0ebd9]/60 hover:shadow-md hover:border-[#a8d3be] transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e3f2ec] flex items-center justify-center text-[#2d4d40] font-bold text-xl group-hover:scale-110 transition-transform">
                ✨
              </div>
              <h3 className="text-xl font-extrabold text-[#2d4d40]">Interactive Fluidity</h3>
              <p className="text-sm text-[#3b6051]/80 leading-relaxed">
                A highly refined movement signature. Buttons depress slightly when clicked, list items breathe on hover, and custom cards drift gracefully.
              </p>
            </div>
            <div className="pt-6 border-t border-[#e3f2ec] mt-6 flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#3b6051]/60 uppercase tracking-widest">03 / MOTION PATH</span>
              <div className="w-6 h-6 rounded-full bg-[#2d4d40]/10 flex items-center justify-center text-xs text-[#2d4d40]">✓</div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Uplucko Design Sandbox / Card Customizer */}
      <section id="sandbox" className="py-20 bg-[#e3f2ec]/40 border-y border-[#d0ebd9]/50 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Sandbox Settings Left */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e3f2ec] text-[#3b6051] text-xs font-bold tracking-widest uppercase shadow-sm">
                <Sliders className="w-3.5 h-3.5" />
                <span>Live Design Sandbox</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#2d4d40]">
                Sculpt your own custom layout block.
              </h2>
              <p className="text-sm text-[#3b6051]/90 leading-relaxed">
                Adjust variables and watch how the Uplucko design guidelines render them instantly. Experience the structural consistency of our container system firsthand!
              </p>

              {/* Setting Groups */}
              <div className="space-y-4 pt-4">
                {/* 1. Corner Radius Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3b6051] mb-2">
                    Corner Radius: <span className="text-[#2d4d40] font-black">{sandboxRadius === 'full' ? 'Extreme Pill' : `rounded-${sandboxRadius}`}</span>
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['lg', 'xl', '3xl', 'full'].map((rad) => (
                      <button
                        key={rad}
                        onClick={() => setSandboxRadius(rad)}
                        className={`py-2 text-xs font-bold rounded-lg border transition-all uppercase ${
                          sandboxRadius === rad 
                            ? 'bg-[#2d4d40] text-white border-[#2d4d40]' 
                            : 'bg-white text-[#3b6051] hover:bg-[#e3f2ec] border-[#d0ebd9]'
                        }`}
                      >
                        {rad}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Brand Color Tint */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3b6051] mb-2">
                    Internal Tint Value
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: 'sage-light', name: 'Sage Soft', color: 'bg-[#f4faf7]' },
                      { key: 'sage-medium', name: 'Sage Medium', color: 'bg-[#e3f2ec]' },
                      { key: 'mint-pale', name: 'Mint Pale', color: 'bg-[#c1e3d6]/60' }
                    ].map((shade) => (
                      <button
                        key={shade.key}
                        onClick={() => setSandboxColor(shade.key)}
                        className={`py-2 px-1 text-xs font-bold rounded-lg border flex items-center justify-center gap-2 transition-all ${
                          sandboxColor === shade.key 
                            ? 'bg-[#2d4d40] text-white border-[#2d4d40]' 
                            : 'bg-white text-[#3b6051] hover:bg-[#e3f2ec] border-[#d0ebd9]'
                        }`}
                      >
                        <span className={`w-3 h-3 rounded-full ${shade.color} border border-[#2d4d40]/10`} />
                        <span className="hidden sm:inline">{shade.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Text Input Label */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3b6051] mb-2">
                    Title Overlay Text
                  </label>
                  <input 
                    type="text" 
                    value={sandboxCardText}
                    onChange={(e) => setSandboxCardText(e.target.value.slice(0, 24))}
                    className="w-full px-4 py-3 rounded-xl border border-[#d0ebd9] focus:outline-none focus:ring-2 focus:ring-[#2d4d40]/40 bg-white text-sm font-semibold text-[#2d4d40]"
                    placeholder="Enter visual title..."
                  />
                </div>

                {/* 4. Shadow Depth */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3b6051] mb-2">
                    Shadow Treatment
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: 'shadow-none', name: 'Flat UI' },
                      { key: 'shadow-md', name: 'Subtle Float' },
                      { key: 'shadow-2xl', name: 'Glow Ambient' }
                    ].map((sh) => (
                      <button
                        key={sh.key}
                        onClick={() => setSandboxShadow(sh.key)}
                        className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                          sandboxShadow === sh.key 
                            ? 'bg-[#2d4d40] text-white border-[#2d4d40]' 
                            : 'bg-white text-[#3b6051] hover:bg-[#e3f2ec] border-[#d0ebd9]'
                        }`}
                      >
                        {sh.name}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Sandbox Live Interactive Rendering Area */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center bg-white rounded-3xl p-8 border border-[#d0ebd9]/70 relative min-h-[400px]">
              
              <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-bold text-[#3b6051]/75">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Live Rendering Sandbox</span>
              </div>

              {/* Simulated Card Container */}
              <div 
                className={`w-full max-w-sm p-8 transition-all duration-500 border border-[#d0ebd9]/80 flex flex-col justify-between aspect-[1.15] relative overflow-hidden ${
                  sandboxRadius === 'lg' ? 'rounded-lg' : 
                  sandboxRadius === 'xl' ? 'rounded-xl' : 
                  sandboxRadius === '3xl' ? 'rounded-3xl' : 'rounded-[2.5rem]'
                } ${
                  sandboxColor === 'sage-light' ? 'bg-[#f4faf7]' : 
                  sandboxColor === 'sage-medium' ? 'bg-[#e3f2ec]' : 'bg-[#c1e3d6]/40'
                } ${sandboxShadow}`}
              >
                {/* Floating internal badge mimicking inspiration overlay items */}
                <div className="flex justify-between items-center">
                  <div className="px-3 py-1 bg-white border border-[#c1e3d6] rounded-full text-[10px] font-extrabold tracking-widest text-[#2d4d40] uppercase">
                    Uplucko Studio
                  </div>
                  <div className="w-5.5 h-5.5 rounded-full bg-[#2d4d40] text-white flex items-center justify-center text-xs">
                    ✓
                  </div>
                </div>

                {/* Middle organic visualization */}
                <div className="text-center py-4">
                  <span className="text-4xl block mb-2">🌿</span>
                  <h4 className="text-lg font-black tracking-tight text-[#2d4d40] truncate">
                    {sandboxCardText || 'Custom Node'}
                  </h4>
                  <p className="text-[11px] text-[#3b6051]/80 font-bold uppercase tracking-wider mt-1">Design Element</p>
                </div>

                {/* Progressive Bar styled like Layout 2 bottom indicator */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-bold text-[#3b6051]/80">
                    <span>GRID CONSISTENCY</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/70 rounded-full overflow-hidden p-0.5">
                    <div className="h-full bg-[#2d4d40] rounded-full animate-pulse" style={{ width: '100%' }} />
                  </div>
                </div>

                {/* Corner light source highlight mimicking glow depth */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 blur-xl pointer-events-none rounded-full" />
              </div>

              {/* Extra feedback info */}
              <p className="mt-6 text-xs text-[#3b6051]/80 text-center italic max-w-md">
                "We design with high-density spacing. This sandbox illustrates the exact container parameters enforced automatically across all viewports."
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Interactive Filterable Portfolio Gallery */}
      <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3b6051] bg-[#e3f2ec] px-4 py-1.5 rounded-full">
            Selected Works
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d4d40] mt-4 tracking-tight">
            Curation of balanced digital aesthetics
          </h2>
        </div>

        {/* Filter categories tabs */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-10">
          {[
            { id: 'all', name: 'Show All' },
            { id: 'branding', name: 'Branding & Systems' },
            { id: 'uiux', name: 'Product/UI/UX' },
            { id: 'spatial', name: 'Spatial Minimal' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setPortfolioCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                portfolioCategory === cat.id 
                  ? 'bg-[#2d4d40] text-white border-[#2d4d40]' 
                  : 'bg-white hover:bg-[#e3f2ec] text-[#3b6051] border-[#d0ebd9]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems
            .filter(item => portfolioCategory === 'all' || item.cat === portfolioCategory)
            .map((item) => (
              <div 
                key={item.id}
                className="group bg-white rounded-3xl border border-[#d0ebd9]/60 hover:border-[#a8d3be] overflow-hidden hover:shadow-md transition-all duration-300"
              >
                {/* Visual Representation frame with placeholder style (from layout 3 & 4) */}
                <div className="bg-[#e3f2ec]/65 h-56 flex items-center justify-center text-5xl relative overflow-hidden group-hover:bg-[#e3f2ec]/85 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#c1e3d6]/10 to-transparent pointer-events-none" />
                  <span className="transform group-hover:scale-125 transition-transform duration-500">{item.img}</span>
                  
                  {/* Float details indicator when hovering */}
                  <div className="absolute bottom-3 right-3 bg-white/85 backdrop-blur-sm px-3 py-1 rounded-full border border-[#c1e3d6] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <span className="text-[10px] font-extrabold text-[#2d4d40] uppercase tracking-wider">Inquire</span>
                    <ArrowUpRight className="w-3 h-3 text-[#2d4d40]" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-[#3b6051] uppercase tracking-widest">{item.cat}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c1e3d6]" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#2d4d40] tracking-tight group-hover:text-[#3b6051] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#3b6051]/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
        </div>

      </section>

      {/* Testimonials Showcase with Interactive Carousel */}
      <section id="testimonials" className="py-20 bg-[#e3f2ec]/50 border-y border-[#d0ebd9]/40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-1 bg-[#2d4d40] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            <Star className="w-3 h-3 fill-current text-[#c1e3d6]" />
            <span>CLIENT REPUTATION</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#2d4d40] mb-8">
            How creative teams experience Uplucko
          </h2>

          {/* Active Testimonial Card */}
          <div className="bg-white rounded-[2.2rem] p-8 md:p-12 border border-[#c1e3d6] shadow-sm relative overflow-hidden min-h-[220px] flex flex-col justify-between">
            {/* Soft decorative background arch inside testimonial card */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-32 bg-[#e3f2ec]/30 rounded-b-full pointer-events-none" />
            
            <p className="text-base md:text-xl text-[#2d4d40] font-medium leading-relaxed italic relative z-10">
              "{testimonials[activeTestimonial].quote}"
            </p>

            <div className="mt-8 pt-6 border-t border-[#e3f2ec] flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div className="text-left">
                <h4 className="font-extrabold text-sm text-[#2d4d40]">{testimonials[activeTestimonial].name}</h4>
                <p className="text-xs text-[#3b6051]/80">{testimonials[activeTestimonial].role}</p>
              </div>

              {/* Rating representation */}
              <div className="flex gap-1">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-current text-[#3b6051]" />
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Buttons */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="w-10 h-10 rounded-xl bg-white hover:bg-[#e3f2ec] border border-[#d0ebd9] flex items-center justify-center text-[#2d4d40] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeTestimonial === idx ? 'w-6 bg-[#2d4d40]' : 'bg-[#c1e3d6]'
                }`}
              />
            ))}

            <button 
              onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="w-10 h-10 rounded-xl bg-white hover:bg-[#e3f2ec] border border-[#d0ebd9] flex items-center justify-center text-[#2d4d40] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* Elegant Contact Form / Aesthetic Engagement Call to Action */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-[#2d4d40] rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-xl shadow-[#2d4d40]/10">
          
          {/* Custom absolute design layers inspired directly by Uplucko's aesthetics */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#c1e3d6]/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Column 1 Info */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c1e3d6] bg-white/10 px-4 py-1.5 rounded-full inline-block">
                COLLABORATIVE DIALOGUE
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Ready to elevate your <br />
                digital aura?
              </h2>
              <p className="text-sm md:text-base text-[#e3f2ec]/80 leading-relaxed max-w-md">
                Reach out to our aesthetic coordination team. We deliver functional grids, custom layouts, and highly accurate color solutions.
              </p>

              {/* Direct Touchpoints info */}
              <div className="space-y-3 pt-4 text-xs font-bold text-[#e3f2ec]/90">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#c1e3d6]" />
                  <span>Direct hotline: hello@uplucko.design</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#c1e3d6]" />
                  <span>Creative Lab: Studio Sage, SF</span>
                </div>
              </div>
            </div>

            {/* Column 2 Email Capture Frame with success feedback */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-lg font-bold tracking-wide">Subscribe to design system updates</h3>
              <p className="text-xs text-[#e3f2ec]/70">We dispatch layout analyses, organic SVG assets, and grid theory notes once every fortnight.</p>
              
              <form onSubmit={handleSubscribe} className="space-y-3 pt-2">
                <div>
                  <input 
                    type="email" 
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-5 py-3 rounded-2xl bg-white text-[#2d4d40] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#c1e3d6] border border-transparent placeholder:text-gray-400"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#c1e3d6] text-[#2d4d40] hover:bg-white px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  Join Circle
                </button>
              </form>

              {contactSuccess && (
                <div className="p-3 bg-white/15 rounded-xl text-center text-xs font-bold text-[#c1e3d6] animate-pulse">
                  ✓ Connection established! Check your inbox soon.
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Styled Premium Footer */}
      <footer className="bg-[#e3f2ec]/50 border-t border-[#d0ebd9]/60 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#2d4d40] flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5 text-[#e3f2ec]" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 3c.132 0 .263 0 .393.007a3 3 0 0 1 2.6 2.6c.014.26.014.524 0 .785a3 3 0 0 1-2.6 2.6C12.263 9 12.132 9 12 9a3 3 0 0 1-3-3c0-1.66 1.34-3 3-3Z" />
                  <path d="M5 10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 4.418-4 8-7 11-3-3-7-6.582-7-11Z" />
                </svg>
              </div>
              <span className="text-lg font-black tracking-tight text-[#2d4d40]">Uplucko</span>
            </div>
            
            <p className="text-xs text-[#3b6051]/85 leading-relaxed">
              Design systems built around warm organic minimalism and strict geometrical integrity. Expanding the visual universe, pixel by pixel.
            </p>

            {/* Social icons list matching the visual density in Layout 4 */}
            <div className="flex gap-2.5 pt-2">
              <a href="#home" className="w-8 h-8 rounded-lg bg-white hover:bg-[#2d4d40] hover:text-white border border-[#d0ebd9] flex items-center justify-center text-[#3b6051] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#home" className="w-8 h-8 rounded-lg bg-white hover:bg-[#2d4d40] hover:text-white border border-[#d0ebd9] flex items-center justify-center text-[#3b6051] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#home" className="w-8 h-8 rounded-lg bg-white hover:bg-[#2d4d40] hover:text-white border border-[#d0ebd9] flex items-center justify-center text-[#3b6051] transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-[#2d4d40] uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-xs text-[#3b6051]/90">
              <li><a href="#home" className="hover:text-[#2d4d40] transition-colors">Home Studio</a></li>
              <li><a href="#portfolio" className="hover:text-[#2d4d40] transition-colors">Aesthetics Curation</a></li>
              <li><a href="#sandbox" className="hover:text-[#2d4d40] transition-colors">Sandbox Customizer</a></li>
              <li><a href="#testimonials" className="hover:text-[#2d4d40] transition-colors">Testimonial Loop</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-[#2d4d40] uppercase tracking-widest">Design Assets</h4>
            <ul className="space-y-2 text-xs text-[#3b6051]/90">
              <li><a href="#sandbox" className="hover:text-[#2d4d40] transition-colors">Color Tints</a></li>
              <li><a href="#home" className="hover:text-[#2d4d40] transition-colors">Pill Badges</a></li>
              <li><a href="#features" className="hover:text-[#2d4d40] transition-colors">Progress Bars</a></li>
              <li><a href="#portfolio" className="hover:text-[#2d4d40] transition-colors">Arch Frame SVGs</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black text-[#2d4d40] uppercase tracking-widest">Our DNA Statement</h4>
            <p className="text-xs text-[#3b6051]/80 leading-relaxed italic">
              "We maintain that premium design is not a luxury, but a structural necessity. Clean interfaces foster clean thoughts, and perfect colors generate balanced workflows."
            </p>
          </div>

        </div>

        {/* Legal and system tag */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#d0ebd9]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#3b6051]/75 font-bold uppercase tracking-wider">
            © {new Date().getFullYear()} Uplucko Labs. Created in alignment with the visual code.
          </p>
          <div className="flex items-center gap-2 bg-[#2d4d40] text-white px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Optimal Sage 3.0 System</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
4