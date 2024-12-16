/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
        'montserrat': ['Montserrat', 'sans'],
      },
      colors: {
        'main': '#003D81',
      },
    },
  },
  plugins: [],
}

