export default function AboutSection() {
  return (
    <section className="bg-brand-neutral h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray mb-8 md:mb-12">
            Learn about our church
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl text-brand-gray/80 mb-8">
            We are an Assemblies of God church committed to worshiping God,
            serving others, and growing together in faith.
          </p>
          <button className="px-8 py-3 bg-brand-gray text-white font-bold rounded-lg hover:bg-brand-gray/90 transition-colors">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
