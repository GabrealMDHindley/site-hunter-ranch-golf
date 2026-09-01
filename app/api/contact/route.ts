import { NextResponse } from "next/server";

/**
 * CRM-ready contact endpoint. Set CRM_WEBHOOK_URL in Vercel (e.g. a
 * GoHighLevel inbound-webhook URL) and every submission is forwarded there as
 * JSON: { name, email, phone, interest, message, source, page, submittedAt }.
 * Until the env var is set, submissions are accepted and logged so the form
 * UX works end-to-end.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid-json" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing-fields" }, { status: 400 });
  }

  const payload = {
    name,
    email,
    phone: String(body.phone ?? "").trim(),
    interest: String(body.interest ?? "").trim(),
    message,
    source: String(body.source ?? "hunterranchgolf-website"),
    page: req.headers.get("referer") ?? "",
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.CRM_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`crm-${res.status}`);
      return NextResponse.json({ ok: true, delivered: "crm" });
    } catch (err) {
      console.error("CRM webhook delivery failed:", err);
      return NextResponse.json({ ok: false, error: "crm-delivery-failed" }, { status: 502 });
    }
  }

  console.log("Contact submission (no CRM_WEBHOOK_URL configured):", payload);
  return NextResponse.json({ ok: true, delivered: "log" });
}
