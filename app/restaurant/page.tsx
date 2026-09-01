import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import VideoSection from "@/components/VideoSection";
import { MENU } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Hunter Ranch Bar & Grill",
  description:
    "Breakfast and lunch seven days a week with majestic views of rolling hills, vineyards, and the golf course. Handcrafted beers & cocktails, indoor and outdoor seating in Paso Robles.",
};

export default function RestaurantPage() {
  return (
    <>
      <section className="relative flex min-h-[70svh] items-end overflow-hidden">
        <Image
          src="/photos/porch-dining.jpg"
          alt="Covered porch dining at The Hunter Ranch Bar & Grill overlooking the course"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative z-10 mx-auto w-full max-w-wrap px-5 pb-16 pt-40">
          <Reveal>
            <div className="label">Restaurant &amp; Bar</div>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
              The Hunter Ranch Bar &amp; Grill
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-paper/90">
              Golfers and non-golfers alike are welcome for a great meal and
              majestic views of rolling hills, vineyards, and the golf course —
              with an outstanding selection of handcrafted beers &amp;
              cocktails. Indoor and outdoor seating.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-1 text-sm text-paper/85">
              <li>Mon–Thu · 8am–5pm · breakfast till 11am</li>
              <li>Fri–Sun · 7am–5pm · breakfast till 11am</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Clubhouse walkthrough slot — appears automatically when delivered */}
      <VideoSection
        subjectSlug="clubhouse"
        family="walkthrough"
        label="Step Inside"
        title="Inside the clubhouse"
        blurb="Walk the Australian Outback-style clubhouse — from the hilltop porch to the grill — in one continuous take."
        fallbackPoster="/photos/porch-dining.jpg"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal>
            <div className="label">The Menu</div>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
              From breakfast burritos to tri tip
            </h2>
          </Reveal>
          <div className="mt-12 columns-1 gap-8 md:columns-2 xl:columns-3 [&>*]:mb-8 [&>*]:break-inside-avoid">
            {MENU.map((section, i) => (
              <Reveal key={section.title} delay={Math.min(i * 0.06, 0.3)}>
                <div className="rounded-2xl border border-paper/10 bg-surface p-7">
                  <h3 className="font-display text-2xl font-semibold text-gold">{section.title}</h3>
                  {section.note && <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">{section.note}</p>}
                  <ul className="mt-5 space-y-4">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-sm font-semibold uppercase tracking-wide text-paper">
                            {item.name}
                          </span>
                          <span className="whitespace-nowrap font-semibold tabular-nums text-gold">
                            {item.price}
                          </span>
                        </div>
                        {item.desc && <p className="mt-1 text-sm leading-relaxed text-muted">{item.desc}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-4 text-sm text-muted">
            Yes — there&apos;s a menu for your dog, too. Menu items and prices
            as published by the Bar &amp; Grill; subject to change.
          </Reveal>
        </div>
      </section>
    </>
  );
}
