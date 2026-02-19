import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart or Fast — Individual Football Development",
  description:
    "Word de speler die elke trainer wil opstellen. Online trainingsprogramma voor individuele voetbalontwikkeling. Spelintelligentie, explosiviteit en techniek voor spelers van 12-16 jaar.",
  keywords: [
    "voetbaltraining",
    "individuele training",
    "jeugdvoetbal",
    "spelintelligentie",
    "explosiviteit",
    "football development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
