import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Volleyball, ArrowUpRight, Calendar, MapPin, 
  Phone, Mail, Check, ChevronRight, Play, Users, 
  Sparkles, Award, ArrowRight, Instagram, Facebook, Twitter, MapPinned
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDivision, setActiveDivision] = useState('all');
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [joinStep, setJoinStep] = useState(1);
  const [expandedNews, setExpandedNews] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: 'women',
    experience: 'Intermediate'
  });

  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Auto-scrolling ticker text
  const tickerItems = Array(12).fill("The first lesson is free! ✦ ");

  const newsItems = [
    {
      id: "01",
      title: "Incredible season for the university volleyball team!",
      tag: "Championship",
      date: "May 2026",
      desc: "Our university affiliate team clinches the local conference title after an undefeated streak. The intense 5-set final showcased the true Flying Phoenix spirit.",
      color: "bg-white text-zinc-900 border border-zinc-200"
    },
    {
      id: "02",
      title: "Closing of the season & Gala Night",
      tag: "Social",
      date: "June 2026",
      desc: "Join us on June 18th for our annual honors ceremony and banquet. Celebrating individual achievements, most improved players, and team MVPs.",
      color: "bg-[#cfc5f0] text-zinc-900"
    },
    {
      id: "03",
      title: "Experienced coaches with extensive international training backgrounds",
      tag: "Academy",
      date: "Continuous",
      desc: "Welcoming Coach Linnea Ström from the Swedish national league to lead our advanced offensive tactical development. Group sessions start next month.",
      color: "bg-zinc-100 text-zinc-900 border border-zinc-200"
    },
    {
      id: "04",
      title: "The legendary club returns to the absolute top podium!",
      tag: "Milestone",
      date: "April 2026",
      desc: "After several rebuilding seasons, our premier men's team secure top-3 ranking nationally. Dynamic training methods and community support paid off.",
      color: "bg-zinc-900 text-white"
    }
  ];

  const divisions = [
    {
      id: 'women',
      title: "WOMEN'S TEAM",
      age: "18+ Years",
      level: "All Levels Welcome",
      desc: "She not only demonstrates the highest level of sportsmanship, but is also a shining example of female leadership, robust teamwork, and exceptional tactical discipline on the court.",
      image: "https://images.unsplash.com/photo-1592656094267-764a450201c5?auto=format&fit=crop&q=80&w=800",
      coach: "Elena Rostova"
    },
    {
      id: 'children',
      title: "CHILDREN'S ACADEMY",
      age: "8 - 15 Years",
      level: "Beginner Friendly",
      desc: "The children's volleyball team successfully combines teaching the core fundamentals of volleyball with physical fitness, team synergy, and promoting a vibrant, healthy lifestyle.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
      coach: "Marcus Thorne"
    },
    {
      id: 'men',
      title: "MEN'S ELITE",
      age: "18+ Years",
      level: "Competitive & Pro",
      desc: "A balanced roster combining the experience of seasoned veterans with the raw energy and speed of young talents has allowed the men's volleyball team to achieve significant victories.",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80&w=800",
      coach: "Jan de Vries"
    },
    {
      id: 'beach',
      title: "BEACH VOLLEYBALL",
      age: "All Ages",
      level: "Recreational & Pro",
      desc: "Enjoy the sand and summer vibes while elevating your vertical jump and stamina. Excellent outdoor training sessions tailored for quick reflex action and open court strategies.",
      image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&q=80&w=800",
      coach: "Sienna Vance"
    }
  ];

  const scheduleData = {
    Monday: [
      { time: "17:00 - 18:30", program: "Training for Children", level: "Beginners", coach: "Marcus Thorne", spots: "4 spots left" },
      { time: "19:00 - 20:30", program: "Training for Men", level: "Advanced", coach: "Jan de Vries", spots: "2 spots left" }
    ],
    Tuesday: [
      { time: "18:00 - 19:30", program: "Training for Women", level: "All Levels", coach: "Elena Rostova", spots: "Filled" },
      { time: "20:00 - 21:30", program: "Beach Strategy", level: "Intermediate", coach: "Sienna Vance", spots: "5 spots left" }
    ],
    Wednesday: [
      { time: "17:00 - 18:30", program: "Training for Children", level: "Beginners", coach: "Marcus Thorne", spots: "6 spots left" },
      { time: "19:00 - 21:00", program: "Open Gym / Mixers", level: "Recreational", coach: "Staff Assistance", spots: "12 spots left" }
    ],
    Thursday: [
      { time: "18:00 - 19:30", program: "Training for Women", level: "Tactical Intermediate", coach: "Elena Rostova", spots: "3 spots left" },
      { time: "19:30 - 21:00", program: "Beach Volley Drills", level: "All Levels", coach: "Sienna Vance", spots: "Filled" }
    ],
    Friday: [
      { time: "17:00 - 18:30", program: "Junior Elite Program", level: "Advanced Juniors", coach: "Marcus Thorne", spots: "2 spots left" },
      { time: "19:00 - 21:00", program: "Training for Men", level: "Elite Pro", coach: "Jan de Vries", spots: "1 spot left" }
    ],
    Saturday: [
      { time: "10:00 - 12:00", program: "Beach Tournament Play", level: "Competitive", coach: "Sienna Vance", spots: "8 spots left" },
      { time: "13:00 - 15:00", program: "Weekend Mixer League", level: "All Welcome", coach: "All Coaches", spots: "15 spots left" }
    ],
    Sunday: [
      { time: "11:00 - 13:00", program: "Family Volleyball Fun", level: "Recreational", coach: "Marcus Thorne", spots: "10 spots left" }
    ]
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (joinStep === 1) {
      setJoinStep(2);
    } else {
      setRegistrationSuccess(true);
    }
  };

  const resetForm = () => {
    setJoinStep(1);
    setIsJoinModalOpen(false);
    setRegistrationSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      division: 'women',
      experience: 'Intermediate'
    });
  };

  const filteredDivisions = activeDivision === 'all' 
    ? divisions 
    : divisions.filter(d => d.id === activeDivision);

  return (
    <div className="min-h-screen bg-[#F8F7FA] text-zinc-900 font-sans antialiased selection:bg-[#cfc5f0] selection:text-zinc-900">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#F8F7FA]/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-2.5 bg-zinc-900 text-[#cfc5f0] rounded-xl transition-transform duration-300 group-hover:rotate-12">
                <Volleyball className="w-6 h-6 animate-spin-slow" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-xl text-zinc-950 uppercase leading-none">Flying</span>
                <span className="text-xs tracking-[0.25em] font-medium text-zinc-500 uppercase leading-normal">Phoenix</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-600">
              <a href="#about" className="hover:text-zinc-950 transition-colors">About Us</a>
              <a href="#news" className="hover:text-zinc-950 transition-colors">Team News</a>
              <a href="#divisions" className="hover:text-zinc-950 transition-colors">Divisions</a>
              <a href="#schedule" className="hover:text-zinc-950 transition-colors">Training Schedule</a>
              <a href="#contact" className="hover:text-zinc-950 transition-colors">Contacts</a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => setIsJoinModalOpen(true)}
                className="bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-sm hover:shadow-md"
              >
                Join the team
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-zinc-100 px-4 py-6 space-y-4 animate-fadeIn">
            <nav className="flex flex-col gap-4 text-sm font-semibold text-zinc-600">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-zinc-950 py-1">About Us</a>
              <a href="#news" onClick={() => setIsMenuOpen(false)} className="hover:text-zinc-950 py-1">Team News</a>
              <a href="#divisions" onClick={() => setIsMenuOpen(false)} className="hover:text-zinc-950 py-1">Divisions</a>
              <a href="#schedule" onClick={() => setIsMenuOpen(false)} className="hover:text-zinc-950 py-1">Training Schedule</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-zinc-950 py-1">Contacts</a>
            </nav>
            <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsJoinModalOpen(true);
                }}
                className="w-full text-center bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full transition-all duration-200"
              >
                Join the team
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="about" className="relative overflow-hidden pt-12 pb-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Column 1: Copywriting */}
            <div className="lg:col-span-7 space-y-8 z-10">
              
              <div className="inline-flex items-center gap-2 bg-[#cfc5f0]/30 border border-[#cfc5f0]/50 text-[#5e4fa2] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Eindhoven's Premier Volleyball Club</span>
              </div>

              <div className="relative">
                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-zinc-950 leading-none">
                  Flying <br />
                  <span className="flex items-center gap-3">
                    Phoenix
                    <span className="inline-block p-2 sm:p-3 bg-[#cfc5f0] text-zinc-950 rounded-full border border-[#b2a3e0]">
                      <Volleyball className="w-8 h-8 sm:w-12 sm:h-12 text-zinc-950" />
                    </span>
                  </span>
                </h1>
                
                {/* Visual Accent Clip Line resembling the design's elegant background curve */}
                <div className="absolute -left-12 top-1/2 -z-10 w-96 h-96 rounded-full bg-gradient-to-tr from-[#cfc5f0]/20 to-transparent blur-3xl" />
              </div>

              <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
                Are you looking for a professional yet welcoming volleyball club where experienced mentors will support you and help you scale new heights? Flying Phoenix is the perfect court for your journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  onClick={() => setIsJoinModalOpen(true)}
                  className="bg-zinc-950 hover:bg-zinc-800 text-white font-bold uppercase text-xs tracking-widest py-4.5 px-8 rounded-full transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Join the team <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href="#schedule" 
                  className="bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 font-bold uppercase text-xs tracking-widest py-4.5 px-8 rounded-full transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Explore Schedule
                </a>
              </div>

              {/* Dynamic Club Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-200/60 max-w-md">
                <div>
                  <p className="text-3xl font-extrabold text-zinc-950">3K+</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-1">Active Fans</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-zinc-950">14+</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-1">PRO Coaches</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-zinc-950">05</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-1">Championships</p>
                </div>
              </div>

            </div>

            {/* Column 2: Modern Overlapping Image Cards */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              
              {/* Asymmetric Purple Card Frame Behind (Replicating reference styling cues) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#cfc5f0] to-[#b3a4e6] rounded-[2.5rem] transform rotate-3 scale-105 opacity-60 -z-10 shadow-xl" />

              <div className="relative bg-white p-4 sm:p-5 rounded-[2.5rem] shadow-2xl border border-zinc-100 overflow-hidden">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1592656094267-764a450201c5?auto=format&fit=crop&q=80&w=1000" 
                    alt="Flying Phoenix Volleyball Action" 
                    className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Floating Action Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md py-2 px-4 rounded-xl flex items-center gap-2 shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-800">Summer Enrollments Open</span>
                  </div>
                </div>

                {/* Sub-Card Grid for added UI richness */}
                <div className="grid grid-cols-12 gap-3 mt-4 items-center">
                  <div className="col-span-7 bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Next Tryouts</p>
                    <p className="text-sm font-extrabold text-zinc-950 mt-1">Every Saturday at 13:00</p>
                    <p className="text-[11px] text-[#5e4fa2] font-semibold mt-0.5">Free introductory session</p>
                  </div>
                  <div className="col-span-5 relative aspect-square rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=300" 
                      alt="Junior Training" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#5e4fa2]/20 hover:bg-transparent transition-all duration-300 cursor-pointer flex items-center justify-center">
                      <div className="bg-white/90 p-2 rounded-full shadow-lg">
                        <Play className="w-3.5 h-3.5 fill-current text-zinc-950 ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Wing-like floating element */}
              <div className="absolute -bottom-6 -right-6 bg-zinc-950 text-[#cfc5f0] p-4 rounded-full shadow-2xl hidden sm:block border-4 border-[#F8F7FA]">
                <Award className="w-8 h-8" />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* TICKER / MARQUEE */}
      <div className="bg-zinc-950 py-4 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex gap-4 text-[#cfc5f0] text-sm uppercase tracking-[0.2em] font-extrabold">
            {tickerItems.map((text, idx) => (
              <span key={idx} className="inline-block mx-4">{text}</span>
            ))}
          </div>
          <div className="flex gap-4 text-[#cfc5f0] text-sm uppercase tracking-[0.2em] font-extrabold absolute top-4 left-0 animate-marquee2">
            {tickerItems.map((text, idx) => (
              <span key={`dup-${idx}`} className="inline-block mx-4">{text}</span>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM NEWS SECTION */}
      <section id="news" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5e4fa2]">Stay Updated</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">Team News</h2>
            </div>
            <p className="text-zinc-500 max-w-sm mt-4 md:mt-0 text-sm leading-relaxed">
              Explore the latest announcements, victory recaps, special events, and development strategies of our elite roster.
            </p>
          </div>

          {/* Asymmetrical Grid layout matching reference's high-end style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            
            {newsItems.map((news, idx) => {
              // Custom grid spans for asymmetrical premium rhythm
              const gridSpan = idx === 0 
                ? "lg:col-span-5" 
                : idx === 1 
                  ? "lg:col-span-7" 
                  : idx === 2 
                    ? "lg:col-span-7" 
                    : "lg:col-span-5";

              // Asymmetric clipping styling mimicking the curved custom elements in inspiration image
              const cornerStyle = idx % 2 === 0 
                ? "rounded-2xl rounded-tr-[5rem] rounded-bl-[5rem]" 
                : "rounded-2xl rounded-tl-[5rem] rounded-br-[5rem]";

              const isExpanded = expandedNews === news.id;

              return (
                <div 
                  key={news.id}
                  className={`${gridSpan} ${news.color} ${cornerStyle} p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl relative group overflow-hidden border border-zinc-100 min-h-[280px]`}
                >
                  {/* Decorative faint pattern */}
                  <div className="absolute right-0 top-0 opacity-10 pointer-events-none text-zinc-400 font-extrabold text-8xl p-4 select-none">
                    {news.id}
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 bg-zinc-500/10 rounded-full">
                        {news.tag}
                      </span>
                      <span className="text-xs opacity-60 font-medium">{news.date}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                      {news.title}
                    </h3>

                    {/* Expandable detailed content */}
                    <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm leading-relaxed opacity-80 pt-2 border-t border-zinc-200/40">
                        {news.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <button 
                      onClick={() => setExpandedNews(isExpanded ? null : news.id)}
                      className="text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:underline"
                    >
                      {isExpanded ? "Close Story" : "Read Full Story"}
                    </button>
                    <div className="p-2.5 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-200">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* DIVISIONS & DIRECTIONS SECTION */}
      <section id="divisions" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        {/* Abstract Background Highlights */}
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-[#cfc5f0]/10 blur-3xl" />
        <div className="absolute left-1/4 top-1/4 w-72 h-72 rounded-full bg-[#5e4fa2]/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#cfc5f0]">Choose Your Path</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Directions To Flying Phoenix</h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              The basis of all the victories of the Flying Phoenix is team cohesion and incredible fan support. Our players are not just athletes, they are friends who are always ready to help each other.
            </p>
          </div>

          {/* Dynamic Selector Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-zinc-800">
            <button
              onClick={() => setActiveDivision('all')}
              className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeDivision === 'all' 
                  ? 'bg-[#cfc5f0] text-zinc-950 font-extrabold' 
                  : 'bg-zinc-900 text-zinc-400 hover:text-white'
              }`}
            >
              All Divisions
            </button>
            {divisions.map(div => (
              <button
                key={div.id}
                onClick={() => setActiveDivision(div.id)}
                className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeDivision === div.id 
                    ? 'bg-[#cfc5f0] text-zinc-950 font-extrabold' 
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                {div.title.split("'")[0]}
              </button>
            ))}
          </div>

          {/* Division Cards Display Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDivisions.map(div => (
              <div 
                key={div.id} 
                className="bg-zinc-900 rounded-3xl border border-zinc-800 p-5 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group hover:shadow-2xl"
              >
                <div className="space-y-4">
                  {/* Card Image */}
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                    <img 
                      src={div.image} 
                      alt={div.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <span className="absolute bottom-3 left-3 bg-zinc-950/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-md">
                      {div.age}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-[#cfc5f0] uppercase">{div.title}</h3>
                  
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Users className="w-3.5 h-3.5" />
                    <span>Level: <strong className="text-zinc-200">{div.level}</strong></span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-4">
                    {div.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase tracking-widest">Head Coach</span>
                    <span className="text-xs font-bold text-white">{div.coach}</span>
                  </div>
                  <button 
                    onClick={() => {
                      setFormData({...formData, division: div.id});
                      setIsJoinModalOpen(true);
                    }}
                    className="p-2 bg-zinc-800 rounded-full text-zinc-300 hover:text-zinc-950 hover:bg-[#cfc5f0] transition-all duration-200"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TRAINING SCHEDULE SECTION */}
      <section id="schedule" className="py-24 bg-[#F8F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5e4fa2]">Weekly Schedule</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">Training schedule</h2>
              <p className="text-zinc-500 text-sm max-w-md">
                View the schedule of all club trainings and choose the right time for classes. Introductory sessions are highlighted.
              </p>
            </div>
            
            <button 
              onClick={() => setIsJoinModalOpen(true)}
              className="mt-6 md:mt-0 bg-zinc-950 hover:bg-zinc-800 text-[#cfc5f0] text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm"
            >
              Open Schedule & Register
            </button>
          </div>

          {/* Interactive Day Selector tabs (resembles the schedule header layout) */}
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-zinc-100">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {Object.keys(scheduleData).map(day => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`py-3.5 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    selectedDay === day 
                      ? 'bg-zinc-950 text-white shadow-md' 
                      : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* List of training slots for the selected day */}
            <div className="mt-8 pt-6 border-t border-zinc-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scheduleData[selectedDay].map((slot, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-[#cfc5f0] transition-colors group flex justify-between items-center"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#cfc5f0]/50 text-[#5e4fa2] text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                          {slot.time}
                        </span>
                        <span className="text-xs text-zinc-500 font-medium">{slot.level}</span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-zinc-950 group-hover:text-[#5e4fa2] transition-colors">
                        {slot.program}
                      </h4>
                      
                      <div className="text-xs text-zinc-500 flex items-center gap-4">
                        <span>Coach: <strong className="text-zinc-700">{slot.coach}</strong></span>
                        <span className={`inline-flex items-center gap-1 font-medium ${
                          slot.spots === 'Filled' ? 'text-red-500' : 'text-emerald-600'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            slot.spots === 'Filled' ? 'bg-red-500' : 'bg-emerald-500'
                          }`} />
                          {slot.spots}
                        </span>
                      </div>
                    </div>

                    {slot.spots !== 'Filled' && (
                      <button 
                        onClick={() => {
                          setFormData({
                            ...formData,
                            experience: slot.level,
                            division: slot.program.toLowerCase().includes('men') ? 'men' : slot.program.toLowerCase().includes('women') ? 'women' : 'children'
                          });
                          setIsJoinModalOpen(true);
                        }}
                        className="bg-white hover:bg-zinc-950 hover:text-white text-zinc-800 p-3.5 rounded-full border border-zinc-200 transition-all duration-300 transform group-hover:scale-105"
                      >
                        <Calendar className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACTS / MAP SECTION */}
      <section id="contact" className="py-24 bg-zinc-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column 1: Info & Contact Form */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#cfc5f0]">Get in Touch</span>
                <h2 className="text-4xl font-extrabold tracking-tight">Reach Out to Us</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Have questions about trial memberships, advanced training, children's schedules, or corporate sponsorship packages? Write to us or drop by during office hours.
                </p>
              </div>

              {/* Quick Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-800 text-[#cfc5f0] rounded-xl mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider block">Address</span>
                    <p className="text-sm font-bold text-white mt-0.5">Eendrachtskade Zuidzijde 2a, 9726 CW Groningen, Netherlands</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-800 text-[#cfc5f0] rounded-xl mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider block">E-mail</span>
                    <a href="mailto:flyingphoenix@gmail.com" className="text-sm font-bold text-[#cfc5f0] hover:underline mt-0.5 block">flyingphoenix@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-800 text-[#cfc5f0] rounded-xl mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider block">Phone Contacts</span>
                    <p className="text-sm font-bold text-white mt-0.5">+31 6 5256 9634</p>
                  </div>
                </div>
              </div>

              {/* Mini Contact Form */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }} 
                className="bg-zinc-800/50 p-6 rounded-3xl border border-zinc-800 space-y-4"
              >
                <h4 className="text-sm font-bold text-[#cfc5f0] uppercase tracking-wider">Send a quick message</h4>
                {contactSubmitted ? (
                  <div className="bg-[#cfc5f0]/10 border border-[#cfc5f0]/30 p-4 rounded-xl text-center">
                    <p className="text-xs text-[#cfc5f0] font-bold">Thank you! Our coordinator will contact you shortly.</p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <input 
                        required
                        type="text" 
                        placeholder="Your Name" 
                        className="bg-zinc-900 border border-zinc-800 text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#cfc5f0]"
                      />
                      <input 
                        required
                        type="email" 
                        placeholder="Email Address" 
                        className="bg-zinc-900 border border-zinc-800 text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#cfc5f0]"
                      />
                    </div>
                    <textarea 
                      required
                      placeholder="How can we help you?" 
                      rows="3"
                      className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#cfc5f0] resize-none"
                    />
                    <button 
                      type="submit"
                      className="w-full bg-white text-zinc-900 font-bold uppercase text-[10px] tracking-wider py-3 px-4 rounded-xl hover:bg-zinc-100 transition-colors"
                    >
                      Send Message
                    </button>
                  </>
                )}
              </form>

            </div>

            {/* Column 2: Elegant SVG Map (Premium Vector Styling) */}
            <div className="lg:col-span-7 relative h-[450px] bg-zinc-950 rounded-[2.5rem] border border-zinc-800 overflow-hidden shadow-2xl">
              
              {/* Premium Dark Map UI Placeholder */}
              <div className="absolute inset-0 select-none bg-[#0a0a0c]">
                {/* Simulated Street Grid */}
                <svg className="w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Diagonal main avenues / rivers simulating Groningen context */}
                  <path d="M -50 150 Q 200 100 450 350 T 800 200" fill="none" stroke="#333" strokeWidth="18" />
                  <path d="M -50 150 Q 200 100 450 350 T 800 200" fill="none" stroke="#2a2a2d" strokeWidth="8" />
                  
                  {/* Water canals */}
                  <path d="M 100 500 C 250 300 350 200 600 -100" fill="none" stroke="#1c1f2e" strokeWidth="24" />
                  
                  {/* Secondary streets */}
                  <path d="M 50 -10 L 150 480" fill="none" stroke="#1f1f22" strokeWidth="4" />
                  <path d="M 350 -10 L 450 480" fill="none" stroke="#1f1f22" strokeWidth="4" />
                  <path d="M -20 280 L 700 320" fill="none" stroke="#1f1f22" strokeWidth="4" />
                </svg>

                {/* Grid Overlay Dots for UI depth */}
                <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

                {/* Pulse Pin Location indicator */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute inline-flex h-12 w-12 rounded-full bg-[#cfc5f0]/30 animate-ping" />
                    <span className="absolute inline-flex h-6 w-6 rounded-full bg-[#cfc5f0]/50 animate-ping" />
                    <div className="relative bg-zinc-950 border-2 border-[#cfc5f0] text-[#cfc5f0] p-3 rounded-full shadow-2xl">
                      <Volleyball className="w-6 h-6 animate-spin-slow" />
                    </div>
                  </div>
                  
                  {/* Card overlay details on map */}
                  <div className="mt-4 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl shadow-2xl w-60 text-center relative">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900 border-t border-l border-zinc-800 rotate-45" />
                    <p className="text-xs font-bold text-white">Phoenix Main Arena</p>
                    <p className="text-[10px] text-zinc-400 mt-1">Eendrachtskade Zuidzijde 2a</p>
                    <div className="mt-2 text-[9px] bg-emerald-500/10 text-emerald-400 font-bold tracking-widest uppercase inline-block px-2 py-0.5 rounded">
                      Open Training Center
                    </div>
                  </div>
                </div>

                {/* Map Controls representation for detail */}
                <div className="absolute right-4 bottom-4 bg-zinc-900/90 border border-zinc-800 rounded-xl p-2 flex flex-col gap-1.5 shadow-xl">
                  <button className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-extrabold text-sm flex items-center justify-center">+</button>
                  <button className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-extrabold text-sm flex items-center justify-center">-</button>
                </div>

                <div className="absolute left-4 top-4 bg-zinc-900/90 border border-zinc-800 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-xl">
                  <MapPinned className="w-4 h-4 text-[#cfc5f0]" />
                  <span className="text-[10px] text-zinc-300 font-medium tracking-wide">Interactive Map</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 text-zinc-500 border-t border-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Column 1: Logo & Vision */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2.5 bg-zinc-900 text-[#cfc5f0] rounded-xl">
                  <Volleyball className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold tracking-wider text-lg text-white uppercase leading-none">Flying</span>
                  <span className="text-[10px] tracking-[0.25em] font-medium text-zinc-400 uppercase leading-normal">Phoenix</span>
                </div>
              </div>
              <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                Empowering court intelligence, raw athleticism, and exceptional character in Groningen since 2012.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h5 className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Navigation</h5>
                <ul className="space-y-1.5 text-xs">
                  <li><a href="#about" className="hover:text-[#cfc5f0] transition-colors">About</a></li>
                  <li><a href="#news" className="hover:text-[#cfc5f0] transition-colors">News Feed</a></li>
                  <li><a href="#divisions" className="hover:text-[#cfc5f0] transition-colors">Divisions</a></li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Resources</h5>
                <ul className="space-y-1.5 text-xs">
                  <li><a href="#schedule" className="hover:text-[#cfc5f0] transition-colors">Weekly Schedule</a></li>
                  <li><a href="#contact" className="hover:text-[#cfc5f0] transition-colors">Contact Arena</a></li>
                  <li><button onClick={() => setIsJoinModalOpen(true)} className="hover:text-[#cfc5f0] transition-colors text-left">Join Club</button></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Social & Copyright */}
            <div className="md:col-span-3 space-y-4 md:text-right">
              <div className="flex md:justify-end gap-3">
                <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[10px] text-zinc-600">
                &copy; {new Date().getFullYear()} Flying Phoenix VC. All rights reserved.
              </p>
            </div>

          </div>

        </div>
      </footer>

      {/* REGISTRATION / JOIN THE TEAM STEPPED MODAL */}
      {isJoinModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] w-full max-w-xl overflow-hidden relative shadow-2xl border border-zinc-100 animate-fadeIn">
            
            {/* Header Area with Graphic Top Line resembling reference's pastel purple blocks */}
            <div className="bg-[#cfc5f0] p-8 text-zinc-950 relative">
              <button 
                onClick={resetForm}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/50 hover:bg-white text-zinc-900 transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-2 bg-white/40 border border-white/60 text-[#5e4fa2] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase inline-block mb-3">
                <Volleyball className="w-3.5 h-3.5" />
                <span>Join our flight</span>
              </div>

              <h3 className="text-3xl font-extrabold tracking-tight">Become a Phoenix</h3>
              <p className="text-zinc-800 text-xs mt-1.5 max-w-md">
                Complete your basic details to arrange a free private skill assessment session with our premier coaching staff.
              </p>
            </div>

            {/* Stepped Progress Bar */}
            <div className="bg-zinc-100 px-8 py-3 flex justify-between items-center border-b border-zinc-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Step {registrationSuccess ? 'Completed' : `${joinStep} of 2`}
              </span>
              <div className="flex gap-1.5">
                <div className={`w-12 h-1.5 rounded-full ${joinStep >= 1 ? 'bg-[#5e4fa2]' : 'bg-zinc-200'}`} />
                <div className={`w-12 h-1.5 rounded-full ${joinStep >= 2 ? 'bg-[#5e4fa2]' : 'bg-zinc-200'}`} />
              </div>
            </div>

            {/* Modal Form Content */}
            <div className="p-8">
              {registrationSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-[#cfc5f0]/50 text-[#5e4fa2] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#cfc5f0]">
                    <Check className="w-8 h-8 stroke-[3px]" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-zinc-950">Registration Successful!</h4>
                  <p className="text-sm text-zinc-500 max-w-sm mx-auto">
                    Welcome to the court! We have emailed you instructions for your trial schedule and coach coordinates. Bring your sportswear and energy!
                  </p>
                  <button 
                    onClick={resetForm}
                    className="mt-6 bg-zinc-950 hover:bg-zinc-800 text-white font-bold uppercase text-xs tracking-wider py-4 px-8 rounded-full transition-all duration-200"
                  >
                    Return to site
                  </button>
                </div>
              ) : (
                <form onSubmit={handleNextStep} className="space-y-5">
                  {joinStep === 1 ? (
                    <>
                      {/* Step 1: Personal Coordinates */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="e.g. Robin van Persie"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 p-4 rounded-2xl focus:outline-none focus:border-[#cfc5f0] transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Email Address</label>
                          <input 
                            required
                            type="email" 
                            placeholder="robin@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 p-4 rounded-2xl focus:outline-none focus:border-[#cfc5f0] transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Phone number</label>
                          <input 
                            required
                            type="tel" 
                            placeholder="+31 6 1234 5678"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 p-4 rounded-2xl focus:outline-none focus:border-[#cfc5f0] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="pt-4 border-t border-zinc-100 flex justify-end">
                        <button 
                          type="submit"
                          className="bg-zinc-950 hover:bg-zinc-800 text-white font-bold uppercase text-xs tracking-wider py-4 px-8 rounded-full transition-all duration-200 flex items-center gap-2"
                        >
                          Next Step <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Step 2: Sportive Preferences */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Target Division</label>
                        <select 
                          value={formData.division}
                          onChange={(e) => setFormData({...formData, division: e.target.value})}
                          className="w-full bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 p-4 rounded-2xl focus:outline-none focus:border-[#cfc5f0] transition-colors"
                        >
                          <option value="women">Women's Elite Team</option>
                          <option value="men">Men's Competitive Team</option>
                          <option value="children">Children's Academy</option>
                          <option value="beach">Beach Strategy & Play</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">Self-Assessed Skill Level</label>
                        <div className="grid grid-cols-3 gap-2.5 pt-2">
                          {['Beginner', 'Intermediate', 'Pro'].map(lvl => (
                            <button
                              type="button"
                              key={lvl}
                              onClick={() => setFormData({...formData, experience: lvl})}
                              className={`py-3 px-4 rounded-xl text-xs font-bold transition-all duration-200 border ${
                                formData.experience === lvl 
                                  ? 'bg-[#cfc5f0] text-zinc-950 border-[#b2a3e0]' 
                                  : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:bg-zinc-100'
                              }`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-zinc-100 flex justify-between items-center">
                        <button 
                          type="button"
                          onClick={() => setJoinStep(1)}
                          className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-800 transition-colors"
                        >
                          Go Back
                        </button>
                        <button 
                          type="submit"
                          className="bg-zinc-950 hover:bg-zinc-800 text-[#cfc5f0] font-bold uppercase text-xs tracking-wider py-4 px-8 rounded-full transition-all duration-200 flex items-center gap-2"
                        >
                          Submit Registration
                        </button>
                      </div>
                    </>
                  )}
                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

// Custom reusable SVG Plus icon for consistent design language
function PlusIcon(props) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}