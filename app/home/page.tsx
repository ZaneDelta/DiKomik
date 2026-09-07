"use client";

import { useState } from "react";
import Image from "next/image";
import ComicCard from "@/components/ComicCard";
import { dummyBanners, dummyComics, type ComicCategory } from "@/lib/data";

const CATEGORIES: ComicCategory[] = ["Project", "Mirror", "OneShot"];
const COMICS_PER_PAGE = 18;
const TOTAL_PAGES = 5;

export default function HomePage() {
  const [activeCategory, setActiveCategory] =
    useState<ComicCategory>("Project");
  const [currentPage, setCurrentPage] = useState(1);

  const visibleComics = dummyComics
    .filter((comic) => comic.category === activeCategory)
    .slice(0, COMICS_PER_PAGE);

  return (
    <div className="page-content pb-8 pt-8">
      {/* Banners */}
      <div className="flex gap-6">
        {dummyBanners.map((banner) => (
          <div
            key={banner.id}
            className="relative h-[120px] flex-1 overflow-hidden rounded-lg bg-white/5"
          >
            <Image
              src={banner.imageUrl}
              alt={banner.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1440px) 50vw"
            />
          </div>
        ))}
      </div>

      {/* Category tabs */}
      <div className="mt-10 flex items-center gap-4">
        {CATEGORIES.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
              className={`rounded-md px-6 py-2.5 font-body text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-accent text-background"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Comic grid */}
      <div className="mt-10 grid grid-cols-6 gap-6">
        {visibleComics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex items-center justify-center gap-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-accent text-accent transition-colors hover:bg-accent/10"
          aria-label="Halaman sebelumnya"
        >
          ‹
        </button>

        {Array.from({ length: TOTAL_PAGES }).map((_, i) => {
          const page = i + 1;
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex h-9 w-9 items-center justify-center rounded-md font-body text-sm font-medium transition-colors ${
                isActive
                  ? "bg-accent text-background"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1))}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-accent text-accent transition-colors hover:bg-accent/10"
          aria-label="Halaman berikutnya"
        >
          ›
        </button>
      </div>
    </div>
  );
}