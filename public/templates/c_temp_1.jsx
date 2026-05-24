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