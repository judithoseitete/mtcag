"use client";

import { useState } from "react";
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

  return (
    <>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-brand-blue min-h-[30vh] py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              About Us
            </h1>
          </div>
        </section>

        {/* Tabs */}
        <AboutTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Who We Are */}
        {activeTab === "who-we-are" && (
          <section className="py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-8">
                {whoWeAre.title}
              </h2>
              <div className="space-y-6">
                {whoWeAre.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg md:text-xl text-brand-blue/80"
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="mt-12 pt-8 border-t-2 border-brand-blue/20">
                  <p className="text-2xl md:text-3xl text-brand-blue italic mb-3">
                    {whoWeAre.scripture.text}
                  </p>
                  <p className="text-lg md:text-xl text-brand-blue/70">
                    — {whoWeAre.scripture.reference}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Our Story */}
        {activeTab === "our-story" && (
          <section className="py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              {/* AG Global */}
              <div className="bg-brand-neutral rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                  {ourStory.agGlobal.title}
                </h2>
                <div className="space-y-4">
                  {ourStory.agGlobal.content.map((paragraph, index) => (
                    <p key={index} className="text-lg text-brand-blue/80">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <Link
                  href={ourStory.agGlobal.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-brand-blue hover:text-brand-red font-semibold transition-colors"
                >
                  {ourStory.agGlobal.link.text}
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

              {/* AG Ghana */}
              <div className="bg-brand-neutral rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                  {ourStory.agGhana.title}
                </h2>
                <div className="space-y-4">
                  {ourStory.agGhana.content.map((paragraph, index) => (
                    <p key={index} className="text-lg text-brand-blue/80">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <Link
                  href={ourStory.agGhana.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-brand-blue hover:text-brand-red font-semibold transition-colors"
                >
                  {ourStory.agGhana.link.text}
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

              {/* MTC AG */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-12 text-center">
                  {ourStory.mtcAg.title}
                </h2>
                <div className="space-y-12">
                  {ourStory.mtcAg.sections.map((section, sectionIndex) => (
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
                          section.contentAfter.map((paragraph, pIndex) => (
                            <p
                              key={`after-${pIndex}`}
                              className="text-lg text-brand-blue/80"
                            >
                              {paragraph}
                            </p>
                          ))}
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
                          section.contentAfter2.map((paragraph, pIndex) => (
                            <p
                              key={`after2-${pIndex}`}
                              className="text-lg text-brand-blue/80"
                            >
                              {paragraph}
                            </p>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Beliefs Section */}
        {activeTab === "beliefs" && (
          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-brand-blue rounded-3xl px-4 py-8 md:px-16 md:py-20 lg:px-24 lg:py-24">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-neutral mb-8 md:mb-12 text-center">
                  We believe in sixteen fundamental truths
                </h2>
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
          <section className="py-16 md:py-20">
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
