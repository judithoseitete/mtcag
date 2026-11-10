"use client";

import { useState, useEffect } from "react";
import DepartmentTabs from "@/components/departments/DepartmentTabs";
import ExecutivesGrid from "@/components/departments/ExecutivesGrid";
import Footer from "@/components/layout/Footer";
import { departments } from "@/constants/departments";
import { getDepartmentHeroText } from "@/constants/departmentsHeroText";
import { capitalizeHolyNames } from "@/utils/capitalizeHolyNames";
import { Clock, MapPin } from "lucide-react";

export default function DepartmentsPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(departments[0].id);
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);

  const activeDepartment = departments.find((dept) => dept.id === activeTab);

  // If a subtab is active, show the subdepartment, otherwise show main department
  const activeContent = activeSubTab
    ? activeDepartment?.subDepartments.find((sub) => sub.id === activeSubTab)
    : activeDepartment;

  // Load active tab from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      // Check if it's a subdepartment
      const [deptId, subDeptId] = hash.split(".");
      const dept = departments.find((d) => d.id === deptId);
      if (dept) {
        setActiveTab(deptId);
        if (subDeptId) {
          const subDept = dept.subDepartments.find((s) => s.id === subDeptId);
          if (subDept) {
            setActiveSubTab(subDeptId);
          }
        }
      }
    }
    setMounted(true);
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setActiveSubTab(null);
    window.history.replaceState(null, "", `#${tabId}`);
  };

  const handleSubTabChange = (subTabId: string | null) => {
    setActiveSubTab(subTabId);
    if (subTabId) {
      window.history.replaceState(null, "", `#${activeTab}.${subTabId}`);
    } else {
      window.history.replaceState(null, "", `#${activeTab}`);
    }
  };

  // Get hero text
  const heroText = activeContent
    ? getDepartmentHeroText(activeContent.name)
    : "serving with purpose.";

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-blue min-h-[30vh] py-8 md:py-12 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`font-bold text-white ${
              mounted && heroText.split(" ").length >= 7
                ? "text-3xl md:text-4xl lg:text-5xl"
                : "text-4xl md:text-5xl lg:text-6xl"
            }`}
            suppressHydrationWarning
            style={{ textTransform: "lowercase" }}
            dangerouslySetInnerHTML={{
              __html: mounted ? capitalizeHolyNames(heroText) : "",
            }}
          />
        </div>
      </section>

      {/* Department Tabs */}
      {mounted && (
        <DepartmentTabs
          departments={departments}
          activeTab={activeTab}
          activeSubTab={activeSubTab}
          onTabChange={handleTabChange}
          onSubTabChange={handleSubTabChange}
        />
      )}

      {/* Department Content */}
      {mounted && activeContent && (
        <section className="pt-4 pb-16 md:pt-16 md:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Department Header */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                {activeContent.name}
              </h2>
              {("meetingTime" in activeContent ||
                "location" in activeContent) && (
                <div className="flex flex-col md:flex-row gap-4">
                  {"meetingTime" in activeContent &&
                    activeContent.meetingTime && (
                      <div className="flex items-center gap-2 text-brand-blue/70">
                        <Clock className="w-5 h-5" aria-hidden="true" />
                        <span>{activeContent.meetingTime}</span>
                      </div>
                    )}
                  {"location" in activeContent && activeContent.location && (
                    <div className="flex items-center gap-2 text-brand-blue/70">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                      <span>{activeContent.location}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Department Executives */}
            {activeContent.executives && (
              <ExecutivesGrid executives={activeContent.executives} />
            )}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
