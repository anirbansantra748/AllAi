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
