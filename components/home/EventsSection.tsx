"use client";

import { useMemo } from "react";
import { useInfiniteCarousel } from "@/hooks/useInfiniteCarousel";
import EventCard from "@/components/events/EventCard";
import { CAROUSEL_CONFIG } from "@/constants/carousel";
import { getUpcomingEvents } from "@/constants/weeklySchedule";

export default function EventsSection() {
  // Get dynamic upcoming events from weekly schedule
  const events = useMemo(() => getUpcomingEvents(), []);

  // Memoize the infinite events array to prevent recreation on every render
  const infiniteEvents = useMemo(
    () => [...events, ...events, ...events],
    [events],
  );

  const totalSlides = events.length;

  const {
    currentSlide,
    isTransitioning,
    changeSlide,
    goToPrevSlide,
    goToNextSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useInfiniteCarousel({
    totalSlides: totalSlides,
    autoRotate: CAROUSEL_CONFIG.EVENTS.autoRotate,
    autoRotateInterval: CAROUSEL_CONFIG.EVENTS.interval,
  });

  const handleDotClick = (targetIndex: number) => {
    // Always navigate to the middle set to avoid edge resets
    const targetSlide = totalSlides + targetIndex;
    changeSlide(targetSlide);
  };

  return (
    <section className="bg-brand-neutral min-h-[80vh] flex items-center py-8 md:py-20">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue text-center mb-8 md:mb-12 px-4">
          View our upcoming events
        </h2>

        <div
          className="relative overflow-hidden group"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex gap-8 ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{
              transform: `translateX(calc(-${currentSlide * 70}% - ${currentSlide * 2}rem + 15%))`,
            }}
          >
            {infiniteEvents.map((event, index) => (
              <EventCard
                key={`${event.id}-${index}`}
                title={event.title}
                description={event.description}
                datetime={event.datetime}
                variant="carousel"
              />
            ))}
          </div>

          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white p-3 rounded-full shadow-lg"
            aria-label="Previous event"
          >
            <svg
              className="w-6 h-6 text-brand-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white p-3 rounded-full shadow-lg"
            aria-label="Next event"
          >
            <svg
              className="w-6 h-6 text-brand-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="flex gap-3 justify-center mt-8">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 ${
                currentSlide % totalSlides === index
                  ? "w-8 h-2 bg-brand-red rounded-full"
                  : "w-2 h-2 bg-brand-blue/30 rounded-full hover:bg-brand-blue/50"
              }`}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
