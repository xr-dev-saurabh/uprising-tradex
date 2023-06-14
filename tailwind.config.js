/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto"],
      },
    },
    screens: {
      sm: "640px",
      // Add your custom screen size here
      custom: { max: "640px" },
    },
  },
  plugins: [],
};
