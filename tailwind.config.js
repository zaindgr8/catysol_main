/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "7xl": "0.5rem", // Custom size
        "8xl": "6rem", // Another custom size
      },
    },
  },
  plugins: [],
};
