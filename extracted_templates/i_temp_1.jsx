import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ChevronDown, 
  ArrowRight, 
  ArrowLeft,
  Quote, 
  MapPin, 
  Home, 
  Star, 
  Building, 
  CheckCircle, 
  SlidersHorizontal,
  DollarSign, 
  Calendar,
  Layers,
  Sparkles,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';

// Add elegant font configurations dynamically
const FontStyle = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
    
    .font-jakarta {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .font-playfair {
      font-family: 'Playfair Display', serif;
    }
    .font-inter {
      font-family: 'Inter', sans-serif;
    }
    
    /* Smooth custom scrollbars */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #F3F2EC;
    }
    ::-webkit-scrollbar-thumb {
      background: #D97706;
      border-radius: 3px;
    }
  `}} />
);

export default function App() {
  // State management for interactive elements
  const [heroTab, setHeroTab] = useState('Buy'); // 'Buy' | 'Rent' | 'Sell'
  const [searchLocation, setSearchLocation] = useState('');
  const [searchPropertyType, setSearchPropertyType] = useState('All');
  const [searchPrice, setSearchPrice] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Property Listings State
  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(0);
  const [filterType, setFilterType] = useState('All'); // 'All' | 'Villa' | 'Condo' | 'Penthouse'

  // Mock Premium Property Data matching the inspiration
  const properties = [
    {
      id: 1,
      title: "Bismillah House",
      type: "Villa",
      location: "Beverly Hills, CA",
      price: "$560,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      description: "Contemporary home featuring exceptional interior design, high glass ceilings, and premium cedar cladding.",
      beds: 4,
      baths: 4.5,
      sqft: "4,200 sqft"
    },
    {
      id: 2,
      title: "The Amber Pavillion",
      type: "Penthouse",
      location: "Malibu Sands, CA",
      price: "$890,000",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      description: "Sunlit architectural masterpiece showcasing panoramic ocean views and bespoke natural timber details.",
      beds: 3,
      baths: 3,
      sqft: "3,800 sqft"
    },
    {
      id: 3,
      title: "Oakwood Residence",
      type: "Condo",
      location: "Portland, OR",
      price: "$420,000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
      description: "Minimalist urban oasis crafted with sustainable materials, smart home tech, and private terrace gardens.",
      beds: 2,
      baths: 2,
      sqft: "1,950 sqft"
    },
    {
      id: 4,
      title: "The Glass Atrium",
      type: "Villa",
      location: "Austin, TX",
      price: "$740,000",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
      description: "A showcase of brutalist-organic fusion with dramatic glass cantilever designs and a private heated pool canyon.",
      beds: 5,
      baths: 6,
      sqft: "5,100 sqft"
    }
  ];

  const handleNextProperty = () => {
    setSelectedPropertyIndex((prev) => (prev + 1) % properties.length);
  };

  const handlePrevProperty = () => {
    setSelectedPropertyIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  // Neighborhood/Feature tabs
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      id: 0,
      title: "Explore great neighborhoods",
      description: "Explore video tours, in-depth research, and curated articles on over 20,000 premium local communities.",
      icon: <Layers className="w-5 h-5 text-[#E28733]" />,
      badge: "Local Insights"
    },
    {
      id: 1,
      title: "Find highly rated best property",
      description: "Discover verified architectural awards, top-rated school zones, and localized investment return data.",
      icon: <Star className="w-5 h-5 text-[#E28733]" />,
      badge: "A+ Verified"
    },
    {
      id: 2,
      title: "Discover condo quality buildings",
      description: "Browse high-end luxury high-rises complete with 5-star concierge ratings, spas, and smart environmental footprints.",
      icon: <Building className="w-5 h-5 text-[#E28733]" />,
      badge: "Premium Quality"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3F2EC] text-[#1B1B1B] font-inter antialiased selection:bg-[#E28733]/20 overflow-x-hidden">
      <FontStyle />

      {/* Floating Sparkle Deco */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] pointer-events-none opacity-20 blur-[120px] bg-gradient-to-br from-[#E28733]/30 via-transparent to-[#D97706]/10 rounded-full z-0" />

      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F3F2EC]/80 border-b border-[#E3E2DC] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E28733] to-[#F59E0B] flex items-center justify-center shadow-md shadow-[#E28733]/20">
              <span className="w-4 h-4 rounded-full bg-[#F3F2EC]" />
            </div>
            <span className="font-jakarta font-extrabold text-xl tracking-tight text-[#1B1B1B]">
              UiX<span className="text-[#E28733]">SHUVO</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 bg-[#EBEAE3]/60 px-6 py-2.5 rounded-full border border-[#DFDDD6]/80">
            <a href="#buy" className="text-sm font-jakarta font-semibold text-[#1B1B1B] hover:text-[#E28733] transition-colors">Buy</a>
            <a href="#rent" className="text-sm font-jakarta font-semibold text-[#1B1B1B] hover:text-[#E28733] transition-colors">Rent</a>
            <a href="#sell" className="text-sm font-jakarta font-semibold text-[#1B1B1B] hover:text-[#E28733] transition-colors">Sell</a>
            <a href="#agent" className="text-sm font-jakarta font-semibold text-[#1B1B1B]/70 hover:text-[#E28733] transition-colors">Find Agent</a>
          </nav>

          {/* Right Utilities */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#add" className="text-sm font-jakarta font-semibold text-[#1B1B1B]/80 hover:text-[#1B1B1B] transition-all">Add Property</a>
            <a href="#about" className="text-sm font-jakarta font-semibold text-[#1B1B1B]/80 hover:text-[#1B1B1B] transition-all">About Us</a>
            <button className="bg-[#1B1B1B] text-[#F3F2EC] px-6 py-2.5 rounded-full text-sm font-jakarta font-semibold hover:bg-[#E28733] hover:text-white transition-all duration-300 shadow-sm">
              Join
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 text-[#1B1B1B] hover:bg-[#EBEAE3] rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F3F2EC] border-b border-[#E3E2DC] px-4 py-6 flex flex-col gap-4 animate-fadeIn">
            <a href="#buy" onClick={() => setMobileMenuOpen(false)} className="text-lg font-jakarta font-semibold px-4 py-2 hover:bg-[#EBEAE3] rounded-xl">Buy</a>
            <a href="#rent" onClick={() => setMobileMenuOpen(false)} className="text-lg font-jakarta font-semibold px-4 py-2 hover:bg-[#EBEAE3] rounded-xl">Rent</a>
            <a href="#sell" onClick={() => setMobileMenuOpen(false)} className="text-lg font-jakarta font-semibold px-4 py-2 hover:bg-[#EBEAE3] rounded-xl">Sell</a>
            <a href="#agent" onClick={() => setMobileMenuOpen(false)} className="text-lg font-jakarta font-semibold px-4 py-2 hover:bg-[#EBEAE3] rounded-xl text-[#1B1B1B]/70">Find Agent</a>
            <hr className="border-[#E3E2DC]" />
            <div className="flex flex-col gap-3 px-4 pt-2">
              <a href="#add" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold">Add Property</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold">About Us</a>
              <button className="bg-[#1B1B1B] text-[#F3F2EC] py-3 rounded-full text-sm font-semibold hover:bg-[#E28733] transition-colors mt-2">
                Join Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION WITH LUXURY WOOD/GLASS ARCHITECTURE PANEL */}
      <section className="relative pt-6 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        
        {/* Curved Asymmetric Main Hero Container */}
        <div className="relative bg-[#EBEAE3] rounded-[3rem] p-6 lg:p-12 overflow-hidden border border-[#DFDDD6] shadow-xl shadow-stone-800/5">
          
          {/* Accent light ray inside */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-white/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full z-10 pr-0 lg:pr-4">
              
              {/* Mixed-weight gorgeous Hero Headline */}
              <div className="space-y-4">
                <h1 className="font-jakarta text-5xl sm:text-6xl lg:text-[4.7rem] font-extrabold tracking-tight leading-[1.05] text-[#1B1B1B]">
                  Connecting you <span className="font-playfair font-light italic text-[#1B1B1B]/50 block sm:inline">to the</span>
                  <span className="block mt-1">
                    <span className="font-playfair font-normal italic text-[#E28733] mr-2">home</span> 
                    you love
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-[#1B1B1B]/70 max-w-xl font-normal leading-relaxed pt-2">
                  Discover a new echelon of real estate listing platforms. Seamless connection, premium visuals, and tailored spaces suited perfectly to your life's rhythms.
                </p>
              </div>

              {/* Dynamic Interactive Hero Search Bar */}
              <div className="mt-8 bg-white p-2.5 sm:p-3 rounded-3xl sm:rounded-full shadow-lg shadow-stone-800/5 border border-[#DFDDD6] max-w-lg">
                {/* Tabs inside search */}
                <div className="flex gap-1 mb-2.5 ml-2">
                  {['Buy', 'Rent', 'Sell'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setHeroTab(tab)}
                      className={`px-5 py-1.5 rounded-full text-xs font-jakarta font-bold tracking-wide transition-all ${
                        heroTab === tab 
                          ? 'bg-[#1B1B1B] text-white shadow-sm' 
                          : 'bg-transparent text-[#1B1B1B]/60 hover:text-[#1B1B1B] hover:bg-[#F3F2EC]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Search input field and orange action button */}
                <div className="flex items-center gap-2 bg-[#F3F2EC] rounded-2xl sm:rounded-full px-4 py-2">
                  <MapPin className="w-5 h-5 text-[#E28733] shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Address, School, City or Market..." 
                    className="bg-transparent border-none outline-none text-sm text-[#1B1B1B] placeholder-[#1B1B1B]/40 w-full font-medium"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                  <button className="bg-[#E28733] hover:bg-[#D97706] text-white p-3 rounded-full transition-all duration-300 shadow-md shadow-[#E28733]/30 shrink-0">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Decorative blockquote box (Replicating style from inspiration) */}
              <div className="mt-12 bg-white/40 border border-[#DFDDD6]/60 rounded-[2rem] p-6 relative max-w-md backdrop-blur-sm">
                <Quote className="absolute -top-4 -left-3 w-10 h-10 text-[#E28733]/20 fill-[#E28733]/10" />
                <p className="font-playfair italic text-[#1B1B1B]/80 text-[0.95rem] leading-relaxed pl-4">
                  "Turning your dreams into reality, one exquisite residence at a time. Let us guide you precisely to your perfect modern sanctuary."
                </p>
                <div className="mt-3 pl-4 flex items-center gap-2">
                  <span className="w-5 h-[1px] bg-[#E28733]" />
                  <span className="text-xs font-jakarta font-bold tracking-wider uppercase text-[#1B1B1B]/60">UiXSHUVO Curated Editorial</span>
                </div>
              </div>

            </div>

            {/* Right Architectural Image Frame Column */}
            <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden group">
              
              {/* Curated Modern Architecture Image matching the palette */}
              <div className="absolute inset-0 bg-stone-900">
                <img 
                  src={properties[selectedPropertyIndex].image} 
                  alt={properties[selectedPropertyIndex].title}
                  className="w-full h-full object-cover object-center transition-all duration-1000 ease-out scale-105 group-hover:scale-100 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/60 via-transparent to-transparent" />
              </div>

              {/* FLOATING CARD: Bismillah House Panel (Perfect Asymmetrical Overlay Style) */}
              <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:w-[350px] bg-white/95 backdrop-blur-md rounded-3xl p-5 border border-[#DFDDD6]/80 shadow-2xl transition-all duration-500 animate-slideUp">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="bg-[#E28733]/10 text-[#E28733] text-[10px] font-jakarta font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {properties[selectedPropertyIndex].type}
                    </span>
                    <h3 className="font-jakarta font-extrabold text-xl text-[#1B1B1B] mt-1.5">
                      {properties[selectedPropertyIndex].title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-[#E28733]">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-jakarta font-bold">4.9</span>
                  </div>
                </div>

                <p className="text-xs text-[#1B1B1B]/70 line-clamp-2 leading-relaxed mb-4">
                  {properties[selectedPropertyIndex].description}
                </p>

                <div className="flex justify-between items-center pt-3 border-t border-[#F3F2EC]">
                  <div>
                    <span className="text-[10px] text-[#1B1B1B]/50 block uppercase font-bold tracking-wider">Asking Price</span>
                    <span className="font-jakarta font-extrabold text-[#E28733] text-lg">
                      {properties[selectedPropertyIndex].price}
                    </span>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handlePrevProperty}
                      className="w-9 h-9 rounded-full bg-[#F3F2EC] hover:bg-[#EBEAE3] text-[#1B1B1B] flex items-center justify-center transition-all duration-200 active:scale-95"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={handleNextProperty}
                      className="w-9 h-9 rounded-full bg-[#E28733] hover:bg-[#D97706] text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md shadow-[#E28733]/30"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Tiny Floating Detail Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-jakarta font-bold text-[#1B1B1B] shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Available Now
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* STATS & FEATURE ACCOMPLISHMENTS (Inspired by bottom layout of reference image) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#E3E2DC]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Trust & Social Proof Stats */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#E28733] font-jakarta font-bold text-xs tracking-widest uppercase block">
              Market Leaders
            </span>
            <h2 className="font-jakarta text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1B1B1B]">
              Trusted by <br className="hidden sm:inline" />
              <span className="font-playfair font-normal italic text-[#E28733]">100 Million</span> buyers
            </h2>
            <p className="text-sm sm:text-base text-[#1B1B1B]/70 max-w-md leading-relaxed">
              We connect you directly to the verified advisors and luxury specialists who understand high-end architecture and local environments best.
            </p>

            {/* Avatars Stack */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3 overflow-hidden">
                <img 
                  className="inline-block h-12 w-12 rounded-full ring-4 ring-[#F3F2EC] object-cover" 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" 
                  alt="Buyer" 
                />
                <img 
                  className="inline-block h-12 w-12 rounded-full ring-4 ring-[#F3F2EC] object-cover" 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                  alt="Buyer" 
                />
                <img 
                  className="inline-block h-12 w-12 rounded-full ring-4 ring-[#F3F2EC] object-cover" 
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200" 
                  alt="Buyer" 
                />
                <img 
                  className="inline-block h-12 w-12 rounded-full ring-4 ring-[#F3F2EC] object-cover" 
                  src="https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&q=80&w=200" 
                  alt="Buyer" 
                />
              </div>
              <div>
                <span className="font-jakarta font-extrabold text-lg text-[#1B1B1B] block">10,000+</span>
                <span className="text-xs text-[#1B1B1B]/60 font-medium">Bespoke Matches Made</span>
              </div>
            </div>

            {/* Numeric Stats Breakdown */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E3E2DC]">
              <div>
                <span className="font-jakarta font-extrabold text-3xl text-[#1B1B1B] block">100M+</span>
                <span className="text-[11px] font-bold text-[#1B1B1B]/50 tracking-wider uppercase block mt-1">Happy buyers</span>
              </div>
              <div className="border-l border-[#E3E2DC] pl-4">
                <span className="font-jakarta font-extrabold text-3xl text-[#1B1B1B] block">40M+</span>
                <span className="text-[11px] font-bold text-[#1B1B1B]/50 tracking-wider uppercase block mt-1">Client reviews</span>
              </div>
              <div className="border-l border-[#E3E2DC] pl-4">
                <span className="font-jakarta font-extrabold text-3xl text-[#1B1B1B] block">4.9</span>
                <span className="text-[11px] font-bold text-[#1B1B1B]/50 tracking-wider uppercase block mt-1">Positive Rating</span>
              </div>
            </div>

          </div>

          {/* Divider line in landscape */}
          <div className="hidden lg:block lg:col-span-1 h-32 w-[1px] bg-neutral-300 mx-auto" />

          {/* Right Block: Accordion Features */}
          <div className="lg:col-span-6 space-y-4">
            {features.map((feat, idx) => {
              const isActive = activeFeature === idx;
              return (
                <div 
                  key={feat.id}
                  onClick={() => setActiveFeature(idx)}
                  className={`cursor-pointer transition-all duration-300 p-6 rounded-[2rem] border ${
                    isActive 
                      ? 'bg-white border-[#DFDDD6] shadow-md shadow-stone-800/5 translate-x-2' 
                      : 'bg-transparent border-transparent hover:bg-white/40'
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                      isActive ? 'bg-[#E28733]/10 text-[#E28733]' : 'bg-[#EBEAE3] text-[#1B1B1B]/60'
                    }`}>
                      {feat.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-jakarta font-extrabold text-lg text-[#1B1B1B]">
                          {feat.title}
                        </h4>
                        {isActive && (
                          <span className="bg-[#1B1B1B] text-[#F3F2EC] text-[10px] font-jakarta font-bold px-2.5 py-1 rounded-full uppercase">
                            {feat.badge}
                          </span>
                        )}
                      </div>
                      
                      <div className={`grid transition-all duration-300 overflow-hidden ${
                        isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                      }`}>
                        <p className="text-sm text-[#1B1B1B]/70 leading-relaxed overflow-hidden">
                          {feat.description}
                        </p>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center self-center transition-all ${
                      isActive ? 'bg-[#E28733] border-transparent text-white rotate-45' : 'text-[#1B1B1B]/60'
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* DYNAMIC EXPLORER SEARCH PANEL (Based on bottom part of reference design) */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        
        {/* Visual curved header for searching */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#E28733] font-jakarta font-bold text-xs tracking-widest uppercase">
            Curated Discovery
          </span>
          <h2 className="font-jakarta text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1B1B1B] mt-2">
            Find your <span className="font-playfair font-normal italic text-[#1B1B1B]/50">dream home</span>
          </h2>
          <p className="text-sm text-[#1B1B1B]/70 mt-3">
            Connecting you with the perfect property tailored specifically for your loved ones. Filter through high-grade properties seamlessly.
          </p>
        </div>

        {/* The Multi-filter Ribbon */}
        <div className="bg-[#EBEAE3] rounded-[2.5rem] p-4 border border-[#DFDDD6] shadow-lg shadow-stone-800/5 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            
            {/* Filter 1: Property */}
            <div className="bg-white rounded-2xl p-3.5 border border-[#DFDDD6]/50">
              <span className="text-[10px] uppercase font-jakarta font-extrabold text-[#1B1B1B]/40 block mb-1">Property Type</span>
              <div className="relative">
                <select 
                  value={searchPropertyType} 
                  onChange={(e) => setSearchPropertyType(e.target.value)}
                  className="w-full bg-transparent border-none outline-none font-jakarta font-bold text-sm text-[#1B1B1B] pr-6 cursor-pointer appearance-none"
                >
                  <option value="All">All Properties</option>
                  <option value="Villa">Villa Homes</option>
                  <option value="Condo">Luxury Condos</option>
                  <option value="Penthouse">Penthouses</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#1B1B1B]/40 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Filter 2: Location */}
            <div className="bg-white rounded-2xl p-3.5 border border-[#DFDDD6]/50">
              <span className="text-[10px] uppercase font-jakarta font-extrabold text-[#1B1B1B]/40 block mb-1">Location</span>
              <div className="relative">
                <select 
                  className="w-full bg-transparent border-none outline-none font-jakarta font-bold text-sm text-[#1B1B1B] pr-6 cursor-pointer appearance-none"
                >
                  <option>California, USA</option>
                  <option>Texas, USA</option>
                  <option>Oregon, USA</option>
                  <option>New York, USA</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#1B1B1B]/40 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Filter 3: Timing / Date */}
            <div className="bg-white rounded-2xl p-3.5 border border-[#DFDDD6]/50">
              <span className="text-[10px] uppercase font-jakarta font-extrabold text-[#1B1B1B]/40 block mb-1">Availability Date</span>
              <div className="relative">
                <select 
                  className="w-full bg-transparent border-none outline-none font-jakarta font-bold text-sm text-[#1B1B1B] pr-6 cursor-pointer appearance-none"
                >
                  <option>Immediate Access</option>
                  <option>Next 30 Days</option>
                  <option>Next 90 Days</option>
                  <option>Pre-construction</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#1B1B1B]/40 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Filter 4: Pricing */}
            <div className="bg-white rounded-2xl p-3.5 border border-[#DFDDD6]/50">
              <span className="text-[10px] uppercase font-jakarta font-extrabold text-[#1B1B1B]/40 block mb-1">Price Range</span>
              <div className="relative">
                <select 
                  value={searchPrice}
                  onChange={(e) => setSearchPrice(e.target.value)}
                  className="w-full bg-transparent border-none outline-none font-jakarta font-bold text-sm text-[#1B1B1B] pr-6 cursor-pointer appearance-none"
                >
                  <option value="All">All Ranges</option>
                  <option value="under500">Under $500k</option>
                  <option value="above500">Above $500k</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#1B1B1B]/40 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Filter 5: Search Button Trigger */}
            <button className="bg-[#1B1B1B] hover:bg-[#E28733] text-white rounded-2xl flex items-center justify-center gap-2 font-jakarta font-extrabold text-sm transition-all duration-300 shadow-md">
              <Search className="w-4 h-4" /> Search Now
            </button>

          </div>
        </div>

        {/* Dynamic Interactive Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties
            .filter(item => {
              // Simple simulation of state based filters
              if (searchPropertyType !== 'All' && item.type !== searchPropertyType) return false;
              if (searchPrice === 'under500' && parseInt(item.price.replace(/[^0-9]/g, '')) >= 500000) return false;
              if (searchPrice === 'above500' && parseInt(item.price.replace(/[^0-9]/g, '')) < 500000) return false;
              return true;
            })
            .map((property) => (
              <div 
                key={property.id} 
                className="group bg-[#EBEAE3] rounded-[2rem] overflow-hidden border border-[#DFDDD6] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                
                {/* Property Image Banner */}
                <div className="h-64 relative overflow-hidden bg-stone-900 shrink-0">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <span className="bg-[#1B1B1B] text-white text-[10px] font-jakarta font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {property.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full font-jakarta font-extrabold text-xs text-[#E28733] shadow-sm">
                    {property.price}
                  </div>
                </div>

                {/* Property Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[#1B1B1B]/50 text-xs font-semibold mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#E28733]" />
                      {property.location}
                    </div>

                    <h3 className="font-jakarta font-extrabold text-xl text-[#1B1B1B] leading-tight mb-2 group-hover:text-[#E28733] transition-colors">
                      {property.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#1B1B1B]/70 line-clamp-3 leading-relaxed mb-4">
                      {property.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DFDDD6]/80 flex items-center justify-between text-xs font-semibold text-[#1B1B1B]/60">
                    <div className="flex gap-4">
                      <span>{property.beds} Beds</span>
                      <span>{property.baths} Baths</span>
                      <span>{property.sqft}</span>
                    </div>

                    <button className="w-8 h-8 rounded-full bg-white text-[#1B1B1B] flex items-center justify-center group-hover:bg-[#E28733] group-hover:text-white transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
        </div>

      </section>

      {/* ADDITIONAL ATMOSPHERIC SECTION: DESIGN VIBE HERO SHOWCASE */}
      <section className="bg-[#EBEAE3] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-b border-[#DFDDD6]">
        
        {/* Abstract decorative graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E28733]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#E28733]" />
              <span className="text-[#E28733] font-jakarta font-bold text-xs tracking-widest uppercase">
                The Architectural Philosophy
              </span>
            </div>

            <h2 className="font-jakarta text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1B1B1B] leading-tight">
              Bespoke Spaces. <br />
              <span className="font-playfair font-normal italic text-[#E28733]">Crafted with Nature</span> in Mind.
            </h2>

            <p className="text-sm sm:text-base text-[#1B1B1B]/70 leading-relaxed">
              We align with builders who utilize structural timber, organic glass formations, and architectural angles that invite pure daylight. Each dwelling showcases high carbon responsibility and sensory layouts.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Floor plans designed for optimal circadian rhythm",
                "Certified thermal efficiency with natural woods",
                "Advanced integration of seamless automation"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E28733]" />
                  <span className="text-sm font-jakarta font-bold text-[#1B1B1B]/80">{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="bg-[#1B1B1B] hover:bg-[#E28733] text-white px-8 py-3.5 rounded-full font-jakarta font-extrabold text-sm transition-all duration-300 shadow-md">
                View Construction Standards
              </button>
            </div>
          </div>

          {/* Luxury side images showing high detail interior */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4">
            <div className="col-span-7 rounded-[2rem] overflow-hidden shadow-lg h-[350px]">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600" 
                alt="Luxury Living Room" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-5 rounded-[2rem] overflow-hidden shadow-lg h-[250px] self-end translate-y-6">
              <img 
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=600" 
                alt="Luxury Dining Room" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CURATED FAQS & ACCESSIBILITY INFO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#E28733] font-jakarta font-bold text-xs tracking-widest uppercase">
            Inquiries
          </span>
          <h2 className="font-jakarta text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1B1B1B] mt-1">
            Commonly Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "How does the matching consultation system work?",
              a: "Using structural design criteria and community feedback, we align your aesthetic requirements with exclusive properties, granting access to private off-market listings."
            },
            {
              q: "Can I manage real estate visits or digital tours remotely?",
              a: "Yes! High-definition interactive drone footage and architectural layouts are compiled for all properties to accommodate overseas luxury buyers."
            },
            {
              q: "Who conducts the valuation and quality vetting process?",
              a: "All structures are inspected by accredited engineers and designers specializing in natural wood, glass longevity, and energy-conserving home platforms."
            }
          ].map((faq, index) => (
            <details 
              key={index} 
              className="group bg-[#EBEAE3]/50 border border-[#DFDDD6] rounded-2xl p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
            >
              <summary className="flex items-center justify-between font-jakarta font-bold text-base sm:text-lg text-[#1B1B1B] list-none">
                <span>{faq.q}</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-[#E28733]">
                  <ChevronDown className="w-5 h-5" />
                </span>
              </summary>
              <p className="mt-3 text-sm text-[#1B1B1B]/70 leading-relaxed font-normal">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1B1B1B] text-[#F3F2EC] rounded-t-[3.5rem] pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Subtle orange ambient glow in footer */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E28733]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-neutral-800">
            
            {/* Branding Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#E28733] to-[#F59E0B] flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#1B1B1B]" />
                </div>
                <span className="font-jakarta font-extrabold text-xl tracking-tight text-white">
                  UiX<span className="text-[#E28733]">SHUVO</span>
                </span>
              </div>
              
              <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
                Reimagining luxury housing through premium design language, environmental intelligence, and custom property interactions.
              </p>

              {/* Newsletter form */}
              <div className="pt-2">
                <span className="text-xs font-jakarta font-bold text-neutral-300 uppercase block mb-2 tracking-wider">
                  Subscribe for Premium Inventory updates
                </span>
                <div className="flex gap-2 max-w-sm">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="bg-neutral-800/80 border border-neutral-700 rounded-full px-4 py-2.5 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#E28733] w-full"
                  />
                  <button className="bg-[#E28733] hover:bg-[#D97706] text-white text-xs font-jakarta font-bold px-5 py-2.5 rounded-full transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="font-jakarta font-bold text-sm tracking-wider uppercase text-[#E28733] mb-5">
                Explore
              </h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li><a href="#buy" className="hover:text-white transition-colors">Buy Property</a></li>
                <li><a href="#rent" className="hover:text-white transition-colors">Rent Villas</a></li>
                <li><a href="#sell" className="hover:text-white transition-colors">Sell Listings</a></li>
                <li><a href="#map" className="hover:text-white transition-colors">Neighborhood Maps</a></li>
              </ul>
            </div>

            {/* About Column */}
            <div>
              <h4 className="font-jakarta font-bold text-sm tracking-wider uppercase text-[#E28733] mb-5">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li><a href="#about" className="hover:text-white transition-colors">Our History</a></li>
                <li><a href="#architects" className="hover:text-white transition-colors">Collaborators</a></li>
                <li><a href="#career" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Terms of Use</a></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="font-jakarta font-bold text-sm tracking-wider uppercase text-[#E28733] mb-5">
                Inquiries
              </h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li><a href="#contact" className="hover:text-white transition-colors">Speak to an Agent</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Consultation FAQ</a></li>
                <li><a href="#locations" className="hover:text-white transition-colors">Office Locations</a></li>
                <li className="text-[#E28733] font-bold">support@uixshuvo.com</li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-10 text-xs text-neutral-500">
            <p>© 2026 UiXSHUVO Inc. All architectural assets, designs, and materials reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookie Settings</a>
              <a href="#accessibility" className="hover:text-white transition-colors">Accessibility Statement</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
2