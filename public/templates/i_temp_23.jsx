import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Plus, 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  Zap, 
  Sparkles,
  Search,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white font-sans selection:bg-[#E0E59A] selection:text-[#0C3E50] overflow-x-hidden">
      {/* Complex Atmospheric Background 
        Simulating the ocean, glowing horizon, and deep sky
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#224b5d] via-[#48899c] to-[#0b2b39]"></div>
        
        {/* Horizon Glow */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[40vh] bg-[#97ddec] opacity-40 blur-[120px] rounded-[100%]"></div>
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[20vh] bg-white opacity-30 blur-[80px] rounded-[100%]"></div>
        
        {/* Water Surface Simulation (Darker bottom with slight horizontal banding) */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-b from-transparent via-[#0d3446]/80 to-[#061b25] z-10"></div>
        
        {/* Subtle floating particles/stars */}
        <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-white rounded-full blur-[1px] opacity-60 animate-pulse"></div>
        <div className="absolute top-[30%] right-[25%] w-1.5 h-1.5 bg-white rounded-full blur-[1px] opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[60%] left-[8%] w-2 h-2 bg-[#E0E59A] rounded-full blur-[2px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] right-[10%] w-1 h-1 bg-white rounded-full blur-[1px] opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#153b4d]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-lg leading-none">
                O
              </div>
              <span className="text-xl font-semibold tracking-wide uppercase">Odyssey</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">Product <ChevronDown size={14} className="opacity-70" /></a>
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
              <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">Company <ChevronDown size={14} className="opacity-70" /></a>
              <a href="#" className="hover:text-white transition-colors">Resources</a>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm hover:text-white/80 transition-colors">
                <Globe2 size={16} /> English
              </button>
              <button className="px-5 py-2 rounded-full border border-white/30 text-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
                Login
              </button>
              <button className="px-5 py-2 rounded-full bg-[#0C3E50] text-sm flex items-center gap-2 hover:bg-[#11556e] transition-colors shadow-[0_0_15px_rgba(12,62,80,0.5)] border border-[#1a627d]">
                <Plus size={16} /> Register
              </button>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-[#123645]/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-6 md:hidden">
            <a href="#" className="text-2xl font-medium">Home</a>
            <a href="#" className="text-2xl font-medium">Product</a>
            <a href="#" className="text-2xl font-medium">Pricing</a>
            <a href="#" className="text-2xl font-medium">Company</a>
            <div className="mt-8 flex flex-col gap-4">
               <button className="w-full py-3 rounded-full border border-white/30 text-lg">Login</button>
               <button className="w-full py-3 rounded-full bg-[#0C3E50] text-lg flex items-center justify-center gap-2">
                <Plus size={20} /> Register
              </button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center min-h-[90vh] relative">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8 text-sm text-white/90">
             <Sparkles size={14} className="text-[#E0E59A]" /> Personal
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-medium tracking-tight max-w-4xl leading-[1.1] mb-6 drop-shadow-lg">
            The <span className="font-serif italic text-[#E0E59A] font-light">Fast</span> and <span className="font-serif italic text-[#E0E59A] font-light">Secure</span><br className="hidden md:block"/> way to send money
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 max-w-xl mb-12 font-light">
            Join 30+ million customers saving on global transfers with Odyssey.
          </p>

          {/* Input Group */}
          <div className="flex items-center w-full max-w-md p-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-20 shadow-2xl">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-1 bg-transparent border-none outline-none px-4 text-white placeholder:text-white/50 w-full"
            />
            <button className="px-6 py-2.5 rounded-full bg-[#0C3E50] hover:bg-[#11556e] transition-colors flex items-center gap-2 font-medium border border-white/10 whitespace-nowrap">
              <Plus size={16} /> Get Started
            </button>
          </div>

          {/* Floating Card Visual */}
          <div className="relative w-full max-w-3xl h-[300px] flex justify-center items-center perspective-[1000px] mt-10">
            {/* Card Shadow/Glow */}
            <div className="absolute w-[320px] h-[200px] bg-[#49B5CD] opacity-40 blur-[60px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* The Card */}
            <div 
              className="w-[340px] h-[210px] rounded-2xl relative overflow-hidden backdrop-blur-xl border border-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-transform duration-1000 ease-in-out hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(73, 181, 205, 0.9) 0%, rgba(31, 107, 133, 0.8) 100%)',
                transform: 'rotateX(15deg) rotateY(-10deg) rotateZ(2deg)',
                animation: 'float 6s ease-in-out infinite'
              }}
            >
              {/* Card Inner Glow/Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/30 pointer-events-none"></div>
              
              <div className="p-6 h-full flex flex-col justify-between relative z-10">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-8 bg-yellow-400/80 rounded flex items-center justify-center opacity-80">
                    <div className="w-8 h-5 border border-yellow-200/50 rounded-sm"></div>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-50" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                
                <div className="flex justify-between text-xs font-mono opacity-80 px-2 mt-4">
                   <span>Yue Name</span>
                   <span>Yue Tring</span>
                </div>

                <div className="flex justify-between items-end">
                  <div className="font-semibold text-xl tracking-wide">Odyssey<span className="font-light">bank</span></div>
                  <div className="text-lg font-bold italic opacity-90">VISA</div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Partners Strip */}
        <section className="border-y border-white/10 bg-[#0d2a38]/40 backdrop-blur-sm py-8 px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Logos using text for simplicity but styled to look like logos */}
             <div className="flex items-center gap-2 font-bold text-xl"><Globe2 size={24}/> yonder</div>
             <div className="flex items-center gap-2 font-semibold text-lg"><Search size={20}/> ONE DOME</div>
             <div className="flex items-center gap-2 font-mono tracking-widest"><Zap size={20}/> ISOMETRIC</div>
             <div className="font-bold text-xl tracking-tighter">deblock</div>
             <div className="font-bold text-xl uppercase">PATCH</div>
             <div className="flex items-center gap-1 font-semibold text-xl"><ShieldCheck size={20}/>safi</div>
          </div>
        </section>

        {/* Features / Value Props - Extending the Universe */}
        <section className="py-32 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Designed for a <span className="font-serif italic text-[#E0E59A]">boundless</span> world</h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">Experience financial freedom with tools crafted for clarity, speed, and absolute security.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-[#1e5870] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe2 size={28} className="text-[#E0E59A]" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Global Reach</h3>
                <p className="text-white/60 leading-relaxed">Send money to over 150 countries with real-time exchange rates and zero hidden markups. Your money knows no borders.</p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-[#1e5870] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap size={28} className="text-[#E0E59A]" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Instant Settling</h3>
                <p className="text-white/60 leading-relaxed">Why wait days? Over 80% of our transfers arrive in seconds. Powered by our proprietary next-gen routing network.</p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-[#1e5870] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} className="text-[#E0E59A]" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Bank-grade Security</h3>
                <p className="text-white/60 leading-relaxed">Your funds are safeguarded with industry-leading encryption and biometric authentication. Peace of mind built-in.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[#0C3E50]/40 skew-y-3 transform origin-bottom-left -z-10 border-y border-white/5"></div>
          
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-8">Ready to start your <span className="font-serif italic text-[#E0E59A]">Odyssey</span>?</h2>
            <p className="text-xl text-white/80 mb-10 font-light">Join millions who have already revolutionized how they manage money.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-white text-[#0C3E50] hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center gap-2 w-full sm:w-auto justify-center">
                Create Free Account <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-colors font-medium text-lg w-full sm:w-auto justify-center backdrop-blur-sm">
                View Pricing
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 pb-10 px-6 border-t border-white/10 bg-[#061b25] relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-lg leading-none">O</div>
                <span className="text-xl font-semibold tracking-wide uppercase">Odyssey</span>
              </div>
              <p className="text-white/50 max-w-sm mb-6">The fast, secure, and beautiful way to manage your global finances. Designed for the modern world.</p>
              <div className="flex gap-4">
                {/* Social icons placeholders */}
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer border border-white/10">in</div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer border border-white/10">tw</div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer border border-white/10">ig</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Product</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Transfers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Multi-currency</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Account</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API & Developers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Legal</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm">
            <p>© 2026 Odyssey Financial Ltd. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
               <span>Status: Operational</span>
               <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            </div>
          </div>
        </footer>

      </div>

      {/* Global CSS for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px) rotateX(15deg) rotateY(-10deg) rotateZ(2deg); }
          50% { transform: translateY(-20px) rotateX(20deg) rotateY(-5deg) rotateZ(1deg); }
          100% { transform: translateY(0px) rotateX(15deg) rotateY(-10deg) rotateZ(2deg); }
        }
      `}} />
    </div>
  );
};

export default App;
p4