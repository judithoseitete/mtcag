"use client";

import { useState } from "react";
import DepartmentTabs from "@/components/departments/DepartmentTabs";
import ExecutivesGrid from "@/components/departments/ExecutivesGrid";
import Footer from "@/components/layout/Footer";
import { departments } from "@/constants/departments";
import { Clock, MapPin } from "lucide-react";

export default function DepartmentsPage() {
  const [activeTab, setActiveTab] = useState(departments[0].id);

  const activeDepartment = departments.find((dept) => dept.id === activeTab);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-gray py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Departments
          </h1>
        </div>
      </section>

      {/* Department Tabs */}
      <DepartmentTabs
        departments={departments.map((dept) => ({
          id: dept.id,
          name: dept.name,
        }))}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Department Content */}
      {activeDepartment && (
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Department Section */}
            <div className="mb-16">
              {/* Department Header */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray mb-4">
                  {activeDepartment.name}
                </h2>
                <p className="text-xl text-brand-gray/80 mb-3">
                  {activeDepartment.description}
                </p>
                {activeDepartment.motto && (
                  <p className="text-lg italic text-brand-gray/70">
                    &quot;{activeDepartment.motto}&quot;
                  </p>
                )}
              </div>

              {/* Main Department Executives */}
              <ExecutivesGrid executives={activeDepartment.executives} />
            </div>

            {/* Sub-Departments */}
            {activeDepartment.subDepartments.length > 0 && (
              <div className="space-y-16">
                {activeDepartment.subDepartments.map((subDept) => (
                  <div
                    key={subDept.id}
                    className="border-t-2 border-brand-neutral pt-12"
                  >
                    {/* Sub-Department Header */}
                    <div className="mb-8">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-gray mb-3">
                        {subDept.name}
                      </h3>
                      {subDept.description && (
                        <p className="text-lg text-brand-gray/80 mb-3">
                          {subDept.description}
                        </p>
                      )}
                      <div className="flex flex-col md:flex-row gap-3 text-brand-gray/70">
                        {subDept.motto && (
                          <p className="italic">&quot;{subDept.motto}&quot;</p>
                        )}
                        {subDept.slogan && subDept.motto && (
                          <span className="hidden md:inline">•</span>
                        )}
                        {subDept.slogan && (
                          <p className="italic">&quot;{subDept.slogan}&quot;</p>
                        )}
                      </div>
                      {(subDept.meetingTime || subDept.location) && (
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                          {subDept.meetingTime && (
                            <div className="flex items-center gap-2 text-brand-gray/70">
                              <Clock className="w-5 h-5" />
                              <span>{subDept.meetingTime}</span>
                            </div>
                          )}
                          {subDept.location && (
                            <div className="flex items-center gap-2 text-brand-gray/70">
                              <MapPin className="w-5 h-5" />
                              <span>{subDept.location}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Sub-Department Executives */}
                    {subDept.executives && (
                      <ExecutivesGrid
                        executives={subDept.executives}
                        size="small"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
