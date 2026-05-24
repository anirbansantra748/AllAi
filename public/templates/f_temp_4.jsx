import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  TrendingDown, 
  DollarSign, 
  FileText, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  Layers, 
  MapPin, 
  Clock, 
  Users, 
  Boxes, 
  Globe2, 
  Percent, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Plus, 
  Minus, 
  Info, 
  Sliders, 
  ExternalLink,
  MessageCircle,
  X,
  Bell,
  Copy,
  RefreshCw,
  Eye
} from 'lucide-react';

// Custom smoky background style injection for that gorgeous dark burgundy ambient paint effect
const styleInject = `
  @keyframes smoke-float {
    0% { transform: translate(0px, 0px) scale(1); opacity: 0.15; }
    33% { transform: translate(30px, -50px) scale(1.15); opacity: 0.25; }
    66% { transform: translate(-20px, 20px) scale(0.9); opacity: 0.2; }
    100% { transform: translate(0px, 0px) scale(1); opacity: 0.15; }
  }
  @keyframes card-glow {
    0%, 100% { border-color: rgba(128, 0, 32, 0.2); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4); }
    50% { border-color: rgba(186, 12, 47, 0.45); box-shadow: 0 4px 35px rgba(186, 12, 47, 0.15); }
  }
  .animate-smoke-1 {
    animation: smoke-float 18s infinite ease-in-out;
  }
  .animate-smoke-2 {
    animation: smoke-float 25s infinite ease-in-out reverse;
  }
  .premium-glow-card {
    animation: card-glow 8s infinite ease-in-out;
  }
  .premium-gradient-text {
    background: linear-gradient(135deg, #F5F5F0 0%, #D4AF37 50%, #C5A059 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .crimson-gradient-text {
    background: linear-gradient(135deg, #FF3E6C 0%, #BA0C2F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #0D0D0D;
  }
  ::-webkit-scrollbar-thumb {
    background: #4A0404;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #800020;
  }
`;

export default function App() {
  // Notification states
  const [notifications, setNotifications] = useState([]);
  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4000);
  };

  // Custom App ID
  const appId = typeof __app_id !== 'undefined' ? __app_id : 'oriental-express';

  // Calculator State
  const [cargoWeight, setCargoWeight] = useState(450); // in kg
  const [cargoVolume, setCargoVolume] = useState(2.5); // in m3
  const [cargoValue, setCargoValue] = useState(12000); // USD
  const [productCategory, setProductCategory] = useState('electronics');
  const [hasInsurance, setHasInsurance] = useState(true);
  const [deliverySpeed, setDeliverySpeed] = useState('standard'); // 'fast', 'express'
  const [selectedRoute, setSelectedRoute] = useState('railway'); // 'railway', 'sea', 'air'

  // Calculations
  const baseRates = {
    electronics: { customPercent: 0.10, baseKgRate: 3.2 },
    apparel: { customPercent: 0.08, baseKgRate: 2.8 },
    equipment: { customPercent: 0.12, baseKgRate: 4.1 },
    auto: { customPercent: 0.15, baseKgRate: 5.0 },
  };

  const calculatedDelivery = () => {
    const rateData = baseRates[productCategory];
    let multiplier = 1.0;
    if (deliverySpeed === 'fast') multiplier = 1.35;
    if (deliverySpeed === 'express') multiplier = 1.75;

    let routeMultiplier = 1.0;
    if (selectedRoute === 'air') routeMultiplier = 2.2;
    if (selectedRoute === 'sea') routeMultiplier = 0.65;

    const baseFreight = cargoWeight * rateData.baseKgRate * multiplier * routeMultiplier;
    const volumeCost = cargoVolume * 80; // $80 per cubic meter
    const customDuties = cargoValue * rateData.customPercent;
    const insuranceCost = hasInsurance ? (cargoValue * 0.008) : 0;
    const clearanceFee = 250; // standard flat clearance

    const total = baseFreight + volumeCost + customDuties + insuranceCost + clearanceFee;
    const timeframe = selectedRoute === 'air' ? '5-8 Days' : selectedRoute === 'railway' ? '14-18 Days' : '30-35 Days';

    return {
      freight: Math.round(baseFreight + volumeCost),
      customs: Math.round(customDuties),
      insurance: Math.round(insuranceCost),
      clearance: clearanceFee,
      total: Math.round(total),
      timeframe
    };
  };

  const costResult = calculatedDelivery();

  // Selected State for Interactive Problem Section
  const [selectedProblem, setSelectedProblem] = useState(0);
  const problems = [
    {
      title: "Поиск и проверка поставщиков",
      risk: "95%",
      description: "Ненадежные фабрики и поставщики, языковой барьер ведут к риску отправки бракованной продукции или полной потере средств при предоплате.",
      solution: "Наша база проверенных фабрик в Китае и собственный постоянный штат инспекторов, выезжающих на заводы для пошагового контроля качества производства до погрузки в контейнер.",
      lossMetric: "До 40% от стоимости партии на браке"
    },
    {
      title: "Логистика и пробки на границе",
      risk: "80%",
      description: "Сложности выбора оптимального маршрута, острый дефицит порожних контейнеров и непредвиденные очереди на ключевых пограничных пунктах пропуска.",
      solution: "Собственные гарантированные контейнерные слоты, мультимодальные цепочки (авто, ЖД, море), отлаженный обход классических пробок за счет альтернативных терминалов.",
      lossMetric: "От 10 до 35 дней непредвиденного простоя"
    },
    {
      title: "Таможенные коллизии",
      risk: "90%",
      description: "Путаница в документах, неверно подобранные коды ТН ВЭД и постоянно меняющиеся правила импорта ведут к крупным штрафам и риску конфискации всего груза.",
      solution: "Оформление документов под ключ нашими штатными сертифицированными брокерами. Полная юридическая ответственность за соблюдение таможенного законодательства.",
      lossMetric: "Штрафы до 300% от стоимости пошлины"
    },
    {
      title: "Скрытые финансовые комиссии",
      risk: "75%",
      description: "Скрытые расходы посредников на конвертациях, валютный контроль, задержки транзакций из-за санкционного давления и отключения SWIFT банков.",
      solution: "Прозрачные белые платежи через легальные расчетные хабы. Прямая оплата в юанях по выгодному межбанковскому курсу с предоставлением закрывающих документов.",
      lossMetric: "От 5% до 12% переплаты на комиссиях"
    }
  ];

  // Callback form submit state
  const [formData, setFormData] = useState({ name: '', phone: '', telegram: '', cargoType: 'Оборудование' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone || !formData.name) {
      showToast("Пожалуйста, заполните имя и телефон", "error");
      return;
    }
    setFormSubmitted(true);
    showToast("Заявка успешно отправлена! Наш специалист свяжется с вами.", "success");
  };

  // Quick interactive test mode for the design system playground
  const [selectedDesignTheme, setSelectedDesignTheme] = useState('oriental-crimson');
  const [testToggle, setTestToggle] = useState(true);
  const [testSlider, setTestSlider] = useState(70);
  const [activeFAQ, setActiveFAQ] = useState(0);

  // FAQ Array
  const faqs = [
    {
      q: "Какие гарантии сохранности груза вы предоставляете?",
      a: "Мы несем полную финансовую ответственность по официальному договору. Если товар будет поврежден или утерян по вине перевозчика, мы компенсируем 100% его задекларированной стоимости. Дополнительно каждый груз страхуется в ведущих страховых компаниях."
    },
    {
      q: "Как происходит оплата поставщику в Китай в условиях санкций?",
      a: "Мы предлагаем полностью легальный белый финансовый аутсорсинг. У нас настроены прямые каналы расчетов в юанях с китайскими фабриками через уполномоченные банки. Вы платите рубли на нашу российскую компанию, мы отправляем юани напрямую поставщику."
    },
    {
      q: "Что входит в услугу таможенного оформления 'под ключ'?",
      a: "Полный комплекс: классификация товаров по ТН ВЭД, расчет таможенной стоимости и пошлин, сбор и подача деклараций, прохождение фитосанитарного и ветеринарного контроля, получение разрешительных документов (сертификатов, деклараций соответствия) и представление ваших интересов в таможенных органах."
    },
    {
      q: "Каковы минимальные объемы грузов для отправки?",
      a: "Для сборных грузов (LCL) минимальный объем составляет всего 100 кг или 0.5 кубических метра. Для генеральных грузов мы поставляем индивидуальные контейнеры любого типа (20ft, 40ft, HQ, Ref)."
    }
  ];

  // Design System Playground copy code trigger
  const copyToClipboard = (text) => {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    showToast("Стиль скопирован в буфер обмена!");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F0] font-sans antialiased selection:bg-[#BA0C2F] selection:text-white relative overflow-x-hidden">
      
      {/* Injecting Styles */}
      <style dangerouslySetInnerHTML={{ __html: styleInject }} />

      {/* Cinematic Smoke & Fire Backdrop Ambient Overlays */}
      <div className="absolute top-0 left-0 w-full h-[1200px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-200px] left-[15%] w-[80vw] h-[80vw] max-w-[1000px] rounded-full bg-gradient-to-tr from-[#3D000C] to-transparent opacity-40 blur-[140px] animate-smoke-1"></div>
        <div className="absolute top-[300px] right-[-100px] w-[50vw] h-[50vw] max-w-[700px] rounded-full bg-gradient-to-bl from-[#800020] to-transparent opacity-15 blur-[120px] animate-smoke-2"></div>
        <div className="absolute top-[80px] left-[50%] -translate-x-1/2 w-full max-w-[1400px] h-px bg-gradient-to-r from-transparent via-[#800020]/40 to-transparent"></div>
      </div>

      {/* Warm Ambient light separator in the background */}
      <div className="absolute top-[1800px] left-[-200px] w-[600px] h-[600px] bg-[#3A0A15]/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[3400px] right-[-200px] w-[700px] h-[700px] bg-[#2E020A]/30 rounded-full blur-[180px] pointer-events-none"></div>

      {/* Floating Notifications Toaster */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        {notifications.map(notif => (
          <div key={notif.id} className="pointer-events-auto bg-[#141414] border-l-4 border-[#BA0C2F] text-[#F5F5F0] p-4 rounded-r-lg shadow-2xl flex items-start gap-3 transform translate-y-0 transition-all duration-300 animate-bounce-short">
            {notif.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-[#BA0C2F] shrink-0 mt-0.5" />
            )}
            <div className="flex-1 text-sm">{notif.message}</div>
            <button onClick={() => setNotifications(prev => prev.filter(n => n.id !== notif.id))} className="text-gray-500 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-[#241A1C] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand area */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-[#BA0C2F] to-[#4A0404] flex items-center justify-center border border-[#800020] relative overflow-hidden shadow-lg shadow-[#800020]/20">
              <span className="font-serif text-xl font-bold text-white tracking-widest relative z-10">O</span>
              <div className="absolute inset-0 bg-[#800020] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
            <div>
              <span className="font-serif text-lg tracking-[0.25em] text-[#F5F5F0] block font-bold leading-none">ORIENTAL</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold">EXPRESS</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-sm font-medium tracking-wide text-gray-400 hover:text-white hover:underline decoration-red-500 underline-offset-8 transition-colors">Главная</a>
            <a href="#problems" className="text-sm font-medium tracking-wide text-gray-400 hover:text-white hover:underline decoration-red-500 underline-offset-8 transition-colors">Анализ Рисков</a>
            <a href="#zones" className="text-sm font-medium tracking-wide text-gray-400 hover:text-white hover:underline decoration-red-500 underline-offset-8 transition-colors">Зоны Ответственности</a>
            <a href="#calculator" className="text-sm font-medium tracking-wide text-gray-400 hover:text-white hover:underline decoration-red-500 underline-offset-8 transition-colors">Калькулятор тарифа</a>
            <a href="#specials" className="text-sm font-medium tracking-wide text-gray-400 hover:text-white hover:underline decoration-red-500 underline-offset-8 transition-colors">Условия</a>
            <a href="#playground" className="text-sm font-medium tracking-wide text-[#C5A059] hover:text-[#EAE3D2] transition-colors flex items-center gap-1.5 bg-[#800020]/25 px-3 py-1 rounded-full border border-[#800020]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>UI Спецификации</span>
            </a>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-xs text-gray-400">Срочная связь</span>
              <span className="text-sm font-mono text-[#F5F5F0] hover:text-[#BA0C2F] transition-colors cursor-pointer">@KEYTLIS_PPTX</span>
            </div>
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded bg-gradient-to-r from-[#BA0C2F] to-[#800020] text-xs uppercase tracking-widest font-semibold hover:opacity-90 active:scale-95 transition-all border border-[#9A102F] shadow-lg shadow-[#800020]/20 text-white"
            >
              Консультация
            </a>
          </div>

        </div>
      </header>

      {/* HERO SECTION STAGE */}
      <section id="hero" className="relative pt-8 pb-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Premium copy & core value proposition */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#1A0A0E] border border-[#800020] px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-[#F5F5F0] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#BA0C2F] animate-pulse"></span>
              БЕЛАЯ ЛОГИСТИКА БЕЗ РИСКОВ ДЛЯ БИЗНЕСА
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-[#F5F5F0]">
                ORIENTAL<br/>
                <span className="premium-gradient-text">EXPRESS</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light max-w-xl leading-relaxed">
                Импорт из Китая без скрытых рисков, переплат и задержек на таможне. Берем на себя всю цепочку поставок от поиска завода до вашего склада.
              </p>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 border-t border-b border-[#241A1C] py-6 max-w-lg">
              <div>
                <div className="font-serif text-3xl font-bold text-[#EAE3D2]">&gt;5 лет</div>
                <div className="text-xs text-gray-400 mt-1">Опыта на рынке</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-[#EAE3D2]">10/10</div>
                <div className="text-xs text-gray-400 mt-1">Надежность рейсов</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-[#EAE3D2]">~250+</div>
                <div className="text-xs text-gray-400 mt-1">Контейнеров в месяц</div>
              </div>
            </div>

            {/* CTA action group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md">
              <a 
                href="#calculator" 
                className="flex-1 px-8 py-4 rounded bg-gradient-to-r from-[#BA0C2F] to-[#4A0404] hover:from-[#d11036] hover:to-[#5e0707] text-sm uppercase tracking-widest font-bold text-center transition-all duration-300 border border-[#BA0C2F] shadow-xl shadow-[#BA0C2F]/10 flex items-center justify-center gap-2"
              >
                Рассчитать поставку
                <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#problems" 
                className="flex-1 px-8 py-4 rounded bg-[#141414] hover:bg-[#1E1E1E] text-sm uppercase tracking-widest font-bold text-center border border-[#241A1C] text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Посмотреть риски
              </a>
            </div>

            {/* Micro-avatars of inspection team in Shenzhen */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-9 h-9 rounded-full border-2 border-[#0A0A0A] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120)' }}></div>
                <div className="w-9 h-9 rounded-full border-2 border-[#0A0A0A] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120)' }}></div>
                <div className="w-9 h-9 rounded-full border-2 border-[#0A0A0A] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120)' }}></div>
              </div>
              <p className="text-xs text-gray-400">
                Собственный штат инспекторов в <span className="text-white font-semibold">Шэньчжэне, Иу, Гуанчжоу</span>. Контролируем всё.
              </p>
            </div>
          </div>

          {/* Right Column: Breathtaking Equine & Fire Graphic Banner simulating the uploaded asset */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#3A181E] bg-[#120B0C] p-2 shadow-2xl shadow-red-950/20 group">
              
              {/* Image banner mock with premium styling overlay */}
              <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] rounded-xl overflow-hidden">
                
                {/* Background artistic horse and smoke render (Unsplash high quality dark styled artistic horse representing speed, dynamic movement and raw elegance) */}
                <img 
                  src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=1200" 
                  alt="Dynamic speed" 
                  className="w-full h-full object-cover grayscale opacity-25 scale-105 group-hover:scale-100 transition-transform duration-700"
                />

                {/* Simulated dynamic paint overlay block inspired by the uploaded asset (A majestic black horse flying, engulfed in gorgeous dark crimson / scarlet smoke plumes) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-[#3A0A15]/40 to-transparent"></div>

                {/* SVG/Emblem representing majestic dynamic horse power */}
                <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden pointer-events-none">
                  {/* Abstract red fire glow represent speed */}
                  <div className="absolute top-[20%] right-[-10%] w-[120%] h-[60%] bg-gradient-to-l from-[#BA0C2F]/50 via-[#800020]/20 to-transparent rounded-full blur-[40px] mix-blend-color-dodge"></div>
                </div>

                {/* Artistic Floating Circles resembling the original design layout left badges */}
                <div className="absolute bottom-6 left-6 flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full border border-[#BA0C2F]/80 bg-[#140A0D]/90 flex items-center justify-center overflow-hidden shadow-lg hover:scale-105 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=120)' }}></div>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[#BA0C2F]/55 bg-[#140A0D]/90 flex items-center justify-center overflow-hidden shadow-lg hover:scale-105 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1598974357801-ae41408d1337?auto=format&fit=crop&q=80&w=120)' }}></div>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[#BA0C2F]/30 bg-[#140A0D]/90 flex items-center justify-center overflow-hidden shadow-lg hover:scale-105 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=120)' }}></div>
                  </div>
                </div>

                {/* Big Badge Overlay in the corner */}
                <div className="absolute top-6 right-6 bg-[#0F080A]/90 border border-[#BA0C2F]/50 px-4 py-2 rounded backdrop-blur text-right">
                  <span className="block text-[9px] uppercase tracking-widest text-[#BA0C2F] font-bold">ОТ ПОСТАВЩИКА</span>
                  <span className="block text-xs text-[#F5F5F0] font-serif font-semibold mt-0.5">До вашего склада в РФ</span>
                </div>

                {/* Interactive Overlay Badge indicating Live Tracking */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-[#0A0A0A]/90 border border-[#241A1C] px-3 py-1.5 rounded-full backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                  <span className="text-[10px] tracking-widest uppercase font-mono text-gray-300">Южный маршрут активен</span>
                </div>

                {/* Central Focus Accent representing Majestic Horse from the image */}
                <div className="absolute top-[15%] left-[30%] w-[200px] h-[250px] pointer-events-none mix-blend-screen opacity-90 transition-transform duration-700 group-hover:scale-105" style={{ transform: 'rotate(-5deg)' }}>
                  {/* Stylized vector rendering of a horse silhouette with fire mane */}
                  <svg viewBox="0 0 100 100" className="w-full h-full text-red-500 drop-shadow-[0_0_15px_rgba(186,12,47,0.7)]" fill="currentColor">
                    <path d="M75,30 C72,25 60,18 52,22 C48,24 45,28 42,32 C38,37 32,45 28,52 C20,68 15,75 10,85 C15,82 25,78 32,74 C36,71 39,66 43,62 C48,56 55,42 62,38 C68,34 76,32 75,30 Z" className="animate-pulse" />
                    <circle cx="58" cy="27" r="1.5" fill="#FFFFFF" />
                  </svg>
                </div>
                
              </div>

              {/* Lower info strip */}
              <div className="p-6 bg-[#0F080A] border-t border-[#241A1C] space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#BA0C2F] font-bold">Главный Принцип:</span>
                  <span className="text-xs font-mono text-gray-400">СБОРНЫЙ ИЛИ ЦЕЛЫЙ</span>
                </div>
                <h3 className="font-serif text-xl text-[#F5F5F0]">Импорт без рисков и непредвиденных трат</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  От поиска надежного фабриканта в КНР до полной очистки груза на таможне в РФ. Берем всю логистику на себя, вы получаете готовый очищенный товар на своем складе с полным пакетом документов (ГТД, Торг-12).
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: WHAT EATS YOUR PROFIT? (Interactive Problem Analyzer with loss-counter) */}
      <section id="problems" className="py-24 border-t border-[#1C1214] bg-[#0C0708] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#BA0C2F] font-bold block">ГОРЬКАЯ ПРАВДА РЫНКА</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F0]">
              Что «съедает» вашу <span className="premium-gradient-text">прибыль?</span>
            </h2>
            <p className="text-sm text-gray-400">
              Это не просто неудобства. Это системные проблемы, которые прямо сейчас уничтожают маржинальность вашего бизнеса и мешают масштабироваться.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left list of problems (interactive selectors) */}
            <div className="lg:col-span-5 space-y-4">
              {problems.map((problem, idx) => (
                <div 
                  key={idx}
                  onClick={() => {
                    setSelectedProblem(idx);
                    showToast(`Переключено на: ${problem.title}`, 'info');
                  }}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden ${
                    selectedProblem === idx 
                      ? 'bg-[#1C0F12] border-[#BA0C2F] shadow-lg shadow-[#BA0C2F]/10' 
                      : 'bg-[#110D0E] border-[#1F1719] hover:bg-[#161112] hover:border-[#382629]'
                  }`}
                >
                  {/* Subtle index ribbon */}
                  <div className="absolute top-0 right-0 px-3 py-1 bg-[#1C0F12] border-l border-b border-[#2D1B1E] text-[10px] font-mono text-gray-400">
                    КЕЙС 0{idx + 1}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded flex items-center justify-center text-sm font-bold ${
                      selectedProblem === idx ? 'bg-[#BA0C2F] text-white' : 'bg-[#1E1618] text-[#BA0C2F]'
                    }`}>
                      {idx === 0 && <Users className="w-5 h-5" />}
                      {idx === 1 && <Boxes className="w-5 h-5" />}
                      {idx === 2 && <FileText className="w-5 h-5" />}
                      {idx === 3 && <DollarSign className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-serif text-base text-[#F5F5F0] font-semibold">{problem.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-mono text-red-500 font-bold uppercase">РИСК: {problem.risk}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span className="text-[10px] text-gray-400 font-medium">Критично для СМБ</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right details panel (with custom interactive risk visualization) */}
            <div className="lg:col-span-7 bg-[#120B0C] rounded-2xl border border-[#2D191C] p-8 space-y-8 premium-glow-card">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#241A1C] pb-6">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-red-500">ТЕКУЩАЯ ПРОБЛЕМА ПОСТАВОК</span>
                  <h3 className="font-serif text-2xl font-bold text-[#F5F5F0] mt-1">{problems[selectedProblem].title}</h3>
                </div>
                <div className="px-4 py-2 bg-[#1F0D10] border border-[#BA0C2F]/50 rounded-lg">
                  <span className="text-[10px] uppercase text-gray-400 block tracking-wider leading-none">ВЕРОЯТНОСТЬ</span>
                  <span className="text-2xl font-serif text-[#BA0C2F] font-black">{problems[selectedProblem].risk}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-[#BA0C2F] font-bold">Симптомы и последствия:</h4>
                <p className="text-gray-300 text-sm leading-relaxed bg-[#191012] p-4 rounded border border-[#241A1C]">
                  "{problems[selectedProblem].description}"
                </p>
              </div>

              {/* Dynamic Interactive Counter Area simulating real-time losses */}
              <div className="p-6 bg-gradient-to-br from-[#1C0F12] to-[#0A0A0A] rounded-xl border border-[#3A181E] relative overflow-hidden">
                <div className="absolute top-2 right-3 flex items-center gap-1.5 bg-[#2E0B11] px-2 py-0.5 rounded text-[9px] text-[#BA0C2F] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  Критический порог
                </div>
                <span className="text-xs uppercase tracking-widest text-[#BA0C2F] font-bold block mb-1">ФИНАНСОВЫЕ ПОТЕРИ</span>
                <div className="text-3xl font-serif font-black text-white">{problems[selectedProblem].lossMetric}</div>
                <p className="text-xs text-gray-400 mt-2">
                  Средний показатель, выведенный на основе аудита более 120 импортеров за последний год.
                </p>
              </div>

              {/* Solution box representation of Oriental Express capability */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-950 flex items-center justify-center text-green-400 border border-green-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-sm uppercase tracking-widest text-green-400 font-bold">КАК РЕШАЕТ ORIENTAL EXPRESS:</h4>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed pl-7">
                  {problems[selectedProblem].solution}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: YOUR IMPORT - OUR ZONE OF RESPONSIBILITY */}
      <section id="zones" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-[#BA0C2F] font-bold block">БЕЗУПРЕЧНЫЙ КОНТРОЛЬ</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F0]">
              Ваш импорт — наша зона <span className="premium-gradient-text">ответственности</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm text-left">
            Мы берем на себя полную юридическую и финансовую ответственность за соблюдение сроков, сохранность груза и прохождение таможни.
          </p>
        </div>

        {/* Dynamic Horizontal Stats showcase styled like the cards on the right of the inspiration layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Zone Item 1: Experience & Reliability */}
          <div className="bg-[#110D0E] border border-[#241A1C] hover:border-[#BA0C2F]/50 rounded-xl p-8 space-y-6 transition-all group hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-[#1A0A0E] border border-[#800020] rounded flex items-center justify-center text-red-500 group-hover:bg-[#BA0C2F] group-hover:text-white transition-all">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="text-4xl font-serif font-black text-gray-800 group-hover:text-[#BA0C2F]/20 transition-all">01</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#EAE3D2] font-semibold">5+ лет на рынке КНР</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Отлаженные логистические коридоры во все регионы РФ. Знаем тонкости законодательства обеих стран, что исключает ошибки.
              </p>
            </div>

            <div className="pt-4 border-t border-[#241A1C] flex items-center justify-between text-xs font-mono">
              <span className="text-gray-500">ПРОВЕРЕННЫЙ МАРШРУТ</span>
              <span className="text-[#BA0C2F] font-bold">100% ГАРАНТИЯ</span>
            </div>
          </div>

          {/* Zone Item 2: Logistical Power */}
          <div className="bg-[#110D0E] border border-[#241A1C] hover:border-[#BA0C2F]/50 rounded-xl p-8 space-y-6 transition-all group hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-[#1A0A0E] border border-[#800020] rounded flex items-center justify-center text-red-500 group-hover:bg-[#BA0C2F] group-hover:text-white transition-all">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-4xl font-serif font-black text-gray-800 group-hover:text-[#BA0C2F]/20 transition-all">02</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#EAE3D2] font-semibold">10 Логистических компаний</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Наша продукция в надежных руках. Риски задержек и ареста грузов сведены к нулю за счет диверсификации партнерской сети и собственных складов консолидации.
              </p>
            </div>

            <div className="pt-4 border-t border-[#241A1C] flex items-center justify-between text-xs font-mono">
              <span className="text-gray-500">СЕМЬЯ ПЕРЕВОЗЧИКОВ</span>
              <span className="text-[#BA0C2F] font-bold">РЕЗЕРВНЫЕ СЛОТЫ</span>
            </div>
          </div>

          {/* Zone Item 3: Massive scale & Consolidation */}
          <div className="bg-[#110D0E] border border-[#241A1C] hover:border-[#BA0C2F]/50 rounded-xl p-8 space-y-6 transition-all group hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-[#1A0A0E] border border-[#800020] rounded flex items-center justify-center text-red-500 group-hover:bg-[#BA0C2F] group-hover:text-white transition-all">
                <Boxes className="w-6 h-6" />
              </div>
              <span className="text-4xl font-serif font-black text-gray-800 group-hover:text-[#BA0C2F]/20 transition-all">03</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#EAE3D2] font-semibold">~250 Контейнеров в месяц</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Консолидируем грузы разных объемов, чтобы вы экономили до 30% на фрахте. Вы платите только за фактически занимаемый вашим грузом объем.
              </p>
            </div>

            <div className="pt-4 border-t border-[#241A1C] flex items-center justify-between text-xs font-mono">
              <span className="text-gray-500">ОБЪЕМЫ ОТПРАВОК</span>
              <span className="text-[#BA0C2F] font-bold">ЭКОНОМИЯ НА ФРАХТЕ</span>
            </div>
          </div>

        </div>

        {/* Dynamic graphical callout with interactive map path visualizer */}
        <div className="mt-12 bg-[#120B0C] rounded-2xl border border-[#2D191C] p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div className="space-y-4 max-w-xl text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#2E0B11] px-2.5 py-0.5 rounded text-[10px] text-red-500 font-bold uppercase tracking-widest">
              МАРШРУТНЫЙ АНАЛИЗАТОР
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#F5F5F0]">Схема оптимизации импорта под ключ</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Мы разработали три ключевых вектора доставки: Экономичный (по морю через Владивосток), Сбалансированный (прямой ЖД экспресс до Москвы) и Сверхбыстрый (авиа доставка из Гуанчжоу).
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex flex-wrap gap-3 justify-center">
            <button 
              onClick={() => { setSelectedRoute('railway'); showToast('Выбран ЖД Экспресс'); }}
              className={`px-5 py-3 rounded-lg border transition-all text-xs uppercase tracking-wider font-bold ${
                selectedRoute === 'railway' ? 'bg-[#BA0C2F] border-[#BA0C2F] text-white' : 'bg-[#181112] border-[#2C1C1E] text-gray-400 hover:text-white'
              }`}
            >
              🚂 ЖД Экспресс (14-18 дн.)
            </button>
            <button 
              onClick={() => { setSelectedRoute('sea'); showToast('Выбран Морской фрахт'); }}
              className={`px-5 py-3 rounded-lg border transition-all text-xs uppercase tracking-wider font-bold ${
                selectedRoute === 'sea' ? 'bg-[#BA0C2F] border-[#BA0C2F] text-white' : 'bg-[#181112] border-[#2C1C1E] text-gray-400 hover:text-white'
              }`}
            >
              🚢 Море + Порт (30-35 дн.)
            </button>
            <button 
              onClick={() => { setSelectedRoute('air'); showToast('Выбрана Авиа доставка'); }}
              className={`px-5 py-3 rounded-lg border transition-all text-xs uppercase tracking-wider font-bold ${
                selectedRoute === 'air' ? 'bg-[#BA0C2F] border-[#BA0C2F] text-white' : 'bg-[#181112] border-[#2C1C1E] text-gray-400 hover:text-white'
              }`}
            >
              ✈️ Сверхбыстрый Авиа (5-8 дн.)
            </button>
          </div>
        </div>

      </section>

      {/* SECTION 4: LIVE CALCULATION CONSOLE & DASHBOARD PREVIEW */}
      <section id="calculator" className="py-24 border-t border-[#1C1214] bg-[#0A0607] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#BA0C2F] font-bold block">ИНТЕРАКТИВНЫЕ РАСЧЕТЫ</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F0]">
              Калькулятор стоимости и <span className="premium-gradient-text">сроков доставки</span>
            </h2>
            <p className="text-sm text-gray-400">
              Настройте параметры вашей партии груза ниже, чтобы мгновенно увидеть прогнозируемую смету под ключ.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Calculator controls panel */}
            <div className="lg:col-span-7 bg-[#110D0E] border border-[#241A1C] rounded-2xl p-6 md:p-8 space-y-8 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Parameter weight */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Вес груза (кг)</label>
                    <span className="text-sm font-mono text-[#BA0C2F] font-bold">{cargoWeight} кг</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="10000" 
                    step="50"
                    value={cargoWeight} 
                    onChange={(e) => setCargoWeight(Number(e.target.value))}
                    className="w-full accent-[#BA0C2F] bg-gray-800 rounded-lg appearance-none h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>100 кг</span>
                    <span>5 000 кг</span>
                    <span>10 000 кг</span>
                  </div>
                </div>

                {/* Parameter volume */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Объем груза (м³)</label>
                    <span className="text-sm font-mono text-[#BA0C2F] font-bold">{cargoVolume} м³</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="50" 
                    step="0.5"
                    value={cargoVolume} 
                    onChange={(e) => setCargoVolume(Number(e.target.value))}
                    className="w-full accent-[#BA0C2F] bg-gray-800 rounded-lg appearance-none h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>0.5 м³</span>
                    <span>25 м³</span>
                    <span>50 м³</span>
                  </div>
                </div>

              </div>

              {/* Parameter cargo value */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Стоимость партии (USD)</label>
                  <span className="text-sm font-mono text-green-400 font-bold">${cargoValue.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="2000" 
                  max="150000" 
                  step="1000"
                  value={cargoValue} 
                  onChange={(e) => setCargoValue(Number(e.target.value))}
                  className="w-full accent-[#BA0C2F] bg-gray-800 rounded-lg appearance-none h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>$2,000</span>
                  <span>$75,000</span>
                  <span>$150,000</span>
                </div>
              </div>

              {/* Select options row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Category selectors */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold block">Категория товара</label>
                  <select 
                    value={productCategory} 
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="w-full bg-[#1A1213] border border-[#2D1B1E] text-gray-300 rounded px-3 py-2.5 focus:outline-none focus:border-[#BA0C2F] text-sm"
                  >
                    <option value="electronics">💻 Электроника и Гаджеты (Пошлина 10%)</option>
                    <option value="apparel">🧥 Одежда и текстиль (Пошлина 8%)</option>
                    <option value="equipment">⚙️ Промышленное Оборудование (Пошлина 12%)</option>
                    <option value="auto">🚗 Автозапчасти / Компоненты (Пошлина 15%)</option>
                  </select>
                </div>

                {/* Delivery speed selector */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold block">Приоритет Срочности</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      type="button"
                      onClick={() => setDeliverySpeed('standard')}
                      className={`py-2 px-1 text-center text-xs rounded border transition-all ${
                        deliverySpeed === 'standard' ? 'bg-[#2E0B11] border-[#BA0C2F] text-[#F5F5F0]' : 'bg-[#181112] border-[#251A1C] text-gray-400'
                      }`}
                    >
                      Стандарт
                    </button>
                    <button 
                      type="button"
                      onClick={() => setDeliverySpeed('fast')}
                      className={`py-2 px-1 text-center text-xs rounded border transition-all ${
                        deliverySpeed === 'fast' ? 'bg-[#2E0B11] border-[#BA0C2F] text-[#F5F5F0]' : 'bg-[#181112] border-[#251A1C] text-gray-400'
                      }`}
                    >
                      Быстро (+35%)
                    </button>
                    <button 
                      type="button"
                      onClick={() => setDeliverySpeed('express')}
                      className={`py-2 px-1 text-center text-xs rounded border transition-all ${
                        deliverySpeed === 'express' ? 'bg-[#2E0B11] border-[#BA0C2F] text-[#F5F5F0]' : 'bg-[#181112] border-[#251A1C] text-gray-400'
                      }`}
                    >
                      Экспресс (+75%)
                    </button>
                  </div>
                </div>

              </div>

              {/* Toggles area */}
              <div className="flex items-center justify-between p-4 bg-[#181112] rounded-lg border border-[#251A1C]">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <div>
                    <span className="text-sm font-semibold text-[#F5F5F0] block">Финансовое Страхование</span>
                    <span className="text-xs text-gray-400">Покрытие 100% стоимости груза при любых инцидентах (тариф 0.8%)</span>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => {
                    setHasInsurance(!hasInsurance);
                    showToast(hasInsurance ? "Страховка отключена" : "Страховка включена");
                  }}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 focus:outline-none ${
                    hasInsurance ? 'bg-[#BA0C2F]' : 'bg-gray-700'
                  }`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-200 ${
                    hasInsurance ? 'translate-x-6' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>

            </div>

            {/* Price estimation dashboard panel (Right Column) */}
            <div className="lg:col-span-5 bg-[#170E10] border-2 border-[#BA0C2F] rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden text-left shadow-2xl shadow-red-950/20">
              
              {/* Dynamic decorative backdrop pattern */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#BA0C2F]/5 rounded-full blur-[40px] pointer-events-none"></div>

              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-[#BA0C2F] font-bold">ИТОГОВАЯ СМЕТА РЕЙСА</span>
                  <span className="text-[10px] font-mono bg-green-950 text-green-400 px-2 py-0.5 rounded border border-green-800">РАСЧЕТ ВЫПОЛНЕН</span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-gray-400">Ориентировочная стоимость доставки под ключ:</span>
                  <div className="text-4xl md:text-5xl font-serif font-black text-white flex items-baseline gap-1">
                    ${costResult.total.toLocaleString()}
                    <span className="text-xs font-mono text-gray-400 font-normal">/ за все услуги</span>
                  </div>
                </div>

                {/* Spliced detailed price tags */}
                <div className="space-y-3 pt-4 border-t border-[#2F1F21]">
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 flex items-center gap-1.5">
                      Базовый фрахт и логистика
                    </span>
                    <span className="font-mono text-gray-300 font-semibold">${costResult.freight.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 flex items-center gap-1.5">
                      Пошлины и таможенная декларация
                    </span>
                    <span className="font-mono text-gray-300 font-semibold">${costResult.customs.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Страховое покрытие партии</span>
                    <span className="font-mono text-gray-300 font-semibold">${costResult.insurance.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Таможенный брокер и терминалы</span>
                    <span className="font-mono text-gray-300 font-semibold">${costResult.clearance.toLocaleString()}</span>
                  </div>

                </div>

                {/* Logistics route estimate */}
                <div className="p-4 bg-[#0A0A0A] rounded-lg border border-[#2F1F21] space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Транспортный коридор:</span>
                    <span className="font-bold text-white uppercase">{selectedRoute === 'air' ? '✈️ Авиа' : selectedRoute === 'sea' ? '🚢 Море' : '🚂 Железная дорога'}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Планируемый срок прибытия:</span>
                    <span className="font-bold text-red-500 font-serif">{costResult.timeframe}</span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 leading-normal italic text-center">
                  * Расчет является предварительным и зависит от текущих ставок фрахта на день забора груза. Для точной фиксации цены отправьте заявку.
                </p>
              </div>

              <div className="pt-6 relative z-10">
                <a 
                  href="#contact" 
                  className="w-full inline-block px-6 py-4 rounded bg-[#BA0C2F] hover:bg-red-700 text-sm uppercase tracking-widest font-bold text-center text-white transition-all shadow-lg hover:shadow-red-950/50"
                >
                  Зафиксировать этот тариф
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: SPECIAL CONDITIONS FOR CLIENTS */}
      <section id="specials" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: text details and Russian Manager showcase */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-[#BA0C2F] font-bold block">ЭКСКЛЮЗИВНЫЙ СЕРВИС</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F0]">
              Специальные условия для <span className="premium-gradient-text">наших клиентов</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Мы создали не просто карго-перевозчика, а полноценный международный финансово-логистический хаб. Вы получаете сервис европейского уровня, адаптированный под современные российские реалии.
            </p>

            {/* List of features with premium dots */}
            <div className="space-y-4">
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1A0A0E] border border-[#800020] flex items-center justify-center text-[#BA0C2F] shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BA0C2F]"></span>
                </div>
                <div>
                  <span className="font-semibold text-white block">Личный русскоязычный менеджер в Китае</span>
                  <span className="text-xs text-gray-400">Круглосуточная поддержка, оперативное решение споров с производителем непосредственно на месте.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1A0A0E] border border-[#800020] flex items-center justify-center text-[#BA0C2F] shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BA0C2F]"></span>
                </div>
                <div>
                  <span className="font-semibold text-white block">Оплата долями и финансирование сделок</span>
                  <span className="text-xs text-gray-400">Возможность отсрочки платежей до 30% от стоимости закупки для проверенных постоянных партнеров.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1A0A0E] border border-[#800020] flex items-center justify-center text-[#BA0C2F] shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BA0C2F]"></span>
                </div>
                <div>
                  <span className="font-semibold text-white block">Бесплатная комплексная страховка груза</span>
                  <span className="text-xs text-gray-400">Для всех отправлений первого месяца сотрудничества берем расходы по страхованию на себя.</span>
                </div>
              </div>

            </div>

            {/* CTA to get full presentation file */}
            <div className="pt-4">
              <button 
                onClick={() => showToast("Презентация и тарифный лист отправлены вам в Телеграм!")}
                className="inline-flex items-center gap-2 bg-[#141414] hover:bg-[#1C1C1C] border border-[#241A1C] hover:border-[#BA0C2F] px-5 py-3 rounded text-xs uppercase tracking-widest font-bold text-gray-300 hover:text-white transition-all"
              >
                <FileText className="w-4 h-4 text-[#BA0C2F]" />
                Скачать PDF Презентацию (12.4 MB)
              </button>
            </div>
          </div>

          {/* Right Column: Inspired layout visual presenting a premium agent card & stylized horse portrait */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-[#120B0C] to-[#0D0809] rounded-2xl border border-[#3A181E] p-8 space-y-8 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#BA0C2F]/5 rounded-full blur-[50px] pointer-events-none"></div>

              {/* Graphic element representing key contract checklist */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#BA0C2F] font-bold block">ЭТАПЫ БЕЗОПАСНОЙ СДЕЛКИ</span>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#1A1213] rounded border border-[#2B191B]">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-[#2E0B11] text-[#BA0C2F] font-mono text-xs flex items-center justify-center font-bold">01</span>
                      <span className="text-xs font-semibold text-gray-300">Проверка фабрики и подписание ТЗ</span>
                    </div>
                    <span className="text-[10px] text-green-400 font-mono">Выполнено</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#1A1213] rounded border border-[#2B191B]">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-[#2E0B11] text-[#BA0C2F] font-mono text-xs flex items-center justify-center font-bold">02</span>
                      <span className="text-xs font-semibold text-gray-300">Контрольная закупка образцов</span>
                    </div>
                    <span className="text-[10px] text-green-400 font-mono">Выполнено</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#1A1213] rounded border border-[#2B191B]">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-[#2E0B11] text-[#BA0C2F] font-mono text-xs flex items-center justify-center font-bold">03</span>
                      <span className="text-xs font-semibold text-gray-300">Приемка партии на нашем складе в Иу</span>
                    </div>
                    <span className="text-[10px] text-amber-500 font-mono">В процессе</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#1A1213] rounded border border-[#2B191B] opacity-50">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-[#2E0B11] text-[#BA0C2F] font-mono text-xs flex items-center justify-center font-bold">04</span>
                      <span className="text-xs font-semibold text-gray-300">Выход контейнера на таможенный пост</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">Ожидание</span>
                  </div>
                </div>

              </div>

              {/* Styled Team Agent Card representing personal manager in Moscow / Shanghai */}
              <div className="p-6 bg-[#1C0F12] rounded-xl border border-[#4A0404] flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left relative">
                
                <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#BA0C2F] shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=240)' }}></div>

                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 bg-[#4A0404] px-2 py-0.5 rounded text-[9px] text-[#F5F5F0] font-bold">
                    ВЕДУЩИЙ МЕНЕДЖЕР ВЭД
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">Анна Чэнь (Chen Jing)</h4>
                  <p className="text-xs text-gray-400">
                    8 лет опыта в таможенном декларировании сборных грузов. Свободный русский и китайский языки.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="text-[9px] font-mono bg-[#0A0A0A] border border-[#241A1C] text-gray-400 px-2 py-0.5 rounded">#ШЭНЬЧЖЭНЬ</span>
                    <span className="text-[9px] font-mono bg-[#0A0A0A] border border-[#241A1C] text-gray-400 px-2 py-0.5 rounded">#ТАМОЖНЯ-РФ</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: THE PRODUCTION DESIGN SYSTEM PLAYGROUND */}
      <section id="playground" className="py-24 border-t border-[#1C1214] bg-[#090506] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 bg-[#BA0C2F]/20 border border-[#BA0C2F]/50 px-3 py-1 rounded-full text-xs text-[#EAE3D2] font-semibold">
              <Sliders className="w-3.5 h-3.5 text-[#BA0C2F]" />
              ФУНДАМЕНТАЛЬНЫЙ ОФИС РАЗРАБОТКИ
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F0]">
              Оригинальный <span className="premium-gradient-text">Design System</span> Спецификатор
            </h2>
            <p className="text-sm text-gray-400">
              Полный комплект готовых к копированию UI-компонентов, цветовых стилей и элементов интерфейса, поддерживающих ту же безупречную кинематографическую эстетику.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Color swatches & Core variables inspector (Left Column) */}
            <div className="lg:col-span-4 bg-[#110D0E] border border-[#241A1C] rounded-2xl p-6 space-y-6 text-left">
              <h3 className="font-serif text-lg font-bold text-[#EAE3D2] border-b border-[#241A1C] pb-3">Цветовая палитра & Стили</h3>
              
              <div className="space-y-4">
                
                {/* Crimson Swatch */}
                <div className="flex items-center justify-between p-2 bg-[#0A0A0A] rounded border border-[#241A1C] hover:border-[#BA0C2F] transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#BA0C2F] border border-[#E1123F]"></div>
                    <div>
                      <span className="text-xs font-bold text-white block">Oriental Crimson</span>
                      <span className="text-[10px] font-mono text-gray-500">#BA0C2F</span>
                    </div>
                  </div>
                  <button onClick={() => copyToClipboard("#BA0C2F")} className="text-gray-500 hover:text-[#BA0C2F] p-1.5">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Burgundy Swatch */}
                <div className="flex items-center justify-between p-2 bg-[#0A0A0A] rounded border border-[#241A1C] hover:border-[#800020] transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#800020] border border-[#9E0B2D]"></div>
                    <div>
                      <span className="text-xs font-bold text-white block">Imperial Burgundy</span>
                      <span className="text-[10px] font-mono text-gray-500">#800020</span>
                    </div>
                  </div>
                  <button onClick={() => copyToClipboard("#800020")} className="text-gray-500 hover:text-[#BA0C2F] p-1.5">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Cream Swatch */}
                <div className="flex items-center justify-between p-2 bg-[#0A0A0A] rounded border border-[#241A1C] hover:border-[#EAE3D2] transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#EAE3D2] border border-white"></div>
                    <div>
                      <span className="text-xs font-bold text-white block">Classic Ivory / Cream</span>
                      <span className="text-[10px] font-mono text-gray-500">#EAE3D2</span>
                    </div>
                  </div>
                  <button onClick={() => copyToClipboard("#EAE3D2")} className="text-gray-500 hover:text-[#BA0C2F] p-1.5">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Dark Charcoal Swatch */}
                <div className="flex items-center justify-between p-2 bg-[#0A0A0A] rounded border border-[#241A1C] hover:border-gray-500 transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0A0A0A] border border-[#241A1C]"></div>
                    <div>
                      <span className="text-xs font-bold text-white block">Deep Charcoal Void</span>
                      <span className="text-[10px] font-mono text-gray-500">#0A0A0A</span>
                    </div>
                  </div>
                  <button onClick={() => copyToClipboard("#0A0A0A")} className="text-gray-500 hover:text-[#BA0C2F] p-1.5">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

              </div>

              <div className="p-4 bg-[#1A1213] rounded border border-[#2B191B] space-y-2">
                <span className="text-xs uppercase font-bold text-[#BA0C2F] block">Шрифтовая иерархия</span>
                <p className="text-xs text-gray-300">
                  <strong className="text-white">Заголовки:</strong> Стилизованный Serif (Playfair/Noto Serif) с акцентом на кинематографичность.
                </p>
                <p className="text-xs text-gray-300">
                  <strong className="text-white">Тексты:</strong> Высокочитаемый Sans-Serif (Inter/Geist) для идеального сканирования информации.
                </p>
              </div>
            </div>

            {/* Interactive Components Testbed (Right Column) */}
            <div className="lg:col-span-8 bg-[#110D0E] border border-[#241A1C] rounded-2xl p-6 md:p-8 space-y-8 text-left">
              <h3 className="font-serif text-lg font-bold text-[#EAE3D2] border-b border-[#241A1C] pb-3">Конструктор Живых Компонентов</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Buttons Showcase */}
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block">1. Кнопки (States & Variations)</span>
                  
                  <div className="space-y-2">
                    <button className="w-full px-4 py-3 rounded bg-gradient-to-r from-[#BA0C2F] to-[#800020] text-xs uppercase tracking-widest font-semibold text-white transition-all hover:opacity-90 active:scale-95 border border-[#BA0C2F]">
                      Основной экшн (Crimson)
                    </button>
                    <button className="w-full px-4 py-3 rounded bg-[#1A1213] text-xs uppercase tracking-widest font-semibold text-gray-300 transition-all hover:bg-[#2A1D20] active:scale-95 border border-[#2B191B] hover:text-white">
                      Вторичный экшн (Charcoal)
                    </button>
                    <button className="w-full px-4 py-3 rounded bg-transparent text-xs uppercase tracking-widest font-semibold text-[#BA0C2F] hover:text-[#EAE3D2] transition-all flex items-center justify-center gap-2">
                      Текстовая кнопка <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Form Controls Showcase */}
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block">2. Формы ввода (Inputs & Feedback)</span>
                  
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <input 
                        type="text" 
                        placeholder="Введите имя..." 
                        className="w-full bg-[#1A1213] border border-[#2B191B] text-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#BA0C2F]"
                      />
                      <span className="text-[10px] text-gray-500 block text-right">Поле заполнено корректно</span>
                    </div>

                    <div className="space-y-1">
                      <input 
                        type="text" 
                        placeholder="Введите телефон..." 
                        className="w-full bg-[#1A1213] border border-[#BA0C2F] text-gray-300 rounded px-3 py-2 text-xs focus:outline-none"
                      />
                      <span className="text-[10px] text-[#BA0C2F] block text-right">Ошибка: Неверный формат номера</span>
                    </div>
                  </div>
                </div>

                {/* Badges and tags */}
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block">3. Бейджи статусов & Меток</span>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#2E0B11] border border-[#BA0C2F] text-[9px] uppercase tracking-wider font-bold text-[#F5F5F0]">
                      Критический Риск
                    </span>
                    <span className="px-2.5 py-1 rounded bg-green-950 border border-green-800 text-[9px] uppercase tracking-wider font-bold text-green-400">
                      Проверено инспекцией
                    </span>
                    <span className="px-2.5 py-1 rounded bg-blue-950 border border-blue-800 text-[9px] uppercase tracking-wider font-bold text-blue-400">
                      ЖД Экспресс
                    </span>
                    <span className="px-2.5 py-1 rounded bg-amber-950 border border-amber-800 text-[9px] uppercase tracking-wider font-bold text-amber-500">
                      Таможня очищена
                    </span>
                  </div>
                </div>

                {/* Toggles & Sliders Interactive */}
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block">4. Слайдеры и Переключатели</span>
                  
                  <div className="space-y-3 bg-[#1A1213] p-4 rounded border border-[#2B191B]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Инспектор на заводе:</span>
                      <button 
                        onClick={() => setTestToggle(!testToggle)}
                        className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 ${
                          testToggle ? 'bg-[#BA0C2F]' : 'bg-gray-700'
                        }`}
                      >
                        <div className={`bg-white w-4 h-4 rounded-full shadow transform duration-200 ${
                          testToggle ? 'translate-x-5' : 'translate-x-0'
                        }`}></div>
                      </button>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Заполнение контейнера:</span>
                        <span className="font-mono text-white">{testSlider}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="10" 
                        max="100" 
                        value={testSlider} 
                        onChange={(e) => setTestSlider(Number(e.target.value))}
                        className="w-full accent-[#BA0C2F] bg-gray-800 rounded-lg h-1.5 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Dynamic Notification and custom loader trigger inside design inspector */}
              <div className="mt-6 p-4 bg-[#181112] rounded-xl border border-[#251A1C] flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2E0B11] flex items-center justify-center text-[#BA0C2F] shrink-0">
                    <Bell className="w-5 h-5 animate-swing" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Встроенные оповещения (Toasts)</span>
                    <span className="text-[11px] text-gray-400">Протестируйте наши системные уведомления прямо сейчас.</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => showToast("Действие успешно завершено!", "success")}
                    className="px-3 py-1.5 bg-green-950 hover:bg-green-900 border border-green-800 rounded text-[10px] uppercase tracking-wider font-bold text-green-400"
                  >
                    Успешно
                  </button>
                  <button 
                    onClick={() => showToast("Произошла системная ошибка!", "error")}
                    className="px-3 py-1.5 bg-red-950 hover:bg-red-900 border border-red-800 rounded text-[10px] uppercase tracking-wider font-bold text-red-400"
                  >
                    Ошибка
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: HIGH-END FAQ ACCORDION CONSOLE */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#BA0C2F] font-bold block">ЧАСТЫЕ ВОПРОСЫ</span>
          <h2 className="font-serif text-4xl font-bold text-[#F5F5F0]">База знаний импортера</h2>
          <p className="text-sm text-gray-400">
            Всё, что вам нужно знать о белом импорте товаров из Китайской Народной Республики.
          </p>
        </div>

        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-[#110D0E] border border-[#241A1C] rounded-lg overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => {
                  setActiveFAQ(activeFAQ === idx ? null : idx);
                  showToast(`База знаний: раздел ${idx + 1}`);
                }}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#181112]"
              >
                <span className="font-serif text-base sm:text-lg font-semibold text-gray-200 hover:text-white transition-colors">
                  {faq.q}
                </span>
                <span className={`p-1 bg-[#1A1213] rounded-full text-red-500 transform transition-transform duration-300 ${activeFAQ === idx ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>

              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFAQ === idx ? 'max-h-60 border-t border-[#241A1C]' : 'max-h-0'}`}>
                <div className="p-6 text-sm text-gray-400 leading-relaxed bg-[#0F0A0B]">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 8: AUTHENTICATION / REQUEST DECK & CONTACT CONSOLE */}
      <section id="contact" className="py-24 border-t border-[#1C1214] bg-[#0C0708] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side details */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <span className="text-xs uppercase tracking-[0.3em] text-[#BA0C2F] font-bold block">СВЯЗАТЬСЯ С НАМИ</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F0]">
                Оставьте заявку на <span className="premium-gradient-text">расчет ВЭД</span>
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Свяжитесь с нами, и мы расскажем обо всех выгодах сотрудничества, рассчитаем точную спецификацию, подготовим проект договора и проведем предварительную классификацию товаров по ТН ВЭД абсолютно бесплатно.
              </p>

              {/* Telegram Handle graphic */}
              <div className="p-6 bg-[#170F11] rounded-xl border border-[#4A0404] space-y-3 relative">
                <div className="absolute top-3 right-3 text-[#BA0C2F] opacity-20">
                  <MessageCircle className="w-12 h-12" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#BA0C2F] font-bold block">МГНОВЕННЫЙ ОТВЕТ</span>
                <h4 className="text-lg font-serif font-bold text-white">Прямой чат в Telegram:</h4>
                <p className="text-xs text-gray-400">
                  Наш дежурный менеджер ответит на любые вопросы в течение 5 минут. Напишите напрямую.
                </p>
                <div className="pt-2">
                  <a 
                    href="https://t.me/KEYTLIS_PPTX" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-white bg-[#BA0C2F] px-4 py-2 rounded hover:bg-red-700 transition-all"
                  >
                    @KEYTLIS_PPTX
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right side interactive request form */}
            <div className="lg:col-span-7">
              <div className="bg-[#120B0C] border border-[#2D191C] rounded-2xl p-8 space-y-6 text-left premium-glow-card">
                
                <div className="flex justify-between items-center border-b border-[#241A1C] pb-4">
                  <h3 className="font-serif text-xl font-bold text-white">Оформить белую поставку</h3>
                  <span className="text-[10px] font-mono text-gray-500">Запрос #842</span>
                </div>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-950 border border-green-800 rounded-full flex items-center justify-center text-green-400 mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-white">Заявка успешно принята!</h4>
                    <p className="text-sm text-gray-400 max-w-md mx-auto">
                      Спасибо, <strong className="text-white">{formData.name}</strong>. Мы уже готовим аудит рисков по категории <strong className="text-[#BA0C2F]">{formData.cargoType}</strong> для вас. Свяжемся по номеру {formData.phone} в ближайшие минуты.
                    </p>
                    <button 
                      onClick={() => { setFormSubmitted(false); setFormData({ name: '', phone: '', telegram: '', cargoType: 'Оборудование' }); }}
                      className="text-xs uppercase tracking-widest text-[#BA0C2F] hover:text-[#EAE3D2] underline transition-colors"
                    >
                      Отправить другую заявку
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">Ваше имя</label>
                        <input 
                          type="text" 
                          placeholder="Константин" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-[#1C1214] border border-[#2B191B] text-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#BA0C2F] transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">Номер телефона</label>
                        <input 
                          type="tel" 
                          placeholder="+7 (999) 000-00-00" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-[#1C1214] border border-[#2B191B] text-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#BA0C2F] transition-all"
                        />
                      </div>

                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">Категория груза</label>
                      <select 
                        value={formData.cargoType}
                        onChange={(e) => setFormData({...formData, cargoType: e.target.value})}
                        className="w-full bg-[#1C1214] border border-[#2B191B] text-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#BA0C2F] transition-all"
                      >
                        <option>Оборудование и станки</option>
                        <option>Электроника и компоненты</option>
                        <option>Одежда, текстиль, обувь</option>
                        <option>Автозапчасти и химия</option>
                        <option>Другое (уточню менеджеру)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">Телеграм никнейм (Опционально)</label>
                      <input 
                        type="text" 
                        placeholder="@my_telegram" 
                        value={formData.telegram}
                        onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                        className="w-full bg-[#1C1214] border border-[#2B191B] text-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#BA0C2F] transition-all"
                      />
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit" 
                        className="w-full px-6 py-4 rounded bg-gradient-to-r from-[#BA0C2F] to-[#800020] text-xs uppercase tracking-widest font-bold text-center text-white transition-all hover:opacity-95 shadow-lg hover:shadow-red-950/40 flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Получить бесплатный расчет и аудит ВЭД
                      </button>
                    </div>

                    <p className="text-[10px] text-gray-500 leading-normal text-center">
                      Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных и конфиденциальности. Никакого спама, только расчеты по делу.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER CANVAS */}
      <footer className="bg-[#050505] border-t border-[#1C1214] py-16 text-left relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Logo brand */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#BA0C2F] to-[#4A0404] flex items-center justify-center border border-[#800020]">
                <span className="font-serif text-sm font-bold text-white tracking-widest">O</span>
              </div>
              <div>
                <span className="font-serif text-sm tracking-[0.25em] text-[#F5F5F0] block font-bold">ORIENTAL</span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-red-500 font-bold">EXPRESS</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Комплексные поставки сборных и генеральных грузов из Китая под ключ. Полная таможенная очистка без серых схем. Гарантия безопасности.
            </p>
          </div>

          {/* Quick links 1 */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#BA0C2F] font-bold block">Маршруты</span>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li><a href="#zones" className="hover:text-[#F5F5F0] transition-colors">ЖД Экспресс Сибирь</a></li>
              <li><a href="#zones" className="hover:text-[#F5F5F0] transition-colors">Морской фрахт Владивосток</a></li>
              <li><a href="#zones" className="hover:text-[#F5F5F0] transition-colors">Авиадоставка Шэньчжэнь</a></li>
              <li><a href="#zones" className="hover:text-[#F5F5F0] transition-colors">Мультимодальные цепи</a></li>
            </ul>
          </div>

          {/* Quick links 2 */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#BA0C2F] font-bold block">Инструменты</span>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li><a href="#calculator" className="hover:text-[#F5F5F0] transition-colors">Калькулятор тарифа</a></li>
              <li><a href="#playground" className="hover:text-[#F5F5F0] transition-colors">Design System UI</a></li>
              <li><a href="#problems" className="hover:text-[#F5F5F0] transition-colors">Анализатор рисков</a></li>
              <li><a href="#specials" className="hover:text-[#F5F5F0] transition-colors">Скачать PDF</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#BA0C2F] font-bold block">Контакты и заказы</span>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <span className="block text-[10px] text-gray-500 uppercase">По вопросам сотрудничества:</span>
                <span className="font-mono text-white text-sm">@KEYTLIS_PPTX</span>
              </li>
              <li>
                <span className="block text-[10px] text-gray-500 uppercase">Адрес представительства:</span>
                <span className="text-white">Москва-Сити, Башня Федерация, 42 этаж</span>
              </li>
              <li>
                <span className="block text-[10px] text-gray-500 uppercase">Склад консолидации КНР:</span>
                <span className="text-white">Zhejiang Province, Yiwu, West Station Logistics Park</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#1C1214] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Oriental Express Inc. Все права защищены. Разработано в соответствии с гайдлайнами @KEYTLIS_PPTX.</p>
          <div className="flex gap-4">
            <a href="#hero" className="hover:text-white transition-colors">Политика приватности</a>
            <span className="text-gray-700">|</span>
            <a href="#hero" className="hover:text-white transition-colors">Договор оферты</a>
          </div>
        </div>

      </footer>

    </div>
  );
}
5