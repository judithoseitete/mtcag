"use client";

interface DepartmentTabsProps {
  departments: { id: string; name: string }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function DepartmentTabs({
  departments,
  activeTab,
  onTabChange,
}: DepartmentTabsProps) {
  return (
    <div className="border-b border-brand-gray/20 mb-8 md:mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto scrollbar-hide -mb-px">
          <div className="flex space-x-2 md:space-x-4">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => onTabChange(dept.id)}
                className={`
                  px-4 md:px-6 py-3 md:py-4 font-semibold text-sm md:text-base whitespace-nowrap border-b-2 transition-colors
                  ${
                    activeTab === dept.id
                      ? "border-brand-gray text-brand-gray"
                      : "border-transparent text-brand-gray/60 hover:text-brand-gray hover:border-brand-gray/30"
                  }
                `}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
