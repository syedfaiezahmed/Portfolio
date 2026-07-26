import Link from "next/link";
import { FiArrowLeft, FiAlertTriangle } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-lg w-full text-center space-y-6 relative z-10 bg-[#121320]/80 p-8 sm:p-12 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
        <div className="inline-flex items-center justify-center p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-400">
          <FiAlertTriangle className="w-10 h-10 animate-bounce" />
        </div>

        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="text-sm text-slate-400 leading-relaxed">
          The requested page or article could not be found. It may have been moved or the URL might be mistyped.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
          >
            <FiArrowLeft className="w-4 h-4" /> Return to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
