import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import VideoSection from "@/components/VideoSection";
import { AWARDS, LINKS, BIZ } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Course",
  description:
    "18 championship holes routed through century-old blue oaks and natural lakes in the tradition of Augusta National, Cypress Point and Pebble Beach. Designed by Ken Hunter and Mike McGinnis, 1994.",
};

export default function CoursePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal>
            <div className="label">The Course</div>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
              Classic design, decidedly Aussie twist
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-paper/85">
              Stands of century-old blue oaks and sparkling lakes frame your
              views, while a challenging and fun layout tests your mettle.
              Gently rolling terrain and undulating, well-bunkered greens are
              designed in the tradition of classic courses such as Augusta
              National, Cypress Point and Pebble Beach — thrilling and fun for
              novices and skilled players alike.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-wrap px-5">
        <Reveal>
          <Image
            src="/photos/clubhouse-18th.jpg"
            alt="The Australian Outback-style clubhouse above the 18th green"
            width={1000}
            height={750}
            priority
            className="w-full rounded-3xl border border-paper/10 object-cover"
            sizes="(min-width: 1152px) 1152px, 100vw"
          />
        </Reveal>
      </section>

      <VideoSection
        subjectSlug="course"
        family="flyover"
        label="From the Air"
        title="Tour the course by drone"
        blurb="A cinematic aerial pass over the oaks, lakes and rolling fairways — see the elevation changes that made Golf Digest call this the best course on the Central Coast."
        fallbackPoster="/photos/vineyard-vista.jpg"
      />

      {/* History */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto grid max-w-wrap gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="label">History · Golf Magazine, June 1995</div>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Shades of Australia in Central California
            </h2>
            <div className="mt-6 space-y-4 text-paper/85">
              <p>
                Hunter Ranch is a true rarity: an affordable, high-quality,
                daily-fee layout without a brand-name designer label.
                Co-designers <strong>Ken Hunter and Mike McGinnis</strong>,
                assisted by a pair of superintendents, moved very little dirt in
                creating a strategic layout routed through century-old blue oak
                trees.
              </p>
              <p>
                Dozens of flash-faced bunkers — the Mackenzie influence — and
                liberally contoured, hand-shaped bent grass greens, several
                sited well above fairway level, mark the design. Overlooking the
                oak-lined fairways, none of which run parallel, are clubhouse
                and restaurant buildings designed to resemble Australian outback
                ranch houses: rough redwood siding, tin roofs, and spacious
                covered porches.
              </p>
              <p className="font-display text-xl text-gold">G&apos;day, mate.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-paper/10 bg-ink p-8">
              <div className="label">Honors &amp; Awards</div>
              <ul className="mt-5 space-y-3 text-sm text-paper/85">
                {AWARDS.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span aria-hidden className="mt-0.5 text-gold">
                      ✦
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">
                Since opening, Hunter Ranch has been awarded 4 to 4½ stars every
                year by the readers of Golf Digest — among the highest-rated
                courses in California in the “Best Places to Play” edition.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Practice + instruction */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal>
            <div className="label">Beyond the 18</div>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Practice like the pros
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "All-Grass Practice Facility",
                d: "The finest on the Central Coast — all-grass hitting stations, a short-game area with bunkers, and multiple chipping and putting greens.",
              },
              {
                t: "Free 3-Hole Par-3 Course",
                d: "Complimentary for Hunter Ranch guests — perfect for beginners and juniors learning the game, or a warm-up before your round.",
              },
              {
                t: "Lessons & Junior Programs",
                d: "Instructional programs with PGA golf professionals for every skill level, plus PGA-inspired junior programs stressing fundamentals, etiquette, and pure enjoyment of the game.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-paper/10 bg-surface p-7">
                  <h3 className="font-display text-xl font-semibold text-gold">{c.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/85">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-8 text-sm text-muted">
            For lessons and clinics, contact the Golf Shop at{" "}
            <a className="text-gold hover:underline" href={BIZ.phoneHref}>
              {BIZ.phone}
            </a>
            .
          </Reveal>
        </div>
      </section>

      {/* Golf shop + scorecard */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto grid max-w-wrap items-start gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <div className="label">The Golf Shop</div>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Gear up in the clubhouse
            </h2>
            <p className="mt-5 text-paper/85">
              All the service, selection, and top-name brands you depend on —
              clothing, hats and accessories from{" "}
              <strong>Travis Matthew, Adidas, Straight Down, FootJoy,</strong>{" "}
              and <strong>Asics</strong>, with Cleveland/Srixon rental clubs. At
              our unique Australian Outback-style clubhouse, a center grass
              courtyard and beautiful views are perfect for drinks and lunch at
              the turn or after your round.
            </p>
            <a href={LINKS.shop} target="_blank" rel="noopener" className="btn-gold mt-7">
              Gift cards &amp; more
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="label">Scorecard</div>
            <Image
              src="/photos/scorecard.jpg"
              alt="Hunter Ranch Golf Course scorecard — par 72, 6,744 yards"
              width={1200}
              height={800}
              className="mt-3 w-full rounded-2xl border border-paper/10 bg-paper object-contain"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
