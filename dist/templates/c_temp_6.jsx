import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, X, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll detection for Navbar and Active Section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'projects', 'contact'];
      let current = 'hero';

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section is in the top half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#e0e0e0] font-sans selection:bg-white selection:text-black overflow-hidden relative">
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#141414]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex flex-col font-black text-2xl leading-[0.85] tracking-tighter cursor-pointer hover:text-white transition-colors"
            onClick={() => scrollTo('hero')}
          >
            <span>TU</span>
            <span>RA</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12 text-xs font-semibold tracking-[0.2em]">
            <button 
              onClick={() => scrollTo('projects')}
              className={`hover:text-white transition-colors ${activeSection === 'projects' ? 'text-white' : 'text-gray-500'}`}
            >
              PROJECTS
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className={`hover:text-white transition-colors ${activeSection === 'contact' ? 'text-white' : 'text-gray-500'}`}
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {/* Fixed Side Elements (Hidden on Mobile) */}
      <div className="hidden lg:flex fixed left-12 bottom-12 flex-col space-y-6 text-gray-500 z-40">
        <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
        <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
        <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
      </div>

      <div className="hidden lg:flex fixed right-12 bottom-32 transform rotate-90 origin-right items-center space-x-4 text-xs tracking-[0.3em] text-gray-500 z-40">
        <span>SCROLL</span>
        <div className="w-16 h-[1px] bg-gray-500"></div>
      </div>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-12 bg-[#0a0a0a] text-center border-t border-white/5">
        <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-2 uppercase">The End</p>
        <h3 className="text-xl font-bold tracking-widest text-white mb-2">THANKS FOR WATCHING!</h3>
        <p className="text-[10px] tracking-widest text-gray-600">PRESS THUMBS UP</p>
      </footer>
    </div>
  );
}

// --- SECTIONS ---

function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center z-10 relative">
        <p className="text-xs tracking-[0.3em] text-gray-400 mb-6 uppercase">I am</p>
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
          TURA
        </h1>
        <p className="text-xs md:text-sm tracking-[0.4em] text-gray-400 uppercase">
          A Junior <br className="md:hidden" />Web Designer
        </p>
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,rgba(0,0,0,0)_50%)] pointer-events-none"></div>
      <div className="absolute left-6 bottom-12 text-[10px] text-gray-600 tracking-widest font-mono">.01</div>
    </section>
  );
}

function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center relative px-6 py-24 bg-[#111111]">
      <div className="absolute left-6 bottom-12 text-[10px] text-gray-600 tracking-widest font-mono">.02</div>
      
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        
        {/* Layered Project Composition */}
        <div className="relative w-full max-w-4xl flex justify-center items-center h-[50vh] md:h-[60vh] mb-12">
          
          {/* Left Context Card */}
          <div className="hidden md:block absolute left-0 w-1/3 h-2/3 bg-[#0a0a0a] rounded border border-white/5 shadow-2xl opacity-80 transform -translate-x-8 -rotate-2 z-0 overflow-hidden">
             <div className="p-6">
                <div className="w-8 h-8 bg-white/10 rounded-full mb-4"></div>
                <div className="w-3/4 h-2 bg-white/10 rounded mb-2"></div>
                <div className="w-1/2 h-2 bg-white/10 rounded"></div>
             </div>
             <img 
               src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400" 
               alt="UI Context" 
               className="w-full h-full object-cover opacity-30 mix-blend-overlay"
             />
          </div>

          {/* Right Context Card (Blurred/Focus) */}
          <div className="hidden md:block absolute right-0 w-1/3 h-2/3 bg-white/5 backdrop-blur-sm rounded shadow-2xl transform translate-x-8 rotate-2 z-0 overflow-hidden border border-white/10">
             <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
               <h4 className="text-white font-bold tracking-widest mb-4">Welcome to</h4>
               <div className="w-24 h-10 border border-white/20 rounded-full flex items-center justify-center text-xs tracking-widest text-white/50 backdrop-blur-md">Log In</div>
             </div>
             <img 
               src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400" 
               alt="UI Context" 
               className="w-full h-full object-cover blur-sm opacity-50"
             />
          </div>

          {/* Main Center Card */}
          <div className="relative w-full md:w-1/2 h-full bg-[#1a1a1a] rounded shadow-2xl z-10 overflow-hidden border border-white/10 group cursor-pointer" onClick={() => setModalOpen(true)}>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" 
              alt="Keet Cafe" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
              <p className="text-[10px] tracking-[0.3em] text-gray-300 uppercase mb-2">Welcome to</p>
              <h3 className="text-2xl font-bold text-white tracking-wider mb-2">Homemade baking, Tasty Drinks</h3>
            </div>
          </div>
        </div>

        {/* Project Details Below */}
        <div className="text-center max-w-2xl mx-auto z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-widest mb-6">KEET CAFE</h2>
          <p className="text-xs md:text-sm text-gray-400 leading-loose mb-10 max-w-xl mx-auto">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </p>
          <button 
            onClick={() => setModalOpen(true)}
            className="text-xs tracking-[0.2em] font-bold text-white border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            VIEW PROJECT
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-[#161616] w-full max-w-4xl h-[80vh] rounded-lg border border-white/10 shadow-2xl flex flex-col relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white z-50 bg-black/50 p-2 rounded-full"
            >
              <X size={24} />
            </button>
            <div className="w-full h-1/2 relative">
               <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200" 
                alt="Keet Cafe Details" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent"></div>
            </div>
            <div className="p-12 flex flex-col flex-grow">
              <p className="text-xs tracking-[0.3em] text-[#888] mb-2">CASE STUDY</p>
              <h2 className="text-3xl font-bold text-white tracking-widest mb-6">KEET CAFE <br/> E-COMMERCE</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400 leading-relaxed">
                <p>
                  A complete redesign of the Keet Cafe digital experience. Focusing on a seamless journey from discovering artisanal coffee blends to swift checkout. The aesthetic leans heavily into dark mode minimalism to let the rich photography of the coffee stand out.
                </p>
                <div className="space-y-4">
                  <div>
                    <strong className="block text-white mb-1 text-xs tracking-wider">ROLE</strong>
                    UI/UX Design, Frontend Development
                  </div>
                  <div>
                    <strong className="block text-white mb-1 text-xs tracking-wider">YEAR</strong>
                    2024
                  </div>
                  <a href="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors text-xs tracking-wider mt-4">
                    VISIT LIVE SITE <ArrowRight size={14} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative px-6 py-24 bg-[#141414]">
      <div className="absolute left-6 bottom-12 text-[10px] text-gray-600 tracking-widest font-mono">.03</div>
      
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-8 items-start">
        
        {/* Contact Info (Left) */}
        <div className="pt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-widest mb-8">CONTACT</h2>
          <p className="text-xs md:text-sm text-gray-400 leading-loose mb-12 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-white text-xs font-bold tracking-[0.2em] mb-2">Address</h4>
              <p className="text-gray-500 text-sm">Oktyabrskaya, Berezgova str., 14</p>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold tracking-[0.2em] mb-2">Phone</h4>
              <p className="text-gray-500 text-sm">+234 000 111 22 33</p>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold tracking-[0.2em] mb-2">E-mail</h4>
              <p className="text-gray-500 text-sm">tura@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form (Right) */}
        <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-sm shadow-2xl border border-white/5 relative mt-0 lg:mt-[-40px]">
          <h3 className="text-2xl font-bold text-white tracking-widest mb-10 text-center lg:text-left">CONTACT FORM</h3>
          
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center h-64 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white tracking-wider mb-2">Message Sent!</h4>
              <p className="text-sm text-gray-400">I will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-3 px-2 focus:outline-none focus:border-white transition-colors peer"
                  placeholder="Your name"
                />
              </div>
              <div className="relative">
                <input 
                  type="tel" 
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-3 px-2 focus:outline-none focus:border-white transition-colors peer"
                  placeholder="Your phone"
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-3 px-2 focus:outline-none focus:border-white transition-colors peer"
                  placeholder="Your e-mail"
                />
              </div>
              <div className="relative">
                <textarea 
                  name="message"
                  id="message"
                  rows="3"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-3 px-2 focus:outline-none focus:border-white transition-colors peer resize-none"
                  placeholder="Message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full sm:w-auto mt-4 px-10 py-4 bg-[#222] border border-white/10 text-white text-xs font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE >'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
7