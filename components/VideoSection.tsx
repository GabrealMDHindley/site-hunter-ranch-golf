import { existsSync } from "node:fs";
import path from "node:path";
import Reveal from "./Reveal";
import VideoPlayer from "./VideoPlayer";

/**
 * Studio video-slot contract: renders ONLY when the video file exists at
 * public/videos/<subjectSlug>/<family>.mp4. The video agents deliver the mp4 +
 * poster and push — the section appears on the next deploy, no code edit.
 */
export default function VideoSection({
  subjectSlug,
  family,
  label,
  title,
  blurb,
  fallbackPoster,
}: {
  subjectSlug: string;
  family: "flyover" | "walkthrough";
  label: string;
  title: string;
  blurb: string;
  fallbackPoster?: string;
}) {
  const base = path.join(process.cwd(), "public", "videos", subjectSlug);
  const hasVideo = existsSync(path.join(base, `${family}.mp4`));
  if (!hasVideo) return null;

  const posterFile = `poster-${family}.jpg`;
  const poster = existsSync(path.join(base, posterFile))
    ? `/videos/${subjectSlug}/${posterFile}`
    : fallbackPoster;

  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-wrap px-5">
        <Reveal>
          <div className="label">{label}</div>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-muted">{blurb}</p>
        </Reveal>
        <Reveal delay={0.15} className="mt-10">
          <VideoPlayer src={`/videos/${subjectSlug}/${family}.mp4`} poster={poster} title={title} />
        </Reveal>
      </div>
    </section>
  );
}
