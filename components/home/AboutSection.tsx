import Button from "../ui/Button";

export default function AboutSection() {
  return (
    <section className="bg-brand-neutral min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-brand-gray rounded-3xl px-8 py-16 md:px-16 md:py-20 lg:px-24 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12">
              Get to know us
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl text-white/80 mb-12 md:mb-16">
              We are an Assemblies of God church committed to worshiping God,
              serving others, and growing together in faith.
            </p>
            <button className="px-8 py-4 bg-brand-red text-white font-bold text-lg rounded-lg hover:bg-brand-red/90 transition-colors shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
