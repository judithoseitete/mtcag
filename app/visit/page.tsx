export default function VisitPage() {
  return (
    <main>
      {/* Page Title */}
      <section className="bg-brand-neutral py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray text-center">
            Plan Your Visit
          </h1>
          <p className="text-lg md:text-xl text-brand-gray/70 text-center mt-4">
            We would love to see you this Sunday
          </p>
        </div>
      </section>

      {/* Service Times */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-32">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray text-center mb-12">
            Service Times
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-brand-neutral rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-brand-gray mb-2">
                Sunday Service
              </h3>
              <p className="text-4xl font-bold text-brand-red mb-2">9:00 AM</p>
              <p className="text-brand-gray/70">
                Worship, Word, and Fellowship
              </p>
            </div>
            <div className="bg-brand-neutral rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-brand-gray mb-2">
                Midweek Service
              </h3>
              <p className="text-4xl font-bold text-brand-red mb-2">6:00 PM</p>
              <p className="text-brand-gray/70">Wednesday Bible Study</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="bg-brand-neutral py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-32">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray text-center mb-12">
            Location
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold text-brand-gray mb-6">
                  Find Us Here
                </h3>
                <div className="space-y-4 text-brand-gray/80">
                  <p className="text-lg">
                    <strong className="text-brand-gray">Address:</strong>
                    <br />
                    JP6C+37G, Sowutoum
                    <br />
                    Accra, Ghana
                  </p>
                  <p className="text-lg">
                    <strong className="text-brand-gray">Phone:</strong>
                    <br />
                    <a
                      href="tel:+233244251800"
                      className="text-brand-red hover:underline"
                    >
                      +233 (0) 24 425 1800
                    </a>
                  </p>
                  <div className="pt-4">
                    <p className="text-sm text-brand-gray/60 mb-2">
                      <strong>Parking:</strong> Available on-site
                    </p>
                    <p className="text-sm text-brand-gray/60">
                      <strong>Accessibility:</strong> Wheelchair accessible
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2 h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=JP6C+37G,+Sowutoum,+Accra,+Ghana&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-32">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray text-center mb-12">
            What to Expect
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-brand-neutral rounded-lg p-8">
              <h3 className="text-xl font-bold text-brand-gray mb-3">
                Service Duration
              </h3>
              <p className="text-brand-gray/80">
                Our services typically last about 2 hours, including worship,
                teaching, and prayer time.
              </p>
            </div>
            <div className="bg-brand-neutral rounded-lg p-8">
              <h3 className="text-xl font-bold text-brand-gray mb-3">
                Dress Code
              </h3>
              <p className="text-brand-gray/80">
                Come as you are! We welcome everyone regardless of what you wear.
                Some dress casually, others more formally - you will fit right in.
              </p>
            </div>
            <div className="bg-brand-neutral rounded-lg p-8">
              <h3 className="text-xl font-bold text-brand-gray mb-3">
                Family Friendly
              </h3>
              <p className="text-brand-gray/80">
                Children are welcome in our main service, and we have dedicated
                programs for kids and youth to learn and grow in faith.
              </p>
            </div>
            <div className="bg-brand-neutral rounded-lg p-8">
              <h3 className="text-xl font-bold text-brand-gray mb-3">Language</h3>
              <p className="text-brand-gray/80">
                Services are conducted in English with occasional translations
                available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-gray py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            We are here to help! Contact us or check out our weekly calendar for
            more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-brand-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-red/90 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="/events"
              className="bg-white text-brand-gray px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-neutral transition-colors duration-300"
            >
              View Calendar
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}