import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#0B1020",
        ocean: "#115EBC",
        aqua: "#18B6A4",
        saffron: "#F97316",
        orchid: "#8B5CF6",
        mint: "#B8F3D4"
      },
      boxShadow: {
        glow: "0 18px 70px rgba(17, 94, 188, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
