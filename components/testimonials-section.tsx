'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Bikram Dosanjh',
    role: 'CEO @ Unicity',
    text: 'Catalyst produced sharp, well-edited videos that aligned perfectly with my message. Several went viral, reaching audiences we normally wouldn’t have reached.',
    avatar: '/bikram.jpg',
  },
  {
    name: 'Parikchhit Basnet',
    role: 'CEO @ Mint Ave',
    text: 'They turned simple ideas into viral content that connected with our audience. Communication was smooth and creative direction always on point.',
    avatar: '/Splash.jpg',
  },
  {
    name: 'Didar Gidha',
    role: 'CEO @ WETBLUE MEDIA',
    text: 'High-retention edits, smart hooks, and smooth workflow made the process effortless. Several videos performed extremely well.',
    avatar: 'didar.jpg',
  },
  {
    name: 'Trevor Zheng',
    role: 'CEO @ Peak-flow Media',
    text: 'Consistent, fast, viral-focused content. Their editing matched our brand perfectly and increased social engagement.',
    avatar: '/trevor.jpg',
  },
  {
    name: 'Sid Budhathoki',
    role: 'Entrepreneur @ Dropshipping',
    text: 'Turned my ideas into attention-grabbing content. Videos were clean, trendy, and performed better than anything I created previously.',
    avatar: '/sid.jpg',
  },
  {
    name: 'Joshua Norris',
    role: 'Business Owner',
    text: 'Every video was clear, engaging, and aligned with my brand voice. Saw noticeable improvements in engagement quickly.',
    avatar: '/joshua.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* cyan glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-full px-6 py-2 text-white text-opacity-70 text-sm mb-6">
            Testimonials
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            There's a reason people
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            are{' '}
            <span className="italic text-cyan-400">
              raving
            </span>{' '}
            about us.
          </h2>
        </div>

        {/* cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-2xl p-6 hover:bg-white hover:bg-opacity-10 transition-all duration-300 hover:border-cyan-400 hover:border-opacity-30 group flex flex-col min-h-[280px]"
            >
              {/* Quote icon for visual appeal */}
              <div className="mb-4">
                <svg className="w-8 h-8 text-cyan-400 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4z" />
                </svg>
              </div>

              <p className="text-white text-opacity-70 text-base leading-relaxed mb-6 group-hover:text-white group-hover:text-opacity-90 transition-colors flex-grow">
                {t.text}
              </p>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover border border-white/20"
                />

                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-white text-opacity-50 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Stats section to add social proof */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white text-opacity-60 text-sm mb-4">TRUSTED BY LEADERS ACROSS INDUSTRIES</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">6+</div>
              <div className="text-sm text-white/60">Industry Leaders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">100%</div>
              <div className="text-sm text-white/60">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">50+</div>
              <div className="text-sm text-white/60">Viral Videos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}