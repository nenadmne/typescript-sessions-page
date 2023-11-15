/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
      },
      colors: {
        "light-purple": "#c7b0ee",
        "lighter-purple": "#eae3f6",
        grey: "#5a5563",

        "header-pink": "#cebfe7",
        "header-link": "#c6a8f5",

        "homepage-h": "#c7b0ee",
        "homepage-p": "#d5cbe7",

        "session-time": "#b6adc5",
        "session-header": "#e1d8f0",

        "sessions-h": "#bba4de",
        "sessions-h-p": "#b6adc5",

        "btn-bg": "#b68ef7",
        "btn-txt": "#0a0218",
        "btn-act": "#a16cf7"
      },
      fontSize: {
        sm: "0.85rem",
        base: "1rem",
        l: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
        xxl: "2.5rem",
        "4xl": "4rem",
        "5xl": "5rem",
      },
      maxWidth: {
        "60rem": "60rem",
      },
      keyframes: {
        "fade-slide-down": {
          "0%": { opacity: 0, transform: "translateY(-1rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-down": "fade-slide-down 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
