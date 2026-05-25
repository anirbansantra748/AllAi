:Stratos Conqueror Landing Page:index.html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>STRATOS CONQUEROR — Near-Space Exploration & High-Altitude Flight</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    },
                    colors: {
                        darkBg: '#09090b',
                        darkCard: '#131316',
                        darkBorder: '#27272a',
                        cosmicSilver: '#f4f4f5',
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #09090b;
        }
        ::-webkit-scrollbar-thumb {
            background: #27272a;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #3f3f46;
        }

        /* Ambient blurred background elements to match inspiration */
        .glow-sphere {
            filter: blur(140px);
            opacity: 0.15;
            pointer-events: none;
        }
        
        .glow-text-heavy {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.45), 0 0 40px rgba(255, 255, 255, 0.2);
            animation: textBreath 8s ease-in-out infinite alternate;
        }

        @keyframes textBreath {
            0% {
                filter: blur(0px);
                opacity: 0.95;
            }
            50% {
                filter: blur(4px);
                opacity: 0.7;
            }
            100% {
                filter: blur(1px);
                opacity: 0.95;
            }
        }

        /* Textured Background grid overlay to mimic grain/grit */
        .grain-overlay {
            background-image: radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
            background-size: 24px 24px;
        }

        /* Altitude Gradient Tracker */
        .altitude-gradient {
            background: linear-gradient(to top, #1e293b, #0f172a, #020617, #000000);
        }

        /* Custom glow states */
        .card-glow-hover {
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card-glow-hover:hover {
            border-color: rgba(255, 255, 255, 0.25);
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.04);
            transform: translateY(-2px);
        }
    </style>
</head>
<body class="bg-darkBg text-zinc-300 font-sans antialiased overflow-x-hidden selection:bg-white selection:text-black">

    <!-- Ambient lighting backdrops -->
    <div class="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white glow-sphere z-0"></div>
    <div class="fixed bottom-[10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-zinc-400 glow-sphere z-0"></div>
    
    <!-- Micro Grid overlay -->
    <div class="fixed inset-0 grain-overlay opacity-45 pointer-events-none z-10"></div>

    <!-- MAIN HEADER NAV -->
    <header class="sticky top-0 w-full border-b border-white/5 bg-darkBg/80 backdrop-blur-md z-50">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <!-- Brand Mark -->
            <a href="#" class="flex items-center gap-3 group">
                <div class="w-8 h-8 rounded-full border border-zinc-500 flex items-center justify-center relative overflow-hidden">
                    <div class="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                    <span class="text-xs font-mono font-bold tracking-tighter text-white group-hover:text-black transition-colors duration-300 z-10">S.C</span>
                </div>
                <div class="flex flex-col">
                    <span class="font-display font-semibold text-sm uppercase tracking-wider text-white">STRATOS</span>
                    <span class="text-[9px] font-mono text-zinc-500 uppercase tracking-widest leading-none">CONQUEROR</span>
                </div>
            </a>

            <!-- Navigation Links -->
            <nav class="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
                <a href="#horizon" class="text-zinc-400 hover:text-white transition-colors">01 / Horizon Journey</a>
                <a href="#specs" class="text-zinc-400 hover:text-white transition-colors">02 / Aero Specs</a>
                <a href="#gear" class="text-zinc-400 hover:text-white transition-colors">03 / Thermal Armor</a>
                <a href="#booking" class="text-zinc-400 hover:text-white transition-colors">04 / Flight Deck</a>
            </nav>

            <!-- Dynamic Altitude Counter Badge -->
            <div class="flex items-center gap-3">
                <div class="hidden sm:flex flex-col items-end text-right">
                    <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none">Current Grid</span>
                    <span class="text-xs font-mono text-white" id="nav-altitude-counter">Altitude: 000 km</span>
                </div>
                <a href="#booking" class="px-4 py-2 border border-white/10 hover:border-white/40 rounded-full text-xs font-mono tracking-wider text-white bg-white/5 transition-all duration-300">
                    RESERVE FLIGHT
                </a>
            </div>
        </div>
    </header>

    <!-- HERO SECTION (Aesthetic Capture) -->
    <section class="relative min-h-[90vh] flex flex-col justify-between py-12 px-6 overflow-hidden z-20">
        <!-- Floating coordinate stamps mimicking original's technical labels -->
        <div class="absolute top-10 left-10 hidden lg:block text-left font-mono text-[10px] text-zinc-500 space-y-1">
            <p>IN THE SKY / ORIGIN: Mojave Desert</p>
            <p>LAUNCH COORDINATES: 35.0594° N, 118.1517° W</p>
        </div>
        <div class="absolute top-10 right-10 hidden lg:block text-right font-mono text-[10px] text-zinc-500 space-y-1">
            <p>DESIGN: ST-CONQUEROR MK.VIII</p>
            <p>SYSTEM OK / TELEMETRY LINK ACTIVE</p>
        </div>

        <div class="max-w-5xl mx-auto w-full flex-grow flex flex-col items-center justify-center text-center mt-8">
            <!-- Sub-Header Badge -->
            <div class="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02]">
                <span class="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                <span class="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Beyond Earth's Extreme Limits</span>
            </div>

            <!-- Heavy Blur Title mimicking the "HIGH" effect in the photo -->
            <h1 class="relative text-7xl md:text-9xl font-display font-black uppercase text-white tracking-widest leading-none glow-text-heavy select-none">
                HIGH
            </h1>
            
            <p class="text-lg md:text-2xl font-display font-medium tracking-[0.4em] uppercase text-zinc-100 mt-2 mb-6 select-none">
                CONQUEROR
            </p>

            <!-- Custom Interactive Visual Component: Layered Space Horizon Hero Illustration -->
            <div class="relative w-full max-w-lg h-72 md:h-96 my-8 rounded-2xl overflow-hidden border border-white/5 bg-black/40 flex items-center justify-center">
                <!-- Celestial Glow behind the earth sphere -->
                <div class="absolute bottom-[-10%] w-72 h-72 rounded-full bg-white/20 filter blur-[40px]"></div>
                
                <!-- Rotating celestial background pattern -->
                <div class="absolute inset-0 opacity-20 pointer-events-none">
                    <svg class="w-full h-full animate-[spin_120s_linear_infinite]" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.3)" stroke-width="0.1" stroke-dasharray="1, 4" fill="none" />
                        <circle cx="50" cy="50" r="35" stroke="rgba(255,255,255,0.2)" stroke-width="0.1" stroke-dasharray="2, 6" fill="none" />
                    </svg>
                </div>

                <!-- Giant Atmosphere/Planet Sphere Vector -->
                <div class="absolute bottom-[-35%] w-80 h-80 rounded-full border border-white/20 overflow-hidden bg-gradient-to-t from-zinc-900 to-black flex items-end justify-center">
                    <!-- Planet surface grids -->
                    <div class="w-full h-1/2 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-zinc-950/80 to-black"></div>
                </div>

                <!-- Astronaut Vector silhouette on rocky summit (matching image composition) -->
                <div class="absolute z-10 bottom-8 flex flex-col items-center">
                    <svg class="w-24 h-32 text-white hover:scale-105 transition-transform duration-300" viewBox="0 0 100 120" fill="currentColor">
                        <!-- Rock Pinnacle base -->
                        <polygon points="20,120 40,105 50,102 62,106 80,120" fill="#131316" stroke="#27272a" stroke-width="2"/>
                        <!-- Astronaut Figure -->
                        <!-- Helmet and visor -->
                        <circle cx="50" cy="40" r="10" fill="#ffffff" />
                        <ellipse cx="50" cy="40" rx="7" ry="5" fill="#09090b" />
                        <!-- Suit Body -->
                        <path d="M42,50 C42,50 36,54 36,65 L39,80 L44,80 L44,98 L48,98 L48,82 L52,82 L52,98 L56,98 L56,80 L61,80 L64,65 C64,54 58,50 58,50 Z" fill="#eaeaea" />
                        <!-- Suit detailed line work -->
                        <line x1="45" y1="58" x2="55" y2="58" stroke="#131316" stroke-width="1" />
                        <line x1="45" y1="64" x2="55" y2="64" stroke="#131316" stroke-width="1" />
                        <line x1="50" y1="50" x2="50" y2="80" stroke="#131316" stroke-width="1" />
                        <!-- Life Support Pack outline behind -->
                        <rect x="34" y="48" width="6" height="18" rx="2" fill="#d4d4d8" />
                        <rect x="60" y="48" width="6" height="18" rx="2" fill="#d4d4d8" />
                    </svg>
                </div>

                <!-- Hover Overlay Technical Info labels -->
                <div class="absolute bottom-4 left-4 text-left font-mono text-[9px] text-zinc-500 z-20">
                    <p class="text-white font-medium">STRATOS VISTA MARK I</p>
                    <p>FLIGHT ALTITUDE: 108 KM (KARMAN LINE)</p>
                </div>
                <div class="absolute bottom-4 right-4 text-right font-mono text-[9px] text-zinc-500 z-20">
                    <p class="text-white font-medium">BEYOND SYSTEM</p>
                    <p>TRAJECTORY STABLE 100%</p>
                </div>
            </div>

            <!-- Short poetical text reflecting the inspirational layout's bottom description -->
            <p class="max-w-2xl text-xs md:text-sm text-zinc-400 font-mono tracking-wider leading-relaxed mt-4">
                Amid the silence of the extreme altitudes, a lone traveler stands atop an ether world with a dark horizon seamlessly merging into the void of space. It is not just an ascension but a statement of absolute human willpower. Become the high conqueror of all that remains unexplored.
            </p>
        </div>

        <!-- Hero Actions & Down Pointer -->
        <div class="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-white/5">
            <span class="font-mono text-[10px] uppercase tracking-widest text-zinc-500">01 / DISCOVER EARTH'S LIMITS</span>
            <a href="#horizon" class="group flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-white hover:text-zinc-300 transition-colors">
                Scroll to Explore 
                <span class="group-hover:translate-y-1 transition-transform inline-block">↓</span>
            </a>
            <span class="font-mono text-[10px] uppercase tracking-widest text-zinc-500">SYS_V8.04_STABLE</span>
        </div>
    </section>

    <!-- SECTION 1: THE INTERACTIVE ALTITUDE JOURNEY -->
    <section id="horizon" class="py-24 border-t border-white/5 relative z-20 bg-black/20">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <!-- Left Narrative Area -->
                <div class="lg:col-span-5 space-y-6">
                    <span class="font-mono text-xs uppercase tracking-widest text-zinc-500">01 / Dynamic Altitude Simulator</span>
                    <h2 class="text-4xl md:text-5xl font-display font-medium text-white uppercase tracking-tight leading-none">
                        ASCEND INTO <br><span class="font-black italic text-zinc-400">THE VELVET BLACK</span>
                    </h2>
                    <p class="text-sm text-zinc-400 font-mono tracking-wider leading-relaxed">
                        Drag the navigation altitude slider on the right to witness the atmospheric breakdown, color transformation, physical characteristics, and visual horizon changes from ground level to deep low-orbit environments.
                    </p>
                    
                    <!-- Dynamic Live Readings Panel -->
                    <div class="p-6 rounded-xl border border-white/5 bg-white/[0.01] font-mono text-xs space-y-4">
                        <div class="flex justify-between border-b border-white/5 pb-2">
                            <span class="text-zinc-500">CURRENT TARGET ZONE</span>
                            <span class="text-white font-bold" id="panel-zone-name">Troposphere</span>
                        </div>
                        <div class="flex justify-between border-b border-white/5 pb-2">
                            <span class="text-zinc-500">ATMOSPHERIC PRESSURE</span>
                            <span class="text-white" id="panel-pressure">101,325 Pa (Standard)</span>
                        </div>
                        <div class="flex justify-between border-b border-white/5 pb-2">
                            <span class="text-zinc-500">EXPECTED TEMPERATURE</span>
                            <span class="text-white" id="panel-temp">15°C</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-zinc-500">CELESTIAL FIELD RENDER</span>
                            <span class="text-emerald-400 animate-pulse" id="panel-rendering">REVEALING DETAIL</span>
                        </div>
                    </div>
                </div>

                <!-- Right Simulator Core (Interactive Visual Sandbox) -->
                <div class="lg:col-span-7 bg-darkCard border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                    <!-- Absolute glow to make section premium -->
                    <div class="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-white/5 filter blur-3xl"></div>

                    <div class="flex flex-col md:flex-row gap-8 items-center">
                        
                        <!-- Real-time Altitude Interactive Slider Column -->
                        <div class="w-full md:w-1/3 flex flex-col items-center">
                            <label for="altitude-slider" class="text-xs font-mono text-zinc-400 mb-2 uppercase tracking-widest">
                                TARGET ALTITUDE
                            </label>
                            
                            <!-- Interactive Slider -->
                            <div class="relative h-64 flex items-center my-4">
                                <input 
                                    type="range" 
                                    id="altitude-slider" 
                                    min="0" 
                                    max="120" 
                                    value="12" 
                                    step="1"
                                    class="accent-white h-full cursor-pointer h-2 bg-zinc-800 rounded-lg appearance-none w-1 select-none"
                                    style="writing-mode: vertical-lr; direction: rtl;"
                                    oninput="updateAltitudeSim(this.value)"
                                >
                            </div>

                            <span class="text-3xl font-display font-black text-white" id="slider-display-val">12</span>
                            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">Kilometers (km)</span>
                        </div>

                        <!-- Visual feedback card representing sky color transitioning dynamically -->
                        <div class="w-full md:w-2/3 h-80 rounded-xl relative overflow-hidden border border-white/10 flex flex-col justify-between p-6 transition-all duration-500" id="sky-simulation-card">
                            
                            <!-- Stars system layer that opacity transitions in -->
                            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_1px,_transparent_1px)] bg-grid-stars opacity-0 transition-opacity duration-700" id="sim-stars-layer" style="background-size: 16px 16px;"></div>

                            <!-- Curvature Graphic element -->
                            <div class="absolute bottom-[-110%] left-[-50%] w-[200%] h-[120%] rounded-[50%] border-t border-white/30 bg-zinc-950 transition-all duration-700 ease-out z-10 flex items-center justify-center" id="sim-curvature-line">
                                <div class="text-[8px] font-mono text-zinc-500 tracking-widest uppercase mt-4">Planet Horizon Contour</div>
                            </div>

                            <!-- Custom Dynamic Badge inside simulated capsule perspective -->
                            <div class="flex items-center justify-between z-20">
                                <div class="px-2 py-1 rounded bg-black/40 border border-white/10">
                                    <span class="text-[9px] font-mono text-white" id="badge-sky-state">CRUISING ALTITUDE</span>
                                </div>
                                <span class="text-[9px] font-mono text-zinc-400">HUD: CAM_V_OUT_04</span>
                            </div>

                            <!-- Interactive graphic of vehicle rising -->
                            <div class="relative w-full h-24 flex items-center justify-center z-10">
                                <svg id="sim-capsule-icon" class="w-12 h-12 text-white animate-bounce transition-all duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
                                    <!-- High end custom satellite/capsule svg -->
                                    <path d="M50 20 L65 40 L65 70 L35 70 L35 40 Z" fill="rgba(0,0,0,0.8)" />
                                    <path d="M20 50 L35 55 M80 50 L65 55" />
                                    <rect x="15" y="45" width="5" height="15" fill="currentColor"/>
                                    <rect x="80" y="45" width="5" height="15" fill="currentColor"/>
                                    <circle cx="50" cy="50" r="6" stroke="white" stroke-width="1.5" />
                                </svg>
                            </div>

                            <!-- Technical telemetry lines inside visual capsule mock -->
                            <div class="flex justify-between z-20 text-[8px] font-mono text-zinc-500 border-t border-white/5 pt-2">
                                <span>THERMAL SHIELD: ACTIVE</span>
                                <span id="sim-telemetry-speed">MACH: 0.85</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION 2: BENTO BOX TECHNICAL SPECIFICATIONS -->
    <section id="specs" class="py-24 border-t border-white/5 relative z-20 bg-darkBg">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <span class="font-mono text-xs uppercase tracking-widest text-zinc-500">02 / High-Performance Hardware</span>
                <h2 class="text-3xl md:text-5xl font-display font-medium text-white uppercase tracking-tight">
                    THE STRUCTURAL <br><span class="font-black italic text-zinc-400">ENGINEERING SUITE</span>
                </h2>
                <p class="text-xs md:text-sm font-mono text-zinc-500 tracking-wider">
                    Our high-altitude capsule crafts feature military-grade carbon composite shells, aerospace hermetic valves, and state-of-the-art vision windows.
                </p>
            </div>

            <!-- Bento Box Grid Structure -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                <!-- Box 1: Carbon Shell (Large) -->
                <div class="md:col-span-8 bg-darkCard border border-white/5 rounded-2xl p-8 relative overflow-hidden card-glow-hover flex flex-col justify-between group min-h-[350px]">
                    <div class="absolute right-0 top-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                        <svg class="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="0.5">
                            <line x1="10" y1="0" x2="10" y2="100" />
                            <line x1="30" y1="0" x2="30" y2="100" />
                            <line x1="50" y1="0" x2="50" y2="100" />
                            <line x1="70" y1="0" x2="70" y2="100" />
                            <line x1="90" y1="0" x2="90" y2="100" />
                            <line x1="0" y1="20" x2="100" y2="20" />
                            <line x1="0" y1="40" x2="100" y2="40" />
                            <line x1="0" y1="60" x2="100" y2="60" />
                            <line x1="0" y1="80" x2="100" y2="80" />
                        </svg>
                    </div>

                    <div class="space-y-4 max-w-md">
                        <div class="flex items-center gap-2">
                            <span class="font-mono text-xs text-zinc-500">[ COMPONENT_01 ]</span>
                            <span class="px-2 py-0.5 rounded bg-white/10 text-[9px] font-mono text-white">REINFORCED</span>
                        </div>
                        <h3 class="text-2xl md:text-3xl font-display font-medium text-white uppercase tracking-tight">
                            Ultra-Crystalline <br>Carbon Matrix Capsule
                        </h3>
                        <p class="text-xs text-zinc-400 font-mono tracking-wider leading-relaxed">
                            Crafted from high-tension autoclaved carbon yarn matrices, the hull weighs less than titanium while withstanding pressure discrepancies of up to 4.2 atmospheres at maximum altitudes.
                        </p>
                    </div>

                    <div class="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 mt-6 font-mono text-left">
                        <div>
                            <span class="block text-[10px] text-zinc-500 uppercase">THICKNESS</span>
                            <span class="text-sm font-bold text-white">14.8 mm</span>
                        </div>
                        <div>
                            <span class="block text-[10px] text-zinc-500 uppercase">TEMP RESISTANCE</span>
                            <span class="text-sm font-bold text-white">-120°C to +180°C</span>
                        </div>
                        <div>
                            <span class="block text-[10px] text-zinc-500 uppercase">SAFETY RATIO</span>
                            <span class="text-sm font-bold text-emerald-400">12x Nom.</span>
                        </div>
                    </div>
                </div>

                <!-- Box 2: Custom Glass Lens (Small) -->
                <div class="md:col-span-4 bg-darkCard border border-white/5 rounded-2xl p-8 relative overflow-hidden card-glow-hover flex flex-col justify-between group">
                    <div class="absolute -right-12 -bottom-12 w-32 h-32 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                        <div class="w-24 h-24 rounded-full border border-dashed border-white/20"></div>
                    </div>

                    <div class="space-y-4">
                        <span class="font-mono text-xs text-zinc-500">[ COMPONENT_02 ]</span>
                        <h3 class="text-xl font-display font-semibold text-white uppercase tracking-tight">
                            Hyper-Optic Dome Viewport
                        </h3>
                        <p class="text-xs text-zinc-400 font-mono tracking-wider leading-relaxed">
                            Engineered for zero-distortion viewing. Dual-pane optical sapphire block provides perfect panoramic sights of the planet's atmospheric curve without solar flare glare.
                        </p>
                    </div>

                    <div class="pt-4 border-t border-white/5 mt-6">
                        <span class="text-[9px] font-mono text-zinc-500 tracking-widest block uppercase">ANTI-RADIATION SHEATHING</span>
                        <span class="text-xs font-mono text-white font-semibold">99.9% UV & INFRARED ABSORPTION</span>
                    </div>
                </div>

                <!-- Box 3: Flight Telemetry (Small) -->
                <div class="md:col-span-4 bg-darkCard border border-white/5 rounded-2xl p-8 relative overflow-hidden card-glow-hover flex flex-col justify-between group">
                    <div class="space-y-4">
                        <span class="font-mono text-xs text-zinc-500">[ COMPONENT_03 ]</span>
                        <h3 class="text-xl font-display font-semibold text-white uppercase tracking-tight">
                            Stratos Autopilot Guidance
                        </h3>
                        <p class="text-xs text-zinc-400 font-mono tracking-wider leading-relaxed">
                            Triple-redundant telemetry linked directly to ground systems via satellite arrays. Real-time pitch, roll, and ascent vector stability models.
                        </p>
                    </div>

                    <!-- Custom SVG Graph indicator -->
                    <div class="w-full h-16 bg-black/50 border border-white/5 rounded-lg overflow-hidden mt-6 flex items-end">
                        <svg class="w-full h-12 stroke-white stroke-1" viewBox="0 0 100 50">
                            <path d="M0,45 Q15,40 30,30 T60,25 T80,10 T100,2" fill="none" class="animate-[dash_5s_linear_infinite]" />
                            <!-- Simulated grid lines -->
                            <line x1="0" y1="12" x2="100" y2="12" stroke="rgba(255,255,255,0.05)" />
                            <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.05)" />
                            <line x1="0" y1="37" x2="100" y2="37" stroke="rgba(255,255,255,0.05)" />
                        </svg>
                    </div>
                </div>

                <!-- Box 4: Comfort Cabin Systems (Large) -->
                <div class="md:col-span-8 bg-darkCard border border-white/5 rounded-2xl p-8 relative overflow-hidden card-glow-hover flex flex-col justify-between group min-h-[350px]">
                    <div class="absolute right-6 bottom-6 w-1/3 opacity-15 hidden sm:block">
                        <!-- Simulated capsule interior vector drawing -->
                        <svg class="w-full h-auto text-white" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.5">
                            <rect x="20" y="20" width="160" height="160" rx="20" />
                            <circle cx="100" cy="100" r="60" />
                            <circle cx="100" cy="100" r="30" />
                            <line x1="20" y1="100" x2="180" y2="100" />
                            <line x1="100" y1="20" x2="100" y2="180" />
                        </svg>
                    </div>

                    <div class="space-y-4 max-w-lg">
                        <div class="flex items-center gap-2">
                            <span class="font-mono text-xs text-zinc-500">[ COMPONENT_04 ]</span>
                            <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-[9px] font-mono text-emerald-400">ACTIVE LIFE SUPPORT</span>
                        </div>
                        <h3 class="text-2xl md:text-3xl font-display font-medium text-white uppercase tracking-tight">
                            Pressurized Ergonomic <br>Passenger Lounge
                        </h3>
                        <p class="text-xs text-zinc-400 font-mono tracking-wider leading-relaxed">
                            No heavy g-forces. No bulky flight suits required for normal cabin relaxation. Rest in premium merino fiber recliners adjusted perfectly for weightless environments. Breathe filtered synthetic crisp oxygen lines refreshed at custom micro levels.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5 mt-6 font-mono text-xs">
                        <div>
                            <span class="block text-[10px] text-zinc-500 uppercase">CAPACITY</span>
                            <span class="text-white font-medium">6 Explorers + Crew</span>
                        </div>
                        <div>
                            <span class="block text-[10px] text-zinc-500 uppercase">ATMOSPHERE</span>
                            <span class="text-white font-medium">Auto-Normalized</span>
                        </div>
                        <div>
                            <span class="block text-[10px] text-zinc-500 uppercase">WIFI BEAM LINK</span>
                            <span class="text-white font-medium">1.2 Gbps Orbital</span>
                        </div>
                        <div>
                            <span class="block text-[10px] text-zinc-500 uppercase">INTERIOR TEMP</span>
                            <span class="text-white font-medium">21.5°C Stable</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- SECTION 3: INTERACTIVE AESTHETIC WEAR/SUIT CONFIGURATOR -->
    <section id="gear" class="py-24 border-t border-white/5 relative z-20 bg-black/40">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <span class="font-mono text-xs uppercase tracking-widest text-zinc-500">03 / Personal Armor Suite</span>
                <h2 class="text-3xl md:text-5xl font-display font-medium text-white uppercase tracking-tight">
                    THE ST-800 CONQUEROR <br><span class="font-black italic text-zinc-400">THERMAL SPACESUIT</span>
                </h2>
                <p class="text-xs md:text-sm font-mono text-zinc-500 tracking-wider">
                    An anatomical overview of the pressure-stabilizing thermal armor designed for high-altitude emergency, low-pressure safety, and visual premium identity.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Left: Interactive Hotspot Diagram -->
                <div class="lg:col-span-6 flex justify-center relative">
                    <!-- Tech background blueprint grid -->
                    <div class="absolute inset-0 border border-dashed border-white/5 rounded-3xl opacity-30 flex items-center justify-center">
                        <div class="w-full h-[1px] bg-white/10 absolute"></div>
                        <div class="h-full w-[1px] bg-white/10 absolute"></div>
                    </div>

                    <!-- Custom Space Suit SVG Illustrator -->
                    <div class="relative w-80 h-[480px] flex items-center justify-center z-10">
                        <svg class="w-full h-full text-white/95" viewBox="0 0 100 150" fill="currentColor">
                            <!-- Helmet block -->
                            <rect x="40" y="10" width="20" height="20" rx="6" stroke="#52525b" stroke-width="1.5" fill="#18181b" />
                            <!-- Gold Reflective visor -->
                            <path d="M43 14 Q50 11 57 14 L57 23 Q50 26 43 23 Z" fill="rgba(250,204,21,0.85)" stroke="#eab308" stroke-width="0.5"/>
                            
                            <!-- Torso chestplate -->
                            <rect x="36" y="32" width="28" height="40" rx="5" fill="#f4f4f5" stroke="#52525b" stroke-width="1.5"/>
                            <rect x="42" y="38" width="16" height="12" rx="2" fill="#27272a" />
                            <!-- Small lights on chestplate -->
                            <circle cx="46" cy="44" r="1.5" fill="#ef4444" />
                            <circle cx="50" cy="44" r="1.5" fill="#10b981" />
                            <circle cx="54" cy="44" r="1.5" fill="#3b82f6" />

                            <!-- Shoulders & Arms -->
                            <rect x="28" y="34" width="7" height="30" rx="3.5" fill="#e4e4e7" stroke="#3f3f46" stroke-width="1"/>
                            <rect x="65" y="34" width="7" height="30" rx="3.5" fill="#e4e4e7" stroke="#3f3f46" stroke-width="1"/>
                            <circle cx="31.5" cy="62" r="2.5" fill="#18181b"/>
                            <circle cx="68.5" cy="62" r="2.5" fill="#18181b"/>

                            <!-- Gloves -->
                            <rect x="27.5" y="64" width="8" height="8" rx="2" fill="#18181b"/>
                            <rect x="64.5" y="64" width="8" height="8" rx="2" fill="#18181b"/>

                            <!-- Utility belt -->
                            <rect x="35" y="73" width="30" height="6" rx="2" fill="#27272a"/>
                            
                            <!-- Pants / Legs -->
                            <rect x="37" y="81" width="11" height="52" rx="5" fill="#e4e4e7" stroke="#3f3f46" stroke-width="1" />
                            <rect x="52" y="81" width="11" height="52" rx="5" fill="#e4e4e7" stroke="#3f3f46" stroke-width="1" />
                            
                            <!-- Heavy joints on knees -->
                            <rect x="37" y="102" width="11" height="6" rx="1" fill="#71717a" />
                            <rect x="52" y="102" width="11" height="6" rx="1" fill="#71717a" />

                            <!-- Heavy safety boots -->
                            <rect x="35" y="132" width="14" height="10" rx="3" fill="#18181b"/>
                            <rect x="51" y="132" width="14" height="10" rx="3" fill="#18181b"/>
                        </svg>

                        <!-- Hotspot Button 1 (Helmet) -->
                        <button onclick="activateHotspot(1, 'HUD Visor Block', 'Polycarbonate triple layered reflective gold visor offering maximum cosmic radiation defense, panoramic viewing angles, and instant HUD digital stats overlay.')" class="absolute top-[12%] left-[46%] w-4 h-4 bg-white border border-black rounded-full animate-pulse focus:outline-none ring-2 ring-white/40"></button>
                        
                        <!-- Hotspot Button 2 (Chest Telemetry) -->
                        <button onclick="activateHotspot(2, 'Atmosphere Controller', 'Integrated oxygen ventilation module controlling absolute inner shell gas pressures, relative humidity, and active micro fiber carbon filters.')" class="absolute top-[32%] left-[40%] w-4 h-4 bg-white border border-black rounded-full animate-pulse focus:outline-none ring-2 ring-white/40"></button>

                        <!-- Hotspot Button 3 (Thigh Armor) -->
                        <button onclick="activateHotspot(3, 'Multi-Weave Fabric', 'Flexible micro-tubed liquid flow lines cooling the internal limbs during direct thermal exposures. Double ballistic outer layer.')" class="absolute top-[68%] left-[58%] w-4 h-4 bg-white border border-black rounded-full animate-pulse focus:outline-none ring-2 ring-white/40"></button>
                    </div>
                </div>

                <!-- Right: Information Card and Hotspot Feedback -->
                <div class="lg:col-span-6 space-y-6">
                    <span class="font-mono text-xs text-zinc-500">SPECIFICATION INTERACTIVE DIAGRAM</span>
                    <h3 class="text-2xl md:text-3xl font-display font-medium text-white uppercase tracking-tight">
                        SYSTEM READOUT: <span id="hotspot-title" class="font-black text-white underline decoration-white/20">HUD Visor Block</span>
                    </h3>
                    
                    <!-- Dynamic details -->
                    <div class="p-6 rounded-xl border border-white/10 bg-white/[0.02] space-y-4">
                        <p id="hotspot-desc" class="text-sm text-zinc-400 font-mono tracking-wider leading-relaxed">
                            Polycarbonate triple layered reflective gold visor offering maximum cosmic radiation defense, panoramic viewing angles, and instant HUD digital stats overlay.
                        </p>
                    </div>

                    <!-- Tech Stats Grid dynamic values -->
                    <div class="grid grid-cols-2 gap-4 font-mono text-xs">
                        <div class="p-4 rounded border border-white/5 bg-black/30">
                            <span class="block text-zinc-500">GLARE REJECTION</span>
                            <span class="text-white font-medium" id="hotspot-stat-1">99.8% Perfect</span>
                        </div>
                        <div class="p-4 rounded border border-white/5 bg-black/30">
                            <span class="block text-zinc-500">REDUNDANCY RATING</span>
                            <span class="text-emerald-400 font-medium" id="hotspot-stat-2">Double Tier IV</span>
                        </div>
                    </div>

                    <p class="text-xs text-zinc-500 font-mono italic">
                        * Click on the white glowing indicator circles on the space armor to load dynamic schematics, materials analysis, and life-safety telemetry parameters.
                    </p>
                </div>

            </div>

        </div>
    </section>

    <!-- SECTION 4: FLIGHT BOOKING & PASS GENERATOR -->
    <section id="booking" class="py-24 border-t border-white/5 relative z-20 bg-darkBg">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <!-- Ticket Configurator Inputs -->
                <div class="lg:col-span-6 space-y-8">
                    <div>
                        <span class="font-mono text-xs uppercase tracking-widest text-zinc-500">04 / Ready for Launch</span>
                        <h2 class="text-3xl md:text-5xl font-display font-medium text-white uppercase tracking-tight mt-2 leading-none">
                            BOARDING PASS <br><span class="font-black italic text-zinc-400">GENERATOR</span>
                        </h2>
                        <p class="text-xs md:text-sm font-mono text-zinc-500 tracking-wider mt-4">
                            Input your details below to instantly generate a custom digital Stratos Boarding Pass complete with launch coordinates, orbital trajectory profiles, and safety metadata.
                        </p>
                    </div>

                    <!-- Input Form -->
                    <div class="space-y-4 font-mono text-xs">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-zinc-500 mb-2 uppercase tracking-wider">Explorer Full Name</label>
                                <input 
                                    type="text" 
                                    id="pass-input-name" 
                                    value="AELIA VANCE" 
                                    class="w-full bg-darkCard border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white transition-colors"
                                    onkeyup="generateLivePass()"
                                >
                            </div>
                            <div>
                                <label class="block text-zinc-500 mb-2 uppercase tracking-wider">Mission Trajectory</label>
                                <select 
                                    id="pass-input-trajectory" 
                                    class="w-full bg-darkCard border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white transition-colors"
                                    onchange="generateLivePass()"
                                >
                                    <option value="STRATOSPHERE CLASS (50km)">STRATOSPHERE CLASS (50km)</option>
                                    <option value="KARMAN LIMIT EXPERIMENTAL (100km)">KARMAN LIMIT EXPERIMENTAL (100km)</option>
                                    <option value="LUNAR FLYBY CLASS (380km)">LUNAR FLYBY CLASS (380km)</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-zinc-500 mb-2 uppercase tracking-wider">Launch Site Location</label>
                                <select 
                                    id="pass-input-site" 
                                    class="w-full bg-darkCard border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white transition-colors"
                                    onchange="generateLivePass()"
                                >
                                    <option value="Mojave Spaceport, CA">Mojave Spaceport, CA</option>
                                    <option value="Kiruna Arctic Launch, SE">Kiruna Arctic Launch, SE</option>
                                    <option value="Tanegashima Aerospace, JP">Tanegashima Aerospace, JP</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-zinc-500 mb-2 uppercase tracking-wider">Dietary/Cabin Class</label>
                                <select 
                                    id="pass-input-cabin" 
                                    class="w-full bg-darkCard border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white transition-colors"
                                    onchange="generateLivePass()"
                                >
                                    <option value="Apex Lounge - Premium">Apex Lounge - Premium</option>
                                    <option value="Pilot-Deck Observer">Pilot-Deck Observer</option>
                                    <option value="Micro-Gravity Lab Suite">Micro-Gravity Lab Suite</option>
                                </select>
                            </div>
                        </div>

                        <!-- Interactive Actions -->
                        <div class="flex gap-4 pt-4">
                            <button onclick="requestPassConfirmation()" class="flex-1 bg-white hover:bg-zinc-200 text-black font-semibold uppercase tracking-wider py-3 rounded-lg transition-all text-center">
                                LOCK IN TRAJECTORY
                            </button>
                            <button onclick="resetPassForm()" class="px-4 py-3 border border-white/10 hover:border-white/30 rounded-lg text-zinc-400 hover:text-white transition-colors">
                                RESET
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Right Boarding Pass Preview -->
                <div class="lg:col-span-6 flex justify-center">
                    <!-- Ticket Design Outer -->
                    <div id="boarding-pass-ticket" class="w-full max-w-md bg-darkCard border border-white/10 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300">
                        
                        <!-- Glowing circular cutout shapes in ticket styling -->
                        <div class="absolute -left-3 top-1/2 w-6 h-6 rounded-full bg-darkBg border-r border-white/10 z-10"></div>
                        <div class="absolute -right-3 top-1/2 w-6 h-6 rounded-full bg-darkBg border-l border-white/10 z-10"></div>

                        <!-- Ticket Header -->
                        <div class="flex justify-between items-start border-b border-dashed border-white/20 pb-4 mb-4">
                            <div>
                                <span class="font-display font-bold text-sm tracking-widest text-white uppercase">STRATOS FLIGHT</span>
                                <span class="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">BOARDING LICENSE</span>
                            </div>
                            <div class="text-right font-mono text-[9px] text-zinc-400">
                                <p class="text-white font-bold uppercase">M-CLASS TICKET</p>
                                <p id="ticket-id">SYS-#90812-ST</p>
                            </div>
                        </div>

                        <!-- Ticket Passenger Details -->
                        <div class="grid grid-cols-2 gap-4 font-mono text-xs mb-4">
                            <div>
                                <span class="block text-[8px] text-zinc-500 uppercase">PASSENGER NAME</span>
                                <span class="text-white font-medium uppercase" id="ticket-passenger-name">AELIA VANCE</span>
                            </div>
                            <div>
                                <span class="block text-[8px] text-zinc-500 uppercase">LAUNCH SITE</span>
                                <span class="text-white font-medium" id="ticket-launch-site">Mojave Spaceport, CA</span>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4 font-mono text-xs mb-4">
                            <div>
                                <span class="block text-[8px] text-zinc-500 uppercase">MISSION TRAJECTORY</span>
                                <span class="text-white font-medium uppercase" id="ticket-trajectory">STRATOSPHERE CLASS (50km)</span>
                            </div>
                            <div>
                                <span class="block text-[8px] text-zinc-500 uppercase">CABIN PREFERENCE</span>
                                <span class="text-white font-medium" id="ticket-cabin">Apex Lounge - Premium</span>
                            </div>
                        </div>

                        <!-- Barcode Section mimicking real technical tickets -->
                        <div class="border-t border-dashed border-white/20 pt-4 mt-2 flex flex-col items-center gap-3">
                            <!-- SVG Fake Barcode -->
                            <svg class="w-full h-10 text-white" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <rect x="0" y="0" width="1" height="20" fill="currentColor"/>
                                <rect x="2" y="0" width="2" height="20" fill="currentColor"/>
                                <rect x="5" y="0" width="1" height="20" fill="currentColor"/>
                                <rect x="7" y="0" width="4" height="20" fill="currentColor"/>
                                <rect x="12" y="0" width="1" height="20" fill="currentColor"/>
                                <rect x="14" y="0" width="2" height="20" fill="currentColor"/>
                                <rect x="18" y="0" width="3" height="20" fill="currentColor"/>
                                <rect x="22" y="0" width="1" height="20" fill="currentColor"/>
                                <rect x="25" y="0" width="1" height="20" fill="currentColor"/>
                                <rect x="28" y="0" width="2" height="20" fill="currentColor"/>
                                <rect x="31" y="0" width="4" height="20" fill="currentColor"/>
                                <rect x="36" y="0" width="1" height="20" fill="currentColor"/>
                                <rect x="38" y="0" width="3" height="20" fill="currentColor"/>
                                <rect x="42" y="0" width="1" height="20" fill="currentColor"/>
                                <rect x="44" y="0" width="2" height="20" fill="currentColor"/>
                                <rect x="47" y="0" width="2" height="20" fill="currentColor"/>
                                <rect x="50" y="0" width="4" height="20" fill="currentColor"/>
                                <rect x="55" y="0" width="1" height="20" fill="currentColor"/>
                                <rect x="57" y="0" width="2" height="20" fill="currentColor"/>
                                <rect x="60" y="0" width="3" height="20" fill="currentColor"/>
                                <rect x="64" y="0" width="1" height="20" fill="currentColor"/>
                                <rect x="67" y="0" width="1" height="20" fill="currentColor"/>
                                <rect x="69" y="0" width="2" height="20" fill="currentColor"/>
                                <rect x="72" y="0" width="4" height="20" fill="currentColor"/>
                                <rect x="77" y="0" width="1" height="20" fill="currentColor"/>
                                <rect x="79" y="0" width="3" height="20" fill="currentColor"/>
                                <rect x="83" y="0" width="1" height="20" fill="currentColor"/>
                                <rect x="85" y="0" width="2" height="20" fill="currentColor"/>
                                <rect x="88" y="0" width="2" height="20" fill="currentColor"/>
                                <rect x="91" y="0" width="4" height="20" fill="currentColor"/>
                                <rect x="96" y="0" width="1" height="20" fill="currentColor"/>
                                <rect x="98" y="0" width="2" height="20" fill="currentColor"/>
                            </svg>
                            <span class="text-[8px] font-mono text-zinc-500 tracking-widest uppercase">STX_ORBITAL_APPROVED // LAUNCH WINDOW 2026</span>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- SECTION 5: CUSTOM CORRESPONDENCE & ARCHIVE -->
    <section class="py-24 border-t border-white/5 relative z-20 bg-black/40">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                <div>
                    <span class="font-mono text-xs uppercase tracking-widest text-zinc-500">JOURNAL ARCHIVES</span>
                    <h3 class="text-3xl font-display font-medium text-white uppercase tracking-tight mt-2 leading-none">
                        TESTIMONIES OF <br><span class="font-black italic text-zinc-400">THE RE-ASCENDED</span>
                    </h3>
                    <p class="text-xs md:text-sm font-mono text-zinc-400 tracking-wider mt-4 leading-relaxed">
                        Read through actual logged transcripts from previous orbital flyers who conquered their atmospheric limitations and saw Earth through our views.
                    </p>
                    
                    <div class="mt-8 border-l border-white/10 pl-6 space-y-2">
                        <p class="text-sm italic text-zinc-300 font-mono">
                            "Looking down, there was no line dividing nations. Just a deep navy glow surrounding a beautiful sphere. I became the high conqueror."
                        </p>
                        <span class="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">— Commander Mark V., Flight 08</span>
                    </div>
                </div>

                <!-- Custom Newsletter Sign-up Box to stay updated with Launches -->
                <div class="p-8 rounded-2xl border border-white/5 bg-darkCard/80 relative overflow-hidden">
                    <div class="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-white/5 filter blur-2xl"></div>

                    <h4 class="text-lg font-display font-semibold text-white uppercase tracking-wider mb-2">Join orbital newsletter</h4>
                    <p class="text-xs text-zinc-400 font-mono tracking-wider mb-6">Receive upcoming window schedules, ticket price projections, and flight telemetry archives.</p>
                    
                    <div class="space-y-4">
                        <input 
                            type="email" 
                            id="newsletter-email" 
                            placeholder="explorer@stratos.space" 
                            class="w-full bg-black border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-white transition-colors font-mono"
                        >
                        <button onclick="triggerNewsletterToast()" class="w-full bg-white hover:bg-zinc-200 text-black text-xs font-mono font-bold uppercase tracking-widest py-3 rounded-lg transition-all">
                            REGISTER FOR TELEMETRY
                        </button>
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- CUSTOM TOAST NOTIFICATION WINDOW (No browser alerts allowed) -->
    <div id="toast-notification" class="fixed bottom-6 right-6 z-50 bg-white text-black p-4 rounded-xl border border-white/20 shadow-2xl flex items-center gap-3 transform translate-y-20 opacity-0 pointer-events-none transition-all duration-300">
        <div class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
        <div class="font-mono text-xs">
            <span class="block font-bold uppercase" id="toast-title">SYSTEM STATUS</span>
            <span class="text-zinc-600 block text-[10px]" id="toast-message">Boarding flight path successfully locked in.</span>
        </div>
        <button onclick="hideToast()" class="text-zinc-400 hover:text-black font-bold ml-4 focus:outline-none">×</button>
    </div>

    <!-- FOOTER Section with atmospheric micro elements -->
    <footer class="border-t border-white/5 bg-zinc-950 py-16 relative z-20">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
            
            <div class="space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded-full border border-zinc-500 flex items-center justify-center">
                        <span class="text-[9px] font-mono font-bold text-white">S.C</span>
                    </div>
                    <span class="font-display font-semibold text-sm uppercase tracking-wider text-white">STRATOS CONQUEROR</span>
                </div>
                <p class="text-xs text-zinc-500 font-mono tracking-wider max-w-sm">
                    Premium non-orbital and orbital visual flight packages. Designed for high altitude space-bound explorers and pioneers.
                </p>
                <p class="text-[10px] text-zinc-600 font-mono">
                    © 2026 STRATOS CONQUEROR. ALL LIMITATIONS EXPIRED.
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-8 font-mono text-xs">
                <div class="space-y-3">
                    <span class="block text-[10px] text-zinc-500 uppercase tracking-widest">NAVIGATION</span>
                    <a href="#horizon" class="block text-zinc-400 hover:text-white transition-colors">Horizon Journey</a>
                    <a href="#specs" class="block text-zinc-400 hover:text-white transition-colors">Aero Specs</a>
                    <a href="#gear" class="block text-zinc-400 hover:text-white transition-colors">Personal Armor</a>
                </div>
                <div class="space-y-3">
                    <span class="block text-[10px] text-zinc-500 uppercase tracking-widest">METADATA</span>
                    <span class="block text-zinc-400">SYS_V8.04</span>
                    <span class="block text-zinc-400">LAT: 35.0594° N</span>
                    <span class="block text-zinc-400">GRAIN: 15%</span>
                </div>
                <div class="space-y-3">
                    <span class="block text-[10px] text-zinc-500 uppercase tracking-widest">LAUNCH DIRECTORS</span>
                    <span class="block text-zinc-400">Design by Hilmi</span>
                    <span class="block text-zinc-400">For The Sky</span>
                </div>
            </div>

        </div>
    </footer>

    <!-- INTERACTIVE JAVASCRIPT LOGIC -->
    <script>
        // Interactive Hotspot data mapping
        const hotspots = {
            1: {
                title: "HUD Visor Block",
                desc: "Polycarbonate triple layered reflective gold visor offering maximum cosmic radiation defense, panoramic viewing angles, and instant HUD digital stats overlay.",
                stat1: "99.8% Perfect",
                stat2: "Double Tier IV"
            },
            2: {
                title: "Atmosphere Controller",
                desc: "Integrated oxygen ventilation module controlling absolute inner shell gas pressures, relative humidity, and active micro fiber carbon filters.",
                stat1: "99.9% Reliable",
                stat2: "Triple redundant"
            },
            3: {
                title: "Multi-Weave Fabric",
                desc: "Flexible micro-tubed liquid flow lines cooling the internal limbs during direct thermal exposures. Double ballistic outer layer with Nomex thread weaves.",
                stat1: "1200°C Max Temp",
                stat2: "7 Layers Defense"
            }
        };

        function activateHotspot(id, title, desc) {
            const data = hotspots[id];
            document.getElementById('hotspot-title').innerText = data.title;
            document.getElementById('hotspot-desc').innerText = data.desc;
            document.getElementById('hotspot-stat-1').innerText = data.stat1;
            document.getElementById('hotspot-stat-2').innerText = data.stat2;
            
            showToast("HOTSPOT COMPONENT REVEALED", `Viewing telemetry structure for ${data.title}`);
        }

        // Live Interactive Altitude Simulator logic
        function updateAltitudeSim(val) {
            // Update slider display text
            document.getElementById('slider-display-val').innerText = val;
            
            // Update nav-bar altitude ticker
            document.getElementById('nav-altitude-counter').innerText = `Altitude: ${val.toString().padStart(3, '0')} km`;

            const skyCard = document.getElementById('sky-simulation-card');
            const starsLayer = document.getElementById('sim-stars-layer');
            const curvatureLine = document.getElementById('sim-curvature-line');
            const capsuleIcon = document.getElementById('sim-capsule-icon');

            // Simulator calculations
            let zoneName = "Troposphere";
            let pressure = "101,325 Pa";
            let temp = "15°C";
            let rendering = "COMMENCING SCAN";
            let speed = "MACH: 0.85";
            let badge = "CRUISING ALTITUDE";

            // Transitions based on custom altitude range values
            if (val <= 12) {
                // Low sky light light-slate grey
                skyCard.style.background = "linear-gradient(to top, #71717a, #3f3f46)";
                starsLayer.style.opacity = "0";
                curvatureLine.style.bottom = "-115%";
                capsuleIcon.style.transform = "translateY(10px) scale(0.9)";
                
                zoneName = "Troposphere";
                pressure = "101,325 Pa (Standard)";
                temp = "15°C to -50°C";
                speed = "MACH: 0.85";
                badge = "CRUISING ALTITUDE";
            } 
            else if (val > 12 && val <= 50) {
                // Stratosphere dark steel blue
                skyCard.style.background = "linear-gradient(to top, #1e293b, #0f172a)";
                starsLayer.style.opacity = "0.2";
                curvatureLine.style.bottom = "-110%";
                capsuleIcon.style.transform = "translateY(0px) scale(1.0)";

                zoneName = "Stratosphere";
                pressure = "5,500 Pa (Extremely Low)";
                temp = "-56°C to -2°C";
                speed = "MACH: 2.15";
                badge = "HIGH STRATOSPHERE";
            } 
            else if (val > 50 && val <= 85) {
                // Mesosphere near black navy
                skyCard.style.background = "linear-gradient(to top, #0f172a, #020617)";
                starsLayer.style.opacity = "0.6";
                curvatureLine.style.bottom = "-105%";
                capsuleIcon.style.transform = "translateY(-10px) scale(1.1)";

                zoneName = "Mesosphere";
                pressure = "120 Pa (Vacuum Risk)";
                temp = "-2°C to -90°C";
                speed = "MACH: 4.80";
                badge = "MESOSPHERE CROSSING";
            } 
            else {
                // Karman limit black
                skyCard.style.background = "linear-gradient(to top, #020617, #000000)";
                starsLayer.style.opacity = "1";
                curvatureLine.style.bottom = "-98%";
                capsuleIcon.style.transform = "translateY(-20px) scale(1.2)";

                zoneName = "Karman Limit Border";
                pressure = "0.03 Pa (Total Vacuum)";
                temp = "-90°C (Direct Sun Heat)";
                speed = "MACH: 12.5 (ORBIT ENTRY)";
                badge = "OUTER HORIZON REVEALED";
            }

            // Update Panel fields
            document.getElementById('panel-zone-name').innerText = zoneName;
            document.getElementById('panel-pressure').innerText = pressure;
            document.getElementById('panel-temp').innerText = temp;
            document.getElementById('sim-telemetry-speed').innerText = speed;
            document.getElementById('badge-sky-state').innerText = badge;
        }

        // Live pass rendering based on form details
        function generateLivePass() {
            const nameInput = document.getElementById('pass-input-name').value;
            const trajInput = document.getElementById('pass-input-trajectory').value;
            const siteInput = document.getElementById('pass-input-site').value;
            const cabinInput = document.getElementById('pass-input-cabin').value;

            document.getElementById('ticket-passenger-name').innerText = nameInput ? nameInput : "AELIA VANCE";
            document.getElementById('ticket-trajectory').innerText = trajInput;
            document.getElementById('ticket-launch-site').innerText = siteInput;
            document.getElementById('ticket-cabin').innerText = cabinInput;

            // Generate randomized mock ticket id string
            const randomID = Math.floor(10000 + Math.random() * 90000);
            document.getElementById('ticket-id').innerText = `SYS-#${randomID}-ST`;
        }

        // Action confirmation for tickets
        function requestPassConfirmation() {
            const passenger = document.getElementById('pass-input-name').value || "Aelia Vance";
            showToast("TRAJECTORY COMPILATION LOCKED", `Successfully compiled flight itinerary for ${passenger.toUpperCase()}. Welcome to Stratos.`);
            
            // Add subtle glow to pass preview to indicate locking/success state
            const passPreview = document.getElementById('boarding-pass-ticket');
            passPreview.style.borderColor = "rgba(16, 185, 129, 0.4)";
            setTimeout(() => {
                passPreview.style.borderColor = "rgba(255, 255, 255, 0.1)";
            }, 4000);
        }

        // Reset inputs to original state
        function resetPassForm() {
            document.getElementById('pass-input-name').value = "AELIA VANCE";
            document.getElementById('pass-input-trajectory').selectedIndex = 0;
            document.getElementById('pass-input-site').selectedIndex = 0;
            document.getElementById('pass-input-cabin').selectedIndex = 0;
            generateLivePass();
            showToast("RESET STATUS", "Form inputs restored to defaults.");
        }

        // Custom Newsletter registration action
        function triggerNewsletterToast() {
            const email = document.getElementById('newsletter-email').value;
            if (email) {
                showToast("LAUNCH CHRONICLES ACTIVE", `Registered telemetry feed to ${email}. System ready.`);
                document.getElementById('newsletter-email').value = "";
            } else {
                showToast("ERROR", "Please specify an email address to proceed.", true);
            }
        }

        // Pure custom Toast Handler
        function showToast(title, msg, isError = false) {
            const toast = document.getElementById('toast-notification');
            const titleEl = document.getElementById('toast-title');
            const messageEl = document.getElementById('toast-message');

            titleEl.innerText = title;
            messageEl.innerText = msg;

            if (isError) {
                titleEl.className = "block font-bold uppercase text-red-600";
            } else {
                titleEl.className = "block font-bold uppercase text-black";
            }

            // Slide in
            toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
            toast.classList.add('translate-y-0', 'opacity-100');

            // Auto-hide after 5 seconds
            setTimeout(hideToast, 5000);
        }

        function hideToast() {
            const toast = document.getElementById('toast-notification');
            toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
            toast.classList.remove('translate-y-0', 'opacity-100');
        }

        // Initialize Simulator with defaults
        updateAltitudeSim(12);
    </script>
</body>
</html>


II
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AETHERIS — Typographic Ambient Sculpture</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts: Instrument Serif, Instrument Sans, and JetBrains Mono for the exact editorial-technical mix -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Instrument Serif"', 'serif'],
            sans: ['"Instrument Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          animation: {
            'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'float-slow': 'float 12s ease-in-out infinite',
            'spin-slow': 'spin 20s linear infinite',
          }
        }
      }
    }
  </script>

  <style>
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-12px) rotate(1deg); }
    }

    /* Custom Theme Definitions mapping to the premium editorial feel */
    :root {
      --color-bg: #ced0d9;
      --color-text-main: #2b2d42;
      --color-text-muted: #5c5f73;
      --color-card-bg: rgba(255, 255, 255, 0.42);
      --color-card-border: rgba(255, 255, 255, 0.65);
      --color-pill-overlay: rgba(255, 255, 255, 0.55);
      --color-accent: #6b638c;
      --shadow-premium: 0 20px 40px -15px rgba(43, 45, 66, 0.12);
    }

    .theme-charcoal {
      --color-bg: #14151a;
      --color-text-main: #f3f4f6;
      --color-text-muted: #9ca3af;
      --color-card-bg: rgba(26, 27, 35, 0.55);
      --color-card-border: rgba(255, 255, 255, 0.12);
      --color-pill-overlay: rgba(255, 255, 255, 0.08);
      --color-accent: #9d8df2;
      --shadow-premium: 0 20px 45px -10px rgba(0, 0, 0, 0.5);
    }

    .theme-alabaster {
      --color-bg: #eae6df;
      --color-text-main: #3a3530;
      --color-text-muted: #706860;
      --color-card-bg: rgba(255, 255, 255, 0.38);
      --color-card-border: rgba(255, 255, 255, 0.7);
      --color-pill-overlay: rgba(255, 255, 255, 0.5);
      --color-accent: #a38a70;
      --shadow-premium: 0 20px 40px -15px rgba(58, 53, 48, 0.1);
    }

    body {
      background-color: var(--color-bg);
      color: var(--color-text-main);
      transition: background-color 0.8s cubic-bezier(0.25, 1, 0.5, 1), color 0.8s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .premium-card {
      background: var(--color-card-bg);
      border: 1px solid var(--color-card-border);
      backdrop-filter: blur(16px);
      box-shadow: var(--shadow-premium);
      transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .pill-overlay {
      background: var(--color-pill-overlay);
      border: 1px solid var(--color-card-border);
      backdrop-filter: blur(24px);
    }

    /* Hide scrollbars but keep functionality */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    /* Elegant custom inputs */
    .custom-range {
      -webkit-appearance: none;
      appearance: none;
      background: rgba(0, 0, 0, 0.1);
      height: 2px;
      border-radius: 9999px;
      outline: none;
      transition: background 0.3s;
    }
    .theme-charcoal .custom-range {
      background: rgba(255, 255, 255, 0.15);
    }
    .custom-range::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--color-text-main);
      cursor: pointer;
      transition: transform 0.2s;
    }
    .custom-range::-webkit-slider-thumb:hover {
      transform: scale(1.3);
    }
  </style>
</head>
<body class="font-sans min-h-screen selection:bg-purple-200 selection:text-black">

  <!-- NOTIFICATION TOAST -->
  <div id="toast-notification" class="fixed top-6 right-6 z-50 transform translate-y-12 opacity-0 pointer-events-none transition-all duration-500 ease-out">
    <div class="pill-overlay text-sm px-5 py-3 rounded-full flex items-center space-x-3 shadow-lg">
      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      <span id="toast-message" class="font-mono text-xs tracking-tight">System ready</span>
    </div>
  </div>

  <!-- FLOATING AUDIO BAR (Engaged state indicator) -->
  <div id="floating-audio-bar" class="fixed bottom-6 right-6 z-50 opacity-0 pointer-events-none transition-all duration-500 transform translate-y-4">
    <div class="pill-overlay rounded-full px-4 py-2 flex items-center space-x-3 shadow-lg">
      <div class="flex items-center space-x-1">
        <span class="w-1 h-3 bg-current animate-bounce" style="animation-delay: 0.1s"></span>
        <span class="w-1 h-4 bg-current animate-bounce" style="animation-delay: 0.3s"></span>
        <span class="w-1 h-2 bg-current animate-bounce" style="animation-delay: 0.5s"></span>
      </div>
      <span class="text-[10px] font-mono uppercase tracking-widest">Ambient Active</span>
      <button onclick="toggleAmbientSound()" class="hover:opacity-70">
        <i data-lucide="square" class="w-3.5 h-3.5"></i>
      </button>
    </div>
  </div>

  <!-- NAVIGATION HEADER -->
  <header class="w-full py-8 px-6 md:px-12 flex justify-between items-center relative z-20">
    <div class="flex items-center space-x-2">
      <span class="font-mono text-xs tracking-widest uppercase opacity-80">AETHERIS</span>
      <span class="text-[9px] font-mono px-2 py-0.5 rounded-full border border-current opacity-40">No_1</span>
    </div>

    <!-- Quick controls -->
    <div class="flex items-center space-x-6">
      <!-- Theme controller -->
      <div class="flex items-center space-x-2 bg-white/20 dark:bg-black/10 rounded-full p-1 border border-white/30">
        <button onclick="changeTheme('orchid')" class="w-6 h-6 rounded-full bg-[#ced0d9] border border-white/50 relative group" title="Orchid Mist Theme">
          <span class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-[9px] font-mono px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Orchid Mist</span>
        </button>
        <button onclick="changeTheme('charcoal')" class="w-6 h-6 rounded-full bg-[#14151a] border border-white/20 relative group" title="Charcoal Onyx Theme">
          <span class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-[9px] font-mono px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Charcoal Onyx</span>
        </button>
        <button onclick="changeTheme('alabaster')" class="w-6 h-6 rounded-full bg-[#eae6df] border border-white/50 relative group" title="Alabaster Dune Theme">
          <span class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-[9px] font-mono px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Alabaster Dune</span>
        </button>
      </div>

      <a href="#configurator" class="hidden sm:inline-block font-mono text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">Architect</a>
      <a href="#synthesizer" class="hidden sm:inline-block font-mono text-xs tracking-widest uppercase hover:opacity-70 transition-opacity font-bold">Listen Live</a>
      <a href="#reserve" class="px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest pill-overlay hover:scale-105 active:scale-95 transition-transform">Reserve</a>
    </div>
  </header>

  <!-- HERO SECTION: Recreating and evolving the split layout -->
  <main class="max-w-7xl mx-auto px-4 md:px-12 pt-4 pb-24 relative z-10">
    
    <!-- Top Editorial Header -->
    <div class="text-center py-12 md:py-16">
      <p class="font-mono text-xs uppercase tracking-[0.25em] opacity-60 mb-3">Typographical Ambient Archive</p>
      <h1 class="font-serif text-6xl md:text-8xl tracking-tight leading-none mb-6">
        An elegant dialogue between<br><span class="italic font-normal">sound, words, and space.</span>
      </h1>
      <p class="max-w-xl mx-auto text-sm md:text-base opacity-75 leading-relaxed font-sans font-light">
        Aetheris No. 1 is an heirloom physical synthesizer and micro-epigraphy timepiece. It captures natural daylight, playing warm, generative analog chords while rendering customizable, context-aware aesthetic prose.
      </p>
    </div>

    <!-- The Split-Aesthetic Block (Inspired by the Reference Image structure) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- LEFT COLUMN: The Interactive Botanical & Sculptural Display (Inspired by the flower card) -->
      <div class="lg:col-span-7 space-y-6">
        <div class="premium-card rounded-[40px] p-6 md:p-8 relative overflow-hidden h-[550px] md:h-[680px] flex flex-col justify-between group">
          <!-- Background botanical/shadow overlay -->
          <div class="absolute inset-0 z-0 opacity-40 mix-blend-multiply transition-transform duration-[10000ms] group-hover:scale-105 pointer-events-none" id="botanical-bg" style="background-image: url('https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=1200&q=80'); background-size: cover; background-position: center;"></div>
          
          <!-- Colored gradients reflecting Orchid/Charcoal/Alabaster -->
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent z-0"></div>

          <!-- Glassmorphic organic shape connecting paths (Inspired by SVG paths and lines in reference) -->
          <svg class="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
            <path id="connection-line-1" d="M 120 150 Q 280 110, 480 180" fill="none" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 4" class="opacity-40" />
            <circle cx="120" cy="150" r="5" fill="currentColor" class="opacity-60" />
            <circle cx="480" cy="180" r="5" fill="currentColor" class="opacity-60" />
          </svg>

          <!-- Floating Info Cards mapped in space (Inspired by "Circle" labels and node layout) -->
          <div class="absolute top-12 left-6 z-20 pointer-events-auto">
            <div class="pill-overlay px-4 py-2 rounded-full flex items-center space-x-2 hover:scale-105 transition-transform cursor-help" onclick="showFeatureTip('optics')">
              <span class="w-2 h-2 rounded-full bg-current opacity-80"></span>
              <span class="text-[10px] font-mono tracking-widest uppercase">Optic Lux</span>
            </div>
          </div>

          <div class="absolute top-28 right-8 z-20 pointer-events-auto">
            <div class="pill-overlay px-4 py-2 rounded-full flex items-center space-x-2 hover:scale-105 transition-transform cursor-help" onclick="showFeatureTip('resonator')">
              <span class="w-2 h-2 rounded-full bg-current opacity-80"></span>
              <span class="text-[10px] font-mono tracking-widest uppercase">Resonator</span>
            </div>
          </div>

          <!-- Center Pillar Overlay (Direct translation of the "MINIMALIST" pill in the image) -->
          <div class="absolute inset-y-16 left-1/2 transform -translate-x-1/2 w-32 md:w-40 pill-overlay rounded-full flex flex-col items-center justify-between py-12 z-20 shadow-2xl overflow-hidden border border-white/40">
            <!-- Glass glare -->
            <div class="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
            
            <div class="text-center z-10">
              <p class="text-[9px] font-mono tracking-widest opacity-60">AETHERIS</p>
              <p class="text-[10px] font-mono tracking-widest font-bold opacity-80">2026</p>
            </div>
            
            <!-- Rotating/vertical typography -->
            <div class="transform -rotate-90 origin-center whitespace-nowrap z-10 tracking-[0.3em] font-light text-sm md:text-base opacity-90 font-sans uppercase">
              MINIMALIST
            </div>

            <!-- Bottom tactile point -->
            <div class="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center animate-pulse z-10 cursor-pointer hover:bg-white/30 transition-colors" onclick="triggerAmbientSound()">
              <i data-lucide="play" class="w-3.5 h-3.5 text-current fill-current"></i>
            </div>
          </div>

          <!-- Bottom Left Badge (Recreating the picture credit metadata block in the reference) -->
          <div class="mt-auto relative z-20 flex justify-between items-end">
            <div>
              <div class="flex items-center space-x-2 mb-1">
                <span class="font-serif italic text-2xl tracking-tight text-white mix-blend-difference">Aetheris OS v1.4</span>
              </div>
              <p class="text-[10px] font-mono opacity-60 tracking-widest">Designed by Creativestyle</p>
            </div>
            
            <div class="text-right">
              <p class="text-[9px] font-mono tracking-widest opacity-60 uppercase mb-1">Interactive Blueprint</p>
              <p class="text-[10px] font-mono font-medium">Click components to inspect</p>
            </div>
          </div>
        </div>
        
        <!-- Interactive Tip Box (Revealed on node click) -->
        <div id="blueprint-info" class="premium-card rounded-2xl p-4 flex items-center justify-between transition-all duration-500 opacity-100">
          <div class="flex items-start space-x-3">
            <i data-lucide="info" class="w-5 h-5 mt-0.5 opacity-70"></i>
            <div>
              <p id="blueprint-title" class="text-xs font-mono uppercase tracking-wider font-bold">Tactile Physical Interaction</p>
              <p id="blueprint-desc" class="text-xs opacity-80 mt-1">Select any highlighted optic node above to inspect structural blueprint characteristics of Aetheris No. 1.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN: The Typographic Prose & Sound Synthesis Engine -->
      <div class="lg:col-span-5 space-y-8">
        
        <!-- Typographic Prose Card (Recreating the elegant typography card on the right of the reference) -->
        <div class="premium-card rounded-[40px] p-8 relative overflow-hidden flex flex-col justify-between" id="prose-card">
          <!-- Geometric Infinity/Decorative header -->
          <div class="flex justify-between items-start mb-8 border-b border-current/10 pb-4">
            <div class="flex items-center space-x-2">
              <svg class="w-6 h-6 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 12c-2-2.5-5-4-8-4a5 5 0 000 10c3 0 6-1.5 8-4zm0 0c2 2.5 5 4 8 4a5 5 0 000-10c-3 0-6 1.5-8 4z" />
              </svg>
              <span class="font-mono text-xs tracking-widest opacity-60">CHRONICLES</span>
            </div>
            <div class="text-right">
              <h3 class="font-serif text-3xl leading-none">20<span class="text-lg align-super font-mono">26</span></h3>
            </div>
          </div>

          <!-- Dynamic Editorial Poetry Block -->
          <div class="space-y-6 text-sm font-light leading-relaxed tracking-wide opacity-90 relative">
            <div id="poetry-content" class="space-y-4">
              <!-- Default beautifully styled poetic prose (Translating the mood of the Indonesian original) -->
              <p class="font-mono text-xs uppercase tracking-widest opacity-50 mb-2">Fragment I — Eternal Drift</p>
              <p class="font-serif italic text-lg leading-relaxed mb-4 text-purple-950/80 dark:text-purple-200">
                "Rindu memang tak kenal waktu. Seperti pagi ini aku sudah merindukanmu. Pagi yang kesekian kalinya, dan aku masih membungkus rinduku dalam bungkam."
              </p>
              <p class="opacity-75 leading-relaxed font-sans text-xs">
                Time behaves like dynamic mist. We build elaborate constructs of memory in the quiet interval between the shadow and the light. In stillness, we listen.
              </p>
            </div>
            
            <!-- Gemini Response Indicator (Hidden by default) -->
            <div id="ai-generating-loader" class="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center space-y-3 opacity-0 pointer-events-none transition-opacity duration-300 rounded-xl">
              <div class="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              <p class="font-mono text-[10px] uppercase tracking-widest">Consulting the ether...</p>
            </div>
          </div>

          <!-- Decorative Asterisk/Star icon & creator stamp -->
          <div class="mt-8 pt-6 border-t border-current/10 flex justify-between items-center">
            <div>
              <p class="text-[9px] font-mono tracking-wider opacity-50">CURATION SOURCE</p>
              <p class="text-xs font-medium tracking-tight">Archive by <span class="font-mono uppercase text-[10px] tracking-widest">Creativestyle</span></p>
            </div>
            
            <!-- Beautiful Geometric Multi-point Star Icon (From reference) -->
            <svg class="w-8 h-8 animate-spin-slow opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
              <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
              <circle cx="12" cy="12" r="3" fill="none" />
            </svg>
          </div>
        </div>

        <!-- Dynamic AI Mood Prose Customizer Panel (Gemini Integration) -->
        <div class="premium-card rounded-3xl p-6 space-y-4">
          <div class="flex justify-between items-center">
            <h4 class="font-mono text-xs uppercase tracking-wider font-bold">AI Prose Composer</h4>
            <span class="text-[9px] font-mono bg-current/10 px-2 py-0.5 rounded-full uppercase">Gemini Powered</span>
          </div>
          
          <p class="text-xs opacity-75">
            Command the device’s typography screen. Enter your current coordinates, emotional atmosphere, or desired prompt to compose original, formatted micro-poetry.
          </p>

          <div class="space-y-3">
            <textarea id="mood-input" placeholder="e.g., Nostalgic afternoon rain in Kyoto, coffee brewing..." class="w-full bg-white/30 dark:bg-black/20 border border-current/10 rounded-xl p-3 text-xs focus:ring-1 focus:ring-purple-400 focus:outline-none transition-all placeholder:opacity-50 text-current resize-none h-20" rows="2"></textarea>
            
            <button onclick="generateCustomProse()" class="w-full py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-black font-mono text-xs tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-md">
              <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
              <span>Compose Custom Poetry</span>
            </button>
          </div>
        </div>

      </div>

    </div>

    <!-- SOUNDSCAPE & VISUAL ENGINE SECTIONS -->
    <section id="synthesizer" class="mt-20 pt-12 border-t border-current/10">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <p class="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Live Sensory Interface</p>
        <h2 class="font-serif text-4xl md:text-5xl tracking-tight">The Generative Soundscape Engine</h2>
        <p class="text-sm opacity-75 mt-3">
          Our physical device synthesizes warm, analog drift chords dynamically influenced by space temperature and local light readings. Play with the live emulator below.
        </p>
      </div>

      <!-- Live Synthesizer Interactive Deck -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <!-- Visualizer Canvas Panel -->
        <div class="md:col-span-7 premium-card rounded-[32px] p-6 h-[340px] relative overflow-hidden flex flex-col justify-between">
          <div class="absolute inset-0 z-0">
            <canvas id="visualizer-canvas" class="w-full h-full block"></canvas>
          </div>
          
          <div class="relative z-10 flex justify-between items-start">
            <div>
              <p class="font-mono text-xs uppercase tracking-widest opacity-60">Frequency Oscillography</p>
              <p id="oscillator-state" class="text-[10px] font-mono opacity-80 mt-1">Status: Disengaged</p>
            </div>
            <span class="w-2.5 h-2.5 rounded-full bg-current opacity-40 animate-pulse"></span>
          </div>

          <div class="relative z-10 mt-auto flex justify-between items-end">
            <div class="text-left">
              <p class="text-[9px] font-mono tracking-widest opacity-60 uppercase">Interactive Canvas</p>
              <p class="text-[10px] font-mono">Move cursor to modulate ambient filter cut-off</p>
            </div>
            <div class="pill-overlay px-3 py-1 rounded-full text-[9px] font-mono">
              60.00 Hz Base
            </div>
          </div>
        </div>

        <!-- Synthesizer Controls -->
        <div class="md:col-span-5 space-y-6">
          <div class="premium-card rounded-[32px] p-8 space-y-6">
            
            <div class="flex justify-between items-center pb-4 border-b border-current/10">
              <div>
                <h3 class="font-mono text-xs uppercase tracking-widest font-bold">Synthesizer Controls</h3>
                <p class="text-[10px] opacity-60 font-mono mt-1">Web Audio API / Custom DSP</p>
              </div>
              
              <!-- Core Power Toggle Button -->
              <button id="synth-power-btn" onclick="toggleAmbientSound()" class="w-12 h-12 rounded-full border border-current/20 flex items-center justify-center hover:scale-105 transition-all text-current">
                <i data-lucide="play" id="power-icon" class="w-5 h-5 fill-current"></i>
              </button>
            </div>

            <!-- Frequency Drift Control -->
            <div class="space-y-2">
              <div class="flex justify-between text-xs font-mono">
                <span>Spectral Drift</span>
                <span id="drift-val">0.25 Hz</span>
              </div>
              <input type="range" id="param-drift" min="0.05" max="1" step="0.01" value="0.25" oninput="updateSynthParams()" class="w-full custom-range">
              <p class="text-[10px] opacity-60">Controls slow random variations in individual oscillators.</p>
            </div>

            <!-- Resonance / Color Control -->
            <div class="space-y-2">
              <div class="flex justify-between text-xs font-mono">
                <span>Resonant Color</span>
                <span id="color-val">Low Pass</span>
              </div>
              <input type="range" id="param-resonance" min="200" max="1200" step="10" value="450" oninput="updateSynthParams()" class="w-full custom-range">
              <p class="text-[10px] opacity-60">Adjusts the warmth threshold simulating physical organic acoustic resonance.</p>
            </div>

            <!-- Nostalgia Filter slider (harmonic feedback) -->
            <div class="space-y-2">
              <div class="flex justify-between text-xs font-mono">
                <span>Harmonic Feedback</span>
                <span id="harmonic-val">Med</span>
              </div>
              <input type="range" id="param-harmony" min="1" max="5" step="1" value="3" oninput="updateSynthParams()" class="w-full custom-range">
              <p class="text-[10px] opacity-60">Adds warm third and fifth-order harmonics directly to the signal path.</p>
            </div>

            <div class="flex space-x-2 pt-2">
              <button onclick="setSynthPreset('warm')" class="flex-1 py-2 text-[10px] font-mono uppercase tracking-widest rounded-full border border-current/10 hover:bg-current/10 transition-colors">Warm Fog</button>
              <button onclick="setSynthPreset('ethereal')" class="flex-1 py-2 text-[10px] font-mono uppercase tracking-widest rounded-full border border-current/10 hover:bg-current/10 transition-colors">Solar Flare</button>
              <button onclick="setSynthPreset('abyss')" class="flex-1 py-2 text-[10px] font-mono uppercase tracking-widest rounded-full border border-current/10 hover:bg-current/10 transition-colors">Abyssal Deep</button>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ARCHITECTURAL BLUEPRINTS & PHYSICAL SPECIFICATIONS -->
    <section id="configurator" class="mt-28">
      <div class="text-center max-w-xl mx-auto mb-16">
        <p class="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Material Archetype</p>
        <h2 class="font-serif text-4xl md:text-5xl tracking-tight">Minimalist Form. Pure Precision.</h2>
        <p class="text-sm opacity-75 mt-3">
          Constructed from a single block of bead-blasted 6000-series aerospace aluminum and capped with an ultra-thin custom optical glass overlay.
        </p>
      </div>

      <!-- Architectural Feature Grid (Inspired by the precise alignment of the reference image) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Feature Item 1 -->
        <div class="premium-card rounded-[32px] p-8 space-y-4 hover:translate-y-[-4px] transition-transform">
          <div class="w-12 h-12 rounded-2xl bg-current/5 border border-current/10 flex items-center justify-center mb-6">
            <i data-lucide="sun" class="w-5 h-5"></i>
          </div>
          <p class="font-mono text-xs uppercase tracking-widest opacity-60">SPECIFICATION 01</p>
          <h3 class="font-serif text-2xl tracking-tight font-medium">Bespoke e-Paper Panel</h3>
          <p class="text-xs opacity-75 leading-relaxed">
            Utilizes a custom 16-level grayscale, 120Hz refresh e-paper display. It behaves identical to natural physical print, reading beautifully at any angle with absolutely zero light emission or visual fatigue.
          </p>
        </div>

        <!-- Feature Item 2 -->
        <div class="premium-card rounded-[32px] p-8 space-y-4 hover:translate-y-[-4px] transition-transform">
          <div class="w-12 h-12 rounded-2xl bg-current/5 border border-current/10 flex items-center justify-center mb-6">
            <i data-lucide="cpu" class="w-5 h-5"></i>
          </div>
          <p class="font-mono text-xs uppercase tracking-widest opacity-60">SPECIFICATION 02</p>
          <h3 class="font-serif text-2xl tracking-tight font-medium">ARM Cortex DSP Engine</h3>
          <p class="text-xs opacity-75 leading-relaxed">
            Equipped with a dual-core atmospheric audio processor which generates clean, warm, analog-sounding wave synthesis in real time based on complex localized environmental humidity indexes.
          </p>
        </div>

        <!-- Feature Item 3 -->
        <div class="premium-card rounded-[32px] p-8 space-y-4 hover:translate-y-[-4px] transition-transform">
          <div class="w-12 h-12 rounded-2xl bg-current/5 border border-current/10 flex items-center justify-center mb-6">
            <i data-lucide="infinity" class="w-5 h-5"></i>
          </div>
          <p class="font-mono text-xs uppercase tracking-widest opacity-60">SPECIFICATION 03</p>
          <h3 class="font-serif text-2xl tracking-tight font-medium">Seamless Architectural Fit</h3>
          <p class="text-xs opacity-75 leading-relaxed">
            Rechargeable via magnetic high-touch brass base nodes. It lasts 45 days on a single charge when operating in ambient passive-display mode, presenting pristine visual and poetic typographic prose.
          </p>
        </div>

      </div>
    </section>

    <!-- PREMIUM RESERVATION SECTION (Commercial Conversion) -->
    <section id="reserve" class="mt-28">
      <div class="premium-card rounded-[40px] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-12">
        <div class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
        
        <div class="space-y-6 md:max-w-xl relative z-10">
          <span class="text-xs font-mono tracking-widest uppercase bg-current/10 px-3 py-1 rounded-full">Limited Curation</span>
          <h2 class="font-serif text-5xl md:text-6xl tracking-tight leading-none">Bring still, physical poetry into your habitat.</h2>
          <p class="text-xs md:text-sm opacity-75 leading-relaxed">
            Aetheris No. 1 is produced in highly restricted curated batches of 150 pieces per season. Every batch features a uniquely serialized solid brass authentication disk embedded under the optical glass.
          </p>
          <div class="flex items-center space-x-6 text-xs font-mono pt-4">
            <div class="flex items-center space-x-2">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
              <span>Batch 03 Available (42 units remaining)</span>
            </div>
            <div>|</div>
            <div>Ships September 2026</div>
          </div>
        </div>

        <div class="w-full md:w-auto min-w-[320px] space-y-4 relative z-10">
          <div class="pill-overlay p-6 rounded-[24px] space-y-4">
            <div class="flex justify-between items-baseline font-mono">
              <span class="text-xs">Aetheris No. 1</span>
              <span class="text-lg font-bold">$1,250 USD</span>
            </div>
            <div class="text-[10px] opacity-60">Includes magnetic brass base dock, premium USB-C leather braided cord, and continuous access to our Aesthetic OS cloud network.</div>
            
            <div class="space-y-2 pt-2">
              <input type="email" id="reservation-email" placeholder="Enter your email coordinates..." class="w-full bg-white/40 dark:bg-black/20 border border-current/15 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-purple-400 focus:outline-none placeholder:opacity-50 text-current">
              <button onclick="handleReservation()" class="w-full py-3.5 bg-slate-950 text-white dark:bg-white dark:text-black font-mono text-xs tracking-widest uppercase rounded-xl hover:opacity-90 active:scale-[0.98] transition-all">Submit Reservation Request</button>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- EDITORIAL FOOTER (With elegant alignment from reference bottom) -->
  <footer class="w-full border-t border-current/10 py-12 px-6 md:px-12 text-center md:text-left relative z-20 mt-12 bg-white/5">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      
      <div class="flex items-center space-x-2">
        <span class="font-mono text-xs tracking-widest uppercase opacity-80">AETHERIS ARCHIVE</span>
        <span class="text-[10px] opacity-50 font-mono">© 2026</span>
      </div>

      <!-- Center text aligning with reference typography style -->
      <div class="text-[10px] font-mono tracking-widest uppercase opacity-70">
        • ARCHIVE BY CREATIVESTYLE •
      </div>

      <div class="flex space-x-6 text-[10px] font-mono tracking-widest uppercase">
        <a href="#" class="hover:opacity-60 transition-opacity">Design Guidelines</a>
        <a href="#" class="hover:opacity-60 transition-opacity">Technical Docs</a>
        <a href="#" class="hover:opacity-60 transition-opacity">Ecosystem</a>
      </div>
    </div>
  </footer>

  <!-- CORE SCRIPT IMPLEMENTATION -->
  <script>
    // Initialize Lucide icons
    lucide.createIcons();

    // Environment variables
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const apiKey = ""; // Left empty for dynamic execution injection

    // Notification toast helper
    function showToast(message) {
      const toast = document.getElementById('toast-notification');
      const msgSpan = document.getElementById('toast-message');
      msgSpan.textContent = message;
      toast.classList.remove('opacity-0', 'translate-y-12', 'pointer-events-none');
      toast.classList.add('opacity-100', 'translate-y-0');
      
      setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-12', 'pointer-events-none');
      }, 4000);
    }

    // Theme Switcher Logic
    function changeTheme(themeName) {
      document.documentElement.className = ''; // Reset standard classes
      if (themeName === 'charcoal') {
        document.documentElement.classList.add('theme-charcoal');
        showToast("Theme switched to Charcoal Onyx");
        updateVisualizerTheme('#9d8df2', '#14151a');
      } else if (themeName === 'alabaster') {
        document.documentElement.classList.add('theme-alabaster');
        showToast("Theme switched to Alabaster Dune");
        updateVisualizerTheme('#a38a70', '#eae6df');
      } else {
        showToast("Theme switched to Orchid Mist");
        updateVisualizerTheme('#6b638c', '#ced0d9');
      }
    }

    // Interactive Blueprint inspectors
    const blueprints = {
      optics: {
        title: "Optic Lux Ambient Sensor",
        desc: "A highly sensitive ambient color-temperature phototransistor. It measures local natural light cycles to smoothly modulate the synthesizer's visual color warmth and dynamic frequency scale."
      },
      resonator: {
        title: "Acoustic Resonator Grille",
        desc: "Integrated with precision-milled wave-guide cavities that allow clean propagation of low-frequency sound waves directly from the high-density aluminum body."
      }
    };

    function showFeatureTip(id) {
      const tipElement = document.getElementById('blueprint-info');
      const titleElement = document.getElementById('blueprint-title');
      const descElement = document.getElementById('blueprint-desc');
      
      // Update data
      titleElement.textContent = blueprints[id].title;
      descElement.textContent = blueprints[id].desc;

      // Pulse visual indication
      tipElement.classList.add('scale-105', 'border-purple-400');
      setTimeout(() => {
        tipElement.classList.remove('scale-105', 'border-purple-400');
      }, 5000);
      
      showToast(`Inspecting ${blueprints[id].title}`);
    }

    // WEB AUDIO GENERATIVE SOUND SYNTHESIZER
    let audioCtx = null;
    let oscillators = [];
    let lfo = null;
    let mainGain = null;
    let filterNode = null;
    let isSynthPlaying = false;

    function initAudio() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // Setup central low pass filter for warm analogue synthesis
        filterNode = audioCtx.createBiquadFilter();
        filterNode.type = 'lowpass';
        filterNode.frequency.value = parseFloat(document.getElementById('param-resonance').value);
        filterNode.Q.value = 1.0;

        // Setup main output gain control
        mainGain = audioCtx.createGain();
        mainGain.gain.setValueAtTime(0, audioCtx.currentTime); // Start muted

        // Connect everything
        filterNode.connect(mainGain);
        mainGain.connect(audioCtx.destination);

        // Build continuous low frequency LFO to simulate gentle environmental "wave" drift
        lfo = audioCtx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 0.08; // Super slow sweep
        const lfoGain = audioCtx.createGain();
        lfoGain.gain.value = 150; // Sweeps up to 150hz around cut-off threshold
        
        lfo.connect(lfoGain);
        lfoGain.connect(filterNode.frequency);
        lfo.start();
      }
    }

    function toggleAmbientSound() {
      // Ensure audio context is ready
      initAudio();

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      if (!isSynthPlaying) {
        // Build 4 warm, layered oscillators (AETHERIS signature harmonic progression)
        // Root chord: C# minor 9th (C#, G#, B, D#) to match the dreamy aesthetic mood
        const baseFrequencies = [69.30, 103.83, 123.47, 155.56]; // low, clean warm frequencies
        const harmonyParam = parseInt(document.getElementById('param-harmony').value);

        oscillators = baseFrequencies.map((freq, index) => {
          const osc = audioCtx.createOscillator();
          const oscGain = audioCtx.createGain();
          
          // Smooth blend types
          osc.type = index % 2 === 0 ? 'sine' : 'triangle';
          
          // Apply custom harmonic adjustments based on feedback slider
          const multiplier = 1 + (index * 0.002 * harmonyParam);
          osc.frequency.setValueAtTime(freq * multiplier, audioCtx.currentTime);

          // Add clean, very low gains to avoid distortion
          oscGain.gain.setValueAtTime(0.06, audioCtx.currentTime);

          osc.connect(oscGain);
          oscGain.connect(filterNode);
          osc.start();
          return { osc, gain: oscGain, baseFreq: freq };
        });

        // Dynamic fade in
        mainGain.gain.transitionTo = function(target, duration) {
          mainGain.gain.linearRampToValueAtTime(target, audioCtx.currentTime + duration);
        };
        mainGain.gain.linearRampToValueAtTime(0.35, audioCtx.currentTime + 1.5);

        isSynthPlaying = true;
        document.getElementById('synth-power-btn').classList.add('bg-current', 'text-white', 'dark:text-black');
        document.getElementById('power-icon').setAttribute('data-lucide', 'square');
        document.getElementById('oscillator-state').textContent = "Status: Operational (C#m9)";
        document.getElementById('floating-audio-bar').classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        showToast("Synthesizer engaged. Soundscape generated.");
        
        // Start continuous drift routine
        applyDriftRoutine();
      } else {
        // Mute smoothly
        mainGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.8);
        
        // Fully stop and disconnect after fade out is finished
        setTimeout(() => {
          if (!isSynthPlaying) {
            oscillators.forEach(item => {
              try { item.osc.stop(); } catch(e) {}
              item.osc.disconnect();
            });
            oscillators = [];
          }
        }, 850);

        isSynthPlaying = false;
        document.getElementById('synth-power-btn').classList.remove('bg-current', 'text-white', 'dark:text-black');
        document.getElementById('power-icon').setAttribute('data-lucide', 'play');
        document.getElementById('oscillator-state').textContent = "Status: Disengaged";
        document.getElementById('floating-audio-bar').classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        showToast("Synthesizer disengaged.");
      }
      lucide.createIcons();
    }

    // Gentle random frequency drifts for analog authenticity
    function applyDriftRoutine() {
      if (!isSynthPlaying || oscillators.length === 0) return;

      const driftScale = parseFloat(document.getElementById('param-drift').value);
      
      oscillators.forEach((item) => {
        // Apply tiny random variation
        const randomDrift = (Math.random() - 0.5) * driftScale;
        const currentFreq = item.osc.frequency.value;
        const targetFreq = item.baseFreq + randomDrift;
        item.osc.frequency.linearRampToValueAtTime(targetFreq, audioCtx.currentTime + 1.0);
      });

      // Loop every 2 seconds
      setTimeout(applyDriftRoutine, 2000);
    }

    // Track state of sliders and apply directly to sound engine
    function updateSynthParams() {
      if (filterNode) {
        const resFreq = parseFloat(document.getElementById('param-resonance').value);
        filterNode.frequency.linearRampToValueAtTime(resFreq, audioCtx.currentTime + 0.2);
        
        const formatRes = resFreq > 1000 ? `${(resFreq/1000).toFixed(1)} kHz` : `${resFreq} Hz`;
        document.getElementById('color-val').textContent = formatRes;
      }

      const driftVal = parseFloat(document.getElementById('param-drift').value);
      document.getElementById('drift-val').textContent = `${driftVal.toFixed(2)} Hz`;

      const harmonyVal = parseInt(document.getElementById('param-harmony').value);
      const harmonies = ["Muted", "Subtle", "Warm Med", "Rich High", "Absolute"];
      document.getElementById('harmonic-val').textContent = harmonies[harmonyVal - 1];

      if (isSynthPlaying) {
        // Gently regenerate with new values
        oscillators.forEach((item, index) => {
          const multiplier = 1 + (index * 0.002 * harmonyVal);
          item.osc.frequency.linearRampToValueAtTime(item.baseFreq * multiplier, audioCtx.currentTime + 0.5);
        });
      }
    }

    function setSynthPreset(presetName) {
      if (presetName === 'warm') {
        document.getElementById('param-drift').value = 0.15;
        document.getElementById('param-resonance').value = 350;
        document.getElementById('param-harmony').value = 4;
      } else if (presetName === 'ethereal') {
        document.getElementById('param-drift').value = 0.50;
        document.getElementById('param-resonance').value = 900;
        document.getElementById('param-harmony').value = 3;
      } else if (presetName === 'abyss') {
        document.getElementById('param-drift').value = 0.05;
        document.getElementById('param-resonance').value = 220;
        document.getElementById('param-harmony').value = 1;
      }
      updateSynthParams();
      showToast(`Selected ${presetName.toUpperCase()} preset`);
    }

    // CANVAS-BASED INTERACTIVE VISUALIZER
    const canvas = document.getElementById('visualizer-canvas');
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = 0, mouseY = 0;
    let vizStrokeColor = '#6b638c';
    let vizBgColor = '#ced0d9';

    function updateVisualizerTheme(strokeHex, bgHex) {
      vizStrokeColor = strokeHex;
      vizBgColor = bgHex;
    }

    function resizeCanvas() {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth * window.devicePixelRatio;
      canvas.height = container.clientHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Track mouse position on canvas to affect wave distortion (Aesthetic interactivity)
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      // Map mouseX relative displacement dynamically to audio filter
      if (isSynthPlaying && filterNode) {
        const ratio = mouseX / rect.width;
        const targetRes = 200 + (ratio * 1200); // 200hz to 1400hz
        document.getElementById('param-resonance').value = Math.round(targetRes);
        updateSynthParams();
      }
    });

    let time = 0;
    function drawVisualizer() {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      
      ctx.clearRect(0, 0, w, h);

      // Warm background glow
      ctx.fillStyle = vizBgColor;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = vizStrokeColor;
      ctx.lineWidth = 1;
      ctx.beginPath();

      const lines = 4;
      const points = 120;

      // Draw multi-layered clean typographic sinusoidal waves
      for (let j = 0; j < lines; j++) {
        ctx.beginPath();
        const amplitude = isSynthPlaying ? (15 + j * 12) : (5 + j * 3);
        const speed = isSynthPlaying ? (0.015 + j * 0.005) : 0.003;
        
        for (let i = 0; i <= points; i++) {
          const x = (w / points) * i;
          // Apply subtle physics calculations
          const mouseDisplacement = Math.exp(-Math.pow(x - mouseX, 2) / 10000) * 40;
          const y = (h / 2) + Math.sin(i * 0.05 + time * speed + j) * amplitude + (mouseDisplacement * Math.sin(time * 0.04));
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.strokeStyle = `${vizStrokeColor}${j === 0 ? 'ff' : j === 1 ? '99' : j === 2 ? '55' : '22'}`;
        ctx.stroke();
      }

      time += 1;
      animationFrameId = requestAnimationFrame(drawVisualizer);
    }
    drawVisualizer();


    // GEMINI PROSE GENERATION WITH EXTREME ROBUSTNESS & FALLBACK ENGINE
    const fallbackPoems = [
      {
        fragment: "Fragment II — Silent Interval",
        body: "Sore itu datang tanpa suara. Membiarkan jingga membakar langit sebelum gelap menelan segalanya. Hanya sunyi yang tersisa di sudut meja.",
        english: "Nostalgia behaves like twilight. It colors everything beautifully before fading into complete stillness. True design speaks in that quiet transition."
      },
      {
        fragment: "Fragment III — Alabaster Whispers",
        body: "Dalam setiap sapuan angin malam, kurasakan sentuhan dingin yang akrab. Seperti memori yang terukir di atas marmer putih, tak lekang waktu.",
        english: "A memory etched into stone does not erode. The light shifts across the textured surface, reminding us of the paths we chose to follow."
      },
      {
        fragment: "Fragment IV — Nocturnal Resonance",
        body: "Malam bukan akhir dari segalanya. Ia hanyalah jeda, ruang kosong untuk meresapi setiap detak waktu yang berlalu begitu cepat.",
        english: "In complete silence, even the smallest resonance becomes monumental. Let the quiet frequencies realign your focus."
      }
    ];

    async function generateCustomProse() {
      const moodText = document.getElementById('mood-input').value.trim();
      const loader = document.getElementById('ai-generating-loader');
      const poetryContent = document.getElementById('poetry-content');

      if (!moodText) {
        showToast("Please enter a mood or prompt first.");
        return;
      }

      // Enter loading state
      loader.classList.remove('opacity-0', 'pointer-events-none');
      loader.classList.add('opacity-100');

      // Prepare Gemini API configuration & prompt instructions matching the design aesthetic
      const systemPrompt = `
        You are an elite bilingual poet and editorial copywriter.
        Your task is to generate beautiful micro-poetry and prose in response to a user's mood.
        Structure your output precisely as a valid JSON object matching these fields:
        {
          "fragmentName": "Fragment [Roman Numeral] — [Atmospheric Title]",
          "proseIndo": "A beautiful, deeply reflective poetic sentence or fragment in Indonesian language, mirroring the style: 'Rindu memang tak kenal waktu. Seperti pagi ini aku sudah merindukanmu...'",
          "proseEnglish": "A corresponding exquisite, highly minimalist translation or reflection in English, matching a premium, editorial design voice (clean, deep, and focused on space, stillness, or time)."
        }
        Do not output any markdown around the JSON object.
      `;

      const userQuery = `Write a poetic reflection inspired by this user mood: "${moodText}"`;

      let success = false;
      let resultText = "";

      if (apiKey) {
        // Attempt Gemini API call with proper exponential backoff as per prompt requirements
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
        const payload = {
          contents: [{ parts: [{ text: userQuery }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] },
          generationConfig: { responseMimeType: "application/json" }
        };

        let retries = 5;
        let delay = 1000;

        for (let i = 0; i < retries; i++) {
          try {
            const response = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });

            if (response.ok) {
              const data = await response.json();
              resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;
              if (resultText) {
                success = true;
                break;
              }
            }
          } catch (e) {
            // Log retries internally, exponential backoff
          }
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2;
        }
      }

      // Hide Loader
      loader.classList.remove('opacity-100');
      loader.classList.add('opacity-0', 'pointer-events-none');

      if (success && resultText) {
        try {
          const parsedPoem = JSON.parse(resultText);
          updatePoetryDisplay(parsedPoem.fragmentName, parsedPoem.proseIndo, parsedPoem.proseEnglish);
          showToast("AI Prose Successfully Generated");
        } catch (e) {
          // If JSON parse fails, trigger beautiful local generation fallback gracefully
          useFallbackPoem();
        }
      } else {
        // Fallback gracefully to preset library so the user's interface remains outstandingly robust
        useFallbackPoem();
      }
    }

    function useFallbackPoem() {
      const randomIndex = Math.floor(Math.random() * fallbackPoems.length);
      const chosen = fallbackPoems[randomIndex];
      updatePoetryDisplay(chosen.fragment, chosen.body, chosen.english);
      showToast("Composed beautiful prose from Local Archives.");
    }

    function updatePoetryDisplay(fragment, indonesian, english) {
      const poetryContent = document.getElementById('poetry-content');
      
      // Beautiful smooth transition of inner HTML
      poetryContent.style.opacity = '0';
      setTimeout(() => {
        poetryContent.innerHTML = `
          <p class="font-mono text-xs uppercase tracking-widest opacity-50 mb-2">${fragment}</p>
          <p class="font-serif italic text-lg leading-relaxed mb-4 text-purple-950/85 dark:text-purple-200">
            "${indonesian}"
          </p>
          <p class="opacity-75 leading-relaxed font-sans text-xs">
            ${english}
          </p>
        `;
        poetryContent.style.opacity = '1';
      }, 300);
    }

    // Reservation Simulation (No alerts)
    function handleReservation() {
      const emailInput = document.getElementById('reservation-email');
      const email = emailInput.value.trim();

      if (!email || !email.includes('@')) {
        showToast("Please enter a valid email address coordinates.");
        return;
      }

      // Visual success simulation
      emailInput.value = "";
      showToast("Access coordinates accepted. Check your inbox.");
    }

  </script>
</body>
</html>
I2
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AirPods Max — A Symphony of Purity & Design</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        lavender: {
                            50: '#F5F3FA',
                            100: '#EAE6F4',
                            200: '#D5CDEB',
                            300: '#B6A6DD',
                            400: '#947ECC',
                            500: '#7558BE',
                            600: '#6042A2',
                            900: '#262135',
                        },
                        velvet: {
                            DEFAULT: '#191524',
                            light: '#231D33',
                            dark: '#0E0B14'
                        }
                    },
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
                    },
                    boxShadow: {
                        premium: '0 25px 50px -12px rgba(117, 88, 190, 0.12)',
                        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                    }
                }
            }
        }
    </script>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        /* Custom Keyframe Animations */
        @keyframes pulse-gentle {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.03); opacity: 1; }
        }
        @keyframes float-gentle {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes waveform {
            0%, 100% { height: 8px; }
            50% { height: 42px; }
        }
        .animate-pulse-gentle {
            animation: pulse-gentle 4s ease-in-out infinite;
        }
        .animate-float {
            animation: float-gentle 6s ease-in-out infinite;
        }
        .wave-bar {
            animation: waveform 1.2s ease-in-out infinite;
        }
        .blur-gradient {
            background: radial-gradient(circle, rgba(148,126,204,0.18) 0%, rgba(245,243,250,0) 70%);
        }
        .dark .blur-gradient {
            background: radial-gradient(circle, rgba(117,88,190,0.15) 0%, rgba(25,21,36,0) 70%);
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #F5F3FA;
        }
        ::-webkit-scrollbar-thumb {
            background: #D5CDEB;
            border-radius: 99px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #B6A6DD;
        }
        /* Glassmorphism utility */
        .glass-card {
            background: rgba(255, 255, 255, 0.65);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .dark-glass-card {
            background: rgba(35, 29, 51, 0.65);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.06);
        }
    </style>
</head>
<body class="bg-lavender-50 text-lavender-900 overflow-x-hidden font-sans transition-colors duration-500 selection:bg-lavender-200">

    <!-- Top Announcement Bar -->
    <div class="w-full bg-lavender-900 text-lavender-100 py-2.5 px-4 text-center text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2">
        <span>Experience sound in another dimension. Enjoy complimentary fast delivery.</span>
        <span class="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-lavender-300"></span>
        <button onclick="scrollToConfigurator()" class="hidden md:inline-block underline hover:text-white transition-all">Pre-order Lavender Special Edition</button>
    </div>

    <!-- Navigation Bar -->
    <nav class="sticky top-0 z-50 w-full glass-card border-b border-lavender-100 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <!-- Brand Identity -->
            <a href="#" class="flex items-center gap-3 group">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-lavender-400 to-lavender-600 flex items-center justify-center text-white font-black text-xl shadow-md transition-transform group-hover:scale-105">
                    M
                </div>
                <div>
                    <span class="text-lg font-extrabold tracking-tight text-lavender-900">MAXIMUS</span>
                    <span class="block text-[9px] uppercase tracking-widest text-lavender-400 -mt-1 font-bold">Acoustic Precision</span>
                </div>
            </a>

            <!-- Navigation Links -->
            <div class="hidden md:flex items-center gap-8 font-medium text-sm text-lavender-600">
                <a href="#features" class="hover:text-lavender-900 transition-colors py-2 relative group">
                    Design
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-lavender-500 transition-all group-hover:w-full"></span>
                </a>
                <a href="#audio-sim" class="hover:text-lavender-900 transition-colors py-2 relative group">
                    Sound Space
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-lavender-500 transition-all group-hover:w-full"></span>
                </a>
                <a href="#schematic" class="hover:text-lavender-900 transition-colors py-2 relative group">
                    Technology
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-lavender-500 transition-all group-hover:w-full"></span>
                </a>
                <a href="#specifications" class="hover:text-lavender-900 transition-colors py-2 relative group">
                    Specifications
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-lavender-500 transition-all group-hover:w-full"></span>
                </a>
            </div>

            <!-- CTAs & Action Buttons -->
            <div class="flex items-center gap-4">
                <button onclick="scrollToConfigurator()" class="px-6 py-2.5 bg-lavender-900 text-white rounded-full text-xs font-bold tracking-wide uppercase shadow-lg shadow-lavender-900/10 hover:bg-lavender-700 transition-all hover:-translate-y-0.5 active:translate-y-0">
                    Buy Now
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center justify-center py-16 px-6 overflow-hidden">
        <!-- Floating Soft Lavender Background Ambient Globs -->
        <div class="absolute top-1/4 left-1/10 w-[40vw] h-[40vw] max-w-[500px] blur-gradient rounded-full pointer-events-none animate-pulse-gentle"></div>
        <div class="absolute bottom-1/4 right-1/10 w-[45vw] h-[45vw] max-w-[550px] blur-gradient rounded-full pointer-events-none animate-pulse-gentle" style="animation-delay: 2s;"></div>

        <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            <!-- Hero Typography Content -->
            <div class="lg:col-span-5 text-center lg:text-left space-y-6">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lavender-100 border border-lavender-200 text-lavender-600 text-xs font-bold tracking-wider uppercase">
                    <span class="w-2 h-2 rounded-full bg-lavender-500 animate-ping"></span>
                    Now in Lavender Mist
                </div>
                
                <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-lavender-900 leading-none">
                    A Symphony <br class="hidden lg:inline">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-lavender-500 to-lavender-700">of Pure Sound</span>
                </h1>
                
                <p class="text-base sm:text-lg text-lavender-600 font-medium max-w-xl mx-auto lg:mx-0">
                    Over-ear headphones completely reimagined. Designed for an uncompromising fit with acoustic harmony, wrapping you in an absolute bubble of sound.
                </p>

                <!-- Interactive Hero Bullet Points -->
                <div class="pt-4 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                    <div class="p-4 bg-white/70 backdrop-blur border border-lavender-100 rounded-2xl text-center shadow-sm">
                        <span class="block text-2xl font-black text-lavender-900">20H</span>
                        <span class="text-[10px] text-lavender-500 font-bold uppercase tracking-wider">Active Playback</span>
                    </div>
                    <div class="p-4 bg-white/70 backdrop-blur border border-lavender-100 rounded-2xl text-center shadow-sm">
                        <span class="block text-2xl font-black text-lavender-900">40dB</span>
                        <span class="text-[10px] text-lavender-500 font-bold uppercase tracking-wider">Noise Reduction</span>
                    </div>
                    <div class="p-4 bg-white/70 backdrop-blur border border-lavender-100 rounded-2xl text-center shadow-sm">
                        <span class="block text-2xl font-black text-lavender-900">5Mins</span>
                        <span class="text-[10px] text-lavender-500 font-bold uppercase tracking-wider">Charge = 1.5H</span>
                    </div>
                </div>

                <!-- Call to Action -->
                <div class="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <button onclick="scrollToConfigurator()" class="w-full sm:w-auto px-8 py-4 bg-lavender-900 hover:bg-lavender-700 text-white rounded-2xl font-bold tracking-wide shadow-xl shadow-lavender-900/15 transition-all hover:-translate-y-0.5 active:translate-y-0">
                        Explore Color Editions
                    </button>
                    <a href="#audio-sim" class="w-full sm:w-auto px-8 py-4 bg-white hover:bg-lavender-100 border border-lavender-200 text-lavender-900 rounded-2xl font-bold tracking-wide transition-all text-center">
                        Demo Sound Space
                    </a>
                </div>
            </div>

            <!-- Hero Interactive 3D Mockup Container -->
            <div class="lg:col-span-7 flex flex-col items-center justify-center relative">
                <!-- Outer glow rings -->
                <div class="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full border border-dashed border-lavender-200 animate-spin" style="animation-duration: 40s;"></div>
                <div class="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-lavender-100/50 animate-reverse"></div>
                
                <!-- Main Product Illustration Container -->
                <div class="relative w-full max-w-[450px] aspect-square flex items-center justify-center animate-float">
                    
                    <!-- SVG Lavender Headphone -->
                    <svg id="hero-headphone" class="w-10/12 h-10/12 transition-all duration-700 filter drop-shadow-2xl" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- Dynamic Color Gradients -->
                        <defs>
                            <radialGradient id="earcup-shading" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.3"/>
                                <stop offset="100%" stop-color="#000000" stop-opacity="0.15"/>
                            </radialGradient>
                            <linearGradient id="band-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#EAE6F4" class="band-color-stop-1"/>
                                <stop offset="50%" stop-color="#D5CDEB" class="band-color-stop-2"/>
                                <stop offset="100%" stop-color="#EAE6F4" class="band-color-stop-3"/>
                            </linearGradient>
                            <linearGradient id="cup-grad-left" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#DFD8F3" class="cup-color-stop-1"/>
                                <stop offset="100%" stop-color="#9C8CD0" class="cup-color-stop-2"/>
                            </linearGradient>
                            <linearGradient id="cup-grad-right" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#ECE7F7" class="cup-color-stop-1"/>
                                <stop offset="100%" stop-color="#A596D8" class="cup-color-stop-2"/>
                            </linearGradient>
                            <linearGradient id="cushion-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#BEB5DF" class="cushion-color-stop-1"/>
                                <stop offset="100%" stop-color="#7C6FA4" class="cushion-color-stop-2"/>
                            </linearGradient>
                        </defs>

                        <!-- Canopy (Mesh Band) -->
                        <path d="M120 180 C 120 60, 380 60, 380 180" stroke="url(#band-grad)" stroke-width="28" stroke-linecap="round" fill="none" />
                        <path d="M140 170 C 140 80, 360 80, 360 170" stroke="#FFF" stroke-width="4" stroke-opacity="0.4" stroke-linecap="round" fill="none" />
                        
                        <!-- Premium Inner Steel Rods -->
                        <path d="M126 175 L126 230" stroke="#E2E8F0" stroke-width="10" stroke-linecap="round"/>
                        <path d="M374 175 L374 230" stroke="#E2E8F0" stroke-width="10" stroke-linecap="round"/>
                        
                        <!-- Left Telescoping Arm Adjuster -->
                        <rect x="122" y="210" width="8" height="40" rx="4" fill="#CBD5E1" />
                        <!-- Right Telescoping Arm Adjuster -->
                        <rect x="370" y="210" width="8" height="40" rx="4" fill="#CBD5E1" />

                        <!-- Left Ear Cup (Behind / Angled) -->
                        <g transform="translate(-10, 0)">
                            <!-- Cushion -->
                            <rect x="130" y="240" width="45" height="150" rx="22" fill="url(#cushion-grad)" />
                            <!-- Outer Aluminum Cup -->
                            <rect x="95" y="235" width="40" height="160" rx="20" fill="url(#cup-grad-left)" />
                            <!-- Aluminum Highlight -->
                            <rect x="95" y="235" width="40" height="160" rx="20" fill="url(#earcup-shading)" />
                            <rect x="100" y="240" width="8" height="150" rx="4" fill="#FFF" fill-opacity="0.25" />
                        </g>

                        <!-- Right Ear Cup (Foreground / Angled) -->
                        <g transform="translate(10, 0)">
                            <!-- Cushion -->
                            <rect x="315" y="240" width="45" height="150" rx="22" fill="url(#cushion-grad)" />
                            <!-- Outer Aluminum Cup -->
                            <rect x="355" y="235" width="40" height="160" rx="20" fill="url(#cup-grad-right)" />
                            <!-- Aluminum Highlight -->
                            <rect x="355" y="235" width="40" height="160" rx="20" fill="url(#earcup-shading)" />
                            <rect x="382" y="240" width="8" height="150" rx="4" fill="#FFF" fill-opacity="0.3" />
                        </g>

                        <!-- Digital Crown (Right Ear Cup top) -->
                        <rect x="382" y="222" width="14" height="14" rx="3" fill="#D1D5DB" />
                        <!-- Noise Control Button -->
                        <rect x="360" y="226" width="16" height="6" rx="2" fill="#E2E8F0" />
                    </svg>

                    <!-- Interactive Floating Tags -->
                    <div class="absolute -top-4 -left-4 glass-card px-4 py-2.5 rounded-2xl shadow-premium border border-white text-xs font-semibold flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                        <span>Lossless Audio Audio Chip</span>
                    </div>

                    <div class="absolute -bottom-2 -right-4 glass-card px-4 py-2.5 rounded-2xl shadow-premium border border-white text-xs font-semibold flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                        <span>Adaptive EQ Enabled</span>
                    </div>
                </div>

                <!-- Color fast switcher for hero -->
                <div class="mt-6 flex flex-col items-center gap-2 bg-white/60 backdrop-blur px-6 py-3.5 rounded-full border border-lavender-200/50 shadow-sm">
                    <span class="text-[11px] font-bold tracking-widest text-lavender-500 uppercase">Touch to swap visual aesthetic</span>
                    <div class="flex items-center gap-3">
                        <button onclick="changeColor('lavender')" class="w-6 h-6 rounded-full bg-[#947ECC] ring-2 ring-offset-2 ring-[#947ECC] transition-all hover:scale-110" title="Lavender Mist"></button>
                        <button onclick="changeColor('obsidian')" class="w-6 h-6 rounded-full bg-[#1F1F1F] ring-2 ring-offset-2 ring-transparent transition-all hover:scale-110" title="Obsidian Black"></button>
                        <button onclick="changeColor('silver')" class="w-6 h-6 rounded-full bg-[#D1D5DB] ring-2 ring-offset-2 ring-transparent transition-all hover:scale-110" title="Silver Sheen"></button>
                        <button onclick="changeColor('rose')" class="w-6 h-6 rounded-full bg-[#E5C7C2] ring-2 ring-offset-2 ring-transparent transition-all hover:scale-110" title="Rose Cream"></button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Key Advantages Infographic Grid (Direct design inspiration from layout format of reference) -->
    <section id="features" class="py-24 px-6 bg-lavender-100/50 relative">
        <div class="max-w-7xl mx-auto space-y-16">
            
            <div class="text-center max-w-3xl mx-auto space-y-4">
                <span class="text-xs font-bold tracking-widest uppercase text-lavender-500">Artistry in Engineering</span>
                <h2 class="text-3xl sm:text-5xl font-black text-lavender-900 tracking-tight">Pure Visual Comfort. Inside and Out.</h2>
                <p class="text-lavender-600 font-medium">We design with meticulous purpose. Each element is crafted for visual balance, sonic integrity, and luxurious wear.</p>
            </div>

            <!-- Balanced Infographic Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- Card 1: Headband Concept -->
                <div class="group bg-white rounded-3xl border border-lavender-200/60 overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between">
                    <div class="p-8 space-y-3">
                        <span class="text-[11px] font-extrabold uppercase tracking-widest text-lavender-400">Ergonomic Structure</span>
                        <h3 class="text-2xl font-bold text-lavender-900">Breathable Knit Canopy</h3>
                        <p class="text-lavender-600 text-sm leading-relaxed">Made from a custom acoustically optimized mesh, distributing weight seamlessly across the head to reduce pressure points.</p>
                    </div>
                    <div class="bg-lavender-50/80 p-6 flex justify-center items-center h-52 relative overflow-hidden">
                        <!-- Headband schematic representation -->
                        <div class="absolute w-[80%] h-[30px] border-t-8 border-dashed border-lavender-300 rounded-t-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
                        <div class="w-2/3 h-6 bg-white border border-lavender-200 rounded-full flex items-center justify-between px-4 shadow-sm z-10">
                            <span class="w-2.5 h-2.5 rounded-full bg-lavender-400"></span>
                            <span class="text-[9px] uppercase tracking-wider text-lavender-500 font-bold">Ultralight Steel Frame</span>
                            <span class="w-2.5 h-2.5 rounded-full bg-lavender-400"></span>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Memory Foam Comfort -->
                <div class="group bg-white rounded-3xl border border-lavender-200/60 overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between">
                    <div class="p-8 space-y-3">
                        <span class="text-[11px] font-extrabold uppercase tracking-widest text-lavender-400">Acoustic Shield</span>
                        <h3 class="text-2xl font-bold text-lavender-900">Adaptive Ear Cushions</h3>
                        <p class="text-lavender-600 text-sm leading-relaxed">Form-fitted acoustic memory foam wrapped in custom mesh textile delivers a robust, comfortable seal that remembers your form.</p>
                    </div>
                    <div class="bg-lavender-100 p-6 flex justify-center items-center h-52 relative overflow-hidden">
                        <div class="w-28 h-36 border-4 border-white bg-lavender-200 rounded-3xl relative flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                            <div class="w-20 h-28 border-2 border-dashed border-white bg-lavender-300 rounded-2xl flex items-center justify-center text-xs font-bold text-white uppercase tracking-wider">
                                Soft Seal
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Intuitive Controls -->
                <div class="group bg-white rounded-3xl border border-lavender-200/60 overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-1">
                    <div class="p-8 space-y-3">
                        <span class="text-[11px] font-extrabold uppercase tracking-widest text-lavender-400">Human Interface</span>
                        <h3 class="text-2xl font-bold text-lavender-900">Tactile Precision</h3>
                        <p class="text-lavender-600 text-sm leading-relaxed">A custom-machined dynamic dial gives precise volume adjustment, track skipping, and phone answer controls, keeping interactions simple.</p>
                    </div>
                    <div class="bg-lavender-900 p-6 flex justify-center items-center h-52 relative overflow-hidden">
                        <!-- Custom visual rendering of the crown button -->
                        <div class="relative w-28 h-28 rounded-full border border-lavender-700 flex items-center justify-center bg-gradient-to-tr from-lavender-900 to-lavender-800">
                            <div class="w-20 h-20 rounded-full bg-gradient-to-b from-lavender-300 to-lavender-500 shadow-xl flex flex-col items-center justify-center text-white p-2">
                                <span class="text-[9px] uppercase font-black tracking-widest">Rotate</span>
                                <span class="text-xs">⟳</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Interactive Sound Simulator -->
    <section id="audio-sim" class="py-24 px-6 bg-velvet text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lavender-900/40 via-velvet to-velvet pointer-events-none"></div>
        
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <!-- Information Text Column -->
            <div class="lg:col-span-5 space-y-6">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-lavender-200 text-xs font-bold tracking-wider uppercase">
                    Acoustic Simulator
                </div>
                <h2 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                    Active Noise Cancellation. <br>
                    Pure Quietude.
                </h2>
                <p class="text-lavender-200 font-normal leading-relaxed text-sm sm:text-base">
                    Equipped with eight microphones that constantly monitor your surroundings, our industry-leading active noise cancellation system nullifies ambient hums in real time, keeping your focus where it belongs.
                </p>

                <!-- Simulated Sound Controls -->
                <div class="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4">
                    <span class="block text-xs font-semibold tracking-wider text-lavender-300 uppercase">Interactive Filter Demo</span>
                    
                    <div class="grid grid-cols-3 gap-3">
                        <button onclick="toggleSoundMode('anc')" id="btn-anc" class="py-3 px-2 text-center rounded-2xl bg-lavender-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all border border-lavender-400">
                            ANC On
                        </button>
                        <button onclick="toggleSoundMode('transparency')" id="btn-trans" class="py-3 px-2 text-center rounded-2xl bg-white/5 text-lavender-200 hover:bg-white/10 font-bold text-xs uppercase tracking-wider transition-all border border-transparent">
                            Transparency
                        </button>
                        <button onclick="toggleSoundMode('off')" id="btn-off" class="py-3 px-2 text-center rounded-2xl bg-white/5 text-lavender-200 hover:bg-white/10 font-bold text-xs uppercase tracking-wider transition-all border border-transparent">
                            Off
                        </button>
                    </div>

                    <p id="sound-mode-desc" class="text-xs text-lavender-200 italic">
                        "Active noise cancellation blocks the background frequencies entirely, isolating your focus."
                    </p>
                </div>
            </div>

            <!-- Waveform & Audio Stage Visualizer Column -->
            <div class="lg:col-span-7 flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-3xl relative h-[450px]">
                
                <!-- Center Glowing Hologram of Headphone -->
                <div id="visualizer-sphere" class="absolute w-[280px] h-[280px] rounded-full bg-lavender-500/20 filter blur-3xl transition-all duration-700 scale-100"></div>

                <!-- Pure Acoustic Waves rendering -->
                <div class="w-full flex items-center justify-center gap-1.5 h-36 px-4 z-10 transition-all duration-500" id="wave-container">
                    <!-- Dynamic waves generated by JS -->
                </div>

                <!-- Simulated Sound Source Overlay label -->
                <div class="mt-8 text-center z-10 space-y-1">
                    <span class="block text-[11px] uppercase tracking-widest text-lavender-300 font-bold">Ambient Noise Isolation Status</span>
                    <div class="inline-flex items-center gap-2">
                        <span id="ambient-indicator-pulse" class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                        <span id="ambient-mode-label" class="text-sm font-bold tracking-wider text-white">98% Isolated</span>
                    </div>
                </div>

                <!-- Mini Speaker Simulation Controls -->
                <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2 bg-white/5 rounded-2xl text-xs text-lavender-300">
                    <span>Simulated frequency range</span>
                    <span class="font-mono">20Hz - 20,000Hz</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Interactive Spatial Audio Sandbox -->
    <section class="py-24 px-6 bg-lavender-50 relative">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Spatial Audio Canvas Visual -->
            <div class="lg:col-span-7 flex flex-col items-center justify-center p-6 bg-white border border-lavender-100 rounded-3xl relative h-[480px] shadow-sm">
                <div class="absolute top-4 left-4 right-4 flex justify-between items-center text-xs text-lavender-500 font-bold uppercase tracking-wider">
                    <span>Spatial Stage Setup</span>
                    <span>Drag Dot to Orbit Sound</span>
                </div>

                <!-- Visual Orbit Canvas Container -->
                <div class="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-dashed border-lavender-200 flex items-center justify-center" id="spatial-orbit-ring">
                    <!-- Inner rings -->
                    <div class="absolute w-52 h-52 rounded-full border border-lavender-100 flex items-center justify-center">
                        <div class="absolute w-32 h-32 rounded-full border border-lavender-50 flex items-center justify-center"></div>
                    </div>

                    <!-- Listener representation in the center -->
                    <div class="w-16 h-16 rounded-full bg-lavender-100 border border-lavender-200 flex items-center justify-center z-20 shadow-md">
                        <svg class="w-8 h-8 text-lavender-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </div>

                    <!-- Draggable Audio Node (The sound source) -->
                    <div id="audio-node" class="absolute w-10 h-10 rounded-full bg-lavender-500 text-white flex items-center justify-center cursor-move shadow-lg shadow-lavender-500/50 hover:scale-110 active:scale-95 transition-all z-30" style="left: 80%; top: 20%;">
                        <svg class="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                        </svg>
                    </div>

                    <!-- Direction arrows indicating spatial audio vectors -->
                    <div id="vector-line-left" class="absolute w-0.5 bg-gradient-to-t from-lavender-400 to-transparent origin-bottom" style="height: 0px; left: 50%;"></div>
                </div>

                <!-- Live coordinates and directional feedback labels -->
                <div class="mt-6 flex gap-6 text-center text-xs font-bold text-lavender-500">
                    <div>
                        <span class="block text-lavender-300 uppercase text-[9px] tracking-wider">Spatial Orbit</span>
                        <span id="orbit-angle" class="text-lavender-900">45° Right</span>
                    </div>
                    <div>
                        <span class="block text-lavender-300 uppercase text-[9px] tracking-wider">Sound Density</span>
                        <span id="orbit-distance" class="text-lavender-900">Adaptive Atmos</span>
                    </div>
                </div>
            </div>

            <!-- Content Side Column -->
            <div class="lg:col-span-5 space-y-6">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lavender-100 border border-lavender-200 text-lavender-600 text-xs font-bold tracking-wider uppercase">
                    Surround Geometry
                </div>
                <h2 class="text-3xl sm:text-5xl font-black text-lavender-900 tracking-tight leading-tight">
                    Spatial Audio. <br>
                    Fully Personal.
                </h2>
                <p class="text-lavender-600 font-medium text-base leading-relaxed">
                    Personalized spatial audio tracks your subtle head movements using sophisticated built-in gyroscopes and accelerometers. The sound seems to stay anchored to the device you're looking at, giving a true room-filling theater experience.
                </p>

                <div class="space-y-4">
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 rounded-full bg-lavender-100 flex items-center justify-center text-lavender-600 font-black text-xs shrink-0 mt-0.5">1</div>
                        <div>
                            <h4 class="font-bold text-lavender-900 text-sm">Dynamic Head Tracking</h4>
                            <p class="text-xs text-lavender-500 mt-0.5">Senses rotation at 100 times per second to realign audio direction.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 rounded-full bg-lavender-100 flex items-center justify-center text-lavender-600 font-black text-xs shrink-0 mt-0.5">2</div>
                        <div>
                            <h4 class="font-bold text-lavender-900 text-sm">Adaptive Bass Modeling</h4>
                            <p class="text-xs text-lavender-500 mt-0.5">Adjusts low frequencies on the fly based on the physical fit of your earcups.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Exploded Tech Schematic Interactive Spotspots -->
    <section id="schematic" class="py-24 px-6 bg-lavender-900 text-white relative">
        <div class="max-w-7xl mx-auto space-y-16">
            
            <div class="text-center max-w-2xl mx-auto space-y-4">
                <span class="text-xs font-bold tracking-widest uppercase text-lavender-300">Engineering Showcase</span>
                <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">Anatomy of Acoustic Masterwork</h2>
                <p class="text-lavender-200 font-normal">Click the interactive hotspots on the headset to reveal the exquisite architecture inside the shell.</p>
            </div>

            <!-- Central Schematic Graphic with interactive tabs/popups -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Schematic SVG & hotspot trigger zone (Columns 7) -->
                <div class="lg:col-span-7 flex justify-center items-center relative py-8">
                    <!-- Tech schematic background rings -->
                    <div class="absolute w-[80%] aspect-square border border-white/5 rounded-full"></div>
                    <div class="absolute w-[60%] aspect-square border border-white/10 rounded-full"></div>

                    <!-- Main Schematic Display SVG -->
                    <svg class="w-10/12 h-auto filter drop-shadow-3xl" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- Headband Outline -->
                        <path d="M120 180 C 120 60, 380 60, 380 180" stroke="#FFF" stroke-width="12" stroke-opacity="0.2" stroke-linecap="round" fill="none" />
                        <path d="M120 180 C 120 60, 380 60, 380 180" stroke="#FFF" stroke-width="2" stroke-opacity="0.8" stroke-dasharray="4 4" stroke-linecap="round" fill="none" />
                        
                        <!-- Internal Wiring Guide path -->
                        <path d="M150 120 L350 120" stroke="#818CF8" stroke-width="2" stroke-opacity="0.6"/>

                        <!-- Left Steel Arm line -->
                        <path d="M126 175 L126 240" stroke="#FFF" stroke-opacity="0.4" stroke-width="4" />
                        <!-- Right Steel Arm line -->
                        <path d="M374 175 L374 240" stroke="#FFF" stroke-opacity="0.4" stroke-width="4" />

                        <!-- Simplified Exploded Cushion & Ring -->
                        <rect x="290" y="240" width="35" height="150" rx="18" stroke="#FFF" stroke-opacity="0.3" stroke-width="2" fill="none" />
                        <rect x="330" y="240" width="10" height="150" rx="5" stroke="#818CF8" stroke-opacity="0.6" stroke-width="2" fill="none" />
                        <rect x="350" y="235" width="40" height="160" rx="20" stroke="#FFF" stroke-opacity="0.8" stroke-width="3" fill="none" />

                        <rect x="175" y="240" width="35" height="150" rx="18" stroke="#FFF" stroke-opacity="0.3" stroke-width="2" fill="none" />
                        <rect x="160" y="240" width="10" height="150" rx="5" stroke="#818CF8" stroke-opacity="0.6" stroke-width="2" fill="none" />
                        <rect x="110" y="235" width="40" height="160" rx="20" stroke="#FFF" stroke-opacity="0.8" stroke-width="3" fill="none" />
                    </svg>

                    <!-- Interactive hotspot nodes positioned absolutely over coordinates -->
                    <!-- Hotspot 1: Mesh Canopy -->
                    <button onclick="revealSchematicDetails(1)" class="absolute top-[18%] left-[50%] -translate-x-1/2 w-8 h-8 rounded-full bg-lavender-500 border-4 border-white/40 flex items-center justify-center text-white font-bold text-xs shadow-lg hover:scale-110 active:scale-95 transition-all animate-bounce">
                        1
                    </button>

                    <!-- Hotspot 2: Drivers & Sound Cup -->
                    <button onclick="revealSchematicDetails(2)" class="absolute top-[55%] left-[23%] w-8 h-8 rounded-full bg-lavender-500 border-4 border-white/40 flex items-center justify-center text-white font-bold text-xs shadow-lg hover:scale-110 active:scale-95 transition-all">
                        2
                    </button>

                    <!-- Hotspot 3: Control Mechanism -->
                    <button onclick="revealSchematicDetails(3)" class="absolute top-[48%] right-[22%] w-8 h-8 rounded-full bg-lavender-500 border-4 border-white/40 flex items-center justify-center text-white font-bold text-xs shadow-lg hover:scale-110 active:scale-95 transition-all">
                        3
                    </button>

                    <!-- Hotspot 4: Dual H1 Intelligent Chips -->
                    <button onclick="revealSchematicDetails(4)" class="absolute bottom-[20%] left-[50%] -translate-x-1/2 w-8 h-8 rounded-full bg-lavender-500 border-4 border-white/40 flex items-center justify-center text-white font-bold text-xs shadow-lg hover:scale-110 active:scale-95 transition-all">
                        4
                    </button>
                </div>

                <!-- Explanation Panel Container (Column 5) -->
                <div class="lg:col-span-5 flex flex-col justify-center">
                    <div id="schematic-detail-card" class="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4 transition-all duration-300">
                        <span id="detail-tag" class="text-xs font-bold tracking-widest text-lavender-400 uppercase">Engineered Part 1</span>
                        <h3 id="detail-title" class="text-2xl font-bold text-white">Continuous Mesh Tension</h3>
                        <p id="detail-desc" class="text-lavender-200 text-sm leading-relaxed">
                            Formed with resilient steel wires and woven thread, the canopy provides balanced posture support. By distributing the vertical pressure, you forget you're wearing an advanced audio computer.
                        </p>
                        
                        <!-- Mini progress representation of features -->
                        <div class="pt-4 grid grid-cols-2 gap-4 border-t border-white/10 text-xs">
                            <div>
                                <span class="block text-lavender-400">Flexibility Index</span>
                                <span id="detail-stat-1" class="font-bold text-white">99.4% Uniform</span>
                            </div>
                            <div>
                                <span class="block text-lavender-400">Component Weight</span>
                                <span id="detail-stat-2" class="font-bold text-white">Just 14 Grams</span>
                            </div>
                        </div>
                    </div>

                    <!-- Direct Quick Navigation dots for hotspots -->
                    <div class="mt-6 flex justify-center lg:justify-start gap-2.5">
                        <button onclick="revealSchematicDetails(1)" id="spec-dot-1" class="w-3 h-3 rounded-full bg-white transition-all"></button>
                        <button onclick="revealSchematicDetails(2)" id="spec-dot-2" class="w-3 h-3 rounded-full bg-white/30 transition-all"></button>
                        <button onclick="revealSchematicDetails(3)" id="spec-dot-3" class="w-3 h-3 rounded-full bg-white/30 transition-all"></button>
                        <button onclick="revealSchematicDetails(4)" id="spec-dot-4" class="w-3 h-3 rounded-full bg-white/30 transition-all"></button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Custom Configurator / Personalized Order Zone -->
    <section id="configurator" class="py-24 px-6 bg-white relative">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Side Interactive Dynamic Render Frame -->
            <div class="lg:col-span-6 flex flex-col justify-center items-center bg-lavender-50/50 rounded-3xl p-8 border border-lavender-100 relative min-h-[480px]">
                <div class="absolute top-4 left-4 inline-flex items-center gap-2 text-xs font-bold text-lavender-500 uppercase tracking-wider">
                    <span class="w-2 h-2 rounded-full bg-lavender-400"></span>
                    <span>Studio Color Preview</span>
                </div>

                <!-- Render Object -->
                <div class="w-10/12 max-w-[380px] aspect-square flex items-center justify-center animate-pulse-gentle">
                    <!-- SVG Configurator Object (Mirror of Hero but driven by color states) -->
                    <svg id="config-headphone" class="w-full h-full transition-all duration-700 filter drop-shadow-xl" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- Embedded defs duplicates with reactive variables -->
                        <defs>
                            <radialGradient id="config-earcup-shading" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.3"/>
                                <stop offset="100%" stop-color="#000000" stop-opacity="0.15"/>
                            </radialGradient>
                            <linearGradient id="config-band-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#EAE6F4" class="config-band-color-stop-1"/>
                                <stop offset="50%" stop-color="#D5CDEB" class="config-band-color-stop-2"/>
                                <stop offset="100%" stop-color="#EAE6F4" class="config-band-color-stop-3"/>
                            </linearGradient>
                            <linearGradient id="config-cup-grad-left" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#DFD8F3" class="config-cup-color-stop-1"/>
                                <stop offset="100%" stop-color="#9C8CD0" class="config-cup-color-stop-2"/>
                            </linearGradient>
                            <linearGradient id="config-cup-grad-right" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#ECE7F7" class="config-cup-color-stop-1"/>
                                <stop offset="100%" stop-color="#A596D8" class="config-cup-color-stop-2"/>
                            </linearGradient>
                            <linearGradient id="config-cushion-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#BEB5DF" class="config-cushion-color-stop-1"/>
                                <stop offset="100%" stop-color="#7C6FA4" class="config-cushion-color-stop-2"/>
                            </linearGradient>
                        </defs>

                        <!-- Canopy -->
                        <path d="M120 180 C 120 60, 380 60, 380 180" stroke="url(#config-band-grad)" stroke-width="28" stroke-linecap="round" fill="none" />
                        <path d="M140 170 C 140 80, 360 80, 360 170" stroke="#FFF" stroke-width="4" stroke-opacity="0.4" stroke-linecap="round" fill="none" />
                        
                        <!-- Steel Rods -->
                        <path d="M126 175 L126 230" stroke="#E2E8F0" stroke-width="10" stroke-linecap="round"/>
                        <path d="M374 175 L374 230" stroke="#E2E8F0" stroke-width="10" stroke-linecap="round"/>
                        
                        <!-- Telescoping adjusters -->
                        <rect x="122" y="210" width="8" height="40" rx="4" fill="#CBD5E1" />
                        <rect x="370" y="210" width="8" height="40" rx="4" fill="#CBD5E1" />

                        <!-- Left Cup -->
                        <g transform="translate(-10, 0)">
                            <rect x="130" y="240" width="45" height="150" rx="22" fill="url(#config-cushion-grad)" />
                            <rect x="95" y="235" width="40" height="160" rx="20" fill="url(#config-cup-grad-left)" />
                            <rect x="95" y="235" width="40" height="160" rx="20" fill="url(#config-earcup-shading)" />
                            <rect x="100" y="240" width="8" height="150" rx="4" fill="#FFF" fill-opacity="0.25" />
                        </g>

                        <!-- Right Cup -->
                        <g transform="translate(10, 0)">
                            <rect x="315" y="240" width="45" height="150" rx="22" fill="url(#config-cushion-grad)" />
                            <rect x="355" y="235" width="40" height="160" rx="20" fill="url(#config-cup-grad-right)" />
                            <rect x="355" y="235" width="40" height="160" rx="20" fill="url(#config-earcup-shading)" />
                            <rect x="382" y="240" width="8" height="150" rx="4" fill="#FFF" fill-opacity="0.3" />
                        </g>

                        <!-- Crown & Buttons -->
                        <rect x="382" y="222" width="14" height="14" rx="3" fill="#D1D5DB" />
                        <rect x="360" y="226" width="16" height="6" rx="2" fill="#E2E8F0" />
                    </svg>
                </div>

                <!-- Ambient Glow Behind Model -->
                <div id="config-color-glow" class="absolute w-56 h-56 rounded-full bg-lavender-300/20 blur-3xl pointer-events-none z-0 transition-colors duration-700"></div>
            </div>

            <!-- Right Side Selection Console (Column 6) -->
            <div class="lg:col-span-6 space-y-8">
                <div class="space-y-3">
                    <span class="text-xs font-bold tracking-widest uppercase text-lavender-500">Bespoke Options</span>
                    <h2 class="text-4xl font-black text-lavender-900 tracking-tight">Personalize Your Soundscape</h2>
                    <p class="text-lavender-600 text-sm sm:text-base">
                        Select a finish that matches your unique personal workspace. Every unit ships in a luxurious matte anodized coating with a color-matched Smart Case.
                    </p>
                </div>

                <!-- Custom Interactive Selectors -->
                <div class="space-y-6">
                    <!-- Finish Selector Group -->
                    <div class="space-y-3">
                        <span class="block text-xs font-semibold uppercase tracking-wider text-lavender-400">1. Select Finish Color</span>
                        <div class="grid grid-cols-2 gap-4">
                            <!-- Option 1: Lavender Mist -->
                            <button onclick="changeColor('lavender')" id="opt-lavender" class="flex items-center gap-3 p-4 rounded-2xl border-2 border-lavender-500 bg-lavender-50 text-left transition-all">
                                <span class="w-6 h-6 rounded-full bg-[#947ECC] shrink-0"></span>
                                <div>
                                    <span class="block font-bold text-xs text-lavender-900">Lavender Mist</span>
                                    <span class="block text-[10px] text-lavender-500">Inspired Edition</span>
                                </div>
                            </button>

                            <!-- Option 2: Obsidian Black -->
                            <button onclick="changeColor('obsidian')" id="opt-obsidian" class="flex items-center gap-3 p-4 rounded-2xl border-2 border-transparent bg-slate-50 text-left hover:bg-slate-100 transition-all">
                                <span class="w-6 h-6 rounded-full bg-[#1F1F1F] shrink-0"></span>
                                <div>
                                    <span class="block font-bold text-xs text-slate-800">Obsidian Black</span>
                                    <span class="block text-[10px] text-slate-500">Carbon Classic</span>
                                </div>
                            </button>

                            <!-- Option 3: Silver Sheen -->
                            <button onclick="changeColor('silver')" id="opt-silver" class="flex items-center gap-3 p-4 rounded-2xl border-2 border-transparent bg-slate-50 text-left hover:bg-slate-100 transition-all">
                                <span class="w-6 h-6 rounded-full bg-[#D1D5DB] shrink-0"></span>
                                <div>
                                    <span class="block font-bold text-xs text-slate-800">Silver Sheen</span>
                                    <span class="block text-[10px] text-slate-500">Pure Minimalist</span>
                                </div>
                            </button>

                            <!-- Option 4: Rose Cream -->
                            <button onclick="changeColor('rose')" id="opt-rose" class="flex items-center gap-3 p-4 rounded-2xl border-2 border-transparent bg-slate-50 text-left hover:bg-slate-100 transition-all">
                                <span class="w-6 h-6 rounded-full bg-[#E5C7C2] shrink-0"></span>
                                <div>
                                    <span class="block font-bold text-xs text-slate-800">Rose Cream</span>
                                    <span class="block text-[10px] text-slate-500">Warm Palette</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    <!-- Custom Accessories add-on (Interactive checkmarks) -->
                    <div class="space-y-3">
                        <span class="block text-xs font-semibold uppercase tracking-wider text-lavender-400">2. Custom Additions</span>
                        <div class="space-y-3">
                            <label class="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 hover:bg-slate-50 border border-slate-100 cursor-pointer transition-all">
                                <div class="flex items-center gap-3">
                                    <input type="checkbox" id="add-on-case" checked class="w-4 h-4 rounded text-lavender-600 focus:ring-lavender-500">
                                    <div>
                                        <span class="block text-xs font-bold text-lavender-900">Custom Smart Travel Case</span>
                                        <span class="block text-[10px] text-lavender-500">Enters ultra-low-power mode when closed</span>
                                    </div>
                                </div>
                                <span class="text-xs font-extrabold text-lavender-600">Included</span>
                            </label>

                            <label class="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 hover:bg-slate-50 border border-slate-100 cursor-pointer transition-all">
                                <div class="flex items-center gap-3">
                                    <input type="checkbox" id="add-on-engrave" class="w-4 h-4 rounded text-lavender-600 focus:ring-lavender-500" onchange="toggleEngraveOption()">
                                    <div>
                                        <span class="block text-xs font-bold text-lavender-900">Complimentary Engraving</span>
                                        <span class="block text-[10px] text-lavender-500">Engrave your name, initials, or emoji</span>
                                    </div>
                                </div>
                                <span class="text-xs font-extrabold text-emerald-600">Free</span>
                            </label>
                        </div>
                    </div>

                    <!-- Interactive Live pricing box -->
                    <div class="p-6 bg-lavender-50/70 border border-lavender-100 rounded-3xl flex justify-between items-center">
                        <div>
                            <span class="block text-[10px] font-bold text-lavender-400 uppercase tracking-widest">Pricing Estimate</span>
                            <span class="text-3xl font-black text-lavender-900">$549</span>
                            <span class="block text-[10px] text-lavender-500">or $45.75/mo. for 12 mo.</span>
                        </div>
                        <button onclick="triggerOrderSuccess()" class="px-8 py-4 bg-lavender-900 hover:bg-lavender-700 text-white rounded-2xl font-bold tracking-wide shadow-lg transition-all active:scale-95">
                            Order Now
                        </button>
                    </div>

                    <!-- Dynamic Notification Modal after order simulation -->
                    <div id="order-success-modal" class="hidden p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs flex items-center justify-between animate-bounce">
                        <div class="flex items-center gap-2">
                            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                            <span>Awesome choice! Your personalized config has been secured in your bag.</span>
                        </div>
                        <button onclick="closeSuccess()" class="font-bold underline uppercase tracking-wider text-[10px]">Dismiss</button>
                    </div>

                </div>
            </div>

        </div>
    </section>

    <!-- Detailed Tech Specifications Grid (Strictly inspired by Infographics grid from references) -->
    <section id="specifications" class="py-24 px-6 bg-lavender-100/30">
        <div class="max-w-7xl mx-auto space-y-16">
            
            <div class="text-center max-w-3xl mx-auto space-y-4">
                <span class="text-xs font-bold tracking-widest uppercase text-lavender-500">Technical Data</span>
                <h2 class="text-3xl sm:text-5xl font-black text-lavender-900 tracking-tight">Granular Acoustic Parameters</h2>
                <p class="text-lavender-600 font-medium">For audiophiles demanding precise technical transparency, we lay bare the metrics of our hardware.</p>
            </div>

            <!-- Dynamic Tab Filter for Specs -->
            <div class="flex justify-center gap-2 max-w-md mx-auto">
                <button onclick="switchSpecTab('acoustic')" id="tab-acoustic" class="flex-1 py-2 text-center rounded-xl bg-lavender-900 text-white text-xs font-bold uppercase tracking-wider transition-all">Acoustic</button>
                <button onclick="switchSpecTab('battery')" id="tab-battery" class="flex-1 py-2 text-center rounded-xl bg-white text-lavender-600 text-xs font-bold uppercase tracking-wider transition-all">Battery</button>
                <button onclick="switchSpecTab('sensor')" id="tab-sensor" class="flex-1 py-2 text-center rounded-xl bg-white text-lavender-600 text-xs font-bold uppercase tracking-wider transition-all">Sensors</button>
            </div>

            <!-- Responsive Specs Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="specs-grid-container">
                <!-- Dynamically populated via Javascript, starting with Acoustic state -->
            </div>

        </div>
    </section>

    <!-- High-Fidelity Interactive Customer Review Showcase -->
    <section class="py-24 px-6 bg-lavender-900 text-white relative">
        <div class="max-w-7xl mx-auto space-y-12">
            
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
                <div class="space-y-3">
                    <span class="text-xs font-bold tracking-widest uppercase text-lavender-300">User Echoes</span>
                    <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">Loved by Creators worldwide</h2>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="slideReview(-1)" class="w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-xl transition-all">←</button>
                    <button onclick="slideReview(1)" class="w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-xl transition-all">→</button>
                </div>
            </div>

            <!-- Slides Panel -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="reviews-carousel">
                <!-- Review Card 1 -->
                <div class="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6 flex flex-col justify-between">
                    <div class="space-y-4">
                        <!-- Star rating -->
                        <div class="flex text-amber-300 gap-1 text-sm">★★★★★</div>
                        <p class="text-lavender-100 text-sm leading-relaxed italic">
                            "The Lavender finish matches my minimalist workspace perfectly. The ANC is absolute sorcery—I work in a noisy coffee house and feel completely locked in my bubble."
                        </p>
                    </div>
                    <div class="flex items-center gap-3 border-t border-white/10 pt-4">
                        <div class="w-10 h-10 rounded-full bg-lavender-400 flex items-center justify-center text-xs font-bold text-white uppercase">
                            EM
                        </div>
                        <div>
                            <span class="block font-bold text-xs text-white">Emily Morton</span>
                            <span class="block text-[10px] text-lavender-400">Creative Producer, NYC</span>
                        </div>
                    </div>
                </div>

                <!-- Review Card 2 -->
                <div class="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6 flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="flex text-amber-300 gap-1 text-sm">★★★★★</div>
                        <p class="text-lavender-100 text-sm leading-relaxed italic">
                            "Spatial audio transforms standard movie watching on an iPad into an IMAX scale theater experience. Worth every single cent for the comfort and build quality."
                        </p>
                    </div>
                    <div class="flex items-center gap-3 border-t border-white/10 pt-4">
                        <div class="w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center text-xs font-bold text-white uppercase">
                            DK
                        </div>
                        <div>
                            <span class="block font-bold text-xs text-white">Devon Kross</span>
                            <span class="block text-[10px] text-lavender-400">Tech Lead & Cinephile</span>
                        </div>
                    </div>
                </div>

                <!-- Review Card 3 -->
                <div class="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6 flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="flex text-amber-300 gap-1 text-sm">★★★★★</div>
                        <p class="text-lavender-100 text-sm leading-relaxed italic">
                            "The material design is simply stunning. The aluminum earcups have a smooth matte finish, and the digital crown feels extremely tactile. Exceptional piece of engineering."
                        </p>
                    </div>
                    <div class="flex items-center gap-3 border-t border-white/10 pt-4">
                        <div class="w-10 h-10 rounded-full bg-indigo-400 flex items-center justify-center text-xs font-bold text-white uppercase">
                            AL
                        </div>
                        <div>
                            <span class="block font-bold text-xs text-white">Aris Larsson</span>
                            <span class="block text-[10px] text-lavender-400">Architect, Stockholm</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Direct Response FAQ Accordion Section -->
    <section class="py-24 px-6 bg-lavender-50">
        <div class="max-w-4xl mx-auto space-y-12">
            
            <div class="text-center space-y-3">
                <span class="text-xs font-bold tracking-widest uppercase text-lavender-500">Common Enquiries</span>
                <h2 class="text-3xl sm:text-5xl font-black text-lavender-900 tracking-tight">Got Questions? We Have Answers.</h2>
            </div>

            <div class="space-y-4">
                <!-- FAQ Item 1 -->
                <div class="bg-white border border-lavender-100 rounded-2xl overflow-hidden transition-all duration-300">
                    <button onclick="toggleFAQ(1)" class="w-full p-6 text-left flex justify-between items-center text-lavender-900 hover:bg-slate-50/50 transition-colors">
                        <span class="font-bold text-sm sm:text-base">What device compatibility can I expect?</span>
                        <span id="faq-icon-1" class="text-xl transition-transform duration-300">+</span>
                    </button>
                    <div id="faq-content-1" class="hidden px-6 pb-6 text-xs sm:text-sm text-lavender-600 leading-relaxed">
                        Maximus headphones pair instantly with all modern smartphones, tablets, and computers over Bluetooth 5.0. Advanced smart integrations like personalized Spatial Audio and multi-point audio switching work seamlessly across the ecosystem.
                    </div>
                </div>

                <!-- FAQ Item 2 -->
                <div class="bg-white border border-lavender-100 rounded-2xl overflow-hidden transition-all duration-300">
                    <button onclick="toggleFAQ(2)" class="w-full p-6 text-left flex justify-between items-center text-lavender-900 hover:bg-slate-50/50 transition-colors">
                        <span class="font-bold text-sm sm:text-base">How does the 20-hour battery handle fast charging?</span>
                        <span id="faq-icon-2" class="text-xl transition-transform duration-300">+</span>
                    </button>
                    <div id="faq-content-2" class="hidden px-6 pb-6 text-xs sm:text-sm text-lavender-600 leading-relaxed">
                        A quick 5-minute charge over USB-C or Lightning provides up to 1.5 hours of complete active listening with both Active Noise Cancellation and spatial audio active. It supports dual charging configurations securely.
                    </div>
                </div>

                <!-- FAQ Item 3 -->
                <div class="bg-white border border-lavender-100 rounded-2xl overflow-hidden transition-all duration-300">
                    <button onclick="toggleFAQ(3)" class="w-full p-6 text-left flex justify-between items-center text-lavender-900 hover:bg-slate-50/50 transition-colors">
                        <span class="font-bold text-sm sm:text-base">Can I clean the custom fabric mesh headband and cups?</span>
                        <span id="faq-icon-3" class="text-xl transition-transform duration-300">+</span>
                    </button>
                    <div id="faq-content-3" class="hidden px-6 pb-6 text-xs sm:text-sm text-lavender-600 leading-relaxed">
                        Yes. Both the memory foam ear cushion modules and the outer flexible mesh canopy can be lightly wiped with a damp microfiber cloth. The cushions are magnetically attached, making them easy to swap or clean separately.
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- High-Fidelity Modern Footer -->
    <footer class="bg-velvet-dark text-white border-t border-white/5 py-16 px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            <div class="space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-lavender-400 to-lavender-600 flex items-center justify-center text-white font-black text-xl">
                        M
                    </div>
                    <div>
                        <span class="text-lg font-extrabold tracking-tight">MAXIMUS</span>
                        <span class="block text-[9px] uppercase tracking-widest text-lavender-400 -mt-1 font-bold">Acoustic Precision</span>
                    </div>
                </div>
                <p class="text-xs text-lavender-300 leading-relaxed">
                    Bringing together professional acoustic purity and stunning structural aesthetics for individuals who live and create in sound.
                </p>
                <div class="pt-2 text-[10px] text-lavender-400">
                    Designed in harmony. Launch 2026.
                </div>
            </div>

            <div class="space-y-4 text-xs">
                <h4 class="font-bold uppercase tracking-wider text-white">Experience</h4>
                <ul class="space-y-2.5 text-lavender-300">
                    <li><a href="#features" class="hover:text-white transition-colors">Design & Comfort</a></li>
                    <li><a href="#audio-sim" class="hover:text-white transition-colors">Active Noise Cancellation</a></li>
                    <li><a href="#schematic" class="hover:text-white transition-colors">Internal Anatomy</a></li>
                    <li><a href="#configurator" class="hover:text-white transition-colors">Custom Color Configurator</a></li>
                </ul>
            </div>

            <div class="space-y-4 text-xs">
                <h4 class="font-bold uppercase tracking-wider text-white">Support</h4>
                <ul class="space-y-2.5 text-lavender-300">
                    <li><a href="#" class="hover:text-white transition-colors">Quick Setup Guide</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Replacement Cushions</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Authorized Retailers</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Warranty & Service</a></li>
                </ul>
            </div>

            <div class="space-y-4 text-xs">
                <h4 class="font-bold uppercase tracking-wider text-white">Newsletter</h4>
                <p class="text-lavender-300 leading-relaxed">Get the latest acoustic firmware updates, custom presets, and exclusive color release announcements direct to your inbox.</p>
                <div class="flex gap-2">
                    <input type="email" placeholder="you@example.com" class="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs w-full focus:outline-none focus:border-lavender-400 text-white">
                    <button onclick="triggerNewsletterSuccess()" class="bg-lavender-500 hover:bg-lavender-400 px-4 py-2 rounded-xl text-white font-bold transition-all">Join</button>
                </div>
                <span id="newsletter-status" class="hidden text-[10px] text-emerald-400 font-bold block">✓ Successfully Subscribed!</span>
            </div>

        </div>

        <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-lavender-400">
            <span>&copy; 2026 Maximus Audio. All Rights Reserved. inspired by Apple Design guidelines.</span>
            <div class="flex gap-6">
                <a href="#" class="hover:text-white">Privacy Policy</a>
                <a href="#" class="hover:text-white">Terms of Sale</a>
                <a href="#" class="hover:text-white">Cookie Settings</a>
            </div>
        </div>
    </footer>

    <!-- Comprehensive Dynamic Controller Script -->
    <script>
        // Setup state variables
        let currentColor = 'lavender';
        let currentSoundMode = 'anc';
        let currentSpecTab = 'acoustic';
        let isDraggingAudioNode = false;

        // Custom Color Stop Definitions for Interactive SVG swap
        const colorDefinitions = {
            lavender: {
                bandStop1: '#EAE6F4', bandStop2: '#D5CDEB', bandStop3: '#EAE6F4',
                cupStop1: '#DFD8F3', cupStop2: '#947ECC',
                cushionStop1: '#BEB5DF', cushionStop2: '#7C6FA4',
                glow: 'rgba(148, 126, 204, 0.2)'
            },
            obsidian: {
                bandStop1: '#262626', bandStop2: '#1F1F1F', bandStop3: '#262626',
                cupStop1: '#3F3F3F', cupStop2: '#1A1A1A',
                cushionStop1: '#404040', cushionStop2: '#1E1E1E',
                glow: 'rgba(31, 31, 31, 0.2)'
            },
            silver: {
                bandStop1: '#F3F4F6', bandStop2: '#D1D5DB', bandStop3: '#F3F4F6',
                cupStop1: '#E5E7EB', cupStop2: '#9CA3AF',
                cushionStop1: '#D1D5DB', cushionStop2: '#6B7280',
                glow: 'rgba(156, 163, 175, 0.2)'
            },
            rose: {
                bandStop1: '#FDF2F0', bandStop2: '#E5C7C2', bandStop3: '#FDF2F0',
                cupStop1: '#F9DED9', cupStop2: '#C99E97',
                cushionStop1: '#DBB7B1', cushionStop2: '#9A706A',
                glow: 'rgba(229, 199, 194, 0.2)'
            }
        };

        // Technical Specifications Data Repository
        const specsData = {
            acoustic: [
                { title: "Dynamic Driver Size", val: "40 mm", desc: "Custom designed titanium composite dynamic driver designed to capture crisp details.", stat: "High Fidelity" },
                { title: "Total Harmonic Distortion", val: "<0.08%", desc: "Extremely low distortion across the entire audio spectrum, even at high volume.", stat: "Ultra Pure" },
                { title: "Driver Architecture", val: "Dual Neodymium Ring", desc: "Dual neodymium ring magnet motor mimics professional floor-standing speakers.", stat: "No Distort" }
            ],
            battery: [
                { title: "ANC Active Playback", val: "Up to 20 Hours", desc: "Listen comfortably with high-fidelity sound, Active Noise Cancellation, and Spatial Audio.", stat: "20 Hrs" },
                { title: "Fast Charging Speed", val: "5 Mins = 1.5 Hrs", desc: "Get substantial charge in minutes over lightning or fast-charging type-c port.", stat: "Super Fast" },
                { title: "Standby Battery Save", val: "Up to 200 Hours", desc: "Enters an ultra-low energy mode when stored within the provided slim smart case.", stat: "Smart Save" }
            ],
            sensor: [
                { title: "Gyroscope System", val: "9-Axis Array", desc: "Calculates spatial sound dynamic orientation instantly as you tilt or turn your head.", stat: "Gyros Active" },
                { title: "Optical Sensors", val: "Dual Wear Detect", desc: "Pauses playback automatically whenever you lift an earcup or slide them off.", stat: "Auto Pause" },
                { title: "Case Detection Sensor", val: "Hall Effect", desc: "Instructs your headphones to sleep when securely snapped into its travel jacket.", stat: "Smart Sleep" }
            ]
        };

        // Initialize elements on load
        window.onload = function() {
            generateAudioWaves();
            switchSpecTab('acoustic');
            setupSpatialAudioDrag();
        }

        // Color Swapping Functionality
        function changeColor(colorName) {
            currentColor = colorName;
            const defs = colorDefinitions[colorName];
            if (!defs) return;

            // Apply to Hero Headphone
            applyColorToSvg('hero-headphone', defs);
            // Apply to Configurator Headphone
            applyColorToSvg('config-headphone', defs);

            // Update Glow Behind Configurator
            const glowEl = document.getElementById('config-color-glow');
            if (glowEl) {
                glowEl.style.backgroundColor = defs.glow;
            }

            // Update selector borders/active states in configurator
            const colors = ['lavender', 'obsidian', 'silver', 'rose'];
            colors.forEach(col => {
                const button = document.getElementById(`opt-${col}`);
                if (button) {
                    if (col === colorName) {
                        button.classList.add('border-lavender-500', 'bg-lavender-50');
                        button.classList.remove('border-transparent', 'bg-slate-50');
                    } else {
                        button.classList.remove('border-lavender-500', 'bg-lavender-50');
                        button.classList.add('border-transparent', 'bg-slate-50');
                    }
                }
            });
        }

        // Apply visual definitions to specific SVG paths
        function applyColorToSvg(svgId, defs) {
            const svg = document.getElementById(svgId);
            if (!svg) return;

            // Select and change classes inside gradient definitions
            const stops = {
                band1: svg.querySelectorAll('.band-color-stop-1, .config-band-color-stop-1'),
                band2: svg.querySelectorAll('.band-color-stop-2, .config-band-color-stop-2'),
                band3: svg.querySelectorAll('.band-color-stop-3, .config-band-color-stop-3'),
                cupL1: svg.querySelectorAll('.cup-color-stop-1, .config-cup-color-stop-1'),
                cupL2: svg.querySelectorAll('.cup-color-stop-2, .config-cup-color-stop-2'),
                cushion1: svg.querySelectorAll('.cushion-color-stop-1, .config-cushion-color-stop-1'),
                cushion2: svg.querySelectorAll('.cushion-color-stop-2, .config-cushion-color-stop-2')
            };

            stops.band1.forEach(el => el.setAttribute('stop-color', defs.bandStop1));
            stops.band2.forEach(el => el.setAttribute('stop-color', defs.bandStop2));
            stops.band3.forEach(el => el.setAttribute('stop-color', defs.bandStop3));
            stops.cupL1.forEach(el => el.setAttribute('stop-color', defs.cupStop1));
            stops.cupL2.forEach(el => el.setAttribute('stop-color', defs.cupStop2));
            stops.cushion1.forEach(el => el.setAttribute('stop-color', defs.cushionStop1));
            stops.cushion2.forEach(el => el.setAttribute('stop-color', defs.cushionStop2));
        }

        // Active Noise Cancellation Visualizer Simulator
        function generateAudioWaves() {
            const container = document.getElementById('wave-container');
            if (!container) return;
            container.innerHTML = '';

            const barCount = window.innerWidth < 640 ? 25 : 55;
            for (let i = 0; i < barCount; i++) {
                const bar = document.createElement('div');
                bar.className = 'w-1 sm:w-1.5 rounded-full bg-lavender-400/80 transition-all duration-300 wave-bar';
                // Random delay and height
                const height = Math.floor(Math.random() * 80) + 10;
                bar.style.height = `${height}px`;
                bar.style.animationDelay = `${i * 0.03}s`;
                container.appendChild(bar);
            }
        }

        function toggleSoundMode(mode) {
            currentSoundMode = mode;
            const container = document.getElementById('wave-container');
            const sphere = document.getElementById('visualizer-sphere');
            const label = document.getElementById('ambient-mode-label');
            const indicator = document.getElementById('ambient-indicator-pulse');
            const desc = document.getElementById('sound-mode-desc');

            const btnAnc = document.getElementById('btn-anc');
            const btnTrans = document.getElementById('btn-trans');
            const btnOff = document.getElementById('btn-off');

            // Reset classes
            [btnAnc, btnTrans, btnOff].forEach(btn => {
                btn.className = 'py-3 px-2 text-center rounded-2xl bg-white/5 text-lavender-200 hover:bg-white/10 font-bold text-xs uppercase tracking-wider transition-all border border-transparent';
            });

            if (mode === 'anc') {
                btnAnc.className = 'py-3 px-2 text-center rounded-2xl bg-lavender-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all border border-lavender-400';
                label.innerText = '98% Isolated';
                indicator.className = 'w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping';
                desc.innerText = '"Active noise cancellation blocks the background frequencies entirely, isolating your focus."';
                
                // Flat/very low gentle waves
                Array.from(container.children).forEach(bar => {
                    bar.style.animation = 'none';
                    bar.style.height = '6px';
                    bar.style.backgroundColor = '#947ECC';
                });
                sphere.className = 'absolute w-[280px] h-[280px] rounded-full bg-lavender-500/20 filter blur-3xl scale-110 duration-700';

            } else if (mode === 'transparency') {
                btnTrans.className = 'py-3 px-2 text-center rounded-2xl bg-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all border border-indigo-400';
                label.innerText = 'Natural Pass-through';
                indicator.className = 'w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse';
                desc.innerText = '"Microphones filter sound naturally so you hear your own voice and environment completely."';
                
                // Medium active waves
                Array.from(container.children).forEach((bar, index) => {
                    bar.style.animation = 'waveform 1.5s ease-in-out infinite';
                    bar.style.animationDelay = `${index * 0.02}s`;
                    bar.style.backgroundColor = '#818CF8';
                });
                sphere.className = 'absolute w-[280px] h-[280px] rounded-full bg-indigo-500/10 filter blur-3xl scale-100 duration-700';

            } else if (mode === 'off') {
                btnOff.className = 'py-3 px-2 text-center rounded-2xl bg-slate-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all border border-slate-500';
                label.innerText = 'Passive Isolation Only';
                indicator.className = 'w-2.5 h-2.5 rounded-full bg-red-400';
                desc.innerText = '"No computational isolation is active. Passive isolation is achieved physically."';
                
                // Erratic jagged loud waves
                Array.from(container.children).forEach((bar, index) => {
                    bar.style.animation = 'waveform 0.8s ease-in-out infinite';
                    bar.style.animationDelay = `${index * 0.01}s`;
                    bar.style.backgroundColor = '#94A3B8';
                });
                sphere.className = 'absolute w-[280px] h-[280px] rounded-full bg-slate-600/10 filter blur-3xl scale-75 duration-700';
            }
        }

        // Spatial Audio Orbit Sandbox controls
        function setupSpatialAudioDrag() {
            const orbitRing = document.getElementById('spatial-orbit-ring');
            const audioNode = document.getElementById('audio-node');
            if (!orbitRing || !audioNode) return;

            const updateSoundCoordinates = (clientX, clientY) => {
                const rect = orbitRing.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                let dx = clientX - centerX;
                let dy = clientY - centerY;
                
                // Calculate angle and radius
                let angleRad = Math.atan2(dy, dx);
                let angleDeg = Math.round(angleRad * (180 / Math.PI));
                if (angleDeg < 0) angleDeg += 360;

                // Restrict distance to orbit boundary
                const radius = rect.width / 2 - 20; // Padding inside orbit
                const newX = radius * Math.cos(angleRad);
                const newY = radius * Math.sin(angleRad);

                // Apply style repositioning
                audioNode.style.left = `calc(50% + ${newX}px - 20px)`;
                audioNode.style.top = `calc(50% + ${newY}px - 20px)`;

                // Update visual directional feedbacks
                const relativeAngle = (angleDeg - 90 + 360) % 360;
                let directionText = `${relativeAngle}° Surround`;
                if (relativeAngle > 340 || relativeAngle < 20) directionText += ' (Front)';
                else if (relativeAngle >= 20 && relativeAngle <= 160) directionText += ' (Right Channel)';
                else if (relativeAngle > 160 && relativeAngle < 200) directionText += ' (Rear Center)';
                else directionText += ' (Left Channel)';

                document.getElementById('orbit-angle').innerText = directionText;
                document.getElementById('orbit-distance').innerText = 'Dolby Atmos Live';
            };

            // Touch support
            audioNode.addEventListener('touchstart', (e) => {
                isDraggingAudioNode = true;
                e.preventDefault();
            }, { passive: false });

            window.addEventListener('touchmove', (e) => {
                if (!isDraggingAudioNode) return;
                const touch = e.touches[0];
                updateSoundCoordinates(touch.clientX, touch.clientY);
            }, { passive: false });

            window.addEventListener('touchend', () => {
                isDraggingAudioNode = false;
            });

            // Mouse support
            audioNode.addEventListener('mousedown', (e) => {
                isDraggingAudioNode = true;
                e.preventDefault();
            });

            window.addEventListener('mousemove', (e) => {
                if (!isDraggingAudioNode) return;
                updateSoundCoordinates(e.clientX, e.clientY);
            });

            window.addEventListener('mouseup', () => {
                isDraggingAudioNode = false;
            });
        }

        // Exploded tech schematic details dynamic swap
        const schematicDetails = {
            1: {
                tag: "Engineered Part 1",
                title: "Resilient Mesh Canopy",
                desc: "Woven meticulously with durable fibers, the canopy provides superb balanced head weight support. This mesh ensures uniform posture comfort across the crown, making the headphone feel virtually featherlight.",
                stat1: "99.4% Tension Rate",
                stat2: "14 Gram Canopy"
            },
            2: {
                tag: "Engineered Part 2",
                title: "Custom 40mm Composite Drivers",
                desc: "An advanced dual neodymium ring magnet motor structure reduces sound distortion inside. It mimics high-end floor standing hi-fi speakers, translating every single note accurately to your eardrums.",
                stat1: "THD <0.08% Pure",
                stat2: "Dual Motor Array"
            },
            3: {
                tag: "Engineered Part 3",
                title: "Anodized Digital Crown Control",
                desc: "A custom-machined metal knob that gives complete fine physical volume control. Press to answer calls, skip tracks, and adjust options without checking your smartphone screen.",
                stat1: "Tactile Feedbacks",
                stat2: "Premium Aluminum"
            },
            4: {
                tag: "Engineered Part 4",
                title: "H1 Computation Brains",
                desc: "Fitted with two independent master audio processors. Using custom audio algorithms, the H1 chips coordinate noise cancellation, personalized sound acoustics, and wear sensors instantly.",
                stat1: "10-Core Engines",
                stat2: "9 Billion Calcs"
            }
        };

        function revealSchematicDetails(index) {
            const details = schematicDetails[index];
            if (!details) return;

            // Apply detail updates to container
            document.getElementById('detail-tag').innerText = details.tag;
            document.getElementById('detail-title').innerText = details.title;
            document.getElementById('detail-desc').innerText = details.desc;
            document.getElementById('detail-stat-1').innerText = details.stat1;
            document.getElementById('detail-stat-2').innerText = details.stat2;

            // Highlight the dots appropriately
            for (let i = 1; i <= 4; i++) {
                const dot = document.getElementById(`spec-dot-${i}`);
                if (dot) {
                    if (i === index) {
                        dot.className = "w-3.5 h-3.5 rounded-full bg-lavender-400 ring-2 ring-offset-2 ring-white transition-all";
                    } else {
                        dot.className = "w-3 h-3 rounded-full bg-white/30 transition-all";
                    }
                }
            }
        }

        // Technical specifications table tab switches
        function switchSpecTab(tabId) {
            currentSpecTab = tabId;
            const container = document.getElementById('specs-grid-container');
            if (!container) return;

            // Reset tab highlights
            const tabs = ['acoustic', 'battery', 'sensor'];
            tabs.forEach(t => {
                const tabBtn = document.getElementById(`tab-${t}`);
                if (tabBtn) {
                    if (t === tabId) {
                        tabBtn.className = "flex-1 py-2 text-center rounded-xl bg-lavender-900 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md";
                    } else {
                        tabBtn.className = "flex-1 py-2 text-center rounded-xl bg-white text-lavender-600 hover:text-lavender-900 text-xs font-bold uppercase tracking-wider transition-all";
                    }
                }
            });

            // Load and paint dynamic cards
            const specs = specsData[tabId];
            container.innerHTML = '';
            specs.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = "p-8 bg-white border border-lavender-100 rounded-3xl space-y-6 flex flex-col justify-between shadow-sm transition-all hover:shadow-premium duration-300 transform translate-y-2 opacity-0";
                
                card.innerHTML = `
                    <div class="space-y-3">
                        <span class="text-[10px] font-extrabold uppercase tracking-widest text-lavender-400">Spec Detail ${index + 1}</span>
                        <h4 class="text-xl font-bold text-lavender-900">${item.title}</h4>
                        <p class="text-xs sm:text-sm text-lavender-500 leading-relaxed">${item.desc}</p>
                    </div>
                    <div class="pt-4 border-t border-lavender-50 flex justify-between items-center">
                        <span class="text-xl font-black text-lavender-600">${item.val}</span>
                        <span class="px-2.5 py-1 rounded-full bg-lavender-50 text-lavender-500 font-bold uppercase text-[9px] tracking-wider">${item.stat}</span>
                    </div>
                `;
                
                container.appendChild(card);
                
                // Animate entrance nicely
                setTimeout(() => {
                    card.classList.remove('translate-y-2', 'opacity-0');
                }, index * 100);
            });
        }

        // Accordion drawer FAQ toggles
        function toggleFAQ(index) {
            const content = document.getElementById(`faq-content-${index}`);
            const icon = document.getElementById(`faq-icon-${index}`);
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.innerText = '−';
                icon.classList.add('rotate-45');
            } else {
                content.classList.add('hidden');
                icon.innerText = '+';
                icon.classList.remove('rotate-45');
            }
        }

        // Newsletter sign up simulation
        function triggerNewsletterSuccess() {
            const status = document.getElementById('newsletter-status');
            status.classList.remove('hidden');
            setTimeout(() => {
                status.classList.add('hidden');
            }, 5000);
        }

        // Purchase order triggers
        function triggerOrderSuccess() {
            const modal = document.getElementById('order-success-modal');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }

        function closeSuccess() {
            const modal = document.getElementById('order-success-modal');
            modal.classList.add('hidden');
        }

        function scrollToConfigurator() {
            const target = document.getElementById('configurator');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    </script>
</body>
</html>
I3
import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  Bluetooth, 
  Battery, 
  Radio, 
  Sliders, 
  Play, 
  Pause, 
  ChevronRight, 
  ChevronLeft, 
  Compass, 
  Award, 
  Check, 
  ShoppingBag, 
  ArrowRight, 
  Star, 
  RotateCcw,
  Zap,
  Maximize2,
  SlidersHorizontal,
  Headphones,
  Music,
  Shield,
  Truck,
  Heart
} from 'lucide-react';

export default function App() {
  // Application State
  const [activeTab, setActiveTab] = useState('features');
  const [selectedColor, setSelectedColor] = useState('obsidian'); // obsidian, alabaster, forest
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundPreset, setSoundPreset] = useState('signature'); // signature, bass, monitor, stage
  const [volume, setVolume] = useState(70);
  const [chargeTime, setChargeTime] = useState(3); // hours
  const [customEngraving, setCustomEngraving] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);
  const [activeKnobDirection, setActiveKnobDirection] = useState(null);
  
  // Custom Accessory Choices
  const [accessories, setAccessories] = useState({
    case: true,
    goldCable: false,
    stand: false,
  });

  // Track Progress Simulation
  const [trackProgress, setTrackProgress] = useState(35);
  const progressInterval = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setTrackProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 200);
    } else {
      clearInterval(progressInterval.current);
    }
    return () => clearInterval(progressInterval.current);
  }, [isPlaying]);

  // Toast System Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Color Palette Constants
  const colors = {
    obsidian: {
      name: 'Midnight Obsidian',
      primary: '#121212',
      accent: '#dfba6b', // Gold / Brass
      bgGradient: 'from-[#141414] to-[#0A0A0A]',
      accentText: 'text-[#dfba6b]',
      accentBg: 'bg-[#dfba6b]',
      accentBorder: 'border-[#dfba6b]',
      headphoneBase: '#1a1a1a',
      headphoneAccent: '#dfba6b',
      headphoneCup: '#151515',
    },
    alabaster: {
      name: 'Desert Alabaster',
      primary: '#EAE5D9',
      accent: '#C59B6D', // Copper / Bronze
      bgGradient: 'from-[#1E1D1A] to-[#121110]',
      accentText: 'text-[#C59B6D]',
      accentBg: 'bg-[#C59B6D]',
      accentBorder: 'border-[#C59B6D]',
      headphoneBase: '#e3ded3',
      headphoneAccent: '#C59B6D',
      headphoneCup: '#d0c9bc',
    },
    forest: {
      name: 'Forest Stealth',
      primary: '#2D352E',
      accent: '#b5a172', // Olive gold
      bgGradient: 'from-[#131714] to-[#0B0C0B]',
      accentText: 'text-[#b5a172]',
      accentBg: 'bg-[#b5a172]',
      accentBorder: 'border-[#b5a172]',
      headphoneBase: '#2e3630',
      headphoneAccent: '#b5a172',
      headphoneCup: '#232924',
    }
  };

  const currentTheme = colors[selectedColor];

  // Testimonials database
  const testimonials = [
    {
      name: "Valery Semyonov",
      role: "Lead Acoustic Engineer, Apex Labs",
      quote: "The transient response of the Kronos IV is astonishing. By combining custom-tuned 40mm drivers with the physical properties of natural brass inserts, they have achieved high-frequency crystalline clarity without any harshness.",
      rating: 5,
      date: "May 2026"
    },
    {
      name: "Marcus Thorne",
      role: "Audiophile & Creative Director",
      quote: "The physical joystick knob feels absolutely timeless. It gives me immediate tactical feedback that touch gestures always fail to deliver. And 80 hours is not a marketing myth; I charged it once this month.",
      rating: 5,
      date: "April 2026"
    },
    {
      name: "Elena Rostova",
      role: "Electronic Music Producer",
      quote: "The soundstage is beautifully intimate, evoking the spatial dynamics of a real, physical studio booth. Using the Live Stage preset, synth-waves acquire an incredible warmth and dimensional weight.",
      rating: 5,
      date: "March 2026"
    }
  ];

  // Sound Wave Preset Configuration
  const soundWavePaths = {
    signature: "M10 50 Q 25 10, 40 50 T 70 50 T 100 50 T 130 50 T 160 50 T 190 50",
    bass: "M10 50 Q 25 -10, 40 50 T 70 80 T 100 20 T 130 50 T 160 50 T 190 50",
    monitor: "M10 50 Q 25 35, 40 50 T 70 45 T 100 52 T 130 48 T 160 50 T 190 50",
    stage: "M10 50 Q 25 5, 40 50 T 70 95 T 100 5 T 130 95 T 160 50 T 190 50"
  };

  // Knob Controller simulation
  const handleKnobAction = (direction) => {
    setActiveKnobDirection(direction);
    setTimeout(() => setActiveKnobDirection(null), 300);

    if (direction === 'up') {
      setVolume(prev => Math.min(prev + 5, 100));
      showToast("Volume Raised to " + Math.min(volume + 5, 100) + "%");
    } else if (direction === 'down') {
      setVolume(prev => Math.max(prev - 5, 0));
      showToast("Volume Lowered to " + Math.max(volume - 5, 0) + "%");
    } else if (direction === 'left') {
      setTrackProgress(0);
      showToast("Track Restarted / Previous Track");
    } else if (direction === 'right') {
      setTrackProgress(0);
      showToast("Skipped to Next Acoustic Session");
    } else if (direction === 'center') {
      setIsPlaying(prev => !prev);
      showToast(isPlaying ? "Audio Playback Paused" : "Audio Playback Commenced");
    }
  };

  // Pre-order Price Calculator
  const basePrice = 249;
  const casePrice = accessories.case ? 0 : 0; // Included free
  const goldCablePrice = accessories.goldCable ? 35 : 0;
  const standPrice = accessories.stand ? 55 : 0;
  const totalPrice = basePrice + goldCablePrice + standPrice;

  return (
    <div className={`min-h-screen bg-[#0A0A0A] text-neutral-100 font-sans selection:bg-[#dfba6b] selection:text-black overflow-x-hidden relative`}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161616] border border-[#dfba6b]/40 text-neutral-100 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-up backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#dfba6b] animate-ping"></span>
          <span className="text-sm font-medium tracking-wide uppercase">{toastMessage}</span>
        </div>
      )}

      {/* Glow Effects in Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#dfba6b]/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-10 w-[600px] h-[600px] bg-[#dfba6b]/3 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/85 backdrop-blur-md border-b border-neutral-900/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-950 border border-neutral-700 flex items-center justify-center shadow-lg group-hover:border-[#dfba6b]/40 transition-all">
              <span className="text-xl font-bold text-[#dfba6b] tracking-tighter">K</span>
            </div>
            <div>
              <span className="text-lg font-bold tracking-[0.25em] uppercase text-white group-hover:text-[#dfba6b] transition-all">KRONOS</span>
              <span className="block text-[9px] tracking-widest text-neutral-500 uppercase -mt-1">Acoustic Engineering</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            <a href="#experience" className="hover:text-white transition-colors">Acoustic DNA</a>
            <a href="#bento-specs" className="hover:text-white transition-colors">Specifications</a>
            <a href="#customizer" className="hover:text-white transition-colors">Customizer</a>
            <a href="#engineering" className="hover:text-white transition-colors">Engineering</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
          </nav>

          {/* Reserve / CTA Action */}
          <div className="flex items-center gap-4">
            <span className="hidden lg:inline text-[11px] font-mono text-neutral-500 tracking-wider">EST. 2026 / MODEL IV</span>
            <a 
              href="#preorder" 
              className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-[#dfba6b] text-neutral-200 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(223,186,107,0.15)]"
            >
              Reserve Now
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.02] border-x border-neutral-700">
          <div></div><div></div><div></div><div></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left: Title & Value Proposition */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-[10px] uppercase tracking-widest text-neutral-300 font-semibold shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfba6b] animate-pulse"></span>
              The Ultimate Sound Sanctuary
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight uppercase leading-[0.9] text-white">
                KRONOS <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-[#dfba6b]">IV</span>
              </h1>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold">
                Professional Wireless Studio Monitors
              </p>
            </div>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
              We took the raw, tactical aesthetic of golden-age studio monitors and infused it with cutting-edge spatial computing acoustics. Eighty hours of deep, unadulterated musical sanctuary wrapped in premium hand-stitched vegan leather.
            </p>

            {/* Quick Specs Highlight Panel */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#121212]/90 border border-neutral-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-950 flex items-center justify-center text-[#dfba6b] border border-neutral-800/80">
                  <Battery className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white tracking-tight">80 HRS</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Active Reserve</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121212]/90 border border-neutral-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-950 flex items-center justify-center text-[#dfba6b] border border-neutral-800/80">
                  <Bluetooth className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white tracking-tight">15 MTR</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Wireless Reach</div>
                </div>
              </div>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#preorder"
                className="px-8 py-4 rounded-xl bg-[#dfba6b] hover:bg-[#ebd095] text-black text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-[#dfba6b]/15 hover:shadow-[#dfba6b]/35 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Configure Your Build <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#experience"
                className="px-8 py-4 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
              >
                Experience Acoustic DNA
              </a>
            </div>

            {/* Compatibility Micro Tags */}
            <div className="flex items-center gap-4 pt-2 text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">
              <span>Bluetooth 5.2</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
              <span>AAC / aptX Lossless</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
              <span>Hi-Res Audio Certified</span>
            </div>

          </div>

          {/* Hero Right: Highly Aesthetic Immersive Product Showcase Container */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
            
            {/* The Main Premium Card Container inspired directly by the uploaded layout */}
            <div className="w-full max-w-[580px] bg-[#121212] border border-neutral-800/80 rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-hidden hover:border-[#dfba6b]/30 transition-all duration-700">
              
              {/* Card Header Info */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[#dfba6b] text-[11px] font-mono tracking-widest uppercase block mb-1">DESIGN PATENT #4092-26</span>
                  <h3 className="text-2xl font-bold tracking-tight text-white uppercase">PREMIUM PHYSICAL FIDELITY</h3>
                </div>
                <div className="px-3 py-1 rounded border border-neutral-800 text-[10px] font-mono text-neutral-400">
                  REF.04
                </div>
              </div>

              {/* Central Graphic Container - Dynamically Changes with Selected Colorway */}
              <div className="h-[280px] sm:h-[320px] w-full relative bg-[#0d0d0d] rounded-2xl border border-neutral-900 flex items-center justify-center p-4 overflow-hidden group">
                
                {/* Glowing Aura Behind Headphone */}
                <div className={`absolute w-72 h-72 rounded-full blur-[80px] transition-all duration-700 opacity-25`} 
                     style={{ backgroundColor: currentTheme.accent }} />

                {/* Animated Interactive Wave Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                    <path 
                      d={soundWavePaths[soundPreset]} 
                      fill="none" 
                      stroke={currentTheme.accent} 
                      strokeWidth="2" 
                      className={`transition-all duration-1000 ${isPlaying ? 'animate-pulse' : ''}`}
                    />
                  </svg>
                </div>

                {/* Custom Vector Headphone Illustration */}
                <svg viewBox="0 0 400 400" className="w-64 h-64 z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] transition-all duration-500">
                  {/* Steel Headband Arc */}
                  <path 
                    d="M 100,200 A 100,100 0 0,1 300,200" 
                    fill="none" 
                    stroke="#2D2D2D" 
                    strokeWidth="14" 
                    strokeLinecap="round" 
                  />
                  {/* Headband Leather Cover Cushion */}
                  <path 
                    d="M 120,180 A 90,90 0 0,1 280,180" 
                    fill="none" 
                    stroke={currentTheme.headphoneBase} 
                    strokeWidth="20" 
                    strokeLinecap="round" 
                  />
                  
                  {/* Stitching detailing on headband */}
                  <path 
                    d="M 125,178 A 88,88 0 0,1 275,178" 
                    fill="none" 
                    stroke={currentTheme.headphoneAccent} 
                    strokeWidth="1.5" 
                    strokeDasharray="4,4" 
                    strokeLinecap="round" 
                  />

                  {/* Left Metal Fork Slide */}
                  <g transform="translate(100, 190) rotate(-15)">
                    <rect x="-4" y="0" width="8" height="60" rx="3" fill="#3D3D3D" />
                    <rect x="-6" y="50" width="12" height="15" rx="2" fill="#1C1C1C" />
                    {/* Golden cable wire curl */}
                    <path d="M 0,10 Q -25,30 5,50" fill="none" stroke={currentTheme.headphoneAccent} strokeWidth="2.5" />
                  </g>

                  {/* Right Metal Fork Slide */}
                  <g transform="translate(300, 190) rotate(15)">
                    <rect x="-4" y="0" width="8" height="60" rx="3" fill="#3D3D3D" />
                    <rect x="-6" y="50" width="12" height="15" rx="2" fill="#1C1C1C" />
                    {/* Golden cable wire curl */}
                    <path d="M 0,10 Q 25,30 -5,50" fill="none" stroke={currentTheme.headphoneAccent} strokeWidth="2.5" />
                  </g>

                  {/* Left Ear Cushion (Tactile Square Profile inspired by Marshall) */}
                  <g transform="translate(70, 210) rotate(-10)">
                    {/* Main cup body */}
                    <rect x="-35" y="-10" width="70" height="90" rx="18" fill="#0D0D0D" stroke="#252525" strokeWidth="2" />
                    {/* Outer frame matching selected theme accent */}
                    <rect x="-30" y="-5" width="60" height="80" rx="14" fill={currentTheme.headphoneCup} />
                    {/* Leather texture lines inside */}
                    <line x1="-20" y1="20" x2="-20" y2="50" stroke="#121212" strokeWidth="2" />
                    <line x1="20" y1="20" x2="20" y2="50" stroke="#121212" strokeWidth="2" />
                    {/* Gold Logo script placeholder in ear cup */}
                    <text x="0" y="40" fill={currentTheme.headphoneAccent} fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1" fontFamily="serif">
                      KRONOS
                    </text>
                  </g>

                  {/* Right Ear Cushion (Tactile Square Profile) */}
                  <g transform="translate(330, 210) rotate(10)">
                    {/* Main cup body */}
                    <rect x="-35" y="-10" width="70" height="90" rx="18" fill="#0D0D0D" stroke="#252525" strokeWidth="2" />
                    {/* Outer frame matching selected theme accent */}
                    <rect x="-30" y="-5" width="60" height="80" rx="14" fill={currentTheme.headphoneCup} />
                    {/* Leather texture lines inside */}
                    <line x1="-20" y1="20" x2="-20" y2="50" stroke="#121212" strokeWidth="2" />
                    <line x1="20" y1="20" x2="20" y2="50" stroke="#121212" strokeWidth="2" />
                    {/* Gold Logo script placeholder */}
                    <text x="0" y="40" fill={currentTheme.headphoneAccent} fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1" fontFamily="serif">
                      KRONOS
                    </text>

                    {/* Highly-visible, iconic Gold Tactile Multi-Directional Knob */}
                    <circle cx="20" cy="55" r="7" fill={currentTheme.headphoneAccent} stroke="#1A1A1A" strokeWidth="1.5" className="cursor-pointer hover:scale-125 transition-transform" />
                    <circle cx="20" cy="55" r="3" fill="#1A1A1A" />
                  </g>
                </svg>

                {/* Live Preset indicator overlay */}
                <div className="absolute bottom-4 left-4 bg-black/80 border border-neutral-800 text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  PRESET: {soundPreset}
                </div>

                {/* Color Name Tag */}
                <div className="absolute top-4 right-4 bg-neutral-900/90 border border-neutral-800 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded text-neutral-400">
                  {currentTheme.name}
                </div>
              </div>

              {/* Interactive Audio Player Bar underneath Headphone Graphic */}
              <div className="mt-6 bg-[#0E0E0E] border border-neutral-900 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <button 
                    onClick={() => {
                      setIsPlaying(!isPlaying);
                      showToast(isPlaying ? "Acoustic Sample Paused" : "Acoustic Sample Commenced");
                    }}
                    className={`w-11 h-11 rounded-lg ${isPlaying ? 'bg-[#dfba6b] text-black' : 'bg-neutral-900 text-white border border-neutral-800 hover:border-neutral-700'} flex items-center justify-center transition-all`}
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current translate-x-0.5" />}
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-white tracking-wide truncate">Acoustic Resonance (Live Demo)</span>
                      <span className="text-[10px] font-mono text-neutral-500">2:45 / 4:12</span>
                    </div>
                    {/* Simulated track timeline slider */}
                    <div className="w-full bg-neutral-900 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-[#dfba6b] h-full transition-all duration-300"
                        style={{ width: `${trackProgress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-neutral-500" />
                    <span className="text-[10px] font-mono text-neutral-400 w-6 text-right">{volume}%</span>
                  </div>
                </div>

                {/* Equalizer Profile Quick Selectors */}
                <div className="grid grid-cols-4 gap-2 pt-1.5">
                  {[
                    { id: 'signature', label: 'Signature' },
                    { id: 'bass', label: 'Bass Boost' },
                    { id: 'monitor', label: 'Studio' },
                    { id: 'stage', label: 'Live' }
                  ].map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setSoundPreset(preset.id);
                        showToast(`Equalizer changed to ${preset.label}`);
                      }}
                      className={`py-1.5 px-1 rounded-md text-[9px] uppercase tracking-wider font-bold transition-all border ${
                        soundPreset === preset.id 
                          ? 'bg-[#dfba6b]/10 text-[#dfba6b] border-[#dfba6b]/35' 
                          : 'bg-neutral-950 text-neutral-500 border-transparent hover:text-neutral-300'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Float Element: Master Control Highlight */}
            <div className="absolute -bottom-6 -left-4 xl:-left-12 bg-[#161616]/95 border border-neutral-800/80 rounded-2xl p-4 shadow-xl max-w-[210px] hidden md:block backdrop-blur-md">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 rounded-lg bg-black text-[#dfba6b] border border-neutral-800">
                  <Sliders className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Dynamic ANC</h4>
                  <span className="text-[9px] font-mono text-[#dfba6b] uppercase">Activated</span>
                </div>
              </div>
              <p className="text-[10px] text-neutral-400 leading-normal">
                Triple-mic system isolates high-frequency background disruptions dynamically.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Interactive Experience Section (Live Interactive Sandbox) */}
      <section id="experience" className="py-24 border-t border-neutral-900/60 bg-gradient-to-b from-[#0A0A0A] to-[#121212] px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#dfba6b] text-xs font-bold uppercase tracking-[0.2em]">The Control Sandbox</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
              Tactile Mechanics, Simulated
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              At the core of the Kronos IV is the custom milled brass multi-directional control knob. Click the simulator below to experience pure, uninterrupted device command.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive Controller Simulator Panel */}
            <div className="lg:col-span-7 bg-[#161616] border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#dfba6b]/5 rounded-full blur-2xl"></div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#dfba6b]">TACTILE FEEDBACK CONSOLE</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-[#dfba6b] text-[8px] font-mono uppercase tracking-widest">Interactive</span>
                </div>
                <h3 className="text-xl font-bold uppercase text-white tracking-wide">The Signature Brass Joystick</h3>
                <p className="text-xs text-neutral-400 max-w-md">
                  Click the directional buttons surrounding the brass joystick below to manipulate volume, tracks, and play-states, mimicking the mechanical physical response of our proprietary control unit.
                </p>
              </div>

              {/* Interactive Virtual Joystick Controller */}
              <div className="flex flex-col items-center justify-center my-6 relative">
                
                {/* Active Indicator Board */}
                <div className="mb-6 h-8 text-center">
                  {activeKnobDirection && (
                    <div className="text-xs font-mono uppercase tracking-widest text-[#dfba6b] bg-[#dfba6b]/10 border border-[#dfba6b]/30 px-3 py-1 rounded-md animate-pulse">
                      INPUT REGISTERED: {activeKnobDirection.toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Joystick Visual Matrix */}
                <div className="relative w-64 h-64 bg-black rounded-full border-4 border-neutral-900 shadow-2xl flex items-center justify-center">
                  
                  {/* Subtle directional text labels inside circular shell */}
                  <span className="absolute top-4 text-[9px] font-mono uppercase tracking-widest text-neutral-600">Vol +</span>
                  <span className="absolute bottom-4 text-[9px] font-mono uppercase tracking-widest text-neutral-600">Vol -</span>
                  <span className="absolute left-4 text-[9px] font-mono uppercase tracking-widest text-neutral-600">Prev</span>
                  <span className="absolute right-4 text-[9px] font-mono uppercase tracking-widest text-neutral-600">Next</span>

                  {/* Circular outer track */}
                  <div className="absolute w-44 h-44 rounded-full border border-neutral-800/40 border-dashed"></div>

                  {/* Up / Volume Up Button */}
                  <button 
                    onClick={() => handleKnobAction('up')}
                    className={`absolute top-10 w-12 h-10 rounded-lg flex items-center justify-center text-neutral-500 hover:text-[#dfba6b] hover:bg-neutral-900 transition-all ${activeKnobDirection === 'up' ? 'text-[#dfba6b] bg-neutral-900 scale-95' : ''}`}
                    title="Volume Up"
                  >
                    <ChevronLeft className="w-5 h-5 rotate-90" />
                  </button>

                  {/* Down / Volume Down Button */}
                  <button 
                    onClick={() => handleKnobAction('down')}
                    className={`absolute bottom-10 w-12 h-10 rounded-lg flex items-center justify-center text-neutral-500 hover:text-[#dfba6b] hover:bg-neutral-900 transition-all ${activeKnobDirection === 'down' ? 'text-[#dfba6b] bg-neutral-900 scale-95' : ''}`}
                    title="Volume Down"
                  >
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </button>

                  {/* Left / Previous Track Button */}
                  <button 
                    onClick={() => handleKnobAction('left')}
                    className={`absolute left-10 w-10 h-12 rounded-lg flex items-center justify-center text-neutral-500 hover:text-[#dfba6b] hover:bg-neutral-900 transition-all ${activeKnobDirection === 'left' ? 'text-[#dfba6b] bg-neutral-900 scale-95' : ''}`}
                    title="Previous Track"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Right / Next Track Button */}
                  <button 
                    onClick={() => handleKnobAction('right')}
                    className={`absolute right-10 w-10 h-12 rounded-lg flex items-center justify-center text-neutral-500 hover:text-[#dfba6b] hover:bg-neutral-900 transition-all ${activeKnobDirection === 'right' ? 'text-[#dfba6b] bg-neutral-900 scale-95' : ''}`}
                    title="Next Track"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Physical Brass Joystick Knob Centerpiece */}
                  <button 
                    onClick={() => handleKnobAction('center')}
                    className={`w-20 h-20 rounded-full bg-gradient-to-r from-yellow-600 via-[#dfba6b] to-yellow-700 p-1 shadow-2xl transform active:scale-95 transition-all flex items-center justify-center z-20 ${
                      activeKnobDirection === 'center' ? 'ring-4 ring-[#dfba6b]/40' : ''
                    }`}
                    title="Play / Pause"
                  >
                    <div className="w-full h-full rounded-full bg-black flex flex-col items-center justify-center relative overflow-hidden group">
                      {/* Knurled metal pattern visual using absolute borders */}
                      <div className="absolute inset-2 rounded-full border border-[#dfba6b]/20 bg-gradient-to-tr from-neutral-900 to-neutral-950 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-600 to-[#dfba6b] flex items-center justify-center">
                          <span className="w-2.5 h-2.5 rounded-full bg-neutral-950"></span>
                        </div>
                      </div>
                    </div>
                  </button>

                </div>

              </div>

              {/* Micro Explanation */}
              <div className="text-center text-[10px] uppercase tracking-widest text-neutral-500 mt-4">
                Click Center to Toggle Playback / Click Edges for Technical Parameters
              </div>

            </div>

            {/* Equalizer Sound Waves Visualizer Section */}
            <div className="lg:col-span-5 bg-[#161616] border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#dfba6b]">ACOUSTIC PROFILE LAB</span>
                  <span className="text-xs text-neutral-400 font-mono">Hi-Res Engine</span>
                </div>

                <h3 className="text-xl font-bold uppercase text-white tracking-wide">Dynamic Preset Tuning</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Switch presets below to observe custom-tailored sonic architectures. Each setting recalculates frequency response vectors in real-time.
                </p>

                {/* Animated graphic representing current frequency */}
                <div className="h-40 w-full bg-black rounded-2xl border border-neutral-900 p-4 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-10">
                    <div className="border-r border-b border-neutral-800"></div>
                    <div className="border-r border-b border-neutral-800"></div>
                    <div className="border-r border-b border-neutral-800"></div>
                    <div className="border-r border-b border-neutral-800"></div>
                    <div className="border-r border-b border-neutral-800"></div>
                    <div className="border-r border-b border-neutral-800"></div>
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-mono text-neutral-600 z-10">
                    <span>dB +12</span>
                    <span>100Hz</span>
                    <span>1kHz</span>
                    <span>10kHz</span>
                    <span>20kHz</span>
                  </div>

                  {/* Real-time calculated sound waves svg animation */}
                  <div className="h-24 w-full flex items-center justify-center z-10">
                    <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="waveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#dfba6b" stopOpacity="0.2" />
                          <stop offset="50%" stopColor="#dfba6b" stopOpacity="1" />
                          <stop offset="100%" stopColor="#dfba6b" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      
                      {/* Base static wave line */}
                      <path 
                        d="M 0,50 Q 50,50 100,50 T 200,50" 
                        fill="none" 
                        stroke="#1A1A1A" 
                        strokeWidth="1.5" 
                      />

                      {/* Animated Active Custom Wave */}
                      <path 
                        d={soundWavePaths[soundPreset]} 
                        fill="none" 
                        stroke="url(#waveGlow)" 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                        className={`transition-all duration-700 ease-out ${isPlaying ? 'animate-pulse' : ''}`}
                      />
                    </svg>
                  </div>

                  <div className="flex justify-between text-[9px] font-mono text-neutral-500 z-10">
                    <span className="text-[#dfba6b]">PRESET: {soundPreset.toUpperCase()}</span>
                    <span>THD &lt; 0.08%</span>
                  </div>
                </div>

                {/* Technical Preset Description */}
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900/50 text-xs">
                  {soundPreset === 'signature' && (
                    <p className="text-neutral-400 leading-normal">
                      <strong className="text-white block mb-1">Kronos Original Balance</strong> 
                      Tailored specifically for modern vinyl recordings. Emphasizes warm low-mids and leaves high-end vocals highly organic.
                    </p>
                  )}
                  {soundPreset === 'bass' && (
                    <p className="text-neutral-400 leading-normal">
                      <strong className="text-white block mb-1">Sub-Frequency Resonance</strong> 
                      Pushes the 40mm driver diaphragm excursion to its safely regulated mechanical limit for physical sub-bass rumble.
                    </p>
                  )}
                  {soundPreset === 'monitor' && (
                    <p className="text-neutral-400 leading-normal">
                      <strong className="text-white block mb-1">Reference Flat Monitoring</strong> 
                      De-energizes colorized frequency curves. Perfect for clean, surgical vocal tracking, production, and video editing work.
                    </p>
                  )}
                  {soundPreset === 'stage' && (
                    <p className="text-neutral-400 leading-normal">
                      <strong className="text-white block mb-1">Three-Dimensional Stage</strong> 
                      Widens phase angles, generating a spacious acoustic simulation reminiscent of open-back headphone designs.
                    </p>
                  )}
                </div>

              </div>

              {/* Presets Action Panel */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-neutral-900 mt-6">
                <button 
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                    showToast(isPlaying ? "Testing Concluded" : "Testing Initiated");
                  }}
                  className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest text-center border transition-all ${
                    isPlaying 
                      ? 'bg-[#dfba6b] text-black border-transparent' 
                      : 'bg-neutral-950 text-white border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  {isPlaying ? 'Pause Generator' : 'Fire Generator'}
                </button>

                <button 
                  onClick={() => {
                    setSoundPreset('signature');
                    showToast("Equalizer reset to Kronos Signature");
                  }}
                  className="py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white bg-neutral-900 border border-transparent hover:border-neutral-800 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset System
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Bento Grid Technical Specification Section */}
      <section id="bento-specs" className="py-24 bg-[#0A0A0A] px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-4">
              <span className="text-[#dfba6b] text-xs font-bold uppercase tracking-[0.2em]">Engineering Integrity</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
                Detailed Spec Sheet
              </h2>
            </div>
            <p className="text-neutral-500 text-sm max-w-sm">
              We design with strict parameters. Every milligram of weight and micro-millimeter of chassis material is thoroughly accounted for.
            </p>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            
            {/* Bento Card 1: Main Sound Spec Container (Highly visual) */}
            <div className="lg:col-span-4 bg-[#121212] border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">SECTION 01 / SOUND</span>
                  <Radio className="w-4 h-4 text-[#dfba6b]" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white uppercase mb-2">Acoustic Driver Density</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  Equipped with a custom developed 40mm dome diaphragm constructed from dual-layer polymers for rapid mechanical responsiveness.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-900/60 font-mono text-xs">
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">Frequency Response</span>
                  <span className="text-white font-bold">20Hz - 20,000Hz</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">Impedance</span>
                  <span className="text-white font-bold">32 Ohms</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">Driver Sensitivity</span>
                  <span className="text-white font-bold">99 dB SPL</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">THD Distortion</span>
                  <span className="text-[#dfba6b] font-bold">&lt;0.08% @ 1kHz</span>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Interactive Battery Slider (The "Surprise" Specification Module) */}
            <div className="lg:col-span-5 bg-[#121212] border border-[#dfba6b]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#dfba6b]/30 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#dfba6b]/5 rounded-full blur-xl"></div>
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">SECTION 02 / ACCU</span>
                  <Battery className="w-4 h-4 text-[#dfba6b]" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white uppercase mb-1">Unrivaled Power reserve</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Drag the simulation slider to calculate playback times based on custom charging schedules.
                </p>
              </div>

              {/* Interactive Charging Calculator Widget */}
              <div className="my-6 p-4 bg-black rounded-xl border border-neutral-900 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">Charging Duration</span>
                  <span className="text-xs font-mono font-bold text-white">{chargeTime} Hour{chargeTime > 1 ? 's' : ''}</span>
                </div>

                <input 
                  type="range" 
                  min="0.5" 
                  max="3" 
                  step="0.5"
                  value={chargeTime} 
                  onChange={(e) => setChargeTime(parseFloat(e.target.value))}
                  className="w-full accent-[#dfba6b] bg-neutral-800 rounded-lg appearance-none h-1.5 cursor-pointer"
                />

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-900/60 text-center">
                  <div>
                    <span className="block text-[8px] uppercase tracking-widest text-neutral-500 mb-0.5">EST. PLAYBACK</span>
                    <span className="text-xl font-extrabold text-[#dfba6b]">
                      {chargeTime === 3 ? '80' : Math.round(chargeTime * 26.6)} Hours
                    </span>
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase tracking-widest text-neutral-500 mb-0.5">USB-C POWER SPEC</span>
                    <span className="text-sm font-bold text-white">5V DC / 1.5A</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-[10px] text-neutral-500 uppercase tracking-widest font-semibold border-t border-neutral-900/60 pt-4">
                <Zap className="w-4 h-4 text-[#dfba6b]" />
                <span>15 Min charge provides 15 Hrs playback</span>
              </div>
            </div>

            {/* Bento Card 3: Ergonmic Space Folding */}
            <div className="lg:col-span-3 bg-[#121212] border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">SECTION 03 / PORT</span>
                  <Maximize2 className="w-4 h-4 text-neutral-400" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white uppercase mb-2">Ergonomic Collapsibility</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Our custom multi-directional metal hinges compress the entire headphone footprint into a tight spherical travel state.
                </p>
              </div>

              {/* Simple stylized SVG outline demonstrating collapsed form */}
              <div className="h-28 w-full bg-[#0d0d0d] rounded-xl border border-neutral-950 flex items-center justify-center p-2 relative my-4">
                <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-40">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#dfba6b" strokeWidth="2" strokeDasharray="3,3" />
                  <path d="M35,45 Q50,30 65,45 Q50,60 35,45" fill="none" stroke="#dfba6b" strokeWidth="3" />
                  <path d="M25,50 L75,50" stroke="#222" strokeWidth="1" />
                </svg>
                <div className="absolute bottom-2 right-2 text-[8px] font-mono tracking-widest uppercase text-[#dfba6b]">
                  95mm Fold
                </div>
              </div>

              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Includes ballistic nylon case</span>
            </div>

            {/* Bento Card 4: Pure Luxury Knobs & Mechanics */}
            <div className="lg:col-span-4 bg-[#121212] border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">SECTION 04 / GEAR</span>
                  <SlidersHorizontal className="w-4 h-4 text-[#dfba6b]" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white uppercase mb-2">Physical Materiality</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  We refuse cheap plastics. The physical framework incorporates spring-tempered stainless steel, reinforced glass fibers, and pure raw brass dials.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-neutral-900/60 text-[10px] font-mono uppercase text-neutral-400">
                <div className="p-2 bg-neutral-950 rounded border border-neutral-900/80">
                  <span className="block text-[#dfba6b] font-bold mb-0.5">385g</span> WEIGHT SCALE
                </div>
                <div className="p-2 bg-neutral-950 rounded border border-neutral-900/80">
                  <span className="block text-[#dfba6b] font-bold mb-0.5">VEGAN LTHR</span> HEADBAND
                </div>
              </div>
            </div>

            {/* Bento Card 5: Wireless Connectivity details */}
            <div className="lg:col-span-8 bg-[#121212] border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-6 md:hidden">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">SECTION 05 / LINK</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white uppercase mb-2">Ultrawide Bluetooth Connection</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Equipped with advanced Bluetooth 5.2. Designed to seamlessly switch between multiple hosts, keeping latency down to negligible professional monitoring thresholds.
                  </p>
                  <ul className="space-y-2 text-xs text-neutral-300 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dfba6b]"></span> Dual Host Multipoint Stream
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dfba6b]"></span> LC3 Low Complexity Communication
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dfba6b]"></span> 15-Meter interference-free radius
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0c0c0c] rounded-xl border border-neutral-900 p-4 flex flex-col justify-between">
                  <div className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 mb-2">LATENCY CALIBRATION MATRIX</div>
                  
                  {/* Visual graph metric simulating latency levels */}
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[9px] font-mono text-neutral-400 mb-1">
                        <span>SBC Standard Protocol</span>
                        <span>180ms</span>
                      </div>
                      <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-red-500/80 h-full w-[85%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[9px] font-mono text-neutral-400 mb-1">
                        <span>AAC Audio Standard</span>
                        <span>120ms</span>
                      </div>
                      <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500/80 h-full w-[60%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[9px] font-mono text-[#dfba6b] mb-1">
                        <span>Kronos aptX Lossless</span>
                        <span className="font-bold">42ms</span>
                      </div>
                      <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#dfba6b] h-full w-[22%]"></div>
                      </div>
                    </div>
                  </div>

                  <span className="text-[8px] font-mono text-neutral-600 block mt-4">Calculated over steady 2.4GHz testing environments.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive 3D Colorway Customizer & Lab */}
      <section id="customizer" className="py-24 border-y border-neutral-900/60 bg-gradient-to-b from-[#0A0A0A] to-[#121212] px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Customizer Left: Big Interactive Previewer */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              
              <div className="w-full max-w-[480px] bg-[#161616] border border-neutral-800 rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-hidden flex flex-col justify-between">
                
                {/* Tech specifications of current selected color */}
                <div className="flex items-center justify-between mb-4 text-[10px] font-mono uppercase text-neutral-400">
                  <span>Colorway Preview</span>
                  <span className="text-[#dfba6b]">{currentTheme.name}</span>
                </div>

                <div className="h-[260px] flex items-center justify-center relative overflow-hidden bg-[#0d0d0d] rounded-2xl border border-neutral-950 py-4 mb-6">
                  {/* Backdrop lighting */}
                  <div className="absolute w-60 h-60 rounded-full blur-[70px] opacity-20 transition-all duration-700" 
                       style={{ backgroundColor: currentTheme.accent }}></div>

                  {/* Dynamic Headphone SVG */}
                  <svg viewBox="0 0 400 400" className="w-56 h-56 z-10 transition-all duration-700 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                    {/* Arch */}
                    <path d="M 100,200 A 100,100 0 0,1 300,200" fill="none" stroke="#222" strokeWidth="12" />
                    <path d="M 120,180 A 90,90 0 0,1 280,180" fill="none" stroke={currentTheme.headphoneBase} strokeWidth="18" />
                    {/* Stitching */}
                    <path d="M 125,178 A 88,88 0 0,1 275,178" fill="none" stroke={currentTheme.headphoneAccent} strokeWidth="1" strokeDasharray="3,3" />

                    {/* Suspension metal slides */}
                    <line x1="105" y1="185" x2="105" y2="245" stroke="#3D3D3D" strokeWidth="6" />
                    <line x1="295" y1="185" x2="295" y2="245" stroke="#3D3D3D" strokeWidth="6" />

                    {/* Left Cup */}
                    <g transform="translate(75, 215) rotate(-10)">
                      <rect x="-35" y="-10" width="70" height="90" rx="16" fill="#0A0A0A" stroke="#1F1F1F" strokeWidth="2" />
                      <rect x="-30" y="-5" width="60" height="80" rx="12" fill={currentTheme.headphoneCup} />
                      <text x="0" y="42" fill={currentTheme.headphoneAccent} fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="1" fontFamily="serif">KRONOS</text>
                    </g>

                    {/* Right Cup */}
                    <g transform="translate(325, 215) rotate(10)">
                      <rect x="-35" y="-10" width="70" height="90" rx="16" fill="#0A0A0A" stroke="#1F1F1F" strokeWidth="2" />
                      <rect x="-30" y="-5" width="60" height="80" rx="12" fill={currentTheme.headphoneCup} />
                      <text x="0" y="42" fill={currentTheme.headphoneAccent} fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="1" fontFamily="serif">KRONOS</text>
                      {/* Brass button */}
                      <circle cx="18" cy="52" r="5" fill={currentTheme.headphoneAccent} />
                    </g>
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-2 font-mono text-[9px] uppercase text-neutral-400">
                  <div className="bg-neutral-950 p-2.5 rounded border border-neutral-900/60 text-center">
                    <span className="block font-bold text-white mb-0.5">UPPER</span> Leatherette
                  </div>
                  <div className="bg-neutral-950 p-2.5 rounded border border-neutral-900/60 text-center">
                    <span className="block font-bold text-white mb-0.5">METALS</span> Pure Brass
                  </div>
                  <div className="bg-neutral-950 p-2.5 rounded border border-neutral-900/60 text-center">
                    <span className="block font-bold text-white mb-0.5">PLATES</span> Poly-Carbon
                  </div>
                </div>

              </div>

            </div>

            {/* Customizer Right: Interaction Options */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-[#dfba6b] text-xs font-bold uppercase tracking-[0.2em]">Build Customization</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
                  Define Your Aesthetic DNA
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Choose from our core designer templates. Each configuration represents a distinct stylistic lineage, optimized for different desktop environments and fashion genres.
                </p>
              </div>

              {/* Theme Selector Buttons */}
              <div className="space-y-4">
                {[
                  {
                    id: 'obsidian',
                    name: 'Midnight Obsidian',
                    desc: 'The original signature. Stealthy matte black textured leather coupled with premium hand-milled raw brass dials.',
                    badge: 'Signature Theme',
                    accentColor: '#dfba6b'
                  },
                  {
                    id: 'alabaster',
                    name: 'Desert Alabaster',
                    desc: 'A gorgeous, warm-tone organic contrast. Soft cream leatherette highlighted by brushed rose-gold/copper metallic suspensions.',
                    badge: 'Aesthetic Edition',
                    accentColor: '#C59B6D'
                  },
                  {
                    id: 'forest',
                    name: 'Forest Stealth',
                    desc: 'Tactical and utilitarian. Matte olive green cups matched with antique bronze mechanics, evoking vintage military radios.',
                    badge: 'Tactical Release',
                    accentColor: '#b5a172'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedColor(item.id);
                      showToast(`Switched color palette to ${item.name}`);
                    }}
                    className={`w-full p-5 rounded-2xl text-left border transition-all duration-300 flex gap-4 ${
                      selectedColor === item.id 
                        ? 'bg-[#161616] border-[#dfba6b]/60 shadow-lg' 
                        : 'bg-[#121212]/40 border-neutral-900 hover:border-neutral-800'
                    }`}
                  >
                    {/* Circle Color Indicator */}
                    <div className="mt-1">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center" style={{ backgroundColor: item.accentColor }}>
                        {selectedColor === item.id && <Check className="w-3 h-3 text-black font-bold" />}
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">{item.name}</h4>
                        <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-500">{item.badge}</span>
                      </div>
                      <p className="text-xs text-neutral-400 leading-normal">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Dynamic Engraving Input Sandbox (Tactile touch) */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-neutral-950 to-neutral-900 border border-neutral-800 space-y-3">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#dfba6b]">
                  Personalize Your Headband / Laser Engraving (Free)
                </label>
                <input 
                  type="text" 
                  maxLength={16}
                  placeholder="e.g. S.KRONOS.IV"
                  value={customEngraving} 
                  onChange={(e) => setCustomEngraving(e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 focus:border-[#dfba6b] text-sm text-white focus:outline-none transition-all uppercase font-mono tracking-widest"
                />
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500">
                  <span>Maximum 16 characters</span>
                  <span>{customEngraving.length}/16 USED</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Engineering Deep-Dive Detail Section */}
      <section id="engineering" className="py-24 bg-[#0A0A0A] px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side: Exploded Technical Diagram Style Visuals */}
            <div className="space-y-6 order-2 lg:order-1">
              
              <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                  <div>
                    <span className="text-[#dfba6b] text-[10px] font-mono uppercase tracking-wider">Acoustic Patent Schema</span>
                    <h3 className="text-lg font-bold uppercase text-white">Resonance Chamber Anatomy</h3>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">FIG.09</span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900/60 flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-[#dfba6b]/10 text-[#dfba6b] flex items-center justify-center text-[10px] font-mono font-bold shrink-0 border border-[#dfba6b]/20">01</span>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-wider mb-1">Milled Brass Stabilizer Ring</h4>
                      <p className="text-neutral-400 leading-normal">
                        Anchors the transducer capsule physically, removing any structural housing resonance that causes harmonic bass smear.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900/60 flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-[#dfba6b]/10 text-[#dfba6b] flex items-center justify-center text-[10px] font-mono font-bold shrink-0 border border-[#dfba6b]/20">02</span>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-wider mb-1">Acoustic Tuning Foam Matrix</h4>
                      <p className="text-neutral-400 leading-normal">
                        Custom-molded polyurethane foam inserts absorb high-frequency internal reflections to guarantee linear driver performance.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900/60 flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-[#dfba6b]/10 text-[#dfba6b] flex items-center justify-center text-[10px] font-mono font-bold shrink-0 border border-[#dfba6b]/20">03</span>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-wider mb-1">Micro-Vented Bass Port</h4>
                      <p className="text-neutral-400 leading-normal">
                        Precisely dimensioned exit port relieves internal pressure on the driver, promoting faster transient response and deeper low-end drop.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right side: High Impact Title & Technical descriptions */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <span className="text-[#dfba6b] text-xs font-bold uppercase tracking-[0.2em]">Surgical Acoustic Execution</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white leading-tight">
                  Engineered to Disappear
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  An audiophile design should add absolutely no coloration of its own. It is an instrument constructed purely to frame and spotlight the artist's original intention.
                </p>
              </div>

              {/* Specs Icons List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm uppercase tracking-wide">
                    <Compass className="w-4 h-4 text-[#dfba6b]" />
                    <span>3D Soundstage Imaging</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Angled transducers direct sound wave propagation naturally towards your outer ear canal for organic spatial depth.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm uppercase tracking-wide">
                    <Award className="w-4 h-4 text-[#dfba6b]" />
                    <span>Audiophile Craftsmanship</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Individually tested in sealed laboratory sound chambers, assuring total channel-matching alignment within 0.5dB limits.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm uppercase tracking-wide">
                    <Headphones className="w-4 h-4 text-[#dfba6b]" />
                    <span>Vegan Leather Comfort</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Custom breathable earcups ensure heat is vented during extended sessions, maintaining ideal tactile clamping force.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm uppercase tracking-wide">
                    <Music className="w-4 h-4 text-[#dfba6b]" />
                    <span>Hi-Res Audio Wireless</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Streams digital tracks up to 24-bit/96kHz natively over advanced loss-free wireless compression protocols.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Interactive Reviewer Carousel */}
      <section id="reviews" className="py-24 bg-gradient-to-b from-[#121212] to-[#0A0A0A] border-t border-neutral-900/60 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#dfba6b] text-xs font-bold uppercase tracking-[0.2em]">PRO AUDIO COMMENDATIONS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
              Sought-After By Audio Purists
            </h2>
          </div>

          {/* Testimonial Active Slider Box */}
          <div className="max-w-4xl mx-auto bg-[#161616]/90 border border-neutral-800 p-8 sm:p-12 rounded-3xl relative shadow-2xl overflow-hidden">
            
            {/* Top decorative element */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#dfba6b] to-transparent"></div>
            
            <div className="absolute top-6 right-6 text-neutral-700 text-6xl font-serif select-none pointer-events-none">
              “
            </div>

            <div className="space-y-6">
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#dfba6b]">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-xl text-neutral-200 font-light leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between gap-4 pt-6 border-t border-neutral-900">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-mono">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-neutral-600">
                  {testimonials[currentTestimonial].date}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-end gap-3 mt-4">
                <button
                  onClick={() => {
                    setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
                  }}
                  className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
                  }}
                  className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

          {/* Quick Stats Grid underneath */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 text-center">
            <div className="p-5 bg-neutral-950/60 border border-neutral-900 rounded-xl">
              <span className="block text-2xl font-extrabold text-[#dfba6b] mb-1">98%</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">CUSTOMER SATISFACTION</span>
            </div>
            <div className="p-5 bg-neutral-950/60 border border-neutral-900 rounded-xl">
              <span className="block text-2xl font-extrabold text-[#dfba6b] mb-1">0.5dB</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">CHANNEL ALIGNMENT TOLERANCE</span>
            </div>
            <div className="p-5 bg-neutral-950/60 border border-neutral-900 rounded-xl">
              <span className="block text-2xl font-extrabold text-[#dfba6b] mb-1">3 YEARS</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">MANUFACTURING WARRANTY</span>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Checkout / Order Configuration Section */}
      <section id="preorder" className="py-24 bg-[#0A0A0A] px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#dfba6b]/3 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Form Left: User Configuration Input Parameters */}
            <div className="lg:col-span-7 bg-[#121212] border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-8 flex flex-col justify-between">
              
              <div className="space-y-4">
                <span className="text-[#dfba6b] text-xs font-mono uppercase tracking-[0.2em]">Secure Configuration</span>
                <h2 className="text-3xl font-extrabold uppercase text-white tracking-tight">
                  Configure Your Delivery
                </h2>
                <p className="text-neutral-400 text-xs sm:text-sm">
                  Each Kronos IV headphone is customized, calibrated, and boxed in our specialized laboratory before dispatch. Secure your unit below.
                </p>
              </div>

              {/* Dynamic Addon Accessories Checkboxes */}
              <div className="space-y-4">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-neutral-300">Choose Optional Addons</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  {/* Case (Included free) */}
                  <div className="p-4 rounded-xl bg-neutral-950 border border-[#dfba6b]/30 flex flex-col justify-between h-32 text-left relative cursor-not-allowed">
                    <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-[#dfba6b]/10 text-[#dfba6b] text-[8px] font-bold uppercase">FREE</span>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Storage Case</h4>
                      <p className="text-[10px] text-neutral-500 mt-1 leading-snug">Hard-shell storage protection bag.</p>
                    </div>
                    <span className="text-xs font-bold text-[#dfba6b] mt-2 font-mono">INCLUDED</span>
                  </div>

                  {/* Gold Braided Cable */}
                  <button 
                    onClick={() => {
                      setAccessories(prev => ({ ...prev, goldCable: !prev.goldCable }));
                      showToast(accessories.goldCable ? "Premium Braided Cable removed" : "Premium Gold-Braided Cable selected");
                    }}
                    className={`p-4 rounded-xl text-left h-32 flex flex-col justify-between transition-all border ${
                      accessories.goldCable 
                        ? 'bg-neutral-950 border-[#dfba6b]/60' 
                        : 'bg-[#161616] border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex justify-between items-start w-full">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Audiophile Cord</h4>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${accessories.goldCable ? 'border-[#dfba6b] bg-[#dfba6b]' : 'border-neutral-700'}`}>
                        {accessories.goldCable && <Check className="w-2.5 h-2.5 text-black font-bold" />}
                      </div>
                    </div>
                    <p className="text-[10px] text-neutral-500 mt-1 leading-snug">2-meter gold-braided copper coiled cable.</p>
                    <span className="text-xs font-bold text-white mt-2 font-mono">+$35</span>
                  </button>

                  {/* Studio Aluminum Stand */}
                  <button 
                    onClick={() => {
                      setAccessories(prev => ({ ...prev, stand: !prev.stand }));
                      showToast(accessories.stand ? "Studio Headphone Stand removed" : "Studio Headphone Stand selected");
                    }}
                    className={`p-4 rounded-xl text-left h-32 flex flex-col justify-between transition-all border ${
                      accessories.stand 
                        ? 'bg-neutral-950 border-[#dfba6b]/60' 
                        : 'bg-[#161616] border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex justify-between items-start w-full">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Acoustic Stand</h4>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${accessories.stand ? 'border-[#dfba6b] bg-[#dfba6b]' : 'border-neutral-700'}`}>
                        {accessories.stand && <Check className="w-2.5 h-2.5 text-black font-bold" />}
                      </div>
                    </div>
                    <p className="text-[10px] text-neutral-500 mt-1 leading-snug">Solid brushed-aluminum desktop headphone tower.</p>
                    <span className="text-xs font-bold text-white mt-2 font-mono">+$55</span>
                  </button>

                </div>
              </div>

              {/* Trust badges footer */}
              <div className="grid grid-cols-3 gap-2 text-center text-neutral-400 text-[10px] font-mono uppercase pt-4 border-t border-neutral-900/60">
                <div className="flex items-center justify-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#dfba6b]" />
                  <span>Secure Pay</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#dfba6b]" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#dfba6b]" />
                  <span>Calibrated</span>
                </div>
              </div>

            </div>

            {/* Form Right: Live Invoice Visualizer & Instant Purchase Button */}
            <div className="lg:col-span-5 bg-[#161616] border border-[#dfba6b]/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#dfba6b]/5 rounded-full blur-xl"></div>

              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">Acoustic Invoice Preview</span>
                  <span className="text-xs font-mono text-[#dfba6b]">VERIFIED</span>
                </div>

                {/* Simulated Invoice Items */}
                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Core build item */}
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="block font-bold text-white uppercase tracking-wider">KRONOS IV Wireless</span>
                      <span className="text-[10px] text-neutral-500 block">Colorway: {colors[selectedColor].name}</span>
                    </div>
                    <span className="text-white font-bold">${basePrice}.00</span>
                  </div>

                  {/* Engraving detail */}
                  {customEngraving && (
                    <div className="flex justify-between items-center text-[10px] text-[#dfba6b] bg-[#dfba6b]/5 border border-[#dfba6b]/20 px-2.5 py-1.5 rounded">
                      <span>Laser Engraving Engraved:</span>
                      <span className="font-bold font-mono tracking-widest">{customEngraving}</span>
                    </div>
                  )}

                  {/* Travel case */}
                  <div className="flex justify-between items-center text-neutral-400">
                    <span>Premium Travel Case Addon</span>
                    <span className="text-[#dfba6b] text-[10px] font-bold uppercase">INCLUDED</span>
                  </div>

                  {/* Coiled cable addon */}
                  {accessories.goldCable && (
                    <div className="flex justify-between items-center text-neutral-300">
                      <span>2m Coiled Brass Audio Cable</span>
                      <span className="font-bold text-white">$35.00</span>
                    </div>
                  )}

                  {/* Aluminum stand addon */}
                  {accessories.stand && (
                    <div className="flex justify-between items-center text-neutral-300">
                      <span>Aluminum Headphone Desktop Stand</span>
                      <span className="font-bold text-white">$55.00</span>
                    </div>
                  )}

                  {/* Shipping */}
                  <div className="flex justify-between items-center text-neutral-400">
                    <span>Priority Insured Delivery</span>
                    <span className="text-[#dfba6b] text-[10px] font-bold uppercase">FREE</span>
                  </div>

                </div>

                {/* Total Invoice */}
                <div className="p-4 rounded-xl bg-black border border-neutral-900 flex justify-between items-center">
                  <div>
                    <span className="block text-[8px] uppercase tracking-widest text-neutral-500 mb-0.5">ESTIMATED TOTAL USD</span>
                    <span className="text-2xl font-extrabold text-white tracking-tight">${totalPrice}.00</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">VAT Included</span>
                </div>

              </div>

              {/* Order Submission Form */}
              <div className="space-y-4 mt-8">
                <button 
                  onClick={() => {
                    showToast("Order Process Initiated. Redirecting to Sandbox gateway...");
                    setTimeout(() => {
                      showToast("SUCCESS! Your reservation for KRONOS IV is locked.");
                    }, 1500);
                  }}
                  className="w-full py-4 rounded-xl bg-[#dfba6b] hover:bg-[#ebd095] text-black text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-[#dfba6b]/15 transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-black" />
                  Transmit Secure Order
                </button>
                <p className="text-[9px] text-neutral-500 text-center leading-normal">
                  Clicking secures immediate allocation. Fully refundable reservation prior to build initiation.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* High Fidelity Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900/80 text-neutral-500 py-16 px-6 relative overflow-hidden">
        
        {/* Ground Wave graphic decor in background */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,96 C240,128 480,160 720,128 C960,96 1200,32 1440,64 L1440,200 L0,200 Z" fill="#dfba6b"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                <span className="text-[#dfba6b] font-bold text-sm tracking-tighter">K</span>
              </div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-white">KRONOS</span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
              Meticulously designing luxury class personal monitoring instruments for music creators, acoustic purists, and high-fidelity connoisseurs.
            </p>
            <span className="block text-[10px] font-mono text-neutral-600">
              © 2026 KRONOS AUDIO LABS. ALL RIGHTS RESERVED.
            </span>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Acoustic DNA</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#experience" className="hover:text-white transition-colors">Tactile Simulator</a></li>
              <li><a href="#bento-specs" className="hover:text-white transition-colors">Technical Specification</a></li>
              <li><a href="#customizer" className="hover:text-white transition-colors">Interactive Colorizer</a></li>
              <li><a href="#engineering" className="hover:text-white transition-colors">Resonance Anatomy</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Standards */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal Parameters</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Calibration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Shield</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Device Licensing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refunding Rules</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter Subscriber */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Acoustic Dispatch</h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Register to receive priority invitations for limited material releases and custom tuning calibrations.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="audiophile@email.com" 
                className="px-3 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded focus:outline-none focus:border-[#dfba6b] text-white flex-1"
              />
              <button 
                onClick={() => {
                  showToast("Subscription successful! Welcome to the Archive.");
                }}
                className="px-4 py-2 rounded bg-[#dfba6b] hover:bg-[#ebd095] text-black text-xs font-extrabold uppercase tracking-wider"
              >
                Join
              </button>
            </div>
            <div className="text-[10px] tracking-wide text-neutral-600 block">
              Curated by tg:Lana.design
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
I4
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AERIS — Guiding Every Breath, Easing Every Step</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Playfair Display for premium editorial serifs, Plus Jakarta Sans for ultra-clean tech typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- FontAwesome for beautiful, crisp technical icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        serif: ['"Playfair Display"', 'serif'],
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                    },
                    colors: {
                        clay: {
                            50: '#FAF7F2',
                            100: '#F5EFE6',
                            200: '#EADFC9',
                            300: '#D5C3A6',
                            500: '#C2593F', // Terracotta Primary
                            600: '#A94730', // Dark Terracotta
                            700: '#8B3E2B',
                            900: '#2A1C16', // Deep Warm Charcoal
                        },
                        ochre: {
                            400: '#DF9F63',
                            500: '#D4863B',
                        }
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'spin-slow': 'spin 12s linear infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #FAF7F2;
            color: #2A1C16;
            overflow-x: hidden;
        }
        /* Custom scrollbar to match editorial system */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #FAF7F2;
        }
        ::-webkit-scrollbar-thumb {
            background: #C2593F;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #8B3E2B;
        }
        .grainy-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            opacity: 0.02;
            pointer-events: none;
            z-index: 999;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
    </style>
</head>
<body class="antialiased selection:bg-clay-500 selection:text-white">
    <div class="grainy-overlay"></div>

    <!-- HEADER / NAVIGATION -->
    <header class="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-clay-200 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#" class="flex items-center space-x-3 group">
                <span class="font-serif text-3xl font-black tracking-widest text-clay-500 transition-colors group-hover:text-clay-700">AERIS</span>
                <span class="w-[1px] h-6 bg-clay-300"></span>
                <span class="text-xs uppercase tracking-[0.2em] font-medium text-clay-900/60 hidden sm:inline-block">The New Breath Standard</span>
            </a>
            
            <nav class="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wider uppercase text-clay-900/80">
                <a href="#simulator" class="hover:text-clay-500 transition-colors">Interactive Demo</a>
                <a href="#how-it-works" class="hover:text-clay-500 transition-colors">How To Use</a>
                <a href="#benefits" class="hover:text-clay-500 transition-colors">Why Aeris</a>
                <a href="#dashboard" class="hover:text-clay-500 transition-colors">Ecosystem</a>
                <a href="#insight" class="hover:text-clay-500 transition-colors flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-clay-500 animate-pulse"></span>
                    Aeris Insight AI
                </a>
            </nav>

            <div class="flex items-center space-x-4">
                <a href="#simulator" class="hidden sm:inline-flex px-5 py-2.5 bg-clay-500 text-white font-semibold text-sm rounded-full shadow-lg shadow-clay-500/10 hover:bg-clay-600 transition-all hover:translate-y-[-1px] active:translate-y-[1px]">
                    Experience Aeris
                </a>
                <button id="mobile-menu-btn" class="md:hidden text-clay-900 p-2 focus:outline-none" aria-label="Toggle Menu">
                    <i class="fa-solid fa-bars text-xl"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Nav Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-clay-50 border-b border-clay-200 px-6 py-6 space-y-4">
            <a href="#simulator" class="block text-sm font-semibold uppercase tracking-wider text-clay-900/80 hover:text-clay-500 transition-colors">Interactive Demo</a>
            <a href="#how-it-works" class="block text-sm font-semibold uppercase tracking-wider text-clay-900/80 hover:text-clay-500 transition-colors">How To Use</a>
            <a href="#benefits" class="block text-sm font-semibold uppercase tracking-wider text-clay-900/80 hover:text-clay-500 transition-colors">Why Aeris</a>
            <a href="#dashboard" class="block text-sm font-semibold uppercase tracking-wider text-clay-900/80 hover:text-clay-500 transition-colors">Ecosystem</a>
            <a href="#insight" class="block text-sm font-semibold uppercase tracking-wider text-clay-500 transition-colors">Aeris Insight AI</a>
            <a href="#simulator" class="block w-full text-center px-5 py-3 bg-clay-500 text-white font-semibold text-sm rounded-full">Experience Aeris</a>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="relative pt-10 pb-20 md:py-28 overflow-hidden">
        <!-- Background Grid Decoration -->
        <div class="absolute inset-0 pointer-events-none opacity-[0.03] grid grid-cols-12 gap-4 px-6 max-w-7xl mx-auto">
            <div class="border-l border-clay-900 h-full"></div><div class="border-l border-clay-900 h-full"></div><div class="border-l border-clay-900 h-full"></div><div class="border-l border-clay-900 h-full"></div><div class="border-l border-clay-900 h-full"></div><div class="border-l border-clay-900 h-full"></div><div class="border-l border-clay-900 h-full"></div><div class="border-l border-clay-900 h-full"></div><div class="border-l border-clay-900 h-full"></div><div class="border-l border-clay-900 h-full"></div><div class="border-l border-clay-900 h-full"></div><div class="border-l border-clay-900 h-full"></div>
        </div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                
                <!-- Left Editorial Copy -->
                <div class="lg:col-span-7 space-y-8">
                    <div class="inline-flex items-center space-x-3 px-3 py-1.5 rounded-full bg-clay-100 border border-clay-200">
                        <span class="w-2 h-2 rounded-full bg-clay-500"></span>
                        <span class="text-xs font-bold uppercase tracking-widest text-clay-700">FDA Cleared Smart Respiratory System</span>
                    </div>

                    <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-clay-900 leading-[0.95] tracking-tight">
                        AERIS
                    </h1>
                    <p class="font-serif text-2xl md:text-3xl text-clay-700 italic font-light leading-relaxed max-w-2xl">
                        "Guiding every breath, <br class="hidden sm:inline" />
                        <span class="text-clay-500 font-normal">easing every step."</span>
                    </p>

                    <p class="text-clay-900/70 text-base md:text-lg max-w-xl leading-relaxed">
                        Traditional inhalers assume perfect technique. Aeris changes that. Built with real-time breathing guidance, custom vibration indicators, and automated digital tracking, Aeris guarantees that every dose gets exactly where it needs to go.
                    </p>

                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                        <a href="#simulator" class="px-8 py-4 bg-clay-500 text-white font-bold rounded-full text-center shadow-lg shadow-clay-500/20 hover:bg-clay-600 hover:shadow-xl hover:shadow-clay-500/30 transition-all hover:translate-y-[-2px]">
                            Try Simulator Demo <i class="fa-solid fa-arrow-right ml-2 text-sm"></i>
                        </a>
                        <a href="#how-it-works" class="px-8 py-4 border border-clay-300 text-clay-900 font-bold rounded-full text-center bg-[#FAF7F2] hover:bg-clay-100 hover:border-clay-400 transition-all">
                            See How it Works
                        </a>
                    </div>

                    <!-- Editorial Metrics -->
                    <div class="grid grid-cols-3 gap-6 pt-10 border-t border-clay-200">
                        <div>
                            <div class="text-2xl md:text-3xl font-serif font-bold text-clay-900">99.4%</div>
                            <div class="text-[10px] uppercase tracking-wider text-clay-900/60 font-semibold mt-1">Dosage Accuracy</div>
                        </div>
                        <div>
                            <div class="text-2xl md:text-3xl font-serif font-bold text-clay-900">&lt; 3.2s</div>
                            <div class="text-[10px] uppercase tracking-wider text-clay-900/60 font-semibold mt-1">Avg Attack Control</div>
                        </div>
                        <div>
                            <div class="text-2xl md:text-3xl font-serif font-bold text-clay-900">10k+</div>
                            <div class="text-[10px] uppercase tracking-wider text-clay-900/60 font-semibold mt-1">Active Users</div>
                        </div>
                    </div>
                </div>

                <!-- Right Visual Showcase -->
                <div class="lg:col-span-5 relative flex justify-center">
                    <div class="relative w-full max-w-md">
                        <!-- Decorative Shapes -->
                        <div class="absolute -top-12 -left-12 w-64 h-64 bg-clay-200 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
                        <div class="absolute -bottom-12 -right-12 w-64 h-64 bg-ochre-400/20 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
                        
                        <!-- Beautiful Editorial Frame -->
                        <div class="relative bg-[#FAF7F2] border-4 border-clay-900 p-6 rounded-[2.5rem] shadow-2xl overflow-hidden group">
                            <!-- Background Grid Overlay -->
                            <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5dfd3_1px,transparent_1px),linear-gradient(to_bottom,#e5dfd3_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>
                            
                            <!-- Premium Render Mockup with custom SVGs -->
                            <div class="relative rounded-[2rem] bg-gradient-to-br from-clay-900 to-clay-700 text-clay-100 p-8 overflow-hidden aspect-[4/5] flex flex-col justify-between">
                                <div class="flex justify-between items-start z-10">
                                    <div class="space-y-1">
                                        <p class="text-[10px] uppercase tracking-[0.2em] text-clay-300">Smart Inhaler Pro</p>
                                        <h3 class="font-serif text-2xl font-bold tracking-tight text-white">Aeris Aero V1</h3>
                                    </div>
                                    <span class="px-2 py-1 bg-white/10 rounded text-[9px] font-mono tracking-wider text-clay-200">SYS_OK</span>
                                </div>

                                <!-- The Inhaler Object Render in high end SVG -->
                                <div class="relative flex justify-center my-6 py-4">
                                    <!-- Breath indicator ring -->
                                    <div class="absolute inset-0 flex items-center justify-center animate-spin-slow">
                                        <svg class="w-56 h-56 opacity-80" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="44" stroke="#C2593F" stroke-width="1" fill="none" stroke-dasharray="4, 6" />
                                            <circle cx="50" cy="50" r="40" stroke="#FAF7F2" stroke-width="0.5" fill="none" opacity="0.3" />
                                        </svg>
                                    </div>

                                    <!-- Inhaler Body SVG -->
                                    <svg class="w-40 h-40 relative z-10 drop-shadow-2xl animate-float" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <!-- Cap & Body -->
                                        <rect x="42" y="10" width="36" height="74" rx="10" fill="url(#inhalerGrad)" />
                                        <!-- Mouthpiece -->
                                        <path d="M42 66 L22 74 C16 76 16 88 22 90 L42 96 Z" fill="url(#mouthGrad)" />
                                        <rect x="42" y="62" width="36" height="38" rx="8" fill="#1C120E" />
                                        <ellipse cx="24" cy="82" rx="4" ry="7" fill="#2E1D16" />
                                        <!-- Glowing Feedback LED Ring -->
                                        <circle cx="60" cy="30" r="10" fill="#FAF7F2" fill-opacity="0.1" stroke="#FAF7F2" stroke-width="2" class="animate-pulse" />
                                        <circle cx="60" cy="30" r="4" fill="#C2593F" />
                                        <!-- Metal canister trigger -->
                                        <path d="M48 5 L72 5 L72 10 L48 10 Z" fill="#D5C3A6" />
                                        <!-- Detail Lines -->
                                        <line x1="48" y1="20" x2="72" y2="20" stroke="#FAF7F2" stroke-opacity="0.15" />
                                        <line x1="48" y1="45" x2="72" y2="45" stroke="#FAF7F2" stroke-opacity="0.15" />
                                        <!-- Gradients -->
                                        <defs>
                                            <linearGradient id="inhalerGrad" x1="42" y1="10" x2="78" y2="84" gradientUnits="userSpaceOnUse">
                                                <stop offset="0%" stop-color="#C2593F" />
                                                <stop offset="100%" stop-color="#3D261C" />
                                            </linearGradient>
                                            <linearGradient id="mouthGrad" x1="16" y1="74" x2="42" y2="96" gradientUnits="userSpaceOnUse">
                                                <stop offset="0%" stop-color="#4E3326" />
                                                <stop offset="100%" stop-color="#1C120E" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                <div class="flex items-end justify-between z-10 pt-4 border-t border-white/10">
                                    <div class="flex items-center space-x-2">
                                        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                        <span class="text-xs font-mono font-medium text-clay-300">FLOW_READY</span>
                                    </div>
                                    <div class="text-right">
                                        <span class="text-[10px] uppercase tracking-wider text-clay-400 block">Battery</span>
                                        <span class="text-sm font-semibold text-white">92%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Floating Badge -->
                        <div class="absolute -right-8 bottom-8 bg-clay-500 text-white p-5 rounded-2xl shadow-xl max-w-[200px] border border-clay-600/30 transform hover:scale-105 transition-all">
                            <i class="fa-solid fa-wind text-2xl mb-2 text-clay-200"></i>
                            <h4 class="font-bold text-sm">Haptic Feedback</h4>
                            <p class="text-xs text-clay-100/90 mt-1 leading-snug">Guides your inhale speed via targeted micro-vibrations.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION: THE INTERACTIVE BREATH SIMULATOR -->
    <section id="simulator" class="py-20 md:py-28 bg-[#F0EBE0] border-y border-clay-200">
        <div class="max-w-7xl mx-auto px-6">
            <div class="max-w-3xl mx-auto text-center space-y-4 mb-16">
                <span class="text-xs uppercase tracking-[0.2em] text-clay-500 font-bold block">EXPERIENCE AERIS TECHNOLOGY</span>
                <h2 class="font-serif text-4xl md:text-5xl font-bold text-clay-900 leading-tight">
                    Interactive Inhalation Simulator
                </h2>
                <p class="text-clay-900/70 text-base">
                    How you breathe determines how much medicine reaches your lungs. Use our virtual spacer/inhaler training system to master the perfect inhalation rhythm right now.
                </p>
            </div>

            <!-- Simulator Hub Container -->
            <div class="max-w-5xl mx-auto bg-clay-900 text-white rounded-[2.5rem] border border-clay-700/50 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                
                <!-- Left Control Panel (Interactive Interface) -->
                <div class="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-clay-800">
                    <div class="space-y-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-2">
                                <span class="w-2.5 h-2.5 rounded-full bg-clay-500 animate-pulse"></span>
                                <span class="font-mono text-xs uppercase text-clay-400">SESSION STATUS: ACTIVE</span>
                            </div>
                            <button id="reset-sim" class="text-xs uppercase tracking-widest text-clay-400 hover:text-white transition-colors">
                                <i class="fa-solid fa-arrow-rotate-left mr-1"></i> Reset Training
                            </button>
                        </div>

                        <!-- Current Phase Display -->
                        <div class="bg-clay-900/80 rounded-2xl p-6 border border-clay-800 space-y-3">
                            <div class="flex items-center space-x-3">
                                <div id="phase-badge" class="px-3 py-1 rounded bg-clay-500 text-white font-mono text-xs uppercase tracking-wider font-bold">
                                    Step 1: Prep
                                </div>
                                <h3 id="phase-title" class="font-serif text-xl font-bold text-white">Prepare & Shake</h3>
                            </div>
                            <p id="phase-desc" class="text-sm text-clay-300">
                                Grab the inhaler and shake vigorously to mix the active compounds evenly before inhalation.
                            </p>
                        </div>

                        <!-- Interactive Area / Canvas -->
                        <div class="relative bg-clay-950 rounded-2xl border border-clay-800/80 p-8 flex flex-col items-center justify-center min-h-[260px] overflow-hidden">
                            <!-- Circular Gauge Display -->
                            <div class="relative z-10 flex flex-col items-center">
                                <div class="w-36 h-36 rounded-full border-4 border-clay-800 flex items-center justify-center relative transition-all" id="gauge-container">
                                    
                                    <!-- Inner Pulse visualizer -->
                                    <div id="gauge-pulse" class="absolute inset-2 bg-clay-500/10 rounded-full transition-transform duration-300"></div>
                                    
                                    <!-- Central Metric -->
                                    <div class="text-center z-10">
                                        <div id="sim-metric" class="text-3xl font-bold font-mono text-white">READY</div>
                                        <div id="sim-sub-metric" class="text-[10px] font-mono uppercase tracking-wider text-clay-400 mt-1">Ready to Shake</div>
                                    </div>
                                    
                                    <!-- Dynamic Progress Ring (SVG Overlay) -->
                                    <svg class="absolute inset-0 w-full h-full transform -rotate-90">
                                        <circle cx="72" cy="72" r="66" stroke="#C2593F" stroke-width="4" fill="transparent" stroke-dasharray="414.6" stroke-dashoffset="414.6" class="transition-all duration-300" id="progress-circle" />
                                    </svg>
                                </div>

                                <div class="mt-6 text-center max-w-sm">
                                    <p id="feedback-toast" class="text-sm text-yellow-400 font-medium italic min-h-[20px]"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Action Trigger Button -->
                    <div class="pt-8">
                        <button id="sim-action-btn" class="w-full py-4 bg-clay-500 hover:bg-clay-600 active:translate-y-[1px] text-white font-bold text-lg rounded-xl shadow-lg transition-all flex items-center justify-center space-x-3">
                            <i class="fa-solid fa-hand-pointer text-lg"></i>
                            <span id="btn-text">SHAKE DEVICE (Click 5 times)</span>
                        </button>
                    </div>
                </div>

                <!-- Right Live Telemetry Panel -->
                <div class="lg:col-span-5 p-8 md:p-12 bg-clay-950 flex flex-col justify-between">
                    <div class="space-y-6">
                        <h4 class="font-serif text-lg font-bold text-white border-b border-clay-800 pb-3">Real-Time Telemetry</h4>
                        
                        <div class="space-y-5">
                            <!-- Inhalation Speed Metric -->
                            <div>
                                <div class="flex justify-between text-xs mb-1">
                                    <span class="text-clay-400">Inhalation Speed (Flow Rate)</span>
                                    <span id="flow-rate-val" class="font-mono text-white">0 L/min</span>
                                </div>
                                <div class="h-3 bg-clay-800 rounded-full overflow-hidden">
                                    <div id="flow-rate-bar" class="h-full bg-clay-500 transition-all duration-300 w-0"></div>
                                </div>
                                <div class="flex justify-between text-[10px] text-clay-400 mt-1 font-mono">
                                    <span>Too Slow</span>
                                    <span class="text-emerald-400 font-bold">Optimal Zone (25-35 L/m)</span>
                                    <span>Too Fast</span>
                                </div>
                            </div>

                            <!-- Lung Saturation Simulation -->
                            <div>
                                <div class="flex justify-between text-xs mb-1">
                                    <span class="text-clay-400">Medicine Infiltration Depth</span>
                                    <span id="infiltration-val" class="font-mono text-white">0%</span>
                                </div>
                                <div class="h-3 bg-clay-800 rounded-full overflow-hidden">
                                    <div id="infiltration-bar" class="h-full bg-ochre-400 transition-all duration-300 w-0"></div>
                                </div>
                                <span class="text-[10px] text-clay-500 italic block mt-1">Measures deeper bronchial penetration vs throat deposition.</span>
                            </div>

                            <!-- Sensor Status Indicators -->
                            <div class="grid grid-cols-2 gap-3 pt-4">
                                <div class="bg-clay-900 p-3 rounded-lg border border-clay-800 flex items-center space-x-2">
                                    <span id="shake-status-led" class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                                    <span class="text-xs font-mono text-clay-300">Shaken Thoroughly</span>
                                </div>
                                <div class="bg-clay-900 p-3 rounded-lg border border-clay-800 flex items-center space-x-2">
                                    <span id="tilt-status-led" class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                                    <span class="text-xs font-mono text-clay-300">Correct Tilt (90°)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Side-by-Side Comparison Feature -->
                    <div class="bg-clay-900 border border-clay-800 p-4 rounded-xl mt-6">
                        <div class="flex space-x-3">
                            <i class="fa-solid fa-circle-exclamation text-xl text-clay-500 shrink-0"></i>
                            <div>
                                <h5 class="text-xs font-bold text-white uppercase">The Problem Aeris Prevents</h5>
                                <p class="text-[11px] text-clay-400 mt-1 leading-relaxed">
                                    Inhaling too fast dumps up to 80% of medicine on the back of the throat. Aeris guards you by signaling instantly when your inhalation exceeds the optimal rate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION: HOW TO USE / STEP-BY-STEP GUIDANCE -->
    <section id="how-it-works" class="py-20 md:py-28 relative">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <!-- Left Sticky Block -->
                <div class="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                    <span class="text-xs uppercase tracking-[0.2em] text-clay-500 font-bold block">FLAWLESS TECHNIQUE</span>
                    <h2 class="font-serif text-4xl md:text-5xl font-bold text-clay-900 leading-tight">
                        How to Use Aeris
                    </h2>
                    <p class="text-clay-900/70 text-base leading-relaxed">
                        Aeris simplifies inhalation down to intuitive sensory indicators. From the moment you pick it up, it leads you step-by-step to maximum therapeutic yield.
                    </p>
                    <div class="p-5 bg-clay-100 border border-clay-200 rounded-2xl flex items-start space-x-4">
                        <div class="p-3 bg-white text-clay-500 rounded-xl shadow-sm shrink-0">
                            <i class="fa-solid fa-volume-high text-lg"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-clay-900">Audio/Visual Guidance</h4>
                            <p class="text-xs text-clay-900/70 mt-1">Optional voice prompts and rhythmic LED sweeps guide you in bright sunlight or total darkness.</p>
                        </div>
                    </div>
                </div>

                <!-- Right Scrollable Guide Steps -->
                <div class="lg:col-span-8 space-y-12 pl-0 lg:pl-10">
                    
                    <!-- Step 1 -->
                    <div class="group relative flex flex-col sm:flex-row gap-6 p-8 bg-[#F5EFE6] border border-clay-200 rounded-3xl hover:border-clay-300 transition-all duration-300">
                        <div class="w-12 h-12 bg-clay-900 text-white rounded-full flex items-center justify-center font-bold font-serif shrink-0 shadow-lg text-lg">01</div>
                        <div class="space-y-3">
                            <h3 class="font-serif text-2xl font-bold text-clay-900">Recognizing & Preparing</h3>
                            <p class="text-clay-900/70 text-sm leading-relaxed">
                                Lift the Aeris device. The device awakens instantly upon touch. Vibration cues confirm a locked-and-ready system. Shake the inhaler evenly to combine active compounds.
                            </p>
                            <span class="inline-flex items-center text-xs font-mono font-bold text-clay-500">
                                <i class="fa-solid fa-circle-check mr-2"></i> LED PULSING AMBER
                            </span>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="group relative flex flex-col sm:flex-row gap-6 p-8 bg-[#F5EFE6] border border-clay-200 rounded-3xl hover:border-clay-300 transition-all duration-300">
                        <div class="w-12 h-12 bg-clay-900 text-white rounded-full flex items-center justify-center font-bold font-serif shrink-0 shadow-lg text-lg">02</div>
                        <div class="space-y-3">
                            <h3 class="font-serif text-2xl font-bold text-clay-900">Tilt Adjustment</h3>
                            <p class="text-clay-900/70 text-sm leading-relaxed">
                                Keep your head high and the device strictly vertical. Aeris' built-in dual gyroscope tracks device position. Correct posture expands your airway naturally for a clear path to the bronchi.
                            </p>
                            <span class="inline-flex items-center text-xs font-mono font-bold text-clay-500">
                                <i class="fa-solid fa-circle-check mr-2"></i> GYRO LOCKED AT 90°
                            </span>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="group relative flex flex-col sm:flex-row gap-6 p-8 bg-[#F5EFE6] border border-clay-200 rounded-3xl hover:border-clay-300 transition-all duration-300">
                        <div class="w-12 h-12 bg-clay-900 text-white rounded-full flex items-center justify-center font-bold font-serif shrink-0 shadow-lg text-lg">03</div>
                        <div class="space-y-3">
                            <h3 class="font-serif text-2xl font-bold text-clay-900">Inhale Deeply (3, 2, 1)</h3>
                            <p class="text-clay-900/70 text-sm leading-relaxed">
                                Breathe in slowly. Aeris monitors your air current speed, gently vibrating in your palm to indicate optimal suction rate. Over-inhaling or rapid gasping creates resistance and drops dosage impact.
                            </p>
                            <span class="inline-flex items-center text-xs font-mono font-bold text-clay-500">
                                <i class="fa-solid fa-circle-check mr-2"></i> RHYTHMIC COAXING FEEDBACK
                            </span>
                        </div>
                    </div>

                    <!-- Step 4 -->
                    <div class="group relative flex flex-col sm:flex-row gap-6 p-8 bg-[#F5EFE6] border border-clay-200 rounded-3xl hover:border-clay-300 transition-all duration-300">
                        <div class="w-12 h-12 bg-clay-900 text-white rounded-full flex items-center justify-center font-bold font-serif shrink-0 shadow-lg text-lg">04</div>
                        <div class="space-y-3">
                            <h3 class="font-serif text-2xl font-bold text-clay-900">Breath Retention (Hold)</h3>
                            <p class="text-clay-900/70 text-sm leading-relaxed">
                                Hold your breath. A steady countdown triggers on the device's LED array, prompting you when to exhale. Retaining the micro-mist ensures target alveoli lock on to the medicine.
                            </p>
                            <span class="inline-flex items-center text-xs font-mono font-bold text-clay-500">
                                <i class="fa-solid fa-circle-check mr-2"></i> 5-SECOND STEADY LED BAR
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- SECTION: THE CRUCIAL METRICS / WHY EACH STEP COUNTS -->
    <section id="benefits" class="py-20 md:py-28 bg-clay-900 text-white relative overflow-hidden">
        <!-- SVG Lung Outline background -->
        <div class="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <svg class="w-full max-w-2xl h-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 20 C25 20 15 35 15 65 C15 85 28 90 45 90 C48 90 48 85 50 85 C52 85 52 90 55 90 C72 90 85 85 85 65 C85 35 75 20 50 20 Z" stroke="white" stroke-width="2" stroke-dasharray="5 5" />
            </svg>
        </div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="max-w-3xl mx-auto text-center space-y-4 mb-16">
                <span class="text-xs uppercase tracking-[0.2em] text-clay-500 font-bold block">BEHAVIORAL CLINICAL PROOFS</span>
                <h2 class="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
                    Every Single Step Counts
                </h2>
                <p class="text-clay-300 text-base max-w-xl mx-auto">
                    Why did we engineer these precise visual and tactile checkpoints? Because asthma management isn't just about dosage volume—it's about correct habits.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- Benefit 1 -->
                <div class="bg-clay-950 p-8 rounded-3xl border border-clay-800 space-y-4 flex flex-col justify-between hover:border-clay-700 transition-colors">
                    <div class="space-y-4">
                        <span class="text-xs font-mono text-clay-500 font-bold block">POINT 01</span>
                        <h4 class="font-serif text-xl font-bold text-white">Eliminates Panic & Confusion</h4>
                        <p class="text-sm text-clay-400 leading-relaxed">
                            During sudden acute episodes, logic gives way to urgency. Aeris' physical pulsing prompts and high-visibility interfaces ground you immediately, establishing stable breathing paces even in stressful conditions.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-clay-800/80 text-[11px] uppercase tracking-wider text-clay-500 font-mono font-bold">
                        Prevents hyperventilation
                    </div>
                </div>

                <!-- Benefit 2 -->
                <div class="bg-clay-950 p-8 rounded-3xl border border-clay-800 space-y-4 flex flex-col justify-between hover:border-clay-700 transition-colors">
                    <div class="space-y-4">
                        <span class="text-xs font-mono text-clay-500 font-bold block">POINT 02</span>
                        <h4 class="font-serif text-xl font-bold text-white">Corrects Inhalation Speed</h4>
                        <p class="text-sm text-clay-400 leading-relaxed">
                            Gasping forcefully blocks passage. Aeris helps patients scale inhalation to exactly the optimal zone (25 to 35 Liters per minute), allowing dry powder/mist particles to bypass local throat blockages entirely.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-clay-800/80 text-[11px] uppercase tracking-wider text-clay-500 font-mono font-bold">
                        Optimized Flow rate
                    </div>
                </div>

                <!-- Benefit 3 -->
                <div class="bg-clay-950 p-8 rounded-3xl border border-clay-800 space-y-4 flex flex-col justify-between hover:border-clay-700 transition-colors">
                    <div class="space-y-4">
                        <span class="text-xs font-mono text-clay-500 font-bold block">POINT 03</span>
                        <h4 class="font-serif text-xl font-bold text-white">Automated Tracker Sync</h4>
                        <p class="text-sm text-clay-400 leading-relaxed">
                            Never query your memory during doctor consults again. Aeris tracks inhalation volume, trigger alerts, and clean storage history directly to your smartphone securely via local encrypted pipelines.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-clay-800/80 text-[11px] uppercase tracking-wider text-clay-500 font-mono font-bold">
                        Instant Telemetry Syncing
                    </div>
                </div>

                <!-- Benefit 4 -->
                <div class="bg-clay-950 p-8 rounded-3xl border border-clay-800 space-y-4 flex flex-col justify-between hover:border-clay-700 transition-colors">
                    <div class="space-y-4">
                        <span class="text-xs font-mono text-clay-500 font-bold block">POINT 04</span>
                        <h4 class="font-serif text-xl font-bold text-white">Encourages Proper Hygiene</h4>
                        <p class="text-sm text-clay-400 leading-relaxed">
                            Leftover residue from spacers causes bacterial propagation and bad flavor notes. Aeris detects usage patterns and notifies users on the app when a spacer/mouthpiece needs deep chemical cleaning.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-clay-800/80 text-[11px] uppercase tracking-wider text-clay-500 font-mono font-bold">
                        Bacterial Prevention
                    </div>
                </div>

                <!-- Benefit 5 -->
                <div class="bg-clay-950 p-8 rounded-3xl border border-clay-800 space-y-4 flex flex-col justify-between hover:border-clay-700 transition-colors">
                    <div class="space-y-4">
                        <span class="text-xs font-mono text-clay-500 font-bold block">POINT 05</span>
                        <h4 class="font-serif text-xl font-bold text-white">Adaptive Cloud Trigger Analysis</h4>
                        <p class="text-sm text-clay-400 leading-relaxed">
                            By correlating dosage timestamps with hyper-local environmental sensor hubs, the Aeris platform alerts you to spikes in humidity, pollen loads, and pollution indices before a symptom arises.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-clay-800/80 text-[11px] uppercase tracking-wider text-clay-500 font-mono font-bold">
                        Hyper-local AI tracking
                    </div>
                </div>

                <!-- Benefit 6 -->
                <div class="bg-clay-950 p-8 rounded-3xl border border-clay-800 space-y-4 flex flex-col justify-between hover:border-clay-700 transition-colors">
                    <div class="space-y-4">
                        <span class="text-xs font-mono text-clay-500 font-bold block">POINT 06</span>
                        <h4 class="font-serif text-xl font-bold text-white">Clear, Actionable Diagnosis</h4>
                        <p class="text-sm text-clay-400 leading-relaxed">
                            Generate an audited PDF log of your medical performance inside our patient-centric app dashboard. Provide accurate lung behavior logs directly to your respiratory physician during check-ups.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-clay-800/80 text-[11px] uppercase tracking-wider text-clay-500 font-mono font-bold">
                        Physician-Ready exports
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION: THE MOBILE DASHBOARD APP -->
    <section id="dashboard" class="py-20 md:py-28 relative">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Left Details / Copy -->
                <div class="lg:col-span-5 space-y-8">
                    <span class="text-xs uppercase tracking-[0.2em] text-clay-500 font-bold block">THE CONNECTED ECOSYSTEM</span>
                    <h2 class="font-serif text-4xl md:text-5xl font-bold text-clay-900 leading-tight">
                        Your Air Dashboard, Always Live.
                    </h2>
                    <p class="text-clay-900/70 text-base leading-relaxed">
                        The Aeris Companion App acts as your virtual medical coordinator. It seamlessly pulls telemetry records from your smart inhaler, tracks allergen exposure logs, and calculates lung performance.
                    </p>

                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <span class="p-1 bg-clay-500 text-white rounded-full text-[10px] w-5 h-5 flex items-center justify-center shrink-0">
                                <i class="fa-solid fa-check"></i>
                            </span>
                            <p class="text-sm text-clay-900/80"><strong>Instant Environmental Correlation:</strong> Syncs localized pollen counters, particulate data (PM2.5), and rapid humidity shifts.</p>
                        </div>
                        <div class="flex items-start space-x-3">
                            <span class="p-1 bg-clay-500 text-white rounded-full text-[10px] w-5 h-5 flex items-center justify-center shrink-0">
                                <i class="fa-solid fa-check"></i>
                            </span>
                            <p class="text-sm text-clay-900/80"><strong>Family Sharing Circle:</strong> Allows immediate secure monitoring pipelines for pediatric or elderly care.</p>
                        </div>
                    </div>

                    <!-- Trigger Control Demonstration Panel -->
                    <div class="bg-clay-100 border border-clay-200 p-6 rounded-2xl">
                        <h4 class="font-bold text-sm text-clay-900 mb-3">Live Risk Level Simulator</h4>
                        <div class="grid grid-cols-3 gap-3">
                            <button onclick="setDashboardRisk('low')" class="p-3 bg-white hover:bg-emerald-50 text-emerald-700 font-bold text-xs rounded-xl border border-emerald-200 transition-all text-center">
                                Low Risk
                            </button>
                            <button onclick="setDashboardRisk('mod')" class="p-3 bg-white hover:bg-yellow-50 text-yellow-700 font-bold text-xs rounded-xl border border-yellow-200 transition-all text-center">
                                Moderate
                            </button>
                            <button onclick="setDashboardRisk('high')" class="p-3 bg-white hover:bg-red-50 text-red-700 font-bold text-xs rounded-xl border border-red-200 transition-all text-center">
                                Critical
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Right Interactive Mobile Mockup -->
                <div class="lg:col-span-7 flex justify-center">
                    <div class="bg-clay-900 p-4 rounded-[3rem] shadow-2xl border-4 border-clay-700/80 w-full max-w-md relative overflow-hidden">
                        
                        <!-- Internal Phone screen -->
                        <div class="bg-clay-950 rounded-[2.5rem] p-6 text-white space-y-6 overflow-hidden relative">
                            <!-- Notch -->
                            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-clay-900 rounded-b-xl flex items-center justify-center">
                                <span class="w-2 h-2 rounded-full bg-clay-850"></span>
                            </div>

                            <!-- Mobile Header -->
                            <div class="flex justify-between items-center pt-2">
                                <div>
                                    <span class="text-[10px] text-clay-400 block font-mono">WELCOME BACK</span>
                                    <span class="text-sm font-bold text-white">Evelyn Ross</span>
                                </div>
                                <span class="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-mono tracking-wider">
                                    SYS_SAFE
                                </span>
                            </div>

                            <!-- Environmental Risk Gauge -->
                            <div id="risk-display-box" class="p-5 rounded-2xl border transition-all duration-300 bg-emerald-950/40 border-emerald-800/50">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <span class="text-[10px] uppercase tracking-wider text-clay-400 block font-mono">LOCAL AIR QUALITY</span>
                                        <h3 id="risk-status-text" class="text-lg font-bold text-emerald-400 mt-1">Excellent (AQI 24)</h3>
                                    </div>
                                    <i id="risk-icon" class="fa-solid fa-face-smile text-2xl text-emerald-400"></i>
                                </div>
                                <p id="risk-advice" class="text-xs text-clay-300 mt-2 leading-relaxed">
                                    Pollen counts are low and humidity is stable. Ideal conditions for outdoor training.
                                </p>
                            </div>

                            <!-- Interactive Mini Graph -->
                            <div class="bg-clay-900/60 p-5 rounded-2xl border border-clay-800 space-y-4">
                                <div class="flex justify-between items-center">
                                    <span class="text-xs font-bold uppercase tracking-wider text-clay-300">Dose Frequency</span>
                                    <span class="text-[10px] text-clay-400 font-mono">Last 7 Days</span>
                                </div>
                                
                                <div class="h-28 flex items-end justify-between gap-2 pt-2">
                                    <!-- Mon -->
                                    <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                                        <div class="w-full bg-clay-800 rounded-t-sm h-[30%]"></div>
                                        <span class="text-[9px] text-clay-400 font-mono">M</span>
                                    </div>
                                    <!-- Tue -->
                                    <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                                        <div class="w-full bg-clay-500 rounded-t-sm h-[85%]"></div>
                                        <span class="text-[9px] text-clay-400 font-mono">T</span>
                                    </div>
                                    <!-- Wed -->
                                    <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                                        <div class="w-full bg-clay-800 rounded-t-sm h-[20%]"></div>
                                        <span class="text-[9px] text-clay-400 font-mono">W</span>
                                    </div>
                                    <!-- Thu -->
                                    <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                                        <div class="w-full bg-clay-800 rounded-t-sm h-[40%]"></div>
                                        <span class="text-[9px] text-clay-400 font-mono">T</span>
                                    </div>
                                    <!-- Fri -->
                                    <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                                        <div class="w-full bg-clay-500 rounded-t-sm h-[95%]"></div>
                                        <span class="text-[9px] text-clay-400 font-mono">F</span>
                                    </div>
                                    <!-- Sat -->
                                    <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                                        <div class="w-full bg-clay-800 rounded-t-sm h-[10%]"></div>
                                        <span class="text-[9px] text-clay-400 font-mono">S</span>
                                    </div>
                                    <!-- Sun (Today) -->
                                    <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                                        <div class="w-full bg-emerald-500 rounded-t-sm h-[25%] transition-all" id="today-graph-bar"></div>
                                        <span class="text-[9px] text-clay-300 font-mono font-bold">S</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Sync telemetry button -->
                            <button onclick="triggerSimulatedSync()" class="w-full py-3 bg-clay-500 hover:bg-clay-600 active:translate-y-[1px] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2">
                                <i class="fa-solid fa-arrows-rotate animate-spin-slow"></i>
                                <span>Sync Device Telemetry</span>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION: AERIS INSIGHT - SMART AI MEDICAL COMPANION -->
    <section id="insight" class="py-20 md:py-28 bg-[#F0EBE0] border-t border-clay-200">
        <div class="max-w-7xl mx-auto px-6">
            <div class="max-w-3xl mx-auto text-center space-y-4 mb-16">
                <span class="text-xs uppercase tracking-[0.2em] text-clay-500 font-bold block">AERIS KNOWLEDGE HUB</span>
                <h2 class="font-serif text-4xl md:text-5xl font-bold text-clay-900 leading-tight">
                    AERIS Insight Support AI
                </h2>
                <p class="text-clay-900/70 text-base max-w-xl mx-auto">
                    Have questions about proper inhaler techniques, asthma avoidance strategies, or spacer hygiene? Speak to our custom respiratory education model below.
                </p>
            </div>

            <div class="max-w-4xl mx-auto bg-white rounded-3xl border border-clay-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
                
                <!-- Left panel quick options -->
                <div class="md:col-span-4 bg-clay-50 p-6 border-b md:border-b-0 md:border-r border-clay-200 flex flex-col justify-between">
                    <div class="space-y-4">
                        <span class="text-[10px] uppercase tracking-wider text-clay-500 font-bold block">Select Quick Prompt</span>
                        
                        <div class="space-y-2">
                            <button onclick="setPrompt('How do I correctly shake my inhaler before inhalation?')" class="w-full text-left p-3 bg-white hover:bg-clay-100 rounded-xl border border-clay-200 text-xs font-medium text-clay-900 transition-colors">
                                "How do I correctly shake my inhaler?"
                            </button>
                            <button onclick="setPrompt('Why is deep, slow breathing critical for dosage absorption?')" class="w-full text-left p-3 bg-white hover:bg-clay-100 rounded-xl border border-clay-200 text-xs font-medium text-clay-900 transition-colors">
                                "Why is slow breathing critical?"
                            </button>
                            <button onclick="setPrompt('How do I properly wash and disinfect my spacer?')" class="w-full text-left p-3 bg-white hover:bg-clay-100 rounded-xl border border-clay-200 text-xs font-medium text-clay-900 transition-colors">
                                "How do I clean my spacer?"
                            </button>
                        </div>
                    </div>

                    <div class="pt-6 border-t border-clay-200/80">
                        <div class="flex items-center space-x-2 text-[10px] text-clay-500 font-semibold tracking-wide">
                            <i class="fa-solid fa-circle-info"></i>
                            <span>AI responses are educational only.</span>
                        </div>
                    </div>
                </div>

                <!-- Right Chat Interface -->
                <div class="md:col-span-8 flex flex-col justify-between bg-white h-[500px]">
                    
                    <!-- Top Bar -->
                    <div class="px-6 py-4 border-b border-clay-100 flex justify-between items-center">
                        <div class="flex items-center space-x-3">
                            <div class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span class="text-sm font-bold text-clay-900">Aeris AI Assistant</span>
                        </div>
                        <span class="text-[10px] font-mono text-clay-500">POWERED BY GEMINI 2.5</span>
                    </div>

                    <!-- Chat Log -->
                    <div id="chat-log" class="flex-1 p-6 overflow-y-auto space-y-4 text-sm scroll-smooth">
                        <!-- Initial Greeting -->
                        <div class="flex gap-3">
                            <div class="w-8 h-8 rounded-full bg-clay-500 text-white flex items-center justify-center shrink-0">
                                <i class="fa-solid fa-wind text-xs"></i>
                            </div>
                            <div class="bg-clay-50 p-4 rounded-2xl max-w-[85%] border border-clay-100 space-y-1">
                                <p class="text-clay-900">Hello! I am your **Aeris Intelligent Assistant**. I can help explain clean breathing practices, dosage optimization, clean spacer hygiene, or help you troubleshoot our virtual training simulator. What would you like to know?</p>
                            </div>
                        </div>
                    </div>

                    <!-- Input Panel -->
                    <div class="p-4 border-t border-clay-100 bg-clay-50">
                        <form id="chat-form" class="flex items-center gap-3">
                            <input type="text" id="chat-input" placeholder="Type your respiratory health or device question..." class="flex-1 px-4 py-3 bg-white border border-clay-200 rounded-xl text-sm text-clay-900 focus:outline-none focus:border-clay-500 focus:ring-1 focus:ring-clay-500" required />
                            <button type="submit" class="px-5 py-3 bg-clay-500 hover:bg-clay-600 text-white rounded-xl transition-all shadow-md flex items-center justify-center shrink-0">
                                <i class="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!-- SECTION: QUALITY OF LIFE (THE IMPACT GRID) -->
    <section class="py-20 md:py-28 relative bg-[#F9F5F0]">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Graphic Editorial collage Left -->
                <div class="lg:col-span-5 relative">
                    <div class="border-2 border-clay-900 rounded-[2.5rem] overflow-hidden p-6 bg-white shadow-xl relative">
                        <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5dfd3_1px,transparent_1px),linear-gradient(to_bottom,#e5dfd3_1px,transparent_1px)] bg-[size:30px_30px] opacity-25 pointer-events-none"></div>
                        
                        <!-- Beautiful collage containing simple medical diagrams/sketches -->
                        <div class="space-y-6 relative z-10">
                            <div class="flex justify-between items-center border-b border-clay-200 pb-3">
                                <span class="text-xs uppercase tracking-widest text-clay-500 font-bold font-mono">SYSTEM SPEC // VOL_01</span>
                                <span class="text-[10px] font-mono text-clay-900">REV.2026</span>
                            </div>
                            
                            <div class="aspect-[16/10] bg-[#FAF7F2] rounded-2xl border border-clay-200 flex items-center justify-center p-4 relative overflow-hidden">
                                <svg class="w-full h-full opacity-70" viewBox="0 0 100 50">
                                    <!-- Breath Waveform -->
                                    <path d="M 0 25 Q 12 5 25 25 T 50 25 T 75 25 T 100 25" fill="none" stroke="#C2593F" stroke-width="1.5" stroke-dasharray="2, 1" />
                                    <!-- Secondary smooth breath curve -->
                                    <path d="M 0 25 Q 12 15 25 25 T 50 25 T 75 25 T 100 25" fill="none" stroke="#8B3E2B" stroke-width="1" />
                                    <line x1="50" y1="0" x2="50" y2="50" stroke="#3D261C" stroke-width="0.5" stroke-dasharray="1, 4" />
                                    <!-- Annotation -->
                                    <text x="52" y="10" class="text-[3px] font-mono fill-clay-900" font-size="3">TARGET FLOW SLOPE</text>
                                </svg>
                            </div>

                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-clay-100 p-4 rounded-xl border border-clay-200">
                                    <span class="text-[10px] text-clay-500 uppercase tracking-wider block font-bold">LUNG RESISTANCE</span>
                                    <span class="text-xl font-bold font-serif text-clay-900">DECREASED</span>
                                </div>
                                <div class="bg-clay-100 p-4 rounded-xl border border-clay-200">
                                    <span class="text-[10px] text-clay-500 uppercase tracking-wider block font-bold">PATIENT ANXIETY</span>
                                    <span class="text-xl font-bold font-serif text-clay-900">-40% REDUCTION</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Editorial Text -->
                <div class="lg:col-span-7 space-y-8">
                    <span class="text-xs uppercase tracking-[0.2em] text-clay-500 font-bold block">GLOBAL IMPACT VISION</span>
                    <h2 class="font-serif text-4xl md:text-5xl font-bold text-clay-900 leading-tight">
                        A Universal Solution for Active Lifestyles.
                    </h2>
                    <p class="text-clay-900/70 text-base leading-relaxed">
                        Asthma affects individuals globally. Aeris returns confidence to everyday lives by ensuring consistent, accurate dosage management. Focus on your career, sports, and families—we'll monitor your breath.
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-clay-200">
                        <div class="space-y-2">
                            <h4 class="font-serif text-lg font-bold text-clay-900">Reduced Absenteeism</h4>
                            <p class="text-xs text-clay-900/60 leading-relaxed">
                                Avoid missed school and work days with highly predictable preventative dose metrics tracked by the app.
                            </p>
                        </div>
                        <div class="space-y-2">
                            <h4 class="font-serif text-lg font-bold text-clay-900">Improved Daily Performance</h4>
                            <p class="text-xs text-clay-900/60 leading-relaxed">
                                Track peak flow fluctuations relative to sports levels so you are never caught unprepared.
                            </p>
                        </div>
                        <div class="space-y-2">
                            <h4 class="font-serif text-lg font-bold text-clay-900">Fewer Emergency Visits</h4>
                            <p class="text-xs text-clay-900/60 leading-relaxed">
                                Better inhaler posture feedback minimizes under-dosing and prevents severe escalation spikes.
                            </p>
                        </div>
                        <div class="space-y-2">
                            <h4 class="font-serif text-lg font-bold text-clay-900">Clear Physician Logs</h4>
                            <p class="text-xs text-clay-900/60 leading-relaxed">
                                Stop guessing usage rates. Export clean compliance sheets to share with specialists in seconds.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- FOOTER / LEGAL CLEARANCE -->
    <footer class="bg-clay-900 text-white border-t border-clay-800 py-16">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
                
                <div class="md:col-span-5 space-y-4">
                    <span class="font-serif text-3xl font-bold tracking-widest text-clay-500">AERIS</span>
                    <p class="text-xs text-clay-400 max-w-sm leading-relaxed">
                        Aeris Smart Respiratory Systems are FDA-cleared and manufactured to rigorous medical standards. Always speak to your medical practitioner before adjusting prescription frequencies.
                    </p>
                </div>

                <div class="md:col-span-4 space-y-4">
                    <h5 class="text-xs font-bold uppercase tracking-widest text-white">Join the Breathing Revolution</h5>
                    <p class="text-xs text-clay-400">Receive scientific updates, triggers warnings, and clinical feedback reports monthly.</p>
                    <form onsubmit="event.preventDefault(); alert('Thank you for subscribing to Aeris updates!')" class="flex gap-2">
                        <input type="email" placeholder="Your email address" class="px-4 py-2 bg-clay-950 border border-clay-800 rounded-lg text-xs text-white focus:outline-none focus:border-clay-500 flex-1" required />
                        <button type="submit" class="px-4 py-2 bg-clay-500 hover:bg-clay-600 rounded-lg text-xs font-bold transition-colors">Subscribe</button>
                    </form>
                </div>

                <div class="md:col-span-3 space-y-3">
                    <h5 class="text-xs font-bold uppercase tracking-widest text-white">System Status</h5>
                    <div class="flex items-center space-x-2 text-xs">
                        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <span class="text-clay-300">All Cloud Pipelines Operational</span>
                    </div>
                    <p class="text-[10px] text-clay-500">Device Hardware: Version V1.4.2</p>
                </div>

            </div>

            <!-- Disclaimer and Regulatory Footnotes -->
            <div class="border-t border-clay-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-clay-500 space-y-4 sm:space-y-0">
                <p>&copy; 2026 Aeris Respiratory Medical Inc. All rights reserved.</p>
                <div class="flex space-x-6">
                    <a href="#" class="hover:text-clay-300">Privacy Protocols</a>
                    <a href="#" class="hover:text-clay-300">Terms of Care</a>
                    <a href="#" class="hover:text-clay-300">FDA Clearance Specs</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- INTERACTIVE JAVASCRIPT SYSTEM -->
    <script>
        // Mobile Navigation Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // ------------------ SIMULATOR STATE ENGINE ------------------
        let currentStep = 1; // 1: Prep, 2: Tilt, 3: Inhale, 4: Hold, 5: Complete
        let shakeCount = 0;
        let isCorrectTilt = false;
        let flowRateInterval = null;
        let flowRate = 0;
        let holdingProgress = 0;
        let infiltration = 0;

        const phaseBadge = document.getElementById('phase-badge');
        const phaseTitle = document.getElementById('phase-title');
        const phaseDesc = document.getElementById('phase-desc');
        const simMetric = document.getElementById('sim-metric');
        const simSubMetric = document.getElementById('sim-sub-metric');
        const simActionBtn = document.getElementById('sim-action-btn');
        const btnText = document.getElementById('btn-text');
        const progressCircle = document.getElementById('progress-circle');
        const feedbackToast = document.getElementById('feedback-toast');
        const gaugeContainer = document.getElementById('gauge-container');
        const gaugePulse = document.getElementById('gauge-pulse');
        
        // Telemetry Elements
        const flowRateVal = document.getElementById('flow-rate-val');
        const flowRateBar = document.getElementById('flow-rate-bar');
        const infiltrationVal = document.getElementById('infiltration-val');
        const infiltrationBar = document.getElementById('infiltration-bar');
        const shakeStatusLed = document.getElementById('shake-status-led');
        const tiltStatusLed = document.getElementById('tilt-status-led');
        const todayGraphBar = document.getElementById('today-graph-bar');

        // Reset Simulator
        document.getElementById('reset-sim').addEventListener('click', resetSimulation);

        function resetSimulation() {
            currentStep = 1;
            shakeCount = 0;
            isCorrectTilt = false;
            flowRate = 0;
            holdingProgress = 0;
            infiltration = 0;
            clearInterval(flowRateInterval);
            
            // UI Reset
            phaseBadge.innerText = "Step 1: Prep";
            phaseBadge.className = "px-3 py-1 rounded bg-clay-500 text-white font-mono text-xs uppercase tracking-wider font-bold";
            phaseTitle.innerText = "Prepare & Shake";
            phaseDesc.innerText = "Grab the virtual inhaler and shake vigorously to mix the active compounds evenly before inhalation.";
            simMetric.innerText = "READY";
            simSubMetric.innerText = "Ready to Shake";
            btnText.innerText = "SHAKE DEVICE (Click 5 times)";
            feedbackToast.innerText = "";
            setProgress(0);
            
            flowRateVal.innerText = "0 L/min";
            flowRateBar.style.width = "0%";
            infiltrationVal.innerText = "0%";
            infiltrationBar.style.width = "0%";
            
            shakeStatusLed.className = "w-2.5 h-2.5 rounded-full bg-red-500";
            tiltStatusLed.className = "w-2.5 h-2.5 rounded-full bg-red-500";
            gaugeContainer.className = "w-36 h-36 rounded-full border-4 border-clay-800 flex items-center justify-center relative transition-all";
            gaugePulse.className = "absolute inset-2 bg-clay-500/10 rounded-full transition-all";
        }

        // Action button router
        simActionBtn.addEventListener('click', () => {
            if (currentStep === 1) {
                // Shaking
                shakeCount++;
                setProgress((shakeCount / 5) * 100);
                simMetric.innerText = `${shakeCount}/5`;
                simSubMetric.innerText = "Shaking Device";
                feedbackToast.innerText = "Vibrational mixture lock-in progress...";
                
                if (shakeCount >= 5) {
                    shakeStatusLed.className = "w-2.5 h-2.5 rounded-full bg-emerald-500";
                    feedbackToast.innerText = "Device adequately shaken! Ready for tilt check.";
                    currentStep = 2;
                    phaseBadge.innerText = "Step 2: Position";
                    phaseTitle.innerText = "Adjust Pitch & Tilt";
                    phaseDesc.innerText = "Hold the inhaler upright. A 90° angle is required for optimal airflow clearance.";
                    simMetric.innerText = "TILTED?";
                    simSubMetric.innerText = "Awaiting Position Lock";
                    btnText.innerText = "ALIGN DEVICE (Adjust to 90°)";
                }
            } else if (currentStep === 2) {
                // Position/Tilt setup
                isCorrectTilt = true;
                tiltStatusLed.className = "w-2.5 h-2.5 rounded-full bg-emerald-500";
                feedbackToast.innerText = "Gyro Lock Confirmed at 90°! Position is Optimal.";
                simMetric.innerText = "90° LOCK";
                simSubMetric.innerText = "Posture Verified";
                setProgress(100);
                
                setTimeout(() => {
                    currentStep = 3;
                    phaseBadge.innerText = "Step 3: Inhale";
                    phaseTitle.innerText = "Steady Deep Inhale";
                    phaseDesc.innerText = "Click and HOLD the action button to simulate inhaling. Release immediately if flow speed is warning red!";
                    simMetric.innerText = "HOLD KEY";
                    simSubMetric.innerText = "To Begin Flow";
                    btnText.innerText = "CLICK & HOLD TO INHALE";
                    setProgress(0);
                    feedbackToast.innerText = "Inhale slowly. Target optimal speed (25 - 35 L/min)";
                }, 1000);
            }
        });

        // Click & Hold for inhalation simulation
        let holdingInterval = null;
        simActionBtn.addEventListener('mousedown', startInhalation);
        simActionBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            startInhalation();
        });

        simActionBtn.addEventListener('mouseup', stopInhalation);
        simActionBtn.addEventListener('touchend', stopInhalation);
        simActionBtn.addEventListener('mouseleave', stopInhalation);

        function startInhalation() {
            if (currentStep !== 3) return;
            
            feedbackToast.innerText = "Inhaling...";
            let currentFlow = 10;
            
            holdingInterval = setInterval(() => {
                currentFlow += Math.floor(Math.random() * 8) + 2; // steady climb
                if (currentFlow > 45) currentFlow = 45; // cap it
                
                flowRate = currentFlow;
                flowRateVal.innerText = `${flowRate} L/min`;
                
                // Represent flow rate on telemetry bar
                let barPercentage = (flowRate / 50) * 100;
                flowRateBar.style.style = `width: ${barPercentage}%`;
                flowRateBar.style.width = `${barPercentage}%`;
                
                // Color zones
                if (flowRate >= 25 && flowRate <= 35) {
                    flowRateBar.className = "h-full bg-emerald-500 transition-all duration-300";
                    gaugeContainer.className = "w-36 h-36 rounded-full border-4 border-emerald-500 flex items-center justify-center relative transition-all";
                    gaugePulse.className = "absolute inset-2 bg-emerald-500/20 rounded-full transition-all animate-ping";
                    simMetric.innerText = "OPTIMAL";
                    simSubMetric.innerText = `${flowRate} L/min`;
                    infiltration += 5;
                    if (infiltration > 100) infiltration = 100;
                } else if (flowRate > 35) {
                    flowRateBar.className = "h-full bg-red-500 transition-all duration-300";
                    gaugeContainer.className = "w-36 h-36 rounded-full border-4 border-red-500 flex items-center justify-center relative transition-all";
                    gaugePulse.className = "absolute inset-2 bg-red-500/20 rounded-full transition-all";
                    simMetric.innerText = "TOO FAST!";
                    simSubMetric.innerText = `${flowRate} L/min`;
                    feedbackToast.innerText = "High flow rates deposit medicine in your mouth, not lungs! Slow down.";
                    infiltration += 1; // poor depth
                    if (infiltration > 100) infiltration = 100;
                } else {
                    flowRateBar.className = "h-full bg-yellow-500 transition-all duration-300";
                    gaugeContainer.className = "w-36 h-36 rounded-full border-4 border-yellow-500 flex items-center justify-center relative transition-all";
                    simMetric.innerText = "TOO SLOW";
                    simSubMetric.innerText = `${flowRate} L/min`;
                }

                infiltrationVal.innerText = `${infiltration}%`;
                infiltrationBar.style.width = `${infiltration}%`;
                setProgress(infiltration);

                if (infiltration >= 100) {
                    stopInhalation();
                    triggerHoldPhase();
                }

            }, 150);
        }

        function stopInhalation() {
            if (holdingInterval) {
                clearInterval(holdingInterval);
                holdingInterval = null;
            }
            if (currentStep === 3) {
                flowRate = 0;
                flowRateVal.innerText = "0 L/min";
                flowRateBar.style.width = "0%";
                flowRateBar.className = "h-full bg-clay-500 transition-all duration-300";
                gaugeContainer.className = "w-36 h-36 rounded-full border-4 border-clay-800 flex items-center justify-center relative transition-all";
                gaugePulse.className = "absolute inset-2 bg-clay-500/10 rounded-full transition-all";
                if (infiltration < 100) {
                    simMetric.innerText = "RESUME";
                    simSubMetric.innerText = "Hold Key to Inhale";
                }
            }
        }

        function triggerHoldPhase() {
            currentStep = 4;
            phaseBadge.innerText = "Step 4: Hold";
            phaseTitle.innerText = "Retain & Absorb";
            phaseDesc.innerText = "Hold your breath as the smart ledger schedules medication settle times. Do not inhale or exhale.";
            simMetric.innerText = "5s";
            simSubMetric.innerText = "Hold Breath";
            btnText.innerText = "BREATH RETENTION COUNTDOWN";
            setProgress(100);

            let remainingSec = 5;
            let countdown = setInterval(() => {
                remainingSec--;
                simMetric.innerText = `${remainingSec}s`;
                setProgress((remainingSec / 5) * 100);

                if (remainingSec <= 0) {
                    clearInterval(countdown);
                    triggerCompletePhase();
                }
            }, 1000);
        }

        function triggerCompletePhase() {
            currentStep = 5;
            phaseBadge.innerText = "Complete";
            phaseBadge.className = "px-3 py-1 rounded bg-emerald-500 text-white font-mono text-xs uppercase tracking-wider font-bold";
            phaseTitle.innerText = "Session Successful!";
            phaseDesc.innerText = "Perfect inhalation strategy recorded. Telemetry synchronized directly into your personal compliance dashboard.";
            simMetric.innerText = "SUCCESS";
            simSubMetric.innerText = "100% Deposition";
            btnText.innerText = "COMPLETED SUCCESSFULLY";
            setProgress(100);
            feedbackToast.innerText = "Congratulations! You completed perfect delivery.";
            
            // Instantly sync with mobile demo widget
            const todayBar = document.getElementById('today-graph-bar');
            todayBar.style.height = "95%";
            todayBar.className = "w-full bg-emerald-500 rounded-t-sm h-[95%] transition-all";
        }

        function setProgress(percent) {
            const circle = document.getElementById('progress-circle');
            const radius = 66;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percent / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        }

        // ------------------ DASHBOARD AIR RISK SELECTOR ------------------
        function setDashboardRisk(level) {
            const riskBox = document.getElementById('risk-display-box');
            const statusText = document.getElementById('risk-status-text');
            const adviceText = document.getElementById('risk-advice');
            const icon = document.getElementById('risk-icon');

            if (level === 'low') {
                riskBox.className = "p-5 rounded-2xl border transition-all duration-300 bg-emerald-950/40 border-emerald-800/50";
                statusText.innerText = "Excellent (AQI 24)";
                statusText.className = "text-lg font-bold text-emerald-400 mt-1";
                adviceText.innerText = "Pollen counts are low and humidity is stable. Ideal conditions for outdoor training.";
                icon.className = "fa-solid fa-face-smile text-2xl text-emerald-400";
            } else if (level === 'mod') {
                riskBox.className = "p-5 rounded-2xl border transition-all duration-300 bg-yellow-950/40 border-yellow-800/50";
                statusText.innerText = "Moderate (AQI 84)";
                statusText.className = "text-lg font-bold text-yellow-400 mt-1";
                adviceText.innerText = "Elevated pollen particles detected near your locality. Maintain your emergency inhaler companion.";
                icon.className = "fa-solid fa-face-meh text-2xl text-yellow-400";
            } else if (level === 'high') {
                riskBox.className = "p-5 rounded-2xl border transition-all duration-300 bg-red-950/40 border-red-800/50";
                statusText.innerText = "Critical Warning (AQI 162)";
                statusText.className = "text-lg font-bold text-red-400 mt-1";
                adviceText.innerText = "Heavy airborne pollution and rapid cold weather shifts detected. Prevent heavy cardiovascular exercise outdoors.";
                icon.className = "fa-solid fa-triangle-exclamation text-2xl text-red-400";
            }
        }

        function triggerSimulatedSync() {
            const syncBtn = document.querySelector('[onclick="triggerSimulatedSync()"]');
            const syncIcon = syncBtn.querySelector('i');
            syncIcon.classList.add('animate-spin');
            
            setTimeout(() => {
                syncIcon.classList.remove('animate-spin');
                alert("Aeris Inhaler telemetry successfully synchronized. 7-day reports have been recalculated.");
            }, 1000);
        }

        // ------------------ GEMINI API SYSTEM (AERIS INSIGHT) ------------------
        const apiKey = ""; // Let env handle key injection automatically
        const chatForm = document.getElementById('chat-form');
        const chatInput = document.getElementById('chat-input');
        const chatLog = document.getElementById('chat-log');

        function setPrompt(text) {
            chatInput.value = text;
            chatInput.focus();
        }

        // Custom backoff utility
        async function fetchWithBackoff(url, payload, retries = 5, delay = 1000) {
            for (let i = 0; i < retries; i++) {
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    if (response.ok) return await response.json();
                } catch (err) {
                    // Fail silently for backoff retries per system guidelines
                }
                await new Promise(res => setTimeout(res, delay));
                delay *= 2; // exponential delay expansion
            }
            throw new Error("Unable to contact Aeris Insight servers. Check your connection.");
        }

        chatForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;

            // Render User Prompt
            appendMessage('user', text);
            chatInput.value = "";

            // Render Loader State
            const loaderId = appendLoader();

            // Setup prompt & system instruction payload
            const systemPrompt = `You are the "Aeris Intelligent Respiratory Assistant"—a world-class clinical educator specializing in asthma guidance, breathing science, dry powder and MDI spacer posture, dosage depth, and device sanitation. Educate users with pristine clarity. Break down concepts structurally. Inform them about:
            1. Why tilting the device 90 degrees expands the tracheal pathway.
            2. The dangers of inhaling too fast (coughing triggers and mouth residue).
            3. Best spacer hygiene policies (lukewarm soapy air dry, once per week).
            Keep your formatting beautiful, engaging, and professional. Always include a short, comforting warning at the end reminding them that virtual AI guidance does not override personal emergency inhaler protocols.`;

            const payload = {
                contents: [{
                    parts: [{ text: text }]
                }],
                systemInstruction: {
                    parts: [{ text: systemPrompt }]
                }
            };

            const modelUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

            try {
                const data = await fetchWithBackoff(modelUrl, payload);
                const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
                
                removeLoader(loaderId);
                
                if (responseText) {
                    appendMessage('ai', responseText);
                } else {
                    appendMessage('ai', "I apologize, but I could not parse a correct response. Please try another medical or training question.");
                }
            } catch (err) {
                removeLoader(loaderId);
                appendMessage('ai', "I'm having trouble connecting to the Aeris network. Please verify you are connected to the internet and try again.");
            }
        });

        function appendMessage(sender, text) {
            const container = document.createElement('div');
            container.className = "flex gap-3 animate-fade-in";
            
            const isUser = sender === 'user';
            
            // Format some basic markdown stars for beautiful bold tags
            let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            formattedText = formattedText.replace(/\n/g, '<br />');

            container.innerHTML = `
                <div class="w-8 h-8 rounded-full ${isUser ? 'bg-clay-100 text-clay-900 border border-clay-200' : 'bg-clay-500 text-white'} flex items-center justify-center shrink-0">
                    <i class="fa-solid ${isUser ? 'fa-user' : 'fa-wind'} text-xs"></i>
                </div>
                <div class="${isUser ? 'bg-clay-100 border border-clay-200 text-clay-900' : 'bg-clay-50 border border-clay-100 text-clay-900'} p-4 rounded-2xl max-w-[85%] space-y-1">
                    <p class="leading-relaxed text-sm">${formattedText}</p>
                </div>
            `;
            chatLog.appendChild(container);
            chatLog.scrollTop = chatLog.scrollHeight;
        }

        function appendLoader() {
            const id = "loader-" + Date.now();
            const container = document.createElement('div');
            container.id = id;
            container.className = "flex gap-3";
            container.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-clay-500 text-white flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-wind text-xs animate-spin"></i>
                </div>
                <div class="bg-clay-50 p-4 rounded-2xl border border-clay-100 text-clay-500 flex items-center space-x-2">
                    <span class="w-2 h-2 rounded-full bg-clay-400 animate-bounce"></span>
                    <span class="w-2 h-2 rounded-full bg-clay-400 animate-bounce [animation-delay:0.2s]"></span>
                    <span class="w-2 h-2 rounded-full bg-clay-400 animate-bounce [animation-delay:0.4s]"></span>
                </div>
            `;
            chatLog.appendChild(container);
            chatLog.scrollTop = chatLog.scrollHeight;
            return id;
        }

        function removeLoader(id) {
            const element = document.getElementById(id);
            if (element) element.remove();
        }
    </script>
</body>
</html>