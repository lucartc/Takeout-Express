/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,ts,jsx,tsx,html,js}"],
  theme: {
    extend: {
      'backgroundImage': {
        'background': 'linear-gradient(#A60000,#750000);',
      },
      'colors':{
        'dark': '#222222'
      }
    },
  },
  plugins: [],
}