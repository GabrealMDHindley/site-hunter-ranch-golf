import Link from "next/link";
import { BIZ, HOURS, LINKS, NAV } from "@/lib/site";

const SOCIALS = [
  { href: LINKS.facebook, label: "Facebook" },
  { href: LINKS.instagram, label: "Instagram" },
  { href: LINKS.twitter, label: "X (Twitter)" },
];

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-surface">
      <div className="mx-auto grid max-w-wrap gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-2xl font-semibold">Hunter Ranch</div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Championship golf atop the highest point in Paso Robles — century-old
            oaks, natural lakes, vineyard views, and no homes in sight.
          </p>
          <a href={LINKS.teeTimes} target="_blank" rel="noopener" className="btn-gold mt-5 !px-5 !py-2.5">
            Book a Tee Time
          </a>
        </div>

        <div>
          <div className="label">Visit</div>
          <address className="mt-3 space-y-1 text-sm not-italic text-paper/85">
            <div>{BIZ.street}</div>
            <div>
              {BIZ.city}, {BIZ.state} {BIZ.zip}
            </div>
            <a className="block text-gold hover:underline" href={BIZ.phoneHref}>
              {BIZ.phone}
            </a>
            <a className="block text-gold hover:underline" href={BIZ.directions} target="_blank" rel="noopener">
              Get Directions →
            </a>
          </address>
        </div>

        <div>
          <div className="label">Hours</div>
          <ul className="mt-3 space-y-1.5 text-sm text-paper/85">
            {HOURS.map((h) => (
              <li key={h.label} className="flex justify-between gap-4">
                <span className="text-muted">{h.label}</span>
                <span className="tabular-nums">{h.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="label">Explore</div>
          <ul className="mt-3 space-y-1.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-paper/85 hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={LINKS.shop} target="_blank" rel="noopener" className="text-paper/85 hover:text-gold">
                Gift Cards & Players Club
              </a>
            </li>
            <li>
              <a href={LINKS.careers} target="_blank" rel="noopener" className="text-paper/85 hover:text-gold">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-wrap flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted sm:flex-row">
          <div>
            © {new Date().getFullYear()} {BIZ.name}. All rights reserved.
          </div>
          <div className="flex gap-5">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener" className="hover:text-gold">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
