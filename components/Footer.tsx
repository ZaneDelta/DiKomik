import Image from "next/image";
// Import gambar dari folder components/Assets
import logoBanner from "@/components/Assets/banner.jpg";

export default function Footer() {
  return (
    <footer className="mt-20 flex flex-col items-center gap-3 border-t border-white/5 py-6">
      {/* Logo Banner */}
      <div className="h-[60px] w-[200px] overflow-hidden rounded-md">
        <Image
          src={logoBanner}
          alt="DiKOMIK Logo Banner"
          width={200}
          height={60}
          className="h-full w-full object-cover"
        />
      </div>

      <p className="font-body text-sm text-white/50">
        © 2026 All Rights Reserved
      </p>
    </footer>
  );
}