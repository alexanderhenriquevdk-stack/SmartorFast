"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Modules", href: "/modules" },
  { label: "Over de coach", href: "/over" },
  { label: "Prijzen", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 font-display">
            <span className="text-xl font-black text-brand-orange">SMART</span>
            <span className="text-sm text-brand-text-light font-light italic">or</span>
            <span className="text-xl font-black text-brand-dark">FAST</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-text-light hover:text-brand-dark transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/pricing" className="btn-primary !py-2.5 !px-6 !text-sm">
              Start nu →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-brand-dark"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-brand-border pt-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-brand-text-light hover:text-brand-dark"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/pricing"
              onClick={() => setOpen(false)}
              className="block mt-3 btn-primary text-center !py-3"
            >
              Start nu →
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
