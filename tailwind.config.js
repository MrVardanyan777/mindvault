/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      },
      colors: {
        'black': '#151515',
        'lightgray': '#3c5252',
        'dirtygreen': '#64908f',
        'lightblue': '#8ccecc'
      }, 
      screens: {
        'xs': { 'max': '600px'},
        'sm': { 'max': '750px'},
        'md': { 'max': '900px' },
        'lg': { 'max': '1100px'}
      }
    },
  },
  plugins: [],
}
