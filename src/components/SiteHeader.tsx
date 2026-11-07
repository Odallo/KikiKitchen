"use client";

import { useState } from "react";
import { ArrowRight, Flame, Menu, X } from "lucide-react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Catering", href: "#catering" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex min-h-11 shrink-0 items-center gap-2 rounded-full sm:gap-2.5"
          aria-label="Kiki's Kitchen — back to top"
        >
          <span className="grid size-9 place-items-center rounded-full bg-ember-dark text-cream">
            <Flame className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-base font-bold tracking-tight sm:text-xl">
            Kiki&apos;s <span className="text-ember-dark">Kitchen</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-charcoal/70 transition-colors hover:text-ember-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#menu"
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-ember-dark px-3 text-sm font-semibold text-white transition-colors hover:bg-ember-deep sm:px-4"
          >
            Order<span className="hidden sm:inline">&nbsp;Now</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:bg-charcoal/5 md:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-charcoal/10 bg-cream md:hidden"
      >
        <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-4 py-3">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-charcoal/5 text-base font-medium text-charcoal"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#menu"
                onClick={() => setOpen(false)}
                className="mt-3 mb-2 flex min-h-12 items-center justify-center gap-2 rounded-full bg-ember-dark px-5 text-sm font-semibold text-white"
              >
                Order Now
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
