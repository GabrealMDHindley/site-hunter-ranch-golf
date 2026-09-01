import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { HOTELS, LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Specials & Packages",
  description:
    "Hunter Ranch golf specials: holiday gift-card offer and Stay & Play hotel packages with Paso Robles partner hotels — golf & cart, appetizer, pro-shop discount, and a wine tasting pass for two.",
};

export default function SpecialsPage() {
  return (
    <>
      <section className="pt-36 pb-14 sm:pt-44">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal>
            <div className="label">Specials &amp; Packages</div>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
              More ways to play
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-wrap gap-8 px-5 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-gold/40 bg-gradient-to-br from-raised to-surface p-9">
              <div>
                <div className="label">Gift Card Special</div>
                <h2 className="mt-3 font-display text-3xl font-semibold">
                  $125 gift card for <span className="text-gold">$100</span>
                </h2>
                <p className="mt-4 text-paper/85">
                  Now through December 25, purchase a $125 Golf Gift Card for
                  only $100. Save some green and treat the golf lover in your
                  life to the perfect holiday gift.
                </p>
              </div>
              <a href={LINKS.shop} target="_blank" rel="noopener" className="btn-gold mt-8 self-start">
                Buy gift cards
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full rounded-3xl border border-paper/10 bg-surface p-9">
              <div className="label">Hotel Partners</div>
              <h2 className="mt-3 font-display text-3xl font-semibold">
                “Stay &amp; Play” packages
              </h2>
              <p className="mt-4 text-paper/85">
                Our partner hotels — just moments from Hunter Ranch — feature
                outstanding accommodations, excellent amenities, and exceptional
                customer service. Every package includes golf &amp; cart at the
                Central Coast&apos;s premier course, a complimentary appetizer
                at the Hunter Ranch Grill, 15% off selected logo items at the
                Pro Shop, and a wine tasting pass for two at a stellar Paso
                Robles winery.
              </p>
              <ul className="mt-6 space-y-3">
                {HOTELS.map((h) => (
                  <li key={h.name} className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-paper/10 bg-ink px-5 py-4">
                    <span className="font-semibold text-paper">{h.name}</span>
                    <span className="text-sm text-muted">
                      {h.note}:{" "}
                      <a className="tabular-nums text-gold hover:underline" href={`tel:${h.phone.replace(/\D/g, "")}`}>
                        {h.phone}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">
                Book directly with our partner hotels and they will coordinate
                your “Stay &amp; Play” package.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-paper/10 bg-surface py-16">
        <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-6 px-5">
          <div>
            <div className="label">Hunter Ranch E-Specials Club</div>
            <h2 className="mt-2 font-display text-2xl font-semibold">
              Be first to hear about events, course updates &amp; seasonal offers
            </h2>
          </div>
          <a href="https://www.hunterranchgolf.com/e-specials-club" target="_blank" rel="noopener" className="btn-gold">
            Join the newsletter
          </a>
        </div>
      </section>
    </>
  );
}
