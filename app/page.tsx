import Image from "next/image";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import Reveal from "@/components/Reveal";
import Stat from "@/components/Stat";
import VideoSection from "@/components/VideoSection";
import { BIZ, HOURS, LINKS, PRAISE, STATS } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <Image
          src="/photos/clubhouse-hill.jpg"
          alt="The Hunter Ranch clubhouse on its hilltop above the 18th green at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
        <HeroCanvas />
        <div className="relative z-10 mx-auto w-full max-w-wrap px-5 pb-20 pt-40">
          <Reveal>
            <div className="label">Paso Robles, California · Est. 1994</div>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.02] sm:text-7xl lg:text-8xl">
              Small town charm.
              <br />
              <span className="text-gold">World class golf.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-paper/85">
              An 18-hole championship course atop the highest point in Paso
              Robles — century-old oaks, natural lakes, vineyard views, and no
              homes in sight.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={LINKS.teeTimes} target="_blank" rel="noopener" className="btn-gold">
                Book a Tee Time
              </a>
              <Link href="/course" className="btn-ghost">
                Explore the Course
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro + stats */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal>
            <div className="label">A Golfer&apos;s Delight on California&apos;s Central Coast</div>
            <p className="mt-6 max-w-3xl font-display text-2xl font-normal leading-relaxed text-paper/95 sm:text-[1.7rem]">
              The greens putt fast and smooth, and pristine fairways lined with
              century-old oak trees, natural lakes, and native grasses await
              your tee shots. The big city congestion is miles away.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-10 border-y border-paper/10 py-10 lg:grid-cols-4">
            {STATS.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} suffix={s.suffix} decimals={s.decimals ?? 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Signature gallery */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="label">The Course</div>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
                Eighteen holes through oaks, lakes &amp; vineyards
              </h2>
            </div>
            <Link href="/course" className="btn-ghost">
              Course details
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <Reveal className="sm:col-span-2">
              <Image
                src="/photos/lake-bridge.jpg"
                alt="Green guarded by a natural lake and white bridge at Hunter Ranch"
                width={1000}
                height={750}
                className="h-full w-full rounded-2xl border border-paper/10 object-cover"
                sizes="(min-width: 640px) 66vw, 100vw"
              />
            </Reveal>
            <div className="grid gap-5">
              <Reveal delay={0.1}>
                <Image
                  src="/photos/twin-oaks-green.jpg"
                  alt="Undulating green framed by twin century-old blue oaks"
                  width={1000}
                  height={750}
                  className="w-full rounded-2xl border border-paper/10 object-cover"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </Reveal>
              <Reveal delay={0.2}>
                <Image
                  src="/photos/tee-view.jpg"
                  alt="View from the tee across oak-lined fairways to the hilltop clubhouse"
                  width={750}
                  height={1000}
                  className="max-h-64 w-full rounded-2xl border border-paper/10 object-cover object-bottom"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Flyover video slot — appears automatically once the video is delivered */}
      <VideoSection
        subjectSlug="course"
        family="flyover"
        label="From the Air"
        title="The course from above"
        blurb="Tour Hunter Ranch the way the hawks see it — a cinematic aerial pass over the oaks, lakes, and rolling fairways of Paso Robles wine country."
        fallbackPoster="/photos/vineyard-vista.jpg"
      />

      {/* Praise */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal>
            <div className="label">What players say</div>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PRAISE.map((p, i) => (
              <Reveal key={p.source} delay={i * 0.12}>
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-paper/10 bg-surface p-7">
                  <blockquote className="font-display text-lg leading-relaxed text-paper/95">
                    “{p.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {p.source}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant teaser */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto grid max-w-wrap items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <Image
              src="/photos/porch-dining.jpg"
              alt="Covered porch dining at The Hunter Ranch Bar & Grill overlooking the course"
              width={1200}
              height={801}
              className="w-full rounded-2xl border border-paper/10 object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="label">The Hunter Ranch Bar &amp; Grill</div>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
              Breakfast &amp; lunch with a vineyard view
            </h2>
            <p className="mt-5 text-muted">
              Golfers and non-golfers alike are welcome for a great meal and
              majestic views of rolling hills, vineyards, and the golf course —
              plus an outstanding selection of handcrafted beers and cocktails.
              Serving seven days a week.
            </p>
            <ul className="mt-6 space-y-1.5 text-sm text-paper/85">
              <li>Mon–Thu · 8am–5pm (breakfast till 11)</li>
              <li>Fri–Sun · 7am–5pm (breakfast till 11)</li>
            </ul>
            <Link href="/restaurant" className="btn-gold mt-7">
              See the menu
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Outings teaser */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal className="rounded-3xl border border-paper/10 bg-gradient-to-br from-raised to-surface p-10 sm:p-14">
            <div className="label">Tournaments &amp; Group Outings</div>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-5xl">
              The Central Coast&apos;s best golf event venue
            </h2>
            <p className="mt-5 max-w-2xl text-muted">
              Formats, scorecards, cart signs, specialty holes, calligraphy
              scoreboards, and custom catering — our team runs your whole event.
              Book up to a year in advance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/events" className="btn-gold">
                Plan an outing
              </Link>
              <Link href="/specials" className="btn-ghost">
                Specials &amp; packages
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact strip */}
      <section className="border-t border-paper/10 bg-surface py-14">
        <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-6 px-5">
          <div>
            <div className="font-display text-2xl font-semibold">{BIZ.name}</div>
            <div className="mt-1 text-sm text-muted">
              {BIZ.address} ·{" "}
              <a className="text-gold hover:underline" href={BIZ.phoneHref}>
                {BIZ.phone}
              </a>
            </div>
          </div>
          <div className="text-sm text-muted">
            Golf Shop {HOURS[0].value} · Office {HOURS[3].value}
          </div>
          <a href={LINKS.teeTimes} target="_blank" rel="noopener" className="btn-gold">
            Book a Tee Time
          </a>
        </div>
      </section>
    </>
  );
}
