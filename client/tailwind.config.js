/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#171717",
        secondary: "#292929",
        third : "#1F1F1F",
        gray3rd : "#212121",

      }
    },
  },
  plugins: [],
}