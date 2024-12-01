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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        avenir: [
          "var(--font-geist-avenir)",
          "var(--font-geist-mono)",
          "var(--font-sans)",
        ],
        mono: [
          "var(--font-geist-mono)",
          "var(--font-geist-avenir)",
          "var(--font-mono)",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
