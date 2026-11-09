import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-brand-neutral min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-brand-blue rounded-3xl px-8 py-16 md:px-16 md:py-20 lg:px-24 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-neutral mb-8 md:mb-12">
              Get to know us
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl text-brand-neutral mb-12 md:mb-16">
              We are an Assemblies of God church committed to worshiping God,
              serving others, and growing together in faith.
            </p>
            <Link
              href="/about"
              className="inline-block px-8 py-4 bg-brand-yellow text-brand-blue font-bold text-lg rounded-lg hover:bg-brand-red hover:text-white transition-colors shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
