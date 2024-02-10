const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

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
      },

    },
  },
  plugins: [
    require('@tailwindcss/typography'),

    function ({ addBase, theme }) {
      const allColors = theme("colors");
      const newVars = Object.fromEntries(
        Object.entries(allColors).flatMap(([color, colorValue]) => {
          if(typeof colorValue === 'object' && colorValue !== null) {
            return Object.entries(colorValue).map(([shade, hexValue]) => [
              `--${color}-${shade}`, hexValue
            ]);
          } else {
            return [[`--${color}`, colorValue]];
          }
        })
      );
      addBase({
        ":root": newVars
      });
    }
  ],
}

