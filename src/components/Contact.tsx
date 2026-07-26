"use client";
import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiArrowRight,
} from "react-icons/fi";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error:", err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-transparent text-white">
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
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto font-normal">
            Let's discuss your next ERP system, AI integration, or enterprise SaaS solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-4 p-6 bg-[#121320]/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl hover:border-blue-500/40 transition-all"
            >
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl shrink-0">
                <FiMail className="text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Email Direct</h3>
                <a
                  href="mailto:syedfaiezahmed@gmail.com"
                  className="text-xs sm:text-sm text-slate-300 hover:text-blue-400 transition-colors break-all"
                >
                  syedfaiezahmed@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-start gap-4 p-6 bg-[#121320]/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl hover:border-purple-500/40 transition-all"
            >
              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl shrink-0">
                <FiPhone className="text-purple-400 text-xl" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Phone / WhatsApp</h3>
                <a
                  href="tel:+923340396523"
                  className="text-xs sm:text-sm text-slate-300 hover:text-purple-400 transition-colors"
                >
                  +92 3340396523
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-start gap-4 p-6 bg-[#121320]/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl hover:border-indigo-500/40 transition-all"
            >
              <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl shrink-0">
                <FiMapPin className="text-indigo-400 text-xl" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Location</h3>
                <p className="text-xs sm:text-sm text-slate-300">Karachi, Pakistan</p>
              </div>
            </motion.div>
          </div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 bg-[#121320]/90 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl"
          >
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 mb-4 border border-emerald-500/30">
                  <FiSend className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6">
                  Thank you for reaching out. I will respond to your message shortly.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3 text-xs text-rose-300 bg-rose-950/40 rounded-xl border border-rose-800/60">
                    {error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <FiUser className="text-sm" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-[#0e0f18] border border-white/15 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-xl transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Your Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <FiMail className="text-sm" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#0e0f18] border border-white/15 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-xl transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 text-slate-400 pointer-events-none">
                      <FiMessageSquare className="text-sm" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-[#0e0f18] border border-white/15 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-xl transition-all"
                      placeholder="Tell me about your project requirements..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center gap-2 py-3 px-6 text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiArrowRight className="text-sm" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}