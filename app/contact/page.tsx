import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { BIZ, HOURS, LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Hunter Ranch Golf Course — 4041 Highway 46 East, Paso Robles, CA 93446. Phone (805) 237-7444. Tee times, outings, Players Club, and The Hunter Ranch Bar & Grill.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { interest?: string };
}) {
  return (
    <>
      <section className="pt-36 pb-12 sm:pt-44">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal>
            <div className="label">Contact Us</div>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
              Come find us on the hill
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-wrap gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="rounded-3xl border border-paper/10 bg-surface p-8 sm:p-10">
              <h2 className="font-display text-2xl font-semibold">Send us a message</h2>
              <p className="mt-2 text-sm text-muted">
                Tee times, outings, membership, lessons, or the Bar &amp; Grill —
                we&apos;ll get right back to you.
              </p>
              <div className="mt-8">
                <ContactForm defaultInterest={searchParams?.interest} />
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-paper/10 bg-surface p-7">
                <div className="label">Visit</div>
                <address className="mt-4 space-y-1 text-paper/90 not-italic">
                  <div className="font-display text-xl font-semibold">{BIZ.name}</div>
                  <div>{BIZ.street}</div>
                  <div>
                    {BIZ.city}, {BIZ.state} {BIZ.zip}
                  </div>
                </address>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  <a className="text-gold hover:underline" href={BIZ.phoneHref}>
                    {BIZ.phone}
                  </a>
                  <a className="text-gold hover:underline" href={BIZ.directions} target="_blank" rel="noopener">
                    Get Directions →
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="rounded-2xl border border-paper/10 bg-surface p-7">
                <div className="label">Hours of Operation</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {HOURS.map((h) => (
                    <li key={h.label} className="flex justify-between gap-4 text-paper/90">
                      <span className="text-muted">{h.label}</span>
                      <span className="tabular-nums">{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="rounded-2xl border border-paper/10 bg-surface p-7">
                <div className="label">Quick links</div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a className="text-paper/90 hover:text-gold" href={LINKS.teeTimes} target="_blank" rel="noopener">
                      Book a tee time online →
                    </a>
                  </li>
                  <li>
                    <a className="text-paper/90 hover:text-gold" href={LINKS.shop} target="_blank" rel="noopener">
                      Gift cards &amp; Players Club →
                    </a>
                  </li>
                  <li>
                    <a className="text-paper/90 hover:text-gold" href={LINKS.careers} target="_blank" rel="noopener">
                      Careers at Hunter Ranch →
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
