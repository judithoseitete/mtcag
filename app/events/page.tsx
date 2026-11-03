import Footer from "@/components/layout/Footer";
import { getUpcomingEvents } from "@/constants/weeklySchedule";

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Page Title */}
        <section className="bg-brand-neutral py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray text-center">
              Upcoming Events
            </h1>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-brand-neutral rounded-lg p-6 md:p-8 border-2 border-brand-gray/10 hover:border-brand-red/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-brand-gray mb-2">
                        {event.title}
                      </h2>
                      <p className="text-lg text-brand-gray/70 mb-4">
                        {event.description}
                      </p>
                    </div>
                    <div className="md:text-right">
                      <p className="text-lg font-semibold text-brand-red">
                        {event.datetime}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {upcomingEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-brand-gray/60">
                  No upcoming events at this time. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer bgColor="white" />
    </>
  );
}