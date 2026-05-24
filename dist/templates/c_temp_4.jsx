import React, { useState, useEffect } from 'react';
import { ArrowDownCircle, Search, Menu, ChevronLeft, ChevronRight, ArrowRight, X } from 'lucide-react';

// --- DATA ---
const HERO_SLIDES = [
  {
    id: 1,
    title: "Minimalis",
    subtitle: "— simo",
    description: "We aim to deliver a <span class='underline decoration-gray-500 underline-offset-4'>diverse understanding of minimalism</span> in many areas.",
    image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 2,
    title: "Brutalism",
    subtitle: "— form",
    description: "Exploring the raw, unpolished beauty of <span class='underline decoration-gray-500 underline-offset-4'>architectural monoliths</span> and spaces.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 3,
    title: "Shadows",
    subtitle: "— depth",
    description: "The interplay of light and absence, creating a <span class='underline decoration-gray-500 underline-offset-4'>profound narrative</span> in fashion.",
    image: "https://images.unsplash.com/photo-1542272201-b1ca555f8505?auto=format&fit=crop&q=80&w=1600",
  }
];

const ARTICLES = [
  { title: "The Void Collection", category: "Fashion", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" },
  { title: "Concrete Dreams", category: "Architecture", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
  { title: "Monochrome Reality", category: "Art", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
  { title: "Silent Spaces", category: "Interior", img: "https://images.unsplash.com/photo-1600607687920-4e2a09c26f07?auto=format&fit=crop&q=80&w=800" }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  // --- COMPONENTS ---

  const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-12 flex justify-between items-center mix-blend-difference text-white">
      <div 
        className="text-xl font-light tracking-widest cursor-pointer hover:text-[#cda270] transition-colors"
        onClick={() => setCurrentPage('home')}
      >
        1/
      </div>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-[0.2em] font-light text-gray-300">
        {['About', 'Sponsors', 'Magazine', 'Contact'].map((item) => (
          <button 
            key={item} 
            onClick={() => setCurrentPage(item.toLowerCase())}
            className={`hover:text-white transition-colors ${currentPage === item.toLowerCase() ? 'text-white border-b border-[#cda270] pb-1' : ''}`}
          >
            {item}
          </button>
        ))}
        <div className="flex gap-6 items-center ml-8">
          <button className="hover:text-white"><Search size={18} strokeWidth={1.5} /></button>
          <button className="hover:text-white"><Menu size={20} strokeWidth={1.5} /></button>
        </div>
      </div>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden flex gap-4">
        <button onClick={() => setIsMenuOpen(true)} className="hover:text-[#cda270]"><Menu size={24} strokeWidth={1.5} /></button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#121212] z-50 flex flex-col p-8">
          <div className="flex justify-between items-center mb-16">
            <div className="text-xl font-light tracking-widest">1/</div>
            <button onClick={() => setIsMenuOpen(false)}><X size={32} strokeWidth={1} /></button>
          </div>
          <div className="flex flex-col gap-8 text-2xl font-light tracking-widest">
            {['Home', 'About', 'Sponsors', 'Magazine', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => {
                  setCurrentPage(item.toLowerCase() === 'home' ? 'home' : item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => {
    const slide = HERO_SLIDES[currentSlide];
    
    return (
      <section className="relative h-screen w-full overflow-hidden bg-[#151515]">
        {/* Vertical Left Socials */}
        <div className="hidden md:flex absolute left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left gap-12 text-[10px] uppercase tracking-[0.3em] font-light text-gray-500 z-20 w-64 items-center justify-start">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>

        {/* Vertical Right Pagination */}
        <div className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-8 text-[10px] tracking-[0.2em] font-light text-gray-500 z-20 items-center">
          <span className="text-white">0{currentSlide + 1}</span>
          <div className="w-px h-16 bg-gray-700"></div>
          <span>0{HERO_SLIDES.length}</span>
        </div>

        {/* Main Content Area */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start">
          
          {/* Image Container */}
          <div className="absolute w-full md:w-[55%] h-[60vh] md:h-[80vh] md:left-[15%] top-1/2 -translate-y-1/2 opacity-40 md:opacity-100 transition-opacity duration-1000">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover object-center grayscale-[0.8] contrast-125 brightness-75 transition-all duration-1000"
            />
            {/* Vignette overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#151515] via-transparent to-[#151515] md:from-transparent md:via-transparent md:to-[#151515]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-[#151515]"></div>
          </div>

          {/* Hollow Gold Rectangle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-[90%] -translate-y-1/2 w-16 md:w-20 h-48 md:h-[22rem] border-[3px] border-[#cda270] z-20 mix-blend-overlay opacity-80 pointer-events-none"></div>

          {/* Typography */}
          <div className="relative z-30 ml-8 md:ml-[45%] flex flex-col justify-center">
            <h1 className="text-6xl md:text-[5.5rem] font-extralight text-gray-100 leading-tight tracking-wide mix-blend-difference">
              {slide.title} <br />
              <span className="text-5xl md:text-[4.5rem]">{slide.subtitle}</span>
            </h1>
            <p 
              className="mt-8 text-xs md:text-sm text-gray-400 max-w-xs md:max-w-sm leading-relaxed font-light tracking-wide"
              dangerouslySetInnerHTML={{ __html: slide.description }}
            ></p>
          </div>
        </div>

        {/* Bottom Left Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-16 left-8 md:left-12 z-20">
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="text-gray-500 hover:text-white transition-colors"
          >
            <ArrowDownCircle size={32} strokeWidth={1} />
          </button>
        </div>

        {/* Bottom Right Info & Controls */}
        <div className="absolute bottom-8 md:bottom-16 left-8 md:left-[45%] flex flex-col md:flex-row gap-8 md:gap-24 z-20">
          <div className="flex flex-col gap-2">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-300 font-semibold">Office</h3>
            <p className="text-[10px] text-gray-500 tracking-wider">Sandekra 240<br/>1396 Billingstad</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-300 font-semibold">Get in touch</h3>
            <p className="text-[10px] text-gray-500 tracking-wider">T. +0085 3456 2188<br/>E. info@baygulov.com</p>
          </div>
          
          {/* Slider Controls */}
          <div className="absolute right-8 md:right-auto md:relative flex gap-4 items-end pb-1">
            <button onClick={prevSlide} className="text-gray-500 hover:text-white transition-colors"><ChevronLeft size={20} strokeWidth={1.5}/></button>
            <button onClick={nextSlide} className="text-gray-500 hover:text-white transition-colors"><ChevronRight size={20} strokeWidth={1.5}/></button>
          </div>
        </div>
      </section>
    );
  };

  const EditorialSection = () => (
    <section className="w-full bg-[#121212] py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-gray-800 pb-8">
          <h2 className="text-3xl md:text-5xl font-extralight tracking-wider text-gray-200">Latest <br/> <span className="text-gray-500">Editorials</span></h2>
          <button className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#cda270] hover:text-white transition-colors">
            View All <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {ARTICLES.slice(0, 2).map((article, idx) => (
            <div key={idx} className={`group cursor-pointer ${idx === 1 ? 'md:mt-32' : ''}`}>
              <div className="overflow-hidden relative h-[500px] mb-6">
                <div className="absolute inset-0 bg-[#121212] opacity-20 group-hover:opacity-0 transition-opacity z-10"></div>
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">{article.category}</p>
              <h3 className="text-2xl font-light text-gray-200 group-hover:text-[#cda270] transition-colors">{article.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // --- PAGES ---

  const HomePage = () => (
    <div className="animate-fade-in">
      <Hero />
      <EditorialSection />
    </div>
  );

  const MagazinePage = () => (
    <div className="min-h-screen pt-40 px-6 md:px-24 bg-[#151515] animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extralight mb-4 text-gray-100">Archive</h1>
        <p className="text-sm text-gray-500 tracking-widest font-light mb-24 max-w-md">
          A curated selection of thoughts, visual essays, and design studies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-32">
          {ARTICLES.map((article, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden relative h-[400px] mb-6 border border-gray-800">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#cda270] mb-2">{article.category}</p>
                  <h3 className="text-xl font-light text-gray-200">{article.title}</h3>
                </div>
                <ArrowRight size={18} className="text-gray-600 group-hover:text-white transition-colors -rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen pt-40 px-6 md:px-24 bg-[#121212] flex items-center animate-fade-in">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h1 className="text-5xl md:text-7xl font-extralight mb-8 text-gray-100">Let's <br/><span className="text-gray-600">Connect</span></h1>
          <p className="text-sm text-gray-400 tracking-wide font-light mb-16 max-w-md leading-relaxed">
            Whether you have a project in mind, an editorial pitch, or simply wish to discuss the nuances of brutalist design, we are here.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">General Inquiries</h3>
              <p className="text-sm text-gray-300 font-light tracking-wide hover:text-[#cda270] cursor-pointer">info@minimalis-simo.com</p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">Headquarters</h3>
              <p className="text-sm text-gray-300 font-light tracking-wide">Sandekra 240, 1396 Billingstad<br/>Oslo, Norway</p>
            </div>
          </div>
        </div>

        <form className="space-y-12 mt-12 md:mt-0" onSubmit={(e) => e.preventDefault()}>
          <div className="relative border-b border-gray-700 pb-2">
            <input type="text" placeholder="YOUR NAME" className="w-full bg-transparent text-sm font-light tracking-widest text-white placeholder-gray-600 focus:outline-none" />
          </div>
          <div className="relative border-b border-gray-700 pb-2">
            <input type="email" placeholder="YOUR EMAIL" className="w-full bg-transparent text-sm font-light tracking-widest text-white placeholder-gray-600 focus:outline-none" />
          </div>
          <div className="relative border-b border-gray-700 pb-2">
            <textarea placeholder="MESSAGE" rows="4" className="w-full bg-transparent text-sm font-light tracking-widest text-white placeholder-gray-600 focus:outline-none resize-none"></textarea>
          </div>
          <button className="text-xs uppercase tracking-[0.3em] text-[#cda270] border border-[#cda270] py-4 px-12 hover:bg-[#cda270] hover:text-black transition-all duration-300">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-[#0a0a0a] py-12 px-6 md:px-24 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-gray-600">
      <p>© 2024 Minimalis Simo.</p>
      <div className="flex gap-8 mt-6 md:mt-0">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <a href="#" className="hover:text-white transition-colors">Imprint</a>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-[#121212] text-gray-300 font-sans selection:bg-[#cda270] selection:text-black">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}} />
      
      <Navbar />
      
      <main>
        {currentPage === 'home' && <HomePage />}
        {(currentPage === 'magazine' || currentPage === 'about' || currentPage === 'sponsors') && <MagazinePage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {currentPage !== 'home' && <Footer />}
    </div>
  );
}
5