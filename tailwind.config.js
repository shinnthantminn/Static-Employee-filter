const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#effafa',
          200: '#5ba4a4',
          300: '#eef6f6',
          400: '#7b8e8e',
          500: '	#2c3a3a',
        },
      },
    },
  },
  plugins: [],
}
