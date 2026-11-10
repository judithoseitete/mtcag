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

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 pr-10 border border-brand-blue/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/20 appearance-none bg-white text-sm md:text-base"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.75rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
              }}
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
      <section className="py-6 md:py-8 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedSongs.length === 0 ? (
            <p className="text-center text-brand-blue/60 text-lg">
              No songs found. Try adjusting your filters.
            </p>
          ) : (
            <div className="space-y-0">
              {sortedSongs.map((song, index) => (
                <Link
                  key={song.id}
                  href={`/songs/${song.id}`}
                  className="group flex items-center border-b border-brand-blue/10 hover:bg-brand-neutral/30 transition-all"
                >
                  <div className="flex-shrink-0 px-4 py-4 border-r border-brand-blue/20">
                    <span className="text-lg font-bold text-brand-blue/40">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1 flex items-center justify-between px-4 py-4">
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold text-brand-blue group-hover:text-brand-blue/80">
                        {song.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 text-xs md:text-sm text-brand-blue/60 ml-4">
                      <span className="bg-brand-neutral px-3 py-1 rounded-lg">
                        {song.primaryLanguage}
                      </span>
                      <span className="bg-brand-neutral px-3 py-1 rounded-lg">
                        {song.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer bgColor="white" cardVariant="dark" />
    </main>
  );
}
