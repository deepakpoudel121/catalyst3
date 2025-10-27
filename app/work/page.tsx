'use client';

import { useState, useEffect } from 'react';
import { Play, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const categories = ['All', 'YouTube Videos', 'Short-Form', 'Ad Creatives', 'VSLs'];

const portfolioItems = [
  {
    id: 1,
    title: 'LinkedIn Growth Strategy',
    category: 'Short-Form',
    thumbnail: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    stats: '2,001% Growth',
    platform: 'LinkedIn',
  },
  {
    id: 2,
    title: 'YouTube Explainer Series',
    category: 'YouTube Videos',
    thumbnail: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    stats: '1M+ Views',
    platform: 'YouTube',
  },
  {
    id: 3,
    title: '$10K/mo Guide',
    category: 'Short-Form',
    thumbnail: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    stats: '500K+ Reach',
    platform: 'Instagram',
  },
  {
    id: 4,
    title: 'Pinterest Ad Campaign',
    category: 'Ad Creatives',
    thumbnail: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    stats: '$15K Revenue',
    platform: 'Pinterest',
  },
  {
    id: 5,
    title: 'Product Launch VSL',
    category: 'VSLs',
    thumbnail: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    stats: '35% Conv. Rate',
    platform: 'Sales Page',
  },
  {
    id: 6,
    title: 'Brand Story Series',
    category: 'YouTube Videos',
    thumbnail: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    stats: '2M+ Views',
    platform: 'YouTube',
  },
  {
    id: 7,
    title: 'TikTok Viral Content',
    category: 'Short-Form',
    thumbnail: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    stats: '5M+ Views',
    platform: 'TikTok',
  },
  {
    id: 8,
    title: 'E-commerce Ad Set',
    category: 'Ad Creatives',
    thumbnail: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    stats: '3.2x ROAS',
    platform: 'Facebook',
  },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-black">
      {/* Logo Header */}
      <header className={`fixed top-8 z-50 transition-all duration-500 ${
        scrolled ? 'left-8' : 'left-1/2 -translate-x-1/2'
      }`}>
        <a 
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-all duration-300"
        >
          <span className="text-white font-bold text-3xl">Catalyst</span>
        </a>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="inline-block bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-full px-6 py-2 text-white text-opacity-70 text-sm mb-6">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            How can we help{' '}
            <span className="italic text-cyan-400">you?</span>
          </h1>
          <p className="text-white text-opacity-60 text-lg md:text-xl max-w-3xl mx-auto">
            From short-form videos, to long-form videos, to ad creatives, and VSLs, we've got you covered on every front.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6 sticky top-0 z-30 bg-black bg-opacity-95 backdrop-blur-xl border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-cyan-400 text-black'
                    : 'bg-white bg-opacity-5 text-white text-opacity-70 hover:bg-opacity-10 border border-white border-opacity-10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 relative">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-2xl overflow-hidden hover:border-cyan-400 hover:border-opacity-30 transition-all duration-300 cursor-pointer"
              >
                {/* Thumbnail */}
                <div 
                  className="aspect-[9/16] relative"
                  style={{ background: item.thumbnail }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-7 h-7 text-black fill-black ml-1" />
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 left-4 bg-black bg-opacity-60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                    <p className="text-cyan-400 font-bold text-sm">{item.stats}</p>
                  </div>

                  {/* Platform Badge */}
                  <div className="absolute top-4 right-4 bg-white bg-opacity-10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                    <p className="text-white text-xs font-medium">{item.platform}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white font-semibold text-base mb-1 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white text-opacity-50 text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to create{' '}
            <span className="text-cyan-400">something amazing?</span>
          </h2>
          <p className="text-white text-opacity-60 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you dominate your niche and scale your content to new heights.
          </p>
          <a href="https://calendly.com/aakashbusiness-io/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-400 transition-all duration-300 hover:scale-105 inline-block text-center">
              Book a Call
            </a>
        </div>
      </section>

      {/* Footer */}
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
                  <a href="/#short-form" className="text-white text-opacity-60 hover:text-cyan-400 transition-colors">
                    Short-Form
                  </a>
                </li>
                <li>
                  <a href="/#services" className="text-white text-opacity-60 hover:text-cyan-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="text-white text-opacity-60 hover:text-cyan-400 transition-colors">
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
    </div>
  );
}