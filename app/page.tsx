import Link from "next/link";
import { Brain, Zap, Target, ChevronRight, Check, Star, Shield, Clock, Globe } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-brand-orange/5" />
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-brand-orange-light text-brand-orange text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-lg mb-6">
                <Zap size={14} /> UEFA A Licensed Coach • 400+ spelers getraind
              </div>

              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 font-display">
                Word de speler die{" "}
                <span className="text-brand-orange underline decoration-brand-orange/30 underline-offset-4">
                  elke trainer
                </span>{" "}
                wil opstellen.
              </h1>

              <p className="text-lg text-brand-text-light leading-relaxed mb-8 max-w-lg">
                Het online trainingsprogramma voor individuele voetbalontwikkeling.
                Verbeter je spelintelligentie, explosiviteit en techniek — ongeacht
                je positie of het systeem van je team.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link href="/pricing" className="btn-primary text-center">
                  Begin vandaag →
                </Link>
                <Link href="/modules" className="btn-secondary text-center">
                  Bekijk de modules
                </Link>
              </div>

              <div className="flex gap-10">
                {[
                  { num: "22", label: "Videolessen" },
                  { num: "8", label: "Weken programma" },
                  { num: "2", label: "Talen" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-black text-brand-orange">{stat.num}</div>
                    <div className="text-xs text-brand-text-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Module preview cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  module: "SMART",
                  title: "Spelintelligentie",
                  desc: "Scanning, positie kiezen, beslissingssnelheid",
                  icon: <Brain size={24} />,
                  color: "brand-orange",
                },
                {
                  module: "FAST",
                  title: "Fysieke explosiviteit",
                  desc: "Snelheid, plyometrie, agility, kracht",
                  icon: <Zap size={24} />,
                  color: "brand-cyan",
                },
                {
                  module: "SKILLS",
                  title: "Technische verfijning",
                  desc: "Aanname, passing, 1v1, afronding",
                  icon: <Target size={24} />,
                  color: "brand-dark",
                },
              ].map((m) => (
                <Link
                  href="/modules"
                  key={m.module}
                  className="group card flex items-center gap-5 hover:border-brand-orange/20 transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-${m.color}/10 flex items-center justify-center text-${m.color} shrink-0`}>
                    {m.icon}
                  </div>
                  <div className="flex-1">
                    <div className={`text-[10px] font-bold tracking-[3px] text-${m.color}`}>
                      {m.module}
                    </div>
                    <div className="text-base font-bold text-brand-dark mt-0.5">
                      {m.title}
                    </div>
                    <div className="text-sm text-brand-text-light">{m.desc}</div>
                  </div>
                  <ChevronRight size={18} className="text-brand-text-light/40 group-hover:text-brand-orange transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Trust bar */}
        <div className="bg-brand-surface border-t border-brand-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6">
              {["Alle posities", "12-16 jaar", "NL + Engels", "Geen gym nodig"].map((t) => (
                <span key={t} className="text-xs font-medium text-brand-text-light flex items-center gap-1.5">
                  <Check size={14} className="text-brand-green" /> {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
              ))}
              <span className="text-xs text-brand-text-light ml-1">4.9/5</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PIJNPUNTEN ===== */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Herken je dit?</p>
            <h2 className="section-title">
              Je traint hard, maar het verschil blijft uit.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "\"Ik train hard, maar word niet beter\"",
                desc: "Je gaat naar elke training, doet alles wat de coach zegt, maar je merkt dat je niet echt vooruit gaat. Andere spelers lijken je in te halen terwijl jij net zo hard werkt.",
              },
              {
                title: "\"Mijn coach legt alleen teamtactiek uit\"",
                desc: "In de teamtraining leer je hoe het elftal moet spelen, maar niemand vertelt jou wat JIJ specifiek moet doen om beter te worden. Er is geen individueel plan.",
              },
              {
                title: "\"YouTube video's helpen niet echt\"",
                desc: "Je hebt tientallen drills en tutorials bekeken, maar het is een chaos aan losse tips zonder structuur. Je weet niet waar je moet beginnen.",
              },
              {
                title: "\"Een personal trainer is te duur\"",
                desc: "Individuele training kost €50-100 per sessie. Dat is voor de meeste gezinnen niet vol te houden. Maar je wilt wél die persoonlijke aandacht en structuur.",
              },
            ].map((pain, i) => (
              <div key={i} className="card relative">
                <div className="orange-topbar" />
                <h3 className="font-display font-bold text-lg text-brand-dark mb-2 pt-2">
                  {pain.title}
                </h3>
                <p className="text-sm text-brand-text-light leading-relaxed">
                  {pain.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OPLOSSING ===== */}
      <section className="bg-brand-surface py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">De oplossing</p>
            <h2 className="section-title mb-5">Smart or Fast lost dit op.</h2>
            <p className="text-lg text-brand-text-light max-w-2xl mx-auto leading-relaxed">
              Een compleet, gestructureerd online programma dat jou als individuele
              speler beter maakt — ongeacht bij welke club je speelt, in welke
              formatie, of op welke positie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: <Target size={28} />,
                title: "100% Individueel",
                desc: "Alle principes gaan over JOUW acties. Werkt in elk systeem, elke formatie, bij elke club.",
              },
              {
                icon: <Shield size={28} />,
                title: "Bewezen methodes",
                desc: "Ontwikkeld door een UEFA A coach met professionele jeugdervaring. Geen theorie, maar praktijk.",
              },
              {
                icon: <Clock size={28} />,
                title: "Op jouw tempo",
                desc: "Volg het programma wanneer het jou uitkomt. 24/7 toegang, op elk apparaat, in jouw taal.",
              },
            ].map((usp, i) => (
              <div key={i} className="card text-center">
                <div className="w-14 h-14 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto mb-4">
                  {usp.icon}
                </div>
                <h3 className="font-display font-bold text-brand-dark mb-2">
                  {usp.title}
                </h3>
                <p className="text-sm text-brand-text-light leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WAT JE LEERT ===== */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Resultaten</p>
            <h2 className="section-title">Na dit programma kun jij...</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { title: "Slimmer spelen", desc: "De bal ontvangen en direct de juiste beslissing nemen, omdat je al gescand hebt vóórdat de bal kwam." },
              { title: "Sneller zijn", desc: "De eerste 5 meter van elke sprint winnen met bewezen explosiviteitstraining." },
              { title: "Betere keuzes maken", desc: "Weten wanneer je moet dribbelen, passen of schieten — in elke situatie." },
              { title: "Fysiek sterker worden", desc: "Een 8-weken fysiek programma volgen dat past bij jouw leeftijd en niveau." },
              { title: "Duels domineren", desc: "1v1 situaties winnen, zowel aanvallend als verdedigend." },
              { title: "Mentaal scherper zijn", desc: "Presteren onder druk wanneer het ertoe doet." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl hover:bg-brand-surface transition-colors">
                <div className="w-8 h-8 rounded-lg bg-brand-green-light text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={18} strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-brand-dark">{item.title}</h3>
                  <p className="text-sm text-brand-text-light leading-relaxed mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OVER DE COACH (teaser) ===== */}
      <section className="bg-brand-surface py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="card md:flex items-center gap-12">
            {/* Photo placeholder */}
            <div className="w-full md:w-80 h-64 md:h-80 bg-gradient-to-br from-brand-dark to-brand-dark/80 rounded-xl flex items-center justify-center shrink-0 mb-6 md:mb-0">
              <div className="text-center text-white/60">
                <div className="text-5xl mb-2">⚽</div>
                <div className="text-xs">Foto coach</div>
              </div>
            </div>

            <div>
              <p className="section-label mb-3">Over de coach</p>
              <h2 className="section-title mb-4">Mosi van der Knaap</h2>
              <p className="text-brand-text-light leading-relaxed mb-4">
                Als UEFA A licensed coach en voormalig hoofdtrainer van een professioneel
                jeugdteam werk ik al jaren met jonge voetballers die dezelfde droom hebben:
                beter worden dan gisteren.
              </p>
              <p className="text-brand-text-light leading-relaxed mb-6">
                Smart or Fast is alles wat ik heb geleerd in het professionele jeugdvoetbal,
                gebundeld in een programma dat elke speler zelfstandig kan volgen.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "UEFA A Licensed",
                  "Voormalig hoofdtrainer prof. jeugdteam",
                  "Spitta Academy",
                  "400+ spelers",
                ].map((c) => (
                  <span key={c} className="text-xs font-semibold bg-brand-orange-light text-brand-orange px-3 py-1.5 rounded-md">
                    {c}
                  </span>
                ))}
              </div>

              <Link href="/over" className="text-sm font-bold text-brand-orange hover:underline">
                Lees meer over de coach →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Ervaringen</p>
            <h2 className="section-title">Wat spelers en ouders zeggen</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                quote: "Sinds mijn zoon dit programma volgt, zien we echt verschil op het veld. Hij maakt betere keuzes aan de bal en is merkbaar sneller in zijn eerste meters.",
                name: "Vader van speler (14)",
                role: "Ouder",
              },
              {
                quote: "De scanning-lessen hebben mijn spel compleet veranderd. Ik wist niet dat ik zo veel kon verbeteren door gewoon vóór de bal te kijken.",
                name: "Speler (15)",
                role: "Middenvelder",
              },
              {
                quote: "De 1v1 verdedigingslessen zijn echt goed. Ik win nu veel meer duels omdat ik weet hoe ik mijn tegenstander moet sturen. Mijn coach vroeg wat ik anders doe!",
                name: "Speler (14)",
                role: "Verdediger",
              },
            ].map((t, i) => (
              <div key={i} className="card relative">
                <div className="orange-topbar" />
                <div className="flex gap-1 mb-4 pt-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-brand-text leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-bold text-brand-dark">{t.name}</div>
                  <div className="text-xs text-brand-text-light">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-5 font-display">
            Klaar om het verschil te maken?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
            Elke dag dat je wacht, is een dag dat een andere speler voorsprong neemt.
            Start vandaag en merk binnen 2 weken het eerste verschil op het veld.
          </p>

          <Link href="/pricing" className="btn-primary inline-block !text-lg !px-12 !py-5">
            Start vandaag voor €97 →
          </Link>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { icon: <Shield size={14} />, text: "UEFA A licensed coach" },
              { icon: <Globe size={14} />, text: "NL + Engels" },
              { icon: <Clock size={14} />, text: "Levenslang toegang" },
              { icon: <Zap size={14} />, text: "Direct starten" },
            ].map((b, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-gray-400">
                {b.icon} {b.text}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
