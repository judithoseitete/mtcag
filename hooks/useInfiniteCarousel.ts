import { useState, useEffect, useCallback } from "react";
import { CAROUSEL_INTERVAL, SWIPE_THRESHOLD, INFINITE_CAROUSEL_RESET_DELAY } from "@/constants/carousel";

interface UseInfiniteCarouselOptions {
  totalSlides: number;
  autoRotate?: boolean;
  autoRotateInterval?: number;
  startSlide?: number;
  onSlideChange?: (newSlide: number) => void;
}

export function useInfiniteCarousel({
  totalSlides,
  autoRotate = true,
  autoRotateInterval = CAROUSEL_INTERVAL,
  startSlide,
  onSlideChange,
}: UseInfiniteCarouselOptions) {
  const [currentSlide, setCurrentSlide] = useState(startSlide || totalSlides);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [resetTimer, setResetTimer] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const newSlide = prev + 1;
        // Wrap from end back to middle set
        if (newSlide >= totalSlides * 2) return totalSlides;
        onSlideChange?.(newSlide);
        return newSlide;
      });
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [resetTimer, autoRotate, autoRotateInterval, totalSlides, onSlideChange]);

  const changeSlide = useCallback(
    (newSlide: number) => {
      setCurrentSlide(newSlide);
      setResetTimer((prev) => prev + 1);
      onSlideChange?.(newSlide);
    },
    [onSlideChange]
  );

  // Touch swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > SWIPE_THRESHOLD;
    const isRightSwipe = distance < -SWIPE_THRESHOLD;

    if (isLeftSwipe) {
      const newSlide = currentSlide + 1;
      setCurrentSlide(newSlide);
      setResetTimer((prev) => prev + 1);
      if (newSlide >= totalSlides * 2)
        setTimeout(() => setCurrentSlide(totalSlides), INFINITE_CAROUSEL_RESET_DELAY);
    }
    if (isRightSwipe) {
      const newSlide = currentSlide - 1;
      setCurrentSlide(newSlide);
      setResetTimer((prev) => prev + 1);
      if (newSlide < totalSlides)
        setTimeout(() => setCurrentSlide(totalSlides * 2 - 1), INFINITE_CAROUSEL_RESET_DELAY);
    }

    setTouchStart(0);
    setTouchEnd(0);
  }, [touchStart, touchEnd, currentSlide, totalSlides]);

  const goToPrevSlide = useCallback(() => {
    const newSlide = currentSlide - 1;
    setCurrentSlide(newSlide);
    setResetTimer((prev) => prev + 1);
    if (newSlide < totalSlides)
      setTimeout(() => setCurrentSlide(totalSlides * 2 - 1), INFINITE_CAROUSEL_RESET_DELAY);
  }, [currentSlide, totalSlides]);

  const goToNextSlide = useCallback(() => {
    const newSlide = currentSlide + 1;
    setCurrentSlide(newSlide);
    setResetTimer((prev) => prev + 1);
    if (newSlide >= totalSlides * 2)
      setTimeout(() => setCurrentSlide(totalSlides), INFINITE_CAROUSEL_RESET_DELAY);
  }, [currentSlide, totalSlides]);

  return {
    currentSlide,
    changeSlide,
    goToPrevSlide,
    goToNextSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
