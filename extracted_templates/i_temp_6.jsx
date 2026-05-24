import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  Wind, 
  Sun, 
  Moon, 
  Sparkles, 
  Compass, 
  BookOpen, 
  Maximize2, 
  Volume2, 
  VolumeX, 
  ExternalLink, 
  Check, 
  ChevronRight,
  ArrowRight,
  Mail,
  Heart,
  Music
} from 'lucide-react';

// Masterpieces Data (Imbued with Monet's real themes + the mystical Unicorn/Dragon elements of the inspiration deck)
const masterpieces = [
  {
    id: "water-lilies",
    title: "Nymphéas (Water Lilies)",
    period: "1916 - 1926",
    atmosphere: "Serene & Mystical",
    description: "An exploration of water, air, and light. The reflection of clouds and weeping willows on the shimmering surface of the Giverny pond merges reality with abstraction.",
    palette: ["#1B3B48", "#2E5059", "#6B8E83", "#9BB3A8", "#D9CBB6"],
    paletteNames: ["Deep Abyss", "Lilypad Teal", "Willow Sage", "Mist Green", "French Alabaster"],
    dominantHex: "#2E5059",
    category: "Unicorn Sightings",
    number: "01",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80", // placeholder artistic feel
    brushstyle: "Broad, horizontal dabs, layered glazes, rich impasto textures."
  },
  {
    id: "japanese-bridge",
    title: "The Water-Lily Pond",
    period: "1899",
    atmosphere: "Verdant & Enchanting",
    description: "The famous green wooden bridge arched over the lilies. Sunlight filters through weeping willows, throwing golden dabs of light onto the emerald water.",
    palette: ["#1F3325", "#3A5C43", "#608A63", "#D2BC82", "#ECE2C6"],
    paletteNames: ["Giverny Shadow", "Emerald Moss", "Olive Ray", "Sunlit Ochre", "Warm Alabaster"],
    dominantHex: "#3A5C43",
    category: "Dragon Taming",
    number: "02",
    imageUrl: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=1200&q=80",
    brushstyle: "Short, quick vertical strokes, thick dabs on foliage."
  },
  {
    id: "venice-twilight",
    title: "San Giorgio Maggiore at Dusk",
    period: "1908",
    atmosphere: "Poetic & Radiant",
    description: "Venetian islands dissolving in a brilliant, fiery haze of orange, pink, and violet. The water catches the blazing sky in liquid gold reflections.",
    palette: ["#241D3B", "#49306B", "#E57C5B", "#F6B352", "#192E46"],
    paletteNames: ["Venetian Dusk", "Royal Purple", "Coral Sol", "Gilded Wave", "Canal Teal"],
    dominantHex: "#E57C5B",
    category: "Wonders",
    number: "03",
    imageUrl: "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?auto=format&fit=crop&w=1200&q=80",
    brushstyle: "Vibrant horizontal sweeps, intense wet-on-wet blending."
  },
  {
    id: "rouen-cathedral",
    title: "Rouen Cathedral, Portal in Sun",
    period: "1894",
    atmosphere: "Ethereal & Textured",
    description: "The massive stone facade transformed into a symphony of light and shadow, glowing gold and delicate lilac under the intense afternoon sun.",
    palette: ["#3D3A50", "#76799C", "#C8B195", "#EAD8C1", "#5C5963"],
    paletteNames: ["Cathedral Shadow", "Cobalt Mist", "Gothic Ochre", "Summer Flare", "Weathered Stone"],
    dominantHex: "#C8B195",
    category: "Magic Spells",
    number: "04",
    imageUrl: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?auto=format&fit=crop&w=1200&q=80",
    brushstyle: "Encrusted impasto, dry-brushing to mimic ancient stone grain."
  }
];

// Interactive Journal/Secrets Section matching the 3-step right column of the inspiration sheet
const secretGuides = [
  {
    num: "1",
    title: "Discover the secrets",
    desc: "Explore the dark, vibrant forest and uncover the hidden, mystical wildlife that lies within Claude Monet's impressionist shadows."
  },
  {
    num: "2",
    title: "Find your own path",
    desc: "Choose your own paths through the lilies, and discover where they take you as the light shifts from dawn to golden twilight."
  },
  {
    num: "3",
    title: "Meet the creatures",
    desc: "Encounter the mystical beasts that call the canvas forest home—from floating unicorns to ancient, wind-sleeping dragons."
  }
];

export default function App() {
  const [selectedArt, setSelectedArt] = useState(masterpieces[0]);
  const [activeMood, setActiveMood] = useState('giverny'); // 'giverny' (teal/green), 'venice' (warm sunset), 'mist' (ethereal purple/blue)
  const [isMuted, setIsMuted] = useState(true);
  const [copiedColor, setCopiedColor] = useState(null);
  const [customPrompt, setCustomPrompt] = useState("");
  const [generatedArtwork, setGeneratedArtwork] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showNotification, setShowNotification] = useState("");

  // Simulated ambient sound loop (Nature/Water/Soft strings)
  const [audio] = useState(() => {
    const aud = new Audio("https://assets.mixkit.co/active_storage/sfx/123/123-200.wav"); // soft chime/sound
    aud.loop = true;
    return aud;
  });

  const toggleAudio = () => {
    setIsMuted(!isMuted);
    triggerToast("Atmospheric music toggled");
  };

  const triggerToast = (msg) => {
    setShowNotification(msg);
    setTimeout(() => setShowNotification(""), 3000);
  };

  const copyColorToClipboard = (hex) => {
    // Standard execution fallback safe for iframe environments
    const textarea = document.createElement("textarea");
    textarea.value = hex;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      setCopiedColor(hex);
      triggerToast(`Copied color ${hex} to clipboard!`);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error("Failed to copy color", err);
    }
    document.body.removeChild(textarea);
  };

  // Simulated AI Brush Stroke Engine
  const handleGenerateArt = (e) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;

    setIsGenerating(true);
    setTimeout(() => {
      // Pick dynamic color meshes depending on the words written
      const keyword = customPrompt.toLowerCase();
      let generatedPalette = ["#1b3127", "#325c48", "#88ab75", "#ded1b3"];
      let title = "Impression: Dream of " + customPrompt;
      
      if (keyword.includes("sun") || keyword.includes("fire") || keyword.includes("red")) {
        generatedPalette = ["#2d141e", "#6b1d2f", "#d95c46", "#fce181"];
      } else if (keyword.includes("water") || keyword.includes("blue") || keyword.includes("rain")) {
        generatedPalette = ["#0c1a2d", "#1f3a5e", "#5688b5", "#cbddec"];
      } else if (keyword.includes("purple") || keyword.includes("dream") || keyword.includes("spirit")) {
        generatedPalette = ["#1f142d", "#3c215e", "#8c56b5", "#e7cbfa"];
      }

      setGeneratedArtwork({
        title: title,
        prompt: customPrompt,
        palette: generatedPalette,
        id: "custom-" + Date.now()
      });
      setIsGenerating(false);
      triggerToast("Your Impressionist Palette has been synthesized.");
    }, 1500);
  };

  // Dynamics of Mood Themes (Directly modifying background gradient meshes)
  const moodStyles = {
    giverny: {
      bgGrad: "from-[#0e171f] via-[#12222b] to-[#071015]",
      accentGlow: "rgba(34, 197, 94, 0.12)",
      borderColor: "border-[#627a6c]/20",
      accentText: "text-[#83a992]",
      buttonBg: "bg-[#213f30] hover:bg-[#2b533f]"
    },
    venice: {
      bgGrad: "from-[#1c1219] via-[#2d1b24] to-[#0f0b12]",
      accentGlow: "rgba(249, 115, 22, 0.12)",
      borderColor: "border-[#966b59]/20",
      accentText: "text-[#d68565]",
      buttonBg: "bg-[#452726] hover:bg-[#593331]"
    },
    mist: {
      bgGrad: "from-[#101424] via-[#1b213a] to-[#0a0d17]",
      accentGlow: "rgba(168, 85, 247, 0.12)",
      borderColor: "border-[#7780b0]/20",
      accentText: "text-[#939fc9]",
      buttonBg: "bg-[#2c2d4d] hover:bg-[#393b63]"
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${moodStyles[activeMood].bgGrad} text-[#fcfaf2] font-sans transition-all duration-1000 selection:bg-[#c39b62] selection:text-black relative overflow-hidden`}>
      
      {/* Decorative Canvas Background Texture / Light Spots */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute top-1/4 left-1/3 w-[50vw] h-[50vw] rounded-full blur-[120px] pointer-events-none transition-all duration-1000" style={{ background: moodStyles[activeMood].accentGlow }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full blur-[150px] pointer-events-none transition-all duration-1000" style={{ background: "rgba(252, 250, 242, 0.03)" }}></div>

      {/* Persistent Toast Notification */}
      {showNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#16212b] border border-[#d2bc82]/30 text-[#fcfaf2] px-5 py-3 rounded-md shadow-2xl flex items-center space-x-3 animate-fade-in-up">
          <Sparkles className="w-5 h-5 text-[#d2bc82] animate-pulse" />
          <span className="text-sm tracking-wide font-medium">{showNotification}</span>
        </div>
      )}

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-40 backdrop-blur-md border-b border-white/5 bg-[#0e171f]/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-serif text-2xl tracking-widest text-[#fcfaf2]">CLAUDE MONET</span>
            <span className="h-4 w-[1px] bg-white/20 hidden sm:inline-block"></span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/40 hidden sm:inline-block">Digital Atelier v2.5</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-light text-white/70">
            <a href="#gallery" className="hover:text-[#fcfaf2] transition-colors">The Masterpieces</a>
            <a href="#secrets" className="hover:text-[#fcfaf2] transition-colors">Impressionist Secrets</a>
            <a href="#palette-tool" className="hover:text-[#fcfaf2] transition-colors">Palette Generator</a>
            <a href="#about" className="hover:text-[#fcfaf2] transition-colors">The Garden</a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Audio Toggle button */}
            <button 
              onClick={toggleAudio} 
              className="p-2.5 rounded-full border border-white/10 text-white/60 hover:text-[#fcfaf2] hover:border-white/20 transition-all"
              title={isMuted ? "Unmute Ambient Chimes" : "Mute Sound"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#d2bc82] animate-bounce" />}
            </button>

            {/* Premium CTA Button */}
            <a 
              href="#palette-tool" 
              className="hidden sm:inline-flex items-center space-x-2 bg-[#fcfaf2] hover:bg-[#ebd9b4] text-[#0d141b] px-5 py-2.5 rounded-sm font-semibold text-xs uppercase tracking-widest transition-all shadow-md transform hover:-translate-y-0.5"
            >
              <span>Explore Colors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* --- ATMOSPHERE CONTROLLER BAR --- */}
      <div className="w-full bg-[#131d27]/40 border-b border-white/5 py-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs uppercase tracking-widest text-white/40">Canvas Lighting Mood:</span>
            <span className="text-xs font-semibold uppercase text-[#d2bc82]">{activeMood} light</span>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => { setActiveMood('giverny'); triggerToast("Mood altered: Giverny Noon (Soft Greens & Teals)"); }}
              className={`px-4 py-1.5 rounded text-xs tracking-widest uppercase transition-all flex items-center space-x-1.5 border ${activeMood === 'giverny' ? 'bg-[#213f30] text-[#fcfaf2] border-green-500/30' : 'bg-transparent text-white/50 border-white/10 hover:border-white/30'}`}
            >
              <Wind className="w-3.5 h-3.5" />
              <span>Giverny Noon</span>
            </button>
            <button 
              onClick={() => { setActiveMood('venice'); triggerToast("Mood altered: Venice Sunset (Vibrant Ochres & Purples)"); }}
              className={`px-4 py-1.5 rounded text-xs tracking-widest uppercase transition-all flex items-center space-x-1.5 border ${activeMood === 'venice' ? 'bg-[#452726] text-[#fcfaf2] border-orange-500/30' : 'bg-transparent text-white/50 border-white/10 hover:border-white/30'}`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Venice Sunset</span>
            </button>
            <button 
              onClick={() => { setActiveMood('mist'); triggerToast("Mood altered: Mystic Fog (Ethereal Violet & Cobalts)"); }}
              className={`px-4 py-1.5 rounded text-xs tracking-widest uppercase transition-all flex items-center space-x-1.5 border ${activeMood === 'mist' ? 'bg-[#2c2d4d] text-[#fcfaf2] border-purple-500/30' : 'bg-transparent text-white/50 border-white/10 hover:border-white/30'}`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Mystic Fog</span>
            </button>
          </div>
        </div>
      </div>

      {/* --- HERO SECTION: Monet Masterpiece Showcase --- */}
      <section className="relative pt-12 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Column: Deep atmospheric typography and descriptions */}
          <div className="lg:col-span-5 space-y-8 z-10">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d2bc82] block">
                Free presentation template by eatemp inspired
              </span>
              <h1 className="font-serif text-5xl md:text-7xl leading-tight text-[#fcfaf2] tracking-tight">
                Claude Monet
              </h1>
              <p className="text-lg text-white/70 font-light leading-relaxed max-w-lg">
                Immerse yourself in a landscape woven from rays of sun, dissolving mists, and fleeting light dabs. Experience the timeless vision of nature recreated in the digital world.
              </p>
            </div>

            {/* Interactive Stats / Artistic Focus block */}
            <div className="grid grid-cols-2 gap-4 border-t border-b border-white/10 py-6">
              <div>
                <span className="block text-3xl font-serif text-[#d2bc82]">1840-1926</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Lifespan & Era</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-[#d2bc82]">2,000+</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Masterpieces Painted</span>
              </div>
            </div>

            {/* Quick-select carousel list */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-white/50 block font-semibold">
                Explore the canvas realms:
              </span>
              <div className="flex flex-wrap gap-2">
                {masterpieces.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => {
                      setSelectedArt(art);
                      triggerToast(`Viewing Masterpiece: ${art.title}`);
                    }}
                    className={`px-4 py-2 rounded text-xs tracking-wider uppercase transition-all border ${
                      selectedArt.id === art.id 
                        ? 'bg-[#fcfaf2] text-[#0d141b] border-white font-bold' 
                        : 'bg-white/5 text-white/70 border-white/5 hover:bg-white/10'
                    }`}
                  >
                    {art.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Right Column: High-fidelity painterly showcase card reminiscent of the presentation title slide */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-lg overflow-hidden border border-white/10 bg-[#16222b] shadow-2xl p-4 sm:p-6 transition-transform duration-500 hover:scale-[1.01]">
              
              {/* Image Container with high quality painterly image representation */}
              <div className="relative h-[320px] sm:h-[450px] w-full rounded overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d141b] via-transparent to-transparent z-10"></div>
                
                {/* Simulated Impressionist Canvas Backdrop using advanced pure CSS color waves */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center mix-blend-color-burn opacity-40 transition-all duration-700" style={{ backgroundImage: `url(${selectedArt.imageUrl})` }}></div>
                  
                  {/* Fluid CSS painting effect matching selected masterpiece theme */}
                  <div 
                    className="absolute inset-0 filter blur-3xl opacity-60 animate-pulse transition-all duration-1000"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${selectedArt.palette[0]} 0%, transparent 50%),
                                   radial-gradient(circle at 70% 60%, ${selectedArt.palette[1]} 0%, transparent 60%),
                                   radial-gradient(circle at 50% 90%, ${selectedArt.palette[2]} 0%, transparent 50%)`
                    }}
                  />
                  
                  {/* Artistic framing element */}
                  <div className="absolute inset-4 border border-white/10 pointer-events-none z-20"></div>
                  <div className="absolute inset-5 border border-white/5 pointer-events-none z-20"></div>
                </div>

                {/* Overlaid Title Plate */}
                <div className="absolute bottom-6 left-6 right-6 z-20 space-y-1">
                  <div className="flex items-center space-x-2 text-xs text-[#d2bc82] uppercase tracking-[0.25em]">
                    <span>{selectedArt.category}</span>
                    <span>•</span>
                    <span>{selectedArt.period}</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#fcfaf2] tracking-wide">
                    {selectedArt.title}
                  </h2>
                </div>
              </div>

              {/* Masterpiece Meta Information Box */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/40 mb-1">Atmospheric Mood</span>
                  <p className="text-white/80 font-light italic">{selectedArt.description}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-white/40 mb-1">Brush Technique</span>
                    <p className="text-[#d2bc82] font-serif text-sm">{selectedArt.brushstyle}</p>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-white/40 mb-1">Color Palette</span>
                    <div className="flex space-x-1.5 mt-1">
                      {selectedArt.palette.map((color, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => copyColorToClipboard(color)}
                          className="w-7 h-7 rounded-full cursor-pointer border border-white/20 transition-transform transform hover:scale-125 relative group"
                          style={{ backgroundColor: color }}
                          title={`Click to copy: ${selectedArt.paletteNames[idx]} (${color})`}
                        >
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 bg-black text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
                            {selectedArt.paletteNames[idx]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- INSPIRATIONAL BANNER QUOTE --- */}
      <section className="bg-[#121c25]/60 border-t border-b border-white/5 py-16 text-center px-6 relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(210,188,130,0.03)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[#d2bc82] text-xs tracking-[0.3em] uppercase block">A Vision of Light</span>
          <blockquote className="font-serif text-2xl md:text-3xl text-white/90 italic leading-relaxed">
            "I must have flowers, always, and always. I perhaps owe having become a painter to flowers."
          </blockquote>
          <cite className="block text-xs uppercase tracking-[0.2em] text-white/40 not-italic">— Claude Monet</cite>
        </div>
      </section>

      {/* --- GALLERY EXPLORER & CARD GRID --- */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d2bc82] font-semibold">The Curated Archive</span>
            <h2 className="font-serif text-4xl text-[#fcfaf2]">Masterpiece Exhibitions</h2>
          </div>
          <p className="text-sm text-white/50 max-w-md font-light">
            We explore four core states of Claude Monet's creative universe—fusing historical masterpieces with mythical narrative elements of fantasy landscapes.
          </p>
        </div>

        {/* Masterpiece Cards matching layout, typography, and visual density of presentation slides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {masterpieces.map((art) => (
            <div 
              key={art.id} 
              className={`group relative rounded-lg overflow-hidden border transition-all duration-500 ${
                selectedArt.id === art.id 
                  ? 'bg-[#182633] border-[#d2bc82]/40 shadow-[0_0_25px_rgba(210,188,130,0.05)]' 
                  : 'bg-[#101a22] border-white/5 hover:border-white/20'
              }`}
            >
              {/* Outer decorative borders representing classic frames */}
              <div className="absolute inset-3 border border-white/5 pointer-events-none group-hover:border-white/10 transition-colors"></div>

              <div className="p-8 space-y-6">
                
                {/* Header of card */}
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-white/40">Exhibition {art.number}</span>
                    <h3 className="font-serif text-2xl text-[#fcfaf2] group-hover:text-[#d2bc82] transition-colors">
                      {art.title}
                    </h3>
                  </div>
                  <span className="font-serif text-4xl text-white/10 group-hover:text-white/25 transition-all">{art.number}</span>
                </div>

                {/* Colorful Impressionist palette strip */}
                <div className="grid grid-cols-5 h-2 rounded overflow-hidden">
                  {art.palette.map((color, idx) => (
                    <div 
                      key={idx} 
                      className="h-full transition-transform hover:scale-y-125" 
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Description and metadata */}
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {art.description}
                </p>

                {/* Technical metadata pill lists */}
                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wider text-white/50 pt-2">
                  <span className="bg-white/5 px-2.5 py-1 rounded">{art.period}</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded">{art.atmosphere}</span>
                  <span className="bg-[#d2bc82]/10 text-[#d2bc82] px-2.5 py-1 rounded">{art.category}</span>
                </div>

                {/* Interactive Action Bar inside card */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <button 
                    onClick={() => {
                      setSelectedArt(art);
                      document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
                      triggerToast(`Focused on ${art.title}`);
                    }}
                    className="text-xs uppercase tracking-widest font-semibold text-[#fcfaf2] group-hover:text-[#d2bc82] transition-all flex items-center space-x-1.5"
                  >
                    <span>Inspect Brushwork</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex space-x-1.5">
                    {art.palette.map((color, idx) => (
                      <span 
                        key={idx} 
                        onClick={() => copyColorToClipboard(color)}
                        className="w-4 h-4 rounded-full cursor-pointer hover:scale-125 transition-transform" 
                        style={{ backgroundColor: color }}
                        title={`Copy ${color}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </section>

      {/* --- SECRETS & NARRATIVE (Matching presentation style layout) --- */}
      <section id="secrets" className="bg-[#121c25]/80 border-t border-b border-white/5 py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Large vertical layout box with impressionist image mockup */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-[#d2bc82] blur-3xl opacity-[0.03] rounded-lg"></div>
            
            <div className="relative border border-white/10 rounded-lg overflow-hidden bg-[#0d141b] p-6 space-y-6">
              
              <div className="relative h-[280px] w-full rounded overflow-hidden">
                {/* Custom painterly CSS texture background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#162734] via-[#241725] to-[#122b21] animate-pulse"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                  <span className="text-xs uppercase tracking-widest text-[#d2bc82] font-semibold">The Wild Realm</span>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-white/50">Giverny Woods Exploration</span>
                    <h4 className="font-serif text-xl text-[#fcfaf2]">Mysteries of the Lily Pond</h4>
                  </div>
                </div>
                {/* Thin overlay borders */}
                <div className="absolute inset-4 border border-white/10 pointer-events-none"></div>
              </div>

              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#d2bc82] font-bold">The Impressionist Philosophy</span>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Monet did not simply paint objects. He painted the light, atmosphere, and shimmering air that existed between himself and the object. Explore how these principles allow mythical beings like unicorns to melt directly into nature.
                </p>
              </div>

            </div>
          </div>

          {/* Right Side: Elegant 3-Step structured list mimicking the layout in the inspiration image */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d2bc82] font-bold">Artistic Guidelines</span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#fcfaf2]">
                Discover the Magic Within
              </h3>
            </div>

            <div className="space-y-6">
              {secretGuides.map((guide) => (
                <div 
                  key={guide.num} 
                  className="group flex items-start space-x-6 p-6 rounded-lg border border-white/5 bg-[#0f171f] hover:bg-[#16222b] hover:border-[#d2bc82]/20 transition-all duration-300"
                >
                  <span className="font-serif text-5xl text-[#d2bc82] opacity-40 group-hover:opacity-100 transition-opacity">
                    {guide.num}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-lg font-serif text-[#fcfaf2] group-hover:text-[#d2bc82] transition-colors">
                      {guide.title}
                    </h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- INTERACTIVE PALETTE BUILDER (The Atelier Studio) --- */}
      <section id="palette-tool" className="max-w-7xl mx-auto px-6 py-24 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <Palette className="w-8 h-8 text-[#d2bc82] mx-auto animate-spin-slow" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#d2bc82] font-bold block">The Atelier Sandbox</span>
          <h2 className="font-serif text-4xl text-[#fcfaf2]">Impressionist Color Synthesizer</h2>
          <p className="text-sm text-white/50 font-light">
            Write down a natural landscape mood, dream, or weather state below. Our engine will synthesize an authentic impressionist color palette based on Monet's artistic pigments.
          </p>
        </div>

        {/* Input Formulation */}
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleGenerateArt} className="space-y-4">
            <div className="relative rounded-md overflow-hidden border border-white/10 focus-within:border-[#d2bc82]/60 transition-all">
              <input 
                type="text" 
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="e.g., Violet water lilies in morning mist..." 
                className="w-full bg-[#131d25] px-5 py-4 text-sm text-[#fcfaf2] placeholder:text-white/30 focus:outline-none"
              />
              <button 
                type="submit" 
                disabled={isGenerating || !customPrompt.trim()}
                className="absolute right-2 top-2 bottom-2 bg-[#fcfaf2] hover:bg-[#eedba9] text-[#0d141b] px-4 rounded text-xs uppercase tracking-widest font-semibold transition-all disabled:opacity-40"
              >
                {isGenerating ? "Synthesizing..." : "Mix Pigments"}
              </button>
            </div>
          </form>
        </div>

        {/* Synthesized Output Display */}
        {generatedArtwork && (
          <div className="max-w-3xl mx-auto bg-[#131d25] rounded-lg border border-[#d2bc82]/20 p-8 space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#d2bc82] font-bold">Custom Impression</span>
                <h4 className="font-serif text-2xl text-white">{generatedArtwork.title}</h4>
                <p className="text-xs text-white/40 italic">Prompt: "{generatedArtwork.prompt}"</p>
              </div>
              <button 
                onClick={() => {
                  setGeneratedArtwork(null);
                  triggerToast("Palette cleared");
                }}
                className="text-xs text-white/40 hover:text-white underline"
              >
                Clear Masterpiece
              </button>
            </div>

            {/* Synthesized Palette */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {generatedArtwork.palette.map((color, idx) => (
                <div 
                  key={idx} 
                  onClick={() => copyColorToClipboard(color)}
                  className="group cursor-pointer bg-white/5 rounded p-3 border border-white/5 hover:border-white/20 transition-all text-center space-y-3"
                >
                  <div 
                    className="w-full h-16 rounded shadow-inner transition-transform group-hover:scale-[1.03]" 
                    style={{ backgroundColor: color }}
                  />
                  <div>
                    <span className="block text-xs uppercase text-white/50 tracking-wider">Pigment {idx + 1}</span>
                    <span className="font-serif text-sm text-[#d2bc82] block mt-0.5">{color}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Live Masterpiece Preview based on dynamic colors */}
            <div className="relative h-48 rounded overflow-hidden">
              <div 
                className="absolute inset-0 filter blur-2xl opacity-60 transition-all duration-1000"
                style={{
                  background: `linear-gradient(135deg, ${generatedArtwork.palette[0]} 0%, ${generatedArtwork.palette[1]} 50%, ${generatedArtwork.palette[2]} 100%)`
                }}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#d2bc82]">Atelier Virtual Projection</span>
                  <p className="text-sm text-white/90 font-light max-w-md">
                    "Colors are my day-long obsession, joy, and torment." Move your cursor over pigments to extract color data.
                  </p>
                </div>
              </div>
              <div className="absolute inset-4 border border-white/10 pointer-events-none"></div>
            </div>
          </div>
        )}

      </section>

      {/* --- MASTERPIECE FOCUS SECTION: Light Exploration --- */}
      <section className="bg-gradient-to-t from-[#0e171f] to-[#121c25] py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side column: The story and philosophy of painting light */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d2bc82] font-semibold">The Philosophy of Impression</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#fcfaf2] leading-tight">
                Painting the Air & the Changing Sky
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                For Claude Monet, the landscape did not exist in its own right, since its appearance changed at every moment. Rather, the surrounding atmosphere brought the subject to life—the light and the air which varied continuously.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-[#d2bc82]/10 text-[#d2bc82] rounded">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-white">The En Plein Air Technique</h4>
                    <p className="text-sm text-white/50 font-light">Painting directly outdoors in front of the subject, catching atmospheric shifts instantaneously.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-[#d2bc82]/10 text-[#d2bc82] rounded">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-white">Color Divisionism</h4>
                    <p className="text-sm text-white/50 font-light">Placing pure primary colors side by side instead of pre-mixing them, allowing the human eye to blend them from afar.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side column: Virtual Interactive Canvas Showcase */}
            <div className="lg:col-span-6">
              <div className="border border-white/10 rounded-lg p-6 bg-[#16222b] space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
                    <span className="text-xs uppercase tracking-widest text-[#d2bc82] font-semibold">Active Color Laboratory</span>
                  </div>
                  <span className="text-xs text-white/40 font-mono">ID: {selectedArt.id}</span>
                </div>

                <div className="relative h-64 w-full bg-[#0d141b] rounded overflow-hidden border border-white/5 flex items-center justify-center">
                  <div 
                    className="absolute inset-0 filter blur-3xl opacity-50 animate-pulse transition-all duration-1000"
                    style={{
                      background: `radial-gradient(circle, ${selectedArt.palette[1]} 0%, transparent 70%)`
                    }}
                  />
                  <div className="relative z-10 text-center space-y-3 p-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#d2bc82] block">Current Palette Matrix</span>
                    <h3 className="font-serif text-2xl text-white">{selectedArt.title}</h3>
                    <div className="flex justify-center space-x-2 pt-2">
                      {selectedArt.palette.map((color, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => copyColorToClipboard(color)}
                          className="px-3 py-1.5 rounded text-xs font-mono font-semibold cursor-pointer border border-white/10 hover:border-[#d2bc82]/40 transition-all"
                          style={{ backgroundColor: color + "20", color: color }}
                        >
                          {color}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-white/40 text-center italic">
                  Tip: Click on any HEX color pill to immediately copy the color code for your own slides or design documents.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- NEWSLETTER/REGISTRY & FOOTER --- */}
      <footer id="about" className="bg-[#0b1015] border-t border-white/10 pt-24 pb-12 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Newsletter Box styled as a Classical Museum Registry Book */}
          <div className="max-w-4xl mx-auto bg-[#101920] border border-white/5 p-8 sm:p-12 rounded-lg relative overflow-hidden text-center space-y-6">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#d2bc82] to-transparent"></div>
            
            <div className="space-y-2">
              <Mail className="w-8 h-8 text-[#d2bc82] mx-auto opacity-80" />
              <h3 className="font-serif text-3xl text-white">Join the Atelier Registry</h3>
              <p className="text-sm text-white/50 max-w-md mx-auto font-light">
                Receive beautiful monthly color digests, digital brush collections, and virtual exhibition dates straight to your inbox.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <form onSubmit={(e) => { e.preventDefault(); triggerToast("Successfully registered in the Atelier Archives!"); }} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address..." 
                  className="flex-1 bg-[#16222b] border border-white/10 text-[#fcfaf2] px-4 py-3 text-sm rounded focus:outline-none focus:border-[#d2bc82]/50"
                />
                <button 
                  type="submit" 
                  className="bg-[#fcfaf2] hover:bg-[#eedba9] text-[#0d141b] px-6 py-3 rounded text-xs uppercase tracking-widest font-semibold transition-all whitespace-nowrap"
                >
                  Register
                </button>
              </form>
            </div>
            
            <span className="text-[10px] uppercase tracking-widest text-white/30 block">
              Respecting your artistic privacy. Unsubscribe anytime.
            </span>
          </div>

          {/* Core Footer Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-white/5 text-sm text-white/50 font-light">
            
            {/* Col 1 */}
            <div className="md:col-span-5 space-y-4">
              <h4 className="font-serif text-xl text-[#fcfaf2]">Claude Monet digital art atelier</h4>
              <p className="max-w-sm text-xs leading-relaxed">
                A high-fidelity landing experience built to capture the light-shattering beauty of classic impressionism and color theory. Inspired by the Eatemp presentations layout.
              </p>
              <div className="flex items-center space-x-1 text-xs text-white/30">
                <span>Made with love for light & art</span>
                <Heart className="w-3.5 h-3.5 text-[#d2bc82] fill-[#d2bc82] mx-1" />
                <span>© {new Date().getFullYear()}</span>
              </div>
            </div>

            {/* Col 2 */}
            <div className="md:col-span-3 space-y-3">
              <h5 className="font-serif text-sm text-[#fcfaf2] uppercase tracking-wider">The Gardens</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#gallery" className="hover:text-white transition-colors">Giverny Pond</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Water Lily Studio</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Rouen Cathedrals</a></li>
                <li><a href="#secrets" className="hover:text-white transition-colors">Unicorn Woodland</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="md:col-span-4 space-y-3">
              <h5 className="font-serif text-sm text-[#fcfaf2] uppercase tracking-wider">Free presentation template download</h5>
              <p className="text-xs leading-relaxed max-w-xs">
                Capturing premium color palettes, font pairings, visual consistency, layout grids, and motion design.
              </p>
              <div className="pt-2">
                <a 
                  href="https://eatemp.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-[#d2bc82] hover:text-white transition-colors inline-flex items-center space-x-1.5 font-semibold uppercase tracking-wider"
                >
                  <span>Free Download at EaTemp.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          <div className="text-center text-[10px] text-white/20 uppercase tracking-[0.2em] border-t border-white/5 pt-6">
            Designed for artistic preservation. Monet paintings are public domain. Unsplash assets used under CC licenses.
          </div>

        </div>
      </footer>

    </div>
  );
}
7