import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Activity, 
  HeartPulse, 
  Dna, 
  ArrowRight, 
  Menu, 
  X, 
  Droplet, 
  Sun, 
  Wind, 
  Moon 
} from 'lucide-react';

// --- CUSTOM SVG GRAPHICS (Mimicking the line-art style of the inspiration) ---

const StampIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" className={`animate-[spin_20s_linear_infinite] ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="50" cy="50" r="48" strokeDasharray="4 4" />
    <circle cx="50" cy="50" r="40" />
    <path d="M50 20 L50 80 M20 50 L80 50" opacity="0.5" />
    <circle cx="50" cy="50" r="15" fill="currentColor" />
  </svg>
);

const AbstractMountainIcon = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 200 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <path d="M0 90 L40 40 L70 70 L120 20 L160 60 L200 10 M0 95 L200 95" />
    <path d="M40 40 L40 90 M70 70 L70 90 M120 20 L120 90 M160 60 L160 90" opacity="0.3" strokeDasharray="2 4"/>
    <path d="M20 65 L30 65 M90 45 L100 45 M170 35 L180 35" strokeWidth="3" />
  </svg>
);

const BotanicalLineArt = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter">
    <path d="M100 200 C 100 150, 50 100, 20 80" />
    <path d="M100 200 C 100 150, 150 100, 180 80" />
    <path d="M100 200 L 100 20" />
    {/* Leaves */}
    <path d="M100 160 C 70 160, 60 130, 100 130 C 100 130, 90 145, 100 160 Z" fill="currentColor" />
    <path d="M100 120 C 140 120, 150 90, 100 90 C 100 90, 110 105, 100 120 Z" />
    <path d="M100 70 C 60 70, 40 30, 100 40 C 100 40, 80 55, 100 70 Z" fill="currentColor" />
    {/* Abstract roots/energy */}
    <circle cx="100" cy="180" r="40" strokeDasharray="1 6" strokeWidth="4" />
    <circle cx="100" cy="180" r="60" strokeDasharray="2 8" opacity="0.5" />
  </svg>
);

// --- MAIN COMPONENT ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Colors based on inspiration
  const theme = {
    bg: 'bg-[#EFECE3]', // Warm paper beige
    text: 'text-[#1A1A1A]', // Ink black
    greenDark: 'bg-[#31493C]', // Deep organic green
    greenLight: 'bg-[#899A8B]', // Muted sage green
    border: 'border-[#1A1A1A]',
    textGreenDark: 'text-[#31493C]',
    textBeige: 'text-[#EFECE3]'
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans selection:bg-[#31493C] selection:text-[#EFECE3] overflow-x-hidden`}>
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b-2 ${theme.border} ${isScrolled ? 'bg-[#EFECE3]/90 backdrop-blur-md py-3' : 'bg-[#EFECE3] py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 ${theme.greenDark} flex items-center justify-center rounded-sm`}>
              <Leaf className={theme.textBeige} size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl tracking-tighter leading-none uppercase">Vital Root</span>
              <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase">Holistic Healthcare</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 font-bold text-sm tracking-widest uppercase">
            <a href="#philosophy" className="hover:opacity-50 transition-opacity">Philosophy</a>
            <a href="#services" className="hover:opacity-50 transition-opacity">Practices</a>
            <a href="#origin" className="hover:opacity-50 transition-opacity">Origin</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <button className={`border-2 ${theme.border} px-6 py-2 font-bold text-sm tracking-widest uppercase hover:bg-[#1A1A1A] hover:text-[#EFECE3] transition-colors`}>
              Consultation
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-28 pb-12 lg:pt-32 lg:pb-0 min-h-[90vh] flex flex-col">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex-grow flex flex-col lg:flex-row w-full border-b-2 border-l-2 border-r-2 border-t-2 mt-4 lg:mt-8 border-[#1A1A1A]">
          
          {/* Left Column (Text Heavy) */}
          <div className={`lg:w-7/12 flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 ${theme.border} relative overflow-hidden`}>
            {/* Top decorative block */}
            <div className={`h-24 ${theme.greenDark} w-full border-b-2 ${theme.border} flex items-center px-8 justify-between`}>
              <span className={`text-[#EFECE3] font-bold tracking-[0.3em] uppercase text-xs`}>Est. 2024</span>
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-[#EFECE3]"></div>
                <div className="w-4 h-4 rounded-full border-2 border-[#EFECE3]"></div>
              </div>
            </div>

            <div className="p-8 lg:p-16 flex-grow flex flex-col justify-center relative">
              <div className="absolute top-8 right-8 opacity-10">
                <StampIcon className="w-48 h-48" />
              </div>
              
              {/* Vertical Text mimicking Asian typography layout */}
              <div className="absolute left-4 top-32 hidden md:block" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                <span className="text-xs font-bold tracking-[0.3em] uppercase border-l-2 border-[#1A1A1A] pl-2 py-4 block">
                  Restoring natural balance through integrative medicine.
                </span>
              </div>

              <div className="md:pl-12">
                <h1 className="text-6xl lg:text-[7rem] leading-[0.85] font-black tracking-tighter uppercase mb-6">
                  Rooted<br/>In <span className={theme.textGreenDark}>Nature.</span><br/>Backed<br/>By Science.
                </h1>
                
                <p className="text-lg lg:text-xl font-medium max-w-md leading-relaxed mb-10 border-l-4 border-[#31493C] pl-6">
                  Providing a profound approach to daily health. We explore the deep origins of vitality, offering comprehensive care that honors the body's innate wisdom.
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <button className={`${theme.greenDark} ${theme.textBeige} px-8 py-4 font-bold text-sm tracking-widest uppercase flex items-center gap-3 hover:bg-[#1A1A1A] transition-colors`}>
                    Begin Journey <ArrowRight size={18} />
                  </button>
                  <div className="flex items-center gap-3 ml-4">
                    <StampIcon className="w-12 h-12 text-[#31493C]" />
                    <span className="text-xs font-bold tracking-widest uppercase w-24 leading-tight">Certified Practitioner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Graphic/Illustration) */}
          <div className={`lg:w-5/12 bg-[#EFECE3] flex flex-col relative`}>
             <div className="flex-grow p-12 flex items-center justify-center relative">
               {/* Background grid lines */}
               <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none opacity-10">
                 {[...Array(16)].map((_, i) => (
                   <div key={i} className="border-[0.5px] border-[#1A1A1A]"></div>
                 ))}
               </div>
               
               <div className="relative w-full aspect-square max-w-md">
                 <BotanicalLineArt className="w-full h-full text-[#1A1A1A]" />
                 
                 {/* Floating badge */}
                 <div className={`absolute bottom-0 left-0 bg-[#EFECE3] border-2 ${theme.border} p-4 flex flex-col`}>
                    <span className="font-bold text-2xl">100%</span>
                    <span className="text-[0.6rem] font-bold tracking-widest uppercase">Holistic Focus</span>
                 </div>
               </div>
             </div>
             
             {/* Bottom sub-block */}
             <div className={`border-t-2 ${theme.border} ${theme.greenLight} p-6 flex items-center justify-between`}>
               <span className="font-bold tracking-widest uppercase text-xs">Origin Extract</span>
               <Activity size={24} />
             </div>
          </div>

        </div>
      </section>

      {/* --- TICKER SECTION --- */}
      <div className={`border-b-2 border-t-2 ${theme.border} py-3 bg-[#1A1A1A] text-[#EFECE3] overflow-hidden flex whitespace-nowrap mt-8`}>
        <div className="animate-[marquee_20s_linear_infinite] flex gap-12 items-center">
          {[...Array(6)].map((_, i) => (
             <React.Fragment key={i}>
                <span className="font-bold text-sm tracking-[0.2em] uppercase">Integrative Diagnosis</span>
                <span className="text-[#31493C]">✦</span>
                <span className="font-bold text-sm tracking-[0.2em] uppercase">Herbal Pharmacy</span>
                <span className="text-[#31493C]">✦</span>
                <span className="font-bold text-sm tracking-[0.2em] uppercase">Acupuncture Therapy</span>
                <span className="text-[#31493C]">✦</span>
             </React.Fragment>
          ))}
        </div>
      </div>

      {/* --- THE METHOD / PACKAGING BLOCK STYLE SECTION --- */}
      <section id="philosophy" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-[#1A1A1A] pb-6">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-2">The Architecture of Health</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase">Our Method</h3>
          </div>
          <p className="text-right font-medium max-w-xs mt-6 md:mt-0 leading-tight">
            A comprehensive system designed to identify root causes, not just treat symptoms.
          </p>
        </div>

        {/* Dense, poster-like grid mimicking the packaging layout */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 border-2 ${theme.border}`}>
          
          {/* Main Dark Block */}
          <div className={`lg:col-span-2 ${theme.greenDark} ${theme.textBeige} p-8 lg:p-12 border-b-2 lg:border-b-0 lg:border-r-2 ${theme.border} relative overflow-hidden`}>
            <div className="absolute top-0 right-0 p-4 border-b-2 border-l-2 border-[#EFECE3]/30">
              <span className="font-bold tracking-widest text-xs uppercase opacity-70">Phase 01</span>
            </div>
            
            <Dna size={48} className="mb-8 opacity-80" strokeWidth={1.5} />
            <h4 className="text-4xl font-black uppercase tracking-tight mb-6">Deep Diagnostics</h4>
            <p className="text-lg leading-relaxed max-w-md opacity-90 mb-12">
              We begin with a profound exploration of your physiological landscape. Combining ancient assessment techniques with modern functional medicine testing to map your unique health topography.
            </p>
            
            <div className="flex items-center gap-6 border-t border-[#EFECE3]/30 pt-8 mt-auto">
              <div className="w-16 h-16 rounded-full border-2 border-[#EFECE3] flex items-center justify-center">
                <span className="font-bold">1</span>
              </div>
              <div className="w-16 h-16 rounded-full border border-[#EFECE3]/50 flex items-center justify-center">
                <span className="font-bold">2</span>
              </div>
              <div className="w-16 h-16 rounded-full border border-[#EFECE3]/50 flex items-center justify-center">
                <span className="font-bold">3</span>
              </div>
            </div>

            {/* Background graphic */}
            <div className="absolute -bottom-20 -right-20 opacity-10 w-96 h-96">
               <AbstractMountainIcon />
            </div>
          </div>

          {/* Secondary Blocks Stacked */}
          <div className="flex flex-col">
            <div className={`flex-1 bg-[#EFECE3] p-8 border-b-2 ${theme.border} relative`}>
              <h4 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center justify-between">
                Curated Botany
                <Leaf size={24} className={theme.textGreenDark}/>
              </h4>
              <p className="text-sm font-medium leading-relaxed">
                Utilizing wild-harvested and organic botanical medicines to gently correct imbalances and nourish depleted systems.
              </p>
              {/* Graphic stamp */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <StampIcon className="w-20 h-20" />
              </div>
            </div>
            
            <div className={`flex-1 ${theme.greenLight} p-8 relative flex flex-col justify-between`}>
               <h4 className="text-2xl font-black uppercase tracking-tight mb-4 text-[#1A1A1A]">
                Structural Integrity
              </h4>
               <p className="text-sm font-bold leading-relaxed text-[#1A1A1A] mb-8">
                Acupuncture, manual therapy, and movement prescription to ensure energetic and physical alignment.
              </p>
              <div className="w-full h-24 border-2 border-[#1A1A1A] flex items-center justify-center">
                <AbstractMountainIcon className="w-full h-full text-[#1A1A1A] p-2" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SERVICES / ELEMENTS SECTION --- */}
      <section id="services" className={`py-20 border-t-2 border-b-2 ${theme.border} bg-[#EFECE3]`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">
            <StampIcon className="w-16 h-16 mx-auto mb-6 text-[#31493C]" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Core Modalities</h2>
            <p className="font-bold text-sm tracking-widest uppercase">Select your path to vitality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-[#1A1A1A]">
            
            {[
              { title: "Naturopathy", icon: <Sun size={32}/>, desc: "Comprehensive functional medicine approach.", bg: "bg-[#EFECE3]", text: "text-[#1A1A1A]" },
              { title: "Acupuncture", icon: <Wind size={32}/>, desc: "Traditional meridian therapy for energy flow.", bg: theme.greenDark, text: "text-[#EFECE3]" },
              { title: "Herbalism", icon: <Leaf size={32}/>, desc: "Custom compounded botanical prescriptions.", bg: "bg-[#EFECE3]", text: "text-[#1A1A1A]" },
              { title: "Nutrition", icon: <Droplet size={32}/>, desc: "Food as medicine, tailored to your biology.", bg: theme.greenLight, text: "text-[#1A1A1A]" }
            ].map((service, idx) => (
              <div key={idx} className={`${service.bg} ${service.text} p-8 border-[1px] border-[#1A1A1A] group hover:bg-[#1A1A1A] hover:text-[#EFECE3] transition-colors duration-300 flex flex-col`}>
                <div className="mb-12 border-2 border-current w-16 h-16 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-3">{service.title}</h3>
                  <p className="text-sm font-medium leading-relaxed opacity-90">{service.desc}</p>
                </div>
                <div className="mt-8 flex justify-end">
                  <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* --- INFO / ORIGIN SPLIT SECTION --- */}
      <section id="origin" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row gap-12 items-center">
         <div className="lg:w-1/2 relative">
            <div className={`w-full aspect-[4/5] bg-[#EFECE3] border-2 ${theme.border} p-6 relative z-10`}>
              <div className={`w-full h-full border-2 ${theme.border} flex items-center justify-center overflow-hidden relative`}>
                 <div className="absolute inset-0 bg-[#31493C] opacity-10"></div>
                 <AbstractMountainIcon className="w-[150%] h-[150%] text-[#31493C] opacity-20" />
                 
                 <div className="z-10 text-center bg-[#EFECE3] p-8 border-2 border-[#1A1A1A] shadow-[8px_8px_0_0_rgba(26,26,26,1)]">
                    <h3 className="text-4xl font-black uppercase tracking-tighter mb-2">Our</h3>
                    <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">Sanctuary</h3>
                    <p className="text-xs font-bold tracking-widest uppercase">Est. 2024 — Clinic</p>
                 </div>
              </div>
            </div>
            {/* Decorative background solid block */}
            <div className={`absolute top-6 left-6 w-full h-full ${theme.greenDark} z-0`}></div>
         </div>

         <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#1A1A1A]"></div>
              <span className="font-bold text-sm tracking-[0.3em] uppercase">The Environment</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter uppercase mb-8 leading-none">Designed for <br/>Healing.</h2>
            <p className="text-lg font-medium leading-relaxed mb-8 border-l-4 border-[#31493C] pl-6">
              Our space is intentionally crafted to calm the nervous system the moment you enter. Utilizing natural materials, organic shapes, and a palette inspired by the earth, we provide a refuge from the modern world.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t-2 border-[#1A1A1A] pt-8">
              <div>
                <span className="block text-4xl font-black mb-2">12</span>
                <span className="text-xs font-bold tracking-widest uppercase">Treatment Rooms</span>
              </div>
              <div>
                <span className="block text-4xl font-black mb-2">100+</span>
                <span className="text-xs font-bold tracking-widest uppercase">Botanical Species</span>
              </div>
            </div>
         </div>
      </section>

      {/* --- FOOTER CTA (Massive Dark Block) --- */}
      <footer className={`${theme.greenDark} ${theme.textBeige} border-t-4 border-[#1A1A1A] pt-20 pb-10 px-6 lg:px-12`}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          
          <div className="lg:w-2/3">
            <h2 className="text-6xl md:text-[6rem] font-black tracking-tighter uppercase leading-[0.85] mb-8">
              Begin<br/>Your<br/>Recovery.
            </h2>
            <button className="bg-[#EFECE3] text-[#1A1A1A] px-10 py-5 font-black text-lg tracking-widest uppercase flex items-center gap-4 hover:bg-transparent hover:text-[#EFECE3] border-2 border-[#EFECE3] transition-all">
              Schedule Consultation <ArrowRight size={24} />
            </button>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold tracking-[0.3em] uppercase border-b border-[#EFECE3]/30 pb-2 mb-2">Location</span>
              <p className="font-medium text-lg leading-tight">128 Organic Way<br/>Wellness District, NY 10012</p>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold tracking-[0.3em] uppercase border-b border-[#EFECE3]/30 pb-2 mb-2">Contact</span>
              <p className="font-medium text-lg leading-tight">hello@vitalroot.com<br/>+1 (555) 019-2834</p>
            </div>

            <div className="mt-4">
              <StampIcon className="w-24 h-24 text-[#899A8B]" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto border-t border-[#EFECE3]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <Leaf size={14} />
            <span>Vital Root Healthcare © 2024</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#899A8B]">Instagram</a>
            <a href="#" className="hover:text-[#899A8B]">Journal</a>
            <a href="#" className="hover:text-[#899A8B]">Terms</a>
          </div>
        </div>
      </footer>

      {/* Global CSS for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
2
import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  MapPin, 
  ArrowRight, 
  Volume2, 
  VolumeX, 
  ExternalLink, 
  Cpu, 
  Layers, 
  Sparkles, 
  Camera, 
  ShoppingBag, 
  Send, 
  ChevronRight, 
  Globe, 
  Grid, 
  FileText,
  User,
  Eye,
  Hash,
  Activity,
  Maximize2
} from 'lucide-react';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('shibuya');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [scannerProgress, setScannerProgress] = useState(0);
  const [coordinateHover, setCoordinateHover] = useState("35.6895° N, 139.6917° E");
  
  // Custom audio oscillator to simulate Tokyo Ambient Drone without external assets
  const [audioCtx, setAudioCtx] = useState(null);
  const [oscillators, setOscillators] = useState([]);

  useEffect(() => {
    // Simulated live scanner progress
    const interval = setInterval(() => {
      setScannerProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    if (!isPlaying) {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        
        // Low warm ambient synth pad
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc1.type = 'sawtooth';
        osc2.type = 'triangle';
        
        osc1.frequency.setValueAtTime(55, ctx.currentTime); // A1
        osc2.frequency.setValueAtTime(110, ctx.currentTime); // A2
        
        // Lowpass filter for cyber-punk warmth
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(250, ctx.currentTime);
        
        gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
        
        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc1.start();
        osc2.start();
        
        setAudioCtx(ctx);
        setOscillators([osc1, osc2, gainNode]);
        setIsPlaying(true);
      } catch (e) {
        console.error("Audio Web API not supported or blocked", e);
      }
    } else {
      if (oscillators.length) {
        oscillators[0].stop();
        oscillators[1].stop();
      }
      if (audioCtx) {
        audioCtx.close();
      }
      setIsPlaying(false);
      setOscillators([]);
    }
  };

  const districtData = {
    shibuya: {
      jp: "渋谷区",
      en: "SHIBUYA",
      desc: "The hyper-kinetic heart of Tokyo neon dreams. Home to the legendary scramble, towering 109 beacons, and high-octane underground fashion labs.",
      coordinates: "35.6580° N, 139.7016° E",
      bgImg: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&q=80&w=1200",
      stats: { density: "14,800/km²", lightIdx: "A++ Peak", vibe: "Cyber-Street" }
    },
    shinjuku: {
      jp: "新宿区",
      en: "SHINJUKU",
      desc: "A sprawling labyrinth of towering megastructures and narrow alleys. Golden Gai's ancient lantern smoke dances beneath monolithic corporate monoliths.",
      coordinates: "35.6938° N, 139.7034° E",
      bgImg: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1200",
      stats: { density: "18,200/km²", lightIdx: "Neon Saturate", vibe: "Alleyways & Spires" }
    },
    akihabara: {
      jp: "秋葉原",
      en: "AKIHABARA",
      desc: "The electric town of continuous current. Silicon markets, retro-arcade towers, and glowing storefronts dedicated to visual, digital, and mechanical subcultures.",
      coordinates: "35.6997° N, 139.7715° E",
      bgImg: "https://images.unsplash.com/photo-1563200004-9541b5a5960d?auto=format&fit=crop&q=80&w=1200",
      stats: { density: "12,100/km²", lightIdx: "RGB Max", vibe: "Retro-Tech Culture" }
    },
    ginza: {
      jp: "銀座",
      en: "GINZA",
      desc: "Where elite luxury meets brutalist master architecture. Precision engineered fashion galleries stand tall beside timeless, century-old legacy houses.",
      coordinates: "35.6715° N, 139.7649° E",
      bgImg: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200",
      stats: { density: "9,400/km²", lightIdx: "Classy Warmth", vibe: "High-End Brutalism" }
    }
  };

  const gearItems = [
    {
      id: "g-01",
      name: "NEON MONOLITH PONCHO",
      jpName: "ネオンモノリス・ポンチョ",
      price: "¥24,800",
      tag: "WATERPROOF / 3-LAYER",
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=600",
      specs: ["High-Vis Reflective Strips", "Modular Molle Pockets", "Teflon Shield Pro coating"]
    },
    {
      id: "g-02",
      name: "SHIBUYA TRANSIT SLING",
      jpName: "渋谷トランジット・スリング",
      price: "¥14,500",
      tag: "RFID / QUICK-RELEASE",
      image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=600",
      specs: ["AustriAlpin Cobra Buckles", "Weather-tight YKK Zips", "Hidden Tokyo Subway Card slot"]
    },
    {
      id: "g-03",
      name: "CHRONO GRID RUNNER S-03",
      jpName: "クロノグリッド・ランナー",
      price: "¥31,000",
      tag: "CARBON SOLE / ERGOMETRIC",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=600",
      specs: ["Multi-density impact foam", "Vibrant crimson pull-tabs", "Breathable cyber-mesh weave"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#141414] font-sans selection:bg-[#E11D2D] selection:text-white overflow-x-hidden relative">
      
      {/* Background Poster Grain Overlay & Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#141414_1px,transparent_1px)] [background-size:16px_16px] z-10" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZHRoPSI0IiBmaWxsPSIjMDAwIj48L3JlY3Q+Cjwvc3ZnPg==')] z-10" />

      {/* --- FLOATING HEADER --- */}
      <header className="sticky top-0 z-50 bg-[#F4F3EF]/90 backdrop-blur-md border-b border-[#141414]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand / Emblem */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-[#E11D2D] flex items-center justify-center text-white font-black text-xl tracking-tight select-none">
              東
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#141414]" />
              <div className="absolute top-0 left-0 w-1 h-3 bg-white" />
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-tighter block leading-none">KIKU</span>
              <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-[#141414]/60">TOKYO APPARATUS</span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest font-semibold">
            <a href="#explore" className="hover:text-[#E11D2D] transition-colors flex items-center gap-1.5 py-2 relative group">
              <span className="text-[#E11D2D] font-black">01.</span> EXPLORE
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E11D2D] transition-all group-hover:w-full" />
            </a>
            <a href="#gear" className="hover:text-[#E11D2D] transition-colors flex items-center gap-1.5 py-2 relative group">
              <span className="text-[#E11D2D] font-black">02.</span> TECHNICAL GEAR
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E11D2D] transition-all group-hover:w-full" />
            </a>
            <a href="#subsystem" className="hover:text-[#E11D2D] transition-colors flex items-center gap-1.5 py-2 relative group">
              <span className="text-[#E11D2D] font-black">03.</span> ARCHIVE
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E11D2D] transition-all group-hover:w-full" />
            </a>
          </nav>

          {/* Header Action Elements */}
          <div className="flex items-center gap-4">
            {/* Interactive Cyber Audio Toggler */}
            <button 
              onClick={toggleSound}
              className={`flex items-center gap-2 border px-3.5 py-1.5 text-xs font-mono tracking-wider font-semibold transition-all ${
                isPlaying 
                ? 'bg-[#E11D2D] border-[#E11D2D] text-white animate-pulse' 
                : 'border-[#141414] hover:bg-[#141414] hover:text-white'
              }`}
              title="Toggle retro synth ambient atmosphere"
            >
              {isPlaying ? <Volume2 size={13} /> : <VolumeX size={13} />}
              <span className="hidden sm:inline">{isPlaying ? "AUDIO SYSTEM: ACTIVE" : "INITIATE AMBIENT"}</span>
            </button>

            <a 
              href="#explore"
              className="bg-[#141414] hover:bg-[#E11D2D] text-white px-5 py-2 text-xs font-mono font-bold tracking-widest uppercase transition-all flex items-center gap-2"
            >
              SYSTEM.EXE <ArrowRight size={13} />
            </a>
          </div>

        </div>
      </header>

      {/* --- HERO SECTION (AESTHETIC CONVERGENCE) --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-between border-b border-[#141414]">
        
        {/* Poster Layout Background Geometry */}
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full bg-[#141414]/5 lg:border-l border-[#141414] pointer-events-none z-0 overflow-hidden">
          {/* Crimson Sun Backdrop mimicking the inspiration poster */}
          <div className="absolute left-[35%] top-[25%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#E11D2D]/90 z-0 mix-blend-multiply filter blur-[2px] animate-pulse" />
          
          {/* Subtle Grid Backdrop lines */}
          <div className="absolute inset-0 opacity-15" 
               style={{ 
                 backgroundImage: 'linear-gradient(to right, #141414 1px, transparent 1px), linear-gradient(to bottom, #141414 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
               }} 
          />

          {/* Tech Spec Callout inside Hero Background */}
          <div className="absolute right-6 top-8 font-mono text-[10px] text-[#141414]/40 flex flex-col items-end uppercase leading-tight select-none">
            <span>Tokyo Metro Core API: Connected</span>
            <span>Version: 35.6895_R97</span>
            <span>Status: Nominal</span>
          </div>
        </div>

        {/* Hero Top Technical Metadata Ribbon */}
        <div className="border-b border-[#141414] py-3.5 z-10 bg-[#F4F3EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-[#141414]/70">
            <div className="flex items-center gap-4">
              <span className="font-extrabold text-[#E11D2D]">CONTRAST CITY // ENDLESS MOTION</span>
              <span className="hidden md:inline text-[#141414]/30">|</span>
              <span className="hidden md:inline">EST. 1457 • TOKYO, JP</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#E11D2D] rounded-full inline-block animate-ping" />
                COORDINATE TRACK: <strong className="text-[#141414]">{coordinateHover}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Hero Main Content Block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 w-full">
          
          {/* Left Hero Core Branding Details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Stamp Style Accent Badge */}
            <div className="inline-flex items-center gap-3 border border-[#141414] px-3 py-1.5 w-fit bg-white shadow-[2px_2px_0px_#141414] mb-6">
              <span className="w-2 h-2 bg-[#E11D2D] rounded-full" />
              <span className="font-mono text-xs uppercase tracking-widest font-black text-[#141414]">
                METROPOLIS CHRONICLES
              </span>
            </div>

            {/* Giant Brutalist Heading mimicking Tokyo typography style */}
            <div className="relative select-none">
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-[#141414] leading-none uppercase">
                TOKYO
              </h1>
              <div className="absolute -top-6 left-0 text-xs tracking-[0.4em] font-mono text-[#E11D2D] font-extrabold uppercase">
                TRADITION MEETS TOMORROW
              </div>
              <div className="absolute -bottom-3 right-4 lg:right-32 bg-[#E11D2D] text-white px-3 py-0.5 text-sm font-mono tracking-widest font-bold">
                東京
              </div>
            </div>

            {/* Subtitle & Story Hook */}
            <p className="mt-8 text-lg sm:text-xl font-medium text-[#141414]/90 max-w-lg leading-relaxed">
              An interactive matrix detailing Tokyo's high-contrast urban landscape. Dive into neon alleys, brutalist concrete forms, and high-performance garments designed to brave the endless motion.
            </p>

            {/* Hero Interactive CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#explore"
                className="group bg-[#141414] hover:bg-[#E11D2D] text-white px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 border-2 border-transparent shadow-[4px_4px_0px_rgba(225,29,45,0.4)]"
              >
                ENTER DISTRICT HUB
                <Compass size={14} className="group-hover:rotate-45 transition-transform" />
              </a>

              <a 
                href="#gear"
                className="group border-2 border-[#141414] hover:bg-[#141414] hover:text-white bg-white px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
              >
                BROWSE GEAR 
                <ShoppingBag size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Bottom mini specs row in Hero */}
            <div className="mt-12 pt-8 border-t border-[#141414]/10 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <div className="text-xs font-mono text-[#141414]/40 uppercase">SYSTEM ID</div>
                <div className="font-mono text-sm font-bold text-[#141414]">TKY-909-02</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[#141414]/40 uppercase">ELEVATION</div>
                <div className="font-mono text-sm font-bold text-[#141414]">40m AMSL</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[#141414]/40 uppercase">TIMEZONE</div>
                <div className="font-mono text-sm font-bold text-[#141414]">JST (GMT+9)</div>
              </div>
            </div>

          </div>

          {/* Right Hero Interactive Visual Poster Box */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6 w-full">
            
            {/* The main brutalist poster card frame */}
            <div className="relative w-full max-w-[380px] bg-white border-2 border-[#141414] p-5 shadow-[8px_8px_0px_#141414] overflow-hidden group">
              
              {/* Vertical red decorative label mimicking poster layout */}
              <div className="absolute right-0 top-0 h-full w-10 bg-[#E11D2D] flex items-center justify-center pointer-events-none select-none z-10">
                <span className="rotate-90 text-white font-mono text-[9px] tracking-[0.4em] uppercase font-bold whitespace-nowrap">
                  EST. 1457 • TOKYO SYSTEM • 1457
                </span>
              </div>

              {/* Distressed photo window */}
              <div className="relative h-96 bg-[#141414] overflow-hidden border border-[#141414]">
                <img 
                  src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800"
                  alt="Tokyo Neon Street"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Cyber Scanner Bar scanning continuously */}
                <div 
                  className="absolute left-0 w-full h-0.5 bg-[#E11D2D] shadow-[0_0_8px_#E11D2D] pointer-events-none transition-all duration-75"
                  style={{ top: `${scannerProgress}%` }}
                />

                {/* Simulated HUD elements overlay */}
                <div className="absolute top-3 left-3 bg-[#141414]/90 text-white font-mono text-[9px] p-1.5 uppercase leading-none space-y-1 select-none border border-white/20">
                  <div className="flex justify-between gap-4"><span>STATUS:</span> <span className="text-[#E11D2D] animate-pulse">MONITORING</span></div>
                  <div>FEED: JP_LIVE_METRO_09</div>
                </div>

                <div className="absolute bottom-3 left-3 right-12 bg-white/95 text-[#141414] font-mono text-[10px] p-2.5 uppercase leading-none select-none border border-[#141414]">
                  <span className="block font-bold text-xs text-[#E11D2D] mb-0.5">NEON SHADOWS</span>
                  <span className="text-[9px] text-[#141414]/70">SHIBUYA SUBWAY DIVERGENCE</span>
                </div>
              </div>

              {/* Decorative Poster Details below photo */}
              <div className="mt-4 pr-6 flex justify-between items-end">
                <div className="font-mono text-[10px] uppercase text-[#141414]/80">
                  <span className="block font-bold">24/7 ENDLESS RUNTIME</span>
                  <span className="text-[#141414]/50 text-[9px]">SYSTEM DIAGNOSTICS: NOMINAL</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-mono text-xl font-black text-[#E11D2D]">109</span>
                  <span className="text-[7px] text-[#141414]/40 tracking-wider">BEACON</span>
                </div>
              </div>

              {/* Decorative Barcode Badge */}
              <div className="mt-4 pt-3 border-t border-[#141414]/10 flex justify-between items-center pr-6">
                <div className="w-24 h-6 flex gap-0.5 opacity-80">
                  <div className="w-1 bg-[#141414] h-full" />
                  <div className="w-0.5 bg-[#141414] h-full" />
                  <div className="w-1.5 bg-[#141414] h-full" />
                  <div className="w-0.5 bg-[#141414] h-full" />
                  <div className="w-2 bg-[#141414] h-full" />
                  <div className="w-0.5 bg-[#141414] h-full" />
                  <div className="w-1 bg-[#141414] h-full" />
                  <div className="w-3 bg-[#141414] h-full" />
                </div>
                <span className="font-mono text-[8px] text-[#141414]/40">#KIKU-TKY-VER-4</span>
              </div>

            </div>

            {/* Asymmetrical Floating Kanji Flag behind the poster card */}
            <div className="absolute -left-4 -bottom-4 bg-[#E11D2D] text-white p-3 font-black text-xs leading-tight uppercase select-none pointer-events-none hidden sm:block tracking-widest shadow-[2px_2px_0px_#141414]">
              未来は今
              <br />
              ここにある
            </div>

          </div>

        </div>

        {/* Hero Section Footer Segment */}
        <div className="border-t border-[#141414] bg-[#141414] text-white py-4 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-[#E11D2D] px-2 py-0.5 text-[9px] font-mono tracking-widest font-bold">CORE FEED</span>
              <span className="text-xs font-mono text-white/70">LIVE SYSTEM ALERTS // NO ABNORMALITIES REPORTED</span>
            </div>
            <div className="flex items-center gap-6 text-[10px] font-mono text-white/50">
              <span>TEMP: 22°C</span>
              <span>•</span>
              <span>PRESSURE: 1013 HPA</span>
              <span>•</span>
              <span>AIR INDEX: OPTIMAL</span>
            </div>
          </div>
        </div>

      </section>

      {/* --- SECTION 1: DISTRICT INTERACTIVE HUB (THE DIGITAL SCRAMBLE) --- */}
      <section id="explore" className="py-20 lg:py-28 border-b border-[#141414] relative bg-[#EFEFEA]">
        
        {/* Asymmetrical Heading Concept */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#E11D2D] font-black block mb-2">
                METROPOLITAN MATRIX
              </span>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-[#141414] uppercase leading-none">
                SELECT DISTRICT INFRASTRUCTURE
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <span className="font-mono text-[10px] text-[#141414]/60 uppercase block">
                / ACTIVE METRO MODULE
              </span>
              <span className="font-mono text-xs text-[#141414] font-bold uppercase">
                Interactive Map Coordinates Included
              </span>
            </div>
          </div>
        </div>

        {/* The Matrix Hub: Grid featuring interactive navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: District selection navigation buttons */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {Object.keys(districtData).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setCoordinateHover(districtData[key].coordinates);
                  }}
                  className={`w-full text-left p-6 border-2 border-[#141414] transition-all relative group overflow-hidden ${
                    isActive 
                    ? 'bg-[#141414] text-white shadow-[4px_4px_0px_#E11D2D]' 
                    : 'bg-white text-[#141414] hover:bg-[#F4F3EF] hover:-translate-y-1'
                  }`}
                >
                  {/* Accent tag color indicator */}
                  <div className={`absolute top-0 left-0 w-2 h-full ${isActive ? 'bg-[#E11D2D]' : 'bg-[#141414]/20 group-hover:bg-[#E11D2D]'}`} />
                  
                  <div className="flex justify-between items-center pl-2">
                    <div>
                      <span className="font-mono text-[10px] text-[#E11D2D] font-bold block mb-1">
                        {districtData[key].coordinates}
                      </span>
                      <h3 className="text-2xl font-black tracking-tight uppercase">
                        {districtData[key].en}
                      </h3>
                    </div>
                    <span className="text-xl font-bold font-mono opacity-40">
                      {districtData[key].jp}
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Quick System Diagnostics Widget */}
            <div className="bg-white border-2 border-[#141414] p-5 font-mono text-[10px] uppercase text-[#141414] shadow-[4px_4px_0px_#141414] mt-4">
              <div className="flex justify-between items-center mb-2 border-b border-[#141414]/10 pb-2">
                <span className="font-bold flex items-center gap-1.5 text-[#E11D2D]">
                  <Activity size={10} className="animate-spin" /> LIVE DIAGNOSTIC FEED
                </span>
                <span>METRO_OK</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>ACTIVE DIST:</span> 
                  <strong className="text-[#E11D2D]">{activeTab.toUpperCase()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>GPS COORDINATES:</span> 
                  <span>{districtData[activeTab].coordinates}</span>
                </div>
                <div className="flex justify-between">
                  <span>SYSTEM LATENCY:</span> 
                  <span>14ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic District Visual Presentation Showcase */}
          <div className="lg:col-span-8 bg-white border-2 border-[#141414] p-6 shadow-[8px_8px_0px_#141414] flex flex-col justify-between relative overflow-hidden group">
            
            {/* Corner Decorative Stamps */}
            <div className="absolute right-0 top-0 w-16 h-16 border-b border-l border-[#141414] bg-[#E11D2D]/10 flex items-center justify-center select-none">
              <Hash size={18} className="text-[#141414]/30" />
            </div>

            <div>
              {/* Image with technical text badge absolute overlay */}
              <div className="relative h-72 sm:h-96 w-full border border-[#141414] overflow-hidden mb-6 bg-[#141414]">
                <img 
                  src={districtData[activeTab].bgImg} 
                  alt={districtData[activeTab].en}
                  className="w-full h-full object-cover grayscale contrast-110 brightness-90 group-hover:scale-105 transition-all duration-700" 
                />
                
                {/* Visual Grid Badge */}
                <div className="absolute bottom-4 left-4 bg-[#141414] text-white px-3 py-1 text-xs font-mono tracking-widest uppercase">
                  {districtData[activeTab].en} HUB VIEW
                </div>
              </div>

              {/* District Content and Narrative */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] bg-[#E11D2D] text-white px-2 py-0.5 font-bold uppercase">
                      DISTRICT DATASET
                    </span>
                    <span className="font-mono text-xs text-[#141414]/60">
                      {districtData[activeTab].coordinates}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-[#141414] uppercase mb-3">
                    {districtData[activeTab].en} / <span className="text-[#E11D2D]">{districtData[activeTab].jp}</span>
                  </h3>
                  <p className="text-sm text-[#141414]/80 leading-relaxed">
                    {districtData[activeTab].desc}
                  </p>
                </div>

                {/* Micro KPI Grid */}
                <div className="md:col-span-4 bg-[#F4F3EF] border border-[#141414]/20 p-4 font-mono text-[10px] uppercase space-y-3">
                  <div>
                    <span className="text-[#141414]/40 block">DENSITY STAT</span>
                    <strong className="text-xs text-[#141414]">{districtData[activeTab].stats.density}</strong>
                  </div>
                  <div>
                    <span className="text-[#141414]/40 block">LIGHT EMISSION INDEX</span>
                    <strong className="text-xs text-[#E11D2D]">{districtData[activeTab].stats.lightIdx}</strong>
                  </div>
                  <div>
                    <span className="text-[#141414]/40 block">CORE ATMOSPHERE</span>
                    <strong className="text-xs text-[#141414]">{districtData[activeTab].stats.vibe}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Action Drawer inside Showcase */}
            <div className="mt-8 pt-4 border-t border-[#141414]/10 flex flex-wrap justify-between items-center gap-4">
              <span className="font-mono text-[10px] text-[#141414]/50">
                ACTIVE PIPELINE // METROPOLIS STABILIZER ACTIVE
              </span>
              <button 
                onClick={() => alert(`Synchronizing system focus to ${districtData[activeTab].en} GPS node...`)}
                className="bg-[#141414] hover:bg-[#E11D2D] text-white px-5 py-2 text-xs font-mono font-bold tracking-widest uppercase transition-all flex items-center gap-2"
              >
                STREETVIEW RADAR <ArrowRight size={12} />
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* --- SECTION 2: BENTO BOX PORTFOLIO (TRADITION MEETS TOMORROW) --- */}
      <section className="py-20 lg:py-28 border-b border-[#141414] bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#E11D2D] font-black block mb-2">
              KIKU APPARATUS STUDY
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-[#141414] uppercase leading-none">
              TOKYO ARTIFACT GRID
            </h2>
            <p className="mt-4 text-sm text-[#141414]/70 font-mono uppercase tracking-wider max-w-xl">
              A curated collection of micro-systems, architecture patterns, and design relics reflecting visual density and extreme efficiency.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Box 1: Large Feature Hero Image & Quote */}
            <div className="md:col-span-8 bg-white border-2 border-[#141414] p-6 shadow-[4px_4px_0px_#141414] flex flex-col justify-between relative overflow-hidden group min-h-[350px]">
              <div className="absolute right-0 top-0 bg-[#E11D2D] text-white px-3 py-1 font-mono text-[9px] uppercase tracking-widest">
                SYSTEM.REPORT / 09
              </div>
              
              <div className="max-w-md z-10">
                <span className="font-mono text-xs text-[#E11D2D] font-bold block mb-2">/ ARCHITECTURAL MASTERY</span>
                <h3 className="text-3xl font-extrabold tracking-tight text-[#141414] uppercase leading-tight mb-4">
                  Brutalist concrete monoliths standing tall against neon horizons.
                </h3>
                <p className="text-sm text-[#141414]/70 mb-4 leading-relaxed">
                  Tokyo’s infrastructure represents a spectacular tension: monolithic structural concrete from the Metabolism movement of the 1960s clashing elegantly with hyper-saturated commercial light arrays of the 21st century.
                </p>
              </div>

              {/* Mini visual list */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#141414]/10 font-mono text-[9px] uppercase z-10">
                <div>
                  <span className="text-[#141414]/40 block">METABOLISM</span>
                  <span className="font-bold">Nakagin Spirit</span>
                </div>
                <div>
                  <span className="text-[#141414]/40 block">SHADOW INDEX</span>
                  <span className="font-bold">Deep Grayscale</span>
                </div>
                <div>
                  <span className="text-[#141414]/40 block">INTERFACE</span>
                  <span className="font-bold">Fully Analog</span>
                </div>
              </div>

              {/* Very faint background graphic mimicking poster circle */}
              <div className="absolute -bottom-16 -right-16 w-60 h-60 rounded-full bg-[#E11D2D]/5 pointer-events-none" />
            </div>

            {/* Box 2: Vertical Red Badged Stats (The "Tower" Block) */}
            <div className="md:col-span-4 bg-[#E11D2D] text-white p-6 border-2 border-[#141414] shadow-[4px_4px_0px_#141414] flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-24 h-24 border-2 border-white/20 rounded-full pointer-events-none" />

              <div>
                <span className="font-mono text-[9px] tracking-widest bg-white text-[#E11D2D] px-2 py-0.5 font-bold uppercase w-fit block mb-6">
                  TOKYO METRO STATION STATUS
                </span>
                <span className="font-mono text-5xl font-black block tracking-tighter leading-none mb-1">
                  100%
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-white/80">
                  SYSTEM CONNECTIVITY
                </span>
                <p className="mt-4 text-xs text-white/90 leading-relaxed">
                  Operating with infinite throughput. Automatic delays represent less than 0.01% of annual schedule drift.
                </p>
              </div>

              <div className="pt-4 border-t border-white/20 mt-6 flex justify-between items-center font-mono text-[10px]">
                <span>CORE METRO API</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-white rounded-full animate-ping" />
                  <span>SYNCHRONIZED</span>
                </div>
              </div>
            </div>

            {/* Box 3: Technical Spec interactive card */}
            <div className="md:col-span-4 bg-white border-2 border-[#141414] p-6 shadow-[4px_4px_0px_#141414] flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] text-[#E11D2D] font-bold">SPEC: APPARATUS-X0</span>
                  <Cpu size={14} className="text-[#141414]/50" />
                </div>
                <h4 className="text-xl font-bold uppercase text-[#141414] mb-3">
                  METROPOLITAN WEATHER SHIELD
                </h4>
                <p className="text-xs text-[#141414]/70 leading-relaxed">
                  Heavy-duty water defense ratings integrated with tactical urban gear, protecting the modern wanderer from relentless typhoon rain patterns.
                </p>
              </div>

              <div className="mt-6">
                <div className="w-full bg-[#F4F3EF] h-1.5 border border-[#141414]/20 mb-2 overflow-hidden">
                  <div className="bg-[#E11D2D] h-full w-[85%]" />
                </div>
                <div className="flex justify-between font-mono text-[9px] text-[#141414]/50">
                  <span>SHIELD PERFORMANCE</span>
                  <span>85% OPTIMAL</span>
                </div>
              </div>
            </div>

            {/* Box 4: Big Bold Banner Graphic (No Image, Raw Typography & High Contrast) */}
            <div className="md:col-span-8 bg-[#141414] text-white p-8 border-2 border-[#141414] shadow-[4px_4px_0px_#E11D2D] flex flex-col justify-between relative overflow-hidden group">
              {/* Asymmetrical background styling stripes */}
              <div className="absolute right-0 top-0 h-full w-24 bg-[#E11D2D]/20 -skew-x-12 pointer-events-none" />
              <div className="absolute right-12 top-0 h-full w-4 bg-[#E11D2D]/30 -skew-x-12 pointer-events-none" />

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 bg-[#E11D2D]" />
                  <span className="font-mono text-[10px] tracking-widest text-[#E11D2D] font-bold uppercase">
                    KIKU CORE PRINCIPLE
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight uppercase max-w-xl">
                  NEON DREAMS. ANCIENT ROOTS.
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-white/70 max-w-md leading-relaxed">
                  We exist at the dynamic cross-section of futuristic technical utility clothing and ancient visual philosophy. Designed to move, built to endure.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center justify-between pt-4 border-t border-white/10">
                <span className="font-mono text-[10px] text-white/40">
                  EST. 1457 // TOKYO METROPOLITAN AUTHORITY APPROVED
                </span>
                <span className="font-mono text-xs font-bold text-[#E11D2D] flex items-center gap-1.5">
                  READ ARCHIVE <ExternalLink size={12} />
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION 3: TECHNICAL APPAREL APPARATUS (THE GEAR DECK) --- */}
      <section id="gear" className="py-20 lg:py-28 border-b border-[#141414] bg-[#EFEFEA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading & Filter Deck */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#E11D2D] font-black block mb-2">
                HIGH PERFORMANCE APPAREL
              </span>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-[#141414] uppercase leading-none">
                KIKU GEAR SYSTEM
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-2 border border-[#141414] p-1.5 bg-white shadow-[2px_2px_0px_#141414]">
              <button className="bg-[#141414] text-white px-4 py-1.5 text-xs font-mono font-bold uppercase">
                ALL APPARATUS
              </button>
              <button className="hover:bg-[#141414]/5 text-[#141414] px-4 py-1.5 text-xs font-mono font-bold uppercase transition-colors">
                OUTERWEAR
              </button>
              <button className="hover:bg-[#141414]/5 text-[#141414] px-4 py-1.5 text-xs font-mono font-bold uppercase transition-colors">
                CARRY SYSTEM
              </button>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gearItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white border-2 border-[#141414] p-4 flex flex-col justify-between shadow-[4px_4px_0px_#141414] hover:shadow-[8px_8px_0px_#141414] hover:-translate-y-1 transition-all duration-300 relative group"
              >
                {/* Diagonal Price tag Badge */}
                <div className="absolute top-4 right-4 z-10 bg-[#E11D2D] text-white font-mono text-xs font-bold px-2.5 py-1 shadow-[2px_2px_0px_#141414]">
                  {item.price}
                </div>

                <div>
                  {/* Photo area */}
                  <div className="relative h-72 w-full bg-[#141414] overflow-hidden border border-[#141414] mb-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#141414]/90 text-white font-mono text-[9px] px-2 py-0.5 border border-white/10">
                      {item.tag}
                    </div>
                  </div>

                  {/* Text specs */}
                  <div className="mb-4">
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-[10px] text-[#E11D2D] font-bold">
                        {item.id} // SECURE ID
                      </span>
                      <span className="font-mono text-[10px] text-[#141414]/40 font-bold uppercase">
                        {item.jpName}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold tracking-tight uppercase text-[#141414] mt-1">
                      {item.name}
                    </h3>
                  </div>

                  {/* Bullet Spec points mimicking high-end instruction manual */}
                  <ul className="space-y-1 border-t border-[#141414]/10 pt-3 mb-6">
                    {item.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-mono text-[10px] text-[#141414]/70">
                        <span className="w-1.5 h-1.5 bg-[#E11D2D]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Button */}
                <button 
                  onClick={() => setSelectedProduct(item)}
                  className="w-full bg-[#141414] hover:bg-[#E11D2D] text-white py-3 text-xs font-mono font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  ACQUIRE SPECIMEN <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- IN-MEMORY SPECIMEN DETAIL MODAL --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141414]/80 backdrop-blur-sm">
          <div className="bg-white border-4 border-[#141414] max-w-lg w-full p-6 relative shadow-[8px_8px_0px_#E11D2D]">
            
            {/* Close button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-[#141414] hover:bg-[#E11D2D] text-white w-8 h-8 flex items-center justify-center font-mono text-xs transition-colors"
            >
              X
            </button>

            <span className="font-mono text-xs text-[#E11D2D] font-bold block mb-1">
              APPARATUS PROTOCOL CONFIRMED
            </span>
            <h3 className="text-3xl font-black text-[#141414] uppercase mb-4">
              {selectedProduct.name}
            </h3>

            <div className="h-48 w-full bg-[#141414] overflow-hidden border-2 border-[#141414] mb-4">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover contrast-110"
              />
            </div>

            <div className="font-mono text-xs space-y-2 mb-6 text-[#141414]/80">
              <div className="flex justify-between border-b pb-1">
                <span>ESTIMATED VALUE:</span>
                <strong className="text-[#E11D2D]">{selectedProduct.price}</strong>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>APPARATUS ORIGIN:</span>
                <span>TOKYO LAB_09</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>SHIPPING GRID:</span>
                <span>GLOBAL COURIER SERVICE AVAILABLE</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => {
                  alert(`Specimen ${selectedProduct.name} successfully committed to virtual cart.`);
                  setSelectedProduct(null);
                }}
                className="flex-grow bg-[#E11D2D] hover:bg-[#141414] text-white py-3 text-xs font-mono font-bold uppercase tracking-widest transition-colors text-center"
              >
                PROCEED TO ALLOCATION
              </button>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="border-2 border-[#141414] hover:bg-[#141414]/5 px-4 text-xs font-mono font-bold uppercase tracking-widest text-[#141414]"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- SECTION 4: HIGH-CONTRAST NEWSLETTER SYSTEM --- */}
      <section id="subsystem" className="py-20 lg:py-28 border-b border-[#141414] bg-[#141414] text-white relative overflow-hidden">
        
        {/* Giant textured background stamp */}
        <div className="absolute right-[-10%] bottom-[-20%] text-[15rem] font-black text-white/[0.02] tracking-tighter uppercase select-none pointer-events-none">
          KIKU
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Newsletter Left Callout */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 bg-[#E11D2D] px-3 py-1 text-[10px] font-mono tracking-widest font-bold uppercase mb-4">
                COMMUNICATION GRID SUB-LINK
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter uppercase leading-none">
                SUBSCRIBE TO THE TOKYO TELEMETRY
              </h2>
              <p className="mt-4 text-white/70 max-w-md text-sm leading-relaxed">
                Receive visual dispatches, secret capsule drop alerts, tech apparel specs, and dynamic cultural studies directly from our central Shibuya node.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-6 text-xs font-mono text-white/50">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#E11D2D]" /> ZERO SPAM
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#E11D2D]" /> CAPSULE RELEASES
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#E11D2D]" /> ONLY UTILITY
                </span>
              </div>
            </div>

            {/* Newsletter Interactive Form Box */}
            <div className="lg:col-span-6">
              <div className="bg-[#F4F3EF] text-[#141414] p-6 sm:p-8 border-4 border-white shadow-[8px_8px_0px_#E11D2D]">
                
                {subscribed ? (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-[#E11D2D] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                      ✓
                    </div>
                    <h4 className="text-xl font-bold uppercase mb-2">SYSTEM BINDING COMPLETE</h4>
                    <p className="text-xs text-[#141414]/70 font-mono">
                      Your terminal is now subscribed to live Shibuya dispatch updates.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="space-y-4">
                    
                    <div className="border-b border-[#141414]/10 pb-2 mb-4">
                      <span className="font-mono text-[9px] text-[#141414]/40 block uppercase">SECURE REGISTRATION</span>
                      <strong className="text-xs uppercase text-[#141414]">KIKU COMMUNICATIONS SUBSYSTEM</strong>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase text-[#141414]/60 mb-2">
                        OPERATOR EMAIL ADDRESS
                      </label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. wanderer@neon-grid.jp"
                        className="w-full bg-white border-2 border-[#141414] p-3 text-xs font-mono text-[#141414] focus:outline-none focus:border-[#E11D2D] transition-colors"
                      />
                    </div>

                    <div className="flex items-start gap-2.5">
                      <input type="checkbox" id="consent" required className="mt-1 accent-[#E11D2D]" />
                      <label htmlFor="consent" className="text-[10px] text-[#141414]/70 font-mono leading-tight">
                        I consent to connect my terminal info with KIKU and agree to transmit telemetry dispatches to my system inbox.
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#141414] hover:bg-[#E11D2D] text-white py-3.5 text-xs font-mono font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                    >
                      BARRICADE ENTRY <Send size={12} />
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 5: BRUTALIST GRID FOOTER --- */}
      <footer className="bg-[#141414] text-white border-t border-white/10 relative">
        
        {/* Core Footer Hub links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand/Stamp column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E11D2D] flex items-center justify-center text-white font-black text-lg select-none">
                東
              </div>
              <span className="font-extrabold text-xl tracking-tighter">KIKU TOKYO</span>
            </div>
            <p className="text-xs text-white/50 font-mono uppercase leading-relaxed max-w-xs">
              Building sensory pipelines between vintage aesthetic matrices and future technical apparel standards.
            </p>
          </div>

          {/* Nav system Column */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase text-[#E11D2D] font-bold block">
              METROPOLIS NODES
            </span>
            <ul className="space-y-2 font-mono text-xs text-white/70">
              <li><a href="#explore" className="hover:text-[#E11D2D] transition-colors">SHIBUYA SECTOR 109</a></li>
              <li><a href="#explore" className="hover:text-[#E11D2D] transition-colors">SHINJUKU METROPOLIS ALLEY</a></li>
              <li><a href="#explore" className="hover:text-[#E11D2D] transition-colors">AKIHABARA ELECTRIC TOWER</a></li>
              <li><a href="#explore" className="hover:text-[#E11D2D] transition-colors">GINZA HERITAGE GALLERY</a></li>
            </ul>
          </div>

          {/* Social connections column */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase text-[#E11D2D] font-bold block">
              SYSTEM FEEDS
            </span>
            <ul className="space-y-2 font-mono text-xs text-white/70">
              <li><a href="#" className="hover:text-[#E11D2D] transition-colors flex items-center gap-2">INSTAGRAM <ExternalLink size={11} /></a></li>
              <li><a href="#" className="hover:text-[#E11D2D] transition-colors flex items-center gap-2">TWITTER/X <ExternalLink size={11} /></a></li>
              <li><a href="#" className="hover:text-[#E11D2D] transition-colors flex items-center gap-2">GITHUB ARCHIVE <ExternalLink size={11} /></a></li>
              <li><a href="#" className="hover:text-[#E11D2D] transition-colors flex items-center gap-2">METRO.EXE FEED <ExternalLink size={11} /></a></li>
            </ul>
          </div>

          {/* System status details column */}
          <div className="space-y-3 font-mono text-xs text-white/50">
            <span className="uppercase text-[#E11D2D] font-bold block">SYSTEM STATUS</span>
            <div className="space-y-1 text-[10px] uppercase">
              <div>SERVERS: <span className="text-[#E11D2D]">ONLINE // 100%</span></div>
              <div>VERSION: 4.9.2_NEON</div>
              <div>LATENCY: VIRTUAL 2ms</div>
              <div>LOC: TOKYO METROPOLIS</div>
            </div>
          </div>

        </div>

        {/* Decorative Fine-Print bar */}
        <div className="border-t border-white/5 py-6 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/40">
            <div>
              &copy; {new Date().getFullYear()} KIKU TOKYO. ALL SPECIFICATIONS AND INTELLECTUAL CODES ARE STRICTLY CONFIDENTIAL.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#E11D2D] transition-colors">PRIVACY_CORE.TXT</a>
              <span>•</span>
              <a href="#" className="hover:text-[#E11D2D] transition-colors">TERMS_SHIELD.SYS</a>
            </div>
          </div>
        </div>

      </footer>

    </div>
  );
}