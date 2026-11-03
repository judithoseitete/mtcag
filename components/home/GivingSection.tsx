export default function GivingSection() {
  const givingOptions = [
    {
      title: "Tithes & Offerings",
      description: "Support the work of the ministry",
      icon: "??",
    },
    {
      title: "Building Fund",
      description: "Help us expand God's kingdom",
      icon: "???",
    },
    {
      title: "Missions",
      description: "Reach the world with the Gospel",
      icon: "??",
    },
  ];

  return (
    <section className="bg-brand-gray min-h-screen flex items-center py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-32 w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Give
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Your generosity fuels the mission and ministry of More Than Conquerors AG
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {givingOptions.map((option) => (
            <div
              key={option.title}
              className="bg-white rounded-lg p-10 md:p-12 min-h-[200px] text-center hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="text-5xl mb-4">{option.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-gray mb-3">
                {option.title}
              </h3>
              <p className="text-lg text-brand-gray/70">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-brand-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-red/90 transition-colors duration-300">
            Give Now
          </button>
          <p className="mt-6 text-white/60 text-sm">
            All donations are tax-deductible
          </p>
        </div>
      </div>
    </section>
  );
}