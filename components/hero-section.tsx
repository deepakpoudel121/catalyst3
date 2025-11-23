'use client';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 md:pt-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-3 border border-white border-opacity-10 rounded-full px-6 py-2 mb-4">
          <div className="flex -space-x-2">
              <img 
                src="/Splash.jpg"
                alt="User 1"
                className="w-6 h-6 rounded-full border-2 border-black object-cover"
              />
              <img 
                src="/bikram.jpg" 
                alt="User 2"
                className="w-6 h-6 rounded-full border-2 border-black object-cover"
              />
              <img 
                src="/trevor.jpg" 
                alt="User 3"
                className="w-6 h-6 rounded-full border-2 border-black object-cover"
              />
              <img 
                src="/sid.jpg" 
                alt="User 4"
                className="w-6 h-6 rounded-full border-2 border-black object-cover"
              />
            </div>
          <span className="text-white text-opacity-70 text-sm">Trusted by 20+ creators</span>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <h1 className="text-3xl md:text-7xl lg:text-6xl font-bold text-white leading-tight">
              #1 Growth Engine Behind the
            </h1>
          </div>

          <h2 className="text-3xl md:text-6xl lg:text-6xl text-white leading-tight">
             Internet's Elite Brands & Creators
          </h2>



          <p className="text-white text-opacity-60 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed pt-4">
            From strategy to editing to distribution, we make your content work harder,
            grow faster, and never stop performing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a href="https://calendly.com/aakashbusiness-io/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-400 transition-all duration-300 hover:scale-105 inline-block text-center">
              Get Started Today
            </a>
            <a href="/work" className="w-full sm:w-auto bg-white bg-opacity-10 backdrop-blur-sm border border-cyan-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300 inline-block text-center">
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}