import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { OUTINGS_SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events & Outings",
  description:
    "The Central Coast's best golf event venue. Tournaments and group outings with full-service planning: formats, scorecards, cart signs, specialty holes, scoring, prize tables, and custom catering.",
};

export default function EventsPage() {
  return (
    <>
      <section className="pt-36 pb-14 sm:pt-44">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal>
            <div className="label">Tournaments &amp; Group Outings</div>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
              The Central Coast&apos;s best golf event venue
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-paper/85">
              Creating, managing, and running a group golf event is a tough job
              for anyone. That&apos;s why so many groups trust the professional
              staff at Hunter Ranch to make their events a huge success —
              attentive, responsive, and built around your day. Book up to one
              year in advance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?interest=outing-event" className="btn-gold">
                Start planning your event
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-wrap px-5">
        <Reveal>
          <Image
            src="/photos/twin-oaks-green.jpg"
            alt="Championship green framed by century-old oaks at Hunter Ranch"
            width={1000}
            height={750}
            className="max-h-[28rem] w-full rounded-3xl border border-paper/10 object-cover"
            sizes="(min-width: 1152px) 1152px, 100vw"
          />
        </Reveal>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal>
            <div className="label">What we&apos;ll do for your group</div>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Full-service, first tee to prize table
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {OUTINGS_SERVICES.map((s, i) => (
              <Reveal key={s} delay={Math.min(i * 0.05, 0.3)}>
                <li className="flex gap-4 rounded-xl border border-paper/10 bg-surface p-5 text-sm leading-relaxed text-paper/90">
                  <span aria-hidden className="mt-0.5 text-gold">
                    ⛳
                  </span>
                  {s}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.2} className="mt-10 rounded-2xl border border-paper/10 bg-gradient-to-br from-raised to-surface p-8">
            <p className="max-w-3xl font-display text-xl leading-relaxed text-paper/95">
              Nestled among rolling hills, grape vineyards and beautiful oak
              trees, the Australian-themed clubhouse at Hunter Ranch provides a
              “Relaxation Quotient” unparalleled on the Central Coast.{" "}
              <span className="text-gold">What can we create for you?</span>
            </p>
            <Link href="/contact?interest=outing-event" className="btn-gold mt-6">
              Talk to our events team
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
