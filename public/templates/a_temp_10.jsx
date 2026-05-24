import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  ChevronRight, 
  Award, 
  Sparkles, 
  RefreshCw, 
  Share2, 
  Volume2, 
  VolumeX, 
  ChevronDown, 
  BookOpen, 
  Target, 
  Gift, 
  Info,
  CheckCircle2,
  Maximize2
} from 'lucide-react';

// --- Web Audio API Chime Synth for Authentic Classical Atmosphere ---
class ClassicalSoundEffects {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playWoodenBlock() {
    if (this.muted) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(880, this.ctx.currentTime); // Wood block tone
    osc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }

  playChime() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    
    // Traditional pentatonic scale tone combination (Gong/G, Zhi/D)
    const freqs = [783.99, 1174.66, 1567.98]; 
    
    freqs.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.05);
      
      gain.gain.setValueAtTime(0.2, now + index * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6 + index * 0.05);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(now + index * 0.05);
      osc.stop(now + 0.8 + index * 0.05);
    });
  }

  playDrum() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.3);
    
    gain.gain.setValueAtTime(0.8, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(now + 0.4);
  }
}

const sfx = new ClassicalSoundEffects();

export default function App() {
  const [muted, setMuted] = useState(false);
  const [countdownDays, setCountdownDays] = useState(3);
  const [countdownHours, setCountdownHours] = useState(14);
  const [countdownMinutes, setCountdownMinutes] = useState(45);
  const [countdownSeconds, setCountdownSeconds] = useState(12);
  
  // Custom Invitation State
  const [visitorName, setVisitorName] = useState('');
  const [invitationTheme, setInvitationTheme] = useState('landscape'); // landscape, market, gourmet
  const [isGenerated, setIsGenerated] = useState(false);
  const [generationToast, setGenerationToast] = useState(false);

  // Mini-game "Pitch-pot" (投壶) State
  const [arrows, setArrows] = useState(5);
  const [score, setScore] = useState(0);
  const [gameMessage, setGameMessage] = useState('调整角度与力度，将竹矢投中铜壶！');
  const [isAiming, setIsAiming] = useState(true);
  const [angle, setAngle] = useState(45); // 15 to 75 deg
  const [power, setPower] = useState(50); // 10 to 100
  const [arrowStatus, setArrowStatus] = useState('idle'); // idle, flying, hit, miss
  const [arrowPos, setArrowPos] = useState({ x: 10, y: 80 }); // relative percentages inside game area
  const [potRect, setPotRect] = useState({ x: 80, y: 70 });
  const [highScore, setHighScore] = useState(0);

  // Active Tab for schedule
  const [activeTab, setActiveTab] = useState('all');

  // Invitation Quotes Matching Themes
  const themesData = {
    landscape: {
      title: "碧水悠悠 · 宋韵寻幽",
      poem: "山水永嘉迎雅客，碧莲波影醉春风。早香柚熟金黄满，共赴清欢画卷中。",
      bgClass: "bg-[#F3EDE0]",
      seal: "寻古",
      accent: "text-[#5C7261]",
      border: "border-[#5C7261]"
    },
    market: {
      title: "锦湾市集 · 华灯璀璨",
      poem: "十里长街腾鼓乐，千家灯火映红妆。柚香引路寻古意，雅玩投壶意气扬。",
      bgClass: "bg-[#F7EFE2]",
      seal: "市井",
      accent: "text-[#9B2915]",
      border: "border-[#9B2915]"
    },
    gourmet: {
      title: "宋韵金柚 · 舌尖雅集",
      poem: "金黄玉琢早香柚，味沁脾神贡御前。清茗一盏浮生歇，雅叙幽怀对圣贤。",
      bgClass: "bg-[#EFE9DB]",
      seal: "秋贡",
      accent: "text-[#D4A350]",
      border: "border-[#D4A350]"
    }
  };

  // Sound toggle helper
  const toggleMute = () => {
    sfx.muted = !muted;
    setMuted(!muted);
  };

  // Real-time Countdown simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownSeconds(prev => {
        if (prev > 0) return prev - 1;
        setCountdownMinutes(min => {
          if (min > 0) return min - 1;
          setCountdownHours(hr => {
            if (hr > 0) return hr - 1;
            setCountdownDays(day => {
              if (day > 0) return day - 1;
              return 3; // Reset loop just for aesthetics
            });
            return 23;
          });
          return 59;
        });
        return 59;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle Invitation Generation
  const handleGenerateInvitation = (e) => {
    e.preventDefault();
    if (!visitorName.trim()) {
      setVisitorName("温州墨客");
    }
    sfx.playChime();
    setIsGenerated(true);
    setGenerationToast(true);
    setTimeout(() => setGenerationToast(false), 4000);
  };

  // Custom simulation of Pitch-Pot physics
  const handleThrowArrow = () => {
    if (arrows <= 0 || arrowStatus === 'flying') return;
    
    sfx.playWoodenBlock();
    setArrows(prev => prev - 1);
    setArrowStatus('flying');
    setGameMessage('竹矢在空中划过优美的弧线...');

    // Simulate flight physics using simple quadratic curve
    let frame = 0;
    const totalFrames = 40;
    const startX = 10;
    const startY = 80;
    
    // Pot target area is approx: x: 78% - 84%, y: 65% - 75%
    // Determine landing point based on chosen Angle and Power
    // Target optimal parameters: Angle ~42 deg, Power ~72%
    const normalizedAngle = angle / 90; // 0 to 1
    const normalizedPower = power / 100; // 0 to 1
    
    // A stylized landing calculation
    const distanceFactor = normalizedPower * 100;
    const heightFactor = normalizedAngle * 120;
    
    const finalX = Math.min(95, startX + distanceFactor * 0.85);
    // parabola peak height is influenced by angle & power
    const peakY = Math.max(10, startY - heightFactor);

    const interval = setInterval(() => {
      frame++;
      const t = frame / totalFrames;
      
      // Calculate parabolic position
      const curX = startX + (finalX - startX) * t;
      // standard parabola: y = a*x^2 + b*x + c
      const curY = startY + (70 - startY) * t - 4 * (startY - peakY) * t * (1 - t);

      setArrowPos({ x: curX, y: curY });

      if (frame >= totalFrames) {
        clearInterval(interval);
        
        // Evaluate if landing is in the Pot region (76% to 84% x, and 65% to 75% y)
        const isHitX = finalX >= 76 && finalX <= 84;
        const isHitY = Math.abs(normalizedAngle - 0.46) < 0.08 && Math.abs(normalizedPower - 0.72) < 0.1;
        const perfectHit = isHitX && isHitY;

        if (perfectHit) {
          sfx.playChime();
          setArrowStatus('hit');
          setScore(prev => {
            const newScore = prev + 100;
            if (newScore > highScore) setHighScore(newScore);
            return newScore;
          });
          setGameMessage('妙极！竹矢稳稳落入铜壶深处！获得 +100 积分');
        } else {
          sfx.playDrum();
          setArrowStatus('miss');
          setGameMessage('差了一点！矢偏壶外。莫要灰心，再试一回。');
        }
        
        // Reset flight position after 2 seconds
        setTimeout(() => {
          setArrowStatus('idle');
          setArrowPos({ x: 10, y: 80 });
          if (arrows === 1) {
            setGameMessage('体验局结束，点击“再来一盘”复盘雅玩。');
          }
        }, 1500);
      }
    }, 25);
  };

  const resetGame = () => {
    sfx.playChime();
    setArrows(5);
    setScore(0);
    setArrowStatus('idle');
    setArrowPos({ x: 10, y: 80 });
    setGameMessage('雅器已备，清风徐来，请贵客试手！');
  };

  // Schedule filtering data
  const timelineData = [
    {
      time: "09:00 - 10:30",
      title: "第十一届中国早香柚文化节开幕仪式",
      location: "茗岙公园 · 宋风主会场",
      desc: "隆重的宋韵簪花大典、早香柚贡品敬呈礼仪，沉浸式体验宋人雅致风范。",
      tag: "ceremony"
    },
    {
      time: "09:00 - 20:00",
      title: "“柚王”评比与全民盲品竞选",
      location: "渡头古街 · 聚贤坊",
      desc: "集结永嘉各乡村最顶级早香柚，由市民及民俗学者现场评出本届“香柚之王”。",
      tag: "competition"
    },
    {
      time: "10:30 - 22:00",
      title: "锦湾街 · 宋韵烟火文创市集",
      location: "锦湾古街大集",
      desc: "百余摊位荟萃传统非遗、柚制香膏、宋代点茶、古法刺绣、宋服手作等。",
      tag: "market"
    },
    {
      time: "14:00 - 16:30",
      title: "宋韵雅集：投壶、捶丸及柚子套圈竞技",
      location: "碧莲溪畔 · 青竹阁",
      desc: "重现画卷中记载的贵族游艺，市民可现场打卡并兑换限量精美早香柚文创礼品。",
      tag: "game"
    },
    {
      time: "19:00 - 21:30",
      title: "“相约碧莲”溪畔古风国乐晚会",
      location: "碧莲廊桥 · 水上舞台",
      desc: "以古筝、琵琶、尺八演绎流传千年的宋代词乐，配以水幕光影秀，宛若梦回汴梁。",
      tag: "ceremony"
    }
  ];

  const filteredTimeline = activeTab === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.tag === activeTab);

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#2C251E] font-serif selection:bg-[#9B2915] selection:text-white relative overflow-x-hidden">
      
      {/* Background paper texture effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[1]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      {/* Decorative Traditional Border Accents on Screen Sides */}
      <div className="hidden lg:block fixed left-4 top-24 bottom-24 w-1 border-l border-r border-[#D9CEB6] opacity-60 z-10" />
      <div className="hidden lg:block fixed right-4 top-24 bottom-24 w-1 border-l border-r border-[#D9CEB6] opacity-60 z-10" />

      {/* Elegant Header */}
      <header className="sticky top-0 z-50 bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#E2D9C5] shadow-sm px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Brand Area */}
          <div className="flex items-center space-x-3">
            <div className="bg-[#9B2915] text-white px-3 py-1 text-xs tracking-[0.25em] font-bold rounded-sm shadow-md flex items-center justify-center transform rotate-[-2deg]">
              宋韵
            </div>
            <div>
              <span className="font-extrabold text-lg md:text-xl tracking-wider text-[#2C251E]">
                永嘉碧莲
              </span>
              <span className="text-xs text-[#9B2915] ml-2 border-l border-[#D9CEB6] pl-2 font-sans tracking-widest hidden sm:inline">
                柚见宋韵文化节
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-widest">
            <a href="#hero" className="hover:text-[#9B2915] transition-colors relative py-1 group">
              首卷
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9B2915] transition-all group-hover:w-full" />
            </a>
            <a href="#countdown" className="hover:text-[#9B2915] transition-colors relative py-1 group">
              倒计时
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9B2915] transition-all group-hover:w-full" />
            </a>
            <a href="#schedule" className="hover:text-[#9B2915] transition-colors relative py-1 group">
              宋韵雅集
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9B2915] transition-all group-hover:w-full" />
            </a>
            <a href="#games" className="hover:text-[#9B2915] transition-colors relative py-1 group">
              投壶雅玩
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9B2915] transition-all group-hover:w-full" />
            </a>
            <a href="#invite" className="hover:text-[#9B2915] transition-colors relative py-1 group text-[#9B2915]">
              定制邀请函
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9B2915] transition-all group-hover:w-full" />
            </a>
          </nav>

          {/* Mute and Action Controls */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={toggleMute}
              className="p-2 rounded-full border border-[#D9CEB6] hover:bg-[#EAE2D2] transition-all"
              title={muted ? "开启音效" : "静音"}
            >
              {muted ? <VolumeX size={16} className="text-[#8C8273]" /> : <Volume2 size={16} className="text-[#9B2915] animate-pulse" />}
            </button>
            <a 
              href="#invite" 
              className="bg-[#9B2915] hover:bg-[#802110] text-[#F4EFE6] px-4 py-1.5 rounded-sm text-xs tracking-widest font-sans transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              登临雅集
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section: Epic classical painting layout with vector watercolor scenery */}
      <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-[#E2D9C5] py-12 px-4 md:px-8 bg-gradient-to-b from-[#F2ECE1] via-[#F4EFE6] to-[#FAF8F2]">
        
        {/* Absolute Decorative SVG Art Background matching header scroll in poster */}
        <div className="absolute inset-0 opacity-[0.25] pointer-events-none flex items-end justify-center z-0">
          <svg viewBox="0 0 1440 450" className="w-full min-w-[1024px] h-auto fill-current text-[#D6CBAE]">
            {/* Distant mountains silhouette */}
            <path d="M0,450 L0,320 Q120,220 280,310 T560,260 T840,350 T1120,290 T1440,380 L1440,450 Z" />
            {/* Mid-ground mountains */}
            <path d="M100,450 Q280,260 450,380 T900,290 T1300,410 L1440,450 L100,450 Z" opacity="0.6"/>
            {/* Traditional pavilion outline */}
            <path d="M520,310 L560,310 L560,285 L520,285 Z M515,285 L565,285 L540,265 Z" stroke="#9B2915" strokeWidth="2" fill="none" />
            <line x1="540" y1="285" x2="540" y2="310" stroke="#9B2915" strokeWidth="1" />
          </svg>
        </div>

        {/* Animated Flying Cranes SVGs */}
        <div className="absolute top-16 right-[15%] w-24 h-16 pointer-events-none opacity-40 animate-pulse duration-1000">
          <svg viewBox="0 0 100 60" fill="none" stroke="#2C251E" strokeWidth="1.5">
            <path d="M10,30 Q30,10 50,30 T90,30" />
            <path d="M30,25 Q50,45 70,25" />
            <circle cx="50" cy="30" r="1" fill="#9B2915" />
          </svg>
        </div>
        <div className="absolute top-36 left-[10%] w-16 h-12 pointer-events-none opacity-30 animate-bounce duration-[6000ms]">
          <svg viewBox="0 0 100 60" fill="none" stroke="#2C251E" strokeWidth="1.2">
            <path d="M10,30 Q30,15 50,30 T90,30" />
            <path d="M30,22 Q50,40 70,22" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Title Columns */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#EFE9DB] border border-[#D9CEB6] px-3 py-1 rounded-full text-xs text-[#5C7261] font-sans tracking-widest">
              <Sparkles size={12} className="animate-spin text-[#D4A350]" />
              <span>宋韵风骨 · 传世芳华</span>
            </div>

            {/* Classical Vertical layout inspiration combined with robust horizontal title */}
            <div className="space-y-2">
              <p className="text-[#9B2915] text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
                相约碧莲 · 柚见宋韵
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1C1814] leading-tight font-serif">
                第十一届中国早香柚文化节
              </h1>
              <p className="text-md md:text-lg text-[#5C7261] font-serif tracking-[0.15em] max-w-2xl mx-auto lg:mx-0">
                暨 永嘉碧莲宋韵文化旅游季开幕盛典
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C5346] leading-relaxed max-w-xl mx-auto lg:mx-0">
              永嘉碧莲，依山傍水，人杰地灵。当传世千年的宋代高雅审美，邂逅饱满飘香的早香名柚，一幅繁华璀璨、文气斐然的绝美画卷正在浙里缓缓铺展。
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#games" 
                onClick={() => sfx.playChime()}
                className="bg-[#9B2915] hover:bg-[#802110] text-[#F4EFE6] px-6 py-3 rounded-sm text-sm tracking-widest font-sans transition-all shadow-md hover:shadow-xl hover:translate-y-[-1px] flex items-center space-x-2"
              >
                <span>体验宋韵雅玩</span>
                <ChevronRight size={14} />
              </a>
              <a 
                href="#invite" 
                onClick={() => sfx.playWoodenBlock()}
                className="bg-[#5C7261] hover:bg-[#495B4C] text-[#F4EFE6] px-6 py-3 rounded-sm text-sm tracking-widest font-sans transition-all shadow-md hover:shadow-xl hover:translate-y-[-1px]"
              >
                生成纸染邀请函
              </a>
            </div>

            {/* Date Details resembling the bottom right banner of the poster */}
            <div className="pt-6 border-t border-[#E2D9C5] max-w-md mx-auto lg:mx-0 flex items-center justify-between text-xs tracking-wider text-[#8C8273]">
              <div className="flex items-center space-x-2">
                <Calendar size={14} className="text-[#9B2915]" />
                <span>2026年10月21日 - 10月22日</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-[#9B2915]" />
                <span>温州·永嘉县碧莲镇</span>
              </div>
            </div>
          </div>

          {/* Right Column: Emulating the stunning middle Scroll Poster layout ("邀请函及倒计时") */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] bg-[#EFE9DB] rounded-md shadow-2xl border-4 border-[#DCD2B5] p-6 space-y-6 transform hover:rotate-1 transition-transform duration-500 relative overflow-hidden">
              
              {/* Internal Fine Golden Lines and Borders */}
              <div className="absolute inset-2 border border-[#CBBFA4] pointer-events-none" />
              <div className="absolute inset-3 border border-[#CBBFA4]/40 pointer-events-none" />

              {/* Decorative Corner Seals */}
              <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-[#9B2915]" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-[#9B2915]" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-[#9B2915]" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-[#9B2915]" />

              <div className="text-center space-y-4 pt-4 relative z-10">
                <div className="flex justify-center">
                  {/* Classical Red Stamp Seal Vector */}
                  <div className="border-2 border-[#9B2915] text-[#9B2915] font-black text-xs p-1 tracking-widest flex items-center justify-center transform rotate-6">
                    永嘉<br/>佳会
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="block text-xs text-[#8C8273] tracking-[0.4em] uppercase">BILIAN INVITATION</span>
                  <h3 className="text-xl md:text-2xl text-[#2C251E] font-bold tracking-widest">
                    相约碧莲 · 柚见宋韵
                  </h3>
                  <div className="h-0.5 w-16 bg-[#9B2915] mx-auto my-2" />
                </div>

                {/* Main vertical layout styling like the invitation scroll */}
                <div className="text-[#5C5346] text-xs leading-relaxed py-3 space-y-2 writing-vertical tracking-widest text-center">
                  <p>金秋硕果时</p>
                  <p>碧莲镇溪畔，共赴风雅宋韵</p>
                  <p>赏十里香柚林，品宋制点茶之珍</p>
                </div>

                {/* High Density Event Spotlights matching invitation format */}
                <div className="bg-[#FAF8F2]/80 border border-[#D9CEB6] p-3 text-left text-xs space-y-2">
                  <div className="flex justify-between text-[#9B2915] font-semibold border-b border-[#E2D9C5] pb-1">
                    <span>早香柚文化展</span>
                    <span>09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between text-[#9B2915] font-semibold border-b border-[#E2D9C5] pb-1">
                    <span>锦湾烟火大集</span>
                    <span>10:30 - 22:00</span>
                  </div>
                  <div className="flex justify-between text-[#5C7261] font-semibold">
                    <span>地点：永嘉县碧莲镇古街</span>
                  </div>
                </div>
              </div>

              {/* Poster bottom aesthetic footer */}
              <div className="text-center pt-2 relative z-10">
                <span className="text-[10px] text-[#A69B86] tracking-widest block">主办：永嘉县人民政府</span>
                <span className="text-[10px] text-[#A69B86] tracking-widest block">承办：中共永嘉县委宣传部 / 碧莲镇人民政府</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Countdown section: Designed to mimic the elegant "3天 倒计时" card */}
      <section id="countdown" className="py-12 bg-[#EFE9DB] border-b border-[#E2D9C5] px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <h2 className="text-lg md:text-xl font-bold tracking-[0.25em] text-[#9B2915] uppercase flex items-center justify-center space-x-2">
              <span>—— 盛典启幕倒计时 ——</span>
            </h2>
            <p className="text-xs text-[#8C8273] tracking-widest mt-1">THE COUNTDOWN TO BILIAN CULTURE SEASON</p>
          </div>

          {/* Time Counter Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {/* Days block - matched to the "3天 倒计时" in image */}
            <div className="bg-[#FAF8F2] border-2 border-[#DCD2B5] p-5 rounded-sm relative overflow-hidden shadow-md group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#9B2915]" />
              <div className="text-5xl font-extrabold text-[#2C251E] tracking-tight">{countdownDays}</div>
              <div className="text-xs text-[#8C8273] tracking-widest mt-1 font-sans">天 (DAYS)</div>
            </div>

            <div className="bg-[#FAF8F2] border-2 border-[#DCD2B5] p-5 rounded-sm relative overflow-hidden shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#5C7261]" />
              <div className="text-5xl font-extrabold text-[#2C251E] tracking-tight">
                {String(countdownHours).padStart(2, '0')}
              </div>
              <div className="text-xs text-[#8C8273] tracking-widest mt-1 font-sans">时 (HOURS)</div>
            </div>

            <div className="bg-[#FAF8F2] border-2 border-[#DCD2B5] p-5 rounded-sm relative overflow-hidden shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D4A350]" />
              <div className="text-5xl font-extrabold text-[#2C251E] tracking-tight">
                {String(countdownMinutes).padStart(2, '0')}
              </div>
              <div className="text-xs text-[#8C8273] tracking-widest mt-1 font-sans">分 (MINUTES)</div>
            </div>

            <div className="bg-[#FAF8F2] border-2 border-[#DCD2B5] p-5 rounded-sm relative overflow-hidden shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#9B2915] animate-pulse" />
              <div className="text-5xl font-extrabold text-[#9B2915] tracking-tight">
                {String(countdownSeconds).padStart(2, '0')}
              </div>
              <div className="text-xs text-[#8C8273] tracking-widest mt-1 font-sans">秒 (SECONDS)</div>
            </div>
          </div>

          <p className="text-xs text-[#5C5346] italic">
            * 2026年10月21日晨九时，碧莲画卷准时于聚贤坊开启，静候君来。
          </p>
        </div>
      </section>

      {/* Playable Mini-Game: "宋韵雅玩 - 投壶竞技" matching bottom section of image */}
      <section id="games" className="py-16 bg-[#F4EFE6] border-b border-[#E2D9C5] px-4 relative">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Header Description */}
          <div className="text-center space-y-3">
            <span className="text-[#9B2915] text-xs tracking-[0.3em] font-bold block">CLASSICAL INTERACTIVE GAMES</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#2C251E]">宋代大雅游艺 · 投壶</h2>
            <p className="text-sm text-[#5C5346] max-w-2xl mx-auto font-serif">
              投壶是宋代士大夫宴饮时最流行的游戏。宾主依次将竹矢投入特制的青铜壶中，中者为胜。我们在网页上为您精心复原了这一古雅体验，试着打破最高纪录吧！
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Interactive Game Console */}
            <div className="lg:col-span-8 bg-[#FAF8F2] border border-[#D9CEB6] rounded-md shadow-lg p-4 md:p-6 flex flex-col justify-between relative overflow-hidden min-h-[460px]">
              
              {/* Soft Ink Watermark inside game */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.05] flex items-center justify-center z-0">
                <svg viewBox="0 0 100 100" className="w-96 h-96 fill-[#9B2915]">
                  <path d="M50,10 C20,10 10,40 10,60 C10,80 30,90 50,90 C70,90 90,80 90,60 C90,40 80,10 50,10 Z" />
                </svg>
              </div>

              {/* Game Top Hud Info */}
              <div className="relative z-10 flex justify-between items-center border-b border-[#E2D9C5] pb-3 text-xs md:text-sm font-sans">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#9B2915]/10 text-[#9B2915] px-3 py-1 rounded-sm font-bold">
                    剩余竹矢: <span className="text-base">{arrows}</span> 支
                  </div>
                  <div className="text-[#5C5346]">
                    当前积分: <span className="text-base text-[#D4A350] font-bold">{score}</span>
                  </div>
                </div>
                <div className="text-[#8C8273]">
                  最高纪录: <span className="text-[#2C251E] font-bold">{highScore}</span>
                </div>
              </div>

              {/* Interactive SVG Animation Stage */}
              <div className="relative z-10 flex-1 min-h-[280px] bg-[#F2ECE1]/40 border border-[#E2D9C5]/80 my-4 rounded-sm relative overflow-hidden">
                
                {/* Traditional Clouds on the skyline of the game */}
                <div className="absolute top-2 left-4 text-[10px] text-[#A69B86]/70 tracking-widest font-sans">
                  温州永嘉 · 碧莲阁投壶席
                </div>

                {/* Score indicators popping out */}
                {arrowStatus === 'hit' && (
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#5C7261] text-white px-4 py-2 rounded-md font-bold text-lg animate-bounce shadow-lg z-20 flex items-center space-x-2">
                    <Award size={20} />
                    <span>入壶！+100 积分</span>
                  </div>
                )}
                {arrowStatus === 'miss' && (
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#9B2915] text-white px-4 py-1.5 rounded-md font-bold text-sm animate-pulse shadow-lg z-20">
                    偏离壶嘴！
                  </div>
                )}

                {/* Arrow flight physics visualization */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  {/* Stylized Aiming Guiding Trajectory Line */}
                  {isAiming && arrowStatus === 'idle' && (
                    <path 
                      d={`M 10% 80% Q ${10 + (power * 0.4)}% ${80 - (angle * 0.85)}% 80% 70%`}
                      fill="none" 
                      stroke="#D4A350" 
                      strokeWidth="2" 
                      strokeDasharray="4 6" 
                      className="opacity-70"
                    />
                  )}

                  {/* Dynamic Arrow (竹矢) in Flight or Positioned */}
                  <g transform={`translate(${arrowPos.x * 6.5}, ${arrowPos.y * 2.8})`}>
                    <line 
                      x1="-15" y1="0" x2="15" y2="0" 
                      stroke={arrowStatus === 'hit' ? '#5C7261' : '#9B2915'} 
                      strokeWidth="3.5" 
                      className={arrowStatus === 'flying' ? 'animate-spin' : ''}
                    />
                    {/* Arrow head */}
                    <polygon points="15,-4 22,0 15,4" fill={arrowStatus === 'hit' ? '#5C7261' : '#9B2915'} />
                    {/* Arrow feathers */}
                    <path d="M-15,-3 L-10,0 L-15,3 Z" fill="#EFE9DB" stroke="#2C251E" strokeWidth="1" />
                  </g>

                  {/* Classical Bronze Pot (铜壶) Graphic at coordinates (80%, 70%) */}
                  <g transform="translate(520, 175)" className="transition-transform hover:scale-105 duration-300">
                    {/* Shadows */}
                    <ellipse cx="0" cy="55" rx="20" ry="6" fill="#1C1814" opacity="0.3" />
                    {/* Bronze Pot Body */}
                    <path d="M-15,10 C-15,40 -25,45 -25,52 C-25,55 -15,58 0,58 C15,58 25,55 25,52 C25,45 15,40 15,10 Z" fill="#4A4E4D" stroke="#D4A350" strokeWidth="1.5" />
                    {/* Pot Neck */}
                    <rect x="-6" y="-15" width="12" height="25" fill="#3E4241" stroke="#D4A350" strokeWidth="1.5" />
                    {/* Decorative Pot Ears (双耳) - Classic Song Dynasty Pitch Pot design */}
                    <circle cx="-10" cy="-6" r="4.5" fill="none" stroke="#D4A350" strokeWidth="1.5" />
                    <circle cx="10" cy="-6" r="4.5" fill="none" stroke="#D4A350" strokeWidth="1.5" />
                    {/* Highlight Ring */}
                    <ellipse cx="0" cy="-15" rx="6" ry="2.5" fill="#2C2E2E" stroke="#D4A350" strokeWidth="1.5" />
                    {/* "Song" style engraving watermark on the pot */}
                    <text x="-4" y="38" fill="#D4A350" fontSize="7" fontWeight="bold" fontFamily="serif">宋</text>
                  </g>
                </svg>

                {/* Simple target guide zone highlight */}
                <div className="absolute bottom-[65px] right-[80px] w-12 h-12 border-2 border-dashed border-[#D4A350]/40 rounded-full animate-ping pointer-events-none" />

              </div>

              {/* Game Message Board */}
              <div className="relative z-10 bg-[#EFE9DB]/60 border border-[#D9CEB6] p-3 rounded-sm mb-4 text-xs md:text-sm text-center font-semibold text-[#5C5346] flex items-center justify-center space-x-2">
                <Info size={16} className="text-[#9B2915] shrink-0" />
                <span>{gameMessage}</span>
              </div>

              {/* Controls Panel */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-t border-[#E2D9C5] pt-4">
                
                {/* Angle Control */}
                <div className="md:col-span-4 space-y-1">
                  <div className="flex justify-between text-xs font-sans font-bold text-[#8C8273]">
                    <span>投掷仰角: {angle}°</span>
                    <span className="text-xs text-[#9B2915]">(建议: 40°- 45°)</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="75" 
                    value={angle} 
                    onChange={(e) => {
                      setAngle(parseInt(e.target.value));
                      if (arrowStatus === 'idle') setGameMessage('调整仰角：角度会改变抛物线的弧度高度');
                    }}
                    disabled={arrows <= 0 || arrowStatus === 'flying'}
                    className="w-full h-1 bg-[#D9CEB6] rounded-lg appearance-none cursor-pointer accent-[#9B2915]"
                  />
                </div>

                {/* Power Control */}
                <div className="md:col-span-4 space-y-1">
                  <div className="flex justify-between text-xs font-sans font-bold text-[#8C8273]">
                    <span>投掷力度: {power}%</span>
                    <span className="text-xs text-[#9B2915]">(建议: 70%- 75%)</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="100" 
                    value={power} 
                    onChange={(e) => {
                      setPower(parseInt(e.target.value));
                      if (arrowStatus === 'idle') setGameMessage('调整力度：影响箭矢飞行的总水平距离');
                    }}
                    disabled={arrows <= 0 || arrowStatus === 'flying'}
                    className="w-full h-1 bg-[#D9CEB6] rounded-lg appearance-none cursor-pointer accent-[#5C7261]"
                  />
                </div>

                {/* Action Button */}
                <div className="md:col-span-4 flex space-x-2">
                  <button
                    onClick={handleThrowArrow}
                    disabled={arrows <= 0 || arrowStatus === 'flying'}
                    className={`flex-1 font-sans text-xs tracking-widest font-bold py-3 px-4 rounded-sm transition-all shadow-md flex items-center justify-center space-x-1 ${
                      arrows <= 0 
                        ? 'bg-[#D9CEB6] text-[#8C8273] cursor-not-allowed'
                        : 'bg-[#9B2915] hover:bg-[#802110] text-[#FAF8F2]'
                    }`}
                  >
                    <Target size={14} />
                    <span>{arrowStatus === 'flying' ? '投掷中...' : '掷矢入壶'}</span>
                  </button>

                  <button
                    onClick={resetGame}
                    className="bg-[#EFE9DB] hover:bg-[#E2D9C5] text-[#5C5346] border border-[#D9CEB6] p-3 rounded-sm transition-all"
                    title="重置棋局"
                  >
                    <RefreshCw size={14} />
                  </button>
                </div>

              </div>

            </div>

            {/* Right: Traditional Instructions Easels matching bottom graphics in inspiration image */}
            <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
              
              {/* Play instructions layout */}
              <div className="bg-[#FAF8F2] border border-[#D9CEB6] p-5 rounded-md shadow-md space-y-4">
                <div className="flex items-center space-x-2 border-b border-[#E2D9C5] pb-2">
                  <BookOpen size={18} className="text-[#9B2915]" />
                  <h3 className="font-bold text-md text-[#2C251E] tracking-widest">雅玩规则 (说明画架)</h3>
                </div>
                <ul className="text-xs text-[#5C5346] space-y-3 leading-relaxed">
                  <li className="flex items-start space-x-2">
                    <span className="bg-[#9B2915] text-white w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-sans mt-0.5">1</span>
                    <span><strong>瞄准抛物:</strong> 拖动仰角与力度滑块，左侧的金色虚线即为箭矢的大致轨迹参考。</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-[#9B2915] text-white w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-sans mt-0.5">2</span>
                    <span><strong>完美落壶:</strong> 壶口的宽度较窄，必须完美调配角度（约42-45度）与力度（约70-75%）才能成功落壶。</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-[#9B2915] text-white w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-sans mt-0.5">3</span>
                    <span><strong>积分兑好礼:</strong> 每次入壶可获100积分。若能在文化季现场展示此小游戏获胜界面，可免费兑换本届永嘉精美香柚礼盒。</span>
                  </li>
                </ul>
              </div>

              {/* Special offline features card showcasing "捶丸" and "套圈" from user image */}
              <div className="bg-[#EFE9DB] border border-[#DCD2B5] p-5 rounded-md shadow-inner space-y-3">
                <div className="flex items-center space-x-2 text-[#5C7261]">
                  <Gift size={18} />
                  <h4 className="font-bold text-sm tracking-widest">其他宋代经典游艺 (线下体验)</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#5C5346]">
                  <div className="bg-[#FAF8F2] p-2.5 rounded-sm border border-[#D9CEB6]/50">
                    <p className="font-bold text-[#9B2915] mb-1">捶丸 (宋代高尔夫)</p>
                    <p className="leading-normal">手持古木木杆，将特制陶球捶入草中圆洞，极考沉稳心力。</p>
                  </div>
                  <div className="bg-[#FAF8F2] p-2.5 rounded-sm border border-[#D9CEB6]/50">
                    <p className="font-bold text-[#5C7261] mb-1">柚子套圈 (大吉丰收)</p>
                    <p className="leading-normal">以竹藤圈套取地铺的滚圆早香柚，套中者可当场携柚归家。</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Invitation generator scroll section - "生成专属宋韵画卷/邀请函" */}
      <section id="invite" className="py-16 bg-[#FAF8F2] border-b border-[#E2D9C5] px-4 relative">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-[#5C7261] text-xs tracking-[0.3em] font-bold block">CUSTOM CHINESE INVITATION SCROLL</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#2C251E]">定制您专属的 · 宋代风华邀请函</h2>
            <p className="text-sm text-[#5C5346] max-w-xl mx-auto">
              输入您的雅名，挑选一件钟情的宋韵活动，我们将为您生成一份由古法染纸、宣纸大漆和古典名章构筑的绝美电子画轴。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Hand Options Panel */}
            <div className="md:col-span-5 bg-[#EFE9DB] border border-[#DCD2B5] p-6 rounded-md shadow-md space-y-6">
              
              <form onSubmit={handleGenerateInvitation} className="space-y-4">
                
                {/* Visitor Name input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#5C5346] tracking-wider">
                    尊客雅字 / 姓名:
                  </label>
                  <input 
                    type="text" 
                    maxLength={10}
                    placeholder="例如：苏东坡、李清照"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="w-full px-4 py-2 bg-[#FAF8F2] border border-[#D9CEB6] rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-[#9B2915] font-serif text-[#2C251E]"
                  />
                </div>

                {/* Theme Style Chooser */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#5C5346] tracking-wider">
                    挑选宋韵画意风格:
                  </label>
                  <div className="grid grid-cols-1 gap-2.5">
                    
                    <button
                      type="button"
                      onClick={() => { setInvitationTheme('landscape'); sfx.playWoodenBlock(); }}
                      className={`p-3 rounded-sm text-left border text-xs flex justify-between items-center transition-all ${
                        invitationTheme === 'landscape'
                          ? 'border-[#5C7261] bg-[#5C7261]/10 text-[#5C7261] font-bold ring-1 ring-[#5C7261]'
                          : 'border-[#D9CEB6] bg-[#FAF8F2] text-[#8C8273] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="block text-sm">碧水悠悠 (山水寻幽)</span>
                        <span className="text-[10px] opacity-80">宋代温润淡雅风格，重在秀美自然</span>
                      </div>
                      <span className="text-xs bg-[#5C7261]/20 px-2 py-0.5 rounded-sm">寻古</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => { setInvitationTheme('market'); sfx.playWoodenBlock(); }}
                      className={`p-3 rounded-sm text-left border text-xs flex justify-between items-center transition-all ${
                        invitationTheme === 'market'
                          ? 'border-[#9B2915] bg-[#9B2915]/10 text-[#9B2915] font-bold ring-1 ring-[#9B2915]'
                          : 'border-[#D9CEB6] bg-[#FAF8F2] text-[#8C8273] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="block text-sm">锦湾市集 (华灯繁密)</span>
                        <span className="text-[10px] opacity-80">市井烟火气息，展现宋代繁荣之美</span>
                      </div>
                      <span className="text-xs bg-[#9B2915]/20 px-2 py-0.5 rounded-sm">市井</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => { setInvitationTheme('gourmet'); sfx.playWoodenBlock(); }}
                      className={`p-3 rounded-sm text-left border text-xs flex justify-between items-center transition-all ${
                        invitationTheme === 'gourmet'
                          ? 'border-[#D4A350] bg-[#D4A350]/10 text-[#D4A350] font-bold ring-1 ring-[#D4A350]'
                          : 'border-[#D9CEB6] bg-[#FAF8F2] text-[#8C8273] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="block text-sm">宋韵金柚 (舌尖雅集)</span>
                        <span className="text-[10px] opacity-80">尊享朝廷秋贡品鉴格调</span>
                      </div>
                      <span className="text-xs bg-[#D4A350]/20 px-2 py-0.5 rounded-sm">秋贡</span>
                    </button>

                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9B2915] hover:bg-[#802110] text-[#FAF8F2] py-3 rounded-sm text-sm tracking-widest font-sans font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <Sparkles size={16} />
                  <span>挥毫生成专属画卷</span>
                </button>

              </form>

              {/* Toast warning on successful creation */}
              {generationToast && (
                <div className="p-3 bg-[#5C7261]/10 border border-[#5C7261] rounded-sm text-xs text-[#5C7261] flex items-center space-x-2 animate-pulse">
                  <CheckCircle2 size={16} className="shrink-0" />
                  <span>恭喜！专属宋韵画卷已被印盖红泥金章。可在右侧预览。</span>
                </div>
              )}

            </div>

            {/* Right Hand: Gorgeous simulated vertical scroll invitation block */}
            <div className="md:col-span-7 flex justify-center">
              
              {/* Outer paper shadow roll container */}
              <div className="relative w-full max-w-[420px] transition-all duration-700 transform hover:scale-[1.02]">
                
                {/* Scroll Top Roller Bar */}
                <div className="h-6 bg-[#A69376] rounded-t-md mx-4 shadow-md border-b border-[#8C7A5C] relative flex items-center justify-between px-4">
                  <div className="w-2.5 h-2.5 bg-[#4A3D2A] rounded-full" />
                  <div className="h-1 w-24 bg-[#FAF8F2]/30 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-[#4A3D2A] rounded-full" />
                </div>

                {/* The main scroll body mimicking paper color, borders from the uploaded image */}
                <div className={`${themesData[invitationTheme].bgClass} p-8 border-l-4 border-r-4 border-[#A69376] shadow-xl space-y-8 relative overflow-hidden transition-colors duration-500`}>
                  
                  {/* Silk flower border background lines */}
                  <div className="absolute inset-4 border border-[#C8BBA1] pointer-events-none" />
                  <div className="absolute inset-5 border border-[#C8BBA1]/40 pointer-events-none" />

                  {/* Corner floral watermarks */}
                  <div className="absolute top-6 left-6 text-xs text-[#8C8273]/30">❖</div>
                  <div className="absolute top-6 right-6 text-xs text-[#8C8273]/30">❖</div>
                  <div className="absolute bottom-6 left-6 text-xs text-[#8C8273]/30">❖</div>
                  <div className="absolute bottom-6 right-6 text-xs text-[#8C8273]/30">❖</div>

                  {/* Scroll Content layout */}
                  <div className="space-y-6 text-center relative z-10">
                    
                    {/* Header Seal */}
                    <div className="flex justify-between items-center border-b border-[#C8BBA1] pb-3">
                      <span className="text-[10px] tracking-widest text-[#8C8273] font-sans font-bold">2026 碧莲宋韵文化季</span>
                      <div className="border border-[#9B2915] text-[#9B2915] text-[10px] px-2 py-0.5 rounded-sm tracking-widest">
                        温州永嘉
                      </div>
                    </div>

                    {/* Scroll Greeting & calligraphy section */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] text-[#8C8273] tracking-[0.3em] block">HONORABLE INVITATION</span>
                      <h3 className="text-xl md:text-2xl text-[#2C251E] font-bold tracking-widest">
                        {themesData[invitationTheme].title}
                      </h3>
                      <div className="h-0.5 w-12 bg-[#9B2915] mx-auto my-3" />
                    </div>

                    {/* Beautiful Large Vertical Visitor Callout */}
                    <div className="py-4 bg-[#FAF8F2]/50 border border-[#DCD2B5]/50 rounded-sm">
                      <span className="text-xs text-[#8C8273] tracking-widest block mb-2">致尊客 :</span>
                      <span className="text-2xl font-extrabold text-[#2C251E] tracking-widest border-b border-[#9B2915] pb-1 px-4 italic">
                        {isGenerated ? visitorName : "温州墨客"}
                      </span>
                      <span className="text-xs text-[#5C5346] block mt-2 tracking-widest">阁下雅鉴</span>
                    </div>

                    {/* Dynamic Poem generated with elegant vertical writing feel */}
                    <div className="py-4 px-2 text-sm md:text-base text-[#2C251E] leading-loose font-serif font-semibold tracking-widest text-center">
                      <p className="border-r border-[#C8BBA1]/40 px-2 py-1">{themesData[invitationTheme].poem}</p>
                    </div>

                    {/* Interactive Custom Name Stamp Overlay */}
                    <div className="flex justify-center items-center space-x-4 pt-4 border-t border-[#C8BBA1]/40">
                      
                      {/* Left: Stamp of the selected activity type */}
                      <div className={`border-2 border-[#9B2915] text-[#9B2915] p-2 text-xs font-black tracking-widest uppercase rounded-sm transform rotate-[-8deg]`}>
                        {themesData[invitationTheme].seal}
                      </div>

                      {/* Right: Signature customized initials red seal */}
                      <div className="border-4 border-[#9B2915] text-[#9B2915] w-12 h-12 flex items-center justify-center font-black text-center text-sm leading-tight tracking-tighter transform rotate-12 relative shadow-sm">
                        {isGenerated && visitorName ? (
                          <span>{visitorName.slice(0, 2)}<br/>之章</span>
                        ) : (
                          <span>永嘉<br/>之章</span>
                        )}
                        <div className="absolute inset-0 border border-[#9B2915]/30 opacity-45" />
                      </div>

                    </div>

                    {/* Micro location and time info stamp */}
                    <div className="bg-[#FAF8F2]/60 p-2 text-[10px] text-[#8C8273] tracking-widest rounded-sm text-center font-sans">
                      <p>时间：丙申年重阳吉日 10月21日</p>
                      <p className="mt-1">地点：浙江温州 · 永嘉县碧莲镇古街聚贤坊</p>
                    </div>

                  </div>

                </div>

                {/* Scroll Bottom Roller Bar */}
                <div className="h-6 bg-[#A69376] rounded-b-md mx-4 shadow-md border-t border-[#8C7A5C] relative flex items-center justify-between px-4">
                  <div className="w-2.5 h-2.5 bg-[#4A3D2A] rounded-full" />
                  <div className="h-1 w-24 bg-[#FAF8F2]/30 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-[#4A3D2A] rounded-full" />
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Festival Schedule / High density Event Timeline */}
      <section id="schedule" className="py-16 bg-[#EFE9DB] border-b border-[#E2D9C5] px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-[#9B2915] text-xs tracking-[0.3em] font-bold block">FESTIVAL COMPREHENSIVE AGENDA</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#2C251E]">宋韵文化季 · 雅集行事历</h2>
            <p className="text-sm text-[#5C5346] max-w-xl mx-auto">
              碧莲两日欢聚，精彩纷呈。请宾客合理规划出行时间，赏秋景、品柚香、玩雅游、赏古乐。
            </p>
          </div>

          {/* Schedule Filtering Tab Menu */}
          <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto font-sans text-xs tracking-wider">
            <button 
              onClick={() => { setActiveTab('all'); sfx.playWoodenBlock(); }}
              className={`px-4 py-2 rounded-full transition-all border ${
                activeTab === 'all' 
                  ? 'bg-[#9B2915] text-white border-[#9B2915] shadow-sm' 
                  : 'bg-[#FAF8F2] text-[#8C8273] border-[#D9CEB6] hover:bg-[#F2ECE1]'
              }`}
            >
              全部雅集
            </button>
            <button 
              onClick={() => { setActiveTab('ceremony'); sfx.playWoodenBlock(); }}
              className={`px-4 py-2 rounded-full transition-all border ${
                activeTab === 'ceremony' 
                  ? 'bg-[#9B2915] text-white border-[#9B2915] shadow-sm' 
                  : 'bg-[#FAF8F2] text-[#8C8273] border-[#D9CEB6] hover:bg-[#F2ECE1]'
              }`}
            >
              盛典礼仪
            </button>
            <button 
              onClick={() => { setActiveTab('competition'); sfx.playWoodenBlock(); }}
              className={`px-4 py-2 rounded-full transition-all border ${
                activeTab === 'competition' 
                  ? 'bg-[#9B2915] text-white border-[#9B2915] shadow-sm' 
                  : 'bg-[#FAF8F2] text-[#8C8273] border-[#D9CEB6] hover:bg-[#F2ECE1]'
              }`}
            >
              “柚王”评选
            </button>
            <button 
              onClick={() => { setActiveTab('market'); sfx.playWoodenBlock(); }}
              className={`px-4 py-2 rounded-full transition-all border ${
                activeTab === 'market' 
                  ? 'bg-[#9B2915] text-white border-[#9B2915] shadow-sm' 
                  : 'bg-[#FAF8F2] text-[#8C8273] border-[#D9CEB6] hover:bg-[#F2ECE1]'
              }`}
            >
              古街市集
            </button>
            <button 
              onClick={() => { setActiveTab('game'); sfx.playWoodenBlock(); }}
              className={`px-4 py-2 rounded-full transition-all border ${
                activeTab === 'game' 
                  ? 'bg-[#9B2915] text-white border-[#9B2915] shadow-sm' 
                  : 'bg-[#FAF8F2] text-[#8C8273] border-[#D9CEB6] hover:bg-[#F2ECE1]'
              }`}
            >
              传统竞技
            </button>
          </div>

          {/* Time block list (High Density & Beautiful details emulating the layout style in poster) */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredTimeline.map((item, index) => (
              <div 
                key={index}
                className="bg-[#FAF8F2] border border-[#D9CEB6] p-5 rounded-md shadow-sm hover:shadow-md hover:border-[#9B2915]/50 transition-all grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                
                {/* Left Time Column */}
                <div className="md:col-span-3 flex md:flex-col items-center md:items-start space-x-2 md:space-x-0 border-b md:border-b-0 md:border-r border-[#E2D9C5] pb-2 md:pb-0 md:pr-4">
                  <div className="flex items-center space-x-1.5 text-[#9B2915]">
                    <Clock size={14} />
                    <span className="font-bold tracking-wider text-sm">{item.time}</span>
                  </div>
                  <span className="text-[10px] text-[#8C8273] tracking-widest uppercase md:mt-1 font-sans">Time Schedule</span>
                </div>

                {/* Center Content Title */}
                <div className="md:col-span-6 space-y-1">
                  <h4 className="font-bold text-base text-[#2C251E] tracking-wide hover:text-[#9B2915] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5C5346] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Right Location & Tags */}
                <div className="md:col-span-3 text-left md:text-right space-y-1.5 md:pl-4">
                  <div className="flex items-center md:justify-end space-x-1 text-xs text-[#5C7261]">
                    <MapPin size={12} className="shrink-0" />
                    <span className="font-semibold truncate">{item.location}</span>
                  </div>
                  <span className="inline-block bg-[#EFE9DB] text-[#8C8273] text-[9px] px-2 py-0.5 rounded-sm tracking-wider font-sans">
                    {item.tag.toUpperCase()}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Cultural Heritage Highlights / Story Cards Section */}
      <section className="py-16 bg-[#FAF8F2] border-b border-[#E2D9C5] px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-[#5C7261] text-xs tracking-[0.3em] font-bold block">FOLK CULTURE HERITAGE</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#2C251E]">永嘉早香柚 · 越千年而芬芳</h2>
            <p className="text-sm text-[#5C5346] max-w-2xl mx-auto">
              碧莲香柚始种于唐宋年间，曾多次作为朝廷御用岁贡。因果大皮薄、肉质脆嫩、香甜爽口、沁人心脾而驰名海内。
            </p>
          </div>

          {/* Core Spotlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Spotlight 1 */}
            <div className="bg-[#EFE9DB] border border-[#DCD2B5] p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 text-3xl font-bold text-[#D4A350]/20 font-sans">01</div>
              <div className="text-[#9B2915] font-black text-xs tracking-widest mb-3 border-b border-[#9B2915]/20 pb-1.5 uppercase">
                宋朝贡品 · 皇家赞誉
              </div>
              <h4 className="text-lg font-bold text-[#2C251E] tracking-wide mb-2">御书院岁贡录</h4>
              <p className="text-xs text-[#5C5346] leading-relaxed">
                据永嘉县志载，碧莲出产的早香柚在大中祥符年间被列为江东路主要贡品，每逢重阳前后运至汴梁，赐予朝中士大夫与学士品尝。
              </p>
            </div>

            {/* Spotlight 2 */}
            <div className="bg-[#EFE9DB] border border-[#DCD2B5] p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 text-3xl font-bold text-[#5C7261]/20 font-sans">02</div>
              <div className="text-[#5C7261] font-black text-xs tracking-widest mb-3 border-b border-[#5C7261]/20 pb-1.5 uppercase">
                独有水土 · 天赐芬芳
              </div>
              <h4 className="text-lg font-bold text-[#2C251E] tracking-wide mb-2">楠溪江水系灌溉</h4>
              <p className="text-xs text-[#5C5346] leading-relaxed">
                碧莲盆地特有的沙壤土，饱含矿物质。山水环抱所形成的温暖微气候，使每一颗早香柚的皮油腺格外丰盈，未尝其肉，先闻奇香。
              </p>
            </div>

            {/* Spotlight 3 */}
            <div className="bg-[#EFE9DB] border border-[#DCD2B5] p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 text-3xl font-bold text-[#9B2915]/20 font-sans">03</div>
              <div className="text-[#D4A350] font-black text-xs tracking-widest mb-3 border-b border-[#D4A350]/20 pb-1.5 uppercase">
                宋学风雅 · 诗画永嘉
              </div>
              <h4 className="text-lg font-bold text-[#2C251E] tracking-wide mb-2">永嘉学派之风致</h4>
              <p className="text-xs text-[#5C5346] leading-relaxed">
                宋代以叶适等为代表的“永嘉学派”强调务实精神。碧莲百姓世代耕读，精益求精改良柚种，将务实耕作与古典美学极致融合。
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Sponsors & Partner Logos Resembling the poster credits footer */}
      <footer className="bg-[#2C251E] text-[#D9CEB6] py-12 px-4 border-t-2 border-[#9B2915]">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Main credits banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#3E342B] pb-8 items-center text-center md:text-left">
            <div className="space-y-2">
              <span className="font-extrabold text-xl text-[#FAF8F2] tracking-widest">相约碧莲 · 柚见宋韵</span>
              <p className="text-xs text-[#8C8273]">
                2026 第十一届中国早香柚文化节暨文化旅游季
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <div className="border border-[#9B2915] text-[#9B2915] px-3 py-1 text-[10px] tracking-widest rounded-sm font-bold uppercase transform rotate-[-2deg]">
                风雅温州
              </div>
              <div className="border border-[#5C7261] text-[#5C7261] px-3 py-1 text-[10px] tracking-widest rounded-sm font-bold uppercase transform rotate-[2deg]">
                山水永嘉
              </div>
            </div>

            <div className="text-xs md:text-right text-[#8C8273]">
              <p>咨询热线：0577-XXXXXXXX</p>
              <p className="mt-1">地 址：永嘉县碧莲镇人民政府大院</p>
            </div>
          </div>

          {/* Sub-text organization lists matching bottom footer lines of image */}
          <div className="text-center text-[11px] text-[#8C8273] space-y-2">
            <p className="tracking-widest">
              主办单位：永嘉县人民政府
            </p>
            <p className="tracking-wider">
              承办单位：中共永嘉县委宣传部 / 永嘉县农业农村局 / 永嘉县文化和广电旅游体育局 / 温州市楠溪江风景旅游活性发展中心 / 永嘉县文学艺术界联合会 / 碧莲镇人民政府
            </p>
            <p className="text-[10px] text-[#5C5346] pt-4">
              &copy; 2026 永嘉碧莲早香柚文化季筹备委员会. 版权所有. 
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}