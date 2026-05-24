import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  ArrowRight, 
  Star, 
  Check, 
  ChevronRight, 
  Sparkles, 
  Calendar, 
  Clock, 
  User, 
  MessageSquare, 
  X, 
  Send, 
  ShieldCheck, 
  Heart, 
  Calculator, 
  Activity, 
  MapPin, 
  Info,
  Menu,
  Globe
} from 'lucide-react';

// --- TRANSLATION DICTIONARY ---
const TRANSLATIONS = {
  ru: {
    brand: "GlowDent",
    tagline: "Дизайн сайта",
    navAbout: "О нас",
    navPromo: "Акции",
    navServices: "Услуги",
    navInstallments: "Рассрочка",
    navDoctors: "Врачи",
    navArticles: "Статьи",
    navContacts: "Контакты",
    btnBook: "Записаться",
    heroTitle: "Современная стоматология по доступным ценам",
    heroSubtitle: "Наши цены на 30% ниже, чем в большинстве клиник. Без потери качества: сертифицированные материалы, врачи с опытом 10+ лет, гарантия лечения.",
    btnSelectService: "Выбрать услугу",
    btnViewPrices: "Смотреть цены",
    ratingText: "Средняя оценка в Яндекс.Картах",
    reviewsText: "800+ отзывов",
    promoTitle: "Акции и скидки — заботимся о вашем бюджете",
    card1Title: "Скидка 30%",
    card1Sub: "на комплексную чистку",
    card1Desc: "Профгигиена Air Flow + ультразвук + фторирование со скидкой.",
    card2Title: "Бесплатный",
    card2Sub: "первичный прием",
    card2Desc: "Консультация, осмотр и план лечения без оплаты при дальнейшем лечении у нас.",
    card3Title: "Check-up",
    card3Sub: "со скидкой",
    card3Desc: "Полный осмотр, снимки и план лечения и консультация — за 1 500₽.",
    card4Title: "Семейная программа",
    card4Sub: "со скидкой",
    card4Desc: "Скидка 10% каждому члену семьи при совместном обращении в клинику.",
    card5Title: "Скидка 50%",
    card5Sub: "на второй имплант",
    card5Desc: "При установке двух и более имплантов — выгодные условия каждого для следующего.",
    btnMore: "Подробнее",
    trustTitle: "Надёжная клиника для всей семьи",
    trustCard1Title: "Многолетний опыт",
    trustCard1Desc: "10 лет заботимся о пациентах и предоставляем надёжные стоматологические услуги.",
    trustCard2Title: "Доверие клиентов",
    trustCard2Desc: "10 000+ пациентов, прошедших лечение в нашей клинике с момента открытия.",
    trustCard3Title: "Передовое оборудование",
    trustCard3Desc: "Диагностика и лечение на современных установках из Германии и Японии.",
    trustCard4Title: "Безопасность и стерильность",
    trustCard4Desc: "Тройной контроль стерилизации инструментов по стандартам " + "Anti-HIV / Anti-Hepatitis.",
    calcTitle: "Интерактивный калькулятор выгоды",
    calcSubtitle: "Выберите услуги, чтобы мгновенно увидеть вашу скидку и итоговую стоимость:",
    calcTotal: "Итого к оплате",
    calcSaving: "Ваша экономия",
    calcPlaceholder: "Выберите хотя бы одну услугу",
    aiTitle: "AI Консультант GlowDent",
    aiGreeting: "Здравствуйте! Я виртуальный ассистент GlowDent. Задайте мне любой вопрос о лечении зубов, подготовке к приему или стоимости!",
    aiInputPlaceholder: "Задайте вопрос AI...",
    modalTitle: "Запись на прием",
    modalSubtitle: "Заполните форму, и мы свяжемся с вами в течение 5 минут для подтверждения времени.",
    inputName: "Ваше имя",
    inputPhone: "Номер телефона",
    inputService: "Выберите направление",
    service1: "Терапевтическое лечение",
    service2: "Профгигиена и отбеливание",
    service3: "Имплантация и протезирование",
    service4: "Ортодонтия (брекеты/элайнеры)",
    service5: "Детская стоматология",
    modalSuccess: "Заявка успешно отправлена! Мы скоро свяжемся с вами.",
    btnSubmit: "Записаться на прием",
    footerText: "© 2026 GlowDent Clinic. Все права защищены. Лицензия № ЛО-77-01-021045."
  },
  en: {
    brand: "GlowDent",
    tagline: "Website Design",
    navAbout: "About Us",
    navPromo: "Offers",
    navServices: "Services",
    navInstallments: "Installment",
    navDoctors: "Doctors",
    navArticles: "Articles",
    navContacts: "Contacts",
    btnBook: "Book Appointment",
    heroTitle: "Modern Dentistry at Affordable Prices",
    heroSubtitle: "Our prices are 30% lower than in most clinics. No loss of quality: certified materials, dentists with 10+ years of experience, guaranteed results.",
    btnSelectService: "Select Service",
    btnViewPrices: "View Prices",
    ratingText: "Average score on search maps",
    reviewsText: "800+ reviews",
    promoTitle: "Offers & Discounts — Caring for Your Budget",
    card1Title: "30% Discount",
    card1Sub: "on comprehensive cleaning",
    card1Desc: "Professional hygiene Air Flow + ultrasound + fluoridation at a discount.",
    card2Title: "Free",
    card2Sub: "initial consultation",
    card2Desc: "Consultation, examination and treatment plan for free if you continue treatment with us.",
    card3Title: "Check-up",
    card3Sub: "with discount",
    card3Desc: "Full exam, X-rays, treatment plan, and consultation — for only $25.",
    card4Title: "Family program",
    card4Sub: "with discount",
    card4Desc: "10% discount for each family member for joint registration at the clinic.",
    card5Title: "50% Discount",
    card5Sub: "on the second implant",
    card5Desc: "When installing two or more implants — highly favorable conditions for the next ones.",
    btnMore: "Details",
    trustTitle: "Reliable Clinic for the Whole Family",
    trustCard1Title: "Years of Experience",
    trustCard1Desc: "Caring for patients for over 10 years, providing dependable state-of-the-art dental care.",
    trustCard2Title: "Customer Trust",
    trustCard2Desc: "10,000+ satisfied patients successfully treated in our clinic since opening.",
    trustCard3Title: "Advanced Equipment",
    trustCard3Desc: "High-precision diagnosis & treatment using top German and Japanese hardware.",
    trustCard4Title: "Safety & Sterility",
    trustCard4Desc: "Triple sterilization control of all instruments matching absolute clinical standards.",
    calcTitle: "Interactive Savings Calculator",
    calcSubtitle: "Select treatments to instantly calculate your total discount and final cost:",
    calcTotal: "Total price",
    calcSaving: "You save",
    calcPlaceholder: "Select at least one treatment",
    aiTitle: "GlowDent AI Assistant",
    aiGreeting: "Hello! I am GlowDent's virtual assistant. Ask me anything about dental treatments, appointment preparation, or pricing!",
    aiInputPlaceholder: "Ask AI a question...",
    modalTitle: "Book Your Appointment",
    modalSubtitle: "Fill out the form, and our representative will contact you within 5 minutes to confirm.",
    inputName: "Your name",
    inputPhone: "Phone number",
    inputService: "Select service",
    service1: "General Treatment",
    service2: "Hygiene & Whitening",
    service3: "Implants & Prosthetics",
    service4: "Orthodontics (Braces/Aligners)",
    service5: "Pediatric Dentistry",
    modalSuccess: "Request submitted successfully! We will contact you shortly.",
    btnSubmit: "Schedule Appointment",
    footerText: "© 2026 GlowDent Clinic. All rights reserved. State License No. LO-77-01-021045."
  }
};

const SERVICES_PRICES = {
  ru: [
    { id: 'hygiene', name: 'Профгигиена Air Flow + Ультразвук', original: 6500, current: 4550, promo: '30%' },
    { id: 'consult', name: 'Первичный прием + КТ диагностика', original: 2500, current: 0, promo: 'FREE' },
    { id: 'implant', name: 'Имплантат (вторая единица)', original: 45000, current: 22500, promo: '50%' },
    { id: 'filling', name: 'Лечение кариеса & Эстетическая пломба', original: 5500, current: 4400, promo: '20%' },
    { id: 'whitening', name: 'Клиническое отбеливание Zoom4', original: 28000, current: 21000, promo: '25%' },
  ],
  en: [
    { id: 'hygiene', name: 'Professional Hygiene Air Flow', original: 100, current: 70, promo: '30%' },
    { id: 'consult', name: 'Initial Consult + 3D Scan', original: 45, current: 0, promo: 'FREE' },
    { id: 'implant', name: 'Implant (second unit)', original: 800, current: 400, promo: '50%' },
    { id: 'filling', name: 'Caries Treatment & Aesthetic Filling', original: 120, current: 96, promo: '20%' },
    { id: 'whitening', name: 'Teeth Whitening Zoom4', original: 400, current: 300, promo: '25%' },
  ]
};

const apiKey = ""; // Will be populated by context automatically

export default function App() {
  const [lang, setLang] = useState('ru');
  const t = TRANSLATIONS[lang];

  // Modals & Booking State
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState('service1');
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Active Promo Calculator State
  const [selectedCalcServices, setSelectedCalcServices] = useState(['hygiene']);

  // Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: t.aiGreeting, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [aiTyping, setAiTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Sync initial chat greeting when language toggles
  useEffect(() => {
    setChatMessages([
      { sender: 'ai', text: TRANSLATIONS[lang].aiGreeting, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
  }, [lang]);

  // Scroll to bottom of AI chat window
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const toggleLang = () => {
    setLang(prev => prev === 'ru' ? 'en' : 'ru');
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setIsBookModalOpen(false);
      setBookingSuccess(false);
      setBookingName('');
      setBookingPhone('');
    }, 3000);
  };

  const toggleCalcService = (id) => {
    setSelectedCalcServices(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Savings Calculator Math
  const activeCalculatorServices = SERVICES_PRICES[lang];
  const totalOriginalPrice = activeCalculatorServices
    .filter(s => selectedCalcServices.includes(s.id))
    .reduce((sum, s) => sum + s.original, 0);

  const totalCurrentPrice = activeCalculatorServices
    .filter(s => selectedCalcServices.includes(s.id))
    .reduce((sum, s) => sum + s.current, 0);

  const totalSavings = totalOriginalPrice - totalCurrentPrice;

  // AI Chat API integration with Gemini
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg, time: userTime }]);
    setChatInput('');
    setAiTyping(true);

    const systemPrompt = `You are a virtual AI assistant representing GlowDent premium dental clinic. 
    You are warm, expert, caring, and professional. 
    Provide informative answers to patient inquiries about treatments, dental care tips, and procedures.
    Always guide the user on how they can book an appointment or check-up if relevant.
    Answer in the same language the patient used to ask the question (Russian or English).
    Keep responses concise, limited to 2-3 sentences.`;

    let responseText = "";
    let retries = 5;
    let delay = 1000;

    while (retries > 0) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userMsg }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
          })
        });

        if (!response.ok) {
          throw new Error(`API returned status ${response.status}`);
        }

        const data = await response.json();
        responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Thank you for reaching out! Please contact our desk directly at +7 (495) 123-45-67.";
        break; 
      } catch (err) {
        retries--;
        if (retries === 0) {
          responseText = lang === 'ru' 
            ? "Извините, сейчас я испытываю трудности с соединением. Пожалуйста, напишите нам позже или позвоните нашему оператору!" 
            : "Apologies, I am experiencing a temporary connection issue. Please feel free to try again or call our front desk directly.";
        } else {
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2; 
        }
      }
    }

    const aiTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages(prev => [...prev, { sender: 'ai', text: responseText, time: aiTime }]);
    setAiTyping(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 antialiased overflow-x-hidden">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 text-white font-bold text-xl">
                G
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                  {t.brand}
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  {t.tagline}
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-600">
              <a href="#about" className="hover:text-blue-600 transition-colors">{t.navAbout}</a>
              <a href="#promo" className="hover:text-blue-600 transition-colors">{t.navPromo}</a>
              <a href="#services" className="hover:text-blue-600 transition-colors">{t.navServices}</a>
              <a href="#calculator" className="hover:text-blue-600 transition-colors">{t.navInstallments}</a>
              <a href="#doctors" className="hover:text-blue-600 transition-colors">{t.navDoctors}</a>
              <a href="#articles" className="hover:text-blue-600 transition-colors">{t.navArticles}</a>
              <a href="#footer" className="hover:text-blue-600 transition-colors">{t.navContacts}</a>
            </nav>

            {/* Right Header Options */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <button 
                onClick={toggleLang}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>{lang.toUpperCase()}</span>
              </button>

              {/* Phone */}
              <a 
                href="tel:+74951234567" 
                className="hidden md:flex items-center space-x-2 text-slate-700 hover:text-blue-600 font-bold transition text-sm"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+7 (495) 123-45-67</span>
              </a>

              {/* Book Button */}
              <button 
                onClick={() => setIsBookModalOpen(true)}
                className="relative group overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-blue-600/25 transition duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm flex items-center space-x-2"
              >
                <span>{t.btnBook}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-6 pb-20 md:pb-28">
        
        {/* Curved Blue Backdrop */}
        <div className="absolute inset-x-0 top-0 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 text-white h-[680px] rounded-br-[80px] md:rounded-br-[220px] -z-10 shadow-2xl overflow-hidden">
          {/* Subtle light reflections */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-40"></div>
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-screen filter blur-[150px] opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 md:pt-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-white space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase border border-white/10">
                <Sparkles className="w-4 h-4 text-blue-200 animate-pulse" />
                <span>Premium Quality Dental Center</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] drop-shadow-sm">
                {t.heroTitle}
              </h1>

              <p className="text-blue-100 text-lg max-w-xl leading-relaxed font-medium">
                {t.heroSubtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => setIsBookModalOpen(true)}
                  className="bg-white text-blue-700 hover:bg-blue-50 font-extrabold py-4 px-8 rounded-full shadow-xl shadow-blue-900/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2 text-base"
                >
                  <span>{t.btnSelectService}</span>
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </button>

                <a 
                  href="#calculator"
                  className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full border-2 border-white/30 hover:border-white/60 transition-all duration-300 text-base"
                >
                  {t.btnViewPrices}
                </a>
              </div>

              {/* Rating & Trust Badge */}
              <div className="pt-6 flex flex-wrap items-center gap-6">
                <div className="bg-white/15 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center space-x-4 shadow-xl">
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="text-3xl font-black text-white">4.9</span>
                      <Star className="w-6 h-6 text-yellow-300 fill-current" />
                    </div>
                    <p className="text-xs text-blue-200 mt-1 max-w-[150px] leading-tight">
                      {t.ratingText}
                    </p>
                  </div>
                  <div className="w-px h-12 bg-white/10"></div>
                  <div className="flex flex-col justify-center">
                    {/* Tiny Face Stack */}
                    <div className="flex -space-x-2">
                      <img className="w-8 h-8 rounded-full border-2 border-blue-600 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="patient 1" />
                      <img className="w-8 h-8 rounded-full border-2 border-blue-600 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="patient 2" />
                      <img className="w-8 h-8 rounded-full border-2 border-blue-600 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80" alt="patient 3" />
                    </div>
                    <span className="text-sm font-bold text-white mt-1.5">{t.reviewsText}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Media Column - Doctor Portrait */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/20">
                {/* Background colored blur behind face */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/80 via-blue-600/40 to-transparent"></div>
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" 
                  alt="Doctor GlowDent smiling" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Float Badge inside image */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center font-bold text-lg">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">GlowDent Warranty</h4>
                    <p className="text-xs text-slate-500">100% Painless & Safe Guarantee</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* PROMOTIONS GRID SECTION */}
      <section id="promo" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight max-w-2xl leading-snug">
              {t.promoTitle}
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4"></div>
          </div>

          {/* Cards Grid Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Promo Card 1: 30% Off */}
            <div className="group relative bg-gradient-to-b from-slate-50 to-white hover:from-white hover:to-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_rgba(59,130,246,0.03)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[100px] transition-all group-hover:scale-110"></div>
              <div>
                <span className="text-blue-600 text-xs font-bold tracking-widest uppercase block mb-2">OFFER OF THE MONTH</span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                  <span className="text-blue-600 block text-3xl font-black mb-1">{t.card1Title}</span>
                  {t.card1Sub}
                </h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  {t.card1Desc}
                </p>
              </div>
              
              {/* Dental Illustration placeholder/graphics */}
              <div className="my-6 flex justify-center py-4">
                <svg className="w-28 h-28 transform group-hover:scale-110 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" fill="url(#blueGrad1)" fillOpacity="0.1"/>
                  {/* Clean modern toothbrush design */}
                  <rect x="42" y="15" width="16" height="55" rx="8" transform="rotate(-30 42 15)" fill="url(#blueGrad1)"/>
                  <path d="M26 35 L50 21" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round"/>
                  <rect x="22" y="22" width="12" height="18" rx="3" transform="rotate(-30 22 22)" fill="#93C5FD"/>
                  <circle cx="28" cy="18" r="4" fill="#3B82F6" className="animate-pulse"/>
                  <circle cx="20" cy="35" r="3" fill="#60A5FA"/>
                  <defs>
                    <linearGradient id="blueGrad1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3B82F6"/>
                      <stop offset="1" stopColor="#1D4ED8"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                <button 
                  onClick={() => { setIsBookModalOpen(true); setSelectedServiceType('service2'); }}
                  className="text-slate-900 font-extrabold text-sm flex items-center space-x-1 group-hover:text-blue-600 transition"
                >
                  <span>{t.btnMore}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Promo Card 2: FREE Initial consult (Special Highlighted Style as in Reference) */}
            <div className="group relative bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-[2rem] shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500 rounded-full opacity-30 blur-2xl"></div>
              <div>
                <span className="text-blue-100 text-xs font-bold tracking-widest uppercase block mb-2">MOST POPULAR</span>
                <h3 className="text-2xl font-extrabold leading-tight">
                  <span className="text-yellow-300 block text-3xl font-black mb-1">{t.card2Title}</span>
                  {t.card2Sub}
                </h3>
                <p className="text-blue-100/90 text-sm mt-3 leading-relaxed">
                  {t.card2Desc}
                </p>
              </div>

              {/* Dentist Chair Graphic */}
              <div className="my-6 flex justify-center py-4">
                <svg className="w-28 h-28 transform group-hover:scale-110 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" fill="white" fillOpacity="0.15"/>
                  <rect x="35" y="45" width="30" height="25" rx="4" fill="white" fillOpacity="0.9"/>
                  <rect x="42" y="25" width="16" height="20" rx="3" fill="#93C5FD"/>
                  <path d="M45 45 L45 75" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                  <path d="M55 45 L55 75" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                  <path d="M30 35 L70 35" stroke="#FDE047" strokeWidth="4" strokeLinecap="round"/>
                  <circle cx="70" cy="35" r="5" fill="#FDE047"/>
                </svg>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-blue-500/40">
                <button 
                  onClick={() => { setIsBookModalOpen(true); setSelectedServiceType('service1'); }}
                  className="text-white font-extrabold text-sm flex items-center space-x-1 hover:text-yellow-200 transition"
                >
                  <span>{t.btnMore}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">0 ₽ / $0</span>
              </div>
            </div>

            {/* Promo Card 3: Check-up */}
            <div className="group relative bg-gradient-to-b from-slate-50 to-white hover:from-white hover:to-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_rgba(59,130,246,0.03)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[100px]"></div>
              <div>
                <span className="text-blue-600 text-xs font-bold tracking-widest uppercase block mb-2">QUICK DIAGNOSTICS</span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                  <span className="text-blue-600 block text-3xl font-black mb-1">{t.card3Title}</span>
                  {t.card3Sub}
                </h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  {t.card3Desc}
                </p>
              </div>

              {/* Magnifying Glass with Tooth */}
              <div className="my-6 flex justify-center py-4">
                <svg className="w-28 h-28 transform group-hover:scale-110 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" fill="url(#blueGrad3)" fillOpacity="0.1"/>
                  {/* Stylized Tooth */}
                  <path d="M42 35 C42 28, 58 28, 58 35 C58 45, 55 55, 53 60 C51 63, 49 63, 47 60 C45 55, 42 45, 42 35 Z" fill="#93C5FD"/>
                  {/* Magnifier */}
                  <circle cx="52" cy="45" r="18" stroke="#3B82F6" strokeWidth="5" fill="white" fillOpacity="0.3"/>
                  <line x1="64" y1="57" x2="78" y2="71" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="blueGrad3" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#60A5FA"/>
                      <stop offset="1" stopColor="#2563EB"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                <button 
                  onClick={() => { setIsBookModalOpen(true); setSelectedServiceType('service1'); }}
                  className="text-slate-900 font-extrabold text-sm flex items-center space-x-1 group-hover:text-blue-600 transition"
                >
                  <span>{t.btnMore}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Promo Card 4: Family Program */}
            <div className="group relative bg-gradient-to-b from-slate-50 to-white hover:from-white hover:to-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_rgba(59,130,246,0.03)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden md:col-span-1 lg:col-span-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[100px]"></div>
              <div>
                <span className="text-blue-600 text-xs font-bold tracking-widest uppercase block mb-2">FAMILY VALUE</span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                  <span className="text-blue-600 block text-3xl font-black mb-1">{t.card4Title}</span>
                  {t.card4Sub}
                </h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  {t.card4Desc}
                </p>
              </div>

              {/* Tooth with Heart */}
              <div className="my-6 flex justify-center py-4">
                <svg className="w-28 h-28 transform group-hover:scale-110 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" fill="url(#blueGrad4)" fillOpacity="0.1"/>
                  <path d="M50 30 C45 20, 35 25, 35 35 C35 48, 50 62, 50 62 C50 62, 65 48, 65 35 C65 25, 55 20, 50 30 Z" fill="#3B82F6"/>
                  <circle cx="50" cy="40" r="10" fill="white"/>
                  <path d="M47 40 L49 42 L53 38" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="blueGrad4" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3B82F6"/>
                      <stop offset="1" stopColor="#1D4ED8"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                <button 
                  onClick={() => { setIsBookModalOpen(true); setSelectedServiceType('service5'); }}
                  className="text-slate-900 font-extrabold text-sm flex items-center space-x-1 group-hover:text-blue-600 transition"
                >
                  <span>{t.btnMore}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Promo Card 5: Second Implant */}
            <div className="group relative bg-gradient-to-b from-slate-50 to-white hover:from-white hover:to-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_rgba(59,130,246,0.03)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden md:col-span-1 lg:col-span-2">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[100px]"></div>
              <div>
                <span className="text-blue-600 text-xs font-bold tracking-widest uppercase block mb-2">IMPLANTOLOGY SPECIAL</span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                  <span className="text-blue-600 block text-3xl font-black mb-1">{t.card5Title}</span>
                  {t.card5Sub}
                </h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  {t.card5Desc}
                </p>
              </div>

              {/* Implant Architecture Graphic */}
              <div className="my-6 flex justify-center py-4">
                <svg className="w-28 h-28 transform group-hover:scale-110 transition-transform duration-300" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="20" width="160" height="60" rx="30" fill="#eff6ff"/>
                  {/* Threaded Screw Implant design */}
                  <path d="M100 25 L100 75" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M90 35 L110 35" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M92 45 L108 45" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M94 55 L106 55" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round"/>
                  <rect x="85" y="15" width="30" height="10" rx="2" fill="#2563EB"/>
                  {/* Glowing implant cap */}
                  <circle cx="100" cy="10" r="4" fill="#60A5FA"/>
                </svg>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                <button 
                  onClick={() => { setIsBookModalOpen(true); setSelectedServiceType('service3'); }}
                  className="text-slate-900 font-extrabold text-sm flex items-center space-x-1 group-hover:text-blue-600 transition"
                >
                  <span>{t.btnMore}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE VALUE CALCULATOR (Caring for budget!) */}
      <section id="calculator" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-extrabold tracking-wide uppercase mb-3">
              <Calculator className="w-4 h-4" />
              <span>Smart Calculator</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">{t.calcTitle}</h2>
            <p className="text-slate-600 mt-2 text-sm">{t.calcSubtitle}</p>
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-6 md:p-10">
            <div className="space-y-4">
              {activeCalculatorServices.map((service) => {
                const isSelected = selectedCalcServices.includes(service.id);
                return (
                  <div 
                    key={service.id}
                    onClick={() => toggleCalcService(service.id)}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? 'border-blue-600 bg-blue-50/40 shadow-sm' 
                        : 'border-slate-100 bg-white hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center border-2 transition ${
                        isSelected ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-base">{service.name}</h4>
                        <span className="inline-block mt-1 bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-md uppercase">
                          {service.promo} DISCOUNT
                        </span>
                      </div>
                    </div>

                    <div className="flex items-baseline space-x-3 mt-3 sm:mt-0 pl-9 sm:pl-0">
                      <span className="text-slate-400 line-through text-sm font-semibold">
                        {service.original.toLocaleString()} {lang === 'ru' ? '₽' : '$'}
                      </span>
                      <span className="text-blue-600 font-extrabold text-xl">
                        {service.current.toLocaleString()} {lang === 'ru' ? '₽' : '$'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Calculations Result */}
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div>
                <span className="text-xs text-slate-400 font-bold uppercase block tracking-wider">{t.calcSaving}</span>
                <span className="text-2xl font-extrabold text-green-600">
                  {selectedCalcServices.length > 0 ? `-${totalSavings.toLocaleString()} ${lang === 'ru' ? '₽' : '$'}` : `0 ${lang === 'ru' ? '₽' : '$'}`}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-400 font-bold uppercase block tracking-wider">{t.calcTotal}</span>
                <span className="text-3xl font-black text-blue-600">
                  {selectedCalcServices.length > 0 ? `${totalCurrentPrice.toLocaleString()} ${lang === 'ru' ? '₽' : '$'}` : `0 ${lang === 'ru' ? '₽' : '$'}`}
                </span>
              </div>
              <div className="text-right">
                <button 
                  onClick={() => setIsBookModalOpen(true)}
                  disabled={selectedCalcServices.length === 0}
                  className={`w-full py-4 px-6 rounded-2xl font-extrabold text-sm transition-all duration-300 shadow-md ${
                    selectedCalcServices.length > 0
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20 active:scale-95'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {selectedCalcServices.length > 0 ? t.btnBook : t.calcPlaceholder}
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TRUST / VALUES / FAMILY SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Col: Headings & 4 Value cards */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {t.trustTitle}
                </h2>
                <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Value Item 1 */}
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-blue-600/10">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-slate-950 text-base mb-1">{t.trustCard1Title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{t.trustCard1Desc}</p>
                </div>

                {/* Value Item 2 */}
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-blue-600/10">
                    <User className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-slate-950 text-base mb-1">{t.trustCard2Title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{t.trustCard2Desc}</p>
                </div>

                {/* Value Item 3 */}
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-blue-600/10">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-slate-950 text-base mb-1">{t.trustCard3Title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{t.trustCard3Desc}</p>
                </div>

                {/* Value Item 4 */}
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-blue-600/10">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-slate-950 text-base mb-1">{t.trustCard4Title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{t.trustCard4Desc}</p>
                </div>

              </div>
            </div>

            {/* Right Col: Family Photo Backdrop (Mirroring reference layout) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80" 
                  alt="Happy family after treatment" 
                  className="w-full object-cover aspect-[4/5]"
                />
                
                {/* Overlaid stats badge */}
                <div className="absolute top-6 left-6 bg-blue-600 text-white py-3 px-6 rounded-2xl shadow-xl font-bold text-sm">
                  ★ Rated #1 in Moscow
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-xs uppercase tracking-widest font-black text-blue-300 mb-1">Clinic Mission</p>
                  <h3 className="text-xl font-black">"Healthy family smiles make us work with maximum perfection."</h3>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* MEET OUR EXPERTS / SPECIALISTS */}
      <section id="doctors" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Master Dental Surgeons</h2>
            <p className="text-slate-500 mt-2">Only premium certified experts with continuous European training</p>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Doc 1 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="h-72 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80" alt="Doctor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold">Exp: 14 Yrs</div>
              </div>
              <div className="p-6">
                <h4 className="font-extrabold text-slate-900 text-lg">Dr. Alexander Rostov</h4>
                <p className="text-xs text-blue-600 font-bold uppercase mt-1">Chief Implantologist</p>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">Specializes in complete micro-invasive dental restorations and complex crowns.</p>
              </div>
            </div>

            {/* Doc 2 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="h-72 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=300&q=80" alt="Doctor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold">Exp: 11 Yrs</div>
              </div>
              <div className="p-6">
                <h4 className="font-extrabold text-slate-900 text-lg">Dr. Elena Volkova</h4>
                <p className="text-xs text-blue-600 font-bold uppercase mt-1">Orthodontics Specialist</p>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">Pioneer in clear aligner technology (Invisalign certified) for perfect bite alignments.</p>
              </div>
            </div>

            {/* Doc 3 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="h-72 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80" alt="Doctor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold">Exp: 8 Yrs</div>
              </div>
              <div className="p-6">
                <h4 className="font-extrabold text-slate-900 text-lg">Dr. Sergey Lazarev</h4>
                <p className="text-xs text-blue-600 font-bold uppercase mt-1">Aesthetic Therapist</p>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">Master of ultra-thin ceramic veneers, composite bonding, and laser teeth whitening.</p>
              </div>
            </div>

            {/* Doc 4 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="h-72 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=300&q=80" alt="Doctor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold">Exp: 10 Yrs</div>
              </div>
              <div className="p-6">
                <h4 className="font-extrabold text-slate-900 text-lg">Dr. Anna Smirnova</h4>
                <p className="text-xs text-blue-600 font-bold uppercase mt-1">Pediatric Dentist</p>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">Dedicated to making dental visits absolute fun and stress-free for kids of all ages.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ARTICLES / BLOG MINI-GRID */}
      <section id="articles" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Expert Dental Insights & Tips</h2>
              <p className="text-slate-500 mt-2">Empowering your oral health knowledge straight from clinical specialists</p>
            </div>
            <button className="mt-4 md:mt-0 text-blue-600 font-extrabold flex items-center space-x-1.5 hover:text-blue-700 transition">
              <span>View All Articles</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <div className="group cursor-pointer">
              <div className="h-56 rounded-2xl overflow-hidden mb-5">
                <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80" alt="Dental Care" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">PREVENTION</span>
              <h4 className="font-extrabold text-slate-900 text-lg mt-2 group-hover:text-blue-600 transition">How to prevent micro-caries before it requires deep drilling</h4>
              <p className="text-slate-500 text-xs mt-3 leading-relaxed">Learn how early remineralization and correct home care routines can safely heal weak enamel patches.</p>
            </div>

            {/* Article 2 */}
            <div className="group cursor-pointer">
              <div className="h-56 rounded-2xl overflow-hidden mb-5">
                <img src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=400&q=80" alt="Tech" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">CLINIC TECH</span>
              <h4 className="font-extrabold text-slate-900 text-lg mt-2 group-hover:text-blue-600 transition">3D Intraoral Scanning: Say goodbye to messy silicone impressions</h4>
              <p className="text-slate-500 text-xs mt-3 leading-relaxed">How our digital workflow guarantees millimeter-precise crowns and comfortable orthodontic alignment planning.</p>
            </div>

            {/* Article 3 */}
            <div className="group cursor-pointer">
              <div className="h-56 rounded-2xl overflow-hidden mb-5">
                <img src="https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&w=400&q=80" alt="Aesthetics" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">AESTHETICS</span>
              <h4 className="font-extrabold text-slate-900 text-lg mt-2 group-hover:text-blue-600 transition">Safe Professional Whitening: Facts vs Common Household Myths</h4>
              <p className="text-slate-500 text-xs mt-3 leading-relaxed">Why acidic home pastes ruin enamel, and how clinical Zoom4 lamps deliver up to 8 shades lighter teeth completely safely.</p>
            </div>

          </div>

        </div>
      </section>

      {/* CHAT WIDGET (GEMINI POWERED) */}
      <div className="fixed bottom-6 right-6 z-50">
        
        {/* Toggle Button */}
        <button 
          onClick={() => setIsChatOpen(prev => !prev)}
          className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-105 transition duration-200"
        >
          {isChatOpen ? <X className="w-6 h-6 animate-spin-once" /> : <MessageSquare className="w-6 h-6" />}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
        </button>

        {/* Chat Window Panel */}
        {isChatOpen && (
          <div className="absolute bottom-18 right-0 w-[350px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col z-50">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-extrabold text-sm">
                  AI
                </div>
                <div>
                  <h4 className="font-extrabold text-sm leading-tight">{t.aiTitle}</h4>
                  <span className="text-[10px] text-blue-100 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>
                    <span>Always Online</span>
                  </span>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-blue-100 transition">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation Area */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {chatMessages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                  }`}>
                    <p>{msg.text}</p>
                    <span className={`block text-[9px] mt-1.5 text-right ${
                      msg.sender === 'user' ? 'text-blue-200' : 'text-slate-400'
                    }`}>{msg.time}</span>
                  </div>
                </div>
              ))}
              
              {aiTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-3 shadow-sm">
                    <span className="flex space-x-1 items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 flex items-center space-x-2 bg-white">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={t.aiInputPlaceholder}
                className="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition"
              />
              <button 
                type="submit"
                disabled={!chatInput.trim()}
                className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 disabled:opacity-40 transition"
              >
                <Send className="w-4.5 h-4.5" />
              </button>
            </form>

          </div>
        )}

      </div>

      {/* APPOINTMENT SCHEDULER MODAL */}
      {isBookModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl max-w-md w-full overflow-hidden border border-slate-100">
            
            {/* Header Color Accent */}
            <div className="h-3 bg-blue-600"></div>

            {/* Close Button */}
            <button 
              onClick={() => setIsBookModalOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Container */}
            <div className="p-8 sm:p-10">
              
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">{t.modalTitle}</h3>
                <p className="text-slate-500 text-xs mt-2">{t.modalSubtitle}</p>
              </div>

              {bookingSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center text-green-800 space-y-3">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto text-xl">
                    ✓
                  </div>
                  <p className="font-extrabold text-sm">{t.modalSuccess}</p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">{t.inputName}</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-400" />
                      <input 
                        required
                        type="text" 
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">{t.inputPhone}</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-400" />
                      <input 
                        required
                        type="tel" 
                        value={bookingPhone}
                        onChange={(e) => setBookingPhone(e.target.value)}
                        placeholder="+7 (999) 123-45-67"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                  </div>

                  {/* Service Direction Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">{t.inputService}</label>
                    <select 
                      value={selectedServiceType}
                      onChange={(e) => setSelectedServiceType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition cursor-pointer"
                    >
                      <option value="service1">{t.service1}</option>
                      <option value="service2">{t.service2}</option>
                      <option value="service3">{t.service3}</option>
                      <option value="service4">{t.service4}</option>
                      <option value="service5">{t.service5}</option>
                    </select>
                  </div>

                  {/* Submit button */}
                  <button 
                    type="submit"
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl transition duration-200 mt-4 shadow-lg shadow-blue-500/10 active:scale-[0.98]"
                  >
                    {t.btnSubmit}
                  </button>

                </form>
              )}

            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer id="footer" className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-slate-800">
            
            {/* Logo/Info block */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl flex items-center justify-center font-bold text-xl">
                  G
                </div>
                <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                  {t.brand}
                </span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Premium quality family dental solutions with ultra-modern technologies, state-certified materials, and maximum comfort.
              </p>
            </div>

            {/* Links Block 1 */}
            <div>
              <h4 className="font-extrabold text-sm text-slate-100 uppercase tracking-widest mb-4">Clinic Links</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#about" className="hover:text-blue-400 transition">{t.navAbout}</a></li>
                <li><a href="#promo" className="hover:text-blue-400 transition">{t.navPromo}</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">{t.navServices}</a></li>
                <li><a href="#doctors" className="hover:text-blue-400 transition">{t.navDoctors}</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="font-extrabold text-sm text-slate-100 uppercase tracking-widest mb-4">Contact Desk</h4>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Lomonosovsky Prospekt 24, Moscow</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Daily: 09:00 — 21:00</span>
                </li>
              </ul>
            </div>

            {/* Disclaimer Info */}
            <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-800">
              <div className="flex items-start space-x-2 text-amber-400">
                <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs text-slate-100">Medical Disclaimer</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                    There are contraindications. Consult an expert medical doctor before making any diagnosis or treatment decision.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <p>{t.footerText}</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Usage License</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
I9