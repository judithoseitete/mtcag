import { Heart, Building2, Globe } from "lucide-react";

export default function GivingSection() {
  const givingOptions = [
    {
      title: "Tithes",
      description: "Honor God with the first tenth of your income",
      icon: Heart,
    },
    {
      title: "Offerings",
      description: "Give cheerfully to bless others",
      icon: Heart,
    },
    {
      title: "Building Fund",
      description: "Help us expand our facility to reach more souls",
      icon: Building2,
    },
    {
      title: "Missions",
      description: "Support global outreach and evangelism efforts",
      icon: Globe,
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
            Your generosity fuels the mission and ministry of More Than
            Conquerors AG
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {givingOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <div
                key={option.title}
                className="bg-white rounded-lg p-10 md:p-12 min-h-[200px] text-center hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
              >
                <IconComponent className="w-12 h-12 text-brand-red mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-brand-gray mb-3">
                  {option.title}
                </h3>
                <p className="text-lg text-brand-gray/70">
                  {option.description}
                </p>
              </div>
            );
          })}
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
