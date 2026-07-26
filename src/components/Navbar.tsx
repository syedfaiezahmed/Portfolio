"use client";
import { useState, useEffect, Fragment, useRef } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Mail } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (!isScrollingRef.current) {
        updateActiveSection();
      }
    };

    const updateActiveSection = () => {
      // Check if user is at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 15;
      if (isAtBottom) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].href.substring(1));
        return;
      }

      const scrollPosition = window.scrollY;
      
      const sectionsInfo = NAV_ITEMS.map((item) => {
        const sectionId = item.href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;
          return { id: sectionId, top: absoluteTop, height: rect.height };
        }
        return null;
      }).filter(Boolean) as { id: string; top: number; height: number }[];

      // Offset threshold to activate section slightly early (180px)
      const offset = 180; 
      let active = "home";

      for (const s of sectionsInfo) {
        if (scrollPosition + offset >= s.top) {
          active = s.id;
        }
      }

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      isScrollingRef.current = true;
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
      
      section.scrollIntoView({ behavior: "smooth" });

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Re-enable scroll listener after scroll animation completes
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#0b0c10]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl shadow-black/40" 
          : "bg-transparent py-4 backdrop-blur-sm"
      }`}
    >
      <nav className="flex items-center justify-between px-4 lg:px-8 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center"
        >
          <button
            onClick={() => scrollToSection("home")}
            className="focus:outline-none flex items-center gap-2 group"
            aria-label="Home"
          >
            <Image
              src="/images/logo.png"
              alt="Syed Faiez Ahmed Logo"
              width={120}
              height={50}
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              priority
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </button>
        </motion.div>

        {/* Desktop Navigation Floating Pill */}
        <div className="hidden lg:flex items-center gap-1.5 bg-[#141522]/90 border border-white/10 rounded-full px-3 py-1.5 shadow-2xl shadow-black/60 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(sectionId)}
                className={clsx(
                  "relative text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300 z-10",
                  isActive
                    ? "text-white font-semibold"
                    : "text-slate-300 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 rounded-full -z-10 shadow-lg shadow-blue-500/20"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-indigo-500/30 flex items-center gap-1.5 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Talk</span>
          </motion.button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-slate-200 hover:text-white hover:bg-white/10"
            aria-label="Open menu"
          >
            <Bars3Icon className="h-7 w-7" />
          </button>
        </div>

        {/* Mobile Slide-Over Drawer */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setMobileMenuOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/70 backdrop-blur-md" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative h-full w-full bg-[#0e0f17] border-l border-white/10 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-white/10">
                      <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={100}
                        height={40}
                        className="h-8 w-auto"
                      />
                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-white/10"
                        aria-label="Close menu"
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>

                    <div className="mt-8 flex flex-col space-y-2">
                      {NAV_ITEMS.map((item) => {
                        const sectionId = item.href.substring(1);
                        const isActive = activeSection === sectionId;
                        return (
                          <button
                            key={item.name}
                            onClick={() => scrollToSection(sectionId)}
                            className={clsx(
                              "w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all",
                              isActive
                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg"
                                : "text-slate-300 hover:bg-white/5 hover:text-white"
                            )}
                          >
                            {item.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-lg text-center flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Get In Touch
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </nav>
    </motion.header>
  );
}