import React, { useState, useEffect, useRef } from 'react';

// Custom Elegant SVG Icons to ensure reliable rendering and premium styling
const Icons = {
  ArrowRight: () => (
    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
  ArrowUpRight: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  ),
  Wind: () => (
    <svg className="w-6 h-6 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12h-4.25m3.75 3.5h-2.5m2.5-7h-5.5m-3.5 3.5H3m6.5 3.5H3M14 7.5H3" />
    </svg>
  ),
  Sun: () => (
    <svg className="w-6 h-6 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m-9-9h1.5m15 0H21m-3.15-6.15l-1.06 1.06M6.15 17.85l-1.06 1.06m0-11.66l1.06 1.06m10.6 10.6l1.06-1.06M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-6 h-6 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  Layers: () => (
    <svg className="w-6 h-6 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m11.142 0L21.75 12l-4.179-2.25m-11.142 0L12 7.5l4.179 2.25m-11.142 0l4.179 2.25L12 12l4.179-2.25m-11.142 4.5L12 16.5l4.179-2.25m-11.142 4.5L12 21l4.179-2.25" />
    </svg>
  ),
  Acoustics: () => (
    <svg className="w-6 h-6 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  Phone: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.944l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  Mail: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  Telegram: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z" />
    </svg>
  ),
  WhatsApp: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.012 2c-5.506 0-9.969 4.462-9.969 9.969 0 1.758.459 3.413 1.264 4.859L2 22l5.312-1.393c1.403.766 2.997 1.201 4.694 1.201 5.506 0 9.975-4.462 9.975-9.969 0-5.506-4.47-9.969-9.969-9.969zm5.838 14.073c-.24.675-1.2 1.226-1.912 1.296-.48.044-1.103.079-3.219-.797-2.705-1.119-4.437-3.876-4.57-4.053-.133-.177-.966-1.284-.966-2.45s.608-1.733.824-1.954c.217-.221.472-.277.63-.277.158 0 .315 0 .452.006.143.006.335-.054.524.405.195.474.667 1.625.726 1.743.059.118.099.256.02.415-.079.158-.118.256-.237.395-.118.139-.25.31-.356.417-.118.118-.242.247-.104.485.138.237.613 1.01 1.31 1.631.897.8 1.652 1.047 1.89 1.166.237.118.376.099.514-.059.138-.158.592-.688.75-1.025.158-.335.315-.277.532-.197.217.079 1.378.65 1.614.768.237.118.395.177.453.277.059.099.059.575-.181 1.25z" />
    </svg>
  )
};

export default function App() {
  // Navigation & Interactive States
  const [activeTab, setActiveTab] = useState('all');
  const [estimateSystem, setEstimateSystem] = useState('sliding-walls');
  const [width, setWidth] = useState(6.5); // meters
  const [height, setHeight] = useState(3.2); // meters
  const [glassType, setGlassType] = useState('ultra-low-e');
  const [metricSelected, setMetricSelected] = useState(null);
  const [materialSelected, setMaterialSelected] = useState(0);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [consultationStep, setConsultationStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Architect', projectType: 'Residential', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Before/After comparison slider state
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderContainerRef = useRef(null);

  // Handle slide movement for the Hero Visualizer
  const handleSliderMove = (clientX) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) { // Only drag on click/press
      handleSliderMove(e.clientX);
    }
  };

  // Systems and materials structural data
  const systems = {
    'sliding-walls': {
      name: 'Sky-Frame Sliding Walls',
      description: 'Ultra-slim structural frames featuring 20mm sightlines, integrated flush thresholds, and structural corner glass configurations.',
      baseUValue: 0.82,
      lightTrans: 94,
      windLoad: 240,
    },
    'glass-facades': {
      name: 'Structural Glass Facades',
      description: 'Point-supported, bolt-free curtain walling utilizing tension rods and high-performance silicon structural glazing.',
      baseUValue: 0.76,
      lightTrans: 96,
      windLoad: 280,
    },
    'skylights': {
      name: 'Walk-on Sky Atriums',
      description: 'Multilayer laminated safety glass optimized for structural loads, architectural walkability, and UV filtration.',
      baseUValue: 0.89,
      lightTrans: 88,
      windLoad: 200,
    }
  };

  const materialSpecs = [
    {
      title: "Low-E Triple Glazing",
      techName: "AURA Ultra-Low-E (Argon Filled)",
      description: "Utilizes atomic-scale metallic oxide layers to reflect long-wave infrared heat back into the space while maintaining crystal-clear visible light transmittance.",
      uValue: "0.6 W/m²K",
      shgc: "0.37",
      thickness: "44mm (6-14-6-14-6)",
      features: ["99.5% UV Blocker", "Argon Gas Cavities", "Edge-Sealed Warm Spacers"],
      diagram: (
        <svg className="w-full h-44 bg-neutral-900/40 rounded-lg p-4 border border-white/5" viewBox="0 0 200 120">
          <g transform="translate(10, 10)">
            {/* Glass Pane 1 */}
            <rect x="20" y="10" width="10" height="80" rx="1.5" fill="#38bdf8" fillOpacity="0.4" stroke="#0ea5e9" strokeWidth="1" />
            <text x="25" y="102" fill="#9ca3af" fontSize="7" textAnchor="middle">Low-E Pane</text>
            
            {/* Gap 1 */}
            <rect x="30" y="15" width="25" height="70" fill="url(#argonGradient)" opacity="0.3" />
            <path d="M 33 50 Q 42.5 40, 52 50" fill="none" stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="2,2" />
            <text x="42.5" y="53" fill="#60a5fa" fontSize="6" textAnchor="middle">Argon</text>

            {/* Glass Pane 2 */}
            <rect x="55" y="10" width="10" height="80" rx="1.5" fill="#38bdf8" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="1" />
            
            {/* Gap 2 */}
            <rect x="65" y="15" width="25" height="70" fill="url(#argonGradient)" opacity="0.3" />
            
            {/* Glass Pane 3 */}
            <rect x="90" y="10" width="10" height="80" rx="1.5" fill="#38bdf8" fillOpacity="0.4" stroke="#0ea5e9" strokeWidth="1" />
            <text x="95" y="102" fill="#9ca3af" fontSize="7" textAnchor="middle">Clear Pane</text>

            {/* Heat Reflection line */}
            <path d="M 170 50 L 135 50 L 148 20" fill="none" stroke="#f43f5e" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="175" y="53" fill="#f43f5e" fontSize="7" fontWeight="bold">Thermal Radiation Reflected</text>
          </g>
          <defs>
            <linearGradient id="argonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
            </linearGradient>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
            </marker>
          </defs>
        </svg>
      )
    },
    {
      title: "Impact Tempered Safety Glass",
      techName: "AURA Armored-T (Thermanized)",
      description: "Subjected to strict heat treatment cycles bringing the surfaces into highly balanced compressive stress, making it up to 5x stronger than standard annealed glass.",
      uValue: "1.1 W/m²K",
      shgc: "0.42",
      thickness: "12mm to 19mm Single Layer",
      features: ["Balanced Tensile Core", "Beveled Safe Edges", "Spontaneous Breakage Proof"],
      diagram: (
        <svg className="w-full h-44 bg-neutral-900/40 rounded-lg p-4 border border-white/5" viewBox="0 0 200 120">
          <g transform="translate(10, 10)">
            {/* Tension Core & Compression layers */}
            <rect x="50" y="10" width="80" height="80" rx="2" fill="#1e293b" stroke="#475569" strokeWidth="1" />
            {/* Left compression layer */}
            <rect x="50" y="10" width="15" height="80" rx="2" fill="#0284c7" fillOpacity="0.3" />
            {/* Right compression layer */}
            <rect x="115" y="10" width="15" height="80" rx="2" fill="#0284c7" fillOpacity="0.3" />
            
            {/* Indicators */}
            <text x="25" y="30" fill="#38bdf8" fontSize="7" textAnchor="middle">High Compression</text>
            <path d="M 25 35 L 55 35" fill="none" stroke="#38bdf8" strokeWidth="0.75" markerEnd="url(#blueArrow)" />

            <text x="155" y="30" fill="#38bdf8" fontSize="7" textAnchor="middle">High Compression</text>
            <path d="M 155 35 L 125 35" fill="none" stroke="#38bdf8" strokeWidth="0.75" markerEnd="url(#blueArrow)" />

            <text x="90" y="54" fill="#f87171" fontSize="7" textAnchor="middle">Inner Tension Core</text>
            <path d="M 75 60 L 105 60" fill="none" stroke="#f87171" strokeWidth="1" strokeDasharray="2,2" />
          </g>
          <defs>
            <marker id="blueArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
            </marker>
          </defs>
        </svg>
      )
    },
    {
      title: "Acoustic Laminated Glass",
      techName: "AURA Sound-Shield Interlayer",
      description: "Engineered specifically to filter out standard and high-frequency sound waves. Sandwiches an acoustic PVB layer to create an ultimate acoustic break.",
      uValue: "1.0 W/m²K",
      shgc: "0.39",
      thickness: "21.5mm (10 - PVB - 10)",
      features: ["Acoustic Performance Rating: Rw 42dB", "Structural Shard Retention", "UV Transmission reduction: 99.9%"],
      diagram: (
        <svg className="w-full h-44 bg-neutral-900/40 rounded-lg p-4 border border-white/5" viewBox="0 0 200 120">
          <g transform="translate(10, 10)">
            {/* Left Glass */}
            <rect x="50" y="10" width="25" height="80" rx="1" fill="#38bdf8" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="0.75" />
            {/* Acoustic PVB membrane */}
            <rect x="75" y="10" width="8" height="80" rx="0.5" fill="#a855f7" fillOpacity="0.6" stroke="#9333ea" strokeWidth="0.75" />
            {/* Right Glass */}
            <rect x="83" y="10" width="25" height="80" rx="1" fill="#38bdf8" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="0.75" />

            <text x="79" y="100" fill="#a855f7" fontSize="7" textAnchor="middle">PVB Acoustic Interlayer</text>

            {/* Sound reflection */}
            <path d="M 15 35 L 45 45 C 55 48, 65 52, 70 54" fill="none" stroke="#f43f5e" strokeWidth="1.5" />
            <path d="M 45 45 L 20 65" fill="none" stroke="#f43f5e" strokeWidth="1" opacity="0.5" />
            <text x="15" y="28" fill="#f43f5e" fontSize="7" fontWeight="bold">Ambient Noise (65dB)</text>

            <path d="M 78 55 L 83 55 L 115 65" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="1,1" />
            <text x="145" y="70" fill="#22c55e" fontSize="7" fontWeight="bold">Attenuated (23dB)</text>
          </g>
        </svg>
      )
    },
    {
      title: "Slimline Structural Aluminum",
      techName: "AURA Aero-S Thermal Break",
      description: "Premium aerospace-grade structural frame featuring an advanced carbon-reinforced polyamide thermal break to fully combat thermal bridging.",
      uValue: "0.95 W/m²K (Frame)",
      shgc: "N/A",
      thickness: "20mm Face Width Profile",
      features: ["Marine-Grade Anodization", "Concealed Drainage System", "Integrated Zero-Threshold Track"],
      diagram: (
        <svg className="w-full h-44 bg-neutral-900/40 rounded-lg p-4 border border-white/5" viewBox="0 0 200 120">
          <g transform="translate(10, 10)">
            {/* Outer Alum */}
            <rect x="30" y="20" width="30" height="60" rx="1" fill="#4b5563" stroke="#9ca3af" strokeWidth="1" />
            {/* Thermal Break */}
            <rect x="60" y="30" width="25" height="40" rx="1" fill="#1f2937" stroke="#374151" strokeWidth="1" />
            {/* Inner Alum */}
            <rect x="85" y="20" width="30" height="60" rx="1" fill="#4b5563" stroke="#9ca3af" strokeWidth="1" />

            {/* Labels */}
            <text x="45" y="93" fill="#9ca3af" fontSize="7" textAnchor="middle">Exterior Profile</text>
            <text x="72.5" y="15" fill="#facc15" fontSize="7" textAnchor="middle">Polyamide Thermal Break</text>
            <path d="M 72.5 19 L 72.5 28" fill="none" stroke="#facc15" strokeWidth="0.5" />
            <text x="100" y="93" fill="#9ca3af" fontSize="7" textAnchor="middle">Interior Profile</text>
            
            {/* Heat Stop */}
            <path d="M 15 50 L 55 50" fill="none" stroke="#f43f5e" strokeWidth="1.5" />
            <path d="M 55 50 L 52 45" fill="none" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="15" y="45" fill="#f43f5e" fontSize="7" fontWeight="bold">Cold Bridge Arrested</text>
          </g>
        </svg>
      )
    }
  ];

  // Portfolio projects
  const projects = [
    {
      id: 1,
      title: "The Horizon Pavilion",
      category: "residential",
      location: "Geneva, Switzerland",
      area: "340 sqm Glass Area",
      spec: "20mm Structural Slimline Sliding",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "Valkyrie Commercial Headquarters",
      category: "commercial",
      location: "Oslo, Norway",
      area: "1,200 sqm Structural Curtain Wall",
      spec: "Acoustic Triple Glazed Facade",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "Nordic Glass Atrium Villa",
      category: "residential",
      location: "Helsinki, Finland",
      area: "180 sqm Insulated Frameless Corner",
      spec: "Ultra-Low-E Double Laminated",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      title: "Aether Tower Facade",
      category: "commercial",
      location: "Frankfurt, Germany",
      area: "3,100 sqm Structural Glazing",
      spec: "Steel Tension-Truss Suspended Facade",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  // Dynamic calculations based on user inputs
  const calculatedUValue = (systems[estimateSystem].baseUValue * (glassType === 'ultra-low-e' ? 0.85 : 1.15)).toFixed(2);
  const calculatedEnergySavings = Math.round((1 - (calculatedUValue / 1.6)) * 100);
  const calculatedTransmittance = glassType === 'ultra-low-e' ? 98 : 84;
  const calculatedAcousticRating = glassType === 'ultra-low-e' ? 44 : 38;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setShowConfigModal(false);
      setFormSubmitted(false);
      setConsultationStep(1);
      // Reset fields
      setFormData({ name: '', email: '', role: 'Architect', projectType: 'Residential', message: '' });
    }, 2500);
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen font-sans selection:bg-neutral-700 selection:text-white overflow-x-hidden">
      
      {/* Dynamic Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-neutral-950/80 backdrop-blur-md border-b border-white/5 px-6 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-semibold tracking-wider font-display">AURA</span>
          <span className="text-[10px] uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded-full text-neutral-300">SYSTEMS</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">Philosophy</a>
          <a href="#materials" className="hover:text-white transition-colors">Material Science</a>
          <a href="#estimator" className="hover:text-white transition-colors">Estimator</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setShowConfigModal(true)}
            className="hidden sm:inline-block bg-white text-neutral-950 hover:bg-neutral-200 transition-all px-5 py-2 rounded-full text-xs font-semibold tracking-wide"
          >
            Request Architectural Consultation
          </button>
          
          <div className="flex items-center space-x-2 text-neutral-400">
            <a href="https://t.me/" target="_blank" rel="noreferrer" className="p-2 hover:text-white transition-colors">
              <Icons.Telegram />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="p-2 hover:text-white transition-colors">
              <Icons.WhatsApp />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Interactive Split-Screen Clarity Canvas */}
      <section className="relative pt-24 lg:pt-28 min-h-[95vh] flex flex-col justify-between overflow-hidden">
        
        {/* Giant Logo Aura Intersecting Layout */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0 overflow-hidden">
          <h1 className="text-[20vw] lg:text-[16vw] font-bold tracking-tighter text-white/[0.03] select-none leading-none">
            AURA
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-8">
          
          {/* Hero Left: Strategic copy */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full py-1 px-3 w-fit text-xs text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Redefining Structural Glass Interfaces</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
              Panoramic Glass. <br />
              <span className="text-neutral-400 font-normal">Where pure design meets pristine vistas.</span>
            </h2>

            <p className="text-neutral-400 text-sm lg:text-base leading-relaxed max-w-lg">
              We design and construct minimal structural glazing panels, zero-threshold pocket doors, and frameless sky facades engineered to disappear into the scenery.
            </p>

            {/* Interactive Hero Widget: Micro-Summary and direct trigger */}
            <div className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-4 rounded-xl flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                  <Icons.Layers />
                </div>
                <div>
                  <h4 className="text-xs font-semibold">98% Clarity Standard</h4>
                  <p className="text-[11px] text-neutral-400">Zero green tint in all custom compositions</p>
                </div>
              </div>
              <button 
                onClick={() => setShowConfigModal(true)}
                className="bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg px-4 py-2 text-xs font-medium transition-all flex items-center space-x-1"
              >
                <span>Book Call</span>
                <Icons.ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Hero Right: Interactive Clarity Canvas before/after visualizer */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full text-center lg:text-right mb-2">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400">
                Drag Slider to view transmission difference
              </span>
            </div>

            {/* Before-After Interactive Container */}
            <div 
              ref={sliderContainerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl group"
            >
              {/* "Standard Glass" Frame (Before - Background) */}
              <div className="absolute inset-0 w-full h-full bg-slate-950">
                {/* Simulated Greenish Glare */}
                <div className="absolute inset-0 bg-emerald-950/20 mix-blend-color-burn z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Standard Glass View"
                  className="w-full h-full object-cover filter saturate-[0.8] blur-[0.5px] brightness-[0.9]"
                />
                
                {/* Overlay badge standard glass */}
                <div className="absolute bottom-6 left-6 z-20 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded text-[11px] uppercase tracking-wider text-emerald-400">
                  Standard Glazing (78% Light Transmittance)
                </div>
              </div>

              {/* "AURA Ultra-Clear Glass" (After - Slider overlay) */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden z-10 border-r-2 border-white/60 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                style={{ width: `${sliderPosition}%` }}
              >
                {/* Clean, crystal clear version of image */}
                <div className="absolute inset-0 w-[100vw] lg:w-[60vw] h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
                    alt="AURA Panoramic view"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle high-end reflection glow representing optical purity */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-sky-400/10 pointer-events-none"></div>
                  
                  {/* Overlay badge AURA glass */}
                  <div className="absolute bottom-6 left-6 z-20 bg-white text-neutral-950 px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
                    Aura Pristine Line (98.6% Light Transmittance)
                  </div>
                </div>
              </div>

              {/* Custom Handle Indicator */}
              <div 
                className="absolute inset-y-0 z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white text-neutral-900 rounded-full flex items-center justify-center shadow-2xl border border-neutral-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center w-full mt-4 text-xs text-neutral-400 px-2">
              <span>← Green-tinted conventional glass</span>
              <span className="font-semibold text-white">Slide to test transparency</span>
              <span>Ultra-Clear AURA Low-Iron Glass →</span>
            </div>
          </div>

        </div>

        {/* Dynamic bottom strip with details */}
        <div className="border-t border-white/5 bg-neutral-950/40 py-6 mt-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <span className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Optical Transmittance</span>
              <span className="text-xl font-bold font-mono tracking-tight text-white">98% Ultra-Clear</span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Wind Resilience</span>
              <span className="text-xl font-bold font-mono tracking-tight text-white">Up to 250 km/h</span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Thermal Resistance</span>
              <span className="text-xl font-bold font-mono tracking-tight text-white">U-Value 0.6 W/m²K</span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Slimmest Sightline</span>
              <span className="text-xl font-bold font-mono tracking-tight text-white">20 mm Profile</span>
            </div>
          </div>
        </div>

      </section>

      {/* Engineering Philosophy Segment */}
      <section id="about" className="py-24 bg-neutral-900/20 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col - Bold Mission statement */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <span className="text-xs uppercase tracking-widest text-neutral-500">ENGINEERING PHILOSOPHY</span>
              <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Perfecting optical transparency. Maximizing structural load resistance.
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Standard glass acts as a visual and thermal block. At AURA, we engineer structural glazing as a fluid interface, integrating aerospace alloys and micro-layered chemical treatments to merge inside and outside perfectly.
              </p>
            </div>

            {/* Right Col - Visual grid of custom stats & facts with modal states */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  stat: "25+ Years",
                  title: "Architectural Legacy",
                  detail: "Custom manufacturing and installation solutions across 14 countries in residential and commercial developments.",
                  tag: "Reliability"
                },
                {
                  stat: "40% Savings",
                  title: "Active Thermal Control",
                  detail: "Reduces thermal leakage with our triple-pane warm-edge technology and argon gas-filled core compositions.",
                  tag: "Efficiency"
                },
                {
                  stat: "Rw 44dB",
                  title: "Acoustic Silence",
                  detail: "Multilayer acoustic dampening stops structural and environmental vibrations, creating serene living spaces.",
                  tag: "Comfort"
                },
                {
                  stat: "Marine Grade",
                  title: "Ultra-Resilient Framing",
                  detail: "Aerospace aluminum profiles anodized with heavy-duty coastal weather shielding to resist corrosion.",
                  tag: "Resilience"
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => setMetricSelected(metricSelected === idx ? null : idx)}
                  className={`group relative p-6 rounded-xl border border-white/5 cursor-pointer transition-all duration-300 ${
                    metricSelected === idx ? 'bg-white text-neutral-950 border-white' : 'bg-neutral-950/50 hover:bg-neutral-900/60'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-2xl font-bold tracking-tight font-mono ${metricSelected === idx ? 'text-neutral-950' : 'text-white'}`}>
                      {item.stat}
                    </span>
                    <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      metricSelected === idx ? 'bg-neutral-900 text-white' : 'bg-white/5 text-neutral-400'
                    }`}>
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold mb-2">{item.title}</h4>
                  <p className={`text-xs leading-relaxed transition-all duration-300 ${
                    metricSelected === idx ? 'text-neutral-800' : 'text-neutral-400'
                  }`}>
                    {item.detail}
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between text-[11px] font-medium opacity-60">
                    <span>{metricSelected === idx ? 'Tap to close' : 'Learn more'}</span>
                    <Icons.ArrowUpRight className={`w-3 h-3 transform transition-transform ${metricSelected === idx ? 'rotate-180' : 'group-hover:translate-x-0.5'}`} />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Material Science Interactive Segment */}
      <section id="materials" className="py-24 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-neutral-500">Material Science</span>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                Composed for High Architectural Demands
              </h2>
            </div>
            <p className="text-neutral-400 text-sm max-w-md">
              Explore the technical configurations of our composite glazing layers, acoustic dampeners, and aerospace framing structural cross-sections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Material Menu Selector */}
            <div className="lg:col-span-4 space-y-3">
              {materialSpecs.map((mat, idx) => (
                <button
                  key={idx}
                  onClick={() => setMaterialSelected(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all flex items-center justify-between group ${
                    materialSelected === idx 
                      ? 'bg-white text-neutral-950 border-white' 
                      : 'bg-neutral-900/30 border-white/5 text-neutral-400 hover:bg-neutral-900/50 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`text-xs font-mono font-bold w-6 h-6 rounded-full flex items-center justify-center border ${
                      materialSelected === idx ? 'border-neutral-950 bg-neutral-950 text-white' : 'border-neutral-800 bg-neutral-900'
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-semibold tracking-wide">{mat.title}</span>
                  </div>
                  <Icons.ArrowRight />
                </button>
              ))}
            </div>

            {/* Right: Detailed interactive preview window */}
            <div className="lg:col-span-8 bg-neutral-900/30 border border-white/5 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-stretch">
              
              {/* Technical drawing blueprint */}
              <div className="flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded">
                    Technical Diagram
                  </span>
                  <div className="mt-4">
                    {materialSpecs[materialSelected].diagram}
                  </div>
                </div>
                <div className="bg-neutral-950/60 rounded-lg p-3 border border-white/5 text-[11px] text-neutral-400 italic">
                  * Note: For custom structural projects, glass layouts are engineered specifically to balance structural stress and local high-elevation wind forces.
                </div>
              </div>

              {/* Specs & Detailed Breakdown */}
              <div className="flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-neutral-400 tracking-wider">Product ID</span>
                    <h3 className="text-xl font-bold tracking-tight text-white mt-1">
                      {materialSpecs[materialSelected].techName}
                    </h3>
                  </div>
                  
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {materialSpecs[materialSelected].description}
                  </p>

                  {/* Technical Table */}
                  <div className="border-t border-white/5 pt-4 space-y-2">
                    <div className="flex justify-between text-xs py-1 border-b border-white/5">
                      <span className="text-neutral-500">U-Value Rating:</span>
                      <span className="font-mono text-white font-medium">{materialSpecs[materialSelected].uValue}</span>
                    </div>
                    <div className="flex justify-between text-xs py-1 border-b border-white/5">
                      <span className="text-neutral-500">Solar Heat Gain:</span>
                      <span className="font-mono text-white font-medium">{materialSpecs[materialSelected].shgc}</span>
                    </div>
                    <div className="flex justify-between text-xs py-1 border-b border-white/5">
                      <span className="text-neutral-500">Component Thickness:</span>
                      <span className="font-mono text-white font-medium">{materialSpecs[materialSelected].thickness}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">Architectural Performance features</span>
                  {materialSpecs[materialSelected].features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-xs text-neutral-300">
                      <Icons.Check />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Custom Dynamic Architectural Estimator */}
      <section id="estimator" className="py-24 bg-neutral-900/10 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-neutral-500">DESIGN UTILITY</span>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">
              Configure Your Structural System
            </h2>
            <p className="text-neutral-400 text-sm">
              Adjust dimensions and structural specifications below to calculate live acoustic insulation, optical clarity, and energy performance metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive Parameters Panel */}
            <div className="lg:col-span-5 bg-neutral-900/30 border border-white/5 rounded-2xl p-6 flex flex-col justify-between space-y-8">
              
              {/* Step 1: System Selection */}
              <div className="space-y-4">
                <span className="text-xs font-semibold text-neutral-400 block">
                  1. Select Glass System Configuration
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {Object.keys(systems).map((sysKey) => (
                    <button
                      key={sysKey}
                      onClick={() => setEstimateSystem(sysKey)}
                      className={`py-3 px-2 rounded-lg text-center border text-xs font-semibold tracking-wide transition-all ${
                        estimateSystem === sysKey 
                          ? 'bg-white text-neutral-950 border-white font-bold' 
                          : 'bg-neutral-950/60 border-white/5 text-neutral-400 hover:bg-neutral-900/60 hover:text-white'
                      }`}
                    >
                      {sysKey === 'sliding-walls' && 'Sliding Walls'}
                      {sysKey === 'glass-facades' && 'Glass Facades'}
                      {sysKey === 'skylights' && 'Walk Skylights'}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-neutral-400 italic">
                  {systems[estimateSystem].description}
                </p>
              </div>

              {/* Step 2: Dimensions */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-semibold text-neutral-400">
                  <span>2. Define Surface Dimensions</span>
                  <span className="text-white">Total Area: {(width * height).toFixed(1)} m²</span>
                </div>
                
                {/* Width Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-500">Facade Width (m)</span>
                    <span className="font-mono text-white font-semibold">{width}m</span>
                  </div>
                  <input 
                    type="range" 
                    min="2.0" 
                    max="15.0" 
                    step="0.1" 
                    value={width} 
                    onChange={(e) => setWidth(parseFloat(e.target.value))}
                    className="w-full accent-white bg-neutral-800 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Height Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-500">Facade Height (m)</span>
                    <span className="font-mono text-white font-semibold">{height}m</span>
                  </div>
                  <input 
                    type="range" 
                    min="1.5" 
                    max="6.0" 
                    step="0.1" 
                    value={height} 
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                    className="w-full accent-white bg-neutral-800 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Step 3: Glass Chemical Treatment */}
              <div className="space-y-4">
                <span className="text-xs font-semibold text-neutral-400 block">
                  3. Select Optical Chemical Layering
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setGlassType('ultra-low-e')}
                    className={`p-3 rounded-lg text-left border text-xs transition-all flex flex-col space-y-1 ${
                      glassType === 'ultra-low-e' 
                        ? 'bg-white text-neutral-950 border-white' 
                        : 'bg-neutral-950/60 border-white/5 text-neutral-400 hover:bg-neutral-900/60'
                    }`}
                  >
                    <span className="font-semibold">AURA Pristine Low-E</span>
                    <span className={`text-[9px] ${glassType === 'ultra-low-e' ? 'text-neutral-700' : 'text-neutral-500'}`}>98% Clarity • Low-E Shield</span>
                  </button>
                  <button
                    onClick={() => setGlassType('standard-double')}
                    className={`p-3 rounded-lg text-left border text-xs transition-all flex flex-col space-y-1 ${
                      glassType === 'standard-double' 
                        ? 'bg-white text-neutral-950 border-white' 
                        : 'bg-neutral-950/60 border-white/5 text-neutral-400 hover:bg-neutral-900/60'
                    }`}
                  >
                    <span className="font-semibold">Standard Clear Double</span>
                    <span className={`text-[9px] ${glassType === 'standard-double' ? 'text-neutral-700' : 'text-neutral-500'}`}>84% Clarity • Passive Air</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Live Projected Metrics Screen */}
            <div className="lg:col-span-7 bg-neutral-900/60 border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col justify-between">
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">Live Calculations Report</span>
                  <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                    Optimal Fit Verified
                  </span>
                </div>

                {/* Isometric Structural Glass Representation */}
                <div className="relative w-full h-44 bg-neutral-950 rounded-xl overflow-hidden flex items-center justify-center border border-white/5 mb-8">
                  {/* Glass projection illustration */}
                  <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none"></div>
                  
                  {/* Dynamic Custom Drawing */}
                  <svg className="w-56 h-36" viewBox="0 0 200 120">
                    {/* Shadow profile */}
                    <polygon points="50,105 150,105 170,75 70,75" fill="#171717" />
                    
                    {/* Glass Pane 1 Front */}
                    <polygon 
                      points="40,85 140,85 160,55 60,55" 
                      fill="#0ea5e9" 
                      fillOpacity={glassType === 'ultra-low-e' ? '0.1' : '0.3'}
                      stroke="#38bdf8" 
                      strokeWidth="1.5" 
                    />

                    {/* Argon Spacer Ring */}
                    <polygon 
                      points="43,87 143,87 163,57 63,57" 
                      fill="none" 
                      stroke="#4b5563" 
                      strokeWidth="1" 
                      strokeDasharray="2,2"
                    />

                    {/* Glass Pane 2 Back */}
                    <polygon 
                      points="46,89 146,89 166,59 66,59" 
                      fill="#0ea5e9" 
                      fillOpacity={glassType === 'ultra-low-e' ? '0.05' : '0.2'} 
                      stroke="#0284c7" 
                      strokeWidth="1" 
                    />

                    {/* Arrow representing dimensions */}
                    <path d="M 40 95 L 140 95" fill="none" stroke="#6b7280" strokeWidth="1" markerStart="url(#miniArrow)" markerEnd="url(#miniArrow)" />
                    <text x="90" y="105" fill="#6b7280" fontSize="7" textAnchor="middle">{width}m Width</text>

                    <path d="M 32 85 L 52 55" fill="none" stroke="#6b7280" strokeWidth="1" markerStart="url(#miniArrow)" markerEnd="url(#miniArrow)" />
                    <text x="34" y="65" fill="#6b7280" fontSize="7" textAnchor="middle" transform="rotate(-30, 34, 65)">{height}m</text>

                    {/* Reflection details */}
                    <line x1="100" y1="35" x2="130" y2="75" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                  </svg>

                  <div className="absolute top-4 left-4 text-[10px] text-neutral-400">
                    Scale Representation (ISO Metric View)
                  </div>
                </div>

                {/* Projected Performance Panel */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  
                  <div className="bg-neutral-950 p-4 rounded-xl border border-white/5">
                    <span className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Overall U-Value</span>
                    <span className="text-2xl font-bold font-mono tracking-tight text-white">{calculatedUValue}</span>
                    <span className="block text-[9px] text-neutral-400 mt-1">W/m²K (Lower is better)</span>
                  </div>

                  <div className="bg-neutral-950 p-4 rounded-xl border border-white/5">
                    <span className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Clarity Rating</span>
                    <span className="text-2xl font-bold font-mono tracking-tight text-white">{calculatedTransmittance}%</span>
                    <span className="block text-[9px] text-neutral-400 mt-1">Pure color transmittance</span>
                  </div>

                  <div className="bg-neutral-950 p-4 rounded-xl border border-white/5">
                    <span className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Energy Saving</span>
                    <span className="text-2xl font-bold font-mono tracking-tight text-emerald-400">+{calculatedEnergySavings}%</span>
                    <span className="block text-[9px] text-neutral-400 mt-1">Vs single glazing</span>
                  </div>

                  <div className="bg-neutral-950 p-4 rounded-xl border border-white/5">
                    <span className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Acoustics</span>
                    <span className="text-2xl font-bold font-mono tracking-tight text-white">{calculatedAcousticRating}dB</span>
                    <span className="block text-[9px] text-neutral-400 mt-1">Ambient reduction index</span>
                  </div>

                </div>

              </div>

              {/* Consultation trigger action */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="block text-xs font-semibold text-white">Save Configuration Blueprint?</span>
                  <span className="text-[11px] text-neutral-400">We will auto-generate structural engineering specifications with your consultation.</span>
                </div>
                
                <button
                  onClick={() => {
                    setFormData({
                      ...formData,
                      message: `Interested in configuring ${systems[estimateSystem].name} for a custom project (${width}m x ${height}m, total area ${(width * height).toFixed(1)} sqm, using ${glassType === 'ultra-low-e' ? 'AURA Ultra-Low-E' : 'Standard Double Glazing'}).`
                    });
                    setShowConfigModal(true);
                  }}
                  className="bg-white text-neutral-950 hover:bg-neutral-200 transition-all font-semibold rounded-lg px-6 py-3 text-xs tracking-wide whitespace-nowrap"
                >
                  Send Configuration to Engineering Team
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Portfolio Projects Segment with Filter Category */}
      <section id="projects" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-500">CURATED PORTFOLIO</span>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mt-1">
                Completed Architectural Works
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex space-x-2 mt-4 md:mt-0">
              {['all', 'residential', 'commercial'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all ${
                    activeTab === category 
                      ? 'bg-white text-neutral-950 font-bold' 
                      : 'bg-neutral-900 text-neutral-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Project masonry layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col justify-end min-h-[450px]"
              >
                {/* Visual Imagery with parallax hover scale */}
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
                </div>

                {/* Floating spec tags */}
                <div className="absolute top-6 right-6 flex flex-col items-end space-y-2">
                  <span className="bg-neutral-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="p-8 relative z-10 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs text-neutral-400 font-mono flex items-center space-x-1">
                      <span>{project.location}</span>
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* Technical Spec List */}
                  <div className="border-t border-white/10 pt-4 grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-[9px] uppercase tracking-widest text-neutral-500">Surface Profile</span>
                      <span className="text-xs text-neutral-300 font-medium">{project.area}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase tracking-widest text-neutral-500">Technical Spec</span>
                      <span className="text-xs text-neutral-300 font-medium">{project.spec}</span>
                    </div>
                  </div>

                  {/* Dynamic Interactive Slideout Button */}
                  <div className="pt-2">
                    <button 
                      onClick={() => {
                        setFormData({
                          ...formData,
                          message: `Requesting case study information on: ${project.title} (${project.location}).`
                        });
                        setShowConfigModal(true);
                      }}
                      className="inline-flex items-center space-x-2 text-xs text-white border-b border-white/20 pb-1 hover:border-white transition-all group"
                    >
                      <span>Request Case Study Specs</span>
                      <Icons.ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Premium Multi-Channel Footer */}
      <footer className="bg-neutral-950 border-t border-white/5 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
            
            {/* Branding & Contact channels */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold tracking-wider font-display text-white">AURA</span>
                <span className="text-[10px] uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded-full text-neutral-300">SYSTEMS</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Elite glazing systems and architectural solutions engineered specifically for high-end residential, landmark developments, and complex minimal corner atriums.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs text-neutral-400">
                  <Icons.Mail />
                  <span>engineering@aura-glazing.com</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-neutral-400">
                  <Icons.Phone />
                  <span>+41 (22) 548 99 00</span>
                </div>
              </div>
            </div>

            {/* Quick Links Systems */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-6">Systems Catalog</h4>
              <ul className="space-y-3 text-xs text-neutral-400">
                <li><a href="#estimator" className="hover:text-white transition-colors">Sliding Pocket Walls</a></li>
                <li><a href="#estimator" className="hover:text-white transition-colors">Structural Facades</a></li>
                <li><a href="#estimator" className="hover:text-white transition-colors">Walk-on Skylights</a></li>
                <li><a href="#estimator" className="hover:text-white transition-colors">Frameless Corner Systems</a></li>
                <li><a href="#materials" className="hover:text-white transition-colors">Thermal Break Profiles</a></li>
              </ul>
            </div>

            {/* Materials Science details */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-6">Material Science</h4>
              <ul className="space-y-3 text-xs text-neutral-400">
                <li><a href="#materials" className="hover:text-white transition-colors">Low-E Double/Triple Glazing</a></li>
                <li><a href="#materials" className="hover:text-white transition-colors">Thermanized Tempered Safety</a></li>
                <li><a href="#materials" className="hover:text-white transition-colors">Acoustic PVB Interlayering</a></li>
                <li><a href="#materials" className="hover:text-white transition-colors">Aerospace Slimline Extrusion</a></li>
                <li><a href="#materials" className="hover:text-white transition-colors">Argon Micro-Cavity Sealants</a></li>
              </ul>
            </div>

            {/* Newsletter Subscription for Architects */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-6">Technical Architecture Digest</h4>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                Subscribe to receive structural calculations, custom CAD templates, and monthly minimalist glass innovation releases.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to technical blueprint release newsletters!'); }} className="flex">
                <input 
                  type="email" 
                  placeholder="architect@firm.com" 
                  required
                  className="bg-neutral-900 border border-white/10 rounded-l-lg px-3 py-2 text-xs focus:outline-none focus:border-white w-full"
                />
                <button 
                  type="submit" 
                  className="bg-white text-neutral-900 rounded-r-lg px-4 text-xs font-semibold hover:bg-neutral-200 transition-colors"
                >
                  Join
                </button>
              </form>
            </div>

          </div>

          {/* Social media footer channels */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
            <span>&copy; 2026 AURA Architectural Systems AG. All engineering specifications reserved.</span>
            
            <div className="flex space-x-6">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Structural Terms</a>
              <a href="#terms" className="hover:text-white transition-colors">Technical Index</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Interactive Floating Request CTA */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setShowConfigModal(true)}
          className="bg-white text-neutral-950 hover:bg-neutral-100 px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase shadow-2xl flex items-center space-x-2 group hover:scale-105 transition-all"
        >
          <span>Calculate Facade</span>
          <span className="bg-neutral-950 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold transition-transform group-hover:rotate-45">
            +
          </span>
        </button>
      </div>

      {/* Modern Multi-Step Premium Overlay Modal */}
      {showConfigModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden flex flex-col shadow-2xl">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
                  Exclusive Booking
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Request Structural Consultation
                </h3>
              </div>
              <button 
                onClick={() => setShowConfigModal(false)}
                className="text-neutral-400 hover:text-white text-sm bg-white/5 hover:bg-white/10 p-2 rounded-full"
              >
                ✕
              </button>
            </div>

            {/* Modal Form Step Progress */}
            <div className="bg-neutral-950 px-6 py-2 border-b border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
              <span className={consultationStep === 1 ? 'text-white font-bold' : ''}>1. Project Parameters</span>
              <span className="text-neutral-700">➔</span>
              <span className={consultationStep === 2 ? 'text-white font-bold' : ''}>2. Spatial Specifications</span>
            </div>

            {/* Form body */}
            <form onSubmit={handleFormSubmit} className="p-6 flex-grow space-y-4">
              
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Icons.Check />
                  </div>
                  <h4 className="text-lg font-bold text-white">Consultation Request Generated</h4>
                  <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                    Your parameters have been logged. An AURA Senior Structural Glass Engineer will reach out via email within 24 business hours to finalize project blueprints.
                  </p>
                </div>
              ) : (
                <>
                  {consultationStep === 1 ? (
                    <div className="space-y-4">
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-neutral-400 mb-1">Your Professional Role</label>
                          <select 
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="bg-neutral-950 text-white text-xs border border-white/10 rounded-lg p-2.5 w-full focus:outline-none focus:border-white"
                          >
                            <option>Architect</option>
                            <option>Custom Home Builder</option>
                            <option>Commercial Developer</option>
                            <option>Residential Owner</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-400 mb-1">Project Classification</label>
                          <select 
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="bg-neutral-950 text-white text-xs border border-white/10 rounded-lg p-2.5 w-full focus:outline-none focus:border-white"
                          >
                            <option>Residential</option>
                            <option>Commercial Tower</option>
                            <option>Educational/Institutional</option>
                            <option>Hospitality Resort</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-neutral-400 mb-1">Your Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Lord Foster"
                          className="bg-neutral-950 text-white text-xs border border-white/10 rounded-lg p-2.5 w-full focus:outline-none focus:border-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-neutral-400 mb-1">Email Coordinates</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="foster@architecturalpartners.com"
                          className="bg-neutral-950 text-white text-xs border border-white/10 rounded-lg p-2.5 w-full focus:outline-none focus:border-white"
                        />
                      </div>

                      <div className="pt-4 border-t border-white/5 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setConsultationStep(2)}
                          className="bg-white text-neutral-950 text-xs font-semibold rounded-lg px-6 py-2.5 transition-all"
                        >
                          Proceed to Step 2
                        </button>
                      </div>

                    </div>
                  ) : (
                    <div className="space-y-4">
                      
                      <div>
                        <label className="block text-xs text-neutral-400 mb-1">Project Site Location (City/Country)</label>
                        <input 
                          type="text" 
                          placeholder="Geneva, Switzerland"
                          className="bg-neutral-950 text-white text-xs border border-white/10 rounded-lg p-2.5 w-full focus:outline-none focus:border-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-neutral-400 mb-1">Technical Structural Request Details</label>
                        <textarea 
                          rows="4"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="State specialized design considerations like marine wind rating requirements, minimal framing corner details, flush drainage tracks, etc."
                          className="bg-neutral-950 text-white text-xs border border-white/10 rounded-lg p-2.5 w-full focus:outline-none focus:border-white"
                        ></textarea>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex justify-between">
                        <button
                          type="button"
                          onClick={() => setConsultationStep(1)}
                          className="bg-neutral-800 text-white text-xs font-semibold rounded-lg px-6 py-2.5 transition-all"
                        >
                          Back to Step 1
                        </button>
                        <button
                          type="submit"
                          className="bg-emerald-500 text-neutral-950 text-xs font-bold rounded-lg px-6 py-2.5 hover:bg-emerald-400 transition-all"
                        >
                          Submit Construction Brief
                        </button>
                      </div>

                    </div>
                  )}
                </>
              )}

            </form>

          </div>
        </div>
      )}

    </div>
  );
}