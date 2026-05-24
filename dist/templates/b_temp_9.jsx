import React, { useState, useEffect } from 'react';
import { Play, Menu, X, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';

// --- Assets ---
// Using high-quality Unsplash images that match the passionate, dramatic, and vintage feel of the inspiration.
const IMAGES = {
  heroDancer: "https://images.unsplash.com/photo-1549487228-568ebba68df5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // Dancer in red
  fanOrnate: "https://images.unsplash.com/photo-1615671524827-c1fe3973cb45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Fan
  rosePetals: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Roses
  bwDancer1: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // B&W
  bwDancer2: "https://images.unsplash.com/photo-1518834107812-6a364724c522?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // B&W face/hands
  polkaDot: "https://images.unsplash.com/photo-1565593683838-89c566fbca3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Dress details
  details1: "https://images.unsplash.com/photo-1469530467727-463e263ab26f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Shoes/details
  details2: "https://images.unsplash.com/photo-1504609774528-6949db2000ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  details3: "https://images.unsplash.com/photo-1533147670608-2a2f9776d3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
};

// --- Theme Colors ---
const theme = {
  bgCream: '#f3efe9',
  bgRed: '#7b1113',
  bgDarkRed: '#5a0a0e',
  textDark: '#1a1a1a',
  textLight: '#f3efe9',
};

// --- Reusable Components ---

const SectionHeading = ({ number, title, dark = false }) => (
  <div className={`flex items-center space-x-4 mb-12 ${dark ? 'text-[#f3efe9]' : 'text-[#7b1113]'}`}>
    <span className="font-serif text-3xl md:text-5xl tracking-widest font-light">[{number}]</span>
    <h2 className="font-serif text-4xl md:text-6xl tracking-widest uppercase">{title}</h2>
  </div>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'History', id: 'history' },
    { name: 'About Dance', id: 'about' },
    { name: 'Polka Dot', id: 'style' },
    { name: 'Details', id: 'details' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#f3efe9]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-sm font-serif tracking-widest cursor-pointer text-[#7b1113]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          RU | EN
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm tracking-widest lowercase font-serif hover:text-[#7b1113] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#7b1113] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-[#7b1113]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-[#f3efe9] z-40 transition-transform duration-500 flex flex-col items-center justify-center space-y-8 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-3xl tracking-widest lowercase font-serif text-[#7b1113]"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

// --- Main Page Sections ---

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-4">
    {/* Big Background Text */}
    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none overflow-hidden">
      <h1 className="text-[20vw] font-serif text-[#7b1113] whitespace-nowrap tracking-tighter leading-none">
        FLAMENCO
      </h1>
    </div>

    {/* Main Content */}
    <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto w-full">
      
      {/* Title */}
      <div className="relative w-full flex justify-center mb-8 md:mb-0">
        <h1 className="text-7xl md:text-[12rem] font-serif text-[#7b1113] tracking-wider leading-none z-20 mix-blend-multiply flex items-center">
          F<span className="inline-block w-8 md:w-16"></span>MENCO
          {/* Play Button matching inspiration */}
          <div className="absolute right-0 md:right-10 top-0 md:top-10 w-16 h-16 md:w-24 md:h-24 rounded-full border border-[#7b1113] flex items-center justify-center cursor-pointer hover:bg-[#7b1113] hover:text-[#f3efe9] transition-all text-[#7b1113]">
             <Play className="ml-1" size={32} />
          </div>
        </h1>
      </div>

      <p className="font-serif italic text-sm md:text-lg text-[#7b1113] text-center mb-8 z-20">
        [passion and soul from Andalusia]
      </p>

      {/* Center Image overlapping text slightly */}
      <div className="relative w-full max-w-2xl aspect-[4/3] md:aspect-[16/9] -mt-10 md:-mt-32 z-10">
        <img 
          src={IMAGES.heroDancer} 
          alt="Flamenco Dancer" 
          className="w-full h-full object-cover rounded-sm shadow-2xl sepia-[.2] contrast-125"
        />
        {/* Decorative elements simulating roses from original */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')] bg-cover mix-blend-multiply opacity-80 rounded-full blur-[2px]"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')] bg-cover mix-blend-multiply opacity-60 rounded-full blur-[4px]"></div>
      </div>
    </div>
  </section>
);

const HistorySection = () => (
  <section id="history" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
    <SectionHeading number="1" title="History" />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8 font-serif text-[#1a1a1a] text-lg leading-relaxed md:pr-12">
        <p>
          The flamenco genre emerged at the end of the 18th century in cities 
          and agrarian towns of Baja Andalusia.
        </p>
        <p className="pl-8 border-l-2 border-[#7b1113] italic text-xl">
          It appeared as a modern art form from the convergence of the urban subaltern groups, 
          Gitano communities, and journeyman of Andalusia that formed the marginalized Flamenco 
          artistic working class who established Flamenco as a singular art form, marked from 
          the beginning by the Gitano brand.
        </p>
        <p>
          Andalusia was the origin and cradle of the early Flamenco cantaores and of the three 
          or four dozen Gitano families who created and cultivated Flamenco.
        </p>
      </div>
      
      <div className="relative">
        <img 
          src={IMAGES.fanOrnate} 
          alt="Ornate Flamenco Fan" 
          className="w-full object-cover rounded-t-[50%] shadow-xl"
        />
        <div className="absolute top-1/2 -left-12 w-24 h-24 bg-[#7b1113] rounded-full mix-blend-multiply opacity-40 blur-xl"></div>
      </div>
    </div>
  </section>
);

const AboutDanceSection = () => (
  <section id="about" className="bg-[#7b1113] text-[#f3efe9] py-24 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <SectionHeading number="2" title="About Dance" dark />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
        
        {/* Left text column */}
        <div className="lg:col-span-4 space-y-12 font-serif">
          <p className="text-xl italic">
            Flamenco is a perfect way to channel emotions and above all, to generate them.
          </p>
          
          {/* Small B&W image inset */}
          <img 
            src={IMAGES.bwDancer1} 
            alt="Dancer Silhouette" 
            className="w-full h-64 object-cover grayscale contrast-150"
          />
        </div>

        {/* Center/Right text & large image */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div className="space-y-8 font-serif leading-relaxed text-sm md:text-base">
             <p>
              In fact the performers have a great capacity for expression so they will transmit 
              all their emotions through body language, encompassing passion, anger, sadness, 
              pain, fear and joy.
            </p>
            <p>
              Thus creating an indestructible connection with the audience where you will feel 
              immediately involved in this "set" of emotions. The intricate footwork, the precise 
              hand movements, and the intense facial expressions are all part of this visceral language.
            </p>
          </div>
          
          <img 
            src={IMAGES.bwDancer2} 
            alt="Dancer Expression" 
            className="w-full h-[500px] object-cover grayscale contrast-125 rounded-tl-[40px] rounded-br-[40px]"
          />
        </div>
      </div>
    </div>
  </section>
);

const PolkaDotSection = () => (
  <section id="style" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#f3efe9]">
    <SectionHeading number="3" title="Why Polka Dot?" />
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="md:col-span-1 space-y-6 font-serif text-[#1a1a1a]">
        <p className="italic font-semibold border-b border-[#7b1113] pb-4">
          The first polka dot appeared in the 18th century as a printing error and, at first, 
          they were not very successful.
        </p>
        <p className="text-sm leading-relaxed">
          The origin of the "traje de flamenca" (flamenco dress) goes back to the late 19th and early 20th 
          centuries. Peasant women, mostly of Roma descent, wore simple dresses, often with ruffles, adorned with an 
          apron to attend the cattle fairs in Andalusia. 
        </p>
        <p className="text-sm leading-relaxed">
           Over time, the distinctive polka dot (lunares) pattern, initially seen as a flaw in fabric printing, 
           was embraced by these women for its striking contrast and playful energy, eventually becoming the 
           iconic symbol of Flamenco fashion worldwide.
        </p>
      </div>
      
      <div className="md:col-span-2 h-[400px] md:h-auto">
        <img 
          src={IMAGES.polkaDot} 
          alt="Polka Dot Dresses" 
          className="w-full h-full object-cover object-top sepia-[.1]"
        />
      </div>
    </div>
  </section>
);

const DetailsSection = () => (
  <section id="details" className="bg-[#5a0a0e] text-[#f3efe9] py-24 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <SectionHeading number="4" title="Details" dark />
      
      <p className="font-serif italic mb-12 max-w-xl">
        There are a number of details that distinguish Flamenco from other dance styles.
      </p>

      {/* Masonry-style Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div className="space-y-4">
          <img src={IMAGES.details1} alt="Detail" className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          <p className="text-xs font-serif uppercase tracking-widest text-[#f3efe9]/70">01. Footwork</p>
        </div>
        
        <div className="space-y-4 md:mt-12">
          <img src={IMAGES.bwDancer1} alt="Detail" className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          <p className="text-xs font-serif uppercase tracking-widest text-[#f3efe9]/70">02. Posture</p>
        </div>
        
        <div className="space-y-4">
          <img src={IMAGES.details2} alt="Detail" className="w-full h-48 md:h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          <p className="text-xs font-serif uppercase tracking-widest text-[#f3efe9]/70">03. The Dress</p>
        </div>
        
        <div className="space-y-4 md:mt-24">
          <img src={IMAGES.details3} alt="Detail" className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          <p className="text-xs font-serif uppercase tracking-widest text-[#f3efe9]/70">04. The Castanets</p>
        </div>
      </div>
      
      <div className="mt-24 flex justify-center">
         <button className="border border-[#f3efe9] px-12 py-4 font-serif uppercase tracking-widest hover:bg-[#f3efe9] hover:text-[#5a0a0e] transition-colors flex items-center group">
           Discover Exhibition
           <ArrowRight className="ml-4 transform group-hover:translate-x-2 transition-transform" size={20} />
         </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1a1a1a] text-[#f3efe9] py-16 px-6 md:px-12 text-center md:text-left">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
      <div>
        <h2 className="font-serif text-3xl tracking-widest uppercase mb-4">Flamenco</h2>
        <p className="text-sm text-gray-400 font-serif italic">Global Cultural Exhibition 2026</p>
      </div>
      
      <div className="flex justify-center space-x-8">
        <a href="#" className="hover:text-[#7b1113] transition-colors"><Instagram /></a>
        <a href="#" className="hover:text-[#7b1113] transition-colors"><Facebook /></a>
        <a href="#" className="hover:text-[#7b1113] transition-colors"><Twitter /></a>
      </div>
      
      <div className="md:text-right font-serif text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Alma Andaluza.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  // Inject Google Fonts for the specific editorial look
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    // Apply a base font, override with Playfair for headings via utility classes
    <div className="font-['Inter',sans-serif] bg-[#f3efe9] text-[#1a1a1a] selection:bg-[#7b1113] selection:text-[#f3efe9]">
      <style dangerouslySetInnerHTML={{__html: `
        .font-serif { font-family: 'Playfair Display', serif; }
        html { scroll-behavior: smooth; }
        /* Custom scrollbar for aesthetic */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f3efe9; }
        ::-webkit-scrollbar-thumb { background: #7b1113; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #5a0a0e; }
      `}} />
      
      <NavBar />
      
      <main>
        <HeroSection />
        <HistorySection />
        <AboutDanceSection />
        <PolkaDotSection />
        <DetailsSection />
      </main>

      <Footer />
    </div>
  );
}
10