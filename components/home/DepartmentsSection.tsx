export default function DepartmentsSection() {
  const departments = [
    { name: "Men" },
    { name: "Women" },
    { name: "Youth" },
    { name: "Sunday School" },
    { name: "Children" },
    { name: "Missions" },
  ];

  return (
    <section className="bg-white min-h-[80vh] flex items-center py-8 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-brand-neutral rounded-3xl px-8 py-16 md:px-16 md:py-20 lg:px-24 lg:py-24">
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
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {department.name}
                  </h3>
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
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {department.name}
                  </h3>
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
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {department.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}