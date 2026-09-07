import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DiKOMIK - Baca Komik Online",
  description: "Platform baca komik online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <div className="page-canvas">
          <Navbar />
          <main>{children}</main>
          <div className="page-content">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
