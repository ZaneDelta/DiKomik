import { FileWarning } from "lucide-react";
import type { Comic } from "@/lib/data";
import Image from "next/image";

interface ComicCardProps {
  comic: Comic;
}

export default function ComicCard({ comic }: ComicCardProps) {
  return (
    <div className="flex w-full flex-col">
      {/* Cover */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-card">
        {comic.coverUrl ? (
          <Image
            src={comic.coverUrl}
            alt={comic.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <FileWarning
              strokeWidth={1.2}
              className="h-16 w-16 text-[#060D0C]"
            />
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-3 line-clamp-2 text-center font-body text-[15px] font-medium leading-snug text-white">
        {comic.title}
      </h3>

      {/* Chapter list */}
      <div className="mt-3 flex flex-col gap-1.5">
        {comic.chapters.map((chapter) => (
          <button
            key={chapter.id}
            className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2 text-left transition-colors hover:bg-white/10"
          >
            <span className="text-[13px] font-medium text-white/90">
              {chapter.chapterLabel}
            </span>
            <span className="text-[12px] text-white/50">
              {chapter.readTime}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
