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
      <section className="sticky top-16 md:top-20 z-40 py-8 bg-brand-blue border-b-2 border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-blue/60 w-5 h-5"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Search songs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-white text-brand-blue placeholder:text-brand-blue/60"
              />
            </div>

            {/* Language Filter */}
            <select
              value={languageFilter}
              onChange={(e) =>
                setLanguageFilter(e.target.value as "All" | "English" | "Twi")
              }
              className="px-4 py-3 pr-10 border-2 border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white appearance-none bg-white text-brand-blue text-sm md:text-base font-medium"
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
              className="px-4 py-3 pr-10 border-2 border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white appearance-none bg-white text-brand-blue text-sm md:text-base font-medium"
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
              className="px-4 py-3 pr-10 border-2 border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white appearance-none bg-white text-brand-blue text-sm md:text-base font-medium"
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
        </div>      </section>

      {/* Songs List */}
      <section className="bg-brand-blue pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          {sortedSongs.length === 0 ? (
            <p className="text-center text-white/80 text-lg">
              No songs found. Try adjusting your filters.
            </p>
          ) : (
            <div className="space-y-0">
              {sortedSongs.map((song, index) => (
                <Link
                  key={song.id}
                  href={`/songs/${song.id}`}
                  className="group flex items-center border-b border-white/20 hover:bg-white/10 transition-all"
                >
                  <div className="flex-shrink-0 w-16 md:w-20 px-4 py-4 border-r border-white/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-white/60">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1 flex items-center justify-between px-4 py-4">
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-white/80">
                        {song.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 text-xs md:text-sm text-white/80 ml-4">
                      <span className="bg-white/20 px-3 py-1 rounded-lg">
                        {song.primaryLanguage}
                      </span>
                      <span className="bg-white/20 px-3 py-1 rounded-lg">
                        {song.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      
          
          {/* Disclaimer */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
            <p className="text-center text-white text-base md:text-lg font-medium">
              Disclaimer: The songs listed here are provided for worship and educational purposes. 
              More Than Conquerors Assemblies of God does not claim ownership of these songs. 
              All rights belong to their respective copyright holders.
            </p>
          </div>
      </section>

      <Footer bgColor="white" cardVariant="dark" />
    </main>
  );
}
