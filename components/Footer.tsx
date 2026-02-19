import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="font-display mb-3">
              <span className="text-lg font-black text-brand-orange">SMART</span>
              <span className="text-sm text-gray-500 font-light italic mx-1">or</span>
              <span className="text-lg font-black text-white">FAST</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Individual Football Development Program.
              Spelintelligentie, explosiviteit en techniek voor jonge voetballers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4">Pagina&apos;s</h4>
            {[
              { label: "Home", href: "/" },
              { label: "Modules", href: "/modules" },
              { label: "Prijzen", href: "/pricing" },
              { label: "Over de coach", href: "/over" },
              { label: "FAQ", href: "/faq" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-gray-400 hover:text-white transition-colors py-1.5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4">Juridisch</h4>
            {["Algemene voorwaarden", "Privacybeleid", "Retourbeleid"].map((item) => (
              <p key={item} className="text-sm text-gray-400 py-1.5">{item}</p>
            ))}
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4">Volg ons</h4>
            {[
              { label: "Instagram", handle: "@smartorfast" },
              { label: "TikTok", handle: "@smartorfast" },
              { label: "YouTube", handle: "@SmartorFast" },
            ].map((s) => (
              <div key={s.label} className="py-1.5">
                <span className="text-sm text-gray-400">{s.label}: </span>
                <span className="text-sm text-brand-orange">{s.handle}</span>
              </div>
            ))}
            <p className="text-sm text-gray-400 mt-3">
              info@smartorfast.nl
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Spitta Academy. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
