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
    <div className="py-8 lg:py-12 bg-brand-neutral/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile & Tablet Dropdown */}
        <div className="lg:hidden">
          <select
            value={activeTab}
            onChange={(e) => onTabChange(e.target.value)}
            className="w-full px-4 py-3 text-base font-semibold bg-white border-2 border-brand-gray/20 rounded-lg text-brand-gray focus:outline-none focus:border-brand-gray"
          >
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Pills (large screens only) */}
        <div className="hidden lg:flex flex-wrap gap-3 justify-center">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => onTabChange(dept.id)}
              className={`
                px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200
                ${
                  activeTab === dept.id
                    ? "bg-brand-gray text-white shadow-md"
                    : "bg-white text-brand-gray hover:bg-brand-gray/10 hover:shadow-sm"
                }
              `}
            >
              {dept.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
