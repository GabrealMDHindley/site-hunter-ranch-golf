"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV, LINKS } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "bg-ink/90 backdrop-blur border-b border-paper/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-wrap items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-paper">
            Hunter Ranch
          </span>
          <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted sm:block">
            Golf Course · Paso Robles
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-sm transition hover:text-gold ${
                pathname === n.href ? "text-gold" : "text-paper/80"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <a href={LINKS.teeTimes} target="_blank" rel="noopener" className="btn-gold !px-5 !py-2.5">
            Book a Tee Time
          </a>
        </nav>

        <button
          type="button"
          className="lg:hidden rounded p-2 text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-paper/10 bg-ink/95 px-5 pb-6 pt-2 backdrop-blur lg:hidden">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="block border-b border-paper/5 py-3 text-paper/90 hover:text-gold"
            >
              {n.label}
            </Link>
          ))}
          <a href={LINKS.teeTimes} target="_blank" rel="noopener" className="btn-gold mt-4 w-full">
            Book a Tee Time
          </a>
        </nav>
      )}
    </header>
  );
}
