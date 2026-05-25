import React, { useState, useEffect } from 'react';
import { 
  Plane, 
  Search, 
  MapPin, 
  Calendar, 
  User, 
  ArrowRightLeft, 
  Compass, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  Sliders, 
  Map, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  CheckCircle,
  Tag,
  Volume2,
  VolumeX,
  CreditCard,
  QrCode,
  Info
} from 'lucide-react';

// Mock destinations with high quality Unsplash travel images
const POPULAR_DESTINATIONS = [
  {
    id: 'paris',
    city: 'Paris',
    country: 'France',
    tag: 'Romantic',
    rating: 4.9,
    price: '$640',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
    desc: 'Wander through historical avenues and golden sunset cafe terraces.'
  },
  {
    id: 'malaysia',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    tag: 'Metropolitan',
    rating: 4.8,
    price: '$520',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a523?auto=format&fit=crop&w=600&q=80',
    desc: 'Towering spires meeting rich tropical rainforest roots.'
  },
  {
    id: 'milan',
    city: 'Milan',
    country: 'Italy',
    tag: 'Fashion & Art',
    rating: 4.7,
    price: '$590',
    image: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80',
    desc: 'Stunning Gothic architecture blended with avant-garde runways.'
  },
  {
    id: 'tokyo',
    city: 'Tokyo',
    country: 'Japan',
    tag: 'Tech-Futurism',
    rating: 4.95,
    price: '$890',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
    desc: 'Neon dreams coupled with serene ancient shrines.'
  },
  {
    id: 'reykjavik',
    city: 'Reykjavik',
    country: 'Iceland',
    tag: 'Natural Wonder',
    rating: 4.9,
    price: '$720',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff28127792?auto=format&fit=crop&w=600&q=80',
    desc: 'Dance under aurora borealis or relax in geothermal springs.'
  }
];

const FLIGHTS_DATABASE = [
  { id: 'FL001', from: 'MEL', fromCity: 'Melbourne', to: 'SYD', toCity: 'Sydney', depart: '02:00 pm', board: '01:30 pm', duration: '1h 30m', price: 180, gate: 'A2', terminal: 'T4', flightNo: 'VX25' },
  { id: 'FL002', from: 'MEL', fromCity: 'Melbourne', to: 'CDG', toCity: 'Paris', depart: '10:15 pm', board: '09:45 pm', duration: '21h 15m', price: 1250, gate: 'C12', terminal: 'T1', flightNo: 'VX890' },
  { id: 'FL003', from: 'MEL', fromCity: 'Melbourne', to: 'KUL', toCity: 'Kuala Lumpur', depart: '04:40 pm', board: '04:10 pm', duration: '8h 20m', price: 540, gate: 'B8', terminal: 'T2', flightNo: 'VX112' },
  { id: 'FL004', from: 'MEL', fromCity: 'Melbourne', to: 'MXP', toCity: 'Milan', depart: '01:05 am', board: '12:35 am', duration: '20h 40m', price: 1100, gate: 'A15', terminal: 'T4', flightNo: 'VX441' },
  { id: 'FL005', from: 'HND', fromCity: 'Tokyo', to: 'CDG', toCity: 'Paris', depart: '11:55 am', board: '11:25 am', duration: '12h 45m', price: 1450, gate: 'E4', terminal: 'T3', flightNo: 'VX992' },
];

export default function App() {
  // State management
  const [fromLocation, setFromLocation] = useState('MEL');
  const [toLocation, setToLocation] = useState('SYD');
  const [passengerName, setPassengerName] = useState('Miss Sarah Jones');
  const [selectedSeat, setSelectedSeat] = useState('1A');
  const [departureDate, setDepartureDate] = useState('15 Jan, 27');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(FLIGHTS_DATABASE[0]);
  const [boardingPassCount, setBoardingPassCount] = useState(1);
  const [activeTab, setActiveTab] = useState('explore');
  const [notification, setNotification] = useState(null);
  const [isSoundOn, setIsSoundOn] = useState(false);

  // Auto-filtering on search
  const handleSearch = (e) => {
    e?.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      const results = FLIGHTS_DATABASE.filter(f => 
        f.from.toLowerCase().includes(fromLocation.toLowerCase()) || 
        f.fromCity.toLowerCase().includes(fromLocation.toLowerCase()) ||
        f.to.toLowerCase().includes(toLocation.toLowerCase()) || 
        f.toCity.toLowerCase().includes(toLocation.toLowerCase())
      );
      setSearchResults(results);
      if(results.length > 0) {
        setSelectedFlight(results[0]);
        showToast(`Found ${results.length} matched luxurious flights!`);
      } else {
        showToast("No direct matches found. Showing recommended alternative routes.");
        setSelectedFlight(FLIGHTS_DATABASE[0]);
      }
      setIsSearching(false);
    }, 800);
  };

  const showToast = (message) => {
    setNotification(message);
    if (isSoundOn) {
      // Gentle synthetic success chime
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      } catch (e) {}
    }
  };

  // Auto clear notification
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const selectDestination = (dest) => {
    setToLocation(dest.city);
    // Find flight matching destination if possible
    const flight = FLIGHTS_DATABASE.find(f => f.toCity.toLowerCase() === dest.city.toLowerCase());
    if (flight) {
      setSelectedFlight(flight);
      setToLocation(flight.to);
    } else {
      // Mock custom flight
      setSelectedFlight({
        id: 'FL-CUST',
        from: 'MEL',
        fromCity: 'Melbourne',
        to: dest.city.slice(0, 3).toUpperCase(),
        toCity: dest.city,
        depart: '03:15 pm',
        board: '02:45 pm',
        duration: '14h 20m',
        price: parseInt(dest.price.replace('$', '')) || 650,
        gate: 'B14',
        terminal: 'T2',
        flightNo: `VX${Math.floor(100 + Math.random() * 900)}`
      });
    }
    showToast(`Destination selected: ${dest.city}. Instantly configured pass!`);
    window.scrollTo({ top: document.getElementById('pass-generator')?.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07132a] text-[#ebf2ff] font-sans selection:bg-[#ff8a65] selection:text-white overflow-x-hidden relative">
      
      {/* Visual Sunset Glows & Celestial Grid Layout Background */}
      <div className="absolute top-0 left-0 w-full h-[850px] bg-gradient-to-b from-[#1b345b] via-[#10223f] to-[#07132a] pointer-events-none z-0">
        <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-[#e2764b] opacity-25 rounded-full blur-[110px]"></div>
        <div className="absolute top-[25%] left-[5%] w-[400px] h-[400px] bg-[#1e4b8f] opacity-40 rounded-full blur-[130px]"></div>
        <div className="absolute top-0 left-0 right-0 h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Dynamic Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce bg-gradient-to-r from-[#1d3d6e] to-[#294c80] border border-[#ff8a65]/50 px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 text-sm max-w-sm backdrop-blur-md">
          <Sparkles className="text-[#ff8a65] shrink-0" size={18} />
          <div>
            <span className="font-semibold text-white">System Alert</span>
            <p className="text-gray-300 text-xs mt-0.5">{notification}</p>
          </div>
          <button onClick={() => setNotification(null)} className="text-gray-400 hover:text-white ml-auto">
            <X size={15} />
          </button>
        </div>
      )}

      {/* Global Header */}
      <nav className="relative z-10 border-b border-[#ffffff10] backdrop-blur-md sticky top-0 bg-[#07132ad9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff8a65] to-[#1d52a2] p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full bg-[#0d1e39] rounded-[10px] flex items-center justify-center">
                <Plane className="text-[#ff8a65] transform -rotate-45" size={20} />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-[#ff8a65] bg-clip-text text-transparent">SKYFLOW</span>
              <span className="text-[10px] text-slate-400 block tracking-widest uppercase font-semibold">Luxury Travel Re-imagined</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => { setActiveTab('explore'); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
              className={`text-sm font-medium transition-colors ${activeTab === 'explore' ? 'text-[#ff8a65]' : 'text-slate-300 hover:text-white'}`}
            >
              Curated Destinations
            </button>
            <button 
              onClick={() => { setActiveTab('pass'); window.scrollTo({ top: document.getElementById('pass-generator')?.offsetTop - 80, behavior: 'smooth' }); }}
              className={`text-sm font-medium transition-colors ${activeTab === 'pass' ? 'text-[#ff8a65]' : 'text-slate-300 hover:text-white'}`}
            >
              Interactive Boarding Pass
            </button>
            <a href="#amenities" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              First-Class Experience
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                setIsSoundOn(!isSoundOn);
                showToast(isSoundOn ? "Audio response disabled" : "Interactive audio feedback enabled!");
              }} 
              className="p-2 rounded-lg bg-[#ffffff0a] border border-[#ffffff10] text-slate-400 hover:text-white transition-colors"
              title="Toggle Interactive Sound FX"
            >
              {isSoundOn ? <Volume2 size={18} className="text-[#ff8a65]" /> : <VolumeX size={18} />}
            </button>

            <div className="hidden sm:flex items-center gap-2 bg-[#ffffff05] border border-[#ffffff10] px-3.5 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-xs font-semibold text-slate-300">Terminal Gate Online</span>
            </div>

            <div className="relative group">
              <div className="w-10 h-10 rounded-full border-2 border-[#ff8a65] overflow-hidden cursor-pointer transition-transform hover:scale-105 active:scale-95">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" 
                  alt="Sarah Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* HERO SECTION: The Awe-inspiring Horizon */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff8a65]/10 border border-[#ff8a65]/20 text-[#ff8a65] text-xs font-semibold tracking-wider uppercase">
                <Sparkles size={13} />
                Now boarding the Next Era of Luxury
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                Travelling leaves you <span className="relative inline-block"><span className="relative z-10 bg-gradient-to-r from-[#ff8a65] to-orange-400 bg-clip-text text-transparent">speechless</span><span className="absolute bottom-1 left-0 right-0 h-3 bg-orange-600/10 -rotate-1"></span></span>. Then turns you into a storyteller.
              </h1>

              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                Experience flight design built around elegance. Create, schedule, and view flights with beautiful responsive glass-panel tickets that sync on-the-sky seamlessly.
              </p>

              {/* Dynamic Action Search Bar */}
              <div className="p-2.5 rounded-2xl bg-gradient-to-r from-[#172c4e] to-[#0f1f3a] border border-[#ffffff15] shadow-2xl">
                <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      placeholder="Origin (e.g. MEL)" 
                      value={fromLocation}
                      onChange={(e) => setFromLocation(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#ffffff04] border border-[#ffffff08] rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#ff8a65] text-sm font-semibold"
                    />
                  </div>
                  <div className="relative">
                    <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 rotate-90" size={16} />
                    <input 
                      type="text" 
                      placeholder="Destination (e.g. SYD)" 
                      value={toLocation}
                      onChange={(e) => setToLocation(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#ffffff04] border border-[#ffffff08] rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#ff8a65] text-sm font-semibold"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#ff8a65] to-[#e6754d] hover:brightness-110 active:scale-[0.98] transition-all py-2.5 rounded-xl font-bold text-white text-sm shadow-lg shadow-orange-950/40 flex items-center justify-center gap-2"
                  >
                    {isSearching ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Search size={16} />
                        Search Flight Options
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Trust & Highlights */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#ffffff0a]">
                <div>
                  <h3 className="text-2xl font-bold text-white">100%</h3>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">Private Lounges</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#ff8a65]">VX-25</h3>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">Signature Fleet</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">4.98<span className="text-[#ff8a65]">★</span></h3>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">Ultra Premium Rating</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Premium Phone Mockup & Card Preview */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#ff8a65] opacity-20 rounded-full blur-[90px] pointer-events-none"></div>
              
              {/* Inspiration DNA Left Mockup Card */}
              <div className="relative w-full max-w-[370px] aspect-[9/19] rounded-[48px] border-[10px] border-[#132644] bg-[#07132a] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
                
                {/* Camera Notch & Phone Top bar */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#132644] rounded-full z-30 flex items-center justify-around px-4">
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                  <div className="w-12 h-1 bg-slate-800 rounded"></div>
                </div>

                {/* Inner Screen */}
                <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar relative pt-10">
                  
                  {/* Top Background Wing Picture Mockup */}
                  <div className="h-[240px] relative shrink-0 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" 
                      alt="Airplane Wing Sunset" 
                      className="w-full h-full object-cover scale-110 object-center filter saturate-[1.1] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] via-[#00000030] to-[#07132a]"></div>
                    
                    {/* Header in Mockup */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <div className="w-6 h-6 rounded-md bg-white/10 backdrop-blur-md flex flex-col justify-center gap-1 p-1">
                        <div className="h-0.5 w-full bg-white rounded"></div>
                        <div className="h-0.5 w-2/3 bg-white rounded"></div>
                      </div>
                      <div className="w-6 h-6 rounded-full overflow-hidden border border-[#ff8a65]/80">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=50&q=80" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Text overlays matching inspiration image layout */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-orange-300">On The Sky</p>
                      <h4 className="text-lg font-bold leading-tight mt-0.5">Travelling - It leaves you speechless.</h4>
                      <p className="text-[9px] text-slate-300 mt-1">Then turns you into a storyteller.</p>
                      
                      {/* Interactive Search pill */}
                      <div className="mt-3.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-2.5 py-1.5 flex items-center justify-between text-[10px]">
                        <span className="text-slate-200">Search flights...</span>
                        <div className="w-4 h-4 rounded-full bg-[#ff8a65] flex items-center justify-center">
                          <Search size={8} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Popular and Trips area in mockup */}
                  <div className="p-4 bg-[#07132a] flex-1 space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[11px] font-bold tracking-wider text-slate-300">Popular Destinations</span>
                        <span className="text-[9px] text-[#ff8a65] font-semibold">View All</span>
                      </div>
                      
                      {/* Mini Horizontal Scroll Cards */}
                      <div className="flex gap-2.5 overflow-x-auto pb-1 no-scrollbar">
                        {POPULAR_DESTINATIONS.slice(0, 3).map((item) => (
                          <div 
                            key={item.id} 
                            onClick={() => selectDestination(item)}
                            className="w-[100px] shrink-0 rounded-xl overflow-hidden relative aspect-square border border-white/5 group cursor-pointer hover:border-[#ff8a65]/40 transition-colors"
                          >
                            <img src={item.image} alt={item.city} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <span className="absolute bottom-1.5 left-1.5 text-[8px] font-bold text-white">{item.city}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Upcoming trip container */}
                    <div className="bg-[#112443] border border-white/5 rounded-2xl p-3">
                      <span className="text-[9px] text-slate-400 block font-semibold uppercase tracking-wider">Your Upcoming Pass</span>
                      <div className="flex justify-between items-center mt-2.5">
                        <div className="text-left">
                          <span className="text-sm font-bold text-white block">{selectedFlight.from}</span>
                          <span className="text-[8px] text-slate-400 block">{selectedFlight.fromCity}</span>
                        </div>
                        <div className="flex flex-col items-center flex-1 px-4">
                          <Plane className="text-[#ff8a65] rotate-45" size={12} />
                          <div className="h-[1px] w-full bg-slate-700 mt-1 relative">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#ff8a65] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-white block">{selectedFlight.to}</span>
                          <span className="text-[8px] text-slate-400 block">{selectedFlight.toCity}</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-[#ffffff06] flex justify-between text-[8px] text-slate-400">
                        <span>Depart: {selectedFlight.depart}</span>
                        <span>Flight: {selectedFlight.flightNo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Sunset Plane Badge trailing behind mockup */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#1b3d75] to-[#ff8a65]/30 border border-white/10 rounded-3xl p-5 backdrop-blur-xl shadow-2xl hidden sm:flex flex-col gap-2 max-w-[190px]">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-[#ff8a65] rounded-lg">
                    <TrendingUp className="text-white" size={14} />
                  </div>
                  <span className="text-[11px] font-bold text-white">Active Skyway</span>
                </div>
                <p className="text-[10px] text-slate-300">Melbourne to Sydney direct flight paths are at peak efficiency today.</p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 2: Interactive Boarding Pass Generator */}
        <section id="pass-generator" className="py-12 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-tr from-[#16294d]/10 to-[#ff8a65]/5 opacity-30 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-sm font-bold tracking-widest text-[#ff8a65] uppercase block">LIVE CONFIGURATOR</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Your Premium Boarding Pass</h2>
            <p className="text-slate-300 text-sm">
              Use our live system controls below to craft your flight parameters. Witness your digital first-class flight token morph dynamically in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Interactive Flight Setup Form */}
            <div className="lg:col-span-5 bg-[#0f213e] border border-[#ffffff0a] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff8a65]/10 to-transparent pointer-events-none"></div>
              
              <h3 className="text-lg font-bold text-white border-b border-[#ffffff10] pb-4 flex items-center gap-2.5">
                <Sliders size={18} className="text-[#ff8a65]" />
                Personalize Ticket & Cabin
              </h3>

              {/* Form Input fields */}
              <div className="space-y-4">
                
                {/* Passenger Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-400 block">Passenger Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      value={passengerName}
                      onChange={(e) => {
                        setPassengerName(e.target.value);
                      }}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#ffffff05] border border-[#ffffff10] rounded-xl text-white focus:outline-none focus:border-[#ff8a65] text-sm font-semibold"
                    />
                  </div>
                </div>

                {/* Preset Flight Routes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-400 block">Select Desired Flight Profile</label>
                  <div className="grid grid-cols-1 gap-2">
                    {FLIGHTS_DATABASE.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => {
                          setSelectedFlight(f);
                          setFromLocation(f.from);
                          setToLocation(f.to);
                          showToast(`Linked Route to Flight ${f.flightNo}!`);
                        }}
                        className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${selectedFlight.id === f.id ? 'bg-[#ff8a65]/15 border-[#ff8a65] text-white' : 'bg-[#ffffff02] border-[#ffffff08] hover:bg-[#ffffff08] text-slate-300'}`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-white">{f.from}</span>
                            <ArrowRightLeft size={10} className="text-[#ff8a65]" />
                            <span className="font-bold text-sm text-white">{f.to}</span>
                            <span className="text-[10px] bg-[#ffffff10] text-[#ff8a65] px-1.5 py-0.5 rounded ml-2 font-mono">{f.flightNo}</span>
                          </div>
                          <span className="text-[11px] text-slate-400 block mt-0.5">{f.fromCity} to {f.toCity}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-slate-200 block">{f.depart}</span>
                          <span className="text-[10px] text-slate-500 block">{f.duration}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dynamic Configuration Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 block">Suite / Seat</label>
                    <select 
                      value={selectedSeat}
                      onChange={(e) => {
                        setSelectedSeat(e.target.value);
                        showToast(`Cabin seat reassigned to Suite ${e.target.value}`);
                      }}
                      className="w-full px-3 py-2.5 bg-[#ffffff05] border border-[#ffffff10] rounded-xl text-white focus:outline-none focus:border-[#ff8a65] text-sm font-semibold"
                    >
                      <option value="1A">Suite 1A (Ultra)</option>
                      <option value="1F">Suite 1F (Window)</option>
                      <option value="2A">Suite 2A (Stateroom)</option>
                      <option value="3B">First Class 3B</option>
                      <option value="5C">First Class 5C</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 block">Boarding Date</label>
                    <input 
                      type="text" 
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full px-3 py-2.5 bg-[#ffffff05] border border-[#ffffff10] rounded-xl text-white focus:outline-none focus:border-[#ff8a65] text-sm font-semibold"
                    />
                  </div>
                </div>

              </div>

              {/* Booking Summary Box */}
              <div className="p-4 rounded-2xl bg-[#07132a] border border-[#ffffff08] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 tracking-wider">Est. All-Inclusive Fare</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-extrabold text-white">${selectedFlight.price}</span>
                    <span className="text-xs text-slate-400">USD</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-emerald-400 block font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25">
                    Premium Class Included
                  </span>
                  <span className="text-[9px] text-slate-400 mt-1 block">Includes VIP SkyLounge Access</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Info size={14} className="text-[#ff8a65] shrink-0" />
                <p>Modify fields on the left, watch the digital golden twilight card adjust automatically.</p>
              </div>

            </div>

            {/* Premium Boarding Pass Live Render (Exact Visual Vibe from Right Card) */}
            <div className="lg:col-span-7 flex justify-center">
              
              {/* Outer Glow container */}
              <div className="w-full max-w-[430px] rounded-[32px] overflow-hidden bg-gradient-to-b from-[#1b3154] via-[#10223e] to-[#0a172a] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.7)] p-6 relative">
                
                {/* Accent Orange/Blue Glowing Orbs in Card Background */}
                <div className="absolute top-[30%] left-[20%] w-[250px] h-[250px] bg-[#ff8a65] opacity-20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-[#1e4683] opacity-35 rounded-full blur-[100px] pointer-events-none"></div>

                {/* Card Header */}
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#ff8a65]/20 flex items-center justify-center">
                      <Plane className="text-[#ff8a65] transform -rotate-45" size={13} />
                    </div>
                    <span className="text-[11px] font-bold tracking-widest text-slate-300 uppercase">SKYFLOW ELITE PASS</span>
                  </div>
                  <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex flex-col justify-center gap-0.5 p-1">
                    <div className="h-[1.5px] w-full bg-white/80 rounded"></div>
                    <div className="h-[1.5px] w-2/3 bg-white/80 rounded"></div>
                  </div>
                </div>

                {/* Boarding Pass Branding */}
                <div className="mb-6 relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">BOARDING PASS</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Connecting <span className="text-[#ff8a65] font-semibold">{selectedFlight.fromCity}</span> to <span className="text-sky-300 font-semibold">{selectedFlight.toCity}</span>
                  </p>
                </div>

                {/* Main Translucent Glass Ticket Body (Absolute Mirror to Right Design) */}
                <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] backdrop-blur-md z-10 shadow-inner">
                  
                  {/* Backdrop Wing Vector Silhouette styling */}
                  <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay">
                    <img 
                      src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80" 
                      className="w-full h-full object-cover scale-125 translate-x-12 translate-y-6" 
                      alt="Silhouetted wing backdrop decoration"
                    />
                  </div>

                  {/* Top segment: Flight Ports */}
                  <div className="p-5 flex justify-between items-center border-b border-white/10 relative">
                    <div className="text-left">
                      <h4 className="text-3xl font-black text-white leading-none tracking-tight">{selectedFlight.from}</h4>
                      <p className="text-[10px] uppercase text-slate-300 tracking-wider mt-1">{selectedFlight.fromCity}</p>
                    </div>

                    {/* Flight Path Plane Vector Icon */}
                    <div className="flex flex-col items-center flex-1 px-6">
                      <Plane className="text-[#ff8a65] transform rotate-45 scale-110 drop-shadow-[0_0_8px_rgba(255,138,101,0.5)]" size={20} />
                      <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#ff8a65] to-transparent mt-2 relative">
                        <div className="w-2 h-2 rounded-full bg-[#ff8a65] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                    </div>

                    <div className="text-right">
                      <h4 className="text-3xl font-black text-white leading-none tracking-tight">{selectedFlight.to}</h4>
                      <p className="text-[10px] uppercase text-slate-300 tracking-wider mt-1">{selectedFlight.toCity}</p>
                    </div>
                  </div>

                  {/* Mid Segment: Passenger Name & Seat */}
                  <div className="p-5 grid grid-cols-2 gap-y-4 gap-x-2 border-b border-white/10 text-sm relative">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-medium">Passenger Name</span>
                      <span className="font-bold text-white text-base block mt-0.5">{passengerName || "Guest User"}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-medium">Suite / Seat</span>
                      <span className="font-mono font-bold text-[#ff8a65] text-lg block mt-0.5">{selectedSeat}</span>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-medium">Flight Identifier</span>
                      <span className="font-bold text-white block mt-0.5">{selectedFlight.flightNo}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-medium">Departure Date</span>
                      <span className="font-bold text-white block mt-0.5">{departureDate}</span>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-medium">Terminal</span>
                      <span className="font-bold text-white block mt-0.5">{selectedFlight.terminal}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-medium">Gate Code</span>
                      <span className="font-bold text-white block mt-0.5">{selectedFlight.gate}</span>
                    </div>
                  </div>

                  {/* Bottom Segment: Boarding Countdown Time */}
                  <div className="p-5 bg-black/15 flex justify-between items-center relative">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-medium">Boarding Closes</span>
                      <span className="font-bold text-emerald-400 text-sm mt-0.5 block">{selectedFlight.board}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-medium">Departure Time</span>
                      <span className="font-bold text-white text-sm mt-0.5 block">{selectedFlight.depart}</span>
                    </div>
                  </div>

                </div>

                {/* Barcode & Scanning Block */}
                <div className="mt-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 relative z-10 flex flex-col items-center gap-3">
                  <div className="w-full flex items-center justify-center py-2 px-4 rounded-xl bg-white/95">
                    {/* Simulated SVG Barcode element */}
                    <div className="flex flex-col items-center w-full">
                      <div className="w-full h-12 flex justify-between items-stretch">
                        {Array.from({ length: 48 }).map((_, idx) => {
                          const isWide = [2, 5, 8, 12, 13, 19, 24, 25, 29, 34, 38, 42, 43, 47].includes(idx);
                          const isSpacer = [4, 15, 23, 31, 40].includes(idx);
                          if (isSpacer) return <div key={idx} className="w-[1.5px] bg-transparent"></div>;
                          return (
                            <div 
                              key={idx} 
                              className={`bg-[#07132a] ${isWide ? 'w-[3px]' : 'w-[1px]'}`}
                            ></div>
                          );
                        })}
                      </div>
                      <span className="font-mono text-[9px] text-[#07132a] font-bold tracking-[0.25em] mt-1.5">(00) 0 0123456 000000001 8</span>
                    </div>
                  </div>
                  <span className="text-[9px] tracking-widest text-slate-400 font-semibold uppercase">Scan At Departure Lounge Gate</span>
                </div>

                {/* Realistic Ticket Punches (Sides cutout circles) */}
                <div className="absolute top-[182px] -left-3 w-6 h-6 rounded-full bg-[#07132a] border-r border-white/10 z-20"></div>
                <div className="absolute top-[182px] -right-3 w-6 h-6 rounded-full bg-[#07132a] border-l border-white/10 z-20"></div>

              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3: Premium Curated Bento Grid (Exquisite Visual Highlights) */}
        <section id="explore" className="py-20 border-t border-[#ffffff0a]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-3">
              <span className="text-sm font-bold tracking-widest text-[#ff8a65] uppercase block">PREMIUM HORIZONS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Curated Luxury Escapes</h2>
              <p className="text-slate-300 max-w-xl text-sm">
                Indulge in destinations designed to leave you spellbound. Tap any card below to sync that city's premium flight profile directly into your boarding pass.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-[#ff8a65]"></div>
              <span className="text-xs uppercase text-[#ff8a65] font-bold tracking-widest">Select to Configure Ticket</span>
            </div>
          </div>

          {/* Bento-style Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Featured Bento Card - Paris */}
            <div 
              onClick={() => selectDestination(POPULAR_DESTINATIONS[0])}
              className="md:col-span-8 group relative rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[21/10] border border-white/10 cursor-pointer shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all transform hover:-translate-y-1"
            >
              <img 
                src={POPULAR_DESTINATIONS[0].image} 
                alt="Paris" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07132a] via-[#07132a]/30 to-black/20"></div>
              
              {/* Top Row Indicators */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[10px] font-bold text-[#ff8a65] tracking-wide uppercase">
                  {POPULAR_DESTINATIONS[0].tag}
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md text-xs text-white font-bold">
                  <Star size={12} className="text-[#ff8a65] fill-[#ff8a65]" />
                  {POPULAR_DESTINATIONS[0].rating}
                </span>
              </div>

              {/* Bottom Info Row */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="max-w-md space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#ff8a65] font-semibold">{POPULAR_DESTINATIONS[0].country}</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">{POPULAR_DESTINATIONS[0].city}</h3>
                  <p className="text-slate-300 text-xs hidden sm:block">{POPULAR_DESTINATIONS[0].desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-slate-400 block uppercase font-medium">Premium Seat from</span>
                  <span className="text-xl sm:text-2xl font-black text-[#ff8a65]">{POPULAR_DESTINATIONS[0].price}</span>
                </div>
              </div>
            </div>

            {/* Side Bento Card - Malaysia */}
            <div 
              onClick={() => selectDestination(POPULAR_DESTINATIONS[1])}
              className="md:col-span-4 group relative rounded-3xl overflow-hidden aspect-square md:aspect-auto border border-white/10 cursor-pointer shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all transform hover:-translate-y-1"
            >
              <img 
                src={POPULAR_DESTINATIONS[1].image} 
                alt="Malaysia" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07132a] via-[#07132a]/20 to-black/10"></div>
              
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[10px] font-bold text-[#ff8a65] tracking-wide uppercase">
                  {POPULAR_DESTINATIONS[1].tag}
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md text-xs text-white font-bold">
                  <Star size={12} className="text-[#ff8a65] fill-[#ff8a65]" />
                  {POPULAR_DESTINATIONS[1].rating}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-widest text-[#ff8a65] font-semibold">{POPULAR_DESTINATIONS[1].country}</span>
                <h3 className="text-xl font-bold text-white mt-0.5">{POPULAR_DESTINATIONS[1].city}</h3>
                <div className="flex justify-between items-baseline mt-2">
                  <span className="text-xs text-slate-400">Exclusive suite fare</span>
                  <span className="text-lg font-black text-white">{POPULAR_DESTINATIONS[1].price}</span>
                </div>
              </div>
            </div>

            {/* Bento Card - Milan */}
            <div 
              onClick={() => selectDestination(POPULAR_DESTINATIONS[2])}
              className="md:col-span-4 group relative rounded-3xl overflow-hidden aspect-square md:aspect-auto border border-white/10 cursor-pointer shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all transform hover:-translate-y-1"
            >
              <img 
                src={POPULAR_DESTINATIONS[2].image} 
                alt="Milan" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07132a] via-[#07132a]/20 to-black/10"></div>
              
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[10px] font-bold text-[#ff8a65] tracking-wide uppercase">
                  {POPULAR_DESTINATIONS[2].tag}
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md text-xs text-white font-bold">
                  <Star size={12} className="text-[#ff8a65] fill-[#ff8a65]" />
                  {POPULAR_DESTINATIONS[2].rating}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-widest text-[#ff8a65] font-semibold">{POPULAR_DESTINATIONS[2].country}</span>
                <h3 className="text-xl font-bold text-white mt-0.5">{POPULAR_DESTINATIONS[2].city}</h3>
                <div className="flex justify-between items-baseline mt-2">
                  <span className="text-xs text-slate-400">Exclusive suite fare</span>
                  <span className="text-lg font-black text-white">{POPULAR_DESTINATIONS[2].price}</span>
                </div>
              </div>
            </div>

            {/* Bento Card - Tokyo */}
            <div 
              onClick={() => selectDestination(POPULAR_DESTINATIONS[3])}
              className="md:col-span-4 group relative rounded-3xl overflow-hidden aspect-square md:aspect-auto border border-white/10 cursor-pointer shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all transform hover:-translate-y-1"
            >
              <img 
                src={POPULAR_DESTINATIONS[3].image} 
                alt="Tokyo" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07132a] via-[#07132a]/20 to-black/10"></div>
              
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[10px] font-bold text-[#ff8a65] tracking-wide uppercase">
                  {POPULAR_DESTINATIONS[3].tag}
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md text-xs text-white font-bold">
                  <Star size={12} className="text-[#ff8a65] fill-[#ff8a65]" />
                  {POPULAR_DESTINATIONS[3].rating}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-widest text-[#ff8a65] font-semibold">{POPULAR_DESTINATIONS[3].country}</span>
                <h3 className="text-xl font-bold text-white mt-0.5">{POPULAR_DESTINATIONS[3].city}</h3>
                <div className="flex justify-between items-baseline mt-2">
                  <span className="text-xs text-slate-400">Exclusive suite fare</span>
                  <span className="text-lg font-black text-white">{POPULAR_DESTINATIONS[3].price}</span>
                </div>
              </div>
            </div>

            {/* Bento Card - Reykjavik */}
            <div 
              onClick={() => selectDestination(POPULAR_DESTINATIONS[4])}
              className="md:col-span-4 group relative rounded-3xl overflow-hidden aspect-square md:aspect-auto border border-white/10 cursor-pointer shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all transform hover:-translate-y-1"
            >
              <img 
                src={POPULAR_DESTINATIONS[4].image} 
                alt="Iceland" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07132a] via-[#07132a]/20 to-black/10"></div>
              
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[10px] font-bold text-[#ff8a65] tracking-wide uppercase">
                  {POPULAR_DESTINATIONS[4].tag}
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md text-xs text-white font-bold">
                  <Star size={12} className="text-[#ff8a65] fill-[#ff8a65]" />
                  {POPULAR_DESTINATIONS[4].rating}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-widest text-[#ff8a65] font-semibold">{POPULAR_DESTINATIONS[4].country}</span>
                <h3 className="text-xl font-bold text-white mt-0.5">{POPULAR_DESTINATIONS[4].city}</h3>
                <div className="flex justify-between items-baseline mt-2">
                  <span className="text-xs text-slate-400">Exclusive suite fare</span>
                  <span className="text-lg font-black text-white">{POPULAR_DESTINATIONS[4].price}</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: First Class Experience Features */}
        <section id="amenities" className="py-20 border-t border-[#ffffff0a] relative">
          <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-sky-600 opacity-10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80" alt="Lounge Space" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl bg-gradient-to-tr from-[#ff8a65] to-orange-500 p-6 text-white space-y-2">
                  <Volume2 size={24} className="text-white animate-pulse" />
                  <h4 className="font-bold text-lg">Active Soundscapes</h4>
                  <p className="text-xs text-orange-100">Toggle interactive haptics or listen to peaceful mid-flight white noise presets.</p>
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl bg-[#0e203c] border border-white/5 p-6 text-left">
                  <span className="text-2xl font-black text-[#ff8a65] block">35k FT</span>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold mt-1">Sovereign Altitude WiFi</span>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" alt="Resort View" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Right details content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-sm font-bold tracking-widest text-[#ff8a65] uppercase block">THE SKYFLOW UNIVERSE</span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">We build spaces that leave you speechless.</h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  Our services are refined around absolute peace of mind. We construct responsive online portals and physical cabins to ensure your flight transitions flawlessly.
                </p>
              </div>

              {/* Feature Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 shrink-0 flex items-center justify-center text-[#ff8a65]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Swift Chauffeur Sync</h4>
                    <p className="text-xs text-slate-400 mt-1">Automatic premium transport setup from terminal straight to your urban destination.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 shrink-0 flex items-center justify-center text-[#ff8a65]">
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Curator Assist AI</h4>
                    <p className="text-xs text-slate-400 mt-1">Get dining, fashion, and theater reservations planned and pinned directly onto your digital ticket.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 shrink-0 flex items-center justify-center text-[#ff8a65]">
                    <Map size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Celestial Paths Only</h4>
                    <p className="text-xs text-slate-400 mt-1">We navigate premium sunset paths for unmatched horizontal skyviews.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 shrink-0 flex items-center justify-center text-[#ff8a65]">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Carbon-Neutral Vault</h4>
                    <p className="text-xs text-slate-400 mt-1">100% verified sustainable fuel initiatives attached to each passenger certificate.</p>
                  </div>
                </div>
              </div>

              {/* Interactive Audio Experience Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#172c4e] to-[#0f1f3a] border border-[#ffffff15] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs font-bold text-[#ff8a65] block uppercase">INTERACTIVE AUDIO LAB</span>
                  <p className="text-xs text-slate-300 mt-1">Enable sound feedback to listen to system validation chimes as you modify your ticket.</p>
                </div>
                <button 
                  onClick={() => {
                    setIsSoundOn(!isSoundOn);
                    showToast(isSoundOn ? "Interactive Audio Disabled." : "Interactive Audio Active!");
                  }} 
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${isSoundOn ? 'bg-[#ff8a65] text-white shadow-lg' : 'bg-[#ffffff0c] text-slate-300 border border-white/10 hover:bg-[#ffffff15]'}`}
                >
                  {isSoundOn ? 'Mute Interface FX' : 'Enable System FX'}
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 5: Beautiful Interactive Calculator / Trip Estimator */}
        <section className="py-16 border-t border-[#ffffff0a] relative">
          <div className="absolute top-1/2 left-10 w-[200px] h-[200px] bg-[#ff8a65]/5 rounded-full blur-[90px] pointer-events-none"></div>

          <div className="bg-gradient-to-r from-[#10223e] to-[#0a1526] rounded-3xl border border-white/10 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <span className="text-sm font-bold tracking-widest text-[#ff8a65] uppercase block">SKY RESERVES CO-PILOT</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Configure Multiple Boarding Passes</h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Travelling with friends, business partners, or family? Adjust your party size. Instantly verify seating placements and receive bundled premium rates with live estimation.
                </p>

                {/* Live Estimator Controls */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                      <span>PASSENGER COUNT</span>
                      <span className="text-[#ff8a65]">{boardingPassCount} {boardingPassCount === 1 ? 'Suite Holder' : 'Suite Holders'}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={boardingPassCount}
                      onChange={(e) => {
                        setBoardingPassCount(parseInt(e.target.value));
                        showToast(`Updated to ${e.target.value} Luxury Boarding Passes`);
                      }}
                      className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#ff8a65]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl bg-black/20 border border-white/5">
                      <span className="text-[10px] text-slate-400 block uppercase font-medium">Luggage Allowance</span>
                      <span className="text-sm font-bold text-white block mt-0.5">32kg x {boardingPassCount} (First-Class Limit)</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-black/20 border border-white/5">
                      <span className="text-[10px] text-slate-400 block uppercase font-medium">Premium Lounge Passes</span>
                      <span className="text-sm font-bold text-[#ff8a65] block mt-0.5">{boardingPassCount} Dynamic VIP Invitations</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Bill Output Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#07132a] border border-[#ffffff15] shadow-xl space-y-6">
                <h4 className="font-bold text-white text-base pb-3 border-b border-[#ffffff10] flex items-center justify-between">
                  <span>Executive Fare Matrix</span>
                  <span className="text-xs bg-[#ff8a65]/10 text-[#ff8a65] px-2.5 py-1 rounded-full font-mono">ID: SKY-EST</span>
                </h4>

                <div className="space-y-3.5 text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>Base Suite Rate ({selectedFlight.from} → {selectedFlight.to})</span>
                    <span>${selectedFlight.price}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Exclusive Cabin Lounge access</span>
                    <span className="text-emerald-400 font-semibold">FREE INCLUDED</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Lounge catering & Wi-Fi pack</span>
                    <span className="text-[#ff8a65] font-semibold">COMPLIMENTARY</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Multiplier (Passengers)</span>
                    <span>x {boardingPassCount}</span>
                  </div>

                  <div className="h-[1px] bg-[#ffffff10] my-2"></div>

                  {/* Multi-ticket discount tier calculation */}
                  {boardingPassCount > 1 && (
                    <div className="flex justify-between text-xs text-emerald-400 font-semibold">
                      <span>Multi-pass elite benefit (5% off)</span>
                      <span>-${Math.floor(selectedFlight.price * boardingPassCount * 0.05)}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-baseline pt-2">
                    <span className="text-base font-bold text-white">Estimated Grand Total</span>
                    <div className="text-right">
                      <span className="text-3xl font-black text-[#ff8a65] block">
                        ${boardingPassCount > 1 
                          ? Math.floor(selectedFlight.price * boardingPassCount * 0.95) 
                          : selectedFlight.price
                        }
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">Includes all international sky levies</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    showToast(`Succesfully generated ${boardingPassCount} verified boarding tickets!`);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff8a65] to-orange-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-950/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <CreditCard size={16} />
                  Lock In Tickets Securely
                </button>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#040c1b] border-t border-[#ffffff0a] py-16 relative z-10 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#ff8a65]/20 flex items-center justify-center">
                <Plane className="text-[#ff8a65] transform -rotate-45" size={16} />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">SKYFLOW</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Award-winning, high-fidelity airline concepting and premium luxury flight planners. Serving the global citizen with immaculate aesthetic precision from runway to sky.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Elite Alliances</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-[#ff8a65] transition-colors">Skyward Coalition</a></li>
              <li><a href="#" className="hover:text-[#ff8a65] transition-colors">Sovereign Lounge Access</a></li>
              <li><a href="#" className="hover:text-[#ff8a65] transition-colors">Vander-Vogel Concierge</a></li>
              <li><a href="#" className="hover:text-[#ff8a65] transition-colors">Pre-flight Helix Lounges</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Interactive System</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-[#ff8a65] transition-colors">Live Barcode Validator</a></li>
              <li><a href="#" className="hover:text-[#ff8a65] transition-colors">Dynamic Seats Configurator</a></li>
              <li><a href="#" className="hover:text-[#ff8a65] transition-colors">Route Mapping Modules</a></li>
              <li><a href="#" className="hover:text-[#ff8a65] transition-colors">Custom Terminal Feeds</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Stay Synchronized</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">Receive private notifications on seasonal sunset pathways and new terminal releases.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="vip@skyflow.com" 
                className="w-full px-3 py-2 bg-white/[0.03] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#ff8a65] text-xs"
              />
              <button 
                onClick={() => showToast("Subscribed to the private Skyflow newsletter!")}
                className="px-4 py-2 bg-[#ff8a65] text-white font-bold rounded-lg text-xs hover:bg-orange-600 active:scale-95 transition-all"
              >
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#ffffff05] flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2026 Skyflow Aviation Corp. Designed around premium horizontal sunset journeys.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#ff8a65]">Terms of Skyway</a>
            <a href="#" className="hover:text-[#ff8a65]">Privacy Vault</a>
            <a href="#" className="hover:text-[#ff8a65]">FAA Compliance</a>
          </div>
        </div>
      </footer>

    </div>
  );
}