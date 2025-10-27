'use client';

import { Video, TrendingUp, Edit, Zap, Target, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Short-Form Content',
    description: 'Expert editing for TikTok, Instagram Reels, and YouTube Shorts that captures attention and drives engagement.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Data-driven strategies tailored to your niche, ensuring consistent growth and audience retention.',
  },
  {
    icon: Edit,
    title: 'Video Editing',
    description: 'Professional editing with elite-level quality, fast turnarounds, and versatile styles that match your brand.',
  },
  {
    icon: Zap,
    title: 'Content Distribution',
    description: 'Omni-channel distribution strategy to maximize reach and impact across all major platforms.',
  },
  {
    icon: Target,
    title: 'Brand Positioning',
    description: 'Strategic positioning to establish your unique voice and stand out in a crowded digital landscape.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Optimization',
    description: 'Continuous monitoring and optimization to ensure your content performs at its peak potential.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="short-form">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-full px-6 py-2 text-white text-opacity-70 text-sm mb-6">
            Our Services
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Everything you need to{' '}
            <span className="text-cyan-400">
              dominate
            </span>
          </h2>
          <p className="text-white text-opacity-60 text-lg max-w-2xl mx-auto">
            We provide end-to-end solutions to help brands and creators scale their content and grow their audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-2xl p-8 hover:bg-cyan-400 hover:bg-opacity-10 hover:border-cyan-400 hover:border-opacity-30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-black" />
              </div>

              <h3 className="text-white font-bold text-xl mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-white text-opacity-60 leading-relaxed group-hover:text-white group-hover:text-opacity-80 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}