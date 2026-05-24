import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Wallet, Check, ChevronRight, ArrowDown, 
  Twitter, Send, Instagram, Play, Shield, Zap, 
  Globe, Coins, Terminal, Loader2 
} from 'lucide-react';

const Playverse = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  
  // Presale Widget State
  const [usdtAmount, setUsdtAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [txSuccess, setTxSuccess] = useState(false);
  const [showPromo, setShowPromo] = useState(true);

  const TOKEN_PRICE = 0.0181;
  const pvAmount = usdtAmount ? (parseFloat(usdtAmount) / TOKEN_PRICE).toFixed(2) : '0.00';

  // The core brand color from the image
  const brandGreen = '#c4f503';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConnectWallet = () => setShowWalletModal(true);
  const confirmConnection = () => { setShowWalletModal(false); setWalletConnected(true); };

  const handleBuy = () => {
    if (!walletConnected) { setShowWalletModal(true); return; }
    if (!usdtAmount || parseFloat(usdtAmount) <= 0) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false); setTxSuccess(true); setUsdtAmount('');
      setTimeout(() => setTxSuccess(false), 3000);
    }, 2000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050800] text-white font-sans selection:bg-black selection:text-[#c4f503] overflow-x-hidden">
      
      {/* Wallet Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
          <div className="bg-[#c4f503] rounded-3xl p-6 w-full max-w-md relative shadow-2xl">
            <button onClick={() => setShowWalletModal(false)} className="absolute top-4 right-4 text-black/60 hover:text-black">
              <X size={24} />
            </button>
            <h3 className="text-2xl font-black mb-6 text-black uppercase tracking-tight">Connect Wallet</h3>
            <div className="space-y-3">
              {['MetaMask', 'WalletConnect', 'Coinbase Wallet'].map((wallet) => (
                <button 
                  key={wallet} onClick={confirmConnection}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-black/10 bg-white/40 hover:bg-white/60 hover:border-black/30 transition-all group"
                >
                  <span className="font-bold text-black">{wallet}</span>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                    <Wallet size={14} className="text-[#c4f503]" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION (Bright Lime Green Theme) */}
      <section id="hero" className="relative min-h-screen bg-[#c4f503] overflow-hidden">
        
        {/* Background Image with Multiply Blend to recreate the monochromatic cyberpunk look */}
        <div className="absolute top-0 right-0 w-full lg:w-[70%] h-full z-0 opacity-80 pointer-events-none mix-blend-multiply">
          <img 
            src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=2000&auto=format&fit=crop" 
            alt="Cyberpunk character" 
            className="w-full h-full object-cover object-right grayscale contrast-125"
          />
        </div>
        
        {/* Bottom Fade to Dark */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050800] to-transparent z-10 pointer-events-none"></div>

        {/* Navigation */}
        <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-[#c4f503]/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer text-black" onClick={() => scrollToSection('hero')}>
              <span className="text-3xl font-black tracking-tighter">PV</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-12 text-sm font-bold tracking-widest uppercase text-black/70">
              {['Ecosystem', 'Tokenomics', 'Roadmap'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-black transition-colors">
                  {item}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={walletConnected ? () => setWalletConnected(false) : handleConnectWallet}
                className="hidden sm:flex items-center gap-2 bg-transparent border-2 border-black/20 text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black hover:text-[#c4f503] transition-all duration-300"
              >
                {walletConnected ? (
                  <><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>0x7A...4F9</>
                ) : (
                  <>Connect Wallet <Wallet size={16} /></>
                )}
              </button>
              <button 
                className="flex items-center gap-2 bg-black text-[#c4f503] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black/80 transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Menu {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 h-full relative z-20 flex flex-col justify-center pt-32 pb-24">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
            {/* Left Column: Copy & Widget */}
            <div className="flex flex-col gap-10">
              
              {/* Typography matching the image */}
              <div className="max-w-xl">
                <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-black mb-4 leading-[0.9]">
                  PLAYVERSE
                </h1>
                <p className="text-xl sm:text-2xl text-black font-bold tracking-tight">
                  Token on Binance Smart Chain<br/>
                  <span className="font-medium text-black/70 text-lg">where gaming meets the power of blockchain</span>
                </p>
              </div>

              {/* Presale Widget - Re-styled to match the muddy green glassmorphism and black text */}
              <div className="bg-[#8fa82b]/60 backdrop-blur-xl rounded-[28px] p-6 sm:p-7 max-w-lg shadow-2xl relative overflow-hidden border border-black/5">
                
                {/* Promo Banner */}
                {showPromo && (
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-sm text-black font-semibold">Use promo <span className="font-black">PGMLaunch</span> to get 15% Bonus</p>
                    <button onClick={() => setShowPromo(false)} className="text-black/50 hover:text-black"><X size={16} /></button>
                  </div>
                )}

                {/* Stage Info */}
                <div className="bg-[#a3bf32]/80 rounded-2xl p-4 flex items-center justify-between mb-3 border border-black/5">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-[#c4f503]">
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <div>
                      <p className="text-[10px] text-black/60 uppercase tracking-widest font-bold">Current Stage</p>
                      <p className="text-black font-black text-sm">Stage 4</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-black/60 uppercase tracking-widest font-bold">Total Raised</p>
                    <p className="text-black font-black text-sm">$2,094,890.00</p>
                  </div>
                </div>

                {/* Progress Bar Area */}
                <div className="bg-[#a3bf32]/80 rounded-2xl p-5 mb-5 border border-black/5">
                  <div className="flex justify-between items-end mb-2">
                    <h2 className="text-3xl font-black text-black tracking-tighter">98.64% <span className="text-[10px] text-black/60 font-bold tracking-widest uppercase ml-1">Total Sold</span></h2>
                    <div className="text-right">
                      <p className="text-[10px] text-black/60 uppercase tracking-widest font-bold">Remaining</p>
                      <p className="text-black font-black text-sm">2,645,052</p>
                    </div>
                  </div>
                  {/* Visual Bar */}
                  <div className="h-2.5 w-full bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-black w-[98.64%] rounded-full"></div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 mb-6 text-center sm:text-left">
                  <div>
                    <p className="text-[9px] text-black/60 uppercase tracking-widest font-bold mb-0.5">Current price 1 USDT</p>
                    <p className="text-black font-black text-xs sm:text-sm">0.0181 USDT</p>
                  </div>
                  <div className="sm:text-center border-l border-r border-black/10 px-2">
                    <p className="text-[9px] text-black/60 uppercase tracking-widest font-bold mb-0.5">Tokens sold</p>
                    <p className="text-black font-black text-xs sm:text-sm">192,036,683</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-[9px] text-black/60 uppercase tracking-widest font-bold mb-0.5">Next stage</p>
                    <p className="text-black font-black text-xs sm:text-sm">0.024 USDT</p>
                  </div>
                </div>

                {/* Functional Purchase Area */}
                <div className="mb-5 flex gap-2">
                  <div className="flex-1 relative">
                    <input 
                      type="number" value={usdtAmount} onChange={(e) => setUsdtAmount(e.target.value)} placeholder="USDT"
                      className="w-full bg-[#a3bf32]/50 border border-black/10 rounded-xl py-3 px-4 text-black font-bold placeholder-black/40 focus:outline-none focus:bg-white/40 transition-colors"
                    />
                  </div>
                  <div className="flex-1 relative">
                    <input 
                      type="text" value={pvAmount} readOnly
                      className="w-full bg-black/5 border border-black/5 rounded-xl py-3 px-4 text-black/60 font-bold cursor-not-allowed"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-black/40">PV</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button 
                    onClick={handleBuy} disabled={isProcessing}
                    className={`w-full py-3.5 rounded-xl font-black text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2
                      ${txSuccess ? 'bg-green-600 text-white' : isProcessing ? 'bg-black/50 text-white cursor-wait' : 'bg-[#c4f503] text-black hover:bg-white hover:shadow-lg'}
                    `}
                  >
                    {txSuccess ? <><Check size={18} /> Successful</> : isProcessing ? <><Loader2 size={18} className="animate-spin" /> Processing</> : 'Buy PV Tokens'}
                  </button>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-transparent border-2 border-black/20 text-black py-3 rounded-xl font-bold text-xs uppercase tracking-wide hover:bg-black/5 transition-colors">
                      How To Buy?
                    </button>
                    <button className="flex-1 bg-[#ffcc00] text-black py-3 rounded-xl font-bold text-xs uppercase tracking-wide hover:bg-[#ffdd33] transition-colors">
                      Win $100k
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Visual Elements (Socials & Scroll) */}
            <div className="hidden lg:flex flex-col justify-end items-end h-full relative">
              {/* Circular Scroll Indicator */}
              <div className="absolute bottom-0 left-0 flex items-center justify-center w-28 h-28 cursor-pointer group" onClick={() => scrollToSection('ecosystem')}>
                  <div className="absolute inset-0 animate-[spin_10s_linear_infinite] group-hover:animate-[spin_5s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-black text-[10px] font-bold tracking-widest uppercase opacity-60">
                      <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                      <text><textPath href="#circlePath" startOffset="0%">EXPLORE • SCROLL TO EXPLORE • SCROLL TO </textPath></text>
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-black group-hover:bg-black group-hover:text-[#c4f503] transition-colors z-10">
                    <ArrowDown size={18} />
                  </div>
              </div>

              {/* Social Links */}
              <div className="absolute bottom-4 right-0 flex gap-3 text-black">
                <a href="#" className="hover:bg-black hover:text-[#c4f503] transition-colors bg-transparent p-2.5 rounded-full border border-black/20"><Instagram size={18} /></a>
                <a href="#" className="hover:bg-black hover:text-[#c4f503] transition-colors bg-transparent p-2.5 rounded-full border border-black/20"><X size={18} /></a>
                <a href="#" className="hover:bg-black hover:text-[#c4f503] transition-colors bg-transparent p-2.5 rounded-full border border-black/20"><Send size={18} /></a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LOWER SECTIONS - Transitioning to Dark Mode for readability and contrast */}
      <div className="bg-[#050800]">
        {/* ECOSYSTEM SECTION */}
        <section id="ecosystem" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-[#c4f503] text-sm font-bold uppercase tracking-widest mb-2">The Ecosystem</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">BEYOND JUST GAMING</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Terminal size={28} />, title: "Immersive VR Meta", desc: "Step into our interconnected gaming universes powered by Unreal Engine 5." },
                { icon: <Coins size={28} />, title: "Real Yield DeFi", desc: "Stake your PV tokens to earn platform fees and exclusive in-game assets." },
                { icon: <Shield size={28} />, title: "True Ownership", desc: "Every item, character, and plot of land is a verifiable NFT on the BSC network." }
              ].map((feature, i) => (
                <div key={i} className="bg-[#0a0f05] border border-[#1a240a] rounded-[24px] p-8 hover:border-[#c4f503]/50 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-[#121c09] flex items-center justify-center text-[#c4f503] mb-6 group-hover:scale-110 transition-transform border border-[#c4f503]/20">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-black text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOKENOMICS SECTION */}
        <section id="tokenomics" className="py-24 bg-[#080d04] relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-[#c4f503] text-sm font-bold uppercase tracking-widest mb-2">Tokenomics</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">FAIR DISTRIBUTION</h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Our tokenomics are designed for long-term sustainability, rewarding early backers while ensuring continuous ecosystem development.
                </p>
                
                <div className="space-y-3">
                  {[
                    { label: "Presale & Public Sale", percent: "40%", color: "bg-[#c4f503]" },
                    { label: "Liquidity & Exchange", percent: "20%", color: "bg-[#8da814]" },
                    { label: "Ecosystem Rewards", percent: "25%", color: "bg-white" },
                    { label: "Team & Advisors", percent: "15%", color: "bg-gray-600" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                      <div className="flex-1 bg-[#0a0f05] rounded-xl p-4 flex justify-between border border-[#1a240a]">
                        <span className="text-white font-bold text-sm">{item.label}</span>
                        <span className="text-[#c4f503] font-black">{item.percent}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 relative flex justify-center">
                <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                  <div className="absolute inset-0 rounded-full border-[12px] border-[#0a0f05]"></div>
                  <div className="absolute inset-0 rounded-full border-[12px] border-[#c4f503] border-t-transparent border-l-transparent rotate-45 opacity-90 shadow-[0_0_50px_rgba(196,245,3,0.1)]"></div>
                  <div className="absolute inset-4 rounded-full border-[8px] border-[#8da814] border-b-transparent border-l-transparent -rotate-12"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-gray-500 font-bold tracking-widest text-xs mb-1">TOTAL SUPPLY</span>
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter">1 BILLION</span>
                    <span className="text-[#c4f503] font-bold mt-1">PV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#030500] py-12 border-t border-[#c4f503]/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black tracking-tighter text-[#c4f503]">PV</span>
                <span className="text-lg font-black text-white tracking-tight mt-1">PLAYVERSE</span>
              </div>
              
              <div className="flex gap-4 text-gray-500">
                <a href="#" className="hover:text-[#c4f503] transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-[#c4f503] transition-colors"><Send size={20} /></a>
                <a href="#" className="hover:text-[#c4f503] transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-[#c4f503] transition-colors"><Globe size={20} /></a>
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-bold uppercase tracking-wider">
              <p>&copy; {new Date().getFullYear()} Playverse.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
};

export default Playverse;
4