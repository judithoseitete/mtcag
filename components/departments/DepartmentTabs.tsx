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
    if (hasSubDepts) {
      // For departments with subdepartments, just open the dropdown
      // Don't change the active tab unless it's already selected
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
      // For departments without subdepartments, change the tab immediately
      onTabChange(deptId);
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
        className="sticky top-0 z-40 bg-white border-b-2 border-brand-blue/20"
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
                          ? "border-brand-blue text-brand-blue"
                          : "border-transparent text-brand-blue/60 hover:text-brand-blue hover:border-brand-blue/30"
                      }
                    `}
                  >
                    {dept.name}
                    {hasSubDepts && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
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
          className="dropdown-container fixed bg-white shadow-2xl rounded-lg border-2 border-brand-blue/30 py-2 min-w-[240px] z-[45]"
          style={{
            top: `${dropdownPosition.top + 2}px`,
            left: `${dropdownPosition.left}px`,
          }}
        >
          {/* Main Department Option - Only show if not Missions & Music */}
          {activeDropdownDept.id !== "missions" && (
            <button
              onClick={() => {
                onTabChange(activeDropdownDept.id);
                onSubTabChange(null);
                setOpenDropdown(null);
              }}
              className={`
                w-full text-left px-5 py-3 text-sm font-semibold transition-colors block
                ${
                  activeTab === activeDropdownDept.id && activeSubTab === null
                    ? "bg-brand-blue text-white"
                    : "text-brand-neutral-dark hover:bg-brand-neutral"
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
              onClick={() => {
                onTabChange(activeDropdownDept.id);
                handleSubTabClick(subDept.id);
              }}
              className={`
                w-full text-left px-5 py-3 text-sm font-semibold transition-colors block
                ${
                  activeTab === activeDropdownDept.id &&
                  activeSubTab === subDept.id
                    ? "bg-brand-blue text-white"
                    : "text-brand-neutral-dark hover:bg-brand-neutral"
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
          background: var(--brand-neutral);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--brand-blue);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--brand-blue);
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: var(--brand-blue) var(--brand-neutral);
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
