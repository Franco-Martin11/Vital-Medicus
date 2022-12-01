/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Abel", "sans-serif"],
      heading: ["ABeeZee", "serif"],
    },
    colors: {
      darkViolet: "#4c3669",
      lightViolet: "#9472c0",
      pinkChicle: "#d82e4c",
    },
  },
  plugins: [],
};
