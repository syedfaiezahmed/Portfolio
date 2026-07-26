"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered ERP System",
      description: "Complete ERP platform including Accounting, Inventory, CRM, Finance, Reporting, User Roles, AI Insights and Automation.",
      tags: ["Next.js", "Node.js", "MySQL", "Python"],
      imageUrl: "/images/project-ai-erp.png",
      githubUrl: "https://github.com/syedfaiezahmed",
    },
    {
      id: 2,
      title: "Education Institute Management SaaS",
      description: "Complete SaaS solution for schools including Student Management, Fee Management, Attendance, Teachers Portal, and Finance.",
      tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
      imageUrl: "/images/project-school-saas.png",
      githubUrl: "https://github.com/syedfaiezahmed",
    },
    {
      id: 3,
      title: "Business Automation Engine",
      description: "Business workflow automation platform with AI-powered reporting, analytics dashboards and approval workflows.",
      tags: ["Python", "FastAPI", "React", "MongoDB"],
      imageUrl: "/images/project-automation-engine.png",
      githubUrl: "https://github.com/syedfaiezahmed",
    },
    {
      id: 4,
      title: "Financial Analytics & ERP Dashboard",
      description: "Interactive financial analytics dashboard with KPIs, revenue tracking, expenses, reporting and accounting insights.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Python"],
      imageUrl: "/images/project-financial-dashboard.png",
      githubUrl: "https://github.com/syedfaiezahmed",
    },
    {
      id: 5,
      title: "CRM & Lead Management Platform",
      description: "Enterprise CRM for customer management, lead tracking, sales pipeline and follow-up automation.",
      tags: ["React", "Node.js", "Express.js", "MySQL"],
      imageUrl: "/images/project-crm-platform.png",
      githubUrl: "https://github.com/syedfaiezahmed",
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-16 bg-transparent text-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-normal">
            Scalable ERP solutions, FinTech applications, and AI-powered business platforms
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut"
              }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-[#121320]/80 backdrop-blur-xl hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image Container */}
                <div className="relative h-56 md:h-60 overflow-hidden bg-[#0e0f18]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={project.id <= 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121320] via-black/40 to-transparent opacity-80" />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links Footer */}
              <div className="px-6 pb-6 pt-0 flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-semibold text-slate-400 hover:text-blue-400 transition-colors gap-1.5"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span className="text-slate-500">🔒</span> Request Access
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors gap-1.5"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16 p-8 rounded-2xl bg-[#121320]/80 border border-white/10 backdrop-blur-xl shadow-xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Interested in building a custom solution?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-6">
            Let's discuss how an AI-enabled ERP or automated web application can grow your business.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all gap-2"
          >
            Contact Me
            <Rocket className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;