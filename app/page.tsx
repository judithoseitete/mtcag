"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [resetTimer, setResetTimer] = useState(0);
  const totalSlides = 2;

  // Auto-rotate slides every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 15000);

    return () => clearInterval(interval);
  }, [resetTimer]);

  const changeSlide = (newSlide: number) => {
    setCurrentSlide(newSlide);
    setResetTimer(prev => prev + 1); // Reset timer by changing dependency
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && currentSlide > 0) {
        changeSlide(currentSlide - 1);
      }
      if (e.key === "ArrowRight" && currentSlide < totalSlides - 1) {
        changeSlide(currentSlide + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  // Handle touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      changeSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      changeSlide(currentSlide - 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      changeSlide(currentSlide - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      changeSlide(currentSlide + 1);
    }
  };

  return (
    <main>
      {/* Hero Slider Section */}
      <section 
        className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] overflow-hidden group"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slide 1 - Welcome */}
        <div
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            currentSlide === 0 ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="absolute inset-0 bg-brand-gray">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-red/80"></div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
                Welcome to More Than Conquerors
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto">
                In all these things, we are more than conquerors through Him who loved us
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white font-bold text-lg rounded-lg hover:bg-brand-red/90 transition-colors shadow-lg">
                  Plan Your Visit
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-brand-gray font-bold text-lg rounded-lg hover:bg-brand-neutral transition-colors shadow-lg">
                  Watch Online
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 - Events */}
        <div
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            currentSlide === 1 ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute inset-0 bg-brand-gray">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red/90 to-brand-yellow/80"></div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                Upcoming events will go here
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Description of whatever event is next
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Hidden on mobile, visible on hover for desktop */}
        {currentSlide > 0 && (
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 hover:bg-white/30 p-3 rounded-full"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {currentSlide < totalSlides - 1 && (
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 hover:bg-white/30 p-3 rounded-full"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Slider Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 h-2 bg-white rounded-full"
                  : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Service Section */}
      <section className="bg-white h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray text-center mb-8 md:mb-12">
            Join us this Sunday
          </h2>
          <div className="flex flex-col md:flex-row md:divide-x-2 divide-brand-gray/30">
            {/* Time */}
            <div className="flex-1 py-8 pb-12 md:py-10 md:px-12 text-center relative">
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-brand-gray/30 md:hidden"></div>
              <h3 className="text-lg md:text-xl font-semibold text-brand-gray/70 mb-3 uppercase tracking-wide">
                Time
              </h3>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-red mb-6">
                8:00 AM to<br />10:30 AM
              </p>
              <button className="px-6 py-3 border-2 border-brand-gray text-brand-gray font-semibold rounded-lg hover:bg-brand-gray hover:text-white transition-colors">
                See other weekly times
              </button>
            </div>

            {/* Location */}
            <div className="flex-1 pt-16 pb-8 md:py-10 md:px-12 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-brand-gray/70 mb-3 uppercase tracking-wide">
                Location
              </h3>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-red mb-6">
                Sowutuom, Accra<br className="md:hidden" /><span className="hidden md:inline">, </span>Ghana
              </p>
              <button className="px-6 py-3 border-2 border-brand-gray text-brand-gray font-semibold rounded-lg hover:bg-brand-gray hover:text-white transition-colors">
                Get directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-brand-neutral h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray mb-8 md:mb-12">About Our Church
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl text-brand-gray/80 mb-8">
              We are an Assemblies of God church committed to worshiping God, serving others, 
              and growing together in faith.
            </p>
            <button className="px-8 py-3 bg-brand-gray text-white font-bold rounded-lg hover:bg-brand-gray/90 transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}














