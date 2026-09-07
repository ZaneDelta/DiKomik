"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, User } from "lucide-react";
import { useState } from "react";

// Import gambar dari folder components/Assets
import logoBanner from "@/components/Assets/banner.jpg";

const NAV_LINKS = [
  { label: "Home", href: "/home" },
  { label: "Search", href: "/search" },
  { label: "Library", href: "/library" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isAccountModalOpen, setAccountModalOpen] = useState(false);

  return (
    <>
      <nav className="flex h-[100px] w-full items-center justify-between bg-white/5 px-page-pad">
        {/* Logo Banner */}
        <Link href="/home" className="flex h-[60px] w-[200px] items-center overflow-hidden rounded-md">
          <Image
            src={logoBanner}
            alt="DiKOMIK Logo Banner"
            width={200}
            height={60}
            className="h-full w-full object-cover"
            priority
          />
        </Link>

        {/* Center nav */}
        <div className="flex items-center gap-12">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative pb-2 font-comic text-base font-normal text-white"
                style={{ opacity: isActive ? 1 : 0.8 }}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 h-[2px] w-24 -translate-x-1/2 bg-accent rounded-full"/>
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side: searchbar + account */}
        <div className="flex items-center gap-4">
          {/* Searchbar */}
          <div className="flex h-11 w-[280px] items-center justify-between rounded-md bg-white/5 px-4">
            <input
              type="text"
              placeholder="Cari komik..."
              className="w-full bg-transparent font-body text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <Search className="h-4 w-4 shrink-0 text-white/60" />
          </div>

          {/* Tombol Akun */}
          <button
            onClick={() => setAccountModalOpen(true)}
            aria-label="Account"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white transition-opacity hover:opacity-80 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-11 w-11"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88a9.95 9.95 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Account modal (placeholder — belum ada isi/halaman account) */}
      {isAccountModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setAccountModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="h-[320px] w-[360px] rounded-xl border border-white/10 bg-surface shadow-2xl"
          />
        </div>
      )}
    </>
  );
}