"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/layout/Footer";
import BeliefItem from "@/components/about/BeliefItem";
import AboutTabs from "@/components/about/AboutTabs";
import StoryCard from "@/components/about/StoryCard";
import OurStoryNav from "@/components/about/OurStoryNav";
import MtcAgSection from "@/components/about/MtcAgSection";
import LeadershipSection from "@/components/about/LeadershipSection";
import LeadershipNav from "@/components/about/LeadershipNav";
import LeadershipCard from "@/components/about/LeadershipCard";
import { beliefs } from "@/constants/beliefs";
import { whoWeAre, ourStory, leadership } from "@/constants/aboutContent";
import { HERO_TEXT } from "@/constants/aboutHeroText";
import { useScrollTracking } from "@/hooks/useScrollTracking";

type AboutSection = "who-we-are" | "our-story" | "beliefs" | "leadership";

const STORY_NAV_ITEMS = [
  { id: "ag-global", label: "AG Global" },
  { id: "ag-ghana", label: "AG Ghana" },
  { id: "mtc-ag", label: "MTC AG" },
];

const LEADERSHIP_NAV_ITEMS = [
  { id: "senior-pastor", label: "Senior Pastor" },
  { id: "senior-associate", label: "Senior Associate" },
  { id: "associate-pastors", label: "Associate Pastors" },
  { id: "board-members", label: "Board Members" },
  { id: "department-heads", label: "Department Heads" },
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<AboutSection>("who-we-are");

  // Load active tab from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as AboutSection;
    const validTabs: AboutSection[] = [
      "who-we-are",
      "our-story",
      "beliefs",
      "leadership",
    ];
    if (hash && validTabs.includes(hash)) {
      setActiveTab(hash);
    }
    setMounted(true);
  }, []);

  // Track scroll position for Our Story section
  const activeStorySection = useScrollTracking(
    ["ag-global", "ag-ghana", "mtc-ag"],
    activeTab === "our-story",
  );
  
  // Track scroll position for Leadership section
  const activeLeadershipSection = useScrollTracking(
    ["senior-pastor", "senior-associate", "associate-pastors", "board-members", "department-heads"],
    activeTab === "leadership",
  );

  // Update URL hash when tab changes
  const handleTabChange = (tab: AboutSection) => {
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white lowercase"
              suppressHydrationWarning
            >
              {mounted && HERO_TEXT[activeTab]}
            </h1>
          </div>
        </section>

        {/* Tabs */}
        {mounted && (
          <AboutTabs activeTab={activeTab} onTabChange={handleTabChange} />
        )}

        {/* Who We Are */}
        {mounted && activeTab === "who-we-are" && (
          <section className="pt-4 pb-16 md:pt-16 md:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-brand-blue rounded-3xl px-8 py-12 md:px-16 md:py-20 lg:px-24 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left column - Text content */}
                  <div className="flex flex-col justify-between h-full">
                    <div className="space-y-6 text-left">
                      {whoWeAre.content.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-xl md:text-2xl text-white/90"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="mt-12">
                      <p className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-3">
                        {whoWeAre.scripture.text}
                      </p>
                      <p className="text-xl md:text-2xl text-white/80">
                        {whoWeAre.scripture.reference}
                      </p>
                    </div>
                  </div>

                  {/* Right column - Two tilted images */}
                  <div className="flex flex-col items-center justify-center p-8">
                    {/* First image - tilted left, shifted left */}
                    <div className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-brand-neutral-dark rounded-lg transform -rotate-6 md:translate-x-6 lg:translate-x-8 shadow-lg"></div>

                    {/* Second image - tilted right, shifted right */}
                    <div className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-brand-neutral-dark rounded-lg transform rotate-6 md:translate-x-20 lg:translate-x-28 shadow-lg -mt-10 md:-mt-12 lg:-mt-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Our Story */}
        {mounted && activeTab === "our-story" && (
          <section className="pt-4 pb-16 md:pt-16 md:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex gap-4 lg:gap-6">
                <OurStoryNav
                  items={STORY_NAV_ITEMS}
                  activeSection={activeStorySection}
                />

                <div className="flex-1 space-y-16">
                  <StoryCard
                    id="ag-global"
                    title={ourStory.agGlobal.title}
                    content={ourStory.agGlobal.content}
                    link={ourStory.agGlobal.link}
                  />

                  <StoryCard
                    id="ag-ghana"
                    title={ourStory.agGhana.title}
                    content={ourStory.agGhana.content}
                    link={ourStory.agGhana.link}
                  />

                  <MtcAgSection
                    title={ourStory.mtcAg.title}
                    sections={ourStory.mtcAg.sections}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Beliefs Section */}
        {mounted && activeTab === "beliefs" && (
          <section className="pt-4 pb-16 md:pt-16 md:pb-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-brand-blue rounded-3xl px-4 py-8 md:px-16 md:py-20 lg:px-24 lg:py-24">
                <div className="space-y-0">
                  {beliefs.map((belief) => (
                    <BeliefItem
                      key={belief.number}
                      number={belief.number}
                      title={belief.title}
                      description={belief.description}
                      scripture={belief.scripture}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Leadership */}
        {mounted && activeTab === "leadership" && (
          <section className="pt-4 pb-16 md:pt-16 md:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex gap-4 lg:gap-6">
                <LeadershipNav
                  items={LEADERSHIP_NAV_ITEMS}
                  activeSection={activeLeadershipSection}
                />

                <div className="flex-1 space-y-16">
                  <LeadershipCard
                    id="senior-pastor"
                    title={leadership.seniorPastor.title}
                    people={[leadership.seniorPastor]}
                    columns="single"
                  />

                  <LeadershipCard
                    id="senior-associate"
                    title={leadership.seniorAssociate.title}
                    people={[leadership.seniorAssociate]}
                    columns="single"
                  />

                  <LeadershipCard
                    id="associate-pastors"
                    title="Associate Pastors"
                    people={leadership.associates}
                    columns="double"
                  />

                  <LeadershipCard
                    id="board-members"
                    title="Board Members"
                    people={leadership.board}
                    columns="grid"
                  />

                  <LeadershipCard
                    id="department-heads"
                    title="Department Heads"
                    people={leadership.departmentHeads}
                    columns="double"
                  />
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
