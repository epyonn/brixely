/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    colors: {
      'blue' : '#ff49db',
      'custom-gradient': 'linear-gradient(to bottom, #1fb6ff, #7e5bef)'

    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #1fb6ff, #7e5bef)'
      }
    },
  },
  plugins: [],
}

