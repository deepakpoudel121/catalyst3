'use client';

import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0520] to-black" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1dc1cd] rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7b2cbf] rounded-full filter blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-4">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1dc1cd] to-blue-400 border-2 border-black" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-black" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-black" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-black" />
          </div>
          <span className="text-white/70 text-sm">Trusted by 20+ creators</span>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <Sparkles className="w-12 h-12 text-yellow-300 animate-pulse" />
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              #1 Growth Engine
            </h1>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Behind the Internet's Elite
          </h2>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Brands & Creators
          </h2>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Sparkles className="w-10 h-10 text-yellow-300 animate-pulse delay-300" />
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse delay-500" />
          </div>
        </div>

        <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed pt-4">
          From strategy to editing to distribution, we make your content work harder,
          grow faster, and never stop performing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button className="bg-gradient-to-r from-[#1dc1cd] to-[#7b2cbf] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#1dc1cd]/50 transition-all duration-300 hover:scale-105">
            Get Started Today
          </button>
          <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
            View Our Work
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
