"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Voor welke leeftijd is dit programma?",
    a: "Smart or Fast is ontwikkeld voor voetballers van 12 tot 16 jaar. Het fysieke deel (FAST module) heeft aparte varianten voor 12-14 en 14-16 jaar, zodat de oefeningen leeftijdsaangepast zijn.",
  },
  {
    q: "Werkt dit voor elke positie?",
    a: "Ja. Alle principes zijn universeel en gelden voor verdedigers, middenvelders en aanvallers. In de SMART module is er een speciale les over hoe je de principes toepast op jouw specifieke positie.",
  },
  {
    q: "Heb ik een gym nodig?",
    a: "Nee. Alle oefeningen in de FAST module zijn uit te voeren op het veld of thuis, zonder apparatuur. Je hebt alleen een bal, cones/markers en een stukje ruimte nodig.",
  },
  {
    q: "Hoeveel tijd kost het per week?",
    a: "Reken op 2-3 sessies van 30-45 minuten per week, naast je reguliere clubtrainingen. Het schema is flexibel en past rond je bestaande trainingen.",
  },
  {
    q: "Is dit een vervanging van mijn clubtraining?",
    a: "Nee, absoluut niet. Smart or Fast is een aanvulling op je clubtraining. Het richt zich op de individuele aspecten die je in teamtraining niet of onvoldoende leert.",
  },
  {
    q: "In welke talen is de cursus beschikbaar?",
    a: "De volledige cursus is beschikbaar in het Nederlands en Engels. Je kunt op elk moment wisselen tussen de talen.",
  },
  {
    q: "Hoe lang heb ik toegang?",
    a: "Je krijgt levenslang toegang tot alle content. Inclusief eventuele updates en nieuwe drills die later worden toegevoegd.",
  },
  {
    q: "Kan ik later upgraden naar een hoger pakket?",
    a: "Ja! Als je begint met het STARTER pakket en later wilt upgraden naar COMPLETE of ELITE, betaal je alleen het verschil. Je hoeft nooit dubbel te betalen.",
  },
  {
    q: "Kan mijn ouder meekijken of helpen?",
    a: "Zeker! Veel ouders volgen het programma samen met hun kind. Vooral bij de FAST module (fysieke training) is het handig als een ouder meehelpt met de oefeningen.",
  },
  {
    q: "Wanneer kan ik resultaat verwachten?",
    a: "De eerste verbeteringen in spelinzicht merk je al na 1-2 weken. Fysieke resultaten worden zichtbaar na 4-6 weken consistent trainen. Het volledige 8-weken programma geeft de beste resultaten.",
  },
];

function FaqItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className={`border rounded-xl transition-all ${open ? "border-brand-orange/30 bg-brand-orange-light/30" : "border-brand-border bg-white"}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-display font-bold text-brand-dark text-sm md:text-base pr-4">{q}</span>
        <ChevronDown
          size={20}
          className={`text-brand-text-light shrink-0 transition-transform duration-200 ${open ? "rotate-180 text-brand-orange" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-brand-text-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="section-label mb-3">FAQ</p>
            <h1 className="section-title mb-4">Veelgestelde vragen</h1>
            <p className="text-lg text-brand-text-light">
              Alles wat je wilt weten over Smart or Fast.
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          {/* Contact */}
          <div className="card text-center mt-12">
            <h3 className="font-display font-bold text-brand-dark mb-2">
              Vraag niet beantwoord?
            </h3>
            <p className="text-sm text-brand-text-light mb-4">
              Stuur een mail naar{" "}
              <a href="mailto:info@smartorfast.nl" className="text-brand-orange font-semibold hover:underline">
                info@smartorfast.nl
              </a>{" "}
              en we helpen je binnen 24 uur.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4 font-display">
            Overtuigd? Start vandaag.
          </h2>
          <p className="text-gray-400 mb-8">
            22 lessen, 3 modules, 1 programma dat het verschil maakt.
          </p>
          <Link href="/pricing" className="btn-primary inline-block">
            Bekijk de prijzen →
          </Link>
        </div>
      </section>
    </>
  );
}
