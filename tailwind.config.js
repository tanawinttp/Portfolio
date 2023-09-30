/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Caveat' : ['Caveat Brush', 'cursive'],
      'Mogra' : ['Mogra', 'cursive'],
    },
    extend: {},
    colors: {
      bodycolor : '#12486B',
      navcolor: '#78D6C6',
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      "light",
    ],
  },
}

