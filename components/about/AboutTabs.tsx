"use client";

type AboutSection = "story" | "beliefs" | "pastors" | "board" | "leaders";

interface AboutTabsProps {
  activeTab: AboutSection;
  onTabChange: (tab: AboutSection) => void;
}

export default function AboutTabs({ activeTab, onTabChange }: AboutTabsProps) {
  const tabs: { id: AboutSection; label: string }[] = [
    { id: "story", label: "Our Story" },
    { id: "beliefs", label: "What We Believe" },
    { id: "pastors", label: "Pastors" },
    { id: "board", label: "Board Chairs" },
    { id: "leaders", label: "Department Leaders" },
  ];

  return (
    <>
      <div
        className="sticky z-40 bg-white border-b border-brand-blue/20 mb-4 md:mb-6"
        style={{ top: "80px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto -mb-px custom-scrollbar">
            <div className="flex space-x-2 md:space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`
                    px-4 md:px-6 py-3 md:py-4 font-semibold text-sm md:text-base whitespace-nowrap border-b-2 transition-colors
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
        /* Mobile and tablet: styled scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f5f8fc;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #303181;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1a1f3a;
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #303181 #f5f8fc;
        }

        /* Desktop: hide scrollbar */
        @media (min-width: 1024px) {
          .custom-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .custom-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        }
      `}</style>
    </>
  );
}
