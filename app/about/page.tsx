"use client";

import { useState } from "react";
import Footer from "@/components/layout/Footer";
import BeliefItem from "@/components/about/BeliefItem";
import PersonCard from "@/components/about/PersonCard";
import AboutTabs from "@/components/about/AboutTabs";
import { beliefs } from "@/constants/beliefs";

type AboutSection = "story" | "beliefs" | "pastors" | "board" | "leaders";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<AboutSection>("story");

  return (
    <>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-brand-blue py-4 md:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              About Us
            </h1>
          </div>
        </section>

        {/* Tabs */}
        <AboutTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Our Story */}
        {activeTab === "story" && (
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-8 md:mb-12">
                Our story
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 lg:divide-x-2 lg:divide-brand-blue/20">
                <div className="lg:pr-8">
                  <p className="text-lg text-brand-blue/80 mb-4">
                    More Than Conquerors (MTC) was founded in November 2001 in a
                    primary school in Sowutuom by a small group of believers who
                    wanted to begin an Assemblies of God church in the area. In
                    2004, the church grew out of the school and began putting up
                    its own buildings and structure.
                  </p>
                  <p className="text-lg text-brand-blue/80 mb-4">
                    In 2026, we are celebrating 25 years.
                  </p>
                </div>
                <div className="lg:pl-8">
                  <p className="text-lg text-brand-blue/80 mb-4">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                  </p>
                  <p className="text-lg text-brand-blue/80 mb-4">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
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
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pastors */}
        {activeTab === "pastors" && (
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-8 md:mb-12">
                Meet our pastors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <PersonCard
                  title="Resident Pastor"
                  name="Rev. Emmanuel Teye Nyarko"
                  variant="primary"
                  textColor="dark"
                />
                <PersonCard
                  title="Resident Pastor"
                  name="Rev. Mrs. Aku Teye Nyarko"
                  variant="primary"
                  textColor="dark"
                />
              </div>
            </div>
          </section>
        )}

        {/* Board Chairs */}
        {activeTab === "board" && (
          <section className="py-16 md:py-20 bg-brand-neutral">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-8 md:mb-12">
                Board chairs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <PersonCard
                  title="Chairman"
                  name="Seth Twum"
                  variant="secondary"
                  textColor="dark"
                />
                <PersonCard
                  title="Secretary"
                  name="Gladys Nyarko"
                  variant="secondary"
                  textColor="dark"
                />
                <PersonCard
                  title="Treasurer"
                  name="Mary Pee"
                  variant="secondary"
                  textColor="dark"
                />
                <PersonCard
                  title="Member"
                  name="Francis Adzaku"
                  variant="secondary"
                  textColor="dark"
                />
              </div>
            </div>
          </section>
        )}

        {/* Department Leaders */}
        {activeTab === "leaders" && (
          <section className="py-16 md:py-20 bg-brand-blue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12">
                Department Leaders
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PersonCard
                  title="Youth Department"
                  name="Leader Name"
                  variant="secondary"
                  textColor="light"
                />
                <PersonCard
                  title="Women's Ministry"
                  name="Leader Name"
                  variant="secondary"
                  textColor="light"
                />
                <PersonCard
                  title="Men's Ministry"
                  name="Leader Name"
                  variant="secondary"
                  textColor="light"
                />
                <PersonCard
                  title="Children's Ministry"
                  name="Leader Name"
                  variant="secondary"
                  textColor="light"
                />
                <PersonCard
                  title="Missions"
                  name="Leader Name"
                  variant="secondary"
                  textColor="light"
                />
                <PersonCard
                  title="Ushering Department"
                  name="Leader Name"
                  variant="secondary"
                  textColor="light"
                />
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
