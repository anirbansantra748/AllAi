import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Compass, 
  Calendar, 
  Scissors, 
  ChevronRight, 
  Volume2, 
  VolumeX, 
  Grid, 
  Clock, 
  MapPin, 
  ShoppingBag, 
  Award,
  ArrowRight,
  User,
  Phone,
  Mail,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

// Injection of beautiful serif fonts for that high-end editorial look
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Noto+Serif+SC:wght@300;400;600;900&family=Montserrat:wght@200;300;400;500&display=swap');
    
    .font-serif-en {
      font-family: 'Cormorant Garamond', serif;
    }
    .font-serif-zh {
      font-family: 'Noto Serif SC', serif;
    }
    .font-sans-clean {
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 0.08em;
    }
    
    /* Elegant Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #F4F0EA;
    }
    ::-webkit-scrollbar-thumb {
      background: #C3B091;
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #D35230;
    }
  `}</style>
);

export default function App() {
  // Navigation & UI State
  const [activeTab, setActiveTab] = useState('home');
  const [selectedLanguage, setSelectedLanguage] = useState('ZH'); // ZH or EN
  const [isPlayingAmbient, setIsPlayingAmbient] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Customizer State
  const [customNailShape, setCustomNailShape] = useState('Almond');
  const [customBaseColor, setCustomBaseColor] = useState('Celadon');
  const [customStyle, setCustomStyle] = useState('Gold Flake');
  const [customEyelashLength, setCustomEyelashLength] = useState('11mm Natural');
  
  // Booking State
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingService, setBookingService] = useState('Fingertip Art Bespoke (Custom Nail)');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  // Sound generator for serene click interactions
  const playSoftClick = () => {
    if (!isPlayingAmbient) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(329.63, ctx.currentTime); // E4 note (Zen chime)
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch (e) {
      console.log("Audio not supported or initialized");
    }
  };

  // Translation Dictionaries
  const t = {
    ZH: {
      brand: "东方美学",
      brandSub: "Fingertip Art",
      slogan: "红了樱桃，绿了芭蕉。",
      sloganSub: "诗意停留在指尖，东方气韵与现代美学艺术的温润交融",
      bookNow: "预约雅席",
      explore: "赏析作品",
      customize: "定制指尖",
      philosophy: "造物哲学",
      serviceMenu: "雅致项目",
      customizerTitle: "指尖万象 · 在线定制",
      customizerSub: "随心搭配属于您的东方气韵，生成专属定制方案",
      contactUs: "结庐相会",
      successMsg: "雅席已备。我们将在两小时内拨打您的电话，确认本次定制细节与时间。",
      navHome: "首 页",
      navGallery: "天工画卷",
      navCustom: "指尖定制",
      navBook: "预约体验",
      shape: "甲型款式",
      baseColor: "晕染底色",
      embellish: "点缀金饰",
      eyelash: "羽睫长度"
    },
    EN: {
      brand: "Oriental Aesthetics",
      brandSub: "Fingertip Art",
      slogan: "Cherries turn red, plantains turn green.",
      sloganSub: "Poetry resting upon your fingertips. The delicate collision of classical Eastern spirit and high-end modern art.",
      bookNow: "Reserve Salon Slot",
      explore: "View Masterpieces",
      customize: "Bespoke Design",
      philosophy: "Our Philosophy",
      serviceMenu: "Salon Rituals",
      customizerTitle: "Artisanal Customizer",
      customizerSub: "Tailor your fingertip canvas with custom ink-wash gradients and organic gold foils.",
      contactUs: "Connect & Visit",
      successMsg: "Your reservation is requested. We will contact you within two hours to finalize your custom design options.",
      navHome: "Home",
      navGallery: "The Gallery",
      navCustom: "Bespoke Builder",
      navBook: "Book Appointment",
      shape: "Nail Shape",
      baseColor: "Base Gradient",
      embellish: "Embellishments",
      eyelash: "Lash Extension"
    }
  }[selectedLanguage];

  // Preset Options for Customizer
  const nailShapes = [
    { id: 'Almond', name: '杏仁甲 (Elegant Almond)', desc: '修长圆润，极具温婉东方线条' },
    { id: 'Oval', name: '古典椭圆 (Classical Oval)', desc: '百搭优雅，宛如温润白玉' },
    { id: 'Square', name: '新中式方圆 (Modern Square-Oval)', desc: '干练有度，契合现代利落风骨' },
    { id: 'Stiletto', name: '锋芒长尖 (Artistic Stiletto)', desc: '写意张扬，极富戏剧表现力' }
  ];

  const baseColors = [
    { id: 'Celadon', name: '雨过天青 (Celadon Mint)', color: 'from-[#D0DFD4] to-[#E2EBE5]', border: 'border-[#b5c7ba]' },
    { id: 'Oatmeal', name: '泥金凝脂 (Warm Oatmeal)', color: 'from-[#EFEBE4] to-[#F7F5F0]', border: 'border-[#dfd9ce]' },
    { id: 'Terracotta', name: '樱桃熟红 (Terracotta Sunset)', color: 'from-[#E47B62] to-[#D35230]', border: 'border-[#b53e1e]' },
    { id: 'Ink Wash', name: '水墨微澜 (Charcoal Ink)', color: 'from-[#4A4E4D] to-[#2B2D2F]', border: 'border-[#1f2021]' },
    { id: 'Jade', name: '寒山远黛 (Imperial Teal)', color: 'from-[#3A5F53] to-[#4F7C6F]', border: 'border-[#2c473f]' }
  ];

  const embellishments = [
    { id: 'Gold Flake', name: '散金碎玉 (Speckled Gold Leaf)', desc: '手工错落金箔，贵气内敛' },
    { id: 'Ink Lines', name: '行云流水 (Hand-painted Ink)', desc: '写意山水笔触，独一无二' },
    { id: 'Soft Pearl', name: '微芒莹润 (Ethereal Pearl Dust)', desc: '微米级极细天然贝母极光' },
    { id: 'Bare Nature', name: '素面朝天 (Pure Mineral)', desc: '无任何点缀，仅赏极光渐变' }
  ];

  const eyelashStyles = [
    { id: '9mm Natural', name: '落雨听风 (9-10mm Air-Light)', desc: '宛如天生，轻盈仿若无物' },
    { id: '11mm Elegant', name: '黛眉含黛 (11-12mm Wispy)', desc: '中式微翘，顾盼生姿' },
    { id: '13mm Drama', name: '惊鸿羽捷 (12-13mm Hybrid-Volume)', desc: '浓郁深邃，眼波流转如有神' }
  ];

  // Interactive gallery of concepts
  const galleryConcepts = [
    {
      title: "红了樱桃",
      subtitle: "The Red Cherry",
      description: "以熟红樱桃为灵感，结合金泥晕染，热烈而不失诗意。",
      bgGradient: "from-[#F7F5F0] via-[#EFEBE4] to-[#F1D7D0]",
      accentColor: "#D35230",
      imageMock: (
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
          {/* Background circles representing dynamic watercolor wash */}
          <circle cx="100" cy="100" r="80" fill="#EAE4DA" opacity="0.6"/>
          <circle cx="110" cy="90" r="50" fill="url(#cherryWash)" opacity="0.8" filter="url(#softBlur)"/>
          <circle cx="70" cy="120" r="40" fill="url(#mintWash)" opacity="0.5" filter="url(#softBlur)"/>
          {/* Exquisite branch stroke */}
          <path d="M40,50 Q100,60 140,130" stroke="#5E5346" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M100,58 Q120,30 115,15" stroke="#5E5346" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Cherries */}
          <circle cx="115" cy="15" r="7" fill="#D35230"/>
          <circle cx="120" cy="17" r="4" fill="#E88267"/>
          <circle cx="140" cy="130" r="14" fill="url(#cherryGrad)"/>
          <circle cx="145" cy="125" r="11" fill="url(#cherryGradLight)" opacity="0.9"/>
          <circle cx="132" cy="138" r="10" fill="url(#cherryGrad)"/>
          {/* Gold speckles */}
          <circle cx="85" cy="95" r="1.5" fill="#D4AF37"/>
          <circle cx="150" cy="80" r="2" fill="#D4AF37"/>
          <circle cx="60" cy="140" r="1" fill="#D4AF37"/>
          <circle cx="110" cy="150" r="2.5" fill="#D4AF37"/>
          {/* Chinese Seal Stamp */}
          <rect x="35" y="145" width="18" height="18" fill="#D35230" rx="1"/>
          <text x="44" y="159" fill="#F7F5F0" fontSize="10" fontFamily="Noto Serif SC" fontWeight="bold" textAnchor="middle">樱</text>
        </svg>
      )
    },
    {
      title: "绿了芭蕉",
      subtitle: "The Plantain Leaf",
      description: "一抹微雨过后的天青与草木深绿，指尖宛如流淌着江南夏日的清凉。",
      bgGradient: "from-[#F7F5F0] via-[#E5EBE7] to-[#D5DFD8]",
      accentColor: "#4F7C6F",
      imageMock: (
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="85" fill="#E1EAE4" opacity="0.7"/>
          <path d="M30,170 Q70,90 170,50" stroke="#3A5F53" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
          {/* Stylized watercolor banana leaf */}
          <path d="M40,160 C70,110 120,80 160,70 C140,100 100,130 50,170 Z" fill="url(#leafGrad)" opacity="0.8" filter="url(#softBlur)"/>
          <path d="M50,150 C80,105 130,75 170,60 C145,95 105,120 60,158 Z" fill="url(#leafGradLight)" opacity="0.6"/>
          {/* Fine ink veins */}
          <path d="M52,148 Q95,108 165,63" stroke="#233B33" strokeWidth="1" opacity="0.6"/>
          <path d="M85,120 Q100,110 115,108" stroke="#233B33" strokeWidth="0.7" opacity="0.5"/>
          <path d="M105,105 Q120,95 135,93" stroke="#233B33" strokeWidth="0.7" opacity="0.5"/>
          {/* Golden rain droplets */}
          <circle cx="110" cy="75" r="3" fill="#D4AF37" opacity="0.9"/>
          <circle cx="111" cy="74" r="1.5" fill="#FFF"/>
          <circle cx="135" cy="115" r="2" fill="#D4AF37" opacity="0.8"/>
          {/* Chinese Seal Stamp */}
          <rect x="150" y="145" width="18" height="18" fill="#4F7C6F" rx="1"/>
          <text x="159" y="159" fill="#F7F5F0" fontSize="10" fontFamily="Noto Serif SC" fontWeight="bold" textAnchor="middle">蕉</text>
        </svg>
      )
    },
    {
      title: "泥金微芒",
      subtitle: "The Whispering Gold",
      description: "宋代泥金工艺精髓。柔白凝脂作底，扫以璀璨金沙，于寂静处闪耀奢华。",
      bgGradient: "from-[#F7F5F0] via-[#EFEBE4] to-[#E9DFCE]",
      accentColor: "#C3B091",
      imageMock: (
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" fill="#F1ECE3" opacity="0.9"/>
          {/* Soft amber clay wash */}
          <ellipse cx="100" cy="105" rx="60" ry="40" fill="url(#goldWash)" opacity="0.7" filter="url(#softBlur)"/>
          {/* Dynamic Gold Dust paint waves */}
          <path d="M40,120 C70,70 130,130 160,80" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
          <path d="M45,125 C75,75 135,135 165,85" stroke="#C3B091" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          {/* Elegant minimalist cherry branch silhouette */}
          <path d="M50,40 Q90,50 120,110" stroke="#4A453F" strokeWidth="1.2" opacity="0.5"/>
          {/* Gold Foil particles */}
          <polygon points="110,80 114,84 112,87 108,83" fill="#D4AF37"/>
          <polygon points="135,95 141,96 139,101 133,98" fill="#D4AF37"/>
          <polygon points="70,110 73,114 70,116 67,112" fill="#D4AF37"/>
          <circle cx="102" cy="85" r="2" fill="#D4AF37"/>
          <circle cx="125" cy="105" r="1.5" fill="#D4AF37"/>
          {/* Chinese Seal Stamp */}
          <rect x="35" y="35" width="18" height="18" fill="#D4AF37" rx="1"/>
          <text x="44" y="49" fill="#F7F5F0" fontSize="10" fontFamily="Noto Serif SC" fontWeight="bold" textAnchor="middle">金</text>
        </svg>
      )
    }
  ];

  // Auto-scroll Ambient background texture generation
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#252825] overflow-x-hidden selection:bg-[#D35230] selection:text-white font-serif-zh transition-all duration-700 ease-in-out">
      <FontLink />

      {/* Embedded SVG Filters used for Ink-wash watercolor textures inside the page */}
      <svg className="hidden">
        <defs>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="9" />
          </filter>
          <filter id="heavyBlur">
            <feGaussianBlur stdDeviation="24" />
          </filter>
          <radialGradient id="cherryWash" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D35230" stopOpacity="1" />
            <stop offset="100%" stopColor="#EFEBE4" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mintWash" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4F7C6F" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EFEBE4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cherryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5876B" />
            <stop offset="70%" stopColor="#D35230" />
            <stop offset="100%" stopColor="#8A260F" />
          </linearGradient>
          <linearGradient id="cherryGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC8BA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D35230" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#253D35" />
            <stop offset="60%" stopColor="#4F7C6F" />
            <stop offset="100%" stopColor="#A2BFB6" />
          </linearGradient>
          <linearGradient id="leafGradLight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F7C6F" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#E0ECE7" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="goldWash" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E5C158" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F7F5F0" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Aesthetic Top Ambient Glows mimicking the Celadon-to-Oatmeal gradient from the image */}
      <div className="absolute top-0 left-0 w-full h-[85vh] pointer-events-none overflow-hidden z-0">
        {/* Soft Mint-Green gradient top-left */}
        <div className="absolute top-0 left-0 w-[60%] h-[70%] bg-[#D0DFD4] opacity-50 rounded-full filter blur-[120px] -translate-x-1/4 -translate-y-1/3 transition-all duration-1000"></div>
        {/* Soft Warm Terracotta glow top-right */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#F3DDD2] opacity-60 rounded-full filter blur-[100px] transition-all duration-1000"></div>
        {/* Subtle gold dust speckles overlay */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px), radial-gradient(#D4AF37 1.5px, transparent 1.5px)`,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 40px'
        }}></div>
      </div>

      {/* Ambient Sound Trigger & Language Switcher Float (Fixed) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button 
          onClick={() => { setIsPlayingAmbient(!isPlayingAmbient); playSoftClick(); }}
          className="p-3.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-[#E9DFCE] text-[#5E5346] hover:bg-[#D35230] hover:text-white transition-all duration-500 group"
          title="Zen sound ambience"
        >
          {isPlayingAmbient ? (
            <Volume2 className="w-5 h-5 animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 opacity-60 group-hover:opacity-100" />
          )}
        </button>
        <button 
          onClick={() => { setSelectedLanguage(selectedLanguage === 'ZH' ? 'EN' : 'ZH'); playSoftClick(); }}
          className="w-12 h-12 bg-[#252825] text-[#F7F5F0] font-sans-clean text-xs font-bold rounded-full shadow-lg hover:bg-[#D35230] transition-all duration-500 flex items-center justify-center border border-[#4A453F]"
        >
          {selectedLanguage}
        </button>
      </div>

      {/* HEADER SECTION */}
      <header className="relative z-40 max-w-7xl mx-auto px-6 py-6 md:py-8 flex justify-between items-center">
        {/* Logo block replicating the elegant serif of "Fingertip" */}
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => { setActiveTab('home'); playSoftClick(); }}>
          <div className="relative">
            <span className="font-serif-en text-3xl md:text-4xl font-light tracking-wide text-[#252825] group-hover:text-[#D35230] transition-colors duration-500">
              Fingertip<span className="italic font-normal">.</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D35230] group-hover:w-full transition-all duration-700"></span>
          </div>
          
          <div className="h-8 w-[1px] bg-[#E9DFCE] hidden sm:block"></div>
          
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-serif-zh text-sm font-semibold tracking-widest text-[#252825]">{t.brand}</span>
            <span className="font-sans-clean text-[9px] text-[#8A7F71] uppercase">{t.brandSub}</span>
          </div>

          {/* Miniature Imperial Seal */}
          <div className="w-7 h-7 bg-[#D35230] flex items-center justify-center rounded-[3px] shadow-sm transform group-hover:rotate-12 transition-transform duration-500">
            <span className="text-white text-xs font-serif-zh font-bold">美</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-sans-clean text-xs font-medium tracking-widest text-[#5E5346]">
          {[
            { id: 'home', label: t.navHome },
            { id: 'gallery', label: t.navGallery },
            { id: 'customizer', label: t.navCustom },
            { id: 'booking', label: t.navBook }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => { setActiveTab(item.id); playSoftClick(); }}
              className={`relative py-2 transition-colors duration-300 hover:text-[#D35230] ${activeTab === item.id ? 'text-[#D35230]' : 'text-[#5E5346]'}`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#D35230] rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Call to action & Hamburger */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => { setActiveTab('booking'); playSoftClick(); }}
            className="hidden lg:flex items-center gap-2 font-sans-clean text-xs font-semibold tracking-widest bg-[#252825] text-[#F7F5F0] px-6 py-3.5 rounded-full hover:bg-[#D35230] transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>{t.bookNow}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-[#252825] hover:text-[#D35230] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#F7F5F0]/95 backdrop-blur-md z-30 pt-24 px-8 flex flex-col gap-6 animate-fadeIn md:hidden">
          {[
            { id: 'home', label: t.navHome },
            { id: 'gallery', label: t.navGallery },
            { id: 'customizer', label: t.navCustom },
            { id: 'booking', label: t.navBook }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); playSoftClick(); }}
              className={`text-left font-serif-zh text-2xl tracking-widest py-3 border-b border-[#E9DFCE] ${activeTab === item.id ? 'text-[#D35230] font-bold' : 'text-[#5E5346]'}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { setActiveTab('booking'); setMobileMenuOpen(false); playSoftClick(); }}
            className="w-full text-center font-sans-clean text-sm font-semibold tracking-widest bg-[#D35230] text-white py-4 rounded-xl mt-4"
          >
            {t.bookNow}
          </button>
        </div>
      )}

      {/* TAB CONTENT: HOME */}
      {activeTab === 'home' && (
        <main className="relative z-10 max-w-7xl mx-auto px-6 py-4 md:py-12">
          {/* HERO SECTION - Splendid Split Grid echoing the inspiration image */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10">
              
              {/* Minimalist Header Tag */}
              <div className="flex items-center gap-2 mb-6">
                <span className="font-sans-clean text-[10px] text-[#8A7F71] uppercase tracking-[0.2em]">CUSTOM NAIL & EYELASH DESIGN</span>
                <div className="w-6 h-[1px] bg-[#C3B091]"></div>
                <span className="font-sans-clean text-[10px] text-[#D35230] uppercase tracking-[0.2em]">ARTISTRY</span>
              </div>

              {/* Bold Editorial Serif Header matching "Fingertip" typography */}
              <h1 className="font-serif-en text-6xl md:text-8xl lg:text-9xl text-[#252825] leading-none mb-4 font-light relative select-none">
                Fingertip
                <span className="block font-serif-zh text-4xl md:text-6xl font-normal text-[#252825] tracking-widest mt-4">
                  东方美学<span className="text-[#D35230]">。</span>
                </span>
              </h1>

              {/* Minimalist Micro subtitle lines mimicking image text */}
              <div className="font-sans-clean text-[9px] text-[#8A7F71] uppercase tracking-[0.15em] mb-8 leading-relaxed max-w-md">
                ORIENTAL AESTHETICS MEETS FINGERTIP ART. ORIENTAL AESTHETICS MEETS FINGERTIP ART.
                CUSTOM LUXURY NAIL SYSTEM. DESIGNED FOR THE POETIC SOUL.
              </div>

              {/* Terracotta/Orange Poetry Banner echoing the image's red tag: "红了樱桃 绿了芭蕉" */}
              <div className="relative overflow-hidden bg-[#D35230] text-white py-3.5 px-6 md:px-8 rounded-lg mb-10 shadow-lg flex items-center gap-4 group cursor-pointer hover:bg-[#b53e1e] transition-colors duration-500">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white/10 font-serif-zh text-5xl font-black select-none pointer-events-none pr-4">
                  美
                </div>
                <div className="w-2.5 h-2.5 bg-[#F7F5F0] rounded-full animate-ping"></div>
                <p className="font-serif-zh text-lg md:text-xl tracking-[0.25em] font-medium">
                  {t.slogan}
                </p>
              </div>

              {/* Detailed Philosophy snippet */}
              <p className="font-serif-zh text-base md:text-lg text-[#5E5346] leading-relaxed max-w-xl mb-10">
                {t.sloganSub}
              </p>

              {/* CTA Button Row */}
              <div className="flex flex-wrap gap-4 items-center">
                <button 
                  onClick={() => { setActiveTab('customizer'); playSoftClick(); }}
                  className="bg-[#252825] hover:bg-[#D35230] text-[#F7F5F0] px-8 py-4 rounded-full font-sans-clean text-xs font-semibold tracking-widest transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-3 group"
                >
                  <span>{t.customize}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => { setActiveTab('gallery'); playSoftClick(); }}
                  className="border border-[#C3B091] text-[#252825] hover:bg-white px-8 py-4 rounded-full font-sans-clean text-xs font-semibold tracking-widest transition-all duration-500"
                >
                  {t.explore}
                </button>
              </div>
            </div>

            {/* Right Artistic Mock-up Column - Captures the elegant shapes and watercolor art from the bottom of the uploaded image */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center items-center">
              {/* Outer decorative soft frames inspired by Chinese screen art */}
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[40px] border border-[#E9DFCE] p-4 bg-[#F5F2EC]/40 backdrop-blur-sm shadow-xl overflow-hidden group">
                {/* Embedded decorative ink spray circles */}
                <div className="absolute top-10 right-10 w-44 h-44 rounded-full bg-gradient-to-br from-[#E1ECE5] to-transparent filter blur-2xl opacity-80"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gradient-to-tr from-[#F1DDD4] to-transparent filter blur-2xl opacity-60"></div>

                {/* The main decorative artwork board */}
                <div className="w-full h-full rounded-[32px] bg-gradient-to-b from-[#E2EBE5] via-[#F4F0EA] to-[#F1E8DC] p-6 relative flex flex-col justify-between overflow-hidden border border-white/60">
                  
                  {/* Miniature calligraphy watermarks */}
                  <div className="absolute top-12 left-6 opacity-15 font-serif-zh text-xl tracking-[0.4em] leading-relaxed select-none pointer-events-none">
                    有风自南<br/>翼彼新荷
                  </div>

                  {/* Top Art: Watercolor Cherry/Plantain custom illustration */}
                  <div className="w-full h-[60%] relative flex items-center justify-center">
                    <div className="w-56 h-56 transform group-hover:scale-105 transition-transform duration-1000 ease-out">
                      {galleryConcepts[0].imageMock}
                    </div>
                  </div>

                  {/* Vertical Signature Text Blocks mirroring bottom of image */}
                  <div className="flex justify-between items-end mt-4 relative z-10">
                    <div className="flex flex-col text-left">
                      <span className="font-serif-en text-2xl font-light tracking-wide text-[#252825]">Fingertip Art</span>
                      <span className="font-sans-clean text-[9px] text-[#8A7F71] uppercase tracking-widest mt-1">NAIL & LASH ATELIER</span>
                    </div>

                    {/* Vertical Chinese text block with fine borders */}
                    <div className="border-l border-[#C3B091] pl-3 py-1 flex flex-col items-start">
                      <div className="font-serif-zh text-xs text-[#252825] leading-normal tracking-widest font-semibold flex flex-col gap-0.5">
                        <span>红了樱桃</span>
                        <span>绿了芭蕉</span>
                      </div>
                      <span className="font-sans-clean text-[7px] text-[#8A7F71] mt-1.5 uppercase">EST. 2026</span>
                    </div>
                  </div>

                  {/* Delicate tiny gold dust sparkle points */}
                  <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-[#D4AF37] rounded-full animate-ping"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-60"></div>
                </div>
              </div>

              {/* Floating secondary accent card mimicking the 'Fingertip Art' bottom container */}
              <div className="absolute -bottom-8 -left-6 md:-left-12 w-[160px] md:w-[200px] bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-[#E9DFCE] hidden sm:block transform hover:-translate-y-2 transition-transform duration-500">
                <div className="flex gap-3 items-center mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#4F7C6F]"></div>
                  <span className="font-serif-zh text-xs font-semibold text-[#252825] tracking-widest">指尖 · 天青釉</span>
                </div>
                <div className="w-full h-[1px] bg-[#E9DFCE] mb-3"></div>
                <p className="font-serif-zh text-[11px] text-[#5E5346] leading-relaxed">
                  汲取汝窑天青色，温润如玉，极简高雅。
                </p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="font-sans-clean text-[9px] text-[#D35230] font-bold">¥380 / Set</span>
                  <span className="text-[9px] font-sans-clean text-[#8A7F71]">Bespoke Series</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: BRAND PHILOSOPHY / THE THREE PILLARS */}
          <section className="py-16 border-t border-[#E9DFCE] relative">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-sans-clean text-xs text-[#D35230] font-semibold tracking-[0.2em] block mb-3 uppercase">{t.philosophy}</span>
              <h2 className="font-serif-zh text-3xl md:text-4xl font-light text-[#252825] tracking-widest mb-4">
                匠心天工，寄情毫厘
              </h2>
              <p className="font-serif-zh text-sm text-[#8A7F71] leading-relaxed">
                指尖不仅是方寸之地，更是安放生活诗意、彰显内在气度与温润品味的思想画卷。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "天青矿物凝胶",
                  desc: "我们甄选来自天然矿石、贝母、琥珀研磨的微米色浆。不伤本甲，持久透亮，呈现出极具玉石通透感的中国绝色。",
                  tag: "Natural Ingredients"
                },
                {
                  num: "02",
                  title: "写意御笔手绘",
                  desc: "每一套定制美甲皆由美院班底画师手工执笔。沿袭中国画“骨法用笔”的勾勒技巧，让金丝、水墨、花卉在指尖自由呼吸。",
                  tag: "Pure Hand-painted"
                },
                {
                  num: "03",
                  title: "新中式羽睫艺术",
                  desc: "依据眼部骨相进行中式留白规划。采用超轻盈空气中空材质，根据气场量身定制翘度，打造古典水眸的澄澈与神采。",
                  tag: "Lash Architecture"
                }
              ].map((pillar, idx) => (
                <div key={idx} className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-[#E9DFCE] hover:shadow-xl hover:bg-white transition-all duration-500 text-left relative overflow-hidden group">
                  <div className="absolute right-6 top-6 font-serif-en text-5xl font-light text-[#E9DFCE] group-hover:text-[#D35230] transition-colors duration-500">
                    {pillar.num}
                  </div>
                  <span className="font-sans-clean text-[9px] text-[#D35230] uppercase tracking-widest font-semibold block mb-4">{pillar.tag}</span>
                  <h3 className="font-serif-zh text-xl font-medium text-[#252825] tracking-widest mb-4">{pillar.title}</h3>
                  <p className="font-serif-zh text-sm text-[#5E5346] leading-relaxed">{pillar.desc}</p>
                  
                  {/* Subtle red bottom indicator on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D35230] group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: INTERACTIVE CUSTOMIZER HIGHLIGHT */}
          <section className="my-16 py-12 rounded-[40px] bg-gradient-to-br from-[#E2EBE5] via-[#F5F2EC] to-[#F1E8DC] p-8 md:p-12 relative overflow-hidden border border-[#E9DFCE] flex flex-col lg:flex-row gap-10 items-center">
            
            {/* Background watercolor decor inside banner */}
            <div className="absolute right-0 bottom-0 w-96 h-96 opacity-20 pointer-events-none transform translate-x-1/4 translate-y-1/4">
              {galleryConcepts[1].imageMock}
            </div>

            <div className="lg:w-1/2 text-left relative z-10">
              <span className="font-sans-clean text-xs text-[#D35230] font-bold tracking-[0.2em] block mb-3 uppercase">ONLINE WORKSHOP</span>
              <h2 className="font-serif-zh text-3xl md:text-5xl font-light text-[#252825] tracking-wide leading-tight mb-6">
                开启您的专属<br/>
                <span className="italic font-serif-en font-light text-[#D35230] text-4xl md:text-6xl">“指尖万象”</span> 定制之旅
              </h2>
              <p className="font-serif-zh text-base text-[#5E5346] leading-relaxed mb-8 max-w-md">
                我们提供高度个性化的在线搭配系统。您可以初步挑选喜好的甲型、国风晕染底色及金屑点缀，生成专属定制方案并预约进店手艺人精细还原。
              </p>
              
              <button 
                onClick={() => { setActiveTab('customizer'); playSoftClick(); }}
                className="bg-[#252825] hover:bg-[#D35230] text-white px-8 py-4 rounded-full font-sans-clean text-xs font-semibold tracking-widest transition-all duration-500 shadow-lg flex items-center gap-3"
              >
                <span>立即开始搭配</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:w-1/2 flex justify-center w-full">
              {/* Preview Carousel Preview Box */}
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-[#E9DFCE] w-full max-w-sm relative">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-serif-zh text-xs text-[#8A7F71] tracking-widest">REALTIME DEMO</span>
                  <div className="px-2 py-1 bg-[#D35230]/10 rounded text-[#D35230] text-[9px] font-bold font-sans-clean">ACTIVE</div>
                </div>

                <div className="w-full aspect-[4/3] bg-gradient-to-tr from-[#EFEBE4] to-[#E2EBE5] rounded-2xl flex items-center justify-center p-4 border border-[#E9DFCE] overflow-hidden relative group">
                  
                  {/* Mock dynamic custom nail renders depending on colors */}
                  <div className="flex gap-3 justify-center items-end h-full py-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div 
                        key={i} 
                        className={`w-5 h-24 bg-gradient-to-t from-[#D35230] to-[#EFEBE4] rounded-t-full shadow-md border border-[#E9DFCE]/60 transform origin-bottom hover:-translate-y-2 transition-transform duration-300`}
                        style={{
                          height: `${70 + (i % 3) * 12}px`,
                        }}
                      >
                        {/* Gold sparkle tip mock */}
                        <div className="w-full h-4 bg-gradient-to-b from-[#D4AF37] to-transparent rounded-t-full opacity-80"></div>
                      </div>
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                    <span className="font-serif-zh text-xs bg-white text-[#252825] px-3 py-1.5 rounded-full shadow-md">点击进入深度定制</span>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-serif-zh text-sm font-semibold text-[#252825] text-left">樱熟金屑 · Bespoke Set</h4>
                    <p className="font-serif-zh text-[10px] text-[#8A7F71] text-left mt-0.5">杏仁甲型 / 散金碎玉装饰</p>
                  </div>
                  <span className="font-serif-en text-sm font-bold text-[#D35230]">¥420</span>
                </div>
              </div>
            </div>
          </section>

          {/* REAL CLIENT TESTIMONIALS / POETIC VOICES */}
          <section className="py-16 border-t border-[#E9DFCE]">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-sans-clean text-xs text-[#D35230] font-semibold tracking-[0.2em] block mb-3 uppercase">雅客心声</span>
              <h2 className="font-serif-zh text-3xl md:text-4xl font-light text-[#252825] tracking-widest">
                流淌在指尖的故事
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "“不仅是一次美甲，更像是一场治愈的江南茶事。画师笔触细腻，甲面的写意芭蕉晕染出水墨深浅，太惊艳了。”",
                  client: "林清漪 (主编)",
                  style: "绿了芭蕉 (杏仁甲)"
                },
                {
                  quote: "“非常高级的新中式审美，没有多余浮夸的钻饰，全凭金泥、矿物天然底色和大师手绘。每次看手都觉得内心平和。”",
                  client: "苏蔓 (艺术策展人)",
                  style: "泥金微芒 (方圆甲)"
                },
                {
                  quote: "“睫毛嫁接轻盈得完全无感。根据我的内双骨相设计了稍微留白的落雨风款式，眼睛瞬间有了古典画卷中的清澈灵气。”",
                  client: "章可莹 (独立摄影师)",
                  style: "羽睫 · 落雨听风款"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-[#E9DFCE] shadow-sm flex flex-col justify-between text-left relative">
                  {/* Soft watercolor floral wash behind each testy */}
                  <div className="absolute top-2 right-2 w-16 h-16 opacity-5 pointer-events-none">
                    <rect width="100%" height="100%" fill="#D35230" rx="999"/>
                  </div>
                  
                  <p className="font-serif-zh text-base text-[#5E5346] leading-relaxed italic mb-8">
                    {item.quote}
                  </p>
                  
                  <div className="flex justify-between items-center border-t border-[#F4F0EA] pt-4">
                    <span className="font-serif-zh text-sm font-semibold text-[#252825]">{item.client}</span>
                    <span className="font-sans-clean text-[10px] text-[#D35230] bg-[#D35230]/5 px-2.5 py-1 rounded-full uppercase font-medium">{item.style}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* TAB CONTENT: THE GALLERY (天工画卷) */}
      {activeTab === 'gallery' && (
        <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 animate-fadeIn">
          {/* Header section with vertical scroll feel */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans-clean text-xs text-[#D35230] font-bold tracking-[0.2em] block mb-3 uppercase">THE POETIC ARCHIVE</span>
            <h1 className="font-serif-zh text-4xl md:text-5xl font-light text-[#252825] tracking-widest mb-6">
              天工画卷 · 绝色系列
            </h1>
            <p className="font-serif-zh text-base text-[#8A7F71] leading-relaxed">
              汲取四时风物、宋瓷画卷精髓。每一款都拥有独立的设计灵感。点击定制，即可将设计带入线上搭配工作坊。
            </p>
          </div>

          {/* Exhibition Grid showcasing watercolor masterpieces with active hover styling */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {galleryConcepts.map((item, idx) => (
              <div 
                key={idx} 
                className={`rounded-[32px] bg-gradient-to-b ${item.bgGradient} p-8 border border-[#E9DFCE] hover:shadow-2xl transition-all duration-700 flex flex-col justify-between group h-[600px] text-left relative overflow-hidden`}
              >
                {/* Dynamic Gold sparkle dots */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                  backgroundImage: `radial-gradient(${item.accentColor} 1.5px, transparent 1.5px)`,
                  backgroundSize: '40px 40px'
                }}></div>

                <div>
                  {/* Layout header containing style index and category stamp */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-serif-en text-3xl font-light text-[#8A7F71]">0{idx+1}</span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center border border-[#C3B091]" style={{ borderColor: item.accentColor }}>
                      <span className="text-xs font-serif-zh font-bold" style={{ color: item.accentColor }}>{item.title[0]}</span>
                    </div>
                  </div>

                  {/* High fidelity title typography mimicking fingertip cover art */}
                  <h3 className="font-serif-zh text-3xl font-semibold text-[#252825] tracking-widest mb-1 group-hover:text-[#D35230] transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-serif-en text-lg italic text-[#8A7F71] block mb-4">{item.subtitle}</span>
                  <p className="font-serif-zh text-sm text-[#5E5346] leading-relaxed max-w-xs">{item.description}</p>
                </div>

                {/* Simulated Ink Wash interactive art center */}
                <div className="w-full h-56 relative flex items-center justify-center my-6 transform group-hover:scale-105 transition-transform duration-700 ease-out">
                  {item.imageMock}
                </div>

                <div className="border-t border-black/10 pt-6 flex justify-between items-center relative z-10">
                  <div className="flex flex-col">
                    <span className="font-sans-clean text-[10px] text-[#8A7F71] uppercase">Estimated Pricing</span>
                    <span className="font-serif-en text-xl font-bold text-[#252825]" style={{ color: item.accentColor }}>¥380 - ¥460</span>
                  </div>

                  <button 
                    onClick={() => { 
                      setCustomBaseColor(item.title === "红了樱桃" ? "Terracotta" : item.title === "绿了芭蕉" ? "Celadon" : "Oatmeal");
                      setActiveTab('customizer'); 
                      playSoftClick(); 
                    }}
                    className="bg-[#252825] text-white hover:bg-[#D35230] p-4 rounded-full transition-all duration-500 hover:rotate-45"
                    title="Customize this style"
                  >
                    <Compass className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Special Craftmanship Showcase Panel */}
          <div className="mt-20 p-8 md:p-12 rounded-[40px] bg-white border border-[#E9DFCE] text-left flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <h3 className="font-serif-zh text-2xl font-bold text-[#252825] mb-4">关于我们的手艺人</h3>
              <p className="font-serif-zh text-sm text-[#5E5346] leading-relaxed">
                我们的美甲师平均拥有5年以上传统绘画与精细彩绘经验，定期研习古代陶瓷、画轴之配色肌理，确保毫厘之间皆是匠心。
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {[
                { title: "美院毕业画师", desc: "100%执笔人员" },
                { title: "天然矿物矿彩", desc: "无毒无味安全" },
                { title: "单客雅室服务", desc: "禅意独立空间" },
                { title: "10日内免费重修", desc: "极致售后体验" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-[#F7F5F0] p-4 rounded-2xl border border-[#E9DFCE] text-center">
                  <span className="font-serif-zh text-sm font-bold text-[#D35230] block mb-1">{stat.title}</span>
                  <span className="font-serif-zh text-[11px] text-[#8A7F71]">{stat.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* TAB CONTENT: BESPOKE CUSTOMIZER (指尖定制) */}
      {activeTab === 'customizer' && (
        <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 animate-fadeIn">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans-clean text-xs text-[#D35230] font-bold tracking-[0.2em] block mb-3 uppercase">ONLINE WORKSHOP</span>
            <h1 className="font-serif-zh text-4xl font-light text-[#252825] tracking-widest mb-4">
              {t.customizerTitle}
            </h1>
            <p className="font-serif-zh text-sm text-[#8A7F71] leading-relaxed">
              {t.customizerSub}
            </p>
          </div>

          {/* Main Customizer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left: Responsive Real-Time Graphic Preview of Selected Nail / Eyelash Set */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-[40px] bg-white border border-[#E9DFCE] shadow-lg text-left relative overflow-hidden">
              
              {/* Premium Gold Specks overlay for customized preview */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}></div>

              <div>
                <span className="font-sans-clean text-[9px] text-[#D35230] font-bold tracking-widest block mb-1 uppercase">ESTHETIC BLUEPRINT PREVIEW</span>
                <h3 className="font-serif-zh text-2xl font-semibold text-[#252825] tracking-widest mb-6">我的指尖美学提案</h3>
                
                {/* Visual nail model block */}
                <div className="w-full aspect-[4/3] rounded-3xl bg-gradient-to-tr from-[#F1ECE3] via-[#EFEBE4] to-[#E5ECE8] border border-[#E9DFCE] relative flex items-center justify-center p-6 shadow-inner">
                  
                  {/* Previewing the chosen color system inside a beautiful traditional Chinese fan or screen mask */}
                  <div className="absolute inset-4 rounded-2xl border border-[#D4AF37]/20 flex items-center justify-center bg-white/40 overflow-hidden">
                    
                    {/* Centered representation of the customized nail fingers */}
                    <div className="flex gap-4 items-end justify-center h-full pt-16 pb-6 w-full max-w-xs relative">
                      
                      {/* Dynamic Ink-wash filter overlay or gold particle shower inside preview based on choice */}
                      {customStyle === 'Gold Flake' && (
                        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#D4AF37_2px,transparent_2px)] [background-size:24px_24px]"></div>
                      )}
                      {customStyle === 'Ink Lines' && (
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:12px_12px] filter blur-[0.5px]"></div>
                      )}

                      {[1, 2, 3, 4, 5].map((index) => {
                        const baseObj = baseColors.find(c => c.id === customBaseColor);
                        return (
                          <div 
                            key={index} 
                            className={`w-6 shadow-lg border border-white/80 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden
                              ${baseObj ? `bg-gradient-to-t ${baseObj.color}` : 'bg-stone-300'} 
                              ${customNailShape === 'Almond' ? 'rounded-t-full' : ''}
                              ${customNailShape === 'Oval' ? 'rounded-t-[18px]' : ''}
                              ${customNailShape === 'Square' ? 'rounded-t-md' : ''}
                              ${customNailShape === 'Stiletto' ? 'rounded-t-[40px]' : ''}
                            `}
                            style={{
                              height: `${70 + (index === 1 ? 5 : index === 2 ? 18 : index === 3 ? 24 : index === 4 ? 14 : 0)}px`,
                            }}
                          >
                            {/* Accent Tips representing chosen Embellishment */}
                            {customStyle === 'Gold Flake' && (
                              <div className="w-full h-1/2 bg-gradient-to-b from-[#D4AF37]/90 via-[#E5C158]/50 to-transparent flex flex-col gap-0.5 items-center p-0.5">
                                <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-pulse"></div>
                              </div>
                            )}

                            {customStyle === 'Ink Lines' && (
                              <div className="w-full h-full bg-gradient-to-tr from-transparent to-[#252825]/70 flex flex-col justify-start p-1">
                                <div className="w-[1px] h-3/4 bg-[#1f2021]/60 mx-auto"></div>
                              </div>
                            )}

                            {customStyle === 'Soft Pearl' && (
                              <div className="w-full h-1/3 bg-gradient-to-b from-white/90 to-transparent animate-pulse"></div>
                            )}

                            {customStyle === 'Bare Nature' && (
                              <div className="w-full h-2 bg-white/20"></div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Miniature watermark stamp on the canvas */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-60">
                      <span className="font-serif-zh text-[8px] text-[#252825]">手作天工</span>
                      <div className="w-3.5 h-3.5 bg-[#D35230] rounded-[2px] flex items-center justify-center">
                        <span className="text-[6px] text-white font-serif-zh">印</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Design Spec Sheets */}
              <div className="mt-8 border-t border-[#F4F0EA] pt-6 flex flex-col gap-4">
                <div className="flex justify-between text-sm">
                  <span className="font-serif-zh text-[#8A7F71]">甲型样式 (Shape)</span>
                  <span className="font-serif-zh text-[#252825] font-semibold">{nailShapes.find(s => s.id === customNailShape)?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-serif-zh text-[#8A7F71]">选定底色 (Base Color)</span>
                  <span className="font-serif-zh text-[#252825] font-semibold">{baseColors.find(c => c.id === customBaseColor)?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-serif-zh text-[#8A7F71]">国风工艺 (Embellish)</span>
                  <span className="font-serif-zh text-[#252825] font-semibold">{embellishments.find(e => e.id === customStyle)?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-serif-zh text-[#8A7F71]">羽睫搭配 (Eyelash)</span>
                  <span className="font-serif-zh text-[#252825] font-semibold">{eyelashStyles.find(l => l.id === customEyelashLength)?.name}</span>
                </div>

                <div className="w-full h-[1px] bg-[#F4F0EA] my-2"></div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-sans-clean text-[9px] text-[#8A7F71] uppercase">Estimated Total</span>
                    <p className="font-serif-en text-2xl font-bold text-[#D35230]">¥420 - ¥490</p>
                  </div>
                  <button 
                    onClick={() => { 
                      setBookingService(`指尖定制: ${nailShapes.find(s => s.id === customNailShape)?.name} | ${baseColors.find(c => c.id === customBaseColor)?.name}`);
                      setActiveTab('booking'); 
                      playSoftClick(); 
                    }}
                    className="bg-[#252825] hover:bg-[#D35230] text-white px-6 py-3 rounded-full font-sans-clean text-xs font-semibold tracking-widest transition-colors duration-500"
                  >
                    选用此配置预约
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Detailed Options Selector Panels */}
            <div className="lg:col-span-7 flex flex-col gap-8 text-left">
              
              {/* Option 1: Shape Selector */}
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-[#E9DFCE] shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#D35230]/10 text-[#D35230] flex items-center justify-center font-serif-en text-xs font-bold">1</span>
                  <h3 className="font-serif-zh text-lg font-bold text-[#252825] tracking-widest">{t.shape}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {nailShapes.map((shape) => (
                    <button
                      key={shape.id}
                      onClick={() => { setCustomNailShape(shape.id); playSoftClick(); }}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 ${customNailShape === shape.id ? 'border-[#D35230] bg-[#D35230]/5 shadow-sm' : 'border-[#E9DFCE] hover:border-[#C3B091] bg-white'}`}
                    >
                      <p className="font-serif-zh text-sm font-semibold text-[#252825]">{shape.name}</p>
                      <p className="font-serif-zh text-[11px] text-[#8A7F71] mt-1">{shape.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Base Color Selection */}
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-[#E9DFCE] shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#4F7C6F]/10 text-[#4F7C6F] flex items-center justify-center font-serif-en text-xs font-bold">2</span>
                  <h3 className="font-serif-zh text-lg font-bold text-[#252825] tracking-widest">{t.baseColor}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {baseColors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => { setCustomBaseColor(color.id); playSoftClick(); }}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3 ${customBaseColor === color.id ? 'border-[#D35230] bg-[#D35230]/5 shadow-sm' : 'border-[#E9DFCE] hover:border-[#C3B091] bg-white'}`}
                    >
                      {/* Live circular gradient sample */}
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${color.color} border ${color.border} shadow-sm flex-shrink-0`}></div>
                      <div>
                        <p className="font-serif-zh text-sm font-semibold text-[#252825]">{color.name}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Craft / Embellishments */}
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-[#E9DFCE] shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#C3B091]/20 text-[#C3B091] flex items-center justify-center font-serif-en text-xs font-bold">3</span>
                  <h3 className="font-serif-zh text-lg font-bold text-[#252825] tracking-widest">{t.embellish}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {embellishments.map((emb) => (
                    <button
                      key={emb.id}
                      onClick={() => { setCustomStyle(emb.id); playSoftClick(); }}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 ${customStyle === emb.id ? 'border-[#D35230] bg-[#D35230]/5 shadow-sm' : 'border-[#E9DFCE] hover:border-[#C3B091] bg-white'}`}
                    >
                      <p className="font-serif-zh text-sm font-semibold text-[#252825]">{emb.name}</p>
                      <p className="font-serif-zh text-[11px] text-[#8A7F71] mt-1">{emb.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 4: Eyelash Style Matcher */}
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-[#E9DFCE] shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#252825]/10 text-[#252825] flex items-center justify-center font-serif-en text-xs font-bold">4</span>
                  <h3 className="font-serif-zh text-lg font-bold text-[#252825] tracking-widest">{t.eyelash}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {eyelashStyles.map((lash) => (
                    <button
                      key={lash.id}
                      onClick={() => { setCustomEyelashLength(lash.id); playSoftClick(); }}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 ${customEyelashLength === lash.id ? 'border-[#D35230] bg-[#D35230]/5 shadow-sm' : 'border-[#E9DFCE] hover:border-[#C3B091] bg-white'}`}
                    >
                      <p className="font-serif-zh text-xs font-bold text-[#252825]">{lash.name}</p>
                      <p className="font-serif-zh text-[10px] text-[#8A7F71] mt-1">{lash.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* TAB CONTENT: THE RITUAL / BOOKING (预约雅席) */}
      {activeTab === 'booking' && (
        <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 animate-fadeIn text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Interactive Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[40px] border border-[#E9DFCE] shadow-xl relative overflow-hidden">
              
              {/* Subtle design element */}
              <div className="absolute right-0 top-0 w-32 h-32 bg-[#D35230]/5 rounded-bl-full pointer-events-none"></div>

              <div className="mb-8">
                <span className="font-sans-clean text-xs text-[#D35230] font-bold tracking-[0.2em] block mb-2 uppercase">RESERVATION CENTER</span>
                <h1 className="font-serif-zh text-3xl md:text-4xl font-light text-[#252825] tracking-widest">
                  雅席预定
                </h1>
                <p className="font-serif-zh text-sm text-[#8A7F71] mt-2 leading-relaxed">
                  请填写预约意愿，我们将在两小时内由定制美学顾问致电，为您确认手艺人档期与进店礼遇。
                </p>
              </div>

              {isBooked ? (
                <div className="bg-[#EFEBE4]/60 border border-[#D35230]/20 p-8 rounded-3xl text-center flex flex-col items-center justify-center py-16 animate-scaleIn">
                  <div className="w-16 h-16 bg-[#D35230] text-white rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-zh text-2xl font-bold text-[#252825] mb-4">定制预约申请已提交</h3>
                  <p className="font-serif-zh text-sm text-[#5E5346] leading-relaxed max-w-md">
                    {t.successMsg}
                  </p>
                  <button 
                    onClick={() => { setIsBooked(false); playSoftClick(); }}
                    className="mt-8 bg-[#252825] text-white px-8 py-3.5 rounded-full font-sans-clean text-xs font-semibold tracking-widest hover:bg-[#D35230] transition-colors"
                  >
                    返回主页
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => { e.preventDefault(); setIsBooked(true); playSoftClick(); }}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-serif-zh text-sm text-[#5E5346] mb-2 font-semibold">雅客贵姓 (Name)</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7F71]" />
                        <input 
                          type="text" 
                          required
                          value={bookingName}
                          onChange={(e) => setBookingName(e.target.value)}
                          placeholder="如何称呼您" 
                          className="w-full bg-[#F7F5F0] border border-[#E9DFCE] rounded-xl py-3.5 pl-12 pr-4 text-[#252825] font-serif-zh text-sm focus:outline-none focus:border-[#D35230] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-serif-zh text-sm text-[#5E5346] mb-2 font-semibold">联络电话 (Phone)</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7F71]" />
                        <input 
                          type="tel" 
                          required
                          value={bookingPhone}
                          onChange={(e) => setBookingPhone(e.target.value)}
                          placeholder="以便顾问致电" 
                          className="w-full bg-[#F7F5F0] border border-[#E9DFCE] rounded-xl py-3.5 pl-12 pr-4 text-[#252825] font-serif-zh text-sm focus:outline-none focus:border-[#D35230] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block font-serif-zh text-sm text-[#5E5346] mb-2 font-semibold">选定定制项目 (Service)</label>
                    <input 
                      type="text" 
                      value={bookingService}
                      onChange={(e) => setBookingService(e.target.value)}
                      placeholder="美甲定制 / 睫毛艺术项目" 
                      className="w-full bg-[#F7F5F0] border border-[#E9DFCE] rounded-xl py-3.5 px-4 text-[#252825] font-serif-zh text-sm focus:outline-none focus:border-[#D35230] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-serif-zh text-sm text-[#5E5346] mb-2 font-semibold">期望日期 (Date)</label>
                      <input 
                        type="date" 
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full bg-[#F7F5F0] border border-[#E9DFCE] rounded-xl py-3.5 px-4 text-[#252825] font-serif-zh text-sm focus:outline-none focus:border-[#D35230] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-serif-zh text-sm text-[#5E5346] mb-2 font-semibold">期望时段 (Time)</label>
                      <input 
                        type="time" 
                        required
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full bg-[#F7F5F0] border border-[#E9DFCE] rounded-xl py-3.5 px-4 text-[#252825] font-serif-zh text-sm focus:outline-none focus:border-[#D35230] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 items-start mt-2">
                    <input type="checkbox" required id="privacy" className="mt-1 accent-[#D35230]" />
                    <label htmlFor="privacy" className="font-serif-zh text-xs text-[#8A7F71] leading-relaxed cursor-pointer">
                      我同意一客一间专属定制服务规则，若行程有变将提前3小时告知顾问。
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#252825] hover:bg-[#D35230] text-[#F7F5F0] py-4 rounded-xl font-sans-clean text-xs font-semibold tracking-widest transition-colors duration-500 mt-4 flex items-center justify-center gap-2"
                  >
                    <span>提交预约雅席申请</span>
                    <Calendar className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Salon Space Details */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Salon info card */}
              <div className="bg-[#EFEBE4] p-8 rounded-[32px] border border-[#E9DFCE]">
                <h3 className="font-serif-zh text-xl font-bold text-[#252825] tracking-widest mb-6 border-b border-black/10 pb-4">
                  {t.contactUs}
                </h3>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D35230] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-serif-zh text-sm font-semibold text-[#252825]">雅舍地址 · Beijing/Shanghai</p>
                      <p className="font-serif-zh text-xs text-[#5E5346] mt-1 leading-relaxed">北京市东城区安定门内大街12号 (近国子监院落)</p>
                      <p className="font-serif-zh text-xs text-[#5E5346] leading-relaxed">上海市徐汇区安福路88号三层禅意阁</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#D35230] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-serif-zh text-sm font-semibold text-[#252825]">静修营业时间</p>
                      <p className="font-serif-zh text-xs text-[#5E5346] mt-1">周一至周日 10:00 - 22:00 (仅接待预约客人)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#D35230] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-serif-zh text-sm font-semibold text-[#252825]">进店专属礼遇</p>
                      <p className="font-serif-zh text-xs text-[#5E5346] mt-1 leading-relaxed">预约到店客均享有精选九曲红梅盖碗茶、中式手作桃酥糕点一份。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Serene Zen Aesthetic Visual Quote Block */}
              <div className="bg-gradient-to-b from-[#E2EBE5] to-[#D0DFD4] p-8 rounded-[32px] border border-[#b5c7ba] relative overflow-hidden flex flex-col justify-between aspect-[4/3]">
                {/* Red stamp inside visual */}
                <div className="absolute right-6 top-6 w-9 h-9 bg-[#D35230] flex items-center justify-center rounded-[2px]">
                  <span className="text-white text-xs font-serif-zh font-bold">雅</span>
                </div>
                
                <p className="font-serif-zh text-lg text-[#253D35] italic leading-relaxed font-medium">
                  “一呼一吸，在极简的留白中，寻回内心的安静力量。”
                </p>

                <div className="flex justify-between items-end border-t border-black/5 pt-4">
                  <span className="font-serif-en text-sm italic text-[#4F7C6F]">Oriental Zen Sanctuary</span>
                  <span className="font-sans-clean text-[9px] text-[#4F7C6F] tracking-widest font-semibold">EST. 2026</span>
                </div>
              </div>
            </div>

          </div>
        </main>
      )}

      {/* FOOTER SECTION */}
      <footer className="relative z-10 bg-[#252825] text-[#EFEBE4] py-16 mt-24 border-t border-[#4A453F]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <span className="font-serif-en text-3xl font-light tracking-wide">Fingertip Art</span>
            <div className="flex items-center gap-2">
              <span className="font-serif-zh text-sm tracking-widest text-[#C3B091]">{t.brand}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#D35230]"></div>
              <span className="font-sans-clean text-[9px] text-[#8A7F71] uppercase tracking-widest">Atelier</span>
            </div>
            <p className="font-serif-zh text-xs text-[#8A7F71] max-w-sm leading-relaxed mt-2">
              以指尖承载悠悠宋风雅韵。在快节奏的世界里，为您开辟一处悠游山水的毫厘乐土。
            </p>
          </div>

          <div>
            <h4 className="font-serif-zh text-sm font-bold text-[#C3B091] tracking-widest mb-4">探索项目</h4>
            <ul className="flex flex-col gap-3 font-serif-zh text-xs text-[#8A7F71]">
              <li><button onClick={() => { setActiveTab('gallery'); playSoftClick(); }} className="hover:text-white transition-colors">雨过天青天青美甲</button></li>
              <li><button onClick={() => { setActiveTab('gallery'); playSoftClick(); }} className="hover:text-white transition-colors">泥金微芒复古美甲</button></li>
              <li><button onClick={() => { setActiveTab('gallery'); playSoftClick(); }} className="hover:text-white transition-colors">落雨听风中式美睫</button></li>
              <li><button onClick={() => { setActiveTab('gallery'); playSoftClick(); }} className="hover:text-white transition-colors">惊鸿羽睫高定系列</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif-zh text-sm font-bold text-[#C3B091] tracking-widest mb-4">赏析指尖</h4>
            <ul className="flex flex-col gap-3 font-serif-zh text-xs text-[#8A7F71]">
              <li><button onClick={() => { setActiveTab('customizer'); playSoftClick(); }} className="hover:text-white transition-colors">在线搭配工作坊</button></li>
              <li><button onClick={() => { setActiveTab('booking'); playSoftClick(); }} className="hover:text-white transition-colors">预约单客雅座</button></li>
              <li><a href="#" className="hover:text-white transition-colors">品牌美学专栏</a></li>
              <li><a href="#" className="hover:text-white transition-colors">合作共创计划</a></li>
            </ul>
          </div>

        </div>

        {/* Footnotes */}
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#4A453F] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#8A7F71]">
          <span className="font-serif-zh">© 2026 Fingertip Art 东方美学. All Rights Reserved.</span>
          <div className="flex gap-6 font-sans-clean text-[10px] tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Ritual</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
3