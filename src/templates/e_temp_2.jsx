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