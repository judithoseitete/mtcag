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
          red: "#f73c4a",
          neutral: "#f5f4f2",
          gray: "#353533",
          yellow: "#efe10f",
          blue: "#303181",
        },
      },
    },
  },
  plugins: [],
};
export default config;
