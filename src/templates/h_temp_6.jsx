import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  BookOpen, 
  PenTool, 
  Feather, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ChevronRight, 
  Download, 
  Copy, 
  RotateCcw, 
  Check, 
  Grid,
  Info,
  Maximize2,
  Minimize2,
  Sliders,
  Wind
} from 'lucide-react';

// --- FIREBASE CONFIG (Optional/Placeholder for Sandbox) ---
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- GLOBAL STAMP DISTRESS FILTER ---
const StampFilter = () => (
  <svg className="absolute w-0 h-0" width="0" height="0">
    <filter id="ink-bleed">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" result="displaced" />
      <feComponentTransfer in="displaced" result="final">
        <feFuncA type="linear" slope="0.9" />
      </feComponentTransfer>
    </filter>
  </svg>
);

// --- BACKGROUND PAPER GRAIN NOISE DATA URI ---
const NOISE_SVG = "data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)'/></svg>";

// --- PROCEDURAL GUZHENG SYNTHESIZER (Web Audio API) ---
class GuzhengSynth {
  constructor() {
    this.ctx = null;
    this.delayNode = null;
    this.feedbackNode = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContextClass();
    
    // Create delay for cavernous, natural resonance
    this.delayNode = this.ctx.createDelay(1.0);
    this.feedbackNode = this.ctx.createGain();
    
    this.delayNode.delayTime.value = 0.35; // Valley echo duration
    this.feedbackNode.gain.value = 0.4;    // Echo feedback volume

    // Connect delay loop
    this.delayNode.connect(this.feedbackNode);
    this.feedbackNode.connect(this.delayNode);
    
    this.delayNode.connect(this.ctx.destination);
  }

  playNote(frequency) {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    
    // Guzheng string pluck sound is made of:
    // 1. A sharp metal/fingertip pluck (rapid attack, high frequency transient)
    // 2. The warm woody body resonance (longer decay triangle/sine wave)
    
    // Wood Resonance Osc
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(frequency, now);
    
    // Add micro pitch bend (traditional Guzheng "Chuan Yin" vibrato/bend)
    osc1.frequency.exponentialRampToValueAtTime(frequency * 1.015, now + 0.1);
    osc1.frequency.exponentialRampToValueAtTime(frequency, now + 0.4);

    // Sharp Metal Pluck Osc
    const oscPluck = this.ctx.createOscillator();
    const gainPluck = this.ctx.createGain();
    oscPluck.type = 'sawtooth';
    oscPluck.frequency.setValueAtTime(frequency * 2, now);

    // Envelopes
    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.8); // Long decaying ring

    gainPluck.gain.setValueAtTime(0.15, now);
    gainPluck.gain.exponentialRampToValueAtTime(0.001, now + 0.08); // Ultra short pluck transient

    // Highpass filter for the crisp pluck
    const pluckFilter = this.ctx.createBiquadFilter();
    pluckFilter.type = 'highpass';
    pluckFilter.frequency.setValueAtTime(1200, now);

    // Connect Wood Resonance
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    if (this.delayNode) gain1.connect(this.delayNode);

    // Connect Pluck Transient
    oscPluck.connect(pluckFilter);
    pluckFilter.connect(gainPluck);
    gainPluck.connect(this.ctx.destination);
    if (this.delayNode) gainPluck.connect(this.delayNode);

    // Start & Stop
    osc1.start(now);
    osc1.stop(now + 2.0);
    oscPluck.start(now);
    oscPluck.stop(now + 0.15);
  }
}

const synth = new GuzhengSynth();

// Traditional Chinese Pentatonic Scales mapped to notes
// Gong (宮) C, Shang (商) D, Jiao (角) E, Zhi (徵) G, Yu (羽) A
const PENTATONIC_SCALE = [
  { name: '宮 (Gong)', freq: 261.63, tag: 'Earth / Yellow' },
  { name: '商 (Shang)', freq: 293.66, tag: 'Metal / White' },
  { name: '角 (Jiao)', freq: 329.63, tag: 'Wood / Green' },
  { name: '徵 (Zhi)', freq: 392.00, tag: 'Fire / Red' },
  { name: '羽 (Yu)', freq: 440.00, tag: 'Water / Black' },
  { name: '高宮 (High Gong)', freq: 523.25, tag: 'Higher Earth' },
  { name: '高商 (High Shang)', freq: 587.33, tag: 'Higher Metal' },
  { name: '高角 (High Jiao)', freq: 659.25, tag: 'Higher Wood' },
  { name: '高徵 (High Zhi)', freq: 783.99, tag: 'Higher Fire' },
  { name: '高羽 (High Yu)', freq: 880.00, tag: 'Higher Water' },
];

export default function App() {
  // --- UI STATES ---
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [zenMode, setZenMode] = useState(false);
  const [selectedTab, setSelectedTab] = useState('scroll'); // 'scroll', 'poetry', 'seal', 'colors'
  const [activeToast, setActiveToast] = useState(null);
  
  // --- COLOR PALETTE STATE ---
  const traditionalColors = [
    { name: '朱砂', english: 'Cinnabar Red', hex: '#C82423', description: 'The rich vermillion of imperial calligraphy seals and celebratory temple walls.', pitch: 392.00 }, // Zhi
    { name: '松烟墨', english: 'Pine Soot Ink', hex: '#1C1C1C', description: 'Deep, carbonaceous ink soot gathered from burning ancient pines for scholarly scrolls.', pitch: 440.00 }, // Yu
    { name: '琉璃蓝', english: 'Glazed Lapis Blue', hex: '#3B6290', description: 'The brilliant sapphire glaze found atop porcelain tiles and blue mountain songbirds.', pitch: 523.25 }, // High Gong
    { name: '竹青', english: 'Bamboo Jade Green', hex: '#7E8B7A', description: 'The gentle, misty olive green of bamboo groves after a spring cloudburst.', pitch: 329.63 }, // Jiao
    { name: '绯桃', english: 'Peach Blossom Pink', hex: '#E2C2C3', description: 'The delicate, fleeting blush of early spring flora unfolding at the river edge.', pitch: 293.66 }, // Shang
    { name: '洒金', english: 'Imperial Parchment', hex: '#F4EFE6', description: 'Warm, hand-pressed mulberry paper scattered with micro-particles of gold leaf.', pitch: 261.63 }, // Gong
  ];
  const [activeColor, setActiveColor] = useState(traditionalColors[0]);

  // --- STAMP MAKER STATE ---
  const [stampText, setStampText] = useState('雅志');
  const [stampStyle, setStampStyle] = useState('yin'); // 'yin' (white-on-red) or 'yang' (red-on-white)
  const [stampShape, setStampShape] = useState('square'); // 'square' or 'circle'

  // --- GEMINI POETRY STATE ---
  const [customPrompt, setCustomPrompt] = useState('雪中梅花 (Plum Blossoms in Snow)');
  const [geminiLoading, setGeminiLoading] = useState(false);
  const [generatedPoem, setGeneratedPoem] = useState({
    title: '雪梅幽香',
    poem_chinese: '寒雪梅花发，孤香冷自知。风吹尘不染，正是独行时。',
    poem_pinyin: 'Hán xuě méi huā fā, gū xiāng lěng zì zhī. Fēng chuī chén bù rǎn, zhèng shì dú xíng shí.',
    poem_english: 'Midst freezing snow, the plum blossom blooms, / A lonely fragrance known only to itself in the cold. / Winds pass by leaving its purity untouched, / This is the perfect hour of the solitary wanderer.',
    aesthetic_explanation: 'This classical Jueju captures the pure, untethered nature of the plum blossom, blossoming resiliently in frozen winter isolation as an emblem of serene dignity.',
    colors: ['#F4EFE6', '#C82423', '#1C1C1C']
  });

  // --- FLOATING PETALS EFFECT ---
  const [petals, setPetals] = useState([]);
  useEffect(() => {
    // Generate initial petals
    const initialPetals = Array.from({ length: 15 }).map((_, i) => createPetal(i));
    setPetals(initialPetals);

    const interval = setInterval(() => {
      setPetals(prev => prev.map(p => {
        let newY = p.y + p.speedY;
        let newX = p.x + p.speedX;
        let newRot = p.rot + p.rotSpeed;
        if (newY > 105) {
          return createPetal(p.id); // Reset petal
        }
        return { ...p, x: newX, y: newY, rot: newRot };
      }));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const createPetal = (id) => ({
    id,
    x: Math.random() * 100,
    y: -10 - (Math.random() * 20),
    size: 6 + Math.random() * 12,
    speedY: 0.15 + Math.random() * 0.3,
    speedX: -0.05 + Math.random() * 0.1,
    rot: Math.random() * 360,
    rotSpeed: -1 + Math.random() * 2,
    opacity: 0.4 + Math.random() * 0.55
  });

  // --- TOAST NOTIFICATION TRIGGER ---
  const showToast = (message) => {
    setActiveToast(message);
    setTimeout(() => {
      setActiveToast(null);
    }, 3000);
  };

  // --- PLAY NOTE HELPER ---
  const triggerPluck = (frequency) => {
    if (audioEnabled) {
      synth.playNote(frequency);
    }
  };

  // --- GEMINI POETRY CALL ---
  const generateAIPoetry = async () => {
    setGeminiLoading(true);
    triggerPluck(440); // Yu node on start
    
    const apiKey = ""; // Runtime automatically provisions this key
    const systemInstruction = `You are an elite, classical Chinese poet from the Tang Dynasty. Your goal is to generate exquisite, deeply evocative, culturally rich four-line poems (Jueju) in classical format, based on the user's input topic or mood. 
    You must always respond in structured JSON format strictly matching this schema:
    {
      "title": "A beautiful poetic 4-character Chinese title",
      "poem_chinese": "The classical 4-line poem in Chinese characters, comma separated lines.",
      "poem_pinyin": "Accurate pinyin with tonal marks for pronunciation",
      "poem_english": "A beautiful, lyrical English translation capturing the exact subtext and elegance",
      "aesthetic_explanation": "A gorgeous short critique explaining the artistic concept, Zen vibe (Yijing), and seasonal imagery",
      "colors": ["An array of exactly 3 hex codes corresponding to traditional Chinese pigments reflecting the poem's mood"]
    }`;

    const userQuery = `Create a masterpiece poem inspired by this topic or aesthetic mood: ${customPrompt}`;

    let delay = 1000;
    for (let attempt = 1; attempt <= 5; attempt++) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: userQuery }] }],
              systemInstruction: { parts: [{ text: systemInstruction }] },
              generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                  type: "OBJECT",
                  properties: {
                    title: { type: "STRING" },
                    poem_chinese: { type: "STRING" },
                    poem_pinyin: { type: "STRING" },
                    poem_english: { type: "STRING" },
                    aesthetic_explanation: { type: "STRING" },
                    colors: {
                      type: "ARRAY",
                      items: { type: "STRING" }
                    }
                  },
                  required: ["title", "poem_chinese", "poem_pinyin", "poem_english", "aesthetic_explanation", "colors"]
                }
              }
            })
          }
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (rawText) {
          const parsed = JSON.parse(rawText);
          setGeneratedPoem(parsed);
          triggerPluck(523.25); // Celebrate with high Gong note
          showToast("Scroll updated with fresh poetry beauty.");
          break;
        }
      } catch (err) {
        if (attempt === 5) {
          showToast("The ink runs dry. Please try again in a moment.");
          console.error("Gemini Poetry Generation Failed:", err);
        } else {
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2;
        }
      }
    }
    setGeminiLoading(false);
  };

  // --- COPY TO CLIPBOARD HELPER ---
  const copyPoemToClipboard = () => {
    const textToCopy = `${generatedPoem.title}\n\n${generatedPoem.poem_chinese}\n(${generatedPoem.poem_pinyin})\n\n${generatedPoem.poem_english}\n\n意境 (Atmosphere): ${generatedPoem.aesthetic_explanation}`;
    
    // Fallback standard copy for canvas execution safety
    const el = document.createElement('textarea');
    el.value = textToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    triggerPluck(587.33); // High Shang sound
    showToast("Poem copied onto your parchment clipboard.");
  };

  // --- FORMAT STAMP CHARACTERS ---
  const renderStampCharacters = () => {
    const chars = stampText.slice(0, 4).split('');
    if (chars.length === 0) return ['', '', '', ''];
    if (chars.length === 1) return [chars[0], '印', '', ''];
    if (chars.length === 2) return [chars[0], chars[1], '之', '印'];
    if (chars.length === 3) return [chars[0], chars[1], chars[2], '印'];
    // Classic 4 character seal reads: Top-Right -> Bottom-Right -> Top-Left -> Bottom-Left
    return [chars[0], chars[1], chars[2], chars[3]];
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between overflow-x-hidden text-[#2C2C2C] font-serif select-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FAF7F2] via-[#F2EAE0] to-[#E3D5C1] selection:bg-[#C82423]/20 selection:text-[#C82423]">
      <StampFilter />

      {/* --- BACKGROUND PAPER GRAIN NOISE OVERLAY --- */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] z-0" 
        style={{ backgroundImage: `url("${NOISE_SVG}")` }} 
      />

      {/* --- FLOATING PINK FLOWER PETALS --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {petals.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full transition-transform duration-[40ms] ease-linear"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size * 0.85}px`,
              opacity: p.opacity,
              transform: `rotate(${p.rot}deg)`,
              background: 'radial-gradient(circle, #F6D3D6 0%, #E2C2C3 70%, #C82423 100%)',
              filter: 'blur(0.5px) drop-shadow(1px 1px 1px rgba(0,0,0,0.05))',
            }}
          />
        ))}
      </div>

      {/* --- TOAST NOTIFICATION HEADER --- */}
      {activeToast && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-[#C82423] text-[#FAF7F2] border border-[#A61F1E] px-6 py-3 rounded shadow-[0_10px_25px_rgba(200,36,35,0.2)] flex items-center gap-3 z-50 animate-fade-in text-sm uppercase tracking-widest font-sans">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
          <span>{activeToast}</span>
        </div>
      )}

      {/* --- HEADER --- */}
      <header className={`relative z-30 transition-all duration-700 border-b border-[#D8C9B5]/40 bg-[#FAF7F2]/80 backdrop-blur-md px-6 md:px-12 py-4 flex items-center justify-between ${zenMode ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="flex items-center gap-4">
          {/* Logo stamp */}
          <div 
            onClick={() => { triggerPluck(261.63); showToast("Soundscape initiated."); }}
            className="w-10 h-10 bg-[#C82423] hover:bg-[#A61F1E] transition-colors cursor-pointer flex items-center justify-center text-[#FAF7F2] text-xl font-bold rounded-sm shadow-md border-2 border-dashed border-[#FAF7F2]/20 filter drop-shadow-[0_2px_4px_rgba(200,36,35,0.15)]"
            style={{ filter: 'url(#ink-bleed)' }}
          >
            墨
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold tracking-widest text-[#1C1C1C] flex items-center gap-2">
              墨染山水 <span className="text-xs font-normal text-[#7E8B7A] border border-[#7E8B7A]/30 px-1.5 py-0.5 rounded tracking-normal">INK WHISPERS</span>
            </h1>
            <p className="text-[10px] uppercase text-[#7D705C] tracking-widest font-sans">Traditional Classical Aesthetic Design</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest text-[#4A3E31]">
          <button 
            onClick={() => { setSelectedTab('scroll'); triggerPluck(261.63); }}
            className={`hover:text-[#C82423] transition-colors pb-1 border-b-2 ${selectedTab === 'scroll' ? 'border-[#C82423] text-[#C82423]' : 'border-transparent'}`}
          >
            畫卷 <span className="text-xs text-[#7E8B7A] ml-0.5">Scrolls</span>
          </button>
          <button 
            onClick={() => { setSelectedTab('poetry'); triggerPluck(293.66); }}
            className={`hover:text-[#C82423] transition-colors pb-1 border-b-2 ${selectedTab === 'poetry' ? 'border-[#C82423] text-[#C82423]' : 'border-transparent'}`}
          >
            詩社 <span className="text-xs text-[#7E8B7A] ml-0.5">Poetry</span>
          </button>
          <button 
            onClick={() => { setSelectedTab('seal'); triggerPluck(329.63); }}
            className={`hover:text-[#C82423] transition-colors pb-1 border-b-2 ${selectedTab === 'seal' ? 'border-[#C82423] text-[#C82423]' : 'border-transparent'}`}
          >
            印章 <span className="text-xs text-[#7E8B7A] ml-0.5">Seal Studio</span>
          </button>
          <button 
            onClick={() => { setSelectedTab('colors'); triggerPluck(392.00); }}
            className={`hover:text-[#C82423] transition-colors pb-1 border-b-2 ${selectedTab === 'colors' ? 'border-[#C82423] text-[#C82423]' : 'border-transparent'}`}
          >
            國色 <span className="text-xs text-[#7E8B7A] ml-0.5">Palettes</span>
          </button>
        </nav>

        {/* Global Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setAudioEnabled(!audioEnabled);
              if(!audioEnabled) {
                setTimeout(() => synth.playNote(261.63), 100);
                showToast("Traditional soundscape activated.");
              } else {
                showToast("Soundscape silenced.");
              }
            }}
            className={`p-2.5 rounded-full transition-all border ${audioEnabled ? 'bg-[#7E8B7A]/10 border-[#7E8B7A] text-[#7E8B7A]' : 'bg-transparent border-[#D8C9B5] text-[#7D705C] hover:border-[#7E8B7A]'}`}
            title="Toggle Ambient Audio"
          >
            {audioEnabled ? <Volume2 size={18} className="animate-pulse" /> : <VolumeX size={18} />}
          </button>
          <button
            onClick={() => {
              setZenMode(!zenMode);
              triggerPluck(329.63);
              showToast(zenMode ? "Returned from contemplation." : "Entered contemplative mode. Double click or escape to exit.");
            }}
            className="p-2.5 rounded-full border border-[#D8C9B5] text-[#7D705C] hover:border-[#C82423] hover:text-[#C82423] transition-all"
            title="Toggle Contemplative/Zen Mode"
          >
            {zenMode ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>
        </div>
      </header>

      {/* --- ZEN MODE FLOATING DISMISS BUTTON --- */}
      {zenMode && (
        <button
          onClick={() => { setZenMode(false); triggerPluck(261.63); }}
          className="fixed bottom-8 right-8 z-50 bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] border border-[#D8C9B5] px-4 py-2 rounded text-xs tracking-widest text-[#7D705C] uppercase flex items-center gap-2 shadow-lg"
        >
          <Minimize2 size={14} /> Exit Zen View
        </button>
      )}

      {/* --- MAIN AMBIENT BODY --- */}
      <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12 z-10 flex flex-col justify-center">
        
        {/* TAB CONTROL FOR MOBILE */}
        <div className={`md:hidden flex justify-center gap-2 mb-6 ${zenMode ? 'hidden' : 'flex'}`}>
          {['scroll', 'poetry', 'seal', 'colors'].map((tab) => (
            <button
              key={tab}
              onClick={() => { setSelectedTab(tab); triggerPluck(261.63 + ['scroll', 'poetry', 'seal', 'colors'].indexOf(tab) * 40); }}
              className={`px-3 py-1.5 rounded text-xs tracking-wider border capitalize ${selectedTab === tab ? 'bg-[#C82423] border-[#C82423] text-white' : 'bg-[#F4EFE6]/60 border-[#D8C9B5]/60 text-[#7D705C]'}`}
            >
              {tab === 'scroll' ? 'Scroll' : tab === 'poetry' ? 'AI Poetry' : tab === 'seal' ? 'Seal' : 'Colors'}
            </button>
          ))}
        </div>

        {/* MAIN VIEWPORT SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: GRAPHICAL SCROLL & POETIC ACCENTS (COL-5) */}
          <div className={`lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-xl border border-[#D8C9B5]/40 bg-[#FAF7F2]/40 backdrop-blur-sm shadow-sm transition-all duration-1000 relative overflow-hidden group ${zenMode ? 'lg:col-span-12 py-16' : ''}`}>
            
            {/* Ink wash background subtle motif */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#7E8B7A]/10 to-transparent rounded-full filter blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#E2C2C3]/15 to-transparent rounded-full filter blur-3xl pointer-events-none" />

            {/* Corner Decorative Borders */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D8C9B5]/60 pointer-events-none" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D8C9B5]/60 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D8C9B5]/60 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D8C9B5]/60 pointer-events-none" />

            {/* Title / Vertical Calligraphy Section */}
            <div className="flex justify-between items-start mb-8 z-10">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-[#7E8B7A] tracking-widest font-sans font-semibold uppercase">The Wind of Classical China</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C] font-serif leading-tight">中國風骨</h2>
                <p className="text-xs text-[#7D705C] italic font-sans">"Every ink stroke preserves a thousand autumn seasons."</p>
              </div>

              {/* Distressed Stamp Signature */}
              <div 
                className="w-12 h-12 flex-shrink-0 cursor-pointer"
                onClick={() => { triggerPluck(783.99); showToast("Imperial seal selected."); }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#C82423]" style={{ filter: 'url(#ink-bleed)' }}>
                  <rect x="5" y="5" width="90" height="90" fill="currentColor" rx="4" />
                  <rect x="12" y="12" width="76" height="76" fill="none" stroke="#FAF7F2" strokeWidth="4" />
                  <text x="50" y="44" fill="#FAF7F2" fontSize="28" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="serif">墨</text>
                  <text x="50" y="74" fill="#FAF7F2" fontSize="22" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="serif">染</text>
                </svg>
              </div>
            </div>

            {/* CENTRAL VECTOR SCROLL ILLUSTRATION (Bird on Plum Branch / Architecture) */}
            <div className="my-6 flex justify-center items-center relative py-4 bg-[#FAF7F2]/60 rounded-lg border border-[#D8C9B5]/30 shadow-inner overflow-hidden min-h-[280px]">
              
              {/* Traditional Grid Watermark */}
              <div className="absolute inset-4 border border-dashed border-[#D8C9B5]/40 pointer-events-none flex justify-around">
                <div className="w-[1px] h-full border-r border-dashed border-[#D8C9B5]/20" />
                <div className="w-[1px] h-full border-r border-dashed border-[#D8C9B5]/20" />
              </div>

              {/* Interactive Vector Art Scroll */}
              <svg viewBox="0 0 400 300" className="w-full max-w-[340px] h-auto relative z-10 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.06)]">
                {/* Ancient Mountain Background Outlines */}
                <path d="M 10 240 Q 90 180 180 230 T 360 210 T 400 240 L 400 300 L 0 300 Z" fill="#F0E5D7" opacity="0.6" />
                <path d="M 50 250 Q 150 200 240 245 T 390 230 L 400 300 L 0 300 Z" fill="#EADBC8" opacity="0.4" />

                {/* Branch of Blooming Plum Blossoms */}
                <path d="M 380 80 C 310 100, 240 70, 160 130 C 120 160, 90 140, 10 180" fill="none" stroke="#2C2621" strokeWidth="4.5" strokeLinecap="round" />
                {/* Secondary Branches */}
                <path d="M 230 95 C 190 70, 150 90, 110 80" fill="none" stroke="#2C2621" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 140 142 C 120 190, 80 180, 50 220" fill="none" stroke="#2C2621" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 300 90 C 290 50, 260 40, 240 30" fill="none" stroke="#2C2621" strokeWidth="2.0" strokeLinecap="round" />

                {/* Blossom Buds and Petals */}
                <circle cx="160" cy="130" r="8" fill="#E2C2C3" />
                <circle cx="160" cy="130" r="5" fill="#FAF7F2" />
                <circle cx="160" cy="130" r="1.5" fill="#C82423" />
                
                <circle cx="210" cy="110" r="9" fill="#E2C2C3" />
                <circle cx="210" cy="110" r="6" fill="#FAF7F2" />
                <circle cx="210" cy="110" r="2" fill="#C82423" />
                
                <circle cx="120" cy="155" r="7" fill="#E2C2C3" />
                <circle cx="120" cy="155" r="4.5" fill="#FAF7F2" />
                <circle cx="120" cy="155" r="1.5" fill="#C82423" />
                
                <circle cx="260" cy="40" r="7.5" fill="#E2C2C3" />
                <circle cx="260" cy="40" r="5" fill="#FAF7F2" />
                <circle cx="260" cy="40" r="1.5" fill="#C82423" />
                
                <circle cx="340" cy="90" r="4" fill="#C82423" />
                <circle cx="290" cy="75" r="3.5" fill="#C82423" />
                <circle cx="180" cy="90" r="4" fill="#C82423" />
                <circle cx="80" cy="165" r="3" fill="#C82423" />

                {/* THE BLUE CRESTED SONG BIRD */}
                <g className="cursor-pointer hover:translate-y-[-2px] transition-transform duration-300" onClick={() => { triggerPluck(659.25); showToast("The songbird responds with melody."); }}>
                  <path d="M 125 150 C 110 180, 80 200, 75 220 C 85 200, 115 175, 130 155 Z" fill="#3B6290" />
                  <path d="M 120 152 C 105 185, 75 210, 68 230 C 80 205, 110 180, 125 157 Z" fill="#1C1C1C" opacity="0.6" />
                  
                  <ellipse cx="145" cy="130" rx="20" ry="14" fill="#3B6290" transform="rotate(-15, 145, 130)" />
                  <path d="M 132 125 C 130 140, 145 150, 155 142 C 160 135, 140 120, 132 125 Z" fill="#E2C2C3" />
                  
                  <path d="M 148 138 C 158 138, 166 130, 168 118 C 162 118, 148 126, 148 138 Z" fill="#C82423" />
                  
                  <circle cx="164" cy="115" r="10.5" fill="#3B6290" />
                  
                  <path d="M 166 105 Q 175 92 180 96 Q 170 106 164 109 Z" fill="#C82423" />
                  
                  <circle cx="168" cy="113" r="2" fill="#FAF7F2" />
                  <circle cx="168.5" cy="112.5" r="0.8" fill="#1C1C1C" />
                  
                  <polygon points="174,113 182,116 174,118" fill="#D8C9B5" />
                  
                  <line x1="142" y1="140" x2="138" y2="148" stroke="#1C1C1C" strokeWidth="2" />
                  <line x1="148" y1="140" x2="146" y2="148" stroke="#1C1C1C" strokeWidth="2" />
                </g>

                {/* Flying Crane silhouette in distance */}
                <path d="M 310 40 Q 300 45 290 40 Q 295 50 310 40 Z" fill="#1C1C1C" opacity="0.5" />
                <path d="M 290 40 Q 285 30 280 25 Q 285 35 290 40 Z" fill="#1C1C1C" opacity="0.5" />

                {/* Classic Hanging Paper Lantern on bottom branch */}
                <g transform="translate(80, 185) scale(0.8)">
                  <line x1="0" y1="0" x2="0" y2="25" stroke="#2C2621" strokeWidth="1.5" />
                  <rect x="-10" y="25" width="20" height="28" fill="#C82423" rx="4" style={{ filter: 'url(#ink-bleed)' }} />
                  <rect x="-6" y="28" width="12" height="22" fill="#F4EFE6" opacity="0.9" rx="2" />
                  <rect x="-12" y="23" width="24" height="3" fill="#1C1C1C" />
                  <rect x="-12" y="52" width="24" height="3" fill="#1C1C1C" />
                  <line x1="0" y1="55" x2="0" y2="75" stroke="#C82423" strokeWidth="1.5" />
                </g>
              </svg>

              {/* Falling Petal Generator Trigger Spot */}
              <div 
                onClick={() => {
                  setPetals(prev => [...prev, createPetal(prev.length)]);
                  triggerPluck(392);
                  showToast("A fresh blossom petal cascades down the mountain wind.");
                }}
                className="absolute bottom-3 right-4 flex items-center gap-1.5 bg-[#FAF7F2]/80 hover:bg-[#C82423]/10 border border-[#D8C9B5]/40 hover:border-[#C82423] text-[#7D705C] hover:text-[#C82423] text-[10px] tracking-widest uppercase font-sans font-bold px-2 py-1 rounded transition-all cursor-pointer shadow-sm"
              >
                <Wind size={10} className="animate-spin" />
                Pluck Petal
              </div>
            </div>

            {/* LOWER COGNITIVE CHINESE PHILOSOPHY SCROLL */}
            <div className="border-t border-[#D8C9B5]/40 pt-6 flex flex-col md:flex-row items-start justify-between gap-4 z-10">
              <div className="flex gap-3">
                <span className="text-[#C82423] text-lg font-bold">「閣·序」</span>
                <p className="text-xs text-[#7D705C] leading-relaxed max-w-[280px]">
                  此地有青山翠竹，松林鐘聲。天有浮雲飄緲，地有流水潺潺。一盞清茶，撫琴一曲，足以遣興悠然。
                </p>
              </div>
              <div className="flex md:flex-col items-center gap-2">
                <span className="text-[10px] text-[#7E8B7A] tracking-wider uppercase font-sans">Theme Resonance</span>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#C82423]" title="Cinnabar Red" />
                  <span className="w-3 h-3 rounded-full bg-[#3B6290]" title="Glazed Blue" />
                  <span className="w-3 h-3 rounded-full bg-[#7E8B7A]" title="Bamboo Green" />
                  <span className="w-3 h-3 rounded-full bg-[#FAF7F2] border border-[#D8C9B5]" title="Parchment" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: WORKING INTERACTIVE GUOFENG UTILITIES (COL-7) */}
          <div className={`lg:col-span-7 flex flex-col justify-between ${zenMode ? 'hidden' : 'block'}`}>
            
            {/* TAB INTERACTIVE STAGE */}
            <div className="bg-[#FAF7F2]/60 backdrop-blur-sm border border-[#D8C9B5]/40 rounded-xl p-6 md:p-8 flex-1 flex flex-col justify-between shadow-sm min-h-[550px] relative">
              
              {/* Desktop Header for the Utility Card */}
              <div className="flex justify-between items-center border-b border-[#D8C9B5]/30 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C82423]" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#1C1C1C] font-sans">
                    {selectedTab === 'scroll' && '古法格調 · Contemporary Scroll'}
                    {selectedTab === 'poetry' && '詩意幻境 · Classical Poetry generator'}
                    {selectedTab === 'seal' && '金石篆刻 · Seal Studio'}
                    {selectedTab === 'colors' && '國色五彩 · Chinese Pigments'}
                  </h3>
                </div>
                <div className="hidden md:flex items-center gap-1.5 text-xs text-[#7E8B7A]">
                  <Compass size={14} />
                  <span>Interactive Chapter</span>
                </div>
              </div>

              {/* VIEW 1: SCROLL OVERVIEW / INTRODUCTION */}
              {selectedTab === 'scroll' && (
                <div className="flex-1 flex flex-col justify-between animate-fade-in gap-6">
                  <div>
                    <h4 className="text-2xl font-bold text-[#1C1C1C] mb-4">Embrace the Poetic Flow of Ancient China</h4>
                    <p className="text-[#4A3E31] leading-relaxed mb-6 text-sm">
                      Inspired by the timeless grace of the <strong>中国风 (Guofeng)</strong> design language, this sanctuary blends the soft, organic warmth of ancient mulberry paper with modern, clean UI layouts. 
                    </p>
                    
                    {/* Visual Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                      <div 
                        onClick={() => { setSelectedTab('poetry'); triggerPluck(329.63); }}
                        className="p-4 bg-[#FAF7F2] hover:bg-[#C82423]/5 border border-[#D8C9B5]/40 hover:border-[#C82423] rounded-lg cursor-pointer transition-all group"
                      >
                        <div className="flex items-center gap-2.5 mb-2 text-[#C82423]">
                          <Feather size={16} />
                          <h5 className="font-bold text-sm tracking-wide">Classical Poetry Hub</h5>
                        </div>
                        <p className="text-xs text-[#7D705C]">Compose pristine 4-line classical stanzas using our simulated brush-stroke AI logic.</p>
                      </div>

                      <div 
                        onClick={() => { setSelectedTab('seal'); triggerPluck(392.00); }}
                        className="p-4 bg-[#FAF7F2] hover:bg-[#7E8B7A]/10 border border-[#D8C9B5]/40 hover:border-[#7E8B7A] rounded-lg cursor-pointer transition-all group"
                      >
                        <div className="flex items-center gap-2.5 mb-2 text-[#7E8B7A]">
                          <PenTool size={16} />
                          <h5 className="font-bold text-sm tracking-wide">Stone Engraving Studio</h5>
                        </div>
                        <p className="text-xs text-[#7D705C]">Carve personal scarlet seals (印章) in square, round, yin, or yang classical formatting.</p>
                      </div>

                      <div 
                        onClick={() => { setSelectedTab('colors'); triggerPluck(440.00); }}
                        className="p-4 bg-[#FAF7F2] hover:bg-[#3B6290]/5 border border-[#D8C9B5]/40 hover:border-[#3B6290] rounded-lg cursor-pointer transition-all group"
                      >
                        <div className="flex items-center gap-2.5 mb-2 text-[#3B6290]">
                          <Grid size={16} />
                          <h5 className="font-bold text-sm tracking-wide">Chinese Color Lore</h5>
                        </div>
                        <p className="text-xs text-[#7D705C]">Uncover the historical narratives and specific design values of ancient royal pigments.</p>
                      </div>

                      <div 
                        onClick={() => { setAudioEnabled(true); synth.playNote(261.63); showToast("Contemplate the acoustic soundscape."); }}
                        className="p-4 bg-[#FAF7F2] hover:bg-[#7D705C]/10 border border-[#D8C9B5]/40 hover:border-[#7D705C] rounded-lg cursor-pointer transition-all group"
                      >
                        <div className="flex items-center gap-2.5 mb-2 text-[#7D705C]">
                          <Volume2 size={16} />
                          <h5 className="font-bold text-sm tracking-wide">Acoustic Valley Plucks</h5>
                        </div>
                        <p className="text-xs text-[#7D705C]">Experience live-generated Guzheng sounds that resonate dynamically across the valley.</p>
                      </div>
                    </div>
                  </div>

                  {/* Architecture aesthetic segment */}
                  <div className="bg-[#FAF7F2]/80 border border-[#D8C9B5]/30 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4">
                    <svg viewBox="0 0 100 60" className="w-24 h-auto text-[#4A3E31] flex-shrink-0">
                      <path d="M 5 35 Q 25 15 50 32 Q 75 15 95 35 L 90 45 Q 75 25 50 40 Q 25 25 10 45 Z" fill="currentColor" />
                      <rect x="42" y="38" width="16" height="15" fill="#C82423" />
                      <line x1="50" y1="35" x2="50" y2="55" stroke="#FAF7F2" strokeWidth="2" />
                      <circle cx="50" cy="22" r="3" fill="#C82423" />
                    </svg>
                    <div>
                      <h6 className="text-xs font-bold text-[#1C1C1C] tracking-wide mb-1 flex items-center gap-1.5">
                        <span>飛檐之美</span> · Structural Grace of Flying Eaves
                      </h6>
                      <p className="text-[11px] text-[#7D705C] leading-relaxed">
                        Traditional roofs do not drop rigidly; they soar toward the heavens in beautiful, sweep-like parabolas, welcoming positive spiritual wind (Qi) into the inner chambers.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 2: GEMINI-POWERED classical POETRY SCROLL */}
              {selectedTab === 'poetry' && (
                <div className="flex-1 flex flex-col justify-between animate-fade-in gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#7D705C] uppercase tracking-widest mb-2">
                      Aesthetic Theme or Vibe Keyword
                    </label>
                    <div className="flex gap-2 mb-4">
                      <input 
                        type="text" 
                        value={customPrompt}
                        onChange={(e) => setCustomPrompt(e.target.value)}
                        placeholder="e.g. Bamboo in Mist, Frosty Moon, Falling Leaves..."
                        className="flex-1 bg-[#FAF7F2] border border-[#D8C9B5] px-4 py-2 text-sm rounded font-serif focus:outline-none focus:border-[#C82423] focus:ring-1 focus:ring-[#C82423]/30"
                      />
                      <button
                        onClick={generateAIPoetry}
                        disabled={geminiLoading}
                        className="bg-[#C82423] hover:bg-[#A61F1E] disabled:bg-[#C82423]/40 text-[#FAF7F2] px-5 py-2 rounded text-sm tracking-wider flex items-center gap-2 transition-colors duration-300 font-sans shadow-md"
                      >
                        {geminiLoading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-t-transparent border-[#FAF7F2] rounded-full animate-spin" />
                            Grinding Ink...
                          </>
                        ) : (
                          <>
                            <Sparkles size={14} />
                            Compose Poem
                          </>
                        )}
                      </button>
                    </div>

                    {/* Pre-prompt Quick Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {['雪中梅花 (Snow Plum)', '秋水明月 (Autumn Moon)', '孤亭寒江 (Solitary Pavilion)', '煙雨江南 (Jiangnan Rain)'].map(tag => (
                        <button
                          key={tag}
                          onClick={() => { setCustomPrompt(tag); triggerPluck(293.66); }}
                          className={`text-[11px] px-2.5 py-1 rounded border tracking-wider transition-colors ${customPrompt === tag ? 'bg-[#7E8B7A]/10 border-[#7E8B7A] text-[#7E8B7A]' : 'bg-transparent border-[#D8C9B5]/40 text-[#7D705C] hover:border-[#7E8B7A]'}`}
                        >
                          {tag.split(' ')[0]}
                        </button>
                      ))}
                    </div>

                    {/* Display of Active/Generated Poem */}
                    <div className="bg-[#FAF7F2] border border-[#D8C9B5]/40 rounded-xl p-5 relative overflow-hidden shadow-inner">
                      
                      {/* Artistic backdrop brush stamp */}
                      <div className="absolute right-4 bottom-4 text-8xl text-[#C82423]/[0.03] font-extrabold select-none pointer-events-none">
                        詩
                      </div>

                      {/* Header of Poem Scroll */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-[10px] uppercase text-[#7E8B7A] tracking-wider font-sans font-bold">Tang Dynasty Jueju Structure</span>
                          <h4 className="text-xl font-bold text-[#1C1C1C] flex items-center gap-2">
                            {generatedPoem.title}
                          </h4>
                        </div>
                        <div className="flex gap-1.5">
                          <button 
                            onClick={copyPoemToClipboard}
                            className="p-1.5 rounded hover:bg-[#FAF7F2] border border-transparent hover:border-[#D8C9B5] text-[#7D705C] hover:text-[#C82423] transition-all"
                            title="Copy Poem"
                          >
                            <Copy size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Traditional Vertical/Horizontal Verse Box */}
                      <div className="border-t border-b border-dashed border-[#D8C9B5]/60 py-4 mb-4 flex flex-col items-center justify-center text-center">
                        <p className="text-xl md:text-2xl font-bold tracking-widest text-[#1C1C1C] font-serif mb-2 leading-relaxed">
                          {generatedPoem.poem_chinese}
                        </p>
                        <p className="text-xs text-[#7E8B7A] italic tracking-wide max-w-md font-sans">
                          {generatedPoem.poem_pinyin}
                        </p>
                      </div>

                      {/* English Translation */}
                      <div className="mb-3">
                        <span className="text-[10px] uppercase text-[#7D705C] tracking-widest font-sans font-bold block mb-1">Translation & Meaning</span>
                        <p className="text-xs text-[#4A3E31] leading-relaxed italic">
                          "{generatedPoem.poem_english}"
                        </p>
                      </div>

                      {/* Aesthetic Explanation / Lore */}
                      <div>
                        <span className="text-[10px] uppercase text-[#7D705C] tracking-widest font-sans font-bold block mb-1">意境 · The Resonance Vibe</span>
                        <p className="text-xs text-[#7D705C] leading-relaxed">
                          {generatedPoem.aesthetic_explanation}
                        </p>
                      </div>

                      {/* Generated Poem Color Palette Match */}
                      {generatedPoem.colors && (
                        <div className="mt-4 pt-4 border-t border-[#D8C9B5]/20 flex items-center gap-3">
                          <span className="text-[10px] uppercase text-[#7D705C] tracking-widest font-sans font-bold">Poetic Palette:</span>
                          <div className="flex gap-2">
                            {generatedPoem.colors.map((col, idx) => (
                              <div key={idx} className="flex items-center gap-1 bg-[#FAF7F2] border border-[#D8C9B5]/40 px-1.5 py-0.5 rounded text-[10px]">
                                <span className="w-2.5 h-2.5 rounded-full border border-black/10" style={{ backgroundColor: col }} />
                                <span className="font-sans text-[9px] text-[#7D705C]">{col}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                  <p className="text-[10px] text-[#7D705C] tracking-wide text-center uppercase font-sans">
                    Every dynamic stanza utilizes premium semantic structuring and traditional imagery.
                  </p>
                </div>
              )}

              {/* VIEW 3: SEAL MAKER / ENGRAVING STUDIO */}
              {selectedTab === 'seal' && (
                <div className="flex-1 flex flex-col justify-between animate-fade-in gap-6">
                  <div>
                    <p className="text-xs text-[#7D705C] mb-4">
                      Historically, scholars marked their paintings and documents with unique red jade/stone seals (印章). Create yours below:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      
                      {/* Seal Inputs & Styling Panel */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-[#7D705C] uppercase tracking-widest mb-1.5">
                            Seal Text (2-4 Characters)
                          </label>
                          <input 
                            type="text" 
                            maxLength={4}
                            value={stampText}
                            onChange={(e) => {
                              setStampText(e.target.value);
                              triggerPluck(261.63);
                            }}
                            className="w-full bg-[#FAF7F2] border border-[#D8C9B5] px-3 py-2 text-sm rounded font-serif focus:outline-none focus:border-[#C82423]"
                            placeholder="e.g. 雅志, 墨林"
                          />
                        </div>

                        {/* Stamp Style Toggle */}
                        <div>
                          <label className="block text-xs font-bold text-[#7D705C] uppercase tracking-widest mb-1.5">
                            Engraving Style
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => { setStampStyle('yin'); triggerPluck(293.66); }}
                              className={`py-1.5 text-xs rounded border tracking-wide transition-colors ${stampStyle === 'yin' ? 'bg-[#C82423] border-[#C82423] text-white' : 'bg-transparent border-[#D8C9B5] text-[#7D705C] hover:border-[#C82423]'}`}
                            >
                              白文 (Yin / White Text)
                            </button>
                            <button
                              onClick={() => { setStampStyle('yang'); triggerPluck(329.63); }}
                              className={`py-1.5 text-xs rounded border tracking-wide transition-colors ${stampStyle === 'yang' ? 'bg-[#C82423] border-[#C82423] text-white' : 'bg-transparent border-[#D8C9B5] text-[#7D705C] hover:border-[#C82423]'}`}
                            >
                              朱文 (Yang / Red Text)
                            </button>
                          </div>
                        </div>

                        {/* Stamp Shape Toggle */}
                        <div>
                          <label className="block text-xs font-bold text-[#7D705C] uppercase tracking-widest mb-1.5">
                            Boundary Shape
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => { setStampShape('square'); triggerPluck(392.00); }}
                              className={`py-1.5 text-xs rounded border tracking-wide transition-colors ${stampShape === 'square' ? 'bg-[#7E8B7A] border-[#7E8B7A] text-white' : 'bg-transparent border-[#D8C9B5] text-[#7D705C] hover:border-[#7E8B7A]'}`}
                            >
                              方印 (Square Seal)
                            </button>
                            <button
                              onClick={() => { setStampShape('circle'); triggerPluck(440.00); }}
                              className={`py-1.5 text-xs rounded border tracking-wide transition-colors ${stampShape === 'circle' ? 'bg-[#7E8B7A] border-[#7E8B7A] text-white' : 'bg-transparent border-[#D8C9B5] text-[#7D705C] hover:border-[#7E8B7A]'}`}
                            >
                              圓印 (Circular Seal)
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Dynamic Realtime SVG Seal Rendering */}
                      <div className="flex flex-col items-center justify-center p-4 bg-[#FAF7F2] border border-[#D8C9B5]/40 rounded-xl relative overflow-hidden shadow-inner min-h-[190px]">
                        
                        <div 
                          className="w-32 h-32 transition-transform duration-500 hover:scale-105 active:scale-95 cursor-pointer filter drop-shadow-[0_4px_8px_rgba(200,36,35,0.15)]"
                          onClick={() => { triggerPluck(523.25); showToast("Seal stamped cleanly."); }}
                        >
                          <svg viewBox="0 0 120 120" className="w-full h-full text-[#C82423]" style={{ filter: 'url(#ink-bleed)' }}>
                            {stampStyle === 'yin' ? (
                              <g>
                                {stampShape === 'square' ? (
                                  <rect x="5" y="5" width="110" height="110" fill="currentColor" rx="4" />
                                ) : (
                                  <circle cx="60" cy="60" r="54" fill="currentColor" />
                                )}
                                
                                <g fill="#FAF7F2" fontSize="30" fontWeight="bold" fontFamily="serif" textAnchor="middle" dominantBaseline="middle">
                                  <text x="85" y="38">{renderStampCharacters()[0]}</text>
                                  <text x="85" y="82">{renderStampCharacters()[1]}</text>
                                  <text x="35" y="38">{renderStampCharacters()[2]}</text>
                                  <text x="35" y="82">{renderStampCharacters()[3]}</text>
                                </g>

                                <line x1="60" y1="12" x2="60" y2="108" stroke="#FAF7F2" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
                                <line x1="12" y1="60" x2="108" y2="60" stroke="#FAF7F2" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
                              </g>
                            ) : (
                              <g>
                                {stampShape === 'square' ? (
                                  <rect x="8" y="8" width="104" height="104" fill="none" stroke="currentColor" strokeWidth="6" rx="2" />
                                ) : (
                                  <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="6" />
                                )}

                                <g fill="currentColor" fontSize="28" fontWeight="black" fontFamily="serif" textAnchor="middle" dominantBaseline="middle">
                                  <text x="84" y="40">{renderStampCharacters()[0]}</text>
                                  <text x="84" y="80">{renderStampCharacters()[1]}</text>
                                  <text x="36" y="40">{renderStampCharacters()[2]}</text>
                                  <text x="36" y="80">{renderStampCharacters()[3]}</text>
                                </g>

                                <line x1="60" y1="15" x2="60" y2="105" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.2" />
                                <line x1="15" y1="60" x2="105" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.2" />
                              </g>
                            )}
                          </svg>
                        </div>
                        <span className="text-[10px] text-[#7D705C] tracking-wider uppercase font-sans mt-3">Engraved Stone Replica</span>
                      </div>

                    </div>
                  </div>

                  <div className="bg-[#FAF7F2]/80 border border-[#D8C9B5]/30 rounded-lg p-3.5 flex items-center justify-between">
                    <span className="text-xs text-[#7D705C] italic">Satisfied with your personal scholar seal mark?</span>
                    <button
                      onClick={() => {
                        triggerPluck(587.33);
                        showToast("Seal successfully loaded into active scroll stamp memory.");
                      }}
                      className="bg-[#7E8B7A] hover:bg-[#687365] text-white text-[11px] font-sans tracking-widest uppercase px-3 py-1.5 rounded transition-colors"
                    >
                      Bind to Scroll
                    </button>
                  </div>
                </div>
              )}

              {/* VIEW 4: COLOR PALETTE EXPLORER */}
              {selectedTab === 'colors' && (
                <div className="flex-1 flex flex-col justify-between animate-fade-in gap-6">
                  <div>
                    <p className="text-xs text-[#7D705C] mb-4">
                      Classical Chinese aesthetics utilize highly specific pigment tones associated with different elements, emotions, and directions in the natural cosmos. Click a pigment to pluck its chord:
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {traditionalColors.map((color) => (
                        <div
                          key={color.name}
                          onClick={() => {
                            setActiveColor(color);
                            triggerPluck(color.pitch);
                          }}
                          className={`p-3 rounded-lg border transition-all cursor-pointer flex flex-col gap-2 relative overflow-hidden ${activeColor.name === color.name ? 'bg-[#FAF7F2] border-[#C82423] ring-1 ring-[#C82423]/20 shadow-md translate-y-[-2px]' : 'bg-[#FAF7F2]/40 border-[#D8C9B5]/40 hover:border-[#7E8B7A] hover:bg-[#FAF7F2]'}`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-sm text-[#1C1C1C]">{color.name}</span>
                            <span className="text-[9px] uppercase font-sans text-[#7E8B7A]">{color.english.split(' ')[0]}</span>
                          </div>
                          <div className="w-full h-8 rounded border border-black/10" style={{ backgroundColor: color.hex }} />
                          <div className="flex justify-between items-center text-[9px] font-sans text-[#7D705C]">
                            <span>{color.hex}</span>
                            <span className="text-[#C82423] opacity-60">Pluck ♪</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Color Detail Panel */}
                  <div className="bg-[#FAF7F2] border-l-4 border-[#C82423] rounded-r-lg p-4 relative overflow-hidden shadow-sm">
                    <div className="absolute right-4 top-2 text-6xl text-[#1C1C1C]/[0.02] font-bold pointer-events-none uppercase">
                      Color Lore
                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-md text-[#1C1C1C] flex items-center gap-2">
                        {activeColor.name} <span className="text-xs text-[#7D705C] font-normal font-sans">({activeColor.english})</span>
                      </h4>
                      <span className="text-xs bg-[#7E8B7A]/10 text-[#7E8B7A] px-2 py-0.5 rounded font-mono text-[10px]">{activeColor.hex}</span>
                    </div>
                    <p className="text-xs text-[#4A3E31] leading-relaxed">
                      {activeColor.description}
                    </p>
                  </div>
                </div>
              )}

              {/* STAGE BOTTOM CONTROLS / ACCENTS */}
              <div className="border-t border-[#D8C9B5]/30 pt-4 mt-6 flex justify-between items-center text-[10px] text-[#7D705C] uppercase tracking-widest font-sans font-bold">
                <span>Stanza: Volume II</span>
                <div className="flex gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C82423] rounded-full" />
                  <span className="w-1.5 h-1.5 bg-[#D8C9B5] rounded-full" />
                  <span className="w-1.5 h-1.5 bg-[#7E8B7A] rounded-full" />
                </div>
                <span>墨林雅集</span>
              </div>

            </div>

            {/* LOWER PENTATONIC MANUAL CONTROLLER */}
            <div className="mt-6 bg-[#FAF7F2]/40 backdrop-blur-sm border border-[#D8C9B5]/30 rounded-xl p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Sliders size={16} className="text-[#7D705C]" />
                <div>
                  <h4 className="text-xs font-bold text-[#1C1C1C] uppercase tracking-wider">Pentatonic Soundboard (五音)</h4>
                  <p className="text-[10px] text-[#7D705C]">Tap to orchestrate an ambient Guzheng progression.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {PENTATONIC_SCALE.map((scale, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (!audioEnabled) {
                        setAudioEnabled(true);
                        showToast("Audio context initialized.");
                      }
                      synth.playNote(scale.freq);
                    }}
                    className="px-2.5 py-1.5 bg-[#FAF7F2] hover:bg-[#C82423] hover:text-white border border-[#D8C9B5]/50 hover:border-[#C82423] text-xs font-bold rounded transition-all flex flex-col items-center"
                    title={scale.tag}
                  >
                    <span>{scale.name.split(' ')[0]}</span>
                    <span className="text-[8px] opacity-60 mt-0.5">{Math.round(scale.freq)}Hz</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* --- GEOMETRIC WINDOW SCENERY CAROUSEL --- */}
        <section className={`mt-12 transition-all duration-1000 ${zenMode ? 'opacity-0 translate-y-24 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          <div className="text-center mb-8">
            <span className="text-xs text-[#7E8B7A] tracking-widest font-sans font-bold uppercase block mb-1">Aesthetic Philosophy</span>
            <h3 className="text-2xl font-serif font-bold text-[#1C1C1C] flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-[#D8C9B5]" />
              框景之窗 · Circular Lattice Scenery Windows
              <span className="w-8 h-[1px] bg-[#D8C9B5]" />
            </h3>
            <p className="text-xs text-[#7D705C] max-w-lg mx-auto mt-2 leading-relaxed">
              Classical designers carved circular and octagonal openings into courtyard walls, framing the shifting clouds and bamboo groves as living, natural paintings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '【意·境】 Tranquility',
                quote: '“竹影掃階塵不動，月穿潭底水無聲。”',
                desc: 'Quietness is not the absence of sound, but the internal clarity that filters outside disruption.',
                hue: 'bg-[#7E8B7A]/10 border-[#7E8B7A]/40 text-[#7E8B7A]',
                accent: '#7E8B7A',
                char: '静'
              },
              {
                title: '【風·雅】 Harmony',
                quote: '“一琴一鶴江山闊，萬疊雲山水墨融。”',
                desc: 'Merging with nature entails releasing human artificiality, embracing ink-wash boundaries.',
                hue: 'bg-[#3B6290]/10 border-[#3B6290]/40 text-[#3B6290]',
                accent: '#3B6290',
                char: '雅'
              },
              {
                title: '【留·白】 Empty Space',
                quote: '“畫到無處皆是意，字到無字始得神。”',
                desc: 'The unpainted canvas holds the deepest oceans. Design is defined by what you choose to leave undone.',
                hue: 'bg-[#C82423]/5 border-[#C82423]/20 text-[#C82423]',
                accent: '#C82423',
                char: '空'
              }
            ].map((pane, idx) => (
              <div 
                key={idx} 
                onClick={() => { triggerPluck(261.63 + idx * 60); }}
                className="bg-[#FAF7F2]/40 backdrop-blur-sm border border-[#D8C9B5]/40 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-[#C82423] transition-all duration-500 cursor-pointer group relative overflow-hidden"
              >
                <div className="w-28 h-28 rounded-full border-4 border-[#D8C9B5] relative mb-4 overflow-hidden bg-[#FAF7F2] flex items-center justify-center shadow-inner group-hover:border-[#C82423] transition-all duration-500">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#7D705C] opacity-15 group-hover:scale-105 transition-transform duration-700">
                    <path d="M 50 100 Q 40 60 42 0 Q 60 40 50 100" fill="currentColor" />
                    <path d="M 45 40 Q 25 30 20 20 C 30 25, 40 35, 45 40" fill="currentColor" />
                    <path d="M 48 65 Q 70 55 80 50 C 70 60, 58 64, 48 65" fill="currentColor" />
                  </svg>
                  <span className="text-4xl font-extrabold tracking-normal relative z-10 font-serif opacity-30 group-hover:opacity-100 group-hover:text-[#C82423] transition-all duration-500">
                    {pane.char}
                  </span>
                </div>

                <span className={`text-xs uppercase font-sans font-bold tracking-widest px-2.5 py-1 rounded-full mb-3 border ${pane.hue}`}>
                  {pane.title}
                </span>

                <p className="text-xs font-bold text-[#1C1C1C] mb-2 italic px-4 leading-relaxed">
                  {pane.quote}
                </p>

                <p className="text-xs text-[#7D705C] leading-relaxed px-4">
                  {pane.desc}
                </p>

                <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-4 h-4 bg-[#C82423] text-white text-[9px] font-bold flex items-center justify-center rounded-sm leading-none" style={{ filter: 'url(#ink-bleed)' }}>印</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* --- FOOTER SECTION --- */}
      <footer className={`relative z-30 transition-all duration-700 border-t border-[#D8C9B5]/40 bg-[#FAF7F2]/90 px-6 md:px-12 py-8 mt-12 ${zenMode ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h5 className="text-sm font-bold uppercase tracking-wider text-[#1C1C1C] font-serif">墨染山水 · Ink Whispers Aesthetic Hub</h5>
            <p className="text-xs text-[#7D705C] mt-1 max-w-md leading-relaxed">
              Celebrating classical symmetry, premium mulberry paper grains, and red vermillion ink-bleed dynamics inside the contemporary web viewport.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-[10px] uppercase font-sans font-semibold tracking-wider text-[#7E8B7A] block">Aesthetic Seal</span>
              <span className="text-xs text-[#1C1C1C] font-serif">“千秋一夢，水墨相伴”</span>
            </div>
            
            <div 
              className="w-10 h-10 bg-[#C82423] hover:bg-[#FAF7F2] hover:text-[#C82423] border-2 border-[#C82423] text-white flex items-center justify-center font-bold text-sm rounded cursor-pointer transition-all shadow-md"
              style={{ filter: 'url(#ink-bleed)' }}
              onClick={() => { triggerPluck(783.99); showToast("Imperial ink stamp printed on the footer."); }}
            >
              印章
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-[#D8C9B5]/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#7D705C] uppercase tracking-widest font-sans font-semibold">
          <span>© 2026 INK WHISPERS. ALL INTENTIONAL STROKES PRESERVED.</span>
          <div className="flex gap-4">
            <a href="#" onClick={(e) => { e.preventDefault(); setSelectedTab('scroll'); triggerPluck(261.63); }} className="hover:text-[#C82423]">SCROLLS</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setSelectedTab('poetry'); triggerPluck(293.66); }} className="hover:text-[#C82423]">POETRY</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setSelectedTab('seal'); triggerPluck(329.63); }} className="hover:text-[#C82423]">SEAL</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setSelectedTab('colors'); triggerPluck(392.00); }} className="hover:text-[#C82423]">PIGMENTS</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
7