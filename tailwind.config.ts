import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#060D0C",
        surface: "#0D1615",
        accent: "#1CBA9D",
        "accent-soft": "#1CBA9D33",
        card: "#D9D9D9",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        comic: ["Comic Relief", "cursive", "sans-serif"], // Font khusus komik
      },
      maxWidth: {
        page: "1440px",
      },
      spacing: {
        "page-pad": "90px",
      },
    },
  },
  plugins: [],
};
export default config;
