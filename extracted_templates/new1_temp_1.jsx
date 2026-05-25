import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  User, 
  Play, 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  ChevronRight, 
  Sliders, 
  Sun, 
  Droplets, 
  Maximize2, 
  Compass, 
  Check, 
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';

// Custom plant products database
const PLANT_PRODUCTS = [
  {
    id: 'p1',
    name: 'Silver Pothos',
    scientificName: 'Scindapsus pictus',
    price: 48,
    rating: 4.9,
    category: 'Low Light',
    colors: ['#E2E8F0', '#DFE6E1', '#C5D3C8', '#1A3A2B'],
    colorNames: ['Ceramic White', 'Alabaster Sage', 'Muted Eucalyptus', 'Forest Clay'],
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=800',
    description: 'Striking heart-shaped matte green leaves splashed with shimmering silver-grey variegations.',
    specs: { light: 'Low to Medium Indirect', water: 'Every 1-2 weeks', size: 'Medium (12-15")', difficulty: 'Beginner' }
  },
  {
    id: 'p2',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    price: 85,
    rating: 4.8,
    category: 'Air Purifying',
    colors: ['#E2E8F0', '#C5D3C8', '#1A3A2B'],
    colorNames: ['Ceramic White', 'Muted Eucalyptus', 'Forest Clay'],
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800',
    description: 'The ultimate statement piece, famous for its dramatic natural leaf fenestrations.',
    specs: { light: 'Bright Indirect', water: 'Every 1-2 weeks', size: 'Large (24-30")', difficulty: 'Moderate' }
  },
  {
    id: 'p3',
    name: 'Fiddle Leaf Fig',
    scientificName: 'Ficus lyrata',
    price: 120,
    rating: 4.7,
    category: 'Air Purifying',
    colors: ['#E2E8F0', '#1A3A2B'],
    colorNames: ['Ceramic White', 'Forest Clay'],
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&q=80&w=800',
    description: 'An elegant, upright focal point with large, glossy, violin-shaped foliage.',
    specs: { light: 'Consistent Bright Indirect', water: 'When top soil is dry', size: 'Extra Large (40-50")', difficulty: 'Experienced' }
  },
  {
    id: 'p4',
    name: 'Calathea Orbifolia',
    scientificName: 'Calathea orbifolia',
    price: 54,
    rating: 4.6,
    category: 'Pet Friendly',
    colors: ['#DFE6E1', '#C5D3C8', '#1A3A2B'],
    colorNames: ['Alabaster Sage', 'Muted Eucalyptus', 'Forest Clay'],
    image: 'https://images.unsplash.com/photo-1620127815162-8cd91453c03b?auto=format&fit=crop&q=80&w=800',
    description: 'A pet-safe stunner displaying oversized round leaves with exquisite silvery-green pinstripes.',
    specs: { light: 'Medium Indirect / Shade', water: 'Keep consistently moist', size: 'Medium (14-18")', difficulty: 'Moderate' }
  },
  {
    id: 'p5',
    name: 'Velvet Calathea',
    scientificName: 'Calathea rufibarba',
    price: 42,
    rating: 4.9,
    category: 'Pet Friendly',
    colors: ['#E2E8F0', '#DFE6E1'],
    colorNames: ['Ceramic White', 'Alabaster Sage'],
    image: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=800',
    description: 'Features soft, fuzzy, lance-shaped leaves with deep purple-burgundy undersides.',
    specs: { light: 'Medium Indirect', water: 'Weekly gentle misting', size: 'Medium (12-16")', difficulty: 'Moderate' }
  },
  {
    id: 'p6',
    name: 'Zamioculcas Zamiifolia',
    scientificName: 'ZZ Plant',
    price: 38,
    rating: 4.9,
    category: 'Low Light',
    colors: ['#E2E8F0', '#1A3A2B'],
    colorNames: ['Ceramic White', 'Forest Clay'],
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&q=80&w=800',
    description: 'Virtually indestructible with architectural, high-gloss stems that store ample water reservoirs.',
    specs: { light: 'Very Low to Bright', water: 'Every 3-4 weeks', size: 'Medium (15-20")', difficulty: 'Beginner' }
  }
];

export default function App() {
  // State Management
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [heroColorIndex, setHeroColorIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Interactive Care Simulator State
  const [lightLevel, setLightLevel] = useState(50); // 0 to 100
  const [waterInterval, setWaterInterval] = useState(7); // days
  const [plantType, setPlantType] = useState('Pothos'); // Pothos, Monstera, Ficus

  // Spatial Planner State
  const [currentRoom, setCurrentRoom] = useState('living'); // living, study, bedroom
  const [activePlannerPlant, setActivePlannerPlant] = useState('Monstera'); // Monstera, Pothos, Fig
  const [plantScale, setPlantScale] = useState(100); // percentage

  // Notification state
  const [notification, setNotification] = useState(null);

  // Quick Utility: Show dynamic success toast
  const triggerNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3500);
  };

  // Add to Cart Logic
  const addToCart = (plant, colorName = 'Ceramic White') => {
    const cartItemId = `${plant.id}-${colorName.replace(/\s+/g, '-').toLowerCase()}`;
    const existingItem = cart.find(item => item.cartItemId === cartItemId);

    if (existingItem) {
      setCart(cart.map(item => 
        item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, {
        ...plant,
        cartItemId,
        selectedColorName: colorName,
        quantity: 1
      }]);
    }
    triggerNotification(`Added ${plant.name} (${colorName}) to your basket.`);
  };

  // Update Cart Quantity
  const updateQuantity = (cartItemId, delta) => {
    const updated = cart.map(item => {
      if (item.cartItemId === cartItemId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean);
    setCart(updated);
  };

  // Remove from Cart
  const removeFromCart = (cartItemId) => {
    setCart(cart.filter(item => item.cartItemId !== cartItemId));
    triggerNotification("Item removed from basket.");
  };

  // Calculate Subtotal
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Dynamic calculations for Care Simulator
  const calculateHealth = () => {
    let score = 100;
    if (plantType === 'Pothos') {
      // Pothos loves moderate light (30-60) and 7-10 days watering
      const lightDiff = Math.abs(lightLevel - 45);
      const waterDiff = Math.abs(waterInterval - 8);
      score -= (lightDiff * 0.8) + (waterDiff * 4);
    } else if (plantType === 'Monstera') {
      // Monstera loves bright light (60-85) and 6-8 days watering
      const lightDiff = Math.abs(lightLevel - 75);
      const waterDiff = Math.abs(waterInterval - 7);
      score -= (lightDiff * 1.0) + (waterDiff * 5);
    } else if (plantType === 'Ficus') {
      // Ficus is highly sensitive! Loves bright direct light (80-95) and consistent water (6-7 days)
      const lightDiff = Math.abs(lightLevel - 85);
      const waterDiff = Math.abs(waterInterval - 6);
      score -= (lightDiff * 1.5) + (waterDiff * 8);
    }
    return Math.max(12, Math.min(100, Math.round(score)));
  };

  const getCareMessage = (score) => {
    if (score > 85) return { text: "Thriving condition. Exceptional environment!", color: "text-emerald-700 bg-emerald-50 border-emerald-200" };
    if (score > 60) return { text: "Moderate condition. Some adjustments recommended.", color: "text-amber-700 bg-amber-50 border-amber-200" };
    return { text: "Stressed plant condition. Critical intervention required.", color: "text-rose-700 bg-rose-50 border-rose-200" };
  };

  const healthScore = calculateHealth();
  const careAdvice = getCareMessage(healthScore);

  return (
    <div className="min-h-screen bg-[#FCFDFB] text-[#111827] font-sans selection:bg-[#1A3A2B] selection:text-white">
      
      {/* Dynamic Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1A3A2B] text-white px-5 py-3 rounded-none shadow-xl border border-emerald-800 animate-slide-up">
          <Sparkles className="h-5 w-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-medium tracking-wide">{notification}</span>
        </div>
      )}

      {/* Hero Brand Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm transition-all duration-300">
          <div className="relative w-full max-w-4xl aspect-video bg-zinc-900 border border-[#2d6a4f]/20 shadow-2xl">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <span className="text-xs uppercase tracking-widest">Close Player</span>
              <X className="h-5 w-5" />
            </button>
            {/* Embedded scenic nature visual animation/video */}
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/gI8V_X88-zU?autoplay=1&mute=1&loop=1&playlist=gI8V_X88-zU" 
              title="Botanical Cinematics"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#FCFDFB]/95 backdrop-blur-md border-b border-[#1A3A2B]/10 px-6 lg:px-12 py-5 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brandmark */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="h-10 w-10 border border-[#1A3A2B] flex items-center justify-center rounded-none relative overflow-hidden transition-all duration-300 group-hover:bg-[#1A3A2B]">
              <div className="absolute inset-0 bg-transparent transition-all duration-300 scale-0 group-hover:scale-100 group-hover:bg-[#1A3A2B]" />
              {/* Premium Vector Brand Symbol */}
              <svg className="h-6 w-6 stroke-[#1A3A2B] group-hover:stroke-white relative z-10 transition-colors duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" strokeWidth="1.5" />
                <path d="M12 6C12 6 9.5 9.5 12 12C14.5 14.5 12 18 12 18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 12C6 12 9.5 9.5 12 12C14.5 14.5 18 12 18 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-[0.15em] text-[#1A3A2B] uppercase">Verdant</span>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#curation" className="text-xs uppercase tracking-widest text-[#111827] hover:text-[#3D7A5A] font-semibold transition-colors duration-200">Shop Catalog</a>
            <a href="#care-simulator" className="text-xs uppercase tracking-widest text-[#111827] hover:text-[#3D7A5A] font-semibold transition-colors duration-200">Care Simulator</a>
            <a href="#planner" className="text-xs uppercase tracking-widest text-[#111827] hover:text-[#3D7A5A] font-semibold transition-colors duration-200">Space Planner</a>
            <a href="#editorial" className="text-xs uppercase tracking-widest text-[#111827] hover:text-[#3D7A5A] font-semibold transition-colors duration-200">Journal</a>
          </nav>

          {/* Utilities Panel */}
          <div className="flex items-center gap-6">
            <button className="text-gray-600 hover:text-[#1A3A2B] transition-colors p-1.5" title="Search plants">
              <Search className="h-4.5 w-4.5" />
            </button>
            <button className="text-gray-600 hover:text-[#1A3A2B] transition-colors p-1.5 hidden sm:block" title="User account">
              <User className="h-4.5 w-4.5" />
            </button>
            
            {/* Basket Button with dynamic counter badge */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 group p-1.5 relative" 
              title="Open Basket"
            >
              <div className="relative">
                <ShoppingBag className="h-4.5 w-4.5 text-[#1A3A2B] group-hover:scale-105 transition-transform" />
                {cart.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#1A3A2B] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#FCFDFB]">
                    {cart.reduce((count, item) => count + item.quantity, 0)}
                  </span>
                )}
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#111827] hidden sm:inline">Basket</span>
            </button>
          </div>
        </div>
      </header>

      {/* SECTION 1: Editorial 3-Column Hero Layout (Inspired by visual guidelines) */}
      <section className="relative min-h-[calc(100vh-80px)] border-b border-[#1A3A2B]/10 flex flex-col justify-between">
        
        {/* Main 3-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full flex-grow">
          
          {/* Column A (Left): Bold Typography, Product Narrative & CTA (Cols: 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#1A3A2B]/10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#3D7A5A] font-bold mb-4 inline-block">Premium Botanical Atelier</span>
            
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#111827] leading-[1.05] tracking-tight mb-6">
              Home Is <br />
              Where My <br />
              <span className="inline-block bg-[#1A3A2B] text-white px-4 py-1.5 mt-2 rounded-none transform -rotate-1 shadow-md">
                Plants
              </span> Are
            </h1>

            <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed max-w-md mb-8">
              Explore our curation of architectural plants. Locally grown, meticulously cared for, and designed to breathe lasting elegance into your physical spaces.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
              <a 
                href="#curation"
                className="bg-[#1A3A2B] hover:bg-[#2d6a4f] text-white text-xs uppercase tracking-widest font-bold px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-[#1A3A2B]/20 flex items-center gap-2 group"
              >
                <span>Shop Plants</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button 
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-3 text-[#111827] hover:text-[#3D7A5A] transition-colors group py-2"
              >
                <div className="h-10 w-10 rounded-full border border-[#1A3A2B]/20 flex items-center justify-center group-hover:bg-[#1A3A2B] group-hover:text-white transition-all duration-300">
                  <Play className="h-4 w-4 fill-current ml-0.5" />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">Watch Our Video</span>
              </button>
            </div>

            {/* Mouse Scroll indicator with styling */}
            <div className="hidden lg:flex items-center gap-3 text-gray-400 text-xs tracking-widest uppercase">
              <div className="w-5 h-9 border border-[#1a3a2b]/30 rounded-full flex justify-center p-1.5">
                <div className="w-1 h-2 bg-[#1A3A2B] rounded-full animate-bounce" />
              </div>
              <span>Scroll Down</span>
            </div>
          </div>

          {/* Column B (Middle): Vertical botanical photo showcase (Cols: 4) */}
          <div className="lg:col-span-4 relative h-96 lg:h-auto min-h-[400px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A2B]/40 to-transparent z-10 mix-blend-multiply" />
            <img 
              src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=1200" 
              alt="Deep forest foliage"
              className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
            
            {/* Elegant overlay card containing botanical context */}
            <div className="absolute bottom-8 left-8 right-8 z-20 bg-[#FCFDFB]/95 p-6 backdrop-blur-sm border border-emerald-900/10 shadow-lg">
              <span className="text-[10px] uppercase tracking-widest text-[#3D7A5A] font-bold block mb-1">Nomenclature Focus</span>
              <h4 className="text-lg font-bold text-[#111827] italic">Philodendron Cordatum</h4>
              <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                Characterized by beautiful heart-shaped deep emerald leaves that cascade gracefully in high-altitude ambient environments.
              </p>
            </div>
          </div>

          {/* Column C (Right): Interactive featured product - Silver Pothos configurator (Cols: 3) */}
          <div className="lg:col-span-3 flex flex-col justify-between p-8 lg:p-12 border-t lg:border-t-0 border-[#1A3A2B]/10">
            
            {/* Dynamic line art SVG decoration */}
            <div className="flex justify-end pt-2">
              <svg className="h-24 w-24 text-gray-200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10 C50 10 75 35 50 60 C25 35 50 10 50 10 Z" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M50 60 C50 60 65 75 50 90 C35 75 50 60 50 60 Z" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="50" cy="60" r="3" fill="#1A3A2B" />
              </svg>
            </div>

            {/* Plant Spotlight Configurator */}
            <div className="my-auto py-8">
              <span className="text-xs uppercase tracking-widest text-[#3D7A5A] font-bold block mb-1">Highlighted Collection</span>
              <h3 className="text-2xl font-bold text-[#111827]">Silver Pothos</h3>
              
              <div className="mt-2 mb-4 flex items-center gap-2">
                <span className="text-sm font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-none border border-emerald-200/50">
                  5 Colors Available
                </span>
                <span className="text-sm font-medium text-gray-500">$48.00</span>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                A highly resilient trailing houseplant styled with distinct satin-silver variegations. Excellent choice for shelving.
              </p>

              {/* Color Swatch Selectors */}
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#111827] block mb-2">
                  Pot Ceramic Color: <span className="text-[#3D7A5A] normal-case">{PLANT_PRODUCTS[0].colorNames[heroColorIndex]}</span>
                </span>
                <div className="flex gap-2.5">
                  {PLANT_PRODUCTS[0].colors.map((hex, index) => (
                    <button
                      key={hex}
                      onClick={() => setHeroColorIndex(index)}
                      className={`h-7 w-7 rounded-full border transition-all duration-300 ${
                        heroColorIndex === index 
                          ? 'ring-2 ring-offset-2 ring-[#1A3A2B] border-transparent scale-110' 
                          : 'border-gray-200 hover:scale-105'
                      }`}
                      style={{ backgroundColor: hex }}
                      title={PLANT_PRODUCTS[0].colorNames[index]}
                    />
                  ))}
                </div>
              </div>

              {/* Purchase Trigger */}
              <button 
                onClick={() => addToCart(PLANT_PRODUCTS[0], PLANT_PRODUCTS[0].colorNames[heroColorIndex])}
                className="w-full bg-[#1A3A2B] hover:bg-[#2d6a4f] text-white text-[10px] uppercase tracking-widest font-black py-3.5 transition-colors flex items-center justify-center gap-2 group"
              >
                <span>Add to Basket</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Aesthetic Fine Print */}
            <div className="border-t border-[#1A3A2B]/10 pt-4 flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest">
              <span>Standard Shipping</span>
              <span>• Free Over $100</span>
            </div>
          </div>

        </div>

        {/* Dynamic Highlight Banner under Hero */}
        <div className="bg-[#1A3A2B] text-white px-8 py-3 overflow-hidden whitespace-nowrap hidden lg:block">
          <div className="flex justify-around text-[10px] uppercase tracking-[0.2em] animate-pulse">
            <span>🌿 Free climate-controlled premium shipping on orders above $100</span>
            <span>✦ 100% Happiness guarantee — 30 day return window</span>
            <span>🌱 Carbon-neutral hand delivery across major metro areas</span>
          </div>
        </div>

      </section>

      {/* SECTION 2: Dynamic Filterable Curation (Aesthetic Grid) */}
      <section id="curation" className="py-20 lg:py-28 px-6 lg:px-12 border-b border-[#1A3A2B]/10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          
          {/* Header titles */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#3D7A5A] font-bold block mb-2">Architectural Flora Selection</span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
              The Botanical Curation
            </h2>
            <p className="text-[#6B7280] text-sm mt-2 max-w-lg">
              Explore rare, hardy and meticulously selected specimens. Choose your bespoke hand-fired clay pottery to complete the design look.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Low Light', 'Pet Friendly', 'Air Purifying'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-wider font-bold transition-all duration-300 ${
                  selectedCategory === cat 
                    ? 'bg-[#1A3A2B] text-white' 
                    : 'bg-[#FCFDFB] text-gray-500 hover:text-[#111827] border border-[#1A3A2B]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Plant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLANT_PRODUCTS
            .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
            .map((plant) => (
              <div 
                key={plant.id} 
                className="group border border-[#1A3A2B]/10 bg-white overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image Showcase Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={plant.image} 
                    alt={plant.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FCFDFB]/95 text-[#1A3A2B] text-[9px] uppercase tracking-widest font-black px-2.5 py-1 backdrop-blur-sm border border-[#1A3A2B]/10">
                      {plant.category}
                    </span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#1A3A2B] transition-colors">
                        {plant.name}
                      </h3>
                      <p className="text-xs italic text-gray-400">{plant.scientificName}</p>
                    </div>
                    <span className="text-base font-bold text-[#111827]">${plant.price}</span>
                  </div>

                  <p className="text-xs text-[#6B7280] leading-relaxed mb-4 line-clamp-2">
                    {plant.description}
                  </p>

                  {/* Technical Specs List */}
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 py-3 border-t border-b border-[#1A3A2B]/5 mb-6 text-[11px] text-gray-500">
                    <div>
                      <span className="font-semibold text-gray-700">Light: </span>
                      {plant.specs.light}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Water: </span>
                      {plant.specs.water}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Size: </span>
                      {plant.specs.size}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Level: </span>
                      {plant.specs.difficulty}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => addToCart(plant, plant.colorNames[0])}
                      className="flex-grow bg-[#1A3A2B] hover:bg-[#2d6a4f] text-white text-[10px] uppercase tracking-widest font-black py-3 transition-colors text-center"
                    >
                      Instant Add
                    </button>
                    <button 
                      onClick={() => triggerNotification(`${plant.name} quick guide downloaded to system folder.`)}
                      className="border border-[#1A3A2B]/20 hover:border-[#1A3A2B] text-gray-600 hover:text-[#1A3A2B] p-3 transition-all"
                      title="Download Care Guide"
                    >
                      <Info className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

      </section>

      {/* SECTION 3: Interactive Soil & Environmental Care Simulator */}
      <section id="care-simulator" className="py-20 bg-[#F1F5F2] border-b border-[#1A3A2B]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Copywriting and Plant selection (Cols: 5) */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] text-[#3D7A5A] font-bold block mb-2">Digital Care Laboratory</span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#111827] tracking-tight mb-4">
              Botanical Care Simulator
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Adjust lighting levels and scheduled watering intervals using the laboratory toggles to simulate how environmental factors impact your plant's potential survival score.
            </p>

            {/* Step 1: Plant Selection */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest font-bold text-gray-700 block mb-3">
                1. Select Specimen to Simulate:
              </span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'Pothos', label: 'Silver Pothos', desc: 'Hardy Trailer' },
                  { id: 'Monstera', label: 'Monstera Deliciosa', desc: 'Bright Forest' },
                  { id: 'Ficus', label: 'Fiddle Leaf Fig', desc: 'Sensitive Focal' }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => { setPlantType(p.id); }}
                    className={`p-3.5 border text-left transition-all ${
                      plantType === p.id 
                        ? 'border-[#1A3A2B] bg-white ring-2 ring-[#1A3A2B]/10' 
                        : 'border-gray-300 bg-transparent hover:bg-white/50'
                    }`}
                  >
                    <span className="text-xs font-bold block text-[#111827]">{p.label}</span>
                    <span className="text-[9px] uppercase tracking-wider text-gray-400">{p.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Sliders */}
            <div className="space-y-6">
              {/* Light Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-700 flex items-center gap-1.5">
                    <Sun className="h-3.5 w-3.5 text-amber-500" />
                    Indirect Sunlight Exposure
                  </label>
                  <span className="text-xs font-bold text-[#1a3a2b]">{lightLevel}% (Lux approximation)</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={lightLevel} 
                  onChange={(e) => setLightLevel(parseInt(e.target.value))}
                  className="w-full accent-[#1A3A2B] cursor-pointer" 
                />
              </div>

              {/* Water Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-700 flex items-center gap-1.5">
                    <Droplets className="h-3.5 w-3.5 text-blue-500" />
                    Watering Schedule Interval
                  </label>
                  <span className="text-xs font-bold text-[#1a3a2b]">Every {waterInterval} Days</span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="20" 
                  value={waterInterval} 
                  onChange={(e) => setWaterInterval(parseInt(e.target.value))}
                  className="w-full accent-[#1A3A2B] cursor-pointer" 
                />
              </div>
            </div>
          </div>

          {/* Column 2: Dashboard Preview & Dynamic Outcome Chart (Cols: 7) */}
          <div className="lg:col-span-7 bg-white border border-[#1A3A2B]/10 p-6 sm:p-10 shadow-xl relative overflow-hidden">
            
            {/* Minimal Background Art Grid */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#1A3A2B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-[#1A3A2B]/10 pb-4 mb-6">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-gray-400 block">Simulation Status</span>
                  <h4 className="text-md font-bold text-[#111827] flex items-center gap-2">
                    <Sliders className="h-4 w-4 text-[#1A3A2B]" />
                    Real-time Predictive Bio-Engine
                  </h4>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-semibold bg-gray-100 text-[#111827] px-2.5 py-1">
                  Active Model: {plantType}
                </span>
              </div>

              {/* Major Gauge */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
                
                {/* Visual Circle Gauge */}
                <div className="flex flex-col items-center justify-center p-4 bg-gray-50/50 border border-gray-100">
                  <span className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-3">Projected Health Score</span>
                  
                  <div className="relative h-32 w-32 flex items-center justify-center">
                    {/* SVG radial track */}
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-100"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        fill="transparent"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className={`transition-all duration-300 ${
                          healthScore > 80 ? 'text-emerald-700' : healthScore > 50 ? 'text-amber-500' : 'text-rose-500'
                        }`}
                        strokeDasharray={`${healthScore}, 100`}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    
                    <div className="text-center">
                      <span className="text-3xl font-black text-[#111827]">{healthScore}</span>
                      <span className="text-xs text-gray-400 block">/ 100 pts</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Growth Outlook and potting tips */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-1">Status Verdict</span>
                    <div className={`p-3 border text-xs font-semibold leading-relaxed ${careAdvice.color}`}>
                      {careAdvice.text}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-1">Tailored Soil Composition</span>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Volcanic Pumice (Drainage)</span>
                        <span className="font-bold text-[#111827]">{plantType === 'Ficus' ? '40%' : '25%'}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Premium Pine Bark (Aerate)</span>
                        <span className="font-bold text-[#111827]">35%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Organic Compost Matter</span>
                        <span className="font-bold text-[#111827]">{plantType === 'Pothos' ? '40%' : '30%'}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Care Tips Footer */}
              <div className="bg-[#1A3A2B]/5 border border-[#1A3A2B]/10 p-4 text-xs text-[#1A3A2B] leading-relaxed">
                <strong>Horticulturist Note:</strong> {plantType === 'Ficus' 
                  ? "Ficus lyrata (Fiddle Leaf) is notoriously prone to root-rot from overwatering and leaf-drop from low light. Ensure light stays high and water only when completely dried." 
                  : plantType === 'Monstera' 
                    ? "Monsteras thrive under simulated light profiles between 65%-85%. Wipe down leaves with a moist microfiber cloth weekly to boost light absorption." 
                    : "Pothos are incredibly forgiving of moderate dark rooms. If watering intervals exceed 12 days, they will droop, but rebound almost instantly upon dynamic re-watering."
                }
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: Spatial Greenery Room Planner (Virtual styling simulator) */}
      <section id="planner" className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#1A3A2B]/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#3D7A5A] font-bold block mb-2">Virtual Interior Styling</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#111827] tracking-tight mb-4">
            Spatial Greenery Planner
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Preview the transformative organic aesthetic of living greenery. Choose a simulated room architecture, select your plant model, and adjust scale parameters to match your custom home design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Controls column (Cols: 4) */}
          <div className="lg:col-span-4 bg-[#FCFDFB] border border-[#1A3A2B]/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-bold text-[#111827] block mb-3">
                  1. Choose Room Setting:
                </span>
                <div className="space-y-2">
                  {[
                    { id: 'living', name: 'Minimalist Living Room', desc: 'Neutral design with high ambient light' },
                    { id: 'study', name: 'Executive Home Office', desc: 'Dark wood shelving & smart desk setup' },
                    { id: 'bedroom', name: 'Scandi Sunlit Bedroom', desc: 'Calming cream tones and soft linen texture' }
                  ].map((room) => (
                    <button
                      key={room.id}
                      onClick={() => setCurrentRoom(room.id)}
                      className={`w-full p-3 text-left border transition-all ${
                        currentRoom === room.id 
                          ? 'border-[#1A3A2B] bg-[#1A3A2B]/5 font-semibold' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-xs text-[#111827] block">{room.name}</span>
                      <span className="text-[10px] text-gray-400 font-normal">{room.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-bold text-[#111827] block mb-3">
                  2. Select Plant:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'Monstera', label: 'Monstera', size: 'Extra Large' },
                    { id: 'Pothos', label: 'Pothos', size: 'Cascading' },
                    { id: 'Fig', label: 'Lyrata Fig', size: 'Columnar Tall' }
                  ].map((plant) => (
                    <button
                      key={plant.id}
                      onClick={() => setActivePlannerPlant(plant.id)}
                      className={`p-3 border text-center transition-all ${
                        activePlannerPlant === plant.id 
                          ? 'border-[#1A3A2B] bg-[#1A3A2B]/5 font-semibold' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-xs block text-[#111827]">{plant.label}</span>
                      <span className="text-[9px] text-gray-400 font-normal">{plant.size}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#111827]">
                    3. Plant Placement Scale:
                  </span>
                  <span className="text-xs font-bold text-[#1a3a2b]">{plantScale}%</span>
                </div>
                <input 
                  type="range" 
                  min="60" 
                  max="140" 
                  value={plantScale} 
                  onChange={(e) => setPlantScale(parseInt(e.target.value))}
                  className="w-full accent-[#1A3A2B] cursor-pointer" 
                />
              </div>
            </div>

            <div className="border-t border-[#1A3A2B]/10 pt-6">
              <div className="flex items-center gap-3 text-xs text-[#1a3a2b] bg-emerald-50 p-4 border border-emerald-100">
                <Compass className="h-5 w-5 shrink-0" />
                <span>Plants in simulation match real proportions. Selected planters fit standard tabletops and corners.</span>
              </div>
            </div>
          </div>

          {/* Interactive Visualizer Stage (Cols: 8) */}
          <div className="lg:col-span-8 bg-zinc-100 border border-[#1A3A2B]/10 overflow-hidden relative min-h-[450px] flex items-end justify-center">
            
            {/* Background Room Settings with transition */}
            <div className="absolute inset-0 transition-opacity duration-500">
              {currentRoom === 'living' && (
                <div className="w-full h-full bg-[#EAE8E4] relative">
                  {/* Stylized geometric interior shapes */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#D4CFC9]" /> {/* Floor */}
                  <div className="absolute bottom-1/3 left-10 w-44 h-24 bg-[#FAF9F6] border-t-4 border-amber-900/10 shadow-md" /> {/* Modern low sideboard */}
                  <div className="absolute top-12 right-12 w-32 h-44 border border-white/40 bg-white/10 flex items-center justify-center text-[10px] text-[#111827]/40 uppercase tracking-widest">Minimalist Art</div>
                  {/* Soft lighting visual */}
                  <div className="absolute top-0 left-1/4 w-32 h-full bg-gradient-to-r from-white/20 via-white/5 to-transparent skew-x-12 blur-sm pointer-events-none" />
                </div>
              )}

              {currentRoom === 'study' && (
                <div className="w-full h-full bg-[#1F2421] relative">
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#111413]" /> {/* Wooden Floor */}
                  <div className="absolute bottom-1/3 right-1/4 w-40 h-32 bg-zinc-800 border-l border-zinc-700 shadow-xl" /> {/* Smart Desk */}
                  <div className="absolute bottom-40 right-1/4 w-12 h-16 bg-[#D4AF37]/80 rounded-full blur-md" /> {/* Warm Ambient Desk Lamp Light */}
                  <div className="absolute top-16 left-16 w-48 h-10 bg-zinc-900 border-b border-zinc-700" /> {/* Wood bookshelf line */}
                </div>
              )}

              {currentRoom === 'bedroom' && (
                <div className="w-full h-full bg-[#F5EFEB] relative">
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#E3D9D5]" /> {/* Floor */}
                  <div className="absolute bottom-1/3 left-0 w-1/2 h-40 bg-[#FFF] rounded-tr-3xl shadow-sm border-t border-r border-[#1a3a2b]/5" /> {/* Scandi Bed base */}
                  <div className="absolute top-8 left-12 w-20 h-20 bg-amber-50 rounded-full opacity-60 blur-md pointer-events-none" /> {/* Sun rays */}
                </div>
              )}
            </div>

            {/* Simulated Plant Object positioned on floor/sideboard depending on type */}
            <div 
              className="relative z-10 transition-all duration-300 transform origin-bottom flex flex-col items-center mb-10"
              style={{ transform: `scale(${plantScale / 100})` }}
            >
              
              {/* Plant selection rendering using high-quality botanical graphics/SVGs */}
              {activePlannerPlant === 'Monstera' && (
                <div className="flex flex-col items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=400" 
                    alt="Monstera element"
                    className="h-64 object-contain filter drop-shadow-2xl select-none"
                  />
                  {/* Styled Clay Pot */}
                  <div className="h-14 w-20 bg-[#1A3A2B] border-t border-emerald-900 rounded-b-xl shadow-lg relative -mt-3">
                    <div className="absolute top-0 inset-x-0 h-2 bg-emerald-950/20" />
                  </div>
                </div>
              )}

              {activePlannerPlant === 'Pothos' && (
                <div className="flex flex-col items-center translate-y-2">
                  {/* Positioned elevated on the table if in living room */}
                  <img 
                    src="https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=400" 
                    alt="Pothos trailing element"
                    className="h-52 object-contain filter drop-shadow-2xl select-none"
                  />
                  {/* Tall Elegant Pot */}
                  <div className="h-20 w-14 bg-[#EAF2EC] border border-[#1A3A2B]/10 rounded-none shadow-lg relative -mt-4">
                    <div className="absolute top-1 inset-x-0 h-1 bg-[#1A3A2B]/10" />
                  </div>
                </div>
              )}

              {activePlannerPlant === 'Fig' && (
                <div className="flex flex-col items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&q=80&w=400" 
                    alt="Fiddle Leaf Fig vertical"
                    className="h-72 object-contain filter drop-shadow-2xl select-none"
                  />
                  {/* Terracotta Pot */}
                  <div className="h-16 w-24 bg-[#D39E82] rounded-b-2xl shadow-xl relative -mt-2">
                    <div className="absolute top-0 inset-x-0 h-3 bg-amber-950/10" />
                  </div>
                </div>
              )}

              {/* Dynamic shadow helper on floor */}
              <div className="w-24 h-4 bg-black/20 rounded-full blur-md mt-1 scale-x-110" />
            </div>

            {/* Room Ambient Description Tag */}
            <div className="absolute top-4 left-4 z-20 bg-[#FCFDFB]/90 backdrop-blur-sm border border-[#1A3A2B]/10 px-3 py-1.5 text-[10px] uppercase tracking-widest font-black text-[#1A3A2B]">
              Preview Studio / Scale Range: {plantScale >= 100 ? 'Magnified Focal' : 'Accent Spacing'}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: Botanical Journal / Editorial Section */}
      <section id="editorial" className="py-20 lg:py-28 px-6 lg:px-12 bg-[#FCFDFB] border-b border-[#1A3A2B]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#3D7A5A] font-bold block mb-2">Written Insights</span>
              <h2 className="text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
                The Botanical Journal
              </h2>
            </div>
            <button 
              onClick={() => triggerNotification("Subscribing to premium feed... You have unlocked seasonal archives.")}
              className="text-xs uppercase tracking-widest font-bold text-[#111827] hover:text-[#3D7A5A] transition-colors flex items-center gap-1 group pb-1 border-b-2 border-[#1A3A2B]"
            >
              <span>Explore All Archive Articles</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 'art1',
                tag: 'Cultivation Insights',
                title: 'The Secret Chemistry of Silvery Variegation in Tropicals',
                desc: 'Deep dive into why plants like Scindapsus produce matte shimmering silver leaf patches as a defense and survival mechanism.',
                image: 'https://images.unsplash.com/photo-1620127815162-8cd91453c03b?auto=format&fit=crop&q=80&w=800',
                readTime: '6 Min Read'
              },
              {
                id: 'art2',
                tag: 'Interior Curation',
                title: 'Spatial Spacing: Styling Large Foliage in Minimalist Lofts',
                desc: 'Learn high-end layout principles from elite architectural product designers. How to anchor a room with a single specimen.',
                image: 'https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&q=80&w=800',
                readTime: '4 Min Read'
              },
              {
                id: 'art3',
                tag: 'Nomenclature',
                title: 'Deciphering Watering Needs Using Tactile Soil Inspection',
                desc: 'Moving past simple calendar schedules. Why the finger moisture test coupled with soil density meters avoids the dreaded leaf droop.',
                image: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=800',
                readTime: '8 Min Read'
              }
            ].map((art) => (
              <div key={art.id} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden bg-gray-100 mb-6 border border-[#1A3A2B]/5">
                  <img 
                    src={art.image} 
                    alt={art.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-[#3D7A5A] mb-3">
                  <span>{art.tag}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-400">{art.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] leading-tight group-hover:text-[#1A3A2B] transition-colors mb-3">
                  {art.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {art.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Premium Editorial Newsletter & Footer */}
      <footer className="bg-[#1A3A2B] text-white pt-20 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Newsletter Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-emerald-800 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-bold block mb-2">Weekly Atelier Newsletter</span>
              <h3 className="text-3xl font-black tracking-tight mb-4">
                Unlock 10% Off Your First Botanical Specimen
              </h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed max-w-lg">
                Receive rare restock announcements, bespoke styling lookbooks, and botanical care guides curated directly by our leading horticulturists. No spam, ever.
              </p>
            </div>

            <div className="lg:col-span-6">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  triggerNotification("Thank you for subscribing! Your 10% coupon has been generated.");
                  e.target.reset();
                }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input 
                  type="email" 
                  required
                  placeholder="Your premium email address"
                  className="bg-emerald-950/80 border border-emerald-800 text-sm px-5 py-4 flex-grow focus:outline-none focus:border-emerald-400 transition-colors text-white placeholder-emerald-700/60"
                />
                <button 
                  type="submit"
                  className="bg-[#FCFDFB] hover:bg-emerald-50 text-[#1A3A2B] text-xs uppercase tracking-widest font-black px-8 py-4 transition-colors"
                >
                  Join Atelier
                </button>
              </form>
            </div>
          </div>

          {/* Directory Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 text-sm border-b border-emerald-800">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400 mb-6">Explore Catalog</h4>
              <ul className="space-y-3.5 text-emerald-100/80">
                <li><a href="#curation" className="hover:text-white transition-colors">Low Light Favorites</a></li>
                <li><a href="#curation" className="hover:text-white transition-colors">Pet-Safe Greenery</a></li>
                <li><a href="#curation" className="hover:text-white transition-colors">Air Purifiers</a></li>
                <li><a href="#curation" className="hover:text-white transition-colors">Collector Restocks</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400 mb-6">Interactive Studio</h4>
              <ul className="space-y-3.5 text-emerald-100/80">
                <li><a href="#care-simulator" className="hover:text-white transition-colors">Light & Water Lab</a></li>
                <li><a href="#planner" className="hover:text-white transition-colors">Room Stylist Simulator</a></li>
                <li><a href="#editorial" className="hover:text-white transition-colors">Premium Journals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Corporate Gifting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400 mb-6">Client Services</h4>
              <ul className="space-y-3.5 text-emerald-100/80">
                <li><a href="#" className="hover:text-white transition-colors">Climate Shipping Guarantee</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Repotting & Soil Help</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Botanical Delivery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns & Refunds</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400 mb-6">About Verdant</h4>
              <ul className="space-y-3.5 text-emerald-100/80">
                <li><a href="#" className="hover:text-white transition-colors">Our Ethical Sourcing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bespoke Clay Potteries</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Atelier Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Horticultural Team</a></li>
              </ul>
            </div>
          </div>

          {/* Legal / Copyright details */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/50 uppercase tracking-wider">
            <span>© 2026 VERDANT BOTANICAL ATELIER. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Atelier</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Cart Slider Drawer Component */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity" onClick={() => setIsCartOpen(false)} />
          
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col bg-[#FCFDFB] shadow-2xl border-l border-[#1A3A2B]/10">
                
                {/* Header of Drawer */}
                <div className="flex items-center justify-between border-b border-[#1A3A2B]/10 px-6 py-6 bg-white">
                  <h2 className="text-lg font-bold uppercase tracking-wider text-[#1a3a2b] flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Your Botanical Basket
                  </h2>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="p-1.5 text-gray-400 hover:text-[#111827] transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Items Container */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-12">
                      <div className="h-16 w-16 bg-[#1A3A2B]/5 rounded-full flex items-center justify-center mb-4">
                        <ShoppingBag className="h-8 w-8 text-[#1A3A2B]/40" />
                      </div>
                      <h4 className="text-md font-bold text-[#111827] uppercase tracking-wider mb-2">Basket Is Empty</h4>
                      <p className="text-xs text-gray-400 max-w-[240px] leading-relaxed">
                        Navigate to our curation or use the interactive configurators to add architectural plants.
                      </p>
                      <button 
                        onClick={() => setIsCartOpen(false)}
                        className="mt-6 bg-[#1A3A2B] hover:bg-[#2d6a4f] text-white text-[10px] uppercase tracking-widest font-black px-6 py-3 transition-colors"
                      >
                        Keep Browsing
                      </button>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div 
                        key={item.cartItemId} 
                        className="flex gap-4 p-4 border border-[#1A3A2B]/10 bg-white"
                      >
                        {/* Thumbnail */}
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="h-20 w-20 object-cover object-center bg-gray-50 border border-gray-100"
                        />
                        
                        {/* Info details */}
                        <div className="flex-grow flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="text-sm font-bold text-[#111827] line-clamp-1">{item.name}</h4>
                              <span className="text-sm font-bold text-[#111827]">${item.price * item.quantity}</span>
                            </div>
                            <p className="text-[10px] text-[#3D7A5A] font-semibold mt-0.5">Pot: {item.selectedColorName}</p>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            {/* Quantity buttons */}
                            <div className="flex items-center border border-gray-200 bg-gray-50">
                              <button 
                                onClick={() => updateQuantity(item.cartItemId, -1)}
                                className="p-1 hover:bg-gray-100 text-gray-500 transition-colors"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="px-3 text-xs font-bold text-[#111827]">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.cartItemId, 1)}
                                className="p-1 hover:bg-gray-100 text-gray-500 transition-colors"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            {/* Remove button */}
                            <button 
                              onClick={() => removeFromCart(item.cartItemId)}
                              className="text-gray-400 hover:text-rose-600 p-1 transition-colors"
                              title="Delete Item"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Footer of Drawer (Subtotal & Dynamic Checkout actions) */}
                {cart.length > 0 && (
                  <div className="border-t border-[#1A3A2B]/10 p-6 bg-white space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-400 uppercase tracking-widest">
                        <span>Items Subtotal</span>
                        <span className="font-bold text-[#111827]">${subtotal}.00</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 uppercase tracking-widest">
                        <span>Climate Shipping</span>
                        <span className="font-bold text-emerald-700">{subtotal >= 100 ? 'FREE' : '$15.00'}</span>
                      </div>
                      <div className="border-t border-dashed border-gray-200 my-2 pt-2 flex justify-between text-sm font-bold text-[#111827] uppercase tracking-wider">
                        <span>Estimated Total</span>
                        <span>${subtotal >= 100 ? subtotal : subtotal + 15}.00</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        triggerNotification("Redirecting securely to secure architectural checkout gateway...");
                        setCart([]);
                        setIsCartOpen(false);
                      }}
                      className="w-full bg-[#1A3A2B] hover:bg-[#2d6a4f] text-white text-xs uppercase tracking-widest font-black py-4 transition-colors text-center block shadow-lg"
                    >
                      Proceed to Secure Checkout
                    </button>

                    <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest leading-relaxed">
                      ✈ Ships next business day in temperature-regulated containers to preserve root health.
                    </p>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}