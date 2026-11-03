"use client";

import { useState } from "react";
import DepartmentTabs from "@/components/departments/DepartmentTabs";
import ExecutivesGrid from "@/components/departments/ExecutivesGrid";
import Footer from "@/components/layout/Footer";
import { departments } from "@/constants/departments";
import { Clock, MapPin } from "lucide-react";

// Flatten departments and subdepartments into a single array for tabs
interface FlatDepartment {
  id: string;
  name: string;
  description: string;
  motto?: string;
  slogan?: string;
  meetingTime?: string;
  location?: string;
  executives?: {
    president: string;
    vicePresident: string;
    treasurer: string;
    organizer: string;
    secretary: string;
  };
}

const flattenDepartments = (): FlatDepartment[] => {
  const flattened: FlatDepartment[] = [];

  departments.forEach((dept) => {
    // Add main department
    flattened.push({
      id: dept.id,
      name: dept.name,
      description: dept.description,
      motto: dept.motto,
      executives: dept.executives,
    });

    // Add subdepartments
    dept.subDepartments.forEach((subDept) => {
      flattened.push({
        id: subDept.id,
        name: subDept.name,
        description: subDept.description || "",
        motto: subDept.motto,
        slogan: subDept.slogan,
        meetingTime: subDept.meetingTime,
        location: subDept.location,
        executives: subDept.executives,
      });
    });
  });

  return flattened;
};

export default function DepartmentsPage() {
  const allDepartments = flattenDepartments();
  const [activeTab, setActiveTab] = useState(allDepartments[0].id);

  const activeDepartment = allDepartments.find((dept) => dept.id === activeTab);

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
        departments={allDepartments.map((dept) => ({
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
            {/* Department Header */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray mb-4">
                {activeDepartment.name}
              </h2>
              <p className="text-xl text-brand-gray/80 mb-3">
                {activeDepartment.description}
              </p>
              <div className="flex flex-col md:flex-row gap-3 text-brand-gray/70">
                {activeDepartment.motto && (
                  <p className="text-lg italic">
                    &quot;{activeDepartment.motto}&quot;
                  </p>
                )}
                {activeDepartment.slogan && activeDepartment.motto && (
                  <span className="hidden md:inline">•</span>
                )}
                {activeDepartment.slogan && (
                  <p className="text-lg italic">
                    &quot;{activeDepartment.slogan}&quot;
                  </p>
                )}
              </div>
              {(activeDepartment.meetingTime || activeDepartment.location) && (
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  {activeDepartment.meetingTime && (
                    <div className="flex items-center gap-2 text-brand-gray/70">
                      <Clock className="w-5 h-5" />
                      <span>{activeDepartment.meetingTime}</span>
                    </div>
                  )}
                  {activeDepartment.location && (
                    <div className="flex items-center gap-2 text-brand-gray/70">
                      <MapPin className="w-5 h-5" />
                      <span>{activeDepartment.location}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Department Executives */}
            {activeDepartment.executives && (
              <ExecutivesGrid executives={activeDepartment.executives} />
            )}
          </div>
        </section>
      )}

      <Footer bgColor="white" cardVariant="dark" />
    </main>
  );
}

