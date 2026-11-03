"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Department } from "@/constants/departments";

interface DepartmentTabsProps {
  departments: Department[];
  activeTab: string;
  activeSubTab: string | null;
  onTabChange: (tabId: string) => void;
  onSubTabChange: (subTabId: string | null) => void;
}

export default function DepartmentTabs({
  departments,
  activeTab,
  activeSubTab,
  onTabChange,
  onSubTabChange,
}: DepartmentTabsProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement;
      if (!clickedElement.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTabClick = (deptId: string, hasSubDepts: boolean) => {
    onTabChange(deptId);
    
    if (hasSubDepts) {
      const button = buttonRefs.current[deptId];
      if (button) {
        const rect = button.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
      setOpenDropdown(openDropdown === deptId ? null : deptId);
    } else {
      setOpenDropdown(null);
    }
  };

  const handleSubTabClick = (subDeptId: string) => {
    onSubTabChange(subDeptId);
    setOpenDropdown(null);
  };

  const activeDropdownDept = departments.find(d => d.id === openDropdown);

  return (
    <>
      <div className="border-b border-brand-gray/20 mb-8 md:mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto -mb-px custom-scrollbar">
            <div className="flex space-x-2 md:space-x-4">
              {departments.map((dept) => {
                const hasSubDepts = dept.subDepartments.length > 0;
                const isActive = activeTab === dept.id;
                const isDropdownOpen = openDropdown === dept.id;

                return (
                  <button
                    key={dept.id}
                    ref={(el) => (buttonRefs.current[dept.id] = el)}
                    onClick={() => handleTabClick(dept.id, hasSubDepts)}
                    className={`
                      dropdown-container px-4 md:px-6 py-3 md:py-4 font-semibold text-sm md:text-base whitespace-nowrap border-b-2 transition-colors flex items-center gap-1
                      ${
                        isActive
                          ? "border-brand-gray text-brand-gray"
                          : "border-transparent text-brand-gray/60 hover:text-brand-gray hover:border-brand-gray/30"
                      }
                    `}
                  >
                    {dept.name}
                    {hasSubDepts && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Position Dropdown - Rendered at document level */}
      {openDropdown && activeDropdownDept && (
        <div
          className="dropdown-container fixed bg-white shadow-2xl rounded-lg border-2 border-brand-gray/30 py-2 min-w-[240px] z-[9999]"
          style={{
            top: `${dropdownPosition.top + 8}px`,
            left: `${dropdownPosition.left}px`,
          }}
        >
          {activeDropdownDept.subDepartments.map((subDept) => (
            <button
              key={subDept.id}
              onClick={() => handleSubTabClick(subDept.id)}
              className={`
                w-full text-left px-5 py-3 text-sm font-medium transition-colors block
                ${
                  activeSubTab === subDept.id
                    ? "bg-brand-gray text-white"
                    : "text-brand-gray hover:bg-brand-neutral"
                }
              `}
            >
              {subDept.name}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        /* Mobile and tablet: styled scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f5f4f2;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #353533;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2a2a28;
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #353533 #f5f4f2;
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
