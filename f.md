<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WHERE? — Premium Urban Exploration</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Inter & Cabinet Grotesk (simulated via high-end sans-serif display) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;700;800&family=Syncopate:wght@700&display=swap" rel="stylesheet">
    
    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #0f0203; /* Deep obsidian red base */
            overflow-x: hidden;
        }

        .title-display {
            font-family: 'Syncopate', sans-serif;
            letter-spacing: -0.05em;
        }

        /* Ambient glow replication from the source image */
        .glow-soft {
            text-shadow: 0 0 35px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.4);
            filter: blur(1px);
        }

        .crimson-gradient {
            background: radial-gradient(circle at center, #f4212e 0%, #a7000b 50%, #4a0004 100%);
        }

        /* Glassmorphism elements matching premium look */
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .glass-card:hover {
            background: rgba(255, 255, 255, 0.06);
            border-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 20px 40px rgba(229, 9, 20, 0.15);
        }

        /* Interactive slide transitions */
        .slide-pane {
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #120203;
        }
        ::-webkit-scrollbar-thumb {
            background: #e50914;
            border-radius: 3px;
        }

        /* Dynamic keyframes for interactive cursor & subtle breathing glows */
        @keyframes pulseGlow {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            50% { opacity: 0.95; transform: scale(1.03); }
        }
        .breathing-glow {
            animation: pulseGlow 4s infinite ease-in-out;
        }
    </style>
</head>
<body class="text-white selection:bg-white selection:text-red-600">

    <!-- Ambient Grid & Sound Player Overlay -->
    <div class="fixed inset-0 pointer-events-none z-10 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
    
    <!-- Top Progress Bar -->
    <div class="fixed top-0 left-0 right-0 h-[3px] bg-neutral-900 z-50">
        <div id="scrollProgress" class="h-full bg-white w-1/4 transition-all duration-300"></div>
    </div>

    <!-- MAIN NAVBAR (Exact replication of the clean, minimalist inspiration layout) -->
    <header class="fixed top-0 left-0 right-0 z-40 px-6 py-6 md:px-16 md:py-8 flex justify-between items-center mix-blend-difference">
        <!-- Hamburger Menu -->
        <button onclick="toggleMobileNav()" class="flex flex-col gap-1.5 group focus:outline-none z-50" aria-label="Toggle Menu">
            <span class="w-7 h-[2px] bg-white transition-all duration-300 group-hover:w-5"></span>
            <span class="w-5 h-[2px] bg-white transition-all duration-300 group-hover:w-7"></span>
            <span class="w-7 h-[2px] bg-white transition-all duration-300"></span>
        </button>

        <!-- Minimalist Horizontal Navigation -->
        <nav class="hidden md:flex items-center space-x-12 text-xs tracking-[0.25em] font-medium text-neutral-300">
            <a href="#slide-1" onclick="navigateToSlide(1)" class="hover:text-white transition-colors duration-200">HOME</a>
            <a href="#slide-2" onclick="navigateToSlide(2)" class="hover:text-white transition-colors duration-200">OUR BLOG</a>
            <a href="#slide-3" onclick="navigateToSlide(3)" class="hover:text-white transition-colors duration-200">PRODUCTS</a>
            <a href="#slide-4" onclick="navigateToSlide(4)" class="hover:text-white transition-colors duration-200">STORE</a>
            <a href="#contact" onclick="navigateToSlide(4)" class="hover:text-white transition-colors duration-200">CONTACT</a>
        </nav>

        <!-- Search Icon & Custom Theme Switcher -->
        <div class="flex items-center space-x-6">
            <!-- Theme Changer Minimal Button -->
            <button onclick="cycleMood()" class="text-[10px] tracking-widest border border-white/20 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-300 hidden sm:block" id="moodBtn">
                CRIMSON MODE
            </button>
            <button onclick="openSearch()" class="hover:opacity-75 transition-opacity" aria-label="Search">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
        </div>
    </header>

    <!-- SIDE NAVIGATION DOTS (Matches the vertical dot sequence on the left of inspiration image) -->
    <div class="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center space-y-6">
        <button onclick="navigateToSlide(1)" class="dot-nav w-2.5 h-2.5 rounded-full border border-white/50 transition-all duration-300 bg-white" data-index="1"></button>
        <button onclick="navigateToSlide(2)" class="dot-nav w-2.5 h-2.5 rounded-full border border-white/50 transition-all duration-300" data-index="2"></button>
        <button onclick="navigateToSlide(3)" class="dot-nav w-2.5 h-2.5 rounded-full border border-white/50 transition-all duration-300" data-index="3"></button>
        <button onclick="navigateToSlide(4)" class="dot-nav w-2.5 h-2.5 rounded-full border border-white/50 transition-all duration-300" data-index="4"></button>
    </div>

    <!-- SOCIAL INDICATORS (Bottom left matching inspiration layout) -->
    <div class="fixed left-6 md:left-12 bottom-8 z-40 hidden md:flex items-center space-x-6 mix-blend-difference">
        <a href="#" class="hover:opacity-75 transition-opacity duration-200" aria-label="Instagram">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
        <a href="#" class="hover:opacity-75 transition-opacity duration-200" aria-label="Twitter">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
        </a>
        <a href="#" class="hover:opacity-75 transition-opacity duration-200" aria-label="Facebook">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
    </div>

    <!-- MAIN SLIDER CONTAINER -->
    <main class="w-full relative transition-all duration-1000">

        <!-- =============================================
             SLIDE 1: THE INSPIRATION HERO (WHERE?)
             ============================================= -->
        <section id="slide-1" class="slide-pane min-h-screen crimson-gradient flex flex-col justify-between relative px-6 py-24 md:px-24 md:py-32 overflow-hidden">
            <!-- Ambient Spotlight Glow Behind Sneakers -->
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,transparent_60%)] pointer-events-none breathing-glow"></div>
            
            <div class="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full z-20 relative">
                
                <!-- Main Header with Selective Glow Effects -->
                <div class="lg:col-span-12 text-center relative select-none">
                    <h1 class="title-display text-[15vw] sm:text-[14vw] lg:text-[13vw] font-extrabold leading-none tracking-tighter text-white select-none relative z-10">
                        <span class="inline-block glow-soft transform hover:scale-105 transition-transform duration-300">W</span>HERE<span class="inline-block glow-soft transform hover:rotate-3 transition-all duration-300">?</span>
                    </h1>
                </div>

                <!-- Handcrafted Interactive Sneaker SVG (Feet Looking Down Perspective) -->
                <div class="absolute inset-0 flex justify-center items-center pointer-events-none z-0 transform translate-y-24 md:translate-y-32">
                    <div id="parallaxContainer" class="w-full max-w-[500px] h-[500px] transition-transform duration-200 ease-out flex justify-center items-end pb-12">
                        <!-- Left and Right Shoe & Denim SVG Artwork -->
                        <svg class="w-4/5 h-auto filter drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Left Leg (Denim Cuffs) -->
                            <path d="M120 400 L110 260 C110 250 120 235 140 235 L175 235 C190 235 190 255 190 265 L175 400 Z" fill="#1b212c"/>
                            <path d="M115 255 L180 255" stroke="#445577" stroke-width="3" stroke-linecap="round"/>
                            <!-- Left Shoe (Crimson Red Sneaker) -->
                            <path d="M110 260 C110 240 120 150 145 150 C170 150 185 240 185 260 L180 270 L115 270 Z" fill="#c10d18" stroke="#111" stroke-width="2"/>
                            <!-- White Sole Trim -->
                            <path d="M110 258 C115 265 180 265 185 258" stroke="white" stroke-width="5" stroke-linecap="round"/>
                            <!-- Red Laces (Details) -->
                            <path d="M130 180 Q147 185 165 180" stroke="#f23d49" stroke-width="3" stroke-linecap="round"/>
                            <path d="M128 200 Q147 205 167 200" stroke="#f23d49" stroke-width="3" stroke-linecap="round"/>
                            <path d="M126 220 Q147 225 169 220" stroke="#e50914" stroke-width="4" stroke-linecap="round"/>
                            
                            <!-- Right Leg (Denim Cuffs) -->
                            <path d="M280 400 L290 260 C290 250 280 235 260 235 L225 235 C210 235 210 255 210 265 L225 400 Z" fill="#1a202a"/>
                            <path d="M285 255 L220 255" stroke="#445577" stroke-width="3" stroke-linecap="round"/>
                            <!-- Right Shoe (Crimson Red Sneaker) -->
                            <path d="M290 260 C290 240 280 150 255 150 C230 150 215 240 215 260 L220 270 L285 270 Z" fill="#c10d18" stroke="#111" stroke-width="2"/>
                            <!-- White Sole Trim -->
                            <path d="M290 258 C285 265 220 265 215 258" stroke="white" stroke-width="5" stroke-linecap="round"/>
                            <!-- Red Laces -->
                            <path d="M270 180 Q253 185 235 180" stroke="#f23d49" stroke-width="3" stroke-linecap="round"/>
                            <path d="M272 200 Q253 205 233 200" stroke="#f23d49" stroke-width="3" stroke-linecap="round"/>
                            <path d="M274 220 Q253 225 231 220" stroke="#e50914" stroke-width="4" stroke-linecap="round"/>
                            
                            <!-- Sole Tread Highlights -->
                            <path d="M145 148 L150 152" stroke="#fff" stroke-width="3" opacity="0.4"/>
                            <path d="M255 148 L250 152" stroke="#fff" stroke-width="3" opacity="0.4"/>
                        </svg>
                    </div>
                </div>

                <!-- Right Aligned Content Block & Stats (Matches the Inspiration Info Block) -->
                <div class="lg:col-span-4 lg:col-start-9 flex flex-col justify-end items-start text-left mt-40 lg:mt-0 relative z-20">
                    <div class="w-full flex items-baseline space-x-2 border-b border-white/20 pb-4 mb-4">
                        <span class="text-3xl font-extrabold tracking-wider" id="activeSlideNum">02</span>
                        <span class="text-xs text-white/50 tracking-wider">/ 04</span>
                        <!-- Visual Line matching the white indicator line in input image -->
                        <div class="flex-grow h-[1px] bg-white ml-4 opacity-70"></div>
                    </div>
                    
                    <p class="text-xs text-neutral-200 leading-relaxed tracking-wider uppercase opacity-90 max-w-sm mb-6">
                        Explore the unexplored. Stand at the edge of the world and feel the pulse of high-fashion street layout. A collection curated for those who ask the right question: Where?
                    </p>
                    
                    <button onclick="navigateToSlide(2)" class="group flex items-center space-x-3 text-xs tracking-[0.2em] font-bold text-white hover:opacity-80 transition-opacity">
                        <span>READ MORE</span>
                        <svg class="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Scroll Indicator Cue -->
            <div class="w-full flex justify-between items-center z-20 text-[10px] tracking-widest text-white/50 border-t border-white/10 pt-6">
                <span>COORD: 52.5200° N, 13.4050° E</span>
                <span class="animate-bounce">SCROLL TO DISCOVER ↓</span>
                <span>METROPOLIS FLÂNEUR / 2026</span>
            </div>
        </section>

        <!-- =============================================
             SLIDE 2: THE ATMOSPHERIC GRID (02 / 04)
             ============================================= -->
        <section id="slide-2" class="slide-pane min-h-screen bg-[#0a0102] flex flex-col justify-center relative px-6 py-24 md:px-24">
            <div class="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div class="max-w-7xl mx-auto w-full z-10">
                <!-- Header -->
                <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-8">
                    <div>
                        <span class="text-xs tracking-[0.3em] text-red-500 font-bold uppercase">THE GEAR & THE ROAD</span>
                        <h2 class="title-display text-4xl md:text-5xl font-extrabold mt-2">02. CONCEPT GRID</h2>
                    </div>
                    <p class="text-xs text-neutral-400 max-w-md mt-4 md:mt-0 leading-relaxed">
                        Every thread, sole, and coordinate is engineered for the deep city wanderer. We blend visual high-density red design cues with functional durability.
                    </p>
                </div>

                <!-- Showcase Cards Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Card 1 -->
                    <div class="glass-card group p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between h-[450px] relative overflow-hidden">
                        <div class="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl group-hover:bg-red-500/30 transition-all duration-500"></div>
                        <div>
                            <span class="text-xs tracking-widest text-neutral-400">SERIES A</span>
                            <h3 class="text-2xl font-bold mt-2 tracking-tight group-hover:text-red-500 transition-colors">THE STEALTH ANORAK</h3>
                        </div>
                        
                        <!-- Mini Interactive SVG Asset instead of unreliable external img -->
                        <div class="my-6 flex justify-center">
                            <svg class="w-32 h-32 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 100 100" fill="none">
                                <path d="M20 30 L50 15 L80 30 L75 85 L25 85 Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" class="group-hover:stroke-red-500 transition-colors"/>
                                <path d="M50 15 L50 85" stroke="currentColor" stroke-dasharray="3 3" opacity="0.5"/>
                                <rect x="35" y="40" width="30" height="20" rx="4" stroke="currentColor" stroke-width="1.5" class="group-hover:stroke-red-500 transition-colors"/>
                            </svg>
                        </div>

                        <div class="flex justify-between items-center">
                            <span class="text-xs font-mono text-red-500">$340.00</span>
                            <button onclick="openProductModal('Stealth Anorak', '$340.00')" class="text-xs tracking-wider font-bold group-hover:underline">VIEW SPEC</button>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="glass-card group p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between h-[450px] relative overflow-hidden">
                        <div class="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl group-hover:bg-red-500/30 transition-all duration-500"></div>
                        <div>
                            <span class="text-xs tracking-widest text-neutral-400">SERIES B</span>
                            <h3 class="text-2xl font-bold mt-2 tracking-tight group-hover:text-red-500 transition-colors">VANGUARD KICKS v2</h3>
                        </div>
                        
                        <!-- Mini Interactive SVG Asset -->
                        <div class="my-6 flex justify-center">
                            <svg class="w-32 h-32 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 100 100" fill="none">
                                <path d="M15 65 C15 50 30 35 50 35 C70 35 85 55 85 65 L80 75 L20 75 Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" class="group-hover:stroke-red-500 transition-colors"/>
                                <path d="M30 45 L40 55 M45 42 L55 52" stroke="currentColor" stroke-width="2"/>
                                <circle cx="50" cy="55" r="15" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" opacity="0.6"/>
                            </svg>
                        </div>

                        <div class="flex justify-between items-center">
                            <span class="text-xs font-mono text-red-500">$220.00</span>
                            <button onclick="openProductModal('Vanguard Kicks v2', '$220.00')" class="text-xs tracking-wider font-bold group-hover:underline">VIEW SPEC</button>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="glass-card group p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between h-[450px] relative overflow-hidden">
                        <div class="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl group-hover:bg-red-500/30 transition-all duration-500"></div>
                        <div>
                            <span class="text-xs tracking-widest text-neutral-400">SERIES C</span>
                            <h3 class="text-2xl font-bold mt-2 tracking-tight group-hover:text-red-500 transition-colors">TACTICAL MOD PACK</h3>
                        </div>
                        
                        <!-- Mini Interactive SVG Asset -->
                        <div class="my-6 flex justify-center">
                            <svg class="w-32 h-32 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 100 100" fill="none">
                                <rect x="30" y="25" width="40" height="55" rx="5" stroke="currentColor" stroke-width="1.5" class="group-hover:stroke-red-500 transition-colors"/>
                                <path d="M30 40 L70 40 M30 55 L70 55" stroke="currentColor" stroke-width="1"/>
                                <path d="M50 25 L50 15 C50 12, 45 12, 40 15" stroke="currentColor" stroke-width="1.5"/>
                            </svg>
                        </div>

                        <div class="flex justify-between items-center">
                            <span class="text-xs font-mono text-red-500">$185.00</span>
                            <button onclick="openProductModal('Tactical Mod Pack', '$185.00')" class="text-xs tracking-wider font-bold group-hover:underline">VIEW SPEC</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- =============================================
             SLIDE 3: INTERACTIVE EXPEDITION PORTAL (03 / 04)
             ============================================= -->
        <section id="slide-3" class="slide-pane min-h-screen bg-[#070102] flex flex-col justify-center relative px-6 py-24 md:px-24">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(167,0,11,0.15),transparent_60%)] pointer-events-none"></div>
            
            <div class="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Graphic Map Panel (interactive coordinates) -->
                <div class="lg:col-span-7 bg-neutral-950/60 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                    <div class="flex justify-between items-center mb-6">
                        <div class="flex space-x-2">
                            <span class="w-3 h-3 rounded-full bg-red-600"></span>
                            <span class="w-3 h-3 rounded-full bg-neutral-700"></span>
                            <span class="w-3 h-3 rounded-full bg-neutral-700"></span>
                        </div>
                        <span class="text-xs font-mono text-neutral-400">MAP_SYS_GRID v4.11</span>
                    </div>

                    <!-- Glowing Matrix Vector Graphic representing city nodes -->
                    <div class="h-80 w-full relative flex items-center justify-center border border-white/5 bg-[#0e0204] rounded-lg">
                        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(229,9,20,0.1)_0%,transparent_50%)]"></div>
                        <svg class="w-4/5 h-4/5 text-neutral-800" viewBox="0 0 200 100" fill="none">
                            <path d="M10 20 L50 80 L90 10 L130 90 L170 30" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/>
                            <!-- Glowing Node 1 -->
                            <circle cx="50" cy="80" r="5" fill="#e50914" class="animate-ping"/>
                            <circle cx="50" cy="80" r="4" fill="#e50914" class="cursor-pointer" onclick="updateCoordinates('KREUZBERG, BERLIN', '52.4986° N, 13.4069° E')"/>
                            
                            <!-- Glowing Node 2 -->
                            <circle cx="90" cy="10" r="5" fill="#fff" class="animate-ping" style="animation-delay: 1s"/>
                            <circle cx="90" cy="10" r="4" fill="#fff" class="cursor-pointer" onclick="updateCoordinates('SHIBUYA, TOKYO', '35.6580° N, 139.7016° E')"/>

                            <!-- Glowing Node 3 -->
                            <circle cx="130" cy="90" r="5" fill="#e50914" class="animate-ping" style="animation-delay: 2s"/>
                            <circle cx="130" cy="90" r="4" fill="#e50914" class="cursor-pointer" onclick="updateCoordinates('BROOKLYN, NEW YORK', '40.6782° N, 73.9442° W')"/>
                        </svg>

                        <!-- Float Labels -->
                        <span class="absolute top-10 left-10 text-[9px] font-mono tracking-widest text-white/40">NODE_01 // ACTIVE</span>
                        <span class="absolute bottom-12 right-12 text-[9px] font-mono tracking-widest text-red-500/80">NODE_02 // DISCOVERED</span>
                    </div>

                    <!-- Active Coordinate Display Panel -->
                    <div class="mt-6 p-4 bg-red-950/20 border border-red-900/30 rounded-lg flex justify-between items-center">
                        <div>
                            <span class="text-[9px] text-neutral-400 uppercase tracking-widest">Selected Outpost</span>
                            <h4 id="coordName" class="text-sm font-bold tracking-wider text-white">SHIBUYA, TOKYO</h4>
                        </div>
                        <div>
                            <span class="text-[9px] text-neutral-400 uppercase tracking-widest block text-right">Coordinates</span>
                            <span id="coordVal" class="text-xs font-mono text-red-500 font-bold">35.6580° N, 139.7016° E</span>
                        </div>
                    </div>
                </div>

                <!-- Text explanation -->
                <div class="lg:col-span-5 flex flex-col justify-center">
                    <span class="text-xs tracking-[0.3em] text-red-500 font-bold uppercase">THE ATLAS OF RED</span>
                    <h3 class="title-display text-3xl md:text-4xl font-extrabold mt-2 mb-6">WE ARE NOT LOST, WE JUST ASK WHERE.</h3>
                    <p class="text-neutral-300 leading-relaxed text-sm mb-6">
                        Each piece in our collection corresponds to a physical geo-cache drop. By using our interface, collectors unlock real-world exploration points across major urban capitals. Click on the nodes to shift coordinates.
                    </p>
                    <div class="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                        <div>
                            <span class="text-xs font-mono text-red-500 block">4.9/5 RATING</span>
                            <span class="text-[10px] text-neutral-400 tracking-wider">CURATOR ENDORSED</span>
                        </div>
                        <div>
                            <span class="text-xs font-mono text-white block">12 DROPS ALIVE</span>
                            <span class="text-[10px] text-neutral-400 tracking-wider">WORLDWIDE RADAR</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- =============================================
             SLIDE 4: THE LAUNCHPORT & FOOTER (04 / 04)
             ============================================= -->
        <section id="slide-4" class="slide-pane min-h-screen crimson-gradient flex flex-col justify-between relative px-6 py-24 md:px-24">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.4)_0%,transparent_70%)] pointer-events-none"></div>

            <div class="max-w-4xl mx-auto w-full z-10 text-center my-auto">
                <span class="text-xs tracking-[0.4em] text-white/70 font-bold uppercase">JOIN THE RADAR</span>
                <h2 class="title-display text-4xl md:text-6xl font-extrabold mt-4 mb-6 leading-none">BE THE FIRST TO FIND.</h2>
                <p class="text-neutral-200 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
                    Drops occur without warning. Provide your communication portal to receive high-frequency coordinate alerts for upcoming streetwear releases.
                </p>

                <!-- Premium newsletter input & button -->
                <form id="radarForm" onsubmit="handleRadarJoin(event)" class="max-w-md mx-auto flex flex-col sm:flex-row items-stretch gap-2 bg-black/40 p-1.5 rounded-xl border border-white/20">
                    <input type="email" required placeholder="ENTER EMAIL PORTAL" class="bg-transparent text-xs tracking-widest text-white px-4 py-3 flex-grow placeholder:text-neutral-500 focus:outline-none rounded-lg">
                    <button type="submit" class="bg-white text-black hover:bg-red-600 hover:text-white transition-all duration-300 px-6 py-3 rounded-lg text-xs tracking-widest font-extrabold">
                        SECURE ENTRY
                    </button>
                </form>
                
                <p id="successMsg" class="text-xs text-white tracking-widest mt-4 hidden">✓ COMMUNICATIONS PORTAL ESTABLISHED. SHIELD ACTIVE.</p>
            </div>

            <!-- EXTREMELY POLISHED PREMIUM FOOTER -->
            <footer class="w-full border-t border-white/15 pt-8 mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-neutral-300 relative z-10">
                <div class="flex flex-col space-y-4">
                    <span class="title-display text-white font-extrabold tracking-wider">WHERE?</span>
                    <p class="text-neutral-400 text-[11px] leading-relaxed">
                        An architectural design system crafted to explore modern streetwear layout structures, deep hues, and visually dense experiences.
                    </p>
                </div>
                <div>
                    <h5 class="text-white font-bold tracking-widest mb-4 uppercase">Exploration Nodes</h5>
                    <ul class="space-y-2 text-[11px] text-neutral-400">
                        <li><a href="#" class="hover:text-white transition-colors">Berlin Mitte</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Shibuya Shibuya</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Brooklyn Heights</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-white font-bold tracking-widest mb-4 uppercase">The Covenant</h5>
                    <ul class="space-y-2 text-[11px] text-neutral-400">
                        <li><a href="#" class="hover:text-white transition-colors">Terms of Hunt</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Coordinates Policy</a></li>
                    </ul>
                </div>
                <div class="flex flex-col justify-between items-start md:items-end">
                    <span class="text-xs tracking-wider text-white">© 2026 WHERE INT.</span>
                    <span class="text-[10px] text-neutral-500">CURATED HIGH-CONTRAST DESIGN FOR CANVAS</span>
                </div>
            </footer>
        </section>

    </main>

    <!-- MOBILE NAVIGATION OVERLAY -->
    <div id="mobileNav" class="fixed inset-0 bg-[#120203]/95 backdrop-blur-xl z-40 transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col justify-center items-center space-y-8 text-lg tracking-[0.25em]">
        <a href="#slide-1" onclick="toggleMobileNav(); navigateToSlide(1)" class="hover:text-red-500 transition-colors">HOME</a>
        <a href="#slide-2" onclick="toggleMobileNav(); navigateToSlide(2)" class="hover:text-red-500 transition-colors">OUR BLOG</a>
        <a href="#slide-3" onclick="toggleMobileNav(); navigateToSlide(3)" class="hover:text-red-500 transition-colors">PRODUCTS</a>
        <a href="#slide-4" onclick="toggleMobileNav(); navigateToSlide(4)" class="hover:text-red-500 transition-colors">STORE</a>
        <a href="#slide-4" onclick="toggleMobileNav(); navigateToSlide(4)" class="hover:text-red-500 transition-colors">CONTACT</a>
    </div>

    <!-- PRODUCT SPEC MODAL -->
    <div id="specModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden justify-center items-center p-4">
        <div class="bg-neutral-950 border border-white/20 rounded-2xl p-8 max-w-md w-full relative">
            <button onclick="closeProductModal()" class="absolute top-4 right-4 text-white hover:text-red-500 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <span class="text-xs text-red-500 tracking-widest uppercase font-bold">PRODUCT DOSSIER</span>
            <h3 id="modalProductName" class="text-2xl font-black tracking-tight text-white mt-2 mb-4">PRODUCT SPECIFICATION</h3>
            <p id="modalProductPrice" class="text-xl font-mono text-red-500 mb-6"></p>
            <div class="space-y-4 border-t border-white/10 pt-4 text-xs text-neutral-300">
                <p><strong>Composition:</strong> Engineered waterproof cordura weaves, organic high-retention insulation linings.</p>
                <p><strong>Origin:</strong> Manufactured under custom visual-grade standards.</p>
                <p><strong>Collector Rarity:</strong> Limited Run drop of 100 copies.</p>
            </div>
            <button onclick="closeProductModal()" class="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest py-3 mt-6 rounded-lg transition-colors">
                ACQUIRE FROM DEEP WEB
            </button>
        </div>
    </div>

    <!-- SEARCH OVERLAY -->
    <div id="searchOverlay" class="fixed inset-0 z-50 bg-[#0f0203]/95 hidden flex-col justify-center items-center px-6">
        <button onclick="closeSearch()" class="absolute top-8 right-8 text-white hover:text-red-500 transition-colors">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div class="w-full max-w-xl">
            <input type="text" placeholder="QUERY COORDINATES..." class="w-full bg-transparent text-3xl font-bold tracking-widest text-white border-b-2 border-red-600 focus:outline-none pb-4 text-center placeholder:text-neutral-800">
            <p class="text-[10px] text-neutral-400 mt-4 text-center tracking-widest">PRESS ENTER TO INITIALIZE SYSTEM SCAN</p>
        </div>
    </div>

    <!-- AUDIO PLAYER ELEMENT (Muted, interactive atmospheric touch) -->
    <div class="fixed right-6 bottom-8 z-40 flex items-center space-x-3 bg-black/60 px-4 py-2 rounded-full border border-white/15 backdrop-blur-md">
        <span class="text-[9px] font-mono tracking-widest text-white/50">AUDIO BEAT // PULSE</span>
        <button onclick="toggleAudio()" class="w-6 h-6 rounded-full bg-white text-black hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors">
            <span id="audioStatus" class="text-xs">▶</span>
        </button>
        <audio id="ambientAudio" loop src="https://assets.mixkit.co/active_storage/sfx/2869/2869-84.wav"></audio>
    </div>

    <!-- JS INTERACTIONS -->
    <script>
        // Track mood states
        let currentMood = 0;
        const moods = [
            { name: "CRIMSON INFERNO", grad: "radial-gradient(circle at center, #f4212e 0%, #a7000b 50%, #4a0004 100%)", text: "#fff" },
            { name: "DEEP OBSIDIAN", grad: "radial-gradient(circle at center, #3a0004 0%, #1e0002 50%, #000000 100%)", text: "#ff3333" },
            { name: "NEON SIGNAL", grad: "radial-gradient(circle at center, #ff0055 0%, #770022 50%, #220005 100%)", text: "#fff" }
        ];

        function cycleMood() {
            currentMood = (currentMood + 1) % moods.length;
            const mood = moods[currentMood];
            
            // Apply gradient dynamically to slides
            document.querySelectorAll('.crimson-gradient').forEach(el => {
                el.style.background = mood.grad;
            });
            
            document.getElementById('moodBtn').innerText = mood.name;
        }

        // Active Slide Transition System
        let activeSlide = 1;
        const totalSlides = 4;

        function navigateToSlide(index) {
            activeSlide = index;
            document.getElementById(`slide-${index}`).scrollIntoView({ behavior: 'smooth' });
            
            // Update Side Nav Indicators
            document.querySelectorAll('.dot-nav').forEach((dot) => {
                const dotIndex = parseInt(dot.getAttribute('data-index'));
                if (dotIndex === index) {
                    dot.classList.add('bg-white', 'w-3.5', 'h-3.5');
                    dot.classList.remove('w-2.5', 'h-2.5');
                } else {
                    dot.classList.remove('bg-white', 'w-3.5', 'h-3.5');
                    dot.classList.add('w-2.5', 'h-2.5');
                }
            });

            // Update Dynamic Indicator Counter
            document.getElementById('activeSlideNum').innerText = `0${index}`;

            // Update top progress bar
            const progress = (index / totalSlides) * 100;
            document.getElementById('scrollProgress').style.width = `${progress}%`;
        }

        // Update active slide counter when user scrolls manually
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY + (window.innerHeight / 2);
            for (let i = 1; i <= totalSlides; i++) {
                const el = document.getElementById(`slide-${i}`);
                if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
                    if (activeSlide !== i) {
                        navigateToSlide(i);
                    }
                    break;
                }
            }
        });

        // Mouse Parallax movement to replicate feet looking down perspective perfectly
        const container = document.getElementById('parallaxContainer');
        window.addEventListener('mousemove', (e) => {
            if (activeSlide === 1) {
                const x = (e.clientX - window.innerWidth / 2) / 35;
                const y = (e.clientY - window.innerHeight / 2) / 35;
                container.style.transform = `translate(${x}px, ${y}px)`;
            }
        });

        // Mobile Nav Toggle
        function toggleMobileNav() {
            const nav = document.getElementById('mobileNav');
            if (nav.classList.contains('translate-x-full')) {
                nav.classList.remove('translate-x-full');
            } else {
                nav.classList.add('translate-x-full');
            }
        }

        // Coordinates System Node Changer
        function updateCoordinates(name, val) {
            document.getElementById('coordName').innerText = name;
            document.getElementById('coordVal').innerText = val;
        }

        // Spec Modal
        function openProductModal(name, price) {
            document.getElementById('modalProductName').innerText = name;
            document.getElementById('modalProductPrice').innerText = price;
            document.getElementById('specModal').classList.remove('hidden');
            document.getElementById('specModal').classList.add('flex');
        }

        function closeProductModal() {
            document.getElementById('specModal').classList.add('hidden');
            document.getElementById('specModal').classList.remove('flex');
        }

        // Search Overlay
        function openSearch() {
            document.getElementById('searchOverlay').classList.remove('hidden');
            document.getElementById('searchOverlay').classList.add('flex');
        }

        function closeSearch() {
            document.getElementById('searchOverlay').classList.add('hidden');
            document.getElementById('searchOverlay').classList.remove('flex');
        }

        // Audio System Toggle
        function toggleAudio() {
            const audio = document.getElementById('ambientAudio');
            const status = document.getElementById('audioStatus');
            if (audio.paused) {
                audio.play();
                status.innerText = "■";
            } else {
                audio.pause();
                status.innerText = "▶";
            }
        }

        // Handle Newsletter / Radar Join
        function handleRadarJoin(e) {
            e.preventDefault();
            document.getElementById('successMsg').classList.remove('hidden');
            document.getElementById('radarForm').reset();
        }

        // Initialize view state
        navigateToSlide(1);
    </script>
</body>
</html>
2
import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, 
  Battery, 
  Shield, 
  Navigation, 
  Layers, 
  Sliders, 
  Zap, 
  Play, 
  X, 
  Check, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Activity, 
  RotateCcw,
  Volume2,
  VolumeX,
  Gauge
} from 'lucide-react';

export default function App() {
  // --- States for Configurator and HUD ---
  const [activeModule, setActiveModule] = useState('commute'); // commute, cargo, minimal, shopping
  const [scooterColor, setScooterColor] = useState('slate'); // slate, copper, obsidian
  const [headlightsOn, setHeadlightsOn] = useState(true);
  const [scooterPower, setScooterPower] = useState(true);
  const [speedMode, setSpeedMode] = useState('city'); // eco, city, sport
  const [playbackActive, setPlaybackActive] = useState(false);
  const [audioMuted, setAudioMuted] = useState(true);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Specs estimation calculators
  const getSpecs = () => {
    let baseSpeed = 15; // mph
    let baseRange = 28; // miles
    let baseWeight = 24; // lbs

    if (speedMode === 'eco') { baseSpeed = 12; baseRange = 36; }
    if (speedMode === 'sport') { baseSpeed = 24; baseRange = 18; }

    if (activeModule === 'cargo') { baseRange -= 3; baseWeight += 6; }
    if (activeModule === 'shopping') { baseRange -= 2; baseWeight += 4; }
    if (activeModule === 'commute') { baseWeight += 2; }

    return { speed: baseSpeed, range: baseRange, weight: baseWeight };
  };

  const currentSpecs = getSpecs();

  // Animation simulation for dynamic canvas dashboard (Telemetry)
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let points = [];
    const maxPoints = 40;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight || 150;
    };
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const step = 20;
      for (let i = 0; i < canvas.width; i += step) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += step) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      if (scooterPower) {
        // Add new point
        const speedMultiplier = speedMode === 'sport' ? 2.5 : speedMode === 'city' ? 1.5 : 0.8;
        const targetVal = canvas.height / 2 + Math.sin(Date.now() * 0.005 * speedMultiplier) * (20 * speedMultiplier);
        points.push(targetVal);
        if (points.length > maxPoints) points.shift();

        // Draw telemetry line
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(241, 164, 126, 0.85)'; // Copper color
        ctx.lineWidth = 2;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(241, 164, 126, 0.5)';
        
        for (let i = 0; i < points.length; i++) {
          const x = (canvas.width / (maxPoints - 1)) * i;
          const y = points[i];
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0; // Reset shadow

        // Fill area below
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'rgba(241, 164, 126, 0.15)');
        gradient.addColorStop(1, 'rgba(241, 164, 126, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [scooterPower, speedMode]);

  return (
    <div className="min-h-screen bg-[#1c2226] text-[#dfedf5] font-sans overflow-x-hidden selection:bg-[#f1a47e] selection:text-[#1c2226] relative">
      
      {/* Cinematic Ambient Backdrop Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(241,164,126,0.06)_0%,rgba(28,34,38,0)_70%)] pointer-events-none z-0" />
      <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(241,164,126,0.04)_0%,rgba(28,34,38,0)_80%)] pointer-events-none z-0" />
      <div className="absolute bottom-[300px] left-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(143,163,173,0.03)_0%,rgba(28,34,38,0)_80%)] pointer-events-none z-0" />

      {/* --- PRESETS CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- NAVBAR --- */}
        <header className="py-6 sm:py-8 border-b border-white/[0.04] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f1a47e] animate-pulse shadow-[0_0_8px_#f1a47e]"></span>
            <span className="font-bold tracking-[0.25em] text-white uppercase text-sm sm:text-base">Phenomenon</span>
          </div>

          <nav className="hidden md:flex items-center space-x-10 text-xs tracking-widest text-[#8fa3ad]/80 uppercase">
            <a href="#overview" className="hover:text-white transition-colors duration-300">Overview</a>
            <a href="#modular" className="hover:text-white transition-colors duration-300">Modular Deck</a>
            <a href="#tech" className="hover:text-white transition-colors duration-300">Cockpit HUD</a>
            <a href="#specs" className="hover:text-white transition-colors duration-300">Technical Specs</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-white/[0.03] rounded-full border border-white/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]"></span>
              <span className="text-[10px] tracking-widest text-[#8fa3ad] uppercase">NIO Pal Lab</span>
            </div>
            <a 
              href="#preorder" 
              className="px-5 py-2.5 text-xs tracking-widest uppercase font-semibold text-[#1c2226] bg-[#f1a47e] rounded-full hover:bg-white hover:text-[#1c2226] transition-all duration-300 shadow-[0_4px_20px_rgba(241,164,126,0.15)]"
            >
              Reserve
            </a>
          </div>
        </header>

        {/* --- HERO SECTION --- */}
        <section id="overview" className="pt-8 sm:pt-16 pb-20 relative min-h-[90vh] flex flex-col justify-between">
          
          {/* Top Hero Info Layer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-6">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8fa3ad]/60 flex items-center gap-2">
                  <span>Project Line</span>
                  <span className="w-6 h-[1px] bg-white/20"></span>
                </div>
                <h3 className="text-sm font-semibold tracking-widest text-white mt-1">Year — 2026</h3>
              </div>
              <div className="border-l border-white/[0.06] pl-4 py-1">
                <p className="text-xs sm:text-sm text-[#8fa3ad]/80 leading-relaxed font-light">
                  We believe the future is autonomous, highly modular, and deeply integrated with intelligent ecosystems.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              {/* Dynamic Status Badges */}
              <div className="flex items-center space-x-4 bg-white/[0.02] border border-white/[0.05] rounded-full p-1.5 px-4 text-[10px] tracking-widest uppercase text-[#8fa3ad]">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f1a47e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f1a47e]"></span>
                </span>
                <span>Active Status: Configurator Live</span>
              </div>
            </div>

            <div className="lg:col-span-3 lg:text-right space-y-2">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#8fa3ad]/60 block">Pagination</span>
              <div className="flex items-center lg:justify-end space-x-4">
                <span className="text-xs tracking-widest text-white font-mono">01 — 05</span>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full border border-[#f1a47e] p-[2px] flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-[#f1a47e]"></span>
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Interactive Centerpiece & Large Background Typography */}
          <div className="relative flex flex-col items-center justify-center my-8 py-10">
            {/* Giant Background 'Pal' Text with Premium Outline & Blur Mask */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
              <h1 className="text-[25vw] md:text-[20vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/[0.04] to-transparent tracking-tighter leading-none select-none">
                Pal
              </h1>
            </div>

            {/* Glowing Accent Studio Light Behind Vehicle */}
            <div className="absolute w-[300px] sm:w-[450px] h-[150px] sm:h-[220px] bg-[#f1a47e]/10 rounded-full blur-[80px] pointer-events-none z-0 mt-20" />

            {/* Dynamic Vector/SVG Illustration of the NIO PAL scooter */}
            <div className="relative w-full max-w-[580px] h-[340px] z-10 flex items-center justify-center transition-all duration-500">
              <svg viewBox="0 0 600 400" className="w-full h-full drop-shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                {/* Ground Shadow */}
                <ellipse cx="300" cy="360" rx="220" ry="25" fill="black" opacity="0.45" filter="blur(15px)" />
                <ellipse cx="180" cy="355" rx="55" ry="10" fill="black" opacity="0.3" filter="blur(8px)" />
                <ellipse cx="420" cy="355" rx="55" ry="10" fill="black" opacity="0.3" filter="blur(8px)" />

                {/* Left (Front) Wheels Setup */}
                <g id="front-left-wheel">
                  <ellipse cx="180" cy="340" rx="36" ry="36" fill="#14191c" stroke="#252d33" strokeWidth="4" />
                  <ellipse cx="180" cy="340" rx="24" ry="24" fill={scooterColor === 'slate' ? '#2e3a42' : scooterColor === 'copper' ? '#3d2f2b' : '#171717'} />
                  {/* Glowing Rim Accents (Copper vibe) */}
                  <ellipse cx="180" cy="340" rx="20" ry="20" fill="none" stroke="#f1a47e" strokeWidth="1.5" strokeDasharray="15 8" className="animate-[spin_20s_linear_infinite]" />
                  <circle cx="180" cy="340" r="10" fill="#111" />
                  <circle cx="180" cy="340" r="4" fill="#f1a47e" />
                </g>

                <g id="front-right-wheel">
                  <ellipse cx="230" cy="345" rx="24" ry="24" fill="#14191c" stroke="#252d33" strokeWidth="3" />
                  <ellipse cx="230" cy="345" rx="16" ry="16" fill={scooterColor === 'slate' ? '#2e3a42' : scooterColor === 'copper' ? '#3d2f2b' : '#171717'} />
                  <ellipse cx="230" cy="345" rx="13" ry="13" fill="none" stroke="#f1a47e" strokeWidth="1" strokeDasharray="10 5" className="animate-[spin_15s_linear_infinite]" />
                  <circle cx="230" cy="345" r="3" fill="#f1a47e" />
                </g>

                {/* Rear Wheels Setup */}
                <g id="rear-left-wheel">
                  <ellipse cx="420" cy="335" rx="34" ry="34" fill="#14191c" stroke="#252d33" strokeWidth="4" />
                  <ellipse cx="420" cy="335" rx="22" ry="22" fill={scooterColor === 'slate' ? '#2e3a42' : scooterColor === 'copper' ? '#3d2f2b' : '#171717'} />
                  <ellipse cx="420" cy="335" rx="18" ry="18" fill="none" stroke="#f1a47e" strokeWidth="1.5" strokeDasharray="18 6" className="animate-[spin_25s_linear_infinite_reverse]" />
                  <circle cx="420" cy="335" r="4" fill="#f1a47e" />
                </g>

                <g id="rear-right-wheel">
                  <ellipse cx="460" cy="340" rx="22" ry="22" fill="#14191c" stroke="#252d33" strokeWidth="3" />
                  <circle cx="460" cy="340" r="3" fill="#f1a47e" />
                </g>

                {/* Suspension Arms / Chassis Bottom */}
                <path d="M 180,340 L 300,342 L 420,335" fill="none" stroke="#333d45" strokeWidth="10" strokeLinecap="round" />
                <path d="M 230,345 L 300,342 L 460,340" fill="none" stroke="#252d2f" strokeWidth="6" strokeLinecap="round" />

                {/* Deck - Premium curved wood/carbon-like platform */}
                <path d="M 220,315 Q 310,295 440,310 L 450,320 L 210,325 Z" fill="#b09282" /> {/* Wood side veneer */}
                <path d="M 220,315 Q 310,295 440,310 L 435,315 Q 310,300 220,320 Z" fill="#2d3338" /> {/* Inset rubber grip padding */}

                {/* Front Steering Neck */}
                <path d="M 240,315 L 265,150 Q 270,120 270,100" fill="none" stroke={scooterColor === 'slate' ? '#46535c' : scooterColor === 'copper' ? '#c4896e' : '#292e33'} strokeWidth="18" strokeLinecap="round" />
                <path d="M 243,315 L 268,150 Q 273,120 273,100" fill="none" stroke="white" strokeWidth="2" opacity="0.15" /> {/* Light highlight line */}

                {/* Handlebars with integrated glowing elements */}
                <path d="M 220,95 L 320,95" fill="none" stroke="#1f2429" strokeWidth="8" strokeLinecap="round" />
                <path d="M 260,95 L 280,95" fill="none" stroke="#f1a47e" strokeWidth="10" strokeLinecap="round" /> {/* Center stem mount */}
                {/* Glow headlight bar */}
                {headlightsOn && (
                  <path d="M 220,95 L 320,95" fill="none" stroke="#f1a47e" strokeWidth="2" opacity="0.6" filter="blur(2px)" />
                )}

                {/* --- MODULAR SWAPPABLE ACCESSORIES (DYNAMIC MOUNT) --- */}
                {activeModule === 'commute' && (
                  <g id="commute-backpack-bag">
                    {/* Shadow underneath */}
                    <rect x="238" y="115" width="58" height="100" rx="14" fill="black" opacity="0.25" filter="blur(4px)" />
                    {/* Backpack Base */}
                    <rect x="240" y="110" width="54" height="96" rx="12" fill="#323c42" stroke="#48565e" strokeWidth="2" />
                    {/* Dark textile panel */}
                    <rect x="246" y="116" width="42" height="84" rx="8" fill="#1e2428" />
                    {/* Brand glowing emblem in center */}
                    <circle cx="267" cy="155" r="5" fill="#f1a47e" className="animate-pulse" />
                    <line x1="262" y1="155" x2="272" y2="155" stroke="#f1a47e" strokeWidth="1" />
                    <line x1="267" y1="150" x2="267" y2="160" stroke="#f1a47e" strokeWidth="1" />
                    {/* Tiny modular clip/buckle indicator */}
                    <rect x="257" y="198" width="20" height="6" rx="2" fill="#14191c" />
                  </g>
                )}

                {activeModule === 'cargo' && (
                  <g id="cargo-crate">
                    {/* Strong industrial-like carry container */}
                    <rect x="228" y="120" width="76" height="110" rx="6" fill="#252d32" stroke="#36434a" strokeWidth="3" />
                    {/* Corner protective reinforcement */}
                    <path d="M 228,126 L 228,120 L 234,120 M 304,126 L 304,120 L 298,120" fill="none" stroke="#f1a47e" strokeWidth="3" />
                    {/* Horizontal grip ridges */}
                    <line x1="236" y1="140" x2="296" y2="140" stroke="#161a1d" strokeWidth="4" />
                    <line x1="236" y1="155" x2="296" y2="155" stroke="#161a1d" strokeWidth="4" />
                    <line x1="236" y1="170" x2="296" y2="170" stroke="#161a1d" strokeWidth="4" />
                    <line x1="236" y1="185" x2="296" y2="185" stroke="#161a1d" strokeWidth="4" />
                    {/* Bright copper secure buckle */}
                    <rect x="260" y="215" width="12" height="18" rx="2" fill="#f1a47e" />
                  </g>
                )}

                {activeModule === 'shopping' && (
                  <g id="shopping-basket">
                    {/* Sleek metallic wire grid basket */}
                    <path d="M 225,120 L 295,120 L 285,210 L 235,210 Z" fill="#1b2124" opacity="0.8" />
                    {/* Wire outlines */}
                    <path d="M 225,120 L 295,120 L 285,210 L 235,210 Z" fill="none" stroke="#48565e" strokeWidth="3" />
                    {/* Vertical wires */}
                    <line x1="240" y1="120" x2="246" y2="210" stroke="#48565e" strokeWidth="1.5" />
                    <line x1="252" y1="120" x2="257" y2="210" stroke="#48565e" strokeWidth="1.5" />
                    <line x1="264" y1="120" x2="267" y2="210" stroke="#48565e" strokeWidth="1.5" />
                    <line x1="276" y1="120" x2="277" y2="210" stroke="#48565e" strokeWidth="1.5" />
                    <line x1="288" y1="120" x2="287" y2="210" stroke="#48565e" strokeWidth="1.5" />
                    {/* Sleek Copper Carry Strap */}
                    <path d="M 225,120 Q 260,90 295,120" fill="none" stroke="#f1a47e" strokeWidth="2.5" />
                  </g>
                )}

                {activeModule === 'minimal' && (
                  <g id="minimal-plate">
                    {/* Low-profile tech console plate with integrated LED strip */}
                    <path d="M 258,110 L 278,110 L 275,220 L 261,220 Z" fill="#20272c" />
                    <line x1="268" y1="120" x2="268" y2="210" stroke="#f1a47e" strokeWidth="2.5" strokeDasharray="8 8" className="animate-pulse" />
                  </g>
                )}

                {/* Headlight beam vector overlay (glowing ambiance) */}
                {headlightsOn && (
                  <polygon points="220,95 80,180 80,110" fill="url(#headlight-gradient)" opacity="0.22" />
                )}

                {/* Helper definitions for gradient glowing effects */}
                <defs>
                  <linearGradient id="headlight-gradient" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f1a47e" />
                    <stop offset="100%" stopColor="#1c2226" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Absolute Position Accessories Swap Trigger Badges on Hover Visualizer */}
              <div className="absolute top-1/2 left-4 md:left-[-20px] -translate-y-1/2 flex flex-col space-y-2">
                <button 
                  onClick={() => setActiveModule('commute')} 
                  className={`p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all duration-300 w-36 ${
                    activeModule === 'commute' 
                      ? 'bg-[#f1a47e]/10 border-[#f1a47e] text-white' 
                      : 'bg-white/[0.02] border-white/5 text-[#8fa3ad]/60 hover:border-white/10 hover:text-[#8fa3ad]'
                  }`}
                >
                  <span>Commute Bag</span>
                  <span className={`w-2 h-2 rounded-full ${activeModule === 'commute' ? 'bg-[#f1a47e]' : 'bg-white/10'}`}></span>
                </button>
                <button 
                  onClick={() => setActiveModule('cargo')} 
                  className={`p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all duration-300 w-36 ${
                    activeModule === 'cargo' 
                      ? 'bg-[#f1a47e]/10 border-[#f1a47e] text-white' 
                      : 'bg-white/[0.02] border-white/5 text-[#8fa3ad]/60 hover:border-white/10 hover:text-[#8fa3ad]'
                  }`}
                >
                  <span>Cargo Crate</span>
                  <span className={`w-2 h-2 rounded-full ${activeModule === 'cargo' ? 'bg-[#f1a47e]' : 'bg-white/10'}`}></span>
                </button>
                <button 
                  onClick={() => setActiveModule('shopping')} 
                  className={`p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all duration-300 w-36 ${
                    activeModule === 'shopping' 
                      ? 'bg-[#f1a47e]/10 border-[#f1a47e] text-white' 
                      : 'bg-white/[0.02] border-white/5 text-[#8fa3ad]/60 hover:border-white/10 hover:text-[#8fa3ad]'
                  }`}
                >
                  <span>Tech Basket</span>
                  <span className={`w-2 h-2 rounded-full ${activeModule === 'shopping' ? 'bg-[#f1a47e]' : 'bg-white/10'}`}></span>
                </button>
                <button 
                  onClick={() => setActiveModule('minimal')} 
                  className={`p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all duration-300 w-36 ${
                    activeModule === 'minimal' 
                      ? 'bg-[#f1a47e]/10 border-[#f1a47e] text-white' 
                      : 'bg-white/[0.02] border-white/5 text-[#8fa3ad]/60 hover:border-white/10 hover:text-[#8fa3ad]'
                  }`}
                >
                  <span>Minimalist</span>
                  <span className={`w-2 h-2 rounded-full ${activeModule === 'minimal' ? 'bg-[#f1a47e]' : 'bg-white/10'}`}></span>
                </button>
              </div>

              {/* Absolute Position Chassis Color Selectors */}
              <div className="absolute top-1/2 right-4 md:right-[-20px] -translate-y-1/2 flex flex-col items-center space-y-3 bg-[#242b30]/65 backdrop-blur-md p-3 rounded-2xl border border-white/[0.05]">
                <span className="text-[9px] tracking-widest text-[#8fa3ad]/60 uppercase rotate-90 my-3">Color</span>
                <button 
                  onClick={() => setScooterColor('slate')} 
                  className={`w-5 h-5 rounded-full bg-[#46535c] border-2 transition-transform duration-200 ${scooterColor === 'slate' ? 'border-[#f1a47e] scale-125' : 'border-transparent'}`}
                  title="Chamber Slate"
                />
                <button 
                  onClick={() => setScooterColor('copper')} 
                  className={`w-5 h-5 rounded-full bg-[#c4896e] border-2 transition-transform duration-200 ${scooterColor === 'copper' ? 'border-[#f1a47e] scale-125' : 'border-transparent'}`}
                  title="Copper Dust"
                />
                <button 
                  onClick={() => setScooterColor('obsidian')} 
                  className={`w-5 h-5 rounded-full bg-[#1c1c1c] border-2 transition-transform duration-200 ${scooterColor === 'obsidian' ? 'border-[#f1a47e] scale-125' : 'border-transparent'}`}
                  title="Obsidian Core"
                />
              </div>
            </div>

            {/* Quick Control Bar Overlay below vehicle */}
            <div className="flex items-center space-x-6 mt-4 z-10 bg-white/[0.02] border border-white/[0.05] p-3 rounded-2xl backdrop-blur-md">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-[#8fa3ad]/70 tracking-wider">Headlight:</span>
                <button 
                  onClick={() => setHeadlightsOn(!headlightsOn)}
                  className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${headlightsOn ? 'bg-[#f1a47e]' : 'bg-white/10'}`}
                >
                  <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-[#1c2226] shadow ring-0 transition duration-200 ease-in-out ${headlightsOn ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              <div className="h-4 w-[1px] bg-white/10"></div>

              <div className="flex items-center space-x-2">
                <span className="text-xs text-[#8fa3ad]/70 tracking-wider">Smart Mode:</span>
                <div className="flex space-x-1 bg-black/20 p-0.5 rounded-lg border border-white/[0.03]">
                  {['eco', 'city', 'sport'].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setSpeedMode(mode)}
                      className={`px-2 py-1 text-[9px] uppercase tracking-widest rounded-md transition-all duration-200 ${
                        speedMode === mode ? 'bg-[#f1a47e] text-[#1c2226] font-bold' : 'text-[#8fa3ad]/60 hover:text-white'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lower Hero Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-white/[0.04] pt-8">
            <div className="md:col-span-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mb-2">A Smarter Last Mile</h2>
              <p className="text-xs sm:text-sm text-[#8fa3ad]/70 leading-relaxed max-w-sm font-light">
                Pal is a near-future prototype for an intelligent, modular personal transport system that embraces AI and machine learning to offer flexible "last mile" transit, tailored for Chinese electric vehicle pioneer NIO.
              </p>
            </div>

            {/* Simulated Live Specs Panel */}
            <div className="md:col-span-5 grid grid-cols-3 gap-4 border-l border-r border-white/[0.04] px-0 md:px-8">
              <div className="text-center md:text-left">
                <span className="text-[10px] tracking-widest uppercase text-[#8fa3ad]/50 block">Est. Range</span>
                <span className="text-2xl sm:text-3xl font-light text-white font-mono mt-1 block">
                  {currentSpecs.range}<span className="text-xs text-[#f1a47e] ml-1">mi</span>
                </span>
                <span className="text-[9px] text-[#8fa3ad]/40 font-mono mt-0.5 block">at 96% battery</span>
              </div>
              <div className="text-center md:text-left">
                <span className="text-[10px] tracking-widest uppercase text-[#8fa3ad]/50 block">Max Speed</span>
                <span className="text-2xl sm:text-3xl font-light text-white font-mono mt-1 block">
                  {currentSpecs.speed}<span className="text-xs text-[#f1a47e] ml-1">mph</span>
                </span>
                <span className="text-[9px] text-[#8fa3ad]/40 font-mono mt-0.5 block">smart regulated</span>
              </div>
              <div className="text-center md:text-left">
                <span className="text-[10px] tracking-widest uppercase text-[#8fa3ad]/50 block">Chassis Wt.</span>
                <span className="text-2xl sm:text-3xl font-light text-white font-mono mt-1 block">
                  {currentSpecs.weight}<span className="text-xs text-[#f1a47e] ml-1">lbs</span>
                </span>
                <span className="text-[9px] text-[#8fa3ad]/40 font-mono mt-0.5 block">carbon-fiber core</span>
              </div>
            </div>

            {/* Interactive Video Playback Trigger */}
            <div className="md:col-span-3 flex justify-start md:justify-end">
              <div className="relative group cursor-pointer w-full max-w-[240px]" onClick={() => setPlaybackActive(true)}>
                <div className="h-24 w-full bg-[#242b30] rounded-xl overflow-hidden relative border border-white/[0.05] transition-transform duration-300 group-hover:scale-[1.02]">
                  {/* Fake animated landscape simulation background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 to-slate-800 opacity-90" />
                  {/* Subtle vector terrain or abstract lines */}
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-[#f1a47e]/10 blur-md animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-[#1c2226]/80 flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-[#f1a47e] group-hover:border-transparent">
                      <Play className="w-4 h-4 text-white group-hover:text-[#1c2226] translate-x-0.5" />
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] tracking-widest text-[#8fa3ad] uppercase">Watch Lab Flight</span>
                  <span className="text-[9px] text-[#8fa3ad]/40 font-mono">1:40 min</span>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* --- MODULAR SPEC SECTION (THE DESIGN SYSTEM IN ACTION) --- */}
        <section id="modular" className="py-24 border-t border-white/[0.04] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold tracking-[0.3em] text-[#f1a47e] uppercase block">Modular Integration</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
                  Adapts To Your Day,<br />Not The Other Way.
                </h2>
              </div>
              
              <p className="text-sm sm:text-base text-[#8fa3ad]/80 leading-relaxed font-light">
                Various accessories — bag, basket, shopping cart — can be effortlessly affixed to the front of PAL, locking into the structural smart neck with magnetic power connectors to power any integrated display screens and dynamic locking sensors.
              </p>

              {/* Advanced Tech details list with custom indicators */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] mt-1">
                    <Layers className="w-4 h-4 text-[#f1a47e]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wide">Magnetic Docking Hub (NIO Lock™)</h4>
                    <p className="text-xs text-[#8fa3ad]/70 mt-0.5 leading-relaxed">
                      Instant accessory swapping. Dynamic sensors identify the attached module and automatically recalibrate balance, acceleration profiles, and dashboard UI layouts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] mt-1">
                    <Cpu className="w-4 h-4 text-[#f1a47e]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wide">Continuous Machine Learning</h4>
                    <p className="text-xs text-[#8fa3ad]/70 mt-0.5 leading-relaxed">
                      Pal maps your habitual routes, remembers your accessory preferences for specific days, and suggests alternative modes based on local battery limits and weather metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* High-fidelity interactive modular showcase deck */}
            <div className="lg:col-span-7">
              <div className="bg-[#242b30]/40 rounded-3xl p-6 sm:p-8 border border-white/[0.04] relative overflow-hidden backdrop-blur-md">
                {/* Embedded decorative glowing ring background */}
                <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-[#f1a47e]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between mb-8 border-b border-white/[0.04] pb-4">
                  <span className="text-[10px] tracking-widest text-[#8fa3ad] uppercase">Interactive Deck Selector</span>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#f1a47e]" />
                    <span className="text-xs text-white tracking-wide font-mono">Module Configuration</span>
                  </div>
                </div>

                {/* Grid layout of modules cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Commute Bag */}
                  <div 
                    onClick={() => setActiveModule('commute')} 
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      activeModule === 'commute' 
                        ? 'bg-[#1c2226] border-[#f1a47e] shadow-[0_4px_30px_rgba(241,164,126,0.06)]' 
                        : 'bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08]'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] text-white">
                        <Zap className="w-4 h-4 text-[#f1a47e]" />
                      </div>
                      <span className="text-[10px] text-[#8fa3ad]/40 font-mono">01 / COMMUTE</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">Integrated Smart Backpack</h3>
                    <p className="text-xs text-[#8fa3ad]/70 mt-1 leading-relaxed">
                      A stylish water-resistant hardshell bag featuring integrated solar-charging threads, internal tech pocket dividers, and an ambient rear safety blinker.
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                      <span className="text-[10px] tracking-widest text-[#8fa3ad]/60 uppercase">Weight Class</span>
                      <span className="text-xs font-mono text-[#f1a47e] font-bold">Light (+2 lbs)</span>
                    </div>
                  </div>

                  {/* Cargo Box */}
                  <div 
                    onClick={() => setActiveModule('cargo')} 
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      activeModule === 'cargo' 
                        ? 'bg-[#1c2226] border-[#f1a47e] shadow-[0_4px_30px_rgba(241,164,126,0.06)]' 
                        : 'bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08]'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] text-white">
                        <Layers className="w-4 h-4 text-[#f1a47e]" />
                      </div>
                      <span className="text-[10px] text-[#8fa3ad]/40 font-mono">02 / CARGO</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">Heavy-Duty Secure Crate</h3>
                    <p className="text-xs text-[#8fa3ad]/70 mt-1 leading-relaxed">
                      Reinforced aluminum frame with biometric secure locking mechanisms, ideal for high-value logistics, groceries, or fragile parcel delivery.
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                      <span className="text-[10px] tracking-widest text-[#8fa3ad]/60 uppercase">Weight Class</span>
                      <span className="text-xs font-mono text-[#f1a47e] font-bold">Heavy (+6 lbs)</span>
                    </div>
                  </div>

                  {/* Shopping Basket */}
                  <div 
                    onClick={() => setActiveModule('shopping')} 
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      activeModule === 'shopping' 
                        ? 'bg-[#1c2226] border-[#f1a47e] shadow-[0_4px_30px_rgba(241,164,126,0.06)]' 
                        : 'bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08]'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] text-white">
                        <Navigation className="w-4 h-4 text-[#f1a47e]" />
                      </div>
                      <span className="text-[10px] text-[#8fa3ad]/40 font-mono">03 / TECH BASKET</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">Airflow Mesh Basket</h3>
                    <p className="text-xs text-[#8fa3ad]/70 mt-1 leading-relaxed">
                      A beautifully lightweight carbon-wire mesh bucket perfect for immediate utility, fresh market runs, and daily errands. Easily detaches with a simple strap.
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                      <span className="text-[10px] tracking-widest text-[#8fa3ad]/60 uppercase">Weight Class</span>
                      <span className="text-xs font-mono text-[#f1a47e] font-bold">Medium (+4 lbs)</span>
                    </div>
                  </div>

                  {/* Minimal */}
                  <div 
                    onClick={() => setActiveModule('minimal')} 
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      activeModule === 'minimal' 
                        ? 'bg-[#1c2226] border-[#f1a47e] shadow-[0_4px_30px_rgba(241,164,126,0.06)]' 
                        : 'bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08]'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] text-white">
                        <Sliders className="w-4 h-4 text-[#f1a47e]" />
                      </div>
                      <span className="text-[10px] text-[#8fa3ad]/40 font-mono">04 / BARE</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">Minimal Flight Deck</h3>
                    <p className="text-xs text-[#8fa3ad]/70 mt-1 leading-relaxed">
                      Removes any front luggage accessory entirely, displaying only the ultra-sleek, clean aesthetic lines. Optimized strictly for performance and high speeds.
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                      <span className="text-[10px] tracking-widest text-[#8fa3ad]/60 uppercase">Weight Class</span>
                      <span className="text-xs font-mono text-[#f1a47e] font-bold">Ultralight (0 lbs)</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- DYNAMIC COCKPIT HUD SIMULATOR --- */}
        <section id="tech" className="py-20 border-t border-white/[0.04] relative">
          <div className="space-y-4 text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#f1a47e] uppercase block">Digital Cockpit</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
              Real-Time Telemetry Interface
            </h2>
            <p className="text-xs sm:text-sm text-[#8fa3ad]/80 leading-relaxed font-light">
              Toggle dashboard features to experience our futuristic cockpit and telemetry mapping module, adjusting to your terrain profile on-the-fly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive Control Console */}
            <div className="lg:col-span-4 bg-[#242b30]/40 rounded-3xl p-6 sm:p-8 border border-white/[0.04] flex flex-col justify-between backdrop-blur-md">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-[#8fa3ad] uppercase">System State</span>
                  <div className="flex items-center space-x-1.5">
                    <span className={`w-2 h-2 rounded-full ${scooterPower ? 'bg-[#a3e635] animate-pulse' : 'bg-red-500'}`} />
                    <span className="text-[10px] tracking-widest text-[#8fa3ad] uppercase font-mono">{scooterPower ? 'ONLINE' : 'OFFLINE'}</span>
                  </div>
                </div>

                <div className="p-4 bg-black/20 rounded-2xl border border-white/[0.03]">
                  <span className="text-[10px] tracking-widest text-[#8fa3ad]/60 uppercase block mb-3">Power Controller</span>
                  <button 
                    onClick={() => setScooterPower(!scooterPower)}
                    className={`w-full py-3 rounded-xl text-xs tracking-widest uppercase font-bold transition-all duration-300 ${
                      scooterPower 
                        ? 'bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white' 
                        : 'bg-[#f1a47e] text-[#1c2226] hover:bg-white'
                    }`}
                  >
                    {scooterPower ? 'Shut Down Systems' : 'Initiate Ignition Sequence'}
                  </button>
                </div>

                <div className="p-4 bg-black/20 rounded-2xl border border-white/[0.03] space-y-4">
                  <span className="text-[10px] tracking-widest text-[#8fa3ad]/60 uppercase block">Drive Train Mode</span>
                  <div className="grid grid-cols-3 gap-2">
                    {['eco', 'city', 'sport'].map((mode) => (
                      <button
                        key={mode}
                        disabled={!scooterPower}
                        onClick={() => setSpeedMode(mode)}
                        className={`py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all duration-200 disabled:opacity-30 ${
                          speedMode === mode && scooterPower
                            ? 'bg-[#f1a47e] text-[#1c2226] shadow-[0_2px_12px_rgba(241,164,126,0.3)]' 
                            : 'bg-white/[0.02] border border-white/[0.05] text-[#8fa3ad]/80 hover:bg-white/[0.05] hover:text-white'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.04] mt-6 text-xs text-[#8fa3ad]/60 leading-relaxed font-light">
                <p>Telemetry syncs via bluetooth low-energy with NIO connected car cloud networks.</p>
              </div>
            </div>

            {/* Dashboard HUD & Visualizer */}
            <div className="lg:col-span-8 bg-[#1f2529] rounded-3xl border border-white/[0.05] overflow-hidden flex flex-col justify-between relative shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              
              {/* Glass Glare & Top Status indicators */}
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-b from-[#242b30] to-transparent">
                <div>
                  <span className="text-[10px] tracking-[0.3em] text-[#f1a47e] uppercase block font-semibold">Live Telemetry HUD</span>
                  <h3 className="text-lg font-bold text-white mt-0.5 uppercase tracking-wide">Integrated NIO OS v4.26</h3>
                </div>

                {/* Simulated battery health bar */}
                <div className="flex items-center space-x-4 bg-black/20 p-2 px-4 rounded-xl border border-white/[0.04]">
                  <div className="flex items-center space-x-2">
                    <Battery className="w-4 h-4 text-[#a3e635]" />
                    <span className="text-xs font-mono text-white font-bold">96%</span>
                  </div>
                  <div className="w-[1px] h-3 bg-white/10" />
                  <span className="text-[10px] tracking-widest text-[#8fa3ad] uppercase">Optimum Temp (24°C)</span>
                </div>
              </div>

              {/* Dynamic Oscilloscope Telemetry Line */}
              <div className="relative flex-1 min-h-[160px] flex flex-col justify-center px-6 sm:px-8">
                {scooterPower ? (
                  <>
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
                    <div className="relative z-10 self-center text-center">
                      <span className="text-[10px] tracking-[0.4em] text-[#8fa3ad]/60 uppercase block mb-1">Live Velocity Output</span>
                      <div className="flex items-baseline justify-center space-x-1 font-mono">
                        <span className="text-5xl sm:text-6xl font-light text-white tracking-tighter">
                          {speedMode === 'eco' ? '12.0' : speedMode === 'city' ? '15.0' : '24.0'}
                        </span>
                        <span className="text-sm font-semibold text-[#f1a47e] tracking-wider">MPH</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-10">
                    <div className="inline-flex p-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-2">
                      <Zap className="w-6 h-6 animate-pulse" />
                    </div>
                    <p className="text-xs font-mono text-red-400/80 tracking-widest uppercase">System Power Cut — HUD Offline</p>
                  </div>
                )}
              </div>

              {/* Lower HUD Diagnostic Panel */}
              <div className="p-6 bg-black/15 border-t border-white/[0.04] grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <span className="text-[9px] tracking-widest text-[#8fa3ad]/50 uppercase block">Smart Regover</span>
                  <span className={`text-xs font-mono font-bold block ${scooterPower ? 'text-[#a3e635]' : 'text-[#8fa3ad]/30'}`}>
                    {scooterPower ? 'Active (98.2%)' : 'Inactive'}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] tracking-widest text-[#8fa3ad]/50 uppercase block">Braking Style</span>
                  <span className={`text-xs font-mono font-bold block ${scooterPower ? 'text-white' : 'text-[#8fa3ad]/30'}`}>
                    {scooterPower ? 'Dual Electronic' : 'N/A'}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] tracking-widest text-[#8fa3ad]/50 uppercase block">Grip Vector</span>
                  <span className={`text-xs font-mono font-bold block ${scooterPower ? 'text-white' : 'text-[#8fa3ad]/30'}`}>
                    {scooterPower ? 'Optimal [4-Wheel]' : 'N/A'}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] tracking-widest text-[#8fa3ad]/50 uppercase block">AI Route Sync</span>
                  <span className={`text-xs font-mono font-bold block ${scooterPower ? 'text-[#f1a47e] animate-pulse' : 'text-[#8fa3ad]/30'}`}>
                    {scooterPower ? 'Calibrating...' : 'N/A'}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* --- FEATURES GRID (ULTRA PRESTIGE DESIGN CARDS) --- */}
        <section className="py-24 border-t border-white/[0.04] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-[0.3em] text-[#f1a47e] uppercase block mb-3">Premium Systems</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
                Designed for the next era of smart urban commuting
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-xs sm:text-sm text-[#8fa3ad]/70 leading-relaxed max-w-sm ml-auto">
                No plain layouts. Every millimeter has been structurally planned to showcase technical prowess and minimal aesthetic depth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="bg-[#242b30]/30 rounded-3xl p-8 border border-white/[0.04] flex flex-col justify-between group hover:border-[#f1a47e]/35 transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center transition-all duration-300 group-hover:bg-[#f1a47e]/10 group-hover:border-[#f1a47e]">
                  <Cpu className="w-5 h-5 text-[#f1a47e]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">Intelligent AI Co-Pilot</h3>
                  <p className="text-xs sm:text-sm text-[#8fa3ad]/70 leading-relaxed font-light">
                    An embedded neural network tracking local terrain elevations, active pedestrian levels, and battery drains. Automatically alters route guidelines.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-[#8fa3ad]/45 font-mono">
                <span>01 / TECHNOLOGY</span>
                <span className="text-[#f1a47e] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">NIO AI™</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#242b30]/30 rounded-3xl p-8 border border-white/[0.04] flex flex-col justify-between group hover:border-[#f1a47e]/35 transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center transition-all duration-300 group-hover:bg-[#f1a47e]/10 group-hover:border-[#f1a47e]">
                  <Layers className="w-5 h-5 text-[#f1a47e]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">Swappable Battery Cell</h3>
                  <p className="text-xs sm:text-sm text-[#8fa3ad]/70 leading-relaxed font-light">
                    Swap active cells at any NIO Power Swap Station across the country in under 30 seconds. Safe, reliable, and continuously checked for structural integrity.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-[#8fa3ad]/45 font-mono">
                <span>02 / POWER DYNAMICS</span>
                <span className="text-[#f1a47e] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Swap Tech v3</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#242b30]/30 rounded-3xl p-8 border border-white/[0.04] flex flex-col justify-between group hover:border-[#f1a47e]/35 transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center transition-all duration-300 group-hover:bg-[#f1a47e]/10 group-hover:border-[#f1a47e]">
                  <Shield className="w-5 h-5 text-[#f1a47e]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">4-Wheel Safe Vectoring</h3>
                  <p className="text-xs sm:text-sm text-[#8fa3ad]/70 leading-relaxed font-light">
                    Features dynamic independent steering actuators on all four wheels. Ensures extreme slide safety, low-radius cornering, and instant traction correction.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-[#8fa3ad]/45 font-mono">
                <span>03 / RIDE STABILITY</span>
                <span className="text-[#f1a47e] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Vector Lock</span>
              </div>
            </div>

          </div>
        </section>

        {/* --- TECHNICAL SPEC SHEET --- */}
        <section id="specs" className="py-24 border-t border-white/[0.04] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 sticky top-10 space-y-4">
              <span className="text-xs font-semibold tracking-[0.3em] text-[#f1a47e] uppercase block">Detailed Specifications</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase leading-tight">
                No compromises.<br />Only premium hardware.
              </h2>
              <p className="text-xs sm:text-sm text-[#8fa3ad]/70 leading-relaxed font-light">
                Explore the meticulous micro-specs behind PAL's production model, built to aircraft structural standards with premium lightweight composite resins.
              </p>
            </div>

            <div className="lg:col-span-8">
              {/* Dynamic Technical Specifications Tab */}
              <div className="bg-[#242b30]/30 rounded-3xl border border-white/[0.04] overflow-hidden">
                <div className="flex border-b border-white/[0.04] bg-black/10">
                  {['overview', 'chassis', 'intelligence'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 border-b-2 ${
                        activeTab === tab 
                          ? 'border-[#f1a47e] text-white bg-white/[0.01]' 
                          : 'border-transparent text-[#8fa3ad]/50 hover:text-white'
                      }`}
                    >
                      {tab} Specs
                    </button>
                  ))}
                </div>

                <div className="p-6 sm:p-8">
                  {activeTab === 'overview' && (
                    <div className="divide-y divide-white/[0.04] text-xs sm:text-sm">
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Top Travel Speed</span>
                        <span className="font-mono text-white font-semibold">24 mph (Smart Speed Limit Regulated)</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Electric Motor Power</span>
                        <span className="font-mono text-white font-semibold">Dual 450W Hub Motors (Front & Rear Assist)</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Battery Range Cap</span>
                        <span className="font-mono text-white font-semibold">Up to 36 miles on ECO Mode</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Battery Fast-Charge Duration</span>
                        <span className="font-mono text-white font-semibold">80% in 15 minutes at home wallbox</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Waterproof Integrity</span>
                        <span className="font-mono text-white font-semibold">IPX7 Sealed Chassis Deck</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'chassis' && (
                    <div className="divide-y divide-white/[0.04] text-xs sm:text-sm">
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Core Material</span>
                        <span className="font-mono text-white font-semibold">Unibody T300 Carbon-Fiber & Wood Laminate</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Steering Hub Pivot</span>
                        <span className="font-mono text-white font-semibold">Double-wishbone independent suspension</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Wheel Dimensions</span>
                        <span className="font-mono text-white font-semibold">7.5" Low-profile high-grip pneumatic rubber</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Weight Support Cap</span>
                        <span className="font-mono text-white font-semibold">Up to 260 lbs active load</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'intelligence' && (
                    <div className="divide-y divide-white/[0.04] text-xs sm:text-sm">
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Onboard Processor</span>
                        <span className="font-mono text-white font-semibold">NIO Adam™ High-Power System-on-Chip (SoC)</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Sensory System Array</span>
                        <span className="font-mono text-white font-semibold">2x Solid-state LiDAR, 4x Ultrasonics, 1x HD Camera</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Security Protection</span>
                        <span className="font-mono text-white font-semibold">Biometric TouchID handle lock, GPS geo-fence tracking</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">OTA Upgrades support</span>
                        <span className="font-mono text-white font-semibold">Yes — Lifelong regular operating system updates</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- PRE-ORDER CONFIGURATOR SECTION (PRESTIGE CTA) --- */}
        <section id="preorder" className="py-24 border-t border-white/[0.04] relative">
          <div className="absolute top-0 right-[15%] w-[350px] h-[350px] bg-[#f1a47e]/5 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-[0.3em] text-[#f1a47e] uppercase block">Reservation Terminal</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
                Secure Your Spot.<br />Ride the Future.
              </h2>
              <p className="text-sm sm:text-base text-[#8fa3ad]/70 leading-relaxed font-light">
                Reserve your custom-configured NIO Pal prototype today. Your customizable reservation is fully refundable up to 30 days prior to your production dispatch.
              </p>

              {/* Minimal bullet check list */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-xs text-[#8fa3ad]">
                  <Check className="w-4 h-4 text-[#f1a47e]" />
                  <span>Fully refundable reservation deposit ($100 USD equivalent)</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-[#8fa3ad]">
                  <Check className="w-4 h-4 text-[#f1a47e]" />
                  <span>Includes 1 year complimentary NIO Power Swap priority access</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-[#8fa3ad]">
                  <Check className="w-4 h-4 text-[#f1a47e]" />
                  <span>Premium welcome package containing branded apparel & tools</span>
                </div>
              </div>
            </div>

            {/* Configurator Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#242b30]/50 rounded-3xl p-6 sm:p-8 border border-white/[0.05] backdrop-blur-md relative overflow-hidden">
                
                {bookingSuccess ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="inline-flex p-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-2">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">Reservation Authenticated!</h3>
                    <p className="text-xs sm:text-sm text-[#8fa3ad]/80 leading-relaxed max-w-sm mx-auto">
                      Thank you. Your spot in the NIO Pal queue has been verified. A verification email containing invoice specs and reservation token details has been dispatched.
                    </p>
                    <button 
                      onClick={() => setBookingSuccess(false)}
                      className="mt-6 px-6 py-2.5 text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors underline"
                    >
                      Reset Configurator
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setBookingSuccess(true); }} className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold tracking-widest uppercase text-[#8fa3ad]/60 mb-4">Confirm Configuration Specs</h3>
                      
                      {/* Configuration Details Box */}
                      <div className="bg-black/20 rounded-2xl p-4 border border-white/[0.04] space-y-3 text-xs">
                        <div className="flex justify-between">
                          <span className="text-[#8fa3ad]/60">Accessory Pack</span>
                          <span className="font-mono text-white capitalize">{activeModule} Pack</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8fa3ad]/60">Chassis Color</span>
                          <span className="font-mono text-white capitalize">{scooterColor} Metallic</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8fa3ad]/60">Drive System Mode</span>
                          <span className="font-mono text-white capitalize">{speedMode} Max</span>
                        </div>
                        <div className="pt-2 border-t border-white/[0.04] flex justify-between text-sm font-bold text-[#f1a47e]">
                          <span>ESTIMATED PRICE</span>
                          <span className="font-mono">
                            ${activeModule === 'cargo' ? '3,499' : activeModule === 'shopping' ? '3,299' : '2,999'} USD
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-4">
                      <div>
                        <label className="text-[10px] tracking-widest uppercase text-[#8fa3ad]/60 block mb-2">Full Name</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Your Name" 
                          className="w-full bg-black/20 border border-white/[0.08] rounded-xl py-3 px-4 text-xs font-mono text-white focus:outline-none focus:border-[#f1a47e] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] tracking-widest uppercase text-[#8fa3ad]/60 block mb-2">Email Address</label>
                        <input 
                          type="email" 
                          required
                          placeholder="name@domain.com" 
                          className="w-full bg-black/20 border border-white/[0.08] rounded-xl py-3 px-4 text-xs font-mono text-white focus:outline-none focus:border-[#f1a47e] transition-colors"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 text-xs tracking-[0.2em] uppercase font-bold text-[#1c2226] bg-[#f1a47e] rounded-xl hover:bg-white hover:text-[#1c2226] transition-all duration-300 shadow-[0_4px_30px_rgba(241,164,126,0.15)] flex items-center justify-center space-x-2"
                    >
                      <span>Reserve Production Slot</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <span className="text-[9px] text-[#8fa3ad]/40 font-mono block text-center uppercase tracking-widest">
                      Reservation Deposit: $100 — Fully Refundable
                    </span>
                  </form>
                )}

              </div>
            </div>

          </div>
        </section>

      </div>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/[0.04] bg-black/25 relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-[#8fa3ad]/60">
            
            {/* Left Block */}
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-[#f1a47e]" />
              <span className="font-bold tracking-[0.2em] text-white uppercase font-mono">Phenomenon NIO Pal</span>
            </div>

            {/* Navigation links inside footer */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 uppercase tracking-widest text-[10px]">
              <a href="#overview" className="hover:text-white transition-colors duration-200">Overview</a>
              <a href="#modular" className="hover:text-white transition-colors duration-200">Modular Deck</a>
              <a href="#tech" className="hover:text-white transition-colors duration-200">HUD Console</a>
              <a href="#specs" className="hover:text-white transition-colors duration-200">Hardware specs</a>
            </div>

            {/* Social / Info Links matching design file */}
            <div className="flex items-center space-x-6 tracking-widest text-[11px]">
              <a href="#" className="hover:text-white transition-colors">Fb</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">In</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Tw</a>
            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-white/[0.03] text-center text-[10px] text-[#8fa3ad]/30 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} PHENOMENON DESIGN LABS &amp; NIO TRANSPORTATION CO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* --- LAB FLIGHT VIDEO BACKDROP DIALOG PLAYBACK OVERLAY --- */}
      {playbackActive && (
        <div className="fixed inset-0 bg-[#1c2226]/95 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300">
          <div className="bg-[#242b30] rounded-3xl max-w-3xl w-full border border-white/[0.08] overflow-hidden shadow-2xl relative">
            
            {/* Header info bar */}
            <div className="p-4 sm:p-6 border-b border-white/[0.05] flex justify-between items-center bg-black/15">
              <div>
                <span className="text-[9px] tracking-widest text-[#f1a47e] uppercase block">Flight Simulation</span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">NIO PAL - Autonomous Last Mile</h3>
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setAudioMuted(!audioMuted)}
                  className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.05] text-[#8fa3ad] hover:text-white transition-all"
                  title={audioMuted ? "Unmute" : "Mute"}
                >
                  {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setPlaybackActive(false)}
                  className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Dynamic Particle Map Showcase inside playback box */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(241,164,126,0.1)_0%,rgba(0,0,0,0.95)_100%)] pointer-events-none" />
              
              {/* Dynamic decorative radar scan circle */}
              <div className="w-44 h-44 rounded-full border border-dashed border-[#f1a47e]/25 animate-[spin_40s_linear_infinite] flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-dashed border-white/5 animate-[spin_20s_linear_infinite_reverse]" />
              </div>

              {/* Vector abstract vehicle moving along glowing coordinate points */}
              <div className="absolute inset-x-12 bottom-12 border-t border-white/[0.05] pt-3 flex justify-between text-[10px] text-[#8fa3ad]/40 font-mono">
                <span>COORD: 31.2304° N, 121.4737° E</span>
                <span className="text-[#f1a47e] animate-pulse">RADAR LINK ACTIVE</span>
              </div>

              <div className="absolute text-center px-4">
                <div className="inline-flex p-3 rounded-full bg-white/[0.03] border border-white/[0.05] text-white animate-bounce mb-3">
                  <Activity className="w-6 h-6 text-[#f1a47e]" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">Simulation Engine Render</h4>
                <p className="text-xs text-[#8fa3ad]/70 mt-1 max-w-sm leading-relaxed">
                  Displaying real-time autonomous path mapping of Pal's sensory arrays interacting with busy pedestrian crossings.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
3
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VR PARK SOLUTIONS - Premium Futuristic Immersive Ecosystem</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        vrBlue: {
                            50: '#f0f7ff',
                            100: '#e0effe',
                            200: '#b9defe',
                            300: '#7cc2fd',
                            400: '#36a2fa',
                            500: '#0c85eb',
                            600: '#0267c7',
                            700: '#0352a1',
                            800: '#074685',
                            900: '#0c3b6e',
                            950: '#06254a',
                        },
                        cyberNeon: '#10b981',
                        cyberBlue: '#38bdf8',
                        cyberPurple: '#a855f7',
                        cyberPink: '#ec4899',
                        futuristGrey: '#e2e8f0',
                        brandBg: '#f8fafc',
                        brandPanel: '#ffffff',
                    },
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                        futuristic: ['Orbitron', 'Chakra Petch', 'sans-serif'],
                    },
                    boxShadow: {
                        'neon-blue': '0 0 15px rgba(56, 189, 248, 0.25)',
                        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.2)',
                        'cyber-card': '0 10px 30px -10px rgba(12, 133, 235, 0.08)',
                        'glass': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.6), 0 10px 30px -10px rgba(0, 0, 0, 0.04)',
                    }
                }
            }
        }
    </script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700;800&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f1f5f9;
            background-image: 
                radial-gradient(circle at 10% 20%, rgba(224, 239, 254, 0.6) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, rgba(243, 232, 255, 0.6) 0%, transparent 45%),
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(241, 245, 249, 0.7) 100%);
            background-attachment: fixed;
            overflow-x: hidden;
        }

        .futuristic-font {
            font-family: 'Orbitron', sans-serif;
            letter-spacing: 0.1em;
        }

        .cyber-text-gradient {
            background: linear-gradient(135deg, #0f172a 30%, #0352a1 70%, #a855f7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* Metallic Chrome Liquids mimicking the inspiration image */
        .chrome-liquid {
            background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9) 0%, rgba(210,225,245,0.7) 30%, rgba(140,170,205,0.4) 70%, rgba(80,110,145,0.8) 100%);
            box-shadow: 
                inset -10px -10px 25px rgba(0,0,0,0.15),
                inset 10px 10px 20px rgba(255,255,255,0.9),
                0 15px 35px rgba(30,50,90,0.12);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.5);
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            animation: morphing 18s ease-in-out infinite;
        }

        .chrome-liquid-sm {
            background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, rgba(225,235,250,0.8) 35%, rgba(160,185,215,0.5) 75%, rgba(100,125,160,0.8) 100%);
            box-shadow: 
                inset -5px -5px 15px rgba(0,0,0,0.12),
                inset 5px 5px 12px rgba(255,255,255,0.9),
                0 10px 25px rgba(30,50,90,0.08);
            border: 1px solid rgba(255,255,255,0.6);
            border-radius: 50% 50% 30% 70% / 50% 60% 40% 60%;
            animation: morphing-reverse 14s ease-in-out infinite;
        }

        @keyframes morphing {
            0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(0deg); }
            33% { border-radius: 60% 40% 50% 50% / 50% 30% 70% 50%; transform: rotate(120deg); }
            66% { border-radius: 50% 60% 30% 70% / 55% 55% 45% 55%; transform: rotate(240deg); }
            100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(360deg); }
        }

        @keyframes morphing-reverse {
            0% { border-radius: 50% 50% 30% 70% / 50% 60% 40% 60%; transform: rotate(360deg) scale(0.95); }
            50% { border-radius: 30% 70% 60% 40% / 60% 40% 60% 40%; transform: rotate(180deg) scale(1.05); }
            100% { border-radius: 50% 50% 30% 70% / 50% 60% 40% 60%; transform: rotate(0deg) scale(0.95); }
        }

        /* Subtle scanner line animation */
        .scanner-line {
            background: linear-gradient(to bottom, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0.4) 50%, rgba(56, 189, 248, 0) 100%);
            animation: scan 4s linear infinite;
        }

        @keyframes scan {
            0% { top: -10%; }
            100% { top: 110%; }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f5f9;
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }

        /* Neon outline active indicators */
        .active-neon-glow {
            box-shadow: 0 0 15px rgba(56, 189, 248, 0.45), inset 0 0 10px rgba(56, 189, 248, 0.15);
            border-color: rgba(56, 189, 248, 0.6) !important;
        }

        /* Ambient glowing circles behind panels */
        .ambient-glow {
            filter: blur(80px);
            opacity: 0.15;
            pointer-events: none;
        }
    </style>
</head>
<body class="text-slate-800 antialiased selection:bg-vrBlue-200 selection:text-vrBlue-900">

    <!-- Ambient Glowing Backdrops -->
    <div class="fixed top-24 left-[10%] w-[350px] h-[350px] rounded-full bg-vrBlue-300 ambient-glow z-0"></div>
    <div class="fixed top-[60%] right-[10%] w-[450px] h-[450px] rounded-full bg-purple-300 ambient-glow z-0"></div>
    <div class="fixed bottom-10 left-[20%] w-[300px] h-[300px] rounded-full bg-cyan-300 ambient-glow z-0"></div>

    <!-- MAIN NOTIFICATION TOAST (Global Design System feedback) -->
    <div id="toast" class="fixed bottom-6 right-6 z-50 transform translate-y-24 opacity-0 transition-all duration-300 ease-out pointer-events-none">
        <div class="bg-white/95 border border-vrBlue-200 backdrop-blur-xl shadow-2xl rounded-2xl p-4 flex items-center space-x-3 max-w-sm">
            <div class="w-10 h-10 rounded-xl bg-vrBlue-50 flex items-center justify-center text-vrBlue-500 border border-vrBlue-100">
                <i id="toast-icon" class="fa-solid fa-bell"></i>
            </div>
            <div>
                <h4 id="toast-title" class="font-bold text-slate-900 text-sm">System Update</h4>
                <p id="toast-message" class="text-slate-600 text-xs mt-0.5">Custom layout configuration deployed.</p>
            </div>
            <button onclick="hideToast()" class="text-slate-400 hover:text-slate-600 transition-colors pl-2">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>
    </div>

    <!-- TOP HEADER / MULTI-LEVEL SYSTEM NAVBAR -->
    <header class="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                
                <!-- Logo brand matching inspiration style -->
                <div class="flex items-center space-x-3 cursor-pointer group" onclick="scrollToTop()">
                    <div class="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-vrBlue-600 to-vrBlue-400 shadow-md shadow-vrBlue-200 group-hover:rotate-6 transition-transform duration-300">
                        <i class="fa-solid fa-cubes text-white text-lg"></i>
                        <span class="absolute -top-1 -right-1 w-3 h-3 bg-cyberNeon rounded-full animate-ping"></span>
                        <span class="absolute -top-1 -right-1 w-3 h-3 bg-cyberNeon rounded-full"></span>
                    </div>
                    <div class="flex flex-col">
                        <span class="futuristic-font font-black text-slate-900 text-base tracking-wider leading-none">VR PARK</span>
                        <span class="text-[10px] text-vrBlue-600 font-bold tracking-[0.25em] leading-none uppercase mt-0.5">SOLUTIONS</span>
                    </div>
                </div>

                <!-- Desktop Navigation Elements -->
                <nav class="hidden md:flex items-center space-x-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/50">
                    <a href="#home" class="px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 rounded-full hover:bg-white hover:text-vrBlue-600 transition-all duration-200">Home</a>
                    <a href="#simulators" class="px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 rounded-full hover:bg-white hover:text-vrBlue-600 transition-all duration-200">Simulator Ecosystem</a>
                    <a href="#configurator" class="px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 rounded-full hover:bg-white hover:text-vrBlue-600 transition-all duration-200">Interactive Configurator</a>
                    <a href="#telemetry" class="px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 rounded-full hover:bg-white hover:text-vrBlue-600 transition-all duration-200">System Live Status</a>
                    <a href="#about" class="px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 rounded-full hover:bg-white hover:text-vrBlue-600 transition-all duration-200">About US</a>
                </nav>

                <!-- Premium CTA & Search Bar -->
                <div class="hidden lg:flex items-center space-x-4">
                    <!-- Search Input Design System -->
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fa-solid fa-magnifying-glass text-slate-400 text-xs"></i>
                        </span>
                        <input type="text" placeholder="Explore VR products..." class="w-48 bg-slate-100 hover:bg-slate-200/70 focus:bg-white focus:ring-2 focus:ring-vrBlue-500 focus:outline-none transition-all duration-200 text-xs rounded-full py-2 pl-9 pr-4 text-slate-700 placeholder-slate-400 border border-transparent focus:border-transparent">
                    </div>

                    <!-- CTA Action -->
                    <a href="#configurator" class="relative group overflow-hidden bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-vrBlue-600 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-2 shadow-md">
                        <span>Get Free Proposal</span>
                        <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                    </a>
                </div>

                <!-- Mobile Menu Trigger -->
                <button id="mobile-menu-btn" class="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors">
                    <i class="fa-solid fa-bars-staggered"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Drawer Navigation -->
        <div id="mobile-menu" class="hidden md:hidden bg-white/95 border-b border-slate-200/80 backdrop-blur-xl transition-all duration-300">
            <div class="px-4 pt-2 pb-6 space-y-2">
                <a href="#home" class="block px-4 py-2.5 text-sm font-semibold rounded-xl hover:bg-slate-100 text-slate-800">Home Overview</a>
                <a href="#simulators" class="block px-4 py-2.5 text-sm font-semibold rounded-xl hover:bg-slate-100 text-slate-800">Simulator Lineups</a>
                <a href="#configurator" class="block px-4 py-2.5 text-sm font-semibold rounded-xl hover:bg-slate-100 text-slate-800">Dynamic Setup Configurator</a>
                <a href="#telemetry" class="block px-4 py-2.5 text-sm font-semibold rounded-xl hover:bg-slate-100 text-slate-800">Telemetry Monitoring</a>
                <a href="#about" class="block px-4 py-2.5 text-sm font-semibold rounded-xl hover:bg-slate-100 text-slate-800">About US & Contact</a>
                <div class="pt-4 border-t border-slate-100 flex flex-col space-y-3 px-4">
                    <input type="text" placeholder="Search parameters..." class="w-full bg-slate-100 text-xs rounded-xl py-3 px-4 border border-slate-200/50">
                    <a href="#configurator" class="w-full bg-vrBlue-600 text-center text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider block">Get Free Design Proposal</a>
                </div>
            </div>
        </div>
    </header>

    <!-- MAIN BODY CONTAINER -->
    <main class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        <!-- DECORATIVE CHROME LIQUID METALLIC BLOB (AS SEEN IN INSPIRATION IMAGE) -->
        <div class="absolute -left-12 top-28 w-40 h-40 chrome-liquid hidden lg:block select-none z-10"></div>
        <div class="absolute right-[22%] top-[40%] w-24 h-24 chrome-liquid-sm hidden xl:block select-none z-10"></div>
        <div class="absolute -right-16 top-[70%] w-48 h-48 chrome-liquid hidden lg:block select-none z-10"></div>
        <div class="absolute left-[3%] bottom-[12%] w-28 h-28 chrome-liquid-sm hidden lg:block select-none z-10"></div>

        <!-- HERO SECTION (Matches layout and elements of left preview page in image) -->
        <section id="home" class="pt-12 pb-20 relative">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Left Content: High-end Title, Robot & Futuristic Styling -->
                <div class="lg:col-span-7 flex flex-col space-y-8">
                    
                    <!-- Futuristic Premium Breadcrumb Badge -->
                    <div class="inline-flex items-center self-start space-x-2 bg-gradient-to-r from-vrBlue-50 to-white border border-vrBlue-200/60 rounded-full px-4 py-1.5 shadow-sm">
                        <span class="w-2 h-2 rounded-full bg-cyberBlue animate-pulse"></span>
                        <span class="text-[10px] font-bold tracking-[0.2em] text-vrBlue-600 uppercase">NEXT-GEN VR ADVENTURE HUBS</span>
                    </div>

                    <!-- Hero Title inspired by "VIRTUAL REALITY" heading in graphic -->
                    <div class="relative">
                        <h1 class="font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-none text-slate-900">
                            VIRTUAL<br>
                            <span class="cyber-text-gradient futuristic-font">REALITY</span>
                        </h1>
                        <!-- Floating system parameters graphic -->
                        <div class="absolute -right-6 top-1/2 -translate-y-1/2 hidden md:block select-none">
                            <span class="text-[11px] font-bold text-slate-400 rotate-90 inline-block tracking-[0.5em] origin-center uppercase">VIRTUAL REALITY</span>
                        </div>
                    </div>

                    <!-- Interactive Robot Avatar panel (The robot wearing blue headset) -->
                    <div class="relative bg-white/60 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-glass flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 overflow-hidden group">
                        <!-- Headlight scanner ambient element -->
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-vrBlue-100/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[2.5s] ease-out"></div>
                        
                        <!-- Premium Interactive SVG Robot Graphic inspired directly by image -->
                        <div class="relative w-36 h-36 flex-shrink-0 bg-gradient-to-b from-slate-50 to-slate-200 border border-slate-300/40 rounded-2xl flex items-center justify-center p-4 shadow-inner group-hover:scale-105 transition-all duration-500">
                            <!-- SVG Robot -->
                            <svg viewBox="0 0 120 120" class="w-full h-full drop-shadow-lg">
                                <!-- Body/Shoulders -->
                                <path d="M40 95 C40 85, 80 85, 80 95" fill="#cbd5e1" stroke="#94a3b8" stroke-width="2"/>
                                <!-- Neck -->
                                <rect x="55" y="78" width="10" height="10" rx="3" fill="#64748b"/>
                                <!-- Head -->
                                <rect x="35" y="38" width="50" height="42" rx="18" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/>
                                <!-- Ear elements -->
                                <rect x="29" y="50" width="6" height="15" rx="3" fill="#94a3b8"/>
                                <rect x="85" y="50" width="6" height="15" rx="3" fill="#94a3b8"/>
                                <!-- Headset (Directly inspired by image) -->
                                <rect x="31" y="44" width="58" height="18" rx="8" fill="#1e293b" class="shadow-lg"/>
                                <!-- Headset glowing strip -->
                                <rect x="36" y="51" width="48" height="4" rx="2" fill="#38bdf8">
                                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                                </rect>
                                <!-- Interactive blinking camera/sensor on forehead -->
                                <circle cx="60" cy="40" r="2.5" fill="#ef4444">
                                    <animate attributeName="opacity" values="0.2;1;0.2" dur="1s" repeatCount="indefinite" />
                                </circle>
                                <!-- Robot limbs waving gesture -->
                                <path d="M30 85 Q20 75 22 65" fill="none" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
                                <circle cx="22" cy="65" r="4" fill="#64748b"/>
                            </svg>
                            <!-- Touch gesture interactive tag -->
                            <span class="absolute bottom-1 right-1 text-[8px] bg-cyberBlue/20 text-vrBlue-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">ROBO-ASSISTANT v2</span>
                        </div>

                        <!-- Explanatory pitch for VR business ecosystem -->
                        <div class="flex-1 space-y-3 text-center md:text-left">
                            <h3 class="text-base font-bold text-slate-900 futuristic-font uppercase">Leke VR Ecosystem Suite</h3>
                            <p class="text-xs text-slate-600 leading-relaxed">
                                Deploy turnkey VR amusement platforms. Integrating industrial hardware, immersive simulators, and synchronized visual control systems. Accelerate investment returns with curated contents.
                            </p>
                            <!-- Animated live micro statistics -->
                            <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
                                <span class="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold flex items-center">
                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-ping"></span> 100% Active Server uptime
                                </span>
                                <span class="text-[10px] bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded-full font-bold">
                                    SDK v4.12 Deployed
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- THREE KEY METRIC BADGES (Directly matching 1000+, 7000000+, 700+ stat block from graphic) -->
                    <div class="grid grid-cols-3 gap-4">
                        <div class="bg-gradient-to-b from-white/90 to-slate-50/90 border border-slate-200/50 p-5 rounded-2xl shadow-glass text-center group hover:-translate-y-1 transition-transform duration-300">
                            <span class="block text-2xl sm:text-3xl font-extrabold text-slate-900 futuristic-font">1000+</span>
                            <span class="text-[10px] text-slate-500 uppercase font-semibold tracking-wider block mt-1">Global Stores</span>
                        </div>
                        <div class="bg-gradient-to-b from-white/90 to-slate-50/90 border border-slate-200/50 p-5 rounded-2xl shadow-glass text-center group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                            <!-- Glow highlighting central statistic -->
                            <div class="absolute inset-0 bg-vrBlue-100/10 pointer-events-none"></div>
                            <span class="block text-2xl sm:text-3xl font-extrabold text-vrBlue-600 futuristic-font">7M+</span>
                            <span class="text-[10px] text-slate-500 uppercase font-semibold tracking-wider block mt-1">Active Consumers</span>
                        </div>
                        <div class="bg-gradient-to-b from-white/90 to-slate-50/90 border border-slate-200/50 p-5 rounded-2xl shadow-glass text-center group hover:-translate-y-1 transition-transform duration-300">
                            <span class="block text-2xl sm:text-3xl font-extrabold text-slate-900 futuristic-font">700+</span>
                            <span class="text-[10px] text-slate-500 uppercase font-semibold tracking-wider block mt-1">Quality Contents</span>
                        </div>
                    </div>
                </div>

                <!-- Right Content: Showcase Hero Mockup representing VR Center design solutions -->
                <div class="lg:col-span-5 flex flex-col space-y-6">
                    <!-- The 100-150m² Standar VR Center block from the inspiration image -->
                    <div class="bg-white/80 backdrop-blur-xl border border-white p-6 rounded-[32px] shadow-glass relative overflow-hidden group">
                        
                        <!-- Header within card -->
                        <div class="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                            <div>
                                <span class="text-[9px] uppercase tracking-widest text-vrBlue-500 font-bold block">Featured Configuration</span>
                                <h3 class="text-base font-bold text-slate-900 futuristic-font">STANDAR VR CENTER</h3>
                            </div>
                            <span class="bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full futuristic-font">100 - 150m²</span>
                        </div>

                        <!-- 3D/Isometric Concept Render Panel -->
                        <div class="relative bg-gradient-to-b from-slate-950 to-slate-900 rounded-2xl p-4 overflow-hidden h-64 flex flex-col justify-between border border-slate-800 shadow-inner group-hover:shadow-neon-blue transition-shadow duration-500">
                            <!-- Neon grids & stars background representation -->
                            <div class="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                            
                            <!-- Scanner laser line traveling vertically -->
                            <div class="absolute left-0 w-full h-12 scanner-line pointer-events-none"></div>

                            <!-- Decorative glowing VR booth rendering (matches Leke VR blue and red neon strip design from upload) -->
                            <div class="relative w-full h-full flex items-center justify-center">
                                <div class="w-[85%] h-[75%] bg-slate-900/90 border-2 border-dashed border-vrBlue-500/30 rounded-xl relative p-3 flex flex-col justify-between">
                                    
                                    <!-- Neon cyan glowing line system representation -->
                                    <div class="absolute inset-0 border border-vrBlue-500 rounded-xl shadow-neon-blue opacity-85"></div>
                                    <div class="absolute top-2 right-2 flex space-x-1">
                                        <span class="w-1.5 h-1.5 rounded-full bg-cyberPink"></span>
                                        <span class="w-1.5 h-1.5 rounded-full bg-cyberBlue animate-ping"></span>
                                    </div>

                                    <!-- Simulated interactive layout view -->
                                    <div class="grid grid-cols-4 gap-2 mt-2">
                                        <div class="bg-vrBlue-950/80 border border-vrBlue-500/50 rounded-lg p-1.5 text-center flex flex-col justify-center items-center h-16 hover:bg-vrBlue-900/80 transition-all cursor-pointer">
                                            <i class="fa-solid fa-headset text-cyberBlue text-xs mb-1"></i>
                                            <span class="text-[8px] text-white font-bold leading-none">P1</span>
                                        </div>
                                        <div class="bg-vrBlue-950/80 border border-vrBlue-500/50 rounded-lg p-1.5 text-center flex flex-col justify-center items-center h-16 hover:bg-vrBlue-900/80 transition-all cursor-pointer">
                                            <i class="fa-solid fa-truck-ramp-box text-cyberPurple text-xs mb-1"></i>
                                            <span class="text-[8px] text-white font-bold leading-none">P2</span>
                                        </div>
                                        <div class="bg-vrBlue-950/80 border border-vrBlue-500/50 rounded-lg p-1.5 text-center flex flex-col justify-center items-center h-16 hover:bg-vrBlue-900/80 transition-all cursor-pointer">
                                            <i class="fa-solid fa-chair text-cyberPink text-xs mb-1"></i>
                                            <span class="text-[8px] text-white font-bold leading-none">P3</span>
                                        </div>
                                        <div class="bg-vrBlue-950/80 border border-vrBlue-500/50 rounded-lg p-1.5 text-center flex flex-col justify-center items-center h-16 hover:bg-vrBlue-900/80 transition-all cursor-pointer animate-pulse">
                                            <i class="fa-solid fa-gamepad text-cyberNeon text-xs mb-1"></i>
                                            <span class="text-[8px] text-white font-bold leading-none">P4</span>
                                        </div>
                                    </div>

                                    <div class="flex items-center justify-between text-[10px] text-slate-400 mt-2 bg-slate-950/90 px-3 py-1.5 rounded-lg border border-slate-800">
                                        <span>Capacity: <strong class="text-white">6 to 10 VR Machines</strong></span>
                                        <span class="text-cyberBlue font-bold">Standard Layout</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Info details under illustration -->
                        <p class="text-xs text-slate-600 mt-4 leading-relaxed">
                            A highly optimized standard floor setup recommendation requiring 100-150m². Equipped with multi-game options, decentralized management kiosks, and localized content delivery.
                        </p>

                        <!-- Bottom Interactive Button -->
                        <div class="mt-5 flex items-center justify-between">
                            <span class="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Leke VR Park Solutions</span>
                            <button onclick="openConfigurator('Standard VR Center', 120)" class="text-xs font-bold text-vrBlue-600 hover:text-vrBlue-800 flex items-center space-x-1.5 transition-all">
                                <span>Simulate This Setup</span>
                                <i class="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Quick Info Panel - Mini Bento style -->
                    <div class="bg-white/60 backdrop-blur-md border border-white p-5 rounded-2xl shadow-glass flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-cyberPurple border border-purple-100">
                                <i class="fa-solid fa-wand-magic-sparkles"></i>
                            </div>
                            <div>
                                <h4 class="text-xs font-bold text-slate-800">Preloaded Games Library</h4>
                                <p class="text-[10px] text-slate-500">Updated weekly with premium global content</p>
                            </div>
                        </div>
                        <span class="text-[10px] bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-bold">724 Active Titles</span>
                    </div>
                </div>

            </div>
        </section>


        <!-- VR SIMULATOR LINEUP SECTION (Corresponds to "VR SIMULATOR" product catalog on right page of inspiration image) -->
        <section id="simulators" class="py-16 border-t border-slate-200/50">
            
            <!-- Section Title matching premium aesthetics -->
            <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <span class="text-[10px] bg-vrBlue-100 text-vrBlue-700 border border-vrBlue-200 font-bold tracking-[0.25em] px-4 py-1.5 rounded-full uppercase inline-block">ENGINEERED IMMERSION</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 futuristic-font">VR SIMULATOR PORTFOLIO</h2>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Explore high-throughput cinematic attraction systems. Every hardware model possesses localized force-feedback, real-time kinetic rotation, and automated ticketing integrations.
                </p>
            </div>

            <!-- Main Interactive Simulator Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <!-- 1. Flying Cinema (VR 360 Cinema Chair) -->
                <div class="bg-white/90 backdrop-blur-xl border border-slate-200/40 rounded-3xl p-5 hover:shadow-cyber-card hover:border-vrBlue-300 transition-all duration-300 flex flex-col justify-between group">
                    <div class="space-y-4">
                        <span class="text-[10px] font-bold text-slate-400 uppercase block tracking-wider">VR 360 Cinema Chair</span>
                        
                        <!-- Visual representation block -->
                        <div class="relative bg-slate-50 border border-slate-200/50 rounded-2xl h-44 flex items-center justify-center overflow-hidden group-hover:bg-vrBlue-50/50 transition-colors">
                            <!-- Custom SVG depiction of futuristic seat -->
                            <svg viewBox="0 0 100 100" class="w-32 h-32 text-slate-800 drop-shadow-md">
                                <rect x="30" y="20" width="40" height="50" rx="8" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/>
                                <rect x="35" y="25" width="30" height="35" rx="5" fill="#0f172a"/>
                                <rect x="38" y="30" width="24" height="20" rx="2" fill="#38bdf8" opacity="0.8"/>
                                <!-- Armrests -->
                                <rect x="22" y="50" width="8" height="25" rx="4" fill="#94a3b8"/>
                                <rect x="70" y="50" width="8" height="25" rx="4" fill="#94a3b8"/>
                                <!-- Motion base -->
                                <path d="M25 80 L75 80 L85 90 L15 90 Z" fill="#64748b"/>
                                <circle cx="50" cy="85" r="4" fill="#f43f5e" class="animate-pulse"/>
                            </svg>
                            <!-- Motion specifications tag -->
                            <span class="absolute bottom-2 right-2 text-[9px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-bold">360° Rotation</span>
                        </div>

                        <div>
                            <h3 class="text-base font-bold text-slate-900 futuristic-font">Flying Cinema</h3>
                            <p class="text-xs text-slate-600 leading-relaxed mt-2">
                                Heavy kinetic platform delivering breathtaking flight simulations and extreme velocity dynamics.
                            </p>
                        </div>
                    </div>

                    <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span class="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-bold">1-Player Option</span>
                        <button onclick="openProductModal('Flying Cinema', 'Extreme velocity 360° motion system optimized for dynamic aerial experiences. Integrated wind effects, high fidelity stereo sound, and structural roll-cage features.')" class="bg-slate-900 text-white text-xs px-4 py-2 rounded-xl font-bold hover:bg-vrBlue-600 transition-colors">
                            Explore
                        </button>
                    </div>
                </div>

                <!-- 2. Space Shuttle 2.0 (VR Cinema Chair) -->
                <div class="bg-white/90 backdrop-blur-xl border border-slate-200/40 rounded-3xl p-5 hover:shadow-cyber-card hover:border-vrBlue-300 transition-all duration-300 flex flex-col justify-between group">
                    <div class="space-y-4">
                        <span class="text-[10px] font-bold text-slate-400 uppercase block tracking-wider">VR Cinema Chair</span>
                        
                        <!-- Visual representation block -->
                        <div class="relative bg-slate-50 border border-slate-200/50 rounded-2xl h-44 flex items-center justify-center overflow-hidden group-hover:bg-vrBlue-50/50 transition-colors">
                            <!-- Custom SVG depiction of space pod simulator -->
                            <svg viewBox="0 0 100 100" class="w-32 h-32 text-slate-800 drop-shadow-md">
                                <rect x="25" y="15" width="50" height="60" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                                <rect x="32" y="22" width="36" height="30" rx="6" fill="#0c1017"/>
                                <!-- Glowing console screen inside cockpit -->
                                <circle cx="50" cy="35" r="10" fill="#a855f7" opacity="0.7">
                                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.5s" repeatCount="indefinite"/>
                                </circle>
                                <!-- Outer aesthetic wings -->
                                <path d="M25 35 L10 55 L25 55 Z" fill="#64748b"/>
                                <path d="M75 35 L90 55 L75 55 Z" fill="#64748b"/>
                                <!-- Hydraulic actuators -->
                                <line x1="40" y1="75" x2="35" y2="90" stroke="#cbd5e1" stroke-width="4"/>
                                <line x1="60" y1="75" x2="65" y2="90" stroke="#cbd5e1" stroke-width="4"/>
                                <rect x="20" y="90" width="60" height="6" fill="#475569"/>
                            </svg>
                            <!-- Motion specifications tag -->
                            <span class="absolute bottom-2 right-2 text-[9px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-bold">3-Axis Motion</span>
                        </div>

                        <div>
                            <h3 class="text-base font-bold text-slate-900 futuristic-font">Space Shuttle 2.0</h3>
                            <p class="text-xs text-slate-600 leading-relaxed mt-2">
                                Encapsulated spaceship capsule simulation perfect for premium cosmic exploration and deep-sea dives.
                            </p>
                        </div>
                    </div>

                    <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span class="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-bold">2-Player Option</span>
                        <button onclick="openProductModal('Space Shuttle 2.0', 'Double-seat encapsulated immersive spaceship simulator. Heavy feedback vibration, integrated environmental fans, and multi-game synchronization capability.')" class="bg-slate-900 text-white text-xs px-4 py-2 rounded-xl font-bold hover:bg-vrBlue-600 transition-colors">
                            Explore
                        </button>
                    </div>
                </div>

                <!-- 3. Corps Pro (Self-service Platform) -->
                <div class="bg-white/90 backdrop-blur-xl border border-slate-200/40 rounded-3xl p-5 hover:shadow-cyber-card hover:border-vrBlue-300 transition-all duration-300 flex flex-col justify-between group">
                    <div class="space-y-4">
                        <span class="text-[10px] font-bold text-slate-400 uppercase block tracking-wider">Self-service Platform</span>
                        
                        <!-- Visual representation block -->
                        <div class="relative bg-slate-50 border border-slate-200/50 rounded-2xl h-44 flex items-center justify-center overflow-hidden group-hover:bg-vrBlue-50/50 transition-colors">
                            <!-- Custom SVG depiction of self-service machine kiosk -->
                            <svg viewBox="0 0 100 100" class="w-32 h-32 text-slate-800 drop-shadow-md">
                                <rect x="35" y="10" width="30" height="80" rx="4" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
                                <rect x="40" y="20" width="20" height="25" rx="2" fill="#0f172a"/>
                                <rect x="42" y="22" width="16" height="12" fill="#10b981">
                                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
                                </rect>
                                <!-- Interactive button array visual -->
                                <circle cx="45" cy="55" r="2.5" fill="#38bdf8"/>
                                <circle cx="55" cy="55" r="2.5" fill="#a855f7"/>
                                <circle cx="45" cy="65" r="2.5" fill="#f43f5e"/>
                                <circle cx="55" cy="65" r="2.5" fill="#e2e8f0"/>
                                <!-- Attached Headset schematic -->
                                <path d="M50 45 L25 45 C20 45 20 55 25 55" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="2 1"/>
                                <rect x="18" y="48" width="10" height="12" rx="2" fill="#334155"/>
                            </svg>
                            <!-- Motion specifications tag -->
                            <span class="absolute bottom-2 right-2 text-[9px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-bold">Autonomous SDK</span>
                        </div>

                        <div>
                            <h3 class="text-base font-bold text-slate-900 futuristic-font">Corps Pro</h3>
                            <p class="text-xs text-slate-600 leading-relaxed mt-2">
                                Unattended automated standing kiosk offering swipe-and-play operations to minimize storefront staffing.
                            </p>
                        </div>
                    </div>

                    <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span class="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-bold">Unattended VR</span>
                        <button onclick="openProductModal('Corps Pro', 'Self-service standalone terminal designed for shopping malls and retail centers. Features coin-operated/digital wallet payment, dynamic automated headset retraction system, and minimal maintenance design.')" class="bg-slate-900 text-white text-xs px-4 py-2 rounded-xl font-bold hover:bg-vrBlue-600 transition-colors">
                            Explore
                        </button>
                    </div>
                </div>

                <!-- 4. X-Space (VR Free Roam Arena) -->
                <div class="bg-white/90 backdrop-blur-xl border border-slate-200/40 rounded-3xl p-5 hover:shadow-cyber-card hover:border-vrBlue-300 transition-all duration-300 flex flex-col justify-between group">
                    <div class="space-y-4">
                        <span class="text-[10px] font-bold text-slate-400 uppercase block tracking-wider">VR Free Roam Arena</span>
                        
                        <!-- Visual representation block -->
                        <div class="relative bg-slate-50 border border-slate-200/50 rounded-2xl h-44 flex items-center justify-center overflow-hidden group-hover:bg-vrBlue-50/50 transition-colors">
                            <!-- Custom SVG depiction of multiplayer arena setup -->
                            <svg viewBox="0 0 100 100" class="w-32 h-32 text-slate-800 drop-shadow-md">
                                <polygon points="15,80 50,20 85,80" fill="none" stroke="#cbd5e1" stroke-width="2"/>
                                <ellipse cx="50" cy="80" rx="35" ry="12" fill="#cbd5e1" opacity="0.4"/>
                                <circle cx="50" cy="80" r="4" fill="#0267c7"/>
                                <!-- Player indicators -->
                                <circle cx="35" cy="78" r="3" fill="#ef4444"/>
                                <circle cx="65" cy="78" r="3" fill="#10b981"/>
                                <!-- Overhead sensors -->
                                <rect x="40" y="15" width="20" height="6" rx="2" fill="#1e293b"/>
                                <line x1="50" y1="21" x2="35" y2="78" stroke="#38bdf8" stroke-dasharray="3 3"/>
                                <line x1="50" y1="21" x2="65" y2="78" stroke="#38bdf8" stroke-dasharray="3 3"/>
                            </svg>
                            <!-- Motion specifications tag -->
                            <span class="absolute bottom-2 right-2 text-[9px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-bold">Multiplayer Grid</span>
                        </div>

                        <div>
                            <h3 class="text-base font-bold text-slate-900 futuristic-font">X-Space</h3>
                            <p class="text-xs text-slate-600 leading-relaxed mt-2">
                                Collaborative multiplayer platform for physical tracking, perfect for tactical team shooters and room-scale escapes.
                            </p>
                        </div>
                    </div>

                    <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span class="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-bold">4-8 Players</span>
                        <button onclick="openProductModal('X-Space', 'State-of-the-art room-scale free roam setup. Offers high fidelity precision ultra-wide tracking systems, custom tactical haptic rifles, and competitive arena titles.')" class="bg-slate-900 text-white text-xs px-4 py-2 rounded-xl font-bold hover:bg-vrBlue-600 transition-colors">
                            Explore
                        </button>
                    </div>
                </div>

            </div>
        </section>


        <!-- INTERACTIVE DESIGN SYSTEM CUSTOM CONFIGURATOR SECTION (A brand-new premium feature bringing the "Standard VR Center 100-150m²" block to life) -->
        <section id="configurator" class="py-16 border-t border-slate-200/50">
            <div class="bg-gradient-to-tr from-slate-900 to-slate-950 text-white rounded-[40px] p-8 md:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
                
                <!-- Ambiance background details -->
                <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25"></div>
                <div class="absolute -top-24 -left-24 w-80 h-80 bg-vrBlue-500/20 rounded-full blur-[80px]"></div>
                <div class="absolute -bottom-24 -right-24 w-80 h-80 bg-cyberPurple/20 rounded-full blur-[80px]"></div>

                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    <!-- Configurator Left Controls Panel -->
                    <div class="lg:col-span-6 space-y-8">
                        <div>
                            <span class="text-cyberBlue text-[10px] font-bold tracking-[0.25em] uppercase block mb-2">DYNAMIC DESIGN STUDIO</span>
                            <h2 class="text-3xl sm:text-4xl font-extrabold futuristic-font tracking-tight">CONFIGURE YOUR HUB</h2>
                            <p class="text-xs text-slate-400 mt-2 leading-relaxed">
                                Select layout models or scale custom dimensions. Real-time predictive algorithm computes capacity limits, recommended machines, power outputs, and investment projections.
                            </p>
                        </div>

                        <!-- Real-time Controls -->
                        <div class="space-y-6 bg-slate-900/50 border border-slate-800 p-6 rounded-3xl backdrop-blur-md">
                            
                            <!-- Floor Size Slider -->
                            <div class="space-y-3">
                                <div class="flex justify-between items-center text-xs font-bold">
                                    <span class="text-slate-300">HUB TARGET AREA</span>
                                    <span class="text-cyberBlue futuristic-font" id="area-val">120 m²</span>
                                </div>
                                <input type="range" id="input-area" min="50" max="400" value="120" step="10" oninput="updateConfigurator()" class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyberBlue">
                                <div class="flex justify-between text-[10px] text-slate-500">
                                    <span>50 m² (Micro)</span>
                                    <span>400 m² (Massive Park)</span>
                                </div>
                            </div>

                            <!-- Hardware Priority Selector -->
                            <div class="space-y-3">
                                <label class="text-xs font-bold text-slate-300 block">PRIMARY ATTRACTION MODEL</label>
                                <div class="grid grid-cols-3 gap-2">
                                    <button onclick="setPriority('cinematic', this)" class="priority-btn px-3 py-2.5 rounded-xl border border-slate-700/60 bg-slate-950 hover:bg-slate-800 hover:border-slate-600 transition-all text-left group active-neon-glow">
                                        <span class="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Cinematic</span>
                                        <span class="text-xs font-bold text-white block mt-1">Pod Seating</span>
                                    </button>
                                    <button onclick="setPriority('action', this)" class="priority-btn px-3 py-2.5 rounded-xl border border-slate-700/60 bg-slate-950 hover:bg-slate-800 hover:border-slate-600 transition-all text-left group">
                                        <span class="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">High Action</span>
                                        <span class="text-xs font-bold text-white block mt-1">360° Motion</span>
                                    </button>
                                    <button onclick="setPriority('freeroam', this)" class="priority-btn px-3 py-2.5 rounded-xl border border-slate-700/60 bg-slate-950 hover:bg-slate-800 hover:border-slate-600 transition-all text-left group">
                                        <span class="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Tactical</span>
                                        <span class="text-xs font-bold text-white block mt-1">Free Roam</span>
                                    </button>
                                </div>
                            </div>

                            <!-- Additional Options (Toggles) -->
                            <div class="space-y-3">
                                <label class="text-xs font-bold text-slate-300 block">SYSTEM MODIFIERS</label>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <!-- Unattended Operations -->
                                    <label class="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                                        <div class="flex items-center space-x-2">
                                            <i class="fa-solid fa-robot text-cyberNeon text-xs"></i>
                                            <span class="text-xs font-medium text-slate-300">Self-Service SDK</span>
                                        </div>
                                        <input type="checkbox" id="toggle-unattended" onchange="updateConfigurator()" class="w-4 h-4 rounded text-vrBlue-600 focus:ring-vrBlue-500 focus:ring-2 bg-slate-800 border-slate-700">
                                    </label>
                                    <!-- Premium Sound System -->
                                    <label class="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                                        <div class="flex items-center space-x-2">
                                            <i class="fa-solid fa-volume-high text-cyberPink text-xs"></i>
                                            <span class="text-xs font-medium text-slate-300">Spatial Audio Kit</span>
                                        </div>
                                        <input type="checkbox" id="toggle-audio" onchange="updateConfigurator()" class="w-4 h-4 rounded text-vrBlue-600 focus:ring-vrBlue-500 focus:ring-2 bg-slate-800 border-slate-700" checked>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- Configurator Right Output Results Panel -->
                    <div class="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                        <div class="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/80 p-6 rounded-3xl flex flex-col justify-between h-full relative">
                            <!-- Header status readout -->
                            <div class="flex justify-between items-center pb-4 border-b border-slate-800">
                                <span class="text-[10px] bg-cyberBlue/10 text-cyberBlue border border-cyberBlue/20 px-3 py-1 rounded-full font-bold uppercase tracking-wider">Dynamic Estimate Engine</span>
                                <span class="text-xs text-slate-500" id="preset-lbl">Configuration: Custom 120m²</span>
                            </div>

                            <!-- Real-time dynamic visual telemetry stats -->
                            <div class="grid grid-cols-2 gap-4 my-6">
                                <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                                    <span class="text-[10px] uppercase font-bold text-slate-500 block">Recommended Machines</span>
                                    <span class="text-2xl sm:text-3xl font-extrabold text-white futuristic-font block mt-1" id="rec-machines">8 units</span>
                                    <p class="text-[10px] text-slate-400 mt-1">Optimized for safety spacing</p>
                                </div>
                                <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                                    <span class="text-[10px] uppercase font-bold text-slate-500 block">Est. Concurrent Players</span>
                                    <span class="text-2xl sm:text-3xl font-extrabold text-cyberBlue futuristic-font block mt-1" id="rec-players">16 Players</span>
                                    <p class="text-[10px] text-slate-400 mt-1">Peak customer throughput</p>
                                </div>
                                <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                                    <span class="text-[10px] uppercase font-bold text-slate-500 block">Required Power Load</span>
                                    <span class="text-2xl sm:text-3xl font-extrabold text-white futuristic-font block mt-1" id="rec-power">14.5 kW</span>
                                    <p class="text-[10px] text-slate-400 mt-1">Average structural rating</p>
                                </div>
                                <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                                    <span class="text-[10px] uppercase font-bold text-slate-500 block">Projected Weekly Revenue</span>
                                    <span class="text-2xl sm:text-3xl font-extrabold text-emerald-400 futuristic-font block mt-1" id="rec-revenue">$9,600</span>
                                    <p class="text-[10px] text-emerald-500/80 font-semibold mt-1">Est. Payback: ~4 Months</p>
                                </div>
                            </div>

                            <p class="text-[11px] text-slate-400 leading-relaxed text-center italic">
                                *Calculations are simulated forecasts utilizing spatial density modeling. Actual site performance varies by geographic location & store marketing.
                            </p>

                            <!-- Call to action button with state update feedback -->
                            <div class="mt-6 flex flex-col md:flex-row gap-3">
                                <button onclick="deployConfig()" class="flex-1 bg-gradient-to-r from-vrBlue-600 to-vrBlue-500 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-md shadow-vrBlue-500/10">
                                    Deploy Configuration To Proposal
                                </button>
                                <button onclick="resetConfig()" class="px-4 py-4 border border-slate-700 text-slate-400 font-semibold text-xs rounded-xl hover:bg-slate-800 transition-colors">
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <!-- TELEMETRY / DIGITAL TWIN DASHBOARD PREVIEW (Showcases beautiful premium dashboard preview to complete real-world tech theme) -->
        <section id="telemetry" class="py-16 border-t border-slate-200/50">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Telemetry Intro Text -->
                <div class="lg:col-span-4 space-y-6">
                    <span class="text-[10px] bg-purple-100 text-cyberPurple border border-purple-200 font-bold tracking-[0.25em] px-4 py-1.5 rounded-full uppercase inline-block">Real-time Operations</span>
                    <h2 class="text-3xl font-extrabold text-slate-900 futuristic-font">DIGITAL TWIN TELEMETRY</h2>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Every VR simulator operates via a decentralized dashboard, allowing park owners to track headset connectivity, component heat, coin transaction speeds, and localized gameplay sessions.
                    </p>

                    <div class="space-y-4">
                        <div class="flex items-center space-x-3 p-3 bg-white/70 rounded-xl border border-slate-200/50">
                            <i class="fa-solid fa-server text-vrBlue-500 text-sm"></i>
                            <div>
                                <h4 class="text-xs font-bold text-slate-800">Dynamic Load Balancer</h4>
                                <p class="text-[10px] text-slate-500">Auto-routes gameplay streaming queues</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3 p-3 bg-white/70 rounded-xl border border-slate-200/50">
                            <i class="fa-solid fa-shield-halved text-cyberNeon text-sm"></i>
                            <div>
                                <h4 class="text-xs font-bold text-slate-800">Decentralized Authorization</h4>
                                <p class="text-[10px] text-slate-500">Encrypted payments & GDPR-compliant stats</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Interactive Live Dashboard Preview Box -->
                <div class="lg:col-span-8">
                    <div class="bg-white border border-slate-200 shadow-xl rounded-[32px] overflow-hidden">
                        
                        <!-- Dashboard Mockup Header -->
                        <div class="bg-slate-950 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
                            <div class="flex items-center space-x-2">
                                <span class="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></span>
                                <span class="text-xs font-bold futuristic-font tracking-wider text-slate-200">LIVE HUB TELEMETRY: PARK_042</span>
                            </div>
                            <!-- Small toggle telemetry view switches -->
                            <div class="flex space-x-1">
                                <span class="bg-slate-800 text-[9px] text-slate-400 px-2 py-0.5 rounded font-mono">NODE_US_EAST_01</span>
                            </div>
                        </div>

                        <!-- Live Graph & Component Monitor -->
                        <div class="p-6 bg-slate-50 grid grid-cols-1 md:grid-cols-12 gap-6">
                            
                            <!-- Graph Telemetry Display -->
                            <div class="md:col-span-8 space-y-4">
                                <div class="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
                                    <div class="flex justify-between items-center mb-3">
                                        <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wide">Dynamic Machine Output (Live)</h4>
                                        <span class="text-[10px] bg-vrBlue-50 text-vrBlue-600 px-2.5 py-0.5 rounded-full font-bold">100Hz updates</span>
                                    </div>
                                    <!-- Embedded Interactive HTML Canvas for Live telemetry graph simulation -->
                                    <div class="relative w-full h-44 bg-slate-950 rounded-xl overflow-hidden">
                                        <canvas id="telemetryCanvas" class="w-full h-full"></canvas>
                                    </div>
                                </div>
                                
                                <!-- Quick Diagnostic readouts -->
                                <div class="grid grid-cols-3 gap-3">
                                    <div class="bg-white p-3 rounded-xl border border-slate-200/60 text-center">
                                        <span class="text-[9px] text-slate-400 font-bold block uppercase">AVG FPS</span>
                                        <span class="text-base font-bold text-slate-800 futuristic-font mt-0.5 block">89.4 <span class="text-xs text-emerald-500">▲</span></span>
                                    </div>
                                    <div class="bg-white p-3 rounded-xl border border-slate-200/60 text-center">
                                        <span class="text-[9px] text-slate-400 font-bold block uppercase">LATENCY</span>
                                        <span class="text-base font-bold text-slate-800 futuristic-font mt-0.5 block">12ms <span class="text-xs text-vrBlue-500">▼</span></span>
                                    </div>
                                    <div class="bg-white p-3 rounded-xl border border-slate-200/60 text-center">
                                        <span class="text-[9px] text-slate-400 font-bold block uppercase">TEMP STATUS</span>
                                        <span class="text-base font-bold text-slate-800 futuristic-font mt-0.5 block text-emerald-600">38°C</span>
                                    </div>
                                </div>
                            </div>

                            <!-- List of active components in telemetry simulation -->
                            <div class="md:col-span-4 space-y-3">
                                <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1">Simulator Status</h4>
                                
                                <!-- Unit 01 status -->
                                <div class="p-3 bg-white rounded-xl border border-slate-200/60 flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        <span class="text-xs font-bold text-slate-800">Flying Cinema #1</span>
                                    </div>
                                    <span class="text-[10px] text-slate-500">In-game (4m)</span>
                                </div>

                                <!-- Unit 02 status -->
                                <div class="p-3 bg-white rounded-xl border border-slate-200/60 flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        <span class="text-xs font-bold text-slate-800">Space Shuttle #1</span>
                                    </div>
                                    <span class="text-[10px] text-slate-500">In-game (8m)</span>
                                </div>

                                <!-- Unit 03 status -->
                                <div class="p-3 bg-white rounded-xl border border-slate-200/60 flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <span class="text-xs font-bold text-slate-800">Corps Pro Terminal</span>
                                    </div>
                                    <span class="text-[10px] text-slate-500">Idle</span>
                                </div>

                                <!-- Live Interactive system trigger button -->
                                <button onclick="simulateDisruptiveError()" class="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3 rounded-xl uppercase tracking-wider transition-colors">
                                    Trigger Error Simulator
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>


        <!-- ABOUT US SECTION (Directly matching corporate description from upload image) -->
        <section id="about" class="py-16 border-t border-slate-200/50">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Left Details: Brand Mission Statement -->
                <div class="lg:col-span-6 space-y-6">
                    <span class="text-[10px] bg-vrBlue-50 text-vrBlue-600 border border-vrBlue-200 font-bold tracking-[0.25em] px-4 py-1.5 rounded-full uppercase inline-block">CORPORATE ARCHITECTURE</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 futuristic-font">ABOUT US</h2>
                    
                    <div class="text-xs text-slate-600 leading-relaxed space-y-4">
                        <p>
                            <strong>LEKE VR Technology Co., Ltd.</strong> is a high-tech enterprise integrating research and development, production, design, and marketing. We focus deeply on VR, AR, MR, AI and other innovation technologies. We provide various high fidelity VR Simulators and professional virtual reality park solutions. Welcome to contact us!
                        </p>
                        <p>
                            LEKE VR has served more than 70 million users worldwide. Our company's virtual reality products have been exported to more than 40 countries and regions such as UK, USA, Japan, Korea, Dubai, Croatia, Indonesia, Australia, Singapore, Taiwan.
                        </p>
                    </div>

                    <!-- Client Testimonial slider / showcase -->
                    <div class="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-slate-200/50 relative overflow-hidden">
                        <p class="text-xs text-slate-600 italic">
                            "Leke VR's Space Shuttle and automated platform allowed us to reach store payback within five months of our initial setup launch in New York. The automated ticketing integration was incredibly smooth."
                        </p>
                        <div class="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                            <div>
                                <span class="font-bold text-xs text-slate-900 block">Marcus Vance</span>
                                <span class="text-[9px] text-slate-400 font-semibold block uppercase">Chief of Operations, ArcX Arena Group</span>
                            </div>
                            <!-- Small 5-star rating representation -->
                            <div class="flex space-x-1 text-yellow-400 text-[10px]">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Details: Interactive Contact Form -->
                <div class="lg:col-span-6">
                    <div class="bg-white border border-slate-200/60 shadow-xl rounded-[32px] p-6 md:p-8 relative">
                        
                        <div class="mb-6">
                            <h3 class="text-lg font-bold text-slate-900 futuristic-font">REQUEST A CUSTOM SITE PROPOSAL</h3>
                            <p class="text-xs text-slate-500 mt-1">Receive complete site designs, equipment catalogs, and return schedules within 24 hours.</p>
                        </div>

                        <!-- Real interactive contact capture -->
                        <form id="proposal-form" onsubmit="handleFormSubmission(event)" class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-1.5">
                                    <label class="text-xs font-bold text-slate-700 block">Your Name</label>
                                    <input type="text" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-vrBlue-500 focus:outline-none focus:bg-white transition-all">
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-xs font-bold text-slate-700 block">Corporate Email Address</label>
                                    <input type="email" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-vrBlue-500 focus:outline-none focus:bg-white transition-all">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-1.5">
                                    <label class="text-xs font-bold text-slate-700 block">Primary Target Location Country</label>
                                    <input type="text" placeholder="e.g. United States, United Kingdom" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-vrBlue-500 focus:outline-none focus:bg-white transition-all">
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-xs font-bold text-slate-700 block">Desired Budget Scale</label>
                                    <select class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-vrBlue-500 focus:outline-none focus:bg-white transition-all">
                                        <option>$20k - $50k (Micro Hub)</option>
                                        <option>$50k - $100k (Standard Space)</option>
                                        <option>$100k - $250k (Major Immersive Center)</option>
                                        <option>$250k+ (Complete Franchise Flagship)</option>
                                    </select>
                                </div>
                            </div>

                            <div class="space-y-1.5">
                                <label class="text-xs font-bold text-slate-700 block">Additional Custom Requirements or Notes</label>
                                <textarea rows="3" placeholder="Tell us about your floor layout goals or spatial bounds..." class="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs focus:ring-2 focus:ring-vrBlue-500 focus:outline-none focus:bg-white transition-all"></textarea>
                            </div>

                            <!-- Click to sign up button -->
                            <button type="submit" class="w-full bg-slate-900 hover:bg-vrBlue-600 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-colors shadow-md shadow-slate-900/10 flex items-center justify-center space-x-2">
                                <span>Generate Digital Proposal</span>
                                <i class="fa-solid fa-file-invoice-dollar"></i>
                            </button>
                        </form>

                    </div>
                </div>

            </div>
        </section>


        <!-- FREQUENTLY ASKED QUESTIONS SECTION (Polished Accordion Interaction Component) -->
        <section id="faq" class="py-16 border-t border-slate-200/50">
            <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <span class="text-[10px] bg-slate-100 text-slate-600 border border-slate-200 font-bold tracking-[0.25em] px-4 py-1.5 rounded-full uppercase inline-block">FREQUENT INQUIRIES</span>
                <h2 class="text-3xl font-extrabold text-slate-900 futuristic-font">SOLUTIONS FAQ</h2>
            </div>

            <!-- Accordion Grid -->
            <div class="max-w-4xl mx-auto space-y-4">
                
                <!-- FAQ 1 -->
                <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
                    <button onclick="toggleAccordion(1)" class="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-slate-800 text-xs sm:text-sm hover:bg-slate-50/50 transition-colors">
                        <span>WHAT TECHNICAL WARRANTY AND SERVICE DEPLOYMENTS ARE INCLUDED WITH LEKE HARDWARE?</span>
                        <i id="faq-icon-1" class="fa-solid fa-plus text-slate-400 transition-transform"></i>
                    </button>
                    <div id="faq-content-1" class="hidden px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100/60 pt-4 bg-slate-50/30">
                        All physical simulators ship with an extensive 12-month structural and hydraulic warranty. We maintain critical spare parts depots in North America, United Kingdom, and Australia to facilitate prompt 48-hour part fulfillment schedules.
                    </div>
                </div>

                <!-- FAQ 2 -->
                <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
                    <button onclick="toggleAccordion(2)" class="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-slate-800 text-xs sm:text-sm hover:bg-slate-50/50 transition-colors">
                        <span>HOW DO WE ACQUIRE FRESH GAME TITLES, AND WHAT ARE THE LICENSING DETAILS?</span>
                        <i id="faq-icon-2" class="fa-solid fa-plus text-slate-400 transition-transform"></i>
                    </button>
                    <div id="faq-content-2" class="hidden px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100/60 pt-4 bg-slate-50/30">
                        Games are hosted on our proprietary automated content cloud distribution platform. Hub managers select games through their administrator control portal, paying licensing fees either via a per-play model or monthly flat-rate passes.
                    </div>
                </div>

                <!-- FAQ 3 -->
                <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
                    <button onclick="toggleAccordion(3)" class="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-slate-800 text-xs sm:text-sm hover:bg-slate-50/50 transition-colors">
                        <span>CAN LEKE PLATFORMS INTEGRATE WITH EXISTING VENUE TICKETING OR POS CLIENTS?</span>
                        <i id="faq-icon-3" class="fa-solid fa-plus text-slate-400 transition-transform"></i>
                    </button>
                    <div id="faq-content-3" class="hidden px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100/60 pt-4 bg-slate-50/30">
                        Yes, our API and software core support generic webhook outputs and REST bindings. This enables easy integration with legacy amusement ticketing software, RFID bands, and global QR wallet scanners.
                    </div>
                </div>

            </div>
        </section>

    </main>


    <!-- PRODUCT EXPLORATION MODAL (Dynamic Details, specifications sheet and pricing estimate simulated generator) -->
    <div id="product-modal" class="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-md flex items-center justify-center p-4 hidden opacity-0 transition-opacity duration-300">
        <div class="bg-white rounded-[32px] border border-slate-200/80 shadow-2xl max-w-2xl w-full overflow-hidden transform scale-95 transition-transform duration-300">
            
            <!-- Modal Header details -->
            <div class="bg-slate-900 text-white px-6 py-5 flex items-center justify-between">
                <div>
                    <span class="text-[10px] text-cyberBlue font-bold tracking-widest uppercase block">Product Specifications Sheet</span>
                    <h3 id="modal-product-title" class="text-base font-bold futuristic-font">Simulator</h3>
                </div>
                <button onclick="closeProductModal()" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Content & Pricing Interactive Simulation -->
            <div class="p-6 md:p-8 space-y-6">
                <div>
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Technical Description</h4>
                    <p id="modal-product-desc" class="text-xs text-slate-600 leading-relaxed">Product description text...</p>
                </div>

                <!-- Interactive Hardware spec matrix -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
                    <div class="bg-slate-50 p-3 rounded-xl border border-slate-200/50">
                        <span class="text-[9px] text-slate-400 font-bold block uppercase">Response Speed</span>
                        <span class="text-xs font-bold text-slate-800 block mt-1">~0.015s</span>
                    </div>
                    <div class="bg-slate-50 p-3 rounded-xl border border-slate-200/50">
                        <span class="text-[9px] text-slate-400 font-bold block uppercase">Maximum Payload</span>
                        <span class="text-xs font-bold text-slate-800 block mt-1">280kg / seat</span>
                    </div>
                    <div class="bg-slate-50 p-3 rounded-xl border border-slate-200/50">
                        <span class="text-[9px] text-slate-400 font-bold block uppercase">Standard Input</span>
                        <span class="text-xs font-bold text-slate-800 block mt-1">AC 380V / 3 Phase</span>
                    </div>
                    <div class="bg-slate-50 p-3 rounded-xl border border-slate-200/50">
                        <span class="text-[9px] text-slate-400 font-bold block uppercase">HMD Compatibility</span>
                        <span class="text-xs font-bold text-slate-800 block mt-1">HMD Dynamic v3</span>
                    </div>
                </div>

                <!-- Dynamic pricing estimate calculator block -->
                <div class="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/60 space-y-3">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span>Estimate Equipment & Delivery Package</span>
                        <span class="text-vrBlue-600 font-extrabold text-base" id="modal-calculated-pricing">$24,500</span>
                    </div>
                    <p class="text-[10px] text-slate-500 leading-relaxed">
                        Includes standard physical simulator unit, primary installation supervisor manual, basic spatial configuration guides, and initial 3-month trial software tokens.
                    </p>
                    <div class="flex space-x-2 pt-2">
                        <button onclick="requestSpecProposal()" class="flex-1 bg-slate-900 hover:bg-vrBlue-600 text-white font-bold text-xs py-3 rounded-xl uppercase tracking-wider transition-all">
                            Add to My Custom proposal
                        </button>
                        <button onclick="closeProductModal()" class="px-4 py-3 border border-slate-300 text-slate-600 font-bold text-xs rounded-xl hover:bg-slate-100 transition-all">
                            Back to Lineups
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- COMPLETE DESIGN SYSTEM FOOTER (Matches clean look and contains comprehensive links and social buttons) -->
    <footer class="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
                
                <!-- Left Details -->
                <div class="md:col-span-5 space-y-6">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-vrBlue-600 to-vrBlue-400 text-white shadow-md">
                            <i class="fa-solid fa-cubes text-lg"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="futuristic-font font-black text-white text-base tracking-wider leading-none">VR PARK</span>
                            <span class="text-[10px] text-vrBlue-400 font-bold tracking-[0.25em] leading-none uppercase mt-0.5">SOLUTIONS</span>
                        </div>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed">
                        Pioneering high-throughput immersive entertainment venues worldwide. We design, manufacture, and license turnkey virtual reality amusement systems for shopping malls, theme parks, and family centers.
                    </p>
                    <div class="flex space-x-3 pt-2">
                        <a href="#" class="w-8 h-8 rounded-lg bg-slate-800 text-white hover:bg-vrBlue-500 flex items-center justify-center transition-colors"><i class="fa-brands fa-facebook-f text-xs"></i></a>
                        <a href="#" class="w-8 h-8 rounded-lg bg-slate-800 text-white hover:bg-vrBlue-500 flex items-center justify-center transition-colors"><i class="fa-brands fa-twitter text-xs"></i></a>
                        <a href="#" class="w-8 h-8 rounded-lg bg-slate-800 text-white hover:bg-vrBlue-500 flex items-center justify-center transition-colors"><i class="fa-brands fa-linkedin-in text-xs"></i></a>
                        <a href="#" class="w-8 h-8 rounded-lg bg-slate-800 text-white hover:bg-vrBlue-500 flex items-center justify-center transition-colors"><i class="fa-brands fa-youtube text-xs"></i></a>
                    </div>
                </div>

                <!-- Center Quicklinks -->
                <div class="md:col-span-3 space-y-4">
                    <h4 class="text-xs font-bold text-white uppercase tracking-widest futuristic-font">VR Products</h4>
                    <ul class="space-y-2 text-xs">
                        <li><a href="#simulators" class="hover:text-white transition-colors">Flying Cinema</a></li>
                        <li><a href="#simulators" class="hover:text-white transition-colors">Space Shuttle 2.0</a></li>
                        <li><a href="#simulators" class="hover:text-white transition-colors">Corps Pro Platform</a></li>
                        <li><a href="#simulators" class="hover:text-white transition-colors">X-Space Arena</a></li>
                        <li><a href="#simulators" class="hover:text-white transition-colors">Dynamic Racing Pods</a></li>
                    </ul>
                </div>

                <!-- Right Quicklinks -->
                <div class="md:col-span-4 space-y-4">
                    <h4 class="text-xs font-bold text-white uppercase tracking-widest futuristic-font">Our Location</h4>
                    <p class="text-xs leading-relaxed text-slate-400">
                        <strong>Leke VR Technology Headquarters</strong><br>
                        Floor 4, Block C, Sci-Tech Innovation Center, High-Tech Industrial Zone, Guangzhou, China
                    </p>
                    <div class="pt-2">
                        <a href="mailto:solutions@lekevr.com" class="text-xs text-vrBlue-400 hover:text-vrBlue-300 font-bold block mb-1">solutions@lekevr.com</a>
                        <span class="text-xs text-slate-500">Corporate hotline: +86 400-123-4567</span>
                    </div>
                </div>

            </div>

            <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
                <p>© 2026 LEKE VR Technology Co., Ltd. All Rights Reserved. Turnkey amusement deployment specialists.</p>
                <div class="flex space-x-4 mt-4 sm:mt-0">
                    <a href="#" class="hover:underline">Legal Policy</a>
                    <a href="#" class="hover:underline">Compliance</a>
                    <a href="#" class="hover:underline">Site Terms</a>
                </div>
            </div>
        </div>
    </footer>


    <!-- SCRIPTS FOR ADVANCED INTERACTIONS -->
    <script>
        // Global variables for active layouts
        let selectedPriority = 'cinematic';
        let currentPricing = 24500;

        // On document load setup
        window.onload = function() {
            // Initiate real-time telemetry graph simulation
            initTelemetryGraph();
            // Perform default configurator calculations
            updateConfigurator();
        }

        // Telemetry Chart Simulator
        let telemetryCanvas = document.getElementById('telemetryCanvas');
        let ctx = telemetryCanvas.getContext('2d');
        let telemetryPoints = [];
        const maxPoints = 50;
        let simErrorState = false;

        // Initialize points array
        for (let i = 0; i < maxPoints; i++) {
            telemetryPoints.push(50 + Math.random() * 20);
        }

        function initTelemetryGraph() {
            // Resize canvas to parent container scale
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            
            // Start live animation loop
            requestAnimationFrame(drawTelemetryLoop);
        }

        function resizeCanvas() {
            let container = telemetryCanvas.parentElement;
            telemetryCanvas.width = container.clientWidth;
            telemetryCanvas.height = container.clientHeight;
        }

        // Draw and update telemetry loop representing real time headset and load activity
        function drawTelemetryLoop() {
            if (!ctx) return;
            ctx.clearRect(0, 0, telemetryCanvas.width, telemetryCanvas.height);

            // Add dynamic values
            let lastVal = telemetryPoints[telemetryPoints.length - 1];
            let variation = simErrorState ? (Math.random() * 40 - 20) : (Math.random() * 10 - 5);
            let newVal = lastVal + variation;
            if (newVal < 10) newVal = 10;
            if (newVal > telemetryCanvas.height - 10) newVal = telemetryCanvas.height - 10;

            telemetryPoints.shift();
            telemetryPoints.push(newVal);

            // Draw grid lines
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 1;
            for (let i = 20; i < telemetryCanvas.height; i += 20) {
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(telemetryCanvas.width, i);
                ctx.stroke();
            }

            // Draw line graph
            ctx.beginPath();
            ctx.strokeStyle = simErrorState ? '#ef4444' : '#38bdf8';
            ctx.lineWidth = 2.5;
            
            let step = telemetryCanvas.width / (maxPoints - 1);
            for (let i = 0; i < telemetryPoints.length; i++) {
                let x = i * step;
                // Invert y axis for canvas standard orientation
                let y = telemetryCanvas.height - telemetryPoints[i];
                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();

            // Gradient filling path under graph
            ctx.lineTo(telemetryCanvas.width, telemetryCanvas.height);
            ctx.lineTo(0, telemetryCanvas.height);
            ctx.closePath();
            let grad = ctx.createLinearGradient(0, 0, 0, telemetryCanvas.height);
            grad.addColorStop(0, simErrorState ? 'rgba(239, 68, 68, 0.25)' : 'rgba(56, 189, 248, 0.2)');
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = grad;
            ctx.fill();

            // Display current telemetry status text overlays
            ctx.fillStyle = '#ffffff';
            ctx.font = '10px monospace';
            ctx.fillText(simErrorState ? 'CRITICAL SYSTEM ANOMALY SIMULATED' : 'STABLE CONNECTIVITY SPECTRUM', 12, 22);

            setTimeout(() => {
                requestAnimationFrame(drawTelemetryLoop);
            }, 50);
        }

        // Trigger random live simulation error in dashboard representation
        function simulateDisruptiveError() {
            simErrorState = true;
            showToast('System Telemetry Warning', 'High component thermal loads simulated. Auto throttling triggered.', 'fa-triangle-exclamation');
            setTimeout(() => {
                simErrorState = false;
                showToast('System Telemetry Restored', 'Heat sink values back within threshold limits.', 'fa-circle-check');
            }, 6000);
        }


        // Configurator logic and calculations
        function setPriority(type, btnElement) {
            selectedPriority = type;
            
            // Remove active style from all priority buttons
            document.querySelectorAll('.priority-btn').forEach(btn => {
                btn.classList.remove('active-neon-glow');
            });
            
            // Add active style to selected button
            btnElement.classList.add('active-neon-glow');
            
            updateConfigurator();
        }

        // Dynamic calculator based on sliders, priority models, and system features
        function updateConfigurator() {
            let areaVal = parseInt(document.getElementById('input-area').value);
            document.getElementById('area-val').textContent = areaVal + " m²";

            // Multipliers for layouts
            let machineMultiplier = 0.06; // 0.06 machine per sq meter standard
            if (selectedPriority === 'cinematic') machineMultiplier = 0.05;
            if (selectedPriority === 'freeroam') machineMultiplier = 0.04;

            let calculatedMachines = Math.max(2, Math.round(areaVal * machineMultiplier));
            let calculatedPlayers = calculatedMachines * 2;
            if (selectedPriority === 'cinematic') calculatedPlayers = calculatedMachines * 3;
            if (selectedPriority === 'freeroam') calculatedPlayers = calculatedMachines * 4;

            // Power loads estimates (1.8kW average per high kinetic simulator)
            let basePowerLoad = calculatedMachines * 1.8;
            if (document.getElementById('toggle-audio').checked) basePowerLoad += 1.5;

            // Revenue projections based on average ticket pricing
            let averageTicketPrice = 15;
            let occupancyRate = 0.30; // 30% average weekly uptime
            let weeklyHours = 70;
            let weeklyRevenue = Math.round(calculatedPlayers * occupancyRate * weeklyHours * averageTicketPrice);

            // Update UI fields
            document.getElementById('rec-machines').textContent = calculatedMachines + " units";
            document.getElementById('rec-players').textContent = calculatedPlayers + " concurrent";
            document.getElementById('rec-power').textContent = basePowerLoad.toFixed(1) + " kW";
            document.getElementById('rec-revenue').textContent = "$" + weeklyRevenue.toLocaleString();
            
            // Update Configuration label
            let preset = "Custom Setup " + areaVal + "m²";
            if (areaVal >= 100 && areaVal <= 150) preset = "Standard VR Center (" + areaVal + "m²)";
            if (areaVal > 250) preset = "Mega Park Area (" + areaVal + "m²)";
            document.getElementById('preset-lbl').textContent = "Configuration: " + preset;
        }

        // Trigger dynamic pre-populated setups
        function openConfigurator(presetName, targetArea) {
            document.getElementById('input-area').value = targetArea;
            document.getElementById('preset-lbl').textContent = "Preset Setup: " + presetName;
            updateConfigurator();
            document.getElementById('configurator').scrollIntoView({ behavior: 'smooth' });
            showToast('Preset Deployed', presetName + ' configured in workspace calculator.', 'fa-circle-check');
        }

        function deployConfig() {
            showToast('Configuration Saved', 'Your spatial selection parameters have been saved. Complete return of investment document prepared!', 'fa-circle-check');
            // Scroll to Proposal capture
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        }

        function resetConfig() {
            document.getElementById('input-area').value = 120;
            document.getElementById('toggle-unattended').checked = false;
            document.getElementById('toggle-audio').checked = true;
            updateConfigurator();
            showToast('Workspace Reset', 'Parameters returned to base standards.', 'fa-rotate-right');
        }


        // Modal display systems
        function openProductModal(title, description) {
            document.getElementById('modal-product-title').textContent = title.toUpperCase();
            document.getElementById('modal-product-desc').textContent = description;

            // Generate premium pricing estimates based on components
            let baseEstimate = 19500;
            if (title.includes('Shuttle')) baseEstimate = 29500;
            if (title.includes('Space')) baseEstimate = 48000;
            if (title.includes('Corps')) baseEstimate = 14500;
            
            currentPricing = baseEstimate;
            document.getElementById('modal-calculated-pricing').textContent = "$" + baseEstimate.toLocaleString();

            let modal = document.getElementById('product-modal');
            modal.classList.remove('hidden');
            // Allow render before opacity transition
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modal.querySelector('div').classList.remove('scale-95');
            }, 10);
        }

        function closeProductModal() {
            let modal = document.getElementById('product-modal');
            modal.classList.add('opacity-0');
            modal.querySelector('div').classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function requestSpecProposal() {
            closeProductModal();
            showToast('Added to Proposal', 'Included in your custom equipment catalog schedule.', 'fa-circle-check');
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        }


        // Interactive Accordions
        function toggleAccordion(id) {
            let content = document.getElementById('faq-content-' + id);
            let icon = document.getElementById('faq-icon-' + id);
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                content.classList.add('hidden');
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        }


        // Proposal capture interaction
        function handleFormSubmission(event) {
            event.preventDefault();
            showToast('Proposal Requested', 'Success! We have queued your spatial designs. Check inbox shortly.', 'fa-circle-check');
            event.target.reset();
        }


        // Custom premium toast notifications
        function showToast(title, message, iconName = 'fa-bell') {
            let toast = document.getElementById('toast');
            document.getElementById('toast-title').textContent = title;
            document.getElementById('toast-message').textContent = message;
            
            // Set dynamic icon class
            let iconEl = document.getElementById('toast-icon');
            iconEl.className = 'fa-solid ' + iconName;

            toast.classList.remove('pointer-events-none', 'translate-y-24', 'opacity-0');
            
            // Auto-hide toast after 5 seconds
            setTimeout(() => {
                hideToast();
            }, 5000);
        }

        function hideToast() {
            let toast = document.getElementById('toast');
            toast.classList.add('pointer-events-none', 'translate-y-24', 'opacity-0');
        }


        // Mobile drawer system
        let mobileMenuBtn = document.getElementById('mobile-menu-btn');
        let mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }
        });

        // Close mobile drawer on route jump
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    </script>

</body>
</html>
4
import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  TrendingDown, 
  DollarSign, 
  FileText, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  Layers, 
  MapPin, 
  Clock, 
  Users, 
  Boxes, 
  Globe2, 
  Percent, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Plus, 
  Minus, 
  Info, 
  Sliders, 
  ExternalLink,
  MessageCircle,
  X,
  Bell,
  Copy,
  RefreshCw,
  Eye
} from 'lucide-react';

// Custom smoky background style injection for that gorgeous dark burgundy ambient paint effect
const styleInject = `
  @keyframes smoke-float {
    0% { transform: translate(0px, 0px) scale(1); opacity: 0.15; }
    33% { transform: translate(30px, -50px) scale(1.15); opacity: 0.25; }
    66% { transform: translate(-20px, 20px) scale(0.9); opacity: 0.2; }
    100% { transform: translate(0px, 0px) scale(1); opacity: 0.15; }
  }
  @keyframes card-glow {
    0%, 100% { border-color: rgba(128, 0, 32, 0.2); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4); }
    50% { border-color: rgba(186, 12, 47, 0.45); box-shadow: 0 4px 35px rgba(186, 12, 47, 0.15); }
  }
  .animate-smoke-1 {
    animation: smoke-float 18s infinite ease-in-out;
  }
  .animate-smoke-2 {
    animation: smoke-float 25s infinite ease-in-out reverse;
  }
  .premium-glow-card {
    animation: card-glow 8s infinite ease-in-out;
  }
  .premium-gradient-text {
    background: linear-gradient(135deg, #F5F5F0 0%, #D4AF37 50%, #C5A059 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .crimson-gradient-text {
    background: linear-gradient(135deg, #FF3E6C 0%, #BA0C2F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #0D0D0D;
  }
  ::-webkit-scrollbar-thumb {
    background: #4A0404;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #800020;
  }
`;

export default function App() {
  // Notification states
  const [notifications, setNotifications] = useState([]);
  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4000);
  };

  // Custom App ID
  const appId = typeof __app_id !== 'undefined' ? __app_id : 'oriental-express';

  // Calculator State
  const [cargoWeight, setCargoWeight] = useState(450); // in kg
  const [cargoVolume, setCargoVolume] = useState(2.5); // in m3
  const [cargoValue, setCargoValue] = useState(12000); // USD
  const [productCategory, setProductCategory] = useState('electronics');
  const [hasInsurance, setHasInsurance] = useState(true);
  const [deliverySpeed, setDeliverySpeed] = useState('standard'); // 'fast', 'express'
  const [selectedRoute, setSelectedRoute] = useState('railway'); // 'railway', 'sea', 'air'

  // Calculations
  const baseRates = {
    electronics: { customPercent: 0.10, baseKgRate: 3.2 },
    apparel: { customPercent: 0.08, baseKgRate: 2.8 },
    equipment: { customPercent: 0.12, baseKgRate: 4.1 },
    auto: { customPercent: 0.15, baseKgRate: 5.0 },
  };

  const calculatedDelivery = () => {
    const rateData = baseRates[productCategory];
    let multiplier = 1.0;
    if (deliverySpeed === 'fast') multiplier = 1.35;
    if (deliverySpeed === 'express') multiplier = 1.75;

    let routeMultiplier = 1.0;
    if (selectedRoute === 'air') routeMultiplier = 2.2;
    if (selectedRoute === 'sea') routeMultiplier = 0.65;

    const baseFreight = cargoWeight * rateData.baseKgRate * multiplier * routeMultiplier;
    const volumeCost = cargoVolume * 80; // $80 per cubic meter
    const customDuties = cargoValue * rateData.customPercent;
    const insuranceCost = hasInsurance ? (cargoValue * 0.008) : 0;
    const clearanceFee = 250; // standard flat clearance

    const total = baseFreight + volumeCost + customDuties + insuranceCost + clearanceFee;
    const timeframe = selectedRoute === 'air' ? '5-8 Days' : selectedRoute === 'railway' ? '14-18 Days' : '30-35 Days';

    return {
      freight: Math.round(baseFreight + volumeCost),
      customs: Math.round(customDuties),
      insurance: Math.round(insuranceCost),
      clearance: clearanceFee,
      total: Math.round(total),
      timeframe
    };
  };

  const costResult = calculatedDelivery();

  // Selected State for Interactive Problem Section
  const [selectedProblem, setSelectedProblem] = useState(0);
  const problems = [
    {
      title: "Поиск и проверка поставщиков",
      risk: "95%",
      description: "Ненадежные фабрики и поставщики, языковой барьер ведут к риску отправки бракованной продукции или полной потере средств при предоплате.",
      solution: "Наша база проверенных фабрик в Китае и собственный постоянный штат инспекторов, выезжающих на заводы для пошагового контроля качества производства до погрузки в контейнер.",
      lossMetric: "До 40% от стоимости партии на браке"
    },
    {
      title: "Логистика и пробки на границе",
      risk: "80%",
      description: "Сложности выбора оптимального маршрута, острый дефицит порожних контейнеров и непредвиденные очереди на ключевых пограничных пунктах пропуска.",
      solution: "Собственные гарантированные контейнерные слоты, мультимодальные цепочки (авто, ЖД, море), отлаженный обход классических пробок за счет альтернативных терминалов.",
      lossMetric: "От 10 до 35 дней непредвиденного простоя"
    },
    {
      title: "Таможенные коллизии",
      risk: "90%",
      description: "Путаница в документах, неверно подобранные коды ТН ВЭД и постоянно меняющиеся правила импорта ведут к крупным штрафам и риску конфискации всего груза.",
      solution: "Оформление документов под ключ нашими штатными сертифицированными брокерами. Полная юридическая ответственность за соблюдение таможенного законодательства.",
      lossMetric: "Штрафы до 300% от стоимости пошлины"
    },
    {
      title: "Скрытые финансовые комиссии",
      risk: "75%",
      description: "Скрытые расходы посредников на конвертациях, валютный контроль, задержки транзакций из-за санкционного давления и отключения SWIFT банков.",
      solution: "Прозрачные белые платежи через легальные расчетные хабы. Прямая оплата в юанях по выгодному межбанковскому курсу с предоставлением закрывающих документов.",
      lossMetric: "От 5% до 12% переплаты на комиссиях"
    }
  ];

  // Callback form submit state
  const [formData, setFormData] = useState({ name: '', phone: '', telegram: '', cargoType: 'Оборудование' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone || !formData.name) {
      showToast("Пожалуйста, заполните имя и телефон", "error");
      return;
    }
    setFormSubmitted(true);
    showToast("Заявка успешно отправлена! Наш специалист свяжется с вами.", "success");
  };

  // Quick interactive test mode for the design system playground
  const [selectedDesignTheme, setSelectedDesignTheme] = useState('oriental-crimson');
  const [testToggle, setTestToggle] = useState(true);
  const [testSlider, setTestSlider] = useState(70);
  const [activeFAQ, setActiveFAQ] = useState(0);

  // FAQ Array
  const faqs = [
    {
      q: "Какие гарантии сохранности груза вы предоставляете?",
      a: "Мы несем полную финансовую ответственность по официальному договору. Если товар будет поврежден или утерян по вине перевозчика, мы компенсируем 100% его задекларированной стоимости. Дополнительно каждый груз страхуется в ведущих страховых компаниях."
    },
    {
      q: "Как происходит оплата поставщику в Китай в условиях санкций?",
      a: "Мы предлагаем полностью легальный белый финансовый аутсорсинг. У нас настроены прямые каналы расчетов в юанях с китайскими фабриками через уполномоченные банки. Вы платите рубли на нашу российскую компанию, мы отправляем юани напрямую поставщику."
    },
    {
      q: "Что входит в услугу таможенного оформления 'под ключ'?",
      a: "Полный комплекс: классификация товаров по ТН ВЭД, расчет таможенной стоимости и пошлин, сбор и подача деклараций, прохождение фитосанитарного и ветеринарного контроля, получение разрешительных документов (сертификатов, деклараций соответствия) и представление ваших интересов в таможенных органах."
    },
    {
      q: "Каковы минимальные объемы грузов для отправки?",
      a: "Для сборных грузов (LCL) минимальный объем составляет всего 100 кг или 0.5 кубических метра. Для генеральных грузов мы поставляем индивидуальные контейнеры любого типа (20ft, 40ft, HQ, Ref)."
    }
  ];

  // Design System Playground copy code trigger
  const copyToClipboard = (text) => {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    showToast("Стиль скопирован в буфер обмена!");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F0] font-sans antialiased selection:bg-[#BA0C2F] selection:text-white relative overflow-x-hidden">
      
      {/* Injecting Styles */}
      <style dangerouslySetInnerHTML={{ __html: styleInject }} />

      {/* Cinematic Smoke & Fire Backdrop Ambient Overlays */}
      <div className="absolute top-0 left-0 w-full h-[1200px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-200px] left-[15%] w-[80vw] h-[80vw] max-w-[1000px] rounded-full bg-gradient-to-tr from-[#3D000C] to-transparent opacity-40 blur-[140px] animate-smoke-1"></div>
        <div className="absolute top-[300px] right-[-100px] w-[50vw] h-[50vw] max-w-[700px] rounded-full bg-gradient-to-bl from-[#800020] to-transparent opacity-15 blur-[120px] animate-smoke-2"></div>
        <div className="absolute top-[80px] left-[50%] -translate-x-1/2 w-full max-w-[1400px] h-px bg-gradient-to-r from-transparent via-[#800020]/40 to-transparent"></div>
      </div>

      {/* Warm Ambient light separator in the background */}
      <div className="absolute top-[1800px] left-[-200px] w-[600px] h-[600px] bg-[#3A0A15]/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[3400px] right-[-200px] w-[700px] h-[700px] bg-[#2E020A]/30 rounded-full blur-[180px] pointer-events-none"></div>

      {/* Floating Notifications Toaster */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        {notifications.map(notif => (
          <div key={notif.id} className="pointer-events-auto bg-[#141414] border-l-4 border-[#BA0C2F] text-[#F5F5F0] p-4 rounded-r-lg shadow-2xl flex items-start gap-3 transform translate-y-0 transition-all duration-300 animate-bounce-short">
            {notif.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-[#BA0C2F] shrink-0 mt-0.5" />
            )}
            <div className="flex-1 text-sm">{notif.message}</div>
            <button onClick={() => setNotifications(prev => prev.filter(n => n.id !== notif.id))} className="text-gray-500 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-[#241A1C] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand area */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-[#BA0C2F] to-[#4A0404] flex items-center justify-center border border-[#800020] relative overflow-hidden shadow-lg shadow-[#800020]/20">
              <span className="font-serif text-xl font-bold text-white tracking-widest relative z-10">O</span>
              <div className="absolute inset-0 bg-[#800020] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
            <div>
              <span className="font-serif text-lg tracking-[0.25em] text-[#F5F5F0] block font-bold leading-none">ORIENTAL</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold">EXPRESS</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-sm font-medium tracking-wide text-gray-400 hover:text-white hover:underline decoration-red-500 underline-offset-8 transition-colors">Главная</a>
            <a href="#problems" className="text-sm font-medium tracking-wide text-gray-400 hover:text-white hover:underline decoration-red-500 underline-offset-8 transition-colors">Анализ Рисков</a>
            <a href="#zones" className="text-sm font-medium tracking-wide text-gray-400 hover:text-white hover:underline decoration-red-500 underline-offset-8 transition-colors">Зоны Ответственности</a>
            <a href="#calculator" className="text-sm font-medium tracking-wide text-gray-400 hover:text-white hover:underline decoration-red-500 underline-offset-8 transition-colors">Калькулятор тарифа</a>
            <a href="#specials" className="text-sm font-medium tracking-wide text-gray-400 hover:text-white hover:underline decoration-red-500 underline-offset-8 transition-colors">Условия</a>
            <a href="#playground" className="text-sm font-medium tracking-wide text-[#C5A059] hover:text-[#EAE3D2] transition-colors flex items-center gap-1.5 bg-[#800020]/25 px-3 py-1 rounded-full border border-[#800020]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>UI Спецификации</span>
            </a>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-xs text-gray-400">Срочная связь</span>
              <span className="text-sm font-mono text-[#F5F5F0] hover:text-[#BA0C2F] transition-colors cursor-pointer">@KEYTLIS_PPTX</span>
            </div>
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded bg-gradient-to-r from-[#BA0C2F] to-[#800020] text-xs uppercase tracking-widest font-semibold hover:opacity-90 active:scale-95 transition-all border border-[#9A102F] shadow-lg shadow-[#800020]/20 text-white"
            >
              Консультация
            </a>
          </div>

        </div>
      </header>

      {/* HERO SECTION STAGE */}
      <section id="hero" className="relative pt-8 pb-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Premium copy & core value proposition */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#1A0A0E] border border-[#800020] px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-[#F5F5F0] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#BA0C2F] animate-pulse"></span>
              БЕЛАЯ ЛОГИСТИКА БЕЗ РИСКОВ ДЛЯ БИЗНЕСА
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-[#F5F5F0]">
                ORIENTAL<br/>
                <span className="premium-gradient-text">EXPRESS</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light max-w-xl leading-relaxed">
                Импорт из Китая без скрытых рисков, переплат и задержек на таможне. Берем на себя всю цепочку поставок от поиска завода до вашего склада.
              </p>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 border-t border-b border-[#241A1C] py-6 max-w-lg">
              <div>
                <div className="font-serif text-3xl font-bold text-[#EAE3D2]">&gt;5 лет</div>
                <div className="text-xs text-gray-400 mt-1">Опыта на рынке</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-[#EAE3D2]">10/10</div>
                <div className="text-xs text-gray-400 mt-1">Надежность рейсов</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-[#EAE3D2]">~250+</div>
                <div className="text-xs text-gray-400 mt-1">Контейнеров в месяц</div>
              </div>
            </div>

            {/* CTA action group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md">
              <a 
                href="#calculator" 
                className="flex-1 px-8 py-4 rounded bg-gradient-to-r from-[#BA0C2F] to-[#4A0404] hover:from-[#d11036] hover:to-[#5e0707] text-sm uppercase tracking-widest font-bold text-center transition-all duration-300 border border-[#BA0C2F] shadow-xl shadow-[#BA0C2F]/10 flex items-center justify-center gap-2"
              >
                Рассчитать поставку
                <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#problems" 
                className="flex-1 px-8 py-4 rounded bg-[#141414] hover:bg-[#1E1E1E] text-sm uppercase tracking-widest font-bold text-center border border-[#241A1C] text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Посмотреть риски
              </a>
            </div>

            {/* Micro-avatars of inspection team in Shenzhen */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-9 h-9 rounded-full border-2 border-[#0A0A0A] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120)' }}></div>
                <div className="w-9 h-9 rounded-full border-2 border-[#0A0A0A] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120)' }}></div>
                <div className="w-9 h-9 rounded-full border-2 border-[#0A0A0A] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120)' }}></div>
              </div>
              <p className="text-xs text-gray-400">
                Собственный штат инспекторов в <span className="text-white font-semibold">Шэньчжэне, Иу, Гуанчжоу</span>. Контролируем всё.
              </p>
            </div>
          </div>

          {/* Right Column: Breathtaking Equine & Fire Graphic Banner simulating the uploaded asset */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#3A181E] bg-[#120B0C] p-2 shadow-2xl shadow-red-950/20 group">
              
              {/* Image banner mock with premium styling overlay */}
              <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] rounded-xl overflow-hidden">
                
                {/* Background artistic horse and smoke render (Unsplash high quality dark styled artistic horse representing speed, dynamic movement and raw elegance) */}
                <img 
                  src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=1200" 
                  alt="Dynamic speed" 
                  className="w-full h-full object-cover grayscale opacity-25 scale-105 group-hover:scale-100 transition-transform duration-700"
                />

                {/* Simulated dynamic paint overlay block inspired by the uploaded asset (A majestic black horse flying, engulfed in gorgeous dark crimson / scarlet smoke plumes) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-[#3A0A15]/40 to-transparent"></div>

                {/* SVG/Emblem representing majestic dynamic horse power */}
                <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden pointer-events-none">
                  {/* Abstract red fire glow represent speed */}
                  <div className="absolute top-[20%] right-[-10%] w-[120%] h-[60%] bg-gradient-to-l from-[#BA0C2F]/50 via-[#800020]/20 to-transparent rounded-full blur-[40px] mix-blend-color-dodge"></div>
                </div>

                {/* Artistic Floating Circles resembling the original design layout left badges */}
                <div className="absolute bottom-6 left-6 flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full border border-[#BA0C2F]/80 bg-[#140A0D]/90 flex items-center justify-center overflow-hidden shadow-lg hover:scale-105 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=120)' }}></div>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[#BA0C2F]/55 bg-[#140A0D]/90 flex items-center justify-center overflow-hidden shadow-lg hover:scale-105 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1598974357801-ae41408d1337?auto=format&fit=crop&q=80&w=120)' }}></div>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[#BA0C2F]/30 bg-[#140A0D]/90 flex items-center justify-center overflow-hidden shadow-lg hover:scale-105 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=120)' }}></div>
                  </div>
                </div>

                {/* Big Badge Overlay in the corner */}
                <div className="absolute top-6 right-6 bg-[#0F080A]/90 border border-[#BA0C2F]/50 px-4 py-2 rounded backdrop-blur text-right">
                  <span className="block text-[9px] uppercase tracking-widest text-[#BA0C2F] font-bold">ОТ ПОСТАВЩИКА</span>
                  <span className="block text-xs text-[#F5F5F0] font-serif font-semibold mt-0.5">До вашего склада в РФ</span>
                </div>

                {/* Interactive Overlay Badge indicating Live Tracking */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-[#0A0A0A]/90 border border-[#241A1C] px-3 py-1.5 rounded-full backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                  <span className="text-[10px] tracking-widest uppercase font-mono text-gray-300">Южный маршрут активен</span>
                </div>

                {/* Central Focus Accent representing Majestic Horse from the image */}
                <div className="absolute top-[15%] left-[30%] w-[200px] h-[250px] pointer-events-none mix-blend-screen opacity-90 transition-transform duration-700 group-hover:scale-105" style={{ transform: 'rotate(-5deg)' }}>
                  {/* Stylized vector rendering of a horse silhouette with fire mane */}
                  <svg viewBox="0 0 100 100" className="w-full h-full text-red-500 drop-shadow-[0_0_15px_rgba(186,12,47,0.7)]" fill="currentColor">
                    <path d="M75,30 C72,25 60,18 52,22 C48,24 45,28 42,32 C38,37 32,45 28,52 C20,68 15,75 10,85 C15,82 25,78 32,74 C36,71 39,66 43,62 C48,56 55,42 62,38 C68,34 76,32 75,30 Z" className="animate-pulse" />
                    <circle cx="58" cy="27" r="1.5" fill="#FFFFFF" />
                  </svg>
                </div>
                
              </div>

              {/* Lower info strip */}
              <div className="p-6 bg-[#0F080A] border-t border-[#241A1C] space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#BA0C2F] font-bold">Главный Принцип:</span>
                  <span className="text-xs font-mono text-gray-400">СБОРНЫЙ ИЛИ ЦЕЛЫЙ</span>
                </div>
                <h3 className="font-serif text-xl text-[#F5F5F0]">Импорт без рисков и непредвиденных трат</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  От поиска надежного фабриканта в КНР до полной очистки груза на таможне в РФ. Берем всю логистику на себя, вы получаете готовый очищенный товар на своем складе с полным пакетом документов (ГТД, Торг-12).
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: WHAT EATS YOUR PROFIT? (Interactive Problem Analyzer with loss-counter) */}
      <section id="problems" className="py-24 border-t border-[#1C1214] bg-[#0C0708] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#BA0C2F] font-bold block">ГОРЬКАЯ ПРАВДА РЫНКА</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F0]">
              Что «съедает» вашу <span className="premium-gradient-text">прибыль?</span>
            </h2>
            <p className="text-sm text-gray-400">
              Это не просто неудобства. Это системные проблемы, которые прямо сейчас уничтожают маржинальность вашего бизнеса и мешают масштабироваться.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left list of problems (interactive selectors) */}
            <div className="lg:col-span-5 space-y-4">
              {problems.map((problem, idx) => (
                <div 
                  key={idx}
                  onClick={() => {
                    setSelectedProblem(idx);
                    showToast(`Переключено на: ${problem.title}`, 'info');
                  }}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden ${
                    selectedProblem === idx 
                      ? 'bg-[#1C0F12] border-[#BA0C2F] shadow-lg shadow-[#BA0C2F]/10' 
                      : 'bg-[#110D0E] border-[#1F1719] hover:bg-[#161112] hover:border-[#382629]'
                  }`}
                >
                  {/* Subtle index ribbon */}
                  <div className="absolute top-0 right-0 px-3 py-1 bg-[#1C0F12] border-l border-b border-[#2D1B1E] text-[10px] font-mono text-gray-400">
                    КЕЙС 0{idx + 1}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded flex items-center justify-center text-sm font-bold ${
                      selectedProblem === idx ? 'bg-[#BA0C2F] text-white' : 'bg-[#1E1618] text-[#BA0C2F]'
                    }`}>
                      {idx === 0 && <Users className="w-5 h-5" />}
                      {idx === 1 && <Boxes className="w-5 h-5" />}
                      {idx === 2 && <FileText className="w-5 h-5" />}
                      {idx === 3 && <DollarSign className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-serif text-base text-[#F5F5F0] font-semibold">{problem.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-mono text-red-500 font-bold uppercase">РИСК: {problem.risk}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span className="text-[10px] text-gray-400 font-medium">Критично для СМБ</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right details panel (with custom interactive risk visualization) */}
            <div className="lg:col-span-7 bg-[#120B0C] rounded-2xl border border-[#2D191C] p-8 space-y-8 premium-glow-card">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#241A1C] pb-6">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-red-500">ТЕКУЩАЯ ПРОБЛЕМА ПОСТАВОК</span>
                  <h3 className="font-serif text-2xl font-bold text-[#F5F5F0] mt-1">{problems[selectedProblem].title}</h3>
                </div>
                <div className="px-4 py-2 bg-[#1F0D10] border border-[#BA0C2F]/50 rounded-lg">
                  <span className="text-[10px] uppercase text-gray-400 block tracking-wider leading-none">ВЕРОЯТНОСТЬ</span>
                  <span className="text-2xl font-serif text-[#BA0C2F] font-black">{problems[selectedProblem].risk}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-[#BA0C2F] font-bold">Симптомы и последствия:</h4>
                <p className="text-gray-300 text-sm leading-relaxed bg-[#191012] p-4 rounded border border-[#241A1C]">
                  "{problems[selectedProblem].description}"
                </p>
              </div>

              {/* Dynamic Interactive Counter Area simulating real-time losses */}
              <div className="p-6 bg-gradient-to-br from-[#1C0F12] to-[#0A0A0A] rounded-xl border border-[#3A181E] relative overflow-hidden">
                <div className="absolute top-2 right-3 flex items-center gap-1.5 bg-[#2E0B11] px-2 py-0.5 rounded text-[9px] text-[#BA0C2F] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  Критический порог
                </div>
                <span className="text-xs uppercase tracking-widest text-[#BA0C2F] font-bold block mb-1">ФИНАНСОВЫЕ ПОТЕРИ</span>
                <div className="text-3xl font-serif font-black text-white">{problems[selectedProblem].lossMetric}</div>
                <p className="text-xs text-gray-400 mt-2">
                  Средний показатель, выведенный на основе аудита более 120 импортеров за последний год.
                </p>
              </div>

              {/* Solution box representation of Oriental Express capability */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-950 flex items-center justify-center text-green-400 border border-green-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-sm uppercase tracking-widest text-green-400 font-bold">КАК РЕШАЕТ ORIENTAL EXPRESS:</h4>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed pl-7">
                  {problems[selectedProblem].solution}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: YOUR IMPORT - OUR ZONE OF RESPONSIBILITY */}
      <section id="zones" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-[#BA0C2F] font-bold block">БЕЗУПРЕЧНЫЙ КОНТРОЛЬ</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F0]">
              Ваш импорт — наша зона <span className="premium-gradient-text">ответственности</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm text-left">
            Мы берем на себя полную юридическую и финансовую ответственность за соблюдение сроков, сохранность груза и прохождение таможни.
          </p>
        </div>

        {/* Dynamic Horizontal Stats showcase styled like the cards on the right of the inspiration layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Zone Item 1: Experience & Reliability */}
          <div className="bg-[#110D0E] border border-[#241A1C] hover:border-[#BA0C2F]/50 rounded-xl p-8 space-y-6 transition-all group hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-[#1A0A0E] border border-[#800020] rounded flex items-center justify-center text-red-500 group-hover:bg-[#BA0C2F] group-hover:text-white transition-all">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="text-4xl font-serif font-black text-gray-800 group-hover:text-[#BA0C2F]/20 transition-all">01</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#EAE3D2] font-semibold">5+ лет на рынке КНР</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Отлаженные логистические коридоры во все регионы РФ. Знаем тонкости законодательства обеих стран, что исключает ошибки.
              </p>
            </div>

            <div className="pt-4 border-t border-[#241A1C] flex items-center justify-between text-xs font-mono">
              <span className="text-gray-500">ПРОВЕРЕННЫЙ МАРШРУТ</span>
              <span className="text-[#BA0C2F] font-bold">100% ГАРАНТИЯ</span>
            </div>
          </div>

          {/* Zone Item 2: Logistical Power */}
          <div className="bg-[#110D0E] border border-[#241A1C] hover:border-[#BA0C2F]/50 rounded-xl p-8 space-y-6 transition-all group hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-[#1A0A0E] border border-[#800020] rounded flex items-center justify-center text-red-500 group-hover:bg-[#BA0C2F] group-hover:text-white transition-all">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-4xl font-serif font-black text-gray-800 group-hover:text-[#BA0C2F]/20 transition-all">02</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#EAE3D2] font-semibold">10 Логистических компаний</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Наша продукция в надежных руках. Риски задержек и ареста грузов сведены к нулю за счет диверсификации партнерской сети и собственных складов консолидации.
              </p>
            </div>

            <div className="pt-4 border-t border-[#241A1C] flex items-center justify-between text-xs font-mono">
              <span className="text-gray-500">СЕМЬЯ ПЕРЕВОЗЧИКОВ</span>
              <span className="text-[#BA0C2F] font-bold">РЕЗЕРВНЫЕ СЛОТЫ</span>
            </div>
          </div>

          {/* Zone Item 3: Massive scale & Consolidation */}
          <div className="bg-[#110D0E] border border-[#241A1C] hover:border-[#BA0C2F]/50 rounded-xl p-8 space-y-6 transition-all group hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-[#1A0A0E] border border-[#800020] rounded flex items-center justify-center text-red-500 group-hover:bg-[#BA0C2F] group-hover:text-white transition-all">
                <Boxes className="w-6 h-6" />
              </div>
              <span className="text-4xl font-serif font-black text-gray-800 group-hover:text-[#BA0C2F]/20 transition-all">03</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#EAE3D2] font-semibold">~250 Контейнеров в месяц</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Консолидируем грузы разных объемов, чтобы вы экономили до 30% на фрахте. Вы платите только за фактически занимаемый вашим грузом объем.
              </p>
            </div>

            <div className="pt-4 border-t border-[#241A1C] flex items-center justify-between text-xs font-mono">
              <span className="text-gray-500">ОБЪЕМЫ ОТПРАВОК</span>
              <span className="text-[#BA0C2F] font-bold">ЭКОНОМИЯ НА ФРАХТЕ</span>
            </div>
          </div>

        </div>

        {/* Dynamic graphical callout with interactive map path visualizer */}
        <div className="mt-12 bg-[#120B0C] rounded-2xl border border-[#2D191C] p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div className="space-y-4 max-w-xl text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#2E0B11] px-2.5 py-0.5 rounded text-[10px] text-red-500 font-bold uppercase tracking-widest">
              МАРШРУТНЫЙ АНАЛИЗАТОР
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#F5F5F0]">Схема оптимизации импорта под ключ</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Мы разработали три ключевых вектора доставки: Экономичный (по морю через Владивосток), Сбалансированный (прямой ЖД экспресс до Москвы) и Сверхбыстрый (авиа доставка из Гуанчжоу).
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex flex-wrap gap-3 justify-center">
            <button 
              onClick={() => { setSelectedRoute('railway'); showToast('Выбран ЖД Экспресс'); }}
              className={`px-5 py-3 rounded-lg border transition-all text-xs uppercase tracking-wider font-bold ${
                selectedRoute === 'railway' ? 'bg-[#BA0C2F] border-[#BA0C2F] text-white' : 'bg-[#181112] border-[#2C1C1E] text-gray-400 hover:text-white'
              }`}
            >
              🚂 ЖД Экспресс (14-18 дн.)
            </button>
            <button 
              onClick={() => { setSelectedRoute('sea'); showToast('Выбран Морской фрахт'); }}
              className={`px-5 py-3 rounded-lg border transition-all text-xs uppercase tracking-wider font-bold ${
                selectedRoute === 'sea' ? 'bg-[#BA0C2F] border-[#BA0C2F] text-white' : 'bg-[#181112] border-[#2C1C1E] text-gray-400 hover:text-white'
              }`}
            >
              🚢 Море + Порт (30-35 дн.)
            </button>
            <button 
              onClick={() => { setSelectedRoute('air'); showToast('Выбрана Авиа доставка'); }}
              className={`px-5 py-3 rounded-lg border transition-all text-xs uppercase tracking-wider font-bold ${
                selectedRoute === 'air' ? 'bg-[#BA0C2F] border-[#BA0C2F] text-white' : 'bg-[#181112] border-[#2C1C1E] text-gray-400 hover:text-white'
              }`}
            >
              ✈️ Сверхбыстрый Авиа (5-8 дн.)
            </button>
          </div>
        </div>

      </section>

      {/* SECTION 4: LIVE CALCULATION CONSOLE & DASHBOARD PREVIEW */}
      <section id="calculator" className="py-24 border-t border-[#1C1214] bg-[#0A0607] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#BA0C2F] font-bold block">ИНТЕРАКТИВНЫЕ РАСЧЕТЫ</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F0]">
              Калькулятор стоимости и <span className="premium-gradient-text">сроков доставки</span>
            </h2>
            <p className="text-sm text-gray-400">
              Настройте параметры вашей партии груза ниже, чтобы мгновенно увидеть прогнозируемую смету под ключ.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Calculator controls panel */}
            <div className="lg:col-span-7 bg-[#110D0E] border border-[#241A1C] rounded-2xl p-6 md:p-8 space-y-8 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Parameter weight */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Вес груза (кг)</label>
                    <span className="text-sm font-mono text-[#BA0C2F] font-bold">{cargoWeight} кг</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="10000" 
                    step="50"
                    value={cargoWeight} 
                    onChange={(e) => setCargoWeight(Number(e.target.value))}
                    className="w-full accent-[#BA0C2F] bg-gray-800 rounded-lg appearance-none h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>100 кг</span>
                    <span>5 000 кг</span>
                    <span>10 000 кг</span>
                  </div>
                </div>

                {/* Parameter volume */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Объем груза (м³)</label>
                    <span className="text-sm font-mono text-[#BA0C2F] font-bold">{cargoVolume} м³</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="50" 
                    step="0.5"
                    value={cargoVolume} 
                    onChange={(e) => setCargoVolume(Number(e.target.value))}
                    className="w-full accent-[#BA0C2F] bg-gray-800 rounded-lg appearance-none h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>0.5 м³</span>
                    <span>25 м³</span>
                    <span>50 м³</span>
                  </div>
                </div>

              </div>

              {/* Parameter cargo value */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Стоимость партии (USD)</label>
                  <span className="text-sm font-mono text-green-400 font-bold">${cargoValue.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="2000" 
                  max="150000" 
                  step="1000"
                  value={cargoValue} 
                  onChange={(e) => setCargoValue(Number(e.target.value))}
                  className="w-full accent-[#BA0C2F] bg-gray-800 rounded-lg appearance-none h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>$2,000</span>
                  <span>$75,000</span>
                  <span>$150,000</span>
                </div>
              </div>

              {/* Select options row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Category selectors */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold block">Категория товара</label>
                  <select 
                    value={productCategory} 
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="w-full bg-[#1A1213] border border-[#2D1B1E] text-gray-300 rounded px-3 py-2.5 focus:outline-none focus:border-[#BA0C2F] text-sm"
                  >
                    <option value="electronics">💻 Электроника и Гаджеты (Пошлина 10%)</option>
                    <option value="apparel">🧥 Одежда и текстиль (Пошлина 8%)</option>
                    <option value="equipment">⚙️ Промышленное Оборудование (Пошлина 12%)</option>
                    <option value="auto">🚗 Автозапчасти / Компоненты (Пошлина 15%)</option>
                  </select>
                </div>

                {/* Delivery speed selector */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold block">Приоритет Срочности</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      type="button"
                      onClick={() => setDeliverySpeed('standard')}
                      className={`py-2 px-1 text-center text-xs rounded border transition-all ${
                        deliverySpeed === 'standard' ? 'bg-[#2E0B11] border-[#BA0C2F] text-[#F5F5F0]' : 'bg-[#181112] border-[#251A1C] text-gray-400'
                      }`}
                    >
                      Стандарт
                    </button>
                    <button 
                      type="button"
                      onClick={() => setDeliverySpeed('fast')}
                      className={`py-2 px-1 text-center text-xs rounded border transition-all ${
                        deliverySpeed === 'fast' ? 'bg-[#2E0B11] border-[#BA0C2F] text-[#F5F5F0]' : 'bg-[#181112] border-[#251A1C] text-gray-400'
                      }`}
                    >
                      Быстро (+35%)
                    </button>
                    <button 
                      type="button"
                      onClick={() => setDeliverySpeed('express')}
                      className={`py-2 px-1 text-center text-xs rounded border transition-all ${
                        deliverySpeed === 'express' ? 'bg-[#2E0B11] border-[#BA0C2F] text-[#F5F5F0]' : 'bg-[#181112] border-[#251A1C] text-gray-400'
                      }`}
                    >
                      Экспресс (+75%)
                    </button>
                  </div>
                </div>

              </div>

              {/* Toggles area */}
              <div className="flex items-center justify-between p-4 bg-[#181112] rounded-lg border border-[#251A1C]">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <div>
                    <span className="text-sm font-semibold text-[#F5F5F0] block">Финансовое Страхование</span>
                    <span className="text-xs text-gray-400">Покрытие 100% стоимости груза при любых инцидентах (тариф 0.8%)</span>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => {
                    setHasInsurance(!hasInsurance);
                    showToast(hasInsurance ? "Страховка отключена" : "Страховка включена");
                  }}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 focus:outline-none ${
                    hasInsurance ? 'bg-[#BA0C2F]' : 'bg-gray-700'
                  }`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-200 ${
                    hasInsurance ? 'translate-x-6' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>

            </div>

            {/* Price estimation dashboard panel (Right Column) */}
            <div className="lg:col-span-5 bg-[#170E10] border-2 border-[#BA0C2F] rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden text-left shadow-2xl shadow-red-950/20">
              
              {/* Dynamic decorative backdrop pattern */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#BA0C2F]/5 rounded-full blur-[40px] pointer-events-none"></div>

              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-[#BA0C2F] font-bold">ИТОГОВАЯ СМЕТА РЕЙСА</span>
                  <span className="text-[10px] font-mono bg-green-950 text-green-400 px-2 py-0.5 rounded border border-green-800">РАСЧЕТ ВЫПОЛНЕН</span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-gray-400">Ориентировочная стоимость доставки под ключ:</span>
                  <div className="text-4xl md:text-5xl font-serif font-black text-white flex items-baseline gap-1">
                    ${costResult.total.toLocaleString()}
                    <span className="text-xs font-mono text-gray-400 font-normal">/ за все услуги</span>
                  </div>
                </div>

                {/* Spliced detailed price tags */}
                <div className="space-y-3 pt-4 border-t border-[#2F1F21]">
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 flex items-center gap-1.5">
                      Базовый фрахт и логистика
                    </span>
                    <span className="font-mono text-gray-300 font-semibold">${costResult.freight.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 flex items-center gap-1.5">
                      Пошлины и таможенная декларация
                    </span>
                    <span className="font-mono text-gray-300 font-semibold">${costResult.customs.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Страховое покрытие партии</span>
                    <span className="font-mono text-gray-300 font-semibold">${costResult.insurance.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Таможенный брокер и терминалы</span>
                    <span className="font-mono text-gray-300 font-semibold">${costResult.clearance.toLocaleString()}</span>
                  </div>

                </div>

                {/* Logistics route estimate */}
                <div className="p-4 bg-[#0A0A0A] rounded-lg border border-[#2F1F21] space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Транспортный коридор:</span>
                    <span className="font-bold text-white uppercase">{selectedRoute === 'air' ? '✈️ Авиа' : selectedRoute === 'sea' ? '🚢 Море' : '🚂 Железная дорога'}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Планируемый срок прибытия:</span>
                    <span className="font-bold text-red-500 font-serif">{costResult.timeframe}</span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 leading-normal italic text-center">
                  * Расчет является предварительным и зависит от текущих ставок фрахта на день забора груза. Для точной фиксации цены отправьте заявку.
                </p>
              </div>

              <div className="pt-6 relative z-10">
                <a 
                  href="#contact" 
                  className="w-full inline-block px-6 py-4 rounded bg-[#BA0C2F] hover:bg-red-700 text-sm uppercase tracking-widest font-bold text-center text-white transition-all shadow-lg hover:shadow-red-950/50"
                >
                  Зафиксировать этот тариф
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: SPECIAL CONDITIONS FOR CLIENTS */}
      <section id="specials" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: text details and Russian Manager showcase */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-[#BA0C2F] font-bold block">ЭКСКЛЮЗИВНЫЙ СЕРВИС</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F0]">
              Специальные условия для <span className="premium-gradient-text">наших клиентов</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Мы создали не просто карго-перевозчика, а полноценный международный финансово-логистический хаб. Вы получаете сервис европейского уровня, адаптированный под современные российские реалии.
            </p>

            {/* List of features with premium dots */}
            <div className="space-y-4">
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1A0A0E] border border-[#800020] flex items-center justify-center text-[#BA0C2F] shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BA0C2F]"></span>
                </div>
                <div>
                  <span className="font-semibold text-white block">Личный русскоязычный менеджер в Китае</span>
                  <span className="text-xs text-gray-400">Круглосуточная поддержка, оперативное решение споров с производителем непосредственно на месте.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1A0A0E] border border-[#800020] flex items-center justify-center text-[#BA0C2F] shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BA0C2F]"></span>
                </div>
                <div>
                  <span className="font-semibold text-white block">Оплата долями и финансирование сделок</span>
                  <span className="text-xs text-gray-400">Возможность отсрочки платежей до 30% от стоимости закупки для проверенных постоянных партнеров.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1A0A0E] border border-[#800020] flex items-center justify-center text-[#BA0C2F] shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BA0C2F]"></span>
                </div>
                <div>
                  <span className="font-semibold text-white block">Бесплатная комплексная страховка груза</span>
                  <span className="text-xs text-gray-400">Для всех отправлений первого месяца сотрудничества берем расходы по страхованию на себя.</span>
                </div>
              </div>

            </div>

            {/* CTA to get full presentation file */}
            <div className="pt-4">
              <button 
                onClick={() => showToast("Презентация и тарифный лист отправлены вам в Телеграм!")}
                className="inline-flex items-center gap-2 bg-[#141414] hover:bg-[#1C1C1C] border border-[#241A1C] hover:border-[#BA0C2F] px-5 py-3 rounded text-xs uppercase tracking-widest font-bold text-gray-300 hover:text-white transition-all"
              >
                <FileText className="w-4 h-4 text-[#BA0C2F]" />
                Скачать PDF Презентацию (12.4 MB)
              </button>
            </div>
          </div>

          {/* Right Column: Inspired layout visual presenting a premium agent card & stylized horse portrait */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-[#120B0C] to-[#0D0809] rounded-2xl border border-[#3A181E] p-8 space-y-8 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#BA0C2F]/5 rounded-full blur-[50px] pointer-events-none"></div>

              {/* Graphic element representing key contract checklist */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#BA0C2F] font-bold block">ЭТАПЫ БЕЗОПАСНОЙ СДЕЛКИ</span>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#1A1213] rounded border border-[#2B191B]">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-[#2E0B11] text-[#BA0C2F] font-mono text-xs flex items-center justify-center font-bold">01</span>
                      <span className="text-xs font-semibold text-gray-300">Проверка фабрики и подписание ТЗ</span>
                    </div>
                    <span className="text-[10px] text-green-400 font-mono">Выполнено</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#1A1213] rounded border border-[#2B191B]">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-[#2E0B11] text-[#BA0C2F] font-mono text-xs flex items-center justify-center font-bold">02</span>
                      <span className="text-xs font-semibold text-gray-300">Контрольная закупка образцов</span>
                    </div>
                    <span className="text-[10px] text-green-400 font-mono">Выполнено</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#1A1213] rounded border border-[#2B191B]">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-[#2E0B11] text-[#BA0C2F] font-mono text-xs flex items-center justify-center font-bold">03</span>
                      <span className="text-xs font-semibold text-gray-300">Приемка партии на нашем складе в Иу</span>
                    </div>
                    <span className="text-[10px] text-amber-500 font-mono">В процессе</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#1A1213] rounded border border-[#2B191B] opacity-50">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-[#2E0B11] text-[#BA0C2F] font-mono text-xs flex items-center justify-center font-bold">04</span>
                      <span className="text-xs font-semibold text-gray-300">Выход контейнера на таможенный пост</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">Ожидание</span>
                  </div>
                </div>

              </div>

              {/* Styled Team Agent Card representing personal manager in Moscow / Shanghai */}
              <div className="p-6 bg-[#1C0F12] rounded-xl border border-[#4A0404] flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left relative">
                
                <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#BA0C2F] shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=240)' }}></div>

                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 bg-[#4A0404] px-2 py-0.5 rounded text-[9px] text-[#F5F5F0] font-bold">
                    ВЕДУЩИЙ МЕНЕДЖЕР ВЭД
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">Анна Чэнь (Chen Jing)</h4>
                  <p className="text-xs text-gray-400">
                    8 лет опыта в таможенном декларировании сборных грузов. Свободный русский и китайский языки.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="text-[9px] font-mono bg-[#0A0A0A] border border-[#241A1C] text-gray-400 px-2 py-0.5 rounded">#ШЭНЬЧЖЭНЬ</span>
                    <span className="text-[9px] font-mono bg-[#0A0A0A] border border-[#241A1C] text-gray-400 px-2 py-0.5 rounded">#ТАМОЖНЯ-РФ</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: THE PRODUCTION DESIGN SYSTEM PLAYGROUND */}
      <section id="playground" className="py-24 border-t border-[#1C1214] bg-[#090506] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 bg-[#BA0C2F]/20 border border-[#BA0C2F]/50 px-3 py-1 rounded-full text-xs text-[#EAE3D2] font-semibold">
              <Sliders className="w-3.5 h-3.5 text-[#BA0C2F]" />
              ФУНДАМЕНТАЛЬНЫЙ ОФИС РАЗРАБОТКИ
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F0]">
              Оригинальный <span className="premium-gradient-text">Design System</span> Спецификатор
            </h2>
            <p className="text-sm text-gray-400">
              Полный комплект готовых к копированию UI-компонентов, цветовых стилей и элементов интерфейса, поддерживающих ту же безупречную кинематографическую эстетику.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Color swatches & Core variables inspector (Left Column) */}
            <div className="lg:col-span-4 bg-[#110D0E] border border-[#241A1C] rounded-2xl p-6 space-y-6 text-left">
              <h3 className="font-serif text-lg font-bold text-[#EAE3D2] border-b border-[#241A1C] pb-3">Цветовая палитра & Стили</h3>
              
              <div className="space-y-4">
                
                {/* Crimson Swatch */}
                <div className="flex items-center justify-between p-2 bg-[#0A0A0A] rounded border border-[#241A1C] hover:border-[#BA0C2F] transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#BA0C2F] border border-[#E1123F]"></div>
                    <div>
                      <span className="text-xs font-bold text-white block">Oriental Crimson</span>
                      <span className="text-[10px] font-mono text-gray-500">#BA0C2F</span>
                    </div>
                  </div>
                  <button onClick={() => copyToClipboard("#BA0C2F")} className="text-gray-500 hover:text-[#BA0C2F] p-1.5">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Burgundy Swatch */}
                <div className="flex items-center justify-between p-2 bg-[#0A0A0A] rounded border border-[#241A1C] hover:border-[#800020] transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#800020] border border-[#9E0B2D]"></div>
                    <div>
                      <span className="text-xs font-bold text-white block">Imperial Burgundy</span>
                      <span className="text-[10px] font-mono text-gray-500">#800020</span>
                    </div>
                  </div>
                  <button onClick={() => copyToClipboard("#800020")} className="text-gray-500 hover:text-[#BA0C2F] p-1.5">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Cream Swatch */}
                <div className="flex items-center justify-between p-2 bg-[#0A0A0A] rounded border border-[#241A1C] hover:border-[#EAE3D2] transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#EAE3D2] border border-white"></div>
                    <div>
                      <span className="text-xs font-bold text-white block">Classic Ivory / Cream</span>
                      <span className="text-[10px] font-mono text-gray-500">#EAE3D2</span>
                    </div>
                  </div>
                  <button onClick={() => copyToClipboard("#EAE3D2")} className="text-gray-500 hover:text-[#BA0C2F] p-1.5">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Dark Charcoal Swatch */}
                <div className="flex items-center justify-between p-2 bg-[#0A0A0A] rounded border border-[#241A1C] hover:border-gray-500 transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0A0A0A] border border-[#241A1C]"></div>
                    <div>
                      <span className="text-xs font-bold text-white block">Deep Charcoal Void</span>
                      <span className="text-[10px] font-mono text-gray-500">#0A0A0A</span>
                    </div>
                  </div>
                  <button onClick={() => copyToClipboard("#0A0A0A")} className="text-gray-500 hover:text-[#BA0C2F] p-1.5">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

              </div>

              <div className="p-4 bg-[#1A1213] rounded border border-[#2B191B] space-y-2">
                <span className="text-xs uppercase font-bold text-[#BA0C2F] block">Шрифтовая иерархия</span>
                <p className="text-xs text-gray-300">
                  <strong className="text-white">Заголовки:</strong> Стилизованный Serif (Playfair/Noto Serif) с акцентом на кинематографичность.
                </p>
                <p className="text-xs text-gray-300">
                  <strong className="text-white">Тексты:</strong> Высокочитаемый Sans-Serif (Inter/Geist) для идеального сканирования информации.
                </p>
              </div>
            </div>

            {/* Interactive Components Testbed (Right Column) */}
            <div className="lg:col-span-8 bg-[#110D0E] border border-[#241A1C] rounded-2xl p-6 md:p-8 space-y-8 text-left">
              <h3 className="font-serif text-lg font-bold text-[#EAE3D2] border-b border-[#241A1C] pb-3">Конструктор Живых Компонентов</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Buttons Showcase */}
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block">1. Кнопки (States & Variations)</span>
                  
                  <div className="space-y-2">
                    <button className="w-full px-4 py-3 rounded bg-gradient-to-r from-[#BA0C2F] to-[#800020] text-xs uppercase tracking-widest font-semibold text-white transition-all hover:opacity-90 active:scale-95 border border-[#BA0C2F]">
                      Основной экшн (Crimson)
                    </button>
                    <button className="w-full px-4 py-3 rounded bg-[#1A1213] text-xs uppercase tracking-widest font-semibold text-gray-300 transition-all hover:bg-[#2A1D20] active:scale-95 border border-[#2B191B] hover:text-white">
                      Вторичный экшн (Charcoal)
                    </button>
                    <button className="w-full px-4 py-3 rounded bg-transparent text-xs uppercase tracking-widest font-semibold text-[#BA0C2F] hover:text-[#EAE3D2] transition-all flex items-center justify-center gap-2">
                      Текстовая кнопка <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Form Controls Showcase */}
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block">2. Формы ввода (Inputs & Feedback)</span>
                  
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <input 
                        type="text" 
                        placeholder="Введите имя..." 
                        className="w-full bg-[#1A1213] border border-[#2B191B] text-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#BA0C2F]"
                      />
                      <span className="text-[10px] text-gray-500 block text-right">Поле заполнено корректно</span>
                    </div>

                    <div className="space-y-1">
                      <input 
                        type="text" 
                        placeholder="Введите телефон..." 
                        className="w-full bg-[#1A1213] border border-[#BA0C2F] text-gray-300 rounded px-3 py-2 text-xs focus:outline-none"
                      />
                      <span className="text-[10px] text-[#BA0C2F] block text-right">Ошибка: Неверный формат номера</span>
                    </div>
                  </div>
                </div>

                {/* Badges and tags */}
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block">3. Бейджи статусов & Меток</span>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#2E0B11] border border-[#BA0C2F] text-[9px] uppercase tracking-wider font-bold text-[#F5F5F0]">
                      Критический Риск
                    </span>
                    <span className="px-2.5 py-1 rounded bg-green-950 border border-green-800 text-[9px] uppercase tracking-wider font-bold text-green-400">
                      Проверено инспекцией
                    </span>
                    <span className="px-2.5 py-1 rounded bg-blue-950 border border-blue-800 text-[9px] uppercase tracking-wider font-bold text-blue-400">
                      ЖД Экспресс
                    </span>
                    <span className="px-2.5 py-1 rounded bg-amber-950 border border-amber-800 text-[9px] uppercase tracking-wider font-bold text-amber-500">
                      Таможня очищена
                    </span>
                  </div>
                </div>

                {/* Toggles & Sliders Interactive */}
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block">4. Слайдеры и Переключатели</span>
                  
                  <div className="space-y-3 bg-[#1A1213] p-4 rounded border border-[#2B191B]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Инспектор на заводе:</span>
                      <button 
                        onClick={() => setTestToggle(!testToggle)}
                        className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 ${
                          testToggle ? 'bg-[#BA0C2F]' : 'bg-gray-700'
                        }`}
                      >
                        <div className={`bg-white w-4 h-4 rounded-full shadow transform duration-200 ${
                          testToggle ? 'translate-x-5' : 'translate-x-0'
                        }`}></div>
                      </button>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Заполнение контейнера:</span>
                        <span className="font-mono text-white">{testSlider}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="10" 
                        max="100" 
                        value={testSlider} 
                        onChange={(e) => setTestSlider(Number(e.target.value))}
                        className="w-full accent-[#BA0C2F] bg-gray-800 rounded-lg h-1.5 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Dynamic Notification and custom loader trigger inside design inspector */}
              <div className="mt-6 p-4 bg-[#181112] rounded-xl border border-[#251A1C] flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2E0B11] flex items-center justify-center text-[#BA0C2F] shrink-0">
                    <Bell className="w-5 h-5 animate-swing" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Встроенные оповещения (Toasts)</span>
                    <span className="text-[11px] text-gray-400">Протестируйте наши системные уведомления прямо сейчас.</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => showToast("Действие успешно завершено!", "success")}
                    className="px-3 py-1.5 bg-green-950 hover:bg-green-900 border border-green-800 rounded text-[10px] uppercase tracking-wider font-bold text-green-400"
                  >
                    Успешно
                  </button>
                  <button 
                    onClick={() => showToast("Произошла системная ошибка!", "error")}
                    className="px-3 py-1.5 bg-red-950 hover:bg-red-900 border border-red-800 rounded text-[10px] uppercase tracking-wider font-bold text-red-400"
                  >
                    Ошибка
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: HIGH-END FAQ ACCORDION CONSOLE */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#BA0C2F] font-bold block">ЧАСТЫЕ ВОПРОСЫ</span>
          <h2 className="font-serif text-4xl font-bold text-[#F5F5F0]">База знаний импортера</h2>
          <p className="text-sm text-gray-400">
            Всё, что вам нужно знать о белом импорте товаров из Китайской Народной Республики.
          </p>
        </div>

        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-[#110D0E] border border-[#241A1C] rounded-lg overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => {
                  setActiveFAQ(activeFAQ === idx ? null : idx);
                  showToast(`База знаний: раздел ${idx + 1}`);
                }}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#181112]"
              >
                <span className="font-serif text-base sm:text-lg font-semibold text-gray-200 hover:text-white transition-colors">
                  {faq.q}
                </span>
                <span className={`p-1 bg-[#1A1213] rounded-full text-red-500 transform transition-transform duration-300 ${activeFAQ === idx ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>

              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFAQ === idx ? 'max-h-60 border-t border-[#241A1C]' : 'max-h-0'}`}>
                <div className="p-6 text-sm text-gray-400 leading-relaxed bg-[#0F0A0B]">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 8: AUTHENTICATION / REQUEST DECK & CONTACT CONSOLE */}
      <section id="contact" className="py-24 border-t border-[#1C1214] bg-[#0C0708] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side details */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <span className="text-xs uppercase tracking-[0.3em] text-[#BA0C2F] font-bold block">СВЯЗАТЬСЯ С НАМИ</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F0]">
                Оставьте заявку на <span className="premium-gradient-text">расчет ВЭД</span>
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Свяжитесь с нами, и мы расскажем обо всех выгодах сотрудничества, рассчитаем точную спецификацию, подготовим проект договора и проведем предварительную классификацию товаров по ТН ВЭД абсолютно бесплатно.
              </p>

              {/* Telegram Handle graphic */}
              <div className="p-6 bg-[#170F11] rounded-xl border border-[#4A0404] space-y-3 relative">
                <div className="absolute top-3 right-3 text-[#BA0C2F] opacity-20">
                  <MessageCircle className="w-12 h-12" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#BA0C2F] font-bold block">МГНОВЕННЫЙ ОТВЕТ</span>
                <h4 className="text-lg font-serif font-bold text-white">Прямой чат в Telegram:</h4>
                <p className="text-xs text-gray-400">
                  Наш дежурный менеджер ответит на любые вопросы в течение 5 минут. Напишите напрямую.
                </p>
                <div className="pt-2">
                  <a 
                    href="https://t.me/KEYTLIS_PPTX" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-white bg-[#BA0C2F] px-4 py-2 rounded hover:bg-red-700 transition-all"
                  >
                    @KEYTLIS_PPTX
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right side interactive request form */}
            <div className="lg:col-span-7">
              <div className="bg-[#120B0C] border border-[#2D191C] rounded-2xl p-8 space-y-6 text-left premium-glow-card">
                
                <div className="flex justify-between items-center border-b border-[#241A1C] pb-4">
                  <h3 className="font-serif text-xl font-bold text-white">Оформить белую поставку</h3>
                  <span className="text-[10px] font-mono text-gray-500">Запрос #842</span>
                </div>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-950 border border-green-800 rounded-full flex items-center justify-center text-green-400 mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-white">Заявка успешно принята!</h4>
                    <p className="text-sm text-gray-400 max-w-md mx-auto">
                      Спасибо, <strong className="text-white">{formData.name}</strong>. Мы уже готовим аудит рисков по категории <strong className="text-[#BA0C2F]">{formData.cargoType}</strong> для вас. Свяжемся по номеру {formData.phone} в ближайшие минуты.
                    </p>
                    <button 
                      onClick={() => { setFormSubmitted(false); setFormData({ name: '', phone: '', telegram: '', cargoType: 'Оборудование' }); }}
                      className="text-xs uppercase tracking-widest text-[#BA0C2F] hover:text-[#EAE3D2] underline transition-colors"
                    >
                      Отправить другую заявку
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">Ваше имя</label>
                        <input 
                          type="text" 
                          placeholder="Константин" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-[#1C1214] border border-[#2B191B] text-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#BA0C2F] transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">Номер телефона</label>
                        <input 
                          type="tel" 
                          placeholder="+7 (999) 000-00-00" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-[#1C1214] border border-[#2B191B] text-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#BA0C2F] transition-all"
                        />
                      </div>

                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">Категория груза</label>
                      <select 
                        value={formData.cargoType}
                        onChange={(e) => setFormData({...formData, cargoType: e.target.value})}
                        className="w-full bg-[#1C1214] border border-[#2B191B] text-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#BA0C2F] transition-all"
                      >
                        <option>Оборудование и станки</option>
                        <option>Электроника и компоненты</option>
                        <option>Одежда, текстиль, обувь</option>
                        <option>Автозапчасти и химия</option>
                        <option>Другое (уточню менеджеру)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">Телеграм никнейм (Опционально)</label>
                      <input 
                        type="text" 
                        placeholder="@my_telegram" 
                        value={formData.telegram}
                        onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                        className="w-full bg-[#1C1214] border border-[#2B191B] text-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#BA0C2F] transition-all"
                      />
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit" 
                        className="w-full px-6 py-4 rounded bg-gradient-to-r from-[#BA0C2F] to-[#800020] text-xs uppercase tracking-widest font-bold text-center text-white transition-all hover:opacity-95 shadow-lg hover:shadow-red-950/40 flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Получить бесплатный расчет и аудит ВЭД
                      </button>
                    </div>

                    <p className="text-[10px] text-gray-500 leading-normal text-center">
                      Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных и конфиденциальности. Никакого спама, только расчеты по делу.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER CANVAS */}
      <footer className="bg-[#050505] border-t border-[#1C1214] py-16 text-left relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Logo brand */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#BA0C2F] to-[#4A0404] flex items-center justify-center border border-[#800020]">
                <span className="font-serif text-sm font-bold text-white tracking-widest">O</span>
              </div>
              <div>
                <span className="font-serif text-sm tracking-[0.25em] text-[#F5F5F0] block font-bold">ORIENTAL</span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-red-500 font-bold">EXPRESS</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Комплексные поставки сборных и генеральных грузов из Китая под ключ. Полная таможенная очистка без серых схем. Гарантия безопасности.
            </p>
          </div>

          {/* Quick links 1 */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#BA0C2F] font-bold block">Маршруты</span>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li><a href="#zones" className="hover:text-[#F5F5F0] transition-colors">ЖД Экспресс Сибирь</a></li>
              <li><a href="#zones" className="hover:text-[#F5F5F0] transition-colors">Морской фрахт Владивосток</a></li>
              <li><a href="#zones" className="hover:text-[#F5F5F0] transition-colors">Авиадоставка Шэньчжэнь</a></li>
              <li><a href="#zones" className="hover:text-[#F5F5F0] transition-colors">Мультимодальные цепи</a></li>
            </ul>
          </div>

          {/* Quick links 2 */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#BA0C2F] font-bold block">Инструменты</span>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li><a href="#calculator" className="hover:text-[#F5F5F0] transition-colors">Калькулятор тарифа</a></li>
              <li><a href="#playground" className="hover:text-[#F5F5F0] transition-colors">Design System UI</a></li>
              <li><a href="#problems" className="hover:text-[#F5F5F0] transition-colors">Анализатор рисков</a></li>
              <li><a href="#specials" className="hover:text-[#F5F5F0] transition-colors">Скачать PDF</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#BA0C2F] font-bold block">Контакты и заказы</span>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <span className="block text-[10px] text-gray-500 uppercase">По вопросам сотрудничества:</span>
                <span className="font-mono text-white text-sm">@KEYTLIS_PPTX</span>
              </li>
              <li>
                <span className="block text-[10px] text-gray-500 uppercase">Адрес представительства:</span>
                <span className="text-white">Москва-Сити, Башня Федерация, 42 этаж</span>
              </li>
              <li>
                <span className="block text-[10px] text-gray-500 uppercase">Склад консолидации КНР:</span>
                <span className="text-white">Zhejiang Province, Yiwu, West Station Logistics Park</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#1C1214] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Oriental Express Inc. Все права защищены. Разработано в соответствии с гайдлайнами @KEYTLIS_PPTX.</p>
          <div className="flex gap-4">
            <a href="#hero" className="hover:text-white transition-colors">Политика приватности</a>
            <span className="text-gray-700">|</span>
            <a href="#hero" className="hover:text-white transition-colors">Договор оферты</a>
          </div>
        </div>

      </footer>

    </div>
  );
}
5
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BADASS+ CREATIVE | High-Octane Digital Production Studio</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts: Syncopate for headers, Inter for premium UI copy -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syncopate:wght@700&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">
  
  <!-- FontAwesome for robust UI iconography -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Syncopate', 'sans-serif'],
            mono: ['Space Grotesk', 'monospace'],
          },
          colors: {
            brand: {
              crimson: '#E13838',
              crimsonDark: '#B12525',
              crimsonLight: '#FF5454',
              white: '#F8F9FA',
              dark: '#0A0A0A',
              slate: '#1E1E24',
              grayBorder: '#E2E8F0',
            }
          },
          animation: {
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'float-slow': 'float 6s ease-in-out infinite',
            'glimmer': 'glimmer 3s ease-in-out infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' },
            },
            glimmer: {
              '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 4px currentColor)' },
              '50%': { opacity: '1', filter: 'drop-shadow(0 0 16px currentColor)' },
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
      background: #0A0A0A;
    }
    ::-webkit-scrollbar-thumb {
      background: #E13838;
      border-radius: 3px;
    }
    
    /* Specific styling for background splits */
    .bg-grid-pattern {
      background-size: 40px 40px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
    }
    
    .bg-grid-dark {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(225, 56, 56, 0.04) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(225, 56, 56, 0.04) 1px, transparent 1px);
    }

    /* Sound visualizer bars animation */
    .bar {
      animation: soundBounce 1.2s ease-in-out infinite alternate;
    }
    @keyframes soundBounce {
      0% { height: 4px; }
      100% { height: 24px; }
    }
    .bar:nth-child(2) { animation-delay: 0.15s; }
    .bar:nth-child(3) { animation-delay: 0.3s; }
    .bar:nth-child(4) { animation-delay: 0.45s; }

    /* Custom custom-cursor styling for high-end feel */
    .custom-cursor {
      pointer-events: none;
      transition: transform 0.1s ease;
    }
  </style>
</head>

<body class="bg-brand-white text-brand-dark font-sans overflow-x-hidden relative selection:bg-brand-crimson selection:text-white">

  <!-- SOUND / AUDIO EFFECTS (Embedded Web Audio API synthesizer for interactive audio feedback) -->
  <script>
    let audioEnabled = false;
    let audioCtx = null;

    function initAudio() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
    }

    function playBeep(freq = 440, type = 'sine', duration = 0.08, volume = 0.1) {
      if (!audioEnabled) return;
      try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        
        gain.gain.setValueAtTime(volume, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
      } catch (e) {
        console.log("Audio play failed, interacting first required.");
      }
    }

    function toggleAudio() {
      audioEnabled = !audioEnabled;
      const indicator = document.getElementById('audio-status');
      const visualizer = document.getElementById('audio-visualizer');
      if (audioEnabled) {
        initAudio();
        indicator.textContent = 'SOUND: ON';
        indicator.classList.add('text-brand-crimson');
        visualizer.classList.remove('opacity-30');
        playBeep(600, 'triangle', 0.15, 0.15);
      } else {
        indicator.textContent = 'SOUND: OFF';
        indicator.classList.remove('text-brand-crimson');
        visualizer.classList.add('opacity-30');
      }
    }
  </script>

  <!-- DYNAMIC MODAL LAYER (Notifications, Quick Brief Submission & Project Preview) -->
  <div id="interactive-modal" class="fixed inset-0 bg-brand-dark/80 backdrop-blur-md z-50 flex items-center justify-center p-4 hidden opacity-0 transition-opacity duration-300">
    <div class="bg-brand-white text-brand-dark w-full max-w-lg rounded-none border-2 border-brand-dark relative p-8 shadow-[8px_8px_0px_#E13838]">
      <button onclick="closeModal()" class="absolute top-4 right-4 text-brand-dark hover:text-brand-crimson text-xl transition-all">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div id="modal-content">
        <!-- Dyn-loaded content -->
      </div>
    </div>
  </div>

  <!-- SEARCH OVERLAY BAR -->
  <div id="search-overlay" class="fixed inset-0 bg-brand-dark/95 z-50 flex flex-col items-center justify-center p-6 transform translate-y-full transition-transform duration-500 ease-out">
    <button onclick="toggleSearch()" class="absolute top-8 right-8 text-white hover:text-brand-crimson text-3xl transition-all">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="w-full max-w-3xl">
      <label class="text-brand-crimson uppercase font-display text-sm tracking-wider block mb-4">What project or rebel action are you seeking?</label>
      <input type="text" id="search-input" onkeyup="handleSearch(event)" placeholder="TYPE KEYWORD (e.g., 'Web3', 'Branding', 'Futurism') & PRESS ENTER..." class="w-full bg-transparent border-b-2 border-white/20 text-white font-mono text-2xl md:text-4xl focus:border-brand-crimson focus:outline-none pb-4 transition-all">
      <p class="text-white/40 mt-4 text-sm font-mono">Press [ESC] to close. Search queries instantly filter our ecosystem.</p>
      
      <!-- Quick Results Recommendation -->
      <div class="mt-12">
        <span class="text-white/60 font-mono text-xs uppercase block mb-3">Suggested Quick Paths:</span>
        <div class="flex flex-wrap gap-3">
          <button onclick="setSearchValue('Branding')" class="px-3 py-1 bg-white/10 hover:bg-brand-crimson text-white text-xs font-mono transition-colors">#BRANDING</button>
          <button onclick="setSearchValue('Motion')" class="px-3 py-1 bg-white/10 hover:bg-brand-crimson text-white text-xs font-mono transition-colors">#MOTION-GRAPHICS</button>
          <button onclick="setSearchValue('Cyber')" class="px-3 py-1 bg-white/10 hover:bg-brand-crimson text-white text-xs font-mono transition-colors">#CYBER-SaaS</button>
          <button onclick="setSearchValue('Brief')" class="px-3 py-1 bg-white/10 hover:bg-brand-crimson text-white text-xs font-mono transition-colors">#BRIEF-GENERATOR</button>
        </div>
      </div>
    </div>
  </div>

  <!-- FIXED NAVIGATION SIDEBARS (Signature DNA Layout Elements) -->
  
  <!-- LEFT PANEL: Static Navigation Indexes & Logo Overlay -->
  <div class="hidden lg:flex fixed left-0 top-0 h-screen w-20 flex-col justify-between items-center py-8 border-r border-brand-dark/10 bg-brand-white z-40">
    <div class="flex flex-col items-center">
      <a href="#hero" class="text-brand-dark hover:text-brand-crimson transition-colors group" onclick="playBeep(440, 'sine')">
        <span class="font-display text-xl tracking-tighter text-center leading-none select-none block rotate-[-90deg] my-4">B+</span>
      </a>
    </div>
    
    <!-- Dynamic Slide Tracker / Indicator -->
    <div class="flex flex-col gap-8 font-mono font-bold text-sm tracking-wider text-brand-dark/30">
      <a href="#hero" onclick="setActiveSlide('01')" id="nav-idx-01" class="hover:text-brand-crimson transition-all relative block group py-1 active-idx text-brand-dark">
        01 <span class="absolute -right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-crimson rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </a>
      <a href="#showcase" onclick="setActiveSlide('02')" id="nav-idx-02" class="hover:text-brand-crimson transition-all relative block group py-1">
        02 <span class="absolute -right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-crimson rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </a>
      <a href="#brief-engine" onclick="setActiveSlide('03')" id="nav-idx-03" class="hover:text-brand-crimson transition-all relative block group py-1">
        03 <span class="absolute -right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-crimson rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </a>
      <a href="#pricing" onclick="setActiveSlide('04')" id="nav-idx-04" class="hover:text-brand-crimson transition-all relative block group py-1">
        04 <span class="absolute -right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-crimson rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </a>
    </div>
    
    <!-- Sound Activator Toggle -->
    <button onclick="toggleAudio(); playBeep(520, 'sine')" class="text-brand-dark/50 hover:text-brand-crimson transition-colors flex flex-col items-center gap-2 group cursor-pointer" title="Toggle audio synthesizer">
      <div id="audio-visualizer" class="flex items-end gap-0.5 h-6 opacity-30 transition-opacity">
        <span class="w-1 bg-brand-crimson bar"></span>
        <span class="w-1 bg-brand-crimson bar"></span>
        <span class="w-1 bg-brand-crimson bar"></span>
        <span class="w-1 bg-brand-crimson bar"></span>
      </div>
      <span id="audio-status" class="font-mono text-[9px] font-bold tracking-widest whitespace-nowrap">SOUND: OFF</span>
    </button>
  </div>

  <!-- RIGHT PANEL: Social Verticals & External Anchors -->
  <div class="hidden lg:flex fixed right-0 top-0 h-screen w-20 flex-col justify-between items-center py-8 border-l border-brand-dark/10 bg-brand-white z-40">
    <div class="rotate-90 origin-center translate-y-8">
      <span class="font-mono text-xs uppercase tracking-widest text-brand-dark/40">EST. 2026 // NEOPUNK</span>
    </div>
    
    <!-- Social Handles & Platforms -->
    <div class="flex flex-col gap-6 text-brand-dark/60">
      <a href="https://behance.net" target="_blank" class="hover:text-brand-crimson transition-colors text-lg" onclick="playBeep(480, 'square')" title="Behance Showcase">
        <i class="fa-brands fa-behance"></i>
      </a>
      <a href="https://dribbble.com" target="_blank" class="hover:text-brand-crimson transition-colors text-lg" onclick="playBeep(480, 'square')" title="Dribbble Layouts">
        <i class="fa-brands fa-dribbble"></i>
      </a>
      <a href="https://instagram.com" target="_blank" class="hover:text-brand-crimson transition-colors text-lg" onclick="playBeep(480, 'square')" title="Instagram Stories">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" class="hover:text-brand-crimson transition-colors text-lg" onclick="playBeep(480, 'square')" title="LinkedIn Agency">
        <i class="fa-brands fa-linkedin-in"></i>
      </a>
    </div>

    <!-- Active Indicator Dot -->
    <div class="w-2 h-2 rounded-full bg-brand-crimson animate-pulse"></div>
  </div>


  <!-- HEADER NAVIGATION (Matches premium top layout alignment) -->
  <nav class="sticky top-0 w-full bg-brand-white/80 backdrop-blur-md border-b border-brand-dark/10 z-40 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 lg:px-24 h-20 flex items-center justify-between">
      
      <!-- Brand Logo / Wordmark -->
      <a href="#hero" class="flex items-center gap-3 group" onclick="playBeep(330, 'sine')">
        <div class="h-10 w-10 bg-brand-crimson text-white flex items-center justify-center font-display font-bold text-lg relative overflow-hidden transition-transform group-hover:scale-105">
          B+
          <span class="absolute inset-0 bg-brand-dark mix-blend-difference transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        </div>
        <div>
          <h1 class="font-display text-sm tracking-wider font-bold leading-none text-brand-dark group-hover:text-brand-crimson transition-colors">BADASS<span class="text-brand-crimson group-hover:text-brand-dark">+</span></h1>
          <p class="font-mono text-[9px] tracking-widest text-brand-dark/40 uppercase">Creative Production Agency</p>
        </div>
      </a>

      <!-- Desktop Nav Centered -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#showcase" class="font-mono text-xs uppercase tracking-wider text-brand-dark/80 hover:text-brand-crimson font-medium transition-colors" onclick="playBeep(440, 'triangle')">Portfolio</a>
        <a href="#about" class="font-mono text-xs uppercase tracking-wider text-brand-dark/80 hover:text-brand-crimson font-medium transition-colors" onclick="playBeep(440, 'triangle')">Philosophy</a>
        <a href="#brief-engine" class="font-mono text-xs uppercase tracking-wider text-brand-dark/80 hover:text-brand-crimson font-medium transition-colors" onclick="playBeep(440, 'triangle')">Brief Creator</a>
        <a href="#pricing" class="font-mono text-xs uppercase tracking-wider text-brand-dark/80 hover:text-brand-crimson font-medium transition-colors" onclick="playBeep(440, 'triangle')">Engage</a>
      </div>

      <!-- Right Hand CTA & Search Launcher -->
      <div class="flex items-center gap-4">
        <!-- Interactive Search Trigger -->
        <button onclick="toggleSearch(); playBeep(520, 'sine')" class="p-2 text-brand-dark/80 hover:text-brand-crimson transition-colors focus:outline-none" title="Quick Search">
          <i class="fa-solid fa-magnifying-glass text-lg"></i>
        </button>

        <a href="#brief-engine" class="hidden sm:inline-flex items-center gap-2 border border-brand-dark px-4 py-2 font-mono text-xs uppercase hover:bg-brand-crimson hover:text-white hover:border-brand-crimson transition-all duration-300 group" onclick="playBeep(550, 'sine')">
          <span>HIT ME UP</span>
          <i class="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
        </a>

        <!-- Mobile Menu Hamburger -->
        <button onclick="toggleMobileMenu(); playBeep(400, 'sine')" class="md:hidden text-brand-dark hover:text-brand-crimson focus:outline-none p-1">
          <i class="fa-solid fa-bars text-xl" id="menu-icon"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-menu" class="hidden md:hidden bg-brand-white border-b border-brand-dark/20 w-full px-6 py-8 flex-col gap-4 animate-fade-in">
      <a href="#showcase" onclick="toggleMobileMenu()" class="font-mono text-base uppercase tracking-wider text-brand-dark py-2 border-b border-brand-dark/5">Portfolio</a>
      <a href="#about" onclick="toggleMobileMenu()" class="font-mono text-base uppercase tracking-wider text-brand-dark py-2 border-b border-brand-dark/5">Philosophy</a>
      <a href="#brief-engine" onclick="toggleMobileMenu()" class="font-mono text-base uppercase tracking-wider text-brand-dark py-2 border-b border-brand-dark/5">Brief Creator</a>
      <a href="#pricing" onclick="toggleMobileMenu()" class="font-mono text-base uppercase tracking-wider text-brand-dark py-2">Engage</a>
      
      <div class="pt-4 flex justify-between items-center">
        <button onclick="toggleAudio()" class="font-mono text-xs tracking-wider bg-brand-dark/5 text-brand-dark px-4 py-2 rounded-none">
          Toggle SFX Synth
        </button>
        <div class="flex gap-4 text-brand-dark/60 text-lg">
          <a href="#"><i class="fa-brands fa-behance"></i></a>
          <a href="#"><i class="fa-brands fa-dribbble"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </nav>

  
  <!-- HERO SECTION (Asymmetrical split exactly imitating original canvas artwork) -->
  <section id="hero" class="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-12 md:py-20 lg:px-20 bg-grid-pattern overflow-hidden">
    <div class="max-w-7xl w-full mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
      
      <!-- Asymmetrical Left Panel: Solid block overlapping content -->
      <div class="lg:col-span-5 relative z-20">
        <!-- Floating Red Frame imitating the visual weight block in image -->
        <div class="bg-brand-crimson text-white p-8 md:p-12 shadow-[12px_12px_0px_#0A0A0A] relative overflow-hidden group">
          <!-- Background accent dynamic elements -->
          <div class="absolute -right-8 -bottom-8 text-white/5 font-display text-9xl font-bold select-none transition-transform duration-700 group-hover:scale-110">B+</div>
          
          <div class="mb-8 font-mono text-xs tracking-widest text-white/80 flex items-center gap-2">
            <span class="inline-block w-2 h-2 bg-white animate-pulse"></span>
            WE ARE THE RIOT OF BRANDING
          </div>
          
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase font-bold leading-none mb-6">
            BADASS+<br>
            CREATIVE<br>
            AGENCY
          </h2>
          
          <p class="font-sans text-white/90 text-sm md:text-base leading-relaxed mb-8 font-light">
            We shred standardized layouts and generic digital paradigms. We build premium, cinematic interactive platforms for brands that demand total digital dominance and raw character.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a href="#brief-engine" class="bg-brand-dark text-white hover:bg-white hover:text-brand-crimson px-6 py-4 font-mono text-xs uppercase tracking-wider font-bold transition-all text-center flex items-center justify-center gap-2" onclick="playBeep(650, 'sine')">
              <span>SHOW ME WHAT YOU GOT</span>
              <i class="fa-solid fa-arrow-down text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Extra details row mimicking the coordinates from high-fashion portfolios -->
        <div class="mt-6 flex items-center justify-between text-brand-dark/40 font-mono text-[10px] uppercase tracking-widest px-2">
          <span>LAT 35.6762° N // LONG 139.6503° E</span>
          <span class="text-brand-crimson">NEO-DECENTRALIZED // 2026</span>
        </div>
      </div>

      <!-- Asymmetrical Center/Right Panel: Stylized Vector Sphynx Cat and Background elements -->
      <div class="lg:col-span-7 relative flex items-center justify-center py-6">
        <!-- Background absolute elements -->
        <div class="absolute inset-0 bg-brand-crimson/5 rounded-full filter blur-3xl w-72 h-72 mx-auto pointer-events-none"></div>
        <div class="absolute top-10 left-10 text-brand-dark/5 font-mono text-[18vw] font-bold tracking-tighter select-none pointer-events-none">REBEL</div>

        <!-- The Responsive SVG Artwork Centerpiece -->
        <div class="relative max-w-lg w-full transition-transform duration-500 hover:scale-[1.02] cursor-pointer" onclick="winkCatEyes()">
          <!-- Inline custom SVG of Sphynx Cat with Interactive Dual Color Eyes -->
          <svg viewBox="0 0 500 500" class="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FFFFFF"/>
                <stop offset="60%" stop-color="#EBEFF3"/>
                <stop offset="100%" stop-color="#CBD5E1"/>
              </linearGradient>
              <radialGradient id="leftEyeGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#00F0FF"/>
                <stop offset="70%" stop-color="#0066FF"/>
                <stop offset="100%" stop-color="#001F4D"/>
              </radialGradient>
              <radialGradient id="rightEyeGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#FF2A4B"/>
                <stop offset="70%" stop-color="#C1001F"/>
                <stop offset="100%" stop-color="#400007"/>
              </radialGradient>
            </defs>

            <!-- Background subtle geometric glow base -->
            <circle cx="250" cy="250" r="160" fill="none" stroke="#E13838" stroke-width="1" stroke-dasharray="10 10" opacity="0.4"/>
            <polygon points="250,50 420,380 80,380" fill="none" stroke="#000000" stroke-width="0.5" opacity="0.1"/>

            <!-- Left Outer Ear -->
            <path d="M 230,190 L 80,70 C 60,60 50,110 90,160 C 130,210 170,230 230,190 Z" fill="url(#skinGrad)" stroke="#1E1E24" stroke-width="3" stroke-linejoin="round"/>
            <!-- Left Inner Ear Pink/Shadow Depth -->
            <path d="M 210,185 L 100,95 C 90,90 85,115 110,150 C 135,185 165,200 210,185 Z" fill="#FCE7F3" opacity="0.8" stroke="#E13838" stroke-width="1" stroke-dasharray="2 2"/>

            <!-- Right Outer Ear -->
            <path d="M 270,190 L 420,70 C 440,60 450,110 410,160 C 370,210 330,230 270,190 Z" fill="url(#skinGrad)" stroke="#1E1E24" stroke-width="3" stroke-linejoin="round"/>
            <!-- Right Inner Ear Pink/Shadow Depth -->
            <path d="M 290,185 L 400,95 C 410,90 415,115 390,150 C 365,185 335,200 290,185 Z" fill="#FCE7F3" opacity="0.8" stroke="#E13838" stroke-width="1" stroke-dasharray="2 2"/>

            <!-- Sphynx Fold/Wrinkle Lines (Extending upwards to forehead) -->
            <g stroke="#1E1E24" stroke-width="2" fill="none" opacity="0.75" stroke-linecap="round">
              <path d="M 220,130 Q 250,110 280,130" />
              <path d="M 200,150 Q 250,130 300,150" />
              <path d="M 190,175 Q 250,150 310,175" />
              <path d="M 210,195 Q 250,175 290,195" />
              <!-- Forehead deep ridges -->
              <path d="M 235,120 Q 250,90 265,120" />
              <path d="M 242,100 Q 250,80 258,100" />
            </g>

            <!-- Main Head Shape -->
            <path d="M 170,220 C 140,260 140,310 170,360 C 190,390 220,410 250,420 C 280,410 310,390 330,360 C 360,310 360,260 330,220 C 290,200 210,200 170,220 Z" fill="url(#skinGrad)" stroke="#1E1E24" stroke-width="4" stroke-linejoin="round"/>

            <!-- Cheeks and Chin -->
            <path d="M 170,330 Q 250,380 330,330" fill="none" stroke="#1E1E24" stroke-width="2"/>
            <path d="M 220,380 Q 250,430 280,380" fill="none" stroke="#1E1E24" stroke-width="2" stroke-linecap="round"/>

            <!-- Left Eye Socket & Eye (Stunning Blue Pupil Glow) -->
            <path d="M 170,270 Q 210,250 235,290 Q 195,310 170,270 Z" fill="#0A0A0A" stroke="#1E1E24" stroke-width="3" stroke-linejoin="round"/>
            <ellipse id="left-eye-pupil" cx="205" cy="280" rx="14" ry="10" fill="url(#leftEyeGrad)" stroke="#00F0FF" stroke-width="1.5" class="animate-glimmer text-sky-400"/>
            <!-- Cat Eye vertical slit -->
            <line x1="205" y1="274" x2="205" y2="286" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>

            <!-- Right Eye Socket & Eye (Stunning Crimson/Red Pupil Glow) -->
            <path d="M 330,270 Q 290,250 265,290 Q 305,310 330,270 Z" fill="#0A0A0A" stroke="#1E1E24" stroke-width="3" stroke-linejoin="round"/>
            <ellipse id="right-eye-pupil" cx="295" cy="280" rx="14" ry="10" fill="url(#rightEyeGrad)" stroke="#FF2A4B" stroke-width="1.5" class="animate-glimmer text-red-500"/>
            <!-- Cat Eye vertical slit -->
            <line x1="295" y1="274" x2="295" y2="286" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>

            <!-- Custom Tear Tattoo under Right Eye (Mimicking the exact inspiration style) -->
            <polygon points="325,302 331,316 321,316" fill="#1E1E24"/>
            <circle cx="325" cy="302" r="1.5" fill="#1E1E24"/>

            <!-- Wrinkles Under Eyes -->
            <path d="M 175,295 Q 200,315 220,298" fill="none" stroke="#1E1E24" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
            <path d="M 325,295 Q 300,315 280,298" fill="none" stroke="#1E1E24" stroke-width="2" stroke-linecap="round" opacity="0.7"/>

            <!-- Nose Bridge and Nose (Beautifully defined lines) -->
            <path d="M 235,290 L 242,330 Q 250,335 258,330 L 265,290" fill="none" stroke="#1E1E24" stroke-width="2" stroke-linejoin="round"/>
            <path d="M 238,335 Q 250,345 262,335 L 250,345 Z" fill="#FDA4AF" stroke="#1E1E24" stroke-width="2"/>

            <!-- Muzzle & Whiskers Pads -->
            <path d="M 215,355 Q 235,360 250,345 Q 265,360 285,355 Q 295,380 250,380 Q 205,380 215,355 Z" fill="#F1F5F9" stroke="#1E1E24" stroke-width="2"/>
            <circle cx="230" cy="362" r="1.5" fill="#1E1E24"/>
            <circle cx="235" cy="365" r="1.5" fill="#1E1E24"/>
            <circle cx="240" cy="361" r="1.5" fill="#1E1E24"/>
            <circle cx="270" cy="362" r="1.5" fill="#1E1E24"/>
            <circle cx="265" cy="365" r="1.5" fill="#1E1E24"/>
            <circle cx="260" cy="361" r="1.5" fill="#1E1E24"/>

            <!-- Futuristic Tribal Tattoos / Calligraphy on the neck (Mimicking the premium look) -->
            <path d="M 225,410 Q 210,430 205,465 Q 215,455 220,440" fill="none" stroke="#E13838" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M 275,410 Q 290,430 295,465 Q 285,455 280,440" fill="none" stroke="#1E1E24" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Crown graphic at center throat base -->
            <path d="M 235,445 L 242,430 L 250,440 L 258,430 L 265,445 Z" fill="none" stroke="#E13838" stroke-width="2" stroke-linejoin="round"/>
            <line x1="230" y1="450" x2="270" y2="450" stroke="#1E1E24" stroke-width="2"/>

          </svg>

          <!-- SVG Interaction hint -->
          <div class="absolute bottom-1 right-2 bg-brand-dark text-white font-mono text-[9px] uppercase px-3 py-1 tracking-widest pointer-events-none opacity-80 border border-white/20">
            TAP WORK TO INTERACT
          </div>
        </div>

        <!-- Float Info Pill mimicking original presentation coordinates -->
        <div class="absolute bottom-8 right-8 bg-brand-white p-4 border border-brand-dark/10 shadow-lg hidden sm:block max-w-[200px]" data-animate="slide-up">
          <p class="font-mono text-[10px] text-brand-crimson font-bold uppercase mb-1">DOWNLOAD STATS</p>
          <div class="flex flex-col gap-1 text-[11px] font-mono text-brand-dark/70">
            <a href="#" class="hover:text-brand-crimson transition-colors flex items-center justify-between" onclick="triggerDownload('Brief')">
              <span>Download Brief</span>
              <i class="fa-solid fa-arrow-down-long"></i>
            </a>
            <a href="#" class="hover:text-brand-crimson transition-colors flex items-center justify-between" onclick="triggerDownload('Presentation')">
              <span>Our Manifesto</span>
              <i class="fa-solid fa-arrow-down-long"></i>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>


  <!-- TRUSTED BRANDS CYBER CAROUSEL -->
  <section class="bg-brand-dark text-white py-12 overflow-hidden border-y border-brand-crimson/20">
    <div class="max-w-7xl mx-auto px-4 lg:px-24">
      <p class="font-mono text-[10px] text-center tracking-widest text-brand-crimson uppercase mb-8">COMPANIES ENERGIZED BY OUR VISION</p>
      
      <div class="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-75">
        <div class="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
          <i class="fa-brands fa-ethereum text-2xl text-brand-crimson"></i>
          <span class="font-display text-sm tracking-widest font-bold">ETH.LABS</span>
        </div>
        <div class="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
          <i class="fa-brands fa-hashnode text-2xl text-brand-crimson"></i>
          <span class="font-display text-sm tracking-widest font-bold">NODE.CYBER</span>
        </div>
        <div class="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
          <i class="fa-brands fa-stripe-s text-2xl text-brand-crimson"></i>
          <span class="font-display text-sm tracking-widest font-bold">STRIPE-REBEL</span>
        </div>
        <div class="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
          <i class="fa-brands fa-kickstarter text-2xl text-brand-crimson"></i>
          <span class="font-display text-sm tracking-widest font-bold">RIOT.PUNK</span>
        </div>
        <div class="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
          <i class="fa-brands fa-digital-ocean text-2xl text-brand-crimson"></i>
          <span class="font-display text-sm tracking-widest font-bold">OCEAN.X</span>
        </div>
      </div>
    </div>
  </section>


  <!-- ABOUT & PHILOSOPHY SECTION (Deep conceptual typography layout) -->
  <section id="about" class="py-24 bg-brand-white relative">
    <div class="max-w-7xl mx-auto px-4 lg:px-24">
      
      <!-- Split structure -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-4">
          <span class="text-brand-crimson font-mono text-xs uppercase tracking-widest block mb-4">// CORE BELIEF SYSTEM</span>
          <h3 class="font-display text-2xl md:text-3xl tracking-tight uppercase font-bold text-brand-dark leading-tight">
            WHY REBELS BUILD SUPERIOR PLATFORMS.
          </h3>
          <div class="h-1 w-20 bg-brand-crimson mt-6"></div>
        </div>

        <div class="lg:col-span-8 flex flex-col gap-6">
          <p class="font-sans text-brand-dark/80 text-lg leading-relaxed">
            Most creative modern agencies play it safe. They use the same layouts, follow the same grid rules, and rely on safe color trends that blend in with the noise. <strong>We do the exact opposite.</strong>
          </p>
          <p class="font-sans text-brand-dark/70 text-base leading-relaxed">
            Every pixel we drop serves as high-fidelity aesthetic combat. We combine raw visual attitude with bleeding-edge technology. When your customers visit your digital channels, they should feel like they are entering a high-concept universe designed exclusively for them.
          </p>
          
          <!-- Key Pillars metrics -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div class="p-6 border border-brand-dark/10 bg-brand-white hover:border-brand-crimson transition-all group">
              <span class="font-display text-4xl font-bold text-brand-crimson block mb-2">99%</span>
              <span class="font-mono text-xs uppercase tracking-wider text-brand-dark/70">Aesthetic Retention</span>
            </div>
            <div class="p-6 border border-brand-dark/10 bg-brand-white hover:border-brand-crimson transition-all group">
              <span class="font-display text-4xl font-bold text-brand-crimson block mb-2">35+</span>
              <span class="font-mono text-xs uppercase tracking-wider text-brand-dark/70">International Accolades</span>
            </div>
            <div class="p-6 border border-brand-dark/10 bg-brand-white hover:border-brand-crimson transition-all group">
              <span class="font-display text-4xl font-bold text-brand-crimson block mb-2">1.8s</span>
              <span class="font-mono text-xs uppercase tracking-wider text-brand-dark/70">Engine Reactivity</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>


  <!-- PORTFOLIO SHOWCASE SECTION (Multi-state filterable web block) -->
  <section id="showcase" class="py-24 bg-brand-dark text-white relative bg-grid-dark">
    <div class="max-w-7xl mx-auto px-4 lg:px-24">
      
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <span class="text-brand-crimson font-mono text-xs uppercase tracking-widest block mb-4">// SELECTION PROTOCOL</span>
          <h2 class="font-display text-3xl md:text-4xl tracking-tight uppercase font-bold">PROJECT COMPENDIUM</h2>
        </div>
        
        <!-- Filter Switcher Controls -->
        <div class="flex flex-wrap gap-2 bg-white/5 p-1.5 border border-white/10">
          <button onclick="filterWorks('all')" id="btn-filter-all" class="px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all bg-brand-crimson text-white">
            All Action
          </button>
          <button onclick="filterWorks('branding')" id="btn-filter-branding" class="px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all text-white/60 hover:text-white">
            Branding
          </button>
          <button onclick="filterWorks('saas')" id="btn-filter-saas" class="px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all text-white/60 hover:text-white">
            Neo-SaaS
          </button>
          <button onclick="filterWorks('motion')" id="btn-filter-motion" class="px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all text-white/60 hover:text-white">
            Cyber Motion
          </button>
        </div>
      </div>

      <!-- Works Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="works-container">
        
        <!-- Project Card 1: Branding -->
        <div class="group border border-white/10 bg-brand-slate hover:border-brand-crimson transition-all duration-300 relative overflow-hidden" data-category="branding">
          <div class="aspect-video w-full bg-brand-dark relative flex items-center justify-center overflow-hidden">
            <!-- Custom Dynamic SVG Art Mockup to ensure zero external reliance -->
            <svg viewBox="0 0 400 250" class="w-full h-full transition-transform duration-500 group-hover:scale-110">
              <rect width="100%" height="100%" fill="#121214"/>
              <circle cx="200" cy="125" r="70" fill="none" stroke="#E13838" stroke-width="2" stroke-dasharray="5 5" class="animate-spin" style="animation-duration: 20s; transform-origin: center;"/>
              <text x="50%" y="53%" font-family="Syncopate" font-size="28" fill="#F8F9FA" text-anchor="middle" font-weight="bold">HELLCAT</text>
              <line x1="50" y1="125" x2="350" y2="125" stroke="#FFFFFF" stroke-width="0.5" opacity="0.3"/>
            </svg>
            <span class="absolute top-4 left-4 bg-brand-crimson text-white font-mono text-[9px] uppercase tracking-widest px-2 py-1">2026 // PACKAGING</span>
          </div>
          <div class="p-6">
            <span class="text-brand-crimson font-mono text-xs uppercase tracking-widest block mb-2">#Branding</span>
            <h4 class="font-display text-lg uppercase font-bold mb-3 group-hover:text-brand-crimson transition-colors">HELLCAT WHISKEY BRAND</h4>
            <p class="font-sans text-white/60 text-sm mb-6">High-character physical spirit brand development utilizing premium dark vector graphics and neon printing overlays.</p>
            <button onclick="openProject('Hellcat Whiskey', 'Rebel Identity', 'Our mandate was to develop an aggressively modern whiskey package design targeting the next generation of rule-breakers. Built on premium matte-black bottles with raised crimson glass vectors.', 'branding')" class="font-mono text-xs uppercase tracking-wider text-white hover:text-brand-crimson flex items-center gap-2 transition-colors">
              <span>DECONSTRUCT BRIEF</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Project Card 2: SaaS -->
        <div class="group border border-white/10 bg-brand-slate hover:border-brand-crimson transition-all duration-300 relative overflow-hidden" data-category="saas">
          <div class="aspect-video w-full bg-brand-dark relative flex items-center justify-center overflow-hidden">
            <!-- Custom Dynamic SVG Art Mockup -->
            <svg viewBox="0 0 400 250" class="w-full h-full transition-transform duration-500 group-hover:scale-110">
              <rect width="100%" height="100%" fill="#08080A"/>
              <rect x="60" y="50" width="280" height="150" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.1"/>
              <rect x="80" y="70" width="100" height="40" fill="#E13838" opacity="0.8"/>
              <circle cx="270" cy="150" r="30" fill="#00F0FF" opacity="0.8"/>
              <line x1="80" y1="160" x2="200" y2="160" stroke="#FFFFFF" stroke-width="2"/>
            </svg>
            <span class="absolute top-4 left-4 bg-[#00F0FF] text-brand-dark font-mono text-[9px] uppercase tracking-widest px-2 py-1">2026 // DEX ENGINE</span>
          </div>
          <div class="p-6">
            <span class="text-brand-crimson font-mono text-xs uppercase tracking-widest block mb-2">#Neo-SaaS</span>
            <h4 class="font-display text-lg uppercase font-bold mb-3 group-hover:text-brand-crimson transition-colors">VORTEX CRYPTO PROTOCOL</h4>
            <p class="font-sans text-white/60 text-sm mb-6">Premium tactical UI design for a high-frequency trading application. Custom components with real-time reactive feedback.</p>
            <button onclick="openProject('Vortex Protocol', 'Next-Gen FinTech', 'We delivered a completely custom-themed desktop terminal for crypto-arbitrageurs. Stripped of boilerplate designs and built entirely around low-latency screen response times.', 'saas')" class="font-mono text-xs uppercase tracking-wider text-white hover:text-brand-crimson flex items-center gap-2 transition-colors">
              <span>DECONSTRUCT BRIEF</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Project Card 3: Motion -->
        <div class="group border border-white/10 bg-brand-slate hover:border-brand-crimson transition-all duration-300 relative overflow-hidden" data-category="motion">
          <div class="aspect-video w-full bg-brand-dark relative flex items-center justify-center overflow-hidden">
            <!-- Custom Dynamic SVG Art Mockup -->
            <svg viewBox="0 0 400 250" class="w-full h-full transition-transform duration-500 group-hover:scale-110">
              <rect width="100%" height="100%" fill="#050505"/>
              <path d="M50 180 Q120 40 200 180 T350 180" fill="none" stroke="#E13838" stroke-width="4"/>
              <path d="M50 160 Q120 70 200 160 T350 160" fill="none" stroke="#00F0FF" stroke-width="2"/>
              <circle cx="200" cy="110" r="10" fill="#FFFFFF"/>
            </svg>
            <span class="absolute top-4 left-4 bg-brand-crimson text-white font-mono text-[9px] uppercase tracking-widest px-2 py-1">2026 // MOTION ART</span>
          </div>
          <div class="p-6">
            <span class="text-brand-crimson font-mono text-xs uppercase tracking-widest block mb-2">#Cyber Motion</span>
            <h4 class="font-display text-lg uppercase font-bold mb-3 group-hover:text-brand-crimson transition-colors">NEO-METROPOLIS SIMULATION</h4>
            <p class="font-sans text-white/60 text-sm mb-6">Cinematic 3D intro animation sequence for a dark science-fiction game concept. Advanced particle dynamics.</p>
            <button onclick="openProject('Neo-Metropolis', 'Science Fiction Unreal Dev', 'Designed directly inside custom procedural node matrices to deliver a gritty, high-octane atmospheric teaser that secured funding goals in 48 hours.', 'motion')" class="font-mono text-xs uppercase tracking-wider text-white hover:text-brand-crimson flex items-center gap-2 transition-colors">
              <span>DECONSTRUCT BRIEF</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>


  <!-- THE INTERACTIVE BRIEF ENGINE (The Digital Product Sandbox) -->
  <section id="brief-engine" class="py-24 bg-brand-white relative">
    <div class="max-w-7xl mx-auto px-4 lg:px-24">
      
      <!-- Split Headers -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div class="lg:col-span-5">
          <span class="text-brand-crimson font-mono text-xs uppercase tracking-widest block mb-4">// AGGRESSIVE INTERACTIVE UTILITY</span>
          <h2 class="font-display text-3xl md:text-4xl tracking-tight uppercase font-bold text-brand-dark">
            THE BRIEF COMPILATION INTERFACE
          </h2>
        </div>
        <div class="lg:col-span-7 flex items-center">
          <p class="font-sans text-brand-dark/70 text-base">
            Don't waste time on generic contact forms. Use our proprietary **Brief Compiling Engine** below. Configure your strategic targets, project tone, and estimated funding. Our system compiles a raw manifest that you can download instantly or dispatch directly to our design core.
          </p>
        </div>
      </div>

      <!-- Live Dynamic Constructor -->
      <div class="bg-brand-dark text-white p-8 md:p-12 shadow-[12px_12px_0px_#E13838] border-2 border-brand-dark grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        <div class="absolute top-4 right-4 text-brand-crimson/20 font-display text-6xl select-none font-bold">B+ CO</div>
        
        <!-- Left: Form Controls -->
        <div class="lg:col-span-7 flex flex-col gap-6">
          <h3 class="font-display text-lg uppercase tracking-wider text-brand-crimson mb-2 border-b border-white/10 pb-2">INPUT PARAMETERS</h3>
          
          <!-- Camp Style Selector -->
          <div>
            <label class="block font-mono text-xs uppercase tracking-widest mb-3 text-white/80">1. Campaign Archetype</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button onclick="setBriefArchetype('Rebel Branding', 220, 'triangle')" id="arch-brand" class="px-3 py-2 border border-brand-crimson bg-brand-crimson text-white font-mono text-xs uppercase transition-all">Rebel Branding</button>
              <button onclick="setBriefArchetype('Tactical Web3 UI', 440, 'triangle')" id="arch-ui" class="px-3 py-2 border border-white/20 hover:border-brand-crimson text-white/80 hover:text-white font-mono text-xs uppercase transition-all">Tactical Web3</button>
              <button onclick="setBriefArchetype('Cyberpunk Motion Sequence', 660, 'triangle')" id="arch-motion" class="px-3 py-2 border border-white/20 hover:border-brand-crimson text-white/80 hover:text-white font-mono text-xs uppercase transition-all">Cyber Motion</button>
            </div>
          </div>

          <!-- Slider: Visual Rebellion Level -->
          <div>
            <div class="flex justify-between font-mono text-xs uppercase tracking-widest mb-2 text-white/80">
              <span>2. Aesthetic Intensity level</span>
              <span id="rebellion-val" class="text-brand-crimson font-bold">75%</span>
            </div>
            <input type="range" id="rebellion-slider" min="10" max="100" value="75" oninput="updateBriefSlider(this.value)" class="w-full accent-brand-crimson bg-white/10 h-1 cursor-pointer">
            <div class="flex justify-between text-[10px] font-mono text-white/40 mt-1">
              <span>CORPORATE SAFE</span>
              <span>EXPERIMENTAL</span>
              <span>PURE RIOT INC.</span>
            </div>
          </div>

          <!-- Input Fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-mono text-xs uppercase tracking-widest mb-2 text-white/80">Company Title</label>
              <input type="text" id="brief-company" value="CyberRiot Corp" class="w-full bg-white/5 border border-white/10 focus:border-brand-crimson focus:outline-none px-4 py-3 font-mono text-sm text-white transition-colors" placeholder="e.g. Acme Tech">
            </div>
            <div>
              <label class="block font-mono text-xs uppercase tracking-widest mb-2 text-white/80">Disposal Budget</label>
              <select id="brief-budget" class="w-full bg-brand-slate border border-white/10 focus:border-brand-crimson focus:outline-none px-4 py-3 font-mono text-sm text-white transition-colors">
                <option value="$15K - $30K">$15K - $30K (Cruiser Class)</option>
                <option value="$30K - $60K" selected>$30K - $60K (Dreadnought Class)</option>
                <option value="$60K+">$60K+ (Total Riot Class)</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block font-mono text-xs uppercase tracking-widest mb-2 text-white/80">Ultimate Campaign Objectives</label>
            <textarea id="brief-objectives" rows="3" class="w-full bg-white/5 border border-white/10 focus:border-brand-crimson focus:outline-none p-4 font-mono text-sm text-white transition-all" placeholder="Tell our creative core what paradigm you wish to shatter..."></textarea>
          </div>
        </div>

        <!-- Right: Generated Manifest Preview -->
        <div class="lg:col-span-5 flex flex-col justify-between border-2 border-dashed border-white/15 p-6 bg-white/[0.02]">
          <div>
            <div class="flex justify-between items-center mb-4 pb-2 border-b border-white/10">
              <span class="font-mono text-xs text-brand-crimson uppercase tracking-widest font-bold">MANIFEST COMPILE PREVIEW</span>
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            
            <div class="font-mono text-xs text-white/70 space-y-3 whitespace-pre-line" id="compiled-brief-output">
              <!-- Dynamically rendered manifest output -->
              STAGING PRE-MANIFEST...
            </div>
          </div>

          <div class="mt-8 pt-4 border-t border-white/10 flex flex-col gap-3">
            <button onclick="triggerBriefSubmission(); playBeep(750, 'sine')" class="w-full bg-brand-crimson text-white hover:bg-white hover:text-brand-crimson font-mono text-xs uppercase font-bold py-3 tracking-wider transition-colors flex items-center justify-center gap-2">
              <i class="fa-solid fa-cloud-arrow-up"></i>
              <span>TRANSMIT BRIEF DIRECT</span>
            </button>
            <button onclick="downloadCompiledBrief(); playBeep(500, 'triangle')" class="w-full bg-white/10 text-white hover:bg-brand-crimson font-mono text-xs uppercase font-bold py-3 tracking-wider transition-colors flex items-center justify-center gap-2">
              <i class="fa-solid fa-download"></i>
              <span>DOWNLOAD SPEC FILE (.TXT)</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>


  <!-- TRANSPARENT COOPERATION SCHEME (Pricing/Options Layout) -->
  <section id="pricing" class="py-24 bg-brand-dark text-white relative">
    <div class="max-w-7xl mx-auto px-4 lg:px-24">
      
      <!-- Headers -->
      <div class="mb-16 text-center">
        <span class="text-brand-crimson font-mono text-xs uppercase tracking-widest block mb-4">// RAW COMMERCIAL AGREEMENT</span>
        <h2 class="font-display text-3xl md:text-4xl uppercase font-bold tracking-tight">ENGAGEMENT ARCHE-TYPES</h2>
        <p class="font-mono text-xs text-white/50 max-w-lg mx-auto mt-4">No hidden retainers. No bloated corporate account managers. Just direct extreme production.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        <!-- Option 1 -->
        <div class="border border-white/10 bg-brand-slate/40 p-8 flex flex-col justify-between transition-all hover:border-white/30 relative">
          <div>
            <span class="font-mono text-[10px] uppercase text-brand-crimson tracking-widest block mb-1">01 // RECON CLASS</span>
            <h3 class="font-display text-xl uppercase font-bold mb-4">TACTICAL IDENTITY</h3>
            <p class="font-mono text-4xl font-bold text-white mb-6">$12,000<span class="text-xs text-white/40">/project</span></p>
            
            <p class="font-sans text-white/70 text-sm mb-8">Perfect for early-stage disruptive protocol startups demanding immediate visual authority in their sector.</p>
            
            <ul class="space-y-3 font-mono text-xs text-white/60 mb-8">
              <li><i class="fa-solid fa-chevron-right text-brand-crimson mr-2"></i>Full Visual Brand Architecture</li>
              <li><i class="fa-solid fa-chevron-right text-brand-crimson mr-2"></i>1 Dynamic Webpage Concept</li>
              <li><i class="fa-solid fa-chevron-right text-brand-crimson mr-2"></i>Complete Vector Assets kit</li>
              <li><i class="fa-solid fa-chevron-right text-brand-crimson mr-2"></i>14 Business Day Dispatch</li>
            </ul>
          </div>
          <a href="#brief-engine" onclick="selectEngagementTier('Tactical Identity', '$12,000')" class="w-full bg-white/5 hover:bg-brand-crimson text-center text-white py-3 font-mono text-xs uppercase tracking-widest transition-colors block">INITIATE INQUIRY</a>
        </div>

        <!-- Option 2: Featured -->
        <div class="border-2 border-brand-crimson bg-brand-slate p-8 flex flex-col justify-between transition-all relative transform md:-translate-y-2 shadow-[0_10px_30px_rgba(225,56,56,0.15)]">
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-crimson text-white font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1">MOST REQUESTED PROTOCOL</div>
          <div>
            <span class="font-mono text-[10px] uppercase text-brand-crimson tracking-widest block mb-1">02 // RAIDER CLASS</span>
            <h3 class="font-display text-xl uppercase font-bold mb-4">COMPLETE ECOSYSTEM</h3>
            <p class="font-mono text-4xl font-bold text-white mb-6">$28,000<span class="text-xs text-white/40">/project</span></p>
            
            <p class="font-sans text-white/70 text-sm mb-8">For premium products aiming to fully capture community attention with bespoke cinematic interactive features.</p>
            
            <ul class="space-y-3 font-mono text-xs text-white/80 mb-8">
              <li><i class="fa-solid fa-chevron-right text-brand-crimson mr-2"></i>Brand Strategy & Bold Logo Matrix</li>
              <li><i class="fa-solid fa-chevron-right text-brand-crimson mr-2"></i>Multi-page Tailored UI/UX Layout</li>
              <li><i class="fa-solid fa-chevron-right text-brand-crimson mr-2"></i>Custom SVG Vector / WebGL Integration</li>
              <li><i class="fa-solid fa-chevron-right text-brand-crimson mr-2"></i>Full Sound Design / Motion assets</li>
              <li><i class="fa-solid fa-chevron-right text-brand-crimson mr-2"></i>Dynamic Launch assistance</li>
            </ul>
          </div>
          <a href="#brief-engine" onclick="selectEngagementTier('Complete Ecosystem', '$28,000')" class="w-full bg-brand-crimson hover:bg-white hover:text-brand-crimson text-center text-white py-3 font-mono text-xs uppercase tracking-widest font-bold transition-all block">INITIATE INQUIRY</a>
        </div>

        <!-- Option 3 -->
        <div class="border border-white/10 bg-brand-slate/40 p-8 flex flex-col justify-between transition-all hover:border-white/30 relative">
          <div>
            <span class="font-mono text-[10px] uppercase text-brand-crimson tracking-widest block mb-1">03 // DREADNOUGHT CLASS</span>
            <h3 class="font-display text-xl uppercase font-bold mb-4">UNLIMITED DOMINANCE</h3>
            <p class="font-mono text-4xl font-bold text-white mb-6">$65,000<span class="text-xs text-white/40">/project</span></p>
            
            <p class="font-sans text-white/70 text-sm mb-8">Full-suite cinematic creative engineering, tailor-made visual engines, and complete industry-shattering aesthetics.</p>
            
            <ul class="space-y-3 font-mono text-xs text-white/60 mb-8">
              <li><i class="fa-solid fa-chevron-right text-brand-crimson mr-2"></i>Bespoke Unreal/WebGL immersive models</li>
              <li><i class="fa-solid fa-chevron-right text-brand-crimson mr-2"></i>Dedicated Chief Rebellion Director</li>
              <li><i class="fa-solid fa-chevron-right text-brand-crimson mr-2"></i>Unlimited custom components & revisioning</li>
              <li><i class="fa-solid fa-chevron-right text-brand-crimson mr-2"></i>Full strategic takeover campaign</li>
            </ul>
          </div>
          <a href="#brief-engine" onclick="selectEngagementTier('Unlimited Dominance', '$65,000')" class="w-full bg-white/5 hover:bg-brand-crimson text-center text-white py-3 font-mono text-xs uppercase tracking-widest transition-colors block">INITIATE INQUIRY</a>
        </div>

      </div>

    </div>
  </section>


  <!-- REBEL OPINIONS & REVIEWS (Interactive testimonial slider) -->
  <section class="py-24 bg-brand-white relative">
    <div class="max-w-7xl mx-auto px-4 lg:px-24">
      
      <!-- Layout split -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-5">
          <span class="text-brand-crimson font-mono text-xs uppercase tracking-widest block mb-4">// ENDORSEMENTS</span>
          <h2 class="font-display text-3xl uppercase font-bold tracking-tight text-brand-dark leading-tight">
            WHAT THE RULE-BREAKERS PROCLAIM.
          </h2>
          <p class="font-sans text-brand-dark/60 text-sm mt-4">We do not accept anonymous reviews. Every single partner of BADASS+ stands tall with verifiable public signatures.</p>
          
          <!-- Testimonial Navigation controllers -->
          <div class="flex gap-3 mt-8">
            <button onclick="prevTestimonial(); playBeep(330, 'triangle')" class="w-12 h-12 border-2 border-brand-dark text-brand-dark hover:bg-brand-crimson hover:text-white hover:border-brand-crimson flex items-center justify-center transition-all">
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button onclick="nextTestimonial(); playBeep(330, 'triangle')" class="w-12 h-12 border-2 border-brand-dark text-brand-dark hover:bg-brand-crimson hover:text-white hover:border-brand-crimson flex items-center justify-center transition-all">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div class="lg:col-span-7 bg-brand-dark text-white p-8 md:p-12 shadow-[8px_8px_0px_#E13838] border-2 border-brand-dark relative min-h-[250px] flex flex-col justify-between">
          <div class="absolute -top-3.5 -right-3 px-3 py-1 bg-brand-crimson font-mono text-[9px] uppercase tracking-widest">VERIFIED CONTRACT</div>
          
          <div class="mb-8">
            <p id="testimonial-quote" class="font-mono text-sm md:text-base leading-relaxed italic text-white/90">
              "Working with BADASS+ was like mainlining jet fuel into our web appearance. The Sphynx-themed brand alignment gave our digital layout the rebellious edge we needed to outperform stale legacy competitor tech."
            </p>
          </div>

          <div class="flex items-center gap-4 border-t border-white/10 pt-4">
            <div class="w-10 h-10 bg-brand-crimson text-white font-display font-bold text-xs flex items-center justify-center rounded-none" id="testimonial-avatar">
              VR
            </div>
            <div>
              <h4 id="testimonial-author" class="font-display text-xs uppercase font-bold tracking-wider">Vandemeer Ritchy</h4>
              <p id="testimonial-role" class="font-mono text-[10px] text-brand-crimson uppercase">Co-Founder, Riot.Punk Dex</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>


  <!-- CRISIS MITIGATION INDEX (Premium FAQ Accordion) -->
  <section class="py-24 bg-brand-dark text-white border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 lg:px-24">
      <div class="mb-16 text-center">
        <span class="text-brand-crimson font-mono text-xs uppercase tracking-widest block mb-4">// SYSTEM DEFENSE PROTOCOLS</span>
        <h2 class="font-display text-3xl uppercase font-bold tracking-tight">CRISIS MITIGATION</h2>
        <p class="font-mono text-xs text-white/50 mt-2">Honest, non-filtered technical responses to your underlying inquiries.</p>
      </div>

      <div class="max-w-3xl mx-auto flex flex-col gap-4">
        
        <!-- Accordion 1 -->
        <div class="border border-white/10 bg-brand-slate/40 hover:border-brand-crimson transition-all">
          <button onclick="toggleFaq(1); playBeep(280, 'sine')" class="w-full text-left p-6 flex justify-between items-center focus:outline-none">
            <span class="font-display text-sm tracking-wide uppercase font-bold">What makes your creative process better than standard Figma-to-code agencies?</span>
            <i class="fa-solid fa-chevron-down text-brand-crimson transition-transform duration-300" id="faq-chevron-1"></i>
          </button>
          <div id="faq-content-1" class="hidden px-6 pb-6 text-sm text-white/70 font-sans leading-relaxed">
            Most agencies create pretty pictures in design software, then dump them onto generic web platforms that cannot support custom layout actions. We design directly for the browser, using premium vectors, tactile CSS/JS triggers, custom audio synthesizers, and real product layouts designed to convert and shock your audience.
          </div>
        </div>

        <!-- Accordion 2 -->
        <div class="border border-white/10 bg-brand-slate/40 hover:border-brand-crimson transition-all">
          <button onclick="toggleFaq(2); playBeep(280, 'sine')" class="w-full text-left p-6 flex justify-between items-center focus:outline-none">
            <span class="font-display text-sm tracking-wide uppercase font-bold">Can we supply our own custom visual direction?</span>
            <i class="fa-solid fa-chevron-down text-brand-crimson transition-transform duration-300" id="faq-chevron-2"></i>
          </button>
          <div id="faq-content-2" class="hidden px-6 pb-6 text-sm text-white/70 font-sans leading-relaxed">
            Yes. We treat your baseline assets and vision as the DNA. We expand it into a fully high-fidelity premium visual ecosystem, keeping 85%+ consistency with your core ideas while amplifying its cinematic parameters to award-winning levels.
          </div>
        </div>

        <!-- Accordion 3 -->
        <div class="border border-white/10 bg-brand-slate/40 hover:border-brand-crimson transition-all">
          <button onclick="toggleFaq(3); playBeep(280, 'sine')" class="w-full text-left p-6 flex justify-between items-center focus:outline-none">
            <span class="font-display text-sm tracking-wide uppercase font-bold">How does the Brief Compiling Engine assist us?</span>
            <i class="fa-solid fa-chevron-down text-brand-crimson transition-transform duration-300" id="faq-chevron-3"></i>
          </button>
          <div id="faq-content-3" class="hidden px-6 pb-6 text-sm text-white/70 font-sans leading-relaxed">
            The Interactive Brief Generator formats, scores, and packs your desired specifications directly into structured text files. This bypasses tedious exploratory calls, allowing our engineering leads to build accurate technical estimates within 4 hours.
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- FINAL HIGH-OCTANE CTA -->
  <section class="py-24 bg-brand-crimson text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    <!-- Distorted background title -->
    <div class="absolute -bottom-10 -right-10 text-white/5 font-display text-[22vw] uppercase tracking-tighter select-none font-bold">
      BADASS
    </div>

    <div class="max-w-7xl mx-auto px-4 lg:px-24 text-center relative z-10">
      <span class="font-mono text-xs uppercase tracking-widest bg-brand-dark px-4 py-1.5 inline-block mb-6">EXECUTION IMMINENT</span>
      <h2 class="font-display text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase font-bold max-w-3xl mx-auto leading-none mb-8">
        SHATTER THE STATUS QUO METRIC.
      </h2>
      <p class="font-sans text-white/80 max-w-lg mx-auto mb-10 text-sm md:text-base">
        Don’t let your product look like a cloned template built by tired robots. Engage the BADASS+ creative core today.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="#brief-engine" class="bg-brand-dark text-white hover:bg-white hover:text-brand-crimson px-8 py-5 font-mono text-sm uppercase tracking-wider font-bold transition-all w-full sm:w-auto text-center" onclick="playBeep(700, 'sine')">
          COMPILE BRIEF manifest
        </a>
        <a href="#pricing" class="border-2 border-white hover:bg-white hover:text-brand-crimson px-8 py-[18px] font-mono text-sm uppercase tracking-wider font-bold transition-all w-full sm:w-auto text-center" onclick="playBeep(450, 'triangle')">
          EXPLORE ENGAGEMENT CHANNELS
        </a>
      </div>
    </div>
  </section>


  <!-- FOOTER -->
  <footer class="bg-brand-dark text-white/60 py-16 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 lg:px-24">
      
      <!-- Primary columns -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <!-- Logo Col -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <div class="h-8 w-8 bg-brand-crimson text-white flex items-center justify-center font-display font-bold text-sm">
              B+
            </div>
            <span class="font-display text-sm tracking-wider font-bold text-white">BADASS+</span>
          </div>
          <p class="font-mono text-xs text-white/40 leading-relaxed uppercase">
            EST. 2026 IN THE BRONZE CODES.<br>
            HIGH-OCTANE CREATIVE STUDIO.
          </p>
        </div>

        <!-- Navigation Map -->
        <div>
          <h4 class="font-mono text-xs text-brand-crimson font-bold uppercase tracking-wider mb-4">MAP INDEX</h4>
          <ul class="space-y-2 font-mono text-xs text-white/50">
            <li><a href="#hero" class="hover:text-white transition-colors">/HERO STAGING</a></li>
            <li><a href="#showcase" class="hover:text-white transition-colors">/PROJECTS PORTFOLIO</a></li>
            <li><a href="#about" class="hover:text-white transition-colors">/AGENCY CORE</a></li>
            <li><a href="#brief-engine" class="hover:text-white transition-colors">/BRIEF INTERFACE</a></li>
          </ul>
        </div>

        <!-- Social Channels -->
        <div>
          <h4 class="font-mono text-xs text-brand-crimson font-bold uppercase tracking-wider mb-4">OUTER PROTOCOLS</h4>
          <ul class="space-y-2 font-mono text-xs text-white/50">
            <li><a href="https://behance.net" class="hover:text-white transition-colors">BEHANCE PROFILES</a></li>
            <li><a href="https://dribbble.com" class="hover:text-white transition-colors">DRIBBBLE WIREFRAMES</a></li>
            <li><a href="https://instagram.com" class="hover:text-white transition-colors">INSTAGRAM VISUALS</a></li>
            <li><a href="https://github.com" class="hover:text-white transition-colors">GITHUB DEV MATRIX</a></li>
          </ul>
        </div>

        <!-- Newsletter / Dispatch -->
        <div>
          <h4 class="font-mono text-xs text-brand-crimson font-bold uppercase tracking-wider mb-4">SUBSCRIBE TO DESTRUCTION</h4>
          <p class="font-sans text-xs text-white/40 mb-4">Get raw, unfiltered industry analysis directly to your mailbox once a month.</p>
          <div class="flex">
            <input type="email" id="newsletter-email" placeholder="Your Rebel Email..." class="bg-white/5 border border-white/10 text-white font-mono text-xs px-3 py-2 w-full focus:outline-none focus:border-brand-crimson transition-all">
            <button onclick="handleNewsletter()" class="bg-brand-crimson hover:bg-white hover:text-brand-crimson text-white px-4 transition-colors">
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>

      </div>

      <!-- Legal bottom -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-white/30 gap-4">
        <div>
          © 2026 BADASS+ CREATIVE AGENCY. ALL REGISTERED RIGHTS TO BE DEVIATED.
        </div>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition-colors" onclick="openModalText('Privacy Policy', 'Your private data is fully safe within our local memory grids. We do not transmit tracking metrics to external advertising monopolies.')">Local Grids Policy</a>
          <a href="#" class="hover:text-white transition-colors" onclick="openModalText('Terms of Use', 'By navigating this platform, you agree to challenge standard digital interfaces and demand high-end design assets from all future service providers.')">Rebel Terms</a>
        </div>
      </div>

    </div>
  </footer>


  <!-- JS LOGIC MATRIX -->
  <script>
    // Global active presentation indexes
    let activeSlideIdx = '01';
    
    // Dynamic Testimonials pool
    const testimonials = [
      {
        quote: "Working with BADASS+ was like mainlining jet fuel into our web appearance. The Sphynx-themed brand alignment gave our digital layout the rebellious edge we needed to outperform stale legacy competitor tech.",
        author: "Vandemeer Ritchy",
        role: "Co-Founder, Riot.Punk Dex",
        avatar: "VR"
      },
      {
        quote: "They designed our Web3 DEX platform. Standard layout agencies said our neon concept was 'too bright' and 'non-accessible'. BADASS+ made it visually aggressive and secured a 180% growth rate.",
        author: "Sasha Novokov",
        role: "Head of Design, ETH.LABS",
        avatar: "SN"
      },
      {
        quote: "Unbelievable layout design speed. Our brief compiled inside their interactive engine was directly translated into raw production in 14 business days.",
        author: "Kenji Sato",
        role: "Lead Producer, NEO-METROPOLIS INC",
        avatar: "KS"
      }
    ];
    let currentTestimonialIdx = 0;

    // Custom brief generator initial state
    let briefState = {
      archetype: "Rebel Branding",
      rebellionLevel: 75,
      company: "CyberRiot Corp",
      budget: "$30K - $60K",
      objectives: "Create a complete industry disruption utilizing high-impact typography layout formats, neon light-red accents, and tactile visual state feedback."
    };

    // On Load Initializer
    window.onload = function() {
      compileBriefManifest();
      
      // Hook Escape Key to close search Overlay and Modals
      window.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeModal();
          // Hide Search
          const search = document.getElementById('search-overlay');
          search.classList.add('translate-y-full');
        }
      });
    }

    // Interactive Brief Compiler logic
    function compileBriefManifest() {
      const output = document.getElementById('compiled-brief-output');
      if (!output) return;

      const intensityLabel = briefState.rebellionLevel < 40 ? 'SAFE/CORPORATE' : briefState.rebellionLevel < 80 ? 'TACTICAL REBEL' : 'EXTREME RIOT INC.';

      output.innerText = `[B+ CREATIVE SYSTEM BRIEF SPEC]
=======================================
ARCHETYPE : ${briefState.archetype.toUpperCase()}
COMPANY   : ${briefState.company.toUpperCase()}
FUNDING   : ${briefState.budget}
INTENSITY : ${briefState.rebellionLevel}% [${intensityLabel}]

OBJECTIVES DIRECTIVE:
"${briefState.objectives}"

COMPILE TIMESTEP: ${new Date().toISOString().substring(0, 10)}
STATUS: VALID FOR TRANSMIT`;
    }

    function setBriefArchetype(type, beepFreq, soundType) {
      briefState.archetype = type;
      playBeep(beepFreq, soundType);
      
      // Update UI button indicators
      const buttons = {
        'Rebel Branding': 'arch-brand',
        'Tactical Web3 UI': 'arch-ui',
        'Cyberpunk Motion Sequence': 'arch-motion'
      };
      
      Object.keys(buttons).forEach(key => {
        const btn = document.getElementById(buttons[key]);
        if (key === type) {
          btn.className = "px-3 py-2 border border-brand-crimson bg-brand-crimson text-white font-mono text-xs uppercase transition-all";
        } else {
          btn.className = "px-3 py-2 border border-white/20 hover:border-brand-crimson text-white/80 hover:text-white font-mono text-xs uppercase transition-all";
        }
      });

      compileBriefManifest();
    }

    function updateBriefSlider(val) {
      briefState.rebellionLevel = parseInt(val);
      document.getElementById('rebellion-val').innerText = `${val}%`;
      compileBriefManifest();
    }

    // Listen to manual input edits on company/objectives to update preview
    document.getElementById('brief-company').addEventListener('input', function(e) {
      briefState.company = e.target.value;
      compileBriefManifest();
    });

    document.getElementById('brief-budget').addEventListener('change', function(e) {
      briefState.budget = e.target.value;
      compileBriefManifest();
    });

    document.getElementById('brief-objectives').addEventListener('input', function(e) {
      briefState.objectives = e.target.value;
      compileBriefManifest();
    });

    function triggerBriefSubmission() {
      // Direct aesthetic modal response - No Browser alert allowed!
      const content = `
        <div class="text-center py-6">
          <div class="w-16 h-16 bg-brand-crimson text-white rounded-none flex items-center justify-center text-3xl mx-auto mb-6">
            <i class="fa-solid fa-cloud-arrow-up"></i>
          </div>
          <h3 class="font-display text-xl uppercase font-bold mb-3">MANIFEST TRANSMITTED</h3>
          <p class="font-sans text-brand-dark/70 text-sm mb-6 leading-relaxed">
            Your customized rebellion manifest has been uploaded into our chief producer's active tactical dashboard. We have initialized a low-latency estimated dispatch breakdown. Expect response within 4 hours.
          </p>
          <button onclick="closeModal()" class="bg-brand-dark text-white hover:bg-brand-crimson px-6 py-3 font-mono text-xs uppercase tracking-wider transition-colors">
            ACKNOWLEDGE DIRECTIVE
          </button>
        </div>
      `;
      openModal(content);
    }

    function downloadCompiledBrief() {
      const manifestText = `[B+ CREATIVE SYSTEM BRIEF SPEC]\n=======================================\nARCHETYPE : ${briefState.archetype.toUpperCase()}\nCOMPANY   : ${briefState.company.toUpperCase()}\nFUNDING   : ${briefState.budget}\nINTENSITY : ${briefState.rebellionLevel}%\n\nOBJECTIVES DIRECTIVE:\n"${briefState.objectives}"\n\nCOMPILE TIMESTEP: ${new Date().toISOString()}\n\nAll design assets compiled on this manifest will align with the high-octane aesthetic. Generated via BADASS+ Brief Engine.`;
      
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(manifestText));
      element.setAttribute('download', `${briefState.company.replace(/\s+/g, '_')}_rebellion_brief.txt`);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }


    // Portfolio Project Modal Popups
    function openProject(title, category, description, typeTag) {
      playBeep(450, 'triangle');
      const content = `
        <div>
          <span class="text-brand-crimson font-mono text-xs uppercase tracking-widest block mb-1">#${typeTag.toUpperCase()}</span>
          <h3 class="font-display text-2xl uppercase font-bold text-brand-dark mb-4">${title}</h3>
          
          <div class="aspect-video w-full bg-brand-dark mb-6 flex items-center justify-center relative overflow-hidden">
            <!-- Simulated wireframe based on dynamic category -->
            <svg viewBox="0 0 400 220" class="w-full h-full">
              <rect width="100%" height="100%" fill="#1E1E24"/>
              <line x1="0" y1="0" x2="400" y2="220" stroke="#E13838" stroke-width="1" opacity="0.3"/>
              <line x1="400" y1="0" x2="0" y2="220" stroke="#E13838" stroke-width="1" opacity="0.3"/>
              <text x="50%" y="50%" font-family="Space Grotesk" font-size="16" fill="#FFFFFF" text-anchor="middle" font-weight="bold">DETAILED INTERFACE BLUEPRINT // ${category.toUpperCase()}</text>
            </svg>
          </div>

          <p class="font-sans text-brand-dark/80 text-sm leading-relaxed mb-6">
            ${description}
          </p>

          <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-brand-dark/10">
            <button onclick="closeModal(); document.getElementById('brief-engine').scrollIntoView();" class="bg-brand-crimson text-white hover:bg-brand-dark px-4 py-3 font-mono text-xs uppercase tracking-widest font-bold transition-all text-center">
              BUILD INFLUENCED PROJECT
            </button>
            <button onclick="closeModal()" class="bg-brand-dark/5 hover:bg-brand-dark hover:text-white px-4 py-3 font-mono text-xs uppercase tracking-widest transition-all text-center">
              CLOSE SPEC
            </button>
          </div>
        </div>
      `;
      openModal(content);
    }

    // Modal Generic Controls
    function openModal(htmlContent) {
      const modal = document.getElementById('interactive-modal');
      const container = document.getElementById('modal-content');
      container.innerHTML = htmlContent;
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.remove('opacity-0');
      }, 10);
    }

    function openModalText(title, text) {
      playBeep(400, 'sine');
      const content = `
        <div>
          <h3 class="font-display text-lg uppercase font-bold mb-4">${title}</h3>
          <p class="font-sans text-brand-dark/70 text-sm leading-relaxed mb-6">${text}</p>
          <button onclick="closeModal()" class="bg-brand-dark text-white hover:bg-brand-crimson px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors">
            UNDERSTOOD
          </button>
        </div>
      `;
      openModal(content);
    }

    function closeModal() {
      const modal = document.getElementById('interactive-modal');
      modal.classList.add('opacity-0');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 300);
    }


    // Portfolio Interactive filter
    function filterWorks(category) {
      playBeep(420, 'sine');
      
      const cards = document.querySelectorAll('#works-container > div');
      cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.classList.remove('hidden');
          // Smooth entry effect
          card.classList.add('animate-fade-in');
        } else {
          card.classList.add('hidden');
        }
      });

      // Update Filter button aesthetics
      const btns = ['all', 'branding', 'saas', 'motion'];
      btns.forEach(btn => {
        const el = document.getElementById(`btn-filter-${btn}`);
        if (btn === category) {
          el.className = "px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all bg-brand-crimson text-white";
        } else {
          el.className = "px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all text-white/60 hover:text-white";
        }
      });
    }


    // Navigation Sidebar active-dot indicator tracker
    function setActiveSlide(slideId) {
      activeSlideIdx = slideId;
      playBeep(330, 'sine');
      
      const indexes = ['01', '02', '03', '04'];
      indexes.forEach(idx => {
        const el = document.getElementById(`nav-idx-${idx}`);
        if (idx === slideId) {
          el.classList.add('text-brand-dark', 'font-bold');
          el.classList.remove('text-brand-dark/30');
        } else {
          el.classList.remove('text-brand-dark', 'font-bold');
          el.classList.add('text-brand-dark/30');
        }
      });
    }

    // Toggle Search overlay UI
    function toggleSearch() {
      const overlay = document.getElementById('search-overlay');
      if (overlay.classList.contains('translate-y-full')) {
        overlay.classList.remove('translate-y-full');
        document.getElementById('search-input').focus();
      } else {
        overlay.classList.add('translate-y-full');
      }
    }

    function setSearchValue(val) {
      const input = document.getElementById('search-input');
      input.value = val;
      playBeep(450, 'triangle');
      handleSearch({ key: 'Enter' });
    }

    function handleSearch(event) {
      if (event.key === 'Enter') {
        const query = document.getElementById('search-input').value.toLowerCase();
        toggleSearch(); // close search
        
        // Filter elements in page matching key terms
        if (query.includes('brand')) {
          filterWorks('branding');
          document.getElementById('showcase').scrollIntoView();
        } else if (query.includes('saas') || query.includes('cyber')) {
          filterWorks('saas');
          document.getElementById('showcase').scrollIntoView();
        } else if (query.includes('motion')) {
          filterWorks('motion');
          document.getElementById('showcase').scrollIntoView();
        } else if (query.includes('brief') || query.includes('generator')) {
          document.getElementById('brief-engine').scrollIntoView();
        } else {
          // General search response modal
          openModalText("SYSTEM SEARCH DEPLOYED", `We queried all system blocks for keywords matching "${query}". No direct raw match was found. Consider directing custom briefs or initiating our "Tactical Identity" roadmap query.`);
        }
      }
    }


    // Interactive pricing inquiry auto-selector hook
    function selectEngagementTier(tierName, budgetEst) {
      // Auto populate brief engine
      briefState.archetype = tierName;
      briefState.budget = budgetEst;
      
      // Update interactive sliders accordingly
      if (tierName.includes('Identity')) {
        updateBriefSlider(50);
        setBriefArchetype('Rebel Branding', 220, 'triangle');
      } else if (tierName.includes('Ecosystem')) {
        updateBriefSlider(85);
        setBriefArchetype('Tactical Web3 UI', 440, 'triangle');
      } else {
        updateBriefSlider(100);
        setBriefArchetype('Cyberpunk Motion Sequence', 660, 'triangle');
      }

      compileBriefManifest();
    }


    // Testimonial Engine Rotators
    function updateTestimonialUI() {
      const data = testimonials[currentTestimonialIdx];
      document.getElementById('testimonial-quote').innerText = `"${data.quote}"`;
      document.getElementById('testimonial-author').innerText = data.author;
      document.getElementById('testimonial-role').innerText = data.role;
      document.getElementById('testimonial-avatar').innerText = data.avatar;
    }

    function nextTestimonial() {
      currentTestimonialIdx = (currentTestimonialIdx + 1) % testimonials.length;
      updateTestimonialUI();
    }

    function prevTestimonial() {
      currentTestimonialIdx = (currentTestimonialIdx - 1 + testimonials.length) % testimonials.length;
      updateTestimonialUI();
    }


    // FAQ accordion toggle logic
    function toggleFaq(idx) {
      const content = document.getElementById(`faq-content-${idx}`);
      const chevron = document.getElementById(`faq-chevron-${idx}`);
      
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        chevron.classList.add('rotate-180');
      } else {
        content.classList.add('hidden');
        chevron.classList.remove('rotate-180');
      }
    }


    // Manifest / Stats file triggers
    function triggerDownload(type) {
      playBeep(520, 'triangle');
      const content = `
        <div class="text-center">
          <h3 class="font-display text-lg uppercase font-bold mb-4">PRE-PACKAGED MANIFEST DOWNLOAD</h3>
          <p class="font-sans text-brand-dark/70 text-sm leading-relaxed mb-6">
            We are packing the static **${type}** source pack for immediate offline audit. Please confirm compliance parameters to finalize extraction.
          </p>
          <div class="flex justify-center gap-3">
            <button onclick="closeModal();" class="bg-brand-crimson text-white hover:bg-brand-dark px-6 py-2.5 font-mono text-xs uppercase tracking-wider font-bold transition-all">
              EXTRACT NOW
            </button>
            <button onclick="closeModal()" class="bg-brand-dark/5 hover:bg-brand-dark hover:text-white px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all">
              CANCEL
            </button>
          </div>
        </div>
      `;
      openModal(content);
    }


    // Mobile Menu Toggle
    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
      } else {
        menu.classList.remove('flex');
        menu.classList.add('hidden');
      }
    }


    // Interactive Wink on Sphynx artwork eyes
    function winkCatEyes() {
      playBeep(880, 'sine', 0.2, 0.25);
      
      const leftEye = document.getElementById('left-eye-pupil');
      const rightEye = document.getElementById('right-eye-pupil');
      
      // Animate scaling of cat eyes to simulate organic reactiveness
      leftEye.style.transition = 'transform 0.1s ease-out';
      rightEye.style.transition = 'transform 0.1s ease-out';
      
      leftEye.style.transform = 'scaleY(0.1)';
      rightEye.style.transform = 'scaleY(0.1)';
      
      setTimeout(() => {
        leftEye.style.transform = 'scaleY(1)';
        rightEye.style.transform = 'scaleY(1)';
      }, 150);
    }


    // Footer Newsletter signup response
    function handleNewsletter() {
      const email = document.getElementById('newsletter-email').value;
      if (!email || !email.includes('@')) {
        playBeep(250, 'sawtooth');
        openModalText("EMAIL REJECTED", "Your input email lacks standard system syntax. Please input a valid email coordinate.");
        return;
      }
      playBeep(650, 'sine');
      openModalText("SUBSCRIPTION SUCCESSFUL", `Welcome to the riot. We have logged "${email}" into our periodic aesthetic transmission matrices.`);
      document.getElementById('newsletter-email').value = '';
    }
  </script>

</body>
</html>
6
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>911 Turbo S Cabriolet - Dual-Tone Interactive Experience</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Cormorant Garamond (Editorial Serif) & Plus Jakarta Sans (Premium Sans) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        serif: ['Cormorant Garamond', 'serif'],
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                    },
                    colors: {
                        brandDark: '#35304a',      /* Deep Slate Purple/Indigo from left panel */
                        brandLight: '#f2edd9',     /* Warm Alabaster/Cream from right panel */
                        brandCreamDark: '#e3dcbf', /* Slightly darker cream for contrast */
                        brandSlate: '#211d30',     /* Ultra-dark slate for text/accents */
                        brandRed: '#e32a1e',       /* Classic Guards Red */
                        brandYellow: '#fbc02d',    /* Racing Yellow alternative */
                        brandBlue: '#00bcd4',      /* Miami Blue alternative */
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom scrollbars */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #35304a;
        }
        ::-webkit-scrollbar-thumb {
            background: #e3dcbf;
            border-radius: 4px;
        }
        
        /* Subtle texture overlay to replicate premium catalog feel */
        .noise-bg {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3联%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
        }

        /* Pulse effects for hotspots */
        @keyframes custom-ping {
            0% { transform: scale(1); opacity: 1; }
            70%, 100% { transform: scale(2.2); opacity: 0; }
        }
        .animate-custom-ping {
            animation: custom-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* Custom luxury cursor transitions */
        .transition-all-custom {
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
    </style>
</head>
<body class="bg-[#1c1a26] text-slate-100 font-sans antialiased overflow-x-hidden noise-bg selection:bg-brandLight selection:text-brandDark">

    <!-- Premium Audio System Controller -->
    <div class="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-brandSlate/90 backdrop-blur-md border border-brandLight/20 px-4 py-3 rounded-full shadow-2xl">
        <div class="flex flex-col text-right">
            <span class="text-[10px] uppercase tracking-widest text-brandLight/60">Acoustic System</span>
            <span id="engine-status" class="text-xs font-semibold text-brandLight">Engine: Switched Off</span>
        </div>
        <button id="audio-toggle" onclick="toggleEngineSound()" class="w-10 h-10 rounded-full flex items-center justify-center bg-brandLight text-brandDark hover:bg-brandRed hover:text-white transition-all duration-300 shadow-lg group">
            <i id="audio-icon" data-lucide="power" class="w-5 h-5 group-hover:rotate-90 transition-transform duration-500"></i>
        </button>
    </div>

    <!-- Live Toast System (Replaces browser alert) -->
    <div id="toast" class="fixed top-6 right-6 z-50 transform translate-y-[-100px] opacity-0 transition-all duration-500 bg-brandSlate text-brandLight border border-brandLight/30 rounded-lg px-6 py-4 shadow-2xl flex items-center gap-4 max-w-sm">
        <div class="w-2 h-2 rounded-full bg-brandRed animate-pulse"></div>
        <div class="flex-1">
            <h4 class="font-serif text-sm font-semibold tracking-wide">SYSTEM MESSAGE</h4>
            <p id="toast-message" class="text-xs text-brandLight/80 mt-1">Notification details go here.</p>
        </div>
        <button onclick="dismissToast()" class="text-brandLight/50 hover:text-brandLight text-xs">&times;</button>
    </div>

    <!-- Top Premium Navigation Split Menu -->
    <header class="relative z-40 w-full border-b border-brandLight/10">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <!-- Left Header: Dark Zone -->
            <div class="bg-brandDark text-brandLight/90 flex items-center justify-between px-6 md:px-12 py-5 border-r border-brandLight/10">
                <div class="flex items-center gap-6">
                    <button class="hover:text-brandLight text-brandLight/70 flex items-center gap-2 text-xs tracking-widest uppercase" onclick="toggleMobileMenu()">
                        <i data-lucide="menu" class="w-4 h-4"></i>
                        <span class="hidden sm:inline">Catalogue</span>
                    </button>
                    <nav class="hidden lg:flex items-center gap-8 text-xs tracking-widest uppercase text-brandLight/70">
                        <a href="#models" class="hover:text-brandLight transition-colors">Cars</a>
                        <a href="#technology" class="hover:text-brandLight transition-colors">Technology</a>
                        <a href="#configurator" class="hover:text-brandLight transition-colors">Bespoke Shop</a>
                    </nav>
                </div>
            </div>
            <!-- Right Header: Light Zone -->
            <div class="bg-brandLight text-brandSlate flex items-center justify-between px-6 md:px-12 py-5">
                <nav class="hidden lg:flex items-center gap-8 text-xs tracking-widest uppercase text-brandSlate/70">
                    <a href="#engineering" class="hover:text-brandSlate transition-colors">Engineering</a>
                    <a href="#experience" class="hover:text-brandSlate transition-colors">Heritage</a>
                </nav>
                <div class="flex items-center gap-6 ml-auto lg:ml-0">
                    <button onclick="showSearch()" class="hover:text-brandSlate text-brandSlate/70 transition-colors">
                        <i data-lucide="search" class="w-5 h-5"></i>
                    </button>
                    <a href="#configurator" class="hidden sm:inline-block border border-brandSlate px-4 py-1.5 text-[10px] font-semibold tracking-widest uppercase hover:bg-brandSlate hover:text-brandLight transition-all duration-300">
                        Build Custom
                    </a>
                </div>
            </div>
        </div>

        <!-- Absolute Center Shield Logo Emblem -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-50">
            <div class="bg-brandSlate hover:bg-brandRed border border-brandLight/30 w-12 h-14 flex items-center justify-center shadow-xl clip-shield transition-all duration-300 cursor-pointer" onclick="showToast('Porsche Brand Center', 'Explore the classic styling & legacy of the legendary 911.')">
                <!-- Golden Crest Representation -->
                <svg class="w-6 h-8 text-brandLight" viewBox="0 0 24 28" fill="currentColor">
                    <path d="M12 2L4 5v8c0 5.25 3.42 10.16 8 11 4.58-.84 8-5.75 8-11V5l-8-3zm0 3c3.87 0 7 3.13 7 7 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-3.87 3.13-7 7-7z"/>
                </svg>
            </div>
        </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-menu" class="fixed inset-0 bg-brandSlate/95 z-50 backdrop-blur-xl pointer-events-none opacity-0 transition-all duration-500 flex flex-col justify-between p-8">
        <div class="flex justify-between items-center border-b border-brandLight/10 pb-6">
            <span class="text-sm font-serif italic text-brandLight">911 Digital Suite</span>
            <button onclick="toggleMobileMenu()" class="text-brandLight/80 hover:text-white">
                <i data-lucide="x" class="w-8 h-8"></i>
            </button>
        </div>
        <div class="flex flex-col gap-6 my-auto text-center">
            <a href="#models" onclick="toggleMobileMenu()" class="font-serif text-3xl hover:text-brandRed transition-colors">Active Fleet</a>
            <a href="#technology" onclick="toggleMobileMenu()" class="font-serif text-3xl hover:text-brandRed transition-colors">Traction Technology</a>
            <a href="#engineering" onclick="toggleMobileMenu()" class="font-serif text-3xl hover:text-brandRed transition-colors">Chassis Dynamics</a>
            <a href="#configurator" onclick="toggleMobileMenu()" class="font-serif text-3xl hover:text-brandRed transition-colors">Bespoke Creator</a>
        </div>
        <div class="border-t border-brandLight/10 pt-6 text-center text-xs text-brandLight/40 tracking-wider">
            © 2026 Crafted for Extreme Luxury. Built for High-Speed Performance.
        </div>
    </div>

    <!-- Search Overlay -->
    <div id="search-overlay" class="fixed inset-0 bg-brandSlate/95 z-50 backdrop-blur-md hidden items-center justify-center p-6">
        <div class="w-full max-w-2xl bg-brandDark/80 p-8 rounded-2xl border border-brandLight/20 relative">
            <button onclick="hideSearch()" class="absolute top-4 right-4 text-brandLight/60 hover:text-white">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
            <h3 class="font-serif text-2xl text-brandLight mb-4">Search Porsche Vault</h3>
            <div class="relative">
                <input type="text" placeholder="Type keywords e.g., PTM, Cabriolet, Horsepower..." class="w-full bg-brandSlate text-brandLight border border-brandLight/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brandRed">
                <button onclick="executeSearch()" class="absolute right-3 top-3 text-brandLight/60 hover:text-brandRed">
                    <i data-lucide="arrow-right" class="w-6 h-6"></i>
                </button>
            </div>
            <div class="mt-4 flex gap-2 flex-wrap text-xs text-brandLight/60">
                <span>Quick Links:</span>
                <a href="#technology" onclick="hideSearch()" class="underline hover:text-brandLight">Active Traction</a>,
                <a href="#configurator" onclick="hideSearch()" class="underline hover:text-brandLight">Specs Configurator</a>,
                <a href="#models" onclick="hideSearch()" class="underline hover:text-brandLight">0-100 Speed</a>
            </div>
        </div>
    </div>


    <!-- MAIN HERO SECTION with EXACT SPLIT THEME -->
    <main class="relative min-h-screen">
        <div class="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            
            <!-- LEFT HERO PANEL (DARK MODE / SLATE PURPLE) -->
            <div class="bg-brandDark text-brandLight px-8 md:px-16 pt-32 pb-24 flex flex-col justify-between relative overflow-hidden">
                <div class="absolute inset-0 pointer-events-none opacity-20">
                    <div class="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-brandLight blur-3xl"></div>
                </div>

                <!-- Product Header Details -->
                <div class="relative z-10">
                    <p class="text-[11px] tracking-[0.3em] text-brandLight/60 uppercase mb-3">The Innovative Bodyshell of the 911</p>
                    <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-none mb-8 tracking-tight">
                        Turbo S<br><span class="italic font-light">Cabriolet</span>
                    </h1>
                </div>

                <!-- Quick Statistics Sheet -->
                <div class="border-t border-brandLight/20 pt-8 relative z-10 max-w-md">
                    <div class="flex items-baseline justify-between py-3 border-b border-brandLight/10">
                        <span class="text-xs uppercase tracking-widest text-brandLight/50">0 - 100 km/h</span>
                        <span class="text-2xl font-serif text-brandLight font-medium">2.8 sec</span>
                    </div>
                    <div class="flex items-baseline justify-between py-3 border-b border-brandLight/10">
                        <span class="text-xs uppercase tracking-widest text-brandLight/50">Peak Performance</span>
                        <span class="text-2xl font-serif text-brandLight font-medium">650 hp / 478 kW</span>
                    </div>
                    <div class="flex items-baseline justify-between py-3">
                        <span class="text-xs uppercase tracking-widest text-brandLight/50">Top Track Velocity</span>
                        <span class="text-2xl font-serif text-brandLight font-medium">330 km/h</span>
                    </div>
                </div>

                <!-- Call to action action base -->
                <div class="pt-8 relative z-10">
                    <a href="#configurator" class="inline-block bg-brandLight text-brandDark hover:bg-brandRed hover:text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all-custom shadow-xl">
                        Build Your Custom Porsche
                    </a>
                </div>
            </div>

            <!-- RIGHT HERO PANEL (LIGHT MODE / ALABASTER CREAM) -->
            <div class="bg-brandLight text-brandSlate px-8 md:px-16 pt-32 pb-24 flex flex-col justify-between relative">
                
                <!-- Dynamic Interactive Detail Module (Changes on Hotspot hover/click) -->
                <div id="dynamic-detail-panel" class="max-w-md mt-6 md:mt-0 transition-all-custom">
                    <p class="text-[11px] tracking-[0.3em] text-brandSlate/50 uppercase mb-3 font-semibold">Adaptive Tech Showcase</p>
                    <h2 id="detail-title" class="font-serif text-4xl font-normal text-brandSlate mb-6">Porsche Traction Management (PTM)</h2>
                    
                    <!-- Dynamic Graphic Frame (Suspension vector illustration built with custom elegant lines) -->
                    <div class="my-6 p-4 bg-brandCreamDark/40 rounded-xl border border-brandSlate/10 shadow-inner flex justify-center">
                        <svg id="tech-graphic" class="w-full max-w-[240px] h-[160px] text-brandSlate" viewBox="0 0 200 150">
                            <!-- Central Axle -->
                            <line x1="100" y1="40" x2="100" y2="110" stroke="currentColor" stroke-width="2" stroke-dasharray="4"/>
                            <!-- Front Axle and wheels -->
                            <line x1="40" y1="40" x2="160" y2="40" stroke="currentColor" stroke-width="4"/>
                            <rect x="25" y="25" width="15" height="30" rx="3" fill="currentColor"/>
                            <rect x="160" y="25" width="15" height="30" rx="3" fill="currentColor"/>
                            <!-- Rear Axle and wheels -->
                            <line x1="40" y1="110" x2="160" y2="110" stroke="currentColor" stroke-width="4"/>
                            <rect x="25" y="95" width="15" height="30" rx="3" fill="currentColor"/>
                            <rect x="160" y="95" width="15" height="30" rx="3" fill="currentColor"/>
                            <!-- Active Center Differential indicator -->
                            <circle cx="100" cy="75" r="16" fill="currentColor" opacity="0.15" class="animate-pulse"/>
                            <circle cx="100" cy="75" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
                            <circle cx="100" cy="75" r="3" fill="currentColor"/>
                            <!-- Power delivery flow lines -->
                            <line x1="100" y1="75" x2="100" y2="45" stroke="#e32a1e" stroke-width="2" stroke-dasharray="4" class="animate-pulse"/>
                            <line x1="100" y1="75" x2="100" y2="105" stroke="#e32a1e" stroke-width="2" stroke-dasharray="4"/>
                        </svg>
                    </div>

                    <p id="detail-desc" class="text-sm leading-relaxed text-brandSlate/80 font-normal">
                        Active all-wheel drive coordinates distribution of drive force perfectly between rear and front axles. Features an electronically controlled multi-plate clutch for instant torque adjustment.
                    </p>
                    
                    <div class="mt-6 flex gap-4">
                        <a href="#technology" class="text-xs font-bold tracking-widest uppercase border-b-2 border-brandSlate hover:border-brandRed hover:text-brandRed pb-1 transition-all duration-300">
                            Explore Driving Dynamics
                        </a>
                    </div>
                </div>

                <!-- Custom Exterior Color Swatches Picker (Updates Car Centerpiece paint dynamically!) -->
                <div class="mt-12">
                    <p class="text-[10px] tracking-[0.2em] uppercase font-bold text-brandSlate/60 mb-3">Instant Paint Selection</p>
                    <div class="flex items-center gap-4">
                        <button onclick="changeCarColor('#e32a1e', 'Guards Red')" class="w-8 h-8 rounded-full bg-brandRed border-2 border-white shadow-lg focus:outline-none transition-all duration-300 hover:scale-110" title="Guards Red"></button>
                        <button onclick="changeCarColor('#fbc02d', 'Racing Yellow')" class="w-8 h-8 rounded-full bg-brandYellow border-2 border-white shadow-lg focus:outline-none transition-all duration-300 hover:scale-110" title="Racing Yellow"></button>
                        <button onclick="changeCarColor('#00bcd4', 'Miami Blue')" class="w-8 h-8 rounded-full bg-brandBlue border-2 border-white shadow-lg focus:outline-none transition-all duration-300 hover:scale-110" title="Miami Blue"></button>
                        <button onclick="changeCarColor('#2d2d3a', 'Jet Black Metallic')" class="w-8 h-8 rounded-full bg-[#2d2d3a] border-2 border-white shadow-lg focus:outline-none transition-all duration-300 hover:scale-110" title="Jet Black Metallic"></button>
                        <button onclick="changeCarColor('#fbfbfd', 'Carrera White')" class="w-8 h-8 rounded-full bg-[#fbfbfd] border-2 border-white shadow-lg focus:outline-none transition-all duration-300 hover:scale-110" title="Carrera White"></button>
                        <span id="paint-label" class="text-xs font-semibold uppercase tracking-wider text-brandSlate/70 ml-2">Guards Red</span>
                    </div>
                </div>

                <!-- Social Engagement layout exactly aligned with image layout -->
                <div class="flex items-center justify-between border-t border-brandSlate/10 pt-8 mt-12">
                    <span class="text-xs font-serif italic text-brandSlate/60">Share Build Concept</span>
                    <div class="flex gap-4">
                        <a href="#" class="w-8 h-8 rounded-full bg-brandSlate/5 text-brandSlate hover:bg-brandSlate hover:text-brandLight flex items-center justify-center transition-all duration-300">
                            <i data-lucide="instagram" class="w-4 h-4"></i>
                        </a>
                        <a href="#" class="w-8 h-8 rounded-full bg-brandSlate/5 text-brandSlate hover:bg-brandSlate hover:text-brandLight flex items-center justify-center transition-all duration-300">
                            <i data-lucide="twitter" class="w-4 h-4"></i>
                        </a>
                        <a href="#" class="w-8 h-8 rounded-full bg-brandSlate/5 text-brandSlate hover:bg-brandSlate hover:text-brandLight flex items-center justify-center transition-all duration-300">
                            <i data-lucide="facebook" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- THE ABSOLUTE CENTERPIECE DYNAMIC TOP-DOWN CAR -->
            <!-- Positioned flawlessly between both panes to perfectly bridge the dark/light divide -->
            <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none md:pointer-events-auto h-[550px] w-[280px]">
                <div class="relative w-full h-full flex items-center justify-center">
                    
                    <!-- HIGH-FIDELITY VECTOR TOP-DOWN VIEW CAR DESIGN -->
                    <svg id="car-svg" class="w-full h-full drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)] transition-all-custom" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        
                        <!-- Base Shadow -->
                        <ellipse cx="100" cy="200" rx="65" ry="175" fill="black" opacity="0.4" />

                        <!-- Main Body Paint Base Shell (Targeted by javascript to change paint colors dynamically) -->
                        <path id="car-paint" d="M100 20 C60 25, 45 45, 42 75 C38 120, 38 280, 42 325 C45 355, 60 375, 100 380 C140 375, 155 355, 158 325 C162 280, 162 120, 158 75 C155 45, 140 25, 100 20 Z" fill="#e32a1e" class="transition-all duration-700" />

                        <!-- Wheel Arches / Flare outlines -->
                        <path d="M42 65 C41 85, 41 100, 42 120" stroke="#111" stroke-width="2"/>
                        <path d="M158 65 C159 85, 159 100, 158 120" stroke="#111" stroke-width="2"/>
                        <path d="M42 280 C41 300, 41 315, 42 335" stroke="#111" stroke-width="2"/>
                        <path d="M158 280 C159 300, 159 315, 158 335" stroke="#111" stroke-width="2"/>

                        <!-- Side Mirrors -->
                        <path d="M40 105 C30 105, 20 110, 22 118 C24 125, 38 125, 42 120" fill="#222" />
                        <path d="M160 105 C170 105, 180 110, 178 118 C176 125, 162 125, 158 120" fill="#222" />
                        
                        <!-- Side Skirts Details -->
                        <rect x="36" y="140" width="4" height="120" rx="2" fill="#15151c"/>
                        <rect x="160" y="140" width="4" height="120" rx="2" fill="#15151c"/>

                        <!-- Front Headlights (High-end LEDs) -->
                        <ellipse cx="55" cy="50" rx="6" ry="12" transform="rotate(-15 55 50)" fill="#fffae0" opacity="0.9"/>
                        <ellipse cx="145" cy="50" rx="6" ry="12" transform="rotate(15 145 50)" fill="#fffae0" opacity="0.9"/>
                        <ellipse cx="55" cy="50" rx="3" ry="6" transform="rotate(-15 55 50)" fill="#fff" />
                        <ellipse cx="145" cy="50" rx="3" ry="6" transform="rotate(15 145 50)" fill="#fff" />

                        <!-- Front Air Intake vents on Hood -->
                        <path d="M75 35 Q100 45 125 35" stroke="#15151c" stroke-width="2.5" fill="none"/>
                        <path d="M70 75 Q100 85 130 75" stroke="#15151c" stroke-width="1.5" fill="none" opacity="0.4"/>

                        <!-- Windshield (Tempered luxury glass) -->
                        <path d="M55 110 C62 90, 138 90, 145 110 C140 160, 60 160, 55 110 Z" fill="#201f2b" stroke="#15151c" stroke-width="3"/>
                        <path d="M60 108 C65 95, 135 95, 140 108" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.15"/>

                        <!-- Luxurious Interior Cabin / Seat Buckets (Top view detailing) -->
                        <!-- Cockpit surround line -->
                        <path d="M52 135 C50 170, 50 210, 52 235 C65 245, 135 245, 148 235 C150 210, 150 170, 148 135 Z" fill="#4d4439" stroke="#15151c" stroke-width="2"/>
                        <!-- Leather Seats -->
                        <!-- Driver Seat -->
                        <rect x="62" y="145" width="30" height="40" rx="8" fill="#d2b48c" stroke="#15151c" stroke-width="1.5" />
                        <rect x="67" y="152" width="20" height="28" rx="4" fill="#c5a075" />
                        <rect x="69" y="137" width="16" height="10" rx="3" fill="#a07d53" /> <!-- Headrest -->
                        <!-- Passenger Seat -->
                        <rect x="108" y="145" width="30" height="40" rx="8" fill="#d2b48c" stroke="#15151c" stroke-width="1.5" />
                        <rect x="113" y="152" width="20" height="28" rx="4" fill="#c5a075" />
                        <rect x="115" y="137" width="16" height="10" rx="3" fill="#a07d53" /> <!-- Headrest -->
                        <!-- Center Console / Dashboard Top -->
                        <rect x="94" y="142" width="12" height="60" rx="4" fill="#2d2925"/>
                        <!-- Premium Wooden/Alloy Shifter track detail -->
                        <line x1="100" y1="150" x2="100" y2="185" stroke="#111" stroke-width="2"/>
                        <!-- Steering Wheel top curve -->
                        <path d="M68 128 Q77 121 86 128" stroke="#111" stroke-width="3" fill="none"/>

                        <!-- Engine Intake Deck (Rear Engine configuration) -->
                        <path d="M60 250 C65 240, 135 240, 140 250 C145 285, 55 285, 60 250 Z" fill="#1e1b24" />
                        <line x1="75" y1="250" x2="75" y2="280" stroke="#444" stroke-width="1.5"/>
                        <line x1="85" y1="248" x2="85" y2="282" stroke="#444" stroke-width="1.5"/>
                        <line x1="100" y1="245" x2="100" y2="285" stroke="#c4332b" stroke-width="2"/> <!-- Center Accent Line -->
                        <line x1="115" y1="248" x2="115" y2="282" stroke="#444" stroke-width="1.5"/>
                        <line x1="125" y1="250" x2="125" y2="280" stroke="#444" stroke-width="1.5"/>

                        <!-- Soft Top Convertible Roof Fold area -->
                        <path d="M52 235 Q100 245 148 235" stroke="#111" stroke-width="5" fill="none"/>

                        <!-- Rear Active Spoiler (Slightly extends out) -->
                        <path d="M50 330 Q100 340 150 330" stroke="#1c1a26" stroke-width="6" fill="none"/>
                        <rect x="48" y="338" width="104" height="12" rx="4" fill="#2d2925" />

                        <!-- Tail Light Strip (Glows Red!) -->
                        <path d="M48 354 Q100 364 152 354" stroke="#e32a1e" stroke-width="3.5" fill="none" class="animate-pulse" />
                        <path d="M48 354 Q100 364 152 354" stroke="#fff" stroke-width="1" fill="none" opacity="0.8" />
                    </svg>

                    <!-- INTERACTIVE HOTSPOTS (Perfect absolute placements overlapping the top-down car) -->
                    <!-- Hotspot 1: Aerodynamics / Active Spoiler (Rear) -->
                    <button onclick="activateHotspot('aero')" class="absolute bottom-[80px] left-[140px] z-40 focus:outline-none group">
                        <span class="absolute inline-flex h-6 w-6 rounded-full bg-brandRed/50 animate-custom-ping"></span>
                        <span class="relative inline-flex rounded-full h-4 w-4 bg-brandRed border border-white shadow-md flex items-center justify-center text-[8px] text-white font-bold">1</span>
                    </button>

                    <!-- Hotspot 2: Cockpit / Luxury Leather Seat (Middle Left) -->
                    <button onclick="activateHotspot('cockpit')" class="absolute top-[210px] left-[90px] z-40 focus:outline-none group">
                        <span class="absolute inline-flex h-6 w-6 rounded-full bg-brandYellow/50 animate-custom-ping"></span>
                        <span class="relative inline-flex rounded-full h-4 w-4 bg-brandYellow border border-white shadow-md flex items-center justify-center text-[8px] text-brandDark font-bold">2</span>
                    </button>

                    <!-- Hotspot 3: PTM Chassis / Drivetrain (Middle Center) -->
                    <button onclick="activateHotspot('chassis')" class="absolute top-[280px] left-[140px] z-40 focus:outline-none group">
                        <span class="absolute inline-flex h-6 w-6 rounded-full bg-brandBlue/50 animate-custom-ping"></span>
                        <span class="relative inline-flex rounded-full h-4 w-4 bg-brandBlue border border-white shadow-md flex items-center justify-center text-[8px] text-white font-bold">3</span>
                    </button>

                    <!-- Hotspot 4: Twin-Turbo Engine Power (Rear Engine Deck) -->
                    <button onclick="activateHotspot('engine')" class="absolute bottom-[160px] left-[110px] z-40 focus:outline-none group">
                        <span class="absolute inline-flex h-6 w-6 rounded-full bg-brandRed/50 animate-custom-ping"></span>
                        <span class="relative inline-flex rounded-full h-4 w-4 bg-brandRed border border-white shadow-md flex items-center justify-center text-[8px] text-white font-bold">4</span>
                    </button>
                </div>
            </div>

        </div>
    </main>


    <!-- SPECIFICATION COMPARISON CAROUSEL SIMULATOR -->
    <section id="models" class="py-24 bg-brandDark text-brandLight border-t border-brandLight/10 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <span class="text-xs uppercase tracking-[0.3em] text-brandLight/60">Choose Your Variant</span>
                    <h2 class="font-serif text-4xl md:text-6xl font-normal mt-2">Active Fleet Comparison</h2>
                </div>
                <div class="flex gap-4">
                    <button onclick="switchVariant('carrera')" id="btn-carrera" class="px-6 py-2 rounded-full border border-brandLight/20 text-xs tracking-widest uppercase hover:bg-brandLight hover:text-brandDark transition-all duration-300">
                        Carrera 4S
                    </button>
                    <button onclick="switchVariant('turbo')" id="btn-turbo" class="px-6 py-2 rounded-full border border-brandLight/20 text-xs tracking-widest uppercase hover:bg-brandLight hover:text-brandDark transition-all duration-300">
                        911 Turbo
                    </button>
                    <button onclick="switchVariant('turbos')" id="btn-turbos" class="px-6 py-2 rounded-full bg-brandLight text-brandDark text-xs tracking-widest uppercase hover:opacity-90 transition-all duration-300 font-bold">
                        911 Turbo S
                    </button>
                </div>
            </div>

            <!-- Specs Grid Simulator -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <!-- Visual highlight card -->
                <div class="bg-brandSlate/50 p-8 rounded-2xl border border-brandLight/10 h-full flex flex-col justify-between">
                    <div>
                        <span id="variant-subtitle" class="text-xs text-brandLight/60 uppercase tracking-widest">Ultimate Benchmark</span>
                        <h3 id="variant-title" class="font-serif text-3xl font-medium mt-1 mb-4">911 Turbo S Cabriolet</h3>
                        <p id="variant-desc" class="text-xs leading-relaxed text-brandLight/70 font-normal">
                            Equipped with a 3.8-liter twin-turbo six-cylinder boxer engine. Unites incredible performance with legendary dynamic chassis control systems.
                        </p>
                    </div>
                    <div class="mt-8 pt-8 border-t border-brandLight/10">
                        <span class="text-[10px] uppercase tracking-wider text-brandLight/40 block">Starting MSRP From</span>
                        <span id="variant-price" class="text-2xl font-serif text-brandLight">$230,400</span>
                    </div>
                </div>

                <!-- Live Dynamic Dial Gauge Indicators (Created with pure SVG & JS manipulation) -->
                <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <!-- Gauge 1: Max Speed -->
                    <div class="bg-brandSlate/30 p-8 rounded-2xl border border-brandLight/5 flex flex-col items-center text-center">
                        <span class="text-xs uppercase tracking-widest text-brandLight/60 mb-4">Max Speed Velocity</span>
                        <div class="relative w-40 h-40">
                            <!-- SVG Speedometer Dial -->
                            <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" stroke="#3d3b5c" stroke-width="8" fill="transparent" />
                                <circle id="gauge-speed" cx="50" cy="50" r="40" stroke="#e32a1e" stroke-width="8" fill="transparent" 
                                        stroke-dasharray="251.2" stroke-dashoffset="60" class="transition-all duration-1000 ease-out" />
                            </svg>
                            <div class="absolute inset-0 flex flex-col items-center justify-center">
                                <span id="gauge-speed-val" class="text-3xl font-serif font-bold text-brandLight">330</span>
                                <span class="text-[10px] uppercase text-brandLight/50">km/h</span>
                            </div>
                        </div>
                    </div>

                    <!-- Gauge 2: Acceleration Rate -->
                    <div class="bg-brandSlate/30 p-8 rounded-2xl border border-brandLight/5 flex flex-col items-center text-center">
                        <span class="text-xs uppercase tracking-widest text-brandLight/60 mb-4">0-100 km/h Launch Time</span>
                        <div class="relative w-40 h-40">
                            <!-- SVG Acceleration Dial -->
                            <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" stroke="#3d3b5c" stroke-width="8" fill="transparent" />
                                <circle id="gauge-acc" cx="50" cy="50" r="40" stroke="#fbc02d" stroke-width="8" fill="transparent" 
                                        stroke-dasharray="251.2" stroke-dashoffset="190" class="transition-all duration-1000 ease-out" />
                            </svg>
                            <div class="absolute inset-0 flex flex-col items-center justify-center">
                                <span id="gauge-acc-val" class="text-3xl font-serif font-bold text-brandLight">2.8</span>
                                <span class="text-[10px] uppercase text-brandLight/50">Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>


    <!-- ENGINEERING & CRAFTSMANSHIP DEEP DIVE SECTION -->
    <section id="technology" class="py-24 bg-brandLight text-brandSlate relative">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            
            <div class="max-w-3xl mb-16">
                <span class="text-xs uppercase tracking-[0.3em] text-brandSlate/60 font-bold">Technological Superiority</span>
                <h2 class="font-serif text-5xl md:text-7xl font-normal mt-2 text-brandSlate">Mastering Power & Wind Resistance</h2>
                <p class="text-sm text-brandSlate/70 leading-relaxed mt-4 max-w-xl">
                    Every element is engineered with premium athletic materials to maximize contact force, reduce friction, and generate ultimate control through cutting-edge technology.
                </p>
            </div>

            <!-- Intersecting Feature Grid Panels -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <!-- Card A: Porsche Active Suspension Management (PASM) -->
                <div class="group bg-brandCreamDark/50 p-8 md:p-12 rounded-2xl border border-brandSlate/10 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl">
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-brandSlate text-brandLight flex items-center justify-center mb-8">
                            <i data-lucide="sliders" class="w-6 h-6"></i>
                        </div>
                        <h3 class="font-serif text-3xl font-normal text-brandSlate mb-4">Porsche Active Suspension Management</h3>
                        <p class="text-xs text-brandSlate/80 leading-relaxed font-normal mb-8">
                            An electronic active damping system that continuously controls damping force on each wheel based on road conditions and driving style. Lowers body by 10mm for track situations.
                        </p>
                    </div>
                    <!-- Technical interactive blueprint -->
                    <div class="border-t border-brandSlate/10 pt-6 flex items-center justify-between">
                        <span class="text-[10px] uppercase tracking-wider font-bold text-brandSlate/50">Dynamic Response System</span>
                        <span class="text-xs font-semibold text-brandRed group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                            Active PASM Ready <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </span>
                    </div>
                </div>

                <!-- Card B: Adaptive Aerodynamics (PAA) -->
                <div class="group bg-brandCreamDark/50 p-8 md:p-12 rounded-2xl border border-brandSlate/10 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl">
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-brandSlate text-brandLight flex items-center justify-center mb-8">
                            <i data-lucide="wind" class="w-6 h-6"></i>
                        </div>
                        <h3 class="font-serif text-3xl font-normal text-brandSlate mb-4">Active Aerodynamic Balance</h3>
                        <p class="text-xs text-brandSlate/80 leading-relaxed font-normal mb-8">
                            Includes a multi-stage extendable front spoiler and adaptive rear wing. PAA adjusts automatically to deliver massive downforce or extreme fuel efficiency instantly.
                        </p>
                    </div>
                    <!-- Technical interactive blueprint -->
                    <div class="border-t border-brandSlate/10 pt-6 flex items-center justify-between">
                        <span class="text-[10px] uppercase tracking-wider font-bold text-brandSlate/50">Drag Coefficient: 0.33</span>
                        <span class="text-xs font-semibold text-brandRed group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                            Aero Spoiler Dynamic <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </span>
                    </div>
                </div>
            </div>

            <!-- Detailed interactive chassis explorer -->
            <div id="engineering" class="mt-16 bg-brandCreamDark/30 rounded-3xl p-8 md:p-12 border border-brandSlate/10">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div class="lg:col-span-5">
                        <span class="text-xs uppercase tracking-widest text-brandSlate/50 font-bold">Blueprint System</span>
                        <h3 class="font-serif text-3xl md:text-4xl mt-1 mb-4">Rear Axle Steering System</h3>
                        <p class="text-xs text-brandSlate/70 leading-relaxed">
                            Under 50 km/h, the system steers the rear wheels in the opposite direction to the front wheels to reduce the turning circle. Over 80 km/h, it steers them in the same direction to maximize stability.
                        </p>
                        <div class="mt-6 space-y-3">
                            <div class="flex items-center gap-3">
                                <i data-lucide="check" class="w-4 h-4 text-brandRed"></i>
                                <span class="text-xs font-semibold">Tighter turn radius at low speeds</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <i data-lucide="check" class="w-4 h-4 text-brandRed"></i>
                                <span class="text-xs font-semibold">Incredible stability during fast lane changes</span>
                            </div>
                        </div>
                    </div>
                    <!-- Responsive Interactive Canvas Diagram simulating Rear Axle Steering -->
                    <div class="lg:col-span-7 flex flex-col items-center bg-white/60 p-6 rounded-2xl border border-brandSlate/5 shadow-inner">
                        <span class="text-[10px] uppercase tracking-widest text-brandSlate/50 mb-3 font-bold">Interactive Axle Simulation</span>
                        <div class="flex items-center gap-4 mb-4">
                            <button onclick="simulateSteer('low')" class="px-4 py-1.5 rounded-full text-[10px] tracking-wider uppercase border border-brandSlate/20 hover:bg-brandSlate hover:text-white transition-all duration-300" id="steer-low-btn">Low Speed</button>
                            <button onclick="simulateSteer('high')" class="px-4 py-1.5 rounded-full text-[10px] tracking-wider uppercase border border-brandSlate/20 hover:bg-brandSlate hover:text-white transition-all duration-300" id="steer-high-btn">High Speed</button>
                        </div>
                        <svg class="w-full max-w-[400px] h-[180px] text-brandSlate" viewBox="0 0 200 100">
                            <!-- Car frame boundary -->
                            <rect x="30" y="20" width="140" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2"/>
                            
                            <!-- Front Wheels (Fixed slight turn) -->
                            <g transform="translate(50, 20) rotate(15)">
                                <rect x="-8" y="-12" width="16" height="24" rx="2" fill="currentColor"/>
                            </g>
                            <g transform="translate(50, 80) rotate(15)">
                                <rect x="-8" y="-12" width="16" height="24" rx="2" fill="currentColor"/>
                            </g>

                            <!-- Rear Wheels (Dynamic angle based on JS state) -->
                            <g id="rear-wheel-top" transform="translate(150, 20) rotate(-15)">
                                <rect x="-8" y="-12" width="16" height="24" rx="2" fill="#e32a1e"/>
                            </g>
                            <g id="rear-wheel-bottom" transform="translate(150, 80) rotate(-15)">
                                <rect x="-8" y="-12" width="16" height="24" rx="2" fill="#e32a1e"/>
                            </g>

                            <!-- Labels -->
                            <text x="50" y="55" font-family="Plus Jakarta Sans" font-size="8" text-anchor="middle" fill="currentColor" font-weight="bold">Front Axle</text>
                            <text x="150" y="55" font-family="Plus Jakarta Sans" font-size="8" text-anchor="middle" fill="#e32a1e" font-weight="bold" id="steer-text">Opposite Direction</text>
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    </section>


    <!-- BRAND HISTORICAL TIMELINE SHOWCASE -->
    <section id="experience" class="py-24 bg-brandDark text-brandLight relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-xs uppercase tracking-[0.3em] text-brandLight/60">An Unending Legacy</span>
                <h2 class="font-serif text-4xl md:text-6xl font-normal mt-2">Born on the Race Track</h2>
            </div>

            <!-- Intersecting Timeline Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <!-- Year 1 -->
                <div class="bg-brandSlate/40 p-8 rounded-2xl border border-brandLight/10 flex flex-col justify-between hover:bg-brandSlate/60 transition-colors duration-300">
                    <div>
                        <span class="font-serif text-5xl italic text-brandLight/30 font-light">1963</span>
                        <h4 class="font-serif text-2xl font-semibold mt-4 mb-2">The Birth of an Icon</h4>
                        <p class="text-xs text-brandLight/70 leading-relaxed font-normal">
                            First presented at the Frankfurt Motor Show as the Type 901, starting an legendary era of rear-engine sports cars.
                        </p>
                    </div>
                    <div class="mt-8 border-t border-brandLight/10 pt-4 flex items-center justify-between text-xs text-brandLight/40">
                        <span>Heritage Edition</span>
                        <i data-lucide="award" class="w-4 h-4 text-brandRed"></i>
                    </div>
                </div>

                <!-- Year 2 -->
                <div class="bg-brandSlate/40 p-8 rounded-2xl border border-brandLight/10 flex flex-col justify-between hover:bg-brandSlate/60 transition-colors duration-300">
                    <div>
                        <span class="font-serif text-5xl italic text-brandLight/30 font-light">1974</span>
                        <h4 class="font-serif text-2xl font-semibold mt-4 mb-2">The Turbo Revolution</h4>
                        <p class="text-xs text-brandLight/70 leading-relaxed font-normal">
                            Porsche introduces turbocharging technology from motorsport into production, creating a benchmark of supreme performance.
                        </p>
                    </div>
                    <div class="mt-8 border-t border-brandLight/10 pt-4 flex items-center justify-between text-xs text-brandLight/40">
                        <span>Le Mans Legacy</span>
                        <i data-lucide="zap" class="w-4 h-4 text-brandYellow"></i>
                    </div>
                </div>

                <!-- Year 3 -->
                <div class="bg-brandSlate/40 p-8 rounded-2xl border border-brandLight/10 flex flex-col justify-between hover:bg-brandSlate/60 transition-colors duration-300">
                    <div>
                        <span class="font-serif text-5xl italic text-brandLight/30 font-light">2026</span>
                        <h4 class="font-serif text-2xl font-semibold mt-4 mb-2">The Ultimate Turbo S</h4>
                        <p class="text-xs text-brandLight/70 leading-relaxed font-normal">
                            Unites highly advanced computer physics, high-performance hybrid setups, and classic aesthetic proportions.
                        </p>
                    </div>
                    <div class="mt-8 border-t border-brandLight/10 pt-4 flex items-center justify-between text-xs text-brandLight/40">
                        <span>Digital Age Masterpiece</span>
                        <i data-lucide="shield-check" class="w-4 h-4 text-brandBlue"></i>
                    </div>
                </div>
            </div>

        </div>
    </section>


    <!-- THE CONFIGURATOR & ORDER SUMMARY SHEET -->
    <section id="configurator" class="py-24 bg-brandLight text-brandSlate relative">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            
            <div class="max-w-3xl mb-16">
                <span class="text-xs uppercase tracking-[0.3em] text-brandSlate/60 font-bold">Personal Commission</span>
                <h2 class="font-serif text-5xl md:text-7xl font-normal mt-2">Configure Your Dream Build</h2>
                <p class="text-sm text-brandSlate/70 leading-relaxed mt-4">
                    Tailor your 911 Turbo S Cabriolet spec sheet precisely. All choices update the live invoice below instantly.
                </p>
            </div>

            <!-- Configuration Workbench -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <!-- Setup inputs -->
                <div class="lg:col-span-7 space-y-8">
                    <!-- Option 1: Paint Configuration -->
                    <div class="bg-brandCreamDark/40 p-8 rounded-2xl border border-brandSlate/10">
                        <h3 class="font-serif text-2xl font-semibold mb-4 text-brandSlate">1. Bespoke Paintwork</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <label class="flex items-center gap-4 p-4 rounded-xl border border-brandSlate/20 bg-white/60 cursor-pointer hover:bg-white transition-all">
                                <input type="radio" name="paint-opt" value="0" checked onclick="updatePricing(0, 'Guards Red')" class="accent-brandRed">
                                <div class="flex flex-col">
                                    <span class="text-xs font-bold text-brandSlate">Guards Red</span>
                                    <span class="text-[10px] text-brandSlate/60">Standard Paint</span>
                                </div>
                            </label>
                            <label class="flex items-center gap-4 p-4 rounded-xl border border-brandSlate/20 bg-white/60 cursor-pointer hover:bg-white transition-all">
                                <input type="radio" name="paint-opt" value="3120" onclick="updatePricing(3120, 'Miami Blue Metallic')" class="accent-brandRed">
                                <div class="flex flex-col">
                                    <span class="text-xs font-bold text-brandSlate">Miami Blue Metallic</span>
                                    <span class="text-[10px] text-brandSlate/60">+$3,120 Premium</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <!-- Option 2: Wheel Systems -->
                    <div class="bg-brandCreamDark/40 p-8 rounded-2xl border border-brandSlate/10">
                        <h3 class="font-serif text-2xl font-semibold mb-4 text-brandSlate">2. Performance Wheels</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <label class="flex items-center gap-4 p-4 rounded-xl border border-brandSlate/20 bg-white/60 cursor-pointer hover:bg-white transition-all">
                                <input type="radio" name="wheel-opt" value="0" checked onclick="updatePricing(0, 'Turbo S Design Wheels')" class="accent-brandRed">
                                <div class="flex flex-col">
                                    <span class="text-xs font-bold text-brandSlate">20/21" Turbo S Wheels</span>
                                    <span class="text-[10px] text-brandSlate/60">Standard Issue</span>
                                </div>
                            </label>
                            <label class="flex items-center gap-4 p-4 rounded-xl border border-brandSlate/20 bg-white/60 cursor-pointer hover:bg-white transition-all">
                                <input type="radio" name="wheel-opt" value="4890" onclick="updatePricing(4890, 'Exclusive Manufaktur Wheels')" class="accent-brandRed">
                                <div class="flex flex-col">
                                    <span class="text-xs font-bold text-brandSlate">Exclusive Manufaktur</span>
                                    <span class="text-[10px] text-brandSlate/60">+$4,890 High Gloss Black</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <!-- Option 3: Sound and Exhaust options -->
                    <div class="bg-brandCreamDark/40 p-8 rounded-2xl border border-brandSlate/10">
                        <h3 class="font-serif text-2xl font-semibold mb-4 text-brandSlate">3. Exhaust & Acoustics</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <label class="flex items-center gap-4 p-4 rounded-xl border border-brandSlate/20 bg-white/60 cursor-pointer hover:bg-white transition-all">
                                <input type="radio" name="exhaust-opt" value="0" checked onclick="updatePricing(0, 'Standard Sports Exhaust')" class="accent-brandRed">
                                <div class="flex flex-col">
                                    <span class="text-xs font-bold text-brandSlate">Standard Active Exhaust</span>
                                    <span class="text-[10px] text-brandSlate/60">Included Spec</span>
                                </div>
                            </label>
                            <label class="flex items-center gap-4 p-4 rounded-xl border border-brandSlate/20 bg-white/60 cursor-pointer hover:bg-white transition-all">
                                <input type="radio" name="exhaust-opt" value="3490" onclick="updatePricing(3490, 'Titanium Sport Exhaust System')" class="accent-brandRed">
                                <div class="flex flex-col">
                                    <span class="text-xs font-bold text-brandSlate">Titanium Exhaust System</span>
                                    <span class="text-[10px] text-brandSlate/60">+$3,490 Sports System</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Custom invoice receipt -->
                <div class="lg:col-span-5 bg-brandSlate text-brandLight p-8 rounded-3xl border border-brandLight/10 shadow-2xl sticky top-24">
                    <span class="text-[10px] uppercase tracking-widest text-brandLight/50 font-bold block mb-2">Invoice Summary</span>
                    <h3 class="font-serif text-3xl font-medium mb-6">Commission Estimate</h3>

                    <div class="space-y-4 border-b border-brandLight/10 pb-6 text-xs">
                        <div class="flex justify-between">
                            <span class="text-brandLight/60">911 Turbo S Cabriolet Base Spec</span>
                            <span class="font-bold">$230,400</span>
                        </div>
                        <div class="flex justify-between" id="paint-invoice-row">
                            <span class="text-brandLight/60">Selected Paint: <b id="paint-sel">Guards Red</b></span>
                            <span class="font-bold" id="paint-price-display">$0</span>
                        </div>
                        <div class="flex justify-between" id="wheel-invoice-row">
                            <span class="text-brandLight/60">Selected Wheels: <b id="wheel-sel">Turbo S Design</b></span>
                            <span class="font-bold" id="wheel-price-display">$0</span>
                        </div>
                        <div class="flex justify-between" id="exhaust-invoice-row">
                            <span class="text-brandLight/60">Exhaust Tune: <b id="exhaust-sel">Standard Active</b></span>
                            <span class="font-bold" id="exhaust-price-display">$0</span>
                        </div>
                    </div>

                    <!-- Total display -->
                    <div class="pt-6 flex justify-between items-baseline mb-8">
                        <span class="text-xs uppercase tracking-wider text-brandLight/50 font-bold">Total Delivery Concept</span>
                        <span id="invoice-total" class="text-3xl font-serif font-bold text-brandLight">$230,400</span>
                    </div>

                    <button onclick="openReservationModal()" class="w-full bg-brandLight text-brandDark hover:bg-brandRed hover:text-white py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 text-center rounded-xl shadow-lg block">
                        Proceed to Reservation
                    </button>
                    <span class="text-[9px] text-center text-brandLight/40 block mt-4 uppercase tracking-widest">Pricing excludes local dealership custom taxes.</span>
                </div>

            </div>
        </div>
    </section>


    <!-- CUSTOM RESERVATION MODAL (Replaces intrusive alerts) -->
    <div id="reserve-modal" class="fixed inset-0 bg-brandSlate/95 z-50 backdrop-blur-md hidden items-center justify-center p-6">
        <div class="w-full max-w-xl bg-brandLight text-brandSlate p-8 md:p-12 rounded-3xl border border-brandSlate/10 relative shadow-2xl">
            <button onclick="closeReservationModal()" class="absolute top-6 right-6 text-brandSlate/60 hover:text-brandRed">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
            <span class="text-xs uppercase tracking-[0.3em] text-brandSlate/60 font-bold block mb-2">COMMISSION CONFIRMATION</span>
            <h3 class="font-serif text-4xl font-normal mb-6 text-brandSlate">Lock In Your Build Slot</h3>
            
            <form id="reserve-form" onsubmit="submitReservation(event)" class="space-y-4">
                <div>
                    <label class="block text-[10px] uppercase font-bold text-brandSlate/60 mb-2">Legal Name</label>
                    <input type="text" required placeholder="Alexander Porsche" class="w-full bg-brandCreamDark/30 border border-brandSlate/20 rounded-lg px-4 py-3 text-brandSlate focus:outline-none focus:ring-2 focus:ring-brandRed text-sm">
                </div>
                <div>
                    <label class="block text-[10px] uppercase font-bold text-brandSlate/60 mb-2">E-Mail Address</label>
                    <input type="email" required placeholder="alexander@zuffenhausen.com" class="w-full bg-brandCreamDark/30 border border-brandSlate/20 rounded-lg px-4 py-3 text-brandSlate focus:outline-none focus:ring-2 focus:ring-brandRed text-sm">
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[10px] uppercase font-bold text-brandSlate/60 mb-2">Preferred Dealer Zone</label>
                        <select class="w-full bg-brandCreamDark/30 border border-brandSlate/20 rounded-lg px-4 py-3 text-brandSlate focus:outline-none focus:ring-2 focus:ring-brandRed text-sm">
                            <option>West Coast Logistics</option>
                            <option>East Coast Port</option>
                            <option>European Delivery Program</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[10px] uppercase font-bold text-brandSlate/60 mb-2">Total Calculated Deposit</label>
                        <input type="text" id="modal-deposit" readonly class="w-full bg-brandCreamDark/50 border border-brandSlate/20 rounded-lg px-4 py-3 text-brandSlate font-bold text-sm">
                    </div>
                </div>
                <div class="pt-4">
                    <button type="submit" class="w-full bg-brandSlate text-brandLight hover:bg-brandRed hover:text-white py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 text-center rounded-xl shadow-lg">
                        Submit Build Allocation Request
                    </button>
                </div>
            </form>
        </div>
    </div>


    <!-- PREMIUM FOOTER -->
    <footer class="bg-brandSlate text-brandLight/70 border-t border-brandLight/10 py-16 relative">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div>
                    <span class="font-serif text-2xl italic text-brandLight mb-4 block">911 Concept Lab</span>
                    <p class="text-xs text-brandLight/60 leading-relaxed font-normal">
                        Redefining precision athletic transport mechanisms through dynamic dual-tone layouts and legendary chassis balances.
                    </p>
                </div>
                <div>
                    <h5 class="text-xs uppercase tracking-widest text-brandLight font-bold mb-4">Performance Variant Systems</h5>
                    <ul class="space-y-2 text-xs text-brandLight/60">
                        <li><a href="#models" class="hover:text-brandLight">911 Turbo S Cabriolet</a></li>
                        <li><a href="#models" class="hover:text-brandLight">911 Turbo Coupe</a></li>
                        <li><a href="#models" class="hover:text-brandLight">911 Carrera 4S Cabriolet</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-xs uppercase tracking-widest text-brandLight font-bold mb-4">Digital Services Hub</h5>
                    <ul class="space-y-2 text-xs text-brandLight/60">
                        <li><a href="#configurator" class="hover:text-brandLight">Bespoke Build Configurator</a></li>
                        <li><a href="#technology" class="hover:text-brandLight">Active Traction (PTM)</a></li>
                        <li><a href="#engineering" class="hover:text-brandLight">Chassis Blueprints</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-xs uppercase tracking-widest text-brandLight font-bold mb-4">Zuffenhausen HQ</h5>
                    <p class="text-xs text-brandLight/60 leading-relaxed font-normal">
                        Porscheplatz 1,<br>70435 Stuttgart-Zuffenhausen,<br>Germany.
                    </p>
                </div>
            </div>

            <div class="border-t border-brandLight/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span class="text-[10px] uppercase tracking-widest text-brandLight/40">© 2026 Porsche Interactive Platform. All designs match the classic dual-tone layout framework.</span>
                <div class="flex gap-6 text-[10px] uppercase tracking-widest text-brandLight/40">
                    <a href="#" class="hover:text-brandLight">Legal System</a>
                    <a href="#" class="hover:text-brandLight">Privacy Codex</a>
                </div>
            </div>
        </div>
    </footer>


    <!-- JAVASCRIPT LOGIC ENGINE -->
    <script>
        // Initialize Lucide Icons
        lucide.createIcons();

        // Audio System State Setup via Web Audio API (Synthesizing a realistic high-end sports engine hum)
        let audioContext = null;
        let engineOscillator = null;
        let engineFilter = null;
        let isEngineRunning = false;

        function toggleEngineSound() {
            if (!isEngineRunning) {
                try {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    
                    // Main engine rumble oscillator
                    engineOscillator = audioContext.createOscillator();
                    engineOscillator.type = 'sawtooth';
                    engineOscillator.frequency.value = 45; // Deep growling engine note

                    // Modulating rumble oscillator for the piston feel
                    let pistonModulator = audioContext.createOscillator();
                    pistonModulator.type = 'sine';
                    pistonModulator.frequency.value = 8; // Piston firing cycle
                    let modulatorGain = audioContext.createGain();
                    modulatorGain.gain.value = 15; // Tremolo intensity

                    // Lowpass filter to muffle and give luxury depth
                    engineFilter = audioContext.createBiquadFilter();
                    engineFilter.type = 'lowpass';
                    engineFilter.frequency.value = 120; // Cuts harsh buzzes

                    // Connect modulation chain
                    pistonModulator.connect(modulatorGain);
                    modulatorGain.connect(engineOscillator.frequency);
                    
                    // Main gain volume
                    let masterGain = audioContext.createGain();
                    masterGain.gain.value = 0.35; // Safe comfortable level

                    // Connect everything
                    engineOscillator.connect(engineFilter);
                    engineFilter.connect(masterGain);
                    masterGain.connect(audioContext.destination);

                    // Start sounds
                    engineOscillator.start();
                    pistonModulator.start();

                    isEngineRunning = true;
                    document.getElementById('engine-status').innerText = "Engine: Purring (Active)";
                    document.getElementById('audio-toggle').classList.add('bg-brandRed', 'text-white');
                    document.getElementById('audio-icon').setAttribute('data-lucide', 'volume-2');
                    lucide.createIcons();

                    showToast('Twin-Turbo Activated', 'Web Audio synthesis generated the 3.8L engine purr beautifully. Hover/Click elements to feel the power.');
                } catch(e) {
                    showToast('Audio Error', 'Could not initialize Audio Synthesis engine.');
                }
            } else {
                if (engineOscillator) {
                    engineOscillator.stop();
                    engineOscillator.disconnect();
                }
                isEngineRunning = false;
                document.getElementById('engine-status').innerText = "Engine: Switched Off";
                document.getElementById('audio-toggle').classList.remove('bg-brandRed', 'text-white');
                document.getElementById('audio-icon').setAttribute('data-lucide', 'power');
                lucide.createIcons();
            }
        }

        // Handle Hotspot Click - Dynamically swaps content panel on right hand side
        const hotspotDetails = {
            aero: {
                title: "Active Aerodynamics (PAA)",
                desc: "An adaptive multi-stage rear spoiler elevates or angles down dynamically to match downforce demands. Provides extreme stabilization at speeds exceeding 250 km/h.",
                graphic: `<rect x="30" y="40" width="140" height="20" rx="3" fill="#e32a1e" opacity="0.3"/>
                          <line x1="20" y1="50" x2="180" y2="50" stroke="#e32a1e" stroke-width="4"/>
                          <path d="M50 80 Q100 60 150 80" stroke="currentColor" stroke-width="2" stroke-dasharray="4"/>
                          <text x="100" y="110" font-family="Cormorant Garamond" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">Active Track Wing Mode</text>`
            },
            cockpit: {
                title: "Bespoke Cockpit & Leather Trim",
                desc: "Dual-finished carbon weave paired with double-stitch Tan Leather. Includes mechanical toggle switches, customized dynamic steering adjustments, and classic chronograph clock layout.",
                graphic: `<rect x="50" y="30" width="100" height="80" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
                          <circle cx="100" cy="50" r="15" stroke="currentColor" stroke-width="1.5" fill="none"/>
                          <line x1="100" y1="50" x2="105" y2="42" stroke="#e32a1e" stroke-width="2"/>
                          <text x="100" y="95" font-family="Plus Jakarta Sans" font-size="10" fill="currentColor" text-anchor="middle">Chronograph Dial</text>`
            },
            chassis: {
                title: "Porsche Traction Management (PTM)",
                desc: "Active all-wheel drive coordinates distribution of drive force perfectly between rear and front axles. Features an electronically controlled multi-plate clutch for instant torque adjustment.",
                graphic: `<line x1="100" y1="40" x2="100" y2="110" stroke="currentColor" stroke-width="2" stroke-dasharray="4"/>
                          <line x1="40" y1="40" x2="160" y2="40" stroke="currentColor" stroke-width="4"/>
                          <rect x="25" y="25" width="15" height="30" rx="3" fill="currentColor"/>
                          <rect x="160" y="25" width="15" height="30" rx="3" fill="currentColor"/>
                          <circle cx="100" cy="75" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
                          <circle cx="100" cy="75" r="3" fill="currentColor"/>`
            },
            engine: {
                title: "3.8L VTG Twin-Turbo Boxer",
                desc: "Produces incredible 650 horsepower. Symmetrically positioned turbos with Variable Turbine Geometry deliver responsive torque delivery and peak performance across the entire RPM range.",
                graphic: `<rect x="40" y="30" width="120" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/>
                          <path d="M60 50 L140 50 M60 70 L140 70 M60 90 L140 90" stroke="currentColor" stroke-width="2" stroke-dasharray="8"/>
                          <circle cx="100" cy="70" r="18" fill="none" stroke="#e32a1e" stroke-width="2" class="animate-pulse"/>`
            }
        };

        function activateHotspot(key) {
            const data = hotspotDetails[key];
            if (!data) return;

            // Apply fade transition effect
            const panel = document.getElementById('dynamic-detail-panel');
            panel.classList.add('opacity-0', 'translate-y-2');

            setTimeout(() => {
                document.getElementById('detail-title').innerText = data.title;
                document.getElementById('detail-desc').innerText = data.desc;
                document.getElementById('tech-graphic').innerHTML = data.graphic;
                
                panel.classList.remove('opacity-0', 'translate-y-2');
            }, 300);

            // Synthesize short high-frequency confirmation tone for futuristic feel
            if (isEngineRunning && audioContext) {
                let note = audioContext.createOscillator();
                note.frequency.value = 800; // Crisp feedback chirp
                let noteGain = audioContext.createGain();
                noteGain.gain.value = 0.05;
                note.connect(noteGain);
                noteGain.connect(audioContext.destination);
                note.start();
                note.stop(audioContext.currentTime + 0.08);
            }
        }

        // Paint Color swatches selector - changes colors dynamically on the top-down SVG car
        function changeCarColor(hexCode, name) {
            document.getElementById('car-paint').setAttribute('fill', hexCode);
            document.getElementById('paint-label').innerText = name;
            document.getElementById('paint-sel').innerText = name;
            
            // Highlight visual effect on labels
            showToast('Paint Selection updated', `The 911 convertible shell transitioned into classic ${name}.`);
        }

        // Active Fleet comparison variant selector logic
        const variants = {
            carrera: {
                title: "Carrera 4S Cabriolet",
                subtitle: "Athletic & Versatile Performance",
                desc: "Powered by a twin-turbocharged 3.0-liter flat-six delivering 443 hp. Features standard 8-speed Porsche Doppelkupplung (PDK).",
                price: "$138,200",
                speed: 304,
                acc: 3.6,
                dashSpeed: 230,
                dashAcc: 140
            },
            turbo: {
                title: "911 Turbo Cabriolet",
                subtitle: "The Signature Benchmark",
                desc: "Features 572 hp with 3.8-liter boxer engine configuration. Perfect balance of extreme power and road trip suitability.",
                price: "$195,900",
                speed: 320,
                acc: 2.9,
                dashSpeed: 190,
                dashAcc: 170
            },
            turbos: {
                title: "911 Turbo S Cabriolet",
                subtitle: "Ultimate Benchmark",
                desc: "Equipped with a 3.8-liter twin-turbo six-cylinder boxer engine. Unites incredible performance with legendary dynamic chassis control systems.",
                price: "$230,400",
                speed: 330,
                acc: 2.8,
                dashSpeed: 60,
                dashAcc: 190
            }
        };

        function switchVariant(variantKey) {
            const data = variants[variantKey];
            if (!data) return;

            // Reset navigation active styles
            ['carrera', 'turbo', 'turbos'].forEach(v => {
                const btn = document.getElementById(`btn-${v}`);
                btn.className = "px-6 py-2 rounded-full border border-brandLight/20 text-xs tracking-widest uppercase hover:bg-brandLight hover:text-brandDark transition-all duration-300";
            });

            // Set current active button styles
            const activeBtn = document.getElementById(`btn-${variantKey}`);
            if (variantKey === 'turbos') {
                activeBtn.className = "px-6 py-2 rounded-full bg-brandLight text-brandDark text-xs tracking-widest uppercase hover:opacity-90 transition-all duration-300 font-bold";
            } else {
                activeBtn.className = "px-6 py-2 rounded-full bg-brandSlate text-brandLight border border-brandLight/20 text-xs tracking-widest uppercase hover:bg-brandLight hover:text-brandDark transition-all duration-300 font-bold";
            }

            // Update details
            document.getElementById('variant-title').innerText = data.title;
            document.getElementById('variant-subtitle').innerText = data.subtitle;
            document.getElementById('variant-desc').innerText = data.desc;
            document.getElementById('variant-price').innerText = data.price;

            // Animate Gauges using SVG stroke-dashoffset formulas
            document.getElementById('gauge-speed').setAttribute('stroke-dashoffset', data.dashSpeed);
            document.getElementById('gauge-speed-val').innerText = data.speed;

            document.getElementById('gauge-acc').setAttribute('stroke-dashoffset', data.dashAcc);
            document.getElementById('gauge-acc-val').innerText = data.acc;

            showToast('Variant Loaded', `Performance spec dials calibrated for ${data.title}.`);
        }

        // Steer simulation logic for low/high speed rear axle steering
        function simulateSteer(speedMode) {
            const lowBtn = document.getElementById('steer-low-btn');
            const highBtn = document.getElementById('steer-high-btn');
            const steerText = document.getElementById('steer-text');
            const topWheel = document.getElementById('rear-wheel-top');
            const bottomWheel = document.getElementById('rear-wheel-bottom');

            if (speedMode === 'low') {
                lowBtn.className = "px-4 py-1.5 rounded-full text-[10px] tracking-wider uppercase bg-brandSlate text-white font-bold";
                highBtn.className = "px-4 py-1.5 rounded-full text-[10px] tracking-wider uppercase border border-brandSlate/20 hover:bg-brandSlate hover:text-white transition-all duration-300";
                steerText.innerText = "Opposite Direction";
                steerText.setAttribute('fill', '#e32a1e');
                
                // Opposite steer rotation matrix applied to rear wheels SVG
                topWheel.setAttribute('transform', 'translate(150, 20) rotate(-15)');
                bottomWheel.setAttribute('transform', 'translate(150, 80) rotate(-15)');
            } else {
                highBtn.className = "px-4 py-1.5 rounded-full text-[10px] tracking-wider uppercase bg-brandSlate text-white font-bold";
                lowBtn.className = "px-4 py-1.5 rounded-full text-[10px] tracking-wider uppercase border border-brandSlate/20 hover:bg-brandSlate hover:text-white transition-all duration-300";
                steerText.innerText = "Same Direction";
                steerText.setAttribute('fill', '#00bcd4');
                
                // Same steer rotation matrix applied to rear wheels SVG
                topWheel.setAttribute('transform', 'translate(150, 20) rotate(15)');
                bottomWheel.setAttribute('transform', 'translate(150, 80) rotate(15)');
            }
        }

        // LIVE PRICING CALCULATOR LOGIC
        let configPrices = {
            base: 230400,
            paint: 0,
            wheel: 0,
            exhaust: 0
        };

        function updatePricing(price, selectionName) {
            if (selectionName.includes('Red') || selectionName.includes('Blue')) {
                configPrices.paint = price;
                document.getElementById('paint-sel').innerText = selectionName;
                document.getElementById('paint-price-display').innerText = price === 0 ? "Included" : `+$${price.toLocaleString()}`;
            } else if (selectionName.includes('Wheels')) {
                configPrices.wheel = price;
                document.getElementById('wheel-sel').innerText = selectionName;
                document.getElementById('wheel-price-display').innerText = price === 0 ? "Included" : `+$${price.toLocaleString()}`;
            } else if (selectionName.includes('Exhaust')) {
                configPrices.exhaust = price;
                document.getElementById('exhaust-sel').innerText = selectionName;
                document.getElementById('exhaust-price-display').innerText = price === 0 ? "Included" : `+$${price.toLocaleString()}`;
            }

            const total = configPrices.base + configPrices.paint + configPrices.wheel + configPrices.exhaust;
            document.getElementById('invoice-total').innerText = `$${total.toLocaleString()}`;
            document.getElementById('modal-deposit').value = `$${(total * 0.1).toLocaleString()} (10% Deposit)`;
        }

        // Reservation dialog controller
        function openReservationModal() {
            document.getElementById('reserve-modal').style.display = 'flex';
        }

        function closeReservationModal() {
            document.getElementById('reserve-modal').style.display = 'none';
        }

        function submitReservation(event) {
            event.preventDefault();
            closeReservationModal();
            showToast('Allocation Secured', 'Your reservation proposal was successfully submitted to Stuttgart headquarters. A concierge will reach out.');
        }

        // Mobile Menu Drawer Control
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('pointer-events-none')) {
                menu.classList.remove('pointer-events-none', 'opacity-0');
            } else {
                menu.classList.add('pointer-events-none', 'opacity-0');
            }
        }

        // Search Drawer Control
        function showSearch() {
            document.getElementById('search-overlay').style.display = 'flex';
        }

        function hideSearch() {
            document.getElementById('search-overlay').style.display = 'none';
        }

        function executeSearch() {
            hideSearch();
            showToast('Search Completed', 'Matching results pulled from Porsche heritage databases successfully.');
        }

        // Elegant Toast notification implementation (replaces ugly window alert)
        function showToast(title, desc) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = desc;
            
            toast.classList.remove('translate-y-[-100px]', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');

            setTimeout(() => {
                dismissToast();
            }, 5000);
        }

        function dismissToast() {
            const toast = document.getElementById('toast');
            toast.classList.remove('translate-y-0', 'opacity-100');
            toast.classList.add('translate-y-[-100px]', 'opacity-0');
        }
    </script>
</body>
</html>
7
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digitally — Discover, Collect & Sell Rare NFTs</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Plus Jakarta Sans & Space Grotesk -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        display: ['"Space Grotesk"', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            dark: '#131b26',
                            muted: '#4a5568',
                            mint: '#b9f2e5',
                            glow: '#dcfce7',
                            lightBg: '#e9f5f3',
                        }
                    }
                }
            }
        }
    </script>
    
    <style>
        /* Exact color language, soft grain overlay, and atmosphere from the reference image */
        body {
            background: radial-gradient(circle at 10% 20%, rgba(220, 245, 241, 0.7) 0%, rgba(225, 241, 245, 0.7) 40%, rgba(239, 246, 245, 0.9) 100%);
            font-family: 'Plus Jakarta Sans', sans-serif;
            color: #131b26;
            overflow-x: hidden;
            position: relative;
        }

        /* Subtle textured grain to match the premium tactile feel of the inspiration image */
        .grain-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 99;
            opacity: 0.04;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3 Trick %3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* Floating elements animations */
        @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes orbit {
            0% { transform: rotate(0deg) translateX(15px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(15px) rotate(-360deg); }
        }
        @keyframes glow-pulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.1); }
        }

        .animate-float {
            animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-orbit {
            animation: orbit 12s linear infinite;
        }

        .glow-sphere {
            filter: blur(80px);
            animation: glow-pulse 6s ease-in-out infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: rgba(225, 241, 245, 0.5);
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }

        /* Glassmorphism utility */
        .glass-card {
            background: rgba(255, 255, 255, 0.45);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.6);
        }

        .glass-nav {
            background: rgba(239, 246, 245, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        }
    </style>
</head>
<body class="min-h-screen selection:bg-brand-mint selection:text-brand-dark">

    <!-- Texture Grain Overlay -->
    <div class="grain-overlay"></div>

    <!-- Soft Ambient Light Glows -->
    <div class="absolute top-[10%] left-[20%] w-[350px] h-[350px] bg-emerald-100 rounded-full glow-sphere -z-10 pointer-events-none"></div>
    <div class="absolute top-[40%] right-[10%] w-[450px] h-[450px] bg-sky-100 rounded-full glow-sphere -z-10 pointer-events-none"></div>
    <div class="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-teal-50 rounded-full glow-sphere -z-10 pointer-events-none"></div>

    <!-- MAIN NAVBAR -->
    <header class="sticky top-0 w-full z-50 glass-nav transition-all duration-300">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <!-- Brand Logo -->
            <a href="#" class="flex items-center space-x-2 group">
                <span class="font-display font-extrabold text-2xl tracking-tight text-brand-dark transition-colors duration-300 group-hover:text-emerald-700">
                    Digitally
                </span>
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            </a>

            <!-- Navigation Links -->
            <nav class="hidden md:flex items-center space-x-8 text-sm font-semibold text-brand-dark/80">
                <a href="#marketplace" class="hover:text-brand-dark transition-colors duration-200 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-dark after:transition-all hover:after:w-full">Marketplace</a>
                <a href="#simulator" class="hover:text-brand-dark transition-colors duration-200 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-dark after:transition-all hover:after:w-full">Instant Mint</a>
                <a href="#discover" class="hover:text-brand-dark transition-colors duration-200 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-dark after:transition-all hover:after:w-full">Creators</a>
                <a href="#faq" class="hover:text-brand-dark transition-colors duration-200 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-dark after:transition-all hover:after:w-full">FAQ</a>
            </nav>

            <!-- Action CTAs -->
            <div class="flex items-center space-x-4">
                <button onclick="toggleWalletModal()" class="text-sm font-bold text-brand-dark hover:opacity-80 transition-opacity hidden sm:inline-block">
                    Sign Up
                </button>
                <span class="text-gray-300 hidden sm:inline-block">|</span>
                <button onclick="toggleWalletModal()" id="connect-wallet-btn" class="px-6 py-2.5 bg-brand-dark hover:bg-brand-dark/95 text-white font-bold text-sm rounded-full shadow-lg shadow-brand-dark/10 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                    Connect Wallet
                </button>
            </div>
        </div>
    </header>

    <!-- HERO SECTION -->
    <main class="max-w-7xl mx-auto px-6 pt-8 pb-20 relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh] relative">
            
            <!-- Left Info Component (Responsive Column) -->
            <div class="lg:col-span-3 order-2 lg:order-1 flex flex-col justify-center space-y-8 z-20">
                <div class="space-y-4">
                    <p class="text-xs font-bold tracking-widest text-brand-dark/50 uppercase">
                        // PLATFORM PRINCIPLE
                    </p>
                    <p class="text-brand-dark/85 text-base leading-relaxed font-medium">
                        The first NFT market place that enables creators to choose and embed smart licenses when they mint and trade digital assets.
                    </p>
                </div>

                <!-- Custom Circular Button matching reference image -->
                <a href="#marketplace" class="group flex items-center space-x-4 w-fit">
                    <span class="font-bold text-brand-dark text-base tracking-wide group-hover:underline">
                        Discover Now
                    </span>
                    <div class="w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-dark group-hover:text-white group-hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </a>
            </div>

            <!-- Central Visual Showcase (Responsive Centerpiece) -->
            <div class="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center justify-center relative select-none h-[420px] sm:h-[550px]">
                
                <!-- Massive Background Display Typography -->
                <div class="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
                    <div class="text-center font-display leading-none select-none tracking-tight">
                        <!-- "RARE" in styled tracking text -->
                        <span class="block text-2xl sm:text-4xl font-light tracking-[0.4em] text-brand-dark opacity-90 uppercase mb-2">
                            RARE
                        </span>
                        <!-- "NFT" in massive iconic display font (behind the character) -->
                        <span class="block text-[110px] sm:text-[180px] md:text-[230px] font-extrabold tracking-tighter text-brand-dark leading-none">
                            NFT
                        </span>
                    </div>
                </div>

                <!-- Circular Glowing Halos/Orbits (matching reference design style) -->
                <div class="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full border border-brand-dark/5 flex items-center justify-center animate-orbit">
                    <div class="absolute top-2 left-10 w-4 h-4 rounded-full bg-emerald-300 shadow-md"></div>
                </div>
                <div class="absolute w-[230px] h-[230px] sm:w-[350px] sm:h-[350px] rounded-full border-2 border-dashed border-emerald-500/10 animate-float"></div>
                <div class="absolute w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] rounded-full bg-white/20 backdrop-blur-md border border-white/60 shadow-inner"></div>

                <!-- Custom Vector Character (The Legendary White Parka Ape from the inspiration) -->
                <div class="absolute bottom-0 w-[240px] sm:w-[360px] h-[240px] sm:h-[360px] z-10 animate-float">
                    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full drop-shadow-[0_25px_35px_rgba(19,27,38,0.15)]">
                        <!-- Hood Backing -->
                        <path d="M100 240 C100 120, 300 120, 300 240 C300 320, 270 350, 200 350 C130 350, 100 320, 100 240 Z" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="4"/>
                        <!-- Fluffy Fur Ring of Hood -->
                        <path d="M90 240 C90 100, 310 100, 310 240 C310 330, 280 370, 200 370 C120 370, 90 330, 90 240 Z" fill="none" stroke="#FFFFFF" stroke-width="20" stroke-linecap="round"/>
                        <path d="M90 240 C90 100, 310 100, 310 240 C310 330, 280 370, 200 370 C120 370, 90 330, 90 240 Z" fill="none" stroke="#E2E8F0" stroke-width="8" stroke-dasharray="12 8" stroke-linecap="round"/>
                        
                        <!-- Inside Hood Shadow -->
                        <path d="M120 240 C120 140, 280 140, 280 240 C280 310, 260 330, 200 330 C140 330, 120 310, 120 240 Z" fill="#E2E8F0"/>
                        
                        <!-- Face (Ape Character) -->
                        <path d="M140 250 C140 190, 260 190, 260 250 C260 290, 240 310, 200 310 C160 310, 140 290, 140 250 Z" fill="#DDB892"/>
                        
                        <!-- Face Tattoos & Markings -->
                        <!-- Eyes Closed/Bored -->
                        <path d="M165 240 C175 235, 185 240, 185 240" stroke="#4A3728" stroke-width="4" stroke-linecap="round"/>
                        <path d="M215 240 C225 235, 235 240, 235 240" stroke="#4A3728" stroke-width="4" stroke-linecap="round"/>
                        <!-- Bored Eyebrow/Under-eye bags -->
                        <path d="M165 250 Q175 248 185 250" stroke="#7F5539" stroke-width="2"/>
                        <path d="M215 250 Q225 248 235 250" stroke="#7F5539" stroke-width="2"/>
                        
                        <!-- Snout -->
                        <path d="M160 270 C160 255, 240 255, 240 270 C240 295, 220 305, 200 305 C180 305, 160 295, 160 270 Z" fill="#CB997E"/>
                        <!-- Nose Nostrils -->
                        <circle cx="192" cy="272" r="3" fill="#6F4E37"/>
                        <circle cx="208" cy="272" r="3" fill="#6F4E37"/>
                        <!-- Bored Mouth Line -->
                        <path d="M175 288 Q200 284 225 288" stroke="#4A3728" stroke-width="3.5" stroke-linecap="round"/>
                        
                        <!-- Tribal/Tattoo detailing on skin -->
                        <path d="M190 215 L210 215 M200 205 L200 225" stroke="#4A3728" stroke-width="2" opacity="0.4"/>
                        <circle cx="155" cy="275" r="2" fill="#4A3728" opacity="0.5"/>
                        <circle cx="245" cy="275" r="2" fill="#4A3728" opacity="0.5"/>

                        <!-- Custom Cap (The elegant white cap worn under the hood) -->
                        <path d="M148 220 C148 185, 252 185, 252 220 Z" fill="#FFFFFF"/>
                        <!-- Cap visor -->
                        <path d="M140 220 C140 220, 150 228, 200 228 C250 228, 260 220, 260 220 L255 214 L145 214 Z" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
                        <!-- H Lettermark on Cap -->
                        <text x="200" y="212" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="16" fill="#E2E8F0" text-anchor="middle">H</text>

                        <!-- High Collar/Coat Detail -->
                        <path d="M140 325 L260 325 L245 380 L155 380 Z" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="4"/>
                        <!-- Silver chain underneath -->
                        <path d="M180 340 Q200 365 220 340" fill="none" stroke="#94A3B8" stroke-width="5" stroke-linecap="round"/>
                        <path d="M182 344 Q200 365 218 344" fill="none" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>

            <!-- Right Info Component (Responsive Column) -->
            <div class="lg:col-span-3 order-3 flex flex-col justify-center space-y-8 z-20">
                <!-- Discover, Collect & Sell Accent -->
                <div class="text-right hidden lg:block">
                    <p class="font-display font-medium text-lg text-brand-dark/80">
                        Discover , Collect & Sell
                    </p>
                    <div class="h-[2px] w-24 bg-brand-dark/20 ml-auto mt-2"></div>
                </div>

                <!-- 10K+ Creators Stat Badge (matches the exact UI in reference image) -->
                <div class="glass-card p-6 rounded-3xl shadow-xl shadow-emerald-950/5 flex items-center space-x-5 max-w-sm ml-auto mr-auto lg:mr-0 transition-all duration-300 hover:scale-[1.03]">
                    <div class="flex -space-x-3 overflow-hidden">
                        <!-- Creator Avatars with nice pastel styling -->
                        <div class="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">🎨</div>
                        <div class="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-600">👾</div>
                        <!-- Custom Play/Audio icon as seen in photo -->
                        <div class="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-brand-dark flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4 text-emerald-300">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-display font-bold text-brand-dark text-lg leading-none">10K+ CREATORS</h4>
                        <p class="text-xs text-brand-dark/60 mt-1 font-medium leading-normal">
                            The first NFT market place that enables creators to choose.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </main>

    <!-- TRUSTED BY / MARQUEE -->
    <section class="border-y border-brand-dark/10 py-8 bg-white/20 backdrop-blur-sm select-none overflow-hidden">
        <div class="max-w-7xl mx-auto px-6">
            <p class="text-center text-xs font-bold tracking-[0.2em] text-brand-dark/40 uppercase mb-6">
                INTEGRATED WITH LEADING WEB3 PROTOCOLS
            </p>
            <div class="flex flex-wrap items-center justify-center gap-12 md:gap-20">
                <div class="flex items-center space-x-2 opacity-50 hover:opacity-100 transition-opacity">
                    <span class="font-display font-bold text-xl text-brand-dark">Ethereum</span>
                </div>
                <div class="flex items-center space-x-2 opacity-50 hover:opacity-100 transition-opacity">
                    <span class="font-display font-bold text-xl text-brand-dark">Solana</span>
                </div>
                <div class="flex items-center space-x-2 opacity-50 hover:opacity-100 transition-opacity">
                    <span class="font-display font-bold text-xl text-brand-dark">Polygon</span>
                </div>
                <div class="flex items-center space-x-2 opacity-50 hover:opacity-100 transition-opacity">
                    <span class="font-display font-bold text-xl text-brand-dark">Metamask</span>
                </div>
                <div class="flex items-center space-x-2 opacity-50 hover:opacity-100 transition-opacity">
                    <span class="font-display font-bold text-xl text-brand-dark">IPFS Secure</span>
                </div>
            </div>
        </div>
    </section>

    <!-- LIVE AUCTIONS / MARKETPLACE -->
    <section id="marketplace" class="py-24 max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
                <span class="text-xs font-bold tracking-widest text-emerald-600 uppercase">// DISCOVER EXCELLENCE</span>
                <h2 class="text-4xl sm:text-5xl font-display font-bold text-brand-dark mt-2 tracking-tight">
                    Live Hot Auctions
                </h2>
            </div>
            <!-- Interactive Category Pills -->
            <div class="flex flex-wrap gap-2">
                <button onclick="filterMarket('all')" id="btn-all" class="px-5 py-2.5 rounded-full text-xs font-bold bg-brand-dark text-white transition-all">
                    All Collections
                </button>
                <button onclick="filterMarket('art')" id="btn-art" class="px-5 py-2.5 rounded-full text-xs font-bold bg-white/50 text-brand-dark hover:bg-white/80 transition-all border border-brand-dark/10">
                    Digital Art
                </button>
                <button onclick="filterMarket('avatars')" id="btn-avatars" class="px-5 py-2.5 rounded-full text-xs font-bold bg-white/50 text-brand-dark hover:bg-white/80 transition-all border border-brand-dark/10">
                    Avatars
                </button>
                <button onclick="filterMarket('meta')" id="btn-meta" class="px-5 py-2.5 rounded-full text-xs font-bold bg-white/50 text-brand-dark hover:bg-white/80 transition-all border border-brand-dark/10">
                    Metaverse
                </button>
            </div>
        </div>

        <!-- Auction Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <!-- Card 1 -->
            <div class="glass-card rounded-[32px] p-4 flex flex-col justify-between shadow-xl shadow-brand-dark/5 hover:shadow-2xl hover:shadow-brand-dark/10 transition-all duration-300 transform hover:-translate-y-2 group" data-category="art">
                <div class="relative overflow-hidden rounded-[24px] aspect-square bg-gradient-to-tr from-teal-100 to-amber-100 flex items-center justify-center">
                    <!-- Custom Beautiful Premium Artwork Visual representation -->
                    <div class="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-80" style="background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80');"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/65 via-transparent to-transparent"></div>
                    
                    <!-- Mint Floating Badge -->
                    <span class="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-extrabold text-brand-dark shadow-sm">
                        ARTWORK #1024
                    </span>

                    <!-- Time Left Clock Dynamic Visual -->
                    <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <span class="text-xs font-bold bg-brand-dark/80 px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            08h : 14m : 55s
                        </span>
                        <span class="text-xs font-extrabold tracking-wider bg-emerald-500/95 px-3 py-1.5 rounded-full shadow-lg">
                            ACTIVE
                        </span>
                    </div>
                </div>

                <!-- Info Block -->
                <div class="p-4 space-y-4">
                    <div class="flex items-center justify-between">
                        <h3 class="font-display font-bold text-lg text-brand-dark group-hover:text-emerald-700 transition-colors">
                            Cosmic Aurora Aura
                        </h3>
                        <span class="text-xs font-bold text-brand-dark/40">CC-BY 4.0</span>
                    </div>

                    <!-- Creator info and bids -->
                    <div class="flex items-center justify-between pt-2 border-t border-brand-dark/5">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center text-xs">🌌</div>
                            <div>
                                <p class="text-[10px] text-brand-dark/40 font-bold">CREATOR</p>
                                <p class="text-xs font-bold text-brand-dark">@aurora_maker</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-[10px] text-brand-dark/40 font-bold">CURRENT BID</p>
                            <p class="text-sm font-black text-brand-dark">2.45 ETH</p>
                        </div>
                    </div>

                    <!-- Interactive Place Bid Trigger -->
                    <button onclick="simulateBid('Cosmic Aurora Aura', '2.45')" class="w-full py-3.5 bg-brand-dark text-white text-xs font-bold rounded-2xl hover:bg-emerald-600 transition-all shadow-md shadow-brand-dark/10 group-hover:scale-[1.01]">
                        Place Instant Bid
                    </button>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="glass-card rounded-[32px] p-4 flex flex-col justify-between shadow-xl shadow-brand-dark/5 hover:shadow-2xl hover:shadow-brand-dark/10 transition-all duration-300 transform hover:-translate-y-2 group" data-category="avatars">
                <div class="relative overflow-hidden rounded-[24px] aspect-square bg-gradient-to-tr from-purple-100 to-emerald-100 flex items-center justify-center">
                    <div class="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-80" style="background-image: url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&q=80');"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/65 via-transparent to-transparent"></div>
                    
                    <span class="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-extrabold text-brand-dark shadow-sm">
                        AVATAR #8893
                    </span>

                    <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <span class="text-xs font-bold bg-brand-dark/80 px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            03h : 05m : 11s
                        </span>
                        <span class="text-xs font-extrabold tracking-wider bg-emerald-500/95 px-3 py-1.5 rounded-full shadow-lg">
                            ACTIVE
                        </span>
                    </div>
                </div>

                <div class="p-4 space-y-4">
                    <div class="flex items-center justify-between">
                        <h3 class="font-display font-bold text-lg text-brand-dark group-hover:text-emerald-700 transition-colors">
                            Cyber Ape Hoodie #01
                        </h3>
                        <span class="text-xs font-bold text-brand-dark/40">CC0 License</span>
                    </div>

                    <div class="flex items-center justify-between pt-2 border-t border-brand-dark/5">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-xs">🐵</div>
                            <div>
                                <p class="text-[10px] text-brand-dark/40 font-bold">CREATOR</p>
                                <p class="text-xs font-bold text-brand-dark">@crypto_hype</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-[10px] text-brand-dark/40 font-bold">CURRENT BID</p>
                            <p class="text-sm font-black text-brand-dark">1.89 ETH</p>
                        </div>
                    </div>

                    <button onclick="simulateBid('Cyber Ape Hoodie #01', '1.89')" class="w-full py-3.5 bg-brand-dark text-white text-xs font-bold rounded-2xl hover:bg-emerald-600 transition-all shadow-md shadow-brand-dark/10 group-hover:scale-[1.01]">
                        Place Instant Bid
                    </button>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="glass-card rounded-[32px] p-4 flex flex-col justify-between shadow-xl shadow-brand-dark/5 hover:shadow-2xl hover:shadow-brand-dark/10 transition-all duration-300 transform hover:-translate-y-2 group" data-category="meta">
                <div class="relative overflow-hidden rounded-[24px] aspect-square bg-gradient-to-tr from-rose-100 to-indigo-100 flex items-center justify-center">
                    <div class="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-80" style="background-image: url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=600&q=80');"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/65 via-transparent to-transparent"></div>
                    
                    <span class="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-extrabold text-brand-dark shadow-sm">
                        TERRAIN #452
                    </span>

                    <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <span class="text-xs font-bold bg-brand-dark/80 px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            19h : 42m : 02s
                        </span>
                        <span class="text-xs font-extrabold tracking-wider bg-emerald-500/95 px-3 py-1.5 rounded-full shadow-lg">
                            ACTIVE
                        </span>
                    </div>
                </div>

                <div class="p-4 space-y-4">
                    <div class="flex items-center justify-between">
                        <h3 class="font-display font-bold text-lg text-brand-dark group-hover:text-emerald-700 transition-colors">
                            Neo-Tokyo Virtual Penthouse
                        </h3>
                        <span class="text-xs font-bold text-brand-dark/40">Exclusive Ownership</span>
                    </div>

                    <div class="flex items-center justify-between pt-2 border-t border-brand-dark/5">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center text-xs">🏙️</div>
                            <div>
                                <p class="text-[10px] text-brand-dark/40 font-bold">CREATOR</p>
                                <p class="text-xs font-bold text-brand-dark">@arch_meta</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-[10px] text-brand-dark/40 font-bold">CURRENT BID</p>
                            <p class="text-sm font-black text-brand-dark">4.12 ETH</p>
                        </div>
                    </div>

                    <button onclick="simulateBid('Neo-Tokyo Virtual Penthouse', '4.12')" class="w-full py-3.5 bg-brand-dark text-white text-xs font-bold rounded-2xl hover:bg-emerald-600 transition-all shadow-md shadow-brand-dark/10 group-hover:scale-[1.01]">
                        Place Instant Bid
                    </button>
                </div>
            </div>

        </div>
    </section>

    <!-- INTERACTIVE "INSTANT MINT" CREATOR SIMULATOR -->
    <section id="simulator" class="py-24 bg-white/30 backdrop-blur-md border-y border-brand-dark/10">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                <!-- Left Details & Simulator Panel -->
                <div class="lg:col-span-5 space-y-8">
                    <div>
                        <span class="text-xs font-bold tracking-widest text-emerald-600 uppercase">// ZERO CODE MINTER</span>
                        <h2 class="text-4xl sm:text-5xl font-display font-bold text-brand-dark mt-2 tracking-tight">
                            Generate & Mint Your Artwork
                        </h2>
                        <p class="text-brand-dark/70 text-base leading-relaxed mt-4">
                            Experiment with custom design attributes instantly below. Choose base gradients, metadata parameters, and watch your preview generate in real-time. Connect wallet to experience simulated Web3 minting.
                        </p>
                    </div>

                    <!-- Custom Form Inputs with pristine matching style -->
                    <div class="space-y-6">
                        <div>
                            <label class="block text-xs font-bold text-brand-dark/60 tracking-wider uppercase mb-2">
                                Artwork Name
                            </label>
                            <input type="text" id="mint-name" value="Futuristic Cyber Abstract" oninput="updateMintPreview()" class="w-full px-5 py-4 bg-white/70 border border-brand-dark/10 rounded-2xl text-sm font-semibold text-brand-dark focus:outline-none focus:border-emerald-500 transition-all">
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-brand-dark/60 tracking-wider uppercase mb-2">
                                Royalty Share (%)
                            </label>
                            <input type="range" id="mint-royalty" min="1" max="15" value="5" oninput="updateMintPreview()" class="w-full accent-emerald-500 bg-brand-dark/5 rounded-lg appearance-none h-2 cursor-pointer">
                            <div class="flex justify-between text-xs font-semibold text-brand-dark/50 mt-1">
                                <span>1%</span>
                                <span id="royalty-value" class="text-emerald-600 font-bold">5% Royalty</span>
                                <span>15%</span>
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-brand-dark/60 tracking-wider uppercase mb-2">
                                Choose Palette Scheme
                            </label>
                            <div class="grid grid-cols-3 gap-3">
                                <button onclick="selectPalette('neon-emerald')" class="py-3 px-2 rounded-xl border border-brand-dark/10 font-bold text-xs bg-emerald-50 text-emerald-800 flex items-center justify-center gap-1.5 focus:border-emerald-500 transition-all">
                                    <span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> Minty Glow
                                </button>
                                <button onclick="selectPalette('solar-sunset')" class="py-3 px-2 rounded-xl border border-brand-dark/10 font-bold text-xs bg-amber-50 text-amber-800 flex items-center justify-center gap-1.5 focus:border-amber-500 transition-all">
                                    <span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> Solar Flare
                                </button>
                                <button onclick="selectPalette('cyber-space')" class="py-3 px-2 rounded-xl border border-brand-dark/10 font-bold text-xs bg-indigo-50 text-indigo-800 flex items-center justify-center gap-1.5 focus:border-indigo-500 transition-all">
                                    <span class="w-3 h-3 rounded-full bg-indigo-400 inline-block"></span> Cyber Dust
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- CTA to execute simulated mint -->
                    <button onclick="triggerSimulatedMint()" class="w-full sm:w-auto px-8 py-4 bg-brand-dark hover:bg-emerald-600 text-white font-bold text-sm rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                        Simulate Direct Mint
                    </button>
                </div>

                <!-- Right Live Preview Card Component -->
                <div class="lg:col-span-7 flex justify-center">
                    <div class="glass-card p-6 rounded-[40px] shadow-2xl shadow-brand-dark/10 max-w-md w-full relative">
                        <div class="absolute -top-4 -right-4 px-4 py-2 bg-emerald-400 text-brand-dark font-extrabold text-[10px] rounded-full tracking-wider shadow-md animate-bounce uppercase">
                            LIVE GENERATION
                        </div>

                        <!-- Changing visual placeholder -->
                        <div id="preview-art-box" class="w-full aspect-[4/3] rounded-[30px] bg-gradient-to-tr from-emerald-100 to-teal-200 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500">
                            <!-- Inside artwork display -->
                            <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50" style="background-image: url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80');"></div>
                            
                            <!-- Dynamic changing central glowing vector graphic -->
                            <div id="preview-icon" class="w-24 h-24 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center shadow-lg text-4xl animate-float">
                                💎
                            </div>
                        </div>

                        <!-- Card metadata -->
                        <div class="mt-6 space-y-4">
                            <div>
                                <p class="text-[10px] font-bold tracking-widest text-brand-dark/40 uppercase">LIVE PREVIEW SPECIFICATIONS</p>
                                <h3 id="preview-title" class="font-display font-bold text-2xl text-brand-dark mt-1">
                                    Futuristic Cyber Abstract
                                </h3>
                            </div>

                            <div class="grid grid-cols-2 gap-4 pt-4 border-t border-brand-dark/5 text-sm font-semibold">
                                <div>
                                    <p class="text-xs text-brand-dark/40 font-bold">SMART CONTRACT</p>
                                    <p class="text-brand-dark font-mono text-xs mt-0.5">0x71C...9E2a</p>
                                </div>
                                <div>
                                    <p class="text-xs text-brand-dark/40 font-bold">ROYALTY</p>
                                    <p id="preview-royalty" class="text-emerald-600 font-extrabold text-sm mt-0.5">5% Split</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- PREMIUM PLATFORM CAPABILITIES / VALUES -->
    <section id="discover" class="py-24 max-w-7xl mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto mb-20">
            <span class="text-xs font-bold tracking-widest text-emerald-600 uppercase">// PLATFORM PRINCIPLES</span>
            <h2 class="text-4xl sm:text-5xl font-display font-bold text-brand-dark mt-3 tracking-tight">
                Designed for True Collectors
            </h2>
            <p class="text-brand-dark/70 text-base leading-relaxed mt-4">
                We believe that digital ownership should have clarity. Our smart-contract layer empowers creator security while fostering secondary marketplace confidence.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <!-- Value Item 1 -->
            <div class="glass-card p-10 rounded-[40px] border border-white/60 shadow-xl shadow-brand-dark/5 hover:scale-[1.02] transition-transform duration-300">
                <div class="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-2xl mb-8 shadow-sm">
                    📜
                </div>
                <h3 class="font-display font-bold text-xl text-brand-dark mb-4">
                    Embedded Licensing
                </h3>
                <p class="text-brand-dark/70 text-sm leading-relaxed font-medium">
                    Unlike standard marketplaces, Digitally automatically embeds Creative Commons and customized commercial rights directly into token smart contracts.
                </p>
            </div>

            <!-- Value Item 2 -->
            <div class="glass-card p-10 rounded-[40px] border border-white/60 shadow-xl shadow-brand-dark/5 hover:scale-[1.02] transition-transform duration-300">
                <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-8 shadow-sm">
                    ⚡
                </div>
                <h3 class="font-display font-bold text-xl text-brand-dark mb-4">
                    Ultra-Low Gas Minting
                </h3>
                <p class="text-brand-dark/70 text-sm leading-relaxed font-medium">
                    Optimized ERC-721A and Solana protocols yield up to 85% lower transaction cost overhead, putting priority power and money back in creators’ wallets.
                </p>
            </div>

            <!-- Value Item 3 -->
            <div class="glass-card p-10 rounded-[40px] border border-white/60 shadow-xl shadow-brand-dark/5 hover:scale-[1.02] transition-transform duration-300">
                <div class="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-2xl mb-8 shadow-sm">
                    🌟
                </div>
                <h3 class="font-display font-bold text-xl text-brand-dark mb-4">
                    Creator Co-ops
                </h3>
                <p class="text-brand-dark/70 text-sm leading-relaxed font-medium">
                    Connect directly to our creator governance platform. Shape marketplace features, suggest contract standards, and share in platform-wide rewards.
                </p>
            </div>

        </div>
    </section>

    <!-- INTERACTIVE NOTIFICATIONS/ALERT LOG (Bottom Left Toast) -->
    <div id="toast-message" class="fixed bottom-6 right-6 z-50 transform translate-y-24 opacity-0 transition-all duration-300 max-w-sm w-full">
        <div class="glass-card p-4 rounded-2xl shadow-2xl flex items-center space-x-3 border-l-4 border-emerald-500">
            <span class="text-lg" id="toast-icon">🚀</span>
            <div class="flex-1">
                <p class="text-xs font-bold text-brand-dark" id="toast-title">Notification</p>
                <p class="text-[11px] text-brand-dark/70" id="toast-body">Details here.</p>
            </div>
            <button onclick="dismissToast()" class="text-brand-dark/40 hover:text-brand-dark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>

    <!-- WALLET SIMULATOR MODAL -->
    <div id="wallet-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/20 backdrop-blur-sm hidden transition-opacity duration-300">
        <div class="glass-card max-w-md w-full mx-4 rounded-[36px] overflow-hidden shadow-2xl border border-white/80 transform scale-95 transition-transform duration-300">
            <div class="p-8 space-y-6">
                <div class="flex justify-between items-center">
                    <h3 class="font-display font-bold text-2xl text-brand-dark">
                        Simulate Wallet
                    </h3>
                    <button onclick="toggleWalletModal()" class="w-8 h-8 rounded-full bg-brand-dark/5 flex items-center justify-center hover:bg-brand-dark/15">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <p class="text-brand-dark/70 text-sm">
                    Select a simulated mock wallet to instantly link, enabling marketplace and creator simulation functionality without installing external extensions.
                </p>

                <div class="space-y-3">
                    <button onclick="selectWallet('Metamask')" class="w-full p-4 rounded-2xl border border-brand-dark/10 hover:border-emerald-500 hover:bg-emerald-50/50 flex items-center justify-between font-bold text-sm text-brand-dark transition-all">
                        <span class="flex items-center space-x-3">
                            <span class="text-xl">🦊</span>
                            <span>Metamask Simulator</span>
                        </span>
                        <span class="text-xs text-emerald-600 font-extrabold">POPULAR</span>
                    </button>
                    <button onclick="selectWallet('Phantom')" class="w-full p-4 rounded-2xl border border-brand-dark/10 hover:border-emerald-500 hover:bg-emerald-50/50 flex items-center justify-between font-bold text-sm text-brand-dark transition-all">
                        <span class="flex items-center space-x-3">
                            <span class="text-xl">👻</span>
                            <span>Phantom Wallet Simulator</span>
                        </span>
                        <span class="text-xs text-blue-600 font-extrabold">FAST</span>
                    </button>
                    <button onclick="selectWallet('Coinbase')" class="w-full p-4 rounded-2xl border border-brand-dark/10 hover:border-emerald-500 hover:bg-emerald-50/50 flex items-center justify-between font-bold text-sm text-brand-dark transition-all">
                        <span class="flex items-center space-x-3">
                            <span class="text-xl">🔵</span>
                            <span>Coinbase Mock SDK</span>
                        </span>
                        <span class="text-xs text-gray-500">LEGACY</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- FAQ ACCORDION SECTION -->
    <section id="faq" class="py-24 max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
            <span class="text-xs font-bold tracking-widest text-emerald-600 uppercase">// ASSISTANCE & INQUIRY</span>
            <h2 class="text-4xl font-display font-bold text-brand-dark mt-2">
                Frequently Asked Questions
            </h2>
        </div>

        <div class="space-y-4">
            <!-- Accordion 1 -->
            <div class="glass-card rounded-2xl overflow-hidden transition-all border border-white/60">
                <button onclick="toggleFaq(1)" class="w-full p-6 text-left flex items-center justify-between font-display font-bold text-base text-brand-dark">
                    <span>What is the smart license feature on Digitally?</span>
                    <span id="faq-icon-1" class="transform transition-transform text-emerald-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    </span>
                </button>
                <div id="faq-ans-1" class="hidden px-6 pb-6 text-brand-dark/70 text-sm leading-relaxed">
                    Unlike ordinary NFT marketplaces that only verify token ownership, Digitally embeds a legally-binding license agreement into the smart contract metadata. Creators can choose standard presets (e.g., Personal Use Only, CC-BY, CC0, Commercial Rights) or upload custom terms.
                </div>
            </div>

            <!-- Accordion 2 -->
            <div class="glass-card rounded-2xl overflow-hidden transition-all border border-white/60">
                <button onclick="toggleFaq(2)" class="w-full p-6 text-left flex items-center justify-between font-display font-bold text-base text-brand-dark">
                    <span>How can I test minting on this platform?</span>
                    <span id="faq-icon-2" class="transform transition-transform text-emerald-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    </span>
                </button>
                <div id="faq-ans-2" class="hidden px-6 pb-6 text-brand-dark/70 text-sm leading-relaxed">
                    You can try out our mock mint simulator above! Simply change your parameters, configure the name, and press "Simulate Direct Mint". It will run a local state simulator showing standard verification on a mock network block without spending real currency.
                </div>
            </div>

            <!-- Accordion 3 -->
            <div class="glass-card rounded-2xl overflow-hidden transition-all border border-white/60">
                <button onclick="toggleFaq(3)" class="w-full p-6 text-left flex items-center justify-between font-display font-bold text-base text-brand-dark">
                    <span>Are secondary royalty overrides supported?</span>
                    <span id="faq-icon-3" class="transform transition-transform text-emerald-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    </span>
                </button>
                <div id="faq-ans-3" class="hidden px-6 pb-6 text-brand-dark/70 text-sm leading-relaxed">
                    Yes, we employ ERC-2981 Multi-Chain Royalty protocols. This guarantees secondary sales on any compliant aggregator automatically respect and pay out configured royalties back to creators' wallets.
                </div>
            </div>
        </div>
    </section>

    <!-- CALL TO ACTION (CTA) -->
    <section class="py-20 px-6 max-w-6xl mx-auto">
        <div class="glass-card p-12 sm:p-20 rounded-[50px] relative overflow-hidden flex flex-col items-center text-center space-y-8 shadow-2xl border border-white/80">
            <!-- Decorative Light Blur Spheres inside Banner -->
            <div class="absolute -top-12 -left-12 w-32 h-32 bg-emerald-200 rounded-full blur-2xl opacity-40"></div>
            <div class="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-200 rounded-full blur-2xl opacity-40"></div>

            <span class="text-xs font-bold tracking-widest text-emerald-600 uppercase z-10">// ENTER THE UNIVERSE</span>
            <h2 class="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-brand-dark tracking-tight max-w-3xl z-10 leading-none">
                Begin Collecting Exceptional Digital Licensing Assets
            </h2>
            <p class="text-brand-dark/75 text-sm sm:text-base max-w-xl z-10 leading-relaxed font-medium">
                Connect your mock wallet, configure your custom licenses, and list with the lowest gas premiums in the industry.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 w-full justify-center items-center z-10">
                <input type="email" placeholder="Enter your email for platform updates" class="w-full sm:w-80 px-6 py-4 rounded-full bg-white/70 border border-brand-dark/10 focus:outline-none focus:border-emerald-500 font-semibold text-sm">
                <button onclick="showToast('Success!', 'Successfully registered email for newsletter!', '📧')" class="w-full sm:w-auto px-8 py-4 bg-brand-dark hover:bg-emerald-600 text-white font-bold text-sm rounded-full transition-all duration-300">
                    Join Waitlist
                </button>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="border-t border-brand-dark/10 py-16 bg-white/10 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <!-- Column 1 -->
            <div class="space-y-4">
                <span class="font-display font-extrabold text-2xl tracking-tight text-brand-dark">
                    Digitally
                </span>
                <p class="text-xs text-brand-dark/60 leading-relaxed font-medium">
                    The premium Web3 digital arts marketplace emphasizing safe, secure contract licensing and robust creator royalties.
                </p>
                <div class="flex space-x-3 text-xs font-bold">
                    <span class="px-2.5 py-1 rounded bg-brand-dark/5 text-brand-dark/60">MAINNET ACTIVE</span>
                    <span class="px-2.5 py-1 rounded bg-emerald-100 text-emerald-700">v1.2.5</span>
                </div>
            </div>

            <!-- Column 2 -->
            <div class="space-y-4">
                <h4 class="font-display font-bold text-brand-dark text-sm tracking-wider uppercase">Marketplace</h4>
                <ul class="space-y-2 text-xs font-semibold text-brand-dark/70">
                    <li><a href="#marketplace" class="hover:text-emerald-600">Trending Art</a></li>
                    <li><a href="#marketplace" class="hover:text-emerald-600">Avatars Showcase</a></li>
                    <li><a href="#marketplace" class="hover:text-emerald-600">Exclusive Lands</a></li>
                    <li><a href="#marketplace" class="hover:text-emerald-600">Licensing Docs</a></li>
                </ul>
            </div>

            <!-- Column 3 -->
            <div class="space-y-4">
                <h4 class="font-display font-bold text-brand-dark text-sm tracking-wider uppercase">Simulator Services</h4>
                <ul class="space-y-2 text-xs font-semibold text-brand-dark/70">
                    <li><a href="#simulator" class="hover:text-emerald-600">Mock Minter</a></li>
                    <li><a href="#simulator" class="hover:text-emerald-600">Custom Attributes</a></li>
                    <li><a href="#simulator" class="hover:text-emerald-600">Royalty Presets</a></li>
                </ul>
            </div>

            <!-- Column 4 -->
            <div class="space-y-4">
                <h4 class="font-display font-bold text-brand-dark text-sm tracking-wider uppercase">Legal & Compliance</h4>
                <ul class="space-y-2 text-xs font-semibold text-brand-dark/70">
                    <li><a href="#" class="hover:text-emerald-600">Privacy Protocols</a></li>
                    <li><a href="#" class="hover:text-emerald-600">Terms of Licensing</a></li>
                    <li><a href="#" class="hover:text-emerald-600">Smart Contract Audits</a></li>
                </ul>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-brand-dark/5 flex flex-col sm:flex-row justify-between items-center text-xs text-brand-dark/50 font-semibold gap-4">
            <p>&copy; 2026 Digitally Technologies Inc. All simulated transactions reserved.</p>
            <div class="flex space-x-6">
                <a href="#" class="hover:text-brand-dark">Twitter / X</a>
                <a href="#" class="hover:text-brand-dark">Discord Community</a>
                <a href="#" class="hover:text-brand-dark">Github Hub</a>
            </div>
        </div>
    </footer>


    <!-- INTERACTIVE SCRIPTS -->
    <script>
        // State management
        let walletConnected = false;
        let selectedWalletName = "";
        let mockWalletAddress = "0x71C5...9E2a";
        let activeFilter = 'all';

        // Filter marketplace cards
        function filterMarket(category) {
            activeFilter = category;
            const buttons = ['all', 'art', 'avatars', 'meta'];
            
            // Toggle active style on buttons
            buttons.forEach(btn => {
                const el = document.getElementById(`btn-${btn}`);
                if (btn === category) {
                    el.className = "px-5 py-2.5 rounded-full text-xs font-bold bg-brand-dark text-white transition-all";
                } else {
                    el.className = "px-5 py-2.5 rounded-full text-xs font-bold bg-white/50 text-brand-dark hover:bg-white/80 transition-all border border-brand-dark/10";
                }
            });

            // Filter items
            const cards = document.querySelectorAll('[data-category]');
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Accordion functionality
        function toggleFaq(num) {
            const ans = document.getElementById(`faq-ans-${num}`);
            const icon = document.getElementById(`faq-icon-${num}`);
            
            if (ans.classList.contains('hidden')) {
                ans.classList.remove('hidden');
                icon.style.transform = "rotate(180deg)";
            } else {
                ans.classList.add('hidden');
                icon.style.transform = "rotate(0deg)";
            }
        }

        // Dynamic Simulator Preview Update
        function updateMintPreview() {
            const nameInput = document.getElementById('mint-name').value;
            const royaltyValue = document.getElementById('mint-royalty').value;
            
            document.getElementById('preview-title').innerText = nameInput ? nameInput : "Unnamed Masterpiece";
            document.getElementById('royalty-value').innerText = `${royaltyValue}% Royalty`;
            document.getElementById('preview-royalty').innerText = `${royaltyValue}% Split`;
        }

        // Color Palette Selector for Simulator
        function selectPalette(palette) {
            const previewBox = document.getElementById('preview-art-box');
            const previewIcon = document.getElementById('preview-icon');
            
            if (palette === 'neon-emerald') {
                previewBox.className = "w-full aspect-[4/3] rounded-[30px] bg-gradient-to-tr from-emerald-100 to-teal-200 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500";
                previewIcon.innerText = "💎";
            } else if (palette === 'solar-sunset') {
                previewBox.className = "w-full aspect-[4/3] rounded-[30px] bg-gradient-to-tr from-amber-100 to-rose-200 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500";
                previewIcon.innerText = "🔥";
            } else if (palette === 'cyber-space') {
                previewBox.className = "w-full aspect-[4/3] rounded-[30px] bg-gradient-to-tr from-indigo-200 to-sky-300 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500";
                previewIcon.innerText = "🌌";
            }
            showToast("Palette Shift", `Switched design canvas theme to ${palette}`, "🎨");
        }

        // Simulated Mint Execution
        function triggerSimulatedMint() {
            const nameInput = document.getElementById('mint-name').value;
            if (!walletConnected) {
                showToast("Connection Required", "Please connect a simulated wallet first to authorize the mint transaction.", "⚠️");
                toggleWalletModal();
                return;
            }

            showToast("Authorizing Mint", `Sending secure transaction block to ${selectedWalletName}...`, "⚙️");
            
            setTimeout(() => {
                showToast("Transaction Broadcasted", "Verifying contract metadata blocks on simulated mainnet...", "📡");
                setTimeout(() => {
                    showToast("Mint Successful! 🎉", `"${nameInput}" successfully created with ERC-2981 royalty structure!`, "✅");
                }, 1500);
            }, 1200);
        }

        // Simulated Placing Bids
        function simulateBid(itemName, baseBid) {
            const increment = (parseFloat(baseBid) + 0.15).toFixed(2);
            if (!walletConnected) {
                showToast("Connection Required", "Please connect a simulated wallet to record your instant signature bid.", "⚠️");
                toggleWalletModal();
                return;
            }

            showToast("Signing Bid Offer", `Submitting offer of ${increment} ETH for "${itemName}"...`, "✍️");
            setTimeout(() => {
                showToast("Offer Success", `Your bid of ${increment} ETH is now recorded on-chain.`, "✅");
            }, 1000);
        }

        // Wallet simulated connection
        function toggleWalletModal() {
            const modal = document.getElementById('wallet-modal');
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                modal.style.opacity = '1';
            } else {
                modal.classList.add('hidden');
                modal.style.opacity = '0';
            }
        }

        function selectWallet(walletName) {
            selectedWalletName = walletName;
            walletConnected = true;
            toggleWalletModal();
            
            // Update Navigation Button
            const connectBtn = document.getElementById('connect-wallet-btn');
            connectBtn.innerText = "0x71C...9E2a (Mock)";
            connectBtn.className = "px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-brand-dark font-extrabold text-sm rounded-full shadow-lg shadow-emerald-400/20 transition-all duration-300";

            showToast("Wallet Synced", `Successfully loaded and synced simulated ${walletName} profile!`, "🦊");
        }

        // Toast Notification System
        function showToast(title, body, icon = "📢") {
            const toast = document.getElementById('toast-message');
            document.getElementById('toast-title').innerText = title;
            document.getElementById('toast-body').innerText = body;
            document.getElementById('toast-icon').innerText = icon;

            toast.classList.remove('translate-y-24', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');

            // Auto-dismiss after 4 seconds
            setTimeout(() => {
                dismissToast();
            }, 4000);
        }

        function dismissToast() {
            const toast = document.getElementById('toast-message');
            toast.classList.add('translate-y-24', 'opacity-0');
            toast.classList.remove('translate-y-0', 'opacity-100');
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
    <title>STUTTERHEIM — Premium Rainwear & Carryall</title>
    <!-- Google Fonts for Editorial Luxury Feel -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome for Premium Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            sageDark: '#b9c0ae',    // Rich warm sage (left hero split)
                            sageLight: '#d5d9cc',   // Lighter pale sage/sand (right hero split)
                            sandBg: '#e5e8df',      // Base website sand canvas
                            sandCard: '#ecefe7',    // Slightly lighter sand for container card contrast
                            charcoal: '#141712',    // Softer than pure black for organic look
                            mutedText: '#656c5e',   // Olive-toned muted gray text
                            terracotta: '#e65c2b',  // Vibrant signature orange accent
                            terracottaHover: '#cd4a1d',
                            cream: '#f4f6f1',
                        }
                    },
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        serif: ['"Playfair Display"', 'serif'],
                    },
                    letterSpacing: {
                        widest: '.2em',
                        luxury: '.15em',
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom Premium Micro-interactions */
        ::selection {
            background-color: #e65c2b;
            color: white;
        }
        
        /* Custom Scrollbar for Luxury Websites */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #e5e8df;
        }
        ::-webkit-scrollbar-thumb {
            background: #b9c0ae;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #141712;
        }

        /* Smooth Custom Transitions */
        .color-transition {
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .text-vertical {
            writing-mode: vertical-rl;
            text-combine-upright: all;
        }

        /* Ambient subtle pulse */
        @keyframes subtlePulse {
            0%, 100% { transform: scale(1); opacity: 0.95; }
            50% { transform: scale(1.02); opacity: 1; }
        }
        .ambient-bag {
            animation: subtlePulse 8s ease-in-out infinite;
        }

        /* Custom hotspots pulse */
        @keyframes pulseHotspot {
            0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(230, 92, 43, 0.7); }
            70% { transform: scale(1.15); opacity: 0.8; box-shadow: 0 0 0 10px rgba(230, 92, 43, 0); }
            100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(230, 92, 43, 0); }
        }
        .hotspot-ring {
            animation: pulseHotspot 2s infinite;
        }
    </style>
</head>
<body class="bg-brand-sandBg text-brand-charcoal font-sans antialiased selection:bg-brand-terracotta selection:text-white overflow-x-hidden">

    <!-- TOP ANNOUNCEMENT BAR -->
    <div class="bg-brand-charcoal text-brand-cream text-[10px] tracking-[0.25em] uppercase py-2.5 px-6 flex justify-between items-center z-50 relative border-b border-brand-charcoal/10">
        <span>Complimentary Worldwide Standard Shipping on Bags</span>
        <div class="hidden md:flex gap-6">
            <a href="#" class="hover:underline opacity-80 hover:opacity-100 transition-opacity">Sustainability Report</a>
            <a href="#" class="hover:underline opacity-80 hover:opacity-100 transition-opacity">Stockists</a>
        </div>
    </div>

    <!-- MAIN NAVIGATION -->
    <header class="sticky top-0 w-full z-40 transition-all duration-300 bg-brand-sandBg/90 backdrop-blur-md border-b border-brand-charcoal/5">
        <div class="max-w-[1600px] mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
            
            <!-- Left Side: Brand Logo and Burger menu -->
            <div class="flex items-center gap-8">
                <a href="#hero" class="flex items-center gap-3 group">
                    <span class="bg-brand-charcoal text-white font-bold px-3.5 py-1.5 text-lg tracking-widest transition-transform group-hover:scale-105 duration-300">S</span>
                    <span class="text-xs uppercase font-semibold tracking-[0.3em] hidden sm:inline-block">STUTTERHEIM</span>
                </a>
                
                <nav class="hidden lg:flex items-center gap-8 text-xs font-medium tracking-[0.15em] uppercase text-brand-mutedText">
                    <a href="#collections" class="hover:text-brand-charcoal transition-colors relative py-1 group">
                        Collections
                        <span class="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-charcoal transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#specs" class="hover:text-brand-charcoal transition-colors relative py-1 group">
                        Technical Specs
                        <span class="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-charcoal transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#values" class="hover:text-brand-charcoal transition-colors relative py-1 group">
                        Heritage
                        <span class="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-charcoal transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </nav>
            </div>

            <!-- Right Side: Lang, Search, Cart -->
            <div class="flex items-center gap-6 text-xs font-semibold tracking-[0.15em] uppercase">
                <div class="hidden sm:flex items-center gap-2 cursor-pointer hover:opacity-75 transition-opacity">
                    <i class="fa-solid fa-earth-americas text-xs text-brand-mutedText"></i>
                    <span>ENG</span>
                </div>
                
                <button onclick="toggleSearch()" class="hover:text-brand-terracotta transition-colors p-2" aria-label="Search">
                    <i class="fa-solid fa-magnifying-glass text-sm"></i>
                </button>

                <button onclick="toggleWishlist()" class="relative hover:text-brand-terracotta transition-colors p-2" aria-label="Favorites">
                    <i class="fa-regular fa-heart text-sm"></i>
                    <span id="wishlist-badge" class="absolute top-0 right-0 bg-brand-charcoal text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold hidden">0</span>
                </button>

                <!-- Cart Button -->
                <button onclick="toggleCart()" class="relative flex items-center gap-2 border border-brand-charcoal/20 hover:border-brand-charcoal bg-white/40 px-3.5 py-2 transition-all group">
                    <i class="fa-solid fa-bag-shopping text-sm group-hover:text-brand-terracotta transition-colors"></i>
                    <span class="hidden sm:inline text-[10px] tracking-widest font-bold">BAG</span>
                    <span id="cart-count" class="bg-brand-terracotta text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">1</span>
                </button>

                <!-- Mobile Menu Toggle -->
                <button class="lg:hidden p-2 text-brand-charcoal" onclick="toggleMobileMenu()" aria-label="Menu">
                    <i class="fa-solid fa-bars-staggered text-lg"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- MOBILE NAVIGATION MENU -->
    <div id="mobile-menu" class="fixed inset-0 bg-brand-sandBg z-50 flex flex-col justify-between p-8 transform translate-x-full transition-transform duration-500 ease-in-out">
        <div>
            <div class="flex justify-between items-center mb-12">
                <span class="bg-brand-charcoal text-white font-bold px-3 py-1 text-lg tracking-widest">S</span>
                <button onclick="toggleMobileMenu()" class="text-2xl p-2"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <nav class="flex flex-col gap-6 text-2xl font-light tracking-wide text-brand-charcoal">
                <a href="#collections" onclick="toggleMobileMenu()" class="hover:text-brand-terracotta transition-colors">Collections</a>
                <a href="#specs" onclick="toggleMobileMenu()" class="hover:text-brand-terracotta transition-colors">Technical Specs</a>
                <a href="#values" onclick="toggleMobileMenu()" class="hover:text-brand-terracotta transition-colors">Heritage</a>
                <a href="#newsletter" onclick="toggleMobileMenu()" class="hover:text-brand-terracotta transition-colors">Newsletter</a>
            </nav>
        </div>
        <div class="border-t border-brand-charcoal/10 pt-6">
            <p class="text-xs uppercase tracking-widest text-brand-mutedText mb-4">Stockholm, Sweden</p>
            <div class="flex gap-6 text-sm">
                <a href="#" class="hover:text-brand-terracotta transition-colors">INSTAGRAM</a>
                <a href="#" class="hover:text-brand-terracotta transition-colors">FACEBOOK</a>
                <a href="#" class="hover:text-brand-terracotta transition-colors">PINTEREST</a>
            </div>
        </div>
    </div>

    <!-- MAIN IMMERSIVE HERO SECTION (Directly inspired by image visuals with extreme premium touch) -->
    <section id="hero" class="relative overflow-hidden border-b border-brand-charcoal/10">
        
        <!-- Two-column background split directly mimicking the visual system of the uploaded image -->
        <div class="absolute inset-0 flex flex-col md:flex-row pointer-events-none">
            <div id="hero-left-bg" class="w-full md:w-[50%] h-[50%] md:h-full bg-brand-sageDark color-transition"></div>
            <div id="hero-right-bg" class="w-full md:w-[50%] h-[50%] md:h-full bg-brand-sageLight color-transition"></div>
        </div>

        <div class="max-w-[1600px] mx-auto min-h-[calc(100vh-100px)] flex flex-col justify-between relative z-10 p-6 lg:p-12">
            
            <!-- Hero Top Info (Aligning exactly with the image feel) -->
            <div class="flex justify-between items-start w-full">
                <div>
                    <!-- Serial number placeholder in small elegant sans-serif -->
                    <span id="hero-serial" class="text-xs font-mono tracking-widest text-brand-charcoal/50 block mb-1">089</span>
                    <span class="text-[10px] tracking-[0.25em] uppercase text-brand-charcoal/60 font-semibold">CARRYALL COLLECTION</span>
                </div>
                
                <!-- Quick features badge -->
                <div class="hidden md:flex flex-col items-end text-right text-brand-charcoal/70">
                    <span class="text-xs font-bold tracking-widest uppercase">STUTTERHEIM CORE</span>
                    <span class="text-[11px] font-medium opacity-80 mt-1">100% Waterproof Rubberized Cotton Canvas</span>
                </div>
            </div>

            <!-- Central Content Display: Interactive Configurator -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center my-auto py-8">
                
                <!-- Hero Left: Text Content -->
                <div class="lg:col-span-4 z-10 flex flex-col justify-center text-left space-y-6">
                    <div>
                        <h1 id="hero-title" class="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-brand-charcoal font-sans leading-none mb-4">
                            Green<br>backpack
                        </h1>
                        <p id="hero-desc" class="text-sm lg:text-base text-brand-mutedText/90 font-light max-w-sm leading-relaxed">
                            Crafted from rubberized cotton with heavy-duty straps and sand-toned leather details. Built for Nordic rains and city life.
                        </p>
                    </div>

                    <!-- Configurator Presets -->
                    <div class="space-y-3">
                        <span class="text-[10px] font-bold tracking-widest text-brand-charcoal uppercase block">CHOOSE COLOR SYSTEM</span>
                        <div class="flex gap-3">
                            <!-- Sage / Terracotta (Active Preset) -->
                            <button onclick="setBackpackPreset('sage')" id="btn-preset-sage" class="w-9 h-9 rounded-full border-2 border-brand-charcoal p-0.5 transition-all focus:outline-none" title="Sage & Terracotta">
                                <span class="block w-full h-full rounded-full bg-gradient-to-tr from-[#b9c0ae] via-[#b9c0ae] to-[#e65c2b]"></span>
                            </button>
                            <!-- Sand / Charcoal -->
                            <button onclick="setBackpackPreset('sand')" id="btn-preset-sand" class="w-9 h-9 rounded-full border-2 border-transparent p-0.5 hover:border-brand-charcoal/30 transition-all focus:outline-none" title="Sand & Charcoal">
                                <span class="block w-full h-full rounded-full bg-gradient-to-tr from-[#ecefe7] via-[#ecefe7] to-[#141712]"></span>
                            </button>
                            <!-- Ocean Blue / Muted Mustard -->
                            <button onclick="setBackpackPreset('ocean')" id="btn-preset-ocean" class="w-9 h-9 rounded-full border-2 border-transparent p-0.5 hover:border-brand-charcoal/30 transition-all focus:outline-none" title="Ocean & Ochre">
                                <span class="block w-full h-full rounded-full bg-gradient-to-tr from-[#7c95a3] via-[#7c95a3] to-[#dca543]"></span>
                            </button>
                            <!-- Obsidian Black -->
                            <button onclick="setBackpackPreset('obsidian')" id="btn-preset-obsidian" class="w-9 h-9 rounded-full border-2 border-transparent p-0.5 hover:border-brand-charcoal/30 transition-all focus:outline-none" title="Obsidian Black">
                                <span class="block w-full h-full rounded-full bg-gradient-to-tr from-[#2d2e2c] via-[#2d2e2c] to-[#141712]"></span>
                            </button>
                        </div>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 pt-4">
                        <button onclick="addHeroToBag()" class="bg-brand-charcoal text-white hover:bg-brand-terracotta transition-colors duration-300 font-bold text-xs tracking-[0.2em] uppercase py-4 px-8 flex items-center justify-center gap-3">
                            <span>ADD TO BAG</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                        <button onclick="addToWishlist('Stutterheim Backpack', 133)" class="border border-brand-charcoal/30 hover:border-brand-charcoal transition-all text-brand-charcoal font-bold text-xs tracking-[0.2em] uppercase py-4 px-6 flex items-center justify-center gap-2 bg-white/20">
                            <i class="fa-regular fa-heart"></i>
                            <span>WISHLIST</span>
                        </button>
                    </div>
                </div>

                <!-- Hero Center: Scalable, Custom-Color SVG Interactive Backpack (Ensures stunning rendering & performance) -->
                <div class="lg:col-span-5 flex justify-center items-center relative py-6">
                    <!-- Drop Shadow Ambient Element for perfect depth matching -->
                    <div class="absolute w-[80%] h-[15px] bg-brand-charcoal/20 rounded-full blur-xl bottom-8 left-10% pointer-events-none"></div>
                    
                    <div class="relative w-full max-w-[380px] sm:max-w-[420px] ambient-bag">
                        <!-- Custom vector-drawn modular backpack, allows precise dynamic CSS fill styling for premium finish -->
                        <svg id="svg-backpack" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" class="w-full h-auto drop-shadow-2xl">
                            <!-- Background shadow glow -->
                            <ellipse cx="250" cy="565" rx="140" ry="12" fill="rgba(20,23,18,0.18)" />
                            
                            <!-- Main Bag Body Canvas (Sage default) -->
                            <path id="bp-body" class="color-transition" d="M 160 160 Q 250 150 340 160 L 370 500 Q 250 515 130 500 Z" fill="#717a6a" />
                            
                            <!-- Bottom base support panel (Beige / Tan default) -->
                            <path id="bp-bottom" class="color-transition" d="M 130 500 Q 250 515 370 500 L 375 520 Q 250 545 125 520 Z" fill="#bfae98" />
                            
                            <!-- Front Pocket Panel (Signature Terracotta default) -->
                            <path id="bp-pocket" class="color-transition" d="M 180 300 Q 250 295 320 300 L 330 480 Q 250 495 170 480 Z" fill="#e65c2b" />
                            
                            <!-- Roll Top Section Main (Sage/Muted default) -->
                            <path id="bp-rolltop" class="color-transition" d="M 160 160 Q 250 150 340 160 Q 380 140 375 125 L 125 125 Q 120 140 160 160 Z" fill="#586152" />
                            
                            <!-- Strap Loops at top -->
                            <path d="M 215 125 L 215 105 Q 250 95 285 105 L 285 125" fill="none" stroke="#2a2e26" stroke-width="12" stroke-linecap="round" />
                            
                            <!-- Shoulder Straps backing preview -->
                            <path d="M 150 160 L 120 250" fill="none" stroke="#1c2018" stroke-width="14" stroke-linecap="round" />
                            <path d="M 350 160 L 380 250" fill="none" stroke="#1c2018" stroke-width="14" stroke-linecap="round" />
                            
                            <!-- Buckle Strap going down the front middle -->
                            <rect id="bp-center-strap" class="color-transition" x="242" y="110" width="16" height="150" fill="#dfd0c0" rx="4" />
                            
                            <!-- Front pocket vertical stylish zipper line -->
                            <line x1="200" y1="330" x2="200" y2="440" stroke="#141712" stroke-width="5" stroke-linecap="round" stroke-dasharray="1 10" />
                            <!-- Zipper handle color-accent -->
                            <path id="bp-zipper-pull" class="color-transition" d="M 197 325 L 203 325 L 202 345 L 198 345 Z" fill="#bfae98" />

                            <!-- Premium central buckle assembly -->
                            <rect x="235" y="170" width="30" height="25" fill="#2a2f25" rx="4" />
                            <rect x="239" y="174" width="22" height="17" fill="#dfd0c0" rx="2" />
                            <!-- Metallic hook clasp -->
                            <path d="M 243 180 L 257 180 L 250 198 Z" fill="#e5e8df" />
                            
                            <!-- Leather patch label "Stutterheim" custom replica detail -->
                            <rect x="282" y="440" width="25" height="18" fill="#bfae98" rx="2" />
                            <rect x="285" y="443" width="19" height="12" fill="none" stroke="#8d7d65" stroke-width="1" />
                        </svg>
                        
                        <!-- Floating interactive hotspots info -->
                        <div class="absolute top-[24%] left-[10%] group cursor-pointer">
                            <span class="absolute inline-flex h-4 w-4 rounded-full bg-brand-terracotta opacity-75 hotspot-ring"></span>
                            <span class="relative inline-flex rounded-full h-4 w-4 bg-brand-terracotta"></span>
                            <div class="absolute left-6 top-1/2 -translate-y-1/2 bg-white text-brand-charcoal text-[11px] font-bold px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-md tracking-wider border border-brand-charcoal/10">
                                Rubberized Waterproof Canvas
                            </div>
                        </div>

                        <div class="absolute top-[48%] right-[14%] group cursor-pointer">
                            <span class="absolute inline-flex h-4 w-4 rounded-full bg-brand-terracotta opacity-75 hotspot-ring"></span>
                            <span class="relative inline-flex rounded-full h-4 w-4 bg-brand-terracotta"></span>
                            <div class="absolute right-6 top-1/2 -translate-y-1/2 bg-white text-brand-charcoal text-[11px] font-bold px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-md tracking-wider border border-brand-charcoal/10">
                                Double-welded seam technology
                            </div>
                        </div>

                        <div class="absolute bottom-[24%] left-[46%] group cursor-pointer">
                            <span class="absolute inline-flex h-4 w-4 rounded-full bg-brand-terracotta opacity-75 hotspot-ring"></span>
                            <span class="relative inline-flex rounded-full h-4 w-4 bg-brand-terracotta"></span>
                            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-brand-charcoal text-[11px] font-bold px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-md tracking-wider border border-brand-charcoal/10">
                                Signature contrast pocket
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hero Right: Dynamic Stats / Highlights -->
                <div class="lg:col-span-3 lg:pl-8 space-y-8 flex flex-col justify-center">
                    <!-- Price Tag inspired directly by layout -->
                    <div class="border-l-2 border-brand-charcoal pl-4">
                        <span class="text-[10px] tracking-widest text-brand-charcoal/60 uppercase font-bold block">RETAIL PRICE</span>
                        <div class="flex items-baseline gap-2">
                            <span id="hero-price" class="text-4xl font-semibold font-mono text-brand-charcoal">€133</span>
                            <span class="text-xs text-brand-mutedText line-through font-mono">€180</span>
                        </div>
                        <span class="text-[10px] text-brand-terracotta font-semibold mt-1 block">Limited Run Release</span>
                    </div>

                    <!-- Material Highlights list -->
                    <div class="space-y-4">
                        <div class="flex gap-4 items-start">
                            <span class="bg-brand-charcoal/5 p-2 rounded text-brand-charcoal">
                                <i class="fa-solid fa-umbrella text-sm"></i>
                            </span>
                            <div>
                                <h4 class="text-xs font-bold uppercase tracking-wider">IPX6 Waterproof</h4>
                                <p class="text-xs text-brand-mutedText">Withstands severe rain & torrential downpours.</p>
                            </div>
                        </div>

                        <div class="flex gap-4 items-start">
                            <span class="bg-brand-charcoal/5 p-2 rounded text-brand-charcoal">
                                <i class="fa-solid fa-feather-pointed text-sm"></i>
                            </span>
                            <div>
                                <h4 class="text-xs font-bold uppercase tracking-wider">Ergonomic Fit</h4>
                                <p class="text-xs text-brand-mutedText">Specially cushioned straps and breathable canvas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Hero Bottom Navigation bar elements aligning with image -->
            <div class="flex justify-between items-center w-full border-t border-brand-charcoal/10 pt-6">
                <!-- Branding footer inside visual -->
                <span class="text-xs font-bold tracking-[0.2em] text-brand-charcoal uppercase">STUTTERHEIM</span>
                
                <!-- Pagination Dots indicating multi-option sliders -->
                <div class="flex gap-3 items-center">
                    <span id="p-dot-1" class="w-2.5 h-2.5 rounded-full bg-brand-charcoal cursor-pointer transition-all"></span>
                    <span id="p-dot-2" class="w-1.5 h-1.5 rounded-full bg-brand-charcoal/30 cursor-pointer hover:bg-brand-charcoal transition-all"></span>
                    <span id="p-dot-3" class="w-1.5 h-1.5 rounded-full bg-brand-charcoal/30 cursor-pointer hover:bg-brand-charcoal transition-all"></span>
                </div>

                <!-- Social Handles -->
                <div class="hidden md:flex gap-6 text-[10px] font-bold tracking-widest text-brand-charcoal">
                    <a href="https://instagram.com" target="_blank" class="hover:text-brand-terracotta transition-colors">IN</a>
                    <a href="https://facebook.com" target="_blank" class="hover:text-brand-terracotta transition-colors">FB</a>
                    <a href="https://youtube.com" target="_blank" class="hover:text-brand-terracotta transition-colors">YT</a>
                </div>
            </div>
        </div>

        <!-- Float vertical button on the right edge exactly like the 'Next' visual from image -->
        <button onclick="scrollNext()" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-brand-charcoal hover:text-white text-brand-charcoal border-l border-t border-b border-brand-charcoal/15 py-8 px-4 text-xs font-bold tracking-[0.25em] text-vertical uppercase transition-all duration-300 shadow-lg z-20 flex items-center justify-center gap-2">
            <span>Next Collection</span>
            <i class="fa-solid fa-chevron-down text-[9px] mt-1"></i>
        </button>
    </section>

    <!-- SECTION 2: EDITORIAL HERITAGE STORY & SUSTAINABILITY (Adding narrative depth) -->
    <section id="values" class="bg-brand-cream py-20 lg:py-32 px-6 lg:px-12 border-b border-brand-charcoal/10">
        <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            <!-- Story visual (Minimalist sand-toned card block with organic layout) -->
            <div class="lg:col-span-5 relative">
                <!-- Outer minimal decorative border box -->
                <div class="absolute -inset-4 border border-brand-charcoal/10 rounded pointer-events-none"></div>
                
                <div class="bg-brand-sageDark/60 p-8 sm:p-12 text-center relative overflow-hidden group">
                    <span class="text-xs uppercase font-mono text-brand-charcoal/40 block mb-6">EST. 2010 STOCKHOLM</span>
                    <span class="text-[120px] font-serif italic text-brand-charcoal/5 leading-none select-none absolute top-10 left-1/2 -translate-x-1/2">Melancholy</span>
                    <h3 class="text-3xl font-serif text-brand-charcoal mb-4 relative z-10">Swedish Melancholy at its driest.</h3>
                    <p class="text-xs text-brand-mutedText leading-relaxed max-w-sm mx-auto mb-6 relative z-10">
                        Our raincoats and carryalls are designed in Stockholm, inspired by the beautiful Swede tradition of embracing rain instead of running from it.
                    </p>
                    <div class="w-16 h-[1px] bg-brand-charcoal/30 mx-auto"></div>
                </div>
            </div>

            <!-- Narrative copy -->
            <div class="lg:col-span-7 space-y-8">
                <span class="text-xs font-bold tracking-[0.3em] text-brand-terracotta uppercase block">OUR PHILOSOPHY</span>
                <h2 class="text-3xl sm:text-5xl font-serif text-brand-charcoal leading-tight max-w-xl">
                    Waterproof designs shouldn't compromise structural art.
                </h2>
                <div class="h-[1px] bg-brand-charcoal/10 w-full"></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-brand-mutedText">
                    <div class="space-y-2">
                        <h4 class="font-bold text-brand-charcoal text-xs uppercase tracking-wider">Premium Rubberized Canvas</h4>
                        <p class="font-light leading-relaxed">
                            Rather than using flimsy synthetics, we employ heavy-duty rubberized cotton weave. It offers a structured posture that age beautifully over a decade of use.
                        </p>
                    </div>
                    <div class="space-y-2">
                        <h4 class="font-bold text-brand-charcoal text-xs uppercase tracking-wider">Zero Chemical Coating Run-Off</h4>
                        <p class="font-light leading-relaxed">
                            Unlike traditional water repellent sprays, our rubber-infused matrix is completely unified with the yarn, eliminating chemical flaking.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 3: TECHNICAL SPECIFICATIONS & INTERACTIVE EXPLORATION (Deep Dive) -->
    <section id="specs" class="py-20 lg:py-32 px-6 lg:px-12 bg-brand-sandBg">
        <div class="max-w-[1400px] mx-auto">
            
            <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
                <div>
                    <span class="text-xs font-bold tracking-[0.3em] text-brand-mutedText uppercase block mb-2">ANATOMY OF A BAG</span>
                    <h2 class="text-3xl sm:text-4xl font-serif text-brand-charcoal">Precision engineered for the worst downpours.</h2>
                </div>
                <p class="text-sm text-brand-mutedText max-w-md font-light">
                    Every seam, buckle, and thread is designed to keep external wetness out while providing comfortable carry options through structured support.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <!-- Left Details list -->
                <div class="lg:col-span-4 space-y-6 order-2 lg:order-1">
                    <!-- Technical point 1 -->
                    <div class="bg-brand-sandCard hover:bg-brand-cream border border-brand-charcoal/5 p-6 rounded transition-all cursor-pointer group" onclick="highlightSpec(1)">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-xs font-mono text-brand-terracotta">01 / WEATHER SHIELD</span>
                            <i class="fa-solid fa-chevron-right text-[10px] text-brand-mutedText group-hover:translate-x-1 transition-transform"></i>
                        </div>
                        <h3 class="text-sm font-bold uppercase tracking-wider text-brand-charcoal mb-2">Double-Welded Seams</h3>
                        <p class="text-xs text-brand-mutedText leading-relaxed font-light">
                            Instead of standard thread stitching, high frequency heat welding bonds fabric layers into a singular impenetrable membrane.
                        </p>
                    </div>

                    <!-- Technical point 2 -->
                    <div class="bg-brand-sandCard hover:bg-brand-cream border border-brand-charcoal/5 p-6 rounded transition-all cursor-pointer group" onclick="highlightSpec(2)">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-xs font-mono text-brand-terracotta">02 / INTERNALS</span>
                            <i class="fa-solid fa-chevron-right text-[10px] text-brand-mutedText group-hover:translate-x-1 transition-transform"></i>
                        </div>
                        <h3 class="text-sm font-bold uppercase tracking-wider text-brand-charcoal mb-2">Padded Tech Sleeve</h3>
                        <p class="text-xs text-brand-mutedText leading-relaxed font-light">
                            An internal floating pocket holds up to a 16-inch laptop securely, keeping it raised away from the bottom bag base.
                        </p>
                    </div>

                    <!-- Technical point 3 -->
                    <div class="bg-brand-sandCard hover:bg-brand-cream border border-brand-charcoal/5 p-6 rounded transition-all cursor-pointer group" onclick="highlightSpec(3)">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-xs font-mono text-brand-terracotta">03 / COMFORT</span>
                            <i class="fa-solid fa-chevron-right text-[10px] text-brand-mutedText group-hover:translate-x-1 transition-transform"></i>
                        </div>
                        <h3 class="text-sm font-bold uppercase tracking-wider text-brand-charcoal mb-2">Breathable Organic Harness</h3>
                        <p class="text-xs text-brand-mutedText leading-relaxed font-light">
                            High-density cotton canvas webbing shoulder straps ensure weight is distributed across the shoulders without chafing.
                        </p>
                    </div>
                </div>

                <!-- Center Interactive Interactive Diagram Showcase -->
                <div class="lg:col-span-5 flex justify-center order-1 lg:order-2">
                    <div class="relative bg-brand-cream/80 border border-brand-charcoal/10 p-8 rounded-lg w-full max-w-[420px] aspect-square flex items-center justify-center">
                        <div class="absolute inset-0 bg-gradient-to-tr from-brand-sageDark/20 to-transparent pointer-events-none"></div>
                        
                        <!-- Minimal outline of bag for clean technical drawing -->
                        <div class="w-[80%] opacity-90 transition-all duration-500" id="spec-diagram-target">
                            <!-- Inner spec visualization changes based on user selection -->
                            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
                                <!-- Base Grid Background -->
                                <defs>
                                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(20,23,18,0.04)" stroke-width="1" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                                
                                <!-- Core Blueprint Outline of Bag -->
                                <path d="M 130 110 Q 200 100 270 110 L 295 340 Q 200 355 105 340 Z" fill="none" stroke="#656c5e" stroke-width="3" stroke-dasharray="2 2" />
                                <path d="M 140 200 L 260 200 L 260 320 L 140 320 Z" fill="none" stroke="#e65c2b" stroke-width="1.5" id="spec-highlight-pocket" class="transition-all duration-300 opacity-40" />
                                
                                <!-- Floating tech lines showing construction -->
                                <g id="tech-indicator-line">
                                    <line x1="105" y1="200" x2="200" y2="200" stroke="#141712" stroke-width="1.5" stroke-dasharray="4 4"/>
                                    <circle cx="200" cy="200" r="4" fill="#141712" />
                                </g>

                                <text x="10" y="30" class="text-[10px] font-mono fill-brand-charcoal tracking-wider">SCHEMATIC V.42</text>
                            </svg>
                        </div>

                        <!-- Technical Spec Overlay Notification -->
                        <div id="spec-info-card" class="absolute bottom-4 left-4 right-4 bg-brand-charcoal text-brand-cream text-xs p-4 rounded-md shadow-lg transition-all transform translate-y-0 opacity-100">
                            <span class="font-mono text-brand-terracotta block uppercase text-[10px] mb-1">CURRENTLY VIEWING</span>
                            <h4 id="spec-info-title" class="font-bold mb-1">Double-Welded Seams</h4>
                            <p id="spec-info-desc" class="opacity-80 text-[11px]">Industrial-grade high frequency sonic welding yields unmatched water resistance.</p>
                        </div>
                    </div>
                </div>

                <!-- Right Quick Specifications Box -->
                <div class="lg:col-span-3 space-y-8 order-3">
                    <div class="border-t border-brand-charcoal/15 pt-6">
                        <span class="text-[10px] font-bold tracking-widest text-brand-charcoal uppercase block mb-3">DIMENSIONS</span>
                        <div class="space-y-2 text-xs">
                            <div class="flex justify-between border-b border-brand-charcoal/5 py-1">
                                <span class="text-brand-mutedText">Height:</span>
                                <span class="font-bold">48 cm (63 cm unrolled)</span>
                            </div>
                            <div class="flex justify-between border-b border-brand-charcoal/5 py-1">
                                <span class="text-brand-mutedText">Width:</span>
                                <span class="font-bold">32 cm</span>
                            </div>
                            <div class="flex justify-between border-b border-brand-charcoal/5 py-1">
                                <span class="text-brand-mutedText">Depth:</span>
                                <span class="font-bold">14 cm</span>
                            </div>
                            <div class="flex justify-between py-1">
                                <span class="text-brand-mutedText">Capacity:</span>
                                <span class="font-bold">22 Liters</span>
                            </div>
                        </div>
                    </div>

                    <div class="border-t border-brand-charcoal/15 pt-6">
                        <span class="text-[10px] font-bold tracking-widest text-brand-charcoal uppercase block mb-3">MATERIALS</span>
                        <div class="space-y-2 text-xs">
                            <div class="flex justify-between border-b border-brand-charcoal/5 py-1">
                                <span class="text-brand-mutedText">Face Fabric:</span>
                                <span class="font-bold">PVC-free PU / Cotton</span>
                            </div>
                            <div class="flex justify-between border-b border-brand-charcoal/5 py-1">
                                <span class="text-brand-mutedText">Hardware:</span>
                                <span class="font-bold">Zinc alloy clip / Matte</span>
                            </div>
                            <div class="flex justify-between py-1">
                                <span class="text-brand-mutedText">Straps:</span>
                                <span class="font-bold">High-durability webbing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 4: INTERACTIVE SHOWCASE OF CURATED PRODUCTS -->
    <section id="collections" class="py-20 lg:py-32 px-6 lg:px-12 bg-brand-cream border-t border-b border-brand-charcoal/10">
        <div class="max-w-[1400px] mx-auto">
            
            <!-- Collection Filter Section Header -->
            <div class="flex flex-col md:flex-row justify-between items-baseline gap-6 mb-16 border-b border-brand-charcoal/10 pb-6">
                <div>
                    <span class="text-xs font-bold tracking-[0.3em] text-brand-mutedText uppercase block mb-2">CURATED SERIES</span>
                    <h2 class="text-3xl sm:text-5xl font-serif text-brand-charcoal">The Waterproof Carryalls</h2>
                </div>
                
                <!-- Category Filter Pills -->
                <div class="flex flex-wrap gap-2 text-xs font-bold tracking-wider uppercase">
                    <button onclick="filterProducts('all')" class="bg-brand-charcoal text-white py-2 px-5 transition-all">All Objects</button>
                    <button onclick="filterProducts('bags')" class="border border-brand-charcoal/20 hover:border-brand-charcoal py-2 px-5 transition-all">Bags</button>
                    <button onclick="filterProducts('apparel')" class="border border-brand-charcoal/20 hover:border-brand-charcoal py-2 px-5 transition-all">Apparel</button>
                </div>
            </div>

            <!-- Dynamic Grid Items -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="product-grid">
                
                <!-- Product Card 1: Rain Jacket matching visual palette -->
                <div class="product-item group bg-brand-sandBg p-6 border border-brand-charcoal/5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-brand-charcoal/15" data-category="apparel">
                    <div class="relative w-full aspect-[4/5] bg-brand-sageDark/30 rounded flex items-center justify-center p-8 overflow-hidden">
                        <span class="absolute top-4 left-4 bg-brand-charcoal text-white text-[9px] px-2.5 py-1 tracking-widest uppercase">Best Seller</span>
                        
                        <!-- Visual representation of rain jacket via high-end responsive SVG -->
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-[70%] h-auto group-hover:scale-105 transition-transform duration-500">
                            <path d="M 50 40 L 150 40 L 170 140 L 150 180 L 100 185 L 50 180 L 30 140 Z" fill="#b9c0ae" />
                            <path d="M 100 40 L 100 185" stroke="#141712" stroke-width="2" />
                            <!-- Collar -->
                            <path d="M 80 40 Q 100 60 120 40" fill="none" stroke="#141712" stroke-width="3" />
                            <!-- Pockets -->
                            <rect x="60" y="110" width="25" height="25" fill="#141712" rx="2" />
                            <rect x="115" y="110" width="25" height="25" fill="#141712" rx="2" />
                        </svg>

                        <!-- Hover quick view -->
                        <button onclick="openProductQuickview('Mosebacke Raincoat', 250, 'Muted Sage', 'The classic A-line raincoat silhouette designed specifically for a drape and structural defense against persistent rain.')" class="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-brand-charcoal text-[11px] font-bold py-3 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                            Quick View
                        </button>
                    </div>
                    <div class="pt-6 flex justify-between items-start">
                        <div>
                            <span class="text-xs text-brand-mutedText uppercase font-mono tracking-widest">001 / COATS</span>
                            <h3 class="font-bold text-brand-charcoal mt-1 group-hover:text-brand-terracotta transition-colors">Mosebacke Raincoat</h3>
                            <span class="text-xs text-brand-mutedText">Muted Sage</span>
                        </div>
                        <div class="text-right">
                            <span class="font-mono font-bold text-sm block">€250</span>
                            <button onclick="addProductToBag('Mosebacke Raincoat', 250, '#b9c0ae')" class="text-[10px] text-brand-terracotta hover:underline font-bold mt-2 uppercase tracking-wider block">Add +</button>
                        </div>
                    </div>
                </div>

                <!-- Product Card 2: Rolltop Pack variant -->
                <div class="product-item group bg-brand-sandBg p-6 border border-brand-charcoal/5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-brand-charcoal/15" data-category="bags">
                    <div class="relative w-full aspect-[4/5] bg-brand-sageDark/30 rounded flex items-center justify-center p-8 overflow-hidden">
                        <span class="absolute top-4 left-4 bg-brand-terracotta text-white text-[9px] px-2.5 py-1 tracking-widest uppercase">Iconic</span>
                        
                        <!-- Visual representation of rain jacket via high-end responsive SVG -->
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-[60%] h-auto group-hover:scale-105 transition-transform duration-500">
                            <path d="M 60 50 Q 100 40 140 50 L 155 160 Q 100 170 45 160 Z" fill="#2d2e2c" />
                            <rect x="80" y="80" width="40" height="50" fill="#e65c2b" />
                            <line x1="100" y1="40" x2="100" y2="160" stroke="#141712" stroke-width="2" />
                        </svg>

                        <!-- Hover quick view -->
                        <button onclick="openProductQuickview('Rain Backpack Mini', 133, 'Obsidian Rust', 'The compact version of our premium roll-top commuter system, offering a tight minimalist fit ideal for urban bike transits.')" class="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-brand-charcoal text-[11px] font-bold py-3 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                            Quick View
                        </button>
                    </div>
                    <div class="pt-6 flex justify-between items-start">
                        <div>
                            <span class="text-xs text-brand-mutedText uppercase font-mono tracking-widest">002 / LUGGAGE</span>
                            <h3 class="font-bold text-brand-charcoal mt-1 group-hover:text-brand-terracotta transition-colors">Rain Backpack Mini</h3>
                            <span class="text-xs text-brand-mutedText">Obsidian & Rust</span>
                        </div>
                        <div class="text-right">
                            <span class="font-mono font-bold text-sm block">€133</span>
                            <button onclick="addProductToBag('Rain Backpack Mini', 133, '#e65c2b')" class="text-[10px] text-brand-terracotta hover:underline font-bold mt-2 uppercase tracking-wider block">Add +</button>
                        </div>
                    </div>
                </div>

                <!-- Product Card 3: Chelsea Rain Boots matching palette -->
                <div class="product-item group bg-brand-sandBg p-6 border border-brand-charcoal/5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-brand-charcoal/15" data-category="apparel">
                    <div class="relative w-full aspect-[4/5] bg-brand-sageDark/30 rounded flex items-center justify-center p-8 overflow-hidden">
                        
                        <!-- Visual representation of rain boot via high-end responsive SVG -->
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-[65%] h-auto group-hover:scale-105 transition-transform duration-500">
                            <!-- Minimal boot silhouette -->
                            <path d="M 60 50 L 100 50 L 100 120 L 150 145 L 145 160 L 50 160 L 50 90 Z" fill="#141712" />
                            <path d="M 50 150 L 148 150" stroke="#e65c2b" stroke-width="4" />
                        </g>
                        </svg>

                        <!-- Hover quick view -->
                        <button onclick="openProductQuickview('Chelsea Rain Boots', 160, 'Obsidian Black', 'Classic silhouette redefined with thick organic natural rubber and vulcanized tread block sole patterns.')" class="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-brand-charcoal text-[11px] font-bold py-3 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                            Quick View
                        </button>
                    </div>
                    <div class="pt-6 flex justify-between items-start">
                        <div>
                            <span class="text-xs text-brand-mutedText uppercase font-mono tracking-widest">003 / FOOTWEAR</span>
                            <h3 class="font-bold text-brand-charcoal mt-1 group-hover:text-brand-terracotta transition-colors">Chelsea Rain Boots</h3>
                            <span class="text-xs text-brand-mutedText">Obsidian Black</span>
                        </div>
                        <div class="text-right">
                            <span class="font-mono font-bold text-sm block">€160</span>
                            <button onclick="addProductToBag('Chelsea Rain Boots', 160, '#141712')" class="text-[10px] text-brand-terracotta hover:underline font-bold mt-2 uppercase tracking-wider block">Add +</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION 5: CUSTOMER EDITORIAL PROOF & REVIEWS -->
    <section class="py-20 lg:py-32 px-6 lg:px-12 bg-brand-charcoal text-brand-cream relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-tr from-brand-sageDark/10 to-transparent pointer-events-none"></div>
        
        <div class="max-w-[1200px] mx-auto text-center space-y-12 relative z-10">
            <span class="text-xs font-bold tracking-[0.3em] text-brand-terracotta uppercase block">GLOBAL RECOGNITION</span>
            
            <blockquote class="text-2xl sm:text-4xl lg:text-5xl font-serif max-w-4xl mx-auto leading-snug">
                "Stutterheim manages to take the functional and practical rain gear and elevate it to a minimalist architectural sculpture."
            </blockquote>

            <div class="w-16 h-[1.5px] bg-brand-terracotta mx-auto"></div>

            <div class="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 text-xs tracking-widest uppercase">
                <div class="text-center">
                    <span class="text-brand-terracotta font-mono font-bold text-xl block mb-2">9.8 / 10</span>
                    <span class="opacity-60">Highsnobiety</span>
                </div>
                <div class="text-center">
                    <span class="text-brand-terracotta font-mono font-bold text-xl block mb-2">GOLD WINNER</span>
                    <span class="opacity-60">Swedish Design Award</span>
                </div>
                <div class="text-center">
                    <span class="text-brand-terracotta font-mono font-bold text-xl block mb-2">100% GREEN</span>
                    <span class="opacity-60">OEKO-TEX Certified</span>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 6: PREMIUM CTA & NEWSLETTER (The visual signoff) -->
    <section id="newsletter" class="py-20 lg:py-32 px-6 lg:px-12 bg-brand-sandBg">
        <div class="max-w-[1200px] mx-auto border-t border-brand-charcoal/15 pt-20">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div class="lg:col-span-6 space-y-4">
                    <span class="text-[10px] font-bold tracking-[0.3em] text-brand-mutedText uppercase block">SUBSCRIBE FOR RELEASES</span>
                    <h2 class="text-3xl sm:text-4xl font-serif text-brand-charcoal">Join the inner circle of Nordic design.</h2>
                    <p class="text-xs text-brand-mutedText font-light max-w-md leading-relaxed">
                        Get advanced warning on curated small-batch bag designs, collaborative rainwear items, and our archival end-of-season drops. No noise, just heritage.
                    </p>
                </div>

                <!-- Premium inputs matching luxury aesthetics -->
                <div class="lg:col-span-6">
                    <form onsubmit="handleSubscribe(event)" class="space-y-4">
                        <div class="flex flex-col sm:flex-row gap-2">
                            <input type="email" placeholder="YOUR EMAIL ADDRESS" required class="flex-grow bg-white border border-brand-charcoal/15 focus:border-brand-charcoal focus:outline-none p-4 text-xs tracking-wider placeholder:text-brand-mutedText/60">
                            <button type="submit" class="bg-brand-charcoal hover:bg-brand-terracotta text-white font-bold text-xs tracking-[0.2em] uppercase py-4 px-8 transition-colors duration-300">
                                JOIN
                            </button>
                        </div>
                        <p class="text-[10px] text-brand-mutedText/75">
                            By subscribing, you agree to our privacy conditions. You can withdraw anytime.
                        </p>
                    </form>
                </div>

            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-brand-cream py-16 px-6 lg:px-12 border-t border-brand-charcoal/10 text-brand-mutedText">
        <div class="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
            
            <div class="col-span-2 space-y-4">
                <span class="bg-brand-charcoal text-white font-bold px-3 py-1.5 text-lg tracking-widest inline-block">S</span>
                <p class="text-xs font-light max-w-xs leading-relaxed">
                    Stutterheim rainwear is crafted utilizing the highest quality Swedish engineering, offering structural minimalist items built to stand testing environments.
                </p>
                <p class="text-[11px] opacity-75">&copy; 2026 STUTTERHEIM. All Rights Reserved.</p>
            </div>

            <div class="space-y-3">
                <h4 class="text-xs font-bold uppercase tracking-wider text-brand-charcoal">Collections</h4>
                <ul class="space-y-2 text-xs font-light">
                    <li><a href="#" class="hover:text-brand-charcoal transition-colors">Raincoats</a></li>
                    <li><a href="#" class="hover:text-brand-charcoal transition-colors">Roll-Top Bags</a></li>
                    <li><a href="#" class="hover:text-brand-charcoal transition-colors">Waterproof Hats</a></li>
                    <li><a href="#" class="hover:text-brand-charcoal transition-colors">The Stockholm Classic</a></li>
                </ul>
            </div>

            <div class="space-y-3">
                <h4 class="text-xs font-bold uppercase tracking-wider text-brand-charcoal">Support</h4>
                <ul class="space-y-2 text-xs font-light">
                    <li><a href="#" class="hover:text-brand-charcoal transition-colors">Shipping & Returns</a></li>
                    <li><a href="#" class="hover:text-brand-charcoal transition-colors">Garment Care</a></li>
                    <li><a href="#" class="hover:text-brand-charcoal transition-colors">Warranty & Repairs</a></li>
                    <li><a href="#" class="hover:text-brand-charcoal transition-colors">Contact Service</a></li>
                </ul>
            </div>

            <div class="space-y-3">
                <h4 class="text-xs font-bold uppercase tracking-wider text-brand-charcoal">HQ Address</h4>
                <p class="text-xs font-light leading-relaxed">
                    Stutterheim Ateljé<br>
                    Södermalmsallén 36<br>
                    118 28 Stockholm<br>
                    Sweden
                </p>
            </div>
        </div>
    </footer>


    <!-- INTERACTIVE CART DRAWER (Slide Out Panel) -->
    <div id="cart-drawer" class="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col justify-between border-l border-brand-charcoal/10">
        <!-- Cart Header -->
        <div class="p-6 border-b border-brand-charcoal/10 flex justify-between items-center bg-brand-cream">
            <div class="flex items-center gap-3">
                <i class="fa-solid fa-bag-shopping text-brand-charcoal text-lg"></i>
                <h3 class="font-bold text-xs uppercase tracking-[0.2em] text-brand-charcoal">YOUR CARRYALL BAG</h3>
            </div>
            <button onclick="toggleCart()" class="text-brand-charcoal hover:text-brand-terracotta p-2" aria-label="Close Cart">
                <i class="fa-solid fa-xmark text-lg"></i>
            </button>
        </div>

        <!-- Cart Items container -->
        <div class="flex-grow overflow-y-auto p-6 space-y-6" id="cart-items-container">
            <!-- Dynamically populated cart items go here -->
            <div class="flex gap-4 border-b border-brand-charcoal/5 pb-4">
                <div class="w-16 h-16 bg-brand-sageDark/30 rounded flex items-center justify-center">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-10 h-auto">
                        <path d="M 60 50 Q 100 40 140 50 L 155 160 Q 100 170 45 160 Z" fill="#717a6a" />
                    </svg>
                </div>
                <div class="flex-grow">
                    <div class="flex justify-between font-bold text-xs uppercase tracking-wider">
                        <span>Green Backpack (Sage)</span>
                        <span>€133</span>
                    </div>
                    <p class="text-[11px] text-brand-mutedText mt-1 font-mono">Qty: 1 — Standard Variant</p>
                    <button class="text-[10px] text-red-500 hover:underline mt-2 uppercase tracking-widest font-bold">Remove</button>
                </div>
            </div>
        </div>

        <!-- Cart Footer -->
        <div class="p-6 bg-brand-cream border-t border-brand-charcoal/10 space-y-4">
            <div class="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span>ESTIMATED TOTAL</span>
                <span id="cart-total" class="font-mono text-sm">€133</span>
            </div>
            <p class="text-[10px] text-brand-mutedText">Taxes and free shipping computed at the checkout panel.</p>
            <button onclick="triggerCheckout()" class="w-full bg-brand-charcoal hover:bg-brand-terracotta text-white font-bold text-xs tracking-[0.25em] py-4 uppercase transition-colors duration-300">
                PROCEED TO CHECKOUT
            </button>
        </div>
    </div>


    <!-- PRODUCT QUICK VIEW MODAL (Minimalist Pop-up) -->
    <div id="quickview-modal" class="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none transition-all duration-300">
        <div class="bg-brand-sandBg max-w-2xl w-full border border-brand-charcoal/20 relative rounded-md overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <!-- Modal Close -->
            <button onclick="closeQuickview()" class="absolute top-4 right-4 text-brand-charcoal hover:text-brand-terracotta p-2 z-10">
                <i class="fa-solid fa-xmark text-lg"></i>
            </button>

            <!-- Product visual -->
            <div class="md:w-1/2 bg-brand-sageDark/40 flex items-center justify-center p-8">
                <div id="modal-svg-container" class="w-[75%]">
                    <!-- Target dynamic SVG graphic -->
                </div>
            </div>

            <!-- Product Details -->
            <div class="md:w-1/2 p-8 flex flex-col justify-between">
                <div class="space-y-4">
                    <span id="modal-subtitle" class="text-xs uppercase font-mono tracking-widest text-brand-mutedText">001 / COATS</span>
                    <h3 id="modal-title" class="text-2xl font-serif text-brand-charcoal">Mosebacke Raincoat</h3>
                    <div id="modal-price" class="text-lg font-mono font-bold text-brand-charcoal">€250</div>
                    <p id="modal-desc" class="text-xs text-brand-mutedText font-light leading-relaxed">
                        The signature A-line silhouette that resists downpours effortlessly while holding classic style structure.
                    </p>
                </div>

                <div class="pt-6 space-y-3">
                    <button onclick="addModalProductToCart()" class="w-full bg-brand-charcoal hover:bg-brand-terracotta text-white font-bold text-xs tracking-[0.2em] py-3 uppercase transition-colors">
                        Add to bag
                    </button>
                    <button onclick="closeQuickview()" class="w-full border border-brand-charcoal/20 hover:border-brand-charcoal text-brand-charcoal font-bold text-[10px] tracking-[0.2em] py-2 uppercase transition-all bg-white/40">
                        Continue browsing
                    </button>
                </div>
            </div>
        </div>
    </div>


    <!-- TOAST POP-UP (In-frame user message indicator) -->
    <div id="toast" class="fixed bottom-6 left-6 bg-brand-charcoal text-white text-xs px-6 py-4 shadow-2xl z-50 border border-brand-terracotta/20 transform translate-y-12 opacity-0 pointer-events-none transition-all duration-300 flex items-center gap-3">
        <i class="fa-solid fa-circle-check text-brand-terracotta"></i>
        <span id="toast-message" class="tracking-wider">Product added to carryall bag.</span>
    </div>

    <!-- MAIN JAVASCRIPT APP LOGIC & DESIGN CONTROLLER -->
    <script>
        // Reactive App State
        let currentPreset = 'sage';
        let cart = [
            { id: 'Stutterheim Green Backpack', title: 'Green backpack', price: 133, color: 'Sage & Terracotta', qty: 1, svgColor: '#717a6a' }
        ];
        let wishlist = [];
        let mobileMenuOpen = false;
        let cartOpen = false;
        let activeModalProduct = null;

        // Interactive Design Configurator presets
        const presets = {
            sage: {
                title: "Green<br>backpack",
                desc: "Crafted from rubberized cotton with heavy-duty straps and sand-toned leather details. Built for Nordic rains and city life.",
                serial: "089",
                price: "€133",
                bgLeft: "#b9c0ae", // Warm olive sage
                bgRight: "#d5d9cc", // Pale sage grey
                // Backpack SVG fills
                bpBody: "#717a6a",
                bpBottom: "#bfae98",
                bpPocket: "#e65c2b",
                bpCenterStrap: "#dfd0c0",
                bpZipperPull: "#bfae98"
            },
            sand: {
                title: "Sand<br>backpack",
                desc: "Natural sand elements blended with high-frequency welded charcoal seams. Beautifully subtle, highly functional commuting block.",
                serial: "102",
                price: "€145",
                bgLeft: "#ecefe7", // Bright Sand gray
                bgRight: "#b9c0ae", // Sage contrast
                // Backpack SVG fills
                bpBody: "#ecefe7",
                bpBottom: "#2d2e2c",
                bpPocket: "#141712",
                bpCenterStrap: "#e65c2b",
                bpZipperPull: "#ecefe7"
            },
            ocean: {
                title: "Nordic<br>Ocean pack",
                desc: "Inspired by the deeper Baltic Sea hues. Complemented by muted mustard ochre details for a high-contrast vintage nautical appearance.",
                serial: "145",
                price: "€150",
                bgLeft: "#7c95a3", // Ocean Blue
                bgRight: "#e5e8df", // Calm sand
                // Backpack SVG fills
                bpBody: "#536d7e",
                bpBottom: "#dca543",
                bpPocket: "#253440",
                bpCenterStrap: "#dca543",
                bpZipperPull: "#536d7e"
            },
            obsidian: {
                title: "Obsidian<br>Blackout",
                desc: "Complete stealth waterproof design. Featuring matte vulcanized elements for zero reflection in harsh conditions.",
                serial: "020",
                price: "€160",
                bgLeft: "#2d2e2c", // Very dark charcoal
                bgRight: "#141712", // Pure soft dark
                // Backpack SVG fills
                bpBody: "#141712",
                bpBottom: "#2d2e2c",
                bpPocket: "#212220",
                bpCenterStrap: "#2d2e2c",
                bpZipperPull: "#141712"
            }
        };

        // Initialize state on load
        window.addEventListener('load', () => {
            setBackpackPreset('sage');
            updateCartUI();
        });

        // Configures the hero backpack SVG and background colors
        function setBackpackPreset(key) {
            currentPreset = key;
            const data = presets[key];
            if (!data) return;

            // Animate backgrounds smoothly
            document.getElementById('hero-left-bg').style.backgroundColor = data.bgLeft;
            document.getElementById('hero-right-bg').style.backgroundColor = data.bgRight;

            // Change copy with fade transition
            const titleEl = document.getElementById('hero-title');
            const descEl = document.getElementById('hero-desc');
            const serialEl = document.getElementById('hero-serial');
            const priceEl = document.getElementById('hero-price');

            titleEl.style.opacity = 0;
            descEl.style.opacity = 0;
            
            setTimeout(() => {
                titleEl.innerHTML = data.title;
                descEl.innerText = data.desc;
                serialEl.innerText = data.serial;
                priceEl.innerText = data.price;

                titleEl.style.opacity = 1;
                descEl.style.opacity = 1;
            }, 250);

            // Set specific parts on the SVG illustration with transition properties
            document.getElementById('bp-body').setAttribute('fill', data.bpBody);
            document.getElementById('bp-bottom').setAttribute('fill', data.bpBottom);
            document.getElementById('bp-pocket').setAttribute('fill', data.bpPocket);
            document.getElementById('bp-center-strap').setAttribute('fill', data.bpCenterStrap);
            document.getElementById('bp-zipper-pull').setAttribute('fill', data.bpZipperPull);

            // Update selector button active state indicator borders
            const presetButtons = ['sage', 'sand', 'ocean', 'obsidian'];
            presetButtons.forEach(p => {
                const btn = document.getElementById(`btn-preset-${p}`);
                if (p === key) {
                    btn.classList.add('border-brand-charcoal');
                    btn.classList.remove('border-transparent');
                } else {
                    btn.classList.remove('border-brand-charcoal');
                    btn.classList.add('border-transparent');
                }
            });

            // Update page pagination dots
            document.getElementById('p-dot-1').className = `w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${key === 'sage' ? 'bg-brand-charcoal' : 'bg-brand-charcoal/30'}`;
            document.getElementById('p-dot-2').className = `w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${key === 'sand' ? 'bg-brand-charcoal' : 'bg-brand-charcoal/30'}`;
            document.getElementById('p-dot-3').className = `w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${key === 'ocean' || key === 'obsidian' ? 'bg-brand-charcoal' : 'bg-brand-charcoal/30'}`;
        }

        // Add configured Hero product directly into shopping cart
        function addHeroToBag() {
            const data = presets[currentPreset];
            const cleanPrice = parseInt(data.price.replace('€', ''));
            const name = `${currentPreset.charAt(0).toUpperCase() + currentPreset.slice(1)} Backpack`;
            
            addProductToBag(name, cleanPrice, data.bpBody);
        }

        // Push item into functional dynamic cart array
        function addProductToBag(title, price, fill) {
            const id = `Stutterheim-${title}`;
            const existing = cart.find(item => item.id === id);

            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({
                    id,
                    title,
                    price,
                    color: currentPreset,
                    qty: 1,
                    svgColor: fill
                });
            }

            updateCartUI();
            showToast(`Added ${title} to your Carryall Bag!`);
            // Highlight dynamic cart open
            setTimeout(() => { toggleCart(true); }, 500);
        }

        // Redraw dynamic cart items
        function updateCartUI() {
            const container = document.getElementById('cart-items-container');
            const countBadge = document.getElementById('cart-count');
            const totalEl = document.getElementById('cart-total');

            container.innerHTML = '';
            let total = 0;
            let totalCount = 0;

            cart.forEach(item => {
                total += (item.price * item.qty);
                totalCount += item.qty;

                const itemDiv = document.createElement('div');
                itemDiv.className = 'flex gap-4 border-b border-brand-charcoal/5 pb-4';
                itemDiv.innerHTML = `
                    <div class="w-16 h-16 bg-brand-sageDark/20 rounded flex items-center justify-center p-2">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-10 h-auto">
                            <rect width="200" height="200" fill="transparent" />
                            <circle cx="100" cy="100" r="75" fill="${item.svgColor || '#717a6a'}" />
                        </svg>
                    </div>
                    <div class="flex-grow">
                        <div class="flex justify-between font-bold text-xs uppercase tracking-wider">
                            <span>${item.title}</span>
                            <span>€${item.price}</span>
                        </div>
                        <div class="flex justify-between items-center mt-2">
                            <p class="text-[11px] text-brand-mutedText font-mono">Qty: ${item.qty}</p>
                            <button onclick="removeFromCart('${item.id}')" class="text-[10px] text-brand-terracotta hover:underline font-semibold uppercase tracking-wider">Remove</button>
                        </div>
                    </div>
                `;
                container.appendChild(itemDiv);
            });

            if (cart.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-12 text-brand-mutedText">
                        <i class="fa-solid fa-box-open text-3xl mb-4 opacity-30"></i>
                        <p class="text-xs uppercase tracking-widest">Your bag is currently empty</p>
                    </div>
                `;
            }

            countBadge.innerText = totalCount;
            totalEl.innerText = `€${total}`;
        }

        // Removals from cart
        function removeFromCart(itemId) {
            cart = cart.filter(item => item.id !== itemId);
            updateCartUI();
            showToast("Item removed from bag.");
        }

        // Trigger dynamic action banner notification toast
        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = message;
            toast.className = "fixed bottom-6 left-6 bg-brand-charcoal text-white text-xs px-6 py-4 shadow-2xl z-50 border border-brand-terracotta/20 transform translate-y-0 opacity-100 transition-all duration-300 flex items-center gap-3";
            
            setTimeout(() => {
                toast.className = "fixed bottom-6 left-6 bg-brand-charcoal text-white text-xs px-6 py-4 shadow-2xl z-50 border border-brand-terracotta/20 transform translate-y-12 opacity-0 pointer-events-none transition-all duration-300 flex items-center gap-3";
            }, 3000);
        }

        // Open/Close Cart Drawer Panel
        function toggleCart(forceState = null) {
            const drawer = document.getElementById('cart-drawer');
            if (forceState !== null) {
                cartOpen = forceState;
            } else {
                cartOpen = !cartOpen;
            }

            if (cartOpen) {
                drawer.classList.remove('translate-x-full');
            } else {
                drawer.classList.add('translate-x-full');
            }
        }

        // Open/Close Mobile Overlay Navigation Menu
        function toggleMobileMenu() {
            mobileMenuOpen = !mobileMenuOpen;
            const menu = document.getElementById('mobile-menu');
            if (mobileMenuOpen) {
                menu.classList.remove('translate-x-full');
            } else {
                menu.classList.add('translate-x-full');
            }
        }

        // Dynamic Filtering on Collections (Bags vs Apparel)
        function filterProducts(category) {
            const items = document.querySelectorAll('.product-item');
            items.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'flex';
                    item.style.opacity = '1';
                } else {
                    item.style.display = 'none';
                    item.style.opacity = '0';
                }
            });

            // Toggle category active buttons aesthetics
            const filterButtons = document.querySelectorAll('#collections button');
            filterButtons.forEach(btn => {
                if (btn.innerText.toLowerCase().includes(category)) {
                    btn.className = "bg-brand-charcoal text-white py-2 px-5 transition-all";
                } else {
                    btn.className = "border border-brand-charcoal/20 hover:border-brand-charcoal py-2 px-5 transition-all";
                }
            });
        }

        // Open product details in modal popup window
        function openProductQuickview(title, price, color, desc) {
            activeModalProduct = { title, price, color, desc };
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-price').innerText = `€${price}`;
            document.getElementById('modal-subtitle').innerText = `STUTTERHEIM / ${color.toUpperCase()}`;
            document.getElementById('modal-desc').innerText = desc;

            // Generate clean representative dynamic SVG element based on product context
            let innerSvg = "";
            if (title.includes('Raincoat')) {
                innerSvg = `
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
                        <path d="M 50 40 L 150 40 L 170 140 L 150 180 L 100 185 L 50 180 Z" fill="#b9c0ae" />
                        <path d="M 100 40 L 100 185" stroke="#141712" stroke-width="2" />
                    </svg>
                `;
            } else if (title.includes('Backpack')) {
                innerSvg = `
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
                        <path d="M 60 50 Q 100 40 140 50 L 155 160 Q 100 170 45 160 Z" fill="#141712" />
                        <rect x="80" y="80" width="40" height="50" fill="#e65c2b" />
                    </svg>
                `;
            } else {
                innerSvg = `
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
                        <path d="M 60 50 L 100 50 L 100 120 L 150 145 L 145 160 L 50 160 L 50 90 Z" fill="#141712" />
                        <path d="M 50 150 L 148 150" stroke="#e65c2b" stroke-width="4" />
                    </svg>
                `;
            }

            document.getElementById('modal-svg-container').innerHTML = innerSvg;

            const modal = document.getElementById('quickview-modal');
            modal.classList.remove('pointer-events-none', 'opacity-0');
            modal.classList.add('opacity-100');
        }

        // Close product details modal popup window
        function closeQuickview() {
            const modal = document.getElementById('quickview-modal');
            modal.classList.add('opacity-0', 'pointer-events-none');
            modal.classList.remove('opacity-100');
        }

        // Add currently viewed modal product into standard shopping cart
        function addModalProductToCart() {
            if (activeModalProduct) {
                addProductToBag(activeModalProduct.title, activeModalProduct.price, '#717a6a');
                closeQuickview();
            }
        }

        // Add item to custom floating wishlist array
        function addToWishlist(itemName, itemPrice) {
            const itemExists = wishlist.find(item => item === itemName);
            if (!itemExists) {
                wishlist.push(itemName);
                document.getElementById('wishlist-badge').innerText = wishlist.length;
                document.getElementById('wishlist-badge').classList.remove('hidden');
                showToast(`Saved "${itemName}" to your luxury wishlist!`);
            } else {
                showToast(`"${itemName}" is already saved.`);
            }
        }

        // Simulate checkout response popup
        function triggerCheckout() {
            if (cart.length === 0) {
                showToast("Please add carryalls to checkout.");
                return;
            }
            toggleCart(false);
            showToast("Redirecting securely to Scandinavian checkout hub...");
        }

        // Handle newsletter feedback with premium mock action
        function handleSubscribe(e) {
            e.preventDefault();
            showToast("Välkommen! Premium design digest sent shortly.");
            e.target.reset();
        }

        // Direct interactive anatomical spec detail highlighter function
        const specDetails = {
            1: {
                title: "Double-Welded Seams",
                desc: "High-frequency sonic thermal fusion binds textile membranes perfectly, eliminating structural leak vectors completely.",
                outlineClass: "opacity-100 stroke-[#e65c2b]"
            },
            2: {
                title: "Internal Protective Sleeve",
                desc: "Secure neoprene protective chamber holds a standard 16-inch laptop completely separate from wet outerwear panels.",
                outlineClass: "opacity-80 stroke-[#e65c2b] fill-[#e65c2b]/10"
            },
            3: {
                title: "Organic Cotton Harness",
                desc: "Heavy-duty dual layered dense organic weave strap anchors spread weight evenly across broad shoulder segments.",
                outlineClass: "opacity-100 stroke-brand-charcoal"
            }
        };

        function highlightSpec(id) {
            const details = specDetails[id];
            if (!details) return;

            const title = document.getElementById('spec-info-title');
            const desc = document.getElementById('spec-info-desc');
            const box = document.getElementById('spec-info-card');

            // Slide feedback animation transition
            box.style.transform = "translateY(10px)";
            box.style.opacity = 0;

            setTimeout(() => {
                title.innerText = details.title;
                desc.innerText = details.desc;
                box.style.transform = "translateY(0px)";
                box.style.opacity = 1;

                // Highlight target drawing SVG layers
                const outline = document.getElementById('spec-highlight-pocket');
                if (id === 1) {
                    outline.setAttribute('stroke', '#e65c2b');
                    outline.setAttribute('stroke-width', '3');
                } else if (id === 2) {
                    outline.setAttribute('stroke', '#141712');
                    outline.setAttribute('stroke-width', '1');
                } else {
                    outline.setAttribute('stroke', '#b9c0ae');
                }
            }, 250);
        }

        // Smooth scroll next action trigger for floating action navigation panel
        function scrollNext() {
            const el = document.getElementById('collections');
            el.scrollIntoView({ behavior: 'smooth' });
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
  <title>HEX — AI 3D Generation Platform</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- FontAwesome Icons for modern, sharp UI elements -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Google Fonts: Inter for premium, high-tech, balanced typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Three.js Library for high-budget, real-time interactive 3D simulations -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'sans-serif'],
            display: ['Space Grotesk', 'sans-serif'],
          },
          colors: {
            brand: {
              bg: '#b5c1cb',       // Primary slate grey-blue background of image
              lightBg: '#d6dee3',  // Slightly lighter variant for contrast
              cardBlue: '#7297b4', // Beautiful medium steel blue
              darkBlue: '#1d2a3a', // Rich obsidian blue
              accentOrange: '#f47a60',
              accentCyan: '#55e0ff',
              paper: '#f3f6f8',    // Super light neutral
              pureWhite: '#ffffff',
            }
          },
          borderRadius: {
            '4xl': '2rem',
            '5xl': '2.5rem',
          },
          animation: {
            'spin-slow': 'spin 20s linear infinite',
            'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
            'float': 'float 6s ease-in-out infinite',
            'scan': 'scanLine 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          }
        }
      }
    }
  </script>

  <style>
    /* Custom keyframes & custom scrollbar to match high-budget design standards */
    @keyframes pulseSoft {
      0%, 100% { opacity: 0.8; transform: scale(1); filter: drop-shadow(0 0 4px rgba(85, 224, 255, 0.4)); }
      50% { opacity: 1; transform: scale(1.05); filter: drop-shadow(0 0 12px rgba(85, 224, 255, 0.8)); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes scanLine {
      0% { top: 0%; }
      50% { top: 100%; }
      100% { top: 0%; }
    }

    /* Custom scrollbar matching sleek theme */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #d6dee3;
    }
    ::-webkit-scrollbar-thumb {
      background: #7297b4;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #1d2a3a;
    }

    /* Smooth transition presets */
    .premium-transition {
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
  </style>
</head>

<body class="bg-[#b3c1cd] font-sans text-[#1d2a3a] overflow-x-hidden relative min-h-screen selection:bg-brand-cardBlue selection:text-white">

  <!-- ================= NAV BAR / HEADER ================= -->
  <header class="w-full px-6 py-4 max-w-[1400px] mx-auto flex items-center justify-between">
    <!-- Brand Logo -->
    <a href="#" onclick="switchTab('landing')" class="flex items-center space-x-2 premium-transition hover:opacity-85 z-50">
      <div class="relative w-10 h-10 bg-[#1d2a3a] text-white flex items-center justify-center rounded-xl overflow-hidden shadow-lg shadow-black/10">
        <!-- Stylized Hexagon SVG to match original image badge -->
        <svg class="w-6 h-6 text-brand-accentCyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="font-display font-extrabold text-2xl tracking-wider uppercase text-[#1d2a3a]">HEX<span class="text-xs align-super font-bold opacity-60">®</span></span>
    </a>

    <!-- Navigation Options -->
    <nav class="hidden md:flex items-center space-x-1 bg-[#ffffff]/40 backdrop-blur-md rounded-full p-1.5 shadow-sm border border-white/20">
      <button onclick="switchTab('landing')" id="nav-landing" class="px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 bg-[#1d2a3a] text-white shadow-sm">
        Explore
      </button>
      <button onclick="switchTab('workspace')" id="nav-workspace" class="px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 text-[#1d2a3a] hover:bg-[#ffffff]/50">
        3D Workspace
      </button>
      <button onclick="switchTab('gallery')" id="nav-gallery" class="px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 text-[#1d2a3a] hover:bg-[#ffffff]/50">
        Collections
      </button>
      <button onclick="switchTab('creators')" id="nav-creators" class="px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 text-[#1d2a3a] hover:bg-[#ffffff]/50">
        Our Creators
      </button>
    </nav>

    <!-- Sign Up Action -->
    <div class="flex items-center space-x-3">
      <button onclick="openModal('join')" class="px-6 py-2.5 rounded-full border-2 border-[#1d2a3a] font-bold text-sm tracking-tight premium-transition hover:bg-[#1d2a3a] hover:text-white hover:scale-105 active:scale-95 shadow-sm">
        Sign Up
      </button>
    </div>
  </header>

  <!-- ================= ACTIVE CONTENT CONTAINER ================= -->
  <main class="max-w-[1400px] mx-auto px-4 md:px-6 pb-20 relative">

    <!-- ================= VIEW 1: LANDING/HERO (EXACT REPLICATED VIBE) ================= -->
    <div id="view-landing" class="block animate-fade-in">
      
      <!-- Bento Interlocking Grid Main Design Section -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-4 items-stretch">
        
        <!-- COLUMN 1: LEFT HAND COMPACT ASSETS (4 Cols) -->
        <div class="lg:col-span-4 flex flex-col gap-5 justify-between">
          
          <!-- Avatar Profile Spotlight (Cyan Hair / Glasses Avatar Grid) -->
          <div class="bg-[#d2dce3] rounded-[2.5rem] p-6 relative overflow-hidden group hover:shadow-xl premium-transition flex flex-col justify-between h-[360px] border border-white/30">
            <!-- Background Accent subtle grid -->
            <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div class="flex justify-between items-start z-10">
              <span class="bg-[#1d2a3a]/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#1d2a3a]">
                Model Profile
              </span>
              <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs shadow-md">
                <i class="fa-solid fa-arrow-up-right-from-square text-[#1d2a3a]"></i>
              </div>
            </div>

            <!-- Stylized Render Avatar Graphic (To replace the blue hair girl with spectacular visual styling) -->
            <div class="absolute bottom-4 right-4 left-4 h-[70%] flex items-end justify-center">
              <div class="relative w-full h-full flex items-center justify-center">
                <!-- Glowing cyan/purple aura -->
                <div class="absolute w-40 h-40 rounded-full bg-brand-accentCyan/30 blur-2xl animate-pulse"></div>
                <!-- Custom SVG portrait / Graphic element representing a futuristic cybernetic profile -->
                <svg class="w-48 h-48 z-10 drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)] animate-float" viewBox="0 0 200 200" fill="none">
                  <defs>
                    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#55e0ff" />
                      <stop offset="100%" stop-color="#7297b4" />
                    </linearGradient>
                  </defs>
                  <!-- Cybernetic face/helmet silhouette with specs -->
                  <circle cx="100" cy="100" r="75" fill="url(#avatarGrad)" fill-opacity="0.2" stroke="white" stroke-width="1" />
                  <path d="M60,110 Q100,160 140,110" stroke="#1d2a3a" stroke-width="6" stroke-linecap="round" />
                  <!-- Orange visor specs mimicking the inspiration image glasses -->
                  <rect x="50" y="80" width="100" height="24" rx="12" fill="#f47a60" />
                  <line x1="50" y1="92" x2="150" y2="92" stroke="white" stroke-width="2" />
                  <!-- Hair flow structure in blue -->
                  <path d="M45,80 Q20,30 80,25 Q100,20 120,25 Q180,30 155,80" fill="none" stroke="#55e0ff" stroke-width="12" stroke-linecap="round" />
                </svg>
              </div>
            </div>

            <div class="z-10 mt-auto">
              <p class="text-sm font-medium text-slate-600">Model 098</p>
              <h3 class="font-display font-extrabold text-xl text-[#1d2a3a]">Aura-9 Cybernetic Visor</h3>
            </div>
          </div>

          <!-- Creator Circle & Dynamic List Grid Card -->
          <div class="bg-white rounded-[2.5rem] p-6 flex flex-col justify-between border border-white/20 shadow-sm h-[180px] premium-transition hover:shadow-lg">
            <div>
              <span class="text-xs uppercase tracking-wider font-extrabold text-slate-400">Collaborators</span>
              <h4 class="font-display font-bold text-lg text-[#1d2a3a] mt-1">Our Creators</h4>
            </div>

            <!-- Avatar overlap grouping -->
            <div class="flex items-center space-x-3 mt-4">
              <div class="flex -space-x-3 overflow-hidden">
                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Creator 1">
                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Creator 2">
                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Creator 3">
                <div class="inline-block h-10 w-10 rounded-full bg-brand-cardBlue text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">
                  +1.2k
                </div>
              </div>
              <span class="text-xs font-semibold text-slate-500">Actively generating models</span>
            </div>
          </div>

        </div>

        <!-- COLUMN 2: CENTER ASSETS & ACCENTS (3 Cols) -->
        <div class="lg:col-span-3 flex flex-col gap-5 justify-between">
          
          <!-- Virtual Reality Headset Card (Blue Background matching image) -->
          <div class="bg-brand-cardBlue rounded-[2.5rem] p-6 relative overflow-hidden group hover:shadow-xl premium-transition flex flex-col justify-between h-[230px] text-white">
            <div class="absolute inset-0 bg-gradient-to-tr from-brand-darkBlue/20 to-transparent"></div>
            
            <div class="flex justify-between items-start z-10">
              <span class="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                VR Concept
              </span>
              <span class="text-xs font-mono opacity-80">v.24</span>
            </div>

            <!-- Virtual Reality Headset Graphic Asset matching design -->
            <div class="relative flex items-center justify-center h-28 z-10">
              <svg class="w-32 h-20 text-[#1d2a3a] filter drop-shadow-md premium-transition group-hover:scale-110" viewBox="0 0 120 60" fill="none">
                <!-- Visor outline -->
                <rect x="10" y="10" width="100" height="40" rx="20" fill="#1d2a3a" />
                <rect x="12" y="12" width="96" height="36" rx="18" fill="#152130" />
                <!-- Neon accents of visor -->
                <path d="M20,30 L100,30" stroke="#55e0ff" stroke-width="1" stroke-dasharray="3 3" />
                <circle cx="30" cy="30" r="4" fill="#f47a60" />
                <circle cx="90" cy="30" r="4" fill="#55e0ff" />
                <!-- Headband detail -->
                <path d="M10,25 Q5,25 2,22 M110,25 Q115,25 118,22" stroke="white" stroke-width="3" />
              </svg>
            </div>

            <div class="z-10 flex justify-between items-center">
              <span class="text-xs font-extrabold tracking-wider text-slate-200">HEX SPECTRUM H1</span>
              <i class="fa-solid fa-circle-notch animate-spin text-brand-accentCyan text-xs"></i>
            </div>
          </div>

          <!-- Awards / Badges Clean White Card -->
          <div class="bg-white rounded-[2.5rem] p-6 flex flex-col justify-between border border-white/20 shadow-sm h-[170px] premium-transition hover:shadow-lg relative overflow-hidden group">
            <div class="flex justify-between items-start">
              <!-- Replicated NFT Design Awards Minimalist Icon -->
              <div class="w-10 h-10 rounded-full bg-[#1d2a3a] flex items-center justify-center text-white">
                <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">2026 Winner</span>
            </div>

            <div class="mt-4">
              <h4 class="font-display font-extrabold text-[#1d2a3a] text-sm tracking-wide uppercase leading-tight">
                NFT DESIGN AWARDS
              </h4>
              <p class="text-[11px] text-slate-500 mt-1">Best Immersive Generative Engine</p>
            </div>
          </div>

          <!-- Spinning Circular Badge - Fully CSS Engineered Text Path -->
          <div class="flex items-center justify-center p-3 h-[120px] relative">
            <a href="#" onclick="switchTab('workspace')" class="relative group block premium-transition hover:scale-105 active:scale-95">
              <div class="w-24 h-24 rounded-full bg-[#1d2a3a] text-white flex items-center justify-center shadow-lg relative overflow-hidden">
                <!-- Outer rotating path -->
                <div class="absolute inset-0 animate-spin-slow origin-center flex items-center justify-center">
                  <svg class="w-full h-full p-1" viewBox="0 0 100 100">
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                    <text class="text-[7px] font-semibold uppercase fill-white/80 tracking-[0.2em]">
                      <textPath href="#circlePath" startOffset="0%">
                        explore now * how it works * </textPath>
                    </text>
                  </svg>
                </div>
                <!-- Inner dynamic center target -->
                <div class="z-10 w-10 h-10 rounded-full bg-brand-cardBlue/30 border border-brand-accentCyan/40 flex items-center justify-center text-brand-accentCyan">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8M12 8v8" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

        </div>

        <!-- COLUMN 3: RIGHT MAIN HERO CARD & RELEASES (5 Cols) -->
        <div class="lg:col-span-5 flex flex-col gap-5 justify-between">
          
          <!-- Large Core Hero Action Block -->
          <div class="bg-[#d2dce3]/80 rounded-[3rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-between h-[400px] border border-white/40 shadow-sm">
            
            <div class="absolute top-0 right-0 p-8">
              <!-- Replicated dynamic badge layout -->
              <div class="flex space-x-2">
                <span class="w-10 h-10 rounded-full bg-[#1d2a3a] text-white flex items-center justify-center text-sm shadow-md">
                  <i class="fa-solid fa-expand"></i>
                </span>
                <span class="w-10 h-10 rounded-full bg-brand-cardBlue text-white flex items-center justify-center text-sm shadow-md">
                  <i class="fa-solid fa-wand-magic-sparkles"></i>
                </span>
              </div>
            </div>

            <!-- Massive bold title -->
            <div class="mt-8 z-10">
              <h1 class="font-display font-extrabold text-5xl md:text-6xl text-[#1d2a3a] uppercase tracking-tighter leading-[0.9]">
                GENERATE 3D<br>WITH AI
              </h1>
              <p class="text-sm md:text-base text-slate-700 mt-6 max-w-[340px] leading-relaxed">
                The AI 3D model generator is a powerful tool for architects, designers, and digital artists to unlock rapid world-building.
              </p>
            </div>

            <!-- CTA triggers workspace and features state changes -->
            <div class="mt-8 z-10 flex flex-wrap items-center gap-4">
              <button onclick="switchTab('workspace')" class="bg-[#1d2a3a] text-white font-bold text-sm uppercase px-8 py-4 rounded-full shadow-lg shadow-[#1d2a3a]/10 hover:bg-[#152130] hover:scale-105 active:scale-95 premium-transition">
                JOIN COMMUNITY
              </button>
              <button onclick="switchTab('workspace')" class="flex items-center space-x-2 font-bold text-sm uppercase text-[#1d2a3a] hover:opacity-80 transition-opacity">
                <span>Start Creator App</span>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <!-- New Release Interlocking Sleeve Card -->
          <div class="bg-white rounded-[2.5rem] p-6 flex flex-col md:flex-row justify-between items-center gap-6 border border-white/20 shadow-sm min-h-[170px] premium-transition hover:shadow-lg relative overflow-hidden group">
            <div class="flex-1">
              <span class="text-xs uppercase tracking-widest font-extrabold text-brand-accentOrange">NEW RELEASE</span>
              <h3 class="font-display font-bold text-xl text-[#1d2a3a] mt-1 leading-snug">
                Get ready to embark on a new workroad
              </h3>
              <p class="text-xs text-slate-500 mt-1">Harness pure procedural generation with Hex v2.0</p>
            </div>

            <!-- Replicated Sleeve Badge / Circle cropped visual asset -->
            <div class="relative w-28 h-28 rounded-full bg-[#1d2a3a] overflow-hidden flex items-center justify-center shrink-0 shadow-lg shadow-black/10">
              <!-- Inner spinning star aura -->
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-[#1d2a3a] to-[#1d2a3a] opacity-80"></div>
              
              <!-- Sleeve badge logo graphic -->
              <div class="z-10 text-white flex flex-col items-center justify-center">
                <div class="w-12 h-12 rounded-lg bg-brand-cardBlue flex items-center justify-center border border-white/10 mb-1">
                  <svg class="w-6 h-6 text-brand-accentCyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                  </svg>
                </div>
                <span class="text-[8px] font-mono tracking-widest uppercase">SYS.HEX</span>
              </div>
              <div class="absolute inset-0 border-2 border-brand-accentCyan/30 rounded-full animate-pulse"></div>
            </div>
          </div>

        </div>

      </div>

      <!-- ================= REPLICATED BOTTOM STATUS & NEWS TICKER BAR ================= -->
      <div class="mt-8 bg-white/60 backdrop-blur-md rounded-3xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/30">
        
        <!-- Left: Status glow orb with pulsing indicator -->
        <div class="flex items-center space-x-3">
          <div class="relative w-10 h-10 rounded-full bg-brand-cardBlue/20 flex items-center justify-center text-brand-cardBlue shrink-0">
            <span class="absolute w-2 h-2 rounded-full bg-brand-accentCyan animate-ping"></span>
            <span class="relative w-2 h-2 rounded-full bg-brand-accentCyan"></span>
          </div>
          <div>
            <span class="text-[10px] text-slate-500 uppercase font-bold tracking-wider">HEX Broadcast</span>
            <!-- Dynamically populated news state -->
            <p id="ticker-text" class="text-xs md:text-sm font-semibold text-[#1d2a3a] max-w-[500px] leading-tight">
              Exploring the Intersection of Virtual Reality and 3D Asset Creation.
            </p>
          </div>
        </div>

        <!-- Right: pagination context controls & timestamp -->
        <div class="flex items-center space-x-4 shrink-0">
          <span id="ticker-date" class="text-xs font-mono text-slate-500">22.08.26</span>
          <div class="flex space-x-1.5">
            <button onclick="prevNews()" class="w-8 h-8 rounded-full bg-[#1d2a3a] text-white flex items-center justify-center text-xs hover:bg-[#1d2a3a]/80 active:scale-95 transition-all">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button onclick="nextNews()" class="w-8 h-8 rounded-full bg-[#1d2a3a] text-white flex items-center justify-center text-xs hover:bg-[#1d2a3a]/80 active:scale-95 transition-all">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

      </div>

      <!-- ================= DETAILED FEATURE SHOWCASE SECTION ================= -->
      <section class="mt-20">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-xs uppercase tracking-widest font-extrabold text-[#1d2a3a] bg-white/40 px-3 py-1.5 rounded-full border border-white/10">The Ecosystem</span>
          <h2 class="font-display font-extrabold text-4xl text-[#1d2a3a] mt-4 uppercase tracking-tight">
            How we redefine procedural art
          </h2>
          <p class="text-sm text-slate-600 mt-3">
            Say goodbye to weeks spent sculpting. Model, refine, UV-unwrap, and texture automatically with professional mesh optimization.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Card 1 -->
          <div class="bg-white/80 rounded-[2.5rem] p-8 border border-white/20 premium-transition hover:translate-y-[-4px] hover:shadow-xl flex flex-col justify-between min-h-[300px]">
            <div class="w-12 h-12 rounded-2xl bg-brand-cardBlue/20 text-[#1d2a3a] flex items-center justify-center text-xl mb-6">
              <i class="fa-solid fa-cubes"></i>
            </div>
            <div>
              <h3 class="font-display font-bold text-xl text-[#1d2a3a]">Rapid Voxelization</h3>
              <p class="text-xs text-slate-600 mt-2 leading-relaxed">
                Our proprietary AI translates image data and textual prompts into complete watertight 3D volume structures in seconds.
              </p>
            </div>
            <a href="#" onclick="switchTab('workspace')" class="text-xs font-bold text-brand-cardBlue hover:underline mt-6 block">Try generator <i class="fa-solid fa-arrow-right ml-1"></i></a>
          </div>

          <!-- Card 2 -->
          <div class="bg-white/80 rounded-[2.5rem] p-8 border border-white/20 premium-transition hover:translate-y-[-4px] hover:shadow-xl flex flex-col justify-between min-h-[300px]">
            <div class="w-12 h-12 rounded-2xl bg-[#1d2a3a] text-brand-accentCyan flex items-center justify-center text-xl mb-6">
              <i class="fa-solid fa-network-wired"></i>
            </div>
            <div>
              <h3 class="font-display font-bold text-xl text-[#1d2a3a]">Retopology and Quad Flow</h3>
              <p class="text-xs text-slate-600 mt-2 leading-relaxed">
                Generated meshes are engineered with proper edge flow. No broken triangles or irregular vertex clustering. Perfectly optimized for game engines.
              </p>
            </div>
            <a href="#" onclick="switchTab('workspace')" class="text-xs font-bold text-brand-cardBlue hover:underline mt-6 block">Read Whitepaper <i class="fa-solid fa-arrow-right ml-1"></i></a>
          </div>

          <!-- Card 3 -->
          <div class="bg-[#1d2a3a] text-white rounded-[2.5rem] p-8 premium-transition hover:translate-y-[-4px] hover:shadow-xl flex flex-col justify-between min-h-[300px] relative overflow-hidden">
            <div class="absolute right-0 bottom-0 opacity-10">
              <i class="fa-solid fa-brain text-[12rem] -mb-10 -mr-10"></i>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-white/10 text-brand-accentCyan flex items-center justify-center text-xl mb-6">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <div>
              <h3 class="font-display font-bold text-xl text-white">Neural Material Synthesis</h3>
              <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                Generate high-resolution PBR textures, including normal, roughness, metallic, and displacement maps matching physical real-world standards.
              </p>
            </div>
            <a href="#" onclick="switchTab('workspace')" class="text-xs font-bold text-brand-accentCyan hover:underline mt-6 block">Open Workspace <i class="fa-solid fa-arrow-right ml-1"></i></a>
          </div>

        </div>
      </section>

    </div>


    <!-- ================= VIEW 2: AI WORKSPACE STUDIO (FULLY INTERACTIVE 3D PLATFORM) ================= -->
    <div id="view-workspace" class="hidden animate-fade-in">
      <div class="mt-4">
        <!-- Dashboard Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <span class="text-xs font-extrabold uppercase tracking-widest text-[#1d2a3a] bg-white/40 px-3 py-1 rounded-full">STUDIO ENGINE v2.5</span>
            <h1 class="font-display font-extrabold text-3xl md:text-4xl text-[#1d2a3a] mt-1 uppercase">3D Creative Studio</h1>
          </div>
          
          <!-- Model Picker -->
          <div class="flex items-center space-x-2 bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-white/20">
            <span class="text-xs font-bold text-slate-600 px-3">Base Subject:</span>
            <select id="preset-selector" onchange="loadPresetGeometry()" class="bg-[#1d2a3a] text-white text-xs font-bold py-1.5 px-4 rounded-full border-none outline-none cursor-pointer">
              <option value="cube">Cyberpunk Crate</option>
              <option value="sphere">Neural Orb</option>
              <option value="torus">Infinity Ring</option>
              <option value="helmet">Hyper Visor (Complex)</option>
            </select>
          </div>
        </div>

        <!-- Main Studio Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          <!-- LEFT INTERACTIVE CONTROL SIDEBAR (4 Cols) -->
          <div class="lg:col-span-4 flex flex-col gap-5">
            
            <!-- Prompt Generation Panel -->
            <div class="bg-white rounded-[2.5rem] p-6 border border-white/20 shadow-md">
              <div class="flex items-center space-x-2 text-brand-cardBlue mb-3">
                <i class="fa-solid fa-wand-magic-sparkles text-sm animate-pulse"></i>
                <span class="text-xs uppercase tracking-widest font-extrabold">AI GENERATION INPUT</span>
              </div>
              <p class="text-xs text-slate-500 mb-3 leading-relaxed">
                Type an object description, color scheme, and texture details. Our neural engine builds the geometry in real-time.
              </p>
              
              <!-- Prompt Textarea -->
              <div class="relative">
                <textarea id="prompt-input" rows="3" class="w-full text-xs p-3 rounded-2xl bg-slate-100 border-2 border-transparent focus:border-brand-cardBlue/50 outline-none text-[#1d2a3a] font-medium resize-none placeholder-slate-400" placeholder="e.g. Matte obsidian tech sneaker with neon blue fiber optic lace pipes, hyper-detailed mesh structure..."></textarea>
                <button onclick="clearPrompt()" class="absolute right-3 bottom-3 text-slate-400 hover:text-slate-600">
                  <i class="fa-solid fa-circle-xmark"></i>
                </button>
              </div>

              <!-- Fast Tags -->
              <div class="mt-3 flex flex-wrap gap-1.5">
                <button onclick="addPromptTag('Matte Obsidian')" class="text-[10px] font-bold bg-[#1d2a3a]/5 hover:bg-[#1d2a3a]/10 px-2 py-1 rounded-md text-[#1d2a3a]">#Obsidian</button>
                <button onclick="addPromptTag('Cyberpunk Mesh')" class="text-[10px] font-bold bg-[#1d2a3a]/5 hover:bg-[#1d2a3a]/10 px-2 py-1 rounded-md text-[#1d2a3a]">#Cyberpunk</button>
                <button onclick="addPromptTag('Hologram glow')" class="text-[10px] font-bold bg-[#1d2a3a]/5 hover:bg-[#1d2a3a]/10 px-2 py-1 rounded-md text-[#1d2a3a]">#Hologram</button>
                <button onclick="addPromptTag('Highly Polished Chrome')" class="text-[10px] font-bold bg-[#1d2a3a]/5 hover:bg-[#1d2a3a]/10 px-2 py-1 rounded-md text-[#1d2a3a]">#Chrome</button>
              </div>

              <!-- Prompt Generate Button -->
              <button onclick="triggerGeneration()" class="w-full mt-5 bg-[#1d2a3a] text-white hover:bg-slate-900 font-bold text-sm tracking-wide uppercase py-3.5 rounded-2xl flex items-center justify-center space-x-2 shadow-lg shadow-black/10 active:scale-95 transition-all">
                <i class="fa-solid fa-bolt"></i>
                <span>GENERATE MODEL</span>
              </button>
            </div>

            <!-- Material & Surface Shader Customs -->
            <div class="bg-white rounded-[2.5rem] p-6 border border-white/20 shadow-md">
              <span class="text-xs uppercase tracking-widest font-extrabold text-slate-400 block mb-3">Surface Material Shaders</span>
              
              <div class="grid grid-cols-2 gap-2">
                <!-- Obsidian Option -->
                <button onclick="applyMaterialPreset('obsidian')" id="btn-mat-obsidian" class="flex flex-col items-center p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 border-2 border-[#1d2a3a] premium-transition">
                  <div class="w-10 h-10 rounded-full bg-[#111] border-2 border-white/30 shadow-md flex items-center justify-center">
                    <div class="w-4 h-4 rounded-full bg-slate-600/30"></div>
                  </div>
                  <span class="text-[11px] font-bold text-slate-700 mt-2">Matte Obsidian</span>
                </button>

                <!-- Chrome Option -->
                <button onclick="applyMaterialPreset('chrome')" id="btn-mat-chrome" class="flex flex-col items-center p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 border-2 border-transparent premium-transition">
                  <div class="w-10 h-10 rounded-full bg-slate-300 border-2 border-white shadow-md flex items-center justify-center">
                    <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-slate-400 to-white"></div>
                  </div>
                  <span class="text-[11px] font-bold text-slate-700 mt-2">Sleek Chrome</span>
                </button>

                <!-- Hologram Option -->
                <button onclick="applyMaterialPreset('hologram')" id="btn-mat-hologram" class="flex flex-col items-center p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 border-2 border-transparent premium-transition">
                  <div class="w-10 h-10 rounded-full bg-blue-900 border-2 border-brand-accentCyan shadow-md flex items-center justify-center animate-pulse">
                    <div class="w-4 h-4 rounded-full bg-brand-accentCyan"></div>
                  </div>
                  <span class="text-[11px] font-bold text-slate-700 mt-2">Neon Hologram</span>
                </button>

                <!-- Gold Option -->
                <button onclick="applyMaterialPreset('gold')" id="btn-mat-gold" class="flex flex-col items-center p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 border-2 border-transparent premium-transition">
                  <div class="w-10 h-10 rounded-full bg-yellow-500 border-2 border-yellow-200 shadow-md flex items-center justify-center">
                    <div class="w-4 h-4 rounded-full bg-yellow-600"></div>
                  </div>
                  <span class="text-[11px] font-bold text-slate-700 mt-2">Luxury Gold</span>
                </button>
              </div>

              <!-- Interactive Mesh Parameters -->
              <div class="mt-6 border-t border-slate-100 pt-4">
                <span class="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Viewport Settings</span>
                
                <div class="mt-3 flex items-center justify-between">
                  <span class="text-xs font-semibold text-slate-700">Wireframe Overlay</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="wireframe-toggle" onchange="toggleWireframe()" class="sr-only peer">
                    <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:width-4 after:transition-all peer-checked:bg-[#1d2a3a]"></div>
                  </label>
                </div>

                <div class="mt-3 flex items-center justify-between">
                  <span class="text-xs font-semibold text-slate-700">Auto Rotate</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="rotation-toggle" checked onchange="toggleRotation()" class="sr-only peer">
                    <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:width-4 after:transition-all peer-checked:bg-[#1d2a3a]"></div>
                  </label>
                </div>
              </div>
            </div>

          </div>

          <!-- RIGHT LARGE 3D RENDERING CANVAS (8 Cols) -->
          <div class="lg:col-span-8 flex flex-col gap-4 relative">
            
            <!-- Main Viewport Box -->
            <div class="bg-gradient-to-br from-[#1d2a3a] to-[#0f1822] rounded-[3rem] p-6 relative flex flex-col justify-between h-[450px] lg:h-full overflow-hidden shadow-xl border border-white/10 group">
              
              <!-- Rendering grid backdrop overlay -->
              <div class="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
              
              <!-- Realtime Canvas Elements -->
              <div class="absolute inset-0 z-0">
                <canvas id="studio3d-canvas" class="w-full h-full cursor-grab active:cursor-grabbing"></canvas>
              </div>

              <!-- Top floating control header -->
              <div class="z-10 flex items-center justify-between">
                <div class="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 text-white">
                  <span class="inline-block w-2.5 h-2.5 bg-brand-accentCyan rounded-full animate-ping"></span>
                  <span class="text-[10px] font-mono tracking-wider">LIVE VIEWPORT</span>
                </div>

                <div class="flex items-center space-x-2">
                  <button onclick="resetCamera()" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs backdrop-blur-sm transition-all" title="Reset Viewport">
                    <i class="fa-solid fa-camera-rotate"></i>
                  </button>
                  <button onclick="cycleLighting()" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs backdrop-blur-sm transition-all" title="Toggle Lighting Rig">
                    <i class="fa-solid fa-lightbulb"></i>
                  </button>
                </div>
              </div>

              <!-- Realtime Generation Loading Overlay Screen -->
              <div id="gen-loader" class="absolute inset-0 bg-[#1d2a3a]/90 backdrop-blur-md z-30 flex flex-col items-center justify-center text-white p-8 opacity-0 pointer-events-none transition-all duration-500 rounded-[3rem]">
                <!-- Outer stylized generator frame -->
                <div class="w-24 h-24 rounded-full border-4 border-dashed border-brand-accentCyan/40 flex items-center justify-center animate-spin-slow relative">
                  <div class="absolute inset-1.5 rounded-full border border-brand-accentOrange/30 animate-pulse"></div>
                  <i class="fa-solid fa-cube text-3xl text-brand-accentCyan animate-bounce"></i>
                </div>
                
                <h3 class="font-display font-extrabold text-2xl uppercase tracking-wider mt-6">Hex Synthesis Engine</h3>
                
                <!-- Sequential Generation States -->
                <p id="loader-state-text" class="text-xs font-mono text-brand-accentCyan mt-2 animate-pulse">
                  Step 1: Parsing textual prompt vectors...
                </p>

                <!-- Processing bar -->
                <div class="w-full max-w-[280px] bg-white/10 h-1.5 rounded-full mt-4 overflow-hidden relative">
                  <div id="loader-progress" class="bg-brand-accentCyan h-full w-[20%] transition-all duration-300"></div>
                </div>
              </div>

              <!-- Lower visual settings bar (Gives premium high budget aesthetic) -->
              <div class="z-10 mt-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-t border-white/10 pt-4 backdrop-blur-sm">
                <div class="text-white">
                  <span class="text-[9px] font-mono text-slate-400 block uppercase">Object Identity</span>
                  <span id="rendered-title" class="font-display font-bold text-sm tracking-wide text-white">PROMPT_RENDER_09.obj</span>
                </div>

                <!-- Stats indicator -->
                <div class="flex items-center space-x-6 text-white text-xs">
                  <div>
                    <span class="text-[9px] font-mono text-slate-400 block uppercase">Mesh Vertices</span>
                    <span id="rendered-vertices" class="font-mono font-bold text-brand-accentCyan">24,512</span>
                  </div>
                  <div>
                    <span class="text-[9px] font-mono text-slate-400 block uppercase">Textures</span>
                    <span class="font-mono font-bold text-brand-accentOrange">4K PBR</span>
                  </div>
                  <div class="hidden sm:block">
                    <span class="text-[9px] font-mono text-slate-400 block uppercase">Output format</span>
                    <span class="font-mono font-bold text-white">GLTF / OBJ</span>
                  </div>
                </div>

                <!-- Action Download trigger -->
                <button onclick="openExportModal()" class="bg-brand-cardBlue hover:bg-brand-cardBlue/80 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-full flex items-center space-x-2 shadow-lg active:scale-95 transition-all">
                  <i class="fa-solid fa-cloud-arrow-down"></i>
                  <span>Export Files</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>


    <!-- ================= VIEW 3: COMMUNITY COLLECTIONS GALLERY ================= -->
    <div id="view-gallery" class="hidden animate-fade-in">
      <div class="mt-4">
        
        <!-- Header area -->
        <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between mb-8 gap-4">
          <div>
            <span class="text-xs font-extrabold uppercase tracking-widest text-[#1d2a3a] bg-white/40 px-3 py-1 rounded-full">COMMUNITY INSPIRATION</span>
            <h1 class="font-display font-extrabold text-3xl md:text-4xl text-[#1d2a3a] mt-1 uppercase">Hex Masterpieces</h1>
          </div>

          <!-- Tag filters -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
            <button onclick="filterGallery('all')" id="tag-all" class="px-5 py-2 rounded-full font-bold text-xs bg-[#1d2a3a] text-white">All Works</button>
            <button onclick="filterGallery('sci-fi')" id="tag-sci-fi" class="px-5 py-2 rounded-full font-bold text-xs bg-white/50 text-[#1d2a3a] hover:bg-white/85">Sci-Fi</button>
            <button onclick="filterGallery('wearables')" id="tag-wearables" class="px-5 py-2 rounded-full font-bold text-xs bg-white/50 text-[#1d2a3a] hover:bg-white/85">Wearables</button>
            <button onclick="filterGallery('architecture')" id="tag-architecture" class="px-5 py-2 rounded-full font-bold text-xs bg-white/50 text-[#1d2a3a] hover:bg-white/85">Architecture</button>
          </div>
        </div>

        <!-- Collections Gallery Grid layout -->
        <div id="gallery-grid" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <!-- Dynamic high-budget items injected below via JavaScript -->
        </div>

      </div>
    </div>


    <!-- ================= VIEW 4: OUR CREATORS HUB ================= -->
    <div id="view-creators" class="hidden animate-fade-in">
      <div class="mt-4">
        <div class="text-center max-w-xl mx-auto mb-10">
          <span class="text-xs uppercase tracking-widest font-extrabold text-[#1d2a3a] bg-white/40 px-3 py-1 rounded-full">TOP CONVERTORS</span>
          <h1 class="font-display font-extrabold text-3xl md:text-4xl text-[#1d2a3a] mt-2 uppercase">The Hex Elite</h1>
          <p class="text-xs text-slate-600 mt-2">Connecting state-of-the-art designers and automated mesh systems globally.</p>
        </div>

        <div id="creators-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Populated by JS -->
        </div>
      </div>
    </div>

  </main>


  <!-- ================= FOOTER STRUCTURE ================= -->
  <footer class="bg-[#1d2a3a] text-white py-12 px-6 border-t border-white/10">
    <div class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      
      <!-- Logo column -->
      <div>
        <div class="flex items-center space-x-2 text-white mb-4">
          <div class="w-8 h-8 bg-brand-cardBlue text-white flex items-center justify-center rounded-lg">
            <svg class="w-5 h-5 text-brand-accentCyan" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
            </svg>
          </div>
          <span class="font-display font-extrabold text-xl tracking-wider uppercase">HEX</span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed max-w-[200px]">
          Procedural 3D asset generation powered by premium modern artificial intelligence.
        </p>
      </div>

      <!-- Links Column 1 -->
      <div>
        <h4 class="text-xs uppercase tracking-widest font-bold text-brand-accentCyan mb-3">Product</h4>
        <ul class="space-y-2 text-xs text-slate-300">
          <li><a href="#" onclick="switchTab('workspace')" class="hover:text-white">Workspace Studio</a></li>
          <li><a href="#" class="hover:text-white">System Pricing</a></li>
          <li><a href="#" class="hover:text-white">API Integrations</a></li>
          <li><a href="#" class="hover:text-white">Enterprise Hub</a></li>
        </ul>
      </div>

      <!-- Links Column 2 -->
      <div>
        <h4 class="text-xs uppercase tracking-widest font-bold text-brand-accentOrange mb-3">Legal & Story</h4>
        <ul class="space-y-2 text-xs text-slate-300">
          <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-white">Terms of Workroad</a></li>
          <li><a href="#" class="hover:text-white">NFT License Agreement</a></li>
          <li><a href="#" class="hover:text-white">Brand Assets</a></li>
        </ul>
      </div>

      <!-- Updates Subscription -->
      <div>
        <h4 class="text-xs uppercase tracking-widest font-bold text-white mb-3">Stay Updated</h4>
        <div class="flex">
          <input type="email" placeholder="Your system email" class="bg-white/10 px-3 py-2 text-xs rounded-l-xl focus:outline-none focus:ring-1 focus:ring-brand-accentCyan text-white border-none w-full">
          <button onclick="openModal('join')" class="bg-brand-cardBlue hover:bg-brand-cardBlue/80 text-white text-xs px-4 rounded-r-xl font-bold">Join</button>
        </div>
        <p class="text-[10px] text-slate-400 mt-2">Zero spam. Pure technical release briefs.</p>
      </div>

    </div>
    
    <div class="max-w-[1400px] mx-auto border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-slate-400 text-xs">
      <span>© 2026 HEX Inc. All procedural workroads preserved.</span>
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="#" class="hover:text-white"><i class="fa-brands fa-twitter"></i></a>
        <a href="#" class="hover:text-white"><i class="fa-brands fa-github"></i></a>
        <a href="#" class="hover:text-white"><i class="fa-brands fa-discord"></i></a>
      </div>
    </div>
  </footer>


  <!-- ================= POPUP MODALS ================= -->
  
  <!-- JOIN COMMUNITY / SIGNUP MODAL -->
  <div id="modal-join" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden opacity-0 transition-opacity duration-300">
    <div class="bg-white rounded-[2.5rem] p-8 max-w-md w-full relative shadow-2xl border border-white/30 transform scale-95 transition-transform duration-300">
      
      <!-- Close button -->
      <button onclick="closeModal('join')" class="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors">
        <i class="fa-solid fa-xmark text-xl"></i>
      </button>

      <div class="text-center mb-6">
        <div class="w-14 h-14 bg-[#1d2a3a] text-brand-accentCyan rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3">
          <i class="fa-solid fa-users"></i>
        </div>
        <h3 class="font-display font-extrabold text-2xl text-[#1d2a3a] uppercase">Join the Hex Grid</h3>
        <p class="text-xs text-slate-500 mt-1">Get immediate beta generation credits and profile perks.</p>
      </div>

      <form onsubmit="handleSignupSubmit(event)" class="space-y-4">
        <div>
          <label class="block text-xs font-bold uppercase text-slate-500 mb-1">Full Name</label>
          <input type="text" required class="w-full text-xs p-3 rounded-xl bg-slate-100 border-none outline-none focus:ring-2 focus:ring-brand-cardBlue" placeholder="Satoshi Nakamoto">
        </div>
        <div>
          <label class="block text-xs font-bold uppercase text-slate-500 mb-1">E-mail Address</label>
          <input type="email" required class="w-full text-xs p-3 rounded-xl bg-slate-100 border-none outline-none focus:ring-2 focus:ring-brand-cardBlue" placeholder="satoshi@hex.net">
        </div>
        <div>
          <label class="block text-xs font-bold uppercase text-slate-500 mb-1">Creative Focus</label>
          <select class="w-full text-xs p-3 rounded-xl bg-slate-100 border-none outline-none focus:ring-2 focus:ring-brand-cardBlue">
            <option>Game Art & Assets</option>
            <option>Architectural Visualization</option>
            <option>NFT / Procedural Collectibles</option>
            <option>VR/AR Immersive Environments</option>
          </select>
        </div>

        <div class="flex items-center space-x-2 py-2">
          <input type="checkbox" required class="rounded text-brand-cardBlue" id="agree-terms">
          <label for="agree-terms" class="text-[10px] text-slate-500 leading-tight">
            I agree to the Hex Procedural License agreements and Privacy protocols.
          </label>
        </div>

        <button type="submit" class="w-full bg-[#1d2a3a] text-white hover:bg-slate-900 font-bold text-sm tracking-wide uppercase py-3.5 rounded-xl transition-all shadow-lg active:scale-95">
          Submit Onboarding
        </button>
      </form>

    </div>
  </div>


  <!-- EXPORT MODEL SUCCESS POPUP MODAL -->
  <div id="modal-export" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden opacity-0 transition-opacity duration-300">
    <div class="bg-white rounded-[2.5rem] p-8 max-w-md w-full relative shadow-2xl border border-white/30 transform scale-95 transition-transform duration-300">
      
      <button onclick="closeModal('export')" class="absolute top-6 right-6 text-slate-400 hover:text-slate-600">
        <i class="fa-solid fa-xmark text-xl"></i>
      </button>

      <div class="text-center">
        <div class="w-16 h-16 bg-[#1d2a3a] text-brand-accentCyan rounded-full flex items-center justify-center text-3xl mx-auto mb-4 animate-bounce">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        
        <h3 class="font-display font-extrabold text-2xl text-[#1d2a3a] uppercase">3D Export Complete</h3>
        <p class="text-xs text-slate-500 mt-2 leading-relaxed">
          Your object mesh has been auto-retopologized, normal mapped, and packed into a zip payload.
        </p>

        <div class="mt-4 bg-slate-50 p-3 rounded-2xl text-left border border-slate-100">
          <span class="text-[9px] font-mono text-slate-400 block uppercase">Payload Information</span>
          <span id="export-filename" class="font-mono text-xs font-bold text-[#1d2a3a]">hex_export_3421.zip</span>
          <div class="flex justify-between items-center text-[10px] text-slate-500 mt-2">
            <span>Size: 12.4 MB</span>
            <span>Triangles: 48,224</span>
          </div>
        </div>

        <button onclick="closeModal('export')" class="w-full mt-6 bg-[#1d2a3a] text-white hover:bg-slate-900 font-bold text-xs uppercase py-3.5 rounded-xl transition-all shadow-lg">
          Download Archive (.zip)
        </button>
      </div>

    </div>
  </div>


  <!-- CUSTOM NOTIFICATION / NOTIFY TOAST -->
  <div id="toast-notify" class="fixed bottom-6 right-6 bg-[#1d2a3a] text-white py-3 px-5 rounded-2xl shadow-2xl border border-white/10 z-50 flex items-center space-x-3 hidden transition-all duration-300 translate-y-10">
    <div class="w-6 h-6 bg-brand-accentCyan text-[#1d2a3a] rounded-full flex items-center justify-center text-xs">
      <i class="fa-solid fa-bell"></i>
    </div>
    <span id="toast-text" class="text-xs font-semibold">Prompt tag added</span>
  </div>


  <!-- ================= MASTER CONTROLLER JAVASCRIPT ================= -->
  <script>
    // --- STATE CONTROLLER ---
    const appState = {
      activeTab: 'landing',
      activeMaterial: 'obsidian',
      wireframe: false,
      autoRotate: true,
      currentNewsIndex: 0,
    };

    // --- BROADCAST NEWS DATA ---
    const newsBroadcasts = [
      {
        text: "Exploring the Intersection of Virtual Reality and 3D Asset Creation.",
        date: "22.08.26"
      },
      {
        text: "Hex Model Engine upgrades to Retopology Synthesis Version 2.5.",
        date: "14.10.26"
      },
      {
        text: "Community Creators achieve milestone 500,000 PBR objects rendered.",
        date: "01.12.26"
      }
    ];

    // --- COMMUNITY COLLECTIONS ARCHIVE MOCK DATA ---
    const galleryItems = [
      {
        id: 1,
        title: "Nebula Mech Helmet",
        category: "sci-fi",
        creator: "Aiden Vance",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=400&q=80",
        material: "Chrome Glow",
        likes: 1240
      },
      {
        id: 2,
        title: "Spectra Tech Boots",
        category: "wearables",
        creator: "Maya Lin",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
        material: "Matte Neon",
        likes: 980
      },
      {
        id: 3,
        title: "Prism Modular Arch",
        category: "architecture",
        creator: "Marcus Aurel",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
        material: "Raw Obsidian",
        likes: 2110
      },
      {
        id: 4,
        title: "Warp Reactor Frame",
        category: "sci-fi",
        creator: "Tatsuo Sato",
        image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=400&q=80",
        material: "Cyber Chrome",
        likes: 855
      },
      {
        id: 5,
        title: "Exoskeletal Visor",
        category: "wearables",
        creator: "Vesper Gray",
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=400&q=80",
        material: "Hologram Fresnel",
        likes: 3410
      },
      {
        id: 6,
        title: "Hyper-dome Structure",
        category: "architecture",
        creator: "Elena Rostova",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
        material: "Anodized Gold",
        likes: 1544
      }
    ];

    // --- CREATORS SPOTLIGHT DATA ---
    const creatorsData = [
      {
        name: "Sylvia Chen",
        role: "Lead Procedural Modeler",
        bio: "Specializing in generative hard surface machinery and game asset geometry synthesis.",
        followers: "14.2k",
        badge: "Hex Vanguard"
      },
      {
        name: "Lukas Novak",
        role: "Industrial Designer",
        bio: "Creating sustainable real-world blueprints via Neural 3D CAD modeling loops.",
        followers: "9.8k",
        badge: "Precision Expert"
      },
      {
        name: "Daria Moretti",
        role: "AR/VR Scenic Architect",
        bio: "Building complete cinematic environments and spatial simulations with Hex system nodes.",
        followers: "22.5k",
        badge: "Spatial Master"
      }
    ];

    // ================= VIEWPORT NAVIGATION SYSTEM ================= -->
    function switchTab(tabId) {
      appState.activeTab = tabId;

      // Hide all content containers
      document.getElementById('view-landing').classList.add('hidden');
      document.getElementById('view-workspace').classList.add('hidden');
      document.getElementById('view-gallery').classList.add('hidden');
      document.getElementById('view-creators').classList.add('hidden');

      // Show requested tab container
      document.getElementById(`view-${tabId}`).classList.remove('hidden');

      // Update navbar styling states
      const navButtons = ['landing', 'workspace', 'gallery', 'creators'];
      navButtons.forEach(btn => {
        const el = document.getElementById(`nav-${btn}`);
        if (btn === tabId) {
          el.className = "px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 bg-[#1d2a3a] text-white shadow-sm";
        } else {
          el.className = "px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 text-[#1d2a3a] hover:bg-[#ffffff]/50";
        }
      });

      // Special action: Trigger canvas initialization on entering workspace
      if (tabId === 'workspace') {
        setTimeout(() => {
          initThreeJS();
        }, 100);
      }
    }

    // ================= BROADCAST NEWS CONTROLS ================= -->
    function renderNews() {
      const newsItem = newsBroadcasts[appState.currentNewsIndex];
      document.getElementById('ticker-text').textContent = newsItem.text;
      document.getElementById('ticker-date').textContent = newsItem.date;
    }

    function prevNews() {
      appState.currentNewsIndex = (appState.currentNewsIndex - 1 + newsBroadcasts.length) % newsBroadcasts.length;
      renderNews();
    }

    function nextNews() {
      appState.currentNewsIndex = (appState.currentNewsIndex + 1) % newsBroadcasts.length;
      renderNews();
    }

    // ================= INTEGRATED THREE.JS SIMULATION FOR THE CREATOR STUDIO ================= -->
    let scene, camera, renderer, activeMesh, materialOptions = {};
    let isThreeJSInitialized = false;
    let rotationAngle = 0;

    function initThreeJS() {
      if (isThreeJSInitialized) {
        // Redraw to adjust to dynamic container widths
        const canvas = document.getElementById('studio3d-canvas');
        if (canvas) {
          const width = canvas.parentElement.clientWidth;
          const height = canvas.parentElement.clientHeight;
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        }
        return;
      }

      const canvas = document.getElementById('studio3d-canvas');
      const width = canvas.parentElement.clientWidth;
      const height = canvas.parentElement.clientHeight;

      // Scene init
      scene = new THREE.Scene();
      scene.background = null; // Transparent scene to utilize css background gradient

      // Camera init
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.z = 6;

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      // Define standard premium materials mapping
      materialOptions = {
        obsidian: new THREE.MeshStandardMaterial({
          color: 0x111112,
          roughness: 0.8,
          metalness: 0.2,
          bumpScale: 0.05,
          side: THREE.DoubleSide
        }),
        chrome: new THREE.MeshStandardMaterial({
          color: 0xdedede,
          roughness: 0.05,
          metalness: 1.0,
          side: THREE.DoubleSide
        }),
        hologram: new THREE.MeshBasicMaterial({
          color: 0x55e0ff,
          wireframe: true,
          transparent: true,
          opacity: 0.75
        }),
        gold: new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          roughness: 0.15,
          metalness: 0.9,
          side: THREE.DoubleSide
        })
      };

      // Load initial model (starts as cube matching "cyberpunk crate")
      loadPresetGeometry();

      // Lighting system setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
      mainLight.position.set(5, 5, 5);
      scene.add(mainLight);

      const cyanAccentLight = new THREE.PointLight(0x55e0ff, 1.5, 15);
      cyanAccentLight.position.set(-3, -2, 2);
      scene.add(cyanAccentLight);

      const orangeAccentLight = new THREE.PointLight(0xf47a60, 1.0, 15);
      orangeAccentLight.position.set(3, 2, -2);
      scene.add(orangeAccentLight);

      // Add simple mouse tracking interaction for high-budget response feel
      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };

      canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
      });

      canvas.addEventListener('mousemove', (e) => {
        const deltaMove = {
          x: e.offsetX - previousMousePosition.x,
          y: e.offsetY - previousMousePosition.y
        };

        if (isDragging && activeMesh) {
          activeMesh.rotation.y += deltaMove.x * 0.01;
          activeMesh.rotation.x += deltaMove.y * 0.01;
        }

        previousMousePosition = {
          x: e.offsetX,
          y: e.offsetY
        };
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
      });

      // Handle touch screen drag interactions
      canvas.addEventListener('touchstart', (e) => {
        isDragging = true;
        if (e.touches.length > 0) {
          previousMousePosition = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
          };
        }
      });

      canvas.addEventListener('touchmove', (e) => {
        if (isDragging && activeMesh && e.touches.length > 0) {
          const deltaMove = {
            x: e.touches[0].clientX - previousMousePosition.x,
            y: e.touches[0].clientY - previousMousePosition.y
          };
          activeMesh.rotation.y += deltaMove.x * 0.015;
          activeMesh.rotation.x += deltaMove.y * 0.015;

          previousMousePosition = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
          };
        }
      });

      canvas.addEventListener('touchend', () => {
        isDragging = false;
      });

      isThreeJSInitialized = true;
      
      // Start render animation loop
      animate();
    }

    // Geometry Switcher Logic
    function loadPresetGeometry() {
      const selector = document.getElementById('preset-selector');
      const val = selector.value;

      if (activeMesh) {
        scene.remove(activeMesh);
      }

      let geometry;

      if (val === 'cube') {
        geometry = new THREE.BoxGeometry(2, 2, 2, 4, 4, 4);
        document.getElementById('rendered-title').textContent = "CYBERPUNK_CARGO_CRATE.obj";
        document.getElementById('rendered-vertices').textContent = "1,536";
      } else if (val === 'sphere') {
        geometry = new THREE.SphereGeometry(1.5, 32, 32);
        document.getElementById('rendered-title').textContent = "NEURAL_ORB_SPHERE.obj";
        document.getElementById('rendered-vertices').textContent = "4,096";
      } else if (val === 'torus') {
        geometry = new THREE.TorusGeometry(1.2, 0.4, 16, 100);
        document.getElementById('rendered-title').textContent = "INFINITY_RING_MESH.obj";
        document.getElementById('rendered-vertices').textContent = "32,000";
      } else if (val === 'helmet') {
        // High complexity mock model structure using a group
        geometry = new THREE.ConeGeometry(1.3, 2, 16);
        document.getElementById('rendered-title').textContent = "HYPER_VISOR_FINAL_V2.obj";
        document.getElementById('rendered-vertices').textContent = "48,224";
      }

      const activeMatKey = appState.activeMaterial;
      let activeMat = materialOptions[activeMatKey];

      // Clone material properties to handle override cases correctly
      if (appState.wireframe && activeMatKey !== 'hologram') {
        activeMat = activeMat.clone();
        activeMat.wireframe = true;
      }

      activeMesh = new THREE.Mesh(geometry, activeMat);
      scene.add(activeMesh);
    }

    // Interactive Material updates
    function applyMaterialPreset(matKey) {
      appState.activeMaterial = matKey;

      // Update visual style indicators on buttons
      const materialButtons = ['obsidian', 'chrome', 'hologram', 'gold'];
      materialButtons.forEach(btn => {
        const el = document.getElementById(`btn-mat-${btn}`);
        if (btn === matKey) {
          el.className = "flex flex-col items-center p-3 rounded-2xl bg-slate-100 border-2 border-[#1d2a3a] premium-transition";
        } else {
          el.className = "flex flex-col items-center p-3 rounded-2xl bg-slate-100 border-2 border-transparent premium-transition hover:bg-slate-200";
        }
      });

      if (!activeMesh) return;

      let activeMat = materialOptions[matKey];

      // Enforce custom wireframe override if checked
      if (appState.wireframe && matKey !== 'hologram') {
        activeMat = activeMat.clone();
        activeMat.wireframe = true;
      }

      activeMesh.material = activeMat;
      showToast(`Applied material: ${matKey.toUpperCase()}`);
    }

    // Toggle viewport wireframe overlay
    function toggleWireframe() {
      const isChecked = document.getElementById('wireframe-toggle').checked;
      appState.wireframe = isChecked;

      if (!activeMesh) return;

      // Trigger hot material updates
      applyMaterialPreset(appState.activeMaterial);
    }

    // Toggle Auto Rotate state
    function toggleRotation() {
      appState.autoRotate = document.getElementById('rotation-toggle').checked;
    }

    // Reset camera position to default
    function resetCamera() {
      if (camera && activeMesh) {
        camera.position.set(0, 0, 6);
        activeMesh.rotation.set(0, 0, 0);
        showToast("Viewport angle recalibrated");
      }
    }

    // Cycle through custom point lighting configurations
    let lightState = 0;
    function cycleLighting() {
      lightState = (lightState + 1) % 3;
      showToast(`Switched lighting rig variant [0${lightState + 1}]`);
    }

    // ThreeJS animation frame updates
    function animate() {
      requestAnimationFrame(animate);

      if (activeMesh && appState.autoRotate) {
        activeMesh.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    }


    // ================= DYNAMIC AI 3D ENGINE GENERATOR SIMULATION ================= -->
    function addPromptTag(tag) {
      const input = document.getElementById('prompt-input');
      if (input.value) {
        input.value += `, ${tag}`;
      } else {
        input.value = tag;
      }
      showToast("Prompt parameter registered");
    }

    function clearPrompt() {
      document.getElementById('prompt-input').value = "";
    }

    // Simulate multi-tier production level AI generation phases
    function triggerGeneration() {
      const promptText = document.getElementById('prompt-input').value.trim();
      if (!promptText) {
        showToast("Please enter a custom description prompt first.");
        return;
      }

      const loader = document.getElementById('gen-loader');
      const progress = document.getElementById('loader-progress');
      const stateText = document.getElementById('loader-state-text');

      // Reveal dynamic loader cover
      loader.classList.remove('opacity-0', 'pointer-events-none');
      loader.classList.add('opacity-100');

      // Set initial state
      progress.style.width = "10%";
      stateText.textContent = "Step 1/4: Parsing prompt token embeddings...";

      // Stage 2
      setTimeout(() => {
        progress.style.width = "40%";
        stateText.textContent = "Step 2/4: Synthesizing watertight voxel matrix structure...";
      }, 1500);

      // Stage 3
      setTimeout(() => {
        progress.style.width = "75%";
        stateText.textContent = "Step 3/4: Creating edge loops & high-density PBR textures...";
      }, 3000);

      // Stage 4 Finalizing
      setTimeout(() => {
        progress.style.width = "100%";
        stateText.textContent = "Step 4/4: Complete! Packing archive outputs...";
      }, 4500);

      // Finish & load complex output geometry representation
      setTimeout(() => {
        loader.classList.remove('opacity-100');
        loader.classList.add('opacity-0', 'pointer-events-none');

        // Dynamically shift visual model selector to 'helmet' state
        document.getElementById('preset-selector').value = "helmet";
        loadPresetGeometry();
        applyMaterialPreset('chrome');

        showToast("AI generation complete. Model uploaded to live viewport.");
      }, 5500);
    }


    // ================= GALLERY DOM POPULATION & CONTROLS ================= -->
    function filterGallery(category) {
      // Toggle button states
      const categories = ['all', 'sci-fi', 'wearables', 'architecture'];
      categories.forEach(cat => {
        const btn = document.getElementById(`tag-${cat}`);
        if (cat === category) {
          btn.className = "px-5 py-2 rounded-full font-bold text-xs bg-[#1d2a3a] text-white";
        } else {
          btn.className = "px-5 py-2 rounded-full font-bold text-xs bg-white/50 text-[#1d2a3a] hover:bg-white/85";
        }
      });

      const filteredItems = category === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === category);

      renderGalleryGrid(filteredItems);
    }

    function renderGalleryGrid(items) {
      const container = document.getElementById('gallery-grid');
      container.innerHTML = "";

      items.forEach(item => {
        const itemHtml = `
          <div class="bg-white/80 rounded-[2.5rem] p-4 border border-white/20 shadow-sm relative group hover:shadow-xl hover:translate-y-[-4px] premium-transition flex flex-col justify-between">
            <div class="relative h-48 rounded-3xl overflow-hidden mb-4 bg-slate-100">
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 premium-transition">
              <span class="absolute top-3 left-3 bg-[#1d2a3a] text-brand-accentCyan text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full">
                ${item.category}
              </span>
            </div>
            
            <div>
              <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Procedural asset</span>
              <h3 class="font-display font-bold text-base text-[#1d2a3a] leading-tight mt-0.5">${item.title}</h3>
              <p class="text-[11px] text-slate-500 mt-1">Creator: ${item.creator}</p>
            </div>

            <div class="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
              <span class="text-[10px] font-mono font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                ${item.material}
              </span>
              <button onclick="likeGalleryItem(${item.id})" class="flex items-center space-x-1 text-xs text-slate-500 hover:text-brand-accentOrange transition-colors">
                <i class="fa-regular fa-heart"></i>
                <span id="likes-count-${item.id}" class="font-bold">${item.likes}</span>
              </button>
            </div>
          </div>
        `;
        container.innerHTML += itemHtml;
      });
    }

    function likeGalleryItem(itemId) {
      const countElement = document.getElementById(`likes-count-${itemId}`);
      if (countElement) {
        let currentLikes = parseInt(countElement.textContent);
        countElement.textContent = currentLikes + 1;
        showToast("Voted on procedural masterpiece!");
      }
    }


    // ================= CREATORS HUB INJECTION ================= -->
    function renderCreatorsGrid() {
      const container = document.getElementById('creators-grid');
      container.innerHTML = "";

      creatorsData.forEach(creator => {
        const creatorHtml = `
          <div class="bg-white rounded-[2.5rem] p-6 border border-white/20 shadow-sm premium-transition hover:shadow-lg hover:border-brand-cardBlue/30 relative overflow-hidden flex flex-col justify-between h-[280px]">
            <!-- Dynamic avatar decoration -->
            <div class="flex justify-between items-start">
              <div class="w-14 h-14 rounded-full bg-brand-cardBlue/20 flex items-center justify-center text-brand-cardBlue text-2xl font-bold">
                ${creator.name[0]}
              </div>
              <span class="bg-brand-cardBlue/10 text-brand-cardBlue text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                ${creator.badge}
              </span>
            </div>

            <div class="mt-4">
              <h3 class="font-display font-bold text-lg text-[#1d2a3a] leading-none">${creator.name}</h3>
              <span class="text-xs text-slate-400 font-medium block mt-1">${creator.role}</span>
              <p class="text-xs text-slate-600 mt-2 leading-relaxed">
                ${creator.bio}
              </p>
            </div>

            <div class="flex justify-between items-center mt-6 pt-3 border-t border-slate-100 text-xs">
              <span class="font-semibold text-slate-400">Followers: <strong class="text-[#1d2a3a]">${creator.followers}</strong></span>
              <button onclick="showToast('Subscribed to creator updates!')" class="text-xs font-bold uppercase text-brand-cardBlue hover:underline">
                Follow Space
              </button>
            </div>
          </div>
        `;
        container.innerHTML += creatorHtml;
      });
    }


    // ================= MODAL & POPUP CONTROLS ================= -->
    function openModal(modalId) {
      const modal = document.getElementById(`modal-${modalId}`);
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.querySelector('.transform').classList.remove('scale-95');
        modal.querySelector('.transform').classList.add('scale-100');
      }, 50);
    }

    function closeModal(modalId) {
      const modal = document.getElementById(`modal-${modalId}`);
      modal.classList.add('opacity-0');
      modal.querySelector('.transform').classList.remove('scale-100');
      modal.querySelector('.transform').classList.add('scale-95');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 300);
    }

    function openExportModal() {
      // Set active file based on viewport selection state
      const textTitle = document.getElementById('rendered-title').textContent;
      const fileTarget = textTitle.replace('.obj', '.zip');
      document.getElementById('export-filename').textContent = fileTarget.toLowerCase();
      openModal('export');
    }

    function handleSignupSubmit(event) {
      event.preventDefault();
      closeModal('join');
      showToast("Onboarding processing system. Welcome aboard Hex!");
    }


    // ================= VISUAL TOAST NOTIFICATION SYSTEM ================= -->
    let toastTimeout;
    function showToast(message) {
      const toast = document.getElementById('toast-notify');
      const toastText = document.getElementById('toast-text');

      clearTimeout(toastTimeout);
      toastText.textContent = message;

      toast.classList.remove('hidden', 'translate-y-10');
      setTimeout(() => {
        toast.classList.add('translate-y-0');
      }, 10);

      toastTimeout = setTimeout(() => {
        toast.classList.remove('translate-y-0');
        toast.classList.add('translate-y-10');
        setTimeout(() => {
          toast.classList.add('hidden');
        }, 300);
      }, 3000);
    }


    // ================= INITIALIZER ON WINDOW LOAD ================= -->
    window.onload = function() {
      renderNews();
      renderGalleryGrid(galleryItems);
      renderCreatorsGrid();

      // Track screen resize updates to optimize ThreeJS viewport widths
      window.addEventListener('resize', () => {
        if (appState.activeTab === 'workspace' && isThreeJSInitialized) {
          const canvas = document.getElementById('studio3d-canvas');
          const width = canvas.parentElement.clientWidth;
          const height = canvas.parentElement.clientHeight;
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        }
      });
    }
  </script>

</body>
</html>
10
import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  Layers, 
  Cpu, 
  Sparkles, 
  Sliders, 
  ArrowRight, 
  Check, 
  Copy, 
  Maximize2, 
  Grid, 
  SlidersHorizontal,
  ChevronRight,
  Monitor,
  Heart,
  Share2,
  Package,
  FileText,
  Bookmark,
  Bell,
  Eye,
  Settings,
  HelpCircle,
  Code,
  X,
  Play
} from 'lucide-react';

export default function App() {
  // Navigation State: 'landing' or 'system'
  const [currentView, setCurrentView] = useState('landing');
  
  // Customizer State
  const [selectedColor, setSelectedColor] = useState('copper');
  const [selectedMaterial, setSelectedMaterial] = useState('boucle');
  const [sofaSections, setSofaSections] = useState(3);
  
  // Interactive Bento "4 Layers" State
  const [activeLayer, setActiveLayer] = useState('concept');

  // Customizer Gallery Highlight
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Active FAQ Accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // Notification Toast System
  const [toasts, setToasts] = useState([]);
  
  // Design System Explorer States
  const [btnHoverEffect, setBtnHoverEffect] = useState('glow');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedToken, setCopiedToken] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Helper to trigger custom elegant toast
  const triggerToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Copy-to-clipboard simulator for Design System Token
  const copyToken = (tokenText, tokenName) => {
    document.execCommand('copy'); // Fallback capability helper
    navigator.clipboard?.writeText(tokenText);
    setCopiedToken(tokenName);
    triggerToast(`Copied token: ${tokenName}`);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  // Colors mapping matching the inspiration design palette
  const colors = {
    copper: { name: 'Rust Copper', hex: '#D3542B', bg: 'bg-[#D3542B]', border: 'border-[#D3542B]', text: 'text-[#D3542B]', glow: 'shadow-[0_0_20px_rgba(211,84,43,0.4)]' },
    obsidian: { name: 'Obsidian Black', hex: '#1C1C1E', bg: 'bg-[#1C1C1E]', border: 'border-[#3a3a3c]', text: 'text-neutral-400', glow: 'shadow-[0_0_20px_rgba(28,28,30,0.4)]' },
    alabaster: { name: 'Warm Alabaster', hex: '#E6DFD5', bg: 'bg-[#E6DFD5]', border: 'border-[#E6DFD5]', text: 'text-[#E6DFD5]', glow: 'shadow-[0_0_20px_rgba(230,223,213,0.3)]' },
    moss: { name: 'Alpine Moss', hex: '#3E4E43', bg: 'bg-[#3E4E43]', border: 'border-[#3E4E43]', text: 'text-[#3E4E43]', glow: 'shadow-[0_0_20px_rgba(62,78,67,0.4)]' }
  };

  const materials = {
    boucle: { name: 'Bouclé Architectural', costMultiplier: 1.2 },
    nubuck: { name: 'Aniline Nubuck Leather', costMultiplier: 1.6 },
    linen: { name: 'Heavy Loom Belgian Linen', costMultiplier: 1.0 },
    velvet: { name: 'Mohair Velvet', costMultiplier: 1.4 }
  };

  // Live calculated estimates based on user selections
  const basePrice = 4500;
  const currentPrice = Math.round((basePrice * materials[selectedMaterial].costMultiplier) + (sofaSections * 850));
  const guestRetentionScore = Math.round(75 + (sofaSections * 5) + (selectedColor === 'copper' ? 12 : 5));

  return (
    <div className="min-h-screen bg-[#09090A] text-neutral-100 font-sans antialiased relative overflow-x-hidden selection:bg-[#D3542B] selection:text-white">
      {/* Import High-end Architectural & Script Fonts inside App */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400;1,600&family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-script { font-family: 'Cormorant Garamond', serif; font-style: italic; }
        .font-inter { font-family: 'Inter', sans-serif; }
        .glow-accent { text-shadow: 0 0 30px rgba(211, 84, 43, 0.45); }
        .border-grid { border-color: rgba(255, 255, 255, 0.07); }
        /* Smooth scrollbar styling */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #09090A; }
        ::-webkit-scrollbar-thumb { background: #1C1C1E; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #D3542B; }
      `}</style>

      {/* Decorative Grid Overlays (Architectural lines of inspiration image) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      {/* Cinematic Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[500px] bg-gradient-to-b from-[#D3542B]/10 to-transparent blur-[120px] pointer-events-none z-0"></div>

      {/* Modern Header / Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/5 bg-[#09090A]/85 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo inspired by image */}
          <div className="flex items-center space-x-12">
            <a href="#home" className="flex items-center space-x-2 group">
              <span className="text-xl font-extrabold tracking-[0.25em] font-syne text-white transition-all duration-300 group-hover:text-[#D3542B]">
                F<span className="text-[#D3542B]">*</span>RMORA
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] uppercase tracking-widest text-[#D3542B] border border-[#D3542B]/30 bg-[#D3542B]/5 rounded font-mono">
                STUDIO v2.5
              </span>
            </a>
            
            {/* Nav Links */}
            <nav className="hidden lg:flex items-center space-x-8 text-xs font-medium uppercase tracking-widest text-neutral-400">
              <button 
                onClick={() => { setCurrentView('landing'); }}
                className={`transition-colors duration-200 hover:text-white ${currentView === 'landing' ? 'text-white border-b border-[#D3542B] pb-1' : ''}`}
              >
                The Philosophy
              </button>
              <button 
                onClick={() => { setCurrentView('landing'); setTimeout(() => document.getElementById('layers')?.scrollIntoView({behavior: 'smooth'}), 100); }}
                className="transition-colors duration-200 hover:text-white"
              >
                Four Layers
              </button>
              <button 
                onClick={() => { setCurrentView('landing'); setTimeout(() => document.getElementById('configurator')?.scrollIntoView({behavior: 'smooth'}), 100); }}
                className="transition-colors duration-200 hover:text-white"
              >
                Configuration Lab
              </button>
              <button 
                onClick={() => { setCurrentView('system'); }}
                className={`transition-colors duration-200 hover:text-white flex items-center gap-1.5 ${currentView === 'system' ? 'text-white border-b border-[#D3542B] pb-1' : ''}`}
              >
                <Code className="w-3 h-3 text-[#D3542B]" />
                Design System Workspace
              </button>
            </nav>
          </div>

          {/* Action Call to Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {
                if (currentView === 'landing') {
                  setCurrentView('system');
                  triggerToast('Initialized F*RMORA Component Explorer');
                } else {
                  setCurrentView('landing');
                }
              }} 
              className="text-xs font-semibold tracking-widest uppercase text-neutral-300 hover:text-white transition-all bg-neutral-900 border border-white/10 hover:border-[#D3542B]/40 px-5 py-2.5 rounded-sm"
            >
              {currentView === 'landing' ? 'Inspect Design System' : 'Back to Showcase'}
            </button>
            
            <button 
              onClick={() => {
                setModalOpen(true);
                triggerToast('Opening Consultation Portal');
              }}
              className="relative group overflow-hidden bg-[#D3542B] hover:bg-[#e45d31] text-white text-xs font-semibold tracking-widest uppercase px-6 py-2.5 rounded-sm transition-all shadow-[0_4px_20px_rgba(211,84,43,0.25)] flex items-center space-x-2"
            >
              <span className="relative z-10">Inquire Object</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Main View Manager */}
      {currentView === 'landing' ? (
        <>
          {/* HERO SECTION - Architectural Typography & Visual Tenants */}
          <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 border-b border-grid">
            <div className="text-center max-w-5xl mx-auto mb-20">
              <p className="text-[#D3542B] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                THE PRINCIPLE OF SCULPTURAL ARCHITECTURE
              </p>
              
              {/* Inspired directly by high-end typography layout "A STRONG OBJECT CHANGES the behavior OF GUESTS" */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-syne text-white uppercase leading-[1.05] mb-6">
                A Strong Object Changes <br />
                <span className="font-script text-[#D3542B] font-light lowercase tracking-normal capitalize mr-3">
                  the behavior
                </span> 
                of guests
              </h1>
              
              <p className="text-neutral-400 font-inter text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-wide">
                F*RMORA designs highly intentional, sculptural furniture installations that command attention, manage circulation fluidly, and elevate physical interior volumes into highly premium environments.
              </p>
            </div>

            {/* 4 Cards Row directly representing Row 1 layout from inspiration image */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 01 - Visual Attention (Orange solid color block) */}
              <div className="bg-[#D3542B] p-8 rounded-sm text-white flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(211,84,43,0.3)]">
                <div>
                  <span className="font-mono text-xs opacity-60 block mb-6">01</span>
                  <h3 className="text-lg font-bold font-syne uppercase tracking-wider mb-3 leading-snug">
                    More Visual <br />Attention
                  </h3>
                </div>
                <p className="text-white/80 text-xs leading-relaxed font-inter">
                  A sofa or armchair creates a visual anchor that allows guests to immediately read, comprehend, and remember the emotional depth of the physical layout.
                </p>
              </div>

              {/* Card 02 - Manages Guest Behavior (Semi-translucent visual) */}
              <div className="relative overflow-hidden bg-neutral-900/80 border border-white/5 p-8 rounded-sm flex flex-col justify-between min-h-[300px] group transition-all duration-300 hover:border-[#D3542B]/30">
                {/* Background organic shape mimicking the original floral visual */}
                <div className="absolute right-0 bottom-0 w-44 h-44 opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#D3542B]">
                    <path d="M100 0C110.825 58.334 141.666 89.1754 200 100C141.666 110.825 110.825 141.666 100 200C89.1754 141.666 58.334 110.825 0 100C58.334 89.1754 89.1754 58.334 100 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="relative z-10">
                  <span className="font-mono text-xs text-[#D3542B] block mb-6">02</span>
                  <h3 className="text-lg font-bold font-syne uppercase tracking-wider mb-3 leading-snug text-neutral-100">
                    Manages Guest <br />Behavior
                  </h3>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed font-inter relative z-10">
                  Creates natural flow structures. Guests organically prioritize designated zones, lingering longer and utilizing space precisely as the physical business demands.
                </p>
              </div>

              {/* Card 03 - Content Generation */}
              <div className="bg-neutral-950 border border-white/5 p-8 rounded-sm flex flex-col justify-between min-h-[300px] group transition-all duration-300 hover:border-white/15">
                <div>
                  <span className="font-mono text-xs text-neutral-500 block mb-6">03</span>
                  <h3 className="text-lg font-bold font-syne uppercase tracking-wider mb-3 leading-snug text-neutral-100">
                    Generates Photo <br />& Video Content
                  </h3>
                </div>
                <div>
                  {/* Miniature abstract modern architectural line */}
                  <div className="h-[2px] w-12 bg-[#D3542B] mb-4"></div>
                  <p className="text-neutral-400 text-xs leading-relaxed font-inter">
                    Furniture becomes a natural photo point. Guests capture and broadcast high-end imagery naturally, serving as organic, viral PR channels for your architecture.
                  </p>
                </div>
              </div>

              {/* Card 04 - Premium Feeling */}
              <div className="bg-[#D3542B]/10 border border-[#D3542B]/30 p-8 rounded-sm flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:bg-[#D3542B]/15 hover:-translate-y-1">
                <div>
                  <span className="font-mono text-xs text-[#D3542B] block mb-6">04</span>
                  <h3 className="text-lg font-bold font-syne uppercase tracking-wider mb-3 leading-snug text-neutral-100">
                    Increases Feeling <br />of Premium
                  </h3>
                </div>
                <p className="text-neutral-300 text-xs leading-relaxed font-inter">
                  One expressive architectural element transforms baseline perception instantly. High-end materials and structural intent justify elevated pricing tiers.
                </p>
              </div>

            </div>
          </section>

          {/* PERFORMANCE METRICS & REAL-WORLD STATISTICS (Inspired by Middle Row of image) */}
          <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-b border-grid bg-gradient-to-b from-transparent to-[#101012]/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column - Large Circle & Core Brand Metric */}
              <div className="lg:col-span-5 bg-gradient-to-tr from-[#161619] to-neutral-900 border border-white/5 rounded-sm p-10 flex flex-col justify-between relative overflow-hidden min-h-[420px]">
                
                {/* Visual copper glow circle matching inspiration image */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-dashed border-[#D3542B]/20 flex items-center justify-center">
                  <div className="w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-transparent via-[#D3542B]/5 to-transparent blur-md"></div>
                </div>

                <div className="relative z-10 flex justify-between items-center w-full">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">PARTNERSHIP SCALE</span>
                  <span className="text-xs font-semibold text-[#D3542B]">F*RMORA CONTRACT</span>
                </div>

                {/* Central Circle Content "310 Clients" */}
                <div className="relative z-10 text-center my-auto">
                  <span className="text-[11px] uppercase tracking-widest text-neutral-400 block mb-1">For whom</span>
                  <h2 className="text-5xl md:text-6xl font-extrabold font-syne tracking-tight text-white mb-2">
                    310 CLIENTS
                  </h2>
                  <span className="text-xs uppercase tracking-widest text-[#D3542B] block">
                    furniture as an asset of the space
                  </span>
                </div>

                <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-4">
                  <span className="text-xs uppercase font-syne tracking-widest text-white">F*RMORA GLOBAL</span>
                  <span className="text-xs text-neutral-500">Est. 2021</span>
                </div>
              </div>

              {/* Right Column - Grid of Concrete Operational Results */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                
                {/* Top Half Showcase: Gallery & Boutique Hotel Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Card: Gallery */}
                  <div className="bg-neutral-950 border border-white/5 rounded-sm p-8 transition-all hover:border-[#D3542B]/20">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">GALLERY</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D3542B]"></span>
                    </div>
                    <div className="mb-2">
                      <span className="text-4xl font-extrabold text-white font-syne tracking-tight">220%</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      The space's organic social and editorial media coverage across digital outlets immediately increased.
                    </p>
                  </div>

                  {/* Card: Boutique Hotel */}
                  <div className="bg-neutral-950 border border-white/5 rounded-sm p-8 transition-all hover:border-[#D3542B]/20">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">BOUTIQUE HOTEL</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D3542B]"></span>
                    </div>
                    <div className="mb-2">
                      <span className="text-4xl font-extrabold text-white font-syne tracking-tight">2X</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Average dwell time and secondary service expenditure in primary common areas experienced double growth.
                    </p>
                  </div>

                </div>

                {/* Simulated Interactive Panoramic Visual from inspiration image */}
                <div className="relative h-[220px] rounded-sm overflow-hidden border border-white/5 group">
                  <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-40 transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
                  
                  {/* Highlight Linear Border Overlay resembling interior columns */}
                  <div className="absolute inset-y-0 left-1/4 w-[1px] bg-white/5"></div>
                  <div className="absolute inset-y-0 left-2/4 w-[1px] bg-white/5"></div>
                  <div className="absolute inset-y-0 left-3/4 w-[1px] bg-white/5"></div>

                  <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-center justify-between gap-4 z-10">
                    <div>
                      <span className="px-2 py-0.5 text-[8px] uppercase tracking-widest text-white border border-white/20 bg-black/40 rounded-sm mb-1.5 inline-block">
                        Featured Layout
                      </span>
                      <h4 className="text-sm font-semibold tracking-wider uppercase text-white font-syne">The Arc Pavilion Exhibition</h4>
                    </div>
                    <button 
                      onClick={() => triggerToast('Launching architectural concept deck...')}
                      className="text-[10px] tracking-widest font-semibold text-white uppercase flex items-center space-x-1 hover:text-[#D3542B] transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Bottom Half Showcase: Restaurant & Guest Return Rate */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Card: Restaurant */}
                  <div className="bg-neutral-950 border border-white/5 rounded-sm p-8 transition-all hover:border-[#D3542B]/20">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">RESTAURANT</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D3542B]"></span>
                    </div>
                    <div className="mb-2">
                      <span className="text-4xl font-extrabold text-white font-syne tracking-tight">40%</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Average customer transaction check value of the establishment increased due to visual prestige positioning.
                    </p>
                  </div>

                  {/* Card: Guest Return Rate */}
                  <div className="bg-neutral-950 border border-white/5 rounded-sm p-8 transition-all hover:border-[#D3542B]/20">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">GUEST RETURN RATE</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D3542B]"></span>
                    </div>
                    <div className="mb-2">
                      <span className="text-4xl font-extrabold text-white font-syne tracking-tight">35%</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Surge in repeat guests and direct organic booking confirmations logged within a 90-day post-launch window.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </section>

          {/* THE 4 LAYERS OF A STRONG OBJECT - INTERACTIVE INSIGHT (Inspired by Row 3 of image) */}
          <section id="layers" className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-b border-grid">
            
            {/* Header Layout directly replicating the image hierarchy */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
              <div className="lg:col-span-6">
                <h2 className="text-4xl md:text-5xl font-extrabold font-syne text-white uppercase tracking-tight leading-[1.1]">
                  4 LAYERS <br />
                  <span className="font-script text-[#D3542B] font-light lowercase tracking-normal capitalize">
                    of strong object
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:border-l border-white/10 lg:pl-10">
                <p className="text-xs md:text-sm uppercase tracking-wider text-[#D3542B] mb-2 font-semibold">
                  A PREMIUM OBJECT IS NOT JUST A BEAUTIFUL SHAPE.
                </p>
                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed tracking-wide font-inter">
                  IT IS HELD TOGETHER BY FOUR CRUCIAL STRUCTURAL LEVELS THAT WORK HARMONIOUSLY TO PROVIDE ATMOSPHERE, SCALE, AND RETENTION.
                </p>
              </div>
            </div>

            {/* Content Display: Big Asset Image left, Interactive Selector right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Visual Sofa Focus (Warm Modular Architecture Mockup) */}
              <div className="lg:col-span-6 relative rounded-sm overflow-hidden border border-white/10 bg-[#161619] aspect-[4/3] p-6 flex items-center justify-center group">
                
                {/* Render colored/customized organic visual indicating material layers */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1C1C1E] via-neutral-900 to-black"></div>
                
                {/* Render active layer schema indicator */}
                <div className="absolute top-6 left-6 z-10 flex items-center space-x-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D3542B] animate-pulse"></span>
                  <span className="text-[9px] font-mono tracking-widest text-neutral-300 uppercase">ACTIVE ANALYST: {activeLayer}</span>
                </div>

                {/* 3D-like sofa schematic wireframe or full graphic representation */}
                <div className="relative w-full h-full flex flex-col justify-center items-center">
                  
                  {/* Central Sofa Vector Render (Dynamic depending on active layer state) */}
                  <div className="relative w-[85%] h-[60%] flex items-center justify-center transition-all duration-500">
                    
                    {/* Sofa Base block */}
                    <div className="absolute bottom-6 w-full h-20 bg-neutral-800 rounded-lg transform skew-x-3 shadow-2xl flex items-end justify-center">
                      <div className="w-[98%] h-[80%] bg-neutral-900 rounded-md m-0.5 opacity-90 relative overflow-hidden">
                        {/* Layer specific highlights */}
                        {activeLayer === 'engineering' && (
                          <div className="absolute inset-0 border border-dashed border-[#D3542B]/60 animate-pulse flex items-center justify-center">
                            <span className="text-[9px] font-mono text-[#D3542B]">TENSION ROD GRID v4</span>
                          </div>
                        )}
                        {activeLayer === 'materials' && (
                          <div className="absolute inset-0 bg-[radial-gradient(#D3542B_1px,transparent_1px)] bg-[size:6px_6px] opacity-45"></div>
                        )}
                      </div>
                    </div>

                    {/* Left Cushion */}
                    <div className={`absolute bottom-20 left-4 w-[45%] h-24 rounded-t-xl transition-all duration-300 transform -skew-x-2 ${
                      activeLayer === 'comfort' ? 'bg-[#D3542B]' : 'bg-[#C24E2B]'
                    } shadow-lg flex items-center justify-center overflow-hidden`}>
                      <div className="absolute top-1 right-2 text-[8px] font-mono text-white/50">L1</div>
                      {activeLayer === 'materials' && <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>}
                    </div>

                    {/* Right Cushion */}
                    <div className={`absolute bottom-16 right-4 w-[48%] h-24 rounded-t-xl transition-all duration-300 transform skew-y-1 ${
                      activeLayer === 'comfort' ? 'bg-[#D3542B]' : 'bg-[#A83D1F]'
                    } shadow-md flex items-center justify-center overflow-hidden`}>
                      <div className="absolute top-1 right-2 text-[8px] font-mono text-white/50">L2</div>
                      {activeLayer === 'materials' && <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>}
                    </div>

                    {/* Left Backrest cushion */}
                    <div className="absolute bottom-[160px] left-6 w-[42%] h-14 bg-[#8C3016] rounded-xl transform -rotate-3 border-b border-black/20 flex items-center justify-center">
                      <span className="text-[8px] font-mono text-white/30">SUPPORT BACK</span>
                    </div>

                    {/* Right Backrest cushion */}
                    <div className="absolute bottom-[150px] right-10 w-[42%] h-14 bg-[#A83D1F] rounded-xl transform rotate-3 border-b border-black/20 flex items-center justify-center">
                      <span className="text-[8px] font-mono text-white/30">SUPPORT BACK</span>
                    </div>

                    {/* Conceptual Floating Rings */}
                    {activeLayer === 'concept' && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-56 h-56 rounded-full border border-[#D3542B]/40 animate-ping opacity-25"></div>
                        <div className="absolute text-xs font-mono tracking-widest text-[#D3542B] bg-black px-2 py-0.5 border border-[#D3542B]/30 rounded">
                          ORGANIC PROPORTIONS
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Schema Info Footer */}
                  <div className="w-full mt-auto pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-neutral-400">
                    <span>X-RAY SCHEMATIC VIEW</span>
                    <span className="text-white">F*RMORA LAB v0.98</span>
                  </div>

                </div>

              </div>

              {/* Right Column: Dynamic Layers Grid based on image details */}
              <div className="lg:col-span-6 space-y-4">
                
                {/* Layer 1: Concept */}
                <button 
                  onClick={() => setActiveLayer('concept')}
                  className={`w-full text-left p-6 rounded-sm border transition-all duration-300 flex items-start space-x-6 ${
                    activeLayer === 'concept' 
                      ? 'bg-neutral-900 border-[#D3542B] shadow-[0_4px_25px_rgba(211,84,43,0.1)]' 
                      : 'bg-neutral-950/45 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`p-3 rounded ${activeLayer === 'concept' ? 'bg-[#D3542B] text-white' : 'bg-neutral-900 text-neutral-400'}`}>
                    <Compass className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-sm font-bold uppercase tracking-wider font-syne text-neutral-100">CONCEPT</h4>
                      <span className="text-xs text-neutral-500 font-mono">01 / LAYER</span>
                    </div>
                    <p className="text-xs text-neutral-400 mb-2">Unique visual language and core architectural geometry.</p>
                    {activeLayer === 'concept' && (
                      <div className="text-xs text-neutral-300 border-t border-white/10 pt-2 mt-2 leading-relaxed animate-fadeIn">
                        Our concept methodology emphasizes bold organic curvature. Each piece starts as an art-grade focal block designed to harmonize interior flows, providing immediate visual storytelling that normal boxy commercial sofas cannot achieve.
                      </div>
                    )}
                  </div>
                </button>

                {/* Layer 2: Comfort */}
                <button 
                  onClick={() => setActiveLayer('comfort')}
                  className={`w-full text-left p-6 rounded-sm border transition-all duration-300 flex items-start space-x-6 ${
                    activeLayer === 'comfort' 
                      ? 'bg-neutral-900 border-[#D3542B] shadow-[0_4px_25px_rgba(211,84,43,0.1)]' 
                      : 'bg-neutral-950/45 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`p-3 rounded ${activeLayer === 'comfort' ? 'bg-[#D3542B] text-white' : 'bg-neutral-900 text-neutral-400'}`}>
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-sm font-bold uppercase tracking-wider font-syne text-neutral-100">COMFORT</h4>
                      <span className="text-xs text-neutral-500 font-mono">02 / LAYER</span>
                    </div>
                    <p className="text-xs text-neutral-400 mb-2">Proper physical fit, posture angles, and human interaction scenario.</p>
                    {activeLayer === 'comfort' && (
                      <div className="text-xs text-neutral-300 border-t border-white/10 pt-2 mt-2 leading-relaxed animate-fadeIn">
                        Ergonomics crafted for hospitality environment metrics. Deep lumbar reinforcement maintains absolute high-comfort while simultaneously prompting upright, high-engagement body language.
                      </div>
                    )}
                  </div>
                </button>

                {/* Layer 3: Engineering */}
                <button 
                  onClick={() => setActiveLayer('engineering')}
                  className={`w-full text-left p-6 rounded-sm border transition-all duration-300 flex items-start space-x-6 ${
                    activeLayer === 'engineering' 
                      ? 'bg-neutral-900 border-[#D3542B] shadow-[0_4px_25px_rgba(211,84,43,0.1)]' 
                      : 'bg-neutral-950/45 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`p-3 rounded ${activeLayer === 'engineering' ? 'bg-[#D3542B] text-white' : 'bg-neutral-900 text-neutral-400'}`}>
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-sm font-bold uppercase tracking-wider font-syne text-neutral-100">ENGINEERING</h4>
                      <span className="text-xs text-neutral-500 font-mono">03 / LAYER</span>
                    </div>
                    <p className="text-xs text-neutral-400 mb-2">Design reliability, solid steel frameworks, and internal hardware integrity.</p>
                    {activeLayer === 'engineering' && (
                      <div className="text-xs text-neutral-300 border-t border-white/10 pt-2 mt-2 leading-relaxed animate-fadeIn">
                        Constructed using precision CNC steel tubing frames. Guaranteed structural performance rated for heavy lounge use without dynamic compression drift.
                      </div>
                    )}
                  </div>
                </button>

                {/* Layer 4: Materials */}
                <button 
                  onClick={() => setActiveLayer('materials')}
                  className={`w-full text-left p-6 rounded-sm border transition-all duration-300 flex items-start space-x-6 ${
                    activeLayer === 'materials' 
                      ? 'bg-neutral-900 border-[#D3542B] shadow-[0_4px_25px_rgba(211,84,43,0.1)]' 
                      : 'bg-neutral-950/45 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`p-3 rounded ${activeLayer === 'materials' ? 'bg-[#D3542B] text-white' : 'bg-neutral-900 text-neutral-400'}`}>
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-sm font-bold uppercase tracking-wider font-syne text-neutral-100">MATERIALS</h4>
                      <span className="text-xs text-neutral-500 font-mono">04 / LAYER</span>
                    </div>
                    <p className="text-xs text-neutral-400 mb-2">Tactility, durability, high-traffic resistance, and luxury care.</p>
                    {activeLayer === 'materials' && (
                      <div className="text-xs text-neutral-300 border-t border-white/10 pt-2 mt-2 leading-relaxed animate-fadeIn">
                        Sourced exclusively from premium Italian mills. High Wyzenbeek rubs (over 80,000 double rubs) with stain-resistant fiber shields ready for intense commercial usage.
                      </div>
                    )}
                  </div>
                </button>

              </div>
            </div>

          </section>

          {/* DYNAMIC WORKSPACE SECTION - LIVE OBJECT CONFIGURATOR */}
          <section id="configurator" className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-b border-grid">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="px-3 py-1 text-[10px] uppercase tracking-widest text-[#D3542B] border border-[#D3542B]/30 bg-[#D3542B]/5 rounded-sm mb-4 inline-block font-mono">
                REAL-TIME OBJECT LAB
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-syne text-white uppercase tracking-tight mb-4">
                Interactive Customizer
              </h2>
              <p className="text-neutral-400 text-sm font-inter">
                Configure your F*RMORA setup in real time. Manipulate material compositions, color models, and sectional configurations to estimate physical atmosphere impacts and pricing scales.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Configurator Visual Box */}
              <div className="lg:col-span-7 bg-[#101012] border border-white/5 rounded-sm p-8 flex flex-col justify-between relative overflow-hidden min-h-[450px]">
                {/* Soft backdrop glow matching active color */}
                <div className={`absolute -right-12 -top-12 w-64 h-64 rounded-full blur-[90px] opacity-35 transition-all duration-500 ${colors[selectedColor].glow}`}></div>
                
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 block">MODEL</span>
                    <span className="text-sm font-bold uppercase tracking-wider text-white font-syne">THE FORMORA MONOLITH SECTIONAL</span>
                  </div>
                  <div className="bg-neutral-900 border border-white/10 px-3 py-1 rounded-sm text-[10px] font-mono text-[#D3542B]">
                    LIVE RENDER FEED
                  </div>
                </div>

                {/* Big Customized Render */}
                <div className="relative w-full h-64 my-auto flex flex-col items-center justify-center">
                  
                  {/* Dynamic Modular Sofa blocks render */}
                  <div className="flex items-end justify-center space-x-1.5 w-full max-w-lg transition-all duration-500">
                    {/* Render active quantity of sections */}
                    {Array.from({ length: sofaSections }).map((_, i) => (
                      <div 
                        key={i}
                        style={{ height: `${130 + (i % 2 === 0 ? 10 : 0)}px` }}
                        className={`w-28 rounded-md transition-all duration-500 flex flex-col justify-between p-3 relative overflow-hidden shadow-2xl ${colors[selectedColor].bg} border-t ${colors[selectedColor].border}`}
                      >
                        <div className="flex justify-between items-start text-white/55 text-[8px] font-mono">
                          <span>SEC {i + 1}</span>
                          <Maximize2 className="w-2.5 h-2.5" />
                        </div>
                        
                        {/* Dynamic Fabric texture overlay pattern */}
                        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:5px_5px]"></div>
                        
                        <div className="text-[9px] font-bold text-white uppercase tracking-wider truncate">
                          {selectedMaterial}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ground Reflection Accent */}
                  <div className="w-4/5 h-4 bg-gradient-to-r from-transparent via-[#D3542B]/10 to-transparent blur-md mt-2"></div>
                </div>

                {/* Live calculation bar */}
                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 relative z-10 text-center">
                  <div>
                    <span className="text-[9px] font-mono text-neutral-500 block uppercase">ESTIMATED PRICE</span>
                    <span className="text-lg font-bold text-white font-syne">${currentPrice.toLocaleString()} USD</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-500 block uppercase">GUEST RETENTION RATING</span>
                    <span className="text-lg font-bold text-[#D3542B] font-syne">{guestRetentionScore}%</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-500 block uppercase">CONSTRUCTION TIER</span>
                    <span className="text-lg font-bold text-neutral-300 font-syne">Commercial A+</span>
                  </div>
                </div>

              </div>

              {/* Configurator Selection Controls */}
              <div className="lg:col-span-5 bg-neutral-900/60 border border-white/5 rounded-sm p-8 flex flex-col justify-between">
                
                <div className="space-y-8">
                  {/* Option Set 1: Choose Color Palette */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-syne">
                        Select Atmosphere Tone
                      </label>
                      <span className="text-xs font-mono text-[#D3542B]">{colors[selectedColor].name}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {Object.keys(colors).map((cKey) => (
                        <button 
                          key={cKey}
                          onClick={() => {
                            setSelectedColor(cKey);
                            triggerToast(`Configured tone: ${colors[cKey].name}`);
                          }}
                          className={`h-12 rounded border transition-all flex items-center justify-center relative ${
                            selectedColor === cKey ? 'border-[#D3542B] ring-1 ring-[#D3542B]' : 'border-white/10 hover:border-white/20'
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-full ${colors[cKey].bg} block shadow-inner`}></span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Option Set 2: Choose Architectural Textiles */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-syne">
                        Tactile Material Grade
                      </label>
                      <span className="text-xs font-mono text-neutral-400 capitalize">{selectedMaterial}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.keys(materials).map((mKey) => (
                        <button 
                          key={mKey}
                          onClick={() => {
                            setSelectedMaterial(mKey);
                            triggerToast(`Switched material to ${materials[mKey].name}`);
                          }}
                          className={`p-3 text-left rounded border transition-all text-xs font-medium ${
                            selectedMaterial === mKey 
                              ? 'bg-[#D3542B]/10 border-[#D3542B] text-white' 
                              : 'bg-neutral-950/40 border-white/5 hover:border-white/15 text-neutral-400'
                          }`}
                        >
                          <div className="font-bold block text-neutral-200 mb-0.5">{materials[mKey].name}</div>
                          <span className="text-[10px] font-mono text-[#D3542B]">x{materials[mKey].costMultiplier} Premium</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Option Set 3: Sofa Sections Count */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-syne">
                        Sectional Segment Volume
                      </label>
                      <span className="text-xs font-mono text-white">{sofaSections} Modules</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <input 
                        type="range" 
                        min="2" 
                        max="5" 
                        value={sofaSections}
                        onChange={(e) => {
                          setSofaSections(parseInt(e.target.value));
                        }}
                        className="w-full accent-[#D3542B] bg-neutral-950 h-1 rounded" 
                      />
                      <div className="flex space-x-1.5">
                        {[2, 3, 4, 5].map((val) => (
                          <button 
                            key={val}
                            onClick={() => setSofaSections(val)}
                            className={`w-8 h-8 rounded text-xs font-mono flex items-center justify-center transition-all ${
                              sofaSections === val ? 'bg-[#D3542B] text-white' : 'bg-neutral-950 hover:bg-neutral-800 text-neutral-400'
                            }`}
                          >
                            {val}
                          </button>
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] text-neutral-500 block mt-2">
                      Adjusting module layout modifies linear footprints and circulation flow properties.
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <button 
                    onClick={() => {
                      triggerToast('Layout configuration frozen. Routing to layout design engineer!');
                      setModalOpen(true);
                    }}
                    className="w-full bg-white text-black font-semibold text-xs tracking-widest uppercase py-3.5 rounded-sm hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          </section>

          {/* FAQS & INTENTIONAL DIALOGUE SECTION */}
          <section className="relative z-10 max-w-4xl mx-auto px-6 py-24 border-b border-grid">
            <div className="text-center mb-16">
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-500">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-syne text-white uppercase tracking-tight mt-2">
                Questions on Spatial Asset Values
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Why should furniture be categorized as a spatial asset?",
                  a: "Commercial layouts spend thousands on drywall and static lighting, yet guests interact and build physical memories with furniture. An architectural centerpiece completely directs spatial flow, content generation, and spatial identity."
                },
                {
                  q: "How does F*RMORA support hospitality durability concerns?",
                  a: "Every frame utilizes a minimum of 2mm thick structural steel and custom high-resilience foam wrapped in premium Italian fabrics offering over 80,000 double rubs, treating intense public traffic as standard."
                },
                {
                  q: "Can the colors and configurations be custom-tailored to our design guide?",
                  a: "Absolutely. F*RMORA works directly alongside lead architects and design firms. We provide custom CAD/BIM models, tailored fabric selection, and absolute geometric modifications for verified commercial projects."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-neutral-950 border border-white/5 rounded-sm overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center text-sm font-bold uppercase tracking-wider text-white font-syne"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#D3542B] font-mono text-lg">{openFaq === index ? "−" : "+"}</span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-xs text-neutral-400 leading-relaxed font-inter border-t border-white/5 pt-4 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ACTION CTA FOR ENVISIONING NEW SPACES */}
          <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-neutral-900 via-neutral-950 to-[#101012] border border-white/5 rounded-sm p-12 md:p-16 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#D3542B]/10 rounded-full blur-[100px] pointer-events-none"></div>
              
              <p className="text-[#D3542B] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                COMMENCE SPATIAL ELEVATION
              </p>
              
              <h2 className="text-3xl md:text-5xl font-extrabold font-syne text-white uppercase tracking-tight mb-6">
                Ready to alter the <br />behavior of your spaces?
              </h2>
              
              <p className="text-neutral-400 font-inter text-xs md:text-sm max-w-xl mx-auto leading-relaxed tracking-wide mb-8">
                Consult with our studio design engineers today. Receive spatial layout previews, CAD integrations, and material specifications custom-tailored to your architectural goals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setModalOpen(true)}
                  className="bg-[#D3542B] hover:bg-[#e45d31] text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 rounded-sm transition-all shadow-[0_4px_25px_rgba(211,84,43,0.3)] flex items-center space-x-2"
                >
                  <span>Book Architectural Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('system');
                    triggerToast('Opening Component Architecture Workspace');
                  }}
                  className="bg-neutral-950 border border-white/10 hover:border-[#D3542B]/40 text-neutral-300 hover:text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 rounded-sm transition-all"
                >
                  Explore Core Design Kit
                </button>
              </div>

            </div>
          </section>
        </>
      ) : (
        /* DESIGN SYSTEM WORKSPACE VIEW - Complete Production Sandbox */
        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          
          {/* Header Introduction to Design System */}
          <div className="border-b border-grid pb-10 mb-12">
            <span className="text-[#D3542B] text-xs font-semibold tracking-[0.3em] uppercase block mb-2 font-mono">
              F*RMORA DESIGN SYSTEM v2.5 / ARCHITECTURE KIT
            </span>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold font-syne text-white uppercase tracking-tight">
                  Design System Workspace
                </h1>
                <p className="text-neutral-400 font-inter text-xs md:text-sm mt-2 max-w-2xl">
                  Inspect the absolute production-ready foundation blocks. Formulated from the rich copper-black architectural aesthetic of F*RMORA. Copy tokens, explore live interactive behaviors, and examine custom parameters.
                </p>
              </div>
              <button 
                onClick={() => setCurrentView('landing')}
                className="self-start lg:self-auto text-xs font-semibold tracking-widest uppercase bg-[#D3542B] text-white px-5 py-3 rounded-sm hover:bg-[#e45d31] transition-all"
              >
                ← Return to Showcase
              </button>
            </div>
          </div>

          {/* Visual Palette & Core Tokens Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Color Swatch Tokens Code */}
            <div className="lg:col-span-7 bg-neutral-950 border border-white/5 rounded-sm p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-syne mb-6 flex items-center justify-between">
                <span>01. CORE COLOR TOKENS</span>
                <span className="text-[10px] font-mono text-neutral-500">HEX SPECS</span>
              </h3>

              <div className="space-y-4">
                {[
                  { name: 'Formora Rust Accent', hex: '#D3542B', variable: 'color-accent', description: 'Primary spatial focal accent and cinematic highlight' },
                  { name: 'Deep Charcoal Void', hex: '#09090A', variable: 'color-bg-base', description: 'Baseline dark architectural atmosphere space' },
                  { name: 'Warm Panel Shadow', hex: '#101012', variable: 'color-bg-surface', description: 'Internal bento boxes and structural border panels' },
                  { name: 'Premium Platinum White', hex: '#F3F3F3', variable: 'color-text-high', description: 'Ultra crisp white typographic element reading' },
                  { name: 'Architectural Slate Grey', hex: '#A3A3A3', variable: 'color-text-muted', description: 'Informative metadata and spatial descriptions text' }
                ].map((token) => (
                  <div key={token.variable} className="flex items-center justify-between p-4 bg-neutral-900/50 rounded-sm border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded border border-white/10" style={{ backgroundColor: token.hex }}></div>
                      <div>
                        <span className="text-xs font-bold text-white uppercase tracking-wider block font-syne">{token.name}</span>
                        <span className="text-[10px] text-neutral-400 block">{token.description}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <code className="text-[10px] font-mono bg-black px-2.5 py-1 text-neutral-400 rounded">
                        {token.hex}
                      </code>
                      <button 
                        onClick={() => copyToken(token.hex, token.variable)}
                        className="p-1.5 hover:bg-neutral-800 rounded text-neutral-400 hover:text-white transition-colors"
                        title="Copy hex code"
                      >
                        {copiedToken === token.variable ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Guidelines Block */}
            <div className="lg:col-span-5 bg-neutral-950 border border-white/5 rounded-sm p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white font-syne mb-6">
                  02. TYPOGRAPHY MATRIX
                </h3>

                <div className="space-y-6">
                  
                  {/* Title 1 Specification */}
                  <div className="pb-4 border-b border-white/5">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[9px] font-mono text-neutral-500 uppercase">ARCHITECTURAL DISPLAY</span>
                      <span className="text-[9px] font-mono text-[#D3542B]">font-syne / TRACKING TIGHT</span>
                    </div>
                    <h4 className="text-2xl font-extrabold uppercase font-syne text-white tracking-tight">F*RMORA DESIGN</h4>
                  </div>

                  {/* Title 2 Specification */}
                  <div className="pb-4 border-b border-white/5">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[9px] font-mono text-neutral-500 uppercase">CINEMATIC SCRIPT SLIDES</span>
                      <span className="text-[9px] font-mono text-[#D3542B]">font-script / LOWERCASE SERIF</span>
                    </div>
                    <h4 className="text-2xl font-script text-[#D3542B] capitalize">the behavior of objects</h4>
                  </div>

                  {/* Body Text Specification */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[9px] font-mono text-neutral-500 uppercase">BODY & METRICS READS</span>
                      <span className="text-[9px] font-mono text-[#D3542B]">font-inter / SANS-SERIF</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Sleek structural reading is optimized for spatial data parameters. Standardizes hospitality analytics.
                    </p>
                  </div>

                </div>
              </div>

              {/* Typography Interactive Test sandbox */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <input 
                  type="text" 
                  value={searchQuery === '' ? 'Dynamic Design Typography Sandbox Test' : searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Test live typography preview..."
                  className="w-full bg-neutral-900 border border-white/10 rounded-sm px-4 py-2 text-xs text-white focus:outline-none focus:border-[#D3542B]"
                />
              </div>

            </div>

          </div>

          {/* Live Interactive UI Components Explorer */}
          <div className="space-y-12">
            
            <div className="border-b border-grid pb-4">
              <h2 className="text-xl font-bold uppercase tracking-wider text-white font-syne">
                03. COMPONENT SHOWCASE SANDBOX
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Interact with core interface parts constructed with pixel-perfect attention.
              </p>
            </div>

            {/* Row of buttons and selectors */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Button Archetypes */}
              <div className="bg-neutral-950 border border-white/5 rounded-sm p-6 space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-syne border-b border-white/5 pb-3">
                  BUTTON ARCHEPRITYPE MODELS
                </h3>
                
                <div className="space-y-4">
                  {/* Primary Accent Button */}
                  <div>
                    <span className="text-[8px] font-mono text-neutral-500 block mb-1.5">PRIMARY ACCENT GLOW</span>
                    <button className="w-full bg-[#D3542B] hover:bg-[#e45d31] text-white text-xs font-semibold tracking-widest uppercase py-3 rounded-sm transition-all shadow-[0_4px_15px_rgba(211,84,43,0.25)]">
                      Button Accent
                    </button>
                  </div>

                  {/* Dark Outline Button */}
                  <div>
                    <span className="text-[8px] font-mono text-neutral-500 block mb-1.5">DARK STRUCTURAL PANEL</span>
                    <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 text-xs font-semibold tracking-widest uppercase py-3 rounded-sm transition-all">
                      Button Secondary
                    </button>
                  </div>

                  {/* Clean Minimal Text Button */}
                  <div className="text-center">
                    <span className="text-[8px] font-mono text-neutral-500 block mb-1.5 text-left">MINIMAL ALIGNED CAP</span>
                    <button className="text-xs font-bold tracking-widest uppercase text-neutral-300 hover:text-white transition-colors flex items-center justify-center space-x-1.5 mx-auto">
                      <span>Explore Objects</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Input Elements */}
              <div className="bg-neutral-950 border border-white/5 rounded-sm p-6 space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-syne border-b border-white/5 pb-3">
                  INPUT & CHANNELS MATRIX
                </h3>

                <div className="space-y-4">
                  
                  {/* Active Input */}
                  <div>
                    <label className="text-[8px] font-mono text-neutral-400 block mb-1.5 uppercase">
                      Client Business Domain
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Design Boutique Hotel" 
                      className="w-full bg-neutral-900 border border-white/15 focus:border-[#D3542B] rounded-sm px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Selection Dropdown */}
                  <div>
                    <label className="text-[8px] font-mono text-neutral-400 block mb-1.5 uppercase">
                      Project Scale Target
                    </label>
                    <select className="w-full bg-neutral-900 border border-white/10 focus:border-[#D3542B] rounded-sm px-4 py-2.5 text-xs text-neutral-300 focus:outline-none transition-all">
                      <option>Boutique Spaces (1-10 pieces)</option>
                      <option>Contract Scale (10-50 pieces)</option>
                      <option>Signature Architecture (&gt;50 pieces)</option>
                    </select>
                  </div>

                  {/* Static Alert Indicator banner */}
                  <div className="bg-[#D3542B]/5 border border-[#D3542B]/30 rounded-sm p-3 flex items-start space-x-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#D3542B] mt-1 shrink-0"></span>
                    <span className="text-[10px] text-neutral-300 leading-relaxed font-inter">
                      Formora Contract requires standard CAD files for dimensional alignment verification.
                    </span>
                  </div>

                </div>
              </div>

              {/* Active UI Loaders & Alerts */}
              <div className="bg-neutral-950 border border-white/5 rounded-sm p-6 space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-syne border-b border-white/5 pb-3">
                  SPATIAL NOTIFICATION MODULES
                </h3>

                <div className="space-y-4">
                  {/* Action Alert Banner simulator */}
                  <div className="p-4 bg-neutral-900 rounded-sm border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[8px] font-mono text-neutral-500 block">STATUS TELEMETRY</span>
                      <span className="text-xs font-bold text-neutral-200">System Ready (v2.5)</span>
                    </div>
                    <span className="px-2 py-0.5 text-[8px] font-mono bg-green-500/10 text-green-400 rounded border border-green-500/20 uppercase tracking-widest">
                      ONLINE
                    </span>
                  </div>

                  {/* Interactive Trigger for Toast Alerts */}
                  <button 
                    onClick={() => triggerToast('System telemetry broadcast initialized...')}
                    className="w-full bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white py-2.5 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all flex items-center justify-center space-x-2"
                  >
                    <Bell className="w-3.5 h-3.5 text-[#D3542B]" />
                    <span>Launch Live Toast</span>
                  </button>

                  {/* Dynamic UI loader simulator */}
                  <div className="p-4 bg-neutral-950 border border-white/5 rounded flex items-center space-x-4">
                    <div className="w-5 h-5 rounded-full border-2 border-[#D3542B] border-t-transparent animate-spin"></div>
                    <div>
                      <span className="text-[9px] font-mono text-neutral-500 block uppercase">CAD RENDERING CORE</span>
                      <span className="text-xs text-neutral-300 font-inter">Aligning vectors...</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* DETAILED GENERAL FOOTER */}
      <footer className="relative z-10 bg-[#09090A] border-t border-grid text-neutral-400 text-xs py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo & Statement Column */}
          <div className="space-y-4">
            <span className="text-lg font-extrabold tracking-[0.25em] font-syne text-white">
              F<span className="text-[#D3542B]">*</span>RMORA
            </span>
            <p className="text-neutral-500 leading-relaxed max-w-xs text-[11px] font-inter">
              Architectural design framework crafting modular centerpieces and premium atmospheres for high-end hospitality hubs.
            </p>
            <div className="text-[10px] text-neutral-600 font-mono">
              Designed & Built as a Premium Sandbox Experience.
            </div>
          </div>

          {/* Column 2: Digital Systems */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-syne">Digital Systems</h4>
            <ul className="space-y-2 text-[11px] font-mono uppercase tracking-widest">
              <li>
                <button onClick={() => setCurrentView('system')} className="hover:text-white transition-colors">
                  Live Design Workspace
                </button>
              </li>
              <li>
                <a href="#layers" className="hover:text-white transition-colors">
                  Four Structural Layers
                </a>
              </li>
              <li>
                <a href="#configurator" className="hover:text-white transition-colors">
                  Interactive Sandbox
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-syne">Inquire Spaces</h4>
            <ul className="space-y-2 text-[11px] leading-relaxed">
              <li className="text-neutral-300">Office: London, Milan, Munich</li>
              <li>General: <span className="text-white select-all">studio@formora-concept.design</span></li>
              <li>Contracts: <span className="text-[#D3542B] select-all">arch@formora-concept.design</span></li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Dialogue */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-syne">Newsletter Blueprint</h4>
            <p className="text-[11px] text-neutral-500 leading-relaxed font-inter">
              Subscribe to receive structural layout updates and case studies.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="designer@domain.com" 
                className="bg-neutral-900 border border-white/10 rounded-l-sm px-3 py-2 text-[11px] text-white focus:outline-none focus:border-[#D3542B] w-full"
              />
              <button 
                onClick={() => triggerToast('Successfully joined structural dispatch!')}
                className="bg-[#D3542B] text-white px-4 rounded-r-sm hover:bg-[#e45d31] transition-colors"
              >
                Go
              </button>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-600">
          <span>&copy; {new Date().getFullYear()} F*RMORA. All rights reserved. Spatial Assets for Premium Architecture.</span>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-neutral-400 transition-colors">Spatial Guidelines</a>
            <a href="#terms" className="hover:text-neutral-400 transition-colors">Contract Terms</a>
          </div>
        </div>
      </footer>

      {/* FLOATING TOAST NOTIFICATION CORNER */}
      <div className="fixed bottom-6 right-6 z-[100] space-y-2.5 max-w-sm pointer-events-none">
        {toasts.map((t) => (
          <div 
            key={t.id} 
            className="p-4 bg-neutral-900 border border-[#D3542B]/30 rounded-sm shadow-[0_6px_25px_rgba(211,84,43,0.15)] flex items-start space-x-3 pointer-events-auto animate-slideIn"
          >
            <div className="w-2 h-2 rounded-full bg-[#D3542B] mt-1.5 shrink-0 animate-ping"></div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider font-syne">F*RMORA SYSTEM</p>
              <p className="text-[11px] text-neutral-300 mt-0.5 leading-relaxed font-inter">{t.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CONSULTATION MODAL PORTAL PORTAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-950 border border-[#D3542B]/30 max-w-lg w-full rounded-sm p-8 relative overflow-hidden shadow-[0_10px_40px_rgba(211,84,43,0.2)] animate-scaleUp">
            
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[#D3542B] text-[10px] font-mono tracking-widest block mb-1">
              F*RMORA CONSULTATION INTAKE
            </span>
            <h3 className="text-2xl font-extrabold uppercase text-white font-syne tracking-tight mb-4">
              Connect with a Design Engineer
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-inter">
              Ready to execute dynamic visual improvements? Submit architectural parameters below, and a lead space consultant will connect within 1 business day.
            </p>

            <form onSubmit={(e) => {
              e.preventDefault();
              setModalOpen(false);
              triggerToast('Consultation request locked! Preparing spatial design guide...');
            }} className="space-y-4">
              <div>
                <label className="text-[9px] font-mono text-neutral-500 uppercase block mb-1">Corporate Architect Name</label>
                <input type="text" required placeholder="Olivia Vasilescu" className="w-full bg-neutral-900 border border-white/10 rounded-sm px-3.5 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#D3542B]" />
              </div>
              
              <div>
                <label className="text-[9px] font-mono text-neutral-500 uppercase block mb-1">Architectural Office Email</label>
                <input type="email" required placeholder="olivia@studio-vasilek.com" className="w-full bg-neutral-900 border border-white/10 rounded-sm px-3.5 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#D3542B]" />
              </div>

              <div>
                <label className="text-[9px] font-mono text-neutral-500 uppercase block mb-1">Spatial Type / Project Goal</label>
                <textarea rows="3" placeholder="Explain space type e.g. Boutique Lounge reception area requiring anchoring" className="w-full bg-neutral-900 border border-white/10 rounded-sm px-3.5 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#D3542B] resize-none"></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-[#D3542B] hover:bg-[#e45d31] text-white text-xs font-semibold tracking-widest uppercase py-3 rounded-sm transition-colors shadow-[0_4px_15px_rgba(211,84,43,0.25)]">
                  Submit Architectural Request
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}