# Smart or Fast — Landingspagina

Multi-page Next.js landingspagina voor het Smart or Fast online voetbalprogramma.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Fonts**: Montserrat (headlines) + DM Sans (body) via Google Fonts
- **Deployment**: Vercel (auto-deploy vanuit GitHub)

## Pagina's
| Route | Pagina | Inhoud |
|-------|--------|--------|
| `/` | Home | Hero, pijnpunten, oplossing, uitkomsten, coach teaser, testimonials, CTA |
| `/modules` | Modules | Gedetailleerd overzicht van SMART (8), FAST (8) en SKILLS (6) lessen |
| `/pricing` | Prijzen | 3 tiers (€47/€97/€197), vergelijking met personal training |
| `/over` | Over de coach | Bio, credentials, coaching filosofie |
| `/faq` | FAQ | 10 veelgestelde vragen met accordion |

## Setup

```bash
# Clone & install
git clone <jouw-repo-url>
cd smartorfast
npm install

# Development
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

## Deploy naar Vercel

1. Push naar GitHub
2. Verbind repo met Vercel (vercel.com/new)
3. Vercel detecteert Next.js automatisch
4. Custom domain instellen: `smartorfast.nl`

## TODO

### Voordat je live gaat:
- [ ] Professionele foto toevoegen (vervang placeholder in `/over` en homepage)
- [ ] Echte testimonials toevoegen (vervang placeholders op homepage)
- [ ] Teachable checkout links invullen (`href="#"` in `/pricing`)
- [ ] Domein registreren: `smartorfast.nl`
- [ ] Social handles claimen: `@smartorfast`
- [ ] Juridische pagina's toevoegen (AV, privacy, retour)
- [ ] Google Analytics 4 instellen
- [ ] Open Graph / social preview afbeeldingen maken
- [ ] Favicon toevoegen (S/F monogram)

### Na launch:
- [ ] Lead magnet pagina bouwen (gratis 5 Drills PDF)
- [ ] Email nurture sequence opzetten (ConvertKit)
- [ ] Google Ads campagne starten

## Branding
- **Orange (primary):** `#FF5C00`
- **Dark (secondary):** `#111111`
- **Cyan (accent):** `#00C2FF`
- **Green (success):** `#00D26A`

Zie `tailwind.config.ts` voor het volledige kleurenpalet.

## Licentie
© 2026 Spitta Academy. Alle rechten voorbehouden.
