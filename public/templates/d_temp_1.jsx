import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Menu, X, Car, Calendar, Phone } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['About Us', 'Join Our Dealers', 'Events', 'Contact'];

  return (
    <div className="min-h-screen bg-[#7a2a2a] text-white font-sans overflow-x-hidden">
      {/* Header */}
      <nav className="fixed w-full z-50 flex items-center justify-between px-6 py-6 lg:px-16">
        <div className="text-2xl font-serif italic tracking-tighter">Electra</div>
        <div className="hidden lg:flex items-center space-x-10 text-sm tracking-widest font-light">
          {navLinks.map(link => (
            <a key={link} href="#" className="hover:text-amber-200 transition-colors">{link}</a>
          ))}
          <div className="w-6 h-6 border rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#7a2a2a]">
            <span className="text-[10px]">O</span>
          </div>
        </div>
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col lg:flex-row">
        {/* White Left Panel */}
        <div className="w-full lg:w-1/2 h-[60%] lg:h-full bg-[#f9f9f9] text-[#222] flex flex-col justify-center px-8 lg:px-20 pt-20">
          <h1 className="text-7xl lg:text-9xl font-serif leading-none mb-8 animate-fade-in">Classic</h1>
          <p className="max-w-md text-[#555] leading-relaxed mb-8">
            American Dream Tour - Classic Car Collection. The Classic Car Collection features 
            beautifully restored antique convertible cars from the mid 1900s.
          </p>
          <button className="flex items-center text-sm uppercase tracking-widest gap-2 group">
            Show More <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Deep Red Right Panel */}
        <div className="w-full lg:w-1/2 h-[40%] lg:h-full bg-[#7a2a2a] relative flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8d3535] to-[#7a2a2a] opacity-50"></div>
          
          <div className="absolute top-20 right-10 text-right z-10">
            <h3 className="font-bold uppercase tracking-tighter text-lg">1960 Buick Electra</h3>
            <p className="text-sm opacity-80 mt-2 max-w-[200px]">We love our 1960 Buick Electra with its smooth lines and comfy leather interior.</p>
          </div>

          <div className="relative z-20 w-full max-w-2xl transform hover:scale-105 transition-transform duration-700">
             <div className="text-[150px] lg:text-[250px] font-bold text-white opacity-10 absolute -bottom-20 -left-10 select-none">60</div>
             {/* Abstract Car Silhouette Representation */}
             <div className="w-full h-64 bg-gradient-to-t from-black/20 to-transparent rounded-lg flex items-end justify-center border-b-2 border-white/20">
                <Car className="w-48 h-48 text-white/90 mb-4" strokeWidth={0.5} />
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-16 bg-[#f9f9f9] text-[#222]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif mb-16">The Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Calendar />, title: "Exclusive Tours", desc: "Drive through scenic landscapes in our vintage fleet." },
              { icon: <Car />, title: "Expert Restoration", desc: "Craftsmanship that keeps history alive." },
              { icon: <Phone />, title: "24/7 Support", desc: "Concierge service for all our club members." },
            ].map((item, i) => (
              <div key={i} className="group p-8 border border-gray-200 hover:border-[#7a2a2a] transition-all duration-500 bg-white">
                <div className="text-[#7a2a2a] mb-6">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="text-[#7a2a2a]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#7a2a2a] border-t border-white/10 text-center text-xs uppercase tracking-widest">
        © 1960-2026 Electra Heritage Collection. All rights reserved.
      </footer>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#7a2a2a] z-50 flex flex-col items-center justify-center gap-8 text-2xl">
          {navLinks.map(link => (
            <a key={link} href="#" onClick={() => setIsMenuOpen(false)}>{link}</a>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
2