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
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Patagonia — Originals Hooded Windbreaker</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Cormorant Garamond for elegant editorial headings, Plus Jakarta Sans for ultra-clean UI -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        sage: {
                            50: '#f4f6f3',
                            100: '#e7ebe4',
                            200: '#d7ded2',
                            300: '#cfd6cb', // Base color from image
                            400: '#b4beaf',
                            500: '#94a28e',
                            900: '#1e291b',
                        },
                        charcoal: {
                            DEFAULT: '#111c16',
                            light: '#2d3831',
                        },
                        rust: {
                            DEFAULT: '#c23f2b',
                            dark: '#a2301f',
                            light: '#df5641',
                        }
                    },
                    fontFamily: {
                        serif: ['Cormorant Garamond', 'serif'],
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                    },
                    animation: {
                        'float-slow': 'floatSlow 6s ease-in-out infinite',
                        'float-medium': 'floatMedium 5s ease-in-out infinite',
                        'spin-slow': 'spin 12s linear infinite',
                    },
                    keyframes: {
                        floatSlow: {
                            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                            '50%': { transform: 'translateY(-15px) rotate(1.5deg)' },
                        },
                        floatMedium: {
                            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                            '50%': { transform: 'translateY(-10px) rotate(-1deg)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom smooth transition definitions */
        .fade-transition {
            transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }
        /* Custom scrollbar matching the premium aesthetic */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #d7ded2;
        }
        ::-webkit-scrollbar-thumb {
            background: #b4beaf;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a28e;
        }
    </style>
</head>
<body class="bg-sage-300 font-sans text-charcoal antialiased overflow-x-hidden selection:bg-charcoal selection:text-sage-100">

    <!-- Premium Custom Toast System (Replacement for browser alerts) -->
    <div id="toast-container" class="fixed top-6 right-6 z-50 flex flex-col gap-3 pointer-events-none"></div>

    <!-- Interactive Search Overlay -->
    <div id="search-overlay" class="fixed inset-0 bg-charcoal/80 backdrop-blur-md z-50 opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-6">
        <div class="bg-sage-100 max-w-2xl w-full rounded-2xl p-8 shadow-2xl transform scale-95 transition-transform duration-300" id="search-content">
            <div class="flex justify-between items-center mb-6">
                <h3 class="font-serif text-2xl font-semibold">Search the Collection</h3>
                <button onclick="toggleSearch()" class="p-2 hover:bg-sage-200 rounded-full transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>
            <div class="relative">
                <input type="text" placeholder="Try 'windbreakers', 'recycled fleece', 'rainwear'..." class="w-full bg-sage-50 border border-sage-300 rounded-full py-4 px-6 focus:outline-none focus:border-charcoal transition-colors">
                <svg class="w-5 h-5 absolute right-5 top-1/2 -translate-y-1/2 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
            <div class="mt-6">
                <p class="text-xs uppercase tracking-wider text-sage-500 mb-3">Trending Searches</p>
                <div class="flex flex-wrap gap-2">
                    <button onclick="fillSearch('Hooded Windbreaker')" class="bg-sage-200 hover:bg-charcoal hover:text-sage-50 text-xs px-3 py-1.5 rounded-full transition-all">Hooded Windbreaker</button>
                    <button onclick="fillSearch('Recycled Nylon')" class="bg-sage-200 hover:bg-charcoal hover:text-sage-50 text-xs px-3 py-1.5 rounded-full transition-all">Recycled Nylon</button>
                    <button onclick="fillSearch('NetPlus®')" class="bg-sage-200 hover:bg-charcoal hover:text-sage-50 text-xs px-3 py-1.5 rounded-full transition-all">NetPlus®</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Interactive Shopping Cart Drawer -->
    <div id="cart-drawer" class="fixed inset-y-0 right-0 max-w-md w-full bg-sage-100 z-50 shadow-2xl translate-x-full transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col border-l border-sage-300">
        <div class="p-6 border-b border-sage-300 flex justify-between items-center bg-sage-50">
            <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                <h3 class="font-serif text-2xl font-semibold">Your Bag</h3>
            </div>
            <button onclick="toggleCart()" class="p-2 hover:bg-sage-200 rounded-full transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>
        <div class="flex-1 overflow-y-auto p-6 space-y-6" id="cart-items">
            <!-- Empty state default -->
            <div id="cart-empty-state" class="h-full flex flex-col items-center justify-center text-center">
                <div class="w-16 h-16 bg-sage-200 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-8 h-8 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                </div>
                <h4 class="font-serif text-xl font-medium mb-1">Your bag is empty</h4>
                <p class="text-xs text-sage-500 max-w-[240px]">Explore our new arrivals and find your next premium essential.</p>
                <button onclick="toggleCart(); scrollToSection('collection')" class="mt-6 bg-charcoal text-sage-100 hover:bg-rust hover:text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all">
                    Shop New Collection
                </button>
            </div>
            <!-- Cart products (Dynamically added) -->
            <div id="cart-content-list" class="hidden space-y-6"></div>
        </div>
        <div id="cart-footer" class="p-6 border-t border-sage-300 bg-sage-50 hidden">
            <div class="flex justify-between mb-4">
                <span class="text-sm font-medium">Subtotal</span>
                <span class="text-lg font-semibold" id="cart-subtotal">$0.00</span>
            </div>
            <button onclick="checkoutMock()" class="w-full bg-charcoal text-sage-100 hover:bg-rust hover:text-white text-xs font-semibold py-4 rounded-full uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                Proceed to Checkout
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
            <p class="text-[10px] text-center text-sage-500 mt-3">Complimentary shipping on orders over $150. Free 30-day returns.</p>
        </div>
    </div>

    <!-- HEADER / NAVIGATION (Exact layout & details of the inspiration) -->
    <header class="w-full px-6 md:px-12 py-6 flex justify-between items-center relative z-40 bg-transparent">
        <div class="flex items-center gap-4 md:gap-10">
            <!-- Brand Logo (Patagonia bold editorial style) -->
            <a href="#" class="font-serif text-2xl md:text-3xl font-extrabold tracking-tight text-charcoal hover:opacity-85 transition-opacity">
                patagonia
            </a>
            
            <!-- Mobile Menu Switcher & Desktop Menu Minimal Double-Line Hamburger -->
            <button onclick="toggleMobileNav()" class="flex flex-col gap-[4px] group focus:outline-none focus:ring-2 focus:ring-charcoal rounded p-1" aria-label="Toggle Navigation">
                <div class="w-6 h-[2px] bg-charcoal transition-all group-hover:w-4"></div>
                <div class="w-6 h-[2px] bg-charcoal transition-all group-hover:w-6"></div>
            </button>
        </div>

        <!-- Central Links (Hidden on Mobile) -->
        <nav class="hidden md:flex items-center gap-8">
            <a href="#collection" class="text-xs uppercase tracking-widest font-medium hover:text-rust transition-colors py-2 relative group">
                New Collection
                <span class="absolute bottom-0 left-0 w-0 h-[1.5px] bg-rust transition-all group-hover:w-full"></span>
            </a>
            <a href="#craftsmanship" class="text-xs uppercase tracking-widest font-medium hover:text-rust transition-colors py-2 relative group">
                Materials & Detail
            </a>
            <a href="#philosophy" class="text-xs uppercase tracking-widest font-medium hover:text-rust transition-colors py-2 relative group">
                Our Story
            </a>
        </nav>

        <!-- Utility Right Actions -->
        <div class="flex items-center gap-4 md:gap-6">
            <button onclick="toggleSearch()" class="p-2 hover:bg-sage-100/50 rounded-full transition-colors hidden sm:block" aria-label="Search">
                <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </button>
            <a href="#stores" onclick="showStoreFinder()" class="text-[11px] uppercase tracking-wider font-semibold hover:text-rust transition-colors hidden sm:inline-block">
                Find a store
            </a>
            <!-- Shopping Bag with Interactive Indicator Counter -->
            <button onclick="toggleCart()" class="relative p-2 hover:bg-sage-100/50 rounded-full transition-colors" aria-label="Cart">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                <span id="cart-badge" class="absolute -top-1 -right-1 bg-rust text-white text-[9px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center transform scale-0 transition-transform duration-300">0</span>
            </button>
            <a href="#account" onclick="showAccountMock()" class="p-2 hover:bg-sage-100/50 rounded-full transition-colors" aria-label="Profile">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            </a>
        </div>
    </header>

    <!-- Mobile Slide Navigation Drawer -->
    <div id="mobile-nav" class="fixed inset-y-0 left-0 w-80 bg-sage-100 z-50 shadow-2xl -translate-x-full transition-transform duration-300 ease-out flex flex-col md:hidden">
        <div class="p-6 flex justify-between items-center border-b border-sage-300">
            <span class="font-serif text-xl font-bold">Menu</span>
            <button onclick="toggleMobileNav()" class="p-2 hover:bg-sage-200 rounded-full">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>
        <div class="flex-1 p-6 space-y-6">
            <div class="flex flex-col gap-4">
                <a href="#collection" onclick="toggleMobileNav()" class="text-lg font-serif font-semibold hover:text-rust">New Collection</a>
                <a href="#craftsmanship" onclick="toggleMobileNav()" class="text-lg font-serif font-semibold hover:text-rust">Materials & Tech</a>
                <a href="#philosophy" onclick="toggleMobileNav()" class="text-lg font-serif font-semibold hover:text-rust">Our Circular Ethos</a>
                <a href="#stores" onclick="toggleMobileNav(); showStoreFinder()" class="text-lg font-serif font-semibold hover:text-rust">Store Locations</a>
            </div>
            <hr class="border-sage-300">
            <div class="space-y-3">
                <p class="text-xs uppercase tracking-wider text-sage-500">Quick Assistance</p>
                <a href="#" class="block text-sm hover:underline">Sizing Guide</a>
                <a href="#" class="block text-sm hover:underline">Repair Portal</a>
                <a href="#" class="block text-sm hover:underline">Support Hub</a>
            </div>
        </div>
    </div>

    <!-- MAIN HERO CONTAINER (Perfectly matching layout, gradients, typographic weights, and vibes) -->
    <main id="hero-section" class="relative w-full min-h-[calc(100vh-88px)] px-6 md:px-12 flex flex-col justify-between overflow-hidden">
        
        <!-- Interactive Carousel Background Oval and Graphic Backdrop -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10 select-none">
            <!-- The glowing vertical oval gradient backdrop (Exact match to inspiration) -->
            <div id="hero-backdrop-gradient" class="w-[320px] h-[480px] sm:w-[420px] sm:h-[620px] md:w-[480px] md:h-[680px] rounded-full filter blur-[2px] transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) opacity-95 relative"
                 style="background: linear-gradient(180deg, #cef1f5 0%, #f7dca1 100%); transform: rotate(10deg);">
                <!-- Gentle ambient shadow inside the gradient -->
                <div class="absolute inset-4 rounded-full bg-white/10 backdrop-blur-[1px]"></div>
            </div>
        </div>

        <!-- Middle Hero Work Area -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 relative z-20 pt-8 pb-12">
            
            <!-- Left Side: Floating apparel and dynamic visualization -->
            <div class="lg:col-span-6 flex justify-center items-center relative min-h-[350px] sm:min-h-[450px]">
                
                <!-- Floating Jacket Render System (Dynamic SVG illustration designed to replicate premium gear floating) -->
                <div id="hero-product-container" class="w-full max-w-[280px] sm:max-w-[420px] md:max-w-[480px] h-full flex justify-center items-center animate-float-slow fade-transition relative">
                    <!-- Dynamic Jacket Element (SVG injected via JavaScript) -->
                    <div id="hero-jacket-graphic" class="w-full drop-shadow-[0_25px_40px_rgba(26,38,31,0.22)] select-none">
                        <!-- Default Jacket SVG will be dynamically loaded here on init -->
                    </div>
                    
                    <!-- Decorative technical wind indicator elements -->
                    <div class="absolute -top-4 -left-6 md:-left-12 text-sage-500 opacity-60 flex items-center gap-2">
                        <span class="text-[10px] uppercase tracking-widest font-semibold font-mono">Weightless Airflow</span>
                        <div class="w-8 h-[1px] bg-sage-500"></div>
                    </div>
                </div>

                <!-- Floating Interactive Tech Specs Highlight Hotspots (Interactive clickables overlaying the image canvas) -->
                <div class="absolute inset-0 pointer-events-auto">
                    <!-- Hotspot 1: Storm Hood -->
                    <div class="absolute top-[22%] left-[45%] group">
                        <button onclick="showHotspot('hood')" class="w-5 h-5 bg-white/80 border border-charcoal rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
                            <span class="w-2 h-2 bg-rust rounded-full animate-ping absolute"></span>
                            <span class="w-2 h-2 bg-rust rounded-full"></span>
                        </button>
                        <div class="absolute left-6 top-1/2 -translate-y-1/2 bg-charcoal text-sage-50 text-[10px] uppercase tracking-widest py-1.5 px-3 rounded shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            Storm Adjustable Hood
                        </div>
                    </div>

                    <!-- Hotspot 2: Water repellent surface -->
                    <div class="absolute top-[52%] left-[28%] group">
                        <button onclick="showHotspot('repellent')" class="w-5 h-5 bg-white/80 border border-charcoal rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
                            <span class="w-2 h-2 bg-rust rounded-full animate-ping absolute"></span>
                            <span class="w-2 h-2 bg-rust rounded-full"></span>
                        </button>
                        <div class="absolute right-6 top-1/2 -translate-y-1/2 bg-charcoal text-sage-50 text-[10px] uppercase tracking-widest py-1.5 px-3 rounded shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            DWR Recycled NetPlus®
                        </div>
                    </div>

                    <!-- Hotspot 3: Hem Drawcords -->
                    <div class="absolute bottom-[18%] left-[55%] group">
                        <button onclick="showHotspot('cords')" class="w-5 h-5 bg-white/80 border border-charcoal rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
                            <span class="w-2 h-2 bg-rust rounded-full animate-ping absolute"></span>
                            <span class="w-2 h-2 bg-rust rounded-full"></span>
                        </button>
                        <div class="absolute left-6 top-1/2 -translate-y-1/2 bg-charcoal text-sage-50 text-[10px] uppercase tracking-widest py-1.5 px-3 rounded shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            Adjustable Hem Drawcord
                        </div>
                    </div>
                </div>

            </div>

            <!-- Right Side: Editorial typographic content -->
            <div class="lg:col-span-6 flex flex-col justify-center items-start lg:pl-10 relative">
                <!-- Subtitle -->
                <span id="hero-tagline" class="text-xs uppercase tracking-[0.25em] font-bold text-charcoal/80 mb-3 block fade-transition">
                    New Collection
                </span>
                
                <!-- Main Header Title (Cormorant Garamond premium font) -->
                <h1 id="hero-title" class="font-serif text-[42px] sm:text-[60px] md:text-[80px] leading-[0.95] tracking-tight font-light mb-6 text-charcoal fade-transition">
                    Originals <br class="hidden md:block">Hooded <br class="hidden md:block">Windbreaker
                </h1>
                
                <!-- Descriptive block paragraph with precise leading -->
                <p id="hero-description" class="text-xs sm:text-sm text-charcoal/70 max-w-sm leading-relaxed mb-8 fade-transition">
                    An archive-inspired, lightweight windbreaker designed for versatile utility. Crafted entirely from recycled fishing nets to safeguard our oceans.
                </p>

                <!-- CTA & Price Row -->
                <div class="flex flex-wrap items-center gap-6">
                    <!-- Rounded pill black action button -->
                    <button onclick="addProductToBagCurrent()" class="bg-charcoal text-sage-50 hover:bg-rust hover:text-white hover:scale-[1.03] active:scale-[0.98] transition-all px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest shadow-md flex items-center gap-2">
                        <span>Explore more</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </button>
                    
                    <div class="flex flex-col">
                        <span id="hero-price" class="text-lg font-serif font-semibold tracking-wide">$149.00</span>
                        <span class="text-[9px] uppercase tracking-widest text-sage-500">Includes Repair Guarantee</span>
                    </div>
                </div>

                <!-- Custom Hotspot Explainer Panel inside the main frame -->
                <div id="hotspot-panel" class="mt-8 bg-white/40 backdrop-blur-md border border-white/60 p-4 rounded-xl max-w-sm hidden transition-all duration-300">
                    <div class="flex justify-between items-start mb-1">
                        <h5 id="hotspot-title" class="text-[11px] uppercase tracking-wider font-bold text-charcoal">Featured Detail</h5>
                        <button onclick="closeHotspotPanel()" class="text-sage-500 hover:text-charcoal"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-width="1.5"/></svg></button>
                    </div>
                    <p id="hotspot-desc" class="text-xs text-charcoal/80 leading-snug"></p>
                </div>
            </div>

        </div>

        <!-- Footer Row: Follow us & slide arrows matching the inspiration image layout -->
        <div class="w-full py-6 flex flex-col sm:flex-row justify-between items-center border-t border-charcoal/10 gap-4 mt-auto">
            <!-- Social indicators -->
            <div class="flex items-center gap-6 text-[10px] uppercase tracking-widest font-semibold text-charcoal/70">
                <span class="text-sage-500 font-bold">Follow us</span>
                <span class="w-6 h-[1px] bg-charcoal/25"></span>
                <a href="#" class="hover:text-rust transition-colors">Fb</a>
                <a href="#" class="hover:text-rust transition-colors">Ig</a>
                <a href="#" class="hover:text-rust transition-colors">Tw</a>
            </div>

            <!-- Slide Controllers / Numbers (Exact matched visual elements) -->
            <div class="flex items-center gap-8">
                <!-- Numeric Indicator -->
                <div class="flex items-center gap-1 font-serif text-lg font-bold text-charcoal">
                    <span id="carousel-current-index" class="text-2xl">01</span>
                    <span class="text-xs text-charcoal/50">/</span>
                    <span id="carousel-total-count" class="text-xs text-charcoal/50">03</span>
                </div>

                <!-- Sleek Minimalist Arrow Controls -->
                <div class="flex items-center gap-3">
                    <button onclick="prevSlide()" class="w-10 h-10 border border-charcoal/20 rounded-full flex items-center justify-center hover:bg-charcoal hover:text-sage-50 hover:border-charcoal transition-all active:scale-90" aria-label="Previous Slide">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                    </button>
                    <span class="w-8 h-[1px] bg-charcoal/20"></span>
                    <button onclick="nextSlide()" class="w-10 h-10 border border-charcoal/20 rounded-full flex items-center justify-center hover:bg-charcoal hover:text-sage-50 hover:border-charcoal transition-all active:scale-90" aria-label="Next Slide">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                    </button>
                </div>
            </div>
        </div>

    </main>

    <!-- SECTION: CRAFTSMANSHIP DETAILS (Detailed product feature highlight section) -->
    <section id="craftsmanship" class="bg-sage-50 py-24 px-6 md:px-12 border-t border-sage-200">
        <div class="max-w-7xl mx-auto">
            <!-- Minimal editorial section intro -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
                <div class="lg:col-span-6">
                    <span class="text-xs uppercase tracking-[0.25em] text-rust font-bold mb-3 block">Engineered for Endurance</span>
                    <h2 class="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-charcoal leading-[1.05]">
                        Honoring our planet <br>with circular materials.
                    </h2>
                </div>
                <div class="lg:col-span-6 lg:pl-12">
                    <p class="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                        Every thread, slider, and membrane is optimized for extreme resilience. Our NetPlus® materials transform discarded ocean fishing nets into tough, weather-shedding gear that stays on trails and out of oceans.
                    </p>
                </div>
            </div>

            <!-- Highly styled Interactive Card grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <!-- Card 1: NetPlus® Nylon -->
                <div class="bg-sage-100 p-8 rounded-2xl border border-sage-200/60 hover:border-charcoal/20 transition-all hover:shadow-xl group relative overflow-hidden flex flex-col justify-between min-h-[320px]">
                    <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-200/30 to-transparent rounded-bl-full pointer-events-none"></div>
                    <div>
                        <!-- Icon -->
                        <div class="w-12 h-12 rounded-full bg-sage-200 flex items-center justify-center text-charcoal mb-6 group-hover:bg-charcoal group-hover:text-sage-50 transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                        </div>
                        <h4 class="font-serif text-2xl font-bold mb-3 text-charcoal">NetPlus® Material</h4>
                        <p class="text-xs text-charcoal/70 leading-relaxed">
                            100% postconsumer recycled nylon faille made from recycled fishing nets. Reduces ocean pollution and emissions by over 60% compared to virgin petroleum fabrics.
                        </p>
                    </div>
                    <button onclick="showInfoModal('netplus')" class="text-[10px] uppercase tracking-widest font-bold text-rust hover:text-charcoal mt-6 text-left flex items-center gap-1">
                        Learn about NetPlus® <span>→</span>
                    </button>
                </div>

                <!-- Card 2: Ironclad Lifetime Repair -->
                <div class="bg-sage-100 p-8 rounded-2xl border border-sage-200/60 hover:border-charcoal/20 transition-all hover:shadow-xl group relative overflow-hidden flex flex-col justify-between min-h-[320px]">
                    <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-transparent rounded-bl-full pointer-events-none"></div>
                    <div>
                        <!-- Icon -->
                        <div class="w-12 h-12 rounded-full bg-sage-200 flex items-center justify-center text-charcoal mb-6 group-hover:bg-charcoal group-hover:text-sage-50 transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                        </div>
                        <h4 class="font-serif text-2xl font-bold mb-3 text-charcoal">Lifetime Repair Pact</h4>
                        <p class="text-xs text-charcoal/70 leading-relaxed">
                            We design our equipment to outlive trends. Should yours rip, snap, or wear out on a peak, our master craftspeople restore it to peak condition completely free of charge.
                        </p>
                    </div>
                    <button onclick="showInfoModal('repair')" class="text-[10px] uppercase tracking-widest font-bold text-rust hover:text-charcoal mt-6 text-left flex items-center gap-1">
                        Register gear <span>→</span>
                    </button>
                </div>

                <!-- Card 3: Weather Armor Design -->
                <div class="bg-sage-100 p-8 rounded-2xl border border-sage-200/60 hover:border-charcoal/20 transition-all hover:shadow-xl group relative overflow-hidden flex flex-col justify-between min-h-[320px]">
                    <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-200/30 to-transparent rounded-bl-full pointer-events-none"></div>
                    <div>
                        <!-- Icon -->
                        <div class="w-12 h-12 rounded-full bg-sage-200 flex items-center justify-center text-charcoal mb-6 group-hover:bg-charcoal group-hover:text-sage-50 transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
                        </div>
                        <h4 class="font-serif text-2xl font-bold mb-3 text-charcoal">Storm-Ready Shield</h4>
                        <p class="text-xs text-charcoal/70 leading-relaxed">
                            Constructed with a PFC-free durable water repellent coating and deep structural hoods. Shrugs off heavy wind, drizzle, and trail grime without blocking breathable performance.
                        </p>
                    </div>
                    <button onclick="showInfoModal('shield')" class="text-[10px] uppercase tracking-widest font-bold text-rust hover:text-charcoal mt-6 text-left flex items-center gap-1">
                        View storm ratings <span>→</span>
                    </button>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION: THE FULL ACTIVE PRODUCT COLLECTION (Immersive grid) -->
    <section id="collection" class="py-24 px-6 md:px-12 bg-sage-200">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
                <div>
                    <span class="text-xs uppercase tracking-[0.25em] text-charcoal/60 font-bold mb-2 block">Season's Essentials</span>
                    <h2 class="font-serif text-4xl sm:text-5xl font-light text-charcoal">Explore the Originals Series</h2>
                </div>
                <!-- Mini product filter categories -->
                <div class="flex flex-wrap gap-2">
                    <button onclick="filterCollection('all')" class="category-btn active bg-charcoal text-sage-100 text-[11px] font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all">All Jackets</button>
                    <button onclick="filterCollection('ultralight')" class="category-btn bg-white/50 text-charcoal hover:bg-white text-[11px] font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all">Ultralight</button>
                    <button onclick="filterCollection('stormproof')" class="category-btn bg-white/50 text-charcoal hover:bg-white text-[11px] font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all">Stormproof</button>
                </div>
            </div>

            <!-- Grid Items with consistent clean styling -->
            <div id="product-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Dynamically populated or explicitly designed premium product cards -->
                
                <!-- Product Card 1 -->
                <div class="bg-sage-100/70 p-6 rounded-2xl border border-sage-300/50 hover:border-charcoal/20 hover:bg-sage-100 transition-all hover:shadow-lg flex flex-col justify-between relative group" data-category="ultralight">
                    <span class="absolute top-4 left-4 bg-rust text-white text-[9px] uppercase tracking-widest font-extrabold px-2 py-1 rounded">NetPlus®</span>
                    <div class="w-full h-64 flex items-center justify-center p-4 relative mb-6">
                        <!-- Custom styled organic oval backdrop mirroring the hero style -->
                        <div class="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-cyan-100 to-amber-100/50 scale-90 group-hover:scale-100 transition-transform duration-500"></div>
                        <!-- SVG Outline Art of windbreaker -->
                        <div class="w-32 h-32 text-rust group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500 relative z-10">
                            <!-- Windbreaker vector silhouette representation -->
                            <svg class="w-full h-full drop-shadow-[0_8px_16px_rgba(194,63,43,0.25)]" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 20 L20 12 L44 12 L52 20 L48 48 L16 48 Z" fill="currentColor" fill-opacity="0.1" />
                                <path d="M12 20 L16 48 M52 20 L48 48" stroke-linecap="round" />
                                <path d="M20 12 L32 2 L44 12" stroke-linejoin="round" />
                                <path d="M32 2 V48" stroke-dasharray="2 2" />
                                <circle cx="32" cy="18" r="4" fill="none" />
                                <path d="M16 48 L16 54 L48 54 L48 48" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex justify-between items-end">
                        <div>
                            <h3 class="font-serif text-xl font-bold text-charcoal">Originals Hooded Windbreaker</h3>
                            <p class="text-[10px] uppercase tracking-widest text-sage-500 mt-1">Rust Red — $149.00</p>
                        </div>
                        <button onclick="addToBag('Originals Hooded Windbreaker', 149, 'Rust Red')" class="w-10 h-10 bg-charcoal hover:bg-rust text-sage-100 hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm" aria-label="Add to bag">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                        </button>
                    </div>
                </div>

                <!-- Product Card 2 -->
                <div class="bg-sage-100/70 p-6 rounded-2xl border border-sage-300/50 hover:border-charcoal/20 hover:bg-sage-100 transition-all hover:shadow-lg flex flex-col justify-between relative group" data-category="stormproof">
                    <span class="absolute top-4 left-4 bg-charcoal text-sage-100 text-[9px] uppercase tracking-widest font-extrabold px-2 py-1 rounded">Heavy Weather</span>
                    <div class="w-full h-64 flex items-center justify-center p-4 relative mb-6">
                        <!-- Custom styled organic oval backdrop mirroring the hero style -->
                        <div class="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-pink-100 to-indigo-100/50 scale-90 group-hover:scale-100 transition-transform duration-500"></div>
                        <!-- SVG Outline Art of windbreaker -->
                        <div class="w-32 h-32 text-emerald-800 group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500 relative z-10">
                            <svg class="w-full h-full drop-shadow-[0_8px_16px_rgba(6,78,59,0.25)]" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 20 L20 12 L44 12 L52 20 L48 48 L16 48 Z" fill="currentColor" fill-opacity="0.1" />
                                <path d="M12 20 L16 48 M52 20 L48 48" stroke-linecap="round" />
                                <path d="M20 12 L32 2 L44 12" stroke-linejoin="round" />
                                <path d="M32 2 V48" stroke-dasharray="2 2" />
                                <path d="M24 24 H40 M24 32 H40" />
                                <path d="M16 48 L16 54 L48 54 L48 48" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex justify-between items-end">
                        <div>
                            <h3 class="font-serif text-xl font-bold text-charcoal">Stormpeak Alpine Parka</h3>
                            <p class="text-[10px] uppercase tracking-widest text-sage-500 mt-1">Deep Pine Green — $289.00</p>
                        </div>
                        <button onclick="addToBag('Stormpeak Alpine Parka', 289, 'Deep Pine')" class="w-10 h-10 bg-charcoal hover:bg-rust text-sage-100 hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm" aria-label="Add to bag">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                        </button>
                    </div>
                </div>

                <!-- Product Card 3 -->
                <div class="bg-sage-100/70 p-6 rounded-2xl border border-sage-300/50 hover:border-charcoal/20 hover:bg-sage-100 transition-all hover:shadow-lg flex flex-col justify-between relative group" data-category="ultralight">
                    <span class="absolute top-4 left-4 bg-rust text-white text-[9px] uppercase tracking-widest font-extrabold px-2 py-1 rounded">NetPlus®</span>
                    <div class="w-full h-64 flex items-center justify-center p-4 relative mb-6">
                        <!-- Custom styled organic oval backdrop mirroring the hero style -->
                        <div class="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-yellow-100 to-rose-100/50 scale-90 group-hover:scale-100 transition-transform duration-500"></div>
                        <!-- SVG Outline Art of windbreaker -->
                        <div class="w-32 h-32 text-amber-600 group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500 relative z-10">
                            <svg class="w-full h-full drop-shadow-[0_8px_16px_rgba(217,119,6,0.25)]" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 20 L20 12 L44 12 L52 20 L48 48 L16 48 Z" fill="currentColor" fill-opacity="0.1" />
                                <path d="M12 20 L16 48 M52 20 L48 48" stroke-linecap="round" />
                                <path d="M20 12 L32 2 L44 12" stroke-linejoin="round" />
                                <path d="M32 2 V48" stroke-dasharray="2 2" />
                                <circle cx="32" cy="24" r="6" fill="none" />
                                <path d="M16 48 L16 54 L48 54 L48 48" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex justify-between items-end">
                        <div>
                            <h3 class="font-serif text-xl font-bold text-charcoal">Torrentshell Raincoat</h3>
                            <p class="text-[10px] uppercase tracking-widest text-sage-500 mt-1">Mustard Gold — $169.00</p>
                        </div>
                        <button onclick="addToBag('Torrentshell Raincoat', 169, 'Mustard Gold')" class="w-10 h-10 bg-charcoal hover:bg-rust text-sage-100 hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm" aria-label="Add to bag">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION: DESIGN PHILOSOPHY (Bold Editorial with Parallax Mood) -->
    <section id="philosophy" class="relative py-28 px-6 md:px-12 bg-charcoal text-sage-100 overflow-hidden">
        <!-- Floating ambient glowing shapes to simulate premium depth -->
        <div class="absolute -right-20 -top-20 w-[450px] h-[450px] bg-rust/10 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div class="absolute -left-20 -bottom-20 w-[450px] h-[450px] bg-cyan-900/30 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div class="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Big text Quote/Vision -->
            <div class="lg:col-span-8">
                <span class="text-xs uppercase tracking-[0.3em] text-rust font-bold mb-4 block">The Circular Mission</span>
                <p class="font-serif text-3xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight">
                    "We are in business to <span class="italic text-sage-300">save our home planet</span>. Every decision from thread to repair is structured for environmental accountability."
                </p>
                
                <div class="mt-12 flex flex-col sm:flex-row gap-8 sm:items-center">
                    <div>
                        <h5 class="text-2xl font-serif text-white font-semibold">100%</h5>
                        <p class="text-[10px] uppercase tracking-widest text-sage-400">Recycled Materials</p>
                    </div>
                    <div class="w-[1px] h-8 bg-sage-500 hidden sm:block"></div>
                    <div>
                        <h5 class="text-2xl font-serif text-white font-semibold">82,000+</h5>
                        <p class="text-[10px] uppercase tracking-widest text-sage-400">Products Repaired Annually</p>
                    </div>
                    <div class="w-[1px] h-8 bg-sage-500 hidden sm:block"></div>
                    <div>
                        <h5 class="text-2xl font-serif text-white font-semibold">$140M+</h5>
                        <p class="text-[10px] uppercase tracking-widest text-sage-400">Donated to Environmental Initiatives</p>
                    </div>
                </div>
            </div>

            <!-- Stylized Floating Gear Construction Blueprint Representation -->
            <div class="lg:col-span-4 flex justify-center">
                <div class="border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl max-w-[280px] w-full text-center hover:border-white/20 transition-all relative group">
                    <div class="w-12 h-12 rounded-full bg-rust/20 flex items-center justify-center mx-auto mb-4 text-rust animate-bounce">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                    </div>
                    <h4 class="font-serif text-lg font-bold text-white mb-2">Ocean-Cycle Certified</h4>
                    <p class="text-[11px] text-sage-400 leading-relaxed mb-4">
                        Ensuring zero ocean-bound materials reach landfill. Traceable and verified with standard ecological assessments.
                    </p>
                    <a href="#" class="text-[10px] uppercase tracking-widest font-semibold text-rust hover:text-white transition-colors">Our Transparency Map →</a>
                </div>
            </div>

        </div>
    </section>

    <!-- SECTION: ENVIRONMENTAL IMPACT ESTIMATOR (Interactive Tool) -->
    <section class="bg-sage-100 py-24 px-6 md:px-12">
        <div class="max-w-4xl mx-auto bg-sage-50 border border-sage-200/80 rounded-3xl p-8 md:p-12 shadow-md">
            <div class="text-center max-w-2xl mx-auto mb-10">
                <span class="text-xs uppercase tracking-[0.25em] text-rust font-bold mb-2 block">Ecological footprint</span>
                <h3 class="font-serif text-3xl md:text-4xl text-charcoal">Measure Your Material Impact</h3>
                <p class="text-xs text-charcoal/70 mt-2">Compare purchasing Patagonia recycled NetPlus® gear versus industry standard virgin polyester/nylon.</p>
            </div>

            <!-- Range Slider Simulator -->
            <div class="space-y-8">
                <div>
                    <div class="flex justify-between items-center mb-2">
                        <label class="text-xs uppercase tracking-wider font-semibold text-charcoal/80">Estimated Lifespan of Your Outerwear (Years)</label>
                        <span id="slider-val" class="font-serif text-xl font-bold text-rust">5 Years</span>
                    </div>
                    <input type="range" id="impact-slider" min="1" max="15" value="5" oninput="calculateImpact(this.value)" class="w-full accent-rust cursor-pointer h-1.5 bg-sage-300 rounded-lg">
                </div>

                <!-- Calculated Metrics Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-sage-300/60">
                    <div class="bg-sage-100 p-4 rounded-xl text-center">
                        <span class="text-xs uppercase tracking-widest text-sage-500 block">Carbon Saved</span>
                        <h4 id="carbon-saved" class="text-2xl font-serif font-bold text-charcoal mt-1">14.2 kg CO₂</h4>
                        <p class="text-[9px] text-sage-500 mt-1">Equivalent to driving 36 miles</p>
                    </div>
                    <div class="bg-sage-100 p-4 rounded-xl text-center">
                        <span class="text-xs uppercase tracking-widest text-sage-500 block">Oceans Cleaned</span>
                        <h4 id="water-saved" class="text-2xl font-serif font-bold text-charcoal mt-1">11.8 Sq. Ft.</h4>
                        <p class="text-[9px] text-sage-500 mt-1">Netting extracted and recycled</p>
                    </div>
                    <div class="bg-sage-100 p-4 rounded-xl text-center">
                        <span class="text-xs uppercase tracking-widest text-sage-500 block">Repair Cycle Value</span>
                        <h4 id="repair-value" class="text-2xl font-serif font-bold text-charcoal mt-1">$450.00</h4>
                        <p class="text-[9px] text-sage-500 mt-1">Replacement costs saved</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER WITH MINIMALIST FORM (Exact clean design aesthetic) -->
    <footer class="bg-sage-300 border-t border-charcoal/10 py-16 px-6 md:px-12 text-charcoal">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            
            <!-- Left Column: Mission Description and Email Subscription -->
            <div class="md:col-span-5 space-y-6">
                <span class="font-serif text-2xl font-bold tracking-tight">patagonia</span>
                <p class="text-xs text-charcoal/70 max-w-sm leading-relaxed">
                    Sign up to receive periodic dispatches detailing brand initiatives, early product drops, and environmental action opportunities. No fluff.
                </p>
                <!-- Subscription Newsletter Form with custom notifications -->
                <form onsubmit="handleSubscribe(event)" class="relative max-w-md">
                    <input type="email" required placeholder="Your email address" class="w-full bg-sage-100/50 border border-charcoal/20 rounded-full py-3.5 px-6 focus:outline-none focus:border-charcoal text-xs placeholder:text-charcoal/40 transition-colors">
                    <button type="submit" class="absolute right-1.5 top-1.5 bottom-1.5 bg-charcoal text-sage-50 hover:bg-rust hover:text-white px-5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-colors">
                        Subscribe
                    </button>
                </form>
            </div>

            <!-- Central Columns: Quick Navigation Link Lists -->
            <div class="md:col-span-2 space-y-4">
                <h5 class="text-[11px] uppercase tracking-widest font-bold text-charcoal/80">Collections</h5>
                <ul class="space-y-2 text-xs">
                    <li><a href="#collection" class="hover:text-rust transition-colors text-charcoal/70">Originals Series</a></li>
                    <li><a href="#" class="hover:text-rust transition-colors text-charcoal/70">Alpine Rainwear</a></li>
                    <li><a href="#" class="hover:text-rust transition-colors text-charcoal/70">Ocean Plastics</a></li>
                    <li><a href="#" class="hover:text-rust transition-colors text-charcoal/70">Worn Wear® Portal</a></li>
                </ul>
            </div>

            <div class="md:col-span-2 space-y-4">
                <h5 class="text-[11px] uppercase tracking-widest font-bold text-charcoal/80">Ecosystem</h5>
                <ul class="space-y-2 text-xs">
                    <li><a href="#philosophy" class="hover:text-rust transition-colors text-charcoal/70">Worn Wear Repair</a></li>
                    <li><a href="#" class="hover:text-rust transition-colors text-charcoal/70">1% For The Planet</a></li>
                    <li><a href="#" class="hover:text-rust transition-colors text-charcoal/70">Take Action Activism</a></li>
                    <li><a href="#" class="hover:text-rust transition-colors text-charcoal/70">B-Corp Status</a></li>
                </ul>
            </div>

            <div class="md:col-span-3 space-y-4">
                <h5 class="text-[11px] uppercase tracking-widest font-bold text-charcoal/80">Support Hub</h5>
                <ul class="space-y-2 text-xs">
                    <li><a href="#" class="hover:text-rust transition-colors text-charcoal/70">Returns & Exchanges</a></li>
                    <li><a href="#" class="hover:text-rust transition-colors text-charcoal/70">Ironclad Guarantee</a></li>
                    <li><a href="#" class="hover:text-rust transition-colors text-charcoal/70">Care & Washing Guides</a></li>
                    <li><a href="#" class="hover:text-rust transition-colors text-charcoal/70">Environmental Grants</a></li>
                </ul>
            </div>

        </div>

        <div class="max-w-7xl mx-auto pt-8 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-charcoal/50 gap-4">
            <p>© 2026 Patagonia Inc. Crafted under strict environmental guidelines. All Rights Reserved.</p>
            <div class="flex gap-6">
                <a href="#" class="hover:underline">Privacy Policy</a>
                <a href="#" class="hover:underline">Terms of Sale</a>
                <a href="#" class="hover:underline">CA Transparency Act</a>
            </div>
        </div>
    </footer>

    <!-- INTERACTIVE MODAL FOR DETAILED INFO (Replacement for intrusive alert pops) -->
    <div id="info-modal" class="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-4">
        <div class="bg-sage-100 max-w-lg w-full rounded-2xl p-6 md:p-8 shadow-2xl scale-95 transition-transform duration-300" id="info-modal-card">
            <h4 id="info-modal-title" class="font-serif text-2xl font-bold text-charcoal mb-3">Material Technology</h4>
            <p id="info-modal-text" class="text-xs text-charcoal/80 leading-relaxed mb-6">Detailed informative text will load here.</p>
            <div class="flex justify-end">
                <button onclick="closeInfoModal()" class="bg-charcoal text-sage-100 hover:bg-rust hover:text-white text-xs uppercase tracking-widest font-bold py-3 px-6 rounded-full transition-colors">
                    Understood
                </button>
            </div>
        </div>
    </div>

    <!-- MOCK INTERACTIVE STORE FINDER AND USER ACCOUNT PANEL MODALS -->
    <div id="generic-modal" class="fixed inset-0 bg-charcoal/70 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-4">
        <div class="bg-sage-100 max-w-lg w-full rounded-3xl p-8 shadow-2xl relative">
            <button onclick="closeGenericModal()" class="absolute top-4 right-4 p-2 hover:bg-sage-200 rounded-full">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <div id="generic-modal-content"></div>
        </div>
    </div>


    <!-- COMPLETE INTERACTIVE SCRIPT (Handles carousel, bag state, custom notifications, calculations, animations) -->
    <script>
        // High quality SVG designs representing apparel to keep page clean and high-fidelity
        const jacketSVGs = {
            rustRed: `
                <svg class="w-full h-auto" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Jacket Main Body Layer -->
                    <path d="M120 280 C120 200, 160 170, 250 170 C340 170, 380 200, 380 280 L360 410 C360 440, 330 450, 250 450 C170 450, 140 440, 140 410 Z" fill="#c23f2b" />
                    <!-- Highlight contours / shadows -->
                    <path d="M140 410 C140 440, 170 450, 250 450" stroke="#a2301f" stroke-width="6" fill="none"/>
                    <!-- Wind-shredding Sleeves with wind energy folds -->
                    <path d="M120 240 C60 210, 40 330, 80 340 L100 290" stroke="#b03120" stroke-width="45" stroke-linecap="round" fill="none" />
                    <path d="M380 240 C440 210, 460 300, 430 330 L380 300" stroke="#c23f2b" stroke-width="45" stroke-linecap="round" fill="none" />
                    <!-- Premium Tech Cuffs -->
                    <rect x="52" y="318" width="16" height="24" rx="4" fill="#111c16" transform="rotate(-15, 52, 318)" />
                    <rect x="424" y="312" width="16" height="24" rx="4" fill="#111c16" transform="rotate(15, 424, 312)" />
                    <!-- Functional Hood Concept -->
                    <path d="M180 170 C160 140, 180 80, 250 80 C320 80, 340 140, 320 170" fill="#a2301f" />
                    <!-- Inner hood opening -->
                    <path d="M205 170 C200 120, 300 120, 295 170 Z" fill="#111c16" />
                    <!-- Center zipper with clean premium detail -->
                    <path d="M250 170 V450" stroke="#111c16" stroke-width="4" stroke-linecap="round" />
                    <!-- Zipper Pull toggle -->
                    <rect x="247" y="190" width="6" height="15" rx="2" fill="#e7ebe4" />
                    <path d="M250 205 L250 220" stroke="#e7ebe4" stroke-width="2" />
                    <!-- Wind drawcords -->
                    <path d="M190 150 Q170 180 180 210" stroke="#111c16" stroke-width="2" fill="none" />
                    <path d="M310 150 Q330 180 320 210" stroke="#111c16" stroke-width="2" fill="none" />
                    <!-- Classic Mountain chest emblem logo -->
                    <rect x="280" y="220" width="30" height="12" rx="2" fill="#111c16" />
                    <rect x="282" y="222" width="26" height="3" fill="#f7dca1" />
                    <rect x="282" y="226" width="26" height="3" fill="#cef1f5" />
                </svg>
            `,
            pineGreen: `
                <svg class="w-full h-auto" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M120 280 C120 200, 160 170, 250 170 C340 170, 380 200, 380 280 L360 410 C360 440, 330 450, 250 450 C170 450, 140 440, 140 410 Z" fill="#1e3f20" />
                    <path d="M140 410 C140 440, 170 450, 250 450" stroke="#112512" stroke-width="6" fill="none"/>
                    <path d="M120 240 C60 210, 40 330, 80 340 L100 290" stroke="#163218" stroke-width="45" stroke-linecap="round" fill="none" />
                    <path d="M380 240 C440 210, 460 300, 430 330 L380 300" stroke="#1e3f20" stroke-width="45" stroke-linecap="round" fill="none" />
                    <rect x="52" y="318" width="16" height="24" rx="4" fill="#111c16" transform="rotate(-15, 52, 318)" />
                    <rect x="424" y="312" width="16" height="24" rx="4" fill="#111c16" transform="rotate(15, 424, 312)" />
                    <path d="M180 170 C160 140, 180 80, 250 80 C320 80, 340 140, 320 170" fill="#112512" />
                    <path d="M205 170 C200 120, 300 120, 295 170 Z" fill="#111c16" />
                    <path d="M250 170 V450" stroke="#111c16" stroke-width="4" stroke-linecap="round" />
                    <rect x="247" y="190" width="6" height="15" rx="2" fill="#e7ebe4" />
                    <path d="M250 205 L250 220" stroke="#e7ebe4" stroke-width="2" />
                    <path d="M190 150 Q170 180 180 210" stroke="#111c16" stroke-width="2" fill="none" />
                    <path d="M310 150 Q330 180 320 210" stroke="#111c16" stroke-width="2" fill="none" />
                    <rect x="280" y="220" width="30" height="12" rx="2" fill="#111c16" />
                    <rect x="282" y="222" width="26" height="3" fill="#df5641" />
                    <rect x="282" y="226" width="26" height="3" fill="#cef1f5" />
                </svg>
            `,
            mustardGold: `
                <svg class="w-full h-auto" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M120 280 C120 200, 160 170, 250 170 C340 170, 380 200, 380 280 L360 410 C360 440, 330 450, 250 450 C170 450, 140 440, 140 410 Z" fill="#d97706" />
                    <path d="M140 410 C140 440, 170 450, 250 450" stroke="#b45309" stroke-width="6" fill="none"/>
                    <path d="M120 240 C60 210, 40 330, 80 340 L100 290" stroke="#b45309" stroke-width="45" stroke-linecap="round" fill="none" />
                    <path d="M380 240 C440 210, 460 300, 430 330 L380 300" stroke="#d97706" stroke-width="45" stroke-linecap="round" fill="none" />
                    <rect x="52" y="318" width="16" height="24" rx="4" fill="#111c16" transform="rotate(-15, 52, 318)" />
                    <rect x="424" y="312" width="16" height="24" rx="4" fill="#111c16" transform="rotate(15, 424, 312)" />
                    <path d="M180 170 C160 140, 180 80, 250 80 C320 80, 340 140, 320 170" fill="#b45309" />
                    <path d="M205 170 C200 120, 300 120, 295 170 Z" fill="#111c16" />
                    <path d="M250 170 V450" stroke="#111c16" stroke-width="4" stroke-linecap="round" />
                    <rect x="247" y="190" width="6" height="15" rx="2" fill="#e7ebe4" />
                    <path d="M250 205 L250 220" stroke="#e7ebe4" stroke-width="2" />
                    <path d="M190 150 Q170 180 180 210" stroke="#111c16" stroke-width="2" fill="none" />
                    <path d="M310 150 Q330 180 320 210" stroke="#111c16" stroke-width="2" fill="none" />
                    <rect x="280" y="220" width="30" height="12" rx="2" fill="#111c16" />
                    <rect x="282" y="222" width="26" height="3" fill="#1e3f20" />
                    <rect x="282" y="226" width="26" height="3" fill="#cef1f5" />
                </svg>
            `
        };

        // Static slider state datasets reflecting premium product slides
        const slides = [
            {
                index: '01',
                tagline: 'New Collection',
                title: 'Originals <br class="hidden md:block">Hooded <br class="hidden md:block">Windbreaker',
                description: 'An archive-inspired, lightweight windbreaker designed for versatile utility. Crafted entirely from recycled fishing nets to safeguard our oceans.',
                price: '$149.00',
                gradient: 'linear-gradient(180deg, #cef1f5 0%, #f7dca1 100%)',
                colorClass: 'rust',
                jacketSVGKey: 'rustRed',
                itemTitle: 'Originals Hooded Windbreaker',
                itemPrice: 149,
                itemColor: 'Rust Red'
            },
            {
                index: '02',
                tagline: 'Heavy Protection',
                title: 'Stormpeak <br class="hidden md:block">Alpine <br class="hidden md:block">Parka',
                description: 'Designed to withstand alpine tempests. Heavyweight, insulated elements met with certified stormproofing and custom drawcord options.',
                price: '$289.00',
                gradient: 'linear-gradient(180deg, #fce7f3 0%, #cbd5e1 100%)',
                colorClass: 'emerald-800',
                jacketSVGKey: 'pineGreen',
                itemTitle: 'Stormpeak Alpine Parka',
                itemPrice: 289,
                itemColor: 'Deep Pine'
            },
            {
                index: '03',
                tagline: 'DWR Weather Guard',
                title: 'Torrentshell <br class="hidden md:block">Packable <br class="hidden md:block">Raincoat',
                description: 'A completely waterproof, highly packable rain defense system. Seamless heat-fused seams with optimal breathability vectors.',
                price: '$169.00',
                gradient: 'linear-gradient(180deg, #e0e7ff 0%, #ffedd5 100%)',
                colorClass: 'amber-600',
                jacketSVGKey: 'mustardGold',
                itemTitle: 'Torrentshell Raincoat',
                itemPrice: 169,
                itemColor: 'Mustard Gold'
            }
        ];

        let currentSlideIndex = 0;
        let cart = [];

        // ONLOAD: Initialize state details smoothly
        window.onload = function() {
            renderSlide(0);
            updateCartUI();
            calculateImpact(5); // Run impact calculator default
        };

        // CUSTOM TOAST NOTIFICATION GENERATOR
        function triggerToast(message, type = 'success') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = `flex items-center gap-3 bg-charcoal text-sage-50 text-xs px-5 py-4 rounded-xl shadow-2xl border border-white/10 transform translate-y-2 opacity-0 transition-all duration-300 pointer-events-auto`;
            
            const iconSvg = type === 'success' 
                ? `<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>`
                : `<svg class="w-4 h-4 text-rust-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`;

            toast.innerHTML = `
                ${iconSvg}
                <span class="font-medium tracking-wide">${message}</span>
            `;
            
            container.appendChild(toast);
            
            // Animate In
            setTimeout(() => {
                toast.classList.remove('translate-y-2', 'opacity-0');
            }, 10);

            // Out & Remove
            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-[-10px]');
                setTimeout(() => toast.remove(), 300);
            }, 3500);
        }

        // CAROUSEL SYSTEM: Render the detailed content dynamically
        function renderSlide(index) {
            const data = slides[index];
            
            // Animate transition states beautifully
            const els = ['hero-tagline', 'hero-title', 'hero-description', 'hero-price', 'hero-jacket-graphic'];
            els.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.classList.add('opacity-0');
                    element.style.transform = 'translateY(8px)';
                }
            });

            setTimeout(() => {
                document.getElementById('hero-tagline').innerText = data.tagline;
                document.getElementById('hero-title').innerHTML = data.title;
                document.getElementById('hero-description').innerText = data.description;
                document.getElementById('hero-price').innerText = data.price;
                
                // Switch backdrop gradient
                const gradientBackdrop = document.getElementById('hero-backdrop-gradient');
                gradientBackdrop.style.background = data.gradient;
                
                // Swapping jacket asset
                document.getElementById('hero-jacket-graphic').innerHTML = jacketSVGs[data.jacketSVGKey];
                
                // Update index counter
                document.getElementById('carousel-current-index').innerText = data.index;

                // Remove transition hiding class
                els.forEach(id => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.classList.remove('opacity-0');
                        element.style.transform = 'translateY(0px)';
                    }
                });
            }, 400);
        }

        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            renderSlide(currentSlideIndex);
        }

        function prevSlide() {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            renderSlide(currentSlideIndex);
        }

        // DYNAMIC HOTSPOT VISUALIZERS
        const hotspotData = {
            hood: {
                title: "3-Way Adjustable Storm Hood",
                desc: "Equipped with single-pull cord adjustment system and structured laminated visor to maintain full line of sight under heavy rainstorms."
            },
            repellent: {
                title: "Durable PFC-Free Water Repelling",
                desc: "Surface fabric processed with non-fluorinated DWR formula. Completely repels external water droplets while maintaining optimal fabric breathability."
            },
            cords: {
                title: "Drawcord Hem Adjustment",
                desc: "Dual cord-locks locate cleanly at the base hem to pull snug under high wind, trapping critical thermal insulation inside."
            }
        };

        function showHotspot(key) {
            const panel = document.getElementById('hotspot-panel');
            const titleEl = document.getElementById('hotspot-title');
            const descEl = document.getElementById('hotspot-desc');
            
            titleEl.innerText = hotspotData[key].title;
            descEl.innerText = hotspotData[key].desc;
            
            panel.classList.remove('hidden');
            panel.classList.add('animate-float-medium');
            triggerToast(`Highlighting: ${hotspotData[key].title}`);
        }

        function closeHotspotPanel() {
            document.getElementById('hotspot-panel').classList.add('hidden');
        }

        // ADD TO BAG CONTROLLER
        function addProductToBagCurrent() {
            const currentItem = slides[currentSlideIndex];
            addToBag(currentItem.itemTitle, currentItem.itemPrice, currentItem.itemColor);
        }

        function addToBag(title, price, color) {
            const existingItem = cart.find(item => item.title === title && item.color === color);
            
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                cart.push({ title, price, color, qty: 1 });
            }
            
            triggerToast(`Added ${title} to your bag`);
            updateCartUI();
            toggleCart(true); // Auto expand cart drawer to show progress
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartUI();
            triggerToast('Item removed from bag', 'info');
        }

        function updateCartUI() {
            const cartItemsContainer = document.getElementById('cart-items');
            const emptyState = document.getElementById('cart-empty-state');
            const cartList = document.getElementById('cart-content-list');
            const footer = document.getElementById('cart-footer');
            const badge = document.getElementById('cart-badge');

            // Compute total quantities
            const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
            
            // Badge update
            if (totalQty > 0) {
                badge.innerText = totalQty;
                badge.classList.remove('scale-0');
                badge.classList.add('scale-100');
            } else {
                badge.classList.remove('scale-100');
                badge.classList.add('scale-0');
            }

            if (cart.length === 0) {
                emptyState.classList.remove('hidden');
                cartList.classList.add('hidden');
                footer.classList.add('hidden');
            } else {
                emptyState.classList.add('hidden');
                cartList.classList.remove('hidden');
                footer.classList.remove('hidden');

                let listHtml = '';
                let subtotal = 0;

                cart.forEach((item, index) => {
                    const itemTotal = item.price * item.qty;
                    subtotal += itemTotal;

                    listHtml += `
                        <div class="flex gap-4 bg-sage-50 p-4 rounded-xl border border-sage-300/40 relative group">
                            <div class="w-14 h-14 rounded-lg bg-sage-200 flex items-center justify-center text-charcoal">
                                <svg class="w-8 h-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 20 L20 12 L44 12 L52 20 L48 48 L16 48 Z" />
                                </svg>
                            </div>
                            <div class="flex-1 min-w-0">
                                <h5 class="text-xs font-semibold text-charcoal truncate">${item.title}</h5>
                                <p class="text-[10px] text-sage-500">${item.color} — Qty: ${item.qty}</p>
                                <span class="text-xs font-serif font-semibold text-charcoal block mt-1">$${item.price.toFixed(2)}</span>
                            </div>
                            <button onclick="removeFromCart(${index})" class="absolute top-2 right-2 p-1.5 hover:bg-sage-200 rounded-full transition-colors opacity-0 group-hover:opacity-100">
                                <svg class="w-3.5 h-3.5 text-sage-500 hover:text-rust" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                            </button>
                        </div>
                    `;
                });

                cartList.innerHTML = listHtml;
                document.getElementById('cart-subtotal').innerText = `$${subtotal.toFixed(2)}`;
            }
        }

        function toggleCart(forceOpen = false) {
            const drawer = document.getElementById('cart-drawer');
            if (forceOpen) {
                drawer.classList.remove('translate-x-full');
            } else {
                drawer.classList.toggle('translate-x-full');
            }
        }

        // GENERAL UTILITY POPUPS (Store finder, Account portals)
        function showStoreFinder() {
            const content = document.getElementById('generic-modal-content');
            content.innerHTML = `
                <div class="text-center">
                    <div class="w-12 h-12 rounded-full bg-sage-200 flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <h4 class="font-serif text-2xl font-bold mb-2">Find a Patagonia Retailer</h4>
                    <p class="text-xs text-charcoal/70 mb-6">Explore regional stockists committed to eco-friendly retail processes.</p>
                    
                    <div class="space-y-3">
                        <div class="p-3 bg-sage-50 rounded-xl text-left border border-sage-300/40 hover:border-charcoal/20 cursor-pointer" onclick="selectStore('Patagonia New York - Bowery')">
                            <h5 class="text-xs font-semibold">Patagonia New York — Bowery</h5>
                            <p class="text-[10px] text-sage-500">359 Bowery, New York, NY 10003</p>
                        </div>
                        <div class="p-3 bg-sage-50 rounded-xl text-left border border-sage-300/40 hover:border-charcoal/20 cursor-pointer" onclick="selectStore('Patagonia San Francisco')">
                            <h5 class="text-xs font-semibold">Patagonia San Francisco</h5>
                            <p class="text-[10px] text-sage-500">770 North Point St, San Francisco, CA 94109</p>
                        </div>
                    </div>
                </div>
            `;
            const modal = document.getElementById('generic-modal');
            modal.classList.remove('opacity-0', 'pointer-events-none');
        }

        function selectStore(name) {
            triggerToast(`Selected store: ${name}`);
            closeGenericModal();
        }

        function showAccountMock() {
            const content = document.getElementById('generic-modal-content');
            content.innerHTML = `
                <div class="text-center">
                    <div class="w-12 h-12 rounded-full bg-sage-200 flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    </div>
                    <h4 class="font-serif text-2xl font-bold mb-2">Member Portal</h4>
                    <p class="text-xs text-charcoal/70 mb-6">Log in to register your Worn Wear repair warranty.</p>
                    
                    <form onsubmit="handleLogin(event)" class="space-y-4">
                        <input type="email" required placeholder="Email Address" class="w-full bg-sage-50 border border-sage-300/80 rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-charcoal">
                        <input type="password" required placeholder="Password" class="w-full bg-sage-50 border border-sage-300/80 rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-charcoal">
                        <button type="submit" class="w-full bg-charcoal hover:bg-rust text-sage-150 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white transition-colors">
                            Sign In / Register
                        </button>
                    </form>
                </div>
            `;
            const modal = document.getElementById('generic-modal');
            modal.classList.remove('opacity-0', 'pointer-events-none');
        }

        function handleLogin(e) {
            e.preventDefault();
            triggerToast('Welcome back to the circular community!');
            closeGenericModal();
        }

        function closeGenericModal() {
            const modal = document.getElementById('generic-modal');
            modal.classList.add('opacity-0', 'pointer-events-none');
        }

        // FOOTER DISPATCH SIGNUP
        function handleSubscribe(e) {
            e.preventDefault();
            triggerToast('Thank you for subscribing to our ecological journals!');
            e.target.reset();
        }

        // SEAMLESS SCROLLER UTIL
        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // DETAILED TECHNOLOGY INFOGRAPHIC SYSTEM
        const detailInfo = {
            netplus: {
                title: "NetPlus® Recycled Ocean Nylon",
                text: "NetPlus is fully traceable postconsumer recycled nylon made from discarded ocean fishing nets collected in South American coastal communities. In partnership with Bureo, we help fishermen safely recycle retired nets, creating local jobs, protecting marine ecosystems, and replacing petroleum-derived plastics entirely."
            },
            repair: {
                title: "Ironclad Lifetime Repairs",
                text: "We guarantee everything we make. Keeping gear in play is the absolute single best action you can take to lower your carbon footprint. Send us your damaged parka, torn windbreaker, or busted zipper, and our specialized sewing specialists will hand-repair it, adding life-affirming patina to your travel companion."
            },
            shield: {
                title: "Advanced Breathable Storm Shields",
                text: "We test our shells inside our specialized wind tunnels to guarantee comfort in horizontal rainstorms. Utilizing a premium laminate backing coupled with PFC-Free water repellent treatments, our shells breathe effectively during intensive hikes while deflecting wind and water."
            }
        };

        function showInfoModal(key) {
            const data = detailInfo[key];
            document.getElementById('info-modal-title').innerText = data.title;
            document.getElementById('info-modal-text').innerText = data.text;
            
            const modal = document.getElementById('info-modal');
            const card = document.getElementById('info-modal-card');
            
            modal.classList.remove('opacity-0', 'pointer-events-none');
            card.classList.remove('scale-95');
            card.classList.add('scale-100');
        }

        function closeInfoModal() {
            const modal = document.getElementById('info-modal');
            const card = document.getElementById('info-modal-card');
            
            modal.classList.add('opacity-0', 'pointer-events-none');
            card.classList.add('scale-95');
            card.classList.remove('scale-100');
        }

        // MOCK INTERACTIVE CHECKOUT PROCEDURES
        function checkoutMock() {
            triggerToast('Preparing your ecological transaction envelope...');
            setTimeout(() => {
                triggerToast('Order Placed! Tree planting certificate sent to email.', 'success');
                cart = [];
                updateCartUI();
                toggleCart();
            }, 1200);
        }

        // PRODUCT GALLERY CATEGORY FILTERING
        function filterCollection(category) {
            const buttons = document.querySelectorAll('.category-btn');
            buttons.forEach(btn => btn.classList.remove('active', 'bg-charcoal', 'text-sage-100'));
            
            // Highlight clicked button
            const activeBtn = Array.from(buttons).find(btn => btn.innerText.toLowerCase().includes(category === 'all' ? 'all' : category));
            if (activeBtn) {
                activeBtn.classList.add('active', 'bg-charcoal', 'text-sage-100');
            }

            const cards = document.querySelectorAll('#product-grid > div');
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // SEARCH OVERLAY MECHANICS
        function toggleSearch() {
            const overlay = document.getElementById('search-overlay');
            const content = document.getElementById('search-content');
            
            if (overlay.classList.contains('opacity-0')) {
                overlay.classList.remove('opacity-0', 'pointer-events-none');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
            } else {
                overlay.classList.add('opacity-0', 'pointer-events-none');
                content.classList.add('scale-95');
                content.classList.remove('scale-100');
            }
        }

        function fillSearch(val) {
            triggerToast(`Searching for: ${val}`);
            toggleSearch();
        }

        // MOBILE SIDEBAR MENUS
        function toggleMobileNav() {
            const nav = document.getElementById('mobile-nav');
            if (nav.classList.contains('-translate-x-full')) {
                nav.classList.remove('-translate-x-full');
            } else {
                nav.classList.add('-translate-x-full');
            }
        }

        // ENVIRONMENTAL CALCULATOR LOGIC
        function calculateImpact(years) {
            document.getElementById('slider-val').innerText = `${years} ${years == 1 ? 'Year' : 'Years'}`;
            
            // Eco formulations
            const carbonSaved = (years * 2.84).toFixed(1);
            const waterSaved = (years * 2.36).toFixed(1);
            const repairVal = (years * 90).toFixed(2);

            document.getElementById('carbon-saved').innerText = `${carbonSaved} kg CO₂`;
            document.getElementById('water-saved').innerText = `${waterSaved} Sq. Ft.`;
            document.getElementById('repair-value').innerText = `$${repairVal}`;
        }
    </script>
</body>
</html>
3
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ASTRO. Winter Armor II - Technical Explorer</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts for premium technical & clean sans-serif typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    },
                    colors: {
                        astro: {
                            beige: '#F4F1EA',
                            clay: '#EBE7DD',
                            border: '#D9D3C5',
                            dark: '#1C1A17',
                            orange: '#FF6B00',
                            orangeHover: '#E05300',
                            grayText: '#625E56',
                            glow: 'rgba(255, 107, 0, 0.15)'
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Premium custom styling to match the paper-textured studio lighting of the image */
        body {
            background: radial-gradient(circle at 50% 50%, #EAB580 0%, #D87D39 50%, #9F4612 100%);
            font-family: 'Plus Jakarta Sans', sans-serif;
            min-height: 100vh;
            overflow-x: hidden;
        }

        /* Ambient studio glow background elements */
        .ambient-glow {
            box-shadow: 0 0 100px 20px rgba(255, 107, 0, 0.25);
        }

        /* Marbled physical paper background style for the main UI sheet */
        .paper-canvas {
            background-color: #F4F1EA;
            background-image: 
                radial-gradient(at 20% 20%, rgba(244, 241, 234, 1) 0%, rgba(239, 236, 229, 0.9) 100%),
                url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3联%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.015'/%3E%3C/svg%3E");
        }

        /* Subtle tactical scanline overlay for the blueprint feel */
        .scanlines {
            background: linear-gradient(
                to bottom,
                rgba(255,255,255,0),
                rgba(255,255,255,0) 50%,
                rgba(0, 0, 0, 0.02) 50%,
                rgba(0, 0, 0, 0.02)
            );
            background-size: 100% 4px;
        }

        /* Custom scrollbar to keep layout pristine */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #F4F1EA;
        }
        ::-webkit-scrollbar-thumb {
            background: #D9D3C5;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #FF6B00;
        }

        /* Micro-interactions for buttons & links */
        .tech-border-anim {
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .tech-border-anim:hover {
            border-color: #FF6B00;
            box-shadow: 0 0 12px rgba(255, 107, 0, 0.2);
        }

        /* Custom styling for the glowing tactical hot spots */
        @keyframes pulseGlow {
            0%, 100% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.3); opacity: 0.4; }
        }
        .pulse-glow {
            animation: pulseGlow 2s infinite ease-in-out;
        }
    </style>
</head>
<body class="p-3 md:p-6 lg:p-10 flex flex-col justify-center items-center font-sans antialiased selection:bg-astro-orange selection:text-white">

    <!-- Global Floating Action Status (Interactive Sound/Blueprint controls) -->
    <div class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 items-end">
        <div id="quickStatusToast" class="hidden bg-astro-dark text-white text-xs px-3 py-2 rounded-lg shadow-xl border border-astro-orange/30 font-mono transition-all duration-300">
            [SYS] Updated specs.
        </div>
    </div>

    <!-- MAIN IMMERSIVE CONTAINER: Replicates the pristine, shadowed, central tablet layout from your image -->
    <main class="paper-canvas w-full max-w-7xl rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-[#E1DCD0] overflow-hidden flex flex-col relative">
        <div class="scanlines absolute inset-0 pointer-events-none opacity-40"></div>
        
        <!-- HEADER / NAVIGATION BAR -->
        <header class="relative z-10 px-6 py-5 border-b border-astro-border flex items-center justify-between">
            <div class="flex items-center gap-12">
                <!-- Branding -->
                <a href="#" class="group flex items-center gap-3">
                    <span class="font-mono text-xl font-bold tracking-[0.25em] text-astro-dark transition-all group-hover:text-astro-orange">ASTRO.</span>
                    <span class="px-1.5 py-0.5 bg-astro-orange text-white text-[9px] font-mono rounded font-medium tracking-wider">M-02</span>
                </a>
                
                <!-- Desktop Nav Navigation -->
                <nav class="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-widest text-astro-grayText">
                    <a href="#products" class="hover:text-astro-orange transition-colors">PRODUCTS</a>
                    <a href="#specifications" class="hover:text-astro-orange transition-colors">SPECIFICATIONS</a>
                    <a href="#expedition" class="hover:text-astro-orange transition-colors">EXPEDITIONS</a>
                    <a href="#heritage" class="hover:text-astro-orange transition-colors font-semibold text-astro-dark flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-astro-orange"></span>
                        TACTICAL LAB
                    </a>
                </nav>
            </div>

            <!-- Utility Action Bar (Search, Bag, Account, Simulation Controls) -->
            <div class="flex items-center gap-6 text-astro-dark">
                <!-- Simulation HUD Active indicator -->
                <div class="hidden sm:flex items-center gap-2 px-3 py-1 bg-astro-clay border border-astro-border rounded-full text-[10px] font-mono text-astro-grayText">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    HUD LINK ACTIVE
                </div>

                <div class="flex items-center gap-4">
                    <button id="searchBtn" class="p-2 hover:text-astro-orange hover:bg-astro-clay rounded-lg transition-all" title="Search catalog">
                        <i class="fa-solid fa-magnifying-glass text-sm"></i>
                    </button>
                    <button onclick="toggleCart()" class="p-2 hover:text-astro-orange hover:bg-astro-clay rounded-lg transition-all relative" title="View cargo bag">
                        <i class="fa-solid fa-briefcase text-sm"></i>
                        <span id="cartCount" class="absolute -top-1 -right-1 bg-astro-dark text-white font-mono text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-astro-beige hidden">0</span>
                    </button>
                    <button class="p-2 hover:text-astro-orange hover:bg-astro-clay rounded-lg transition-all" title="User access">
                        <i class="fa-regular fa-user text-sm"></i>
                    </button>
                </div>
            </div>
        </header>

        <!-- PRODUCT SHOWCASE HERO: Splits into left params, central rotating dynamic interactive schematic preview, right selector panel -->
        <section class="relative grid grid-cols-1 lg:grid-cols-12 border-b border-astro-border min-h-[680px]">
            
            <!-- LEFT PANEL: Product Specs & Schematic Interactive Map Info (4 cols) -->
            <div class="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-r border-astro-border relative">
                
                <!-- Background grid accent for blueprint look -->
                <div class="absolute inset-0 bg-[linear-gradient(to_right,#EFECE5_1px,transparent_1px),linear-gradient(to_bottom,#EFECE5_1px,transparent_1px)] bg-[size:24px_24px] opacity-60 pointer-events-none"></div>

                <!-- Product Introduction Metadata -->
                <div class="relative z-10">
                    <span class="text-xs font-mono tracking-[0.2em] text-astro-orange font-bold">NEW RELEASE // MK-II</span>
                    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-astro-dark mt-2 mb-1 uppercase font-sans">
                        Astro <br>Winter Armor II
                    </h1>
                    
                    <!-- Dynamic Rating Badge & Code -->
                    <div class="flex items-center gap-4 mt-3 mb-6">
                        <span class="font-mono text-lg font-bold text-astro-dark" id="displayPrice">$560</span>
                        <div class="h-4 w-px bg-astro-border"></div>
                        <span class="text-[10px] font-mono bg-astro-clay px-2.5 py-1 border border-astro-border rounded text-astro-grayText tracking-widest">UNIT-0925</span>
                    </div>

                    <!-- Description Segment with toggleable details -->
                    <div class="border-t border-astro-border pt-4">
                        <span class="text-[11px] font-mono tracking-widest text-astro-dark uppercase block mb-2 font-bold">DESCRIPTION</span>
                        <p id="productDesc" class="text-xs text-astro-grayText leading-relaxed transition-all duration-300">
                            A heavy duty arctic modular puffer jacket that marries the extreme elegance of high-orbit retro exploration style with thermal resilience required for planetary expeditions. Enveloped in a soothing matte shell, it serves as an impenetrable defense for your winter adventures.
                        </p>
                        
                        <div class="mt-4 flex flex-wrap gap-2">
                            <span class="text-[9px] font-mono px-2 py-1 bg-astro-clay border border-astro-border rounded-md text-astro-dark">
                                <i class="fa-solid fa-shield-halved text-astro-orange mr-1"></i> Gore-Tex Pro
                            </span>
                            <span class="text-[9px] font-mono px-2 py-1 bg-astro-clay border border-astro-border rounded-md text-astro-dark">
                                <i class="fa-solid fa-snowflake text-astro-orange mr-1"></i> -30°C Tested
                            </span>
                        </div>
                    </div>
                </div>

                <!-- INTERACTIVE: Live Schematic Hotspot Inspector (Updates on hover of jacket hotspots) -->
                <div class="relative z-10 mt-8 pt-6 border-t border-astro-border bg-astro-clay/50 p-4 rounded-xl border border-astro-border">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-mono tracking-widest text-astro-dark font-bold uppercase flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-astro-orange animate-pulse"></span>
                            SCHEMATIC HUD
                        </span>
                        <span class="text-[9px] font-mono text-astro-orange" id="hudCoords">SYS_READY</span>
                    </div>
                    
                    <!-- Dynamic display dependent on user interaction -->
                    <div class="min-h-[80px]" id="schematicInspector">
                        <h4 class="text-xs font-bold text-astro-dark uppercase mb-1" id="inspectorTitle">Tap/Hover the Orange Hotspots</h4>
                        <p class="text-[11px] text-astro-grayText leading-normal" id="inspectorText">
                            Click or hover the glowing technical target dots on the central jacket visual to dissect the armor layers, high-output thermal valves, and storage attachments.
                        </p>
                    </div>
                </div>

                <!-- Custom Collapsible Specification Accordions to match image text lists -->
                <div class="mt-6 space-y-2 relative z-10">
                    <div class="border border-astro-border rounded-lg overflow-hidden bg-astro-beige">
                        <button onclick="toggleAccordion('acc1')" class="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-astro-clay/50 transition-colors">
                            <span class="text-xs font-mono tracking-wider font-semibold text-astro-dark uppercase">LOREM IPSUM DOLOR</span>
                            <i id="acc1-icon" class="fa-solid fa-chevron-down text-[10px] text-astro-grayText transition-transform"></i>
                        </button>
                        <div id="acc1" class="hidden px-4 pb-3 text-[11px] text-astro-grayText leading-relaxed">
                            Engineered with double-layered thermal chambers that trap body heat inside micro-air pathways, offering robust defense during fast temperature drops.
                        </div>
                    </div>
                    
                    <div class="border border-astro-border rounded-lg overflow-hidden bg-astro-beige">
                        <button onclick="toggleAccordion('acc2')" class="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-astro-clay/50 transition-colors">
                            <span class="text-xs font-mono tracking-wider font-semibold text-astro-dark uppercase">ASTRONAUTICAL DESIGN</span>
                            <i id="acc2-icon" class="fa-solid fa-chevron-down text-[10px] text-astro-grayText transition-transform"></i>
                        </button>
                        <div id="acc2" class="hidden px-4 pb-3 text-[11px] text-astro-grayText leading-relaxed">
                            Each seam is double-welded using custom reinforced space-grade thread to handle atmospheric pressures up to 1.4 ATM.
                        </div>
                    </div>
                </div>

            </div>

            <!-- CENTRAL DYNAMIC PRODUCT PREVIEW PANEL (5 cols) -->
            <div class="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center items-center relative min-h-[400px]">
                <!-- Technical Ring grid absolute backdrop -->
                <div class="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <svg class="w-4/5 h-4/5 animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="90" stroke="#FF6B00" stroke-width="0.5" fill="none" stroke-dasharray="4 4" />
                        <circle cx="100" cy="100" r="70" stroke="#FF6B00" stroke-width="0.75" fill="none" />
                        <line x1="100" y1="0" x2="100" y2="200" stroke="#FF6B00" stroke-width="0.2" />
                        <line x1="0" y1="100" x2="200" y2="100" stroke="#FF6B00" stroke-width="0.2" />
                    </svg>
                </div>

                <!-- Toggle Blueprint Overlay Switch -->
                <div class="absolute top-4 left-4 z-20">
                    <button onclick="toggleBlueprint()" class="px-3 py-1.5 bg-astro-clay/80 backdrop-blur border border-astro-border rounded-full text-[10px] font-mono text-astro-dark flex items-center gap-2 hover:border-astro-orange transition-all shadow-sm">
                        <i class="fa-solid fa-circle-nodes text-astro-orange" id="blueprintIndicator"></i>
                        <span>GRID LAYOUT: <span id="blueprintStatus" class="font-bold">ON</span></span>
                    </button>
                </div>

                <!-- Custom Vector Jacket Graphics (Highly polished, scalable SVG that supports clean color themes dynamically) -->
                <div id="jacketGraphicsContainer" class="w-full max-w-[340px] aspect-square relative z-10 transition-transform duration-500 hover:scale-105">
                    
                    <!-- Blueprint visual grids over the jacket when active -->
                    <div id="blueprintLines" class="absolute inset-0 pointer-events-none border-2 border-dashed border-astro-orange/20 rounded-xl transition-all duration-300">
                        <!-- Horizontal technical guideline -->
                        <div class="absolute top-1/2 left-0 right-0 h-px bg-astro-orange/20"></div>
                        <!-- Vertical technical guideline -->
                        <div class="absolute left-1/2 top-0 bottom-0 w-px bg-astro-orange/20"></div>
                        <!-- Coordinate flags -->
                        <span class="absolute top-2 left-2 font-mono text-[8px] text-astro-orange/50">X: 104.9</span>
                        <span class="absolute bottom-2 right-2 font-mono text-[8px] text-astro-orange/50">Y: 290.3</span>
                    </div>

                    <!-- Dynamic SVG jacket that recolors via JavaScript -->
                    <svg id="jacketSvg" viewBox="0 0 400 400" class="w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] transition-all duration-500">
                        <!-- Background Glow behind the coat -->
                        <circle cx="200" cy="200" r="140" fill="url(#ambientGlowGrad)" opacity="0.6"/>
                        
                        <!-- Definitions for gradients -->
                        <defs>
                            <radialGradient id="ambientGlowGrad" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stop-color="#FF6B00" stop-opacity="0.25" />
                                <stop offset="100%" stop-color="#F4F1EA" stop-opacity="0" />
                            </radialGradient>
                            
                            <!-- Dynamic colors applied dynamically -->
                            <linearGradient id="bodyColor" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" id="jacketGradStart" stop-color="#E8E2D5" />
                                <stop offset="100%" id="jacketGradEnd" stop-color="#C5BDB0" />
                            </linearGradient>
                            
                            <linearGradient id="liningColor" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#FF5100" />
                                <stop offset="100%" stop-color="#E04800" />
                            </linearGradient>

                            <linearGradient id="pocketColor" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" id="pocketGradStart" stop-color="#EFECE5" />
                                <stop offset="100%" id="pocketGradEnd" stop-color="#DCD6CB" />
                            </linearGradient>
                        </defs>

                        <!-- JACKET VECTOR PARTS -->
                        <!-- Hood interior lining -->
                        <path d="M140,110 Q200,50 260,110 L240,120 Q200,80 160,120 Z" fill="url(#liningColor)" />
                        <!-- Hood exterior -->
                        <path d="M140,110 Q200,45 260,110 L270,125 Q200,60 130,125 Z" fill="url(#bodyColor)" stroke="#AB9F8E" stroke-width="1.5" />
                        
                        <!-- Collar area -->
                        <path d="M150,120 L250,120 L260,140 L140,140 Z" fill="url(#bodyColor)" stroke="#9E9281" stroke-width="1" />
                        <path d="M155,123 L245,123 L250,132 L150,132 Z" fill="url(#liningColor)" />

                        <!-- Main Torso Left Puff -->
                        <path d="M140,140 Q170,140 200,150 L200,210 Q160,200 130,210 Z" fill="url(#bodyColor)" stroke="#AB9F8E" stroke-width="1.2" />
                        <!-- Torso Puff Layer 2 -->
                        <path d="M130,210 Q165,210 200,220 L200,280 Q165,275 125,290 Z" fill="url(#bodyColor)" stroke="#AB9F8E" stroke-width="1.2" />
                        <!-- Torso Puff Layer 3 -->
                        <path d="M125,290 Q165,290 200,295 L200,350 Q160,345 130,350 Z" fill="url(#bodyColor)" stroke="#AB9F8E" stroke-width="1.2" />

                        <!-- Main Torso Right Puff -->
                        <path d="M260,140 Q230,140 200,150 L200,210 Q240,200 270,210 Z" fill="url(#bodyColor)" stroke="#AB9F8E" stroke-width="1.2" />
                        <!-- Torso Puff Layer 2 Right -->
                        <path d="M270,210 Q235,210 200,220 L200,280 Q235,275 275,290 Z" fill="url(#bodyColor)" stroke="#AB9F8E" stroke-width="1.2" />
                        <!-- Torso Puff Layer 3 Right -->
                        <path d="M275,290 Q235,290 200,295 L200,350 Q240,345 270,350 Z" fill="url(#bodyColor)" stroke="#AB9F8E" stroke-width="1.2" />

                        <!-- Decorative Tech-lines Blueprint details directly onto the torso SVG -->
                        <circle cx="230" cy="175" r="14" fill="none" stroke="#FF6B00" stroke-width="1" stroke-dasharray="3 3" class="opacity-80" />
                        <circle cx="230" cy="175" r="5" fill="#FF6B00" class="opacity-80" />
                        <line x1="230" y1="161" x2="230" y2="189" stroke="#FF6B00" stroke-width="0.5" />
                        <line x1="216" y1="175" x2="244" y2="175" stroke="#FF6B00" stroke-width="0.5" />

                        <!-- Left Sleeve Puffs -->
                        <path d="M135,145 Q100,160 110,195 Q130,210 140,200 Z" fill="url(#bodyColor)" stroke="#AB9F8E" stroke-width="1" />
                        <path d="M110,195 Q90,220 100,250 Q120,260 135,250 Z" fill="url(#bodyColor)" stroke="#AB9F8E" stroke-width="1" />
                        <path d="M100,250 Q80,280 95,310 L115,305 Z" fill="url(#bodyColor)" stroke="#AB9F8E" stroke-width="1" />
                        <!-- Left Cuff -->
                        <path d="M95,310 L108,307 L115,318 L102,322 Z" fill="#D2C7B7" stroke="#9A8E7E" stroke-width="1" />

                        <!-- Right Sleeve Puffs -->
                        <path d="M265,145 Q300,160 290,195 Q270,210 260,200 Z" fill="url(#bodyColor)" stroke="#AB9F8E" stroke-width="1" />
                        <path d="M290,195 Q310,220 300,250 Q280,260 265,250 Z" fill="url(#bodyColor)" stroke="#AB9F8E" stroke-width="1" />
                        <path d="M300,250 Q320,280 305,310 L285,305 Z" fill="url(#bodyColor)" stroke="#AB9F8E" stroke-width="1" />
                        <!-- Right Cuff -->
                        <path d="M305,310 L292,307 L285,318 L298,322 Z" fill="#D2C7B7" stroke="#9A8E7E" stroke-width="1" />

                        <!-- Distinctive Left Side Sleeve Pouch (Astro Utility Pocket in bright signature Orange, matching image) -->
                        <path d="M285,190 L310,195 L310,225 L285,220 Z" fill="url(#liningColor)" stroke="#D43E00" stroke-width="1" />
                        <path d="M285,190 L310,195 L305,185 L282,180 Z" fill="#1C1A17" /> <!-- Black flap -->

                        <!-- Center Premium Metal Zipper line -->
                        <line x1="200" y1="140" x2="200" y2="350" stroke="#1C1A17" stroke-width="3" />
                        <rect x="197" y="160" width="6" height="12" rx="2" fill="#FF6B00" />
                        <rect x="197" y="240" width="6" height="12" rx="2" fill="#1C1A17" />

                        <!-- Subtle retro-futuristic grid graphics on jacket panels -->
                        <path d="M150,160 L180,160 L180,190" fill="none" stroke="#A69886" stroke-width="0.75" stroke-dasharray="2 2" />
                        <path d="M150,225 L180,225 L180,255" fill="none" stroke="#A69886" stroke-width="0.75" stroke-dasharray="2 2" />
                    </svg>

                    <!-- INTERACTIVE HOTSPOTS OVERLAY (Positioned to perfectly align with the coat components) -->
                    <!-- Hotspot 1: High Insulation Hood -->
                    <div class="absolute top-[16%] left-[50%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer" 
                         onmouseover="inspectHotspot('hood')" onmouseout="clearInspector()" onclick="inspectHotspot('hood')">
                        <div class="relative flex items-center justify-center">
                            <span class="absolute inline-flex h-6 w-6 rounded-full bg-astro-orange opacity-40 pulse-glow"></span>
                            <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-astro-orange border-2 border-white shadow-md"></span>
                        </div>
                    </div>

                    <!-- Hotspot 2: Tactical Arm Pocket -->
                    <div class="absolute top-[51%] right-[18%] -translate-y-1/2 group cursor-pointer" 
                         onmouseover="inspectHotspot('pocket')" onmouseout="clearInspector()" onclick="inspectHotspot('pocket')">
                        <div class="relative flex items-center justify-center">
                            <span class="absolute inline-flex h-6 w-6 rounded-full bg-astro-dark opacity-40 pulse-glow"></span>
                            <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-astro-dark border-2 border-white shadow-md"></span>
                        </div>
                    </div>

                    <!-- Hotspot 3: Internal Reactor Core Shell -->
                    <div class="absolute top-[44%] left-[58%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer" 
                         onmouseover="inspectHotspot('core')" onmouseout="clearInspector()" onclick="inspectHotspot('core')">
                        <div class="relative flex items-center justify-center">
                            <span class="absolute inline-flex h-6 w-6 rounded-full bg-astro-orange opacity-40 pulse-glow"></span>
                            <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-astro-orange border-2 border-white shadow-md"></span>
                        </div>
                    </div>

                    <!-- Hotspot 4: Dynamic Welded Seam Stitch -->
                    <div class="absolute bottom-[24%] left-[28%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer" 
                         onmouseover="inspectHotspot('seams')" onmouseout="clearInspector()" onclick="inspectHotspot('seams')">
                        <div class="relative flex items-center justify-center">
                            <span class="absolute inline-flex h-6 w-6 rounded-full bg-astro-orange opacity-40 pulse-glow"></span>
                            <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-astro-orange border-2 border-white shadow-md"></span>
                        </div>
                    </div>
                </div>

                <!-- Footer label within the central display -->
                <div class="text-center mt-6 z-10">
                    <p class="text-[9px] font-mono tracking-widest text-astro-dark font-semibold uppercase">DESIGNED IN SAN FRANCISCO // MK-02B</p>
                    <p class="text-[9px] font-mono tracking-widest text-astro-grayText mt-1 uppercase">FABRIC AND STITCHED IN BANGLADESH</p>
                </div>
            </div>

            <!-- RIGHT PANEL: CONFIGURATOR (Sizes, Premium Swatches, Action Elements) (3 cols) -->
            <div class="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between border-l border-astro-border bg-astro-clay/20">
                
                <!-- SIZE SELECTOR -->
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-[11px] font-mono tracking-widest text-astro-dark font-bold uppercase">SIZE</span>
                        <button onclick="toggleSizeGuide()" class="text-[10px] font-mono text-astro-orange underline hover:text-astro-orangeHover transition-colors">SIZE GUIDE</button>
                    </div>

                    <!-- Size Circle Grid -->
                    <div class="grid grid-cols-4 gap-2" id="sizeGridContainer">
                        <button onclick="selectSize('S')" class="size-btn py-3 bg-astro-beige border border-astro-border rounded-lg text-xs font-mono font-medium text-astro-dark hover:border-astro-orange transition-all">S</button>
                        <button onclick="selectSize('M')" class="size-btn py-3 bg-astro-dark border border-astro-dark rounded-lg text-xs font-mono font-bold text-white transition-all ring-2 ring-astro-orange/30">M</button>
                        <button onclick="selectSize('L')" class="size-btn py-3 bg-astro-beige border border-astro-border rounded-lg text-xs font-mono font-medium text-astro-dark hover:border-astro-orange transition-all">L</button>
                        <button onclick="selectSize('XL')" class="size-btn py-3 bg-astro-beige border border-astro-border rounded-lg text-xs font-mono font-medium text-astro-dark hover:border-astro-orange transition-all">XL</button>
                    </div>

                    <!-- Animated Size Warning Helper / Availability indicator -->
                    <p class="text-[10px] text-astro-grayText mt-2.5 font-mono" id="sizeStatus">
                        <span class="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1"></span> size M fits 175-185cm standard build.
                    </p>
                </div>

                <!-- PREMIUM COLOR SWATCH SYSTEM WITH PREVIEW THUMBNAILS (Just like the image layout) -->
                <div class="my-8">
                    <span class="text-[11px] font-mono tracking-widest text-astro-dark font-bold uppercase block mb-3">COLOR SELECTION</span>
                    
                    <div class="space-y-3">
                        <!-- Swatch 1: Retro Beige (Default) -->
                        <button onclick="changeColor('beige')" id="swatch-beige" class="color-swatch-btn w-full flex items-center justify-between p-2.5 rounded-lg border-2 border-astro-orange bg-astro-beige transition-all text-left">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-md bg-[#E8E2D5] border border-astro-border flex items-center justify-center text-[10px] font-mono text-astro-orange">
                                    <i class="fa-solid fa-check"></i>
                                </div>
                                <div>
                                    <p class="text-xs font-bold text-astro-dark">BEIGE / SAND</p>
                                    <p class="text-[9px] font-mono text-astro-grayText">Retro Lunar Spec</p>
                                </div>
                            </div>
                            <span class="text-[10px] font-mono bg-astro-clay text-astro-dark px-1.5 py-0.5 rounded border border-astro-border font-bold">BASE</span>
                        </button>

                        <!-- Swatch 2: Obsidian Black -->
                        <button onclick="changeColor('black')" id="swatch-black" class="color-swatch-btn w-full flex items-center justify-between p-2.5 rounded-lg border border-astro-border bg-white hover:border-astro-orange/50 transition-all text-left">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-md bg-[#2B2925] border border-astro-dark flex items-center justify-center"></div>
                                <div>
                                    <p class="text-xs font-bold text-astro-dark">OBSIDIAN / ONYX</p>
                                    <p class="text-[9px] font-mono text-astro-grayText">Shadow Stealth</p>
                                </div>
                            </div>
                            <span class="text-[10px] font-mono text-astro-grayText">+ $20</span>
                        </button>

                        <!-- Swatch 3: Ember Red -->
                        <button onclick="changeColor('red')" id="swatch-red" class="color-swatch-btn w-full flex items-center justify-between p-2.5 rounded-lg border border-astro-border bg-white hover:border-astro-orange/50 transition-all text-left">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-md bg-[#BF360C] border border-red-900 flex items-center justify-center"></div>
                                <div>
                                    <p class="text-xs font-bold text-astro-dark">EMBER / TACTICAL</p>
                                    <p class="text-[9px] font-mono text-astro-grayText">Thermal Extreme</p>
                                </div>
                            </div>
                            <span class="text-[10px] font-mono text-astro-grayText">+ $10</span>
                        </button>

                        <!-- Swatch 4: Galactic White -->
                        <button onclick="changeColor('white')" id="swatch-white" class="color-swatch-btn w-full flex items-center justify-between p-2.5 rounded-lg border border-astro-border bg-white hover:border-astro-orange/50 transition-all text-left">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-md bg-[#FBFBFA] border border-astro-border flex items-center justify-center"></div>
                                <div>
                                    <p class="text-xs font-bold text-astro-dark">NEBULA / WHITE</p>
                                    <p class="text-[9px] font-mono text-astro-grayText">Deep Vacuum Spec</p>
                                </div>
                            </div>
                            <span class="text-[10px] font-mono text-astro-orange font-bold">HOT</span>
                        </button>
                    </div>
                </div>

                <!-- INTERACTIVE MAIN CALL TO ACTION BUTTONS -->
                <div class="space-y-3 pt-4 border-t border-astro-border">
                    <!-- Favorite Action -->
                    <button id="favBtn" onclick="toggleFavorite()" class="w-full py-3 bg-transparent border border-astro-border rounded-full text-xs font-mono font-bold tracking-widest text-astro-dark uppercase hover:bg-astro-clay transition-all flex items-center justify-center gap-2">
                        <i class="fa-regular fa-heart text-astro-orange" id="favHeart"></i>
                        <span id="favText">FAVORITE UNIT</span>
                    </button>

                    <!-- Add to Bag Action (Transforms dynamically to indicate state) -->
                    <button id="addBagBtn" onclick="handleAddToBag()" class="w-full py-4.5 bg-astro-orange hover:bg-astro-orangeHover text-white rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,107,0,0.3)] hover:shadow-[0_4px_25px_rgba(255,107,0,0.45)]">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>ADD TO CARGO BAG</span>
                    </button>
                </div>

            </div>
        </section>

        <!-- HIGH-DENSITY GRID: 4-COLUMN SPECIFICATION CARDS (Matching the bottom line item boxes of the image) -->
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-astro-border divide-y md:divide-y-0 md:divide-x divide-astro-border bg-white/40">
            
            <!-- Spec Card 1: Color treatment -->
            <div class="p-6 flex flex-col justify-between hover:bg-astro-clay/10 transition-colors">
                <div>
                    <span class="text-[10px] font-mono tracking-widest text-astro-orange font-extrabold uppercase block mb-1">01 / REINFORCEMENT</span>
                    <h3 class="text-sm font-bold text-astro-dark uppercase mb-2">3X BEIGEWASHED SHELL</h3>
                </div>
                <div class="mt-4">
                    <p class="text-xs text-astro-grayText leading-relaxed">
                        The matte beige color pigment is bonded via high-pressure molecular washes with orange tactical highlights to retain maximum solar absorption while remaining highly invisible to radar scanning arrays.
                    </p>
                    <div class="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-astro-orange">
                        <i class="fa-solid fa-shield"></i>
                        <span>REINFORCED ANODE SHIELD</span>
                    </div>
                </div>
            </div>

            <!-- Spec Card 2: Insulation puff technology -->
            <div class="p-6 flex flex-col justify-between hover:bg-astro-clay/10 transition-colors">
                <div>
                    <span class="text-[10px] font-mono tracking-widest text-astro-orange font-extrabold uppercase block mb-1">02 / AERODYNAMICS</span>
                    <h3 class="text-sm font-bold text-astro-dark uppercase mb-2">34 AREAS PUFFED SHELL</h3>
                </div>
                <div class="mt-4">
                    <p class="text-xs text-astro-grayText leading-relaxed">
                        Optimized chamber divisions with 34 individual heat capture panels that dynamically trap and distribute body heat according to core biometric pressure mapping. Provides extreme warmth without restricting flight rotation.
                    </p>
                    <div class="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-astro-dark">
                        <i class="fa-solid fa-wind text-emerald-600"></i>
                        <span>THERMAL INDEX: GRADE-9</span>
                    </div>
                </div>
            </div>

            <!-- Spec Card 3: Extreme Thermal insulation -->
            <div class="p-6 flex flex-col justify-between hover:bg-astro-clay/10 transition-colors">
                <div>
                    <span class="text-[10px] font-mono tracking-widest text-astro-orange font-extrabold uppercase block mb-1">03 / METRIC RESISTANCE</span>
                    <h3 class="text-sm font-bold text-astro-dark uppercase mb-2">THERMAL MATRIX (-30°C)</h3>
                </div>
                <div class="mt-4">
                    <p class="text-xs text-astro-grayText leading-relaxed">
                        Specifically designed to survive sub-zero pressure environments, freezing high-altitude winds, and extreme environments. Internal carbon grids harness electrical fields to maintain steady interior humidity.
                    </p>
                    <div class="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-astro-dark">
                        <i class="fa-solid fa-temperature-low text-blue-500"></i>
                        <span>CRITICAL PROTECTION BLOCK</span>
                    </div>
                </div>
            </div>

            <!-- Spec Card 4: Futuristic Tech Graphics -->
            <div class="p-6 flex flex-col justify-between hover:bg-astro-clay/10 transition-colors">
                <div>
                    <span class="text-[10px] font-mono tracking-widest text-astro-orange font-extrabold uppercase block mb-1">04 / SYSTEM TELEMETRY</span>
                    <h3 class="text-sm font-bold text-astro-dark uppercase mb-2">INTEGRATED GRAPHICS</h3>
                </div>
                <div class="mt-4">
                    <p class="text-xs text-astro-grayText leading-relaxed">
                        Features highly detailed, retro-reflective tactical telemetry decals along the left sleeve and upper back panel that reflect planetary beacon frequencies for deep-orbit landing crew identification.
                    </p>
                    <div class="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-astro-orange">
                        <i class="fa-solid fa-network-wired"></i>
                        <span>RFID TRACKING INCORPORATED</span>
                    </div>
                </div>
            </div>

        </section>

        <!-- EXPEDITION LEVEL CONFIGURATOR: Interactive Simulator for Environmental Extremes -->
        <section id="expedition" class="p-6 sm:p-10 border-b border-astro-border bg-gradient-to-br from-[#EFECE5] to-[#E5E0D5] relative overflow-hidden">
            <div class="absolute top-0 right-0 w-96 h-96 bg-astro-orange/5 rounded-full filter blur-3xl pointer-events-none"></div>
            
            <div class="relative z-10 max-w-4xl mx-auto">
                <span class="text-[10px] font-mono tracking-[0.3em] text-astro-orange uppercase block mb-2 font-bold">// REAL-TIME HARNESS SIMULATION</span>
                <h2 class="text-2xl sm:text-3xl font-bold text-astro-dark uppercase mb-4">TACTICAL SIMULATOR: ATMOSPHERE TOLERANCE</h2>
                <p class="text-xs sm:text-sm text-astro-grayText mb-8 max-w-2xl leading-relaxed">
                    Adjust the sliders below to simulate severe planetary weather systems. See how the Astro Winter Armor II's integrated smart micro-valves adjust their thermal matrix dynamically to keep you within homeostatic limits.
                </p>

                <!-- Interactive Simulator Slider Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-astro-beige p-6 rounded-xl border border-astro-border shadow-sm">
                    
                    <!-- Slider 1: Atmospheric Temperature -->
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs font-mono font-bold text-astro-dark uppercase">PLANETARY TEMP</span>
                            <span id="tempVal" class="text-xs font-mono font-bold text-astro-orange">-15°C</span>
                        </div>
                        <input type="range" id="tempSlider" min="-50" max="10" value="-15" oninput="runSim()" class="w-full accent-astro-orange cursor-pointer bg-astro-clay h-2 rounded-lg">
                        <div class="flex justify-between text-[9px] font-mono text-astro-grayText mt-1">
                            <span>-50°C</span>
                            <span>NORMAL</span>
                            <span>10°C</span>
                        </div>
                    </div>

                    <!-- Slider 2: Wind Velocity -->
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs font-mono font-bold text-astro-dark uppercase">WIND SPEED</span>
                            <span id="windVal" class="text-xs font-mono font-bold text-astro-orange">45 km/h</span>
                        </div>
                        <input type="range" id="windSlider" min="0" max="120" value="45" oninput="runSim()" class="w-full accent-astro-orange cursor-pointer bg-astro-clay h-2 rounded-lg">
                        <div class="flex justify-between text-[9px] font-mono text-astro-grayText mt-1">
                            <span>STILL</span>
                            <span>STORM</span>
                            <span>120 km/h</span>
                        </div>
                    </div>

                    <!-- Slider 3: Air Pressure -->
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs font-mono font-bold text-astro-dark uppercase">ATM PRESSURE</span>
                            <span id="pressVal" class="text-xs font-mono font-bold text-astro-orange">1.0 ATM</span>
                        </div>
                        <input type="range" id="pressSlider" min="0" max="2" step="0.1" value="1.0" oninput="runSim()" class="w-full accent-astro-orange cursor-pointer bg-astro-clay h-2 rounded-lg">
                        <div class="flex justify-between text-[9px] font-mono text-astro-grayText mt-1">
                            <span>0.2 ATM</span>
                            <span>TERRESTRIAL</span>
                            <span>2.0 ATM</span>
                        </div>
                    </div>

                </div>

                <!-- Simulation Output Panel -->
                <div class="mt-6 p-4 rounded-xl border border-astro-orange/20 bg-astro-dark text-white font-mono text-xs flex flex-col md:flex-row items-center justify-between gap-4">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded bg-astro-orange/20 border border-astro-orange flex items-center justify-center animate-pulse">
                            <i class="fa-solid fa-heart-pulse text-astro-orange"></i>
                        </div>
                        <div>
                            <p class="text-[10px] text-gray-400">ARMOR SUIT DIAGNOSTIC STATUS</p>
                            <p class="font-bold text-sm tracking-wide text-[#EAE6DF]" id="diagResult">THERMO-STABLE: OPTIMAL CHAMBER PRESSURE</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-6">
                        <div>
                            <p class="text-[10px] text-gray-400 text-right">SUIT EFFICIENCY</p>
                            <p class="font-bold text-sm text-right text-emerald-400" id="efficiencyVal">98.4%</p>
                        </div>
                        <div>
                            <p class="text-[10px] text-gray-400 text-right">HEATER DRAW</p>
                            <p class="font-bold text-sm text-right text-astro-orange" id="heatDrawVal">12 Watts</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- CUSTOMIZE SUIT SECTION: Add attachments (Highly premium utility layout) -->
        <section id="specifications" class="p-6 sm:p-10 border-b border-astro-border bg-astro-beige">
            <div class="max-w-4xl mx-auto">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-8">
                    <div>
                        <span class="text-[10px] font-mono tracking-[0.3em] text-astro-orange uppercase block mb-2 font-bold">// MODULAR UPGRADE KIT</span>
                        <h2 class="text-2xl sm:text-3xl font-bold text-astro-dark uppercase">ARMOR ATTACHMENTS</h2>
                    </div>
                    <span class="text-[11px] font-mono text-astro-grayText tracking-wide mt-2 md:mt-0">CUSTOMIZE GEAR WITH QUICK-ATTACH HARDWARE</span>
                </div>

                <!-- Attachments Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    
                    <!-- Upgrade 1 -->
                    <div id="card-acc-1" class="border border-astro-border bg-white rounded-xl p-5 hover:border-astro-orange transition-all flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-start mb-3">
                                <span class="text-[9px] font-mono px-2 py-0.5 bg-[#FFF0E5] text-astro-orange rounded font-bold uppercase">ARMOR LAYER</span>
                                <span class="text-xs font-mono font-bold text-astro-dark">$85</span>
                            </div>
                            <h4 class="text-sm font-bold text-astro-dark uppercase mb-1">Magnetic Hood Visor</h4>
                            <p class="text-[11px] text-astro-grayText leading-normal mb-4">
                                Space-grade polycarbonate clear shield that clips onto the hood lip. Polarizes solar radiation instantly.
                            </p>
                        </div>
                        <button onclick="toggleUpgrade(1, 85)" id="btn-acc-1" class="w-full py-2 bg-astro-clay border border-astro-border text-[11px] font-mono font-bold tracking-wider rounded-lg text-astro-dark hover:border-astro-orange transition-all">
                            EQUIP UPGRADE
                        </button>
                    </div>

                    <!-- Upgrade 2 -->
                    <div id="card-acc-2" class="border border-astro-border bg-white rounded-xl p-5 hover:border-astro-orange transition-all flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-start mb-3">
                                <span class="text-[9px] font-mono px-2 py-0.5 bg-[#FFF0E5] text-astro-orange rounded font-bold uppercase">TECH PACK</span>
                                <span class="text-xs font-mono font-bold text-astro-dark">$110</span>
                            </div>
                            <h4 class="text-sm font-bold text-astro-dark uppercase mb-1">Solar Heat Backplate</h4>
                            <p class="text-[11px] text-astro-grayText leading-normal mb-4">
                                Thin external photovoltaic matrix panel that charges internal jacket system battery while trekking under orbit suns.
                            </p>
                        </div>
                        <button onclick="toggleUpgrade(2, 110)" id="btn-acc-2" class="w-full py-2 bg-astro-clay border border-astro-border text-[11px] font-mono font-bold tracking-wider rounded-lg text-astro-dark hover:border-astro-orange transition-all">
                            EQUIP UPGRADE
                        </button>
                    </div>

                    <!-- Upgrade 3 -->
                    <div id="card-acc-3" class="border border-astro-border bg-white rounded-xl p-5 hover:border-astro-orange transition-all flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-start mb-3">
                                <span class="text-[9px] font-mono px-2 py-0.5 bg-[#FFF0E5] text-astro-orange rounded font-bold uppercase">CARGO PACK</span>
                                <span class="text-xs font-mono font-bold text-astro-dark">$45</span>
                            </div>
                            <h4 class="text-sm font-bold text-astro-dark uppercase mb-1">Dual Mag-Lock Pouches</h4>
                            <p class="text-[11px] text-astro-grayText leading-normal mb-4">
                                Two auxiliary magnetic storage cubes that snap lock safely onto the left/right lower ribs of the puffer jacket.
                            </p>
                        </div>
                        <button onclick="toggleUpgrade(3, 45)" id="btn-acc-3" class="w-full py-2 bg-astro-clay border border-astro-border text-[11px] font-mono font-bold tracking-wider rounded-lg text-astro-dark hover:border-astro-orange transition-all">
                            EQUIP UPGRADE
                        </button>
                    </div>

                </div>

                <!-- Customizer Summary Section -->
                <div class="mt-8 pt-6 border-t border-astro-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div class="flex items-center gap-3">
                        <i class="fa-solid fa-layer-group text-astro-orange text-lg"></i>
                        <div>
                            <h5 class="text-xs font-bold text-astro-dark uppercase">ACTIVE GEAR SET</h5>
                            <p id="upgradeCountText" class="text-[11px] text-astro-grayText">Jacket base configured without external attachment modules.</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-[10px] text-astro-grayText uppercase">COMBINED VALUE</p>
                        <p id="totalConfiguredPrice" class="text-xl font-bold text-astro-orange font-mono">$560</p>
                    </div>
                </div>

            </div>
        </section>

        <!-- EXPEDITION LOGS: USER TESTIMONIALS WITH REAL ENVIRONMENT CONDITIONS -->
        <section id="heritage" class="p-6 sm:p-10 bg-white/50 border-b border-astro-border relative">
            <div class="max-w-4xl mx-auto">
                <span class="text-[10px] font-mono tracking-[0.3em] text-astro-orange uppercase block mb-2 font-bold">// DEEP FIELD INTELLIGENCE</span>
                <h2 class="text-2xl sm:text-3xl font-bold text-astro-dark uppercase mb-8">EXPEDITION PILOT REPORT</h2>

                <!-- Review Block Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <!-- Pilot Review 1 -->
                    <div class="border border-astro-border p-6 rounded-xl bg-astro-beige/40 flex flex-col justify-between">
                        <div>
                            <!-- Star rate / Location Badge -->
                            <div class="flex items-center justify-between mb-4">
                                <div class="flex items-center gap-1 text-astro-orange text-[11px]">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <span class="text-[9px] font-mono px-2 py-0.5 bg-astro-clay text-astro-dark rounded">CODENAME: NEPTUNE-9</span>
                            </div>

                            <p class="text-xs text-astro-dark italic leading-relaxed mb-4">
                                "The wind shear on the high ridge reached 75 km/h at -24°C, but inside the Armor II I felt completely cocooned. The dynamic micro-valves along the chest trapped warmth beautifully. The high matte finish held up exceptionally against freezing ice sleet."
                            </p>
                        </div>
                        <div class="border-t border-astro-border pt-4 flex items-center justify-between">
                            <div>
                                <h5 class="text-xs font-bold text-astro-dark">Capt. Marcus Vance</h5>
                                <p class="text-[9px] font-mono text-astro-grayText">Svalbard Trek Crew Leader</p>
                            </div>
                            <span class="text-[10px] font-mono text-emerald-600 font-semibold uppercase">VERIFIED RIG</span>
                        </div>
                    </div>

                    <!-- Pilot Review 2 -->
                    <div class="border border-astro-border p-6 rounded-xl bg-astro-beige/40 flex flex-col justify-between">
                        <div>
                            <!-- Star rate / Location Badge -->
                            <div class="flex items-center justify-between mb-4">
                                <div class="flex items-center gap-1 text-astro-orange text-[11px]">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <span class="text-[9px] font-mono px-2 py-0.5 bg-astro-clay text-astro-dark rounded">CODENAME: ALPS-CROSS</span>
                            </div>

                            <p class="text-xs text-astro-dark italic leading-relaxed mb-4">
                                "I was skeptical about the 34-chamber layout system thinking it would feel stiff, but the flexibility when skiing was fantastic. The orange sleeve storage pockets were quick to unfasten with freezing ski gloves. Absolute masterclass in utility design!"
                            </p>
                        </div>
                        <div class="border-t border-astro-border pt-4 flex items-center justify-between">
                            <div>
                                <h5 class="text-xs font-bold text-astro-dark">Eliza Thorne</h5>
                                <p class="text-[9px] font-mono text-astro-grayText">Alpine Solo Expeditioner</p>
                            </div>
                            <span class="text-[10px] font-mono text-emerald-600 font-semibold uppercase">VERIFIED RIG</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- FOOTER: Coordinates, licensing specs, newsletter -->
        <footer class="relative z-10 p-6 sm:p-10 bg-astro-dark text-white font-mono text-xs">
            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                
                <!-- Brand metadata -->
                <div class="space-y-4">
                    <p class="text-lg font-bold tracking-[0.25em] text-white">ASTRO.</p>
                    <p class="text-[11px] text-gray-400 leading-relaxed">
                        High-altitude outer survival hardware. Engineered inside terrestrial pressure grids to sustain homeostatic performance under hostile climates.
                    </p>
                    <p class="text-[10px] text-astro-orange">
                        LAT: 37.7749° N // LON: 122.4194° W
                    </p>
                </div>

                <!-- Specs links -->
                <div>
                    <h5 class="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">// HARDWARE CLASS</h5>
                    <ul class="space-y-2 text-[11px] text-gray-400">
                        <li><a href="#" class="hover:text-astro-orange transition-colors">ARMOR MK-I CHASSIS</a></li>
                        <li><a href="#" class="hover:text-astro-orange transition-colors">LUNAR GLOVE ASSEMBLIES</a></li>
                        <li><a href="#" class="hover:text-astro-orange transition-colors">COMPRESSOR UNITS</a></li>
                        <li><a href="#" class="hover:text-astro-orange transition-colors">WIND BREAK MEMBRANES</a></li>
                    </ul>
                </div>

                <!-- Resource links -->
                <div>
                    <h5 class="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">// SYSTEM ARCHIVE</h5>
                    <ul class="space-y-2 text-[11px] text-gray-400">
                        <li><a href="#" class="hover:text-astro-orange transition-colors">FLIGHT TELEMETRY DATA</a></li>
                        <li><a href="#" class="hover:text-astro-orange transition-colors">MATERIAL BIOCOMPATIBILITY</a></li>
                        <li><a href="#" class="hover:text-astro-orange transition-colors">DISTRIBUTED REPAIR CLINICS</a></li>
                        <li><a href="#" class="hover:text-astro-orange transition-colors">WARRANTY DEED PROTOCOL</a></li>
                    </ul>
                </div>

                <!-- Newsletter Input with premium orange accent button -->
                <div>
                    <h5 class="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">// SUBSYSTEM NOTIFICATIONS</h5>
                    <p class="text-[11px] text-gray-400 mb-3">Subscribe to register your unit telemetry and unlock automatic flight warranty updates.</p>
                    <div class="flex items-center rounded-lg overflow-hidden border border-gray-700 bg-zinc-900 p-1">
                        <input type="email" placeholder="SECURE_EMAIL@DOM" class="w-full bg-transparent px-2.5 py-1 text-xs text-white focus:outline-none placeholder:text-gray-600">
                        <button onclick="triggerNotification('Registration key issued via secure protocol.')" class="px-3 py-1 bg-astro-orange hover:bg-astro-orangeHover text-white rounded font-bold text-[10px] tracking-wider transition-colors">
                            ENLIST
                        </button>
                    </div>
                </div>

            </div>

            <!-- Bottom Legal line in design style -->
            <div class="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-[10px] text-gray-500 gap-4">
                <p>© 2026 ASTRO INC. ALL TACTICAL GEAR PATENTS VALIDATED AT LUNAR REGISTRY.</p>
                <div class="flex items-center gap-4">
                    <a href="#" class="hover:text-white transition-colors">SECURITY DEED</a>
                    <a href="#" class="hover:text-white transition-colors">COMMS GRID</a>
                </div>
            </div>
        </footer>

    </main>

    <!-- INTERACTIVE SIZE GUIDE MODAL (Hidden by default) -->
    <div id="sizeGuideModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
        <div class="bg-astro-beige max-w-lg w-full rounded-xl border border-astro-border p-6 shadow-2xl relative">
            <button onclick="toggleSizeGuide()" class="absolute top-4 right-4 text-astro-dark hover:text-astro-orange text-lg">
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
            <h3 class="text-lg font-bold text-astro-dark uppercase font-sans mb-1">ASTRO ARMOR REGULATION SIZING</h3>
            <p class="text-xs text-astro-grayText font-mono mb-4">M-02 STANDARD SYSTEM CONFIGURATION MEASUREMENTS</p>
            
            <table class="w-full text-left text-xs font-mono border-collapse">
                <thead>
                    <tr class="border-b border-astro-border text-astro-orange bg-astro-clay/50">
                        <th class="p-2">SIZE</th>
                        <th class="p-2">HEIGHT RANGE</th>
                        <th class="p-2">CHEST PANEL</th>
                        <th class="p-2">ARM INSEAM</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-astro-border text-astro-dark">
                    <tr>
                        <td class="p-2 font-bold">S</td>
                        <td class="p-2">165 - 174 cm</td>
                        <td class="p-2">92 - 98 cm</td>
                        <td class="p-2">61 cm</td>
                    </tr>
                    <tr class="bg-astro-clay/20">
                        <td class="p-2 font-bold">M</td>
                        <td class="p-2">175 - 184 cm</td>
                        <td class="p-2">99 - 106 cm</td>
                        <td class="p-2">63 cm</td>
                    </tr>
                    <tr>
                        <td class="p-2 font-bold">L</td>
                        <td class="p-2">185 - 192 cm</td>
                        <td class="p-2">107 - 114 cm</td>
                        <td class="p-2">65 cm</td>
                    </tr>
                    <tr class="bg-astro-clay/20">
                        <td class="p-2 font-bold">XL</td>
                        <td class="p-2">193 - 200+ cm</td>
                        <td class="p-2">115 - 124 cm</td>
                        <td class="p-2">67 cm</td>
                    </tr>
                </tbody>
            </table>
            
            <p class="text-[11px] text-astro-grayText mt-4 leading-normal italic">
                * Note: If you plan on configuring the solar battery attachment module, we strongly recommend going up one size index to allocate necessary chassis backspace.
            </p>
        </div>
    </div>

    <!-- CARGO BAG (CART) SLIDEOUT SYSTEM (Hidden by default) -->
    <div id="cartSlideout" class="fixed inset-y-0 right-0 w-full max-w-md bg-astro-beige border-l border-astro-border z-50 transform translate-x-full transition-transform duration-300 ease-in-out shadow-2xl flex flex-col justify-between">
        
        <!-- Cart Header -->
        <div class="p-6 border-b border-astro-border flex items-center justify-between">
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-briefcase text-astro-orange"></i>
                <h4 class="font-bold text-astro-dark uppercase">ACTIVE CARGO BAY</h4>
            </div>
            <button onclick="toggleCart()" class="text-astro-dark hover:text-astro-orange">
                <i class="fa-solid fa-arrow-right-long text-lg"></i>
            </button>
        </div>

        <!-- Cart Items -->
        <div class="p-6 flex-1 overflow-y-auto space-y-4" id="cartItemsList">
            <!-- Dynamic Cart Contents generated by Javascript -->
            <div class="text-center py-10 text-astro-grayText" id="emptyCartMsg">
                <i class="fa-solid fa-box-open text-3xl mb-3 opacity-35"></i>
                <p class="text-xs font-mono">CARGO PORT IS EMPTY</p>
                <p class="text-[10px] mt-1">Add Astro jackets and modules to load flight crates.</p>
            </div>
        </div>

        <!-- Cart Total Summary -->
        <div class="p-6 border-t border-astro-border bg-astro-clay/30">
            <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-mono text-astro-grayText">LOAD STATUS</span>
                <span class="text-xs font-mono text-emerald-600 font-bold uppercase">READY FOR FLIGHT</span>
            </div>
            <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-astro-dark">TOTAL WEIGHT VALUE</span>
                <span id="cartTotalVal" class="text-lg font-bold text-astro-orange font-mono">$0</span>
            </div>
            <button onclick="checkoutSim()" class="w-full py-3 bg-astro-dark hover:bg-zinc-800 text-white font-mono text-xs font-bold tracking-widest uppercase rounded-lg transition-colors flex items-center justify-center gap-2">
                <span>APPROVE CARGO FOR TRANSIT</span>
                <i class="fa-solid fa-plane-departure text-astro-orange"></i>
            </button>
        </div>
    </div>

    <!-- JAVASCRIPT: Full interactive controls for hot-spot descriptions, customizable suit configurations, price engine and simulated checkout -->
    <script>
        // State variables
        let selectedColor = 'beige';
        let selectedSize = 'M';
        let basePrice = 560;
        let colorPriceOffset = 0;
        let activeUpgrades = {}; // Stores upgrade ID: price values
        let isFavorite = false;
        let cargoBag = [];
        let isBlueprintActive = true;

        // Colors specifications matching theme system
        const colorPresets = {
            beige: {
                title: 'ASTRO WINTER ARMOR II',
                desc: 'A heavy duty arctic modular puffer jacket that marries the extreme elegance of high-orbit retro exploration style with thermal resilience required for planetary expeditions. Enveloped in a soothing matte shell, it serves as an impenetrable defense for your winter adventures.',
                startGrad: '#E8E2D5',
                endGrad: '#C5BDB0',
                priceOffset: 0,
                priceString: '$560'
            },
            black: {
                title: 'ASTRO OBSIDIAN S-II',
                desc: 'Special operations stealth variant engineered with light-absorbing carbon matrix fabrics. Perfect for tracking operations in absolute darkness or shadow-side landing coordinates. Minimizes bio-thermal signatures.',
                startGrad: '#2B2925',
                endGrad: '#161513',
                priceOffset: 20,
                priceString: '$580'
            },
            red: {
                title: 'ASTRO THERMAL RED-II',
                desc: 'High-visibility safety matrix coated shell built specifically for sub-glacial crevasse search and rescue units. Employs special heat-reflective polymers to protect operators in emergency environments.',
                startGrad: '#BF360C',
                endGrad: '#7F1D1D',
                priceOffset: 10,
                priceString: '$570'
            },
            white: {
                title: 'ASTRO VACUUM WHITE-II',
                desc: 'Extremely reflective lunar white surface treated with heavy dust-repelling fluoropolymers. Keeps critical technical systems clean from sticky abrasive soils and radioactive space dust.',
                startGrad: '#FBFBFA',
                endGrad: '#DEDEDA',
                priceOffset: 30,
                priceString: '$590'
            }
        };

        // Schematic Hotspot definitions
        const hotspots = {
            hood: {
                title: "O₂ Air Intake Hood Shield",
                text: "The high collar and hood integrate a modular breathable barrier with micron-fine air mesh layers that scrub incoming atmospheric particulate while maximizing facial heat retention."
            },
            pocket: {
                title: "Astro Utility Mag-Lock Arm Pouch",
                text: "Positioned on the upper left arm, this easy-access pocket features a physical mechanical pull and integrated high-strength magnets that secure micro-tools even inside severe gravity drops."
            },
            core: {
                title: "Aerogel Core Insulation Buffer",
                text: "A 5mm inner pocket utilizing NASA-standard silica aerogels. Repels cold conductivity up to -45 degrees Celsius while keeping weight under 400 grams."
            },
            seams: {
                title: "Reinforced Heat-Foil Weld Seams",
                text: "All critical flex sectors are reinforced on the interior with thermal heat tape which prevents pressurized warm air from leaking during deep movement compression."
            }
        };

        // 1. Initial State Sync
        window.onload = function() {
            updatePriceDisplay();
            runSim(); // Pre-populate simulator telemetry
        };

        // 2. Color Swatch Picker function
        function changeColor(colorKey) {
            selectedColor = colorKey;
            const preset = colorPresets[colorKey];
            
            // Adjust descriptive components
            document.getElementById('productDesc').textContent = preset.desc;
            document.getElementById('displayPrice').textContent = preset.priceString;
            colorPriceOffset = preset.priceOffset;

            // Update SVG jacket color gradients dynamically
            document.getElementById('jacketGradStart').setAttribute('stop-color', preset.startGrad);
            document.getElementById('jacketGradEnd').setAttribute('stop-color', preset.endGrad);

            // Update Swatch CSS Selection styling (border overlays)
            document.querySelectorAll('.color-swatch-btn').forEach(btn => {
                btn.classList.remove('border-astro-orange', 'bg-astro-beige');
                btn.classList.add('border-astro-border', 'bg-white');
            });
            const activeBtn = document.getElementById(`swatch-${colorKey}`);
            activeBtn.classList.add('border-astro-orange', 'bg-astro-beige');
            activeBtn.classList.remove('border-astro-border', 'bg-white');

            updatePriceDisplay();
            triggerToast(`[SYS] Suit loaded with ${colorKey.toUpperCase()} armor preset.`);
        }

        // 3. Size Switcher
        function selectSize(size) {
            selectedSize = size;
            
            // Re-style buttons in grid
            const container = document.getElementById('sizeGridContainer');
            container.querySelectorAll('button').forEach(btn => {
                btn.className = "size-btn py-3 bg-astro-beige border border-astro-border rounded-lg text-xs font-mono font-medium text-astro-dark hover:border-astro-orange transition-all";
            });

            // Make active button stand out
            event.target.className = "size-btn py-3 bg-astro-dark border border-astro-dark rounded-lg text-xs font-mono font-bold text-white transition-all ring-2 ring-astro-orange/30";

            // Update descriptive label
            const statusLabel = document.getElementById('sizeStatus');
            if (size === 'S') {
                statusLabel.innerHTML = `<span class="inline-block w-1.5 h-1.5 bg-yellow-500 rounded-full mr-1"></span> size S tailored for 165-174cm high-agility builds.`;
            } else if (size === 'M') {
                statusLabel.innerHTML = `<span class="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1"></span> size M fits 175-185cm standard build.`;
            } else if (size === 'L') {
                statusLabel.innerHTML = `<span class="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1"></span> size L tailored for 186-192cm rugged frames.`;
            } else if (size === 'XL') {
                statusLabel.innerHTML = `<span class="inline-block w-1.5 h-1.5 bg-rose-500 rounded-full mr-1"></span> size XL optimized for extra sub-suit thermal layering.`;
            }

            triggerToast(`[SYS] Set scale metric to size ${size}.`);
        }

        // 4. Hotspot inspector hover mechanics
        function inspectHotspot(hotspotKey) {
            const node = hotspots[hotspotKey];
            document.getElementById('hudCoords').textContent = `LOCK: [${hotspotKey.toUpperCase()}]`;
            document.getElementById('hudCoords').classList.add('text-astro-orange');
            
            document.getElementById('inspectorTitle').textContent = node.title;
            document.getElementById('inspectorText').textContent = node.text;
        }

        function clearInspector() {
            document.getElementById('hudCoords').textContent = "SYS_READY";
            document.getElementById('hudCoords').classList.remove('text-astro-orange');
            document.getElementById('inspectorTitle').textContent = "Hover Jacket Tech Elements";
            document.getElementById('inspectorText').textContent = "Click or hover the glowing technical target dots on the central jacket visual to dissect the armor layers, high-output thermal valves, and storage attachments.";
        }

        // 5. Upgrade Attachment Selector
        function toggleUpgrade(id, price) {
            const card = document.getElementById(`card-acc-${id}`);
            const btn = document.getElementById(`btn-acc-${id}`);

            if (activeUpgrades[id]) {
                // Remove upgrade
                delete activeUpgrades[id];
                card.classList.remove('border-astro-orange', 'bg-astro-orange/5');
                card.classList.add('border-astro-border', 'bg-white');
                btn.textContent = "EQUIP UPGRADE";
                btn.className = "w-full py-2 bg-astro-clay border border-astro-border text-[11px] font-mono font-bold tracking-wider rounded-lg text-astro-dark hover:border-astro-orange transition-all";
                triggerToast(`[UPGRADE] Detached upgrade kit module-0${id}.`);
            } else {
                // Add upgrade
                activeUpgrades[id] = price;
                card.classList.add('border-astro-orange', 'bg-astro-orange/5');
                card.classList.remove('border-astro-border', 'bg-white');
                btn.textContent = "EQUIPPED";
                btn.className = "w-full py-2 bg-astro-orange border border-astro-orange text-[11px] font-mono font-bold tracking-wider rounded-lg text-white transition-all";
                triggerToast(`[UPGRADE] Snapped lock upgrade kit module-0${id}.`);
            }

            // Sync total customized value calculation
            updatePriceDisplay();
        }

        // Calculate combined dynamic configurations price
        function calculateTotalPrice() {
            let total = basePrice + colorPriceOffset;
            Object.values(activeUpgrades).forEach(p => {
                total += p;
            });
            return total;
        }

        function updatePriceDisplay() {
            const total = calculateTotalPrice();
            document.getElementById('totalConfiguredPrice').textContent = `$${total}`;
            
            // Sync summary text
            const upgradeCount = Object.keys(activeUpgrades).length;
            const textSummary = document.getElementById('upgradeCountText');
            if (upgradeCount === 0) {
                textSummary.textContent = "Jacket base configured without external attachment modules.";
            } else {
                textSummary.textContent = `Configured with ${upgradeCount} specialized environmental payload accessory modules.`;
            }
        }

        // 6. Interactive Environmental Simulator Calculator logic
        function runSim() {
            const temp = parseInt(document.getElementById('tempSlider').value);
            const wind = parseInt(document.getElementById('windSlider').value);
            const press = parseFloat(document.getElementById('pressSlider').value);

            // Display live slider values
            document.getElementById('tempVal').textContent = `${temp}°C`;
            document.getElementById('windVal').textContent = `${wind} km/h`;
            document.getElementById('pressVal').textContent = `${press.toFixed(1)} ATM`;

            // Core mathematical logic simulating dynamic suit reactions
            let efficiency = 100 - (Math.abs(temp) * 0.15) - (wind * 0.1) - (Math.abs(1.0 - press) * 12);
            efficiency = Math.max(45, Math.min(100, efficiency)); // Bound efficiency range

            let heaterPower = 0;
            if (temp < 0) {
                heaterPower = Math.abs(temp) * 1.8 + (wind * 0.4);
            } else {
                heaterPower = 5; // Minimal operational drain
            }
            heaterPower = Math.min(150, Math.round(heaterPower));

            // Generate contextual diagnostic readout
            let diagText = "THERMO-STABLE: OPTIMAL CHAMBER TEMPERATURE";
            let stateClass = "text-emerald-400";

            if (temp < -40 || wind > 100) {
                diagText = "WARNING: HIGH EXTERNAL FORCE. THERM-MATRIX OVERLOADED";
                stateClass = "text-rose-500 animate-pulse";
            } else if (temp < -25) {
                diagText = "ACTIVE: MICRO-HEAT GENERATORS FIRED TO EXTREME MATRIX";
                stateClass = "text-astro-orange";
            } else if (press < 0.6) {
                diagText = "PRESSURE REDUCED: CORE CHAMBERS STIFFENING INTERNAL GRID";
                stateClass = "text-yellow-400";
            }

            // Write output
            const diagLabel = document.getElementById('diagResult');
            diagLabel.className = `font-bold text-xs sm:text-sm tracking-wide ${stateClass}`;
            diagLabel.textContent = diagText;

            document.getElementById('efficiencyVal').textContent = `${efficiency.toFixed(1)}%`;
            document.getElementById('heatDrawVal').textContent = `${heaterPower} Watts`;
        }

        // 7. Toggle Accordion utility
        function toggleAccordion(id) {
            const block = document.getElementById(id);
            const icon = document.getElementById(`${id}-icon`);
            if (block.classList.contains('hidden')) {
                block.classList.remove('hidden');
                icon.className = "fa-solid fa-chevron-up text-[10px] text-astro-orange transition-transform";
            } else {
                block.classList.add('hidden');
                icon.className = "fa-solid fa-chevron-down text-[10px] text-astro-grayText transition-transform";
            }
        }

        // 8. Blueprint Grid Graphic Toggle
        function toggleBlueprint() {
            isBlueprintActive = !isBlueprintActive;
            const lines = document.getElementById('blueprintLines');
            const indicator = document.getElementById('blueprintIndicator');
            const statusLabel = document.getElementById('blueprintStatus');

            if (isBlueprintActive) {
                lines.classList.remove('opacity-0');
                indicator.className = "fa-solid fa-circle-nodes text-astro-orange";
                statusLabel.textContent = "ON";
                triggerToast("[HUD] Blueprints overlay enabled.");
            } else {
                lines.classList.add('opacity-0');
                indicator.className = "fa-solid fa-circle-nodes text-astro-grayText";
                statusLabel.textContent = "OFF";
                triggerToast("[HUD] Blueprints overlay hidden.");
            }
        }

        // 9. Interactive Favoriting
        function toggleFavorite() {
            isFavorite = !isFavorite;
            const icon = document.getElementById('favHeart');
            const txt = document.getElementById('favText');
            
            if (isFavorite) {
                icon.className = "fa-solid fa-heart text-astro-orange animate-[ping_0.5s_1_ease-out]";
                setTimeout(() => { icon.className = "fa-solid fa-heart text-astro-orange"; }, 500);
                txt.textContent = "ARMOR UNIT SAVED";
                triggerToast("[SYS] Model added to secure storage manifest.");
            } else {
                icon.className = "fa-regular fa-heart text-astro-orange";
                txt.textContent = "FAVORITE UNIT";
                triggerToast("[SYS] Model removed from storage manifest.");
            }
        }

        // 10. Core Cargo Cart interactions
        function toggleCart() {
            const slideout = document.getElementById('cartSlideout');
            slideout.classList.toggle('translate-x-full');
        }

        function toggleSizeGuide() {
            const modal = document.getElementById('sizeGuideModal');
            modal.classList.toggle('hidden');
        }

        function triggerToast(text) {
            const toast = document.getElementById('quickStatusToast');
            toast.textContent = text;
            toast.classList.remove('hidden', 'opacity-0');
            toast.classList.add('opacity-100');
            
            // Auto hide
            setTimeout(() => {
                toast.classList.remove('opacity-100');
                toast.classList.add('opacity-0');
                setTimeout(() => { toast.classList.add('hidden'); }, 300);
            }, 3000);
        }

        function handleAddToBag() {
            const jacketTitle = colorPresets[selectedColor].title;
            const finalPrice = calculateTotalPrice();
            
            // Build item metadata
            const item = {
                id: Date.now(),
                title: jacketTitle,
                color: selectedColor,
                size: selectedSize,
                price: finalPrice,
                upgrades: Object.keys(activeUpgrades).map(u => `Mod-0${u}`)
            };

            cargoBag.push(item);
            updateCartUI();
            
            // Microanimation on button
            const btn = document.getElementById('addBagBtn');
            const oldHtml = btn.innerHTML;
            btn.className = "w-full py-4.5 bg-emerald-600 text-white rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2";
            btn.innerHTML = `<i class="fa-solid fa-check"></i> LOADED TO CARGO BAY`;
            
            triggerToast(`[CARGO] ${jacketTitle} size ${selectedSize} secured.`);

            setTimeout(() => {
                btn.className = "w-full py-4.5 bg-astro-orange hover:bg-astro-orangeHover text-white rounded-full text-xs font-mono font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,107,0,0.3)]";
                btn.innerHTML = oldHtml;
            }, 2000);
        }

        function removeItem(id) {
            cargoBag = cargoBag.filter(item => item.id !== id);
            updateCartUI();
            triggerToast("[CARGO] Purged item from transit load.");
        }

        function updateCartUI() {
            const countBadge = document.getElementById('cartCount');
            const list = document.getElementById('cartItemsList');
            const emptyMsg = document.getElementById('emptyCartMsg');
            const totalVal = document.getElementById('cartTotalVal');

            // Set badge
            if (cargoBag.length > 0) {
                countBadge.textContent = cargoBag.length;
                countBadge.classList.remove('hidden');
                emptyMsg.classList.add('hidden');
            } else {
                countBadge.classList.add('hidden');
                emptyMsg.classList.remove('hidden');
            }

            // Clear old non-empty list
            const oldItems = list.querySelectorAll('.cargo-item-node');
            oldItems.forEach(n => n.remove());

            let runningSum = 0;
            cargoBag.forEach(item => {
                runningSum += item.price;
                const node = document.createElement('div');
                node.className = "cargo-item-node p-4 border border-astro-border rounded-xl bg-white shadow-sm flex items-start justify-between gap-4";
                
                // Construct inner layout
                let upgradesListHtml = item.upgrades.length > 0 
                    ? `<p class="text-[9px] font-mono text-astro-orange mt-1">Attachments: ${item.upgrades.join(', ')}</p>` 
                    : ``;

                node.innerHTML = `
                    <div class="flex-1">
                        <div class="flex items-center gap-2">
                            <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${getColorHex(item.color)}"></span>
                            <h5 class="text-xs font-bold text-astro-dark uppercase">${item.title}</h5>
                        </div>
                        <p class="text-[10px] font-mono text-astro-grayText mt-0.5">SIZE: ${item.size} // CODE-0${item.id.toString().slice(-4)}</p>
                        ${upgradesListHtml}
                    </div>
                    <div class="text-right">
                        <p class="text-xs font-bold font-mono text-astro-dark">$${item.price}</p>
                        <button onclick="removeItem(${item.id})" class="text-[10px] text-rose-500 font-mono underline hover:text-rose-700 mt-2 block">PURGE</button>
                    </div>
                `;
                list.appendChild(node);
            });

            totalVal.textContent = `$${runningSum}`;
        }

        function getColorHex(colorKey) {
            switch(colorKey) {
                case 'beige': return '#E8E2D5';
                case 'black': return '#2B2925';
                case 'red': return '#BF360C';
                case 'white': return '#FBFBFA';
                default: return '#E8E2D5';
            }
        }

        function checkoutSim() {
            if (cargoBag.length === 0) {
                triggerToast("[ERROR] Cargo bay is currently unweighted.");
                return;
            }
            
            // Simulate launch order
            triggerToast("[LAUNCH] Transmitting secure transit flight path...");
            
            const list = document.getElementById('cartItemsList');
            list.innerHTML = `
                <div class="text-center py-10 text-emerald-600 font-mono">
                    <i class="fa-solid fa-circle-check text-4xl mb-3 animate-[bounce_1s_infinite]"></i>
                    <p class="text-sm font-bold uppercase">SECURED FOR FLIGHT</p>
                    <p class="text-[10px] text-astro-grayText mt-2">Transit coordinate lock assigned to base platform. Shipment dispatched.</p>
                </div>
            `;
            cargoBag = [];
            document.getElementById('cartCount').classList.add('hidden');
            document.getElementById('cartTotalVal').textContent = "$0";
        }
    </script>
</body>
</html>
4
import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Layers, 
  Cpu, 
  Shuffle, 
  Sliders, 
  Maximize2, 
  Activity, 
  TrendingUp, 
  Globe, 
  ShoppingBag, 
  Zap, 
  Package, 
  Command, 
  ArrowUpRight, 
  CheckCircle,
  HelpCircle,
  Clock,
  ChevronRight,
  RefreshCw,
  Eye,
  Settings,
  Shield,
  Layers3
} from 'lucide-react';

export default function App() {
  // State for Interactive Configurator
  const [modelMaterial, setModelMaterial] = useState('Liquid Chrome');
  const [glossLevel, setGlossLevel] = useState(85);
  const [inflation, setInflation] = useState(40);
  const [glowPower, setGlowPower] = useState(65);
  const [selectedColor, setSelectedColor] = useState('metallic'); // metallic, neon-purple, obsidian, sterile-white

  // State for active store format
  const [activeFormat, setActiveFormat] = useState('pop-ups');

  // State for active timeline step
  const [activeStep, setActiveStep] = useState(1);

  // Simulated Launch Configurator State
  const [launchTier, setLaunchTier] = useState('essential');
  const [customFeatures, setCustomFeatures] = useState({
    marketing: true,
    consultancy: true,
    teamTraining: false,
    analytics: true,
    dropRelease: false,
  });
  const [submittingConfig, setSubmittingConfig] = useState(false);
  const [configSuccess, setConfigSuccess] = useState(false);

  // Notification Toast State
  const [toast, setToast] = useState(null);

  // Dynamic status parameters to simulate live technical calculations
  const [systemLoad, setSystemLoad] = useState(42.3);
  const [totalOrders, setTotalOrders] = useState(304892);
  const [activeDeployments, setActiveDeployments] = useState(14);

  // Custom Cursor (Only on Desktop)
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorHovering, setCursorHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Simulate ticking technical metrics
    const interval = setInterval(() => {
      setSystemLoad(prev => +(prev + (Math.random() - 0.5) * 1.2).toFixed(2));
      setTotalOrders(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const triggerToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleFeatureToggle = (key) => {
    setCustomFeatures(prev => ({ ...prev, [key]: !prev[key] }));
    triggerToast(`SYSTEM: Parameter "${key}" has been dynamically updated.`);
  };

  const submitBrandLauncher = (e) => {
    e.preventDefault();
    setSubmittingConfig(true);
    setTimeout(() => {
      setSubmittingConfig(false);
      setConfigSuccess(true);
      triggerToast("UNPOSE® System: Brand blueprint initialized successfully.");
      setTimeout(() => setConfigSuccess(false), 5000);
    }, 2200);
  };

  // Helper calculation for mock launching pricing
  const calculateEstimate = () => {
    let base = launchTier === 'premium' ? 8500 : launchTier === 'enterprise' ? 14900 : 4500;
    const activeCount = Object.values(customFeatures).filter(Boolean).length;
    return base + (activeCount * 950);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0e] text-[#f5f5f7] font-mono selection:bg-[#a855f7] selection:text-black overflow-x-hidden relative">
      
      {/* Dynamic Cursor Halo */}
      <div 
        className={`fixed pointer-events-none z-50 transition-transform duration-100 -translate-x-1/2 -translate-y-1/2 rounded-full hidden md:block border ${
          cursorHovering 
            ? 'w-16 h-16 bg-purple-500/10 border-purple-400 scale-125' 
            : 'w-8 h-8 border-white/20 bg-transparent'
        }`}
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      {/* Dynamic Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#151517] border border-purple-500/40 text-xs text-[#f5f5f7] p-4 rounded-lg shadow-2xl flex items-center gap-3 animate-slide-in max-w-sm">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
          <div className="flex-1">
            <span className="text-purple-400 font-bold uppercase tracking-wider block text-[10px]">SYSTEM UPDATE</span>
            {toast}
          </div>
        </div>
      )}

      {/* TOP HEADER PRE-NAVBAR - Exact designer info from original */}
      <div className="w-full bg-[#18181a] border-b border-neutral-800 py-3 px-6 flex justify-between items-center text-[11px] text-neutral-400">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-orange-400 flex items-center justify-center font-bold text-white text-[9px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
              alt="Margarita Zilinskaya" 
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <span className="text-[#f5f5f7] font-bold">Margarita Zilinskaya</span>
            <span className="text-purple-400 font-mono ml-2">@ridizain</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span className="animate-pulse flex items-center gap-1.5 text-[#a855f7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
            LIVE SIMULATION ONLINE
          </span>
          <span className="text-neutral-500">|</span>
          <span>UNIT 92X - OFFICIAL DEV ENVIRONMENT</span>
        </div>
        <div>
          <a 
            href="#configurator" 
            className="text-white hover:text-purple-400 transition-colors border border-neutral-800 hover:border-purple-500/30 px-3 py-1 rounded bg-black/40"
          >
            ORDER DESIGN IN TG <span className="text-purple-400">@ridizain</span>
          </a>
        </div>
      </div>

      {/* PRIMARY CYBERNETIC NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#0d0d0e]/95 backdrop-blur-md border-b border-neutral-900 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="#" className="text-xl font-black tracking-widest text-[#f5f5f7] flex items-center gap-2">
              <span>UNPOSE</span>
              <span className="text-[10px] bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/30 font-mono font-normal">® SYSTEM</span>
            </a>
            <nav className="hidden lg:flex items-center gap-6 text-xs text-neutral-400 font-medium">
              <a href="#about" className="hover:text-white transition-colors">VISION</a>
              <a href="#simulation" className="hover:text-white transition-colors">MODEL CONFIGURATOR</a>
              <a href="#formats" className="hover:text-white transition-colors">FORMATS</a>
              <a href="#turnkey" className="hover:text-white transition-colors">TURNKEY LAUNCH</a>
              <a href="#blueprint" className="hover:text-white transition-colors">BLUEPRINT BUILDER</a>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="hidden md:flex flex-col text-right font-mono text-[10px] text-neutral-500">
              <span>SYS_TEMP: 38.6°C</span>
              <span>NETWORK LOAD: {systemLoad}%</span>
            </div>
            <a 
              href="#blueprint" 
              className="bg-[#f5f5f7] text-[#0d0d0e] font-bold px-4 py-2 rounded uppercase tracking-wider hover:bg-purple-500 hover:text-white transition-all shadow-md flex items-center gap-2"
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            >
              <span>GET THE SUIT</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">

        {/* HERO BLOCK: TRANSLATING UNPOSE DESIGN DNA */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
          
          {/* Main Hero Card - Left Side (Obsidian Editorial Aesthetic) */}
          <div className="lg:col-span-8 bg-[#18181a] rounded-2xl border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group min-h-[500px]">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 -right-12 w-64 h-64 rounded-full bg-purple-600/10 blur-[80px] pointer-events-none group-hover:bg-purple-600/15 transition-all duration-700" />
            
            {/* Header elements inside the card */}
            <div className="flex justify-between items-start border-b border-neutral-800/60 pb-6 relative z-10">
              <div>
                <span className="text-xs text-neutral-500 block tracking-widest uppercase">UNIT 92X – OFFICIAL BRAND BLUEPRINT</span>
                <span className="text-[10px] text-purple-400 font-mono mt-1 block">MODEL: VORTEX XQ–92</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-neutral-400 block font-mono">ESTABLISHED / 2026_SYS</span>
                <span className="inline-block px-2 py-0.5 text-[9px] bg-neutral-900 border border-neutral-700 rounded text-neutral-300 mt-1 uppercase font-mono">VERIFIED CERTIFICATE</span>
              </div>
            </div>

            {/* Huge Cybernetic Title */}
            <div className="my-8 relative z-10">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-none uppercase">
                UNPOSE<span className="text-purple-500">®</span>
              </h1>
              <p className="text-neutral-400 text-sm max-w-lg mt-4 font-sans leading-relaxed">
                A hybrid cyber-clothing ecosystem built for the physical realm, operating on autonomous design protocols. We create garments that respond, adapt, and move with human kinetic vectors.
              </p>
            </div>

            {/* Bottom Row inside the main card */}
            <div className="border-t border-neutral-800/60 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-neutral-800">
                  <span className="text-purple-500 font-black text-sm animate-pulse">(+)</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-white block uppercase tracking-wider">A.LCE© PROTOCOL</span>
                  <span className="text-[10px] text-neutral-500 block font-mono">ID CODE —› 748112-ZX9</span>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="px-3 py-1 bg-black rounded-full border border-neutral-800 text-[11px] text-neutral-400">HIGH FIDELITY</span>
                <span className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-[11px] text-purple-300">SYSTEM: 42% GROWTH RATE</span>
              </div>
            </div>

            {/* Decorative background grids */}
            <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none select-none">
              <span className="font-black text-9xl">92X</span>
            </div>
          </div>

          {/* Right Side Cards (The Kinetic Globe & Metric Display) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Mini Kinetic Visualizer Card */}
            <div className="bg-[#1e1e20] rounded-2xl border border-neutral-700/60 p-6 flex-1 flex flex-col justify-between relative overflow-hidden group">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">KINETIC GLOBE SYS</span>
                <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
              </div>

              {/* Holographic Wireframe Globe Representation */}
              <div className="my-8 flex justify-center items-center relative py-6">
                <div className="absolute w-44 h-44 rounded-full border border-dashed border-purple-500/30 animate-spin-slow" />
                <div className="absolute w-32 h-32 rounded-full border border-double border-white/10 animate-reverse-spin" />
                <div className="absolute w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600/20 to-neutral-900 blur-sm flex items-center justify-center">
                  <span className="text-[10px] text-purple-300 font-bold animate-pulse">ACTIVE_PTX</span>
                </div>
                {/* Simulated Floating Particles around globe */}
                <div className="w-2 h-2 rounded-full bg-purple-500 absolute top-10 left-12 animate-bounce" />
                <div className="w-1.5 h-1.5 rounded-full bg-white absolute bottom-12 right-14 animate-pulse" />
                <div className="w-1 h-1 rounded-full bg-purple-400 absolute top-24 right-8 animate-ping" />
              </div>

              <div>
                <span className="text-3xl font-black text-white block">42%</span>
                <span className="text-xs text-neutral-400 block mt-1 uppercase">NETWORK EXPANSION RATE Y.T.D</span>
                <div className="mt-4 pt-3 border-t border-neutral-800 flex justify-between text-[11px] text-neutral-500">
                  <span>LATENCY: 12ms</span>
                  <span>NODE: EU-WEST-92</span>
                </div>
              </div>
            </div>

            {/* Quick Promo CTA Card */}
            <div className="bg-gradient-to-br from-neutral-900 to-black rounded-2xl border border-neutral-800 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] text-neutral-400 uppercase font-mono">AUTO-GENERATION ENGAGED</span>
              </div>
              
              <div className="my-4">
                <h3 className="text-lg font-bold text-white uppercase">PREMIUM STUDIO BLUEPRINT</h3>
                <p className="text-xs text-neutral-400 mt-1 font-sans">
                  Instantly launch a physical retail segment configured with autonomous stock logistics.
                </p>
              </div>

              <a 
                href="#turnkey" 
                className="w-full bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 text-purple-300 hover:text-white transition-all text-xs font-bold py-2.5 rounded text-center block uppercase tracking-wider"
              >
                DISCOVER LAUNCH PLANS
              </a>
            </div>

          </div>
        </section>

        {/* SECTION 2: INTERACTIVE BRAND MODEL CONFIGURATOR (DYNAMIC SIMULATION) */}
        <section id="simulation" className="space-y-6 pt-12">
          
          <div className="border-l-4 border-purple-500 pl-4">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">MODULE // 02</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">INTERACTIVE WARDROBE SIMULATOR</h2>
            <p className="text-neutral-400 text-sm max-w-2xl font-sans mt-1">
              Test kinetic materials, inflation, and emission levels of the official UNPOSE Vortex suit before order output.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#151517] rounded-3xl border border-neutral-800 p-6 sm:p-8 relative overflow-hidden">
            
            {/* Interactive Preview Canvas Area (Left) */}
            <div className="lg:col-span-7 bg-black/90 rounded-2xl border border-neutral-800 p-6 flex flex-col justify-between min-h-[450px] relative overflow-hidden group">
              
              {/* Technical Overlay */}
              <div className="flex justify-between items-start text-[10px] text-neutral-500 font-mono z-10">
                <div className="space-y-1">
                  <span>RENDER_ENG: WEB_GL_2.0</span>
                  <span className="block">FRAME_RATE: 60FPS</span>
                </div>
                <div className="text-right space-y-1">
                  <span>VERTEX_CT: 142,509</span>
                  <span className="block">MATERIAL: {modelMaterial.toUpperCase()}</span>
                </div>
              </div>

              {/* Dynamic Interactive Visual Representation of the Model Suit */}
              <div className="my-8 flex justify-center items-center relative h-64">
                
                {/* Cybernetic Aura Backdrop (Reacts dynamically to user variables) */}
                <div 
                  className="absolute rounded-full blur-3xl transition-all duration-300" 
                  style={{
                    width: `${200 + inflation * 1.5}px`,
                    height: `${200 + inflation * 1.5}px`,
                    backgroundColor: selectedColor === 'neon-purple' ? 'rgba(168, 85, 247, 0.25)' : 
                                    selectedColor === 'obsidian' ? 'rgba(59, 130, 246, 0.15)' : 
                                    selectedColor === 'sterile-white' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(192, 192, 192, 0.2)',
                    filter: `blur(${110 - glowPower * 0.5}px)`
                  }}
                />

                {/* Simulated 3D Model Render - SVG-based Cyber-suit Vector */}
                <svg 
                  className="w-56 h-56 transition-all duration-300 transform group-hover:scale-105" 
                  viewBox="0 0 200 200" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle outer grid lines */}
                  <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="0.5" strokeDasharray="3 6" className="opacity-30" />
                  <line x1="100" y1="0" x2="100" y2="200" stroke="white" strokeWidth="0.5" className="opacity-20" />
                  <line x1="0" y1="100" x2="200" y2="100" stroke="white" strokeWidth="0.5" className="opacity-20" />

                  {/* Main inflatable collar representation */}
                  <path 
                    d={`M 50,130 C 50,110 60,${80 - inflation * 0.3} 100,${80 - inflation * 0.3} C 140,${80 - inflation * 0.3} 150,110 150,130`}
                    stroke={selectedColor === 'neon-purple' ? '#c084fc' : selectedColor === 'obsidian' ? '#3b82f6' : '#ffffff'} 
                    strokeWidth={6 + (inflation / 10)}
                    className="transition-all duration-300 opacity-90"
                  />

                  {/* Liquid Metal Jacket Torso */}
                  <path 
                    d="M 60,130 L 70,190 L 130,190 L 140,130 Z" 
                    fill={selectedColor === 'neon-purple' ? 'url(#neonPurpleGrad)' : selectedColor === 'obsidian' ? 'url(#obsidianGrad)' : selectedColor === 'sterile-white' ? 'url(#whiteGrad)' : 'url(#chromeGrad)'}
                    className="transition-all duration-300"
                    fillOpacity={0.4 + (glossLevel / 200)}
                    stroke="white"
                    strokeWidth="1.5"
                  />

                  {/* Dynamic glow lines on suit based on state */}
                  <path 
                    d="M 85,135 L 85,175 M 115,135 L 115,175" 
                    stroke="#a855f7" 
                    strokeWidth={2 + (glowPower / 30)} 
                    strokeLinecap="round"
                    className="transition-all duration-300 animate-pulse"
                    strokeOpacity={glowPower / 100}
                  />

                  {/* Interactive Helmet Visor */}
                  <ellipse 
                    cx="100" 
                    cy="80" 
                    rx="30" 
                    ry="20" 
                    fill={selectedColor === 'neon-purple' ? '#3b0764' : '#111'} 
                    stroke={selectedColor === 'neon-purple' ? '#a855f7' : selectedColor === 'obsidian' ? '#2563eb' : '#fff'} 
                    strokeWidth="2.5"
                    className="transition-all duration-300"
                  />
                  
                  {/* Digital scanlines inside visor */}
                  <line x1="75" y1="80" x2="125" y2="80" stroke="#a855f7" strokeWidth="1" className="animate-bounce" />

                  {/* Custom gradients defined for svg fill rendering */}
                  <defs>
                    <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e5e5e5" />
                      <stop offset="50%" stopColor="#737373" />
                      <stop offset="100%" stopColor="#171717" />
                    </linearGradient>
                    <linearGradient id="neonPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="50%" stopColor="#6b21a8" />
                      <stop offset="100%" stopColor="#2e1065" />
                    </linearGradient>
                    <linearGradient id="obsidianGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#1d4ed8" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                    <linearGradient id="whiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="50%" stopColor="#d4d4d8" />
                      <stop offset="100%" stopColor="#52525b" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Technical Stats on Graphic */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/80 border border-neutral-800 p-3 rounded text-[9px] space-y-1 font-mono">
                  <span className="block text-purple-400">STRUCTURAL ENVELOPE:</span>
                  <span className="block text-white">X-VOLUME: {100 + inflation}%</span>
                  <span className="block text-white">Y-REFLECTIVE: {glossLevel}%</span>
                  <span className="block text-white">EMISSIVE PWR: {glowPower * 3.5} LM</span>
                </div>

                <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/80 border border-neutral-800 p-3 rounded text-[9px] space-y-1 font-mono text-right">
                  <span className="block text-neutral-400">FITTING STATUS:</span>
                  <span className="block text-green-400 animate-pulse">OPTIMAL COMFORT</span>
                  <span className="block text-neutral-500">SYS_V: 92.48-X</span>
                </div>
              </div>

              {/* Quick Actions overlay */}
              <div className="flex justify-between items-center border-t border-neutral-800 pt-4">
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      setModelMaterial('Liquid Chrome');
                      setGlossLevel(95);
                      setInflation(30);
                      setGlowPower(80);
                      setSelectedColor('metallic');
                      triggerToast("SUIT PRESET: Liquid Chrome restored.");
                    }}
                    className="px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 rounded border border-neutral-800 text-[10px] text-neutral-300 font-mono"
                  >
                    RESET PRESET
                  </button>
                  <button 
                    onClick={() => {
                      setGlossLevel(Math.floor(Math.random() * 50) + 50);
                      setInflation(Math.floor(Math.random() * 80) + 10);
                      setGlowPower(Math.floor(Math.random() * 70) + 30);
                      const colors = ['metallic', 'neon-purple', 'obsidian', 'sterile-white'];
                      setSelectedColor(colors[Math.floor(Math.random() * colors.length)]);
                      triggerToast("SUIT PRESET: Random dynamic properties assigned.");
                    }}
                    className="px-2.5 py-1 bg-purple-950/40 hover:bg-purple-900/40 rounded border border-purple-500/30 text-[10px] text-purple-300 font-mono flex items-center gap-1"
                  >
                    <Shuffle className="w-2.5 h-2.5" />
                    RANDOMIZE
                  </button>
                </div>
                <span className="text-[10px] text-neutral-500 font-mono">PRESS SHIFT TO LOCK HORIZON</span>
              </div>
            </div>

            {/* Configurator Side Controls (Right) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                
                {/* Visual Title Header */}
                <div className="border-b border-neutral-800 pb-4">
                  <span className="inline-block px-2 py-0.5 text-[9px] bg-purple-500/20 text-purple-400 rounded-sm mb-2 font-mono uppercase">Interactive Sandbox</span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">CONFIGURE THE MATRIX</h3>
                  <p className="text-xs text-neutral-400 font-sans mt-1">Adjust parameters directly feeding into custom physical fabricators.</p>
                </div>

                {/* Color/Material Preset Selector */}
                <div className="space-y-3">
                  <span className="text-[11px] text-neutral-400 font-mono block uppercase tracking-wider">01 // SELECT COATED MATERIAL</span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'metallic', label: 'Liquid Chrome', colorClass: 'bg-zinc-400' },
                      { id: 'neon-purple', label: 'Vortex Purple', colorClass: 'bg-purple-600' },
                      { id: 'obsidian', label: 'Obsidian Cyan', colorClass: 'bg-blue-600' },
                      { id: 'sterile-white', label: 'Clinical White', colorClass: 'bg-white' },
                    ].map((material) => (
                      <button
                        key={material.id}
                        onClick={() => {
                          setSelectedColor(material.id);
                          setModelMaterial(material.label);
                          triggerToast(`Material changed to ${material.label}`);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2 ${
                          selectedColor === material.id 
                            ? 'bg-neutral-900 border-purple-500 shadow-lg' 
                            : 'bg-black/40 border-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        <div className={`w-3 h-3 rounded-full ${material.colorClass}`} />
                        <div>
                          <span className="text-xs font-bold block text-[#f5f5f7]">{material.label}</span>
                          <span className="text-[9px] text-neutral-500 block uppercase font-mono">{material.id === 'metallic' ? 'REFLECTIVE' : 'EMISSIVE'}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sliders Block */}
                <div className="space-y-4">
                  <span className="text-[11px] text-neutral-400 font-mono block uppercase tracking-wider">02 // FINE-TUNE PHY-DIGITAL VALUES</span>
                  
                  {/* Gloss Level Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-neutral-400">MATERIAL GLOSS LEVEL:</span>
                      <span className="text-white font-bold">{glossLevel}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="100" 
                      value={glossLevel} 
                      onChange={(e) => setGlossLevel(parseInt(e.target.value))}
                      className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>

                  {/* Inflation Level Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-neutral-400">WARDROBE INFLATION (X-VOL):</span>
                      <span className="text-white font-bold">+{inflation}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={inflation} 
                      onChange={(e) => setInflation(parseInt(e.target.value))}
                      className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>

                  {/* Emissive Power Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-neutral-400">GLOW POWER / EMISSION:</span>
                      <span className="text-white font-bold">{glowPower * 3.5}LM</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="100" 
                      value={glowPower} 
                      onChange={(e) => setGlowPower(parseInt(e.target.value))}
                      className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>
                </div>

              </div>

              {/* Configurator Footer/Order Summary */}
              <div className="bg-black/60 border border-neutral-800 rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Estimated Production Cycle:</span>
                  <span className="text-white font-mono font-bold">48 Hours</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-neutral-800/60 pb-2">
                  <span className="text-neutral-400">Material Integrity:</span>
                  <span className="text-green-400 font-mono">A-GRADE CERTIFIED</span>
                </div>
                <a 
                  href="#blueprint" 
                  onClick={() => triggerToast("System: Loading configuration preset into final order module...")}
                  className="w-full bg-[#f5f5f7] text-[#0d0d0e] hover:bg-purple-500 hover:text-white transition-all text-xs font-bold py-2.5 rounded text-center block uppercase tracking-wider"
                >
                  LOAD INTO BLUEPRINT
                </a>
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 3: RECREATING AND EXPANDING THE WHITE BLOCK "WE CREATE CLOTHING THAT MOVES WITH MAN" */}
        <section id="formats" className="space-y-6 pt-12">
          
          {/* Aesthetic White Card - Replicating original's middle card visual language */}
          <div className="bg-[#fcfcfd] text-[#0d0d0e] rounded-3xl border border-neutral-200 p-6 sm:p-10 relative overflow-hidden">
            
            {/* Header / Meta row */}
            <div className="flex justify-between items-start text-[10px] text-neutral-500 font-mono tracking-widest border-b border-neutral-200 pb-6">
              <div>
                <span>NPS® DIGITAL WARDROBE LAB</span>
                <span className="block mt-0.5 text-purple-600">FCC ID: VX-774092</span>
              </div>
              <div className="text-right">
                <span>PROJECT PHASE 04</span>
                <span className="block mt-0.5 font-bold">→ 2026(V) // AUTONOMOUS</span>
              </div>
            </div>

            {/* Massive Russian Inspired Wide Typography Header from Original */}
            <div className="my-10 space-y-4">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none">
                МЫ СОЗДАЁМ ОДЕЖДУ, <br />
                <span className="text-neutral-500 font-normal italic">КОТОРАЯ ДВИГАЕТСЯ</span> <br />
                ВМЕСТЕ С ЧЕЛОВЕКОМ.
              </h2>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="px-3 py-1 bg-neutral-200/80 rounded text-[11px] font-mono text-neutral-700">Основан в Москве в 2023 году</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                <span className="text-xs font-bold text-neutral-600 uppercase">Modern Base with Character / БАЗА + СКУЧНО</span>
              </div>
            </div>

            {/* Segment: Interactive Store Formats Tabs & Preview Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-neutral-200">
              
              {/* Selector Tabs (Left) */}
              <div className="lg:col-span-4 space-y-4">
                <span className="text-[10px] text-neutral-500 font-mono block uppercase">FORMATS / ФОРМАТ МАГАЗИНОВ</span>
                
                <div className="space-y-2">
                  {[
                    { id: 'pop-ups', label: 'POP-UP STORES', desc: 'Temporary physical points of high visual impact.' },
                    { id: 'showrooms', label: 'DIGITAL SHOWROOMS', desc: 'Hybrid fitting rooms powered by zero-inventory systems.' },
                    { id: 'online', label: 'ONLINE PLATFORM', desc: 'Instant drops triggered by user community votes.' },
                  ].map((format) => (
                    <button
                      key={format.id}
                      onClick={() => {
                        setActiveFormat(format.id);
                        triggerToast(`STORE FORMAT: Switched view to ${format.label}`);
                      }}
                      className={`w-full text-left p-4 rounded-xl transition-all border ${
                        activeFormat === format.id 
                          ? 'bg-neutral-100 border-[#0d0d0e] text-[#0d0d0e] shadow-md scale-[1.02]' 
                          : 'bg-transparent border-neutral-200 text-neutral-500 hover:text-black hover:border-neutral-300'
                      }`}
                    >
                      <span className="text-xs font-black block uppercase tracking-wider">{format.label}</span>
                      <span className="text-[11px] block mt-1 font-sans leading-normal">{format.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Live Stats changing based on selected Format */}
              <div className="lg:col-span-8 bg-neutral-100/80 rounded-2xl p-6 flex flex-col justify-between border border-neutral-200">
                
                <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      {activeFormat === 'pop-ups' ? 'POP-UP METRICS' : activeFormat === 'showrooms' ? 'SHOWROOM SPECS' : 'ONLINE HUB METRICS'}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono">SYS_STABILITY // SECURE</span>
                </div>

                {/* Stat Grid matching aesthetic from image (e.g., 300+, 86%, 10k+) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6">
                  
                  <div className="bg-white p-4 rounded-xl border border-neutral-200">
                    <span className="text-4xl font-black block text-[#0d0d0e]">
                      {activeFormat === 'pop-ups' ? '300+' : activeFormat === 'showrooms' ? '140+' : '1,800+'}
                    </span>
                    <span className="text-[10px] text-neutral-500 block uppercase font-mono mt-1">
                      {activeFormat === 'pop-ups' ? 'orders without ads' : activeFormat === 'showrooms' ? 'interactive booths' : 'concurrent voters'}
                    </span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-neutral-200">
                    <span className="text-4xl font-black block text-[#0d0d0e]">
                      {activeFormat === 'pop-ups' ? '86%' : activeFormat === 'showrooms' ? '94%' : '98.2%'}
                    </span>
                    <span className="text-[10px] text-neutral-500 block uppercase font-mono mt-1">
                      {activeFormat === 'pop-ups' ? 'repeated purchases' : activeFormat === 'showrooms' ? 'satisfaction rating' : 'uptime percentage'}
                    </span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-neutral-200">
                    <span className="text-4xl font-black block text-[#0d0d0e]">
                      {activeFormat === 'pop-ups' ? '10K+' : activeFormat === 'showrooms' ? '45K+' : '250K+'}
                    </span>
                    <span className="text-[10px] text-neutral-500 block uppercase font-mono mt-1">
                      {activeFormat === 'pop-ups' ? 'followers in 2 months' : activeFormat === 'showrooms' ? 'active digital fits' : 'monthly web visitors'}
                    </span>
                  </div>

                </div>

                {/* Simulated interactive interactive graphic of selected store */}
                <div className="bg-white rounded-xl p-4 border border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-neutral-100 rounded-lg">
                      <Layers3 className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block text-neutral-900">
                        {activeFormat === 'pop-ups' ? 'Micro-Capsule Assembly' : activeFormat === 'showrooms' ? 'Holographic Projection Rack' : 'Decentralized Smart Inventory'}
                      </span>
                      <span className="text-[10px] text-neutral-500 block">
                        {activeFormat === 'pop-ups' ? 'Fast deployment within 4 hours.' : activeFormat === 'showrooms' ? 'Zero fabric waste concept model.' : 'Worldwide real-time direct delivery.'}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => triggerToast(`SIMULATION: Initiated projection of ${activeFormat.toUpperCase()}`)}
                    className="px-3 py-1.5 bg-[#0d0d0e] hover:bg-purple-600 text-white rounded text-xs transition-colors uppercase font-mono"
                  >
                    DEPLOY SIM
                  </button>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* SECTION 4: THE LAUNCH SYSTEM (ЗАПУСК ПОД КЛЮЧ) - Interactive Steps Timeline */}
        <section id="turnkey" className="space-y-6 pt-12">
          
          <div className="border-l-4 border-purple-500 pl-4 flex justify-between items-end">
            <div>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">MODULE // 03</span>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">TURNKEY BRAND LAUNCH / ЗАПУСК ПОД КЛЮЧ</h2>
            </div>
            <span className="hidden sm:inline-block text-xs text-neutral-500 font-mono">002 FUTURE™ SPEC</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive Timeline Controls (Left Column) */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="bg-[#151517] rounded-2xl border border-neutral-800 p-6 space-y-6">
                
                <div className="space-y-1">
                  <span className="text-xs text-purple-400 font-mono block uppercase">Interactive Roadmap Tracker</span>
                  <p className="text-xs text-neutral-400 font-sans">
                    Click each milestone of the UNPOSE turnkey development model to preview delivery assets, documentation, and tools.
                  </p>
                </div>

                {/* Timeline Steps */}
                <div className="space-y-3 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-neutral-800">
                  {[
                    { step: 1, title: 'ГОТОВЫЙ АССОРТИМЕНТ', sub: 'Complete Ready Assortment', desc: 'Pre-designed high-fidelity hybrid physical garments ready for instant production output.' },
                    { step: 2, title: 'МАРКЕТИНГОВАЯ ПОДДЕРЖКА', sub: 'Marketing & Brand Engine', desc: 'Complete social asset kits, 3D renderings, and high-convert social visual packs.' },
                    { step: 3, title: 'ЕЖЕМЕСЯЧНЫЕ КОНСУЛЬТАЦИИ', sub: 'Monthly Direct Consultations', desc: 'Direct technical support from expert physical materials engineers and marketing team.' },
                    { step: 4, title: 'МИНИМИЗАЦИЯ РИСКОВ', sub: 'Risk Mitigation Protocols', desc: 'Strict production cap checks and automated community-tested retail drops.' },
                  ].map((node) => (
                    <div 
                      key={node.step}
                      onClick={() => setActiveStep(node.step)}
                      className={`relative pl-12 p-3 rounded-xl cursor-pointer transition-all border ${
                        activeStep === node.step 
                          ? 'bg-neutral-900 border-purple-500 shadow-md scale-[1.01]' 
                          : 'bg-transparent border-transparent hover:bg-neutral-900/40 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {/* Interactive Step Badge */}
                      <div className={`absolute left-3 top-3.5 w-6 h-6 rounded-full border flex items-center justify-center text-xs font-mono transition-all z-10 ${
                        activeStep === node.step 
                          ? 'bg-purple-500 text-white border-purple-400 scale-110 shadow-lg shadow-purple-500/20' 
                          : 'bg-[#151517] text-neutral-500 border-neutral-700'
                      }`}>
                        0{node.step}
                      </div>

                      <div className="space-y-0.5">
                        <h4 className="text-xs font-bold uppercase text-[#f5f5f7] tracking-wider">{node.title}</h4>
                        <span className="text-[10px] text-neutral-500 block font-mono">{node.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Dynamic Step Display Panel (Right Column) */}
            <div className="lg:col-span-7 bg-[#18181a] rounded-2xl border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between min-h-[460px] relative overflow-hidden group">
              
              {/* Dynamic subtle accent background matching step */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/15 transition-all pointer-events-none" />

              <div className="space-y-6 relative z-10">
                
                {/* Meta details */}
                <div className="flex justify-between items-center border-b border-neutral-800 pb-4 text-[10px] text-neutral-500 font-mono">
                  <span>UNPOSE TURNKEY SYSTEM / 0{activeStep}</span>
                  <span className="text-purple-400">STATUS: ACTIVE COMPONENT</span>
                </div>

                {/* Large Title and details dynamically updating */}
                <div className="space-y-3">
                  <span className="text-xs text-neutral-400 font-mono block">DEVELOPMENT TRACK / PHASE 0{activeStep}</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    {activeStep === 1 && 'READY ASSORTMENT / ГОТОВЫЙ АССОРТИМЕНТ'}
                    {activeStep === 2 && 'MARKETING SUPPORT / МАРКЕТИНГОВАЯ ПОДДЕРЖКА'}
                    {activeStep === 3 && 'MONTHLY CONSULTATIONS / ЕЖЕМЕСЯЧНЫЕ КОНСУЛЬТАЦИИ'}
                    {activeStep === 4 && 'RISK MITIGATION / МИНИМИЗАЦИЯ РИСКОВ'}
                  </h3>
                  <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                    {activeStep === 1 && 'Get immediate access to over 32+ high-fidelity futuristic garment designs. Each asset is pre-mapped for production, featuring parametric adjustment systems and high-comfort materials tested in severe climates.'}
                    {activeStep === 2 && 'Our automated marketing machine supplies high-converting promotional videos, complete social media kits, interactive 3D configurators for Instagram/TikTok embedding, and pre-packaged creator outreach templates.'}
                    {activeStep === 3 && 'Access direct consultation hours with our lead designers and physical supply chain experts. We hold monthly virtual reviews to optimize your custom brand drops, analyze fit feedback, and tweak material parameters.'}
                    {activeStep === 4 && 'Dramatically lower investment thresholds. By deploying our zero-inventory digital show racks, you bypass warehousing constraints. Community-backed voting models test demand before any material gets physically cut.'}
                  </p>
                </div>

                {/* Sub-Items Checklist tailored for the active step */}
                <div className="space-y-2 bg-black/40 border border-neutral-800 rounded-xl p-4">
                  <span className="text-[10px] text-purple-400 font-mono uppercase tracking-widest block mb-2">DELIVERED TOKENS & TOOLS:</span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {activeStep === 1 && (
                      <>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>3D Asset Files (OBJ, GLTF)</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Technical Material Spec Sheet</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Production Pattern Drafts</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Integrated Fitting App Code</span>
                        </div>
                      </>
                    )}
                    {activeStep === 2 && (
                      <>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>TikTok Spark Video Pack</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Pre-Configured Ads Manager Templates</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Interactive IG Filter Files</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Creator Outreach Kit</span>
                        </div>
                      </>
                    )}
                    {activeStep === 3 && (
                      <>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>2x Dedicated 1-on-1 Strategy Hours</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Live Fitting Material Testing</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Discord Developer Room Pass</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Quarterly Asset Upgrades</span>
                        </div>
                      </>
                    )}
                    {activeStep === 4 && (
                      <>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Instant Refund Guarantee Pool</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Autonomous Overstock Protection</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Decentralized Escrow Contract</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Pre-Launch User Voting Portal</span>
                        </div>
                      </>
                    )}
                  </div>

                </div>

              </div>

              {/* Dynamic bottom action block */}
              <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
                <div className="text-xs">
                  <span className="text-neutral-500 block">ESTIMATED SYSTEM DEPLOYMENT</span>
                  <span className="text-[#f5f5f7] font-bold">Within 7 Business Days</span>
                </div>
                <button 
                  onClick={() => {
                    triggerToast(`SYSTEM: Activated priority blueprint tracking for step 0${activeStep}`);
                  }}
                  className="bg-[#f5f5f7] hover:bg-purple-600 hover:text-white text-[#0d0d0e] text-xs font-bold px-4 py-2 rounded transition-colors uppercase"
                >
                  PREVIEW STAGE 0{activeStep} ASSETS
                </button>
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 5: DYNAMIC CUSTOM LAUNCHER & BLUEPRINT CREATOR (REAL PRODUCT PURPOSE) */}
        <section id="blueprint" className="space-y-6 pt-12">
          
          <div className="border-l-4 border-purple-500 pl-4">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">MODULE // 04</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">BRAND BLUEPRINT & LAUNCH ESTIMATOR</h2>
            <p className="text-neutral-400 text-sm max-w-2xl font-sans mt-1">
              Select your turnkey setup variables, toggle structural components, and calculate live launching prices automatically.
            </p>
          </div>

          <div className="bg-[#18181a] rounded-3xl border border-neutral-800 p-6 sm:p-8">
            
            <form onSubmit={submitBrandLauncher} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Form Input Side */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* 1. Launch Tier Segment */}
                <div className="space-y-3">
                  <label className="text-xs text-neutral-400 font-mono block uppercase">SELECT YOUR SYSTEM TIER</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    
                    <div 
                      onClick={() => {
                        setLaunchTier('essential');
                        triggerToast("TIER: Essential selected.");
                      }}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        launchTier === 'essential' 
                          ? 'bg-[#151517] border-purple-500 shadow-md' 
                          : 'bg-black/20 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-bold block text-white">01 // ESSENTIAL</span>
                      <span className="text-[10px] text-neutral-500 block mt-1 font-mono">Starter Digital Pack</span>
                      <div className="mt-4 flex justify-between items-baseline">
                        <span className="text-xl font-black text-white">$4,500</span>
                        <span className="text-[9px] text-neutral-500">ONE-TIME</span>
                      </div>
                    </div>

                    <div 
                      onClick={() => {
                        setLaunchTier('premium');
                        triggerToast("TIER: Premium selected.");
                      }}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        launchTier === 'premium' 
                          ? 'bg-[#151517] border-purple-500 shadow-md' 
                          : 'bg-black/20 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-bold block text-purple-400">02 // PREMIUM</span>
                      <span className="text-[10px] text-neutral-500 block mt-1 font-mono">Full Physical Drops</span>
                      <div className="mt-4 flex justify-between items-baseline">
                        <span className="text-xl font-black text-purple-400">$8,500</span>
                        <span className="text-[9px] text-purple-400">BEST VALUE</span>
                      </div>
                    </div>

                    <div 
                      onClick={() => {
                        setLaunchTier('enterprise');
                        triggerToast("TIER: Enterprise selected.");
                      }}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        launchTier === 'enterprise' 
                          ? 'bg-[#151517] border-purple-500 shadow-md' 
                          : 'bg-black/20 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-bold block text-white">03 // ENTERPRISE</span>
                      <span className="text-[10px] text-neutral-500 block mt-1 font-mono">Custom Tech Integrations</span>
                      <div className="mt-4 flex justify-between items-baseline">
                        <span className="text-xl font-black text-white">$14,900</span>
                        <span className="text-[9px] text-neutral-500">INDIVIDUAL</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* 2. Optional Component toggles */}
                <div className="space-y-3">
                  <label className="text-xs text-neutral-400 font-mono block uppercase">ADDITIONAL DESIGN SYSTEM TOKENS</label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    <div 
                      onClick={() => handleFeatureToggle('marketing')}
                      className={`p-4 rounded-xl border cursor-pointer flex justify-between items-center transition-all ${
                        customFeatures.marketing 
                          ? 'bg-purple-950/20 border-purple-500/50' 
                          : 'bg-black/20 border-neutral-800'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-white">Marketing Support Kit</span>
                        <span className="text-[10px] text-neutral-500 font-mono">+ $950</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                        customFeatures.marketing ? 'bg-purple-500 border-purple-400 text-white' : 'border-neutral-700'
                      }`}>
                        {customFeatures.marketing && '✓'}
                      </div>
                    </div>

                    <div 
                      onClick={() => handleFeatureToggle('consultancy')}
                      className={`p-4 rounded-xl border cursor-pointer flex justify-between items-center transition-all ${
                        customFeatures.consultancy 
                          ? 'bg-purple-950/20 border-purple-500/50' 
                          : 'bg-black/20 border-neutral-800'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-white">Monthly Consultations</span>
                        <span className="text-[10px] text-neutral-500 font-mono">+ $950</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                        customFeatures.consultancy ? 'bg-purple-500 border-purple-400 text-white' : 'border-neutral-700'
                      }`}>
                        {customFeatures.consultancy && '✓'}
                      </div>
                    </div>

                    <div 
                      onClick={() => handleFeatureToggle('teamTraining')}
                      className={`p-4 rounded-xl border cursor-pointer flex justify-between items-center transition-all ${
                        customFeatures.teamTraining 
                          ? 'bg-purple-950/20 border-purple-500/50' 
                          : 'bg-black/20 border-neutral-800'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-white">Staff/Team Onboarding Training</span>
                        <span className="text-[10px] text-neutral-500 font-mono">+ $950</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                        customFeatures.teamTraining ? 'bg-purple-500 border-purple-400 text-white' : 'border-neutral-700'
                      }`}>
                        {customFeatures.teamTraining && '✓'}
                      </div>
                    </div>

                    <div 
                      onClick={() => handleFeatureToggle('analytics')}
                      className={`p-4 rounded-xl border cursor-pointer flex justify-between items-center transition-all ${
                        customFeatures.analytics 
                          ? 'bg-purple-950/20 border-purple-500/50' 
                          : 'bg-black/20 border-neutral-800'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-white">Integrated Analytics Dashboard</span>
                        <span className="text-[10px] text-neutral-500 font-mono">+ $950</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                        customFeatures.analytics ? 'bg-purple-500 border-purple-400 text-white' : 'border-neutral-700'
                      }`}>
                        {customFeatures.analytics && '✓'}
                      </div>
                    </div>

                    <div 
                      onClick={() => handleFeatureToggle('dropRelease')}
                      className={`p-4 rounded-xl border cursor-pointer flex justify-between items-center transition-all ${
                        customFeatures.dropRelease 
                          ? 'bg-purple-950/20 border-purple-500/50' 
                          : 'bg-black/20 border-neutral-800'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-white">Priority Custom Drop Support</span>
                        <span className="text-[10px] text-neutral-500 font-mono">+ $950</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                        customFeatures.dropRelease ? 'bg-purple-500 border-purple-400 text-white' : 'border-neutral-700'
                      }`}>
                        {customFeatures.dropRelease && '✓'}
                      </div>
                    </div>

                  </div>
                </div>

                {/* 3. Text Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-500 font-mono block uppercase">DESIRED BRAND / CODES_NAME</label>
                    <input 
                      type="text" 
                      placeholder="e.g. SYSTEM-X" 
                      required
                      className="w-full bg-black/40 border border-neutral-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-500 font-mono block uppercase">CONTACT TELEGRAM / EMAIL</label>
                    <input 
                      type="text" 
                      placeholder="@ridizain_client" 
                      required
                      className="w-full bg-black/40 border border-neutral-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

              </div>

              {/* Dynamic Summary Block Side (Right Column) */}
              <div className="lg:col-span-4 bg-black/80 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between">
                
                <div className="space-y-4">
                  <div className="border-b border-neutral-800 pb-4">
                    <span className="text-[10px] text-neutral-500 font-mono block uppercase">ORDER SUMMARY</span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">UNPOSE DEPLOYMENT</h3>
                  </div>

                  {/* Summary Breakdown list */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Base System Tier ({launchTier.toUpperCase()}):</span>
                      <span className="text-[#f5f5f7] font-mono">
                        ${launchTier === 'premium' ? '8,500' : launchTier === 'enterprise' ? '14,900' : '4,500'}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-neutral-500">Custom Tokens Added:</span>
                      <span className="text-[#f5f5f7] font-mono">
                        {Object.values(customFeatures).filter(Boolean).length}x
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-neutral-500">System Integration Charge:</span>
                      <span className="text-green-400 font-mono">FREE</span>
                    </div>
                  </div>

                  <div className="border-t border-neutral-800 pt-4 flex justify-between items-baseline">
                    <span className="text-xs text-neutral-400 uppercase">Estimated Total:</span>
                    <span className="text-2xl font-black text-purple-400 font-mono">${calculateEstimate().toLocaleString()}</span>
                  </div>
                </div>

                {/* Launch Submit Button */}
                <div className="mt-6 space-y-3">
                  <button
                    type="submit"
                    disabled={submittingConfig}
                    className="w-full bg-[#f5f5f7] text-[#0d0d0e] hover:bg-purple-600 hover:text-white disabled:opacity-50 transition-all font-bold text-xs py-3 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    {submittingConfig ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>PROCESSING PROTOCOLS...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 fill-current" />
                        <span>INITIALIZE MY SUIT</span>
                      </>
                    )}
                  </button>

                  {configSuccess && (
                    <div className="p-3 bg-green-950/20 border border-green-500/30 rounded-lg text-center">
                      <span className="text-[11px] text-green-400 font-mono block uppercase">SUCCESS // BLUEPRINT INITIALIZED</span>
                      <span className="text-[10px] text-neutral-400 block mt-1">Our team will reach out within 2 hours.</span>
                    </div>
                  )}

                  <span className="block text-[10px] text-neutral-500 text-center font-mono uppercase">
                    SECURED BY CRYPTOGRAPHIC CONTRACTS
                  </span>
                </div>

              </div>

            </form>

          </div>
        </section>


        {/* TESTIMONIALS & TRUST PLATFORM SYSTEM */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          
          <div className="bg-[#151517] rounded-2xl border border-neutral-800 p-6 flex flex-col justify-between relative group">
            <span className="text-4xl text-purple-500/20 font-serif absolute top-4 right-6">“</span>
            <div className="space-y-4">
              <span className="text-[10px] text-purple-400 font-mono block">PARTNER LAB FEEDBACK</span>
              <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                “UNPOSE has completely revolutionized how we drop capsule wardrobes. No stock risks, instant premium 3D models, and incredible response times in physical manufacturing.”
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-neutral-800 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="John K." className="object-cover w-full h-full" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#f5f5f7] block">Arthur S.</span>
                <span className="text-[10px] text-neutral-500 block uppercase font-mono">Founding Director, V-KNOT</span>
              </div>
            </div>
          </div>

          <div className="bg-[#151517] rounded-2xl border border-neutral-800 p-6 flex flex-col justify-between relative group">
            <span className="text-4xl text-purple-500/20 font-serif absolute top-4 right-6">“</span>
            <div className="space-y-4">
              <span className="text-[10px] text-purple-400 font-mono block">RETAIL INTEGRATION METRIC</span>
              <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                “Using the hybrid digital showroom, our physical footprint space requirements dropped by 75% while our repeat purchase score shot up to 86% within just 60 days.”
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-neutral-800 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Sarah L." className="object-cover w-full h-full" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#f5f5f7] block">Ksenia P.</span>
                <span className="text-[10px] text-neutral-500 block uppercase font-mono">Retail Architect, CYBER_WEAR</span>
              </div>
            </div>
          </div>

          <div className="bg-[#151517] rounded-2xl border border-neutral-800 p-6 flex flex-col justify-between relative group">
            <span className="text-4xl text-purple-500/20 font-serif absolute top-4 right-6">“</span>
            <div className="space-y-4">
              <span className="text-[10px] text-purple-400 font-mono block">ENGINEER DESIGN NOTE</span>
              <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                “The design DNA feels incredibly fresh. This isn't another generic brand. It's a precise combination of industrial blueprint layout with high fashion cinematic appeal.”
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-neutral-800 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Michael T." className="object-cover w-full h-full" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#f5f5f7] block">Dmitry Z.</span>
                <span className="text-[10px] text-neutral-500 block uppercase font-mono">3D Technical Artist</span>
              </div>
            </div>
          </div>

        </section>

      </main>

      {/* SYSTEM STATS FOOTER - Fully styled matching the blueprint elements */}
      <footer className="bg-[#0b0b0c] border-t border-neutral-900 mt-24 py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs border-b border-neutral-900 pb-8">
            <div className="space-y-3">
              <span className="text-purple-400 font-mono uppercase block text-[10px] tracking-widest">SYSTEM CHANNELS</span>
              <ul className="space-y-1.5 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-all">Telegram @ridizain</a></li>
                <li><a href="#" className="hover:text-white transition-all">Official Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-all">Vortex Wardrobes</a></li>
                <li><a href="#" className="hover:text-white transition-all">FCC Regulatory</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-neutral-400 font-mono uppercase block text-[10px] tracking-widest">AUTONOMOUS MODULES</span>
              <ul className="space-y-1.5 text-neutral-500">
                <li><a href="#about" className="hover:text-white transition-all">A.LCE Protocol</a></li>
                <li><a href="#simulation" className="hover:text-white transition-all">Interactive 3D Fit</a></li>
                <li><a href="#formats" className="hover:text-white transition-all">Pop-up Assembly</a></li>
                <li><a href="#turnkey" className="hover:text-white transition-all">Turnkey Delivery</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-neutral-400 font-mono uppercase block text-[10px] tracking-widest">BLUEPRINT TECHNICALS</span>
              <ul className="space-y-1.5 text-neutral-500 font-mono text-[10px]">
                <li>NODE: EU_WEST_LONDON</li>
                <li>SYS_LOAD: {systemLoad}%</li>
                <li>SERIAL_NUM: 0092-24XHL9227</li>
                <li>STATUS: {totalOrders.toLocaleString()} ORDERS SECURED</li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-purple-400 font-mono uppercase block text-[10px] tracking-widest">BRAND PRINCIPLES</span>
              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                We believe in zero-inventory local production. Clothing is treated as fluid physical-digital assets configured via the net.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-500 font-mono gap-4">
            <div>
              <span>© {new Date().getFullYear()} UNPOSE SYSTEM®. ALL AUTONOMOUS PRODUCTION RIGHTS RESERVED.</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-purple-400">DESIGN BY @RIDIZAIN</span>
              <span>•</span>
              <span>SECURED CLOUD ENDPOINT</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
5
import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Sun, 
  Droplets, 
  Compass, 
  ChevronRight, 
  X, 
  ArrowRight, 
  Sliders, 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  ArrowUpRight, 
  Info,
  Layers,
  ThermometerSun,
  ShieldAlert,
  ShoppingBag,
  Check,
  User,
  Heart
} from 'lucide-react';

// Premium Curated Plant Database
const PLANT_DATA = [
  {
    id: 'hosta-halcyon',
    name: "Hosta 'Halcyon'",
    scientific: "Hosta tardiana",
    class: "Green Host",
    lightLevel: "Full Shade",
    lightValue: 15, // 0-100 scale from dark to sun
    water: "Keep Moist",
    difficulty: "Beginner",
    height: "15-18 inches",
    origin: "East Asia (Japan/Korea)",
    description: "An exceptionally resilient, blue-green classic hosta with thick, heavily textured heart-shaped leaves. Its dense foliage acts as an architectural carpet for dark under-canopy environments.",
    benefits: ["Air purifying", "High shade adaptability", "Frost resilient"],
    image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'hosta-empress-wu',
    name: "Hosta 'Empress Wu'",
    scientific: "Hosta fortunei hybrid",
    class: "Giant Host",
    lightLevel: "Dappled Shade",
    lightValue: 35,
    water: "Moderate Water",
    difficulty: "Intermediate",
    height: "3-4 feet",
    origin: "Horticultural Selection",
    description: "One of the largest hostas in cultivation, sports colossal dark-green ribbed leaves that span up to two feet wide. Commands absolute attention as a structural specimen in premium landscape design.",
    benefits: ["Enormous canopy", "Hummingbird attractor", "Deep root structure"],
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'calathea-orbifolia',
    name: "Calathea Orbifolia",
    scientific: "Goeppertia orbifolia",
    class: "Prayer Plant",
    lightLevel: "Dappled Shade",
    lightValue: 40,
    water: "High Humidity Needed",
    difficulty: "Advanced",
    height: "2-3 feet",
    origin: "Bolivia",
    description: "An exotic indoor botanical masterpiece featuring wide, round leaves striped with elegant silver-green bands. Its leaves dramatically rise and fall to match diurnal light rhythms.",
    benefits: ["Dynamic circadian movement", "Pet safe", "Exceptional indoor air cleanser"],
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'hosta-guacamole',
    name: "Hosta 'Guacamole'",
    scientific: "Hosta hybrid",
    class: "Variegated Host",
    lightLevel: "Partial Sun",
    lightValue: 60,
    water: "Regular Watering",
    difficulty: "Beginner",
    height: "18-22 inches",
    origin: "North American Cultivar",
    description: "Fascinating chartreuse leaves bordered with rich dark emerald margins. Unlike traditional hostas, the Guacamole thrives in partial sun and sends up exceptionally fragrant lavender blooms in mid-summer.",
    benefits: ["Fragrant blossoms", "Sun tolerance", "Striking bi-color contrast"],
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'adiantum-pedatum',
    name: "Maidenhair Fern",
    scientific: "Adiantum pedatum",
    class: "Understory Fern",
    lightLevel: "Full Shade",
    lightValue: 10,
    water: "Consistently Wet",
    difficulty: "Advanced",
    height: "12-24 inches",
    origin: "North American Forests",
    description: "Features delicate, fan-shaped fronds arranged in elegant semi-circles atop contrasting dark, wiry stems. Elevates raw organic design with its whisper-light, airy aesthetic.",
    benefits: ["Ultra-fine texture", "Therapeutic organic visual", "Thrives in moist corners"],
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'monstera-deliciosa',
    name: "Monstera Deliciosa",
    scientific: "Monstera deliciosa",
    class: "Tropical Climber",
    lightLevel: "Full Sun",
    lightValue: 85,
    water: "Dries between waters",
    difficulty: "Beginner",
    height: "6-10 feet",
    origin: "Mexican Rainforests",
    description: "The iconic split-leaf giant. Its dramatic leaf fenestrations evolved in response to tropical rainstorms, allowing wind and dappled solar rays to pass gracefully through to lower foliage.",
    benefits: ["Striking architecture", "Rapid growth", "Highly resilient"],
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=600"
  }
];

export default function App() {
  // Navigation & Interactive States
  const [heroActiveTab, setHeroActiveTab] = useState('about'); // 'about' | 'types' | 'gallery'
  const [selectedPlant, setSelectedPlant] = useState(null); // Plant object for global modal inspector
  const [simulationLight, setSimulationLight] = useState(35); // 0-100 state for Interactive Light Simulator
  const [favorites, setFavorites] = useState([]);
  const [bookingStatus, setBookingStatus] = useState(null); // 'success' or null
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  // Filter plant database based on Light Simulator value
  const getSimulatedPlants = () => {
    return PLANT_DATA.filter(p => {
      // Find plants within +- 25 units of the current light slider
      return Math.abs(p.lightValue - simulationLight) <= 30;
    });
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setBookingStatus('success');
    setTimeout(() => {
      setBookingStatus(null);
      setContactForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  // Helper to determine light classification text from value
  const getLightCategoryFromValue = (val) => {
    if (val < 25) return "Deep Shade Canopy (Full Shade)";
    if (val < 50) return "Filtered Woodland Canopy (Dappled Shade)";
    if (val < 75) return "Under-Story Break (Partial Sun)";
    return "Open Horizon (Full Sun)";
  };

  return (
    <div className="min-h-screen bg-[#07130b] text-neutral-100 font-sans selection:bg-emerald-800/60 selection:text-emerald-100 overflow-x-hidden relative">
      
      {/* Cinematic Background Foliage Underlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] pointer-events-none mix-blend-luminosity transform scale-105 transition-transform duration-[10000ms] ease-out"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=2000')` }}
      />
      
      {/* Decorative Aurora Ambient Glowing Spheres */}
      <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-emerald-950/25 blur-[120px] pointer-events-none mix-blend-color-dodge animate-pulse duration-10000" />
      <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-900/10 blur-[150px] pointer-events-none mix-blend-color-dodge" />
      <div className="absolute bottom-[5%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-emerald-950/20 blur-[130px] pointer-events-none" />

      {/* Global Glassmorphic Floating Header */}
      <header className="sticky top-0 z-40 w-full bg-[#07130b]/60 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brandmark */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-800 to-emerald-400 p-[1px] shadow-[0_0_15px_rgba(52,211,153,0.15)] group-hover:shadow-[0_0_25px_rgba(52,211,153,0.3)] transition-all duration-500">
              <div className="w-full h-full bg-[#07130b]/90 rounded-[11px] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-400 transform group-hover:rotate-12 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.25em] text-white uppercase group-hover:text-emerald-300 transition-colors">PHYLLO</span>
              <span className="text-[9px] tracking-wider text-neutral-400">BOTANICAL STUDIO</span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-xs font-medium tracking-widest text-neutral-300 hover:text-white uppercase transition-colors">About</a>
            <a href="#simulator" className="text-xs font-medium tracking-widest text-neutral-300 hover:text-white uppercase transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Light Lab
            </a>
            <a href="#registry" className="text-xs font-medium tracking-widest text-neutral-300 hover:text-white uppercase transition-colors">Registry</a>
            <a href="#curations" className="text-xs font-medium tracking-widest text-neutral-300 hover:text-white uppercase transition-colors">Subscriptions</a>
            <a href="#faqs" className="text-xs font-medium tracking-widest text-neutral-300 hover:text-white uppercase transition-colors">Insights</a>
          </nav>

          {/* Interactive Action Bar */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs font-semibold tracking-wider text-neutral-200 hover:bg-white hover:text-[#07130b] hover:border-white transition-all duration-300"
            >
              Enquire
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button 
              onClick={() => document.getElementById('registry').scrollIntoView({ behavior: 'smooth' })} 
              className="bg-emerald-400/90 hover:bg-emerald-300 text-neutral-950 font-bold px-5 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(52,211,153,0.2)] hover:shadow-[0_4px_30px_rgba(52,211,153,0.4)] hover:scale-105 active:scale-95"
            >
              Explore Sanctuary
            </button>
          </div>

        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">

        {/* SECTION 1: THE INSPIRED HERO EXPERIENCE (CLOSE TO 90% SIMILAR VISUAL DNA) */}
        <section id="about" className="pt-4 pb-20">
          
          {/* Breadcrumb Info Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] tracking-[0.2em] uppercase text-emerald-400">
              <Sparkles className="w-3 h-3 animate-spin duration-[6000ms]" /> Crafted Architectural Flora
            </span>
          </div>

          {/* MAIN HERO CONTAINER (Modeled exactly like the upload image) */}
          <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.6)] group">
            
            {/* Base Image Backdrop (Blur and leaf layers to simulate the deep leaf context) */}
            <div className="absolute inset-0 bg-cover bg-center transform scale-100 group-hover:scale-105 transition-transform duration-[8000ms] ease-out filter brightness-[0.25]"
                 style={{ backgroundImage: `url('https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=1500')` }} />
            
            {/* The Floating Translucent Glassmorphic Panel Container */}
            <div className="relative z-10 w-full p-6 sm:p-10 md:p-12 lg:p-14 bg-[#142d1b]/45 backdrop-blur-[24px] border border-white/[0.08] rounded-3xl transition-all duration-500">
              
              {/* Header inside the glass */}
              <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-8 md:mb-12">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-[3px]">
                    <span className="w-5 h-[1.5px] bg-white/70" />
                    <span className="w-5 h-[1.5px] bg-white/70" />
                    <span className="w-3 h-[1.5px] bg-white/70" />
                  </div>
                  <span className="text-[10px] md:text-xs tracking-[0.3em] font-semibold text-white/90 uppercase">
                    ABOUT LIFE AND PLANTS
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] tracking-widest uppercase text-white/60">LIVE CANOPY FEED</span>
                </div>
              </div>

              {/* Central Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                
                {/* Left side: Premium organic frame with actual leaf imagery */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group/leaf">
                    <img 
                      src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800" 
                      alt="Hosta Leaf Anatomy" 
                      className="w-full h-full object-cover transform scale-100 group-hover/leaf:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Anatomical Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-[#07130b]/85 backdrop-blur-md p-3 rounded-xl border border-white/10 transform translate-y-1 group-hover/leaf:translate-y-0 transition-transform duration-500">
                      <p className="text-[9px] tracking-widest text-emerald-400 uppercase font-semibold">Anatomy of Flora</p>
                      <h4 className="text-[11px] font-bold text-white mt-0.5">Striated Deep-Rib Ribbing</h4>
                    </div>
                  </div>
                </div>

                {/* Right side: Cinematic bold texts & Interactive dynamic content tabs */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left">
                  
                  {/* Enjoy Nature Main Heading with exact font weight emphasis */}
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-none">
                    Enjoy <br />
                    <span className="text-emerald-100/90 font-medium">Nature</span>
                  </h1>

                  {/* Dynamic Interactive States inside the Hero panel */}
                  <div className="min-h-[140px] transition-all duration-300">
                    {heroActiveTab === 'about' && (
                      <div className="animate-fade-in">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg md:text-xl font-light tracking-wide text-neutral-100">Green hosts</h3>
                          <div className="flex-grow h-[1px] bg-white/20" />
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-neutral-300 font-light max-w-lg">
                          Hosta is an extremely resilient plant that can survive in a variety of conditions, from full shade to full sun. In some countries, such as Japan and Korea, young hosta leaves are harvested and used for food.
                        </p>
                      </div>
                    )}

                    {heroActiveTab === 'types' && (
                      <div className="animate-fade-in">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg md:text-xl font-light tracking-wide text-neutral-100">Species Versatility</h3>
                          <div className="flex-grow h-[1px] bg-white/20" />
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-neutral-300 font-light max-w-lg">
                          From the dense blue-gray of 'Halcyon' to the massive lime-green leaves of 'Empress Wu', hostas present an unmatched architecture of shade-loving foliage. Perfect for low-light garden levels and architectural ground cover.
                        </p>
                      </div>
                    )}

                    {heroActiveTab === 'gallery' && (
                      <div className="animate-fade-in">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg md:text-xl font-light tracking-wide text-neutral-100">Botanical Sanctuaries</h3>
                          <div className="flex-grow h-[1px] bg-white/20" />
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-neutral-300 font-light max-w-lg">
                          Experience nature in curated spatial designs. Our galleries exhibit beautiful integrations of lush microclimates within minimalist concrete estates, dark wood interiors, and sleek modern offices.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bottom Navigation Row matching the visual layout exactly */}
                  <div className="flex flex-wrap items-center gap-4 mt-8 md:mt-12 pt-6 border-t border-white/5">
                    <button 
                      onClick={() => {
                        setHeroActiveTab('about');
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs tracking-wider text-neutral-400 hover:text-white transition-colors duration-300 focus:outline-none"
                    >
                      Connect with nature
                    </button>
                    
                    <div className="flex items-center gap-2">
                      {/* Outlined button */}
                      <button 
                        onClick={() => setHeroActiveTab('types')}
                        className={`px-5 py-2.5 rounded-full border text-xs tracking-wider transition-all duration-300 uppercase ${
                          heroActiveTab === 'types' 
                            ? 'bg-white/10 text-white border-white' 
                            : 'bg-transparent text-neutral-300 border-white/20 hover:border-white/50'
                        }`}
                      >
                        types of host
                      </button>
                      
                      {/* Solid light button */}
                      <button 
                        onClick={() => setHeroActiveTab('gallery')}
                        className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                          heroActiveTab === 'gallery'
                            ? 'bg-emerald-400 text-[#07130b] scale-105'
                            : 'bg-[#e3ede5] text-[#07130b] hover:bg-white hover:shadow-[0_4px_15px_rgba(255,255,255,0.1)]'
                        }`}
                      >
                        Gallery
                      </button>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* BRANDS & PHILOSOPHY STRIP */}
        <section className="py-12 border-t border-b border-white/5 my-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-light text-white tracking-wide">98%</p>
              <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase mt-1">Shade Adaptability Rate</p>
            </div>
            <div>
              <p className="text-3xl font-light text-white tracking-wide">120+</p>
              <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase mt-1">Curated Rare Species</p>
            </div>
            <div>
              <p className="text-3xl font-light text-white tracking-wide">6m+</p>
              <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase mt-1">Gallons of Air Filtered</p>
            </div>
            <div>
              <p className="text-3xl font-light text-white tracking-wide">Elite</p>
              <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase mt-1">Architectural Rating</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: INTERACTIVE LIGHT LAB SIMULATOR (DYNAMICS IN PLAY) */}
        <section id="simulator" className="py-16">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] tracking-[0.3em] text-emerald-400 font-semibold uppercase">ECOSYSTEM TECHNOLOGY</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">The Atmospheric Light Simulator</h2>
            <p className="text-neutral-400 text-sm mt-3 font-light leading-relaxed">
              Drag the solar slider below to transition light variables from absolute darkness (0%) to intense open canopy exposure (100%). Observe how native biology filters dynamically to match the exact light recipe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive Control Deck */}
            <div className="lg:col-span-4 bg-[#142d1b]/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-semibold tracking-widest text-white uppercase">Control Console</h3>
                </div>

                {/* Simulated Environment Readout */}
                <div className="bg-black/35 rounded-xl p-5 border border-white/[0.03] mb-8">
                  <p className="text-[10px] tracking-wider text-neutral-500 uppercase">Simulated Microclimate</p>
                  <p className="text-base font-medium text-white mt-1">
                    {getLightCategoryFromValue(simulationLight)}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-2xl font-bold text-emerald-300">{simulationLight}%</span>
                    <span className="text-xs text-neutral-400">Total Solar Exposure Index</span>
                  </div>
                </div>

                {/* The Custom Slider Range */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-400 flex items-center gap-1"><Compass className="w-3.5 h-3.5" /> Full Shade</span>
                    <span className="text-amber-400 flex items-center gap-1"><Sun className="w-3.5 h-3.5 animate-pulse" /> Direct Sun</span>
                  </div>

                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={simulationLight} 
                    onChange={(e) => setSimulationLight(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-neutral-800 accent-emerald-400 focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 uppercase font-mono px-1">
                    <span>0% (Forest floor)</span>
                    <span>50%</span>
                    <span>100% (High plateau)</span>
                  </div>
                </div>
              </div>

              {/* Reactive Micro Guidance Card */}
              <div className="mt-8 pt-6 border-t border-white/5 text-xs text-neutral-400 flex items-start gap-3">
                <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {simulationLight < 30 ? (
                    "Deep shade creates larger surface area expansion. Plants in this range prioritize chlorophyll-b development, rendering dark blue-green and frosted patterns."
                  ) : simulationLight < 70 ? (
                    "Dappled and partial exposure supports intense structural variation and variegated outer margins to prevent foliage burn while maximizing solar capture."
                  ) : (
                    "High exposure triggers natural structural thickness, wax secretions, and rapid water circulation systems to preserve cellular hydration levels."
                  )}
                </p>
              </div>

            </div>

            {/* Simulated Live Adaptive Output */}
            <div className="lg:col-span-8 bg-[#142d1b]/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between relative overflow-hidden">
              
              {/* Dynamic lighting overlay responding to the slider */}
              <div 
                className="absolute inset-0 pointer-events-none transition-all duration-700 mix-blend-color-dodge opacity-30" 
                style={{
                  background: `radial-gradient(circle at ${simulationLight}%, rgba(251, 191, 36, 0.2) 0%, transparent 60%)`
                }}
              />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold tracking-widest text-white uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Adaptive Cohort ({getSimulatedPlants().length} Species Matched)
                  </h3>
                  <span className="text-[10px] bg-white/5 px-2.5 py-1 rounded border border-white/10 text-neutral-400 font-mono">
                    Tol: ±30% Limit
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {getSimulatedPlants().map(plant => (
                    <div 
                      key={plant.id}
                      onClick={() => setSelectedPlant(plant)}
                      className="group/pcard bg-black/40 hover:bg-[#142d1b]/50 border border-white/5 hover:border-emerald-500/20 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 flex gap-4"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-neutral-800">
                        <img src={plant.image} alt={plant.name} className="w-full h-full object-cover group-hover/pcard:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-neutral-100 group-hover/pcard:text-emerald-300 transition-colors">{plant.name}</h4>
                          <p className="text-[10px] italic text-neutral-400 font-serif mt-0.5">{plant.scientific}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[9px] bg-white/5 px-2 py-0.5 rounded text-neutral-300 font-sans tracking-wider">
                            {plant.lightLevel}
                          </span>
                          <span className="text-[9px] text-emerald-400 font-semibold">{plant.lightValue}% Solar</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Call to Action */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-neutral-400">
                  Click any micro-card to inspect cell details, origin maps, and bespoke care specs.
                </p>
                <button 
                  onClick={() => document.getElementById('registry').scrollIntoView({ behavior: 'smooth' })} 
                  className="flex items-center gap-2 text-xs text-emerald-300 hover:text-white font-semibold group/btn"
                >
                  View Complete Registry 
                  <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </section>

        {/* SECTION 3: THE COMPREHENSIVE REGISTRY (HIGH-END DESIGN GRID) */}
        <section id="registry" className="py-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-emerald-400 font-semibold uppercase">EXCLUSIVE REGISTRY</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">Rare Botanical Species</h2>
              <p className="text-neutral-400 text-sm mt-2 max-w-xl font-light">
                Explore our select species repository. Each specimen is expertly cultured, acclimatized for modern structural environments, and packaged with premium physiological monitoring.
              </p>
            </div>
            
            {/* Filter Legend */}
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] bg-white/[0.02] border border-white/10 px-3 py-1.5 rounded-full text-neutral-400">
                Total Collection: {PLANT_DATA.length} Species
              </span>
              <span className="text-[10px] bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-full text-emerald-300 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Multi-Generational Cultivars
              </span>
            </div>
          </div>

          {/* Plant Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLANT_DATA.map(plant => {
              const isFav = favorites.includes(plant.id);
              return (
                <div 
                  key={plant.id}
                  className="group bg-[#142d1b]/15 hover:bg-[#142d1b]/30 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col justify-between"
                >
                  
                  {/* Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-800 border-b border-white/5">
                    <img 
                      src={plant.image} 
                      alt={plant.name} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[4000ms] ease-out" 
                    />
                    
                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07130b] via-transparent to-transparent opacity-60" />
                    
                    {/* Favorite Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(plant.id);
                      }}
                      className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/55 backdrop-blur-md flex items-center justify-center border border-white/10 text-white hover:text-rose-400 hover:scale-110 active:scale-95 transition-all"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>

                    {/* Scientific Name Overlay */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] tracking-wider text-emerald-400 font-mono uppercase bg-black/40 px-2 py-0.5 rounded border border-white/5">
                        {plant.class}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">{plant.name}</h3>
                        <span className="text-xs text-neutral-400 italic shrink-0 mt-1 font-serif">{plant.scientific}</span>
                      </div>
                      
                      <p className="text-xs text-neutral-400 font-light leading-relaxed mt-3 line-clamp-3">
                        {plant.description}
                      </p>

                      {/* Meta stats */}
                      <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/5 text-[11px]">
                        <div className="flex items-center gap-1.5 text-neutral-400">
                          <Sun className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{plant.lightLevel}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-neutral-400">
                          <Droplets className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{plant.water}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action button inside card */}
                    <div className="mt-6 flex gap-2">
                      <button 
                        onClick={() => setSelectedPlant(plant)}
                        className="flex-grow bg-white/5 hover:bg-white/10 text-xs font-semibold tracking-wider text-white py-2.5 rounded-lg border border-white/10 transition-all duration-300"
                      >
                        Inspect Species
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedPlant(plant);
                          setTimeout(() => {
                            const configElement = document.getElementById('inspect-care-console');
                            if (configElement) configElement.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        }}
                        className="w-10 h-10 rounded-lg bg-emerald-400/90 hover:bg-emerald-300 text-neutral-950 flex items-center justify-center transition-colors"
                        title="Acquire specimen details"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </section>

        {/* SECTION 4: BOTANICAL SUBSCRIBED SERVICES (CURATIONS / SERVICES) */}
        <section id="curations" className="py-16 bg-[#142d1b]/10 backdrop-blur-md rounded-3xl p-8 border border-white/5 my-12">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] tracking-[0.3em] text-emerald-400 font-semibold uppercase">PREMIUM SUBSCRIPTION</span>
            <h2 className="text-3xl font-bold text-white mt-1">Sanctuary Curator Program</h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-light">
              Transform your workspace or residential architecture. Our monthly curation plans handle plant selection, premium glassmorphic potting, microclimatic placement, and live advisory support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Plan 1 */}
            <div className="bg-black/40 rounded-2xl p-6 border border-white/5 flex flex-col justify-between hover:border-emerald-800 transition-all duration-300 group">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Level I</span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">The Seedling</h3>
                <p className="text-xs text-neutral-500 mt-2">Bespoke starter microclimates for minimal desks or interior shelves.</p>
                
                <div className="my-6">
                  <span className="text-3xl font-bold text-white">$45</span>
                  <span className="text-neutral-500 text-xs"> / Month</span>
                </div>

                <ul className="space-y-3 border-t border-white/5 pt-6 text-xs text-neutral-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>2 Curated Shade-tolerant plants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Translucent modern grow containers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Quarterly soil renewal packs</span>
                  </li>
                </ul>
              </div>
              
              <button 
                onClick={() => {
                  setContactForm({ ...contactForm, message: "Interested in 'The Seedling' subscription level." });
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }} 
                className="mt-8 w-full py-2.5 rounded-lg border border-white/10 hover:border-white hover:bg-white hover:text-[#07130b] text-xs font-semibold tracking-wider text-neutral-300 transition-all duration-300"
              >
                Enroll In Plan
              </button>
            </div>

            {/* Plan 2 - Featured */}
            <div className="bg-emerald-950/30 rounded-2xl p-6 border border-emerald-500/20 flex flex-col justify-between relative transform scale-105 shadow-[0_10px_40px_rgba(16,185,129,0.05)] group">
              <span className="absolute top-4 right-4 bg-emerald-400/20 text-emerald-300 text-[9px] tracking-widest uppercase font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                Most Selected
              </span>
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-emerald-400 font-semibold">Level II</span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-emerald-200 transition-colors">The Conservatory</h3>
                <p className="text-xs text-neutral-400 mt-2">Expansive flora architecture designed for large living zones or creative agencies.</p>
                
                <div className="my-6">
                  <span className="text-3xl font-bold text-emerald-300">$120</span>
                  <span className="text-neutral-500 text-xs"> / Month</span>
                </div>

                <ul className="space-y-3 border-t border-emerald-800/40 pt-6 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>5 Rare architectural plants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tactile hand-built concrete/clay pots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Bi-monthly organic nutrient kits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>24/7 Digital horticulturalist chat</span>
                  </li>
                </ul>
              </div>
              
              <button 
                onClick={() => {
                  setContactForm({ ...contactForm, message: "Interested in 'The Conservatory' subscription level." });
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }} 
                className="mt-8 w-full py-2.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-[#07130b] text-xs font-bold tracking-wider uppercase transition-all duration-300"
              >
                Enroll In Plan
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-black/40 rounded-2xl p-6 border border-white/5 flex flex-col justify-between hover:border-emerald-800 transition-all duration-300 group">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Level III</span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">Botanical Sanctuary</h3>
                <p className="text-xs text-neutral-500 mt-2">Complete structural garden layout setup with ongoing physically-managed care.</p>
                
                <div className="my-6">
                  <span className="text-3xl font-bold text-white">$350</span>
                  <span className="text-neutral-500 text-xs"> / Month</span>
                </div>

                <ul className="space-y-3 border-t border-white/5 pt-6 text-xs text-neutral-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Custom bespoke plant architecture consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Bi-weekly professional in-person curator maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Unlimited seasonal specimen rotation</span>
                  </li>
                </ul>
              </div>
              
              <button 
                onClick={() => {
                  setContactForm({ ...contactForm, message: "Interested in the 'Botanical Sanctuary' complete tier." });
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }} 
                className="mt-8 w-full py-2.5 rounded-lg border border-white/10 hover:border-white hover:bg-white hover:text-[#07130b] text-xs font-semibold tracking-wider text-neutral-300 transition-all duration-300"
              >
                Enroll In Plan
              </button>
            </div>

          </div>

        </section>

        {/* SECTION 5: FAQS Accordion */}
        <section id="faqs" className="py-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] tracking-[0.3em] text-emerald-400 font-semibold uppercase">FAQ</span>
            <h2 className="text-3xl font-bold text-white mt-1">Botanical Insights</h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-2 font-light">
              Curating architectural plants is both a science and an art form. Review our primary research answers for flawless integration.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            
            <div className="bg-[#142d1b]/10 backdrop-blur-md rounded-xl p-6 border border-white/5">
              <h4 className="text-sm font-semibold text-white">How resilient are hostas in dry indoor rooms?</h4>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-light">
                Hostas are naturally forest floor survivors, meaning they tolerate low light exceptionally well. However, they appreciate a degree of moisture. Indoor environments should either feature regular leaf misting, a soil hydration container, or be placed close to a companion air purifier that maintains local humidity around 50-60%.
              </p>
            </div>

            <div className="bg-[#142d1b]/10 backdrop-blur-md rounded-xl p-6 border border-white/5">
              <h4 className="text-sm font-semibold text-white">Can I place hosta plants directly in a sunny south-facing window?</h4>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-light">
                Traditional blue and heavily striated leaf hostas (like Hosta 'Halcyon') have a waxy protective layer that can burn under intense, direct sunlight, causing leaves to turn brown or yellow-grey. Variegated specimens like Hosta 'Guacamole' can tolerate several hours of sun, but as a rule, filtered or dappled lighting yields the healthiest structural leaf colorations.
              </p>
            </div>

            <div className="bg-[#142d1b]/10 backdrop-blur-md rounded-xl p-6 border border-white/5">
              <h4 className="text-sm font-semibold text-white">What is the optimal potting mixture for shade cultivars?</h4>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-light">
                We recommend a premium blend of rich, moisture-retaining organic matter supplemented with perlite and orchid bark to allow proper ventilation. Understory shade plants need moist roots, but standard soils can easily become waterlogged, leading to root decay. Air ventilation within the root space is critical.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 6: ELEVATED ENQUIRY & CONTACT FORM */}
        <section id="contact" className="py-16">
          <div className="bg-[#142d1b]/20 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-800/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 text-left">
                <span className="text-[10px] tracking-[0.3em] text-emerald-400 font-semibold uppercase">DESIGN APPOINTMENT</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">Let's Design Your Sanctuary</h2>
                <p className="text-neutral-400 text-sm mt-3 font-light leading-relaxed">
                  Collaborate with our physical landscape architects and curation coordinators. We construct tailor-made natural habitats engineered specifically for your building's microclimate and illumination index.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-neutral-300">Headquarters: Kyoto & Seattle Studio Design labs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-neutral-300">Direct Consultation hotline: +1 (800) PHYLLO-BOTANICS</span>
                  </div>
                </div>
              </div>

              {/* Interactive Contact Form Box */}
              <div className="lg:col-span-7">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-neutral-400 mb-1.5 font-semibold">Your Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Kenji Sato"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-neutral-400 mb-1.5 font-semibold">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. kenji@domain.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-neutral-400 mb-1.5 font-semibold">Project Vision or Subscription Request</label>
                    <textarea 
                      rows="4"
                      required
                      placeholder="Share details about your space lighting levels, architectural vibe, or what subscription you wish to configure..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-colors"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-emerald-400 hover:bg-emerald-300 text-[#07130b] font-bold py-3.5 rounded-lg text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(52,211,153,0.15)] hover:shadow-[0_4px_30px_rgba(52,211,153,0.3)] flex items-center justify-center gap-2"
                  >
                    Submit Design Enquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Feedback Message */}
                  {bookingStatus === 'success' && (
                    <div className="p-4 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center gap-3 animate-fade-in text-emerald-300 text-xs leading-relaxed">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                      <p>Your design inquiry has been securely sent. A lead Phyllo Botanical Coordinator will contact you in 24 hours to schedule your solar mapping. Speak soon!</p>
                    </div>
                  )}

                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-black/40 border-t border-white/5 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-bold tracking-[0.25em] text-white">PHYLLO</span>
            </div>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Curating and engineering premium living systems to integrate natural circadian benefits with structural modern interior environments.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-neutral-300 uppercase mb-4">Ecosystem</h4>
            <ul className="space-y-2 text-xs text-neutral-500">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Hero Sanctuary</a></li>
              <li><a href="#simulator" className="hover:text-emerald-400 transition-colors">Light Lab Simulator</a></li>
              <li><a href="#registry" className="hover:text-emerald-400 transition-colors">Botanical Registry</a></li>
              <li><a href="#curations" className="hover:text-emerald-400 transition-colors">Curation Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-neutral-300 uppercase mb-4">Research & Data</h4>
            <ul className="space-y-2 text-xs text-neutral-500">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Chlorophyll Analysis</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Understory Growth Logs</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Indoor Humidity Maps</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-neutral-300 uppercase mb-4">Newsletter</h4>
            <p className="text-xs text-neutral-500 mb-4 font-light">Receive quarterly insights about shade architectural gardening & exclusive plant batch arrivals.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-400 w-full" />
              <button className="bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold px-3 py-1.5 rounded text-xs">Join</button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 PHYLLO BOTANICAL STUDIO. Inspired by wild design. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* FULL SCREEN HOLOGRAPHIC SPECIMEN INSPECTOR (MODAL / DRAWER) */}
      {selectedPlant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fade-in">
          
          <div className="bg-[#0b1f13] rounded-3xl border border-white/10 max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col lg:flex-row max-h-[90vh]">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPlant(null)}
              className="absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left side: Premium High Contrast Image Block */}
            <div className="lg:w-1/2 relative bg-neutral-900 min-h-[250px] lg:min-h-full">
              <img src={selectedPlant.image} alt={selectedPlant.name} className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-emerald-950/80 via-transparent to-transparent opacity-80" />
              
              {/* Image Footer Details */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] tracking-widest text-emerald-400 font-mono uppercase bg-[#07130b]/80 backdrop-blur-sm px-3 py-1 rounded border border-white/10">
                  Specimen ID: {selectedPlant.id}
                </span>
                <h3 className="text-3xl font-extrabold text-white mt-3 leading-tight">{selectedPlant.name}</h3>
                <p className="text-xs text-neutral-300 italic font-serif mt-1">{selectedPlant.scientific}</p>
              </div>
            </div>

            {/* Right side: Comprehensive Anatomical Report */}
            <div id="inspect-care-console" className="lg:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[60vh] lg:max-h-[90vh]">
              
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-[10px] tracking-widest text-emerald-400 uppercase font-semibold">PHYSIOLOGICAL PROFILE REPORT</span>
                <h4 className="text-sm font-bold text-neutral-300 mt-1">Acclimatization Requirements</h4>
              </div>

              {/* Grid of details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center gap-3">
                  <Sun className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-neutral-500">Light tolerance</p>
                    <p className="text-xs text-white font-semibold">{selectedPlant.lightLevel}</p>
                  </div>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center gap-3">
                  <Droplets className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-neutral-500">Hydration cycle</p>
                    <p className="text-xs text-white font-semibold">{selectedPlant.water}</p>
                  </div>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center gap-3">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-neutral-500">Expected height</p>
                    <p className="text-xs text-white font-semibold">{selectedPlant.height}</p>
                  </div>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center gap-3">
                  <ThermometerSun className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-neutral-500">Indigenous Origin</p>
                    <p className="text-xs text-white font-semibold">{selectedPlant.origin}</p>
                  </div>
                </div>
              </div>

              {/* Botanical Description Text */}
              <div className="mb-6">
                <p className="text-[10px] tracking-wider text-neutral-400 uppercase font-semibold mb-2">Description</p>
                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  {selectedPlant.description}
                </p>
              </div>

              {/* Ecological advantages */}
              <div className="mb-6">
                <p className="text-[10px] tracking-wider text-neutral-400 uppercase font-semibold mb-2">Architectural Benefits</p>
                <div className="flex flex-wrap gap-2">
                  {selectedPlant.benefits.map((ben, i) => (
                    <span key={i} className="text-[10px] bg-emerald-950/50 text-emerald-300 border border-emerald-500/20 px-3 py-1 rounded-full">
                      {ben}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Action Trigger */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3 items-center justify-between">
                <button 
                  onClick={() => {
                    const isFav = favorites.includes(selectedPlant.id);
                    toggleFavorite(selectedPlant.id);
                  }}
                  className={`px-4 py-2 rounded-lg border text-xs font-semibold tracking-wider transition-colors flex items-center gap-2 ${
                    favorites.includes(selectedPlant.id)
                      ? 'border-rose-500 text-rose-400 bg-rose-500/10'
                      : 'border-white/10 text-neutral-300 hover:border-white'
                  }`}
                >
                  <Heart className="w-3.5 h-3.5" />
                  {favorites.includes(selectedPlant.id) ? 'Favorited Specimen' : 'Add to Collection'}
                </button>
                
                <button 
                  onClick={() => {
                    setSelectedPlant(null);
                    setContactForm({ ...contactForm, message: `Hello Phyllo! I want to enquire about implementing the following specimen in my project setup: ${selectedPlant.name} (${selectedPlant.scientific}).` });
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase transition-colors"
                >
                  Schedule Solar Integration
                </button>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
6
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Antique Parian - Fine Neoclassical Porcelain Salon</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        parianDark: '#1a1b1b',
                        parianCharcoal: '#222424',
                        parianGold: '#D8C293',
                        parianGoldHover: '#E5D6B8',
                        parianSoftWhite: '#F5F5F3',
                        parianMuted: '#8A8D8D'
                    },
                    fontFamily: {
                        serif: ['Cinzel', 'Playfair Display', 'serif'],
                        sans: ['Inter', 'Sofia Pro', 'sans-serif'],
                    }
                }
            }
        }
    </script>

    <!-- Google Fonts for Neoclassical Sophistication -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;800&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    
    <!-- FontAwesome for Premium Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        /* Custom slow rotations for astronomical orbital elements in the background */
        @keyframes slow-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
        }
        .orbit-bg {
            animation: slow-spin 120s linear infinite;
        }
        .orbit-bg-reverse {
            animation: reverse-spin 180s linear infinite;
        }
        /* Glassmorphism utility */
        .glass-card {
            background: rgba(34, 36, 36, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(216, 194, 147, 0.15);
        }
        .glass-header {
            background: rgba(26, 27, 27, 0.85);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(216, 194, 147, 0.1);
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #1a1b1b;
        }
        ::-webkit-scrollbar-thumb {
            background: #D8C293;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #E5D6B8;
        }
    </style>
</head>
<body class="bg-parianDark text-parianSoftWhite font-sans min-h-screen overflow-x-hidden relative">

    <!-- Ambient Orbital Background Lines (Inspired directly by the source image design) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <!-- Golden Orbit Ring 1 -->
        <div class="orbit-bg absolute -top-[10%] -left-[10%] w-[80vw] h-[80vw] rounded-full border border-parianGold/10 flex items-center justify-center">
            <div class="w-[60vw] h-[60vw] rounded-full border border-dashed border-parianGold/5"></div>
            <!-- Small orbital node particle -->
            <div class="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-parianGold/40 blur-[1px]"></div>
        </div>
        <!-- Golden Orbit Ring 2 -->
        <div class="orbit-bg-reverse absolute -bottom-[20%] -right-[15%] w-[90vw] h-[90vw] rounded-full border border-parianGold/10 flex items-center justify-center">
            <div class="w-[70vw] h-[70vw] rounded-full border border-dashed border-parianGold/5"></div>
            <div class="absolute bottom-[30%] right-[10%] w-3 h-3 rounded-full bg-parianGold/30"></div>
        </div>
        <!-- Ambient Radial Highlight Gradients mimicking original web layout -->
        <div class="absolute top-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-parianGold/5 blur-[120px]"></div>
        <div class="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-parianGold/5 blur-[150px]"></div>
    </div>

    <!-- MAIN HEADER -->
    <header class="glass-header sticky top-0 z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
            <!-- Brand / Logo -->
            <a href="#" onclick="switchTab('hero-section')" class="flex flex-col select-none group focus:outline-none">
                <span class="font-serif text-xl tracking-[0.3em] text-parianGold group-hover:text-parianSoftWhite transition-all uppercase">Antique Parian</span>
                <span class="text-[9px] uppercase tracking-[0.4em] text-parianMuted mt-0.5">Rare Biscuit Porcelain Antiques</span>
            </a>

            <!-- Navigation Links -->
            <nav class="hidden md:flex items-center space-x-8 text-xs font-medium uppercase tracking-[0.2em] text-parianSoftWhite/85">
                <button onclick="switchTab('hero-section')" id="nav-hero-section" class="nav-link hover:text-parianGold transition-colors pb-1 border-b border-transparent">Home</button>
                <button onclick="switchTab('about-section')" id="nav-about-section" class="nav-link hover:text-parianGold transition-colors pb-1 border-b border-transparent">About Parian</button>
                <button onclick="switchTab('catalog-section')" id="nav-catalog-section" class="nav-link hover:text-parianGold transition-colors pb-1 border-b border-transparent">Collection</button>
                <button onclick="switchTab('simulator-section')" id="nav-simulator-section" class="nav-link hover:text-parianGold transition-colors pb-1 border-b border-transparent">Exhibition Simulator</button>
                <button onclick="switchTab('contact-section')" id="nav-contact-section" class="nav-link hover:text-parianGold transition-colors pb-1 border-b border-transparent">Contact</button>
            </nav>

            <!-- Action Buttons / Cart Icon -->
            <div class="flex items-center space-x-6">
                <!-- Inquiry Cart trigger -->
                <button onclick="toggleInquirySheet()" class="relative p-2.5 rounded-full border border-parianGold/20 hover:border-parianGold/60 hover:bg-parianCharcoal transition-all focus:outline-none" title="View Private Inquiry Cart">
                    <i class="fa-solid fa-cube text-parianGold text-sm"></i>
                    <!-- Notification dot for cart items -->
                    <span id="cart-dot" class="hidden absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-parianDark animate-ping"></span>
                    <span id="cart-count" class="hidden absolute -top-1 -right-1 w-4 h-4 bg-parianGold text-parianDark text-[9px] font-bold rounded-full flex items-center justify-center">0</span>
                </button>
                
                <!-- Private Valuation CTA -->
                <button onclick="switchTab('contact-section'); prefillInquiry('Consignment / Valuation')" class="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-gradient-to-r from-parianGold to-parianGold/80 hover:from-parianGoldHover hover:to-parianGold text-parianDark text-xs font-semibold tracking-[0.15em] uppercase shadow-lg shadow-parianGold/10 hover:shadow-parianGold/20 transition-all duration-300">
                    Consign a Piece
                </button>

                <!-- Mobile menu toggle -->
                <button onclick="toggleMobileMenu()" class="md:hidden text-parianSoftWhite hover:text-parianGold focus:outline-none">
                    <i id="menu-icon" class="fa-solid fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        
        <!-- Mobile Dropdown Navigation -->
        <div id="mobile-menu" class="hidden md:hidden bg-parianCharcoal/95 border-b border-parianGold/10 py-6 px-4 absolute left-0 w-full transition-all">
            <div class="flex flex-col space-y-4 text-xs tracking-[0.2em] uppercase text-center">
                <button onclick="switchTab('hero-section'); toggleMobileMenu()" class="py-2 hover:text-parianGold text-parianSoftWhite">Home</button>
                <button onclick="switchTab('about-section'); toggleMobileMenu()" class="py-2 hover:text-parianGold text-parianSoftWhite">About Parian</button>
                <button onclick="switchTab('catalog-section'); toggleMobileMenu()" class="py-2 hover:text-parianGold text-parianSoftWhite">Collection</button>
                <button onclick="switchTab('simulator-section'); toggleMobileMenu()" class="py-2 hover:text-parianGold text-parianSoftWhite">Exhibition Simulator</button>
                <button onclick="switchTab('contact-section'); toggleMobileMenu()" class="py-2 hover:text-parianGold text-parianSoftWhite">Contact</button>
                <button onclick="switchTab('contact-section'); toggleMobileMenu(); prefillInquiry('Consignment / Valuation')" class="mt-4 mx-auto w-4/5 py-2.5 rounded-full bg-parianGold text-parianDark font-bold">Consign a Piece</button>
            </div>
        </div>
    </header>

    <!-- CONTENT TABS WRAPPER -->
    <main class="relative z-10">

        <!-- SECTION 1: HOME/HERO (Matching primary showcase frame in the design) -->
        <section id="hero-section" class="tab-content min-h-[calc(100vh-6rem)] flex items-center py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    <!-- Left Hero Content Info -->
                    <div class="lg:col-span-6 flex flex-col justify-center space-y-8 text-left z-10">
                        <div class="flex items-center space-x-2">
                            <span class="w-12 h-[1px] bg-parianGold"></span>
                            <span class="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-parianGold font-medium">Circa 1842 - 1890</span>
                        </div>
                        
                        <h1 class="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-wide leading-tight text-white">
                            Antique <br class="hidden sm:inline"/>
                            <span class="text-parianGold font-light italic">Parian</span>
                        </h1>
                        
                        <p class="text-parianMuted text-sm sm:text-base leading-relaxed max-w-lg font-light">
                            Discover exquisite Parian biscuit porcelain busts and neoclassical sculptures. Exquisite works of art commissioned by elite Victorian society, recreating the serene grandeur of classic Grecian and Roman marble.
                        </p>
                        
                        <!-- Mini Bullet Details in inspired layout -->
                        <div class="grid grid-cols-2 gap-4 border-t border-b border-parianGold/15 py-6 my-4 text-xs tracking-wider">
                            <div class="flex items-center space-x-3">
                                <span class="w-2 h-2 rounded-full bg-parianGold"></span>
                                <span class="text-parianSoftWhite/80">Copeland & Garrett</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <span class="w-2 h-2 rounded-full bg-parianGold"></span>
                                <span class="text-parianSoftWhite/80">Minton Ceramic Works</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <span class="w-2 h-2 rounded-full bg-parianGold"></span>
                                <span class="text-parianSoftWhite/80">Veiled Sculpture Masters</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <span class="w-2 h-2 rounded-full bg-parianGold"></span>
                                <span class="text-parianSoftWhite/80">R&L Statuary Artisans</span>
                            </div>
                        </div>

                        <!-- Main Interactive CTAs -->
                        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <button onclick="switchTab('catalog-section')" class="px-8 py-4 rounded-full bg-parianGold hover:bg-parianGoldHover text-parianDark font-semibold text-xs tracking-[0.2em] uppercase transition-all shadow-xl shadow-parianGold/10">
                                Explore Collection
                            </button>
                            <button onclick="switchTab('simulator-section')" class="px-8 py-4 rounded-full border border-parianGold/30 hover:border-parianGold hover:bg-parianCharcoal text-parianSoftWhite font-semibold text-xs tracking-[0.2em] uppercase transition-all">
                                Try Simulator <i class="fa-solid fa-cube ml-2 text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Right Hero Sculptural Spotlight (Direct recreation of the golden ring-encased bust artwork in the inspiration) -->
                    <div class="lg:col-span-6 relative flex justify-center items-center py-12 lg:py-0">
                        <div class="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
                            
                            <!-- Large decorative orbital ring framing sculpture -->
                            <div class="absolute inset-0 rounded-full border border-parianGold/20 orbit-bg">
                                <div class="absolute -top-1 left-1/2 w-3 h-3 bg-parianGold rounded-full shadow-lg shadow-parianGold"></div>
                            </div>
                            <!-- Medium ring -->
                            <div class="absolute w-[85%] h-[85%] rounded-full border border-dashed border-parianMuted/20 orbit-bg-reverse"></div>
                            <!-- Solid backdrop background glow -->
                            <div class="absolute w-[70%] h-[70%] rounded-full bg-parianCharcoal/80 border border-parianGold/30 shadow-2xl flex items-center justify-center overflow-hidden">
                                <div class="absolute inset-0 bg-gradient-to-t from-parianDark via-transparent to-transparent opacity-60"></div>
                            </div>

                            <!-- Interactive SVG Apollo Classical Bust (High fidelity vector with shading mimicking authentic Parian Marble) -->
                            <div class="absolute z-10 w-[75%] h-[75%] flex justify-center items-center pointer-events-auto cursor-pointer group" onclick="switchTab('simulator-section')" title="Configure in Exhibition Simulator">
                                <svg id="apollo-svg-hero" class="w-full h-full drop-shadow-[0_15px_30px_rgba(255,255,255,0.08)] transform group-hover:scale-105 transition-transform duration-500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <!-- Sophisticated Marble Shading Gradients -->
                                        <linearGradient id="marbleBase" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stop-color="#ffffff"/>
                                            <stop offset="60%" stop-color="#f5f2eb"/>
                                            <stop offset="100%" stop-color="#cfc9bf"/>
                                        </linearGradient>
                                        <linearGradient id="marbleShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
                                            <stop offset="100%" stop-color="#8c8577" stop-opacity="0.3"/>
                                        </linearGradient>
                                        <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
                                            <stop offset="0%" stop-color="#d4af37" stop-opacity="0.25"/>
                                            <stop offset="100%" stop-color="#000" stop-opacity="0"/>
                                        </radialGradient>
                                    </defs>
                                    <!-- Dynamic Golden Light Backing Halo -->
                                    <circle cx="100" cy="100" r="85" fill="url(#haloGlow)" />
                                    <!-- Pedestal Pillar base -->
                                    <path d="M70,165 L130,165 L125,185 L75,185 Z" fill="url(#marbleBase)" stroke="#e4ded5" stroke-width="0.5"/>
                                    <ellipse cx="100" cy="165" rx="30" ry="6" fill="#ded7cb" opacity="0.8"/>
                                    <!-- Pedestal Shaft -->
                                    <path d="M85,130 L115,130 L110,165 L90,165 Z" fill="url(#marbleBase)" opacity="0.9"/>
                                    <path d="M85,130 Q100,135 115,130" fill="none" stroke="#cfc9bf" stroke-width="0.75"/>
                                    <!-- Apollo Chest & Shoulders -->
                                    <path d="M50,115 C55,100 68,90 75,95 C82,100 85,108 85,120 C85,125 75,132 70,135 C55,132 45,125 50,115 Z" fill="url(#marbleBase)"/>
                                    <path d="M150,115 C145,100 132,90 125,95 C118,100 115,108 115,120 C115,125 125,132 130,135 C145,132 155,125 150,115 Z" fill="url(#marbleBase)"/>
                                    <path d="M60,115 Q100,140 140,115 C145,122 135,135 100,142 C65,135 55,122 60,115 Z" fill="url(#marbleBase)"/>
                                    <!-- Drapery / Cloak (Highly Classical) -->
                                    <path d="M52,112 Q75,130 95,115 Q125,100 148,112 C135,130 65,130 52,112 Z" fill="#e9e5dc" stroke="#c0b8aa" stroke-width="0.5"/>
                                    <path d="M68,118 Q100,133 132,118" fill="none" stroke="#b0a89a" stroke-width="0.75"/>
                                    <!-- Neck and Jaw -->
                                    <path d="M90,85 L110,85 L112,105 L88,105 Z" fill="url(#marbleBase)"/>
                                    <path d="M88,105 C95,112 105,112 112,105 Z" fill="#ded7cb"/>
                                    <!-- Classical Sculpted Face Outline -->
                                    <path d="M82,58 C82,45 100,35 118,45 C122,55 120,75 115,82 C108,88 95,88 88,82 C82,75 82,65 82,58 Z" fill="url(#marbleBase)"/>
                                    <path d="M102,48 C115,48 118,65 115,82 C102,88 92,75 102,48 Z" fill="#ffffff" opacity="0.5"/>
                                    <!-- Classical Curled Hair Details -->
                                    <path d="M80,55 Q74,48 84,40 Q94,32 110,36 Q126,40 120,52 Q115,58 118,62" fill="none" stroke="#cfc9bf" stroke-width="3"/>
                                    <path d="M82,50 Q78,42 88,38 Q100,32 114,38" fill="none" stroke="#bda890" stroke-width="2"/>
                                    <circle cx="85" cy="46" r="3" fill="#cfc9bf"/>
                                    <circle cx="95" cy="40" r="3.5" fill="#cfc9bf"/>
                                    <circle cx="106" cy="39" r="4" fill="#cfc9bf"/>
                                    <circle cx="116" cy="44" r="3" fill="#cfc9bf"/>
                                    <circle cx="120" cy="52" r="3.5" fill="#cfc9bf"/>
                                    <!-- Greek Nose & Brow Line -->
                                    <path d="M100,48 L100,68 L104,70" fill="none" stroke="#a49c8f" stroke-width="1.5" stroke-linecap="round"/>
                                    <!-- Lips (soft neoclassical pout) -->
                                    <path d="M96,77 Q100,75 104,77 Q100,80 96,77 Z" fill="#b0a89a" opacity="0.8"/>
                                    <!-- Eyes shadow/contours -->
                                    <path d="M92,58 Q95,57 98,59" fill="none" stroke="#a49c8f" stroke-width="1.25"/>
                                    <path d="M106,58 Q109,57 112,59" fill="none" stroke="#a49c8f" stroke-width="1.25"/>
                                </svg>
                            </div>

                            <!-- Decorative aesthetic indicator buttons mimicking elements on the left side of images -->
                            <div class="absolute left-0 bottom-[10%] flex flex-col space-y-3 z-25">
                                <span class="w-1.5 h-1.5 rounded-full bg-parianGold"></span>
                                <span class="w-1.5 h-1.5 rounded-full bg-parianMuted/30"></span>
                                <span class="w-1.5 h-1.5 rounded-full bg-parianMuted/30"></span>
                                <span class="w-1.5 h-1.5 rounded-full bg-parianMuted/30"></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- SECTION 2: ABOUT / HISTORY (Veiled bust frame recreation & historical context) -->
        <section id="about-section" class="tab-content hidden py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Header of the Editorial Segment -->
                <div class="flex flex-col md:flex-row md:items-end justify-between border-b border-parianGold/10 pb-8 mb-12">
                    <div class="max-w-xl">
                        <span class="text-xs uppercase tracking-[0.3em] text-parianGold block mb-2">History & Craft</span>
                        <h2 class="font-serif text-3xl sm:text-5xl tracking-wide text-white">About Parian Ware</h2>
                    </div>
                    <p class="text-parianMuted text-xs sm:text-sm max-w-md mt-4 md:mt-0 leading-relaxed font-light">
                        First developed around 1842 by Copeland & Garrett, this unglazed biscuit porcelain captures the soft, light-absorbing qualities of Carrara marble.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <!-- Elegant Custom Veiled Lady Artwork representation -->
                    <div class="lg:col-span-5 flex justify-center order-last lg:order-first">
                        <div class="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] rounded-2xl glass-card overflow-hidden p-6 border border-parianGold/20 flex flex-col items-center justify-between shadow-2xl">
                            <!-- Circular accent -->
                            <div class="absolute top-8 w-48 h-48 rounded-full border border-parianGold/10"></div>
                            
                            <!-- Detailed SVG of Veiled Lady Sculpture -->
                            <div class="w-full h-[80%] flex justify-center items-center relative z-10">
                                <svg class="w-[85%] h-full filter drop-shadow-[0_12px_24px_rgba(255,255,255,0.06)]" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="veiledGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stop-color="#ffffff"/>
                                            <stop offset="70%" stop-color="#fdfbfa"/>
                                            <stop offset="100%" stop-color="#dfd9cd"/>
                                        </linearGradient>
                                        <linearGradient id="veilLines" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stop-color="rgba(255,255,255,0.5)"/>
                                            <stop offset="50%" stop-color="rgba(196,186,170,0.35)"/>
                                            <stop offset="100%" stop-color="rgba(255,255,255,0.1)"/>
                                        </linearGradient>
                                    </defs>
                                    <!-- Base Pedestal -->
                                    <path d="M65,190 L135,190 L130,225 L70,225 Z" fill="url(#veiledGlow)" stroke="#cfc9bf" stroke-width="0.5"/>
                                    <ellipse cx="100" cy="190" rx="35" ry="6" fill="#ded7cb" opacity="0.8"/>
                                    <!-- Pedestal Trim -->
                                    <rect x="75" y="150" width="50" height="40" fill="url(#veiledGlow)" opacity="0.9"/>
                                    <!-- Veiled Bust Shoulders & Drape -->
                                    <path d="M45,145 C45,130 55,115 70,118 C85,120 100,122 115,118 C130,115 140,130 140,145 C140,170 120,180 100,180 C80,180 45,170 45,145 Z" fill="url(#veiledGlow)"/>
                                    <!-- Veiled Head Structure -->
                                    <path d="M78,65 C78,45 92,30 105,32 C118,34 122,50 122,70 C122,88 115,108 100,108 C85,108 78,85 78,65 Z" fill="url(#veiledGlow)"/>
                                    
                                    <!-- The Elegant Translucent Veil Overlay Details -->
                                    <!-- Vertical draping ridges over head & face -->
                                    <path d="M85,32 Q95,45 90,85 T90,140" fill="none" stroke="url(#veilLines)" stroke-width="1.5" opacity="0.85"/>
                                    <path d="M93,31 Q100,45 100,85 T100,140" fill="none" stroke="url(#veilLines)" stroke-width="2" opacity="0.95"/>
                                    <path d="M103,31 Q105,45 108,85 T110,140" fill="none" stroke="url(#veilLines)" stroke-width="2.5" opacity="0.9"/>
                                    <path d="M112,33 Q112,45 115,85 T120,140" fill="none" stroke="url(#veilLines)" stroke-width="1.5" opacity="0.8"/>
                                    
                                    <!-- Translucent shroud lines across forehead -->
                                    <path d="M82,55 Q100,68 118,55" fill="none" stroke="#d5cebf" stroke-width="0.75" opacity="0.8"/>
                                    <!-- Face silhouette visible through veil -->
                                    <path d="M87,70 Q100,74 113,70" fill="none" stroke="#cfc9bf" stroke-width="0.5"/>
                                    <path d="M95,82 Q100,86 105,82" fill="none" stroke="#cfc9bf" stroke-width="0.5"/>
                                    <!-- Shroud Crown -->
                                    <path d="M86,34 C94,22 108,22 114,34 Z" fill="#ffffff" opacity="0.4"/>
                                    <!-- Base shadows -->
                                    <ellipse cx="100" cy="180" rx="30" ry="4" fill="#a49c8f" opacity="0.4"/>
                                </svg>
                            </div>

                            <div class="text-center">
                                <span class="text-[10px] tracking-[0.3em] uppercase text-parianGold font-bold">Featured Artwork</span>
                                <p class="font-serif text-sm text-parianSoftWhite/90 mt-1">"The Veiled Bride" after Monti</p>
                            </div>
                        </div>
                    </div>

                    <!-- Editorial Content Grid -->
                    <div class="lg:col-span-7 space-y-8">
                        <div class="space-y-4">
                            <span class="text-parianGold text-xs uppercase tracking-[0.2em] font-medium block">The Neoclassical Revival</span>
                            <h3 class="font-serif text-2xl sm:text-3xl tracking-wide text-white">An Artistic Revolution in Porcelain</h3>
                            <p class="text-parianMuted text-sm sm:text-base leading-relaxed font-light">
                                In Victorian Great Britain, high classical sculpture of Greece and Rome was the absolute pinnacle of cultural taste. However, large marble works were incredibly expensive and exclusive to aristocracy.
                            </p>
                            <p class="text-parianMuted text-sm sm:text-base leading-relaxed font-light">
                                The invention of Parian ware allowed manufacturers to cast high-quality sculptural replicas in durable, cleanable biscuit porcelain. Known as "Parian" because it closely mirrored the prized pristine white marble from the Greek island of <span class="text-parianGold font-semibold">Paros</span>.
                            </p>
                        </div>

                        <!-- Historical Timeline / Producers Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div class="p-5 rounded-xl border border-parianGold/10 bg-parianCharcoal/40 space-y-2">
                                <h4 class="font-serif text-parianGold text-lg tracking-wider">Copeland & Garrett</h4>
                                <p class="text-parianMuted text-xs leading-relaxed">
                                    The legendary Stoke-on-Trent factory that first manufactured "Statuary Porcelain" in 1842. Famed for partnering with prominent artists of the Royal Academy.
                                </p>
                            </div>

                            <div class="p-5 rounded-xl border border-parianGold/10 bg-parianCharcoal/40 space-y-2">
                                <h4 class="font-serif text-parianGold text-lg tracking-wider">The Great Exhibition of 1851</h4>
                                <p class="text-parianMuted text-xs leading-relaxed">
                                    Parian ware was the absolute sensation of Crystal Palace Exhibition, bought directly by Queen Victoria herself and establishing a massive global phenomenon.
                                </p>
                            </div>

                            <div class="p-5 rounded-xl border border-parianGold/10 bg-parianCharcoal/40 space-y-2">
                                <h4 class="font-serif text-parianGold text-lg tracking-wider">Minton Ceramic Works</h4>
                                <p class="text-parianMuted text-xs leading-relaxed">
                                    Pioneers of intricate casting, releasing remarkable parian statuettes including masterfully modeled veiled ladies and allegorical classical muses.
                                </p>
                            </div>

                            <div class="p-5 rounded-xl border border-parianGold/10 bg-parianCharcoal/40 space-y-2">
                                <h4 class="font-serif text-parianGold text-lg tracking-wider">Robinson & Leadbeater</h4>
                                <p class="text-parianMuted text-xs leading-relaxed">
                                    The ultimate dedicated Parian specialists of the late 19th century, known for breathtaking busts of historical musicians, politicians, and writers.
                                </p>
                            </div>
                        </div>

                        <!-- Interactive Educational Timeline Button -->
                        <div class="pt-4 flex justify-start">
                            <button onclick="switchTab('catalog-section')" class="px-6 py-3 rounded-full bg-transparent border border-parianGold/30 hover:border-parianGold hover:bg-parianCharcoal text-parianGold text-xs font-semibold tracking-widest uppercase transition-all">
                                View Archival Pieces <i class="fa-solid fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 3: THE COLLECTION (Filterable gallery with search, detail inspect, and checkout inquiry) -->
        <section id="catalog-section" class="tab-content hidden py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <!-- Catalog Header -->
                <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <span class="text-xs uppercase tracking-[0.4em] text-parianGold font-semibold block">Curated Catalogue</span>
                    <h2 class="font-serif text-3xl sm:text-5xl tracking-wide text-white">The Antique Vault</h2>
                    <p class="text-parianMuted text-xs sm:text-sm leading-relaxed font-light">
                        Filter and inspect our collection of genuine mid-to-late Victorian Parian ware statuary. Each piece is meticulously examined for provenance, authenticity, and preservation.
                    </p>
                </div>

                <!-- Controls Panel (Search & Filter Tabs) -->
                <div class="glass-card rounded-2xl p-6 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <!-- Search Input -->
                    <div class="relative w-full md:w-80">
                        <input type="text" id="catalog-search" oninput="filterCatalog()" placeholder="Search pieces..." class="w-full bg-parianDark/80 text-parianSoftWhite border border-parianGold/25 rounded-full py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-parianGold transition-all">
                        <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3.5 text-parianMuted text-xs"></i>
                    </div>

                    <!-- Filter Tabs -->
                    <div class="flex flex-wrap items-center gap-2" id="filter-container">
                        <button onclick="filterCategory('All')" class="filter-tab active px-4 py-2 rounded-full border border-parianGold bg-parianGold text-parianDark text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all">All</button>
                        <button onclick="filterCategory('Bust')" class="filter-tab px-4 py-2 rounded-full border border-parianGold/25 hover:border-parianGold text-parianSoftWhite text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all">Busts</button>
                        <button onclick="filterCategory('Figure')" class="filter-tab px-4 py-2 rounded-full border border-parianGold/25 hover:border-parianGold text-parianSoftWhite text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all">Figures</button>
                        <button onclick="filterCategory('Veiled')" class="filter-tab px-4 py-2 rounded-full border border-parianGold/25 hover:border-parianGold text-parianSoftWhite text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all">Veiled</button>
                    </div>

                    <!-- Sort -->
                    <div class="flex items-center space-x-3 text-xs">
                        <span class="text-parianMuted uppercase tracking-wider text-[10px]">Sort By:</span>
                        <select id="catalog-sort" onchange="sortCatalog()" class="bg-parianDark border border-parianGold/25 text-parianSoftWhite text-xs rounded-full px-3 py-1.5 focus:outline-none focus:border-parianGold">
                            <option value="name">Name</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="era">Era/Age</option>
                        </select>
                    </div>
                </div>

                <!-- Catalog Grid -->
                <div id="catalog-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Dynamic collection cards will be injected by JavaScript -->
                </div>

                <!-- Empty State -->
                <div id="catalog-empty" class="hidden text-center py-24 glass-card rounded-2xl border border-parianGold/10">
                    <i class="fa-solid fa-hourglass-empty text-parianGold/40 text-4xl mb-4"></i>
                    <p class="font-serif text-lg">No matching antiques found</p>
                    <p class="text-parianMuted text-xs mt-1">Try adjusting your filters or search keywords</p>
                </div>

            </div>
        </section>

        <!-- SECTION 4: THE EXHIBITION SIMULATOR (Highly functional 3D pedestal lighting experience) -->
        <section id="simulator-section" class="tab-content hidden py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center max-w-2xl mx-auto mb-12 space-y-4">
                    <span class="text-xs uppercase tracking-[0.4em] text-parianGold font-semibold block">Interactive Experience</span>
                    <h2 class="font-serif text-3xl sm:text-5xl tracking-wide text-white">The Exhibition Studio</h2>
                    <p class="text-parianMuted text-xs sm:text-sm leading-relaxed font-light">
                        Step into a virtual museum exhibit. Interact with neoclassical Parian ware sculptures, test atmospheric lighting configurations, and choose marble pedestals to visualize how these masterpieces grace a real space.
                    </p>
                </div>

                <!-- Interactive Simulator Studio Core Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                    
                    <!-- Left Sidebar - Controls Panel -->
                    <div class="lg:col-span-4 flex flex-col justify-between space-y-6 glass-card rounded-2xl p-6 border border-parianGold/20">
                        <div class="space-y-6">
                            <!-- Sculptural Piece Select -->
                            <div class="space-y-3">
                                <label class="text-xs text-parianGold uppercase tracking-[0.2em] font-semibold">1. Choose Sculpture</label>
                                <div class="grid grid-cols-2 gap-3">
                                    <button onclick="setSimSculpture('apollo')" id="sim-btn-apollo" class="sim-sculpture-btn active py-3 px-4 rounded-xl border border-parianGold bg-parianGold/10 text-xs font-semibold tracking-wider text-white hover:border-parianGold transition-all">
                                        Apollo Belvedere
                                    </button>
                                    <button onclick="setSimSculpture('veiled')" id="sim-btn-veiled" class="sim-sculpture-btn py-3 px-4 rounded-xl border border-parianGold/10 hover:border-parianGold/50 text-xs font-semibold tracking-wider text-parianSoftWhite/70 hover:text-white transition-all">
                                        The Veiled Bride
                                    </button>
                                    <button onclick="setSimSculpture('clio')" id="sim-btn-clio" class="sim-sculpture-btn py-3 px-4 rounded-xl border border-parianGold/10 hover:border-parianGold/50 text-xs font-semibold tracking-wider text-parianSoftWhite/70 hover:text-white transition-all">
                                        Clio (Greek Muse)
                                    </button>
                                    <button onclick="setSimSculpture('psyche')" id="sim-btn-psyche" class="sim-sculpture-btn py-3 px-4 rounded-xl border border-parianGold/10 hover:border-parianGold/50 text-xs font-semibold tracking-wider text-parianSoftWhite/70 hover:text-white transition-all">
                                        Psyche Revived
                                    </button>
                                </div>
                            </div>

                            <!-- Pedestal Material Selector -->
                            <div class="space-y-3">
                                <label class="text-xs text-parianGold uppercase tracking-[0.2em] font-semibold block">2. Select Pedestal</label>
                                <div class="grid grid-cols-3 gap-2">
                                    <button onclick="setSimPedestal('carrara')" id="ped-btn-carrara" class="sim-pedestal-btn active py-2 rounded-lg border border-parianGold text-[10px] tracking-wider uppercase bg-white/5 text-white">Carrara Marble</button>
                                    <button onclick="setSimPedestal('imperial')" id="ped-btn-imperial" class="sim-pedestal-btn py-2 rounded-lg border border-parianGold/15 hover:border-parianGold/50 text-[10px] tracking-wider uppercase text-parianMuted">Imperial Gold</button>
                                    <button onclick="setSimPedestal('basalt')" id="ped-btn-basalt" class="sim-pedestal-btn py-2 rounded-lg border border-parianGold/15 hover:border-parianGold/50 text-[10px] tracking-wider uppercase text-parianMuted">Black Basalt</button>
                                </div>
                            </div>

                            <!-- Lighting Configuration Options -->
                            <div class="space-y-4">
                                <label class="text-xs text-parianGold uppercase tracking-[0.2em] font-semibold block">3. Adjust Atmospheric Lights</label>
                                
                                <!-- Spotlight Color -->
                                <div class="space-y-2">
                                    <span class="text-[10px] uppercase text-parianMuted tracking-wider block">Light Tone (Color)</span>
                                    <div class="flex items-center space-x-3">
                                        <button onclick="setSimLightColor('warm')" class="w-7 h-7 rounded-full bg-[#fce7c0] border-2 border-parianGold shadow-md focus:outline-none" title="Museum Warm Glow"></button>
                                        <button onclick="setSimLightColor('white')" class="w-7 h-7 rounded-full bg-[#ffffff] border-2 border-transparent hover:border-parianGold shadow-md focus:outline-none" title="Pristine Gallery White"></button>
                                        <button onclick="setSimLightColor('blue')" class="w-7 h-7 rounded-full bg-[#cbdff7] border-2 border-transparent hover:border-parianGold shadow-md focus:outline-none" title="Mystic Lunar Blue"></button>
                                    </div>
                                </div>

                                <!-- Spotlight Intensity -->
                                <div class="space-y-2">
                                    <div class="flex justify-between text-[10px] uppercase text-parianMuted tracking-wider">
                                        <span>Light Intensity</span>
                                        <span id="light-intensity-label">70%</span>
                                    </div>
                                    <input type="range" id="light-intensity" min="20" max="100" value="70" oninput="updateSimulatorLights()" class="w-full accent-parianGold bg-parianDark rounded-lg appearance-none h-1 cursor-pointer">
                                </div>

                                <!-- Shadows direction/angle -->
                                <div class="space-y-2">
                                    <div class="flex justify-between text-[10px] uppercase text-parianMuted tracking-wider">
                                        <span>Spotlight Angle</span>
                                        <span id="light-angle-label">15°</span>
                                    </div>
                                    <input type="range" id="light-angle" min="-60" max="60" value="15" oninput="updateSimulatorLights()" class="w-full accent-parianGold bg-parianDark rounded-lg appearance-none h-1 cursor-pointer">
                                </div>
                            </div>
                        </div>

                        <!-- Inquiry CTA linking current selection to cart -->
                        <div class="pt-4 border-t border-parianGold/10">
                            <button onclick="addSelectedSimToCart()" class="w-full py-3.5 rounded-full bg-parianGold hover:bg-parianGoldHover text-parianDark font-bold text-xs tracking-widest uppercase transition-all shadow-lg shadow-parianGold/10">
                                Inquire About Selected Work
                            </button>
                        </div>
                    </div>

                    <!-- Right Display Screen (Recreates high quality atmospheric render) -->
                    <div class="lg:col-span-8 flex flex-col justify-between glass-card rounded-2xl border border-parianGold/20 relative overflow-hidden min-h-[500px]">
                        <!-- Dynamic Background Ambient Lighting Overlay -->
                        <div id="sim-light-glow" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-all duration-500 opacity-60" style="background-color: #fce7c0;"></div>

                        <!-- Top Interactive Tooltip Header -->
                        <div class="p-6 relative z-10 flex items-center justify-between border-b border-parianGold/5">
                            <div>
                                <h3 id="sim-title" class="font-serif text-xl tracking-wider text-white">Apollo Belvedere Bust</h3>
                                <p id="sim-era" class="text-[10px] uppercase tracking-[0.2em] text-parianGold mt-0.5">Circa 1855 • Copeland</p>
                            </div>
                            <span class="px-3 py-1 rounded-full border border-parianGold/20 text-[9px] uppercase tracking-widest text-parianGold bg-parianCharcoal">Interactive Studio</span>
                        </div>

                        <!-- Canvas/Illustration Frame -->
                        <div class="flex-grow flex flex-col justify-end items-center relative py-12">
                            
                            <!-- Classical background architecture details (Neoclassical column silhouette in gold lines) -->
                            <div class="absolute inset-x-0 bottom-32 top-12 flex justify-between px-16 pointer-events-none opacity-20">
                                <div class="w-[1px] h-full bg-gradient-to-t from-parianGold to-transparent"></div>
                                <div class="w-[1px] h-full bg-gradient-to-t from-parianGold to-transparent"></div>
                            </div>

                            <!-- Main Dynamic Sculpture Graphics Display Box -->
                            <div class="w-[300px] h-[300px] relative z-10 flex flex-col items-center justify-end">
                                
                                <!-- Dynamic Render Spot SVG -->
                                <div id="sim-sculpture-wrapper" class="w-full h-full flex justify-center items-center transform transition-transform duration-500">
                                    <!-- Dynamic SVG injected by JS (setSimSculpture) -->
                                </div>

                                <!-- Pedestal base drawing matching state -->
                                <div id="sim-pedestal" class="w-[180px] h-[100px] -mt-16 relative z-0 transition-all duration-500">
                                    <!-- Pedestal Pillar Graphic -->
                                    <svg class="w-full h-full" viewBox="0 0 180 100" xmlns="http://www.w3.org/2000/svg">
                                        <!-- Top Plate -->
                                        <ellipse cx="90" cy="20" rx="60" ry="10" id="ped-top" fill="#ffffff" stroke="#c9c3b8" stroke-width="0.5"/>
                                        <!-- Column Pillar shaft -->
                                        <path d="M45,20 Q90,30 135,20 L130,85 Q90,95 50,85 Z" id="ped-shaft" fill="#f4eee3" opacity="0.9"/>
                                        <!-- Column fluting detail line -->
                                        <path d="M65,24 Q90,34 115,24 L110,83 Q90,93 70,83 Z" fill="none" id="ped-fluting" stroke="#d5cebf" stroke-width="0.75"/>
                                        <!-- Bottom base -->
                                        <ellipse cx="90" cy="85" rx="55" ry="12" id="ped-base" fill="#e8e2d7"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- Base Information Grid -->
                        <div class="p-6 relative z-10 border-t border-parianGold/10 bg-parianCharcoal/80 flex flex-wrap justify-between items-center text-xs">
                            <div class="flex space-x-6">
                                <div>
                                    <span class="text-parianMuted text-[10px] uppercase block">Material Accent</span>
                                    <span class="text-parianSoftWhite font-semibold">Fine Biscuit Statuary Porcelain</span>
                                </div>
                                <div>
                                    <span class="text-parianMuted text-[10px] uppercase block">Height</span>
                                    <span id="sim-height" class="text-parianSoftWhite font-semibold">14.5 Inches</span>
                                </div>
                                <div>
                                    <span class="text-parianMuted text-[10px] uppercase block">Value Est.</span>
                                    <span id="sim-price" class="text-parianGold font-semibold">£1,450 GBP</span>
                                </div>
                            </div>
                            <button onclick="openExhibitionDetails()" class="text-parianGold hover:text-parianGoldHover transition-colors text-[11px] font-bold uppercase tracking-widest mt-4 sm:mt-0">
                                View Archival Profile <i class="fa-solid fa-arrow-up-right-from-square ml-1.5 text-[9px]"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- SECTION 5: CONTACT & Private Valuation Desk -->
        <section id="contact-section" class="tab-content hidden py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    <!-- Form Contact Info (Neoclassical styled editorial section) -->
                    <div class="lg:col-span-5 space-y-8">
                        <div class="space-y-4">
                            <span class="text-xs uppercase tracking-[0.4em] text-parianGold font-semibold block">Private Office</span>
                            <h2 class="font-serif text-3xl sm:text-5xl tracking-wide text-white">Consignment & Inquiries</h2>
                            <p class="text-parianMuted text-sm leading-relaxed font-light">
                                Our private curation room is at your disposal. Whether you wish to acquire museum-level Victorian sculpture or submit an authentic Parian ware antique for professional valuation, we look forward to hearing from you.
                            </p>
                        </div>

                        <!-- Contact Details cards -->
                        <div class="space-y-4">
                            <div class="flex items-start space-x-4 p-5 rounded-2xl glass-card border border-parianGold/10">
                                <div class="p-3 bg-parianGold/10 rounded-full border border-parianGold/30 text-parianGold">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div class="space-y-1">
                                    <h4 class="font-serif text-parianSoftWhite font-semibold text-sm">London Gallery Office</h4>
                                    <p class="text-parianMuted text-xs leading-relaxed">Mayfair Curio Quarter, Bond St, London, UK</p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4 p-5 rounded-2xl glass-card border border-parianGold/10">
                                <div class="p-3 bg-parianGold/10 rounded-full border border-parianGold/30 text-parianGold">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div class="space-y-1">
                                    <h4 class="font-serif text-parianSoftWhite font-semibold text-sm">Electronic Correspondence</h4>
                                    <p class="text-parianMuted text-xs leading-relaxed">curator@antiqueparian.com</p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4 p-5 rounded-2xl glass-card border border-parianGold/10">
                                <div class="p-3 bg-parianGold/10 rounded-full border border-parianGold/30 text-parianGold">
                                    <i class="fa-solid fa-shield-halved"></i>
                                </div>
                                <div class="space-y-1">
                                    <h4 class="font-serif text-parianSoftWhite font-semibold text-sm">Security & Packaging Promise</h4>
                                    <p class="text-parianMuted text-xs leading-relaxed">All works shipped via private climate-controlled art transit curators worldwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Interactive Inquiry Form -->
                    <div class="lg:col-span-7 glass-card rounded-2xl p-8 border border-parianGold/25">
                        <h3 class="font-serif text-2xl text-white tracking-wider mb-6">Submit Private Correspondence</h3>
                        
                        <form id="contact-form" onsubmit="handleFormSubmit(event)" class="space-y-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div class="space-y-2">
                                    <label class="text-[10px] uppercase text-parianMuted tracking-wider font-semibold">Given Name</label>
                                    <input type="text" required class="w-full bg-parianDark/80 border border-parianGold/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-parianGold transition-all">
                                </div>
                                <div class="space-y-2">
                                    <label class="text-[10px] uppercase text-parianMuted tracking-wider font-semibold">Contact Email</label>
                                    <input type="email" required class="w-full bg-parianDark/80 border border-parianGold/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-parianGold transition-all">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div class="space-y-2">
                                    <label class="text-[10px] uppercase text-parianMuted tracking-wider font-semibold">Inquiry Nature</label>
                                    <select id="inquiry-type" class="w-full bg-parianDark/80 border border-parianGold/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-parianGold transition-all">
                                        <option value="Acquisition">Acquisition & Buying Inquiry</option>
                                        <option value="Consignment / Valuation">Consignment / Valuation Estimation</option>
                                        <option value="Private Exhibition">Private Exhibition Request</option>
                                        <option value="General Historical Curio">General Historical Query</option>
                                    </select>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-[10px] uppercase text-parianMuted tracking-wider font-semibold">Subject Matter</label>
                                    <input type="text" id="inquiry-subject" placeholder="e.g. Copeland Apollo Bust" class="w-full bg-parianDark/80 border border-parianGold/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-parianGold transition-all">
                                </div>
                            </div>

                            <div class="space-y-2">
                                <label class="text-[10px] uppercase text-parianMuted tracking-wider font-semibold">Detailed Message</label>
                                <textarea rows="5" required placeholder="Describe the historical piece or specify questions regarding custom delivery..." class="w-full bg-parianDark/80 border border-parianGold/20 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-parianGold transition-all resize-none"></textarea>
                            </div>

                            <!-- Interactive Recaptcha Checkbox (Mocked beautifully with custom UI) -->
                            <div class="flex items-center space-x-3 p-4 bg-parianDark/50 rounded-xl border border-parianGold/10">
                                <input type="checkbox" id="human-check" required class="accent-parianGold w-4 h-4 cursor-pointer">
                                <label for="human-check" class="text-[11px] text-parianMuted cursor-pointer select-none">I confirm I am a serious antique collector and represent an authentic physical entity.</label>
                            </div>

                            <button type="submit" class="w-full py-4 rounded-full bg-gradient-to-r from-parianGold to-parianGold/80 hover:from-parianGoldHover hover:to-parianGold text-parianDark font-bold text-xs tracking-widest uppercase transition-all shadow-xl shadow-parianGold/10">
                                Dispatch Correspondence <i class="fa-solid fa-paper-plane ml-2"></i>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>

    </main>

    <!-- SIDEBAR SLIDE-OVER: INQUIRY CART (To showcase complete acquisition booking system) -->
    <div id="inquiry-sheet" class="fixed inset-y-0 right-0 w-full sm:w-[450px] bg-parianCharcoal border-l border-parianGold/20 z-50 transform translate-x-full transition-transform duration-300 shadow-2xl flex flex-col justify-between">
        
        <!-- Header -->
        <div class="p-6 border-b border-parianGold/10 flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <i class="fa-solid fa-cube text-parianGold text-lg"></i>
                <h3 class="font-serif text-lg tracking-wider text-white">Private Inquiry List</h3>
            </div>
            <button onclick="toggleInquirySheet()" class="p-2 hover:text-parianGold focus:outline-none">
                <i class="fa-solid fa-xmark text-lg"></i>
            </button>
        </div>

        <!-- Scrollable Items Area -->
        <div class="flex-grow p-6 overflow-y-auto space-y-6" id="inquiry-items-container">
            <!-- Dynamic selection rows will be injected by JavaScript -->
        </div>

        <!-- Footer Checkout Section -->
        <div class="p-6 border-t border-parianGold/15 bg-parianDark">
            <div class="flex justify-between items-center mb-6 text-xs">
                <span class="text-parianMuted uppercase tracking-wider">Estimated Collective Value</span>
                <span id="collective-price" class="text-parianGold text-base font-bold">£0 GBP</span>
            </div>

            <!-- Flow Actions -->
            <div class="space-y-3">
                <button onclick="openCartCheckout()" id="cart-cta" class="w-full py-3.5 rounded-full bg-parianGold hover:bg-parianGoldHover text-parianDark font-bold text-xs tracking-widest uppercase transition-all">
                    Initiate Private Inquiries
                </button>
                <button onclick="clearCart()" class="w-full py-2.5 rounded-full bg-transparent text-parianMuted hover:text-parianSoftWhite text-[10px] tracking-wider uppercase transition-all">
                    Clear Selection
                </button>
            </div>
        </div>
    </div>

    <!-- SEMI-TRANSPARENT BACKDROP FOR MODALS -->
    <div id="backdrop" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 hidden" onclick="closeAllModals()"></div>

    <!-- DIALOG MODAL: PIECE DETAIL VIEWER -->
    <div id="detail-modal" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-2xl bg-parianCharcoal border border-parianGold/30 rounded-2xl z-50 hidden p-6 md:p-8 shadow-2xl transition-all">
        <!-- Close Button -->
        <button onclick="closeAllModals()" class="absolute top-4 right-4 text-parianMuted hover:text-parianGold transition-colors">
            <i class="fa-solid fa-xmark text-xl"></i>
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
            <!-- Render Illustration -->
            <div class="w-full aspect-square bg-parianDark/50 rounded-xl p-4 flex justify-center items-center border border-parianGold/10 relative">
                <div class="absolute inset-0 bg-radial-glow opacity-10 rounded-xl"></div>
                <div id="modal-art-container" class="w-[85%] h-[85%] flex items-center justify-center"></div>
            </div>

            <!-- Piece Details -->
            <div class="space-y-4">
                <span id="modal-tag" class="px-3 py-1 rounded-full border border-parianGold/30 text-[9px] uppercase tracking-widest text-parianGold bg-parianDark inline-block">Bust</span>
                <h3 id="modal-name" class="font-serif text-2xl text-white tracking-wider">Apollo Statuary</h3>
                <p id="modal-era" class="text-xs text-parianGold uppercase tracking-wider">Circa 1855 • Copeland & Garrett</p>
                <p id="modal-description" class="text-parianMuted text-xs leading-relaxed font-light">
                    Beautifully sculpted bust with delicate neoclassical detailing, capturing light with typical biscuit warmth.
                </p>

                <!-- Technical Table Spec -->
                <div class="border-t border-b border-parianGold/10 py-3 text-[11px] space-y-1 text-parianMuted">
                    <div class="flex justify-between"><span class="uppercase">Maker</span><span class="font-semibold text-parianSoftWhite" id="modal-spec-maker">Copeland</span></div>
                    <div class="flex justify-between"><span class="uppercase">Material</span><span class="font-semibold text-parianSoftWhite">Biscuit Parian Ware</span></div>
                    <div class="flex justify-between"><span class="uppercase">Dimensions</span><span class="font-semibold text-parianSoftWhite" id="modal-spec-dims">14.5" Height</span></div>
                    <div class="flex justify-between"><span class="uppercase">Condition</span><span class="font-semibold text-[#82e0aa]">Excellent (Unrestored)</span></div>
                </div>

                <div class="flex justify-between items-center pt-2">
                    <span id="modal-price" class="text-parianGold text-lg font-bold">£1,450 GBP</span>
                    <button id="modal-cart-btn" onclick="" class="px-5 py-2.5 rounded-full bg-parianGold hover:bg-parianGoldHover text-parianDark text-xs font-bold uppercase tracking-wider transition-all">
                        Request Viewing
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- MOCK NOTIFICATION / STATUS POPUP (Eliminates Alert requirement) -->
    <div id="notification-toast" class="fixed bottom-6 right-6 px-6 py-4 rounded-xl border border-parianGold/30 bg-parianCharcoal text-parianSoftWhite text-xs tracking-wider font-semibold uppercase flex items-center space-x-3 z-50 transform translate-y-24 opacity-0 transition-all duration-300 shadow-2xl">
        <i class="fa-solid fa-circle-check text-parianGold text-base"></i>
        <span id="notification-text">Piece added to Inquiry List!</span>
    </div>

    <!-- FOOTER (Fully integrated aesthetic closing) -->
    <footer class="border-t border-parianGold/10 bg-parianDark py-12 relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Branding info -->
                <div class="space-y-4 md:col-span-2">
                    <span class="font-serif text-lg tracking-[0.3em] text-parianGold uppercase">Antique Parian</span>
                    <p class="text-parianMuted text-xs leading-relaxed max-w-sm">
                        Honoring the intricate history, delicate beauty, and classical revival of Victorian biscuit porcelain sculptures. Direct London consignment curation.
                    </p>
                    <div class="flex space-x-4 pt-2">
                        <a href="#" class="p-2.5 rounded-full border border-parianGold/10 text-parianMuted hover:text-parianGold hover:border-parianGold transition-all"><i class="fa-brands fa-pinterest-p"></i></a>
                        <a href="#" class="p-2.5 rounded-full border border-parianGold/10 text-parianMuted hover:text-parianGold hover:border-parianGold transition-all"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="p-2.5 rounded-full border border-parianGold/10 text-parianMuted hover:text-parianGold hover:border-parianGold transition-all"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>

                <!-- Fast Links -->
                <div class="space-y-3">
                    <h4 class="font-serif text-parianGold text-xs uppercase tracking-widest font-semibold">Salon Navigation</h4>
                    <ul class="text-xs text-parianMuted space-y-2 uppercase tracking-wider">
                        <li><a href="#" onclick="switchTab('hero-section')" class="hover:text-parianGold transition-colors">Return Home</a></li>
                        <li><a href="#" onclick="switchTab('about-section')" class="hover:text-parianGold transition-colors">Historical Craft</a></li>
                        <li><a href="#" onclick="switchTab('catalog-section')" class="hover:text-parianGold transition-colors">The Vault Collection</a></li>
                        <li><a href="#" onclick="switchTab('simulator-section')" class="hover:text-parianGold transition-colors">Exhibition Studio</a></li>
                    </ul>
                </div>

                <!-- Newsletter / Sign up -->
                <div class="space-y-3">
                    <h4 class="font-serif text-parianGold text-xs uppercase tracking-widest font-semibold">Consignment Releases</h4>
                    <p class="text-parianMuted text-xs">Receive private listings of new acquisitions before public releases.</p>
                    <div class="flex space-x-1.5 pt-1">
                        <input type="email" placeholder="Your email address" class="bg-parianCharcoal border border-parianGold/10 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-parianGold w-full">
                        <button onclick="showNotification('Subscribed to private catalog!')" class="p-2 bg-parianGold hover:bg-parianGoldHover rounded-full text-parianDark transition-all"><i class="fa-solid fa-chevron-right text-xs"></i></button>
                    </div>
                </div>
            </div>

            <!-- Copyright Line & Final inspired signature -->
            <div class="border-t border-parianGold/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-parianMuted tracking-widest uppercase">
                <span>© 2026 Antique Parian Salon. All Private Rights Reserved.</span>
                <span class="mt-2 sm:mt-0">Designed & Curated with Royal Academy Aesthetics</span>
            </div>
        </div>
    </footer>


    <!-- ========================================== -->
    <!-- MASTER LOGIC / INTERACTIVE CONTROLLERS -->
    <!-- ========================================== -->
    <script>
        // High fidelity vector representations for robust in-site rendering
        const SVGS = {
            apollo: `<svg class="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M70,165 L130,165 L125,185 L75,185 Z" fill="#fcf9f2" stroke="#e4ded5" stroke-width="0.5"/>
                <ellipse cx="100" cy="165" rx="30" ry="6" fill="#ded7cb"/>
                <path d="M85,130 L115,130 L110,165 L90,165 Z" fill="#fcf9f2" opacity="0.9"/>
                <path d="M50,115 C55,100 68,90 75,95 C82,100 85,108 85,120 C85,125 75,132 70,135 C55,132 45,125 50,115 Z" fill="#fcf9f2"/>
                <path d="M150,115 C145,100 132,90 125,95 C118,100 115,108 115,120 C115,125 125,132 130,135 C145,132 155,125 150,115 Z" fill="#fcf9f2"/>
                <path d="M60,115 Q100,140 140,115 C145,122 135,135 100,142 C65,135 55,122 60,115 Z" fill="#fcf9f2"/>
                <path d="M52,112 Q75,130 95,115 Q125,100 148,112 C135,130 65,130 52,112 Z" fill="#e9e5dc" stroke="#c0b8aa" stroke-width="0.5"/>
                <path d="M68,118 Q100,133 132,118" fill="none" stroke="#b0a89a" stroke-width="0.75"/>
                <path d="M90,85 L110,85 L112,105 L88,105 Z" fill="#fcf9f2"/>
                <path d="M88,105 C95,112 105,112 112,105 Z" fill="#ded7cb"/>
                <path d="M82,58 C82,45 100,35 118,45 C122,55 120,75 115,82 C108,88 95,88 88,82 C82,75 82,65 82,58 Z" fill="#fcf9f2"/>
                <path d="M102,48 C115,48 118,65 115,82 C102,88 92,75 102,48 Z" fill="#ffffff" opacity="0.5"/>
                <path d="M80,55 Q74,48 84,40 Q94,32 110,36 Q126,40 120,52 Q115,58 118,62" fill="none" stroke="#cfc9bf" stroke-width="3"/>
                <path d="M100,48 L100,68 L104,70" fill="none" stroke="#a49c8f" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M96,77 Q100,75 104,77 Q100,80 96,77 Z" fill="#b0a89a" opacity="0.8"/>
            </svg>`,
            veiled: `<svg class="w-full h-full" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
                <path d="M65,190 L135,190 L130,225 L70,225 Z" fill="#fdfbfa" stroke="#cfc9bf" stroke-width="0.5"/>
                <ellipse cx="100" cy="190" rx="35" ry="6" fill="#ded7cb" opacity="0.8"/>
                <rect x="75" y="150" width="50" height="40" fill="#fdfbfa" opacity="0.9"/>
                <path d="M45,145 C45,130 55,115 70,118 C85,120 100,122 115,118 C130,115 140,130 140,145 C140,170 120,180 100,180 C80,180 45,170 45,145 Z" fill="#fdfbfa"/>
                <path d="M78,65 C78,45 92,30 105,32 C118,34 122,50 122,70 C122,88 115,108 100,108 C85,108 78,85 78,65 Z" fill="#fdfbfa"/>
                <path d="M85,32 Q95,45 90,85 T90,140" fill="none" stroke="rgba(196,186,170,0.5)" stroke-width="1.5"/>
                <path d="M93,31 Q100,45 100,85 T100,140" fill="none" stroke="rgba(196,186,170,0.6)" stroke-width="2"/>
                <path d="M103,31 Q105,45 108,85 T110,140" fill="none" stroke="rgba(196,186,170,0.5)" stroke-width="2.5"/>
                <path d="M82,55 Q100,68 118,55" fill="none" stroke="#d5cebf" stroke-width="0.75" opacity="0.8"/>
            </svg>`,
            clio: `<svg class="w-full h-full" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
                <path d="M60,170 L140,170 L135,200 L65,200 Z" fill="#fcf9f5" stroke="#cfc9bf" stroke-width="0.5"/>
                <ellipse cx="100" cy="170" rx="40" ry="8" fill="#ded7cb"/>
                <path d="M40,130 C45,110 50,100 65,100 Q100,110 135,100 C150,100 155,110 160,130 C160,150 130,165 100,165 C70,165 40,150 40,130 Z" fill="#fcf9f5"/>
                <!-- Laurel wreath details -->
                <path d="M80,50 Q100,38 120,50" fill="none" stroke="#c5a880" stroke-width="2.5"/>
                <!-- Head -->
                <path d="M80,68 C80,52 95,42 110,48 C118,54 120,70 118,85 C110,95 90,95 82,85 Z" fill="#fcf9f5"/>
                <path d="M90,85 C95,92 105,92 110,85 Z" fill="#ded7cb"/>
                <path d="M98,58 L98,75 L102,77" fill="none" stroke="#a49c8f" stroke-width="1.5" stroke-linecap="round"/>
            </svg>`,
            psyche: `<svg class="w-full h-full" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
                <path d="M60,175 L140,175 L135,205 L65,205 Z" fill="#faf6f0" stroke="#cfc9bf" stroke-width="0.5"/>
                <ellipse cx="100" cy="175" rx="40" ry="8" fill="#ded7cb"/>
                <!-- Wing silhouettes (Cupid & Psyche motif) -->
                <path d="M45,80 C30,40 50,20 65,40 C75,55 70,85 70,85 Z" fill="#faf6f0" opacity="0.6"/>
                <path d="M155,80 C170,40 150,20 135,40 C125,55 130,85 130,85 Z" fill="#faf6f0" opacity="0.6"/>
                <!-- Two interlinked classical busts -->
                <path d="M60,130 C60,110 90,110 90,130 C90,150 60,155 60,130 Z" fill="#faf6f0"/>
                <path d="M110,125 C110,105 140,105 140,125 C140,145 110,150 110,125 Z" fill="#ffffff"/>
                <path d="M70,95 C70,85 85,75 90,85 C95,95 85,105 70,95 Z" fill="#faf6f0"/>
                <path d="M115,90 C115,80 130,70 135,80 C140,90 130,100 115,90 Z" fill="#ffffff"/>
            </svg>`
        };

        // Static Master Database for the Antique Collection Gallery
        const COLLECTION = [
            {
                id: 'apollo',
                name: "Apollo Belvedere Bust",
                category: "Bust",
                maker: "Copeland & Garrett",
                era: "Circa 1855",
                price: 1450,
                height: "14.5\" Height",
                description: "Extremely well-preserved classical rendering of Apollo on its original fluted socle. Exhibits incredible depth of facial structure under accent museum lighting.",
                svgKey: "apollo"
            },
            {
                id: 'veiled',
                name: "The Veiled Bride",
                category: "Veiled",
                maker: "Minton Ceramic Works",
                era: "Circa 1862",
                price: 2800,
                height: "16.0\" Height",
                description: "An absolute masterwork of sculptural porcelain, featuring incredibly delicate translucent layers portraying a soft bridal veil. Truly premium artifact.",
                svgKey: "veiled"
            },
            {
                id: 'clio',
                name: "Clio: Muse of History",
                category: "Figure",
                maker: "Robinson & Leadbeater",
                era: "Circa 1878",
                price: 1150,
                height: "15.0\" Height",
                description: "Delightful allegorical sculpture of Clio, detailed holding a golden brass historical parchment stylus. Complete and flawless condition.",
                svgKey: "clio"
            },
            {
                id: 'psyche',
                name: "Psyche Revived Figure",
                category: "Figure",
                maker: "Copeland Works",
                era: "Circa 1851",
                price: 3400,
                height: "18.5\" Height",
                description: "Highly sought after double-statue commemorating classical mythological figures, prepared initially for exhibition display at London Crystal Palace.",
                svgKey: "psyche"
            },
            {
                id: 'sapho',
                name: "Sappho of Lesbos",
                category: "Bust",
                maker: "Robinson & Leadbeater",
                era: "Circa 1884",
                price: 950,
                height: "12.0\" Height",
                description: "Delicately crowned with laurel wreaths, Sapphire exudes historical poetry and musical neoclassical grandeur, fitted onto a basalt dark composite socle.",
                svgKey: "clio" // Fallback to clio profile
            },
            {
                id: 'vestal',
                name: "The Vestal Virgin",
                category: "Veiled",
                maker: "Minton Ceramic Works",
                era: "Circa 1860",
                price: 2100,
                height: "15.5\" Height",
                description: "Intricately detailed ceremonial veiled priestess. The unglazed finish replicates Carrara marble perfectly with unique matte light absorption.",
                svgKey: "veiled" // Fallback to veiled profile
            }
        ];

        // Global App States
        let currentTab = 'hero-section';
        let currentSimSculpture = 'apollo';
        let currentSimPedestal = 'carrara';
        let currentSimLightColor = 'warm';
        let inquiryCart = [];

        // ON LOAD INITIALIZER
        window.onload = function() {
            renderCatalog();
            setSimSculpture('apollo');
            setSimPedestal('carrara');
            setSimLightColor('warm');
            updateCartUI();
        };

        // Tab Switcher Controller
        function switchTab(tabId) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.add('hidden');
            });
            // Show selected tab
            document.getElementById(tabId).classList.remove('hidden');
            
            // Highlight nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('border-parianGold', 'text-parianGold');
                link.classList.add('border-transparent', 'text-parianSoftWhite/85');
            });
            const activeNav = document.getElementById(`nav-${tabId}`);
            if (activeNav) {
                activeNav.classList.remove('border-transparent', 'text-parianSoftWhite/85');
                activeNav.classList.add('border-parianGold', 'text-parianGold');
            }

            currentTab = tabId;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Toggle Mobile Navigation Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                icon.className = 'fa-solid fa-xmark text-xl';
            } else {
                menu.classList.add('hidden');
                icon.className = 'fa-solid fa-bars text-xl';
            }
        }

        // --- CATALOG RENDERING & FILTER LOGIC ---
        let selectedCategory = 'All';

        function filterCategory(category) {
            selectedCategory = category;
            
            // Update filter tabs styling
            document.querySelectorAll('#filter-container button').forEach(btn => {
                btn.classList.remove('active', 'bg-parianGold', 'text-parianDark');
                btn.classList.add('border-parianGold/25', 'text-parianSoftWhite');
            });
            
            // Find active tab and style it
            const activeTab = Array.from(document.querySelectorAll('#filter-container button')).find(btn => btn.innerText.includes(category === 'All' ? 'All' : category));
            if (activeTab) {
                activeTab.classList.add('active', 'bg-parianGold', 'text-parianDark');
                activeTab.classList.remove('border-parianGold/25', 'text-parianSoftWhite');
            }

            renderCatalog();
        }

        function filterCatalog() {
            renderCatalog();
        }

        function sortCatalog() {
            renderCatalog();
        }

        function renderCatalog() {
            const searchVal = document.getElementById('catalog-search').value.toLowerCase();
            const sortBy = document.getElementById('catalog-sort').value;
            const grid = document.getElementById('catalog-grid');
            const emptyState = document.getElementById('catalog-empty');

            // Apply Filters
            let filtered = COLLECTION.filter(item => {
                const matchesCategory = (selectedCategory === 'All') || (item.category === selectedCategory);
                const matchesSearch = item.name.toLowerCase().includes(searchVal) || item.maker.toLowerCase().includes(searchVal) || item.description.toLowerCase().includes(searchVal);
                return matchesCategory && matchesSearch;
            });

            // Apply Sort
            filtered.sort((a, b) => {
                if (sortBy === 'name') {
                    return a.name.localeCompare(b.name);
                } else if (sortBy === 'price-asc') {
                    return a.price - b.price;
                } else if (sortBy === 'price-desc') {
                    return b.price - a.price;
                } else if (sortBy === 'era') {
                    return a.era.localeCompare(b.era);
                }
                return 0;
            });

            // Update DOM
            grid.innerHTML = '';
            if (filtered.length === 0) {
                grid.classList.add('hidden');
                emptyState.classList.remove('hidden');
            } else {
                grid.classList.remove('hidden');
                emptyState.classList.add('hidden');

                filtered.forEach(item => {
                    const card = document.createElement('div');
                    card.className = "group glass-card rounded-2xl overflow-hidden border border-parianGold/15 hover:border-parianGold/40 transition-all duration-300 flex flex-col justify-between shadow-lg";
                    
                    card.innerHTML = `
                        <!-- SVG Art Box -->
                        <div class="relative aspect-square bg-parianDark/40 p-8 flex items-center justify-center border-b border-parianGold/10 overflow-hidden">
                            <div class="absolute inset-0 bg-gradient-to-t from-parianCharcoal to-transparent opacity-60"></div>
                            <div class="w-4/5 h-4/5 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                                ${SVGS[item.svgKey] || SVGS['apollo']}
                            </div>
                            <!-- Inline Gold circular aura behind illustration -->
                            <div class="absolute w-[70%] h-[70%] rounded-full border border-dashed border-parianGold/5 pointer-events-none group-hover:border-parianGold/20 transition-all duration-700"></div>
                        </div>

                        <!-- Info details -->
                        <div class="p-6 space-y-4 flex-grow flex flex-col justify-between">
                            <div class="space-y-1">
                                <div class="flex items-center justify-between">
                                    <span class="text-[9px] uppercase tracking-widest text-parianGold font-bold">${item.category} Statuary</span>
                                    <span class="text-[10px] text-parianMuted font-light">${item.era}</span>
                                </div>
                                <h3 class="font-serif text-lg text-white group-hover:text-parianGold transition-colors tracking-wide">${item.name}</h3>
                                <p class="text-parianMuted text-xs font-light line-clamp-2 mt-1 leading-relaxed">${item.description}</p>
                            </div>

                            <div class="pt-4 border-t border-parianGold/10 flex items-center justify-between">
                                <div class="flex flex-col">
                                    <span class="text-[8px] uppercase tracking-widest text-parianMuted">Acquisition Est.</span>
                                    <span class="text-parianGold font-bold text-sm">£${item.price.toLocaleString()} GBP</span>
                                </div>
                                
                                <div class="flex items-center space-x-2">
                                    <button onclick="openInspectModal('${item.id}')" class="p-2 border border-parianGold/20 hover:border-parianGold/50 rounded-full hover:bg-parianDark text-parianSoftWhite hover:text-parianGold text-xs transition-colors" title="Inspect Specification Details">
                                        <i class="fa-solid fa-eye"></i>
                                    </button>
                                    <button onclick="addPieceToCart('${item.id}')" class="px-3.5 py-2 rounded-full bg-parianGold hover:bg-parianGoldHover text-parianDark text-[10px] font-bold tracking-widest uppercase transition-all">
                                        Inquire
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                    grid.appendChild(card);
                });
            }
        }

        // --- THE EXHIBITION SIMULATOR CORE FUNCTIONS ---
        function setSimSculpture(sculptureKey) {
            currentSimSculpture = sculptureKey;
            
            // Set Active Button styling
            document.querySelectorAll('.sim-sculpture-btn').forEach(btn => {
                btn.classList.remove('active', 'border-parianGold', 'bg-parianGold/10');
                btn.classList.add('border-parianGold/10', 'text-parianSoftWhite/70');
            });
            const activeBtn = document.getElementById(`sim-btn-${sculptureKey}`);
            if (activeBtn) {
                activeBtn.classList.add('active', 'border-parianGold', 'bg-parianGold/10');
                activeBtn.classList.remove('border-parianGold/10', 'text-parianSoftWhite/70');
            }

            // Sync Database Details to Simulator Panel
            const dbPiece = COLLECTION.find(i => i.id === sculptureKey);
            if (dbPiece) {
                document.getElementById('sim-title').innerText = dbPiece.name;
                document.getElementById('sim-era').innerText = `${dbPiece.era} • ${dbPiece.maker}`;
                document.getElementById('sim-height').innerText = dbPiece.height;
                document.getElementById('sim-price').innerText = `£${dbPiece.price.toLocaleString()} GBP`;
            }

            // Inject Sculpture SVG inside wrapper
            const container = document.getElementById('sim-sculpture-wrapper');
            container.innerHTML = SVGS[sculptureKey] || SVGS['apollo'];
            
            updateSimulatorLights();
        }

        function setSimPedestal(pedestalType) {
            currentSimPedestal = pedestalType;
            
            // Set active button
            document.querySelectorAll('.sim-pedestal-btn').forEach(btn => {
                btn.classList.remove('active', 'border-parianGold', 'text-white');
                btn.classList.add('border-parianGold/15', 'text-parianMuted');
            });
            document.getElementById(`ped-btn-${pedestalType}`).classList.add('active', 'border-parianGold', 'text-white');

            const pedTop = document.getElementById('ped-top');
            const pedShaft = document.getElementById('ped-shaft');
            const pedFluting = document.getElementById('ped-fluting');
            const pedBase = document.getElementById('ped-base');

            // Apply different color schemes directly onto the vector pedestal elements
            if (pedestalType === 'carrara') {
                pedTop.setAttribute('fill', '#ffffff');
                pedTop.setAttribute('stroke', '#c9c3b8');
                pedShaft.setAttribute('fill', '#f4eee3');
                pedFluting.setAttribute('stroke', '#d5cebf');
                pedBase.setAttribute('fill', '#e8e2d7');
            } else if (pedestalType === 'imperial') {
                pedTop.setAttribute('fill', '#d4af37');
                pedTop.setAttribute('stroke', '#bda890');
                pedShaft.setAttribute('fill', '#2e2617');
                pedFluting.setAttribute('stroke', '#d4af37');
                pedBase.setAttribute('fill', '#453a25');
            } else if (pedestalType === 'basalt') {
                pedTop.setAttribute('fill', '#1a1b1b');
                pedTop.setAttribute('stroke', '#333');
                pedShaft.setAttribute('fill', '#262828');
                pedFluting.setAttribute('stroke', '#111111');
                pedBase.setAttribute('fill', '#1c1d1d');
            }
        }

        function setSimLightColor(color) {
            currentSimLightColor = color;
            updateSimulatorLights();
        }

        function updateSimulatorLights() {
            const intensity = document.getElementById('light-intensity').value;
            const angle = document.getElementById('light-angle').value;
            
            // Update UI slider labels
            document.getElementById('light-intensity-label').innerText = `${intensity}%`;
            document.getElementById('light-angle-label').innerText = `${angle}°`;

            // Atmospheric Glow overlay color & opacity calculation
            const glow = document.getElementById('sim-light-glow');
            let colorHex = '#fce7c0'; // Warm
            if (currentSimLightColor === 'white') colorHex = '#ffffff';
            if (currentSimLightColor === 'blue') colorHex = '#cbdff7';

            glow.style.backgroundColor = colorHex;
            glow.style.opacity = intensity / 130;
            
            // Adjust position of spotlight based on light angle
            const offsetMultiplier = 2.5;
            glow.style.transform = `translate(calc(-50% + ${angle * offsetMultiplier}px), -50%)`;

            // Apply shadow direction shift to the vector statue display
            const statueWrapper = document.getElementById('sim-sculpture-wrapper');
            const shadowX = -angle / 3;
            const shadowBlur = 30 - (intensity / 5);
            statueWrapper.style.filter = `drop-shadow(${shadowX}px 18px ${shadowBlur}px rgba(255, 255, 255, ${intensity/300}))`;
        }

        // Add selected statue from the interactive room into standard checkout
        function addSelectedSimToCart() {
            addPieceToCart(currentSimSculpture);
        }

        // Open specific spec inside detail modal
        function openExhibitionDetails() {
            openInspectModal(currentSimSculpture);
        }

        // --- SPEC DETAILS MODAL SYSTEM ---
        function openInspectModal(pieceId) {
            const item = COLLECTION.find(i => i.id === pieceId);
            if (!item) return;

            document.getElementById('modal-name').innerText = item.name;
            document.getElementById('modal-era').innerText = `${item.era} • ${item.maker}`;
            document.getElementById('modal-description').innerText = item.description;
            document.getElementById('modal-tag').innerText = `${item.category} Statuary`;
            document.getElementById('modal-spec-maker').innerText = item.maker;
            document.getElementById('modal-spec-dims').innerText = item.height;
            document.getElementById('modal-price').innerText = `£${item.price.toLocaleString()} GBP`;
            
            // Inject correct SVG illustration
            document.getElementById('modal-art-container').innerHTML = SVGS[item.svgKey] || SVGS['apollo'];

            // Set Action Button functionality
            const actionBtn = document.getElementById('modal-cart-btn');
            actionBtn.setAttribute('onclick', `addPieceToCart('${item.id}'); closeAllModals();`);

            // Show Modals
            document.getElementById('detail-modal').classList.remove('hidden');
            document.getElementById('backdrop').classList.remove('hidden');
        }

        function closeAllModals() {
            document.getElementById('detail-modal').classList.add('hidden');
            document.getElementById('backdrop').classList.add('hidden');
        }


        // --- INQUIRY CART & ACQUISITION MANAGEMENT ---
        function addPieceToCart(pieceId) {
            const item = COLLECTION.find(i => i.id === pieceId);
            if (!item) return;

            // Check if already in cart
            if (inquiryCart.some(i => i.id === pieceId)) {
                showNotification("Piece is already on inquiry list!");
                return;
            }

            inquiryCart.push(item);
            updateCartUI();
            showNotification(`Added ${item.name} to List!`);
        }

        function removeCartItem(pieceId) {
            inquiryCart = inquiryCart.filter(item => item.id !== pieceId);
            updateCartUI();
            showNotification("Removed item from inquiry list");
        }

        function clearCart() {
            inquiryCart = [];
            updateCartUI();
            showNotification("Inquiry selection cleared");
        }

        function updateCartUI() {
            const container = document.getElementById('inquiry-items-container');
            const cartDot = document.getElementById('cart-dot');
            const cartCount = document.getElementById('cart-count');
            const collectivePriceText = document.getElementById('collective-price');

            if (inquiryCart.length === 0) {
                cartDot.classList.add('hidden');
                cartCount.classList.add('hidden');
                container.innerHTML = `
                    <div class="text-center py-16 text-parianMuted space-y-4">
                        <i class="fa-solid fa-cube text-3xl opacity-35 block"></i>
                        <p class="text-xs uppercase tracking-wider">Your Inquiry List is Empty</p>
                        <p class="text-[11px] leading-relaxed font-light">Explore our historical catalog or interactive studio to select classical pieces.</p>
                        <button onclick="toggleInquirySheet(); switchTab('catalog-section');" class="mt-4 px-4 py-2 border border-parianGold/30 text-parianGold text-[10px] font-bold tracking-widest uppercase rounded-full">Explore Vault</button>
                    </div>
                `;
                collectivePriceText.innerText = `£0 GBP`;
            } else {
                cartDot.classList.remove('hidden');
                cartCount.classList.remove('hidden');
                cartCount.innerText = inquiryCart.length;

                container.innerHTML = '';
                let total = 0;

                inquiryCart.forEach(item => {
                    total += item.price;
                    const itemRow = document.createElement('div');
                    itemRow.className = "flex items-center justify-between p-4 bg-parianDark/60 rounded-xl border border-parianGold/10";
                    itemRow.innerHTML = `
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-parianCharcoal rounded flex items-center justify-center border border-parianGold/20 p-1">
                                ${SVGS[item.svgKey] || SVGS['apollo']}
                            </div>
                            <div>
                                <h4 class="font-serif text-sm text-white">${item.name}</h4>
                                <p class="text-[10px] text-parianGold">${item.era}</p>
                            </div>
                        </div>
                        <div class="text-right flex flex-col items-end space-y-1">
                            <span class="text-parianGold font-bold text-xs">£${item.price.toLocaleString()}</span>
                            <button onclick="removeCartItem('${item.id}')" class="text-red-400 hover:text-red-500 text-[10px] uppercase tracking-wider">Remove</button>
                        </div>
                    `;
                    container.appendChild(itemRow);
                });

                collectivePriceText.innerText = `£${total.toLocaleString()} GBP`;
            }
        }

        // Toggle Sidebar Cart Drawer
        function toggleInquirySheet() {
            const sheet = document.getElementById('inquiry-sheet');
            if (sheet.classList.contains('translate-x-full')) {
                sheet.classList.remove('translate-x-full');
            } else {
                sheet.classList.add('translate-x-full');
            }
        }

        // Checkout Cart Trigger (Links selection directly to inquiry form)
        function openCartCheckout() {
            if (inquiryCart.length === 0) {
                showNotification("Add some items to inquire first!");
                return;
            }
            toggleInquirySheet();
            switchTab('contact-section');
            
            // Auto fill subject line with selection
            const listNames = inquiryCart.map(item => item.name).join(', ');
            prefillInquiry(`Acquisition of: ${listNames}`);
        }

        function prefillInquiry(subjectText) {
            const field = document.getElementById('inquiry-subject');
            if (field) {
                field.value = subjectText;
            }
        }

        // --- CONTACT DISPATCH AND VALUATION FORM HANDLER ---
        function handleFormSubmit(event) {
            event.preventDefault();
            
            // Display Custom Success Feedback Modally (Eliminating bad alerts)
            showNotification("Dispatching Correspondence...");
            
            setTimeout(() => {
                // Clear selection states & display beautiful notification
                inquiryCart = [];
                updateCartUI();
                event.target.reset();
                showNotification("Correspondence safely dispatched! Our Mayfair Curator will reach out shortly.");
            }, 1200);
        }

        // Custom Toast Notification System
        let toastTimeout;
        function showNotification(message) {
            const toast = document.getElementById('notification-toast');
            const text = document.getElementById('notification-text');
            
            clearTimeout(toastTimeout);
            text.innerText = message;
            
            // Pop Toast up smoothly
            toast.classList.remove('translate-y-24', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');

            // Slide back down
            toastTimeout = setTimeout(() => {
                toast.classList.remove('translate-y-0', 'opacity-100');
                toast.classList.add('translate-y-24', 'opacity-0');
            }, 4500);
        }
    </script>
</body>
</html>
7
import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Layers, 
  BarChart3, 
  Cpu, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  Clock, 
  Maximize2, 
  Play, 
  ChevronRight, 
  ChevronLeft,
  Search,
  BookOpen,
  PieChart,
  Briefcase,
  GitBranch,
  Settings,
  X,
  Sparkles,
  Info,
  CheckCircle,
  TrendingDown
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState('landing'); // 'landing' or 'deck'
  const [strategyValue, setStrategyValue] = useState(60);
  const [selectedTechPillar, setSelectedTechPillar] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Real-time tick for UI clocks (seen in slide 16 of inspiration)
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const colorPalette = {
    primary: '#8B1E1F',     // Crimson Red
    primaryDark: '#5C0E0F', // Deep Burgundy
    accent: '#D9383A',      // High-energy Red
    bgLight: '#FAF8F7',     // Pearl Ivory Soft
    bgCard: '#FFFFFF',      // Pure White
    textDark: '#1E1515',    // Warm Charcoal
    textMuted: '#7A6E6D',   // Muted Taupe Grey
  };

  const slidesData = [
    {
      id: "01",
      tag: "INNOVATION",
      title: "Value Creation & Platform Engine",
      subtitle: "创新驱动 · 价值共生",
      desc: "Architecting the next standard of corporate innovation ecosystems. Bridging high-performance execution with adaptive strategic assets.",
      metrics: [
        { label: "Active Nodes", value: "2,000+", change: "+14%" },
        { label: "R&D Factories", value: "MEG-XI", sub: "Global Hub" },
        { label: "Est. Value", value: "$4.8B", change: "Top Tier" }
      ],
      type: "intro"
    },
    {
      id: "02",
      tag: "BUSINESS SEGMENTS",
      title: "Strategic Portfolio Layout",
      subtitle: "业务版块划分",
      desc: "Multi-layered corporate architecture designed to generate sustainable yields across technology, operations, and infrastructure channels.",
      metrics: [
        { label: "Tech Synergy", value: "60%", type: "gauge" },
        { label: "Market Spread", value: "82%", type: "gauge" },
        { label: "Global Reach", value: "34+", sub: "Regions Active" }
      ],
      type: "portfolio"
    },
    {
      id: "03",
      tag: "MARKET LAYOUT",
      title: "Global Capital & Financing Distribution",
      subtitle: "首次公募融资与市场布局",
      desc: "Diversified capital structures powered by high-liquidity financial instruments and decentralized validation networks.",
      metrics: [
        { label: "Financing Target", value: "$1.2B", status: "Subscribed" },
        { label: "Institutional Allocation", value: "74%", trend: "up" },
        { label: "Retail Base Growth", value: "+342%", trend: "up" }
      ],
      type: "market"
    },
    {
      id: "04",
      tag: "CORE TECHNOLOGY",
      title: "The Stratagem Neural Architecture",
      subtitle: "核心技术图谱与认知矩阵",
      desc: "Our high-density computing chip integrates complex neural nodes directly into local edge matrices, achieving instant latency drops.",
      metrics: [
        { label: "Computing Power", value: "870 TFLOPs", limit: "920 Max" },
        { label: "Neural Pathways", value: "8.4B", active: "99.4%" },
        { label: "Latency Rating", value: "<1.2ms", grade: "Class A" }
      ],
      type: "technology"
    },
    {
      id: "05",
      tag: "R&D RESULTS",
      title: "Pioneering Patents & Scalability Ratios",
      subtitle: "研发投入与高价值成果",
      desc: "Quantifiable breakthroughs tracking strategic investments against globally patented microarchitectures and verified frameworks.",
      metrics: [
        { label: "Patent Count", value: "142 Active", state: "Approved" },
        { label: "Conversion Rate", value: "82%", sub: "Industry High" },
        { label: "Annual Re-investment", value: "24.5%", target: "30% by 2027" }
      ],
      type: "results"
    },
    {
      id: "06",
      tag: "TALENT STRATEGY",
      title: "Global Elite Leadership Alignment",
      subtitle: "人才战略与全球协同组织",
      desc: "Fostering distributed operational excellence with micro-autonomous corporate teams operating under uniform core values.",
      metrics: [
        { label: "Global Headcount", value: "4,700+", location: "6 Hubs" },
        { label: "Talent Retention Ratio", value: "94.2%", standard: "Top 1%" },
        { label: "Co-creation Projects", value: "480+", status: "Active" }
      ],
      type: "talent"
    }
  ];

  // Helper mock charts coordinates
  const lineChartPoints = "10,90 40,75 80,82 120,45 160,50 200,25 240,30 280,10 320,15 360,5";
  const barHeights = [45, 75, 90, 60, 35, 80, 110, 95, 70, 85, 120, 95];

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <div className="min-h-screen font-sans flex flex-col selection:bg-[#8B1E1F] selection:text-white" style={{ backgroundColor: colorPalette.bgLight, color: colorPalette.textDark }}>
      
      {/* GLOWING AMBIENT DECORATIONS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#8B1E1F]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-[800px] right-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#D9383A]/3 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[200px] left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#8B1E1F]/4 to-transparent blur-3xl pointer-events-none" />

      {/* TOP NOTIFICATION RIBBON */}
      <div className="bg-[#1A1515] text-white py-2 px-4 text-xs tracking-wider font-mono flex justify-between items-center border-b border-[#8B1E1F]/30 relative z-50">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#D9383A] rounded-full animate-pulse"></span>
          <span>IRENA CORPORATE PLATFORM v4.2 // LIVE PORTFOLIO STATE</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span>LATENCY: 0.89MS</span>
          <span>SYSTEM INTEGRITY: 99.98%</span>
          <span className="text-[#D9383A]">GLOBAL NODE: IN-092</span>
        </div>
      </div>

      {/* STICKY GLASS NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#8B1E1F]/10 px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Brand matching the clean, red corporate aesthetic */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setViewMode('landing')}>
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-[#8B1E1F] to-[#5C0E0F] rounded-lg transform rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90 duration-500">
                <div className="w-3.5 h-3.5 border-2 border-white rounded-sm transform -rotate-45" />
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#D9383A] rounded-full border border-white animate-ping" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black tracking-tight text-[#1E1515]">IRENA</span>
                <span className="text-xs font-mono px-1.5 py-0.5 bg-[#8B1E1F]/10 text-[#8B1E1F] rounded font-bold">CORE</span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-[#7A6E6D] font-medium leading-none">Innovation Strategy</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <button 
              onClick={() => setViewMode('landing')}
              className={`pb-1 transition-colors relative ${viewMode === 'landing' ? 'text-[#8B1E1F] font-bold' : 'text-[#7A6E6D] hover:text-[#1E1515]'}`}
            >
              Enterprise Hub
              {viewMode === 'landing' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8B1E1F] rounded" />}
            </button>
            <button 
              onClick={() => { setViewMode('deck'); setActiveSlideIndex(0); }}
              className={`pb-1 transition-colors relative ${viewMode === 'deck' ? 'text-[#8B1E1F] font-bold' : 'text-[#7A6E6D] hover:text-[#1E1515]'}`}
            >
              Interactive Deck Viewer
              {viewMode === 'deck' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8B1E1F] rounded" />}
            </button>
            <a href="#sectors" className="text-[#7A6E6D] hover:text-[#1E1515] transition-colors">Business Segments</a>
            <a href="#stratagem" className="text-[#7A6E6D] hover:text-[#1E1515] transition-colors">Core R&D</a>
            <a href="#talent" className="text-[#7A6E6D] hover:text-[#1E1515] transition-colors">Global Synergy</a>
          </nav>

          {/* Call to Actions & Switchers */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setViewMode(viewMode === 'landing' ? 'deck' : 'landing')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-[#8B1E1F]/20 text-[#8B1E1F] bg-[#8B1E1F]/5 hover:bg-[#8B1E1F]/10 transition-all active:scale-95"
            >
              {viewMode === 'landing' ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-[#8B1E1F]" />
                  <span>PRESENTATION DECK</span>
                </>
              ) : (
                <>
                  <Compass className="w-3.5 h-3.5" />
                  <span>LANDING INTERFACE</span>
                </>
              )}
            </button>

            <a 
              href="#contact"
              className="px-5 py-2.5 text-xs font-semibold rounded-full bg-gradient-to-r from-[#8B1E1F] to-[#5C0E0F] text-white shadow-md hover:shadow-lg hover:shadow-[#8B1E1F]/20 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Consult Strategy
            </a>
          </div>
        </div>
      </header>

      {/* VIEWPORT CONTAINER */}
      <main className="flex-grow">
        
        {/* =======================================
            MODE A: MARKETING LANDING PAGE INTERFACE
            ======================================= */}
        {viewMode === 'landing' && (
          <div>
            
            {/* HERO SECTION - Inspired by Slide 1 (INNOVATION / Introduction) */}
            <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-b from-white via-[#FAF8F7] to-[#F2ECEB]/30 border-b border-[#8B1E1F]/10">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Intro Text Column */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* Crimson Pill Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E1F]/5 border border-[#8B1E1F]/20 text-[#8B1E1F] text-xs font-mono font-bold tracking-wider uppercase">
                    <span className="w-2 h-2 bg-[#D9383A] rounded-full animate-pulse" />
                    INNOVATION · VALUE CREATION
                  </div>
                  
                  {/* Majestic Heading */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E1515] leading-[1.08] tracking-tight">
                    Next-Gen Ecosystem <br />
                    For <span className="text-[#8B1E1F] bg-gradient-to-r from-[#8B1E1F] to-[#D9383A] bg-clip-text text-transparent">Corporate Assets</span>
                  </h1>
                  
                  {/* Chinese Bilingual Subtitle */}
                  <div className="border-l-4 border-[#8B1E1F] pl-4 text-lg text-[#5C0E0F] font-bold tracking-wide">
                    创新驱动 · 价值共生 <span className="text-xs text-[#7A6E6D] font-normal block font-mono mt-0.5">ESTABLISHED 2002 // GLOBAL EXPANSION MATRIX</span>
                  </div>

                  <p className="text-[#7A6E6D] text-base leading-relaxed max-w-xl">
                    Accelerating modern enterprise trajectories via intelligent architectural frameworks, optimized financial distribution models, and state-of-the-art edge execution technology.
                  </p>

                  {/* High Density Metric Row */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#8B1E1F]/10">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-[#7A6E6D]">Active Nodes</p>
                      <p className="text-2xl font-black text-[#8B1E1F]">2,000+</p>
                      <span className="text-[9px] text-[#D9383A] font-semibold bg-[#D9383A]/5 px-1.5 py-0.5 rounded">Global Grid</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-[#7A6E6D]">Synergy Multiplier</p>
                      <p className="text-2xl font-black text-[#1E1515]">82%</p>
                      <span className="text-[9px] text-green-700 font-semibold bg-green-50 px-1.5 py-0.5 rounded">Efficiency Peak</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-[#7A6E6D]">R&D Patents</p>
                      <p className="text-2xl font-black text-[#1E1515]">140+</p>
                      <span className="text-[9px] text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">Approved USPTO</span>
                    </div>
                  </div>

                  {/* CTA Area */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button 
                      onClick={() => setViewMode('deck')}
                      className="group flex items-center gap-3 px-6 py-3.5 bg-[#8B1E1F] text-white font-bold rounded-lg hover:bg-[#5C0E0F] transition-all shadow-lg shadow-[#8B1E1F]/20"
                    >
                      <span>Explore Interactive Deck</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a 
                      href="#sectors"
                      className="px-6 py-3.5 border border-[#8B1E1F]/20 text-[#1E1515] font-semibold rounded-lg hover:bg-[#8B1E1F]/5 transition-all"
                    >
                      Review Platforms
                    </a>
                  </div>

                </div>

                {/* Right Hero Graphics Column - Imitates the gorgeous premium architectural aesthetic of the slides */}
                <div className="lg:col-span-6 relative">
                  <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(139,30,31,0.12)] border border-[#8B1E1F]/20 bg-[#1E1515]">
                    
                    {/* Background architectural grid / graphic */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5C0E0F] via-transparent to-[#1E1515]/80 mix-blend-multiply opacity-90 z-10" />
                    
                    {/* Abstract CSS Architecture (recreating the crimson high-end buildings in slides) */}
                    <div className="absolute inset-0 flex items-end justify-center gap-2 px-8 pb-1 transition-all">
                      {/* Structure 1 */}
                      <div className="w-1/4 h-[80%] bg-gradient-to-t from-[#8B1E1F] to-[#D9383A] rounded-t-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-lines opacity-20" />
                        <div className="absolute top-4 left-4 text-white font-mono text-2xl font-black opacity-40">01</div>
                        <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-white/30 rounded" />
                      </div>
                      
                      {/* Structure 2 (Highlighted/Elevated Architecture with curve) */}
                      <div className="w-1/3 h-[95%] bg-gradient-to-b from-[#D9383A] via-[#8B1E1F] to-[#5C0E0F] rounded-t-2xl relative shadow-[0_-10px_30px_rgba(217,56,58,0.4)] overflow-hidden">
                        {/* Curved glass-like highlight resembling the slide 01 design */}
                        <div className="absolute top-0 right-0 w-full h-[60%] bg-white/10 rounded-b-full transform scale-x-125 origin-top filter blur-xs" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent)] animate-pulse" />
                        <div className="absolute bottom-10 left-6 text-white">
                          <p className="text-[10px] uppercase font-mono tracking-widest text-[#FAF8F7]/70">Ecosystem Base</p>
                          <h4 className="text-lg font-black tracking-tight">MEG-XI HQ</h4>
                        </div>
                        <div className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full animate-ping" />
                        <div className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full" />
                      </div>

                      {/* Structure 3 */}
                      <div className="w-1/5 h-[65%] bg-gradient-to-t from-[#5C0E0F] to-[#8B1E1F] rounded-t-xl relative overflow-hidden">
                        <div className="absolute bottom-4 left-4 text-white/50 font-mono text-xs">SYS_B</div>
                      </div>

                      {/* Structure 4 */}
                      <div className="w-1/6 h-[40%] bg-[#3D1415] rounded-t-lg" />
                    </div>

                    {/* Floating HUD Badges to replicate presentation design layout */}
                    <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#8B1E1F]/15 shadow-lg max-w-[180px] transform hover:scale-105 transition-transform">
                      <p className="text-[9px] font-mono uppercase text-[#8B1E1F] tracking-widest font-bold">INTRODUCING</p>
                      <h3 className="text-sm font-black text-[#1E1515] mt-1">Global Standard</h3>
                      <p className="text-[10px] text-[#7A6E6D] mt-1">High-end architecture & asset synchronization systems.</p>
                    </div>

                    <div className="absolute bottom-6 right-6 z-20 bg-[#1E1515]/90 border border-white/15 p-4 rounded-xl backdrop-blur-md text-white min-w-[200px]">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-mono tracking-widest text-white/60 uppercase">SYSTEM FEED</span>
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                      <p className="text-xs font-mono font-medium text-white/90">Generating strategy assets...</p>
                      <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-3">
                        <div className="bg-[#D9383A] h-full w-[78%] animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Backdrop shadow design */}
                  <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#8B1E1F]/10 rounded-full blur-3xl pointer-events-none" />
                </div>

              </div>
            </section>

            {/* QUICK NAVIGATION GRID - Table of Contents Theme (Slide 01/02) */}
            <section className="py-12 px-6 bg-white border-b border-[#8B1E1F]/10">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#8B1E1F] font-bold">DIRECTORY</p>
                    <h2 className="text-2xl font-black text-[#1E1515] mt-1">Platform Structural Overview</h2>
                  </div>
                  <p className="text-xs text-[#7A6E6D] max-w-xs mt-2 md:mt-0">
                    A multi-layered methodology to address capital scaling, computing infrastructure, and global talent alignment.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { num: "01", title: "Enterprise Solution", path: "Core Framework", desc: "Adaptive frameworks ensuring continuous value creation.", icon: <Layers className="w-5 h-5 text-[#8B1E1F]" /> },
                    { num: "02", title: "Business Segments", path: "Portfolio Matrix", desc: "Highly structured investment layouts yielding secure margins.", icon: <BarChart3 className="w-5 h-5 text-[#8B1E1F]" /> },
                    { num: "03", title: "Technology Strategy", path: "Neural Systems", desc: "Local computing acceleration utilizing custom matrix designs.", icon: <Cpu className="w-5 h-5 text-[#8B1E1F]" /> },
                    { num: "04", title: "Elite Leadership", path: "Synergy Grid", desc: "Aligning top-tier engineers and operators with clear mission goals.", icon: <Users className="w-5 h-5 text-[#8B1E1F]" /> }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="p-6 rounded-xl border border-[#8B1E1F]/10 bg-[#FAF8F7] hover:bg-white hover:border-[#8B1E1F]/30 hover:shadow-xl hover:shadow-[#8B1E1F]/5 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-2xl font-black font-mono text-[#8B1E1F]/30 group-hover:text-[#8B1E1F] transition-colors">{item.num}</span>
                        <div className="p-2.5 bg-white rounded-lg border border-[#8B1E1F]/5 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="text-base font-black text-[#1E1515] mb-1">{item.title}</h3>
                      <p className="text-xs font-mono text-[#D9383A] mb-3">{item.path}</p>
                      <p className="text-xs text-[#7A6E6D] leading-relaxed">{item.desc}</p>
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#8B1E1F] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Learn details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 1: DETAILED BUSINESS PORTFOLIO - Inspired by slide "Business Segment" */}
            <section id="sectors" className="py-20 px-6 bg-[#FAF8F7] relative">
              <div className="max-w-7xl mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Rich data graphic mimicking slide 04 */}
                  <div className="lg:col-span-6 space-y-6">
                    
                    <div className="bg-white p-6 rounded-2xl border border-[#8B1E1F]/10 shadow-[0_10px_35px_rgba(139,30,31,0.04)]">
                      <div className="flex justify-between items-center pb-4 border-b border-[#8B1E1F]/10 mb-6">
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-[#7A6E6D]">PORTFOLIO METRICS</p>
                          <h4 className="text-base font-black text-[#1E1515]">Performance Metrics Dashboard</h4>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-[#8B1E1F]/5 text-[#8B1E1F] font-mono text-xs font-bold">REAL-TIME</span>
                      </div>

                      <div className="grid grid-cols-2 gap-6 mb-6">
                        {/* Custom Radial Gauge */}
                        <div className="flex flex-col items-center justify-center p-4 bg-[#FAF8F7] rounded-xl border border-[#8B1E1F]/5 relative overflow-hidden">
                          <p className="text-[10px] font-mono text-[#7A6E6D] mb-2 uppercase">Synergy Index</p>
                          <div className="relative w-28 h-28 flex items-center justify-center">
                            {/* SVG Gauge */}
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                className="text-gray-200"
                                strokeWidth="3.5"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                className="text-[#8B1E1F]"
                                strokeWidth="3.5"
                                strokeDasharray="82, 100"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <div className="absolute flex flex-col items-center">
                              <span className="text-xl font-black text-[#1E1515]">82%</span>
                              <span className="text-[8px] uppercase tracking-wider text-green-700 font-bold bg-green-50 px-1 rounded">Optimal</span>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Dynamic Strategy Guage */}
                        <div className="flex flex-col items-center justify-center p-4 bg-[#FAF8F7] rounded-xl border border-[#8B1E1F]/5 relative">
                          <p className="text-[10px] font-mono text-[#7A6E6D] mb-1 uppercase">Allocation Lever</p>
                          <div className="relative w-28 h-28 flex flex-col items-center justify-center">
                            <span className="text-2xl font-black text-[#8B1E1F]">{strategyValue}%</span>
                            <span className="text-[9px] text-[#7A6E6D] text-center mb-2 leading-tight">Adjust Capital Weight</span>
                            <input 
                              type="range" 
                              min="20" 
                              max="100" 
                              value={strategyValue} 
                              onChange={(e) => setStrategyValue(e.target.value)}
                              className="w-full h-1 bg-[#8B1E1F]/20 rounded-lg appearance-none cursor-pointer accent-[#8B1E1F]" 
                            />
                          </div>
                        </div>
                      </div>

                      {/* Mock Chart displaying Segment Expansion Rate */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-mono text-[#7A6E6D]">Global Capital Channel Expansion</span>
                          <span className="font-bold text-[#8B1E1F]">+342.5%</span>
                        </div>
                        
                        <div className="h-20 w-full bg-[#FAF8F7] rounded-lg border border-[#8B1E1F]/5 p-2 flex items-end justify-between relative overflow-hidden">
                          {/* Absolute glowing line back */}
                          <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-[#8B1E1F]/10 pointer-events-none" />
                          {barHeights.map((h, i) => (
                            <div 
                              key={i} 
                              className="w-[6%] bg-gradient-to-t from-[#8B1E1F] to-[#D9383A] rounded-t-xs hover:opacity-80 transition-opacity relative group"
                              style={{ height: `${h / 1.5}%` }}
                            >
                              {/* Hover Indicator Tooltip */}
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-[#1E1515] text-white text-[8px] py-0.5 px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap mb-1">
                                val: {h * 3}k
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between text-[9px] font-mono text-[#7A6E6D] uppercase">
                          <span>Q1 2025</span>
                          <span>Q2 2025</span>
                          <span>Q3 2025</span>
                          <span>Q4 2025</span>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Right Column: Descriptions & Text matching the structured format */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E1F]/5 border border-[#8B1E1F]/10 text-[#8B1E1F] text-xs font-mono font-semibold">
                      <span>SEGMENT CLASSIFICATION</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#1E1515] leading-tight">
                      Architecting High-Yield <br />Business Verticals
                    </h2>
                    <p className="text-[#7A6E6D] text-sm leading-relaxed">
                      We target system-critical infrastructure and technological assets. Our balanced structural configuration is optimized to mitigate macroeconomic volatility.
                    </p>

                    <div className="space-y-4">
                      
                      {[
                        { title: "Strategic Resource Pools", desc: "Pooling tier-1 sovereign and institutional investments to deploy massive scale solutions.", code: "POOL_SYS_01" },
                        { title: "Decentralized Edge Hubs", desc: "Deploying deep localized edge matrices for reduced network friction and ultra-low latency.", code: "EDGE_NODE_B" },
                        { title: "Core R&D Scaling Protocols", desc: "Reinvesting up to 24.5% of absolute yields directly back into proprietary silicone research.", code: "R_D_PROTO_X" }
                      ].map((subItem, idx) => (
                        <div 
                          key={idx} 
                          className="p-4 bg-white rounded-xl border-l-4 border-l-[#8B1E1F] border border-[#8B1E1F]/10 hover:shadow-md transition-shadow flex gap-4 items-start"
                        >
                          <span className="p-1 bg-[#8B1E1F]/5 text-[#8B1E1F] rounded-lg text-xs font-mono font-bold mt-0.5">{subItem.code}</span>
                          <div>
                            <h4 className="text-sm font-black text-[#1E1515]">{subItem.title}</h4>
                            <p className="text-xs text-[#7A6E6D] mt-1">{subItem.desc}</p>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>

                </div>

              </div>
            </section>

            {/* SECTION 2: THE COGNITIVE MATRIX (Stratagem Silicon Chip) - Inspired by slides 10, 11, 14 */}
            <section id="stratagem" className="py-20 px-6 bg-white relative overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#8B1E1F]/5 border border-[#8B1E1F]/15 text-[#8B1E1F] text-xs font-mono font-bold">
                    CORE COGNITIVE RESEARCH
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#1E1515]">
                    Stratagem Silicon Computing Node
                  </h2>
                  <p className="text-[#7A6E6D] text-sm">
                    Recreating our high-density mechanical & neural processors that drive low-latency global strategy distributions.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Interactive Chip Selector */}
                  <div className="lg:col-span-4 space-y-3">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#8B1E1F] font-bold mb-4">COMPUTING PATHWAYS</p>
                    
                    {[
                      { title: "Neural Pathway Routing", desc: "Autonomous core configurations with 8.4 Billion active strategic channels.", speed: "870 TFLOPs" },
                      { title: "Dynamic Yield Optimization", desc: "Automated real-time scaling of liquidity distributions based on usage.", speed: "Sub-1.2ms" },
                      { title: "Thermal Mitigation Array", desc: "Advanced structural mechanical housings protecting hardware clusters.", speed: "Active Cooling" }
                    ].map((pill, pIdx) => (
                      <div 
                        key={pIdx}
                        onClick={() => setSelectedTechPillar(pIdx)}
                        className={`p-5 rounded-xl border cursor-pointer transition-all ${selectedTechPillar === pIdx ? 'bg-[#8B1E1F] text-white border-transparent shadow-lg shadow-[#8B1E1F]/20' : 'bg-[#FAF8F7] text-[#1E1515] border-[#8B1E1F]/10 hover:border-[#8B1E1F]/20'}`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-mono opacity-80 uppercase tracking-widest">LAYER 0{pIdx + 1}</span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${selectedTechPillar === pIdx ? 'bg-white/20 text-white' : 'bg-[#8B1E1F]/5 text-[#8B1E1F]'}`}>{pill.speed}</span>
                        </div>
                        <h4 className="text-base font-black tracking-tight">{pill.title}</h4>
                        <p className={`text-xs mt-2 leading-relaxed ${selectedTechPillar === pIdx ? 'text-white/80' : 'text-[#7A6E6D]'}`}>{pill.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Center Column: Gorgeous 3D-Like interactive render matching Slide 11 */}
                  <div className="lg:col-span-8 flex justify-center items-center bg-[#FAF8F7] rounded-3xl p-8 border border-[#8B1E1F]/10 min-h-[450px] relative">
                    
                    {/* Decorative technical specs elements */}
                    <div className="absolute top-4 left-4 font-mono text-[9px] text-[#7A6E6D]/80 space-y-1">
                      <p>SYS.RENDER: ACTIVE_VIEW</p>
                      <p>PERSPECTIVE: ISO_3D_MATRIX</p>
                      <p>CHIP_TEMP: 32.4°C [SAFE]</p>
                    </div>

                    <div className="absolute bottom-4 right-4 font-mono text-[9px] text-[#7A6E6D]/80 flex gap-4">
                      <span>R&D STAGE: SIX_X</span>
                      <span>MODEL_REF: M-2026_GEN</span>
                    </div>

                    {/* Outer ambient glow circle */}
                    <div className="absolute w-72 h-72 rounded-full border border-dashed border-[#8B1E1F]/10 animate-spin" style={{ animationDuration: '40s' }} />
                    <div className="absolute w-56 h-56 rounded-full border border-[#8B1E1F]/5 animate-pulse" />

                    {/* Central 3D Interactive Mechanical Cube representation from the slide */}
                    <div className="relative z-10 w-64 h-64 flex items-center justify-center">
                      
                      {/* Animated Floating Particles representing strategy operations */}
                      <span className="absolute top-10 left-10 w-2 h-2 bg-[#8B1E1F] rounded-full animate-ping" />
                      <span className="absolute bottom-12 right-12 w-2 h-2 bg-[#D9383A] rounded-full animate-ping" />

                      {/* Main Cube Wrapper */}
                      <div className="w-48 h-48 bg-gradient-to-br from-[#1E1515] to-[#3D1415] rounded-3xl shadow-[0_20px_45px_rgba(26,21,21,0.25)] border-2 border-[#8B1E1F]/20 flex flex-col items-center justify-center p-6 text-center transform hover:scale-105 duration-300 relative overflow-hidden group">
                        
                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        
                        {/* Inner Silicon Centerpiece core (from slide 11) */}
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#8B1E1F] via-[#D9383A] to-[#8B1E1F] flex items-center justify-center shadow-inner relative overflow-hidden mb-3 animate-pulse">
                          <Cpu className="w-8 h-8 text-white" />
                          
                          {/* Inner glowing corner nodes */}
                          <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full" />
                          <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-white rounded-full" />
                        </div>

                        <p className="text-white text-xs font-mono tracking-widest uppercase font-bold">COGNITIVE STRATAGEM</p>
                        <p className="text-[#FAF8F7]/60 text-[10px] mt-1 leading-tight">ACTIVE NODE EXPANSION MODEL</p>

                        {/* Interactive dynamic numeric output overlay inside block */}
                        <div className="mt-3 bg-[#FAF8F7]/10 rounded px-2.5 py-1 flex items-center gap-1.5 text-white">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                          <span className="font-mono text-xs font-bold">{selectedTechPillar === 0 ? "SYS_ACTIVE: 8.4B" : selectedTechPillar === 1 ? "LATENCY: 1.12ms" : "COOLING: ON"}</span>
                        </div>

                      </div>

                    </div>

                    {/* Interactive parameter controls overlay */}
                    <div className="absolute top-4 right-4 bg-white p-3 rounded-lg border border-[#8B1E1F]/15 shadow-sm max-w-[150px]">
                      <span className="text-[8px] font-mono text-[#7A6E6D] uppercase block">CHIP SCATTER</span>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="w-2.5 h-2.5 rounded bg-[#8B1E1F]" />
                        <span className="w-2.5 h-2.5 rounded bg-[#8B1E1F]/60" />
                        <span className="w-2.5 h-2.5 rounded bg-[#8B1E1F]/30" />
                        <span className="w-2.5 h-2.5 rounded bg-[#8B1E1F]/10" />
                      </div>
                      <span className="text-[9px] text-[#7A6E6D] block mt-1">Tier-1 Silicon Layering</span>
                    </div>

                  </div>

                </div>

              </div>
            </section>

            {/* SECTION 3: MANAGEMENT TEAM & TALENT ALIGNMENT */}
            <section id="talent" className="py-20 px-6 bg-[#FAF8F7] border-t border-[#8B1E1F]/10">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
                  <div className="space-y-2">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#8B1E1F] font-bold">HUMAN ASSET SYNERGY</p>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#1E1515]">Corporate Elite Leadership</h2>
                  </div>
                  <p className="text-[#7A6E6D] text-sm max-w-md mt-4 lg:mt-0">
                    Our team merges deep computational capability with multi-sector macroeconomic leadership. Operating across 6 key global innovation centers.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Leader 1 */}
                  <div className="bg-white p-6 rounded-2xl border border-[#8B1E1F]/10 hover:border-[#8B1E1F]/30 hover:shadow-xl transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#8B1E1F] to-[#3D1415] rounded-xl flex items-center justify-center text-white font-mono text-lg font-black shadow-md">
                        JD
                      </div>
                      <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-mono font-bold rounded-full">ACTIVE NODE DIR</span>
                    </div>
                    <h3 className="text-lg font-black text-[#1E1515] group-hover:text-[#8B1E1F] transition-colors">Dr. Jonathan Vance</h3>
                    <p className="text-xs font-mono text-[#7A6E6D] mb-4">HEAD OF QUANTITATIVE ALLOCATION</p>
                    <p className="text-xs text-[#7A6E6D] leading-relaxed mb-6">
                      Formerly lead microarchitecture research engineer at global semi-conductors. Oversees physical matrix computation clusters.
                    </p>
                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-[#7A6E6D]">
                      <span>ZURICH CAMPUS</span>
                      <span className="font-mono text-[#8B1E1F]">8 Years Active</span>
                    </div>
                  </div>

                  {/* Leader 2 */}
                  <div className="bg-white p-6 rounded-2xl border border-[#8B1E1F]/10 hover:border-[#8B1E1F]/30 hover:shadow-xl transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#D9383A] to-[#8B1E1F] rounded-xl flex items-center justify-center text-white font-mono text-lg font-black shadow-md">
                        CL
                      </div>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-mono font-bold rounded-full">STRATEGY CHAIR</span>
                    </div>
                    <h3 className="text-lg font-black text-[#1E1515] group-hover:text-[#8B1E1F] transition-colors">Charlotte Lemoine</h3>
                    <p className="text-xs font-mono text-[#7A6E6D] mb-4">VP OF CAPITAL FLOW PATTERNS</p>
                    <p className="text-xs text-[#7A6E6D] leading-relaxed mb-6">
                      Coordinates sovereign scale allocation structures, ensuring legal compliance and high liquidity ratios internationally.
                    </p>
                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-[#7A6E6D]">
                      <span>PARIS OPERATIONS</span>
                      <span className="font-mono text-[#8B1E1F]">12 Years Active</span>
                    </div>
                  </div>

                  {/* Leader 3 - Featuring live clock widget inspired by talent slide */}
                  <div className="bg-[#1E1515] text-white p-6 rounded-2xl border border-[#8B1E1F]/30 relative overflow-hidden group">
                    
                    {/* Glowing crimson aura */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#8B1E1F]/40 rounded-full blur-2xl" />

                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="p-3 bg-white/10 rounded-xl text-white">
                        <Clock className="w-6 h-6 text-[#D9383A]" />
                      </div>
                      <span className="px-3 py-1 bg-white/10 text-[#FAF8F7] text-[10px] font-mono font-bold rounded-full">GLOBAL CO-CREATION</span>
                    </div>

                    <h3 className="text-lg font-black text-white mb-1">Global Timezone Sync</h3>
                    <p className="text-xs font-mono text-[#D9383A] mb-4">INTELLIGENT TEAM ALIGNMENT</p>
                    
                    {/* Live Clock Display */}
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center mb-6">
                      <p className="text-2xl font-mono font-black tracking-widest text-[#D9383A]">
                        {currentTime.toLocaleTimeString()}
                      </p>
                      <p className="text-[9px] font-mono text-white/50 uppercase mt-1">Live Coordinates Synchronized</p>
                    </div>

                    <p className="text-xs text-white/70 leading-relaxed mb-4">
                      Our platform ensures micro-teams co-author architectural frameworks in parallel time slots across Asian, European and American networks.
                    </p>

                  </div>

                </div>
              </div>
            </section>

            {/* INTERACTIVE CALL-TO-ACTION (CTA) */}
            <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#1E1515] to-[#3D1415] text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
              <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D9383A] text-xs font-mono font-bold">
                  <span>INITIATE ENGAGEMENT PROTOCOL</span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-none">
                  Ready to Accelerate Your <br />
                  <span className="text-[#D9383A]">Innovation Value Lifecycle?</span>
                </h2>

                <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
                  Join hundreds of top-tier sovereign wealth operations, core silicon labs, and distribution enterprises in leveraging the IRENA paradigm.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto pt-4">
                  <input 
                    type="email" 
                    placeholder="Enter institutional email" 
                    className="px-5 py-3.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#D9383A] transition-colors w-full"
                  />
                  <button className="px-6 py-3.5 bg-[#8B1E1F] hover:bg-[#D9383A] text-white font-bold rounded-lg transition-colors shadow-lg shadow-[#8B1E1F]/30 shrink-0">
                    Acquire Credentials
                  </button>
                </div>

                <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">
                  SECURE PLATFORM · HIGH INTEGRITY CONFIRMED
                </p>

              </div>
            </section>

          </div>
        )}

        {/* =======================================
            MODE B: INTERACTIVE SLIDE DECK VIEWER
            ======================================= */}
        {viewMode === 'deck' && (
          <div className="py-12 px-6 max-w-7xl mx-auto">
            
            {/* Header / Mode Indicator */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-[#8B1E1F]/10 pb-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#8B1E1F]/5 border border-[#8B1E1F]/20 text-[#8B1E1F] text-xs font-mono font-bold">
                  INTERACTIVE PRESENTATION MODULE
                </span>
                <h1 className="text-2xl font-black text-[#1E1515] mt-2">
                  Live Deck Sandbox
                </h1>
                <p className="text-xs text-[#7A6E6D] mt-1">
                  Recreated directly from your visual blueprint. Click through the layout pillars or play live parameters.
                </p>
              </div>

              {/* Slider Progress Indicator */}
              <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-[#8B1E1F]/10">
                <button 
                  onClick={prevSlide}
                  className="p-2 hover:bg-[#8B1E1F]/5 text-[#8B1E1F] rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-mono text-sm font-bold text-[#1E1515]">
                  {activeSlideIndex + 1} <span className="text-[#7A6E6D]">/</span> {slidesData.length}
                </span>
                <button 
                  onClick={nextSlide}
                  className="p-2 hover:bg-[#8B1E1F]/5 text-[#8B1E1F] rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick-Jump Deck Grid Panel */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
              {slidesData.map((sl, index) => (
                <button
                  key={sl.id}
                  onClick={() => setActiveSlideIndex(index)}
                  className={`p-3 rounded-xl border text-left transition-all ${activeSlideIndex === index ? 'bg-[#8B1E1F] text-white border-transparent shadow-md' : 'bg-white text-[#1E1515] border-[#8B1E1F]/10 hover:border-[#8B1E1F]/30'}`}
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <span className={`text-[10px] font-mono font-bold ${activeSlideIndex === index ? 'text-white/60' : 'text-[#8B1E1F]'}`}>{sl.id}</span>
                    <span className="text-[8px] font-mono opacity-60">Pillar</span>
                  </div>
                  <p className="text-xs font-black truncate">{sl.tag}</p>
                </button>
              ))}
            </div>

            {/* THE PRESENTATION STAGE - Replicating Slide Layout Aesthetics 1:1 */}
            <div className="bg-white rounded-3xl border border-[#8B1E1F]/15 shadow-2xl shadow-[#8B1E1F]/5 overflow-hidden relative min-h-[500px] flex flex-col justify-between">
              
              {/* Slide Header Background */}
              <div className="bg-[#1E1515] text-white p-6 flex justify-between items-center border-b border-[#8B1E1F]/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#D9383A] animate-pulse" />
                  <span className="text-xs font-mono tracking-widest text-white/70 uppercase">IRENA Core Presentation System</span>
                </div>
                <div className="flex items-center gap-6 text-xs text-white/50 font-mono">
                  <span>CONFIDENTIAL</span>
                  <span>NODE LEVEL: 09</span>
                </div>
              </div>

              {/* Main Dynamic Slide Content Viewer */}
              <div className="p-8 md:p-12 flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Slide Info */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl md:text-5xl font-black font-mono text-[#8B1E1F]/20 leading-none">
                        {slidesData[activeSlideIndex].id}
                      </span>
                      <div>
                        <span className="px-2.5 py-0.5 bg-[#8B1E1F]/10 text-[#8B1E1F] text-[10px] font-mono font-bold rounded uppercase tracking-widest">
                          {slidesData[activeSlideIndex].tag}
                        </span>
                        <p className="text-xs text-[#7A6E6D] font-bold mt-0.5 uppercase tracking-wider">
                          {slidesData[activeSlideIndex].subtitle}
                        </p>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-black text-[#1E1515] tracking-tight leading-tight">
                      {slidesData[activeSlideIndex].title}
                    </h2>

                    <p className="text-[#7A6E6D] text-sm leading-relaxed max-w-xl">
                      {slidesData[activeSlideIndex].desc}
                    </p>

                    {/* Specific Slide Visual Customizers inside Stage */}
                    {slidesData[activeSlideIndex].type === 'intro' && (
                      <div className="flex gap-4 p-4 bg-[#FAF8F7] rounded-xl border border-[#8B1E1F]/10 max-w-md">
                        <Info className="w-5 h-5 text-[#8B1E1F] shrink-0 mt-0.5" />
                        <p className="text-xs text-[#7A6E6D]">
                          This engine acts as our structural bedrock. Since 2002, we've committed to multi-layer scalability across global boundaries.
                        </p>
                      </div>
                    )}

                    {slidesData[activeSlideIndex].type === 'portfolio' && (
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-[#8B1E1F] font-bold block">DYNAMIC PORTFOLIO ALLOCATION: {strategyValue}%</label>
                        <input 
                          type="range" 
                          min="20" 
                          max="100" 
                          value={strategyValue} 
                          onChange={(e) => setStrategyValue(e.target.value)}
                          className="w-full max-w-sm h-1 bg-red-100 rounded-lg appearance-none cursor-pointer accent-[#8B1E1F]"
                        />
                      </div>
                    )}

                    {slidesData[activeSlideIndex].type === 'technology' && (
                      <div className="flex flex-wrap gap-2">
                        {["SYS_PATH_A", "SYS_PATH_B", "SYS_PATH_C"].map((path, idx) => (
                          <button 
                            key={idx}
                            onClick={() => setSelectedTechPillar(idx)}
                            className={`px-3 py-1 text-xs font-mono rounded border ${selectedTechPillar === idx ? 'bg-[#8B1E1F] text-white border-transparent' : 'bg-white text-[#7A6E6D] border-[#8B1E1F]/15 hover:bg-[#FAF8F7]'}`}
                          >
                            {path}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Slide Dynamic Graphic Render */}
                  <div className="lg:col-span-5 flex justify-center">
                    
                    {/* Render matching Intro Slide */}
                    {slidesData[activeSlideIndex].type === 'intro' && (
                      <div className="w-full aspect-square max-w-[320px] bg-gradient-to-tr from-[#1E1515] to-[#3D1415] rounded-2xl relative overflow-hidden shadow-xl border border-[#8B1E1F]/20 p-6 flex flex-col justify-end">
                        <div className="absolute top-6 left-6 text-[#D9383A] font-mono text-3xl font-black">01</div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                          <Compass className="w-40 h-40 text-[#8B1E1F] animate-spin" style={{ animationDuration: '30s' }} />
                        </div>
                        <div className="relative z-10 text-white">
                          <p className="text-[10px] font-mono text-[#D9383A] uppercase tracking-wider">FOUNDATION ARCHITECTURE</p>
                          <h4 className="text-lg font-black mt-1">MEG-XI SYSTEM CORE</h4>
                        </div>
                      </div>
                    )}

                    {/* Render matching Portfolio Slide */}
                    {slidesData[activeSlideIndex].type === 'portfolio' && (
                      <div className="w-full max-w-[320px] bg-[#FAF8F7] p-6 rounded-2xl border border-[#8B1E1F]/15 space-y-4">
                        <p className="text-xs font-mono text-[#7A6E6D] uppercase font-bold text-center">SYNERGY DISTRIBUTION WEIGHT</p>
                        <div className="flex justify-center">
                          <div className="relative w-36 h-36 flex items-center justify-center bg-white rounded-full shadow-inner border border-[#8B1E1F]/5">
                            <span className="text-3xl font-black text-[#8B1E1F]">{strategyValue}%</span>
                            <div className="absolute inset-2 rounded-full border border-dashed border-[#8B1E1F]/20 animate-spin" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
                          <div className="p-2 bg-white rounded border border-[#8B1E1F]/5">
                            <span className="block text-[#7A6E6D]">Allocation Weight</span>
                            <span className="font-bold text-[#8B1E1F]">{strategyValue} : {(100 - strategyValue)}</span>
                          </div>
                          <div className="p-2 bg-white rounded border border-[#8B1E1F]/5">
                            <span className="block text-[#7A6E6D]">Efficiency Level</span>
                            <span className="font-bold text-[#8B1E1F]">MAX SECURE</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Render matching Market Capital Distribution Slide */}
                    {slidesData[activeSlideIndex].type === 'market' && (
                      <div className="w-full max-w-[320px] bg-[#1E1515] text-white p-6 rounded-2xl border border-[#8B1E1F]/30 space-y-4 relative overflow-hidden">
                        <p className="text-xs font-mono text-[#D9383A] uppercase font-bold">GLOBAL INFLOW TRAJECTORY</p>
                        <div className="h-28 w-full flex items-end justify-between gap-1 bg-white/5 p-2 rounded border border-white/10 relative">
                          <div className="absolute inset-y-0 left-0 right-0 border-t border-dashed border-white/10" />
                          {[40, 50, 75, 45, 90, 82, 110, 105].map((h, i) => (
                            <div 
                              key={i} 
                              className="w-[10%] bg-gradient-to-t from-[#8B1E1F] to-[#D9383A] rounded-t-xs"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-mono text-white/60">
                          <span>Q1 LIQUIDITY</span>
                          <span className="text-[#D9383A]">+142%</span>
                        </div>
                      </div>
                    )}

                    {/* Render matching Silicon Computing Node Slide */}
                    {slidesData[activeSlideIndex].type === 'technology' && (
                      <div className="w-full max-w-[320px] bg-gradient-to-br from-[#1E1515] to-[#3D1415] text-white p-6 rounded-2xl border border-[#8B1E1F]/30 flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-[#8B1E1F] rounded-2xl flex items-center justify-center shadow-lg shadow-[#8B1E1F]/30 animate-pulse relative mb-4">
                          <Cpu className="w-10 h-10 text-white" />
                          <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                        <h4 className="text-sm font-black uppercase font-mono tracking-widest text-[#D9383A]">COGNITIVE CORE</h4>
                        <p className="text-white/60 text-xs mt-1 leading-relaxed">
                          Currently tracking: {selectedTechPillar === 0 ? "SYS_PATH_A @ 870 TFLOPs" : selectedTechPillar === 1 ? "SYS_PATH_B @ <1.12ms" : "SYS_PATH_C @ FULL LOAD"}
                        </p>
                      </div>
                    )}

                    {/* Render matching Patents/Results Slide */}
                    {slidesData[activeSlideIndex].type === 'results' && (
                      <div className="w-full max-w-[320px] bg-[#FAF8F7] p-6 rounded-2xl border border-[#8B1E1F]/15 space-y-4">
                        <div className="flex justify-between items-center border-b border-[#8B1E1F]/10 pb-2">
                          <span className="text-xs font-mono text-[#7A6E6D]">PROPRIETARY USPTO GRID</span>
                          <CheckCircle className="w-4 h-4 text-[#8B1E1F]" />
                        </div>
                        <div className="space-y-2">
                          <div className="p-3 bg-white rounded-lg border border-[#8B1E1F]/5 flex justify-between items-center text-xs">
                            <span className="font-mono text-[#7A6E6D]">Neural Microarchitectures</span>
                            <span className="font-bold text-[#8B1E1F]">82 APPROVED</span>
                          </div>
                          <div className="p-3 bg-white rounded-lg border border-[#8B1E1F]/5 flex justify-between items-center text-xs">
                            <span className="font-mono text-[#7A6E6D]">Liquidity Routing Chips</span>
                            <span className="font-bold text-[#8B1E1F]">32 PENDING</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Render matching Talent Slide */}
                    {slidesData[activeSlideIndex].type === 'talent' && (
                      <div className="w-full max-w-[320px] bg-[#1E1515] text-white p-6 rounded-2xl border border-[#8B1E1F]/30 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#8B1E1F]/30 rounded-full blur-xl" />
                        <Clock className="w-8 h-8 text-[#D9383A] mx-auto mb-2" />
                        <p className="text-xl font-mono font-black tracking-widest text-white">
                          {currentTime.toLocaleTimeString()}
                        </p>
                        <p className="text-[9px] font-mono text-white/50 uppercase tracking-widest mt-1">ZURICH/PARIS/SINGAPORE GRID</p>
                      </div>
                    )}

                  </div>

                </div>
              </div>

              {/* Slide Deck Footer Controls Panel */}
              <div className="bg-[#FAF8F7] p-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#8B1E1F]/10">
                <div className="flex gap-6 text-xs text-[#7A6E6D] font-mono font-medium">
                  <span>SYSTEM MATRIX: MEG-XI HQ</span>
                  <span>CORE: IN-02</span>
                  <span>THEME: CRIMSON & PEARL</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={prevSlide}
                    className="px-4 py-2 border border-[#8B1E1F]/20 text-xs font-bold rounded-lg text-[#8B1E1F] hover:bg-[#8B1E1F]/5 transition-all active:scale-95"
                  >
                    PREVIOUS PILLAR
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="px-4 py-2 bg-[#8B1E1F] text-white text-xs font-bold rounded-lg hover:bg-[#5C0E0F] transition-all active:scale-95"
                  >
                    NEXT PILLAR
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* PREMIUM FOOTER */}
      <footer className="bg-[#1E1515] text-white border-t border-[#8B1E1F]/20 py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
            
            {/* Logo brand grid */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#8B1E1F] rounded-lg transform rotate-45 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 border-2 border-white rounded-sm transform -rotate-45" />
                </div>
                <span className="text-xl font-black tracking-tight text-white">IRENA CORE</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed max-w-sm">
                Since 2002, driving high-integrity corporate trajectories through adaptive capital layouts, silicone computing optimization, and global organizational models.
              </p>
              <div className="pt-2">
                <span className="px-3 py-1 bg-white/5 text-[#D9383A] text-[10px] font-mono font-bold rounded border border-white/10">
                  SYSTEM LEVEL: FULL SYNERGY (99.98%)
                </span>
              </div>
            </div>

            {/* Quick links columns */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-mono font-bold text-[#D9383A] uppercase tracking-widest">Solutions</h4>
              <ul className="space-y-2 text-xs text-white/60">
                <li><a href="#sectors" className="hover:text-[#D9383A] transition-colors">Strategic Resource Pools</a></li>
                <li><a href="#sectors" className="hover:text-[#D9383A] transition-colors">Decentralized Edge Hubs</a></li>
                <li><a href="#stratagem" className="hover:text-[#D9383A] transition-colors">Silicon Microarchitecture</a></li>
                <li><a href="#talent" className="hover:text-[#D9383A] transition-colors">Global Co-Creation</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-mono font-bold text-[#D9383A] uppercase tracking-widest">Interactive</h4>
              <ul className="space-y-2 text-xs text-white/60">
                <li><button onClick={() => { setViewMode('deck'); setActiveSlideIndex(0); }} className="hover:text-[#D9383A] transition-colors">Launch Deck Stage</button></li>
                <li><button onClick={() => { setViewMode('deck'); setActiveSlideIndex(3); }} className="hover:text-[#D9383A] transition-colors">Stratagem Simulator</button></li>
                <li><button onClick={() => { setViewMode('deck'); setActiveSlideIndex(5); }} className="hover:text-[#D9383A] transition-colors">Timezone Coordinators</button></li>
                <li><a href="#contact" className="hover:text-[#D9383A] transition-colors">Platform Registry</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-mono font-bold text-[#D9383A] uppercase tracking-widest">Global Locations</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-white/60 font-mono">
                <div>// Zurich, CHE</div>
                <div>// Paris, FRA</div>
                <div>// Singapore, SGP</div>
                <div>// Boston, USA</div>
                <div>// Munich, DEU</div>
                <div>// Tokyo, JPN</div>
              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-white/40">
            <p>© {new Date().getFullYear()} IRENA Group Corporation. All operational systems secured under global matrix code IN-92.</p>
            <div className="flex gap-6 font-mono">
              <span className="hover:text-white transition-colors cursor-pointer">Security Ledger</span>
              <span className="hover:text-white transition-colors cursor-pointer">Encryption Protocols</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
8
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TETRIS WOMEN'S ONLINESHOP — Retro Editorial Experience</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Playfair Display (Serif) & Space Grotesk (Geometric Sans/Mono hybrid) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        serif: ['"Playfair Display"', 'serif'],
                        sans: ['"Space Grotesk"', 'sans-serif'],
                    },
                    colors: {
                        editorial: {
                            // The precise warm, organic ochre/mustard-sand paper tone from your inspiration
                            bg: '#DFCAA0',
                            bgDarker: '#CBB488',
                            bgLighter: '#EADBBF',
                            text: '#000000',
                            accent: '#F25C05', // editorial pop
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom Brutalist Utilities & Transitions */
        body {
            background-color: #D3BE96; /* Outer canvas frame */
            font-family: 'Space Grotesk', sans-serif;
            color: #000000;
            overflow-x: hidden;
        }
        
        /* Thin crisp black borders resembling technical drafting */
        .brutalist-border {
            border: 1.5px solid #000000;
        }
        .brutalist-border-r {
            border-right: 1.5px solid #000000;
        }
        .brutalist-border-b {
            border-bottom: 1.5px solid #000000;
        }
        .brutalist-border-t {
            border-top: 1.5px solid #000000;
        }
        .brutalist-border-l {
            border-left: 1.5px solid #000000;
        }

        /* Solid black offset shadows */
        .brutalist-shadow {
            box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
        }
        .brutalist-shadow-sm {
            box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
        }
        .brutalist-shadow-lg {
            box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);
        }
        
        /* Interactive click physical translation */
        .brutalist-press:active {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
        }
        .brutalist-press-large:active {
            transform: translate(4px, 4px);
            box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
        }

        /* Custom scrollbars matching the raw aesthetic */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #DFCAA0;
            border-left: 1.5px solid #000000;
        }
        ::-webkit-scrollbar-thumb {
            background: #000000;
            border: 1px solid #DFCAA0;
        }

        /* Vertical text orientations */
        .vertical-text-lr {
            writing-mode: vertical-lr;
            text-orientation: mixed;
        }
        .vertical-text-rl {
            writing-mode: vertical-rl;
            text-orientation: mixed;
        }

        /* Scanline paper texture overlay */
        .paper-overlay {
            position: relative;
        }
        .paper-overlay::after {
            content: " ";
            display: block;
            position: absolute;
            top: 0; left: 0; bottom: 0; right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.04) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.01), rgba(0, 255, 0, 0.005), rgba(0, 0, 255, 0.01));
            z-index: 10;
            background-size: 100% 3px, 3px 100%;
            pointer-events: none;
        }

        /* Image treatment to blend into warm tones */
        .fashion-img {
            filter: grayscale(0.1) sepia(0.2) contrast(1.1);
            mix-blend-mode: multiply;
        }

        /* Smooth slide-outs */
        .drawer {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
    </style>
</head>
<body class="p-2 md:p-6 lg:p-8 paper-overlay min-h-screen flex items-center justify-center">

    <!-- Theme Customization Drawer (Fixed Access) -->
    <div class="fixed bottom-6 left-6 z-50 flex items-center gap-2">
        <button onclick="toggleThemeConfig()" class="bg-black text-white p-3 rounded-none brutalist-border brutalist-shadow brutalist-press text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Colorway
        </button>
        <div id="theme-panel" class="hidden bg-editorial-bg p-3 brutalist-border brutalist-shadow flex gap-2">
            <button onclick="changeColorway('#DFCAA0', '#D3BE96')" class="w-6 h-6 bg-[#DFCAA0] border border-black title='Original Sand'"></button>
            <button onclick="changeColorway('#E5F0E8', '#C3D8C8')" class="w-6 h-6 bg-[#E5F0E8] border border-black title='Sage Editorial'"></button>
            <button onclick="changeColorway('#F5E6E8', '#DEC0C4')" class="w-6 h-6 bg-[#F5E6E8] border border-black title='Dusk Blossom'"></button>
            <button onclick="changeColorway('#E8E6E6', '#C7C5C5')" class="w-6 h-6 bg-[#E8E6E6] border border-black title='Brutalist Concrete'"></button>
        </div>
    </div>

    <!-- MAIN EDITORIAL CONTAINER -->
    <div id="main-shop-container" class="w-full max-w-[1400px] bg-editorial-bg brutalist-border text-editorial-text relative z-20 flex flex-col md:grid md:grid-cols-[120px_240px_1fr_120px] transition-colors duration-300">
        
        <!-- ================= SIDEBAR LEFT 1 (Logo & Navigation) ================= -->
        <div class="flex md:flex-col justify-between brutalist-border-b md:brutalist-border-b-0 md:brutalist-border-r bg-editorial-bg transition-colors duration-300">
            <!-- Top Segment -->
            <div class="flex md:flex-col w-full">
                <!-- Retro Blocky Logo -->
                <div class="p-6 flex items-center justify-center brutalist-border-b brutalist-border-r md:brutalist-border-r-0 aspect-square">
                    <div class="grid grid-cols-3 gap-1 w-10 h-10">
                        <div class="bg-black"></div><div class="bg-black"></div><div class="bg-black"></div>
                        <div class="border border-black"></div><div class="bg-black"></div><div class="border border-black"></div>
                        <div class="border border-black"></div><div class="bg-black"></div><div class="border border-black"></div>
                    </div>
                </div>
                <!-- Menu Toggle Button -->
                <button onclick="toggleInfoMenu()" class="p-6 flex flex-col items-center justify-center brutalist-border-b md:brutalist-border-b brutalist-border-r md:brutalist-border-r-0 hover:bg-black hover:text-editorial-bg transition-all brutalist-press group">
                    <div class="w-6 h-0.5 bg-black group-hover:bg-editorial-bg mb-1.5 transition-colors"></div>
                    <div class="w-6 h-0.5 bg-black group-hover:bg-editorial-bg mb-1.5 transition-colors"></div>
                    <div class="w-6 h-0.5 bg-black group-hover:bg-editorial-bg transition-colors"></div>
                    <span class="text-[9px] font-bold uppercase tracking-widest mt-2">menu</span>
                </button>
                <!-- Social Channels -->
                <div class="hidden md:flex flex-col items-center gap-6 py-8 brutalist-border-b text-xs font-bold tracking-widest">
                    <a href="#" class="hover:scale-110 transition-transform hover:underline">fb</a>
                    <a href="#" class="hover:scale-110 transition-transform hover:underline">tw</a>
                    <a href="#" class="hover:scale-110 transition-transform hover:underline">pin</a>
                    <a href="#" class="hover:scale-110 transition-transform hover:underline">yt</a>
                </div>
            </div>
            <!-- Bottom Segment / Rotated Label -->
            <div class="hidden md:flex py-8 items-center justify-center">
                <span class="vertical-text-rl transform rotate-180 text-xs font-bold tracking-[0.4em] uppercase opacity-75">
                    BLOG AND NEWS — VOL 04
                </span>
            </div>
        </div>

        <!-- ================= COLUMN 2 (Tetris Arcade & Interactive Promo) ================= -->
        <div class="flex flex-col brutalist-border-b md:brutalist-border-b-0 md:brutalist-border-r bg-editorial-bg transition-colors duration-300">
            <!-- Breadcrumb Category Header -->
            <div class="p-4 brutalist-border-b text-[10px] tracking-wide uppercase font-medium leading-relaxed">
                <div class="text-neutral-500">Category - Outfit</div>
                <div class="font-bold">Main Page / Woman / Boots / Yellow</div>
            </div>

            <!-- TETRIS ARCADE WIDGET -->
            <div class="p-4 brutalist-border-b bg-editorial-bg transition-colors duration-300">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold uppercase tracking-wider">Tetris Retro</span>
                    <span class="text-xs font-bold bg-black text-editorial-bg px-2 py-0.5" id="tetris-score">Score 000</span>
                </div>
                
                <!-- Game Viewport container -->
                <div class="relative bg-editorial-bgLighter brutalist-border p-1">
                    <div id="tetris-game-over" class="absolute inset-0 bg-black/95 text-editorial-bg flex flex-col items-center justify-center z-20 hidden">
                        <span class="font-serif italic text-lg mb-2">Game Over</span>
                        <button onclick="startTetris()" class="px-3 py-1 bg-white text-black text-xs font-bold uppercase hover:bg-editorial-bg hover:text-black transition-colors">Play Again</button>
                    </div>
                    
                    <!-- Grid Canvas or CSS block grid -->
                    <div id="tetris-grid" class="grid grid-cols-10 gap-0.5 bg-black/5 aspect-[10/16] w-full">
                        <!-- Filled dynamically by JavaScript -->
                    </div>
                </div>

                <!-- Controller / Action Buttons -->
                <div class="grid grid-cols-4 gap-1 mt-2 text-center">
                    <button onclick="moveTetrisLeft()" class="bg-black text-white py-1.5 text-xs font-bold hover:bg-neutral-800 brutalist-press">←</button>
                    <button onclick="rotateTetris()" class="bg-black text-white py-1.5 text-xs font-bold hover:bg-neutral-800 brutalist-press">ROT</button>
                    <button onclick="moveTetrisDown()" class="bg-black text-white py-1.5 text-xs font-bold hover:bg-neutral-800 brutalist-press">↓</button>
                    <button onclick="moveTetrisRight()" class="bg-black text-white py-1.5 text-xs font-bold hover:bg-neutral-800 brutalist-press">→</button>
                </div>
                <div class="mt-2 flex gap-1">
                    <button id="tetris-start-btn" onclick="startTetris()" class="w-full bg-black text-white py-1 text-[10px] uppercase font-bold tracking-widest hover:bg-editorial-accent hover:text-black transition-colors brutalist-press">
                        Power On
                    </button>
                </div>
            </div>

            <!-- LIVE EDITORIAL MINI BLOG / EDITORIAL PROMO -->
            <div class="p-6 brutalist-border-b flex-grow flex flex-col justify-between">
                <div>
                    <div class="overflow-hidden brutalist-border mb-4 bg-white relative group">
                        <!-- Dynamic filter styling applied -->
                        <img id="sidebar-blog-img" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80" alt="Model concept" class="w-full h-40 object-cover fashion-img transition-transform duration-500 group-hover:scale-105">
                        <div class="absolute bottom-2 left-2 bg-black text-white text-[9px] font-bold px-2 py-0.5 uppercase">
                            Concept 3.0
                        </div>
                    </div>
                    <h4 class="font-serif italic text-base leading-snug">"The yellow accent dictates the narrative of modern activewear."</h4>
                    <p class="text-[11px] text-neutral-700 mt-2 font-mono">— Edit 02 / Ilo Chani</p>
                </div>

                <!-- Live Interaction Indicator -->
                <div class="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-[11px] font-bold">
                    <span class="flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-green-600 animate-ping"></span>
                        182 Online Now
                    </span>
                    <a href="#catalogue" class="underline hover:text-editorial-accent">Browse live</a>
                </div>
            </div>

            <!-- PROMO VALIDATOR PANEL -->
            <div class="p-4 bg-black text-white flex flex-col gap-2">
                <label class="text-[10px] tracking-wider uppercase font-bold text-neutral-300">Enter Promo Code</label>
                <div class="flex brutalist-border border-white bg-white/10">
                    <input type="text" id="promo-input" placeholder="TETRIS50" class="bg-transparent px-3 py-1.5 text-xs text-white placeholder-neutral-400 focus:outline-none w-full uppercase font-mono">
                    <button onclick="applyPromoCode()" class="bg-white text-black px-4 py-1 text-xs font-bold uppercase hover:bg-editorial-bg transition-colors">Send</button>
                </div>
                <span id="promo-status" class="text-[9px] font-mono tracking-wide text-neutral-400">Try code: TETRIS50</span>
            </div>
        </div>

        <!-- ================= COLUMN 3 (Hero, Product Showcase & Interactive Core) ================= -->
        <div id="catalogue" class="flex flex-col brutalist-border-b md:brutalist-border-b-0 bg-editorial-bg transition-colors duration-300">
            
            <!-- Dynamic Banner Announcement -->
            <div class="p-4 brutalist-border-b flex justify-between items-center text-xs tracking-widest uppercase font-bold">
                <div class="flex items-center gap-2">
                    <span class="bg-black text-editorial-bg px-1 text-[10px]">UP TO 50% OFF</span>
                    <span>Spring/Summer Drop</span>
                </div>
                <span class="hidden sm:inline font-mono text-neutral-600" id="countdown-timer">12 Days Left</span>
            </div>

            <!-- HERO BRAND TITLE BANNER -->
            <div class="p-8 md:p-12 brutalist-border-b text-center relative overflow-hidden bg-editorial-bg transition-colors duration-300">
                <h1 class="font-serif text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight uppercase leading-none">
                    TETRIS WOMEN'S
                </h1>
                <div class="flex justify-center items-center gap-4 mt-2">
                    <div class="h-[1.5px] bg-black w-12"></div>
                    <span class="font-serif italic text-lg sm:text-2xl tracking-wider">Onlineshop Edition</span>
                    <div class="h-[1.5px] bg-black w-12"></div>
                </div>
                <p class="text-[10px] md:text-xs max-w-2xl mx-auto mt-4 text-neutral-700 italic leading-relaxed font-serif">
                    “*** Shop with us and stay connected... everything from neutral outfit essentials to the latest trending styles. Classic woven tops, crop tops, and short sleeve tops are absolute necessities for everyday expression.”
                </p>
            </div>

            <!-- CORE EDITORIAL SHOWCASE (Dynamic Split) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 flex-grow">
                
                <!-- Split Left: Focus Product Info (Interactive State) -->
                <div class="lg:col-span-4 p-8 brutalist-border-b lg:brutalist-border-b-0 lg:brutalist-border-r flex flex-col justify-between">
                    <div>
                        <span class="text-xs uppercase font-bold tracking-widest text-neutral-500">Active Editorial Focus</span>
                        <h2 id="hero-title" class="font-serif text-2xl sm:text-3xl font-extrabold mt-2 leading-tight">
                            Women's Activewear & Workout Clothes
                        </h2>
                        <div class="flex items-center gap-4 my-4">
                            <span id="hero-price-original" class="line-through text-neutral-500 font-serif text-base">$120.00</span>
                            <span id="hero-price" class="font-serif text-2xl font-bold bg-black text-white px-2 py-1">$60.00</span>
                        </div>
                        <p id="hero-desc" class="text-xs text-neutral-700 leading-relaxed mt-4 font-mono">
                            A high-density performance composite tailored for movement. Features a technical microfiber weave, contoured seam framing, and vintage yellow accents inspired by high-brutalist construction.
                        </p>
                    </div>

                    <!-- Size Selection & Add Actions -->
                    <div class="mt-8">
                        <div class="mb-4">
                            <span class="text-[10px] font-bold uppercase tracking-wider block mb-1.5">Select Size</span>
                            <div class="flex gap-2" id="size-selector">
                                <button onclick="selectSize('XS')" class="size-btn w-10 h-10 brutalist-border text-xs font-bold flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all brutalist-press">XS</button>
                                <button onclick="selectSize('S')" class="size-btn w-10 h-10 brutalist-border text-xs font-bold flex items-center justify-center bg-black text-white transition-all brutalist-press">S</button>
                                <button onclick="selectSize('M')" class="size-btn w-10 h-10 brutalist-border text-xs font-bold flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all brutalist-press">M</button>
                                <button onclick="selectSize('L')" class="size-btn w-10 h-10 brutalist-border text-xs font-bold flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all brutalist-press">L</button>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-2">
                            <button onclick="addToCartCurrent()" class="bg-black text-white py-3 px-4 brutalist-border brutalist-shadow text-xs uppercase font-bold tracking-widest hover:bg-neutral-800 transition-colors brutalist-press-large flex items-center justify-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                Buy Now
                            </button>
                            <button onclick="addToWishlistCurrent()" class="bg-white text-black py-3 px-4 brutalist-border brutalist-shadow text-xs uppercase font-bold tracking-widest hover:bg-neutral-100 transition-colors brutalist-press-large flex items-center justify-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Split Center: Main Dynamic Cutout Hero Graphics -->
                <div class="lg:col-span-5 p-4 brutalist-border-b lg:brutalist-border-b-0 lg:brutalist-border-r flex items-center justify-center relative bg-[#E6D7BD] transition-colors duration-300">
                    
                    <!-- Decorative technical layout metrics -->
                    <div class="absolute top-4 left-4 text-[9px] font-mono text-black/40">
                        LAT // 52.5200° N, 13.4050° E<br>REF // TR-SPRING20
                    </div>
                    <div class="absolute bottom-4 right-4 text-[9px] font-mono text-black/40 text-right">
                        CUTOUT PROFILE // ALPHA v1<br>SCALE // 1 : 1.4
                    </div>

                    <!-- Dynamic image slot -->
                    <div class="relative w-full max-w-[360px] aspect-[3/4] brutalist-border bg-editorial-bg brutalist-shadow-lg overflow-hidden group">
                        <img id="main-hero-image" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80" alt="Featured high-fashion wear" class="w-full h-full object-cover fashion-img transition-transform duration-700 group-hover:scale-105">
                        <div class="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none"></div>
                    </div>
                </div>

                <!-- Split Right: Dynamic Curated Showcase List -->
                <div class="lg:col-span-3 p-6 flex flex-col justify-between">
                    <div>
                        <div class="flex items-baseline justify-between brutalist-border-b pb-2 mb-4">
                            <span class="font-serif italic text-3xl font-extrabold">50%</span>
                            <span class="text-xs font-bold uppercase tracking-wider text-neutral-600">Exclusive Drop</span>
                        </div>
                        
                        <!-- Interactive Product Selection List -->
                        <div class="flex flex-col gap-2">
                            <!-- Item 1 (Active by default) -->
                            <div onclick="selectProduct(0)" id="prod-card-0" class="prod-card p-3 bg-black text-white brutalist-border cursor-pointer transition-all duration-300">
                                <div class="flex justify-between items-start">
                                    <h5 class="text-xs font-bold uppercase tracking-wider">01. Premium Activewear</h5>
                                    <span class="font-serif italic text-xs">$60.00</span>
                                </div>
                                <p class="text-[10px] text-neutral-300 mt-1 line-clamp-2">High performance structural stretch fabric with retro aesthetic details.</p>
                            </div>

                            <!-- Item 2 -->
                            <div onclick="selectProduct(1)" id="prod-card-1" class="prod-card p-3 bg-white hover:bg-black/5 text-black brutalist-border cursor-pointer transition-all duration-300">
                                <div class="flex justify-between items-start">
                                    <h5 class="text-xs font-bold uppercase tracking-wider">02. Floral Maxi Dress</h5>
                                    <span class="font-serif italic text-xs">$68.00</span>
                                </div>
                                <p class="text-[10px] text-neutral-600 mt-1 line-clamp-2">A crinkle woven maxi dress featuring a wildflower floral print, smocked back and shoulders.</p>
                            </div>

                            <!-- Item 3 -->
                            <div onclick="selectProduct(2)" id="prod-card-2" class="prod-card p-3 bg-white hover:bg-black/5 text-black brutalist-border cursor-pointer transition-all duration-300">
                                <div class="flex justify-between items-start">
                                    <h5 class="text-xs font-bold uppercase tracking-wider">03. Heavy Lug Sole Boots</h5>
                                    <span class="font-serif italic text-xs">$110.00</span>
                                </div>
                                <p class="text-[10px] text-neutral-600 mt-1 line-clamp-2">Aggressive tread profile in vibrant mustard tone. Hardened vulcanized canvas trim.</p>
                            </div>

                            <!-- Item 4 -->
                            <div onclick="selectProduct(3)" id="prod-card-3" class="prod-card p-3 bg-white hover:bg-black/5 text-black brutalist-border cursor-pointer transition-all duration-300">
                                <div class="flex justify-between items-start">
                                    <h5 class="text-xs font-bold uppercase tracking-wider">04. Leather Utility Bag</h5>
                                    <span class="font-serif italic text-xs">$45.00</span>
                                </div>
                                <p class="text-[10px] text-neutral-600 mt-1 line-clamp-2">Multi-chamber architectural carrying solution with adjustable webbed strapping.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Micro Testimonial Carousel -->
                    <div class="mt-8 pt-4 border-t border-black/10">
                        <div class="flex items-center gap-1.5 mb-1.5">
                            <span class="text-xs font-bold">★ ★ ★ ★ ★</span>
                        </div>
                        <p class="text-[10px] text-neutral-700 italic font-serif leading-relaxed" id="testimonial-quote">
                            "The structured silhouette completely changed my spring palette. Shipping was incredibly prompt!"
                        </p>
                        <span class="text-[9px] uppercase font-bold tracking-wider block mt-1" id="testimonial-author">— Clara K., Munich</span>
                    </div>
                </div>

            </div>

        </div>

        <!-- ================= SIDEBAR RIGHT 4 (E-Commerce Indicators) ================= -->
        <div class="flex md:flex-col justify-between brutalist-border-t md:brutalist-border-t-0 bg-editorial-bg transition-colors duration-300">
            <!-- Top Segment -->
            <div class="flex md:flex-col w-full">
                <!-- Shopping Cart Icon Indicator -->
                <button onclick="toggleCartDrawer()" class="p-6 flex flex-col items-center justify-center brutalist-border-b brutalist-border-r md:brutalist-border-r-0 hover:bg-black hover:text-editorial-bg transition-all brutalist-press group relative">
                    <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                    <span class="text-[9px] font-bold uppercase tracking-widest">cart</span>
                    <!-- Live Item Counter Badge -->
                    <div id="cart-badge" class="absolute top-4 right-4 bg-black text-white text-[9px] font-bold w-5 h-5 flex items-center justify-center rounded-none border border-white">0</div>
                </button>
                <!-- Wishlist Toggler -->
                <button onclick="toggleWishlistDrawer()" class="p-6 flex flex-col items-center justify-center brutalist-border-b brutalist-border-r md:brutalist-border-r-0 hover:bg-black hover:text-editorial-bg transition-all brutalist-press group relative">
                    <svg class="w-6 h-6 mb-1 text-black group-hover:text-editorial-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    <span class="text-[9px] font-bold uppercase tracking-widest">wishlist</span>
                    <div id="wishlist-badge" class="absolute top-4 right-4 bg-black text-white text-[9px] font-bold w-5 h-5 flex items-center justify-center rounded-none border border-white">0</div>
                </button>
                <!-- Quick Sign In -->
                <button onclick="openSignModal()" class="p-6 flex flex-col items-center justify-center brutalist-border-b hover:bg-black hover:text-editorial-bg transition-all brutalist-press group">
                    <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    <span class="text-[9px] font-bold uppercase tracking-widest">sign in</span>
                </button>
            </div>
            <!-- Bottom Segment / Rotated Label -->
            <div class="hidden md:flex py-8 items-center justify-center brutalist-border-t">
                <span class="vertical-text-lr text-xs font-bold tracking-[0.4em] uppercase opacity-75">
                    NEXT PRODUCT →
                </span>
            </div>
            <!-- Language Picker -->
            <div class="p-6 flex items-center justify-center brutalist-border-t text-xs font-bold hover:bg-black hover:text-white cursor-pointer transition-colors">
                EN
            </div>
        </div>

    </div>

    <!-- ================= SLIDE OUT CARTS & MODALS ================= -->

    <!-- Interactive Shopping Cart Drawer -->
    <div id="cart-drawer" class="fixed top-0 right-0 h-full w-full max-w-[400px] bg-editorial-bg brutalist-border-l z-50 p-6 shadow-2xl flex flex-col justify-between translate-x-full drawer transition-transform duration-300">
        <div>
            <div class="flex justify-between items-center brutalist-border-b pb-4 mb-6">
                <h3 class="font-serif italic text-2xl font-bold">Shopping Cart</h3>
                <button onclick="toggleCartDrawer()" class="bg-black text-white p-2 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800">Close ×</button>
            </div>
            <div id="cart-items-list" class="flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-2">
                <!-- Cart items populated by JS -->
                <div class="text-xs text-neutral-500 italic py-8 text-center">Your bag is currently empty. Find items you love to add them here!</div>
            </div>
        </div>

        <div class="brutalist-border-t pt-4">
            <div class="flex justify-between items-baseline mb-4">
                <span class="text-xs uppercase font-bold tracking-wider">Subtotal:</span>
                <span id="cart-subtotal" class="font-serif text-2xl font-bold">$0.00</span>
            </div>
            <div id="applied-discount-line" class="hidden justify-between items-baseline mb-4 text-emerald-800">
                <span class="text-xs uppercase font-bold tracking-wider">Promo Code Discount:</span>
                <span id="discount-amount" class="font-serif text-lg font-bold">-$0.00</span>
            </div>
            <div class="flex justify-between items-baseline mb-4 text-xl border-t border-black/15 pt-2 font-bold">
                <span class="text-sm uppercase tracking-wider">Estimated Total:</span>
                <span id="cart-total" class="font-serif text-3xl">$0.00</span>
            </div>
            <button onclick="checkoutMock()" class="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 brutalist-shadow brutalist-press-large">
                Proceed to Checkout
            </button>
        </div>
    </div>

    <!-- Interactive Wishlist Drawer -->
    <div id="wishlist-drawer" class="fixed top-0 right-0 h-full w-full max-w-[400px] bg-editorial-bg brutalist-border-l z-50 p-6 shadow-2xl flex flex-col justify-between translate-x-full drawer transition-transform duration-300">
        <div>
            <div class="flex justify-between items-center brutalist-border-b pb-4 mb-6">
                <h3 class="font-serif italic text-2xl font-bold">My Wishlist</h3>
                <button onclick="toggleWishlistDrawer()" class="bg-black text-white p-2 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800">Close ×</button>
            </div>
            <div id="wishlist-items-list" class="flex flex-col gap-4 max-h-[70vh] overflow-y-auto pr-2">
                <!-- Wishlist items populated by JS -->
                <div class="text-xs text-neutral-500 italic py-8 text-center">Your wishlist is currently empty.</div>
            </div>
        </div>
    </div>

    <!-- Sign In Modal -->
    <div id="sign-modal" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center hidden p-4">
        <div class="bg-editorial-bg p-8 brutalist-border brutalist-shadow-lg w-full max-w-md relative">
            <button onclick="closeSignModal()" class="absolute top-4 right-4 bg-black text-white px-2 py-1 text-xs font-bold">×</button>
            <h3 class="font-serif italic text-3xl font-bold mb-2">Sign In</h3>
            <p class="text-xs text-neutral-700 mb-6 font-mono">Join Tetris Club for private drops and member pricing.</p>
            
            <form onsubmit="handleLoginSubmit(event)" class="flex flex-col gap-4">
                <div>
                    <label class="text-[10px] uppercase font-bold tracking-widest block mb-1">Email Address</label>
                    <input type="email" required placeholder="name@domain.com" class="w-full p-2 text-xs brutalist-border focus:outline-none">
                </div>
                <div>
                    <label class="text-[10px] uppercase font-bold tracking-widest block mb-1">Password</label>
                    <input type="password" required placeholder="••••••••" class="w-full p-2 text-xs brutalist-border focus:outline-none">
                </div>
                <button type="submit" class="bg-black text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 brutalist-press-large mt-2">
                    Enter the Club
                </button>
            </form>
        </div>
    </div>

    <!-- Interactive Notification Toast -->
    <div id="toast" class="fixed top-6 right-6 z-50 bg-black text-white p-4 brutalist-border brutalist-shadow transform translate-y-[-100px] opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-3">
        <span id="toast-message" class="text-xs font-bold uppercase tracking-wider">Item Added Successfully!</span>
    </div>

    <!-- Global Fullscreen Info Panel overlay -->
    <div id="info-menu" class="fixed inset-0 bg-black/95 text-editorial-bg z-40 flex flex-col items-center justify-center p-8 hidden">
        <button onclick="toggleInfoMenu()" class="absolute top-8 right-8 bg-editorial-bg text-black px-4 py-2 text-xs font-bold uppercase tracking-widest brutalist-press">
            Close Panel ×
        </button>
        <div class="max-w-2xl text-center flex flex-col gap-6">
            <h2 class="font-serif text-4xl md:text-6xl font-extrabold italic">Editorial Archive</h2>
            <p class="font-mono text-xs md:text-sm text-neutral-300 leading-relaxed">
                Tetris Women's Onlineshop represents the intersection of digital brutalism and athletic high-fashion. Operating with a modular architectural framework, we offer garments structured around geometry, color blocks, and extreme utility.
            </p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div class="p-4 border border-editorial-bg/20 text-center">
                    <span class="block text-xl font-bold font-serif italic">100%</span>
                    <span class="text-[9px] uppercase tracking-widest text-neutral-400">Organic Fibres</span>
                </div>
                <div class="p-4 border border-editorial-bg/20 text-center">
                    <span class="block text-xl font-bold font-serif italic">EU</span>
                    <span class="text-[9px] uppercase tracking-widest text-neutral-400">Sourced & Crafted</span>
                </div>
                <div class="p-4 border border-editorial-bg/20 text-center col-span-2 md:col-span-1">
                    <span class="block text-xl font-bold font-serif italic">24/7</span>
                    <span class="text-[9px] uppercase tracking-widest text-neutral-400">Global Archive Support</span>
                </div>
            </div>
            <div class="mt-8">
                <span class="text-[10px] uppercase tracking-widest text-neutral-400">Inspired by Vintage Editorial Formats</span>
            </div>
        </div>
    </div>

    <!-- ================= JAVASCRIPT LOGIC ================= -->
    <script>
        // --- DATA ARCHIVE (PRODUCTS) ---
        const products = [
            {
                id: 1,
                name: "Women's Activewear & Workout Clothes",
                originalPrice: 120.00,
                price: 60.00,
                image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
                desc: "A high-density performance composite tailored for movement. Features a technical microfiber weave, contoured seam framing, and vintage yellow accents inspired by high-brutalist construction.",
                badge: "Concept 3.0",
                slug: "SPRING20"
            },
            {
                id: 2,
                name: "Floral Off-the-Shoulder Maxi Dress",
                originalPrice: 136.00,
                price: 68.00,
                image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
                desc: "A crinkle woven maxi dress featuring a wildflower floral print, smocked back and shoulders, tiered ruffle hemline, and relaxed side-slit profile for warm weather statement layering.",
                badge: "Summer Line",
                slug: "FLORAL"
            },
            {
                id: 3,
                name: "Heavy Lug Sole Runway Boots",
                originalPrice: 220.00,
                price: 110.00,
                image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80",
                desc: "Handcrafted industrial footwear. Heavy tread rubber base colored in signature Ochre Mustard, coupled with ultra-durable full-grain leather framework and contrast stitch metrics.",
                badge: "Footwear",
                slug: "HEAVY-BOOT"
            },
            {
                id: 4,
                name: "Architectural Leather Utility Bag",
                originalPrice: 90.00,
                price: 45.00,
                image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
                desc: "Geometric structural carryall with high tensile black steel hardware, internal modular organizing segments, and raw natural lining details for high daily utility.",
                badge: "Leather Accessories",
                slug: "LEATHER-BAG"
            }
        ];

        // Custom Testimonials for items
        const testimonials = [
            { quote: '"The structured silhouette completely changed my spring palette. Shipping was incredibly prompt!"', author: '— Clara K., Munich' },
            { quote: '"Stunning flow and heavy texture. This is a garment you can feel the architectural weight of."', author: '— Elena V., Milan' },
            { quote: '"The lug boots are absolutely premium. I get comments every time I stride down the street."', author: '— Beatrice L., Paris' },
            { quote: '"Impeccable minimalism. Perfect contrast against simple black layers. Fast delivery."', author: '— Sun-Woo J., Seoul' }
        ];

        // --- GLOBAL STATE ---
        let currentProductIndex = 0;
        let selectedSize = 'S';
        let cart = [];
        let wishlist = [];
        let promoApplied = false;
        let discountMultiplier = 1.0;

        // --- THEME COLOR CHANGERS ---
        function toggleThemeConfig() {
            const panel = document.getElementById('theme-panel');
            panel.classList.toggle('hidden');
        }

        function changeColorway(primary, secondary) {
            // Re-map the theme colors on the fly
            const shop = document.getElementById('main-shop-container');
            const body = document.body;
            
            // Adjust body background (outer canvas)
            body.style.backgroundColor = secondary;
            
            // For primary items
            document.querySelectorAll('.bg-editorial-bg').forEach(el => {
                el.style.backgroundColor = primary;
            });
            shop.style.backgroundColor = primary;
            
            // Close panel
            toggleThemeConfig();
        }

        // --- PRODUCT EXPLORER MECHANICS ---
        function selectProduct(index) {
            currentProductIndex = index;
            const p = products[index];

            // Update UI contents
            document.getElementById('hero-title').innerText = p.name;
            document.getElementById('hero-price-original').innerText = `$${p.originalPrice.toFixed(2)}`;
            document.getElementById('hero-price').innerText = `$${p.price.toFixed(2)}`;
            document.getElementById('hero-desc').innerText = p.desc;
            document.getElementById('main-hero-image').src = p.image;
            document.getElementById('sidebar-blog-img').src = p.image;

            // Testimonial matching
            document.getElementById('testimonial-quote').innerText = testimonials[index].quote;
            document.getElementById('testimonial-author').innerText = testimonials[index].author;

            // Highlight card list in right panel
            document.querySelectorAll('.prod-card').forEach((card, idx) => {
                if(idx === index) {
                    card.className = "prod-card p-3 bg-black text-white brutalist-border cursor-pointer transition-all duration-300";
                    // Reset secondary paragraph text colors
                    card.querySelector('p').className = "text-[10px] text-neutral-300 mt-1 line-clamp-2";
                } else {
                    card.className = "prod-card p-3 bg-white hover:bg-black/5 text-black brutalist-border cursor-pointer transition-all duration-300";
                    card.querySelector('p').className = "text-[10px] text-neutral-600 mt-1 line-clamp-2";
                }
            });
        }

        // --- SIZE SELECTOR ---
        function selectSize(size) {
            selectedSize = size;
            document.querySelectorAll('.size-btn').forEach(btn => {
                if (btn.innerText === size) {
                    btn.className = "size-btn w-10 h-10 brutalist-border text-xs font-bold flex items-center justify-center bg-black text-white transition-all brutalist-press";
                } else {
                    btn.className = "size-btn w-10 h-10 brutalist-border text-xs font-bold flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all brutalist-press";
                }
            });
        }

        // --- TOAST NOTIFICATIONS ---
        function showToast(message) {
            const toast = document.getElementById('toast');
            const msgSpan = document.getElementById('toast-message');
            msgSpan.innerText = message;
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';

            setTimeout(() => {
                toast.style.transform = 'translateY(-100px)';
                toast.style.opacity = '0';
            }, 3000);
        }

        // --- E-COMMERCE LOGIC (CART & WISHLIST) ---
        function addToCartCurrent() {
            const item = products[currentProductIndex];
            // Check if already in cart with same size
            const existing = cart.find(i => i.id === item.id && i.size === selectedSize);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    size: selectedSize,
                    image: item.image,
                    quantity: 1
                });
            }
            updateCartUI();
            showToast(`ADDED ${item.name} [Size ${selectedSize}] TO BAG!`);
        }

        function addToWishlistCurrent() {
            const item = products[currentProductIndex];
            const existing = wishlist.find(i => i.id === item.id);
            if (!existing) {
                wishlist.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image
                });
                updateWishlistUI();
                showToast(`ADDED ${item.name} TO WISHLIST!`);
            } else {
                showToast(`ITEM IS ALREADY IN WISHLIST.`);
            }
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartUI();
        }

        function removeFromWishlist(index) {
            wishlist.splice(index, 1);
            updateWishlistUI();
        }

        function updateCartUI() {
            const listContainer = document.getElementById('cart-items-list');
            const cartBadge = document.getElementById('cart-badge');
            
            // Total items count
            const count = cart.reduce((acc, curr) => acc + curr.quantity, 0);
            cartBadge.innerText = count;

            if (cart.length === 0) {
                listContainer.innerHTML = `<div class="text-xs text-neutral-500 italic py-8 text-center">Your bag is currently empty. Find items you love to add them here!</div>`;
                updatePrices(0);
                return;
            }

            let html = '';
            let subtotal = 0;
            cart.forEach((item, index) => {
                subtotal += (item.price * item.quantity);
                html += `
                    <div class="flex gap-4 p-3 border border-black bg-white">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover border border-black fashion-img">
                        <div class="flex-grow flex flex-col justify-between">
                            <div>
                                <h4 class="text-xs font-bold uppercase tracking-wider line-clamp-1">${item.name}</h4>
                                <span class="text-[10px] text-neutral-600 font-mono">Size: ${item.size} | Qty: ${item.quantity}</span>
                            </div>
                            <div class="flex justify-between items-baseline mt-2">
                                <span class="font-serif text-sm font-bold">$${(item.price * item.quantity).toFixed(2)}</span>
                                <button onclick="removeFromCart(${index})" class="text-[9px] text-red-700 font-bold hover:underline">Remove</button>
                            </div>
                        </div>
                    </div>
                `;
            });
            listContainer.innerHTML = html;
            updatePrices(subtotal);
        }

        function updateWishlistUI() {
            const listContainer = document.getElementById('wishlist-items-list');
            const wishlistBadge = document.getElementById('wishlist-badge');

            wishlistBadge.innerText = wishlist.length;

            if (wishlist.length === 0) {
                listContainer.innerHTML = `<div class="text-xs text-neutral-500 italic py-8 text-center">Your wishlist is currently empty.</div>`;
                return;
            }

            let html = '';
            wishlist.forEach((item, index) => {
                html += `
                    <div class="flex gap-4 p-3 border border-black bg-white">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover border border-black fashion-img">
                        <div class="flex-grow flex flex-col justify-between">
                            <div>
                                <h4 class="text-xs font-bold uppercase tracking-wider line-clamp-1">${item.name}</h4>
                                <span class="font-serif text-sm font-bold">$${item.price.toFixed(2)}</span>
                            </div>
                            <div class="flex gap-2 justify-end mt-2">
                                <button onclick="addFromWishlistToCart(${index})" class="text-[10px] bg-black text-white px-2 py-1 font-bold uppercase hover:bg-editorial-accent">Add to Cart</button>
                                <button onclick="removeFromWishlist(${index})" class="text-[10px] text-red-700 font-bold hover:underline">Delete</button>
                            </div>
                        </div>
                    </div>
                `;
            });
            listContainer.innerHTML = html;
        }

        function addFromWishlistToCart(index) {
            const item = wishlist[index];
            const existing = cart.find(i => i.id === item.id && i.size === 'S'); // default to S
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    size: 'S',
                    image: item.image,
                    quantity: 1
                });
            }
            wishlist.splice(index, 1);
            updateCartUI();
            updateWishlistUI();
            showToast("MOVED ITEM FROM WISHLIST TO BAG!");
        }

        function updatePrices(subtotal) {
            const subtotalEl = document.getElementById('cart-subtotal');
            const totalEl = document.getElementById('cart-total');
            const discountLine = document.getElementById('applied-discount-line');
            const discountAmountEl = document.getElementById('discount-amount');

            subtotalEl.innerText = `$${subtotal.toFixed(2)}`;

            if (promoApplied) {
                const discount = subtotal * (1 - discountMultiplier);
                const finalTotal = subtotal * discountMultiplier;
                
                discountLine.classList.remove('hidden');
                discountLine.classList.add('flex');
                discountAmountEl.innerText = `-$${discount.toFixed(2)}`;
                totalEl.innerText = `$${finalTotal.toFixed(2)}`;
            } else {
                discountLine.classList.add('hidden');
                discountLine.classList.remove('flex');
                totalEl.innerText = `$${subtotal.toFixed(2)}`;
            }
        }

        // --- PROMO CODE VALIDATION ---
        function applyPromoCode() {
            const input = document.getElementById('promo-input').value.toUpperCase().trim();
            const status = document.getElementById('promo-status');

            if (input === 'TETRIS50') {
                promoApplied = true;
                discountMultiplier = 0.50; // 50% Off
                status.innerText = "PROMO CODE TETRIS50 ACCEPTED! (50% Applied)";
                status.className = "text-[9px] font-mono tracking-wide text-green-700 font-bold";
                showToast("50% DISCOUNT APPLIED SUCCESSFULLY!");
            } else if (input === 'SPRING20') {
                promoApplied = true;
                discountMultiplier = 0.80; // 20% Off
                status.innerText = "PROMO CODE SPRING20 ACCEPTED! (20% Applied)";
                status.className = "text-[9px] font-mono tracking-wide text-green-700 font-bold";
                showToast("20% DISCOUNT APPLIED SUCCESSFULLY!");
            } else {
                promoApplied = false;
                discountMultiplier = 1.0;
                status.innerText = "INVALID PROMO CODE. Try 'TETRIS50'";
                status.className = "text-[9px] font-mono tracking-wide text-red-600 font-bold";
            }
            
            // Re-calc cart if populated
            const subtotalRaw = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
            updatePrices(subtotalRaw);
        }

        // --- CHECKOUT MOCK ACTION ---
        function checkoutMock() {
            if(cart.length === 0) {
                showToast("YOUR BAG IS EMPTY. ADD PRODUCTS FIRST.");
                return;
            }
            showToast("ORDER PROCESSED! THANK YOU FOR SECURING YOUR TETRIS DROP.");
            cart = [];
            updateCartUI();
            toggleCartDrawer();
        }

        // --- DRAWER INTERFACES ---
        function toggleCartDrawer() {
            const drawer = document.getElementById('cart-drawer');
            drawer.classList.toggle('translate-x-full');
        }

        function toggleWishlistDrawer() {
            const drawer = document.getElementById('wishlist-drawer');
            drawer.classList.toggle('translate-x-full');
        }

        function openSignModal() {
            document.getElementById('sign-modal').classList.remove('hidden');
        }

        function closeSignModal() {
            document.getElementById('sign-modal').classList.add('hidden');
        }

        function handleLoginSubmit(event) {
            event.preventDefault();
            closeSignModal();
            showToast("LOGGED IN SECURELY TO THE MEMBER CLUB.");
        }

        function toggleInfoMenu() {
            document.getElementById('info-menu').classList.toggle('hidden');
        }

        // --- COUNTDOWN TIMER ---
        let daysLeft = 12;
        let hoursLeft = 14;
        let minutesLeft = 32;
        let secondsLeft = 10;
        
        setInterval(() => {
            secondsLeft--;
            if (secondsLeft < 0) {
                secondsLeft = 59;
                minutesLeft--;
                if (minutesLeft < 0) {
                    minutesLeft = 59;
                    hoursLeft--;
                    if (hoursLeft < 0) {
                        hoursLeft = 23;
                        daysLeft--;
                        if (daysLeft < 0) {
                            daysLeft = 12; // restart loop mock
                        }
                    }
                }
            }
            document.getElementById('countdown-timer').innerText = `${daysLeft}D : ${hoursLeft}H : ${minutesLeft}M : ${secondsLeft}S LEFT`;
        }, 1000);

        // ==========================================
        // ============= TETRIS ARCADE ENGINE ======
        // ==========================================
        const GRID_WIDTH = 10;
        const GRID_HEIGHT = 16;
        let tetrisGrid = Array(GRID_HEIGHT).fill(null).map(() => Array(GRID_WIDTH).fill(0));
        let tetrisInterval = null;
        let score = 0;
        let gameActive = false;

        const SHAPES = {
            'I': [[1,1,1,1]],
            'O': [[1,1],[1,1]],
            'T': [[0,1,0],[1,1,1]],
            'L': [[1,0],[1,0],[1,1]],
            'J': [[0,1],[0,1],[1,1]],
            'Z': [[1,1,0],[0,1,1]],
            'S': [[0,1,1],[1,1,0]]
        };

        const SHAPE_NAMES = ['I', 'O', 'T', 'L', 'J', 'Z', 'S'];
        let currentPiece = null;
        let currentX = 3;
        let currentY = 0;

        function buildVisualGrid() {
            const gridContainer = document.getElementById('tetris-grid');
            gridContainer.innerHTML = '';
            for(let y=0; y<GRID_HEIGHT; y++) {
                for(let x=0; x<GRID_WIDTH; x++) {
                    const block = document.createElement('div');
                    block.id = `cell-${y}-${x}`;
                    block.className = 'w-full h-full border border-black/5 bg-transparent transition-colors duration-100';
                    gridContainer.appendChild(block);
                }
            }
        }

        function drawTetris() {
            // clear active colors
            for(let y=0; y<GRID_HEIGHT; y++) {
                for(let x=0; x<GRID_WIDTH; x++) {
                    const cell = document.getElementById(`cell-${y}-${x}`);
                    if (tetrisGrid[y][x] === 1) {
                        cell.className = 'w-full h-full bg-black border border-neutral-700';
                    } else {
                        cell.className = 'w-full h-full bg-transparent border border-black/5';
                    }
                }
            }

            // draw current falling piece
            if(currentPiece) {
                for(let r=0; r<currentPiece.matrix.length; r++) {
                    for(let c=0; c<currentPiece.matrix[r].length; c++) {
                        if(currentPiece.matrix[r][c] === 1) {
                            const targetY = currentY + r;
                            const targetX = currentX + c;
                            if (targetY >= 0 && targetY < GRID_HEIGHT && targetX >= 0 && targetX < GRID_WIDTH) {
                                const cell = document.getElementById(`cell-${targetY}-${targetX}`);
                                cell.className = 'w-full h-full bg-black border border-neutral-700';
                            }
                        }
                    }
                }
            }
        }

        function createNewPiece() {
            const randomType = SHAPE_NAMES[Math.floor(Math.random() * SHAPE_NAMES.length)];
            currentPiece = {
                type: randomType,
                matrix: SHAPES[randomType]
            };
            currentX = Math.floor((GRID_WIDTH - currentPiece.matrix[0].length)/2);
            currentY = 0;

            // Collision immediately? -> Game Over
            if(checkCollision(currentPiece.matrix, currentX, currentY)) {
                gameOver();
            }
        }

        function checkCollision(matrix, px, py) {
            for(let r=0; r<matrix.length; r++) {
                for(let c=0; c<matrix[r].length; c++) {
                    if(matrix[r][c] === 1) {
                        const targetY = py + r;
                        const targetX = px + c;

                        // bounds check
                        if(targetX < 0 || targetX >= GRID_WIDTH || targetY >= GRID_HEIGHT) {
                            return true;
                        }
                        // background collision
                        if(targetY >= 0 && tetrisGrid[targetY][targetX] === 1) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        function mergePiece() {
            for(let r=0; r<currentPiece.matrix.length; r++) {
                for(let c=0; c<currentPiece.matrix[r].length; c++) {
                    if(currentPiece.matrix[r][c] === 1) {
                        const targetY = currentY + r;
                        const targetX = currentX + c;
                        if (targetY >= 0) {
                            tetrisGrid[targetY][targetX] = 1;
                        }
                    }
                }
            }
        }

        function clearRows() {
            let rowsCleared = 0;
            for(let y = GRID_HEIGHT - 1; y >= 0; y--) {
                if(tetrisGrid[y].every(val => val === 1)) {
                    // remove row
                    tetrisGrid.splice(y, 1);
                    // insert empty row at top
                    tetrisGrid.unshift(Array(GRID_WIDTH).fill(0));
                    rowsCleared++;
                    y++; // check same row index again
                }
            }
            if(rowsCleared > 0) {
                score += (rowsCleared * 100);
                document.getElementById('tetris-score').innerText = `Score ${score}`;
            }
        }

        function runTetrisCycle() {
            if(!gameActive) return;
            if(!checkCollision(currentPiece.matrix, currentX, currentY + 1)) {
                currentY++;
            } else {
                mergePiece();
                clearRows();
                createNewPiece();
            }
            drawTetris();
        }

        function startTetris() {
            document.getElementById('tetris-game-over').classList.add('hidden');
            tetrisGrid = Array(GRID_HEIGHT).fill(null).map(() => Array(GRID_WIDTH).fill(0));
            score = 0;
            document.getElementById('tetris-score').innerText = `Score 000`;
            gameActive = true;
            createNewPiece();
            drawTetris();

            if(tetrisInterval) clearInterval(tetrisInterval);
            tetrisInterval = setInterval(runTetrisCycle, 450);

            // Update Start btn tag to active
            document.getElementById('tetris-start-btn').innerText = "Game Active";
        }

        function moveTetrisLeft() {
            if(!gameActive) return;
            if(!checkCollision(currentPiece.matrix, currentX - 1, currentY)) {
                currentX--;
                drawTetris();
            }
        }

        function moveTetrisRight() {
            if(!gameActive) return;
            if(!checkCollision(currentPiece.matrix, currentX + 1, currentY)) {
                currentX++;
                drawTetris();
            }
        }

        function moveTetrisDown() {
            if(!gameActive) return;
            if(!checkCollision(currentPiece.matrix, currentX, currentY + 1)) {
                currentY++;
                drawTetris();
            }
        }

        function rotateTetris() {
            if(!gameActive) return;
            // rotate matrix
            const n = currentPiece.matrix.length;
            const m = currentPiece.matrix[0].length;
            let rotated = Array(m).fill(null).map(() => Array(n).fill(0));
            for(let r=0; r<n; r++) {
                for(let c=0; c<m; c++) {
                    rotated[c][n - 1 - r] = currentPiece.matrix[r][c];
                }
            }
            // check if rotated has collision
            if(!checkCollision(rotated, currentX, currentY)) {
                currentPiece.matrix = rotated;
                drawTetris();
            }
        }

        function gameOver() {
            gameActive = false;
            clearInterval(tetrisInterval);
            document.getElementById('tetris-game-over').classList.remove('hidden');
            document.getElementById('tetris-start-btn').innerText = "Restart Game";
        }

        // --- KEYBOARD LISTENER FOR FUN ARCADE PLAYING ---
        window.addEventListener('keydown', (e) => {
            if(!gameActive) return;
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'].includes(e.code)) {
                e.preventDefault(); // prevent scroll
            }
            if(e.code === 'ArrowLeft') moveTetrisLeft();
            if(e.code === 'ArrowRight') moveTetrisRight();
            if(e.code === 'ArrowDown') moveTetrisDown();
            if(e.code === 'ArrowUp') rotateTetris();
        });

        // Initialize Shop UI
        window.onload = function() {
            buildVisualGrid();
            // Load first default item
            selectProduct(0);
        }

    </script>
</body>
</html>
9
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JUPITER // Out of This World Prebiotic Elixirs</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@800&display=swap" rel="stylesheet">
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        serif: ['"DM Serif Display"', 'serif'],
                        display: ['"Syne"', 'sans-serif'],
                    },
                    colors: {
                        obsidian: '#0c0a0a',
                        cardBg: '#131111',
                        terracotta: {
                            DEFAULT: '#9e3e23',
                            hover: '#b94c2d',
                            light: '#ebd7d1',
                        },
                        cream: '#f4ebe1',
                        sand: '#a89c91',
                    },
                    animation: {
                        'spin-slow': 'spin 12s linear infinite',
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px) rotate(-3deg)' },
                            '50%': { transform: 'translateY(-12px) rotate(-1deg)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* CSS Analog Film Grain Overlay */
        .grain-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            content: "";
            opacity: 0.045;
            pointer-events: none;
            z-index: 9999;
            background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* Starburst vintage badge polygon */
        .starburst {
            clip-path: polygon(100% 50%, 91% 62%, 98% 75%, 85% 80%, 88% 93%, 75% 91%, 71% 100%, 58% 91%, 50% 98%, 42% 91%, 29% 100%, 25% 91%, 12% 93%, 15% 80%, 2% 75%, 9% 62%, 0% 50%, 9% 38%, 2% 25%, 15% 20%, 12% 7%, 25% 9%, 29% 0%, 42% 9%, 50% 2%, 58% 9%, 71% 0%, 75% 9%, 88% 7%, 85% 20%, 98% 25%, 91% 38%);
        }

        /* Smooth scrollbar styling */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0c0a0a;
        }
        ::-webkit-scrollbar-thumb {
            background: #2b2323;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #9e3e23;
        }

        /* Dynamic background glow transitions */
        .theme-transition {
            transition: background-color 0.8s ease, color 0.8s ease, border-color 0.8s ease, fill 0.8s ease;
        }

        /* Perspective for bottle container */
        .perspective-container {
            perspective: 1000px;
        }
    </style>
</head>
<body class="bg-obsidian text-cream font-sans selection:bg-terracotta selection:text-cream overflow-x-hidden theme-transition">

    <!-- Analog grain texture mapped to viewport -->
    <div class="grain-overlay"></div>

    <!-- HEADER / NAVIGATION -->
    <header class="fixed top-0 left-0 w-full z-50 bg-obsidian/85 backdrop-blur-md border-b border-cream/5 theme-transition px-6 py-4 md:px-12 flex justify-between items-center">
        <!-- Brand Logo -->
        <a href="#hero" class="group flex items-center gap-2">
            <span class="font-display text-2xl tracking-tighter text-terracotta group-hover:text-cream transition-colors duration-300">JUPITER</span>
        </a>

        <!-- Main Links (Desktop) -->
        <nav class="hidden md:flex items-center gap-10">
            <a href="#flavors" class="text-xs uppercase tracking-[0.25em] font-medium text-sand hover:text-cream transition-colors duration-300">Shop Now</a>
            <a href="#story" class="text-xs uppercase tracking-[0.25em] font-medium text-sand hover:text-cream transition-colors duration-300">Our Story</a>
            <a href="#science" class="text-xs uppercase tracking-[0.25em] font-medium text-sand hover:text-cream transition-colors duration-300">Science</a>
            <a href="#bundle" class="text-xs uppercase tracking-[0.25em] font-medium text-sand hover:text-cream transition-colors duration-300">Build Box</a>
        </nav>

        <!-- Right Side Controls -->
        <div class="flex items-center gap-4">
            <!-- Mobile Menu Toggle -->
            <button onclick="toggleMobileMenu()" class="md:hidden p-2 text-sand hover:text-cream focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
            </button>
            <button onclick="toggleCart()" class="relative border border-terracotta/40 hover:border-terracotta hover:bg-terracotta/10 px-6 py-2 rounded-full text-xs uppercase tracking-widest font-semibold text-cream transition-all duration-300">
                Cart
                <span id="cart-counter" class="absolute -top-1.5 -right-1.5 bg-terracotta text-[10px] text-cream w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg animate-bounce">0</span>
            </button>
        </div>
    </header>

    <!-- MOBILE NAVIGATION MENU -->
    <div id="mobile-menu" class="fixed inset-0 bg-obsidian/98 z-40 hidden flex-col justify-center items-center gap-8 px-6 transition-all duration-300 border-b border-terracotta/20">
        <button onclick="toggleMobileMenu()" class="absolute top-6 right-6 text-cream hover:text-terracotta transition-colors">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <a href="#flavors" onclick="toggleMobileMenu()" class="font-display text-3xl text-sand hover:text-cream">Shop Now</a>
        <a href="#story" onclick="toggleMobileMenu()" class="font-display text-3xl text-sand hover:text-cream">Our Story</a>
        <a href="#science" onclick="toggleMobileMenu()" class="font-display text-3xl text-sand hover:text-cream">Science</a>
        <a href="#bundle" onclick="toggleMobileMenu()" class="font-display text-3xl text-sand hover:text-cream">Build Box</a>
    </div>

    <!-- HERO SECTION (Mirroring the inspiration layout & visual universe) -->
    <section id="hero" class="relative min-h-screen pt-24 flex flex-col justify-between overflow-hidden bg-[#0a0808]">
        <!-- Top Cosmic Glow -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[400px] bg-gradient-to-b from-terracotta/20 to-transparent blur-[120px] pointer-events-none rounded-full"></div>

        <!-- Huge Background Text (Dynamic update on flavor choice) -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <h1 id="hero-bg-text" class="font-display text-[26vw] leading-none text-[#1c1311] tracking-tighter uppercase transition-all duration-[1000ms] ease-out select-none">
                EUROPA
            </h1>
        </div>

        <!-- Hero Content Grid -->
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 md:px-12 my-auto items-center w-full">
            
            <!-- Left Info Panel (Descriptive Serif copy) -->
            <div class="lg:col-span-4 flex flex-col justify-end lg:h-[450px] order-2 lg:order-1 pt-6 lg:pt-0">
                <p id="hero-description" class="font-serif text-2xl md:text-3xl leading-snug text-cream/90 max-w-sm">
                    Tastes like the soda you grew up sipping, but with the added benefit of microbiome and digestive health support today.
                </p>
                <div class="mt-6 flex flex-wrap gap-4 items-center">
                    <span class="px-3 py-1 border border-cream/10 rounded-full text-[10px] tracking-widest text-sand uppercase bg-cream/[0.02]">0g Added Sugar</span>
                    <span class="px-3 py-1 border border-cream/10 rounded-full text-[10px] tracking-widest text-sand uppercase bg-cream/[0.02]">9g Plant Fiber</span>
                </div>
            </div>

            <!-- Central Bottle Mockup Area with Parallax and Dynamic Interactive Glows -->
            <div class="lg:col-span-5 flex justify-center items-center relative perspective-container h-[350px] md:h-[500px] order-1 lg:order-2 z-20">
                <!-- Glowing Aura behind the bottle -->
                <div id="bottle-aura" class="absolute w-[280px] h-[280px] rounded-full bg-terracotta/25 blur-[80px] animate-pulse transition-all duration-700"></div>
                
                <!-- SVG Bottle Render (Dynamic rendering for premium, crisp vector visuals) -->
                <div id="bottle-wrapper" class="w-[450px] h-[450px] flex items-center justify-center transform transition-all duration-500 hover:scale-105" style="transform: rotate(-10deg);">
                    <svg id="hero-bottle" class="w-full h-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] filter saturate-[1.2]" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- Glass Bottle Silhouette -->
                        <g id="glass-structure">
                            <!-- Liquid Backing Base -->
                            <path d="M120 220 C120 180, 160 160, 210 155 L210 420 C160 420, 120 400, 120 370 Z" fill="url(#liquidGrad)" opacity="0.9"/>
                            <!-- Glass Body Contour -->
                            <path d="M120 220 C120 180, 160 160, 250 150 L250 420 C160 420, 120 400, 120 370 Z" fill="url(#glassGrad)" opacity="0.3"/>
                            
                            <!-- Symmetrical right half -->
                            <path d="M380 220 C380 180, 340 160, 290 155 L290 420 C340 420, 380 400, 380 370 Z" fill="url(#liquidGrad)" opacity="0.9" transform="translate(500,0) scale(-1,1)"/>
                            <path d="M380 220 C380 180, 340 160, 250 150 L250 420 C340 420, 380 400, 380 370 Z" fill="url(#glassGrad)" opacity="0.3" transform="translate(500,0) scale(-1,1)"/>
                            
                            <!-- Bottle Neck & Cap (Horizontal design orientation from original image adapted beautifully for vertical/diagonal display) -->
                            <!-- Neck wrap / capsule -->
                            <path d="M220 152 C220 120, 230 110, 235 70 L265 70 C270 110, 280 120, 280 152 Z" fill="url(#neckWrapGrad)"/>
                            <!-- Ridges on the neck foil -->
                            <line x1="230" y1="110" x2="270" y2="110" stroke="#121111" stroke-width="2" opacity="0.4"/>
                            <line x1="232" y1="90" x2="268" y2="90" stroke="#121111" stroke-width="2" opacity="0.4"/>
                            <!-- Cap closure -->
                            <rect x="233" y="55" width="34" height="16" rx="3" fill="#323030"/>
                        </g>

                        <!-- Glass reflections & Specular Highlights -->
                        <g id="glass-specular" opacity="0.85">
                            <!-- Left Edge highlight -->
                            <path d="M125 240 C125 200, 155 180, 190 175 C180 185, 135 210, 135 250 L135 360 C135 390, 155 405, 175 410 C145 405, 125 390, 125 360 Z" fill="url(#whiteGlowGrad)"/>
                            <!-- Core vertical white reflection -->
                            <rect x="235" y="165" width="8" height="240" rx="4" fill="url(#whiteGlowGrad)" opacity="0.4"/>
                            <!-- Secondary reflection -->
                            <rect x="145" y="210" width="12" height="150" rx="6" fill="url(#whiteGlowGrad)" opacity="0.25"/>
                        </g>

                        <!-- Label (Styled to dynamic flavor accent) -->
                        <g id="bottle-label" transform="rotate(-90 250 290) translate(-35, -20)">
                            <!-- Semi-translucent Label Backing -->
                            <rect x="150" y="225" width="220" height="70" rx="6" fill="#000000" fill-opacity="0.85" stroke="url(#labelBorderGrad)" stroke-width="1.5"/>
                            
                            <!-- Label Content (Dynamic Text matching flavor) -->
                            <text id="label-title" x="260" y="260" fill="url(#labelTitleGrad)" font-family="Syne" font-size="28" font-weight="900" letter-spacing="1.5" text-anchor="middle">EUROPA</text>
                            <text id="label-subtitle" x="260" y="280" fill="#f4ebe1" font-family="Plus Jakarta Sans" font-size="7" font-weight="700" letter-spacing="4" text-anchor="middle">PREBIOTIC SPARKLING</text>
                        </g>

                        <!-- Gradient Definitions -->
                        <defs>
                            <linearGradient id="liquidGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop id="liq-stop-0" offset="0%" stop-color="#3d140a"/>
                                <stop id="liq-stop-1" offset="50%" stop-color="#9e3e23"/>
                                <stop id="liq-stop-2" offset="100%" stop-color="#3d140a"/>
                            </linearGradient>
                            <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.6"/>
                                <stop offset="50%" stop-color="#ffffff" stop-opacity="0.1"/>
                                <stop offset="100%" stop-color="#000000" stop-opacity="0.8"/>
                            </linearGradient>
                            <linearGradient id="neckWrapGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stop-color="#1c1a1a"/>
                                <stop offset="35%" stop-color="#3d3838"/>
                                <stop offset="70%" stop-color="#121111"/>
                                <stop offset="100%" stop-color="#0a0909"/>
                            </linearGradient>
                            <linearGradient id="whiteGlowGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8"/>
                                <stop offset="100%" stop-color="#ffffff" stop-opacity="0.0"/>
                            </linearGradient>
                            <linearGradient id="labelBorderGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop id="border-stop-0" offset="0%" stop-color="#9e3e23"/>
                                <stop id="border-stop-1" offset="100%" stop-color="#a89c91"/>
                            </linearGradient>
                            <linearGradient id="labelTitleGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop id="title-stop-0" offset="0%" stop-color="#ffffff"/>
                                <stop id="title-stop-1" offset="100%" stop-color="#9e3e23"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <!-- Right Info Panel (CTA & Starburst Vintage Badge) -->
            <div class="lg:col-span-3 flex flex-col items-center lg:items-end justify-between lg:h-[450px] order-3">
                
                <!-- Rotating Promo Badge from Inspiration (Adaptive dynamic badge) -->
                <div class="relative group cursor-pointer select-none">
                    <div class="starburst w-28 h-28 bg-[#1a1413] border border-terracotta/40 flex flex-col items-center justify-center text-center p-2 animate-spin-slow group-hover:bg-terracotta/20 transition-all duration-500">
                    </div>
                    <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                        <span class="text-[8px] tracking-[0.3em] text-sand uppercase">FORMULATED</span>
                        <span id="badge-highlight-text" class="font-display text-lg text-terracotta leading-tight">NEW</span>
                        <span class="text-[7px] tracking-wider text-cream/70 max-w-[70px] leading-tight">A SCIENTIFIC MIRACLE</span>
                    </div>
                </div>

                <!-- Action CTA Button -->
                <div class="mt-8 lg:mt-0 w-full flex flex-col gap-3">
                    <button onclick="addCurrentToCart()" id="hero-cta" class="w-full bg-terracotta hover:bg-terracotta-hover text-cream text-xs uppercase tracking-[0.25em] font-extrabold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-terracotta/20">
                        Order Now
                    </button>
                    <p class="text-[11px] text-sand/70 text-center lg:text-right tracking-wide italic">
                        Free carbon-neutral shipping on orders $45+
                    </p>
                </div>

            </div>

        </div>

        <!-- Flavor Quick Switcher (The core interactive element anchored at the bottom of the hero) -->
        <div class="relative z-20 border-t border-cream/5 bg-obsidian/40 backdrop-blur-lg px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <span class="text-xs uppercase tracking-widest text-sand">Select Cosmic Target:</span>
            <div class="flex gap-2 p-1 bg-cream/[0.03] rounded-full border border-cream/5">
                <button onclick="switchFlavor('europa')" id="btn-europa" class="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-terracotta text-cream transition-all duration-500">
                    Europa (Rosé)
                </button>
                <button onclick="switchFlavor('ganymede')" id="btn-ganymede" class="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-sand hover:text-cream transition-all duration-500">
                    Ganymede (Ginger)
                </button>
                <button onclick="switchFlavor('io')" id="btn-io" class="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-sand hover:text-cream transition-all duration-500">
                    Io (Yuzu)
                </button>
            </div>
            <div class="flex items-center gap-6 text-xs text-sand/80">
                <span>⚡ prebiotic botanical infusion</span>
                <span>✨ 35 calories per serving</span>
            </div>
        </div>
    </section>

    <!-- METRICS / STATS SECTION -->
    <section class="py-20 border-y border-cream/5 bg-obsidian relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10">
            <div class="text-center md:text-left md:border-r border-cream/5 pr-4">
                <span class="font-display text-6xl text-terracotta tracking-tight">9g</span>
                <h3 class="text-sm uppercase tracking-widest font-bold mt-2 text-cream">Prebiotic Plant Fiber</h3>
                <p class="text-xs text-sand mt-2 max-w-xs mx-auto md:mx-0 leading-relaxed font-serif italic text-lg">
                    Feeds your native microbiome to encourage natural digestion and radiant clarity.
                </p>
            </div>
            <div class="text-center md:text-left md:border-r border-cream/5 px-4">
                <span class="font-display text-6xl text-terracotta tracking-tight">Apple cider</span>
                <h3 class="text-sm uppercase tracking-widest font-bold mt-2 text-cream">Vinegar infusion</h3>
                <p class="text-xs text-sand mt-2 max-w-xs mx-auto md:mx-0 leading-relaxed font-serif italic text-lg">
                    Formulated with clean organic acids that regulate glucose response gently.
                </p>
            </div>
            <div class="text-center md:text-left pl-4">
                <span class="font-display text-6xl text-terracotta tracking-tight">Zero</span>
                <h3 class="text-sm uppercase tracking-widest font-bold mt-2 text-cream">Stevia or Artificials</h3>
                <p class="text-xs text-sand mt-2 max-w-xs mx-auto md:mx-0 leading-relaxed font-serif italic text-lg">
                    Sweetened naturally with real organic fresh-pressed fruit extract.
                </p>
            </div>
        </div>
    </section>

    <!-- DETAILED FLAVOR EXPLORATION (SOPHISTICATED ROTATING DETAIL GRID) -->
    <section id="flavors" class="py-28 bg-[#0d0b0b] relative">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <span class="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold">THE JUICE OF THE GODS</span>
                    <h2 class="font-display text-4xl md:text-6xl text-cream tracking-tight uppercase mt-2">Active Specimen Catalog</h2>
                </div>
                <p class="text-sand max-w-sm font-serif italic text-xl leading-relaxed">
                    Designed to heal the gut while delighting the senses with sharp carbonation and deep botanical complexity.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Card 1: Europa -->
                <div class="group bg-cardBg border border-cream/5 hover:border-terracotta/40 rounded-3xl p-8 transition-all duration-500 relative overflow-hidden flex flex-col justify-between h-[520px]">
                    <div class="absolute -right-12 -top-12 w-48 h-48 bg-terracotta/10 rounded-full blur-3xl group-hover:bg-terracotta/20 transition-all duration-500"></div>
                    <div>
                        <div class="flex justify-between items-start">
                            <span class="text-xs tracking-widest uppercase text-sand">SPECIMEN // 01</span>
                            <span class="px-2 py-0.5 bg-terracotta/20 text-terracotta text-[9px] font-bold tracking-widest uppercase rounded">ACTIVE</span>
                        </div>
                        <h3 class="font-display text-3xl text-cream uppercase mt-6">EUROPA</h3>
                        <p class="text-xs tracking-widest uppercase text-terracotta font-semibold mt-1">PREBIOTIC ROSÉ</p>
                        <p class="font-serif text-lg text-sand/80 mt-6 leading-relaxed italic">
                            Crafted with organic white grape extract, sweet botanical rosewater, elderberry concentrates, and subtle pink peppercorn nodes.
                        </p>
                    </div>
                    <div>
                        <div class="border-t border-cream/5 pt-6 flex justify-between items-center">
                            <div>
                                <span class="text-xs text-sand block">PRICE</span>
                                <span class="font-display text-xl text-cream">$5.00 / CAN</span>
                            </div>
                            <button onclick="addToCart('Europa Prebiotic Rosé', 5.00)" class="bg-cream/5 group-hover:bg-terracotta text-cream px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300">
                                Buy Specimen
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Ganymede -->
                <div class="group bg-cardBg border border-cream/5 hover:border-[#6c2837]/40 rounded-3xl p-8 transition-all duration-500 relative overflow-hidden flex flex-col justify-between h-[520px]">
                    <div class="absolute -right-12 -top-12 w-48 h-48 bg-[#6c2837]/10 rounded-full blur-3xl group-hover:bg-[#6c2837]/20 transition-all duration-500"></div>
                    <div>
                        <div class="flex justify-between items-start">
                            <span class="text-xs tracking-widest uppercase text-sand">SPECIMEN // 02</span>
                            <span class="px-2 py-0.5 bg-[#6c2837]/20 text-[#bf435f] text-[9px] font-bold tracking-widest uppercase rounded">ACTIVE</span>
                        </div>
                        <h3 class="font-display text-3xl text-cream uppercase mt-6">GANYMEDE</h3>
                        <p class="text-xs tracking-widest uppercase text-[#bf435f] font-semibold mt-1">SMOKY CHERRY GINGER</p>
                        <p class="font-serif text-lg text-sand/80 mt-6 leading-relaxed italic">
                            A daring, robust concoction utilizing cold-pressed wild black cherries, deeply spiced ginger root, and oakwood-infused carbonated spring water.
                        </p>
                    </div>
                    <div>
                        <div class="border-t border-cream/5 pt-6 flex justify-between items-center">
                            <div>
                                <span class="text-xs text-sand block">PRICE</span>
                                <span class="font-display text-xl text-cream">$5.50 / CAN</span>
                            </div>
                            <button onclick="addToCart('Ganymede Cherry Ginger', 5.50)" class="bg-cream/5 hover:bg-[#6c2837] text-cream px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300">
                                Buy Specimen
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Io -->
                <div class="group bg-cardBg border border-cream/5 hover:border-[#966b26]/40 rounded-3xl p-8 transition-all duration-500 relative overflow-hidden flex flex-col justify-between h-[520px]">
                    <div class="absolute -right-12 -top-12 w-48 h-48 bg-[#966b26]/10 rounded-full blur-3xl group-hover:bg-[#966b26]/20 transition-all duration-500"></div>
                    <div>
                        <div class="flex justify-between items-start">
                            <span class="text-xs tracking-widest uppercase text-sand">SPECIMEN // 03</span>
                            <span class="px-2 py-0.5 bg-[#966b26]/20 text-[#cc983d] text-[9px] font-bold tracking-widest uppercase rounded">ACTIVE</span>
                        </div>
                        <h3 class="font-display text-3xl text-cream uppercase mt-6">IO</h3>
                        <p class="text-xs tracking-widest uppercase text-[#cc983d] font-semibold mt-1">LUMINOUS YUZU HONEY</p>
                        <p class="font-serif text-lg text-sand/80 mt-6 leading-relaxed italic">
                            Bright, citrusy explosions of rare Japanese Yuzu extract, balanced masterfully with soothing chamomile botanicals and single-origin raw honey.
                        </p>
                    </div>
                    <div>
                        <div class="border-t border-cream/5 pt-6 flex justify-between items-center">
                            <div>
                                <span class="text-xs text-sand block">PRICE</span>
                                <span class="font-display text-xl text-cream">$5.25 / CAN</span>
                            </div>
                            <button onclick="addToCart('Io Luminous Yuzu', 5.25)" class="bg-cream/5 hover:bg-[#966b26] text-cream px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300">
                                Buy Specimen
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- BRAND STORY / INSPIRATION ATMOSPHERE -->
    <section id="story" class="py-28 bg-obsidian relative overflow-hidden">
        <!-- Giant artistic planet vector decoration in background -->
        <div class="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-terracotta/10 pointer-events-none flex items-center justify-center">
            <div class="w-[500px] h-[500px] rounded-full border border-terracotta/5 flex items-center justify-center">
                <div class="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-terracotta/5 to-transparent blur-md"></div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                <!-- Brand Image Vignette / Conceptual representation -->
                <div class="relative bg-cardBg border border-cream/10 rounded-3xl p-10 h-[480px] flex flex-col justify-between overflow-hidden shadow-inner group">
                    <div class="absolute inset-0 bg-gradient-to-tr from-terracotta/15 via-transparent to-transparent pointer-events-none"></div>
                    
                    <div class="flex justify-between items-start">
                        <span class="font-display text-xl text-terracotta">JUPITER DEEP-SPACE LABS</span>
                        <span class="text-[10px] tracking-widest uppercase text-sand">EST. 2026</span>
                    </div>

                    <div class="my-auto z-10 max-w-sm">
                        <h4 class="font-display text-4xl text-cream uppercase tracking-tight leading-none mb-4">A Revolution in Fizzy Fermentation</h4>
                        <p class="font-serif text-lg text-sand italic">
                            "We wondered: what if the cosmic compounds of our solar system's moons had flavor signatures? That’s how we stumbled on prebiotic carbonation."
                        </p>
                    </div>

                    <div class="flex justify-between items-center border-t border-cream/5 pt-6 text-xs text-sand/60">
                        <span>MISSION // SECURE THE GUT</span>
                        <span>0092 // ORBIT</span>
                    </div>
                </div>

                <!-- Story content narrative -->
                <div class="flex flex-col justify-center">
                    <span class="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold">OUR SCIENTIFIC ODYSSEY</span>
                    <h2 class="font-display text-4xl md:text-5xl text-cream uppercase tracking-tight mt-2 mb-6">
                        Clean ingredients. Astronomical pleasure.
                    </h2>
                    <p class="font-serif text-xl text-sand leading-relaxed italic mb-6">
                        Most modern carbonated drinks are packed with intense artificial sweeteners that disrupt your digestive environment. JUPITER was born to reverse this trend.
                    </p>
                    <p class="text-sand/80 leading-relaxed mb-8">
                        Our research team spent five years isolating plant extracts that work natively in synergy with human gut microbes. By blending wild botanical roots, premium fruits, and dynamic prebiotic fiber, we created an elegant alternative to toxic chemical sodas.
                    </p>
                    <div class="flex gap-8">
                        <div>
                            <span class="block font-display text-3xl text-cream">100%</span>
                            <span class="text-[10px] tracking-widest text-sand uppercase">Organic Extracts</span>
                        </div>
                        <div>
                            <span class="block font-display text-3xl text-cream">9.8m</span>
                            <span class="text-[10px] tracking-widest text-sand uppercase">Satisfied Moons</span>
                        </div>
                        <div>
                            <span class="block font-display text-3xl text-cream">FDA</span>
                            <span class="text-[10px] tracking-widest text-sand uppercase">Facility Certified</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- MICROBIOME INTERACTIVE SCIENCE SCHEMATIC -->
    <section id="science" class="py-24 bg-[#0a0808] border-t border-cream/5 relative">
        <div class="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
            <span class="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold">THE GUTS OF THE SYSTEM</span>
            <h2 class="font-display text-4xl md:text-5xl text-cream uppercase mt-2">Active Formula Map</h2>
            <p class="font-serif text-xl text-sand italic mt-4 max-w-xl mx-auto">
                Hover or click on the glowing ingredient hubs to see how they actively benefit your daily biological clockwork.
            </p>
        </div>

        <div class="max-w-5xl mx-auto px-6 relative">
            <!-- Center diagram container (Isometric wireframe feel) -->
            <div class="bg-cardBg border border-cream/5 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[450px] flex flex-col md:flex-row items-center justify-between gap-12">
                
                <!-- Background grid design pattern -->
                <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1f1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

                <!-- Schematic Hubs (Interactive Left column) -->
                <div class="flex flex-col gap-4 w-full md:w-1/2 z-10">
                    <!-- Hub 1 -->
                    <div onclick="showScienceInfo('root')" onmouseover="showScienceInfo('root')" class="cursor-pointer group p-4 border border-cream/5 hover:border-terracotta/40 rounded-2xl bg-obsidian/60 backdrop-blur transition-all duration-300 flex items-center gap-4">
                        <div class="w-10 h-10 rounded-full bg-terracotta/10 border border-terracotta/40 flex items-center justify-center group-hover:bg-terracotta group-hover:text-cream transition-all duration-300">
                            <span class="font-display text-sm text-terracotta group-hover:text-cream font-bold">01</span>
                        </div>
                        <div class="text-left">
                            <h4 class="font-display text-base text-cream uppercase group-hover:text-terracotta transition-colors">Chicory Root Inulin</h4>
                            <p class="text-[11px] text-sand/80">Premium soluble dietary fiber base</p>
                        </div>
                    </div>
                    <!-- Hub 2 -->
                    <div onclick="showScienceInfo('apple')" onmouseover="showScienceInfo('apple')" class="cursor-pointer group p-4 border border-cream/5 hover:border-terracotta/40 rounded-2xl bg-obsidian/60 backdrop-blur transition-all duration-300 flex items-center gap-4">
                        <div class="w-10 h-10 rounded-full bg-terracotta/10 border border-terracotta/40 flex items-center justify-center group-hover:bg-terracotta group-hover:text-cream transition-all duration-300">
                            <span class="font-display text-sm text-terracotta group-hover:text-cream font-bold">02</span>
                        </div>
                        <div class="text-left">
                            <h4 class="font-display text-base text-cream uppercase group-hover:text-terracotta transition-colors">Raw Apple Cider Vinegar</h4>
                            <p class="text-[11px] text-sand/80">Provides native acetic acid support</p>
                        </div>
                    </div>
                    <!-- Hub 3 -->
                    <div onclick="showScienceInfo('botanicals')" onmouseover="showScienceInfo('botanicals')" class="cursor-pointer group p-4 border border-cream/5 hover:border-terracotta/40 rounded-2xl bg-obsidian/60 backdrop-blur transition-all duration-300 flex items-center gap-4">
                        <div class="w-10 h-10 rounded-full bg-terracotta/10 border border-terracotta/40 flex items-center justify-center group-hover:bg-terracotta group-hover:text-cream transition-all duration-300">
                            <span class="font-display text-sm text-terracotta group-hover:text-cream font-bold">03</span>
                        </div>
                        <div class="text-left">
                            <h4 class="font-display text-base text-cream uppercase group-hover:text-terracotta transition-colors">Adaptogenic Botanicals</h4>
                            <p class="text-[11px] text-sand/80">Organic rosewater & peppercorn</p>
                        </div>
                    </div>
                </div>

                <!-- Display Screen (Interactive Right column) -->
                <div class="w-full md:w-1/2 min-h-[220px] p-6 rounded-2xl bg-obsidian/85 border border-cream/5 flex flex-col justify-between relative z-10 text-left">
                    <div class="absolute top-4 right-4 flex gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-terracotta animate-ping"></span>
                        <span class="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
                    </div>
                    <div>
                        <span class="text-[9px] tracking-[0.2em] uppercase text-sand block mb-2">SPECTRUM ANALYSIS // ACTIVE</span>
                        <h3 id="science-title" class="font-display text-2xl text-cream uppercase tracking-tight">Select a component</h3>
                        <p id="science-desc" class="font-serif text-base text-sand/90 mt-4 leading-relaxed italic">
                            Hover over the technical ingredients on the left map to witness the specific metabolic functions, gut-lining benefits, and botanical origins.
                        </p>
                    </div>
                    <div class="border-t border-cream/5 pt-4 mt-6 flex justify-between items-center">
                        <span class="text-[10px] text-sand uppercase">Target Area: Whole Body</span>
                        <span class="text-[10px] text-terracotta uppercase font-bold">Optimized Biome</span>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- INTERACTIVE VARIETY BUNDLE BUILDER ("Build Your Orbit Box") -->
    <section id="bundle" class="py-28 bg-obsidian border-t border-cream/5 relative">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                <!-- Left: Interactive visual representing the box filling up -->
                <div class="lg:col-span-6">
                    <span class="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold">CUSTOM PACK CUSTOMIZER</span>
                    <h2 class="font-display text-4xl md:text-5xl text-cream uppercase mt-2 mb-6">Build Your Orbit Case</h2>
                    <p class="font-serif text-lg text-sand italic mb-8">
                        The cosmic box of 12 lets you select your stellar configurations. Tailor the perfect balance of Europa, Ganymede, and Io for your native ecosystem.
                    </p>

                    <!-- Interactive Box Visual Representation -->
                    <div class="bg-cardBg border border-cream/10 rounded-3xl p-8 relative overflow-hidden">
                        <div class="flex justify-between items-center mb-6">
                            <span class="text-xs text-sand font-mono uppercase">Case Status: <span id="box-fill-label">0</span>/12 Cans Filled</span>
                            <span id="box-status-tag" class="text-[10px] uppercase font-bold tracking-widest text-terracotta">NEEDS CANS</span>
                        </div>
                        
                        <!-- 12 Slot Grid representing actual layout inside the box -->
                        <div class="grid grid-cols-6 gap-3 py-6">
                            <!-- JS will render and highlight slots based on selection -->
                            <div class="box-slot h-16 rounded-xl border border-cream/10 bg-obsidian flex items-center justify-center transition-all duration-300"></div>
                            <div class="box-slot h-16 rounded-xl border border-cream/10 bg-obsidian flex items-center justify-center transition-all duration-300"></div>
                            <div class="box-slot h-16 rounded-xl border border-cream/10 bg-obsidian flex items-center justify-center transition-all duration-300"></div>
                            <div class="box-slot h-16 rounded-xl border border-cream/10 bg-obsidian flex items-center justify-center transition-all duration-300"></div>
                            <div class="box-slot h-16 rounded-xl border border-cream/10 bg-obsidian flex items-center justify-center transition-all duration-300"></div>
                            <div class="box-slot h-16 rounded-xl border border-cream/10 bg-obsidian flex items-center justify-center transition-all duration-300"></div>
                            <div class="box-slot h-16 rounded-xl border border-cream/10 bg-obsidian flex items-center justify-center transition-all duration-300"></div>
                            <div class="box-slot h-16 rounded-xl border border-cream/10 bg-obsidian flex items-center justify-center transition-all duration-300"></div>
                            <div class="box-slot h-16 rounded-xl border border-cream/10 bg-obsidian flex items-center justify-center transition-all duration-300"></div>
                            <div class="box-slot h-16 rounded-xl border border-cream/10 bg-obsidian flex items-center justify-center transition-all duration-300"></div>
                            <div class="box-slot h-16 rounded-xl border border-cream/10 bg-obsidian flex items-center justify-center transition-all duration-300"></div>
                            <div class="box-slot h-16 rounded-xl border border-cream/10 bg-obsidian flex items-center justify-center transition-all duration-300"></div>
                        </div>

                        <!-- Progress Bar helper -->
                        <div class="w-full bg-obsidian h-2 rounded-full overflow-hidden mt-2 border border-cream/5">
                            <div id="box-progress-bar" class="bg-terracotta h-full w-0 transition-all duration-500"></div>
                        </div>
                    </div>
                </div>

                <!-- Right: Selection sliders / item counts -->
                <div class="lg:col-span-6 space-y-8">
                    
                    <!-- Flavor 1 Control -->
                    <div class="flex items-center justify-between p-6 bg-cardBg rounded-2xl border border-cream/5">
                        <div>
                            <h4 class="font-display text-lg text-cream uppercase">Europa Prebiotic Rosé</h4>
                            <span class="text-xs text-terracotta font-semibold">Terracotta rose, pepper & grape</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <button onclick="changeBundleCount('europa', -1)" class="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:bg-terracotta/20 text-cream transition-colors font-bold">-</button>
                            <span id="count-europa" class="font-display text-xl w-6 text-center text-cream">0</span>
                            <button onclick="changeBundleCount('europa', 1)" class="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:bg-terracotta/20 text-cream transition-colors font-bold">+</button>
                        </div>
                    </div>

                    <!-- Flavor 2 Control -->
                    <div class="flex items-center justify-between p-6 bg-cardBg rounded-2xl border border-cream/5">
                        <div>
                            <h4 class="font-display text-lg text-cream uppercase">Ganymede Spiced Ginger</h4>
                            <span class="text-xs text-[#bf435f] font-semibold font-sans">Dark cherry, heavy oak & ginger</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <button onclick="changeBundleCount('ganymede', -1)" class="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:bg-terracotta/20 text-cream transition-colors font-bold">-</button>
                            <span id="count-ganymede" class="font-display text-xl w-6 text-center text-cream">0</span>
                            <button onclick="changeBundleCount('ganymede', 1)" class="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:bg-terracotta/20 text-cream transition-colors font-bold">+</button>
                        </div>
                    </div>

                    <!-- Flavor 3 Control -->
                    <div class="flex items-center justify-between p-6 bg-cardBg rounded-2xl border border-cream/5">
                        <div>
                            <h4 class="font-display text-lg text-cream uppercase">Io Luminous Yuzu</h4>
                            <span class="text-xs text-[#cc983d] font-semibold">Bright Japanese citrus & raw honey</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <button onclick="changeBundleCount('io', -1)" class="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:bg-terracotta/20 text-cream transition-colors font-bold">-</button>
                            <span id="count-io" class="font-display text-xl w-6 text-center text-cream">0</span>
                            <button onclick="changeBundleCount('io', 1)" class="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:bg-terracotta/20 text-cream transition-colors font-bold">+</button>
                        </div>
                    </div>

                    <!-- Dynamic Pricing & Box additions -->
                    <div class="pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <span class="text-xs text-sand block">FLAT BOX RATE (Save 15%)</span>
                            <span class="font-display text-3xl text-cream">$54.00 USD</span>
                        </div>
                        <button id="add-box-btn" onclick="addBundleToCart()" disabled class="w-full md:w-auto opacity-50 cursor-not-allowed bg-cream/10 text-cream/70 text-xs uppercase tracking-[0.25em] font-extrabold py-4 px-12 rounded-full transition-all duration-300">
                            Fill Box to Purchase
                        </button>
                    </div>

                </div>

            </div>

        </div>
    </section>

    <!-- PREMIUM PRESS / EDITORIAL REVIEWS -->
    <section class="py-24 bg-[#0d0b0b] border-t border-cream/5">
        <div class="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 class="font-display text-3xl text-cream uppercase tracking-tight mb-12">Critically Acclaimed Wellness</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div class="flex flex-col justify-between items-center p-6">
                    <p class="font-serif text-2xl text-sand/90 italic leading-relaxed">
                        “The holy grail of prebiotics. Finally, a healthy soda alternative that tastes deeply complex rather than chemically synthesized.”
                    </p>
                    <span class="text-xs uppercase tracking-[0.25em] text-terracotta font-bold mt-8">— VOGUE JOURNAL</span>
                </div>
                <div class="flex flex-col justify-between items-center p-6 md:border-x border-cream/5">
                    <p class="font-serif text-2xl text-sand/90 italic leading-relaxed">
                        “A masterclass in packaging, flavor identity, and functional science. We drank three cases in a week and never felt lighter.”
                    </p>
                    <span class="text-xs uppercase tracking-[0.25em] text-terracotta font-bold mt-8">— COSMIC INSIDER</span>
                </div>
                <div class="flex flex-col justify-between items-center p-6">
                    <p class="font-serif text-2xl text-sand/90 italic leading-relaxed">
                        “Recreates retro soda nostalgia while giving your microbiome everything it needs to flourish. The cherry-ginger Ganymede is pristine.”
                    </p>
                    <span class="text-xs uppercase tracking-[0.25em] text-terracotta font-bold mt-8">— THE DIETARY STAR</span>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER / NEWSLETTER -->
    <footer class="bg-obsidian border-t border-cream/5 pt-24 pb-12 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                
                <!-- Left: Newsletter & Brand declaration -->
                <div class="lg:col-span-6 space-y-6">
                    <h2 class="font-display text-4xl text-cream uppercase tracking-tight">Enter the Orbit</h2>
                    <p class="font-serif text-lg text-sand italic max-w-sm">
                        Join our cosmic distribution chain for seasonal flavor releases, prebiotic breakthroughs, and priority allocations.
                    </p>
                    <!-- Newsletter Form (Safe without dynamic backend) -->
                    <form onsubmit="handleSubscribe(event)" class="flex flex-col sm:flex-row gap-3 max-w-md">
                        <input type="email" required placeholder="Enter space coordinate (email)" class="bg-cardBg border border-cream/10 px-6 py-4 rounded-full text-xs text-cream tracking-wide focus:outline-none focus:border-terracotta transition-colors flex-grow">
                        <button type="submit" class="bg-terracotta hover:bg-terracotta-hover text-cream text-xs uppercase tracking-[0.2em] font-extrabold py-4 px-8 rounded-full transition-colors">
                            Subscribe
                        </button>
                    </form>
                    <span id="newsletter-toast" class="text-xs text-terracotta font-semibold hidden block mt-2">🚀 Connection established! Welcome to orbit.</span>
                </div>

                <!-- Right: Navigation links -->
                <div class="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <span class="text-[10px] uppercase tracking-widest text-sand block mb-4">MISSIONS</span>
                        <ul class="space-y-3 text-xs">
                            <li><a href="#flavors" class="text-sand/80 hover:text-cream transition-colors">Shop All Specimen</a></li>
                            <li><a href="#bundle" class="text-sand/80 hover:text-cream transition-colors">Construct Custom Box</a></li>
                            <li><a href="#" class="text-sand/80 hover:text-cream transition-colors">Corporate Gifting</a></li>
                            <li><a href="#" class="text-sand/80 hover:text-cream transition-colors">Retail Locations</a></li>
                        </ul>
                    </div>
                    <div>
                        <span class="text-[10px] uppercase tracking-widest text-sand block mb-4">ARCHIVES</span>
                        <ul class="space-y-3 text-xs">
                            <li><a href="#story" class="text-sand/80 hover:text-cream transition-colors">Our Cosmic Story</a></li>
                            <li><a href="#science" class="text-sand/80 hover:text-cream transition-colors">Gut Microbiome 101</a></li>
                            <li><a href="#" class="text-sand/80 hover:text-cream transition-colors">Laboratory Patents</a></li>
                            <li><a href="#" class="text-sand/80 hover:text-cream transition-colors">Environmental Carbon Log</a></li>
                        </ul>
                    </div>
                    <div>
                        <span class="text-[10px] uppercase tracking-widest text-sand block mb-4">SUPPORT</span>
                        <ul class="space-y-3 text-xs">
                            <li><a href="#" class="text-sand/80 hover:text-cream transition-colors">Transmit Message</a></li>
                            <li><a href="#" class="text-sand/80 hover:text-cream transition-colors">Help Terminal</a></li>
                            <li><a href="#" class="text-sand/80 hover:text-cream transition-colors">Privacy Parameters</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <!-- Bottom Credits -->
            <div class="border-t border-cream/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sand/60">
                <span>© 2026 JUPITER BIOME CORP. ALL FLUID PATHS PROTECTED.</span>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-cream transition-colors">INSTAGRAM</a>
                    <a href="#" class="hover:text-cream transition-colors">X.COM</a>
                    <a href="#" class="hover:text-cream transition-colors">DISCORD ORBIT</a>
                </div>
            </div>

        </div>
    </footer>

    <!-- SLIDE-OUT CART DRAWER (Strictly client-side representation) -->
    <div id="cart-drawer" class="fixed inset-y-0 right-0 w-full max-w-md bg-cardBg border-l border-cream/10 z-50 transform translate-x-full transition-transform duration-500 shadow-2xl flex flex-col justify-between">
        <!-- Drawer Header -->
        <div class="p-6 border-b border-cream/10 flex justify-between items-center">
            <div>
                <h3 class="font-display text-xl text-cream uppercase">Your Cargo Hold</h3>
                <span class="text-[10px] text-sand uppercase">JUPITER FREIGHT INVENTORY</span>
            </div>
            <button onclick="toggleCart()" class="p-2 text-sand hover:text-cream">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>

        <!-- Cart Items Container -->
        <div id="cart-items" class="p-6 space-y-6 overflow-y-auto flex-grow">
            <!-- Dynamic Inject -->
            <div class="text-center py-12 text-sand italic font-serif">
                Your container is currently empty. Bring active flora aboard!
            </div>
        </div>

        <!-- Drawer Footer -->
        <div class="p-6 border-t border-cream/10 space-y-4">
            <div class="flex justify-between items-center text-sm font-semibold text-cream">
                <span>Total Payload:</span>
                <span id="cart-total" class="font-display text-lg">$0.00</span>
            </div>
            <button onclick="handleCheckout()" class="w-full bg-terracotta hover:bg-terracotta-hover text-cream text-xs uppercase tracking-[0.2em] font-extrabold py-4 rounded-full transition-all">
                Initiate Checkout Sequence
            </button>
            <p class="text-[10px] text-sand/60 text-center uppercase tracking-wider">
                Encryption protocol active // Secure transport guaranteed
            </p>
        </div>
    </div>

    <!-- NOTIFICATION SYSTEM TOASTS (Preventing alert pops) -->
    <div id="toast-notif" class="fixed bottom-6 right-6 bg-terracotta text-cream px-6 py-3 rounded-full text-xs uppercase tracking-widest font-extrabold shadow-2xl transform translate-y-20 opacity-0 transition-all duration-300 z-50">
        Cart updated successfully!
    </div>

    <!-- JAVASCRIPT LOGIC & STATE MANAGEMENT -->
    <script>
        // Global Theme Configurations for each dynamic flavor
        const flavors = {
            europa: {
                title: "EUROPA",
                bgText: "EUROPA",
                subtitle: "PREBIOTIC ROSÉ",
                desc: "Tastes like the soda you grew up sipping, but with the added benefit of microbiome and digestive health support today.",
                accentColor: "#9e3e23",
                hoverColor: "#b94c2d",
                liqGradStop0: "#3d140a",
                liqGradStop1: "#9e3e23",
                liqGradStop2: "#3d140a",
                badgeHighlight: "NEW",
                price: 5.00
            },
            ganymede: {
                title: "GANYMEDE",
                bgText: "GANYMEDE",
                subtitle: "SMOKY CHERRY GINGER",
                desc: "A bold botanical experience crafted with wild dark cherries, organic warm ginger, and subtle earthy smoked oakwood notes.",
                accentColor: "#6c2837",
                hoverColor: "#8c3649",
                liqGradStop0: "#240a10",
                liqGradStop1: "#6c2837",
                liqGradStop2: "#240a10",
                badgeHighlight: "DARING",
                price: 5.50
            },
            io: {
                title: "IO",
                bgText: "IO",
                subtitle: "LUMINOUS YUZU HONEY",
                desc: "An electric blast of hand-harvested Japanese Yuzu citrus pulp, organic white teas, raw chamomile, and high-mountain organic honey.",
                accentColor: "#966b26",
                hoverColor: "#b28031",
                liqGradStop0: "#33220b",
                liqGradStop1: "#966b26",
                liqGradStop2: "#33220b",
                badgeHighlight: "BRIGHT",
                price: 5.25
            }
        };

        let currentFlavorKey = 'europa';
        let cart = [];
        let bundleCounts = {
            europa: 0,
            ganymede: 0,
            io: 0
        };

        // Initialize state on load
        window.onload = function() {
            // Setup interactive mouse parallax on hero bottle
            const bottleWrapper = document.getElementById('bottle-wrapper');
            const heroSection = document.getElementById('hero');
            
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                const x = e.clientX - rect.left - (rect.width / 2);
                const y = e.clientY - rect.top - (rect.height / 2);
                
                // Scale factor for mild tilt
                const tiltX = (y / rect.height) * 20;
                const tiltY = -(x / rect.width) * 20;
                
                bottleWrapper.style.transform = `rotate(-10deg) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(30px)`;
            });

            heroSection.addEventListener('mouseleave', () => {
                bottleWrapper.style.transform = `rotate(-10deg) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
            });

            // Initialize science panel with default
            showScienceInfo('root');
            updateBundleBoxVisuals();
        };

        // Dynamic State / Flavor switching core function
        function switchFlavor(key) {
            currentFlavorKey = key;
            const flavor = flavors[key];

            // Update page text
            document.getElementById('hero-bg-text').innerText = flavor.bgText;
            document.getElementById('hero-description').innerText = flavor.desc;
            document.getElementById('badge-highlight-text').innerText = flavor.badgeHighlight;
            
            // Adjust label texts inside SVG bottle
            document.getElementById('label-title').textContent = flavor.title;
            document.getElementById('label-subtitle').textContent = flavor.subtitle;

            // Transition the liquid gradient colors smoothly in SVG
            document.getElementById('liq-stop-0').setAttribute('stop-color', flavor.liqGradStop0);
            document.getElementById('liq-stop-1').setAttribute('stop-color', flavor.liqGradStop1);
            document.getElementById('liq-stop-2').setAttribute('stop-color', flavor.liqGradStop2);

            // Update Label Border highlight color
            document.getElementById('border-stop-0').setAttribute('stop-color', flavor.accentColor);
            document.getElementById('title-stop-1').setAttribute('stop-color', flavor.accentColor);

            // Update active state on buttons
            ['europa', 'ganymede', 'io'].forEach(k => {
                const btn = document.getElementById(`btn-${k}`);
                if (k === key) {
                    btn.style.backgroundColor = flavor.accentColor;
                    btn.classList.add('text-cream');
                    btn.classList.remove('text-sand');
                } else {
                    btn.style.backgroundColor = 'transparent';
                    btn.classList.add('text-sand');
                    btn.classList.remove('text-cream');
                }
            });

            // Transition main CTA color
            const ctaBtn = document.getElementById('hero-cta');
            ctaBtn.style.backgroundColor = flavor.accentColor;

            // Transition aura glow
            const aura = document.getElementById('bottle-aura');
            aura.style.backgroundColor = flavor.accentColor;
        }

        // Add currently displayed hero bottle to the cart
        function addCurrentToCart() {
            const currentObj = flavors[currentFlavorKey];
            const itemName = `${currentObj.title} Prebiotic ${currentObj.subtitle}`;
            addToCart(itemName, currentObj.price);
        }

        // Core Cart operations
        function addToCart(itemName, price) {
            const existingItem = cart.find(item => item.name === itemName);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                cart.push({ name: itemName, price: price, qty: 1 });
            }
            updateCartUI();
            showToast(`Cargo Added: ${itemName}`);
        }

        function updateCartUI() {
            const cartItemsContainer = document.getElementById('cart-items');
            const cartCounter = document.getElementById('cart-counter');
            const cartTotal = document.getElementById('cart-total');

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="text-center py-12 text-sand italic font-serif">
                        Your container is currently empty. Bring active flora aboard!
                    </div>
                `;
                cartCounter.innerText = 0;
                cartTotal.innerText = '$0.00';
                return;
            }

            let total = 0;
            let count = 0;
            let itemsHTML = '';

            cart.forEach((item, index) => {
                const subtotal = item.price * item.qty;
                total += subtotal;
                count += item.qty;

                itemsHTML += `
                    <div class="flex items-center justify-between p-4 bg-obsidian border border-cream/5 rounded-2xl">
                        <div class="space-y-1">
                            <h4 class="font-display text-sm text-cream uppercase">${item.name}</h4>
                            <span class="text-xs text-terracotta font-semibold">$${item.price.toFixed(2)} / each</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <button onclick="changeQty(${index}, -1)" class="w-7 h-7 rounded-full border border-cream/10 flex items-center justify-center hover:bg-terracotta/20 text-xs font-bold">-</button>
                            <span class="font-display text-sm text-cream">${item.qty}</span>
                            <button onclick="changeQty(${index}, 1)" class="w-7 h-7 rounded-full border border-cream/10 flex items-center justify-center hover:bg-terracotta/20 text-xs font-bold">+</button>
                        </div>
                    </div>
                `;
            });

            cartItemsContainer.innerHTML = itemsHTML;
            cartCounter.innerText = count;
            cartTotal.innerText = `$${total.toFixed(2)}`;
        }

        function changeQty(index, dir) {
            cart[index].qty += dir;
            if (cart[index].qty <= 0) {
                cart.splice(index, 1);
            }
            updateCartUI();
        }

        // Custom Bundle Operations (Fill Case of 12)
        function changeBundleCount(flavorKey, dir) {
            const currentTotal = bundleCounts.europa + bundleCounts.ganymede + bundleCounts.io;
            if (dir > 0 && currentTotal >= 12) {
                showToast("Maximum Limit Reached: Box holds 12 cans!");
                return;
            }
            if (dir < 0 && bundleCounts[flavorKey] <= 0) {
                return;
            }

            bundleCounts[flavorKey] += dir;
            document.getElementById(`count-${flavorKey}`).innerText = bundleCounts[flavorKey];
            updateBundleBoxVisuals();
        }

        function updateBundleBoxVisuals() {
            const total = bundleCounts.europa + bundleCounts.ganymede + bundleCounts.io;
            document.getElementById('box-fill-label').innerText = total;

            // Highlight progress bar
            const bar = document.getElementById('box-progress-bar');
            const percent = (total / 12) * 100;
            bar.style.width = `${percent}%`;

            // Setup colors based on fills
            const slots = document.querySelectorAll('.box-slot');
            
            // Clear slot state classes
            slots.forEach(slot => {
                slot.className = "box-slot h-16 rounded-xl border border-cream/10 bg-obsidian flex items-center justify-center transition-all duration-300";
                slot.innerHTML = '';
            });

            // Sequentially fill slots
            let filledIndex = 0;
            for (let i = 0; i < bundleCounts.europa; i++) {
                if (filledIndex < 12) {
                    slots[filledIndex].className = "box-slot h-16 rounded-xl border border-terracotta bg-terracotta/20 flex items-center justify-center font-display text-cream font-bold";
                    slots[filledIndex].innerHTML = "E";
                    filledIndex++;
                }
            }
            for (let i = 0; i < bundleCounts.ganymede; i++) {
                if (filledIndex < 12) {
                    slots[filledIndex].className = "box-slot h-16 rounded-xl border-[#bf435f] bg-[#6c2837]/30 flex items-center justify-center font-display text-[#bf435f] font-bold";
                    slots[filledIndex].innerHTML = "G";
                    filledIndex++;
                }
            }
            for (let i = 0; i < bundleCounts.io; i++) {
                if (filledIndex < 12) {
                    slots[filledIndex].className = "box-slot h-16 rounded-xl border-[#cc983d] bg-[#966b26]/30 flex items-center justify-center font-display text-[#cc983d] font-bold";
                    slots[filledIndex].innerHTML = "I";
                    filledIndex++;
                }
            }

            const btn = document.getElementById('add-box-btn');
            const statusTag = document.getElementById('box-status-tag');
            if (total === 12) {
                btn.removeAttribute('disabled');
                btn.className = "w-full md:w-auto bg-terracotta hover:bg-terracotta-hover text-cream text-xs uppercase tracking-[0.25em] font-extrabold py-4 px-12 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-terracotta/20 cursor-pointer";
                btn.innerText = "Add Custom Box to Cart";
                statusTag.innerText = "FULLY OPTIMIZED";
                statusTag.className = "text-[10px] uppercase font-bold tracking-widest text-[#56b377]";
            } else {
                btn.setAttribute('disabled', 'true');
                btn.className = "w-full md:w-auto opacity-50 cursor-not-allowed bg-cream/10 text-cream/70 text-xs uppercase tracking-[0.25em] font-extrabold py-4 px-12 rounded-full transition-all duration-300";
                btn.innerText = "Fill Box to Purchase";
                statusTag.innerText = "NEEDS CANS";
                statusTag.className = "text-[10px] uppercase font-bold tracking-widest text-terracotta";
            }
        }

        function addBundleToCart() {
            const description = `Custom Orbit Variety Pack (12-pack: ${bundleCounts.europa} E, ${bundleCounts.ganymede} G, ${bundleCounts.io} I)`;
            addToCart(description, 54.00);
            
            // Reset state
            bundleCounts = { europa: 0, ganymede: 0, io: 0 };
            document.getElementById('count-europa').innerText = 0;
            document.getElementById('count-ganymede').innerText = 0;
            document.getElementById('count-io').innerText = 0;
            updateBundleBoxVisuals();
            toggleCart(); // Show cart after box addition
        }

        // Interactive Science Panel Content Dynamic injection
        const scienceSpecs = {
            root: {
                title: "Chicory Root Inulin",
                desc: "An organic pure-earth soluble fructan extract. Acts directly as an advanced metabolic prebiotic fertilizer, bypassing early stage digestion to selectively nourish healthy bifidobacteria deep in your gut biome."
            },
            apple: {
                title: "Apple Cider Vinegar",
                desc: "Brewed cleanly from fresh organic orchard pressings. Packed with highly effective acetic acid which slows starch breakups, helps balance digestion, and maintains active cardiovascular support."
            },
            botanicals: {
                title: "Adaptogenic Herbs",
                desc: "Our high-precision blend of wild pink rosewaters, adaptogenic herbal strains, and cold-distilled black pepper nodes designed to calm systemic stress responses while encouraging flavor harmony."
            }
        };

        function showScienceInfo(key) {
            const spec = scienceSpecs[key];
            document.getElementById('science-title').innerText = spec.title;
            document.getElementById('science-desc').innerText = spec.desc;
        }

        // Toggles & Modal Interfaces
        function toggleCart() {
            const drawer = document.getElementById('cart-drawer');
            drawer.classList.toggle('translate-x-full');
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        // Success feedbacks (no browser alert popups)
        function showToast(message) {
            const toast = document.getElementById('toast-notif');
            toast.innerText = message;
            toast.classList.remove('translate-y-20', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');
            
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
                toast.classList.remove('translate-y-0', 'opacity-100');
            }, 3000);
        }

        function handleSubscribe(e) {
            e.preventDefault();
            const toast = document.getElementById('newsletter-toast');
            toast.classList.remove('hidden');
            e.target.reset();
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 5000);
        }

        function handleCheckout() {
            if (cart.length === 0) {
                showToast("Your cargo bay is empty!");
                return;
            }
            showToast("Processing secure interstellar payload sequence... Checkout ready!");
            // Reset cart upon mock completion
            setTimeout(() => {
                cart = [];
                updateCartUI();
                toggleCart();
                showToast("Transmission complete! Your ship has cleared for departure.");
            }, 2000);
        }
    </script>
</body>
</html>
10
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DJI Phantom 4 Pro - View Smartly</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Inter Font for premium typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;1,400&display=swap" rel="stylesheet">
  
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Playfair Display', 'serif'],
          },
          colors: {
            brandDark: '#1a1a1a',
            brandDarker: '#111111',
            brandLight: '#f4f4f4',
            brandGray: '#8e8e93',
            brandBorder: '#e5e5e5',
          },
          animation: {
            'float-slow': 'float 6s ease-in-out infinite',
            'spin-slow': 'spin 20s linear infinite',
            'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
              '50%': { transform: 'translateY(-12px) rotate(1deg)' },
            },
            pulseSubtle: {
              '0%, 100%': { opacity: '1', transform: 'scale(1)' },
              '50%': { opacity: '.7', transform: 'scale(1.05)' },
            }
          }
        }
      }
    }
  </script>
  <style>
    /* Premium custom scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #f4f4f4;
    }
    ::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #a8a8a8;
    }
    .text-watermark {
      user-select: none;
      pointer-events: none;
      font-size: 11vw;
      font-weight: 900;
      letter-spacing: -0.03em;
      opacity: 0.03;
      line-height: 1;
    }
    .text-watermark-dark {
      user-select: none;
      pointer-events: none;
      font-size: 11vw;
      font-weight: 900;
      letter-spacing: -0.03em;
      opacity: 0.05;
      line-height: 1;
    }
  </style>
</head>
<body class="bg-[#f0f0f2] font-sans antialiased text-brandDark overflow-x-hidden">

  <!-- TOP MARQUEE/BANNER -->
  <div class="w-full bg-brandDark text-white text-[11px] tracking-[0.2em] uppercase py-2.5 px-4 text-center font-medium border-b border-neutral-800">
    <span>Free Express Delivery & Premium Warranty Included On All Orders This Week</span>
  </div>

  <!-- NAVIGATION HEADER -->
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- DJI Custom SVG Logo -->
      <a href="#" class="flex items-center gap-2 group">
        <svg class="h-6 w-auto text-brandDark transition-transform duration-300 group-hover:scale-105" viewBox="0 0 120 40" fill="currentColor">
          <path d="M12 8c-3.3 0-6 2.7-6 6v12c0 3.3 2.7 6 6 6h12c3.3 0 6-2.7 6-6V14c0-3.3-2.7-6-6-6H12zm10 18H14V14h8v12z M38 8h-4v24h8c4.4 0 8-3.6 8-8v-8c0-4.4-3.6-8-8-8zm4 16c0 2.2-1.8 4-4 4h-4V12h4c2.2 0 4 1.8 4 4v8z M56 8h4v24h-4z M70 8h12c2.2 0 4 1.8 4 4s-1.8 4-4 4h-8v4h8c2.2 0 4 1.8 4 4s-1.8 4-4 4H70V8z M94 14h-6v-2h12v2h-6v18h-4V14z" />
          <rect x="108" y="8" width="4" height="24" rx="2" />
        </svg>
      </a>

      <!-- Menu Items -->
      <nav class="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wider text-brandDark/70 uppercase">
        <a href="#hero" class="hover:text-brandDark transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all hover:after:w-full">Home</a>
        <a href="#configurator" class="hover:text-brandDark transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all hover:after:w-full">Customize</a>
        <a href="#features" class="hover:text-brandDark transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all hover:after:w-full">Specs</a>
        <a href="#gallery" class="hover:text-brandDark transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all hover:after:w-full">Gallery</a>
        <a href="#support" class="hover:text-brandDark transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all hover:after:w-full">Support</a>
      </nav>

      <!-- Utility Icons -->
      <div class="flex items-center gap-6">
        <button class="hover:opacity-60 transition-opacity" aria-label="Search">
          <svg class="w-5 h-5 text-brandDark" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
        <button class="hover:opacity-60 transition-opacity relative" aria-label="Cart">
          <svg class="w-5 h-5 text-brandDark" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          <span id="cart-dot" class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-neutral-900 rounded-full border border-white hidden"></span>
        </button>
        <button class="md:hidden hover:opacity-60 transition-opacity" id="mobile-menu-btn" aria-label="Toggle menu">
          <svg class="w-6 h-6 text-brandDark" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-menu" class="hidden md:hidden border-t border-neutral-100 bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4 text-sm font-semibold tracking-wider uppercase">
      <a href="#hero" class="py-2 border-b border-neutral-100">Home</a>
      <a href="#configurator" class="py-2 border-b border-neutral-100">Customize</a>
      <a href="#features" class="py-2 border-b border-neutral-100">Specs</a>
      <a href="#gallery" class="py-2 border-b border-neutral-100">Gallery</a>
      <a href="#support" class="py-2">Support</a>
    </div>
  </header>

  <!-- MAIN HERO CONTAINER (Echoing the exact split presentation, frame, & spacing) -->
  <main class="max-w-[1440px] mx-auto px-4 md:px-8 py-6 md:py-12" id="hero">
    <div class="bg-white rounded-3xl shadow-xl overflow-hidden relative border border-white/20 flex flex-col">
      
      <!-- Top Layout Grid - Echoes the visual split of the image -->
      <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        
        <!-- LEFT HALF: The White/Light Gray Presentation (Lg: 8 cols) -->
        <div class="lg:col-span-8 p-8 md:p-16 flex flex-col justify-between relative overflow-hidden bg-brandLight/50">
          <!-- Big Background Typography watermark "PHANTOM" -->
          <div class="absolute inset-0 flex items-center justify-start pl-8 z-0 pointer-events-none select-none">
            <span class="text-watermark font-extrabold text-neutral-200">PHANTOM</span>
          </div>

          <!-- Top Brand Label -->
          <div class="z-10 flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-brandDark"></span>
            <span class="text-[11px] font-bold tracking-[0.3em] uppercase text-brandDark/50">PROFESSIONAL SERIES</span>
          </div>

          <!-- Product Hero Text -->
          <div class="z-10 my-16 max-w-xl">
            <h1 class="text-4xl sm:text-6xl md:text-[5.5rem] font-extrabold tracking-tight text-brandDark uppercase leading-[1.05] transition-all duration-300">
              PHANTOM <span class="font-light text-neutral-400">4 PRO</span>
            </h1>
            <p class="text-md sm:text-lg text-brandGray mt-6 font-medium tracking-wide">
              View smartly with ultra-stabilized intelligent flight systems.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <a href="#configurator" class="group flex items-center gap-3 bg-white border border-brandDark/15 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brandDark hover:text-white hover:border-brandDark transition-all duration-300 shadow-sm">
                <span>Learn more</span>
                <svg class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <a href="#configurator" class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brandDark/60 hover:text-brandDark transition-colors px-4 py-3.5">
                View 3D Demo
              </a>
            </div>
          </div>

          <!-- Technical Specs Metadata Block -->
          <div class="z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-neutral-200">
            <div>
              <div class="text-2xl sm:text-3xl font-extrabold text-brandDark">4K</div>
              <div class="text-[9px] font-bold tracking-widest text-brandDark/40 uppercase mt-1">Camera Type</div>
            </div>
            <div class="border-l border-neutral-200/60 pl-4 sm:pl-6">
              <div class="text-2xl sm:text-3xl font-extrabold text-brandDark">7 <span class="text-lg font-medium text-brandGray">km</span></div>
              <div class="text-[9px] font-bold tracking-widest text-brandDark/40 uppercase mt-1">Comm Range</div>
            </div>
            <div class="border-l border-neutral-200/60 pl-4 sm:pl-6">
              <div class="text-2xl sm:text-3xl font-extrabold text-brandDark">72 <span class="text-lg font-medium text-brandGray">kph</span></div>
              <div class="text-[9px] font-bold tracking-widest text-brandDark/40 uppercase mt-1">Max Speed</div>
            </div>
            <div class="border-l border-neutral-200/60 pl-4 sm:pl-6">
              <div class="text-2xl sm:text-3xl font-extrabold text-brandDark">30 <span class="text-lg font-medium text-brandGray">min</span></div>
              <div class="text-[9px] font-bold tracking-widest text-brandDark/40 uppercase mt-1">Max Flight Time</div>
            </div>
          </div>

        </div>

        <!-- RIGHT HALF: The Dark Graphic Frame (Lg: 4 cols) -->
        <div class="lg:col-span-4 bg-[#3d3d3d] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          
          <!-- Subtle watermark behind the controller -->
          <div class="absolute inset-y-0 right-0 flex items-center justify-end z-0 pointer-events-none select-none">
            <span class="text-watermark-dark text-white/5 uppercase select-none font-black rotate-90 origin-right translate-x-4">AERO</span>
          </div>

          <!-- Header Utility inside dark side -->
          <div class="z-10 flex justify-between items-center">
            <span class="text-[10px] tracking-[0.25em] text-white/40 uppercase font-bold">In-Stock Ready</span>
            <div class="flex gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-subtle"></span>
            </div>
          </div>

          <!-- Controller & Interactive Display -->
          <div class="z-10 my-12 flex flex-col items-center">
            <!-- Custom Controller SVG graphic -->
            <div class="w-36 h-36 mb-6 hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Main Body -->
                <rect x="18" y="32" width="64" height="48" rx="14" fill="#1e1e1e" />
                <rect x="20" y="34" width="60" height="44" rx="12" fill="#2d2d2d" stroke="#444" stroke-width="1.5" />
                <!-- Screen Mount -->
                <rect x="42" y="16" width="16" height="16" rx="3" fill="#1e1e1e" />
                <rect x="40" y="24" width="20" height="4" fill="#3a3a3a" />
                <path d="M47 16 L47 8 L53 8 L53 16 Z" fill="#1a1a1a" />
                <!-- Joysticks -->
                <circle cx="34" cy="50" r="10" fill="#1a1a1a" stroke="#444" stroke-width="1" />
                <circle cx="34" cy="50" r="4" fill="#ffffff" />
                <circle cx="66" cy="50" r="10" fill="#1a1a1a" stroke="#444" stroke-width="1" />
                <circle cx="66" cy="50" r="4" fill="#ffffff" />
                <!-- Status LEDs -->
                <circle cx="50" cy="42" r="1.5" fill="#4ade80" />
                <circle cx="46" cy="42" r="1" fill="#4ade80" opacity="0.6" />
                <circle cx="54" cy="42" r="1" fill="#4ade80" opacity="0.6" />
                <!-- Grip Inlays -->
                <rect x="22" y="58" width="6" height="16" rx="2" fill="#1a1a1a" opacity="0.5" />
                <rect x="72" y="58" width="6" height="16" rx="2" fill="#1a1a1a" opacity="0.5" />
              </svg>
            </div>
            
            <h3 class="text-md font-bold tracking-wider uppercase text-center mb-1">Standard Remote Controller</h3>
            <p class="text-xs text-white/50 text-center max-w-[200px] leading-relaxed">Included screen-mount variant with low-latency link</p>
          </div>

          <!-- THE DESIGNER CTA GRID: Dynamic Buy Action -->
          <div class="z-10">
            <a href="#configurator" class="group block w-full bg-[#1e1e1e] hover:bg-[#111111] transition-all duration-300 border border-neutral-700/50 p-6 rounded-2xl flex items-center justify-between shadow-2xl">
              <div>
                <span class="block text-[10px] tracking-[0.2em] uppercase text-white/40 font-bold">Aero Complete Package</span>
                <span class="block text-lg font-bold tracking-wide mt-0.5">BUY NOW</span>
                <span class="text-xs font-mono text-neutral-400" id="hero-price">USD $1,599</span>
              </div>
              <div class="w-10 h-10 rounded-full bg-white text-brandDark flex items-center justify-center transform group-hover:translate-x-1.5 transition-transform duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </a>
          </div>

        </div>

      </div>

      <!-- ABSOLUTE CENTERPIECE: Floating Immersive Interactive Drone Vector Graphics (Bridging Left/Right splits) -->
      <!-- Positioned absolutely above the split background on desktop for that unified design energy -->
      <div class="lg:absolute lg:top-1/2 lg:right-[20%] lg:-translate-y-1/2 lg:translate-x-12 w-full lg:w-[48%] h-72 lg:h-[450px] flex items-center justify-center pointer-events-auto z-20 py-8 lg:py-0">
        
        <!-- Interactive Product Frame -->
        <div class="relative w-full h-full flex flex-col justify-center items-center">
          
          <!-- Subtle glow circle in background -->
          <div class="absolute w-[280px] h-[280px] rounded-full bg-neutral-200/30 blur-3xl -z-10"></div>
          
          <!-- Master Drone SVG - Reactive to interactive toggles -->
          <svg id="drone-svg" class="w-[85%] max-w-[420px] h-auto drop-shadow-[0_25px_30px_rgba(0,0,0,0.15)] animate-float-slow transition-all duration-700" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            <!-- Propeller Shadows & Rotors Background (Spinning vibe) -->
            <ellipse class="animate-pulse" cx="120" cy="110" rx="90" ry="8" fill="#111" opacity="0.06"/>
            <ellipse class="animate-pulse" cx="380" cy="110" rx="90" ry="8" fill="#111" opacity="0.06"/>

            <!-- Propulsion Motor Pod Left Rear -->
            <rect x="140" y="140" width="16" height="25" rx="3" fill="#2d2d2d" />
            <circle cx="148" cy="140" r="8" fill="#444" />

            <!-- Propulsion Motor Pod Right Rear -->
            <rect x="344" y="140" width="16" height="25" rx="3" fill="#2d2d2d" />
            <circle cx="352" cy="140" r="8" fill="#444" />

            <!-- Left Legs structure -->
            <path d="M210 240 L160 300 L160 315 L230 315 L220 300" stroke="#aaa" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="drone-legs-metal"/>
            <!-- Right Legs structure -->
            <path d="M290 240 L340 300 L340 315 L270 315 L280 300" stroke="#aaa" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="drone-legs-metal"/>

            <!-- Left Diagonal Arm (Chassis) -->
            <path d="M200 200 L110 140 L120 130 L210 180 Z" fill="#d8d8d8" class="drone-body-shell" />
            <!-- Right Diagonal Arm (Chassis) -->
            <path d="M300 200 L390 140 L380 130 L290 180 Z" fill="#d8d8d8" class="drone-body-shell" />

            <!-- Front Arm Left (Chassis) -->
            <path d="M220 210 L150 250 L140 240 L210 200 Z" fill="#cfcfcf" class="drone-body-shell-dark" />
            <!-- Front Arm Right (Chassis) -->
            <path d="M280 210 L350 250 L360 240 L290 200 Z" fill="#cfcfcf" class="drone-body-shell-dark" />

            <!-- Propulsion Motor Pod Left Front -->
            <rect x="104" y="120" width="22" height="30" rx="5" fill="#3a3a3a" />
            <circle cx="115" cy="120" r="10" fill="#222" />
            <line x1="115" y1="120" x2="115" y2="135" stroke="#999" stroke-width="2"/>

            <!-- Propulsion Motor Pod Right Front -->
            <rect x="374" y="120" width="22" height="30" rx="5" fill="#3a3a3a" />
            <circle cx="385" cy="120" r="10" fill="#222" />
            <line x1="385" y1="120" x2="385" y2="135" stroke="#999" stroke-width="2"/>

            <!-- Landing Skids Under-runners -->
            <rect x="140" y="312" width="105" height="6" rx="3" fill="#1e1e1e" class="drone-skid" />
            <rect x="255" y="312" width="105" height="6" rx="3" fill="#1e1e1e" class="drone-skid" />

            <!-- Central Fusion Core (Main Shell Body) -->
            <path d="M190 160 C190 130, 310 130, 310 160 L320 220 C320 240, 180 240, 180 220 Z" fill="#e8e8e8" class="drone-body-shell" />
            
            <!-- Battery Compartment Line detail -->
            <path d="M210 155 L290 155" stroke="#ccc" stroke-width="1.5" stroke-linecap="round" class="drone-panel-lines" />
            <path d="M200 180 L300 180" stroke="#ccc" stroke-width="1.5" stroke-linecap="round" class="drone-panel-lines" />

            <!-- Core Brand Logo Accent on Core -->
            <rect x="235" y="145" width="30" height="4" rx="2" fill="#1a1a1a" class="drone-accent" />
            
            <!-- Camera Gimbal System Assembly -->
            <!-- Arm link -->
            <path d="M240 230 L240 260 L260 260" stroke="#888" stroke-width="3" stroke-linecap="round"/>
            <!-- Camera Cylinder -->
            <rect x="230" y="260" width="40" height="28" rx="8" fill="#1c1c1c" />
            <!-- Camera Lens ring (facing somewhat forward-left) -->
            <ellipse cx="250" cy="274" rx="14" ry="10" fill="#111" stroke="#444" stroke-width="1.5" />
            <circle cx="250" cy="274" r="6" fill="#0d2c3f" /> <!-- Glass/lens bluish reflection -->
            <circle cx="248" cy="271" r="2" fill="#fff" opacity="0.7" /> <!-- Reflection dot -->

            <!-- Propellers Spinning Indicators (Light blurred circular paths) -->
            <ellipse cx="115" cy="116" rx="75" ry="5" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" stroke-dasharray="10, 4" class="drone-prop-blur" />
            <ellipse cx="385" cy="116" rx="75" ry="5" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" stroke-dasharray="10, 4" class="drone-prop-blur" />
          </svg>

          <!-- Interactive Carousel Selectors Under Product -->
          <div class="flex items-center gap-5 mt-4 z-30">
            <button onclick="setDroneStyle('silver')" class="group flex items-center justify-center w-8 h-8 rounded-full border-2 border-brandDark transition-all bg-white" id="btn-silver">
              <span class="w-4 h-4 rounded-full bg-neutral-300"></span>
            </button>
            <button onclick="setDroneStyle('obsidian')" class="group flex items-center justify-center w-8 h-8 rounded-full border-2 border-transparent hover:border-neutral-400 transition-all bg-white" id="btn-obsidian">
              <span class="w-4 h-4 rounded-full bg-neutral-800"></span>
            </button>
            <span class="text-[11px] font-bold tracking-widest text-brandDark/40 uppercase uppercase ml-2 select-none">
              SWAP STYLE
            </span>
          </div>

        </div>

      </div>

    </div>
  </main>

  <!-- COLLABORATIVE / COMMUNITY ANCHOR: The Technical Exploded Spec Hotspots -->
  <section class="max-w-[1440px] mx-auto px-4 md:px-8 py-12" id="hotspots">
    <div class="bg-brandDark text-white rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-xl border border-neutral-800">
      
      <!-- Grid Header -->
      <div class="relative z-10 max-w-3xl mb-12">
        <span class="text-xs font-bold tracking-[0.3em] uppercase text-white/40">EXPLODE DIAGRAM</span>
        <h2 class="text-3xl md:text-5xl font-black tracking-tight uppercase text-white mt-3">
          Precision Engineering. <br><span class="font-light text-neutral-400">Inside and out.</span>
        </h2>
        <p class="text-neutral-400 mt-4 max-w-lg text-sm md:text-base leading-relaxed">
          Hover or tap on the active structural nodes to inspect the deep tech that allows autonomous flight control.
        </p>
      </div>

      <!-- Exploded Hotspot Container -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <!-- Left 7 cols: SVG Diagram with Hotspots -->
        <div class="lg:col-span-7 flex justify-center relative">
          <!-- Main Tech Wireframe Drone -->
          <svg class="w-full max-w-[450px] h-auto text-white/20 opacity-90 transition-all duration-300" viewBox="0 0 500 400" fill="none" stroke="currentColor" stroke-width="1">
            <!-- Drone outline path representation -->
            <path d="M250 120 C180 120, 150 180, 150 200 L160 210 L120 150 L110 160 L140 220 L250 240" stroke-dasharray="4,4"/>
            <path d="M250 120 C320 120, 350 180, 350 200 L340 210 L380 150 L390 160 L360 220 L250 240" stroke-dasharray="4,4"/>
            <circle cx="120" cy="150" r="12" />
            <circle cx="380" cy="150" r="12" />
            <!-- Gimbal Wireframe -->
            <rect x="225" y="240" width="50" height="35" rx="5" stroke-dasharray="2,2" />
            <circle cx="250" cy="290" r="18" />
            <!-- Landing gear Wireframe -->
            <path d="M200 240 L170 320 L230 320 L210 240" />
            <path d="M300 240 L330 320 L270 320 L290 240" />
          </svg>

          <!-- INTERACTIVE HOTSPOT PIN 1: Camera Gimbal -->
          <button onclick="activateHotspot(1)" class="absolute top-[68%] left-[50%] -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center" aria-label="Gimbal Detail">
            <span class="absolute inline-flex h-8 w-8 rounded-full bg-white/20 animate-ping"></span>
            <span class="relative inline-flex rounded-full h-5 w-5 bg-white items-center justify-center border-2 border-brandDark shadow-md transition-transform group-hover:scale-125">
              <span class="w-1.5 h-1.5 rounded-full bg-brandDark"></span>
            </span>
          </button>

          <!-- INTERACTIVE HOTSPOT PIN 2: Left Rotor (Propulsion) -->
          <button onclick="activateHotspot(2)" class="absolute top-[35%] left-[24%] -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center" aria-label="Propulsion Detail">
            <span class="absolute inline-flex h-8 w-8 rounded-full bg-white/20 animate-ping"></span>
            <span class="relative inline-flex rounded-full h-5 w-5 bg-white items-center justify-center border-2 border-brandDark shadow-md transition-transform group-hover:scale-125">
              <span class="w-1.5 h-1.5 rounded-full bg-brandDark"></span>
            </span>
          </button>

          <!-- INTERACTIVE HOTSPOT PIN 3: Obstacle Guidance sensor -->
          <button onclick="activateHotspot(3)" class="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center" aria-label="Sensor Detail">
            <span class="absolute inline-flex h-8 w-8 rounded-full bg-white/20 animate-ping"></span>
            <span class="relative inline-flex rounded-full h-5 w-5 bg-white items-center justify-center border-2 border-brandDark shadow-md transition-transform group-hover:scale-125">
              <span class="w-1.5 h-1.5 rounded-full bg-brandDark"></span>
            </span>
          </button>

          <!-- INTERACTIVE HOTSPOT PIN 4: Power Unit -->
          <button onclick="activateHotspot(4)" class="absolute top-[35%] left-[76%] -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center" aria-label="Battery Detail">
            <span class="absolute inline-flex h-8 w-8 rounded-full bg-white/20 animate-ping"></span>
            <span class="relative inline-flex rounded-full h-5 w-5 bg-white items-center justify-center border-2 border-brandDark shadow-md transition-transform group-hover:scale-125">
              <span class="w-1.5 h-1.5 rounded-full bg-brandDark"></span>
            </span>
          </button>
        </div>

        <!-- Right 5 cols: Detail Display Box -->
        <div class="lg:col-span-5 bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between min-h-[320px]">
          <div>
            <span class="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold block mb-2" id="hotspot-label">COMPONENTS</span>
            <h3 class="text-2xl font-bold tracking-tight uppercase text-white" id="hotspot-title">Tap an active node</h3>
            <p class="text-neutral-400 mt-4 text-sm leading-relaxed" id="hotspot-description">
              Select one of the glowing target circles on the wireframe design to examine materials, mechanical design, and functional specs.
            </p>
          </div>
          
          <div class="pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span>DIAGRAM STATE: READY</span>
            <span id="hotspot-number">0/4 SELECTED</span>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- INTERACTIVE CONFIGURATOR (DYNAMIC CUSTOMIZE & BUILD) -->
  <section class="max-w-[1440px] mx-auto px-4 md:px-8 py-12" id="configurator">
    <div class="bg-white rounded-3xl p-8 md:p-16 shadow-lg border border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-12">
      
      <!-- Left Configurator Column: Render Output -->
      <div class="lg:col-span-6 flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold tracking-[0.3em] text-brandDark/40 uppercase">LIVE CONFIGURATOR</span>
          <h2 class="text-3xl md:text-5xl font-black tracking-tight text-brandDark uppercase mt-2">
            Build Your Aero
          </h2>
          <p class="text-sm text-brandGray mt-3">
            Construct your custom kit with premium payload additions, backup batteries, and protective frames.
          </p>
        </div>

        <!-- Render Box -->
        <div class="my-8 bg-brandLight rounded-2xl p-8 border border-neutral-100 flex flex-col items-center justify-center min-h-[280px] relative">
          <!-- Tiny active parameters preview -->
          <div class="absolute top-4 left-4 text-[10px] font-mono uppercase text-brandDark/50 tracking-wider flex flex-col gap-1">
            <span>EDITION: <strong id="spec-preview-edition" class="text-brandDark">STANDARD</strong></span>
            <span>COLOR: <strong id="spec-preview-color" class="text-brandDark">ARCTIC SILVER</strong></span>
          </div>

          <!-- Dynamic SVG Canvas for preview -->
          <div class="w-full max-w-[280px]">
            <svg viewBox="0 0 100 100" fill="none" class="w-full h-auto drop-shadow-lg">
              <!-- Basic Core Frame -->
              <rect x="25" y="45" width="50" height="20" rx="10" fill="#dedede" id="config-svg-core" />
              <!-- Diagonal Arm Left -->
              <line x1="30" y1="50" x2="10" y2="30" stroke="#cccccc" stroke-width="6" stroke-linecap="round" id="config-svg-arm1" />
              <!-- Diagonal Arm Right -->
              <line x1="70" y1="50" x2="90" y2="30" stroke="#cccccc" stroke-width="6" stroke-linecap="round" id="config-svg-arm2" />
              <!-- Motors -->
              <rect x="5" y="22" width="10" height="10" rx="2" fill="#3a3a3a" />
              <rect x="85" y="22" width="10" height="10" rx="2" fill="#3a3a3a" />
              <!-- Props (Static Indicator) -->
              <line x1="0" y1="22" x2="20" y2="22" stroke="#555" stroke-width="2" />
              <line x1="80" y1="22" x2="100" y2="22" stroke="#555" stroke-width="2" />
              <!-- Camera Lens -->
              <circle cx="50" cy="72" r="14" fill="#1c1c1c" />
              <circle cx="50" cy="72" r="7" fill="#0d2c3f" />
              <!-- Smart Controller Addon Indicator (Visible if checked) -->
              <rect x="35" y="8" width="30" height="18" rx="2" fill="#2d2d2d" stroke="#555" stroke-width="1.5" id="config-svg-controller" class="hidden" />
              <!-- Lens Filter Indicator (Visible if checked) -->
              <circle cx="50" cy="72" r="16" stroke="#4ade80" stroke-width="2" id="config-svg-lens" class="hidden" />
            </svg>
          </div>

          <div class="mt-4 text-center">
            <span class="text-xs uppercase tracking-widest text-brandDark/50 font-semibold">PREVIEW SCHEMATIC</span>
          </div>
        </div>

        <div class="text-xs text-brandGray font-medium">
          * Each customize build is assembled and flight-calibrated by a master technician prior to dispatch.
        </div>
      </div>

      <!-- Right Configurator Column: Dynamic Controllers & Options -->
      <div class="lg:col-span-6 flex flex-col justify-between">
        
        <!-- Step 1: Base Flight Edition -->
        <div class="mb-8">
          <span class="text-[11px] font-bold tracking-widest text-brandDark/40 uppercase block mb-3">01 / Choose Edition</span>
          <div class="grid grid-cols-2 gap-4">
            <label class="border-2 border-brandDark rounded-xl p-4 flex flex-col justify-between cursor-pointer hover:bg-neutral-50/50 transition-colors" id="label-edition-std">
              <input type="radio" name="edition" value="std" checked class="sr-only" onchange="updateConfigurator()">
              <span class="text-sm font-bold tracking-wider uppercase text-brandDark">Standard</span>
              <span class="text-xs text-brandGray mt-1">Ready to Fly build</span>
              <span class="text-md font-extrabold text-brandDark mt-4">$1,599</span>
            </label>
            <label class="border border-neutral-200 rounded-xl p-4 flex flex-col justify-between cursor-pointer hover:bg-neutral-50/50 transition-colors" id="label-edition-pro">
              <input type="radio" name="edition" value="pro" class="sr-only" onchange="updateConfigurator()">
              <span class="text-sm font-bold tracking-wider uppercase text-brandDark">Pro Pack</span>
              <span class="text-xs text-brandGray mt-1">Advanced Cine kit</span>
              <span class="text-md font-extrabold text-brandDark mt-4">$2,199</span>
            </label>
          </div>
        </div>

        <!-- Step 2: Chassis Finish Color Swatch -->
        <div class="mb-8">
          <span class="text-[11px] font-bold tracking-widest text-brandDark/40 uppercase block mb-3">02 / Color Finish</span>
          <div class="flex gap-4">
            <button onclick="setConfigColor('silver')" class="px-5 py-3 rounded-full border-2 border-brandDark text-xs font-semibold uppercase tracking-wider bg-white shadow-sm flex items-center gap-2" id="config-btn-silver">
              <span class="w-3.5 h-3.5 rounded-full bg-neutral-300 inline-block border border-neutral-400"></span>
              Arctic Silver
            </button>
            <button onclick="setConfigColor('obsidian')" class="px-5 py-3 rounded-full border border-neutral-200 text-xs font-semibold uppercase tracking-wider bg-white shadow-sm flex items-center gap-2" id="config-btn-obsidian">
              <span class="w-3.5 h-3.5 rounded-full bg-neutral-800 inline-block border border-neutral-900"></span>
              Obsidian
            </button>
          </div>
        </div>

        <!-- Step 3: Payload & Accessories Integration -->
        <div class="mb-8">
          <span class="text-[11px] font-bold tracking-widest text-brandDark/40 uppercase block mb-3">03 / Optional Payload Upgrades</span>
          <div class="flex flex-col gap-3">
            <label class="flex items-center justify-between p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50/50 cursor-pointer transition-colors" id="addon-item-controller">
              <div class="flex items-center gap-3">
                <input type="checkbox" id="addon-controller" class="rounded border-neutral-300 text-brandDark focus:ring-brandDark w-4 h-4" onchange="updateConfigurator()">
                <div>
                  <span class="text-sm font-bold tracking-wide uppercase block text-brandDark">Smart Ultra-Link Remote</span>
                  <span class="text-xs text-brandGray">Upgrades transmitter with integrated ultra-bright 5.5" screen</span>
                </div>
              </div>
              <span class="text-sm font-bold text-brandDark">+$250</span>
            </label>
            
            <label class="flex items-center justify-between p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50/50 cursor-pointer transition-colors" id="addon-item-lens">
              <div class="flex items-center gap-3">
                <input type="checkbox" id="addon-lens" class="rounded border-neutral-300 text-brandDark focus:ring-brandDark w-4 h-4" onchange="updateConfigurator()">
                <div>
                  <span class="text-sm font-bold tracking-wide uppercase block text-brandDark">Pro Polarized Glass Kit</span>
                  <span class="text-xs text-brandGray">ND8, ND16, and ND32 optical polarized lens array</span>
                </div>
              </div>
              <span class="text-sm font-bold text-brandDark">+$120</span>
            </label>
          </div>
        </div>

        <!-- Bottom Dynamic Summary panel -->
        <div class="bg-brandDark text-white p-6 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <span class="text-[9px] uppercase tracking-[0.25em] text-white/40 block font-bold">Total Investment Estimate</span>
            <span class="text-3xl font-extrabold tracking-wide block mt-1" id="config-total-price">$1,599</span>
          </div>
          <button onclick="addToCartTrigger()" class="bg-white hover:bg-neutral-100 text-brandDark transition-colors px-8 py-4 rounded-xl text-xs font-bold tracking-widest uppercase shadow-lg text-center">
            ADD TO BASKET
          </button>
        </div>

      </div>

    </div>
  </section>

  <!-- FEATURES BENTO GRID (Highly intentional, stylized, clean aesthetic) -->
  <section class="max-w-[1440px] mx-auto px-4 md:px-8 py-12" id="features">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <span class="text-xs font-bold tracking-[0.3em] text-brandDark/40 uppercase">EXCEPTIONAL CAPABILITIES</span>
      <h2 class="text-3xl md:text-5xl font-black tracking-tight uppercase mt-3">The New Standard</h2>
      <p class="text-sm md:text-base text-brandGray mt-4">
        Every detail and component is engineered to provide extreme durability and high performance telemetry.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <!-- Card 1: Obstacle Avoidance -->
      <div class="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div class="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-brandDark group-hover:scale-105 transition-transform duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
          </div>
          <h3 class="text-lg font-bold uppercase tracking-wide mt-6 mb-2 text-brandDark">5-Directional Obstacle Sensing</h3>
          <p class="text-xs text-brandGray leading-relaxed">
            Consisting of dual stereo vision sensors, infrared mapping, and ultrasonic positioning arrays to detect objects up to 30 meters ahead.
          </p>
        </div>
        <div class="mt-8 text-[11px] font-bold uppercase tracking-widest text-brandDark/40 group-hover:text-brandDark transition-colors">
          Explore Avionics &rarr;
        </div>
      </div>

      <!-- Card 2: Camera Gimbal Payload -->
      <div class="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div class="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-brandDark group-hover:scale-105 transition-transform duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><circle cx="12" cy="13" r="3"></circle></svg>
          </div>
          <h3 class="text-lg font-bold uppercase tracking-wide mt-6 mb-2 text-brandDark">1-Inch 20MP Exmor Sensor</h3>
          <p class="text-xs text-brandGray leading-relaxed">
            Shoots beautiful 4K ultra-stabilized video at 60fps, capturing unmatched dynamic range with an adjustable aperture diaphragm.
          </p>
        </div>
        <div class="mt-8 text-[11px] font-bold uppercase tracking-widest text-brandDark/40 group-hover:text-brandDark transition-colors">
          View Optical Specs &rarr;
        </div>
      </div>

      <!-- Card 3: Dynamic Controller Link -->
      <div class="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div class="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-brandDark group-hover:scale-105 transition-transform duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10.5 10.5 0 0114.14 0M1.414 8.414a16.25 16.25 0 0121.172 0"></path></svg>
          </div>
          <h3 class="text-lg font-bold uppercase tracking-wide mt-6 mb-2 text-brandDark">Lightbridge Video Link</h3>
          <p class="text-xs text-brandGray leading-relaxed">
            Automatic multi-channel frequency swapping ensures low latency live feedback and highly resilient radio communication even in built-up urban centers.
          </p>
        </div>
        <div class="mt-8 text-[11px] font-bold uppercase tracking-widest text-brandDark/40 group-hover:text-brandDark transition-colors">
          Signal Mapping &rarr;
        </div>
      </div>

    </div>
  </section>

  <!-- MINIMAL EDITORIAL QUOTE / TESTIMONIAL (Aesthetic Depth) -->
  <section class="max-w-[1440px] mx-auto px-4 md:px-8 py-12" id="gallery">
    <div class="bg-brandLight rounded-3xl p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border border-neutral-200">
      
      <!-- Typography Side -->
      <div class="lg:col-span-7">
        <svg class="w-10 h-10 text-brandDark/10 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9-10.961v1.244c-3.777 1.103-6 4.099-6 7.428h5v10h-8zm-11 0v-7.391c0-5.704 3.748-9.762 9-10.961v1.244c-3.777 1.103-6 4.099-6 7.428h5v10h-8z"/></svg>
        <blockquote class="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight leading-relaxed text-brandDark">
          "The stability is completely game-changing. We put this aircraft up in gale-force mountain winds, and the camera feeds came back looking like it was locked down on a studio tripod."
        </blockquote>
        <div class="mt-8">
          <p class="text-sm font-bold uppercase tracking-widest text-brandDark">Marcus Cole</p>
          <p class="text-xs text-brandGray mt-1">Avionics Director, High-Angle Media Works</p>
        </div>
      </div>

      <!-- Minimal Visual Gallery Card Side -->
      <div class="lg:col-span-5 flex flex-col gap-4">
        <div class="bg-white p-4 rounded-2xl border border-neutral-200/60 shadow-sm flex items-center gap-4">
          <div class="w-20 h-20 bg-neutral-900 rounded-xl overflow-hidden flex-shrink-0 relative">
            <svg class="absolute inset-0 w-full h-full text-white/10" viewBox="0 0 100 100" fill="currentColor">
              <rect x="10" y="20" width="80" height="60" rx="4" />
              <circle cx="50" cy="50" r="15" />
            </svg>
          </div>
          <div>
            <span class="text-[9px] tracking-[0.2em] uppercase font-bold text-brandDark/40">FEATURED CAPTURE</span>
            <h4 class="text-sm font-bold uppercase tracking-wider text-brandDark mt-0.5">High Alpine Glaciers</h4>
            <p class="text-[11px] text-brandGray mt-1">Shot at 4,200m elevation in Swiss Alps using standard mechanical shutter.</p>
          </div>
        </div>

        <div class="bg-white p-4 rounded-2xl border border-neutral-200/60 shadow-sm flex items-center gap-4">
          <div class="w-20 h-20 bg-neutral-900 rounded-xl overflow-hidden flex-shrink-0 relative">
            <svg class="absolute inset-0 w-full h-full text-white/10" viewBox="0 0 100 100" fill="currentColor">
              <rect x="10" y="20" width="80" height="60" rx="4" />
              <circle cx="50" cy="50" r="15" />
            </svg>
          </div>
          <div>
            <span class="text-[9px] tracking-[0.2em] uppercase font-bold text-brandDark/40">FEATURED CAPTURE</span>
            <h4 class="text-sm font-bold uppercase tracking-wider text-brandDark mt-0.5">Urban Horizon</h4>
            <p class="text-[11px] text-brandGray mt-1">Shot using Smart HDR mode with precise dynamic aperture settings.</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- SUPPORT & FAQ (Clean, expandable lists) -->
  <section class="max-w-[1440px] mx-auto px-4 md:px-8 py-12" id="support">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <span class="text-xs font-bold tracking-[0.3em] text-brandDark/40 uppercase">EXPERT SERVICES</span>
        <h2 class="text-2xl sm:text-4xl font-black uppercase tracking-tight text-brandDark mt-2">Ownership &amp; Flight Support</h2>
      </div>

      <div class="space-y-4">
        <!-- FAQ Item 1 -->
        <div class="border border-neutral-200 rounded-xl bg-white transition-all overflow-hidden">
          <button onclick="toggleFaq(1)" class="w-full text-left p-6 flex justify-between items-center hover:bg-neutral-50 transition-colors">
            <span class="font-bold text-sm sm:text-base tracking-wide uppercase text-brandDark">What is included in the premium warranty pack?</span>
            <svg id="faq-icon-1" class="w-5 h-5 text-brandDark transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div id="faq-content-1" class="hidden px-6 pb-6 text-xs sm:text-sm text-brandGray leading-relaxed border-t border-neutral-100 pt-4 bg-neutral-50/50">
            Our premium flight warranty covers two accidental replacement components within the first year, 24/7 tele-support with experienced drone operators, and free return shipping on all dynamic recalibrations.
          </div>
        </div>

        <!-- FAQ Item 2 -->
        <div class="border border-neutral-200 rounded-xl bg-white transition-all overflow-hidden">
          <button onclick="toggleFaq(2)" class="w-full text-left p-6 flex justify-between items-center hover:bg-neutral-50 transition-colors">
            <span class="font-bold text-sm sm:text-base tracking-wide uppercase text-brandDark">Can I operate the Phantom 4 Pro with smartphone apps?</span>
            <svg id="faq-icon-2" class="w-5 h-5 text-brandDark transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div id="faq-content-2" class="hidden px-6 pb-6 text-xs sm:text-sm text-brandGray leading-relaxed border-t border-neutral-100 pt-4 bg-neutral-50/50">
            Yes, using the DJI GO 4 application, you can pair the transmitter with any modern iOS or Android device. Alternatively, upgrading to our Pro Controller integrates a dedicated ultra-bright 5.5-inch panel directly.
          </div>
        </div>

        <!-- FAQ Item 3 -->
        <div class="border border-neutral-200 rounded-xl bg-white transition-all overflow-hidden">
          <button onclick="toggleFaq(3)" class="w-full text-left p-6 flex justify-between items-center hover:bg-neutral-50 transition-colors">
            <span class="font-bold text-sm sm:text-base tracking-wide uppercase text-brandDark">What is the wind tolerance rating of the structural chassis?</span>
            <svg id="faq-icon-3" class="w-5 h-5 text-brandDark transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div id="faq-content-3" class="hidden px-6 pb-6 text-xs sm:text-sm text-brandGray leading-relaxed border-t border-neutral-100 pt-4 bg-neutral-50/50">
            The titanium-magnesium alloy layout offers high aerodynamic rigidity. The propulsion systems can dynamically correct rotor velocity to remain perfectly stabilized in steady winds up to 36 kph (22 mph).
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- NEWSLETTER SIGN UP BLOCK -->
  <section class="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
    <div class="bg-brandDark text-white p-8 md:p-16 rounded-3xl relative overflow-hidden border border-neutral-800 text-center">
      <div class="relative z-10 max-w-xl mx-auto">
        <span class="text-xs font-bold tracking-[0.3em] uppercase text-white/40">INTELLIGENCE FLIGHT DIRECTORY</span>
        <h2 class="text-2xl sm:text-4xl font-extrabold uppercase mt-3 mb-4">Stay in the Loop</h2>
        <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-8">
          Get first access to firmware update notes, global aerospace regulation changes, and newly developed camera payloads.
        </p>
        <div id="newsletter-form" class="flex flex-col sm:flex-row gap-3">
          <input type="email" id="newsletter-email" placeholder="ENTER YOUR EMAIL" class="flex-grow bg-neutral-900 border border-neutral-800 focus:outline-none focus:border-neutral-500 rounded-xl px-5 py-4 text-xs tracking-wider uppercase text-white font-mono placeholder-neutral-500">
          <button onclick="subscribeNewsletter()" class="bg-white text-brandDark hover:bg-neutral-100 transition-colors px-8 py-4 rounded-xl text-xs font-bold tracking-widest uppercase">
            SUBSCRIBE
          </button>
        </div>
        <p id="newsletter-success" class="text-green-400 text-xs mt-3 hidden font-semibold">Thank you! Your email has been registered for flight notices.</p>
      </div>
    </div>
  </section>

  <!-- MONOCHROMATIC PREMIUM FOOTER -->
  <footer class="bg-brandDark text-white border-t border-neutral-800 pt-16 pb-12 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
      
      <!-- Brand column -->
      <div class="lg:col-span-2">
        <svg class="h-6 w-auto text-white mb-6" viewBox="0 0 120 40" fill="currentColor">
          <path d="M12 8c-3.3 0-6 2.7-6 6v12c0 3.3 2.7 6 6 6h12c3.3 0 6-2.7 6-6V14c0-3.3-2.7-6-6-6H12zm10 18H14V14h8v12z M38 8h-4v24h8c4.4 0 8-3.6 8-8v-8c0-4.4-3.6-8-8-8zm4 16c0 2.2-1.8 4-4 4h-4V12h4c2.2 0 4 1.8 4 4v8z M56 8h4v24h-4z M70 8h12c2.2 0 4 1.8 4 4s-1.8 4-4 4h-8v4h8c2.2 0 4 1.8 4 4s-1.8 4-4 4H70V8z M94 14h-6v-2h12v2h-6v18h-4V14z" />
          <rect x="108" y="8" width="4" height="24" rx="2" />
        </svg>
        <p class="text-xs text-neutral-400 leading-relaxed max-w-sm mb-6">
          DJI is the global leader in commercial and civilian drone technology. Our Phantom flight layout defines the visual language of modern aerial videography.
        </p>
        <div class="flex gap-4">
          <a href="#" class="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white/60 hover:text-white hover:border-neutral-700 transition-colors" aria-label="Social">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </a>
          <a href="#" class="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white/60 hover:text-white hover:border-neutral-700 transition-colors" aria-label="Social">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.31 1.914c-3.21 0-6.1.01-8.54.12A11.16 11.16 0 001.03 5.06a11.15 11.15 0 00-3.03 3.03A11.23 11.23 0 00.12 11.1c-.11 2.44-.12 5.33-.12 8.54 0 3.21.01 6.1.12 8.54a11.16 11.16 0 003.03 3.03 11.15 11.15 0 003.03 3.03c2.44.11 5.33.12 8.54.12s6.1-.01 8.54-.12a11.16 11.16 0 003.03-3.03 11.15 11.15 0 003.03-3.03c.11-2.44.12-5.33.12-8.54s-.01-6.1-.12-8.54a11.16 11.16 0 00-3.03-3.03 11.15 11.15 0 00-3.03-3.03c-2.44-.11-5.33-.12-8.54-.12zm-4.7 4.7h9.4c1.25 0 2.27 1.02 2.27 2.27v9.4a2.27 2.27 0 01-2.27 2.27H7.61a2.27 2.27 0 01-2.27-2.27v-9.4c0-1.25 1.02-2.27 2.27-2.27zm4.7 2.84a4.26 4.26 0 100 8.52 4.26 4.26 0 000-8.52zm0 1.42a2.84 2.84 0 110 5.68 2.84 2.84 0 010-5.68zm5.2-1.92a1.04 1.04 0 100 2.08 1.04 1.04 0 000-2.08z"/></svg>
          </a>
          <a href="#" class="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white/60 hover:text-white hover:border-neutral-700 transition-colors" aria-label="Social">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
        </div>
      </div>

      <!-- Links Column 1 -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">AVIONICS</h4>
        <ul class="space-y-4 text-xs font-medium text-neutral-400">
          <li><a href="#" class="hover:text-white transition-colors uppercase">Phantom Series</a></li>
          <li><a href="#" class="hover:text-white transition-colors uppercase">Inspire Cinema</a></li>
          <li><a href="#" class="hover:text-white transition-colors uppercase">Mavic Foldable</a></li>
          <li><a href="#" class="hover:text-white transition-colors uppercase">Matrice Heavy-Payload</a></li>
        </ul>
      </div>

      <!-- Links Column 2 -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">COMPONENTS</h4>
        <ul class="space-y-4 text-xs font-medium text-neutral-400">
          <li><a href="#" class="hover:text-white transition-colors uppercase">Intelligent Batteries</a></li>
          <li><a href="#" class="hover:text-white transition-colors uppercase">Quick-Release Propellers</a></li>
          <li><a href="#" class="hover:text-white transition-colors uppercase">Gimbal Hardware</a></li>
          <li><a href="#" class="hover:text-white transition-colors uppercase">Signal Extenders</a></li>
        </ul>
      </div>

      <!-- Links Column 3 -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">LEGAL & SAFETY</h4>
        <ul class="space-y-4 text-xs font-medium text-neutral-400">
          <li><a href="#" class="hover:text-white transition-colors uppercase">FAA Compliance</a></li>
          <li><a href="#" class="hover:text-white transition-colors uppercase">Flight Maps & No-Fly Zones</a></li>
          <li><a href="#" class="hover:text-white transition-colors uppercase">Registration Support</a></li>
          <li><a href="#" class="hover:text-white transition-colors uppercase">Privacy Terms</a></li>
        </ul>
      </div>

    </div>

    <!-- Bottom copyright / region selector -->
    <div class="max-w-7xl mx-auto border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-medium">
      <p>&copy; 2026 DJI. Designed in alignment with premium aerospace standards. All rights reserved.</p>
      <div class="flex gap-6 uppercase">
        <a href="#" class="hover:text-white transition-colors">United States / English</a>
        <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" class="hover:text-white transition-colors">Terms of Use</a>
      </div>
    </div>
  </footer>

  <!-- CUSTOM FEEDBACK NOTIFICATION DRAWER (Replaces system alerts) -->
  <div id="toast-notif" class="fixed bottom-6 right-6 z-50 bg-brandDark text-white border border-neutral-800 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none">
    <div class="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-subtle"></div>
    <div>
      <p id="toast-text" class="text-xs font-bold uppercase tracking-wider">Item Added To Basket</p>
    </div>
  </div>

  <!-- INTERACTION ENGINE (VANILLA JS CONTROLLER) -->
  <script>
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Drone Hero Color Switcher
    function setDroneStyle(color) {
      const droneSvg = document.getElementById('drone-svg');
      const shells = document.querySelectorAll('.drone-body-shell');
      const shellsDark = document.querySelectorAll('.drone-body-shell-dark');
      const legs = document.querySelectorAll('.drone-legs-metal');
      
      const btnSilver = document.getElementById('btn-silver');
      const btnObsidian = document.getElementById('btn-obsidian');

      if (color === 'obsidian') {
        // Change colors of main SVG vectors
        shells.forEach(el => el.setAttribute('fill', '#262626'));
        shellsDark.forEach(el => el.setAttribute('fill', '#1a1a1a'));
        legs.forEach(el => el.setAttribute('stroke', '#555555'));
        
        // Update UI Selector Ring
        btnObsidian.classList.add('border-brandDark');
        btnObsidian.classList.remove('border-transparent');
        btnSilver.classList.remove('border-brandDark');
        btnSilver.classList.add('border-transparent');
        
        // Synchronize and fire smooth notification
        showToast("Switched Style To Obsidian Edition");
      } else {
        // Change back to classic silver
        shells.forEach(el => el.setAttribute('fill', '#e8e8e8'));
        shellsDark.forEach(el => el.setAttribute('fill', '#cfcfcf'));
        legs.forEach(el => el.setAttribute('stroke', '#aaaaaa'));

        // Update UI Selector Ring
        btnSilver.classList.add('border-brandDark');
        btnSilver.classList.remove('border-transparent');
        btnObsidian.classList.remove('border-brandDark');
        btnObsidian.classList.add('border-transparent');

        showToast("Switched Style To Arctic Silver Edition");
      }
    }

    // Dynamic Hotspot Exploded Spec system
    const hotspotData = {
      1: {
        title: "Mechanical 3-Axis Gimbal",
        desc: "A custom high-precision brushless gimbal stabilization assembly guarantees frictionless dampening of aircraft pitch, yaw, and roll up to +/- 0.01 degrees.",
        num: "1/4 SELECTED",
        label: "OPTICAL PAYLOAD"
      },
      2: {
        title: "Brushless Motor Drive",
        desc: "Equipped with high-frequency ESC control boards and rapid release structural propellers, yielding high thrust-to-weight responses and top speeds of 72 kph.",
        num: "2/4 SELECTED",
        label: "PROPULSION ENGINE"
      },
      3: {
        title: "Steric Flight Sensors",
        desc: "Rearward, forward, and bottom stereo vision cameras scan local terrain in real-time to compute automatic return-to-home path guidance and escape danger zones.",
        num: "3/4 SELECTED",
        label: "COLLISION DETECTION"
      },
      4: {
        title: "Intelligent Power Grid",
        desc: "A proprietary 5870mAh High Density LiPo battery system with thermal safety triggers, communicating real-time state parameters back to the main pilot HUD.",
        num: "4/4 SELECTED",
        label: "CELL DEPLOYMENT"
      }
    };

    function activateHotspot(id) {
      const data = hotspotData[id];
      if (!data) return;

      document.getElementById('hotspot-title').textContent = data.title;
      document.getElementById('hotspot-description').textContent = data.desc;
      document.getElementById('hotspot-number').textContent = data.num;
      document.getElementById('hotspot-label').textContent = data.label;

      showToast(`Inspecting Component: ${data.title}`);
    }

    // Dynamic Configurator Calculations
    let selectedColor = 'silver';

    function setConfigColor(color) {
      selectedColor = color;
      
      const btnSilver = document.getElementById('config-btn-silver');
      const btnObsidian = document.getElementById('config-btn-obsidian');

      const coreSvg = document.getElementById('config-svg-core');
      const arm1Svg = document.getElementById('config-svg-arm1');
      const arm2Svg = document.getElementById('config-svg-arm2');

      if (color === 'obsidian') {
        btnObsidian.className = "px-5 py-3 rounded-full border-2 border-brandDark text-xs font-semibold uppercase tracking-wider bg-white shadow-sm flex items-center gap-2";
        btnSilver.className = "px-5 py-3 rounded-full border border-neutral-200 text-xs font-semibold uppercase tracking-wider bg-white shadow-sm flex items-center gap-2";
        
        // Update schematic colors
        coreSvg.setAttribute('fill', '#2d2d2d');
        arm1Svg.setAttribute('stroke', '#444444');
        arm2Svg.setAttribute('stroke', '#444444');

        document.getElementById('spec-preview-color').textContent = "OBSIDIAN GRAPHITE";
      } else {
        btnSilver.className = "px-5 py-3 rounded-full border-2 border-brandDark text-xs font-semibold uppercase tracking-wider bg-white shadow-sm flex items-center gap-2";
        btnObsidian.className = "px-5 py-3 rounded-full border border-neutral-200 text-xs font-semibold uppercase tracking-wider bg-white shadow-sm flex items-center gap-2";
        
        // Update schematic colors
        coreSvg.setAttribute('fill', '#dedede');
        arm1Svg.setAttribute('stroke', '#cccccc');
        arm2Svg.setAttribute('stroke', '#cccccc');

        document.getElementById('spec-preview-color').textContent = "ARCTIC SILVER";
      }

      updateConfigurator();
    }

    function updateConfigurator() {
      const isStd = document.querySelector('input[name="edition"][value="std"]').checked;
      const labelStd = document.getElementById('label-edition-std');
      const labelPro = document.getElementById('label-edition-pro');
      
      let basePrice = isStd ? 1599 : 2199;
      
      if (isStd) {
        labelStd.className = "border-2 border-brandDark rounded-xl p-4 flex flex-col justify-between cursor-pointer hover:bg-neutral-50/50 transition-colors bg-neutral-50/20";
        labelPro.className = "border border-neutral-200 rounded-xl p-4 flex flex-col justify-between cursor-pointer hover:bg-neutral-50/50 transition-colors";
        document.getElementById('spec-preview-edition').textContent = "STANDARD";
      } else {
        labelPro.className = "border-2 border-brandDark rounded-xl p-4 flex flex-col justify-between cursor-pointer hover:bg-neutral-50/50 transition-colors bg-neutral-50/20";
        labelStd.className = "border border-neutral-200 rounded-xl p-4 flex flex-col justify-between cursor-pointer hover:bg-neutral-50/50 transition-colors";
        document.getElementById('spec-preview-edition').textContent = "PRO AVIONICS";
      }

      // Addons
      const controllerAddon = document.getElementById('addon-controller').checked;
      const lensAddon = document.getElementById('addon-lens').checked;

      const cardController = document.getElementById('addon-item-controller');
      const cardLens = document.getElementById('addon-item-lens');

      const svgController = document.getElementById('config-svg-controller');
      const svgLens = document.getElementById('config-svg-lens');

      if (controllerAddon) {
        basePrice += 250;
        cardController.classList.add('border-brandDark', 'bg-neutral-50/20');
        svgController.classList.remove('hidden');
      } else {
        cardController.classList.remove('border-brandDark', 'bg-neutral-50/20');
        svgController.classList.add('hidden');
      }

      if (lensAddon) {
        basePrice += 120;
        cardLens.classList.add('border-brandDark', 'bg-neutral-50/20');
        svgLens.classList.remove('hidden');
      } else {
        cardLens.classList.remove('border-brandDark', 'bg-neutral-50/20');
        svgLens.classList.add('hidden');
      }

      // Smooth count-up/re-evaluation update in DOM
      document.getElementById('config-total-price').textContent = `$${basePrice.toLocaleString()}`;
    }

    // Interactive Toast Notification
    let toastTimeout;
    function showToast(message) {
      const toast = document.getElementById('toast-notif');
      const text = document.getElementById('toast-text');
      text.textContent = message.toUpperCase();

      toast.classList.remove('translate-y-24', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');

      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-24', 'opacity-0');
      }, 3000);
    }

    // Add to cart action with indicator feedback
    function addToCartTrigger() {
      document.getElementById('cart-dot').classList.remove('hidden');
      showToast("Configuration Saved & Added to Basket");
    }

    // FAQ Accordion Interaction
    function toggleFaq(id) {
      const content = document.getElementById(`faq-content-${id}`);
      const icon = document.getElementById(`faq-icon-${id}`);

      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
      } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
      }
    }

    // Newsletter Signup Action
    function subscribeNewsletter() {
      const email = document.getElementById('newsletter-email').value;
      if (!email || !email.includes('@')) {
        showToast("Please enter a valid email");
        return;
      }
      document.getElementById('newsletter-form').classList.add('hidden');
      document.getElementById('newsletter-success').classList.remove('hidden');
      showToast("Subscription successful!");
    }
  </script>
</body>
</html>