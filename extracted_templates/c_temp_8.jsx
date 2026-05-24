import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

// --- CUSTOM CSS ---
const customStyles = `
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: #1a1a1a; /* Matched dark background */
    color: #ffffff;
    overflow-x: hidden;
  }

  /* Exact filter to match the deep crimson stone from the inspiration image */
  .red-statue-filter {
    filter: grayscale(100%) sepia(100%) hue-rotate(315deg) saturate(600%) brightness(0.7) contrast(1.4);
    mix-blend-mode: lighten;
  }

  /* Scroll Reveal Animations */
  .reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }
  .delay-100 { transition-delay: 100ms; }
  .delay-200 { transition-delay: 200ms; }
  .delay-300 { transition-delay: 300ms; }

  /* Gallery Image Hover */
  .gallery-item:hover .gallery-img {
    transform: scale(1.05);
    filter: grayscale(0%);
  }
  .gallery-item .gallery-img {
    filter: grayscale(100%);
    transition: all 0.7s ease;
  }
`;

// --- CUSTOM HOOK FOR SCROLL ANIMATIONS ---
function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(reveal => observer.observe(reveal));
    return () => reveals.forEach(reveal => observer.unobserve(reveal));
  }, []);
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  useScrollReveal();

  // Scroll Spy functionality to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'gallery', 'contacts'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offsetTop = top + window.scrollY;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + bottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{customStyles}</style>
      <div className="min-h-screen font-sans selection:bg-[#D3212D] selection:text-white">
        
        {/* FIXED HEADER */}
        <header className="fixed top-0 left-0 w-full px-8 md:px-16 py-8 flex items-center justify-between z-50 mix-blend-difference bg-gradient-to-b from-[#1a1a1a]/80 to-transparent backdrop-blur-sm">
          <div className="flex items-center gap-16 w-full">
            {/* LOGO (Exact match to the 3 diagonal red stripes) */}
            <div 
              className="flex gap-1.5 transform -rotate-45 cursor-pointer hover:scale-110 transition-transform duration-300"
              onClick={() => scrollTo('home')}
            >
              <div className="w-2 h-7 bg-[#D3212D] rounded-sm"></div>
              <div className="w-2 h-7 bg-[#D3212D] rounded-sm translate-y-2.5"></div>
              <div className="w-2 h-7 bg-[#D3212D] rounded-sm translate-y-5"></div>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase">
              {['ABOUT', 'GALLERY', 'CONTACTS'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`hover:text-white transition-colors duration-300 relative py-2 ${
                    activeSection === item.toLowerCase() ? 'text-white' : ''
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D3212D] rounded-full"></span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main>
          {/* 1. HERO SECTION (100% Match to Inspiration) */}
          <section id="home" className="relative w-full h-screen min-h-[800px] flex items-center px-8 md:px-24 overflow-hidden bg-gradient-to-br from-[#222] via-[#1a1a1a] to-[#111]">
            
            {/* Background Red Circles (Crisp, exactly as in image) */}
            <div className="absolute top-1/2 left-[60%] md:left-[65%] -translate-y-1/2 -translate-x-1/2 w-[90vw] md:w-[45vw] max-w-[650px] aspect-square rounded-full bg-[#D3212D] z-0"></div>
            <div className="absolute -bottom-10 left-[40%] md:left-[35%] w-[30vw] md:w-[15vw] max-w-[200px] aspect-square rounded-full bg-[#D3212D] z-0"></div>

            {/* Left Content (Exact Typography & Layout) */}
            <div className="relative z-20 w-full md:w-1/2 pt-20">
              <div className="reveal">
                <p className="text-white/70 text-[11px] font-bold tracking-[0.3em] mb-4 uppercase">
                  Our Version
                </p>
                <h1 className="text-7xl md:text-[100px] lg:text-[130px] font-black tracking-tight mb-6 leading-none text-white">
                  DESIGN
                </h1>
                <p className="text-white/80 text-sm md:text-base max-w-sm leading-relaxed mb-12 font-light">
                  Our hobby is a modern and convenient design, the key to successful communication with the client.
                </p>
                
                {/* CTA Button */}
                <div className="flex items-center gap-6 cursor-pointer group w-fit">
                  <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#D3212D] group-hover:bg-[#D3212D] transition-all duration-300">
                    <ArrowRight size={20} className="text-white/60 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-white group-hover:text-[#D3212D] transition-colors duration-300">
                    See More
                  </span>
                </div>
              </div>

              {/* Pagination / Scroll indicator */}
              <div className="absolute bottom-12 left-0 flex items-center gap-6 text-[11px] font-bold text-white/50 reveal delay-200">
                <span className="text-white">01</span>
                <div className="w-32 h-px bg-white/20 relative">
                  <div className="absolute top-0 left-0 w-1/3 h-full bg-white"></div>
                </div>
                <span>03</span>
              </div>
            </div>

            {/* Right Content / Statue Image */}
            <div className="absolute bottom-0 right-0 md:right-[5%] lg:right-[10%] w-full md:w-1/2 h-[70vh] md:h-[90vh] z-10 flex justify-end items-end pointer-events-none">
              {/* Using an image that works perfectly with the red filter */}
              <img 
                src="https://images.unsplash.com/photo-1549887534-1541e9326642?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Classical Red Statue" 
                className="h-[120%] w-auto object-cover object-bottom red-statue-filter scale-110 origin-bottom"
              />
            </div>
          </section>

          {/* 2. ABOUT SECTION */}
          <section id="about" className="relative w-full py-32 px-8 md:px-24 bg-[#151515] overflow-hidden">
            {/* Background geometric tie-in */}
            <div className="absolute top-0 right-0 w-[50vw] aspect-square rounded-full border border-[#D3212D]/10 -translate-y-1/2 translate-x-1/4 z-0"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2 reveal">
                <h2 className="text-[#D3212D] text-[11px] font-bold tracking-[0.3em] mb-4 uppercase">The Philosophy</h2>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-none">
                  DIGITAL <br /> MONUMENTS
                </h1>
                <div className="space-y-6 text-white/70 text-sm md:text-base leading-relaxed max-w-lg font-light">
                  <p>
                    We carry the exact visual weight of our hero section into our core ethos. Every digital experience should possess the timeless aesthetic perfection of classical art.
                  </p>
                  <p>
                    We strip away the unnecessary, utilizing high-contrast geometry and stark typography to reveal a digital presence that commands attention and stands the test of time.
                  </p>
                </div>
                
                <div className="mt-12 flex gap-12">
                  <div className="reveal delay-100">
                    <h3 className="text-4xl font-black text-white mb-2">120+</h3>
                    <p className="text-[10px] text-white/50 tracking-[0.2em] uppercase">Projects Delivered</p>
                  </div>
                  <div className="reveal delay-200">
                    <h3 className="text-4xl font-black text-white mb-2">15</h3>
                    <p className="text-[10px] text-white/50 tracking-[0.2em] uppercase">Industry Awards</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 relative min-h-[500px] flex items-center justify-center reveal delay-200">
                <div className="absolute w-[80%] max-w-[400px] aspect-square bg-[#D3212D] rounded-full z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1601514912952-4752b04f7678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="About Us Sculpture"
                  className="relative z-10 h-[600px] w-auto object-cover red-statue-filter"
                />
              </div>
            </div>
          </section>

          {/* 3. GALLERY SECTION */}
          <section id="gallery" className="relative w-full py-32 px-8 md:px-24 bg-[#1a1a1a]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
              <div>
                <h2 className="text-[#D3212D] text-[11px] font-bold tracking-[0.3em] mb-4 uppercase">Selected Works</h2>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">GALLERY</h1>
              </div>
              <p className="text-white/50 text-sm max-w-xs md:text-right mt-6 md:mt-0 font-light">
                Explore our latest monumental designs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { id: 1, title: 'Ethereal Space', category: 'UX/UI Design', img: 'https://images.unsplash.com/photo-1618220048045-10a6cb99a6c7?auto=format&fit=crop&w=1000&q=80' },
                { id: 2, title: 'Ares FinTech', category: 'Web Platform', img: 'https://images.unsplash.com/photo-1518991043280-1da61d9f3ac5?auto=format&fit=crop&w=1000&q=80' },
                { id: 3, title: 'Chronos Vault', category: 'E-Commerce', img: 'https://images.unsplash.com/photo-1555448248-2571daf6344b?auto=format&fit=crop&w=1000&q=80' },
                { id: 4, title: 'Atlas Brand', category: 'Identity', img: 'https://images.unsplash.com/photo-1544413158-97746404eb58?auto=format&fit=crop&w=1000&q=80' }
              ].map((work, index) => (
                <div 
                  key={work.id} 
                  className={`gallery-item group relative overflow-hidden bg-black aspect-[4/3] cursor-pointer reveal`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Red Tint Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#D3212D]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
                  
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className="gallery-img w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[#D3212D] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {work.category}
                    </p>
                    <div className="flex justify-between items-center">
                      <h3 className="text-3xl font-black text-white">{work.title}</h3>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 group-hover:border-white">
                        <ExternalLink size={18} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. CONTACTS SECTION */}
          <section id="contacts" className="relative w-full py-32 px-8 md:px-24 bg-[#111] overflow-hidden">
             {/* Small Red Circle bottom left tie-in */}
             <div className="absolute bottom-0 left-0 w-[20vw] aspect-square rounded-full bg-[#D3212D] z-0 -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-16">
              <div className="w-full md:w-1/2 reveal">
                <h2 className="text-[#D3212D] text-[11px] font-bold tracking-[0.3em] mb-4 uppercase">Get In Touch</h2>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-12 leading-none">
                  START A <br /> PROJECT
                </h1>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-[#D3212D]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mb-2">Email Us</p>
                      <p className="text-lg text-white hover:text-[#D3212D] transition-colors cursor-pointer font-light">hello@olympos-design.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-[#D3212D]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mb-2">Visit Us</p>
                      <p className="text-lg text-white font-light">124 Pantheon Way,<br />Creative District, NY 10012</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-[#D3212D]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mb-2">Call Us</p>
                      <p className="text-lg text-white font-light">+1 (555) 019-8472</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 reveal delay-200">
                <form className="bg-[#1a1a1a] p-10 md:p-14 border border-white/5 relative">
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D3212D]"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D3212D]"></div>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-[10px] text-white/50 uppercase tracking-[0.2em] mb-3">Your Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D3212D] transition-colors font-light text-lg"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-white/50 uppercase tracking-[0.2em] mb-3">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D3212D] transition-colors font-light text-lg"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-white/50 uppercase tracking-[0.2em] mb-3">Project Details</label>
                      <textarea 
                        rows="4"
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D3212D] transition-colors resize-none font-light text-lg"
                        placeholder="Tell us about your vision..."
                      ></textarea>
                    </div>
                    <button 
                      type="button"
                      className="w-full bg-[#D3212D] text-white font-bold tracking-[0.2em] uppercase text-[11px] py-6 hover:bg-white hover:text-black transition-colors duration-500 mt-4 flex justify-center items-center gap-3 group"
                    >
                      Send Message <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="w-full py-8 border-t border-white/10 text-center bg-[#111]">
            <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase">
              © 2024 Olympos Design Studio. All Rights Reserved.
            </p>
          </footer>
        </main>

      </div>
    </>
  );
}
8