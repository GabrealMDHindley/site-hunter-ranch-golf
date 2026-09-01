import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Brand tokens (mirrors :root in globals.css) — literal values so
      // Tailwind opacity modifiers like border-paper/30 work.
      colors: {
        ink: "#0b100d",
        surface: "#131a15",
        raised: "#1b241d",
        paper: "#f2efe6",
        muted: "#a8b0a4",
        gold: "#c9a227",
        fairway: "#3e7c4f",
        timber: "#7c4a32",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
