// Carousel configuration
export const CAROUSEL_INTERVAL = 15000; // 15 seconds
export const SWIPE_THRESHOLD = 50; // pixels

// Animation durations
export const CAROUSEL_TRANSITION_DURATION = 700; // ms
export const INFINITE_CAROUSEL_RESET_DELAY = 700; // ms

// Carousel configuration presets
export const CAROUSEL_CONFIG = {
  HERO: {
    totalSlides: 2,
    autoRotate: true,
    interval: CAROUSEL_INTERVAL,
  },
  EVENTS: {
    totalSlides: 4,
    autoRotate: true,
    interval: CAROUSEL_INTERVAL,
  },
} as const;
