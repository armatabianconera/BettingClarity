import React, { useState, useEffect, useRef } from 'react';
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
  ThumbsUp
} from 'lucide-react';

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

// --- Components ---

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

const Card = ({ children, className = '', glow = false, allowOverflow = false }) => (
  <div className={`
    relative bg-[#1e1e1e] border border-white/5 rounded-xl p-8 
    transition-all duration-300 hover:border-white/10 hover:bg-[#252525]
    ${allowOverflow ? 'overflow-visible' : 'overflow-hidden'}
    ${glow ? 'shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)] border-emerald-500/20' : 'shadow-2xl shadow-black/40'} 
    ${className}
  `}>
    {children}
  </div>
);

// --- Quiz Data ---

const QUIZ_QUESTIONS = [
  // --- BLOCK A: STAKES & CONTROL ---
  {
    id: 1,
    category: "Stakes & Control",
    question: "How do you typically decide your stake size?",
    options: [
      { text: "Strict percentage (1-3%) of bankroll.", points: 0 },
      { text: "Roughly the same amount every time.", points: 5 },
      { text: "Based on how confident I feel.", points: 15 },
      { text: "I increase it if I need to win back money.", points: 25 }
    ]
  },
  {
    id: 2,
    category: "Stakes & Control",
    question: "Do you have a daily 'Stop-Loss' limit?",
    options: [
      { text: "Yes, and I stop immediately when hit.", points: 0 },
      { text: "I have a mental limit, but I break it.", points: 15 },
      { text: "No, I keep going until I win or run out.", points: 25 },
      { text: "I don't track daily losses.", points: 20 }
    ]
  },
  {
    id: 3,
    category: "Stakes & Control",
    question: "What percentage of your bankroll is in play right now?",
    options: [
      { text: "Less than 5%.", points: 0 },
      { text: "Around 10-20%.", points: 10 },
      { text: "More than 50%.", points: 25 },
      { text: "I don't have a bankroll, I just deposit.", points: 20 }
    ]
  },
  {
    id: 4,
    category: "Stakes & Control",
    question: "Do you ever withdraw your profits?",
    options: [
      { text: "Yes, regularly / monthly.", points: 0 },
      { text: "Sometimes, for big wins.", points: 5 },
      { text: "Rarely, I usually play until it's gone.", points: 20 },
      { text: "I haven't had profits to withdraw yet.", points: 10 }
    ]
  },
  
  // --- BLOCK B: TIMING & CONTEXT ---
  {
    id: 5,
    category: "Timing & Context",
    question: "When do you place the majority of your bets?",
    options: [
      { text: "Pre-match, after research.", points: 0 },
      { text: "Minutes before kick-off.", points: 10 },
      { text: "Live / In-Play while watching.", points: 15 },
      { text: "Live / In-Play when chasing a result.", points: 25 }
    ]
  },
  {
    id: 6,
    category: "Timing & Context",
    question: "Do you bet late at night (after 11 PM)?",
    options: [
      { text: "Never / Rarely.", points: 0 },
      { text: "Only on major US sports (NBA/NHL).", points: 5 },
      { text: "Yes, often out of boredom.", points: 20 },
      { text: "Yes, usually trying to recover daily losses.", points: 25 }
    ]
  },
  {
    id: 7,
    category: "Timing & Context",
    question: "Do you bet on leagues you don't follow?",
    options: [
      { text: "Never.", points: 0 },
      { text: "Sometimes, if the stats look good.", points: 10 },
      { text: "Yes, if there's action.", points: 20 },
      { text: "Yes, whatever is live right now.", points: 25 }
    ]
  },
  {
    id: 8,
    category: "Timing & Context",
    question: "Do you bet when you are tired or stressed?",
    options: [
      { text: "No, I avoid it.", points: 0 },
      { text: "Occasionally.", points: 10 },
      { text: "Yes, it helps me relax.", points: 20 },
      { text: "Yes, often.", points: 25 }
    ]
  },

  // --- BLOCK C: EMOTIONS ---
  {
    id: 9,
    category: "Emotions",
    question: "How do you react after 3 losses in a row?",
    options: [
      { text: "I stop and review my process.", points: 0 },
      { text: "I get annoyed but stick to the plan.", points: 5 },
      { text: "I look for a 'lock' to fix it.", points: 15 },
      { text: "I double the next stake (rage bet).", points: 30 }
    ]
  },
  {
    id: 10,
    category: "Emotions",
    question: "Do you check live scores obsessively?",
    options: [
      { text: "No, I check the result at the end.", points: 0 },
      { text: "Sometimes.", points: 5 },
      { text: "Yes, constantly.", points: 15 },
      { text: "Yes, and I cash out early out of panic.", points: 20 }
    ]
  },
  {
    id: 11,
    category: "Emotions",
    question: "Have you ever bet to 'make the game interesting'?",
    options: [
      { text: "No, only for value.", points: 0 },
      { text: "Occasionally for big finals.", points: 5 },
      { text: "Yes, frequently.", points: 15 },
      { text: "Yes, I can't watch without a bet.", points: 25 }
    ]
  },
  {
    id: 12,
    category: "Emotions",
    question: "How does a bad run affect your real life?",
    options: [
      { text: "It doesn't.", points: 0 },
      { text: "I get a bit grumpy.", points: 5 },
      { text: "I feel stressed and distracted.", points: 20 },
      { text: "It ruins my whole day/week.", points: 30 }
    ]
  },

  // --- BLOCK D: PROCESS ---
  {
    id: 13,
    category: "Process",
    question: "Do you check lineups before every bet?",
    options: [
      { text: "Always.", points: 0 },
      { text: "Most of the time.", points: 5 },
      { text: "Only for big games.", points: 10 },
      { text: "No, I bet on the team name.", points: 20 }
    ]
  },
  {
    id: 14,
    category: "Process",
    question: "Do you track your bets (Excel/Journal)?",
    options: [
      { text: "Yes, every single one.", points: 0 },
      { text: "I try, but I miss some.", points: 5 },
      { text: "I check my history in the app.", points: 15 },
      { text: "No, never.", points: 20 }
    ]
  },
  {
    id: 15,
    category: "Process",
    question: "Do you analyze WHY you lost a bet?",
    options: [
      { text: "Yes, I check if it was bad luck or bad logic.", points: 0 },
      { text: "Sometimes.", points: 5 },
      { text: "No, I just move to the next one.", points: 15 },
      { text: "No, the refs cheated.", points: 20 }
    ]
  },
  {
    id: 16,
    category: "Process",
    question: "How many sources do you check?",
    options: [
      { text: "3+ (Stats, News, Odds movement).", points: 0 },
      { text: "1-2 sources.", points: 5 },
      { text: "I just look at the table.", points: 15 },
      { text: "None, gut feeling.", points: 20 }
    ]
  },

  // --- BLOCK E: AI & TOOLS ---
  {
    id: 17,
    category: "AI & Tools",
    question: "Do you use AI for analysis?",
    options: [
      { text: "Yes, structured prompts.", points: 0 },
      { text: "Sometimes, simple questions.", points: 5 },
      { text: "No, but I want to.", points: 5 },
      { text: "No, I don't trust it.", points: 10 }
    ]
  },
  {
    id: 18,
    category: "AI & Tools",
    question: "Do you look for reasons NOT to bet?",
    options: [
      { text: "Always (Devil's Advocate).", points: 0 },
      { text: "Sometimes.", points: 5 },
      { text: "No, I look for confirmation.", points: 15 },
      { text: "I just want action.", points: 25 }
    ]
  },
  {
    id: 19,
    category: "AI & Tools",
    question: "Do you treat 'PASS' as a winning decision?",
    options: [
      { text: "Yes, saving money is winning.", points: 0 },
      { text: "Intellectually yes, emotionally no.", points: 10 },
      { text: "No, you can't win if you don't play.", points: 20 },
      { text: "I hate passing.", points: 25 }
    ]
  },
  {
    id: 20,
    category: "AI & Tools",
    question: "What is your main goal?",
    options: [
      { text: "Long-term profit (investing).", points: 0 },
      { text: "Side hustle money.", points: 5 },
      { text: "Entertainment / Thrill.", points: 15 },
      { text: "To get rich quick.", points: 30 }
    ]
  }
];

const ARCHETYPES = [
  {
    name: "The Disciplined Analyst",
    min: 0,
    max: 40,
    color: "text-emerald-400",
    leak: "Over-Analysis & Hesitation",
    lossSource: "Missing value due to fear of pulling the trigger, or getting stuck in analysis paralysis.",
    fix: "Use the Workflow to set a strict time limit for analysis.",
    riskScore: "Low (12/100)",
    recommendations: [
      "Trust your data: If the Workflow checks out, place the bet.",
      "Use the AI Agent to validate your thesis quickly.",
      "Focus on 1-2 core sports to maximize your edge."
    ],
    pitch: "You have the discipline, now you need efficiency. The **BettingClarity Pro System** will streamline your process, so you stop second-guessing yourself and start executing like a machine."
  },
  {
    name: "The Unstructured Grinder",
    min: 41,
    max: 120,
    color: "text-blue-400",
    leak: "Lack of Documentation",
    lossSource: "Repeating the same mistakes because you don't track *why* you lost (e.g., betting on away favorites).",
    fix: "Start using the Smart Journal immediately.",
    riskScore: "Medium (45/100)",
    recommendations: [
      "Log every bet, even the small ones.",
      "Review your 'Tilt' tag in the journal weekly.",
      "Stop betting on leagues you don't follow closely."
    ],
    pitch: "You are working hard but running in circles. The **€19 Starter Kit** gives you the Journal and Workflow to finally see the data behind your results. **One avoided bad bet covers the cost.**"
  },
  {
    name: "The Emotionally Reactive Bettor",
    min: 121,
    max: 220,
    color: "text-orange-400",
    leak: "Chasing Losses",
    lossSource: "Doubling stakes or betting on random live events to 'fix' a bad day.",
    fix: "Implement the 24-Hour Stop-Loss Rule.",
    riskScore: "High (78/100)",
    recommendations: [
      "Never bet live to recover a pre-match loss.",
      "Use the 'Impulse Check' AI prompt before EVERY bet.",
      "Take a mandatory break after 2 consecutive losses."
    ],
    pitch: "Your emotions are expensive. **Based on your profile, BettingClarity would help you most with slowing down decisions.** Avoiding just one 'rage bet' pays for the Pro package instantly."
  },
  {
    name: "The Impulse Gambler",
    min: 221,
    max: 9999,
    color: "text-red-500",
    leak: "Total Lack of Structure",
    lossSource: "Betting for dopamine rather than value. High volume on low-quality events.",
    fix: "You need a rigid external system (The Protocol).",
    riskScore: "Critical (94/100)",
    recommendations: [
      "Stop betting immediately for 3 days.",
      "Do not open the betting app without the Workflow open.",
      "Focus on ONE sport only."
    ],
    pitch: "You are bleeding money. You don't need tips; you need a seatbelt. The **BettingClarity System** is cheaper than your next losing bet and forces you to slow down. Build a process tailored to you before you deposit again."
  }
];

const QuizModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('intro'); // intro, question, analyzing, result
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleStart = () => {
    setStep('question');
    setCurrentQ(0);
    setScore(0);
  };

  const handleAnswer = (points) => {
    const newScore = score + points;
    setScore(newScore);
    
    if (currentQ < QUIZ_QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    } else {
      setStep('analyzing');
      setTimeout(() => {
        calculateResult(newScore);
      }, 2500);
    }
  };

  const calculateResult = (finalScore) => {
    const found = ARCHETYPES.find(a => finalScore >= a.min && finalScore <= a.max) || ARCHETYPES[ARCHETYPES.length - 1];
    setResult(found);
    setStep('result');
  };

  const handleUnlockFix = () => {
    // Redirects directly to the €19 Starter kit payment
    window.location.href = 'https://buy.stripe.com/aFa9AT6qI0jK40m1u2dZ600';
  };

  const handleLearnMore = () => {
    onClose();
    const element = document.getElementById('product-deep-dive');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div ref={scrollRef} className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col no-scrollbar">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white z-20 p-2">
          <X className="w-6 h-6" />
        </button>

        {/* --- STEP: INTRO --- */}
        {step === 'intro' && (
          <div className="p-8 md:p-16 text-center animate-fade-in flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-8 border border-emerald-500/20">
              <BrainCircuit className="w-10 h-10 text-emerald-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Betting Clarity Assessment™</h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed text-lg">
              This is a psychological audit of your decision-making process. 
              We identify your "Clarity Leaks" and show you exactly where you are losing money.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mx-auto mb-12">
              <div className="bg-zinc-900/50 p-4 rounded-xl border border-white/5">
                <Clock className="w-6 h-6 text-zinc-500 mx-auto mb-2" />
                <span className="block text-white font-bold mb-1">~3 Minutes</span>
                <span className="text-xs text-zinc-500">To complete</span>
              </div>
              <div className="bg-zinc-900/50 p-4 rounded-xl border border-white/5">
                <Bot className="w-6 h-6 text-zinc-500 mx-auto mb-2" />
                <span className="block text-white font-bold mb-1">AI Analysis</span>
                <span className="text-xs text-zinc-500">Instant Report</span>
              </div>
              <div className="bg-zinc-900/50 p-4 rounded-xl border border-white/5">
                <ShieldCheck className="w-6 h-6 text-zinc-500 mx-auto mb-2" />
                <span className="block text-white font-bold mb-1">100% Free</span>
                <span className="text-xs text-zinc-500">No credit card</span>
              </div>
            </div>
            
            <Button onClick={handleStart} className="w-full sm:w-auto px-16 py-5 text-lg">
              Begin Assessment
            </Button>
          </div>
        )}

        {/* --- STEP: QUESTION --- */}
        {step === 'question' && (
          <div className="p-6 md:p-12 animate-fade-in flex flex-col h-full min-h-[60vh]">
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">{QUIZ_QUESTIONS[currentQ].category}</span>
                <span className="text-zinc-500 text-xs font-mono">{currentQ + 1} / {QUIZ_QUESTIONS.length}</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-500 ease-out"
                  style={{ width: `${((currentQ + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="flex-grow flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-tight">
                {QUIZ_QUESTIONS[currentQ].question}
              </h3>

              <div className="space-y-4">
                {QUIZ_QUESTIONS[currentQ].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(opt.points)}
                    className="w-full text-left p-6 rounded-xl border border-white/10 bg-zinc-900/40 hover:bg-zinc-800 hover:border-emerald-500/50 hover:text-white text-zinc-300 transition-all duration-200 flex items-center group"
                  >
                    <div className="w-6 h-6 rounded-full border border-zinc-600 group-hover:border-emerald-500 mr-5 flex-shrink-0 flex items-center justify-center transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-lg font-medium">{opt.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- STEP: ANALYZING --- */}
        {step === 'analyzing' && (
          <div className="p-12 text-center flex flex-col items-center justify-center min-h-[60vh]">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full animate-pulse"></div>
              <Loader2 className="relative w-16 h-16 text-emerald-500 animate-spin" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Analyzing your patterns...</h3>
            <p className="text-zinc-500 animate-pulse">Comparing against professional bettor profiles.</p>
          </div>
        )}

        {/* --- STEP: RESULT --- */}
        {step === 'result' && result && (
          <div className="flex flex-col lg:flex-row min-h-[80vh]">
            {/* Left: Profile Card */}
            <div className="w-full lg:w-5/12 bg-[#0f0f0f] p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
              <div className="blob-green top-0 left-0 opacity-10 pointer-events-none"></div>
              
              <div className="relative z-10">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 block">Your Profile Archetype</span>
                <h2 className={`text-4xl font-bold mb-8 ${result.color} leading-tight`}>{result.name}</h2>

                <div className="space-y-6">
                  <div className="bg-black/40 p-5 rounded-xl border border-white/5">
                    <span className="text-xs text-zinc-500 block mb-2 font-bold uppercase">Primary Clarity Leak</span>
                    <span className="text-white font-semibold flex items-start text-lg">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      {result.leak}
                    </span>
                  </div>

                  <div className="bg-black/40 p-5 rounded-xl border border-white/5">
                    <span className="text-xs text-zinc-500 block mb-2 font-bold uppercase">Biggest Source of Loss</span>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {result.lossSource}
                    </p>
                  </div>
                  
                  <div className="bg-black/40 p-5 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-zinc-500 font-bold uppercase">Risk Score</span>
                      <span className={`text-xs font-bold ${result.name.includes("Impulse") ? "text-red-500" : "text-emerald-500"}`}>{result.riskScore}</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${result.name.includes("Impulse") || result.name.includes("Reactive") ? "bg-red-500" : "bg-emerald-500"}`} 
                        style={{ width: result.name.includes("Impulse") ? '94%' : result.name.includes("Reactive") ? '78%' : result.name.includes("Grinder") ? '45%' : '12%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Recommendations & Pitch */}
            <div className="w-full lg:w-7/12 p-8 md:p-12 bg-[#050505] flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Sparkles className="w-5 h-5 text-emerald-500 mr-3" />
                  3 Free Recommendations
                </h3>
                
                <ul className="space-y-4">
                  {result.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start bg-zinc-900/30 p-4 rounded-lg border border-white/5">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm leading-relaxed">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-b from-emerald-900/10 to-transparent border border-emerald-500/20 rounded-xl p-6 md:p-8 mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wide">Why BettingClarity Fits You</h4>
                </div>
                <p className="text-white text-base leading-relaxed mb-4">
                  <span dangerouslySetInnerHTML={{ __html: result.pitch.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </p>
                <div className="flex items-center gap-2 text-zinc-500 text-xs italic bg-black/20 p-2 rounded">
                  <ThumbsUp className="w-3 h-3" />
                  <span>Based on your profile, eliminating just one or two bad bets pays for the purchase.</span>
                </div>
              </div>

              <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/5">
                <Button onClick={handleUnlockFix} className="flex-grow text-center justify-center py-6 text-lg">
                  Unlock Your Personal Fix
                </Button>
                <button onClick={handleLearnMore} className="px-8 py-4 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors text-sm font-bold whitespace-nowrap">
                  Learn More
                </button>
              </div>
              <p className="text-center text-zinc-600 text-xs mt-4">
                Build a Process Tailored to You. Instant Access.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Sections ---

const Hero = ({ onOpenQuiz }) => (
  <header className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden">
    {/* Background Blobs */}
    <div className="blob-green top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
    <div className="blob-green bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-40"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-8 backdrop-blur-sm">
        <ShieldCheck className="w-4 h-4 mr-2" />
        <span className="tracking-wide uppercase text-xs">Your insurance against chaos</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-8 leading-[1.1]">
        Stop Guessing. <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-white">
          Start Deciding.
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
        Data chaos kills your profit. BettingClarity is the AI system that turns information noise into clean decisions. <br className="hidden md:block" />
        <span className="text-white font-medium">No tips. No "locks". Just structure.</span>
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <Button onClick={onOpenQuiz}>
          Start Free Assessment
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        
        <button 
          onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center justify-center text-zinc-400 text-sm font-medium transition-colors hover:text-white mt-4 sm:mt-0 sm:ml-4"
        >
          <div className="flex -space-x-2 mr-3">
            {[1,2,3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-zinc-800 flex items-center justify-center text-[10px] text-white font-bold">
                 <Users className="w-3 h-3" />
              </div>
            ))}
          </div>
          Join bettors building a system
        </button>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-6 text-left relative z-10">
        <div className="bg-zinc-900/90 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:border-emerald-500/30 transition-colors shadow-lg shadow-black/50">
          <div className="flex items-center gap-1 text-emerald-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-emerald-400" />)}
          </div>
          <p className="text-zinc-200 text-sm mb-4 leading-relaxed">
            "The 'Goodwill Gesture' prompt actually worked. I pasted the script into LiveChat and got a <strong className="text-emerald-400">€25 free bet</strong> I didn't even know I qualified for. Paid for the kit instantly."
          </p>
          <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">MT</div>
            <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Mark T. — UK</div>
          </div>
        </div>

        <div className="bg-zinc-900/90 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:border-emerald-500/30 transition-colors shadow-lg shadow-black/50">
          <div className="flex items-center gap-1 text-emerald-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-emerald-400" />)}
          </div>
          <p className="text-zinc-200 text-sm mb-4 leading-relaxed">
            "The 'Leak Finder' prompt showed me I was losing 80% of my parlay bets. I cut them out immediately and my <strong className="text-emerald-400">ROI turned green</strong> in the first week. Simple math."
          </p>
          <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">JL</div>
            <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Jonas L. — Norway</div>
          </div>
        </div>

        <div className="bg-zinc-900/90 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:border-emerald-500/30 transition-colors shadow-lg shadow-black/50">
          <div className="flex items-center gap-1 text-emerald-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-emerald-400" />)}
          </div>
          <p className="text-zinc-200 text-sm mb-4 leading-relaxed">
            "I love betting but hate the hours of research. The workflow scripts <strong className="text-emerald-400">cut my research time by 90%</strong>. I skip the boring part and get straight to the decision."
          </p>
          <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">AR</div>
            <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Alex R. — Canada</div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Problem = () => (
  <section className="relative py-24 bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading 
        title="How much is chaos costing you?"
        subtitle="Most players don't lose because of bad luck. They lose because their decision process is broken."
      />
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover:-translate-y-1 transition-transform">
          <div className="w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mb-6">
            <AlertTriangle className="w-7 h-7 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Ignoring Red Flags</h3>
          <p className="text-zinc-400 leading-relaxed">
            How many times have you lost a bet because you ignored a critical injury or stat just to force a play? Emotional blindness is expensive.
          </p>
        </Card>

        <Card className="hover:-translate-y-1 transition-transform">
          <div className="w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mb-6">
            <TrendingUp className="w-7 h-7 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">The "Make it Back" Trap</h3>
          <p className="text-zinc-400 leading-relaxed">
            You lose a bet. You double down on a game you haven't researched to "recover." This isn't strategy. It's donating money.
          </p>
        </Card>

        <Card className="hover:-translate-y-1 transition-transform">
          <div className="w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mb-6">
            <Database className="w-7 h-7 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Analysis Paralysis</h3>
          <p className="text-zinc-400 leading-relaxed">
            20 tabs open. Twitter gurus shouting opposite opinions. You freeze, panic, and make a last-minute decision based on noise, not signal.
          </p>
        </Card>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
        <div className="mb-12 lg:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Your insurance against<br />
            <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">bad decisions.</span>
          </h2>
          <p className="text-xl text-zinc-300 mb-8 font-light">
            <strong>BettingClarity</strong> isn't a magic crystal ball. It's a seatbelt. It stops you from crashing your bankroll on impulse bets.
          </p>
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            We use AI to enforce discipline. It filters the noise, checks your logic, and forces you to answer: "Is this value, or am I just bored?"
          </p>
          
          <ul className="space-y-5">
            {[
              "Stop losing money on 'vibes' and gut feelings",
              "Filter out bad bets in 60 seconds",
              "Standardize your pre-match checks",
              "Build a system that protects you from tilt"
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
              <div className="group flex items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.4)]">1</div>
                <div className="ml-4 h-px bg-zinc-800 flex-grow group-hover:bg-emerald-500/30 transition-colors"></div>
                <div className="ml-4 text-zinc-300 font-semibold">Input Data</div>
              </div>
              <div className="group flex items-center">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold text-sm">2</div>
                <div className="ml-4 h-px bg-zinc-800 flex-grow group-hover:bg-emerald-500/30 transition-colors"></div>
                <div className="ml-4 text-zinc-300 font-semibold">AI Risk Check</div>
              </div>
              <div className="group flex items-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.2)]">3</div>
                <div className="ml-4 h-px bg-zinc-800 flex-grow group-hover:bg-emerald-500/30 transition-colors"></div>
                <div className="ml-4 text-white font-bold tracking-wide">Clear Decision</div>
              </div>
            </div>
            
            <div className="mt-10 bg-[#0a0a0a] rounded-xl p-6 border border-zinc-800/60 font-mono text-sm">
              <div className="text-red-500 mb-4 font-bold flex items-center animate-pulse"><ShieldAlert className="w-4 h-4 mr-2"/> RISK ALERT TRIGGERED</div>
              <div className="space-y-2 text-zinc-400">
                <p>• Market Movement: <span className="text-red-400">Suspect</span> (Line drifting against public)</p>
                <p>• Emotional Check: <span className="text-red-400">Failed</span> (Chasing previous loss)</p>
              </div>
              <div className="mt-6 text-white font-bold border-t border-zinc-800 pt-4 flex justify-between items-center">
                 <span>RECOMMENDATION:</span>
                 <span className="text-red-500 bg-red-500/10 px-3 py-1 rounded border border-red-500/20">ABORT BET</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AgentSection = () => (
  <section className="relative py-24 bg-[#0a0a0a] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading 
        title="Your Private BettingClarity AI" 
        subtitle="Included in Pro & Founder plans. This isn't just ChatGPT—it's a disciplined gatekeeper built on our proprietary workflow."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <Card className="bg-[#121212] p-8 border-emerald-500/20">
            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Live Agent Session</span>
            </div>
            <div className="space-y-6 font-mono text-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400">You</div>
                <div className="bg-zinc-800/50 p-3 rounded-lg text-zinc-300">
                  "Real Madrid are down 1-0 at half time. Odds are 2.50. Should I bet on them to turn it around?"
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded bg-emerald-900/50 flex items-center justify-center text-emerald-400"><Bot className="w-4 h-4" /></div>
                <div className="bg-emerald-900/10 border border-emerald-500/10 p-3 rounded-lg text-emerald-100/90">
                  <strong className="text-emerald-400 block mb-2">ANALYSIS:</strong>
                  1. <span className="text-white">Trend:</span> Madrid has only won 1/5 away games when trailing at HT this season.<br/>
                  2. <span className="text-white">Value Check:</span> Implied probability is 40%. Statistical probability is 22%.<br/>
                  3. <span className="text-white">Risk Flag:</span> You are reacting to the scoreline, not the data.<br/><br/>
                  <strong className="text-white border-t border-emerald-500/20 pt-2 block mt-1">DECISION: PASS. Value does not exceed risk.</strong>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="order-1 lg:order-2">
          <h3 className="text-3xl font-bold text-white mb-6">A decision engine. <br/>Not a prediction tool.</h3>
          <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
            Generic AI tries to please you. <strong>BettingClarity AI</strong> tries to protect you. It follows strict rules to filter noise, detect bias, and identify risks before you place a bet.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Scale className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Validates "PASS" as a Strategy</h4>
                <p className="text-zinc-500 text-sm">Most tools push you to bet. Our AI helps you stay on the sidelines when the edge isn't there.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <BrainCircuit className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Structured Output</h4>
                <p className="text-zinc-500 text-sm">Never vague. The Agent always assesses: Market Liquidity, Team News, and Price Value.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <Zap className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">ChatGPT Plus Required</h4>
                <p className="text-zinc-500 text-sm">
                  Active ChatGPT Plus subscription required for file analysis capabilities. This allows us to offer the entire system as a single one-time payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ValueSection = () => (
  <section className="py-24 bg-[#0f0f0f]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading 
        title="Return on Discipline" 
        subtitle="How the system pays for itself without winning a single bet."
      />

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 mb-6 text-emerald-400">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Loss Prevention</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            If the AI convinces you to PASS on a single risky €50 bet you would have otherwise lost, the Pro package has effectively paid for itself immediately.
          </p>
        </div>

        <div className="text-center p-6 relative">
          <div className="absolute top-1/2 left-0 w-px h-24 bg-zinc-800 -translate-y-1/2 hidden md:block"></div>
          <div className="absolute top-1/2 right-0 w-px h-24 bg-zinc-800 -translate-y-1/2 hidden md:block"></div>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 mb-6 text-purple-400">
            <Bot className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Impulse Control</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            In practice, users report that slowing down to consult the AI Agent drastically reduces "boredom betting" volume, protecting the bankroll.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 mb-6 text-blue-400">
            <Wallet className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Smart Administration</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            One well-timed goodwill request or retention offer—drafted perfectly by the AI—can realistically offset the price of the entire system.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const LeadMagnetSection = ({ onOpenQuiz }) => (
  <section id="assessment" className="relative py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
    <div className="blob-green top-1/2 right-0 translate-x-1/2 -translate-y-1/2 opacity-20 w-[600px] h-[600px]"></div>
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3 mr-2" />
            Free AI Assessment
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            How Clear Is Your <br/>
            <span className="text-emerald-500">Betting Process?</span>
          </h2>
          
          <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
            Get a free, personalized <strong>BettingClarity Player Profile™</strong> in 3 minutes. Discover where you lose focus—and money.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 mt-1">
                <span className="text-xs font-bold text-white">1</span>
              </div>
              <div className="ml-4">
                <h4 className="text-white font-bold text-sm">Self-Diagnosis (Psychology)</h4>
                <p className="text-zinc-500 text-sm">Identify if you are an "Impulse Bettor", "Overconfident Analyst", or "Unstructured Grinder".</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 mt-1">
                <span className="text-xs font-bold text-white">2</span>
              </div>
              <div className="ml-4">
                <h4 className="text-white font-bold text-sm">Find Your "Clarity Leaks"</h4>
                <p className="text-zinc-500 text-sm">See exactly where you lose money: bad timing, emotional chasing, or lack of stop-loss rules.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 mt-1">
                <span className="text-xs font-bold text-white">3</span>
              </div>
              <div className="ml-4">
                <h4 className="text-white font-bold text-sm">Savings Framing</h4>
                <p className="text-zinc-500 text-sm">We don't promise profit. We show you how eliminating 2-3 bad habits protects your bankroll.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="white" className="w-full sm:w-auto" onClick={onOpenQuiz}>
              Start Free Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-zinc-600 text-xs flex items-center">
              <Clock className="w-3 h-3 mr-1" /> Takes 3 mins. No signup required.
            </p>
          </div>
        </div>

        <div className="relative">
           <div className="absolute -right-4 -top-6 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full"></div>
           <div className="relative glass-panel rounded-xl p-8 shadow-2xl transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
             <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
               <div className="flex items-center gap-2">
                 <ClipboardCheck className="w-5 h-5 text-emerald-500" />
                 <span className="font-bold text-white text-sm tracking-wide">YOUR CLARITY PROFILE</span>
               </div>
               <span className="text-xs text-zinc-500 font-mono">GEN_ID: 8X29</span>
             </div>

             <div className="space-y-6">
                <div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Your Archetype</span>
                  <div className="text-2xl font-bold text-white mt-1">Impulse-Driven Bettor</div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-orange-500 w-[75%]"></div>
                  </div>
                  <p className="text-orange-400 text-xs mt-2 flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" /> High reactivity to live scores
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-900/50 p-3 rounded-lg border border-white/5">
                    <span className="text-xs text-zinc-500 block mb-1">Biggest Leak</span>
                    <span className="text-white font-semibold text-sm">Chasing Losses (PM)</span>
                  </div>
                  <div className="bg-zinc-900/50 p-3 rounded-lg border border-white/5">
                    <span className="text-xs text-zinc-500 block mb-1">Risk Score</span>
                    <span className="text-red-400 font-semibold text-sm">High (82/100)</span>
                  </div>
                </div>

                <div className="bg-emerald-900/10 border border-emerald-500/10 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-emerald-400 mt-0.5" />
                    <div>
                      <h5 className="text-emerald-400 text-sm font-bold mb-1">Recommendation</h5>
                      <p className="text-zinc-300 text-xs leading-relaxed">
                        Based on your profile, implementing a <strong>"24h Rule"</strong> for loss recovery would likely save you 20-30% of your monthly turnover.
                      </p>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const ProductDeepDive = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const products = [
    {
      title: "Workflow PDF",
      icon: <FileText className="w-4 h-4 mr-2" />,
      content: (
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg blur opacity-40"></div>
            <div className="relative bg-[#0f0f0f] rounded-lg border border-emerald-500/30 overflow-hidden aspect-[4/3] flex items-center justify-center shadow-2xl">
              <img src="https://placehold.co/800x600/0f0f0f/10b981?text=Workflow+Guide+PDF" alt="Workflow Guide" className="object-cover w-full h-full" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">The Engine: 6-Step Decision Matrix</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              This is not another ebook with "guaranteed locks." This is your new Operating System. The BettingClarity Core Workflow™ is the protocol that separates amateurs from professionals.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>The Power of the Pass:</strong> Learn why NOT betting is often your most profitable decision.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Signal vs. Noise:</strong> Filter out media narratives and focus on data that moves lines.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>The 3-Minute Filter:</strong> Instantly assess if a match is even worth your time.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Pro Prompts",
      icon: <Zap className="w-4 h-4 mr-2" />,
      content: (
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg blur opacity-25"></div>
            <div className="relative bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden aspect-[4/3] flex items-center justify-center">
              <img src="https://placehold.co/800x600/1a1a1a/a855f7?text=Prompt+Pack+Library" alt="Prompt Library" className="object-cover w-full h-full opacity-90" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">The Intelligence Engine</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Access to our proprietary Prompt Pack Library. You don't need to be a prompt engineer. Just paste our commands into ChatGPT or Claude.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>The Risk Analyst:</strong> Force AI to act as a ruthless risk manager that finds holes in your logic.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Sport-Specific Modules:</strong> Dedicated protocols for Football, Tennis, NBA, NHL, and Esports.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Bias Detection:</strong> Identify when you are betting on a team just because you "like" them.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "AI Agent",
      icon: <Bot className="w-4 h-4 mr-2" />,
      content: (
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25"></div>
            <div className="relative bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden aspect-[4/3] flex items-center justify-center">
              <img src="https://placehold.co/800x600/1a1a1a/3b82f6?text=Custom+AI+Agent+Chat" alt="AI Agent Chat" className="object-cover w-full h-full opacity-90" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Your Private Risk Manager</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              This isn't a "tipster bot". It's a decision engine designed to slow you down. It doesn't tell you who to bet on; it tells you IF you should bet.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Play vs Pass Logic:</strong> The agent validates your thesis against strict value criteria.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Noise Filter:</strong> Ignores hype and focuses on liquidity, lineup changes, and statistical divergence.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>24/7 Availability:</strong> An objective second opinion available whenever the market is open.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Smart Journal",
      icon: <BarChart3 className="w-4 h-4 mr-2" />,
      content: (
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg blur opacity-25"></div>
            <div className="relative bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden aspect-[4/3] flex items-center justify-center">
              <img src="https://placehold.co/800x600/1a1a1a/f97316?text=Google+Sheets+Journal" alt="Smart Journal" className="object-cover w-full h-full opacity-90" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">The Black Box Journal</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              A ready-to-use Google Sheets template that tracks more than just money. It audits your mind.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Emotional Tagging:</strong> Track "Tilt", "Boredom", and "FOMO" bets to see what they cost you.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>The Feedback Loop:</strong> A system that tells you: "Stop betting on Tennis, you lose 80% of your money there."</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Automated Audit:</strong> Visualize your "Edge" vs "Luck" over time.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Financial Logic",
      icon: <Lock className="w-4 h-4 mr-2" />,
      content: (
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-lg blur opacity-25"></div>
            <div className="relative bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden aspect-[4/3] flex items-center justify-center">
              <img src="https://placehold.co/800x600/1a1a1a/ef4444?text=Scam+Detection+Protocol" alt="Anti Scam Protocol" className="object-cover w-full h-full opacity-90" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">The Financial Fortress</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Forget flat staking based on "feeling." We implement the mathematical formulas used by professional advantage players.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Kelly Criterion:</strong> Maximize growth while minimizing the risk of ruin.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>The Red Pill Protocol:</strong> How scammers fake winning screenshots in 10 seconds. Never get fooled again.</span>
              </li>
              <li className="flex items-start text-zinc-300">
                <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Liquidity Truth:</strong> Why real pros never sell their picks for cheap (it kills their edge).</span>
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
        <SectionHeading title="Inside The System" subtitle="Everything you need to profesionalize your process." />
        
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
  <section id="pricing" className="relative py-24 bg-[#0a0a0a]">
    <div className="blob-green top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 w-[800px] h-[800px]"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="One-Time Payment. Lifetime Clarity." subtitle="Stop paying for noise. Build a decision system once." />
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        {/* Starter */}
        <Card className="p-8 flex flex-col bg-[#0a0a0a] border-zinc-800 opacity-80 hover:opacity-100 transition-opacity">
          <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
          <div className="text-4xl font-bold text-white mb-2 tracking-tighter">€19</div>
          <div className="text-xs font-bold text-emerald-400 mb-6 uppercase tracking-widest bg-emerald-900/20 px-2 py-1 inline-block rounded border border-emerald-900/50">One-Time Payment</div>
          <p className="text-zinc-500 text-sm mb-8">Core structure to stop impulsive betting.</p>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" /> <strong>Core Decision Workflow</strong></li>
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" /> 25+ Essential Clarity Prompts (+Bonus)</li>
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" /> Betting Journal (Google Sheets)</li>
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" /> Play vs Pass Framework</li>
          </ul>
          <p className="text-center text-xs text-zinc-500 mb-3 italic">Best for getting structured quickly.</p>
          <Button variant="secondary" className="w-full" onClick={() => window.location.href = 'https://buy.stripe.com/aFa9AT6qI0jK40m1u2dZ600'}>Choose Starter</Button>
          <p className="mt-4 text-xs text-zinc-600 flex items-center justify-center">
            <ShieldAlert className="w-3 h-3 mr-1.5" />
            Secure payment via Stripe
          </p>
        </Card>

        {/* Pro */}
        <Card glow={true} allowOverflow={true} className="p-10 flex flex-col relative md:-translate-y-6 bg-[#18181b]">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.5)] whitespace-nowrap z-20">Most Popular</div>
          <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
          <div className="text-5xl font-bold text-white mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-emerald-200">€39</div>
          <div className="text-xs font-bold text-emerald-400 mb-6 uppercase tracking-widest bg-emerald-900/20 px-2 py-1 inline-block rounded border border-emerald-900/50">One-Time Payment</div>
          <p className="text-zinc-400 text-sm mb-8">The complete system with AI assistance.</p>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> <strong>Everything in Starter</strong></li>
            <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> Full Prompt Library (All Categories)</li>
            <li className="flex text-white text-sm font-semibold bg-emerald-500/10 p-2 rounded -mx-2 border border-emerald-500/20"><Bot className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> Custom AI Mini-Agent (Private Chat)</li>
            <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> Risk & Bias Detection Tools</li>
            <li className="flex text-zinc-300 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> Mental Discipline & PASS Framework</li>
          </ul>
          <p className="text-center text-xs text-emerald-400/80 mb-4 font-medium">One avoided bad bet can justify this.</p>
          <Button variant="primary" className="w-full" onClick={() => window.location.href = 'https://buy.stripe.com/7sY5kD2aseaA9kGb4CdZ601'}>Get Clarity Now</Button>
          <p className="mt-4 text-xs text-zinc-500 flex items-center justify-center">
            <ShieldAlert className="w-3 h-3 mr-1.5" />
            Secure payment via Stripe
          </p>
        </Card>

        {/* Founder */}
        <Card className="p-8 flex flex-col bg-[#0a0a0a] border-zinc-800">
          <h3 className="text-xl font-bold text-white mb-2">Founder</h3>
          <div className="text-4xl font-bold text-white mb-2 tracking-tighter">€99</div>
          <div className="text-xs font-bold text-emerald-400 mb-6 uppercase tracking-widest bg-emerald-900/20 px-2 py-1 inline-block rounded border border-emerald-900/50">One-Time Payment</div>
          <p className="text-zinc-500 text-sm mb-8">Future-proof access for serious builders.</p>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" /> <strong>Everything in Pro</strong></li>
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" /> Lifetime Access</li>
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" /> All Future Tools & Updates</li>
            <li className="flex text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" /> Early Access to New Features</li>
            <li className="flex text-zinc-400 text-sm"><Zap className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" /> Priority Support</li>
          </ul>
          <p className="text-center text-xs text-zinc-500 mb-3 italic">Limited early supporter access.</p>
          <Button variant="outline" className="w-full" onClick={() => window.location.href = 'https://buy.stripe.com/28E3cveXe6I8bsO3CadZ602'}>Become a Founder</Button>
          <p className="mt-4 text-xs text-zinc-600 flex items-center justify-center">
            <ShieldAlert className="w-3 h-3 mr-1.5" />
            Secure payment via Stripe
          </p>
        </Card>
      </div>
    </div>
  </section>
);

const Footer = () => (
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
        <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-emerald-500 transition-colors">Contact</a>
      </div>

      <p className="text-zinc-700 text-sm">
        © {new Date().getFullYear()} BettingClarity. All rights reserved.
      </p>
    </div>
  </footer>
);

const App = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      <GlobalStyles />
      
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-black">
              <Workflow className="w-5 h-5" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">BettingClarity</span>
          </div>
          <Button 
            variant="primary" 
            className="hidden sm:flex !py-2.5 !px-6 text-sm !font-bold"
            onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
          >
            Get Clarity Now
          </Button>
        </div>
      </nav>

      <Hero onOpenQuiz={() => setIsQuizOpen(true)} />
      <Problem />
      <Solution />
      <AgentSection />
      <ValueSection />
      <LeadMagnetSection onOpenQuiz={() => setIsQuizOpen(true)} />
      <ProductDeepDive />
      <Pricing />
      
      <section className="relative py-32 overflow-hidden">
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
                 <img src="https://placehold.co/400x300/1a1a1a/FFF?text=Smart+Journal+Sheet" alt="Betting Journal Sheet" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div className="relative group w-full max-w-[320px] transform md:-translate-y-6 z-20 hover:scale-105 transition-all duration-500">
               <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
               <div className="relative bg-[#0f0f0f] rounded-lg border border-emerald-500/30 overflow-hidden aspect-[3/4] flex items-center justify-center shadow-2xl">
                 <img src="https://placehold.co/600x800/0f0f0f/10b981?text=Workflow+Guide+PDF" alt="Workflow Guide Cover" className="object-cover w-full h-full" />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                   <p className="text-white font-bold text-center text-sm">The Workflow Guide</p>
                 </div>
               </div>
            </div>

            <div className="relative group w-full max-w-[280px] transform md:rotate-[6deg] hover:rotate-0 transition-all duration-500 z-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden aspect-[4/3] flex items-center justify-center">
                <img src="https://placehold.co/400x300/1a1a1a/FFF?text=AI+Agent+Interface" alt="AI Tool Interface" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity" />
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

      <Footer />
    </div>
  );
};

export default App;