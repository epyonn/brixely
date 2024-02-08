const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  darkMode: "class",

  theme: {
    colors: {
      'blue' : '#ff49db',



    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #D1D3E2 2%, #FFFFFF 90%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), require("@tailwindcss/aspect-ratio"), addVariablesForColors
  ],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}