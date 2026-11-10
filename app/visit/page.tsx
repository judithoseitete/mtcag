"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/layout/Footer";
import VisitTabs from "@/components/visit/VisitTabs";
import ScheduleItem from "@/components/visit/ScheduleItem";
import { weeklySchedule } from "@/constants/weeklySchedule";
import { VISIT_HERO_TEXT } from "@/constants/visitHeroText";
import { capitalizeHolyNames } from "@/utils/capitalizeHolyNames";

type VisitSection = "weekly-schedule" | "location" | "what-to-expect";

export default function VisitPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<VisitSection>("weekly-schedule");

  // Load active tab from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as VisitSection;
    const validTabs: VisitSection[] = [
      "weekly-schedule",
      "location",
      "what-to-expect",
    ];
    if (hash && validTabs.includes(hash)) {
      setActiveTab(hash);
    }
    setMounted(true);
  }, []);

  // Update URL hash when tab changes
  const handleTabChange = (tab: VisitSection) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
  };

  return (
    <>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-brand-blue min-h-[30vh] py-8 md:py-12 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className={`font-bold text-white ${
                mounted && VISIT_HERO_TEXT[activeTab].split(" ").length >= 7
                  ? "text-3xl md:text-4xl lg:text-5xl"
                  : "text-4xl md:text-5xl lg:text-6xl"
              }`}
              suppressHydrationWarning
              style={{ textTransform: "lowercase" }}
              dangerouslySetInnerHTML={{
                __html: mounted
                  ? capitalizeHolyNames(VISIT_HERO_TEXT[activeTab])
                  : "",
              }}
            />
          </div>
        </section>

        {/* Tabs */}
        {mounted && (
          <VisitTabs activeTab={activeTab} onTabChange={handleTabChange} />
        )}

        {/* Weekly Schedule */}
        {mounted && activeTab === "weekly-schedule" && (
          <section className="pt-4 pb-16 md:pt-16 md:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-brand-blue rounded-3xl px-4 py-8 md:px-16 md:py-20 lg:px-24 lg:py-24">
                <div className="space-y-0">
                  {weeklySchedule.map((item) => (
                    <ScheduleItem
                      key={item.day}
                      day={item.day}
                      events={item.events}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Location */}
        {mounted && activeTab === "location" && (
          <section className="pt-4 pb-16 md:pt-16 md:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl overflow-hidden mb-6 h-[400px] md:h-[500px] lg:h-[600px] mx-4 md:mx-8 lg:mx-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58898.80328919093!2d-0.3512620925903552!3d5.6103908666160995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf98f6e7bfbb55%3A0x44c6631651d9dcc6!2sMore%20Than%20Conquerors%20Assemblies%20Of%20God!5e1!3m2!1sen!2sgh!4v1793708163315!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mx-4 md:mx-8 lg:mx-12">
                <a
                  href="https://www.google.com/maps/place/More+Than+Conquerors+Assemblies+Of+God/@5.6103909,-0.3512621,15z/data=!4m6!3m5!1s0xfdf98f6e7bfbb55:0x44c6631651d9dcc6!8m2!3d5.6103909!4d-0.3512621!16s%2Fg%2F11vt5w1h9s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-blue text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-brand-blue/90 transition-colors text-center"
                >
                  Open in Google Maps
                </a>
                <a
                  href="http://maps.apple.com/?q=More+Than+Conquerors+AG&ll=5.6103909,-0.3512621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-blue text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-brand-blue/90 transition-colors text-center"
                >
                  Open in Apple Maps
                </a>
              </div>
            </div>
          </section>
        )}

        {/* What to Expect */}
        {mounted && activeTab === "what-to-expect" && (
          <section className="pt-4 pb-16 md:pt-16 md:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-brand-blue rounded-3xl p-8 md:p-12">
                <div className="space-y-4">
                  {[
                    "Opening prayer",
                    "Praise and worship",
                    "First offering",
                    "Tithes",
                    "Announcements",
                    "Music ministration",
                    "Sermon",
                    "Project offering",
                    "Sunday school session",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-colors flex items-center gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center">
                        <span className="text-brand-blue font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-lg md:text-xl text-white font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
