<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Earth Day 2030 — Protecting Our Planet for Future Generations</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts for Ultra-Premium Typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@300;400;500;600;700&family=Oswald:wght@500;600;700&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            navy: '#152238',      // Rich, deep lithic navy
                            navylight: '#1c2e4a', // Lighter tone for navy containers
                            cream: '#f4f1eb',     // Textured sand/cream background
                            creamdark: '#eae5da', // Darker cream for borders/cards
                            charcoal: '#1a1a1a',  // Deep dramatic charcoal
                            accent: '#cf5a47',    // Terracotta earth highlight
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Archivo Black', 'sans-serif'],
                        condensed: ['Oswald', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom scrollbars */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #152238;
        }
        ::-webkit-scrollbar-thumb {
            background: #eae5da;
            border-radius: 4px;
        }
        
        /* Grainy texture overlay */
        .grain-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
            pointer-events: none;
            z-index: 9999;
        }

        /* Star twinkling animation */
        @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(0.9); }
            50% { opacity: 1; transform: scale(1.1); }
        }
        .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle 4s infinite ease-in-out;
        }

        /* Earth Halftone Wave Visual effect */
        .earth-halftone {
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(21,34,56,0) 70%);
        }

        /* Image hover zooms */
        .hover-zoom img {
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-zoom:hover img {
            transform: scale(1.04) rotate(-0.5deg);
        }

        /* Custom glow effects */
        .glow-accent {
            box-shadow: 0 0 40px rgba(207, 90, 71, 0.25);
        }
        .glow-planet-mono {
            box-shadow: 0 0 60px rgba(255, 255, 255, 0.08);
        }
        .glow-planet-ir {
            box-shadow: 0 0 60px rgba(207, 90, 71, 0.3);
        }
        .glow-planet-co2 {
            box-shadow: 0 0 60px rgba(59, 130, 246, 0.25);
        }

        /* Smooth tab transition */
        .telemetry-transition {
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
    </style>
</head>
<body class="bg-brand-cream text-brand-navy font-sans antialiased overflow-x-hidden">

    <!-- Paper Grain Texture applied globally -->
    <div class="grain-overlay"></div>

    <!-- MAIN EXQUISITE HEADER -->
    <header class="border-b border-brand-navy/20 sticky top-0 bg-brand-cream/90 backdrop-blur-md z-50 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div class="flex items-center gap-8">
                <!-- Branding logo -->
                <a href="#" class="font-display text-lg tracking-wider hover:opacity-80 transition-opacity">
                    EARTH DAY <span class="text-brand-accent">2030</span>
                </a>
                <span class="text-xs uppercase tracking-widest text-brand-navy/40 hidden md:inline">Protecting Our Planet</span>
            </div>
            
            <!-- Mid-Nav Menu -->
            <nav class="hidden lg:flex items-center gap-10 font-condensed uppercase tracking-wider text-sm">
                <a href="#manifesto" class="hover:text-brand-accent transition-colors">Manifesto</a>
                <a href="#deck-preview" class="hover:text-brand-accent transition-colors">Presentation Deck</a>
                <a href="#challenges" class="hover:text-brand-accent transition-colors">The Challenges</a>
                <a href="#history" class="hover:text-brand-accent transition-colors">The History</a>
                <a href="#action-hub" class="hover:text-brand-accent transition-colors">Action Hub</a>
            </nav>

            <!-- CTA/Status controls -->
            <div class="flex items-center gap-4">
                <div class="hidden sm:flex flex-col items-end text-[10px] uppercase font-mono tracking-widest text-brand-navy/60">
                    <div>DATE DECLARED: 22/04/2030</div>
                    <div>STATUS: CRITICAL ACTIONS ACTIVE</div>
                </div>
                <a href="#action-hub" class="bg-brand-navy text-brand-cream font-condensed uppercase tracking-wider text-xs px-5 py-2.5 hover:bg-brand-accent hover:text-white transition-all duration-300 flex items-center gap-2">
                    Act Now
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                </a>
            </div>
        </div>
    </header>

    <!-- OVERHAULED PREMIUM HERO SECTION: THE 2030 MONUMENTAL COVER -->
    <section id="manifesto" class="relative bg-brand-navy text-brand-cream min-h-screen flex flex-col justify-between overflow-hidden px-6 py-8 border-b border-brand-navy">
        
        <!-- Deep Space Cosmic Backdrop -->
        <div id="hero-stars" class="absolute inset-0 pointer-events-none opacity-80"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-[#0a111e]/60 via-transparent to-brand-navy pointer-events-none"></div>

        <!-- Upper Technical Print Margins (From original presentation slide headers) -->
        <div class="max-w-7xl mx-auto w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-brand-cream/30 border-b border-brand-cream/10 pb-4 relative z-20">
            <div>@REALLYGREATSITE</div>
            <div class="hidden md:flex items-center gap-4">
                <span>COORD: 45.1097° N, 130.1202° W</span>
                <span class="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping"></span>
                <span class="text-brand-cream/60">SYSTEM STATUS: NOMINAL</span>
            </div>
            <div>PRESENTATION +</div>
        </div>

        <!-- Main Immersive Poster Workspace -->
        <div class="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center items-center relative z-10 py-8">
            
            <!-- Left-Floating Asymmetric Date Block -->
            <div class="absolute left-0 top-1/4 hidden lg:flex flex-col items-start font-mono text-brand-cream/90 z-20">
                <div class="text-[10px] tracking-widest text-brand-cream/40 mb-2 uppercase flex items-center gap-1.5">
                    <span class="w-2 h-0.5 bg-brand-accent"></span> GLOBAL TIMESTAMP
                </div>
                <div class="font-condensed text-4xl font-bold tracking-widest text-brand-cream leading-tight">
                    22 \ 04 \
                </div>
                <div class="font-condensed text-4xl font-bold tracking-widest text-brand-accent">
                    2030
                </div>
                <div class="text-[9px] tracking-widest text-brand-cream/40 mt-4 max-w-[150px] leading-relaxed uppercase">
                    ESTABLISHED MILITARY-GRADE TARGET HORIZON
                </div>
            </div>

            <!-- Interactive Planet Visual Assembly -->
            <div class="relative w-80 h-80 md:w-[480px] md:h-[480px] select-none group flex items-center justify-center transition-transform duration-700 hover:scale-[1.02]">
                
                <!-- Atmosphere / Shadow Mask Ring -->
                <div id="planet-glow" class="absolute inset-0 rounded-full glow-planet-mono telemetry-transition"></div>

                <!-- Custom High-Contrast Detailed Earth Canvas/SVG Stack -->
                <div class="absolute inset-4 rounded-full overflow-hidden bg-[#0a101d] border border-brand-cream/15 relative">
                    
                    <!-- Dynamic Interactive Ocean Grid & Continents Layer -->
                    <svg id="planet-svg" class="w-full h-full animate-[spin_120s_linear_infinite] opacity-95 transition-all duration-700" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <!-- Color Mappings for Spectra Analytics Toggles -->
                            <filter id="thermal-glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        
                        <!-- Grid Lines -->
                        <circle cx="250" cy="250" r="235" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
                        <circle cx="250" cy="250" r="190" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                        <circle cx="250" cy="250" r="130" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                        <line x1="250" y1="10" x2="250" y2="490" stroke="rgba(255,255,255,0.08)" stroke-dasharray="2 3"/>
                        <line x1="10" y1="250" x2="490" y2="250" stroke="rgba(255,255,255,0.08)" stroke-dasharray="2 3"/>
                        
                        <!-- High Fidelity Handcrafted World Contours (Monochromatic Base) -->
                        <!-- North & Central Americas -->
                        <path id="land-na" class="telemetry-transition" d="M120 140 C140 120, 190 130, 205 160 C220 190, 185 220, 195 245 C200 255, 175 270, 160 250 C145 230, 150 210, 135 190 C120 170, 110 155, 120 140 Z" fill="rgba(244, 241, 235, 0.9)"/>
                        <!-- South America -->
                        <path id="land-sa" class="telemetry-transition" d="M195 250 C210 260, 230 280, 220 320 C210 360, 175 420, 160 400 C150 380, 165 340, 150 320 C140 300, 170 280, 195 250 Z" fill="rgba(244, 241, 235, 0.8)"/>
                        <!-- Eurasia / Africa -->
                        <path id="land-eur" class="telemetry-transition" d="M290 140 C320 100, 360 80, 390 110 C420 140, 380 180, 420 210 C400 240, 360 230, 330 250 C310 270, 315 320, 290 350 C280 320, 260 280, 270 240 C280 200, 265 170, 290 140 Z" fill="rgba(244, 241, 235, 0.85)"/>
                        <path id="land-afr" class="telemetry-transition" d="M280 240 C310 240, 350 250, 345 290 C340 330, 300 370, 280 350 C265 330, 260 280, 280 240 Z" fill="rgba(244, 241, 235, 0.75)"/>
                        <!-- Australia -->
                        <path id="land-aus" class="telemetry-transition" d="M380 320 C410 320, 430 340, 410 370 C390 390, 370 360, 380 320 Z" fill="rgba(244, 241, 235, 0.7)"/>

                        <!-- Custom Analytical Visual Overlays (Toggled by user selection) -->
                        <g id="grid-overlay" class="opacity-100 transition-opacity duration-500">
                            <!-- Latitudinal lines -->
                            <ellipse cx="250" cy="250" rx="210" ry="70" stroke="rgba(255,255,255,0.12)" stroke-width="0.75" fill="none"/>
                            <ellipse cx="250" cy="250" rx="210" ry="140" stroke="rgba(255,255,255,0.08)" stroke-width="0.75" fill="none"/>
                        </g>
                    </svg>

                    <!-- Shadow Overlay to create authentic high-contrast half-lit sphere -->
                    <div class="absolute inset-0 rounded-full shadow-[inset_-30px_-30px_80px_rgba(0,0,0,0.95),inset_30px_30px_60px_rgba(255,255,255,0.15)] pointer-events-none"></div>

                    <!-- Target Telemetry Hotspots -->
                    <div class="absolute inset-0 z-30 pointer-events-auto">
                        <!-- Hotspot 1: Arctic Melt -->
                        <div class="absolute top-[20%] left-[45%] group/spot cursor-pointer" onclick="showHotspot('arctic')">
                            <span class="absolute inline-flex h-3 w-3 rounded-full bg-brand-accent opacity-75 animate-ping"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-navy/95 border border-brand-cream/20 text-[9px] font-mono p-2 whitespace-nowrap rounded hidden group-hover/spot:block shadow-xl">
                                <span class="text-brand-accent font-bold">ARC-01:</span> ARCTIC ALBEDO COLLAPSE
                            </div>
                        </div>

                        <!-- Hotspot 2: Amazon Deforestation -->
                        <div class="absolute top-[60%] left-[36%] group/spot cursor-pointer" onclick="showHotspot('amazon')">
                            <span class="absolute inline-flex h-3 w-3 rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-navy/95 border border-brand-cream/20 text-[9px] font-mono p-2 whitespace-nowrap rounded hidden group-hover/spot:block shadow-xl">
                                <span class="text-emerald-400 font-bold">AMZ-04:</span> BIO-MASS STABILIZATION MARGIN
                            </div>
                        </div>

                        <!-- Hotspot 3: Coral Reef Bleaching -->
                        <div class="absolute top-[65%] left-[75%] group/spot cursor-pointer" onclick="showHotspot('barrier')">
                            <span class="absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-navy/95 border border-brand-cream/20 text-[9px] font-mono p-2 whitespace-nowrap rounded hidden group-hover/spot:block shadow-xl">
                                <span class="text-blue-400 font-bold">GBR-12:</span> ACIDIFICATION CRITICAL LIMIT
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Live Dynamic Telemetry Box inside the Hero -->
                <div id="telemetry-toast" class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-navy/90 border border-brand-cream/15 px-4 py-2.5 rounded-md text-center max-w-xs w-full backdrop-blur-md z-40 shadow-2xl transition-all duration-300 opacity-0 pointer-events-none">
                    <div class="text-[9px] font-mono text-brand-accent uppercase tracking-wider font-bold mb-0.5" id="telemetry-title">SATELLITE NODE ACTIVED</div>
                    <div class="text-[11px] font-mono text-brand-cream/80" id="telemetry-desc">Tuning spectral feeds for climate matrix calibration.</div>
                </div>

            </div>

            <!-- Interactive Spectroscopic Dashboard Controls (Directly below Earth) -->
            <div class="flex flex-wrap justify-center items-center gap-2 mt-6 relative z-20">
                <button onclick="setSpectra('mono')" id="btn-spectra-mono" class="px-3 py-1.5 border-2 border-brand-cream text-brand-cream bg-brand-cream/10 font-mono text-[9px] tracking-widest uppercase transition-all duration-300">
                    SATELLITE (MONO)
                </button>
                <button onclick="setSpectra('thermal')" id="btn-spectra-thermal" class="px-3 py-1.5 border border-brand-cream/20 text-brand-cream/60 hover:text-brand-cream font-mono text-[9px] tracking-widest uppercase transition-all duration-300">
                    THERMAL (IR)
                </button>
                <button onclick="setSpectra('co2')" id="btn-spectra-co2" class="px-3 py-1.5 border border-brand-cream/20 text-brand-cream/60 hover:text-brand-cream font-mono text-[9px] tracking-widest uppercase transition-all duration-300">
                    CARBON FEED (CO2)
                </button>
                <button onclick="toggleGrid()" id="btn-spectra-grid" class="px-3 py-1.5 border border-brand-cream/20 text-brand-cream/60 hover:text-brand-cream font-mono text-[9px] tracking-widest uppercase transition-all duration-300">
                    TOGGLE GRID [ON]
                </button>
            </div>

            <p class="font-mono text-xs uppercase tracking-[0.4em] text-brand-accent mt-10 mb-2 font-bold select-none text-center">
                PROTECTING OUR PLANET FOR FUTURE GENERATIONS
            </p>
            
            <!-- Monumental, Intersecting Poster Title -->
            <h1 class="font-display text-6xl sm:text-7xl md:text-9xl tracking-tighter leading-none text-brand-cream uppercase select-none text-center relative z-20 -mt-2">
                EARTH DAY
            </h1>

            <div class="max-w-xl mx-auto text-center mt-4">
                <p class="text-xs sm:text-sm text-brand-cream/70 leading-relaxed font-light">
                    An uncompromising climate command architecture constructed to mobilize direct local networks against ecological degradation. Target year threshold active.
                </p>
            </div>

        </div>

        <!-- Lower Technical Print Footer (From original cover structure) -->
        <div class="max-w-7xl mx-auto w-full border-t border-brand-cream/10 pt-4 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono tracking-widest text-brand-cream/30 gap-4 relative z-20">
            <div>TARGET FRAME: DECARBONIZATION 2030</div>
            <a href="#deck-preview" class="flex items-center gap-6 group hover:text-brand-accent transition-colors">
                <span>SCROLL OR CLICK TO EXPLORE SYSTEM</span>
                <svg class="w-4 h-4 animate-bounce text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
            </a>
            <div>AUTHENTIC MANIFESTO DECREE // SECURE</div>
        </div>
    </section>

    <!-- SECTION: THE EDITORIAL SLIDE DECK (CAROUSEL) -->
    <!-- Mimics the exact layout of the 8 slides shown in the image but lets user interact, read, and step through them -->
    <section id="deck-preview" class="py-24 px-6 bg-brand-cream">
        <div class="max-w-7xl mx-auto">
            
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-brand-navy/20 pb-8 mb-12 gap-4">
                <div>
                    <span class="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold">THE CORE MANIFESTO</span>
                    <h2 class="font-display text-4xl md:text-5xl uppercase tracking-tight mt-1">THE INTERACTIVE DECK</h2>
                </div>
                <p class="max-w-md text-sm text-brand-navy/70 leading-relaxed font-light">
                    Step through the high-fidelity presentation structures adapted from the 2030 Global Earth Summit. Each card holds architectural ecological parameters.
                </p>
            </div>

            <!-- Slide Canvas Stage -->
            <div class="relative bg-brand-navy text-brand-cream p-6 md:p-12 border-2 border-brand-navy shadow-2xl overflow-hidden min-h-[550px] flex flex-col justify-between transition-all duration-500 rounded-lg">
                
                <!-- Inner Decorative Details -->
                <div class="absolute inset-0 pointer-events-none opacity-40" id="deck-slide-stars"></div>
                <div class="flex justify-between items-center border-b border-brand-cream/10 pb-4 mb-6 z-10">
                    <span class="font-mono text-[10px] uppercase tracking-widest text-brand-cream/40" id="slide-author">@REALLYGREATSITE</span>
                    <span class="font-condensed text-xs uppercase tracking-widest text-brand-cream/60 bg-white/10 px-3 py-1" id="slide-num-label">SLIDE 01 / 08</span>
                </div>

                <!-- Slide Content Node (Dynamically Updated by JS) -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto z-10" id="slide-dynamic-content">
                    <!-- Standard placeholder content that will be hot-swapped seamlessly -->
                </div>

                <!-- Slide Control Panel footer -->
                <div class="border-t border-brand-cream/10 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 z-10">
                    <div class="flex items-center gap-2">
                        <!-- Navigation dots indicator -->
                        <div class="flex gap-1.5" id="slide-indicators">
                            <!-- Injected dynamically -->
                        </div>
                    </div>
                    <div class="flex items-center gap-4 font-condensed tracking-wider text-sm">
                        <button onclick="changeSlide(-1)" class="group flex items-center gap-2 border border-brand-cream/20 px-4 py-2 hover:bg-brand-cream hover:text-brand-navy transition-all">
                            <svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                            </svg>
                            PREVIOUS
                        </button>
                        <button onclick="changeSlide(1)" class="group flex items-center gap-2 bg-brand-cream text-brand-navy px-5 py-2 hover:bg-brand-accent hover:text-white transition-all">
                            NEXT
                            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- SECTION: ENVIRONMENTAL CHALLENGES (ASYNCHRONOUS EXPLORER) -->
    <!-- High fidelity representation of Slide 2 layout with advanced exploration interaction -->
    <section id="challenges" class="py-24 px-6 bg-brand-cream border-t border-brand-navy/10 relative">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <!-- Left Sticky Block with Title -->
                <div class="lg:col-span-5 lg:sticky lg:top-28">
                    <span class="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold">THE SYSTEM FALLOUT</span>
                    <h2 class="font-display text-4xl md:text-5xl uppercase tracking-tight mt-2 mb-6">ENVIRONMENTAL<br>CHALLENGES<br>WE FACE</h2>
                    <p class="text-brand-navy/70 leading-relaxed font-light mb-8 max-w-md">
                        Our ecosystems are reaching critical atmospheric tipping points. Choose an ecological sector below to analyze the real-time breakdown.
                    </p>

                    <!-- Large stylized challenge indicators -->
                    <div class="grid grid-cols-2 gap-4">
                        <div onclick="selectChallenge(1)" id="ch-btn-1" class="challenge-tab-btn cursor-pointer p-4 border border-brand-navy bg-brand-navy text-brand-cream transition-all duration-300 hover:border-brand-navy">
                            <span class="font-mono text-xs block opacity-60 mb-1">01</span>
                            <span class="font-condensed text-md uppercase font-bold tracking-wider leading-none">CLIMATE & WARMING</span>
                        </div>
                        <div onclick="selectChallenge(2)" id="ch-btn-2" class="challenge-tab-btn cursor-pointer p-4 border border-brand-navy/20 hover:border-brand-navy transition-all duration-300">
                            <span class="font-mono text-xs block opacity-60 mb-1">02</span>
                            <span class="font-condensed text-md uppercase font-bold tracking-wider leading-none">POLLUTION & LANDS</span>
                        </div>
                        <div onclick="selectChallenge(3)" id="ch-btn-3" class="challenge-tab-btn cursor-pointer p-4 border border-brand-navy/20 hover:border-brand-navy transition-all duration-300">
                            <span class="font-mono text-xs block opacity-60 mb-1">03</span>
                            <span class="font-condensed text-md uppercase font-bold tracking-wider leading-none">DEFORESTATION & FIRES</span>
                        </div>
                        <div onclick="selectChallenge(4)" id="ch-btn-4" class="challenge-tab-btn cursor-pointer p-4 border border-brand-navy/20 hover:border-brand-navy transition-all duration-300">
                            <span class="font-mono text-xs block opacity-60 mb-1">04</span>
                            <span class="font-condensed text-md uppercase font-bold tracking-wider leading-none">LOSS OF BIODIVERSITY</span>
                        </div>
                    </div>
                </div>

                <!-- Right Interactive Display Panel -->
                <div class="lg:col-span-7 bg-white p-6 md:p-10 border border-brand-navy/20 shadow-xl transition-all duration-500 rounded" id="challenge-display-panel">
                    <!-- Dynamic Graphic & Text loaded via JS -->
                    <div class="animate-fade-in">
                        <div class="relative w-full h-80 overflow-hidden mb-6 bg-brand-navy hover-zoom rounded">
                            <img id="challenge-img" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" alt="Environmental Challenge" class="w-full h-full object-cover grayscale brightness-90">
                            <div class="absolute inset-0 bg-brand-navy/30 mix-blend-multiply"></div>
                            <div class="absolute bottom-4 left-4 font-mono text-xs text-brand-cream bg-brand-navy/80 px-3 py-1 tracking-wider uppercase" id="challenge-tag">
                                ACTIVE HAZARD // ZONE 01
                            </div>
                        </div>

                        <h3 class="font-display text-2xl uppercase tracking-tight mb-4" id="challenge-title">Climate Change & Global Warming</h3>
                        <p class="text-brand-navy/80 text-sm leading-relaxed mb-6 font-light" id="challenge-desc">
                            Rising greenhouse gas concentrations are trapping heat, raising ocean surface temperatures, and precipitating extreme weather phenomena internationally. Rapid fossil fuel phase-outs are strictly mandatory.
                        </p>

                        <!-- Nested micro metrics -->
                        <div class="border-t border-brand-navy/10 pt-6 grid grid-cols-3 gap-4">
                            <div>
                                <span class="block text-brand-accent font-mono text-xl font-bold" id="challenge-stat-1">+1.5°C</span>
                                <span class="text-[10px] uppercase text-brand-navy/60 font-mono tracking-wider" id="challenge-label-1">LIMIT OFFSET</span>
                            </div>
                            <div>
                                <span class="block text-brand-navy font-mono text-xl font-bold" id="challenge-stat-2">421 ppm</span>
                                <span class="text-[10px] uppercase text-brand-navy/60 font-mono tracking-wider" id="challenge-label-2">CO2 LEVEL</span>
                            </div>
                            <div>
                                <span class="block text-brand-navy font-mono text-xl font-bold" id="challenge-stat-3">12%</span>
                                <span class="text-[10px] uppercase text-brand-navy/60 font-mono tracking-wider" id="challenge-label-3">ALBEDO LOSS</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- INTERACTIVE SECTION: STATS & CITIZENS MONITOR -->
    <section class="py-20 px-6 bg-brand-navy text-brand-cream border-y border-brand-navy relative">
        <div id="stats-stars" class="absolute inset-0 pointer-events-none opacity-40"></div>
        <div class="max-w-7xl mx-auto relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-brand-cream/10 text-center md:text-left">
                <div class="pt-6 md:pt-0">
                    <span class="block text-5xl md:text-6xl font-display text-brand-accent tracking-tighter">193+</span>
                    <span class="block text-xs font-mono uppercase tracking-widest mt-2 text-brand-cream/60">COUNTRIES COMMITTED</span>
                    <p class="text-xs text-brand-cream/40 mt-1">Bound to net-zero reduction standards.</p>
                </div>
                <div class="pt-6 md:pt-0 md:pl-8">
                    <span class="block text-5xl md:text-6xl font-display text-brand-cream tracking-tighter">8.7M</span>
                    <span class="block text-xs font-mono uppercase tracking-widest mt-2 text-brand-cream/60">SPECIES PROTECTED</span>
                    <p class="text-xs text-brand-cream/40 mt-1">Expanding biological sanctuary bounds.</p>
                </div>
                <div class="pt-6 md:pt-0 md:pl-8">
                    <span class="block text-5xl md:text-6xl font-display text-brand-cream tracking-tighter">45%</span>
                    <span class="block text-xs font-mono uppercase tracking-widest mt-2 text-brand-cream/60">RENEWABLES GRID</span>
                    <p class="text-xs text-brand-cream/40 mt-1">Global average target metric for 2030.</p>
                </div>
                <div class="pt-6 md:pt-0 md:pl-8">
                    <span class="block text-5xl md:text-6xl font-display text-brand-accent tracking-tighter">0.0s</span>
                    <span class="block text-xs font-mono uppercase tracking-widest mt-2 text-brand-cream/60">TIME TO SPARE</span>
                    <p class="text-xs text-brand-cream/40 mt-1">Decisive micro-actions required immediately.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- THE SYSTEMIC HISTORIAN (HISTORY TIMELINE) -->
    <!-- Matches Slide 4 styling - Elegant, large grayscale photography blocks and sequential timelines -->
    <section id="history" class="py-24 px-6 bg-brand-cream">
        <div class="max-w-7xl mx-auto">
            
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-brand-navy/20 pb-8 mb-16 gap-4">
                <div>
                    <span class="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold">HISTORICAL EVOLUTION</span>
                    <h2 class="font-display text-4xl md:text-5xl uppercase tracking-tight mt-1">THE HISTORICAL CHRONOLOGY</h2>
                </div>
                <p class="max-w-md text-sm text-brand-navy/70 leading-relaxed font-light">
                    How decades of international pressure, policy milestones, and persistent civil outcries forged our current structural roadmap.
                </p>
            </div>

            <!-- Horizontal Timeline Scroller -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                <!-- Era 1 -->
                <div class="bg-white border border-brand-navy/15 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 rounded group">
                    <div>
                        <div class="relative w-full h-48 overflow-hidden mb-6 bg-neutral-900 rounded">
                            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" alt="Industrial Revolution era environmentalism" class="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-500">
                        </div>
                        <span class="font-mono text-xs text-brand-accent font-bold tracking-wider uppercase block mb-1">FOUNDATION ERA // 1970</span>
                        <h3 class="font-display text-xl uppercase tracking-tight text-brand-navy mb-3">The Genesis of Protest</h3>
                        <p class="text-xs text-brand-navy/70 leading-relaxed font-light">
                            Over 20 million Americans took to the streets on April 22, 1970, mobilizing against industrial smog, toxic waste disposal, and biodiversity collapses. This established the inaugural global Earth Day.
                        </p>
                    </div>
                    <div class="border-t border-brand-navy/10 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono tracking-widest text-brand-navy/50">
                        <span>STAGE 01</span>
                        <span>ORIGINAL DECREE</span>
                    </div>
                </div>

                <!-- Era 2 -->
                <div class="bg-white border border-brand-navy/15 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 rounded group">
                    <div>
                        <div class="relative w-full h-48 overflow-hidden mb-6 bg-neutral-900 rounded">
                            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800" alt="Paris Climate Agreement" class="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-500">
                        </div>
                        <span class="font-mono text-xs text-brand-accent font-bold tracking-wider uppercase block mb-1">Milestone Decree // 2015</span>
                        <h3 class="font-display text-xl uppercase tracking-tight text-brand-navy mb-3">The Paris Climate Accord</h3>
                        <p class="text-xs text-brand-navy/70 leading-relaxed font-light">
                            Delegates from 196 nations unified to execute a binding treaty targeting global average warming ceilings well below 2.0°C. This revolutionized localized corporate policy-making benchmarks.
                        </p>
                    </div>
                    <div class="border-t border-brand-navy/10 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono tracking-widest text-brand-navy/50">
                        <span>STAGE 02</span>
                        <span>INTER-GOVERNMENTAL</span>
                    </div>
                </div>

                <!-- Era 3 -->
                <div class="bg-white border border-brand-navy/15 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 rounded group">
                    <div>
                        <div class="relative w-full h-48 overflow-hidden mb-6 bg-neutral-900 rounded">
                            <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800" alt="Wind Turbines sustainable energy" class="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-500">
                        </div>
                        <span class="font-mono text-xs text-brand-accent font-bold tracking-wider uppercase block mb-1">Horizon Year // 2030</span>
                        <h3 class="font-display text-xl uppercase tracking-tight text-brand-navy mb-3">Decentralized Direct Action</h3>
                        <p class="text-xs text-brand-navy/70 leading-relaxed font-light">
                            Communities take control directly, relying on autonomous smart grids, strict hyper-local carbon quotas, and real-time open-source ledger monitoring of multinational corporations.
                        </p>
                    </div>
                    <div class="border-t border-brand-navy/10 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono tracking-widest text-brand-navy/50">
                        <span>STAGE 03</span>
                        <span>GLOBAL SYSTEM SYSTEM</span>
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- INTERACTIVE GAME CHANGER: GET INVOLVED (ACTION HUB) -->
    <!-- Recreates the feel of Slide 7 with an interactive tool where users can customize their Earth Day Action Plan -->
    <section id="action-hub" class="py-24 px-6 bg-brand-navy text-brand-cream relative">
        <div id="action-stars" class="absolute inset-0 pointer-events-none opacity-40"></div>
        <div class="max-w-5xl mx-auto relative z-10">
            
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold">TAKE SYSTEM RESPONSES</span>
                <h2 class="font-display text-4xl md:text-5xl uppercase tracking-tight mt-2 mb-4">GET INVOLVED TODAY</h2>
                <p class="text-sm text-brand-cream/70 leading-relaxed font-light">
                    Generate an immediately executable sustainability action template tailored to your current ecosystem status.
                </p>
            </div>

            <!-- Interactivity Frame -->
            <div class="bg-brand-navylight border border-brand-cream/20 p-6 md:p-10 rounded-lg shadow-2xl">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                    
                    <!-- Form Selection Column -->
                    <div class="md:col-span-5 flex flex-col justify-between gap-6">
                        <div>
                            <label class="block font-condensed uppercase tracking-wider text-xs text-brand-cream/60 mb-2">1. SELECT YOUR SECTOR</label>
                            <div class="space-y-2">
                                <button onclick="selectActionSector('individual')" id="sec-individual" class="sector-btn w-full text-left p-3.5 border-2 border-brand-accent bg-brand-accent/10 text-brand-cream transition-all flex items-center justify-between">
                                    <span class="font-bold text-sm tracking-wide">INDIVIDUAL CITIZEN</span>
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                    </svg>
                                </button>
                                <button onclick="selectActionSector('business')" id="sec-business" class="sector-btn w-full text-left p-3.5 border border-brand-cream/20 hover:border-brand-cream/60 transition-all flex items-center justify-between">
                                    <span class="font-bold text-sm tracking-wide">ENTERPRISE / BUSINESS</span>
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                    </svg>
                                </button>
                                <button onclick="selectActionSector('educator')" id="sec-educator" class="sector-btn w-full text-left p-3.5 border border-brand-cream/20 hover:border-brand-cream/60 transition-all flex items-center justify-between">
                                    <span class="font-bold text-sm tracking-wide">EDUCATOR / LEADER</span>
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div>
                            <label class="block font-condensed uppercase tracking-wider text-xs text-brand-cream/60 mb-2" id="slider-intensity-label">2. ACTION INTENSITY (MEDIUM)</label>
                            <input type="range" min="1" max="3" value="2" oninput="changeActionIntensity(this.value)" class="w-full accent-brand-accent cursor-pointer bg-brand-navy h-1.5 rounded-lg appearance-none">
                            <div class="flex justify-between text-[10px] font-mono tracking-widest text-brand-cream/40 mt-1">
                                <span>MINIMAL</span>
                                <span>MODERATE</span>
                                <span>RADICAL</span>
                            </div>
                        </div>

                        <button onclick="generateCustomPlan()" class="w-full bg-brand-cream text-brand-navy py-4 font-condensed font-bold uppercase tracking-wider text-sm hover:bg-brand-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                            GENERATE ACTION PROTOCOLS
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </button>
                    </div>

                    <!-- Output Action Frame -->
                    <div class="md:col-span-7 bg-brand-navy p-6 border-2 border-brand-cream/15 flex flex-col justify-between relative overflow-hidden rounded">
                        <div class="absolute top-0 right-0 p-2 opacity-5 font-mono text-8xl font-bold select-none" id="watermark-sector">INDIV</div>
                        
                        <div class="relative z-10">
                            <div class="flex items-center gap-3 border-b border-brand-cream/10 pb-4 mb-4">
                                <span class="w-2.5 h-2.5 rounded-full bg-brand-accent animate-ping"></span>
                                <span class="font-mono text-xs tracking-widest text-brand-cream/60" id="output-header-sector">ACTIVE REGISTERED DIRECTIVE</span>
                            </div>

                            <h3 class="font-display text-xl uppercase tracking-tight text-brand-cream mb-4" id="output-action-title">COMMUNITY REFUSE REDIRECTION</h3>
                            
                            <ul class="space-y-4 text-xs font-light text-brand-cream/80" id="output-action-steps">
                                <li class="flex items-start gap-2">
                                    <span class="text-brand-accent font-bold font-mono">01.</span>
                                    <span>Initiate immediate source segregation protocols for multi-layered plastics inside domestic nodes.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-brand-accent font-bold font-mono">02.</span>
                                    <span>Adopt composting channels for structural biomass recycling, mitigating local methane escape indexes.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-brand-accent font-bold font-mono">03.</span>
                                    <span>Decline physical packaging dependencies by enforcing zero-waste raw goods vendor relationships.</span>
                                </li>
                            </ul>
                        </div>

                        <div class="border-t border-brand-cream/10 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono tracking-widest text-brand-cream/40 z-10">
                            <span id="output-serial">SERIAL ID: ACT-IND-MID</span>
                            <button onclick="copyActionPlan()" class="text-brand-accent font-bold hover:underline">EXTRACT PDF TO CLIPBOARD</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>

    <!-- SECTION: THE CRUCIAL COLLABORATION (BUSINESS & GOVERNMENT) -->
    <!-- Mimics Slide 5 styling, but in a grid format with structural clarity -->
    <section class="py-24 px-6 bg-brand-cream border-t border-brand-navy/15">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div class="lg:col-span-6 relative hover-zoom overflow-hidden border border-brand-navy/10 rounded">
                    <!-- Dramatic rocky coast with powerful waves -->
                    <img src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=1200" alt="Dramatic natural ocean cliffs" class="w-full h-[450px] object-cover grayscale brightness-90">
                    <div class="absolute inset-0 bg-brand-navy/20 mix-blend-multiply"></div>
                    <div class="absolute bottom-6 left-6 font-mono text-xs text-brand-cream bg-brand-navy px-4 py-2 uppercase tracking-widest border border-brand-cream/10">
                        ECOLOGICAL BARRIER // SECURED
                    </div>
                </div>

                <div class="lg:col-span-6">
                    <span class="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold">STRUCTURAL SYSTEM RESPONSIBILITY</span>
                    <h2 class="font-display text-4xl md:text-5xl uppercase tracking-tight mt-2 mb-6">THE DUAL ALLIANCE:<br>BUSINESS & STATE</h2>
                    <p class="text-brand-navy/80 text-sm leading-relaxed mb-6 font-light">
                        Corporate supply chains and legislative actions must operate in systematic tandem. Voluntary pledges are no longer sufficient; binding ecological mandates represent the baseline architecture.
                    </p>

                    <div class="space-y-6">
                        <div class="flex gap-4 items-start border-l-2 border-brand-accent pl-4">
                            <div>
                                <h4 class="font-condensed text-lg uppercase font-bold tracking-wider text-brand-navy">01 \ CARBON TAX SYSTEMS</h4>
                                <p class="text-xs text-brand-navy/60 leading-relaxed font-light mt-1">
                                    Enforcing steep fiscal implications on industrial scope-3 emission metrics.
                                </p>
                            </div>
                        </div>
                        <div class="flex gap-4 items-start border-l-2 border-brand-navy/30 pl-4">
                            <div>
                                <h4 class="font-condensed text-lg uppercase font-bold tracking-wider text-brand-navy">02 \ GREEN INFRASTRUCTURE BONDS</h4>
                                <p class="text-xs text-brand-navy/60 leading-relaxed font-light mt-1">
                                    Funneling government capital reserves directly into continental high-speed electrified transit matrices.
                                </p>
                            </div>
                        </div>
                        <div class="flex gap-4 items-start border-l-2 border-brand-navy/30 pl-4">
                            <div>
                                <h4 class="font-condensed text-lg uppercase font-bold tracking-wider text-brand-navy">03 \ BIOLOGICAL LAND IMMUNITY</h4>
                                <p class="text-xs text-brand-navy/60 leading-relaxed font-light mt-1">
                                    Codifying standard state-level defense barriers for threatened forests, restricting all corporate expansion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION: COMMUNITY PACT AND NEWSLETTER -->
    <section class="py-24 px-6 bg-brand-navy text-brand-cream relative">
        <div id="newsletter-stars" class="absolute inset-0 pointer-events-none opacity-40"></div>
        <div class="max-w-4xl mx-auto relative z-10 text-center">
            
            <span class="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold">STAY SYNCHRONIZED</span>
            <h2 class="font-display text-4xl md:text-6xl uppercase tracking-tighter mt-2 mb-6">JOIN THE PLANETARY DISPATCH</h2>
            <p class="max-w-xl mx-auto text-sm text-brand-cream/70 leading-relaxed font-light mb-8">
                Subscribe to structural briefings, local policy mobilizations, and real-time planetary health telemetry direct from the source.
            </p>

            <form onsubmit="handleSubscribe(event)" class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto border border-brand-cream/20 p-2 bg-brand-navylight rounded">
                <input type="email" placeholder="ENTER DESIRED COMMUNICATIONS NODE" required class="flex-grow bg-transparent px-4 py-3 text-xs font-mono text-brand-cream uppercase tracking-wider outline-none border-b sm:border-b-0 border-brand-cream/20">
                <button type="submit" class="bg-brand-cream text-brand-navy font-condensed font-bold uppercase tracking-widest text-xs px-6 py-3.5 hover:bg-brand-accent hover:text-white transition-all duration-300">
                    SUBSCRIBE
                </button>
            </form>

            <p id="subscribe-message" class="text-xs font-mono mt-4 text-brand-accent hidden">COMMUNICATIONS NODE REGISTRATION COMPLETE // STAY ALERT</p>
        </div>
    </section>

    <!-- FOOTER ARCHITECTURE -->
    <footer class="bg-brand-cream border-t border-brand-navy/20 text-brand-navy py-16 px-6 relative">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
            
            <!-- Logo column -->
            <div class="md:col-span-4 space-y-4">
                <span class="font-display text-xl tracking-wider text-brand-navy block">
                    EARTH DAY <span class="text-brand-accent">2030</span>
                </span>
                <p class="text-xs text-brand-navy/60 leading-relaxed font-light">
                    The 2030 Earth Day initiative represents an uncompromising design layout built specifically to catalyze high-frequency physical planetary rescue operations.
                </p>
                <div class="font-mono text-[10px] tracking-wider text-brand-navy/40">
                    © 2030 EARTH DAY ALLIANCE. ALL MANIFESTOS PROTECTED UNDER INTER-STATES LAWS.
                </div>
            </div>

            <!-- Link columns -->
            <div class="md:col-span-2 space-y-3 text-xs">
                <span class="font-mono font-bold tracking-wider text-[10px] uppercase text-brand-navy/50 block">GLOBAL SYSTEMS</span>
                <a href="#manifesto" class="block hover:text-brand-accent hover:underline">MANIFESTO DIRECTIVE</a>
                <a href="#deck-preview" class="block hover:text-brand-accent hover:underline">SLIDE BLUEPRINT</a>
                <a href="#challenges" class="block hover:text-brand-accent hover:underline">CLIMATE METRICS</a>
                <a href="#action-hub" class="block hover:text-brand-accent hover:underline">COMMUNITY HUBS</a>
            </div>

            <div class="md:col-span-2 space-y-3 text-xs">
                <span class="font-mono font-bold tracking-wider text-[10px] uppercase text-brand-navy/50 block">DOCUMENT DECREES</span>
                <a href="#" class="block hover:text-brand-accent hover:underline">TERMS OF MOBILIZATION</a>
                <a href="#" class="block hover:text-brand-accent hover:underline">DATA PRIVACY DIRECTS</a>
                <a href="#" class="block hover:text-brand-accent hover:underline">GLOBAL ACCORD DETAILS</a>
            </div>

            <div class="md:col-span-4 space-y-4 text-xs">
                <span class="font-mono font-bold tracking-wider text-[10px] uppercase text-brand-navy/50 block">COORDINATION NODE</span>
                <p class="text-brand-navy/60 leading-relaxed font-light">
                    Initiative coordinated from unified international eco-stations. Submissions and partnerships monitored dynamically.
                </p>
                <div class="flex gap-4">
                    <span class="font-mono text-[10px] text-brand-accent font-bold">TEL: +1-2030-PLANET</span>
                    <span class="font-mono text-[10px] text-brand-accent font-bold">EMAIL: DIRECTIVE@EARTHDAY.INT</span>
                </div>
            </div>

        </div>
    </footer>

    <!-- INTERACTIVE ENGINE SCRIPT -->
    <script>
        // Starfield rendering parameters to mimic celestial backgrounds
        function createStars(containerId, count) {
            const container = document.getElementById(containerId);
            if (!container) return;
            container.innerHTML = '';
            for (let i = 0; i < count; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                const size = Math.random() * 2 + 1; // 1px to 3px
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 5}s`;
                star.style.animationDuration = `${Math.random() * 3 + 2}s`;
                container.appendChild(star);
            }
        }

        // Initialize Starfields
        window.addEventListener('DOMContentLoaded', () => {
            createStars('hero-stars', 80); // Increased density for deeper cosmic look
            createStars('deck-slide-stars', 30);
            createStars('stats-stars', 40);
            createStars('action-stars', 35);
            createStars('newsletter-stars', 30);
            
            // Build slides indicators
            renderIndicators();
            // Load initial slide
            renderSlide();
        });

        // -------------------------
        // HERO INTERACTIVE SPECTRA FEEDS
        // -------------------------
        let activeSpectra = 'mono';
        
        function setSpectra(mode) {
            activeSpectra = mode;
            const glow = document.getElementById('planet-glow');
            const na = document.getElementById('land-na');
            const sa = document.getElementById('land-sa');
            const eur = document.getElementById('land-eur');
            const afr = document.getElementById('land-afr');
            const aus = document.getElementById('land-aus');

            // Reset tab button states
            ['mono', 'thermal', 'co2'].forEach(m => {
                const btn = document.getElementById(`btn-spectra-${m}`);
                btn.className = "px-3 py-1.5 border border-brand-cream/20 text-brand-cream/60 hover:text-brand-cream font-mono text-[9px] tracking-widest uppercase transition-all duration-300";
            });

            // Set active state
            document.getElementById(`btn-spectra-${mode}`).className = "px-3 py-1.5 border-2 border-brand-cream text-brand-cream bg-brand-cream/10 font-mono text-[9px] tracking-widest uppercase transition-all duration-300";

            if (mode === 'mono') {
                glow.className = "absolute inset-0 rounded-full glow-planet-mono telemetry-transition";
                na.setAttribute('fill', 'rgba(244, 241, 235, 0.9)');
                sa.setAttribute('fill', 'rgba(244, 241, 235, 0.8)');
                eur.setAttribute('fill', 'rgba(244, 241, 235, 0.85)');
                afr.setAttribute('fill', 'rgba(244, 241, 235, 0.75)');
                aus.setAttribute('fill', 'rgba(244, 241, 235, 0.7)');
                showToast("MONO PHOTOGRAPHIC SENSING ACTIVE", "Rendering natural landscape contours using visual spectrum telemetry.");
            } else if (mode === 'thermal') {
                glow.className = "absolute inset-0 rounded-full glow-planet-ir telemetry-transition bg-red-950/20";
                na.setAttribute('fill', '#cf5a47');
                sa.setAttribute('fill', '#e27461');
                eur.setAttribute('fill', '#cf5a47');
                afr.setAttribute('fill', '#a83c2a');
                aus.setAttribute('fill', '#e27461');
                showToast("THERMAL SPECTRAL (IR) ACTIVE", "Showing intense surface heating. Warning: Alpine zones registering critical anomaly values.");
            } else if (mode === 'co2') {
                glow.className = "absolute inset-0 rounded-full glow-planet-co2 telemetry-transition bg-blue-950/20";
                na.setAttribute('fill', '#3b82f6');
                sa.setAttribute('fill', '#60a5fa');
                eur.setAttribute('fill', '#1d4ed8');
                afr.setAttribute('fill', '#1e40af');
                aus.setAttribute('fill', '#3b82f6');
                showToast("ATMOSPHERIC CO2 CONCENTRATION", "Mapping parts-per-million dense overlays. Industrial corridors exceed 421ppm thresholds.");
            }
        }

        let gridVisible = true;
        function toggleGrid() {
            gridVisible = !gridVisible;
            const grid = document.getElementById('grid-overlay');
            const btn = document.getElementById('btn-spectra-grid');
            if (gridVisible) {
                grid.style.opacity = '1';
                btn.innerText = "TOGGLE GRID [ON]";
                btn.className = "px-3 py-1.5 border border-brand-cream/20 text-brand-cream hover:text-brand-cream font-mono text-[9px] tracking-widest uppercase transition-all duration-300";
            } else {
                grid.style.opacity = '0';
                btn.innerText = "TOGGLE GRID [OFF]";
                btn.className = "px-3 py-1.5 border border-brand-cream/20 text-brand-cream/40 hover:text-brand-cream font-mono text-[9px] tracking-widest uppercase transition-all duration-300";
            }
        }

        function showHotspot(zone) {
            if (zone === 'arctic') {
                showToast("HOTSPOT ACTIVED: ARCTIC ZONE", "Cryosphere reporting 12% albedo reduction this seasonal transition. Sea ice density critical.");
            } else if (zone === 'amazon') {
                showToast("HOTSPOT ACTIVED: AMAZON BASIN", "Carbon capture margin reduced by localized biomass burning. Fire detection active.");
            } else if (zone === 'barrier') {
                showToast("HOTSPOT ACTIVED: REEF BARRIER", "Sea surface warming anomalies triggering localized acidification bleaching sequence.");
            }
        }

        let toastTimer;
        function showToast(title, desc) {
            const toast = document.getElementById('telemetry-toast');
            document.getElementById('telemetry-title').innerText = title;
            document.getElementById('telemetry-desc').innerText = desc;
            toast.style.opacity = '1';
            toast.style.transform = 'translate(-50%, -10px)';

            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translate(-50%, 0)';
            }, 6000);
        }

        // -------------------------
        // INTERACTIVE SLIDE DECK SYSTEM
        // -------------------------
        const slides = [
            {
                number: "01",
                title: "ENVIRONMENTAL CHALLENGES WE FACE",
                desc: "An outline of systemic breakdowns, resource depletions, and active regional atmospheric instabilities requiring coordinated community oversight.",
                bullet1: "CLIMATE CHANGE & INTENSE HEATING",
                bullet2: "PLASTIC CONCENTRATION & POLLUTION",
                bullet3: "DEFORESTATION & FIRES",
                bullet4: "BIODIVERSITY ERADICATION",
                image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800",
                imgCaption: "BIOLOGICAL BARRIER ZONE"
            },
            {
                number: "02",
                title: "THE IMPORTANCE OF EARTH DAY",
                desc: "Every single ecological action is integrated. Without a unified annual check-point to shift economic patterns, state policies risk total stagnation.",
                bullet1: "CATALYZING GREEN LEGISLATION",
                bullet2: "MUNICIPAL RESOURCE ALLOCATION",
                bullet3: "INDIVIDUAL BEHAVIOR SHIFTS",
                bullet4: "CORPORATE ACCOUNTABILITY MONITOR",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
                imgCaption: "EVALUATED LANDSCAPE // VERIFIED"
            },
            {
                number: "03",
                title: "SIMPLE WAYS TO MAKE A DIFFERENCE",
                desc: "Micro-commitments systematically aggregate to yield robust systemic changes. Scale your environmental footprint starting today.",
                bullet1: "REDUCE, REUSE & LOCAL RECYCLING",
                bullet2: "COMMUNITY WATER RECLAMATION",
                bullet3: "PLANT FORESTRY RESTORATION",
                bullet4: "SUPPORT SUSTAINABLE BRANDS",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
                imgCaption: "RECLAMATION AREA // DIRECT"
            },
            {
                number: "04",
                title: "THE HISTORY AND EVOLUTION",
                desc: "Forged in the structural protests of the late 20th century, Earth Day has expanded from localized rallies into an international planetary treaty framework.",
                bullet1: "1970 THE ORIGINAL MANIFESTO",
                bullet2: "1990 EXPANSION TO 141 COUNTRIES",
                bullet3: "2015 LINK TO PARIS CLIMATE ACCORD",
                bullet4: "2030 DECENTRALIZED COOP GOVERNANCE",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
                imgCaption: "HISTORICAL SURVEY POINT"
            },
            {
                number: "05",
                title: "BUSINESS & GOVERNMENT RESPONSES",
                desc: "How structured entities are forced to reconstruct standard practices. The era of unchecked carbon emissions is legally and economically closing.",
                bullet1: "STRICT SCOPE-3 EMISSIONS QUOTAS",
                bullet2: "RENEWABLE ENERGY PROCUREMENT",
                bullet3: "RECIRCULATION IN DESIGN FLOWS",
                bullet4: "STATE-ENFORCED NATURE SANCTUARIES",
                image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800",
                imgCaption: "SYSTEM POWER GRID // ALT"
            },
            {
                number: "06",
                title: "THE IMPACT OF CLIMATE CHANGE",
                desc: "Analyzing extreme global heat anomalies, desertification thresholds, and real-time continental water stress patterns.",
                bullet1: "+2.0°C CRITICAL WARP MARGIN",
                bullet2: "GLACIER VOLUME DECOMPOSITION",
                bullet3: "AGRICULTURAL HARVEST DECLINES",
                bullet4: "DISPLACED COASTAL POPULATIONS",
                image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800",
                imgCaption: "WARMING SURVEY RADAR"
            },
            {
                number: "07",
                title: "GET INVOLVED TODAY",
                desc: "Our current portal connects direct local action squads to coordinate organic waste handling, localized power collection, and protective measures.",
                bullet1: "NEIGHBORHOOD CLEANUP SQUADS",
                bullet2: "MICRO-GRID PARTICIPATION",
                bullet3: "RESTORATIVE LAND SEEDING",
                bullet4: "ADVOCATE LEGISLATIVE LOBBYING",
                image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=800",
                imgCaption: "ACTIVE RESTORATION SITE"
            },
            {
                number: "08",
                title: "HOW EARTH DAY INSPIRES ACTION",
                desc: "More than a commemoration—it is an engine of systemic progress that reshapes human relations with nature permanently.",
                bullet1: "EMPOWERING NEXT-GEN ADVOCATES",
                bullet2: "REDEFINING PRODUCT SOURCING",
                bullet3: "COALESCING GLOBAL ALLIANCES",
                bullet4: "RESTABLISHING HARMONIOUS BASELINES",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
                imgCaption: "VERDANT SANCTUARY ZONE"
            }
        ];

        let currentSlideIndex = 0;

        function renderIndicators() {
            const container = document.getElementById('slide-indicators');
            if (!container) return;
            container.innerHTML = '';
            slides.forEach((_, idx) => {
                const indicator = document.createElement('button');
                indicator.onclick = () => jumpToSlide(idx);
                indicator.className = `w-8 h-1.5 transition-all ${idx === currentSlideIndex ? 'bg-brand-accent' : 'bg-brand-cream/20 hover:bg-brand-cream/50'}`;
                container.appendChild(indicator);
            });
        }

        function renderSlide() {
            const slide = slides[currentSlideIndex];
            
            // Set slide marker label
            const labelNode = document.getElementById('slide-num-label');
            if (labelNode) labelNode.innerText = `SLIDE ${slide.number} / 08`;
            
            const contentNode = document.getElementById('slide-dynamic-content');
            if (!contentNode) return;
            
            // Smoothly insert slide layouts to match the presentation aesthetic of the uploaded slide styles
            contentNode.innerHTML = `
                <!-- Left text column of slide layout -->
                <div class="lg:col-span-7 space-y-6">
                    <div>
                        <span class="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold">SECTION ${slide.number} // THE DIRECTIVES</span>
                        <h3 class="font-display text-3xl md:text-4xl uppercase tracking-tight mt-1 text-brand-cream leading-tight">${slide.title}</h3>
                    </div>
                    <p class="text-sm text-brand-cream/70 leading-relaxed font-light">${slide.desc}</p>
                    
                    <!-- Asymmetric numbered bullet lists inside slide -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-cream/10">
                        <div class="flex items-center gap-3">
                            <span class="font-mono text-xs text-brand-accent font-bold">01</span>
                            <span class="font-condensed text-xs uppercase tracking-wider text-brand-cream/90">${slide.bullet1}</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="font-mono text-xs text-brand-accent font-bold">02</span>
                            <span class="font-condensed text-xs uppercase tracking-wider text-brand-cream/90">${slide.bullet2}</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="font-mono text-xs text-brand-accent font-bold">03</span>
                            <span class="font-condensed text-xs uppercase tracking-wider text-brand-cream/90">${slide.bullet3}</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="font-mono text-xs text-brand-accent font-bold">04</span>
                            <span class="font-condensed text-xs uppercase tracking-wider text-brand-cream/90">${slide.bullet4}</span>
                        </div>
                    </div>
                </div>

                <!-- Right premium monochrome-styled visual column -->
                <div class="lg:col-span-5 relative hover-zoom overflow-hidden border border-brand-cream/20 bg-neutral-900 rounded">
                    <img src="${slide.image}" alt="${slide.title}" class="w-full h-64 md:h-80 object-cover grayscale brightness-90 contrast-100">
                    <div class="absolute inset-0 bg-brand-navy/30 mix-blend-multiply"></div>
                    <div class="absolute bottom-4 left-4 font-mono text-[10px] text-brand-cream bg-brand-navy/90 px-3 py-1 tracking-wider uppercase border border-brand-cream/15">
                        ${slide.imgCaption}
                    </div>
                </div>
            `;

            // Update dots
            renderIndicators();
        }

        function changeSlide(direction) {
            currentSlideIndex += direction;
            if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
            if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
            renderSlide();
        }

        function jumpToSlide(index) {
            currentSlideIndex = index;
            renderSlide();
        }

        // -------------------------
        // CHALLENGE EXPLORER TAB ENGINE
        // -------------------------
        const challengeData = {
            1: {
                title: "Climate Change & Global Warming",
                desc: "Rising greenhouse gas concentrations are trapping heat, raising ocean surface temperatures, and precipitating extreme weather phenomena internationally. Rapid fossil fuel phase-outs are strictly mandatory.",
                img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
                tag: "ACTIVE HAZARD // ZONE 01",
                stat1: "+1.5°C",
                lbl1: "LIMIT OFFSET",
                stat2: "421 ppm",
                lbl2: "CO2 LEVEL",
                stat3: "12%",
                lbl3: "ALBEDO LOSS"
            },
            2: {
                title: "Pollution & Waste Proliferation",
                desc: "Microplastics have entered remote ocean trenches and rainwater cycles alike. Mismanaged chemical runoff has rendered key continental riverbeds biologically sterile.",
                img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
                tag: "HAZARDOUS RUNOFF // ZONE 02",
                stat1: "150MT",
                lbl1: "OCEAN PLASTIC",
                stat2: "78%",
                lbl2: "LAND POLLUTED",
                stat3: "9.1M",
                lbl3: "ANNUAL DEATHS"
            },
            3: {
                title: "Deforestation & Structural Burning",
                desc: "Primary jungle networks inside global rainforests are cleared at historic margins for livestock and mining, wiping natural carbon sinks off global maps permanently.",
                img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1200",
                tag: "CANOPY LOSS // ZONE 03",
                stat1: "10Mha",
                lbl1: "DEEP LOSS/YR",
                stat2: "22%",
                lbl2: "O2 CONTRIBUTION",
                stat3: "1.2B",
                lbl3: "SPECIES RISK"
            },
            4: {
                title: "Systemic Loss of Biodiversity",
                desc: "The anthropocene extinction sequence has reached unprecedented speeds. Thousands of keystone pollinators and apex species collapse daily due to habitat fragmentation.",
                img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200",
                tag: "EXTINCTION MARGIN // ZONE 04",
                stat1: "10,000x",
                lbl1: "ACCEL SPEED",
                stat2: "1M+",
                lbl2: "AT RISK NOW",
                stat3: "40%",
                lbl3: "INSECT DECLINE"
            }
        };

        function selectChallenge(id) {
            // Update active states of tab buttons
            document.querySelectorAll('.challenge-tab-btn').forEach(btn => {
                btn.classList.remove('bg-brand-navy', 'text-brand-cream');
                btn.classList.add('border-brand-navy/20');
            });
            
            const activeBtn = document.getElementById(`ch-btn-${id}`);
            if (activeBtn) {
                activeBtn.classList.add('bg-brand-navy', 'text-brand-cream');
                activeBtn.classList.remove('border-brand-navy/20');
            }

            // Swap visual card content with fade animation
            const panel = document.getElementById('challenge-display-panel');
            if (!panel) return;
            panel.classList.add('opacity-0', 'transform', 'translate-y-2');

            setTimeout(() => {
                const data = challengeData[id];
                document.getElementById('challenge-img').src = data.img;
                document.getElementById('challenge-tag').innerText = data.tag;
                document.getElementById('challenge-title').innerText = data.title;
                document.getElementById('challenge-desc').innerText = data.desc;
                
                document.getElementById('challenge-stat-1').innerText = data.stat1;
                document.getElementById('challenge-label-1').innerText = data.lbl1;
                document.getElementById('challenge-stat-2').innerText = data.stat2;
                document.getElementById('challenge-label-2').innerText = data.lbl2;
                document.getElementById('challenge-stat-3').innerText = data.stat3;
                document.getElementById('challenge-label-3').innerText = data.lbl3;

                panel.classList.remove('opacity-0', 'transform', 'translate-y-2');
            }, 300);
        }

        // -------------------------
        // ACTION HUB DYNAMIC SYSTEM
        // -------------------------
        let activeActionSector = 'individual';
        let actionIntensity = 2; // Medium

        const plans = {
            individual: {
                watermark: "INDIV",
                1: {
                    title: "MINIMAL FOOTPRINT RESET",
                    steps: [
                        "Divert household trash to proper compost streams, saving landfill mass.",
                        "Audit utility systems to reduce idle load consumption by 15%.",
                        "Adopt meatless meal routines twice a week to shrink agricultural impact."
                    ],
                    serial: "ACT-IND-MIN"
                },
                2: {
                    title: "COMMUNITY REFUSE REDIRECTION",
                    steps: [
                        "Initiate source segregation protocols for multi-layered plastics inside domestic nodes.",
                        "Adopt composting channels for structural biomass recycling, mitigating local methane escape indexes.",
                        "Decline physical packaging dependencies by enforcing zero-waste raw goods vendor relationships."
                    ],
                    serial: "ACT-IND-MID"
                },
                3: {
                    title: "RADICAL AUTONOMOUS CONSERVATION",
                    steps: [
                        "Convert domestic energy inputs completely to grid-tied personal solar arrays.",
                        "Cease personal vehicle usage, shifting entirely to public transit, cycling, or shared EVs.",
                        "Establish urban rainwater harvesting systems supplying 100% of non-drinking water requirements."
                    ],
                    serial: "ACT-IND-RAD"
                }
            },
            business: {
                watermark: "CORP",
                1: {
                    title: "BASELINE COMPLIANCE UPDATE",
                    steps: [
                        "Ban all single-use plastics across office premises and physical facilities.",
                        "Set climate control limits to optimize energy use across operations.",
                        "Switch corporate web hosts to certified carbon-neutral server networks."
                    ],
                    serial: "ACT-BUS-MIN"
                },
                2: {
                    title: "SUSTAINABLE RESOURCE INTEGRATION",
                    steps: [
                        "Audit supply chain paths to remove partners violating eco-preservation standards.",
                        "Ensure 50% of logistical fuel demands rely on clean electric distribution networks.",
                        "Adopt circular packaging models allowing clients to return containers for sterilizing and reuse."
                    ],
                    serial: "ACT-BUS-MID"
                },
                3: {
                    title: "NET-ZERO CARBON SUPREMACY",
                    steps: [
                        "Implement strict internal carbon pricing of $100 per metric ton on all operations.",
                        "Finance local solar or wind installations to offset 100% of grid power usage.",
                        "Redesign the entire product catalog to use clean, biodegradable materials that leave zero residue."
                    ],
                    serial: "ACT-BUS-RAD"
                }
            },
            educator: {
                watermark: "LEAD",
                1: {
                    title: "CURRICULUM ECO-INTEGRATION",
                    steps: [
                        "Devote weekly learning modules to structural climate solutions and ecosystem stability.",
                        "Set up local compost setups to teach students clean waste recycling firsthand.",
                        "Lead tree-planting outings in local neighborhoods to foster community action."
                    ],
                    serial: "ACT-EDU-MIN"
                },
                2: {
                    title: "COMMUNITY ENGAGEMENT NETWORKS",
                    steps: [
                        "Organize monthly forums linking city planners, climate experts, and residents together.",
                        "Set up school gardens to supply fresh produce while teaching food production cycles.",
                        "Coordinate trash collections across local water resources and public forests."
                    ],
                    serial: "ACT-EDU-MID"
                },
                3: {
                    title: "RECONSTRUCTIVE ADVOCACY CAMPAIGNS",
                    steps: [
                        "Form a youth-led climate committee to pitch local sustainability bills directly to city leaders.",
                        "Launch comprehensive recycling, tool-sharing, and repair systems across neighborhoods.",
                        "Organize peaceful boycotts targeting local businesses with poor eco-policies."
                    ],
                    serial: "ACT-EDU-RAD"
                }
            }
        };

        function selectActionSector(sector) {
            activeActionSector = sector;
            
            // Toggle classes
            document.querySelectorAll('.sector-btn').forEach(btn => {
                btn.className = "sector-btn w-full text-left p-3.5 border border-brand-cream/20 hover:border-brand-cream/60 transition-all flex items-center justify-between";
            });

            const activeBtn = document.getElementById(`sec-${sector}`);
            if (activeBtn) {
                activeBtn.className = "sector-btn w-full text-left p-3.5 border-2 border-brand-accent bg-brand-accent/10 text-brand-cream transition-all flex items-center justify-between";
            }
            
            generateCustomPlan();
        }

        function changeActionIntensity(val) {
            actionIntensity = parseInt(val);
            const intensities = ["MINIMAL", "MODERATE", "RADICAL"];
            const label = document.getElementById('slider-intensity-label');
            if (label) label.innerText = `2. ACTION INTENSITY (${intensities[actionIntensity - 1]})`;
            generateCustomPlan();
        }

        function generateCustomPlan() {
            const data = plans[activeActionSector][actionIntensity];
            
            // Update output node with slick transition
            const titleNode = document.getElementById('output-action-title');
            const stepsNode = document.getElementById('output-action-steps');
            const serialNode = document.getElementById('output-serial');
            const watermarkNode = document.getElementById('watermark-sector');

            if (watermarkNode) watermarkNode.innerText = plans[activeActionSector].watermark;
            if (titleNode) titleNode.innerText = data.title;
            if (serialNode) serialNode.innerText = `SERIAL ID: ${data.serial}`;

            if (stepsNode) {
                stepsNode.innerHTML = '';
                data.steps.forEach((step, idx) => {
                    const li = document.createElement('li');
                    li.className = "flex items-start gap-2 animate-fade-in";
                    li.innerHTML = `
                        <span class="text-brand-accent font-bold font-mono">0${idx+1}.</span>
                        <span>${step}</span>
                    `;
                    stepsNode.appendChild(li);
                });
            }
        }

        function copyActionPlan() {
            const title = document.getElementById('output-action-title')?.innerText || '';
            const serial = document.getElementById('output-serial')?.innerText || '';
            const steps = Array.from(document.querySelectorAll('#output-action-steps li'))
                               .map(li => li.innerText)
                               .join('\n');
            
            const textToCopy = `=== EARTH DAY 2030 PLAN ===\n${title}\n${serial}\n\n${steps}`;
            
            // Clipboard copying implementation per instructions
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);

            // Toast / success indicator
            const btn = document.querySelector('[onclick="copyActionPlan()"]');
            if (btn) {
                const orig = btn.innerText;
                btn.innerText = "COPIED SUCCESSFULLY!";
                setTimeout(() => {
                    btn.innerText = orig;
                }, 2000);
            }
        }

        // -------------------------
        // NEWSLETTER DISPATCH FORM
        // -------------------------
        function handleSubscribe(e) {
            e.preventDefault();
            const message = document.getElementById('subscribe-message');
            if (message) {
                message.classList.remove('hidden');
                e.target.reset();
                setTimeout(() => {
                    message.classList.add('hidden');
                }, 6000);
            }
        }
    </script>
</body>
</html>

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Shield, 
  Cpu, 
  Rotate3d, 
  Zap, 
  Check, 
  Globe, 
  Sparkles, 
  Trash2, 
  Sliders, 
  Info,
  ChevronRight,
  User,
  Heart,
  Share2
} from 'lucide-react';

export default function App() {
  // Page States
  const [activeStep, setActiveStep] = useState(1);
  const [customName, setCustomName] = useState("WISE MEMBER");
  const [customColor, setCustomColor] = useState("#00E676");
  const [customMaterial, setCustomMaterial] = useState("Bio-Sourced Matte");
  const [isEngraved, setIsEngraved] = useState(true);
  const [monthlyTx, setMonthlyTx] = useState(120);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const [selectedEdition, setSelectedEdition] = useState("standard");
  const [activeTab, setActiveTab] = useState("Home");
  const [copied, setCopied] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");

  const heroCircleRef = useRef(null);

  // Dynamically inject Google Fonts for the editorial look
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Card Parallax Tilt Effect
  const handleMouseMove = (e) => {
    if (!heroCircleRef.current) return;
    const rect = heroCircleRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Limit tilt degree
    const rX = (mouseY / (height / 2)) * -12; 
    const rY = (mouseX / (width / 2)) * 12;
    
    setCardTilt({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  // Helper for copy to clipboard (Using execCommand fallback per guidelines)
  const copyCardDetails = () => {
    const dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.value = "1253 5432 3521 3891";
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    
    setCopied(true);
    triggerToast("Card Number copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerToast = (msg) => {
    setNotificationMsg(msg);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  // Eco Calculator Math
  const co2Saved = Math.round(monthlyTx * 0.18 * 12); // kg CO2 saved per year
  const plasticSaved = Math.round(monthlyTx * 0.05 * 12); // grams of premium plastic waste prevented

  // Benefit Steps
  const stepsData = {
    1: {
      title: "Effortless Organization",
      desc: "Architected to stack, separate, and eject cards with a premium tactile sweep. Zero bulk, maximum velocity.",
      badge: "ERGONOMIC CORE"
    },
    2: {
      title: "Zero Carbon Bio-Plastic",
      desc: "Constructed entirely from premium ocean-harvested polymers and finished with safe, non-toxic matte coatings.",
      badge: "SUSTAINABLE BUILD"
    },
    3: {
      title: "Quantum Chip Protection",
      desc: "Surrounded by a high-grade conductive RFID alloy shield that neutralizes scanning threats instantaneously.",
      badge: "SHIELD MATRIX"
    }
  };

  return (
    <div className="min-h-screen bg-[#111215] text-[#1c1d21] font-['Plus_Jakarta_Sans'] selection:bg-[#00E676] selection:text-black overflow-x-hidden p-3 md:p-6 transition-all duration-300">
      
      {/* Toast Notification */}
      <div className={`fixed bottom-6 right-6 z-50 bg-[#1c1d21] text-[#dbdbda] px-5 py-4 rounded-xl border border-neutral-800 shadow-2xl flex items-center gap-3 transition-all duration-500 transform ${showNotification ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
        <div className="w-2.5 h-2.5 rounded-full bg-[#00E676] animate-pulse" />
        <span className="font-['Space_Grotesk'] text-sm tracking-wide">{notificationMsg}</span>
      </div>

      {/* Main Container Wrapper - Styled like the premium grey panel */}
      <div className="max-w-[1440px] mx-auto bg-[#dbdbda] rounded-[24px] overflow-hidden border border-[#ffffff40] shadow-2xl relative flex flex-col">
        
        {/* TOP BAR / NAVIGATION */}
        <header className="w-full flex items-center justify-between px-6 py-5 md:px-10 border-b border-[#c8c8c6] transition-all">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="font-['Syne'] text-2xl font-extrabold tracking-tight text-neutral-900 group-hover:text-emerald-700 transition-colors">
                Wallety<span className="text-[#00E676]">.</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-neutral-600">
              {['Home', 'What we do', 'Work with wallet', 'Customize'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    if (tab === 'Customize') {
                      document.getElementById('studio-section')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`hover:text-neutral-950 transition-colors relative py-1 ${activeTab === tab ? 'text-neutral-950 font-bold' : ''}`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00E676] rounded-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => triggerToast("Direct Access Key Enabled")} 
              className="hidden lg:flex items-center gap-2 border border-neutral-400 rounded-full px-5 py-2 text-xs font-['Space_Grotesk'] uppercase font-bold tracking-wider hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              My Wallet
              <span className="w-2 h-2 rounded-full bg-[#00E676] inline-block animate-pulse"></span>
            </button>
            
            {/* Menu Toggle */}
            <button 
              onClick={() => triggerToast("Dynamic Menu System Activated")} 
              className="border border-neutral-900 bg-neutral-950 text-[#dbdbda] hover:bg-neutral-900 hover:text-white rounded-full px-6 py-2.5 text-xs font-['Space_Grotesk'] uppercase tracking-widest transition-all duration-300"
            >
              Menu
            </button>
          </div>
        </header>

        {/* HERO SECTION - Matching the 3-column editorial design */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 p-6 md:p-10 border-b border-[#c8c8c6]">
          
          {/* COLUMN 1: LEFT SIDE (Brand Intro, 110k Stat, Badges) */}
          <div className="lg:col-span-3 flex flex-col justify-between py-2 space-y-8 lg:space-y-0">
            <div>
              <div className="inline-flex items-center gap-2 border border-neutral-400 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider mb-6 bg-[#d1d1cf]">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                Wise &amp; Compact
              </div>
              
              <h1 className="font-['Syne'] text-4xl xl:text-5xl font-extrabold text-neutral-900 leading-tight tracking-tight uppercase">
                Wise<br/>
                <span className="text-neutral-500 font-normal italic lowercase">– compact</span><br/>
                innovative
              </h1>
            </div>

            {/* Custom structural arrow line drawing from inspiration */}
            <div className="hidden lg:block my-8 relative">
              <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 30 H140 L160 10 H175" stroke="#979795" strokeWidth="1.5" strokeDasharray="4 2" />
                <path d="M170 5 L180 10 L170 15" stroke="#979795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="space-y-6">
              {/* Massive 110k Stat */}
              <div>
                <div className="text-5xl xl:text-6xl font-extrabold font-['Space_Grotesk'] tracking-tight text-neutral-950 flex items-baseline">
                  110k
                  <span className="text-emerald-500 text-3xl font-light ml-1">+</span>
                </div>
                <p className="text-xs text-neutral-600 mt-2 font-medium max-w-[220px] leading-relaxed">
                  Join the 110,000+ who've embraced the power of simplicity with Wallety. Experience a cleaner, greener way to carry your daily power.
                </p>
              </div>

              {/* Green Revolution Badge */}
              <button 
                onClick={() => {
                  triggerToast("Eco-system overview unlocked below");
                  document.getElementById('eco-section')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="group flex items-center gap-3 bg-[#00E676] hover:bg-neutral-900 hover:text-white transition-all duration-300 rounded-full pl-5 pr-2 py-2 w-full max-w-[240px] text-left"
              >
                <span className="text-xs uppercase tracking-wider font-bold font-['Space_Grotesk'] text-neutral-950 group-hover:text-white transition-colors">
                  Green Revolution
                </span>
                <div className="w-8 h-8 rounded-full bg-neutral-950 group-hover:bg-[#00E676] flex items-center justify-center ml-auto transition-colors">
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                </div>
              </button>
            </div>
          </div>

          {/* COLUMN 2: CENTER (The Iconic Floating Circle & Neon Card Frame) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center py-6 relative">
            
            {/* Circular cutout visual container */}
            <div 
              ref={heroCircleRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#121315] shadow-2xl flex items-center justify-center overflow-hidden border-8 border-[#c8c8c6] cursor-pointer group"
            >
              {/* Subtle background radar ring */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/40 via-neutral-950/90 to-black z-0 pointer-events-none"></div>
              
              {/* Spinning grid overlay */}
              <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none animate-[pulse_6s_infinite]"></div>

              {/* Central Abstract Sculpture Design (Futuristic Sleek Plastic/Metal construct) */}
              <div className="absolute w-[80%] h-[80%] rounded-full opacity-60 z-10 transition-transform duration-500 scale-100 group-hover:scale-105 pointer-events-none">
                <svg viewBox="0 0 400 400" className="w-full h-full fill-none">
                  {/* Organic curved wings representing the wallet grip */}
                  <path d="M 120 300 C 140 320, 260 320, 280 300 C 310 260, 310 140, 280 100 C 260 80, 140 80, 120 100 C 90 140, 90 260, 120 300 Z" stroke="#333538" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 140 280 C 160 295, 240 295, 260 280 C 285 240, 285 160, 260 120 C 240 105, 160 105, 140 120 C 115 160, 115 240, 140 280 Z" stroke="#00E676" strokeWidth="2" strokeDasharray="8 6" opacity="0.3" />
                  {/* Additional futuristic details */}
                  <circle cx="200" cy="200" r="160" stroke="#222428" strokeWidth="1" />
                  <circle cx="200" cy="200" r="110" stroke="#333538" strokeWidth="1.5" strokeDasharray="3 4" />
                </svg>
              </div>

              {/* INTERACTIVE NEON CREDIT CARD */}
              <div 
                style={{
                  transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg) scale3d(1.05, 1.05, 1.05)`,
                  transition: 'transform 0.1s ease-out',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
                }}
                onClick={copyCardDetails}
                className="relative w-44 h-72 sm:w-48 sm:h-76 md:w-52 md:h-80 rounded-2xl p-5 z-20 overflow-hidden flex flex-col justify-between select-none transform transition-transform duration-200"
              >
                {/* Dynamic Base Gradient / Color based on customizable state */}
                <div 
                  className="absolute inset-0 transition-colors duration-500" 
                  style={{ backgroundColor: customColor }}
                />
                
                {/* Shiny overlay reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/20 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent rotate-12 pointer-events-none"></div>

                {/* Card Brand Header */}
                <div className="relative z-30 flex items-center justify-between">
                  <span className="font-['Syne'] font-extrabold text-lg text-black tracking-tight">
                    Wallety
                  </span>
                  {/* Subtle chip pattern */}
                  <div className="w-7 h-6 rounded bg-neutral-900/10 border border-neutral-900/25 flex flex-col justify-between p-1">
                    <div className="h-0.5 w-full bg-neutral-900/30 rounded"></div>
                    <div className="h-0.5 w-4 bg-neutral-900/30 rounded"></div>
                    <div className="h-0.5 w-full bg-neutral-900/30 rounded"></div>
                  </div>
                </div>

                {/* Technical Micro Copy */}
                <div className="relative z-30 font-['Space_Grotesk'] text-[10px] text-neutral-900/70 font-semibold tracking-wider leading-tight">
                  <p>02/28</p>
                  <p className="mt-1">PREMIUM ED.</p>
                </div>

                {/* Card Number & Customized Member Name */}
                <div className="relative z-30 mt-auto space-y-4">
                  <div className="font-['Space_Grotesk'] text-black text-[13px] sm:text-sm font-semibold tracking-widest leading-none">
                    1253 5432 3521 3891
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-black/10 pt-2.5">
                    <span className="font-['Space_Grotesk'] text-[9px] text-black font-extrabold tracking-wider uppercase truncate max-w-[120px]">
                      {isEngraved ? customName : "SECURE USER"}
                    </span>
                    <span className="text-[10px] font-bold text-neutral-950 font-['Space_Grotesk'] bg-black/10 px-2 py-0.5 rounded-full">
                      RFID
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Tiny Micro Badge Inside Circle */}
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 bg-neutral-900/80 border border-neutral-800 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-ping"></span>
                <span className="text-[9px] text-[#dbdbda] font-mono tracking-widest uppercase">Click to copy card #</span>
              </div>
            </div>

            {/* Customizer prompt badge below the circle */}
            <div className="mt-6 flex flex-col items-center gap-1.5 text-center px-4">
              <p className="text-xs font-['Space_Grotesk'] uppercase tracking-wider text-neutral-500">
                Keep your essentials in one place with Wallety
              </p>
              <button 
                onClick={() => {
                  document.getElementById('studio-section')?.scrollIntoView({ behavior: 'smooth' });
                  triggerToast("Design Studio opened");
                }} 
                className="group inline-flex items-center gap-1 text-xs text-neutral-950 font-bold hover:text-emerald-700 transition-colors"
              >
                <span>CREATE YOUR OWN 360° CREDIT CARD</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* COLUMN 3: RIGHT SIDE (Feature Highlight, Active Step Switcher, Sustainable Stat) */}
          <div className="lg:col-span-3 flex flex-col justify-between py-2 border-t lg:border-t-0 border-[#c8c8c6] lg:pl-6 pt-6 lg:pt-0 space-y-8 lg:space-y-0">
            
            <div className="space-y-6">
              <h2 className="font-['Syne'] text-2xl font-extrabold text-neutral-900 tracking-tight leading-snug">
                Advanced Wallety– <br />
                Solutions for Comfortable
              </h2>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                Experience the convenience of advanced completions, personalized interventions, and seamless solutions that simplify and streamline your financial life. With Wallety, you manage with ease.
              </p>
            </div>

            {/* INTERACTIVE STEP CARD SWITCHER (Simulating "01" indicator in picture) */}
            <div className="bg-[#d1d1cf] border border-neutral-300 rounded-2xl p-4 space-y-3 shadow-inner">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {stepsData[activeStep].badge}
                </span>
                
                {/* Step indicators */}
                <div className="flex gap-1">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setActiveStep(num);
                        triggerToast(`Switched to feature highlight 0${num}`);
                      }}
                      className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center transition-all ${activeStep === num ? 'bg-neutral-950 text-white' : 'bg-neutral-300 text-neutral-600 hover:bg-neutral-400'}`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold text-neutral-500 font-['Space_Grotesk']">
                  STEP 0{activeStep}
                </div>
                <h3 className="font-['Syne'] text-base font-bold text-neutral-950">
                  {stepsData[activeStep].title}
                </h3>
                <p className="text-[11px] text-neutral-600 leading-normal">
                  {stepsData[activeStep].desc}
                </p>
              </div>
            </div>

            {/* Vibrant Sustainable Stat Card */}
            <div className="border-t border-neutral-300 pt-5 flex items-end justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">VIBRANT</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 font-['Space_Grotesk'] bg-emerald-500/10 px-2 py-0.5 rounded inline-block">SUSTAINABLE</span>
              </div>
              <div className="text-right">
                <div className="text-4xl font-extrabold font-['Space_Grotesk'] text-neutral-950 leading-none">
                  20%
                </div>
                <span className="text-[10px] font-bold tracking-wide uppercase text-neutral-500 block mt-1">SAVE</span>
              </div>
            </div>

          </div>
        </section>

        {/* ECO CALCULATOR & VALUE MATRICES */}
        <section id="eco-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 p-6 md:p-10 border-b border-[#c8c8c6] bg-[#d3d3d1]">
          
          {/* Left Block: Interactive Savings Simulator */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-2 py-1 rounded inline-block">
                Carbon Tracker
              </span>
              <h2 className="font-['Syne'] text-3xl font-extrabold text-neutral-900 tracking-tight leading-none uppercase">
                Measure Your Compact Footprint
              </h2>
              <p className="text-xs text-neutral-600 max-w-xl">
                See the immediate impact of changing to a smart, RFID-protected compact ecosystem. Drag the slider to represent your typical monthly digital transactions.
              </p>
            </div>

            {/* Interactive Calculator Slider Component */}
            <div className="bg-[#dbdbda] border border-[#bebebc] rounded-2xl p-6 space-y-6 shadow-sm">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-neutral-700 font-['Space_Grotesk']">
                    ESTIMATED MONTHLY TRANSACTIONS
                  </span>
                  <span className="text-lg font-extrabold text-neutral-950 bg-neutral-950/5 px-3 py-1 rounded-md font-['Space_Grotesk']">
                    {monthlyTx} tx
                  </span>
                </div>
                
                <input 
                  type="range" 
                  min="10" 
                  max="500" 
                  value={monthlyTx}
                  onChange={(e) => setMonthlyTx(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-300 rounded-lg appearance-none cursor-pointer accent-[#00E676]" 
                />
                
                <div className="flex justify-between text-[10px] text-neutral-500 font-bold font-['Space_Grotesk']">
                  <span>10 TRANSACTIONS</span>
                  <span>500 TRANSACTIONS</span>
                </div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#c5c5c3]">
                <div className="bg-[#d1d1cf] p-4 rounded-xl border border-[#bebebc]">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase block tracking-wider">
                    CO₂ EMISSIONS PREVENTED
                  </span>
                  <div className="text-3xl font-extrabold text-neutral-950 font-['Space_Grotesk'] mt-1">
                    {co2Saved} <span className="text-sm font-bold text-neutral-600">kg/yr</span>
                  </div>
                  <p className="text-[10px] text-neutral-600 mt-1 leading-normal">
                    Equivalent to planting {Math.round(co2Saved / 22)} mature pine trees.
                  </p>
                </div>

                <div className="bg-[#d1d1cf] p-4 rounded-xl border border-[#bebebc]">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase block tracking-wider">
                    PLASTIC WASTE REDUCED
                  </span>
                  <div className="text-3xl font-extrabold text-[#00E676] bg-[#111215] px-3 py-1.5 rounded-lg font-['Space_Grotesk'] mt-1 inline-block">
                    {plasticSaved} <span className="text-xs font-bold text-neutral-400">g</span>
                  </div>
                  <p className="text-[10px] text-neutral-600 mt-1 leading-normal">
                    Preventing hazardous chemical microplastics from polluting seas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Core Hardware Features */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:space-y-0 lg:pl-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-neutral-500 font-['Space_Grotesk'] tracking-widest uppercase block">
                ANATOMY &amp; MECHANICS
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                Our cards are not simply beautiful; they are masterpieces of industrial engineering. Engineered with 100% recycled aircraft alloy framing and a self-healing ocean-bound bio-polymer skin.
              </p>
            </div>

            {/* Features list mimicking premium UI wireframes */}
            <div className="space-y-3">
              {[
                { icon: <Shield className="w-4 h-4 text-neutral-900" />, title: "RFID Anti-Theft Shielding", desc: "Blocks all high-frequency data waves up to 13.56MHz." },
                { icon: <Layers className="w-4 h-4 text-neutral-900" />, title: "Hyper-Compact Architecture", desc: "Fits seamlessly into thin coin pockets and front-slits." },
                { icon: <Cpu className="w-4 h-4 text-neutral-900" />, title: "Multi-Asset Smart Core", desc: "Pairs effortlessly with physical keys and micro NFC fobs." }
              ].map((item, index) => (
                <div key={index} className="flex gap-3.5 items-start p-3 bg-neutral-950/5 rounded-xl border border-neutral-950/10 hover:bg-neutral-950/10 transition-colors">
                  <div className="p-2 bg-neutral-950/10 rounded-lg mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900">{item.title}</h4>
                    <p className="text-[10px] text-neutral-600 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DESIGN STUDIO: CUSTOMIZE YOUR PERSONAL WALLETY CARD */}
        <section id="studio-section" className="p-6 md:p-10 border-b border-[#c8c8c6] bg-[#121315] text-[#dbdbda] rounded-b-[24px]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Customizer Panel Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00E676] bg-emerald-500/10 px-2.5 py-1 rounded-full inline-block mb-3">
                  Wallety Studio V2.5
                </span>
                <h2 className="font-['Syne'] text-3xl font-extrabold text-white tracking-tight uppercase leading-none">
                  Customize Your Smart Card
                </h2>
                <p className="text-xs text-neutral-400 mt-2">
                  Configure your luxury physical bio-metal card instantly. Change color tones, toggle laser engraving of your custom alias, and watch changes register instantly.
                </p>
              </div>

              {/* Color Tones Selection */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase font-['Space_Grotesk']">
                  Select Card Atmosphere
                </label>
                <div className="flex gap-3">
                  {[
                    { color: "#00E676", name: "Neon Revolution" },
                    { color: "#0D9488", name: "Cyber Teal" },
                    { color: "#F97316", name: "Solar Flare" },
                    { color: "#EC4899", name: "Prism Pink" },
                    { color: "#000000", name: "Stealth Void" }
                  ].map((preset) => (
                    <button
                      key={preset.color}
                      onClick={() => {
                        setCustomColor(preset.color);
                        triggerToast(`Card finish adjusted to ${preset.name}`);
                      }}
                      style={{ backgroundColor: preset.color }}
                      className={`w-10 h-10 rounded-full border-2 transition-transform transform hover:scale-110 relative ${customColor === preset.color ? 'border-white scale-105 shadow-xl' : 'border-transparent'}`}
                      title={preset.name}
                    >
                      {customColor === preset.color && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <Check className={`w-4 h-4 ${preset.color === '#000000' ? 'text-white' : 'text-black'}`} />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Laser Engraving Input */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase font-['Space_Grotesk']">
                    Laser-Engraved Name
                  </label>
                  
                  {/* Toggle engraving switch */}
                  <button 
                    onClick={() => {
                      setIsEngraved(!isEngraved);
                      triggerToast(`Laser engraving ${!isEngraved ? 'enabled' : 'disabled'}`);
                    }} 
                    className="text-[10px] font-bold text-[#00E676] uppercase tracking-wider hover:underline"
                  >
                    {isEngraved ? "Remove Engraving" : "Enable Engraving"}
                  </button>
                </div>
                
                <input 
                  type="text" 
                  maxLength={18}
                  disabled={!isEngraved}
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value.toUpperCase())}
                  className={`w-full bg-neutral-900 border ${isEngraved ? 'border-neutral-700 text-white focus:border-[#00E676]' : 'border-neutral-800 text-neutral-600 cursor-not-allowed'} rounded-xl px-4 py-3 text-sm font-['Space_Grotesk'] tracking-widest uppercase focus:outline-none transition-all`}
                  placeholder="WISE MEMBER"
                />
              </div>

              {/* Material Dropdown selection */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase font-['Space_Grotesk']">
                  Bio-Material Variant
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Bio-Sourced Matte", "Carbon Shield Polymer", "Aircraft Recycled Alloy", "Tactile Titanium"].map((material) => (
                    <button
                      key={material}
                      onClick={() => {
                        setCustomMaterial(material);
                        triggerToast(`Material changed to ${material}`);
                      }}
                      className={`text-xs p-3 rounded-xl border text-left font-['Space_Grotesk'] transition-all ${customMaterial === material ? 'bg-[#00E676] text-black border-transparent font-bold' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'}`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button 
                  onClick={() => triggerToast("Staging build initialized! Proceeding to claim...")} 
                  className="flex-1 bg-white hover:bg-[#00E676] hover:text-black text-black font-extrabold text-xs uppercase tracking-widest py-4 px-6 rounded-xl font-['Space_Grotesk'] text-center transition-all duration-300"
                >
                  Claim Crafted Card
                </button>
              </div>

            </div>

            {/* Real-time Dynamic 3D Card Studio Sandbox Visualizer */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 bg-neutral-950/40 rounded-2xl border border-neutral-800/80 relative min-h-[400px]">
              
              {/* Studio lighting atmosphere glows */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#00E676]/5 filter blur-3xl pointer-events-none"></div>
              <div 
                className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full filter blur-3xl pointer-events-none transition-colors duration-1000"
                style={{ backgroundColor: `${customColor}10` }}
              ></div>

              {/* Card visual layout matching dynamic states */}
              <div className="relative z-10 w-80 h-48 sm:w-96 sm:h-56 rounded-2xl p-6 shadow-2xl overflow-hidden flex flex-col justify-between transition-transform duration-500 hover:scale-[1.03]">
                
                {/* Custom Color Apply */}
                <div 
                  className="absolute inset-0 transition-colors duration-700" 
                  style={{ backgroundColor: customColor }}
                />
                
                {/* Shiny reflex */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute top-[-30%] left-[-20%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none"></div>

                {/* Header */}
                <div className="relative z-20 flex justify-between items-center text-black">
                  <span className="font-['Syne'] font-extrabold text-2xl tracking-tighter">
                    Wallety
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold bg-neutral-950/10 px-2 py-0.5 rounded uppercase font-['Space_Grotesk'] text-black/75">
                      {customMaterial}
                    </span>
                    {/* Chip */}
                    <div className="w-8 h-6 rounded bg-black/10 border border-black/20 flex flex-col justify-between p-1">
                      <div className="h-0.5 w-full bg-black/30 rounded"></div>
                      <div className="h-0.5 w-full bg-black/30 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Card Number */}
                <div className="relative z-20 text-black font-['Space_Grotesk'] text-lg sm:text-xl font-bold tracking-widest mt-4">
                  1253 5432 3521 3891
                </div>

                {/* Footer details */}
                <div className="relative z-20 flex justify-between items-end border-t border-black/10 pt-3 mt-auto">
                  <div>
                    <span className="text-[8px] uppercase tracking-wider text-black/50 block font-['Space_Grotesk']">
                      Laser Engraving
                    </span>
                    <span className="text-xs font-bold text-black font-['Space_Grotesk'] uppercase tracking-widest truncate block max-w-[200px]">
                      {isEngraved ? customName : "SECURE USER"}
                    </span>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-[8px] uppercase tracking-wider text-black/50 block font-['Space_Grotesk']">
                      EXPIRES
                    </span>
                    <span className="text-xs font-bold text-black font-['Space_Grotesk']">
                      02/28
                    </span>
                  </div>
                </div>

              </div>

              {/* Technical Specifications Overlay on Bottom */}
              <div className="grid grid-cols-3 gap-6 w-full max-w-lg mt-8 pt-6 border-t border-neutral-900 text-center">
                <div>
                  <span className="text-[10px] text-neutral-500 block uppercase font-['Space_Grotesk']">Material Weight</span>
                  <span className="text-sm font-bold text-white font-['Space_Grotesk']">11.2 Grams</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 block uppercase font-['Space_Grotesk']">RFID Protection</span>
                  <span className="text-sm font-bold text-white font-['Space_Grotesk']">13.56 MHz Active</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 block uppercase font-['Space_Grotesk']">Core Lifecycle</span>
                  <span className="text-sm font-bold text-[#00E676] font-['Space_Grotesk']">Infinite Loop</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* PRICING AND HARDWARE TIERS */}
        <section className="p-6 md:p-10 bg-[#dbdbda] border-b border-[#c8c8c6] grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-['Space_Grotesk']">
              EDITIONS MATRIX
            </span>
            <h2 className="font-['Syne'] text-3xl font-extrabold text-neutral-900 tracking-tight leading-none uppercase">
              Choose Your Carrying Tier
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Every package comes with a tailored physical Bio-Metal card and fully synchronized secure digital app key pairings.
            </p>
            
            <div className="p-4 bg-neutral-950/5 border border-neutral-950/10 rounded-2xl flex items-center gap-3">
              <div className="p-2.5 bg-neutral-950/5 rounded-xl">
                <Globe className="w-4 h-4 text-emerald-700" />
              </div>
              <p className="text-[11px] text-neutral-600 leading-normal">
                All transactions fund verified ocean cleanups in partnership with the Plastic Bank Foundation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Tier 1: Standard Bio-Matte */}
            <div className={`p-6 rounded-2xl border-2 transition-all ${selectedEdition === 'standard' ? 'bg-[#121315] text-[#dbdbda] border-neutral-950 shadow-xl' : 'bg-[#d1d1cf] border-neutral-300 text-neutral-900'}`}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded bg-[#00E676] text-black">
                  MOST POPULAR
                </span>
                <span className="text-2xl font-extrabold font-['Space_Grotesk']">$49</span>
              </div>
              
              <h3 className="font-['Syne'] text-xl font-extrabold mt-4">Bio-Matte Compact</h3>
              <p className={`text-xs mt-1 ${selectedEdition === 'standard' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Engineered with dynamic micro-plastics reclaimed from global ocean coastlines. Beautiful, resilient, and slim.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00E676]" />
                  <span>Standard laser custom engraving</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00E676]" />
                  <span>Integrated secure RFID mesh</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00E676]" />
                  <span>Digital smart dashboard pairing</span>
                </li>
              </ul>

              <button 
                onClick={() => {
                  setSelectedEdition('standard');
                  triggerToast("Standard Bio-Matte edition selected");
                }}
                className={`w-full mt-6 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider font-['Space_Grotesk'] transition-colors ${selectedEdition === 'standard' ? 'bg-white text-black hover:bg-[#00E676]' : 'bg-neutral-950 text-white hover:bg-neutral-900'}`}
              >
                SELECT ECO STANDARD
              </button>
            </div>

            {/* Tier 2: Titanium Void */}
            <div className={`p-6 rounded-2xl border-2 transition-all ${selectedEdition === 'titanium' ? 'bg-[#121315] text-[#dbdbda] border-neutral-950 shadow-xl' : 'bg-[#d1d1cf] border-neutral-300 text-neutral-900'}`}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded bg-black text-[#00E676]">
                  ELITE PERFORMANCE
                </span>
                <span className="text-2xl font-extrabold font-['Space_Grotesk']">$129</span>
              </div>
              
              <h3 className="font-['Syne'] text-xl font-extrabold mt-4">Stealth Titanium Void</h3>
              <p className={`text-xs mt-1 ${selectedEdition === 'titanium' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                A masterpiece machined out of a block of solid Grade-5 titanium. Finished in absolute obsidian stealth-matte coating.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00E676]" />
                  <span>3D tactile holographic engraving</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00E676]" />
                  <span>Indestructible military drop warranty</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00E676]" />
                  <span>Priority white-glove support token</span>
                </li>
              </ul>

              <button 
                onClick={() => {
                  setSelectedEdition('titanium');
                  triggerToast("Elite Titanium Void edition selected");
                }}
                className={`w-full mt-6 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider font-['Space_Grotesk'] transition-colors ${selectedEdition === 'titanium' ? 'bg-white text-black hover:bg-[#00E676]' : 'bg-neutral-950 text-white hover:bg-neutral-900'}`}
              >
                SELECT TITANIUM VOID
              </button>
            </div>

          </div>
        </section>

        {/* CUSTOM DECORATIVE MARGIN FOOTER (Echoes the inspiration's outer dark frame elements) */}
        <footer className="w-full bg-[#121315] text-white p-6 md:p-10 rounded-b-[24px]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-neutral-800 pb-8">
            <div>
              <div className="font-['Syne'] text-2xl font-extrabold tracking-tight">
                Wallety<span className="text-[#00E676]">.</span>
              </div>
              <p className="text-xs text-neutral-400 mt-2 max-w-sm font-['Space_Grotesk']">
                Creating luxury compact ecosystems that fund global conservation, shield your security, and simplify your pocket aesthetic.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 text-xs font-semibold tracking-wider text-neutral-400">
              <a href="#studio" onClick={(e) => { e.preventDefault(); document.getElementById('studio-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#00E676] transition-colors">CUSTOM STUDIO</a>
              <a href="#eco" onClick={(e) => { e.preventDefault(); document.getElementById('eco-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#00E676] transition-colors">CARBON FOOTPRINT</a>
              <a href="#benefits" onClick={(e) => { e.preventDefault(); triggerToast("Legal terms and safety sheets are ready in documentation"); }} className="hover:text-[#00E676] transition-colors">SECURE RFID TERMS</a>
            </div>
          </div>

          <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono tracking-widest text-neutral-500">
            <div>
              © 2026 WALLETY ECO SYSTEMS. DESIGNED IN BERLIN &amp; TOKYO.
            </div>
            
            <div className="flex items-center gap-2 mt-4 sm:mt-0 text-right">
              <span className="w-1.5 h-1.5 bg-[#00E676] rounded-full inline-block animate-pulse"></span>
              Say goodbye to bulky wallets and hello to a compact and friendly solution.
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}


3
import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  ShoppingBag, 
  Search, 
  User, 
  Plus, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  MapPin, 
  Activity, 
  Cpu, 
  Eye, 
  Layers, 
  X, 
  Check, 
  TrendingUp, 
  Sliders, 
  Play, 
  Volume2, 
  VolumeX,
  Share2
} from 'lucide-react';

export default function App() {
  // Global & Interaction States
  const [activeTab, setActiveTab] = useState('Shop');
  const [selectedSize, setSelectedSize] = useState('M');
  const [backpackColor, setBackpackColor] = useState('default'); // 'default', 'sand', 'alpine'
  const [activeBackpackAngle, setActiveBackpackAngle] = useState(0); // 0: front, 1: side, 2: back
  const [vrMode, setVrMode] = useState(false);
  const [bgBlurAmount, setBgBlurAmount] = useState(0); // For simulate altitude/depth blur
  const [cartCount, setCartCount] = useState(0);
  const [showCartToast, setShowCartToast] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentExploreIndex, setCurrentExploreIndex] = useState(0);
  
  // Custom interactive mock data matching the F/W Collection theme
  const exploreCards = [
    {
      title: "New collection",
      subtitle: "F/W 2026 Season",
      tag: "NEW IN",
      imgUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80",
      accent: "from-amber-600/30 to-amber-950/40"
    },
    {
      title: "Future by Nike",
      subtitle: "TERRAIN TECH PANTS",
      tag: "NEW TECHNOLOGY",
      imgUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
      accent: "from-orange-500/30 to-zinc-950/40"
    },
    {
      title: "Extreme Altitude",
      subtitle: "WATERPROOF COAT",
      tag: "OXYGEN-READY",
      imgUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      accent: "from-amber-700/30 to-neutral-950/40"
    }
  ];

  const handleNextExplore = () => {
    setCurrentExploreIndex((prev) => (prev + 1) % exploreCards.length);
  };

  const handlePrevExplore = () => {
    setCurrentExploreIndex((prev) => (prev - 1 + exploreCards.length) % exploreCards.length);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setShowCartToast(true);
    setTimeout(() => {
      setShowCartToast(false);
    }, 4000);
  };

  // Sound effects generator using Web Audio API (premium UI atmospheric tone)
  const playBeep = (freq = 240, duration = 0.08, type = "sine") => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.type = type;
      oscillator.frequency.value = freq;
      gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio context blocked or not supported
    }
  };

  const toggleAtmosphereAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
    playBeep(320, 0.15, "triangle");
  };

  return (
    <div className="min-h-screen relative text-stone-100 font-sans overflow-x-hidden selection:bg-amber-500 selection:text-stone-900 bg-[#0E0B09]">
      
      {/* Dynamic Earth-Tone Background Canvas */}
      <div 
        className="fixed inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2000&q=80')`,
          filter: `brightness(${vrMode ? 0.35 : 0.6}) saturate(${vrMode ? 1.4 : 1.05}) contrast(1.05) blur(${bgBlurAmount}px)`,
          transform: vrMode ? 'scale(1.08)' : 'scale(1.02)'
        }}
      />
      
      {/* Earthy Vignette & Glowing Atmosphere Overlays */}
      <div className="fixed inset-0 bg-gradient-to-t from-[#0E0B09] via-transparent to-[#1a120b]/40 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.07),transparent_65%)] pointer-events-none" />
      <div className="fixed top-12 left-1/4 w-[45rem] h-[30rem] bg-amber-600/10 rounded-full filter blur-[150px] mix-blend-screen pointer-events-none transition-opacity duration-1000" style={{ opacity: vrMode ? 0.9 : 0.4 }} />
      <div className="fixed bottom-12 right-1/4 w-[35rem] h-[35rem] bg-orange-800/10 rounded-full filter blur-[180px] mix-blend-screen pointer-events-none" />

      {/* Floating Header Audio Ambient Pill */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-stone-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-stone-800 text-[10px] uppercase tracking-widest text-stone-400">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
        <span>VR Experience: Active F/W Session</span>
        <button 
          onClick={toggleAtmosphereAudio}
          className="hover:text-amber-400 transition-colors focus:outline-none flex items-center gap-1.5 ml-2 border-l border-stone-700 pl-2"
        >
          {isAudioPlaying ? <Volume2 size={12} className="text-amber-500" /> : <VolumeX size={12} />}
          <span>{isAudioPlaying ? 'Mute Atmosphere' : 'Play Soundscape'}</span>
        </button>
      </div>

      {/* Main Container Wrapper */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 z-10">
        
        {/* TOP BRAND INSCRIPTION */}
        <div className="text-center mb-10 mt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-900/50 backdrop-blur-md border border-stone-800 rounded-full text-[11px] uppercase tracking-[0.25em] text-amber-500/90 shadow-sm">
            <span className="w-1 h-1 rounded-full bg-amber-400"></span>
            <span>Interface design of ecommerce</span>
            <span className="w-1 h-1 rounded-full bg-amber-400"></span>
          </div>
          <p className="text-stone-400/80 text-[11px] uppercase tracking-widest mt-2 font-mono">Test 03 by PXDX Studio / Expanded Ecosystem</p>
        </div>

        {/* HERO ECOMMERCE CONSOLE (The centerpiece layout based directly on the mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* LEFT WING: BRAND identity & NESTED CARDS (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* P58 Main Hero Banner Card */}
            <div className="bg-[#191512]/90 border border-stone-800/80 rounded-[2.2rem] p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col justify-between min-h-[300px]">
              
              {/* Backglow accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-600/10 rounded-full filter blur-3xl pointer-events-none" />
              
              <div className="flex justify-between items-start z-10">
                <h1 className="text-7xl font-light tracking-tighter text-stone-100 font-sans flex items-baseline">
                  P58
                  <span className="text-xs font-mono font-bold tracking-widest text-amber-500 ml-2">v2.5</span>
                </h1>
                
                {/* Micro Pill Button */}
                <button 
                  onClick={() => { playBeep(440); setVrMode(!vrMode); }}
                  className="bg-stone-900 border border-stone-700/80 hover:border-amber-500 hover:text-amber-400 transition-all text-stone-200 px-4 py-2.5 rounded-full text-xs font-medium flex items-center gap-2 group cursor-pointer"
                >
                  <span className="text-[10px] uppercase tracking-widest">About P58</span>
                  <div className="w-5 h-5 rounded-full bg-stone-800 group-hover:bg-amber-500/20 flex items-center justify-center transition-colors">
                    <Plus size={10} className="group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </button>
              </div>

              {/* Sub-details & Specs */}
              <div className="pt-10 z-10">
                <div className="border-t border-stone-800/80 pt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-stone-900/90 border border-stone-800 rounded-xl text-amber-500">
                      <Compass size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-stone-500">Marketplace</p>
                      <p className="text-xs font-semibold text-stone-300 uppercase tracking-tight">Only Top Brands</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-stone-900/90 border border-stone-800 rounded-xl text-amber-500">
                      <Layers size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-stone-500">Trekking Gear</p>
                      <p className="text-xs font-semibold text-stone-300 uppercase tracking-tight">F/W Collection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub Explorer Slider Container (Two-column responsive card navigation mimicking the design) */}
            <div className="bg-[#191512]/90 border border-stone-800/80 rounded-[2.2rem] p-6 backdrop-blur-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-mono">Dynamic Scouting</p>
                <div className="flex gap-1">
                  <button 
                    onClick={() => { playBeep(200); handlePrevExplore(); }}
                    className="w-8 h-8 rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-800/95 flex items-center justify-center text-stone-400 hover:text-stone-100 transition-colors"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button 
                    onClick={() => { playBeep(200); handleNextExplore(); }}
                    className="w-8 h-8 rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-800/95 flex items-center justify-center text-stone-400 hover:text-stone-100 transition-colors"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>

              {/* Slider Viewports */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* Main slide item (index) */}
                <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-stone-900 border border-stone-800 flex flex-col justify-end p-4">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${exploreCards[currentExploreIndex].imgUrl})` }} />
                  <div className={`absolute inset-0 bg-gradient-to-t ${exploreCards[currentExploreIndex].accent} via-black/30 to-black/10`} />
                  
                  {/* Floating badge */}
                  <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-stone-700/80 text-[8px] font-bold tracking-widest text-amber-500 uppercase">
                    {exploreCards[currentExploreIndex].tag}
                  </div>

                  <div className="relative z-10">
                    <p className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">{exploreCards[currentExploreIndex].subtitle}</p>
                    <h3 className="text-sm font-semibold tracking-tight text-white mt-0.5">{exploreCards[currentExploreIndex].title}</h3>
                  </div>

                  <button className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Plus size={14} />
                  </button>
                </div>

                {/* Secondary side item (index + 1) */}
                <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-stone-900 border border-stone-800 flex flex-col justify-end p-4">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${exploreCards[(currentExploreIndex + 1) % exploreCards.length].imgUrl})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-black/40 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-stone-700/80 text-[8px] font-bold tracking-widest text-stone-400 uppercase">
                    {exploreCards[(currentExploreIndex + 1) % exploreCards.length].tag}
                  </div>

                  <div className="relative z-10">
                    <p className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">{exploreCards[(currentExploreIndex + 1) % exploreCards.length].subtitle}</p>
                    <h3 className="text-sm font-semibold tracking-tight text-white mt-0.5">{exploreCards[(currentExploreIndex + 1) % exploreCards.length].title}</h3>
                  </div>

                  <button className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-stone-800/90 text-stone-100 border border-stone-700 flex items-center justify-center hover:bg-amber-500 hover:text-stone-950 transition-colors">
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT WING: PRODUCT SHOWCASE INTERFACE (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Top Interactive Glass Control Bar */}
            <div className="bg-[#191512]/90 border border-stone-800/80 rounded-[1.8rem] p-3.5 backdrop-blur-xl flex flex-wrap gap-2 items-center justify-between shadow-md">
              <div className="flex gap-1">
                <button 
                  onClick={() => { playBeep(280); setActiveTab('About'); }} 
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${activeTab === 'About' ? 'bg-[#32271d] text-amber-500 shadow-inner' : 'text-stone-400 hover:text-stone-200'}`}
                >
                  About
                </button>
                <button 
                  onClick={() => { playBeep(300); setActiveTab('Guides'); }} 
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${activeTab === 'Guides' ? 'bg-[#32271d] text-amber-500 shadow-inner' : 'text-stone-400 hover:text-stone-200'}`}
                >
                  Guides
                </button>
                <button 
                  onClick={() => { playBeep(320); setActiveTab('Shop'); }} 
                  className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all flex items-center gap-1.5 ${activeTab === 'Shop' ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-stone-200'}`}
                >
                  Shop <ArrowUpRight size={12} />
                </button>
              </div>

              {/* Utility Tools */}
              <div className="flex items-center gap-1.5">
                <button className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-stone-200 hover:border-amber-500/50 transition-all cursor-pointer">
                  <Search size={14} />
                </button>
                <button 
                  onClick={() => { playBeep(350); handleAddToCart(); }} 
                  className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-stone-200 hover:border-amber-500/50 transition-all relative"
                >
                  <ShoppingBag size={14} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-[9px] font-bold text-stone-950 flex items-center justify-center animate-bounce">
                      {cartCount}
                    </span>
                  )}
                </button>
                <button className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-stone-200 hover:border-amber-500/50 transition-all">
                  <User size={14} />
                </button>
              </div>
            </div>

            {/* Immersive Dynamic Product Showcase Board */}
            <div className="bg-[#191512]/90 border border-stone-800/80 rounded-[2.2rem] p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between flex-1 min-h-[480px]">
              
              {/* Product Glow Ambient light */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(217,119,6,0.12),transparent_65%)] pointer-events-none" />

              {/* Top Row: Meta Tags & Active Layout Customizers */}
              <div className="flex justify-between items-start z-10">
                <div className="flex flex-col gap-1.5">
                  <span className="self-start px-2.5 py-0.5 rounded-full bg-[#32271d] text-[8px] font-bold tracking-widest text-amber-500 uppercase">
                    NEW IN
                  </span>
                  <div>
                    <h2 className="text-4xl sm:text-5xl font-light text-stone-100 tracking-tight">Backpack</h2>
                    <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Jack Wolfskin / P58 Concept Edition</p>
                  </div>
                </div>

                {/* Right Floating Product Multi-angle Selector */}
                <div className="bg-stone-950/70 border border-stone-800/60 p-1.5 rounded-3xl flex flex-col gap-2 shadow-inner">
                  <button 
                    onClick={() => { playBeep(260); setActiveBackpackAngle(0); }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${activeBackpackAngle === 0 ? 'bg-amber-500 text-stone-950 scale-105' : 'bg-stone-900/60 text-stone-400 hover:text-white'}`}
                    title="Front Angle"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="6" y="4" width="12" height="16" rx="3" />
                      <path d="M9 4v4h6V4" />
                      <circle cx="12" cy="12" r="1.5" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => { playBeep(280); setActiveBackpackAngle(1); }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${activeBackpackAngle === 1 ? 'bg-amber-500 text-stone-950 scale-105' : 'bg-stone-900/60 text-stone-400 hover:text-white'}`}
                    title="Side View"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="8" y="4" width="8" height="16" rx="2" />
                      <line x1="8" y1="10" x2="16" y2="10" />
                      <line x1="8" y1="14" x2="16" y2="14" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => { playBeep(300); setActiveBackpackAngle(2); }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${activeBackpackAngle === 2 ? 'bg-amber-500 text-stone-950 scale-105' : 'bg-stone-900/60 text-stone-400 hover:text-white'}`}
                    title="Harness Tech"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="6" y="4" width="12" height="16" rx="3" />
                      <path d="M6 10c2 0 3 2 3 4M18 10c-2 0-3 2-3 4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Dynamic Interactive SVG Backpack Art Rendering */}
              <div className="my-6 flex justify-center items-center relative h-64 z-10">
                
                {/* Simulated Shadows & Platform */}
                <div className="absolute bottom-2 w-44 h-5 bg-black/50 filter blur-xl rounded-full" />
                
                {/* 3D Container Rotate & Color Modifier */}
                <div 
                  className="transition-all duration-700 ease-out transform"
                  style={{ 
                    transform: `rotateY(${activeBackpackAngle * 120}deg) scale(1.15)`,
                    perspective: '1000px'
                  }}
                >
                  <svg className="w-48 h-48 drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]" viewBox="0 0 200 200" fill="none">
                    {/* Definitions for Gradients and patterns based on colors chosen */}
                    <defs>
                      <linearGradient id="backpackBody" x1="0%" y1="0%" x2="100%" y2="100%">
                        {backpackColor === 'default' && (
                          <>
                            <stop offset="0%" stopColor="#DFDEDD" />
                            <stop offset="100%" stopColor="#8C8885" />
                          </>
                        )}
                        {backpackColor === 'sand' && (
                          <>
                            <stop offset="0%" stopColor="#E2C9B1" />
                            <stop offset="100%" stopColor="#8B6C51" />
                          </>
                        )}
                        {backpackColor === 'alpine' && (
                          <>
                            <stop offset="0%" stopColor="#2F3E46" />
                            <stop offset="100%" stopColor="#1B2428" />
                          </>
                        )}
                      </linearGradient>
                      <linearGradient id="straps" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2A2827" />
                        <stop offset="100%" stopColor="#121111" />
                      </linearGradient>
                      <linearGradient id="metallicAccents" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D97706" />
                        <stop offset="100%" stopColor="#9A3412" />
                      </linearGradient>
                    </defs>

                    {/* Backpack main outline structure */}
                    <path 
                      d="M60,40 C60,25 140,25 140,40 L150,140 C150,165 130,175 100,175 C70,175 50,165 50,140 Z" 
                      fill="url(#backpackBody)" 
                      stroke="#221F1E" 
                      strokeWidth="2"
                    />

                    {/* Outer Compression straps (Varying visualization depending on angle selected) */}
                    {activeBackpackAngle === 0 && (
                      <>
                        {/* Front pocket layout */}
                        <path d="M70,80 C70,60 130,60 130,80 L130,135 C130,145 115,150 100,150 C85,150 70,145 70,135 Z" fill="#2D2A28" opacity="0.65" />
                        <rect x="95" y="45" width="10" height="20" rx="2" fill="url(#metallicAccents)" />
                        
                        {/* Compression side bars */}
                        <rect x="48" y="80" width="10" height="30" rx="3" fill="url(#straps)" />
                        <rect x="142" y="80" width="10" height="30" rx="3" fill="url(#straps)" />
                        
                        {/* Horizontal high-contrast hazard utility stripes */}
                        <line x1="60" y1="110" x2="140" y2="110" stroke="#121111" strokeWidth="5" />
                        <line x1="60" y1="125" x2="140" y2="125" stroke="#121111" strokeWidth="3" />
                        <circle cx="100" cy="110" r="4" fill="#D97706" />
                      </>
                    )}

                    {activeBackpackAngle === 1 && (
                      <>
                        {/* Side pocket & water flask holder */}
                        <path d="M85,55 C85,45 115,45 115,55 L120,135 C120,145 110,155 100,155 C90,155 80,145 80,135 Z" fill="#1C1A19" />
                        {/* Mesh pocket detailing */}
                        <path d="M80,105 C80,105 100,115 120,105 L118,135 C118,140 110,145 100,145 C90,145 82,140 82,135 Z" fill="#D97706" opacity="0.4" />
                        {/* Side strap buckle */}
                        <rect x="75" y="80" width="16" height="6" rx="1" fill="#D97706" />
                        <line x1="75" y1="83" x2="125" y2="83" stroke="#1C1A19" strokeWidth="2" />
                      </>
                    )}

                    {activeBackpackAngle === 2 && (
                      <>
                        {/* Back-pad and Ergonomic Harness visualization */}
                        <path d="M72,42 C80,45 120,45 128,42 C125,75 125,120 135,145 C135,150 120,155 100,155 C80,155 65,150 65,145 C75,120 75,75 72,42 Z" fill="#1C1A19" />
                        
                        {/* Breathable Mesh Lumbar support blocks */}
                        <rect x="80" y="55" width="40" height="22" rx="3" fill="#2E2A28" />
                        <rect x="78" y="85" width="44" height="25" rx="3" fill="#2E2A28" />
                        <rect x="75" y="120" width="50" height="25" rx="4" fill="#3D3734" />
                        
                        {/* Padded Shoulder strap loops */}
                        <path d="M60,50 C50,75 48,110 65,135" stroke="url(#straps)" strokeWidth="10" strokeLinecap="round" fill="none" />
                        <path d="M140,50 C150,75 152,110 135,135" stroke="url(#straps)" strokeWidth="10" strokeLinecap="round" fill="none" />
                      </>
                    )}

                    {/* Premium reflective Brand stamp */}
                    <rect x="94" y="32" width="12" height="3" fill="#1E1B18" />
                  </svg>
                </div>

                {/* Simulated Floating UI Indicators */}
                <div className="absolute left-8 top-12 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-stone-800 text-[10px] text-stone-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
                  <span>Water repellent IPX6</span>
                </div>

                <div className="absolute right-6 bottom-16 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-stone-800 text-[10px] text-stone-300 flex items-center gap-1.5">
                  <Activity size={12} className="text-[#D97706]" />
                  <span>Spine Load Balancer</span>
                </div>
              </div>

              {/* Bottom Row: Controls, Size Selection, Pricing & CTA */}
              <div className="border-t border-stone-800/80 pt-6 flex flex-wrap gap-5 justify-between items-center z-10">
                
                {/* Color Scheme Picker */}
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-mono">Select Colorway</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => { playBeep(230); setBackpackColor('default'); }}
                      className={`w-8 h-8 rounded-full bg-[#DFDEDD] border-2 transition-all flex items-center justify-center ${backpackColor === 'default' ? 'border-amber-500 scale-110' : 'border-transparent opacity-80'}`}
                      title="Stone White"
                    >
                      {backpackColor === 'default' && <Check size={12} className="text-stone-950 stroke-[3]" />}
                    </button>
                    <button 
                      onClick={() => { playBeep(240); setBackpackColor('sand'); }}
                      className={`w-8 h-8 rounded-full bg-[#D4A373] border-2 transition-all flex items-center justify-center ${backpackColor === 'sand' ? 'border-amber-500 scale-110' : 'border-transparent opacity-80'}`}
                      title="Desert Sand"
                    >
                      {backpackColor === 'sand' && <Check size={12} className="text-stone-950 stroke-[3]" />}
                    </button>
                    <button 
                      onClick={() => { playBeep(250); setBackpackColor('alpine'); }}
                      className={`w-8 h-8 rounded-full bg-[#2F3E46] border-2 transition-all flex items-center justify-center ${backpackColor === 'alpine' ? 'border-amber-500 scale-110' : 'border-transparent opacity-80'}`}
                      title="Alpine Pine"
                    >
                      {backpackColor === 'alpine' && <Check size={12} className="text-stone-100 stroke-[3]" />}
                    </button>
                  </div>
                </div>

                {/* Size Controls */}
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-mono">Volume capacity</p>
                  <div className="flex items-center gap-1.5 bg-stone-950/60 p-1 rounded-full border border-stone-800">
                    {['M', 'L', 'XL (65L)'].map((size) => (
                      <button
                        key={size}
                        onClick={() => { playBeep(320); setSelectedSize(size); }}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase transition-all ${selectedSize === size ? 'bg-[#32271d] text-amber-500' : 'text-stone-400 hover:text-stone-200'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Carousel Angles Dots (Interactive) */}
                <div className="flex items-center gap-2 bg-stone-900/80 px-3 py-2 rounded-full border border-stone-800">
                  <button 
                    onClick={() => { playBeep(200); setActiveBackpackAngle((prev) => (prev - 1 + 3) % 3); }}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <span className="text-[10px] font-mono font-bold text-stone-300 tracking-widest px-1">
                    0{activeBackpackAngle + 1} / 03
                  </span>
                  <button 
                    onClick={() => { playBeep(200); setActiveBackpackAngle((prev) => (prev + 1) % 3); }}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>

                {/* Add to Cart Giant Glowing action button */}
                <button 
                  onClick={() => { playBeep(600, 0.25, "sine"); handleAddToCart(); }}
                  className="bg-stone-100 text-stone-950 font-semibold px-6 py-3.5 rounded-full flex items-center gap-3 hover:bg-amber-500 hover:text-stone-950 transition-all duration-300 shadow-[0_12px_24px_rgba(255,255,255,0.08)] transform hover:-translate-y-0.5 group active:translate-y-0 cursor-pointer"
                >
                  <div className="flex flex-col items-start leading-none pr-3 border-r border-stone-950/20">
                    <span className="text-[9px] uppercase tracking-wider text-stone-950/70 font-mono">Price</span>
                    <span className="text-sm font-bold">$289.00</span>
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold">Add to Gear</span>
                  <div className="w-5 h-5 rounded-full bg-stone-950/10 group-hover:bg-stone-950/20 flex items-center justify-center">
                    <Plus size={12} className="stroke-[3]" />
                  </div>
                </button>

              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM UTILITY / ECOSYSTEM SELECTOR METADATA BAR */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Simulated VR Universe Ambient Depth Controller */}
          <div className="bg-[#191512]/95 border border-stone-800/80 rounded-[2rem] p-6 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                <Sliders size={18} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-stone-300 font-bold">Atmosphere Generator</h4>
                <p className="text-[10px] text-stone-500">Render real-time desert elevation environment</p>
              </div>
            </div>

            {/* Depth simulation slider */}
            <div className="flex items-center gap-3 flex-1 min-w-[150px] justify-end">
              <span className="text-[10px] font-mono text-stone-400">ALTITUDE BLUR: {bgBlurAmount}px</span>
              <input 
                type="range" 
                min="0" 
                max="8" 
                value={bgBlurAmount} 
                onChange={(e) => { playBeep(200 + e.target.value * 25, 0.05); setBgBlurAmount(Number(e.target.value)); }}
                className="accent-amber-500 bg-stone-900 border border-stone-800 rounded-lg h-1.5 w-24 cursor-pointer"
              />
            </div>
          </div>

          {/* Interactive 3D Orbit Universe Button */}
          <button 
            onClick={() => { playBeep(380, 0.2); setVrMode(!vrMode); }}
            className={`w-full text-left bg-[#191512]/95 border rounded-[2rem] p-6 backdrop-blur-xl flex items-center justify-between transition-all group ${vrMode ? 'border-amber-500/80 shadow-[0_0_25px_rgba(217,119,6,0.15)]' : 'border-stone-800/80 hover:border-stone-700'}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-amber-500 font-mono text-xs font-bold">{vrMode ? '● ONLINE' : '+ P58'}</span>
              <div>
                <p className="text-[11px] text-stone-400 font-medium">Test products as a 3d objects in our P58 universe</p>
                <p className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">VR Simulation: {vrMode ? 'Activated' : 'Standby'}</p>
              </div>
            </div>
            
            <div className={`px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all ${vrMode ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-stone-400 group-hover:text-stone-200'}`}>
              {vrMode ? 'Exit Universe' : '3D Products'}
            </div>
          </button>

        </div>

        {/* -------------------- DEEPER EXPERIENCES / ADVENTURE STORIES -------------------- */}
        
        {/* SECTION HEADER */}
        <div className="mt-24 mb-10 flex flex-wrap justify-between items-end gap-4 border-b border-stone-800/80 pb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-amber-500 font-mono">Survival Protocol</span>
            <h2 className="text-3xl font-light text-stone-100 tracking-tight mt-1">Ecosystem Gear Integration</h2>
          </div>
          <p className="text-stone-400 text-xs max-w-sm">
            High-tech, lightweight clothing tailored for extreme weather conditions and altitude variance. Real-world durability, tested on high deserts.
          </p>
        </div>

        {/* ECOSYSTEM CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#191512]/90 border border-stone-800/80 rounded-[2.2rem] p-6 backdrop-blur-xl group hover:border-amber-500/40 transition-all flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-stone-900 border border-stone-800 rounded-full text-[9px] uppercase tracking-widest font-mono text-stone-400">
                  SHELL SYSTEM
                </span>
                <span className="text-xs font-mono text-amber-500">01 / TECH</span>
              </div>
              <h3 className="text-2xl font-light text-stone-100 tracking-tight group-hover:text-amber-400 transition-colors">
                Anorak Storm Guard
              </h3>
              <p className="text-stone-400 text-xs mt-3 leading-relaxed">
                Constructed with recycled high-density synthetic fiber. Windproof, waterproof up to 20,000 mm, with double taped zippers.
              </p>
            </div>

            <div className="pt-6 border-t border-stone-800/60 flex justify-between items-center">
              <div>
                <p className="text-[9px] uppercase tracking-wider text-stone-500">Rating</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  ))}
                  <span className="text-[10px] font-mono text-stone-300 ml-1">5.0</span>
                </div>
              </div>
              <button 
                onClick={() => { playBeep(400); handleAddToCart(); }} 
                className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all duration-300"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#191512]/90 border border-stone-800/80 rounded-[2.2rem] p-6 backdrop-blur-xl group hover:border-amber-500/40 transition-all flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-stone-900 border border-stone-800 rounded-full text-[9px] uppercase tracking-widest font-mono text-stone-400">
                  MOBILITY BASE
                </span>
                <span className="text-xs font-mono text-amber-500">02 / TECH</span>
              </div>
              <h3 className="text-2xl font-light text-stone-100 tracking-tight group-hover:text-amber-400 transition-colors">
                Alpine Cargo Pants
              </h3>
              <p className="text-stone-400 text-xs mt-3 leading-relaxed">
                Durable micro-ripstop panels integrated with elastic knees to provide extreme mountain scrambling flexibility.
              </p>
            </div>

            <div className="pt-6 border-t border-stone-800/60 flex justify-between items-center">
              <div>
                <p className="text-[9px] uppercase tracking-wider text-stone-500">Rating</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className={`w-1.5 h-1.5 rounded-full ${i === 5 ? 'bg-stone-700' : 'bg-amber-500'}`} />
                  ))}
                  <span className="text-[10px] font-mono text-stone-300 ml-1">4.8</span>
                </div>
              </div>
              <button 
                onClick={() => { playBeep(420); handleAddToCart(); }} 
                className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all duration-300"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Card 3 (Premium feature with custom design) */}
          <div className="bg-gradient-to-br from-[#1E150F] to-[#120F0D] border border-amber-600/20 rounded-[2.2rem] p-6 backdrop-blur-xl relative overflow-hidden group hover:border-amber-500/60 transition-all flex flex-col justify-between min-h-[340px]">
            
            {/* Soft decorative glow inside the card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full filter blur-2xl" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[9px] uppercase tracking-widest font-mono text-amber-500">
                  LOCKED IN HEAT
                </span>
                <span className="text-xs font-mono text-amber-400">03 / PREMIUM</span>
              </div>
              <h3 className="text-2xl font-light text-stone-100 tracking-tight group-hover:text-amber-400 transition-colors">
                Trek-800 Down Jacket
              </h3>
              <p className="text-stone-300/80 text-xs mt-3 leading-relaxed">
                Ethically sourced 800-fill goose down insulation with aerospace heat reflection technology integrated into the internal lining.
              </p>
            </div>

            <div className="pt-6 border-t border-stone-800/60 flex justify-between items-center">
              <div>
                <p className="text-[9px] uppercase tracking-wider text-stone-500">Rating</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  ))}
                  <span className="text-[10px] font-mono text-stone-300 ml-1">5.0 (VOTED BEST)</span>
                </div>
              </div>
              <button 
                onClick={() => { playBeep(440); handleAddToCart(); }} 
                className="w-10 h-10 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <Plus size={14} className="stroke-[3]" />
              </button>
            </div>
          </div>

        </div>

        {/* -------------------- INTERACTIVE BRAND STORY / SENSOR CORNER -------------------- */}
        <div className="mt-20 bg-[#191512]/80 border border-stone-800/80 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full filter blur-[100px] mix-blend-screen pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-900 border border-stone-800 rounded-full text-xs uppercase tracking-widest text-stone-400">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                <span>SYSTEM PERFORMANCE</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-stone-100 tracking-tight leading-tight">
                Designed to defy the <span className="text-amber-500 italic font-normal">gravitational limits</span> of standard gear.
              </h2>
              
              <p className="text-stone-400 text-sm leading-relaxed max-w-xl">
                Every stitch on P58 collection clothing passes a double durability test in simulated desert winds. Backed by real survivalists, our goal is high portability without weight overhead.
              </p>

              {/* Stats Layout */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-stone-900/60 p-4 rounded-2xl border border-stone-800">
                  <p className="text-2xl font-bold text-stone-100 font-mono">1.2kg</p>
                  <p className="text-[9px] uppercase tracking-widest text-stone-500 mt-1">TOTAL FRAME WT.</p>
                </div>
                <div className="bg-stone-900/60 p-4 rounded-2xl border border-stone-800">
                  <p className="text-2xl font-bold text-stone-100 font-mono">98%</p>
                  <p className="text-[9px] uppercase tracking-widest text-stone-500 mt-1">HEAT STORAGE RATE</p>
                </div>
                <div className="bg-stone-900/60 p-4 rounded-2xl border border-stone-800">
                  <p className="text-2xl font-bold text-stone-100 font-mono">IPX8</p>
                  <p className="text-[9px] uppercase tracking-widest text-stone-500 mt-1">WEATHER SEAL</p>
                </div>
              </div>
            </div>

            {/* Simulated Interactive VR HUD Console */}
            <div className="lg:col-span-5 bg-stone-950/80 rounded-3xl p-6 border border-stone-800 shadow-2xl space-y-4">
              <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <Cpu size={14} className="text-amber-500" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">P58 HUD Controller</span>
                </div>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                </div>
              </div>

              {/* HUD Active Metrics */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[10px] font-mono text-stone-500 mb-1">
                    <span>ALTITUDE PRESSURE LIMIT</span>
                    <span className="text-stone-300">4,800m</span>
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-600 to-amber-400 h-full w-[85%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-mono text-stone-500 mb-1">
                    <span>THERMAL EFFICIENCY</span>
                    <span className="text-stone-300">OPTIMAL</span>
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-600 to-amber-400 h-full w-[95%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-mono text-stone-500 mb-1">
                    <span>OXYGEN RATIO</span>
                    <span className="text-stone-300">21.4%</span>
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-600 to-amber-400 h-full w-[70%]"></div>
                  </div>
                </div>
              </div>

              {/* VR Activation Button */}
              <button 
                onClick={() => { playBeep(520, 0.3, "sine"); setVrMode(!vrMode); }}
                className={`w-full py-3 rounded-2xl font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${vrMode ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-stone-300 border border-stone-800 hover:border-amber-500/50 hover:text-white'}`}
              >
                <Eye size={14} className={vrMode ? "animate-pulse" : ""} />
                {vrMode ? 'DISENGAGE SURVIVAL HUD' : 'LAUNCH SURVIVAL HUD'}
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* -------------------- LIVE TOAST / MINI CART INTEGRATION -------------------- */}
      {showCartToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-stone-900 border border-amber-500/40 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-bounce">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                <Check size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Item Added to Expedition Bag</h4>
                <p className="text-[10px] text-stone-400 mt-1">Your item is prepared inside the current P58 session slot.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowCartToast(false)}
              className="text-stone-500 hover:text-stone-200"
            >
              <X size={14} />
            </button>
          </div>
          <div className="mt-3 pt-3 border-t border-stone-800 flex justify-between items-center text-[10px] font-mono">
            <span className="text-stone-500">Total Items: {cartCount}</span>
            <span className="text-amber-500 font-bold hover:underline cursor-pointer" onClick={() => { playBeep(440); setShowCartToast(false); }}>
              View Bag →
            </span>
          </div>
        </div>
      )}

      {/* -------------------- PREMIUM FOOTER -------------------- */}
      <footer className="bg-[#090706] border-t border-stone-900 pt-16 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Logo, Copyright & Socials */}
            <div className="space-y-4">
              <span className="text-4xl font-light tracking-tighter text-stone-100 font-sans">
                P58<span className="text-amber-500 text-xs font-mono font-bold tracking-widest ml-1">STUDIO</span>
              </span>
              <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
                Conceptual interface exploring high altitude and technical modular apparel design paradigms.
              </p>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white transition-colors cursor-pointer text-xs">TW</span>
                <span className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white transition-colors cursor-pointer text-xs">IG</span>
                <span className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white transition-colors cursor-pointer text-xs">YT</span>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 mb-4">Gear Ecosystem</h4>
              <ul className="space-y-2.5 text-xs text-stone-500">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Tactical Backpacks</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Stormproof Jackets</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Modular Harness Tech</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Scouting Boots</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 mb-4">Interface Space</h4>
              <ul className="space-y-2.5 text-xs text-stone-500">
                <li><a href="#" className="hover:text-amber-400 transition-colors">VR Sandbox Experience</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Durability Reports</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Altitude Simulation</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">F/W Concept Catalog</a></li>
              </ul>
            </div>

            {/* Col 4: Real-time system monitoring */}
            <div className="bg-stone-950/70 p-5 rounded-2xl border border-stone-900 space-y-3">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span>System Status</span>
              </div>
              <p className="text-[10px] text-stone-500 leading-relaxed">
                P58 environment and telemetry are running on WebVR frameworks. Colorways and pricing simulate active inventory metrics.
              </p>
              <div className="flex justify-between items-center text-[9px] font-mono text-amber-500">
                <span>VER: 2.50.3</span>
                <span>DESERT STAGE: OK</span>
              </div>
            </div>

          </div>

          <div className="border-t border-stone-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-mono text-stone-600">
              © 2026 PXDX Studio. All rights reserved. Generated Concept.
            </p>
            <div className="flex gap-4 text-[10px] font-mono text-stone-600">
              <a href="#" className="hover:text-stone-400">Terms of Service</a>
              <span>/</span>
              <a href="#" className="hover:text-stone-400">Privacy Policy</a>
              <span>/</span>
              <a href="#" className="hover:text-stone-400">Contact Protocol</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
4
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>forma studio. — Premium Architectural Furniture</title>
  <!-- Google Fonts: Plus Jakarta Sans for high-end tech-organic typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;1,400&display=swap" rel="stylesheet">
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            serif: ['"Playfair Display"', 'serif'],
          },
          colors: {
            brand: {
              50: '#f0f3ff',
              100: '#e1e7ff',
              200: '#cbd5ff',
              300: '#a3b4ff',
              400: '#7588ff',
              500: '#4354ff',
              600: '#2c35ff',
              700: '#1d22e6',
              800: '#191cbd',
              900: '#151799',
              950: '#0b0c54',
              deep: '#030822',
            }
          },
          boxShadow: {
            'glow-blue': '0 0 40px -5px rgba(59, 130, 246, 0.5)',
            'glow-inner': 'inset 0 2px 18px 0 rgba(255, 255, 255, 0.15)',
            'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }
        }
      }
    }
  </script>
  <style>
    /* Premium custom scrollbar */
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #030822;
    }
    ::-webkit-scrollbar-thumb {
      background: #1e3a8a;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #3b82f6;
    }
    
    /* Micro-animations and custom effects */
    @keyframes pulse-ring {
      0% { transform: scale(0.65); opacity: 1; }
      100% { transform: scale(1.4); opacity: 0; }
    }
    .pulsing-ring {
      animation: pulse-ring 2s cubic-bezier(0.215, 0.610, 0.355, 1) infinite;
    }
    
    /* Smooth theme transitions */
    .theme-transition {
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Glassmorphism class */
    .glass-panel {
      background: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
  </style>
</head>
<body class="bg-brand-deep text-slate-100 min-h-screen overflow-x-hidden font-sans antialiased selection:bg-blue-600 selection:text-white">

  <!-- Ambient background glow layers -->
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div id="ambient-glow-1" class="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-blue-600/25 rounded-full filter blur-[120px] theme-transition"></div>
    <div id="ambient-glow-2" class="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full filter blur-[100px] theme-transition"></div>
    <div class="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-600/15 rounded-full filter blur-[110px]"></div>
  </div>

  <div class="relative z-10 max-w-[1400px] mx-auto px-4 py-8 md:py-12">
    
    <!-- Toast Notification Container -->
    <div id="toast-box" class="fixed bottom-6 left-6 z-50 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none">
      <div class="glass-panel text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 border-blue-500/30">
        <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
        <p class="text-sm font-medium" id="toast-message">Customizer options loaded!</p>
      </div>
    </div>

    <!-- ================= INSPIRATION WORKSPACE CONTAINER ================= -->
    <!-- Mimics the smooth curved device wrapper with accurate design elements -->
    <main class="w-full rounded-[45px] md:rounded-[60px] bg-gradient-to-br from-[#0a1542] via-[#050b28] to-[#010312] p-2 md:p-6 shadow-premium relative border border-white/10 overflow-hidden">
      
      <!-- Top Organic Bezel Frame with Custom Contoured Wave Header -->
      <div class="relative w-full rounded-[38px] md:rounded-[48px] bg-gradient-to-b from-[#0e1d5e] to-[#040822] overflow-hidden theme-transition" id="hero-frame-bg">
        
        <!-- Glowing Ambient Lighting of Hero frame -->
        <div id="hero-spotlight" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-blue-500/30 rounded-full filter blur-[90px] pointer-events-none theme-transition"></div>

        <!-- Custom Wave Header with organic flow -->
        <header class="relative z-20 flex justify-between items-center px-6 md:px-12 pt-8">
          <!-- Left side Navbar Links -->
          <nav class="hidden lg:flex items-center space-x-8 text-xs font-semibold tracking-wider uppercase text-slate-300">
            <a href="#hero" class="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/15 transition">home</a>
            <a href="#philosophy" class="hover:text-white transition">about us</a>
            <a href="#faq" class="hover:text-white transition">faqs</a>
          </nav>

          <!-- Middle Organic Wave Logo Container -->
          <div class="absolute left-1/2 -translate-x-1/2 -top-1 bg-transparent flex justify-center z-30">
            <!-- This recreates the elegant fluid-down logo bubble of the mockup -->
            <div class="bg-white px-8 pb-3 pt-4 rounded-b-[26px] shadow-lg flex items-center justify-center border-x border-b border-white/10">
              <span class="font-extrabold text-blue-900 text-lg md:text-xl tracking-tight select-none">forma studio<span class="text-blue-600">.</span></span>
            </div>
          </div>

          <!-- Right side Navbar Actions -->
          <div class="flex items-center space-x-4 ml-auto lg:ml-0">
            <nav class="hidden lg:flex items-center space-x-8 text-xs font-semibold tracking-wider uppercase text-slate-300 mr-6">
              <a href="#collections" class="hover:text-white transition">products</a>
              <a href="#studio-customizer" class="hover:text-white transition">team</a>
            </nav>
            
            <button class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center border border-white/10 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.637 10.637Z" />
              </svg>
            </button>
            <button class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center border border-white/10 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </button>
            <button onclick="toggleConsultation()" class="bg-white text-blue-950 font-bold px-5 py-2 rounded-full text-xs shadow-md hover:bg-brand-100 transition flex items-center space-x-2">
              <span>Contact</span>
              <div class="w-5 h-5 rounded-full bg-blue-900/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3 text-blue-900">
                  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.18.282-.11.43a14.54 14.54 0 0 0 6.708 6.708c.148.07.329.024.43-.11l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        </header>

        <!-- ================= HERO SECTION ================= -->
        <div id="hero" class="relative min-h-[580px] md:min-h-[660px] flex flex-col justify-between px-6 md:px-12 py-10 z-10">
          
          <!-- Outer Grid Container mapping the precise layout -->
          <div class="grid grid-cols-12 gap-4 items-center my-auto relative w-full">
            
            <!-- GIANT BACKGROUND BRAND TEXT: "for ma" -->
            <!-- Carefully styled to display behind the chair with correct depth layering -->
            <div class="absolute inset-0 flex justify-between items-center pointer-events-none select-none z-0">
              <h1 class="text-[13vw] font-black tracking-tighter text-white opacity-15 leading-none transition-all duration-700 hover:opacity-20">
                for
              </h1>
              <div class="text-right">
                <!-- Small floating text above "ma" -->
                <p class="text-xs md:text-sm tracking-[0.3em] font-medium text-white/50 mb-[-1vw] mr-2">STUDIO.</p>
                <h1 class="text-[13vw] font-black tracking-tighter text-white opacity-15 leading-none transition-all duration-700 hover:opacity-20">
                  ma
                </h1>
              </div>
            </div>

            <!-- Left Description Column -->
            <div class="col-span-12 lg:col-span-4 z-10 text-left space-y-6 lg:max-w-md">
              <p class="text-sm text-blue-200/80 font-normal leading-relaxed">
                We create designer chairs that don't just complement an interior - they become its accent.
              </p>
              <p class="text-xs text-blue-300/60 leading-relaxed font-light">
                Each product is a combination of architectural form, tactile pleasure and visual harmony.
              </p>
              <div class="pt-2">
                <a href="#collections" class="group inline-flex items-center space-x-3 bg-white text-blue-950 font-bold px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:bg-slate-50 transition transform active:scale-95">
                  <span class="text-sm">View All Collections</span>
                  <span class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 text-blue-900">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <!-- Center Dynamic Interactive Chair Container -->
            <div class="col-span-12 lg:col-span-4 flex justify-center items-center relative min-h-[340px] md:min-h-[440px] z-10">
              
              <!-- Hotspot 1: Upholstery (Premium microfibre) -->
              <div class="absolute top-1/4 left-[35%] z-20 group">
                <button class="w-5 h-5 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white font-bold border border-white/60 relative focus:outline-none transition hover:scale-110">
                  <span class="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 pulsing-ring"></span>
                  <span class="text-[10px] relative">+</span>
                </button>
                <!-- Popover -->
                <div class="absolute left-6 top-1/2 -translate-y-1/2 w-48 p-3 rounded-xl glass-panel text-left opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-xl z-30">
                  <p class="text-xs font-bold text-white mb-0.5">Premium Microfiber</p>
                  <p class="text-[10px] text-blue-200">Soft, highly durable, water-resistant and easy to clean.</p>
                </div>
              </div>

              <!-- Hotspot 2: Structure (Steel frame) -->
              <div class="absolute bottom-1/4 left-[30%] z-20 group">
                <button class="w-5 h-5 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white font-bold border border-white/60 relative focus:outline-none transition hover:scale-110">
                  <span class="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 pulsing-ring"></span>
                  <span class="text-[10px] relative">+</span>
                </button>
                <!-- Popover -->
                <div class="absolute left-6 top-1/2 -translate-y-1/2 w-48 p-3 rounded-xl glass-panel text-left opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-xl z-30">
                  <p class="text-xs font-bold text-white mb-0.5">Ergonomic Structure</p>
                  <p class="text-[10px] text-blue-200">Cast internal steel structure designed for perfect posture support.</p>
                </div>
              </div>

              <!-- Hotspot 3: Cushioning (High resiliency foam) -->
              <div class="absolute top-[52%] right-[22%] z-20 group">
                <button class="w-5 h-5 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white font-bold border border-white/60 relative focus:outline-none transition hover:scale-110">
                  <span class="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 pulsing-ring"></span>
                  <span class="text-[10px] relative">+</span>
                </button>
                <!-- Popover -->
                <div class="absolute right-6 top-1/2 -translate-y-1/2 w-48 p-3 rounded-xl glass-panel text-left opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-xl z-30">
                  <p class="text-xs font-bold text-white mb-0.5">Resilient Foam</p>
                  <p class="text-[10px] text-blue-200">Retains structural depth and plush density after millions of compressions.</p>
                </div>
              </div>

              <!-- Highly-detailed vector SVG of the sculptural "Forma Chair" -->
              <!-- The gradients are controlled by classes tied to state for smooth color changing -->
              <div class="relative w-full max-w-[340px] md:max-w-[420px] transition-transform duration-500 hover:scale-105 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]">
                <svg id="forma-chair-svg" viewBox="0 0 500 500" class="w-full h-auto transition-all duration-700" xmlns="http://www.w3.org/2000/svg">
                  <!-- Gradients definition -->
                  <defs>
                    <!-- Blue theme gradients -->
                    <linearGradient id="blue-backrest" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#2563eb" />
                      <stop offset="50%" stop-color="#1d4ed8" />
                      <stop offset="100%" stop-color="#1e3a8a" />
                    </linearGradient>
                    <linearGradient id="blue-seat" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#3b82f6" />
                      <stop offset="100%" stop-color="#1d4ed8" />
                    </linearGradient>
                    <linearGradient id="blue-leg-left" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#1e40af" />
                      <stop offset="100%" stop-color="#172554" />
                    </linearGradient>
                    <linearGradient id="blue-leg-right" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#1d4ed8" />
                      <stop offset="100%" stop-color="#1e3a8a" />
                    </linearGradient>

                    <!-- Green theme gradients -->
                    <linearGradient id="green-backrest" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#10b981" />
                      <stop offset="50%" stop-color="#059669" />
                      <stop offset="100%" stop-color="#064e3b" />
                    </linearGradient>
                    <linearGradient id="green-seat" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#34d399" />
                      <stop offset="100%" stop-color="#059669" />
                    </linearGradient>
                    <linearGradient id="green-leg-left" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#047857" />
                      <stop offset="100%" stop-color="#022c22" />
                    </linearGradient>
                    <linearGradient id="green-leg-right" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#059669" />
                      <stop offset="100%" stop-color="#064e3b" />
                    </linearGradient>

                    <!-- Purple theme gradients -->
                    <linearGradient id="purple-backrest" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#8b5cf6" />
                      <stop offset="50%" stop-color="#7c3aed" />
                      <stop offset="100%" stop-color="#4c1d95" />
                    </linearGradient>
                    <linearGradient id="purple-seat" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#a78bfa" />
                      <stop offset="100%" stop-color="#7c3aed" />
                    </linearGradient>
                    <linearGradient id="purple-leg-left" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#6d28d9" />
                      <stop offset="100%" stop-color="#2e1065" />
                    </linearGradient>
                    <linearGradient id="purple-leg-right" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#7c3aed" />
                      <stop offset="100%" stop-color="#4c1d95" />
                    </linearGradient>

                    <!-- Red/Crimson theme gradients -->
                    <linearGradient id="red-backrest" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#ef4444" />
                      <stop offset="50%" stop-color="#dc2626" />
                      <stop offset="100%" stop-color="#7f1d1d" />
                    </linearGradient>
                    <linearGradient id="red-seat" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#f87171" />
                      <stop offset="100%" stop-color="#dc2626" />
                    </linearGradient>
                    <linearGradient id="red-leg-left" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#b91c1c" />
                      <stop offset="100%" stop-color="#450a0a" />
                    </linearGradient>
                    <linearGradient id="red-leg-right" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#dc2626" />
                      <stop offset="100%" stop-color="#7f1d1d" />
                    </linearGradient>

                    <radialGradient id="chair-shadow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stop-color="#000000" stop-opacity="0.6"/>
                      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
                    </radialGradient>
                  </defs>

                  <!-- Cast Soft Shadow -->
                  <ellipse cx="250" cy="430" rx="160" ry="25" fill="url(#chair-shadow)" />

                  <g id="chair-paths">
                    <!-- Left Support Leg pillar (thick sculptural curved base) -->
                    <path d="M 180 280 C 180 380, 200 420, 210 420 C 220 420, 230 380, 230 280 Z" fill="url(#blue-leg-left)" class="theme-transition" id="svg-leg-l" />

                    <!-- Right Support Leg pillar (sculptural curved base) -->
                    <path d="M 270 280 C 270 380, 280 420, 290 420 C 300 420, 320 380, 320 280 Z" fill="url(#blue-leg-right)" class="theme-transition" id="svg-leg-r" />

                    <!-- Beautiful round cushion seat (sculptured torus shape) -->
                    <path d="M 160 250 C 160 210, 340 210, 340 250 C 340 290, 160 290, 160 250 Z" fill="url(#blue-seat)" class="theme-transition" id="svg-seat-top" />
                    <path d="M 160 250 C 160 290, 340 290, 340 250 C 340 310, 160 310, 160 250 Z" fill="url(#blue-leg-left)" class="theme-transition" id="svg-seat-thickness" opacity="0.85" />

                    <!-- Backrest structure (hollow rounded arc enclosing the back of seat) -->
                    <path d="M 150 250 C 150 120, 350 120, 350 250 C 350 210, 320 150, 250 150 C 180 150, 150 210, 150 250 Z" fill="url(#blue-backrest)" class="theme-transition" id="svg-backrest-front" />
                    <!-- Outer volumetric backrest shell -->
                    <path d="M 140 250 C 140 100, 360 100, 360 250 C 350 250, 350 120, 250 120 C 150 120, 150 250, 140 250 Z" fill="url(#blue-leg-left)" class="theme-transition" id="svg-backrest-back" />
                  </g>
                </svg>
              </div>

              <!-- Small establishment text -->
              <p class="absolute bottom-4 text-[9px] uppercase tracking-widest text-white/30">Since 2018</p>
            </div>

            <!-- Right Interactive Column (Color Selector and Consultation CTA) -->
            <div class="col-span-12 lg:col-span-4 flex flex-col justify-between items-center lg:items-end space-y-8 z-10">
              
              <!-- Color picker matching precisely -->
              <div class="glass-panel rounded-full px-5 py-3 flex items-center space-x-4">
                <span class="text-xs text-blue-200 font-medium tracking-wide">Choose your color</span>
                <div class="flex items-center space-x-2.5">
                  <!-- Royal Blue active -->
                  <button onclick="changeTheme('blue')" id="btn-color-blue" class="w-5 h-5 rounded-full bg-blue-600 border-2 border-white transform scale-125 hover:scale-125 transition-all duration-300 shadow-md shadow-blue-500/50"></button>
                  <!-- Moss Green -->
                  <button onclick="changeTheme('green')" id="btn-color-green" class="w-5 h-5 rounded-full bg-emerald-600 border border-white/25 hover:scale-125 transition-all duration-300"></button>
                  <!-- Deep Purple -->
                  <button onclick="changeTheme('purple')" id="btn-color-purple" class="w-5 h-5 rounded-full bg-violet-600 border border-white/25 hover:scale-125 transition-all duration-300"></button>
                  <!-- Crimson Red -->
                  <button onclick="changeTheme('red')" id="btn-color-red" class="w-5 h-5 rounded-full bg-rose-600 border border-white/25 hover:scale-125 transition-all duration-300"></button>
                </div>
              </div>

              <!-- Consultation Card (Dynamic Glassmorphic CTA) -->
              <div class="glass-panel p-5 rounded-3xl w-full max-w-[280px] shadow-2xl relative border border-white/10 hover:border-white/20 transition-all duration-500 group overflow-hidden">
                <!-- Decorative mini-glow inside card -->
                <div class="absolute -right-10 -bottom-10 w-24 h-24 bg-blue-500/20 rounded-full filter blur-xl group-hover:bg-blue-500/30 transition-all duration-500"></div>
                
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h4 class="text-sm font-bold text-white tracking-wide">Get a Free Consultation</h4>
                    <p class="text-[10px] text-blue-200/70 mt-1">Fill out the form and our specialist will contact you shortly.</p>
                  </div>
                  <div class="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 flex-shrink-0 bg-gradient-to-tr from-blue-900 to-indigo-950">
                    <!-- Premium AI/Human Agent Avatar Placeholder -->
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120" alt="Consultant" class="w-full h-full object-cover">
                  </div>
                </div>

                <button onclick="toggleConsultation()" class="w-full bg-white text-blue-950 hover:bg-brand-100 font-bold py-2.5 px-4 rounded-xl text-xs flex justify-between items-center transition-all duration-300">
                  <span>Request a Call</span>
                  <div class="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-2.5 h-2.5 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </button>
              </div>

            </div>

          </div>

          <!-- Bottom bar indicator inside the hero image frame -->
          <div class="relative w-full flex justify-between items-center mt-10 pt-4 border-t border-white/5 z-10">
            <div class="flex space-x-3">
              <a href="#" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 flex items-center justify-center transition border border-white/10">
                <svg class="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 flex items-center justify-center transition border border-white/10">
                <svg class="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 flex items-center justify-center transition border border-white/10">
                <svg class="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>

            <!-- Absolute middle contoured scroll down indicator -->
            <div class="absolute left-1/2 -translate-x-1/2 -bottom-[18px] z-20">
              <a href="#philosophy" class="w-10 h-10 rounded-full bg-white text-blue-950 flex items-center justify-center shadow-md hover:scale-110 hover:bg-slate-100 transition duration-300 border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4 animate-bounce">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </a>
            </div>

            <div class="text-[10px] uppercase tracking-widest text-white/40 font-mono">
              Art. No. 50920
            </div>
          </div>

        </div>

        <!-- Carousel Left & Right navigation chevrons styled exactly as in the mock frame -->
        <button class="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center border border-white/10 text-white z-20 transition" onclick="triggerPrevCarousel()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center border border-white/10 text-white z-20 transition" onclick="triggerNextCarousel()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>

      <!-- ================= POPUP / INTERACTIVE MODAL WIZARD ================= -->
      <!-- Appears beautifully when 'Contact' or 'Request a Call' is tapped -->
      <div id="consultation-modal" class="fixed inset-0 bg-blue-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none transition-all duration-300">
        <div class="glass-panel w-full max-w-lg rounded-3xl p-6 md:p-8 relative border border-white/15 shadow-glow-blue max-h-[90vh] overflow-y-auto">
          <!-- Close button -->
          <button onclick="toggleConsultation()" class="absolute right-4 top-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Step 1: Form -->
          <div id="modal-step-1" class="space-y-6">
            <div class="text-center">
              <span class="bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Forma Studio Service</span>
              <h3 class="text-2xl font-extrabold text-white mt-3">Book Design Consultation</h3>
              <p class="text-sm text-blue-200/70 mt-1">Select an available expert & time slot for architectural planning.</p>
            </div>

            <!-- Agent selector -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">Select Interior Specialist</label>
              <div class="grid grid-cols-3 gap-3">
                <label class="cursor-pointer">
                  <input type="radio" name="designer" value="Elena" class="peer sr-only" checked>
                  <div class="peer-checked:border-blue-400 peer-checked:bg-blue-500/10 p-2.5 rounded-2xl border border-white/10 text-center transition hover:bg-white/5 bg-white/5">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120" class="w-10 h-10 rounded-full mx-auto object-cover mb-2" alt="">
                    <p class="text-[11px] font-bold text-white leading-tight">Elena Rostova</p>
                    <p class="text-[9px] text-blue-300/80">Senior Architect</p>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="designer" value="Marcus" class="peer sr-only">
                  <div class="peer-checked:border-blue-400 peer-checked:bg-blue-500/10 p-2.5 rounded-2xl border border-white/10 text-center transition hover:bg-white/5">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=120" class="w-10 h-10 rounded-full mx-auto object-cover mb-2" alt="">
                    <p class="text-[11px] font-bold text-white leading-tight">Marcus Vance</p>
                    <p class="text-[9px] text-blue-300/80">Product Sculptor</p>
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="designer" value="Sophia" class="peer sr-only">
                  <div class="peer-checked:border-blue-400 peer-checked:bg-blue-500/10 p-2.5 rounded-2xl border border-white/10 text-center transition hover:bg-white/5">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120" class="w-10 h-10 rounded-full mx-auto object-cover mb-2" alt="">
                    <p class="text-[11px] font-bold text-white leading-tight">Sophia Lind</p>
                    <p class="text-[9px] text-blue-300/80">Color Consultant</p>
                  </div>
                </label>
              </div>
            </div>

            <form id="consultationForm" onsubmit="submitConsultation(event)" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">Your Name</label>
                  <input type="text" required placeholder="Alexander" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-400 focus:bg-white/10 transition">
                </div>
                <div>
                  <label class="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">Phone Number</label>
                  <input type="tel" required placeholder="+1 (555) 019-2831" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-400 focus:bg-white/10 transition">
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">Preferred Date & Session Time</label>
                <div class="grid grid-cols-3 gap-2">
                  <button type="button" onclick="selectTime(this)" class="time-slot-btn py-2 text-xs font-medium rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition">Mon 10:00 AM</button>
                  <button type="button" onclick="selectTime(this)" class="time-slot-btn py-2 text-xs font-medium rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition">Tue 02:30 PM</button>
                  <button type="button" onclick="selectTime(this)" class="time-slot-btn py-2 text-xs font-medium rounded-xl border border-blue-400 bg-blue-500/20 text-white transition" id="default-slot">Wed 04:00 PM</button>
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">Message / Space Specifics (Optional)</label>
                <textarea rows="3" placeholder="I'm planning a lounge renovation with organic minimalist themes..." class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-400 focus:bg-white/10 transition resize-none"></textarea>
              </div>

              <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl text-sm shadow-lg shadow-blue-500/30 transition-all transform active:scale-95 flex items-center justify-center space-x-2">
                <span>Request Confirmed Call</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-white">
                  <path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.18.282-.11.43a14.54 14.54 0 0 0 6.708 6.708c.148.07.329.024.43-.11l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" />
                </svg>
              </button>
            </form>
          </div>

          <!-- Step 2: Success Animation -->
          <div id="modal-step-2" class="hidden text-center py-8 space-y-6">
            <div class="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div class="space-y-2">
              <h4 class="text-2xl font-bold text-white">Consultation Requested!</h4>
              <p class="text-sm text-blue-200/80 max-w-sm mx-auto">Thank you. Your chosen specialist will call you back at the designated time slot to review structural designs.</p>
            </div>
            <div class="glass-panel p-4 rounded-2xl inline-block text-left text-xs text-blue-200">
              <p class="font-bold text-white">📅 Confirmed Slot:</p>
              <p class="mt-1 font-mono text-emerald-400" id="confirmed-slot-text">Wed 04:00 PM</p>
            </div>
            <button onclick="toggleConsultation()" class="bg-white/10 hover:bg-white/15 text-white font-bold py-2.5 px-6 rounded-xl text-xs border border-white/10 transition">
              Close Window
            </button>
          </div>
        </div>
      </div>

      <!-- ================= EXTENDED SECTION: PHILOSOPHY ================= -->
      <!-- Maintains exact theme with deep organic design styles -->
      <section id="philosophy" class="px-6 md:px-12 py-16 md:py-24 border-t border-white/5 mt-6 relative overflow-hidden">
        <div class="absolute right-0 top-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
        
        <div class="grid grid-cols-12 gap-8 items-center">
          <!-- Text Segment -->
          <div class="col-span-12 lg:col-span-5 space-y-6">
            <div class="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <span>DESIGN DIALOGUE</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Where pure architecture meets extreme comfort.
            </h2>
            <p class="text-sm text-blue-200/80 leading-relaxed font-light">
              We operate under the manifesto that furniture is functional sculpture. The physical forms we select to inhabit our interior spaces directly influence our subconscious sense of structural volume, calmness, and visual alignment.
            </p>
            
            <div class="grid grid-cols-2 gap-6 pt-4">
              <div class="border-l-2 border-blue-500/40 pl-4 space-y-1">
                <span class="text-3xl font-bold text-white tracking-tight">100%</span>
                <p class="text-xs text-blue-300">Bio-organic microfibers and natural solid core components.</p>
              </div>
              <div class="border-l-2 border-blue-500/40 pl-4 space-y-1">
                <span class="text-3xl font-bold text-white tracking-tight">0.1mm</span>
                <p class="text-xs text-blue-300">Uncompromising dimensional accuracy across all custom layouts.</p>
              </div>
            </div>
          </div>

          <!-- Video/Interactive Mockup Visual Segment -->
          <div class="col-span-12 lg:col-span-7">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <!-- Animated overlay glow -->
              <div class="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent z-10 transition-opacity group-hover:opacity-70"></div>
              
              <!-- Placeholder styled premium background imagery (Modern minimal architectural interior) -->
              <div class="relative h-[280px] md:h-[380px] w-full bg-gradient-to-br from-[#0c1844] to-[#040822] overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" alt="Architectural space" class="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700">
                
                <!-- Pulsing dynamic play button -->
                <button onclick="playSimulation()" class="absolute z-20 w-16 h-16 rounded-full bg-white text-blue-950 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition duration-300 border border-white/30 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1 text-blue-950">
                    <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                  </svg>
                </button>

                <div class="absolute bottom-6 left-6 z-20 text-left">
                  <span class="text-[10px] text-emerald-400 font-mono tracking-widest uppercase">Video Tour</span>
                  <p class="text-sm font-bold text-white mt-1">Sculptural Form: Inside the Design Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= EXTENDED SECTION: CURATED COLLECTIONS ================= -->
      <!-- Grid carousel of complementary architectural models -->
      <section id="collections" class="px-6 md:px-12 py-16 border-t border-white/5 relative overflow-hidden">
        <div class="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div class="space-y-4">
            <div class="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <span>OUR PORTFOLIO</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-white">The Forma Lineup</h2>
            <p class="text-xs md:text-sm text-blue-200/60 max-w-md">Our signature collection represents the structural peaks of high-density lounge ergonomics.</p>
          </div>
          <!-- Category pills -->
          <div class="flex flex-wrap gap-2 mt-6 md:mt-0">
            <button class="bg-white text-blue-950 text-xs font-bold px-4 py-2 rounded-full shadow-md transition">All Chairs</button>
            <button class="bg-white/5 text-blue-200 text-xs font-bold px-4 py-2 rounded-full hover:bg-white/10 border border-white/10 transition">Minimalist</button>
            <button class="bg-white/5 text-blue-200 text-xs font-bold px-4 py-2 rounded-full hover:bg-white/10 border border-white/10 transition">Bold Contrast</button>
          </div>
        </div>

        <!-- Collections Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Product Card 1 -->
          <div class="glass-panel rounded-[32px] p-5 border border-white/10 relative overflow-hidden hover:border-blue-500/30 transition-all duration-500 group">
            <div class="relative h-[240px] rounded-2xl bg-gradient-to-br from-[#0e1d5e] to-[#040822] flex items-center justify-center overflow-hidden mb-4">
              <!-- Visual ambient sphere inside card -->
              <div class="absolute w-32 h-32 bg-blue-500/20 rounded-full filter blur-xl group-hover:bg-blue-500/40 transition duration-500"></div>
              
              <svg viewBox="0 0 500 500" class="w-44 h-auto transform group-hover:scale-110 transition duration-500">
                <ellipse cx="250" cy="430" rx="140" ry="20" fill="black" opacity="0.4" />
                <!-- Modern armchair SVG representation -->
                <path d="M 170 300 L 190 420 M 330 300 L 310 420" stroke="#3b82f6" stroke-width="15" stroke-linecap="round" />
                <path d="M 150 250 C 150 180, 350 180, 350 250 C 350 310, 150 310, 150 250 Z" fill="#2563eb" />
                <path d="M 140 230 C 140 150, 360 150, 360 230" stroke="#1d4ed8" stroke-width="25" stroke-linecap="round" fill="none" />
              </svg>

              <!-- Quick tags -->
              <span class="absolute top-4 left-4 bg-blue-500 text-white font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full">Best Seller</span>
            </div>

            <div class="flex justify-between items-start mb-3">
              <div>
                <h3 class="text-base font-bold text-white group-hover:text-blue-300 transition">Forma Lounge One</h3>
                <p class="text-xs text-blue-300/60 mt-0.5">Microfiber Royal Classic</p>
              </div>
              <span class="text-base font-extrabold text-white tracking-tight">$1,450</span>
            </div>

            <div class="flex items-center justify-between pt-3 border-t border-white/5">
              <div class="flex space-x-1.5">
                <span class="w-3.5 h-3.5 rounded-full bg-blue-600 border border-white/20"></span>
                <span class="w-3.5 h-3.5 rounded-full bg-emerald-600 border border-white/20"></span>
                <span class="w-3.5 h-3.5 rounded-full bg-rose-600 border border-white/20"></span>
              </div>
              <button onclick="openCustomizerWith('Lounge One', 'blue')" class="text-xs text-white font-bold bg-white/5 group-hover:bg-blue-500 group-hover:text-white px-4 py-2 rounded-xl border border-white/10 group-hover:border-transparent transition-all duration-300">
                Customize Shape
              </button>
            </div>
          </div>

          <!-- Product Card 2 -->
          <div class="glass-panel rounded-[32px] p-5 border border-white/10 relative overflow-hidden hover:border-blue-500/30 transition-all duration-500 group">
            <div class="relative h-[240px] rounded-2xl bg-gradient-to-br from-[#0e1d5e] to-[#040822] flex items-center justify-center overflow-hidden mb-4">
              <div class="absolute w-32 h-32 bg-violet-500/20 rounded-full filter blur-xl group-hover:bg-violet-500/40 transition duration-500"></div>
              
              <svg viewBox="0 0 500 500" class="w-44 h-auto transform group-hover:scale-110 transition duration-500">
                <ellipse cx="250" cy="430" rx="140" ry="20" fill="black" opacity="0.4" />
                <path d="M 180 300 L 160 420 M 320 300 L 340 420" stroke="#7c3aed" stroke-width="15" stroke-linecap="round" />
                <path d="M 180 230 C 180 180, 320 180, 320 230 C 320 310, 180 310, 180 230 Z" fill="#8b5cf6" />
                <path d="M 160 210 C 160 140, 340 140, 340 210" stroke="#6d28d9" stroke-width="25" stroke-linecap="round" fill="none" />
              </svg>

              <span class="absolute top-4 left-4 bg-violet-600 text-white font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full">Sculptural</span>
            </div>

            <div class="flex justify-between items-start mb-3">
              <div>
                <h3 class="text-base font-bold text-white group-hover:text-violet-300 transition">Forma Curve Segment</h3>
                <p class="text-xs text-blue-300/60 mt-0.5">Fluted Armless Concept</p>
              </div>
              <span class="text-base font-extrabold text-white tracking-tight">$1,890</span>
            </div>

            <div class="flex items-center justify-between pt-3 border-t border-white/5">
              <div class="flex space-x-1.5">
                <span class="w-3.5 h-3.5 rounded-full bg-violet-600 border border-white/20"></span>
                <span class="w-3.5 h-3.5 rounded-full bg-blue-600 border border-white/20"></span>
                <span class="w-3.5 h-3.5 rounded-full bg-slate-600 border border-white/20"></span>
              </div>
              <button onclick="openCustomizerWith('Curve Segment', 'purple')" class="text-xs text-white font-bold bg-white/5 group-hover:bg-blue-500 group-hover:text-white px-4 py-2 rounded-xl border border-white/10 group-hover:border-transparent transition-all duration-300">
                Customize Shape
              </button>
            </div>
          </div>

          <!-- Product Card 3 -->
          <div class="glass-panel rounded-[32px] p-5 border border-white/10 relative overflow-hidden hover:border-blue-500/30 transition-all duration-500 group">
            <div class="relative h-[240px] rounded-2xl bg-gradient-to-br from-[#0e1d5e] to-[#040822] flex items-center justify-center overflow-hidden mb-4">
              <div class="absolute w-32 h-32 bg-emerald-500/20 rounded-full filter blur-xl group-hover:bg-emerald-500/40 transition duration-500"></div>
              
              <svg viewBox="0 0 500 500" class="w-44 h-auto transform group-hover:scale-110 transition duration-500">
                <ellipse cx="250" cy="430" rx="140" ry="20" fill="black" opacity="0.4" />
                <path d="M 210 280 L 210 420 M 290 280 L 290 420" stroke="#059669" stroke-width="18" stroke-linecap="round" />
                <path d="M 160 250 C 160 220, 340 220, 340 250 C 340 290, 160 290, 160 250 Z" fill="#10b981" />
                <path d="M 180 180 C 180 140, 320 140, 320 180 C 320 250, 180 250, 180 180 Z" fill="#047857" opacity="0.9"/>
              </svg>

              <span class="absolute top-4 left-4 bg-emerald-600 text-white font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full">Eco Felt</span>
            </div>

            <div class="flex justify-between items-start mb-3">
              <div>
                <h3 class="text-base font-bold text-white group-hover:text-emerald-300 transition">Forma Pod Cushion</h3>
                <p class="text-xs text-blue-300/60 mt-0.5">High Density Posture Core</p>
              </div>
              <span class="text-base font-extrabold text-white tracking-tight">$1,200</span>
            </div>

            <div class="flex items-center justify-between pt-3 border-t border-white/5">
              <div class="flex space-x-1.5">
                <span class="w-3.5 h-3.5 rounded-full bg-emerald-600 border border-white/20"></span>
                <span class="w-3.5 h-3.5 rounded-full bg-amber-600 border border-white/20"></span>
                <span class="w-3.5 h-3.5 rounded-full bg-rose-600 border border-white/20"></span>
              </div>
              <button onclick="openCustomizerWith('Pod Cushion', 'green')" class="text-xs text-white font-bold bg-white/5 group-hover:bg-blue-500 group-hover:text-white px-4 py-2 rounded-xl border border-white/10 group-hover:border-transparent transition-all duration-300">
                Customize Shape
              </button>
            </div>
          </div>

        </div>
      </section>

      <!-- ================= EXTENDED SECTION: CUSTOMIZER WORKSPACE ================= -->
      <!-- A fully tactile, visual dashboard playground where values modify a live design model -->
      <section id="studio-customizer" class="px-6 md:px-12 py-16 border-t border-white/5 relative overflow-hidden">
        <div class="absolute right-0 bottom-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>
        
        <div class="text-center space-y-4 mb-12">
          <div class="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            <span>TACTILE LAB</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Interactive Customizer</h2>
          <p class="text-xs md:text-sm text-blue-200/60 max-w-lg mx-auto">Tweak dimensional curves, surface microfibers, and volumetric base ratios directly in your browser.</p>
        </div>

        <div class="grid grid-cols-12 gap-8 items-stretch">
          
          <!-- Controls Pane -->
          <div class="col-span-12 lg:col-span-5 glass-panel p-6 md:p-8 rounded-[32px] border border-white/10 flex flex-col justify-between">
            <div class="space-y-6">
              <div>
                <span class="text-xs font-bold uppercase tracking-widest text-blue-300 font-mono">Editing Configuration</span>
                <h3 class="text-xl font-bold text-white mt-1" id="config-model-title">Forma Lounge One</h3>
              </div>

              <!-- Color Modifier -->
              <div class="space-y-3">
                <label class="block text-xs font-bold text-blue-200 uppercase tracking-wider">Accent Texture Tone</label>
                <div class="flex items-center space-x-4 bg-white/5 p-3 rounded-2xl border border-white/5">
                  <button onclick="setCustomizerTone('blue')" class="w-8 h-8 rounded-full bg-blue-600 border-2 border-white/80 shadow-md transform hover:scale-110 transition" title="Royal Blue"></button>
                  <button onclick="setCustomizerTone('green')" class="w-8 h-8 rounded-full bg-emerald-600 border border-white/20 transform hover:scale-110 transition" title="Moss Green"></button>
                  <button onclick="setCustomizerTone('purple')" class="w-8 h-8 rounded-full bg-violet-600 border border-white/20 transform hover:scale-110 transition" title="Indigo Night"></button>
                  <button onclick="setCustomizerTone('red')" class="w-8 h-8 rounded-full bg-rose-600 border border-white/20 transform hover:scale-110 transition" title="Crimson Core"></button>
                  <span class="text-xs text-blue-200 font-medium ml-auto" id="customizer-tone-name">Majestic Royal Blue</span>
                </div>
              </div>

              <!-- Backrest height slider -->
              <div class="space-y-2">
                <div class="flex justify-between text-xs font-bold text-blue-200 uppercase">
                  <span>Backrest Volume Span</span>
                  <span id="backrest-val" class="font-mono text-blue-400">100%</span>
                </div>
                <input type="range" min="80" max="130" value="100" class="w-full accent-blue-500 bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer" id="slider-backrest" oninput="updateCustomizerDimensions()">
              </div>

              <!-- Leg Height Slider -->
              <div class="space-y-2">
                <div class="flex justify-between text-xs font-bold text-blue-200 uppercase">
                  <span>Sculptural Leg Depth</span>
                  <span id="leg-val" class="font-mono text-blue-400">100%</span>
                </div>
                <input type="range" min="70" max="140" value="100" class="w-full accent-blue-500 bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer" id="slider-leg" oninput="updateCustomizerDimensions()">
              </div>

              <!-- Cushion density selector -->
              <div class="space-y-2">
                <label class="block text-xs font-bold text-blue-200 uppercase tracking-wider">Cushion Core Rigidity</label>
                <div class="grid grid-cols-3 gap-2">
                  <button onclick="selectRigidity('Soft', this)" class="rigidity-btn py-2 text-xs font-bold rounded-xl border border-white/10 bg-white/5 text-blue-200 hover:bg-white/10 transition">Soft Lounge</button>
                  <button onclick="selectRigidity('Medium', this)" class="rigidity-btn py-2 text-xs font-bold rounded-xl border border-blue-500 bg-blue-500/20 text-white transition">Medium Firm</button>
                  <button onclick="selectRigidity('Firm', this)" class="rigidity-btn py-2 text-xs font-bold rounded-xl border border-white/10 bg-white/5 text-blue-200 hover:bg-white/10 transition">Architectural</button>
                </div>
              </div>
            </div>

            <!-- Order / Estimate CTA inside customizer -->
            <div class="mt-8 pt-6 border-t border-white/5 space-y-4">
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-[10px] text-blue-200/50 uppercase tracking-widest font-mono">Estimated Cost</p>
                  <p class="text-2xl font-black text-white" id="customizer-price">$1,450</p>
                </div>
                <span class="text-xs text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20 flex items-center space-x-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Free Shipping</span>
                </span>
              </div>
              <button onclick="simulateOrder()" class="w-full bg-white hover:bg-brand-50 text-blue-950 font-extrabold py-3.5 rounded-2xl text-sm shadow-xl transition transform active:scale-95 flex items-center justify-center space-x-2">
                <span>Save Design & Reserve Unit</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-blue-950">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Dynamic Rendering Screen Segment -->
          <div class="col-span-12 lg:col-span-7 rounded-[32px] bg-gradient-to-br from-[#0e1d5e] to-[#040822] border border-white/10 p-6 md:p-8 flex items-center justify-center relative min-h-[360px] md:min-h-[460px] overflow-hidden">
            <!-- Glowing accent coordinate lines behind model -->
            <div class="absolute inset-0 opacity-15 pointer-events-none">
              <div class="absolute top-1/2 left-0 right-0 h-px bg-blue-400"></div>
              <div class="absolute left-1/2 top-0 bottom-0 w-px bg-blue-400"></div>
              <div class="absolute inset-8 border border-dashed border-blue-400 rounded-full"></div>
            </div>

            <div class="absolute top-4 left-6 text-left">
              <span class="text-[10px] text-blue-300 font-mono tracking-widest uppercase">Live Coordinate Map</span>
              <p class="text-xs text-white/50 mt-1" id="coordinate-text">X-Span: 100% | Y-Span: 100%</p>
            </div>

            <!-- SVG model linked directly to slider scales via CSS transformations -->
            <div class="relative w-full max-w-[320px] md:max-w-[400px] transition-all duration-300 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]">
              <svg id="customizer-svg" viewBox="0 0 500 500" class="w-full h-auto transition-transform duration-300" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="250" cy="430" rx="150" ry="22" fill="black" opacity="0.45" />
                <g id="customizer-paths">
                  <!-- Leg Left custom scale -->
                  <path id="cust-leg-l" d="M 180 280 C 180 380, 200 420, 210 420 C 220 420, 230 380, 230 280 Z" fill="url(#blue-leg-left)" class="theme-transition" />
                  <!-- Leg Right custom scale -->
                  <path id="cust-leg-r" d="M 270 280 C 270 380, 280 420, 290 420 C 300 420, 320 380, 320 280 Z" fill="url(#blue-leg-right)" class="theme-transition" />
                  
                  <!-- Seat elements -->
                  <path d="M 160 250 C 160 210, 340 210, 340 250 C 340 290, 160 290, 160 250 Z" fill="url(#blue-seat)" class="theme-transition" id="cust-seat-top" />
                  <path d="M 160 250 C 160 290, 340 290, 340 250 C 340 310, 160 310, 160 250 Z" fill="url(#blue-leg-left)" class="theme-transition" id="cust-seat-thickness" opacity="0.85" />

                  <!-- Backrest elements modified live -->
                  <path id="cust-backrest-front" d="M 150 250 C 150 120, 350 120, 350 250 C 350 210, 320 150, 250 150 C 180 150, 150 210, 150 250 Z" fill="url(#blue-backrest)" class="theme-transition" />
                  <path id="cust-backrest-back" d="M 140 250 C 140 100, 360 100, 360 250 C 350 250, 350 120, 250 120 C 150 120, 150 250, 140 250 Z" fill="url(#blue-leg-left)" class="theme-transition" />
                </g>
              </svg>
            </div>
          </div>

        </div>
      </section>

      <!-- ================= EXTENDED SECTION: TESTIMONIALS ================= -->
      <!-- Clean, translucent user feedback panels with premium score highlights -->
      <section id="faq" class="px-6 md:px-12 py-16 border-t border-white/5 relative overflow-hidden">
        <div class="absolute left-1/3 top-1/2 w-[350px] h-[350px] bg-blue-500/10 rounded-full filter blur-[110px] pointer-events-none"></div>
        
        <div class="grid grid-cols-12 gap-8 items-center">
          
          <div class="col-span-12 lg:col-span-4 space-y-6">
            <div class="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <span>CUSTOMER REVIEWS</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Loved by Space Designers</h2>
            <p class="text-sm text-blue-200/70 leading-relaxed font-light">
              We coordinate with leading international interior designers and architects to integrate bespoke seat configurations across modern workspaces.
            </p>
            <div class="flex items-center space-x-2">
              <span class="text-3xl font-black text-white">4.92</span>
              <div class="flex flex-col">
                <div class="flex text-amber-400">
                  ★★★★★
                </div>
                <span class="text-[10px] uppercase text-blue-300 tracking-wider">Overall Design Rating</span>
              </div>
            </div>
          </div>

          <div class="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Review 1 -->
            <div class="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 hover:border-blue-500/20 transition duration-300 flex flex-col justify-between">
              <p class="text-xs text-blue-100 leading-relaxed italic">
                "The blue microfiber finish is otherworldly. It casts a perfect, deep ambient shadow on our light gray oak floor. Clients literally stop to analyze the architectural form."
              </p>
              <div class="flex items-center space-x-3 pt-3 border-t border-white/5">
                <div class="w-10 h-10 rounded-full bg-slate-800 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120" alt="Sarah J" class="w-full h-full object-cover">
                </div>
                <div>
                  <h4 class="text-xs font-bold text-white">Sarah Jenkins</h4>
                  <p class="text-[10px] text-blue-300/60">Lead Architect, Studio J</p>
                </div>
              </div>
            </div>

            <!-- Review 2 -->
            <div class="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 hover:border-blue-500/20 transition duration-300 flex flex-col justify-between">
              <p class="text-xs text-blue-100 leading-relaxed italic">
                "The steel-core geometry supports perfect ergonomics while retaining a highly futuristic shape. The custom backrest adjustment perfectly fit our conference setup."
              </p>
              <div class="flex items-center space-x-3 pt-3 border-t border-white/5">
                <div class="w-10 h-10 rounded-full bg-slate-800 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" alt="Sarah J" class="w-full h-full object-cover">
                </div>
                <div>
                  <h4 class="text-xs font-bold text-white">Robert Vance</h4>
                  <p class="text-[10px] text-blue-300/60">Creative Director, NeoSpace</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================= FOOTER ================= -->
      <!-- Premium dark footer extending the exact atmosphere -->
      <footer class="px-6 md:px-12 pt-16 pb-8 border-t border-white/5 relative z-10 text-left">
        <div class="grid grid-cols-12 gap-8 mb-12">
          
          <div class="col-span-12 lg:col-span-5 space-y-4">
            <span class="text-lg font-black text-white">forma studio<span class="text-blue-500">.</span></span>
            <p class="text-xs text-blue-200/60 max-w-sm">
              An international design laboratory engineering ergonomic lounge fixtures for minimal residential environments.
            </p>
            <div class="flex space-x-4 text-xs font-mono text-blue-300">
              <span>EST. 2018</span>
              <span>•</span>
              <span>COPENHAGEN</span>
            </div>
          </div>

          <div class="col-span-6 md:col-span-3 lg:col-span-2 space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-widest text-white">Product Lines</h4>
            <ul class="space-y-2 text-xs text-blue-300/70">
              <li><a href="#collections" class="hover:text-white transition">Lounge Series One</a></li>
              <li><a href="#collections" class="hover:text-white transition">Fluted Concept Chairs</a></li>
              <li><a href="#collections" class="hover:text-white transition">Eco Posture Cushioning</a></li>
            </ul>
          </div>

          <div class="col-span-6 md:col-span-3 lg:col-span-2 space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-widest text-white">Design Resources</h4>
            <ul class="space-y-2 text-xs text-blue-300/70">
              <li><a href="#" class="hover:text-white transition">3D AutoCAD Blocks</a></li>
              <li><a href="#" class="hover:text-white transition">Felt Swatch Catalog</a></li>
              <li><a href="#" class="hover:text-white transition">Sustainability Charter</a></li>
            </ul>
          </div>

          <div class="col-span-12 md:col-span-6 lg:col-span-3 space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-widest text-white">Newsletter Swatch Request</h4>
            <p class="text-[10px] text-blue-300/50">Submit email to receive our monthly organic architecture catalog.</p>
            <form onsubmit="subscribeNewsletter(event)" class="flex space-x-2">
              <input type="email" required placeholder="design@studio.com" class="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-400 focus:bg-white/10 transition w-full">
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold px-3 py-2 rounded-xl text-xs transition">Submit</button>
            </form>
          </div>

        </div>

        <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-blue-300/40">
          <p>© 2026 forma studio. All concepts and architectural forms reserved.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="hover:text-blue-300 transition">Privacy Policy</a>
            <a href="#" class="hover:text-blue-300 transition">Terms of Architecture</a>
          </div>
        </div>
      </footer>

    </main>
  </div>

  <!-- Simulated Video Modal Window -->
  <div id="video-modal" class="fixed inset-0 bg-blue-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none transition-all duration-300">
    <div class="glass-panel w-full max-w-2xl rounded-3xl p-4 relative border border-white/15 shadow-glow-blue">
      <button onclick="playSimulation()" class="absolute -top-12 right-0 text-white flex items-center space-x-1 hover:text-blue-300 transition text-xs font-bold uppercase tracking-wider">
        <span>Close</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      
      <!-- Video Simulator Container -->
      <div class="relative rounded-2xl overflow-hidden bg-black aspect-video flex flex-col items-center justify-center text-center p-6 space-y-4">
        <!-- Live wireframe modeling simulation representing digital customizer -->
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <svg class="animate-spin h-10 w-10 text-blue-500 relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <div class="relative z-10 space-y-2">
          <h4 class="text-lg font-bold text-white uppercase tracking-wider font-mono">Simulating CAD-Render Loop...</h4>
          <p class="text-xs text-blue-300">Interactive live design showcase starting soon.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ================= LOGIC AND INTERACTIVITY SCRIPT ================= -->
  <script>
    // State Tracking
    const state = {
      activeTheme: 'blue',
      modelName: 'Forma Lounge One',
      price: 1450,
      backrestScale: 1.0,
      legScale: 1.0,
      selectedRigidity: 'Medium',
      selectedTimeSlot: 'Wed 04:00 PM',
      carouselIndex: 0
    };

    // Color swatches mapping
    const themeConfigs = {
      blue: {
        glow: 'rgba(59, 130, 246, 0.35)',
        heroBg: 'linear-gradient(180deg, #0e1d5e 0%, #040822 100%)',
        ambient1: '#2563eb',
        name: 'Majestic Royal Blue',
        backrestFill: 'url(#blue-backrest)',
        seatFill: 'url(#blue-seat)',
        legFillL: 'url(#blue-leg-left)',
        legFillR: 'url(#blue-leg-right)',
        price: 1450
      },
      green: {
        glow: 'rgba(16, 185, 129, 0.35)',
        heroBg: 'linear-gradient(180deg, #063c2c 0%, #02120e 100%)',
        ambient1: '#10b981',
        name: 'Moss Forest Green',
        backrestFill: 'url(#green-backrest)',
        seatFill: 'url(#green-seat)',
        legFillL: 'url(#green-leg-left)',
        legFillR: 'url(#green-leg-right)',
        price: 1590
      },
      purple: {
        glow: 'rgba(139, 92, 246, 0.35)',
        heroBg: 'linear-gradient(180deg, #2b1150 0%, #0d041c 100%)',
        ambient1: '#8b5cf6',
        name: 'Midnight Plum Purple',
        backrestFill: 'url(#purple-backrest)',
        seatFill: 'url(#purple-seat)',
        legFillL: 'url(#purple-leg-left)',
        legFillR: 'url(#purple-leg-right)',
        price: 1680
      },
      red: {
        glow: 'rgba(239, 68, 68, 0.35)',
        heroBg: 'linear-gradient(180deg, #4c0505 0%, #1c0202 100%)',
        ambient1: '#ef4444',
        name: 'Crimson Clay Terracotta',
        backrestFill: 'url(#red-backrest)',
        seatFill: 'url(#red-seat)',
        legFillL: 'url(#red-leg-left)',
        legFillR: 'url(#red-leg-right)',
        price: 1720
      }
    };

    // 1. Theme state swapper
    function changeTheme(themeKey) {
      state.activeTheme = themeKey;
      const config = themeConfigs[themeKey];

      // Update main background spotlights
      document.getElementById('ambient-glow-1').style.backgroundColor = config.ambient1;
      document.getElementById('hero-spotlight').style.backgroundColor = config.glow;
      document.getElementById('hero-frame-bg').style.backgroundImage = config.heroBg;

      // Update Hero chair SVG paths
      document.getElementById('svg-backrest-front').setAttribute('fill', config.backrestFill);
      document.getElementById('svg-backrest-back').setAttribute('fill', config.legFillL);
      document.getElementById('svg-seat-top').setAttribute('fill', config.seatFill);
      document.getElementById('svg-seat-thickness').setAttribute('fill', config.legFillL);
      document.getElementById('svg-leg-l').setAttribute('fill', config.legFillL);
      document.getElementById('svg-leg-r').setAttribute('fill', config.legFillR);

      // Synced modifier controls
      setCustomizerTone(themeKey);

      // Active border highlighted indicator on swatches
      const colors = ['blue', 'green', 'purple', 'red'];
      colors.forEach(c => {
        const el = document.getElementById(`btn-color-${c}`);
        if (c === themeKey) {
          el.classList.add('scale-125', 'border-white', 'shadow-md');
          el.style.boxShadow = `0 0 15px ${config.ambient1}`;
        } else {
          el.classList.remove('scale-125', 'border-white');
          el.style.boxShadow = 'none';
        }
      });

      showToast(`Visual configuration: Switched to ${config.name}`);
    }

    // 2. Customizer interaction tone link
    function setCustomizerTone(themeKey) {
      const config = themeConfigs[themeKey];
      document.getElementById('customizer-tone-name').innerText = config.name;

      // Swap customizer live model paths
      document.getElementById('cust-backrest-front').setAttribute('fill', config.backrestFill);
      document.getElementById('cust-backrest-back').setAttribute('fill', config.legFillL);
      document.getElementById('cust-seat-top').setAttribute('fill', config.seatFill);
      document.getElementById('cust-seat-thickness').setAttribute('fill', config.legFillL);
      document.getElementById('cust-leg-l').setAttribute('fill', config.legFillL);
      document.getElementById('cust-leg-r').setAttribute('fill', config.legFillR);

      // Adjust price estimation based on structural configuration
      state.price = config.price;
      recalculatePrice();
    }

    // 3. Coordinate scales update
    function updateCustomizerDimensions() {
      const backrestScale = document.getElementById('slider-backrest').value;
      const legScale = document.getElementById('slider-leg').value;

      document.getElementById('backrest-val').innerText = `${backrestScale}%`;
      document.getElementById('leg-val').innerText = `${legScale}%`;

      // Translate the range parameters to structural coordinates
      const backrestRatio = backrestScale / 100;
      const legRatio = legScale / 100;

      // Scale the elements on the interactive customizer viewport
      // Apply translation to keep elements centered perfectly
      document.getElementById('cust-backrest-front').style.transform = `scaleY(${backrestRatio})`;
      document.getElementById('cust-backrest-front').style.transformOrigin = '250px 250px';
      document.getElementById('cust-backrest-back').style.transform = `scaleY(${backrestRatio})`;
      document.getElementById('cust-backrest-back').style.transformOrigin = '250px 250px';

      document.getElementById('cust-leg-l').style.transform = `scaleY(${legRatio})`;
      document.getElementById('cust-leg-l').style.transformOrigin = '250px 280px';
      document.getElementById('cust-leg-r').style.transform = `scaleY(${legRatio})`;
      document.getElementById('cust-leg-r').style.transformOrigin = '250px 280px';

      document.getElementById('coordinate-text').innerText = `X-Span: ${backrestScale}% | Y-Span: ${legScale}%`;
      
      recalculatePrice();
    }

    // Recalculates custom design price based on physical dimensions selected
    function recalculatePrice() {
      const backrestScale = parseInt(document.getElementById('slider-backrest').value);
      const legScale = parseInt(document.getElementById('slider-leg').value);
      
      let basePrice = themeConfigs[state.activeTheme].price;
      
      // Scaled factor premium increments
      const scaleIncrement = Math.round(((backrestScale - 100) + (legScale - 100)) * 2.5);
      const finalPrice = basePrice + scaleIncrement;
      
      document.getElementById('customizer-price').innerText = `$${finalPrice.toLocaleString()}`;
    }

    // Rigidity selections
    function selectRigidity(label, btnElement) {
      state.selectedRigidity = label;
      
      // Update styling
      document.querySelectorAll('.rigidity-btn').forEach(btn => {
        btn.className = "rigidity-btn py-2 text-xs font-bold rounded-xl border border-white/10 bg-white/5 text-blue-200 hover:bg-white/10 transition";
      });
      btnElement.className = "rigidity-btn py-2 text-xs font-bold rounded-xl border-blue-500 bg-blue-500/20 text-white transition";
      
      showToast(`Cushion firmness set to: ${label}`);
    }

    // Set interactive model via collections click
    function openCustomizerWith(modelName, themeKey) {
      state.modelName = modelName;
      document.getElementById('config-model-title').innerText = `Forma ${modelName}`;
      
      // Smooth scroll to customizer
      document.getElementById('studio-customizer').scrollIntoView({ behavior: 'smooth' });
      changeTheme(themeKey);
    }

    // 4. Consultation Wizard Logic
    function toggleConsultation() {
      const modal = document.getElementById('consultation-modal');
      const isVisible = !modal.classList.contains('opacity-0');

      if (isVisible) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        // Reset modal steps back
        setTimeout(() => {
          document.getElementById('modal-step-1').classList.remove('hidden');
          document.getElementById('modal-step-2').classList.add('hidden');
        }, 300);
      } else {
        modal.classList.remove('opacity-0', 'pointer-events-none');
      }
    }

    // Handle session slot selection
    function selectTime(btnElement) {
      document.querySelectorAll('.time-slot-btn').forEach(btn => {
        btn.className = "time-slot-btn py-2 text-xs font-medium rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition";
      });
      btnElement.className = "time-slot-btn py-2 text-xs font-medium rounded-xl border-blue-400 bg-blue-500/20 text-white transition";
      state.selectedTimeSlot = btnElement.innerText;
    }

    function submitConsultation(event) {
      event.preventDefault();
      
      // Get selected designer
      const designer = document.querySelector('input[name="designer"]:checked').value;
      
      // Switch view to step 2 success panel
      document.getElementById('modal-step-1').classList.add('hidden');
      document.getElementById('modal-step-2').classList.remove('hidden');
      document.getElementById('confirmed-slot-text').innerText = `${state.selectedTimeSlot} (With ${designer})`;
    }

    // 5. Toast alerts simulation
    function showToast(message) {
      const toast = document.getElementById('toast-box');
      document.getElementById('toast-message').innerText = message;
      
      toast.classList.remove('opacity-0', 'translate-y-20');
      toast.classList.add('translate-y-0');

      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-20');
        toast.classList.remove('translate-y-0');
      }, 4000);
    }

    // Newsletter simulation
    function subscribeNewsletter(event) {
      event.preventDefault();
      showToast("Design Catalog requested! Check inbox.");
      event.target.reset();
    }

    // Play virtual presentation
    function playSimulation() {
      const modal = document.getElementById('video-modal');
      const isVisible = !modal.classList.contains('opacity-0');
      if (isVisible) {
        modal.classList.add('opacity-0', 'pointer-events-none');
      } else {
        modal.classList.remove('opacity-0', 'pointer-events-none');
      }
    }

    // Simulate complete checkout configuration
    function simulateOrder() {
      showToast(`Reserved! Custom ${state.modelName} configured successfully.`);
    }

    // Mock Carousel Trigger switches hero elements
    const carouselSequences = ['blue', 'green', 'purple', 'red'];
    function triggerNextCarousel() {
      let index = carouselSequences.indexOf(state.activeTheme);
      let nextIndex = (index + 1) % carouselSequences.length;
      changeTheme(carouselSequences[nextIndex]);
    }

    function triggerPrevCarousel() {
      let index = carouselSequences.indexOf(state.activeTheme);
      let prevIndex = (index - 1 + carouselSequences.length) % carouselSequences.length;
      changeTheme(carouselSequences[prevIndex]);
    }
  </script>
</body>
</html>
5
<!DOCTYPE html>
<html lang="ru" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KENYX — Элитные Заборы и Архитектурные Решения</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            bg: '#121315',
                            card: '#1A1C1E',
                            border: '#2A2D31',
                            lime: '#A3E635',
                            limeDark: '#84CC16',
                            textMuted: '#9CA3AF'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <!-- Google Fonts & Lucide Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #121315;
            color: #f3f4f6;
            overflow-x: hidden;
        }
        /* Custom fine-line grid backgrounds */
        .architectural-grid {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(42, 45, 49, 0.25) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(42, 45, 49, 0.25) 1px, transparent 1px);
        }
        /* Continuous premium horizontal slat pattern overlay */
        .slat-bg {
            background: repeating-linear-gradient(
                0deg,
                rgba(0,0,0,0.15),
                rgba(0,0,0,0.15) 8px,
                rgba(26,28,30,0.8) 8px,
                rgba(26,28,30,0.8) 16px
            );
        }
        /* Custom horizontal decorative sine-wave styling */
        .wave-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawWave 4s ease-in-out infinite alternate;
        }
        @keyframes drawWave {
            to {
                stroke-dashoffset: 0;
            }
        }
        /* Pulse for glowing status lights */
        .glow-pulse {
            box-shadow: 0 0 12px rgba(163, 230, 53, 0.6);
            animation: pulse-glow 2s infinite;
        }
        @keyframes pulse-glow {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.15); opacity: 1; box-shadow: 0 0 20px rgba(163, 230, 53, 0.9); }
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #121315;
        }
        ::-webkit-scrollbar-thumb {
            background: #2A2D31;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #A3E635;
        }
    </style>
</head>
<body class="architectural-grid selection:bg-brand-lime selection:text-black">

    <!-- TOAST NOTIFICATION CONTAINER -->
    <div id="toast-container" class="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none"></div>

    <!-- MAIN DYNAMIC NAVIGATION BAR -->
    <header class="sticky top-0 z-40 w-full bg-brand-bg/90 backdrop-blur-md border-b border-brand-border transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <!-- Brand Logo with Slat Motif -->
            <a href="#" class="flex items-center gap-3 group focus:outline-none">
                <div class="relative w-10 h-10 bg-brand-card border border-brand-border rounded flex flex-col justify-between p-2 overflow-hidden transition-colors group-hover:border-brand-lime">
                    <div class="h-1 bg-brand-lime rounded w-full transition-all group-hover:w-3/4"></div>
                    <div class="h-1 bg-white/70 rounded w-full"></div>
                    <div class="h-1 bg-brand-lime rounded w-1/2 transition-all group-hover:w-full"></div>
                </div>
                <div>
                    <span class="text-xl font-black tracking-widest text-white block">KE<span class="text-brand-lime">N</span>YX</span>
                    <span class="text-[9px] tracking-widest text-brand-textMuted uppercase font-semibold block -mt-1">ЗАБОРЫ И ВОРОТА</span>
                </div>
            </a>

            <!-- Central Desktop Navigation Links -->
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                <a href="#about" class="text-brand-textMuted hover:text-white transition-colors">О компании</a>
                <a href="#mistakes" class="text-brand-textMuted hover:text-white transition-colors">Проблемы рынка</a>
                <a href="#configurator" class="text-brand-textMuted hover:text-white transition-colors flex items-center gap-1.5">
                    Калькулятор <span class="bg-brand-lime/10 text-brand-lime px-1.5 py-0.5 text-[9px] font-bold rounded uppercase">New</span>
                </a>
                <a href="#benefits" class="text-brand-textMuted hover:text-white transition-colors">Преимущества</a>
                <a href="#pricing" class="text-brand-textMuted hover:text-white transition-colors">Цены</a>
                <a href="#faq" class="text-brand-textMuted hover:text-white transition-colors">Вопросы</a>
            </nav>

            <!-- CTA & Design System Trigger -->
            <div class="hidden lg:flex items-center gap-4">
                <button onclick="toggleComponentExplorer()" class="text-xs text-brand-textMuted hover:text-brand-lime transition-all border border-brand-border hover:border-brand-lime/50 rounded-lg px-3 py-2 flex items-center gap-1.5 bg-brand-card/50">
                    <i data-lucide="layers" class="w-3.5 h-3.5"></i> UI Киты
                </button>
                <a href="#quote-estimator" class="bg-brand-lime hover:bg-brand-limeDark text-brand-bg font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md flex items-center gap-2">
                    <i data-lucide="calculator" class="w-4 h-4"></i> Рассчитать забор
                </a>
            </div>

            <!-- Mobile Navigation Trigger -->
            <button onclick="toggleMobileMenu()" class="md:hidden text-white hover:text-brand-lime focus:outline-none p-2 rounded border border-brand-border">
                <i id="menu-icon" data-lucide="menu" class="w-6 h-6"></i>
            </button>
        </div>

        <!-- Mobile Slide-out Menu Panel -->
        <div id="mobile-menu" class="hidden md:hidden absolute left-0 right-0 top-20 bg-brand-bg border-b border-brand-border p-6 flex flex-col gap-4 animate-fadeIn">
            <a href="#about" onclick="toggleMobileMenu()" class="text-lg text-white hover:text-brand-lime transition-colors py-1">О компании</a>
            <a href="#mistakes" onclick="toggleMobileMenu()" class="text-lg text-white hover:text-brand-lime transition-colors py-1">Проблемы рынка</a>
            <a href="#configurator" onclick="toggleMobileMenu()" class="text-lg text-brand-lime transition-colors py-1 font-semibold">Онлайн-калькулятор (Новинка)</a>
            <a href="#benefits" onclick="toggleMobileMenu()" class="text-lg text-white hover:text-brand-lime transition-colors py-1">Наши преимущества</a>
            <a href="#pricing" onclick="toggleMobileMenu()" class="text-lg text-white hover:text-brand-lime transition-colors py-1">Цены и комплекты</a>
            <a href="#faq" onclick="toggleMobileMenu()" class="text-lg text-white hover:text-brand-lime transition-colors py-1">Частые вопросы</a>
            <div class="h-[1px] bg-brand-border my-2"></div>
            <div class="flex items-center gap-2 justify-between">
                <button onclick="toggleComponentExplorer(); toggleMobileMenu();" class="text-xs text-brand-textMuted bg-brand-card px-3 py-2 rounded-lg border border-brand-border w-1/2 flex justify-center items-center gap-2">
                    <i data-lucide="layers" class="w-4 h-4"></i> UI Киты
                </button>
                <a href="#quote-estimator" onclick="toggleMobileMenu()" class="bg-brand-lime text-brand-bg text-center text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-lg w-1/2">
                    Рассчитать
                </a>
            </div>
        </div>
    </header>

    <!-- LIVE COMPONENT EXPLORER / UI DESIGN SYSTEM PANEL (SLIDE DRAWER) -->
    <div id="component-explorer" class="fixed inset-y-0 right-0 w-full max-w-2xl bg-brand-bg border-l border-brand-border shadow-2xl z-50 transform translate-x-full transition-transform duration-500 ease-in-out overflow-y-auto hidden">
        <div class="p-8">
            <div class="flex items-center justify-between border-b border-brand-border pb-6 mb-8">
                <div>
                    <h3 class="text-xl font-extrabold text-white">KENYX Design System v1.4</h3>
                    <p class="text-xs text-brand-textMuted">Интерактивный справочник UI-компонентов и глобальных стилей</p>
                </div>
                <button onclick="toggleComponentExplorer()" class="text-brand-textMuted hover:text-white border border-brand-border hover:border-white rounded-lg p-2 transition-all">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>

            <!-- Color Palette & Tokens -->
            <div class="mb-10">
                <h4 class="text-sm font-bold tracking-wider text-brand-lime uppercase mb-4 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-brand-lime rounded-full"></span> 01. Цветовые Токены
                </h4>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div class="bg-brand-bg p-3 rounded-lg border border-brand-border">
                        <div class="w-full h-10 bg-brand-bg rounded border border-brand-border mb-2"></div>
                        <span class="text-xs font-mono text-white block">bg-brand-bg</span>
                        <span class="text-[10px] text-brand-textMuted font-mono">#121315</span>
                    </div>
                    <div class="bg-brand-card p-3 rounded-lg border border-brand-border">
                        <div class="w-full h-10 bg-brand-card rounded border border-brand-border mb-2"></div>
                        <span class="text-xs font-mono text-white block">brand-card</span>
                        <span class="text-[10px] text-brand-textMuted font-mono">#1A1C1E</span>
                    </div>
                    <div class="bg-brand-bg p-3 rounded-lg border border-brand-border">
                        <div class="w-full h-10 bg-brand-border rounded mb-2"></div>
                        <span class="text-xs font-mono text-white block">brand-border</span>
                        <span class="text-[10px] text-brand-textMuted font-mono">#2A2D31</span>
                    </div>
                    <div class="bg-brand-bg p-3 rounded-lg border border-brand-border">
                        <div class="w-full h-10 bg-brand-lime rounded mb-2"></div>
                        <span class="text-xs font-mono text-brand-bg font-bold block">brand-lime</span>
                        <span class="text-[10px] text-brand-textMuted font-mono">#A3E635</span>
                    </div>
                </div>
            </div>

            <!-- Button Typologies -->
            <div class="mb-10">
                <h4 class="text-sm font-bold tracking-wider text-brand-lime uppercase mb-4 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-brand-lime rounded-full"></span> 02. Типы Кнопок & Стейты
                </h4>
                <div class="flex flex-wrap gap-3">
                    <button class="bg-brand-lime hover:bg-brand-limeDark text-brand-bg font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded transition-all">
                        Primary Accent
                    </button>
                    <button class="border border-brand-lime text-brand-lime hover:bg-brand-lime/10 font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded transition-all">
                        Secondary Outline
                    </button>
                    <button class="bg-brand-card hover:bg-brand-border border border-brand-border text-white text-xs tracking-wider uppercase px-4 py-2.5 rounded transition-all">
                        System Card
                    </button>
                    <button class="opacity-50 cursor-not-allowed bg-brand-border text-brand-textMuted text-xs tracking-wider uppercase px-4 py-2.5 rounded" disabled>
                        Disabled State
                    </button>
                </div>
            </div>

            <!-- Typography Grid -->
            <div class="mb-10">
                <h4 class="text-sm font-bold tracking-wider text-brand-lime uppercase mb-4 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-brand-lime rounded-full"></span> 03. Типографика & Сетка
                </h4>
                <div class="space-y-4 bg-brand-card p-4 rounded-lg border border-brand-border">
                    <div>
                        <span class="text-[10px] uppercase tracking-wider text-brand-textMuted block mb-1">H1 Hero Title</span>
                        <h1 class="text-3xl font-black tracking-tight text-white leading-none">Заборы, которые стоят <span class="text-brand-lime">десятилетиями</span></h1>
                    </div>
                    <div>
                        <span class="text-[10px] uppercase tracking-wider text-brand-textMuted block mb-1">Body Text Lead</span>
                        <p class="text-sm text-brand-textMuted">Мы занимаемся только заборами премиального уровня, гарантируя жесткий контроль качества на каждом этапе проектирования и монтажа.</p>
                    </div>
                </div>
            </div>

            <!-- Code copy-paste sandbox -->
            <div>
                <h4 class="text-sm font-bold tracking-wider text-brand-lime uppercase mb-3 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-brand-lime rounded-full"></span> 04. Быстрый Код для разработчика
                </h4>
                <p class="text-xs text-brand-textMuted mb-3">Скопируйте базовый класс премиальной карточки Kenyx в ваш проект:</p>
                <div class="bg-brand-bg p-4 rounded-lg border border-brand-border relative">
                    <pre class="text-[11px] text-white font-mono overflow-x-auto whitespace-pre">class="bg-brand-card hover:bg-brand-card/80 border border-brand-border hover:border-brand-lime/40 p-6 rounded-xl transition-all duration-300 shadow-xl relative overflow-hidden group"</pre>
                    <button onclick="copySnippet('class=\'bg-brand-card hover:bg-brand-card/80 border border-brand-border hover:border-brand-lime/40 p-6 rounded-xl transition-all duration-300 shadow-xl relative overflow-hidden group\'')" class="absolute top-2 right-2 text-xs bg-brand-lime text-brand-bg px-2 py-1 rounded font-bold hover:bg-brand-limeDark">
                        Copy
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- HERO SECTION (Inspired deeply by top of image_bce96a.jpg with custom typography block, wave styling, and KENYX background visual) -->
    <section class="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden border-b border-brand-border">
        <!-- SVG Wave Overlay (as featured in the inspiration image) -->
        <div class="absolute inset-x-0 top-1/4 h-24 pointer-events-none z-10">
            <svg class="w-full h-full opacity-60" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 60 C300 120, 600 0, 900 80 C1200 130, 1350 40, 1440 60" stroke="#06b6d4" stroke-width="2" class="wave-line" fill="none"/>
                <path d="M0 80 C400 20, 700 110, 1000 30 C1300 -20, 1400 80, 1440 40" stroke="#A3E635" stroke-width="1.5" class="wave-line" fill="none" style="animation-delay: -1s;"/>
            </svg>
        </div>

        <!-- Huge Background Textured KENYX Title Letters Block from Image -->
        <div class="absolute right-4 md:right-12 lg:right-24 bottom-1/2 translate-y-1/2 w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[550px] pointer-events-none opacity-20 lg:opacity-40 select-none z-0">
            <div class="relative font-black tracking-tighter text-right leading-none flex flex-col">
                <span class="text-[120px] sm:text-[180px] lg:text-[230px] text-brand-border stroke-text">KE</span>
                <span class="text-[120px] sm:text-[180px] lg:text-[230px] text-brand-lime -mt-8 lg:-mt-16">NY</span>
                <span class="text-[120px] sm:text-[180px] lg:text-[230px] text-white -mt-8 lg:-mt-16">X</span>
            </div>
            <!-- Interactive Floating Tag "качественно / быстро" with wave accent -->
            <div class="absolute top-1/3 left-0 bg-brand-lime text-brand-bg text-[10px] sm:text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full rotate-[-12deg] shadow-lg animate-bounce flex items-center gap-1.5">
                <i data-lucide="check" class="w-3.5 h-3.5"></i> качественно быстро
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <!-- Hero Left: Strong Copy & Call to Action -->
            <div class="lg:col-span-7 space-y-8">
                <!-- Highlight Tag -->
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-card border border-brand-border">
                    <span class="w-2.5 h-2.5 rounded-full bg-brand-lime glow-pulse"></span>
                    <span class="text-xs font-semibold tracking-wider text-brand-textMuted uppercase">Защитите свою территорию за 14 дней</span>
                </div>

                <!-- Main Bold Statement -->
                <div class="space-y-4">
                    <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                        Заборы, которые<br> стоят <span class="text-brand-lime underline decoration-brand-border decoration-wavy">десятилетиями</span>
                    </h1>
                    <p class="text-base sm:text-xl text-brand-textMuted max-w-xl font-light">
                        Профессиональное проектирование, собственное производство панелей, и умный монтаж в один клик. Никаких скрытых смет и проблем с грунтом.
                    </p>
                </div>

                <!-- Client Protection Checklist / Bullet Trust points from image -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md pt-2">
                    <div class="flex items-center gap-3 text-sm text-white font-medium">
                        <div class="w-5 h-5 rounded-full bg-brand-lime/10 flex items-center justify-center border border-brand-lime/30 text-brand-lime">
                            <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
                        </div>
                        Гарантия до 25 лет по договору
                    </div>
                    <div class="flex items-center gap-3 text-sm text-white font-medium">
                        <div class="w-5 h-5 rounded-full bg-brand-lime/10 flex items-center justify-center border border-brand-lime/30 text-brand-lime">
                            <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                        </div>
                        Фиксация цены до начала монтажа
                    </div>
                </div>

                <!-- CTAs -->
                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                    <a href="#configurator" class="bg-brand-lime hover:bg-brand-limeDark text-brand-bg font-black text-xs tracking-widest uppercase px-8 py-4.5 rounded-lg text-center transition-all shadow-xl hover:shadow-brand-lime/10 flex items-center justify-center gap-2">
                        Запустить конфигуратор <i data-lucide="chevron-right" class="w-4 h-4"></i>
                    </a>
                    <a href="#quote-estimator" class="border border-brand-border hover:border-brand-lime/40 bg-brand-card/50 text-white font-bold text-xs tracking-widest uppercase px-8 py-4.5 rounded-lg text-center transition-all hover:bg-brand-card flex items-center justify-center gap-2">
                        <i data-lucide="phone-call" class="w-4 h-4"></i> Связаться с технологом
                    </a>
                </div>

                <!-- Real-time Status Badge -->
                <div class="flex items-center gap-2 pt-2 text-xs text-brand-textMuted">
                    <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span>Свободно 4 монтажные бригады на этой неделе</span>
                </div>
            </div>

            <!-- Hero Right: Dynamic Interactive Miniature Sandbox -->
            <div class="lg:col-span-5 relative">
                <div class="bg-brand-card/80 border border-brand-border p-6 rounded-2xl relative shadow-2xl overflow-hidden group">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <div class="flex items-center justify-between border-b border-brand-border pb-4 mb-4">
                        <span class="text-xs uppercase tracking-wider text-brand-lime font-bold">Система Ограждения Premium</span>
                        <div class="flex items-center gap-1.5">
                            <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                        </div>
                    </div>

                    <!-- Mini Live Fence Visualizer Panel -->
                    <div class="bg-brand-bg border border-brand-border rounded-xl p-4 min-h-[160px] flex flex-col justify-end relative overflow-hidden">
                        <!-- Custom CSS Slat system which dynamically responds to input changes -->
                        <div id="hero-fence-preview" class="space-y-1.5 w-full max-w-[280px] mx-auto py-4">
                            <div class="h-3 bg-brand-lime rounded transition-all duration-300"></div>
                            <div class="h-3 bg-brand-lime rounded transition-all duration-300"></div>
                            <div class="h-3 bg-brand-lime rounded transition-all duration-300"></div>
                            <div class="h-3 bg-brand-lime rounded transition-all duration-300"></div>
                            <div class="h-3 bg-brand-lime rounded transition-all duration-300"></div>
                        </div>

                        <!-- Soil Layer Base -->
                        <div class="h-6 bg-amber-950/40 border-t border-brand-border text-[9px] uppercase tracking-widest text-center py-0.5 text-brand-textMuted font-mono">
                            Песчано-гравийный фундамент
                        </div>
                    </div>

                    <!-- Mini Configurator Actions -->
                    <div class="mt-4 grid grid-cols-3 gap-2 text-center">
                        <button onclick="updateHeroFenceColor('#A3E635')" class="p-2 rounded bg-brand-bg border border-brand-border hover:border-brand-lime text-xs transition-colors text-white block">
                            Lime Green
                        </button>
                        <button onclick="updateHeroFenceColor('#FFFFFF')" class="p-2 rounded bg-brand-bg border border-brand-border hover:border-white text-xs transition-colors text-white block">
                            Arctic White
                        </button>
                        <button onclick="updateHeroFenceColor('#3B82F6')" class="p-2 rounded bg-brand-bg border border-brand-border hover:border-blue-500 text-xs transition-colors text-white block">
                            Slate Blue
                        </button>
                    </div>

                    <div class="mt-4 flex items-center justify-between text-xs text-brand-textMuted font-mono">
                        <span>Текущая прочность:</span>
                        <span class="text-brand-lime font-bold">Высший стандарт СНиП</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- TRIPLE STATS OVERLAY BANNER -->
    <section class="border-b border-brand-border bg-brand-card/40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center md:text-left">
                <span class="block text-3xl sm:text-4xl font-extrabold text-white">1000+</span>
                <span class="text-xs text-brand-textMuted uppercase tracking-wider font-semibold">Установленных заборов</span>
            </div>
            <div class="text-center md:text-left border-l border-brand-border/40 pl-0 md:pl-8">
                <span class="block text-3xl sm:text-4xl font-extrabold text-brand-lime">14 дней</span>
                <span class="text-xs text-brand-textMuted uppercase tracking-wider font-semibold">Средний срок под ключ</span>
            </div>
            <div class="text-center md:text-left border-l border-brand-border/40 pl-0 md:pl-8">
                <span class="block text-3xl sm:text-4xl font-extrabold text-white">25 лет</span>
                <span class="text-xs text-brand-textMuted uppercase tracking-wider font-semibold">Официальная гарантия</span>
            </div>
            <div class="text-center md:text-left border-l border-brand-border/40 pl-0 md:pl-8">
                <span class="block text-3xl sm:text-4xl font-extrabold text-brand-lime">100%</span>
                <span class="text-xs text-brand-textMuted uppercase tracking-wider font-semibold">Контроль геометрии опор</span>
            </div>
        </div>
    </section>

    <!-- THE BENTO GRID SECTION: "Топ 4 частых проблем при работе с компаниями" (Explicitly mapping to Page-2 in image_bce96a.jpg) -->
    <section id="mistakes" class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="mb-12">
            <span class="text-xs font-bold text-brand-lime uppercase tracking-widest block mb-2">Ошибки рынка</span>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Топ-4 самых частых <span class="text-brand-lime">проблем</span> при работе с компаниями
            </h2>
            <p class="text-base text-brand-textMuted max-w-2xl mt-4">
                С чем сталкиваются 90% заказчиков при выборе подрядчиков по установке заборов в РФ. Мы раскрыли карты, чтобы вы были вооружены.
            </p>
        </div>

        <!-- Bento Grid Structure -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
            <!-- Problem Card 1 -->
            <div class="md:col-span-4 bg-brand-card/90 border border-brand-border p-8 rounded-2xl relative overflow-hidden group hover:border-brand-lime/40 transition-all duration-300">
                <div class="absolute -right-6 -bottom-6 text-brand-border text-8xl font-black opacity-30 select-none group-hover:text-brand-lime/10 transition-colors">01</div>
                <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/30 text-red-400 mb-6">
                    <i data-lucide="trending-up" class="w-6 h-6"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Нарушение Сроков</h3>
                <p class="text-sm text-brand-textMuted">
                    Компании нарушают сроки, и установка забора затягивается на долгие месяцы из-за нехватки сырья или рабочих рук.
                </p>
            </div>

            <!-- Problem Card 2 -->
            <div class="md:col-span-4 bg-brand-card/90 border border-brand-border p-8 rounded-2xl relative overflow-hidden group hover:border-brand-lime/40 transition-all duration-300">
                <div class="absolute -right-6 -bottom-6 text-brand-border text-8xl font-black opacity-30 select-none group-hover:text-brand-lime/10 transition-colors">02</div>
                <div class="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center border border-yellow-500/30 text-yellow-400 mb-6">
                    <i data-lucide="shield-alert" class="w-6 h-6"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Плохое Качество</h3>
                <p class="text-sm text-brand-textMuted">
                    Вы платите деньги за премиум, а забор выходит из строя или ржавеет через 2 года из-за некачественной полимерной покраски.
                </p>
            </div>

            <!-- Problem Card 3 (Featured Wide Card) -->
            <div class="md:col-span-4 bg-brand-card/90 border border-brand-border p-8 rounded-2xl relative overflow-hidden group hover:border-brand-lime/40 transition-all duration-300">
                <div class="absolute -right-6 -bottom-6 text-brand-border text-8xl font-black opacity-30 select-none group-hover:text-brand-lime/10 transition-colors">03</div>
                <div class="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/30 text-orange-400 mb-6">
                    <i data-lucide="info" class="w-6 h-6"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Внезапные Сметы</h3>
                <p class="text-sm text-brand-textMuted">
                    В ходе работы выясняется, что нужны дополнительные расходы на бетон или крепежи, о которых не было ни слова в смете.
                </p>
            </div>

            <!-- Problem Card 4 (Deep Feature Card) -->
            <div class="md:col-span-12 bg-gradient-to-r from-brand-card to-[#1F2225] border border-brand-border p-8 rounded-2xl relative overflow-hidden group hover:border-brand-lime/40 transition-all duration-300">
                <div class="absolute right-0 top-0 w-1/3 h-full bg-brand-lime/5 rounded-l-full blur-3xl pointer-events-none"></div>
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div class="lg:col-span-8 space-y-4">
                        <div class="inline-flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/30 text-xs px-2.5 py-1 rounded-full uppercase font-bold">
                            <i data-lucide="alert-octagon" class="w-3.5 h-3.5"></i> Самая главная боль клиентов
                        </div>
                        <h3 class="text-2xl font-black text-white">Стоимость в телефоне и после замера отличается на 50%+</h3>
                        <p class="text-sm text-brand-textMuted max-w-xl">
                            Вам озвучивают одну цифру по звонку, а по приезду замерщика она вырастает до небес, создавая ощущение обмана. Мы в KENYX зафиксировали неизменные параметры сметы прямо на уровне смарт-контракта.
                        </p>
                    </div>
                    <div class="lg:col-span-4 bg-brand-bg p-4 rounded-xl border border-brand-border space-y-3">
                        <div class="flex items-center justify-between text-xs text-brand-textMuted">
                            <span>Озвучено менеджером:</span>
                            <span class="line-through text-red-400">120 000 руб</span>
                        </div>
                        <div class="flex items-center justify-between text-xs text-brand-textMuted">
                            <span>Приговор замерщика:</span>
                            <span class="text-red-400 font-bold">210 000 руб</span>
                        </div>
                        <div class="h-[1px] bg-brand-border"></div>
                        <div class="flex items-center justify-between text-xs text-white">
                            <span>Стандарт KENYX:</span>
                            <span class="text-brand-lime font-bold">Фиксированно в договоре</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- INTRODUCING THE REVOLUTIONARY FENCE CONFIGURATOR (3D-LIKE LIVE DEMO) -->
    <section id="configurator" class="py-24 bg-brand-card/25 border-y border-brand-border relative">
        <div class="absolute inset-0 slat-bg opacity-30 pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Left Control Panel -->
                <div class="lg:col-span-5 space-y-8">
                    <div>
                        <span class="text-xs font-bold text-brand-lime uppercase tracking-widest block mb-2">Интерактивный Модуль</span>
                        <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Создайте забор своей мечты</h2>
                        <p class="text-sm text-brand-textMuted mt-4">
                            Настройте параметры полотна, высоту, цвет и дополнительные системы безопасности в реальном времени. Стоимость рассчитывается автоматически.
                        </p>
                    </div>

                    <!-- Live Configurator Form controls -->
                    <div class="space-y-6">
                        <!-- Slat material type picker -->
                        <div>
                            <label class="block text-xs font-bold text-white uppercase tracking-wider mb-2">1. Тип Наполнения</label>
                            <div class="grid grid-cols-2 gap-2">
                                <button onclick="selectMaterial('slats-vertical', 3200)" id="btn-mat-1" class="material-btn p-3 rounded-lg bg-brand-card border-2 border-brand-lime text-left transition-all">
                                    <span class="block text-xs font-bold text-white">Вертикальные Ламели</span>
                                    <span class="text-[10px] text-brand-lime font-semibold">3 200 ₽ / м²</span>
                                </button>
                                <button onclick="selectMaterial('slats-horizontal', 3900)" id="btn-mat-2" class="material-btn p-3 rounded-lg bg-brand-card border border-brand-border text-left transition-all">
                                    <span class="block text-xs font-bold text-white">Горизонтальное Жалюзи</span>
                                    <span class="text-[10px] text-brand-textMuted">3 900 ₽ / м²</span>
                                </button>
                            </div>
                        </div>

                        <!-- Width & Height Slider Inputs -->
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold text-white uppercase tracking-wider mb-2">Высота (м)</label>
                                <input type="range" min="1.2" max="3.0" step="0.2" value="1.8" id="fence-height-input" oninput="recalcConfigurator()" class="w-full accent-brand-lime bg-brand-bg rounded-lg appearance-none h-2">
                                <div class="flex justify-between text-xs text-brand-textMuted mt-1">
                                    <span>1.2м</span>
                                    <span id="label-height" class="text-brand-lime font-bold">1.8м</span>
                                    <span>3.0м</span>
                                </div>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-white uppercase tracking-wider mb-2">Длина (м)</label>
                                <input type="range" min="10" max="150" step="5" value="30" id="fence-length-input" oninput="recalcConfigurator()" class="w-full accent-brand-lime bg-brand-bg rounded-lg appearance-none h-2">
                                <div class="flex justify-between text-xs text-brand-textMuted mt-1">
                                    <span>10м</span>
                                    <span id="label-length" class="text-brand-lime font-bold">30м</span>
                                    <span>150м</span>
                                </div>
                            </div>
                        </div>

                        <!-- Color selection dots -->
                        <div>
                            <label class="block text-xs font-bold text-white uppercase tracking-wider mb-2">Цвет по каталогу RAL</label>
                            <div class="flex gap-3">
                                <button onclick="selectColor('ral-dark', '#1A1C1E')" class="color-dot w-8 h-8 rounded-full bg-[#1A1C1E] border-2 border-brand-lime focus:outline-none transition-all" title="Graphite Grey"></button>
                                <button onclick="selectColor('ral-brown', '#4c3c30')" class="color-dot w-8 h-8 rounded-full bg-[#4c3c30] border border-brand-border focus:outline-none transition-all" title="Chocolate Brown"></button>
                                <button onclick="selectColor('ral-green', '#1e3f20')" class="color-dot w-8 h-8 rounded-full bg-[#1e3f20] border border-brand-border focus:outline-none transition-all" title="Moss Green"></button>
                                <button onclick="selectColor('ral-silver', '#9ca3af')" class="color-dot w-8 h-8 rounded-full bg-[#9ca3af] border border-brand-border focus:outline-none transition-all" title="Classic Silver"></button>
                            </div>
                        </div>

                        <!-- Addon Toggle checkboxes -->
                        <div class="space-y-2">
                            <label class="block text-xs font-bold text-white uppercase tracking-wider">Дополнительно</label>
                            <label class="flex items-center gap-3 bg-brand-bg p-3 rounded-lg border border-brand-border cursor-pointer hover:border-brand-lime/40">
                                <input type="checkbox" id="addon-gate" onchange="recalcConfigurator()" class="accent-brand-lime w-4 h-4">
                                <span class="text-xs text-white">Интегрировать автоматические ворота (+85,000 ₽)</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Right Big Dynamic Preview Rendering Screen -->
                <div class="lg:col-span-7">
                    <div class="bg-brand-card border-2 border-brand-border rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                        <!-- Dynamic Label overlay -->
                        <div class="absolute top-4 left-4 bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                            Интерактивный рендеринг
                        </div>

                        <!-- Main Preview Stage representation of slats -->
                        <div class="my-8 bg-brand-bg border border-brand-border rounded-2xl p-6 min-h-[300px] flex flex-col justify-end relative overflow-hidden">
                            
                            <!-- Columns and Posts styling -->
                            <div class="absolute inset-x-0 bottom-0 top-0 flex justify-between px-12 pointer-events-none">
                                <div class="w-4 bg-zinc-800 border-x border-zinc-700 h-full"></div>
                                <div class="w-4 bg-zinc-800 border-x border-zinc-700 h-full"></div>
                                <div class="w-4 bg-zinc-800 border-x border-zinc-700 h-full"></div>
                            </div>

                            <!-- Live dynamically rendered fence panel slats -->
                            <div id="render-panel-container" class="relative z-10 w-full max-w-[440px] mx-auto py-8 flex flex-col gap-2 transition-all duration-300">
                                <div class="h-4 bg-brand-lime rounded border border-white/10 transition-all duration-300"></div>
                                <div class="h-4 bg-brand-lime rounded border border-white/10 transition-all duration-300"></div>
                                <div class="h-4 bg-brand-lime rounded border border-white/10 transition-all duration-300"></div>
                                <div class="h-4 bg-brand-lime rounded border border-white/10 transition-all duration-300"></div>
                                <div class="h-4 bg-brand-lime rounded border border-white/10 transition-all duration-300"></div>
                            </div>

                            <!-- Soil Base visualizer block -->
                            <div class="relative z-20 h-10 bg-gradient-to-b from-[#251710] to-[#120905] border-t border-amber-950 p-2 flex items-center justify-between text-[10px] tracking-wide text-brand-textMuted font-mono">
                                <span>Глубина свай: 1.5м</span>
                                <span>Антикоррозийная обработка: Да</span>
                            </div>
                        </div>

                        <!-- Realtime Price Calculation output block -->
                        <div class="bg-brand-bg/80 border border-brand-border rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                            <div>
                                <span class="text-xs text-brand-textMuted block">Предварительный расчет под ключ:</span>
                                <span id="recalc-total-price" class="text-3xl sm:text-4xl font-extrabold text-brand-lime font-mono">172 200 ₽</span>
                            </div>
                            <div class="flex flex-col gap-2">
                                <button onclick="saveConfiguration()" class="bg-brand-lime hover:bg-brand-limeDark text-brand-bg font-black text-xs uppercase tracking-wider py-3 rounded-lg text-center transition-all flex items-center justify-center gap-1.5">
                                    <i data-lucide="save" class="w-4 h-4"></i> Закрепить эту цену
                                </button>
                                <span class="text-[9px] text-brand-textMuted text-center">Действительно при бронировании замера сегодня.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- THE "WHY CHOOSE US" TIMELINE (Reflecting the structural timeline block on Page-5 of inspiration) -->
    <section id="benefits" class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-xs font-bold text-brand-lime uppercase tracking-widest block mb-2">Наши преимущества</span>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Почему именно <span class="text-brand-lime">мы</span>
            </h2>
            <p class="text-sm sm:text-base text-brand-textMuted mt-4">
                Мы избавились от всех посреднических наценок и создали пошаговую систему контроля качества, которая бережет ваше время и нервы.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            <!-- Step Card 1 -->
            <div class="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-lime/40 transition-all group relative">
                <!-- Connect Line Decor -->
                <div class="hidden md:block absolute top-1/2 left-full w-full h-[1px] bg-gradient-to-r from-brand-lime/30 to-transparent z-0"></div>
                <div class="w-12 h-12 rounded-full bg-brand-lime text-brand-bg font-black text-xl flex items-center justify-center mb-6 shadow-lg">
                    1
                </div>
                <h3 class="text-lg font-bold text-white mb-3">Смета в приложении</h3>
                <p class="text-xs text-brand-textMuted leading-relaxed">
                    Составляем точную смету в специальном ПО сразу же после замера. Наша IT-система позволяет быстро менять любые позиции и цены.
                </p>
            </div>

            <!-- Step Card 2 -->
            <div class="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-lime/40 transition-all group relative">
                <!-- Connect Line Decor -->
                <div class="hidden md:block absolute top-1/2 left-full w-full h-[1px] bg-gradient-to-r from-brand-lime/30 to-transparent z-0"></div>
                <div class="w-12 h-12 rounded-full bg-brand-lime text-brand-bg font-black text-xl flex items-center justify-center mb-6 shadow-lg">
                    2
                </div>
                <h3 class="text-lg font-bold text-white mb-3">Дизайн-проект</h3>
                <p class="text-xs text-brand-textMuted leading-relaxed">
                    Разрабатываем детальный дизайн-проект и чертежи технических решений даже для самых нестандартных рельефов грунта.
                </p>
            </div>

            <!-- Step Card 3 -->
            <div class="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-lime/40 transition-all group relative">
                <!-- Connect Line Decor -->
                <div class="hidden md:block absolute top-1/2 left-full w-full h-[1px] bg-gradient-to-r from-brand-lime/30 to-transparent z-0"></div>
                <div class="w-12 h-12 rounded-full bg-brand-lime text-brand-bg font-black text-xl flex items-center justify-center mb-6 shadow-lg">
                    3
                </div>
                <h3 class="text-lg font-bold text-white mb-3">Идеальный порядок</h3>
                <p class="text-xs text-brand-textMuted leading-relaxed">
                    Не оставляем за собой никакого строительного мусора после монтажа забора: генеральная уборка территории уже входит в комплекс.
                </p>
            </div>

            <!-- Step Card 4 -->
            <div class="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-lime/40 transition-all group relative">
                <div class="w-12 h-12 rounded-full bg-brand-lime text-brand-bg font-black text-xl flex items-center justify-center mb-6 shadow-lg">
                    4
                </div>
                <h3 class="text-lg font-bold text-white mb-3">Опытный персонал</h3>
                <p class="text-xs text-brand-textMuted leading-relaxed">
                    К работе допускаются только квалифицированные монтажники, имеющие профильное образование и подтвержденный стаж работы от 5 лет.
                </p>
            </div>

        </div>
    </section>

    <!-- DETAILED PRICING CATALOG (Structured cards with features and quote button) -->
    <section id="pricing" class="py-24 bg-brand-card/25 border-y border-brand-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-xs font-bold text-brand-lime uppercase tracking-widest block mb-2">Каталог цен</span>
                <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Готовые решения под ключ</h2>
                <p class="text-sm text-brand-textMuted mt-4">Выбирайте комплектацию под ваши задачи и бюджет. Без скрытых наценок.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Package 1 -->
                <div class="bg-brand-card border border-brand-border rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between hover:border-brand-lime/30 transition-all">
                    <div>
                        <span class="text-xs uppercase tracking-wider text-brand-lime font-bold">Эконом стандарт</span>
                        <h3 class="text-3xl font-extrabold text-white mt-4">от 1 900 ₽ <span class="text-xs text-brand-textMuted font-normal">/ пог.м</span></h3>
                        <p class="text-xs text-brand-textMuted mt-2">Идеально подходит для дачных участков и временных ограждений.</p>
                        
                        <div class="h-[1px] bg-brand-border my-6"></div>

                        <ul class="space-y-3 text-xs text-white">
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-lime"></i> Сваи винтовые 76мм</li>
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-lime"></i> Заполнение: Профлист С8 0.45мм</li>
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-lime"></i> Лаги 40х20мм в два ряда</li>
                            <li class="flex items-center gap-2 text-brand-textMuted"><i data-lucide="x" class="w-4 h-4"></i> Без бетонирования столбов</li>
                        </ul>
                    </div>
                    <button onclick="orderPackage('Эконом стандарт', 1900)" class="w-full mt-8 bg-brand-bg hover:bg-brand-border text-white border border-brand-border font-bold text-xs uppercase tracking-wider py-3.5 rounded-lg transition-colors">
                        Выбрать тариф
                    </button>
                </div>

                <!-- Package 2 - Best seller with special badge -->
                <div class="bg-brand-card border-2 border-brand-lime rounded-2xl p-8 relative flex flex-col justify-between shadow-xl">
                    <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-lime text-brand-bg font-black text-[9px] uppercase tracking-widest px-4 py-1 rounded-full">
                        Самый популярный
                    </div>
                    <div>
                        <span class="text-xs uppercase tracking-wider text-brand-lime font-bold">Премиум Жалюзи</span>
                        <h3 class="text-3xl font-extrabold text-white mt-4">от 3 400 ₽ <span class="text-xs text-brand-textMuted font-normal">/ пог.м</span></h3>
                        <p class="text-xs text-brand-textMuted mt-2">Продуваемое дизайнерское решение с максимальной ветрозащитой.</p>
                        
                        <div class="h-[1px] bg-brand-border my-6"></div>

                        <ul class="space-y-3 text-xs text-white">
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-lime"></i> Бетонирование столбов на 1.5м</li>
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-lime"></i> Заполнение: Металлический ламели</li>
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-lime"></i> Двусторонняя порошковая покраска</li>
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-lime"></i> Официальная гарантия 15 лет</li>
                        </ul>
                    </div>
                    <button onclick="orderPackage('Премиум Жалюзи', 3400)" class="w-full mt-8 bg-brand-lime hover:bg-brand-limeDark text-brand-bg font-black text-xs uppercase tracking-wider py-3.5 rounded-lg transition-colors">
                        Заказать комплект
                    </button>
                </div>

                <!-- Package 3 -->
                <div class="bg-brand-card border border-brand-border rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between hover:border-brand-lime/30 transition-all">
                    <div>
                        <span class="text-xs uppercase tracking-wider text-brand-lime font-bold">Коттеджный Хай-Тек</span>
                        <h3 class="text-3xl font-extrabold text-white mt-4">от 5 800 ₽ <span class="text-xs text-brand-textMuted font-normal">/ пог.м</span></h3>
                        <p class="text-xs text-brand-textMuted mt-2">Бескомпромиссная надежность со скрытым монтажом.</p>
                        
                        <div class="h-[1px] bg-brand-border my-6"></div>

                        <ul class="space-y-3 text-xs text-white">
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-lime"></i> Ленточный фундамент М300</li>
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-lime"></i> Оцинкованные секции</li>
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-lime"></i> Подготовка под датчики охраны</li>
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-lime"></i> Пожизненное обслуживание петель</li>
                        </ul>
                    </div>
                    <button onclick="orderPackage('Коттеджный Хай-Тек', 5800)" class="w-full mt-8 bg-brand-bg hover:bg-brand-border text-white border border-brand-border font-bold text-xs uppercase tracking-wider py-3.5 rounded-lg transition-colors">
                        Выбрать тариф
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- LIVE INTERACTIVE QUOTE ESTIMATOR FORM -->
    <section id="quote-estimator" class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-brand-card to-brand-bg border border-brand-border rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div class="absolute right-0 top-0 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none"></div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Left Details Info -->
                <div class="lg:col-span-6 space-y-6">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-lime/10 border border-brand-lime/30 rounded-full text-xs text-brand-lime font-semibold uppercase">
                        Быстрое бронирование
                    </div>
                    <h2 class="text-3xl sm:text-5xl font-black text-white leading-tight">
                        Зафиксируйте стоимость <span class="text-brand-lime">уже сегодня</span>
                    </h2>
                    <p class="text-sm text-brand-textMuted max-w-md">
                        Заполните эту форму, и наш главный инженер-технолог свяжется с вами для согласования деталей выезда. Выезд замерщика в пределах 50 км от МКАД — абсолютно бесплатный.
                    </p>

                    <!-- Trust indicators inside block -->
                    <div class="space-y-4 pt-4 border-t border-brand-border/60">
                        <div class="flex items-start gap-3">
                            <div class="p-1 rounded bg-brand-lime/10 text-brand-lime mt-1">
                                <i data-lucide="shield" class="w-4 h-4"></i>
                            </div>
                            <div>
                                <h4 class="text-xs font-bold text-white">Защита от брака</h4>
                                <p class="text-[11px] text-brand-textMuted">Вся продукция сертифицирована по международному стандарту ISO 9001.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Form Element -->
                <div class="lg:col-span-6 bg-brand-card/90 border border-brand-border p-8 rounded-2xl shadow-xl">
                    <form id="leadForm" onsubmit="handleLeadSubmit(event)" class="space-y-4">
                        <div>
                            <label class="block text-xs font-semibold text-white uppercase mb-1.5">Ваше имя</label>
                            <input type="text" id="clientName" required placeholder="Иван Иванов" class="w-full bg-brand-bg border border-brand-border focus:border-brand-lime rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all">
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-white uppercase mb-1.5">Номер телефона</label>
                            <input type="tel" id="clientPhone" required placeholder="+7 (999) 000-00-00" class="w-full bg-brand-bg border border-brand-border focus:border-brand-lime rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all">
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-white uppercase mb-1.5">Укажите примерную длину (м)</label>
                            <input type="number" id="clientLength" placeholder="Например, 30" class="w-full bg-brand-bg border border-brand-border focus:border-brand-lime rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all">
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-white uppercase mb-1.5">Ваши пожелания</label>
                            <textarea id="clientNotes" placeholder="Например: хочу забор жалюзи коричневого цвета" class="w-full bg-brand-bg border border-brand-border focus:border-brand-lime rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all h-20 resize-none"></textarea>
                        </div>

                        <button type="submit" class="w-full bg-brand-lime hover:bg-brand-limeDark text-brand-bg font-black text-xs uppercase tracking-widest py-4 rounded-lg transition-all shadow-md flex items-center justify-center gap-2">
                            <i data-lucide="send" class="w-4 h-4"></i> Отправить заявку технологу
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>

    <!-- LIVE INTERACTIVE ACCORDION FAQ -->
    <section id="faq" class="py-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
            <span class="text-xs font-bold text-brand-lime uppercase tracking-widest block mb-2">Отвечаем на вопросы</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Часто задаваемые вопросы</h2>
        </div>

        <div class="space-y-4">
            <!-- FAQ 1 -->
            <div class="border border-brand-border rounded-xl bg-brand-card overflow-hidden">
                <button onclick="toggleFaq(1)" class="w-full p-6 text-left flex justify-between items-center text-white font-semibold hover:text-brand-lime transition-all focus:outline-none">
                    <span>Сколько времени занимает установка забора в 50 метров?</span>
                    <i id="faq-icon-1" data-lucide="plus" class="w-5 h-5 text-brand-lime transition-transform duration-300"></i>
                </button>
                <div id="faq-content-1" class="hidden px-6 pb-6 text-sm text-brand-textMuted leading-relaxed animate-fadeIn">
                    Обычно такая работа занимает всего 2-3 рабочих дня, включая бурение лунок, бетонирование опорных столбов и монтаж секций. Наш технолог делает детальный таймлайн-план до старта.
                </div>
            </div>

            <!-- FAQ 2 -->
            <div class="border border-brand-border rounded-xl bg-brand-card overflow-hidden">
                <button onclick="toggleFaq(2)" class="w-full p-6 text-left flex justify-between items-center text-white font-semibold hover:text-brand-lime transition-all focus:outline-none">
                    <span>Предоставляете ли вы рассрочку или кредит?</span>
                    <i id="faq-icon-2" data-lucide="plus" class="w-5 h-5 text-brand-lime transition-transform duration-300"></i>
                </button>
                <div id="faq-content-2" class="hidden px-6 pb-6 text-sm text-brand-textMuted leading-relaxed animate-fadeIn">
                    Да, мы сотрудничаем с ведущими банками РФ и предоставляем беспроцентную рассрочку на 6 месяцев без первоначального взноса прямо в офисе или дистанционно.
                </div>
            </div>

            <!-- FAQ 3 -->
            <div class="border border-brand-border rounded-xl bg-brand-card overflow-hidden">
                <button onclick="toggleFaq(3)" class="w-full p-6 text-left flex justify-between items-center text-white font-semibold hover:text-brand-lime transition-all focus:outline-none">
                    <span>Что делать, если у меня сильный перепад высот на участке?</span>
                    <i id="faq-icon-3" data-lucide="plus" class="w-5 h-5 text-brand-lime transition-transform duration-300"></i>
                </button>
                <div id="faq-content-3" class="hidden px-6 pb-6 text-sm text-brand-textMuted leading-relaxed animate-fadeIn">
                    Для участков со сложным рельефом мы проектируем ступенчатый тип забора с усиленным каркасом. Наши специалисты выровняют профиль лазерным уровнем с точностью до 1 миллиметра.
                </div>
            </div>
        </div>
    </section>

    <!-- PREMIUM COMPREHENSIVE FOOTER -->
    <footer class="bg-brand-card border-t border-brand-border py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <!-- Brand Column -->
            <div class="md:col-span-4 space-y-4">
                <div class="flex items-center gap-3">
                    <div class="relative w-8 h-8 bg-brand-bg border border-brand-border rounded flex flex-col justify-between p-1.5">
                        <div class="h-0.5 bg-brand-lime rounded w-full"></div>
                        <div class="h-0.5 bg-white rounded w-full"></div>
                        <div class="h-0.5 bg-brand-lime rounded w-1/2"></div>
                    </div>
                    <span class="text-lg font-black tracking-widest text-white">KE<span class="text-brand-lime">N</span>YX</span>
                </div>
                <p class="text-xs text-brand-textMuted leading-relaxed">
                    Премиальное производство металлических ламелей, жалюзи, и авторских систем ограждения участков любого уровня сложности.
                </p>
                <div class="flex gap-3 pt-2">
                    <a href="#" class="p-2 rounded bg-brand-bg border border-brand-border text-brand-textMuted hover:text-brand-lime transition-colors">
                        <i data-lucide="telegram" class="w-4 h-4"></i>
                    </a>
                    <a href="#" class="p-2 rounded bg-brand-bg border border-brand-border text-brand-textMuted hover:text-brand-lime transition-colors">
                        <i data-lucide="instagram" class="w-4 h-4"></i>
                    </a>
                </div>
            </div>

            <!-- Links Column 1 -->
            <div class="md:col-span-2 space-y-3">
                <h4 class="text-xs font-bold text-white uppercase tracking-wider">Каталог</h4>
                <ul class="space-y-2 text-xs text-brand-textMuted">
                    <li><a href="#" class="hover:text-white transition-colors">Заборы Жалюзи</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Горизонтальные секции</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Откатные ворота</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Ограждения 3D</a></li>
                </ul>
            </div>

            <!-- Links Column 2 -->
            <div class="md:col-span-2 space-y-3">
                <h4 class="text-xs font-bold text-white uppercase tracking-wider">Клиентам</h4>
                <ul class="space-y-2 text-xs text-brand-textMuted">
                    <li><a href="#" class="hover:text-white transition-colors">Калькулятор</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Портфолио работ</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Гарантия и Сервис</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Контакты</a></li>
                </ul>
            </div>

            <!-- Contact/Hotline Info Column -->
            <div class="md:col-span-4 space-y-4">
                <h4 class="text-xs font-bold text-white uppercase tracking-wider">Контакты & Горячая линия</h4>
                <div class="space-y-2">
                    <a href="tel:+74950000000" class="block text-xl font-bold text-brand-lime hover:underline">+7 (495) 000-00-00</a>
                    <span class="text-[11px] text-brand-textMuted block">Ежедневно с 09:00 до 21:00 (МСК)</span>
                    <span class="text-xs text-white block">г. Москва, ул. Архитектурная, д. 12, оф. 404</span>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-brand-border/40 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-textMuted">
            <span>&copy; 2026 ООО &laquo;КЕНИКС СТРОЙ&raquo;. Все права защищены.</span>
            <div class="flex gap-4">
                <a href="#" class="hover:text-white transition-colors">Политика конфиденциальности</a>
                <a href="#" class="hover:text-white transition-colors">Карта сайта</a>
            </div>
        </div>
    </footer>

    <!-- INTERACTIVE JAVASCRIPT SYSTEMS -->
    <script>
        // Init Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle logic
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            menu.classList.toggle('hidden');
            
            if (menu.classList.contains('hidden')) {
                icon.setAttribute('data-lucide', 'menu');
            } else {
                icon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons();
        }

        // Component Explorer Design drawer
        function toggleComponentExplorer() {
            const explorer = document.getElementById('component-explorer');
            if (explorer.classList.contains('hidden')) {
                explorer.classList.remove('hidden');
                setTimeout(() => {
                    explorer.classList.remove('translate-x-full');
                }, 10);
            } else {
                explorer.classList.add('translate-x-full');
                setTimeout(() => {
                    explorer.classList.add('hidden');
                }, 500);
            }
        }

        // Copy Text utility
        function copySnippet(text) {
            const temp = document.createElement('textarea');
            temp.value = text;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand('copy');
            document.body.removeChild(temp);
            showToast('Успешно скопировано в буфер обмена!');
        }

        // Live Configurator calculations
        let selectedMaterialCost = 3200;
        let selectedColorHex = '#1A1C1E';

        function selectMaterial(type, cost) {
            selectedMaterialCost = cost;
            document.querySelectorAll('.material-btn').forEach(btn => {
                btn.classList.remove('border-brand-lime', 'border-2');
                btn.classList.add('border-brand-border', 'border');
            });
            
            if (type === 'slats-vertical') {
                document.getElementById('btn-mat-1').classList.add('border-brand-lime', 'border-2');
            } else {
                document.getElementById('btn-mat-2').classList.add('border-brand-lime', 'border-2');
            }
            recalcConfigurator();
        }

        function selectColor(id, hex) {
            selectedColorHex = hex;
            document.querySelectorAll('.color-dot').forEach(dot => {
                dot.classList.remove('border-brand-lime', 'border-2');
                dot.classList.add('border-brand-border', 'border');
            });
            event.currentTarget.classList.add('border-brand-lime', 'border-2');
            recalcConfigurator();
        }

        function recalcConfigurator() {
            const height = parseFloat(document.getElementById('fence-height-input').value);
            const length = parseFloat(document.getElementById('fence-length-input').value);
            const includeGate = document.getElementById('addon-gate').checked;

            // Update labels
            document.getElementById('label-height').innerText = height.toFixed(1) + 'м';
            document.getElementById('label-length').innerText = length + 'м';

            // Cost calculations
            const baseArea = height * length;
            let total = baseArea * selectedMaterialCost;
            if (includeGate) {
                total += 85000;
            }

            // Formatter ruble
            document.getElementById('recalc-total-price').innerText = new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                maximumFractionDigits: 0
            }).format(total);

            // Re-render visual slats preview dynamically
            const renderContainer = document.getElementById('render-panel-container');
            renderContainer.innerHTML = '';
            
            // Adjust visual density based on height
            const numSlats = Math.floor(height * 4);
            for (let i = 0; i < numSlats; i++) {
                const slat = document.createElement('div');
                slat.className = 'h-4 rounded transition-all duration-300 border border-white/10 shadow-sm';
                slat.style.backgroundColor = selectedColorHex;
                renderContainer.appendChild(slat);
            }
        }

        // Action: Save configuration custom dialog helper
        function saveConfiguration() {
            const price = document.getElementById('recalc-total-price').innerText;
            showToast(`Цена ${price} успешно зафиксирована на ваш сессионный токен!`);
        }

        // Action: Quick select package helper
        function orderPackage(name, basePrice) {
            document.getElementById('clientNotes').value = `Меня заинтересовал комплект: "${name}" по цене от ${basePrice} ₽/пог.м.`;
            document.getElementById('quote-estimator').scrollIntoView({ behavior: 'smooth' });
            showToast(`Тариф "${name}" выбран. Пожалуйста, подтвердите данные для связи ниже.`);
        }

        // Hero fence preview update helper
        function updateHeroFenceColor(color) {
            const children = document.getElementById('hero-fence-preview').children;
            for (let child of children) {
                child.style.backgroundColor = color;
            }
            showToast('Цвет интерактивного образца обновлен!');
        }

        // Accordion FAQ toggle
        function toggleFaq(id) {
            const content = document.getElementById(`faq-content-${id}`);
            const icon = document.getElementById(`faq-icon-${id}`);
            content.classList.toggle('hidden');
            
            if (content.classList.contains('hidden')) {
                icon.setAttribute('data-lucide', 'plus');
            } else {
                icon.setAttribute('data-lucide', 'minus');
            }
            lucide.createIcons();
        }

        // Handle lead submit
        function handleLeadSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('clientName').value;
            const phone = document.getElementById('clientPhone').value;
            showToast(`Спасибо, ${name}! Ваша заявка успешно отправлена. Технолог свяжется по телефону ${phone} в течение 10 минут.`);
            document.getElementById('leadForm').reset();
        }

        // System Toast alert helper
        function showToast(message) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = "bg-brand-card border border-brand-lime text-white p-4 rounded-xl shadow-2xl flex items-center gap-3 animate-fadeIn pointer-events-auto transition-all duration-300";
            toast.innerHTML = `
                <div class="w-2 h-2 rounded-full bg-brand-lime glow-pulse"></div>
                <span class="text-xs font-semibold">${message}</span>
            `;
            container.appendChild(toast);

            // Auto dismiss toast after 4s
            setTimeout(() => {
                toast.classList.add('opacity-0');
                setTimeout(() => {
                    toast.remove();
                }, 300);
            }, 4000);
        }

        // Preload initial calculation state
        recalcConfigurator();
    </script>
</body>
</html>
6
import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  Fingerprint, 
  Volume2, 
  Image as ImageIcon, 
  Loader2, 
  Sliders, 
  Send, 
  Check, 
  Menu, 
  X, 
  ArrowRight,
  RefreshCw,
  Sun,
  Moon,
  Info,
  ExternalLink
} from 'lucide-react';

// --- CONFIG & CONSTANTS ---
const apiKey = ""; // Populated at runtime by environment
const appId = typeof __app_id !== 'undefined' ? __app_id : 'nexora-co-creation';

// --- STYLES & INTERACTIVE FONTS ---
// Inject premium fonts and custom noise overlay animations dynamically
const injectGlobalStyles = () => {
  if (typeof document === 'undefined') return;
  const styleId = 'nexora-global-styles';
  if (document.getElementById(styleId)) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap';
  document.head.appendChild(link);

  const style = document.createElement('style');
  style.id = styleId;
  style.innerHTML = `
    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(120, 120, 120, 0.3);
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(120, 120, 120, 0.5);
    }

    /* Noise Texture Overlay */
    .bg-noise {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noiseFilter'%3e%3cturbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3e%3c/svg%3e");
      opacity: 0.04;
    }
    .dark .bg-noise {
      opacity: 0.07;
    }

    /* Halftone grid effect */
    .bg-halftone {
      background-image: radial-gradient(rgba(0, 0, 0, 0.15) 1px, transparent 0);
      background-size: 16px 16px;
    }
    .dark .bg-halftone {
      background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 0);
    }
  `;
  document.head.appendChild(style);
};

// --- PRE-LOADED MOCK CREATIVE SYNTHESES (for fallback or fast load) ---
const presetSyntheses = [
  {
    title: "AERO-MYCELIUM EXOSKELETON",
    domain: "Cybernetic Wearables",
    manifesto: "A living garment that grows around the wearer's neurological signature, adapting structural density dynamically based on ambient electro-stress.",
    materials: "Ganoderma Lucidum Hyphae, Liquid Carbon-Nanotube Arrays, Graphene Bioreceptors",
    blueprint: "Utilizes a closed-loop neurological feedback grid. Micro-currents stimulate localized fungal growth to increase density at load-bearing joints.",
    impact: "Reduces synthetic clothing reliance to absolute zero while providing up to 40% physical stamina augmentation.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "NEURAL CHROMATIC TAPESTRY",
    domain: "Acoustic Architecture",
    manifesto: "An architectural partition that dynamically weaves sound waves into glowing, bio-luminescent light threads, preserving acoustic privacy as art.",
    materials: "Phytoplankton Core Membranes, Piezoelectric Silk Weft, Fiber-Optics",
    blueprint: "Intercepts decibels using piezoelectric threads. Converts energy to micro-voltage to illuminate deep-ocean phytoplankton pathways.",
    impact: "Transforms urban noise pollution into custom, relaxing visual symphonies, lowering cognitive stress by 25%.",
    imageUrl: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "CHRONOS METABOLIC CHRONOMETER",
    domain: "Temporal Interfaces",
    manifesto: "A personal timepiece that measures time based on the user's metabolic burn and cellular aging rate, replacing absolute standard hours with subjective lifetime value.",
    materials: "Mitochondrial Bio-Sensors, Synthetic Quartz-Fluid Crystals, Cold Brass Enclosure",
    blueprint: "Measures blood glucose, oxygen saturation, and body heat. Computes highly personalized temporal relativity ratios.",
    impact: "Forces a profound re-evaluation of industrial productivity scales, shifting human focus to health preservation.",
    imageUrl: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=800&q=80"
  }
];

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('home');
  
  // Custom API configuration State
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Creative Lab Input State
  const [selectedDomain, setSelectedDomain] = useState('Cybernetic Wearables');
  const [selectedCatalyst, setSelectedCatalyst] = useState('Grown Organisms + Neural Computation');
  const [customVibe, setCustomVibe] = useState('');
  const [currentSynthesis, setCurrentSynthesis] = useState(presetSyntheses[0]);
  const [synthesizedImage, setSynthesizedImage] = useState(presetSyntheses[0].imageUrl);
  const [audioUrl, setAudioUrl] = useState(null);

  // ROI / Partnership slider State
  const [projectBudget, setProjectBudget] = useState(50000);
  const [timelineWeeks, setTimelineWeeks] = useState(12);

  // Interaction: Touchpoint tracking for Hero SVG
  const [touchPointActive, setTouchPointActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 300, y: 200 });
  const [toastMessage, setToastMessage] = useState(null);
  
  // Mobile navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    injectGlobalStyles();
    // Watch system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Toast notifier
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Helper: Exponential Backoff API Fetch
  const fetchWithBackoff = async (url, options, retries = 5, delay = 1000) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP Error Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      if (retries > 0) {
        await new Promise(resolve => setTimeout(resolve, delay));
        return fetchWithBackoff(url, options, retries - 1, delay * 2);
      } else {
        throw error;
      }
    }
  };

  // Real-Time Synthesis via Gemini 2.5 Flash
  const handleSynthesis = async () => {
    setIsSynthesizing(true);
    setAudioUrl(null); // Clear previous audio
    const prompt = `Create a highly visionary design synthesis for a premium hybrid product/concept. 
    Domain: ${selectedDomain}.
    Catalyst: ${selectedCatalyst}.
    Additional Aesthetic / Direction constraint: ${customVibe || 'Minimalist, avant-garde cybernetics'}.
    Return a beautiful structured response that sounds highly futuristic, philosophical, yet technically grounded.`;

    const systemPrompt = `You are a visionary principal design computational artist at NEXORA Labs. 
    You synthesize incredible futuristic innovations that perfectly merge physical organic substrates, machinery, and neural frameworks.
    Provide your output strictly in JSON format. Do not write markdown, do not write codeblocks. Just valid JSON.
    The schema must strictly follow:
    {
      "title": "A highly punchy, avant-garde product title",
      "domain": "The creative domain",
      "manifesto": "1-2 sentence profound philosophical manifesto about why this object must exist.",
      "materials": "Highly descriptive futuristic, organic, and computing materials (comma separated)",
      "blueprint": "How the device works structurally and neurologically",
      "impact": "The deep human or ecological paradigm shift caused by this creation"
    }`;

    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
      const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: {
            type: "OBJECT",
            properties: {
              title: { type: "STRING" },
              domain: { type: "STRING" },
              manifesto: { type: "STRING" },
              materials: { type: "STRING" },
              blueprint: { type: "STRING" },
              impact: { type: "STRING" }
            },
            required: ["title", "domain", "manifesto", "materials", "blueprint", "impact"]
          }
        }
      };

      const result = await fetchWithBackoff(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const parsedData = JSON.parse(result.candidates?.[0]?.content?.parts?.[0]?.text);
      if (parsedData && parsedData.title) {
        setCurrentSynthesis(parsedData);
        // Reset image placeholder to dynamic generator prompt trigger
        setSynthesizedImage(null);
        showToast("Concept synthesized successfully with Gemini Flash.");
      } else {
        throw new Error("Invalid output structure");
      }
    } catch (error) {
      console.error(error);
      showToast("Could not contact the core intelligence. Loaded premium simulation concept.");
      // Fallback dynamic synthesis to keep the user engaged
      const fallback = {
        title: `SYNAPSE ${selectedDomain.toUpperCase().split(' ')[0]} v0.9`,
        domain: selectedDomain,
        manifesto: `Synthesizing ${selectedCatalyst} to construct next-generation portals of conscious interaction.`,
        materials: `Crystalline Bio-Silicates, Piezo-active polymers, Nano-dendrites`,
        blueprint: `Interfaces through local bio-induction vectors, mapping the feedback metrics in absolute real-time.`,
        impact: `Resets standard modern friction to absolute clarity, letting humanity touch digital matter.`
      };
      setCurrentSynthesis(fallback);
      setSynthesizedImage(null);
    } finally {
      setIsSynthesizing(false);
    }
  };

  // Generate Image via Imagen 4
  const generateVisionImage = async () => {
    if (!currentSynthesis) return;
    setIsGeneratingImage(true);
    
    // We request an abstract, premium, high-contrast, dithered sketch/halftone artwork styled like modern avant-garde design
    const promptText = `An abstract avant-garde premium technical drawing of ${currentSynthesis.title}. Styled in monochromatic high-contrast fine line-art with halftone patterns, dithered dots, and grainy paper textures. Clean white/black editorial style. High detail.`;

    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`;
      const payload = {
        instances: { prompt: promptText },
        parameters: { sampleCount: 1 }
      };

      const result = await fetchWithBackoff(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (result.predictions?.[0]?.bytesBase64Encoded) {
        const generatedUrl = `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
        setSynthesizedImage(generatedUrl);
        showToast("Visual schematic generated with Imagen 4.");
      } else {
        throw new Error("Failed to capture image data bytes.");
      }
    } catch (error) {
      console.error(error);
      showToast("Imagen rendering error. Falling back to abstract designer textures.");
      // Abstract high quality design mockups
      const fallbacks = [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=800&q=80"
      ];
      setSynthesizedImage(fallbacks[Math.floor(Math.random() * fallbacks.length)]);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  // Audio synthesis via Gemini TTS
  const playManifestoSpeech = async () => {
    if (!currentSynthesis) return;
    if (audioUrl) {
      // Play already loaded audio
      const audio = new Audio(audioUrl);
      audio.play();
      return;
    }

    setIsPlayingAudio(true);
    const audioPrompt = `Read this manifesto beautifully and professionally: "${currentSynthesis.title}. ${currentSynthesis.manifesto}"`;

    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;
      const payload = {
        contents: [{ parts: [{ text: audioPrompt }] }],
        generationConfig: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: "Kore" // Deep editorial voice
              }
            }
          }
        },
        model: "gemini-2.5-flash-preview-tts"
      };

      const response = await fetchWithBackoff(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const audioDataB64 = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (audioDataB64) {
        // Convert PCM to playable WAV
        const sampleRateMatch = response.candidates[0].content.parts[0].inlineData.mimeType.match(/rate=(\d+)/);
        const sampleRate = sampleRateMatch ? parseInt(sampleRateMatch[1], 10) : 24000;
        
        const wavUrl = pcmToWavUrl(audioDataB64, sampleRate);
        setAudioUrl(wavUrl);
        const audio = new Audio(wavUrl);
        audio.play();
        showToast("Audio synthesis generated successfully via Gemini TTS.");
      } else {
        throw new Error("No audio payload received.");
      }
    } catch (error) {
      console.error(error);
      showToast("Speech synthesis could not load. Audio device initialization error.");
    } finally {
      setIsPlayingAudio(false);
    }
  };

  // Converts standard raw PCM-16 bit stream to a playable WAV Blob URL
  const pcmToWavUrl = (base64Pcm, sampleRate) => {
    const rawBinary = atob(base64Pcm);
    const buffer = new ArrayBuffer(rawBinary.length);
    const view = new DataView(buffer);
    for (let i = 0; i < rawBinary.length; i++) {
      view.setUint8(i, rawBinary.charCodeAt(i));
    }

    const wavBuffer = new ArrayBuffer(44 + buffer.byteLength);
    const wavView = new DataView(wavBuffer);

    // RIFF Identifier
    wavView.setUint32(0, 0x52494646, false); // "RIFF"
    wavView.setUint32(4, 36 + buffer.byteLength, true);
    wavView.setUint32(8, 0x57415645, false); // "WAVE"
    
    // FMT Sub-chunk
    wavView.setUint32(12, 0x666d7420, false); // "fmt "
    wavView.setUint32(16, 16, true); // Chunk size
    wavView.setUint16(20, 1, true); // Audio format: PCM uncompressed
    wavView.setUint16(22, 1, true); // Channels: Mono
    wavView.setUint32(24, sampleRate, true); // Sample rate
    wavView.setUint32(28, sampleRate * 2, true); // Byte rate
    wavView.setUint16(32, 2, true); // Block align
    wavView.setUint16(34, 16, true); // Bits per sample: 16-bit

    // Data Sub-chunk
    wavView.setUint32(36, 0x64617461, false); // "data"
    wavView.setUint32(40, buffer.byteLength, true);

    // Write samples
    const pcm16 = new Int16Array(buffer);
    for (let i = 0; i < pcm16.length; i++) {
      wavView.setInt16(44 + i * 2, pcm16[i], true);
    }

    const blob = new Blob([wavBuffer], { type: 'audio/wav' });
    return URL.createObjectURL(blob);
  };

  // Dynamic calculations for Project Roadmap Tool
  const calculatedPartnershipLevel = () => {
    const baseScore = (projectBudget / 1000) * (24 / timelineWeeks);
    if (baseScore < 30) return { tier: "Synchronized Studio Sprint", delivery: "Core Proof of Concept + Custom Interface Design", power: "Medium Studio Priority" };
    if (baseScore < 120) return { tier: "Comprehensive Foundry Integration", delivery: "Complete Hardware Synthesis & Custom Trained Neural Model Deployment", power: "Elite Priority, Bi-Weekly Design Audits" };
    return { tier: "Quantum Horizon Cohort", delivery: "Autonomous Multi-Model Co-Creation Grid, Patent Filings & Full Operational Sovereignty", power: "Top Tier Executive Engineering" };
  };

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0a0a0a] text-stone-100' : 'bg-[#fafaf8] text-stone-900'}`}>
      
      {/* Background Textures */}
      <div className="absolute inset-0 bg-noise pointer-events-none z-10" />
      <div className="absolute inset-0 bg-halftone pointer-events-none opacity-40 z-0" />

      {/* Floating System Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce max-w-sm bg-stone-900 dark:bg-white text-white dark:text-black text-xs font-mono p-4 rounded shadow-2xl flex items-center gap-3 border border-stone-800 dark:border-stone-200">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modern High-End Editorial Navigation */}
      <header className="sticky top-0 z-40 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setActiveTab('home')} 
              className="font-serif tracking-widest text-xl font-bold flex items-center gap-2"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              NEXORA<span className="text-[9px] align-super font-sans font-normal border border-stone-400 dark:border-stone-600 px-1 rounded">®</span>
            </button>
            <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider text-stone-500 dark:text-stone-400">
              <button 
                onClick={() => setActiveTab('home')} 
                className={`hover:text-stone-900 dark:hover:text-white transition-colors ${activeTab === 'home' ? 'text-stone-900 dark:text-white font-bold' : ''}`}
              >
                [ INSIGHTS ]
              </button>
              <button 
                onClick={() => setActiveTab('lab')} 
                className={`hover:text-stone-900 dark:hover:text-white transition-colors ${activeTab === 'lab' ? 'text-stone-900 dark:text-white font-bold' : ''}`}
              >
                [ CO-CREATION LAB ]
              </button>
              <button 
                onClick={() => setActiveTab('showroom')} 
                className={`hover:text-stone-900 dark:hover:text-white transition-colors ${activeTab === 'showroom' ? 'text-stone-900 dark:text-white font-bold' : ''}`}
              >
                [ SHOWROOM ]
              </button>
              <button 
                onClick={() => setActiveTab('pricing')} 
                className={`hover:text-stone-900 dark:hover:text-white transition-colors ${activeTab === 'pricing' ? 'text-stone-900 dark:text-white font-bold' : ''}`}
              >
                [ STRATEGY ]
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
            </button>

            {/* Main Interactive CTA */}
            <button 
              onClick={() => setActiveTab('lab')} 
              className="hidden sm:inline-flex items-center gap-2 bg-stone-950 dark:bg-stone-100 text-stone-100 dark:text-stone-950 text-xs font-mono tracking-wider uppercase px-4 py-2 rounded-full hover:opacity-90 active:scale-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Try Co-Creation Lab
            </button>

            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-700 dark:text-stone-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-stone-100/95 dark:bg-stone-950/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8 font-serif text-2xl transition-all">
          <button 
            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} 
            className={`${activeTab === 'home' ? 'underline font-bold' : ''}`}
          >
            Insights Hub
          </button>
          <button 
            onClick={() => { setActiveTab('lab'); setMobileMenuOpen(false); }} 
            className={`${activeTab === 'lab' ? 'underline font-bold' : ''}`}
          >
            Co-Creation Lab
          </button>
          <button 
            onClick={() => { setActiveTab('showroom'); setMobileMenuOpen(false); }} 
            className={`${activeTab === 'showroom' ? 'underline font-bold' : ''}`}
          >
            Showroom
          </button>
          <button 
            onClick={() => { setActiveTab('pricing'); setMobileMenuOpen(false); }} 
            className={`${activeTab === 'pricing' ? 'underline font-bold' : ''}`}
          >
            Pricing & Strategy
          </button>
          <button 
            onClick={() => { setActiveTab('lab'); setMobileMenuOpen(false); }}
            className="mt-4 inline-flex items-center gap-2 bg-stone-950 dark:bg-stone-100 text-stone-100 dark:text-stone-950 text-sm font-sans px-6 py-3 rounded-full"
          >
            <Sparkles className="w-4 h-4" /> Try Co-Creation
          </button>
        </div>
      )}

      {/* --- RENDER CURRENT TAB --- */}
      <main className="max-w-7xl mx-auto px-6 py-8 md:py-16 relative z-10">
        
        {activeTab === 'home' && (
          <div className="space-y-24 animate-fade-in">
            
            {/* HERO SECTION - Replicating structural core of uploaded image but highly interactive */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-200/50 dark:bg-stone-900/50 border border-stone-300 dark:border-stone-800 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-950 dark:bg-stone-100 animate-ping" />
                  <span className="text-[10px] font-mono tracking-widest uppercase">Now Operable Globally</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none text-balance font-serif">
                  Bold Ideas <br />
                  <span className="font-sans italic font-light text-stone-500">That Start With</span> <br />
                  Vision.
                </h1>
                
                <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 max-w-lg leading-relaxed">
                  We empower visionary brands to synthesize digital-to-physical products. Merging autonomous computational logic with organic craftsmanship to drive exceptional, category-defining results.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <button 
                    onClick={() => setActiveTab('lab')} 
                    className="flex items-center justify-center gap-2 bg-stone-950 dark:bg-stone-100 text-stone-100 dark:text-stone-950 font-mono tracking-widest text-xs uppercase px-8 py-4 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-xl"
                  >
                    Get In Touch <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setActiveTab('showroom')}
                    className="flex items-center justify-center gap-2 bg-transparent hover:bg-stone-100 dark:hover:bg-stone-900 text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-stone-800 font-mono tracking-widest text-xs uppercase px-8 py-4 rounded-full transition-all"
                  >
                    View Showroom
                  </button>
                </div>
              </div>

              {/* HIGH-END INTERACTIVE SVG WORK - Adam's touch reconstruction (Human to Machine Interface) */}
              <div className="lg:col-span-7 flex justify-center items-center">
                <div 
                  className="w-full max-w-2xl bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-900 rounded-2xl p-6 md:p-8 relative shadow-inner overflow-hidden group cursor-crosshair"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setMousePos({
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top
                    });
                    setTouchPointActive(true);
                  }}
                  onMouseLeave={() => setTouchPointActive(false)}
                >
                  {/* Glowing dynamic gradient layer following cursor */}
                  <div 
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, rgba(120, 120, 120, 0.08), transparent)`
                    }}
                  />

                  {/* Header-info tag within visual */}
                  <div className="flex justify-between items-center mb-6 border-b border-stone-200/50 dark:border-stone-800/50 pb-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase">System Interaction Grid [0x19B]</span>
                    <span className="text-[10px] font-mono bg-stone-200 dark:bg-stone-900 px-2 py-0.5 rounded text-stone-500">AETHER-V3</span>
                  </div>

                  {/* Animated SVG representing Human & Machine Touching */}
                  <svg 
                    viewBox="0 0 600 350" 
                    className="w-full h-auto drop-shadow-2xl"
                    style={{ filter: theme === 'dark' ? 'invert(0.9) hue-rotate(180deg)' : 'none' }}
                  >
                    <defs>
                      <pattern id="halftone-pattern" width="6" height="6" patternUnits="userSpaceOnUse">
                        <circle cx="3" cy="3" r="1.5" fill="#555555" />
                      </pattern>
                      <filter id="dither">
                        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise" />
                        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7" />
                      </filter>
                    </defs>

                    {/* Left Side: Robotic/Machine Arm (Detailed Mechanical Path) */}
                    <g className="stroke-stone-900 fill-none" strokeWidth="2" strokeLinecap="round">
                      {/* Main Robotic Chassis / Arm base */}
                      <path d="M 0,220 L 100,200 L 180,210" strokeWidth="6" />
                      <path d="M 0,230 L 95,215 L 175,225" strokeWidth="3" opacity="0.6" />
                      
                      {/* Mechanical Joint/Piston */}
                      <circle cx="180" cy="210" r="14" fill="#000000" />
                      <circle cx="180" cy="210" r="6" fill="#ffffff" />
                      <line x1="180" y1="210" x2="230" y2="180" strokeWidth="4" />
                      
                      {/* Robotic Hand Carpus */}
                      <path d="M 230,180 L 260,195 L 290,190" strokeWidth="3" />
                      
                      {/* Robo Fingers stretching toward right (Fingertip around 325, 175) */}
                      <path d="M 290,190 L 320,185 L 340,190" strokeWidth="2.5" /> {/* Pointer */}
                      <circle cx="340" cy="190" r="3" fill="#000000" />
                      
                      <path d="M 290,193 L 315,198 L 335,210" strokeWidth="2" opacity="0.8" /> {/* Middle */}
                      <path d="M 285,195 L 305,210 L 320,225" strokeWidth="2" opacity="0.6" /> {/* Ring */}
                      
                      {/* Thumb reaching lower */}
                      <path d="M 270,195 L 290,215 L 315,220" strokeWidth="2" />
                    </g>

                    {/* Right Side: Human Arm (Smooth Organic Curve Lines) */}
                    <g className="stroke-stone-900 fill-none" strokeWidth="2" strokeLinecap="round">
                      {/* Forearm Outline */}
                      <path d="M 600,270 C 520,220 480,195 440,190" strokeWidth="3.5" />
                      <path d="M 600,310 C 540,260 490,225 450,215" strokeWidth="2.5" />
                      
                      {/* Human Wrist to Hand Metacarpal */}
                      <path d="M 440,190 C 420,185 410,180 395,185" strokeWidth="2.5" />
                      
                      {/* Human Fingers Reaching Left (Fingertip index around 365, 185) */}
                      <path d="M 395,185 C 385,185 375,188 365,190" strokeWidth="2" /> {/* Index Finger */}
                      <circle cx="365" cy="190" r="3.5" fill="#000000" />

                      <path d="M 395,190 C 385,195 378,205 370,210" strokeWidth="1.5" /> {/* Middle Finger */}
                      <path d="M 392,193 C 385,202 375,218 368,225" strokeWidth="1.5" /> {/* Ring */}
                      
                      {/* Thumb */}
                      <path d="M 405,198 C 390,205 385,220 382,230" strokeWidth="2" />
                    </g>

                    {/* Holographic Neural Spark Interface Line when cursor interacts */}
                    {touchPointActive ? (
                      <g>
                        {/* Interactive dynamic spark wires connecting tips dynamically */}
                        <path 
                          d={`M 340,190 Q ${(340 + 365)/2},${190 - 40} 365,190`} 
                          stroke="#10b981" 
                          strokeWidth="2.5" 
                          strokeDasharray="4 2" 
                          className="animate-pulse"
                        />
                        <path 
                          d={`M 340,190 Q ${(340 + 365)/2},${190 + 30} 365,190`} 
                          stroke="#000000" 
                          strokeWidth="1" 
                          strokeDasharray="8 4" 
                        />
                        <circle cx="352.5" cy="190" r="12" fill="#10b981" opacity="0.2" className="animate-ping" />
                        <circle cx="352.5" cy="190" r="4" fill="#10b981" />
                      </g>
                    ) : (
                      // Idle Spark Representation
                      <g>
                        <line x1="340" y1="190" x2="365" y2="190" stroke="#000" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="352.5" cy="190" r="3" fill="#000000" className="animate-pulse" />
                      </g>
                    )}
                  </svg>

                  {/* Caption with interactive state display */}
                  <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-stone-500">
                    <div>[ CO-CREATION TOUCHPOINT SENSOR ]</div>
                    <div>
                      {touchPointActive ? (
                        <span className="text-emerald-500 font-bold blink">ONLINE: CONNECTION METRIC SECURED</span>
                      ) : (
                        <span>SYSTEM SLEEPING (HOVER VISUAL TO INITIALIZE)</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TRUSTED BY TEAMS STRIP (Accurate to uploaded image layout) */}
            <div className="border-t border-b border-stone-200 dark:border-stone-800 py-8">
              <p className="text-center text-[10px] uppercase tracking-[0.25em] text-stone-400 mb-6">
                Trusted by teams of every scale
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-70">
                <span className="font-mono text-xs font-bold tracking-widest">[ MERCURY ]</span>
                <span className="font-mono text-xs font-bold tracking-widest">[ RAMP ]</span>
                <span className="font-mono text-xs font-bold tracking-widest">[ HEX.GG ]</span>
                <span className="font-mono text-xs font-bold tracking-widest">[ VERCEL ]</span>
                <span className="font-mono text-xs font-bold tracking-widest">[ DESCRIPT ]</span>
                <span className="font-mono text-xs font-bold tracking-widest">[ CASH APP ]</span>
                <span className="font-mono text-xs font-bold tracking-widest">[ SUPERCELL ]</span>
                <span className="font-mono text-xs font-bold tracking-widest">[ RUNWAY ]</span>
              </div>
            </div>

            {/* HIGH CONFLICT PHILOSOPHY GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-stone-200 dark:border-stone-800 rounded-xl space-y-4">
                <div className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-900 flex items-center justify-center text-xs font-mono">01</div>
                <h3 className="font-serif text-lg font-bold">Absolute Co-Existence</h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  We reject the premise that technology replaces humanity. We design platforms where computation scales human talent rather than overwriting it.
                </p>
              </div>
              <div className="p-8 border border-stone-200 dark:border-stone-800 rounded-xl space-y-4">
                <div className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-900 flex items-center justify-center text-xs font-mono">02</div>
                <h3 className="font-serif text-lg font-bold">Physical Rigor</h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Digital designs are only powerful when they alter structural reality. Every pixel generated must eventually dictate physical atoms.
                </p>
              </div>
              <div className="p-8 border border-stone-200 dark:border-stone-800 rounded-xl space-y-4">
                <div className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-900 flex items-center justify-center text-xs font-mono">03</div>
                <h3 className="font-serif text-lg font-bold">Dynamic Iteration</h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Real speed is not about shipping broken code. It's about designing continuous cybernetic feedback loops that improve over generations.
                </p>
              </div>
            </div>

            {/* CONCISE MANIFESTO CALLOUT */}
            <div className="bg-stone-950 text-stone-100 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="space-y-4 max-w-2xl">
                <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">Interactive Studio Concept</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">Ready to co-create with active cybernetic intelligence?</h2>
              </div>
              <button 
                onClick={() => setActiveTab('lab')} 
                className="flex items-center gap-2 bg-white text-black font-mono tracking-widest text-xs uppercase px-8 py-4 rounded-full whitespace-nowrap hover:bg-stone-200 active:scale-95 transition-all shadow-xl"
              >
                Launch Creative Lab <ArrowRight className="w-4 h-4 animate-bounce-horizontal" />
              </button>
            </div>
          </div>
        )}

        {/* --- CO-CREATION LAB (REAL GEMINI BACKED GENERATOR ENGINE) --- */}
        {activeTab === 'lab' && (
          <div className="space-y-12 animate-fade-in">
            <div className="border-b border-stone-200 dark:border-stone-800 pb-6">
              <span className="text-xs font-mono text-stone-500">[ REAL-TIME SYNTHESIS SUITE ]</span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mt-2">Active Intelligence Engine</h1>
              <p className="text-stone-500 text-xs md:text-sm mt-1 max-w-2xl">
                A sandbox for designers. Input contrasting parameters below to synthesize full technical blueprints. Backed by Google's Gemini models for text, imagery, and custom speech generation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Controls Column */}
              <div className="lg:col-span-5 bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-900 rounded-xl p-6 space-y-6">
                <div className="flex items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
                  <Sliders className="w-4 h-4 text-stone-500" />
                  <span className="text-xs font-mono font-bold uppercase">Configure Synthesis Matrix</span>
                </div>

                {/* Domain selector */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-widest uppercase text-stone-400">Target Creative Domain</label>
                  <select 
                    value={selectedDomain}
                    onChange={(e) => setSelectedDomain(e.target.value)}
                    className="w-full bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-stone-800 px-3 py-2 rounded text-xs font-sans focus:outline-none focus:ring-1 focus:ring-stone-500"
                  >
                    <option value="Cybernetic Wearables">Cybernetic Wearables</option>
                    <option value="Acoustic Architecture">Acoustic Architecture</option>
                    <option value="Temporal Interfaces">Temporal Interfaces</option>
                    <option value="Tactile Bio-Computation">Tactile Bio-Computation</option>
                    <option value="Kinetic Aerodynamics">Kinetic Aerodynamics</option>
                  </select>
                </div>

                {/* Paradox Catalyst */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-widest uppercase text-stone-400">Paradoxical Catalyst</label>
                  <select 
                    value={selectedCatalyst}
                    onChange={(e) => setSelectedCatalyst(e.target.value)}
                    className="w-full bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-stone-800 px-3 py-2 rounded text-xs font-sans focus:outline-none focus:ring-1 focus:ring-stone-500"
                  >
                    <option value="Grown Organisms + Neural Computation">Grown Organisms + Neural Computation</option>
                    <option value="Ancient Stonework + Micro-Voltage Optics">Ancient Stonework + Micro-Voltage Optics</option>
                    <option value="Sub-Zero Sound + Organic Polymers">Sub-Zero Sound + Organic Polymers</option>
                    <option value="Volatile Biomaterials + Quantum Entanglement">Volatile Biomaterials + Quantum Entanglement</option>
                    <option value="Heavy Raw Iron + Lightwave Projections">Heavy Raw Iron + Lightwave Projections</option>
                  </select>
                </div>

                {/* Custom Aesthetic Vibe Override */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-widest uppercase text-stone-400">Custom Aesthetic Catalyst (Optional)</label>
                  <textarea 
                    value={customVibe}
                    onChange={(e) => setCustomVibe(e.target.value)}
                    placeholder="e.g., Ultra-matte, weathered clay textures, high contrasting brushed metals"
                    className="w-full h-24 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-stone-800 px-3 py-2 rounded text-xs font-sans focus:outline-none focus:ring-1 focus:ring-stone-500 resize-none"
                  />
                </div>

                {/* Synthesize Action Buttons */}
                <button 
                  onClick={handleSynthesis}
                  disabled={isSynthesizing}
                  className="w-full flex items-center justify-center gap-2 bg-stone-950 dark:bg-stone-100 text-stone-100 dark:text-stone-950 font-mono tracking-widest text-xs uppercase py-3.5 rounded-full hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
                >
                  {isSynthesizing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      SYNTHESIZING PARADOX...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      Synthesize Concept (Gemini Flash)
                    </>
                  )}
                </button>
              </div>

              {/* Outputs Showcase Column */}
              <div className="lg:col-span-7 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 rounded-xl p-6 md:p-8 space-y-6 shadow-sm min-h-[450px] relative">
                
                {/* Active model tag info bar */}
                <div className="flex justify-between items-center text-[10px] font-mono text-stone-400 border-b border-stone-200 dark:border-stone-800 pb-3">
                  <div>STATUS: REAL-TIME CONTEXT READY</div>
                  <div>INTELLIGENCE HUB: V2.5</div>
                </div>

                {/* Real generated specifications */}
                {currentSynthesis ? (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono bg-stone-100 dark:bg-stone-850 text-stone-500 px-2 py-1 rounded">
                        {currentSynthesis.domain}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight">
                        {currentSynthesis.title}
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {/* Manifesto Display */}
                      <blockquote className="border-l-2 border-stone-950 dark:border-stone-100 pl-4 italic text-sm md:text-base text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                        "{currentSynthesis.manifesto}"
                      </blockquote>

                      {/* Technical specifications breakdown */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans mt-4">
                        <div className="p-4 bg-stone-50 dark:bg-stone-850/50 rounded border border-stone-100 dark:border-stone-800 space-y-1">
                          <span className="text-[10px] font-mono tracking-wider uppercase text-stone-400">Material Synthesis Matrix</span>
                          <p className="text-stone-700 dark:text-stone-300 font-medium leading-relaxed">{currentSynthesis.materials}</p>
                        </div>
                        <div className="p-4 bg-stone-50 dark:bg-stone-850/50 rounded border border-stone-100 dark:border-stone-800 space-y-1">
                          <span className="text-[10px] font-mono tracking-wider uppercase text-stone-400">System Blueprint</span>
                          <p className="text-stone-700 dark:text-stone-300 font-medium leading-relaxed">{currentSynthesis.blueprint}</p>
                        </div>
                      </div>

                      {/* Paradigm Shift / Future Impact */}
                      <div className="p-4 bg-stone-50 dark:bg-stone-850/50 rounded border border-stone-100 dark:border-stone-800 text-xs space-y-1">
                        <span className="text-[10px] font-mono tracking-wider uppercase text-stone-400">Societal Paradigm Shift</span>
                        <p className="text-stone-700 dark:text-stone-300 font-medium leading-relaxed">{currentSynthesis.impact}</p>
                      </div>
                    </div>

                    {/* Integrated AI Operations Panel */}
                    <div className="border-t border-stone-200 dark:border-stone-850 pt-6 space-y-4">
                      <div className="flex flex-col sm:flex-row gap-3">
                        {/* Audio Synthesizer */}
                        <button 
                          onClick={playManifestoSpeech}
                          disabled={isPlayingAudio}
                          className="flex-1 flex items-center justify-center gap-2 border border-stone-200 dark:border-stone-800 text-xs font-mono py-3 px-4 rounded-full hover:bg-stone-50 dark:hover:bg-stone-850 transition-colors disabled:opacity-50"
                        >
                          {isPlayingAudio ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-500" />
                              SYNTHESIZING SYSTEM AUDIO...
                            </>
                          ) : (
                            <>
                              <Volume2 className="w-3.5 h-3.5" />
                              Hear Manifesto Speech (TTS)
                            </>
                          )}
                        </button>

                        {/* Image Schematics via Imagen */}
                        <button 
                          onClick={generateVisionImage}
                          disabled={isGeneratingImage}
                          className="flex-1 flex items-center justify-center gap-2 bg-stone-900 text-white dark:bg-white dark:text-black text-xs font-mono py-3 px-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                          {isGeneratingImage ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              GENERATING SCHEMATICS...
                            </>
                          ) : (
                            <>
                              <ImageIcon className="w-3.5 h-3.5" />
                              Render Visual (Imagen 4)
                            </>
                          )}
                        </button>
                      </div>

                      {/* Display synthesized image */}
                      {synthesizedImage && (
                        <div className="space-y-2 animate-fade-in">
                          <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400">Synthesized Visual Artifact</span>
                          <div className="relative border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden aspect-video bg-stone-100 dark:bg-stone-950">
                            <img 
                              src={synthesizedImage} 
                              alt={currentSynthesis.title} 
                              className="w-full h-full object-cover filter contrast-125 saturate-50 brightness-95"
                            />
                            {/* Technical visual overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-[10px] font-mono text-white flex justify-between">
                              <span>SCHEMATIC v4.0.01 // {currentSynthesis.title.replace(/\s+/g, '-').toUpperCase()}</span>
                              <span>GENERATION COMPLETE</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-stone-400 space-y-2 text-xs">
                    <Info className="w-8 h-8 opacity-50" />
                    <span>Select matrix parameters and click Synthesize.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* --- SHOWROOM (FILTERED GALLERY) --- */}
        {activeTab === 'showroom' && (
          <div className="space-y-12 animate-fade-in">
            <div className="border-b border-stone-200 dark:border-stone-800 pb-6">
              <span className="text-xs font-mono text-stone-500">[ CYBERNETIC CO-CREATIVE ARCHIVE ]</span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mt-2">The Synthesized Artifacts</h1>
              <p className="text-stone-500 text-xs md:text-sm mt-1 max-w-2xl">
                Explore an curated library of experimental products generated, developed, and realized in dynamic partnership with our computational network.
              </p>
            </div>

            {/* Premium Archive list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {presetSyntheses.map((art, idx) => (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-900 rounded-xl overflow-hidden shadow-sm group flex flex-col justify-between"
                >
                  <div className="relative aspect-square overflow-hidden bg-stone-100 dark:bg-stone-900">
                    <img 
                      src={art.imageUrl} 
                      alt={art.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-115 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent p-6 flex flex-col justify-end text-white">
                      <span className="text-[10px] font-mono tracking-widest text-stone-300 uppercase">{art.domain}</span>
                      <h3 className="text-xl font-serif font-bold mt-1">{art.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed italic">
                      "{art.manifesto}"
                    </p>

                    <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-900">
                      <div className="text-[10px] font-mono">
                        <span className="text-stone-400">STRUCTURE: </span>
                        <span className="text-stone-700 dark:text-stone-300 font-sans">{art.blueprint.substring(0, 100)}...</span>
                      </div>
                      <div className="text-[10px] font-mono">
                        <span className="text-stone-400">MATERIALS: </span>
                        <span className="text-stone-700 dark:text-stone-300 font-sans">{art.materials}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        setCurrentSynthesis(art);
                        setSynthesizedImage(art.imageUrl);
                        setActiveTab('lab');
                        showToast(`Transferred ${art.title} structure into experimental matrix.`);
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 text-[10px] font-mono uppercase tracking-widest py-2 rounded transition-colors"
                    >
                      Load into Interactive Sandbox
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- STRATEGY & ROI membership calculator --- */}
        {activeTab === 'pricing' && (
          <div className="space-y-12 animate-fade-in">
            <div className="border-b border-stone-200 dark:border-stone-800 pb-6">
              <span className="text-xs font-mono text-stone-500">[ CO-CREATION STRATEGY MATRIX ]</span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mt-2">Resource Strategy Suite</h1>
              <p className="text-stone-500 text-xs md:text-sm mt-1 max-w-2xl">
                We design bespoke collaboration environments. Use the calculator below to calibrate required structural resources and compute operational tiers instantly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Slider Inputs */}
              <div className="lg:col-span-5 bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-900 p-6 rounded-xl space-y-8">
                <div className="flex items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
                  <Sliders className="w-4 h-4 text-stone-500" />
                  <span className="text-xs font-mono font-bold uppercase">Configure Resource Bounds</span>
                </div>

                {/* Slider: Project Budget */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-stone-400 uppercase">Target Capital allocation</span>
                    <span className="text-stone-900 dark:text-stone-100 font-bold">${projectBudget.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="15000" 
                    max="500000" 
                    step="5000"
                    value={projectBudget}
                    onChange={(e) => setProjectBudget(Number(e.target.value))}
                    className="w-full accent-stone-950 dark:accent-stone-100"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-stone-400">
                    <span>$15K (Sprint POC)</span>
                    <span>$500K (Enterprise Transformation)</span>
                  </div>
                </div>

                {/* Slider: Timeline */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-stone-400 uppercase">Operational Runway Timeline</span>
                    <span className="text-stone-900 dark:text-stone-100 font-bold">{timelineWeeks} Weeks</span>
                  </div>
                  <input 
                    type="range" 
                    min="4" 
                    max="52" 
                    step="2"
                    value={timelineWeeks}
                    onChange={(e) => setTimelineWeeks(Number(e.target.value))}
                    className="w-full accent-stone-950 dark:accent-stone-100"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-stone-400">
                    <span>4 Weeks (Atomic)</span>
                    <span>52 Weeks (Yearly Foundry Retainer)</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Assessment Outputs */}
              <div className="lg:col-span-7 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 p-8 rounded-xl space-y-6 shadow-sm">
                <span className="text-[10px] font-mono text-stone-400 tracking-widest uppercase">Computed Operational Strategy</span>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono bg-stone-100 dark:bg-stone-850 px-2 py-0.5 rounded text-stone-500">Tier Recommendation</span>
                    <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                      {calculatedPartnershipLevel().tier}
                    </h2>
                  </div>

                  <div className="p-4 bg-stone-50 dark:bg-stone-850/50 rounded border border-stone-100 dark:border-stone-800 text-xs space-y-2">
                    <span className="text-[10px] font-mono text-stone-400 uppercase">Anticipated Foundry Deliverables</span>
                    <p className="text-stone-800 dark:text-stone-200 font-medium leading-relaxed">
                      {calculatedPartnershipLevel().delivery}
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 dark:bg-stone-850/50 rounded border border-stone-100 dark:border-stone-800 text-xs space-y-2">
                    <span className="text-[10px] font-mono text-stone-400 uppercase">Internal Team Priority Metrics</span>
                    <p className="text-stone-850 dark:text-stone-200 font-medium leading-relaxed">
                      {calculatedPartnershipLevel().power}
                    </p>
                  </div>
                </div>

                {/* Simulated Inquiry submission */}
                <div className="pt-6 border-t border-stone-200 dark:border-stone-850 space-y-4">
                  <h4 className="text-xs font-mono uppercase font-bold text-stone-400">Lock in Resource Allocation</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter design lead/executive email" 
                      className="flex-1 bg-stone-50 dark:bg-stone-850 border border-stone-300 dark:border-stone-800 px-4 py-3 rounded-full text-xs font-sans focus:outline-none"
                    />
                    <button 
                      onClick={() => showToast(`Strategy proposal requested for ${calculatedPartnershipLevel().tier}. Our computational partners will reach out shortly.`)}
                      className="bg-stone-950 dark:bg-stone-100 text-stone-100 dark:text-stone-950 text-xs font-mono py-3 px-6 rounded-full hover:opacity-90 active:scale-95 transition-all"
                    >
                      Secure Proposal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* --- FOOTER (ACCURATE TO THE SOURCE MATERIAL'S HIGH-END STYLING) --- */}
      <footer className="border-t border-stone-200 dark:border-stone-800 mt-24 py-12 bg-stone-50 dark:bg-[#060606] transition-colors relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h4 className="font-serif tracking-widest text-lg font-bold">NEXORA®</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              We design continuous cybernetic architectures for modern visionary brands. 
              Bridging computing neural layers and physical artifact designs seamlessly.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-[10px] font-mono tracking-widest uppercase text-stone-400">Functional Sandboxes</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('lab')} className="hover:underline text-stone-500 hover:text-stone-900 dark:hover:text-white">
                  Co-Creation Lab Suite
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('showroom')} className="hover:underline text-stone-500 hover:text-stone-900 dark:hover:text-white">
                  Design Showroom
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('pricing')} className="hover:underline text-stone-500 hover:text-stone-900 dark:hover:text-white">
                  Operational Pricing Matrix
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-[10px] font-mono tracking-widest uppercase text-stone-400">Technical Protocol Stack</h5>
            <ul className="space-y-2 text-xs text-stone-500">
              <li>Intelligence: Gemini Flash v2.5</li>
              <li>Aesthetic Synthesis: Imagen v4</li>
              <li>Temporal Synthesis: Gemini TTS</li>
              <li>Protocol Frame: React 18</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] font-mono tracking-widest uppercase text-stone-400">Subscribe for Insights</h5>
            <div className="flex border border-stone-300 dark:border-stone-850 rounded-full overflow-hidden bg-white dark:bg-stone-900">
              <input 
                type="email" 
                placeholder="Secure connection feed" 
                className="bg-transparent text-xs px-3 py-2 flex-1 focus:outline-none"
              />
              <button 
                onClick={() => showToast("Secured subscription to the Nexora insights feed.")}
                className="bg-stone-950 dark:bg-stone-100 text-stone-100 dark:text-stone-950 px-3 flex items-center"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="text-[9px] font-mono text-stone-400">
              © 2026 NEXORA LABS INC. ALL PARADOXES SOLVED.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
7
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FIREBLOX — Digital Asset Infrastructure</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600&family=Barlow+Condensed:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">
<style>
/* ═══════════════════════════════════════════
   DESIGN TOKENS & RESET
═══════════════════════════════════════════ */
:root {
  --bg-base: #F4F7F9; /* Soothing cool pearl - kills glare */
  --bg-surface: #FFFFFF;
  --text-dark: #0A1128; /* Deep rich navy instead of harsh black */
  --text-gray: #4A5568;
  --text-light: #A0AEC0;
  --border-light: rgba(10, 17, 40, 0.08); /* Darkened slightly for better visibility */
  --border-med: rgba(10, 17, 40, 0.15);
  --fire-start: #E0284F; /* Darkened for much better legibility */
  --fire-end: #D9381E;
  --fire-grad: linear-gradient(135deg, var(--fire-start) 0%, var(--fire-end) 100%);
  --fire-shadow: 0 8px 20px -6px rgba(224, 40, 79, 0.35);
  --surface-shadow: 0 12px 36px -4px rgba(10, 17, 40, 0.05);
}

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--bg-base);color:var(--text-dark);font-family:'Barlow',sans-serif;overflow-x:hidden;min-height:100vh}

/* ═══════════════════════════════════════════
   NAV
═══════════════════════════════════════════ */
nav{
  position:fixed;top:0;left:0;right:0;z-index:1000;
  display:flex;align-items:center;justify-content:space-between;
  padding:22px 52px;
  background:rgba(244, 247, 249, 0);
  transition:all .4s ease;
  border-bottom:1px solid transparent;
}
nav.scrolled{background:rgba(255,255,255,.9);backdrop-filter:blur(12px);border-bottom:1px solid var(--border-light);box-shadow:0 4px 20px rgba(10,17,40,0.02)}
.logo{font-weight:800;font-size:14px;letter-spacing:.22em;text-transform:uppercase;cursor:pointer;flex-shrink:0;color:var(--text-dark)}
.nav-links{display:flex;align-items:center;gap:34px;list-style:none}
.nav-links a{color:var(--text-gray);text-decoration:none;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;transition:color .2s;cursor:pointer}
.nav-links a:hover,.nav-links a.active{color:var(--fire-end)}
.nav-right{display:flex;align-items:center;gap:20px;flex-shrink:0}
.btn-demo{font-family:'Barlow',sans-serif;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--text-dark);background:#FFFFFF;cursor:pointer;padding:10px 22px;border:1px solid var(--border-med);transition:all .2s;border-radius:4px;box-shadow:0 2px 4px rgba(10,17,40,0.02)}
.btn-demo:hover{border-color:var(--text-dark);transform:translateY(-1px)}
.hamburger{display:flex;flex-direction:column;gap:5px;cursor:pointer;width:24px}
.hamburger span{display:block;height:1.5px;background:var(--text-dark);border-radius:2px;transition:.3s}
.hamburger span:nth-child(2){width:65%}

/* ═══════════════════════════════════════════
   PAGE SYSTEM
═══════════════════════════════════════════ */
.page{display:none}
.page.active{display:block}

/* ═══════════════════════════════════════════
   HERO
═══════════════════════════════════════════ */
.hero{
  position:relative;width:100%;height:100vh;min-height:700px;
  overflow:hidden;background:var(--bg-base);
}

/* Softer ambient glows */
.blue-glow{position:absolute;top:-8%;right:-4%;width:42%;height:62%;background:radial-gradient(ellipse at 55% 28%,rgba(65,105,225,.08) 0%,transparent 65%);filter:blur(65px);z-index:1;pointer-events:none}
.left-amb{position:absolute;bottom:0;left:0;width:30%;height:52%;background:radial-gradient(ellipse at 0% 100%,rgba(255,65,108,.06) 0%,transparent 65%);filter:blur(45px);z-index:1;pointer-events:none}

/* BLOCKCHAIN TEXT - Made black */
.blockchain-text{
  position:absolute;top:0;left:0;right:0;z-index:5;
  text-align:center;padding-top:clamp(100px,13vh,145px);
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(100px,19.5vw,285px);
  letter-spacing:-.015em;line-height:1;
  color: #000000; 
  opacity: 0.12; 
  -webkit-text-stroke: 0;
  animation:textReveal 1.2s cubic-bezier(.16,1,.3,1) .1s both;
}
@keyframes textReveal{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:translateY(0)}}

/* SPHERE - Removed dark shadows, made it a luminous energy core */
.sphere-wrap{
  position:absolute;top:96%;left:50%;transform:translate(-50%,-50%);
  width:clamp(750px,115vw,1600px);aspect-ratio:1/1;z-index:2;
  animation:sphereIn 1.6s cubic-bezier(.16,1,.3,1) .2s both;
}
@keyframes sphereIn{from{opacity:0;transform:translate(-50%,-50%) translateY(65px)}to{opacity:1;transform:translate(-50%,-50%) translateY(0)}}

.sphere{width:100%;height:100%;border-radius:50%;position:relative}
.sphere::before{
  content:'';position:absolute;inset:0;border-radius:50%;
  background:
    radial-gradient(ellipse at 35% 24%, #FFCA28 0%, transparent 45%),
    radial-gradient(ellipse at 60% 19%, #FF5200 0%, transparent 40%),
    radial-gradient(ellipse at 50% 50%, #FF416C 0%, #D90022 45%, #7A0010 80%, #2D0005 100%);
}
.sphere::after{
  content:'';position:absolute;inset:0;border-radius:50%;
  background:
    radial-gradient(ellipse at 78% 13%, rgba(255,255,255,0.5) 0%, transparent 40%),
    radial-gradient(ellipse at 18% 72%, rgba(65,105,225,0.25) 0%, transparent 40%);
}
.sphere-shine{position:absolute;inset:0;border-radius:50%;background:radial-gradient(ellipse at 37% 11%,rgba(255,255,255,.4) 0%,transparent 30%),radial-gradient(ellipse at 70% 8%,rgba(255,255,255,.2) 0%,transparent 28%)}
.sphere-halo{position:absolute;inset:-10%;border-radius:50%;background:radial-gradient(ellipse at 50% 44%,rgba(255,65,108,.12) 0%,transparent 65%);filter:blur(40px);z-index:-1}

/* HERO BOTTOM */
.hero-bottom{
  position:absolute;bottom:0;left:0;right:0;z-index:6;
  padding:0 52px 64px;display:flex;align-items:flex-end;justify-content:space-between;
  animation:bottomReveal 1.3s cubic-bezier(.16,1,.3,1) .5s both;
}
@keyframes bottomReveal{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
.hero-tagline h2{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:clamp(30px,4.5vw,56px);text-transform:uppercase;line-height:0.98;letter-spacing:.02em;color:var(--text-dark)}
.hero-tagline h2 .dim{background:var(--fire-grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:block;padding-right:10px}
.hero-desc{max-width:255px;text-align:right;font-size:10.5px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--text-gray);line-height:1.85}

/* ═══════════════════════════════════════════
   PARTNERS
═══════════════════════════════════════════ */
.partners{
  display:flex;align-items:center;justify-content:space-between;
  padding:26px 52px;border-top:1px solid var(--border-light);background:var(--bg-surface);
}
.partner{font-size:13px;font-weight:700;color:var(--text-light);display:flex;align-items:center;gap:7px;transition:color .2s;cursor:pointer;white-space:nowrap;text-decoration:none;letter-spacing:.03em}
.partner:hover{color:var(--text-dark)}
.partner.revolut{font-style:italic;font-size:14px}
.partner.bybit{font-weight:900;font-size:15.5px;letter-spacing:-.03em}
.partner.visa{font-weight:900;font-size:19px;letter-spacing:.05em}
.bridge-ring{width:16px;height:16px;border:1.5px solid currentColor;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;opacity:.8}

/* ═══════════════════════════════════════════
   SHARED SECTION STYLES
═══════════════════════════════════════════ */
.section{padding:100px 52px;border-top:1px solid var(--border-light);background:var(--bg-surface)} /* White bg to make text & orbitals pop */
.section-sm{padding:70px 52px;border-top:1px solid var(--border-light);background:var(--bg-base)}
.eyebrow{font-size:11px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:var(--fire-end);margin-bottom:20px}
.section-heading{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:clamp(36px,5.5vw,72px);text-transform:uppercase;line-height:.96;color:var(--text-dark);margin-bottom:24px}
.section-heading-sm{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:clamp(28px,4vw,52px);text-transform:uppercase;line-height:.96;color:var(--text-dark);margin-bottom:20px}
.section-body{font-size:15px;color:var(--text-gray);line-height:1.8;max-width:560px}

/* BUTTONS */
.btn-outline{display:inline-block;margin-top:36px;padding:13px 30px;border:1px solid var(--border-med);font-family:'Barlow',sans-serif;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dark);background:var(--bg-surface);cursor:pointer;transition:all .2s;text-decoration:none;border-radius:4px}
.btn-outline:hover{border-color:var(--text-dark);transform:translateY(-1px);box-shadow:0 4px 12px rgba(10,17,40,0.04)}
.btn-primary{display:inline-block;padding:16px 38px;background:var(--fire-grad);color:#fff;border:none;font-family:'Barlow',sans-serif;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s;text-decoration:none;border-radius:4px;box-shadow:var(--fire-shadow)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 24px -6px rgba(255, 75, 43, 0.45)}

/* ═══════════════════════════════════════════
   STATS & GRIDS
═══════════════════════════════════════════ */
.stats-grid{display:grid;grid-template-columns:repeat(3,1fr);background:var(--border-light);gap:1px;border-top:1px solid var(--border-light)}
.stat-cell{background:var(--bg-surface);padding:58px 52px;transition:background 0.3s}
.stat-cell:hover{background:var(--bg-base)}
.stat-num{font-family:'Bebas Neue',sans-serif;font-size:clamp(52px,7vw,92px);line-height:1;color:var(--text-dark);margin-bottom:10px}
.stat-label{font-size:11.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--text-gray)}

/* ═══════════════════════════════════════════
   MARQUEE
═══════════════════════════════════════════ */
.marquee-wrap{border-top:1px solid var(--border-light);border-bottom:1px solid var(--border-light);overflow:hidden;padding:18px 0;background:var(--bg-surface)}
.marquee-track{display:flex;animation:marquee 26s linear infinite;white-space:nowrap}
.marquee-item{font-family:'Bebas Neue',sans-serif;font-size:36px;color:transparent;-webkit-text-stroke:1px var(--border-med);padding:0 26px;flex-shrink:0;letter-spacing:.05em}
.marquee-item.red{-webkit-text-stroke:1px rgba(255, 65, 108, 0.25)}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

/* ═══════════════════════════════════════════
   FEATURE CARDS - REDESIGNED FOR LIGHT THEME
═══════════════════════════════════════════ */
.cards-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:0 52px 80px;background:var(--bg-base);border-top:none}
.cards-grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;padding:0 52px 80px;background:var(--bg-base);border-top:none}
.card{background:#ffffff;padding:46px 40px;position:relative;transition:all .3s ease;z-index:1;border:1px solid var(--border-light);border-radius:12px;box-shadow:0 4px 12px rgba(10,17,40,0.02)}
.card:hover{transform:translateY(-4px);box-shadow:0 12px 30px rgba(10,17,40,0.06);border-color:rgba(224,40,79,0.3);z-index:2}
.card-num{font-size:12px;font-weight:800;letter-spacing:.2em;color:var(--text-light);margin-bottom:24px}
.card-icon{width:48px;height:48px;margin-bottom:24px;background:rgba(224,40,79,0.06);padding:12px;border-radius:12px;border:1px solid rgba(224,40,79,0.1)}
.card-icon svg{width:100%;height:100%;fill:none;stroke:var(--fire-start);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.card-tag-row{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px}
.card-tag{font-size:9.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:5px 12px;border:1px solid rgba(10,17,40,0.08);background:#F8FAFC;color:var(--text-dark);border-radius:6px}
.card-title{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:20px;text-transform:uppercase;letter-spacing:.06em;color:var(--text-dark);margin-bottom:13px;line-height:1.15}
.card-desc{font-size:13.5px;color:var(--text-gray);line-height:1.75}

/* ═══════════════════════════════════════════
   STATUS BANNER
═══════════════════════════════════════════ */
.status-banner{display:flex;align-items:center;gap:10px;padding:12px 20px;background:#ECFDF3;border:1px solid #D1FADF;width:fit-content;margin-top:28px;border-radius:4px}
.status-dot{width:8px;height:8px;border-radius:50%;background:#12B76A;animation:pulse 2s ease infinite}
@keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(18,183,106,.4)}50%{opacity:.8;box-shadow:0 0 0 6px rgba(18,183,106,0)}}
.status-text{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#027A48}

/* ═══════════════════════════════════════════
   DASHBOARD MOCKUP
═══════════════════════════════════════════ */
.dashboard-wrap{border-top:1px solid var(--border-light);padding:80px 52px;background:var(--bg-base);}
.dashboard-inner{border:1px solid var(--border-light);background:var(--bg-surface);overflow:hidden;border-radius:8px;box-shadow:var(--surface-shadow);}
.dash-header{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;border-bottom:1px solid var(--border-light);background:#FAFCFD;}
.dash-logo{font-size:12px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;display:flex;align-items:center;gap:10px;color:var(--text-dark)}
.dash-n{width:24px;height:24px;background:var(--fire-grad);display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:16px;color:#fff;border-radius:4px}
.dash-nav{display:flex;gap:24px}
.dash-nav span{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-gray);cursor:pointer;padding:4px 0;transition:color .2s}
.dash-nav span.active{color:var(--text-dark);border-bottom:2px solid var(--fire-end)}
.dash-body{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:1px;background:var(--border-light);padding:0}
.dash-kpi{background:var(--bg-surface);padding:28px 24px}
.dash-kpi-label{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--text-gray);margin-bottom:10px}
.dash-kpi-val{font-family:'Bebas Neue',sans-serif;font-size:42px;color:var(--text-dark);line-height:1}
.dash-kpi-val.green{color:#12B76A}
.dash-kpi-val.red{color:var(--fire-end)}
.dash-table-wrap{background:var(--bg-surface);padding:24px;grid-column:1/-1;border-top:1px solid var(--border-light)}
.dash-table-title{font-size:11px;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:var(--text-dark);margin-bottom:16px;display:flex;align-items:center;gap:8px}
.live-pill{font-size:9px;font-weight:800;padding:2px 8px;background:#ECFDF3;border:1px solid #D1FADF;color:#027A48;letter-spacing:.08em;border-radius:4px}
table{width:100%;border-collapse:collapse}
th{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--text-gray);padding:8px 12px;text-align:left;border-bottom:1px solid var(--border-light)}
td{font-size:12.5px;color:var(--text-dark);padding:12px 12px;border-bottom:1px solid var(--border-light)}
tr:last-child td{border-bottom:none}
td.mono{font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:13px;letter-spacing:.03em;color:var(--text-gray)}
td.green-val{color:#12B76A;font-weight:700}
.type-badge{font-size:10px;font-weight:700;letter-spacing:.08em;padding:3px 9px;border:1px solid var(--border-light);background:var(--bg-base);color:var(--text-gray);border-radius:4px}

/* ═══════════════════════════════════════════
   TWO-COL
═══════════════════════════════════════════ */
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
.two-col-3{display:grid;grid-template-columns:1fr 1.4fr;gap:80px;align-items:center}

/* ═══════════════════════════════════════════
   VISUAL ORB
═══════════════════════════════════════════ */
.orb-wrap{position:relative;height:340px;display:flex;align-items:center;justify-content:center}
.orb{width:240px;height:240px;border-radius:50%;background:radial-gradient(circle at 38% 33%,var(--fire-start) 0%,var(--fire-end) 58%,#900018 100%);box-shadow:0 0 70px rgba(255,65,108,.2);position:relative}
.orb::after{content:'';position:absolute;inset:0;border-radius:50%;background:radial-gradient(ellipse at 74% 20%,rgba(255,255,255,.3) 0%,transparent 44%)}
.orbit{position:absolute;border:1px solid rgba(10,17,40,0.15);border-radius:50%;animation:spin 18s linear infinite} /* Darkened the border so orbitals are visible */
.orbit:nth-child(1){width:320px;height:320px}
.orbit:nth-child(2){width:400px;height:400px;animation-duration:27s;animation-direction:reverse}
.o-dot{position:absolute;top:-3.5px;left:50%;transform:translateX(-50%);width:6px;height:6px;border-radius:50%;background:var(--fire-end);box-shadow:0 0 10px var(--fire-end)}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}

/* ═══════════════════════════════════════════
   TRUSTED MARQUEE (logos)
═══════════════════════════════════════════ */
.logo-marquee-wrap{overflow:hidden;padding:24px 0;border-top:1px solid var(--border-light);background:var(--bg-base)}
.logo-marquee-track{display:flex;animation:marquee 30s linear infinite;white-space:nowrap}
.logo-item{font-size:13px;font-weight:800;color:var(--text-light);padding:0 36px;flex-shrink:0;letter-spacing:.05em;text-transform:uppercase;transition:color .2s}
.logo-item:hover{color:var(--text-gray)}

/* ═══════════════════════════════════════════
   ADVANTAGE LIST
═══════════════════════════════════════════ */
.adv-list{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border-light);border-top:1px solid var(--border-light)}
.adv-item{background:var(--bg-surface);padding:42px 40px;display:flex;gap:22px;transition:all .3s}
.adv-item:hover{background:var(--bg-surface);transform:translateY(-2px);box-shadow:var(--surface-shadow);z-index:2;border-radius:4px}
.adv-icon{width:36px;height:36px;flex-shrink:0;margin-top:2px}
.adv-icon svg{width:100%;height:100%;fill:none;stroke:var(--fire-end);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.adv-title{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:17px;text-transform:uppercase;letter-spacing:.05em;color:var(--text-dark);margin-bottom:10px}
.adv-desc{font-size:13px;color:var(--text-gray);line-height:1.7}

/* ═══════════════════════════════════════════
   PAGE HERO (inner pages)
═══════════════════════════════════════════ */
.inner-hero{position:relative;padding:180px 52px 100px;overflow:hidden;background:var(--bg-base);border-bottom:1px solid var(--border-light);}
.inner-hero::before{content:'';position:absolute;top:-20%;right:-5%;width:50%;height:120%;background:radial-gradient(ellipse at 60% 30%,rgba(255,65,108,.06) 0%,transparent 65%);pointer-events:none;filter:blur(40px);}
.page-label{font-size:10px;font-weight:800;letter-spacing:.3em;text-transform:uppercase;color:var(--fire-end);margin-bottom:20px}
.page-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(60px,10vw,130px);letter-spacing:-.01em;line-height:.92;color:var(--text-dark);margin-bottom:28px}
.page-sub{font-size:16px;color:var(--text-gray);line-height:1.75;max-width:560px}

/* ═══════════════════════════════════════════
   CTA BANNER
═══════════════════════════════════════════ */
.cta-banner{position:relative;overflow:hidden;padding:90px 52px;background:var(--bg-base);border-top:1px solid var(--border-light);display:flex;align-items:center;justify-content:space-between;gap:40px;}
.cta-banner::before{content:'';position:absolute;top:-30%;right:-8%;width:55%;height:160%;background:radial-gradient(ellipse at 60% 50%,rgba(255,65,108,.08) 0%,transparent 65%);pointer-events:none;filter:blur(20px)}
.cta-heading{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:clamp(38px,6vw,82px);text-transform:uppercase;line-height:.95;color:var(--text-dark)}
.cta-heading em{font-style:normal;background:var(--fire-grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.cta-sub{font-size:13px;color:var(--text-gray);margin-top:14px;letter-spacing:.04em;font-weight:600}

/* ═══════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════ */
footer{padding:60px 52px 44px;border-top:1px solid var(--border-light);display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:48px;background:var(--bg-surface)}
.footer-brand .logo-text{font-weight:800;font-size:15px;letter-spacing:.2em;text-transform:uppercase;margin-bottom:16px;color:var(--text-dark)}
.footer-brand p{font-size:13px;color:var(--text-gray);line-height:1.7;max-width:260px;margin-bottom:24px}
.footer-col h4{font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--text-light);margin-bottom:18px}
.footer-col ul{list-style:none}
.footer-col ul li{margin-bottom:12px}
.footer-col ul li a{font-size:13px;color:var(--text-gray);text-decoration:none;transition:color .2s;cursor:pointer;font-weight:600}
.footer-col ul li a:hover{color:var(--fire-end)}
.footer-bottom{padding:20px 52px;border-top:1px solid var(--border-light);display:flex;align-items:center;justify-content:space-between;background:var(--bg-surface)}
.footer-bottom p{font-size:11.5px;color:var(--text-light);letter-spacing:.04em;font-weight:600}
.footer-bottom-links{display:flex;gap:24px}
.footer-bottom-links a{font-size:11px;color:var(--text-light);text-decoration:none;letter-spacing:.06em;text-transform:uppercase;transition:color .2s;font-weight:700}
.footer-bottom-links a:hover{color:var(--text-gray)}

/* ═══════════════════════════════════════════
   FORM
═══════════════════════════════════════════ */
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.form-group{display:flex;flex-direction:column;gap:8px}
.form-group.full{grid-column:1/-1}
.form-group label{font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dark)}
.form-group input,.form-group select,.form-group textarea{background:var(--bg-surface);border:1px solid var(--border-med);color:var(--text-dark);padding:14px 16px;font-family:'Barlow',sans-serif;font-size:14px;outline:none;transition:all .2s;border-radius:4px;box-shadow:inset 0 2px 4px rgba(10,17,40,0.01)}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--fire-end);box-shadow:0 0 0 3px rgba(255,65,108,.1)}
.form-group select option{background:var(--bg-surface)}
.form-group textarea{resize:vertical;min-height:120px}

/* ═══════════════════════════════════════════
   NETWORK MAP & MISC CARDS
═══════════════════════════════════════════ */
.network-map{border-top:1px solid var(--border-light);padding:80px 52px;background:var(--bg-base)}
.map-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--border-light);margin-top:52px}
.map-node{background:var(--bg-surface);padding:32px 24px;text-align:center;transition:all .3s;cursor:pointer}
.map-node:hover{background:var(--bg-surface);transform:translateY(-2px);box-shadow:var(--surface-shadow);z-index:2;border-radius:4px}
.node-name{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:18px;text-transform:uppercase;letter-spacing:.06em;color:var(--text-dark);margin-bottom:6px}
.node-status{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#12B76A}
.node-dot{width:6px;height:6px;border-radius:50%;background:#12B76A;margin:0 auto 12px;box-shadow:0 0 8px rgba(18,183,106,.4);animation:pulse 2s ease infinite}

/* TEAM */
.team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border-light);border-top:1px solid var(--border-light)}
.team-card{background:var(--bg-surface);padding:44px 40px;transition:all .3s}
.team-card:hover{background:var(--bg-surface);transform:translateY(-2px);box-shadow:var(--surface-shadow);z-index:2;border-radius:4px}
.team-avatar{width:64px;height:64px;border-radius:50%;background:var(--fire-grad);margin-bottom:20px;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:28px;color:#FFFFFF;box-shadow:var(--fire-shadow)}
.team-name{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:20px;text-transform:uppercase;letter-spacing:.04em;color:var(--text-dark);margin-bottom:4px}
.team-role{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--text-gray);margin-bottom:14px}
.team-bio{font-size:13px;color:var(--text-gray);line-height:1.7}

/* TIMELINE */
.timeline{padding:80px 52px;border-top:1px solid var(--border-light);background:var(--bg-surface)}
.timeline-items{margin-top:48px;display:flex;flex-direction:column;gap:0}
.tl-item{display:grid;grid-template-columns:120px 1fr;gap:40px;padding:36px 0;border-bottom:1px solid var(--border-light)}
.tl-year{font-family:'Bebas Neue',sans-serif;font-size:38px;color:var(--text-light);line-height:1;padding-top:4px}
.tl-title{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:22px;text-transform:uppercase;letter-spacing:.04em;color:var(--text-dark);margin-bottom:8px}
.tl-desc{font-size:14px;color:var(--text-gray);line-height:1.7}

/* PRICING */
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border-light);border-top:1px solid var(--border-light)}
.pricing-card{background:var(--bg-surface);padding:52px 44px;position:relative}
.pricing-card.featured{background:#FFF5F6;border:1px solid rgba(255,65,108,.2)}
.pricing-badge{position:absolute;top:-1px;left:44px;font-size:9.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:5px 14px;background:var(--fire-grad);color:#fff;border-radius:0 0 4px 4px;box-shadow:var(--fire-shadow)}
.price-tier{font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--text-gray);margin-bottom:16px}
.price-name{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:34px;text-transform:uppercase;letter-spacing:.02em;color:var(--text-dark);margin-bottom:8px}
.price-desc{font-size:13px;color:var(--text-gray);line-height:1.65;margin-bottom:32px;padding-bottom:32px;border-bottom:1px solid var(--border-light)}
.price-features{list-style:none;display:flex;flex-direction:column;gap:12px;margin-bottom:36px}
.price-features li{font-size:13px;color:var(--text-dark);display:flex;align-items:flex-start;gap:10px;font-weight:600}
.price-features li::before{content:'—';color:var(--fire-end);font-weight:800;flex-shrink:0}
</style>
</head>
<body>

<!-- ═══ NAV ═══ -->
<nav id="mainNav">
  <div class="logo" onclick="goPage('home')">FIREBLOX</div>
  <ul class="nav-links">
    <li><a onclick="goPage('products')" data-page="products">Products</a></li>
    <li><a onclick="goPage('solutions')" data-page="solutions">Solutions</a></li>
    <li><a onclick="goPage('platform')" data-page="platform">Platform</a></li>
    <li><a onclick="goPage('network')" data-page="network">Network</a></li>
    <li><a onclick="goPage('company')" data-page="company">Company</a></li>
  </ul>
  <div class="nav-right">
    <button class="btn-demo" onclick="goPage('feasibility')">Request Feasibility</button>
    <div class="hamburger"><span></span><span></span><span></span></div>
  </div>
</nav>

<!-- ═══════════════════════════════════════════
     HOME PAGE
═══════════════════════════════════════════ -->
<div class="page active" id="page-home">

  <!-- HERO -->
  <section class="hero">
    <div class="blue-glow"></div>
    <div class="left-amb"></div>
    <div class="blockchain-text">BLOCKCHAIN</div>
    <div class="sphere-wrap">
      <div class="sphere-halo"></div>
      <div class="sphere"><div class="sphere-shine"></div></div>
    </div>
    <div class="hero-bottom">
      <div class="hero-tagline">
        <h2>Digital Asset<span class="dim">Infrastructure</span></h2>
      </div>
      <div class="hero-desc">Digital asset infrastructure built for<br>scale and trusted for security</div>
    </div>
  </section>

  <!-- PARTNERS -->
  <div class="partners">
    <a class="partner revolut" href="#">Revolut</a>
    <a class="partner" href="#">Triple·A</a>
    <a class="partner bybit" href="#">BYB|T</a>
    <a class="partner visa" href="#">VISA</a>
    <a class="partner" href="#">worldpay</a>
    <a class="partner bridge" href="#"><span class="bridge-ring">⊙</span>Bridge</a>
  </div>

  <!-- STATS -->
  <div class="stats-grid">
    <div class="stat-cell"><div class="stat-num">$6T+</div><div class="stat-label">Assets Transferred</div></div>
    <div class="stat-cell"><div class="stat-num">1,800+</div><div class="stat-label">Institutional Clients</div></div>
    <div class="stat-cell"><div class="stat-num">50+</div><div class="stat-label">Blockchain Networks</div></div>
  </div>

  <!-- MARQUEE -->
  <div class="marquee-wrap">
    <div class="marquee-track">
      <span class="marquee-item">SECURITY</span><span class="marquee-item red">——</span>
      <span class="marquee-item">COMPLIANCE</span><span class="marquee-item red">——</span>
      <span class="marquee-item">SCALE</span><span class="marquee-item red">——</span>
      <span class="marquee-item">CUSTODY</span><span class="marquee-item red">——</span>
      <span class="marquee-item">DEFI</span><span class="marquee-item red">——</span>
      <span class="marquee-item">WEB3</span><span class="marquee-item red">——</span>
      <span class="marquee-item">SECURITY</span><span class="marquee-item red">——</span>
      <span class="marquee-item">COMPLIANCE</span><span class="marquee-item red">——</span>
      <span class="marquee-item">SCALE</span><span class="marquee-item red">——</span>
      <span class="marquee-item">CUSTODY</span><span class="marquee-item red">——</span>
      <span class="marquee-item">DEFI</span><span class="marquee-item red">——</span>
      <span class="marquee-item">WEB3</span><span class="marquee-item red">——</span>
    </div>
  </div>

  <!-- INTRO SECTION -->
  <section class="section">
    <div class="two-col">
      <div>
        <div class="eyebrow">The Infrastructure</div>
        <div class="section-heading">The Infrastructure Behind Your Digital Assets.</div>
        <p class="section-body">Most custodians hand you an API and disappear. Fireblox is different. We deliver dedicated, institutional-grade digital asset infrastructure with real-time visibility into every wallet, every transaction, every SLA — through a platform your compliance team actually wants to use.</p>
        <a class="btn-outline" onclick="goPage('platform')">See the Platform</a>
      </div>
      <div class="orb-wrap">
        <div class="orbit"><div class="o-dot"></div></div>
        <div class="orbit"><div class="o-dot"></div></div>
        <div class="orb"></div>
      </div>
    </div>
  </section>

  <!-- LOGO MARQUEE -->
  <div class="logo-marquee-wrap">
    <div class="logo-marquee-track">
      <span class="logo-item">J.P. Morgan</span><span class="logo-item">Goldman Sachs</span>
      <span class="logo-item">BlackRock</span><span class="logo-item">Fidelity</span>
      <span class="logo-item">Deutsche Bank</span><span class="logo-item">Standard Chartered</span>
      <span class="logo-item">BNY Mellon</span><span class="logo-item">Coinbase</span>
      <span class="logo-item">Gemini</span><span class="logo-item">Binance</span>
      <span class="logo-item">J.P. Morgan</span><span class="logo-item">Goldman Sachs</span>
      <span class="logo-item">BlackRock</span><span class="logo-item">Fidelity</span>
      <span class="logo-item">Deutsche Bank</span><span class="logo-item">Standard Chartered</span>
      <span class="logo-item">BNY Mellon</span><span class="logo-item">Coinbase</span>
      <span class="logo-item">Gemini</span><span class="logo-item">Binance</span>
    </div>
  </div>

  <!-- WHAT WE DELIVER -->
  <section class="section-sm">
    <div class="eyebrow">What We Deliver</div>
    <div class="section-heading-sm" style="max-width:500px">Connectivity products built for institutions that don't compromise.</div>
  </section>
  <div class="cards-grid">
    <div class="card">
      <div class="card-num">01</div>
      <div class="card-tag-row"><span class="card-tag">MPC</span><span class="card-tag">Symmetric</span><span class="card-tag">SLA</span></div>
      <div class="card-title">MPC Wallet Technology</div>
      <div class="card-desc">Dedicated, symmetric key management with guaranteed SLA. No seed phrases, no single points of failure, no compromise.</div>
    </div>
    <div class="card">
      <div class="card-num">02</div>
      <div class="card-tag-row"><span class="card-tag">Private</span><span class="card-tag">Multi-chain</span><span class="card-tag">QoS</span></div>
      <div class="card-title">Policy Engine</div>
      <div class="card-desc">Private multi-chain transaction governance with quality-of-service controls and customizable approval workflows.</div>
    </div>
    <div class="card">
      <div class="card-num">03</div>
      <div class="card-tag-row"><span class="card-tag">Hybrid</span><span class="card-tag">App-Aware</span><span class="card-tag">Orchestration</span></div>
      <div class="card-title">DeFi & Web3 Access</div>
      <div class="card-desc">Application-aware routing across hybrid on-chain and off-chain environments with centralized control and audit logs.</div>
    </div>
    <div class="card">
      <div class="card-num">04</div>
      <div class="card-tag-row"><span class="card-tag">Firewall</span><span class="card-tag">AML</span><span class="card-tag">Monitoring</span></div>
      <div class="card-title">Compliance Suite</div>
      <div class="card-desc">Enterprise-grade AML screening, transaction monitoring, and regulatory reporting — fully managed at the infrastructure layer.</div>
    </div>
    <div class="card">
      <div class="card-num">05</div>
      <div class="card-tag-row"><span class="card-tag">CEX</span><span class="card-tag">DEX</span><span class="card-tag">Peering</span></div>
      <div class="card-title">Exchange Connect</div>
      <div class="card-desc">Direct connectivity to CEX and DEX platforms with private peering for low-latency order execution and settlement.</div>
    </div>
    <div class="card">
      <div class="card-num">06</div>
      <div class="card-tag-row"><span class="card-tag">EVM</span><span class="card-tag">Non-EVM</span><span class="card-tag">L2</span></div>
      <div class="card-title">Multi-Chain Support</div>
      <div class="card-desc">50+ blockchains including all major EVM chains, Solana, Cosmos, and leading Layer 2 networks under a single unified API.</div>
    </div>
  </div>

  <!-- ADVANTAGE -->
  <section class="section-sm">
    <div class="eyebrow">The Advantage</div>
    <div class="section-heading-sm">Everything visible. Everything controlled.</div>
  </section>
  <div class="adv-list">
    <div class="adv-item">
      <div class="adv-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
      <div><div class="adv-title">Live Transaction Monitoring</div><div class="adv-desc">Latency, confirmations, fees — per wallet, in real-time. Not in a monthly PDF that arrives three weeks late.</div></div>
    </div>
    <div class="adv-item">
      <div class="adv-icon"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
      <div><div class="adv-title">Auto-Incident Detection</div><div class="adv-desc">Wallet compromise flagged? A ticket is created automatically with full forensic data — before your compliance team notices.</div></div>
    </div>
    <div class="adv-item">
      <div class="adv-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
      <div><div class="adv-title">Self-Service Billing</div><div class="adv-desc">Download invoices, manage subscriptions online. Your finance team never chases an account manager again.</div></div>
    </div>
    <div class="adv-item">
      <div class="adv-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
      <div><div class="adv-title">SLA Prediction Engine</div><div class="adv-desc">AI early warning when your monthly compliance SLA is at risk. We remediate before you're affected.</div></div>
    </div>
    <div class="adv-item">
      <div class="adv-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
      <div><div class="adv-title">Installation Transparency</div><div class="adv-desc">Track every new chain integration from feasibility to go-live. Know exactly where your onboarding stands at all times.</div></div>
    </div>
    <div class="adv-item">
      <div class="adv-icon"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
      <div><div class="adv-title">Enterprise API</div><div class="adv-desc">Pull wallet status, transaction data, and compliance metrics into your own NOC and risk platforms via REST APIs.</div></div>
    </div>
  </div>

  <!-- DASHBOARD MOCKUP -->
  <div class="dashboard-wrap">
    <div class="eyebrow">Live Platform</div>
    <div class="section-heading-sm" style="margin-bottom:8px">Every wallet. Every metric. One dashboard.</div>
    <p style="font-size:14px;color:rgba(0,0,0,.6);max-width:480px;line-height:1.7;margin-bottom:36px">No more calling your account manager for a status update. Monitor, transact, raise tickets — all in real-time.</p>
    <div class="dashboard-inner">
      <div class="dash-header">
        <div class="dash-logo"><div class="dash-n">F</div>FIREBLOX</div>
        <div class="dash-nav">
          <span class="active">Wallets</span><span>Network</span><span>Tickets</span><span>Orders</span><span>Billing</span>
        </div>
      </div>
      <div class="dash-body">
        <div class="dash-kpi"><div class="dash-kpi-label">Active Wallets</div><div class="dash-kpi-val">248</div></div>
        <div class="dash-kpi"><div class="dash-kpi-label">Wallets at Risk</div><div class="dash-kpi-val red">0</div></div>
        <div class="dash-kpi"><div class="dash-kpi-label">Current SLA</div><div class="dash-kpi-val green">99.97%</div></div>
        <div class="dash-kpi"><div class="dash-kpi-label">Open Tickets</div><div class="dash-kpi-val">3</div></div>
        <div class="dash-table-wrap">
          <div class="dash-table-title">Wallet Health <span class="live-pill">LIVE</span></div>
          <table>
            <thead><tr><th>Wallet ID</th><th>Type</th><th>Balance</th><th>Last Tx</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td class="mono">ETH-INST-001</td><td><span class="type-badge">MPC</span></td><td>$42.3M</td><td>2m ago</td><td class="green-val">● Healthy</td></tr>
              <tr><td class="mono">BTC-CUST-014</td><td><span class="type-badge">Cold</span></td><td>$218M</td><td>1h ago</td><td class="green-val">● Healthy</td></tr>
              <tr><td class="mono">SOL-DeFi-007</td><td><span class="type-badge">Hot</span></td><td>$8.1M</td><td>12m ago</td><td class="green-val">● Healthy</td></tr>
              <tr><td class="mono">USDC-TR-033</td><td><span class="type-badge">MPC</span></td><td>$95M</td><td>5m ago</td><td class="green-val">● Healthy</td></tr>
              <tr><td class="mono">ARB-L2-015</td><td><span class="type-badge">Smart</span></td><td>$3.4M</td><td>just now</td><td class="green-val">● Healthy</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <div class="cta-banner">
    <div>
      <div class="cta-heading">Ready to verify?<br><em>See what Tier-1 infrastructure actually looks like.</em></div>
      <p class="cta-sub">Check feasibility at your institution in under 24 hours.</p>
    </div>
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:14px;flex-shrink:0">
      <button class="btn-primary" onclick="goPage('feasibility')">Check Feasibility</button>
      <p style="font-size:11px;color:rgba(0,0,0,.4);letter-spacing:.08em;text-transform:uppercase">Free check · No commitment · 24h Response</p>
    </div>
  </div>

  <!-- FOOTER -->
  <footer>
    <div class="footer-brand">
      <div class="logo-text">FIREBLOX</div>
      <p>The enterprise digital asset infrastructure company that gives you complete visibility and control over your blockchain operations.</p>
      <div class="status-banner">
        <div class="status-dot"></div>
        <div class="status-text">All Systems Operational</div>
      </div>
    </div>
    <div class="footer-col">
      <h4>Platform</h4>
      <ul>
        <li><a onclick="goPage('products')">MPC Wallets</a></li>
        <li><a onclick="goPage('products')">Policy Engine</a></li>
        <li><a onclick="goPage('products')">DeFi Access</a></li>
        <li><a onclick="goPage('products')">Cloud Connect</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a onclick="goPage('company')">About Us</a></li>
        <li><a onclick="goPage('company')">Careers</a></li>
        <li><a onclick="goPage('company')">Contact</a></li>
        <li><a onclick="goPage('network')">Network Status</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Developers</h4>
      <ul>
        <li><a href="#">API Docs</a></li>
        <li><a href="#">SDK Reference</a></li>
        <li><a href="#">Changelog</a></li>
        <li><a href="#">Status Page</a></li>
      </ul>
    </div>
  </footer>
  <div class="footer-bottom">
    <p>© 2026 Fireblox Inc. All rights reserved.</p>
    <div class="footer-bottom-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Security</a>
    </div>
  </div>
</div><!-- /page-home -->

<!-- ═══════════════════════════════════════════
     PRODUCTS PAGE
═══════════════════════════════════════════ -->
<div class="page" id="page-products">
  <div class="inner-hero">
    <div class="page-label">Products</div>
    <div class="page-title">Built for Institutions.<br>Trusted by Scale.</div>
    <p class="page-sub">Every product in the Fireblox suite is engineered for institutional-grade performance, compliance, and reliability — with zero compromise on security or transparency.</p>
  </div>

  <div class="cards-grid" style="border-top:none">
    <div class="card" style="padding-top:64px">
      <div class="card-num">01</div>
      <div class="card-icon"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
      <div class="card-tag-row"><span class="card-tag">MPC</span><span class="card-tag">Cold</span><span class="card-tag">Hot</span></div>
      <div class="card-title">MPC Wallet Technology</div>
      <div class="card-desc">Eliminate single points of failure with our proprietary multi-party computation. No seed phrases, no private key exposure — ever. Supports cold, warm and hot wallet policies from a single unified interface.</div>
    </div>
    <div class="card" style="padding-top:64px">
      <div class="card-num">02</div>
      <div class="card-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
      <div class="card-tag-row"><span class="card-tag">Governance</span><span class="card-tag">Automation</span></div>
      <div class="card-title">Policy Engine</div>
      <div class="card-desc">Define transaction rules, approval chains, and automated workflows at the wallet, user, and asset level. Real-time policy enforcement with full audit trail and rollback capability.</div>
    </div>
    <div class="card" style="padding-top:64px">
      <div class="card-num">03</div>
      <div class="card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
      <div class="card-tag-row"><span class="card-tag">DEX</span><span class="card-tag">CEX</span><span class="card-tag">L2</span></div>
      <div class="card-title">DeFi & Web3 Access</div>
      <div class="card-desc">Connect to 200+ DeFi protocols and dApps with enterprise-grade security policies. WalletConnect, Metamask Institutional, and direct smart contract interaction — all under custody controls.</div>
    </div>
    <div class="card" style="padding-top:64px">
      <div class="card-num">04</div>
      <div class="card-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
      <div class="card-tag-row"><span class="card-tag">AML</span><span class="card-tag">KYT</span><span class="card-tag">Sanctions</span></div>
      <div class="card-title">Compliance Suite</div>
      <div class="card-desc">Know-Your-Transaction screening on every address and transfer. Integrated Chainalysis and Elliptic intelligence. Automated OFAC, EU, and UN sanctions checking at transaction time.</div>
    </div>
    <div class="card" style="padding-top:64px">
      <div class="card-num">05</div>
      <div class="card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="6" height="6"/><rect x="16" y="3" width="6" height="6"/><rect x="9" y="15" width="6" height="6"/><path d="M5 9v3a3 3 0 0 0 3 3h2m4-6v3a3 3 0 0 1-3 3h-2"/></svg></div>
      <div class="card-tag-row"><span class="card-tag">EVM</span><span class="card-tag">Cosmos</span><span class="card-tag">Solana</span></div>
      <div class="card-title">Multi-Chain Support</div>
      <div class="card-desc">50+ blockchain networks under a single unified API — EVM chains, Bitcoin, Solana, Cosmos, NEAR, TON, and all major Layer 2 protocols. New chains added within 48 hours of request.</div>
    </div>
    <div class="card" style="padding-top:64px">
      <div class="card-num">06</div>
      <div class="card-icon"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
      <div class="card-tag-row"><span class="card-tag">REST</span><span class="card-tag">Webhook</span><span class="card-tag">SDK</span></div>
      <div class="card-title">Enterprise API</div>
      <div class="card-desc">Full-featured REST API with webhooks, SDK support for Node, Python, Java, and Go. Pull wallet status, transaction data, and compliance metrics into your own NOC infrastructure.</div>
    </div>
  </div>

  <section class="section">
    <div class="eyebrow">Pricing</div>
    <div class="section-heading">Simple, Transparent Pricing</div>
  </section>
  <div class="pricing-grid">
    <div class="pricing-card">
      <div class="price-tier">Starter</div>
      <div class="price-name">Growth</div>
      <div class="price-desc">For emerging institutions and crypto-native firms getting started with digital asset custody.</div>
      <ul class="price-features">
        <li>Up to 50 wallets</li><li>5 blockchain networks</li><li>Basic policy engine</li>
        <li>REST API access</li><li>Email support</li>
      </ul>
      <button class="btn-outline" onclick="goPage('feasibility')">Get Started</button>
    </div>
    <div class="pricing-card featured">
      <div class="pricing-badge">Most Popular</div>
      <div class="price-tier">Enterprise</div>
      <div class="price-name">Professional</div>
      <div class="price-desc">For banks, funds, and exchanges that need full compliance coverage and advanced workflow automation.</div>
      <ul class="price-features">
        <li>Unlimited wallets</li><li>All 50+ blockchains</li><li>Advanced policy engine</li>
        <li>AML/KYT compliance</li><li>DeFi & Web3 access</li><li>Dedicated CSM</li>
      </ul>
      <button class="btn-primary" onclick="goPage('feasibility')">Request Demo</button>
    </div>
    <div class="pricing-card">
      <div class="price-tier">Global</div>
      <div class="price-name">Sovereign</div>
      <div class="price-desc">For central banks, sovereign wealth funds, and Tier-1 financial institutions with bespoke requirements.</div>
      <ul class="price-features">
        <li>On-premises deployment</li><li>Custom chain integrations</li><li>White-label platform</li>
        <li>Regulatory liaison support</li><li>24/7 dedicated SRE team</li>
      </ul>
      <button class="btn-outline" onclick="goPage('feasibility')">Contact Sales</button>
    </div>
  </div>

  <div class="cta-banner">
    <div><div class="cta-heading">Compare products<br><em>side by side.</em></div></div>
    <button class="btn-primary" onclick="goPage('feasibility')">Request Full Spec Sheet</button>
  </div>

  <footer>
    <div class="footer-brand"><div class="logo-text">FIREBLOX</div><p>The enterprise digital asset infrastructure company.</p></div>
    <div class="footer-col"><h4>Platform</h4><ul><li><a onclick="goPage('products')">MPC Wallets</a></li><li><a onclick="goPage('products')">Policy Engine</a></li><li><a onclick="goPage('products')">Compliance</a></li></ul></div>
    <div class="footer-col"><h4>Company</h4><ul><li><a onclick="goPage('company')">About</a></li><li><a onclick="goPage('company')">Careers</a></li><li><a onclick="goPage('feasibility')">Contact</a></li></ul></div>
    <div class="footer-col"><h4>Resources</h4><ul><li><a href="#">API Docs</a></li><li><a href="#">SDK</a></li><li><a href="#">Status</a></li></ul></div>
  </footer>
  <div class="footer-bottom"><p>© 2026 Fireblox Inc.</p><div class="footer-bottom-links"><a href="#">Privacy</a><a href="#">Terms</a></div></div>
</div><!-- /page-products -->

<!-- ═══════════════════════════════════════════
     SOLUTIONS PAGE
═══════════════════════════════════════════ -->
<div class="page" id="page-solutions">
  <div class="inner-hero">
    <div class="page-label">Solutions</div>
    <div class="page-title">Infrastructure for Every<br>Institution Type.</div>
    <p class="page-sub">Whether you're a hedge fund, a bank, a payments company, or a sovereign institution — Fireblox has a deployment model built specifically for your regulatory and operational context.</p>
  </div>

  <div class="cards-grid" style="border-top:none">
    <div class="card" style="padding-top:64px">
      <div class="card-num">01</div>
      <div class="card-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
      <div class="card-title">Banks & Fintechs</div>
      <div class="card-desc">Tokenized asset custody, stablecoin management, and programmable settlement rails for banks launching digital asset services. Full regulatory compliance built in.</div>
    </div>
    <div class="card" style="padding-top:64px">
      <div class="card-num">02</div>
      <div class="card-icon"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
      <div class="card-title">Hedge Funds & Asset Managers</div>
      <div class="card-desc">Institutional-grade trading wallet infrastructure with deep exchange connectivity, prime brokerage integrations, and portfolio-level reporting across chains.</div>
    </div>
    <div class="card" style="padding-top:64px">
      <div class="card-num">03</div>
      <div class="card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
      <div class="card-title">Payments & Remittance</div>
      <div class="card-desc">High-throughput stablecoin payment rails with real-time FX conversion, multi-currency settlement, and automated compliance screening on every corridor.</div>
    </div>
    <div class="card" style="padding-top:64px">
      <div class="card-num">04</div>
      <div class="card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
      <div class="card-title">Crypto Exchanges</div>
      <div class="card-desc">Cold and hot wallet management, Proof-of-Reserves infrastructure, and automated withdrawal processing with real-time AML screening for exchange operators.</div>
    </div>
    <div class="card" style="padding-top:64px">
      <div class="card-num">05</div>
      <div class="card-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
      <div class="card-title">Government & Sovereign</div>
      <div class="card-desc">CBDC issuance and distribution infrastructure, sovereign digital asset reserves, and national blockchain network deployment with air-gapped key management.</div>
    </div>
    <div class="card" style="padding-top:64px">
      <div class="card-num">06</div>
      <div class="card-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
      <div class="card-title">Web3 & DeFi Protocols</div>
      <div class="card-desc">Secure treasury management, DAO governance integrations, and multi-sig smart contract controls for DeFi protocols managing billions in on-chain value.</div>
    </div>
  </div>

  <section class="section">
    <div class="two-col">
      <div>
        <div class="eyebrow">Case Study</div>
        <div class="section-heading">How a Tier-1 Bank Went Live on Blockchain in 60 Days.</div>
        <p class="section-body">A global bank needed to launch tokenized bond custody for institutional clients without touching their existing core banking stack. Fireblox delivered an isolated MPC wallet layer, integrated compliance screening, and a white-label investor portal — in under 60 days.</p>
        <button class="btn-outline">Read Case Study</button>
      </div>
      <div style="padding:40px;background:#fff;border:1px solid rgba(0,0,0,.08)">
        <div style="font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(0,0,0,.4);margin-bottom:28px">Key Outcomes</div>
        <div style="display:flex;flex-direction:column;gap:20px">
          <div style="padding-bottom:20px;border-bottom:1px solid rgba(0,0,0,.08)">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:52px;color:#111;line-height:1">60 Days</div>
            <div style="font-size:12px;color:rgba(0,0,0,.5);letter-spacing:.1em;text-transform:uppercase;margin-top:6px">From contract to production</div>
          </div>
          <div style="padding-bottom:20px;border-bottom:1px solid rgba(0,0,0,.08)">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:52px;color:#111;line-height:1">$2.4B</div>
            <div style="font-size:12px;color:rgba(0,0,0,.5);letter-spacing:.1em;text-transform:uppercase;margin-top:6px">Assets under custody at launch</div>
          </div>
          <div>
            <div style="font-family:'Bebas Neue',sans-serif;font-size:52px;color:#16b450;line-height:1">0</div>
            <div style="font-size:12px;color:rgba(0,0,0,.5);letter-spacing:.1em;text-transform:uppercase;margin-top:6px">Security incidents in 18 months</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="cta-banner">
    <div><div class="cta-heading">Find your<br><em>deployment model.</em></div></div>
    <button class="btn-primary" onclick="goPage('feasibility')">Talk to Solutions</button>
  </div>
  <footer>
    <div class="footer-brand"><div class="logo-text">FIREBLOX</div><p>The enterprise digital asset infrastructure company.</p></div>
    <div class="footer-col"><h4>Platform</h4><ul><li><a onclick="goPage('products')">Products</a></li><li><a onclick="goPage('platform')">Platform</a></li></ul></div>
    <div class="footer-col"><h4>Company</h4><ul><li><a onclick="goPage('company')">About</a></li><li><a onclick="goPage('feasibility')">Contact</a></li></ul></div>
    <div class="footer-col"><h4>Resources</h4><ul><li><a href="#">Docs</a></li><li><a href="#">Status</a></li></ul></div>
  </footer>
  <div class="footer-bottom"><p>© 2026 Fireblox Inc.</p><div class="footer-bottom-links"><a href="#">Privacy</a><a href="#">Terms</a></div></div>
</div><!-- /page-solutions -->

<!-- ═══════════════════════════════════════════
     PLATFORM PAGE
═══════════════════════════════════════════ -->
<div class="page" id="page-platform">
  <div class="inner-hero">
    <div class="page-label">Platform</div>
    <div class="page-title">The Platform Your<br>Operations Team<br>Actually Wants.</div>
    <p class="page-sub">Real-time visibility into every wallet, every transaction, every SLA. Not in a monthly PDF. Right now, on a dashboard your team controls.</p>
    <div style="display:flex;gap:16px;margin-top:36px">
      <button class="btn-primary" onclick="goPage('feasibility')">Request Demo</button>
      <button class="btn-outline">View API Docs</button>
    </div>
    <div class="status-banner" style="margin-top:28px">
      <div class="status-dot"></div>
      <div class="status-text">All Systems Operational · 99.97% Uptime This Month</div>
    </div>
  </div>

  <div class="stats-grid">
    <div class="stat-cell"><div class="stat-num">99.9%</div><div class="stat-label">Uptime SLA</div></div>
    <div class="stat-cell"><div class="stat-num">50+</div><div class="stat-label">Blockchain Networks</div></div>
    <div class="stat-cell"><div class="stat-num">&lt;200ms</div><div class="stat-label">API Response Time</div></div>
  </div>

  <!-- Platform features -->
  <section class="section-sm">
    <div class="eyebrow">Platform Capabilities</div>
    <div class="section-heading-sm">Everything in one place.</div>
  </section>

  <div class="adv-list">
    <div class="adv-item"><div class="adv-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div><div><div class="adv-title">Unified Dashboard</div><div class="adv-desc">Every wallet, chain, and transaction visible from a single pane of glass. Customizable per team role with granular access controls.</div></div></div>
    <div class="adv-item"><div class="adv-icon"><svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg></div><div><div class="adv-title">Transaction Engine</div><div class="adv-desc">High-throughput transaction signing, batching, and broadcasting with automatic gas optimization and nonce management.</div></div></div>
    <div class="adv-item"><div class="adv-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div><div><div class="adv-title">Incident Management</div><div class="adv-desc">Auto-created tickets with full diagnostic context when any wallet or transaction deviates from expected behavior.</div></div></div>
    <div class="adv-item"><div class="adv-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div><div><div class="adv-title">Compliance Reports</div><div class="adv-desc">One-click generation of audit-ready reports for regulators, auditors, and internal compliance teams. Scheduled automated delivery.</div></div></div>
    <div class="adv-item"><div class="adv-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div><div><div class="adv-title">Analytics & Insights</div><div class="adv-desc">Volume trends, fee analytics, counterparty exposure, and chain performance metrics visualized in real-time with historical depth.</div></div></div>
    <div class="adv-item"><div class="adv-icon"><svg viewBox="0 0 24 24"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg></div><div><div class="adv-title">Developer Tools</div><div class="adv-desc">Full REST API, webhooks, and SDKs in 5 languages. Sandbox environment with mainnet parity for testing before production deployment.</div></div></div>
  </div>

  <!-- Dashboard full -->
  <div class="dashboard-wrap">
    <div class="section-heading-sm" style="margin-bottom:8px">Live Platform Preview</div>
    <p style="font-size:14px;color:rgba(0,0,0,.6);max-width:420px;line-height:1.7;margin-bottom:36px">The actual interface your operations team uses — every day.</p>
    <div class="dashboard-inner">
      <div class="dash-header">
        <div class="dash-logo"><div class="dash-n">F</div>FIREBLOX Portal</div>
        <div class="dash-nav"><span class="active">Wallets</span><span>Transactions</span><span>Compliance</span><span>Analytics</span><span>Settings</span></div>
      </div>
      <div class="dash-body">
        <div class="dash-kpi"><div class="dash-kpi-label">Total AUC</div><div class="dash-kpi-val">$18.4B</div></div>
        <div class="dash-kpi"><div class="dash-kpi-label">Tx Volume 24h</div><div class="dash-kpi-val">$2.1B</div></div>
        <div class="dash-kpi"><div class="dash-kpi-label">AML Flags</div><div class="dash-kpi-val red">0</div></div>
        <div class="dash-kpi"><div class="dash-kpi-label">SLA Score</div><div class="dash-kpi-val green">99.97%</div></div>
        <div class="dash-table-wrap">
          <div class="dash-table-title">Recent Transactions <span class="live-pill">LIVE</span></div>
          <table>
            <thead><tr><th>Tx Hash</th><th>Chain</th><th>Amount</th><th>AML</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td class="mono">0x4f2a...c7e1</td><td>Ethereum</td><td>$4,200,000</td><td class="green-val">Clear</td><td class="green-val">● Confirmed</td></tr>
              <tr><td class="mono">7xKp9...mN2r</td><td>Solana</td><td>$820,000</td><td class="green-val">Clear</td><td class="green-val">● Confirmed</td></tr>
              <tr><td class="mono">0x8b1c...f4a9</td><td>Arbitrum</td><td>$12,500,000</td><td class="green-val">Clear</td><td class="green-val">● Confirmed</td></tr>
              <tr><td class="mono">0x2d7e...9b3c</td><td>Bitcoin</td><td>$95,000,000</td><td class="green-val">Clear</td><td style="color:#f0a500;font-weight:700">● Pending</td></tr>
              <tr><td class="mono">cosmos...p9k2</td><td>Cosmos</td><td>$340,000</td><td class="green-val">Clear</td><td class="green-val">● Confirmed</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="cta-banner">
    <div><div class="cta-heading">See the platform<br><em>in your environment.</em></div></div>
    <button class="btn-primary" onclick="goPage('feasibility')">Schedule a Demo</button>
  </div>
  <footer>
    <div class="footer-brand"><div class="logo-text">FIREBLOX</div><p>The enterprise digital asset infrastructure company.</p></div>
    <div class="footer-col"><h4>Platform</h4><ul><li><a onclick="goPage('products')">Products</a></li><li><a onclick="goPage('solutions')">Solutions</a></li></ul></div>
    <div class="footer-col"><h4>Company</h4><ul><li><a onclick="goPage('company')">About</a></li><li><a onclick="goPage('feasibility')">Contact</a></li></ul></div>
    <div class="footer-col"><h4>Resources</h4><ul><li><a href="#">Docs</a></li><li><a href="#">Status</a></li></ul></div>
  </footer>
  <div class="footer-bottom"><p>© 2026 Fireblox Inc.</p><div class="footer-bottom-links"><a href="#">Privacy</a><a href="#">Terms</a></div></div>
</div><!-- /page-platform -->

<!-- ═══════════════════════════════════════════
     NETWORK PAGE
═══════════════════════════════════════════ -->
<div class="page" id="page-network">
  <div class="inner-hero">
    <div class="page-label">Network</div>
    <div class="page-title">50+ Blockchains.<br>One Infrastructure.</div>
    <p class="page-sub">Fireblox maintains direct node infrastructure across every major blockchain network — giving your wallets native-speed access without relying on third-party RPC providers.</p>
    <div class="status-banner" style="margin-top:32px">
      <div class="status-dot"></div>
      <div class="status-text">All 50+ Networks Operational</div>
    </div>
  </div>

  <div class="stats-grid">
    <div class="stat-cell"><div class="stat-num">50+</div><div class="stat-label">Blockchain Networks</div></div>
    <div class="stat-cell"><div class="stat-num">&lt;50ms</div><div class="stat-label">Node Latency</div></div>
    <div class="stat-cell"><div class="stat-num">99.9%</div><div class="stat-label">Node Uptime SLA</div></div>
  </div>

  <!-- Node map -->
  <div class="network-map">
    <div class="eyebrow">Global Node Coverage</div>
    <div class="section-heading-sm" style="margin-bottom:8px">Every major chain. Directly operated.</div>
    <p style="font-size:14px;color:rgba(0,0,0,.6);max-width:500px;line-height:1.7">We run our own nodes so your transactions don't go through public RPC endpoints with rate limits and downtime risks.</p>
    <div class="map-grid">
      <div class="map-node"><div class="node-dot"></div><div class="node-name">Ethereum</div><div class="node-status">Operational</div></div>
      <div class="map-node"><div class="node-dot"></div><div class="node-name">Bitcoin</div><div class="node-status">Operational</div></div>
      <div class="map-node"><div class="node-dot"></div><div class="node-name">Solana</div><div class="node-status">Operational</div></div>
      <div class="map-node"><div class="node-dot"></div><div class="node-name">Polygon</div><div class="node-status">Operational</div></div>
      <div class="map-node"><div class="node-dot"></div><div class="node-name">Arbitrum</div><div class="node-status">Operational</div></div>
      <div class="map-node"><div class="node-dot"></div><div class="node-name">Optimism</div><div class="node-status">Operational</div></div>
      <div class="map-node"><div class="node-dot"></div><div class="node-name">Cosmos</div><div class="node-status">Operational</div></div>
      <div class="map-node"><div class="node-dot"></div><div class="node-name">NEAR</div><div class="node-status">Operational</div></div>
      <div class="map-node"><div class="node-dot"></div><div class="node-name">TON</div><div class="node-status">Operational</div></div>
      <div class="map-node"><div class="node-dot"></div><div class="node-name">Avalanche</div><div class="node-status">Operational</div></div>
      <div class="map-node"><div class="node-dot"></div><div class="node-name">BNB Chain</div><div class="node-status">Operational</div></div>
      <div class="map-node"><div class="node-dot"></div><div class="node-name">Base</div><div class="node-status">Operational</div></div>
      <div class="map-node"><div class="node-dot"></div><div class="node-name">zkSync</div><div class="node-status">Operational</div></div>
      <div class="map-node"><div class="node-dot"></div><div class="node-name">Starknet</div><div class="node-status">Operational</div></div>
      <div class="map-node"><div class="node-dot"></div><div class="node-name">Sui</div><div class="node-status">Operational</div></div>
    </div>
  </div>

  <section class="section">
    <div class="two-col">
      <div>
        <div class="eyebrow">Node Infrastructure</div>
        <div class="section-heading">Why We Run Our Own Nodes.</div>
        <p class="section-body">Public RPC endpoints are shared infrastructure. Rate-limited, unreliable, and often a single point of failure for your transaction flow. Fireblox operates dedicated, enterprise-grade node clusters per network — with automatic failover, redundancy, and geo-distributed replicas.</p>
        <button class="btn-outline">View Network Status</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:1px;background:rgba(0,0,0,.08)">
        <div style="background:#fff;padding:28px 32px;display:flex;justify-content:space-between;align-items:center">
          <div style="font-size:13.5px;color:rgba(0,0,0,.6)">Public RPC Rate Limit</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:#e63030">10 rps</div>
        </div>
        <div style="background:#fff;padding:28px 32px;display:flex;justify-content:space-between;align-items:center">
          <div style="font-size:13.5px;color:rgba(0,0,0,.6)">Fireblox Node Capacity</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:#16b450">10,000+ rps</div>
        </div>
        <div style="background:#fff;padding:28px 32px;display:flex;justify-content:space-between;align-items:center">
          <div style="font-size:13.5px;color:rgba(0,0,0,.6)">Public RPC Uptime</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:#e63030">~95%</div>
        </div>
        <div style="background:#fff;padding:28px 32px;display:flex;justify-content:space-between;align-items:center">
          <div style="font-size:13.5px;color:rgba(0,0,0,.6)">Fireblox Node Uptime SLA</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:#16b450">99.9%</div>
        </div>
      </div>
    </div>
  </section>

  <div class="cta-banner">
    <div><div class="cta-heading">Want a new chain?<br><em>We add it in 48h.</em></div></div>
    <button class="btn-primary" onclick="goPage('feasibility')">Submit Chain Request</button>
  </div>
  <footer>
    <div class="footer-brand"><div class="logo-text">FIREBLOX</div><p>The enterprise digital asset infrastructure company.</p></div>
    <div class="footer-col"><h4>Platform</h4><ul><li><a onclick="goPage('products')">Products</a></li><li><a onclick="goPage('platform')">Platform</a></li></ul></div>
    <div class="footer-col"><h4>Company</h4><ul><li><a onclick="goPage('company')">About</a></li><li><a onclick="goPage('feasibility')">Contact</a></li></ul></div>
    <div class="footer-col"><h4>Resources</h4><ul><li><a href="#">Docs</a></li><li><a href="#">Status</a></li></ul></div>
  </footer>
  <div class="footer-bottom"><p>© 2026 Fireblox Inc.</p><div class="footer-bottom-links"><a href="#">Privacy</a><a href="#">Terms</a></div></div>
</div><!-- /page-network -->

<!-- ═══════════════════════════════════════════
     COMPANY PAGE
═══════════════════════════════════════════ -->
<div class="page" id="page-company">
  <div class="inner-hero">
    <div class="page-label">Company</div>
    <div class="page-title">We built the infrastructure<br>that didn't exist.</div>
    <p class="page-sub">Fireblox was founded in 2019 by a team of cryptographers, financial engineers, and infrastructure architects who believed institutional digital asset custody deserved the same reliability as SWIFT — but with the speed and transparency of blockchain.</p>
  </div>

  <div class="stats-grid">
    <div class="stat-cell"><div class="stat-num">2019</div><div class="stat-label">Founded</div></div>
    <div class="stat-cell"><div class="stat-num">380+</div><div class="stat-label">Team Members</div></div>
    <div class="stat-cell"><div class="stat-num">28</div><div class="stat-label">Countries of Operation</div></div>
  </div>

  <div class="timeline">
    <div class="eyebrow">Our Story</div>
    <div class="section-heading-sm">From stealth to global infrastructure.</div>
    <div class="timeline-items">
      <div class="tl-item"><div class="tl-year">2019</div><div><div class="tl-title">Founded in Stealth</div><div class="tl-desc">Three cryptographers leave their roles at major financial institutions to build the institutional custody layer the industry was missing.</div></div></div>
      <div class="tl-item"><div class="tl-year">2020</div><div><div class="tl-title">First Institutional Client</div><div class="tl-desc">Launch of the MPC wallet platform. First Tier-2 bank goes live with $400M in assets under custody on day one.</div></div></div>
      <div class="tl-item"><div class="tl-year">2021</div><div><div class="tl-title">Series B & Global Expansion</div><div class="tl-desc">$120M Series B. Expansion into APAC and MENA markets. Launch of the Policy Engine and DeFi access products.</div></div></div>
      <div class="tl-item"><div class="tl-year">2022</div><div><div class="tl-title">1,000 Institutional Clients</div><div class="tl-desc">Crossed $1 trillion in cumulative transfer volume. Became the de-facto standard for institutional digital asset custody in APAC.</div></div></div>
      <div class="tl-item"><div class="tl-year">2023</div><div><div class="tl-title">Compliance Suite Launch</div><div class="tl-desc">Launched integrated AML/KYT compliance suite. First platform to offer custody, compliance, and connectivity in a single regulated stack.</div></div></div>
      <div class="tl-item"><div class="tl-year">2024</div><div><div class="tl-title">$6T Milestone</div><div class="tl-desc">Cumulative transfer volume crosses $6 trillion. Series D at $800M valuation. Sovereign government deployments in 3 countries.</div></div></div>
      <div class="tl-item"><div class="tl-year">2026</div><div><div class="tl-title">Today</div><div class="tl-desc">1,800+ institutional clients across 28 countries. 50+ blockchain networks. The infrastructure behind more digital assets than any other custodian.</div></div></div>
    </div>
  </div>

  <!-- Team -->
  <section class="section-sm" style="border-top:1px solid rgba(0,0,0,.08)">
    <div class="eyebrow">Leadership</div>
    <div class="section-heading-sm">The team behind the infrastructure.</div>
  </section>
  <div class="team-grid">
    <div class="team-card">
      <div class="team-avatar">AM</div>
      <div class="team-name">Arjun Mehta</div>
      <div class="team-role">Co-Founder & CEO</div>
      <div class="team-bio">Former Head of Digital Assets at Goldman Sachs. Cryptographer. Led the design of Fireblox's MPC key management architecture.</div>
    </div>
    <div class="team-card">
      <div class="team-avatar">SC</div>
      <div class="team-name">Sophie Chen</div>
      <div class="team-role">Co-Founder & CTO</div>
      <div class="team-bio">Former Principal Engineer at Amazon Web Services. 15 years building distributed systems at global scale.</div>
    </div>
    <div class="team-card">
      <div class="team-avatar">MR</div>
      <div class="team-name">Marcus Reid</div>
      <div class="team-role">Co-Founder & CSO</div>
      <div class="team-bio">Former Head of Crypto Compliance at Standard Chartered. Designed the regulatory frameworks for digital asset operations in 12 jurisdictions.</div>
    </div>
    <div class="team-card">
      <div class="team-avatar">LK</div>
      <div class="team-name">Laila Karim</div>
      <div class="team-role">Chief Product Officer</div>
      <div class="team-bio">Product lead behind three enterprise fintech exits. Joined Fireblox to build the dashboard that institutions actually want to use.</div>
    </div>
    <div class="team-card">
      <div class="team-avatar">JW</div>
      <div class="team-name">James Wu</div>
      <div class="team-role">VP Engineering</div>
      <div class="team-bio">Blockchain infrastructure engineer. Former core contributor to Ethereum client development. Leads the 200-person engineering organisation.</div>
    </div>
    <div class="team-card">
      <div class="team-avatar">NK</div>
      <div class="team-name">Nina Kovač</div>
      <div class="team-role">General Counsel</div>
      <div class="team-bio">Former partner at Linklaters. Leads Fireblox's global regulatory strategy across 28 jurisdictions including MiCA, MAS, and SEC frameworks.</div>
    </div>
  </div>

  <div class="cta-banner">
    <div><div class="cta-heading">Join the team<br><em>building the future.</em></div><p class="cta-sub">We're hiring across engineering, product, compliance, and sales.</p></div>
    <button class="btn-primary">View Open Roles</button>
  </div>
  <footer>
    <div class="footer-brand"><div class="logo-text">FIREBLOX</div><p>The enterprise digital asset infrastructure company.</p></div>
    <div class="footer-col"><h4>Platform</h4><ul><li><a onclick="goPage('products')">Products</a></li><li><a onclick="goPage('platform')">Platform</a></li></ul></div>
    <div class="footer-col"><h4>Company</h4><ul><li><a onclick="goPage('company')">About</a></li><li><a href="#">Careers</a></li></ul></div>
    <div class="footer-col"><h4>Contact</h4><ul><li><a onclick="goPage('feasibility')">Feasibility</a></li><li><a href="#">Press</a></li></ul></div>
  </footer>
  <div class="footer-bottom"><p>© 2026 Fireblox Inc.</p><div class="footer-bottom-links"><a href="#">Privacy</a><a href="#">Terms</a></div></div>
</div><!-- /page-company -->

<!-- ═══════════════════════════════════════════
     FEASIBILITY PAGE
═══════════════════════════════════════════ -->
<div class="page" id="page-feasibility">
  <div class="inner-hero">
    <div class="page-label">Request Feasibility</div>
    <div class="page-title">Check Feasibility at<br>Your Institution.</div>
    <p class="page-sub">Tell us about your setup. We'll come back within 24 hours with a full feasibility assessment — which chains, which products, and what a deployment would look like for your specific context.</p>
    <p style="font-size:12px;color:rgba(0,0,0,.4);margin-top:18px;letter-spacing:.08em;text-transform:uppercase">Free check · No commitment · 24h Response</p>
  </div>

  <section class="section">
    <div class="two-col-3">
      <div>
        <div class="eyebrow">Get Started</div>
        <div class="section-heading-sm" style="margin-bottom:28px">Fill in your details</div>
        <div class="form-grid">
          <div class="form-group"><label>First Name</label><input type="text" placeholder="Arjun"></div>
          <div class="form-group"><label>Last Name</label><input type="text" placeholder="Mehta"></div>
          <div class="form-group"><label>Work Email</label><input type="email" placeholder="arjun@institution.com"></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+1 (555) 000-0000"></div>
          <div class="form-group full"><label>Institution Name</label><input type="text" placeholder="Global Capital Partners"></div>
          <div class="form-group"><label>Institution Type</label>
            <select>
              <option value="">Select type…</option>
              <option>Bank / Fintech</option><option>Hedge Fund / Asset Manager</option>
              <option>Crypto Exchange</option><option>Payments / Remittance</option>
              <option>Government / Sovereign</option><option>Web3 Protocol / DAO</option>
            </select>
          </div>
          <div class="form-group"><label>Assets Under Management</label>
            <select>
              <option value="">Select range…</option>
              <option>Under $100M</option><option>$100M – $1B</option>
              <option>$1B – $10B</option><option>$10B – $100B</option><option>$100B+</option>
            </select>
          </div>
          <div class="form-group full"><label>Primary Use Case</label>
            <select>
              <option value="">Select use case…</option>
              <option>Digital Asset Custody</option><option>Tokenized Asset Management</option>
              <option>Stablecoin Payments</option><option>DeFi Treasury Management</option>
              <option>CBDC Infrastructure</option><option>Crypto Exchange Operations</option>
            </select>
          </div>
          <div class="form-group full"><label>Tell us more</label><textarea placeholder="What blockchains are you targeting? What's your current custody setup? Any specific compliance requirements?"></textarea></div>
          <div class="form-group full">
            <button class="btn-primary" style="width:fit-content" onclick="alert('Thank you — our team will respond within 24 hours.')">Submit Feasibility Request</button>
          </div>
        </div>
      </div>
      <div>
        <div style="position:sticky;top:120px;display:flex;flex-direction:column;gap:24px">
          <div style="padding:36px;background:#fff;border:1px solid rgba(0,0,0,.08)">
            <div class="eyebrow" style="margin-bottom:16px">What happens next</div>
            <div style="display:flex;flex-direction:column;gap:18px">
              <div style="display:flex;gap:16px;align-items:flex-start">
                <div style="width:28px;height:28px;border:1px solid rgba(0,0,0,.2);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;color:#111">01</div>
                <div><div style="font-size:14px;font-weight:700;color:#111;margin-bottom:4px">We review your submission</div><div style="font-size:13px;color:rgba(0,0,0,.6);line-height:1.65">Our solutions team reviews your requirements against our infrastructure capabilities and compliance scope.</div></div>
              </div>
              <div style="display:flex;gap:16px;align-items:flex-start">
                <div style="width:28px;height:28px;border:1px solid rgba(0,0,0,.2);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;color:#111">02</div>
                <div><div style="font-size:14px;font-weight:700;color:#111;margin-bottom:4px">24h feasibility report</div><div style="font-size:13px;color:rgba(0,0,0,.6);line-height:1.65">You receive a tailored feasibility assessment — chains supported, onboarding timeline, and recommended product configuration.</div></div>
              </div>
              <div style="display:flex;gap:16px;align-items:flex-start">
                <div style="width:28px;height:28px;border:1px solid rgba(0,0,0,.2);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;color:#111">03</div>
                <div><div style="font-size:14px;font-weight:700;color:#111;margin-bottom:4px">Live demo & scoping</div><div style="font-size:13px;color:rgba(0,0,0,.6);line-height:1.65">We walk you through the platform in your exact use-case context. No generic demos — your assets, your chains, your workflow.</div></div>
              </div>
            </div>
          </div>
          <div style="padding:32px;background:#fff;border:1px solid rgba(0,0,0,.08)">
            <div style="font-size:11px;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:rgba(0,0,0,.4);margin-bottom:16px">Already a client?</div>
            <p style="font-size:13.5px;color:rgba(0,0,0,.6);line-height:1.65;margin-bottom:18px">Log in to your existing dashboard or contact your dedicated account manager.</p>
            <button class="btn-outline" style="margin-top:0">Access Portal →</button>
          </div>
          <div class="status-banner">
            <div class="status-dot"></div>
            <div class="status-text">All Systems Operational</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="footer-brand"><div class="logo-text">FIREBLOX</div><p>The enterprise digital asset infrastructure company.</p></div>
    <div class="footer-col"><h4>Platform</h4><ul><li><a onclick="goPage('products')">Products</a></li><li><a onclick="goPage('platform')">Platform</a></li></ul></div>
    <div class="footer-col"><h4>Company</h4><ul><li><a onclick="goPage('company')">About</a></li><li><a href="#">Careers</a></li></ul></div>
    <div class="footer-col"><h4>Contact</h4><ul><li><a href="#">hello@fireblox.io</a></li><li><a href="#">+1 (415) 000-0000</a></li></ul></div>
  </footer>
  <div class="footer-bottom"><p>© 2026 Fireblox Inc.</p><div class="footer-bottom-links"><a href="#">Privacy</a><a href="#">Terms</a></div></div>
</div><!-- /page-feasibility -->

<script>
// ─── Scroll nav background ───
window.addEventListener('scroll',()=>{
  document.getElementById('mainNav').classList.toggle('scrolled',window.scrollY>30)
})

// ─── Page navigation ───
function goPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'))
  document.getElementById('page-'+name).classList.add('active')
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active',a.dataset.page===name)
  })
  window.scrollTo({top:0,behavior:'instant'})
}
</script>
</body>
</html>
8
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZineForge — Interactive Retro Collage Art & Social Media Post Builder</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Caveat:wght@700&family=Playfair+Display:ital,wght@0,700;1,400&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- Lucide Icons (CDN) -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Space Grotesk"', 'sans-serif'],
            serif: ['"Playfair Display"', 'serif'],
            hand: ['"Caveat"', 'cursive'],
            sketch: ['"Architects Daughter"', 'cursive'],
          },
          colors: {
            paper: {
              50: '#fbfbf8',
              100: '#f4f1eb',
              200: '#eadecf',
              300: '#d5c4b1',
            },
            crimson: {
              DEFAULT: '#a82020',
              50: '#fef2f2',
              100: '#fee2e2',
              600: '#be123c',
              700: '#be123c',
              800: '#991b1b',
              900: '#7f1d1d',
            },
            charcoal: {
              DEFAULT: '#1c1917',
              light: '#292524',
              dark: '#0c0a09',
            }
          },
          boxShadow: {
            'retro-sm': '2px 2px 0px 0px rgba(28, 25, 23, 1)',
            'retro': '5px 5px 0px 0px rgba(28, 25, 23, 1)',
            'retro-lg': '8px 8px 0px 0px rgba(28, 25, 23, 1)',
            'retro-xl': '12px 12px 0px 0px rgba(28, 25, 23, 1)',
          }
        }
      }
    }
  </script>

  <style>
    /* Custom Paper Noise Overlay */
    .paper-noise {
      background-image: radial-gradient(rgba(0,0,0,0.15) 1px, transparent 0), radial-gradient(rgba(0,0,0,0.1) 1px, transparent 0);
      background-size: 8px 8px;
      background-position: 0 0, 4px 4px;
    }
    
    .paper-fiber {
      background-color: #f4f1eb;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3联%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
    }

    /* Distressed custom clip-paths for torn-paper aesthetic */
    .torn-edge-bottom {
      clip-path: polygon(0% 0%, 100% 0%, 100% 92%, 98% 95%, 95% 90%, 92% 94%, 88% 91%, 85% 96%, 80% 92%, 75% 95%, 71% 91%, 67% 94%, 63% 90%, 59% 95%, 54% 91%, 50% 94%, 46% 91%, 42% 95%, 38% 91%, 33% 96%, 29% 92%, 25% 95%, 21% 91%, 17% 94%, 13% 91%, 9% 96%, 5% 91%, 0% 95%);
    }

    .torn-edge-top {
      clip-path: polygon(0% 8%, 4% 3%, 9% 9%, 13% 4%, 17% 9%, 22% 3%, 26% 8%, 31% 4%, 35% 9%, 40% 3%, 44% 8%, 49% 4%, 53% 9%, 57% 3%, 62% 8%, 66% 4%, 71% 9%, 75% 3%, 80% 8%, 84% 4%, 89% 9%, 93% 3%, 97% 8%, 100% 4%, 100% 100%, 0% 100%);
    }

    .torn-strip {
      clip-path: polygon(0% 12%, 5% 5%, 10% 14%, 15% 6%, 20% 15%, 25% 7%, 30% 14%, 35% 5%, 40% 12%, 45% 4%, 50% 15%, 55% 6%, 60% 13%, 65% 5%, 70% 14%, 75% 7%, 80% 13%, 85% 5%, 90% 15%, 95% 6%, 100% 11%, 100% 88%, 95% 95%, 90% 86%, 85% 94%, 80% 87%, 75% 94%, 70% 86%, 65% 95%, 60% 87%, 55% 94%, 50% 85%, 45% 95%, 40% 88%, 35% 94%, 30% 86%, 25% 94%, 20% 86%, 15% 93%, 10% 85%, 5% 94%, 0% 87%);
    }

    /* Halftone overlay pattern */
    .halftone {
      background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
      background-size: 6px 6px;
    }

    /* Hide default focus ring but keep accessible */
    *:focus-visible {
      outline: 3px solid #a82020;
    }

    /* Handheld/Touch rotation adjustments */
    .collage-item {
      touch-action: none;
      user-select: none;
    }

    /* Realistic tape styling */
    .tape-strip {
      background: rgba(225, 215, 185, 0.6);
      backdrop-filter: blur(1px);
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      transform: rotate(-3deg);
    }
  </style>
</head>
<body class="paper-fiber text-charcoal min-h-screen selection:bg-crimson selection:text-white overflow-x-hidden relative">

  <!-- TOP DECORATIVE TORN NEWSPRINT STRIP -->
  <div class="w-full bg-charcoal text-paper-100 text-xs py-2 px-4 uppercase tracking-widest font-mono flex justify-between items-center z-50 relative overflow-hidden">
    <div class="flex items-center space-x-6 animate-pulse">
      <span>● SYSTEM STATUS: ARTISTIC LIBERATION ACTIVE</span>
      <span class="hidden md:inline">▲ COLLAGE ART EDITION v4.1</span>
      <span class="hidden lg:inline">■ TOTAL ASSETS LOADED: 942</span>
    </div>
    <div class="flex items-center space-x-4">
      <span class="font-bold text-crimson-600">DIY DESIGN PROTOCOLS ENGAGED</span>
    </div>
  </div>

  <!-- STICKY RETRO NAVBAR -->
  <header class="border-b-4 border-charcoal bg-paper-100 sticky top-0 z-40 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="group flex items-center space-x-2">
        <div class="relative bg-crimson p-2 border-2 border-charcoal shadow-retro-sm group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
          <span class="font-serif font-bold text-xl text-paper-100 italic tracking-tighter">Z</span>
        </div>
        <div>
          <span class="font-sans font-extrabold text-xl tracking-tight uppercase block leading-none">ZineForge</span>
          <span class="font-hand text-sm text-crimson leading-none block -mt-1">social collage lab</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center space-x-8 font-medium">
        <a href="#playground" class="hover:text-crimson hover:underline underline-offset-4 transition-colors">Collage Maker</a>
        <a href="#features" class="hover:text-crimson hover:underline underline-offset-4 transition-colors">Tools</a>
        <a href="#gallery" class="hover:text-crimson hover:underline underline-offset-4 transition-colors">Inspiration</a>
        <a href="#pricing" class="hover:text-crimson hover:underline underline-offset-4 transition-colors">Creator Pass</a>
      </nav>

      <!-- Action Button -->
      <div class="flex items-center space-x-4">
        <a href="#playground" class="px-5 py-2 border-2 border-charcoal bg-crimson text-white font-bold text-sm uppercase tracking-wider shadow-retro hover:bg-crimson-800 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] transition-all">
          Build a Post!
        </a>
      </div>
    </div>
  </header>

  <!-- HERO SECTION WITH VINTAGE COLLAGE EXPLOSION -->
  <section class="relative pt-10 pb-20 border-b-4 border-charcoal overflow-hidden bg-paper-50">
    <!-- Decorative Stamp Background Elements -->
    <div class="absolute top-10 right-10 opacity-10 pointer-events-none transform rotate-12 select-none hidden lg:block">
      <svg width="200" height="200" viewBox="0 0 100 100" class="text-charcoal fill-current">
        <path d="M10,10 H90 V90 H10 Z" stroke="currentColor" stroke-dasharray="2" fill="none"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor"/>
        <text x="50" y="55" font-family="serif" font-size="8" text-anchor="middle" font-weight="bold">POSTES AIRMAIL</text>
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <!-- Left Column: Copy -->
      <div class="lg:col-span-5 space-y-8 z-10 relative">
        <!-- Badge -->
        <div class="inline-block relative">
          <span class="bg-yellow-100 text-charcoal border-2 border-charcoal px-3 py-1 font-sketch text-xs font-bold uppercase tracking-wider rotate-[-2deg] block shadow-retro-sm">
            ⚡ Trending Collage Art Engine
          </span>
          <!-- Curved vector arrow drawn inline pointing to title -->
          <div class="absolute -right-16 -bottom-10 w-16 h-12 text-crimson transform scale-x-[-1] pointer-events-none hidden md:block">
            <svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,10 C40,20 60,50 50,80" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 4"/>
              <path d="M35,65 L50,80 L65,70" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>
        </div>

        <h1 class="text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-charcoal leading-none">
          CRAFT RADICAL <br>
          <span class="relative inline-block my-1 text-paper-50 bg-charcoal px-4 py-2 rotate-[1.5deg] border-2 border-charcoal shadow-retro">
            SOCIAL POSTS
          </span><br>
          <span class="font-serif italic font-normal text-crimson">Collage art style.</span>
        </h1>

        <p class="text-lg md:text-xl text-stone-700 font-sans leading-relaxed max-w-xl">
          Break the bounds of standard, sterile grids. Forge magnificent, surrealistic, retro-textured, and vintage newspaper collages that demand attention on feed. Free your digital soul.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a href="#playground" class="group relative px-8 py-4 border-3 border-charcoal bg-crimson text-white font-extrabold text-lg uppercase tracking-wider shadow-retro hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all w-full sm:w-auto text-center">
            <span>START CRAFTING LAB</span>
            <i data-lucide="arrow-right" class="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
          </a>
          <a href="#gallery" class="px-8 py-4 border-3 border-charcoal bg-paper-100 text-charcoal font-bold text-lg uppercase tracking-wider hover:bg-paper-200 transition-all w-full sm:w-auto text-center shadow-retro-sm">
            View Templates
          </a>
        </div>

        <!-- Handwritten annotation -->
        <div class="flex items-center space-x-3 text-crimson pt-4">
          <i data-lucide="sparkles" class="w-5 h-5 flex-shrink-0"></i>
          <span class="font-hand text-2xl font-bold">Absolutely no design experience required! DIY mode active.</span>
        </div>
      </div>

      <!-- Right Column: Visual Universe Representation -->
      <div class="lg:col-span-7 relative flex justify-center items-center py-8">
        <!-- Master Collage Mockup Frame simulating the exact image's core feel -->
        <div class="relative w-full max-w-[500px] aspect-[4/5] bg-paper-100 border-4 border-charcoal shadow-retro-xl p-6 paper-fiber flex flex-col justify-between overflow-hidden">
          
          <!-- Newsprint background halftone detail -->
          <div class="absolute inset-0 halftone opacity-5 pointer-events-none"></div>

          <!-- Ripped top newspaper strip -->
          <div class="absolute top-0 left-0 right-0 h-16 bg-stone-300 border-b-2 border-charcoal opacity-45 transform rotate-[-1deg] overflow-hidden flex items-center p-2">
            <span class="text-[9px] font-mono text-charcoal-dark uppercase tracking-tighter opacity-70">
              The Daily Collage Epoch // Vol 99 No. 402 // World Awakens From Digital Slumber // Surrealism Prevails Over Simple Boxes
            </span>
          </div>

          <!-- Collage Elements Stack (Aesthetic Replica of Visual Vibe) -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <!-- 1. Red Sun in Center Background -->
            <div class="w-64 h-64 bg-gradient-to-br from-crimson to-crimson-800 rounded-full border-2 border-charcoal opacity-95 relative flex items-center justify-center animate-[spin_60s_linear_infinite] shadow-lg">
              <!-- Internal distressed concentric circles -->
              <div class="w-48 h-48 rounded-full border border-dashed border-paper-100 opacity-30"></div>
              <div class="w-24 h-24 rounded-full border border-double border-paper-100 opacity-40"></div>
            </div>

            <!-- 2. Retro Moon overlay inside sun -->
            <div class="absolute w-12 h-12 rounded-full bg-paper-300 border border-charcoal left-[32%] top-[34%] transform -rotate-12 overflow-hidden shadow-inner opacity-90">
              <div class="w-4 h-4 rounded-full bg-stone-400 absolute top-1 left-2 opacity-50"></div>
              <div class="w-3 h-3 rounded-full bg-stone-400 absolute bottom-2 right-2 opacity-30"></div>
            </div>

            <!-- 3. Mini Flying Birds SVG -->
            <svg class="absolute w-24 h-16 text-charcoal-dark top-[28%] left-[28%] opacity-80" viewBox="0 0 100 50">
              <path d="M10,20 Q20,10 30,20 Q40,10 50,20" stroke="currentColor" stroke-width="2" fill="none"/>
              <path d="M40,35 Q48,28 56,35 Q64,28 72,35" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <path d="M15,40 Q21,35 27,40 Q33,35 39,40" stroke="currentColor" stroke-width="1" fill="none"/>
            </svg>

            <!-- 4. Vintage Landmark elements (Pisa & Brandenburg style silhouettes) -->
            <div class="absolute bottom-[28%] left-[10%] w-24 h-48 opacity-90 transform -rotate-6 scale-90 select-none">
              <!-- Pisa Leaning Tower Silhouette represented as detailed SVG -->
              <svg viewBox="0 0 100 200" class="w-full h-full text-stone-800 drop-shadow-md">
                <rect x="25" y="10" width="50" height="170" fill="#292524" rx="2"/>
                <line x1="25" y1="30" x2="75" y2="30" stroke="#f4f1eb" stroke-width="3"/>
                <line x1="25" y1="60" x2="75" y2="60" stroke="#f4f1eb" stroke-width="3"/>
                <line x1="25" y1="90" x2="75" y2="90" stroke="#f4f1eb" stroke-width="3"/>
                <line x1="25" y1="120" x2="75" y2="120" stroke="#f4f1eb" stroke-width="3"/>
                <line x1="25" y1="150" x2="75" y2="150" stroke="#f4f1eb" stroke-width="3"/>
                <circle cx="50" cy="20" r="5" fill="#f4f1eb"/>
              </svg>
            </div>

            <div class="absolute bottom-[28%] right-[10%] w-32 h-36 opacity-75 transform rotate-3 select-none">
              <!-- Roman Colosseum graphic simulation -->
              <svg viewBox="0 0 120 80" class="w-full h-full text-stone-700">
                <path d="M10,70 L110,70 L110,30 L10,40 Z" fill="#44403c"/>
                <line x1="10" y1="50" x2="110" y2="50" stroke="#f4f1eb" stroke-width="2"/>
                <circle cx="25" cy="45" r="4" fill="#f4f1eb"/>
                <circle cx="45" cy="45" r="4" fill="#f4f1eb"/>
                <circle cx="65" cy="45" r="4" fill="#f4f1eb"/>
                <circle cx="85" cy="45" r="4" fill="#f4f1eb"/>
              </svg>
            </div>

            <!-- 5. Classic Sculpture Overlay (Horse and warrior replica silhouette) -->
            <div class="absolute bottom-[20%] left-[15%] w-44 h-44 transform -rotate-3 select-none">
              <svg viewBox="0 0 200 200" class="w-full h-full text-stone-900 drop-shadow-[5px_5px_0px_rgba(255,255,255,0.7)]">
                <!-- Detailed vector path resembling a majestic rearing horse with warrior -->
                <path d="M 50 180 Q 40 140 60 110 T 80 80 Q 90 70 85 50 Q 100 40 110 55 T 100 85 Q 110 100 130 90 T 150 120 Q 160 140 140 160 T 100 180 Z" fill="currentColor"/>
                <circle cx="115" cy="50" r="4" fill="#f4f1eb"/>
                <!-- Spear or sword line -->
                <line x1="110" y1="40" x2="160" y2="10" stroke="currentColor" stroke-width="3"/>
              </svg>
            </div>

            <!-- 6. Camera-Headed Man Dressed in Suit -->
            <div class="absolute bottom-[16%] right-[18%] w-32 h-56 transform rotate-2 select-none z-10">
              <!-- Suited body -->
              <svg viewBox="0 0 100 200" class="w-full h-full">
                <!-- Torso, Arms and legs in gray scale vintage style -->
                <path d="M 25,60 L 75,60 L 85,120 L 70,120 L 75,180 L 60,180 L 55,130 L 45,130 L 40,180 L 25,180 L 30,120 L 15,120 Z" fill="#292524" stroke="#1c1917" stroke-width="2"/>
                <!-- White shirt V collar -->
                <polygon points="40,60 60,60 50,75" fill="#f5f5f4"/>
                <!-- Dark bow tie -->
                <polygon points="45,63 55,63 50,67" fill="#0c0a09"/>
                <polygon points="45,67 55,67 50,63" fill="#0c0a09"/>
                
                <!-- Vintage Camera as the head -->
                <g transform="translate(20, 15) scale(0.6)">
                  <rect x="10" y="20" width="80" height="50" fill="#1c1917" rx="5" stroke="#f4f1eb" stroke-width="2"/>
                  <!-- Lens -->
                  <circle cx="50" cy="45" r="18" fill="#44403c" stroke="#f4f1eb" stroke-width="3"/>
                  <circle cx="50" cy="45" r="8" fill="#1c1917"/>
                  <!-- Flash bulb & controls -->
                  <rect x="20" y="10" width="15" height="10" fill="#be123c" rx="2"/>
                  <circle cx="75" cy="30" r="4" fill="#d6d3d1"/>
                  <!-- Hand drawn flash sparks -->
                  <path d="M5,15 L15,22 M85,15 L75,22" stroke="#be123c" stroke-width="2"/>
                </g>
              </svg>
            </div>

            <!-- 7. Vintage Red Tram in Foreground -->
            <div class="absolute bottom-[5%] left-[24%] w-52 h-32 transform -rotate-[2deg] z-20 select-none">
              <!-- Retro tram simulation with windows, tracks and glowing crimson red theme -->
              <svg viewBox="0 0 200 120" class="w-full h-full drop-shadow-xl">
                <!-- Body -->
                <rect x="10" y="30" width="180" height="70" fill="#a82020" rx="6" stroke="#1c1917" stroke-width="3"/>
                <rect x="15" y="40" width="170" height="25" fill="#1c1917" rx="3"/>
                <!-- Glass/windows separation -->
                <rect x="20" y="43" width="20" height="18" fill="#eadecf"/>
                <rect x="45" y="43" width="20" height="18" fill="#eadecf"/>
                <rect x="70" y="43" width="20" height="18" fill="#eadecf"/>
                <rect x="95" y="43" width="20" height="18" fill="#eadecf"/>
                <rect x="120" y="43" width="20" height="18" fill="#eadecf"/>
                <rect x="145" y="43" width="20" height="18" fill="#eadecf"/>
                <!-- Tram Number / Destination plate -->
                <rect x="85" y="15" width="30" height="15" fill="#f4f1eb" stroke="#1c1917" stroke-width="2"/>
                <text x="100" y="27" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#1c1917">115</text>
                <!-- Wheels & track line -->
                <circle cx="50" cy="103" r="10" fill="#1c1917"/>
                <circle cx="150" cy="103" r="10" fill="#1c1917"/>
                <line x1="0" y1="110" x2="200" y2="100" stroke="#1c1917" stroke-width="4"/>
              </svg>
            </div>
            
            <!-- 8. Realist green hedge bar under tram -->
            <div class="absolute bottom-[10%] left-[5%] right-[5%] h-5 bg-stone-900 border-2 border-charcoal opacity-95 flex overflow-hidden">
              <!-- Pixelated / Textured hedge mimic -->
              <div class="w-full h-full bg-emerald-950 halftone text-emerald-600"></div>
            </div>
          </div>

          <!-- Bottom Branding & Stamp text -->
          <div class="z-20 flex justify-between items-end">
            <div class="bg-charcoal text-paper-100 px-3 py-1 text-xs uppercase font-mono tracking-wider rotate-[-1deg] border border-stone-800">
              EXPLORE COLLAGE ARTWORKS
            </div>
            
            <div class="text-right flex flex-col items-end">
              <span class="font-hand text-xl font-bold text-crimson leading-none rotate-[4deg] block">Please!</span>
              <span class="font-hand text-lg text-charcoal leading-none block">Build Yours Below</span>
            </div>
          </div>

        </div>

        <!-- Custom Tape overlays securing the frame Corners to simulate physical board -->
        <div class="absolute -top-2 -left-2 w-20 h-6 tape-strip -rotate-45"></div>
        <div class="absolute -bottom-1 -right-4 w-24 h-7 tape-strip rotate-[30deg]"></div>
        
        <!-- Hanging Hand-Drawn Note Card -->
        <div class="absolute -bottom-12 -left-6 bg-yellow-100 border-2 border-charcoal p-3 shadow-retro rotate-[-6deg] hidden sm:block max-w-[200px]">
          <p class="font-hand text-charcoal text-base leading-tight font-bold">
            "We do NOT duplicate sterile layouts. We cut, paste, and rewrite rules!"
          </p>
          <div class="flex justify-end mt-1 text-crimson text-xs font-mono">— FOUNDER Z.</div>
        </div>
      </div>
    </div>

    <!-- TORN EDGE SEPARATOR -->
    <div class="absolute bottom-0 left-0 right-0 h-8 bg-paper-100 torn-edge-bottom border-b border-charcoal"></div>
  </section>

  <!-- INTERACTIVE LIVE PLAYGROUND / BUILDER SECTION -->
  <section id="playground" class="py-20 bg-paper-100 relative border-b-4 border-charcoal">
    <!-- Grid overlay background to reinforce workspace feel -->
    <div class="absolute inset-0 paper-noise opacity-30 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 md:px-8 relative">
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span class="text-crimson font-hand text-3xl font-bold block transform rotate-[-1deg]">No code. No complexity. Just Raw Creation.</span>
        <h2 class="text-4xl md:text-5xl font-sans font-extrabold tracking-tight uppercase">
          DIY Collage <span class="text-crimson font-serif italic lowercase">playground</span>
        </h2>
        <p class="text-stone-700 font-sans">
          Click elements on the left catalog to spawn them onto your scrapbook workspace. Drag, scale, rotate, and layer them to craft a gorgeous aesthetic post!
        </p>
      </div>

      <!-- MAIN PLAYGROUND WORKSPACE GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- LEFT: Element Library Panel -->
        <div class="lg:col-span-4 bg-paper-50 border-4 border-charcoal shadow-retro p-6 space-y-6">
          <div class="border-b-2 border-charcoal pb-4">
            <h3 class="font-sans font-extrabold text-xl uppercase text-charcoal flex items-center">
              <i data-lucide="scissors" class="w-5 h-5 mr-2 text-crimson"></i>
              Cutout Bin
            </h3>
            <p class="text-xs text-stone-600 mt-1">Tap elements below to spawn onto the canvas</p>
          </div>

          <!-- Category Tags -->
          <div class="flex flex-wrap gap-2">
            <button class="px-3 py-1 bg-charcoal text-paper-100 text-xs font-bold rounded" onclick="filterAssetBin('all')">All Cutouts</button>
            <button class="px-3 py-1 bg-paper-200 hover:bg-paper-300 text-charcoal text-xs font-bold rounded" onclick="filterAssetBin('figures')">Figures</button>
            <button class="px-3 py-1 bg-paper-200 hover:bg-paper-300 text-charcoal text-xs font-bold rounded" onclick="filterAssetBin('structures')">Monuments</button>
            <button class="px-3 py-1 bg-paper-200 hover:bg-paper-300 text-charcoal text-xs font-bold rounded" onclick="filterAssetBin('accents')">Doodles</button>
          </div>

          <!-- Catalog Grid -->
          <div id="catalog-bin" class="grid grid-cols-3 gap-3 max-h-[350px] overflow-y-auto pr-2">
            <!-- Asset 1: Red Sun -->
            <div onclick="spawnAsset('sun')" class="group cursor-pointer border-2 border-stone-300 hover:border-crimson p-2 rounded bg-white transition-all flex flex-col items-center justify-center text-center hover:scale-105" data-category="accents">
              <div class="w-12 h-12 rounded-full bg-crimson opacity-90 mb-1"></div>
              <span class="text-[10px] font-mono font-bold uppercase">Red Sun</span>
            </div>

            <!-- Asset 2: Leaning Tower -->
            <div onclick="spawnAsset('tower')" class="group cursor-pointer border-2 border-stone-300 hover:border-crimson p-2 rounded bg-white transition-all flex flex-col items-center justify-center text-center hover:scale-105" data-category="structures">
              <svg viewBox="0 0 100 200" class="w-10 h-12 text-stone-700">
                <rect x="35" y="10" width="30" height="170" fill="currentColor"/>
                <line x1="35" y1="40" x2="65" y2="40" stroke="#fff" stroke-width="2"/>
                <line x1="35" y1="80" x2="65" y2="80" stroke="#fff" stroke-width="2"/>
                <line x1="35" y1="120" x2="65" y2="120" stroke="#fff" stroke-width="2"/>
              </svg>
              <span class="text-[10px] font-mono font-bold uppercase">Tower</span>
            </div>

            <!-- Asset 3: Suited Figure -->
            <div onclick="spawnAsset('man')" class="group cursor-pointer border-2 border-stone-300 hover:border-crimson p-2 rounded bg-white transition-all flex flex-col items-center justify-center text-center hover:scale-105" data-category="figures">
              <svg viewBox="0 0 100 200" class="w-8 h-12 text-charcoal-light">
                <rect x="30" y="50" width="40" height="130" fill="currentColor"/>
                <circle cx="50" cy="30" r="15" fill="#a82020"/>
              </svg>
              <span class="text-[10px] font-mono font-bold uppercase">Gentleman</span>
            </div>

            <!-- Asset 4: Colosseum -->
            <div onclick="spawnAsset('colosseum')" class="group cursor-pointer border-2 border-stone-300 hover:border-crimson p-2 rounded bg-white transition-all flex flex-col items-center justify-center text-center hover:scale-105" data-category="structures">
              <svg viewBox="0 0 120 80" class="w-12 h-10 text-stone-600">
                <path d="M10,70 L110,70 L100,20 L20,20 Z" fill="currentColor"/>
              </svg>
              <span class="text-[10px] font-mono font-bold uppercase">Colosseum</span>
            </div>

            <!-- Asset 5: Red Tram -->
            <div onclick="spawnAsset('tram')" class="group cursor-pointer border-2 border-stone-300 hover:border-crimson p-2 rounded bg-white transition-all flex flex-col items-center justify-center text-center hover:scale-105" data-category="structures">
              <div class="w-12 h-8 bg-crimson border border-charcoal rounded flex items-center justify-center">
                <div class="w-3 h-3 bg-stone-900 rounded-full"></div>
                <div class="w-3 h-3 bg-stone-900 rounded-full ml-2"></div>
              </div>
              <span class="text-[10px] font-mono font-bold uppercase">Tram 115</span>
            </div>

            <!-- Asset 6: Flying Birds -->
            <div onclick="spawnAsset('birds')" class="group cursor-pointer border-2 border-stone-300 hover:border-crimson p-2 rounded bg-white transition-all flex flex-col items-center justify-center text-center hover:scale-105" data-category="accents">
              <svg viewBox="0 0 100 50" class="w-10 h-8 text-charcoal-light">
                <path d="M10,20 Q20,10 30,20 Q40,10 50,20" stroke="currentColor" stroke-width="2" fill="none"/>
              </svg>
              <span class="text-[10px] font-mono font-bold uppercase">Birds</span>
            </div>

            <!-- Asset 7: Hand Scribble Circle -->
            <div onclick="spawnAsset('circle')" class="group cursor-pointer border-2 border-stone-300 hover:border-crimson p-2 rounded bg-white transition-all flex flex-col items-center justify-center text-center hover:scale-105" data-category="accents">
              <svg viewBox="0 0 100 100" class="w-10 h-10 text-crimson">
                <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="2 2"/>
              </svg>
              <span class="text-[10px] font-mono font-bold uppercase">Ink Ring</span>
            </div>

            <!-- Asset 8: Greek Statue -->
            <div onclick="spawnAsset('statue')" class="group cursor-pointer border-2 border-stone-300 hover:border-crimson p-2 rounded bg-white transition-all flex flex-col items-center justify-center text-center hover:scale-105" data-category="figures">
              <svg viewBox="0 0 100 150" class="w-8 h-12 text-stone-500">
                <path d="M20,130 Q30,80 50,50 T80,10 L50,130 Z" fill="currentColor"/>
              </svg>
              <span class="text-[10px] font-mono font-bold uppercase">Greek Head</span>
            </div>

            <!-- Asset 9: Retro Arrow -->
            <div onclick="spawnAsset('arrow')" class="group cursor-pointer border-2 border-stone-300 hover:border-crimson p-2 rounded bg-white transition-all flex flex-col items-center justify-center text-center hover:scale-105" data-category="accents">
              <svg viewBox="0 0 100 50" class="w-12 h-6 text-crimson">
                <path d="M10,25 L90,25 M70,10 L90,25 L70,40" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
              <span class="text-[10px] font-mono font-bold uppercase">Scribble →</span>
            </div>
          </div>

          <!-- Quick Text Input Layer -->
          <div class="border-t-2 border-charcoal pt-4 space-y-2">
            <span class="block text-xs font-mono font-bold uppercase">Add Handwritten Headline</span>
            <div class="flex gap-2">
              <input id="custom-text-input" type="text" placeholder="e.g. Please! Click Here" class="w-full px-3 py-2 text-sm border-2 border-charcoal bg-white font-sans focus:outline-none focus:ring-2 focus:ring-crimson">
              <button onclick="spawnCustomText()" class="px-4 py-2 bg-charcoal text-paper-100 text-xs font-bold uppercase tracking-wider border-2 border-charcoal shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">Add</button>
            </div>
          </div>

          <!-- Element Transformer Controls (Dynamic to selected item) -->
          <div id="transformer-controls" class="border-t-2 border-charcoal pt-4 space-y-3 opacity-60 pointer-events-none transition-all duration-200">
            <div class="flex justify-between items-center">
              <span class="text-xs font-mono font-bold uppercase text-crimson">Selected Item Controls</span>
              <button onclick="deselectActiveItem()" class="text-[10px] text-charcoal underline hover:text-crimson font-mono">Deselect</button>
            </div>
            <!-- Sliders -->
            <div class="space-y-1">
              <label class="text-[11px] font-mono flex justify-between"><span>Rotate:</span> <span id="val-rotate">0°</span></label>
              <input id="control-rotate" type="range" min="-180" max="180" value="0" class="w-full accent-crimson" oninput="updateActiveElementTransform()">
            </div>
            <div class="space-y-1">
              <label class="text-[11px] font-mono flex justify-between"><span>Scale:</span> <span id="val-scale">1.0x</span></label>
              <input id="control-scale" type="range" min="0.3" max="2.5" step="0.1" value="1.0" class="w-full accent-crimson" oninput="updateActiveElementTransform()">
            </div>
            <!-- Z-index arranging -->
            <div class="flex justify-between gap-2 pt-1">
              <button onclick="adjustZIndex(1)" class="w-1/2 py-1.5 bg-paper-200 hover:bg-paper-300 border border-charcoal text-xs font-bold rounded">Bring Forward</button>
              <button onclick="adjustZIndex(-1)" class="w-1/2 py-1.5 bg-paper-200 hover:bg-paper-300 border border-charcoal text-xs font-bold rounded">Send Backward</button>
            </div>
            <button onclick="deleteActiveElement()" class="w-full py-1.5 bg-red-100 hover:bg-red-200 border-2 border-red-800 text-red-800 text-xs font-bold rounded uppercase tracking-wider">
              Delete Cutout
            </button>
          </div>
        </div>

        <!-- CENTER/RIGHT: Creative Live Canvas Workspace -->
        <div class="lg:col-span-8 flex flex-col items-center">
          
          <!-- Control bar for Canvas -->
          <div class="w-full flex justify-between items-center bg-charcoal text-paper-100 px-4 py-2 border-t-4 border-x-4 border-charcoal text-xs font-mono">
            <span class="flex items-center"><span class="w-2.5 h-2.5 bg-green-500 rounded-full inline-block mr-2 animate-pulse"></span> CANVAS v1.0.0</span>
            <div class="flex items-center space-x-4">
              <button onclick="clearCanvas()" class="hover:text-crimson-600 font-bold transition-all">Clear Board</button>
              <button onclick="resetCanvasToDefault()" class="hover:text-crimson-600 font-bold transition-all">Reset to Default</button>
            </div>
          </div>

          <!-- THE SCALABLE CANVAS -->
          <div id="canvas-container" class="relative w-full max-w-[550px] aspect-[4/5] bg-paper-50 border-4 border-charcoal shadow-retro-lg overflow-hidden paper-fiber select-none cursor-crosshair">
            <!-- Subtle backdrop newspaper lines -->
            <div class="absolute inset-0 halftone opacity-5 pointer-events-none"></div>

            <!-- Dynamic Collage Objects Container -->
            <div id="canvas-workspace" class="absolute inset-0 w-full h-full">
              <!-- Default Initial Spawned Elements for Instant Aesthetic Glory -->
              <!-- Element: Red Sun Background -->
              <div id="default-sun" class="collage-item absolute left-[15%] top-[15%] cursor-grab active:cursor-grabbing text-center active-item" style="transform: translate(20px, 40px) rotate(-15deg) scale(1.1); z-index: 10;" onclick="selectElement(this, event)">
                <div class="w-48 h-48 bg-gradient-to-tr from-crimson to-crimson-700 rounded-full border border-charcoal opacity-90 shadow-md flex items-center justify-center">
                  <div class="w-32 h-32 rounded-full border border-dashed border-paper-100 opacity-20"></div>
                </div>
              </div>

              <!-- Element: Tower -->
              <div id="default-tower" class="collage-item absolute left-[5%] bottom-[20%] cursor-grab active:cursor-grabbing text-center" style="transform: translate(15px, 0px) rotate(-8deg) scale(0.9); z-index: 15;" onclick="selectElement(this, event)">
                <svg viewBox="0 0 100 200" class="w-32 h-56 text-stone-800 drop-shadow-lg">
                  <rect x="25" y="10" width="50" height="170" fill="#292524" rx="2"/>
                  <line x1="25" y1="30" x2="75" y2="30" stroke="#f4f1eb" stroke-width="3"/>
                  <line x1="25" y1="65" x2="75" y2="65" stroke="#f4f1eb" stroke-width="3"/>
                  <line x1="25" y1="100" x2="75" y2="100" stroke="#f4f1eb" stroke-width="3"/>
                  <line x1="25" y1="135" x2="75" y2="135" stroke="#f4f1eb" stroke-width="3"/>
                </svg>
              </div>

              <!-- Element: Hand drawn arrow -->
              <div id="default-arrow" class="collage-item absolute right-[15%] bottom-[12%] cursor-grab active:cursor-grabbing text-center" style="transform: translate(0px, 0px) rotate(10deg) scale(1.2); z-index: 30;" onclick="selectElement(this, event)">
                <div class="flex flex-col items-center">
                  <svg viewBox="0 0 100 50" class="w-24 h-12 text-crimson">
                    <path d="M10,25 L90,25 M70,10 L90,25 L70,40" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                  </svg>
                  <span class="font-hand text-xl font-bold text-crimson -mt-2">Drag anything!</span>
                </div>
              </div>

              <!-- Element: Camera Man -->
              <div id="default-man" class="collage-item absolute right-[10%] bottom-[15%] cursor-grab active:cursor-grabbing text-center" style="transform: translate(0px, 0px) rotate(4deg) scale(1.1); z-index: 20;" onclick="selectElement(this, event)">
                <div class="w-32 h-56 relative">
                  <svg viewBox="0 0 100 200" class="w-full h-full">
                    <path d="M 25,60 L 75,60 L 85,120 L 70,120 L 75,180 L 60,180 L 55,130 L 45,130 L 40,180 L 25,180 L 30,120 L 15,120 Z" fill="#292524" stroke="#1c1917" stroke-width="2"/>
                    <polygon points="40,60 60,60 50,75" fill="#f5f5f4"/>
                    <polygon points="45,63 55,63 50,67" fill="#0c0a09"/>
                    <polygon points="45,67 55,67 50,63" fill="#0c0a09"/>
                    
                    <g transform="translate(20, 15) scale(0.6)">
                      <rect x="10" y="20" width="80" height="50" fill="#1c1917" rx="5" stroke="#f4f1eb" stroke-width="2"/>
                      <circle cx="50" cy="45" r="18" fill="#44403c" stroke="#f4f1eb" stroke-width="3"/>
                      <circle cx="50" cy="45" r="8" fill="#1c1917"/>
                      <rect x="20" y="10" width="15" height="10" fill="#be123c" rx="2"/>
                      <circle cx="75" cy="30" r="4" fill="#d6d3d1"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Foreground dynamic helper badge when user is dragging -->
            <div class="absolute bottom-4 left-4 bg-charcoal text-paper-100 border-2 border-charcoal px-3 py-1 text-xs font-mono rotate-[-1deg] uppercase tracking-wider shadow-retro-sm">
              ▲ Design Mode: Interactive Canvas
            </div>
          </div>

          <!-- Bottom Action Buttons for Canvas Export -->
          <div class="w-full max-w-[550px] mt-4 flex justify-between gap-4">
            <button onclick="triggerRenderCelebration()" class="w-full py-3 bg-crimson hover:bg-crimson-800 text-white font-extrabold text-sm uppercase tracking-wider border-2 border-charcoal shadow-retro hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
              ⚡ Finalize & Download Collage
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- SUCCESS EXPORT MODAL (CONSTRUCTED AS SCRAPBOOK MODAL) -->
  <div id="export-modal" class="fixed inset-0 bg-charcoal/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden">
    <div class="bg-paper-100 border-4 border-charcoal max-w-md w-full p-6 shadow-retro-xl relative paper-fiber">
      <!-- Ripped top border -->
      <div class="absolute -top-3 left-0 right-0 h-4 bg-stone-300 torn-strip"></div>
      
      <!-- Close Button -->
      <button onclick="closeModal()" class="absolute top-4 right-4 bg-charcoal text-white hover:bg-crimson p-1.5 border border-charcoal">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>

      <div class="text-center space-y-4 pt-4">
        <div class="w-16 h-16 bg-green-100 text-green-800 border-2 border-charcoal rounded-full flex items-center justify-center mx-auto transform rotate-12">
          <i data-lucide="check-circle" class="w-10 h-10"></i>
        </div>
        
        <h3 class="font-sans font-extrabold text-2xl uppercase tracking-tight text-charcoal">COLLAGE FORGED!</h3>
        <p class="text-sm font-sans text-stone-700">
          Your stunning retro-surrealist creation has been rendered down to a high-resolution PNG. We've packaged the layout, textures, and ink variables beautifully!
        </p>

        <!-- Simulated output container -->
        <div class="border-2 border-charcoal bg-stone-200 p-2 text-xs font-mono uppercase tracking-widest text-stone-600 rounded">
          Filename: zineforge_artwork_9402.png
        </div>

        <div class="space-y-2 pt-4">
          <button onclick="closeModal()" class="w-full py-3 bg-crimson text-white font-extrabold text-sm uppercase tracking-wider border-2 border-charcoal shadow-retro hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
            Share to Socials
          </button>
          <button onclick="closeModal()" class="w-full py-2 bg-paper-200 text-charcoal font-bold text-xs uppercase border border-charcoal hover:bg-paper-300">
            Keep Editing
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- FEATURES: THE COLLAGE REVOLUTION TOOLS -->
  <section id="features" class="py-20 bg-paper-50 relative border-b-4 border-charcoal">
    <div class="absolute inset-0 halftone opacity-5 pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      
      <!-- Segment Title -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div class="space-y-2">
          <span class="text-crimson font-hand text-3xl font-bold block transform -rotate-2">Everything You Need To Stand Out</span>
          <h2 class="text-4xl md:text-5xl font-sans font-extrabold tracking-tight uppercase">THE CUT & PAINT ENGINE</h2>
        </div>
        <p class="text-stone-700 font-sans max-w-md mt-4 md:mt-0">
          ZineForge brings physical collage and distressed tactile textures straight to your web browser with absolute elegance.
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Feature 1 -->
        <div class="group bg-paper-100 border-3 border-charcoal p-6 relative shadow-retro hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
          <!-- Yellow Tape Accent -->
          <div class="absolute -top-3 left-1/4 w-20 h-5 bg-yellow-200/70 rotate-[2deg] shadow-sm"></div>
          
          <div class="w-12 h-12 bg-crimson text-paper-50 flex items-center justify-center border-2 border-charcoal mb-6 mt-2">
            <i data-lucide="scissors" class="w-6 h-6"></i>
          </div>
          
          <h3 class="font-sans font-extrabold text-xl uppercase mb-3">AI Background Eraser</h3>
          <p class="text-sm text-stone-700 font-sans leading-relaxed">
            Instantly erase backgrounds from any photograph to create perfect, high-contrast, stencil-like collage cutouts.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="group bg-paper-100 border-3 border-charcoal p-6 relative shadow-retro hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
          <!-- Tape Accent -->
          <div class="absolute -top-3 left-1/3 w-24 h-5 bg-stone-300/80 -rotate-[3deg] shadow-sm"></div>

          <div class="w-12 h-12 bg-stone-800 text-paper-50 flex items-center justify-center border-2 border-charcoal mb-6 mt-2">
            <i data-lucide="layers" class="w-6 h-6"></i>
          </div>

          <h3 class="font-sans font-extrabold text-xl uppercase mb-3">Tactile Grain & Ink</h3>
          <p class="text-sm text-stone-700 font-sans leading-relaxed">
            Apply halftone dot matrices, ink bleed filters, distressed newsprint overlays, and physical cardboard drop shadows with one slider.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="group bg-paper-100 border-3 border-charcoal p-6 relative shadow-retro hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
          <!-- Tape Accent -->
          <div class="absolute -top-3 right-1/4 w-16 h-5 bg-yellow-200/50 rotate-[4deg] shadow-sm"></div>

          <div class="w-12 h-12 bg-crimson text-paper-50 flex items-center justify-center border-2 border-charcoal mb-6 mt-2">
            <i data-lucide="file-text" class="w-6 h-6"></i>
          </div>

          <h3 class="font-sans font-extrabold text-xl uppercase mb-3">Typography Stencils</h3>
          <p class="text-sm text-stone-700 font-sans leading-relaxed">
            Choose from distressed letterpress fonts, raw marker scripts, cursive notes, and custom ripped label templates.
          </p>
        </div>

        <!-- Feature 4 -->
        <div class="group bg-paper-100 border-3 border-charcoal p-6 relative shadow-retro hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
          <!-- Tape Accent -->
          <div class="absolute -top-3 left-1/4 w-20 h-5 bg-stone-400/30 rotate-[-1deg] shadow-sm"></div>

          <div class="w-12 h-12 bg-stone-800 text-paper-50 flex items-center justify-center border-2 border-charcoal mb-6 mt-2">
            <i data-lucide="stamp" class="w-6 h-6"></i>
          </div>

          <h3 class="font-sans font-extrabold text-xl uppercase mb-3">Vintage Asset Vault</h3>
          <p class="text-sm text-stone-700 font-sans leading-relaxed">
            Access thousands of licensed public-domain statues, architectural layouts, vintage vehicles, retro cameras, and handwritten annotations.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- COLLAGE INSPIRATION SHOWCASE -->
  <section id="gallery" class="py-20 bg-paper-100 relative border-b-4 border-charcoal">
    <div class="absolute inset-0 paper-noise opacity-20 pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span class="text-crimson font-hand text-3xl font-bold block transform rotate-1">Behold The Creative Rebellion</span>
        <h2 class="text-4xl md:text-5xl font-sans font-extrabold tracking-tight uppercase">CREATOR TEMPLATE FEED</h2>
        <p class="text-stone-700 font-sans text-sm">
          Click on any template to clone its variables directly onto your interactive playground workspace.
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Grid Item 1: Dadaist Dream -->
        <div class="group border-3 border-charcoal bg-paper-50 p-4 shadow-retro hover:scale-[1.01] transition-all flex flex-col justify-between">
          <div class="aspect-[4/5] bg-paper-200 border-2 border-charcoal relative overflow-hidden flex items-center justify-center">
            <!-- Simulated collage item -->
            <div class="absolute w-40 h-40 rounded-full bg-crimson opacity-80 scale-110"></div>
            <div class="absolute font-serif italic text-4xl text-stone-900 tracking-tighter opacity-70">DADAIST</div>
            <!-- Sketchy Arrow SVG -->
            <svg class="absolute w-24 h-12 text-stone-900 transform rotate-12" viewBox="0 0 100 50">
              <path d="M10,25 L90,25" stroke="currentColor" stroke-width="2"/>
              <path d="M70,10 L90,25 L70,40" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
            <div class="absolute bottom-4 left-4 bg-yellow-100 border border-charcoal px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider rotate-[-2deg]">
              No. 402 / PARIS
            </div>
          </div>
          <div class="pt-4 flex justify-between items-center">
            <div>
              <span class="block font-sans font-extrabold text-lg uppercase tracking-tight">Dadaist Dream</span>
              <span class="font-hand text-crimson text-sm font-bold">Used by 4,209 Creators</span>
            </div>
            <button onclick="cloneTemplate('dadaist')" class="px-3 py-1 bg-charcoal text-paper-100 hover:bg-crimson text-xs font-bold uppercase tracking-wider transition-colors">
              Clone
            </button>
          </div>
        </div>

        <!-- Grid Item 2: Retro Stamp Tram -->
        <div class="group border-3 border-charcoal bg-paper-50 p-4 shadow-retro hover:scale-[1.01] transition-all flex flex-col justify-between">
          <div class="aspect-[4/5] bg-paper-200 border-2 border-charcoal relative overflow-hidden flex items-center justify-center">
            <!-- Simulated collage item -->
            <div class="absolute w-44 h-24 bg-crimson opacity-90 transform -rotate-12 flex flex-col justify-center items-center text-paper-100 px-3">
              <span class="font-serif text-3xl font-bold italic tracking-wider leading-none">TRAMWAY</span>
              <span class="text-[9px] font-mono tracking-widest mt-1">LINE 115</span>
            </div>
            <!-- Leaning structure -->
            <div class="absolute right-4 top-4 w-12 h-36 bg-stone-800 opacity-60 transform rotate-12"></div>
            <!-- Vintage stamp badge overlay -->
            <div class="absolute bottom-4 right-4 bg-paper-100 border-2 border-charcoal p-2 transform rotate-[15deg] flex flex-col items-center">
              <span class="text-[8px] font-mono font-bold leading-none">POSTES</span>
              <span class="font-hand text-xs text-crimson leading-none font-bold">12c</span>
            </div>
          </div>
          <div class="pt-4 flex justify-between items-center">
            <div>
              <span class="block font-sans font-extrabold text-lg uppercase tracking-tight">Retro Tramway</span>
              <span class="font-hand text-crimson text-sm font-bold">Used by 8,110 Creators</span>
            </div>
            <button onclick="cloneTemplate('tramway')" class="px-3 py-1 bg-charcoal text-paper-100 hover:bg-crimson text-xs font-bold uppercase tracking-wider transition-colors">
              Clone
            </button>
          </div>
        </div>

        <!-- Grid Item 3: Athenian Grid -->
        <div class="group border-3 border-charcoal bg-paper-50 p-4 shadow-retro hover:scale-[1.01] transition-all flex flex-col justify-between">
          <div class="aspect-[4/5] bg-paper-200 border-2 border-charcoal relative overflow-hidden flex items-center justify-center">
            <!-- Simulated Greek sculpture and modern text collage -->
            <div class="absolute w-36 h-48 bg-stone-900 text-stone-300 opacity-90 flex items-center justify-center p-4">
              <span class="font-serif italic font-normal text-6xl opacity-30">V</span>
            </div>
            <div class="absolute w-full h-full halftone opacity-10"></div>
            <div class="absolute top-10 left-10 text-crimson font-hand text-3xl font-bold rotate-[-15deg]">Athens!</div>
            <div class="absolute bottom-10 right-6 font-mono text-xs font-bold bg-charcoal text-paper-100 px-2 py-1 rotate-[4deg]">
              SURREAL APOCALYPSE
            </div>
          </div>
          <div class="pt-4 flex justify-between items-center">
            <div>
              <span class="block font-sans font-extrabold text-lg uppercase tracking-tight">Athenian Revolt</span>
              <span class="font-hand text-crimson text-sm font-bold">Used by 2,940 Creators</span>
            </div>
            <button onclick="cloneTemplate('athenian')" class="px-3 py-1 bg-charcoal text-paper-100 hover:bg-crimson text-xs font-bold uppercase tracking-wider transition-colors">
              Clone
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- CREATOR PASS PRICING (POSTAGE STAMP PRICING) -->
  <section id="pricing" class="py-20 bg-paper-50 relative border-b-4 border-charcoal">
    <div class="absolute inset-0 paper-noise opacity-30 pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span class="text-crimson font-hand text-3xl font-bold block transform -rotate-1">Unlock Endless Artistic Assets</span>
        <h2 class="text-4xl md:text-5xl font-sans font-extrabold tracking-tight uppercase">CREATOR PASS TIERS</h2>
        <p class="text-stone-700 font-sans">
          Simple pricing models tailored for professional zine-publishers, visual content creators, and hobbyists alike.
        </p>
      </div>

      <!-- Pricing Cards Wrapper -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        <!-- Plan 1: Free Cutout -->
        <div class="bg-paper-100 border-4 border-charcoal p-8 relative shadow-retro flex flex-col justify-between">
          <!-- Tape overlay top center -->
          <div class="absolute -top-3 left-1/3 w-28 h-5 bg-stone-300/60 rotate-2"></div>
          
          <div class="space-y-6">
            <div class="flex justify-between items-start">
              <div>
                <span class="text-xs font-mono font-bold uppercase text-stone-500">Tier One</span>
                <h3 class="font-sans font-extrabold text-2xl uppercase">Free Cutout</h3>
              </div>
              <span class="font-serif italic font-normal text-3xl text-charcoal">$0</span>
            </div>
            
            <p class="text-sm font-sans text-stone-700 leading-relaxed">
              Unlock the foundational interactive builder canvas, essential monuments, and basic newspaper textures with zero strings attached.
            </p>

            <ul class="space-y-3 text-sm text-charcoal font-sans pt-4 border-t border-dashed border-charcoal">
              <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-crimson mr-2"></i> Standard interactive canvas access</li>
              <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-crimson mr-2"></i> 25 high-definition cutouts</li>
              <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-crimson mr-2"></i> PNG download format</li>
              <li class="flex items-center text-stone-400 line-through"><i data-lucide="x" class="w-4 h-4 mr-2"></i> Commercial license grant</li>
            </ul>
          </div>

          <div class="pt-8">
            <a href="#playground" class="block w-full text-center py-3 bg-paper-200 border-2 border-charcoal font-bold text-sm uppercase tracking-wider shadow-retro-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
              Launch Free Mode
            </a>
          </div>
        </div>

        <!-- Plan 2: Collage Monarch (Most Popular) -->
        <div class="bg-yellow-50 border-4 border-crimson p-8 relative shadow-retro flex flex-col justify-between">
          <!-- Stamp style overlay top-right corner -->
          <div class="absolute -top-3 right-6 bg-crimson text-paper-50 font-sketch text-[10px] font-bold px-3 py-1 rotate-[-3deg] uppercase shadow-sm border border-charcoal">
            ⭐ Recommended
          </div>
          
          <div class="space-y-6">
            <div class="flex justify-between items-start">
              <div>
                <span class="text-xs font-mono font-bold uppercase text-crimson">Tier Two</span>
                <h3 class="font-sans font-extrabold text-2xl uppercase text-crimson">Collage Monarch</h3>
              </div>
              <div class="text-right">
                <span class="font-serif italic font-normal text-3xl text-charcoal">$19</span>
                <span class="block text-[10px] font-mono uppercase text-stone-500">One-time payment</span>
              </div>
            </div>
            
            <p class="text-sm font-sans text-stone-700 leading-relaxed">
              Gain full, lifetime access to our premium texture library, custom SVG stamp creators, advanced grain controls, and high-res layout models.
            </p>

            <ul class="space-y-3 text-sm text-charcoal font-sans pt-4 border-t border-dashed border-crimson">
              <li class="flex items-center font-bold text-crimson"><i data-lucide="check" class="w-4 h-4 text-crimson mr-2"></i> Unlimited Interactive Canvas Workspace</li>
              <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-crimson mr-2"></i> 1,500+ premium surrealist cutouts</li>
              <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-crimson mr-2"></i> Vector SVG & PNG downloads</li>
              <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-crimson mr-2"></i> Lifetime asset updates</li>
              <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-crimson mr-2"></i> Full commercial license rights</li>
            </ul>
          </div>

          <div class="pt-8">
            <button onclick="triggerRenderCelebration()" class="w-full text-center py-3 bg-crimson text-white font-extrabold text-sm uppercase tracking-wider border-2 border-charcoal shadow-retro hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
              ⚡ Get Lifetime pass
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- COLLAGE STYLE FOOTER -->
  <footer class="bg-charcoal text-paper-200 border-t-4 border-charcoal relative py-16 overflow-hidden">
    <!-- Crumpled newspaper footer backdrop overlay -->
    <div class="absolute inset-0 halftone opacity-5 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 relative">
      
      <!-- Brand column -->
      <div class="lg:col-span-4 space-y-6">
        <a href="#" class="flex items-center space-x-2 text-paper-100">
          <div class="bg-crimson p-2 border-2 border-stone-800 shadow-retro-sm">
            <span class="font-serif font-bold text-xl text-paper-100 italic">Z</span>
          </div>
          <span class="font-sans font-extrabold text-xl tracking-tight uppercase">ZineForge</span>
        </a>
        <p class="text-sm text-paper-300 font-sans leading-relaxed">
          ZineForge is a collaborative experimental digital playground where design restrictions vanish. We empower individuals to break standard boundaries and build stunning tactile social assets.
        </p>
        <div class="flex space-x-4">
          <a href="#" class="p-2 border border-paper-300 hover:bg-crimson hover:text-white transition-colors"><i data-lucide="instagram" class="w-5 h-5"></i></a>
          <a href="#" class="p-2 border border-paper-300 hover:bg-crimson hover:text-white transition-colors"><i data-lucide="twitter" class="w-5 h-5"></i></a>
          <a href="#" class="p-2 border border-paper-300 hover:bg-crimson hover:text-white transition-colors"><i data-lucide="chrome" class="w-5 h-5"></i></a>
        </div>
      </div>

      <!-- Quick Nav -->
      <div class="lg:col-span-4 grid grid-cols-2 gap-8">
        <div class="space-y-4">
          <span class="block font-sans font-bold text-sm uppercase text-paper-50 border-b border-paper-300 pb-2">Navigation</span>
          <ul class="space-y-2 text-xs text-paper-300">
            <li><a href="#playground" class="hover:underline hover:text-crimson">Collage Maker</a></li>
            <li><a href="#features" class="hover:underline hover:text-crimson">Visual Tools</a></li>
            <li><a href="#gallery" class="hover:underline hover:text-crimson">Inspiration</a></li>
            <li><a href="#pricing" class="hover:underline hover:text-crimson">Creator Pass</a></li>
          </ul>
        </div>
        <div class="space-y-4">
          <span class="block font-sans font-bold text-sm uppercase text-paper-50 border-b border-paper-300 pb-2">Legal Artifacts</span>
          <ul class="space-y-2 text-xs text-paper-300">
            <li><a href="#" class="hover:underline hover:text-crimson">Terms of Collage</a></li>
            <li><a href="#" class="hover:underline hover:text-crimson">Fair Use & Assets</a></li>
            <li><a href="#" class="hover:underline hover:text-crimson">Creator Manifesto</a></li>
            <li><a href="#" class="hover:underline hover:text-crimson">Contact Dispatch</a></li>
          </ul>
        </div>
      </div>

      <!-- Newsletter structured as an envelope stamp -->
      <div class="lg:col-span-4 bg-stone-800 border-2 border-paper-300 p-6 relative">
        <span class="block font-sans font-bold text-sm uppercase text-paper-50 mb-3">Newsletter Dispatch</span>
        <p class="text-xs text-paper-300 leading-relaxed mb-4">
          Sign up to receive free high-definition raw cutouts weekly directly in your mailbox!
        </p>
        <div class="space-y-2">
          <input type="email" placeholder="agent@dadaist.com" class="w-full px-3 py-2 text-xs border border-paper-300 bg-charcoal text-paper-100 placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-crimson">
          <button class="w-full py-2 bg-crimson hover:bg-crimson-800 text-white text-xs font-bold uppercase tracking-wider transition-all">
            Join the Rebellion
          </button>
        </div>
        <!-- Absolute vintage stamp in corner of newsletter -->
        <div class="absolute -top-3 -right-3 bg-paper-100 border border-charcoal text-charcoal px-2 py-0.5 text-[8px] font-mono rotate-12">
          AIR MAIL
        </div>
      </div>

    </div>

    <!-- Legal disclaimer and bottom torn detail -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between text-xs text-stone-400 font-mono">
      <span>© 2026 ZINEFORGE CORP. LICENSED SURREALISM DISPATCH.</span>
      <span class="mt-2 md:mt-0">MADE WITH CUTS, INK, & REBELLION.</span>
    </div>
  </footer>

  <!-- DYNAMIC LOGIC FOR INTERACTIVE CANVAS -->
  <script>
    // Initialize Lucide icons
    lucide.createIcons();

    // Collage State Management
    let activeElement = null;
    let selectedElementsList = [];
    let canvasWorkspace = document.getElementById('canvas-workspace');
    let transformerControls = document.getElementById('transformer-controls');
    
    // UI control sliders
    let controlRotate = document.getElementById('control-rotate');
    let controlScale = document.getElementById('control-scale');
    let valRotate = document.getElementById('val-rotate');
    let valScale = document.getElementById('val-scale');

    // Drag-and-drop state
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    // Default assets database
    const assetLibrary = {
      sun: {
        html: `<div class="w-48 h-48 bg-gradient-to-tr from-crimson to-crimson-700 rounded-full border border-charcoal opacity-90 shadow-md flex items-center justify-center">
                  <div class="w-32 h-32 rounded-full border border-dashed border-paper-100 opacity-20"></div>
               </div>`,
        name: 'Red Sun'
      },
      tower: {
        html: `<svg viewBox="0 0 100 200" class="w-32 h-56 text-stone-800 drop-shadow-lg">
                  <rect x="25" y="10" width="50" height="170" fill="#292524" rx="2"/>
                  <line x1="25" y1="30" x2="75" y2="30" stroke="#f4f1eb" stroke-width="3"/>
                  <line x1="25" y1="65" x2="75" y2="65" stroke="#f4f1eb" stroke-width="3"/>
                  <line x1="25" y1="100" x2="75" y2="100" stroke="#f4f1eb" stroke-width="3"/>
                  <line x1="25" y1="135" x2="75" y2="135" stroke="#f4f1eb" stroke-width="3"/>
               </svg>`,
        name: 'Tower'
      },
      man: {
        html: `<div class="w-32 h-56 relative">
                  <svg viewBox="0 0 100 200" class="w-full h-full">
                    <path d="M 25,60 L 75,60 L 85,120 L 70,120 L 75,180 L 60,180 L 55,130 L 45,130 L 40,180 L 25,180 L 30,120 L 15,120 Z" fill="#292524" stroke="#1c1917" stroke-width="2"/>
                    <polygon points="40,60 60,60 50,75" fill="#f5f5f4"/>
                    <polygon points="45,63 55,63 50,67" fill="#0c0a09"/>
                    <polygon points="45,67 55,67 50,63" fill="#0c0a09"/>
                    <g transform="translate(20, 15) scale(0.6)">
                      <rect x="10" y="20" width="80" height="50" fill="#1c1917" rx="5" stroke="#f4f1eb" stroke-width="2"/>
                      <circle cx="50" cy="45" r="18" fill="#44403c" stroke="#f4f1eb" stroke-width="3"/>
                      <circle cx="50" cy="45" r="8" fill="#1c1917"/>
                      <rect x="20" y="10" width="15" height="10" fill="#be123c" rx="2"/>
                      <circle cx="75" cy="30" r="4" fill="#d6d3d1"/>
                    </g>
                  </svg>
               </div>`,
        name: 'Gentleman'
      },
      colosseum: {
        html: `<svg viewBox="0 0 120 80" class="w-44 h-32 text-stone-700 drop-shadow-md">
                <path d="M10,70 L110,70 L110,30 L10,40 Z" fill="#44403c" stroke="#1c1917" stroke-width="2"/>
                <line x1="10" y1="50" x2="110" y2="50" stroke="#f4f1eb" stroke-width="2"/>
                <circle cx="25" cy="45" r="4" fill="#f4f1eb"/>
                <circle cx="45" cy="45" r="4" fill="#f4f1eb"/>
                <circle cx="65" cy="45" r="4" fill="#f4f1eb"/>
                <circle cx="85" cy="45" r="4" fill="#f4f1eb"/>
              </svg>`,
        name: 'Colosseum'
      },
      tram: {
        html: `<svg viewBox="0 0 200 120" class="w-52 h-32 drop-shadow-xl">
                <rect x="10" y="30" width="180" height="70" fill="#a82020" rx="6" stroke="#1c1917" stroke-width="3"/>
                <rect x="15" y="40" width="170" height="25" fill="#1c1917" rx="3"/>
                <rect x="20" y="43" width="20" height="18" fill="#eadecf"/>
                <rect x="45" y="43" width="20" height="18" fill="#eadecf"/>
                <rect x="70" y="43" width="20" height="18" fill="#eadecf"/>
                <rect x="95" y="43" width="20" height="18" fill="#eadecf"/>
                <rect x="120" y="43" width="20" height="18" fill="#eadecf"/>
                <rect x="145" y="43" width="20" height="18" fill="#eadecf"/>
                <rect x="85" y="15" width="30" height="15" fill="#f4f1eb" stroke="#1c1917" stroke-width="2"/>
                <text x="100" y="27" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#1c1917">115</text>
                <circle cx="50" cy="103" r="10" fill="#1c1917"/>
                <circle cx="150" cy="103" r="10" fill="#1c1917"/>
                <line x1="0" y1="110" x2="200" y2="100" stroke="#1c1917" stroke-width="4"/>
              </svg>`,
        name: 'Tram 115'
      },
      birds: {
        html: `<svg class="w-24 h-16 text-charcoal-dark" viewBox="0 0 100 50">
              <path d="M10,20 Q20,10 30,20 Q40,10 50,20" stroke="currentColor" stroke-width="2.5" fill="none"/>
              <path d="M40,35 Q48,28 56,35 Q64,28 72,35" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>`,
        name: 'Birds'
      },
      circle: {
        html: `<svg viewBox="0 0 100 100" class="w-28 h-28 text-crimson">
                <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="10 15"/>
              </svg>`,
        name: 'Ink Circle'
      },
      statue: {
        html: `<svg viewBox="0 0 100 150" class="w-32 h-48 text-stone-500 drop-shadow-md">
                <path d="M 50 10 Q 70 20 65 50 T 55 110 T 45 140 L 35 140 L 40 80 Q 25 70 30 50 Z" fill="currentColor" stroke="#1c1917" stroke-width="2"/>
                <circle cx="55" cy="40" r="3" fill="#fff"/>
              </svg>`,
        name: 'Greek Statue'
      },
      arrow: {
        html: `<svg viewBox="0 0 100 50" class="w-28 h-12 text-crimson">
                <path d="M10,25 C40,10 60,40 90,25" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"/>
                <path d="M70,10 L90,25 L75,40" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"/>
              </svg>`,
        name: 'Scribble Arrow'
      }
    };

    // Filter cutouts in Left Catalog
    function filterAssetBin(category) {
      let catalogBin = document.getElementById('catalog-bin');
      let items = catalogBin.children;
      for (let item of items) {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      }
    }

    // Spawn an element onto the workspace
    function spawnAsset(assetType) {
      if (!assetLibrary[assetType]) return;

      const randomId = 'asset-' + Date.now();
      const div = document.createElement('div');
      div.id = randomId;
      div.className = 'collage-item absolute cursor-grab active:cursor-grabbing text-center';
      
      // Starting coordinates centered with variance
      const randomOffset = () => Math.floor(Math.random() * 60) - 30;
      const x = 150 + randomOffset();
      const y = 200 + randomOffset();
      
      div.style.left = '0px';
      div.style.top = '0px';
      div.style.transform = `translate(${x}px, ${y}px) rotate(0deg) scale(1.0)`;
      div.style.zIndex = 25;
      
      div.innerHTML = assetLibrary[assetType].html;
      
      // Bind click event
      div.onclick = function(e) {
        selectElement(div, e);
      };
      
      canvasWorkspace.appendChild(div);
      selectElement(div);
    }

    // Spawn custom text input
    function spawnCustomText() {
      const textInput = document.getElementById('custom-text-input');
      const text = textInput.value.trim();
      if (!text) return;

      const randomId = 'text-' + Date.now();
      const div = document.createElement('div');
      div.id = randomId;
      div.className = 'collage-item absolute cursor-grab active:cursor-grabbing text-center font-hand text-3xl font-extrabold text-crimson drop-shadow-sm select-none';
      
      const x = 120;
      const y = 180;
      div.style.left = '0px';
      div.style.top = '0px';
      div.style.transform = `translate(${x}px, ${y}px) rotate(-4deg) scale(1.1)`;
      div.style.zIndex = 35;
      div.innerText = text;

      div.onclick = function(e) {
        selectElement(div, e);
      };

      canvasWorkspace.appendChild(div);
      selectElement(div);
      textInput.value = ''; // clear input
    }

    // Clone templates to workspace helper
    function cloneTemplate(templateName) {
      clearCanvas();
      if (templateName === 'dadaist') {
        spawnAsset('sun');
        spawnAsset('birds');
        spawnAsset('statue');
        // Set specific transforms for styling consistency
        setTimeout(() => {
          let items = canvasWorkspace.children;
          if(items[0]) items[0].style.transform = "translate(50px, 40px) rotate(-10deg) scale(1.1)";
          if(items[1]) items[1].style.transform = "translate(180px, 80px) rotate(15deg) scale(1.0)";
          if(items[2]) items[2].style.transform = "translate(120px, 150px) rotate(-5deg) scale(1.2)";
        }, 50);
      } else if (templateName === 'tramway') {
        spawnAsset('tram');
        spawnAsset('tower');
        spawnAsset('circle');
        setTimeout(() => {
          let items = canvasWorkspace.children;
          if(items[0]) items[0].style.transform = "translate(80px, 220px) rotate(-2deg) scale(1.1)";
          if(items[1]) items[1].style.transform = "translate(30px, 20px) rotate(-15deg) scale(0.9)";
          if(items[2]) items[2].style.transform = "translate(220px, 60px) rotate(45deg) scale(1.0)";
        }, 50);
      } else if (templateName === 'athenian') {
        spawnAsset('statue');
        spawnAsset('arrow');
        spawnAsset('sun');
        setTimeout(() => {
          let items = canvasWorkspace.children;
          if(items[0]) items[0].style.transform = "translate(100px, 110px) rotate(0deg) scale(1.3)";
          if(items[1]) items[1].style.transform = "translate(180px, 320px) rotate(10deg) scale(1.1)";
          if(items[2]) items[2].style.transform = "translate(140px, 50px) rotate(-25deg) scale(0.8)";
        }, 50);
      }
      
      // Scroll to playground
      document.getElementById('playground').scrollIntoView({ behavior: 'smooth' });
    }

    // Select Collage Item
    function selectElement(el, event) {
      if (event) event.stopPropagation();
      
      // Remove visual active class from all items
      let items = canvasWorkspace.getElementsByClassName('collage-item');
      for (let item of items) {
        item.classList.remove('border-2', 'border-dashed', 'border-crimson', 'p-1', 'bg-paper-100/10');
      }

      activeElement = el;
      activeElement.classList.add('border-2', 'border-dashed', 'border-crimson', 'p-1', 'bg-paper-100/10');

      // Enable and populate controls panel
      transformerControls.classList.remove('opacity-60', 'pointer-events-none');
      
      // Parse current transforms
      const transform = activeElement.style.transform;
      let r = 0, s = 1.0;
      
      const rotateMatch = transform.match(/rotate\(([^)]+)deg\)/);
      if (rotateMatch) r = parseInt(rotateMatch[1]);
      
      const scaleMatch = transform.match(/scale\(([^)]+)\)/);
      if (scaleMatch) s = parseFloat(scaleMatch[1]);

      controlRotate.value = r;
      controlScale.value = s;
      
      valRotate.innerText = r + '°';
      valScale.innerText = s.toFixed(1) + 'x';
    }

    // Deselect active element
    function deselectActiveItem() {
      if (activeElement) {
        activeElement.classList.remove('border-2', 'border-dashed', 'border-crimson', 'p-1', 'bg-paper-100/10');
        activeElement = null;
      }
      transformerControls.classList.add('opacity-60', 'pointer-events-none');
    }

    // Click canvas container to deselect active items
    document.getElementById('canvas-container').onclick = function(e) {
      if (e.target.id === 'canvas-container' || e.target.id === 'canvas-workspace') {
        deselectActiveItem();
      }
    };

    // Update selected element transformation values from controls
    function updateActiveElementTransform() {
      if (!activeElement) return;
      
      const rot = controlRotate.value;
      const scl = controlScale.value;
      
      valRotate.innerText = rot + '°';
      valScale.innerText = parseFloat(scl).toFixed(1) + 'x';

      // Keep original translation coordinate values
      const currentTransform = activeElement.style.transform;
      const translateMatch = currentTransform.match(/translate\(([^,]+)px,\s*([^)]+)px\)/);
      
      let tx = 0, ty = 0;
      if (translateMatch) {
        tx = parseInt(translateMatch[1]);
        ty = parseInt(translateMatch[2]);
      }

      activeElement.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(${scl})`;
    }

    // Delete active cutout
    function deleteActiveElement() {
      if (!activeElement) return;
      activeElement.remove();
      deselectActiveItem();
    }

    // Clear Canvas Completely
    function clearCanvas() {
      canvasWorkspace.innerHTML = '';
      deselectActiveItem();
    }

    // Reset Canvas to Inspiration Setup
    function resetCanvasToDefault() {
      clearCanvas();
      
      // Re-create the 4 awesome visual building blocks matching standard design structure
      const defaultSun = document.createElement('div');
      defaultSun.className = 'collage-item absolute cursor-grab active:cursor-grabbing text-center';
      defaultSun.style.left = '0px';
      defaultSun.style.top = '0px';
      defaultSun.style.transform = 'translate(100px, 40px) rotate(-15deg) scale(1.1)';
      defaultSun.style.zIndex = 10;
      defaultSun.innerHTML = assetLibrary.sun.html;
      defaultSun.onclick = function(e) { selectElement(defaultSun, e); };
      
      const defaultTower = document.createElement('div');
      defaultTower.className = 'collage-item absolute cursor-grab active:cursor-grabbing text-center';
      defaultTower.style.left = '0px';
      defaultTower.style.top = '0px';
      defaultTower.style.transform = 'translate(15px, 150px) rotate(-8deg) scale(0.9)';
      defaultTower.style.zIndex = 15;
      defaultTower.innerHTML = assetLibrary.tower.html;
      defaultTower.onclick = function(e) { selectElement(defaultTower, e); };

      const defaultArrow = document.createElement('div');
      defaultArrow.className = 'collage-item absolute cursor-grab active:cursor-grabbing text-center';
      defaultArrow.style.left = '0px';
      defaultArrow.style.top = '0px';
      defaultArrow.style.transform = 'translate(220px, 320px) rotate(10deg) scale(1.2)';
      defaultArrow.style.zIndex = 30;
      defaultArrow.innerHTML = `<div class="flex flex-col items-center">
                                  <svg viewBox="0 0 100 50" class="w-24 h-12 text-crimson">
                                    <path d="M10,25 L90,25 M70,10 L90,25 L70,40" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                  </svg>
                                  <span class="font-hand text-xl font-bold text-crimson -mt-2">Drag anything!</span>
                                </div>`;
      defaultArrow.onclick = function(e) { selectElement(defaultArrow, e); };

      const defaultMan = document.createElement('div');
      defaultMan.className = 'collage-item absolute cursor-grab active:cursor-grabbing text-center';
      defaultMan.style.left = '0px';
      defaultMan.style.top = '0px';
      defaultMan.style.transform = 'translate(240px, 100px) rotate(4deg) scale(1.1)';
      defaultMan.style.zIndex = 20;
      defaultMan.innerHTML = assetLibrary.man.html;
      defaultMan.onclick = function(e) { selectElement(defaultMan, e); };

      canvasWorkspace.appendChild(defaultSun);
      canvasWorkspace.appendChild(defaultTower);
      canvasWorkspace.appendChild(defaultArrow);
      canvasWorkspace.appendChild(defaultMan);
      
      deselectActiveItem();
    }

    // Adjust Z-Index Layer order
    function adjustZIndex(val) {
      if (!activeElement) return;
      let currentZ = parseInt(activeElement.style.zIndex) || 10;
      let newZ = Math.max(1, currentZ + (val * 5));
      activeElement.style.zIndex = newZ;
    }

    // Dragging Logic integration
    const container = document.getElementById('canvas-container');

    container.addEventListener('touchstart', dragStart, { passive: false });
    container.addEventListener('touchend', dragEnd, { passive: false });
    container.addEventListener('touchmove', drag, { passive: false });

    container.addEventListener('mousedown', dragStart);
    container.addEventListener('mouseup', dragEnd);
    container.addEventListener('mousemove', drag);

    function dragStart(e) {
      const targetItem = e.target.closest('.collage-item');
      if (!targetItem) return;

      activeElement = targetItem;
      selectElement(activeElement);

      // Parse existing translate values
      const transform = activeElement.style.transform;
      const translateMatch = transform.match(/translate\(([^,]+)px,\s*([^)]+)px\)/);
      
      if (translateMatch) {
        xOffset = parseInt(translateMatch[1]);
        yOffset = parseInt(translateMatch[2]);
      } else {
        xOffset = 0;
        yOffset = 0;
      }

      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      isDragging = true;
    }

    function dragEnd() {
      initialX = currentX;
      initialY = currentY;
      isDragging = false;
    }

    function drag(e) {
      if (!isDragging || !activeElement) return;
      
      e.preventDefault();

      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      // Constrain inside container with padding
      const rect = container.getBoundingClientRect();
      const currentTransform = activeElement.style.transform;
      
      // Parse rotation and scale parameters so we don't clear them
      let rot = 0, scl = 1.0;
      const rotateMatch = currentTransform.match(/rotate\(([^)]+)deg\)/);
      if (rotateMatch) rot = parseInt(rotateMatch[1]);
      const scaleMatch = currentTransform.match(/scale\(([^)]+)\)/);
      if (scaleMatch) scl = parseFloat(scaleMatch[1]);

      // Apply the translation
      activeElement.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rot}deg) scale(${scl})`;
    }

    // Trigger Render Modal
    function triggerRenderCelebration() {
      document.getElementById('export-modal').classList.remove('hidden');
    }

    function closeModal() {
      document.getElementById('export-modal').classList.add('hidden');
    }
  </script>
</body>
</html>
9
import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  Map, 
  BookOpen, 
  Music, 
  PenTool, 
  Feather, 
  Layers, 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  Share2, 
  Download, 
  RefreshCw, 
  ChevronRight, 
  ChevronLeft,
  X,
  Play,
  Pause,
  Sliders,
  Check
} from 'lucide-react';

export default function App() {
  // Theme state: Classical Rice Paper (Light) vs Deep Night Ink (Dark)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentChapter, setCurrentChapter] = useState('genesis');
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const [activeScholar, setActiveScholar] = useState(null);
  const [sealText, setSealText] = useState('老人');
  const [sealStyle, setSealStyle] = useState('zhuwen'); // zhuwen (red characters) or baiwen (white characters)
  const [sealBorder, setSealBorder] = useState('distressed');
  
  // Garden Designer state
  const [placedElements, setPlacedElements] = useState([
    { id: 1, type: 'moongate', x: 50, y: 50, scale: 1, rotation: 0 },
    { id: 2, type: 'rock', x: 25, y: 65, scale: 0.9, rotation: 10 },
    { id: 3, type: 'bamboo', x: 75, y: 45, scale: 1.1, rotation: -5 }
  ]);
  const [selectedDesignerElement, setSelectedDesignerElement] = useState('rock');
  const [gardenMist, setGardenMist] = useState(40);
  const [gardenTime, setGardenTime] = useState('sunset'); // dawn, midday, sunset, moonlight
  const [activeElementId, setActiveElementId] = useState(null);

  // Poetry state
  const [poetryMood, setPoetryMood] = useState('bamboo'); // bamboo, autumn, snow
  const [poetryProgress, setPoetryProgress] = useState(100);

  // Ref for ink canvas
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Poetry Database
  const poetryDb = {
    bamboo: {
      title: "竹林听雨 • Hearing Rain in the Bamboo",
      author: "王维 (Wang Wei)",
      chinese: ["独坐幽篁里", "弹琴复长啸", "深林人不知", "明月来相照"],
      english: [
        "Sitting alone in the secluded bamboo grove,",
        "I play the zither and whistle long and loud.",
        "Deep in the forest, where no one else knows,",
        "The bright moon comes to shine upon me."
      ],
      sound: "Soft Wind & Bamboo Sway"
    },
    autumn: {
      title: "秋水临风 • Autumn Water and Wind",
      author: "李白 (Li Bai)",
      chinese: ["秋风吹不尽", "总是玉关情", "何日平胡虏", "良人罢远征"],
      english: [
        "The autumn wind blows endlessly,",
        "Always stirring thoughts of the Jade Pass.",
        "When will the borders find eternal peace,",
        "So my beloved may cease his far campaign?"
      ],
      sound: "Flowing River & Guqin Waves"
    },
    snow: {
      title: "雪堂烹茗 • Brewing Tea in the Snowy Hall",
      author: "苏轼 (Su Shi)",
      chinese: ["溪柴火软蛮毡暖", "我亦潮头拨棹人", "正是山深雪密处", "石泉火暖试新茶"],
      english: [
        "The hearth-fire burns softly, the wool rug is warm,",
        "I too have steered oars against the swelling tide.",
        "Here in the mountain depths, amidst dense falling snow,",
        "Beside the warm stone spring, I test the newly harvested tea."
      ],
      sound: "Crackling Hearth & Snow Melts"
    }
  };

  // Scholars Database (Scroll at the bottom)
  const scholars = [
    {
      id: 'su_shi',
      name: '苏东坡',
      title: 'The Poet Sage',
      dynasty: '宋代 (Song Dynasty)',
      quote: '“此心安处是吾乡。”',
      subQuote: 'Wherever this troubled heart finds peace is my true home.',
      desc: 'Renowned calligrapher, gourmet, and statesman who found beauty in exile and simplicity. He embodies the high-gentry spirit of unyielding optimism and refined leisure.',
      color: '#e5ded4',
      badge: '士'
    },
    {
      id: 'wang_xizhi',
      name: '王羲之',
      title: 'The Calligraphy God',
      dynasty: '晋代 (Jin Dynasty)',
      quote: '“仰观宇宙之大，俯察品类之盛。”',
      subQuote: 'Looking up, I contemplate the vastness of the cosmos; looking down, I observe the abundance of all creation.',
      desc: 'Master of the Preface to the Poems Composed at the Orchid Pavilion. His fluid strokes redefined Chinese aesthetics, capturing the flow of natural energy (Qi).',
      color: '#d4ceb8',
      badge: '墨'
    },
    {
      id: 'lin_bu',
      name: '林和靖',
      title: 'The Hermit of Plum Blossoms',
      dynasty: '宋代 (Song Dynasty)',
      quote: '“疏影横斜水清浅，暗香浮动月黄昏。”',
      subQuote: 'Sparse shadows cast transversely on water clear and shallow, floating fragrance wafts in the dim light of the moonlit dusk.',
      desc: 'A legendary scholar who lived in absolute seclusion on Solitary Hill. He famously considered the plum trees his wives and wild cranes his children.',
      color: '#c9bfab',
      badge: '隐'
    },
    {
      id: 'lu_yu',
      name: '陆羽',
      title: 'The Tea Saint',
      dynasty: '唐代 (Tang Dynasty)',
      quote: '“茶之用，味至寒，为饮最宜。”',
      subQuote: 'The utility of tea: its essence is exceptionally cool; it is most fitting as a beverage for cultivation.',
      desc: 'Author of the Classic of Tea (茶经). He elevated the simple act of boiling tea leaves into a profound spiritual ritual and a foundational pillar of scholar aesthetics.',
      color: '#dfd6c4',
      badge: '茗'
    }
  ];

  // Canvas Ink Effect & Gold Leaf Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let inkSpots = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize decorative gold floating particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.5 - 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02
      });
    }

    // Add a new ink bleed spot
    const addInkSpot = (x, y, sizeMultiplier = 1) => {
      inkSpots.push({
        x,
        y,
        radius: 0.1,
        targetRadius: (Math.random() * 80 + 40) * sizeMultiplier,
        opacity: 0.15,
        growSpeed: Math.random() * 0.5 + 0.2,
        distortion: Array.from({ length: 8 }, () => Math.random() * 0.3 + 0.85)
      });
      if (inkSpots.length > 8) {
        inkSpots.shift();
      }
    };

    // Spawn automatic slow background ink spots
    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        addInkSpot(Math.random() * canvas.width, Math.random() * canvas.height, 1.5);
      }
    }, 4000);

    // Dynamic mouse trigger
    const handleMouseMove = (e) => {
      if (Math.random() > 0.96) {
        addInkSpot(e.clientX, e.clientY, 0.4);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Ink Spots (Xuan paper bleeding effect)
      inkSpots.forEach((spot) => {
        if (spot.radius < spot.targetRadius) {
          spot.radius += spot.growSpeed;
        } else {
          spot.opacity -= 0.0003;
        }

        if (spot.opacity > 0) {
          ctx.save();
          ctx.beginPath();
          // Create organic fluid watercolor edge using bezier curves and distortion
          const points = 12;
          for (let i = 0; i < points; i++) {
            const angle = (i / points) * Math.PI * 2;
            const distIndex = i % spot.distortion.length;
            const r = spot.radius * spot.distortion[distIndex];
            const px = spot.x + Math.cos(angle) * r;
            const py = spot.y + Math.sin(angle) * r;
            if (i === 0) {
              ctx.moveTo(px, py);
            } else {
              ctx.lineTo(px, py);
            }
          }
          ctx.closePath();

          // Smooth ink gradient
          const grad = ctx.createRadialGradient(spot.x, spot.y, 0, spot.x, spot.y, spot.radius);
          const inkColor = isDarkMode ? '30, 31, 28' : '180, 170, 155';
          grad.addColorStop(0, `rgba(${inkColor}, ${spot.opacity})`);
          grad.addColorStop(0.5, `rgba(${inkColor}, ${spot.opacity * 0.4})`);
          grad.addColorStop(1, `rgba(${inkColor}, 0)`);
          
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.restore();
        }
      });

      // Filter out faded spots
      inkSpots = inkSpots.filter(s => s.opacity > 0);

      // 2. Draw Floating Gold Foil particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.angle += p.spin;

        // Reset if goes off top
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10 || p.x > canvas.width + 10) {
          p.speedX = -p.speedX;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.beginPath();
        
        // Leaf shape
        ctx.moveTo(0, -p.size);
        ctx.quadraticCurveTo(p.size * 0.8, -p.size * 0.2, p.size * 0.4, p.size);
        ctx.quadraticCurveTo(-p.size * 0.8, p.size * 0.2, 0, -p.size);
        ctx.closePath();

        // Muted bronze/gold leaf colors
        ctx.fillStyle = isDarkMode 
          ? `rgba(191, 161, 122, ${p.opacity * 0.8})` 
          : `rgba(148, 120, 85, ${p.opacity * 0.6})`;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  // Handle typing effect trigger when poetry mood changes
  useEffect(() => {
    setPoetryProgress(0);
    const timer = setInterval(() => {
      setPoetryProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 40);
    return () => clearInterval(timer);
  }, [poetryMood]);

  // Sound generator simulation (guqin zither ambient sound node)
  const toggleAmbientSound = () => {
    setIsAmbientPlaying(!isAmbientPlaying);
  };

  // Garden designer controls
  const addGardenElement = (type) => {
    const newEl = {
      id: Date.now(),
      type,
      x: 35 + Math.random() * 30,
      y: 40 + Math.random() * 30,
      scale: 0.8 + Math.random() * 0.4,
      rotation: Math.floor(Math.random() * 20 - 10)
    };
    setPlacedElements([...placedElements, newEl]);
    setActiveElementId(newEl.id);
  };

  const removeGardenElement = (id) => {
    setPlacedElements(placedElements.filter(el => el.id !== id));
    if (activeElementId === id) setActiveElementId(null);
  };

  const updateElementTransform = (id, property, value) => {
    setPlacedElements(placedElements.map(el => {
      if (el.id === id) {
        return { ...el, [property]: value };
      }
      return el;
    }));
  };

  const copyToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <div className={`min-h-screen font-serif transition-colors duration-1000 ease-in-out relative select-none overflow-x-hidden ${
      isDarkMode 
        ? 'bg-[#141513] text-[#e5ded4] selection:bg-[#bfa17a] selection:text-[#141513]' 
        : 'bg-[#faf8f5] text-[#22241f] selection:bg-[#22241f] selection:text-[#faf8f5]'
    }`}>
      
      {/* 1. Subtle Paper Grains Background Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply z-[1]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />

      {/* 2. Interactive Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[2]" />

      {/* 3. Global Audio Floating Player */}
      <div className="fixed bottom-8 left-8 z-50 flex items-center gap-3 bg-opacity-70 backdrop-blur-md px-4 py-2 rounded-full border border-opacity-25 transition-all shadow-sm group hover:scale-105 duration-300 border-[#caba9c] bg-[#faf8f5] dark:bg-[#1c1d1a] dark:border-[#524a3e]">
        <button 
          onClick={toggleAmbientSound}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-[#bfa17a] hover:bg-[#a3855d] text-[#1c1d1a]"
          title="Toggle Ambient Guqin"
        >
          {isAmbientPlaying ? (
            <Volume2 className="w-5 h-5 animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 opacity-80" />
          )}
        </button>
        <div className="text-xs pr-2">
          <p className="font-sans font-semibold text-opacity-40 text-xs tracking-wider">AUDIO ATMOSPHERE</p>
          <p className="font-serif tracking-wide italic text-[#bfa17a]">
            {isAmbientPlaying ? 'Playing: Pine Breeze & Guqin' : 'Muted: Scholar\'s Silence'}
          </p>
        </div>
        {isAmbientPlaying && (
          <div className="flex gap-1 items-end h-4 pb-1">
            <span className="w-0.5 bg-[#bfa17a] h-3 animate-bounce" style={{ animationDelay: '0.1s' }}></span>
            <span className="w-0.5 bg-[#bfa17a] h-4 animate-bounce" style={{ animationDelay: '0.3s' }}></span>
            <span className="w-0.5 bg-[#bfa17a] h-2 animate-bounce" style={{ animationDelay: '0.5s' }}></span>
            <span className="w-0.5 bg-[#bfa17a] h-3.5 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
          </div>
        )}
      </div>

      {/* 4. Elegant Top Minimalist Navigation */}
      <header className="sticky top-0 w-full z-40 border-b border-opacity-10 py-6 px-8 md:px-16 backdrop-blur-lg flex justify-between items-center transition-all duration-300 border-[#caba9c]">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-10 h-10 border border-[#bfa17a] rotate-45 flex items-center justify-center transition-transform hover:rotate-90 duration-500">
              <span className="font-serif text-[#bfa17a] -rotate-45 font-semibold text-base">閣</span>
            </div>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-serif tracking-[0.25em] font-semibold text-[#bfa17a] uppercase">
              LAORENJIA
            </h1>
            <p className="text-[9px] md:text-xs tracking-[0.4em] uppercase font-sans text-opacity-50 text-current -mt-1">
              The Scholar's Aesthetic Space
            </p>
          </div>
        </div>

        {/* Navigation Chapters */}
        <nav className="hidden lg:flex items-center gap-10 text-xs md:text-sm tracking-[0.2em] font-sans font-medium text-opacity-80">
          <button 
            onClick={() => setCurrentChapter('genesis')}
            className={`transition-all relative py-2 px-1 hover:text-[#bfa17a] ${currentChapter === 'genesis' ? 'text-[#bfa17a] font-bold' : ''}`}
          >
            I. GENESIS / 400年前
            {currentChapter === 'genesis' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#bfa17a]" />}
          </button>
          <button 
            onClick={() => setCurrentChapter('scroll')}
            className={`transition-all relative py-2 px-1 hover:text-[#bfa17a] ${currentChapter === 'scroll' ? 'text-[#bfa17a] font-bold' : ''}`}
          >
            II. THE SCROLL / 士林
            {currentChapter === 'scroll' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#bfa17a]" />}
          </button>
          <button 
            onClick={() => setCurrentChapter('sanctuary')}
            className={`transition-all relative py-2 px-1 hover:text-[#bfa17a] ${currentChapter === 'sanctuary' ? 'text-[#bfa17a] font-bold' : ''}`}
          >
            III. SANCTUARY / 庭园
            {currentChapter === 'sanctuary' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#bfa17a]" />}
          </button>
          <button 
            onClick={() => setCurrentChapter('rituals')}
            className={`transition-all relative py-2 px-1 hover:text-[#bfa17a] ${currentChapter === 'rituals' ? 'text-[#bfa17a] font-bold' : ''}`}
          >
            IV. RITUALS / 吟风
            {currentChapter === 'rituals' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#bfa17a]" />}
          </button>
        </nav>

        {/* Controls: Theme & Dynamic Language */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full border border-opacity-10 border-current hover:bg-opacity-5 hover:bg-current transition-all"
            title={isDarkMode ? "Awaken Classical Dawn" : "Settle into Ink Dusk"}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-[#bfa17a]" /> : <Moon className="w-4 h-4 text-[#bfa17a]" />}
          </button>

          <button 
            onClick={() => {
              setCurrentChapter(currentChapter === 'genesis' ? 'sanctuary' : 'genesis');
            }}
            className="hidden sm:flex items-center gap-2 text-xs border border-[#bfa17a] hover:bg-[#bfa17a] hover:text-[#1c1d1a] transition-all px-4 py-2 font-sans tracking-widest text-[#bfa17a]"
          >
            ENTER TEMPLE <Compass className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* 5. Main Chapter Sections Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        
        {/* CHAPTER I: GENESIS / HERO (Beautiful asymmetric high-end editorial) */}
        {currentChapter === 'genesis' && (
          <div className="space-y-24 animate-fade-in">
            {/* Main Hero block mirroring the premium header cards */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6">
              
              {/* Left Column: Traditional Landscape frame with poetic texts */}
              <div className="lg:col-span-8 border border-[#caba9c] dark:border-[#524a3e] p-8 md:p-12 relative flex flex-col justify-between overflow-hidden shadow-sm bg-[#fcfbfa] dark:bg-[#181917] rounded-[2px] min-h-[480px]">
                {/* Decorative border patterns */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-[#bfa17a] border-opacity-40" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-[#bfa17a] border-opacity-40" />

                {/* Subtle traditional mountain range SVG silhouette backdrop */}
                <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03] pointer-events-none flex items-end justify-end">
                  <svg viewBox="0 0 800 300" className="w-full h-auto max-h-72">
                    <path d="M0,300 L50,180 L180,260 L320,120 L480,240 L580,160 L720,270 L800,200 L800,300 Z" fill="currentColor" />
                    <path d="M80,300 L180,210 L280,280 L420,160 L540,250 L680,190 L800,300 Z" fill="currentColor" opacity="0.5" />
                  </svg>
                </div>

                {/* Top content row: Brand Heritage and numbers */}
                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div>
                    <span className="text-xs font-sans tracking-[0.4em] uppercase text-[#bfa17a]">
                      FAMILY LEGEND • 家族传奇
                    </span>
                    <h2 className="text-3xl md:text-4xl tracking-wider font-semibold mt-1 font-serif">
                      奥定东方府邸生活的雅士基因
                    </h2>
                  </div>
                  
                  {/* Styled Heritage Number Block matching the original "400" */}
                  <div className="flex items-baseline gap-2 group">
                    <span className="text-5xl md:text-7xl font-sans font-light tracking-tighter text-[#bfa17a] group-hover:scale-105 transition-transform duration-700">
                      400
                    </span>
                    <div>
                      <span className="text-lg font-serif block -mb-1">年前</span>
                      <span className="text-xs font-sans uppercase tracking-widest opacity-60">士的世界</span>
                    </div>
                  </div>
                </div>

                {/* Center Content: Poetic Editorial layout */}
                <div className="relative z-10 my-12 grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left part: broken stylized typography "Ele-ga-nt" as seen in inspiration */}
                  <div className="md:col-span-4 flex flex-col justify-center border-r border-[#caba9c] border-opacity-35 pr-4">
                    <span className="text-4xl md:text-5xl font-sans tracking-[0.1em] font-light text-[#bfa17a] leading-none">
                      Ele-
                    </span>
                    <span className="text-4xl md:text-5xl font-sans tracking-[0.2em] font-light text-[#bfa17a] leading-none ml-6">
                      ga-
                    </span>
                    <span className="text-4xl md:text-5xl font-sans tracking-[0.3em] font-light text-[#bfa17a] leading-none ml-12">
                      nt
                    </span>
                    <div className="mt-4 border-t border-[#bfa17a] w-16 pt-2 border-opacity-40">
                      <p className="text-[10px] font-sans tracking-[0.2em] opacity-65 uppercase">
                        The Elegant Gentry Taste
                      </p>
                    </div>
                  </div>

                  {/* Right part: Description text block */}
                  <div className="md:col-span-8 flex flex-col justify-center space-y-4">
                    <p className="text-sm md:text-base leading-relaxed text-opacity-80 font-serif italic max-w-lg">
                      “这里的人，特别似手城里人，都非常活跃，不大稳定，头脑聪明，出身很多学者文人，因而也出了很多大官。他们从前身居高位，现在退休后很有钱，居住在富丽堂皇的府邸里。”
                    </p>
                    <div className="flex items-center gap-2 text-xs opacity-60">
                      <span className="w-6 h-[1px] bg-current" />
                      <p className="font-sans">《利玛窦中国札记》</p>
                    </div>
                  </div>
                </div>

                {/* Bottom row: Dynamic Navigation Buttons to Chapters */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#caba9c] border-opacity-20">
                  <p className="text-xs tracking-[0.25em] font-sans opacity-50 uppercase">
                    CHAPTER I • ESTABLISHED IN THE DYNASTIC SOUL
                  </p>
                  <button 
                    onClick={() => setCurrentChapter('scroll')} 
                    className="flex items-center gap-1 text-xs tracking-widest text-[#bfa17a] font-sans hover:translate-x-2 transition-transform"
                  >
                    ENTER THE SCROLL OF SCHOLARS <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Mini card column mimicking layout boxes in inspiration */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-6">
                
                {/* Upper Small Box - "Elegant Portrait / Mini Story" */}
                <div className="border border-[#caba9c] dark:border-[#524a3e] p-6 relative flex flex-col justify-between rounded-[2px] flex-1 bg-[#fcfbfa] dark:bg-[#181917] overflow-hidden group shadow-sm">
                  {/* Backdrop artwork placeholder as refined geometric line vector */}
                  <div className="absolute inset-0 bg-[#bfa17a] bg-opacity-[0.02] pointer-events-none group-hover:bg-opacity-[0.04] transition-colors" />
                  
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-sans tracking-[0.3em] text-[#bfa17a] uppercase">
                      LIFESTYLE / 中西美学
                    </span>
                    <span className="text-xs border border-[#bfa17a] text-[#bfa17a] px-2 py-0.5 scale-90">
                      雅
                    </span>
                  </div>

                  <div className="my-6">
                    <h3 className="text-xl font-serif tracking-wider mb-2">以百年 敬百年</h3>
                    <p className="text-xs text-opacity-70 leading-relaxed font-sans">
                      Bridging classical Chinese courtyard architecture with contemporary global lifestyle. A tribute to generations of cultural elegance.
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#caba9c] border-opacity-20 pt-4">
                    <span className="text-xs font-serif italic text-[#bfa17a]">Gentry Heritage</span>
                    <button 
                      onClick={() => setCurrentChapter('rituals')}
                      className="text-xs font-sans tracking-widest text-[#bfa17a] opacity-80 hover:opacity-100 flex items-center gap-1"
                    >
                      EXPLORE <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Lower Small Box - Interactive Quick Seal Generator preview */}
                <div className="border border-[#caba9c] dark:border-[#524a3e] p-6 relative flex flex-col justify-between rounded-[2px] bg-[#fcfbfa] dark:bg-[#181917] shadow-sm overflow-hidden">
                  <span className="text-[10px] font-sans tracking-[0.3em] text-[#bfa17a] uppercase">
                    SEAL STAMP / 篆刻印章
                  </span>

                  <div className="flex items-center gap-4 my-4">
                    {/* Tiny animated SVG seal stamp */}
                    <div className="w-16 h-16 bg-[#b33925] border-2 border-dashed border-[#faf8f5] flex items-center justify-center text-white p-1 shadow-inner relative group cursor-pointer hover:rotate-6 transition-transform">
                      <div className="border border-white border-opacity-40 w-full h-full flex flex-wrap items-center justify-center p-0.5 text-center">
                        <span className="text-xs font-serif tracking-widest leading-none font-bold select-none text-[#faf8f5]">
                          {sealText.slice(0, 4)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold tracking-wider font-serif">印章定制器</p>
                      <p className="text-[11px] font-sans text-opacity-60 leading-tight">
                        Customize your signature red-stone seal instantly.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      maxLength="4"
                      value={sealText}
                      onChange={(e) => setSealText(e.target.value)}
                      placeholder="Type name (e.g. 雅居)"
                      className="flex-1 bg-opacity-50 border border-[#caba9c] bg-[#faf8f5] dark:bg-[#141513] px-3 py-1 text-xs font-sans focus:outline-none focus:border-[#bfa17a]"
                    />
                    <button 
                      onClick={() => {
                        setCurrentChapter('rituals');
                        // Scroll or go directly to the seal section
                        setTimeout(() => {
                          const el = document.getElementById('seal-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                      className="bg-[#bfa17a] text-[#1c1d1a] px-3 py-1 text-xs font-sans tracking-wider hover:bg-[#a3855d] transition-colors"
                    >
                      GO
                    </button>
                  </div>
                </div>

              </div>
            </section>

            {/* Middle Section: Poetic Philosophy Grid */}
            <section className="border-t border-b border-[#caba9c] border-opacity-35 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#bfa17a]" />
                    <h4 className="text-xs font-sans tracking-[0.3em] uppercase text-[#bfa17a]">
                      I. MOUNT & MIST / 山海有界
                    </h4>
                  </div>
                  <p className="text-lg font-serif font-medium">小中见大，曲折幽深</p>
                  <p className="text-xs leading-relaxed text-opacity-70 font-sans">
                    Traditional Chinese garden planning uses limited physical structures to mirror infinite nature. Path ways curve, sights are framed, creating deep visual voyages.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#bfa17a]" />
                    <h4 className="text-xs font-sans tracking-[0.3em] uppercase text-[#bfa17a]">
                      II. THE GENTRY LIVING / 士大夫风雅
                    </h4>
                  </div>
                  <p className="text-lg font-serif font-medium">独善其身，兼济天下</p>
                  <p className="text-xs leading-relaxed text-opacity-70 font-sans">
                    The dual nature of the Chinese scholar: actively contributing to governance when needed, yet maintaining a serene courtyard haven for tea, calligraphy, and poetry.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#bfa17a]" />
                    <h4 className="text-xs font-sans tracking-[0.3em] uppercase text-[#bfa17a]">
                      III. TIMELINKING / 跨越时空
                    </h4>
                  </div>
                  <p className="text-lg font-serif font-medium">以物传情，寄托林泉</p>
                  <p className="text-xs leading-relaxed text-opacity-70 font-sans">
                    Objects are vessels for spiritual energy. Scholar's stones, raw bamboo zithers, and weathered cedar columns connect modern residents with the heritage of Yu Garden.
                  </p>
                </div>
              </div>
            </section>

            {/* Quick Teaser Box: Interactive Garden Canvas Entrance */}
            <section className="bg-[#bfa17a] bg-opacity-[0.05] border border-[#bfa17a] border-opacity-20 p-8 rounded-[2px] flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="space-y-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Layers className="w-4 h-4 text-[#bfa17a]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#bfa17a]">INTERACTIVE CANVAS</span>
                </div>
                <h3 className="text-2xl font-serif">Virtual Courtyard Architect</h3>
                <p className="text-xs max-w-xl text-opacity-80 font-sans">
                  Design a miniature scholar’s terrace. Place traditional Taihu rocks, weeping bamboo, and ancient moon gates. Change current atmospheric mist, and sign it with your stamp.
                </p>
              </div>
              <button 
                onClick={() => setCurrentChapter('sanctuary')}
                className="bg-[#bfa17a] hover:bg-[#a3855d] text-[#1c1d1a] px-6 py-3 font-sans tracking-widest text-xs font-bold transition-all shadow-sm hover:scale-105 active:scale-95"
              >
                OPEN ARCHITECT TOOL
              </button>
            </section>
          </div>
        )}

        {/* CHAPTER II: THE SCROLL / 士林 (Exquisite horizontal interactive scholar scroll) */}
        {currentChapter === 'scroll' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="text-xs font-sans tracking-[0.4em] uppercase text-[#bfa17a]">CHAPTER II • HISTORICAL ASSEMBLY</span>
              <h2 className="text-3xl font-serif tracking-wider">雅集之林 • Scholar's Handscroll</h2>
              <p className="text-xs leading-relaxed text-opacity-70 font-sans">
                Inspired by classical Chinese scroll-paintings (手卷). Drag, explore, and click on individual scholars to study their spiritual legacies.
              </p>
            </div>

            {/* Custom Interactive Scroll Container simulating ancient scrolls */}
            <div className="relative border border-[#caba9c] dark:border-[#524a3e] bg-[#fcfbfa] dark:bg-[#181917] p-4 md:p-8 rounded-[2px] shadow-lg overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black from-opacity-5 to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black from-opacity-5 to-transparent pointer-events-none z-10" />

              {/* Header inside the scroll itself */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#caba9c] border-opacity-25 px-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#bfa17a]" />
                  <span className="text-[10px] tracking-widest uppercase font-sans opacity-70">
                    Scroll of Sages / 贤者画卷
                  </span>
                </div>
                <div className="text-xs italic text-[#bfa17a]">
                  Click on any scholar's label tag to reveal their legacy
                </div>
              </div>

              {/* Horizontal Scroll Area */}
              <div className="flex overflow-x-auto pb-6 pt-2 gap-8 scrollbar-thin scrollbar-thumb-[#bfa17a] scrollbar-track-transparent select-none px-4 snap-x">
                {scholars.map((scholar, idx) => (
                  <div 
                    key={scholar.id}
                    onClick={() => setActiveScholar(scholar)}
                    className="flex-shrink-0 w-80 md:w-96 border border-[#caba9c] border-opacity-30 p-6 rounded-[2px] bg-opacity-40 hover:bg-opacity-80 transition-all cursor-pointer relative overflow-hidden group snap-center bg-[#f9f6f0] dark:bg-[#1c1d1a]"
                  >
                    {/* Shadow ink spot backing */}
                    <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-opacity-[0.03] bg-[#bfa17a] group-hover:scale-125 transition-transform duration-1000" />
                    
                    {/* Top stamp/dynasty */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-sans text-opacity-50 font-bold">{scholar.dynasty}</span>
                      <div className="w-6 h-6 border border-[#bfa17a] flex items-center justify-center rounded-full text-xs text-[#bfa17a] font-serif">
                        {scholar.badge}
                      </div>
                    </div>

                    {/* Character Visual / Calligraphy Silhouette placeholder */}
                    <div className="h-44 bg-[#faf8f5] dark:bg-[#141513] border border-[#caba9c] border-opacity-20 flex items-center justify-center relative rounded-[1px] mb-6 overflow-hidden">
                      {/* Decorative red vertical stamp lines */}
                      <div className="absolute top-4 left-4 flex flex-col gap-1 items-center bg-[#b33925] px-1 py-2 text-white">
                        <span className="text-[10px] font-sans tracking-widest scale-75 leading-none">SEAL</span>
                        <span className="text-[9px] font-serif leading-none mt-1">士</span>
                      </div>

                      {/* Dynamic Scholar Silhouette (Using custom vector paths) */}
                      <svg className="w-32 h-32 opacity-45 group-hover:opacity-65 transition-opacity duration-500" viewBox="0 0 100 100">
                        {/* Abstract traditional character shape holding brush or looking out */}
                        <path 
                          d="M50 20 C42 20 40 28 44 32 C38 38 32 46 28 60 C24 74 20 85 45 85 C55 85 65 85 70 80 C75 75 70 50 64 42 C58 34 58 20 50 20 Z" 
                          fill="currentColor" 
                        />
                        {/* Scholar's tall silk hat */}
                        <path d="M41 20 L59 20 L57 10 L43 10 Z" fill="currentColor" />
                        {/* Sleeve / Arm detailing */}
                        <path d="M30 65 C35 62 45 68 50 62" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
                      </svg>

                      {/* Yellow label marker matching inspiration bottom scroll exactly */}
                      <div className="absolute bottom-3 right-3 bg-[#e5ca75] text-[#22241f] px-2.5 py-1 text-xs font-serif font-bold tracking-widest shadow-sm border border-[#ceb35b] vertical-text">
                        {scholar.name}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-3 relative z-10">
                      <h4 className="text-xl font-serif font-semibold text-[#bfa17a]">
                        {scholar.name}
                        <span className="text-xs block text-opacity-50 text-current mt-0.5">{scholar.title}</span>
                      </h4>
                      <p className="text-sm italic font-serif leading-relaxed text-opacity-95">
                        {scholar.quote}
                      </p>
                      <p className="text-[11px] font-sans text-opacity-65 leading-snug">
                        {scholar.subQuote}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="mt-4 pt-3 border-t border-[#caba9c] border-opacity-20 flex justify-end">
                      <span className="text-[10px] tracking-widest uppercase font-sans text-[#bfa17a] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        UNROLL MEMOIRS <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Scholar Detailed Modal */}
            {activeScholar && (
              <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-50 flex items-center justify-center p-4">
                <div className="bg-[#faf8f5] dark:bg-[#1a1b18] border border-[#bfa17a] max-w-2xl w-full p-8 rounded-[2px] shadow-2xl relative animate-fade-in text-current">
                  <button 
                    onClick={() => setActiveScholar(null)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-black hover:bg-opacity-5 text-opacity-70 text-current transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Left vertical info pane */}
                    <div className="md:col-span-4 border-r border-[#caba9c] border-opacity-30 pr-6 flex flex-col items-center md:items-start text-center md:text-left">
                      <div className="w-16 h-16 bg-[#e5ca75] text-[#22241f] flex items-center justify-center font-serif text-2xl font-bold tracking-widest shadow-md p-2">
                        {activeScholar.name}
                      </div>
                      <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#bfa17a] mt-4">
                        {activeScholar.dynasty}
                      </span>
                      <span className="text-xs opacity-65 font-sans mt-1">
                        {activeScholar.title}
                      </span>
                    </div>

                    {/* Right core story */}
                    <div className="md:col-span-8 space-y-6">
                      <div className="space-y-2">
                        <p className="text-2xl font-serif italic text-[#bfa17a] leading-relaxed">
                          {activeScholar.quote}
                        </p>
                        <p className="text-sm font-sans opacity-75">
                          {activeScholar.subQuote}
                        </p>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-[#caba9c] border-opacity-20 text-sm leading-relaxed text-opacity-80">
                        <p>{activeScholar.desc}</p>
                        <p className="text-xs italic text-[#bfa17a]">
                          "His aesthetic coordinates continue to guide our contemporary pursuit of quietude and architectural alignment with natural rivers."
                        </p>
                      </div>

                      <div className="pt-4 flex justify-end gap-2">
                        <button 
                          onClick={() => {
                            copyToClipboard(`${activeScholar.name}: ${activeScholar.quote}`);
                            alert('Scholar\'s quote copied to clipboard.');
                          }}
                          className="px-4 py-2 text-xs font-sans tracking-widest border border-current text-opacity-80 hover:text-[#bfa17a] transition-colors"
                        >
                          COPY WISDOM
                        </button>
                        <button 
                          onClick={() => setActiveScholar(null)}
                          className="px-4 py-2 text-xs font-sans tracking-widest bg-[#bfa17a] text-[#1c1d1a] font-bold hover:bg-[#a3855d] transition-colors"
                        >
                          CLOSE MEMOIR
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* CHAPTER III: SANCTUARY / INTERACTIVE COURTYARD BUILDER */}
        {currentChapter === 'sanctuary' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="text-xs font-sans tracking-[0.4em] uppercase text-[#bfa17a]">CHAPTER III • COURTYARD DESIGNER</span>
              <h2 className="text-3xl font-serif tracking-wider">庭园小境 • The Garden Architect</h2>
              <p className="text-xs leading-relaxed text-opacity-70 font-sans">
                Drag, scale, and place traditional elements into an elegant scholar’s frame. Customize atmospheric mist levels and watch shadows grow as the sun sets.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Toolbox Column */}
              <div className="lg:col-span-4 border border-[#caba9c] dark:border-[#524a3e] p-6 rounded-[2px] bg-[#fcfbfa] dark:bg-[#181917] flex flex-col justify-between space-y-6">
                
                {/* 1. Element Selector */}
                <div className="space-y-4">
                  <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-[#bfa17a] font-bold">
                    1. Select Elements / 选石植竹
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => addGardenElement('rock')}
                      className="border border-[#caba9c] hover:border-[#bfa17a] p-3 text-left rounded-[2px] hover:bg-[#bfa17a] hover:bg-opacity-5 transition-all group"
                    >
                      <span className="text-xs font-serif font-semibold block">太湖石 Scholar Stone</span>
                      <span className="text-[10px] text-opacity-50 font-sans">Organic micro eroded peaks</span>
                    </button>
                    <button 
                      onClick={() => addGardenElement('bamboo')}
                      className="border border-[#caba9c] hover:border-[#bfa17a] p-3 text-left rounded-[2px] hover:bg-[#bfa17a] hover:bg-opacity-5 transition-all group"
                    >
                      <span className="text-xs font-serif font-semibold block">翠竹 Weeping Bamboo</span>
                      <span className="text-[10px] text-opacity-50 font-sans">Gentle rustling leaves</span>
                    </button>
                    <button 
                      onClick={() => addGardenElement('bonsai')}
                      className="border border-[#caba9c] hover:border-[#bfa17a] p-3 text-left rounded-[2px] hover:bg-[#bfa17a] hover:bg-opacity-5 transition-all group"
                    >
                      <span className="text-xs font-serif font-semibold block">松树 Bonsai Pine</span>
                      <span className="text-[10px] text-opacity-50 font-sans">Aged twisting branches</span>
                    </button>
                    <button 
                      onClick={() => addGardenElement('moongate')}
                      className="border border-[#caba9c] hover:border-[#bfa17a] p-3 text-left rounded-[2px] hover:bg-[#bfa17a] hover:bg-opacity-5 transition-all group"
                    >
                      <span className="text-xs font-serif font-semibold block">月洞门 Moon Gate</span>
                      <span className="text-[10px] text-opacity-50 font-sans">Traditional circular vista</span>
                    </button>
                  </div>
                </div>

                {/* 2. Atmosphere Controllers */}
                <div className="space-y-4 border-t border-[#caba9c] border-opacity-25 pt-4">
                  <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-[#bfa17a] font-bold flex items-center gap-2">
                    <Sliders className="w-3.5 h-3.5" /> 2. Atmosphere / 林泉气象
                  </h4>

                  {/* Mist Level */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-sans">
                      <span>烟雨 Mist Density</span>
                      <span className="font-semibold text-[#bfa17a]">{gardenMist}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={gardenMist} 
                      onChange={(e) => setGardenMist(parseInt(e.target.value))}
                      className="w-full accent-[#bfa17a] bg-current bg-opacity-10 h-1 rounded-full cursor-pointer"
                    />
                  </div>

                  {/* Time of Day */}
                  <div className="space-y-2">
                    <span className="text-xs font-sans block">日夜 Time of Day</span>
                    <div className="grid grid-cols-4 gap-1.5">
                      {['dawn', 'midday', 'sunset', 'moonlight'].map((time) => (
                        <button 
                          key={time}
                          onClick={() => setGardenTime(time)}
                          className={`px-1 py-2 text-[10px] tracking-widest font-sans uppercase border rounded-[2px] transition-all text-center ${
                            gardenTime === time 
                              ? 'bg-[#bfa17a] text-[#1c1d1a] border-[#bfa17a] font-bold' 
                              : 'border-[#caba9c] border-opacity-40 hover:border-[#bfa17a]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Selected Element Details Transform */}
                <div className="space-y-4 border-t border-[#caba9c] border-opacity-25 pt-4 flex-1">
                  <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-[#bfa17a] font-bold">
                    3. Object Controls / 精细调节
                  </h4>
                  {activeElementId ? (
                    <div className="space-y-3 bg-[#faf8f5] dark:bg-[#141513] p-3 rounded-[2px] border border-[#caba9c] border-opacity-20">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-serif font-bold text-[#bfa17a]">
                          Selected: {placedElements.find(el => el.id === activeElementId)?.type.toUpperCase()}
                        </span>
                        <button 
                          onClick={() => removeGardenElement(activeElementId)}
                          className="text-[10px] tracking-wider text-red-600 dark:text-red-400 font-sans hover:underline"
                        >
                          DELETE
                        </button>
                      </div>

                      {/* Scale */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] font-sans">
                          <span>大小 Scale</span>
                          <span>{placedElements.find(el => el.id === activeElementId)?.scale.toFixed(1)}x</span>
                        </div>
                        <input 
                          type="range" 
                          min="0.4" 
                          max="2.5" 
                          step="0.1"
                          value={placedElements.find(el => el.id === activeElementId)?.scale || 1} 
                          onChange={(e) => updateElementTransform(activeElementId, 'scale', parseFloat(e.target.value))}
                          className="w-full accent-[#bfa17a] h-1 rounded-full cursor-pointer"
                        />
                      </div>

                      {/* Rotation */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] font-sans">
                          <span>角度 Rotation</span>
                          <span>{placedElements.find(el => el.id === activeElementId)?.rotation}°</span>
                        </div>
                        <input 
                          type="range" 
                          min="-180" 
                          max="180" 
                          value={placedElements.find(el => el.id === activeElementId)?.rotation || 0} 
                          onChange={(e) => updateElementTransform(activeElementId, 'rotation', parseInt(e.target.value))}
                          className="w-full accent-[#bfa17a] h-1 rounded-full cursor-pointer"
                        />
                      </div>

                      {/* X coordinate */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] font-sans">
                          <span>水平 X position</span>
                          <span>{placedElements.find(el => el.id === activeElementId)?.x}%</span>
                        </div>
                        <input 
                          type="range" 
                          min="0" 
                          max="100" 
                          value={placedElements.find(el => el.id === activeElementId)?.x || 0} 
                          onChange={(e) => updateElementTransform(activeElementId, 'x', parseInt(e.target.value))}
                          className="w-full accent-[#bfa17a] h-1 rounded-full cursor-pointer"
                        />
                      </div>

                      {/* Y coordinate */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] font-sans">
                          <span>垂直 Y position</span>
                          <span>{placedElements.find(el => el.id === activeElementId)?.y}%</span>
                        </div>
                        <input 
                          type="range" 
                          min="0" 
                          max="100" 
                          value={placedElements.find(el => el.id === activeElementId)?.y || 0} 
                          onChange={(e) => updateElementTransform(activeElementId, 'y', parseInt(e.target.value))}
                          className="w-full accent-[#bfa17a] h-1 rounded-full cursor-pointer"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-6 text-xs text-opacity-40 italic font-serif">
                      Click an object in the window to customize its layout
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => setPlacedElements([
                      { id: 1, type: 'moongate', x: 50, y: 50, scale: 1, rotation: 0 },
                      { id: 2, type: 'rock', x: 25, y: 65, scale: 0.9, rotation: 10 },
                      { id: 3, type: 'bamboo', x: 75, y: 45, scale: 1.1, rotation: -5 }
                    ])}
                    className="w-full flex items-center justify-center gap-1.5 border border-[#bfa17a] border-opacity-30 hover:border-opacity-100 py-2.5 text-xs tracking-widest font-sans transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> RE-CENTRE SANCTUARY
                  </button>
                </div>
              </div>

              {/* Central Interactive Garden Window Frame */}
              <div className="lg:col-span-8 border border-[#caba9c] dark:border-[#524a3e] rounded-[2px] shadow-lg relative overflow-hidden min-h-[500px] flex items-center justify-center bg-[#faf8f5] transition-all duration-1000" style={{
                backgroundColor: 
                  gardenTime === 'dawn' ? '#f4ece3' :
                  gardenTime === 'midday' ? '#faf8f5' :
                  gardenTime === 'sunset' ? '#eedfcb' : '#141513',
                color: gardenTime === 'moonlight' ? '#e5ded4' : '#22241f'
              }}>
                {/* 1. Time of Day Backdrop Overlay elements (Sun / Moon) */}
                {gardenTime === 'moonlight' ? (
                  <div className="absolute top-12 right-12 w-20 h-20 rounded-full bg-[#f3ece3] bg-opacity-20 blur-sm pointer-events-none" />
                ) : (
                  <div className={`absolute top-12 right-12 w-20 h-20 rounded-full bg-[#bfa17a] pointer-events-none blur-sm ${
                    gardenTime === 'sunset' ? 'bg-opacity-40 translate-y-8' : 
                    gardenTime === 'dawn' ? 'bg-opacity-20 translate-y-12' : 'bg-opacity-10'
                  } transition-transform duration-[2000ms]`} />
                )}

                {/* 2. Landscape Silhouette backing (Mountains in vector) */}
                <div className="absolute bottom-0 left-0 right-0 h-44 opacity-25 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                    <path d="M0 200 L50 150 L120 180 L250 100 L380 170 L500 120 L620 185 L720 140 L800 200 Z" fill="currentColor" />
                  </svg>
                </div>

                {/* 3. Mist Overlay layers based on state */}
                <div 
                  className="absolute inset-0 bg-white dark:bg-black pointer-events-none transition-opacity duration-500" 
                  style={{ opacity: gardenMist / 220 }} 
                />

                {/* 4. Elegant circular window boundary representing traditional moon window */}
                <div className="absolute inset-4 md:inset-8 border border-opacity-10 border-current pointer-events-none flex items-center justify-center rounded-full">
                  <div className="w-[96%] h-[96%] border border-opacity-5 border-current rounded-full" />
                </div>

                {/* 5. Placed interactive elements */}
                <div className="absolute inset-0 z-10">
                  {placedElements.map((el) => {
                    const isSelected = el.id === activeElementId;
                    return (
                      <div 
                        key={el.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveElementId(el.id);
                        }}
                        style={{
                          left: `${el.x}%`,
                          top: `${el.y}%`,
                          transform: `translate(-50%, -50%) scale(${el.scale}) rotate(${el.rotation}deg)`,
                          cursor: 'move'
                        }}
                        className={`absolute p-2 select-none group transition-shadow ${
                          isSelected ? 'ring-1 ring-[#bfa17a] ring-offset-2 ring-offset-transparent' : ''
                        }`}
                      >
                        {/* Custom render based on Element Type */}
                        {el.type === 'rock' && (
                          <svg className="w-24 h-24 text-current opacity-85 hover:opacity-100" viewBox="0 0 100 100">
                            {/* Detailed Taihu scholar rock vector silhouette with holes */}
                            <path 
                              d="M30 90 Q20 80 25 60 Q15 40 30 20 Q50 10 70 30 Q85 45 75 70 Q80 85 65 90 Z" 
                              fill="currentColor" 
                            />
                            {/* Piercing holes characteristic of Taihu Stones */}
                            <ellipse cx="45" cy="35" rx="5" ry="8" fill={gardenTime === 'moonlight' ? '#141513' : '#faf8f5'} />
                            <ellipse cx="55" cy="55" rx="7" ry="11" fill={gardenTime === 'moonlight' ? '#141513' : '#faf8f5'} />
                            <ellipse cx="35" cy="60" rx="4" ry="6" fill={gardenTime === 'moonlight' ? '#141513' : '#faf8f5'} />
                          </svg>
                        )}

                        {el.type === 'bamboo' && (
                          <svg className="w-32 h-32 text-current opacity-80 hover:opacity-100" viewBox="0 0 100 100">
                            {/* Slender bamboo stalks and delicate leaves */}
                            <path d="M20 100 L30 10" stroke="currentColor" strokeWidth="2.5" fill="none" />
                            <path d="M50 100 L45 0" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            {/* Leaves leaves */}
                            <path d="M28 40 C35 38 45 42 42 48 C38 46 32 44 28 40 Z" fill="currentColor" />
                            <path d="M47 30 C58 25 64 28 60 35 C52 35 48 32 47 30 Z" fill="currentColor" />
                            <path d="M44 60 C55 58 58 64 52 68 C46 65 44 62 44 60 Z" fill="currentColor" />
                            <path d="M22 70 C10 68 8 72 14 75 C18 73 20 71 22 70 Z" fill="currentColor" />
                          </svg>
                        )}

                        {el.type === 'bonsai' && (
                          <svg className="w-28 h-28 text-current opacity-85 hover:opacity-100" viewBox="0 0 100 100">
                            {/* Twisted ancient Pine Bonsai */}
                            <path d="M10 90 L30 85 C45 80 40 60 55 55 C70 50 85 40 70 30 C55 20 40 35 45 50" stroke="currentColor" strokeWidth="4" fill="none" />
                            {/* Pine needles clusters */}
                            <circle cx="70" cy="30" r="14" fill="currentColor" opacity="0.9" />
                            <circle cx="55" cy="55" r="12" fill="currentColor" opacity="0.9" />
                            <circle cx="35" cy="45" r="10" fill="currentColor" opacity="0.8" />
                            {/* Elegant pot */}
                            <path d="M5 90 L40 90 L35 98 L10 98 Z" fill="currentColor" />
                          </svg>
                        )}

                        {el.type === 'moongate' && (
                          <svg className="w-48 h-48 text-current opacity-30 pointer-events-none" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="5" fill="none" />
                            <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3,3" />
                          </svg>
                        )}

                        {/* Interactive Handle */}
                        <div className="absolute top-0 right-0 bg-[#bfa17a] text-[#1c1d1a] text-[8px] font-bold px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          EDIT
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 6. Signature dynamic red stamp inside the garden framing */}
                <div className="absolute bottom-6 right-6 z-20 flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#b33925] flex items-center justify-center p-0.5 border border-white border-opacity-20 shadow-md">
                    <span className="text-[10px] font-serif leading-tight font-bold tracking-widest text-[#faf8f5] select-none text-center">
                      {sealText.slice(0, 4)}
                    </span>
                  </div>
                </div>

                {/* Ambient Poetry line block at bottom corner matching editorial feel */}
                <div className="absolute bottom-6 left-6 z-20 max-w-[180px] hidden md:block">
                  <span className="text-[9px] font-sans tracking-[0.2em] opacity-40 uppercase block">
                    SANCTUARY POEM
                  </span>
                  <p className="text-xs italic font-serif opacity-75 mt-0.5">
                    "Deep rain returns to the bamboo terrace; scholar leaves his footprints on dry sand."
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* CHAPTER IV: RITUALS / TEA & POETRY GENERATOR */}
        {currentChapter === 'rituals' && (
          <div className="space-y-16 animate-fade-in">
            
            {/* Poetry Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Calligraphy Board View */}
              <div className="lg:col-span-7 border border-[#caba9c] dark:border-[#524a3e] p-8 md:p-12 rounded-[2px] bg-[#fcfbfa] dark:bg-[#181917] relative flex flex-col justify-between min-h-[500px] shadow-lg">
                <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-[#bfa17a] border-opacity-30" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-[#bfa17a] border-opacity-30" />

                <div className="flex justify-between items-start border-b border-[#caba9c] border-opacity-20 pb-4">
                  <div>
                    <span className="text-xs font-sans tracking-[0.4em] uppercase text-[#bfa17a]">
                      RITUAL I • TEXTUAL CHANT
                    </span>
                    <h3 className="text-xl font-serif mt-1">琴歌雅吟 • Zen Poetry Scroll</h3>
                  </div>
                  <div className="bg-[#bfa17a] bg-opacity-10 text-[#bfa17a] text-xs px-3 py-1 font-sans tracking-widest uppercase">
                    Mood: {poetryMood}
                  </div>
                </div>

                {/* Real Traditional Calligraphy Style Layout (Vertical text block) */}
                <div className="my-12 flex flex-col md:flex-row-reverse items-center md:items-stretch justify-center gap-12">
                  
                  {/* Chinese Column Block (Printed right-to-left in vertical columns) */}
                  <div className="flex flex-row-reverse gap-8 md:gap-12 select-text">
                    {poetryDb[poetryMood].chinese.map((line, colIdx) => (
                      <div 
                        key={colIdx} 
                        className="flex flex-col items-center justify-start text-2xl md:text-3.5xl font-serif font-medium tracking-[0.3em] text-current py-2"
                        style={{
                          writingMode: 'vertical-rl',
                          textCombineUpright: 'all'
                        }}
                      >
                        {line.split('').map((char, charIdx) => {
                          const triggerIdx = (colIdx * 5) + charIdx;
                          return (
                            <span 
                              key={charIdx} 
                              className={`transition-opacity duration-1000 ${
                                poetryProgress >= triggerIdx * 5 ? 'opacity-100' : 'opacity-0'
                              }`}
                            >
                              {char}
                            </span>
                          );
                        })}
                      </div>
                    ))}
                  </div>

                  {/* Divider line */}
                  <div className="w-[1px] bg-[#caba9c] bg-opacity-30 hidden md:block" />

                  {/* English Translation block */}
                  <div className="flex flex-col justify-center space-y-4 max-w-sm text-center md:text-left">
                    <span className="text-[10px] font-sans tracking-widest text-[#bfa17a] uppercase font-bold">
                      BILINGUAL TRANSLATION
                    </span>
                    <h4 className="text-lg font-serif font-semibold text-[#bfa17a]">
                      {poetryDb[poetryMood].title}
                    </h4>
                    <p className="text-xs font-sans opacity-60 -mt-2">by {poetryDb[poetryMood].author}</p>
                    
                    <div className="space-y-2 pt-2">
                      {poetryDb[poetryMood].english.map((line, idx) => (
                        <p key={idx} className="text-xs md:text-sm leading-relaxed italic text-opacity-80">
                          "{line}"
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom navigation */}
                <div className="border-t border-[#caba9c] border-opacity-20 pt-4 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-[11px] font-sans text-opacity-50">
                    Traditional calligraphy layout reads vertically from right to left.
                  </span>
                  
                  {/* Copy Poem */}
                  <button 
                    onClick={() => {
                      const txt = `${poetryDb[poetryMood].title}\n${poetryDb[poetryMood].chinese.join('\n')}`;
                      copyToClipboard(txt);
                      alert('Poem copied to clipboard!');
                    }}
                    className="flex items-center gap-1.5 text-xs font-sans tracking-widest text-[#bfa17a] hover:underline"
                  >
                    <Share2 className="w-3.5 h-3.5" /> SHARE POEM
                  </button>
                </div>
              </div>

              {/* Right Settings and Controls block */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-8">
                
                {/* Mood Select Container */}
                <div className="border border-[#caba9c] dark:border-[#524a3e] p-6 rounded-[2px] bg-[#fcfbfa] dark:bg-[#181917] space-y-6 shadow-md">
                  <div>
                    <h4 className="text-sm font-serif font-bold tracking-wider text-[#bfa17a]">
                      Select Inherent Mood / 研墨起韵
                    </h4>
                    <p className="text-xs opacity-65 font-sans mt-0.5">
                      Let your mind settle into different atmospheric seasons.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {Object.keys(poetryDb).map((key) => (
                      <button 
                        key={key}
                        onClick={() => setPoetryMood(key)}
                        className={`w-full p-4 border rounded-[2px] text-left transition-all flex justify-between items-center ${
                          poetryMood === key 
                            ? 'border-[#bfa17a] bg-[#bfa17a] bg-opacity-[0.06]' 
                            : 'border-[#caba9c] border-opacity-30 hover:border-[#bfa17a]'
                        }`}
                      >
                        <div>
                          <span className="text-xs font-sans tracking-widest uppercase block text-opacity-60 text-current">
                            MOOD KEY: {key.toUpperCase()}
                          </span>
                          <span className="text-base font-serif font-semibold mt-1 block">
                            {poetryDb[key].title.split('•')[0]}
                          </span>
                        </div>
                        <span className="text-xs italic text-[#bfa17a] font-sans">
                          {poetryDb[key].sound}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-[#caba9c] border-opacity-20 text-xs leading-relaxed text-opacity-70 font-sans">
                    Each selected setting influences the virtual ink spread on screen and updates the environmental ambient sounds.
                  </div>
                </div>

                {/* Traditional Chinese Seal Stamp Personalization Section */}
                <div id="seal-section" className="border border-[#caba9c] dark:border-[#524a3e] p-6 rounded-[2px] bg-[#fcfbfa] dark:bg-[#181917] space-y-6 shadow-md">
                  <div>
                    <h4 className="text-sm font-serif font-bold tracking-wider text-[#bfa17a]">
                      Personalize Scholar's Seal / 篆刻印章生成器
                    </h4>
                    <p className="text-xs opacity-65 font-sans mt-0.5">
                      Generates a customizable Chinese soapstone seal signature for signing paintings.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    
                    {/* Interactive Real SVG Seal Block */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="relative p-4 border border-[#caba9c] border-opacity-25 bg-[#faf8f5] dark:bg-[#141513] rounded-[2px] w-full flex items-center justify-center">
                        
                        {/* SVG Stone Stamp Render */}
                        <svg 
                          id="stone-seal" 
                          className="w-32 h-32 transition-transform duration-500 hover:rotate-3 cursor-pointer" 
                          viewBox="0 0 100 100"
                        >
                          <defs>
                            {/* Realistic stone bleed paper noise texture filter */}
                            <filter id="distressed-edge">
                              <feTurbulence type="fractalNoise" baseFrequency="0.25" numOctaves="4" result="noise" />
                              <feDisplacementMap in="SourceGraphic" in2="noise" scale={sealBorder === 'distressed' ? '5.5' : '1.5'} xChannelSelector="R" yChannelSelector="G" />
                            </filter>
                          </defs>

                          {/* Red stamp box background */}
                          {sealStyle === 'baiwen' ? (
                            <rect 
                              x="8" y="8" width="84" height="84" 
                              fill="#b33925" 
                              filter="url(#distressed-edge)" 
                            />
                          ) : (
                            <g filter="url(#distressed-edge)">
                              <rect x="8" y="8" width="84" height="84" fill="none" stroke="#b33925" strokeWidth="6" />
                            </g>
                          )}

                          {/* Dynamic stylized letters/characters */}
                          <g filter="url(#distressed-edge)">
                            <text 
                              x="50" y="55" 
                              fill={sealStyle === 'baiwen' ? '#faf8f5' : '#b33925'} 
                              fontSize="28" 
                              fontFamily="serif" 
                              fontWeight="bold" 
                              textAnchor="middle" 
                              alignmentBaseline="middle"
                              letterSpacing="3"
                            >
                              {sealText || '老人'}
                            </text>
                          </g>
                        </svg>
                      </div>
                      <span className="text-[10px] tracking-widest font-sans opacity-50 uppercase">
                        Real-time Signature Vector
                      </span>
                    </div>

                    {/* Seal configuration controls */}
                    <div className="space-y-4">
                      {/* Name input */}
                      <div className="space-y-1">
                        <label className="text-xs font-sans block">印章文字 Input Letters (Max 4)</label>
                        <input 
                          type="text" 
                          maxLength="4"
                          value={sealText}
                          onChange={(e) => setSealText(e.target.value)}
                          className="w-full bg-opacity-50 border border-[#caba9c] bg-[#faf8f5] dark:bg-[#141513] px-3 py-1.5 text-xs focus:outline-none focus:border-[#bfa17a]"
                        />
                      </div>

                      {/* Style toggle */}
                      <div className="space-y-1">
                        <label className="text-xs font-sans block">刻印样式 Ink Style</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button 
                            onClick={() => setSealStyle('zhuwen')}
                            className={`px-2 py-1.5 text-[10px] font-sans border rounded-[1px] uppercase tracking-wider ${
                              sealStyle === 'zhuwen' ? 'bg-[#bfa17a] text-[#1c1d1a] border-[#bfa17a]' : 'border-[#caba9c]'
                            }`}
                          >
                            朱文 (Red Ink Outline)
                          </button>
                          <button 
                            onClick={() => setSealStyle('baiwen')}
                            className={`px-2 py-1.5 text-[10px] font-sans border rounded-[1px] uppercase tracking-wider ${
                              sealStyle === 'baiwen' ? 'bg-[#bfa17a] text-[#1c1d1a] border-[#bfa17a]' : 'border-[#caba9c]'
                            }`}
                          >
                            白文 (Red Filled)
                          </button>
                        </div>
                      </div>

                      {/* Border Distressed Toggle */}
                      <div className="space-y-1">
                        <label className="text-xs font-sans block">石质风化 Edge Distress</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button 
                            onClick={() => setSealBorder('distressed')}
                            className={`px-2 py-1.5 text-[10px] font-sans border rounded-[1px] uppercase tracking-wider ${
                              sealBorder === 'distressed' ? 'bg-[#bfa17a] text-[#1c1d1a] border-[#bfa17a]' : 'border-[#caba9c]'
                            }`}
                          >
                            Weathered 石质
                          </button>
                          <button 
                            onClick={() => setSealBorder('clean')}
                            className={`px-2 py-1.5 text-[10px] font-sans border rounded-[1px] uppercase tracking-wider ${
                              sealBorder === 'clean' ? 'bg-[#bfa17a] text-[#1c1d1a] border-[#bfa17a]' : 'border-[#caba9c]'
                            }`}
                          >
                            Modern 齐整
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#caba9c] border-opacity-20 flex gap-2">
                    <button 
                      onClick={() => {
                        const svgString = new XMLSerializer().serializeToString(document.getElementById('stone-seal'));
                        const svgBlob = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
                        const svgUrl = URL.createObjectURL(svgBlob);
                        const downloadLink = document.createElement("a");
                        downloadLink.href = svgUrl;
                        downloadLink.download = `laorenjia_seal_${sealText}.svg`;
                        document.body.appendChild(downloadLink);
                        downloadLink.click();
                        document.body.removeChild(downloadLink);
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#bfa17a] hover:bg-[#a3855d] text-[#1c1d1a] py-2 text-xs font-sans tracking-widest font-bold transition-all"
                    >
                      <Download className="w-3.5 h-3.5" /> EXPORT SEAL (.SVG)
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </main>

      {/* 6. Fully Realized Premium Footer / Traditional Sign-Off */}
      <footer className="border-t border-[#caba9c] dark:border-[#524a3e] mt-24 bg-[#fcfbfa] dark:bg-[#181917] transition-colors duration-1000">
        
        {/* Upper footer editorial area */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Logo brand signature column */}
          <div className="md:col-span-4 space-y-4 border-r border-[#caba9c] border-opacity-20 pr-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#bfa17a] rotate-45 flex items-center justify-center">
                <span className="font-serif text-[#bfa17a] -rotate-45 text-xs font-bold">老</span>
              </div>
              <span className="text-lg tracking-[0.3em] font-serif font-bold text-[#bfa17a] uppercase">LAORENJIA</span>
            </div>
            <p className="text-xs leading-relaxed text-opacity-70 font-sans max-w-sm">
              We revive ancestral layouts, traditional garden parameters, and the quiet dignity of gentry scholar households, weaving traditional Chinese ink aesthetics with state-of-the-art interactive systems.
            </p>
            <div className="flex items-center gap-2 text-[10px] tracking-widest font-sans opacity-50">
              <span>ESTABLISHED 1601</span>
              <span>•</span>
              <span>REVISITED 2026</span>
            </div>
          </div>

          {/* Chapters Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-sans tracking-[0.25em] uppercase text-[#bfa17a] font-bold">THE SANCTUARY ARCHIVE</h5>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button onClick={() => setCurrentChapter('genesis')} className="hover:text-[#bfa17a] opacity-80 transition-colors">
                  Chapter I: Generative Genesis / 传奇源流
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentChapter('scroll')} className="hover:text-[#bfa17a] opacity-80 transition-colors">
                  Chapter II: Scholar Scroll of Sages / 贤士集林
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentChapter('sanctuary')} className="hover:text-[#bfa17a] opacity-80 transition-colors">
                  Chapter III: Courtyard Designer / 庭园小境
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentChapter('rituals')} className="hover:text-[#bfa17a] opacity-80 transition-colors">
                  Chapter IV: Calligraphy Chants / 琴瑟印信
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Inquiry / Contact */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-sans tracking-[0.25em] uppercase text-[#bfa17a] font-bold">CONTACT ARCHITECTS</h5>
            <p className="text-xs opacity-75 leading-relaxed font-sans">
              Looking to cultivate or design traditional Chinese aesthetic components for your contemporary space? Connect with our global design board.
            </p>
            <div className="pt-1">
              <span className="text-xs font-bold font-sans block text-[#bfa17a] tracking-wider">contact@laorenjia.heritage</span>
              <span className="text-[10px] font-sans opacity-50">Response within three solar terms</span>
            </div>
          </div>

          {/* Signature Seal Stamp Sign-off Column */}
          <div className="md:col-span-2 flex flex-col items-center md:items-end justify-center">
            <div className="w-20 h-20 bg-[#b33925] border-2 border-white border-opacity-10 shadow-lg relative flex items-center justify-center p-1 cursor-help hover:scale-105 transition-transform" title="Sign of True Heritage">
              <div className="border border-white border-opacity-30 w-full h-full flex flex-wrap items-center justify-center text-center p-0.5">
                <span className="text-sm font-serif leading-none tracking-widest font-bold text-[#faf8f5]">
                  老人<br />閣印
                </span>
              </div>
            </div>
            <span className="text-[10px] font-sans tracking-widest text-[#bfa17a] uppercase mt-3">
              OFFICIAL IMPRESSION
            </span>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="border-t border-[#caba9c] border-opacity-15 py-8 text-center text-[10px] font-sans tracking-[0.25em] text-opacity-50">
          <p>© 2026 LAORENJIA CO. ALL RIGHTS RESERVED. ARCHITECTURAL PATENTS FILED VIA SOVEREIGN GUILD.</p>
        </div>

      </footer>

    </div>
  );
}
10
import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  ChevronRight, 
  Award, 
  Sparkles, 
  RefreshCw, 
  Share2, 
  Volume2, 
  VolumeX, 
  ChevronDown, 
  BookOpen, 
  Target, 
  Gift, 
  Info,
  CheckCircle2,
  Maximize2
} from 'lucide-react';

// --- Web Audio API Chime Synth for Authentic Classical Atmosphere ---
class ClassicalSoundEffects {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playWoodenBlock() {
    if (this.muted) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(880, this.ctx.currentTime); // Wood block tone
    osc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }

  playChime() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    
    // Traditional pentatonic scale tone combination (Gong/G, Zhi/D)
    const freqs = [783.99, 1174.66, 1567.98]; 
    
    freqs.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.05);
      
      gain.gain.setValueAtTime(0.2, now + index * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6 + index * 0.05);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(now + index * 0.05);
      osc.stop(now + 0.8 + index * 0.05);
    });
  }

  playDrum() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.3);
    
    gain.gain.setValueAtTime(0.8, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(now + 0.4);
  }
}

const sfx = new ClassicalSoundEffects();

export default function App() {
  const [muted, setMuted] = useState(false);
  const [countdownDays, setCountdownDays] = useState(3);
  const [countdownHours, setCountdownHours] = useState(14);
  const [countdownMinutes, setCountdownMinutes] = useState(45);
  const [countdownSeconds, setCountdownSeconds] = useState(12);
  
  // Custom Invitation State
  const [visitorName, setVisitorName] = useState('');
  const [invitationTheme, setInvitationTheme] = useState('landscape'); // landscape, market, gourmet
  const [isGenerated, setIsGenerated] = useState(false);
  const [generationToast, setGenerationToast] = useState(false);

  // Mini-game "Pitch-pot" (投壶) State
  const [arrows, setArrows] = useState(5);
  const [score, setScore] = useState(0);
  const [gameMessage, setGameMessage] = useState('调整角度与力度，将竹矢投中铜壶！');
  const [isAiming, setIsAiming] = useState(true);
  const [angle, setAngle] = useState(45); // 15 to 75 deg
  const [power, setPower] = useState(50); // 10 to 100
  const [arrowStatus, setArrowStatus] = useState('idle'); // idle, flying, hit, miss
  const [arrowPos, setArrowPos] = useState({ x: 10, y: 80 }); // relative percentages inside game area
  const [potRect, setPotRect] = useState({ x: 80, y: 70 });
  const [highScore, setHighScore] = useState(0);

  // Active Tab for schedule
  const [activeTab, setActiveTab] = useState('all');

  // Invitation Quotes Matching Themes
  const themesData = {
    landscape: {
      title: "碧水悠悠 · 宋韵寻幽",
      poem: "山水永嘉迎雅客，碧莲波影醉春风。早香柚熟金黄满，共赴清欢画卷中。",
      bgClass: "bg-[#F3EDE0]",
      seal: "寻古",
      accent: "text-[#5C7261]",
      border: "border-[#5C7261]"
    },
    market: {
      title: "锦湾市集 · 华灯璀璨",
      poem: "十里长街腾鼓乐，千家灯火映红妆。柚香引路寻古意，雅玩投壶意气扬。",
      bgClass: "bg-[#F7EFE2]",
      seal: "市井",
      accent: "text-[#9B2915]",
      border: "border-[#9B2915]"
    },
    gourmet: {
      title: "宋韵金柚 · 舌尖雅集",
      poem: "金黄玉琢早香柚，味沁脾神贡御前。清茗一盏浮生歇，雅叙幽怀对圣贤。",
      bgClass: "bg-[#EFE9DB]",
      seal: "秋贡",
      accent: "text-[#D4A350]",
      border: "border-[#D4A350]"
    }
  };

  // Sound toggle helper
  const toggleMute = () => {
    sfx.muted = !muted;
    setMuted(!muted);
  };

  // Real-time Countdown simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownSeconds(prev => {
        if (prev > 0) return prev - 1;
        setCountdownMinutes(min => {
          if (min > 0) return min - 1;
          setCountdownHours(hr => {
            if (hr > 0) return hr - 1;
            setCountdownDays(day => {
              if (day > 0) return day - 1;
              return 3; // Reset loop just for aesthetics
            });
            return 23;
          });
          return 59;
        });
        return 59;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle Invitation Generation
  const handleGenerateInvitation = (e) => {
    e.preventDefault();
    if (!visitorName.trim()) {
      setVisitorName("温州墨客");
    }
    sfx.playChime();
    setIsGenerated(true);
    setGenerationToast(true);
    setTimeout(() => setGenerationToast(false), 4000);
  };

  // Custom simulation of Pitch-Pot physics
  const handleThrowArrow = () => {
    if (arrows <= 0 || arrowStatus === 'flying') return;
    
    sfx.playWoodenBlock();
    setArrows(prev => prev - 1);
    setArrowStatus('flying');
    setGameMessage('竹矢在空中划过优美的弧线...');

    // Simulate flight physics using simple quadratic curve
    let frame = 0;
    const totalFrames = 40;
    const startX = 10;
    const startY = 80;
    
    // Pot target area is approx: x: 78% - 84%, y: 65% - 75%
    // Determine landing point based on chosen Angle and Power
    // Target optimal parameters: Angle ~42 deg, Power ~72%
    const normalizedAngle = angle / 90; // 0 to 1
    const normalizedPower = power / 100; // 0 to 1
    
    // A stylized landing calculation
    const distanceFactor = normalizedPower * 100;
    const heightFactor = normalizedAngle * 120;
    
    const finalX = Math.min(95, startX + distanceFactor * 0.85);
    // parabola peak height is influenced by angle & power
    const peakY = Math.max(10, startY - heightFactor);

    const interval = setInterval(() => {
      frame++;
      const t = frame / totalFrames;
      
      // Calculate parabolic position
      const curX = startX + (finalX - startX) * t;
      // standard parabola: y = a*x^2 + b*x + c
      const curY = startY + (70 - startY) * t - 4 * (startY - peakY) * t * (1 - t);

      setArrowPos({ x: curX, y: curY });

      if (frame >= totalFrames) {
        clearInterval(interval);
        
        // Evaluate if landing is in the Pot region (76% to 84% x, and 65% to 75% y)
        const isHitX = finalX >= 76 && finalX <= 84;
        const isHitY = Math.abs(normalizedAngle - 0.46) < 0.08 && Math.abs(normalizedPower - 0.72) < 0.1;
        const perfectHit = isHitX && isHitY;

        if (perfectHit) {
          sfx.playChime();
          setArrowStatus('hit');
          setScore(prev => {
            const newScore = prev + 100;
            if (newScore > highScore) setHighScore(newScore);
            return newScore;
          });
          setGameMessage('妙极！竹矢稳稳落入铜壶深处！获得 +100 积分');
        } else {
          sfx.playDrum();
          setArrowStatus('miss');
          setGameMessage('差了一点！矢偏壶外。莫要灰心，再试一回。');
        }
        
        // Reset flight position after 2 seconds
        setTimeout(() => {
          setArrowStatus('idle');
          setArrowPos({ x: 10, y: 80 });
          if (arrows === 1) {
            setGameMessage('体验局结束，点击“再来一盘”复盘雅玩。');
          }
        }, 1500);
      }
    }, 25);
  };

  const resetGame = () => {
    sfx.playChime();
    setArrows(5);
    setScore(0);
    setArrowStatus('idle');
    setArrowPos({ x: 10, y: 80 });
    setGameMessage('雅器已备，清风徐来，请贵客试手！');
  };

  // Schedule filtering data
  const timelineData = [
    {
      time: "09:00 - 10:30",
      title: "第十一届中国早香柚文化节开幕仪式",
      location: "茗岙公园 · 宋风主会场",
      desc: "隆重的宋韵簪花大典、早香柚贡品敬呈礼仪，沉浸式体验宋人雅致风范。",
      tag: "ceremony"
    },
    {
      time: "09:00 - 20:00",
      title: "“柚王”评比与全民盲品竞选",
      location: "渡头古街 · 聚贤坊",
      desc: "集结永嘉各乡村最顶级早香柚，由市民及民俗学者现场评出本届“香柚之王”。",
      tag: "competition"
    },
    {
      time: "10:30 - 22:00",
      title: "锦湾街 · 宋韵烟火文创市集",
      location: "锦湾古街大集",
      desc: "百余摊位荟萃传统非遗、柚制香膏、宋代点茶、古法刺绣、宋服手作等。",
      tag: "market"
    },
    {
      time: "14:00 - 16:30",
      title: "宋韵雅集：投壶、捶丸及柚子套圈竞技",
      location: "碧莲溪畔 · 青竹阁",
      desc: "重现画卷中记载的贵族游艺，市民可现场打卡并兑换限量精美早香柚文创礼品。",
      tag: "game"
    },
    {
      time: "19:00 - 21:30",
      title: "“相约碧莲”溪畔古风国乐晚会",
      location: "碧莲廊桥 · 水上舞台",
      desc: "以古筝、琵琶、尺八演绎流传千年的宋代词乐，配以水幕光影秀，宛若梦回汴梁。",
      tag: "ceremony"
    }
  ];

  const filteredTimeline = activeTab === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.tag === activeTab);

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#2C251E] font-serif selection:bg-[#9B2915] selection:text-white relative overflow-x-hidden">
      
      {/* Background paper texture effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[1]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      {/* Decorative Traditional Border Accents on Screen Sides */}
      <div className="hidden lg:block fixed left-4 top-24 bottom-24 w-1 border-l border-r border-[#D9CEB6] opacity-60 z-10" />
      <div className="hidden lg:block fixed right-4 top-24 bottom-24 w-1 border-l border-r border-[#D9CEB6] opacity-60 z-10" />

      {/* Elegant Header */}
      <header className="sticky top-0 z-50 bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#E2D9C5] shadow-sm px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Brand Area */}
          <div className="flex items-center space-x-3">
            <div className="bg-[#9B2915] text-white px-3 py-1 text-xs tracking-[0.25em] font-bold rounded-sm shadow-md flex items-center justify-center transform rotate-[-2deg]">
              宋韵
            </div>
            <div>
              <span className="font-extrabold text-lg md:text-xl tracking-wider text-[#2C251E]">
                永嘉碧莲
              </span>
              <span className="text-xs text-[#9B2915] ml-2 border-l border-[#D9CEB6] pl-2 font-sans tracking-widest hidden sm:inline">
                柚见宋韵文化节
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-widest">
            <a href="#hero" className="hover:text-[#9B2915] transition-colors relative py-1 group">
              首卷
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9B2915] transition-all group-hover:w-full" />
            </a>
            <a href="#countdown" className="hover:text-[#9B2915] transition-colors relative py-1 group">
              倒计时
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9B2915] transition-all group-hover:w-full" />
            </a>
            <a href="#schedule" className="hover:text-[#9B2915] transition-colors relative py-1 group">
              宋韵雅集
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9B2915] transition-all group-hover:w-full" />
            </a>
            <a href="#games" className="hover:text-[#9B2915] transition-colors relative py-1 group">
              投壶雅玩
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9B2915] transition-all group-hover:w-full" />
            </a>
            <a href="#invite" className="hover:text-[#9B2915] transition-colors relative py-1 group text-[#9B2915]">
              定制邀请函
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9B2915] transition-all group-hover:w-full" />
            </a>
          </nav>

          {/* Mute and Action Controls */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={toggleMute}
              className="p-2 rounded-full border border-[#D9CEB6] hover:bg-[#EAE2D2] transition-all"
              title={muted ? "开启音效" : "静音"}
            >
              {muted ? <VolumeX size={16} className="text-[#8C8273]" /> : <Volume2 size={16} className="text-[#9B2915] animate-pulse" />}
            </button>
            <a 
              href="#invite" 
              className="bg-[#9B2915] hover:bg-[#802110] text-[#F4EFE6] px-4 py-1.5 rounded-sm text-xs tracking-widest font-sans transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              登临雅集
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section: Epic classical painting layout with vector watercolor scenery */}
      <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-[#E2D9C5] py-12 px-4 md:px-8 bg-gradient-to-b from-[#F2ECE1] via-[#F4EFE6] to-[#FAF8F2]">
        
        {/* Absolute Decorative SVG Art Background matching header scroll in poster */}
        <div className="absolute inset-0 opacity-[0.25] pointer-events-none flex items-end justify-center z-0">
          <svg viewBox="0 0 1440 450" className="w-full min-w-[1024px] h-auto fill-current text-[#D6CBAE]">
            {/* Distant mountains silhouette */}
            <path d="M0,450 L0,320 Q120,220 280,310 T560,260 T840,350 T1120,290 T1440,380 L1440,450 Z" />
            {/* Mid-ground mountains */}
            <path d="M100,450 Q280,260 450,380 T900,290 T1300,410 L1440,450 L100,450 Z" opacity="0.6"/>
            {/* Traditional pavilion outline */}
            <path d="M520,310 L560,310 L560,285 L520,285 Z M515,285 L565,285 L540,265 Z" stroke="#9B2915" strokeWidth="2" fill="none" />
            <line x1="540" y1="285" x2="540" y2="310" stroke="#9B2915" strokeWidth="1" />
          </svg>
        </div>

        {/* Animated Flying Cranes SVGs */}
        <div className="absolute top-16 right-[15%] w-24 h-16 pointer-events-none opacity-40 animate-pulse duration-1000">
          <svg viewBox="0 0 100 60" fill="none" stroke="#2C251E" strokeWidth="1.5">
            <path d="M10,30 Q30,10 50,30 T90,30" />
            <path d="M30,25 Q50,45 70,25" />
            <circle cx="50" cy="30" r="1" fill="#9B2915" />
          </svg>
        </div>
        <div className="absolute top-36 left-[10%] w-16 h-12 pointer-events-none opacity-30 animate-bounce duration-[6000ms]">
          <svg viewBox="0 0 100 60" fill="none" stroke="#2C251E" strokeWidth="1.2">
            <path d="M10,30 Q30,15 50,30 T90,30" />
            <path d="M30,22 Q50,40 70,22" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Title Columns */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#EFE9DB] border border-[#D9CEB6] px-3 py-1 rounded-full text-xs text-[#5C7261] font-sans tracking-widest">
              <Sparkles size={12} className="animate-spin text-[#D4A350]" />
              <span>宋韵风骨 · 传世芳华</span>
            </div>

            {/* Classical Vertical layout inspiration combined with robust horizontal title */}
            <div className="space-y-2">
              <p className="text-[#9B2915] text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
                相约碧莲 · 柚见宋韵
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1C1814] leading-tight font-serif">
                第十一届中国早香柚文化节
              </h1>
              <p className="text-md md:text-lg text-[#5C7261] font-serif tracking-[0.15em] max-w-2xl mx-auto lg:mx-0">
                暨 永嘉碧莲宋韵文化旅游季开幕盛典
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C5346] leading-relaxed max-w-xl mx-auto lg:mx-0">
              永嘉碧莲，依山傍水，人杰地灵。当传世千年的宋代高雅审美，邂逅饱满飘香的早香名柚，一幅繁华璀璨、文气斐然的绝美画卷正在浙里缓缓铺展。
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#games" 
                onClick={() => sfx.playChime()}
                className="bg-[#9B2915] hover:bg-[#802110] text-[#F4EFE6] px-6 py-3 rounded-sm text-sm tracking-widest font-sans transition-all shadow-md hover:shadow-xl hover:translate-y-[-1px] flex items-center space-x-2"
              >
                <span>体验宋韵雅玩</span>
                <ChevronRight size={14} />
              </a>
              <a 
                href="#invite" 
                onClick={() => sfx.playWoodenBlock()}
                className="bg-[#5C7261] hover:bg-[#495B4C] text-[#F4EFE6] px-6 py-3 rounded-sm text-sm tracking-widest font-sans transition-all shadow-md hover:shadow-xl hover:translate-y-[-1px]"
              >
                生成纸染邀请函
              </a>
            </div>

            {/* Date Details resembling the bottom right banner of the poster */}
            <div className="pt-6 border-t border-[#E2D9C5] max-w-md mx-auto lg:mx-0 flex items-center justify-between text-xs tracking-wider text-[#8C8273]">
              <div className="flex items-center space-x-2">
                <Calendar size={14} className="text-[#9B2915]" />
                <span>2026年10月21日 - 10月22日</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-[#9B2915]" />
                <span>温州·永嘉县碧莲镇</span>
              </div>
            </div>
          </div>

          {/* Right Column: Emulating the stunning middle Scroll Poster layout ("邀请函及倒计时") */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] bg-[#EFE9DB] rounded-md shadow-2xl border-4 border-[#DCD2B5] p-6 space-y-6 transform hover:rotate-1 transition-transform duration-500 relative overflow-hidden">
              
              {/* Internal Fine Golden Lines and Borders */}
              <div className="absolute inset-2 border border-[#CBBFA4] pointer-events-none" />
              <div className="absolute inset-3 border border-[#CBBFA4]/40 pointer-events-none" />

              {/* Decorative Corner Seals */}
              <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-[#9B2915]" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-[#9B2915]" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-[#9B2915]" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-[#9B2915]" />

              <div className="text-center space-y-4 pt-4 relative z-10">
                <div className="flex justify-center">
                  {/* Classical Red Stamp Seal Vector */}
                  <div className="border-2 border-[#9B2915] text-[#9B2915] font-black text-xs p-1 tracking-widest flex items-center justify-center transform rotate-6">
                    永嘉<br/>佳会
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="block text-xs text-[#8C8273] tracking-[0.4em] uppercase">BILIAN INVITATION</span>
                  <h3 className="text-xl md:text-2xl text-[#2C251E] font-bold tracking-widest">
                    相约碧莲 · 柚见宋韵
                  </h3>
                  <div className="h-0.5 w-16 bg-[#9B2915] mx-auto my-2" />
                </div>

                {/* Main vertical layout styling like the invitation scroll */}
                <div className="text-[#5C5346] text-xs leading-relaxed py-3 space-y-2 writing-vertical tracking-widest text-center">
                  <p>金秋硕果时</p>
                  <p>碧莲镇溪畔，共赴风雅宋韵</p>
                  <p>赏十里香柚林，品宋制点茶之珍</p>
                </div>

                {/* High Density Event Spotlights matching invitation format */}
                <div className="bg-[#FAF8F2]/80 border border-[#D9CEB6] p-3 text-left text-xs space-y-2">
                  <div className="flex justify-between text-[#9B2915] font-semibold border-b border-[#E2D9C5] pb-1">
                    <span>早香柚文化展</span>
                    <span>09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between text-[#9B2915] font-semibold border-b border-[#E2D9C5] pb-1">
                    <span>锦湾烟火大集</span>
                    <span>10:30 - 22:00</span>
                  </div>
                  <div className="flex justify-between text-[#5C7261] font-semibold">
                    <span>地点：永嘉县碧莲镇古街</span>
                  </div>
                </div>
              </div>

              {/* Poster bottom aesthetic footer */}
              <div className="text-center pt-2 relative z-10">
                <span className="text-[10px] text-[#A69B86] tracking-widest block">主办：永嘉县人民政府</span>
                <span className="text-[10px] text-[#A69B86] tracking-widest block">承办：中共永嘉县委宣传部 / 碧莲镇人民政府</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Countdown section: Designed to mimic the elegant "3天 倒计时" card */}
      <section id="countdown" className="py-12 bg-[#EFE9DB] border-b border-[#E2D9C5] px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <h2 className="text-lg md:text-xl font-bold tracking-[0.25em] text-[#9B2915] uppercase flex items-center justify-center space-x-2">
              <span>—— 盛典启幕倒计时 ——</span>
            </h2>
            <p className="text-xs text-[#8C8273] tracking-widest mt-1">THE COUNTDOWN TO BILIAN CULTURE SEASON</p>
          </div>

          {/* Time Counter Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {/* Days block - matched to the "3天 倒计时" in image */}
            <div className="bg-[#FAF8F2] border-2 border-[#DCD2B5] p-5 rounded-sm relative overflow-hidden shadow-md group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#9B2915]" />
              <div className="text-5xl font-extrabold text-[#2C251E] tracking-tight">{countdownDays}</div>
              <div className="text-xs text-[#8C8273] tracking-widest mt-1 font-sans">天 (DAYS)</div>
            </div>

            <div className="bg-[#FAF8F2] border-2 border-[#DCD2B5] p-5 rounded-sm relative overflow-hidden shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#5C7261]" />
              <div className="text-5xl font-extrabold text-[#2C251E] tracking-tight">
                {String(countdownHours).padStart(2, '0')}
              </div>
              <div className="text-xs text-[#8C8273] tracking-widest mt-1 font-sans">时 (HOURS)</div>
            </div>

            <div className="bg-[#FAF8F2] border-2 border-[#DCD2B5] p-5 rounded-sm relative overflow-hidden shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D4A350]" />
              <div className="text-5xl font-extrabold text-[#2C251E] tracking-tight">
                {String(countdownMinutes).padStart(2, '0')}
              </div>
              <div className="text-xs text-[#8C8273] tracking-widest mt-1 font-sans">分 (MINUTES)</div>
            </div>

            <div className="bg-[#FAF8F2] border-2 border-[#DCD2B5] p-5 rounded-sm relative overflow-hidden shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#9B2915] animate-pulse" />
              <div className="text-5xl font-extrabold text-[#9B2915] tracking-tight">
                {String(countdownSeconds).padStart(2, '0')}
              </div>
              <div className="text-xs text-[#8C8273] tracking-widest mt-1 font-sans">秒 (SECONDS)</div>
            </div>
          </div>

          <p className="text-xs text-[#5C5346] italic">
            * 2026年10月21日晨九时，碧莲画卷准时于聚贤坊开启，静候君来。
          </p>
        </div>
      </section>

      {/* Playable Mini-Game: "宋韵雅玩 - 投壶竞技" matching bottom section of image */}
      <section id="games" className="py-16 bg-[#F4EFE6] border-b border-[#E2D9C5] px-4 relative">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Header Description */}
          <div className="text-center space-y-3">
            <span className="text-[#9B2915] text-xs tracking-[0.3em] font-bold block">CLASSICAL INTERACTIVE GAMES</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#2C251E]">宋代大雅游艺 · 投壶</h2>
            <p className="text-sm text-[#5C5346] max-w-2xl mx-auto font-serif">
              投壶是宋代士大夫宴饮时最流行的游戏。宾主依次将竹矢投入特制的青铜壶中，中者为胜。我们在网页上为您精心复原了这一古雅体验，试着打破最高纪录吧！
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Interactive Game Console */}
            <div className="lg:col-span-8 bg-[#FAF8F2] border border-[#D9CEB6] rounded-md shadow-lg p-4 md:p-6 flex flex-col justify-between relative overflow-hidden min-h-[460px]">
              
              {/* Soft Ink Watermark inside game */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.05] flex items-center justify-center z-0">
                <svg viewBox="0 0 100 100" className="w-96 h-96 fill-[#9B2915]">
                  <path d="M50,10 C20,10 10,40 10,60 C10,80 30,90 50,90 C70,90 90,80 90,60 C90,40 80,10 50,10 Z" />
                </svg>
              </div>

              {/* Game Top Hud Info */}
              <div className="relative z-10 flex justify-between items-center border-b border-[#E2D9C5] pb-3 text-xs md:text-sm font-sans">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#9B2915]/10 text-[#9B2915] px-3 py-1 rounded-sm font-bold">
                    剩余竹矢: <span className="text-base">{arrows}</span> 支
                  </div>
                  <div className="text-[#5C5346]">
                    当前积分: <span className="text-base text-[#D4A350] font-bold">{score}</span>
                  </div>
                </div>
                <div className="text-[#8C8273]">
                  最高纪录: <span className="text-[#2C251E] font-bold">{highScore}</span>
                </div>
              </div>

              {/* Interactive SVG Animation Stage */}
              <div className="relative z-10 flex-1 min-h-[280px] bg-[#F2ECE1]/40 border border-[#E2D9C5]/80 my-4 rounded-sm relative overflow-hidden">
                
                {/* Traditional Clouds on the skyline of the game */}
                <div className="absolute top-2 left-4 text-[10px] text-[#A69B86]/70 tracking-widest font-sans">
                  温州永嘉 · 碧莲阁投壶席
                </div>

                {/* Score indicators popping out */}
                {arrowStatus === 'hit' && (
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#5C7261] text-white px-4 py-2 rounded-md font-bold text-lg animate-bounce shadow-lg z-20 flex items-center space-x-2">
                    <Award size={20} />
                    <span>入壶！+100 积分</span>
                  </div>
                )}
                {arrowStatus === 'miss' && (
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#9B2915] text-white px-4 py-1.5 rounded-md font-bold text-sm animate-pulse shadow-lg z-20">
                    偏离壶嘴！
                  </div>
                )}

                {/* Arrow flight physics visualization */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  {/* Stylized Aiming Guiding Trajectory Line */}
                  {isAiming && arrowStatus === 'idle' && (
                    <path 
                      d={`M 10% 80% Q ${10 + (power * 0.4)}% ${80 - (angle * 0.85)}% 80% 70%`}
                      fill="none" 
                      stroke="#D4A350" 
                      strokeWidth="2" 
                      strokeDasharray="4 6" 
                      className="opacity-70"
                    />
                  )}

                  {/* Dynamic Arrow (竹矢) in Flight or Positioned */}
                  <g transform={`translate(${arrowPos.x * 6.5}, ${arrowPos.y * 2.8})`}>
                    <line 
                      x1="-15" y1="0" x2="15" y2="0" 
                      stroke={arrowStatus === 'hit' ? '#5C7261' : '#9B2915'} 
                      strokeWidth="3.5" 
                      className={arrowStatus === 'flying' ? 'animate-spin' : ''}
                    />
                    {/* Arrow head */}
                    <polygon points="15,-4 22,0 15,4" fill={arrowStatus === 'hit' ? '#5C7261' : '#9B2915'} />
                    {/* Arrow feathers */}
                    <path d="M-15,-3 L-10,0 L-15,3 Z" fill="#EFE9DB" stroke="#2C251E" strokeWidth="1" />
                  </g>

                  {/* Classical Bronze Pot (铜壶) Graphic at coordinates (80%, 70%) */}
                  <g transform="translate(520, 175)" className="transition-transform hover:scale-105 duration-300">
                    {/* Shadows */}
                    <ellipse cx="0" cy="55" rx="20" ry="6" fill="#1C1814" opacity="0.3" />
                    {/* Bronze Pot Body */}
                    <path d="M-15,10 C-15,40 -25,45 -25,52 C-25,55 -15,58 0,58 C15,58 25,55 25,52 C25,45 15,40 15,10 Z" fill="#4A4E4D" stroke="#D4A350" strokeWidth="1.5" />
                    {/* Pot Neck */}
                    <rect x="-6" y="-15" width="12" height="25" fill="#3E4241" stroke="#D4A350" strokeWidth="1.5" />
                    {/* Decorative Pot Ears (双耳) - Classic Song Dynasty Pitch Pot design */}
                    <circle cx="-10" cy="-6" r="4.5" fill="none" stroke="#D4A350" strokeWidth="1.5" />
                    <circle cx="10" cy="-6" r="4.5" fill="none" stroke="#D4A350" strokeWidth="1.5" />
                    {/* Highlight Ring */}
                    <ellipse cx="0" cy="-15" rx="6" ry="2.5" fill="#2C2E2E" stroke="#D4A350" strokeWidth="1.5" />
                    {/* "Song" style engraving watermark on the pot */}
                    <text x="-4" y="38" fill="#D4A350" fontSize="7" fontWeight="bold" fontFamily="serif">宋</text>
                  </g>
                </svg>

                {/* Simple target guide zone highlight */}
                <div className="absolute bottom-[65px] right-[80px] w-12 h-12 border-2 border-dashed border-[#D4A350]/40 rounded-full animate-ping pointer-events-none" />

              </div>

              {/* Game Message Board */}
              <div className="relative z-10 bg-[#EFE9DB]/60 border border-[#D9CEB6] p-3 rounded-sm mb-4 text-xs md:text-sm text-center font-semibold text-[#5C5346] flex items-center justify-center space-x-2">
                <Info size={16} className="text-[#9B2915] shrink-0" />
                <span>{gameMessage}</span>
              </div>

              {/* Controls Panel */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-t border-[#E2D9C5] pt-4">
                
                {/* Angle Control */}
                <div className="md:col-span-4 space-y-1">
                  <div className="flex justify-between text-xs font-sans font-bold text-[#8C8273]">
                    <span>投掷仰角: {angle}°</span>
                    <span className="text-xs text-[#9B2915]">(建议: 40°- 45°)</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="75" 
                    value={angle} 
                    onChange={(e) => {
                      setAngle(parseInt(e.target.value));
                      if (arrowStatus === 'idle') setGameMessage('调整仰角：角度会改变抛物线的弧度高度');
                    }}
                    disabled={arrows <= 0 || arrowStatus === 'flying'}
                    className="w-full h-1 bg-[#D9CEB6] rounded-lg appearance-none cursor-pointer accent-[#9B2915]"
                  />
                </div>

                {/* Power Control */}
                <div className="md:col-span-4 space-y-1">
                  <div className="flex justify-between text-xs font-sans font-bold text-[#8C8273]">
                    <span>投掷力度: {power}%</span>
                    <span className="text-xs text-[#9B2915]">(建议: 70%- 75%)</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="100" 
                    value={power} 
                    onChange={(e) => {
                      setPower(parseInt(e.target.value));
                      if (arrowStatus === 'idle') setGameMessage('调整力度：影响箭矢飞行的总水平距离');
                    }}
                    disabled={arrows <= 0 || arrowStatus === 'flying'}
                    className="w-full h-1 bg-[#D9CEB6] rounded-lg appearance-none cursor-pointer accent-[#5C7261]"
                  />
                </div>

                {/* Action Button */}
                <div className="md:col-span-4 flex space-x-2">
                  <button
                    onClick={handleThrowArrow}
                    disabled={arrows <= 0 || arrowStatus === 'flying'}
                    className={`flex-1 font-sans text-xs tracking-widest font-bold py-3 px-4 rounded-sm transition-all shadow-md flex items-center justify-center space-x-1 ${
                      arrows <= 0 
                        ? 'bg-[#D9CEB6] text-[#8C8273] cursor-not-allowed'
                        : 'bg-[#9B2915] hover:bg-[#802110] text-[#FAF8F2]'
                    }`}
                  >
                    <Target size={14} />
                    <span>{arrowStatus === 'flying' ? '投掷中...' : '掷矢入壶'}</span>
                  </button>

                  <button
                    onClick={resetGame}
                    className="bg-[#EFE9DB] hover:bg-[#E2D9C5] text-[#5C5346] border border-[#D9CEB6] p-3 rounded-sm transition-all"
                    title="重置棋局"
                  >
                    <RefreshCw size={14} />
                  </button>
                </div>

              </div>

            </div>

            {/* Right: Traditional Instructions Easels matching bottom graphics in inspiration image */}
            <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
              
              {/* Play instructions layout */}
              <div className="bg-[#FAF8F2] border border-[#D9CEB6] p-5 rounded-md shadow-md space-y-4">
                <div className="flex items-center space-x-2 border-b border-[#E2D9C5] pb-2">
                  <BookOpen size={18} className="text-[#9B2915]" />
                  <h3 className="font-bold text-md text-[#2C251E] tracking-widest">雅玩规则 (说明画架)</h3>
                </div>
                <ul className="text-xs text-[#5C5346] space-y-3 leading-relaxed">
                  <li className="flex items-start space-x-2">
                    <span className="bg-[#9B2915] text-white w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-sans mt-0.5">1</span>
                    <span><strong>瞄准抛物:</strong> 拖动仰角与力度滑块，左侧的金色虚线即为箭矢的大致轨迹参考。</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-[#9B2915] text-white w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-sans mt-0.5">2</span>
                    <span><strong>完美落壶:</strong> 壶口的宽度较窄，必须完美调配角度（约42-45度）与力度（约70-75%）才能成功落壶。</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-[#9B2915] text-white w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-sans mt-0.5">3</span>
                    <span><strong>积分兑好礼:</strong> 每次入壶可获100积分。若能在文化季现场展示此小游戏获胜界面，可免费兑换本届永嘉精美香柚礼盒。</span>
                  </li>
                </ul>
              </div>

              {/* Special offline features card showcasing "捶丸" and "套圈" from user image */}
              <div className="bg-[#EFE9DB] border border-[#DCD2B5] p-5 rounded-md shadow-inner space-y-3">
                <div className="flex items-center space-x-2 text-[#5C7261]">
                  <Gift size={18} />
                  <h4 className="font-bold text-sm tracking-widest">其他宋代经典游艺 (线下体验)</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#5C5346]">
                  <div className="bg-[#FAF8F2] p-2.5 rounded-sm border border-[#D9CEB6]/50">
                    <p className="font-bold text-[#9B2915] mb-1">捶丸 (宋代高尔夫)</p>
                    <p className="leading-normal">手持古木木杆，将特制陶球捶入草中圆洞，极考沉稳心力。</p>
                  </div>
                  <div className="bg-[#FAF8F2] p-2.5 rounded-sm border border-[#D9CEB6]/50">
                    <p className="font-bold text-[#5C7261] mb-1">柚子套圈 (大吉丰收)</p>
                    <p className="leading-normal">以竹藤圈套取地铺的滚圆早香柚，套中者可当场携柚归家。</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Invitation generator scroll section - "生成专属宋韵画卷/邀请函" */}
      <section id="invite" className="py-16 bg-[#FAF8F2] border-b border-[#E2D9C5] px-4 relative">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-[#5C7261] text-xs tracking-[0.3em] font-bold block">CUSTOM CHINESE INVITATION SCROLL</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#2C251E]">定制您专属的 · 宋代风华邀请函</h2>
            <p className="text-sm text-[#5C5346] max-w-xl mx-auto">
              输入您的雅名，挑选一件钟情的宋韵活动，我们将为您生成一份由古法染纸、宣纸大漆和古典名章构筑的绝美电子画轴。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Hand Options Panel */}
            <div className="md:col-span-5 bg-[#EFE9DB] border border-[#DCD2B5] p-6 rounded-md shadow-md space-y-6">
              
              <form onSubmit={handleGenerateInvitation} className="space-y-4">
                
                {/* Visitor Name input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#5C5346] tracking-wider">
                    尊客雅字 / 姓名:
                  </label>
                  <input 
                    type="text" 
                    maxLength={10}
                    placeholder="例如：苏东坡、李清照"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="w-full px-4 py-2 bg-[#FAF8F2] border border-[#D9CEB6] rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-[#9B2915] font-serif text-[#2C251E]"
                  />
                </div>

                {/* Theme Style Chooser */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#5C5346] tracking-wider">
                    挑选宋韵画意风格:
                  </label>
                  <div className="grid grid-cols-1 gap-2.5">
                    
                    <button
                      type="button"
                      onClick={() => { setInvitationTheme('landscape'); sfx.playWoodenBlock(); }}
                      className={`p-3 rounded-sm text-left border text-xs flex justify-between items-center transition-all ${
                        invitationTheme === 'landscape'
                          ? 'border-[#5C7261] bg-[#5C7261]/10 text-[#5C7261] font-bold ring-1 ring-[#5C7261]'
                          : 'border-[#D9CEB6] bg-[#FAF8F2] text-[#8C8273] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="block text-sm">碧水悠悠 (山水寻幽)</span>
                        <span className="text-[10px] opacity-80">宋代温润淡雅风格，重在秀美自然</span>
                      </div>
                      <span className="text-xs bg-[#5C7261]/20 px-2 py-0.5 rounded-sm">寻古</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => { setInvitationTheme('market'); sfx.playWoodenBlock(); }}
                      className={`p-3 rounded-sm text-left border text-xs flex justify-between items-center transition-all ${
                        invitationTheme === 'market'
                          ? 'border-[#9B2915] bg-[#9B2915]/10 text-[#9B2915] font-bold ring-1 ring-[#9B2915]'
                          : 'border-[#D9CEB6] bg-[#FAF8F2] text-[#8C8273] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="block text-sm">锦湾市集 (华灯繁密)</span>
                        <span className="text-[10px] opacity-80">市井烟火气息，展现宋代繁荣之美</span>
                      </div>
                      <span className="text-xs bg-[#9B2915]/20 px-2 py-0.5 rounded-sm">市井</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => { setInvitationTheme('gourmet'); sfx.playWoodenBlock(); }}
                      className={`p-3 rounded-sm text-left border text-xs flex justify-between items-center transition-all ${
                        invitationTheme === 'gourmet'
                          ? 'border-[#D4A350] bg-[#D4A350]/10 text-[#D4A350] font-bold ring-1 ring-[#D4A350]'
                          : 'border-[#D9CEB6] bg-[#FAF8F2] text-[#8C8273] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="block text-sm">宋韵金柚 (舌尖雅集)</span>
                        <span className="text-[10px] opacity-80">尊享朝廷秋贡品鉴格调</span>
                      </div>
                      <span className="text-xs bg-[#D4A350]/20 px-2 py-0.5 rounded-sm">秋贡</span>
                    </button>

                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9B2915] hover:bg-[#802110] text-[#FAF8F2] py-3 rounded-sm text-sm tracking-widest font-sans font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <Sparkles size={16} />
                  <span>挥毫生成专属画卷</span>
                </button>

              </form>

              {/* Toast warning on successful creation */}
              {generationToast && (
                <div className="p-3 bg-[#5C7261]/10 border border-[#5C7261] rounded-sm text-xs text-[#5C7261] flex items-center space-x-2 animate-pulse">
                  <CheckCircle2 size={16} className="shrink-0" />
                  <span>恭喜！专属宋韵画卷已被印盖红泥金章。可在右侧预览。</span>
                </div>
              )}

            </div>

            {/* Right Hand: Gorgeous simulated vertical scroll invitation block */}
            <div className="md:col-span-7 flex justify-center">
              
              {/* Outer paper shadow roll container */}
              <div className="relative w-full max-w-[420px] transition-all duration-700 transform hover:scale-[1.02]">
                
                {/* Scroll Top Roller Bar */}
                <div className="h-6 bg-[#A69376] rounded-t-md mx-4 shadow-md border-b border-[#8C7A5C] relative flex items-center justify-between px-4">
                  <div className="w-2.5 h-2.5 bg-[#4A3D2A] rounded-full" />
                  <div className="h-1 w-24 bg-[#FAF8F2]/30 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-[#4A3D2A] rounded-full" />
                </div>

                {/* The main scroll body mimicking paper color, borders from the uploaded image */}
                <div className={`${themesData[invitationTheme].bgClass} p-8 border-l-4 border-r-4 border-[#A69376] shadow-xl space-y-8 relative overflow-hidden transition-colors duration-500`}>
                  
                  {/* Silk flower border background lines */}
                  <div className="absolute inset-4 border border-[#C8BBA1] pointer-events-none" />
                  <div className="absolute inset-5 border border-[#C8BBA1]/40 pointer-events-none" />

                  {/* Corner floral watermarks */}
                  <div className="absolute top-6 left-6 text-xs text-[#8C8273]/30">❖</div>
                  <div className="absolute top-6 right-6 text-xs text-[#8C8273]/30">❖</div>
                  <div className="absolute bottom-6 left-6 text-xs text-[#8C8273]/30">❖</div>
                  <div className="absolute bottom-6 right-6 text-xs text-[#8C8273]/30">❖</div>

                  {/* Scroll Content layout */}
                  <div className="space-y-6 text-center relative z-10">
                    
                    {/* Header Seal */}
                    <div className="flex justify-between items-center border-b border-[#C8BBA1] pb-3">
                      <span className="text-[10px] tracking-widest text-[#8C8273] font-sans font-bold">2026 碧莲宋韵文化季</span>
                      <div className="border border-[#9B2915] text-[#9B2915] text-[10px] px-2 py-0.5 rounded-sm tracking-widest">
                        温州永嘉
                      </div>
                    </div>

                    {/* Scroll Greeting & calligraphy section */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] text-[#8C8273] tracking-[0.3em] block">HONORABLE INVITATION</span>
                      <h3 className="text-xl md:text-2xl text-[#2C251E] font-bold tracking-widest">
                        {themesData[invitationTheme].title}
                      </h3>
                      <div className="h-0.5 w-12 bg-[#9B2915] mx-auto my-3" />
                    </div>

                    {/* Beautiful Large Vertical Visitor Callout */}
                    <div className="py-4 bg-[#FAF8F2]/50 border border-[#DCD2B5]/50 rounded-sm">
                      <span className="text-xs text-[#8C8273] tracking-widest block mb-2">致尊客 :</span>
                      <span className="text-2xl font-extrabold text-[#2C251E] tracking-widest border-b border-[#9B2915] pb-1 px-4 italic">
                        {isGenerated ? visitorName : "温州墨客"}
                      </span>
                      <span className="text-xs text-[#5C5346] block mt-2 tracking-widest">阁下雅鉴</span>
                    </div>

                    {/* Dynamic Poem generated with elegant vertical writing feel */}
                    <div className="py-4 px-2 text-sm md:text-base text-[#2C251E] leading-loose font-serif font-semibold tracking-widest text-center">
                      <p className="border-r border-[#C8BBA1]/40 px-2 py-1">{themesData[invitationTheme].poem}</p>
                    </div>

                    {/* Interactive Custom Name Stamp Overlay */}
                    <div className="flex justify-center items-center space-x-4 pt-4 border-t border-[#C8BBA1]/40">
                      
                      {/* Left: Stamp of the selected activity type */}
                      <div className={`border-2 border-[#9B2915] text-[#9B2915] p-2 text-xs font-black tracking-widest uppercase rounded-sm transform rotate-[-8deg]`}>
                        {themesData[invitationTheme].seal}
                      </div>

                      {/* Right: Signature customized initials red seal */}
                      <div className="border-4 border-[#9B2915] text-[#9B2915] w-12 h-12 flex items-center justify-center font-black text-center text-sm leading-tight tracking-tighter transform rotate-12 relative shadow-sm">
                        {isGenerated && visitorName ? (
                          <span>{visitorName.slice(0, 2)}<br/>之章</span>
                        ) : (
                          <span>永嘉<br/>之章</span>
                        )}
                        <div className="absolute inset-0 border border-[#9B2915]/30 opacity-45" />
                      </div>

                    </div>

                    {/* Micro location and time info stamp */}
                    <div className="bg-[#FAF8F2]/60 p-2 text-[10px] text-[#8C8273] tracking-widest rounded-sm text-center font-sans">
                      <p>时间：丙申年重阳吉日 10月21日</p>
                      <p className="mt-1">地点：浙江温州 · 永嘉县碧莲镇古街聚贤坊</p>
                    </div>

                  </div>

                </div>

                {/* Scroll Bottom Roller Bar */}
                <div className="h-6 bg-[#A69376] rounded-b-md mx-4 shadow-md border-t border-[#8C7A5C] relative flex items-center justify-between px-4">
                  <div className="w-2.5 h-2.5 bg-[#4A3D2A] rounded-full" />
                  <div className="h-1 w-24 bg-[#FAF8F2]/30 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-[#4A3D2A] rounded-full" />
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Festival Schedule / High density Event Timeline */}
      <section id="schedule" className="py-16 bg-[#EFE9DB] border-b border-[#E2D9C5] px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-[#9B2915] text-xs tracking-[0.3em] font-bold block">FESTIVAL COMPREHENSIVE AGENDA</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#2C251E]">宋韵文化季 · 雅集行事历</h2>
            <p className="text-sm text-[#5C5346] max-w-xl mx-auto">
              碧莲两日欢聚，精彩纷呈。请宾客合理规划出行时间，赏秋景、品柚香、玩雅游、赏古乐。
            </p>
          </div>

          {/* Schedule Filtering Tab Menu */}
          <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto font-sans text-xs tracking-wider">
            <button 
              onClick={() => { setActiveTab('all'); sfx.playWoodenBlock(); }}
              className={`px-4 py-2 rounded-full transition-all border ${
                activeTab === 'all' 
                  ? 'bg-[#9B2915] text-white border-[#9B2915] shadow-sm' 
                  : 'bg-[#FAF8F2] text-[#8C8273] border-[#D9CEB6] hover:bg-[#F2ECE1]'
              }`}
            >
              全部雅集
            </button>
            <button 
              onClick={() => { setActiveTab('ceremony'); sfx.playWoodenBlock(); }}
              className={`px-4 py-2 rounded-full transition-all border ${
                activeTab === 'ceremony' 
                  ? 'bg-[#9B2915] text-white border-[#9B2915] shadow-sm' 
                  : 'bg-[#FAF8F2] text-[#8C8273] border-[#D9CEB6] hover:bg-[#F2ECE1]'
              }`}
            >
              盛典礼仪
            </button>
            <button 
              onClick={() => { setActiveTab('competition'); sfx.playWoodenBlock(); }}
              className={`px-4 py-2 rounded-full transition-all border ${
                activeTab === 'competition' 
                  ? 'bg-[#9B2915] text-white border-[#9B2915] shadow-sm' 
                  : 'bg-[#FAF8F2] text-[#8C8273] border-[#D9CEB6] hover:bg-[#F2ECE1]'
              }`}
            >
              “柚王”评选
            </button>
            <button 
              onClick={() => { setActiveTab('market'); sfx.playWoodenBlock(); }}
              className={`px-4 py-2 rounded-full transition-all border ${
                activeTab === 'market' 
                  ? 'bg-[#9B2915] text-white border-[#9B2915] shadow-sm' 
                  : 'bg-[#FAF8F2] text-[#8C8273] border-[#D9CEB6] hover:bg-[#F2ECE1]'
              }`}
            >
              古街市集
            </button>
            <button 
              onClick={() => { setActiveTab('game'); sfx.playWoodenBlock(); }}
              className={`px-4 py-2 rounded-full transition-all border ${
                activeTab === 'game' 
                  ? 'bg-[#9B2915] text-white border-[#9B2915] shadow-sm' 
                  : 'bg-[#FAF8F2] text-[#8C8273] border-[#D9CEB6] hover:bg-[#F2ECE1]'
              }`}
            >
              传统竞技
            </button>
          </div>

          {/* Time block list (High Density & Beautiful details emulating the layout style in poster) */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredTimeline.map((item, index) => (
              <div 
                key={index}
                className="bg-[#FAF8F2] border border-[#D9CEB6] p-5 rounded-md shadow-sm hover:shadow-md hover:border-[#9B2915]/50 transition-all grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                
                {/* Left Time Column */}
                <div className="md:col-span-3 flex md:flex-col items-center md:items-start space-x-2 md:space-x-0 border-b md:border-b-0 md:border-r border-[#E2D9C5] pb-2 md:pb-0 md:pr-4">
                  <div className="flex items-center space-x-1.5 text-[#9B2915]">
                    <Clock size={14} />
                    <span className="font-bold tracking-wider text-sm">{item.time}</span>
                  </div>
                  <span className="text-[10px] text-[#8C8273] tracking-widest uppercase md:mt-1 font-sans">Time Schedule</span>
                </div>

                {/* Center Content Title */}
                <div className="md:col-span-6 space-y-1">
                  <h4 className="font-bold text-base text-[#2C251E] tracking-wide hover:text-[#9B2915] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5C5346] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Right Location & Tags */}
                <div className="md:col-span-3 text-left md:text-right space-y-1.5 md:pl-4">
                  <div className="flex items-center md:justify-end space-x-1 text-xs text-[#5C7261]">
                    <MapPin size={12} className="shrink-0" />
                    <span className="font-semibold truncate">{item.location}</span>
                  </div>
                  <span className="inline-block bg-[#EFE9DB] text-[#8C8273] text-[9px] px-2 py-0.5 rounded-sm tracking-wider font-sans">
                    {item.tag.toUpperCase()}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Cultural Heritage Highlights / Story Cards Section */}
      <section className="py-16 bg-[#FAF8F2] border-b border-[#E2D9C5] px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-[#5C7261] text-xs tracking-[0.3em] font-bold block">FOLK CULTURE HERITAGE</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#2C251E]">永嘉早香柚 · 越千年而芬芳</h2>
            <p className="text-sm text-[#5C5346] max-w-2xl mx-auto">
              碧莲香柚始种于唐宋年间，曾多次作为朝廷御用岁贡。因果大皮薄、肉质脆嫩、香甜爽口、沁人心脾而驰名海内。
            </p>
          </div>

          {/* Core Spotlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Spotlight 1 */}
            <div className="bg-[#EFE9DB] border border-[#DCD2B5] p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 text-3xl font-bold text-[#D4A350]/20 font-sans">01</div>
              <div className="text-[#9B2915] font-black text-xs tracking-widest mb-3 border-b border-[#9B2915]/20 pb-1.5 uppercase">
                宋朝贡品 · 皇家赞誉
              </div>
              <h4 className="text-lg font-bold text-[#2C251E] tracking-wide mb-2">御书院岁贡录</h4>
              <p className="text-xs text-[#5C5346] leading-relaxed">
                据永嘉县志载，碧莲出产的早香柚在大中祥符年间被列为江东路主要贡品，每逢重阳前后运至汴梁，赐予朝中士大夫与学士品尝。
              </p>
            </div>

            {/* Spotlight 2 */}
            <div className="bg-[#EFE9DB] border border-[#DCD2B5] p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 text-3xl font-bold text-[#5C7261]/20 font-sans">02</div>
              <div className="text-[#5C7261] font-black text-xs tracking-widest mb-3 border-b border-[#5C7261]/20 pb-1.5 uppercase">
                独有水土 · 天赐芬芳
              </div>
              <h4 className="text-lg font-bold text-[#2C251E] tracking-wide mb-2">楠溪江水系灌溉</h4>
              <p className="text-xs text-[#5C5346] leading-relaxed">
                碧莲盆地特有的沙壤土，饱含矿物质。山水环抱所形成的温暖微气候，使每一颗早香柚的皮油腺格外丰盈，未尝其肉，先闻奇香。
              </p>
            </div>

            {/* Spotlight 3 */}
            <div className="bg-[#EFE9DB] border border-[#DCD2B5] p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 text-3xl font-bold text-[#9B2915]/20 font-sans">03</div>
              <div className="text-[#D4A350] font-black text-xs tracking-widest mb-3 border-b border-[#D4A350]/20 pb-1.5 uppercase">
                宋学风雅 · 诗画永嘉
              </div>
              <h4 className="text-lg font-bold text-[#2C251E] tracking-wide mb-2">永嘉学派之风致</h4>
              <p className="text-xs text-[#5C5346] leading-relaxed">
                宋代以叶适等为代表的“永嘉学派”强调务实精神。碧莲百姓世代耕读，精益求精改良柚种，将务实耕作与古典美学极致融合。
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Sponsors & Partner Logos Resembling the poster credits footer */}
      <footer className="bg-[#2C251E] text-[#D9CEB6] py-12 px-4 border-t-2 border-[#9B2915]">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Main credits banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#3E342B] pb-8 items-center text-center md:text-left">
            <div className="space-y-2">
              <span className="font-extrabold text-xl text-[#FAF8F2] tracking-widest">相约碧莲 · 柚见宋韵</span>
              <p className="text-xs text-[#8C8273]">
                2026 第十一届中国早香柚文化节暨文化旅游季
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <div className="border border-[#9B2915] text-[#9B2915] px-3 py-1 text-[10px] tracking-widest rounded-sm font-bold uppercase transform rotate-[-2deg]">
                风雅温州
              </div>
              <div className="border border-[#5C7261] text-[#5C7261] px-3 py-1 text-[10px] tracking-widest rounded-sm font-bold uppercase transform rotate-[2deg]">
                山水永嘉
              </div>
            </div>

            <div className="text-xs md:text-right text-[#8C8273]">
              <p>咨询热线：0577-XXXXXXXX</p>
              <p className="mt-1">地 址：永嘉县碧莲镇人民政府大院</p>
            </div>
          </div>

          {/* Sub-text organization lists matching bottom footer lines of image */}
          <div className="text-center text-[11px] text-[#8C8273] space-y-2">
            <p className="tracking-widest">
              主办单位：永嘉县人民政府
            </p>
            <p className="tracking-wider">
              承办单位：中共永嘉县委宣传部 / 永嘉县农业农村局 / 永嘉县文化和广电旅游体育局 / 温州市楠溪江风景旅游活性发展中心 / 永嘉县文学艺术界联合会 / 碧莲镇人民政府
            </p>
            <p className="text-[10px] text-[#5C5346] pt-4">
              &copy; 2026 永嘉碧莲早香柚文化季筹备委员会. 版权所有. 
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}