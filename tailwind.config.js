/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        "ClashDisplay-Bold": ["ClashDisplay-Bold", "sans"],
        "ClashDisplay-Semibold": ["ClashDisplay-Semibold", "sans"],
        "ClashDisplay-Medium": ["ClashDisplay-Medium", "sans"],
        "ClashDisplay-Regular": ["ClashDisplay-Regular", "sans"],
        "ClashDisplay-Light": ["ClashDisplay-Light", "sans"],
        "ClashDisplay-Extralight": ["ClashDisplay-Extralight", "sans"],
        montserrat: ["Montserrat", "sans"],
        unica: ["Unica One", "cursive"],
        "MADE-TOMMY": ["MADE-TOMMY-Medium-Outline.otf", "sans"],
      },
      colors: {
        primary: "#D434FE",
        secondary: "#903AFF",
        wallpaper: "#150E28",
        gradient: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
      },
      linearGradientColors: {
        custom: "90deg, #903AFF 3.08%, #FF26B9 93.85%",
        "gradient-button":
          "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
      },
    },
  },
  plugins: [],
};

