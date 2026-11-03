"use client";

import { useMemo } from "react";
import { useInfiniteCarousel } from "@/hooks/useInfiniteCarousel";
import { Event } from "@/types";
import EventCard from "./EventCard";
import { CAROUSEL_CONFIG } from "@/constants/carousel";

export default function EventsSection() {
  const events: Event[] = [
    { id: 1, title: "Event Title 1", description: "Event description goes here. Details about the event.", datetime: "Date & Time" },
    { id: 2, title: "Event Title 2", description: "Event description goes here. Details about the event.", datetime: "Date & Time" },
    { id: 3, title: "Event Title 3", description: "Event description goes here. Details about the event.", datetime: "Date & Time" },
    { id: 4, title: "Event Title 4", description: "Event description goes here. Details about the event.", datetime: "Date & Time" },
  ];

  // Memoize the infinite events array to prevent recreation on every render
  const infiniteEvents = useMemo(() => [...events, ...events, ...events], []);

  const {
    currentSlide,
    changeSlide,
    goToPrevSlide,
    goToNextSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useInfiniteCarousel({
    totalSlides: CAROUSEL_CONFIG.EVENTS.totalSlides,
    autoRotate: CAROUSEL_CONFIG.EVENTS.autoRotate,
    autoRotateInterval: CAROUSEL_CONFIG.EVENTS.interval,
  });

  return (
    <section className="bg-white h-[120vh] flex items-center">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray text-center mb-8 md:mb-12 px-4">
          Upcoming events
        </h2>

        <div
          className="relative overflow-hidden group"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-8 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentSlide * 70}% - ${currentSlide * 2}rem + 15%))`,
            }}
          >
            {infiniteEvents.map((event, index) => (
              <EventCard key={`${event.id}-${index}`} event={event} />
            ))}
          </div>

          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 hover:bg-white/30 p-3 rounded-full"
            aria-label="Previous event"
          >
            <svg
              className="w-6 h-6 text-brand-gray"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 hover:bg-white/30 p-3 rounded-full"
            aria-label="Next event"
          >
            <svg
              className="w-6 h-6 text-brand-gray"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={() => changeSlide(index + 4)}
              className={`transition-all duration-300 ${
                currentSlide % 4 === index
                  ? "w-8 h-2 bg-brand-red rounded-full"
                  : "w-2 h-2 bg-brand-gray/30 rounded-full hover:bg-brand-gray/50"
              }`}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
