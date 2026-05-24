import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  signInWithCustomToken, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  query 
} from 'firebase/firestore';
import { 
  Trees, 
  Compass, 
  Coins, 
  Home, 
  Users, 
  Globe, 
  ChevronRight, 
  ArrowRight, 
  Calculator, 
  MapPin, 
  Activity, 
  Calendar, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Droplets, 
  Wind, 
  Zap, 
  X, 
  Info,
  Layers,
  Phone
} from 'lucide-react';

// --- FIREBASE CONFIGURATION & INITIALIZATION ---
// Safe fallback configuration with environment variables
const firebaseConfig = typeof __firebase_config !== 'undefined' 
  ? JSON.parse(__firebase_config) 
  : {
      apiKey: "",
      authDomain: "default-app-id.firebaseapp.com",
      projectId: "default-app-id",
      storageBucket: "default-app-id.appspot.com",
      messagingSenderId: "1234567890",
      appId: "1:1234567890:web:abcdef"
    };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'verde-reserve-luxury';

// --- TRANSLATION DICTIONARY FOR PRESERVING ACCURATE TEXT ---
const translations = {
  RU: {
    title: "VERDE RESERVE",
    subtitle: "Элитный Лесной Резерват & Коттеджный Поселок",
    tagline: "Закрытый коттеджный поселок, объединивший преимущества загородной жизни с инфраструктурой мегаполиса.",
    navConcept: "Концепция",
    navPlan: "План застройки",
    navYield: "Доходность",
    navResidences: "Резиденции",
    navPortal: "Инвестор-Панель",
    bookTour: "Забронировать тур",
    totalTerritory: "Общая территория",
    totalTerritoryDesc: "Окруженный вековым хвойным лесом нетронутый природный заповедник.",
    residentialTerritory: "Жилая территория",
    residentialTerritoryDesc: "Гармонично вписанные участки премиум-класса с сохранением ландшафта.",
    avgPlotSize: "Средний размер участка",
    avgPlotSizeDesc: "Просторные лесные наделы для абсолютной приватности каждого резидента.",
    residencesCount: "Количество домовладений",
    residencesCountDesc: "Ограниченная клубная серия современных коттеджей в едином стиле.",
    conceptTitle: "КОНЦЕПЦИЯ",
    conceptSubtitle: "ГАРМОНИЯ ПРИРОДЫ И ТЕХНОЛОГИЙ",
    planTitle: "ПЛАН ЗАСТРОЙКИ",
    planSubtitle: "ПРОДУМАННОЕ ЗОНИРОВАНИЕ ТЕРРИТОРИИ",
    planCenterText: "ПРОДУМАННОЕ ЗОНИРОВАНИЕ ТЕРРИТОРИИ: ПРИВАТНАЯ ЖИЛАЯ ЗОНА, ОБЩЕСТВЕННОЕ ПРОСТРАНСТВО И СПОРТИВНО-ИГРОВОЙ КЛАССТЕР",
    yieldTitle: "ДОХОДНОСТЬ",
    yieldSubtitle: "ОЦЕНКА ИНВЕСТИЦИОННОГО ПОТЕНЦИАЛА",
    yieldText: "Средняя стоимость аренды коттеджа площадью 160-180 м² на Новорижском шоссе составляет 180 000 – 250 000 ₽/месяц.",
    yieldGoal: "Потенциальный годовой доход от сдачи объекта в аренду может достигать",
    yieldGoalVal: "2.8 МЛН ₽",
    yieldPercent: "Что обеспечивает доходность на уровне",
    yieldPercentVal: "9-11% ГОДОВЫХ",
    yieldBottomText: "ПРИ ТЕКУЩЕЙ СТОИМОСТИ ВХОДА",
    calcTitle: "Калькулятор доходности",
    calcPropertyPrice: "Стоимость коттеджа",
    calcMonthlyRent: "Ежемесячная аренда",
    calcOccupancy: "Заполняемость",
    calcAnnualIncome: "Ожидаемый годовой доход",
    calcRoi: "Чистая доходность (ROI)",
    calcPayback: "Окупаемость проекта",
    savePortfolio: "Зафиксировать расчет в реестре",
    recentDeals: "Активность инвесторов",
    privateTourTitle: "Эксклюзивный визит в Verde Reserve",
    privateTourDesc: "Выберите формат индивидуального показа. Мы организуем премиальный трансфер.",
    helicopter: "Вертолетный трансфер из Мякинино",
    maybach: "Представительский седан класса люкс",
    selfArrival: "Индивидуальный заезд по VIP-пропускам",
    fullName: "Ваше имя",
    phone: "Номер телефона",
    submitTour: "Оформить привилегированный доступ",
    residencesTitle: "АРХИТЕКТУРА",
    residencesSubtitle: "КЛУБНЫЕ РЕЗИДЕНЦИИ",
    typeA: "Коттеджи типа «А» (Бизнес) — 85 шт.",
    typeADesc: "Идеальный баланс эргономики и панорамного остекления. Просторные террасы с выходом к сосновому массиву.",
    typeB: "Коттеджи типа «Б» (Премиум) — 50 шт.",
    typeBDesc: "Усадьбы представительского класса со спа-комплексом, увеличенной высотой потолков (4.2м) и бассейном.",
    sportsCluster: "Спортивный кластер: воркаут, теннисный корт, футбольное поле",
    promenade: "Прогулочная набережная и пирс — 1.2 км",
    kidsClub: "Детский клуб — 450 м²",
    parking: "2 гостевых паркинга и центральный КПП",
    smartTitle: "SMART-СЕРВИСЫ",
    smartSubtitle: "ЭКОЛОГИЧЕСКИЙ МОНИТОРИНГ В РЕАЛЬНОМ ВРЕМЕНИ",
    airQuality: "Чистота воздуха (AQI)",
    greenEnergy: "Доля солнечной генерации",
    reservationsActive: "Активные бронирования визитов",
    close: "Закрыть",
    successMsg: "Заявка успешно принята в закрытую систему. Наш консьерж свяжется с вами в течение 10 минут."
  },
  EN: {
    title: "VERDE RESERVE",
    subtitle: "Elite Forest Reserve & Cottage Community",
    tagline: "A private gated community blending the absolute serenity of nature with seamless metropolitan high-tech infrastructure.",
    navConcept: "Concept",
    navPlan: "Development Plan",
    navYield: "Financial Yield",
    navResidences: "Residences",
    navPortal: "Investor Hub",
    bookTour: "Book Private Tour",
    totalTerritory: "Total Area",
    totalTerritoryDesc: "Unspoiled natural forest reserve fully enclosed and protected.",
    residentialTerritory: "Residential Land",
    residentialTerritoryDesc: "Harmoniously integrated luxury plots, preserving mature pine landscape.",
    avgPlotSize: "Average Plot Size",
    avgPlotSizeDesc: "Generous forest allocations ensuring absolute privacy and distance.",
    residencesCount: "Total Properties",
    residencesCountDesc: "A limited, highly curated collection of architectural masterpieces.",
    conceptTitle: "CONCEPT",
    conceptSubtitle: "HARMONY OF NATURE & ECO-DESIGN",
    planTitle: "ZONING PLAN",
    planSubtitle: "THOUGHTFUL LAND ALLOCATION",
    planCenterText: "METICULOUS TERRITORY ZONING: PRIVATE RESIDENTIAL BLOCKS, PUBLIC WATERFRONT SPACES, AND ACTIVE SPORTS PARK",
    yieldTitle: "INVESTMENT YIELD",
    yieldSubtitle: "FINANCIAL FORECAST & GROWTH",
    yieldText: "Average luxury cottage rental (160-180 m²) on Novorizhskoye Highway spans 180,000 – 250,000 ₽/month.",
    yieldGoal: "Potential annual rental income for a standard villa reaches up to",
    yieldGoalVal: "2.8M ₽",
    yieldPercent: "Providing a guaranteed conservative yield of",
    yieldPercentVal: "9-11% PER ANNUM",
    yieldBottomText: "BASED ON CURRENT EARLY-ENTRY VALUATIONS",
    calcTitle: "Yield & ROI Engine",
    calcPropertyPrice: "Property Valuation",
    calcMonthlyRent: "Projected Monthly Rent",
    calcOccupancy: "Occupancy Rate",
    calcAnnualIncome: "Projected Annual Return",
    calcRoi: "Net Return on Investment (ROI)",
    calcPayback: "Estimated Payback Period",
    savePortfolio: "Log Valuation to Live Ledger",
    recentDeals: "Live Investor Activity",
    privateTourTitle: "Exquisite Private Visit",
    privateTourDesc: "Select your preferred arrival. We coordinate white-glove executive transportation.",
    helicopter: "Helicopter Transfer from Myakinino Heliport",
    maybach: "Executive Chauffeur (Mercedes-Maybach S-Class)",
    selfArrival: "Private Vehicle Entry via Digital VIP Pass",
    fullName: "Full Name",
    phone: "Phone Number",
    submitTour: "Request Elite Priority Access",
    residencesTitle: "ARCHITECTURES",
    residencesSubtitle: "SIGNATURE VILLAS",
    typeA: "Cottages Type 'A' (Business) — 85 Units",
    typeADesc: "Ideal spatial flow with custom floor-to-ceiling glass. Expansive decks leading straight to the woodlands.",
    typeB: "Cottages Type 'B' (Premium) — 50 Units",
    typeBDesc: "Palatial multi-generational estates featuring master wellness spas, 4.2m ceilings, and negative-edge heated pools.",
    sportsCluster: "Sports Cluster: Pro Gym, Tennis Courts, Soccer Turf",
    promenade: "Lakeside Promenade & Boat Dock — 1.2 KM",
    kidsClub: "Forest Explorers Kids Club — 450 m²",
    parking: "Dual Guest Helipads, Parking & Executive Checkpoint",
    smartTitle: "RESIDENTIAL API",
    smartSubtitle: "REAL-TIME ECOLOGICAL & METRIC DASHBOARD",
    airQuality: "Air Purity Index (AQI)",
    greenEnergy: "Solar Grid Integration",
    reservationsActive: "Active Guest Screenings",
    close: "Close",
    successMsg: "Your registration has been locked. An estate manager will connect shortly."
  }
};

export default function App() {
  const [lang, setLang] = useState('RU');
  const t = translations[lang];

  // Application Navigation
  const [activeTab, setActiveTab] = useState('concept'); // 'concept' | 'plan' | 'yield' | 'residences' | 'portal'
  
  // Interactive Stats Highlights from Slide 1
  const [selectedStat, setSelectedStat] = useState('residential'); // 'total' | 'residential' | 'plot' | 'houses'

  // Interactive Plan Highlights from Slide 2
  const [selectedZone, setSelectedZone] = useState('cottageA'); // 'sports' | 'cottageA' | 'promenade' | 'parking' | 'cottageB' | 'kidsClub'

  // Dynamic Calculator States from Slide 3
  const [propertyPrice, setPropertyPrice] = useState(24000000); // in rubles
  const [monthlyRent, setMonthlyRent] = useState(210000); // in rubles
  const [occupancyRate, setOccupancyRate] = useState(82); // percentage

  // Selected Residence for Floorplan Exploration
  const [selectedResidenceTab, setSelectedResidenceTab] = useState('A'); // 'A' | 'B'
  const [hoveredRoom, setHoveredRoom] = useState(null);

  // Booking Modal
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [tourMethod, setTourMethod] = useState('maybach');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Firestore / User state
  const [user, setUser] = useState(null);
  const [savedInvestments, setSavedInvestments] = useState([]);
  const [savedTours, setSavedTours] = useState([]);
  const [activeNotification, setActiveNotification] = useState(null);

  // Environment metrics
  const [airQuality, setAirQuality] = useState(98);
  const [solarYield, setSolarYield] = useState(74);

  // Floating forest particles for organic cinematic vibe
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 10,
      duration: Math.random() * 20 + 15,
      opacity: Math.random() * 0.4 + 0.1
    }));
    setParticles(generated);

    // Keep air quality dynamic
    const interval = setInterval(() => {
      setAirQuality(prev => Math.min(100, Math.max(94, prev + (Math.random() * 2 - 1))));
      setSolarYield(prev => Math.min(100, Math.max(60, prev + (Math.random() * 4 - 2))));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- FIREBASE INTEGRATION IMPLEMENTATION ---
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (err) {
        console.error("Firebase Auth Error", err);
      }
    };
    initAuth();

    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribeAuth();
  }, []);

  // Sync real-time data when user auth is ready
  useEffect(() => {
    if (!user) return;

    // Load logged investments
    const investmentsQuery = query(
      collection(db, 'artifacts', appId, 'public', 'data', 'investments')
    );
    const unsubscribeInvestments = onSnapshot(
      investmentsQuery, 
      (snapshot) => {
        const list = [];
        snapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setSavedInvestments(list.slice(-10)); // keep last 10 in feed
      },
      (error) => console.error("Firestore loading error: ", error)
    );

    // Load active tours
    const toursQuery = query(
      collection(db, 'artifacts', appId, 'public', 'data', 'tours')
    );
    const unsubscribeTours = onSnapshot(
      toursQuery,
      (snapshot) => {
        const list = [];
        snapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setSavedTours(list.slice(-8));
      },
      (error) => console.error("Firestore tours loading error: ", error)
    );

    return () => {
      unsubscribeInvestments();
      unsubscribeTours();
    };
  }, [user]);

  // Handle calculator investment logging to Firestore
  const handleSavePortfolio = async () => {
    if (!user) return;
    try {
      const calculatedAnnual = Math.round(monthlyRent * 12 * (occupancyRate / 100));
      const calculatedRoi = ((calculatedAnnual / propertyPrice) * 100).toFixed(1);
      
      const payload = {
        investorLabel: `Investor-${Math.floor(1000 + Math.random() * 9000)}`,
        propertyPrice,
        monthlyRent,
        occupancyRate,
        annualIncome: calculatedAnnual,
        roi: Number(calculatedRoi),
        timestamp: Date.now()
      };

      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'investments'), payload);
      triggerToast(lang === 'RU' ? "Портфель сохранен в глобальном реестре!" : "Investment layout logged to global registry!");
    } catch (err) {
      console.error("Error logging investment", err);
    }
  };

  // Handle VIP Tour booking to Firestore
  const handleBookTour = async (e) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    if (!user) return;

    try {
      const payload = {
        name: clientName,
        phone: clientPhone,
        method: tourMethod,
        timestamp: Date.now(),
        status: 'Approved'
      };

      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'tours'), payload);
      setFormSuccess(true);
      setClientName('');
      setClientPhone('');
      setTimeout(() => {
        setFormSuccess(false);
        setIsTourModalOpen(false);
      }, 4000);
    } catch (err) {
      console.error("Error logging tour booking", err);
    }
  };

  const triggerToast = (msg) => {
    setActiveNotification(msg);
    setTimeout(() => {
      setActiveNotification(null);
    }, 4000);
  };

  // Interactive computations
  const annualIncome = Math.round(monthlyRent * 12 * (occupancyRate / 100));
  const currentRoi = ((annualIncome / propertyPrice) * 100).toFixed(1);
  const paybackPeriod = (propertyPrice / annualIncome).toFixed(1);

  return (
    <div className="min-h-screen bg-[#060D08] text-white font-sans relative overflow-hidden select-none selection:bg-[#D99E30]/30 selection:text-white">
      
      {/* Cinematic Organic Particle Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.3)] animate-float"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Floating Sparkles and Lighting overlays */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-gradient-radial from-emerald-950/40 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[70%] bg-gradient-radial from-amber-950/25 via-transparent to-transparent pointer-events-none z-0" />

      {/* GLOBAL TOAST */}
      {activeNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0E1B12] border border-[#D99E30]/40 px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 animate-fade-in-up backdrop-blur-md">
          <Sparkles className="text-[#D99E30] animate-pulse w-5 h-5" />
          <span className="text-sm tracking-wider text-stone-200 font-light">{activeNotification}</span>
        </div>
      )}

      {/* EXECUTIVE TOP NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#060D08]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Elite Brand Signature */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('concept')}>
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-tr from-[#142A1C] to-[#254F35] border border-[#D99E30]/30 flex items-center justify-center overflow-hidden group">
              <Trees className="w-5 h-5 text-[#D99E30] group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#D99E30]/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-[0.25em] text-white">VERDE</h1>
              <p className="text-[9px] tracking-[0.4em] text-[#D99E30] font-light -mt-1">RESERVE</p>
            </div>
          </div>

          {/* Desktop Interactive Tabs */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/5 p-1 rounded-full border border-white/5">
            {[
              { id: 'concept', label: t.navConcept },
              { id: 'plan', label: t.navPlan },
              { id: 'residences', label: t.navResidences },
              { id: 'yield', label: t.navYield },
              { id: 'portal', label: t.navPortal }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-[#D99E30] to-[#B07E20] text-black shadow-lg shadow-[#D99E30]/20 font-semibold' 
                    : 'text-stone-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Right Accessories */}
          <div className="flex items-center space-x-4">
            {/* Live Environment Gauges */}
            <div className="hidden lg:flex items-center space-x-4 text-[11px] font-mono tracking-widest text-stone-400 border-r border-white/10 pr-4">
              <div className="flex items-center space-x-1">
                <Wind className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>AQI:</span>
                <span className="text-emerald-400 font-bold">{Math.round(airQuality)}%</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>SOLAR:</span>
                <span className="text-amber-400 font-bold">{Math.round(solarYield)}%</span>
              </div>
            </div>

            {/* Language Toggle */}
            <button 
              onClick={() => {
                setLang(prev => prev === 'RU' ? 'EN' : 'RU');
                triggerToast(lang === 'RU' ? "Language changed to English" : "Язык изменен на Русский");
              }}
              className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs tracking-widest font-mono text-stone-300 hover:text-[#D99E30] hover:border-[#D99E30]/30 transition-all"
            >
              <Globe className="w-3.5 h-3.5 inline mr-1" />
              {lang}
            </button>

            {/* Premium CTA */}
            <button 
              onClick={() => setIsTourModalOpen(true)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#173020] to-[#0D1C12] border border-[#D99E30]/30 text-xs font-semibold tracking-wider uppercase text-white hover:border-[#D99E30] transition-all hover:shadow-[0_0_15px_rgba(217,158,48,0.2)] flex items-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D99E30]" />
              <span className="hidden sm:inline">{t.bookTour}</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 py-8 relative z-20">

        {/* ======================================= */}
        {/* HERO / CONCEPT SECTION (SLIDE 1 VISUALS) */}
        {/* ======================================= */}
        {activeTab === 'concept' && (
          <div className="space-y-12 animate-fade-in">
            
            {/* Slide Header Vibe */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#09150E] to-[#040A06] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Premium Background image decoration mimicking natural organic woods in inspiration image */}
              <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" 
                   style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              
              {/* Cinematic Glow Behind Concept Text */}
              <div className="absolute top-[20%] left-[10%] w-[180px] h-[180px] bg-emerald-500/15 blur-[80px] rounded-full pointer-events-none" />

              <div className="space-y-6 max-w-xl z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D99E30] animate-ping" />
                  <span className="text-[10px] tracking-widest font-semibold text-[#D99E30] uppercase">VERDE PRESENCE</span>
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-black tracking-[0.15em] text-white leading-none">
                    {t.conceptTitle}
                  </h1>
                  <p className="text-xs tracking-[0.5em] text-[#D99E30] font-light uppercase mt-2">
                    {t.conceptSubtitle}
                  </p>
                </div>
                <p className="text-stone-300 font-light text-base md:text-lg leading-relaxed border-l-2 border-[#D99E30]/50 pl-4">
                  {t.tagline}
                </p>
              </div>

              {/* Atmospheric side card simulating modern architecture nested in forest */}
              <div className="relative w-full md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl z-10">
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" 
                  alt="Luxury Forest Villa" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <p className="text-[10px] uppercase tracking-widest text-[#D99E30] font-semibold">Location / Локация</p>
                  <p className="text-xs text-white tracking-wider mt-0.5">Новорижское шоссе, 45 км от МКАД / 45km from MKAD</p>
                </div>
              </div>
            </div>

            {/* THE FOUR SIGNATURE HERO METRICS FROM SLIDE 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Stat 1: 24 HA */}
              <div 
                onClick={() => setSelectedStat('total')}
                className={`relative rounded-2xl p-8 border cursor-pointer transition-all duration-500 overflow-hidden ${
                  selectedStat === 'total' 
                    ? 'border-[#D99E30] bg-[#0A160F] shadow-[0_0_30px_rgba(217,158,48,0.15)] scale-[1.02]' 
                    : 'border-white/5 bg-[#080E0A] hover:border-white/20'
                }`}
              >
                {/* Organic branch background silhouette effect */}
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                  <Trees className="w-32 h-32 text-emerald-600" />
                </div>
                <p className="text-5xl font-black tracking-tighter text-white">24 ГА</p>
                <div className="h-0.5 w-12 bg-[#D99E30] my-4" />
                <h3 className="text-xs tracking-widest uppercase font-semibold text-[#D99E30]">{t.totalTerritory}</h3>
                <p className="text-stone-400 text-xs font-light mt-2 leading-relaxed">{t.totalTerritoryDesc}</p>
                
                {selectedStat === 'total' && (
                  <div className="absolute top-3 right-3 text-[#D99E30] animate-pulse">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Stat 2: 16 HA - SOLID YELLOW/AMBER HIGHLIGHT ACCORDING TO SLIDE 1 */}
              <div 
                onClick={() => setSelectedStat('residential')}
                className={`relative rounded-2xl p-8 cursor-pointer transition-all duration-500 overflow-hidden ${
                  selectedStat === 'residential' 
                    ? 'bg-gradient-to-b from-[#D99E30] to-[#B07E20] text-black shadow-[0_0_40px_rgba(217,158,48,0.3)] scale-[1.02]' 
                    : 'border border-white/5 bg-[#080E0A] hover:border-white/20'
                }`}
              >
                <p className={`text-5xl font-black tracking-tighter ${selectedStat === 'residential' ? 'text-black' : 'text-white'}`}>16 ГА</p>
                <div className={`h-0.5 w-12 my-4 ${selectedStat === 'residential' ? 'bg-black' : 'bg-[#D99E30]'}`} />
                <h3 className={`text-xs tracking-widest uppercase font-bold ${selectedStat === 'residential' ? 'text-stone-900' : 'text-[#D99E30]'}`}>{t.residentialTerritory}</h3>
                <p className={`text-xs font-light mt-2 leading-relaxed ${selectedStat === 'residential' ? 'text-stone-900/90' : 'text-stone-400'}`}>{t.residentialTerritoryDesc}</p>

                {selectedStat === 'residential' && (
                  <div className="absolute top-3 right-3 text-black">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Stat 3: 12 SOTOK */}
              <div 
                onClick={() => setSelectedStat('plot')}
                className={`relative rounded-2xl p-8 border cursor-pointer transition-all duration-500 overflow-hidden ${
                  selectedStat === 'plot' 
                    ? 'border-[#D99E30] bg-[#0A160F] shadow-[0_0_30px_rgba(217,158,48,0.15)] scale-[1.02]' 
                    : 'border-white/5 bg-[#080E0A] hover:border-white/20'
                }`}
              >
                <p className="text-5xl font-black tracking-tighter text-white">12 СОТОК</p>
                <div className="h-0.5 w-12 bg-[#D99E30] my-4" />
                <h3 className="text-xs tracking-widest uppercase font-semibold text-[#D99E30]">{t.avgPlotSize}</h3>
                <p className="text-stone-400 text-xs font-light mt-2 leading-relaxed">{t.avgPlotSizeDesc}</p>

                {selectedStat === 'plot' && (
                  <div className="absolute top-3 right-3 text-[#D99E30] animate-pulse">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Stat 4: 135 HOUSES */}
              <div 
                onClick={() => setSelectedStat('houses')}
                className={`relative rounded-2xl p-8 border cursor-pointer transition-all duration-500 overflow-hidden ${
                  selectedStat === 'houses' 
                    ? 'border-[#D99E30] bg-[#0A160F] shadow-[0_0_30px_rgba(217,158,48,0.15)] scale-[1.02]' 
                    : 'border-white/5 bg-[#080E0A] hover:border-white/20'
                }`}
              >
                <p className="text-5xl font-black tracking-tighter text-white">135 ШТ.</p>
                <div className="h-0.5 w-12 bg-[#D99E30] my-4" />
                <h3 className="text-xs tracking-widest uppercase font-semibold text-[#D99E30]">{t.residencesCount}</h3>
                <p className="text-stone-400 text-xs font-light mt-2 leading-relaxed">{t.residencesCountDesc}</p>

                {selectedStat === 'houses' && (
                  <div className="absolute top-3 right-3 text-[#D99E30] animate-pulse">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>

            {/* EXPANDABLE CONTEXT DRAWER BASED ON ACTIVE STAT */}
            <div className="rounded-2xl border border-white/5 bg-[#080F0B] p-6 md:p-8 shadow-xl animate-fade-in relative overflow-hidden">
              <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />
              
              {selectedStat === 'total' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Flora Preservation / Флора</span>
                    <h4 className="text-lg font-bold text-white uppercase">Заповедный сосновый бор</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Более 85% территории покрыто взрослыми хвойными деревьями высотой до 25 метров. Каждое дерево прошло лазерное сканирование для минимизации воздействия при строительстве.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Elevation / Ландшафт</span>
                    <h4 className="text-lg font-bold text-white uppercase">Перепады высот до 18м</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Естественный холмистый ландшафт выгодно подчеркивает видовые характеристики каждого участка, предотвращая избыточное скопление влаги и создавая приватные ниши.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Ecology / Чистота</span>
                    <h4 className="text-lg font-bold text-white uppercase">Экологический сертификат A+</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Качество воздуха соответствует нормативам лучших швейцарских лесных курортов. Отсутствие промышленных предприятий на расстоянии 70 км по розе ветров.</p>
                  </div>
                </div>
              )}

              {selectedStat === 'residential' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-black font-semibold bg-[#D99E30] px-1.5 py-0.5 rounded uppercase">Masterplan / План</span>
                    <h4 className="text-lg font-bold text-[#D99E30] uppercase">Умное межевание</h4>
                    <p className="text-stone-200 text-xs font-light leading-relaxed">Вся жилая площадь спроектирована по системе кластеров, разделенных зелеными буферными коридорами шириной не менее 15 метров, что исключает эффект "окна в окна".</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-black font-semibold bg-[#D99E30] px-1.5 py-0.5 rounded uppercase">Roads / Инфраструктура</span>
                    <h4 className="text-lg font-bold text-[#D99E30] uppercase">Широкие бульвары</h4>
                    <p className="text-stone-200 text-xs font-light leading-relaxed">Асфальтовое покрытие премиального класса шириной 7 метров с велодорожками, прогулочными тротуарами из колотой гранитной брусчатки и скрытой ливневой канализацией.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-black font-semibold bg-[#D99E30] px-1.5 py-0.5 rounded uppercase">Utilities / Коммуникации</span>
                    <h4 className="text-lg font-bold text-[#D99E30] uppercase">Подземная инженерия</h4>
                    <p className="text-stone-200 text-xs font-light leading-relaxed">Все коммуникации (электричество 20-30 кВт на участок, оптоволоконный интернет, магистральный газ, центральное водоснабжение и канализация) проложены под землей.</p>
                  </div>
                </div>
              )}

              {selectedStat === 'plot' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Plot Boundaries / Межи</span>
                    <h4 className="text-lg font-bold text-white uppercase">Отсутствие глухих заборов</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Для сохранения единой гармоничной экосистемы границы участков оформляются живыми изгородями из туй, можжевельника и низкого светопрозрачного 3D-ограждения.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Individual Design / Дизайн</span>
                    <h4 className="text-lg font-bold text-white uppercase">Код застройки FL-12</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Каждый участок допускает интеграцию индивидуального ландшафтного дизайна с условием сохранения не менее 60% взрослых хвойных насаждений на пятне застройки.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Solitude / Уединение</span>
                    <h4 className="text-lg font-bold text-white uppercase">Приватные выходы в лес</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Участки первой линии имеют собственные калитки с бесконтактным биометрическим доступом непосредственно в заповедную зону лесного массива.</p>
                  </div>
                </div>
              )}

              {selectedStat === 'houses' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Styles / Архитектура</span>
                    <h4 className="text-lg font-bold text-white uppercase">Органический модернизм</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Используются только благородные долговечные материалы: сибирская лиственница планкен, натуральный сланец, керамогранит увеличенного формата и закаленное стекло.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Smart Control / Умный Дом</span>
                    <h4 className="text-lg font-bold text-white uppercase">Интеграция по умолчанию</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Каждая вилла оснащена контроллерами защиты от протечек, умным отоплением, датчиками присутствия и единым центром мониторинга с интеграцией в Apple HomeKit / Алису.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Glazing / Остекление</span>
                    <h4 className="text-lg font-bold text-white uppercase">Портальные системы Schüco</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Энергоэффективные двухкамерные стеклопакеты с аргоновым наполнением и нано-напылением серебра, отражающим избыточный ультрафиолет летом и сохраняющим тепло зимой.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Quick action to push forward */}
            <div className="flex justify-center pt-4">
              <button 
                onClick={() => setActiveTab('plan')}
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#11261A] to-[#0A160F] border border-white/10 hover:border-[#D99E30]/40 text-sm font-semibold tracking-wider uppercase text-white hover:text-[#D99E30] transition-all duration-300 flex items-center space-x-3 shadow-xl"
              >
                <span>Перейти к интерактивному плану застройки</span>
                <ChevronRight className="w-4 h-4 text-[#D99E30] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>
        )}

        {/* ======================================= */}
        {/* INTERACTIVE PLAN / ZONING (SLIDE 2)      */}
        {/* ======================================= */}
        {activeTab === 'plan' && (
          <div className="space-y-12 animate-fade-in">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/20">
                <Compass className="w-4 h-4 text-[#D99E30] inline mr-1 animate-spin-slow" />
                <span className="text-[10px] tracking-widest font-mono text-[#D99E30] uppercase">Interactive Map / Интерактивная карта</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-wider text-white uppercase">{t.planTitle}</h2>
              <p className="text-xs tracking-[0.3em] text-[#D99E30] font-light uppercase">{t.planSubtitle}</p>
            </div>

            {/* RADIAL ZONING CONTAINER (COPYING THE SIGNATURE CIRCULAR LAYOUT OF SLIDE 2) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative">
              
              {/* Central Circle with Orbit Elements */}
              <div className="lg:col-span-7 flex justify-center items-center py-6 relative min-h-[450px]">
                
                {/* Background Ring Effects */}
                <div className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full border border-white/5 animate-spin-slow" />
                <div className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full border border-[#D99E30]/10" />
                
                {/* Center Core Display Frame */}
                <div className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border-2 border-[#D99E30] shadow-[0_0_30px_rgba(217,158,48,0.25)] bg-[#0A160F] z-10 p-2 flex flex-col items-center justify-center text-center">
                  <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    <img 
                      src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=400" 
                      alt="Luxury construction details"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0A160F]/90" />
                  
                  {/* Real-time Dynamic text in Center of Circle */}
                  <div className="relative z-10 px-4 space-y-2">
                    <p className="text-[9px] tracking-widest text-[#D99E30] uppercase font-bold">Verde Hub</p>
                    <p className="text-[11px] md:text-xs text-stone-200 font-light leading-relaxed">
                      {t.planCenterText}
                    </p>
                  </div>
                </div>

                {/* RADIAL INTERACTIVE NODES (Positioned absolutely around the center) */}
                {[
                  { id: 'cottageA', label: "Тип А (Бизнес)", angle: 0, x: '82%', y: '50%' },
                  { id: 'sports', label: "Спортивный кластер", angle: 60, x: '66%', y: '16%' },
                  { id: 'promenade', label: "Набережная (1.2км)", angle: 120, x: '34%', y: '16%' },
                  { id: 'parking', label: "КПП и Паркинг", angle: 180, x: '18%', y: '50%' },
                  { id: 'cottageB', label: "Тип Б (Премиум)", angle: 240, x: '34%', y: '84%' },
                  { id: 'kidsClub', label: "Детский клуб", angle: 300, x: '66%', y: '84%' },
                ].map((node) => {
                  const isActive = selectedZone === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedZone(node.id)}
                      style={{ left: node.x, top: node.y }}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 flex flex-col items-center group`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${
                        isActive 
                          ? 'bg-[#D99E30] text-black border-white shadow-[0_0_20px_rgba(217,158,48,0.5)] scale-125' 
                          : 'bg-[#0E1B12] text-stone-400 border-white/10 group-hover:border-[#D99E30]/50 group-hover:scale-110'
                      }`}>
                        <span className="text-[11px] font-mono font-bold">
                          {node.id === 'cottageA' ? 'A' : node.id === 'cottageB' ? 'B' : node.id === 'sports' ? 'SP' : node.id === 'promenade' ? 'PR' : node.id === 'parking' ? 'PK' : 'KC'}
                        </span>
                      </div>
                      
                      {/* Interactive Pointer Line */}
                      {isActive && (
                        <div className="absolute w-[2px] bg-gradient-to-t from-[#D99E30] to-transparent h-12 bottom-9 pointer-events-none animate-pulse" />
                      )}

                      <span className={`text-[9px] md:text-[10px] tracking-wider uppercase font-medium mt-1.5 px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${
                        isActive 
                          ? 'bg-[#D99E30]/20 text-[#D99E30] border border-[#D99E30]/30 font-semibold' 
                          : 'bg-black/40 text-stone-300 group-hover:text-white'
                      }`}>
                        {node.label}
                      </span>
                    </button>
                  );
                })}

              </div>

              {/* Dynamic Side Card Describing Selected Area */}
              <div className="lg:col-span-5 space-y-6 z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#D99E30]/10 border border-[#D99E30]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D99E30] animate-pulse" />
                  <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Zone Breakdown / Описание зоны</span>
                </div>

                {selectedZone === 'cottageA' && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold tracking-wide text-white">{t.typeA}</h3>
                    <p className="text-stone-300 font-light text-sm leading-relaxed">{t.typeADesc}</p>
                    <div className="rounded-xl overflow-hidden border border-white/10 relative h-[180px]">
                      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" alt="Cottage Type A" className="w-full h-full object-cover" />
                    </div>
                    <ul className="grid grid-cols-2 gap-3 text-xs text-stone-300 font-light font-mono">
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Площадь: 160-180 м²</span></li>
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Этажность: 2</span></li>
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Участок: 8-12 соток</span></li>
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Каминный зал</span></li>
                    </ul>
                  </div>
                )}

                {selectedZone === 'cottageB' && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold tracking-wide text-[#D99E30]">{t.typeB}</h3>
                    <p className="text-stone-200 font-light text-sm leading-relaxed">{t.typeBDesc}</p>
                    <div className="rounded-xl overflow-hidden border border-white/10 relative h-[180px]">
                      <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600" alt="Cottage Type B" className="w-full h-full object-cover" />
                    </div>
                    <ul className="grid grid-cols-2 gap-3 text-xs text-stone-200 font-light font-mono">
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Площадь: 220-250 м²</span></li>
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Спа-зона & бассейн</span></li>
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Участок: 12-16 соток</span></li>
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Второй свет</span></li>
                    </ul>
                  </div>
                )}

                {selectedZone === 'sports' && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold tracking-wide text-white">{t.sportsCluster}</h3>
                    <p className="text-stone-300 font-light text-sm leading-relaxed">Современная спортивная арена под открытым небом с профессиональным полиуретановым покрытием премиум-класса, освещением в темное время суток и зоной уличных тренажеров воркаут.</p>
                    <div className="rounded-xl overflow-hidden border border-white/10 relative h-[180px]">
                      <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600" alt="Sports Turf" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}

                {selectedZone === 'promenade' && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold tracking-wide text-white">{t.promenade}</h3>
                    <p className="text-stone-300 font-light text-sm leading-relaxed">Благоустроенный променад из лиственницы вдоль чистого лесного озера. Пляжная зона с шезлонгами, лодочным причалом и террасами для занятий утренней йогой.</p>
                    <div className="rounded-xl overflow-hidden border border-white/10 relative h-[180px]">
                      <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600" alt="Lake Promenade" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}

                {selectedZone === 'kidsClub' && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold tracking-wide text-white">{t.kidsClub}</h3>
                    <p className="text-stone-300 font-light text-sm leading-relaxed">Инновационное детское пространство, ориентированное на развитие творческого мышления по системе Монтессори. Детские городки из натурального дерева от ведущих европейских бюро.</p>
                    <div className="rounded-xl overflow-hidden border border-white/10 relative h-[180px]">
                      <img src="https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=600" alt="Kids Playground" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}

                {selectedZone === 'parking' && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold tracking-wide text-white">{t.parking}</h3>
                    <p className="text-stone-300 font-light text-sm leading-relaxed">Безопасность высшего уровня обеспечивается собственной военизированной службой охраны. Автоматизированные КПП с распознаванием номеров, тепловизорами и гостевыми зарядками для электромобилей.</p>
                    <div className="rounded-xl overflow-hidden border border-white/10 relative h-[180px]">
                      <img src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=600" alt="Smart Security" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}

                <button 
                  onClick={() => setActiveTab('residences')}
                  className="w-full py-3 text-center text-xs tracking-wider uppercase font-semibold bg-white/5 hover:bg-[#D99E30]/10 border border-white/10 hover:border-[#D99E30]/40 text-stone-200 hover:text-[#D99E30] rounded-xl transition-all"
                >
                  Исследовать планировки резиденций
                </button>

              </div>
            </div>

          </div>
        )}

        {/* ======================================= */}
        {/* RESIDENCES / ARCHITECTURES SECTION      */}
        {/* ======================================= */}
        {activeTab === 'residences' && (
          <div className="space-y-12 animate-fade-in">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/20">
                <Home className="w-4 h-4 text-[#D99E30] inline mr-1" />
                <span className="text-[10px] tracking-widest font-mono text-[#D99E30] uppercase">Architectural Range / Каталог</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-wider text-white uppercase">{t.residencesTitle}</h2>
              <p className="text-xs tracking-[0.3em] text-[#D99E30] font-light uppercase">{t.residencesSubtitle}</p>
            </div>

            {/* Cottage Selector Switch */}
            <div className="flex justify-center">
              <div className="inline-flex bg-white/5 p-1.5 rounded-xl border border-white/10">
                <button 
                  onClick={() => setSelectedResidenceTab('A')}
                  className={`px-6 py-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-all ${selectedResidenceTab === 'A' ? 'bg-[#D99E30] text-black shadow-lg shadow-[#D99E30]/20' : 'text-stone-300 hover:text-white'}`}
                >
                  Type A (Business)
                </button>
                <button 
                  onClick={() => setSelectedResidenceTab('B')}
                  className={`px-6 py-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-all ${selectedResidenceTab === 'B' ? 'bg-[#D99E30] text-black shadow-lg shadow-[#D99E30]/20' : 'text-stone-300 hover:text-white'}`}
                >
                  Type B (Premium)
                </button>
              </div>
            </div>

            {/* INTERACTIVE VECTOR FLOORPLAN EXPLORER */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 md:p-10 rounded-3xl border border-white/5 shadow-2xl items-center">
              
              {/* Floorplan SVG Visualization on Left */}
              <div className="lg:col-span-7 flex flex-col items-center space-y-6">
                <span className="text-xs font-mono tracking-widest text-[#D99E30] uppercase">
                  Interactive Floorplan Layout / Интерактивный интерактивный план (Наведите на зоны)
                </span>
                
                {/* Custom Scalable Vector Floorplan with Hover Highlighting */}
                <div className="relative w-full max-w-[450px] aspect-square bg-black/40 rounded-2xl border border-white/10 p-6 flex items-center justify-center">
                  <svg viewBox="0 0 400 400" className="w-full h-full text-stone-300">
                    {/* Outline Border of the House */}
                    <rect x="20" y="20" width="360" height="360" rx="16" fill="none" stroke="#D99E30" strokeWidth="2.5" strokeDasharray="6 6" className="opacity-40" />
                    
                    {/* ROOM 1: Panoramic Living Room */}
                    <g 
                      onMouseEnter={() => setHoveredRoom('living')}
                      onMouseLeave={() => setHoveredRoom(null)}
                      className="cursor-pointer group"
                    >
                      <rect x="40" y="40" width="150" height="150" rx="8" 
                            fill={hoveredRoom === 'living' ? 'rgba(217,158,48,0.25)' : 'rgba(255,255,255,0.03)'} 
                            stroke={hoveredRoom === 'living' ? '#D99E30' : 'rgba(255,255,255,0.15)'} 
                            strokeWidth="1.5"
                            className="transition-all duration-300" />
                      <text x="115" y="110" textAnchor="middle" className={`text-xs font-sans tracking-wide font-semibold select-none transition-colors ${hoveredRoom === 'living' ? 'fill-[#D99E30]' : 'fill-stone-400'}`}>
                        {lang === 'RU' ? 'Гостиная' : 'Living Room'}
                      </text>
                      <circle cx="115" cy="80" r="16" fill="rgba(255,255,255,0.05)" className="group-hover:scale-110 transition-transform" />
                      <text x="115" y="84" textAnchor="middle" fill="#D99E30" className="text-[10px] font-mono">1</text>
                    </g>

                    {/* ROOM 2: Master Suite / Спальня */}
                    <g 
                      onMouseEnter={() => setHoveredRoom('bedroom')}
                      onMouseLeave={() => setHoveredRoom(null)}
                      className="cursor-pointer group"
                    >
                      <rect x="210" y="40" width="150" height="150" rx="8" 
                            fill={hoveredRoom === 'bedroom' ? 'rgba(217,158,48,0.25)' : 'rgba(255,255,255,0.03)'} 
                            stroke={hoveredRoom === 'bedroom' ? '#D99E30' : 'rgba(255,255,255,0.15)'} 
                            strokeWidth="1.5"
                            className="transition-all duration-300" />
                      <text x="285" y="110" textAnchor="middle" className={`text-xs font-sans tracking-wide font-semibold select-none transition-colors ${hoveredRoom === 'bedroom' ? 'fill-[#D99E30]' : 'fill-stone-400'}`}>
                        {lang === 'RU' ? 'Мастер-Спальня' : 'Master Suite'}
                      </text>
                      <circle cx="285" cy="80" r="16" fill="rgba(255,255,255,0.05)" className="group-hover:scale-110 transition-transform" />
                      <text x="285" y="84" textAnchor="middle" fill="#D99E30" className="text-[10px] font-mono">2</text>
                    </g>

                    {/* ROOM 3: Spa Area & Sauna */}
                    <g 
                      onMouseEnter={() => setHoveredRoom('spa')}
                      onMouseLeave={() => setHoveredRoom(null)}
                      className="cursor-pointer group"
                    >
                      <rect x="40" y="210" width="150" height="150" rx="8" 
                            fill={hoveredRoom === 'spa' ? 'rgba(217,158,48,0.25)' : 'rgba(255,255,255,0.03)'} 
                            stroke={hoveredRoom === 'spa' ? '#D99E30' : 'rgba(255,255,255,0.15)'} 
                            strokeWidth="1.5"
                            className="transition-all duration-300" />
                      <text x="115" y="280" textAnchor="middle" className={`text-xs font-sans tracking-wide font-semibold select-none transition-colors ${hoveredRoom === 'spa' ? 'fill-[#D99E30]' : 'fill-stone-400'}`}>
                        {lang === 'RU' ? 'Спа-сауна' : 'Spa & Bathhouse'}
                      </text>
                      <circle cx="115" cy="250" r="16" fill="rgba(255,255,255,0.05)" className="group-hover:scale-110 transition-transform" />
                      <text x="115" y="254" textAnchor="middle" fill="#D99E30" className="text-[10px] font-mono">3</text>
                    </g>

                    {/* ROOM 4: Forest-facing Terrace */}
                    <g 
                      onMouseEnter={() => setHoveredRoom('terrace')}
                      onMouseLeave={() => setHoveredRoom(null)}
                      className="cursor-pointer group"
                    >
                      <rect x="210" y="210" width="150" height="150" rx="8" 
                            fill={hoveredRoom === 'terrace' ? 'rgba(217,158,48,0.25)' : 'rgba(255,255,255,0.03)'} 
                            stroke={hoveredRoom === 'terrace' ? '#D99E30' : 'rgba(255,255,255,0.15)'} 
                            strokeWidth="1.5"
                            className="transition-all duration-300" />
                      <text x="285" y="280" textAnchor="middle" className={`text-xs font-sans tracking-wide font-semibold select-none transition-colors ${hoveredRoom === 'terrace' ? 'fill-[#D99E30]' : 'fill-stone-400'}`}>
                        {lang === 'RU' ? 'Лесная Терраса' : 'Forest Terrace'}
                      </text>
                      <circle cx="285" cy="250" r="16" fill="rgba(255,255,255,0.05)" className="group-hover:scale-110 transition-transform" />
                      <text x="285" y="254" textAnchor="middle" fill="#D99E30" className="text-[10px] font-mono">4</text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Specification Descriptions on Right */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-2xl font-black tracking-wider text-white">
                    {selectedResidenceTab === 'A' ? 'COTTAGE TYPE A' : 'COTTAGE TYPE B'}
                  </h3>
                  <p className="text-xs text-[#D99E30] tracking-widest uppercase font-mono mt-1">
                    {selectedResidenceTab === 'A' ? 'Business Class Base / Бизнес-Линия' : 'Presidential Premium / Премиум-Усадьба'}
                  </p>
                </div>

                {/* Simulated Real-Time Room Explorer details */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 min-h-[220px] flex flex-col justify-between">
                  {hoveredRoom ? (
                    <div className="space-y-3 animate-fade-in">
                      <span className="text-[10px] text-[#D99E30] font-mono tracking-widest uppercase bg-[#D99E30]/10 px-2 py-0.5 rounded">
                        Active Room Explorer / Секция планировки
                      </span>
                      
                      {hoveredRoom === 'living' && (
                        <>
                          <h4 className="text-lg font-bold text-white">Гостиная с Остеклением 360°</h4>
                          <p className="text-xs text-stone-300 font-light leading-relaxed">
                            Площадь составляет 45-55 м². Усиленная стальная рама Schüco обеспечивает панорамный обзор на верхушки соснового леса. Высота потолков варьируется от 3.6 до 4.2 метров. Укомплектован каминным порталом из итальянского мрамора.
                          </p>
                        </>
                      )}

                      {hoveredRoom === 'bedroom' && (
                        <>
                          <h4 className="text-lg font-bold text-white">Мастер-Спальня со Скрытой Гардеробной</h4>
                          <p className="text-xs text-stone-300 font-light leading-relaxed">
                            Площадь 30 м² с персональным выходом в просторный санузел, облицованный натуральным травертином, и автоматизированными шторами-блэкаут.
                          </p>
                        </>
                      )}

                      {hoveredRoom === 'spa' && (
                        <>
                          <h4 className="text-lg font-bold text-white">Индивидуальная Термальная Студия</h4>
                          <p className="text-xs text-stone-300 font-light leading-relaxed">
                            SPA-зона с кедровой финской сауной, купелью с регулируемой температурой и премиальными сенсорными панелями управления влажностью.
                          </p>
                        </>
                      )}

                      {hoveredRoom === 'terrace' && (
                        <>
                          <h4 className="text-lg font-bold text-white">Терраса из Сибирской Лиственницы</h4>
                          <p className="text-xs text-stone-300 font-light leading-relaxed">
                            Просторная палубная терраса с системой обогрева для комфортного круглогодичного отдыха и подготовленным местом для летней кухни-барбекю.
                          </p>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center space-y-3 py-8">
                      <Info className="w-8 h-8 text-[#D99E30] animate-bounce" />
                      <p className="text-xs text-stone-400 font-light max-w-xs leading-relaxed">
                        Наведите курсор мыши на комнаты векторной схемы слева, чтобы изучить архитектурное наполнение и технические опции комнат.
                      </p>
                    </div>
                  )}

                  <div className="border-t border-white/5 pt-4 mt-4 grid grid-cols-2 gap-4 text-xs font-mono text-stone-300">
                    <div>
                      <span className="block text-stone-500 text-[9px] uppercase tracking-wider">Foundation / База</span>
                      <span className="font-semibold text-stone-200">Монолитная плита 400мм</span>
                    </div>
                    <div>
                      <span className="block text-stone-500 text-[9px] uppercase tracking-wider">Insulation / Утепление</span>
                      <span className="font-semibold text-stone-200">Натуральный базальт Rockwool</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => setIsTourModalOpen(true)}
                    className="w-full py-4 bg-gradient-to-r from-[#D99E30] to-[#B07E20] text-black hover:shadow-lg hover:shadow-[#D99E30]/20 font-bold text-xs tracking-widest uppercase rounded-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Забронировать очный VIP-показ резиденции</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ======================================= */}
        {/* YIELD & INVESTMENT CALCULATOR (SLIDE 3) */}
        {/* ======================================= */}
        {activeTab === 'yield' && (
          <div className="space-y-12 animate-fade-in">
            
            {/* Visual Echo of Slide 3 */}
            <div className="relative rounded-3xl overflow-hidden border border-[#D99E30]/30 bg-gradient-to-b from-[#09150E] to-[#040A06] p-8 md:p-12 shadow-2xl space-y-6">
              <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" 
                   style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200')`, backgroundSize: 'cover' }} />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 border-b border-white/10 pb-6">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black tracking-wider text-white">{t.yieldTitle}</h2>
                  <p className="text-xs tracking-[0.3em] text-[#D99E30] font-light uppercase mt-1">{t.yieldSubtitle}</p>
                </div>
                <div className="bg-[#D99E30]/10 border border-[#D99E30]/40 rounded-xl px-4 py-2 flex items-center space-x-2">
                  <Coins className="w-5 h-5 text-[#D99E30]" />
                  <span className="text-xs font-mono tracking-widest text-[#D99E30] font-semibold">ESTATE RETURN MODEL</span>
                </div>
              </div>

              {/* Precise Russian phrases integrated from the original presentation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 pt-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#D99E30] font-mono">Current Context / Контекст</span>
                  <p className="text-sm font-light leading-relaxed text-stone-300">
                    {t.yieldText}
                  </p>
                </div>

                <div className="space-y-2 border-l border-white/10 pl-0 md:pl-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#D99E30] font-mono">Potential Return / Потенциал</span>
                  <p className="text-xs text-stone-400 font-light">{t.yieldGoal}</p>
                  <p className="text-3xl font-black tracking-tight text-white">{t.yieldGoalVal}</p>
                </div>

                <div className="space-y-2 border-l border-white/10 pl-0 md:pl-6 bg-[#D99E30]/5 p-4 rounded-xl border border-[#D99E30]/10">
                  <span className="text-[10px] uppercase tracking-widest text-[#D99E30] font-mono">Guaranteed Yield / Доходность %</span>
                  <p className="text-xs text-stone-400 font-light">{t.yieldPercent}</p>
                  <p className="text-3xl font-black tracking-tight text-[#D99E30]">{t.yieldPercentVal}</p>
                  <p className="text-[9px] text-[#D99E30]/80 tracking-widest uppercase font-mono">{t.yieldBottomText}</p>
                </div>
              </div>
            </div>

            {/* REAL-TIME SIMULATOR CONTROL PANEL */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Sliders Control Panel */}
              <div className="lg:col-span-6 space-y-6 bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl">
                <div className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-[#D99E30]" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">{t.calcTitle}</h3>
                </div>

                {/* Slider 1: Property Cost */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs tracking-wider">
                    <span className="text-stone-400 font-light">{t.calcPropertyPrice}</span>
                    <span className="text-white font-mono font-bold">{(propertyPrice).toLocaleString()} ₽</span>
                  </div>
                  <input 
                    type="range" 
                    min="15000000" 
                    max="60000000" 
                    step="500000"
                    value={propertyPrice} 
                    onChange={(e) => setPropertyPrice(Number(e.target.value))}
                    className="w-full accent-[#D99E30] bg-white/5 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-stone-500">
                    <span>15M ₽</span>
                    <span>35M ₽</span>
                    <span>60M ₽</span>
                  </div>
                </div>

                {/* Slider 2: Monthly Rent */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs tracking-wider">
                    <span className="text-stone-400 font-light">{t.calcMonthlyRent}</span>
                    <span className="text-[#D99E30] font-mono font-bold">{(monthlyRent).toLocaleString()} ₽ / мес</span>
                  </div>
                  <input 
                    type="range" 
                    min="120000" 
                    max="450000" 
                    step="5000"
                    value={monthlyRent} 
                    onChange={(e) => setMonthlyRent(Number(e.target.value))}
                    className="w-full accent-[#D99E30] bg-white/5 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-stone-500">
                    <span>120k ₽</span>
                    <span>250k ₽</span>
                    <span>450k ₽</span>
                  </div>
                </div>

                {/* Slider 3: Occupancy Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs tracking-wider">
                    <span className="text-stone-400 font-light">{t.calcOccupancy}</span>
                    <span className="text-white font-mono font-bold">{occupancyRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="100" 
                    step="1"
                    value={occupancyRate} 
                    onChange={(e) => setOccupancyRate(Number(e.target.value))}
                    className="w-full accent-[#D99E30] bg-white/5 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-stone-500">
                    <span>50% (Консервативная)</span>
                    <span>80% (Средняя)</span>
                    <span>100% (Максимум)</span>
                  </div>
                </div>

                {/* Secure DB Registration Action */}
                <div className="pt-4 space-y-3">
                  <button 
                    onClick={handleSavePortfolio}
                    className="w-full py-3.5 rounded-xl border border-[#D99E30]/40 hover:border-[#D99E30] bg-[#D99E30]/10 hover:bg-[#D99E30] text-white hover:text-black font-semibold text-xs tracking-widest uppercase transition-all flex items-center justify-center space-x-2 shadow-xl"
                  >
                    <Check className="w-4 h-4" />
                    <span>{t.savePortfolio}</span>
                  </button>
                  <p className="text-[10px] font-mono text-stone-500 text-center leading-relaxed">
                    *Расчет записывается в прозрачный децентрализованный реестр активности инвесторов Verde Hub.
                  </p>
                </div>
              </div>

              {/* Dynamic Live Output Cards & 10-Year Chart */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Result Statistics Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Result 1: Annual return */}
                  <div className="bg-[#080E0A] border border-white/5 rounded-2xl p-5 text-center">
                    <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono block mb-1">{t.calcAnnualIncome}</span>
                    <span className="text-xl font-black text-white">{(annualIncome).toLocaleString()} ₽</span>
                  </div>

                  {/* Result 2: ROI */}
                  <div className="bg-[#0A160F] border border-[#D99E30]/30 rounded-2xl p-5 text-center">
                    <span className="text-[10px] text-[#D99E30] uppercase tracking-widest font-mono block mb-1">{t.calcRoi}</span>
                    <span className="text-2xl font-black text-[#D99E30]">{currentRoi}%</span>
                  </div>

                  {/* Result 3: Payback period */}
                  <div className="bg-[#080E0A] border border-white/5 rounded-2xl p-5 text-center">
                    <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono block mb-1">{t.calcPayback}</span>
                    <span className="text-xl font-black text-white">{paybackPeriod} лет</span>
                  </div>

                </div>

                {/* 10-YEAR CASHFLOW PROGRESSIVE GRAPH (SVG) */}
                <div className="bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 rounded-3xl border border-white/5 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono tracking-widest text-stone-300 uppercase">
                      10-Year Cumulative Cash Flow Projection / Прогноз за 10 лет (Млн ₽)
                    </span>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono">
                      Asset Growth + Rent
                    </span>
                  </div>

                  {/* Responsive SVG Chart */}
                  <div className="w-full h-[180px] relative">
                    <svg viewBox="0 0 500 150" className="w-full h-full">
                      {/* Grid Lines */}
                      <line x1="10" y1="130" x2="490" y2="130" stroke="rgba(255,255,255,0.05)" />
                      <line x1="10" y1="90" x2="490" y2="90" stroke="rgba(255,255,255,0.05)" />
                      <line x1="10" y1="50" x2="490" y2="50" stroke="rgba(255,255,255,0.05)" />
                      <line x1="10" y1="10" x2="490" y2="10" stroke="rgba(255,255,255,0.05)" />

                      {/* Line Plot for Rent yield only */}
                      <path 
                        d={`
                          M 10,130 
                          Q 100,${130 - (annualIncome * 2 / 1000000)} 
                            200,${130 - (annualIncome * 4 / 1000000)} 
                            300,${130 - (annualIncome * 6 / 1000000)} 
                            400,${130 - (annualIncome * 8 / 1000000)} 
                            490,${130 - (annualIncome * 10 / 1000000)}
                        `} 
                        fill="none" 
                        stroke="#B07E20" 
                        strokeWidth="2" 
                        strokeDasharray="4 4"
                      />

                      {/* Line Plot for Asset Appreciation + Rent Yield */}
                      <path 
                        d={`
                          M 10,130 
                          Q 100,${130 - (annualIncome * 2.5 / 1000000)} 
                            200,${130 - (annualIncome * 5.5 / 1000000)} 
                            300,${130 - (annualIncome * 8.8 / 1000000)} 
                            400,${130 - (annualIncome * 12.5 / 1000000)} 
                            490,${130 - (annualIncome * 17.0 / 1000000)}
                        `} 
                        fill="none" 
                        stroke="#D99E30" 
                        strokeWidth="3.5" 
                      />

                      {/* Graph dots */}
                      <circle cx="10" cy="130" r="4" fill="#D99E30" />
                      <circle cx="490" cy={`${130 - (annualIncome * 17.0 / 1000000)}`} r="5" fill="#D99E30" className="animate-pulse" />

                      {/* X-axis Labels */}
                      <text x="10" y="145" fill="#8c8c8c" fontSize="8" fontFamily="monospace">Год 0</text>
                      <text x="250" y="145" fill="#8c8c8c" fontSize="8" fontFamily="monospace" textAnchor="middle">Год 5</text>
                      <text x="490" y="145" fill="#8c8c8c" fontSize="8" fontFamily="monospace" textAnchor="end">Год 10</text>
                    </svg>
                  </div>

                  {/* Legend explanation */}
                  <div className="flex items-center space-x-6 text-[10px] font-mono text-stone-400">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-3 h-0.5 bg-[#D99E30]" />
                      <span>Капитализация + Аренда</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <div className="w-3 h-0.5 bg-[#B07E20] border-dashed" />
                      <span>Только арендный поток</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ======================================= */}
        {/* PORTAL & REGISTRY SYSTEM (ECOSYSTEM)    */}
        {/* ======================================= */}
        {activeTab === 'portal' && (
          <div className="space-y-12 animate-fade-in">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/20">
                <Users className="w-4 h-4 text-[#D99E30] inline mr-1" />
                <span className="text-[10px] tracking-widest font-mono text-[#D99E30] uppercase">Shared Ecosystem Ledger / Общий реестр</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-wider text-white uppercase">{t.navPortal}</h2>
              <p className="text-xs tracking-[0.3em] text-[#D99E30] font-light uppercase">{t.smartSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Dynamic Live Registry Feed */}
              <div className="lg:col-span-8 bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">{t.recentDeals}</h3>
                  <span className="text-xs font-mono text-[#D99E30]">Live Synchronized Node</span>
                </div>

                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {savedInvestments.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center py-16 space-y-2">
                      <Layers className="w-10 h-10 text-stone-600 animate-pulse" />
                      <p className="text-xs text-stone-500 font-mono">Ожидание входящих транзакций реестра...</p>
                    </div>
                  ) : (
                    savedInvestments.map((item, index) => (
                      <div 
                        key={item.id || index} 
                        className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#D99E30]/30 transition-all duration-300"
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] bg-[#D99E30]/20 text-[#D99E30] px-2 py-0.5 rounded font-mono font-semibold">
                            {item.investorLabel || 'Anonymous ID'}
                          </span>
                          <p className="text-xs text-stone-300 font-light mt-1">
                            Valuation: <strong className="text-white">{(item.propertyPrice)?.toLocaleString()} ₽</strong> | Monthly Target: <strong className="text-white">{(item.monthlyRent)?.toLocaleString()} ₽</strong>
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-[#D99E30] font-mono font-bold block">{item.roi}% ROI</span>
                          <span className="text-[9px] text-stone-500 font-mono">
                            {new Date(item.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Ecosystem Quick Metrics */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Real-time Environmental Dashboard */}
                <div className="bg-[#080E0A] border border-[#D99E30]/20 rounded-3xl p-6 space-y-6">
                  <h3 className="text-sm font-bold tracking-widest text-[#D99E30] uppercase font-mono">ECO-GAUGES</h3>
                  
                  {/* Air sensor */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-400">Forest Air Purity Index</span>
                      <span className="text-emerald-400 font-bold">{Math.round(airQuality)}% Pure</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full transition-all duration-1000" style={{ width: `${airQuality}%` }} />
                    </div>
                  </div>

                  {/* Smart Grid */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-400">Solar Grid Generation</span>
                      <span className="text-amber-400 font-bold">{Math.round(solarYield)}% Capacity</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full transition-all duration-1000" style={{ width: `${solarYield}%` }} />
                    </div>
                  </div>

                  {/* Water system */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-400">Artesian Water Pressure</span>
                      <span className="text-sky-400 font-bold">4.8 Bar (Nominal)</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-sky-500 h-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>

                {/* VIP Live Tour Queue */}
                <div className="bg-gradient-to-b from-[#09150E] to-[#040A06] border border-white/5 p-6 rounded-3xl space-y-4">
                  <h3 className="text-sm font-bold tracking-widest text-white uppercase font-mono">{t.reservationsActive}</h3>
                  <div className="space-y-3">
                    {savedTours.slice(-4).map((tour, index) => (
                      <div key={tour.id || index} className="p-3 bg-black/40 rounded-xl border border-white/5 flex items-center justify-between text-xs">
                        <div className="space-y-0.5">
                          <p className="font-semibold text-white">{tour.name}</p>
                          <p className="text-[10px] text-[#D99E30] font-mono tracking-wide uppercase">
                            {tour.method === 'helicopter' ? 'HELI-TRANSFER' : tour.method === 'maybach' ? 'MAYBACH S-CLASS' : 'VIP ENTRY'}
                          </p>
                        </div>
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/25">
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

      </main>

      {/* ======================================= */}
      {/* PRIVATE VISITS BOOKING MODAL (DIALOG)   */}
      {/* ======================================= */}
      {isTourModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#09150E] border border-[#D99E30]/40 rounded-3xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl space-y-6">
            
            {/* Close trigger */}
            <button 
              onClick={() => setIsTourModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center space-y-2">
              <div className="inline-block p-3 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/20">
                <Calendar className="w-6 h-6 text-[#D99E30] animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold tracking-wide text-white">{t.privateTourTitle}</h3>
              <p className="text-xs text-stone-300 font-light">{t.privateTourDesc}</p>
            </div>

            {formSuccess ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-2 animate-scale-up">
                <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white uppercase">{lang === 'RU' ? 'Заявка принята' : 'Registered Successfully'}</h4>
                <p className="text-xs text-stone-300 font-light leading-relaxed">{t.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleBookTour} className="space-y-4">
                
                {/* Method selector options */}
                <div className="space-y-2">
                  <label className="text-[10px] text-[#D99E30] uppercase font-mono tracking-widest block">Транспорт / Transfer format</label>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { id: 'maybach', label: t.maybach },
                      { id: 'helicopter', label: t.helicopter },
                      { id: 'self', label: t.selfArrival }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setTourMethod(opt.id)}
                        className={`p-3.5 rounded-xl text-xs font-semibold tracking-wider text-left transition-all border ${
                          tourMethod === opt.id 
                            ? 'bg-[#D99E30] text-black border-white shadow-lg' 
                            : 'bg-black/40 text-stone-300 border-white/5 hover:border-white/20'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] text-stone-400 uppercase font-mono tracking-widest block">{t.fullName}</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Алексей Иванов / Alexei Ivanov"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D99E30] transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-stone-400 uppercase font-mono tracking-widest block">{t.phone}</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D99E30] transition-all"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D99E30] to-[#B07E20] text-black font-bold text-xs tracking-widest uppercase transition-all shadow-xl hover:shadow-[#D99E30]/20"
                >
                  {t.submitTour}
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#030704] py-12 mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-[#142A1C] to-[#254F35] border border-[#D99E30]/30 flex items-center justify-center">
                <Trees className="w-4 h-4 text-[#D99E30]" />
              </div>
              <h4 className="text-sm font-bold tracking-[0.2em] text-white">VERDE RESERVE</h4>
            </div>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Закрытый клубный лесной резерват и коттеджный поселок класса De-Luxe на Новорижском направлении.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-[10px] uppercase tracking-widest font-mono text-[#D99E30] font-bold">Офис продаж</h5>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Москва, Пресненская наб., 12<br />
              Башня Федерация Восток, 45 этаж
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-[10px] uppercase tracking-widest font-mono text-[#D99E30] font-bold">Контакты</h5>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Телефон: <span className="text-white font-semibold">+7 (495) 120-00-99</span><br />
              Почта: info@verdereserve.ru
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-[10px] uppercase tracking-widest font-mono text-stone-400 font-bold">Legal / Дисклеймер</h5>
            <p className="text-[9px] text-stone-600 font-light leading-relaxed">
              Любая представленная информация носит ознакомительный характер и не является публичной офертой, определяемой положениями Ст. 437 ГК РФ.
            </p>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-600">
          <span>© 2026 VERDE RESERVE. All rights fully secured.</span>
          <span>Designed with elite architectural code.</span>
        </div>
      </footer>

      {/* TAILWIND & CSS CUSTOM STYLES */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) translateX(10px) rotate(15deg);
          }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
        .animate-spin-slow {
          animation: spin 35s linear infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-up {
          animation: scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(217,158,48,0.3);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(217,158,48,0.6);
        }
      `}</style>

    </div>
  );
}
6