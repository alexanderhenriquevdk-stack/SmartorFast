import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Smart or Fast",
  description: "Veelgestelde vragen over Smart or Fast. Leeftijd, posities, tijdsinvestering, talen en meer.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
