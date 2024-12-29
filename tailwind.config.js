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
        'black-transparrent': 'rgba(0, 0, 0, 0.8)',
      },
      height: {
        '1/3-screen': '40vh',
      },
      boxShadow: {
        'rounded': '0 4px 6px rgba(0, 0, 0, 0.5)',
      },
      zIndex: {
        'absolut': '100',
      }
    },
  },
  plugins: [],
}

