/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        accent: ["Quintessential", "serif"],
        quintessential: ["Quintessential", "serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#5f0404",
          soft: "#ac0404",
          muted: "#9e4343",
        },
        ink: "#1a1a1a",
        muted: "#5c5c5c",
        surface: {
          DEFAULT: "#f7f5f3",
          elevated: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
