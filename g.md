<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BONSAI ATELIER — Premium Curated Specimen Hub & Academy</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Premium Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Playball&display=swap" rel="stylesheet">

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            display: ['Cinzel', 'serif'],
            serif: ['Cormorant Garamond', 'serif'],
            sans: ['Plus Jakarta Sans', 'sans-serif'],
            accent: ['Playball', 'cursive'],
          },
          colors: {
            sand: {
              50: '#FAF8F5',
              100: '#F3ECE0',
              200: '#E6DCC8',
              300: '#D9CBB0',
              400: '#BFA88F',
              500: '#A4876E',
            },
            charcoal: {
              800: '#2C2520',
              900: '#1F1A17',
            },
            zenGreen: {
              300: '#8FA882',
              600: '#4F5D46',
              800: '#2D3E24',
            }
          },
          animation: {
            'float-slow': 'float 8s ease-in-out infinite',
            'spin-slow': 'spin 25s linear infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' },
            }
          }
        }
      }
    }
  </script>

  <style>
    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #F3ECE0;
    }
    ::-webkit-scrollbar-thumb {
      background: #A4876E;
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #2C2520;
    }
    
    /* Japanese calligraphy watermark styling */
    .kanji-watermark {
      font-size: 40vw;
      line-height: 1;
      font-family: 'Cinzel', serif;
      pointer-events: none;
      user-select: none;
      opacity: 0.022;
      color: #000;
      mix-blend-mode: multiply;
    }
  </style>
</head>
<body class="bg-sand-100 text-charcoal-800 font-sans selection:bg-zenGreen-600 selection:text-sand-50 overflow-x-hidden">

  <!-- ================= NOTIFICATION SYSTEMS ================= -->
  <div id="toast-container" class="fixed bottom-6 right-6 z-50 flex flex-col gap-3"></div>

  <!-- ================= PREMIUM AUDIO ENGINE ================= -->
  <script>
    // Synthesis of high-end authentic Japanese Zen singing bowl & bell using Web Audio API
    const playZenBell = (frequency = 144, type = "bell") => {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        
        const now = ctx.currentTime;
        
        if (type === "bell") {
          // Deep authentic low overtone bell
          const masterGain = ctx.createGain();
          masterGain.gain.setValueAtTime(0, now);
          masterGain.gain.linearRampToValueAtTime(0.5, now + 0.02);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.0);
          
          // Harmonious partials for real physical metal acoustics
          const partials = [1.0, 1.5, 1.98, 2.44, 3.0, 4.1];
          const gains = [1.0, 0.4, 0.3, 0.2, 0.1, 0.05];
          
          partials.forEach((p, idx) => {
            const osc = ctx.createOscillator();
            const oscGain = ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(frequency * p, now);
            
            oscGain.gain.setValueAtTime(gains[idx], now);
            oscGain.gain.exponentialRampToValueAtTime(0.001, now + (3.0 / p));
            
            osc.connect(oscGain);
            oscGain.connect(masterGain);
            osc.start(now);
            osc.stop(now + 4);
          });
          
          masterGain.connect(ctx.destination);
        } else {
          // High-frequency subtle chime
          const osc = ctx.createOscillator();
          const gainNode = ctx.createGain();
          
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(frequency, now);
          
          gainNode.gain.setValueAtTime(0, now);
          gainNode.gain.linearRampToValueAtTime(0.2, now + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
          
          osc.connect(gainNode);
          gainNode.connect(ctx.destination);
          
          osc.start();
          osc.stop(now + 1);
        }
      } catch (e) {
        console.warn("Audio Context not yet initialized/supported by browser interaction.");
      }
    };

    const showToast = (message, title = "Zen Companion") => {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = 'bg-charcoal-800 text-sand-100 border border-sand-400/20 px-5 py-4 rounded-xl shadow-2xl flex items-start gap-4 transition-all duration-500 transform translate-y-4 opacity-0 max-w-sm';
      toast.innerHTML = `
        <div class="p-1 rounded-full bg-zenGreen-600/30 text-zenGreen-300">
          <i data-lucide="lotus" class="w-5 h-5"></i>
        </div>
        <div class="flex-1">
          <h4 class="font-display text-sm tracking-widest text-sand-300 uppercase">${title}</h4>
          <p class="font-serif text-sm text-sand-200 mt-1">${message}</p>
        </div>
      `;
      container.appendChild(toast);
      lucide.createIcons();
      setTimeout(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
      }, 50);
      
      // Auto-remove after 4.5s
      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 500);
      }, 4500);
    };
  </script>

  <!-- ================= ATELIER NAVIGATION ================= -->
  <header class="fixed top-0 left-0 w-full z-40 bg-sand-100/90 backdrop-blur-md border-b border-sand-200/50 transition-all duration-300">
    <div class="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
      <!-- Monogram Logo -->
      <a href="#hero" class="flex items-center gap-3 group" onclick="playZenBell(180, 'chime')">
        <div class="relative w-10 h-10 flex items-center justify-center border border-charcoal-800 rounded-lg overflow-hidden transition-all duration-500 group-hover:bg-charcoal-800 group-hover:text-sand-100">
          <span class="font-display font-bold text-lg tracking-tighter">B</span>
          <span class="absolute text-[8px] bottom-1 font-display tracking-widest opacity-70 group-hover:text-sand-300">M</span>
        </div>
        <div class="hidden sm:block">
          <h1 class="font-display text-sm tracking-[0.25em] font-bold uppercase">Bonsai Atelier</h1>
          <p class="font-serif text-[10px] tracking-widest text-charcoal-800/60 uppercase">— ISSUE Nº 27</p>
        </div>
      </a>

      <!-- Premium Center Navigation -->
      <nav class="hidden md:flex items-center gap-8 lg:gap-12 text-xs tracking-[0.2em] uppercase font-semibold">
        <a href="#collection" class="hover:text-zenGreen-600 transition-colors py-2 relative group">
          Collection
          <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-zenGreen-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#diagnostic" class="hover:text-zenGreen-600 transition-colors py-2 relative group">
          Companion AI
          <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-zenGreen-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#masterclass" class="hover:text-zenGreen-600 transition-colors py-2 relative group">
          Masterclass
          <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-zenGreen-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#bidding-vault" class="hover:text-zenGreen-600 transition-colors py-2 relative group">
          Live Bidding
          <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-zenGreen-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>

      <!-- Right Interaction Set -->
      <div class="flex items-center gap-6">
        <span class="hidden xl:inline-block text-[11px] font-mono uppercase text-charcoal-800/60 bg-sand-200/50 px-3 py-1 rounded">
          TOKYO TIME: <span id="tokyo-clock">00:00:00 JST</span>
        </span>
        
        <button onclick="toggleMobileMenu()" class="p-2 border border-charcoal-800/20 hover:border-charcoal-800 rounded-lg transition-all" aria-label="Toggle menu">
          <i data-lucide="menu" class="w-5 h-5"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Fullscreen Immersive Mobile Menu Overlay -->
  <div id="mobile-menu" class="fixed inset-0 z-50 bg-charcoal-900 text-sand-100 transform translate-x-full transition-transform duration-700 ease-in-out flex flex-col justify-between p-10 lg:p-20">
    <div class="flex justify-between items-center">
      <div class="font-display text-xl tracking-[0.25em]">BONSAI ATELIER</div>
      <button onclick="toggleMobileMenu()" class="p-3 border border-sand-100/20 hover:border-sand-100 rounded-full transition-all">
        <i data-lucide="x" class="w-6 h-6"></i>
      </button>
    </div>
    
    <nav class="flex flex-col gap-6 lg:gap-10 my-auto">
      <a onclick="toggleMobileMenu(); playZenBell(180, 'chime')" href="#collection" class="font-serif text-4xl lg:text-6xl hover:italic hover:pl-6 transition-all duration-300 text-sand-300 hover:text-sand-50">01. Master Collection</a>
      <a onclick="toggleMobileMenu(); playZenBell(220, 'chime')" href="#diagnostic" class="font-serif text-4xl lg:text-6xl hover:italic hover:pl-6 transition-all duration-300 text-sand-300 hover:text-sand-50">02. Botanical Diagnostic</a>
      <a onclick="toggleMobileMenu(); playZenBell(260, 'chime')" href="#masterclass" class="font-serif text-4xl lg:text-6xl hover:italic hover:pl-6 transition-all duration-300 text-sand-300 hover:text-sand-50">03. Masterclass Academy</a>
      <a onclick="toggleMobileMenu(); playZenBell(300, 'chime')" href="#bidding-vault" class="font-serif text-4xl lg:text-6xl hover:italic hover:pl-6 transition-all duration-300 text-sand-300 hover:text-sand-50">04. Interactive Auction Vault</a>
    </nav>

    <div class="border-t border-sand-100/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs tracking-wider text-sand-400">
      <div>© 2026 BONSAI ATELIER. ALL RIGHTS RESERVED.</div>
      <div class="flex gap-6">
        <a href="#" class="hover:text-sand-100 transition-colors">INSTAGRAM</a>
        <a href="#" class="hover:text-sand-100 transition-colors">PINTEREST</a>
        <a href="#" class="hover:text-sand-100 transition-colors">TWITTER</a>
      </div>
    </div>
  </div>


  <!-- ================= MAIN APP WRAPPER ================= -->
  <main class="relative z-10 pt-20">

    <!-- ================= HERO SECTION (RECREATION OF THE INSPIRED MASTERPIECE) ================= -->
    <section id="hero" class="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-12 py-12 select-none">
      
      <!-- Calligraphy Canvas Overlay Backdrop -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div class="kanji-watermark absolute transform -translate-y-12 select-none select-none font-serif">
          盆栽
        </div>
      </div>

      <!-- Hero Container for Layout Elements -->
      <div class="max-w-[1400px] w-full mx-auto relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Background Massive Display Text -->
        <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none z-0">
          <h1 class="font-display text-[15vw] leading-none tracking-[0.18em] font-bold text-charcoal-800/10 uppercase select-none">
            BONSAI
          </h1>
          <div class="font-accent text-[8vw] text-zenGreen-600/25 -mt-[6%] transform rotate-[-4deg] select-none">
            Mania
          </div>
        </div>

        <!-- Left Column: Legacy Meta -->
        <div class="lg:col-span-3 flex flex-row lg:flex-col justify-between items-center lg:items-start gap-6 z-20">
          <div class="flex items-center gap-3 lg:gap-4">
            <span class="h-[1px] w-12 bg-charcoal-800"></span>
            <p class="font-display text-xs lg:text-sm tracking-[0.25em] font-semibold text-charcoal-800">BORN IN 1882</p>
          </div>
          <div class="hidden lg:block text-xs uppercase tracking-widest text-charcoal-800/50 mt-12 font-semibold">
            <p>Specimen ID: JP-882-SHI</p>
            <p class="mt-1">Pot: Antique Yixing Zisha</p>
          </div>
        </div>

        <!-- Center Column: Primary Interlocking Parallax Graphic -->
        <div class="lg:col-span-6 flex justify-center items-center relative py-12 z-10 min-h-[400px]" id="hero-image-container">
          <!-- Shadow base element -->
          <div class="absolute bottom-12 w-[60%] h-8 bg-charcoal-900/10 rounded-full blur-xl transform scale-110 pointer-events-none"></div>

          <!-- Master Bonsai Image Render Overlapping Layers -->
          <div class="relative w-full max-w-[500px] transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing hover:scale-[1.03]" id="parallax-target">
            
            <!-- White Jin Deadwood branch background overlapping effect -->
            <div class="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent to-sand-100 z-10"></div>
            
            <!-- Real-world Premium transparent-cutout mockup representation of the exact bonsai -->
            <img 
              src="https://images.unsplash.com/photo-1613143763660-f463200938b8?q=80&w=1200&auto=format&fit=crop" 
              alt="Shohin Shimpaku Bonsai Heritage" 
              class="w-full h-auto drop-shadow-[0_25px_40px_rgba(44,37,32,0.22)] object-contain relative z-20"
            />
            
            <!-- Floating dust/zen glowing particles -->
            <span class="absolute w-2 h-2 rounded-full bg-zenGreen-300/60 top-12 left-1/4 animate-float-slow filter blur-[1px]"></span>
            <span class="absolute w-3 h-3 rounded-full bg-sand-300/50 bottom-24 right-1/4 animate-float-slow filter blur-[1px]" style="animation-delay: 3s"></span>
          </div>
        </div>

        <!-- Right Column: Editorial & Read More -->
        <div class="lg:col-span-3 flex flex-col justify-center items-start gap-6 z-20">
          <div class="space-y-4">
            <h3 class="font-display text-sm tracking-[0.2em] font-semibold text-charcoal-800 uppercase">SHOHIN SHIMPAKU BONSAI</h3>
            <span class="block w-12 h-[1px] bg-charcoal-800/40"></span>
            <p class="font-serif text-lg text-charcoal-800/80 leading-relaxed italic">
              "The Shohin bonsai got a lot of attention at the 8th World Bonsai Convention. One of the most impressive was a shimpaku juniper with beautiful, intricate deadwood."
            </p>
          </div>

          <!-- Premium Circular CTA -->
          <a href="#collection" onclick="playZenBell(280, 'chime')" class="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-charcoal-800 rounded-full group bg-gradient-to-br from-charcoal-800 to-sand-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-sand-200 mt-6">
            <span class="relative px-5 py-3 transition-all ease-in duration-75 bg-sand-100 rounded-full group-hover:bg-opacity-0 group-hover:text-sand-100 flex items-center gap-3">
              <span class="text-xs tracking-widest font-semibold uppercase">Examine Vault</span>
              <i data-lucide="arrow-down-right" class="w-4 h-4 transform group-hover:rotate-45 transition-transform"></i>
            </span>
          </a>
        </div>
      </div>

      <!-- Bottom Slider / Specimen indicators -->
      <div class="absolute bottom-10 left-6 lg:left-12 flex items-center gap-6 z-20">
        <div class="flex items-center gap-3">
          <span class="text-xs font-semibold tracking-wider font-mono">01</span>
          <div class="w-24 h-[2px] bg-charcoal-800/20 relative overflow-hidden">
            <div class="absolute top-0 left-0 h-full w-1/3 bg-charcoal-800 transition-all duration-500" id="hero-progress-bar"></div>
          </div>
          <span class="text-xs font-semibold tracking-wider font-mono text-charcoal-800/40">04</span>
        </div>
      </div>
    </section>

    <!-- ================= MUSEUM COLLECTION SHOWCASE ================= -->
    <section id="collection" class="bg-[#FAF8F5] py-24 px-6 lg:px-12 border-y border-sand-200/40 relative">
      <div class="max-w-[1400px] mx-auto">
        
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span class="text-xs font-semibold uppercase tracking-[0.3em] text-zenGreen-600 block mb-3">THE PERMANENT ARCHIVE</span>
            <h2 class="font-display text-4xl lg:text-5xl tracking-wide">Specimen Dossiers</h2>
          </div>
          <p class="max-w-md font-serif text-lg text-charcoal-800/70 leading-relaxed italic">
            Each curated masterpiece holds generations of meticulous pruning, climate resilience, and artistic guidance. Filter through our exclusive vaults.
          </p>
        </div>

        <!-- Specimen Filtering System -->
        <div class="flex flex-wrap gap-3 mb-12" id="specimen-filters">
          <button onclick="filterSpecimens('all')" class="specimen-filter-btn px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-charcoal-800 bg-charcoal-800 text-sand-100 transition-all">All Specimens</button>
          <button onclick="filterSpecimens('conifer')" class="specimen-filter-btn px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-charcoal-800/20 text-charcoal-800 hover:border-charcoal-800 transition-all">Coniferous</button>
          <button onclick="filterSpecimens('deciduous')" class="specimen-filter-btn px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-charcoal-800/20 text-charcoal-800 hover:border-charcoal-800 transition-all">Deciduous</button>
          <button onclick="filterSpecimens('extreme-shari')" class="specimen-filter-btn px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-charcoal-800/20 text-charcoal-800 hover:border-charcoal-800 transition-all">Legacy Shari</button>
        </div>

        <!-- Dynamic Specimen Showcase Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="specimens-grid">
          
          <!-- Card 1 -->
          <div class="specimen-card bg-sand-100 border border-sand-200/60 rounded-2xl overflow-hidden group hover:shadow-2xl hover:border-sand-400/30 transition-all duration-500 flex flex-col justify-between" data-category="conifer extreme-shari">
            <div class="p-8 pb-0 relative">
              <div class="flex justify-between items-start">
                <span class="font-mono text-xs text-charcoal-800/50">VAULT: NO. 01</span>
                <span class="bg-zenGreen-600/10 text-zenGreen-800 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">EST. 140 YRS</span>
              </div>
              <div class="h-64 my-6 flex items-center justify-center relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop" alt="Pinus Pentaphylla" class="h-full object-contain transform group-hover:scale-105 transition-transform duration-700">
              </div>
            </div>
            <div class="p-8 pt-4 bg-sand-200/20 border-t border-sand-200/40">
              <h3 class="font-display text-xl tracking-wide group-hover:text-zenGreen-600 transition-colors">Pinus Pentaphylla</h3>
              <p class="font-serif italic text-sm text-charcoal-800/60 mb-6">Japanese Five-Needle White Pine</p>
              
              <div class="grid grid-cols-2 gap-4 border-t border-sand-200/60 pt-4 mb-6 text-xs font-mono uppercase tracking-wider text-charcoal-800/60">
                <div>Origin: <span class="text-charcoal-800 font-semibold block">Nara, Japan</span></div>
                <div>Wiring Pattern: <span class="text-charcoal-800 font-semibold block">Moyo-Gi</span></div>
              </div>

              <button onclick="openSpecimenDetail('five-needle')" class="w-full py-3 bg-charcoal-800 hover:bg-zenGreen-600 text-sand-50 text-xs font-semibold uppercase tracking-widest rounded-xl transition-all duration-300">
                Inspect Document Details
              </button>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="specimen-card bg-sand-100 border border-sand-200/60 rounded-2xl overflow-hidden group hover:shadow-2xl hover:border-sand-400/30 transition-all duration-500 flex flex-col justify-between" data-category="deciduous">
            <div class="p-8 pb-0 relative">
              <div class="flex justify-between items-start">
                <span class="font-mono text-xs text-charcoal-800/50">VAULT: NO. 02</span>
                <span class="bg-zenGreen-600/10 text-zenGreen-800 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">EST. 85 YRS</span>
              </div>
              <div class="h-64 my-6 flex items-center justify-center relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop" alt="Acer Palmatum" class="h-full object-contain transform group-hover:scale-105 transition-transform duration-700">
              </div>
            </div>
            <div class="p-8 pt-4 bg-sand-200/20 border-t border-sand-200/40">
              <h3 class="font-display text-xl tracking-wide group-hover:text-zenGreen-600 transition-colors">Acer Palmatum</h3>
              <p class="font-serif italic text-sm text-charcoal-800/60 mb-6">Kyoto Mountain Red Maple</p>
              
              <div class="grid grid-cols-2 gap-4 border-t border-sand-200/60 pt-4 mb-6 text-xs font-mono uppercase tracking-wider text-charcoal-800/60">
                <div>Origin: <span class="text-charcoal-800 font-semibold block">Kyoto Outskirts</span></div>
                <div>Wiring Pattern: <span class="text-charcoal-800 font-semibold block">Chokan Style</span></div>
              </div>

              <button onclick="openSpecimenDetail('red-maple')" class="w-full py-3 bg-charcoal-800 hover:bg-zenGreen-600 text-sand-50 text-xs font-semibold uppercase tracking-widest rounded-xl transition-all duration-300">
                Inspect Document Details
              </button>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="specimen-card bg-sand-100 border border-sand-200/60 rounded-2xl overflow-hidden group hover:shadow-2xl hover:border-sand-400/30 transition-all duration-500 flex flex-col justify-between" data-category="conifer">
            <div class="p-8 pb-0 relative">
              <div class="flex justify-between items-start">
                <span class="font-mono text-xs text-charcoal-800/50">VAULT: NO. 03</span>
                <span class="bg-zenGreen-600/10 text-zenGreen-800 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">EST. 110 YRS</span>
              </div>
              <div class="h-64 my-6 flex items-center justify-center relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop" alt="Juniperus Chinensis" class="h-full object-contain transform group-hover:scale-105 transition-transform duration-700">
              </div>
            </div>
            <div class="p-8 pt-4 bg-sand-200/20 border-t border-sand-200/40">
              <h3 class="font-display text-xl tracking-wide group-hover:text-zenGreen-600 transition-colors">Juniperus Chinensis</h3>
              <p class="font-serif italic text-sm text-charcoal-800/60 mb-6">Kishu Shimpaku Juniper</p>
              
              <div class="grid grid-cols-2 gap-4 border-t border-sand-200/60 pt-4 mb-6 text-xs font-mono uppercase tracking-wider text-charcoal-800/60">
                <div>Origin: <span class="text-charcoal-800 font-semibold block">Kishu Region</span></div>
                <div>Wiring Pattern: <span class="text-charcoal-800 font-semibold block">Shakan</span></div>
              </div>

              <button onclick="openSpecimenDetail('kishu-shimpaku')" class="w-full py-3 bg-charcoal-800 hover:bg-zenGreen-600 text-sand-50 text-xs font-semibold uppercase tracking-widest rounded-xl transition-all duration-300">
                Inspect Document Details
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ================= SPECIMEN DETAIL MODAL ================= -->
    <div id="specimen-modal" class="fixed inset-0 z-50 bg-charcoal-900/85 backdrop-blur-md hidden items-center justify-center p-6 transition-all duration-500">
      <div class="bg-sand-100 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-sand-300 relative">
        <button onclick="closeSpecimenDetail()" class="absolute top-6 right-6 p-2 rounded-full border border-charcoal-800/10 hover:border-charcoal-800 transition-colors z-10">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Left side graphic -->
          <div class="p-8 bg-sand-200/40 flex flex-col justify-between items-center relative border-b md:border-b-0 md:border-r border-sand-300/60">
            <span class="font-display text-xs uppercase tracking-widest text-charcoal-800/50 self-start" id="modal-vault-id">VAULT ENTRY NO. 01</span>
            <div class="h-80 w-full my-6 flex items-center justify-center">
              <img id="modal-image" src="" alt="" class="h-full object-contain">
            </div>
            <div class="w-full flex justify-between text-xs font-mono tracking-widest text-charcoal-800/60">
              <span>AGE: <strong id="modal-age" class="text-charcoal-800">140 YRS</strong></span>
              <span>EST. VALUE: <strong id="modal-value" class="text-charcoal-800">¥1,850,000</strong></span>
            </div>
          </div>

          <!-- Right side details -->
          <div class="p-8 flex flex-col justify-between">
            <div>
              <span id="modal-scientific-family" class="text-xs uppercase tracking-[0.2em] font-semibold text-zenGreen-600 block mb-2">CUPRESSACEAE</span>
              <h3 id="modal-title" class="font-display text-3xl tracking-wide text-charcoal-800 mb-2">Pinus Pentaphylla</h3>
              <p id="modal-japanese-title" class="font-serif italic text-lg text-charcoal-800/60 mb-6">五葉松 — "Goyomatsu"</p>
              
              <div class="space-y-4 text-sm leading-relaxed text-charcoal-800/80 mb-8">
                <p id="modal-description">This extraordinary five-needle pine is highly valued for its elegant, dark-blue foliage and dynamic needle-clustering. Over a century of structural styling gives it its trademark tiered cloud aesthetic.</p>
                
                <!-- Detailed Spec Grid -->
                <div class="grid grid-cols-2 gap-4 border-t border-sand-300/40 pt-4 text-xs font-mono uppercase text-charcoal-800/70">
                  <div>WIRING SCHEDULE: <span id="modal-wiring" class="block font-semibold text-charcoal-800 mt-1">Autumn & Winter</span></div>
                  <div>LAST REPOT: <span id="modal-repot" class="block font-semibold text-charcoal-800 mt-1">April 2024</span></div>
                </div>
              </div>
            </div>

            <!-- Modal Action -->
            <div class="flex gap-4">
              <button onclick="playZenBell(120, 'bell'); showToast('Curator Consultation requested. We will contact your private coordinates.', 'Vault Consultation'); closeSpecimenDetail()" class="flex-1 py-4 bg-charcoal-800 hover:bg-zenGreen-600 text-sand-50 text-xs font-semibold uppercase tracking-widest rounded-xl transition-all duration-300">
                Inquire Curation Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- ================= BOTANICAL DIAGNOSTIC AI COMPANION ================= -->
    <section id="diagnostic" class="py-24 px-6 lg:px-12 bg-charcoal-900 text-sand-100 relative overflow-hidden">
      <!-- Ambient Zen Glow backdrop -->
      <div class="absolute top-1/4 left-1/3 w-96 h-96 bg-zenGreen-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-[1400px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <!-- Control Panel -->
          <div class="lg:col-span-5 space-y-8 relative z-10">
            <div>
              <span class="text-xs font-semibold uppercase tracking-[0.3em] text-zenGreen-300 block mb-3">ZEN COMPANION APPLICATION</span>
              <h2 class="font-display text-4xl lg:text-5xl tracking-wide">Botanical Diagnostic</h2>
              <p class="font-serif text-lg text-sand-300/70 mt-4 leading-relaxed italic">
                Input your atmospheric conditions to simulate the specimen's water requirement, vegetative response, and master wiring stress limits in real time.
              </p>
            </div>

            <!-- Interacting sliders and parameters -->
            <div class="bg-charcoal-800/50 border border-sand-100/10 p-8 rounded-2xl space-y-6 backdrop-blur-md">
              
              <!-- Species Selector -->
              <div class="space-y-2">
                <label class="block text-xs font-mono uppercase tracking-widest text-sand-300">Select Species Genus</label>
                <div class="grid grid-cols-3 gap-2">
                  <button onclick="selectDiagSpecies('shimpaku')" id="btn-diag-shimpaku" class="diag-species-btn py-2.5 px-3 border border-sand-100/10 rounded-lg text-[10px] tracking-wider uppercase font-semibold text-center hover:bg-sand-100/5 transition-all bg-zenGreen-600 text-sand-100">Shimpaku Juniper</button>
                  <button onclick="selectDiagSpecies('maple')" id="btn-diag-maple" class="diag-species-btn py-2.5 px-3 border border-sand-100/10 rounded-lg text-[10px] tracking-wider uppercase font-semibold text-center hover:bg-sand-100/5 transition-all">Mountain Maple</button>
                  <button onclick="selectDiagSpecies('blackpine')" id="btn-diag-blackpine" class="diag-species-btn py-2.5 px-3 border border-sand-100/10 rounded-lg text-[10px] tracking-wider uppercase font-semibold text-center hover:bg-sand-100/5 transition-all">Black Pine</button>
                </div>
              </div>

              <!-- Humidity Slider -->
              <div class="space-y-3">
                <div class="flex justify-between text-xs font-mono uppercase">
                  <span>Relative Humidity</span>
                  <span id="humidity-val" class="text-zenGreen-300">55%</span>
                </div>
                <input type="range" id="humidity-slider" min="10" max="100" value="55" class="w-full accent-zenGreen-300 cursor-ew-resize bg-charcoal-900 h-2 rounded-lg" oninput="updateDiagnostics()">
              </div>

              <!-- Solar Radiation Slider -->
              <div class="space-y-3">
                <div class="flex justify-between text-xs font-mono uppercase">
                  <span>Solar Radiation Exposure</span>
                  <span id="solar-val" class="text-zenGreen-300">350 W/m²</span>
                </div>
                <input type="range" id="solar-slider" min="0" max="1000" value="350" class="w-full accent-zenGreen-300 cursor-ew-resize bg-charcoal-900 h-2 rounded-lg" oninput="updateDiagnostics()">
              </div>

              <!-- Pruning Frequency Slider -->
              <div class="space-y-3">
                <div class="flex justify-between text-xs font-mono uppercase">
                  <span>Structural Pruning Rate</span>
                  <span id="pruning-val" class="text-zenGreen-300">Medium</span>
                </div>
                <input type="range" id="pruning-slider" min="1" max="3" value="2" class="w-full accent-zenGreen-300 cursor-ew-resize bg-charcoal-900 h-2 rounded-lg" oninput="updateDiagnostics()">
              </div>

              <!-- Diagnostic Action -->
              <button onclick="diagnoseSpecimen()" class="w-full py-4 bg-sand-100 hover:bg-sand-200 text-charcoal-900 text-xs font-semibold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                <i data-lucide="activity" class="w-4 h-4"></i>
                Simulate Reactive Output
              </button>
            </div>
          </div>

          <!-- Output Display / Reactive Visualizer -->
          <div class="lg:col-span-7 flex flex-col justify-center gap-8 relative">
            <div class="bg-charcoal-800/20 border border-sand-100/10 p-8 rounded-3xl relative z-10 flex flex-col md:flex-row gap-8 items-center">
              
              <!-- Live Canvas Visualizing the interactive wiring stress and needle thickness -->
              <div class="w-48 h-48 md:w-64 md:h-64 flex flex-col justify-center items-center relative border border-sand-100/5 rounded-full p-4 bg-charcoal-900/50">
                <svg id="vector-chart" class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#1f1a17" stroke-width="6" fill="transparent" />
                  <!-- Dynamic ring -->
                  <circle id="vector-accent-ring" cx="50" cy="50" r="40" stroke="#8FA882" stroke-width="6" fill="transparent" stroke-dasharray="251.2" stroke-dashoffset="100" />
                </svg>
                <div class="absolute text-center">
                  <span class="text-[10px] font-mono tracking-widest uppercase text-sand-400 block">Growth Quotient</span>
                  <span id="vitality-quotient" class="font-display text-4xl text-sand-50 block mt-1">74%</span>
                </div>
              </div>

              <!-- Analytical report -->
              <div class="flex-1 space-y-4">
                <h4 class="font-display text-lg tracking-wider text-sand-200">Environmental Diagnostics</h4>
                
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-charcoal-900/40 p-4 rounded-xl border border-sand-100/5">
                    <span class="text-[10px] text-sand-400 uppercase tracking-wider block">Est. Transpiration Rate</span>
                    <span id="output-transpiration" class="text-xl font-mono text-sand-100 mt-1 block">4.2 ml/hr</span>
                  </div>
                  <div class="bg-charcoal-900/40 p-4 rounded-xl border border-sand-100/5">
                    <span class="text-[10px] text-sand-400 uppercase tracking-wider block">Recommended Watering</span>
                    <span id="output-watering" class="text-xl font-mono text-sand-100 mt-1 block">Every 48 hrs</span>
                  </div>
                </div>

                <div class="space-y-2">
                  <span class="text-[10px] text-sand-400 uppercase tracking-wider block">Seasonal Botanical Action Advice</span>
                  <p id="output-diagnostic-text" class="font-serif text-sm italic text-sand-300 leading-relaxed">
                    Under standard autumn humidity levels, prioritize apical wiring tension release. Minimize liquid fertilizer application until spring leaf bud emergence.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ================= MASTERCLASS ATELIER ACADEMY ================= -->
    <section id="masterclass" class="py-24 px-6 lg:px-12 bg-[#FAF8F5] relative">
      <div class="max-w-[1400px] mx-auto">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span class="text-xs font-semibold uppercase tracking-[0.3em] text-zenGreen-600 block mb-3">BONSAI MASTERCLASS ACADEMY</span>
            <h2 class="font-display text-4xl lg:text-5xl tracking-wide">Learn True Pruning Artistry</h2>
          </div>
          <p class="max-w-md font-serif text-lg text-charcoal-800/70 leading-relaxed italic">
            Schedule a virtual or physical session with senior masters from Tokyo, Saitama, and Kyoto. Learn traditional wiring, grafting, and moss-culturing.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Left Column: Master Profiles & Calendars -->
          <div class="lg:col-span-8 space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <!-- Master 1 -->
              <div onclick="selectMaster('Kenji Ozu')" class="master-card border border-sand-300 bg-sand-100/50 p-8 rounded-2xl cursor-pointer hover:border-charcoal-800 transition-all duration-300 flex gap-6 items-start active-master border-2 border-charcoal-800 bg-white shadow-xl">
                <div class="w-16 h-16 rounded-full overflow-hidden bg-sand-300 shrink-0">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" alt="Master Kenji Ozu" class="w-full h-full object-cover">
                </div>
                <div>
                  <h4 class="font-display text-lg tracking-wider text-charcoal-800">Master Kenji Ozu</h4>
                  <p class="text-xs font-mono text-charcoal-800/60 uppercase mt-1">Saitama Bonsai Village</p>
                  <p class="font-serif italic text-sm text-charcoal-800/70 mt-3">"Deadwood is the quiet record of seasonal transformation."</p>
                  <span class="inline-block bg-zenGreen-600/10 text-zenGreen-800 text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full mt-4">Sargent Junipers</span>
                </div>
              </div>

              <!-- Master 2 -->
              <div onclick="selectMaster('Yukihiro Kobayashi')" class="master-card border border-sand-300 bg-sand-100/50 p-8 rounded-2xl cursor-pointer hover:border-charcoal-800 transition-all duration-300 flex gap-6 items-start">
                <div class="w-16 h-16 rounded-full overflow-hidden bg-sand-300 shrink-0">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" alt="Master Yukihiro Kobayashi" class="w-full h-full object-cover">
                </div>
                <div>
                  <h4 class="font-display text-lg tracking-wider text-charcoal-800">Yukihiro Kobayashi</h4>
                  <p class="text-xs font-mono text-charcoal-800/60 uppercase mt-1">Kyoto Outskirts School</p>
                  <p class="font-serif italic text-sm text-charcoal-800/70 mt-3">"Maples express spatial poetry on a grand scale."</p>
                  <span class="inline-block bg-zenGreen-600/10 text-zenGreen-800 text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full mt-4">Mountain Maples</span>
                </div>
              </div>

            </div>

            <!-- Syllabus Timeline Accordion -->
            <div class="bg-sand-100 border border-sand-300 p-8 rounded-3xl space-y-6">
              <h4 class="font-display text-xl tracking-wider text-charcoal-800 border-b border-sand-300 pb-4">Workshop Curriculum Syllabus</h4>
              
              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div class="bg-charcoal-800 text-sand-50 font-mono text-xs p-2 rounded-lg">Module 1</div>
                  <div>
                    <h5 class="text-sm font-semibold text-charcoal-800">Trunk Aesthetic Manipulation</h5>
                    <p class="text-xs text-charcoal-800/60 font-serif italic mt-1">Manipulating standard tree structure and identifying the focal apex node.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 border-t border-sand-300/60 pt-4">
                  <div class="bg-charcoal-800 text-sand-50 font-mono text-xs p-2 rounded-lg">Module 2</div>
                  <div>
                    <h5 class="text-sm font-semibold text-charcoal-800">Shari & Jin Whittling Artistry</h5>
                    <p class="text-xs text-charcoal-800/60 font-serif italic mt-1">Peeling back outer bark to model dynamic natural branch fracture aesthetics.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 border-t border-sand-300/60 pt-4">
                  <div class="bg-charcoal-800 text-sand-50 font-mono text-xs p-2 rounded-lg">Module 3</div>
                  <div>
                    <h5 class="text-sm font-semibold text-charcoal-800">Repotting & Soil Science Mechanics</h5>
                    <p class="text-xs text-charcoal-800/60 font-serif italic mt-1">Optimal ratio formulation of Akadama, pumice, and volcanic black ash.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Live Booking Card -->
          <div class="lg:col-span-4">
            <div class="bg-charcoal-800 text-sand-100 p-8 rounded-3xl space-y-6 relative sticky top-24">
              <div class="flex justify-between items-start">
                <div>
                  <span class="text-[10px] uppercase font-mono tracking-widest text-sand-300">Live Academy Booking</span>
                  <h4 class="font-display text-xl tracking-wide text-sand-50 mt-1">Book Session</h4>
                </div>
                <div class="p-2 rounded-full bg-zenGreen-600/30 text-zenGreen-300">
                  <i data-lucide="calendar" class="w-5 h-5"></i>
                </div>
              </div>

              <!-- Selected Master Visual Indicator -->
              <div class="bg-charcoal-900/40 p-4 rounded-xl border border-sand-100/5">
                <span class="text-[10px] text-sand-400 uppercase tracking-widest block">Selected Mentor</span>
                <span id="selected-mentor-name" class="font-serif text-lg text-sand-100 mt-1 block italic">Master Kenji Ozu</span>
              </div>

              <!-- Interactive Date Picker Form -->
              <div class="space-y-4">
                <div class="space-y-2">
                  <label class="block text-[10px] text-sand-400 uppercase tracking-widest">Select Date</label>
                  <select id="booking-date" class="w-full py-3 px-4 rounded-xl bg-charcoal-900 border border-sand-100/10 text-sand-100 text-sm focus:outline-none focus:border-zenGreen-300">
                    <option value="June 12, 2026">June 12, 2026 — 09:00 JST</option>
                    <option value="June 14, 2026">June 14, 2026 — 14:00 JST</option>
                    <option value="June 18, 2026">June 18, 2026 — 11:00 JST</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="block text-[10px] text-sand-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" id="booking-name" placeholder="Enzo Ferrari" class="w-full py-3 px-4 rounded-xl bg-charcoal-900 border border-sand-100/10 text-sand-100 text-sm focus:outline-none focus:border-zenGreen-300">
                </div>

                <div class="space-y-2">
                  <label class="block text-[10px] text-sand-400 uppercase tracking-widest">Email Coordinates</label>
                  <input type="email" id="booking-email" placeholder="enzo@atelier.com" class="w-full py-3 px-4 rounded-xl bg-charcoal-900 border border-sand-100/10 text-sand-100 text-sm focus:outline-none focus:border-zenGreen-300">
                </div>
              </div>

              <div class="border-t border-sand-100/10 pt-4 flex justify-between items-center text-xs">
                <span class="text-sand-400">Total Workshop Cost:</span>
                <span class="text-lg font-mono font-bold text-sand-50">¥35,000 JPY</span>
              </div>

              <button onclick="submitBooking()" class="w-full py-4 bg-sand-100 hover:bg-sand-200 text-charcoal-900 text-xs font-semibold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                Secure Reserved Slot
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ================= INTERACTIVE LIVE AUCTION VAULT ================= -->
    <section id="bidding-vault" class="py-24 px-6 lg:px-12 bg-charcoal-900 text-sand-100 border-t border-sand-100/10 relative overflow-hidden">
      <!-- Calligraphy Canvas Overlay Backdrop -->
      <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none select-none overflow-hidden">
        <div class="kanji-watermark select-none font-serif transform translate-x-1/3">
          極
        </div>
      </div>

      <div class="max-w-[1400px] mx-auto relative z-10">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span class="text-xs font-semibold uppercase tracking-[0.3em] text-zenGreen-300 block mb-3">EXCLUSIVE PRIVATE ACQUISITION</span>
            <h2 class="font-display text-4xl lg:text-5xl tracking-wide">Live Specimen Bidding Arena</h2>
          </div>
          <p class="max-w-md font-serif text-lg text-sand-300/70 leading-relaxed italic">
            Enter private bids in our dynamic real-time simulated global market. Watch pricing histories adjust based on collectors' custom wiring demands.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Live Auction Card Display -->
          <div class="lg:col-span-5 bg-charcoal-800 border border-sand-100/10 p-8 rounded-3xl space-y-6">
            <div class="flex justify-between items-center">
              <span class="font-mono text-xs text-zenGreen-300 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> LIVE ARENA
              </span>
              <span class="text-xs text-sand-400 font-mono">LOT NO. 408</span>
            </div>

            <div class="h-64 my-6 flex items-center justify-center relative bg-charcoal-900/30 rounded-2xl overflow-hidden p-6 border border-sand-100/5">
              <img src="https://images.unsplash.com/photo-1613143763660-f463200938b8?q=80&w=800&auto=format&fit=crop" alt="Shimpaku Auction specimen" class="h-full object-contain">
            </div>

            <div>
              <h3 class="font-display text-2xl tracking-wide text-sand-100">Shimpaku Juniper "Ryumon"</h3>
              <p class="font-serif italic text-sm text-sand-400 mt-1">Dragon Gate Cascade Bonsai — Estimated Age 210 Yrs</p>
            </div>

            <!-- Real-time dynamic bids list -->
            <div class="space-y-3">
              <h5 class="text-xs font-mono uppercase tracking-widest text-sand-400">Current Top Bids</h5>
              <div id="bids-log" class="space-y-2 text-xs font-mono">
                <!-- Injected programmatically -->
                <div class="flex justify-between py-2 border-b border-sand-100/5 text-sand-300">
                  <span>Collector: JP-993</span>
                  <span>¥1,920,000 JPY</span>
                </div>
                <div class="flex justify-between py-2 border-b border-sand-100/5 text-sand-400">
                  <span>Collector: US-044</span>
                  <span>¥1,890,000 JPY</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bidding Interface & Price Vector Chart -->
          <div class="lg:col-span-7 space-y-8">
            <div class="bg-charcoal-800/50 border border-sand-100/10 p-8 rounded-3xl backdrop-blur-md space-y-6">
              
              <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <span class="text-xs font-mono text-sand-400 block">CURRENT PRICE VALVE</span>
                  <span id="current-price-display" class="font-display text-3xl md:text-4xl text-sand-50 block mt-1">¥1,920,000 JPY</span>
                </div>
                <div class="text-right sm:text-left">
                  <span class="text-xs font-mono text-sand-400 block">ESTIMATED VALUATION</span>
                  <span class="font-display text-lg text-zenGreen-300 block mt-1">¥2,500,000 JPY</span>
                </div>
              </div>

              <!-- Interactive Custom Bid Input -->
              <div class="space-y-2">
                <label class="block text-xs font-mono uppercase tracking-widest text-sand-300">Increase Bid Increment</label>
                <div class="flex gap-4">
                  <input type="number" id="user-bid-amount" min="1950000" step="10000" value="1950000" class="flex-1 bg-charcoal-900 border border-sand-100/10 rounded-xl px-4 text-sand-100 font-mono text-lg focus:outline-none focus:border-zenGreen-300">
                  <button onclick="placeUserBid()" class="px-8 py-4 bg-sand-100 hover:bg-sand-200 text-charcoal-900 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300">
                    Place Bid
                  </button>
                </div>
                <p class="text-[10px] text-sand-400 font-mono">Bidding requires minimum increment of ¥10,000 JPY</p>
              </div>

              <!-- Price Vector History Graph -->
              <div class="space-y-4">
                <div class="flex justify-between items-center text-xs font-mono">
                  <span>Price History Trend</span>
                  <span class="text-zenGreen-300 font-bold">+18.4% This Session</span>
                </div>
                <div class="h-48 border border-sand-100/5 rounded-2xl bg-charcoal-900/50 p-4 relative flex items-end">
                  
                  <!-- Dynamic Custom SVG Area Chart -->
                  <svg id="bid-chart-svg" class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <!-- Smooth elegant line matching the aesthetic of the paper -->
                    <path id="chart-line" d="M 0 90 L 20 85 L 40 70 L 60 62 L 80 50 L 100 42" fill="none" stroke="#8FA882" stroke-width="2" stroke-linecap="round"></path>
                    <path id="chart-fill" d="M 0 90 L 20 85 L 40 70 L 60 62 L 80 50 L 100 42 L 100 100 L 0 100 Z" fill="url(#gradient-green)" opacity="0.15"></path>
                    
                    <defs>
                      <linearGradient id="gradient-green" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#8FA882"></stop>
                        <stop offset="100%" stop-color="#8FA882" stop-opacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>

                  <!-- Dynamic grid timelines -->
                  <div class="absolute inset-0 flex justify-between p-4 pointer-events-none text-[8px] font-mono text-sand-400">
                    <div class="flex flex-col justify-between h-full">
                      <span>¥2.5M</span>
                      <span>¥1.5M</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

  </main>


  <!-- ================= ATELIER FOOTER ================= -->
  <footer class="bg-charcoal-900 text-sand-100 pt-24 pb-12 border-t border-sand-100/10">
    <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
      
      <!-- Top footer elements -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-sand-100/10">
        
        <!-- Atelier Brand Details -->
        <div class="lg:col-span-4 space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 flex items-center justify-center border border-sand-100 rounded-lg">
              <span class="font-display font-bold text-sm">B</span>
            </div>
            <h4 class="font-display text-sm tracking-[0.2em] uppercase font-bold text-sand-50">Bonsai Atelier</h4>
          </div>
          <p class="font-serif italic text-base text-sand-400 leading-relaxed">
            "In Zen gardens, we learn that growth occurs not when everything is added, but when everything is peeled away to allow the soul room to exist."
          </p>
        </div>

        <!-- Quick Links -->
        <div class="lg:col-span-2 space-y-4">
          <h5 class="text-xs font-mono uppercase tracking-widest text-sand-300">EXPLORE</h5>
          <ul class="space-y-2 text-sm text-sand-400">
            <li><a href="#collection" class="hover:text-sand-100 transition-colors">Specimens</a></li>
            <li><a href="#diagnostic" class="hover:text-sand-100 transition-colors">Botanical Companion</a></li>
            <li><a href="#masterclass" class="hover:text-sand-100 transition-colors">Academy</a></li>
            <li><a href="#bidding-vault" class="hover:text-sand-100 transition-colors">Auction Arena</a></li>
          </ul>
        </div>

        <!-- Newsletter curation signup -->
        <div class="lg:col-span-4 space-y-4">
          <h5 class="text-xs font-mono uppercase tracking-widest text-sand-300">THE BONSAI LETTERS</h5>
          <p class="text-xs text-sand-400 leading-relaxed font-serif italic">Subscribe for limited invitations to Tokyo auctions, masterclasses, and digital care logs.</p>
          
          <form onsubmit="handleSubscribe(event)" class="flex gap-2">
            <input type="email" id="newsletter-email" required placeholder="coordinates@domain.com" class="bg-charcoal-800 border border-sand-100/10 rounded-xl px-4 py-3 text-sand-100 text-sm focus:outline-none focus:border-zenGreen-300 flex-1">
            <button type="submit" class="px-5 py-3 bg-sand-100 hover:bg-sand-200 text-charcoal-900 rounded-xl transition-all">
              <i data-lucide="send" class="w-4 h-4"></i>
            </button>
          </form>
        </div>

      </div>

      <!-- Bottom trademark metadata -->
      <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-sand-400">
        <div>© 2026 BONSAI ATELIER. ALL DESIGN CODES PROTECTED BY ZEN CONCEPTS.</div>
        <div class="flex gap-6">
          <a href="#" class="hover:text-sand-100 transition-colors">TERMS OF ENTRY</a>
          <a href="#" class="hover:text-sand-100 transition-colors">PRIVACY COORDINATES</a>
        </div>
      </div>

    </div>
  </footer>


  <!-- ================= IMMERSIVE CONTROLLERS & ENGINE JS ================= -->
  <script>
    // System Initialization
    document.addEventListener("DOMContentLoaded", () => {
      lucide.createIcons();
      updateTokyoClock();
      setInterval(updateTokyoClock, 1000);
      setupParallax();
      updateDiagnostics();
      initAuctionSimulator();
    });

    // Mobile Navigation overlay toggle
    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('translate-x-full');
    }

    // Tokyo Real-Time clock synchronizer
    function updateTokyoClock() {
      const options = {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      document.getElementById('tokyo-clock').innerText = formatter.format(new Date()) + " JST";
    }

    // Interactive Parallax mouse responder for premium editorial layered feel
    function setupParallax() {
      const container = document.getElementById('hero-image-container');
      const target = document.getElementById('parallax-target');
      
      if (!container || !target) return;
      
      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Dynamic tilt matrix rotations
        const rotX = (y / rect.height) * -15; 
        const rotY = (x / rect.width) * 15;
        
        target.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03, 1.03, 1.03)`;
      });
      
      container.addEventListener('mouseleave', () => {
        target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    }

    // Permanent Archive Specimen Filtering system
    function filterSpecimens(category) {
      playZenBell(400, 'chime');
      const cards = document.querySelectorAll('.specimen-card');
      const buttons = document.querySelectorAll('.specimen-filter-btn');

      // Update Active filter button aesthetic
      buttons.forEach(btn => {
        btn.classList.remove('bg-charcoal-800', 'text-sand-100');
        btn.classList.add('border-charcoal-800/20', 'text-charcoal-800');
      });

      // Find the clicked element
      const targetBtn = Array.from(buttons).find(btn => 
        btn.textContent.toLowerCase().includes(category === 'all' ? 'all' : category === 'conifer' ? 'coniferous' : category)
      );
      if (targetBtn) {
        targetBtn.classList.remove('border-charcoal-800/20', 'text-charcoal-800');
        targetBtn.classList.add('bg-charcoal-800', 'text-sand-100');
      }

      cards.forEach(card => {
        if (category === 'all') {
          card.style.display = 'flex';
        } else {
          const cats = card.getAttribute('data-category').split(' ');
          if (cats.includes(category)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        }
      });
    }

    // Specimen Detailed Dossier Dataset
    const specimenData = {
      'five-needle': {
        title: 'Pinus Pentaphylla',
        scientific: 'PINACEAE',
        japanese: '五葉松 — "Goyomatsu"',
        vault: 'VAULT ENTRY NO. 01',
        age: '140 YRS',
        value: '¥1,850,000',
        wiring: 'Autumn & Winter',
        repot: 'April 2024',
        image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop',
        description: 'An exceptional Goyomatsu white pine with dramatic tiered cloud formations. Originally curated on the slopes of Nara mountains, this specimen has survived five generations of structural wiring.'
      },
      'red-maple': {
        title: 'Acer Palmatum',
        scientific: 'SAPINDACEAE',
        japanese: '紅葉 — "Irohamomiji"',
        vault: 'VAULT ENTRY NO. 02',
        age: '85 YRS',
        value: '¥1,450,000',
        wiring: 'Spring Bud Break',
        repot: 'March 2025',
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop',
        description: 'A stellar mountain maple of deep crimson hue. Famous for its magnificent root spread (Nebari) and extremely detailed branch ramification.'
      },
      'kishu-shimpaku': {
        title: 'Juniperus Chinensis',
        scientific: 'CUPRESSACEAE',
        japanese: '真柏 — "Shimpaku"',
        vault: 'VAULT ENTRY NO. 03',
        age: '110 YRS',
        value: '¥2,100,000',
        wiring: 'Late Winter',
        repot: 'October 2023',
        image: 'https://images.unsplash.com/photo-1613143763660-f463200938b8?q=80&w=800&auto=format&fit=crop',
        description: 'This Kishu Shimpaku shows natural, dramatic "Shari" (peeled branch deadwood) mimicking high windswept coastal cliffs. Very thick foliage pads.'
      }
    };

    function openSpecimenDetail(id) {
      playZenBell(144, 'bell');
      const data = specimenData[id];
      if (!data) return;

      document.getElementById('modal-vault-id').innerText = data.vault;
      document.getElementById('modal-title').innerText = data.title;
      document.getElementById('modal-scientific-family').innerText = data.scientific;
      document.getElementById('modal-japanese-title').innerText = data.japanese;
      document.getElementById('modal-age').innerText = data.age;
      document.getElementById('modal-value').innerText = data.value;
      document.getElementById('modal-wiring').innerText = data.wiring;
      document.getElementById('modal-repot').innerText = data.repot;
      document.getElementById('modal-description').innerText = data.description;
      document.getElementById('modal-image').src = data.image;

      const modal = document.getElementById('specimen-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeSpecimenDetail() {
      const modal = document.getElementById('specimen-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    // Botanical AI Diagnostic variables & slider events
    let currentDiagSpecies = 'shimpaku';

    function selectDiagSpecies(species) {
      playZenBell(300, 'chime');
      currentDiagSpecies = species;
      
      const btns = document.querySelectorAll('.diag-species-btn');
      btns.forEach(btn => btn.classList.remove('bg-zenGreen-600', 'text-sand-100'));
      
      const activeBtn = document.getElementById(`btn-diag-${species}`);
      if (activeBtn) {
        activeBtn.classList.add('bg-zenGreen-600', 'text-sand-100');
      }
      
      updateDiagnostics();
    }

    function updateDiagnostics() {
      const hum = document.getElementById('humidity-slider').value;
      const solar = document.getElementById('solar-slider').value;
      const prune = document.getElementById('pruning-slider').value;

      document.getElementById('humidity-val').innerText = `${hum}%`;
      document.getElementById('solar-val').innerText = `${solar} W/m²`;
      document.getElementById('pruning-val').innerText = prune == 1 ? 'Minimal' : prune == 2 ? 'Medium' : 'Intense';

      // Reactive calculations mimicking physiological responses
      let baseTranspiration = 1.2;
      let vitalQuotient = 80;
      let wateringFreq = "Every 48 hrs";
      let adviceText = "";

      if (currentDiagSpecies === 'shimpaku') {
        baseTranspiration = ((solar * 0.005) + (hum * 0.01)).toFixed(1);
        vitalQuotient = Math.max(40, Math.min(100, Math.round(100 - Math.abs(50 - hum) - (solar > 800 ? 15 : 0))));
        wateringFreq = hum > 70 ? "Every 72 hrs" : "Every 36 hrs";
        adviceText = "Juniper foliage responds exceptionally well to overhead misting when relative humidity dips below 45%. Keep wiring tension moderate.";
      } else if (currentDiagSpecies === 'maple') {
        baseTranspiration = ((solar * 0.009) + (hum * 0.005)).toFixed(1);
        vitalQuotient = Math.max(30, Math.min(100, Math.round(90 - Math.abs(60 - hum)*1.2 - (prune > 2 ? 10 : 0))));
        wateringFreq = solar > 600 ? "Every 12-24 hrs" : "Every 36 hrs";
        adviceText = "Deciduous Mountain Maples have fragile epidermal structures. Shield specimen foliage completely when Solar Radiation exceeds 600 W/m².";
      } else {
        // Black Pine
        baseTranspiration = ((solar * 0.003) + (hum * 0.012)).toFixed(1);
        vitalQuotient = Math.max(50, Math.min(100, Math.round(95 - Math.abs(40 - hum) - (solar < 200 ? 20 : 0))));
        wateringFreq = hum > 60 ? "Every 96 hrs" : "Every 48 hrs";
        adviceText = "Pinus Thunbergii requires maximum solar absorption to achieve optimal needle reduction. Retain highly aerated Akadama mixture.";
      }

      // Update vectors on display
      document.getElementById('output-transpiration').innerText = `${baseTranspiration} ml/hr`;
      document.getElementById('output-watering').innerText = wateringFreq;
      document.getElementById('vitality-quotient').innerText = `${vitalQuotient}%`;
      document.getElementById('output-diagnostic-text').innerText = adviceText;

      // Animate dynamic vector circle
      const circle = document.getElementById('vector-accent-ring');
      if (circle) {
        const strokeDashOffset = 251.2 - (251.2 * vitalQuotient) / 100;
        circle.style.strokeDashoffset = strokeDashOffset;
      }
    }

    function diagnoseSpecimen() {
      playZenBell(180, 'bell');
      showToast('Botanical Simulator running computational cycles. Advice synchronized.', 'Companion Diagnostic');
    }

    // Dynamic Live Auction Simulator System
    let currentAuctionPrice = 1920000;
    let biddingsDataset = [1750000, 1810000, 1850000, 1890000, 1920000];
    const dummyCollectors = ['US-044', 'JP-993', 'CH-308', 'UK-550', 'IT-211'];

    function initAuctionSimulator() {
      // Setup dynamic bid charts & continuous interval events
      updateBidCharts();
      setInterval(() => {
        // Occasional simulated competitor bid (25% chance every 8 seconds)
        if (Math.random() > 0.75) {
          simulateCompetitorBid();
        }
      }, 8000);
    }

    function updateBidCharts() {
      // Dynamic rendering of custom SVG line/chart matching points
      const chartLine = document.getElementById('chart-line');
      const chartFill = document.getElementById('chart-fill');
      
      let dPath = "M 0 90";
      let fillPath = "M 0 90";
      
      const widthStep = 100 / (biddingsDataset.length - 1);
      const minVal = 1500000;
      const maxVal = 2600000;
      
      biddingsDataset.forEach((val, idx) => {
        const x = idx * widthStep;
        const normalizedY = 90 - ((val - minVal) / (maxVal - minVal)) * 80;
        
        if (idx === 0) {
          dPath = `M ${x} ${normalizedY}`;
          fillPath = `M ${x} ${normalizedY}`;
        } else {
          dPath += ` L ${x} ${normalizedY}`;
          fillPath += ` L ${x} ${normalizedY}`;
        }
      });
      
      fillPath += ` L 100 100 L 0 100 Z`;
      
      chartLine.setAttribute('d', dPath);
      chartFill.setAttribute('d', fillPath);
    }

    function placeUserBid() {
      const input = document.getElementById('user-bid-amount');
      const value = parseInt(input.value);

      if (value <= currentAuctionPrice) {
        showToast(`Your bid must exceed the current price of ¥${currentAuctionPrice.toLocaleString()}`, 'Bidding Warning');
        return;
      }

      playZenBell(300, 'bell');
      currentAuctionPrice = value;
      biddingsDataset.push(value);
      
      // Update bid UI log
      const log = document.getElementById('bids-log');
      const item = document.createElement('div');
      item.className = "flex justify-between py-2 border-b border-sand-100/5 text-zenGreen-300 font-bold";
      item.innerHTML = `<span>You (Collector)</span> <span>¥${value.toLocaleString()} JPY</span>`;
      log.prepend(item);
      
      // Update displays
      document.getElementById('current-price-display').innerText = `¥${value.toLocaleString()} JPY`;
      document.getElementById('user-bid-amount').min = value + 10000;
      document.getElementById('user-bid-amount').value = value + 10000;
      
      updateBidCharts();
      showToast(`Premium Bid registered successfully at ¥${value.toLocaleString()} JPY.`, 'Auction Live');
    }

    function simulateCompetitorBid() {
      const increment = Math.round((Math.random() * 40000 + 10000) / 10000) * 10000;
      const competitorPrice = currentAuctionPrice + increment;
      const competitorName = dummyCollectors[Math.floor(Math.random() * dummyCollectors.length)];

      currentAuctionPrice = competitorPrice;
      biddingsDataset.push(competitorPrice);

      playZenBell(180, 'chime');
      
      const log = document.getElementById('bids-log');
      const item = document.createElement('div');
      item.className = "flex justify-between py-2 border-b border-sand-100/5 text-sand-300";
      item.innerHTML = `<span>Collector: ${competitorName}</span> <span>¥${competitorPrice.toLocaleString()} JPY</span>`;
      log.prepend(item);

      document.getElementById('current-price-display').innerText = `¥${competitorPrice.toLocaleString()} JPY`;
      document.getElementById('user-bid-amount').min = competitorPrice + 10000;
      document.getElementById('user-bid-amount').value = competitorPrice + 10000;

      updateBidCharts();
      showToast(`New counter-bid of ¥${competitorPrice.toLocaleString()} received from ${competitorName}.`, 'Auction Bid Alert');
    }

    // Masterclass Booking Interface System
    let activeMaster = 'Kenji Ozu';

    function selectMaster(name) {
      playZenBell(200, 'chime');
      activeMaster = name;
      
      // Update UI cards aesthetic
      const cards = document.querySelectorAll('.master-card');
      cards.forEach(c => {
        c.classList.remove('border-2', 'border-charcoal-800', 'bg-white', 'shadow-xl');
      });
      
      const clickedCard = Array.from(cards).find(c => c.innerHTML.includes(name));
      if (clickedCard) {
        clickedCard.classList.add('border-2', 'border-charcoal-800', 'bg-white', 'shadow-xl');
      }

      document.getElementById('selected-mentor-name').innerText = name;
    }

    function submitBooking() {
      const name = document.getElementById('booking-name').value;
      const email = document.getElementById('booking-email').value;
      const date = document.getElementById('booking-date').value;

      if (!name || !email) {
        showToast('Please submit complete coordinator credentials to secure booking.', 'Form Incomplete');
        return;
      }

      playZenBell(100, 'bell');
      showToast(`Workshop scheduled with ${activeMaster} for ${date}. Invoice coordinates sent to ${email}.`, 'Booking Complete');
      
      // Clear forms
      document.getElementById('booking-name').value = "";
      document.getElementById('booking-email').value = "";
    }

    // Newsletter Curator signup form handler
    function handleSubscribe(event) {
      event.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      playZenBell(250, 'bell');
      showToast(`We have successfully secured subscription to: ${email}`, 'Curator Letters');
      document.getElementById('newsletter-email').value = "";
    }
  </script>
</body>
</html>
2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShanShui — The Zen Design Collective & Tea Sanctuary</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts for exquisite serif and sans-serif pairing -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Montserrat:wght@200;300;400;500;600&family=Noto+Serif+SC:wght@300;400;600;900&display=swap" rel="stylesheet">
    <!-- Font Awesome for clean layout icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        serif: ['Cinzel', 'Noto Serif SC', 'serif'],
                        sans: ['Montserrat', 'sans-serif'],
                    },
                    colors: {
                        parchment: {
                            50: '#FDFDF9',
                            100: '#FAF7F0',
                            200: '#F3EFE3',
                            300: '#EAE2D1',
                            900: '#1C1A14'
                        },
                        ink: {
                            50: '#F0F3F4',
                            300: '#9FB1BC',
                            500: '#5C6B73',
                            700: '#3A4B53',
                            900: '#1E2522'
                        },
                        blossom: {
                            100: '#FFF0F2',
                            300: '#F8C8D1',
                            500: '#E25F70',
                            700: '#B03649'
                        }
                    },
                    letterSpacing: {
                        widest: '.25em',
                        extra: '.4em',
                    }
                }
            }
        }
    </script>
    
    <style>
        /* CSS Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #FAF7F0;
        }
        ::-webkit-scrollbar-thumb {
            background: #9FB1BC;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #5C6B73;
        }

        /* SVG Paper Texture overlay */
        .paper-grain {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 999;
            opacity: 0.04;
        }

        /* Floating Blossom animation */
        @keyframes drift {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.9;
            }
            90% {
                opacity: 0.9;
            }
            100% {
                transform: translate(-150px, 800px) rotate(360deg);
                opacity: 0;
            }
        }

        .petal {
            position: absolute;
            background: radial-gradient(circle, #FFF0F2 0%, #F8C8D1 70%, #E25F70 100%);
            border-radius: 15% 100% 15% 100%;
            pointer-events: none;
            z-index: 40;
            box-shadow: 0 2px 5px rgba(226, 95, 112, 0.15);
        }

        /* Mist animation */
        @keyframes driftMist {
            0% { transform: translateX(-5%); }
            50% { transform: translateX(5%); }
            100% { transform: translateX(-5%); }
        }
        .mist-layer {
            animation: driftMist 45s ease-in-out infinite;
        }

        /* Calligraphy stamp bounce */
        .stamp-glow {
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .stamp-glow:hover {
            box-shadow: 0 0 15px rgba(226, 95, 112, 0.4);
            transform: scale(1.05) rotate(-2deg);
        }

        /* Ink Bleed Hover Effect */
        .ink-bleed-btn {
            position: relative;
            overflow: hidden;
            transition: color 0.4s ease;
        }
        .ink-bleed-btn::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: #1E2522;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s ease, height 0.6s ease;
            z-index: -1;
        }
        .ink-bleed-btn:hover::after {
            width: 300%;
            height: 300%;
        }
        .ink-bleed-btn:hover {
            color: #FAF7F0 !important;
        }

        /* Elegant Zen pulse */
        @keyframes pulseRing {
            0% { transform: scale(0.95); opacity: 0.5; }
            50% { transform: scale(1.05); opacity: 0.8; }
            100% { transform: scale(0.95); opacity: 0.5; }
        }
        .zen-pulse {
            animation: pulseRing 4s ease-in-out infinite;
        }
    </style>
</head>
<body class="bg-parchment-100 text-ink-900 font-sans selection:bg-blossom-300 relative overflow-x-hidden">

    <!-- Paper Grain SVG Filter Base -->
    <svg class="paper-grain" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>

    <!-- Interactive Falling Blossoms Container -->
    <div id="petal-container" class="absolute top-0 left-0 w-full h-[300vh] pointer-events-none overflow-hidden z-20"></div>

    <!-- MAIN IMMERSIVE AUDIO / NAVIGATION SYSTEM -->
    <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-ink-300/10 backdrop-blur-md bg-parchment-100/85 px-6 lg:px-16 py-4 flex justify-between items-center">
        <!-- Brand Mark -->
        <a href="#" class="flex items-center space-x-3 group">
            <div class="relative w-9 h-9 flex items-center justify-center bg-blossom-700 text-parchment-100 rounded-sm font-serif text-lg font-bold stamp-glow shadow-sm">
                山
                <span class="absolute -bottom-1 -right-1 text-[8px] bg-ink-900 text-parchment-100 px-0.5 scale-90 rounded">水</span>
            </div>
            <div class="flex flex-col">
                <span class="font-serif tracking-widest text-sm font-semibold uppercase text-ink-900 group-hover:text-blossom-700 transition-colors">SHAN SHUI</span>
                <span class="text-[9px] tracking-extra uppercase text-ink-500 font-sans -mt-1">Atelier & Sanctuary</span>
            </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-10 text-xs tracking-extra font-medium uppercase text-ink-700">
            <a href="#about" class="hover:text-blossom-500 transition-colors duration-300">Our Origin</a>
            <a href="#services" class="hover:text-blossom-500 transition-colors duration-300">Ateliers</a>
            <a href="#experience" class="hover:text-blossom-500 transition-colors duration-300">Zen Ritual</a>
            <a href="#portfolio" class="hover:text-blossom-500 transition-colors duration-300">The Gallery</a>
            <a href="#contact" class="hover:text-blossom-500 transition-colors duration-300">Presence</a>
        </nav>

        <!-- Right Side: Soundscape controller & CTA -->
        <div class="flex items-center space-x-4">
            <!-- Soundscape Ambient Synth -->
            <button id="soundscape-btn" class="group relative flex items-center justify-center space-x-2 border border-ink-300/30 px-3 py-1.5 rounded-full hover:bg-parchment-200 transition-all text-xs text-ink-700">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blossom-500 opacity-75"></span>
                    <span id="sound-indicator" class="relative inline-flex rounded-full h-2 w-2 bg-ink-500"></span>
                </span>
                <span class="font-sans text-[10px] tracking-widest uppercase">Chimes: Off</span>
            </button>
            
            <a href="#contact" class="hidden sm:inline-block ink-bleed-btn bg-transparent border border-ink-900 text-ink-900 px-5 py-2 text-xs tracking-widest uppercase font-medium rounded-sm">
                Enquire
            </a>

            <!-- Mobile menu button -->
            <button id="mobile-menu-toggle" class="md:hidden text-ink-900 hover:text-blossom-500 focus:outline-none">
                <i class="fa-solid fa-bars-staggered text-xl"></i>
            </button>
        </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-menu" class="fixed inset-0 bg-parchment-100 z-40 transform translate-x-full transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 text-center px-6">
        <button id="mobile-menu-close" class="absolute top-6 right-6 text-2xl text-ink-900 hover:text-blossom-500">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="w-12 h-12 flex items-center justify-center bg-blossom-700 text-parchment-100 rounded-sm font-serif text-2xl font-bold stamp-glow mb-4">
            山
        </div>
        <nav class="flex flex-col space-y-6 text-sm tracking-widest uppercase font-medium">
            <a href="#about" class="mobile-link text-ink-900 hover:text-blossom-500 transition-colors">Our Origin</a>
            <a href="#services" class="mobile-link text-ink-900 hover:text-blossom-500 transition-colors">Ateliers</a>
            <a href="#experience" class="mobile-link text-ink-900 hover:text-blossom-500 transition-colors">Zen Ritual</a>
            <a href="#portfolio" class="mobile-link text-ink-900 hover:text-blossom-500 transition-colors">The Gallery</a>
            <a href="#contact" class="mobile-link text-ink-900 hover:text-blossom-500 transition-colors">Presence</a>
        </nav>
        <div class="h-[1px] w-24 bg-ink-300/30 my-4"></div>
        <a href="#contact" class="mobile-link ink-bleed-btn border border-ink-900 px-8 py-3 text-xs tracking-extra uppercase font-semibold">
            Begin Journey
        </a>
    </div>

    <!-- HERO SECTION (ATMOSPHERIC DEEP SCENERY) -->
    <section class="relative min-h-screen pt-24 flex flex-col justify-between overflow-hidden border-b border-ink-300/10">
        <!-- SVG Hand-Drawn Spring Branch (Top Left Corner Break-Frame) -->
        <div class="absolute top-0 left-0 w-[45%] md:w-[25%] max-w-[400px] pointer-events-none z-30 select-none">
            <svg class="w-full h-auto opacity-90 drop-shadow-sm" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Branches -->
                <path d="M0 0C45 60 110 90 180 110C210 118 250 112 280 120" stroke="#3A2D28" stroke-width="4" stroke-linecap="round"/>
                <path d="M80 43C120 70 160 65 190 55C210 48 230 35 250 20" stroke="#3A2D28" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M125 79C145 110 175 125 210 135" stroke="#3A2D28" stroke-width="2" stroke-linecap="round"/>
                <path d="M180 110C190 145 220 170 250 185" stroke="#3A2D28" stroke-width="2" stroke-linecap="round"/>
                <path d="M220 115C240 100 270 95 295 90" stroke="#3A2D28" stroke-width="1.5" stroke-linecap="round"/>

                <!-- Delicate Petal clusters (Plum/Cherry Blossom) -->
                <!-- Cluster 1 -->
                <circle cx="140" cy="72" r="10" fill="#E25F70" opacity="0.85"/>
                <circle cx="142" cy="74" r="7" fill="#FFF0F2" opacity="0.95"/>
                <circle cx="140" cy="72" r="2" fill="#F8C8D1"/>

                <circle cx="110" cy="55" r="8" fill="#E25F70" opacity="0.85"/>
                <circle cx="109" cy="53" r="6" fill="#FFF0F2" opacity="0.95"/>

                <!-- Cluster 2 -->
                <circle cx="190" cy="105" r="12" fill="#E25F70" opacity="0.85"/>
                <circle cx="193" cy="107" r="9" fill="#FFF0F2" opacity="0.95"/>
                <circle cx="190" cy="105" r="3" fill="#B03649"/>
                
                <circle cx="215" cy="130" r="9" fill="#E25F70" opacity="0.8"/>
                <circle cx="213" cy="128" r="7" fill="#FFF0F2" opacity="0.9"/>

                <!-- Cluster 3 -->
                <circle cx="265" cy="115" r="11" fill="#E25F70" opacity="0.85"/>
                <circle cx="267" cy="117" r="8" fill="#FFF0F2" opacity="0.95"/>
                <circle cx="264" cy="114" r="2" fill="#B03649"/>

                <!-- Buds along the tips -->
                <circle cx="280" cy="120" r="4" fill="#E25F70"/>
                <circle cx="295" cy="90" r="3" fill="#E25F70"/>
                <circle cx="250" cy="20" r="3" fill="#E25F70"/>
                <circle cx="250" cy="185" r="4" fill="#E25F70"/>
            </svg>
        </div>

        <!-- Ambient Rising Soft Crimson Sun/Red Stamp Aura -->
        <div class="absolute right-[12%] top-[15%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-blossom-500/10 to-blossom-500/30 filter blur-xl pointer-events-none select-none"></div>

        <!-- The Hero Title Area -->
        <div class="container mx-auto px-6 lg:px-16 pt-16 md:pt-28 pb-6 flex flex-col justify-start relative z-30">
            <div class="max-w-4xl">
                <!-- Tiny Subtitle with crimson stamp design -->
                <div class="flex items-center space-x-3 mb-6">
                    <span class="w-8 h-[1px] bg-blossom-500"></span>
                    <span class="text-xs tracking-extra uppercase text-ink-700 font-medium">DESIGN, TEA, & ATELIER RITUALS</span>
                    <span class="text-[9px] bg-blossom-500/10 text-blossom-700 px-2 py-0.5 border border-blossom-500/30 rounded font-serif">印</span>
                </div>

                <!-- Grand Heading mimicking ancient poetry & modern structure -->
                <h1 class="font-serif text-4xl sm:text-5xl lg:text-7xl font-light text-ink-900 leading-[1.15] mb-8">
                    Whispers of <span class="font-normal italic text-ink-700">the Mist</span>,<br>
                    Silence of the <span class="font-normal border-b-2 border-blossom-500/40 pb-1 text-blossom-700">Brush</span>.
                </h1>

                <!-- Brand Pitch -->
                <p class="font-sans text-sm md:text-base text-ink-700 font-light leading-relaxed max-w-xl mb-10 tracking-wide">
                    Where ancient Chinese ink-wash aesthetic meets modern design minimalism. We curate sublime spaces, brand experiences, and physical rituals that allow the soul to breathe.
                </p>

                <!-- Interactive CTA Buttons -->
                <div class="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a href="#services" class="ink-bleed-btn inline-flex justify-center items-center bg-ink-900 border border-ink-900 text-parchment-100 px-8 py-4 text-xs tracking-extra uppercase font-semibold rounded-sm transition-all shadow-md">
                        Explore Ateliers <i class="fa-solid fa-arrow-right-long ml-3"></i>
                    </a>
                    <a href="#experience" class="inline-flex justify-center items-center border border-ink-500/40 text-ink-900 hover:bg-parchment-200 px-8 py-4 text-xs tracking-extra uppercase font-medium rounded-sm transition-all">
                        Experience Tea Ritual
                    </a>
                </div>
            </div>
        </div>

        <!-- ATMOSPHERIC SCENERY MOUNTAINS BACKGROUND (RISING FROM THE BOTTOM) -->
        <div class="relative w-full h-[320px] md:h-[450px] overflow-hidden select-none pointer-events-none z-10 flex flex-col justify-end">
            <!-- Sky/Sun back layer -->
            <div class="absolute inset-0 flex items-center justify-end pr-[15%] pb-36">
                <!-- Red Traditional Sun -->
                <div class="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-t from-blossom-700 to-blossom-500/70 opacity-80 shadow-[0_0_20px_rgba(226,95,112,0.3)]"></div>
            </div>

            <!-- Drifting Birds Silhouette Layer -->
            <div class="absolute top-[10%] left-[30%] w-64 h-24 opacity-60">
                <svg class="w-full h-full text-ink-700" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20C15 17 20 22 25 25C23 18 18 12 10 20Z" fill="currentColor"/>
                    <path d="M45 15C50 12 55 17 60 20C58 13 53 7 45 15Z" fill="currentColor"/>
                    <path d="M80 35C83 33 87 36 90 38C89 34 86 31 80 35Z" fill="currentColor"/>
                    <path d="M110 25C114 22 119 26 123 29C121 23 117 18 110 25Z" fill="currentColor"/>
                    <!-- Flying V-formation birds -->
                    <path d="M135 45L140 43L142 46L139 48L135 45Z" fill="currentColor"/>
                    <path d="M150 50L154 48L156 51L153 53L150 50Z" fill="currentColor"/>
                    <path d="M165 47L168 45L170 48L167 50L165 47Z" fill="currentColor"/>
                </svg>
            </div>

            <!-- Layer 4: Distant Pale Mountains (Mountain Ridge Backdrop) -->
            <div class="absolute bottom-0 w-full transform translate-y-8 z-0 opacity-40">
                <svg class="w-full h-auto" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 320V120L180 180L360 110L540 210L720 160L900 240L1080 140L1260 220L1440 100V320H0Z" fill="url(#mountainGradFar)"/>
                    <defs>
                        <linearGradient id="mountainGradFar" x1="720" y1="100" x2="720" y2="320" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stop-color="#8AA29E" stop-opacity="0.6"/>
                            <stop offset="100%" stop-color="#F3EFE3" stop-opacity="0.9"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <!-- Layer 3: Misty Middle Mountains -->
            <div class="absolute bottom-0 w-full transform translate-y-4 z-10 opacity-60">
                <svg class="w-full h-auto" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 320V160L120 130L280 210L480 140L640 220L820 150L980 210L1140 120L1300 180L1440 110V320H0Z" fill="url(#mountainGradMid)"/>
                    <defs>
                        <linearGradient id="mountainGradMid" x1="720" y1="110" x2="720" y2="320" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stop-color="#5C6B73" stop-opacity="0.75"/>
                            <stop offset="100%" stop-color="#EAE2D1" stop-opacity="0.9"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <!-- Layer 2: Misty Fog Atmospheric Wave (CSS animated) -->
            <div class="absolute bottom-0 w-[120%] h-32 z-20 opacity-40 mist-layer select-none pointer-events-none">
                <svg class="w-full h-full" viewBox="0 0 1800 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 150V50C300 120 600 20 900 80C1200 10 1500 110 1800 50V150H0Z" fill="url(#mistGrad)"/>
                    <defs>
                        <linearGradient id="mistGrad" x1="900" y1="10" x2="900" y2="150" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stop-color="#FAF7F0" stop-opacity="0.1"/>
                            <stop offset="50%" stop-color="#FAF7F0" stop-opacity="0.8"/>
                            <stop offset="100%" stop-color="#FAF7F0" stop-opacity="1"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <!-- Layer 1: Foreground Detailed Ink-wash Mountains (High Contrast Charcoal & Soft reflection) -->
            <div class="relative w-full z-30 transform translate-y-1">
                <!-- Tiny Fishing Boat SVG floating on foreground water edge -->
                <div class="absolute top-[5%] left-[25%] md:left-[35%] w-16 h-8 opacity-80 animate-pulse duration-1000">
                    <svg class="w-full h-full text-ink-900" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- Tiny boat -->
                        <path d="M20 30C40 30 50 28 65 32C55 35 30 35 20 30Z" fill="currentColor"/>
                        <!-- Fisherman -->
                        <circle cx="48" cy="24" r="2.5" fill="currentColor"/>
                        <!-- Fishing pole -->
                        <line x1="48" y1="24" x2="68" y2="15" stroke="currentColor" stroke-width="0.75"/>
                        <!-- Water ripples -->
                        <path d="M10 34C30 34 50 35 80 33" stroke="currentColor" stroke-width="0.5" stroke-dasharray="4 2" opacity="0.4"/>
                    </svg>
                </div>

                <svg class="w-full h-auto" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <!-- Crisp mountain details with delicate overlay lines mimicking paper-brush borders -->
                    <path d="M0 320V200L150 240L280 180L450 250L600 170L780 230L950 160L1120 220L1300 140L1440 210V320H0Z" fill="url(#mountainGradFore)"/>
                    
                    <!-- Delicate sketch highlights overlapping ridges -->
                    <path d="M0 200L150 240" stroke="#3A4B53" stroke-width="0.75" opacity="0.5"/>
                    <path d="M150 240L280 180" stroke="#1E2522" stroke-width="0.75" opacity="0.4"/>
                    <path d="M280 180L450 250" stroke="#3A4B53" stroke-width="0.75" opacity="0.5"/>
                    <path d="M600 170L780 230" stroke="#1E2522" stroke-width="0.75" opacity="0.4"/>
                    <path d="M950 160L1120 220" stroke="#3A4B53" stroke-width="0.75" opacity="0.5"/>

                    <defs>
                        <linearGradient id="mountainGradFore" x1="720" y1="140" x2="720" y2="320" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stop-color="#3A4B53" stop-opacity="0.95"/>
                            <stop offset="40%" stop-color="#1E2522" stop-opacity="0.9"/>
                            <stop offset="100%" stop-color="#FAF7F0" stop-opacity="1"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    </section>

    <!-- SECTION: THE ATELIER PHILOSOPHY & METRICS -->
    <section id="about" class="py-24 bg-parchment-200/50 relative border-b border-ink-300/10">
        <!-- Floating Cherry Blossom Branch (Mid right) -->
        <div class="absolute right-0 top-1/4 w-[20%] max-w-[250px] opacity-60 pointer-events-none select-none">
            <svg class="w-full h-auto transform scale-x-[-1]" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0C50 40 100 60 160 80" stroke="#3A2D28" stroke-width="3" stroke-linecap="round"/>
                <circle cx="100" cy="50" r="8" fill="#E25F70" opacity="0.75"/>
                <circle cx="102" cy="52" r="5" fill="#FFF0F2" opacity="0.9"/>
                <circle cx="130" cy="65" r="9" fill="#E25F70" opacity="0.75"/>
                <circle cx="132" cy="67" r="6" fill="#FFF0F2" opacity="0.9"/>
            </svg>
        </div>

        <div class="container mx-auto px-6 lg:px-16">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                <!-- Philosophy Text Column -->
                <div class="lg:col-span-7">
                    <div class="mb-4 flex items-center space-x-2 text-xs tracking-widest text-blossom-700 font-medium">
                        <span class="inline-block w-4 h-[1px] bg-blossom-500"></span>
                        <span>ATELIER GENESIS</span>
                    </div>
                    <h2 class="font-serif text-3xl sm:text-5xl font-light text-ink-900 leading-tight mb-8">
                        The convergence of <br><span class="italic font-normal text-ink-700">ink, breath, and spatial silence</span>.
                    </h2>
                    
                    <div class="space-y-6 text-ink-700 font-light text-sm sm:text-base leading-relaxed tracking-wide">
                        <p>
                            We believe that spaces and visual cultures should reflect the depth of stillness. Our work draws directly from the <em>"Three Far Distances"</em> parameter of Chinese classical landscaping: atmospheric altitude, layered mist, and profound flat expanse.
                        </p>
                        <p class="border-l-2 border-blossom-500/40 pl-6 my-6 italic text-ink-900 font-sans">
                            "When ink meets paper, it expresses the state of the artist's mind. When modern geometry meets empty space, it allows the inhabitant to return to quietude."
                        </p>
                        <p>
                            From identity design for high-end boutique hotels to our bespoke wellness spaces and hand-pressed organic teas, we maintain a singular, uninterrupted thread of premium tranquility.
                        </p>
                    </div>

                    <!-- Authentic Signature Red Chop stamp -->
                    <div class="mt-8 flex items-center space-x-4">
                        <div class="w-12 h-12 border-2 border-blossom-700 flex items-center justify-center font-serif text-blossom-700 font-bold p-1 stamp-glow select-none pointer-events-auto" title="Seal of Serenity">
                            <span class="text-xs tracking-tighter leading-none text-center block">山水<br>精神</span>
                        </div>
                        <div>
                            <p class="font-serif text-xs uppercase tracking-widest text-ink-900 font-semibold">The Seal of ShanShui</p>
                            <p class="text-[10px] text-ink-500 tracking-wider">Original Design & Sensory Collection • Registered 2026</p>
                        </div>
                    </div>
                </div>

                <!-- Stats Visual Panel with traditional grid line design -->
                <div class="lg:col-span-5 relative">
                    <div class="border border-ink-300/30 p-8 sm:p-12 bg-parchment-100 rounded-sm relative shadow-sm">
                        <!-- Red Corner Accents -->
                        <span class="absolute top-2 left-2 w-3 h-3 border-t border-l border-blossom-500"></span>
                        <span class="absolute top-2 right-2 w-3 h-3 border-t border-r border-blossom-500"></span>
                        <span class="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-blossom-500"></span>
                        <span class="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-blossom-500"></span>

                        <h3 class="font-serif text-xs uppercase tracking-extra text-ink-500 mb-8 border-b border-ink-300/20 pb-4">SANCTUARY RATIOS</h3>

                        <div class="space-y-8">
                            <div>
                                <div class="flex justify-between items-baseline mb-2">
                                    <span class="font-serif text-xs uppercase tracking-widest text-ink-900 font-medium">Spacial Air & Breathable White</span>
                                    <span class="text-xs font-serif text-blossom-700">65%</span>
                                </div>
                                <div class="w-full bg-parchment-200 h-[3px]">
                                    <div class="bg-gradient-to-r from-ink-700 to-blossom-500 h-[3px]" style="width: 65%"></div>
                                </div>
                                <p class="text-[10px] text-ink-500 mt-1 font-light tracking-wide">Empty margins left entirely raw for mental expansion</p>
                            </div>

                            <div>
                                <div class="flex justify-between items-baseline mb-2">
                                    <span class="font-serif text-xs uppercase tracking-widest text-ink-900 font-medium">Organic Handcrafted Elements</span>
                                    <span class="text-xs font-serif text-blossom-700">100%</span>
                                </div>
                                <div class="w-full bg-parchment-200 h-[3px]">
                                    <div class="bg-gradient-to-r from-ink-700 to-blossom-500 h-[3px]" style="width: 100%"></div>
                                </div>
                                <p class="text-[10px] text-ink-500 mt-1 font-light tracking-wide">All pigments and materials prepared with local techniques</p>
                            </div>

                            <div>
                                <div class="flex justify-between items-baseline mb-2">
                                    <span class="font-serif text-xs uppercase tracking-widest text-ink-900 font-medium">Global Calm Sanctuaries Built</span>
                                    <span class="text-xs font-serif text-blossom-700">42+</span>
                                </div>
                                <div class="w-full bg-parchment-200 h-[3px]">
                                    <div class="bg-gradient-to-r from-ink-700 to-blossom-500 h-[3px]" style="width: 80%"></div>
                                </div>
                                <p class="text-[10px] text-ink-500 mt-1 font-light tracking-wide">Premium environments crafted spanning 12 countries</p>
                            </div>
                        </div>

                        <!-- Aesthetic Watermark Stamp -->
                        <div class="mt-8 border-t border-ink-300/20 pt-6 flex justify-between items-center text-ink-500 text-[10px] tracking-widest uppercase">
                            <span>Established MMXXIV</span>
                            <span>Tokyo • Shanghai • Kyoto</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION: THE ATELIERS (THREE CORE PILLARS/SERVICES) -->
    <section id="services" class="py-24 relative overflow-hidden">
        <div class="container mx-auto px-6 lg:px-16">
            
            <!-- Section Header -->
            <div class="text-center max-w-2xl mx-auto mb-20">
                <span class="text-xs tracking-extra uppercase text-blossom-700 font-semibold inline-block mb-3">Our Dedicated Portals</span>
                <h2 class="font-serif text-3xl sm:text-5xl font-light text-ink-900 leading-tight">
                    Creative disciplines <br>curated with <span class="italic text-ink-700">absolute intent</span>
                </h2>
                <div class="w-16 h-[1px] bg-blossom-500 mx-auto mt-6"></div>
            </div>

            <!-- Service Pillars Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <!-- Pillar 1: Spatial Ink -->
                <div class="group border border-ink-300/30 p-10 bg-parchment-100/50 hover:bg-parchment-200 hover:border-blossom-500/30 transition-all duration-500 flex flex-col justify-between rounded-sm relative shadow-sm hover:shadow-md">
                    <!-- Subtle Watercolor Back-shadow (Interactive) -->
                    <div class="absolute inset-0 bg-radial-gradient from-blossom-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div>
                        <!-- Column Icon & Stamp -->
                        <div class="flex justify-between items-center mb-10">
                            <span class="text-xs font-serif text-ink-500 tracking-extra">01 / PILLAR</span>
                            <div class="w-10 h-10 rounded-full border border-ink-300/40 flex items-center justify-center text-ink-700 group-hover:bg-blossom-500 group-hover:text-parchment-100 transition-colors">
                                <i class="fa-solid fa-compass-drafting text-sm"></i>
                            </div>
                        </div>

                        <h3 class="font-serif text-xl sm:text-2xl font-light text-ink-900 group-hover:text-blossom-700 transition-colors mb-4">
                            Spatial & Architecture
                        </h3>
                        
                        <p class="font-sans text-xs sm:text-sm text-ink-700 font-light leading-relaxed tracking-wide mb-8">
                            We design physical micro-sanctuaries, luxury tearooms, and bespoke gardens leveraging spatial harmony, shadowplay, natural timbers, and raw stone textures.
                        </p>
                    </div>

                    <div>
                        <ul class="space-y-2 text-[11px] uppercase tracking-widest text-ink-500 group-hover:text-ink-700 mb-8 border-t border-ink-300/20 pt-6">
                            <li><i class="fa-solid fa-chevron-right text-[8px] mr-2 text-blossom-500"></i> Zen Interior Layouts</li>
                            <li><i class="fa-solid fa-chevron-right text-[8px] mr-2 text-blossom-500"></i> Organic Lighting Design</li>
                            <li><i class="fa-solid fa-chevron-right text-[8px] mr-2 text-blossom-500"></i> Tea House Consulting</li>
                        </ul>
                        <a href="#contact" class="inline-flex items-center text-xs tracking-widest uppercase font-semibold text-ink-900 hover:text-blossom-700 transition-colors">
                            Enquire Atelier <i class="fa-solid fa-arrow-right-long ml-2 transform group-hover:translate-x-1.5 transition-transform"></i>
                        </a>
                    </div>
                </div>

                <!-- Pillar 2: Brand & Brushwork -->
                <div class="group border border-ink-300/30 p-10 bg-parchment-100/50 hover:bg-parchment-200 hover:border-blossom-500/30 transition-all duration-500 flex flex-col justify-between rounded-sm relative shadow-sm hover:shadow-md">
                    <div class="absolute inset-0 bg-radial-gradient from-blossom-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div>
                        <div class="flex justify-between items-center mb-10">
                            <span class="text-xs font-serif text-ink-500 tracking-extra">02 / PILLAR</span>
                            <div class="w-10 h-10 rounded-full border border-ink-300/40 flex items-center justify-center text-ink-700 group-hover:bg-blossom-500 group-hover:text-parchment-100 transition-colors">
                                <i class="fa-solid fa-paintbrush text-sm"></i>
                            </div>
                        </div>

                        <h3 class="font-serif text-xl sm:text-2xl font-light text-ink-900 group-hover:text-blossom-700 transition-colors mb-4">
                            Ink & Identity
                        </h3>
                        
                        <p class="font-sans text-xs sm:text-sm text-ink-700 font-light leading-relaxed tracking-wide mb-8">
                            Premium visual identities, custom calligraphy logos, hand-pressed textured business cards, and digital expressions that maintain quiet sophistication.
                        </p>
                    </div>

                    <div>
                        <ul class="space-y-2 text-[11px] uppercase tracking-widest text-ink-500 group-hover:text-ink-700 mb-8 border-t border-ink-300/20 pt-6">
                            <li><i class="fa-solid fa-chevron-right text-[8px] mr-2 text-blossom-500"></i> Hand-Drawn Calligraphy</li>
                            <li><i class="fa-solid fa-chevron-right text-[8px] mr-2 text-blossom-500"></i> Tactile Identity Papers</li>
                            <li><i class="fa-solid fa-chevron-right text-[8px] mr-2 text-blossom-500"></i> High-End Packaging</li>
                        </ul>
                        <a href="#contact" class="inline-flex items-center text-xs tracking-widest uppercase font-semibold text-ink-900 hover:text-blossom-700 transition-colors">
                            Enquire Atelier <i class="fa-solid fa-arrow-right-long ml-2 transform group-hover:translate-x-1.5 transition-transform"></i>
                        </a>
                    </div>
                </div>

                <!-- Pillar 3: Curated Tea Rituals -->
                <div class="group border border-ink-300/30 p-10 bg-parchment-100/50 hover:bg-parchment-200 hover:border-blossom-500/30 transition-all duration-500 flex flex-col justify-between rounded-sm relative shadow-sm hover:shadow-md">
                    <div class="absolute inset-0 bg-radial-gradient from-blossom-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div>
                        <div class="flex justify-between items-center mb-10">
                            <span class="text-xs font-serif text-ink-500 tracking-extra">03 / PILLAR</span>
                            <div class="w-10 h-10 rounded-full border border-ink-300/40 flex items-center justify-center text-ink-700 group-hover:bg-blossom-500 group-hover:text-parchment-100 transition-colors">
                                <i class="fa-solid fa-mug-hot text-sm"></i>
                            </div>
                        </div>

                        <h3 class="font-serif text-xl sm:text-2xl font-light text-ink-900 group-hover:text-blossom-700 transition-colors mb-4">
                            Cloud & Leaf
                        </h3>
                        
                        <p class="font-sans text-xs sm:text-sm text-ink-700 font-light leading-relaxed tracking-wide mb-8">
                            Sourcing and pressing rare, hand-picked tea harvests from ancient wild arbor forests, designed specifically for visual reflection and mindful preparation.
                        </p>
                    </div>

                    <div>
                        <ul class="space-y-2 text-[11px] uppercase tracking-widest text-ink-500 group-hover:text-ink-700 mb-8 border-t border-ink-300/20 pt-6">
                            <li><i class="fa-solid fa-chevron-right text-[8px] mr-2 text-blossom-500"></i> Rare White & Puerh Tea</li>
                            <li><i class="fa-solid fa-chevron-right text-[8px] mr-2 text-blossom-500"></i> Handmade Ceramics</li>
                            <li><i class="fa-solid fa-chevron-right text-[8px] mr-2 text-blossom-500"></i> Private Tea ceremonies</li>
                        </ul>
                        <a href="#contact" class="inline-flex items-center text-xs tracking-widest uppercase font-semibold text-ink-900 hover:text-blossom-700 transition-colors">
                            Enquire Atelier <i class="fa-solid fa-arrow-right-long ml-2 transform group-hover:translate-x-1.5 transition-transform"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- INTERACTIVE SECTION: THE ZEN TEA CEREMONY SIMULATOR -->
    <section id="experience" class="py-24 bg-parchment-200/50 border-t border-b border-ink-300/10 relative">
        <div class="container mx-auto px-6 lg:px-16">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                <!-- Graphic Preview & Interactive Panel -->
                <div class="lg:col-span-6 flex flex-col justify-center items-center">
                    <div class="w-full max-w-md bg-parchment-100 border border-ink-300/30 p-8 rounded-sm relative shadow-sm overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
                        
                        <!-- Visual representation of the active state -->
                        <div id="ritual-graphic" class="relative w-48 h-48 mb-8 flex items-center justify-center transition-all duration-700">
                            <!-- SVG Ceramics / Leaf / Water Steam -->
                            <svg class="w-full h-full text-ink-700" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <!-- Steam Lines -->
                                <g id="steam-lines" class="opacity-0 transition-opacity duration-500">
                                    <path d="M85 40C85 30 90 25 88 15" stroke="#E25F70" stroke-width="1.5" stroke-linecap="round" class="animate-pulse"/>
                                    <path d="M100 45C100 35 105 30 102 18" stroke="#E25F70" stroke-width="1.5" stroke-linecap="round" class="animate-pulse"/>
                                    <path d="M115 42C115 32 110 27 112 17" stroke="#E25F70" stroke-width="1.5" stroke-linecap="round" class="animate-pulse"/>
                                </g>
                                
                                <!-- Ceramic Bowl Outline -->
                                <path d="M50 100C50 150 150 150 150 100H50Z" fill="#EAE2D1" stroke="#3A4B53" stroke-width="2"/>
                                <rect x="85" y="140" width="30" height="8" rx="2" fill="#3A4B53"/>

                                <!-- Inside Liquid -->
                                <path id="tea-liquid" d="M52 100C80 112 120 112 148 100C148 125 52 125 52 100Z" fill="#C1384E" class="transition-all duration-700" opacity="0"/>
                                
                                <!-- Decorative Leaf -->
                                <path id="ritual-leaf" d="M100 90C110 90 120 75 115 65C105 65 95 80 100 90Z" fill="#5C6B73" class="transition-all duration-500 origin-center"/>
                            </svg>
                            <!-- Ambient glowing ring inside visualizer -->
                            <div class="absolute inset-0 rounded-full border border-blossom-500/10 zen-pulse pointer-events-none"></div>
                        </div>

                        <!-- Mini audio feedback visualizer -->
                        <div class="h-4 flex items-center space-x-1 mb-4">
                            <span class="w-1 h-2 bg-ink-300/50 rounded-full transition-all duration-300"></span>
                            <span class="w-1 h-3 bg-blossom-500 rounded-full transition-all duration-300"></span>
                            <span class="w-1 h-4 bg-ink-700 rounded-full transition-all duration-300"></span>
                            <span class="w-1 h-2 bg-ink-300/50 rounded-full transition-all duration-300"></span>
                        </div>

                        <!-- Active Step Text Block -->
                        <div class="text-center min-h-[60px]">
                            <p id="ritual-step-num" class="text-[10px] tracking-extra uppercase text-blossom-700 font-bold mb-1">STEP 01</p>
                            <h4 id="ritual-step-title" class="font-serif text-lg font-medium text-ink-900 mb-2">Preheat the Vessel</h4>
                            <p id="ritual-step-desc" class="text-xs text-ink-500 font-light max-w-sm px-4">Introduce warm thermal water to wake the clay and release cold static energy.</p>
                        </div>
                    </div>
                </div>

                <!-- Explanation & Controls Column -->
                <div class="lg:col-span-6">
                    <div class="mb-4 flex items-center space-x-2 text-xs tracking-widest text-blossom-700 font-medium">
                        <span class="inline-block w-4 h-[1px] bg-blossom-500"></span>
                        <span>INTERACTIVE MEDITATION</span>
                    </div>
                    
                    <h2 class="font-serif text-3xl sm:text-5xl font-light text-ink-900 leading-tight mb-6">
                        The Art of <br><span class="italic text-ink-700">Slowing Down</span>
                    </h2>

                    <p class="font-sans text-xs sm:text-sm text-ink-700 font-light leading-relaxed mb-10 tracking-wide">
                        Explore the four phases of the traditional tea ceremony ritual. Slow down your breath, click each phase to experience the sensory transformation, and listen to the delicate wind chime responses.
                    </p>

                    <!-- Interactive Step Buttons -->
                    <div class="space-y-4">
                        <!-- Step 1 Trigger -->
                        <button onclick="activateRitualStep(1)" class="ritual-btn w-full flex items-center justify-between p-4 border border-blossom-500 text-left bg-parchment-100 rounded-sm transition-all focus:outline-none">
                            <div class="flex items-center space-x-4">
                                <span class="font-serif text-xs text-blossom-700 font-bold">01</span>
                                <span class="font-serif text-sm font-semibold tracking-wider text-ink-900">Preheat Vessel (溫壺)</span>
                            </div>
                            <span class="text-xs text-blossom-500"><i class="fa-solid fa-circle-play"></i></span>
                        </button>

                        <!-- Step 2 Trigger -->
                        <button onclick="activateRitualStep(2)" class="ritual-btn w-full flex items-center justify-between p-4 border border-ink-300/30 hover:border-blossom-500/40 text-left bg-transparent rounded-sm transition-all focus:outline-none">
                            <div class="flex items-center space-x-4">
                                <span class="font-serif text-xs text-ink-500 font-semibold">02</span>
                                <span class="font-serif text-sm font-medium tracking-wider text-ink-700">Introduce Leaf (投茶)</span>
                            </div>
                            <span class="text-xs text-ink-300"><i class="fa-solid fa-circle-play"></i></span>
                        </button>

                        <!-- Step 3 Trigger -->
                        <button onclick="activateRitualStep(3)" class="ritual-btn w-full flex items-center justify-between p-4 border border-ink-300/30 hover:border-blossom-500/40 text-left bg-transparent rounded-sm transition-all focus:outline-none">
                            <div class="flex items-center space-x-4">
                                <span class="font-serif text-xs text-ink-500 font-semibold">03</span>
                                <span class="font-serif text-sm font-medium tracking-wider text-ink-700">The First Steep (沖泡)</span>
                            </div>
                            <span class="text-xs text-ink-300"><i class="fa-solid fa-circle-play"></i></span>
                        </button>

                        <!-- Step 4 Trigger -->
                        <button onclick="activateRitualStep(4)" class="ritual-btn w-full flex items-center justify-between p-4 border border-ink-300/30 hover:border-blossom-500/40 text-left bg-transparent rounded-sm transition-all focus:outline-none">
                            <div class="flex items-center space-x-4">
                                <span class="font-serif text-xs text-ink-500 font-semibold">04</span>
                                <span class="font-serif text-sm font-medium tracking-wider text-ink-700">Silent Tasting (品茗)</span>
                            </div>
                            <span class="text-xs text-ink-300"><i class="fa-solid fa-circle-play"></i></span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- SECTION: THE GALLERY (PORTFOLIO SHOWCASE) -->
    <section id="portfolio" class="py-24 relative">
        <div class="container mx-auto px-6 lg:px-16">
            
            <!-- Section Header -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                <div>
                    <span class="text-xs tracking-extra uppercase text-blossom-700 font-semibold inline-block mb-3">EXQUISITE ARTIFACTS</span>
                    <h2 class="font-serif text-3xl sm:text-5xl font-light text-ink-900 leading-tight">
                        Selected Masterpieces
                    </h2>
                </div>
                <p class="font-sans text-xs sm:text-sm text-ink-500 font-light max-w-md mt-4 md:mt-0 tracking-wide leading-relaxed">
                    A visual catalog of brand spaces, ink illustrations, and design packaging crafted in alignment with our principles of deep space and texture.
                </p>
            </div>

            <!-- Showcase Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- Project 1 -->
                <div class="group border border-ink-300/30 p-4 bg-parchment-100 rounded-sm hover:shadow-md transition-shadow relative">
                    <!-- Elegant visual mock frame using simple vector representation of mountains/sea -->
                    <div class="w-full h-72 bg-gradient-to-tr from-ink-900 via-ink-700 to-ink-500 relative overflow-hidden flex items-center justify-center">
                        <div class="absolute inset-0 opacity-15 mix-blend-overlay paper-grain"></div>
                        
                        <!-- Dynamic Vector Mountain Art for mock -->
                        <div class="absolute bottom-0 w-full opacity-30 transform scale-x-[-1]">
                            <svg class="w-full h-full" viewBox="0 0 400 200" fill="none">
                                <path d="M0 200V80L100 130L200 60L300 120L400 50V200H0Z" fill="#FAF7F0"/>
                            </svg>
                        </div>
                        
                        <!-- Glowing center Sun -->
                        <div class="w-12 h-12 rounded-full bg-blossom-500 opacity-20 filter blur-md"></div>
                        
                        <!-- Elegant floating calligraphy in center -->
                        <span class="font-serif text-parchment-100 text-3xl font-light tracking-widest opacity-80 group-hover:scale-110 transition-transform duration-700">空</span>
                        
                        <!-- Tag overlay -->
                        <div class="absolute top-4 left-4 bg-parchment-100/95 text-ink-900 text-[9px] tracking-widest uppercase py-1 px-3 rounded-sm border border-ink-300/10 shadow-sm">
                            Kyoto, Japan
                        </div>
                    </div>

                    <!-- Label -->
                    <div class="pt-6 pb-2 flex justify-between items-start">
                        <div>
                            <span class="text-[9px] text-blossom-700 font-serif tracking-widest uppercase">SPATIAL SCENERY</span>
                            <h3 class="font-serif text-lg font-light text-ink-900 group-hover:text-blossom-700 transition-colors mt-1">The KONG Tea House</h3>
                        </div>
                        <div class="w-7 h-7 border border-ink-300/40 flex items-center justify-center rounded-full text-xs text-ink-500 group-hover:bg-blossom-500 group-hover:text-parchment-100 transition-colors">
                            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="group border border-ink-300/30 p-4 bg-parchment-100 rounded-sm hover:shadow-md transition-shadow relative">
                    <div class="w-full h-72 bg-gradient-to-tr from-ink-700 via-ink-500 to-ink-300 relative overflow-hidden flex items-center justify-center">
                        <div class="absolute inset-0 opacity-15 mix-blend-overlay paper-grain"></div>
                        
                        <!-- Dynamic Vector lines simulating mountain streams -->
                        <div class="absolute bottom-0 w-full opacity-20">
                            <svg class="w-full h-full" viewBox="0 0 400 200" fill="none">
                                <path d="M0 150C100 100 200 200 300 120C350 100 380 140 400 110" stroke="#FAF7F0" stroke-width="2"/>
                            </svg>
                        </div>

                        <span class="font-serif text-parchment-100 text-3xl font-light tracking-widest opacity-80 group-hover:scale-110 transition-transform duration-700">流</span>

                        <div class="absolute top-4 left-4 bg-parchment-100/95 text-ink-900 text-[9px] tracking-widest uppercase py-1 px-3 rounded-sm border border-ink-300/10 shadow-sm">
                            Identity Design
                        </div>
                    </div>

                    <div class="pt-6 pb-2 flex justify-between items-start">
                        <div>
                            <span class="text-[9px] text-blossom-700 font-serif tracking-widest uppercase">BRAND ATELIER</span>
                            <h3 class="font-serif text-lg font-light text-ink-900 group-hover:text-blossom-700 transition-colors mt-1">LIU Flowing Ink</h3>
                        </div>
                        <div class="w-7 h-7 border border-ink-300/40 flex items-center justify-center rounded-full text-xs text-ink-500 group-hover:bg-blossom-500 group-hover:text-parchment-100 transition-colors">
                            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="group border border-ink-300/30 p-4 bg-parchment-100 rounded-sm hover:shadow-md transition-shadow relative">
                    <div class="w-full h-72 bg-gradient-to-tr from-blossom-700 via-blossom-500 to-blossom-300/50 relative overflow-hidden flex items-center justify-center">
                        <div class="absolute inset-0 opacity-15 mix-blend-overlay paper-grain"></div>
                        
                        <div class="absolute bottom-0 w-full opacity-40">
                            <svg class="w-full h-full" viewBox="0 0 400 200" fill="none">
                                <circle cx="200" cy="100" r="40" stroke="#FAF7F0" stroke-width="1" stroke-dasharray="5 5"/>
                            </svg>
                        </div>

                        <span class="font-serif text-parchment-100 text-3xl font-light tracking-widest opacity-80 group-hover:scale-110 transition-transform duration-700">和</span>

                        <div class="absolute top-4 left-4 bg-parchment-100/95 text-ink-900 text-[9px] tracking-widest uppercase py-1 px-3 rounded-sm border border-ink-300/10 shadow-sm">
                            Atelier Sourcing
                        </div>
                    </div>

                    <div class="pt-6 pb-2 flex justify-between items-start">
                        <div>
                            <span class="text-[9px] text-blossom-700 font-serif tracking-widest uppercase">CERAMICS & TEA</span>
                            <h3 class="font-serif text-lg font-light text-ink-900 group-hover:text-blossom-700 transition-colors mt-1">HE Accord Stoneware</h3>
                        </div>
                        <div class="w-7 h-7 border border-ink-300/40 flex items-center justify-center rounded-full text-xs text-ink-500 group-hover:bg-blossom-500 group-hover:text-parchment-100 transition-colors">
                            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION: ZEN TESTIMONIAL / EMBEDDED POEM -->
    <section class="py-24 bg-parchment-200/50 relative border-t border-b border-ink-300/10">
        <!-- Floating Chimes Graphic Background -->
        <div class="absolute left-10 top-1/2 -translate-y-1/2 w-48 h-48 opacity-10 pointer-events-none select-none hidden md:block">
            <svg class="w-full h-full text-ink-900 animate-pulse" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="10" r="2"/>
                <line x1="50" y1="10" x2="50" y2="50" stroke="currentColor" stroke-width="0.5"/>
                <rect x="47" y="50" width="6" height="15" rx="1"/>
                <line x1="50" y1="65" x2="50" y2="90" stroke="currentColor" stroke-width="0.25"/>
                <path d="M48 90C48 90 46 95 50 97C54 95 52 90 52 90H48Z"/>
            </svg>
        </div>

        <div class="container mx-auto px-6 lg:px-16 text-center max-w-3xl">
            <!-- Decorative Lotus Bud SVG -->
            <div class="w-12 h-12 mx-auto mb-8 text-blossom-500">
                <svg class="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 15C50 15 35 45 35 60C35 70 42 75 50 75C58 75 65 70 65 60C65 45 50 15 50 15ZM50 25C53 35 59 50 59 60C59 65 55 68 50 68C45 68 41 65 41 60C41 50 47 35 50 25Z"/>
                </svg>
            </div>
            
            <p class="font-serif text-xl sm:text-2xl md:text-3xl font-light italic text-ink-900 leading-relaxed mb-8">
                "ShanShui did not merely design our mountain resort; they designed the silence that surrounds it. Our guests describe the lobby not as a room, but as a deep breath."
            </p>
            
            <div class="w-8 h-[1px] bg-blossom-500 mx-auto mb-4"></div>
            
            <span class="font-serif text-xs uppercase tracking-extra text-ink-900 font-semibold block">Master Xun</span>
            <span class="text-[10px] uppercase text-ink-500 tracking-widest block mt-1">Founder, Cloud-Mist Hot Spring Retreat</span>
        </div>
    </section>

    <!-- CONTACT & ENQUIRY ATELIER (MAP/INFO GRID) -->
    <section id="contact" class="py-24 relative">
        <div class="container mx-auto px-6 lg:px-16">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                <!-- Left Hand Side: Contact Info mimicking back of the inspiration business card -->
                <div class="lg:col-span-5 border border-ink-300/30 p-8 sm:p-12 bg-parchment-100 rounded-sm relative shadow-sm flex flex-col justify-between min-h-[500px]">
                    <!-- Subtle traditional patterns and frame -->
                    <span class="absolute top-2 left-2 w-3 h-3 border-t border-l border-ink-500/40"></span>
                    <span class="absolute top-2 right-2 w-3 h-3 border-t border-r border-ink-500/40"></span>
                    <span class="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-ink-500/40"></span>
                    <span class="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-ink-500/40"></span>

                    <div>
                        <!-- Logo & Title on Card -->
                        <div class="flex items-center space-x-3 mb-10 pb-6 border-b border-ink-300/20">
                            <div class="w-8 h-8 flex items-center justify-center bg-blossom-700 text-parchment-100 rounded-sm font-serif text-sm font-bold stamp-glow shadow-sm">
                                攝
                            </div>
                            <div class="flex flex-col">
                                <span class="font-serif tracking-widest text-xs font-semibold uppercase text-ink-900">攝圖网 | 设计</span>
                                <span class="text-[8px] tracking-widest uppercase text-ink-500 font-sans -mt-1">Creative Sanctuary Collective</span>
                            </div>
                        </div>

                        <!-- Card Fields matching inspiration language -->
                        <div class="space-y-8">
                            <div>
                                <h4 class="font-serif text-[10px] uppercase tracking-extra text-ink-500 mb-1">Office Presence</h4>
                                <p class="text-xs sm:text-sm text-ink-900 font-medium leading-relaxed font-serif">
                                    上海市浦东新区东方路 3539<br>
                                    <span class="text-xs text-ink-500 font-sans">Pudong District, Shanghai, PRC</span>
                                </p>
                            </div>

                            <div>
                                <h4 class="font-serif text-[10px] uppercase tracking-extra text-ink-500 mb-1">Direct Connection</h4>
                                <p class="text-xs sm:text-sm text-ink-900 font-medium font-sans">
                                    021-80187116
                                </p>
                            </div>

                            <div>
                                <h4 class="font-serif text-[10px] uppercase tracking-extra text-ink-500 mb-1">Digital Correspondence</h4>
                                <p class="text-xs sm:text-sm text-ink-900 font-medium font-sans mb-1">
                                    shetuwang@123.com
                                </p>
                                <p class="text-[11px] text-ink-500 font-sans">
                                    http://www.699pic.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Traditional QR Code / Seal alignment -->
                    <div class="mt-12 pt-6 border-t border-ink-300/20 flex justify-between items-center">
                        <div class="flex items-center space-x-3">
                            <!-- Simulated elegant vector QR stamp placeholder -->
                            <div class="w-12 h-12 border border-ink-300/50 p-1 bg-parchment-200 rounded-sm flex flex-wrap gap-[2px]">
                                <span class="w-2.5 h-2.5 bg-ink-900"></span>
                                <span class="w-2.5 h-2.5 bg-ink-300/40"></span>
                                <span class="w-2.5 h-2.5 bg-ink-900"></span>
                                <span class="w-2.5 h-2.5 bg-ink-900"></span>
                                <span class="w-2.5 h-2.5 bg-ink-300/40"></span>
                                <span class="w-2.5 h-2.5 bg-ink-900"></span>
                                <span class="w-2.5 h-2.5 bg-ink-900"></span>
                                <span class="w-2.5 h-2.5 bg-ink-300/40"></span>
                                <span class="w-2.5 h-2.5 bg-ink-900"></span>
                                <span class="w-2.5 h-2.5 bg-ink-900"></span>
                                <span class="w-2.5 h-2.5 bg-ink-300/40"></span>
                                <span class="w-2.5 h-2.5 bg-ink-900"></span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[9px] uppercase tracking-widest text-ink-900 font-semibold font-serif">WeChat / Line Scan</span>
                                <span class="text-[8px] text-ink-500 uppercase tracking-widest">Connect for instant dialogue</span>
                            </div>
                        </div>

                        <!-- Mini Wax Seal Signoff -->
                        <div class="w-10 h-10 rounded-full bg-blossom-700 text-parchment-100 flex items-center justify-center font-serif text-sm font-bold shadow-md transform rotate-12 stamp-glow">
                            誠
                        </div>
                    </div>
                </div>

                <!-- Right Hand Side: Interactive Form -->
                <div class="lg:col-span-7 flex flex-col justify-center">
                    <div class="mb-8">
                        <span class="text-xs tracking-extra uppercase text-blossom-700 font-semibold inline-block mb-3">BEGIN INK CONVERSATION</span>
                        <h3 class="font-serif text-2xl sm:text-4xl font-light text-ink-900">Seek Serenity for Your Next Endeavor</h3>
                    </div>

                    <!-- Minimalist Elegant Form -->
                    <form id="enquiry-form" onsubmit="handleFormSubmit(event)" class="space-y-6">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <!-- Name input -->
                            <div class="flex flex-col border-b border-ink-300/40 py-2 focus-within:border-blossom-500 transition-colors">
                                <label class="text-[10px] tracking-widest uppercase text-ink-500 mb-1 font-serif">YOUR DESIGNATION / NAME</label>
                                <input type="text" required class="bg-transparent border-none text-ink-900 text-sm font-sans focus:outline-none w-full py-1 placeholder-ink-300" placeholder="e.g. Honorable Guest">
                            </div>
                            <!-- Email input -->
                            <div class="flex flex-col border-b border-ink-300/40 py-2 focus-within:border-blossom-500 transition-colors">
                                <label class="text-[10px] tracking-widest uppercase text-ink-500 mb-1 font-serif">CORRESPONDENCE EMAIL</label>
                                <input type="email" required class="bg-transparent border-none text-ink-900 text-sm font-sans focus:outline-none w-full py-1 placeholder-ink-300" placeholder="e.g. calm@example.com">
                            </div>
                        </div>

                        <!-- Service Select Option -->
                        <div class="flex flex-col border-b border-ink-300/40 py-2 focus-within:border-blossom-500 transition-colors">
                            <label class="text-[10px] tracking-widest uppercase text-ink-500 mb-1 font-serif">THE INTENDED ATELIER</label>
                            <select class="bg-transparent border-none text-ink-900 text-sm font-sans focus:outline-none w-full py-1">
                                <option value="spatial" class="bg-parchment-100 text-ink-900">Spatial & Architecture (山水居)</option>
                                <option value="branding" class="bg-parchment-100 text-ink-900">Identity & Calligraphy (水墨) </option>
                                <option value="tea" class="bg-parchment-100 text-ink-900">Cloud & Leaf Sourcing (雨前茶)</option>
                            </select>
                        </div>

                        <!-- Message Input -->
                        <div class="flex flex-col border-b border-ink-300/40 py-2 focus-within:border-blossom-500 transition-colors">
                            <label class="text-[10px] tracking-widest uppercase text-ink-500 mb-1 font-serif">YOUR REVERIE / BRIEF</label>
                            <textarea rows="4" required class="bg-transparent border-none text-ink-900 text-sm font-sans focus:outline-none w-full py-1 placeholder-ink-300 resize-none" placeholder="Share your vision or spatial timeline with us..."></textarea>
                        </div>

                        <!-- Form status message -->
                        <div id="form-status" class="hidden text-xs text-blossom-700 font-serif tracking-widest uppercase transition-all">
                            <!-- Will be populated via JS -->
                        </div>

                        <!-- Submit Button styled like seal ink -->
                        <div>
                            <button type="submit" class="ink-bleed-btn bg-ink-900 border border-ink-900 text-parchment-100 px-8 py-4 text-xs tracking-extra uppercase font-semibold rounded-sm transition-all shadow-md">
                                Seal & Dispatch Message
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-ink-900 text-parchment-300 py-16 relative overflow-hidden border-t border-ink-700/50">
        <!-- Drifting misty backdrop in footer -->
        <div class="absolute inset-0 opacity-5 mix-blend-overlay paper-grain"></div>

        <div class="container mx-auto px-6 lg:px-16 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-ink-700/60">
                
                <!-- Col 1: Brand & Logo -->
                <div class="md:col-span-1">
                    <div class="flex items-center space-x-3 mb-6">
                        <div class="w-8 h-8 flex items-center justify-center bg-blossom-700 text-parchment-100 rounded-sm font-serif text-sm font-bold stamp-glow shadow-sm">
                            山
                        </div>
                        <span class="font-serif tracking-widest text-sm font-semibold uppercase text-parchment-100">SHAN SHUI</span>
                    </div>
                    <p class="text-xs text-parchment-300/70 font-light tracking-wide leading-relaxed">
                        Expanding the visual landscape of ancient ink wash paintings into absolute, physical spaces and timeless corporate identities.
                    </p>
                </div>

                <!-- Col 2: Navigation -->
                <div>
                    <h4 class="font-serif text-[10px] uppercase tracking-extra text-blossom-300 mb-4">ATELIERS</h4>
                    <ul class="space-y-3 text-xs text-parchment-300/70 font-light tracking-widest">
                        <li><a href="#services" class="hover:text-blossom-300 transition-colors">Residential Spaces</a></li>
                        <li><a href="#services" class="hover:text-blossom-300 transition-colors">Traditional Tearooms</a></li>
                        <li><a href="#services" class="hover:text-blossom-300 transition-colors">Packaging Design</a></li>
                        <li><a href="#services" class="hover:text-blossom-300 transition-colors">Tea harvests</a></li>
                    </ul>
                </div>

                <!-- Col 3: Principles -->
                <div>
                    <h4 class="font-serif text-[10px] uppercase tracking-extra text-blossom-300 mb-4">PRINCIPLES</h4>
                    <ul class="space-y-3 text-xs text-parchment-300/70 font-light tracking-widest">
                        <li><a href="#" class="hover:text-blossom-300 transition-colors">Atmospheric Expanse</a></li>
                        <li><a href="#" class="hover:text-blossom-300 transition-colors">Raw Craftsmanship</a></li>
                        <li><a href="#" class="hover:text-blossom-300 transition-colors">Quietude & Balance</a></li>
                        <li><a href="#" class="hover:text-blossom-300 transition-colors">Sustainable Wood & Stone</a></li>
                    </ul>
                </div>

                <!-- Col 4: Newsletter -->
                <div>
                    <h4 class="font-serif text-[10px] uppercase tracking-extra text-blossom-300 mb-4">THE CHRONICLE</h4>
                    <p class="text-xs text-parchment-300/70 font-light mb-4 leading-relaxed tracking-wide">
                        Receive subtle sensory thoughts on spatial layout and tea collection cycles. No spam, only serenity.
                    </p>
                    <div class="flex border-b border-parchment-300/30 pb-1">
                        <input type="email" placeholder="Email coordinates" class="bg-transparent border-none text-xs text-parchment-100 focus:outline-none w-full placeholder-parchment-300/40">
                        <button class="text-parchment-100 hover:text-blossom-300 transition-colors"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

            </div>

            <!-- Copyright and legal -->
            <div class="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-parchment-300/50 tracking-widest uppercase">
                <span>© 2026 SHAN SHUI ATELIER. ALL RIGHTS SECURED.</span>
                <span class="flex space-x-6 mt-4 sm:mt-0">
                    <a href="#" class="hover:text-blossom-300">Privacy Sanctuary</a>
                    <a href="#" class="hover:text-blossom-300">Terms of Ink</a>
                    <a href="#" class="hover:text-blossom-300">Kyoto Sourcing</a>
                </span>
            </div>
        </div>
    </footer>

    <!-- INTERACTIVE SCRIPTS -->
    <script>
        // WEB AUDIO SYSTEM FOR SOOTHING CHIMES (ULTRA-PREMIUM SENSORY INTERACTION)
        let audioCtx = null;
        let chimeModeEnabled = false;

        const soundBtn = document.getElementById('soundscape-btn');
        const soundIndicator = document.getElementById('sound-indicator');

        // Toggle soundscape active trigger
        soundBtn.addEventListener('click', () => {
            if (!audioCtx) {
                // Initialize Web Audio API on first user gesture
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            
            chimeModeEnabled = !chimeModeEnabled;
            if (chimeModeEnabled) {
                soundIndicator.classList.remove('bg-ink-500');
                soundIndicator.classList.add('bg-blossom-500');
                soundBtn.querySelector('span:last-child').innerText = "Chimes: Active";
                playZenChime(330); // Play introductory soft chime
                setTimeout(() => playZenChime(440), 200);
            } else {
                soundIndicator.classList.remove('bg-blossom-500');
                soundIndicator.classList.add('bg-ink-500');
                soundBtn.querySelector('span:last-child').innerText = "Chimes: Off";
            }
        });

        // Generate customized synthesized bell/chime frequencies for Zen mood
        function playZenChime(frequency = 440, volume = 0.25) {
            if (!audioCtx || !chimeModeEnabled) return;

            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            osc.type = 'triangle'; // Pure, gentle warm tone
            osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
            
            // Gain envelope to simulate chime decay
            gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3.5); // long organic release

            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + 3.5);
        }

        // Add soft interactive triggers to all buttons and cards so they sound like subtle wind chimes when hovered
        document.querySelectorAll('a, button, .ritual-btn, .group').forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (chimeModeEnabled) {
                    // Pick beautiful harmonic notes in a pentatonic scale
                    const scale = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50]; // Pentatonic C Major
                    const randomNote = scale[Math.floor(Math.random() * scale.length)];
                    playZenChime(randomNote, 0.08); // quiet, subtle backdrop chime
                }
            });
        });

        // INTERACTIVE FALLING BLOSSOM PETALS GENERATOR
        const petalContainer = document.getElementById('petal-container');
        const maxPetals = 25;

        function createPetal() {
            if (petalContainer.children.length >= maxPetals) return;

            const petal = document.createElement('div');
            petal.className = 'petal';
            
            // Random sizes, start positions, and anim durations
            const size = Math.random() * 8 + 6; // 6px to 14px
            petal.style.width = `${size}px`;
            petal.style.height = `${size * 1.4}px`;
            
            petal.style.left = `${Math.random() * 100}vw`;
            petal.style.top = `-${Math.random() * 100 + 50}px`;
            
            const duration = Math.random() * 15 + 12; // 12s to 27s slow float
            petal.style.animation = `drift ${duration}s linear infinite`;
            petal.style.animationDelay = `${Math.random() * 5}s`;

            // Append and clear when finished animation loop to prevent leaking memory
            petalContainer.appendChild(petal);
            setTimeout(() => {
                petal.remove();
            }, (duration + 5) * 1000);
        }

        // Fill background with soft petals periodically
        setInterval(createPetal, 1500);
        for (let i = 0; i < 12; i++) {
            createPetal();
        }

        // MOBILE NAVIGATION CONTROL
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const mobileClose = document.getElementById('mobile-menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });

        const closeMobile = () => {
            mobileMenu.classList.add('translate-x-full');
        };

        mobileClose.addEventListener('click', closeMobile);
        mobileLinks.forEach(link => link.addEventListener('click', closeMobile));

        // ZEN TEA CEREMONY SIMULATOR PHASES
        const ritualSteps = {
            1: {
                title: "Preheat the Vessel (溫壺)",
                num: "STEP 01",
                desc: "Introduce pure thermal spring water to wake the clay of the vessel and release stored energy. Listen to the gentle ring of warm porcelain.",
                liquidOpacity: 0.1,
                liquidColor: "#EAE2D1",
                leafScale: 1,
                leafRotate: 0,
                steamOpacity: 0.4
            },
            2: {
                title: "Introduce the Dry Leaves (投茶)",
                num: "STEP 02",
                desc: "Gently let wild organic white tea leaves descend onto the warm, dry clay. Take a slow deep breath as dry aromatics begin to blossom.",
                liquidOpacity: 0.0,
                liquidColor: "transparent",
                leafScale: 1.5,
                leafRotate: 45,
                steamOpacity: 0.0
            },
            3: {
                title: "The First Water Steep (沖泡)",
                num: "STEP 03",
                desc: "Pour pure 85°C high-mountain water in circular streams over the center. Watch the mist spiral upward as the leaves unfurl.",
                liquidOpacity: 0.75,
                liquidColor: "#C1384E",
                leafScale: 1.1,
                leafRotate: 180,
                steamOpacity: 1.0
            },
            4: {
                title: "Quietude & Silent Savoring (品茗)",
                num: "STEP 04",
                desc: "Decant the vibrant tea nectar into cups of quiet presence. Savor the sweet apricot notes, letting complete stillness fill your space.",
                liquidOpacity: 0.9,
                liquidColor: "#E25F70",
                leafScale: 0.8,
                leafRotate: 240,
                steamOpacity: 0.5
            }
        };

        function activateRitualStep(stepIndex) {
            // Highlight active trigger button
            const buttons = document.querySelectorAll('.ritual-btn');
            buttons.forEach((btn, index) => {
                if (index === stepIndex - 1) {
                    btn.classList.remove('border-ink-300/30', 'bg-transparent');
                    btn.classList.add('border-blossom-500', 'bg-parchment-100');
                    btn.querySelector('span:last-child').className = "text-xs text-blossom-500";
                } else {
                    btn.classList.add('border-ink-300/30', 'bg-transparent');
                    btn.classList.remove('border-blossom-500', 'bg-parchment-100');
                    btn.querySelector('span:last-child').className = "text-xs text-ink-300";
                }
            });

            // Update DOM with step data
            const stepData = ritualSteps[stepIndex];
            document.getElementById('ritual-step-num').innerText = stepData.num;
            document.getElementById('ritual-step-title').innerText = stepData.title;
            document.getElementById('ritual-step-desc').innerText = stepData.desc;

            // Update interactive graphic variables
            const steamGroup = document.getElementById('steam-lines');
            const teaLiquid = document.getElementById('tea-liquid');
            const ritualLeaf = document.getElementById('ritual-leaf');

            // Apply SVG transformations smoothly
            steamGroup.style.opacity = stepData.steamOpacity;
            teaLiquid.style.opacity = stepData.liquidOpacity;
            teaLiquid.setAttribute('fill', stepData.liquidColor);
            
            ritualLeaf.style.transform = `scale(${stepData.leafScale}) rotate(${stepData.leafRotate}deg)`;

            // Trigger beautiful synthesized chimes corresponding to the step complexity
            if (chimeModeEnabled) {
                const baseFrequencies = { 1: 330, 2: 440, 3: 554.37, 4: 659.25 };
                playZenChime(baseFrequencies[stepIndex], 0.3);
                // add harmonious ripple delay sound
                setTimeout(() => playZenChime(baseFrequencies[stepIndex] * 1.5, 0.1), 150);
            }
        }

        // ENQUIRY FORM DISPATCH (MOCK REAL EXPERIENCE)
        function handleFormSubmit(event) {
            event.preventDefault();
            const statusDiv = document.getElementById('form-status');
            statusDiv.classList.remove('hidden');
            statusDiv.innerText = "Dispatching sealed letter across the hills...";
            statusDiv.style.color = "#3A4B53";

            // Sound feedback for submission
            if (chimeModeEnabled) {
                playZenChime(523.25, 0.2);
                setTimeout(() => playZenChime(659.25, 0.2), 150);
                setTimeout(() => playZenChime(783.99, 0.2), 300);
            }

            // Simulate transition completion
            setTimeout(() => {
                statusDiv.innerText = "Your reverie has been sealed and cataloged. Expect correspondence as the morning mist clears.";
                statusDiv.style.color = "#C1384E";
                event.target.reset();
            }, 2000);
        }
    </script>
</body>
</html>
3
<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hoàng Thành Thăng Long - Di Sản Hoàng Gia Việt Nam</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts for Regal & Historical Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- FontAwesome for Premium Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Cormorant Garamond"', 'serif'],
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          colors: {
            royal: {
              gold: '#c5a880',
              goldLight: '#e2cfb6',
              goldDark: '#997d50',
              bronze: '#835c2b',
              red: '#9d1c1c',
              redDark: '#5f0f0f',
              dark: '#1c120c',
              darker: '#110a06',
              cream: '#fcfaf2',
              parchment: '#f5efdf',
              parchmentDark: '#eadabe',
            }
          },
          boxShadow: {
            'royal': '0 10px 30px -10px rgba(131, 92, 43, 0.25)',
            'royal-glow': '0 0 25px rgba(197, 168, 128, 0.3)',
          }
        }
      }
    }
  </script>

  <style>
    /* Premium Parchment Paper Overlay Texture */
    .bg-parchment-texture {
      background-color: #f7f3e8;
      background-image: 
        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.6) 0%, rgba(240, 230, 210, 0.4) 100%),
        url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3联%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E");
    }

    /* Dark Luxury Textured Background */
    .bg-dark-texture {
      background-color: #110a06;
      background-image: 
        radial-gradient(circle at 50% 0%, rgba(131, 92, 43, 0.15) 0%, rgba(17, 10, 6, 0.95) 70%),
        url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #110a06;
    }
    ::-webkit-scrollbar-thumb {
      background: #835c2b;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #c5a880;
    }

    /* Shimmer Effect for Gold Borders */
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    .shimmer-gold {
      background: linear-gradient(90deg, #997d50 25%, #fcfaf2 50%, #997d50 75%);
      background-size: 200% 100%;
      animation: shimmer 6s infinite linear;
    }

    /* Elegant Corner Borders */
    .royal-corner {
      position: relative;
    }
    .royal-corner::before, .royal-corner::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      border-color: #c5a880;
      border-style: solid;
      pointer-events: none;
    }
    .royal-corner-tl::before { top: 6px; left: 6px; border-width: 2px 0 0 2px; }
    .royal-corner-tl::after { bottom: 6px; right: 6px; border-width: 0 2px 2px 0; }
  </style>
</head>
<body class="font-sans text-royal-dark bg-royal-darker overflow-x-hidden antialiased">

  <!-- ================= HEADER / NAVBAR ================= -->
  <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-royal-gold/10 bg-royal-darker/90 backdrop-blur-md" id="mainHeader">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      
      <!-- Logo Branding with Asian Heritage Flourish -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="relative w-11 h-11 flex items-center justify-center rounded-full border border-royal-gold/40 bg-royal-dark">
          <svg class="w-7 h-7 text-royal-gold group-hover:rotate-12 transition-transform duration-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Imperial Lotus Motif -->
            <path d="M50 15 C45 35, 20 45, 15 50 C20 55, 45 65, 50 85 C55 65, 80 55, 85 50 C80 45, 55 35, 50 15 Z" fill="currentColor" opacity="0.15"/>
            <path d="M50 25 C47 40, 30 47, 25 50 C30 53, 47 60, 50 75 C53 60, 70 53, 75 50 C70 47, 53 40, 50 25 Z" stroke="currentColor" stroke-width="2"/>
            <circle cx="50" cy="50" r="5" fill="currentColor"/>
          </svg>
          <div class="absolute -inset-1 rounded-full border border-royal-gold/10 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></div>
        </div>
        <div class="leading-none">
          <span class="block font-serif text-lg tracking-widest text-royal-gold font-bold uppercase">Thăng Long</span>
          <span class="block text-[9px] tracking-[0.3em] text-royal-goldLight uppercase">Imperial Citadel</span>
        </div>
      </a>

      <!-- Navigation links -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="#about" class="text-sm font-medium tracking-wide text-royal-goldLight/80 hover:text-royal-gold transition-colors">TỔNG QUAN</a>
        <a href="#slideshow" class="text-sm font-medium tracking-wide text-royal-goldLight/80 hover:text-royal-gold transition-colors flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-royal-red animate-pulse"></span>
          BỘ MẪU TRÌNH CHIẾU
        </a>
        <a href="#timeline" class="text-sm font-medium tracking-wide text-royal-goldLight/80 hover:text-royal-gold transition-colors">TIẾN TRÌNH LỊCH SỬ</a>
        <a href="#virtual-tour" class="text-sm font-medium tracking-wide text-royal-goldLight/80 hover:text-royal-gold transition-colors">THUYẾT MINH ÂM THANH</a>
      </nav>

      <!-- Royal Styled Button -->
      <div class="flex items-center gap-4">
        <a href="#slideshow" class="relative group hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs tracking-widest font-bold uppercase overflow-hidden rounded-sm transition-all duration-300">
          <!-- Background layers -->
          <div class="absolute inset-0 bg-gradient-to-r from-royal-bronze to-royal-gold transition-all duration-500 group-hover:opacity-90"></div>
          <div class="absolute inset-[1px] bg-royal-darker transition-all duration-300 group-hover:bg-transparent"></div>
          <span class="relative z-10 text-royal-gold group-hover:text-royal-darker transition-colors duration-300 flex items-center gap-2">
            TẢI MẪU SLIDE <i class="fa-solid fa-download"></i>
          </span>
        </a>
        
        <!-- Mobile menu toggle button -->
        <button id="menuBtn" class="md:hidden text-royal-gold hover:text-royal-goldLight p-1">
          <i class="fa-solid fa-bars-staggered text-xl"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Menu Drawer -->
  <div id="mobileMenu" class="fixed inset-0 bg-royal-darker/95 z-40 translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center px-12 space-y-8 border-l border-royal-gold/10">
    <button id="closeMenuBtn" class="absolute top-6 right-6 text-royal-gold text-2xl">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <a href="#about" class="text-2xl font-serif text-royal-goldLight/90 hover:text-royal-gold">Tổng Quan Di Sản</a>
    <a href="#slideshow" class="text-2xl font-serif text-royal-goldLight/90 hover:text-royal-gold">Bộ Mẫu Trình Chiếu</a>
    <a href="#timeline" class="text-2xl font-serif text-royal-goldLight/90 hover:text-royal-gold">Tiến Trình Lịch Sử</a>
    <a href="#virtual-tour" class="text-2xl font-serif text-royal-goldLight/90 hover:text-royal-gold">Thuyết Minh Âm Thanh</a>
    <div class="pt-6 border-t border-royal-gold/20">
      <a href="#slideshow" class="w-full text-center py-3 bg-gradient-to-r from-royal-bronze to-royal-gold text-royal-darker font-bold rounded-sm block text-sm tracking-wider">
        TẢI BỘ POWERPOINT (16:9)
      </a>
    </div>
  </div>

  <!-- ================= HERO SECTION (IMPERIAL MAJESTY) ================= -->
  <section class="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden bg-dark-texture">
    <!-- Traditional Asian Clouds overlay background (simulated via SVG paths) -->
    <div class="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="cloudPattern" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M10 60 C 20 50, 40 50, 50 60 C 60 70, 80 70, 90 60 C 100 50, 110 60, 110 70 C 90 90, 30 90, 10 60" fill="none" stroke="#c5a880" stroke-width="1"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#cloudPattern)"/>
      </svg>
    </div>

    <!-- Soft Golden ambient glow representing history & royal majesty -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full py-12">
      
      <!-- Text / Legend side -->
      <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
        <div class="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-royal-gold/20 bg-royal-gold/5 backdrop-blur-sm">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-royal-gold opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-royal-gold"></span>
          </span>
          <span class="text-xs uppercase tracking-[0.25em] text-royal-goldLight font-semibold">DI SẢN VĂN HÓA THẾ GIỚI UNESCO</span>
        </div>

        <h1 class="font-serif leading-none tracking-tight">
          <span class="block text-3xl sm:text-4xl md:text-5xl text-royal-goldLight font-normal mb-2">Hoàng Thành</span>
          <span class="block text-5xl sm:text-7xl md:text-8xl text-royal-gold font-bold uppercase tracking-wider">Thăng Long</span>
        </h1>

        <!-- Royal Divider Ribbon -->
        <div class="flex items-center justify-center lg:justify-start gap-4 py-2">
          <div class="h-[1px] w-12 bg-gradient-to-r from-transparent to-royal-gold"></div>
          <svg class="w-6 h-6 text-royal-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2L15 9H22L17 14L19 21L12 17L5 21L7 14L2 9H9L12 2Z" fill="currentColor"/>
          </svg>
          <div class="h-[1px] w-12 bg-gradient-to-l from-transparent to-royal-gold"></div>
        </div>

        <p class="text-royal-goldLight/70 font-sans max-w-xl mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base">
          Trải qua hơn 10 thế kỷ biến thiên lịch sử, Hoàng Thành Thăng Long sừng sững như một minh chứng bất diệt cho tinh hoa kiến trúc, nghệ thuật và chiều sâu văn hiến quốc gia Đại Việt.
        </p>

        <!-- CTAs -->
        <div class="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a href="#slideshow" class="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-royal-gold to-royal-goldLight hover:from-royal-goldDark hover:to-royal-gold text-royal-darker font-bold rounded-sm shadow-royal-glow tracking-widest text-sm uppercase transition-all duration-300 hover:scale-[1.02]">
            Khám Phá Slide <i class="fa-solid fa-arrow-right ml-2"></i>
          </a>
          <a href="#timeline" class="w-full sm:w-auto px-8 py-4 border border-royal-gold/30 hover:border-royal-gold/80 text-royal-gold font-medium rounded-sm tracking-widest text-sm uppercase bg-royal-gold/5 transition-all duration-300">
            Xem Tiến Trình Lịch Sử
          </a>
        </div>

        <!-- Subtle stats row -->
        <div class="pt-8 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 border-t border-royal-gold/10">
          <div>
            <span class="block font-serif text-3xl text-royal-gold font-bold">1010</span>
            <span class="block text-[11px] text-royal-goldLight/60 uppercase tracking-widest mt-1">Năm khởi lập</span>
          </div>
          <div>
            <span class="block font-serif text-3xl text-royal-gold font-bold">18.39ha</span>
            <span class="block text-[11px] text-royal-goldLight/60 uppercase tracking-widest mt-1">Diện tích khu trung tâm</span>
          </div>
          <div>
            <span class="block font-serif text-3xl text-royal-gold font-bold">2010</span>
            <span class="block text-[11px] text-royal-goldLight/60 uppercase tracking-widest mt-1">UNESCO Công nhận</span>
          </div>
        </div>
      </div>

      <!-- Tower Graphic / Presentation Box side -->
      <div class="lg:col-span-5 relative mt-6 lg:mt-0">
        <!-- Floating royal ornament frame -->
        <div class="absolute -inset-4 border border-royal-gold/15 rounded-lg pointer-events-none scale-105"></div>
        
        <!-- Main Illustrated Tower Container mimicking the Powerpoint cover slide -->
        <div class="relative bg-parchment-texture p-6 sm:p-8 rounded shadow-2xl border-2 border-royal-goldDark/30 overflow-hidden group">
          
          <!-- Inner royal delicate line frame -->
          <div class="absolute inset-3 border border-royal-bronze/10 pointer-events-none"></div>
          
          <!-- Ancient clouds illustration in header of card -->
          <div class="flex justify-between items-center pb-4 border-b border-royal-bronze/10 relative z-10">
            <span class="text-[10px] tracking-widest text-royal-bronze font-bold uppercase">MẪU SLIDE THƯỢNG HẠNG</span>
            <div class="flex gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-royal-bronze/30"></span>
              <span class="w-1.5 h-1.5 rounded-full bg-royal-bronze/30"></span>
              <span class="w-1.5 h-1.5 rounded-full bg-royal-bronze/30"></span>
            </div>
          </div>

          <!-- Symbolic representation of the Flag Tower (Cột Cờ Hà Nội) as shown on the slide design -->
          <div class="my-8 relative h-72 rounded bg-royal-cream border border-royal-bronze/5 flex items-end justify-center overflow-hidden">
            <!-- Warm atmospheric gradient background -->
            <div class="absolute inset-0 bg-gradient-to-t from-royal-parchment to-royal-cream/40 z-0"></div>
            
            <!-- Minimal SVG of Hanoi Flag Tower representing the slide center art -->
            <div class="relative z-10 w-full max-w-[220px] h-[90%] flex flex-col items-center justify-end">
              <!-- Flag pole tip -->
              <div class="w-1.5 h-20 bg-royal-bronze relative flex justify-end">
                <!-- Red Flag of Vietnam -->
                <div class="absolute top-2 left-1 w-10 h-7 bg-royal-red rounded-sm shadow-sm flex items-center justify-center animate-[wave_4s_infinite_ease-in-out]">
                  <i class="fa-solid fa-star text-[8px] text-royal-gold"></i>
                </div>
              </div>
              
              <!-- Tower Octagonal Top Segment -->
              <div class="w-10 h-14 bg-gradient-to-b from-royal-bronze to-royal-dark rounded-t-sm flex flex-col justify-around items-center p-1 border-b border-royal-gold/20">
                <div class="w-6 h-2 bg-royal-gold/20 rounded-sm"></div>
                <div class="grid grid-cols-2 gap-1 w-full px-1">
                  <div class="h-3 bg-royal-dark/80 rounded-sm"></div>
                  <div class="h-3 bg-royal-dark/80 rounded-sm"></div>
                </div>
              </div>

              <!-- Tower Middle Brick Body -->
              <div class="w-16 h-28 bg-gradient-to-b from-royal-dark to-royal-darker flex flex-col justify-between p-2 relative shadow-lg">
                <!-- Brick line patterns simulated in CSS -->
                <div class="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(197,168,128,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(197,168,128,0.3)_1px,transparent_1px)] bg-[size:10px_6px]"></div>
                
                <!-- Windows -->
                <div class="grid grid-cols-3 gap-1 w-full mx-auto relative z-10 mt-4">
                  <div class="h-5 bg-royal-parchment/10 rounded-t-full"></div>
                  <div class="h-5 bg-royal-parchment/10 rounded-t-full"></div>
                  <div class="h-5 bg-royal-parchment/10 rounded-t-full"></div>
                </div>
                
                <!-- Arch gate base of middle body -->
                <div class="w-6 h-10 bg-royal-darker border-t border-royal-gold/10 mx-auto rounded-t-lg relative z-10"></div>
              </div>

              <!-- Large Base Platform -->
              <div class="w-28 h-12 bg-gradient-to-b from-royal-bronze to-royal-dark rounded-t-sm relative">
                <!-- Base stairs block -->
                <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-royal-darker rounded-t-sm border-t border-royal-gold/20"></div>
              </div>
            </div>

            <!-- Stylized golden clouds floating around the tower -->
            <div class="absolute left-4 top-24 opacity-60 animate-[bounce_5s_infinite_ease-in-out]">
              <i class="fa-solid fa-cloud text-royal-gold text-2xl"></i>
            </div>
            <div class="absolute right-4 top-12 opacity-60 animate-[bounce_7s_infinite_ease-in-out]">
              <i class="fa-solid fa-cloud text-royal-gold text-3xl"></i>
            </div>
          </div>

          <!-- Elegant typography beneath tower image -->
          <div class="text-center space-y-2 relative z-10">
            <h3 class="font-serif text-3xl text-royal-dark font-bold tracking-wide uppercase">Cột Cờ Hà Nội</h3>
            <p class="text-xs text-royal-bronze font-medium tracking-[0.2em] uppercase">Hoàng Thành Thăng Long Kỳ Đài</p>
            <div class="pt-3 border-t border-royal-bronze/10 mt-3 flex justify-between items-center text-[11px] text-royal-dark/60 font-sans">
              <span>TRÌNH BÀY: TUYETKYPOWERPOINT</span>
              <span>SIZE: 16:9 HD</span>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  </section>

  <!-- ================= ABOUT & ARCHITECTURE OVERVIEW ================= -->
  <section id="about" class="py-24 bg-parchment-texture border-y border-royal-gold/20 relative">
    <!-- Royal motif overlay -->
    <div class="absolute top-12 left-12 w-32 h-32 opacity-5 pointer-events-none">
      <svg class="w-full h-full text-royal-bronze" fill="currentColor" viewBox="0 0 100 100">
        <path d="M50 0 C 60 25, 75 40, 100 50 C 75 60, 60 75, 50 100 C 40 75, 25 60, 0 50 C 25 40, 40 25, 50 0 Z"/>
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <h2 class="font-serif text-4xl sm:text-5xl text-royal-dark font-bold uppercase tracking-wide">
          Kiến Trúc & Không Gian Di Sản
        </h2>
        <div class="w-24 h-[1px] bg-royal-bronze mx-auto"></div>
        <p class="text-royal-dark/80 font-sans text-sm sm:text-base leading-relaxed">
          Khu Trung tâm Hoàng thành Thăng Long - Hà Nội là nơi giao thoa của các giá trị nhân văn, nghệ thuật tạo hình, kiến trúc độc đáo và kỹ thuật xây dựng trải dài qua các thời kỳ lịch sử.
        </p>
      </div>

      <!-- Grid of Architectural Treasures -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Card 1: Đoan Môn -->
        <div class="bg-royal-cream border border-royal-gold/30 rounded p-6 shadow-royal hover:shadow-xl hover:border-royal-gold transition-all duration-300 flex flex-col justify-between group">
          <div class="space-y-4">
            <div class="relative h-48 rounded bg-royal-parchment overflow-hidden flex items-center justify-center border border-royal-gold/15">
              <!-- Simulated Graphic representation of Đoan Môn Gate -->
              <div class="absolute inset-0 bg-gradient-to-tr from-royal-parchment to-royal-cream/10"></div>
              <!-- Simulated Gate Structure with SVGs -->
              <svg class="w-40 h-32 text-royal-bronze/80 z-10 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Gate roof and structure -->
                <path d="M10 50 L90 50 L85 30 L15 30 Z" fill="currentColor" opacity="0.3"/>
                <rect x="20" y="50" width="60" height="25" rx="2" fill="currentColor" opacity="0.5"/>
                <!-- 3 Arch gates -->
                <path d="M28 75 V62 C28 59, 32 59, 32 62 V75" stroke="#fcfaf2" stroke-width="2" fill="none"/>
                <path d="M46 75 V58 C46 54, 54 54, 54 58 V75" stroke="#fcfaf2" stroke-width="3" fill="none"/>
                <path d="M68 75 V62 C68 59, 72 59, 72 62 V75" stroke="#fcfaf2" stroke-width="2" fill="none"/>
                <path d="M5 30 C 50 30, 20 5, 50 10 C 80 5, 50 30, 95 30" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
              <div class="absolute top-3 left-3 px-2 py-0.5 bg-royal-bronze text-royal-cream text-[10px] tracking-widest font-bold uppercase rounded-sm">CỔNG CHÍNH</div>
            </div>
            <h3 class="font-serif text-2xl text-royal-dark font-bold">Đoan Môn (Cổng Thành)</h3>
            <p class="text-xs text-royal-dark/70 leading-relaxed font-sans">
              Đoan Môn là cổng chính dẫn thẳng vào điện Kính Thiên - cấm thành của hoàng cung hoàng đế. Cấu trúc lầu vọng lâu vững chãi bằng đá xám cổ kính mang giá trị văn hóa tuyệt đối.
            </p>
          </div>
          <div class="pt-6 border-t border-royal-gold/10 mt-6 flex justify-between items-center text-xs text-royal-bronze font-bold tracking-wider">
            <span>KIẾN TRÚC LÝ - TRẦN</span>
            <span class="group-hover:translate-x-1 transition-transform"><i class="fa-solid fa-arrow-right-long"></i></span>
          </div>
        </div>

        <!-- Card 2: Điện Kính Thiên -->
        <div class="bg-royal-cream border border-royal-gold/30 rounded p-6 shadow-royal hover:shadow-xl hover:border-royal-gold transition-all duration-300 flex flex-col justify-between group">
          <div class="space-y-4">
            <div class="relative h-48 rounded bg-royal-parchment overflow-hidden flex items-center justify-center border border-royal-gold/15">
              <div class="absolute inset-0 bg-gradient-to-tr from-royal-parchment to-royal-cream/10"></div>
              <!-- Imperial Dragon Sculpture Simulation -->
              <svg class="w-40 h-32 text-royal-bronze/80 z-10 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Dragon stone steps outlines -->
                <path d="M10 70 L90 20 L90 70 Z" fill="currentColor" opacity="0.15"/>
                <path d="M15 65 C30 50, 40 45, 55 40 C70 35, 75 30, 85 22" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                <!-- Dragon details/spikes -->
                <path d="M25 55 L28 51 L33 54 L38 46 L43 49 L48 40" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="82" cy="22" r="3" fill="currentColor"/>
                <text x="35" y="72" fill="currentColor" font-size="6" font-family="sans-serif" letter-spacing="0.1" opacity="0.6">RỒNG ĐÁ ĐIỆN KÍNH THIÊN</text>
              </svg>
              <div class="absolute top-3 left-3 px-2 py-0.5 bg-royal-red text-royal-cream text-[10px] tracking-widest font-bold uppercase rounded-sm">TRUNG TÂM</div>
            </div>
            <h3 class="font-serif text-2xl text-royal-dark font-bold">Điện Kính Thiên</h3>
            <p class="text-xs text-royal-dark/70 leading-relaxed font-sans">
              Là hạt nhân chính của toàn bộ hoàng cung, nơi triều đình bàn thảo đại sự quốc gia. Đôi rồng đá chầu tạc từ thời Lê Sơ năm 1467 là kiệt tác nghệ thuật điêu khắc đỉnh cao quốc gia.
            </p>
          </div>
          <div class="pt-6 border-t border-royal-gold/10 mt-6 flex justify-between items-center text-xs text-royal-bronze font-bold tracking-wider">
            <span>KIẾN TRÚC LÊ SƠ</span>
            <span class="group-hover:translate-x-1 transition-transform"><i class="fa-solid fa-arrow-right-long"></i></span>
          </div>
        </div>

        <!-- Card 3: Khu Khảo Cổ 18 Hoàng Diệu -->
        <div class="bg-royal-cream border border-royal-gold/30 rounded p-6 shadow-royal hover:shadow-xl hover:border-royal-gold transition-all duration-300 flex flex-col justify-between group">
          <div class="space-y-4">
            <div class="relative h-48 rounded bg-royal-parchment overflow-hidden flex items-center justify-center border border-royal-gold/15">
              <div class="absolute inset-0 bg-gradient-to-tr from-royal-parchment to-royal-cream/10"></div>
              <!-- Stratigraphy & Archeological ruins simulation -->
              <svg class="w-40 h-32 text-royal-bronze/80 z-10 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Pillars bases -->
                <rect x="15" y="55" width="16" height="8" rx="1" fill="currentColor" opacity="0.4"/>
                <rect x="42" y="55" width="16" height="8" rx="1" fill="currentColor" opacity="0.4"/>
                <rect x="69" y="55" width="16" height="8" rx="1" fill="currentColor" opacity="0.4"/>
                <line x1="15" y1="68" x2="85" y2="68" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/>
                <!-- Foundations layer -->
                <path d="M5 75 L95 75" stroke="currentColor" stroke-width="2"/>
                <circle cx="23" cy="50" r="1.5" fill="currentColor"/>
                <circle cx="50" cy="50" r="1.5" fill="currentColor"/>
                <circle cx="77" cy="50" r="1.5" fill="currentColor"/>
                <path d="M23 50 V40 M50 50 V40 M77 50 V40" stroke="currentColor" stroke-width="1"/>
              </svg>
              <div class="absolute top-3 left-3 px-2 py-0.5 bg-royal-goldDark text-royal-cream text-[10px] tracking-widest font-bold uppercase rounded-sm">KHẢO CỔ</div>
            </div>
            <h3 class="font-serif text-2xl text-royal-dark font-bold">Khu Khảo Cổ 18 Hoàng Diệu</h3>
            <p class="text-xs text-royal-dark/70 leading-relaxed font-sans">
              Nơi phát hiện vô vàn nền móng cung điện xếp chồng chồng lớp lớp qua 1300 năm, cùng với hàng triệu hiện vật gốm sứ hoàng gia cổ vô giá.
            </p>
          </div>
          <div class="pt-6 border-t border-royal-gold/10 mt-6 flex justify-between items-center text-xs text-royal-bronze font-bold tracking-wider">
            <span>DI VẬT NGHÌN NĂM</span>
            <span class="group-hover:translate-x-1 transition-transform"><i class="fa-solid fa-arrow-right-long"></i></span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ================= INTERACTIVE POWERPOINT SLIDE PRESENTATION EXPLORER ================= -->
  <section id="slideshow" class="py-24 bg-dark-texture relative">
    
    <!-- Title Area & Decorative Gold Border -->
    <div class="max-w-7xl mx-auto px-6 mb-12">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-royal-gold/20 pb-8">
        <div class="space-y-2">
          <span class="text-xs text-royal-gold tracking-[0.3em] font-semibold uppercase block">HOÀNG THÀNH THĂNG LONG SLIDE PREVIEW</span>
          <h2 class="font-serif text-4xl sm:text-5xl text-royal-goldLight font-bold uppercase tracking-wider">
            Bộ Mẫu Trình Chiếu Tuyệt Kỹ
          </h2>
          <p class="text-xs sm:text-sm text-royal-goldLight/70 max-w-xl font-sans">
            Được thiết kế tỉ mỉ tôn vinh tuyệt đối vẻ đẹp lịch sử, phối cảnh cung đình phong cách hoàng triều sang trọng. Bấm chọn từng trang slide bên dưới để tương tác trực quan.
          </p>
        </div>
        
        <div class="flex gap-4">
          <button id="prevSlide" class="w-12 h-12 rounded-full border border-royal-gold/30 flex items-center justify-center text-royal-goldLight hover:text-royal-gold hover:border-royal-gold transition-colors">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button id="nextSlide" class="w-12 h-12 rounded-full border border-royal-gold/30 flex items-center justify-center text-royal-goldLight hover:text-royal-gold hover:border-royal-gold transition-colors">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Active Presentation Stage -->
    <div class="max-w-6xl mx-auto px-6 mb-16">
      <div class="relative bg-parchment-texture aspect-video rounded-lg shadow-2xl border-4 border-royal-gold/40 overflow-hidden" id="slideStage">
        
        <!-- Royal Delicate inner border frame -->
        <div class="absolute inset-4 border border-royal-bronze/10 pointer-events-none z-10"></div>
        
        <!-- Dynamic Slide Content Inner Wrapper -->
        <div class="w-full h-full p-8 sm:p-12 md:p-16 flex flex-col justify-between relative z-0" id="slideWrapper">
          
          <!-- Top Row: Slide Header -->
          <div class="flex justify-between items-center border-b border-royal-bronze/15 pb-4">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-royal-bronze/10 flex items-center justify-center text-[10px] text-royal-bronze font-bold">🪷</span>
              <span class="text-[10px] sm:text-xs tracking-widest text-royal-bronze font-bold uppercase" id="slideCategory">DANH MỤC DI SẢN</span>
            </div>
            <span class="text-[9px] sm:text-xs text-royal-bronze/60 font-mono tracking-widest" id="slideIndex">TRANG 01 / 06</span>
          </div>

          <!-- Middle Row: Interactive Custom Visualizations -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto items-center">
            
            <!-- Left Side Title & Explanatory Text -->
            <div class="md:col-span-7 space-y-4">
              <h3 class="font-serif text-3xl sm:text-4xl md:text-5xl text-royal-dark font-bold leading-tight uppercase tracking-wide" id="slideTitle">
                Hoàng Thành Thăng Long
              </h3>
              <div class="w-16 h-[2px] bg-royal-red"></div>
              <p class="text-xs sm:text-sm text-royal-dark/80 leading-relaxed font-sans" id="slideDescription">
                Khu di tích lịch sử trung tâm của thủ đô ngàn năm văn hiến, biểu tượng cho sức mạnh hoàng quyền liên tục qua nhiều triều đại phong kiến lớn mạnh của Việt Nam.
              </p>
            </div>

            <!-- Right Side Beautiful Visual / Schematic Mockup representing slide details -->
            <div class="md:col-span-5 flex justify-center">
              <div class="w-full max-w-[280px] aspect-square rounded bg-royal-cream border border-royal-goldDark/20 p-4 shadow-lg flex flex-col justify-center items-center text-center relative overflow-hidden" id="slideVisualContainer">
                <!-- Visuals will be generated by JS dynamically -->
              </div>
            </div>

          </div>

          <!-- Bottom Row: Professional presentation footer -->
          <div class="flex justify-between items-center pt-4 border-t border-royal-bronze/15 text-[9px] sm:text-xs text-royal-dark/60">
            <span>MẪU THIẾT KẾ TRÌNH CHIẾU TUYỆT KỲ</span>
            <span class="tracking-widest">SIZE: 16:9 HD widescreen</span>
          </div>
          
        </div>

      </div>
    </div>

    <!-- Thumbnail Grid of All Slide Designs (Exactly representing the preview grid in your uploaded image) -->
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="thumbnailsGrid">
        <!-- Generates dynamically in JS to assure alignment, interactivity and correct styling -->
      </div>
    </div>

    <!-- Big Download Center CTA Box -->
    <div class="max-w-5xl mx-auto px-6 mt-16">
      <div class="relative rounded bg-gradient-to-r from-royal-dark to-royal-darker border border-royal-gold/30 p-8 sm:p-12 overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8">
        <div class="absolute -top-12 -right-12 w-48 h-48 bg-royal-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div class="space-y-3 text-center sm:text-left">
          <h3 class="font-serif text-3xl text-royal-goldLight font-bold uppercase tracking-wide">Bạn muốn sử dụng bộ Slide này?</h3>
          <p class="text-xs sm:text-sm text-royal-goldLight/70 font-sans max-w-xl">
            Tải ngay trọn bộ 16 slide mẫu độc quyền mang phong cách Hoàng Thành Thăng Long, chuẩn tỉ lệ 16:9, tích hợp sẵn font chữ cổ điển cao cấp, tối ưu hóa hiển thị.
          </p>
        </div>

        <button onclick="simulateDownload()" class="whitespace-nowrap px-8 py-4 bg-gradient-to-r from-royal-gold to-royal-goldLight hover:from-royal-goldDark hover:to-royal-gold text-royal-darker font-bold rounded-sm shadow-royal-glow tracking-widest text-xs uppercase flex items-center gap-2 transition-transform duration-300 hover:scale-[1.03]">
          TẢI MIỄN PHÍ (.PPTX) <i class="fa-solid fa-file-powerpoint text-lg"></i>
        </button>
      </div>
    </div>

  </section>

  <!-- ================= HISTORICAL DYNASTIC TIMELINE SECTION ================= -->
  <section id="timeline" class="py-24 bg-parchment-texture border-y border-royal-gold/20 relative">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span class="text-xs uppercase tracking-[0.25em] text-royal-bronze font-bold block">TIẾN TRÌNH LỊCH SỬ</span>
        <h2 class="font-serif text-4xl sm:text-5xl text-royal-dark font-bold uppercase tracking-wide">
          Các Triều Đại Gắn Liền Di Sản
        </h2>
        <div class="w-24 h-[1px] bg-royal-bronze mx-auto"></div>
        <p class="text-royal-dark/80 font-sans text-sm sm:text-base leading-relaxed">
          Sự thăng trầm của kinh đô Thăng Long qua dòng thời gian lịch sử nghìn năm hào hùng của các triều đại hưng thịnh bậc nhất Việt Nam.
        </p>
      </div>

      <!-- Timeline Nodes -->
      <div class="relative border-l-2 border-royal-bronze/20 max-w-4xl mx-auto pl-8 sm:pl-12 space-y-12">
        
        <!-- Era 1: Lý Dynasty -->
        <div class="relative group">
          <!-- Timeline point dot -->
          <div class="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full border-4 border-royal-parchment bg-royal-bronze flex items-center justify-center group-hover:bg-royal-red transition-colors duration-300 shadow-md">
            <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
          </div>
          
          <div class="bg-royal-cream border border-royal-gold/30 rounded p-6 shadow-md hover:shadow-lg hover:border-royal-gold transition-all duration-300">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <span class="font-serif text-2xl text-royal-dark font-bold">Triều Đại Nhà Lý (1010 - 1225)</span>
              <span class="px-2.5 py-1 bg-royal-bronze/10 text-royal-bronze text-xs font-bold uppercase rounded-sm tracking-wider">Khởi Lập Kinh Đô</span>
            </div>
            <p class="text-xs sm:text-sm text-royal-dark/80 leading-relaxed font-sans">
              Năm 1010, Hoàng đế Lý Thái Tổ ban bố Chiếu dời đô (Thiên đô chiếu), dời đô từ Hoa Lư về Đại La và đổi tên thành Thăng Long (Rồng Bay Lên). Cung điện triều Lý được thiết kế lộng lẫy, nguy nga bậc nhất, xây dựng nền tảng gốc cho hoàng thành ngàn năm.
            </p>
          </div>
        </div>

        <!-- Era 2: Trần Dynasty -->
        <div class="relative group">
          <div class="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full border-4 border-royal-parchment bg-royal-bronze flex items-center justify-center group-hover:bg-royal-red transition-colors duration-300 shadow-md">
            <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
          </div>
          
          <div class="bg-royal-cream border border-royal-gold/30 rounded p-6 shadow-md hover:shadow-lg hover:border-royal-gold transition-all duration-300">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <span class="font-serif text-2xl text-royal-dark font-bold">Triều Đại Nhà Trần (1225 - 1400)</span>
              <span class="px-2.5 py-1 bg-royal-bronze/10 text-royal-bronze text-xs font-bold uppercase rounded-sm tracking-wider">Hào Khí Đông A</span>
            </div>
            <p class="text-xs sm:text-sm text-royal-dark/80 leading-relaxed font-sans">
              Kế thừa và mở rộng Thăng Long. Đây là thời kỳ của hào khí Đông A oanh liệt với 3 lần đánh thắng quân Nguyên Mông xâm lược. Hoàng thành tuy có chịu thiệt hại chiến tranh nhưng liên tục được trùng tu lộng lẫy, giữ vững vị thế trung tâm chính trị đại cường.
            </p>
          </div>
        </div>

        <!-- Era 3: Lê Dynasty -->
        <div class="relative group">
          <div class="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full border-4 border-royal-parchment bg-royal-bronze flex items-center justify-center group-hover:bg-royal-red transition-colors duration-300 shadow-md">
            <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
          </div>
          
          <div class="bg-royal-cream border border-royal-gold/30 rounded p-6 shadow-md hover:shadow-lg hover:border-royal-gold transition-all duration-300">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <span class="font-serif text-2xl text-royal-dark font-bold">Triều Đại Lê Sơ & Hậu Lê (1428 - 1789)</span>
              <span class="px-2.5 py-1 bg-royal-bronze/10 text-royal-bronze text-xs font-bold uppercase rounded-sm tracking-wider">Hoàng Kim Chính Trị</span>
            </div>
            <p class="text-xs sm:text-sm text-royal-dark/80 leading-relaxed font-sans">
              Sau chiến thắng Lam Sơn lừng lẫy, triều Lê kiến thiết lại hoàng cung quy mô lớn. Điện Kính Thiên tôn nghiêm xây dựng thời kỳ này. Thăng Long (bấy giờ gọi là Đông Kinh) bùng nổ đô thị hóa phồn hoa đô hội, khẳng định dấu ấn kiến trúc đỉnh cao.
            </p>
          </div>
        </div>

        <!-- Era 4: Nguyễn Dynasty -->
        <div class="relative group">
          <div class="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full border-4 border-royal-parchment bg-royal-bronze flex items-center justify-center group-hover:bg-royal-red transition-colors duration-300 shadow-md">
            <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
          </div>
          
          <div class="bg-royal-cream border border-royal-gold/30 rounded p-6 shadow-md hover:shadow-lg hover:border-royal-gold transition-all duration-300">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <span class="font-serif text-2xl text-royal-dark font-bold">Triều Đại Nhà Nguyễn (1802 - 1945)</span>
              <span class="px-2.5 py-1 bg-royal-bronze/10 text-royal-bronze text-xs font-bold uppercase rounded-sm tracking-wider">Hạ Cấp Thành Tỉnh</span>
            </div>
            <p class="text-xs sm:text-sm text-royal-dark/80 leading-relaxed font-sans">
              Hoàng đế Gia Long chọn Phú Xuân (Huế) làm kinh đô mới, Thăng Long chuyển thành trấn thành rồi tỉnh thành Hà Nội. Cung điện cũ bị dỡ bỏ bớt, nhưng kỳ đài (Cột Cờ Hà Nội) và Bắc Môn vẫn được tôn tạo xây vững chãi, lưu giữ dấu tích triều đại cuối cùng.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- ================= IMMERSIVE COURT AUDIO GUIDE & MUSIC PLAYER ================= -->
  <section id="virtual-tour" class="py-24 bg-dark-texture relative">
    
    <!-- Ancient golden design flourish floating background -->
    <div class="absolute bottom-6 right-6 w-40 h-40 opacity-5 pointer-events-none">
      <svg class="w-full h-full text-royal-gold" fill="currentColor" viewBox="0 0 100 100">
        <path d="M50 0 C 60 25, 75 40, 100 50 C 75 60, 60 75, 50 100 C 40 75, 25 60, 0 50 C 25 40, 40 25, 50 0 Z"/>
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Interactive Player Module (Visual representation of pure premium UI design) -->
        <div class="lg:col-span-5 relative">
          <div class="absolute -inset-2 border border-royal-gold/15 rounded pointer-events-none"></div>
          
          <div class="relative bg-royal-darker border border-royal-gold/30 p-8 rounded-sm shadow-royal-glow space-y-6">
            
            <div class="flex items-center justify-between border-b border-royal-gold/10 pb-4">
              <span class="text-[10px] tracking-widest text-royal-gold font-bold uppercase">DI SẢN TRÌNH ÂM THANH VĂN HÓA</span>
              <i class="fa-solid fa-volume-high text-royal-gold"></i>
            </div>

            <!-- Vinyl representation rotating or waving -->
            <div class="flex flex-col items-center py-6">
              <div class="relative w-40 h-40 rounded-full border-2 border-royal-gold flex items-center justify-center bg-royal-darker group shadow-lg">
                <!-- Inner grooves -->
                <div class="absolute inset-2 rounded-full border border-royal-gold/20"></div>
                <div class="absolute inset-6 rounded-full border border-royal-gold/40"></div>
                <div class="absolute inset-10 rounded-full border border-royal-gold/20"></div>
                <!-- Mini Dragon emblem -->
                <svg class="w-8 h-8 text-royal-gold opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
                </svg>
                <!-- Stylized rotating arm mockup -->
                <div class="absolute top-0 right-4 w-12 h-12 border-t-2 border-r-2 border-royal-gold/40 rounded-tr-md origin-bottom-left transition-all duration-500 rotate-12" id="stylusArm"></div>
              </div>
            </div>

            <div class="text-center space-y-1">
              <h4 class="font-serif text-xl text-royal-gold font-bold uppercase" id="audioTitle">Nhã Nhạc Cung Đình Thăng Long</h4>
              <p class="text-xs text-royal-goldLight/60 font-sans" id="audioArtist">Âm vang Nhã nhạc thời Hậu Lê (Bản mô phỏng)</p>
            </div>

            <!-- Beautiful Music Progress Bar and Timer -->
            <div class="space-y-2">
              <div class="h-1 bg-royal-gold/10 rounded overflow-hidden">
                <div class="h-full bg-gradient-to-r from-royal-bronze to-royal-gold transition-all duration-300" style="width: 42%" id="audioProgress"></div>
              </div>
              <div class="flex justify-between text-[10px] text-royal-goldLight/50 font-mono">
                <span id="currentTime">01:45</span>
                <span id="totalTime">04:12</span>
              </div>
            </div>

            <!-- Custom Playback Controls -->
            <div class="flex items-center justify-center gap-6">
              <button onclick="changeTrack(-1)" class="text-royal-goldLight hover:text-royal-gold transition-colors text-lg">
                <i class="fa-solid fa-backward-step"></i>
              </button>
              
              <!-- Core Play Button with pulse effect -->
              <button onclick="toggleAudio()" id="playBtn" class="w-14 h-14 rounded-full bg-gradient-to-r from-royal-gold to-royal-goldLight text-royal-darker flex items-center justify-center text-xl hover:scale-105 transition-all duration-300 shadow-royal-glow">
                <i class="fa-solid fa-play ml-1" id="playIcon"></i>
              </button>
              
              <button onclick="changeTrack(1)" class="text-royal-goldLight hover:text-royal-gold transition-colors text-lg">
                <i class="fa-solid fa-forward-step"></i>
              </button>
            </div>

            <!-- Sound Wave Visualizer Representation in CSS -->
            <div class="flex justify-center items-end gap-1.5 h-12 pt-4">
              <div class="w-1 bg-royal-gold/40 h-3 animate-[pulse_1.2s_infinite]"></div>
              <div class="w-1 bg-royal-gold h-8 animate-[pulse_0.8s_infinite]"></div>
              <div class="w-1 bg-royal-gold/60 h-6 animate-[pulse_1.5s_infinite]"></div>
              <div class="w-1 bg-royal-goldLight h-10 animate-[pulse_0.7s_infinite]"></div>
              <div class="w-1 bg-royal-gold h-4 animate-[pulse_1s_infinite]"></div>
              <div class="w-1 bg-royal-gold/30 h-8 animate-[pulse_1.4s_infinite]"></div>
              <div class="w-1 bg-royal-gold/80 h-10 animate-[pulse_0.9s_infinite]"></div>
              <div class="w-1 bg-royal-gold/40 h-5 animate-[pulse_1.1s_infinite]"></div>
            </div>

          </div>
        </div>

        <!-- Explanatory content side with Audio Guide listings -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-royal-gold/20 bg-royal-gold/5 text-xs text-royal-gold">
            <i class="fa-solid fa-headphones-simple"></i> THUYẾT MINH DI SẢN TỰ ĐỘNG
          </div>
          
          <h2 class="font-serif text-4xl sm:text-5xl text-royal-goldLight font-bold uppercase leading-tight tracking-wider">
            Âm Vang Cung Đình <br class="hidden sm:inline">Trải Nghiệm Đa Giác Quan
          </h2>

          <p class="text-xs sm:text-sm text-royal-goldLight/70 font-sans leading-relaxed">
            Nhằm nâng cao trải nghiệm bảo tồn văn hóa di sản, chúng tôi cung cấp bộ tài liệu thuyết minh âm thanh cùng âm nhạc cổ truyền. Lắng nghe những âm vang hào hùng, thiêng liêng từ quá khứ cung đình ngay tại nhà.
          </p>

          <!-- List of Tracks -->
          <div class="space-y-4 pt-4">
            
            <button onclick="selectTrack(0)" class="w-full text-left p-4 rounded border border-royal-gold/10 hover:border-royal-gold/40 bg-royal-gold/5 flex items-center justify-between gap-4 transition-all duration-300 group">
              <div class="flex items-center gap-4">
                <span class="font-mono text-xs text-royal-gold">01</span>
                <div>
                  <span class="block font-serif text-lg text-royal-goldLight font-bold group-hover:text-royal-gold transition-colors">Nhã Nhạc Cung Đình Thăng Long</span>
                  <span class="block text-xs text-royal-goldLight/50 font-sans">Bản hòa tấu tái hiện uy linh và sự trang nghiêm của tế lễ hoàng triều.</span>
                </div>
              </div>
              <i class="fa-solid fa-circle-play text-royal-gold text-xl group-hover:scale-110 transition-transform"></i>
            </button>

            <button onclick="selectTrack(1)" class="w-full text-left p-4 rounded border border-royal-gold/10 hover:border-royal-gold/40 bg-royal-gold/5 flex items-center justify-between gap-4 transition-all duration-300 group">
              <div class="flex items-center gap-4">
                <span class="font-mono text-xs text-royal-gold">02</span>
                <div>
                  <span class="block font-serif text-lg text-royal-goldLight font-bold group-hover:text-royal-gold transition-colors">Bản Thuyết Minh Điện Kính Thiên</span>
                  <span class="block text-xs text-royal-goldLight/50 font-sans">Bài giảng âm thanh chất lượng cao giới thiệu toàn bộ kiến trúc Điện Kính Thiên cổ xưa.</span>
                </div>
              </div>
              <i class="fa-solid fa-circle-play text-royal-gold text-xl group-hover:scale-110 transition-transform"></i>
            </button>

            <button onclick="selectTrack(2)" class="w-full text-left p-4 rounded border border-royal-gold/10 hover:border-royal-gold/40 bg-royal-gold/5 flex items-center justify-between gap-4 transition-all duration-300 group">
              <div class="flex items-center gap-4">
                <span class="font-mono text-xs text-royal-gold">03</span>
                <div>
                  <span class="block font-serif text-lg text-royal-goldLight font-bold group-hover:text-royal-gold transition-colors">Sự Tích Rồng Đá Thời Lê Sơ</span>
                  <span class="block text-xs text-royal-goldLight/50 font-sans">Thuyết minh chuyên sâu về nghệ thuật tạc khắc tuyệt kỹ rồng đá ngậm ngọc.</span>
                </div>
              </div>
              <i class="fa-solid fa-circle-play text-royal-gold text-xl group-hover:scale-110 transition-transform"></i>
            </button>

          </div>

        </div>

      </div>

    </div>
  </section>

  <!-- ================= NOTIFICATIONS MODALS (VANILLA DIALOGS) ================= -->
  <div id="toast" class="fixed bottom-6 right-6 z-50 transform translate-y-24 opacity-0 transition-all duration-300 bg-royal-dark border border-royal-gold/50 p-4 rounded shadow-2xl flex items-center gap-3">
    <div class="w-8 h-8 rounded-full bg-royal-gold/10 flex items-center justify-center text-royal-gold">
      <i class="fa-solid fa-circle-check"></i>
    </div>
    <div>
      <span class="block text-xs font-bold text-royal-gold uppercase tracking-wider">THÔNG BÁO TẢI SLIDE</span>
      <span class="block text-[11px] text-royal-goldLight/70 font-sans">Mẫu PowerPoint đang được chuẩn bị tải về máy của bạn!</span>
    </div>
  </div>

  <!-- ================= FOOTER ================= -->
  <footer class="bg-royal-darker border-t border-royal-gold/20 py-16 relative overflow-hidden">
    
    <!-- Delicate design details -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(131,92,43,0.1),transparent_50%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-royal-gold/10 pb-12 mb-12">
      
      <!-- Brand & Description -->
      <div class="space-y-4">
        <a href="#" class="flex items-center gap-3">
          <div class="w-10 h-10 flex items-center justify-center rounded-full border border-royal-gold/40 bg-royal-dark">
            <svg class="w-6 h-6 text-royal-gold" viewBox="0 0 100 100" fill="none">
              <path d="M50 25 C47 40, 30 47, 25 50 C30 53, 47 60, 50 75 C53 60, 70 53, 75 50 C70 47, 53 40, 50 25 Z" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <div>
            <span class="block font-serif text-base tracking-widest text-royal-gold font-bold uppercase">Thăng Long</span>
            <span class="block text-[8px] tracking-[0.3em] text-royal-goldLight uppercase">Imperial Citadel</span>
          </div>
        </a>
        <p class="text-xs text-royal-goldLight/60 font-sans leading-relaxed">
          Tôn vinh, gìn giữ và quảng bá tuyệt kỹ nghệ thuật, văn hóa cung đình và kiến trúc di sản ngàn năm văn hiến của dân tộc Việt Nam đến toàn thế giới.
        </p>
      </div>

      <!-- Quick links -->
      <div class="space-y-4">
        <h4 class="font-serif text-lg text-royal-gold font-bold uppercase tracking-wider">ĐƯỜNG DẪN NHANH</h4>
        <ul class="space-y-2 text-xs font-sans text-royal-goldLight/70">
          <li><a href="#about" class="hover:text-royal-gold transition-colors">Về Kiến Trúc & Cảnh Quan</a></li>
          <li><a href="#slideshow" class="hover:text-royal-gold transition-colors">Bộ Slide Trình Chiếu</a></li>
          <li><a href="#timeline" class="hover:text-royal-gold transition-colors">Lịch Sử Các Triều Đại</a></li>
          <li><a href="#virtual-tour" class="hover:text-royal-gold transition-colors">Thuyết Minh Âm Thanh</a></li>
        </ul>
      </div>

      <!-- Information & Location -->
      <div class="space-y-4">
        <h4 class="font-serif text-lg text-royal-gold font-bold uppercase tracking-wider">VỊ TRÍ DI SẢN</h4>
        <p class="text-xs text-royal-goldLight/70 font-sans leading-relaxed">
          Số 19C Hoàng Diệu, Quán Thánh, Ba Đình, Hà Nội, Việt Nam.<br>
          Mở cửa tất cả các ngày trong tuần (trừ thứ Hai).
        </p>
      </div>

      <!-- Newsletter & Community -->
      <div class="space-y-4">
        <h4 class="font-serif text-lg text-royal-gold font-bold uppercase tracking-wider">ĐĂNG KÝ BẢN TIN</h4>
        <p class="text-xs text-royal-goldLight/60 font-sans leading-relaxed">
          Nhận thông tin cập nhật về các cuộc triển lãm cổ vật và phục dựng lịch sử mới nhất.
        </p>
        <div class="flex gap-2">
          <input type="email" placeholder="Địa chỉ Email..." class="w-full bg-royal-dark/80 border border-royal-gold/20 rounded px-3 py-2 text-xs text-royal-goldLight placeholder-royal-goldLight/30 focus:outline-none focus:border-royal-gold">
          <button onclick="simulateSubscribe()" class="bg-royal-gold hover:bg-royal-goldDark text-royal-darker px-4 py-2 text-xs font-bold rounded uppercase">Gửi</button>
        </div>
      </div>

    </div>

    <!-- Copyright Area -->
    <div class="max-w-7xl mx-auto px-6 relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-royal-goldLight/40 font-sans">
      <span>© 2026 Hoàng Thành Thăng Long. Thiết kế và phát triển bởi TuyetKyPowerpoint & Nhóm Bảo Tồn Di Sản.</span>
      <div class="flex gap-4">
        <a href="#" class="hover:text-royal-gold transition-colors"><i class="fa-brands fa-facebook"></i></a>
        <a href="#" class="hover:text-royal-gold transition-colors"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" class="hover:text-royal-gold transition-colors"><i class="fa-brands fa-youtube"></i></a>
      </div>
    </div>

  </footer>

  <!-- ================= CORE JAVASCRIPT ================= -->
  <script>
    // ---------------- MOBILE MENU DRAWER CONTROLS ----------------
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
    });

    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
    });

    // Automatically close drawer on menu option click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
      });
    });

    // ---------------- ACTIVE INTERACTIVE PRESENTATION DATA ----------------
    // Each element in this array directly mimics the gorgeous slide content layouts shown in your inspiration picture.
    const slidesData = [
      {
        id: 1,
        category: "TRANG CHỦ BÌA",
        title: "Hoàng Thành Thăng Long",
        description: "Bản slide hoàn thiện giới thiệu tổng quan di sản hoàng cung nghìn năm hào hùng của dân tộc Việt Nam, tôn vinh nghệ thuật và chiều sâu văn hóa triều đại.",
        visual: `
          <div class="relative w-full h-full flex flex-col justify-center items-center">
            <div class="w-1.5 h-12 bg-royal-bronze relative flex justify-end">
              <div class="absolute top-2 left-1 w-6 h-4 bg-royal-red rounded-sm shadow-sm flex items-center justify-center animate-pulse">
                <i class="fa-solid fa-star text-[5px] text-royal-gold"></i>
              </div>
            </div>
            <div class="w-6 h-8 bg-royal-dark rounded-t-sm"></div>
            <div class="w-10 h-14 bg-royal-darker rounded-t-sm"></div>
            <span class="block text-[11px] text-royal-bronze font-bold mt-2 tracking-widest uppercase">KỲ ĐÀI HÀ NỘI</span>
          </div>
        `
      },
      {
        id: 2,
        category: "DI SẢN THẾ GIỚI",
        title: "Giá Trị UNESCO Quốc Tế",
        description: "Giá trị văn hiến lâu đời của khu trung tâm di tích được công nhận nhờ ba tiêu chí nổi bật: Chiều dài lịch sử văn hóa lâu dài, tính liên tục của trung tâm quyền lực chính trị và sự đa dạng hiện vật phong phú phong kiến.",
        visual: `
          <div class="relative w-full h-full flex flex-col justify-center items-center gap-2">
            <i class="fa-solid fa-earth-asia text-royal-bronze text-4xl animate-spin-slow"></i>
            <span class="text-[10px] text-royal-bronze font-bold tracking-widest">3 TIÊU CHÍ NỔI BẬT</span>
            <div class="flex gap-1.5">
              <span class="w-2 h-2 rounded-full bg-royal-red"></span>
              <span class="w-2 h-2 rounded-full bg-royal-gold"></span>
              <span class="w-2 h-2 rounded-full bg-royal-bronze"></span>
            </div>
          </div>
        `
      },
      {
        id: 3,
        category: "KIẾN TRÚC HOÀNG CUNG",
        title: "Đoan Môn Lầu Vọng Lâu",
        description: "Thiết kế cổng chính vững chãi với lầu gác uy nghiêm được phục dựng tinh tế, là nơi hội tụ linh khí đất trời và điểm bước chân hoàng gia thiết triều tôn nghiêm.",
        visual: `
          <div class="w-full h-full flex flex-col justify-center items-center">
            <svg class="w-20 h-20 text-royal-bronze" viewBox="0 0 100 80" fill="none">
              <rect x="10" y="40" width="80" height="30" rx="2" fill="currentColor" opacity="0.3"/>
              <path d="M20 70 V55 C20 52, 25 52, 25 55 V70" stroke="currentColor" stroke-width="2"/>
              <path d="M45 70 V50 C45 45, 55 45, 55 50 V70" stroke="currentColor" stroke-width="3"/>
              <path d="M75 70 V55 C75 52, 80 52, 80 55 V70" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span class="text-[10px] text-royal-bronze font-bold mt-2">CỔNG ĐOAN MÔN</span>
          </div>
        `
      },
      {
        id: 4,
        category: "TRỌNG ĐIỂM HOÀNG THÀNH",
        title: "Kỳ Đài Cột Cờ Hà Nội",
        description: "Được xây dựng vào đầu thế kỷ XIX dưới triều Nguyễn, kỳ đài kiên cố vượt qua bao khói lửa chiến tranh, sừng sững tung bay quốc kỳ biểu trưng cho độc lập chủ quyền của đất nước.",
        visual: `
          <div class="relative w-full h-full flex flex-col justify-center items-center">
            <i class="fa-solid fa-flag text-royal-red text-4xl mb-2 animate-bounce"></i>
            <div class="w-12 h-6 bg-royal-bronze rounded-t"></div>
            <div class="w-16 h-4 bg-royal-dark rounded-t"></div>
          </div>
        `
      },
      {
        id: 5,
        category: "TRƯNG BÀY KHẢO CỔ",
        title: "Di Tích 18 Hoàng Diệu",
        description: "Địa tầng khảo cổ học phác họa rõ ràng chiều sâu lịch sử văn hiến liên tục của dân tộc Việt Nam, chứa đựng mảnh vỡ nghệ thuật gốm sứ sang trọng dùng cho nhà vua.",
        visual: `
          <div class="w-full h-full flex flex-col justify-center items-center gap-2">
            <i class="fa-solid fa-cubes text-royal-bronze text-3xl"></i>
            <div class="w-full bg-royal-bronze/10 rounded h-4 flex items-center justify-around px-2">
              <div class="w-3 h-1.5 bg-royal-red rounded-sm"></div>
              <div class="w-3 h-1.5 bg-royal-gold rounded-sm"></div>
              <div class="w-3 h-1.5 bg-royal-bronze rounded-sm"></div>
            </div>
            <span class="text-[9px] text-royal-bronze font-bold">LỚP ĐẤT DI TÍCH CHỒNG LÊN NHAU</span>
          </div>
        `
      },
      {
        id: 6,
        category: "BẢO TỒN PHÁT HUY",
        title: "Bảo Tồn & Truyền Thống",
        description: "Chương trình bảo tồn định kỳ ứng dụng công nghệ 3D, chiếu sáng phục dựng ánh hào quang xưa giúp giới trẻ tiếp cận và trân quý các di sản quốc gia trường tồn.",
        visual: `
          <div class="w-full h-full flex flex-col justify-center items-center gap-2">
            <i class="fa-solid fa-arrows-spin text-royal-red text-3xl animate-spin-slow"></i>
            <span class="text-[10px] text-royal-bronze font-bold">SỐ HÓA DI SẢN 3D</span>
          </div>
        `
      }
    ];

    let currentSlideIndex = 0;

    // Elements
    const slideCategory = document.getElementById('slideCategory');
    const slideIndex = document.getElementById('slideIndex');
    const slideTitle = document.getElementById('slideTitle');
    const slideDescription = document.getElementById('slideDescription');
    const slideVisualContainer = document.getElementById('slideVisualContainer');
    const thumbnailsGrid = document.getElementById('thumbnailsGrid');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    // Load active slide content
    function updateSlideStage(index) {
      currentSlideIndex = index;
      const data = slidesData[index];
      
      // Update text details
      slideCategory.innerText = data.category;
      slideIndex.innerText = `TRANG 0${data.id} / 0${slidesData.length}`;
      slideTitle.innerText = data.title;
      slideDescription.innerText = data.description;
      slideVisualContainer.innerHTML = data.visual;

      // Update active thumbnail borders
      const thumbnails = document.querySelectorAll('.thumbnail-card');
      thumbnails.forEach((thumb, i) => {
        if (i === index) {
          thumb.classList.add('border-royal-red', 'shadow-royal-glow');
          thumb.classList.remove('border-royal-gold/30');
        } else {
          thumb.classList.remove('border-royal-red', 'shadow-royal-glow');
          thumb.classList.add('border-royal-gold/30');
        }
      });
    }

    // Generate Thumbnails mimicking the grid in your inspiration image
    function buildThumbnails() {
      thumbnailsGrid.innerHTML = '';
      slidesData.forEach((slide, index) => {
        const thumbCard = document.createElement('button');
        thumbCard.className = `thumbnail-card text-left bg-parchment-texture border-2 border-royal-gold/30 p-3 rounded hover:border-royal-gold transition-all duration-300 relative group overflow-hidden`;
        thumbCard.onclick = () => updateSlideStage(index);

        thumbCard.innerHTML = `
          <div class="absolute inset-1 border border-royal-bronze/5 pointer-events-none"></div>
          <div class="h-16 rounded bg-royal-cream/60 flex items-center justify-center overflow-hidden mb-2 relative">
             <div class="opacity-60 scale-75">${slide.visual}</div>
             <div class="absolute top-1 left-1 bg-royal-bronze text-[#fcfaf2] text-[8px] px-1 py-0.5 rounded-sm">T.${slide.id}</div>
          </div>
          <span class="block text-[8px] tracking-wider text-royal-bronze uppercase font-bold truncate">${slide.category}</span>
          <span class="block text-[11px] font-serif font-bold text-royal-dark truncate uppercase mt-0.5">${slide.title}</span>
        `;
        thumbnailsGrid.appendChild(thumbCard);
      });
    }

    // Slide Controls
    prevBtn.addEventListener('click', () => {
      let prevIndex = currentSlideIndex - 1;
      if (prevIndex < 0) prevIndex = slidesData.length - 1;
      updateSlideStage(prevIndex);
    });

    nextBtn.addEventListener('click', () => {
      let nextIndex = currentSlideIndex + 1;
      if (nextIndex >= slidesData.length) nextIndex = 0;
      updateSlideStage(nextIndex);
    });

    // ---------------- IMMERSIVE COURT AUDIO PLAYER ENGINE ----------------
    const tracks = [
      {
        title: "Nhã Nhạc Cung Đình Thăng Long",
        artist: "Hòa tấu nghi lễ Đại triều thời Hậu Lê (Mô phỏng)",
        progress: "42%",
        currentTime: "01:45",
        totalTime: "04:12"
      },
      {
        title: "Thuyết Minh Thần Điển Kính Thiên",
        artist: "Bài giảng âm thanh du khảo lịch sử hoàng gia",
        progress: "15%",
        currentTime: "00:48",
        totalTime: "05:30"
      },
      {
        title: "Sự Tích Rồng Đá Thời Lê Sơ",
        artist: "Lịch sử điêu khắc nghệ thuật rồng ngậm ngọc bích",
        progress: "75%",
        currentTime: "02:15",
        totalTime: "03:00"
      }
    ];

    let currentTrackIndex = 0;
    let isPlaying = false;
    
    const audioTitle = document.getElementById('audioTitle');
    const audioArtist = document.getElementById('audioArtist');
    const audioProgress = document.getElementById('audioProgress');
    const currentTime = document.getElementById('currentTime');
    const totalTime = document.getElementById('totalTime');
    const playIcon = document.getElementById('playIcon');
    const stylusArm = document.getElementById('stylusArm');

    function updateTrackUI() {
      const track = tracks[currentTrackIndex];
      audioTitle.innerText = track.title;
      audioArtist.innerText = track.artist;
      audioProgress.style.width = track.progress;
      currentTime.innerText = track.currentTime;
      totalTime.innerText = track.totalTime;
    }

    function toggleAudio() {
      isPlaying = !isPlaying;
      if (isPlaying) {
        playIcon.className = "fa-solid fa-pause";
        stylusArm.style.transform = "rotate(28deg)";
        showToast("Âm thanh đang phát", "Lắng nghe giai điệu cung đình hào sảng...");
      } else {
        playIcon.className = "fa-solid fa-play ml-1";
        stylusArm.style.transform = "rotate(12deg)";
      }
    }

    function selectTrack(index) {
      currentTrackIndex = index;
      isPlaying = false;
      updateTrackUI();
      toggleAudio();
    }

    function changeTrack(direction) {
      let newIndex = currentTrackIndex + direction;
      if (newIndex < 0) newIndex = tracks.length - 1;
      if (newIndex >= tracks.length) newIndex = 0;
      selectTrack(newIndex);
    }

    // ---------------- SIMULATED USER INTERACTION ALERTS ----------------
    function showToast(title, message) {
      const toast = document.getElementById('toast');
      toast.querySelector('span:nth-child(1)').innerText = title;
      toast.querySelector('span:nth-child(2)').innerText = message;
      
      toast.classList.remove('translate-y-24', 'opacity-0');
      
      setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
      }, 4000);
    }

    function simulateDownload() {
      showToast("TẢI BỘ SLIDE THÀNH CÔNG", "Hệ thống đang chuẩn bị tệp tin PPTX Thăng Long...");
    }

    function simulateSubscribe() {
      showToast("ĐĂNG KÝ THÀNH CÔNG", "Cảm ơn bạn đã tham gia cộng đồng di sản!");
    }

    // Header transparency changes on scroll
    window.addEventListener('scroll', () => {
      const header = document.getElementById('mainHeader');
      if (window.scrollY > 50) {
        header.classList.add('py-3', 'bg-royal-darker/95');
        header.classList.remove('py-5');
      } else {
        header.classList.remove('py-3', 'bg-royal-darker/95');
        header.classList.add('py-5');
      }
    });

    // Initialize On Load
    window.onload = function() {
      buildThumbnails();
      updateSlideStage(0);
      updateTrackUI();
    };
  </script>
</body>
</html>
4
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THE ARCHIVAL PORTFOLIO — Master Etchings & Ink Lithography</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts for Editorial Sophistication -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Courier+Prime&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        serif: ['"Cormorant Garamond"', 'serif'],
                        display: ['"Cinzel"', 'serif'],
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        mono: ['"Courier Prime"', 'monospace'],
                    },
                    colors: {
                        parchment: {
                            50: '#FAF9F5',
                            100: '#F5F2EA',
                            200: '#EDE9DC',
                            300: '#E2DBC9',
                            DEFAULT: '#F8F6F0',
                        },
                        charcoal: {
                            50: '#2A2A2A',
                            100: '#202020',
                            200: '#171717',
                            DEFAULT: '#0D0D0D',
                        },
                        sepia: '#5C5446',
                    },
                    backgroundImage: {
                        'paper-texture': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.04\"/%3E%3C/svg%3E')",
                    }
                }
            }
        }
    </script>

    <style>
        /* Smooth Custom Transitions */
        .fade-in-slide {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-in-slide.active {
            opacity: 1;
            transform: translateY(0);
        }
        /* Custom Fine Art Framing Mockup shadows */
        .framed-shadow {
            box-shadow: 0 30px 60px -15px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.05);
        }
        /* High-fidelity print hatch pattern style overrides */
        .hatch-bg {
            background-image: repeating-linear-gradient(45deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 8px);
        }
        .hatch-bg-dark {
            background-image: repeating-linear-gradient(-45deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 6px);
        }
    </style>
</head>
<body class="bg-parchment text-charcoal font-sans selection:bg-charcoal selection:text-parchment relative min-h-screen overflow-x-hidden bg-paper-texture">

    <!-- Global SVG Definitions for Advanced Etching & Cross-Hatching Styles -->
    <svg xmlns="http://www.w3.org/2000/svg" class="hidden">
        <defs>
            <!-- Fine Diagonal Cross Hatch Pattern -->
            <pattern id="etchHatch1" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="10" stroke="#0d0d0d" stroke-width="1.2" />
            </pattern>
            <pattern id="etchHatch2" width="6" height="6" patternTransform="rotate(-45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="6" stroke="#222222" stroke-width="0.8" />
            </pattern>
            <pattern id="etchCrossHatch" width="8" height="8" patternTransform="rotate(30 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#111111" stroke-width="0.9" />
                <line x1="0" y1="0" x2="8" y2="0" stroke="#111111" stroke-width="0.9" />
            </pattern>
            <pattern id="stipplePattern" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="0.6" fill="#1a1a1a" />
            </pattern>
        </defs>
    </svg>

    <!-- Elegant Floating Navigation Bar -->
    <nav class="fixed top-0 left-0 w-full z-50 border-b border-charcoal/10 bg-parchment/95 backdrop-blur-sm transition-all duration-300 py-4 px-6 md:px-12 flex justify-between items-center bg-paper-texture">
        <div class="flex items-center space-x-3">
            <span class="font-display text-lg tracking-[0.3em] font-semibold text-charcoal">MONO·GRAFT</span>
            <span class="h-1.5 w-1.5 bg-charcoal rounded-full"></span>
            <span class="font-mono text-[9px] tracking-widest text-charcoal/50 uppercase hidden sm:inline">Folio Edition 01</span>
        </div>
        
        <div class="hidden md:flex space-x-12 items-center">
            <a href="#plates" class="font-sans text-xs tracking-[0.2em] uppercase font-medium hover:text-charcoal/60 transition-colors">The Plates</a>
            <a href="#atelier" class="font-sans text-xs tracking-[0.2em] uppercase font-medium hover:text-charcoal/60 transition-colors">The Atelier</a>
            <a href="#configurator" class="font-sans text-xs tracking-[0.2em] uppercase font-medium hover:text-charcoal/60 transition-colors">Framing Studio</a>
            <a href="#process" class="font-sans text-xs tracking-[0.2em] uppercase font-medium hover:text-charcoal/60 transition-colors">Craftsmanship</a>
        </div>

        <div class="flex items-center space-x-6">
            <!-- Audio Ambience Controller Toggle -->
            <button id="soundscapeToggle" class="group flex items-center space-x-2 text-charcoal/70 hover:text-charcoal transition-all text-left" title="Toggle Archival Ambient Audio">
                <div class="relative w-5 h-5 flex items-center justify-center">
                    <span id="soundOnIcon" class="hidden">
                        <svg class="w-4 h-4 text-charcoal animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                    </span>
                    <span id="soundOffIcon">
                        <svg class="w-4 h-4 text-charcoal/40 group-hover:text-charcoal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
                    </span>
                </div>
                <span class="font-mono text-[9px] tracking-widest uppercase hidden lg:inline text-charcoal/50 group-hover:text-charcoal transition-colors">Atelier Soundscape</span>
            </button>
            
            <a href="#configurator" class="px-5 py-2.5 bg-charcoal text-parchment font-mono text-[10px] tracking-widest uppercase hover:bg-charcoal/90 transition-all rounded-sm flex items-center space-x-2">
                <span>Acquire Plate</span>
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
        </div>
    </nav>

    <!-- Hero / Masterpiece Introduction Section -->
    <header class="relative pt-32 pb-24 md:py-40 px-6 md:px-12 flex flex-col items-center justify-center min-h-[95vh] border-b border-charcoal/10 overflow-hidden">
        <!-- Floating Design Grids resembling architectural layouts -->
        <div class="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20">
            <div class="border-r border-charcoal/10 h-full"></div>
            <div class="border-r border-charcoal/10 h-full"></div>
            <div class="border-r border-charcoal/10 h-full"></div>
            <div class="h-full"></div>
        </div>
        
        <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            <!-- Left: Poetic Manifest / Typographic Intro -->
            <div class="lg:col-span-5 flex flex-col justify-center text-left space-y-8 order-2 lg:order-1">
                <div class="space-y-4">
                    <span class="font-mono text-[11px] tracking-[0.3em] text-charcoal/60 uppercase block">Monochrome Hand-Etched Archival Prints</span>
                    
                    <!-- Title with custom Ink Brushstroke Label -->
                    <div class="relative inline-block py-2 select-none pr-4">
                        <svg class="absolute -inset-x-6 inset-y-0 w-full h-full text-charcoal opacity-95 pointer-events-none" viewBox="0 0 350 70" fill="currentColor" preserveAspectRatio="none">
                            <path d="M 5,35 C 45,15 155,10 335,22 C 315,48 195,65 105,58 C 55,54 15,46 5,35 Z M 20,38 C 65,18 165,13 325,25 C 305,51 185,62 100,56 C 50,52 25,47 20,38 Z" />
                        </svg>
                        <h2 class="relative font-display text-white text-base md:text-lg tracking-[0.4em] uppercase z-10 px-4">
                            The Ink Chronicles
                        </h2>
                    </div>

                    <h1 class="font-serif text-5xl md:text-6xl xl:text-7xl font-extralight tracking-tight leading-none text-charcoal pt-4">
                        Etched in <span class="italic font-normal">Silence.</span><br>Preserved in Paper.
                    </h1>
                </div>
                
                <p class="font-serif text-lg text-charcoal/80 leading-relaxed max-w-lg">
                    A limited-edition collection of handcrafted physical lithographs and fine-art plates. Each design is meticulously carved, hatched, and pressed onto 310gsm textured mulberry cotton paper to preserve humanity's grandest monument architectural silhouettes.
                </p>

                <!-- Editorial Meta Grid -->
                <div class="grid grid-cols-2 gap-6 border-t border-b border-charcoal/15 py-6">
                    <div>
                        <span class="font-mono text-[9px] tracking-[0.2em] text-charcoal/50 uppercase block">Atelier Run</span>
                        <span class="font-serif text-lg font-medium text-charcoal">99 Signature Folios</span>
                    </div>
                    <div>
                        <span class="font-mono text-[9px] tracking-[0.2em] text-charcoal/50 uppercase block">Material Baseline</span>
                        <span class="font-serif text-lg font-medium text-charcoal">Hahnemühle 310gsm</span>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="#plates" class="px-8 py-4 bg-charcoal text-parchment font-mono text-xs tracking-widest uppercase hover:bg-charcoal/80 transition-all text-center rounded-sm">
                        Explore Plates
                    </a>
                    <a href="#atelier" class="px-8 py-4 border border-charcoal/20 text-charcoal font-mono text-xs tracking-widest uppercase hover:bg-charcoal hover:text-parchment transition-all text-center rounded-sm">
                        Atelier Interactive Canvas
                    </a>
                </div>
            </div>

            <!-- Right: Captivating SVG Engraving Hero Element representing an iconic Pagoda Sketch -->
            <div class="lg:col-span-7 flex justify-center order-1 lg:order-2">
                <div class="relative w-full max-w-md lg:max-w-xl aspect-[3/4] bg-[#F4EFEB] p-6 border border-charcoal/10 rounded-sm framed-shadow flex flex-col justify-between overflow-hidden bg-paper-texture">
                    <!-- Subtle paper fold line in center to simulate beautiful physical book spine -->
                    <div class="absolute inset-y-0 left-0 w-[1px] bg-charcoal/5 shadow-2xl"></div>
                    
                    <!-- Decorative corner layout markings -->
                    <div class="absolute top-4 left-4 font-mono text-[9px] text-charcoal/30">FOLIO 01 / PLATE I</div>
                    <div class="absolute top-4 right-4 font-mono text-[9px] text-charcoal/30">50.23° N, 12.01° E</div>

                    <!-- Master SVG Archival Engraving -->
                    <div class="w-full h-full flex items-center justify-center py-6">
                        <svg class="w-4/5 h-4/5 text-charcoal" viewBox="0 0 200 240" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <!-- Background sketch guidelines (light construction grid) -->
                            <g stroke-width="0.3" stroke="rgba(13,13,13,0.15)">
                                <line x1="100" y1="10" x2="100" y2="230" stroke-dasharray="2,2"/>
                                <line x1="20" y1="210" x2="180" y2="210" />
                                <line x1="20" y1="170" x2="180" y2="170" stroke-dasharray="1,2"/>
                                <line x1="20" y1="130" x2="180" y2="130" stroke-dasharray="1,2"/>
                                <line x1="20" y1="90" x2="180" y2="90" stroke-dasharray="1,2"/>
                                <circle cx="100" cy="110" r="80" stroke-dasharray="4,4" />
                            </g>

                            <!-- The Base / Pagoda Stone Platform with Etch patterns -->
                            <path d="M 40,210 L 160,210 L 150,195 L 50,195 Z" fill="url(#etchHatch1)" stroke="currentColor" stroke-width="1.2"/>
                            <rect x="60" y="180" width="80" height="15" fill="url(#etchCrossHatch)" stroke="currentColor" stroke-width="1.2"/>
                            
                            <!-- Middle Columns & Roof Section -->
                            <path d="M 45,180 L 155,180 L 165,160 L 35,160 Z" fill="url(#etchHatch2)" stroke="currentColor" stroke-width="1.2" />
                            <rect x="70" y="145" width="60" height="15" fill="none" stroke="currentColor" stroke-width="1"/>
                            <!-- Hatch overlay for shade -->
                            <rect x="100" y="145" width="30" height="15" fill="url(#etchHatch1)"/>

                            <!-- Top Tier roof & finial -->
                            <path d="M 55,145 L 145,145 L 150,125 L 50,125 Z" fill="url(#etchHatch1)" stroke="currentColor" stroke-width="1"/>
                            <path d="M 80,125 L 120,125 L 125,95 L 75,95 Z" fill="url(#etchCrossHatch)" stroke="currentColor" stroke-width="1"/>
                            
                            <line x1="100" y1="95" x2="100" y2="55" stroke="currentColor" stroke-width="1.5" />
                            <circle cx="100" cy="75" r="5" fill="currentColor" />
                            <circle cx="100" cy="65" r="3" fill="currentColor" />

                            <!-- Artistic "Hand Sketch" Overflow / Scratchy Lines -->
                            <path d="M 30,212 C 40,218 80,215 100,216 C 130,217 165,213 170,214" stroke="rgba(13,13,13,0.4)" stroke-width="0.8"/>
                            <path d="M 38,209 C 50,211 120,208 162,210" stroke="rgba(13,13,13,0.3)" stroke-width="0.6"/>
                            <!-- Sun outline with cross-hatching detail -->
                            <path d="M 130,50 A 20,20 0 1,1 170,50" stroke="rgba(13,13,13,0.25)" stroke-width="0.8" stroke-dasharray="2,2"/>
                        </svg>
                    </div>

                    <!-- Bottom Plate Meta Text to emulate layout of physical art pages -->
                    <div class="flex justify-between items-end">
                        <div class="space-y-1">
                            <h4 class="font-serif text-sm font-semibold tracking-wider text-charcoal">THE BULGUKSA PAGODA</h4>
                            <p class="font-mono text-[9px] text-charcoal/50">Gyeongju, South Korea • Plate No. 1</p>
                        </div>
                        <div class="text-right">
                            <span class="font-mono text-[10px] text-charcoal border-t border-charcoal/30 pt-1 px-1">PLATE I/IX</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </header>

    <!-- Interactive Portfolio Section (The Core Plates) -->
    <section id="plates" class="py-24 md:py-32 border-b border-charcoal/10 relative">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            
            <!-- Section Title & Narrative -->
            <div class="max-w-3xl mb-16 md:mb-24 space-y-6">
                <span class="font-mono text-xs tracking-[0.3em] text-charcoal/60 uppercase block">Curated Catalogue</span>
                
                <div class="relative inline-block py-2 pr-6">
                    <svg class="absolute -inset-x-4 inset-y-0 w-full h-full text-charcoal opacity-95 pointer-events-none" viewBox="0 0 350 70" fill="currentColor" preserveAspectRatio="none">
                        <path d="M 8,32 C 48,12 158,8 338,20 C 318,46 198,63 108,56 C 58,52 18,44 8,32 Z" />
                    </svg>
                    <h2 class="relative font-display text-white text-base tracking-[0.4em] uppercase z-10 px-4">
                        The Master Archival Plates
                    </h2>
                </div>

                <p class="font-serif text-2xl font-light text-charcoal/90 leading-relaxed">
                    Scroll through our collection of premium, hand-carved lithographs. Select any plate to toggle between the intricate <strong class="font-semibold">final black ink layer</strong> or the artist's structural <strong class="italic">pencil architecture guidelines</strong>.
                </p>
            </div>

            <!-- Asymmetric Grid of Archival Plates to perfectly mirror the custom layout in the image -->
            <div class="space-y-32">
                
                <!-- PLATE 1: Gyeongbokgung Main Gate (Layout A: Left Sketch, Right Details) -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center fade-in-slide">
                    <!-- Left Side: Interactive Print Frame View -->
                    <div class="lg:col-span-7">
                        <div class="relative bg-[#FAF8F5] p-8 md:p-12 border border-charcoal/10 rounded-sm framed-shadow flex flex-col justify-between overflow-hidden bg-paper-texture">
                            <div class="absolute inset-y-0 left-0 w-[1px] bg-charcoal/5"></div>
                            
                            <!-- Plate Selector Controls -->
                            <div class="flex justify-between items-center mb-6 z-10">
                                <span class="font-mono text-[9px] text-charcoal/40">ARCHIVAL PLATE II</span>
                                <div class="flex bg-charcoal/5 p-0.5 rounded-sm">
                                    <button onclick="togglePlateLayer('plate1', 'ink')" id="btn-plate1-ink" class="px-3 py-1 bg-charcoal text-parchment font-mono text-[8px] tracking-widest uppercase rounded-sm transition-all">Ink Press</button>
                                    <button onclick="togglePlateLayer('plate1', 'pencil')" id="btn-plate1-pencil" class="px-3 py-1 text-charcoal/70 font-mono text-[8px] tracking-widest uppercase rounded-sm transition-all hover:text-charcoal">Draft Grid</button>
                                </div>
                            </div>

                            <!-- Interactive SVG Sketch Render Frame -->
                            <div class="w-full aspect-[4/3] flex items-center justify-center my-4 relative">
                                <!-- Ink Press Layer -->
                                <svg id="plate1-ink-svg" class="w-5/6 h-5/6 text-charcoal transition-all duration-700" viewBox="0 0 300 200" fill="none" stroke="currentColor">
                                    <!-- Heavily detailed fortress gate simulation -->
                                    <path d="M 20,180 L 280,180 L 270,140 L 30,140 Z" fill="url(#etchCrossHatch)" stroke="currentColor" stroke-width="1.2"/>
                                    <!-- Gate Archway -->
                                    <path d="M 115,180 C 115,150 185,150 185,180 Z" fill="#F8F6F0" stroke="currentColor" stroke-width="1.5"/>
                                    <!-- Archway Cross Hatching -->
                                    <path d="M 115,180 C 115,150 185,150 185,180 Z" fill="url(#etchHatch2)" opacity="0.3"/>
                                    
                                    <!-- Upper wooden pavilion structure -->
                                    <rect x="50" y="110" width="200" height="30" fill="url(#etchHatch1)" stroke="currentColor" stroke-width="1.2" />
                                    <!-- Columns -->
                                    <g stroke="currentColor" stroke-width="1.5">
                                        <line x1="65" y1="110" x2="65" y2="140" />
                                        <line x1="100" y1="110" x2="100" y2="140" />
                                        <line x1="150" y1="110" x2="150" y2="140" />
                                        <line x1="200" y1="110" x2="200" y2="140" />
                                        <line x1="235" y1="110" x2="235" y2="140" />
                                    </g>
                                    
                                    <!-- Traditional Sweeping Roof -->
                                    <path d="M 30,110 C 100,105 200,105 270,110 L 250,90 L 50,90 Z" fill="url(#etchCrossHatch)" stroke="currentColor" stroke-width="1.2"/>
                                    <path d="M 100,90 C 120,80 180,80 200,90 L 190,75 L 110,75 Z" fill="currentColor" />
                                    
                                    <!-- Sky cross hatch clouds -->
                                    <path d="M 200,40 Q 230,20 260,35" stroke="rgba(13,13,13,0.2)" stroke-width="0.8" stroke-dasharray="4,4" />
                                </svg>

                                <!-- Draft Pencil Layer (Hidden by default, styled like drafting lines) -->
                                <svg id="plate1-pencil-svg" class="w-5/6 h-5/6 text-[#2B4C7E] opacity-0 absolute transition-all duration-700 pointer-events-none" viewBox="0 0 300 200" fill="none" stroke="currentColor">
                                    <!-- Blueprint layout, circles, measurements and horizon line -->
                                    <line x1="10" y1="180" x2="290" y2="180" stroke-width="0.5" />
                                    <line x1="150" y1="10" x2="150" y2="190" stroke-width="0.5" stroke-dasharray="4,4" />
                                    <!-- Perspective lines -->
                                    <line x1="10" y1="40" x2="290" y2="180" stroke-width="0.3" />
                                    <line x1="290" y1="40" x2="10" y2="180" stroke-width="0.3" />
                                    <circle cx="150" cy="115" r="75" stroke-width="0.5" stroke-dasharray="1,2" />
                                    <!-- Geometric blueprint boxes of the gate -->
                                    <rect x="20" y="140" width="260" height="40" stroke-width="0.5" stroke-dasharray="2,2"/>
                                    <rect x="50" y="110" width="200" height="30" stroke-width="0.5" stroke-dasharray="2,2"/>
                                    <path d="M 30,110 Q 150,95 270,110" stroke-width="0.5"/>
                                </svg>
                            </div>

                            <!-- Page identifier details -->
                            <div class="flex justify-between items-end border-t border-charcoal/5 pt-4">
                                <span class="font-mono text-[9px] text-charcoal/50">PLATENUMBER: 02</span>
                                <span class="font-mono text-[9px] text-charcoal/50">COORDS: 37.57° N, 126.97° E</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right Side: Beautiful Editorial Copy -->
                    <div class="lg:col-span-5 space-y-6 pl-0 lg:pl-10">
                        <div class="inline-block bg-charcoal text-white font-mono text-[9px] tracking-widest uppercase px-4 py-1.5 rounded-sm">
                            SEOUL ARCHIVE
                        </div>
                        <h3 class="font-serif text-3xl md:text-4xl font-light text-charcoal tracking-tight">
                            The Gwanghwamun Citadel Gate
                        </h3>
                        <p class="font-serif text-base text-charcoal/80 leading-relaxed">
                            A historical study capturing the sweeping grandeur of Joseon dynasty roof architectures. Hand-etched over 120 block-carving hours, translating heavy, massive stone fortifications and sweeping pine wood framing into incredibly dense cross-hatch strokes.
                        </p>
                        
                        <!-- Archival Specs List -->
                        <ul class="space-y-3 font-mono text-[11px] text-charcoal/70 border-t border-charcoal/10 pt-6">
                            <li class="flex justify-between"><span class="text-charcoal/40">YEAR OF ORIGINAL CARVING</span><span>2024</span></li>
                            <li class="flex justify-between"><span class="text-charcoal/40">ENGRAVING MEDIUM</span><span>Copperplate Lithography</span></li>
                            <li class="flex justify-between"><span class="text-charcoal/40">AVAILABLE PRINTS</span><span>12 / 99 Remaining</span></li>
                        </ul>

                        <div class="pt-4">
                            <button onclick="selectConfigPlate('Gwanghwamun Citadel Gate', 220)" class="group flex items-center space-x-3 font-mono text-xs tracking-widest text-charcoal uppercase hover:text-charcoal/60 transition-colors">
                                <span>Preview Frame Customization</span>
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- PLATE 2: Mont Saint-Michel (Layout B: Right Sketch, Left Details) -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center fade-in-slide">
                    <!-- Left Side: Editorial Details -->
                    <div class="lg:col-span-5 order-2 lg:order-1 space-y-6 pr-0 lg:pr-10">
                        <div class="inline-block bg-charcoal text-white font-mono text-[9px] tracking-widest uppercase px-4 py-1.5 rounded-sm">
                            EUROPEAN HERITAGE
                        </div>
                        <h3 class="font-serif text-3xl md:text-4xl font-light text-charcoal tracking-tight">
                            Mont Saint-Michel Abbey
                        </h3>
                        <p class="font-serif text-base text-charcoal/80 leading-relaxed">
                            Rising dramatically from sea mists, this master engraving explores the extreme density of gothic spires colliding with ancient coastal rock structures. Notice the shifting water textures, built using extremely fine parallel horizontal score-lines.
                        </p>
                        
                        <!-- Archival Specs List -->
                        <ul class="space-y-3 font-mono text-[11px] text-charcoal/70 border-t border-charcoal/10 pt-6">
                            <li class="flex justify-between"><span class="text-charcoal/40">YEAR OF ORIGINAL CARVING</span><span>2023</span></li>
                            <li class="flex justify-between"><span class="text-charcoal/40">ENGRAVING MEDIUM</span><span>Zinc Plate Etching</span></li>
                            <li class="flex justify-between"><span class="text-charcoal/40">AVAILABLE PRINTS</span><span>8 / 99 Remaining</span></li>
                        </ul>

                        <div class="pt-4">
                            <button onclick="selectConfigPlate('Mont Saint-Michel Abbey', 245)" class="group flex items-center space-x-3 font-mono text-xs tracking-widest text-charcoal uppercase hover:text-charcoal/60 transition-colors">
                                <span>Preview Frame Customization</span>
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </div>
                    </div>

                    <!-- Right Side: Interactive Print Frame View -->
                    <div class="lg:col-span-7 order-1 lg:order-2">
                        <div class="relative bg-[#FAF8F5] p-8 md:p-12 border border-charcoal/10 rounded-sm framed-shadow flex flex-col justify-between overflow-hidden bg-paper-texture">
                            <div class="absolute inset-y-0 left-0 w-[1px] bg-charcoal/5"></div>
                            
                            <!-- Plate Selector Controls -->
                            <div class="flex justify-between items-center mb-6 z-10">
                                <span class="font-mono text-[9px] text-charcoal/40">ARCHIVAL PLATE IV</span>
                                <div class="flex bg-charcoal/5 p-0.5 rounded-sm">
                                    <button onclick="togglePlateLayer('plate2', 'ink')" id="btn-plate2-ink" class="px-3 py-1 bg-charcoal text-parchment font-mono text-[8px] tracking-widest uppercase rounded-sm transition-all">Ink Press</button>
                                    <button onclick="togglePlateLayer('plate2', 'pencil')" id="btn-plate2-pencil" class="px-3 py-1 text-charcoal/70 font-mono text-[8px] tracking-widest uppercase rounded-sm transition-all hover:text-charcoal">Draft Grid</button>
                                </div>
                            </div>

                            <!-- Interactive SVG Sketch Render Frame -->
                            <div class="w-full aspect-[4/3] flex items-center justify-center my-4 relative">
                                <!-- Ink Press Layer -->
                                <svg id="plate2-ink-svg" class="w-5/6 h-5/6 text-charcoal transition-all duration-700" viewBox="0 0 300 200" fill="none" stroke="currentColor">
                                    <!-- Island Profile -->
                                    <path d="M 40,165 C 100,160 200,160 260,165 L 240,180 L 60,180 Z" fill="url(#etchCrossHatch)" stroke="currentColor" stroke-width="1.2"/>
                                    <!-- Abbey Spires Climbing -->
                                    <path d="M 120,165 L 125,120 L 140,70 L 150,30 L 160,70 L 175,120 L 180,165 Z" fill="url(#etchHatch1)" stroke="currentColor" stroke-width="1.2"/>
                                    <!-- St. Michel Statue top -->
                                    <line x1="150" y1="30" x2="150" y2="15" stroke="currentColor" stroke-width="1.5" />
                                    <!-- Surrounding buildings & ramparts -->
                                    <rect x="100" y="145" width="40" height="20" fill="url(#stipplePattern)" stroke="currentColor" stroke-width="1"/>
                                    <rect x="160" y="140" width="45" height="25" fill="url(#stipplePattern)" stroke="currentColor" stroke-width="1"/>
                                    <path d="M 80,165 L 220,165 L 210,150 L 90,150 Z" fill="url(#etchHatch2)" stroke="currentColor" stroke-width="1"/>
                                    
                                    <!-- Ocean waves texture lines -->
                                    <g stroke="rgba(13,13,13,0.3)" stroke-width="0.7">
                                        <line x1="20" y1="185" x2="280" y2="185" />
                                        <line x1="40" y1="190" x2="260" y2="190" stroke-dasharray="20,10,30,5" />
                                        <line x1="10" y1="178" x2="290" y2="178" stroke-dasharray="5,15,5,5" />
                                    </g>
                                </svg>

                                <!-- Draft Pencil Layer -->
                                <svg id="plate2-pencil-svg" class="w-5/6 h-5/6 text-[#2B4C7E] opacity-0 absolute transition-all duration-700 pointer-events-none" viewBox="0 0 300 200" fill="none" stroke="currentColor">
                                    <line x1="10" y1="165" x2="290" y2="165" stroke-width="0.5" stroke-dasharray="8,2" />
                                    <line x1="150" y1="10" x2="150" y2="190" stroke-width="0.5"/>
                                    <!-- Golden ratio spirals/triangles indicating design layout symmetry -->
                                    <path d="M 40,165 L 150,30 L 260,165" stroke-width="0.4" stroke-dasharray="2,2"/>
                                    <circle cx="150" cy="110" r="55" stroke-width="0.4" stroke-dasharray="1,5" />
                                </svg>
                            </div>

                            <!-- Page identifier details -->
                            <div class="flex justify-between items-end border-t border-charcoal/5 pt-4">
                                <span class="font-mono text-[9px] text-charcoal/50">PLATENUMBER: 04</span>
                                <span class="font-mono text-[9px] text-charcoal/50">COORDS: 48.636° N, 1.511° W</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Interactive Atelier Sketchpad Section (The "Value-Add" drawing sensory simulation) -->
    <section id="atelier" class="py-24 md:py-32 bg-charcoal text-parchment relative overflow-hidden border-b border-charcoal/10 bg-paper-texture">
        <!-- Slightly inverse styling: Dark paper theme -->
        <div class="absolute inset-0 bg-charcoal/95 pointer-events-none"></div>
        
        <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Left: Artistic control deck -->
                <div class="lg:col-span-5 space-y-8">
                    <span class="font-mono text-xs tracking-[0.3em] text-parchment/60 uppercase block">Atelier Lab</span>
                    
                    <div class="relative inline-block py-2 pr-4">
                        <svg class="absolute -inset-x-4 inset-y-0 w-full h-full text-parchment opacity-95 pointer-events-none" viewBox="0 0 350 70" fill="currentColor" preserveAspectRatio="none">
                            <path d="M 8,32 C 48,12 158,8 338,20 C 318,46 198,63 108,56 C 58,52 18,44 8,32 Z" />
                        </svg>
                        <h2 class="relative font-display text-charcoal text-base tracking-[0.4em] uppercase z-10 px-4">
                            Interactive Atelier Canvas
                        </h2>
                    </div>

                    <p class="font-serif text-lg text-parchment/80 leading-relaxed">
                        Experience the direct sensory feedback of traditional ink rendering on rough mulberry pulp. Drag your cursor or finger over the canvas on the right to manually "press" a beautiful monument draft out of raw paper, complete with authentic calligraphic ink dispersion.
                    </p>

                    <!-- Brush physics customization settings -->
                    <div class="space-y-6 border-t border-parchment/10 pt-6">
                        <div>
                            <div class="flex justify-between font-mono text-[10px] tracking-wider uppercase mb-2 text-parchment/60">
                                <span>Ink Feed Pressure (Opacity)</span>
                                <span id="pressureVal">75%</span>
                            </div>
                            <input type="range" id="inkPressure" min="20" max="100" value="75" class="w-full accent-parchment bg-parchment/20 h-1 rounded-lg appearance-none cursor-pointer">
                        </div>

                        <div>
                            <div class="flex justify-between font-mono text-[10px] tracking-wider uppercase mb-2 text-parchment/60">
                                <span>Brush Nib Profile</span>
                                <span id="nibVal">Medium Etcher</span>
                            </div>
                            <div class="grid grid-cols-3 gap-2">
                                <button onclick="selectNib(2, 'Fine Needle')" class="px-3 py-2 border border-parchment/20 font-mono text-[8px] uppercase tracking-widest hover:bg-parchment hover:text-charcoal transition-all">Fine</button>
                                <button onclick="selectNib(5, 'Medium Etcher')" class="px-3 py-2 border border-parchment bg-parchment text-charcoal font-mono text-[8px] uppercase tracking-widest transition-all">Medium</button>
                                <button onclick="selectNib(12, 'Calligraphy Wedge')" class="px-3 py-2 border border-parchment/20 font-mono text-[8px] uppercase tracking-widest hover:bg-parchment hover:text-charcoal transition-all">Wedge</button>
                            </div>
                        </div>
                    </div>

                    <div class="flex space-x-4">
                        <button onclick="clearAtelierCanvas()" class="px-6 py-3 border border-parchment/20 font-mono text-xs tracking-widest uppercase hover:bg-parchment hover:text-charcoal transition-all rounded-sm">
                            Reset Paper Sheet
                        </button>
                        <button onclick="triggerAutoDraft()" class="px-6 py-3 bg-parchment text-charcoal font-mono text-xs tracking-widest uppercase hover:bg-parchment/80 transition-all rounded-sm flex items-center space-x-2">
                            <span>Auto-Draft Pagoda</span>
                        </button>
                    </div>
                </div>

                <!-- Right: The HTML5 Interactive Canvas Container -->
                <div class="lg:col-span-7 flex flex-col items-center">
                    <div class="relative w-full aspect-[4/3] bg-[#EAE4DC] border border-parchment/10 rounded-sm overflow-hidden flex flex-col justify-between p-4 cursor-crosshair shadow-2xl transition-all duration-300 bg-paper-texture" id="canvasFrame">
                        
                        <!-- Archival layout borders inside the canvas viewport -->
                        <div class="absolute inset-4 border border-charcoal/5 pointer-events-none z-10"></div>
                        <div class="absolute top-6 left-6 font-mono text-[8px] text-charcoal/40 pointer-events-none z-10">SHEET 09 / CUSTOM ETCH ENGINE</div>
                        <div class="absolute top-6 right-6 font-mono text-[8px] text-charcoal/40 pointer-events-none z-10" id="drawStatus">STATUS: BLANK PRESS</div>

                        <!-- Active Canvas -->
                        <canvas id="etchCanvas" class="w-full h-full object-cover relative z-0"></canvas>

                        <!-- Invisible Audio Source for Sketching FX -->
                        <audio id="etchAudio" loop src="https://assets.mixkit.co/active_storage/sfx/2568/2568-84.wav" class="hidden"></audio>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Custom Framing Studio & Configurator (Interactive Store/Product Visualizer) -->
    <section id="configurator" class="py-24 md:py-32 border-b border-charcoal/10 relative">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Left: Interactive Framed Render Mockup inside Custom Art Room Environment -->
                <div class="lg:col-span-7 flex flex-col justify-center items-center">
                    <span class="font-mono text-[10px] tracking-[0.2em] text-charcoal/40 uppercase mb-4">ARCHIVAL GALLERY PRESENTATION</span>
                    
                    <!-- Interactive Art Room Mockup Backdrop -->
                    <div class="w-full aspect-[4/3] bg-[#E2DBC9] rounded-sm relative flex items-center justify-center overflow-hidden p-8 border border-charcoal/10 bg-paper-texture">
                        <!-- Simulated Elegant Studio Wall Lighting Gradient -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 pointer-events-none"></div>
                        
                        <!-- Dynamic Framed Masterpiece -->
                        <div id="mockupFrame" class="w-2/3 aspect-[3/4] bg-[#FAF8F5] p-6 transition-all duration-500 flex flex-col justify-between relative bg-paper-texture" style="box-shadow: 0 40px 80px -20px rgba(13,13,13,0.4);">
                            <!-- Outer Frame Border (Custom materials mapped in JS) -->
                            <div id="frameBorder" class="absolute -inset-4 border-[16px] border-[#1c1c1c] shadow-inner transition-all duration-500"></div>
                            
                            <!-- Inside Print Passepartout Matting -->
                            <div id="mattingBoard" class="absolute inset-0 border-[20px] border-[#F2EDE2] pointer-events-none transition-all duration-300"></div>

                            <!-- Vector Art representation inside configured frame -->
                            <div class="w-full h-full flex flex-col justify-between py-2 relative z-10">
                                <div class="flex justify-between items-center text-[7px] font-mono text-charcoal/40">
                                    <span>PLATE NO. II</span>
                                    <span>LIMITED PRE-RELEASE</span>
                                </div>

                                <!-- Art Display Area -->
                                <div class="w-full h-4/5 flex items-center justify-center">
                                    <svg id="configArtSvg" class="w-4/5 h-4/5 text-charcoal" viewBox="0 0 200 240" fill="none" stroke="currentColor">
                                        <!-- Dynamic monument graphic swaps here depending on chosen selection -->
                                        <g id="svgArtContent">
                                            <!-- Standard Gyeongbokgung silhouette etched -->
                                            <path d="M 40,200 L 160,200 L 150,185 L 50,185 Z" fill="url(#etchHatch1)" stroke="currentColor" stroke-width="1.2"/>
                                            <rect x="60" y="165" width="80" height="20" fill="url(#etchCrossHatch)" stroke="currentColor" stroke-width="1"/>
                                            <path d="M 45,165 L 155,165 L 165,145 L 35,145 Z" fill="url(#etchHatch2)" stroke="currentColor" stroke-width="1.2" />
                                            <line x1="100" y1="145" x2="100" y2="100" stroke="currentColor" stroke-width="1.5" />
                                            <circle cx="100" cy="120" r="5" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>

                                <!-- Signature/Etching Plate Text -->
                                <div class="flex justify-between items-end text-[7px] font-mono text-charcoal/70">
                                    <div>
                                        <p id="configArtTitle" class="font-serif font-bold uppercase tracking-wider text-xs">Gwanghwamun Citadel Gate</p>
                                        <p class="text-[7px] text-charcoal/40">310gsm Cotton Rag Washi Lithograph</p>
                                    </div>
                                    <div class="text-right">
                                        <p class="font-serif italic border-t border-charcoal/20">MonoGraft Atelier</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right: Configurator Control Deck -->
                <div class="lg:col-span-5 space-y-8">
                    <span class="font-mono text-xs tracking-[0.3em] text-charcoal/60 uppercase block">Atelier Customizer</span>
                    
                    <div class="relative inline-block py-2 pr-6">
                        <svg class="absolute -inset-x-4 inset-y-0 w-full h-full text-charcoal opacity-95 pointer-events-none" viewBox="0 0 350 70" fill="currentColor" preserveAspectRatio="none">
                            <path d="M 8,32 C 48,12 158,8 338,20 C 318,46 198,63 108,56 C 58,52 18,44 8,32 Z" />
                        </svg>
                        <h2 class="relative font-display text-white text-base tracking-[0.4em] uppercase z-10 px-4">
                            Archival Print Studio
                        </h2>
                    </div>

                    <p class="font-serif text-lg text-charcoal/80 leading-relaxed">
                        Design a tailored physical display statement for your gallery. Select museum-grade wooden frames and fine archival mount margins.
                    </p>

                    <!-- Selection Parameters -->
                    <div class="space-y-6 border-t border-charcoal/10 pt-6">
                        
                        <!-- Parameter 1: Select Plate -->
                        <div>
                            <label class="font-mono text-[10px] tracking-widest uppercase text-charcoal/60 block mb-2">1. Select Portfolio Plate</label>
                            <select id="configPlateSelect" onchange="updateConfigPlate()" class="w-full bg-parchment border border-charcoal/20 text-charcoal font-serif text-sm p-3 rounded-sm outline-none focus:border-charcoal transition-all">
                                <option value="Gwanghwamun Citadel Gate" data-price="220">Plate II: Gwanghwamun Citadel Gate</option>
                                <option value="Mont Saint-Michel Abbey" data-price="245">Plate IV: Mont Saint-Michel Abbey</option>
                                <option value="Bulguksa Pagoda" data-price="195">Plate I: Bulguksa Pagoda</option>
                            </select>
                        </div>

                        <!-- Parameter 2: Select Wood Frame Material -->
                        <div>
                            <label class="font-mono text-[10px] tracking-widest uppercase text-charcoal/60 block mb-2">2. Hand-Milled Wood Frame</label>
                            <div class="grid grid-cols-3 gap-2">
                                <button onclick="selectFrame('charcoal', '#121212', 45, 'Charcoal Oak')" id="frame-charcoal" class="px-2 py-3 border-2 border-charcoal bg-charcoal text-parchment font-mono text-[9px] uppercase tracking-wider rounded-sm transition-all text-center">
                                    Charcoal Oak
                                </button>
                                <button onclick="selectFrame('ash', '#5C5446', 60, 'Smoked Ash')" id="frame-ash" class="px-2 py-3 border border-charcoal/20 hover:border-charcoal font-mono text-[9px] uppercase tracking-wider rounded-sm transition-all text-center">
                                    Smoked Ash
                                </button>
                                <button onclick="selectFrame('maple', '#D2C3B1', 75, 'Bleached Maple')" id="frame-maple" class="px-2 py-3 border border-charcoal/20 hover:border-charcoal font-mono text-[9px] uppercase tracking-wider rounded-sm transition-all text-center">
                                    Bleached Maple
                                </button>
                            </div>
                        </div>

                        <!-- Parameter 3: Passepartout Matboard Margin -->
                        <div>
                            <div class="flex justify-between font-mono text-[10px] tracking-widest uppercase text-charcoal/60 mb-2">
                                <span>3. Archival Matting Margin</span>
                                <span id="mattingVal">20mm</span>
                            </div>
                            <input type="range" id="mattingSlider" min="0" max="40" value="20" oninput="updateMatting(this.value)" class="w-full accent-charcoal bg-charcoal/10 h-1 rounded-lg appearance-none cursor-pointer">
                        </div>

                    </div>

                    <!-- Instant Checkout Summary -->
                    <div class="bg-charcoal/5 p-6 rounded-sm space-y-4 border border-charcoal/10">
                        <div class="flex justify-between items-center">
                            <span class="font-serif text-sm italic text-charcoal/70">Custom Archival Configuration</span>
                            <span id="finalPrice" class="font-mono text-xl text-charcoal font-semibold">$265.00</span>
                        </div>
                        <p class="font-mono text-[9px] text-charcoal/50 leading-normal uppercase tracking-wider">
                            Includes signed certificate of authenticity, numbered registration plaque, and bespoke crated art freight.
                        </p>
                        <button onclick="triggerOrderModal()" class="w-full py-4 bg-charcoal text-parchment font-mono text-xs tracking-widest uppercase hover:bg-charcoal/80 transition-all rounded-sm">
                            Acquire Limited Edition
                        </button>
                    </div>

                </div>
            </div>

        </div>
    </section>

    <!-- Atelier Craftsmanship & Steps Section -->
    <section id="process" class="py-24 md:py-32 bg-charcoal text-parchment relative overflow-hidden bg-paper-texture">
        <div class="absolute inset-0 bg-charcoal/95 pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            
            <div class="max-w-3xl mb-16 md:mb-24 space-y-6 text-center mx-auto">
                <span class="font-mono text-xs tracking-[0.3em] text-parchment/60 uppercase block">The Lithograph Process</span>
                
                <div class="relative inline-block py-2 pr-4">
                    <svg class="absolute -inset-x-4 inset-y-0 w-full h-full text-parchment opacity-95 pointer-events-none" viewBox="0 0 350 70" fill="currentColor" preserveAspectRatio="none">
                        <path d="M 8,32 C 48,12 158,8 338,20 C 318,46 198,63 108,56 C 58,52 18,44 8,32 Z" />
                    </svg>
                    <h2 class="relative font-display text-charcoal text-base tracking-[0.4em] uppercase z-10 px-4">
                        Handcrafted From Stone To Ink
                    </h2>
                </div>

                <p class="font-serif text-xl font-light text-parchment/80 leading-relaxed">
                    How traditional stone-carving lithography and manual paper press systems merge to manifest timeless monochrome textures.
                </p>
            </div>

            <!-- Steps Progress Grid -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                
                <div class="border-t border-parchment/20 pt-6 space-y-4">
                    <span class="font-mono text-[10px] tracking-widest text-parchment/40 uppercase block">01 / FIELD STUDY</span>
                    <h4 class="font-serif text-lg text-parchment font-semibold">Architectural Draft</h4>
                    <p class="font-serif text-sm text-parchment/70 leading-relaxed">
                        Drawn on location using raw charcoal pencils. We chart the geometric silhouettes and shadow coordinates of grand physical monuments.
                    </p>
                </div>

                <div class="border-t border-parchment/20 pt-6 space-y-4">
                    <span class="font-mono text-[10px] tracking-widest text-parchment/40 uppercase block">02 / PLATE SCORING</span>
                    <h4 class="font-serif text-lg text-parchment font-semibold">Copper & Limestone Carving</h4>
                    <p class="font-serif text-sm text-parchment/70 leading-relaxed">
                        Using steel needles and acid compounds, the negative spaces are meticulously score-etched into heavy, raw Bavaria limestone plates.
                    </p>
                </div>

                <div class="border-t border-parchment/20 pt-6 space-y-4">
                    <span class="font-mono text-[10px] tracking-widest text-parchment/40 uppercase block">03 / INKING DISPERSAL</span>
                    <h4 class="font-serif text-lg text-parchment font-semibold">Atelier Linseed Press</h4>
                    <p class="font-serif text-sm text-parchment/70 leading-relaxed">
                        Deep soot carbon ink is mixed with aged linseed oil and carefully rolled over the stone plate to collect perfectly in scored lines.
                    </p>
                </div>

                <div class="border-t border-parchment/20 pt-6 space-y-4">
                    <span class="font-mono text-[10px] tracking-widest text-parchment/40 uppercase block">04 / THE PRESS</span>
                    <h4 class="font-serif text-lg text-parchment font-semibold">Hand-Cracked Pressing</h4>
                    <p class="font-serif text-sm text-parchment/70 leading-relaxed">
                        Textured cotton paper sheets are laid down by hand and cranked through a heavy iron flatbed press, merging fiber and deep charcoal ink.
                    </p>
                </div>

            </div>

        </div>
    </section>

    <!-- Art Collector Testimonials -->
    <section class="py-24 md:py-32 border-b border-charcoal/10 relative">
        <div class="max-w-5xl mx-auto px-6 md:px-12 space-y-12 text-center">
            <span class="font-mono text-xs tracking-[0.3em] text-charcoal/60 uppercase block">Exhibition Echoes</span>
            
            <div class="font-serif text-3xl md:text-4xl italic font-light text-charcoal/90 leading-snug">
                “In an age of hyper-saturated pixels, these hand-carved monochrome prints offer a physical grounding, a return to the tactile sensory language of real fine-art paper and deep carbon ink.”
            </div>

            <div class="space-y-1">
                <p class="font-mono text-xs tracking-widest uppercase font-semibold text-charcoal">EVELYN ROCHEFORT</p>
                <p class="font-mono text-[9px] text-charcoal/50 uppercase tracking-[0.2em]">Lead Curator, Paris Archival Prints Exhibition</p>
            </div>
        </div>
    </section>

    <!-- Editorial Premium Footer -->
    <footer class="bg-charcoal text-parchment py-16 px-6 md:px-12 relative overflow-hidden bg-paper-texture">
        <div class="absolute inset-0 bg-charcoal/95 pointer-events-none"></div>

        <div class="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-parchment/10 pb-16">
            
            <div class="space-y-4">
                <span class="font-display text-xl tracking-[0.3em] font-semibold text-parchment">MONO·GRAFT</span>
                <p class="font-serif text-sm text-parchment/60 leading-relaxed">
                    Celebrating historical architectural wonders through the tactile medium of handcrafted monochrome ink lithography.
                </p>
            </div>

            <div class="space-y-4">
                <span class="font-mono text-[10px] tracking-widest uppercase text-parchment/40 block">The Collection</span>
                <ul class="space-y-2 font-mono text-xs text-parchment/70">
                    <li><a href="#plates" class="hover:text-parchment transition-colors">Archival Plates</a></li>
                    <li><a href="#atelier" class="hover:text-parchment transition-colors">Atelier Workspace</a></li>
                    <li><a href="#configurator" class="hover:text-parchment transition-colors">Framing Studio</a></li>
                </ul>
            </div>

            <div class="space-y-4">
                <span class="font-mono text-[10px] tracking-widest uppercase text-parchment/40 block">Atelier Details</span>
                <ul class="space-y-2 font-mono text-xs text-parchment/70">
                    <li>Gyeongju, South Korea Atelier</li>
                    <li>Bavaria, Germany Limestone Quarry</li>
                    <li>Kyoto, Japan Paper Mill</li>
                </ul>
            </div>

            <div class="space-y-4">
                <span class="font-mono text-[10px] tracking-widest uppercase text-parchment/40 block">Archival Updates</span>
                <p class="font-serif text-xs text-parchment/60 leading-relaxed">Subscribe to receive exclusive print release announcements and artist journals.</p>
                <div class="flex">
                    <input type="email" placeholder="Your email" class="bg-parchment/10 text-parchment border border-parchment/20 p-2.5 text-xs outline-none focus:border-parchment flex-grow rounded-l-sm font-sans">
                    <button class="bg-parchment text-charcoal px-4 py-2 text-xs font-mono tracking-widest uppercase hover:bg-parchment/80 transition-all rounded-r-sm">Join</button>
                </div>
            </div>

        </div>

        <div class="max-w-7xl mx-auto relative z-10 pt-8 flex flex-col md:flex-row justify-between items-center text-parchment/40 font-mono text-[10px]">
            <p>© 2026 MONO-GRAFT FOLIO COLLECTIVE. ALL RIGHTS PRESERVED.</p>
            <div class="flex space-x-6 mt-4 md:mt-0">
                <a href="#" class="hover:text-parchment transition-colors">Terms of Fine Art Acquisition</a>
                <a href="#" class="hover:text-parchment transition-colors">Provenance Ledger</a>
            </div>
        </div>
    </footer>

    <!-- Interactive Custom Purchase/Reservation Modal UI (Replaces generic alert) -->
    <div id="orderModal" class="fixed inset-0 bg-charcoal/80 z-50 flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300 backdrop-blur-sm">
        <div class="bg-parchment p-8 md:p-12 max-w-lg w-full rounded-sm border border-charcoal/20 framed-shadow relative bg-paper-texture">
            <button onclick="closeOrderModal()" class="absolute top-4 right-4 text-charcoal/60 hover:text-charcoal transition-colors">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            <div class="space-y-6 text-center">
                <span class="font-mono text-[10px] tracking-widest text-charcoal/50 uppercase block">Archival Registry</span>
                <h3 class="font-serif text-3xl font-light text-charcoal tracking-tight">Plate Reservation Secured</h3>
                
                <p class="font-serif text-base text-charcoal/80 leading-relaxed">
                    You have selected a limited-edition museum-grade framing of the <strong id="modalPlateName" class="font-semibold"></strong> with <strong id="modalFrameName"></strong> framing.
                </p>

                <div class="bg-charcoal/5 p-4 rounded-sm border border-charcoal/10 flex justify-between items-center text-left">
                    <div>
                        <span class="font-mono text-[8px] tracking-widest text-charcoal/40 uppercase block">Atelier Allotted Price</span>
                        <span id="modalFinalPrice" class="font-mono text-lg text-charcoal font-semibold"></span>
                    </div>
                    <div class="text-right">
                        <span class="font-mono text-[8px] tracking-widest text-charcoal/40 uppercase block">Status</span>
                        <span class="font-mono text-[10px] text-[#2B4C7E] font-semibold uppercase">Holding Frame</span>
                    </div>
                </div>

                <p class="font-serif text-sm text-charcoal/60 leading-normal">
                    An atelier assistant will contact you in person within 24 hours to coordinate secure premium transit shipping and hand-signed ledger provenance records.
                </p>

                <button onclick="closeOrderModal()" class="w-full py-4 bg-charcoal text-parchment font-mono text-xs tracking-widest uppercase hover:bg-charcoal/80 transition-all rounded-sm">
                    Confirm Reservation
                </button>
            </div>
        </div>
    </div>


    <!-- Page Level Interactions JavaScript -->
    <script>
        // Interactive state management
        const activeLayers = {
            plate1: 'ink',
            plate2: 'ink'
        };

        // Plate Layer toggler (Ink Press / Pencil Guidelines)
        function togglePlateLayer(plateId, layer) {
            if (activeLayers[plateId] === layer) return;
            
            activeLayers[plateId] = layer;
            const inkSvg = document.getElementById(`${plateId}-ink-svg`);
            const pencilSvg = document.getElementById(`${plateId}-pencil-svg`);
            const btnInk = document.getElementById(`btn-${plateId}-ink`);
            const btnPencil = document.getElementById(`btn-${plateId}-pencil`);

            if (layer === 'ink') {
                inkSvg.style.opacity = '1';
                inkSvg.style.pointerEvents = 'auto';
                pencilSvg.style.opacity = '0';
                pencilSvg.style.pointerEvents = 'none';

                btnInk.className = "px-3 py-1 bg-charcoal text-parchment font-mono text-[8px] tracking-widest uppercase rounded-sm transition-all";
                btnPencil.className = "px-3 py-1 text-charcoal/70 font-mono text-[8px] tracking-widest uppercase rounded-sm transition-all hover:text-charcoal";
            } else {
                inkSvg.style.opacity = '0';
                inkSvg.style.pointerEvents = 'none';
                pencilSvg.style.opacity = '1';
                pencilSvg.style.pointerEvents = 'auto';

                btnInk.className = "px-3 py-1 text-charcoal/70 font-mono text-[8px] tracking-widest uppercase rounded-sm transition-all hover:text-charcoal";
                btnPencil.className = "px-3 py-1 bg-charcoal text-parchment font-mono text-[8px] tracking-widest uppercase rounded-sm transition-all";
            }
        }

        // Configurator state parameters
        let selectedPlatePrice = 220;
        let selectedFramePrice = 45;
        let selectedPlateTitle = "Gwanghwamun Citadel Gate";
        let selectedFrameTitle = "Charcoal Oak";

        // Framing Wood Selection
        function selectFrame(frameId, colorHex, price, title) {
            selectedFramePrice = price;
            selectedFrameTitle = title;
            
            // Highlight chosen buttons
            const ids = ['charcoal', 'ash', 'maple'];
            ids.forEach(id => {
                const btn = document.getElementById(`frame-${id}`);
                if (id === frameId) {
                    btn.className = "px-2 py-3 border-2 border-charcoal bg-charcoal text-parchment font-mono text-[9px] uppercase tracking-wider rounded-sm transition-all text-center";
                } else {
                    btn.className = "px-2 py-3 border border-charcoal/20 hover:border-charcoal font-mono text-[9px] uppercase tracking-wider rounded-sm transition-all text-center";
                }
            });

            // Apply style dynamically to outer border of mockup
            const borderEl = document.getElementById('frameBorder');
            borderEl.style.borderColor = colorHex;
            
            updateTotalPrice();
        }

        // Matting margin slide controller
        function updateMatting(val) {
            document.getElementById('mattingVal').innerText = `${val}mm`;
            const matBoard = document.getElementById('mattingBoard');
            matBoard.style.borderWidth = `${val}px`;
        }

        // Interactive Art Dropdown configuration controller
        function updateConfigPlate() {
            const selectEl = document.getElementById('configPlateSelect');
            const selectedOption = selectEl.options[selectEl.selectedIndex];
            selectedPlatePrice = parseFloat(selectedOption.getAttribute('data-price'));
            selectedPlateTitle = selectedOption.value;

            document.getElementById('configArtTitle').innerText = selectedPlateTitle;

            // Dynamically alter mockup vector art SVG depending on selection
            const svgContent = document.getElementById('svgArtContent');
            if (selectedPlateTitle === "Mont Saint-Michel Abbey") {
                svgContent.innerHTML = `
                    <path d="M 40,165 C 100,160 200,160 260,165 L 240,180 L 60,180 Z" fill="url(#etchCrossHatch)" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M 120,165 L 125,120 L 140,70 L 150,30 L 160,70 L 175,120 L 180,165 Z" fill="url(#etchHatch1)" stroke="currentColor" stroke-width="1.2"/>
                    <line x1="150" y1="30" x2="150" y2="15" stroke="currentColor" stroke-width="1.5" />
                    <rect x="100" y="145" width="40" height="20" fill="url(#stipplePattern)" stroke="currentColor" stroke-width="1"/>
                `;
            } else if (selectedPlateTitle === "Bulguksa Pagoda") {
                svgContent.innerHTML = `
                    <path d="M 40,210 L 160,210 L 150,195 L 50,195 Z" fill="url(#etchHatch1)" stroke="currentColor" stroke-width="1.2"/>
                    <rect x="60" y="180" width="80" height="15" fill="url(#etchCrossHatch)" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M 45,180 L 155,180 L 165,160 L 35,160 Z" fill="url(#etchHatch2)" stroke="currentColor" stroke-width="1.2" />
                    <line x1="100" y1="145" x2="100" y2="55" stroke="currentColor" stroke-width="1.5" />
                    <circle cx="100" cy="75" r="5" fill="currentColor" />
                `;
            } else {
                // Gwanghwamun Gate defaults
                svgContent.innerHTML = `
                    <path d="M 40,200 L 160,200 L 150,185 L 50,185 Z" fill="url(#etchHatch1)" stroke="currentColor" stroke-width="1.2"/>
                    <rect x="60" y="165" width="80" height="20" fill="url(#etchCrossHatch)" stroke="currentColor" stroke-width="1"/>
                    <path d="M 45,165 L 155,165 L 165,145 L 35,145 Z" fill="url(#etchHatch2)" stroke="currentColor" stroke-width="1.2" />
                    <line x1="100" y1="145" x2="100" y2="100" stroke="currentColor" stroke-width="1.5" />
                    <circle cx="100" cy="120" r="5" fill="currentColor" />
                `;
            }

            updateTotalPrice();
        }

        // Bridge helper to select dynamic plates inside configurator from catalog page buttons
        function selectConfigPlate(title, price) {
            const selectEl = document.getElementById('configPlateSelect');
            selectEl.value = title;
            updateConfigPlate();

            // Auto scroll smoothly to interactive configurator view
            document.getElementById('configurator').scrollIntoView({ behavior: 'smooth' });
        }

        function updateTotalPrice() {
            const total = selectedPlatePrice + selectedFramePrice;
            document.getElementById('finalPrice').innerText = `$${total.toFixed(2)}`;
        }

        // Order Modal Toggles
        function triggerOrderModal() {
            const total = selectedPlatePrice + selectedFramePrice;
            document.getElementById('modalPlateName').innerText = selectedPlateTitle;
            document.getElementById('modalFrameName').innerText = selectedFrameTitle;
            document.getElementById('modalFinalPrice').innerText = `$${total.toFixed(2)}`;

            const modal = document.getElementById('orderModal');
            modal.style.opacity = '1';
            modal.style.pointerEvents = 'auto';
        }

        function closeOrderModal() {
            const modal = document.getElementById('orderModal');
            modal.style.opacity = '0';
            modal.style.pointerEvents = 'none';
        }


        /* ==========================================
           INTERACTIVE HTML5 ATELIER CANVAS LOGIC
           ========================================== */
        const canvas = document.getElementById('etchCanvas');
        const ctx = canvas.getContext('2d');
        const drawStatus = document.getElementById('drawStatus');
        const inkSlider = document.getElementById('inkPressure');
        const pressureVal = document.getElementById('pressureVal');
        const etchAudio = document.getElementById('etchAudio');

        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;
        let brushSize = 5;
        let brushOpacity = 0.75;
        let userHasDrawn = false;

        // Custom Resize Canvas keeping proportions intact
        function resizeCanvas() {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            
            // Clear default canvas background layer
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            
            if (!userHasDrawn) {
                renderPlaceholderGuide();
            }
        }

        // Render basic graphite line to outline starting guides
        function renderPlaceholderGuide() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.strokeStyle = 'rgba(13,13,13,0.1)';
            ctx.lineWidth = 0.8;
            ctx.setLineDash([4, 4]);

            // Center drafting guidelines
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, 20);
            ctx.lineTo(canvas.width / 2, canvas.height - 20);
            ctx.moveTo(20, canvas.height / 2);
            ctx.lineTo(canvas.width - 20, canvas.height / 2);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        // Sketch mechanics
        function startDrawing(e) {
            isDrawing = true;
            userHasDrawn = true;
            drawStatus.innerText = "STATUS: ENGRAVING SHEET";
            drawStatus.classList.add('text-[#2B4C7E]');

            const rect = canvas.getBoundingClientRect();
            // Map touch / desktop mouse coordinates perfectly
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            
            lastX = clientX - rect.left;
            lastY = clientY - rect.top;

            // Trigger sketch sensory sound feedback safely
            if (audioEnabled) {
                etchAudio.play().catch(() => {});
            }
        }

        function draw(e) {
            if (!isDrawing) return;
            e.preventDefault();

            const rect = canvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;

            const currentX = clientX - rect.left;
            const currentY = clientY - rect.top;

            // Simulate custom charcoal stroke dispersion
            ctx.strokeStyle = `rgba(13, 13, 13, ${brushOpacity})`;
            ctx.lineWidth = brushSize;

            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(currentX, currentY);
            ctx.stroke();

            // Apply fine carbon ink spray dispersion dots to simulate mulberry bleeding
            if (Math.random() > 0.4) {
                ctx.fillStyle = `rgba(13, 13, 13, ${brushOpacity * 0.4})`;
                ctx.beginPath();
                ctx.arc(currentX + (Math.random() * 6 - 3), currentY + (Math.random() * 6 - 3), Math.random() * 2, 0, Math.PI * 2);
                ctx.fill();
            }

            lastX = currentX;
            lastY = currentY;
        }

        function stopDrawing() {
            isDrawing = false;
            etchAudio.pause();
        }

        // Clear canvas functionality
        function clearAtelierCanvas() {
            userHasDrawn = false;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            renderPlaceholderGuide();
            drawStatus.innerText = "STATUS: BLANK PRESS";
            drawStatus.classList.remove('text-[#2B4C7E]');
        }

        // Custom auto-drafting vector tracer simulating classic pagoda
        function triggerAutoDraft() {
            clearAtelierCanvas();
            userHasDrawn = true;
            drawStatus.innerText = "STATUS: MASTER ENGRAVING RUN";
            
            const steps = [];
            const midX = canvas.width / 2;
            const h = canvas.height;

            // Pre-calculate beautiful architectural vector trace lines for instant animated drawing
            // Base
            steps.push({x1: midX - 80, y1: h - 30, x2: midX + 80, y2: h - 30});
            steps.push({x1: midX - 60, y1: h - 30, x2: midX - 50, y2: h - 45});
            steps.push({x1: midX + 60, y1: h - 30, x2: midX + 50, y2: h - 45});
            steps.push({x1: midX - 50, y1: h - 45, x2: midX + 50, y2: h - 45});
            
            // Tier 1 Columns
            steps.push({x1: midX - 40, y1: h - 45, x2: midX - 40, y2: h - 80});
            steps.push({x1: midX + 40, y1: h - 45, x2: midX + 40, y2: h - 80});
            steps.push({x1: midX, y1: h - 45, x2: midX, y2: h - 80});
            
            // Tier 1 Roof
            steps.push({x1: midX - 55, y1: h - 80, x2: midX + 55, y2: h - 80});
            steps.push({x1: midX - 55, y1: h - 80, x2: midX - 45, y2: h - 95});
            steps.push({x1: midX + 55, y1: h - 80, x2: midX + 45, y2: h - 95});
            steps.push({x1: midX - 45, y1: h - 95, x2: midX + 45, y2: h - 95});

            // Tier 2 Body
            steps.push({x1: midX - 30, y1: h - 95, x2: midX - 30, y2: h - 130});
            steps.push({x1: midX + 30, y1: h - 95, x2: midX + 30, y2: h - 130});
            
            // Tier 2 Roof
            steps.push({x1: midX - 45, y1: h - 130, x2: midX + 45, y2: h - 130});
            steps.push({x1: midX - 45, y1: h - 130, x2: midX - 35, y2: h - 145});
            steps.push({x1: midX + 45, y1: h - 130, x2: midX + 35, y2: h - 145});
            steps.push({x1: midX - 35, y1: h - 145, x2: midX + 35, y2: h - 145});

            // Spire
            steps.push({x1: midX, y1: h - 145, x2: midX, y2: h - 190});

            let currentStepIndex = 0;
            
            function animateLine() {
                if (currentStepIndex >= steps.length) {
                    drawStatus.innerText = "STATUS: MASTERPIECE COMPLETE";
                    return;
                }

                const line = steps[currentStepIndex];
                ctx.strokeStyle = `rgba(13, 13, 13, ${brushOpacity})`;
                ctx.lineWidth = brushSize * 0.8;
                ctx.beginPath();
                ctx.moveTo(line.x1, line.y1);
                ctx.lineTo(line.x2, line.y2);
                ctx.stroke();

                currentStepIndex++;
                setTimeout(animateLine, 80);
            }

            animateLine();
        }

        // Nib Profile Selector update
        function selectNib(size, name) {
            brushSize = size;
            document.getElementById('nibVal').innerText = name;
        }

        // Canvas Events
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseleave', stopDrawing);

        canvas.addEventListener('touchstart', startDrawing);
        canvas.addEventListener('touchmove', draw);
        canvas.addEventListener('touchend', stopDrawing);

        // Pressure input slider tracker
        inkSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            brushOpacity = val / 100;
            pressureVal.innerText = `${val}%`;
        });

        // Initialize Canvas Resize
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('load', () => {
            resizeCanvas();
            updateTotalPrice();
        });


        /* ==========================================
           WEBAUDIO ATELIER SOUNDSCAPE BACKGROUND
           ========================================== */
        let audioCtx;
        let ambientOscillator;
        let audioEnabled = false;

        document.getElementById('soundscapeToggle').addEventListener('click', () => {
            if (!audioEnabled) {
                // Initialize clean, ambient, soothing white-noise space sounds via WebAudio API synthesized room waves
                try {
                    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                    
                    // Create subtle ambient room tone oscillator simulating hollow museum halls
                    const filter = audioCtx.createBiquadFilter();
                    filter.type = 'lowpass';
                    filter.frequency.setValueAtTime(100, audioCtx.currentTime);

                    const noise = audioCtx.createOscillator();
                    noise.type = 'sawtooth';
                    noise.frequency.setValueAtTime(55, audioCtx.currentTime); // Low deep drone

                    const gainNode = audioCtx.createGain();
                    gainNode.gain.setValueAtTime(0.015, audioCtx.currentTime); // Soft background whisper

                    noise.connect(filter);
                    filter.connect(gainNode);
                    gainNode.connect(audioCtx.destination);
                    noise.start();
                    
                    ambientOscillator = noise;
                } catch(e) {
                    console.log("WebAudio setup deferred.");
                }

                audioEnabled = true;
                document.getElementById('soundOnIcon').classList.remove('hidden');
                document.getElementById('soundOffIcon').classList.add('hidden');
            } else {
                if (ambientOscillator) {
                    try { ambientOscillator.stop(); } catch(e){}
                }
                audioEnabled = false;
                document.getElementById('soundOnIcon').classList.add('hidden');
                document.getElementById('soundOffIcon').classList.remove('hidden');
            }
        });


        /* ==========================================
           SCROLL INTERSECTION ANIMATION CONTROLLER
           ========================================== */
        const animatedElements = document.querySelectorAll('.fade-in-slide');
        
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => observer.observe(el));

    </script>
</body>
</html>