/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'reqular': ['Euclid-Reqular','ui-sans-serif', 'system-ui'],
      'medium': ['Euclid-Medium','ui-sans-serif', 'system-ui'],
      'bold': ['Euclid-Bold','ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors : {
        orange : '#f97316',
        red : '#ef4444'
      }
    },
  },
  plugins: [],
}
