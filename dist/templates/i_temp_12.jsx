import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Compass, 
  Moon, 
  Sun, 
  HelpCircle, 
  Layers, 
  Sliders, 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  User, 
  BookOpen, 
  RefreshCw,
  Maximize2,
  X
} from 'lucide-react';

export default function App() {
  // Navigation & View States
  const [activeTab, setActiveTab] = useState('scroll'); // 'scroll' (landing page) or 'deck' (presentation mode)
  const [activeSlide, setActiveSlide] = useState(0);
  const [zodiacSign, setZodiacSign] = useState('Aquarius');
  
  // Custom Oracle State & Gemini API Logic
  const [oracleName, setOracleName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [oracleResponse, setOracleResponse] = useState(null);
  const [loadingOracle, setLoadingOracle] = useState(false);
  const [oracleModal, setOracleModal] = useState(false);
  
  // Tarot Interaction State
  const [tarotFlipped, setTarotFlipped] = useState({ past: false, present: false, future: false });
  const [tarotSelected, setTarotSelected] = useState({ past: null, present: null, future: null });

  // Web Audio Ambient Synthesizer States
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioCtxRef = useRef(null);
  const droneOsc1Ref = useRef(null);
  const droneOsc2Ref = useRef(null);
  const filterNodeRef = useRef(null);
  const gainNodeRef = useRef(null);

  // Inject Custom Serif and Garamond Fonts for Ultimate Typographic Accuracy
  useEffect(() => {
    const link1 = document.createElement('link');
    link1.href = 'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500&display=swap';
    link1.rel = 'stylesheet';
    document.head.appendChild(link1);
    return () => {
      document.head.removeChild(link1);
    };
  }, []);

  // Web Audio Synth Engine (432Hz Solfeggio Meditation Drone)
  const toggleAmbientAudio = () => {
    if (audioEnabled) {
      // Fade out and stop
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 1.5);
        setTimeout(() => {
          try {
            droneOsc1Ref.current?.stop();
            droneOsc2Ref.current?.stop();
            audioCtxRef.current?.close();
          } catch (e) {
            console.log("Audio cleanup note:", e);
          }
          audioCtxRef.current = null;
          setAudioEnabled(false);
        }, 1600);
      }
    } else {
      // Initialize Web Audio
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        // Low pass filter to keep it dark and celestial
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(180, ctx.currentTime);
        filter.Q.setValueAtTime(1.5, ctx.currentTime);
        filterNodeRef.current = filter;

        // Gain node for smooth fades
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNodeRef.current = gainNode;

        // Base Frequency (Solfeggio Resonance)
        const fundamental = 216; // 432Hz Sub-Harmonic

        // Oscillator 1: Sine
        const osc1 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(fundamental, ctx.currentTime);
        
        // Oscillator 2: Sawtooth (filtered down heavily for warm harmonics)
        const osc2 = ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(fundamental * 1.5, ctx.currentTime); // Perfect fifth (324Hz)

        // Detuning LFO to create a slow, cosmic chorus beat
        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.08, ctx.currentTime); // extremely slow cycle
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(3, ctx.currentTime);

        // Connections
        lfo.connect(lfoGain);
        lfoGain.connect(osc1.frequency);
        
        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        // Start oscillators
        osc1.start();
        osc2.start();
        lfo.start();

        // Save references
        droneOsc1Ref.current = osc1;
        droneOsc2Ref.current = osc2;

        // Fade in gently
        gainNode.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 3);
        setAudioEnabled(true);
      } catch (err) {
        console.error("Web Audio could not initialize due to security policies or lack of support.", err);
      }
    }
  };

  // Cosmic Oracle (Gemini API Integration with Exponential Backoff)
  const generateBirthChart = async (e) => {
    e.preventDefault();
    if (!oracleName || !birthDate || !birthTime || !birthPlace) return;

    setLoadingOracle(true);
    setOracleModal(true);

    const apiKey = ""; // Injected dynamically at runtime
    const systemPrompt = "You are the ancient Grand Oracle of Aethelgard. Write a deeply poetic, mystic, and custom astrological chart synthesis for a seeker. Use rich, mysterious, gothic vocabulary, citing celestial alignment coordinates, moon phases, and planetary transits. Do not provide a generic modern reading; make it feel like a sacred woodcut grimoire manuscript from the 17th century.";
    const userQuery = `Name: ${oracleName}, Born: ${birthDate} at ${birthTime} in ${birthPlace}. Synthesize my sun sign, rising coordinates, and a prophetic warning for my immediate future path.`;

    const makeRequest = async () => {
      const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      };

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    };

    // Retry configuration (Exponential Backoff up to 5 times)
    let retries = 5;
    let delay = 1000;
    let success = false;
    let resultData = null;

    for (let i = 0; i < retries; i++) {
      try {
        resultData = await makeRequest();
        success = true;
        break;
      } catch (error) {
        if (i === retries - 1) {
          console.error("All API retries failed.");
        } else {
          await new Promise(res => setTimeout(res, delay));
          delay *= 2; // double delay time
        }
      }
    }

    if (success && resultData) {
      try {
        const generatedText = resultData.candidates?.[0]?.content?.parts?.[0]?.text;
        if (generatedText) {
          setOracleResponse({
            title: `The Celestial Alignment of ${oracleName}`,
            text: generatedText,
            timestamp: new Date().toLocaleDateString()
          });
        } else {
          throw new Error("Invalid response format");
        }
      } catch (e) {
        useOfflineReading();
      }
    } else {
      useOfflineReading();
    }
    setLoadingOracle(false);
  };

  // Offline backup generator in case API is unavailable
  const useOfflineReading = () => {
    const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    const chosenSign = signs[Math.floor(Math.random() * signs.length)];
    const propheticWarnings = [
      "The shadow of Saturn looms in your eighth house. A sudden financial or spiritual transition approaches. Guard your silent reflections, and burn white cedar to ward off the encroaching void.",
      "Jupiter emerges radiant behind the shroud of a midnight eclipse. An alignment of three stellar coordinates suggests a sudden, brilliant flash of revelation through a forgotten family secret.",
      "Venus ascends through a wet-moon crescent. Do not betray the secret keeper. A golden path of creative triumph awaits you near running riverwaters or a quiet ancient forest."
    ];

    setOracleResponse({
      title: `The Hand-Inscribed Codex of ${oracleName}`,
      text: `### Placements of Zenith\nBy decree of the high stars, your celestial alignment falls under the direct gaze of the cosmic wanderers. At the hour of **${birthTime}**, the celestial horizon of **${birthPlace}** bore witness to the ascension of the Ascendant cusp.\n\n### Stellar Transit Coordinates\n* **The Sun Cusp:** Aligned perfectly inside the ancient bounds of the celestial plane.\n* **The Moon Phase:** Waxing Crescent, bearing silent tidings of spiritual transition and renewal.\n* **Mercury's Gaze:** Retrograde aspect in the House of Memory, unlocking forgotten chambers of past ancestral bonds.\n\n### The Prophetic Oracle Warning\n${propheticWarnings[Math.floor(Math.random() * propheticWarnings.length)]}`,
      timestamp: new Date().toLocaleDateString()
    });
  };

  // Tarot Alignment Drawer
  const drawTarotCards = () => {
    const pastCards = [
      { name: "The Sun Arcana", meaning: "Past warmth, absolute clarity, and the brilliant actualization of ancestral light that brought you to this threshold.", icon: "☀" },
      { name: "The Hermit Cusp", meaning: "A long, dark phase of introspective solitude, reading old ink, and learning secrets from your own quiet whispers.", icon: "🕯" }
    ];
    const presentCards = [
      { name: "The Eclipse Portal", meaning: "You stand between shadow and light. Hidden blockages are being exposed by the brilliant, high crown of the celestial sun.", icon: "🌑" },
      { name: "The Wheel of Astrolabe", meaning: "The brass rings are rotating rapidly. Destiny spins; static comforts must be abandoned to catch the upward wind.", icon: "☸" }
    ];
    const futureCards = [
      { name: "The Starry Empyrean", meaning: "Unending pathways of silver light. Your soul's purpose aligned perfectly with high stellar grids.", icon: "✦" },
      { name: "The Astral Dragon", meaning: "Raw spiritual power, intense cosmic energy, and the destruction of old, limiting egos.", icon: "🐲" }
    ];

    setTarotSelected({
      past: pastCards[Math.floor(Math.random() * pastCards.length)],
      present: presentCards[Math.floor(Math.random() * presentCards.length)],
      future: futureCards[Math.floor(Math.random() * futureCards.length)]
    });
    setTarotFlipped({ past: false, present: false, future: false });
  };

  // Automatically draw tarot when component mounts
  useEffect(() => {
    drawTarotCards();
  }, []);

  // Zodiac Sign Reference Database (Inspired by the Zodiac Wheel in Slide 1)
  const zodiacData = {
    Aquarius: {
      element: "Air", planet: "Uranus & Saturn", stone: "Amethyst",
      text: "The celestial bearer of celestial water. Aligned with high intellect, future projections, and the divine flowing rivers of consciousness."
    },
    Pisces: {
      element: "Water", planet: "Neptune", stone: "Aquamarine",
      text: "The double astral fish swimming between dimensions. Placed at the edge of the physical plane, highly intuitive and mystical."
    },
    Aries: {
      element: "Fire", planet: "Mars", stone: "Diamond",
      text: "The radiant ignition of cosmic cycles. Full of solar authority, fierce inner focus, and absolute creative sovereignty."
    },
    Taurus: {
      element: "Earth", planet: "Venus", stone: "Emerald",
      text: "The sacred celestial bull anchoring solar light into fertile soils. Elegant, unwavering, and attuned to the luxury of silence."
    },
    Gemini: {
      element: "Air", planet: "Mercury", stone: "Alexandrite",
      text: "The celestial twin pillars. Balancing dark and light polarities, communicating mysteries through high-frequency tongues."
    },
    Cancer: {
      element: "Water", planet: "Moon", stone: "Ruby",
      text: "The lunar crustacean of high waters. Guarding the divine sanctuary of deep emotions, dreaming beneath the silver crescent tides."
    },
    Leo: {
      element: "Fire", planet: "Sun", stone: "Peridot",
      text: "The sovereign golden lion roaring at the zenith. The pure actualization of ego-light, leadership, and celestial warmth."
    },
    Virgo: {
      element: "Earth", planet: "Mercury", stone: "Sapphire",
      text: "The meticulous celestial scribe. Purifying divine cosmic geometry and mapping stars with detailed scientific devotion."
    },
    Libra: {
      element: "Air", planet: "Venus", stone: "Opal",
      text: "The cosmic scales balancing day and night. Crafting holy aesthetics, peaceful geometry, and perfect relational alignments."
    },
    Scorpio: {
      element: "Water", planet: "Pluto & Mars", stone: "Topaz",
      text: "The guardian of death, rebirth, and dark primordial caverns. Unraveling secret matrices and holding absolute mystic gaze."
    },
    Sagittarius: {
      element: "Fire", planet: "Jupiter", stone: "Turquoise",
      text: "The stellar archer launching arrows of fire into the infinite cosmos. Seeking wild cosmic wisdom and untethered freedoms."
    },
    Capricorn: {
      element: "Earth", planet: "Saturn", stone: "Garnet",
      text: "The ancient sea-goat climbing the high mountains of deep memory. Patient architect of physical grids and cosmic hierarchies."
    }
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % 5);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + 5) % 5);
  };

  return (
    <div className="min-h-screen bg-[#dfd5c6] py-3 px-3 md:py-8 md:px-8 font-serif selection:bg-[#dfba73]/30 selection:text-white transition-all duration-700">
      
      {/* BACKGROUND GRAPHIC (Paper grain texture layer + outer frame styling) */}
      <div className="max-w-[1400px] mx-auto bg-[#070e20] shadow-[0_15px_60px_rgba(0,0,0,0.8)] rounded-xl overflow-hidden relative border-double border-4 border-[#dfba73]/60">
        
        {/* Stellar Background Overlay */}
        <div className="absolute inset-0 opacity-25 pointer-events-none mix-blend-color-dodge bg-[radial-gradient(#dfba73_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* HEADER BAR (Inspired by presentation header) */}
        <header className="border-b border-[#dfba73]/30 bg-[#050a18]/90 backdrop-blur-md sticky top-0 z-40 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Compass className="w-8 h-8 text-[#dfba73] animate-spin-slow" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-[0.25em] uppercase text-gradient bg-gradient-to-r from-[#dfba73] via-[#ffdf9e] to-[#c59d5c] bg-clip-text text-transparent font-sans">
                Aethelgard
              </h1>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#dfba73]/60 -mt-1">Celestial Mechanics & Alignment</p>
            </div>
          </div>

          {/* Interactive Navigation Mode Controls */}
          <div className="flex items-center flex-wrap gap-2">
            <button 
              onClick={() => setActiveTab('scroll')}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'scroll' 
                  ? 'bg-[#dfba73] text-[#070e20] font-semibold' 
                  : 'bg-white/5 text-[#dfd5c6]/70 border border-[#dfba73]/20 hover:bg-white/10'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Cosmic Scroll
            </button>
            <button 
              onClick={() => setActiveTab('deck')}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'deck' 
                  ? 'bg-[#dfba73] text-[#070e20] font-semibold' 
                  : 'bg-white/5 text-[#dfd5c6]/70 border border-[#dfba73]/20 hover:bg-white/10'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              Altar Presentation Deck
            </button>
          </div>

          {/* Ambient Synth Controller */}
          <button 
            onClick={toggleAmbientAudio}
            className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
              audioEnabled 
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' 
                : 'bg-white/5 text-[#dfba73]/80 border border-[#dfba73]/20 hover:bg-white/10'
            }`}
            title="Toggle meditative ambient space synthesizer (432Hz)"
          >
            {audioEnabled ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            {audioEnabled ? 'Synth Active' : 'Solfeggio Soundscape'}
          </button>
        </header>

        {/* MAIN BODY LAYOUT */}
        <main className="p-4 md:p-8">

          {/* VIEW MODE 1: SCROLLABLE LANDING PAGE */}
          {activeTab === 'scroll' && (
            <div className="space-y-16">
              
              {/* HERO SECTION / SLIDE 1 (TITLE SLIDE RECREATION) */}
              <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 relative">
                
                {/* Hanging Ornaments Overlay */}
                <div className="absolute top-0 left-10 hidden lg:block animate-swing origin-top">
                  <svg width="40" height="240" viewBox="0 0 40 240" fill="none" className="stroke-[#dfba73]/70">
                    <line x1="20" y1="0" x2="20" y2="180" strokeWidth="1" strokeDasharray="2 4" />
                    <circle cx="20" cy="180" r="5" fill="none" strokeWidth="1.5" />
                    <line x1="20" y1="185" x2="20" y2="210" strokeWidth="1" />
                    {/* Crescent Moon */}
                    <path d="M12,215 A12,12 0 1,0 28,227 A9,9 0 1,1 12,215 Z" fill="#dfba73" stroke="none" />
                    <circle cx="35" cy="140" r="2" fill="#dfba73" />
                    <circle cx="5" cy="90" r="1.5" fill="#dfba73" />
                  </svg>
                </div>

                <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-16 z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#dfba73]/30 rounded-full bg-[#dfba73]/5">
                    <Sparkles className="w-3 h-3 text-[#dfba73]" />
                    <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#dfba73]">The Sacred Alignment Manual</span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-4xl md:text-7xl font-light text-[#dfd5c6] font-serif leading-tight">
                      Reveal the <br />
                      <span className="font-serif italic font-semibold text-gradient bg-gradient-to-r from-[#dfba73] via-[#ffdf9e] to-[#dfba73] bg-clip-text text-transparent">
                        Architecture
                      </span> <br />
                      of Your Path
                    </h2>
                    <div className="w-32 h-[1px] bg-gradient-to-r from-[#dfba73] to-transparent my-6"></div>
                    <p className="text-[#dfd5c6]/70 text-lg max-w-xl font-sans font-light leading-relaxed">
                      Aethelgard synthesizes classical astronomical mathematics with the hermetic sciences to project your transit coordinates and soul vectors.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a href="#oracle" className="px-6 py-3 bg-[#dfba73] hover:bg-[#ffdf9e] text-[#070e20] font-sans font-semibold tracking-wider uppercase text-xs transition-all duration-300 flex items-center gap-2 rounded shadow-lg shadow-[#dfba73]/20">
                      Consult Birth Oracle <ArrowRight className="w-4 h-4" />
                    </a>
                    <button onClick={() => { setActiveTab('deck'); setActiveSlide(0); }} className="px-6 py-3 border border-[#dfba73]/40 hover:bg-[#dfba73]/10 text-[#dfba73] font-sans tracking-wider uppercase text-xs transition-all duration-300 rounded">
                      Explore Presentation Deck
                    </button>
                  </div>

                  {/* Quick coordinates tag */}
                  <div className="flex items-center gap-8 text-[11px] font-mono text-[#dfba73]/50 border-t border-[#dfba73]/10 pt-6 max-w-md">
                    <div>ALTITUDE: <span className="text-[#dfd5c6]/80">42° 21' N</span></div>
                    <div>AZIMUTH: <span className="text-[#dfd5c6]/80">216.4° Zenith</span></div>
                    <div>DECLINATION: <span className="text-[#dfd5c6]/80">-15.12°</span></div>
                  </div>
                </div>

                {/* Right Side: Rotating Zodiac Astrolabe */}
                <div className="lg:col-span-5 flex justify-center items-center relative z-10 py-8">
                  <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center">
                    
                    {/* Shadowy Hands overlay representation (Glow backing) */}
                    <div className="absolute inset-0 bg-[#dfba73]/5 rounded-full filter blur-xl animate-pulse"></div>
                    
                    {/* Rotating Brass Outer Astrolabe Frame */}
                    <div className="absolute inset-0 border-2 border-dashed border-[#dfba73]/40 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-4 border border-[#dfba73]/20 rounded-full animate-spin-reverse"></div>

                    {/* Astronomical Ring with Degrees */}
                    <div className="absolute inset-8 border-2 border-[#dfba73]/60 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="absolute w-full h-full rotate-45 select-none opacity-80">
                        <defs>
                          <path id="ring-text-path" d="M 50,50 m -43,0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0" />
                        </defs>
                        <text className="fill-[#dfba73] text-[4.5px] tracking-[1.5px] uppercase font-mono">
                          <textPath href="#ring-text-path" startOffset="0%">
                            ✦ ASCENDANT ✦ TRANSIT ✦ ZENITH ✦ MIDHEAVEN ✦ NADIR ✦ ECLIPTIC VECTOR
                          </textPath>
                        </text>
                      </svg>
                    </div>

                    {/* Inner Celestial Sun-Disc with Signs Selector */}
                    <div className="absolute inset-16 bg-[#09132d] border border-[#dfba73] rounded-full flex items-center justify-center shadow-2xl overflow-hidden group">
                      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen bg-[radial-gradient(#dfba73_1px,transparent_1px)] [background-size:12px_12px]"></div>
                      
                      {/* Detailed SVG Sunface inside */}
                      <svg viewBox="0 0 100 100" className="w-[180px] h-[180px] text-[#dfba73]">
                        {/* Sunbeams */}
                        <g className="animate-pulse">
                          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                            <line 
                              key={deg}
                              x1="50" y1="12" x2="50" y2="2" 
                              stroke="#dfba73" strokeWidth="0.8" 
                              transform={`rotate(${deg} 50 50)`} 
                            />
                          ))}
                        </g>
                        <circle cx="50" cy="50" r="32" fill="#050a18" stroke="#dfba73" strokeWidth="0.5" />
                        
                        {/* Mystic Eyes & Celestial Lips representation */}
                        <path d="M 38 46 Q 44 48 45 44" stroke="#dfba73" strokeWidth="0.7" fill="none" />
                        <path d="M 62 46 Q 56 48 55 44" stroke="#dfba73" strokeWidth="0.7" fill="none" />
                        <circle cx="415" cy="45" r="1.5" className="fill-[#dfba73]" />
                        <path d="M 44 58 Q 50 62 56 58" stroke="#dfba73" strokeWidth="0.7" fill="none" />
                        <path d="M 42 58 Q 50 55 58 58" stroke="#dfba73" strokeWidth="0.5" fill="none" />
                        <path d="M 46 51 A 4,4 0 0,0 54,51" fill="none" stroke="#dfba73" strokeWidth="0.5" />
                        
                        {/* Decorative Star Constellation Overlay */}
                        <g opacity="0.4" stroke="#dfba73" strokeWidth="0.3" fill="none">
                          <polyline points="22,30 35,28 39,20 48,22" />
                          <circle cx="22" cy="30" r="1" fill="#dfba73" />
                          <circle cx="35" cy="28" r="1" fill="#dfba73" />
                          <circle cx="39" cy="20" r="1.5" fill="#dfba73" />
                          <circle cx="48" cy="22" r="1" fill="#dfba73" />
                        </g>
                      </svg>

                      {/* Display Selected Sign Indicator */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#050a18]/90 border border-[#dfba73]/40 px-3 py-1 rounded text-center">
                        <div className="text-[8px] tracking-widest text-[#dfba73]/70 uppercase">Aligned Zodiac</div>
                        <div className="text-xs font-semibold text-white tracking-wider">{zodiacSign}</div>
                      </div>
                    </div>

                    {/* Interactive Clickable Star-anchors around Ecliptic to change active zodiac */}
                    {Object.keys(zodiacData).map((sign, index) => {
                      const angle = (index * (360 / 12)) * (Math.PI / 180);
                      const r = 160; // radius
                      const x = r * Math.cos(angle);
                      const y = r * Math.sin(angle);
                      const isActive = zodiacSign === sign;
                      return (
                        <button
                          key={sign}
                          onClick={() => setZodiacSign(sign)}
                          style={{ transform: `translate(${x}px, ${y}px)` }}
                          className={`absolute w-8 h-8 rounded-full border flex items-center justify-center text-[10px] transition-all duration-300 font-mono ${
                            isActive 
                              ? 'bg-[#dfba73] border-[#dfba73] text-[#070e20] scale-125 z-20 shadow-[0_0_12px_#dfba73]' 
                              : 'bg-[#070e20] border-[#dfba73]/40 text-[#dfba73]/80 hover:bg-[#dfba73]/20'
                          }`}
                          title={`Select ${sign}`}
                        >
                          {sign.substring(0, 3).toUpperCase()}
                        </button>
                      );
                    })}

                  </div>
                </div>

              </section>

              {/* ACTIVE ZODIAC BRIEF CARD (Beautifully detailed description container) */}
              <section className="relative max-w-4xl mx-auto px-1">
                <div className="bg-[#0c1328]/80 border-double border-4 border-[#dfba73]/60 p-6 rounded-lg relative overflow-hidden shadow-inner">
                  
                  {/* Decorative Corner Stars */}
                  <span className="absolute top-2 left-2 text-[#dfba73] text-sm">✦</span>
                  <span className="absolute top-2 right-2 text-[#dfba73] text-sm">✦</span>
                  <span className="absolute bottom-2 left-2 text-[#dfba73] text-sm">✦</span>
                  <span className="absolute bottom-2 right-2 text-[#dfba73] text-sm">✦</span>

                  {/* Woodcut cloud background visual styling */}
                  <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none w-48 h-24">
                    <svg viewBox="0 0 100 50" fill="none" stroke="#dfba73" strokeWidth="0.5">
                      <path d="M10,40 C15,30 25,30 30,35 C35,25 50,20 60,30 C70,25 85,25 90,40 Z" />
                      <path d="M5,45 C15,38 30,35 40,42 C50,35 70,33 80,43" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    <div className="md:border-r border-[#dfba73]/20 md:pr-6 space-y-2">
                      <h4 className="text-xs uppercase tracking-[0.2em] text-[#dfba73]/70 font-sans">Aligned Sign Sphere</h4>
                      <h3 className="text-2xl font-bold tracking-wider text-[#dfd5c6] font-serif">{zodiacSign}</h3>
                      <div className="inline-flex gap-2 text-[10px] uppercase tracking-widest text-[#dfba73] font-mono">
                        <span>{zodiacData[zodiacSign].element}</span> • <span>{zodiacData[zodiacSign].planet}</span>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 space-y-4">
                      <p className="text-sm italic text-[#dfd5c6]/90 font-serif leading-relaxed">
                        "{zodiacData[zodiacSign].text}"
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                        <div>
                          <span className="text-[#dfba73]/60 uppercase block text-[10px] tracking-wider">Planetary Aspect</span>
                          <span className="text-white/80">{zodiacData[zodiacSign].planet}</span>
                        </div>
                        <div>
                          <span className="text-[#dfba73]/60 uppercase block text-[10px] tracking-wider">Sacred Crystal</span>
                          <span className="text-white/80">{zodiacData[zodiacSign].stone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* THREE-COLUMN LAYOUT: PILLARS OF ALIGNMENT */}
              {/* This is a direct reference to the layout architecture of the bottom slide in the image */}
              <section className="space-y-8 relative">
                <div className="text-center space-y-2">
                  <span className="text-xs tracking-[0.3em] uppercase text-[#dfba73]/70 block">Dynamic Coordinates</span>
                  <h3 className="text-3xl font-light tracking-wide text-white">The Pillars of Celestial Alignment</h3>
                  <div className="w-16 h-[1px] bg-[#dfba73] mx-auto mt-2"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-1 relative">
                  
                  {/* Container 1 (With ribbon style from image) */}
                  <div className="bg-[#091124] border border-[#dfba73]/40 p-1 rounded relative shadow-xl hover:shadow-[#dfba73]/5 transition-all duration-300">
                    <div className="border border-[#dfba73]/20 p-6 rounded h-full flex flex-col justify-between relative overflow-hidden">
                      
                      {/* Decorative Ribbon hanging from top */}
                      <div className="absolute top-0 right-6 w-5 h-20 bg-gradient-to-b from-blue-900 to-[#dfba73]/30 border-l border-r border-[#dfba73]/40 flex flex-col items-center justify-end pb-2">
                        <span className="text-[8px] text-[#dfba73]">✦</span>
                      </div>

                      <div className="space-y-4 relative z-10 pr-6">
                        <div className="w-10 h-10 rounded-full border border-[#dfba73]/40 flex items-center justify-center bg-white/5">
                          <Moon className="w-5 h-5 text-[#dfba73]" />
                        </div>
                        <h4 className="text-xl font-medium tracking-wide text-[#dfd5c6]">Luna Coordinates</h4>
                        <p className="text-xs text-[#dfd5c6]/70 leading-relaxed font-sans font-light">
                          Our algorithms calculate the precise lunar coordinate cusp to unveil your emotional memory reservoirs and ancestral sleep dynamics.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-[#dfba73]/10 mt-6 flex justify-between items-center text-xs text-[#dfba73]">
                        <span className="font-mono">Placements Alpha</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Container 2 (Elevated slightly higher with golden aura glow) */}
                  <div className="bg-[#0d162f] border-2 border-[#dfba73]/60 p-1 rounded relative shadow-[0_0_20px_rgba(223,186,115,0.15)] transform md:-translate-y-2 transition-all duration-300">
                    <div className="border border-[#dfba73]/30 p-6 rounded h-full flex flex-col justify-between relative overflow-hidden">
                      
                      {/* Decorative Corner Stars */}
                      <span className="absolute top-2 left-2 text-[#dfba73] text-xs">✦</span>
                      <span className="absolute top-2 right-2 text-[#dfba73] text-xs">✦</span>

                      <div className="space-y-4 relative z-10">
                        <div className="w-10 h-10 rounded-full border border-[#dfba73] flex items-center justify-center bg-[#dfba73]/10 shadow-[0_0_8px_#dfba73/50]">
                          <Sparkles className="w-5 h-5 text-[#dfba73]" />
                        </div>
                        <h4 className="text-xl font-bold tracking-wide text-[#dfba73]">Zenith Coordinates</h4>
                        <p className="text-xs text-[#dfd5c6] leading-relaxed font-sans font-light">
                          The highest astrological point in your native sky. This vector dictating absolute spiritual purpose, legacy generation, and raw vocational authority.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-[#dfba73]/20 mt-6 flex justify-between items-center text-xs text-[#dfba73] font-semibold">
                        <span className="font-mono">Midheaven Orbit</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Container 3 */}
                  <div className="bg-[#091124] border border-[#dfba73]/40 p-1 rounded relative shadow-xl hover:shadow-[#dfba73]/5 transition-all duration-300">
                    <div className="border border-[#dfba73]/20 p-6 rounded h-full flex flex-col justify-between relative overflow-hidden">
                      
                      {/* Decorative Ribbon hanging from top */}
                      <div className="absolute top-0 right-6 w-5 h-20 bg-gradient-to-b from-[#dfba73]/10 to-[#dfba73]/40 border-l border-r border-[#dfba73]/40 flex flex-col items-center justify-end pb-2">
                        <span className="text-[8px] text-[#dfba73]">✦</span>
                      </div>

                      <div className="space-y-4 relative z-10 pr-6">
                        <div className="w-10 h-10 rounded-full border border-[#dfba73]/40 flex items-center justify-center bg-white/5">
                          <Sun className="w-5 h-5 text-[#dfba73]" />
                        </div>
                        <h4 className="text-xl font-medium tracking-wide text-[#dfd5c6]">Solar Coordinates</h4>
                        <p className="text-xs text-[#dfd5c6]/70 leading-relaxed font-sans font-light">
                          Determines the core atomic power of your current Earth physical vessel. Unlocking vitality structures, ego-clarity, and solar actualization pathways.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-[#dfba73]/10 mt-6 flex justify-between items-center text-xs text-[#dfba73]">
                        <span className="font-mono">Placements Omega</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* DYNAMIC FORM SECTION: THE BIRTH CHART ORACLE (Gemini API Enabled) */}
              <section id="oracle" className="max-w-4xl mx-auto relative pt-4">
                
                {/* Woodcut Clouds & Stars Border Layout */}
                <div className="bg-[#050a18] border-double border-4 border-[#dfba73]/70 p-6 md:p-10 rounded-lg relative overflow-hidden shadow-2xl">
                  
                  {/* Decorative Corner Filigree SVGs */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#dfba73] m-2"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#dfba73] m-2"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#dfba73] m-2"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#dfba73] m-2"></div>

                  <div className="relative z-10 space-y-6">
                    <div className="text-center space-y-2">
                      <div className="inline-block text-[#dfba73] tracking-[0.25em] text-xs font-mono uppercase">Consult the Grand Oracle</div>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-wide text-white">Synthesize Your Ancient Birth Chart</h3>
                      <p className="text-xs text-[#dfd5c6]/60 font-sans max-w-xl mx-auto">
                        Submit your birth coordinates to Aethelgard. Our deep neural networks and hermetic logic systems will scribe a custom celestial alignment chart.
                      </p>
                    </div>

                    <form onSubmit={generateBirthChart} className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs font-sans">
                      
                      <div className="space-y-1">
                        <label className="text-[#dfba73] font-mono tracking-widest block uppercase text-[10px]">Your Seeker Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 w-4 h-4 text-[#dfba73]/50" />
                          <input 
                            type="text" 
                            required
                            placeholder="e.g., Katherine of Alexandria" 
                            value={oracleName}
                            onChange={(e) => setOracleName(e.target.value)}
                            className="w-full bg-[#070e20] border border-[#dfba73]/30 focus:border-[#dfba73] text-white pl-10 pr-4 py-2.5 rounded outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[#dfba73] font-mono tracking-widest block uppercase text-[10px]">Date of Solar Ingress</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-[#dfba73]/50" />
                          <input 
                            type="date" 
                            required
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className="w-full bg-[#070e20] border border-[#dfba73]/30 focus:border-[#dfba73] text-white pl-10 pr-4 py-2.5 rounded outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[#dfba73] font-mono tracking-widest block uppercase text-[10px]">Hour of Alignment (Local Time)</label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-2.5 w-4 h-4 text-[#dfba73]/50" />
                          <input 
                            type="time" 
                            required
                            value={birthTime}
                            onChange={(e) => setBirthTime(e.target.value)}
                            className="w-full bg-[#070e20] border border-[#dfba73]/30 focus:border-[#dfba73] text-white pl-10 pr-4 py-2.5 rounded outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[#dfba73] font-mono tracking-widest block uppercase text-[10px]">Geographical Coordinates (City, Country)</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-[#dfba73]/50" />
                          <input 
                            type="text" 
                            required
                            placeholder="e.g., Venice, Italy" 
                            value={birthPlace}
                            onChange={(e) => setBirthPlace(e.target.value)}
                            className="w-full bg-[#070e20] border border-[#dfba73]/30 focus:border-[#dfba73] text-white pl-10 pr-4 py-2.5 rounded outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2 pt-4">
                        <button 
                          type="submit"
                          className="w-full py-3.5 bg-gradient-to-r from-[#c59d5c] via-[#dfba73] to-[#c59d5c] hover:opacity-90 text-[#050a18] font-bold uppercase tracking-widest rounded transition-all duration-300 flex items-center justify-center gap-2 text-xs"
                        >
                          <Sparkles className="w-4 h-4 animate-spin-slow" />
                          Synthesize Celestial Coordinates
                        </button>
                      </div>

                    </form>

                  </div>

                </div>
              </section>

              {/* TAROT CARD DRAW SYSTEM */}
              <section className="space-y-8 relative max-w-5xl mx-auto">
                <div className="text-center space-y-2">
                  <span className="text-xs tracking-[0.3em] uppercase text-[#dfba73]/70 block">Hermetic Guidance</span>
                  <h3 className="text-3xl font-light tracking-wide text-white">Daily Tarot Alignment</h3>
                  <p className="text-xs text-[#dfd5c6]/60 max-w-md mx-auto font-sans">
                    Reveal the current spiritual influences guiding your past memories, present boundaries, and upcoming future horizons.
                  </p>
                  <button 
                    onClick={drawTarotCards}
                    className="inline-flex items-center gap-2 px-4 py-1.5 mt-2 text-xs uppercase tracking-wider text-[#dfba73] border border-[#dfba73]/30 rounded-full hover:bg-[#dfba73]/10 transition-all"
                  >
                    <RefreshCw className="w-3 h-3" /> Reshuffle Celestial Deck
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  
                  {/* PAST CARD */}
                  <div 
                    onClick={() => setTarotFlipped(prev => ({ ...prev, past: !prev.past }))}
                    className="cursor-pointer group perspective h-80"
                  >
                    <div className={`relative w-full h-full duration-700 preserve-3d ${tarotFlipped.past ? 'rotate-y-180' : ''}`}>
                      
                      {/* CARD BACK */}
                      <div className="absolute inset-0 backface-hidden bg-[#0a1228] border-double border-4 border-[#dfba73]/70 rounded-lg p-4 flex flex-col items-center justify-between shadow-xl">
                        <div className="w-full flex justify-between text-xs text-[#dfba73]/50 font-mono">
                          <span>PAST</span>
                          <span>✦</span>
                        </div>
                        {/* Elegant Mystic Pattern */}
                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#dfba73]/40 flex items-center justify-center animate-spin-slow">
                          <Compass className="w-10 h-10 text-[#dfba73]/40" />
                        </div>
                        <span className="text-[10px] text-[#dfba73]/70 tracking-widest uppercase font-mono">Reveal Past Alignment</span>
                      </div>

                      {/* CARD FRONT */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#060a16] border border-[#dfba73]/80 rounded-lg p-6 flex flex-col justify-between shadow-2xl text-[#dfd5c6]">
                        <div className="flex justify-between items-center border-b border-[#dfba73]/30 pb-2">
                          <span className="text-xs uppercase tracking-widest text-[#dfba73] font-mono">Past Influences</span>
                          <span className="text-lg text-[#dfba73]">{tarotSelected.past?.icon}</span>
                        </div>
                        <div className="space-y-2 py-4">
                          <h4 className="text-xl font-bold text-[#dfba73] font-serif">{tarotSelected.past?.name}</h4>
                          <p className="text-xs text-[#dfd5c6]/80 leading-relaxed font-sans font-light">
                            {tarotSelected.past?.meaning}
                          </p>
                        </div>
                        <span className="text-[9px] text-[#dfba73]/50 tracking-wider text-center block font-mono">AETHELGARD NO. XII</span>
                      </div>

                    </div>
                  </div>

                  {/* PRESENT CARD */}
                  <div 
                    onClick={() => setTarotFlipped(prev => ({ ...prev, present: !prev.present }))}
                    className="cursor-pointer group perspective h-80"
                  >
                    <div className={`relative w-full h-full duration-700 preserve-3d ${tarotFlipped.present ? 'rotate-y-180' : ''}`}>
                      
                      {/* CARD BACK */}
                      <div className="absolute inset-0 backface-hidden bg-[#0a1228] border-double border-4 border-[#dfba73]/70 rounded-lg p-4 flex flex-col items-center justify-between shadow-xl">
                        <div className="w-full flex justify-between text-xs text-[#dfba73]/50 font-mono">
                          <span>PRESENT</span>
                          <span>✦</span>
                        </div>
                        {/* Elegant Mystic Pattern */}
                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#dfba73]/40 flex items-center justify-center animate-spin-reverse">
                          <Moon className="w-10 h-10 text-[#dfba73]/40" />
                        </div>
                        <span className="text-[10px] text-[#dfba73]/70 tracking-widest uppercase font-mono">Reveal Present Alignment</span>
                      </div>

                      {/* CARD FRONT */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#060a16] border border-[#dfba73]/80 rounded-lg p-6 flex flex-col justify-between shadow-2xl text-[#dfd5c6]">
                        <div className="flex justify-between items-center border-b border-[#dfba73]/30 pb-2">
                          <span className="text-xs uppercase tracking-widest text-[#dfba73] font-mono">Present Sphere</span>
                          <span className="text-lg text-[#dfba73]">{tarotSelected.present?.icon}</span>
                        </div>
                        <div className="space-y-2 py-4">
                          <h4 className="text-xl font-bold text-[#dfba73] font-serif">{tarotSelected.present?.name}</h4>
                          <p className="text-xs text-[#dfd5c6]/80 leading-relaxed font-sans font-light">
                            {tarotSelected.present?.meaning}
                          </p>
                        </div>
                        <span className="text-[9px] text-[#dfba73]/50 tracking-wider text-center block font-mono">AETHELGARD NO. VII</span>
                      </div>

                    </div>
                  </div>

                  {/* FUTURE CARD */}
                  <div 
                    onClick={() => setTarotFlipped(prev => ({ ...prev, future: !prev.future }))}
                    className="cursor-pointer group perspective h-80"
                  >
                    <div className={`relative w-full h-full duration-700 preserve-3d ${tarotFlipped.future ? 'rotate-y-180' : ''}`}>
                      
                      {/* CARD BACK */}
                      <div className="absolute inset-0 backface-hidden bg-[#0a1228] border-double border-4 border-[#dfba73]/70 rounded-lg p-4 flex flex-col items-center justify-between shadow-xl">
                        <div className="w-full flex justify-between text-xs text-[#dfba73]/50 font-mono">
                          <span>FUTURE</span>
                          <span>✦</span>
                        </div>
                        {/* Elegant Mystic Pattern */}
                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#dfba73]/40 flex items-center justify-center animate-spin-slow">
                          <Sun className="w-10 h-10 text-[#dfba73]/40" />
                        </div>
                        <span className="text-[10px] text-[#dfba73]/70 tracking-widest uppercase font-mono">Reveal Future Alignment</span>
                      </div>

                      {/* CARD FRONT */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#060a16] border border-[#dfba73]/80 rounded-lg p-6 flex flex-col justify-between shadow-2xl text-[#dfd5c6]">
                        <div className="flex justify-between items-center border-b border-[#dfba73]/30 pb-2">
                          <span className="text-xs uppercase tracking-widest text-[#dfba73] font-mono">Future Destinies</span>
                          <span className="text-lg text-[#dfba73]">{tarotSelected.future?.icon}</span>
                        </div>
                        <div className="space-y-2 py-4">
                          <h4 className="text-xl font-bold text-[#dfba73] font-serif">{tarotSelected.future?.name}</h4>
                          <p className="text-xs text-[#dfd5c6]/80 leading-relaxed font-sans font-light">
                            {tarotSelected.future?.meaning}
                          </p>
                        </div>
                        <span className="text-[9px] text-[#dfba73]/50 tracking-wider text-center block font-mono">AETHELGARD NO. XXIV</span>
                      </div>

                    </div>
                  </div>

                </div>
              </section>

            </div>
          )}


          {/* VIEW MODE 2: RECREATION OF THE PRESENTATION SLIDE DECK VIEW */}
          {activeTab === 'deck' && (
            <div className="space-y-8 max-w-[1200px] mx-auto py-4">
              
              {/* SLIDE WINDOW WRAPPER */}
              {/* Framed perfectly inside the beige borders mimicking the exact slide design layout */}
              <div className="w-full aspect-[16/9] bg-[#050a18] border-double border-8 border-[#dfba73] relative overflow-hidden flex flex-col justify-between p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.9)] rounded">
                
                {/* Embedded Stars / Constellations details background */}
                <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-color-dodge bg-[radial-gradient(#dfba73_1px,transparent_1px)] [background-size:20px_20px]"></div>

                {/* SLIDE CONTENT RENDERING SWITCH */}
                {activeSlide === 0 && (
                  <div className="grid grid-cols-12 h-full items-center gap-6 relative">
                    {/* SLIDE 1: Title & Hero Cover Slide */}
                    
                    {/* Hanging gold star decoration left */}
                    <div className="absolute top-0 left-0 hidden md:block animate-swing origin-top">
                      <svg width="30" height="150" viewBox="0 0 30 150" fill="none" className="stroke-[#dfba73]/70">
                        <line x1="15" y1="0" x2="15" y2="110" strokeWidth="1" strokeDasharray="1 3" />
                        <polygon points="15,110 18,120 12,120" fill="#dfba73" />
                        <circle cx="15" cy="130" r="4" fill="none" strokeWidth="1" />
                        <path d="M10,140 L20,140 L15,135 Z" fill="#dfba73" />
                      </svg>
                    </div>

                    <div className="col-span-7 space-y-6">
                      <h2 className="text-4xl md:text-7xl font-bold font-serif tracking-wide text-white leading-none">
                        Lorem <br />
                        <span className="font-sans italic text-gradient bg-gradient-to-r from-[#dfba73] to-[#c59d5c] bg-clip-text text-transparent pl-4">
                          Ipsum
                        </span>
                      </h2>
                      <div className="h-[2px] w-64 bg-gradient-to-r from-[#dfba73] to-transparent"></div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[#dfba73] font-sans">
                        Lorem Ipsum &amp; Lorem Ipsum
                      </p>
                    </div>

                    {/* Astrolabe graphic right */}
                    <div className="col-span-5 flex justify-center">
                      <div className="relative w-72 h-72 rounded-full border border-[#dfba73]/30 flex items-center justify-center animate-spin-slow">
                        <div className="absolute inset-2 border border-dashed border-[#dfba73]/20 rounded-full"></div>
                        <div className="absolute inset-6 border border-[#dfba73]/40 rounded-full flex items-center justify-center">
                          <svg viewBox="0 0 100 100" className="w-24 h-24 text-[#dfba73] animate-pulse">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#dfba73" strokeWidth="0.5" />
                            <circle cx="50" cy="50" r="28" fill="none" stroke="#dfba73" strokeWidth="0.5" />
                            {/* Moon face vector representation */}
                            <path d="M 40,35 A 15,15 0 0,0 60,65 A 10,10 0 1,1 40,35 Z" fill="#dfba73" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Info bar */}
                    <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] font-mono text-[#dfba73]/60">
                      <span>PRESENTATION FOR ASTROLOGER</span>
                      <span>@KVIIMA</span>
                    </div>
                  </div>
                )}

                {activeSlide === 1 && (
                  <div className="grid grid-cols-12 h-full items-center gap-8 relative">
                    {/* SLIDE 2: Solar Sun Eclipse Woodcut slide */}
                    
                    <div className="col-span-7 space-y-4">
                      <h3 className="text-3xl md:text-5xl font-bold font-serif text-[#dfd5c6]">Lorem Ipsum</h3>
                      <p className="text-xs text-[#dfd5c6]/80 leading-relaxed font-sans font-light">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                      </p>
                      <p className="text-xs text-[#dfba73] italic font-serif">
                        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet..."
                      </p>
                    </div>

                    <div className="col-span-5 flex justify-center">
                      {/* Sun face and Crescent Moon intersecting (Woodcut Style) */}
                      <div className="w-64 h-64 bg-[#091124] border border-[#dfba73]/40 p-1 rounded-full relative shadow-lg">
                        <div className="w-full h-full border border-dashed border-[#dfba73]/30 rounded-full flex items-center justify-center overflow-hidden">
                          <svg viewBox="0 0 120 120" className="w-48 h-48 text-[#dfba73]">
                            {/* Sunrays */}
                            <g className="animate-pulse">
                              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                                <line key={angle} x1="60" y1="20" x2="60" y2="5" stroke="#dfba73" strokeWidth="1" transform={`rotate(${angle} 60 60)`} />
                              ))}
                            </g>
                            {/* Moon */}
                            <path d="M 45,30 A 30,30 0 1,0 75,90 A 24,24 0 1,1 45,30 Z" fill="#dfba73" stroke="#050a18" strokeWidth="0.5" />
                            {/* Detailed Star Points */}
                            <polygon points="100,50 102,52 100,54 98,52" fill="#dfba73" />
                            <polygon points="20,40 22,42 20,44 18,42" fill="#dfba73" />
                            {/* Cloud vector base */}
                            <path d="M20,100 C30,90 50,90 60,98 C70,90 90,90 100,100 Z" fill="#050a18" stroke="#dfba73" strokeWidth="0.8" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Info bar */}
                    <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] font-mono text-[#dfba73]/60">
                      <span>SLIDE 02 / 05</span>
                      <span>@KVIIMA</span>
                    </div>
                  </div>
                )}

                {activeSlide === 2 && (
                  <div className="grid grid-cols-12 h-full items-center gap-8 relative">
                    {/* SLIDE 3: Celestial Familiar Cat */}
                    
                    <div className="col-span-5 flex justify-center">
                      {/* Celestial cat woodcut style representation inside crescent moon */}
                      <div className="w-64 h-64 bg-[#091124] border border-[#dfba73]/40 p-1 rounded relative shadow-lg">
                        <div className="w-full h-full border border-dashed border-[#dfba73]/30 p-4 flex items-center justify-center">
                          <svg viewBox="0 0 100 100" className="w-48 h-48 text-[#dfba73]">
                            {/* Moon Cradle */}
                            <path d="M20,20 A35,35 0 1,0 80,80 A30,30 0 1,1 20,20 Z" fill="#dfba73" />
                            {/* Cat Silhouette sitting inside */}
                            <path d="M42,65 C42,55 46,50 50,50 C54,50 56,53 56,58 C56,65 52,70 50,75 Z" fill="#050a18" stroke="#dfba73" strokeWidth="0.5" />
                            <polygon points="48,48 50,43 52,48" fill="#dfba73" />
                            <polygon points="52,48 54,43 56,48" fill="#dfba73" />
                            <circle cx="50" cy="53" r="1" fill="#dfba73" />
                            {/* Stars */}
                            <circle cx="25" cy="85" r="1.5" fill="#dfba73" />
                            <circle cx="75" cy="15" r="1" fill="#dfba73" />
                            <circle cx="85" cy="30" r="2" fill="#dfba73" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-7 space-y-4">
                      <h3 className="text-3xl md:text-5xl font-bold font-serif text-[#dfd5c6]">Lorem Ipsum</h3>
                      <p className="text-xs text-[#dfd5c6]/80 leading-relaxed font-sans font-light">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                      </p>
                    </div>

                    {/* Bottom Info bar */}
                    <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] font-mono text-[#dfba73]/60">
                      <span>SLIDE 03 / 05</span>
                      <span>@KVIIMA</span>
                    </div>
                  </div>
                )}

                {activeSlide === 3 && (
                  <div className="flex flex-col justify-between h-full relative">
                    {/* SLIDE 4: Two Column Layout */}
                    
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold font-serif text-[#dfd5c6]">Lorem Ipsum</h3>
                      <div className="h-[1px] w-32 bg-[#dfba73]/40"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 my-4">
                      {/* Column 1 */}
                      <div className="bg-[#091124] border border-[#dfba73]/30 p-4 rounded relative">
                        <span className="absolute top-1 right-2 text-[8px] text-[#dfba73]">✦</span>
                        <h4 className="text-sm font-semibold text-[#dfba73] uppercase tracking-wider mb-2">Lorem Ipsum</h4>
                        <p className="text-[11px] text-[#dfd5c6]/80 leading-relaxed font-sans font-light">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.
                        </p>
                      </div>

                      {/* Column 2 */}
                      <div className="bg-[#091124] border border-[#dfba73]/30 p-4 rounded relative">
                        <span className="absolute top-1 right-2 text-[8px] text-[#dfba73]">✦</span>
                        <h4 className="text-sm font-semibold text-[#dfba73] uppercase tracking-wider mb-2">Lorem Ipsum</h4>
                        <p className="text-[11px] text-[#dfd5c6]/80 leading-relaxed font-sans font-light">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.
                        </p>
                      </div>
                    </div>

                    {/* Bottom Info bar */}
                    <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] font-mono text-[#dfba73]/60 pt-4 border-t border-[#dfba73]/15">
                      <span>SLIDE 04 / 05</span>
                      <span>@KVIIMA</span>
                    </div>
                  </div>
                )}

                {activeSlide === 4 && (
                  <div className="flex flex-col justify-between h-full relative">
                    {/* SLIDE 5: Three Column Layout (recreating bottom slide perfectly) */}
                    
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold font-serif text-[#dfd5c6]">Lorem ipsum</h3>
                      <div className="h-[1px] w-32 bg-[#dfba73]/40"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 my-3">
                      
                      {/* Card 1 */}
                      <div className="bg-[#091124]/90 border border-[#dfba73]/40 p-4 rounded relative">
                        <div className="absolute top-0 right-4 w-4 h-12 bg-[#dfba73]/20 border-l border-r border-[#dfba73]/30 flex items-end justify-center pb-1">
                          <span className="text-[6px] text-[#dfba73]">✦</span>
                        </div>
                        <h4 className="text-xs font-bold text-[#dfba73] uppercase tracking-wider mb-2 pr-6">Lorem ipsum</h4>
                        <p className="text-[9px] text-[#dfd5c6]/70 leading-relaxed font-sans font-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>

                      {/* Card 2 (Slightly taller with star highlighting) */}
                      <div className="bg-[#0c162f] border-2 border-[#dfba73] p-4 rounded relative transform -translate-y-1 shadow-lg shadow-[#dfba73]/10">
                        <span className="absolute top-1 left-2 text-[#dfba73] text-[8px]">✦</span>
                        <span className="absolute top-1 right-2 text-[#dfba73] text-[8px]">✦</span>
                        <h4 className="text-xs font-bold text-[#dfba73] uppercase tracking-wider mb-2">Lorem ipsum</h4>
                        <p className="text-[9px] text-[#dfd5c6] leading-relaxed font-sans font-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-[#091124]/90 border border-[#dfba73]/40 p-4 rounded relative">
                        <div className="absolute top-0 right-4 w-4 h-12 bg-[#dfba73]/20 border-l border-r border-[#dfba73]/30 flex items-end justify-center pb-1">
                          <span className="text-[6px] text-[#dfba73]">✦</span>
                        </div>
                        <h4 className="text-xs font-bold text-[#dfba73] uppercase tracking-wider mb-2 pr-6">Lorem ipsum</h4>
                        <p className="text-[9px] text-[#dfd5c6]/70 leading-relaxed font-sans font-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>

                    </div>

                    {/* Bottom Info bar */}
                    <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] font-mono text-[#dfba73]/60 pt-4 border-t border-[#dfba73]/15">
                      <span>SLIDE 05 / 05</span>
                      <span>@KVIIMA</span>
                    </div>
                  </div>
                )}

              </div>

              {/* CONTROLS BAR FOR PRESENTATION VIEW */}
              <div className="flex items-center justify-between bg-[#050a18] border border-[#dfba73]/40 px-6 py-4 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#dfba73]/80 uppercase tracking-widest font-mono">Presenting Mode:</span>
                  <span className="text-xs bg-[#dfba73]/10 text-white px-2.5 py-1 rounded font-semibold border border-[#dfba73]/20">
                    Slide {activeSlide + 1} of 5
                  </span>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={prevSlide}
                    className="p-2 bg-[#091124] hover:bg-[#dfba73]/20 border border-[#dfba73]/40 text-[#dfba73] rounded-full transition-all"
                    title="Previous Slide"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="p-2 bg-[#091124] hover:bg-[#dfba73]/20 border border-[#dfba73]/40 text-[#dfba73] rounded-full transition-all"
                    title="Next Slide"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          )}

        </main>

        {/* ORACLE OUTPUT MODAL */}
        {oracleModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#050a18] border-double border-4 border-[#dfba73] w-full max-w-2xl rounded-lg overflow-hidden shadow-[0_0_50px_rgba(223,186,115,0.3)] flex flex-col max-h-[85vh]">
              
              <div className="border-b border-[#dfba73]/40 px-6 py-4 flex justify-between items-center bg-[#070e20]">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#dfba73] animate-spin-slow" />
                  <span className="font-serif font-bold text-gradient bg-gradient-to-r from-[#dfba73] to-[#ffdf9e] bg-clip-text text-transparent text-sm uppercase tracking-wider">
                    {loadingOracle ? 'Consulting the High Archives...' : 'Aethelgard Prophecy Placements'}
                  </span>
                </div>
                <button 
                  onClick={() => setOracleModal(false)}
                  className="text-[#dfba73] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4 flex-1 text-xs md:text-sm font-sans font-light text-[#dfd5c6] leading-relaxed select-text">
                {loadingOracle ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#dfba73] animate-spin-slow"></div>
                      <div className="absolute inset-2 rounded-full border border-dotted border-white/40 animate-spin-reverse"></div>
                    </div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#dfba73] animate-pulse">Calculating Stellar Azimuths...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center pb-4 border-b border-[#dfba73]/20">
                      <h4 className="font-serif text-2xl font-bold text-[#dfba73]">{oracleResponse?.title}</h4>
                      <span className="text-[10px] font-mono tracking-widest text-[#dfba73]/50 uppercase">Scribed on {oracleResponse?.timestamp}</span>
                    </div>
                    <div className="whitespace-pre-line text-[#dfd5c6]/90 prose prose-invert font-serif italic text-base">
                      {oracleResponse?.text}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-[#dfba73]/30 px-6 py-4 bg-[#070e20] flex justify-end">
                <button 
                  onClick={() => setOracleModal(false)}
                  className="px-6 py-2 bg-[#dfba73] text-[#050a18] font-semibold text-xs uppercase tracking-widest hover:bg-[#ffdf9e] transition-all rounded"
                >
                  Seal Prophecy
                </button>
              </div>

            </div>
          </div>
        )}

        {/* FOOTER */}
        <footer className="border-t border-[#dfba73]/30 bg-[#050a18]/90 py-8 px-6 text-center text-xs space-y-4 relative overflow-hidden">
          
          {/* Subtle hanging mobile decoration right */}
          <div className="absolute right-10 top-0 opacity-40 animate-swing origin-top">
            <svg width="20" height="80" viewBox="0 0 20 80" fill="none" className="stroke-[#dfba73]">
              <line x1="10" y1="0" x2="10" y2="50" strokeWidth="0.8" />
              <polygon points="10,50 13,58 7,58" fill="#dfba73" />
              <circle cx="10" cy="65" r="3" fill="#dfba73" />
            </svg>
          </div>

          <div className="flex justify-center gap-6 text-[#dfba73]/60 uppercase tracking-widest font-mono text-[10px]">
            <a href="#oracle" className="hover:text-[#dfba73] transition-colors">Natal Oracle</a>
            <span>•</span>
            <span className="cursor-pointer hover:text-[#dfba73] transition-colors" onClick={() => setActiveTab('deck')}>Presentation Deck</span>
            <span>•</span>
            <span className="cursor-pointer hover:text-[#dfba73] transition-colors" onClick={toggleAmbientAudio}>Ambient Drone</span>
          </div>

          <p className="text-[#dfd5c6]/40 font-light max-w-md mx-auto leading-relaxed">
            All astrological alignments computed with classical mathematical coordinate parameters. For amusement of the mind and spirit.
          </p>

          <p className="text-[#dfba73]/70 font-mono tracking-widest text-[9px] uppercase">
            © 2026 Aethelgard Hermetic Society • All Seals Reserved
          </p>
        </footer>

      </div>
    </div>
  );
}
I3