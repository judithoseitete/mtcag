import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "var(--brand-blue)",
          yellow: "var(--brand-yellow)",
          red: "var(--brand-red)",
          neutral: "var(--brand-neutral)",
          "neutral-dark": "var(--brand-neutral-dark)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
