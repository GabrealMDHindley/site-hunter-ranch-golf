"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";

const ContourTerrain = dynamic(() => import("./three/ContourTerrain"), {
  ssr: false,
  loading: () => null,
});

/** Ambient elevation-contour 3D layer. Skipped entirely under reduced motion;
 *  the section's gradient background is the no-WebGL/loading fallback. */
export default function HeroCanvas() {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <div className="absolute inset-0 -z-0 opacity-70" aria-hidden>
      <ContourTerrain />
    </div>
  );
}
