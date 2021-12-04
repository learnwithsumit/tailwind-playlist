const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.{html,js}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "540px",
      lg: "1000px",
      "4k": "2560px",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
