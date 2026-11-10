"use client";

type AboutSection = "who-we-are" | "our-story" | "beliefs" | "leadership";

interface AboutTabsProps {
  activeTab: AboutSection;
  onTabChange: (tab: AboutSection) => void;
}

export default function AboutTabs({ activeTab, onTabChange }: AboutTabsProps) {
  const tabs: { id: AboutSection; label: string }[] = [
    { id: "who-we-are", label: "Who We Are" },
    { id: "our-story", label: "Our Story" },
    { id: "beliefs", label: "Our Beliefs" },
    { id: "leadership", label: "Leadership" },
  ];

  return (
    <>
      <div className="sticky top-16 md:top-20 z-40 bg-white border-b-2 border-brand-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto -mb-px custom-scrollbar">
            <div className="flex space-x-2 md:space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`
                    px-4 md:px-6 py-3 md:py-4 font-semibold text-base md:text-lg whitespace-nowrap border-b-4 transition-colors
                    ${
                      activeTab === tab.id
                        ? "border-brand-blue text-brand-blue"
                        : "border-transparent text-brand-blue/60 hover:text-brand-blue hover:border-brand-blue/30"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar on all screen sizes */
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .custom-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </>
  );
}
