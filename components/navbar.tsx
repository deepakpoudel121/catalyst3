'use client';

import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
      scrolled ? 'w-auto' : 'w-[90%] max-w-5xl'
    }`}>
      <div
        className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-4 transition-all duration-500 ${
          scrolled ? 'bg-white/5' : ''
        }`}
        style={{
          boxShadow: '0 8px 32px 0 rgba(29, 193, 205, 0.1)',
        }}
      >
        <div className="flex items-center justify-between gap-8">
          <div
            className={`flex items-center gap-2 transition-all duration-500 ${
              scrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'
            }`}
          >
            <Sparkles className="w-6 h-6 text-[#1dc1cd]" />
            <span className="text-white font-bold text-lg whitespace-nowrap">Catalyst</span>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="#short-form"
              className="text-white/90 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
            >
              Short-Form
            </a>
            <a
              href="#services"
              className="text-white/90 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
            >
              Services
            </a>
            <a
              href="#faq"
              className="text-white/90 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
            >
              FAQs
            </a>
          </div>
          <button
            className={`bg-gradient-to-r from-[#1dc1cd] to-[#7b2cbf] text-white rounded-full font-medium text-sm hover:shadow-lg hover:shadow-[#1dc1cd]/50 transition-all duration-500 whitespace-nowrap ${
              scrolled ? 'opacity-0 w-0 overflow-hidden px-0 py-0' : 'opacity-100 w-auto px-6 py-2.5'
            }`}
          >
            Book a call
          </button>
        </div>
      </div>
    </nav>
  );
}
