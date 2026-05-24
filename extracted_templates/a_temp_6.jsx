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