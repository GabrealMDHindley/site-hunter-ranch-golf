"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Silent cinematic video: muted autoplay when scrolled into view;
 *  click-to-play from poster under prefers-reduced-motion. */
export default function VideoPlayer({
  src,
  poster,
  title,
}: {
  src: string;
  poster?: string;
  title: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().then(() => setStarted(true)).catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-paper/10 bg-surface shadow-2xl">
      <video
        ref={ref}
        className="aspect-video w-full"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label={title}
      />
      {reduced && !started && (
        <button
          type="button"
          className="absolute inset-0 grid place-items-center bg-ink/40"
          onClick={() => {
            ref.current?.play();
            setStarted(true);
          }}
        >
          <span className="btn-gold">▶ Play video</span>
        </button>
      )}
    </div>
  );
}
