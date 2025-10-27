'use client';

import { Check, X } from 'lucide-react';

const otherAgencies = [
  'Slow communication',
  'Single channel approach',
  'Outdated growth strategies',
  'Lack of industry research',
  'Outsourced to mediocre talent',
];

const catalystFeatures = [
  'Constant, proactive communication',
  'Omni-channel approach',
  'Tailored best-fit solutions',
  'Provides industry specific expertise',
  'Experts with 4+ years of experience',
];

export default function ComparisonSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-full px-6 py-2 text-white text-opacity-70 text-sm mb-6">
            Comparison
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            But, why would you
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            want to work{' '}
            <span className="italic text-cyan-400">
              with us?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-3xl p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-white text-opacity-50 mb-8">Other Agencies</h3>
            <div className="space-y-6 flex-1">
              {otherAgencies.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-white text-opacity-60 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cyan-400 bg-opacity-10 backdrop-blur-sm border border-cyan-400 border-opacity-30 rounded-3xl p-8 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 rounded-full blur-3xl opacity-20" />

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-black transform rotate-45" />
                </div>
                <h3 className="text-2xl font-bold text-white">catalyst</h3>
              </div>

              <div className="space-y-6 flex-1">
                {catalystFeatures.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-cyan-400 bg-opacity-30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-cyan-400" />
                    </div>
                    <p className="text-white text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}