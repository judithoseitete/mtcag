export default function DepartmentsSection() {
  const departments = [
    { name: "Men", description: "Building strong men of faith" },
    { name: "Women", description: "Empowering women who worship the Lord" },
    { name: "Youth", description: "We are Christ's Ambassadors" },
    { name: "Sunday School", description: "Young men of destiny" },
    { name: "Children", description: "Nurturing young hearts" },
    { name: "Missions", description: "Growing together in faith" },
  ];

  return (
    <section className="bg-brand-neutral min-h-screen flex items-center py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-32 w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray text-center mb-8 md:mb-12">
          Get involved
        </h2>

        <div className="space-y-6">
          {/* First row: 2 items side by side on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.slice(0, 2).map((department) => (
              <div
                key={department.name}
                className="bg-brand-gray rounded-lg p-10 md:p-12 min-h-[200px] md:min-h-[240px] text-center hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {department.name}
                </h3>
                <p className="text-lg text-white/80">
                  {department.description}
                </p>
              </div>
            ))}
          </div>

          {/* Second row: 3 items side by side on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments.slice(2, 5).map((department) => (
              <div
                key={department.name}
                className="bg-brand-gray rounded-lg p-10 md:p-12 min-h-[200px] md:min-h-[240px] text-center hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {department.name}
                </h3>
                <p className="text-lg text-white/80">
                  {department.description}
                </p>
              </div>
            ))}
          </div>

          {/* Third row: 1 item (full width) */}
          <div className="grid grid-cols-1 gap-6">
            {departments.slice(5, 6).map((department) => (
              <div
                key={department.name}
                className="bg-brand-gray rounded-lg p-10 md:p-12 min-h-[200px] md:min-h-[240px] text-center hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {department.name}
                </h3>
                <p className="text-lg text-white/80">
                  {department.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}