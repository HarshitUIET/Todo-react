/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightpink: '#AD168C',
        bgblack : '#030303',
        lightBlue: '#2734C2',
        lightgrey: '#CACACA'
      },
    },
  },
  plugins: [],
}
