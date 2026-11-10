"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { songs } from "@/constants/songs";
import { Search, ChevronLeft, Copy, Check } from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function SongDetailPage() {
  const params = useParams();
  const songId = parseInt(params.id as string);
  const song = songs.find((s) => s.id === songId);

  const [searchQuery, setSearchQuery] = useState("");
  const [languageFilter, setLanguageFilter] = useState<
    "All" | "English" | "Twi"
  >("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [copiedSection, setCopiedSection] = useState<number | null>(null);

  const categories = ["All", "Hymn", "Worship", "Praises", "Contemporary"];

  if (!song) {
    return (
      <main className="bg-white min-h-screen">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-brand-blue mb-4">
              Song Not Found
            </h1>
            <Link
              href="/songs"
              className="text-brand-blue hover:text-brand-blue/70"
            >
              â† Back to Songs
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const getSectionTitle = (type: string, number?: number) => {
    if (type === "verse" && number) return `Verse ${number}`;
    if (type === "chorus") return "Chorus";
    if (type === "bridge") return "Bridge";
    if (type === "intro") return "Intro";
    if (type === "outro") return "Outro";
    return "";
  };

  const copySectionToClipboard = (sectionIndex: number) => {
    const section = song!.sections[sectionIndex];
    const sectionText = section.lines
      .map((line) => {
        if (line.translation) {
          return `${line.primary} (${line.translation})`;
        }
        return line.primary;
      })
      .join("\n");

    navigator.clipboard.writeText(sectionText).then(() => {
      setCopiedSection(sectionIndex);
      setTimeout(() => setCopiedSection(null), 2000);
    });
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Search and Filters */}
      <section className="py-8 border-b border-brand-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-blue/40 w-5 h-5"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Search songs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-brand-blue/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>

            {/* Language Filter */}
            <select
              value={languageFilter}
              onChange={(e) =>
                setLanguageFilter(e.target.value as "All" | "English" | "Twi")
              }
              className="px-4 py-3 pr-10 border border-brand-blue/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/20 appearance-none bg-white text-sm md:text-base"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.75rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="All">All Languages</option>
              <option value="English">English</option>
              <option value="Twi">Twi</option>
            </select>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 pr-10 border border-brand-blue/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/20 appearance-none bg-white text-sm md:text-base"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.75rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Song Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/songs"
            className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue/70 mb-8"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            Back to Songs
          </Link>

          {/* Song Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-3">
              {song.title}
            </h1>
            {song.titleTranslation && (
              <p className="text-2xl md:text-3xl text-brand-blue/60">
                ({song.titleTranslation})
              </p>
            )}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span className="bg-brand-neutral text-brand-blue px-4 py-2 rounded-lg text-sm md:text-base">
                {song.primaryLanguage}
              </span>
              <span className="bg-brand-neutral text-brand-blue px-4 py-2 rounded-lg text-sm md:text-base">
                {song.category}
              </span>
              {song.author && (
                <span className="text-brand-blue/60">by {song.author}</span>
              )}
              {song.year && (
                <span className="text-brand-blue/60">({song.year})</span>
              )}
            </div>
          </div>

          {/* Lyrics */}
          <div className="space-y-8">
            {song.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="bg-brand-neutral rounded-lg p-6 md:p-8 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-brand-blue">
                    {getSectionTitle(section.type, section.number)}
                  </h2>
                  <button
                    onClick={() => copySectionToClipboard(sectionIndex)}
                    className="flex items-center gap-2 px-3 py-2 text-brand-blue/60 hover:text-brand-blue hover:bg-white rounded-lg transition-all"
                    title="Copy section"
                  >
                    {copiedSection === sectionIndex ? (
                      <>
                        <Check className="w-4 h-4" aria-hidden="true" />
                        <span className="text-sm">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" aria-hidden="true" />
                        <span className="text-sm hidden md:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="space-y-2">
                  {section.lines.map((line, lineIndex) => (
                    <p
                      key={lineIndex}
                      className="text-lg md:text-xl text-brand-blue leading-relaxed"
                    >
                      {line.primary}
                      {line.translation && (
                        <span className="text-brand-blue/60">
                          {" "}
                          ({line.translation})
                        </span>
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          {song.notes && (
            <div className="mt-8 p-6 bg-brand-neutral/50 rounded-lg">
              <h3 className="font-bold text-brand-blue mb-2">Notes:</h3>
              <p className="text-brand-blue/70">{song.notes}</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
