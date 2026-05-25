import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  Settings, 
  Wind, 
  Thermometer, 
  Droplet, 
  ShieldAlert, 
  User, 
  Cpu, 
  Compass, 
  Layers, 
  Activity, 
  ChevronRight, 
  Download, 
  RefreshCw, 
  QrCode, 
  Terminal,
  Zap,
  MapPin,
  Clock
} from 'lucide-react';

export default function App() {
  // Simulator State
  const [temp, setTemp] = useState(-63); // Mars average °C
  const [pressure, setPressure] = useState(0.006); // Mars average bar
  const [moisture, setMoisture] = useState(2); // % water vapor/ice
  const [magneticField, setMagneticField] = useState(10); // % of Earth's shield
  const [activeTab, setActiveTab] = useState('atmospheric');
  
  // Passenger / Ticket State
  const [passengerName, setPassengerName] = useState('ASTRID LINDBERGH');
  const [passengerRole, setPassengerRole] = useState('TERRAFORMING ENGINEER');
  const [colonySector, setColonySector] = useState('OLYMPUS PRIME');
  const [ticketGenerated, setTicketGenerated] = useState(true);

  // Interaction logs state
  const [logs, setLogs] = useState([
    'SYSTEM INITIALIZED: AERIS V2.6',
    'ORBITAL TRACKING STATUS: ACTIVE (8TH ORBIT)',
    'ATMOSPHERIC PRESSURE: CRITICAL [0.006 BAR]',
    'MAGNETIC SHIELD GENERATORS RUNNING AT 10% CAPACITY'
  ]);

  // Mouse coordinate tracker for technical atmosphere
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMouseCoords({
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top)
      });
    }
  };

  const addLog = (message) => {
    setLogs((prev) => [message, ...prev.slice(0, 4)]);
  };

  // Derived terraforming metrics
  const habitabilityScore = Math.min(
    100,
    Math.round(
      ((temp + 80) / 100) * 30 +
      (pressure * 100) * 40 +
      (moisture / 100) * 20 +
      (magneticField / 100) * 10
    )
  );

  const getPlanetStatus = () => {
    if (habitabilityScore < 15) return { label: 'CRITICAL ARID', color: 'text-red-500', bg: 'bg-red-500/10' };
    if (habitabilityScore < 45) return { label: 'SUSTAINED COOL', color: 'text-amber-500', bg: 'bg-amber-500/10' };
    if (habitabilityScore < 75) return { label: 'TRANSITIONAL BIO-ZONE', color: 'text-emerald-400', bg: 'bg-emerald-400/10' };
    return { label: 'HABITABLE PARADISE', color: 'text-cyan-400', bg: 'bg-cyan-400/10' };
  };

  // Handle simulation changes with logging
  const handleTempChange = (e) => {
    const newVal = parseInt(e.target.value);
    setTemp(newVal);
    if (newVal > 15 && temp <= 15) addLog('CRITICAL THRESHOLD: CO2 SUBLIMATION DETECTED');
    if (newVal > -10 && temp <= -10) addLog('WARNING: POLAR ICE CAP LIQUEFACTION DRIFT');
  };

  const handlePressureChange = (e) => {
    const newVal = parseFloat(e.target.value);
    setPressure(newVal);
    if (newVal > 0.4 && pressure <= 0.4) addLog('ATMOSPHERE DENSITY EXCEEDS RADIATION SAFETY CAP');
  };

  const handleMoistureChange = (e) => {
    const newVal = parseInt(e.target.value);
    setMoisture(newVal);
    if (newVal > 50 && moisture <= 50) addLog('PRECIPITATION CYCLE ACTIVATED: CLOUD DECK FORMED');
  };

  // Generate beautiful rust/terracotta/green planet styles based on state
  const getPlanetVisualStyles = () => {
    // Rust Base Color: #C85A32 (RGB: 200, 90, 50)
    // Blue Water: #1D4ED8 (RGB: 29, 78, 216)
    // Green Flora: #059669 (RGB: 5, 150, 105)
    
    const waterRatio = Math.min(100, moisture * 1.5) / 100;
    const floraRatio = Math.max(0, (temp + 20) / 50) * Math.min(1, waterRatio * 1.5);

    // Calculate dynamic color blend
    const r = Math.round(200 * (1 - waterRatio) * (1 - floraRatio) + 29 * waterRatio + 5 * floraRatio);
    const g = Math.round(90 * (1 - waterRatio) * (1 - floraRatio) + 78 * waterRatio + 150 * floraRatio);
    const b = Math.round(50 * (1 - waterRatio) * (1 - floraRatio) + 216 * waterRatio + 105 * floraRatio);

    return {
      planetColor: `rgb(${r}, ${g}, ${b})`,
      atmosphereGlow: `rgba(${r}, ${g}, ${b}, ${0.1 + (pressure * 0.4)})`,
      shadowIntensity: Math.max(20, 80 - habitabilityScore * 0.5)
    };
  };

  const planetStyle = getPlanetVisualStyles();

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#070708] text-[#F3F0EC] font-sans antialiased selection:bg-[#C64E32] selection:text-white relative overflow-x-hidden"
    >
      {/* Visual Grain & Tech Grid System */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#1e1e24_1px,transparent_1px)] [background-size:16px_16px] opacity-25 z-0" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C64E32]/30 to-transparent pointer-events-none" />

      {/* Floating Mouse Coordinates & Grid Alignments (Retro-technical Poster Detail) */}
      <div className="hidden lg:block fixed bottom-8 left-8 text-[10px] font-mono tracking-widest text-[#8F8F9B] z-50 pointer-events-none bg-[#070708]/80 px-2 py-1 border border-[#1E1F22]">
        SYS.LOC: X:{mouseCoords.x} Y:{mouseCoords.y} // LATENCY: 24ms // S.D: 687_DAYS
      </div>
      <div className="hidden lg:block fixed bottom-8 right-8 text-[10px] font-mono tracking-widest text-[#8F8F9B] z-50 pointer-events-none bg-[#070708]/80 px-2 py-1 border border-[#1E1F22]">
        DREAMWEAVER // EST. 2026 // ED_0925_M
      </div>

      {/* Crosshairs & Border Elements to mirror poster aesthetics */}
      <div className="absolute top-24 left-10 text-xs text-[#8F8F9B]/40 font-mono select-none pointer-events-none">+</div>
      <div className="absolute top-24 right-10 text-xs text-[#8F8F9B]/40 font-mono select-none pointer-events-none">+</div>
      <div className="absolute bottom-24 left-10 text-xs text-[#8F8F9B]/40 font-mono select-none pointer-events-none">+</div>
      <div className="absolute bottom-24 right-10 text-xs text-[#8F8F9B]/40 font-mono select-none pointer-events-none">+</div>

      {/* HEADER SECTION */}
      <header className="border-b border-[#1E1F22] sticky top-0 bg-[#070708]/90 backdrop-blur-md z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#C64E32] animate-pulse" />
              <span className="font-mono text-xs tracking-[0.3em] font-black text-white">AERIS // PROJECT RED</span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-[11px] font-mono text-[#8F8F9B] border-l border-[#1E1F22] pl-6">
              <span>ORBIT: 8TH</span>
              <span className="text-[#C64E32]">•</span>
              <span>CO2, N2, AR</span>
              <span className="text-[#C64E32]">•</span>
              <span>TERRESTRIAL STATUS: ACTIVE</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs bg-[#1E1F22] border border-[#2E3035] px-3 py-1 text-emerald-400 font-mono rounded flex items-center gap-1.5">
              <Activity className="w-3 h-3 animate-pulse" /> SYSTEM HEALTH: NOMINAL
            </span>
          </div>
        </div>
      </header>

      {/* HERO / BRUTALIST INTRO SECTION */}
      <section className="relative pt-12 pb-20 border-b border-[#1E1F22] z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: Large Editorial Typography (Inspired by vertical MARS on poster) */}
            <div className="lg:col-span-4 flex flex-col md:flex-row lg:flex-col gap-6 items-start">
              <div className="flex flex-row lg:flex-col gap-1 select-none pointer-events-none">
                <h1 className="text-[12vw] lg:text-[7.5rem] leading-[0.8] font-black tracking-tighter text-[#E35D3B] font-sans flex flex-row lg:flex-col gap-0">
                  <span>M</span>
                  <span>A</span>
                  <span>R</span>
                  <span>S</span>
                </h1>
                <div className="hidden lg:flex items-center gap-2 text-[#8F8F9B] font-mono text-xs mt-4 tracking-[0.2em]">
                  <Compass className="w-4 h-4 text-[#C64E32]" />
                  <span>8TH ORBITAL SEQUENCE</span>
                </div>
              </div>

              {/* Poster Intro Texts recreated with high interactive aesthetic */}
              <div className="flex-1 mt-0 lg:mt-8 space-y-6">
                <div className="border-t border-[#C64E32] pt-4">
                  <p className="text-xs font-mono text-[#8F8F9B] uppercase tracking-wider mb-2">TRANSITIONAL MANIFESTO</p>
                  <p className="text-sm text-[#D3D1CD] leading-relaxed font-sans font-light">
                    The crimson wanderer stands as a frozen echo of what might have been. A world once wet, now dry and dreaming. Its rust-colored plains stretch endlessly, waiting to be reactivated by human ingenuity.
                  </p>
                </div>

                <div className="p-4 bg-[#121214] border border-[#1E1F22] relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-[#C64E32]" />
                  <p className="text-xs font-mono text-[#8F8F9B] mb-2 uppercase tracking-widest flex items-center justify-between">
                    <span>GLOBAL STATUS REPORT</span>
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                  </p>
                  <div className="space-y-1 text-xs font-mono text-[#D3D1CD]">
                    <div className="flex justify-between"><span>CO2 LEVEL:</span> <span className="text-white">95.3%</span></div>
                    <div className="flex justify-between"><span>AVERAGE TEMP:</span> <span className="text-white">{temp}°C</span></div>
                    <div className="flex justify-between"><span>ATM. PRESSURE:</span> <span className="text-white">{pressure} BAR</span></div>
                    <div className="flex justify-between"><span>HABITABILITY:</span> <span className={`${getPlanetStatus().color}`}>{habitabilityScore}% ({getPlanetStatus().label})</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive 3D Orbit & Planetary Simulation Canvas */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Interactive Core Simulator Showcase */}
              <div className="bg-[#121214] border border-[#1E1F22] rounded-lg overflow-hidden relative">
                {/* Vintage Radar lines/crosshairs */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-[#8F8F9B]/60 tracking-wider">
                  TEL.01 // SPATIAL_PROJECTION
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[9px] text-[#8F8F9B] tracking-widest uppercase">REAL-TIME SIMULATION</span>
                </div>

                <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  
                  {/* Planet Visual Generator Component */}
                  <div className="flex flex-col items-center justify-center relative">
                    
                    {/* Atmospheric Glow Circle */}
                    <div 
                      className="absolute rounded-full transition-all duration-700 blur-[30px]"
                      style={{
                        width: '280px',
                        height: '280px',
                        backgroundColor: planetStyle.atmosphereGlow,
                      }}
                    />

                    {/* Orbital Rings overlay (SVG-like visual) */}
                    <div className="absolute w-[320px] h-[120px] border border-[#8F8F9B]/10 rounded-full rotate-[-15deg] pointer-events-none flex items-center justify-between">
                      <div className="w-1 h-1 bg-white/30 rounded-full ml-10 animate-ping" />
                      <div className="w-1.5 h-1.5 bg-[#C64E32] rounded-full mr-20" />
                    </div>

                    {/* Custom Styled Dynamic Planet sphere */}
                    <div 
                      className="w-56 h-56 rounded-full relative overflow-hidden shadow-2xl transition-all duration-700 border border-white/5"
                      style={{
                        backgroundColor: planetStyle.planetColor,
                        boxShadow: `inset -${planetStyle.shadowIntensity}px -${planetStyle.shadowIntensity}px 90px rgba(0,0,0,0.9), 0 0 40px ${planetStyle.atmosphereGlow}`,
                      }}
                    >
                      {/* Procedural Texture Overlay imitating Martian crust craters */}
                      <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-noise" style={{ backgroundImage: `radial-gradient(circle, #000 10%, transparent 11%), radial-gradient(circle, #fff 5%, transparent 6%)`, backgroundSize: '40px 40px' }} />
                      <div className="absolute inset-0 opacity-30 mix-blend-color-burn" style={{ backgroundImage: `radial-gradient(circle, #000 30%, transparent 50%)`, backgroundSize: '80px 80px', backgroundPosition: '20px 30px' }} />
                      
                      {/* Water/Flora growth overlay blocks */}
                      <div 
                        className="absolute inset-0 bg-[#1D4ED8]/60 blur-md transition-all duration-700 mix-blend-screen"
                        style={{ 
                          opacity: moisture / 100,
                          clipPath: 'circle(40% at 30% 40%)'
                        }} 
                      />
                      <div 
                        className="absolute inset-0 bg-[#059669]/60 blur-md transition-all duration-700 mix-blend-lighten"
                        style={{ 
                          opacity: Math.max(0, (temp + 30) / 80) * (moisture / 100),
                          clipPath: 'circle(50% at 45% 55%)'
                        }} 
                      />
                    </div>

                    {/* Technical details printed under planet */}
                    <div className="mt-6 text-center space-y-1 z-10">
                      <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white">TERRAFORMING VECTOR PROGRESS</p>
                      <p className="font-mono text-[10px] text-[#8F8F9B]">
                        ATMOSPHERIC CORE: <span className="text-[#E35D3B]">{getPlanetStatus().label}</span>
                      </p>
                    </div>
                  </div>

                  {/* Simulator Controls & Metric Sliders */}
                  <div className="space-y-6">
                    <div className="border-b border-[#1E1F22] pb-4">
                      <h3 className="font-mono text-xs uppercase tracking-wider text-[#E35D3B] flex items-center gap-2">
                        <Settings className="w-4 h-4" /> BIOSPHERE REACTION PANEL
                      </h3>
                      <p className="text-[11px] text-[#8F8F9B] mt-1">Adjust target variables to mutate planetary ecosystem parameters.</p>
                    </div>

                    {/* Temperature Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="flex items-center gap-1 text-[#8F8F9B]"><Thermometer className="w-3.5 h-3.5" /> TEMP RANGE</span>
                        <span className="text-white">{temp}°C</span>
                      </div>
                      <input 
                        type="range" 
                        min="-120" 
                        max="30" 
                        value={temp} 
                        onChange={handleTempChange}
                        className="w-full accent-[#C64E32] bg-[#1E1F22] h-1 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] font-mono text-[#8F8F9B]/60">
                        <span>-120°C (DEEP GLACIAL)</span>
                        <span>30°C (TROPICAL EARTH)</span>
                      </div>
                    </div>

                    {/* Atmospheric Pressure Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="flex items-center gap-1 text-[#8F8F9B]"><Wind className="w-3.5 h-3.5" /> ATM. PRESSURE</span>
                        <span className="text-white">{pressure.toFixed(3)} BAR</span>
                      </div>
                      <input 
                        type="range" 
                        min="0.006" 
                        max="1.500" 
                        step="0.01"
                        value={pressure} 
                        onChange={handlePressureChange}
                        className="w-full accent-[#C64E32] bg-[#1E1F22] h-1 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] font-mono text-[#8F8F9B]/60">
                        <span>0.006 BAR (MARS BASE)</span>
                        <span>1.5 BAR (DENSE ATMOSPHERE)</span>
                      </div>
                    </div>

                    {/* Moisture Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="flex items-center gap-1 text-[#8F8F9B]"><Droplet className="w-3.5 h-3.5" /> GLOBAL WATER LEVEL</span>
                        <span className="text-white">{moisture}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={moisture} 
                        onChange={handleMoistureChange}
                        className="w-full accent-[#C64E32] bg-[#1E1F22] h-1 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] font-mono text-[#8F8F9B]/60">
                        <span>0% (ARID SANDS)</span>
                        <span>100% (OCEAN DECK)</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button 
                        onClick={() => {
                          setTemp(-63);
                          setPressure(0.006);
                          setMoisture(2);
                          setMagneticField(10);
                          addLog('SIMULATOR DEFAULTS RESTORED');
                        }}
                        className="w-full py-2 bg-[#1E1F22] hover:bg-[#2A2B30] border border-[#2E3035] text-xs font-mono text-[#F3F0EC] transition-all flex items-center justify-center gap-2 uppercase tracking-widest rounded"
                      >
                        <RefreshCw className="w-3.5 h-3.5" /> RESET VIRTUAL BIOME
                      </button>
                    </div>

                  </div>
                </div>

                {/* Simulated Live Console logs output */}
                <div className="bg-[#0A0A0B] border-t border-[#1E1F22] px-6 py-4 font-mono text-xs text-[#8F8F9B] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#C64E32]" />
                    <span className="font-bold text-[#E35D3B]">LOGSTREAM:</span>
                    <span className="text-white truncate max-w-xs md:max-w-md">{logs[0]}</span>
                  </div>
                  <div className="flex gap-2">
                    {logs.slice(1, 3).map((log, index) => (
                      <span key={index} className="hidden lg:inline-block px-2 py-0.5 bg-[#121214] border border-[#1E1F22] text-[10px] text-[#8F8F9B] truncate max-w-[180px]">
                        {log}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* TECH SPECS BENTO GRID (Atmospheric, Telemetry, and Scientific Systems) */}
      <section className="py-20 border-b border-[#1E1F22] bg-[#0A0A0B] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#C64E32] mb-2">SYSTEM PARAMETRIC ARCHIVE</p>
              <h2 className="text-3xl font-black tracking-tight text-white uppercase">TERRESTRIAL MATRIX</h2>
            </div>
            <div className="flex border border-[#1E1F22] p-1 bg-[#121214] rounded">
              {['atmospheric', 'telemetry', 'hardware'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-all rounded ${
                    activeTab === tab 
                      ? 'bg-[#C64E32] text-white' 
                      : 'text-[#8F8F9B] hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Conditional Bento Modules */}
          {activeTab === 'atmospheric' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: CO2 Extraction Progress */}
              <div className="bg-[#121214] border border-[#1E1F22] p-6 rounded-lg flex flex-col justify-between hover:border-[#C64E32]/40 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="p-2 bg-[#1E1F22] text-[#E35D3B] rounded"><Wind className="w-5 h-5" /></span>
                  <span className="font-mono text-[10px] text-[#8F8F9B]">SYS.0982 // ATM</span>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[#8F8F9B] uppercase tracking-wider mb-1">CO2 CONVERSION RATE</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold font-mono tracking-tight text-white">41.2%</span>
                    <span className="text-xs text-emerald-400 font-mono">+1.4% / yr</span>
                  </div>
                  <div className="w-full bg-[#1E1F22] h-1.5 mt-4 rounded overflow-hidden">
                    <div className="bg-[#C64E32] h-full" style={{ width: '41.2%' }} />
                  </div>
                </div>
              </div>

              {/* Card 2: Greenhouse gas activation */}
              <div className="bg-[#121214] border border-[#1E1F22] p-6 rounded-lg flex flex-col justify-between hover:border-[#C64E32]/40 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="p-2 bg-[#1E1F22] text-cyan-400 rounded"><Thermometer className="w-5 h-5" /></span>
                  <span className="font-mono text-[10px] text-[#8F8F9B]">SYS.0451 // GHG</span>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[#8F8F9B] uppercase tracking-wider mb-1">METHANE CONCENTRATION</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold font-mono tracking-tight text-white">0.024</span>
                    <span className="text-xs text-cyan-400 font-mono">PPM OPTIMAL</span>
                  </div>
                  <div className="w-full bg-[#1E1F22] h-1.5 mt-4 rounded overflow-hidden">
                    <div className="bg-cyan-500 h-full" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>

              {/* Card 3: O2 Generation Target */}
              <div className="bg-[#121214] border border-[#1E1F22] p-6 rounded-lg flex flex-col justify-between hover:border-[#C64E32]/40 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="p-2 bg-[#1E1F22] text-emerald-400 rounded"><Activity className="w-5 h-5" /></span>
                  <span className="font-mono text-[10px] text-[#8F8F9B]">SYS.1198 // OXY</span>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[#8F8F9B] uppercase tracking-wider mb-1">OXYGEN COMPOSITION</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold font-mono tracking-tight text-white">12.8%</span>
                    <span className="text-xs text-amber-500 font-mono">CRITICAL MIN</span>
                  </div>
                  <div className="w-full bg-[#1E1F22] h-1.5 mt-4 rounded overflow-hidden">
                    <div className="bg-emerald-400 h-full" style={{ width: '12.8%' }} />
                  </div>
                </div>
              </div>

              {/* Card 4: Global Albedo index */}
              <div className="bg-[#121214] border border-[#1E1F22] p-6 rounded-lg flex flex-col justify-between hover:border-[#C64E32]/40 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="p-2 bg-[#1E1F22] text-purple-400 rounded"><Layers className="w-5 h-5" /></span>
                  <span className="font-mono text-[10px] text-[#8F8F9B]">SYS.2033 // ALB</span>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[#8F8F9B] uppercase tracking-wider mb-1">PLANETARY ALBEDO INDEX</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold font-mono tracking-tight text-white">0.250</span>
                    <span className="text-xs text-[#8F8F9B] font-mono">TARGET 0.160</span>
                  </div>
                  <div className="w-full bg-[#1E1F22] h-1.5 mt-4 rounded overflow-hidden">
                    <div className="bg-purple-400 h-full" style={{ width: '78%' }} />
                  </div>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'telemetry' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Telemetry 1: Distance to Earth */}
              <div className="bg-[#121214] border border-[#1E1F22] p-6 rounded-lg">
                <p className="font-mono text-[10px] text-[#C64E32] mb-1">ORBITAL METRIC // DISTANCE</p>
                <h3 className="text-2xl font-bold font-mono tracking-tight text-white">225,300,000 KM</h3>
                <p className="text-xs text-[#8F8F9B] mt-2 leading-relaxed">Currently at closest approach (Opposition), facilitating rapid transit operations and high-bandwidth direct line communications.</p>
              </div>

              {/* Telemetry 2: Sol Rotation Tracking */}
              <div className="bg-[#121214] border border-[#1E1F22] p-6 rounded-lg">
                <p className="font-mono text-[10px] text-[#C64E32] mb-1">CHRONOMETRIC RATIO // DAYCYCLE</p>
                <h3 className="text-2xl font-bold font-mono tracking-tight text-white">1 SOL = 24H 39M 35S</h3>
                <p className="text-xs text-[#8F8F9B] mt-2 leading-relaxed">Elysium Standard Time system adjusted globally across colony hubs. Sub-Sol orbital tracking synchronicity set to +39 minutes daily drift.</p>
              </div>

              {/* Telemetry 3: Gravity Constant */}
              <div className="bg-[#121214] border border-[#1E1F22] p-6 rounded-lg">
                <p className="font-mono text-[10px] text-[#C64E32] mb-1">PHYSICAL ATTRIBUTES // GRAVITY</p>
                <h3 className="text-2xl font-bold font-mono tracking-tight text-white">0.375 G // 3.72 M/S²</h3>
                <p className="text-xs text-[#8F8F9B] mt-2 leading-relaxed">Musculoskeletal therapy vectors and localized load-compression facilities running at full capacity to prevent crew density decay.</p>
              </div>

            </div>
          )}

          {activeTab === 'hardware' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Hardware 1: Solar Magnetic Mirror array */}
              <div className="bg-[#121214] border border-[#1E1F22] p-6 rounded-lg flex gap-4">
                <span className="p-3 bg-red-500/10 text-[#C64E32] rounded self-start"><Zap className="w-6 h-6" /></span>
                <div>
                  <h4 className="font-mono text-sm text-white mb-1">SOLAR MAGNETIC REFLECTORS</h4>
                  <p className="text-xs text-[#8F8F9B] leading-relaxed">Five mirror satellites positioned in Lagrange L1 orbit to create an artificial magnetosphere. Deflects devastating solar winds away from the atmospheric canopy.</p>
                </div>
              </div>

              {/* Hardware 2: Sub-surface Thermoregulation drills */}
              <div className="bg-[#121214] border border-[#1E1F22] p-6 rounded-lg flex gap-4">
                <span className="p-3 bg-cyan-500/10 text-cyan-400 rounded self-start"><Cpu className="w-6 h-6" /></span>
                <div>
                  <h4 className="font-mono text-sm text-white mb-1">THERMAL DRILLING GRID</h4>
                  <p className="text-xs text-[#8F8F9B] leading-relaxed">Superdeep geothermal heat conduits accessing warm subterranean core chambers. Instigates volcanic venting vectors and deep crustal gas expansion.</p>
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      {/* TICKET BUILDER SECTION (STELLAR PASS GENERATOR) */}
      <section className="py-20 relative border-b border-[#1E1F22]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs text-[#C64E32] uppercase tracking-[0.2em] border-l-2 border-[#C64E32] pl-3 block">CHOOSE YOUR DESTINATION</span>
              <h2 className="text-4xl font-black text-white tracking-tight uppercase leading-none">
                SECURE YOUR <br /><span className="text-[#E35D3B]">STELLAR PASSAGE</span>
              </h2>
              <p className="text-sm text-[#8F8F9B] leading-relaxed">
                Be a part of the greatest migration in modern history. Personalize your colonization manifest boarding pass and print/export your digital trans-orbital authorization token.
              </p>

              {/* Form Input fields */}
              <div className="space-y-4 pt-4">
                <div>
                  <label className="block text-[10px] font-mono text-[#8F8F9B] uppercase tracking-widest mb-1.5">PASSENGER NAME</label>
                  <input 
                    type="text" 
                    value={passengerName} 
                    onChange={(e) => setPassengerName(e.target.value.toUpperCase())}
                    maxLength={30}
                    className="w-full bg-[#121214] border border-[#1E1F22] focus:border-[#C64E32] text-white px-4 py-2.5 font-mono text-xs rounded transition-all focus:outline-none"
                    placeholder="ENTER FULL NAME"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-[#8F8F9B] uppercase tracking-widest mb-1.5">ASSIGNED ROLE</label>
                    <select 
                      value={passengerRole}
                      onChange={(e) => setPassengerRole(e.target.value)}
                      className="w-full bg-[#121214] border border-[#1E1F22] focus:border-[#C64E32] text-white px-3 py-2.5 font-mono text-xs rounded transition-all focus:outline-none cursor-pointer"
                    >
                      <option value="TERRAFORMING ENGINEER">TERRAFORMING ENGINEER</option>
                      <option value="ASTROBOTANIST">ASTROBOTANIST</option>
                      <option value="GRAVITY THERAPIST">GRAVITY THERAPIST</option>
                      <option value="ORBITAL MECHANIC">ORBITAL MECHANIC</option>
                      <option value="BIOSPHERE ARCHITECT">BIOSPHERE ARCHITECT</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-[#8F8F9B] uppercase tracking-widest mb-1.5">TARGET COLONY</label>
                    <select 
                      value={colonySector}
                      onChange={(e) => setColonySector(e.target.value)}
                      className="w-full bg-[#121214] border border-[#1E1F22] focus:border-[#C64E32] text-white px-3 py-2.5 font-mono text-xs rounded transition-all focus:outline-none cursor-pointer"
                    >
                      <option value="OLYMPUS PRIME">OLYMPUS PRIME</option>
                      <option value="HELLAS PLANITIA">HELLAS PLANITIA</option>
                      <option value="VALLES MARINERIS">VALLES MARINERIS</option>
                      <option value="ELYSIUM HILLS">ELYSIUM HILLS</option>
                    </select>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setTicketGenerated(true);
                    addLog(`PASSENGER TOKEN GENERATED FOR ${passengerName}`);
                  }}
                  className="w-full py-3 bg-[#C64E32] hover:bg-[#E35D3B] text-white font-mono text-xs font-bold uppercase tracking-widest transition-all rounded flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" /> RE-COMPILE BOARDING PASS
                </button>
              </div>
            </div>

            {/* Right Side: Visual BOARDING TICKET styled after the poster metadata block */}
            <div className="lg:col-span-7 flex justify-center">
              {ticketGenerated && (
                <div className="w-full max-w-xl bg-[#F4F3EF] text-[#070708] p-6 rounded-lg relative overflow-hidden shadow-[0_0_40px_rgba(244,243,239,0.05)] border border-white/10 group">
                  
                  {/* Subtle retro overlay pattern on paper */}
                  <div className="absolute inset-0 bg-[radial-gradient(#d4d2cc_1px,transparent_1px)] [background-size:12px_12px] opacity-40 pointer-events-none" />

                  {/* Red/Black header stripes */}
                  <div className="flex justify-between items-start border-b border-[#070708] pb-4 mb-6 relative">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#C64E32] font-black">STELLAR MASS EXPLORATION PROGRAM</span>
                      <h3 className="text-xl font-black font-mono tracking-tight text-[#070708]">BOARDING AUTHTOKEN</h3>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[9px] block text-[#8F8F9B]">CLASS-09</span>
                      <span className="font-mono text-xs font-bold text-red-600">AERIS.ST-26</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
                    
                    {/* Left details grid */}
                    <div className="md:col-span-8 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-gray-500 uppercase block">PASSENGER CLASS</span>
                          <span className="text-sm font-bold font-mono tracking-wide text-gray-900 truncate block">{passengerName || 'ASTRID LINDBERGH'}</span>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-gray-500 uppercase block">MISSION PROFILE</span>
                          <span className="text-sm font-bold font-mono tracking-wide text-gray-900 truncate block">{passengerRole}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-gray-500 uppercase block">TARGET COLONY SECTOR</span>
                          <span className="text-sm font-bold font-mono tracking-wide text-[#C64E32] block">{colonySector}</span>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-gray-500 uppercase block">DEPARTURE SOL</span>
                          <span className="text-sm font-bold font-mono tracking-wide text-gray-900 block">SOL 412_2026</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-dashed border-gray-300">
                        <div className="flex justify-between text-[10px] font-mono text-gray-600">
                          <span>TRANSIT DECK: O-BETA</span>
                          <span>MASS CAPACITY: 410KG</span>
                        </div>
                        <p className="text-[9px] text-gray-500 leading-tight mt-1">
                          Authorization token matches Stellar Boarding directives. Subjected to pre-transit quarantine vectors as standard under Earth-Mars Treaty protocols.
                        </p>
                      </div>
                    </div>

                    {/* Right vertical barcode and technical details mimicking upper right of poster */}
                    <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-gray-300 pt-6 md:pt-0 md:pl-6 flex flex-col justify-between items-center md:items-end">
                      
                      {/* Technical barcode block */}
                      <div className="w-full flex flex-col items-center md:items-end gap-1">
                        <span className="font-mono text-[9px] text-gray-500 uppercase">SYS_INDEX</span>
                        
                        {/* Fake barcode bars */}
                        <div className="flex h-10 w-32 bg-[#070708] p-0.5 gap-[2px] overflow-hidden items-stretch">
                          <div className="w-[1px] bg-white" />
                          <div className="w-[3px] bg-white" />
                          <div className="w-[1px] bg-white" />
                          <div className="w-[2px] bg-white" />
                          <div className="w-[4px] bg-white" />
                          <div className="w-[1px] bg-white" />
                          <div className="w-[1px] bg-white" />
                          <div className="w-[3px] bg-white" />
                          <div className="w-[2px] bg-white" />
                          <div className="w-[1px] bg-white" />
                          <div className="w-[4px] bg-white" />
                          <div className="w-[1px] bg-white" />
                          <div className="w-[1px] bg-white" />
                          <div className="w-[3px] bg-white" />
                          <div className="w-[2px] bg-white" />
                          <div className="w-[1px] bg-white" />
                        </div>
                        <span className="font-mono text-[8px] tracking-widest text-gray-700">#AERIS_SOL_925_M</span>
                      </div>

                      {/* Small QR mockup or logo block */}
                      <div className="mt-6 flex items-center gap-3">
                        <div className="p-1 bg-white border border-gray-300">
                          <QrCode className="w-10 h-10 text-gray-900" />
                        </div>
                        <div className="text-left font-mono text-[8px] text-gray-600">
                          <span>SCAN AT SECTOR GATE</span>
                          <span className="block font-bold text-gray-900">VERIFICATION ON</span>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Decorative stamp reminiscent of vintage layouts */}
                  <div className="absolute right-4 bottom-20 opacity-10 font-sans font-black text-6xl text-red-700 rotate-[-12deg] pointer-events-none uppercase">
                    APPROVED
                  </div>

                  {/* Fine Print Footer inside Ticket */}
                  <div className="mt-8 pt-4 border-t border-[#070708]/30 flex justify-between items-center text-[8px] font-mono text-gray-500">
                    <span>AERIS COLONIZATION AUTHORITY // SECTOR 10</span>
                    <span>ISSUED UNDER THE CODES OF RECONSTRUCTION</span>
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED INTERACTIVE FAQ / TERMINAL BOARD SECTION */}
      <section className="py-20 bg-[#070708]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Column 1: Core Target Vectors */}
            <div className="space-y-4">
              <div className="p-3 bg-[#121214] border border-[#1E1F22] rounded inline-block text-[#C64E32]">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-mono uppercase text-white tracking-wide">01 // TARGET PLANET STATUS</h3>
              <p className="text-sm text-[#8F8F9B] leading-relaxed">
                Mars orbits at approximately 1.52 Astronomical Units (AU) with a stellar year stretching 687 terrestrial days. Terraforming parameters are strictly measured to preserve geothermal balance while accelerating atmospheric densification.
              </p>
            </div>

            {/* Column 2: Environmental Balance */}
            <div className="space-y-4">
              <div className="p-3 bg-[#121214] border border-[#1E1F22] rounded inline-block text-cyan-400">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-mono uppercase text-white tracking-wide">02 // CHEMICAL STABILIZATION</h3>
              <p className="text-sm text-[#8F8F9B] leading-relaxed">
                Reconstituting the core atmosphere involves sublimation of the southern polar ice caps. CO2 releases act as a primary heating blanket, allowing water vapor to persist and form initial cloud layers.
              </p>
            </div>

            {/* Column 3: Radiation Shields */}
            <div className="space-y-4">
              <div className="p-3 bg-[#121214] border border-[#1E1F22] rounded inline-block text-emerald-400">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-mono uppercase text-white tracking-wide">03 // DEFENSIVE SHIELDING</h3>
              <p className="text-sm text-[#8F8F9B] leading-relaxed">
                Due to the lack of an active magnetic core, high-intensity artificial magnetosphere satellites deflect ionic radiation streams, ensuring safety for surface agricultural colonies.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SCIENTIFIC COLONY SHOWCASE / INTERACTIVE CAROUSEL */}
      <section className="py-20 border-t border-[#1E1F22] bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="font-mono text-xs text-[#C64E32] uppercase tracking-[0.2em]">GLOBAL METROPOLIS BLUEPRINT</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mt-1">ESTABLISHED BASE SECTORS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Base 1 */}
            <div className="bg-[#121214] border border-[#1E1F22] rounded-lg overflow-hidden group hover:border-[#C64E32]/50 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#C64E32]/20 to-[#070708] relative flex items-center justify-center p-6 border-b border-[#1E1F22]">
                <span className="absolute top-4 left-4 font-mono text-[9px] text-[#8F8F9B] uppercase">SECTOR 01 // ADMIN</span>
                <span className="font-mono text-5xl font-black text-[#E35D3B]/20">01</span>
                <div className="absolute bottom-4 left-4 flex gap-1">
                  <span className="px-2 py-0.5 bg-[#1E1F22] text-[9px] font-mono text-emerald-400">POPULATED</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="font-mono text-sm text-white font-bold uppercase">OLYMPUS ALPHA HUB</h4>
                <p className="text-xs text-[#8F8F9B] leading-relaxed">
                  Positioned at the base of Olympus Mons to maximize shield insulation against seasonal wind currents. Serves as the principal scientific gateway.
                </p>
              </div>
            </div>

            {/* Base 2 */}
            <div className="bg-[#121214] border border-[#1E1F22] rounded-lg overflow-hidden group hover:border-[#C64E32]/50 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-cyan-900/20 to-[#070708] relative flex items-center justify-center p-6 border-b border-[#1E1F22]">
                <span className="absolute top-4 left-4 font-mono text-[9px] text-[#8F8F9B] uppercase">SECTOR 02 // HYDRO</span>
                <span className="font-mono text-5xl font-black text-cyan-500/10">02</span>
                <div className="absolute bottom-4 left-4 flex gap-1">
                  <span className="px-2 py-0.5 bg-[#1E1F22] text-[9px] font-mono text-cyan-400">ICE DOCKS</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="font-mono text-sm text-white font-bold uppercase">VALLES THERMA ZONE</h4>
                <p className="text-xs text-[#8F8F9B] leading-relaxed">
                  Occupies deep sub-surface canyons to safely capture running glacial discharge and direct vapor injection channels into the atmosphere.
                </p>
              </div>
            </div>

            {/* Base 3 */}
            <div className="bg-[#121214] border border-[#1E1F22] rounded-lg overflow-hidden group hover:border-[#C64E32]/50 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-emerald-900/20 to-[#070708] relative flex items-center justify-center p-6 border-b border-[#1E1F22]">
                <span className="absolute top-4 left-4 font-mono text-[9px] text-[#8F8F9B] uppercase">SECTOR 03 // AGRI</span>
                <span className="font-mono text-5xl font-black text-emerald-500/10">03</span>
                <div className="absolute bottom-4 left-4 flex gap-1">
                  <span className="px-2 py-0.5 bg-[#1E1F22] text-[9px] font-mono text-purple-400">ATMOSPHERIC GRID</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="font-mono text-sm text-white font-bold uppercase">HELLAS BIOME FIELD</h4>
                <p className="text-xs text-[#8F8F9B] leading-relaxed">
                  Deep impact crater with high natural atmospheric density, facilitating the growth of modified cyanobacteria matrices.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNICAL FOOTER */}
      <footer className="bg-[#070708] border-t border-[#1E1F22] py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            
            {/* Branding Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#C64E32]" />
                <span className="font-mono text-xs tracking-[0.3em] font-black text-white">AERIS // PROJECT RED</span>
              </div>
              <p className="text-xs text-[#8F8F9B] leading-relaxed max-w-sm">
                A modular terraforming and orbital colonization landing suite developed to facilitate structural trans-migration vectors under global space exploration commissions.
              </p>
              <div className="flex gap-4 text-xs font-mono text-[#C64E32]">
                <span className="hover:text-white cursor-pointer">S_MISSION</span>
                <span>/</span>
                <span className="hover:text-white cursor-pointer">S_Blueprints</span>
                <span>/</span>
                <span className="hover:text-white cursor-pointer">E_Gate_Pass</span>
              </div>
            </div>

            {/* Quick Tech metadata lists mimicking poster specs */}
            <div className="md:col-span-3 space-y-2">
              <p className="font-mono text-[10px] text-[#C64E32] uppercase tracking-widest font-bold">ATMOSPHERE MATRIX</p>
              <ul className="space-y-1 font-mono text-[10px] text-[#8F8F9B]">
                <li>• CO2: 95.3% PRIMARY STAGE</li>
                <li>• NITROGEN: 2.7% BUFFER STAGE</li>
                <li>• ARGON: 1.6% TRACE STAGE</li>
                <li>• HYDROGEN-THERMAL DECAY: NOMINAL</li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-2">
              <p className="font-mono text-[10px] text-[#C64E32] uppercase tracking-widest font-bold">SYSTEM PARAMETRIC CODES</p>
              <p className="font-mono text-[10px] text-[#8F8F9B] leading-relaxed">
                AERIS-V2 // DEC-2026-DREAMWEAVER <br />
                All systemic logs are simulated real-time telemetry inputs on user interaction. Core systems comply with global colonist directives.
              </p>
            </div>

          </div>

          <div className="border-t border-[#1E1F22] pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono text-[#8F8F9B] gap-4">
            <div className="flex gap-6">
              <span>© 2026 DESIGNED BY DREAMWEAVER | ALL RIGHTS RESERVED</span>
              <span className="hidden lg:inline">•</span>
              <span className="hidden lg:inline">COORDINATES: L-1 ROT_SEQ_009</span>
            </div>
            <div className="flex gap-1.5 items-center">
              <Clock className="w-3.5 h-3.5 text-[#C64E32]" />
              <span>UTC CHRONOMETER STATUS: 11:42:00 SOL_0</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}