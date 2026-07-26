"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Layers, 
  Database, 
  Code, 
  Bot, 
  TrendingUp, 
  ShieldCheck, 
  Server,
  Building2,
  Workflow,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Rocket
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    { label: "Projects Delivered", value: "10+" },
    { label: "ERP Modules Built", value: "25+" },
    { label: "Workflow Automations", value: "15+" },
    { label: "Years Engineering", value: "3+" },
  ];

  const skillCategories = [
    {
      category: "Frontend",
      icon: <Code className="w-5 h-5 text-blue-400" />,
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server className="w-5 h-5 text-purple-400" />,
      items: ["Node.js", "Express.js", "Python", "FastAPI"],
    },
    {
      category: "Database",
      icon: <Database className="w-5 h-5 text-pink-400" />,
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "ERP & Accounting",
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      items: [
        "Accounting Systems",
        "Inventory Control",
        "CRM Systems",
        "Finance Modules",
        "HR Systems",
        "Reporting Analytics",
      ],
    },
    {
      category: "AI & Automation",
      icon: <Bot className="w-5 h-5 text-cyan-400" />,
      items: ["OpenAI LLMs", "Prompt Engineering", "Autonomous AI Agents", "ChatGPT API", "Cursor AI"],
    },
  ];

  const services = [
    { name: "ERP Development", icon: <Building2 className="w-5 h-5 text-blue-400" /> },
    { name: "Accounting Software", icon: <TrendingUp className="w-5 h-5 text-purple-400" /> },
    { name: "FinTech Solutions", icon: <ShieldCheck className="w-5 h-5 text-emerald-400" /> },
    { name: "Business Automation", icon: <Workflow className="w-5 h-5 text-amber-400" /> },
    { name: "AI Integration", icon: <Bot className="w-5 h-5 text-cyan-400" /> },
    { name: "CRM Development", icon: <Layers className="w-5 h-5 text-pink-400" /> },
    { name: "Inventory Systems", icon: <Server className="w-5 h-5 text-indigo-400" /> },
    { name: "Custom SaaS Platforms", icon: <Cpu className="w-5 h-5 text-rose-400" /> },
  ];

  const experienceResponsibilities = [
    "Lead core software & system architecture",
    "Design modular ERP & financial products",
    "Develop AI-powered SaaS automation engines",
    "Build double-entry accounting software",
    "Create event-driven automation workflows",
    "Manage technical product roadmaps",
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-transparent text-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-normal">
            Transforming complex financial & business operations into intelligent digital software
          </p>
        </motion.div>

        {/* Profile & Biography Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Portrait Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] p-1.5 rounded-3xl bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-purple-600/30 border border-white/15 shadow-2xl shadow-black/80 backdrop-blur-xl">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-[#121320]">
                <Image
                  src="/images/aboutpic.jpg"
                  alt="Syed Faiez Ahmed - AI-Enabled ERP & FinTech Developer"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/80 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Description Content */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-white font-medium leading-relaxed"
            >
              I'm an <span className="text-blue-400 font-semibold">AI-Enabled ERP & FinTech Developer</span> specializing in enterprise software, business automation, and financial systems architecture.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed"
            >
              Combining deep expertise in financial accounting (ICMA Pakistan) with modern full-stack AI engineering, I build ERP engines, inventory modules, CRM systems, financial reporting dashboards, and autonomous AI workflow engines.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed"
            >
              Currently serving as <span className="text-purple-400 font-semibold">Co-Founder & CTO at Beinnovo</span>, leading core software engineering, AI agent integrations, and scalable cloud product architecture.
            </motion.p>
          </div>
        </div>

        {/* Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="p-6 bg-[#121320]/80 border border-white/10 rounded-2xl text-center backdrop-blur-xl shadow-xl shadow-black/40 hover:border-blue-500/40 hover:shadow-blue-500/10 transition-all"
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Services & Solutions Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
              Services & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            </h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              End-to-end development for digital business transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className="p-5 bg-[#121320]/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-lg hover:border-blue-500/40 transition-all flex items-center gap-3.5"
              >
                <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl shrink-0">
                  {service.icon}
                </div>
                <h4 className="text-sm font-semibold text-white">{service.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div id="skills" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
              Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Stack</span>
            </h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Production technologies across frontend, backend, databases, ERP engines, and AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((skillCat, index) => (
              <motion.div
                key={skillCat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-[#121320]/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl hover:border-blue-500/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    {skillCat.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white">{skillCat.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillCat.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/30 transition-all font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 bg-[#121320]/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">Experience</h3>
                <p className="text-xs text-slate-400">Engineering leadership & CTO roles</p>
              </div>
            </div>

            <div className="border-l-2 border-blue-500/50 pl-4 space-y-3">
              <div className="flex flex-wrap justify-between items-baseline mb-1">
                <h4 className="text-base sm:text-lg font-bold text-white">Founding Developer & CTO</h4>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Sep 2025 – Present
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-purple-400 mb-3">Beinnovo</p>
              <ul className="space-y-2">
                {experienceResponsibilities.map((resp) => (
                  <li key={resp} className="flex items-start text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2 mt-0.5 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 bg-[#121320]/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-md">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Education</h3>
                  <p className="text-xs text-slate-400">Finance & AI Engineering qualifications</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-purple-500/50 pl-4">
                  <h4 className="text-base sm:text-lg font-bold text-white">ICMA Pakistan</h4>
                  <p className="text-xs sm:text-sm font-semibold text-blue-400 mb-1">Chartered Management Accountancy</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Comprehensive qualifications in management accounting, financial reporting, corporate taxation, and financial engineering.
                  </p>
                </div>

                <div className="border-l-2 border-indigo-500/50 pl-4">
                  <h4 className="text-base sm:text-lg font-bold text-white">GIAIC</h4>
                  <p className="text-xs sm:text-sm font-semibold text-purple-400 mb-1">AI Engineering</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Specialized engineering program covering LLMs, AI agents, OpenAI APIs, Prompt Engineering, and autonomous systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-300 text-center sm:text-left">
                Need an ERP or AI solution built for your business?
              </p>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold hover:shadow-lg transition-all flex items-center gap-2 shrink-0"
              >
                <Rocket className="w-3.5 h-3.5" />
                Let's Talk
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;