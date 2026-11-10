"use client";

import { useState } from "react";
import DepartmentTabs from "@/components/departments/DepartmentTabs";
import ExecutivesGrid from "@/components/departments/ExecutivesGrid";
import Footer from "@/components/layout/Footer";
import { departments } from "@/constants/departments";
import { Clock, MapPin } from "lucide-react";

export default function DepartmentsPage() {
  const [activeTab, setActiveTab] = useState(departments[0].id);
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);

  const activeDepartment = departments.find((dept) => dept.id === activeTab);

  // If a subtab is active, show the subdepartment, otherwise show main department
  const activeContent = activeSubTab
    ? activeDepartment?.subDepartments.find((sub) => sub.id === activeSubTab)
    : activeDepartment;

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setActiveSubTab(null); // Reset subtab when changing main tab
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-blue py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Departments
          </h1>
        </div>
      </section>

      {/* Department Tabs */}
      <DepartmentTabs
        departments={departments}
        activeTab={activeTab}
        activeSubTab={activeSubTab}
        onTabChange={handleTabChange}
        onSubTabChange={setActiveSubTab}
      />

      {/* Department Content */}
      {activeContent && (
        <section className="py-4 md:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Department Header */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
                {activeContent.name}
              </h2>
              <p className="text-xl text-brand-blue/80 mb-3">
                {activeContent.description}
              </p>
              <div className="flex flex-col md:flex-row gap-3 text-brand-blue/70">
                {activeContent.motto && (
                  <p className="text-lg italic">
                    &quot;{activeContent.motto}&quot;
                  </p>
                )}
                {"slogan" in activeContent &&
                  activeContent.slogan &&
                  activeContent.motto && (
                    <span className="hidden md:inline">•</span>
                  )}
                {"slogan" in activeContent && activeContent.slogan && (
                  <p className="text-lg italic">
                    &quot;{activeContent.slogan}&quot;
                  </p>
                )}
              </div>
              {("meetingTime" in activeContent ||
                "location" in activeContent) && (
                <div className="flex flex-col md:flex-row gap-4 mt-4">
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
              <div className="min-h-screen flex items-center">
                <div className="w-full">
                  <ExecutivesGrid executives={activeContent.executives} />
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <Footer bgColor="white" cardVariant="dark" />
    </main>
  );
}
