/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "390px",
      tablet: "768px",
      laptop: "1025px",
      desktop: "1440px"
    },
    extend: {}
  },
  plugins: []
};
