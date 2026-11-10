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
  const [copiedSection, setCopiedSection] = useState<number | null>(null);
  const [showTranslation, setShowTranslation] = useState(true);

  if (!song) {
    return (
      <main className="bg-brand-blue min-h-screen">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
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
        if (showTranslation && line.translation) {
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
    <main className="bg-brand-blue min-h-screen">
      

      {/* Song Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
          {/* Back Button */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/songs"
              className="inline-flex items-center gap-2 text-white hover:text-white/80"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              Back to Songs
            </Link>
            
            {(song.titleTranslation || song.sections.some(s => s.lines.some(l => l.translation))) && (
              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm md:text-base"
              >
                {showTranslation ? "Hide" : "Show"} Translation
              </button>
            )}
          </div>

          {/* Song Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {song.title}
            </h1>
            {showTranslation && song.titleTranslation && (
              <p className="text-2xl md:text-3xl text-white/80">
                ({song.titleTranslation})
              </p>
            )}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm md:text-base">
                {song.primaryLanguage}
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm md:text-base">
                {song.category}
              </span>
              {song.author && (
                <span className="text-white/70">by {song.author}</span>
              )}
              {song.year && (
                <span className="text-white/70">({song.year})</span>
              )}
            </div>
          </div>

          {/* Lyrics */}
          <div className="space-y-8">
            {song.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {getSectionTitle(section.type, section.number)}
                  </h2>
                  <button
                    onClick={() => copySectionToClipboard(sectionIndex)}
                    className="flex items-center gap-2 px-3 py-2 text-white/70 hover:text-white hover:bg-white/20 rounded-lg transition-all"
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
                      className="text-lg md:text-xl text-white leading-relaxed"
                    >
                      {line.primary}
                      {showTranslation && line.translation && (
                        <span className="text-white/70">
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
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="font-bold text-white mb-2">Notes:</h3>
              <p className="text-white/80">{song.notes}</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
