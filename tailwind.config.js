/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paragraph: "#D0D6F9",
      },
    },
    fontFamily: {
      heading: ["Bellefair", "serif"],
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      // media for extra large monitors

      hr: { max: "1448px" },
      // => @media (max-width: 1448px) { ... }
      // media for navigation line

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: [
        { max: "1023px" },
        {
          raw: "(min-height: 1300px)",
          min: "1000px",
          raw: "(orientation: portrait)",
        },
      ],
      // => @media (max-width: 1023px) { ... }
      // all double columns brake into one

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "665px" },

      xs: { max: "400px" },
    },
  },
  plugins: [],
};
