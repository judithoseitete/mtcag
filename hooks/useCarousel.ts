import { useState, useEffect, useCallback } from "react";
import { CAROUSEL_INTERVAL, SWIPE_THRESHOLD } from "@/constants/carousel";

interface UseCarouselOptions {
  totalSlides: number;
  autoRotate?: boolean;
  autoRotateInterval?: number;
  initialSlide?: number;
  onSlideChange?: (newSlide: number) => void;
}

export function useCarousel({
  totalSlides,
  autoRotate = true,
  autoRotateInterval = CAROUSEL_INTERVAL,
  initialSlide = 0,
  onSlideChange,
}: UseCarouselOptions) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [resetTimer, setResetTimer] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % totalSlides;
        onSlideChange?.(next);
        return next;
      });
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [resetTimer, autoRotate, autoRotateInterval, totalSlides, onSlideChange]);

  const changeSlide = useCallback((newSlide: number) => {
    setCurrentSlide(newSlide);
    setResetTimer((prev) => prev + 1);
    onSlideChange?.(newSlide);
  }, [onSlideChange]);

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

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      changeSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      changeSlide(currentSlide - 1);
    }

    setTouchStart(0);
    setTouchEnd(0);
  }, [touchStart, touchEnd, currentSlide, totalSlides, changeSlide]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlide > 0) {
      changeSlide(currentSlide - 1);
    }
  }, [currentSlide, changeSlide]);

  const goToNextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      changeSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, changeSlide]);

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
