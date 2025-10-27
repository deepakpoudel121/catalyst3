'use client';

import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 relative overflow-hidden border-t border-white border-opacity-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white font-bold text-2xl">Catalyst</span>
            </div>
            <p className="text-white text-opacity-60 max-w-md leading-relaxed">
              The #1 growth engine behind the internet's elite brands and creators.
              From strategy to execution, we make your content perform.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#short-form" className="text-white text-opacity-60 hover:text-cyan-400 transition-colors">
                  Short-Form
                </a>
              </li>
              <li>
                <a href="#services" className="text-white text-opacity-60 hover:text-cyan-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white text-opacity-60 hover:text-cyan-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-60 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:bg-opacity-20 hover:border-cyan-400 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-white text-opacity-70" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:bg-opacity-20 hover:border-cyan-400 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-white text-opacity-70" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:bg-opacity-20 hover:border-cyan-400 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-white text-opacity-70" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:bg-opacity-20 hover:border-cyan-400 transition-all duration-300"
              >
                <Youtube className="w-5 h-5 text-white text-opacity-70" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white border-opacity-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-opacity-50 text-sm">
            2025 Catalyst Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white text-opacity-50 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white text-opacity-50 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}