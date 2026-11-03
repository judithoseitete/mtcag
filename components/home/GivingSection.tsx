export default function GivingSection() {
  return (
    <section className="bg-brand-gray min-h-screen flex items-center py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-32 w-full">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Support our mission
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl text-white/80 max-w-2xl mx-auto mb-12 md:mb-16">
            Your tithes, offerings, and generous gifts fuel the mission and
            ministry of the church
          </p>
          <button className="px-8 py-3 md:px-12 md:py-5 bg-brand-red text-white text-lg md:text-xl font-bold rounded-lg hover:bg-brand-red/90 transition-colors">
            Give Now
          </button>
        </div>
      </div>
    </section>
  );
}