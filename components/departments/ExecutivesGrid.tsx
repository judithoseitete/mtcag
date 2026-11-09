"use client";

import { useState, useEffect } from "react";
import ExecutiveCard from "./ExecutiveCard";
import { Executives } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ExecutivesGridProps {
  executives: Executives;
}

export default function ExecutivesGrid({ executives }: ExecutivesGridProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const executivesList = [
    { title: "President", name: executives.president },
    { title: "Vice President", name: executives.vicePresident },
    { title: "Treasurer", name: executives.treasurer },
    { title: "Organizer", name: executives.organizer },
    { title: "Secretary", name: executives.secretary },
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // For mobile: cycle through all items
        const isMobile = window.innerWidth < 768;
        const itemsPerView = isMobile ? 1 : 3;
        const maxIndex = executivesList.length - itemsPerView;

        if (prevIndex >= maxIndex) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [executivesList.length]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = executivesList.length - itemsPerView;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-primary mb-6">
        Executive Team
      </h3>

      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden flex-1 flex items-center">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {executivesList.map((executive, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2 h-[400px] md:h-[500px]"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <ExecutiveCard title={executive.title} name={executive.name} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white text-brand-blue-primary p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white text-brand-blue-primary p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-brand-blue-primary w-8"
                  : "bg-brand-blue-primary/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
