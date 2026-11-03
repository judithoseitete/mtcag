"use client";

export default function Home() {
  const scrollToServices = () => {
    // Get the actual header height
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;
    
    window.scrollTo({ 
      top: window.innerHeight - headerHeight + 2,
      behavior: 'smooth' 
    });
  };

  return (
    <main>
      {/* Hero Section - accounts for header height */}
      <section className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-brand-gray">
          {/* Placeholder for hero image - will be replaced with actual church photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-red/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
            Welcome to More Than Conquerors
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto">
            "In all these things, we are more than conquerors through Him who loved us"
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white font-bold text-lg rounded-lg hover:bg-brand-red/90 transition-colors shadow-lg">
              Plan Your Visit
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-brand-gray font-bold text-lg rounded-lg hover:bg-brand-neutral transition-colors shadow-lg">
              Watch Online
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Scroll to services"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </section>

      {/* Service Times Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray text-center mb-8 md:mb-12">
            Join Us This Sunday
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Service Time Card 1 */}
            <div className="bg-brand-neutral p-6 md:p-8 rounded-lg text-center">
              <h3 className="text-xl md:text-2xl font-bold text-brand-gray mb-2">
                Sunday Morning
              </h3>
              <p className="text-3xl md:text-4xl font-bold text-brand-red mb-2">
                9:00 AM
              </p>
              <p className="text-brand-gray/70">
                Traditional Worship Service
              </p>
            </div>

            {/* Service Time Card 2 */}
            <div className="bg-brand-neutral p-6 md:p-8 rounded-lg text-center">
              <h3 className="text-xl md:text-2xl font-bold text-brand-gray mb-2">
                Sunday Evening
              </h3>
              <p className="text-3xl md:text-4xl font-bold text-brand-red mb-2">
                11:00 AM
              </p>
              <p className="text-brand-gray/70">
                Contemporary Worship Service
              </p>
            </div>

            {/* Service Time Card 3 */}
            <div className="bg-brand-neutral p-6 md:p-8 rounded-lg text-center">
              <h3 className="text-xl md:text-2xl font-bold text-brand-gray mb-2">
                Wednesday Night
              </h3>
              <p className="text-3xl md:text-4xl font-bold text-brand-red mb-2">
                7:00 PM
              </p>
              <p className="text-brand-gray/70">
                Bible Study & Prayer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-brand-neutral py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray mb-6">
              About Our Church
            </h2>
            <p className="text-lg md:text-xl text-brand-gray/80 mb-8">
              More Than Conquerors Assemblies of God is a vibrant community of believers 
              committed to worshiping God, serving others, and growing together in faith. 
              We welcome you to join us on this journey.
            </p>
            <button className="px-8 py-3 bg-brand-gray text-white font-bold rounded-lg hover:bg-brand-gray/90 transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
