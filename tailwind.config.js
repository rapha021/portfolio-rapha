/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "400px",
        md: "600px",
        mdPlus: "800px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
