import Link from "next/link";
import { Award, Users, Calendar, Trophy, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over de coach — Smart or Fast",
  description: "Mosi van der Knaap, UEFA A licensed coach en voormalig hoofdtrainer van een professioneel jeugdteam. Oprichter Spitta Academy.",
};

export default function OverPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="md:flex items-start gap-14">
            {/* Photo */}
            <div className="w-full md:w-96 shrink-0 mb-8 md:mb-0">
              <div className="aspect-[3/4] bg-gradient-to-br from-brand-dark to-brand-dark/80 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
                <div className="text-center text-white/50">
                  <div className="text-6xl mb-3">⚽</div>
                  <div className="text-sm font-medium">Foto Mosi van der Knaap</div>
                  <div className="text-xs text-white/30 mt-1">Op het trainingsveld</div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="section-label mb-3">Over de coach</p>
              <h1 className="section-title mb-2">Mosi van der Knaap</h1>
              <p className="text-lg text-brand-orange font-semibold mb-6">
                UEFA A Licensed Coach · Oprichter Spitta Academy
              </p>

              <div className="space-y-4 text-brand-text-light leading-relaxed mb-8">
                <p>
                  Als UEFA A licensed coach en voormalig hoofdtrainer van een professioneel
                  jeugdteam werk ik al jaren met jonge voetballers die dezelfde droom hebben:
                  beter worden dan gisteren.
                </p>
                <p>
                  Ik heb honderden spelers begeleid in hun ontwikkeling. Niet door teamtactiek
                  te herhalen, maar door ze als individu sterker, slimmer en sneller te maken.
                  De principes uit dit programma zijn dezelfde die ik dagelijks op het
                  trainingsveld gebruik.
                </p>
                <p>
                  Smart or Fast is alles wat ik heb geleerd in het professionele jeugdvoetbal,
                  gebundeld in een programma dat elke speler zelfstandig kan volgen.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Award size={20} />, text: "UEFA A Licensed Coach" },
                  { icon: <Trophy size={20} />, text: "Voormalig hoofdtrainer prof. jeugdteam" },
                  { icon: <Zap size={20} />, text: "Oprichter Spitta Academy" },
                  { icon: <Users size={20} />, text: "400+ spelers gecoacht" },
                  { icon: <Calendar size={20} />, text: "10+ jaar ervaring jeugdvoetbal" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 bg-brand-orange-light rounded-xl px-4 py-3">
                    <span className="text-brand-orange">{c.icon}</span>
                    <span className="text-sm font-semibold text-brand-dark">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofie */}
      <section className="bg-brand-surface py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Mijn filosofie</p>
            <h2 className="section-title">Waarom individuele ontwikkeling?</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Elk team speelt anders — jij bent de constante",
                text: "Als speler verander je regelmatig van team, trainer en systeem. Maar jouw individuele kwaliteiten gaan altijd mee. Daarom richt Smart or Fast zich 100% op wat JIJ beter kunt doen, ongeacht de omgeving.",
              },
              {
                title: "Teamtraining is niet genoeg",
                text: "In teamtrainingen ligt de focus op het collectief. Individuele aandacht is beperkt. De spelers die doorbreken zijn degenen die buiten de teamtraining om zelfstandig werken aan hun spelprincipes, fysiek en techniek.",
              },
              {
                title: "Slimmer EN sneller — niet óf",
                text: "Te vaak worden spelintelligentie en fysieke kwaliteiten als losse dingen behandeld. Maar de beste spelers combineren beide. Ze weten wat ze moeten doen én ze zijn fysiek in staat het uit te voeren. Daarom heeft Smart or Fast drie modules die samen een compleet programma vormen.",
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <h3 className="font-display font-bold text-lg text-brand-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-text-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4 font-display">
            Leer van een coach die het veld kent
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Dezelfde principes die ik gebruik met professionele jeugdspelers,
            nu beschikbaar als online programma.
          </p>
          <Link href="/pricing" className="btn-primary inline-block">
            Bekijk het programma →
          </Link>
        </div>
      </section>
    </>
  );
}
