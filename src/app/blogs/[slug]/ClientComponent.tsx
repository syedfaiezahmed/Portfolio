"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiUser, FiArrowLeft, FiCalendar, FiCpu, FiLinkedin, FiGithub } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { BlogPostData } from "@/data/blogsData";

export default function BlogDetailClient({ blogPost }: { blogPost: BlogPostData }) {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-300 py-12 md:py-20 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Navigation Bar / Back Action */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-center justify-between"
        >
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors py-2 px-3 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-blue-500/30"
          >
            <FiArrowLeft className="w-4 h-4" /> Back to Articles
          </Link>
          
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {blogPost.category}
            </span>
          </div>
        </motion.div>

        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 text-left"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            {blogPost.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 border-y border-slate-800/80 py-4">
            <div className="flex items-center gap-2">
              <FiUser className="text-blue-400" />
              <span className="text-slate-200 font-medium">{blogPost.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="text-blue-400" />
              <span>{blogPost.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-blue-400" />
              <span>{blogPost.readTime} min read</span>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full h-[280px] sm:h-[420px] rounded-2xl overflow-hidden mb-12 border border-slate-800 shadow-2xl"
        >
          <Image 
            src={blogPost.imageUrl}
            alt={blogPost.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-40" />
        </motion.div>

        {/* Main Content Body */}
        <article className="prose prose-invert max-w-none space-y-8 text-slate-300 text-base sm:text-lg leading-relaxed">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 text-slate-200 font-normal leading-relaxed text-lg"
          >
            {blogPost.content.introduction}
          </motion.div>

          {/* Sections */}
          {blogPost.content.sections.map((section, idx) => (
            <motion.section 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 pt-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide border-b border-slate-800 pb-3">
                {section.title}
              </h2>
              <p className="text-slate-300">{section.content}</p>

              {section.code && (
                <div className="my-6 rounded-xl overflow-hidden bg-[#0d1117] border border-slate-800 shadow-xl">
                  <div className="bg-slate-900/90 px-4 py-2 text-xs font-mono text-slate-400 border-b border-slate-800 flex items-center gap-2">
                    <FiCpu className="text-blue-400" />
                    <span>Implementation Architecture</span>
                  </div>
                  <pre className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono text-blue-300 leading-relaxed">
                    <code>{section.code}</code>
                  </pre>
                </div>
              )}

              {section.listItems && (
                <ul className="space-y-2 my-4 pl-2">
                  {section.listItems.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-slate-300 text-base">
                      <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}

          {/* Blockquote */}
          {blogPost.content.quote && (
            <motion.blockquote 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/20 to-transparent border-l-4 border-blue-500 text-slate-200 italic font-medium text-lg sm:text-xl shadow-lg"
            >
              "{blogPost.content.quote.text}"
            </motion.blockquote>
          )}

          {/* Conclusion */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-6 border-t border-slate-800 space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Conclusion</h3>
            <p className="text-slate-300">{blogPost.content.conclusion}</p>
          </motion.div>
        </article>

        {/* Footer Author Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
        >
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/40 shrink-0">
            <Image 
              src="/images/hero-image.png"
              alt="Syed Faiez Ahmed"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-white">Written by Syed Faiez Ahmed</h4>
            <p className="text-sm text-slate-400">
              AI-Enabled ERP & FinTech Developer specializing in ERP Systems, Accounting Software, AI Agents and Multi-Tenant SaaS Solutions.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
              <a 
                href="https://github.com/syedfaiezahmed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/syed-faiez-ahmed-b45612279/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
