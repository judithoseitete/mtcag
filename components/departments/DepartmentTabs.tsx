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
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTabClick = (deptId: string, hasSubDepts: boolean) => {
    onTabChange(deptId);
    
    if (hasSubDepts) {
      // Toggle dropdown if department has subdepartments
      setOpenDropdown(openDropdown === deptId ? null : deptId);
    } else {
      // Close dropdown if no subdepartments
      setOpenDropdown(null);
    }
  };

  const handleSubTabClick = (subDeptId: string) => {
    onSubTabChange(subDeptId);
    setOpenDropdown(null);
  };

  return (
    <div className="border-b border-brand-gray/20 mb-8 md:mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto -mb-px custom-scrollbar">
          <div className="flex space-x-2 md:space-x-4" ref={dropdownRef}>
            {departments.map((dept) => {
              const hasSubDepts = dept.subDepartments.length > 0;
              const isActive = activeTab === dept.id;
              const isDropdownOpen = openDropdown === dept.id;

              return (
                <div key={dept.id} className="relative">
                  <button
                    onClick={() => handleTabClick(dept.id, hasSubDepts)}
                    className={`
                      px-4 md:px-6 py-3 md:py-4 font-semibold text-sm md:text-base whitespace-nowrap border-b-2 transition-colors flex items-center gap-1
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

                  {/* Dropdown Menu */}
                  {hasSubDepts && isDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg border-2 border-brand-gray/20 py-2 min-w-[220px] max-w-[300px] z-50"
                    >
                      {dept.subDepartments.map((subDept) => (
                        <button
                          key={subDept.id}
                          onClick={() => handleSubTabClick(subDept.id)}
                          className={`
                            w-full text-left px-4 py-3 text-sm font-medium transition-colors whitespace-normal
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
                </div>
              );
            })}
          </div>
        </div>
      </div>

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
    </div>
  );
}
