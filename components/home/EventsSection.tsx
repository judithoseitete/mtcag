"use client";

import { useState, useEffect } from "react";

export default function EventsSection() {
  const [currentEventSlide, setCurrentEventSlide] = useState(4);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [resetEventTimer, setResetEventTimer] = useState(0);
  
  const events = [
    { id: 1, title: "Event Title 1", description: "Event description goes here. Details about the event.", datetime: "Date & Time" },
    { id: 2, title: "Event Title 2", description: "Event description goes here. Details about the event.", datetime: "Date & Time" },
    { id: 3, title: "Event Title 3", description: "Event description goes here. Details about the event.", datetime: "Date & Time" },
    { id: 4, title: "Event Title 4", description: "Event description goes here. Details about the event.", datetime: "Date & Time" },
  ];

  const infiniteEvents = [...events, ...events, ...events];

  // Auto-rotate event slides every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventSlide((prev) => {
        const newSlide = prev + 1;
        if (newSlide >= 8) return 4;
        return newSlide;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, [resetEventTimer]);

  // Event carousel touch handlers
  const handleEventTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleEventTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleEventTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      const newSlide = currentEventSlide + 1;
      setCurrentEventSlide(newSlide);
      setResetEventTimer(prev => prev + 1);
      if (newSlide >= 8) setTimeout(() => setCurrentEventSlide(4), 700);
    }
    if (isRightSwipe) {
      const newSlide = currentEventSlide - 1;
      setCurrentEventSlide(newSlide);
      setResetEventTimer(prev => prev + 1);
      if (newSlide < 4) setTimeout(() => setCurrentEventSlide(7), 700);
    }
  };

  return (
    <section className="bg-white h-[120vh] flex items-center">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray text-center mb-8 md:mb-12 px-4">
          Upcoming events
        </h2>

        <div
          className="relative overflow-hidden group"
          onTouchStart={handleEventTouchStart}
          onTouchMove={handleEventTouchMove}
          onTouchEnd={handleEventTouchEnd}
        >
          <div
            className="flex gap-8 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentEventSlide * 70}% - ${currentEventSlide * 2}rem + 15%))`,
            }}
          >
            {infiniteEvents.map((event, index) => (
              <div key={`${event.id}-${index}`} className="min-w-[70%] bg-brand-gray rounded-lg p-8 md:p-12 h-[400px] md:h-[500px] flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {event.title}
                </h3>
                <p className="text-lg md:text-xl text-white/90 mb-4">
                  {event.description}
                </p>
                <p className="text-brand-red font-semibold">{event.datetime}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              const newSlide = currentEventSlide - 1;
              setCurrentEventSlide(newSlide);
              setResetEventTimer(prev => prev + 1);
              if (newSlide < 4) setTimeout(() => setCurrentEventSlide(7), 700);
            }}
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
            onClick={() => {
              const newSlide = currentEventSlide + 1;
              setCurrentEventSlide(newSlide);
              setResetEventTimer(prev => prev + 1);
              if (newSlide >= 8) setTimeout(() => setCurrentEventSlide(4), 700);
            }}
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
              onClick={() => { setCurrentEventSlide(index + 4); setResetEventTimer(prev => prev + 1); }}
              className={`transition-all duration-300 ${
                (currentEventSlide % 4) === index
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
