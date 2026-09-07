// Sementara berisi types & dummy data.
// Nantinya query di sini akan diganti dengan pemanggilan Supabase client.

export type ComicCategory = "Project" | "Mirror" | "OneShot";

export interface Chapter {
  id: string; // slug unik, mis. "naruto-ch-1"
  chapterLabel: string; // "Chapter 01"
  readTime: string; // "12 menit"
}

export interface Comic {
  id: string;
  title: string;
  category: ComicCategory;
  coverUrl: string | null; // URL Cloudinary, null = pakai placeholder
  chapters: Chapter[]; // ditampilkan maksimal 2 di comic card
}

export interface Banner {
  id: string;
  imageUrl: string;
  href?: string;
  alt: string;
}

const dummyChapters = (prefix: string): Chapter[] => [
  { id: `${prefix}-113`, chapterLabel: "Chapter 113", readTime: "12 menit" },
  { id: `${prefix}-112`, chapterLabel: "Chapter 112", readTime: "12 menit" },
];

export const dummyComics: Comic[] = Array.from({ length: 18 }).map((_, i) => {
  const isLong = i % 2 === 1;
  return {
    id: `comic-${i + 1}`,
    title: isLong ? "Name_Comic_Super_Long_Text" : "Name_Comic",
    category: "Project",
    coverUrl: null,
    chapters: dummyChapters(`comic-${i + 1}`),
  };
});

export const dummyBanners: Banner[] = [
  {
    id: "banner-1",
    imageUrl: "/comics/banner-indihome.jpg",
    alt: "IndiHome Paket Phoenix",
  },
  {
    id: "banner-2",
    imageUrl: "/comics/banner-telkomuniversity.jpg",
    alt: "Jalur Seleksi Rapor TUS Tel-U Surabaya",
  },
];
