"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import BeliefItem from "@/components/about/BeliefItem";
import PersonCard from "@/components/about/PersonCard";
import AboutTabs from "@/components/about/AboutTabs";
import { beliefs } from "@/constants/beliefs";
import { whoWeAre, ourStory, leadership } from "@/constants/aboutContent";
import { ExternalLink } from "lucide-react";

type AboutSection = "who-we-are" | "our-story" | "beliefs" | "leadership";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<AboutSection>("who-we-are");
  const [activeStorySection, setActiveStorySection] =
    useState<string>("ag-global");

  // Load active tab from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as AboutSection;
    const validTabs: AboutSection[] = ["who-we-are", "our-story", "beliefs", "leadership"];
    if (hash && validTabs.includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  // Update URL hash when tab changes
  const handleTabChange = (tab: AboutSection) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
  };

  // Track scroll position for active section highlighting
  useEffect(() => {
    if (activeTab !== "our-story") return;

    const handleScroll = () => {
      const sections = ["ag-global", "ag-ghana", "mtc-ag"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveStorySection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  return (
    <>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-brand-blue min-h-[30vh] py-8 md:py-12 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white lowercase">
              {activeTab === "who-we-are" && "we are more than conquerors."}
              {activeTab === "our-story" && "this is our story."}
              {activeTab === "beliefs" &&
                "we believe in sixteen fundamental truths."}
              {activeTab === "leadership" && "meet our pastors & leaders."}
            </h1>
          </div>
        </section>

        {/* Tabs */}
        <AboutTabs activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Who We Are */}
        {activeTab === "who-we-are" && (
          <section className="pt-4 pb-16 md:pt-16 md:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left column - Text content */}
              <div className="max-w-4xl pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8 flex flex-col justify-between h-full">
                <div className="space-y-6 text-left">
                  {whoWeAre.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-xl md:text-2xl text-brand-blue/80"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-12">
                  <p className="text-2xl md:text-3xl lg:text-4xl text-brand-blue mb-3">
                    {whoWeAre.scripture.text}
                  </p>
                  <p className="text-xl md:text-2xl text-brand-blue/70">
                    {whoWeAre.scripture.reference}
                  </p>
                </div>
              </div>

              {/* Right column - Three tilted images */}
              <div className="flex flex-col items-center justify-center p-8">
                {/* First image - tilted left, shifted left */}
                <div className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-brand-blue rounded-lg transform -rotate-6 -translate-x-12 md:-translate-x-16 lg:-translate-x-24 shadow-lg"></div>

                {/* Second image - tilted right, shifted right */}
                <div className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-brand-neutral-dark rounded-lg transform rotate-6 translate-x-12 md:translate-x-16 lg:translate-x-24 shadow-lg -mt-10 md:-mt-12 lg:-mt-16"></div>

                {/* Third image - tilted left, shifted left (same as first) */}
                <div className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-brand-blue rounded-lg transform -rotate-6 -translate-x-12 md:-translate-x-16 lg:-translate-x-24 shadow-lg -mt-10 md:-mt-12 lg:-mt-16"></div>
              </div>
            </div>
          </section>
        )}

        {/* Our Story */}
        {activeTab === "our-story" && (
          <section className="pt-4 pb-16 md:pt-16 md:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex gap-4 lg:gap-6">
                {/* Sticky Side Navigation - Desktop and Tablet */}
                <nav className="hidden md:block w-48 flex-shrink-0">
                  <div className="sticky top-40 space-y-2 border-l-2 border-brand-blue pl-4">
                    <a
                      href="#ag-global"
                      className={`block py-2 transition-colors text-lg font-medium ${
                        activeStorySection === "ag-global"
                          ? "text-brand-neutral bg-brand-blue -ml-4 pl-8 pr-4"
                          : "text-brand-blue/50 hover:text-brand-blue hover:bg-brand-neutral/50 rounded-lg px-4"
                      }`}
                    >
                      AG Global
                    </a>
                    <a
                      href="#ag-ghana"
                      className={`block py-2 transition-colors text-lg font-medium ${
                        activeStorySection === "ag-ghana"
                          ? "text-brand-neutral bg-brand-blue -ml-4 pl-8 pr-4"
                          : "text-brand-blue/50 hover:text-brand-blue hover:bg-brand-neutral/50 rounded-lg px-4"
                      }`}
                    >
                      AG Ghana
                    </a>
                    <a
                      href="#mtc-ag"
                      className={`block py-2 transition-colors text-lg font-medium ${
                        activeStorySection === "mtc-ag"
                          ? "text-brand-neutral bg-brand-blue -ml-4 pl-8 pr-4"
                          : "text-brand-blue/50 hover:text-brand-blue hover:bg-brand-neutral/50 rounded-lg px-4"
                      }`}
                    >
                      MTC AG
                    </a>
                  </div>
                </nav>

                {/* Main Content */}
                <div className="flex-1 space-y-16">
                  {/* AG Global */}
                  <div id="ag-global" className="scroll-mt-40">
                    <div className="bg-brand-blue rounded-3xl p-8 md:p-12">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {ourStory.agGlobal.title}
                      </h2>
                      <div className="space-y-4">
                        {ourStory.agGlobal.content.map((paragraph, index) => (
                          <p key={index} className="text-lg text-white/90">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      <Link
                        href={ourStory.agGlobal.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 text-white hover:text-brand-yellow font-semibold transition-colors"
                      >
                        {ourStory.agGlobal.link.text}
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* AG Ghana */}
                  <div id="ag-ghana" className="scroll-mt-40">
                    <div className="bg-brand-blue rounded-3xl p-8 md:p-12">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {ourStory.agGhana.title}
                      </h2>
                      <div className="space-y-4">
                        {ourStory.agGhana.content.map((paragraph, index) => (
                          <p key={index} className="text-lg text-white/90">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      <Link
                        href={ourStory.agGhana.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 text-white hover:text-brand-yellow font-semibold transition-colors"
                      >
                        {ourStory.agGhana.link.text}
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* MTC AG */}
                  <div id="mtc-ag" className="scroll-mt-40">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-12 text-center">
                        {ourStory.mtcAg.title}
                      </h2>
                      <div className="space-y-12">
                        {ourStory.mtcAg.sections.map(
                          (section, sectionIndex) => (
                            <div key={sectionIndex} className="space-y-4">
                              <h3 className="text-2xl md:text-3xl font-bold text-brand-blue">
                                {section.heading}
                              </h3>
                              <div className="space-y-4">
                                {section.content.map((paragraph, pIndex) => (
                                  <p
                                    key={pIndex}
                                    className="text-lg text-brand-blue/80"
                                  >
                                    {paragraph}
                                  </p>
                                ))}
                                {section.list && (
                                  <ul className="ml-6 space-y-2">
                                    {section.list.map((item, iIndex) => (
                                      <li
                                        key={iIndex}
                                        className="text-lg text-brand-blue/80 list-disc"
                                      >
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                {section.contentAfter &&
                                  section.contentAfter.map(
                                    (paragraph, pIndex) => (
                                      <p
                                        key={`after-${pIndex}`}
                                        className="text-lg text-brand-blue/80"
                                      >
                                        {paragraph}
                                      </p>
                                    ),
                                  )}
                                {section.sublist && (
                                  <div className="ml-6 space-y-3">
                                    {Object.entries(section.sublist).map(
                                      ([district, churches], dIndex) => (
                                        <div key={dIndex}>
                                          <p className="font-semibold text-lg text-brand-blue">
                                            {district}
                                          </p>
                                          <ul className="ml-6 space-y-1">
                                            {(churches as string[]).map(
                                              (church, cIndex) => (
                                                <li
                                                  key={cIndex}
                                                  className="text-lg text-brand-blue/80 list-disc"
                                                >
                                                  {church}
                                                </li>
                                              ),
                                            )}
                                          </ul>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                )}
                                {section.contentAfter2 &&
                                  section.contentAfter2.map(
                                    (paragraph, pIndex) => (
                                      <p
                                        key={`after2-${pIndex}`}
                                        className="text-lg text-brand-blue/80"
                                      >
                                        {paragraph}
                                      </p>
                                    ),
                                  )}
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Beliefs Section */}
        {activeTab === "beliefs" && (
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
        {activeTab === "leadership" && (
          <section className="pt-4 pb-16 md:pt-16 md:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              {/* Senior Pastor & Wife */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">
                  {leadership.seniorPastor.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <PersonCard
                    title={leadership.seniorPastor.title}
                    name={leadership.seniorPastor.name}
                    variant="primary"
                    textColor="dark"
                  />
                </div>
              </div>

              {/* Senior Associate Pastor */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">
                  {leadership.seniorAssociate.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <PersonCard
                    title={leadership.seniorAssociate.title}
                    name={leadership.seniorAssociate.name}
                    variant="primary"
                    textColor="dark"
                  />
                </div>
              </div>

              {/* Associate Pastors */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">
                  Associate Pastors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {leadership.associates.map((pastor, index) => (
                    <PersonCard
                      key={index}
                      title={pastor.title}
                      name={pastor.name}
                      variant="secondary"
                      textColor="dark"
                    />
                  ))}
                </div>
              </div>

              {/* Board Members */}
              <div className="bg-brand-neutral rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">
                  Board Members
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                  {leadership.board.map((member, index) => (
                    <div key={index} className="text-center">
                      <div className="w-full aspect-square bg-white rounded-lg mb-3"></div>
                      <p className="text-sm md:text-base font-semibold text-brand-blue">
                        {member.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Heads */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">
                  Department Heads
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {leadership.departmentHeads.map((head, index) => (
                    <PersonCard
                      key={index}
                      title={head.title}
                      name={head.name}
                      variant="secondary"
                      textColor="dark"
                    />
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
