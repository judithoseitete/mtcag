interface VisitTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function VisitTabs({ activeTab, onTabChange }: VisitTabsProps) {
  const tabs = [
    { id: "weekly-schedule", label: "Weekly Schedule" },
    { id: "location", label: "Location" },
    { id: "what-to-expect", label: "What to Expect" },
  ];

  return (
    <div className="sticky top-16 md:top-20 z-40 bg-white border-b-2 border-brand-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <div className="flex space-x-2 md:space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`
                  px-4 md:px-6 py-3 md:py-4 font-semibold text-base md:text-lg transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "text-brand-blue border-b-4 border-brand-blue"
                      : "text-brand-blue/60 border-b-2 border-transparent hover:text-brand-blue hover:border-brand-blue/30"
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
  );
}
