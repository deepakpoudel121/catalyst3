'use client';

const testimonials = [
  {
    name: 'Lara Acosta',
    role: 'Founder @ LA Digital',
    text: 'Catalyst and their team are phenomenal. Their unmatched work rate, dedication, and creativity have made them invaluable partners for producing content.',
    avatar: 'LA',
  },
  {
    name: 'Marcus Engel',
    role: 'Founder @ 301 Studios',
    text: 'Catalyst set a new standard for video editing with exceptional quality and efficiency. 10000/10.',
    avatar: 'ME',
  },
  {
    name: 'Mena Mikhail',
    role: 'Founder @ Human Voice Over',
    text: 'Working with Catalyst was seamless. The quality was incredible, with versatile video and animation. It\'s a one-stop shop. Excited for a long-term partnership.',
    avatar: 'MM',
  },
  {
    name: 'Inge von Aulock',
    role: 'Founder @ Penfriend',
    text: 'Awesome work! Never once left the loop for any revisions, and made sure end video was exactly what we were looking for.',
    avatar: 'IA',
  },
  {
    name: 'Niall Ratcliffe',
    role: 'Co-founder @ Ratcliffe Brothers',
    text: 'Catalyst is the best. He delivers elite videos without hand-holding. I\'m thrilled with his short-form work and will use him for YouTube next. Hire him; he\'s elite.',
    avatar: 'NR',
  },
  {
    name: 'Luke Matthews',
    role: 'Founder @ AI WRITING made EASY',
    text: 'Catalyst transformed our video content overnight. From rushed deadlines to outstanding quality, his work exceeded our expectations and elevated our brand.',
    avatar: 'LM',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-2xl p-6 hover:bg-white hover:bg-opacity-10 transition-all duration-300 hover:border-cyan-400 hover:border-opacity-30 group"
            >
              <p className="text-white text-opacity-70 text-base leading-relaxed mb-6 group-hover:text-white group-hover:text-opacity-90 transition-colors">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-black font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white text-opacity-50 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}