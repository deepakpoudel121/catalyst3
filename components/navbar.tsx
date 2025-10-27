'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'w-auto' : 'w-[90%] max-w-5xl'
      }`}>
        <div
          className={`backdrop-blur-xl bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl px-6 py-4 transition-all duration-500 ${
            scrolled ? 'bg-opacity-5' : ''
          }`}
          style={{
            boxShadow: '0 8px 32px 0 rgba(29, 193, 205, 0.1)',
          }}
        >
          <div className="flex items-center justify-between gap-4 md:gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-base md:text-lg whitespace-nowrap">Catalyst</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#short-form"
                className="text-white text-opacity-90 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
              >
                Short-Form
              </a>
              <a
                href="#services"
                className="text-white text-opacity-90 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
              >
                Services
              </a>
              <a
                href="#faq"
                className="text-white text-opacity-90 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
              >
                FAQs
              </a>
            </div>

            {/* Desktop CTA Button */}
            <a
              href="https://calendly.com/aakashbusiness-io/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:block bg-cyan-400 text-black rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-cyan-400 transition-all duration-500 whitespace-nowrap ${
                scrolled ? 'opacity-0 w-0 overflow-hidden px-0 py-0' : 'opacity-100 w-auto px-6 py-2.5'
              }`}
            >
              Book a call
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md backdrop-blur-xl bg-white bg-opacity-10 border border-white border-opacity-20 rounded-3xl p-6"
            style={{
              boxShadow: '0 8px 32px 0 rgba(29, 193, 205, 0.2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              <a
                href="#short-form"
                onClick={handleLinkClick}
                className="text-white text-opacity-90 hover:text-white transition-colors text-base font-medium py-3 px-4 hover:bg-white hover:bg-opacity-10 rounded-xl"
              >
                Short-Form
              </a>
              <a
                href="#services"
                onClick={handleLinkClick}
                className="text-white text-opacity-90 hover:text-white transition-colors text-base font-medium py-3 px-4 hover:bg-white hover:bg-opacity-10 rounded-xl"
              >
                Services
              </a>
              <a
                href="#faq"
                onClick={handleLinkClick}
                className="text-white text-opacity-90 hover:text-white transition-colors text-base font-medium py-3 px-4 hover:bg-white hover:bg-opacity-10 rounded-xl"
              >
                FAQs
              </a>
              <a
                href="https://calendly.com/aakashbusiness-io/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="bg-cyan-400 text-black rounded-xl font-medium text-base py-3 px-6 hover:shadow-lg hover:shadow-cyan-400 transition-all mt-2 inline-block text-center"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}