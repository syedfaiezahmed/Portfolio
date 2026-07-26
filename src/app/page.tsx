import HeroSection from "@/components/HeroSection";
import TickerBanner from "@/components/TickerBanner";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import ProjectSection from "@/components/ProjectSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0b0c10] text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Sliding Marquee Ticker Strip below Hero */}
      <TickerBanner />

      {/* Main Content Sections */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <section id="about" className="scroll-mt-20">
          <AboutSection />
        </section>

        <section id="projects" className="scroll-mt-20">
          <ProjectSection />
        </section>

        <section id="blog" className="scroll-mt-20">
          <Blogs />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </div>

      <Footer />
    </main>
  );
}
