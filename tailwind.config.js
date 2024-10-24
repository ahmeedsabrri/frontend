/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Roboto' : ['Roboto', 'sans-serif'],
        'Outfit' : ['Outfit']
      },
      backgroundImage :{
        'tennis-bro' : "url('/src/assets/tennis-bro.svg')",
        'intra-42' : "url('/src/assets/42_Logo.png')",
      }
    },
  },
  plugins: [],
}