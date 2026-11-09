import Footer from "@/components/layout/Footer";
import { weeklySchedule } from "@/constants/weeklySchedule";

export default function VisitPage() {
  const formattedSchedule = weeklySchedule.map(day => ({
    day: day.day + "s",
    events: day.events
  }));

  return (
    <>
    <main>
      {/* Page Title */}
      <section className="bg-brand-neutral py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-32">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-primary text-center">
            We would love to see you at church!
          </h1>
        </div>
      </section>

      {/* Weekly Calendar */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-32">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-primary mb-12">
            General weekly calendar
          </h2>
          <div className="bg-white rounded-lg border-2 border-brand-blue-primary overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-brand-blue-primary text-white">
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
                      <td className="px-8 py-6 font-bold text-brand-blue-primary text-lg border-b border-brand-blue-primary/20">
                        {item.day}
                      </td>
                      <td className="px-8 py-6 text-brand-blue-primary/80 text-lg border-b border-brand-blue-primary/20">
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
                                  className="border-b last:border-b-0 border-brand-blue-primary/5"
                                >
                                  <td className="py-2 pr-4 text-brand-blue-primary font-medium whitespace-nowrap">
                                    {eventItem.time}
                                  </td>
                                  <td className="py-2 text-brand-blue-primary/80 whitespace-nowrap">
                                    {eventItem.event}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          <span className="text-brand-blue-primary/40 italic">
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
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-32">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-primary mb-12">
            Where to find us
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg border-2 border-brand-blue-primary overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58898.80328919093!2d-0.3512620925903552!3d5.6103908666160995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf98f6e7bfbb55%3A0x44c6631651d9dcc6!2sMore%20Than%20Conquerors%20Assemblies%20Of%20God!5e1!3m2!1sen!2sgh!4v1793708163315!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="rounded"
              ></iframe>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/maps/place/More+Than+Conquerors+Assemblies+Of+God/@5.6103909,-0.3512621,15z/data=!4m6!3m5!1s0xfdf98f6e7bfbb55:0x44c6631651d9dcc6!8m2!3d5.6103909!4d-0.3512621!16s%2Fg%2F11vt5w1h9s"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-red/90 transition-colors duration-300 text-center"
              >
                Open in Google Maps
              </a>
              <a
                href="http://maps.apple.com/?q=More+Than+Conquerors+AG&ll=5.6103909,-0.3512621"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-blue-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-blue-primary/90 transition-colors duration-300 text-center"
              >
                Open in Apple Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Order of Service */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-32">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-primary mb-12">
            What to expect for a Sunday service
          </h2>
          <div className="bg-white rounded-lg border-2 border-brand-blue-primary overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-blue-primary text-white">
                    <th className="px-8 py-4 text-left text-xl font-bold">
                      Order of service
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-brand-neutral/30 transition-colors">
                    <td className="px-8 py-4 text-brand-blue-primary/80 text-lg border-b border-brand-blue-primary/20">
                      Opening prayer
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-brand-neutral/30 transition-colors">
                    <td className="px-8 py-4 text-brand-blue-primary/80 text-lg border-b border-brand-blue-primary/20">
                      Praise and worship
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-brand-neutral/30 transition-colors">
                    <td className="px-8 py-4 text-brand-blue-primary/80 text-lg border-b border-brand-blue-primary/20">
                      First offering
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-brand-neutral/30 transition-colors">
                    <td className="px-8 py-4 text-brand-blue-primary/80 text-lg border-b border-brand-blue-primary/20">
                      Tithes
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-brand-neutral/30 transition-colors">
                    <td className="px-8 py-4 text-brand-blue-primary/80 text-lg border-b border-brand-blue-primary/20">
                      Announcements
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-brand-neutral/30 transition-colors">
                    <td className="px-8 py-4 text-brand-blue-primary/80 text-lg border-b border-brand-blue-primary/20">
                      Music ministration
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-brand-neutral/30 transition-colors">
                    <td className="px-8 py-4 text-brand-blue-primary/80 text-lg border-b border-brand-blue-primary/20">
                      Sermon
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-brand-neutral/30 transition-colors">
                    <td className="px-8 py-4 text-brand-blue-primary/80 text-lg border-b border-brand-blue-primary/20">
                      Project offering
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-brand-neutral/30 transition-colors">
                    <td className="px-8 py-4 text-brand-blue-primary/80 text-lg border-b border-brand-blue-primary/20">
                      Sunday school session
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer bgColor="white" cardVariant="dark" />
    </>
  );
}

