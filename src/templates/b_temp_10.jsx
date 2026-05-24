import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Globe, Clock, MapPin, Ticket, Users, ShoppingBag, 
  ArrowRight, Menu, X, ChevronRight, Play, ArrowUpRight
} from 'lucide-react';

// --- CUSTOM HOOKS ---
// Hook for scroll-triggered fade-in animations
const useFadeIn = () => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your system, this triggers once when entering viewport
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return [domRef, isVisible];
};

// --- COMPONENTS ---

const FadeInSection = ({ children, delay = "0ms", className = "" }) => {
  const [ref, isVisible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

// Shared Floating Side Menu (Gold Box)
const FloatingSideMenu = () => (
  <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col bg-[#d4b068] text-white">
    <button className="p-4 hover:bg-[#c29d55] transition-colors border-b border-white/20 group relative">
      <Ticket size={20} />
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Buy Tickets</span>
    </button>
    <button className="p-4 hover:bg-[#c29d55] transition-colors border-b border-white/20 group relative">
      <Users size={20} />
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Membership</span>
    </button>
    <button className="p-4 hover:bg-[#c29d55] transition-colors group relative">
      <ShoppingBag size={20} />
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Museum Shop</span>
    </button>
  </div>
);

// Top Information Bar
const TopBar = () => (
  <div className="w-full bg-[#1a1a1a] text-[#a0a0a0] text-xs py-2 px-6 flex justify-between items-center hidden md:flex font-sans">
    <div className="flex items-center gap-6">
      <span className="flex items-center gap-2"><Clock size={12} /> THE MUSEUM IS OPEN TODAY 10 AM - 5 PM</span>
    </div>
    <div className="flex items-center gap-6">
      <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><MapPin size={12} /> 36TH ART, AVENUE, NY 10018</span>
      <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><Search size={12} /> SEARCH</span>
      <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><Globe size={12} /> ENGLISH</span>
    </div>
  </div>
);

// Main Navigation
const Header = ({ currentPath, navigate, isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Header needs to be transparent on Home hero, but solid elsewhere or when scrolled
  const isSolid = isScrolled || currentPath !== 'home';
  
  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'exhibitions', label: 'EXHIBITIONS' },
    { id: 'collections', label: 'COLLECTIONS' },
    { id: 'about', label: 'ABOUT US' },
  ];

  const rightLinks = [
    { id: 'pages', label: 'PAGES' },
    { id: 'blog', label: 'BLOG' },
    { id: 'shop', label: 'SHOP' },
    { id: 'contacts', label: 'CONTACTS' },
    { id: 'visit', label: 'VISIT' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isSolid ? 'bg-[#1a1a1a] shadow-lg py-4' : 'bg-transparent py-6'
        } ${currentPath === 'home' && !isScrolled ? 'top-8' : 'top-0'}`} // Account for TopBar on home
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* Left Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <button 
                key={link.id} 
                onClick={() => navigate(link.id)}
                className={`text-xs font-bold tracking-widest transition-colors hover:text-[#d4b068] ${
                  currentPath === link.id ? 'text-[#d4b068]' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Logo */}
          <div 
            className="text-3xl font-serif font-bold tracking-wider text-white cursor-pointer"
            onClick={() => navigate('home')}
          >
            ozeum
          </div>

          {/* Right Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {rightLinks.map(link => (
              <button 
                key={link.id}
                className="text-xs font-bold tracking-widest text-white hover:text-[#d4b068] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1a1a1a] z-40 pt-24 px-6 flex flex-col gap-6 overflow-y-auto pb-10">
          {[...navLinks, ...rightLinks].map(link => (
            <button
              key={link.id}
              onClick={() => {
                navigate(link.id);
                setMobileMenuOpen(false);
              }}
              className="text-xl font-serif text-white hover:text-[#d4b068] text-left border-b border-white/10 pb-4"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

const Footer = () => (
  <footer className="bg-[#111] text-white py-16 px-6 lg:px-24 font-sans">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div>
        <h3 className="font-serif text-2xl mb-6">ozeum</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          A prominent place among the leading historical and cultural museums due to the high value of collection presented.
        </p>
      </div>
      <div>
        <h4 className="font-bold tracking-widest text-sm mb-6 uppercase">Links</h4>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><a href="#" className="hover:text-[#d4b068] transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-[#d4b068] transition-colors">Exhibitions</a></li>
          <li><a href="#" className="hover:text-[#d4b068] transition-colors">Collections</a></li>
          <li><a href="#" className="hover:text-[#d4b068] transition-colors">Visitor Info</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold tracking-widest text-sm mb-6 uppercase">Legal</h4>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><a href="#" className="hover:text-[#d4b068] transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-[#d4b068] transition-colors">Terms of Service</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold tracking-widest text-sm mb-6 uppercase">Newsletter</h4>
        <p className="text-gray-400 text-sm mb-4">Subscribe to receive our latest updates.</p>
        <div className="flex border-b border-gray-600 pb-2">
          <input type="email" placeholder="Your Email" className="bg-transparent outline-none flex-1 text-sm text-white" />
          <button className="text-[#d4b068] hover:text-white transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
      © {new Date().getFullYear()} Ozeum Museum. Designed for Inspiration.
    </div>
  </footer>
);

// --- PAGES ---

const HomePage = ({ navigate }) => {
  return (
    <div className="bg-[#f5f3ef] min-h-screen font-sans text-black">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=2500&auto=format&fit=crop" 
            alt="Classic Art Gallery" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-16">
          <FadeInSection>
            <p className="text-sm md:text-base tracking-widest uppercase mb-4 text-gray-300">September 21, 2023 - October 20, 2024</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-10 shadow-sm">
              Bernard van Orley At Saint-Géry
            </h1>
            <button className="bg-[#f5f3ef] text-black rounded-full px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#d4b068] hover:text-white transition-all duration-300">
              Read More
            </button>
          </FadeInSection>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="py-24 px-6 lg:px-24 max-w-[1600px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeInSection className="max-w-lg">
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-8">
              Welcome To Ozeum<br/>Art And History<br/>Museum
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-serif italic">
              Ozeum occupies a prominent place among the leading historical and cultural museums due to the high value of collection presented and constant activity in spheres of research, exhibitions and cultural education.
            </p>
            <button 
              onClick={() => navigate('about')}
              className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase hover:text-[#d4b068] transition-colors"
            >
              More About <ArrowRight size={16} />
            </button>
          </FadeInSection>
          <FadeInSection delay="200ms" className="relative">
            {/* Sketch style image simulating the design */}
            <img 
              src="https://images.unsplash.com/photo-1578306911674-8931168a2114?q=80&w=1200&auto=format&fit=crop" 
              alt="Historical Sketch" 
              className="w-full h-auto object-cover rounded mix-blend-multiply opacity-80"
              style={{ filter: 'sepia(40%) grayscale(50%) contrast(120%)' }}
            />
          </FadeInSection>
        </div>
      </section>

      {/* UPCOMING EXHIBITIONS */}
      <section className="py-24 px-6 lg:px-24 max-w-[1600px] mx-auto">
        <FadeInSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-black/20 pb-6">
            <h2 className="font-serif text-3xl md:text-4xl">Upcoming Exhibitions</h2>
            <button 
              onClick={() => navigate('exhibitions')}
              className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase hover:text-[#d4b068] transition-colors mt-4 md:mt-0"
            >
              View All Exhibitions <ArrowRight size={16} />
            </button>
          </div>
        </FadeInSection>

        <FadeInSection delay="100ms">
          {/* Main feature image spanning width */}
          <div className="w-full mb-16 overflow-hidden bg-black">
             <img 
              src="https://images.unsplash.com/photo-1564399579883-451a5d44ec08?q=80&w=2000&auto=format&fit=crop" 
              alt="Gallery Wall" 
              className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </FadeInSection>

        {/* Exhibition Items List */}
        <div className="space-y-0">
          {/* Item 1 */}
          <FadeInSection className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-b border-black/10 group">
            <div className="lg:col-span-4">
              <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-[#d4b068] transition-colors">Bernard van Orley At Saint-Géry</h3>
              <p className="text-xs tracking-wider uppercase text-gray-500">September 21, 2023 - October 20, 2024</p>
            </div>
            <div className="lg:col-span-6">
              <p className="text-gray-600 text-sm leading-relaxed">
                Especially for the occasion, Ozeum is setting up the tapestries and paintings by Bernard van Orley from the series of Jacob's History and the first tapestry from the series Our Blessed Lady of the Sablon.
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-start lg:justify-end items-center">
              <button className="rounded-full border border-black/30 px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                More Info
              </button>
            </div>
          </FadeInSection>

          {/* Item 2 */}
          <FadeInSection delay="100ms" className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-b border-black/10 group">
            <div className="lg:col-span-4">
              <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-[#d4b068] transition-colors">Records & Rebels 1966-1970</h3>
              <p className="text-xs tracking-wider uppercase text-gray-500">April 6, 2023 10:00 - May 3, 2025 23:59</p>
            </div>
            <div className="lg:col-span-6">
              <p className="text-gray-600 text-sm leading-relaxed">
                This major exhibition shows the revolutionary art of the late 1960s, expressed through some of the greatest music hits of the 20th century as well as paintings, film industry, fashion and design.
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-start lg:justify-end items-center">
              <button className="rounded-full border border-black/30 px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                More Info
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* VISITOR INFO (Dark Section) */}
      <section className="bg-[#151412] text-[#f5f3ef]">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Left Side: Masonry/Gallery Collage */}
          <div className="lg:w-1/2 p-6 lg:p-12 relative overflow-hidden bg-[#1f1d1a]">
             <div className="grid grid-cols-2 gap-4 h-full relative">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop" className="w-full object-cover rounded-sm border-[6px] border-[#2a2622] shadow-2xl" alt="Painting 1" />
                  <img src="https://images.unsplash.com/photo-1544967082-f9d255942864?q=80&w=800&auto=format&fit=crop" className="w-full object-cover rounded-sm border-[4px] border-[#3a352f] shadow-2xl" alt="Painting 2" />
                </div>
                <div className="space-y-4 pt-12">
                  <img src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800&auto=format&fit=crop" className="w-full object-cover rounded-sm border-[8px] border-[#1a1815] shadow-2xl" alt="Painting 3" />
                  <img src="https://images.unsplash.com/photo-1577083165239-ce3b2ed212d2?q=80&w=800&auto=format&fit=crop" className="w-full h-48 object-cover rounded-sm border-[4px] border-[#4a453f] shadow-2xl" alt="Painting 4" />
                </div>
             </div>
          </div>

          {/* Right Side: Text Info */}
          <div className="lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center">
            <FadeInSection>
              <h2 className="font-serif text-4xl lg:text-5xl mb-12">Visitor Info</h2>
              
              <div className="space-y-12">
                {/* Admission */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6 border-b border-white/10 pb-2">Admission Prices</h4>
                  <ul className="space-y-4 font-serif text-lg">
                    <li className="flex justify-between">
                      <span className="text-gray-300">Adult</span>
                      <span>$15.00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-300">Groups (10 max)</span>
                      <span>$12.00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-300">Youth 19 – 24</span>
                      <span>$8.00</span>
                    </li>
                  </ul>
                </div>

                {/* Hours */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6 border-b border-white/10 pb-2">Opening Hours</h4>
                  <ul className="space-y-4 font-serif text-lg">
                    <li className="flex justify-between">
                      <span className="text-gray-300">Tuesday – Saturday</span>
                      <span>10 a.m. – 5 p.m.</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-300">Sunday</span>
                      <span>11 a.m. – 5 p.m.</span>
                    </li>
                    <li className="flex justify-between text-gray-500 italic">
                      <span>Monday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
                
                <button className="bg-[#d4b068] text-black rounded-full px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white transition-all w-max mt-4">
                  Plan Your Visit
                </button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};


// DUMMY PAGE: Exhibitions
const ExhibitionsPage = () => {
  return (
    <div className="bg-[#f5f3ef] min-h-screen font-sans text-black pt-32 pb-24">
       <div className="max-w-[1600px] mx-auto px-6 lg:px-24">
         <FadeInSection>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Current Exhibitions</h1>
            <p className="text-gray-600 max-w-2xl text-lg mb-16">Explore our curated collections spanning from classical antiquity to contemporary masterpieces.</p>
         </FadeInSection>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1,2,3,4].map((i) => (
              <FadeInSection key={i} delay={`${i * 100}ms`} className="group cursor-pointer">
                <div className="overflow-hidden mb-6 rounded-sm bg-black aspect-[4/3]">
                  <img 
                    src={`https://images.unsplash.com/photo-15${64399579883 + i}-451a5d44ec08?q=80&w=800&auto=format&fit=crop`} 
                    alt="Exhibit"
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                  />
                </div>
                <p className="text-xs tracking-wider uppercase text-[#d4b068] mb-2 font-bold">Now On View</p>
                <h3 className="font-serif text-3xl mb-3 group-hover:text-gray-600 transition-colors">Masterpieces of the Renaissance</h3>
                <p className="text-gray-500 mb-4">A profound look into the rebirth of art and culture in 15th century Europe.</p>
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  Discover <ArrowUpRight size={14} />
                </span>
              </FadeInSection>
            ))}
         </div>
       </div>
    </div>
  );
}

// DUMMY PAGE: About
const AboutPage = () => {
  return (
    <div className="bg-[#151412] min-h-screen font-sans text-white pt-32 pb-24">
       <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
         <FadeInSection>
            <h1 className="font-serif text-5xl md:text-7xl mb-10 text-[#f5f3ef]">The Ozeum History</h1>
            <div className="w-24 h-1 bg-[#d4b068] mx-auto mb-10"></div>
            <p className="text-gray-400 text-xl font-serif leading-relaxed italic mb-12">
              "Art washes away from the soul the dust of everyday life." — Pablo Picasso
            </p>
         </FadeInSection>
         
         <FadeInSection delay="200ms">
            <div className="text-left space-y-8 text-gray-300 font-light leading-loose text-lg">
              <p>
                Founded in 1892, Ozeum began as a private collection of European masterpieces. Today, it occupies a prominent place among the leading historical and cultural museums in the world.
              </p>
              <p>
                Our mission is to preserve and celebrate human creativity across centuries. Through our rigorous research, diverse exhibitions, and expansive cultural education programs, we strive to make art accessible to everyone.
              </p>
              <p>
                The museum complex itself is a work of architectural significance, seamlessly blending the original neoclassical structures with modern, sustainable exhibition wings added in the late 20th century.
              </p>
            </div>
         </FadeInSection>

         <FadeInSection delay="400ms" className="mt-20">
            <img 
              src="https://images.unsplash.com/photo-1544967082-f9d255942864?q=80&w=1200&auto=format&fit=crop" 
              alt="Museum Architecture" 
              className="w-full h-[500px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
            />
         </FadeInSection>
       </div>
    </div>
  );
}


// --- MAIN APP CONTAINER ---
export default function App() {
  const [currentPath, setCurrentPath] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple router
  const renderPage = () => {
    switch(currentPath) {
      case 'home': return <HomePage navigate={setCurrentPath} />;
      case 'exhibitions': return <ExhibitionsPage />;
      case 'about': return <AboutPage />;
      case 'collections': return <ExhibitionsPage />; // reuse dummy for demo
      default: return <HomePage navigate={setCurrentPath} />;
    }
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Lato', sans-serif; }
        ::selection { background-color: #d4b068; color: white; }
        html { scroll-behavior: smooth; }
      `}} />
      <div className="relative w-full min-h-screen text-black">
        {currentPath === 'home' && <TopBar />}
        <Header currentPath={currentPath} navigate={setCurrentPath} isScrolled={isScrolled} />
        <FloatingSideMenu />
        
        <main>
          {renderPage()}
        </main>

        <Footer />
      </div>
    </>
  );
}