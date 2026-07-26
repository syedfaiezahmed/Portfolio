"use client";
import { motion } from "framer-motion";
import { Sparkles, Code, Cpu, ShieldCheck, TrendingUp, Layers } from "lucide-react";

const TICKER_ITEMS = [
  { text: "AI-ENABLED ERP DEVELOPER", icon: Sparkles },
  { text: "ACCOUNTING SYSTEMS SPECIALIST (ICMA)", icon: TrendingUp },
  { text: "CO-FOUNDER & CTO @ BEINNOVO", icon: Layers },
  { text: "ENTERPRISE SAAS ARCHITECT", icon: Cpu },
  { text: "FULL STACK NEXT.JS & PYTHON", icon: Code },
  { text: "FINTECH & BUSINESS AUTOMATION", icon: ShieldCheck },
];

export default function TickerBanner() {
  const repeatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full bg-[#0d0e17] border-y border-blue-500/20 py-2.5 overflow-hidden relative z-20 shadow-lg shadow-black/50">
      {/* Side Vignette Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0b0c10] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0b0c10] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {repeatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-2 shrink-0">
              <Icon className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-semibold text-slate-300 tracking-wider">
                {item.text}
              </span>
              <span className="text-purple-500/40 text-xs ml-4">•</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
