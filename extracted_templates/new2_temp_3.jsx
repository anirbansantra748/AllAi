import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Clock, 
  Layers, 
  Camera, 
  Check, 
  ArrowUpRight, 
  ChevronRight,
  Info,
  Sliders,
  X,
  Send,
  HelpCircle
} from 'lucide-react';

export default function App() {
  // Theme & Sound state
  const [isNightMode, setIsNightMode] = useState(false);
  const [activeSound, setActiveSound] = useState(null); // 'shibuya', 'kyoto', 'akihabara', null
  const [audioInitialized, setAudioInitialized] = useState(false);
  
  // Audio context references
  const audioCtxRef = useRef(null);
  const noiseNodeRef = useRef(null);
  const oscillatorNodeRef = useRef(null);
  const gainNodeRef = useRef(null);

  // Time & Weather Mock Data
  const [tokyoTime, setTokyoTime] = useState('');
  const [activeTour, setActiveTour] = useState(0);
  const [plannerStep, setPlannerStep] = useState(0);
  
  // Custom Planner State
  const [planPreferences, setPlanPreferences] = useState({
    vibe: 'neon', // neon, zen, culinary, nature
    pace: 'balanced', // fast, balanced, slow
    duration: '7-10', // 5-7, 7-10, 14+
    guests: '2' // 1, 2, 4+
  });
  
  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTourTitle, setSelectedTourTitle] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', date: '', notes: '' });

  // Update Tokyo Time
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTokyoTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Web Audio Synthesizer for Immersive Background Sounds
  const initAudio = () => {
    if (!audioInitialized) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtxRef.current = new AudioContext();
        setAudioInitialized(true);
      }
    }
  };

  const playSoundscape = (type) => {
    initAudio();
    stopSoundscape();

    if (activeSound === type) {
      setActiveSound(null);
      return;
    }

    setActiveSound(type);
    
    // Ensure Context is running
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    const ctx = audioCtxRef.current;
    if (!ctx) return;

    // Create Main Gain Node
    const mainGain = ctx.createGain();
    mainGain.gain.setValueAtTime(0.01, ctx.currentTime);
    mainGain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 1.5); // Fade in
    mainGain.connect(ctx.destination);
    gainNodeRef.current = mainGain;

    if (type === 'shibuya') {
      // SHIBUYA RAIN: Synthesize soft pink noise filtered for rain + low rumble
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const rainFilter = ctx.createBiquadFilter();
      rainFilter.type = 'bandpass';
      rainFilter.frequency.value = 1000;
      rainFilter.Q.value = 0.5;

      whiteNoise.connect(rainFilter);
      rainFilter.connect(mainGain);
      whiteNoise.start();

      noiseNodeRef.current = whiteNoise;
    } 
    else if (type === 'kyoto') {
      // KYOTO CHIME: Low harmonic sine wave bells triggering periodically
      const triggerBell = () => {
        if (activeSound !== 'kyoto' && activeSound === null) return;
        const osc = ctx.createOscillator();
        const bellGain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, ctx.currentTime); // Standard harmonic
        osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 3);

        bellGain.gain.setValueAtTime(0.12, ctx.currentTime);
        bellGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3);

        osc.connect(bellGain);
        bellGain.connect(mainGain);
        osc.start();
        osc.stop(ctx.currentTime + 3);
      };

      triggerBell();
      const interval = setInterval(triggerBell, 4000);
      oscillatorNodeRef.current = { stop: () => clearInterval(interval) };
    } 
    else if (type === 'akihabara') {
      // AKIHABARA NEON: Soft sci-fi neon hum
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(60, ctx.currentTime); // Power line hum frequency

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 120;

      // Subtle LFO modulation for flickering neon feel
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 8; // 8Hz flutter
      lfoGain.gain.value = 5;

      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      
      osc.connect(filter);
      filter.connect(mainGain);

      lfo.start();
      osc.start();

      oscillatorNodeRef.current = osc;
    }
  };

  const stopSoundscape = () => {
    if (noiseNodeRef.current) {
      try { noiseNodeRef.current.stop(); } catch(e){}
      noiseNodeRef.current = null;
    }
    if (oscillatorNodeRef.current) {
      try { oscillatorNodeRef.current.stop(); } catch(e){}
      oscillatorNodeRef.current = null;
    }
    if (gainNodeRef.current) {
      try { gainNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.5); } catch(e){}
    }
  };

  useEffect(() => {
    return () => stopSoundscape();
  }, []);

  // Preset Luxury Tours
  const tours = [
    {
      title: "Neon Noir Nights",
      location: "Tokyo Metropolis",
      japanese: "ネオン・ノワール",
      duration: "4 Days / 3 Nights",
      accent: "from #FF2E51",
      desc: "Delve deep into the photogenic underbelly of Shibuya, Kabukicho, and Akihabara. Guided by master night photographers and local subculture historians.",
      highlights: ["Rooftop Helicopter Transit", "Private Cyberpunk Alleyway Dining", "Retro-Arcade Lock-in Session", "Hasselblad Camera Kit rental included"],
      coords: "35.6580° N, 139.7016° E",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Kyoto Whispering Gardens",
      location: "Imperial Kyoto",
      japanese: "静寂の庭園と竹林",
      duration: "5 Days / 4 Nights",
      accent: "from #10B981",
      desc: "An exclusive spiritual retreat through hidden Zen gardens, private temple tearooms, and morning tea master ceremonies usually sealed to the public.",
      highlights: ["Private Tea Gathering with Grand Master", "Vip Entry to Saihō-ji Moss Temple", "Traditional Kaiseki in Bamboo Forest", "Zen Monk-led Midnight Meditation"],
      coords: "35.0116° N, 135.7681° E",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Alpine Onsen Sanctum",
      location: "Hakone & Mt. Fuji",
      japanese: "箱根・富士の秘湯",
      duration: "3 Days / 2 Nights",
      accent: "from #F59E0B",
      desc: "Perch on the volcanic ridges overlooking Fuji. Unwind in mineral-rich natural waters inside a historic luxury Ryokan featuring hand-carved Hinoki timber.",
      highlights: ["Private Volcanic Baths", "Artisan Sake Tasting Flights", "Helicopter Flight Path around Mt. Fuji", "Wagyu Beef Multi-course Hearth Dining"],
      coords: "35.2324° N, 139.1069° E",
      image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  // Dynamic Planner Output Generator
  const generateItinerary = () => {
    const { vibe, pace, duration } = planPreferences;
    let title = "The Custom Odyssey";
    let estimate = "$4,200 per guest";
    let activities = [];

    if (vibe === 'neon') {
      title = "Shibuya Cyber & Nocturnal Street-Art Crawl";
      estimate = "$3,900 / guest";
      activities = ["Underground Cyber Bar Access", "Alleyway Culinary Safari", "Custom Mech-Keyboard Workshop"];
    } else if (vibe === 'zen') {
      title = "Sashiko Crafting & Imperial Calligraphy Residency";
      estimate = "$5,400 / guest";
      activities = ["Sashiko Atelier Experience", "1-on-1 Zen Calligraphy Tutoring", "Hidden Stone Garden Sketching Session"];
    } else if (vibe === 'culinary') {
      title = "The Michelin Umami Trail & Tsukiji Private Cellars";
      estimate = "$6,200 / guest";
      activities = ["15-Course Omakase by Legendary Chefs", "Vintage Sake Auction Tasting", "Private Knife-Forging in Sakai Studio"];
    } else {
      title = "Hokkaido Untamed Ridge-line & Alpine Exploration";
      estimate = "$4,800 / guest";
      activities = ["Hokkaido Peak Snowshoeing", "Natural Hot Spring Gorge Trek", "Ainu Cultural Oral History Campfire"];
    }

    if (pace === 'slow') {
      activities.push("Extended Evening Hinoki Soaking");
    } else if (pace === 'fast') {
      activities.push("High-Speed Shinkansen GranClass Transfer");
    }

    return { title, estimate, activities };
  };

  const itineraryResult = generateItinerary();

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingModalOpen(false);
      setFormData({ name: '', email: '', date: '', notes: '' });
    }, 2500);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-700 select-none ${isNightMode ? 'bg-[#050505] text-neutral-50' : 'bg-[#0c0c0c] text-neutral-100'}`}>
      
      {/* BACKGROUND DECORATIVE GRID LINES */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      {/* TOP HEADER / BAR */}
      <header className="sticky top-0 z-40 backdrop-blur-md border-b border-neutral-800/60 bg-neutral-950/70 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FF2E51] flex items-center justify-center relative overflow-hidden">
              <span className="text-white font-bold text-xs tracking-tighter">N</span>
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
            <span className="font-extrabold tracking-[0.2em] text-lg uppercase">NIPPON <span className="text-[#FF2E51]">PULSE</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-neutral-300">
            <a href="#experiences" className="hover:text-white transition-colors">Curated Paths</a>
            <a href="#soundscape" className="hover:text-[#FF2E51] transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2E51] animate-ping" />
              Acoustic Room
            </a>
            <a href="#architect" className="hover:text-white transition-colors">Itinerary Builder</a>
            <a href="#about" className="hover:text-white transition-colors">Our DNA</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Realtime Tokyo Widget */}
            <div className="hidden lg:flex flex-col items-end text-[10px] font-mono tracking-widest text-neutral-400 border-l border-neutral-800 pl-4">
              <span className="text-neutral-500 uppercase">TOKYO TIME</span>
              <span className="text-neutral-200 font-bold">{tokyoTime || '12:00:00 JST'}</span>
            </div>

            {/* Night Vibe Toggle */}
            <button 
              onClick={() => setIsNightMode(!isNightMode)}
              className="p-2.5 rounded-full border border-neutral-800 hover:border-[#FF2E51] transition-all bg-neutral-900 text-neutral-300 flex items-center justify-center"
              title="Toggle Night Streets Atmosphere"
            >
              <span className="relative flex h-3 w-3 mr-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isNightMode ? 'bg-[#FF2E51]' : 'bg-amber-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${isNightMode ? 'bg-[#FF2E51]' : 'bg-amber-400'}`}></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {isNightMode ? 'NIGHT WALK' : 'DAYLIGHT'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION - Deep High Contrast Split Layout matching poster DNA */}
      <section className="relative py-12 px-6 max-w-7xl mx-auto overflow-hidden">
        
        {/* Poster Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT POSTER BLOCK: Obsidian Neon Core (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-neutral-950 p-8 rounded-tr-[80px] rounded-bl-[80px] border border-neutral-800/80 shadow-2xl relative overflow-hidden group min-h-[550px]">
            {/* Neon Glow Circle */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF2E51]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Top Meta info */}
            <div className="flex justify-between items-start z-10">
              <div className="font-mono text-[10px] tracking-widest text-neutral-400">
                <p>N° 09 // PRIVATE AGENCY</p>
                <p>CLASS: ULTRA-LUXURY</p>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 bg-[#FF2E51] text-white text-[9px] font-bold tracking-widest uppercase rounded">
                  TOKYO PRE-INSCRIPTION ACTIVE
                </span>
              </div>
            </div>

            {/* Main Creative Typo Block */}
            <div className="my-12 z-10">
              <div className="inline-flex items-center gap-2 px-2 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-400 text-xs tracking-wider mb-4">
                <Compass className="w-3.5 h-3.5 text-[#FF2E51] animate-spin" style={{ animationDuration: '6s' }} />
                <span>LAT: 35.6762° N // LON: 139.6503° E</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-4">
                NIPPON <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E51] via-[#ff657e] to-amber-400">
                  PULSE
                </span>
              </h1>
              
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                We design highly curated, sensory journeys into the heart of modern metropolis, spiritual shrines, and untouched alpine hot springs. Crafted for the global pioneer.
              </p>
            </div>

            {/* Bottom Panel with interactive features */}
            <div className="border-t border-neutral-800/80 pt-6 flex justify-between items-center z-10">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-neutral-400">2026</span>
                <div className="h-4 w-[1px] bg-neutral-800" />
                <span className="text-[10px] font-mono text-neutral-500 leading-tight">
                  HYBRID TRAVEL<br/>
                  ENGINE V.3
                </span>
              </div>
              
              <a href="#experiences" className="flex items-center gap-2 text-xs font-bold tracking-widest text-white hover:text-[#FF2E51] group transition-colors">
                VIEW EXPEDITIONS 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#FF2E51]" />
              </a>
            </div>
          </div>

          {/* RIGHT POSTER BLOCK: Asymmetric Ivory Master Panel mimicking poster base (7 Columns) */}
          <div className="lg:col-span-7 bg-[#F5F5F3] text-neutral-950 rounded-tl-[80px] rounded-br-[80px] p-8 md:p-12 flex flex-col justify-between shadow-2xl relative border-4 border-neutral-900">
            
            {/* Top Split Layout */}
            <div className="flex flex-col md:flex-row justify-between gap-8 items-start">
              {/* Left Typography Block */}
              <div className="space-y-6 max-w-md">
                <div className="flex items-center gap-1">
                  <span className="text-[#FF2E51] font-bold text-lg">✦</span>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-neutral-500">
                    Nippon Sensations
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                  Unveiling the Hidden Alleyways & Sacred Sanctums
                </h2>

                <p className="text-neutral-600 text-sm leading-relaxed">
                  Step away from generic tourism. Nippon Pulse operates behind velvet ropes. Dine inside exclusive 200-year-old wooden ryokans, tour illuminated temple complexes closed to the public, and discover cybernetic future districts with top-tier urban guides.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-neutral-900 text-white rounded-full text-[10px] font-mono tracking-widest uppercase">
                    ✓ Private Helipads
                  </span>
                  <span className="px-3 py-1 bg-neutral-900 text-white rounded-full text-[10px] font-mono tracking-widest uppercase">
                    ✓ 3-Star Culinary
                  </span>
                  <span className="px-3 py-1 bg-[#FF2E51] text-white rounded-full text-[10px] font-mono tracking-widest uppercase">
                    ✓ VIP Local Access
                  </span>
                </div>
              </div>

              {/* Authentic Poster Vertical Column (Japanese text DNA) */}
              <div className="flex flex-row md:flex-col items-center md:items-end gap-6 self-stretch border-t md:border-t-0 md:border-l border-neutral-300 pt-6 md:pt-0 md:pl-8">
                {/* Vertical Japanese Label 1 */}
                <div className="flex items-center gap-2">
                  <span className="text-neutral-400 font-mono text-[10px] tracking-widest">VISIT</span>
                  <span className="font-extrabold text-neutral-800 tracking-wider text-sm [writing-mode:vertical-rl]">日本を訪問</span>
                </div>

                {/* Vertical Japanese Label 2 */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5 md:flex-col items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF2E51]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                  </div>
                  <span className="font-extrabold text-neutral-800 tracking-wider text-sm [writing-mode:vertical-rl]">市内ツアー</span>
                </div>

                {/* Premium Accent Star SVG */}
                <div className="p-3 bg-neutral-900 rounded-full text-white animate-bounce shadow-md">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
              </div>
            </div>

            {/* Micro Specs Footer inside Light Panel */}
            <div className="border-t border-neutral-300 pt-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div>
                <span className="block text-[9px] font-mono text-neutral-500 uppercase">EXPERIENCES</span>
                <span className="text-lg font-black text-neutral-900">12 Curated</span>
              </div>
              <div>
                <span className="block text-[9px] font-mono text-neutral-500 uppercase">COMPASS CODE</span>
                <span className="text-lg font-black text-neutral-900">JP-81</span>
              </div>
              <div>
                <span className="block text-[9px] font-mono text-neutral-500 uppercase">SAFETY RATIO</span>
                <span className="text-lg font-black text-[#FF2E51]">100% SECURE</span>
              </div>
              <div className="flex items-center justify-end">
                <button 
                  onClick={() => {
                    setSelectedTourTitle("Full Odyssey Inquiry");
                    setBookingModalOpen(true);
                  }}
                  className="bg-neutral-950 text-white hover:bg-[#FF2E51] transition-all px-4 py-2.5 text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-1.5 shadow"
                >
                  Reserve Now
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ACOUSTIC ROOM SECTION: High Fidelity Interactive Synthesized Soundscape */}
      <section id="soundscape" className="py-20 px-6 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-[#FF2E51]/5 rounded-[60px] blur-3xl pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-[#FF2E51] text-[11px] font-mono tracking-widest uppercase mb-4">
            <Volume2 className="w-3.5 h-3.5 animate-pulse" />
            <span>PREMIUM IMMERSION LABORATORY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Hear the Pulse before you Touch Down
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Our proprietary spatial noise generator simulates the authentic acoustic vibrations of Japan's most mesmerizing environments. Click to initiate the sound generator (Web Audio synth).
          </p>
        </div>

        {/* Ambient Synthesizer Deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Shibuya Rain */}
          <div 
            onClick={() => playSoundscape('shibuya')}
            className={`cursor-pointer group p-6 rounded-3xl border transition-all relative overflow-hidden flex flex-col justify-between h-[280px] ${
              activeSound === 'shibuya' 
                ? 'border-[#FF2E51] bg-[#FF2E51]/10 text-white shadow-lg shadow-[#FF2E51]/20 scale-102' 
                : 'border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 hover:bg-neutral-900'
            }`}
          >
            <div className="absolute top-0 right-0 p-4 font-mono text-neutral-500 text-[10px] tracking-widest">01 / SHBY</div>
            <div>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 rounded text-[9px] font-mono tracking-widest uppercase">SYNTH PINK NOISE</span>
              <h3 className="text-2xl font-bold mt-3 mb-1">Shibuya Rain</h3>
              <p className="text-xs text-neutral-400">Soft atmospheric precipitation under glowing crosswalks.</p>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <span className="text-[10px] font-mono text-neutral-500">FREQUENCY: 1000HZ BANDPASS</span>
              <div className="flex items-center gap-2">
                {activeSound === 'shibuya' ? (
                  <div className="flex gap-1 items-end h-4">
                    <span className="w-1 bg-[#FF2E51] h-3 animate-pulse" />
                    <span className="w-1 bg-[#FF2E51] h-1.5 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1 bg-[#FF2E51] h-4 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                ) : (
                  <Volume2 className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                )}
                <span className="text-xs font-bold uppercase tracking-wider">{activeSound === 'shibuya' ? 'MUTE ATMOSPHERE' : 'PLAY'}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Kyoto Temple Chimes */}
          <div 
            onClick={() => playSoundscape('kyoto')}
            className={`cursor-pointer group p-6 rounded-3xl border transition-all relative overflow-hidden flex flex-col justify-between h-[280px] ${
              activeSound === 'kyoto' 
                ? 'border-[#10B981] bg-[#10B981]/10 text-white shadow-lg shadow-[#10B981]/20 scale-102' 
                : 'border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 hover:bg-neutral-900'
            }`}
          >
            <div className="absolute top-0 right-0 p-4 font-mono text-neutral-500 text-[10px] tracking-widest">02 / KYTO</div>
            <div>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 rounded text-[9px] font-mono tracking-widest uppercase">RESONATING SINES</span>
              <h3 className="text-2xl font-bold mt-3 mb-1">Forest Chime</h3>
              <p className="text-xs text-neutral-400">Pure, soothing harmonic bell ring decaying into nature air.</p>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <span className="text-[10px] font-mono text-neutral-500">DECAY TIME: 3 SECONDS</span>
              <div className="flex items-center gap-2">
                {activeSound === 'kyoto' ? (
                  <div className="flex gap-1 items-end h-4">
                    <span className="w-1 bg-[#10B981] h-2 animate-pulse" />
                    <span className="w-1 bg-[#10B981] h-4 animate-pulse" style={{ animationDelay: '0.1s' }} />
                    <span className="w-1 bg-[#10B981] h-1.5 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  </div>
                ) : (
                  <Volume2 className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                )}
                <span className="text-xs font-bold uppercase tracking-wider">{activeSound === 'kyoto' ? 'MUTE ATMOSPHERE' : 'PLAY'}</span>
              </div>
            </div>
          </div>

          {/* Card 3: Akihabara Neon Hum */}
          <div 
            onClick={() => playSoundscape('akihabara')}
            className={`cursor-pointer group p-6 rounded-3xl border transition-all relative overflow-hidden flex flex-col justify-between h-[280px] ${
              activeSound === 'akihabara' 
                ? 'border-amber-400 bg-amber-400/10 text-white shadow-lg shadow-amber-400/20 scale-102' 
                : 'border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 hover:bg-neutral-900'
            }`}
          >
            <div className="absolute top-0 right-0 p-4 font-mono text-neutral-500 text-[10px] tracking-widest">03 / AKHB</div>
            <div>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 rounded text-[9px] font-mono tracking-widest uppercase">LFO SAWTOOTH HUM</span>
              <h3 className="text-2xl font-bold mt-3 mb-1">Cyber Neon Hum</h3>
              <p className="text-xs text-neutral-400">Intense electronic hum replicating glowing digital streets.</p>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <span className="text-[10px] font-mono text-neutral-500">FREQUENCY: 60HZ + LFO FLUTTER</span>
              <div className="flex items-center gap-2">
                {activeSound === 'akihabara' ? (
                  <div className="flex gap-1 items-end h-4">
                    <span className="w-1 bg-amber-400 h-4 animate-pulse" />
                    <span className="w-1 bg-amber-400 h-2 animate-pulse" style={{ animationDelay: '0.1s' }} />
                    <span className="w-1 bg-amber-400 h-3 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  </div>
                ) : (
                  <Volume2 className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                )}
                <span className="text-xs font-bold uppercase tracking-wider">{activeSound === 'akihabara' ? 'MUTE ATMOSPHERE' : 'PLAY'}</span>
              </div>
            </div>
          </div>

        </div>

        {activeSound && (
          <div className="mt-6 p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex justify-between items-center max-w-lg mx-auto">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2E51] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF2E51]"></span>
              </span>
              <p className="text-xs text-neutral-300 font-mono">Synthesizer output running at 44.1kHz. Plug in headphones for optimal experience.</p>
            </div>
            <button 
              onClick={stopSoundscape} 
              className="text-[10px] font-bold text-neutral-400 hover:text-white underline uppercase tracking-widest"
            >
              MUTE ALL
            </button>
          </div>
        )}
      </section>

      {/* EXPEDITIONS GRID: Elite Curated Experiences */}
      <section id="experiences" className="py-20 px-6 max-w-7xl mx-auto bg-neutral-950 rounded-[40px] border border-neutral-800/80 my-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div>
            <span className="text-[#FF2E51] font-mono text-xs tracking-widest uppercase block mb-2">// EXPERIENCE LEVEL I</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
              Curated Masterpiece Trips
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md">
            Each excursion operates under full non-disclosure, with direct concierge assistance, top-class English-speaking field veterans, and custom transportation elements.
          </p>
        </div>

        {/* Tour Selection Switcher Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Panel: Tour List Buttons (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {tours.map((tour, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveTour(idx)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all text-left flex items-center justify-between ${
                  activeTour === idx 
                    ? 'bg-[#F5F5F3] text-neutral-950 border-white shadow-xl scale-102' 
                    : 'bg-neutral-900/50 text-neutral-300 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900'
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className={`text-[10px] font-mono tracking-wider ${activeTour === idx ? 'text-[#FF2E51]' : 'text-neutral-500'}`}>
                    {tour.coords}
                  </span>
                  <h3 className="text-xl font-bold leading-tight">{tour.title}</h3>
                  <span className={`text-xs font-semibold ${activeTour === idx ? 'text-neutral-600' : 'text-neutral-400'}`}>
                    {tour.location}
                  </span>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <span className="font-extrabold text-xs tracking-wider [writing-mode:vertical-rl]">{tour.japanese}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeTour === idx ? 'translate-x-1 text-[#FF2E51]' : 'text-neutral-600'}`} />
                </div>
              </div>
            ))}

            {/* Quick trust badge */}
            <div className="mt-4 p-5 rounded-2xl border border-neutral-800/60 bg-neutral-900/20 flex gap-4 items-center">
              <div className="p-3 rounded-xl bg-[#FF2E51]/10 text-[#FF2E51]">
                <Sparkles className="w-6 h-6" />
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                <span className="font-bold text-neutral-200">Bespoke Customizations Included:</span> All journeys are infinitely tailorable to accommodate your personal safety, dietary, or mobility preferences.
              </p>
            </div>
          </div>

          {/* Right Panel: Active Tour Visual & Specs (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/40 border border-neutral-800/60 rounded-[40px] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
            
            {/* Massive Asymmetric Image Frame replicating Poster */}
            <div className="relative h-64 md:h-80 w-full rounded-tr-[50px] rounded-bl-[50px] overflow-hidden border border-neutral-700/60 shadow-inner group">
              <img 
                src={tours[activeTour].image} 
                alt={tours[activeTour].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              
              {/* Image floating badge */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-black/80 backdrop-blur text-white text-[10px] font-mono rounded tracking-widest">
                  {tours[activeTour].duration}
                </span>
                <span className="px-3 py-1 bg-[#FF2E51] text-white text-[10px] font-mono rounded tracking-widest">
                  {tours[activeTour].location}
                </span>
              </div>
            </div>

            {/* Description Block */}
            <div className="my-6 space-y-4">
              <div className="flex justify-between items-baseline border-b border-neutral-800 pb-4">
                <h3 className="text-3xl font-black text-white">{tours[activeTour].title}</h3>
                <span className="text-xs font-mono text-neutral-400">{tours[activeTour].coords}</span>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed">
                {tours[activeTour].desc}
              </p>

              {/* Highlights Bullet List Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {tours[activeTour].highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-[#FF2E51]" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Panel Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-neutral-800/80 pt-6">
              <div className="text-center sm:text-left">
                <span className="block text-[10px] font-mono text-neutral-500 uppercase">TIER PRICE ESTIMATE</span>
                <span className="text-xl font-bold text-white tracking-wide">Elite Package Included</span>
              </div>

              <button 
                onClick={() => {
                  setSelectedTourTitle(tours[activeTour].title);
                  setBookingModalOpen(true);
                }}
                className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-[#FF2E51] hover:text-white transition-all text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow"
              >
                Inquire For Dates
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* INTERACTIVE BENTO GRID (Thematic & Modern Layout) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Custom Quote Banner (8 Cols) */}
          <div className="lg:col-span-8 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800/80 p-8 md:p-12 rounded-[50px] flex flex-col justify-between min-h-[350px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 font-mono text-[9px] text-neutral-600 tracking-[0.2em] uppercase">DNA // 01</div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#FF2E51]/10 rounded-full blur-[80px]" />
            
            <div className="space-y-4 max-w-xl z-10">
              <span className="text-[#FF2E51] text-xs font-mono tracking-widest uppercase">PHILOSOPHY</span>
              <h3 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
                "Japan's beauty lies not in what is brightly illuminated, but in the subtle tension between dark alleys and soft paper lanterns."
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-neutral-800/60 pt-6 mt-8 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-sm text-[#FF2E51]">
                  KP
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Kenji Sato</h4>
                  <p className="text-xs text-neutral-500">Chief Curator & Heritage Architect</p>
                </div>
              </div>
              
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                Established 2022 / Tokyo Headquarters
              </span>
            </div>
          </div>

          {/* Card 2: Interactive Real-Time Stats (4 Cols) */}
          <div className="lg:col-span-4 bg-[#F5F5F3] text-neutral-950 p-8 rounded-[50px] border-4 border-neutral-900 flex flex-col justify-between min-h-[350px]">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF2E51]">LIVE SYSTEM</span>
              <span className="font-mono text-[9px] text-neutral-500">JP-SYS-V3</span>
            </div>

            <div className="space-y-6 my-8">
              <div>
                <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">NEXT EXPEDITION GATE</span>
                <span className="text-2xl font-black text-neutral-900">SHIBUYA JUNCTION</span>
              </div>
              
              <div>
                <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">ACTIVE EXPLORERS</span>
                <span className="text-2xl font-black text-neutral-900">14 Private Groups</span>
              </div>

              <div>
                <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">WEATHER ATMOSPHERE</span>
                <span className="text-2xl font-black text-[#FF2E51] flex items-center gap-1.5">
                  MISTY RAIN 19°C
                </span>
              </div>
            </div>

            <div className="border-t border-neutral-300 pt-4 text-xs font-mono text-neutral-500">
              Updated live via Tokyo API
            </div>
          </div>

        </div>

      </section>

      {/* DYNAMIC JOURNEY ARCHITECT (The interactive tour customizer) */}
      <section id="architect" className="py-20 px-6 max-w-7xl mx-auto bg-neutral-950 rounded-[40px] border border-neutral-800/80 my-12 relative">
        <div className="absolute top-10 right-10 opacity-10">
          <Compass className="w-64 h-64 text-white animate-spin-slow" />
        </div>

        <div className="max-w-3xl mb-12">
          <span className="text-[#FF2E51] font-mono text-xs tracking-widest uppercase block mb-2">// EXPERIENCE ENGINE</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
            Architect Your Private Odyssey
          </h2>
          <p className="text-neutral-400 text-sm mt-3">
            Select your travel preferences below. Our algorithm dynamically calculates coordinates, pathways, and estimated pricing structures to match your parameters perfectly.
          </p>
        </div>

        {/* Builder Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-neutral-900/60 rounded-3xl p-6 md:p-8 border border-neutral-800 flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Option 1: Vibe selection */}
              <div>
                <span className="block text-xs font-bold uppercase text-neutral-400 tracking-wider mb-3">1. Primary Atmosphere Vibe</span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { id: 'neon', label: 'Neon Noir', desc: 'Nocturnal & Tech' },
                    { id: 'zen', label: 'Kyoto Zen', desc: 'Spiritual Crafts' },
                    { id: 'culinary', label: 'Umami Michelin', desc: 'Private Kitchens' },
                    { id: 'nature', label: 'Alpine Peaks', desc: 'Wild Mountains' }
                  ].map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setPlanPreferences({ ...planPreferences, vibe: v.id })}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        planPreferences.vibe === v.id 
                          ? 'bg-[#FF2E51] border-[#FF2E51] text-white' 
                          : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-bold">{v.label}</span>
                      <span className={`text-[9px] font-mono mt-1 ${planPreferences.vibe === v.id ? 'text-white/80' : 'text-neutral-500'}`}>
                        {v.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Pace */}
              <div>
                <span className="block text-xs font-bold uppercase text-neutral-400 tracking-wider mb-3">2. Desired Pace of Travel</span>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'slow', label: 'Meditative', desc: 'Slower, deep immersion' },
                    { id: 'balanced', label: 'Balanced Pulse', desc: 'Equal exploration' },
                    { id: 'fast', label: 'Shinkansen Run', desc: 'Rapid, highly dynamic' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPlanPreferences({ ...planPreferences, pace: p.id })}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        planPreferences.pace === p.id 
                          ? 'bg-neutral-100 border-white text-neutral-950' 
                          : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-bold">{p.label}</span>
                      <span className={`text-[9px] font-mono mt-1 ${planPreferences.pace === p.id ? 'text-neutral-600' : 'text-neutral-500'}`}>
                        {p.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Duration & Guests row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="block text-xs font-bold uppercase text-neutral-400 tracking-wider mb-3">3. Duration Path</span>
                  <div className="grid grid-cols-3 gap-2">
                    {['5-7 Days', '7-10 Days', '14+ Days'].map((d) => (
                      <button
                        key={d}
                        onClick={() => setPlanPreferences({ ...planPreferences, duration: d })}
                        className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all ${
                          planPreferences.duration === d 
                            ? 'bg-neutral-100 border-white text-neutral-950' 
                            : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-bold uppercase text-neutral-400 tracking-wider mb-3">4. Guest Count</span>
                  <div className="grid grid-cols-3 gap-2">
                    {['1 Guest', '2 Guests', '4+ Guests'].map((g) => (
                      <button
                        key={g}
                        onClick={() => setPlanPreferences({ ...planPreferences, guests: g })}
                        className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all ${
                          planPreferences.guests === g 
                            ? 'bg-[#FF2E51] border-[#FF2E51] text-white' 
                            : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="border-t border-neutral-800 mt-8 pt-4 flex gap-2 items-center text-xs text-neutral-400">
              <Sliders className="w-4 h-4 text-[#FF2E51]" />
              <span>Adjust parameters dynamically to watch custom itinerary map calculations.</span>
            </div>
          </div>

          {/* Results Output Panel (5 Cols) mimicking poster print */}
          <div className="lg:col-span-5 bg-[#F5F5F3] text-neutral-950 rounded-3xl p-6 md:p-8 flex flex-col justify-between border-4 border-neutral-900 shadow-xl relative overflow-hidden">
            
            {/* Minimal Background Emblem */}
            <div className="absolute bottom-0 right-0 p-8 opacity-5 text-9xl font-black select-none pointer-events-none">
              JP
            </div>

            <div>
              <div className="flex justify-between items-center border-b border-neutral-300 pb-4 mb-6">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">CALCULATED PATHWAY</span>
                <span className="px-2 py-0.5 bg-[#FF2E51] text-white text-[9px] font-mono rounded font-bold uppercase tracking-wider">
                  REAL-TIME PREVIEW
                </span>
              </div>

              {/* Title Result */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">ODYSSEY TITLE</span>
                <h3 className="text-2xl font-black text-neutral-900 leading-tight">
                  {itineraryResult.title}
                </h3>
                
                {/* Simulated Map coordinates based on vibe */}
                <div className="flex gap-4 text-xs font-mono text-neutral-600">
                  <span>LAT: 35.67° N</span>
                  <span>|</span>
                  <span>LNG: 139.65° E</span>
                  <span>|</span>
                  <span>ALT: 45m</span>
                </div>
              </div>

              {/* Activities Bullets */}
              <div className="space-y-3 mt-8">
                <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">INCLUDED PRIVATE SEGMENTS</span>
                {itineraryResult.activities.map((act, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs font-bold text-neutral-800 bg-neutral-200/50 p-2.5 rounded-lg border border-neutral-300/40">
                    <Check className="w-4 h-4 text-[#FF2E51]" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-neutral-300 pt-6 mt-8">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="block text-[9px] font-mono text-neutral-500 uppercase">ESTIMATED EXCURSION PRICE</span>
                  <span className="text-xl font-black text-neutral-900">{itineraryResult.estimate}</span>
                </div>
                
                <span className="text-[9px] font-mono text-neutral-500 text-right">
                  Includes transit &<br/>Vip security
                </span>
              </div>

              <button 
                onClick={() => {
                  setSelectedTourTitle(`Custom Odyssey (${planPreferences.vibe.toUpperCase()} vibe)`);
                  setBookingModalOpen(true);
                }}
                className="w-full bg-neutral-950 text-white hover:bg-[#FF2E51] transition-all py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow"
              >
                Inquire & Lock Custom Rate
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* TRAVEL LOGS / TESTIMONIALS (Premium Editorial Layout) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#FF2E51] font-mono text-xs tracking-widest uppercase block mb-2">// CAPTURED ENCOUNTERS</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
            Testimonials from the Frontier
          </h2>
          <p className="text-neutral-400 text-sm mt-3">
            Real feedback translated from VIP logbooks. Authenticated under travel registration license #349-1020-00A.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Testimonial 1 */}
          <div className="p-8 bg-neutral-900/40 border border-neutral-800 rounded-tr-[40px] rounded-bl-[40px] flex flex-col justify-between min-h-[250px] relative overflow-hidden">
            <span className="text-4xl text-neutral-800 font-serif absolute -top-2 -left-2 select-none">“</span>
            
            <p className="text-neutral-300 text-xs md:text-sm leading-relaxed mb-6 italic z-10">
              "We took our design department to Kyoto for 8 days with Nippon Pulse. The access to private textile dye masters in historical Kyoto homes fundamentally shifted how we view structural design. An outstanding, flawless travel system."
            </p>

            <div className="flex items-center gap-3 border-t border-neutral-800 pt-4 z-10">
              <div className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center font-black text-xs text-white">
                HR
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">H. Rothschild</h4>
                <p className="text-[10px] text-neutral-500">VP of Creative at Axis Group</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 bg-neutral-900/40 border border-neutral-800 rounded-tr-[40px] rounded-bl-[40px] flex flex-col justify-between min-h-[250px] relative overflow-hidden">
            <span className="text-4xl text-neutral-800 font-serif absolute -top-2 -left-2 select-none">“</span>
            
            <p className="text-neutral-300 text-xs md:text-sm leading-relaxed mb-6 italic z-10">
              "Nippon Pulse bypassed the typical queues entirely. Dinner on a high rooftop over Shibuya Crossing with zero security hassle and a legendary guide was worth every penny. An experience of pure cinema."
            </p>

            <div className="flex items-center gap-3 border-t border-neutral-800 pt-4 z-10">
              <div className="w-9 h-9 rounded-full bg-[#FF2E51] flex items-center justify-center font-black text-xs text-white">
                ML
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Marc Laurent</h4>
                <p className="text-[10px] text-neutral-500">Fine Art Photographer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-8 bg-neutral-900/40 border border-neutral-800 rounded-tr-[40px] rounded-bl-[40px] flex flex-col justify-between min-h-[250px] relative overflow-hidden">
            <span className="text-4xl text-neutral-800 font-serif absolute -top-2 -left-2 select-none">“</span>
            
            <p className="text-neutral-300 text-xs md:text-sm leading-relaxed mb-6 italic z-10">
              "My family will never tour the East standardly again. The Onsen Ryokan inside the volcanic valley felt like stepping back to the 17th Century, but with Michelin-starred wagyu beef and direct helicopter transits."
            </p>

            <div className="flex items-center gap-3 border-t border-neutral-800 pt-4 z-10">
              <div className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center font-black text-xs text-white">
                AK
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Aiko Kobayashi</h4>
                <p className="text-[10px] text-neutral-500">Venture Capital Partner</p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* FINAL PRE-INSCRIPTION CTA BAR */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="bg-[#F5F5F3] text-neutral-950 rounded-[40px] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8 border-4 border-neutral-900 relative overflow-hidden">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 text-white rounded-full text-[10px] font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2E51] animate-ping" />
              INQUIRIES CURRENTLY UNRESTRICTED
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900">
              Begin Your Premium Journey Architecture Today
            </h2>
            
            <p className="text-neutral-600 text-sm max-w-xl">
              Connect with our master concierge team immediately to custom design your luxury journey, coordinate safe passage flights, and claim exclusive temple entries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-stretch">
            <button 
              onClick={() => {
                setSelectedTourTitle("Unrestricted Pre-Inscription");
                setBookingModalOpen(true);
              }}
              className="px-8 py-4 bg-neutral-950 text-white hover:bg-[#FF2E51] transition-all text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow"
            >
              Initiate Inquiry
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-neutral-950 py-16 px-6 text-neutral-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF2E51] flex items-center justify-center">
                <span className="text-white font-bold text-xs">N</span>
              </div>
              <span className="font-extrabold tracking-widest text-lg text-white">NIPPON PULSE</span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs text-neutral-500">
              Curating high-end sensory journeys for international pioneers. Luxury registered travel office under Tokyo License #81-229.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Expeditions</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#experiences" className="hover:text-white transition-colors">Neon Noir Nights (Tokyo)</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Garden Whisper retreat (Kyoto)</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Volcanic Onsen Ridge (Fuji)</a></li>
              <li><a href="#architect" className="hover:text-[#FF2E51] transition-colors">Custom Journey Creator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Acoustics</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => playSoundscape('shibuya')} className="hover:text-white transition-colors">Tokyo Shibuya Rain Synth</button></li>
              <li><button onClick={() => playSoundscape('kyoto')} className="hover:text-white transition-colors">Forest Wind chime Decay</button></li>
              <li><button onClick={() => playSoundscape('akihabara')} className="hover:text-white transition-colors">Akihabara Cyber Hum</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Headquarters</h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Shibuya Tower Central, Level 32<br/>
              Shibuya-ku, Tokyo 150-0002<br/>
              <span className="block mt-2 font-mono text-[10px] text-[#FF2E51]">TOKYO: +81-3-5490-2347</span>
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-neutral-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-neutral-600">
          <div>
            <p>© 2026 NIPPON PULSE CO. ALL RIGHTS SECURED UNDER GLOBAL REGISTER.</p>
          </div>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">NON-DISCLOSURE ACT</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">TERMS OF INCUBATION</a>
            <span>•</span>
            <a href="#coordinates" className="hover:text-white transition-colors">JP-81.6503</a>
          </div>
        </div>
      </footer>

      {/* DYNAMIC RESERVATION INQUIRY MODAL (NO BROWSER ALERTS) */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-[40px] max-w-md w-full relative shadow-2xl">
            
            <button 
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white p-2 rounded-full border border-neutral-900 hover:border-neutral-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto text-3xl animate-bounce">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-white">Inquiry Transmitted</h3>
                <p className="text-xs text-neutral-400 leading-relaxed max-w-xs mx-auto">
                  Your cryptographic passage request has been received. Our chief concierge Kenji Sato will connect directly within the hour.
                </p>
                <div className="font-mono text-[9px] text-neutral-600 uppercase">SECURE PASS GRANTED // TIME JST</div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-[#FF2E51] font-mono text-[10px] tracking-widest uppercase block mb-1">PREMIUM REGISTRATION</span>
                  <h3 className="text-2xl font-black text-white leading-tight">
                    Inquire: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E51] to-amber-400">{selectedTourTitle}</span>
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2">
                    Enter your contact parameters. All information is managed strictly under premium zero-leakage security laws.
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sterling Archer" 
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF2E51] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5">Secure Email Connection</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sterling@vip-mail.com" 
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF2E51] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5">Target Passage Date Range</label>
                    <input 
                      type="text" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      placeholder="e.g. Spring Equinox 2026" 
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF2E51] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5">Custom Security/Dietary Notes</label>
                    <textarea 
                      rows="2"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Mention custom security requirements or language preferences here..." 
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF2E51] transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-white text-black hover:bg-[#FF2E51] hover:text-white transition-all py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2"
                  >
                    <span>TRANSMIT INQUIRY PASS</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

                <div className="border-t border-neutral-900 pt-4 flex gap-1.5 items-center justify-center text-[10px] font-mono text-neutral-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>SECURE CHANNEL ACTIVE</span>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}