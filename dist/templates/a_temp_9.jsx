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