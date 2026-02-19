import Link from "next/link";
import { Brain, Zap, Target, Eye, MapPin, Timer, Move, Shield, Flame, Dumbbell, Wind, Gauge, Heart, PlayCircle, Crosshair, Footprints, CircleDot } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modules — Smart or Fast",
  description: "3 modules, 22 lessen: SMART (spelintelligentie), FAST (explosiviteit) en SKILLS (techniek). Ontdek het complete programma.",
};

const MODULES = [
  {
    id: "smart",
    label: "SMART",
    title: "Individuele spelintelligentie",
    subtitle: "Leer de principes die topspelers onderscheiden van de rest.",
    desc: "8 videolessen over de individuele beslissingen die jij op het veld maakt. Geen teamtactiek, maar persoonlijke spelprincipes die universeel toepasbaar zijn in elke formatie.",
    color: "brand-orange",
    colorBg: "brand-orange-light",
    icon: <Brain size={28} />,
    format: "Tactical board animaties + voiceover",
    lessons: [
      { title: "Scanning", sub: "Kijk vóórdat je ontvangt", desc: "Wat is scanning en waarom doen topspelers het 6-8x per actie? De 3 momenten van scannen.", icon: <Eye size={18} /> },
      { title: "Positie kiezen", sub: "Hoe bied je jezelf aan?", desc: "Uit de schaduw van je tegenstander stappen. Hoeken creëren en passlijn open houden.", icon: <MapPin size={18} /> },
      { title: "Beslissingssnelheid", sub: "Eerste contact, draaien of direct?", desc: "De beslisboom: wanneer eerste contact, wanneer draaien, wanneer direct spelen.", icon: <Timer size={18} /> },
      { title: "Ruimte herkennen", sub: "Waar is de ruimte?", desc: "Ruimte vóór je, achter de verdediging, tussen de linies. Timing van je loopactie.", icon: <Move size={18} /> },
      { title: "1v1 verdedigen", sub: "Dwing je tegenstander jouw kant op", desc: "Lichaamspositie, afstand management, wanneer ingrijpen, de jab-step.", icon: <Shield size={18} /> },
      { title: "Individueel pressing", sub: "Wanneer zet JIJ druk?", desc: "Triggers herkennen, pressinghoek bepalen, herstellen na mislukte pressing.", icon: <Flame size={18} /> },
      { title: "Transities", sub: "De eerste 3 seconden", desc: "Mentale switch na balverlies/balverovering. Jouw eerste actie.", icon: <Zap size={18} /> },
      { title: "Positiespecifiek", sub: "Jouw rol, jouw principes", desc: "Hoe passen alle voorgaande principes bij jouw positie? Persoonlijk actieplan.", icon: <Target size={18} /> },
    ],
  },
  {
    id: "fast",
    label: "FAST",
    title: "Fysieke explosiviteit & snelheid",
    subtitle: "Word sneller, explosiever en sterker — zonder gym.",
    desc: "8 videolessen met een compleet 8-weken programma. Alle oefeningen zijn uit te voeren op het veld of thuis, zonder apparatuur. Aparte varianten voor 12-14 en 14-16 jaar.",
    color: "brand-cyan",
    colorBg: "brand-cyan-light",
    icon: <Zap size={28} />,
    format: "On-field demonstraties door coach",
    lessons: [
      { title: "Fundament", sub: "Bewegingskwaliteit", desc: "Basisbeweegpatronen: squat, lunge, hinge. Mobiliteit voor voetballers. Zelftest.", icon: <Dumbbell size={18} /> },
      { title: "Explosiviteit", sub: "De eerste 5 meter", desc: "Starthouding optimaliseren. 3-point start, split stance, reactieve starts.", icon: <Zap size={18} /> },
      { title: "Plyometrie", sub: "Springkracht & reactief vermogen", desc: "Box jumps, depth jumps, bounding. 8-weken progressieschema. Leeftijdsaangepast.", icon: <Flame size={18} /> },
      { title: "Agility", sub: "Richtingsveranderingen", desc: "Deceleration, cutting (45°/90°/180°), reactieve agility. 6 drills met cones.", icon: <Wind size={18} /> },
      { title: "Kracht", sub: "Bodyweight training", desc: "Squat variaties, Nordic hamstring curls, core stability, push-up progressies.", icon: <Dumbbell size={18} /> },
      { title: "Snelheid", sub: "Topsnelheid & sprintmechaniek", desc: "Kniehefte, voetplaatsing, armgebruik. Flying sprints, wicket runs.", icon: <Gauge size={18} /> },
      { title: "Uithoudingsvermogen", sub: "Fit in de 90e minuut", desc: "Aerobe basis vs. anaerobe pieken. 4x4 methode, herhaalde sprints.", icon: <Heart size={18} /> },
      { title: "Het complete programma", sub: "8 weken samengevoegd", desc: "Variant A (12-14) en B (14-16). Planning rond je clubtrainingen. Downloadbaar schema.", icon: <Target size={18} /> },
    ],
  },
  {
    id: "skills",
    label: "SKILLS",
    title: "Individuele techniek",
    subtitle: "Beheers de bal onder elke omstandigheid.",
    desc: "6 videolessen over technische verfijning met focus op uitvoering in wedstrijdsituaties. Van eerste aanname tot afronding — alles wat je nodig hebt om technisch te domineren.",
    color: "brand-dark",
    colorBg: "brand-surface",
    icon: <Target size={28} />,
    format: "On-field demonstraties + drill breakdowns",
    lessons: [
      { title: "Eerste aanname", sub: "De bal is jouw vriend", desc: "Open vs. gesloten aanname. Aanname onder druk. 10 individuele drills.", icon: <CircleDot size={18} /> },
      { title: "Passing", sub: "Timing, gewicht en richting", desc: "Binnenkant, wreef, buitenkant, chip. Wall-passing drills (solo trainbaar).", icon: <Crosshair size={18} /> },
      { title: "1v1 aanvallend", sub: "Dribbelen met doel", desc: "5 moves die écht werken. Tempowisseling als sleutel. Progressie passief → actief.", icon: <Footprints size={18} /> },
      { title: "Afronding", sub: "Scoren is een vaardigheid", desc: "Plaatsbal, pegel, afronding onder druk. Scoren uit verschillende hoeken.", icon: <Target size={18} /> },
      { title: "Koppen", sub: "Veilig en effectief", desc: "Leeftijdsrichtlijnen en verantwoord trainen. Aanvallend vs. verdedigend koppen.", icon: <CircleDot size={18} /> },
      { title: "Onder druk presteren", sub: "Techniek in wedstrijdsituaties", desc: "Alles samenbrengen. Oefenvormen die wedstrijddruk simuleren. Mentale focus.", icon: <Flame size={18} /> },
    ],
  },
];

export default function ModulesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <p className="section-label mb-3">Het programma</p>
          <h1 className="section-title mb-4">
            3 modules. 22 lessen. 1 compleet programma.
          </h1>
          <p className="text-lg text-brand-text-light max-w-2xl mx-auto">
            Elke module richt zich op een ander aspect van jouw individuele ontwikkeling.
            Samen vormen ze het complete pakket om het verschil te maken op het veld.
          </p>
        </div>
      </section>

      {/* Modules */}
      {MODULES.map((mod, mi) => (
        <section
          key={mod.id}
          id={mod.id}
          className={`py-20 ${mi % 2 === 0 ? "bg-brand-surface" : "bg-white"}`}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            {/* Module header */}
            <div className="md:flex items-start gap-10 mb-12">
              <div className={`w-16 h-16 rounded-2xl bg-${mod.color}/10 text-${mod.color} flex items-center justify-center shrink-0 mb-4 md:mb-0`}>
                {mod.icon}
              </div>
              <div>
                <div className={`text-xs font-bold tracking-[3px] text-${mod.color} mb-1`}>
                  {mod.label} MODULE • {mod.lessons.length} LESSEN
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-brand-dark mb-2 font-display">
                  {mod.title}
                </h2>
                <p className="text-lg text-brand-orange font-semibold mb-3">
                  {mod.subtitle}
                </p>
                <p className="text-brand-text-light leading-relaxed max-w-2xl">
                  {mod.desc}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs bg-brand-surface border border-brand-border px-3 py-1.5 rounded-md text-brand-text-light">
                  <PlayCircle size={14} /> Videoformat: {mod.format}
                </div>
              </div>
            </div>

            {/* Lessons grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {mod.lessons.map((lesson, li) => (
                <div key={li} className="card flex items-start gap-4 hover:border-brand-orange/20 transition-all">
                  <div className={`w-10 h-10 rounded-lg bg-${mod.color}/10 text-${mod.color} flex items-center justify-center shrink-0`}>
                    {lesson.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-brand-text-light bg-brand-surface px-2 py-0.5 rounded">
                        Les {li + 1}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-brand-dark mt-1">
                      {lesson.title}
                    </h3>
                    <p className="text-xs text-brand-orange font-semibold mt-0.5">
                      {lesson.sub}
                    </p>
                    <p className="text-sm text-brand-text-light leading-relaxed mt-1.5">
                      {lesson.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4 font-display">
            Klaar om te starten?
          </h2>
          <p className="text-gray-400 mb-8">
            Kies het pakket dat bij je past en begin vandaag met je individuele ontwikkeling.
          </p>
          <Link href="/pricing" className="btn-primary inline-block">
            Bekijk de prijzen →
          </Link>
        </div>
      </section>
    </>
  );
}
