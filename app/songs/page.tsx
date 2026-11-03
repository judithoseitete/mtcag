"use client";

import { useState } from "react";
import Link from "next/link";
import { songs } from "@/constants/songs";
import { Search } from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function SongsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [languageFilter, setLanguageFilter] = useState<
    "All" | "English" | "Twi"
  >("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("Default");

  const categories = ["All", "Hymn", "Worship", "Praises", "Contemporary"];

  const filteredSongs = songs.filter((song) => {
    const matchesSearch =
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (song.titleTranslation
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ??
        false);

    const matchesLanguage =
      languageFilter === "All" || song.primaryLanguage === languageFilter;

    const matchesCategory =
      categoryFilter === "All" || song.category === categoryFilter;

    return matchesSearch && matchesLanguage && matchesCategory;
  });

  // Sort the filtered songs
  const sortedSongs = [...filteredSongs].sort((a, b) => {
    switch (sortBy) {
      case "A-Z":
        return a.title.localeCompare(b.title);
      case "Z-A":
        return b.title.localeCompare(a.title);
      case "Language":
        return a.primaryLanguage.localeCompare(b.primaryLanguage);
      case "Category":
        return a.category.localeCompare(b.category);
      case "Default":
      default:
        return a.id - b.id; // Original order by ID
    }
  });

  return (
    <main className="bg-white min-h-screen">
      {/* Search and Filters */}
      <section className="py-8 border-b border-brand-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search songs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-brand-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gray/20"
              />
            </div>

            {/* Language Filter */}
            <select
              value={languageFilter}
              onChange={(e) =>
                setLanguageFilter(e.target.value as "All" | "English" | "Twi")
              }
              className="px-4 py-3 border border-brand-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gray/20"
            >
              <option value="All">All Languages</option>
              <option value="English">English</option>
              <option value="Twi">Twi</option>
            </select>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 border border-brand-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gray/20"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-brand-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gray/20"
            >
              <option value="Default">Sort: Default</option>
              <option value="A-Z">Sort: A-Z</option>
              <option value="Z-A">Sort: Z-A</option>
              <option value="Language">Sort: Language</option>
              <option value="Category">Sort: Category</option>
            </select>
          </div>
        </div>
      </section>

      {/* Songs List */}
      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedSongs.length === 0 ? (
            <p className="text-center text-brand-gray/60 text-lg">
              No songs found. Try adjusting your filters.
            </p>
          ) : (
            <div className="space-y-2">
              {sortedSongs.map((song, index) => (
                <Link
                  key={song.id}
                  href={`/songs/${song.id}`}
                  className="group flex items-center justify-between border-b border-brand-gray/10 py-4 hover:bg-brand-neutral/30 px-4 transition-all"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-brand-gray/40 font-medium min-w-[2rem]">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-brand-gray group-hover:text-brand-gray/80">
                        {song.title}
                        {song.titleTranslation && (
                          <span className="text-brand-gray/60 font-normal ml-2">
                            ({song.titleTranslation})
                          </span>
                        )}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-brand-gray/60">
                    <span className="bg-brand-neutral px-3 py-1 rounded-full">
                      {song.primaryLanguage}
                    </span>
                    <span className="bg-brand-neutral px-3 py-1 rounded-full">
                      {song.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
