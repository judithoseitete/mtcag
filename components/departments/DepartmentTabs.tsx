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
  const tabsRef = useRef<HTMLDivElement>(null);

  // Update dropdown position on scroll
  useEffect(() => {
    const updateDropdownPosition = () => {
      if (openDropdown && buttonRefs.current[openDropdown]) {
        const button = buttonRefs.current[openDropdown];
        if (button) {
          const rect = button.getBoundingClientRect();
          setDropdownPosition({
            top: rect.bottom,
            left: rect.left,
          });
        }
      }
    };

    window.addEventListener("scroll", updateDropdownPosition, true);
    return () =>
      window.removeEventListener("scroll", updateDropdownPosition, true);
  }, [openDropdown]);

  // Close dropdown when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement;
      if (!clickedElement.closest(".dropdown-container")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTabClick = (deptId: string, hasSubDepts: boolean) => {
    onTabChange(deptId);

    if (hasSubDepts) {
      // For Missions & Music, automatically select first subdepartment
      if (deptId === "missions") {
        const missionsDept = departments.find((d) => d.id === "missions");
        if (missionsDept && missionsDept.subDepartments.length > 0) {
          onSubTabChange(missionsDept.subDepartments[0].id);
        }
      }

      const button = buttonRefs.current[deptId];
      if (button) {
        const rect = button.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom,
          left: rect.left,
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

  const activeDropdownDept = departments.find((d) => d.id === openDropdown);

  return (
    <>
      <div
        ref={tabsRef}
        className="sticky top-0 z-40 bg-white border-b border-brand-blue-primary/20 mb-8 md:mb-12"
        style={{ top: "80px" }}
      >
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
                    ref={(el) => {
                      buttonRefs.current[dept.id] = el;
                    }}
                    onClick={() => handleTabClick(dept.id, hasSubDepts)}
                    className={`
                      dropdown-container px-4 md:px-6 py-3 md:py-4 font-semibold text-sm md:text-base whitespace-nowrap border-b-2 transition-colors flex items-center gap-1
                      ${
                        isActive
                          ? "border-brand-blue-primary text-brand-blue-primary"
                          : "border-transparent text-brand-blue-primary/60 hover:text-brand-blue-primary hover:border-brand-blue-primary/30"
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
          className="dropdown-container fixed bg-white shadow-2xl rounded-lg border-2 border-brand-blue-primary/30 py-2 min-w-[240px] z-50"
          style={{
            top: `${dropdownPosition.top + 8}px`,
            left: `${dropdownPosition.left}px`,
          }}
        >
          {/* Main Department Option - Only show if not Missions & Music */}
          {activeDropdownDept.id !== "missions" && (
            <button
              onClick={() => {
                onSubTabChange(null);
                setOpenDropdown(null);
              }}
              className={`
                w-full text-left px-5 py-3 text-sm font-medium transition-colors block
                ${
                  activeSubTab === null
                    ? "bg-brand-blue-primary text-white"
                    : "text-brand-gray hover:bg-brand-blue-primary/10"
                }
              `}
            >
              {activeDropdownDept.name}
            </button>
          )}

          {/* Subdepartments */}
          {activeDropdownDept.subDepartments.map((subDept) => (
            <button
              key={subDept.id}
              onClick={() => handleSubTabClick(subDept.id)}
              className={`
                w-full text-left px-5 py-3 text-sm font-medium transition-colors block
                ${
                  activeSubTab === subDept.id
                    ? "bg-brand-blue-primary text-white"
                    : "text-brand-gray hover:bg-brand-blue-primary/10"
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
