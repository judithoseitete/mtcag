/**
 * Event interface for church events
 * Supports both legacy datetime format and detailed date/time fields
 */
export interface Event {
  /** Unique identifier for the event */
  id: number;

  /** Event title */
  title: string;

  /** Event description */
  description: string;

  /** Legacy datetime field for backward compatibility */
  datetime?: string;

  /** Event date (e.g., "December 25, 2024") */
  date?: string;

  /** Event time (e.g., "10:00 AM - 12:00 PM") */
  time?: string;

  /** Event location/venue */
  location?: string;

  /** Event category (e.g., "Worship", "Community", "Youth") */
  category?: string;

  /** URL to event image */
  imageUrl?: string;
}

export interface Executives {
  president: string;
  vicePresident: string;
  treasurer: string;
  organizer: string;
  secretary: string;
}

/**
 * Button variant types
 */
export type ButtonVariant = "primary" | "secondary" | "outline";

/**
 * Base component props interface
 * Provides common props for all components
 */
export interface BaseComponentProps {
  /** Optional CSS class name for styling */
  className?: string;
  /** Child elements to render */
  children?: React.ReactNode;
}

/**
 * EventCard variant types
 * - carousel: Simple card for carousel display
 * - detailed: Full card with image, icons, and CTA
 */
export type EventCardVariant = "carousel" | "detailed";

/**
 * EventCard component props interface
 */
export interface EventCardProps {
  /** Event title */
  title: string;
  /** Event description */
  description: string;

  /** Event date (e.g., "December 25, 2024") */
  date?: string;
  /** Event time (e.g., "10:00 AM - 12:00 PM") */
  time?: string;
  /** Event location/venue */
  location?: string;
  /** Event category (e.g., "Worship", "Community", "Youth") */
  category?: string;
  /** URL to event image */
  imageUrl?: string;

  /** Legacy datetime field for backward compatibility */
  datetime?: string;

  /** Display variant - defaults to "detailed" */
  variant?: EventCardVariant;

  /** Callback handler when view details button is clicked */
  onViewDetails?: () => void;
}
