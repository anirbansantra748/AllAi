import React, { useState, useEffect } from 'react';
import { 
  Mountain, 
  ArrowRight, 
  TreePine, 
  Map, 
  Backpack, 
  Check, 
  Facebook, 
  Instagram, 
  Twitter, 
  Github,
  Menu,
  X,
  Send
} from 'lucide-react';

// --- MAIN APP COMPONENT & ROUTER ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        navigate={navigate} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="flex-grow pt-24">
        {currentPage === 'home' && <HomePage navigate={navigate} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

// --- NAVIGATION COMPONENT ---
function Navbar({ currentPage, navigate, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const navLinks = [
    { id: 'home', label: 'Start Here' },
    { id: 'about', label: 'Our Story' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Get in Touch' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => navigate('home')} 
          className="flex items-center gap-2 group focus:outline-none"
        >
          <Mountain className="w-8 h-8 text-black group-hover:scale-105 transition-transform" strokeWidth={1.5} />
          <span className="font-bold text-xl tracking-tighter hidden md:block">Lumina.</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => navigate(link.id)}
              className={`hover:text-black transition-colors duration-200 ${
                currentPage === link.id ? 'text-black font-semibold' : ''
              } ${link.id === 'contact' ? 'text-black font-bold' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-black p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-4 flex flex-col px-6 gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => navigate(link.id)}
              className={`text-left text-lg py-2 border-b border-gray-50 ${
                currentPage === link.id ? 'text-black font-semibold' : 'text-gray-500'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

// --- HOME PAGE COMPONENT ---
function HomePage({ navigate }) {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pb-48 px-6 md:px-12 overflow-hidden flex flex-col items-center text-center md:text-left md:items-start md:block">
        {/* Background Image with Gradient Fade */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.15] bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/50 via-white/80 to-white pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-light text-gray-600 mb-2 tracking-tight">Welcome to</h2>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-black leading-none">
              Lumina.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              We help creative entrepreneurs build an honest brand & resilient digital platform. 
              Find your true north in the noisy digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={() => navigate('about')}
                className="bg-black text-white px-8 py-4 text-sm font-bold tracking-widest hover:bg-gray-800 transition-all hover:shadow-lg w-full sm:w-auto"
              >
                START YOUR JOURNEY
              </button>
              <button 
                onClick={() => navigate('services')}
                className="text-gray-500 hover:text-black text-sm font-semibold tracking-wider flex items-center gap-2 uppercase group transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Little location tag floating */}
        <div className="hidden lg:flex absolute bottom-24 right-12 bg-black text-white text-xs py-2 px-4 opacity-80 items-center gap-2">
          <Map className="w-3 h-3" /> Basecamp, CO — United States
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">Start your journey.</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Come as you are. Bring your talents, your brilliance, your frustrations, 
            your struggles—and let's turn them into something awesome.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          <FeatureCard 
            icon={<TreePine strokeWidth={1.5} className="w-10 h-10" />}
            title="Be inspired."
            description="We want to give you the help and support you need to make huge strides towards the vision you're after in your business."
          />
          <FeatureCard 
            icon={<Map strokeWidth={1.5} className="w-10 h-10" />}
            title="Get connected."
            description="Jam with fellow tribe members, share experiences, stay accountable, and encourage one another on your journey."
          />
          <FeatureCard 
            icon={<Backpack strokeWidth={1.5} className="w-10 h-10" />}
            title="Equip yourself."
            description="Discover the tools and resources you need to build a beautiful website and create an amazing brand and digital platform."
          />
        </div>

        <div className="mt-16">
          <button 
            onClick={() => navigate('services')}
            className="text-gray-400 hover:text-black text-xs font-bold tracking-widest flex items-center gap-2 uppercase group transition-colors border-b border-gray-300 hover:border-black pb-1 inline-flex"
          >
            Take the first step today <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Split Info & Form Section */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Side Info */}
          <div className="lg:col-span-7 xl:col-span-8">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">Get started today.</h2>
            <p className="text-gray-500 text-lg mb-12">Introducing the Lumina Framework™ for creative entrepreneurs.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <InfoBlock title="Lumina Living" text="We believe that living an honest and intentional life will carry over to the way you run your business." />
              <InfoBlock title="Lumina Design" text="We believe that amazing typography and white space will help you build a beautiful website experience." />
              <InfoBlock title="Lumina Business" text="We believe that being genuine and transparent with your audience is paramount to a successful business." />
              <InfoBlock title="Lumina Community" text="We believe that doing life together—both business and personal—is the only way to go about this journey." />
            </div>
          </div>

          {/* Right Side Form Card */}
          <div className="lg:col-span-5 xl:col-span-4 relative">
            <NewsletterForm />
          </div>

        </div>
      </section>
    </div>
  );
}

// --- ABOUT PAGE COMPONENT ---
function AboutPage() {
  return (
    <div className="animate-fade-in py-20 px-6 md:px-12 max-w-4xl mx-auto min-h-[70vh]">
      <h1 className="text-5xl font-black tracking-tighter mb-8">Our Story.</h1>
      <div className="prose prose-lg text-gray-600">
        <p className="mb-6 text-xl leading-relaxed">
          Lumina was born out of a simple frustration: the digital world is too noisy, and authentic voices are getting lost in the algorithms.
        </p>
        <p className="mb-6 leading-relaxed">
          We started as a small collective of designers and writers who wanted to build platforms that felt human. No spammy pop-ups, no dark patterns, just honest communication and beautiful design.
        </p>
        <p className="mb-6 leading-relaxed">
          Today, we are a global community. We provide the tools, the education, and the network for creative entrepreneurs to build businesses that align with their core values. Whether you are a solo maker, a freelance designer, or a growing agency, Lumina is your basecamp.
        </p>
        <div className="mt-12 p-8 bg-gray-50 border-l-4 border-black">
          <h3 className="text-2xl font-bold text-black mb-4">The Lumina Promise</h3>
          <ul className="space-y-3 text-black">
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-600" /> Transparency in all operations.</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-600" /> Design that serves the content.</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-600" /> Community over competition.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// --- SERVICES PAGE COMPONENT ---
function ServicesPage() {
  const services = [
    { title: "Brand Identity", desc: "Crafting a visual language that speaks your truth. Logos, typography, color palettes, and comprehensive brand guidelines." },
    { title: "Digital Platform Design", desc: "Custom website design focused on user experience, fast load times, and minimalist aesthetics." },
    { title: "Strategic Consulting", desc: "One-on-one sessions to align your business goals with your digital presence. Finding clarity in your roadmap." },
    { title: "Community Access", desc: "Join our private network of creative entrepreneurs. Weekly workshops, resource libraries, and peer support." }
  ];

  return (
    <div className="animate-fade-in py-20 px-6 md:px-12 max-w-7xl mx-auto min-h-[70vh]">
      <h1 className="text-5xl font-black tracking-tighter mb-4">Services.</h1>
      <p className="text-xl text-gray-500 mb-16 max-w-2xl">Equipping you with everything you need to build an authentic digital presence.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((srv, idx) => (
          <div key={idx} className="group border border-gray-200 p-10 hover:border-black transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform">{srv.title}</h3>
            <p className="text-gray-600 leading-relaxed">{srv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- CONTACT PAGE COMPONENT ---
function ContactPage() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="animate-fade-in py-20 px-6 md:px-12 max-w-3xl mx-auto min-h-[70vh]">
      <h1 className="text-5xl font-black tracking-tighter mb-4">Get in Touch.</h1>
      <p className="text-xl text-gray-500 mb-12">We'd love to hear about your next project or simply say hello.</p>
      
      {status === 'success' ? (
        <div className="bg-black text-white p-12 text-center flex flex-col items-center">
          <Check className="w-16 h-16 mb-6 text-green-400" />
          <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
          <p className="text-gray-300">We'll get back to you within 48 hours. Keep building honestly.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-8 border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors text-sm font-bold tracking-wider uppercase"
          >
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
              <input required type="text" className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input required type="email" className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="jane@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
            <textarea required rows={6} className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="Tell us about your journey..."></textarea>
          </div>
          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="bg-black text-white px-8 py-4 text-sm font-bold tracking-widest hover:bg-gray-800 transition-all flex items-center justify-center gap-3 w-full md:w-auto disabled:opacity-70"
          >
            {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
            {!status && <Send className="w-4 h-4" />}
          </button>
        </form>
      )}
    </div>
  );
}

// --- SUB-COMPONENTS ---

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col group">
      <div className="mb-6 text-black transform group-hover:-translate-y-2 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function InfoBlock({ title, text }) {
  return (
    <div>
      <h4 className="text-lg font-bold mb-3">{title}</h4>
      <p className="text-gray-500 leading-relaxed text-sm">{text}</p>
    </div>
  );
}

function NewsletterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center">
      <Mountain className="w-10 h-10 mb-6 text-black" strokeWidth={1.5} />
      <h3 className="text-xl font-bold mb-3">Start your journey.</h3>
      <p className="text-gray-500 text-sm mb-8 leading-relaxed">
        We help creative entrepreneurs build an honest brand & digital platform.
      </p>

      {isSubmitted ? (
        <div className="w-full py-8 text-green-700 bg-green-50 border border-green-100 rounded flex flex-col items-center">
          <Check className="w-8 h-8 mb-2" />
          <p className="font-bold">Welcome aboard.</p>
          <p className="text-xs mt-2">Check your inbox to confirm.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="First Name" 
            required
            className="w-full bg-[#f8f9fa] border-none px-4 py-4 text-center italic text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            required
            className="w-full bg-[#f8f9fa] border-none px-4 py-4 text-center italic text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
          />
          <div className="flex items-start gap-3 mt-2 mb-4 text-left">
            <input 
              type="checkbox" 
              id="terms" 
              required
              className="mt-1 cursor-pointer accent-black"
            />
            <label htmlFor="terms" className="text-xs text-gray-500 cursor-pointer">
              I accept the <a href="#" className="underline hover:text-black">terms of service</a> and <a href="#" className="underline hover:text-black">privacy policy</a>.
            </label>
          </div>
          <button 
            type="submit"
            className="w-full bg-black text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors"
          >
            Get Started Today
          </button>
        </form>
      )}
    </div>
  );
}

// --- FOOTER COMPONENT ---
function Footer({ navigate }) {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Footer Logo & Motto */}
          <div className="lg:col-span-3">
            <div className="flex flex-col items-start gap-4">
              <Mountain className="w-8 h-8 text-black" strokeWidth={1.5} />
              <span className="font-bold text-xs tracking-widest uppercase text-black">Create Honestly.</span>
            </div>
          </div>

          {/* Footer Main Content */}
          <div className="lg:col-span-9 flex flex-col">
            {/* Quote */}
            <div className="mb-16 max-w-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2 block">We Believe</span>
              <p className="text-xl md:text-2xl font-serif italic text-gray-800 leading-relaxed">
                "The key to building an authentic business is building an authentic life." <span className="text-gray-400 text-lg not-italic">— Brian Gardner</span>
              </p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h5 className="text-xs font-bold tracking-widest uppercase text-black mb-6">About</h5>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li><button onClick={() => navigate('home')} className="hover:text-black transition-colors">Start Here</button></li>
                  <li><button onClick={() => navigate('about')} className="hover:text-black transition-colors">Our Story</button></li>
                  <li><a href="#" className="hover:text-black transition-colors">Podcast</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Newsletter</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-bold tracking-widest uppercase text-black mb-6">Services</h5>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li><button onClick={() => navigate('services')} className="hover:text-black transition-colors">Consulting</button></li>
                  <li><a href="#" className="hover:text-black transition-colors">Brand Identity</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Web Design</a></li>
                  <li><button onClick={() => navigate('contact')} className="hover:text-black transition-colors">Get in Touch</button></li>
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-bold tracking-widest uppercase text-black mb-6">Resources</h5>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-black transition-colors">Themes</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Web Fonts</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Tutorials</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Daily Reads</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-bold tracking-widest uppercase text-black mb-6">Connect</h5>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-black transition-colors flex items-center gap-2"><Facebook className="w-4 h-4"/> Facebook</a></li>
                  <li><a href="#" className="hover:text-black transition-colors flex items-center gap-2"><Instagram className="w-4 h-4"/> Instagram</a></li>
                  <li><a href="#" className="hover:text-black transition-colors flex items-center gap-2"><Twitter className="w-4 h-4"/> Twitter</a></li>
                  <li><a href="#" className="hover:text-black transition-colors flex items-center gap-2"><Github className="w-4 h-4"/> GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-xs font-bold tracking-wider text-gray-400 uppercase gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} · All Rights Reserved</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
2
import React, { useState, useEffect } from 'react';
import { Play, Menu, X, ChevronRight, Monitor, ShieldAlert, ArrowLeft, Search, Bell } from 'lucide-react';

// --- MOCK DATA ---
const SERIES_DATA = {
  id: 'chernobyl',
  title: 'SILENT ZONE',
  description: 'The historical mini-series created by Craig Mazin. A terrifying deep dive into the exclusion zones, exploring the history, the aftermath, and the people left behind in the most dangerous places on Earth.',
  episodes: [
    {
      id: 1,
      num: '01',
      title: '1:23:45',
      subtitle: 'The Beginning',
      date: 'MAY 6, 2019',
      duration: '58m',
      // Using cinematic portraits/scenes to mimic the intense vibe
      heroImage: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200',
      thumbImage: 'https://images.unsplash.com/photo-1505528636545-28842e472288?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 2,
      num: '02',
      title: 'Please Remain Calm',
      subtitle: 'Evacuation',
      date: 'MAY 13, 2019',
      duration: '1h 5m',
      heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
      thumbImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 3,
      num: '03',
      title: 'Open Wide, O Earth',
      subtitle: 'The Miners',
      date: 'MAY 20, 2019',
      duration: '1h 2m',
      heroImage: 'https://images.unsplash.com/photo-1506509536862-28b76a084c8a?auto=format&fit=crop&q=80&w=1200',
      thumbImage: 'https://images.unsplash.com/photo-1506509536862-28b76a084c8a?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 4,
      num: '04',
      title: 'The Happiness of All Mankind',
      subtitle: 'Cleanup',
      date: 'MAY 27, 2019',
      duration: '1h 5m',
      heroImage: 'https://images.unsplash.com/photo-1473170611423-22489201d919?auto=format&fit=crop&q=80&w=1200',
      thumbImage: 'https://images.unsplash.com/photo-1473170611423-22489201d919?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 5,
      num: '05',
      title: 'Vichnaya Pamyat',
      subtitle: 'The Trial',
      date: 'JUNE 3, 2019',
      duration: '1h 12m',
      heroImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200',
      thumbImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=300'
    }
  ]
};

const EXPLORE_DATA = [
  { id: '1', title: 'DEEP SEA', category: 'NATURE', image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=600' },
  { id: '2', title: 'APOLLO', category: 'HISTORY', image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=600' },
  { id: '3', title: 'THE FALL', category: 'CRIME', image: 'https://images.unsplash.com/photo-1557053964-937650b63311?auto=format&fit=crop&q=80&w=600' },
  { id: '4', title: 'COLD WAR', category: 'HISTORY', image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=600' },
];

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'explore'
  const [activeEpisode, setActiveEpisode] = useState(SERIES_DATA.episodes[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [animateImg, setAnimateImg] = useState(false);

  // Trigger animation when episode changes
  useEffect(() => {
    setAnimateImg(true);
    const timer = setTimeout(() => setAnimateImg(false), 500);
    return () => clearTimeout(timer);
  }, [activeEpisode]);

  return (
    <div className="min-h-screen bg-[#9ba8a6] text-white font-sans overflow-hidden selection:bg-white/30">
      {/* Dynamic Background matching active episode */}
      <div 
        className="fixed inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out scale-105 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url(${activeEpisode.heroImage})` }}
      />
      
      {/* Main App Container */}
      <div className="relative min-h-screen flex items-center justify-center p-4 lg:p-8">
        
        {currentView === 'home' ? (
          <div className="relative w-full max-w-[1400px] h-[800px] lg:h-[700px] flex items-center">
            
            {/* The Overlapping Play Button (Positioned outside the card on desktop) */}
            <button 
              onClick={() => setIsVideoPlaying(true)}
              className="absolute z-50 left-0 lg:-left-10 top-1/2 -translate-y-1/2 w-20 h-20 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(0,0,0,0.5)] group hidden lg:flex"
            >
              <Play className="w-8 h-8 text-white fill-white group-hover:text-gray-300 transition-colors ml-1" />
            </button>

            {/* THE GLASS CARD */}
            <div className="relative w-full h-full rounded-3xl shadow-2xl flex flex-col lg:flex-row">
              
              {/* Card Background Container (Overflow hidden for rings) */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-r from-white/20 via-black/40 to-[#1a1c1e] backdrop-blur-md border border-white/10">
                {/* Concentric Rings Pattern */}
                <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
                  <div className="absolute inset-0 border-[2px] border-white rounded-full"></div>
                  <div className="absolute inset-8 border-[1px] border-white rounded-full"></div>
                  <div className="absolute inset-16 border-[1px] border-white rounded-full"></div>
                  <div className="absolute inset-32 border-[1px] border-white rounded-full"></div>
                  <div className="absolute inset-48 border-[1px] border-white rounded-full"></div>
                </div>
              </div>

              {/* LEFT CONTENT AREA */}
              <div className="relative z-20 flex-1 p-8 lg:p-16 flex flex-col justify-between">
                
                {/* Header / Logo Area */}
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-black tracking-tighter">ECHOES</span>
                  <div className="w-2 h-2 rounded-full bg-white/50 mt-1"></div>
                </div>

                {/* Main Text Content */}
                <div className="max-w-md mt-auto lg:mb-12">
                  <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tight mb-6 text-white drop-shadow-lg">
                    {SERIES_DATA.title}
                  </h1>
                  <p className="text-sm lg:text-base text-gray-300 leading-relaxed font-light mb-8 lg:mb-0">
                    {SERIES_DATA.description}
                  </p>
                  
                  {/* Mobile Play Button */}
                  <button 
                    onClick={() => setIsVideoPlaying(true)}
                    className="lg:hidden flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-full mb-8 hover:bg-gray-900 transition-colors"
                  >
                    <Play className="w-5 h-5 fill-white" />
                    <span className="font-semibold tracking-wide uppercase text-sm">Watch Episode</span>
                  </button>
                </div>

                {/* Bottom Left Date/Number indicator */}
                <div className="flex items-end space-x-4">
                  <span className="text-6xl lg:text-8xl font-bold leading-none tracking-tighter opacity-80">
                    {activeEpisode.num}
                  </span>
                  <div className="flex items-center space-x-2 mb-2 lg:mb-4 text-sm font-semibold tracking-widest uppercase cursor-pointer hover:text-gray-300 transition-colors group">
                    <span>{activeEpisode.date}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* CENTER "BREAK-OUT" IMAGE */}
              <div className="absolute left-[50%] -translate-x-1/2 top-[-5%] bottom-[-5%] w-full lg:w-[45%] z-30 pointer-events-none hidden lg:block">
                <img 
                  src={activeEpisode.heroImage} 
                  alt="Hero" 
                  className={`w-full h-full object-cover object-center rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/5 transition-all duration-700 ${animateImg ? 'scale-95 opacity-80 blur-sm' : 'scale-100 opacity-100 blur-0'}`}
                />
                {/* Gradient overlay to blend the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
              </div>

              {/* RIGHT SIDEBAR (Navigation & Episodes) */}
              <div className="relative z-20 w-full lg:w-[400px] p-8 flex flex-col">
                
                {/* Top Right Controls */}
                <div className="flex justify-end items-center space-x-4 mb-12">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 border border-white/30 rounded text-xs font-semibold tracking-wider text-white/70">HD</span>
                    <span className="px-2 py-1 border border-white/30 rounded text-xs font-semibold tracking-wider text-white/70">18+</span>
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(true)}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
                  >
                    <Menu className="w-5 h-5" />
                  </button>
                </div>

                {/* Episodes List */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-1 scrollbar-hide flex flex-col justify-center">
                  {SERIES_DATA.episodes.map((ep) => (
                    <button
                      key={ep.id}
                      onClick={() => setActiveEpisode(ep)}
                      className={`w-full text-left group flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 ${
                        activeEpisode.id === ep.id 
                          ? 'bg-white/10 shadow-lg scale-105' 
                          : 'hover:bg-white/5 opacity-60 hover:opacity-100'
                      }`}
                    >
                      {/* Episode Meta */}
                      <div className="flex-1 flex flex-col items-end justify-center pr-4">
                         <span className={`text-xl font-bold tracking-tighter ${activeEpisode.id === ep.id ? 'text-white' : 'text-gray-400'}`}>
                           {ep.num}
                         </span>
                         <span className="text-xs text-gray-400 mt-1">{ep.duration}</span>
                      </div>
                      
                      {/* Text & Thumbnail */}
                      <div className="w-[180px] flex flex-col items-end text-right">
                        <span className="text-sm font-semibold truncate w-full">{ep.title}</span>
                        <span className="text-xs text-gray-400 truncate w-full">{ep.subtitle}</span>
                      </div>
                      
                      {/* Thumbnail */}
                      <div className="relative w-20 h-14 rounded overflow-hidden flex-shrink-0 border border-white/10">
                        <img 
                          src={ep.thumbImage} 
                          alt={ep.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Play Overlay on hover */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

              </div>

            </div>
          </div>
        ) : (
          /* EXPLORE VIEW */
          <div className="w-full max-w-7xl h-[80vh] flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <button 
                onClick={() => setCurrentView('home')}
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-semibold uppercase tracking-widest text-sm">Back to Home</span>
              </button>
              <h2 className="text-3xl font-black tracking-widest">EXPLORE LIBRARY</h2>
              <button onClick={() => setIsMenuOpen(true)} className="p-2 bg-white/10 rounded hover:bg-white/20">
                <Menu className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {EXPLORE_DATA.map((item) => (
                <div key={item.id} className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-xs font-bold text-[#8ea09b] tracking-widest mb-2 block">{item.category}</span>
                    <h3 className="text-2xl font-black text-white">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FULL SCREEN NAVIGATION MENU */}
      <div className={`fixed inset-0 bg-[#121415] z-[100] transition-transform duration-500 ease-in-out flex flex-col ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="p-8 flex justify-between items-center border-b border-white/10">
           <span className="text-2xl font-black tracking-tighter text-white">ECHOES</span>
           <button 
             onClick={() => setIsMenuOpen(false)}
             className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors"
           >
             <X className="w-6 h-6 text-white" />
           </button>
        </div>
        
        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col justify-center px-12 lg:px-32 space-y-8">
            {['Home', 'Series', 'Movies', 'My List'].map((item) => (
              <button 
                key={item}
                onClick={() => {
                  setCurrentView(item === 'Home' ? 'home' : 'explore');
                  setIsMenuOpen(false);
                }}
                className="text-4xl lg:text-7xl font-black text-left text-white/50 hover:text-white transition-colors uppercase tracking-tight flex items-center group"
              >
                <span className="group-hover:translate-x-4 transition-transform">{item}</span>
              </button>
            ))}
          </div>
          <div className="w-full lg:w-1/3 bg-black/40 p-12 flex flex-col justify-between border-l border-white/5">
             <div className="space-y-6 text-white/60 text-lg">
               <p className="hover:text-white cursor-pointer transition-colors">Settings</p>
               <p className="hover:text-white cursor-pointer transition-colors">Account</p>
               <p className="hover:text-white cursor-pointer transition-colors">Help Center</p>
             </div>
             <div className="flex space-x-6">
                <Search className="w-6 h-6 text-white/60 hover:text-white cursor-pointer" />
                <Bell className="w-6 h-6 text-white/60 hover:text-white cursor-pointer" />
             </div>
          </div>
        </div>
      </div>

      {/* VIDEO PLAYER MODAL */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center animate-in fade-in duration-300">
          <button 
            onClick={() => setIsVideoPlaying(false)}
            className="absolute top-8 right-8 text-white/50 hover:text-white z-[210] transition-colors"
          >
            <X className="w-10 h-10" />
          </button>
          
          <div className="relative w-full max-w-6xl aspect-video bg-[#111] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center group">
            {/* Fake Video Player UI */}
            <img 
              src={activeEpisode.heroImage} 
              alt="Video" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            
            <div className="z-10 flex flex-col items-center animate-pulse">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md mb-4">
                 <Play className="w-10 h-10 text-white fill-white ml-2" />
              </div>
              <p className="text-white font-bold tracking-widest text-sm uppercase">Loading Stream...</p>
            </div>

            {/* Fake progress bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex justify-between text-xs font-semibold mb-2">
                 <span>0:00</span>
                 <span>{activeEpisode.duration}</span>
              </div>
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-red-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom styles to hide scrollbar for the sleek look */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
3
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
import React, { useState, useEffect } from 'react';
import { ArrowDownCircle, Search, Menu, ChevronLeft, ChevronRight, ArrowRight, X } from 'lucide-react';

// --- DATA ---
const HERO_SLIDES = [
  {
    id: 1,
    title: "Minimalis",
    subtitle: "— simo",
    description: "We aim to deliver a <span class='underline decoration-gray-500 underline-offset-4'>diverse understanding of minimalism</span> in many areas.",
    image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 2,
    title: "Brutalism",
    subtitle: "— form",
    description: "Exploring the raw, unpolished beauty of <span class='underline decoration-gray-500 underline-offset-4'>architectural monoliths</span> and spaces.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 3,
    title: "Shadows",
    subtitle: "— depth",
    description: "The interplay of light and absence, creating a <span class='underline decoration-gray-500 underline-offset-4'>profound narrative</span> in fashion.",
    image: "https://images.unsplash.com/photo-1542272201-b1ca555f8505?auto=format&fit=crop&q=80&w=1600",
  }
];

const ARTICLES = [
  { title: "The Void Collection", category: "Fashion", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" },
  { title: "Concrete Dreams", category: "Architecture", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
  { title: "Monochrome Reality", category: "Art", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
  { title: "Silent Spaces", category: "Interior", img: "https://images.unsplash.com/photo-1600607687920-4e2a09c26f07?auto=format&fit=crop&q=80&w=800" }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  // --- COMPONENTS ---

  const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-12 flex justify-between items-center mix-blend-difference text-white">
      <div 
        className="text-xl font-light tracking-widest cursor-pointer hover:text-[#cda270] transition-colors"
        onClick={() => setCurrentPage('home')}
      >
        1/
      </div>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-[0.2em] font-light text-gray-300">
        {['About', 'Sponsors', 'Magazine', 'Contact'].map((item) => (
          <button 
            key={item} 
            onClick={() => setCurrentPage(item.toLowerCase())}
            className={`hover:text-white transition-colors ${currentPage === item.toLowerCase() ? 'text-white border-b border-[#cda270] pb-1' : ''}`}
          >
            {item}
          </button>
        ))}
        <div className="flex gap-6 items-center ml-8">
          <button className="hover:text-white"><Search size={18} strokeWidth={1.5} /></button>
          <button className="hover:text-white"><Menu size={20} strokeWidth={1.5} /></button>
        </div>
      </div>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden flex gap-4">
        <button onClick={() => setIsMenuOpen(true)} className="hover:text-[#cda270]"><Menu size={24} strokeWidth={1.5} /></button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#121212] z-50 flex flex-col p-8">
          <div className="flex justify-between items-center mb-16">
            <div className="text-xl font-light tracking-widest">1/</div>
            <button onClick={() => setIsMenuOpen(false)}><X size={32} strokeWidth={1} /></button>
          </div>
          <div className="flex flex-col gap-8 text-2xl font-light tracking-widest">
            {['Home', 'About', 'Sponsors', 'Magazine', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => {
                  setCurrentPage(item.toLowerCase() === 'home' ? 'home' : item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => {
    const slide = HERO_SLIDES[currentSlide];
    
    return (
      <section className="relative h-screen w-full overflow-hidden bg-[#151515]">
        {/* Vertical Left Socials */}
        <div className="hidden md:flex absolute left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left gap-12 text-[10px] uppercase tracking-[0.3em] font-light text-gray-500 z-20 w-64 items-center justify-start">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>

        {/* Vertical Right Pagination */}
        <div className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-8 text-[10px] tracking-[0.2em] font-light text-gray-500 z-20 items-center">
          <span className="text-white">0{currentSlide + 1}</span>
          <div className="w-px h-16 bg-gray-700"></div>
          <span>0{HERO_SLIDES.length}</span>
        </div>

        {/* Main Content Area */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start">
          
          {/* Image Container */}
          <div className="absolute w-full md:w-[55%] h-[60vh] md:h-[80vh] md:left-[15%] top-1/2 -translate-y-1/2 opacity-40 md:opacity-100 transition-opacity duration-1000">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover object-center grayscale-[0.8] contrast-125 brightness-75 transition-all duration-1000"
            />
            {/* Vignette overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#151515] via-transparent to-[#151515] md:from-transparent md:via-transparent md:to-[#151515]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-[#151515]"></div>
          </div>

          {/* Hollow Gold Rectangle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-[90%] -translate-y-1/2 w-16 md:w-20 h-48 md:h-[22rem] border-[3px] border-[#cda270] z-20 mix-blend-overlay opacity-80 pointer-events-none"></div>

          {/* Typography */}
          <div className="relative z-30 ml-8 md:ml-[45%] flex flex-col justify-center">
            <h1 className="text-6xl md:text-[5.5rem] font-extralight text-gray-100 leading-tight tracking-wide mix-blend-difference">
              {slide.title} <br />
              <span className="text-5xl md:text-[4.5rem]">{slide.subtitle}</span>
            </h1>
            <p 
              className="mt-8 text-xs md:text-sm text-gray-400 max-w-xs md:max-w-sm leading-relaxed font-light tracking-wide"
              dangerouslySetInnerHTML={{ __html: slide.description }}
            ></p>
          </div>
        </div>

        {/* Bottom Left Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-16 left-8 md:left-12 z-20">
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="text-gray-500 hover:text-white transition-colors"
          >
            <ArrowDownCircle size={32} strokeWidth={1} />
          </button>
        </div>

        {/* Bottom Right Info & Controls */}
        <div className="absolute bottom-8 md:bottom-16 left-8 md:left-[45%] flex flex-col md:flex-row gap-8 md:gap-24 z-20">
          <div className="flex flex-col gap-2">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-300 font-semibold">Office</h3>
            <p className="text-[10px] text-gray-500 tracking-wider">Sandekra 240<br/>1396 Billingstad</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-300 font-semibold">Get in touch</h3>
            <p className="text-[10px] text-gray-500 tracking-wider">T. +0085 3456 2188<br/>E. info@baygulov.com</p>
          </div>
          
          {/* Slider Controls */}
          <div className="absolute right-8 md:right-auto md:relative flex gap-4 items-end pb-1">
            <button onClick={prevSlide} className="text-gray-500 hover:text-white transition-colors"><ChevronLeft size={20} strokeWidth={1.5}/></button>
            <button onClick={nextSlide} className="text-gray-500 hover:text-white transition-colors"><ChevronRight size={20} strokeWidth={1.5}/></button>
          </div>
        </div>
      </section>
    );
  };

  const EditorialSection = () => (
    <section className="w-full bg-[#121212] py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-gray-800 pb-8">
          <h2 className="text-3xl md:text-5xl font-extralight tracking-wider text-gray-200">Latest <br/> <span className="text-gray-500">Editorials</span></h2>
          <button className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#cda270] hover:text-white transition-colors">
            View All <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {ARTICLES.slice(0, 2).map((article, idx) => (
            <div key={idx} className={`group cursor-pointer ${idx === 1 ? 'md:mt-32' : ''}`}>
              <div className="overflow-hidden relative h-[500px] mb-6">
                <div className="absolute inset-0 bg-[#121212] opacity-20 group-hover:opacity-0 transition-opacity z-10"></div>
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">{article.category}</p>
              <h3 className="text-2xl font-light text-gray-200 group-hover:text-[#cda270] transition-colors">{article.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // --- PAGES ---

  const HomePage = () => (
    <div className="animate-fade-in">
      <Hero />
      <EditorialSection />
    </div>
  );

  const MagazinePage = () => (
    <div className="min-h-screen pt-40 px-6 md:px-24 bg-[#151515] animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extralight mb-4 text-gray-100">Archive</h1>
        <p className="text-sm text-gray-500 tracking-widest font-light mb-24 max-w-md">
          A curated selection of thoughts, visual essays, and design studies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-32">
          {ARTICLES.map((article, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden relative h-[400px] mb-6 border border-gray-800">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#cda270] mb-2">{article.category}</p>
                  <h3 className="text-xl font-light text-gray-200">{article.title}</h3>
                </div>
                <ArrowRight size={18} className="text-gray-600 group-hover:text-white transition-colors -rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen pt-40 px-6 md:px-24 bg-[#121212] flex items-center animate-fade-in">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h1 className="text-5xl md:text-7xl font-extralight mb-8 text-gray-100">Let's <br/><span className="text-gray-600">Connect</span></h1>
          <p className="text-sm text-gray-400 tracking-wide font-light mb-16 max-w-md leading-relaxed">
            Whether you have a project in mind, an editorial pitch, or simply wish to discuss the nuances of brutalist design, we are here.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">General Inquiries</h3>
              <p className="text-sm text-gray-300 font-light tracking-wide hover:text-[#cda270] cursor-pointer">info@minimalis-simo.com</p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">Headquarters</h3>
              <p className="text-sm text-gray-300 font-light tracking-wide">Sandekra 240, 1396 Billingstad<br/>Oslo, Norway</p>
            </div>
          </div>
        </div>

        <form className="space-y-12 mt-12 md:mt-0" onSubmit={(e) => e.preventDefault()}>
          <div className="relative border-b border-gray-700 pb-2">
            <input type="text" placeholder="YOUR NAME" className="w-full bg-transparent text-sm font-light tracking-widest text-white placeholder-gray-600 focus:outline-none" />
          </div>
          <div className="relative border-b border-gray-700 pb-2">
            <input type="email" placeholder="YOUR EMAIL" className="w-full bg-transparent text-sm font-light tracking-widest text-white placeholder-gray-600 focus:outline-none" />
          </div>
          <div className="relative border-b border-gray-700 pb-2">
            <textarea placeholder="MESSAGE" rows="4" className="w-full bg-transparent text-sm font-light tracking-widest text-white placeholder-gray-600 focus:outline-none resize-none"></textarea>
          </div>
          <button className="text-xs uppercase tracking-[0.3em] text-[#cda270] border border-[#cda270] py-4 px-12 hover:bg-[#cda270] hover:text-black transition-all duration-300">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-[#0a0a0a] py-12 px-6 md:px-24 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-gray-600">
      <p>© 2024 Minimalis Simo.</p>
      <div className="flex gap-8 mt-6 md:mt-0">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <a href="#" className="hover:text-white transition-colors">Imprint</a>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-[#121212] text-gray-300 font-sans selection:bg-[#cda270] selection:text-black">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}} />
      
      <Navbar />
      
      <main>
        {currentPage === 'home' && <HomePage />}
        {(currentPage === 'magazine' || currentPage === 'about' || currentPage === 'sponsors') && <MagazinePage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {currentPage !== 'home' && <Footer />}
    </div>
  );
}
5
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowDown, ArrowRight, Dribbble, Instagram, Twitter, MousePointer2 } from 'lucide-react';

// --- API Configuration for Image Generation ---
const apiKey = ""; // Provided by execution environment

const generateImage = async (prompt) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`;
  const payload = {
    instances: { prompt: prompt },
    parameters: { sampleCount: 1 }
  };

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const retries = [1000, 2000, 4000, 8000, 16000];

  for (let i = 0; i < retries.length; i++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const result = await response.json();
      if (result.predictions && result.predictions[0]) {
        return `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
      }
    } catch (error) {
      if (i === retries.length - 1) throw error;
      await delay(retries[i]);
    }
  }
  return null;
};

// --- Custom Cursor Component ---
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const updateHoverState = (e) => {
      const target = e.target;
      setIsHovering(target.tagName.toLowerCase() === 'button' || 
                    target.tagName.toLowerCase() === 'a' || 
                    target.closest('button') || 
                    target.closest('a') ||
                    target.classList.contains('clickable'));
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out hidden md:block mix-blend-difference"
        style={{ left: `${position.x}px`, top: `${position.y}px`, transform: `translate(-50%, -50%) scale(${isHovering ? 3 : 1})` }}
      />
    </>
  );
};

// --- Navigation Overlay Component ---
const MenuOverlay = ({ isOpen, closeMenu, navigate }) => {
  return (
    <div className={`fixed inset-0 bg-[#111] text-[#EBD535] z-50 flex flex-col justify-center px-12 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <button onClick={closeMenu} className="absolute top-12 right-12 text-[#EBD535] hover:rotate-90 transition-transform duration-300">
        <X size={48} strokeWidth={1} />
      </button>
      
      <nav className="flex flex-col space-y-6 text-5xl md:text-8xl font-black uppercase tracking-tighter">
        {['Home', 'Portfolio', 'Contact'].map((item) => (
          <button 
            key={item} 
            onClick={() => navigate(item.toLowerCase())}
            className="text-left hover:translate-x-8 transition-transform duration-300 w-max hover:text-white"
          >
            {item}
          </button>
        ))}
      </nav>
      
      <div className="absolute bottom-12 left-12 flex space-x-8 text-sm tracking-widest font-bold">
        <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
        <a href="#" className="hover:text-white transition-colors">DRIBBBLE</a>
        <a href="#" className="hover:text-white transition-colors">BEHANCE</a>
      </div>
    </div>
  );
};

// --- Page: Home ---
const HomePage = ({ navigate }) => {
  const [heroImage, setHeroImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchImage = async () => {
      try {
        const prompt = "A highly detailed, ultra-realistic 3D render of a solid glossy black banana melting and dripping fluid. It is placed perfectly in the center against a completely solid, vibrant bright yellow (#EBD535) background. Minimalist modern art aesthetic, studio lighting, sharp focus.";
        const imgUrl = await generateImage(prompt);
        if (isMounted && imgUrl) {
          setHeroImage(imgUrl);
        }
      } catch (error) {
        console.error("Failed to generate image", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchImage();
    return () => { isMounted = false; };
  }, []);

  const scrollToWork = () => {
    document.getElementById('featured-work').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero Section (Matches Inspiration) */}
      <section className="relative w-full h-screen bg-[#EBD535] text-[#111] overflow-hidden flex flex-col justify-between p-6 md:p-12">
        {/* Top Header */}
        <header className="flex justify-between items-center z-10 w-full relative">
          <div className="w-12 h-12 flex items-center justify-start opacity-0"></div> {/* Spacer for balance */}
          <h1 className="font-bold tracking-[0.2em] text-sm md:text-base uppercase absolute left-1/2 transform -translate-x-1/2">
            Web-Design Studio
          </h1>
          <button className="flex flex-col gap-1.5 w-8 items-end clickable group">
            <span className="w-full h-0.5 bg-[#111] group-hover:w-1/2 transition-all"></span>
            <span className="w-3/4 h-0.5 bg-[#111] group-hover:w-full transition-all"></span>
            <span className="w-full h-0.5 bg-[#111] group-hover:w-3/4 transition-all"></span>
          </button>
        </header>

        {/* Center Canvas */}
        <div className="absolute inset-0 flex justify-between items-center px-6 md:px-12 pointer-events-none">
          {/* Left Vertical Text */}
          <div className="flex text-lg md:text-2xl font-black leading-[0.8] tracking-tighter">
            <div className="flex flex-col mr-2">
              <span>B</span><span>N</span><span>A</span><span>Z</span>
            </div>
            <div className="flex flex-col mt-4">
              <span>A</span><span>A</span><span>N</span><span>Z</span>
            </div>
          </div>

          {/* Central 3D Asset */}
          <div className="relative w-full max-w-2xl lg:max-w-4xl flex justify-center items-center pointer-events-auto z-0 mix-blend-multiply">
            {isLoading ? (
              <div className="w-full aspect-video flex flex-col items-center justify-center space-y-4">
                <div className="w-64 h-64 border-4 border-[#111] border-t-transparent rounded-full animate-spin"></div>
                <p className="font-bold tracking-widest text-sm animate-pulse">RENDERING 3D ASSET...</p>
              </div>
            ) : heroImage ? (
              <img src={heroImage} alt="Melting Black Banana" className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700 ease-out drop-shadow-2xl" />
            ) : (
              /* Fallback SVG if API fails */
              <svg viewBox="0 0 200 100" className="w-full h-auto max-w-lg fill-black drop-shadow-2xl">
                <path d="M10,80 C30,90 80,95 100,95 C140,95 180,70 190,30 C195,10 185,5 180,10 C170,20 160,35 150,45 C130,65 100,75 70,70 C40,65 20,40 15,20 C10,0 0,5 5,20 C8,40 5,60 10,80 Z" />
                <circle cx="80" cy="98" r="3" />
                <circle cx="120" cy="97" r="4" />
                <circle cx="60" cy="96" r="2" />
              </svg>
            )}
          </div>

          {/* Right Pagination / Decor */}
          <div className="flex flex-col gap-4 items-center">
            <span className="text-xs font-bold">1</span>
            <span className="text-xs font-bold">-</span>
            <div className="w-1.5 h-1.5 rounded-full border-2 border-[#111]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
          </div>
        </div>

        {/* Bottom Footer Area */}
        <footer className="flex justify-between items-end z-10 w-full">
          <div className="flex gap-4">
            <a href="#" className="clickable hover:-translate-y-1 transition-transform"><span className="font-bold text-lg">Bē</span></a>
            <a href="#" className="clickable hover:-translate-y-1 transition-transform"><span className="font-bold text-lg">♥</span></a>
          </div>
          
          <button onClick={scrollToWork} className="flex flex-col items-center clickable group absolute left-1/2 transform -translate-x-1/2 bottom-6 md:bottom-12">
            <div className="w-6 h-10 border-2 border-[#111] rounded-full flex justify-center p-1 group-hover:bg-[#111] transition-colors">
              <div className="w-1 h-2 bg-[#111] rounded-full group-hover:bg-[#EBD535] animate-bounce"></div>
            </div>
            <span className="text-[10px] font-bold tracking-[0.3em] mt-4 uppercase group-hover:font-black transition-all">View Portfolio</span>
          </button>

          <div className="w-8 h-8">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#111] transform -rotate-45">
                <path d="M4 13c3.5-2 8-2 10 2a9.5 9.5 0 0 1 8-11c-2.5 4-1 9-3 12-4 5-11 5-15 0-1.5-2-1.5-3 0-3z"/>
             </svg>
          </div>
        </footer>
      </section>

      {/* Services Section */}
      <section className="bg-[#111] text-[#EBD535] py-24 md:py-48 px-6 md:px-12 border-t-[16px] border-[#111]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none flex-1">
            We Peel <br/><span className="text-white">Back The</span> <br/>Ordinary.
          </h2>
          <div className="flex-1 max-w-lg mt-4 md:mt-0">
            <p className="text-lg md:text-xl font-medium mb-12 opacity-80 leading-relaxed">
              Bananz is a premier digital design studio focused on creating unconventional, high-impact web experiences. We blend bold aesthetics with flawless engineering.
            </p>
            <div className="flex flex-col gap-6">
              {['Creative Direction', 'Web Development', '3D Motion Design', 'Brand Identity'].map((service, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-[#EBD535]/30 pb-4 group cursor-pointer hover:border-[#EBD535] transition-colors">
                  <span className="text-2xl font-bold uppercase">{service}</span>
                  <ArrowRight className="transform -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section id="featured-work" className="bg-[#EBD535] text-[#111] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Selected <br/>Works</h2>
            <button onClick={() => navigate('portfolio')} className="text-sm font-bold tracking-widest uppercase border-b-2 border-[#111] pb-1 hover:pr-4 transition-all">
              See All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Project 1 */}
            <div className="group cursor-pointer clickable">
              <div className="aspect-[4/5] bg-[#111] overflow-hidden mb-6 relative flex items-center justify-center">
                 <div className="w-3/4 h-3/4 bg-[#EBD535] rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-700"></div>
                 <div className="absolute inset-0 flex items-center justify-center mix-blend-difference">
                    <span className="text-[#EBD535] text-9xl font-black tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110 transform">01</span>
                 </div>
              </div>
              <h3 className="text-2xl font-black uppercase">Acid Drops</h3>
              <p className="text-sm font-bold opacity-60 tracking-widest mt-1">E-COMMERCE / 3D</p>
            </div>
            
            {/* Project 2 */}
            <div className="group cursor-pointer clickable md:mt-24">
              <div className="aspect-[4/5] bg-white overflow-hidden mb-6 relative flex items-center justify-center border-4 border-[#111]">
                 <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#111_10px,#111_20px)] opacity-10 group-hover:scale-150 transition-transform duration-1000 ease-in-out"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#111] text-9xl font-black tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity duration-500">02</span>
                 </div>
              </div>
              <h3 className="text-2xl font-black uppercase">Neo Brutal</h3>
              <p className="text-sm font-bold opacity-60 tracking-widest mt-1">AGENCY PORTFOLIO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Page: Portfolio ---
const PortfolioPage = () => {
  const projects = [
    { title: 'Acid Drops', type: 'E-COMMERCE', color: 'bg-[#111]' },
    { title: 'Neo Brutal', type: 'PORTFOLIO', color: 'bg-white border-4 border-[#111]' },
    { title: 'Cyber Pulse', type: 'WEB APP', color: 'bg-blue-600' },
    { title: 'Void Sync', type: '3D EXPERIENCE', color: 'bg-zinc-900' },
  ];

  return (
    <div className="min-h-screen bg-[#111] text-[#EBD535] pt-32 pb-24 px-6 md:px-12 w-full animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 md:mb-24 leading-none">
          Our <br/><span className="text-white">Archive.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 md:gap-x-16">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer clickable">
              <div className={`aspect-video ${p.color} overflow-hidden mb-6 relative flex items-center justify-center group-hover:rounded-3xl transition-all duration-500`}>
                 <span className={`text-6xl font-black tracking-tighter opacity-20 mix-blend-difference group-hover:scale-150 transition-transform duration-700 ${p.color === 'bg-white border-4 border-[#111]' ? 'text-black' : 'text-white'}`}>
                    0{i+1}
                 </span>
              </div>
              <div className="flex justify-between items-end">
                <h3 className="text-3xl font-black uppercase text-white">{p.title}</h3>
                <p className="text-sm font-bold tracking-widest">{p.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Page: Contact ---
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#EBD535] text-[#111] pt-32 pb-24 px-6 md:px-12 w-full animate-in fade-in duration-700 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-16 leading-none">
          Let's <br/>Talk.
        </h1>
        
        <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <label className="text-sm font-bold tracking-widest uppercase mb-4 block">Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b-4 border-[#111] py-4 text-2xl font-bold focus:outline-none placeholder:text-[#111]/30 focus:border-white transition-colors" />
            </div>
            <div className="flex-1">
              <label className="text-sm font-bold tracking-widest uppercase mb-4 block">Email</label>
              <input type="email" placeholder="hello@example.com" className="w-full bg-transparent border-b-4 border-[#111] py-4 text-2xl font-bold focus:outline-none placeholder:text-[#111]/30 focus:border-white transition-colors" />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-bold tracking-widest uppercase mb-4 block">Project Details</label>
            <textarea rows="4" placeholder="Tell us about your idea..." className="w-full bg-transparent border-b-4 border-[#111] py-4 text-2xl font-bold focus:outline-none placeholder:text-[#111]/30 focus:border-white transition-colors resize-none"></textarea>
          </div>
          
          <button className="bg-[#111] text-[#EBD535] py-6 px-12 text-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#111] transition-colors self-start clickable">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Inject Custom Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const navigate = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#EBD535] font-['Inter',sans-serif] selection:bg-[#111] selection:text-[#EBD535] overflow-x-hidden">
      {/* Global Typography Overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        h1, h2, h3, .font-black { font-family: 'Syne', sans-serif; }
        body { cursor: none; }
        a, button, input, textarea { cursor: none; }
      `}} />

      <CustomCursor />
      
      {/* Persistent Global Header Menu Toggle */}
      <button 
        onClick={() => setMenuOpen(true)}
        className="fixed top-6 left-6 md:top-12 md:left-12 z-40 text-[#111] mix-blend-difference clickable hover:scale-110 transition-transform"
      >
        <Menu size={32} strokeWidth={2.5} color={menuOpen ? 'transparent' : '#111'} />
      </button>

      <MenuOverlay isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} navigate={navigate} />

      {/* Main Content Router */}
      <main className="w-full">
        {activePage === 'home' && <HomePage navigate={navigate} />}
        {activePage === 'portfolio' && <PortfolioPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer (Visible on all pages except Hero top section) */}
      {activePage !== 'home' && (
        <footer className="bg-[#111] text-[#EBD535] py-12 px-6 md:px-12 border-t border-[#EBD535]/20 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="font-black text-2xl tracking-tighter uppercase">Bananz Studio</div>
           <div className="flex gap-8 text-sm font-bold tracking-widest">
              <a href="#" className="hover:text-white transition-colors clickable">IN</a>
              <a href="#" className="hover:text-white transition-colors clickable">BE</a>
              <a href="#" className="hover:text-white transition-colors clickable">DR</a>
           </div>
           <div className="text-xs font-bold opacity-50 uppercase tracking-widest">
             © 2026 All Rights Reserved
           </div>
        </footer>
      )}
    </div>
  );
}
6
import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, X, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll detection for Navbar and Active Section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'projects', 'contact'];
      let current = 'hero';

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section is in the top half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#e0e0e0] font-sans selection:bg-white selection:text-black overflow-hidden relative">
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#141414]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex flex-col font-black text-2xl leading-[0.85] tracking-tighter cursor-pointer hover:text-white transition-colors"
            onClick={() => scrollTo('hero')}
          >
            <span>TU</span>
            <span>RA</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12 text-xs font-semibold tracking-[0.2em]">
            <button 
              onClick={() => scrollTo('projects')}
              className={`hover:text-white transition-colors ${activeSection === 'projects' ? 'text-white' : 'text-gray-500'}`}
            >
              PROJECTS
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className={`hover:text-white transition-colors ${activeSection === 'contact' ? 'text-white' : 'text-gray-500'}`}
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {/* Fixed Side Elements (Hidden on Mobile) */}
      <div className="hidden lg:flex fixed left-12 bottom-12 flex-col space-y-6 text-gray-500 z-40">
        <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
        <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
        <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
      </div>

      <div className="hidden lg:flex fixed right-12 bottom-32 transform rotate-90 origin-right items-center space-x-4 text-xs tracking-[0.3em] text-gray-500 z-40">
        <span>SCROLL</span>
        <div className="w-16 h-[1px] bg-gray-500"></div>
      </div>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-12 bg-[#0a0a0a] text-center border-t border-white/5">
        <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-2 uppercase">The End</p>
        <h3 className="text-xl font-bold tracking-widest text-white mb-2">THANKS FOR WATCHING!</h3>
        <p className="text-[10px] tracking-widest text-gray-600">PRESS THUMBS UP</p>
      </footer>
    </div>
  );
}

// --- SECTIONS ---

function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center z-10 relative">
        <p className="text-xs tracking-[0.3em] text-gray-400 mb-6 uppercase">I am</p>
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
          TURA
        </h1>
        <p className="text-xs md:text-sm tracking-[0.4em] text-gray-400 uppercase">
          A Junior <br className="md:hidden" />Web Designer
        </p>
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,rgba(0,0,0,0)_50%)] pointer-events-none"></div>
      <div className="absolute left-6 bottom-12 text-[10px] text-gray-600 tracking-widest font-mono">.01</div>
    </section>
  );
}

function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center relative px-6 py-24 bg-[#111111]">
      <div className="absolute left-6 bottom-12 text-[10px] text-gray-600 tracking-widest font-mono">.02</div>
      
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        
        {/* Layered Project Composition */}
        <div className="relative w-full max-w-4xl flex justify-center items-center h-[50vh] md:h-[60vh] mb-12">
          
          {/* Left Context Card */}
          <div className="hidden md:block absolute left-0 w-1/3 h-2/3 bg-[#0a0a0a] rounded border border-white/5 shadow-2xl opacity-80 transform -translate-x-8 -rotate-2 z-0 overflow-hidden">
             <div className="p-6">
                <div className="w-8 h-8 bg-white/10 rounded-full mb-4"></div>
                <div className="w-3/4 h-2 bg-white/10 rounded mb-2"></div>
                <div className="w-1/2 h-2 bg-white/10 rounded"></div>
             </div>
             <img 
               src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400" 
               alt="UI Context" 
               className="w-full h-full object-cover opacity-30 mix-blend-overlay"
             />
          </div>

          {/* Right Context Card (Blurred/Focus) */}
          <div className="hidden md:block absolute right-0 w-1/3 h-2/3 bg-white/5 backdrop-blur-sm rounded shadow-2xl transform translate-x-8 rotate-2 z-0 overflow-hidden border border-white/10">
             <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
               <h4 className="text-white font-bold tracking-widest mb-4">Welcome to</h4>
               <div className="w-24 h-10 border border-white/20 rounded-full flex items-center justify-center text-xs tracking-widest text-white/50 backdrop-blur-md">Log In</div>
             </div>
             <img 
               src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400" 
               alt="UI Context" 
               className="w-full h-full object-cover blur-sm opacity-50"
             />
          </div>

          {/* Main Center Card */}
          <div className="relative w-full md:w-1/2 h-full bg-[#1a1a1a] rounded shadow-2xl z-10 overflow-hidden border border-white/10 group cursor-pointer" onClick={() => setModalOpen(true)}>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" 
              alt="Keet Cafe" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
              <p className="text-[10px] tracking-[0.3em] text-gray-300 uppercase mb-2">Welcome to</p>
              <h3 className="text-2xl font-bold text-white tracking-wider mb-2">Homemade baking, Tasty Drinks</h3>
            </div>
          </div>
        </div>

        {/* Project Details Below */}
        <div className="text-center max-w-2xl mx-auto z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-widest mb-6">KEET CAFE</h2>
          <p className="text-xs md:text-sm text-gray-400 leading-loose mb-10 max-w-xl mx-auto">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </p>
          <button 
            onClick={() => setModalOpen(true)}
            className="text-xs tracking-[0.2em] font-bold text-white border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            VIEW PROJECT
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-[#161616] w-full max-w-4xl h-[80vh] rounded-lg border border-white/10 shadow-2xl flex flex-col relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white z-50 bg-black/50 p-2 rounded-full"
            >
              <X size={24} />
            </button>
            <div className="w-full h-1/2 relative">
               <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200" 
                alt="Keet Cafe Details" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent"></div>
            </div>
            <div className="p-12 flex flex-col flex-grow">
              <p className="text-xs tracking-[0.3em] text-[#888] mb-2">CASE STUDY</p>
              <h2 className="text-3xl font-bold text-white tracking-widest mb-6">KEET CAFE <br/> E-COMMERCE</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400 leading-relaxed">
                <p>
                  A complete redesign of the Keet Cafe digital experience. Focusing on a seamless journey from discovering artisanal coffee blends to swift checkout. The aesthetic leans heavily into dark mode minimalism to let the rich photography of the coffee stand out.
                </p>
                <div className="space-y-4">
                  <div>
                    <strong className="block text-white mb-1 text-xs tracking-wider">ROLE</strong>
                    UI/UX Design, Frontend Development
                  </div>
                  <div>
                    <strong className="block text-white mb-1 text-xs tracking-wider">YEAR</strong>
                    2024
                  </div>
                  <a href="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors text-xs tracking-wider mt-4">
                    VISIT LIVE SITE <ArrowRight size={14} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative px-6 py-24 bg-[#141414]">
      <div className="absolute left-6 bottom-12 text-[10px] text-gray-600 tracking-widest font-mono">.03</div>
      
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-8 items-start">
        
        {/* Contact Info (Left) */}
        <div className="pt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-widest mb-8">CONTACT</h2>
          <p className="text-xs md:text-sm text-gray-400 leading-loose mb-12 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-white text-xs font-bold tracking-[0.2em] mb-2">Address</h4>
              <p className="text-gray-500 text-sm">Oktyabrskaya, Berezgova str., 14</p>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold tracking-[0.2em] mb-2">Phone</h4>
              <p className="text-gray-500 text-sm">+234 000 111 22 33</p>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold tracking-[0.2em] mb-2">E-mail</h4>
              <p className="text-gray-500 text-sm">tura@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form (Right) */}
        <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-sm shadow-2xl border border-white/5 relative mt-0 lg:mt-[-40px]">
          <h3 className="text-2xl font-bold text-white tracking-widest mb-10 text-center lg:text-left">CONTACT FORM</h3>
          
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center h-64 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white tracking-wider mb-2">Message Sent!</h4>
              <p className="text-sm text-gray-400">I will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-3 px-2 focus:outline-none focus:border-white transition-colors peer"
                  placeholder="Your name"
                />
              </div>
              <div className="relative">
                <input 
                  type="tel" 
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-3 px-2 focus:outline-none focus:border-white transition-colors peer"
                  placeholder="Your phone"
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-3 px-2 focus:outline-none focus:border-white transition-colors peer"
                  placeholder="Your e-mail"
                />
              </div>
              <div className="relative">
                <textarea 
                  name="message"
                  id="message"
                  rows="3"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-3 px-2 focus:outline-none focus:border-white transition-colors peer resize-none"
                  placeholder="Message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full sm:w-auto mt-4 px-10 py-4 bg-[#222] border border-white/10 text-white text-xs font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE >'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
7
import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Mail, Twitter, Linkedin, Github, CheckCircle2, ChevronRight } from 'lucide-react';

// --- MOCK DATA ---
const PORTFOLIO_DATA = [
  {
    id: '01',
    title: 'Aura Outerwear',
    subtitle: 'E-commerce Experience',
    description: 'A complete digital transformation for a premium outerwear brand. We focused on creating a tactile, immersive shopping experience that highlighted the technical materials of the garments while simplifying the checkout flow. The result was a 40% increase in mobile conversions.',
    role: 'Lead Product Designer',
    timeline: '3 Months',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '02',
    title: 'Sonic Profiles',
    subtitle: 'Audio Interface App',
    description: 'Designing the next generation of spatial audio control. Sonic Profiles needed an interface that felt as premium as their hardware. We utilized dark modes, subtle glows, and micro-interactions to create an app that feels like a physical piece of studio equipment.',
    role: 'Creative Director',
    timeline: '6 Months',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000',
    gallery: [
       'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800',
       'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '03',
    title: 'Lumina Skincare',
    subtitle: 'Brand Identity & Web',
    description: 'Lumina approached us to create a digital presence that matched the purity of their ingredients. We stripped away the noise, focusing on stark contrasts, bold typography, and extreme minimalism to let the product photography stand out.',
    role: 'Brand & Web Designer',
    timeline: '4 Months',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

const SERVICES = [
  { num: '01', title: 'Brand Strategy' },
  { num: '02', title: 'Brand Identity Design' },
  { num: '03', title: 'Packaging Design' },
  { num: '04', title: 'Creative Direction' }
];

const CLIENTS = ['Supa Blox', 'Hype Blox', 'Frame Blox', 'Ultra Blox'];

// --- COMPONENTS ---

const Navigation = ({ onOpenContact, onNavigate }) => (
  <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between p-6 md:px-12 md:py-8 text-white">
    <div 
      className="text-xl font-bold tracking-tighter cursor-pointer"
      onClick={() => onNavigate('home')}
    >
      Folioblox
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
      <button onClick={() => onNavigate('home')} className="hover:text-orange-400 transition-colors">Home</button>
      <button onClick={() => onNavigate('home')} className="hover:text-orange-400 transition-colors">About</button>
      <button onClick={() => onNavigate('home')} className="hover:text-orange-400 transition-colors">Projects</button>
      <button 
        onClick={onOpenContact}
        className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all group"
      >
        Get in touch
        <div className="bg-orange-500 text-white rounded-full p-1 group-hover:bg-white group-hover:text-orange-500 transition-colors">
          <ArrowRight size={14} />
        </div>
      </button>
    </div>
    {/* Mobile nav trigger - simplified for this demo to just open contact */}
    <div className="md:hidden">
      <button onClick={onOpenContact} className="p-2">
        <Mail size={24} />
      </button>
    </div>
  </nav>
);

const Hero = ({ onOpenContact }) => (
  <div className="relative bg-zinc-900 rounded-b-[2.5rem] md:rounded-b-[4rem] overflow-hidden min-h-[90vh] flex flex-col justify-end">
    {/* Background Image with Complex Gradients */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=2000" 
        alt="Creative Director" 
        className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
      />
      {/* Inspired gradients: orange top left, dark bottom */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/40 via-red-900/20 to-black/90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>

    {/* Hero Content */}
    <div className="relative z-10 px-6 md:px-12 pb-24 md:pb-32 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
      <div className="max-w-2xl">
        <p className="text-orange-400 font-medium text-lg md:text-xl mb-2 md:mb-4">Hey, I'm a</p>
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] leading-[1.05] font-bold text-white tracking-tight">
          Creative <br /> Director
        </h1>
      </div>
      
      <div className="max-w-xs md:pb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Great design should feel invisible.</h2>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          From logo to language, I build brands that connect and convert across all digital touchpoints.
        </p>
      </div>
    </div>

    {/* Services Overlay Row */}
    <div className="relative z-10 w-full border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-wrap justify-between gap-6">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="flex flex-col gap-2 min-w-[140px]">
            <span className="text-orange-500 font-bold text-sm">#{service.num}</span>
            <span className="text-zinc-300 text-sm font-medium">{service.title}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ClientMarquee = () => (
  <div className="py-12 px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between border-b border-zinc-800 gap-8">
    <p className="text-zinc-500 text-sm max-w-[150px] leading-tight">
      Trusted by Brands I've Helped Shape
    </p>
    <div className="flex flex-wrap items-center gap-8 md:gap-16 text-zinc-400 font-semibold text-lg md:text-xl">
      {CLIENTS.map((client, idx) => (
        <div key={idx} className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <div className="w-5 h-5 rounded-full border-[3px] border-current opacity-80" />
          {client}
        </div>
      ))}
    </div>
  </div>
);

const IntroSection = ({ onOpenContact }) => (
  <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
    <div>
      <h3 className="text-orange-500 font-semibold mb-6 text-lg">Behind the Designs</h3>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
        Shaping <br/> Experiences That <br/> Make Life Simpler
      </h2>
    </div>
    <div className="flex flex-col justify-end">
      <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed mb-12 font-light">
        I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.
      </p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
        <p className="text-zinc-500 text-sm">
          Let's Build Something <br/> Meaningful Together
        </p>
        <button 
          onClick={onOpenContact}
          className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition-all group"
        >
          Get in touch
          <div className="bg-white text-orange-600 rounded-full p-1 group-hover:scale-110 transition-transform">
            <ArrowRight size={16} />
          </div>
        </button>
      </div>
    </div>
  </div>
);

const ProjectGrid = ({ onProjectClick }) => (
  <div className="px-6 md:px-12 pb-32 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {PORTFOLIO_DATA.map((project) => (
        <div 
          key={project.id} 
          className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] cursor-pointer bg-zinc-900"
          onClick={() => onProjectClick(project)}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
          />
          {/* Overlay that appears on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
            <span className="text-orange-500 text-sm font-bold mb-2">#{project.id}</span>
            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-zinc-300">{project.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- FULL PAGE VIEWS ---

const ProjectDetailView = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-black text-white animate-in fade-in duration-500">
      <nav className="fixed top-0 left-0 w-full p-6 md:px-12 z-50 mix-blend-difference">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors font-medium"
        >
          <X size={20} /> Close Project
        </button>
      </nav>

      <div className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
          <div className="flex-1">
             <span className="text-orange-500 font-bold mb-4 block">Project {project.id}</span>
             <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">{project.title}</h1>
             <p className="text-xl text-zinc-400 font-light">{project.subtitle}</p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8 pt-4">
             <div>
               <h4 className="text-zinc-500 text-sm mb-2">Role</h4>
               <p className="font-medium">{project.role}</p>
             </div>
             <div>
               <h4 className="text-zinc-500 text-sm mb-2">Timeline</h4>
               <p className="font-medium">{project.timeline}</p>
             </div>
             <div className="col-span-2">
               <h4 className="text-zinc-500 text-sm mb-2">Overview</h4>
               <p className="text-zinc-300 leading-relaxed">{project.description}</p>
             </div>
          </div>
        </div>

        <div className="space-y-8">
          {project.gallery.map((img, idx) => (
            <div key={idx} className="w-full rounded-[2rem] overflow-hidden bg-zinc-900">
              <img src={img} alt={`${project.title} detail`} className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactOverlay = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-zinc-900 border border-zinc-800 w-full max-w-2xl rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors bg-black/20 p-2 rounded-full"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="py-24 text-center animate-in slide-in-from-bottom-4">
            <CheckCircle2 size={64} className="text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-2">Message Received</h2>
            <p className="text-zinc-400">I'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom-4">
            <h2 className="text-4xl font-bold text-white mb-2">Let's Talk.</h2>
            <p className="text-zinc-400 mb-8">Fill out the form and I'll get back to you shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 pl-4">Name</label>
                  <input required type="text" className="w-full bg-black/50 border border-zinc-800 rounded-full px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 pl-4">Email</label>
                  <input required type="email" className="w-full bg-black/50 border border-zinc-800 rounded-full px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 pl-4">Message</label>
                <textarea required rows={4} className="w-full bg-black/50 border border-zinc-800 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white rounded-full py-4 font-bold text-lg transition-colors flex items-center justify-center gap-2">
                Send Message <ChevronRight size={20} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="border-t border-zinc-900 py-12 px-6 md:px-12 text-center md:text-left">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-2xl font-bold tracking-tighter text-white">Folioblox</div>
      <div className="flex gap-6 text-zinc-500">
        <a href="#" className="hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
        <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin size={20} /></a>
        <a href="#" className="hover:text-orange-500 transition-colors"><Github size={20} /></a>
      </div>
      <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
    </div>
  </footer>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'project'
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleNavigate = (view) => {
    setCurrentView(view);
    if (view === 'home') {
      setSelectedProject(null);
      window.scrollTo(0, 0);
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentView('project');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-50 font-sans selection:bg-orange-500/30">
      {/* View Router */}
      {currentView === 'home' ? (
        <div className="animate-in fade-in duration-500">
          <Navigation 
            onOpenContact={() => setIsContactOpen(true)} 
            onNavigate={handleNavigate} 
          />
          <main>
            <Hero onOpenContact={() => setIsContactOpen(true)} />
            <ClientMarquee />
            <IntroSection onOpenContact={() => setIsContactOpen(true)} />
            <ProjectGrid onProjectClick={handleProjectClick} />
          </main>
          <Footer />
        </div>
      ) : currentView === 'project' ? (
        <ProjectDetailView 
          project={selectedProject} 
          onBack={() => handleNavigate('home')} 
        />
      ) : null}

      {/* Global Modals */}
      <ContactOverlay 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
8
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

// --- CUSTOM CSS ---
const customStyles = `
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: #1a1a1a; /* Matched dark background */
    color: #ffffff;
    overflow-x: hidden;
  }

  /* Exact filter to match the deep crimson stone from the inspiration image */
  .red-statue-filter {
    filter: grayscale(100%) sepia(100%) hue-rotate(315deg) saturate(600%) brightness(0.7) contrast(1.4);
    mix-blend-mode: lighten;
  }

  /* Scroll Reveal Animations */
  .reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }
  .delay-100 { transition-delay: 100ms; }
  .delay-200 { transition-delay: 200ms; }
  .delay-300 { transition-delay: 300ms; }

  /* Gallery Image Hover */
  .gallery-item:hover .gallery-img {
    transform: scale(1.05);
    filter: grayscale(0%);
  }
  .gallery-item .gallery-img {
    filter: grayscale(100%);
    transition: all 0.7s ease;
  }
`;

// --- CUSTOM HOOK FOR SCROLL ANIMATIONS ---
function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(reveal => observer.observe(reveal));
    return () => reveals.forEach(reveal => observer.unobserve(reveal));
  }, []);
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  useScrollReveal();

  // Scroll Spy functionality to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'gallery', 'contacts'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offsetTop = top + window.scrollY;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + bottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{customStyles}</style>
      <div className="min-h-screen font-sans selection:bg-[#D3212D] selection:text-white">
        
        {/* FIXED HEADER */}
        <header className="fixed top-0 left-0 w-full px-8 md:px-16 py-8 flex items-center justify-between z-50 mix-blend-difference bg-gradient-to-b from-[#1a1a1a]/80 to-transparent backdrop-blur-sm">
          <div className="flex items-center gap-16 w-full">
            {/* LOGO (Exact match to the 3 diagonal red stripes) */}
            <div 
              className="flex gap-1.5 transform -rotate-45 cursor-pointer hover:scale-110 transition-transform duration-300"
              onClick={() => scrollTo('home')}
            >
              <div className="w-2 h-7 bg-[#D3212D] rounded-sm"></div>
              <div className="w-2 h-7 bg-[#D3212D] rounded-sm translate-y-2.5"></div>
              <div className="w-2 h-7 bg-[#D3212D] rounded-sm translate-y-5"></div>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase">
              {['ABOUT', 'GALLERY', 'CONTACTS'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`hover:text-white transition-colors duration-300 relative py-2 ${
                    activeSection === item.toLowerCase() ? 'text-white' : ''
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D3212D] rounded-full"></span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main>
          {/* 1. HERO SECTION (100% Match to Inspiration) */}
          <section id="home" className="relative w-full h-screen min-h-[800px] flex items-center px-8 md:px-24 overflow-hidden bg-gradient-to-br from-[#222] via-[#1a1a1a] to-[#111]">
            
            {/* Background Red Circles (Crisp, exactly as in image) */}
            <div className="absolute top-1/2 left-[60%] md:left-[65%] -translate-y-1/2 -translate-x-1/2 w-[90vw] md:w-[45vw] max-w-[650px] aspect-square rounded-full bg-[#D3212D] z-0"></div>
            <div className="absolute -bottom-10 left-[40%] md:left-[35%] w-[30vw] md:w-[15vw] max-w-[200px] aspect-square rounded-full bg-[#D3212D] z-0"></div>

            {/* Left Content (Exact Typography & Layout) */}
            <div className="relative z-20 w-full md:w-1/2 pt-20">
              <div className="reveal">
                <p className="text-white/70 text-[11px] font-bold tracking-[0.3em] mb-4 uppercase">
                  Our Version
                </p>
                <h1 className="text-7xl md:text-[100px] lg:text-[130px] font-black tracking-tight mb-6 leading-none text-white">
                  DESIGN
                </h1>
                <p className="text-white/80 text-sm md:text-base max-w-sm leading-relaxed mb-12 font-light">
                  Our hobby is a modern and convenient design, the key to successful communication with the client.
                </p>
                
                {/* CTA Button */}
                <div className="flex items-center gap-6 cursor-pointer group w-fit">
                  <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#D3212D] group-hover:bg-[#D3212D] transition-all duration-300">
                    <ArrowRight size={20} className="text-white/60 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-white group-hover:text-[#D3212D] transition-colors duration-300">
                    See More
                  </span>
                </div>
              </div>

              {/* Pagination / Scroll indicator */}
              <div className="absolute bottom-12 left-0 flex items-center gap-6 text-[11px] font-bold text-white/50 reveal delay-200">
                <span className="text-white">01</span>
                <div className="w-32 h-px bg-white/20 relative">
                  <div className="absolute top-0 left-0 w-1/3 h-full bg-white"></div>
                </div>
                <span>03</span>
              </div>
            </div>

            {/* Right Content / Statue Image */}
            <div className="absolute bottom-0 right-0 md:right-[5%] lg:right-[10%] w-full md:w-1/2 h-[70vh] md:h-[90vh] z-10 flex justify-end items-end pointer-events-none">
              {/* Using an image that works perfectly with the red filter */}
              <img 
                src="https://images.unsplash.com/photo-1549887534-1541e9326642?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Classical Red Statue" 
                className="h-[120%] w-auto object-cover object-bottom red-statue-filter scale-110 origin-bottom"
              />
            </div>
          </section>

          {/* 2. ABOUT SECTION */}
          <section id="about" className="relative w-full py-32 px-8 md:px-24 bg-[#151515] overflow-hidden">
            {/* Background geometric tie-in */}
            <div className="absolute top-0 right-0 w-[50vw] aspect-square rounded-full border border-[#D3212D]/10 -translate-y-1/2 translate-x-1/4 z-0"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2 reveal">
                <h2 className="text-[#D3212D] text-[11px] font-bold tracking-[0.3em] mb-4 uppercase">The Philosophy</h2>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-none">
                  DIGITAL <br /> MONUMENTS
                </h1>
                <div className="space-y-6 text-white/70 text-sm md:text-base leading-relaxed max-w-lg font-light">
                  <p>
                    We carry the exact visual weight of our hero section into our core ethos. Every digital experience should possess the timeless aesthetic perfection of classical art.
                  </p>
                  <p>
                    We strip away the unnecessary, utilizing high-contrast geometry and stark typography to reveal a digital presence that commands attention and stands the test of time.
                  </p>
                </div>
                
                <div className="mt-12 flex gap-12">
                  <div className="reveal delay-100">
                    <h3 className="text-4xl font-black text-white mb-2">120+</h3>
                    <p className="text-[10px] text-white/50 tracking-[0.2em] uppercase">Projects Delivered</p>
                  </div>
                  <div className="reveal delay-200">
                    <h3 className="text-4xl font-black text-white mb-2">15</h3>
                    <p className="text-[10px] text-white/50 tracking-[0.2em] uppercase">Industry Awards</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 relative min-h-[500px] flex items-center justify-center reveal delay-200">
                <div className="absolute w-[80%] max-w-[400px] aspect-square bg-[#D3212D] rounded-full z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1601514912952-4752b04f7678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="About Us Sculpture"
                  className="relative z-10 h-[600px] w-auto object-cover red-statue-filter"
                />
              </div>
            </div>
          </section>

          {/* 3. GALLERY SECTION */}
          <section id="gallery" className="relative w-full py-32 px-8 md:px-24 bg-[#1a1a1a]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
              <div>
                <h2 className="text-[#D3212D] text-[11px] font-bold tracking-[0.3em] mb-4 uppercase">Selected Works</h2>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">GALLERY</h1>
              </div>
              <p className="text-white/50 text-sm max-w-xs md:text-right mt-6 md:mt-0 font-light">
                Explore our latest monumental designs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { id: 1, title: 'Ethereal Space', category: 'UX/UI Design', img: 'https://images.unsplash.com/photo-1618220048045-10a6cb99a6c7?auto=format&fit=crop&w=1000&q=80' },
                { id: 2, title: 'Ares FinTech', category: 'Web Platform', img: 'https://images.unsplash.com/photo-1518991043280-1da61d9f3ac5?auto=format&fit=crop&w=1000&q=80' },
                { id: 3, title: 'Chronos Vault', category: 'E-Commerce', img: 'https://images.unsplash.com/photo-1555448248-2571daf6344b?auto=format&fit=crop&w=1000&q=80' },
                { id: 4, title: 'Atlas Brand', category: 'Identity', img: 'https://images.unsplash.com/photo-1544413158-97746404eb58?auto=format&fit=crop&w=1000&q=80' }
              ].map((work, index) => (
                <div 
                  key={work.id} 
                  className={`gallery-item group relative overflow-hidden bg-black aspect-[4/3] cursor-pointer reveal`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Red Tint Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#D3212D]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
                  
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className="gallery-img w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[#D3212D] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {work.category}
                    </p>
                    <div className="flex justify-between items-center">
                      <h3 className="text-3xl font-black text-white">{work.title}</h3>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 group-hover:border-white">
                        <ExternalLink size={18} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. CONTACTS SECTION */}
          <section id="contacts" className="relative w-full py-32 px-8 md:px-24 bg-[#111] overflow-hidden">
             {/* Small Red Circle bottom left tie-in */}
             <div className="absolute bottom-0 left-0 w-[20vw] aspect-square rounded-full bg-[#D3212D] z-0 -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-16">
              <div className="w-full md:w-1/2 reveal">
                <h2 className="text-[#D3212D] text-[11px] font-bold tracking-[0.3em] mb-4 uppercase">Get In Touch</h2>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-12 leading-none">
                  START A <br /> PROJECT
                </h1>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-[#D3212D]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mb-2">Email Us</p>
                      <p className="text-lg text-white hover:text-[#D3212D] transition-colors cursor-pointer font-light">hello@olympos-design.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-[#D3212D]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mb-2">Visit Us</p>
                      <p className="text-lg text-white font-light">124 Pantheon Way,<br />Creative District, NY 10012</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-[#D3212D]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mb-2">Call Us</p>
                      <p className="text-lg text-white font-light">+1 (555) 019-8472</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 reveal delay-200">
                <form className="bg-[#1a1a1a] p-10 md:p-14 border border-white/5 relative">
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D3212D]"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D3212D]"></div>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-[10px] text-white/50 uppercase tracking-[0.2em] mb-3">Your Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D3212D] transition-colors font-light text-lg"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-white/50 uppercase tracking-[0.2em] mb-3">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D3212D] transition-colors font-light text-lg"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-white/50 uppercase tracking-[0.2em] mb-3">Project Details</label>
                      <textarea 
                        rows="4"
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D3212D] transition-colors resize-none font-light text-lg"
                        placeholder="Tell us about your vision..."
                      ></textarea>
                    </div>
                    <button 
                      type="button"
                      className="w-full bg-[#D3212D] text-white font-bold tracking-[0.2em] uppercase text-[11px] py-6 hover:bg-white hover:text-black transition-colors duration-500 mt-4 flex justify-center items-center gap-3 group"
                    >
                      Send Message <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="w-full py-8 border-t border-white/10 text-center bg-[#111]">
            <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase">
              © 2024 Olympos Design Studio. All Rights Reserved.
            </p>
          </footer>
        </main>

      </div>
    </>
  );
}
8
import React, { useState, useRef, useEffect } from 'react';
import { Camera, ArrowRight, Facebook, Twitter, Instagram, Menu, X, ArrowDown, LayoutGrid, Layers, Maximize } from 'lucide-react';

export default function App() {
  // State for interactions
  const [timeOfDay, setTimeOfDay] = useState(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  // Handle Dragging for the interactive timeline
  const handlePointerMove = (e) => {
    if (!isDragging.current || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setTimeOfDay(percentage);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerUp);
  };

  const handlePointerDown = (e) => {
    isDragging.current = true;
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    handlePointerMove(e); // Initialize position
  };

  // Smooth scroll functionality
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Calculate dynamic shadow offsets
  const shadowLength = 15 + (timeOfDay / 100) * 40;
  const shadowAngle = -10 + (timeOfDay / 100) * 30;

  return (
    <div className="bg-[#c8c0b4] min-h-screen font-sans selection:bg-[#E05353] selection:text-white overflow-x-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Inter:wght@300;400;500;600;800&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* --- FULLSCREEN MENU OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-50 bg-[#111] text-[#E8E2D7] transition-transform duration-700 ease-in-out flex flex-col p-8 md:p-16 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex justify-between items-center mb-16">
          <span className="font-serif font-bold text-xl tracking-widest text-[#E05353]">MONOLITH</span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="w-12 h-12 rounded-full border border-[#E8E2D7] flex items-center justify-center hover:bg-[#E8E2D7] hover:text-[#111] transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex flex-col gap-6 md:gap-10 mt-12">
          {['Hero', 'System', 'Philosophy'].map((item, i) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-left font-serif text-5xl md:text-8xl font-bold hover:text-[#E05353] transition-colors flex items-center gap-8 group"
            >
              <span className="text-sm font-sans font-normal opacity-40 group-hover:opacity-100">0{i + 1}</span>
              {item}
            </button>
          ))}
        </nav>
      </div>


      {/* --- SECTION 1: HERO --- */}
      <section id="hero" className="min-h-screen w-full p-4 md:p-8 flex flex-col justify-center items-center relative">
        
        {/* Main Canvas Container (Framed to preserve isometric math) */}
        <div className="w-full max-w-[1400px] aspect-[4/3] md:aspect-[16/9] bg-[#E8E2D7] border-[1.5px] border-[#111] relative overflow-hidden shadow-2xl flex">
          
          {/* BACKGROUND GEOMETRY (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 60,0 45,100 0,100" fill="#E8E2D7" />
            <polygon points="60,0 100,0 100,30 51,60" fill="#D8D1C4" />
            <polygon points="51,60 100,30 100,100 45,100" fill="#DFD8CC" />
            <polygon points="68,0 80,0 80,18 63,40" fill="#2A2A2A" opacity="0.05" />
            <line x1="74" y1="0" x2="71" y2="28" stroke="#111" strokeWidth="0.1" opacity="0.3" />
            <line x1="65" y1="15" x2="80" y2="9" stroke="#111" strokeWidth="0.1" opacity="0.3" />
            <polygon points={`51,60 100,30 100,${30 + timeOfDay/2} ${51 + timeOfDay/4},100`} fill="#111" opacity="0.04" />
            <line x1="60" y1="0" x2="45" y2="100" stroke="#111" strokeWidth="0.25" />
            <line x1="51" y1="60" x2="100" y2="30" stroke="#111" strokeWidth="0.25" />
            <line x1="75" y1="0" x2="75" y2="100" stroke="#111" strokeWidth="0.05" opacity="0.2" strokeDasharray="1 1" />
          </svg>

          {/* DYNAMIC SVG CHARACTERS */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points={`72,68 ${72 + shadowLength},${68 + shadowAngle} ${74 + shadowLength},${68 + shadowAngle} 74,68`} fill="#111" opacity="0.4" className="transition-all duration-100 ease-out" />
            <path d="M72.5 60 C 72 60 71.5 60.5 71.5 61 C 71.5 61.5 72 62 72.5 62 C 73 62 73.5 61.5 73.5 61 C 73.5 60.5 73 60 72.5 60 Z M 72 62.5 L 73 62.5 L 73.5 65 L 74 68 L 73 68 L 72.5 66 L 72 68 L 71 68 L 71.5 65 Z" fill="#111" />
            <polygon points={`52,56 ${52 + shadowLength*1.2},${56 + shadowAngle*0.8} ${53 + shadowLength*1.2},${56 + shadowAngle*0.8} 53,56`} fill="#111" opacity="0.3" className="transition-all duration-100 ease-out" />
            <path d="M52 50 C 51.5 50 51 50.5 51 51 C 51 51.5 51.5 52 52 52 C 52.5 52 53 51.5 53 51 C 53 50.5 52.5 50 52 50 Z M 51.2 52 L 52.5 52.5 L 53 55 L 53 58 L 52 58 L 52 55.5 L 51 57 L 50.5 56.5 L 51.5 54 Z" fill="#111" />
          </svg>

          {/* Top Left Logo */}
          <div className="absolute top-6 left-6 md:top-12 md:left-12 flex items-center gap-3 z-10">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#E05353] mix-blend-multiply flex-shrink-0" />
            <span className="font-serif font-bold text-sm md:text-base tracking-widest text-[#111]">MONOLITH</span>
          </div>

          {/* Top Right Menu Button */}
          <div 
            onClick={() => setIsMenuOpen(true)}
            className="absolute top-6 right-6 md:top-12 md:right-12 flex flex-col items-center gap-2 z-10 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full border border-[#111] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[#111] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Menu className="w-4 h-4 text-[#111] group-hover:text-[#E8E2D7] relative z-10 transition-colors duration-300" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#111]">Menu</span>
          </div>

          {/* Social Links */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#111] hover:text-[#E05353] transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[#111] hover:text-[#E05353] transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#111] hover:text-[#E05353] transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>

          {/* Main Left Content Group */}
          <div className="absolute top-[25%] left-[8%] md:left-[15%] w-[40%] md:w-[25%] z-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#E05353] flex items-center justify-center mb-6 relative">
                <Camera className="w-5 h-5 text-[#E8E2D7] relative z-10" />
                <div className="absolute inset-0 rounded-full border border-[#E05353] animate-ping opacity-20" />
              </div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.1] tracking-tight mb-4">
                MASTER<br />YOUR SPACE
              </h1>

              <div className="w-8 h-[2px] bg-[#111] mb-6" />

              <p className="font-serif font-semibold italic text-[#111] text-xs md:text-sm mb-6">
                "As soon as I mapped my project, I realized I controlled time."
              </p>

              <button 
                onClick={() => scrollTo('system')}
                className="flex items-center gap-2 group text-xs md:text-sm font-bold uppercase tracking-wider text-[#111] hover:text-[#E05353] transition-colors mt-4"
              >
                <div className="w-8 h-8 rounded-full border border-[#111] group-hover:border-[#E05353] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          {/* Diagonal Text Block */}
          <div 
            className="absolute bottom-[20%] left-[30%] md:left-[45%] z-10 origin-bottom-left"
            style={{ transform: 'rotate(-31.5deg)' }}
          >
            <div className="flex flex-col">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#111] tracking-wide mb-2 whitespace-nowrap">
                SYSTEM ARCHITECTURE
              </h2>
              <div className="flex gap-4 items-start max-w-[300px]">
                <span className="text-[#E05353] font-serif text-4xl leading-none font-bold">W</span>
                <p className="text-[8px] md:text-[10px] leading-tight text-[#111] text-justify font-medium">
                  e've created a spatial ecosystem for creative development. By visualizing tasks as physical blocks in an isometric plane, your team stops managing lists and starts constructing architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Left Drag Interface */}
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20 flex items-center gap-4">
            <div className="relative w-24 md:w-32 h-10 flex items-center cursor-ew-resize group"
                 ref={sliderRef}
                 onPointerDown={handlePointerDown}
            >
              <div className="absolute w-full h-[1px] bg-[#111] top-1/2 -translate-y-1/2 opacity-30 group-hover:opacity-100 transition-opacity" />
              <div 
                className="absolute w-8 h-8 rounded-full border border-[#111] bg-[#E8E2D7] flex items-center justify-center shadow-md transition-transform"
                style={{ left: `${timeOfDay}%`, transform: `translateX(-50%) ${isDragging.current ? 'scale(0.9)' : 'scale(1)'}` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#E05353]" />
              </div>
            </div>
            <span className="text-[10px] md:text-xs font-medium text-[#111] tracking-wider uppercase hidden md:block select-none">
              Drag to shift time
            </span>
          </div>
        </div>

        {/* Scroll Indicator outside the frame */}
        <div 
          onClick={() => scrollTo('system')}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-[#111] hover:text-[#E05353] transition-colors"
        >
          <span className="text-[10px] uppercase font-bold tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* --- SECTION 2: THE SYSTEM (FEATURES) --- */}
      <section id="system" className="w-full py-24 md:py-32 px-4 md:px-12 bg-[#E8E2D7] border-t-2 border-[#111]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#111] leading-none uppercase">
              Structural<br />Integrity.
            </h2>
            <p className="max-w-md text-sm text-[#111] font-medium leading-relaxed">
              Monolith replaces flat to-do lists with a spatial, architectural plane. Assign resources, define scope, and observe your project manifest in three dimensions.
            </p>
          </div>

          {/* Brutalist Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#111] bg-[#111]">
            {[
              { title: "Spatial Mapping", icon: <LayoutGrid size={32} />, desc: "Visualize dependencies as load-bearing structural blocks." },
              { title: "Layered Timelines", icon: <Layers size={32} />, desc: "Asynchronous work cycles stacked across Z-index planes." },
              { title: "Perspective Shift", icon: <Maximize size={32} />, desc: "Switch instantly between top-down data and isometric overviews." }
            ].map((feature, i) => (
              <div key={i} className="bg-[#E8E2D7] border border-[#111] p-8 md:p-12 hover:bg-[#111] hover:text-[#E8E2D7] transition-colors duration-300 group flex flex-col justify-between min-h-[300px]">
                <div className="text-[#E05353] group-hover:text-[#E05353]">
                  {feature.icon}
                </div>
                <div>
                  <div className="text-[10px] font-mono mb-4 opacity-50 group-hover:opacity-80">MODULE 0{i + 1}</div>
                  <h3 className="font-serif text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-sm opacity-80">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: PHILOSOPHY & FOOTER --- */}
      <section id="philosophy" className="w-full py-32 px-4 md:px-12 bg-[#111] text-[#E8E2D7]">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
          
          <div className="w-16 h-16 rounded-full bg-[#E05353] mix-blend-screen mb-12" />
          
          <h2 className="font-serif text-4xl md:text-6xl font-bold max-w-4xl leading-tight mb-12">
            "We believe tools should not just organize work, they should elevate the perspective of the worker."
          </h2>
          
          <div className="w-full h-[1px] bg-[#E8E2D7] opacity-20 mb-12" />

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-widest">
            <span>© 2024 Monolith Systems</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#E05353] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#E05353] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#E05353] transition-colors">Contact</a>
            </div>
            <button 
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2 hover:text-[#E05353] transition-colors"
            >
              Back to top
              <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center rotate-180">
                <ArrowDown size={12} />
              </div>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
9
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>FIREBLOX — Digital Asset Infrastructure</title>

<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600&family=Barlow+Condensed:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">

<style>
:root {
  --bg-base: #020202;
  --bg-surface: #0a0a0a;
  --bg-surface-hover: #111111;
  --bg-surface-light: #161616;
  
  --border-light: rgba(255, 255, 255, 0.06);
  --border-strong: rgba(255, 255, 255, 0.12);
  --border-glow: rgba(230, 48, 48, 0.3);
  
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.65);
  --text-tertiary: rgba(255, 255, 255, 0.4);
  
  --accent-red: #e63030;
  --accent-red-hover: #ff3b3b;
  --accent-green: #16b450;
  
  --font-body: 'Barlow', sans-serif;
  --font-condensed: 'Barlow Condensed', sans-serif;
  --font-display: 'Bebas Neue', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --nav-height: 80px;
  --section-padding-y: clamp(80px, 10vw, 140px);
  --section-padding-x: clamp(24px, 5vw, 64px);
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg-base);
}

body {
  background: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
  overflow-x: hidden;
  min-height: 100vh;
  line-height: 1.6;
  font-size: 16px;
}

::selection {
  background: var(--accent-red);
  color: white;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: normal;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

/* Scroll Reveal Utility */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Base Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 36px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border: none;
  text-align: center;
}

.btn-primary {
  background: var(--text-primary);
  color: var(--bg-base);
}
.btn-primary:hover {
  background: var(--accent-red);
  color: var(--text-primary);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(230, 48, 48, 0.2);
}

.btn-outline {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-strong);
}
.btn-outline:hover {
  border-color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
}

.btn-demo {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-primary);
  background: transparent;
  border: 1px solid var(--border-strong);
  cursor: pointer;
  padding: 12px 24px;
  transition: all 0.2s ease;
}
.btn-demo:hover {
  border-color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
}

nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-height);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--section-padding-x);
  background: rgba(2, 2, 2, 0);
  transition: background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease;
  border-bottom: 1px solid transparent;
}

nav.scrolled {
  background: rgba(2, 2, 2, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-light);
}

.logo {
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo::before {
  content: '';
  display: block;
  width: 8px; height: 8px;
  background: var(--accent-red);
  box-shadow: 0 0 10px var(--accent-red);
}

.nav-links {
  display: none;
  align-items: center;
  gap: 40px;
  list-style: none;
}
@media (min-width: 1024px) {
  .nav-links { display: flex; }
}

.nav-links a {
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color 0.2s;
  cursor: pointer;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -6px; left: 0;
  width: 100%; height: 2px;
  background: var(--accent-red);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}
.nav-links a:hover { color: var(--text-primary); }
.nav-links a.active { color: var(--text-primary); }
.nav-links a.active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  width: 24px;
  z-index: 1001;
}
@media (min-width: 1024px) {
  .hamburger { display: none; }
}
.hamburger span {
  display: block;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: 0.3s ease;
  width: 100%;
}
.hamburger span:nth-child(2) { width: 70%; }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); width: 100%; }

/* Mobile Menu Overlay */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: rgba(2, 2, 2, 0.98);
  backdrop-filter: blur(20px);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.mobile-menu.open {
  opacity: 1;
  pointer-events: all;
}
.mobile-menu a {
  font-family: var(--font-condensed);
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
}
.mobile-menu a.active, .mobile-menu a:hover {
  color: var(--text-primary);
}

.page {
  display: none;
  animation: fadePage 0.5s ease forwards;
}
.page.active {
  display: block;
}
@keyframes fadePage {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.section {
  padding: var(--section-padding-y) var(--section-padding-x);
  border-top: 1px solid var(--border-light);
}

.eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent-red);
  margin-bottom: 24px;
  display: block;
}

.section-heading {
  font-family: var(--font-condensed);
  font-weight: 800;
  font-size: clamp(40px, 6vw, 72px);
  text-transform: uppercase;
  line-height: 0.95;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.section-heading-sm {
  font-family: var(--font-condensed);
  font-weight: 800;
  font-size: clamp(32px, 4vw, 52px);
  text-transform: uppercase;
  line-height: 1;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.section-body {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 600px;
}

/* Grids */
.grid-2, .grid-3, .grid-4 {
  display: grid;
  gap: 1px;
  background: var(--border-light);
  border-top: 1px solid var(--border-light);
}
.grid-2 { grid-template-columns: 1fr; }
.grid-3 { grid-template-columns: 1fr; }
.grid-4 { grid-template-columns: 1fr; }

@media (min-width: 768px) {
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-4 { grid-template-columns: repeat(4, 1fr); }
}

/* Split Layouts (Text + Image/Module) */
.split-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
  align-items: center;
}
@media (min-width: 1024px) {
  .split-layout { grid-template-columns: 1fr 1fr; gap: 96px; }
  .split-layout.uneven { grid-template-columns: 1fr 1.4fr; }
}

.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: var(--nav-height);
  overflow: hidden;
  background: var(--bg-base);
}

/* Hero Background Effects */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 0%, var(--bg-base) 80%);
  z-index: 2;
  pointer-events: none;
}
.hero-glow-blue {
  position: absolute;
  top: -10%; right: -5%;
  width: 50vw; height: 50vw;
  background: radial-gradient(circle, rgba(28, 78, 255, 0.15) 0%, transparent 60%);
  filter: blur(80px);
  z-index: 0;
}
.hero-glow-red {
  position: absolute;
  bottom: -10%; left: -5%;
  width: 40vw; height: 40vw;
  background: radial-gradient(circle, rgba(230, 48, 48, 0.12) 0%, transparent 60%);
  filter: blur(80px);
  z-index: 0;
}

/* Giant Background Text */
.hero-bg-text {
  position: absolute;
  top: 15vh;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 1;
  font-family: var(--font-display);
  font-size: clamp(80px, 20vw, 320px);
  line-height: 0.8;
  letter-spacing: -0.02em;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.4) 40%, transparent 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.8;
  animation: fadeInDown 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* The Orb */
.hero-orb-wrap {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(75%);
  width: clamp(800px, 140vw, 2600px);
  aspect-ratio: 1;
  z-index: 3;
  animation: orbRise 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.hero-orb {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 10%, #ff4d4d 0%, #a80000 30%, #1a0000 65%, #000000 100%);
  box-shadow: 
    0 0 160px rgba(230, 48, 48, 0.25),
    inset 0 20px 40px rgba(255, 255, 255, 0.1);
  position: relative;
}
.hero-orb::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(ellipse at 80% 20%, rgba(110, 165, 255, 0.3) 0%, transparent 50%);
  mix-blend-mode: screen;
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 10;
  margin-top: auto;
  padding: var(--section-padding-x);
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: fadeInUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
  opacity: 0;
}
@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}

.hero-tagline {
  font-family: var(--font-condensed);
  font-weight: 800;
  font-size: clamp(36px, 5vw, 64px);
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 0.02em;
}
.hero-tagline span {
  display: block;
  color: var(--text-tertiary);
}
.hero-desc {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 300px;
}
@media (min-width: 768px) {
  .hero-desc { text-align: right; }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-40px); }
  to { opacity: 0.8; transform: translateY(0); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes orbRise {
  from { transform: translateX(-50%) translateY(95%); opacity: 0; }
  to { transform: translateX(-50%) translateY(75%); opacity: 1; }
}

.card {
  background: var(--bg-base);
  padding: clamp(32px, 4vw, 56px) clamp(24px, 3vw, 48px);
  position: relative;
  overflow: hidden;
  transition: background 0.4s ease;
}
.card:hover {
  background: var(--bg-surface);
}
.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-red), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}
.card:hover::before { opacity: 1; }

.card-num {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--text-tertiary);
  margin-bottom: 32px;
}
.card-icon {
  width: 32px; height: 32px;
  margin-bottom: 24px;
  color: var(--text-primary);
}
.card-icon svg { width: 100%; height: 100%; stroke-width: 1.5; stroke: currentColor; fill: none; }

.card-tags {
  display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;
}
.tag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 10px;
  border: 1px solid var(--border-strong);
  color: var(--text-secondary);
}

.card-title {
  font-family: var(--font-condensed);
  font-weight: 700;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-primary);
  margin-bottom: 12px;
}
.card-desc {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Stats Cell */
.stat-cell {
  background: var(--bg-base);
  padding: 56px var(--section-padding-x);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.stat-num {
  font-family: var(--font-display);
  font-size: clamp(56px, 8vw, 96px);
  line-height: 1;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.stat-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

/* Marquees */
.marquee-wrap {
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
  overflow: hidden;
  padding: 20px 0;
  background: var(--bg-base);
  display: flex;
}
.marquee-track {
  display: flex;
  animation: marquee 30s linear infinite;
  white-space: nowrap;
}
.marquee-item {
  font-family: var(--font-display);
  font-size: 32px;
  color: var(--border-strong);
  padding: 0 32px;
  letter-spacing: 0.05em;
}
.marquee-item.red { color: rgba(230, 48, 48, 0.3); }

.logo-marquee-wrap {
  overflow: hidden;
  padding: 32px 0;
  border-top: 1px solid var(--border-light);
  background: var(--bg-base);
  display: flex;
}
.logo-item {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-tertiary);
  padding: 0 48px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.3s ease;
}
.logo-item:hover { color: var(--text-primary); }

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Status Banner */
.status-banner {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: rgba(22, 180, 80, 0.05);
  border: 1px solid rgba(22, 180, 80, 0.2);
  margin-top: 32px;
}
.status-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--accent-green);
  box-shadow: 0 0 10px var(--accent-green);
  animation: pulseGreen 2s infinite;
}
.status-text {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--accent-green);
}
@keyframes pulseGreen {
  0% { box-shadow: 0 0 0 0 rgba(22, 180, 80, 0.4); }
  70% { box-shadow: 0 0 0 6px rgba(22, 180, 80, 0); }
  100% { box-shadow: 0 0 0 0 rgba(22, 180, 80, 0); }
}

.dashboard-wrap {
  background: var(--bg-base);
  padding: var(--section-padding-y) var(--section-padding-x);
  border-top: 1px solid var(--border-light);
}
.dashboard-inner {
  border: 1px solid var(--border-strong);
  background: var(--bg-surface);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.5);
}
.dash-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 24px;
  border-bottom: 1px solid var(--border-light);
  background: var(--bg-base);
}
.dash-logo {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 12px;
}
.dash-n {
  width: 24px; height: 24px;
  background: var(--accent-red);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 16px;
}
.dash-nav {
  display: flex; gap: 24px; overflow-x: auto;
}
.dash-nav span {
  font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;
  color: var(--text-tertiary); cursor: pointer; padding: 4px 0; white-space: nowrap;
}
.dash-nav span.active { color: var(--text-primary); border-bottom: 1px solid var(--accent-red); }

.dash-body {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1px;
  background: var(--border-light);
}
.dash-kpi {
  background: var(--bg-surface);
  padding: 32px 24px;
}
.dash-kpi-label {
  font-family: var(--font-mono); font-size: 11px; color: var(--text-tertiary);
  text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;
}
.dash-kpi-val {
  font-family: var(--font-display); font-size: 48px; line-height: 1;
}
.dash-kpi-val.green { color: var(--accent-green); }
.dash-kpi-val.red { color: var(--accent-red); }

.dash-table-wrap {
  grid-column: 1 / -1;
  background: var(--bg-surface);
  padding: 24px;
  overflow-x: auto;
}
.dash-table-title {
  font-family: var(--font-mono); font-size: 11px; text-transform: uppercase;
  letter-spacing: 0.1em; color: var(--text-secondary); margin-bottom: 20px;
  display: flex; align-items: center; gap: 12px;
}
.live-pill {
  font-size: 9px; padding: 2px 8px; background: rgba(22, 180, 80, 0.1);
  border: 1px solid rgba(22, 180, 80, 0.2); color: var(--accent-green);
}
table { width: 100%; border-collapse: collapse; min-width: 600px; }
th {
  font-family: var(--font-mono); font-size: 10px; text-transform: uppercase;
  letter-spacing: 0.1em; color: var(--text-tertiary); padding: 12px;
  text-align: left; border-bottom: 1px solid var(--border-strong);
}
td {
  font-size: 14px; color: var(--text-secondary); padding: 16px 12px;
  border-bottom: 1px solid var(--border-light);
}
tr:hover td { background: rgba(255,255,255,0.02); }
tr:last-child td { border-bottom: none; }
td.mono { font-family: var(--font-mono); color: var(--text-primary); font-size: 13px;}
td.green-val { color: var(--accent-green); font-weight: 500; }

/* Visual Orb (Inner Pages) */
.orb-module {
  position: relative; height: 400px; display: flex; align-items: center; justify-content: center;
}
.inner-orb {
  width: 200px; height: 200px; border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ff4d4d 0%, #a80000 50%, #000 100%);
  box-shadow: 0 0 80px rgba(230, 48, 48, 0.3);
  z-index: 2;
}
.orbit-ring {
  position: absolute; border: 1px solid var(--border-strong); border-radius: 50%;
  animation: spin 20s linear infinite;
}
.orbit-ring:nth-child(1) { width: 300px; height: 300px; }
.orbit-ring:nth-child(2) { width: 400px; height: 400px; animation-duration: 30s; animation-direction: reverse; }
.orbit-dot {
  position: absolute; top: -4px; left: 50%; transform: translateX(-50%);
  width: 8px; height: 8px; border-radius: 50%; background: var(--accent-red);
  box-shadow: 0 0 12px var(--accent-red);
}

.inner-hero {
  position: relative;
  padding: calc(var(--nav-height) + 80px) var(--section-padding-x) 100px;
  background: var(--bg-base);
  border-bottom: 1px solid var(--border-light);
  overflow: hidden;
}
.inner-hero::before {
  content: ''; position: absolute; top: 0; right: 0; width: 60%; height: 100%;
  background: radial-gradient(ellipse at 80% 20%, rgba(230, 48, 48, 0.1) 0%, transparent 70%);
  filter: blur(60px); pointer-events: none;
}
.page-label {
  font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--accent-red); margin-bottom: 24px; display: block;
}
.page-title {
  font-family: var(--font-display); font-size: clamp(64px, 10vw, 140px);
  line-height: 0.85; letter-spacing: -0.01em; margin-bottom: 32px;
}

/* Pricing Grid */
.pricing-card {
  background: var(--bg-base); padding: 56px 48px; position: relative;
}
.pricing-card.featured {
  background: linear-gradient(180deg, rgba(230,48,48,0.05) 0%, var(--bg-base) 100%);
  box-shadow: inset 0 0 0 1px var(--border-glow);
}
.pricing-badge {
  position: absolute; top: 0; left: 48px; transform: translateY(-50%);
  font-size: 10px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 6px 16px; background: var(--accent-red); color: white;
}
.price-tier { font-family: var(--font-mono); font-size: 11px; color: var(--text-tertiary); text-transform: uppercase; margin-bottom: 16px; display: block;}
.price-name { font-family: var(--font-condensed); font-size: 40px; font-weight: 800; text-transform: uppercase; margin-bottom: 12px; line-height: 1;}
.price-features { list-style: none; margin: 32px 0 40px; display: flex; flex-direction: column; gap: 16px;}
.price-features li { display: flex; gap: 12px; color: var(--text-secondary); font-size: 15px;}
.price-features li::before { content: '—'; color: var(--accent-red); font-weight: 700;}

/* CTA Banner */
.cta-banner {
  background: var(--bg-surface-light);
  padding: var(--section-padding-y) var(--section-padding-x);
  border-top: 1px solid var(--border-light);
  display: flex; flex-direction: column; gap: 40px;
  position: relative; overflow: hidden;
}
@media (min-width: 768px) {
  .cta-banner { flex-direction: row; justify-content: space-between; align-items: center; }
}
.cta-heading {
  font-family: var(--font-condensed); font-weight: 800; font-size: clamp(40px, 5vw, 64px);
  text-transform: uppercase; line-height: 1; margin-bottom: 16px;
}
.cta-heading em { font-style: normal; color: var(--text-tertiary); }

/* Forms */
.form-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
@media (min-width: 768px) { .form-grid { grid-template-columns: 1fr 1fr; } }
.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-group.full { grid-column: 1 / -1; }
.form-group label { font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; color: var(--text-tertiary); }
.form-control {
  background: rgba(255,255,255,0.02); border: 1px solid var(--border-strong);
  color: var(--text-primary); padding: 16px; font-family: var(--font-body); font-size: 15px;
  border-radius: 2px; transition: border-color 0.3s ease; width: 100%; outline: none;
}
.form-control:focus { border-color: var(--text-primary); background: rgba(255,255,255,0.05); }
textarea.form-control { min-height: 140px; resize: vertical; }

/* Timeline */
.timeline-items { display: flex; flex-direction: column; }
.tl-item {
  display: grid; grid-template-columns: 1fr; gap: 16px;
  padding: 40px 0; border-bottom: 1px solid var(--border-light);
}
@media (min-width: 768px) {
  .tl-item { grid-template-columns: 120px 1fr; gap: 48px; }
}
.tl-year { font-family: var(--font-display); font-size: 48px; color: var(--border-strong); line-height: 1;}

/* Footer */
footer {
  padding: 80px var(--section-padding-x) 40px;
  border-top: 1px solid var(--border-light);
  background: var(--bg-base);
}
.footer-grid {
  display: grid; grid-template-columns: 1fr; gap: 48px;
}
@media (min-width: 768px) {
  .footer-grid { grid-template-columns: 2fr repeat(3, 1fr); }
}
.footer-col h4 {
  font-family: var(--font-mono); font-size: 11px; text-transform: uppercase;
  letter-spacing: 0.1em; color: var(--text-tertiary); margin-bottom: 24px;
}
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 16px; }
.footer-col ul a { font-size: 14px; color: var(--text-secondary); transition: color 0.2s; cursor:pointer;}
.footer-col ul a:hover { color: var(--text-primary); }

.footer-bottom {
  margin-top: 80px; padding-top: 32px; border-top: 1px solid var(--border-light);
  display: flex; flex-direction: column; gap: 16px;
}
@media (min-width: 768px) {
  .footer-bottom { flex-direction: row; justify-content: space-between; align-items: center; }
}
.footer-bottom p { font-family: var(--font-mono); font-size: 11px; color: var(--text-tertiary); }
.footer-links { display: flex; gap: 24px; }
.footer-links a { font-family: var(--font-mono); font-size: 11px; color: var(--text-tertiary); text-transform: uppercase;}
.footer-links a:hover { color: var(--text-secondary); }
</style>
</head>
<body>

<nav id="mainNav">
  <div class="logo" onclick="goPage('home')">FIREBLOX</div>
  <ul class="nav-links">
    <li><a onclick="goPage('products')" data-page="products">Products</a></li>
    <li><a onclick="goPage('solutions')" data-page="solutions">Solutions</a></li>
    <li><a onclick="goPage('platform')" data-page="platform">Platform</a></li>
    <li><a onclick="goPage('network')" data-page="network">Network</a></li>
    <li><a onclick="goPage('company')" data-page="company">Company</a></li>
  </ul>
  <div class="nav-right">
    <button class="btn-demo" onclick="goPage('feasibility')">Request Feasibility</button>
    <div class="hamburger" id="hamburgerBtn"><span></span><span></span><span></span></div>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <a onclick="goPage('products'); closeMenu()">Products</a>
  <a onclick="goPage('solutions'); closeMenu()">Solutions</a>
  <a onclick="goPage('platform'); closeMenu()">Platform</a>
  <a onclick="goPage('network'); closeMenu()">Network</a>
  <a onclick="goPage('company'); closeMenu()">Company</a>
  <button class="btn btn-primary" style="margin-top:24px" onclick="goPage('feasibility'); closeMenu()">Check Feasibility</button>
</div>

<div class="page active" id="page-home">
  
  <section class="hero">
    <div class="hero-glow-blue"></div>
    <div class="hero-glow-red"></div>
    
    <div class="hero-bg-text">BLOCKCHAIN</div>
    
    <div class="hero-orb-wrap">
      <div class="hero-orb"></div>
    </div>
    
    <div class="hero-content">
      <div class="hero-tagline">
        Digital Asset
        <span>Infrastructure</span>
      </div>
      <div class="hero-desc">
        Digital asset infrastructure built for scale and trusted for security.
      </div>
    </div>
  </section>

  <div class="logo-marquee-wrap" style="padding: 24px 0;">
    <div class="marquee-track" style="animation-duration: 40s;">
      <span class="logo-item" style="font-style:italic">Revolut</span>
      <span class="logo-item">Triple·A</span>
      <span class="logo-item" style="font-weight:900">BYB|T</span>
      <span class="logo-item" style="font-weight:900; letter-spacing:0.1em">VISA</span>
      <span class="logo-item">worldpay</span>
      <span class="logo-item">⊙ Bridge</span>
      <!-- Duplicate -->
      <span class="logo-item" style="font-style:italic">Revolut</span>
      <span class="logo-item">Triple·A</span>
      <span class="logo-item" style="font-weight:900">BYB|T</span>
      <span class="logo-item" style="font-weight:900; letter-spacing:0.1em">VISA</span>
      <span class="logo-item">worldpay</span>
      <span class="logo-item">⊙ Bridge</span>
    </div>
  </div>

  <div class="grid-3">
    <div class="stat-cell reveal"><div class="stat-num">$6T+</div><div class="stat-label">Assets Transferred</div></div>
    <div class="stat-cell reveal"><div class="stat-num">1,800+</div><div class="stat-label">Institutional Clients</div></div>
    <div class="stat-cell reveal"><div class="stat-num">50+</div><div class="stat-label">Blockchain Networks</div></div>
  </div>

  <div class="marquee-wrap">
    <div class="marquee-track">
      <span class="marquee-item">SECURITY</span><span class="marquee-item red">——</span>
      <span class="marquee-item">COMPLIANCE</span><span class="marquee-item red">——</span>
      <span class="marquee-item">SCALE</span><span class="marquee-item red">——</span>
      <span class="marquee-item">CUSTODY</span><span class="marquee-item red">——</span>
      <span class="marquee-item">DEFI</span><span class="marquee-item red">——</span>
      <span class="marquee-item">WEB3</span><span class="marquee-item red">——</span>
      <!-- Duplicate -->
      <span class="marquee-item">SECURITY</span><span class="marquee-item red">——</span>
      <span class="marquee-item">COMPLIANCE</span><span class="marquee-item red">——</span>
      <span class="marquee-item">SCALE</span><span class="marquee-item red">——</span>
      <span class="marquee-item">CUSTODY</span><span class="marquee-item red">——</span>
      <span class="marquee-item">DEFI</span><span class="marquee-item red">——</span>
      <span class="marquee-item">WEB3</span><span class="marquee-item red">——</span>
    </div>
  </div>

  <section class="section">
    <div class="container split-layout">
      <div class="reveal">
        <span class="eyebrow">The Infrastructure</span>
        <h2 class="section-heading">The Infrastructure Behind Your Digital Assets.</h2>
        <p class="section-body" style="margin-bottom: 40px;">Most custodians hand you an API and disappear. Fireblox is different. We deliver dedicated, institutional-grade digital asset infrastructure with real-time visibility into every wallet, every transaction, every SLA — through a platform your compliance team actually wants to use.</p>
        <button class="btn btn-outline" onclick="goPage('platform')">See the Platform</button>
      </div>
      <div class="orb-module reveal">
        <div class="orbit-ring"></div>
        <div class="orbit-ring"></div>
        <div class="inner-orb"></div>
      </div>
    </div>
  </section>

  <div class="logo-marquee-wrap">
    <div class="marquee-track">
      <span class="logo-item">J.P. Morgan</span><span class="logo-item">Goldman Sachs</span>
      <span class="logo-item">BlackRock</span><span class="logo-item">Fidelity</span>
      <span class="logo-item">Deutsche Bank</span><span class="logo-item">Standard Chartered</span>
      <span class="logo-item">BNY Mellon</span><span class="logo-item">Coinbase</span>
      <!-- Duplicate -->
      <span class="logo-item">J.P. Morgan</span><span class="logo-item">Goldman Sachs</span>
      <span class="logo-item">BlackRock</span><span class="logo-item">Fidelity</span>
      <span class="logo-item">Deutsche Bank</span><span class="logo-item">Standard Chartered</span>
      <span class="logo-item">BNY Mellon</span><span class="logo-item">Coinbase</span>
    </div>
  </div>

  <section class="section" style="padding-bottom: 40px;">
    <div class="container reveal">
      <span class="eyebrow">What We Deliver</span>
      <h2 class="section-heading-sm" style="max-width:600px;">Connectivity products built for institutions that don't compromise.</h2>
    </div>
  </section>

  <div class="grid-3">
    <div class="card reveal">
      <div class="card-num">01</div>
      <div class="card-tags"><span class="tag">MPC</span><span class="tag">Symmetric</span><span class="tag">SLA</span></div>
      <h3 class="card-title">MPC Wallet Technology</h3>
      <p class="card-desc">Dedicated, symmetric key management with guaranteed SLA. No seed phrases, no single points of failure, no compromise.</p>
    </div>
    <div class="card reveal">
      <div class="card-num">02</div>
      <div class="card-tags"><span class="tag">Private</span><span class="tag">Multi-chain</span><span class="tag">QoS</span></div>
      <h3 class="card-title">Policy Engine</h3>
      <p class="card-desc">Private multi-chain transaction governance with quality-of-service controls and customizable approval workflows.</p>
    </div>
    <div class="card reveal">
      <div class="card-num">03</div>
      <div class="card-tags"><span class="tag">Hybrid</span><span class="tag">App-Aware</span></div>
      <h3 class="card-title">DeFi & Web3 Access</h3>
      <p class="card-desc">Application-aware routing across hybrid on-chain and off-chain environments with centralized control and audit logs.</p>
    </div>
    <div class="card reveal">
      <div class="card-num">04</div>
      <div class="card-tags"><span class="tag">Firewall</span><span class="tag">AML</span><span class="tag">Monitoring</span></div>
      <h3 class="card-title">Compliance Suite</h3>
      <p class="card-desc">Enterprise-grade AML screening, transaction monitoring, and regulatory reporting — fully managed at the infrastructure layer.</p>
    </div>
    <div class="card reveal">
      <div class="card-num">05</div>
      <div class="card-tags"><span class="tag">CEX</span><span class="tag">DEX</span><span class="tag">Peering</span></div>
      <h3 class="card-title">Exchange Connect</h3>
      <p class="card-desc">Direct connectivity to CEX and DEX platforms with private peering for low-latency order execution and settlement.</p>
    </div>
    <div class="card reveal">
      <div class="card-num">06</div>
      <div class="card-tags"><span class="tag">EVM</span><span class="tag">Non-EVM</span><span class="tag">L2</span></div>
      <h3 class="card-title">Multi-Chain Support</h3>
      <p class="card-desc">50+ blockchains including all major EVM chains, Solana, Cosmos, and leading Layer 2 networks under a single unified API.</p>
    </div>
  </div>

  <div class="dashboard-wrap">
    <div class="container reveal">
      <span class="eyebrow">Live Platform</span>
      <h2 class="section-heading-sm">Every wallet. Every metric. One dashboard.</h2>
      <p class="section-body" style="margin-bottom: 48px;">No more calling your account manager for a status update. Monitor, transact, raise tickets — all in real-time.</p>
      
      <div class="dashboard-inner">
        <div class="dash-header">
          <div class="dash-logo"><div class="dash-n">F</div>FIREBLOX</div>
          <div class="dash-nav">
            <span class="active">Wallets</span><span>Network</span><span>Tickets</span><span>Orders</span><span>Billing</span>
          </div>
        </div>
        <div class="dash-body">
          <div class="dash-kpi"><div class="dash-kpi-label">Active Wallets</div><div class="dash-kpi-val">248</div></div>
          <div class="dash-kpi"><div class="dash-kpi-label">Wallets at Risk</div><div class="dash-kpi-val red">0</div></div>
          <div class="dash-kpi"><div class="dash-kpi-label">Current SLA</div><div class="dash-kpi-val green">99.97%</div></div>
          <div class="dash-kpi"><div class="dash-kpi-label">Open Tickets</div><div class="dash-kpi-val">3</div></div>
          <div class="dash-table-wrap">
            <div class="dash-table-title">Wallet Health <span class="live-pill">LIVE</span></div>
            <table>
              <thead><tr><th>Wallet ID</th><th>Type</th><th>Balance</th><th>Last Tx</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td class="mono">ETH-INST-001</td><td><span class="tag">MPC</span></td><td class="mono">$42,300,000</td><td>2m ago</td><td class="green-val">● Healthy</td></tr>
                <tr><td class="mono">BTC-CUST-014</td><td><span class="tag">Cold</span></td><td class="mono">$218,000,000</td><td>1h ago</td><td class="green-val">● Healthy</td></tr>
                <tr><td class="mono">SOL-DeFi-007</td><td><span class="tag">Hot</span></td><td class="mono">$8,100,000</td><td>12m ago</td><td class="green-val">● Healthy</td></tr>
                <tr><td class="mono">USDC-TR-033</td><td><span class="tag">MPC</span></td><td class="mono">$95,000,000</td><td>5m ago</td><td class="green-val">● Healthy</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="cta-banner">
    <div class="reveal">
      <h2 class="cta-heading">Ready to verify?<br><em>See what Tier-1 looks like.</em></h2>
      <p class="section-body">Check feasibility at your institution in under 24 hours.</p>
    </div>
    <div class="reveal" style="display:flex;flex-direction:column;align-items:flex-start;gap:16px;">
      <button class="btn btn-primary" onclick="goPage('feasibility')">Check Feasibility</button>
      <span style="font-family:var(--font-mono);font-size:10px;color:var(--text-tertiary);text-transform:uppercase;">Free check · No commitment</span>
    </div>
  </div>
</div>
<!-- /page-home -->

<div class="page" id="page-products">
  <div class="inner-hero">
    <div class="container reveal">
      <span class="page-label">Products</span>
      <h1 class="page-title">Built for Institutions.<br>Trusted by Scale.</h1>
      <p class="section-body">Every product in the Fireblox suite is engineered for institutional-grade performance, compliance, and reliability — with zero compromise on security or transparency.</p>
    </div>
  </div>

  <div class="grid-3" style="border-top:none">
    <div class="card reveal">
      <div class="card-num">01</div>
      <div class="card-tags"><span class="tag">MPC</span><span class="tag">Cold</span><span class="tag">Hot</span></div>
      <h3 class="card-title">MPC Wallet Technology</h3>
      <p class="card-desc">Eliminate single points of failure with our proprietary multi-party computation. No seed phrases, no private key exposure — ever. Supports cold, warm and hot wallet policies from a single unified interface.</p>
    </div>
    <div class="card reveal">
      <div class="card-num">02</div>
      <div class="card-tags"><span class="tag">Governance</span><span class="tag">Automation</span></div>
      <h3 class="card-title">Policy Engine</h3>
      <p class="card-desc">Define transaction rules, approval chains, and automated workflows at the wallet, user, and asset level. Real-time policy enforcement with full audit trail and rollback capability.</p>
    </div>
    <div class="card reveal">
      <div class="card-num">03</div>
      <div class="card-tags"><span class="tag">DEX</span><span class="tag">CEX</span><span class="tag">L2</span></div>
      <h3 class="card-title">DeFi & Web3 Access</h3>
      <p class="card-desc">Connect to 200+ DeFi protocols and dApps with enterprise-grade security policies. WalletConnect, Metamask Institutional, and direct smart contract interaction.</p>
    </div>
  </div>

  <section class="section">
    <div class="container reveal">
      <span class="eyebrow">Pricing</span>
      <h2 class="section-heading">Simple, Transparent Pricing</h2>
    </div>
  </section>
  
  <div class="grid-3">
    <div class="pricing-card reveal">
      <span class="price-tier">Starter</span>
      <h3 class="price-name">Growth</h3>
      <p class="section-body" style="font-size:14px; margin-bottom:32px; padding-bottom:32px; border-bottom:1px solid var(--border-light)">For emerging institutions and crypto-native firms getting started.</p>
      <ul class="price-features">
        <li>Up to 50 wallets</li>
        <li>5 blockchain networks</li>
        <li>Basic policy engine</li>
        <li>REST API access</li>
      </ul>
      <button class="btn btn-outline" style="width:100%" onclick="goPage('feasibility')">Get Started</button>
    </div>
    <div class="pricing-card featured reveal">
      <div class="pricing-badge">Most Popular</div>
      <span class="price-tier">Enterprise</span>
      <h3 class="price-name">Professional</h3>
      <p class="section-body" style="font-size:14px; margin-bottom:32px; padding-bottom:32px; border-bottom:1px solid var(--border-light)">For banks, funds, and exchanges that need full compliance coverage.</p>
      <ul class="price-features">
        <li>Unlimited wallets</li>
        <li>All 50+ blockchains</li>
        <li>Advanced policy engine</li>
        <li>AML/KYT compliance</li>
      </ul>
      <button class="btn btn-primary" style="width:100%" onclick="goPage('feasibility')">Request Demo</button>
    </div>
    <div class="pricing-card reveal">
      <span class="price-tier">Global</span>
      <h3 class="price-name">Sovereign</h3>
      <p class="section-body" style="font-size:14px; margin-bottom:32px; padding-bottom:32px; border-bottom:1px solid var(--border-light)">For central banks and Tier-1 financial institutions.</p>
      <ul class="price-features">
        <li>On-premises deployment</li>
        <li>Custom chain integrations</li>
        <li>White-label platform</li>
        <li>24/7 dedicated SRE team</li>
      </ul>
      <button class="btn btn-outline" style="width:100%" onclick="goPage('feasibility')">Contact Sales</button>
    </div>
  </div>
</div>
<!-- /page-products -->

<div class="page" id="page-feasibility">
  <div class="inner-hero">
    <div class="container reveal">
      <span class="page-label">Request Feasibility</span>
      <h1 class="page-title">Check Feasibility at<br>Your Institution.</h1>
      <p class="section-body">Tell us about your setup. We'll come back within 24 hours with a full feasibility assessment — which chains, which products, and what a deployment would look like for your specific context.</p>
    </div>
  </div>

  <section class="section">
    <div class="container split-layout uneven">
      <div class="reveal">
        <span class="eyebrow">Get Started</span>
        <h2 class="section-heading-sm">Fill in your details</h2>
        <form class="form-grid" onsubmit="event.preventDefault(); alert('Request submitted. We will contact you within 24 hours.');">
          <div class="form-group"><label>First Name</label><input type="text" class="form-control" placeholder="Arjun" required></div>
          <div class="form-group"><label>Last Name</label><input type="text" class="form-control" placeholder="Mehta" required></div>
          <div class="form-group"><label>Work Email</label><input type="email" class="form-control" placeholder="arjun@institution.com" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" class="form-control" placeholder="+1 (555) 000-0000"></div>
          <div class="form-group full"><label>Institution Name</label><input type="text" class="form-control" placeholder="Global Capital Partners" required></div>
          <div class="form-group full"><label>Institution Type</label>
            <select class="form-control" required>
              <option value="">Select type…</option>
              <option>Bank / Fintech</option>
              <option>Hedge Fund / Asset Manager</option>
              <option>Crypto Exchange</option>
            </select>
          </div>
          <div class="form-group full"><label>Tell us more</label><textarea class="form-control" placeholder="What blockchains are you targeting? What's your current custody setup?"></textarea></div>
          <div class="form-group full">
            <button type="submit" class="btn btn-primary" style="align-self: flex-start;">Submit Request</button>
          </div>
        </form>
      </div>
      
      <div class="reveal" style="display:flex; flex-direction:column; gap:24px;">
        <div style="padding:48px; background:var(--bg-surface); border:1px solid var(--border-strong);">
          <span class="eyebrow">What happens next</span>
          <div class="timeline-items" style="gap:32px;">
            <div style="display:flex; gap:24px;">
              <div style="font-family:var(--font-mono); font-size:12px; color:var(--text-tertiary);">01</div>
              <div><h4 style="font-size:16px; margin-bottom:8px;">Technical Review</h4><p style="font-size:14px; color:var(--text-secondary);">Our solutions team reviews your requirements against our infrastructure.</p></div>
            </div>
            <div style="display:flex; gap:24px;">
              <div style="font-family:var(--font-mono); font-size:12px; color:var(--text-tertiary);">02</div>
              <div><h4 style="font-size:16px; margin-bottom:8px;">24h Report</h4><p style="font-size:14px; color:var(--text-secondary);">Receive a tailored assessment on supported chains and timelines.</p></div>
            </div>
            <div style="display:flex; gap:24px;">
              <div style="font-family:var(--font-mono); font-size:12px; color:var(--text-tertiary);">03</div>
              <div><h4 style="font-size:16px; margin-bottom:8px;">Live Demo</h4><p style="font-size:14px; color:var(--text-secondary);">We walk you through the platform specifically configured for your context.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<!-- (Placeholders for other pages to ensure routing works without breaking) -->
<div class="page" id="page-solutions"><div class="inner-hero"><div class="container"><h1 class="page-title">Solutions</h1><p class="section-body">Infrastructure tailored for your specific institution type.</p></div></div></div>
<div class="page" id="page-platform"><div class="inner-hero"><div class="container"><h1 class="page-title">Platform</h1><p class="section-body">The single pane of glass for all your digital asset operations.</p></div></div></div>
<div class="page" id="page-network"><div class="inner-hero"><div class="container"><h1 class="page-title">Network</h1><p class="section-body">Direct node infrastructure across 50+ blockchains.</p></div></div></div>
<div class="page" id="page-company"><div class="inner-hero"><div class="container"><h1 class="page-title">Company</h1><p class="section-body">The team building the infrastructure that didn't exist.</p></div></div></div>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="logo" style="margin-bottom:24px">FIREBLOX</div>
        <p class="section-body" style="font-size:14px; margin-bottom:24px;">The enterprise digital asset infrastructure company.</p>
        <div class="status-banner" style="margin-top:0; padding:8px 16px;">
          <div class="status-dot"></div><div class="status-text">All Systems Operational</div>
        </div>
      </div>
      <div class="footer-col">
        <h4>Platform</h4>
        <ul>
          <li><a onclick="goPage('products')">MPC Wallets</a></li>
          <li><a onclick="goPage('products')">Policy Engine</a></li>
          <li><a onclick="goPage('platform')">Compliance</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a onclick="goPage('company')">About</a></li>
          <li><a onclick="goPage('company')">Careers</a></li>
          <li><a onclick="goPage('feasibility')">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">API Docs</a></li>
          <li><a href="#">SDK Reference</a></li>
          <li><a href="#">System Status</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Fireblox Inc. All rights reserved.</p>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

<script>
// Nav Scroll Effect
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile Menu Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  hamburgerBtn.classList.remove('open');
  mobileMenu.classList.remove('open');
}

// Page Router
function goPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === name);
  });
  
  window.scrollTo({top: 0, behavior: 'instant'});
  
  // Re-trigger reveal animations
  setTimeout(initReveal, 50);
}

// Intersection Observer for Reveal Animations
function initReveal() {
  const reveals = document.querySelectorAll('.page.active .reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(reveal => {
    reveal.classList.remove('active');
    revealObserver.observe(reveal);
  });
}

// Run on load
document.addEventListener('DOMContentLoaded', initReveal);
</script>
</body>
</html>I0
