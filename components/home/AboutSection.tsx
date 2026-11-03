export default function AboutSection() {
  return (
    <section className="bg-white min-h-[80vh] md:h-screen flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-brand-neutral rounded-3xl px-8 py-16 md:px-16 md:py-20 lg:px-24 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray mb-8 md:mb-12">
              Get to know us
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl text-brand-gray/80 mb-12 md:mb-16">
              We are an Assemblies of God church committed to worshipping God,
              serving others, and growing together in faith.
            </p>
            <button className="px-8 py-3 md:px-12 md:py-5 bg-brand-gray text-white text-lg md:text-xl font-bold rounded-lg hover:bg-brand-gray/90 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
