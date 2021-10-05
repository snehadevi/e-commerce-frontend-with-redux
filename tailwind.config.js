const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
      },
      borderWidth: {
        100: "100px",
        500: "500px",
        400: "400px",
      },
      height: {
        500: "500px",
        400: "400px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
