const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      
    },
    fontFamily: {
      
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
