"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight, Sparkles, Code2, ShieldCheck, Cpu } from "lucide-react";

const HeroSection = () => {
  const handleViewProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactMe = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-12 lg:pt-32 lg:pb-16 min-h-[calc(100vh-70px)] flex items-center overflow-hidden bg-[#0b0c10]">
      {/* Modern Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Animated Glowing Orbs */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{
          scale: [1.15, 1, 1.15],
          x: [0, -30, 0],
          y: [0, 45, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-indigo-600/5 rounded-full blur-[130px] pointer-events-none z-0" 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left relative"
          >
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-950/80 via-indigo-950/70 to-blue-900/80 border border-blue-500/30 hover:border-blue-500/50 text-blue-400 text-xs sm:text-sm font-semibold mb-6 shadow-md shadow-blue-500/5 transition-colors cursor-default"
            >
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>Co-Founder & CTO @ Beinnovo | Fintech and AI Engineer</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mb-3"
            >
              <span className="block text-blue-400/80 text-sm sm:text-base font-bold tracking-wider uppercase mb-1">
                Hello, I'm
              </span>
              <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-3">
                <span className="text-white drop-shadow-[0_2px_25px_rgba(255,255,255,0.35)]">
                  Syed Faiez Ahmed
                </span>
              </h1>
            </motion.div>

            {/* Typewriter Subtitle - Clean elegant text */}
            <div className="min-h-[44px] text-lg sm:text-2xl font-bold text-blue-400 mb-4 flex items-center justify-center lg:justify-start">
              <TypeAnimation
                sequence={[
                  "AI-Enabled ERP & FinTech Developer",
                  1500,
                  "Full Stack Software Engineer",
                  1500,
                  "Accounting Systems Specialist",
                  1500,
                  "Enterprise SaaS Architect",
                  1500,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </div>

            {/* Description */}
            <motion.p 
              className="text-slate-300 text-sm sm:text-base mb-7 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              I architect & build high-performance ERP systems, accounting software, AI agents, and enterprise SaaS platforms that transform complex business workflows into automated digital powerhouses.
            </motion.p>

            {/* Action Buttons Container */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-bold shadow-lg shadow-blue-500/20 flex items-center gap-2 transition-all relative overflow-hidden group"
                onClick={handleViewProjects}
              >
                {/* Shimmer overlay */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="/Syed Faiez Ahmed_CV.pdf"
                download="Syed_Faiez_Ahmed_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3.5 rounded-full bg-[#111222]/90 border border-slate-700 hover:border-blue-500 hover:text-blue-400 text-white text-sm font-semibold flex items-center gap-2 shadow-md transition-all backdrop-blur-md"
              >
                <Download className="w-4 h-4 text-blue-400" />
                Download CV
              </motion.a>

              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-3.5 rounded-full bg-transparent border border-white/10 hover:border-blue-500 hover:text-blue-400 text-slate-300 text-sm font-medium transition-all"
                onClick={handleContactMe}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-2.5 justify-center lg:justify-start text-xs font-semibold text-slate-300"
            >
              <span className="px-3.5 py-2 rounded-xl bg-[#10111d] border border-white/5 hover:border-blue-500/30 hover:bg-[#121424] flex items-center gap-2 text-slate-300 transition-all hover:-translate-y-0.5 cursor-default">
                <Code2 className="w-4 h-4 text-blue-400" /> Next.js & Python
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-[#10111d] border border-white/5 hover:border-emerald-500/30 hover:bg-[#102020] flex items-center gap-2 text-slate-300 transition-all hover:-translate-y-0.5 cursor-default">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Financial & ERP Systems
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-[#10111d] border border-white/5 hover:border-indigo-500/30 hover:bg-[#12142c] flex items-center gap-2 text-slate-300 transition-all hover:-translate-y-0.5 cursor-default">
                <Cpu className="w-4 h-4 text-purple-400" /> AI Agents & OpenAI
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium High-Tech Custom Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0 z-10"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-[410px] lg:h-[410px]">
              
              {/* Rotating Tech Border 1 (Scanner effect) */}
              <div className="absolute inset-0 -m-5 pointer-events-none animate-[spin_35s_linear_infinite] opacity-75">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="url(#gradient-tech-blue)"
                    strokeWidth="0.6"
                    strokeDasharray="5 7 15 8"
                  />
                  <defs>
                    <linearGradient id="gradient-tech-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                      <stop offset="40%" stopColor="#06b6d4" stopOpacity="0.3" />
                      <stop offset="70%" stopColor="#6366f1" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Rotating Tech Border 2 (Reverse outer ring) */}
              <div className="absolute inset-0 -m-8 pointer-events-none animate-[spin_50s_linear_infinite_reverse] opacity-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="48.5"
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="0.4"
                    strokeDasharray="25 35 10 40"
                  />
                </svg>
              </div>

              {/* Outer Glow Ring Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-600 opacity-30 blur-3xl animate-pulse" />
              
              {/* Premium Multi-layered Tech Frame */}
              <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-b from-blue-500/60 via-indigo-500/40 to-blue-600/40 border border-white/10 shadow-[0_0_50px_-10px_rgba(79,70,229,0.35)]">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#0f101d] via-[#0b0c10] to-[#16172b] flex items-center justify-center">
                  
                  {/* Decorative High-Tech Grid inside the circle */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                  
                  <Image
                    src="/images/hero-image.png"
                    alt="Syed Faiez Ahmed - AI-Enabled ERP & FinTech Developer"
                    fill
                    className="object-cover object-top hover:scale-[1.03] transition-transform duration-700 rounded-full"
                    priority
                    sizes="(max-width: 768px) 100vw, 410px"
                  />

                  {/* Multi-layered Feathered Edge Blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-blue-900/10 mix-blend-color-dodge" />
                  
                  {/* Double Overlay vignette for rich edge contrast */}
                  <div className="absolute inset-0 border border-white/5 rounded-full pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge 1: AI Integration (Top-Left) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:flex absolute -top-5 -left-12 bg-[#0c0d16]/95 backdrop-blur-xl border border-blue-500/30 px-3.5 py-2 rounded-2xl shadow-2xl items-center gap-2.5 z-20 hover:border-blue-400 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                  <Cpu className="w-4 h-4 animate-pulse" />
                </div>
                <div className="text-left font-sans">
                  <div className="text-[10px] text-slate-400 font-semibold tracking-wide uppercase leading-none">AI Agents</div>
                  <div className="text-xs text-white font-bold mt-0.5">Automated Workflows</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Enterprise ERP (Bottom-Right) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:flex absolute bottom-12 -right-12 bg-[#0c0d16]/95 backdrop-blur-xl border border-indigo-500/30 px-3.5 py-2.5 rounded-2xl shadow-2xl items-center gap-2.5 z-20 hover:border-indigo-400 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left font-sans">
                  <div className="text-[10px] text-slate-400 font-semibold tracking-wide uppercase leading-none">FinTech</div>
                  <div className="text-xs text-white font-bold mt-0.5">ERP & SaaS Architect</div>
                </div>
              </motion.div>

              {/* Floating Badge 3: Active Status / Pill Badge (Bottom-Center) */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#0c0d16]/95 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex items-center gap-2.5 shrink-0 z-20 hover:border-blue-500/50 transition-colors"
              >
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-white text-xs font-bold tracking-wide whitespace-nowrap">Syed Faiez Ahmed</span>
                <span className="text-blue-400 text-[11px] font-semibold border-l border-white/15 pl-2.5">FinTech & AI</span>
              </motion.div>

            </div>

            {/* Mobile/Tablet Badge Row (separated, no overlap) */}
            <div className="flex flex-wrap gap-3 justify-center mt-8 lg:hidden max-w-[340px] mx-auto z-20">
              <div className="bg-[#0c0d16]/95 backdrop-blur-xl border border-blue-500/30 px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <div className="text-left font-sans">
                  <div className="text-[9px] text-slate-400 font-semibold tracking-wide uppercase leading-none">AI Agents</div>
                  <div className="text-[11px] text-white font-bold mt-0.5">Automated Workflows</div>
                </div>
              </div>
              
              <div className="bg-[#0c0d16]/95 backdrop-blur-xl border border-indigo-500/30 px-3.5 py-2.5 rounded-xl shadow-lg flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <div className="text-left font-sans">
                  <div className="text-[9px] text-slate-400 font-semibold tracking-wide uppercase leading-none">FinTech</div>
                  <div className="text-[11px] text-white font-bold mt-0.5">ERP & SaaS Architect</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;