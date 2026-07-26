"use client";
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiPhone, FiMapPin } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#0a0b10] relative z-10 text-slate-300 pt-20 overflow-hidden">
      
      {/* Rich Glowing Color Overlay Panels */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),rgba(147,51,234,0.08),transparent_60%)] pointer-events-none" />
      
      {/* Dynamic Top Gradient Accent Line */}
      <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-blue-500 via-purple-500 via-indigo-500 to-transparent absolute top-0 left-0" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Logo & Bio Column */}
          <div className="lg:col-span-5 space-y-6">
            <button
              onClick={() => handleScroll("home")}
              className="focus:outline-none flex items-center gap-2 group"
            >
              <Image
                src="/images/logo.png"
                alt="Syed Faiez Ahmed Logo"
                width={130}
                height={50}
                className="h-10 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </button>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md">
              Architecting secure, high-performance ERP software, FinTech integrations, and autonomous AI agent workflows for enterprise SaaS platforms.
            </p>
            
            {/* Contact Details */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2 text-blue-400">
                <FiMapPin className="w-4 h-4" />
                <span className="text-slate-300">Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <FiPhone className="w-4 h-4" />
                <a href="tel:+923340396523" className="text-slate-300 hover:text-purple-400 transition-colors">+92 3340396523</a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase border-l-2 border-blue-500 pl-3">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs sm:text-sm font-medium">
              {["home", "about", "skills", "projects", "blog", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => handleScroll(section)}
                    className="text-slate-400 hover:text-blue-400 transition-colors capitalize text-left hover:translate-x-1 transition-transform"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase border-l-2 border-purple-500 pl-3">
              Get In Touch
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Available for full-time contracts, business automation audits, and SaaS consulting.
            </p>
            
            {/* Glowing Social Pills */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FiGithub, href: "https://github.com/syedfaiezahmed", label: "GitHub", style: "border-blue-500/20 text-blue-400 bg-blue-950/20 hover:bg-blue-600 hover:text-white hover:border-blue-500" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/syed-faiez-ahmed-b45612279/", label: "LinkedIn", style: "border-indigo-500/20 text-indigo-400 bg-indigo-950/20 hover:bg-indigo-600 hover:text-white hover:border-indigo-500" },
                { icon: FiInstagram, href: "https://www.instagram.com/syedfaiez._.ahmed/", label: "Instagram", style: "border-pink-500/20 text-pink-400 bg-pink-950/20 hover:bg-pink-600 hover:text-white hover:border-pink-500" },
                { icon: FiMail, href: "mailto:syedfaiezahmed@gmail.com", label: "Email", style: "border-purple-500/20 text-purple-400 bg-purple-950/20 hover:bg-purple-600 hover:text-white hover:border-purple-500" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full border transition-all duration-300 shadow-lg ${social.style}`}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/5 mb-8" />

        {/* Bottom copyright strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 font-medium pb-8">
          <div>
            © {currentYear} <span className="text-white font-semibold">Syed Faiez Ahmed</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-2 bg-[#121320] border border-white/10 rounded-full px-4 py-1.5 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 text-xs font-bold tracking-wider uppercase">Fintech & AI Architect</span>
          </div>
        </div>

      </div>

      {/* Colorful Gradient Footer Bottom Accent Bar */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mt-2" />
    </footer>
  );
}
