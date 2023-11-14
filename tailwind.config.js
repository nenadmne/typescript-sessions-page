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
        "header-pink": "#cebfe7",
        "header-link": "#c6a8f5",
      },
      fontSize: {
        sm: "0.85rem",
        base: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5rem",
      },
    },
  },
  plugins: [],
};
