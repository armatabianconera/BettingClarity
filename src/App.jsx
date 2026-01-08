import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  ShieldAlert, 
  BrainCircuit, 
  Database, 
  LineChart, 
  Workflow, 
  ArrowRight, 
  Clock, 
  Ban, 
  ChevronRight,
  TrendingUp,
  FileText,
  Search,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  Users,
  Bot,
  Wallet,
  Scale,
  Zap,
  RefreshCw,
  ClipboardCheck,
  Target,
  Sparkles,
  BarChart3,
  Star,
  Lock,
  BookOpen,
  X,
  Loader2,
  ThumbsUp,
  PieChart,
  LayoutDashboard,
  PlayCircle,
  FileCheck,
  GraduationCap,
  Library,
  Video,
  MessageSquare,
  Cpu,
  Layers,
  Crown,
  Copy,
  ExternalLink,
  Play
} from 'lucide-react';

// --- NEW: Header Logo Component with Fallback ---
const HeaderLogo = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center gap-2">
      {!imgError ? (
        <img 
          src="logo.png" 
          alt="BettingClarity Logo" 
          className="w-8 h-8 object-contain rounded-lg" 
          onError={() => setImgError(true)} 
        />
      ) : (
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-black">
          <Workflow className="w-5 h-5" />
        </div>
      )}
      <span className="text-white font-bold text-xl tracking-tight">BettingClarity</span>
    </div>
  );
};

// --- NEW: Video Modal Component ---
const VideoModal = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose}></div>
      
      {/* Player Container */}
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-fade-in flex items-center justify-center">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-zinc-800 text-white/70 hover:text-white rounded-full transition-all border border-white/5"
        >
          <X size={20} />
        </button>
        
        {videoId ? (
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="BettingClarity Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        ) : (
          <div className="text-center p-8">
            <PlayCircle className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
            <p className="text-zinc-500 font-mono">Video link pending...</p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Global Styles for Font & Smooth Scroll ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    
    body {
      font-family: 'Inter', sans-serif;
      background-color: #0a0a0a;
      color: #ffffff;
    }
    
    .blob-green {
      position: absolute;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
      filter: blur(60px);
      z-index: 0;
      pointer-events: none;
    }

    .glass-panel {
      background: rgba(30, 30, 30, 0.6);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    
    /* Hide scrollbar for tab navigation on mobile */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .animate-fade-in {
      animation: fadeIn 0.4s ease-out forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
);

// --- Basic Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "relative inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] tracking-wide";
  
  const variants = {
    primary: "bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] border border-emerald-400/20",
    secondary: "bg-[#1e1e1e] hover:bg-[#2a2a2a] text-white border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 shadow-lg shadow-black/50",
    outline: "bg-transparent border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500",
    white: "bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }) => (
  <div className={`relative z-10 mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
      {title}
    </h2>
    {subtitle && <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = '', glow = false, allowOverflow = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`
    relative bg-[#1e1e1e] border border-white/5 rounded-xl p-8 
    transition-all duration-300 hover:border-white/10 hover:bg-[#252525]
    ${allowOverflow ? 'overflow-visible' : 'overflow-hidden'}
    ${glow ? 'shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)] border-emerald-500/20' : 'shadow-2xl shadow-black/40'} 
    ${onClick ? 'cursor-pointer hover:border-emerald-500/30' : ''}
    ${className}
  `}>
    {children}
  </div>
);

const LegalModal = ({ isOpen, onClose, title, src }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      
      {/* Modal */}
      <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl animate-fade-in">
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#0f0f0f] rounded-t-2xl">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Iframe Container - White background for standard HTML readability */}
        <div className="flex-grow bg-white w-full overflow-hidden">
          <iframe 
            src={src} 
            className="w-full h-full border-0 block"
            title={title}
          />
        </div>
        
        <div className="p-6 border-t border-white/5 bg-[#0f0f0f] rounded-b-2xl">
          <Button onClick={onClose} variant="secondary" className="w-full">
            Close Window
          </Button>
        </div>
      </div>
    </div>
  );
};

// --- New Core Components (Hero, Problem, Solution) ---

const Hero = ({ onWatchVideo }) => {
  const scrollToPricing = () => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0a0a0a] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
      <div className="blob-green top-0 left-1/2 -translate-x-1/2 opacity-20 blur-[100px] w-[800px] h-[800px] rounded-full z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Headline */}
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-40 leading-[1.1]">
        Stop Guessing. <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-white">
          Start Deciding.
        </span>
      </h1>
        
        {/* Buttons (Preserved) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button onClick={scrollToPricing} className="h-14 px-8 text-lg shadow-[0_0_50px_-10px_rgba(16,185,129,0.5)]">
            Get Started Now
            <ArrowRight size={20} className="ml-2" />
          </Button>
          <Button variant="secondary" className="h-14 px-8 text-lg bg-[#0a0a0a] hover:bg-[#1a1a1a]" onClick={onWatchVideo}>
            <PlayCircle size={20} className="mr-2" />
            Watch How It Works
          </Button>
        </div>

        {/* 3 Bullet Points (Preserved) */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 text-left relative z-10">
        <div className="bg-zinc-900/90 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:border-emerald-500/30 transition-colors shadow-lg shadow-black/50">
          <div className="flex items-center gap-1 text-emerald-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-emerald-400" />)}
          </div>
          <p className="text-zinc-200 text-sm mb-4 leading-relaxed">
            “The biggest improvement wasn’t better bets- it was better no-bets. BettingClarity helped me understand when not acting is the correct decision.”
          </p>
          <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">M</div>
            <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Marko, Finland</div>
          </div>
        </div>

        <div className="bg-zinc-900/90 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:border-emerald-500/30 transition-colors shadow-lg shadow-black/50">
          <div className="flex items-center gap-1 text-emerald-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-emerald-400" />)}
          </div>
          <p className="text-zinc-200 text-sm mb-4 leading-relaxed">
            “BettingClarity was the first tool that made me realize I wasn’t losing on odds. I was losing on timing and emotions. The Decision Journal alone changed how often I say PASS.”
          </p>
          <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">J</div>
            <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Jonas, Norway</div>
          </div>
        </div>

        <div className="bg-zinc-900/90 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:border-emerald-500/30 transition-colors shadow-lg shadow-black/50">
          <div className="flex items-center gap-1 text-emerald-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-emerald-400" />)}
          </div>
          <p className="text-zinc-200 text-sm mb-4 leading-relaxed">
            “Just access to the prompt library and the courses completely changed how I watch and think about matches. I enjoy betting more now, because I understand my decisions instead of chasing outcomes.”
          </p>
          <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">L</div>
            <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Leon, Malta</div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

const Problem = () => (
  // Increased pb-32 to pb-48 for more spacing below text
  <section className="relative pt-32 pb-48 bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Centered Headline - Bigger & Bolder */}
      <div className="relative z-10 mb-0 max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
          It’s not bad luck. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-white">
            It’s unmanaged decisions.
          </span>
        </h2>
        <p className="text-2xl md:text-3xl text-zinc-300 max-w-4xl mx-auto leading-relaxed font-light">
          Most bettors don’t lose because they lack information- they lose because they lack a system to control decisions under pressure.
        </p>
      </div>
    </div>
    {/* Separator positioned at the bottom of the section */}
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
  </section>
);

const Solution = () => (
  <section className="relative pt-4 pb-24 overflow-hidden">
    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Dashboard Screenshot - UPDATED */}
      <div className="mb-24 relative mx-auto max-w-5xl group">
          <div className="absolute -inset-1 bg-gradient-to-t from-emerald-500/20 via-emerald-500/5 to-transparent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
          <div className="relative rounded-2xl border border-white/10 bg-[#050505] overflow-hidden shadow-2xl">
              {/* Mock Browser Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0a0a0a]">
                  <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
                      <div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
                      <div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
                  </div>
                  <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Dashboard Preview</div>
                  <div className="w-10"></div> {/* Spacer for centering */}
              </div>
              
              {/* Image Container */}
              <div className="relative aspect-[16/9] w-full bg-[#0a0a0a] flex items-center justify-center">
                  <img 
                      src="solution-dashboard-overview-1200x675.webp" 
                      alt="Dashboard Interface" 
                      className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60"></div>
              </div>
          </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
        <div className="mb-12 lg:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Your insurance against<br />
            <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">bad decisions.</span>
          </h2>
          <p className="text-xl text-zinc-300 mb-8 font-light">
            <strong>BettingClarity</strong> isn’t a magic crystal ball. It’s a decision control system built on your own betting history.
          </p>
          <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
            Once you start logging your bets and decisions, BettingClarity analyzes your real behavior — not theory. Based on your matches, timing, emotions, and decision quality, the system generates brutally honest performance reports that show:
          </p>
          <ul className="list-disc pl-5 text-zinc-400 mb-8 space-y-1">
             <li>where you consistently lose clarity</li>
             <li>which patterns cost you money</li>
             <li>when you should slow down or PASS</li>
          </ul>
           <p className="text-lg text-zinc-300 mb-8 leading-relaxed italic">
            This isn’t hindsight. It’s pattern recognition applied to your own data.
          </p>
          
          <ul className="space-y-5">
            {[
              "Stop losing money on impulse and emotional bets",
              "See exactly where your process breaks down",
              "Get clear recommendations based on your history",
              "Build a repeatable PLAY vs PASS framework"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-zinc-200">
                <div className="mr-4 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500">
                   <CheckCircle className="w-4 h-4" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-zinc-800 rounded-2xl blur opacity-30"></div>
          
          <div className="relative bg-[#121212] border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="space-y-8">
              <div className="group flex items-start">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.4)] flex-shrink-0">1</div>
                <div className="ml-4">
                    <div className="text-zinc-300 font-semibold mb-1">Input Data</div>
                    <p className="text-zinc-500 text-sm">You log your bets, decisions, emotions, and timing in the Decision Journal.</p>
                </div>
              </div>
              <div className="group flex items-start">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                <div className="ml-4">
                    <div className="text-zinc-300 font-semibold mb-1">Performance Analysis</div>
                    <p className="text-zinc-500 text-sm">Your history is analyzed by multiple audits: Leak Detector, Pattern Finder, Psych Audit, Weekly Tactical Review.</p>
                </div>
              </div>
              <div className="group flex items-start">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.2)] flex-shrink-0">3</div>
                  <div className="ml-4">
                    <div className="text-white font-bold tracking-wide mb-1">Clear Direction</div>
                    <p className="text-zinc-500 text-sm">You receive concrete, actionable directives — what to reduce, what to avoid, and what to fix next.</p>
                </div>
              </div>
            </div>
            
            {/* Match Entry Screenshot - UPDATED */}
            <div className="mt-10 relative group">
                <div className="absolute -inset-1 bg-gradient-to-t from-emerald-500/10 via-emerald-500/5 to-transparent rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
                <div className="relative rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-lg">
                    {/* Mock Browser Header - Minimal */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-[#0f0f0f]">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-zinc-700/50"></div>
                            <div className="w-2 h-2 rounded-full bg-zinc-700/50"></div>
                        </div>
                        <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Match Entry UI</div>
                    </div>
                    
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full bg-[#0a0a0a] flex items-center justify-center">
                        <img 
                            src="solution-match-entry-ui-600x450.webp" 
                            alt="Match Entry Interface" 
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40"></div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Feature Sections & Reports ---

const ReportModal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  // --- Reusable UI Components for Reports ---
  
  const MetricCard = ({ label, value, trend, trendUp, prefix = "" }) => (
    <div className="bg-[#141414] border border-white/5 p-4 rounded-xl flex flex-col justify-between h-24 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
        <BarChart3 className="w-8 h-8 text-zinc-500" />
      </div>
      <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">{label}</span>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-white tracking-tight">{prefix}{value}</span>
        {trend && (
          <span className={`text-xs font-bold mb-1 ${trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
            {trend}
          </span>
        )}
      </div>
    </div>
  );

  const RecommendationCard = ({ type, title, subtitle, icon: Icon, actionLabel }) => (
    <div className="bg-[#141414] border border-white/5 rounded-xl p-4 flex gap-4 items-start hover:border-emerald-500/20 transition-colors group cursor-pointer">
      <div className={`p-3 rounded-lg flex-shrink-0 ${type === 'video' ? 'bg-blue-500/10 text-blue-500' : 'bg-purple-500/10 text-purple-500'}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${type === 'video' ? 'text-blue-500' : 'text-purple-500'}`}>
            {type === 'video' ? 'Recommended Module' : 'System Prompt'}
          </span>
        </div>
        <h4 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">{title}</h4>
        <p className="text-zinc-500 text-xs leading-relaxed mb-3">{subtitle}</p>
        <div className="flex items-center text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
          {actionLabel} <ArrowRight className="w-3 h-3 ml-1" />
        </div>
      </div>
    </div>
  );

  let content = null;
  let headerTitle = "";
  let headerSubtitle = "";
  let headerIcon = null;

  switch (type) {
    case 'weekly':
      headerTitle = "Weekly Tactical Review";
      headerSubtitle = "Week 42 • Oct 14 - Oct 20";
      headerIcon = <ClipboardCheck className="w-6 h-6 text-emerald-500" />;
      content = (
        <div className="space-y-8 animate-fade-in">
          {/* KPI Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard label="Total Bets" value="42" trend="+12" trendUp={false} />
            <MetricCard label="Win Rate" value="38.5%" trend="-4.2%" trendUp={false} />
            <MetricCard label="Turnover" value="2,450" prefix="€" />
            <MetricCard label="Net Profit" value="-320" prefix="€" trend="Drawdown" trendUp={false} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column: Diagnosis (2 cols wide) */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-[#141414] border border-white/5 rounded-xl p-6">
                <h4 className="text-white font-bold text-lg mb-4 flex items-center">
                  <Search className="w-5 h-5 mr-2 text-zinc-500" />
                  Performance Audit
                </h4>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-red-400 font-bold text-sm">Volume Warning: Overtrading</h5>
                        <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                          You placed <strong>42 bets</strong> this week, which is <strong>85% higher</strong> than your profitable average (22 bets). 
                          Analysis shows a sharp decline in ROI (-18%) on bets placed after 8:00 PM, suggesting fatigue/boredom betting.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-zinc-900 border border-white/5">
                    <h5 className="text-white font-bold text-sm mb-2">Market Breakdown</h5>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs text-zinc-400 mb-1">
                          <span>Pre-Match (Structured)</span>
                          <span className="text-emerald-500">+12.5% ROI</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-1.5 rounded-full">
                          <div className="bg-emerald-500 h-1.5 rounded-full w-[65%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-zinc-400 mb-1">
                          <span>Live In-Play (Impulse)</span>
                          <span className="text-red-500">-28.4% ROI</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-1.5 rounded-full">
                          <div className="bg-red-500 h-1.5 rounded-full w-[35%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#141414] border border-white/5 rounded-xl p-6">
                 <h4 className="text-white font-bold text-lg mb-4">The Fix for Next Week</h4>
                 <ul className="space-y-3">
                   <li className="flex items-start text-zinc-300 text-sm">
                     <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                     <span><strong>Hard Limit:</strong> Maximum 3 bets per day. Once you hit 3, the app locks for 24h.</span>
                   </li>
                   <li className="flex items-start text-zinc-300 text-sm">
                     <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                     <span><strong>Protocol Change:</strong> Disable all "Live Betting" markets in your dashboard filters.</span>
                   </li>
                 </ul>
              </div>
            </div>

            {/* Right Column: Recommendations (1 col wide) */}
            <div className="space-y-4">
              <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-wider mb-2">Recommended Actions</h4>
              
              <RecommendationCard 
                type="video"
                icon={Play}
                title="The Volume Trap"
                subtitle="Why betting more feels like working harder, but actually destroys your edge."
                actionLabel="Watch Module (12m)"
              />

              <RecommendationCard 
                type="prompt"
                icon={Bot}
                title="The 'Wait-for-Break' Filter"
                subtitle="Use this prompt before every live bet to force a 2-minute logic check."
                actionLabel="Copy to Clipboard"
              />

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mt-6">
                <h5 className="text-emerald-400 font-bold text-sm mb-2">Weekly Grade</h5>
                <div className="flex items-baseline gap-2">
                   <span className="text-4xl font-bold text-white">C-</span>
                   <span className="text-zinc-500 text-xs">Needs Improvement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      break;

    case 'leak':
      headerTitle = "Leak Detector Report";
      headerSubtitle = "Live Analysis • Last 50 Bets";
      headerIcon = <AlertTriangle className="w-6 h-6 text-red-500" />;
      content = (
        <div className="space-y-8 animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard label="Leak Impact" value="-€450" trend="Critical" trendUp={false} />
            <MetricCard label="Occurrence" value="18%" prefix="" />
            <MetricCard label="Avg Stake" value="€50" prefix="" />
            <MetricCard label="Potential ROI" value="+12%" prefix="" trend="If fixed" trendUp={true} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
               <div className="bg-[#141414] border border-white/5 rounded-xl p-6 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full -mr-10 -mt-10"></div>
                 <h4 className="text-white font-bold text-lg mb-2 relative z-10">Identified Leak: "Late Chase"</h4>
                 <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                   You have a systematic tendency to place bets in the <strong>75th-90th minute</strong> of football matches when you are currently down for the day. 
                   These bets have a <strong>negative expected value (-18% EV)</strong> compared to your pre-match bets (+8% EV).
                 </p>
                 <div className="mt-6 grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-black/40 p-3 rounded border border-white/5">
                      <span className="text-zinc-500 text-xs block mb-1">Win Rate (0-75 min)</span>
                      <span className="text-emerald-500 font-bold">54%</span>
                    </div>
                    <div className="bg-black/40 p-3 rounded border border-red-500/20">
                      <span className="text-zinc-500 text-xs block mb-1">Win Rate (75-90 min)</span>
                      <span className="text-red-500 font-bold">28%</span>
                    </div>
                 </div>
               </div>
            </div>

            <div className="space-y-4">
               <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-wider mb-2">The Solution</h4>
               <RecommendationCard 
                type="prompt"
                icon={Bot}
                title="End-Game Blocker"
                subtitle="A specific logic-gate prompt to run before any bet after the 70th minute."
                actionLabel="Copy Prompt"
              />
               <RecommendationCard 
                type="video"
                icon={Play}
                title="Chasing Losses Psychology"
                subtitle="Understanding the dopamine loop of late-game betting."
                actionLabel="Watch Video"
              />
            </div>
          </div>
        </div>
      );
      break;

    case 'pattern':
        headerTitle = "Pattern Finder";
        headerSubtitle = "Behavioral Correlation • 30 Day Lookback";
        headerIcon = <BrainCircuit className="w-6 h-6 text-blue-500" />;
        content = (
          <div className="space-y-8 animate-fade-in">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricCard label="Pattern Str" value="High" prefix="" />
              <MetricCard label="Sample Size" value="120" prefix="" />
              <MetricCard label="Profit Diff" value="€780" prefix="" trend="Significant" trendUp={true} />
              <MetricCard label="Confidence" value="92%" prefix="" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <div className="md:col-span-2 bg-[#141414] border border-white/5 rounded-xl p-6">
                 <h4 className="text-white font-bold text-lg mb-4">The "Underdog" Advantage</h4>
                 <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                   Analysis confirms a massive disparity in your results based on odds range. You are highly profitable when betting on 
                   outcomes priced <strong>2.50 to 4.00</strong>, but you consistently lose money on "safe" bets priced <strong>1.20 to 1.50</strong>.
                 </p>
                 
                 <div className="space-y-4">
                   <div className="flex items-center gap-4">
                      <span className="w-24 text-xs text-zinc-500 text-right">Odds 2.50+</span>
                      <div className="flex-grow bg-zinc-800 h-8 rounded-md relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full bg-blue-500/50 flex items-center px-3 text-xs font-bold text-white w-[80%]">
                           + €1,250 Profit
                        </div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <span className="w-24 text-xs text-zinc-500 text-right">Odds &lt;1.50</span>
                      <div className="flex-grow bg-zinc-800 h-8 rounded-md relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full bg-red-500/50 flex items-center px-3 text-xs font-bold text-white w-[40%]">
                           - €470 Loss
                        </div>
                      </div>
                   </div>
                 </div>
               </div>

               <div className="space-y-4">
                 <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-wider mb-2">Strategy Adjustment</h4>
                 <RecommendationCard 
                    type="video"
                    icon={Play}
                    title="The Favorite Fallacy"
                    subtitle="Why high strike rate doesn't mean high profit."
                    actionLabel="Watch Lesson"
                  />
                  <div className="bg-zinc-900 border border-white/5 p-4 rounded-xl">
                    <h5 className="text-white font-bold text-sm mb-2">Next Step</h5>
                    <p className="text-zinc-500 text-xs">Filter your dashboard to show ONLY odds &gt; 2.00 for the next 7 days.</p>
                  </div>
               </div>
            </div>
          </div>
        );
        break;

    case 'psych':
        headerTitle = "Psych Audit";
        headerSubtitle = "Emotional State & Tilt Analysis";
        headerIcon = <ActivityIcon className="w-6 h-6 text-orange-500" />;
        content = (
          <div className="space-y-8 animate-fade-in">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricCard label="Tilt Risk" value="72%" prefix="" trend="High Warning" trendUp={false} />
              <MetricCard label="Avg Sentiment" value="Neg" prefix="" />
              <MetricCard label="Forced Bets" value="5" prefix="" />
              <MetricCard label="Sleep Score" value="4.2" prefix="" trend="Low" trendUp={false} />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <div className="md:col-span-2 space-y-6">
                 <div className="bg-[#141414] border border-white/5 rounded-xl p-6">
                    <h4 className="text-white font-bold text-lg mb-4">Trigger Event Detected</h4>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                       You flagged 3 bets as "Revenge" in your journal this week. All 3 occurred immediately after a VAR decision went against you.
                       This indicates a specific trigger: <strong>Unfair Variance.</strong>
                    </p>
                    <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg flex items-center gap-4">
                       <div className="text-2xl">😡</div>
                       <div>
                         <p className="text-orange-400 font-bold text-sm">The "Injustice" Tilt</p>
                         <p className="text-orange-500/70 text-xs">You tend to double stakes when you feel the result was "unfair".</p>
                       </div>
                    </div>
                 </div>
               </div>

               <div className="space-y-4">
                 <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-wider mb-2">Mental Defense</h4>
                 <RecommendationCard 
                    type="video"
                    icon={Play}
                    title="Accepting Variance"
                    subtitle="How to detach your ego from the result."
                    actionLabel="Start Module"
                  />
                  <RecommendationCard 
                    type="prompt"
                    icon={Bot}
                    title="The Cool-Down Script"
                    subtitle="Required 15min break script after any 'Bad Beat' tag."
                    actionLabel="View Protocol"
                  />
               </div>
            </div>
          </div>
        );
        break;

    default:
      content = <div className="text-zinc-500">No report data found.</div>;
  }

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose}></div>
      
      {/* Main Modal Container - Wider and more 'Dashboard' like */}
      <div className="relative bg-[#0a0a0a] border border-zinc-800 rounded-2xl w-full max-w-5xl max-h-[90vh] shadow-2xl animate-fade-in flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#0f0f0f]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center shadow-inner">
               {headerIcon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">{headerTitle}</h3>
              {headerSubtitle && <p className="text-sm text-zinc-500 font-medium">{headerSubtitle}</p>}
            </div>
          </div>
          <div className="flex items-center gap-4">
             <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] border border-white/5 rounded-lg text-xs font-bold text-zinc-400 hover:text-white transition-colors">
               <Copy className="w-4 h-4" /> Export PDF
             </button>
             <button onClick={onClose} className="p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-lg transition-all">
               <X className="w-6 h-6"/>
             </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-[#0a0a0a]">
          {content}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white/5 bg-[#0f0f0f] flex justify-between items-center">
           <div className="text-xs text-zinc-600 font-mono">Report ID: #8292-XJ</div>
           <Button onClick={onClose} className="py-3 px-8 text-sm">Close Report</Button>
        </div>
      </div>
    </div>
  );
};

// Helper Icon Component
const ActivityIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const AgentSection = () => {
  const [activeReport, setActiveReport] = useState(null);

  return (
    <section className="relative py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Your Personal Performance Reports
          </h2>

          <h3 className="text-xl md:text-3xl font-bold text-white mb-6 leading-tight">
            We don’t tell you what to bet. <br className="hidden md:block"/>
            <span className="text-emerald-400">We show you how you actually bet- and what it costs you.</span>
          </h3>

          <p className="text-lg text-zinc-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            Built entirely on your own bets, decisions, and behavior. <br className="hidden md:block"/>
            No tips. No predictions. Just clarity from your real data.
          </p>

          {/* Process Flow */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 relative">
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-zinc-800 via-emerald-900/50 to-zinc-800 -z-10"></div>

            <div className="bg-[#0f0f0f] p-5 rounded-xl border border-zinc-800 relative z-10 mx-auto w-full max-w-xs shadow-lg">
                <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500 font-bold border border-zinc-700 shadow-[0_0_10px_rgba(16,185,129,0.1)]">1</div>
                <h4 className="text-white font-bold mb-1 text-sm">You Log Decisions</h4>
                <p className="text-zinc-500 text-xs">Input your bets, timing, and emotions into the smart journal.</p>
            </div>

            <div className="bg-[#0f0f0f] p-5 rounded-xl border border-zinc-800 relative z-10 mx-auto w-full max-w-xs shadow-lg">
                <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500 font-bold border border-zinc-700 shadow-[0_0_10px_rgba(16,185,129,0.1)]">2</div>
                <h4 className="text-white font-bold mb-1 text-sm">Patterns Detected</h4>
                <p className="text-zinc-500 text-xs">The system identifies leaks you miss in the heat of the moment.</p>
            </div>

            <div className="bg-[#0f0f0f] p-5 rounded-xl border border-zinc-800 relative z-10 mx-auto w-full max-w-xs shadow-lg">
                <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500 font-bold border border-zinc-700 shadow-[0_0_10px_rgba(16,185,129,0.1)]">3</div>
                <h4 className="text-white font-bold mb-1 text-sm">Reports Show Truth</h4>
                <p className="text-zinc-500 text-xs">Receive honest audits on where your process breaks down.</p>
            </div>
          </div>

          <div className="bg-zinc-900/30 rounded-2xl p-6 md:p-8 border border-white/5 mb-8 max-w-3xl mx-auto">
            <p className="text-base text-zinc-300 leading-relaxed font-light">
              Most bettors don't lose because they lack information. They lose because they lack feedback on their own behavior. 
              <strong className="text-white font-semibold block mt-2">BettingClarity acts as a mirror for your decision-making, exposing the hidden risks and emotional habits that drain your bankroll.</strong>
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-emerald-400/90 text-sm font-medium bg-emerald-900/10 px-5 py-2.5 rounded-full border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <ShieldCheck className="w-4 h-4" />
            <span>This system doesn’t promise profits. It protects the balance you already have.</span>
          </div>
        </div>

        {/* 4 Report Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <Card 
            className="flex flex-col items-center text-center p-6 hover:bg-[#18181b] group h-full"
            onClick={() => setActiveReport('leak')}
          >
            <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Search className="w-7 h-7 text-red-500" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Leak Detector</h3>
            <p className="text-zinc-500 text-xs leading-relaxed mb-6 flex-grow">
              Identifies patterns that consistently cost you money — markets, timing, or behaviors you repeat without noticing.
            </p>
            <Button variant="outline" className="w-full text-xs py-2 h-auto border-dashed border-zinc-700 mt-auto">
              Generate Preview
            </Button>
          </Card>

          <Card 
            className="flex flex-col items-center text-center p-6 hover:bg-[#18181b] group h-full"
            onClick={() => setActiveReport('pattern')}
          >
            <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Pattern Finder</h3>
            <p className="text-zinc-500 text-xs leading-relaxed mb-6 flex-grow">
              Discover hidden correlations in your game. Do you win more on Underdogs? Do you lose on Fridays?
            </p>
            <Button variant="outline" className="w-full text-xs py-2 h-auto border-dashed border-zinc-700 mt-auto">
              Generate Preview
            </Button>
          </Card>

          <Card 
            className="flex flex-col items-center text-center p-6 hover:bg-[#18181b] group h-full"
            onClick={() => setActiveReport('psych')}
          >
            <div className="w-14 h-14 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ActivityIcon className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Psych Audit</h3>
            <p className="text-zinc-500 text-xs leading-relaxed mb-6 flex-grow">
              Shows when emotion, tilt, or pressure influence your decisions more than logic. Protects your mental capital.
            </p>
            <Button variant="outline" className="w-full text-xs py-2 h-auto border-dashed border-zinc-700 mt-auto">
              Generate Preview
            </Button>
          </Card>

          <Card 
            className="flex flex-col items-center text-center p-6 hover:bg-[#18181b] group h-full"
            onClick={() => setActiveReport('weekly')}
          >
            <div className="w-14 h-14 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ClipboardCheck className="w-7 h-7 text-purple-500" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Weekly Review</h3>
            <p className="text-zinc-500 text-xs leading-relaxed mb-6 flex-grow">
              Clear directives for next week: reduce volume, avoid specific setups, or enforce PASS discipline.
            </p>
            <Button variant="outline" className="w-full text-xs py-2 h-auto border-dashed border-zinc-700 mt-auto">
              Generate Preview
            </Button>
          </Card>

        </div>

        {/* Master Strategy & Course Integration Info */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          
          <div className="bg-gradient-to-br from-emerald-900/20 to-transparent border border-emerald-500/20 rounded-xl p-8 flex items-start">
             <div className="mr-5 flex-shrink-0">
               <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center text-black">
                 <LayoutDashboard className="w-6 h-6" />
               </div>
             </div>
             <div>
               <h3 className="text-xl font-bold text-white mb-2">Master Strategy Generator</h3>
               <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                 Found in the <strong>"My Reports"</strong> tab. The system can synthesize your recent audits into a coherent Game Plan, adjusting your staking rules and sport focus automatically.
               </p>
               <span className="text-emerald-500 text-xs font-bold uppercase tracking-wider">Available in Pro & Founder</span>
             </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 rounded-xl p-8 flex items-start">
             <div className="mr-5 flex-shrink-0">
               <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-black">
                 <BookOpen className="w-6 h-6" />
               </div>
             </div>
             <div>
               <h3 className="text-xl font-bold text-white mb-2">Smart Recommendations</h3>
               <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                 Every report is linked to our Course Library. The system doesn't just tell you what's wrong; it gives you the exact <strong>Video Module</strong> or <strong>Prompt</strong> you need to fix it.
               </p>
               <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Instant Learning Path</span>
             </div>
          </div>

        </div>

        {/* Closing Line */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-tight">
            This isn’t advice from an AI. <br/>
            <span className="text-emerald-500">It’s feedback from your own decisions.</span>
          </h3>
        </div>

        {/* Master Strategy Report Screenshot Placeholder */}
        <div className="mt-24 relative mx-auto max-w-6xl group">
            <div className="absolute -inset-1 bg-gradient-to-t from-emerald-500/20 via-emerald-500/5 to-transparent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            <div className="relative rounded-2xl border border-white/10 bg-[#050505] overflow-hidden shadow-2xl">
                {/* Mock Browser Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0a0a0a]">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
                    </div>
                    <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Master Strategy Preview</div>
                    <div className="w-10"></div> {/* Spacer for centering */}
                </div>
                
                {/* Image Placeholder */}
                <div className="relative aspect-[16/9] w-full bg-[#0a0a0a] flex items-center justify-center">
                    <img 
                        src="agent-master-strategy-report-1200x675.webp" 
                        alt="Master Strategy Report" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60"></div>
                </div>
            </div>
        </div>

      </div>
      
      {/* Report Modal - teraz jest dużo prostszy i nie wymaga customContent */}
      <ReportModal 
        isOpen={!!activeReport} 
        onClose={() => setActiveReport(null)} 
        type={activeReport} 
      />
    </section>
  );
};

// NEW: Library Section Component
const LibrarySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "Video Modules",
      description: "Deep dives into psychology, risk management, and market mechanics. Learn visually with high-quality production.",
      icon: <Video className="w-6 h-6 text-blue-500" />,
      borderColor: "border-blue-500/50",
      iconBg: "bg-blue-500/10 border-blue-500/20",
      glow: "from-blue-600 to-cyan-600",
      image: "library-video-modules-preview-800x500.webp"
    },
    {
      title: "Advanced Playbooks",
      description: "Step-by-step written guides for specific scenarios: 'The Hedging Protocol', 'Live Betting Discipline', and more.",
      icon: <Library className="w-6 h-6 text-purple-500" />,
      borderColor: "border-purple-500/50",
      iconBg: "bg-purple-500/10 border-purple-500/20",
      glow: "from-purple-600 to-pink-600",
      image: "library-advanced-playbooks-preview-800x500.webp"
    },
    {
      title: "Smart Integration",
      description: "Don't know what to watch? Your performance reports link directly to the exact lesson you need to fix your leak.",
      icon: <GraduationCap className="w-6 h-6 text-orange-500" />,
      borderColor: "border-orange-500/50",
      iconBg: "bg-orange-500/10 border-orange-500/20",
      glow: "from-orange-600 to-red-600",
      image: "library-smart-integration-preview-800x500.webp"
    }
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0a] border-t border-white/5">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="World-Class Knowledge at Your Fingertips." 
            subtitle="Not just a PDF. A streaming-quality library of video modules, case studies, and advanced prompts."
          />
  
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Interactive Navigation */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 group ${
                    activeTab === index 
                      ? `bg-[#121212] ${feature.borderColor} shadow-lg` 
                      : 'bg-transparent border-transparent hover:bg-[#121212] hover:border-white/5'
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className={`p-3 rounded-lg flex-shrink-0 ${feature.iconBg}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-2 transition-colors ${activeTab === index ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
                        {feature.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Right Side: Dynamic Image Preview */}
            <div className="relative group">
              {/* Background Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-20 transition-all duration-500 ${features[activeTab].glow}`}></div>
              
              {/* Image Container */}
              <div className="relative bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden aspect-video shadow-2xl">
                {features.map((feature, index) => (
                  <img 
                    key={index}
                    src={feature.image}
                    alt={feature.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      activeTab === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                
                {/* Overlay UI Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/90 text-xs font-mono uppercase tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                      Preview: {features[activeTab].title}
                    </div>
                    <div className="flex gap-1">
                       <div className="w-2 h-2 rounded-full bg-white/20"></div>
                       <div className="w-2 h-2 rounded-full bg-white/20"></div>
                       <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
    </section>
  );
};

const PromptLibrarySection = () => (
  <section className="relative py-24 bg-[#0f0f0f] border-t border-white/5">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="The Intelligence Engine: 50+ Elite Prompts." 
          subtitle="A comprehensive library engineered for every stage of the decision process. Each module contains multiple, hand-crafted commands to refine your edge."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* 1. Clarity */}
            <div className="bg-[#18181b] border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/30 transition-all group relative">
                <div className="absolute top-4 right-4 text-[10px] text-zinc-500 font-mono border border-zinc-800 px-2 py-1 rounded bg-black/20">MULTIPLE PROMPTS</div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-5 h-5 text-emerald-500" />
                </div>
                <h4 className="text-white font-bold mb-2">Clarity</h4>
                <p className="text-zinc-500 text-xs leading-relaxed mb-3">
                    Define your edge. A collection of prompts that force you to articulate exactly *why* a bet has value before you place it.
                </p>
                <span className="text-[10px] text-emerald-500/80 font-bold uppercase tracking-wide">Contains finest selected prompts</span>
            </div>

            {/* 2. Risk Flags */}
            <div className="bg-[#18181b] border border-zinc-800 rounded-xl p-6 hover:border-red-500/30 transition-all group relative">
                <div className="absolute top-4 right-4 text-[10px] text-zinc-500 font-mono border border-zinc-800 px-2 py-1 rounded bg-black/20">MULTIPLE PROMPTS</div>
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ShieldAlert className="w-5 h-5 text-red-500" />
                </div>
                <h4 className="text-white font-bold mb-2">Risk Flags</h4>
                <p className="text-zinc-500 text-xs leading-relaxed mb-3">
                    The Devil's Advocate suite. Prompts designed specifically to find the hidden risks, line traps, and reasons to PASS that you missed.
                </p>
                <span className="text-[10px] text-red-500/80 font-bold uppercase tracking-wide">Contains finest selected prompts</span>
            </div>

            {/* 3. Bias & Emotions */}
            <div className="bg-[#18181b] border border-zinc-800 rounded-xl p-6 hover:border-orange-500/30 transition-all group relative">
                <div className="absolute top-4 right-4 text-[10px] text-zinc-500 font-mono border border-zinc-800 px-2 py-1 rounded bg-black/20">MULTIPLE PROMPTS</div>
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BrainCircuit className="w-5 h-5 text-orange-500" />
                </div>
                <h4 className="text-white font-bold mb-2">Bias & Emotions</h4>
                <p className="text-zinc-500 text-xs leading-relaxed mb-3">
                    Psychological defense commands. Detect Recency Bias, Sunk Cost Fallacy, and emotional reasoning instantly.
                </p>
                <span className="text-[10px] text-orange-500/80 font-bold uppercase tracking-wide">Contains finest selected prompts</span>
            </div>

            {/* 4. Play / Pass */}
            <div className="bg-[#18181b] border border-zinc-800 rounded-xl p-6 hover:border-blue-500/30 transition-all group relative">
                <div className="absolute top-4 right-4 text-[10px] text-zinc-500 font-mono border border-zinc-800 px-2 py-1 rounded bg-black/20">MULTIPLE PROMPTS</div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Scale className="w-5 h-5 text-blue-500" />
                </div>
                <h4 className="text-white font-bold mb-2">Play / Pass</h4>
                <p className="text-zinc-500 text-xs leading-relaxed mb-3">
                    The Decision Engine. Logic gate prompts that process your analysis and output a binary recommendation based on mathematical value.
                </p>
                <span className="text-[10px] text-blue-500/80 font-bold uppercase tracking-wide">Contains finest selected prompts</span>
            </div>

            {/* 5. Review */}
            <div className="bg-[#18181b] border border-zinc-800 rounded-xl p-6 hover:border-purple-500/30 transition-all group relative">
                <div className="absolute top-4 right-4 text-[10px] text-zinc-500 font-mono border border-zinc-800 px-2 py-1 rounded bg-black/20">MULTIPLE PROMPTS</div>
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <RefreshCw className="w-5 h-5 text-purple-500" />
                </div>
                <h4 className="text-white font-bold mb-2">Review</h4>
                <p className="text-zinc-500 text-xs leading-relaxed mb-3">
                    Post-game autopsy scripts. Determine if the result was due to variance (luck) or a fundamental flaw in your process.
                </p>
                <span className="text-[10px] text-purple-500/80 font-bold uppercase tracking-wide">Contains finest selected prompts</span>
            </div>

            {/* 6. Bonus */}
            <div className="bg-[#18181b] border border-zinc-800 rounded-xl p-6 hover:border-yellow-500/30 transition-all group relative">
                <div className="absolute top-4 right-4 text-[10px] text-zinc-500 font-mono border border-zinc-800 px-2 py-1 rounded bg-black/20">MULTIPLE PROMPTS</div>
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <h4 className="text-white font-bold mb-2">Bonus</h4>
                <p className="text-zinc-500 text-xs leading-relaxed mb-3">
                    Specialized tools. Hedging calculators, arbitrage checkers, and exotic market validation scripts for niche situations.
                </p>
                <span className="text-[10px] text-yellow-500/80 font-bold uppercase tracking-wide">Contains finest selected prompts</span>
            </div>

            {/* 7. PRO Module */}
            <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-emerald-500/40 rounded-xl p-6 hover:border-emerald-400 transition-all group shadow-lg shadow-emerald-900/10">
                <div className="absolute top-3 right-3 bg-emerald-500 text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase">PRO</div>
                <div className="w-10 h-10 rounded-lg bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Database className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-white font-bold mb-2">Advanced Data Models</h4>
                <p className="text-zinc-400 text-xs leading-relaxed mb-3">
                    Generate Expected Goals (xG) models, Poisson distribution simulations, and custom power ratings using raw data.
                </p>
                <span className="text-[10px] text-emerald-400/80 font-bold uppercase tracking-wide">Exclusive Pro Collection</span>
            </div>

            {/* 8. FOUNDER VIP Module */}
            <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-purple-500/40 rounded-xl p-6 hover:border-purple-400 transition-all group shadow-lg shadow-purple-900/10">
                <div className="absolute top-3 right-3 bg-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">VIP</div>
                <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Crown className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-white font-bold mb-2">Syndicate Secrets</h4>
                <p className="text-zinc-400 text-xs leading-relaxed mb-3">
                    Institutional-grade protocols. Closing Line Value (CLV) optimization, multi-book arbitrage, and origin of move tracking.
                </p>
                <span className="text-[10px] text-purple-400/80 font-bold uppercase tracking-wide">Lifetime Access Only</span>
            </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-900/20 via-zinc-900/50 to-zinc-900/20 border border-emerald-500/20 rounded-xl p-6 flex items-center justify-center text-center md:text-left gap-6 flex-col md:flex-row max-w-3xl mx-auto">
            <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center animate-pulse">
                    <Zap className="w-6 h-6 text-emerald-400" />
                </div>
            </div>
            <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Connected to your data</h4>
                <p className="text-zinc-400 text-sm">
                    If your Weekly Report detects a leak in "Live Betting", the system immediately gives you the <strong>"Live Discipline Protocol"</strong> prompt to fix it.
                </p>
            </div>
        </div>

        {/* App Interface Screenshot Placeholder */}
        <div className="mt-12 relative mx-auto max-w-6xl group">
            <div className="absolute -inset-1 bg-gradient-to-t from-emerald-500/20 via-emerald-500/5 to-transparent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            <div className="relative rounded-2xl border border-white/10 bg-[#050505] overflow-hidden shadow-2xl">
                {/* Mock Browser Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0a0a0a]">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
                    </div>
                    <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">System Interface Preview</div>
                    <div className="w-10"></div> {/* Spacer for centering */}
                </div>
                
                {/* Image Placeholder */}
                <div className="relative aspect-[16/9] w-full bg-[#0a0a0a] flex items-center justify-center">
                    <img 
                        src="agent-app-interface-1200x675.webp" 
                        alt="App Interface" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60"></div>
                </div>
            </div>
        </div>
     </div>
  </section>
);

const ValueSection = () => (
  <section className="py-24 bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading 
        title="Return on Discipline" 
        subtitle="How BettingClarity pays for itself by fixing decisions- not by predicting outcomes."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Point 1: Loss Prevention */}
        <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col items-center text-center hover:border-white/10 transition-colors">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 mb-5 text-red-400">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-white mb-3">Loss Prevention</h3>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Avoiding poorly timed entries or identifying red flags protects your capital. The goal is to eliminate unforced errors and emotional mistakes from your game.
          </p>
        </div>

        {/* Point 2: Impulse Control */}
        <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col items-center text-center hover:border-white/10 transition-colors">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 mb-5 text-blue-400">
            <Scale className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-white mb-3">Impulse Control</h3>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Structuring your process naturally reduces overtrading and boredom bets. When you have to log a decision, you are less likely to force a low-quality play.
          </p>
        </div>

        {/* Point 3: Decision Awareness */}
        <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col items-center text-center hover:border-white/10 transition-colors">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 mb-5 text-purple-400">
            <Lightbulb className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-white mb-3">Decision Awareness</h3>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Discipline becomes automatic when you can see your data. Learning from your own history creates a feedback loop that protects your bankroll.
          </p>
        </div>

        {/* Point 4: System Effect (Highlighted) */}
        <div 
          className="p-6 rounded-2xl bg-emerald-900/10 border border-emerald-500/30 flex flex-col items-center text-center relative group cursor-pointer hover:bg-emerald-900/20 transition-all shadow-[0_0_30px_-15px_rgba(16,185,129,0.2)]"
          onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-50"></div>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-5 text-emerald-400 group-hover:scale-110 transition-transform">
            <Workflow className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-white mb-3">The System Effect</h3>
          <p className="text-zinc-300 text-xs leading-relaxed mb-4">
            Operating without a system is the most expensive mistake of all. BettingClarity provides the professional baseline you need to compete.
          </p>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center mt-auto group-hover:translate-x-1 transition-transform">
            Start Your System <ArrowRight className="w-3 h-3 ml-1" />
          </span>
        </div>

      </div>
    </div>
  </section>
);

const ProductDeepDive = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const products = [
    {
      title: "Education & Frameworks",
      icon: <BookOpen className="w-4 h-4 mr-2" />,
      content: (
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg blur opacity-40"></div>
            {/* Aspect Ratio Changed to 4/3 */}
            <div className="relative bg-[#0f0f0f] rounded-lg border border-emerald-500/30 overflow-hidden aspect-[4/3] flex items-center justify-center shadow-2xl">
              <img src="features-education-frameworks-800x600.webp" alt="Education Suite" className="object-cover w-full h-full opacity-90" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Structured Learning, Not Random Content</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Forget scouring YouTube for tips. We provide a complete educational ecosystem: courses, ebooks, video modules, and a vast prompt library designed to build your edge from the ground up.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Massive Value:</strong> Educational content alone is worth €299+ if purchased separately.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Actionable Frameworks:</strong> Don't just learn theory. Apply proven decision matrices immediately.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Always Growing:</strong> New modules and prompts are added to the library every week.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Smart Tracking & Reports",
      icon: <BarChart3 className="w-4 h-4 mr-2" />,
      content: (
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25"></div>
            <div className="relative bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden aspect-[4/3] flex items-center justify-center">
              <img src="features-smart-tracking-reports-800x600.webp" alt="Smart Reports" className="object-cover w-full h-full opacity-90" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Your Data Tells a Story</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              We go beyond simple profit/loss tracking. Our intuitive journal captures your decision quality, emotions, and timing to generate personalized performance reports.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Direct Feedback Loop:</strong> Reports link directly to the specific lessons you need to fix your leaks.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Psychological Audit:</strong> Understand how your mood impacts your bottom line.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Weekly Insights:</strong> Get regular tactical reviews to adjust your strategy in real-time.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Cost Control & Advantage",
      icon: <Wallet className="w-4 h-4 mr-2" />,
      content: (
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg blur opacity-25"></div>
            <div className="relative bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden aspect-[4/3] flex items-center justify-center">
              <img src="features-cost-control-advantage-800x600.webp" alt="Cost Control" className="object-cover w-full h-full opacity-90" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">The Most Cost-Effective Edge</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              BettingClarity isn't an expense; it's an investment in capital protection. By eliminating repeat behavioral mistakes, the system pays for itself.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Reduce Overtrading:</strong> Stop bleeding money on boredom bets and low-value spots.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Eliminate Emotional Cost:</strong> Remove the expensive "tilt" factor from your sessions.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>System Advantage:</strong> Gain the professional structure that 99% of bettors lack.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="product-deep-dive" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Everything You Need. Nothing You Don’t." 
          subtitle="A complete decision system designed to protect your bankroll, sharpen discipline, and eliminate costly habits." 
        />
        
        <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-2 mb-10 pb-4">
          {products.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex-shrink-0 flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border whitespace-nowrap ${
                activeTab === idx 
                  ? 'bg-emerald-600 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                  : 'bg-[#1e1e1e] border-white/5 text-zinc-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {p.icon}
              {p.title}
            </button>
          ))}
        </div>

        <Card className="min-h-[450px] flex items-center justify-center bg-[#121212]">
          <div className="w-full">
            {products[activeTab].content}
          </div>
        </Card>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="relative py-20 bg-[#0a0a0a] border-t border-white/5">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
    <div className="blob-green top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 w-[800px] h-[800px]"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Choose Your Clarity Level." subtitle="Professional tools. Flexible plans. Cancel anytime." />
      
      {/* 3 Main Tiers Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start mb-24">
        
        {/* BASIC */}
        <Card className="p-8 flex flex-col bg-[#0a0a0a] border-zinc-800 opacity-90 hover:opacity-100 transition-opacity h-full">
          <h3 className="text-xl font-bold text-white mb-2">Basic</h3>
          <div className="text-4xl font-bold text-white mb-2 tracking-tighter">€9<span className="text-sm font-normal text-zinc-500">/mo</span></div>
          <p className="text-zinc-500 text-sm mb-8">Entry point & habit builder.</p>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" /> Decision Journal (50/mo)</li>
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" /> Basic Dashboard</li>
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" /> Limited Reports (1/week)</li>
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" /> Prompt Library (25+)</li>
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" /> Premium Education</li>
          </ul>
          <Button variant="secondary" className="w-full" onClick={() => window.location.href = 'https://app.bettingclarity.com'}>Start Basic</Button>
          <p className="mt-4 text-xs text-zinc-600 flex items-center justify-center">
            <ShieldAlert className="w-3 h-3 mr-1.5" />
            Secure payment via Stripe
          </p>
        </Card>

        {/* PRO */}
        <Card glow={true} allowOverflow={true} className="p-10 flex flex-col relative bg-[#18181b] border-emerald-500/30 h-full transform md:-translate-y-6 z-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.5)] whitespace-nowrap z-20">Most Popular</div>
          <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
          <div className="text-5xl font-bold text-white mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-emerald-200">€19<span className="text-sm font-normal text-zinc-500">/mo</span></div>
          <p className="text-zinc-400 text-sm mb-8">The real product. Full power.</p>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> <strong>Unlimited Journal</strong></li>
             <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> Full Dashboard</li>
            <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> <strong>100 AI Reports / month</strong></li>
            <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> 12 Mega Report Types (History Based)</li>
            <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> Video Education Package</li>
            <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> Full Prompt Library (50+)</li>
             <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> Weekly Tactical Review</li>
            <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> Market & Timing Audits</li>
          </ul>
          <p className="text-center text-xs text-emerald-400/80 mb-4 font-medium">One avoided bad bet covers this.</p>
          <Button variant="primary" className="w-full" onClick={() => window.location.href = 'https://app.bettingclarity.com'}>Get Clarity Now</Button>
          <p className="mt-4 text-xs text-zinc-500 flex items-center justify-center">
            <ShieldAlert className="w-3 h-3 mr-1.5" />
            Secure payment via Stripe
          </p>
        </Card>

        {/* FOUNDER */}
        <Card className="p-8 flex flex-col bg-[#0a0a0a] border-zinc-800 opacity-90 hover:opacity-100 transition-opacity h-full">
          <h3 className="text-xl font-bold text-white mb-2">Founder</h3>
          <div className="text-4xl font-bold text-white mb-2 tracking-tighter">€49<span className="text-sm font-normal text-zinc-500">/mo</span></div>
          <p className="text-zinc-500 text-sm mb-8">Power users & semi-pros.</p>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" /> <strong>Everything in Pro</strong></li>
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" /> Advanced Analytics (16 reps)</li>
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" /> Historical Deep Audits</li>
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" /> Priority Processing</li>
            <li className="flex text-zinc-400 text-sm"><Zap className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" /> Early Feature Access</li>
          </ul>
          <Button variant="outline" className="w-full" onClick={() => window.location.href = 'https://app.bettingclarity.com'}>Become a Founder</Button>
          <p className="mt-4 text-xs text-zinc-600 flex items-center justify-center">
            <ShieldAlert className="w-3 h-3 mr-1.5" />
            Secure payment via Stripe
          </p>
        </Card>

      </div>

      {/* LIFETIME */}
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-emerald-500/20 rounded-2xl p-8 md:p-12 overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 bg-emerald-900/30 text-emerald-400 text-xs font-bold px-4 py-1.5 rounded-bl uppercase tracking-widest border-b border-l border-emerald-500/20">2026 Early Access</div>
           
           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="md:w-1/2 text-center md:text-left">
                <div className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-widest bg-emerald-900/20 px-2 py-0.5 inline-block rounded border border-emerald-900/50">One-Time Payment</div>
                <h3 className="text-3xl font-bold text-white mb-2">Founder Lifetime</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Skip the monthly fees forever. Get full Founder status, all future updates, and priority contact channel with a single payment.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                    <div className="text-5xl font-bold text-white tracking-tighter">€399</div>
                    <div className="text-2xl text-zinc-600 line-through font-medium">€699</div>
                </div>
                <p className="text-zinc-500 text-xs">One-time payment. Lifetime access.</p>
             </div>

             <div className="md:w-1/2 w-full">
                <ul className="space-y-3 mb-8">
                  <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> <strong>Founder Status Forever</strong></li>
                  <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> No Monthly Fees</li>
                  <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> All Future Updates Included</li>
                  <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Dedicated Priority Contact</li>
                </ul>
                <Button variant="outline" className="w-full py-4 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.1)]" onClick={() => window.location.href = 'https://app.bettingclarity.com'}>
                  Get Lifetime Access
                </Button>
                 <p className="mt-4 text-xs text-zinc-600 flex items-center justify-center">
                  <ShieldAlert className="w-3 h-3 mr-1.5" />
                  Secure payment via Stripe
                </p>
             </div>
           </div>
        </div>
      </div>
       
    </div>
  </section>
);

const FAQ = () => (
  <section id="faq" className="relative py-20 bg-[#0a0a0a] border-t border-white/5">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading 
        title="Frequently Asked Questions" 
        subtitle="Clear answers for clear decisions."
      />
      
      <div className="space-y-4">
        <div className="p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-emerald-500/20 transition-colors">
            <h4 className="text-white font-bold mb-2 flex items-start gap-3 text-sm md:text-base">
                <MessageSquare className="w-5 h-5 text-emerald-500 flex-shrink-0"/>
                Is this a tipster service or prediction bot?
            </h4>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed ml-8">
                No. BettingClarity is a decision-management system. We don't give you "locks" or predictions. We give you the framework to filter your own ideas, eliminate emotional mistakes, and manage risk like a professional.
            </p>
        </div>

        <div className="p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-emerald-500/20 transition-colors">
            <h4 className="text-white font-bold mb-2 flex items-start gap-3 text-sm md:text-base">
                <MessageSquare className="w-5 h-5 text-emerald-500 flex-shrink-0"/>
                Do I need to be an expert in math or Excel?
            </h4>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed ml-8">
                Not at all. The system is designed to be intuitive. If you can answer honest questions about your confidence and emotional state, the tools do the rest. The complexity is hidden behind simple prompts and dashboards.
            </p>
        </div>

        <div className="p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-emerald-500/20 transition-colors">
            <h4 className="text-white font-bold mb-2 flex items-start gap-3 text-sm md:text-base">
                <MessageSquare className="w-5 h-5 text-emerald-500 flex-shrink-0"/>
                Will this work for the sports I bet on?
            </h4>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed ml-8">
                Yes. The principles of discipline, value identification, and bankroll management are universal. Whether you trade Tennis in-play or bet on NFL pre-match, the "Clarity Leaks" (like tilting or over-staking) are the same.
            </p>
        </div>

        <div className="p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-emerald-500/20 transition-colors">
            <h4 className="text-white font-bold mb-2 flex items-start gap-3 text-sm md:text-base">
                <MessageSquare className="w-5 h-5 text-emerald-500 flex-shrink-0"/>
                Can I cancel my subscription?
            </h4>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed ml-8">
                Absolutely. You can cancel anytime directly from your dashboard with one click. You will retain full access to all Pro/Founder features until the end of your current billing cycle.
            </p>
        </div>

        <div className="p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-emerald-500/20 transition-colors">
            <h4 className="text-white font-bold mb-2 flex items-start gap-3 text-sm md:text-base">
                <MessageSquare className="w-5 h-5 text-emerald-500 flex-shrink-0"/>
                I have a specific question.
            </h4>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed ml-8">
                We are real people building this for real bettors. If you have any doubts, email us directly at <a href="mailto:support@bettingclarity.com" className="text-emerald-400 hover:text-emerald-300 transition-colors font-mono">support@bettingclarity.com</a> and we will help you out.
            </p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ onOpenTerms, onOpenPrivacy }) => (
  <footer className="bg-[#050505] py-16 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-8 text-white font-bold text-2xl tracking-tight">
        <Workflow className="w-6 h-6 text-emerald-500" />
        <span>BettingClarity</span>
      </div>
      
      <div className="max-w-3xl mx-auto bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 mb-10">
        <div className="flex items-start justify-center gap-4">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <h5 className="text-white font-bold text-sm mb-2">Disclaimer & Responsible Betting</h5>
            <p className="text-xs text-zinc-500 leading-relaxed">
              This product is for educational and informational purposes only. BettingClarity is a productivity tool designed to help structure data and research. We do not provide financial advice, gambling tips, or guarantees of profit. All betting involves risk. Invest only what you can afford to lose. Past performance of any system or analysis does not guarantee future results.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-8 text-zinc-600 text-sm mb-8">
        <button onClick={onOpenTerms} className="hover:text-emerald-500 transition-colors">Terms of Service</button>
        <button onClick={onOpenPrivacy} className="hover:text-emerald-500 transition-colors">Privacy Policy</button>
        <a href="mailto:support@bettingclarity.com" className="hover:text-emerald-500 transition-colors">Contact</a>
      </div>

      <p className="text-zinc-700 text-sm">
        © {new Date().getFullYear()} BettingClarity. All rights reserved.
      </p>
    </div>
  </footer>
);

const App = () => {
  const [legalModal, setLegalModal] = useState(null); 
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const openTerms = () => setLegalModal({ title: "Terms of Service", src: "TERMS AND CONDITIONS.html" });
  const openPrivacy = () => setLegalModal({ title: "Privacy Policy", src: "PRIVACY POLICY.html" });

  // --- Head Management (Title & Favicon) ---
  useEffect(() => {
    // 1. Set Professional Title
    document.title = "BettingClarity | Decision Management System";

    // 2. Update Favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = 'favicon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      <GlobalStyles />
      
      {legalModal && (
        <LegalModal 
          isOpen={!!legalModal} 
          onClose={() => setLegalModal(null)} 
          title={legalModal.title} 
          src={legalModal.src} 
        />
      )}

      {/* Video Modal */}
      <VideoModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
        videoId="" // Wklej ID filmu z YouTube tutaj (np. "dQw4w9WgXcQ")
      />
      
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <HeaderLogo />
          <Button 
            variant="primary" 
            className="hidden sm:flex !py-2.5 !px-6 text-sm !font-bold"
            onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
          >
            Get Clarity Now
          </Button>
        </div>
      </nav>

      <Hero onWatchVideo={() => setVideoModalOpen(true)} />
      <Problem />
      <Solution />
      <AgentSection />
      <LibrarySection />
      <PromptLibrarySection />
      <ValueSection />
      {/* LeadMagnetSection (Quiz) removed */}
      <ProductDeepDive />
      <Pricing />
      <FAQ />
      
      <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#050505]"></div>
        <div className="blob-green top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
            Stop guessing. <br />
            <span className="text-emerald-500">Start deciding.</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 mt-8">
            <div className="relative group w-full max-w-[280px] transform md:rotate-[-6deg] hover:rotate-0 transition-all duration-500 z-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden aspect-[4/3] flex items-center justify-center">
                 <img src="cta-smart-journal-sheet-400x300.webp" alt="Betting Journal Sheet" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div className="relative group w-full max-w-[320px] transform md:-translate-y-6 z-20 hover:scale-105 transition-all duration-500">
               <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
               <div className="relative bg-[#0f0f0f] rounded-lg border border-emerald-500/30 overflow-hidden aspect-[3/4] flex items-center justify-center shadow-2xl">
                 <img src="cta-workflow-guide-pdf-600x800.webp" alt="Workflow Guide Cover" className="object-cover w-full h-full" />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                   <p className="text-white font-bold text-center text-sm">The Workflow Guide</p>
                 </div>
               </div>
            </div>

            <div className="relative group w-full max-w-[280px] transform md:rotate-[6deg] hover:rotate-0 transition-all duration-500 z-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden aspect-[4/3] flex items-center justify-center">
                <img src="cta-ai-agent-interface-400x300.webp" alt="AI Tool Interface" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
          
          <Button 
            className="w-full sm:w-auto text-lg px-12 py-5 shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)]"
            onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
          >
            Build Your System
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="mt-8 text-zinc-600 text-sm flex items-center justify-center">
            <ShieldAlert className="w-4 h-4 mr-2" />
            Secure payment via Stripe. Instant digital delivery.
          </p>
        </div>
      </section>

      <Footer onOpenTerms={openTerms} onOpenPrivacy={openPrivacy} />
    </div>
  );
};

export default App;