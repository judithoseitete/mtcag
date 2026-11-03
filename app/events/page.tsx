import FeaturedEventHero from "@/components/events/FeaturedEventHero";
import EventCard from "@/components/events/EventCard";
import Footer from "@/components/layout/Footer";
import { events } from "@/constants/events";

export default function EventsPage() {
  const featuredEvent = events.find((event) => event.featured);
  const upcomingEvents = events.filter((event) => !event.featured);

  return (
    <main className="bg-white">
      {/* Featured Event Hero */}
      {featuredEvent && (
        <FeaturedEventHero
          title={featuredEvent.title}
          date={featuredEvent.date}
          time={featuredEvent.time}
          location={featuredEvent.location}
          description={featuredEvent.description}
          imageUrl={featuredEvent.imageUrl}
        />
      )}

      {/* Upcoming Events */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray mb-8 md:mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
                category={event.category}
                imageUrl={event.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
