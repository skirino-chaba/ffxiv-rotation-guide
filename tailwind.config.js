/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ffxiv: {
          bg: "#1a1a2e",
          surface: "#16213e",
          accent: "#0f3460",
          highlight: "#e94560",
          gold: "#d4a843",
          gcd: "#4a9eff",
          ogcd: "#ff6b4a",
          soul: "#e94560",
          shroud: "#7b68ee",
          text: "#e0e0e0",
          muted: "#8892b0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
