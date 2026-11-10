"use client";

import { EventCardProps } from "@/types";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export default function EventCard({
  title,
  description,
  date,
  time,
  location,
  category,
  imageUrl,
  datetime,
  variant = "detailed",
  onViewDetails,
}: EventCardProps) {
  // Carousel variant: simple card for carousel display
  if (variant === "carousel") {
    return (
      <div className="min-w-[70%] bg-white border-4 border-brand-blue/20 rounded-lg p-8 md:p-12 h-[400px] md:h-[500px] flex flex-col justify-center shadow-xl">
        <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">
          {title}
        </h3>
        <p className="text-lg md:text-xl text-brand-blue/80 mb-4">
          {description}
        </p>
        {datetime && (
          <p className="text-brand-red font-semibold text-lg">{datetime}</p>
        )}
      </div>
    );
  }

  // Detailed variant: full card with image, icons, and CTA
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="h-48 bg-brand-neutral relative">
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={`${title} event image`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="h-48 bg-brand-neutral flex items-center justify-center">
              <Calendar
                className="w-12 h-12 text-brand-neutral-darkest"
                aria-hidden="true"
              />
            </div>
          </>
        ) : (
          <div className="h-48 bg-brand-neutral flex items-center justify-center">
            <Calendar
              className="w-12 h-12 text-brand-neutral-darkest"
              aria-hidden="true"
            />
          </div>
        )}
        {category && (
          <div className="absolute top-4 left-4 bg-brand-blue text-white px-3 py-1 rounded-lg text-sm font-semibold z-10">
            {category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-3">
          {title}
        </h3>
        <p className="text-brand-blue/70 mb-4 line-clamp-2">{description}</p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-brand-blue/80">
            <Calendar className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-brand-blue/80">
            <Clock className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center gap-2 text-brand-blue/80">
            <MapPin className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onViewDetails}
          className="w-full bg-brand-blue text-white py-3 rounded-lg font-semibold hover:bg-brand-blue/90 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
