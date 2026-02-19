import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF5C00",
          "orange-dark": "#E05000",
          "orange-light": "#FFF0E6",
          dark: "#111111",
          cyan: "#00C2FF",
          "cyan-light": "#E6F9FF",
          green: "#00D26A",
          "green-light": "#E6FAF0",
          surface: "#F7F8FA",
          border: "#E5E7EB",
          text: "#1A1A1A",
          "text-light": "#6B7280",
        },
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
