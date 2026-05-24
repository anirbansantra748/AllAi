import React, { useState, useEffect } from 'react';

// --- IN-MEMORY CONSTANTS FOR PREMIUM IMAGERY / GRAPHICS ---
const PROJECTS = [
  {
    id: 1,
    title: "The Pastoral Parlour",
    subtitle: "Full-Scale Wallpaper Installation",
    location: "Château de Versailles Guest Suites",
    year: "2026",
    desc: "A breathtaking wrap-around wall covering featuring customized illustrations of weeping willows, classical French estates, and serene mountain vistas.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Delftware Dining Room",
    subtitle: "Custom Hand-Painted Porcelain & Drapes",
    location: "Private Residence, London",
    year: "2025",
    desc: "Coordination of hand-dyed linen drapery and matched table sets, creating a seamless, monochromatic dining environment of unparalleled historical charm.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Chinoiserie Bedroom Suite",
    subtitle: "Silk Wallpaper & Textured Upholstery",
    location: "Boutique Hotel, Kyoto",
    year: "2026",
    desc: "A fusion of classic French pastoral narratives with Japanese landscapes, printed on organic raw silk and stitched onto custom headboards.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
  }
];

const FABRICS = [
  { name: "Delft Blue Premium Silk", weight: "240 gsm", pattern: "Le Jardin d'Eden", code: "MJ-DELFT-88" },
  { name: "Sanguine Rose Heavy Linen", weight: "310 gsm", pattern: "La Chanson d'Amour", code: "MJ-ROSE-41" },
  { name: "Verdant Sage Classic Velvet", weight: "420 gsm", pattern: "Le Ruisseau de Campagne", code: "MJ-SAGE-12" },
  { name: "Charcoal Ink Organic Cotton", weight: "180 gsm", pattern: "L'Ombre Forestière", code: "MJ-CHAR-99" }
];

// --- COLOR SYSTEMS (Directly inspired by the toile palette) ---
const THEMES = {
  blue: {
    id: 'blue',
    name: 'Classic Delft Blue',
    bg: 'bg-[#FAF7F0]',
    bgSecondary: 'bg-[#F3ECD8]',
    border: 'border-[#4E6A94]/20',
    primary: 'text-[#2C4266]',
    primaryBg: 'bg-[#2C4266]',
    primaryBgHover: 'hover:bg-[#1B2A4A]',
    primaryBorder: 'border-[#2C4266]',
    secondary: 'text-[#4E6A94]',
    accentBg: 'bg-[#4E6A94]/10',
    accentText: 'text-[#4E6A94]',
    accentBorder: 'border-[#4E6A94]/30',
    cardBg: 'bg-[#FCFAF2]/90',
    svgFill: '#2C4266',
    svgFillLight: '#4E6A94',
    pillBg: 'bg-[#E6DEC9]/60',
    pillText: 'text-[#2C4266]',
    tagBg: 'bg-[#2C4266]/10',
    textColor: 'text-[#3E4E68]'
  },
  rose: {
    id: 'rose',
    name: 'Sanguine Rose',
    bg: 'bg-[#FAF6F6]',
    bgSecondary: 'bg-[#F2E5E5]',
    border: 'border-[#A35D5D]/20',
    primary: 'text-[#8A3B3B]',
    primaryBg: 'bg-[#8A3B3B]',
    primaryBgHover: 'hover:bg-[#692929]',
    primaryBorder: 'border-[#8A3B3B]',
    secondary: 'text-[#A35D5D]',
    accentBg: 'bg-[#A35D5D]/10',
    accentText: 'text-[#A35D5D]',
    accentBorder: 'border-[#A35D5D]/30',
    cardBg: 'bg-[#FDFBF9]/90',
    svgFill: '#8A3B3B',
    svgFillLight: '#A35D5D',
    pillBg: 'bg-[#EADBDB]/60',
    pillText: 'text-[#8A3B3B]',
    tagBg: 'bg-[#8A3B3B]/10',
    textColor: 'text-[#6B4B4B]'
  },
  sage: {
    id: 'sage',
    name: 'Verdant Sage',
    bg: 'bg-[#F5F7F2]',
    bgSecondary: 'bg-[#E7ECE0]',
    border: 'border-[#5C7254]/20',
    primary: 'text-[#3E5136]',
    primaryBg: 'bg-[#3E5136]',
    primaryBgHover: 'hover:bg-[#2C3B27]',
    primaryBorder: 'border-[#3E5136]',
    secondary: 'text-[#5C7254]',
    accentBg: 'bg-[#5C7254]/10',
    accentText: 'text-[#5C7254]',
    accentBorder: 'border-[#5C7254]/30',
    cardBg: 'bg-[#F8FAF5]/90',
    svgFill: '#3E5136',
    svgFillLight: '#5C7254',
    pillBg: 'bg-[#D6DDD1]/60',
    pillText: 'text-[#3E5136]',
    tagBg: 'bg-[#3E5136]/10',
    textColor: 'text-[#4F5D4B]'
  },
  charcoal: {
    id: 'charcoal',
    name: 'Charcoal Ink',
    bg: 'bg-[#F7F7F7]',
    bgSecondary: 'bg-[#EAEAEA]',
    border: 'border-[#4A4A4A]/20',
    primary: 'text-[#1E1E1E]',
    primaryBg: 'bg-[#1E1E1E]',
    primaryBgHover: 'hover:bg-[#000000]',
    primaryBorder: 'border-[#1E1E1E]',
    secondary: 'text-[#5E5E5E]',
    accentBg: 'bg-[#5E5E5E]/10',
    accentText: 'text-[#5E5E5E]',
    accentBorder: 'border-[#5E5E5E]/30',
    cardBg: 'bg-[#FCFCFC]/90',
    svgFill: '#1E1E1E',
    svgFillLight: '#5E5E5E',
    pillBg: 'bg-[#DFDFDF]/60',
    pillText: 'text-[#1E1E1E]',
    tagBg: 'bg-[#1E1E1E]/10',
    textColor: 'text-[#4A4A4A]'
  }
};

export default function App() {
  const [activeTheme, setActiveTheme] = useState(THEMES.blue);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedFabric, setSelectedFabric] = useState(FABRICS[0]);
  const [timelineIndex, setTimelineIndex] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Form input states
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("Bespoke Hand-painted Wallcoverings");
  const [inquiryMessage, setInquiryMessage] = useState("");

  // Load decorative Google fonts dynamically
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Custom alert handler that opens a premium modal rather than browser alert
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail) {
      return;
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setShowInquiryModal(false);
      setFormSubmitted(false);
      setInquiryName("");
      setInquiryEmail("");
      setInquiryMessage("");
    }, 2500);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterSuccess(false);
        setNewsletterEmail("");
      }, 3000);
    }
  };

  // SVG Artwork components used inside the design system to ensure clean, high-detail motifs
  const LandscapeMotif = ({ className, color, lightColor }) => (
    <svg className={className} viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Soft Hills */}
      <path d="M 0 250 Q 150 180 320 220 T 640 200 T 800 240 L 800 300 L 0 300 Z" fill={lightColor} opacity="0.12" />
      <path d="M 0 280 Q 250 200 500 250 T 800 270 L 800 300 L 0 300 Z" fill={color} opacity="0.18" />

      {/* Classical Oriental Pagoda / Pavilion */}
      <g transform="translate(560, 110) scale(0.65)">
        {/* Ground */}
        <path d="M -50 120 L 150 120 L 130 110 L -30 110 Z" fill={color} opacity="0.6" />
        {/* Pillars */}
        <rect x="10" y="50" width="8" height="60" fill={color} />
        <rect x="82" y="50" width="8" height="60" fill={color} />
        <rect x="46" y="50" width="8" height="60" fill={color} opacity="0.8" />
        {/* Tier 1 Roof */}
        <path d="M -10 50 C 20 40 80 40 110 50 L 95 35 C 70 30 30 30 5 35 Z" fill={color} />
        {/* Upper Room */}
        <rect x="25" y="5" width="50" height="30" fill={color} opacity="0.7" />
        {/* Top Roof */}
        <path d="M 15 5 C 35 -15 65 -15 85 5 L 70 -10 C 55 -15 45 -15 30 -10 Z" fill={color} />
        {/* Spire */}
        <line x1="50" y1="-10" x2="50" y2="-35" stroke={color} strokeWidth="3" />
        <circle cx="50" cy="-35" r="4" fill={color} />
        <circle cx="50" cy="-25" r="6" fill={color} />
      </g>

      {/* Flying Birds */}
      <g fill={color} opacity="0.75">
        <path d="M 120 70 Q 130 60 140 70 Q 150 60 160 70 Q 150 78 140 70 Q 130 78 120 70 Z" transform="scale(0.8) translate(30, 10)" />
        <path d="M 280 50 Q 290 40 300 50 Q 310 40 320 50 Q 310 58 300 50 Q 290 58 280 50 Z" transform="scale(0.6) translate(180, 20)" />
        <path d="M 450 90 Q 460 80 470 90 Q 480 80 490 90 Q 480 98 470 90 Q 460 98 450 90 Z" transform="scale(0.7) translate(110, -10)" />
      </g>

      {/* Elegant Left Tree (Weeping Willow / Oak) */}
      <g transform="translate(60, 260) scale(0.9)">
        {/* Trunk */}
        <path d="M 10 0 C 15 -30 -5 -60 -20 -90 C -35 -120 -30 -150 -10 -180 C 10 -210 30 -220 50 -250" stroke={color} strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M -20 -90 C -5 -110 5 -130 0 -160" stroke={color} strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M -10 -180 C -30 -195 -45 -220 -50 -250" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />

        {/* Detailed Leaf Clusters using swirling paths */}
        <path d="M 40 -260 Q 60 -290 80 -260 T 120 -250 T 140 -210 T 90 -220 T 50 -230 Z" fill={color} opacity="0.85" />
        <path d="M -60 -260 Q -80 -290 -100 -260 T -140 -240 T -150 -200 T -110 -210 T -70 -230 Z" fill={color} opacity="0.75" />
        <path d="M -20 -190 Q -40 -210 -30 -230 T 10 -220 T 20 -190 Z" fill={color} opacity="0.8" />
        <path d="M 20 -150 Q 40 -170 50 -150 T 60 -120 T 20 -130 Z" fill={color} opacity="0.7" />

        {/* Hanging Willow Vines */}
        <path d="M 90 -220 Q 95 -160 90 -120" stroke={color} strokeWidth="1.5" strokeDasharray="3,3" fill="none" />
        <path d="M 110 -210 Q 120 -150 115 -100" stroke={color} strokeWidth="1.5" strokeDasharray="3,3" fill="none" />
        <path d="M -110 -210 Q -115 -150 -110 -110" stroke={color} strokeWidth="1.5" strokeDasharray="3,3" fill="none" />
        <path d="M -130 -200 Q -140 -140 -135 -90" stroke={color} strokeWidth="1.5" strokeDasharray="3,3" fill="none" />
      </g>

      {/* Elegant Right Tree */}
      <g transform="translate(710, 250) scale(0.75)">
        <path d="M -10 0 C -15 -35 5 -70 25 -100 C 45 -130 35 -165 20 -195" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M 25 -100 C 15 -130 -5 -150 -15 -180" stroke={color} strokeWidth="3" fill="none" />
        <path d="M 20 -195 Q 40 -225 60 -200 T 90 -180 T 70 -150 Z" fill={color} opacity="0.9" />
        <path d="M -25 -185 Q -35 -215 -15 -230 T 20 -200 T -10 -180 Z" fill={color} opacity="0.8" />
      </g>
    </svg>
  );

  const RoseAccent = ({ className, color }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hand-drawn style intricate Rose vector */}
      <path d="M 50 25 C 40 25 35 35 45 45 C 55 55 65 45 60 35 C 55 25 45 15 35 25 C 25 35 30 55 45 60 C 60 65 75 50 70 35 C 65 20 45 10 30 20 C 15 30 15 60 35 75 C 55 90 80 80 85 55 C 90 30 75 15 50 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M 45 42 C 48 38 52 38 55 42 C 58 46 54 50 50 48" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 35 45 C 30 48 28 58 35 62" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 60 48 C 65 52 68 62 60 68" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Vintage Leaf Flourishes */}
      <path d="M 25 70 Q 15 80 5 75 Q 15 65 25 70 Z" fill={color} opacity="0.75" />
      <path d="M 75 30 Q 85 20 95 25 Q 85 35 75 30 Z" fill={color} opacity="0.75" />
    </svg>
  );

  // Representation of the slides depicted in the inspiration image
  const SLIDES_CONTENT = [
    {
      type: 'title',
      title: "MAISON DE JOUY",
      subtitle: "Bespoke Engraved Wallpapers & Textiles",
      meta: "EST. 1760 — REVIVED FOR THE MODERN CHÂTEAU",
      extra: "Where French pastoral heritage seamlessly meets timeless East-Asian architectural motifs.",
      layoutName: "Hero Slide Deck Cover"
    },
    {
      type: 'contents',
      title: "Table of Contents",
      items: [
        { num: "01", label: "The Pastoral Heritage of Jouy-en-Josas", desc: "Tracing the origin of monochromatic engraving fabrics from 18th-century French mills." },
        { num: "02", label: "The Silk Road Influence", desc: "Exploring Chinoiserie integration, botanical line drawings, and exotic avian blueprints." },
        { num: "03", label: "Modern Luxury Bespoke Installations", desc: "Our methodology for hand-printing and customized scaling for architectural spaces." },
        { num: "04", label: "Sustaining the Craftsmanship", desc: "Commitment to organic dye baths, high-density Belgian flax, and custom-woven jacquards." }
      ],
      layoutName: "Elegant Directory Grid"
    },
    {
      type: 'split-hero',
      title: "Nature & Symmetry",
      tagline: "The Art of the Monochromatic Repeats",
      desc: "Every single scroll, leaf, bird, and stone is hand-sketched in our Parisian studio. Our repeats run vertically up to four meters without a single obvious seam, yielding an fully immersive pastoral environment.",
      landscapeLabel: "Planche VI: Le Ruisseau et les Oliviers",
      layoutName: "Classic Framed Banner"
    },
    {
      type: 'three-column',
      title: "Architectural Alchemy",
      subtitle: "Custom configurations designed to highlight elegant ceiling heights and panelling.",
      columns: [
        {
          num: "I",
          heading: "The Dado Base",
          text: "Heavy, dense patterns weighted at the lower third of the chamber to ground the room in classic structure."
        },
        {
          num: "II",
          heading: "Floating Panels",
          text: "Delicate frames of line-work containing central custom hand-drawn crests, optimized for plaster moldings."
        },
        {
          num: "III",
          heading: "Fresco Canopy",
          text: "Stretching trees and flying swallows that ascend onto your ceilings, creating an infinite blue sky effect."
        }
      ],
      layoutName: "Symmetric Triple Column"
    }
  ];

  return (
    <div className={`min-h-screen ${activeTheme.bg} transition-colors duration-1000 font-serif overflow-x-hidden text-stone-800 selection:bg-stone-200`}>
      
      {/* Decorative Outer Border - capturing premium custom styling feel */}
      <div className={`fixed inset-4 border-2 ${activeTheme.border} pointer-events-none z-50 transition-colors duration-1000 hidden md:block`}>
        {/* Ornate corner marks */}
        <div className={`absolute -top-1 -left-1 w-4 height-4 border-t-4 border-l-4 ${activeTheme.border.replace('/20', '')}`} />
        <div className={`absolute -top-1 -right-1 w-4 height-4 border-t-4 border-r-4 ${activeTheme.border.replace('/20', '')}`} />
        <div className={`absolute -bottom-1 -left-1 w-4 height-4 border-b-4 border-l-4 ${activeTheme.border.replace('/20', '')}`} />
        <div className={`absolute -bottom-1 -right-1 w-4 height-4 border-b-4 border-r-4 ${activeTheme.border.replace('/20', '')}`} />
      </div>

      {/* --- TOP BRAND HEADER & THEME SWITCHER --- */}
      <header className="py-6 px-6 lg:px-16 border-b border-stone-200/60 backdrop-blur-sm sticky top-0 z-40 bg-opacity-90 bg-inherit transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo Brandmark */}
          <div className="flex items-center gap-3">
            <RoseAccent className="w-8 h-8" color={activeTheme.svgFill} />
            <div>
              <h1 className={`text-xl lg:text-2xl font-bold tracking-widest ${activeTheme.primary} transition-colors duration-1000`} style={{ fontFamily: 'Cinzel, serif' }}>
                MAISON DE JOUY
              </h1>
              <p className="text-[9px] uppercase tracking-widest font-sans text-stone-500 text-center md:text-left">Ateliers de Haute Décoration</p>
            </div>
          </div>

          {/* Theme Selector (Showcases the versatility of the Design System requested) */}
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-sans font-semibold">Active Color Scheme</span>
            <div className="flex items-center gap-2 bg-stone-100/80 p-1.5 rounded-full border border-stone-200">
              {Object.values(THEMES).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTheme(t)}
                  className={`px-3 py-1 text-xs rounded-full font-sans transition-all duration-300 flex items-center gap-1.5 ${
                    activeTheme.id === t.id 
                      ? `${t.primaryBg} text-white shadow-md font-medium scale-105` 
                      : 'text-stone-600 hover:bg-stone-200/50'
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full inline-block`} style={{ backgroundColor: t.svgFill }} />
                  <span className="hidden sm:inline">{t.name.split(' ')[1]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Header Action Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowInquiryModal(true)}
              className={`px-5 py-2 border text-xs tracking-wider uppercase font-sans font-semibold transition-all duration-500 ${activeTheme.primaryBorder} ${activeTheme.primary} hover:bg-white hover:shadow-lg rounded-none`}
            >
              Request Swatches
            </button>
          </div>
        </div>
      </header>

      {/* --- HERO BANNER & LIVING MOTIF --- */}
      <section className="relative py-12 lg:py-24 px-6 lg:px-16 overflow-hidden">
        {/* Drifting Birds Accent */}
        <div className="absolute top-10 right-[15%] w-32 h-16 opacity-35 pointer-events-none animate-pulse">
          <svg viewBox="0 0 100 50" fill={activeTheme.svgFill}>
            <path d="M 10 20 Q 20 10 30 20 Q 40 10 50 20 Q 40 28 30 20 Q 20 28 10 20 Z" />
            <path d="M 50 35 Q 58 28 66 35 Q 74 28 82 35 Q 74 42 66 35 Q 58 42 50 35 Z" transform="scale(0.8) translate(10, 10)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Column (Copy & Art Direction Context) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className={`w-8 h-[1px] ${activeTheme.primaryBg}`} />
              <span className={`text-xs uppercase tracking-[0.3em] font-sans font-bold ${activeTheme.secondary}`}>
                The Grand Heritage Revival
              </span>
            </div>
            
            <h2 className={`text-4xl lg:text-6xl font-bold tracking-tight leading-none ${activeTheme.primary} transition-colors duration-1000`} style={{ fontFamily: 'Cinzel, serif' }}>
              Handcrafted <br />
              <span className="italic font-light">Pastoral</span> <br />
              Splendour.
            </h2>

            <p className={`text-lg ${activeTheme.textColor} leading-relaxed font-light`}>
              Step into an era of curated luxury. We craft bespoke hand-etched wallpaper murals and fine Belgian linens, keeping the 18th-century French toile craftsmanship alive with modern ecological sensitivity.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  const target = document.getElementById('presentation-deck');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-8 py-4 ${activeTheme.primaryBg} text-white font-sans text-xs tracking-[0.2em] uppercase font-bold shadow-lg ${activeTheme.primaryBgHover} transition-all duration-300 transform hover:-translate-y-0.5`}
              >
                Launch Presentation
              </button>
              <button 
                onClick={() => {
                  const target = document.getElementById('fabric-lab');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-stone-800 font-sans text-xs tracking-[0.2em] uppercase font-semibold border border-stone-300 shadow-sm hover:shadow transition-all duration-300"
              >
                Browse Fabrics
              </button>
            </div>

            {/* Micro details displaying premium ethos */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-200/80">
              <div>
                <p className="text-xl font-bold font-sans text-stone-800">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-stone-500 font-sans">Organic Dyes</p>
              </div>
              <div>
                <p className="text-xl font-bold font-sans text-stone-800">4000px</p>
                <p className="text-[10px] uppercase tracking-wider text-stone-500 font-sans">No-Seam Repeats</p>
              </div>
              <div>
                <p className="text-xl font-bold font-sans text-stone-800">4 Colors</p>
                <p className="text-[10px] uppercase tracking-wider text-stone-500 font-sans">Bespoke Palettes</p>
              </div>
            </div>
          </div>

          {/* Hero Right Column (Beautiful Interactive Landscape Frame) */}
          <div className="lg:col-span-7 relative">
            <div className={`p-4 sm:p-8 rounded-2xl ${activeTheme.pillBg} border ${activeTheme.border} transition-all duration-1000 shadow-2xl relative overflow-hidden group`}>
              
              {/* Soft Vintage Paper Overlay and subtle noise */}
              <div className="absolute inset-0 bg-stone-50 opacity-15 pointer-events-none mix-blend-overlay" />
              
              {/* Double Inset Thin Frame */}
              <div className={`border ${activeTheme.border} p-3 rounded-xl bg-white/60 backdrop-blur-sm relative z-10`}>
                <div className={`border-2 ${activeTheme.border} rounded-lg p-2 relative overflow-hidden`}>
                  
                  {/* Decorative Header */}
                  <div className="flex justify-between items-center border-b border-stone-200 pb-3 mb-4 px-2">
                    <span className="text-[10px] tracking-widest text-stone-400 font-sans">MAISON DE JOUY — PLANCHE IV</span>
                    <span className="text-[10px] tracking-widest text-stone-400 font-sans">CORNICHE EST</span>
                  </div>

                  {/* Dynamic Toile Illustration Landscape */}
                  <div className="relative bg-[#FAF6EE] rounded p-4 border border-stone-200 overflow-hidden min-h-[300px] flex items-end">
                    <LandscapeMotif className="w-full h-auto object-contain z-10 transform group-hover:scale-105 transition-transform duration-1000" color={activeTheme.svgFill} lightColor={activeTheme.svgFillLight} />
                    
                    {/* Floating Title Inside Mural Frame */}
                    <div className="absolute top-8 left-8 right-8 z-20 text-center">
                      <span className={`text-[10px] sm:text-xs uppercase tracking-[0.4em] ${activeTheme.secondary} block mb-1 font-sans font-bold`}>L'Histoire de France</span>
                      <h3 className={`text-2xl sm:text-4xl font-extrabold ${activeTheme.primary} leading-tight`} style={{ fontFamily: 'Cinzel, serif' }}>
                        Le Jardin d'Eden
                      </h3>
                      <p className="text-[10px] sm:text-xs text-stone-500 italic mt-2 font-serif max-w-sm mx-auto">
                        "A classic pastoral view designed with traditional copper-plate ink styles."
                      </p>
                    </div>

                    {/* Rose Icon Bottom Crest */}
                    <div className="absolute bottom-4 right-4 z-20 bg-white/90 p-1.5 rounded-full shadow border border-stone-200">
                      <RoseAccent className="w-6 h-6" color={activeTheme.svgFill} />
                    </div>
                  </div>

                </div>
              </div>

              {/* Decorative Ribbon/Pill Label under the frame */}
              <div className="mt-4 flex justify-between items-center px-2">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${activeTheme.primaryBg}`} />
                  <span className="text-xs text-stone-600 font-serif font-semibold italic">Planche Royale — Delft Blue Series</span>
                </div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-stone-500 font-semibold bg-white/80 px-2.5 py-1 rounded border border-stone-200">
                  Aesthetic DNA Verified
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- THE MASTERPIECE SLIDE DECK (Inspired directly by the prompt's layout image) --- */}
      <section id="presentation-deck" className="py-20 px-6 lg:px-16 bg-[#1B2A4A] text-[#FAF7F0] relative overflow-hidden transition-colors duration-1000" style={{ backgroundColor: activeTheme.primary.replace('text-[', '').replace(']', '') }}>
        
        {/* Dynamic Subtle Toile Background Overlay to simulate the background atmosphere */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-color-burn scale-110">
          <LandscapeMotif className="w-full h-full object-cover" color="#FFFFFF" lightColor="#FFFFFF" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Header describing this slide selector */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-stone-300 font-sans block mb-1">
                INSPIRATIONAL DESIGN SPECIFICATION
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>
                Interactive Digital Presentation Deck
              </h2>
              <p className="text-stone-300 text-xs italic mt-2 max-w-xl font-serif font-light">
                Flip through the core presentation slide structures of our 2026 Toile de Jouy catalog. Each layout showcases the extreme UI density, symmetric balance, and vintage decorative atmosphere.
              </p>
            </div>

            {/* Quick slide dots / selectors */}
            <div className="flex items-center gap-1.5 bg-black/20 p-1.5 rounded-lg border border-white/10">
              {SLIDES_CONTENT.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-3 py-1.5 text-xs rounded transition-all duration-300 font-sans ${
                    activeSlide === idx 
                      ? 'bg-white text-stone-900 font-bold shadow' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* THE PRESENTATION CONSOLE (Simulating a high fidelity slide deck) */}
          <div className="bg-[#FAF7F0] text-stone-800 rounded-2xl p-4 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-between border border-stone-300">
            
            {/* Slide Header details */}
            <div className="flex justify-between items-center border-b border-stone-200 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <RoseAccent className="w-6 h-6" color={activeTheme.svgFill} />
                <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-stone-400 uppercase">MAISON DESIGN PLATFORM / SLIDE_0{activeSlide + 1}</span>
              </div>
              <span className={`text-[10px] font-sans font-bold px-3 py-1 rounded bg-stone-200/50 ${activeTheme.primary} border border-stone-300/60 uppercase tracking-widest`}>
                {SLIDES_CONTENT[activeSlide].layoutName}
              </span>
            </div>

            {/* --- SLIDE CONTENT CONTAINER --- */}
            <div className="flex-grow flex items-center py-6">
              
              {/* SLIDE TYPE 1: COVER/TITLE SLIDE */}
              {SLIDES_CONTENT[activeSlide].type === 'title' && (
                <div className="w-full text-center py-8 relative">
                  
                  {/* Decorative background framing to match cover slide style */}
                  <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                    <LandscapeMotif className="w-full h-full object-contain" color={activeTheme.svgFill} lightColor={activeTheme.svgFillLight} />
                  </div>

                  <div className="relative z-10 max-w-2xl mx-auto space-y-4 sm:space-y-6">
                    <span className="text-xs sm:text-sm uppercase tracking-[0.4em] font-sans font-bold text-stone-500 block">
                      {SLIDES_CONTENT[activeSlide].meta}
                    </span>
                    
                    <h3 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold ${activeTheme.primary} tracking-tight leading-none drop-shadow-sm`} style={{ fontFamily: 'Cinzel, serif' }}>
                      {SLIDES_CONTENT[activeSlide].title}
                    </h3>

                    <div className="w-32 h-[1.5px] bg-stone-300 mx-auto my-3" />

                    <p className="text-xs sm:text-sm tracking-widest uppercase font-sans font-medium text-stone-600 block">
                      {SLIDES_CONTENT[activeSlide].subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-stone-500 max-w-lg mx-auto italic font-serif leading-relaxed px-4">
                      "{SLIDES_CONTENT[activeSlide].extra}"
                    </p>
                  </div>
                </div>
              )}

              {/* SLIDE TYPE 2: TABLE OF CONTENTS */}
              {SLIDES_CONTENT[activeSlide].type === 'contents' && (
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left decorative column with matching graphic */}
                  <div className="lg:col-span-4 bg-stone-100 p-6 rounded-xl border border-stone-200 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                      <RoseAccent className="w-full h-full" color={activeTheme.svgFill} />
                    </div>
                    <RoseAccent className="w-16 h-16 mx-auto mb-3" color={activeTheme.svgFill} />
                    <h4 className={`text-lg font-bold ${activeTheme.primary}`} style={{ fontFamily: 'Cinzel, serif' }}>
                      Design Registry
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-2 font-serif">
                      All collections are logged under archival plates at the Paris Conservatory of Arts and Architecture.
                    </p>
                  </div>

                  {/* Right Column: Detailed Slide Directory */}
                  <div className="lg:col-span-8 space-y-4">
                    <h3 className={`text-2xl font-bold mb-4 ${activeTheme.primary}`} style={{ fontFamily: 'Cinzel, serif' }}>
                      {SLIDES_CONTENT[activeSlide].title}
                    </h3>
                    
                    <div className="space-y-3">
                      {SLIDES_CONTENT[activeSlide].items.map((item, index) => (
                        <div 
                          key={index}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border border-stone-200 bg-white/80 hover:bg-white transition-all duration-300 gap-2 shadow-sm hover:shadow"
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-8 h-8 rounded-full ${activeTheme.pillBg} flex items-center justify-center text-xs font-bold font-sans ${activeTheme.primary}`}>
                              {item.num}
                            </span>
                            <div>
                              <h5 className={`text-xs sm:text-sm font-bold ${activeTheme.primary}`}>{item.label}</h5>
                              <p className="text-[10px] text-stone-500 font-sans">{item.desc}</p>
                            </div>
                          </div>
                          <span className="text-[9px] uppercase tracking-wider text-stone-400 font-sans font-bold sm:self-center">READ DIRECTIVE →</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* SLIDE TYPE 3: SPLIT HERO BANNER */}
              {SLIDES_CONTENT[activeSlide].type === 'split-hero' && (
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  
                  <div className="space-y-4">
                    <div className={`inline-block px-2.5 py-1 rounded text-[10px] font-sans font-bold uppercase ${activeTheme.pillBg} ${activeTheme.primary}`}>
                      {SLIDES_CONTENT[activeSlide].tagline}
                    </div>
                    <h3 className={`text-3xl sm:text-4xl font-bold ${activeTheme.primary}`} style={{ fontFamily: 'Cinzel, serif' }}>
                      {SLIDES_CONTENT[activeSlide].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-serif">
                      {SLIDES_CONTENT[activeSlide].desc}
                    </p>
                    <div className="pt-2">
                      <button 
                        onClick={() => setShowInquiryModal(true)}
                        className={`px-5 py-2.5 text-[10px] tracking-wider uppercase font-sans font-bold text-white ${activeTheme.primaryBg} ${activeTheme.primaryBgHover} transition-all duration-300`}
                      >
                        Order Plate Swatch
                      </button>
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl border-2 ${activeTheme.border} bg-white/60 relative overflow-hidden group`}>
                    <div className="bg-[#FAF6EE] p-2 rounded border border-stone-200">
                      <LandscapeMotif className="w-full h-auto transition-transform duration-700 group-hover:scale-105" color={activeTheme.svgFill} lightColor={activeTheme.svgFillLight} />
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-[9px] tracking-widest text-stone-400 font-sans uppercase">
                        {SLIDES_CONTENT[activeSlide].landscapeLabel}
                      </span>
                    </div>
                  </div>

                </div>
              )}

              {/* SLIDE TYPE 4: THREE COLUMN LAYOUT */}
              {SLIDES_CONTENT[activeSlide].type === 'three-column' && (
                <div className="w-full space-y-6">
                  <div className="text-center max-w-xl mx-auto space-y-2">
                    <h3 className={`text-2xl sm:text-3xl font-bold ${activeTheme.primary}`} style={{ fontFamily: 'Cinzel, serif' }}>
                      {SLIDES_CONTENT[activeSlide].title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-500 font-serif italic">
                      "{SLIDES_CONTENT[activeSlide].subtitle}"
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    {SLIDES_CONTENT[activeSlide].columns.map((col, index) => (
                      <div 
                        key={index}
                        className="bg-white/80 p-5 rounded-xl border border-stone-200 text-center hover:bg-white transition-all duration-300 relative group shadow-sm hover:shadow-md"
                      >
                        <span className={`w-8 h-8 rounded-full ${activeTheme.pillBg} ${activeTheme.primary} flex items-center justify-center font-bold text-sm mx-auto mb-3 font-sans`}>
                          {col.num}
                        </span>
                        <h4 className={`text-sm sm:text-base font-bold mb-2 ${activeTheme.primary}`} style={{ fontFamily: 'Cinzel, serif' }}>
                          {col.heading}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed font-sans">
                          {col.text}
                        </p>
                        <div className={`absolute bottom-0 left-0 right-0 h-1 ${activeTheme.primaryBg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Slide Footer metadata */}
            <div className="flex justify-between items-center border-t border-stone-200 pt-4 mt-6">
              <span className="text-[9px] font-sans text-stone-400 tracking-wider">PROJECT BLUEPRINT v1.02</span>
              
              {/* Dynamic Interactive Slide Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveSlide((prev) => (prev === 0 ? SLIDES_CONTENT.length - 1 : prev - 1))}
                  className="p-1.5 rounded-full border border-stone-300 text-stone-500 hover:bg-stone-100 transition-all duration-200"
                  aria-label="Previous Slide"
                >
                  ←
                </button>
                <span className="text-xs font-sans font-bold text-stone-600">0{activeSlide + 1} / 0{SLIDES_CONTENT.length}</span>
                <button
                  onClick={() => setActiveSlide((prev) => (prev === SLIDES_CONTENT.length - 1 ? 0 : prev + 1))}
                  className="p-1.5 rounded-full border border-stone-300 text-stone-500 hover:bg-stone-100 transition-all duration-200"
                  aria-label="Next Slide"
                >
                  →
                </button>
              </div>

              <span className="text-[9px] font-sans text-stone-400 tracking-wider">PARIS — BEIJING — KYOTO</span>
            </div>

          </div>

        </div>
      </section>

      {/* --- LIVE ARTISANAL TEXTURE LAB (Interactive Fabric Customizer) --- */}
      <section id="fabric-lab" className="py-20 px-6 lg:px-16 border-t border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Customizer Left Column - Fabric Selector info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className={`text-xs uppercase tracking-[0.3em] font-sans font-bold ${activeTheme.secondary}`}>
                The Textile Lab
              </span>
              <h2 className={`text-3xl lg:text-4xl font-bold tracking-tight mt-1 ${activeTheme.primary}`} style={{ fontFamily: 'Cinzel, serif' }}>
                Tactile Luxury Swatches
              </h2>
            </div>

            <p className="text-stone-600 font-serif leading-relaxed text-sm sm:text-base">
              The soul of our design lies in the selection of materials. Toggle through our signature fabric matrices to observe specifications, weights, weaves, and intended structural integrations.
            </p>

            {/* List of Fabrics */}
            <div className="space-y-3 pt-4">
              {FABRICS.map((fabric, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedFabric(fabric)}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex justify-between items-center ${
                    selectedFabric.name === fabric.name 
                      ? `border-stone-800 ${activeTheme.accentBg} shadow-sm scale-[1.01]` 
                      : 'border-stone-200 bg-white hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-3.5 h-3.5 rounded-full border border-stone-300`} style={{ 
                      backgroundColor: 
                        fabric.name.includes("Delft") ? THEMES.blue.svgFill : 
                        fabric.name.includes("Sanguine") ? THEMES.rose.svgFill : 
                        fabric.name.includes("Verdant") ? THEMES.sage.svgFill : THEMES.charcoal.svgFill 
                    }} />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-800">{fabric.name}</h4>
                      <p className="text-[10px] text-stone-400 font-sans">Pattern Ref: {fabric.pattern}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-sans font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                      {fabric.weight}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button 
                onClick={() => {
                  setInquiryType(`Swatches: ${selectedFabric.name}`);
                  setShowInquiryModal(true);
                }}
                className={`w-full py-3.5 text-center text-xs tracking-widest font-sans font-bold uppercase transition-all duration-300 text-white ${activeTheme.primaryBg} ${activeTheme.primaryBgHover}`}
              >
                Order Free {selectedFabric.name.split(' ')[0]} Swatch
              </button>
            </div>
          </div>

          {/* Customizer Right Column - Immersive Zoom Preview of Selected Textile */}
          <div className="lg:col-span-7">
            <div className="bg-stone-50 p-4 sm:p-8 rounded-2xl border border-stone-200 shadow-xl relative overflow-hidden group">
              
              {/* Dynamic Textile Background preview block */}
              <div className="relative bg-white aspect-[4/3] rounded-xl overflow-hidden border border-stone-300/60 shadow-inner flex items-center justify-center">
                
                {/* Textile pattern repeat illustration simulating raw fabric feel */}
                <div className="absolute inset-0 opacity-15 pointer-events-none scale-150 transform group-hover:scale-125 transition-transform duration-1000">
                  <LandscapeMotif className="w-full h-full object-cover" 
                    color={
                      selectedFabric.name.includes("Delft") ? THEMES.blue.svgFill : 
                      selectedFabric.name.includes("Sanguine") ? THEMES.rose.svgFill : 
                      selectedFabric.name.includes("Verdant") ? THEMES.sage.svgFill : THEMES.charcoal.svgFill 
                    } 
                    lightColor={
                      selectedFabric.name.includes("Delft") ? THEMES.blue.svgFillLight : 
                      selectedFabric.name.includes("Sanguine") ? THEMES.rose.svgFillLight : 
                      selectedFabric.name.includes("Verdant") ? THEMES.sage.svgFillLight : THEMES.charcoal.svgFillLight
                    } 
                  />
                </div>

                {/* Fabric Weave Texture Overlay (Simulating real weave canvas via CSS) */}
                <div className="absolute inset-0 bg-repeat opacity-[0.08] pointer-events-none mix-blend-multiply" style={{ 
                  backgroundImage: "radial-gradient(circle, #000 10%, transparent 11%), radial-gradient(circle, #000 10%, transparent 11%)",
                  backgroundSize: "4px 4px",
                  backgroundPosition: "0 0, 2px 2px"
                }} />

                {/* Centered Spec Emblem */}
                <div className="relative z-10 text-center bg-white/95 p-6 sm:p-8 rounded-xl shadow-2xl border border-stone-200/80 max-w-sm mx-auto">
                  <RoseAccent className="w-12 h-12 mx-auto mb-3" 
                    color={
                      selectedFabric.name.includes("Delft") ? THEMES.blue.svgFill : 
                      selectedFabric.name.includes("Sanguine") ? THEMES.rose.svgFill : 
                      selectedFabric.name.includes("Verdant") ? THEMES.sage.svgFill : THEMES.charcoal.svgFill 
                    } 
                  />
                  <span className="text-[9px] uppercase tracking-widest text-stone-400 font-sans block mb-1">Archival Registry</span>
                  <h3 className="text-lg font-bold text-stone-800 font-serif leading-tight">{selectedFabric.name}</h3>
                  <p className="text-xs text-stone-500 italic font-serif my-2">"High precision monochromatic engraving on classic weave matrices."</p>
                  
                  <div className="mt-4 pt-4 border-t border-stone-200 grid grid-cols-2 gap-4 text-left">
                    <div>
                      <span className="text-[8px] uppercase tracking-wider text-stone-400 font-sans block">Registry Code</span>
                      <span className="text-xs font-mono font-bold text-stone-700">{selectedFabric.code}</span>
                    </div>
                    <div>
                      <span className="text-[8px] uppercase tracking-wider text-stone-400 font-sans block">Yarn Count</span>
                      <span className="text-xs font-sans font-bold text-stone-700">60-LEA Pure</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Specification Bottom Row */}
              <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-2">
                <div>
                  <h4 className="text-xs font-bold text-stone-700 font-sans">ECOLOGICAL CRITERIA MET</h4>
                  <p className="text-[10px] text-stone-400 font-sans">OEKO-TEX® Standard 100 — REACH Compliance Verified.</p>
                </div>
                <span className="text-[10px] font-sans font-bold bg-green-50 text-green-700 px-2.5 py-1 rounded border border-green-200 self-start sm:self-center">
                  In Stock & Ready
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- THE MASTERPIECE HERO GALLERY GRID (Our Realisations) --- */}
      <section className={`py-20 px-6 lg:px-16 ${activeTheme.bgSecondary} transition-colors duration-1000`}>
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className={`w-6 h-[1.5px] ${activeTheme.primaryBg}`} />
              <span className={`text-xs uppercase tracking-[0.3em] font-sans font-bold ${activeTheme.secondary}`}>
                The Grand Portfolio
              </span>
              <span className={`w-6 h-[1.5px] ${activeTheme.primaryBg}`} />
            </div>
            
            <h2 className={`text-3xl lg:text-4xl font-bold tracking-tight ${activeTheme.primary}`} style={{ fontFamily: 'Cinzel, serif' }}>
              Historic Realisations & Murals
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-serif italic">
              "Witness the integration of fine repeat lineart into grand high-end interior projects."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((proj) => (
              <div 
                key={proj.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Project Image Frame with dynamic zoom */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-stone-100">
                    <img 
                      src={proj.image} 
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Decorative Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded text-[10px] font-sans font-bold uppercase shadow-sm border border-stone-200">
                      {proj.year}
                    </div>
                  </div>

                  {/* Project Copy */}
                  <div className="p-6 space-y-3">
                    <span className={`text-[10px] uppercase tracking-widest font-sans font-bold ${activeTheme.secondary}`}>
                      {proj.subtitle}
                    </span>
                    <h3 className={`text-xl font-bold ${activeTheme.primary} leading-tight`} style={{ fontFamily: 'Cinzel, serif' }}>
                      {proj.title}
                    </h3>
                    <p className="text-xs text-stone-500 font-sans">
                      📍 {proj.location}
                    </p>
                    <p className="text-xs text-stone-600 font-serif leading-relaxed pt-2">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="p-6 pt-0 border-t border-stone-100 mt-4 flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-sans font-bold">VIEW CASE ARCHIVES</span>
                  <button 
                    onClick={() => {
                      setInquiryType(`Inquiry: Case Study - ${proj.title}`);
                      setShowInquiryModal(true);
                    }}
                    className={`w-8 h-8 rounded-full ${activeTheme.pillBg} ${activeTheme.primary} flex items-center justify-center hover:scale-110 transition-transform duration-200`}
                  >
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- HERITAGE HISTORICAL TIMELINE --- */}
      <section className="py-20 px-6 lg:px-16 border-t border-stone-200">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className={`text-xs uppercase tracking-[0.3em] font-sans font-bold ${activeTheme.secondary}`}>
              Chronicles of Craftsmanship
            </span>
            <h2 className={`text-3xl lg:text-4xl font-bold tracking-tight ${activeTheme.primary}`} style={{ fontFamily: 'Cinzel, serif' }}>
              The Historical Odyssey
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm font-sans">
              Trace the evolution of monochromatic toile textile production from its origins to present-day luxury.
            </p>
          </div>

          {/* Interactive Timeline Tabs */}
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {[
              { year: "1760", era: "The Birthplace", title: "Oberkampf Foundry" },
              { year: "1810", era: "The Royal Stamp", title: "Manufacture Royale" },
              { year: "1920", era: "Art Deco Silk", title: "Metropolitan Rebirth" },
              { year: "2026", era: "The Modern Atelier", title: "Maison de Jouy Revival" }
            ].map((node, index) => (
              <button
                key={index}
                onClick={() => setTimelineIndex(index)}
                className={`px-4 py-2 text-xs rounded transition-all duration-300 border font-sans ${
                  timelineIndex === index 
                    ? `${activeTheme.primaryBg} text-white font-bold border-transparent shadow` 
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {node.year} — {node.era}
              </button>
            ))}
          </div>

          {/* Timeline Content Block */}
          <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden">
            
            {/* Subtle floating background decoration */}
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-[0.04] pointer-events-none">
              <RoseAccent className="w-full h-full" color={activeTheme.svgFill} />
            </div>

            {/* Left timeline graphics indicator */}
            <div className="md:col-span-4 text-center md:border-r md:border-stone-200 md:pr-8 py-4">
              <span className={`text-5xl lg:text-7xl font-extrabold ${activeTheme.primary} block tracking-tighter`} style={{ fontFamily: 'Cinzel, serif' }}>
                {timelineIndex === 0 && "1760"}
                {timelineIndex === 1 && "1810"}
                {timelineIndex === 2 && "1920"}
                {timelineIndex === 3 && "2026"}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-sans font-bold block mt-2">Historical Marker</span>
            </div>

            {/* Right timeline copy */}
            <div className="md:col-span-8 space-y-4">
              <h3 className={`text-xl lg:text-2xl font-bold ${activeTheme.primary}`} style={{ fontFamily: 'Cinzel, serif' }}>
                {timelineIndex === 0 && "Christophe-Philippe Oberkampf's Vision"}
                {timelineIndex === 1 && "The Court of Napoleon & Luxury Mandates"}
                {timelineIndex === 2 && "The Fusion of Chinoiserie & Art Deco Silk"}
                {timelineIndex === 3 && "Ecological Preservation & Digital Weaving"}
              </h3>
              
              <p className="text-stone-600 text-sm font-serif leading-relaxed">
                {timelineIndex === 0 && "In the village of Jouy-en-Josas near Versailles, the first wooden printing blocks were inked. Oberkampf designed pastoral engravings representing rural bliss, featuring copper-plates which allowed for fine, elegant vector-like lineart details."}
                {timelineIndex === 1 && "Emperor Napoleon Bonaparte declared the Manufacture de Jouy as a royal purveyor of fine textiles, dressing his palaces in monochrome crimson and cobalt blue silk coverings, establishing toile as the ultimate elite decor standard."}
                {timelineIndex === 2 && "As global trade flourished, artists in Lyon merged classical French pastoral narratives with Japanese botanical screens. Fine branches, pagodas, and weeping willows became permanently embedded in the core Toile DNA."}
                {timelineIndex === 3 && "Today, Maison de Jouy revives these historical blueprints. We use high-precision non-toxic water-soluble natural inks on organic flax and linen. This ensures zero chemical runoff while offering designers customized scales for any project."}
              </p>

              <div className="inline-flex items-center gap-2 pt-2">
                <span className={`w-2.5 h-2.5 rounded-full ${activeTheme.primaryBg}`} />
                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-sans font-bold">
                  {timelineIndex === 0 && "Foundry Era"}
                  {timelineIndex === 1 && "Imperial Patronage"}
                  {timelineIndex === 2 && "The Silk Alliance"}
                  {timelineIndex === 3 && "Zero Emission Future"}
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- PREMIUM NEWSLETTER & INTERACTIVE INQUIRY BANNER --- */}
      <section className={`py-16 px-6 lg:px-16 ${activeTheme.primaryBg} text-white text-center relative overflow-hidden transition-colors duration-1000`}>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 -left-16 w-48 h-48 opacity-[0.08] pointer-events-none -translate-y-1/2">
          <RoseAccent className="w-full h-full" color="#FFFFFF" />
        </div>
        <div className="absolute top-1/2 -right-16 w-48 h-48 opacity-[0.08] pointer-events-none -translate-y-1/2">
          <LandscapeMotif className="w-full h-full" color="#FFFFFF" lightColor="#FFFFFF" />
        </div>

        <div className="max-w-xl mx-auto space-y-6 relative z-10">
          <RoseAccent className="w-12 h-12 mx-auto" color="#FFFFFF" />
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Cinzel, serif' }}>
            Join the Archival Circle
          </h2>
          <p className="text-stone-200 text-xs sm:text-sm font-serif italic max-w-md mx-auto">
            "Receive quarterly dossiers detailing new tapestry excavations, color customisation systems, and limited-edition silk releases."
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 pt-4">
            <input 
              type="email" 
              placeholder="Enter your professional email address" 
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-grow px-5 py-3.5 rounded-none bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 text-xs font-sans"
            />
            <button 
              type="submit"
              className="px-6 py-3.5 bg-white text-stone-900 font-sans font-bold text-xs tracking-wider uppercase hover:bg-stone-100 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>

          {newsletterSuccess && (
            <p className="text-xs text-stone-100 font-sans tracking-wide bg-white/10 p-2.5 border border-white/20">
              ✓ Successfully subscribed! Your welcome dossier is en route to your inbox.
            </p>
          )}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-950 text-stone-400 py-16 px-6 lg:px-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <RoseAccent className="w-8 h-8" color="#FAF7F0" />
              <h3 className="text-lg font-bold tracking-widest text-white font-serif" style={{ fontFamily: 'Cinzel, serif' }}>
                MAISON DE JOUY
              </h3>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed font-sans">
              Ateliers of classical engraving, hand-printed murals, and matched textiles preserving the heritage of Versailles' finest decoration.
            </p>
            <p className="text-[10px] text-stone-600 font-mono">
              © 2026 MAISON DE JOUY S.A. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-sans font-bold">THE ARCHIVES</h4>
            <ul className="space-y-2 text-xs font-sans text-stone-400">
              <li><a href="#presentation-deck" className="hover:text-white transition-colors duration-200">Catalog Presentation</a></li>
              <li><a href="#fabric-lab" className="hover:text-white transition-colors duration-200">Textile Swatches</a></li>
              <li><a href="#fabric-lab" className="hover:text-white transition-colors duration-200">Organic Dye Criteria</a></li>
              <li><a href="#presentation-deck" className="hover:text-white transition-colors duration-200">Copper-plate Specifications</a></li>
            </ul>
          </div>

          {/* Atelier Addresses */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-sans font-bold">ATELIER CONTACT</h4>
            <ul className="space-y-2 text-xs font-sans text-stone-400">
              <li>Paris: 42 Rue du Faubourg Saint-Honoré</li>
              <li>Kyoto: Higashiyama District, Studio B</li>
              <li>Direct: contact@maisondejouy.atelier</li>
              <li>Tel: +33 (0) 1 42 68 53 00</li>
            </ul>
          </div>

          {/* Premium Guarantee Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-sans font-bold">THE GUARANTEE</h4>
            <p className="text-xs text-stone-500 leading-relaxed font-serif italic">
              "We guarantee that every motif is printed using hand-carved copper rollers or silk screens, utilizing 100% natural water-soluble pigments extracted from organic weld and indigo crop."
            </p>
          </div>

        </div>
      </footer>

      {/* --- BESPOKE INQUIRY & SWATCH REQUEST MODAL (Captures premium feel, avoids standard ugly alerts) --- */}
      {showInquiryModal && (
        <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#FAF7F0] border-2 border-stone-800 rounded-xl p-6 sm:p-8 max-w-lg w-full relative space-y-6 shadow-2xl overflow-hidden animate-fade-in">
            
            {/* Modal Corner Marks */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-stone-800" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-stone-800" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-stone-800" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-stone-800" />

            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-sans font-bold block mb-1">BESPOKE SERVICES</span>
                <h3 className="text-2xl font-bold text-stone-900 font-serif" style={{ fontFamily: 'Cinzel, serif' }}>
                  Atelier Consultation
                </h3>
              </div>
              <button 
                onClick={() => {
                  setShowInquiryModal(false);
                  setFormSubmitted(false);
                }}
                className="text-stone-500 hover:text-stone-800 font-bold font-sans text-xl"
              >
                ✕
              </button>
            </div>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <RoseAccent className="w-16 h-16 mx-auto animate-bounce" color={activeTheme.svgFill} />
                <h4 className={`text-xl font-bold ${activeTheme.primary}`} style={{ fontFamily: 'Cinzel, serif' }}>
                  Swatches Reserved
                </h4>
                <p className="text-xs text-stone-600 font-serif max-w-sm mx-auto">
                  Your bespoke sample dossier is logged in our registers. A dedicated design curator will contact you within 24 hours to confirm shipping.
                </p>
                <div className="text-[10px] text-stone-400 font-sans">Closing window...</div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-sans mb-1 font-semibold">Your Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Countess Beatrice de Valois" 
                    className="w-full px-4 py-2.5 rounded bg-white border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-600 text-xs font-serif"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-sans mb-1 font-semibold">Professional Email</label>
                  <input 
                    type="email" 
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="e.g. beatrice@valois-interieur.com" 
                    className="w-full px-4 py-2.5 rounded bg-white border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-600 text-xs font-serif"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-sans mb-1 font-semibold">Consultation Subject</label>
                  <select 
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded bg-white border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-600 text-xs font-sans"
                  >
                    <option>Bespoke Hand-painted Wallcoverings</option>
                    <option>Custom Hand-Painted Porcelain Set</option>
                    <option>Matched Draperies & Fine Silk Upholstery</option>
                    <option>Swatches: Delft Blue Premium Silk</option>
                    <option>Swatches: Sanguine Rose Heavy Linen</option>
                    <option>Swatches: Verdant Sage Classic Velvet</option>
                    <option>Swatches: Charcoal Ink Organic Cotton</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-sans mb-1 font-semibold">Project Notes / Dimensions (Optional)</label>
                  <textarea 
                    rows="3"
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Describe your chamber dimensions, ceiling heights, or preferred historic plate repeat references."
                    className="w-full px-4 py-2.5 rounded bg-white border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-600 text-xs font-serif"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className={`w-full py-3.5 text-center text-xs tracking-widest font-sans font-bold uppercase transition-all duration-300 text-white ${activeTheme.primaryBg} ${activeTheme.primaryBgHover}`}
                  >
                    Submit Register Request
                  </button>
                </div>
              </form>
            )}

            <div className="text-center pt-2">
              <span className="text-[9px] text-stone-400 font-sans uppercase tracking-widest block">
                NO FEES APPLY FOR REGISTERED SWATCH PACKAGES
              </span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
8