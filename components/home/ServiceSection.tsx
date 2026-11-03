export default function ServiceSection() {
  return (
    <section className="bg-white h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray text-center mb-8 md:mb-12">
          Join us this Sunday
        </h2>
        <div className="flex flex-col md:flex-row md:divide-x-2 divide-brand-gray/30">
          {/* Time */}
          <div className="flex-1 py-8 pb-12 md:py-10 md:px-12 text-center relative">
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-brand-gray/30 md:hidden"></div>
            <h3 className="text-lg md:text-xl font-semibold text-brand-gray/70 mb-3 uppercase tracking-wide">
              Time
            </h3>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-red mb-6">
              8:00 AM to
              <br />
              10:30 AM
            </p>
            <button className="px-6 py-3 border-2 border-brand-gray text-brand-gray font-semibold rounded-lg hover:bg-brand-gray hover:text-white transition-colors">
              See other weekly times
            </button>
          </div>

          {/* Location */}
          <div className="flex-1 pt-16 pb-8 md:py-10 md:px-12 text-center">
            <h3 className="text-lg md:text-xl font-semibold text-brand-gray/70 mb-3 uppercase tracking-wide">
              Location
            </h3>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-red mb-6">
              Sowutuom, Accra
              <br className="md:hidden" />
              <span className="hidden md:inline">, </span>Ghana
            </p>
            <button className="px-6 py-3 border-2 border-brand-gray text-brand-gray font-semibold rounded-lg hover:bg-brand-gray hover:text-white transition-colors">
              Get directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
