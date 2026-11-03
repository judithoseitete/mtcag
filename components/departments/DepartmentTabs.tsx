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
  const activeDepartment = departments.find((dept) => dept.id === activeTab);

  return (
    <div className="border-b border-brand-gray/20 mb-8 md:mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Dropdown */}
        <div className="md:hidden py-4">
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

        {/* Desktop Tabs */}
        <div className="hidden md:flex flex-wrap -mb-px">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => onTabChange(dept.id)}
              className={`
                px-6 py-4 font-semibold text-base whitespace-nowrap border-b-2 transition-colors
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
  );
}
