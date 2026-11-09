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
          blue: "#303181",
          yellow: "#EFE10F",
          red: "#F73C4A",
          neutral: "#F5F8FC",
          "neutral-dark": "#E8EDF5",
          "neutral-darker": "#DDE5F0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
