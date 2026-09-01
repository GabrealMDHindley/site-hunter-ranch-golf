import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://site-hunter-ranch-golf.vercel.app";
  return ["", "/course", "/rates", "/restaurant", "/events", "/specials", "/contact"].map(
    (p) => ({ url: `${base}${p}`, lastModified: new Date() })
  );
}
