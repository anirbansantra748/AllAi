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