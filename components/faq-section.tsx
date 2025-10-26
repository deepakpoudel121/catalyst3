'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Catalyst Agency offer?',
    answer: 'We offer comprehensive content creation services including strategy development, video editing, distribution, short-form content creation, and growth optimization for brands and creators.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most clients start seeing measurable improvements within the first 30 days. However, sustainable growth typically becomes evident within 60-90 days of consistent collaboration.',
  },
  {
    question: 'What makes Catalyst different from other agencies?',
    answer: 'We combine constant proactive communication, omni-channel expertise, and tailored solutions delivered by experts with 4+ years of experience. Unlike other agencies, we never outsource to mediocre talent.',
  },
  {
    question: 'Do you work with both brands and individual creators?',
    answer: 'Yes! We work with both established brands looking to scale their content operations and individual creators aiming to grow their audience and monetization.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our pricing is customized based on your specific needs, goals, and the scope of services required. Book a call with us to discuss a tailored package that fits your budget and objectives.',
  },
  {
    question: 'How involved do I need to be in the content creation process?',
    answer: 'We adapt to your preferred level of involvement. Some clients prefer hands-off execution while others want to be involved in every step. We maintain constant communication and can work with any collaboration style.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="faq">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0520] to-black" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1dc1cd] rounded-full filter blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 text-white/70 text-sm mb-6">
            FAQs
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Questions?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1dc1cd] to-[#7b2cbf]">
              We've got answers.
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#1dc1cd]/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-white font-semibold text-lg pr-8 group-hover:text-[#1dc1cd] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-white/50 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/60 mb-6">Still have questions?</p>
          <button className="bg-gradient-to-r from-[#1dc1cd] to-[#7b2cbf] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#1dc1cd]/50 transition-all duration-300 hover:scale-105">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}
