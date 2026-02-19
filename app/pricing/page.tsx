import Link from "next/link";
import { Check, X, Zap, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prijzen — Smart or Fast",
  description: "Kies uit Starter (€47), Complete (€97) of Elite (€197). Eenmalige betaling, levenslang toegang tot alle lessen.",
};

const TIERS = [
  {
    name: "STARTER",
    price: "47",
    desc: "1 module naar keuze",
    popular: false,
    features: [
      { text: "1 module (SMART, FAST of SKILLS)", included: true },
      { text: "8 of 6 videolessen", included: true },
      { text: "Downloadbare schema's", included: true },
      { text: "Levenslang toegang", included: true },
      { text: "NL + Engels", included: true },
      { text: "Alle 3 de modules", included: false },
      { text: "8-weken compleet programma", included: false },
      { text: "Persoonlijke video feedback", included: false },
      { text: "Toegang tot community", included: false },
      { text: "Bonuscontent", included: false },
    ],
    cta: "Start met 1 module →",
    href: "#", // Teachable checkout link
  },
  {
    name: "COMPLETE",
    price: "97",
    desc: "Alle 3 de modules",
    popular: true,
    features: [
      { text: "Alle 3 de modules (SMART + FAST + SKILLS)", included: true },
      { text: "22 videolessen", included: true },
      { text: "Compleet 8-weken programma", included: true },
      { text: "Alle werkbladen & schema's", included: true },
      { text: "Levenslang toegang", included: true },
      { text: "NL + Engels", included: true },
      { text: "Updates & nieuwe drills", included: true },
      { text: "Persoonlijke video feedback", included: false },
      { text: "Toegang tot community", included: false },
      { text: "Bonuscontent", included: false },
    ],
    cta: "Start het complete programma →",
    href: "#", // Teachable checkout link
  },
  {
    name: "ELITE",
    price: "197",
    desc: "Alles + persoonlijke begeleiding",
    popular: false,
    features: [
      { text: "Alles uit COMPLETE", included: true },
      { text: "22 videolessen + bonuscontent", included: true },
      { text: "2x persoonlijke video feedback", included: true },
      { text: "Toegang tot besloten community", included: true },
      { text: "Priority support", included: true },
      { text: "NL + Engels", included: true },
      { text: "Levenslang toegang", included: true },
      { text: "Updates & nieuwe drills", included: true },
      { text: "Exclusieve bonuslessen", included: true },
      { text: "Toekomstige content gratis", included: true },
    ],
    cta: "Word ELITE →",
    href: "#", // Teachable checkout link
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="section-label mb-3">Prijzen</p>
            <h1 className="section-title mb-4">
              Kies het programma dat bij je past
            </h1>
            <p className="text-lg text-brand-text-light max-w-xl mx-auto">
              Investeer in jezelf. Eén keer betalen, levenslang toegang.
            </p>
          </div>

          {/* Tier cards */}
          <div className="grid md:grid-cols-3 gap-5 items-start mb-16">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border overflow-hidden ${
                  tier.popular
                    ? "border-brand-orange shadow-[0_4px_30px_rgba(255,92,0,0.12)] scale-[1.02] relative"
                    : "border-brand-border"
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="bg-brand-orange text-white text-center py-2 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-1.5">
                    <Star size={12} fill="white" /> Populairst — 80% kiest hiervoor
                  </div>
                )}

                <div className="p-8 bg-white">
                  {/* Tier name */}
                  <div className={`text-xs font-bold tracking-[3px] ${tier.popular ? "text-brand-orange" : "text-brand-text-light"} mb-3`}>
                    {tier.name}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-black text-brand-dark font-display">€{tier.price}</span>
                    <span className="text-sm text-brand-text-light">eenmalig</span>
                  </div>
                  <p className="text-sm text-brand-text-light mb-8">{tier.desc}</p>

                  {/* CTA */}
                  <a
                    href={tier.href}
                    className={`block text-center font-bold py-3.5 rounded-xl transition-all text-sm ${
                      tier.popular
                        ? "btn-primary w-full !py-3.5"
                        : "border-2 border-brand-dark/10 text-brand-dark hover:border-brand-dark/25"
                    }`}
                  >
                    {tier.cta}
                  </a>

                  {/* Features */}
                  <div className="mt-8 space-y-3">
                    {tier.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        {f.included ? (
                          <Check size={16} className="text-brand-green shrink-0 mt-0.5" strokeWidth={3} />
                        ) : (
                          <X size={16} className="text-brand-border shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${f.included ? "text-brand-text" : "text-brand-text-light/50"}`}>
                          {f.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price comparison */}
          <div className="max-w-2xl mx-auto">
            <div className="card text-center">
              <p className="section-label mb-4">Ter vergelijking</p>
              <div className="space-y-3 mb-6">
                {[
                  { label: "1 sessie personal trainer", price: "€50 – €100", cross: true },
                  { label: "10 sessies personal training", price: "€500 – €1.000", cross: true },
                  { label: "Smart or Fast COMPLETE (levenslang)", price: "€97", cross: false },
                ].map((c, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center py-3 px-5 rounded-xl ${
                      c.cross ? "bg-brand-surface" : "bg-brand-orange-light border border-brand-orange/20"
                    }`}
                  >
                    <span className={`text-sm font-medium ${c.cross ? "text-brand-text-light" : "text-brand-dark font-bold"}`}>
                      {c.label}
                    </span>
                    <span className={`font-bold ${c.cross ? "text-brand-text-light line-through" : "text-brand-orange text-lg"}`}>
                      {c.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-brand-text-light">
                Eén investering. Levenslang toegang. Inclusief updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4 font-display">
            Klaar om het verschil te maken?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Elke dag dat je wacht, is een dag dat een andere speler voorsprong neemt.
            Start vandaag.
          </p>
          <a href="#" className="btn-primary inline-block !text-lg !px-12 !py-5">
            Start vandaag voor €97 →
          </a>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {["Veilig betalen met iDEAL & creditcard", "Levenslang toegang", "Direct starten"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-gray-400">
                <Check size={12} className="text-brand-green" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
