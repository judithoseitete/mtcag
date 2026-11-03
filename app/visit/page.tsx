export default function VisitPage() {
  const weeklySchedule = [
    {
      day: "Sunday",
      events: [{ time: "8:00 AM - 10:30 AM", event: "Sunday Service" }],
    },
    {
      day: "Monday",
      events: [
        { time: "6:45 PM - 8:00 PM", event: "Women Ministry Meeting" },
        { time: "7:00 PM - 8:00 PM", event: "Youth Ministry Meeting" },
      ],
    },
    { day: "Tuesday", events: [] },
    {
      day: "Wednesday",
      events: [{ time: "6:00 PM", event: "Bible Study" }],
    },
    { day: "Thursday", events: [] },
    { day: "Friday", events: [] },
    { day: "Saturday", events: [] },
  ];

  return (
    <main>
      {/* Page Title */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-32">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray text-center">
            We would love to see you at church!
          </h1>
        </div>
      </section>

      {/* Weekly Calendar */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-32">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray mb-12">
            Weekly Calendar
          </h2>
          <div className="bg-white rounded-lg border-2 border-brand-gray overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-gray text-white">
                    <th className="px-8 py-6 text-left text-xl font-bold">
                      Day
                    </th>
                    <th className="px-8 py-6 text-left text-xl font-bold">
                      Events
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {weeklySchedule.map((item, index) => (
                    <tr
                      key={item.day}
                      className="bg-white hover:bg-brand-neutral/30 transition-colors"
                    >
                      <td className="px-8 py-6 font-bold text-brand-gray text-lg border-b border-brand-gray/20">
                        {item.day}
                      </td>
                      <td className="px-8 py-6 text-brand-gray/80 text-lg border-b border-brand-gray/20">
                        {item.events.length > 0 ? (
                          <table className="w-full table-fixed">
                            <colgroup>
                              <col style={{ width: "200px" }} />
                              <col />
                            </colgroup>
                            <tbody>
                              {item.events.map((eventItem, idx) => (
                                <tr
                                  key={idx}
                                  className="border-b last:border-b-0 border-brand-gray/5"
                                >
                                  <td className="py-2 pr-4 text-brand-gray font-medium">
                                    {eventItem.time}
                                  </td>
                                  <td className="py-2 text-brand-gray/80">
                                    {eventItem.event}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          <span className="text-brand-gray/40 italic">
                            No events
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                Come as you are! We welcome everyone regardless of what you
                wear. Some dress casually, others more formally - you will fit
                right in.
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
              <h3 className="text-xl font-bold text-brand-gray mb-3">
                Language
              </h3>
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
