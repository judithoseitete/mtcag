interface FeaturedEventHeroProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
}

export default function FeaturedEventHero({
  title,
  date,
  time,
  location,
  description,
  imageUrl,
}: FeaturedEventHeroProps) {
  return (
    <section className="relative bg-brand-gray min-h-[60vh] md:min-h-[70vh] flex items-center">
      {/* Background Image */}
      {imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      )}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-brand-neutral/90 text-lg md:text-xl mb-4 font-semibold">
            Featured Event
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-brand-neutral/90 mb-8">
            {description}
          </p>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-brand-neutral"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-white text-lg">{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-brand-neutral"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-white text-lg">{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-brand-neutral"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-white text-lg">{location}</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-brand-neutral text-brand-gray px-8 py-4 rounded-lg text-lg font-bold hover:bg-brand-neutral/90 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
