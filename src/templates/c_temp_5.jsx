import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowDown, ArrowRight, Dribbble, Instagram, Twitter, MousePointer2 } from 'lucide-react';

// --- API Configuration for Image Generation ---
const apiKey = ""; // Provided by execution environment

const generateImage = async (prompt) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`;
  const payload = {
    instances: { prompt: prompt },
    parameters: { sampleCount: 1 }
  };

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const retries = [1000, 2000, 4000, 8000, 16000];

  for (let i = 0; i < retries.length; i++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const result = await response.json();
      if (result.predictions && result.predictions[0]) {
        return `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
      }
    } catch (error) {
      if (i === retries.length - 1) throw error;
      await delay(retries[i]);
    }
  }
  return null;
};

// --- Custom Cursor Component ---
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const updateHoverState = (e) => {
      const target = e.target;
      setIsHovering(target.tagName.toLowerCase() === 'button' || 
                    target.tagName.toLowerCase() === 'a' || 
                    target.closest('button') || 
                    target.closest('a') ||
                    target.classList.contains('clickable'));
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out hidden md:block mix-blend-difference"
        style={{ left: `${position.x}px`, top: `${position.y}px`, transform: `translate(-50%, -50%) scale(${isHovering ? 3 : 1})` }}
      />
    </>
  );
};

// --- Navigation Overlay Component ---
const MenuOverlay = ({ isOpen, closeMenu, navigate }) => {
  return (
    <div className={`fixed inset-0 bg-[#111] text-[#EBD535] z-50 flex flex-col justify-center px-12 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <button onClick={closeMenu} className="absolute top-12 right-12 text-[#EBD535] hover:rotate-90 transition-transform duration-300">
        <X size={48} strokeWidth={1} />
      </button>
      
      <nav className="flex flex-col space-y-6 text-5xl md:text-8xl font-black uppercase tracking-tighter">
        {['Home', 'Portfolio', 'Contact'].map((item) => (
          <button 
            key={item} 
            onClick={() => navigate(item.toLowerCase())}
            className="text-left hover:translate-x-8 transition-transform duration-300 w-max hover:text-white"
          >
            {item}
          </button>
        ))}
      </nav>
      
      <div className="absolute bottom-12 left-12 flex space-x-8 text-sm tracking-widest font-bold">
        <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
        <a href="#" className="hover:text-white transition-colors">DRIBBBLE</a>
        <a href="#" className="hover:text-white transition-colors">BEHANCE</a>
      </div>
    </div>
  );
};

// --- Page: Home ---
const HomePage = ({ navigate }) => {
  const [heroImage, setHeroImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchImage = async () => {
      try {
        const prompt = "A highly detailed, ultra-realistic 3D render of a solid glossy black banana melting and dripping fluid. It is placed perfectly in the center against a completely solid, vibrant bright yellow (#EBD535) background. Minimalist modern art aesthetic, studio lighting, sharp focus.";
        const imgUrl = await generateImage(prompt);
        if (isMounted && imgUrl) {
          setHeroImage(imgUrl);
        }
      } catch (error) {
        console.error("Failed to generate image", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchImage();
    return () => { isMounted = false; };
  }, []);

  const scrollToWork = () => {
    document.getElementById('featured-work').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero Section (Matches Inspiration) */}
      <section className="relative w-full h-screen bg-[#EBD535] text-[#111] overflow-hidden flex flex-col justify-between p-6 md:p-12">
        {/* Top Header */}
        <header className="flex justify-between items-center z-10 w-full relative">
          <div className="w-12 h-12 flex items-center justify-start opacity-0"></div> {/* Spacer for balance */}
          <h1 className="font-bold tracking-[0.2em] text-sm md:text-base uppercase absolute left-1/2 transform -translate-x-1/2">
            Web-Design Studio
          </h1>
          <button className="flex flex-col gap-1.5 w-8 items-end clickable group">
            <span className="w-full h-0.5 bg-[#111] group-hover:w-1/2 transition-all"></span>
            <span className="w-3/4 h-0.5 bg-[#111] group-hover:w-full transition-all"></span>
            <span className="w-full h-0.5 bg-[#111] group-hover:w-3/4 transition-all"></span>
          </button>
        </header>

        {/* Center Canvas */}
        <div className="absolute inset-0 flex justify-between items-center px-6 md:px-12 pointer-events-none">
          {/* Left Vertical Text */}
          <div className="flex text-lg md:text-2xl font-black leading-[0.8] tracking-tighter">
            <div className="flex flex-col mr-2">
              <span>B</span><span>N</span><span>A</span><span>Z</span>
            </div>
            <div className="flex flex-col mt-4">
              <span>A</span><span>A</span><span>N</span><span>Z</span>
            </div>
          </div>

          {/* Central 3D Asset */}
          <div className="relative w-full max-w-2xl lg:max-w-4xl flex justify-center items-center pointer-events-auto z-0 mix-blend-multiply">
            {isLoading ? (
              <div className="w-full aspect-video flex flex-col items-center justify-center space-y-4">
                <div className="w-64 h-64 border-4 border-[#111] border-t-transparent rounded-full animate-spin"></div>
                <p className="font-bold tracking-widest text-sm animate-pulse">RENDERING 3D ASSET...</p>
              </div>
            ) : heroImage ? (
              <img src={heroImage} alt="Melting Black Banana" className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700 ease-out drop-shadow-2xl" />
            ) : (
              /* Fallback SVG if API fails */
              <svg viewBox="0 0 200 100" className="w-full h-auto max-w-lg fill-black drop-shadow-2xl">
                <path d="M10,80 C30,90 80,95 100,95 C140,95 180,70 190,30 C195,10 185,5 180,10 C170,20 160,35 150,45 C130,65 100,75 70,70 C40,65 20,40 15,20 C10,0 0,5 5,20 C8,40 5,60 10,80 Z" />
                <circle cx="80" cy="98" r="3" />
                <circle cx="120" cy="97" r="4" />
                <circle cx="60" cy="96" r="2" />
              </svg>
            )}
          </div>

          {/* Right Pagination / Decor */}
          <div className="flex flex-col gap-4 items-center">
            <span className="text-xs font-bold">1</span>
            <span className="text-xs font-bold">-</span>
            <div className="w-1.5 h-1.5 rounded-full border-2 border-[#111]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
          </div>
        </div>

        {/* Bottom Footer Area */}
        <footer className="flex justify-between items-end z-10 w-full">
          <div className="flex gap-4">
            <a href="#" className="clickable hover:-translate-y-1 transition-transform"><span className="font-bold text-lg">Bē</span></a>
            <a href="#" className="clickable hover:-translate-y-1 transition-transform"><span className="font-bold text-lg">♥</span></a>
          </div>
          
          <button onClick={scrollToWork} className="flex flex-col items-center clickable group absolute left-1/2 transform -translate-x-1/2 bottom-6 md:bottom-12">
            <div className="w-6 h-10 border-2 border-[#111] rounded-full flex justify-center p-1 group-hover:bg-[#111] transition-colors">
              <div className="w-1 h-2 bg-[#111] rounded-full group-hover:bg-[#EBD535] animate-bounce"></div>
            </div>
            <span className="text-[10px] font-bold tracking-[0.3em] mt-4 uppercase group-hover:font-black transition-all">View Portfolio</span>
          </button>

          <div className="w-8 h-8">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#111] transform -rotate-45">
                <path d="M4 13c3.5-2 8-2 10 2a9.5 9.5 0 0 1 8-11c-2.5 4-1 9-3 12-4 5-11 5-15 0-1.5-2-1.5-3 0-3z"/>
             </svg>
          </div>
        </footer>
      </section>

      {/* Services Section */}
      <section className="bg-[#111] text-[#EBD535] py-24 md:py-48 px-6 md:px-12 border-t-[16px] border-[#111]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none flex-1">
            We Peel <br/><span className="text-white">Back The</span> <br/>Ordinary.
          </h2>
          <div className="flex-1 max-w-lg mt-4 md:mt-0">
            <p className="text-lg md:text-xl font-medium mb-12 opacity-80 leading-relaxed">
              Bananz is a premier digital design studio focused on creating unconventional, high-impact web experiences. We blend bold aesthetics with flawless engineering.
            </p>
            <div className="flex flex-col gap-6">
              {['Creative Direction', 'Web Development', '3D Motion Design', 'Brand Identity'].map((service, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-[#EBD535]/30 pb-4 group cursor-pointer hover:border-[#EBD535] transition-colors">
                  <span className="text-2xl font-bold uppercase">{service}</span>
                  <ArrowRight className="transform -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section id="featured-work" className="bg-[#EBD535] text-[#111] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Selected <br/>Works</h2>
            <button onClick={() => navigate('portfolio')} className="text-sm font-bold tracking-widest uppercase border-b-2 border-[#111] pb-1 hover:pr-4 transition-all">
              See All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Project 1 */}
            <div className="group cursor-pointer clickable">
              <div className="aspect-[4/5] bg-[#111] overflow-hidden mb-6 relative flex items-center justify-center">
                 <div className="w-3/4 h-3/4 bg-[#EBD535] rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-700"></div>
                 <div className="absolute inset-0 flex items-center justify-center mix-blend-difference">
                    <span className="text-[#EBD535] text-9xl font-black tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110 transform">01</span>
                 </div>
              </div>
              <h3 className="text-2xl font-black uppercase">Acid Drops</h3>
              <p className="text-sm font-bold opacity-60 tracking-widest mt-1">E-COMMERCE / 3D</p>
            </div>
            
            {/* Project 2 */}
            <div className="group cursor-pointer clickable md:mt-24">
              <div className="aspect-[4/5] bg-white overflow-hidden mb-6 relative flex items-center justify-center border-4 border-[#111]">
                 <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#111_10px,#111_20px)] opacity-10 group-hover:scale-150 transition-transform duration-1000 ease-in-out"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#111] text-9xl font-black tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity duration-500">02</span>
                 </div>
              </div>
              <h3 className="text-2xl font-black uppercase">Neo Brutal</h3>
              <p className="text-sm font-bold opacity-60 tracking-widest mt-1">AGENCY PORTFOLIO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Page: Portfolio ---
const PortfolioPage = () => {
  const projects = [
    { title: 'Acid Drops', type: 'E-COMMERCE', color: 'bg-[#111]' },
    { title: 'Neo Brutal', type: 'PORTFOLIO', color: 'bg-white border-4 border-[#111]' },
    { title: 'Cyber Pulse', type: 'WEB APP', color: 'bg-blue-600' },
    { title: 'Void Sync', type: '3D EXPERIENCE', color: 'bg-zinc-900' },
  ];

  return (
    <div className="min-h-screen bg-[#111] text-[#EBD535] pt-32 pb-24 px-6 md:px-12 w-full animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 md:mb-24 leading-none">
          Our <br/><span className="text-white">Archive.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 md:gap-x-16">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer clickable">
              <div className={`aspect-video ${p.color} overflow-hidden mb-6 relative flex items-center justify-center group-hover:rounded-3xl transition-all duration-500`}>
                 <span className={`text-6xl font-black tracking-tighter opacity-20 mix-blend-difference group-hover:scale-150 transition-transform duration-700 ${p.color === 'bg-white border-4 border-[#111]' ? 'text-black' : 'text-white'}`}>
                    0{i+1}
                 </span>
              </div>
              <div className="flex justify-between items-end">
                <h3 className="text-3xl font-black uppercase text-white">{p.title}</h3>
                <p className="text-sm font-bold tracking-widest">{p.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Page: Contact ---
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#EBD535] text-[#111] pt-32 pb-24 px-6 md:px-12 w-full animate-in fade-in duration-700 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-16 leading-none">
          Let's <br/>Talk.
        </h1>
        
        <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <label className="text-sm font-bold tracking-widest uppercase mb-4 block">Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b-4 border-[#111] py-4 text-2xl font-bold focus:outline-none placeholder:text-[#111]/30 focus:border-white transition-colors" />
            </div>
            <div className="flex-1">
              <label className="text-sm font-bold tracking-widest uppercase mb-4 block">Email</label>
              <input type="email" placeholder="hello@example.com" className="w-full bg-transparent border-b-4 border-[#111] py-4 text-2xl font-bold focus:outline-none placeholder:text-[#111]/30 focus:border-white transition-colors" />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-bold tracking-widest uppercase mb-4 block">Project Details</label>
            <textarea rows="4" placeholder="Tell us about your idea..." className="w-full bg-transparent border-b-4 border-[#111] py-4 text-2xl font-bold focus:outline-none placeholder:text-[#111]/30 focus:border-white transition-colors resize-none"></textarea>
          </div>
          
          <button className="bg-[#111] text-[#EBD535] py-6 px-12 text-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#111] transition-colors self-start clickable">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Inject Custom Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const navigate = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#EBD535] font-['Inter',sans-serif] selection:bg-[#111] selection:text-[#EBD535] overflow-x-hidden">
      {/* Global Typography Overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        h1, h2, h3, .font-black { font-family: 'Syne', sans-serif; }
        body { cursor: none; }
        a, button, input, textarea { cursor: none; }
      `}} />

      <CustomCursor />
      
      {/* Persistent Global Header Menu Toggle */}
      <button 
        onClick={() => setMenuOpen(true)}
        className="fixed top-6 left-6 md:top-12 md:left-12 z-40 text-[#111] mix-blend-difference clickable hover:scale-110 transition-transform"
      >
        <Menu size={32} strokeWidth={2.5} color={menuOpen ? 'transparent' : '#111'} />
      </button>

      <MenuOverlay isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} navigate={navigate} />

      {/* Main Content Router */}
      <main className="w-full">
        {activePage === 'home' && <HomePage navigate={navigate} />}
        {activePage === 'portfolio' && <PortfolioPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer (Visible on all pages except Hero top section) */}
      {activePage !== 'home' && (
        <footer className="bg-[#111] text-[#EBD535] py-12 px-6 md:px-12 border-t border-[#EBD535]/20 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="font-black text-2xl tracking-tighter uppercase">Bananz Studio</div>
           <div className="flex gap-8 text-sm font-bold tracking-widest">
              <a href="#" className="hover:text-white transition-colors clickable">IN</a>
              <a href="#" className="hover:text-white transition-colors clickable">BE</a>
              <a href="#" className="hover:text-white transition-colors clickable">DR</a>
           </div>
           <div className="text-xs font-bold opacity-50 uppercase tracking-widest">
             © 2026 All Rights Reserved
           </div>
        </footer>
      )}
    </div>
  );
}
6