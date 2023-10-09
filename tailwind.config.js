/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Caveat: ["Caveat Brush", "cursive"],
      Mogra: ["Mogra", "cursive"],
    },
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(18rem, 1fr))",
      },
    },
    colors: {
      bodycolor: "#12486B",
      navcolor: "#78D6C6",
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
};
