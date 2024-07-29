/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#242C4C', // Custom primary color
        secondary: '#394575', // Custom secondary color
        tertiary: '#FF8861', // Custom terrtiary color
        accent: '#FE62A2', // Custom accent color
        light: '#E7E9F3', // Custom white for text
      },
    },
  },
  plugins: [],
}