/**
 * Ministries Section Component
 * 
 * Displays the 6 ministry categories with responsive grid layout:
 * - Desktop: 2 columns, then 3 columns, then 1 column (2-3-1 pattern)
 * - Mobile: Single column (all stacked vertically)
 */

export default function MinistriesSection() {
  const ministries = [
    { name: "Men", description: "Building strong men of faith" },
    { name: "Women", description: "Empowering women in Christ" },
    { name: "Youth", description: "Guiding the next generation" },
    { name: "Pathfinders", description: "Discovering God's purpose" },
    { name: "Young Singles", description: "Growing together in faith" },
    { name: "Children", description: "Nurturing young hearts" },
  ];

  return (
    <section className="bg-brand-neutral h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray text-center mb-8 md:mb-12">
          Our Ministries
        </h2>

        <div className="space-y-6">
          {/* First row: 2 items side by side on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ministries.slice(0, 2).map((ministry) => (
              <div
                key={ministry.name}
                className="bg-white rounded-lg p-8 md:p-10 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-brand-gray mb-3">
                  {ministry.name}
                </h3>
                <p className="text-lg text-brand-gray/70">{ministry.description}</p>
              </div>
            ))}
          </div>

          {/* Second row: 3 items side by side on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ministries.slice(2, 5).map((ministry) => (
              <div
                key={ministry.name}
                className="bg-white rounded-lg p-8 md:p-10 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-brand-gray mb-3">
                  {ministry.name}
                </h3>
                <p className="text-lg text-brand-gray/70">{ministry.description}</p>
              </div>
            ))}
          </div>

          {/* Third row: 1 item (full width) */}
          <div className="grid grid-cols-1 gap-6">
            {ministries.slice(5, 6).map((ministry) => (
              <div
                key={ministry.name}
                className="bg-white rounded-lg p-8 md:p-10 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-brand-gray mb-3">
                  {ministry.name}
                </h3>
                <p className="text-lg text-brand-gray/70">{ministry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
