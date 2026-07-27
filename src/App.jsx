import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  BadgeCheck, 
  Send, 
  Twitter, 
  Gamepad2, 
  MessageSquare, 
  Mail, 
  ExternalLink, 
  Copy, 
  Check, 
  Flame, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Crown,
  Trophy,
  Dices,
  Globe,
  ArrowUpRight,
  TrendingUp,
  Radio
} from 'lucide-react';
import avatarImg from './assets/avatar.jpg';

// Background Floating Particle effect component
const ParticleBackground = () => {
  const particles = Array.from({ length: 24 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -90, 60, 0],
          y: [0, 70, -80, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] bg-purple-600/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 60, -70, 0],
          y: [0, 90, -40, 0],
          scale: [1, 1.25, 0.85, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-20 left-1/3 w-[28rem] h-[28rem] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating Sparkle Particles */}
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: `${initialX}vw`, y: `${initialY}vh` }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [`${initialY}vh`, `${(initialY - 30 + 100) % 100}vh`],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ width: `${size}px`, height: `${size}px` }}
            className="absolute rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]"
          />
        );
      })}
    </div>
  );
};

export default function App() {
  const [copiedText, setCopiedText] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#fbbf24', '#c084fc', '#34d399']
    });
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setToastMessage(`Copied ${label} to clipboard!`);
    setTimeout(() => {
      setCopiedText(null);
      setToastMessage('');
    }, 2500);
  };

  return (
    <div className="min-h-screen relative bg-[#050711] text-slate-100 flex flex-col justify-between items-center px-4 py-8 md:py-14 z-10 selection:bg-cyan-500 selection:text-black">
      {/* Background Effect */}
      <ParticleBackground />

      {/* Copy Notification Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-6 z-50 px-5 py-3 rounded-full glass-panel border border-cyan-500/40 text-cyan-300 font-medium text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)] backdrop-blur-xl"
          >
            <Check className="w-4 h-4 text-cyan-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTAINER */}
      <main className="w-full max-w-4xl mx-auto z-10 flex flex-col gap-8 md:gap-10">

        {/* ================= HERO SECTION ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left relative z-10">
            
            {/* Avatar Container with Glow & Badge */}
            <div className="relative group">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
                {/* Glowing border ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
                
                <img
                  src={avatarImg}
                  alt="Rozer"
                  className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-[#070b19] shadow-2xl"
                />
              </motion.div>

              {/* Status Badge Indicator */}
              <div className="absolute bottom-1 right-1 bg-[#0b0f19] p-1.5 rounded-full border border-white/10 shadow-lg">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#0b0f19]"></span>
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col items-center md:items-start gap-3">
              {/* Name & Verification Badge */}
              <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300 font-['Space_Grotesk']">
                  Rozer
                </h1>
                
                {/* Gold/Blue Gold Verified Badge */}
                <div className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500/20 to-cyan-500/20 border border-amber-500/40 text-amber-300 text-xs px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.2)] font-semibold">
                  <BadgeCheck className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Tagline / Bio */}
              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
                Web3 Pioneer &bull; Gaming Specialist &bull; Founder @ <span className="text-cyan-400 font-semibold">Spiverse</span> &bull; High-Stakes Degenerate. Building the future of decentralized entertainment.
              </p>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 border border-slate-700/60 text-slate-300">
                  <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> Active in Web3
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 border border-slate-700/60 text-slate-300">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" /> Top VIP Tier Partner
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 border border-slate-700/60 text-slate-300">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" /> Global Gaming Community
                </span>
              </div>

              {/* Hero Action CTAs */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3 w-full sm:w-auto">
                <a
                  href="https://t.me/rozergambles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4 fill-current" />
                  <span>Join Telegram</span>
                </a>

                <a
                  href="https://x.com/rozerr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-100 font-semibold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <Twitter className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
                  <span>View X Profile</span>
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ================= FEATURED PROMOTION CARD (YEET AFFILIATE) ================= */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative group"
        >
          {/* Neon Gradient Glow Container */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 via-cyan-500 to-purple-600 rounded-3xl blur-md opacity-80 group-hover:opacity-100 transition duration-500 animate-glow-pulse" />

          <div className="relative glass-panel rounded-3xl p-6 sm:p-8 overflow-hidden border border-amber-500/30 bg-gradient-to-br from-[#0c1226]/90 via-[#0d1633]/90 to-[#120f29]/90 shadow-2xl">
            
            {/* Background Shimmer Effect */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
              
              {/* Left Content */}
              <div className="flex flex-col gap-3 text-center lg:text-left flex-1">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.3)] flex items-center gap-1.5 animate-pulse">
                    <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    TIER MATCH ACTIVATED
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    VIP EXCLUSIVE
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
                  Instant VIP Tier Match on <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-200 to-cyan-400">Yeet.com</span>
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  Transfer your high-roller status from any major casino directly to Yeet. Unlock instant rakeback, personal VIP host, and maximum reward multipliers via Rozer's exclusive link.
                </p>

                {/* Perks Checklist */}
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300 pt-1 max-w-md mx-auto lg:mx-0">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Instant VIP Rank Import</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Max Level Rakeback</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Exclusive Deposit Bonus</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Crown className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Personal Concierge Host</span>
                  </div>
                </div>
              </div>

              {/* Right CTA Button */}
              <div className="w-full lg:w-auto flex flex-col items-center gap-2">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={triggerConfetti}
                  href="https://yeet.com/landing/tier-match?aff=rozer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black text-base tracking-wide flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(245,158,11,0.5)] transition duration-300 group-hover:shadow-[0_0_40px_rgba(245,158,11,0.7)]"
                >
                  <Dices className="w-5 h-5 text-slate-950 animate-bounce" />
                  <span>CLAIM TIER MATCH NOW</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-950" />
                </motion.a>
                <span className="text-[11px] text-amber-300/80 font-medium">
                  Ref Code: <code className="bg-black/40 px-1.5 py-0.5 rounded text-amber-400 font-mono">rozer</code>
                </span>
              </div>

            </div>
          </div>
        </motion.section>

        {/* ================= BENTO GRID SECTION (COMMUNITIES & SOCIALS) ================= */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-200 font-['Space_Grotesk'] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Official Ecosystem & Links</span>
            </h2>
            <span className="text-xs text-slate-400">Direct Connect</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

            {/* CARD 1: Spinverse Project (Featured Bento - 4 Columns) */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="https://x.com/spinversee"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-4 glass-panel glass-panel-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between group border border-purple-500/20"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-600/20 transition duration-500" />
              
              <div className="flex items-start justify-between gap-4">
                <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition duration-300">
                  <Gamepad2 className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  <span>FLAGSHIP PROJECT</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition">Spinverse</h3>
                  <span className="text-xs font-medium text-slate-400">@spinversee</span>
                </div>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Rozer's premier Web3 gaming ecosystem. Revolutionizing decentralized gaming, rewards, and player-driven digital assets.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5 text-xs text-purple-300 font-semibold">
                <span>Explore Spinverse on X</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
              </div>
            </motion.a>

            {/* CARD 2: X (Twitter) Main (2 Columns) */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              href="https://x.com/rozerr"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-2 glass-panel glass-panel-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between group border border-cyan-500/20"
            >
              <div className="flex items-start justify-between">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition duration-300">
                  <Twitter className="w-6 h-6 fill-cyan-400/20" />
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition" />
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">X (Twitter)</h3>
                <p className="text-xs text-cyan-400 font-medium mt-0.5">@rozerr</p>
                <p className="text-slate-400 text-xs mt-2">Alpha, market takes, and daily Web3 thoughts.</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-cyan-300 font-semibold">
                <span>Follow Main Account</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </div>
            </motion.a>

            {/* CARD 3: Telegram VIP Channel (3 Columns) */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="https://t.me/rozergambles"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-3 glass-panel glass-panel-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between group border border-blue-500/20"
            >
              <div className="flex items-start justify-between">
                <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 group-hover:scale-110 transition duration-300">
                  <Send className="w-6 h-6 fill-blue-400/20" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  COMMUNITY HUB
                </span>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition">Telegram Channel</h3>
                  <Flame className="w-4 h-4 text-amber-400" />
                </div>
                <p className="text-xs text-blue-400 font-medium mt-0.5">t.me/rozergambles</p>
                <p className="text-slate-300 text-xs mt-2">Exclusive updates, high-stakes bets, giveaways, and VIP community calls.</p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-blue-300 font-semibold">
                <span>Join VIP Telegram</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </div>
            </motion.a>

            {/* CARD 4: Telegram Personal DM (3 Columns) */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              href="https://t.me/rozerdyor"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-3 glass-panel glass-panel-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between group border border-sky-500/20"
            >
              <div className="flex items-start justify-between">
                <div className="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 group-hover:scale-110 transition duration-300">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  DIRECT CHAT
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition">Personal Telegram</h3>
                <p className="text-xs text-sky-400 font-medium mt-0.5">@rozerdyor</p>
                <p className="text-slate-300 text-xs mt-2">Direct messaging for deals, strategic partnerships, and collabs.</p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-sky-300 font-semibold">
                <span>Message Rozer</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </div>
            </motion.a>

            {/* CARD 5: Discord Handle (Interactive Copy - 3 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => copyToClipboard('@rozerdyor', 'Discord username')}
              className="md:col-span-3 glass-panel glass-panel-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between group border border-indigo-500/20 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 transition duration-300">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <button className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30 transition">
                  {copiedText === 'Discord username' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition">Discord</h3>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">CLICK TO COPY</span>
                </div>
                <p className="text-sm font-mono text-indigo-300 mt-1 font-semibold">@rozerdyor</p>
                <p className="text-slate-400 text-xs mt-2">Connect on Discord for gaming lobbies and group chats.</p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-indigo-300 font-semibold">
                <span>{copiedText === 'Discord username' ? 'Copied!' : 'Copy Handle'}</span>
                <Copy className="w-3.5 h-3.5" />
              </div>
            </motion.div>

            {/* CARD 6: Email / Business Inquiries (Interactive Copy / Mailto - 3 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              onClick={() => copyToClipboard('admin@rozer.gg', 'Email address')}
              className="md:col-span-3 glass-panel glass-panel-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between group border border-emerald-500/20 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <a
                  href="mailto:admin@rozer.gg"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition"
                  title="Send Email"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition">Business & Email</h3>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">OFFICIAL</span>
                </div>
                <p className="text-sm font-mono text-emerald-300 mt-1 font-semibold">admin@rozer.gg</p>
                <p className="text-slate-400 text-xs mt-2">Sponsorships, advisor inquiries, and executive contact.</p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-emerald-300 font-semibold">
                <span>{copiedText === 'Email address' ? 'Copied Email!' : 'Click to Copy or Send'}</span>
                <Mail className="w-3.5 h-3.5" />
              </div>
            </motion.div>

          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-6 pb-2 text-center flex flex-col items-center gap-3 text-slate-500 text-xs border-t border-white/5"
        >
          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://x.com/rozerr" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">X (Twitter)</a>
            <span>&bull;</span>
            <a href="https://t.me/rozergambles" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">Telegram</a>
            <span>&bull;</span>
            <a href="https://x.com/spinversee" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">Spinverse</a>
          </div>

          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-semibold">Rozer</span>. All rights reserved. Built for Web3 & Gaming.
          </p>
        </motion.footer>

      </main>
    </div>
  );
}
