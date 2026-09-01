import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import {
  LINKS,
  RANGE_BALLS,
  RANGE_KEYS,
  RATES_MEMBER,
  RATES_MEMBER_CART,
  RATES_NON_MEMBER,
  RATES_RENTALS,
  type RateRow,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Rates & Membership",
  description:
    "Hunter Ranch Golf Course rates: non-member green fees (cart included), Players Club member rates, rental clubs, and driving-range pricing in Paso Robles, CA.",
};

function RateTable({
  caption,
  colA,
  colB,
  rows,
}: {
  caption: string;
  colA: string;
  colB?: string;
  rows: RateRow[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-paper/10 bg-surface">
      <table className="rate-table w-full border-collapse">
        <caption className="px-4 pb-1 pt-5 text-left font-display text-xl font-semibold text-paper">
          {caption}
        </caption>
        <thead>
          <tr>
            <th scope="col">Rate</th>
            <th scope="col" className="!text-right">
              {colA}
            </th>
            {colB && (
              <th scope="col" className="!text-right">
                {colB}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.item}>
              <td>
                {r.item}
                {r.note && <div className="mt-0.5 text-xs text-muted">{r.note}</div>}
              </td>
              <td className="num">{r.a}</td>
              {colB && <td className="num">{r.b ?? "—"}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function RatesPage() {
  return (
    <>
      <section className="pt-36 pb-12 sm:pt-44">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal>
            <div className="label">Rates &amp; Membership</div>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">Play Hunter Ranch</h1>
            <p className="mt-5 max-w-2xl text-lg text-paper/85">
              All non-member rates include cart. Please call the Pro Shop for
              seasonal Twilight and Late Bird times.
            </p>
            <a href={LINKS.teeTimes} target="_blank" rel="noopener" className="btn-gold mt-7">
              Book a Tee Time
            </a>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-wrap gap-8 px-5 lg:grid-cols-2">
          <Reveal>
            <RateTable caption="Non-Member Golf Rates" colA="Mon – Thu" colB="Fri – Sun & Holidays" rows={RATES_NON_MEMBER} />
          </Reveal>
          <Reveal delay={0.1}>
            <RateTable caption="Rental Clubs" colA="Price" rows={RATES_RENTALS} />
          </Reveal>
          <Reveal delay={0.15}>
            <RateTable caption="Players Club Golf Rates" colA="Mon – Fri" colB="Sat – Sun & Holidays" rows={RATES_MEMBER} />
          </Reveal>
          <Reveal delay={0.2}>
            <RateTable caption="Players Club Cart Fees" colA="Mon – Fri" colB="Sat – Sun & Holidays" rows={RATES_MEMBER_CART} />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-wrap gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <div className="label">Practice Range</div>
            <h2 className="mt-3 font-display text-3xl font-semibold">Range balls</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-paper/10 bg-ink">
              <table className="rate-table w-full border-collapse">
                <thead>
                  <tr>
                    <th scope="col">Bucket</th>
                    <th scope="col">Approx. balls</th>
                    <th scope="col" className="!text-right">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {RANGE_BALLS.map((r) => (
                    <tr key={r.size}>
                      <td>{r.size}</td>
                      <td>{r.amount}</td>
                      <td className="num">{r.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">*Approximate amounts.</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="label">Players Club Members Only</div>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Driving-range key enhancement
            </h2>
            <p className="mt-4 text-paper/85">
              The most economical way to work on your game:
            </p>
            <ul className="mt-5 space-y-3">
              {RANGE_KEYS.map((k) => (
                <li key={k.paid} className="flex items-center justify-between rounded-xl border border-paper/10 bg-ink px-5 py-4">
                  <span className="text-paper/85">{k.paid} paid</span>
                  <span aria-hidden className="text-muted">
                    →
                  </span>
                  <span className="font-semibold tabular-nums text-gold">{k.loaded} loaded on your range key</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-fairway/40 bg-ink p-7">
              <h3 className="font-display text-xl font-semibold text-gold">
                Join the Players Club
              </h3>
              <p className="mt-2 text-sm text-paper/85">
                Member green fees from $51, cart fees from $16, earlier twilight
                windows, walking rates, and range-key bonuses. All member rates
                include cart options — ask any of our friendly staff, or
                purchase online.
              </p>
              <a href={LINKS.shop} target="_blank" rel="noopener" className="btn-gold mt-5">
                Purchase membership
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
