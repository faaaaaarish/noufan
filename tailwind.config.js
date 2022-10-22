/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "org-blue-1": "#020957",
        "org-gray-1": "#41535d",
      },
      screens: {
        ...defaultTheme.screens,
        xs: { max: "744px" },
      },
    },
  },
  plugins: [],
};
