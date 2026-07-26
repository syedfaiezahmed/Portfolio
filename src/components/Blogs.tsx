"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiClock, FiUser, FiArrowRight, FiBookmark } from "react-icons/fi";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  imageUrl: string;
}

const BlogCard: React.FC<BlogPost> = ({
  title,
  excerpt,
  date,
  readTime,
  author,
  category,
  imageUrl,
}) => {
  const [imgError, setImgError] = useState(false);

  const getCategoryPath = (cat: string): string => {
    const categoryMap: Record<string, string> = {
      "ERP Systems": "webdevelopmentblog",
      "FinTech": "digitalmarketing",
      "AI Engineering": "artificialintelligence",
      "Business Automation": "cloudcomputing",
      "Accounting Tech": "cybersecurity",
      "SaaS Architecture": "graphicdesigning"
    };
    return categoryMap[cat] ? `/blogs/${categoryMap[cat]}` : "#blog";
  };

  const blogPath = getCategoryPath(category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group bg-[#121320]/80 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
    >
      <Link href={blogPath} className="block">
        {/* Enlarged image container */}
        <div className="relative h-56 sm:h-64 overflow-hidden bg-[#0e0f18] border-b border-white/5">
          {imgError ? (
            <div className="w-full h-full bg-slate-900 flex items-center justify-center">
              <span className="text-slate-500 text-xs">Image unavailable</span>
            </div>
          ) : (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          )}
          <button
            className="absolute bottom-4 right-4 p-2.5 bg-[#10111a]/90 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors shadow-md border border-white/10"
            onClick={(e: React.MouseEvent) => e.preventDefault()}
            aria-label="Bookmark article"
          >
            <FiBookmark className="text-slate-300 hover:text-purple-400 text-sm" />
          </button>
        </div>

        {/* Enlarged Details padding and text sizes */}
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-4">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full">
              {category}
            </span>
            <span className="text-xs text-slate-400 font-medium">{date}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">
            {title}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base line-clamp-2 leading-relaxed mb-6 font-normal">
            {excerpt}
          </p>

          <div className="flex justify-between items-center pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <FiClock className="mr-1.5 text-blue-400 text-base" />
                {readTime}
              </div>
              <div className="flex items-center">
                <FiUser className="mr-1.5 text-purple-400 text-base" />
                {author}
              </div>
            </div>

            <div className="flex items-center text-xs sm:text-sm font-bold text-blue-400 group-hover:text-purple-400 transition-colors">
              Read Article <FiArrowRight className="ml-1.5 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const BlogSection = () => {
  const [showAll, setShowAll] = useState(false);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable ERP Systems with Next.js & Python",
      excerpt: "Architecting enterprise modular ERP solutions for accounting, inventory, and real-time business insights.",
      date: "Jan 15, 2026",
      readTime: "8 min read",
      author: "Syed Faiez Ahmed",
      category: "ERP Systems",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 2,
      title: "AI Agents & Workflow Automation for Enterprise SaaS",
      excerpt: "Integrating OpenAI and autonomous AI agents to automate business processes and reporting.",
      date: "Jan 28, 2026",
      readTime: "6 min read",
      author: "Syed Faiez Ahmed",
      category: "AI Engineering",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 3,
      title: "Financial Systems & Accounting Software Architecture",
      excerpt: "Combining ICMA Pakistan financial principles with modern full-stack software development.",
      date: "Feb 18, 2026",
      readTime: "7 min read",
      author: "Syed Faiez Ahmed",
      category: "Accounting Tech",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 4,
      title: "FinTech Platform Engineering & Secure Payment Flows",
      excerpt: "Designing high-performance transaction processing and interactive financial analytics dashboards.",
      date: "Mar 5, 2026",
      readTime: "10 min read",
      author: "Syed Faiez Ahmed",
      category: "FinTech",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 5,
      title: "Automating Complex Business Workflows with Microservices",
      excerpt: "Eliminating manual data entry with event-driven automation engines and FastAPI backend microservices.",
      date: "Mar 12, 2026",
      readTime: "7 min read",
      author: "Syed Faiez Ahmed",
      category: "Business Automation",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 6,
      title: "Modern Multi-Tenant SaaS Infrastructure & Data Security",
      excerpt: "Best practices for multi-tenant isolation, role-based access control, and PostgreSQL database schemas.",
      date: "Apr 2, 2026",
      readTime: "9 min read",
      author: "Syed Faiez Ahmed",
      category: "SaaS Architecture",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    },
  ];

  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-12 md:py-16 bg-transparent text-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Latest{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Articles
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Technical insights on ERP architecture, FinTech engineering, AI automation & SaaS
          </p>
        </motion.div>

        {/* Enlarged blog grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {visiblePosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all gap-2"
          >
            {showAll ? "Show Less" : "View All Articles"}
            <FiArrowRight className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default BlogSection;