const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.{html,js}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        light: "#f5f5f5",
        DEFAULT: "#f6f6f6",
        dark: "#a5a5a5",
      },
    },
    extend: {
      screens: {
        sm: "540px",
        lg: "1000px",
        "4k": "2560px",
      },
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
