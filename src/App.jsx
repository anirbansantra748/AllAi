import React, { useState, useEffect, Suspense } from 'react';
import { reactTemplates } from './templates/registry.jsx';
import { 
  Sparkles, 
  Search, 
  Code, 
  Eye, 
  Layers, 
  Sun, 
  Moon, 
  ArrowLeft, 
  ExternalLink, 
  Copy, 
  Check, 
  HelpCircle,
  FileCode,
  Laptop,
  ArrowUpRight,
  Filter,
  RefreshCw,
  FolderOpen,
  Atom,
  Palette,
  LayoutGrid,
  X
} from 'lucide-react';

function TemplateThumbnail({ template }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed) {
    const gradients = [
      'from-blue-600 to-indigo-900',
      'from-purple-600 to-pink-900',
      'from-emerald-600 to-teal-900',
      'from-rose-600 to-orange-900',
      'from-cyan-600 to-blue-900',
      'from-violet-600 to-purple-900'
    ];
    const gradient = gradients[template.id % gradients.length];
    
    return (
      <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col justify-between p-6 select-none relative group-hover:scale-105 transition-all duration-500`}>
        <div className="flex justify-between items-start">
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/30 border border-white/10 text-white/90">
            #{template.id}
          </span>
          <span className="text-[9px] font-mono tracking-widest uppercase font-bold text-white/70 bg-white/10 px-2 py-0.5 rounded">
            {template.type}
          </span>
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-white font-sans leading-tight line-clamp-3">
            {template.title || `Template #${template.id}`}
          </h4>
          <span className="text-[9px] font-mono text-white/50 block">
            {template.style} • {template.category}
          </span>
        </div>
        <div className="absolute -bottom-6 -right-6 opacity-10">
          <Sparkles className="w-24 h-24 text-white" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full overflow-hidden relative bg-zinc-950 transition-all select-none">
      <img
        src={`/screenshots/${template.id}.png`}
        alt={`Preview of template ${template.id}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
        </div>
      )}
    </div>
  );
}

export default function App() {
  // Routing State
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  // App Metadata & Filtering State
  const [metadata, setMetadata] = useState([]);
  const [loadingMetadata, setLoadingMetadata] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTech, setActiveTech] = useState('all'); // 'all' | 'react' | 'html'
  const [activeTheme, setActiveTheme] = useState('all'); // 'all' | 'light' | 'dark'
  const [activeStyle, setActiveStyle] = useState('all'); // 'all' | 'glassmorphism' | 'neomorphism' | 'retro' | 'minimalist' | 'modern'
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'Landing Page' | 'Portfolio' | 'Dashboard' | 'Interactive / Game' | 'SaaS Product'
  
  // Source Code Modal State
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [selectedTemplateForCode, setSelectedTemplateForCode] = useState(null);
  const [sourceCode, setSourceCode] = useState('');
  const [loadingCode, setLoadingCode] = useState(false);
  const [copied, setCopied] = useState(false);

  // Floating Control Bar in Template Preview
  const [isControlBarCollapsed, setIsControlBarCollapsed] = useState(false);

  // Handle URL change
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Parse path to see if it is a template ID or a filter route
  // Examples: /12, /style/glassmorphism, /theme/dark, /category/portfolio
  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fetch metadata JSON
  useEffect(() => {
    fetch('/templates_metadata.json')
      .then(res => res.json())
      .then(data => {
        setMetadata(data);
        setLoadingMetadata(false);
        
        // Parse filter routes on initial load
        const pathParts = window.location.pathname.split('/').filter(Boolean);
        if (pathParts.length === 2) {
          const [filterType, value] = pathParts;
          const decodedValue = decodeURIComponent(value);
          if (filterType === 'style') setActiveStyle(decodedValue);
          if (filterType === 'theme') setActiveTheme(decodedValue);
          if (filterType === 'category') setActiveCategory(decodedValue);
          if (filterType === 'tech') setActiveTech(decodedValue);
        }
      })
      .catch(err => {
        console.error("Failed to load templates metadata:", err);
        setLoadingMetadata(false);
      });
  }, []);

  // Open Code Modal
  const openCodeModal = (template, e) => {
    if (e) e.stopPropagation();
    setSelectedTemplateForCode(template);
    setCodeModalOpen(true);
    setLoadingCode(true);
    setSourceCode('');
    
    fetch(`/templates/${template.filename}`)
      .then(res => res.text())
      .then(text => {
        setSourceCode(text);
        setLoadingCode(false);
      })
      .catch(err => {
        console.error("Failed to load source code:", err);
        setSourceCode("Failed to load source code. Please try again.");
        setLoadingCode(false);
      });
  };

  // Copy code to clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Route matches
  const matchTemplateId = currentPath.split('/').filter(Boolean)[0];
  const isNumericRoute = matchTemplateId && !isNaN(matchTemplateId);
  const activeTemplate = isNumericRoute ? metadata.find(item => item.id === parseInt(matchTemplateId)) : null;

  // Filter templates list
  const filteredTemplates = metadata.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.source_file.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTech = activeTech === 'all' || item.type === activeTech;
    const matchesTheme = activeTheme === 'all' || item.theme === activeTheme;
    const matchesStyle = activeStyle === 'all' || item.style === activeStyle;
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

    return matchesSearch && matchesTech && matchesTheme && matchesStyle && matchesCategory;
  });

  // Unique lists for filters
  const stylesList = ['glassmorphism', 'neomorphism', 'retro', 'minimalist', 'modern'];
  const categoriesList = ['Landing Page', 'Portfolio', 'Dashboard', 'Interactive / Game', 'SaaS Product'];

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setActiveTech('all');
    setActiveTheme('all');
    setActiveStyle('all');
    setActiveCategory('all');
    navigate('/');
  };

  // RENDER DYNAMIC PREVIEW IF TEMPLATE ACTIVE
  if (isNumericRoute) {
    if (loadingMetadata) {
      return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-zinc-950 font-mono text-zinc-400">
          <RefreshCw className="h-8 w-8 animate-spin text-blue-500 mb-4" />
          <span>Loading portfolio environment...</span>
        </div>
      );
    }

    if (!activeTemplate) {
      return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-zinc-950 font-mono text-zinc-400">
          <HelpCircle className="h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-xl font-bold text-white mb-2">Template Not Found</h1>
          <p className="text-sm text-zinc-500 mb-6">Template ID {matchTemplateId} does not exist in this workspace.</p>
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all text-xs font-semibold uppercase tracking-wider"
          >
            <ArrowLeft className="h-4 w-4" /> Return to Workspace
          </button>
        </div>
      );
    }

    const isEmbed = window.location.search.includes('embed=true');

    // Load React template component if React
    let ReactComponent = null;
    if (activeTemplate.type === 'react') {
      ReactComponent = reactTemplates[activeTemplate.id];
    }

    if (isEmbed) {
      return (
        <div className="w-full h-full relative overflow-hidden bg-zinc-950">
          {activeTemplate.type === 'html' ? (
            <iframe 
              src={`/templates/${activeTemplate.filename}`} 
              title={activeTemplate.title}
              className="w-full h-full border-none bg-white"
              sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
            />
          ) : (
            <div className="w-full h-full overflow-y-auto bg-zinc-950">
              <Suspense fallback={
                <div className="flex h-full w-full flex-col items-center justify-center font-mono text-zinc-400 py-12">
                  <RefreshCw className="h-5 w-5 animate-spin text-emerald-400 mb-2" />
                  <span>Loading React page...</span>
                </div>
              }>
                {ReactComponent ? <ReactComponent /> : null}
              </Suspense>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="relative h-screen w-screen bg-zinc-950 overflow-hidden flex flex-col">
        
        {/* COLLAPSIBLE TOP FLOATING CONTROL BAR */}
        <div className={`transition-all duration-300 z-50 bg-zinc-900/95 border-b border-zinc-800 backdrop-blur-md px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 shrink-0 ${isControlBarCollapsed ? '-translate-y-full absolute top-0 left-0 right-0 h-0 p-0 overflow-hidden border-none' : ''}`}>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              onClick={() => navigate('/')} 
              className="flex items-center justify-center h-10 w-10 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all shadow-md"
              title="Back to portfolio explorer"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-blue-500/10 text-blue-400 text-[10px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded border border-blue-500/20">
                  ID: #{activeTemplate.id}
                </span>
                <span className={`text-[10px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded border capitalize ${activeTemplate.type === 'react' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-purple-500/10 text-purple-400 border-purple-500/20'}`}>
                  {activeTemplate.type}
                </span>
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-mono px-2 py-0.5 rounded uppercase">
                  {activeTemplate.style}
                </span>
                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-mono px-2 py-0.5 rounded">
                  {activeTemplate.category}
                </span>
              </div>
              <h1 className="text-sm md:text-base font-bold text-white mt-1 truncate max-w-md md:max-w-xl" title={activeTemplate.title}>
                {activeTemplate.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button 
              onClick={(e) => openCodeModal(activeTemplate, e)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 hover:text-white transition-all text-xs font-semibold"
            >
              <Code className="h-4 w-4 text-blue-400" /> Source Code
            </button>
            <a 
              href={`/templates/${activeTemplate.filename}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 hover:text-white transition-all text-xs font-semibold"
            >
              <ExternalLink className="h-4 w-4 text-purple-400" /> Full Window
            </a>
            <button
              onClick={() => setIsControlBarCollapsed(true)}
              className="px-3 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all border border-transparent hover:border-zinc-700"
            >
              Collapse UI
            </button>
          </div>
        </div>

        {/* COLLAPSED UI TOGGLE BAR (Floats when collapsed) */}
        {isControlBarCollapsed && (
          <button
            onClick={() => setIsControlBarCollapsed(false)}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-blue-500/50 text-xs font-semibold text-zinc-300 hover:text-white shadow-2xl backdrop-blur-md flex items-center gap-2 transition-all hover:scale-105"
          >
            <Layers className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
            <span>Show Control Bar</span>
          </button>
        )}

        {/* TEMPLATE CONTAINER */}
        <div className="flex-1 w-full h-full relative overflow-hidden bg-zinc-900">
          {activeTemplate.type === 'html' ? (
            <iframe 
              src={`/templates/${activeTemplate.filename}`} 
              title={activeTemplate.title}
              className="w-full h-full border-none bg-white"
              sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
            />
          ) : (
            <div className="w-full h-full overflow-y-auto bg-zinc-950">
              <Suspense fallback={
                <div className="flex h-full w-full flex-col items-center justify-center font-mono text-zinc-400 py-24">
                  <RefreshCw className="h-8 w-8 animate-spin text-emerald-400 mb-4" />
                  <span>Mounting React layout engine...</span>
                </div>
              }>
                {ReactComponent ? <ReactComponent /> : (
                  <div className="p-8 text-center text-red-500 font-mono">
                    Failed to mount dynamic component entry point.
                  </div>
                )}
              </Suspense>
            </div>
          )}
        </div>

        {/* Dynamic Code Viewer Modal */}
        {renderCodeModal()}
      </div>
    );
  }

  // RENDER MAIN PORTFOLIO EXPLORER
  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden pb-24">
      {/* Decorative cosmic background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* HEADER SECTION */}
      <header className="border-b border-zinc-900 sticky top-0 bg-zinc-950/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            onClick={() => {
              if (currentPath === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
            className="flex items-center gap-3 cursor-pointer select-none group active:scale-98 transition-all"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300">
              <Sparkles className="h-5 w-5 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <h1 className="font-display text-lg font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">AI WORKSPACE</h1>
              <p className="text-[10px] text-zinc-500 font-mono tracking-widest -mt-0.5">PREMIUM PORTFOLIO</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-6 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <span>{metadata.length} Total Templates</span>
              </div>
              <div className="flex items-center gap-1.5 border-l border-zinc-800 pl-6">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>{metadata.filter(t => t.type === 'react').length} React Apps</span>
              </div>
              <div className="flex items-center gap-1.5 border-l border-zinc-800 pl-6">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                <span>{metadata.filter(t => t.type === 'html').length} HTML Pages</span>
              </div>
            </div>
            
            <a 
              href="https://vercel.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white transition-all shadow-md"
            >
              <span>Deploy live</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
            </a>
          </div>
        </div>
      </header>
 
      <main className="max-w-7xl mx-auto px-6 pt-16 relative z-10 space-y-12">
        
        {/* HERO SECTION */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/5 border border-blue-500/15">
            <Sparkles className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
            <span className="text-[10px] tracking-widest font-semibold text-blue-400 uppercase font-mono">
              Interactive Template Hub
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Curated Directory of <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {metadata.length} Premium AI Templates
            </span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
            An premium showcase containing beautiful React layouts and rich static HTML templates. Filter by styling, technology, categories, or light/dark mode. Direct API dynamic paths enable instant previews.
          </p>
        </section>

        {/* SEARCH AND FILTERS BAR */}
        <section className="glass-panel rounded-3xl p-6 md:p-8 shadow-2xl space-y-6 border border-zinc-900/80 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center relative z-10">
            
            {/* Search Box */}
            <div className="lg:col-span-6 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-zinc-500 group-focus-within:text-blue-400 transition-colors" />
              <input
                type="text"
                placeholder="Search by template name, style, filename or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 focus:border-blue-500/40 text-white placeholder-zinc-500 focus:outline-none transition-all text-sm shadow-inner focus:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white p-1 rounded-full hover:bg-zinc-800 transition-all"
                  title="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Tech Filter */}
            <div className="lg:col-span-3">
              <div className="flex p-1 bg-zinc-950/80 rounded-2xl border border-zinc-900 shadow-inner">
                <button
                  onClick={() => { setActiveTech('all'); navigate('/') }}
                  className={`flex-1 py-2.5 rounded-xl text-[11px] font-semibold transition-all flex items-center justify-center gap-1.5 ${activeTech === 'all' ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  <Layers className="h-3.5 w-3.5" />
                  All Tech
                </button>
                <button
                  onClick={() => { setActiveTech('react'); navigate('/tech/react') }}
                  className={`flex-1 py-2.5 rounded-xl text-[11px] font-semibold transition-all flex items-center justify-center gap-1.5 ${activeTech === 'react' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  <Atom className="h-3.5 w-3.5" />
                  React
                </button>
                <button
                  onClick={() => { setActiveTech('html'); navigate('/tech/html') }}
                  className={`flex-1 py-2.5 rounded-xl text-[11px] font-semibold transition-all flex items-center justify-center gap-1.5 ${activeTech === 'html' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  <FileCode className="h-3.5 w-3.5" />
                  HTML
                </button>
              </div>
            </div>

            {/* Theme Filter */}
            <div className="lg:col-span-3">
              <div className="flex p-1 bg-zinc-950/80 rounded-2xl border border-zinc-900 shadow-inner">
                <button
                  onClick={() => { setActiveTheme('all'); navigate('/') }}
                  className={`flex-1 py-2.5 rounded-xl text-[11px] font-semibold transition-all flex items-center justify-center gap-1.5 ${activeTheme === 'all' ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  <Laptop className="h-3.5 w-3.5" />
                  All
                </button>
                <button
                  onClick={() => { setActiveTheme('light'); navigate('/theme/light') }}
                  className={`flex-1 py-2.5 rounded-xl text-[11px] font-semibold transition-all flex items-center justify-center gap-1.5 ${activeTheme === 'light' ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  <Sun className="h-3.5 w-3.5 text-amber-500" />
                  Light
                </button>
                <button
                  onClick={() => { setActiveTheme('dark'); navigate('/theme/dark') }}
                  className={`flex-1 py-2.5 rounded-xl text-[11px] font-semibold transition-all flex items-center justify-center gap-1.5 ${activeTheme === 'dark' ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  <Moon className="h-3.5 w-3.5 text-blue-400" />
                  Dark
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-900/60 pt-6 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 relative z-10">
            {/* Tag-based filters */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full xl:w-auto">
              
              {/* Style Filter list */}
              <div className="space-y-2 w-full md:w-auto">
                <div className="flex items-center gap-1.5 text-zinc-500">
                  <Palette className="h-3.5 w-3.5 text-blue-400/80" />
                  <span className="text-[10px] font-mono uppercase tracking-wider block">Design Aesthetics</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => { setActiveStyle('all'); navigate('/') }}
                    className={`px-3 py-1.5 rounded-xl text-xs transition-all ${activeStyle === 'all' ? 'bg-gradient-to-r from-blue-600/25 to-indigo-600/25 text-blue-400 border border-blue-500/30 shadow-[0_4px_12px_rgba(59,130,246,0.15)] font-semibold' : 'bg-zinc-900/40 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800/40'}`}
                  >
                    All Styles
                  </button>
                  {stylesList.map(st => (
                    <button
                      key={st}
                      onClick={() => { setActiveStyle(st); navigate(`/style/${encodeURIComponent(st)}`) }}
                      className={`px-3 py-1.5 rounded-xl text-xs capitalize transition-all ${activeStyle === st ? 'bg-gradient-to-r from-blue-600/25 to-indigo-600/25 text-blue-400 border border-blue-500/30 shadow-[0_4px_12px_rgba(59,130,246,0.15)] font-semibold' : 'bg-zinc-900/40 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800/40'}`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter list */}
              <div className="space-y-2 w-full md:w-auto">
                <div className="flex items-center gap-1.5 text-zinc-500">
                  <LayoutGrid className="h-3.5 w-3.5 text-violet-400/80" />
                  <span className="text-[10px] font-mono uppercase tracking-wider block">Functional Category</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => { setActiveCategory('all'); navigate('/') }}
                    className={`px-3 py-1.5 rounded-xl text-xs transition-all ${activeCategory === 'all' ? 'bg-gradient-to-r from-violet-600/25 to-purple-600/25 text-violet-400 border border-violet-500/30 shadow-[0_4px_12px_rgba(139,92,246,0.15)] font-semibold' : 'bg-zinc-900/40 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800/40'}`}
                  >
                    All Categories
                  </button>
                  {categoriesList.map(cat => (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat); navigate(`/category/${encodeURIComponent(cat)}`) }}
                      className={`px-3 py-1.5 rounded-xl text-xs transition-all ${activeCategory === cat ? 'bg-gradient-to-r from-violet-600/25 to-purple-600/25 text-violet-400 border border-violet-500/30 shadow-[0_4px_12px_rgba(139,92,246,0.15)] font-semibold' : 'bg-zinc-900/40 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800/40'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Filter Actions */}
            <div className="shrink-0 flex items-center justify-between w-full xl:w-auto gap-4 border-t border-zinc-900/40 xl:border-none pt-4 xl:pt-0">
              {(searchQuery || activeTech !== 'all' || activeTheme !== 'all' || activeStyle !== 'all' || activeCategory !== 'all') ? (
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all flex items-center gap-2 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] group"
                >
                  <RefreshCw className="h-3 w-3 group-hover:rotate-180 transition-transform duration-500" />
                  Reset Filters
                </button>
              ) : <div />}
              <span className="text-xs font-mono text-zinc-500 bg-zinc-950/60 px-3 py-1.5 rounded-xl border border-zinc-900">
                Found <span className="text-white font-bold">{filteredTemplates.length}</span> matches
              </span>
            </div>

          </div>
        </section>

        {/* TEMPLATE GRID */}
        {loadingMetadata ? (
          <div className="py-24 text-center text-zinc-500 font-mono flex flex-col items-center justify-center gap-4">
            <RefreshCw className="h-8 w-8 animate-spin text-blue-500" />
            <span>Loading template database...</span>
          </div>
        ) : filteredTemplates.length === 0 ? (
          <div className="py-24 text-center text-zinc-500 max-w-sm mx-auto space-y-4">
            <HelpCircle className="h-12 w-12 text-zinc-700 mx-auto" />
            <h3 className="text-white font-bold text-lg">No Templates Found</h3>
            <p className="text-zinc-500 text-sm">No results match your search and filter criteria. Try resetting all filters.</p>
            <button 
              onClick={resetFilters} 
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map(template => (
              <div
                key={template.id}
                onClick={() => navigate(`/${template.id}`)}
                className="group relative rounded-2xl glass-panel glass-panel-hover overflow-hidden cursor-pointer transition-all duration-300 h-64 border border-zinc-900"
              >
                {/* Visual template screenshot occupying full height by default */}
                <TemplateThumbnail template={template} />

                {/* Details Wrapper Overlay - visible only on hover */}
                <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 font-bold px-2 py-0.5 rounded">
                        ID: #{template.id}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border uppercase ${template.type === 'react' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-purple-500/10 text-purple-400 border-purple-500/20'}`}>
                          {template.type}
                        </span>
                        {template.theme === 'light' ? (
                          <div className="h-5 w-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center" title="Light Theme">
                            <Sun className="h-3 w-3 text-amber-500" />
                          </div>
                        ) : (
                          <div className="h-5 w-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center" title="Dark Theme">
                            <Moon className="h-3 w-3 text-blue-400" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-white group-hover:text-blue-400 text-sm leading-snug line-clamp-2 transition-colors">
                        {template.title}
                      </h3>
                      <p className="text-[9px] text-zinc-500 font-mono tracking-wider truncate">
                        Source: {template.source_file}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-zinc-900/60 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono uppercase">
                        {template.style}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono">
                        {template.category}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={(e) => openCodeModal(template, e)}
                        className="h-8 w-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                        title="View Source Code"
                      >
                        <Code className="h-4 w-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/${template.id}`);
                        }}
                        className="h-8 w-8 rounded-lg bg-blue-600/10 hover:bg-blue-600 border border-blue-500/20 hover:border-blue-500 flex items-center justify-center text-blue-400 hover:text-white transition-all"
                        title="Launch Preview"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

      </main>

      {/* Dynamic Code Viewer Modal */}
      {renderCodeModal()}
    </div>
  );

  // RENDER SOURCE CODE MODAL
  function renderCodeModal() {
    if (!codeModalOpen || !selectedTemplateForCode) return null;

    return (
      <div className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-fade-in">
        <div className="w-full max-w-4xl h-[85vh] bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
          {/* Modal Header */}
          <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between gap-4 bg-zinc-900/90 backdrop-blur shrink-0">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-zinc-800 flex items-center justify-center text-blue-400 border border-zinc-700">
                <FileCode className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 font-mono block leading-none mb-1">
                  SOURCE CODE // ID #{selectedTemplateForCode.id} ({selectedTemplateForCode.filename})
                </span>
                <h3 className="font-bold text-white text-sm md:text-base truncate max-w-md md:max-w-xl">
                  {selectedTemplateForCode.title}
                </h3>
              </div>
            </div>
            <button
              onClick={() => setCodeModalOpen(false)}
              className="text-xs text-zinc-500 hover:text-white bg-zinc-800 border border-zinc-750 px-3 py-1.5 rounded-xl transition-all"
            >
              Close
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-6 bg-zinc-950 font-mono text-xs text-zinc-300 relative">
            {loadingCode ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-500 gap-4">
                <RefreshCw className="h-6 w-6 animate-spin text-blue-500" />
                <span>Reading template source code...</span>
              </div>
            ) : (
              <div className="relative">
                {/* Float Actions inside code block */}
                <div className="absolute top-0 right-0 z-10 flex gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-750 text-zinc-300 hover:text-white transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-[10px] font-semibold text-emerald-400 font-sans">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span className="text-[10px] font-semibold font-sans">Copy Code</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`/templates/${selectedTemplateForCode.filename}`}
                    download={selectedTemplateForCode.filename}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-750 text-zinc-300 hover:text-white transition-all text-[10px] font-semibold font-sans"
                  >
                    Download
                  </a>
                </div>

                {/* Preformatted code block */}
                <pre className="overflow-x-auto whitespace-pre-wrap p-4 bg-zinc-900/40 border border-zinc-900 rounded-2xl leading-relaxed text-zinc-300 text-left">
                  <code>{sourceCode}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
