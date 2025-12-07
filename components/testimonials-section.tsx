'use client';

const testimonials = [
  {
    name: 'Bikram Dosanjh',
    role: 'CEO @ Unicity',
    text: 'Working with Catalyst has been a huge asset for my personal brand at Unicity. The short-form videos they produced were sharp, well-edited, and consistently aligned with the message I wanted to communicate. Several pieces even went viral, helping us reach people we normally wouldn’t have reached. Professional, fast, and reliable.',
    avatar: 'BD',
  },
  {
    name: 'Parikchhit Basnet',
    role: 'CEO @ Mint Ave',
    text: 'Catalyst’s understanding of modern content trends is impressive. They helped Mint Ave turn simple ideas into viral short-form content that connected with our target audience. Communication was smooth and the creative direction was always on point. Highly recommend them for anyone wanting to grow fast.',
    avatar: 'PB',
  },
  {
    name: 'Didar Gidha',
    role: 'CEO @ WETBLUE MEDIA',
    text: 'Catalyst delivered strong short-form storytelling that elevated our content at Wetblue Media. High-retention edits, smart hooks, and a smooth workflow made the whole process effortless. Several videos performed extremely well and reinforced our brand credibility. Easily one of the best teams we\'ve worked with.',
    avatar: 'DG',
  },
  {
    name: 'Trevor Zheng',
    role: 'CEO @ Peak-flow Media',
    text: 'Catalyst provided exactly what I needed: consistent, fast, and viral-focused short-form content. Their editing style matched our brand perfectly and helped Peak-flow Media increase social engagement and audience reach. Very dependable team with great attention to detail.',
    avatar: 'TZ',
  },
  {
    name: 'Sid Budhathoki',
    role: 'Entrepreneur @ Dropshipping',
    text: 'Catalyst helped me turn my ideas into content that actually grabs attention. The videos were clean, trendy, and performed better than anything I had created previously. My visibility increased and I connected better with my audience in the dropshipping space. Amazing work from the team.',
    avatar: 'SB',
  },
  {
    name: 'Joshua Norris',
    role: 'Business Owner',
    text: 'I’m really impressed with Catalyst’s understanding of viral content. Every video they delivered was clear, engaging, and aligned with my brand voice. I saw noticeable improvements in engagement shortly after posting. Super consistent and easy to work with.',
    avatar: 'JN',
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