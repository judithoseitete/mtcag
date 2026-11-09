interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category?: string;
  imageUrl?: string;
}

export default function EventCard({
  title,
  date,
  time,
  location,
  description,
  category,
  imageUrl,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="h-48 bg-brand-neutral relative">
        {imageUrl && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        )}
        {category && (
          <div className="absolute top-4 left-4 bg-brand-blue-primary text-white px-3 py-1 rounded-lg text-sm font-semibold">
            {category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-brand-blue-primary mb-3">
          {title}
        </h3>
        <p className="text-brand-blue-primary/70 mb-4 line-clamp-2">{description}</p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-brand-blue-primary/80">
            <svg
              className="w-5 h-5 flex-shrink-0"
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
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-brand-blue-primary/80">
            <svg
              className="w-5 h-5 flex-shrink-0"
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
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center gap-2 text-brand-blue-primary/80">
            <svg
              className="w-5 h-5 flex-shrink-0"
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
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full bg-brand-blue-primary text-white py-3 rounded-lg font-semibold hover:bg-brand-blue-primary/90 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}
