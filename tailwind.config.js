/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
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
    require('@tailwindcss/typography')
  ],
}

