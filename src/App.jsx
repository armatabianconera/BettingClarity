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
  Crown // Added Crown for Founder VIP
} from 'lucide-react';

// --- Legal Content Constants ---

const TERMS_TEXT = `1. Introduction
Welcome to BettingClarity ("we", "our", "us").

BettingClarity provides digital decision-support tools, AI-assisted workflows, prompt libraries, and educational materials designed to help users improve decision-making structure and discipline.
By accessing or using our website, products, or services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use the service.

2. Nature of the Service
BettingClarity provides:
• digital educational content
• decision-support frameworks
• AI-assisted analytical tools
• prompt libraries and self-assessment tools

Important:
BettingClarity does not provide:
• betting tips
• predictions
• guarantees
• financial, investment, or gambling advice
All content is provided for educational and self-improvement purposes only.

3. No Professional Advice
All information provided by BettingClarity is general in nature and does not constitute professional, financial, or gambling advice.
You acknowledge that:
• betting and gambling involve risk
• outcomes are uncertain
• you are solely responsible for your decisions and actions
Use of the service is entirely at your own discretion and risk.

4. Eligibility
You must be at least 18 years old (or the legal age in your jurisdiction) to use BettingClarity.
By using the service, you confirm that you meet this requirement.

5. Accounts and Access
Some features may require account creation or access via third-party platforms (e.g., AI tools).
You are responsible for:
• maintaining confidentiality of access credentials
• all activity under your access
We reserve the right to suspend or terminate access if misuse or abuse is detected.

6. Payments and Purchases
BettingClarity products are offered as one-time digital purchases, unless explicitly stated otherwise.
All payments:
• are processed securely via third-party payment providers (e.g., Stripe)
• grant access to digital content and tools
Due to the digital nature of the products, refunds are handled on a case-by-case basis, unless required by applicable law.

7. Intellectual Property
All content, materials, prompts, workflows, branding, and software elements are the intellectual property of BettingClarity.
You may:
• use the materials for personal use
You may not:
• redistribute
• resell
• copy
• modify
• publish
the content without prior written consent.

8. Acceptable Use
You agree not to:
• misuse the service
• attempt to reverse-engineer tools
• use the service for unlawful purposes
• use the service in a way that violates applicable laws or regulations
We reserve the right to restrict access if these rules are violated.

9. Limitation of Liability
To the maximum extent permitted by law, BettingClarity shall not be liable for:
• financial losses
• betting or gambling outcomes
• indirect or consequential damages
Your use of the service is entirely at your own risk.

10. Disclaimer of Warranties
The service is provided "as is" and "as available", without warranties of any kind, express or implied.
We do not guarantee uninterrupted access or error-free operation.

11. Changes to the Service or Terms
We may update these Terms from time to time.
Continued use of the service after changes constitutes acceptance of the updated Terms.

12. Governing Law
These Terms shall be governed by and interpreted in accordance with the laws of the applicable jurisdiction of the business operator.

13. Contact
For questions regarding these Terms, contact:
📧 support@bettingclarity.com`;

const PRIVACY_TEXT = `1. Introduction
This Privacy Policy explains how BettingClarity collects, uses, and protects your personal data.
We are committed to protecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR).

2. Data We Collect
We may collect the following data:

a) Information You Provide
• email address
• name (if provided)
• quiz or assessment responses
• support communications

b) Automatically Collected Data
• IP address
• browser type
• device information
• usage data (pages visited, interactions)

3. How We Use Your Data
We use your data to:
• provide access to products and services
• generate personalized reports or assessments
• improve our tools and content
• communicate with you (service-related messages)
• comply with legal obligations
We do not sell your personal data.

4. Legal Basis for Processing (GDPR)
We process personal data based on:
• your consent
• performance of a contract
• legitimate business interests
• legal obligations

5. Payments
Payments are processed by third-party provider Stripe.
We do not store your payment card details.
Please refer to Stripe’s Privacy Policy for details on payment data handling.

6. Cookies and Analytics
We may use cookies and similar technologies to:
• ensure website functionality
• analyze usage
• improve user experience
You may control cookies through your browser settings.

7. Data Retention
We retain personal data only as long as necessary to:
• provide services
• comply with legal requirements
You may request deletion of your data at any time, subject to legal obligations.

8. Data Sharing
We may share data with trusted service providers strictly for:
• hosting
• analytics
• payment processing
All providers are required to handle data securely and lawfully.

9. Your Rights (GDPR)
You have the right to:
• access your data
• correct inaccurate data
• request deletion
• restrict or object to processing
• request data portability
To exercise your rights, contact us at:
📧 support@bettingclarity.com

10. Data Security
We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse.

11. International Transfers
If data is transferred outside the EU, we ensure appropriate safeguards are in place.

12. Changes to This Policy
We may update this Privacy Policy periodically.
Updates will be posted on this page with a revised date.

13. Contact
For privacy-related questions, contact:
📧 support@bettingclarity.com`;

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

const LegalModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      
      {/* Modal */}
      <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl animate-fade-in">
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#0f0f0f] rounded-t-2xl">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <div className="prose prose-invert prose-sm max-w-none text-zinc-300 whitespace-pre-wrap leading-relaxed font-light">
            {content}
          </div>
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
  // ... archetypes same as before ...
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

// --- Report Mock Data ---

const SAMPLE_REPORTS = {
  // ... sample reports same as before ...
  leak: {
    title: "Leak Detector Report",
    subtitle: "Analysis of last 50 bets",
    content: (
      <div className="space-y-6">
        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
          <h4 className="text-red-400 font-bold uppercase text-xs mb-2 flex items-center"><AlertTriangle className="w-4 h-4 mr-2"/> Critical Leak Detected</h4>
          <p className="text-white text-sm font-semibold">Live In-Play (75-90 min)</p>
          <p className="text-zinc-400 text-xs mt-1">You have lost 85% of bets placed in the last 15 minutes of matches.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-zinc-500 text-xs block">ROI Pre-Match</span>
            <span className="text-emerald-400 font-mono">+12.4%</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
             <span className="text-zinc-500 text-xs block">ROI Live</span>
             <span className="text-red-400 font-mono">-28.2%</span>
          </div>
        </div>
        <div className="border-t border-white/10 pt-4">
          <h5 className="text-emerald-400 font-bold text-xs uppercase mb-2">Recommended Fix</h5>
          <p className="text-zinc-300 text-sm">Stop all live betting for 7 days. Use the "Pre-Match Only" prompt protocol.</p>
        </div>
      </div>
    )
  },
  pattern: {
    title: "Pattern Finder",
    subtitle: "Behavioral Analysis",
    content: (
      <div className="space-y-6">
         <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
          <h4 className="text-blue-400 font-bold uppercase text-xs mb-2 flex items-center"><Search className="w-4 h-4 mr-2"/> Hidden Pattern Found</h4>
          <p className="text-white text-sm font-semibold">The "Favorite" Trap</p>
          <p className="text-zinc-400 text-xs mt-1">You win 60% of bets on Underdogs, but lose money overall because you over-stake on "Safe Favorites" (1.30 odds range).</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg">
           <div className="flex justify-between text-xs text-zinc-400 mb-1">
             <span>Underdog Profit</span>
             <span className="text-emerald-400">+€450</span>
           </div>
           <div className="w-full bg-zinc-700 h-1.5 rounded-full mb-3">
             <div className="bg-emerald-500 h-1.5 rounded-full w-[70%]"></div>
           </div>
           <div className="flex justify-between text-xs text-zinc-400 mb-1">
             <span>Favorite Profit</span>
             <span className="text-red-400">-€320</span>
           </div>
           <div className="w-full bg-zinc-700 h-1.5 rounded-full">
             <div className="bg-red-500 h-1.5 rounded-full w-[40%]"></div>
           </div>
        </div>
      </div>
    )
  },
  psych: {
    title: "Psych Audit",
    subtitle: "Emotional State Analysis",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
           <div className="w-16 h-16 rounded-full border-4 border-orange-500 flex items-center justify-center text-orange-500 font-bold text-lg">
             72%
           </div>
           <div>
             <h4 className="text-white font-bold">Tilt Risk: HIGH</h4>
             <p className="text-zinc-500 text-xs">Based on recent stake increases after losses.</p>
           </div>
        </div>
        <div className="bg-zinc-800/50 p-4 rounded-lg border border-white/5">
           <h5 className="text-white font-bold text-sm mb-2">Trigger Event</h5>
           <p className="text-zinc-400 text-xs">Analysis shows you double your stake size immediately after a "Bad Beat" tag.</p>
        </div>
        <div className="border-t border-white/10 pt-4">
           <h5 className="text-emerald-400 font-bold text-xs uppercase mb-2">Suggested Material</h5>
           <div className="flex items-center text-zinc-300 text-xs bg-zinc-900 p-2 rounded">
             <PlayCircle className="w-4 h-4 mr-2 text-emerald-500"/>
             Watch: "The 24-Hour Rule Course Video"
           </div>
        </div>
      </div>
    )
  },
  weekly: {
    title: "Weekly Tactical Review",
    subtitle: "Strategy for Next Week",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 text-center">
           <div className="bg-zinc-800 p-3 rounded border border-white/5">
              <span className="text-zinc-500 text-xs uppercase">Volume</span>
              <div className="text-white font-bold">High (Too many bets)</div>
           </div>
           <div className="bg-zinc-800 p-3 rounded border border-white/5">
              <span className="text-zinc-500 text-xs uppercase">Win Rate</span>
              <div className="text-white font-bold">42% (Low)</div>
           </div>
        </div>
        <div className="bg-emerald-900/20 border border-emerald-500/20 p-4 rounded-lg">
           <h4 className="text-emerald-400 font-bold uppercase text-xs mb-3">Directives for Next Week</h4>
           <ul className="space-y-2 text-zinc-300 text-sm">
             <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-emerald-500"/> Limit daily bets to max 3.</li>
             <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-emerald-500"/> Enforce PASS on all Tennis matches.</li>
             <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-emerald-500"/> Review journal every Sunday.</li>
           </ul>
        </div>
      </div>
    )
  }
};

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
      
      <p className="text-xl md:text-2xl text-zinc-200 max-w-4xl mx-auto mb-6 leading-relaxed font-light">
        Most bettors don’t lose because of odds. They lose because of noise, emotion, and bad timing. <span className="font-normal">BettingClarity turns chaotic betting history into clear decisions and actionable performance reports.</span>
      </p>

      <p className="text-sm md:text-base text-emerald-400/90 font-bold tracking-wide uppercase mb-12 max-w-3xl mx-auto">
        Track decisions. Detect leaks. Fix what actually costs you money. <br className="hidden sm:block" />
        <span className="text-zinc-500 font-medium ml-0 sm:ml-2 mt-2 sm:mt-0 block sm:inline">No tips. No predictions. Just structure.</span>
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <Button 
          className="w-full sm:w-auto px-10 py-5 text-lg"
          onClick={() => document.getElementById('assessment').scrollIntoView({ behavior: 'smooth' })}
        >
          Get Your Free Betting Profile
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

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
  </header>
);

const Problem = () => (
  <section className="relative pt-32 pb-8 bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Centered Headline - Bigger & Bolder */}
      <div className="relative z-10 mb-20 max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
          It’s not bad luck. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-white">
            It’s unmanaged decisions.
          </span>
        </h2>
        <p className="text-2xl md:text-3xl text-zinc-300 max-w-4xl mx-auto leading-relaxed font-light">
          Most bettors don’t lose because they lack information — they lose because they lack a system to control decisions under pressure.
        </p>
      </div>
      
      {/* Green Separator Line */}
      <div className="w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
    </div>
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

const ReportModal = ({ isOpen, onClose, type, customContent }) => {
  if (!isOpen) return null;
  
  // Use custom content if provided (for the placeholder), otherwise fall back to sample reports
  const contentToRender = customContent || (type && SAMPLE_REPORTS[type]?.content);
  const titleToRender = customContent ? "Report Preview" : (type && SAMPLE_REPORTS[type]?.title);

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-[#0f0f0f] border border-white/10 rounded-xl w-full max-w-md shadow-2xl animate-fade-in flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-white/5 bg-[#141414] rounded-t-xl">
          <div>
            <h3 className="text-lg font-bold text-white">{titleToRender}</h3>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white"><X className="w-5 h-5"/></button>
        </div>
        <div className="p-6">
          {contentToRender}
        </div>
        <div className="p-5 border-t border-white/5 bg-[#141414] rounded-b-xl text-center">
           <Button onClick={onClose} className="w-full">Close Preview</Button>
        </div>
      </div>
    </div>
  );
};

// Helper Icon Component for Psych Audit since ActivityIcon isn't in main import sometimes
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

  // Placeholder content for the report modal as requested
  const getPlaceholderContent = (title) => (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-700">
        <FileCheck className="w-8 h-8 text-zinc-500" />
      </div>
      <h4 className="text-white font-bold text-lg mb-2">Example Report</h4>
      <p className="text-zinc-500 text-sm">Detailed example for {title} will be available here soon.</p>
    </div>
  );

  return (
    <section className="relative py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* REWORKED Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* 1. Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Your Personal Performance Reports
          </h2>

          {/* 2. Core Statement */}
          <h3 className="text-xl md:text-3xl font-bold text-white mb-6 leading-tight">
            We don’t tell you what to bet. <br className="hidden md:block"/>
            <span className="text-emerald-400">We show you how you actually bet — and what it costs you.</span>
          </h3>

          {/* 3. Subheadline */}
          <p className="text-lg text-zinc-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            Built entirely on your own bets, decisions, and behavior. <br className="hidden md:block"/>
            No tips. No predictions. Just clarity from your real data.
          </p>

          {/* 4. Process Flow (3 Steps) */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 relative">
            {/* Visual connector line for desktop */}
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

          {/* 5. Why it matters */}
          <div className="bg-zinc-900/30 rounded-2xl p-6 md:p-8 border border-white/5 mb-8 max-w-3xl mx-auto">
            <p className="text-base text-zinc-300 leading-relaxed font-light">
              Most bettors don't lose because they lack information. They lose because they lack feedback on their own behavior. 
              <strong className="text-white font-semibold block mt-2">BettingClarity acts as a mirror for your decision-making, exposing the hidden risks and emotional habits that drain your bankroll.</strong>
            </p>
          </div>

          {/* 6. Closing Statement */}
          <div className="inline-flex items-center gap-2 text-emerald-400/90 text-sm font-medium bg-emerald-900/10 px-5 py-2.5 rounded-full border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <ShieldCheck className="w-4 h-4" />
            <span>This system doesn’t promise profits. It protects the balance you already have.</span>
          </div>
        </div>

        {/* 4 Report Cards Grid - Full Width */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Leak Detector */}
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

          {/* Card 2: Pattern Finder */}
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

          {/* Card 3: Psych Audit */}
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

          {/* Card 4: Weekly Tactical */}
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

        {/* Closing Line - Big & Centered */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-tight">
            This isn’t advice from an AI. <br/>
            <span className="text-emerald-500">It’s feedback from your own decisions.</span>
          </h3>
        </div>

        {/* Master Strategy Report Screenshot Placeholder */}
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
                    <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Master Strategy Preview</div>
                    <div className="w-10"></div> {/* Spacer for centering */}
                </div>
                
                {/* Image Placeholder */}
                <div className="relative aspect-[16/9] w-full bg-[#0a0a0a] flex items-center justify-center">
                    <img 
                        src="https://placehold.co/1200x675/0f0f0f/10b981?text=PLACEHOLDER:+Master+Strategy+Report" 
                        alt="Master Strategy Report" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60"></div>
                </div>
            </div>
        </div>

      </div>
      
      {/* Updated Report Modal using placeholder content */}
      <ReportModal 
        isOpen={!!activeReport} 
        onClose={() => setActiveReport(null)} 
        type={activeReport} 
        customContent={activeReport ? getPlaceholderContent(
          activeReport === 'leak' ? 'Leak Detector' : 
          activeReport === 'pattern' ? 'Pattern Finder' : 
          activeReport === 'psych' ? 'Psych Audit' : 'Weekly Review'
        ) : null}
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
      image: "https://placehold.co/800x500/121212/3b82f6?text=Video+Learning+Platform+Preview"
    },
    {
      title: "Advanced Playbooks",
      description: "Step-by-step written guides for specific scenarios: 'The Hedging Protocol', 'Live Betting Discipline', and more.",
      icon: <Library className="w-6 h-6 text-purple-500" />,
      borderColor: "border-purple-500/50",
      iconBg: "bg-purple-500/10 border-purple-500/20",
      glow: "from-purple-600 to-pink-600",
      image: "https://placehold.co/800x500/121212/a855f7?text=Interactive+Playbooks+Preview"
    },
    {
      title: "Smart Integration",
      description: "Don't know what to watch? Your performance reports link directly to the exact lesson you need to fix your leak.",
      icon: <GraduationCap className="w-6 h-6 text-orange-500" />,
      borderColor: "border-orange-500/50",
      iconBg: "bg-orange-500/10 border-orange-500/20",
      glow: "from-orange-600 to-red-600",
      image: "https://placehold.co/800x500/121212/f97316?text=Smart+Report+Integration+Preview"
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
                        src="https://placehold.co/1200x675/0f0f0f/10b981?text=PLACEHOLDER:+App+Interface+Screenshot" 
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
        subtitle="How BettingClarity pays for itself by fixing decisions — not by predicting outcomes."
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
      title: "Education & Frameworks",
      icon: <BookOpen className="w-4 h-4 mr-2" />,
      content: (
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg blur opacity-40"></div>
            {/* Aspect Ratio Changed to 4/3 */}
            <div className="relative bg-[#0f0f0f] rounded-lg border border-emerald-500/30 overflow-hidden aspect-[4/3] flex items-center justify-center shadow-2xl">
              <img src="https://placehold.co/800x600/0f0f0f/10b981?text=Education+&+Frameworks" alt="Education Suite" className="object-cover w-full h-full opacity-90" />
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
              <img src="https://placehold.co/800x600/1a1a1a/3b82f6?text=Smart+Reports+Dashboard" alt="Smart Reports" className="object-cover w-full h-full opacity-90" />
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
              <img src="https://placehold.co/800x600/1a1a1a/f97316?text=Cost+Control+System" alt="Cost Control" className="object-cover w-full h-full opacity-90" />
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
      
      {/* 3 Main Tiers Grid - Restored to original layout */}
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

      {/* LIFETIME - Separate Section Below */}
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
  <section className="relative py-20 bg-[#0a0a0a] border-t border-white/5">
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
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [legalModal, setLegalModal] = useState(null); 

  const openTerms = () => setLegalModal({ title: "Terms of Service", content: TERMS_TEXT });
  const openPrivacy = () => setLegalModal({ title: "Privacy Policy", content: PRIVACY_TEXT });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      <GlobalStyles />
      
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      
      {legalModal && (
        <LegalModal 
          isOpen={!!legalModal} 
          onClose={() => setLegalModal(null)} 
          title={legalModal.title} 
          content={legalModal.content} 
        />
      )}
      
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
      {/* Updated Section */}
      <AgentSection />
      {/* Newly Added Library Section */}
      <LibrarySection />
      <PromptLibrarySection />
      <ValueSection />
      <LeadMagnetSection onOpenQuiz={() => setIsQuizOpen(true)} />
      <ProductDeepDive />
      <Pricing />
      <FAQ />
      
      <section className="relative py-16 overflow-hidden">
        {/* ... CTA Section content ... */}
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

      <Footer onOpenTerms={openTerms} onOpenPrivacy={openPrivacy} />
    </div>
  );
};

export default App;