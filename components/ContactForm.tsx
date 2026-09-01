"use client";

import { useState } from "react";
import { BIZ } from "@/lib/site";

type State = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-2xl border border-fairway/40 bg-surface p-8 text-center">
        <div className="font-display text-2xl font-semibold text-gold">Thank you!</div>
        <p className="mt-2 text-muted">
          Your message is on its way. For anything urgent, call us at{" "}
          <a className="text-gold hover:underline" href={BIZ.phoneHref}>
            {BIZ.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="label !text-muted">
            Name
          </label>
          <input id="cf-name" name="name" required autoComplete="name" className="mt-2 w-full rounded-lg border border-paper/15 bg-surface px-4 py-3 text-paper placeholder:text-muted/60 focus:border-gold focus:outline-none" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="cf-email" className="label !text-muted">
            Email
          </label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className="mt-2 w-full rounded-lg border border-paper/15 bg-surface px-4 py-3 text-paper placeholder:text-muted/60 focus:border-gold focus:outline-none" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="cf-phone" className="label !text-muted">
            Phone
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className="mt-2 w-full rounded-lg border border-paper/15 bg-surface px-4 py-3 text-paper placeholder:text-muted/60 focus:border-gold focus:outline-none" placeholder="(805) 555-0100" />
        </div>
        <div>
          <label htmlFor="cf-interest" className="label !text-muted">
            I&apos;m interested in
          </label>
          <select id="cf-interest" name="interest" defaultValue={defaultInterest ?? "tee-times"} className="mt-2 w-full rounded-lg border border-paper/15 bg-surface px-4 py-3 text-paper focus:border-gold focus:outline-none">
            <option value="tee-times">Tee times</option>
            <option value="outing-event">Group outing / tournament</option>
            <option value="players-club">Players Club membership</option>
            <option value="restaurant">The Bar &amp; Grill</option>
            <option value="lessons">Lessons &amp; clinics</option>
            <option value="other">Something else</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="label !text-muted">
          Message
        </label>
        <textarea id="cf-message" name="message" rows={5} required className="mt-2 w-full rounded-lg border border-paper/15 bg-surface px-4 py-3 text-paper placeholder:text-muted/60 focus:border-gold focus:outline-none" placeholder="Tell us about your visit, group, or question…" />
      </div>
      <input type="hidden" name="source" value="hunterranchgolf-website" />
      {state === "error" && (
        <p role="alert" className="text-sm text-red-400">
          Something went wrong sending your message — please call us at{" "}
          <a className="underline" href={BIZ.phoneHref}>
            {BIZ.phone}
          </a>
          .
        </p>
      )}
      <button type="submit" disabled={state === "sending"} className="btn-gold disabled:opacity-60">
        {state === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
