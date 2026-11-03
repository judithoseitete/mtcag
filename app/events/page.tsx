import FeaturedEventHero from "@/components/events/FeaturedEventHero";
import EventCard from "@/components/events/EventCard";
import Footer from "@/components/layout/Footer";
import { getUpcomingEvents } from "@/constants/weeklySchedule";

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  
  // Use the first event as featured
  const featuredEvent = upcomingEvents[0];
  const otherEvents = upcomingEvents.slice(1);

  return (
    <main className="bg-white">
      {/* Featured Event Hero */}
      {featuredEvent && (
        <FeaturedEventHero
          title={featuredEvent.title}
          date={featuredEvent.datetime.split(',')[0]} // e.g., "Wednesday"
          time={featuredEvent.datetime.split(',')[1]?.trim() || ''} // e.g., "7:00 PM - 8:00 PM"
          location="JP6C+37G, Sowutoum, Accra"
          description={featuredEvent.description}
          imageUrl="/placeholder-event.jpg"
        />
      )}

      {/* Upcoming Events */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray mb-8 md:mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {otherEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.datetime.split(',')[0]}
                time={event.datetime.split(',')[1]?.trim() || ''}
                location="JP6C+37G, Sowutoum, Accra"
                description={event.description}
                category="Weekly Service"
                imageUrl="/placeholder-event.jpg"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer bgColor="white" />
    </main>
  );
}